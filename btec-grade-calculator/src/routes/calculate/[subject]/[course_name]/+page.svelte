<script lang="ts">
    import { enhance } from '$app/forms';
    import { tick } from 'svelte';
    import { getModalStore, type ModalStore } from '@skeletonlabs/skeleton';
    import type { GradesCalculation, InputGrade } from '$lib/calculator/models';
    import { getPointsToGradeMap } from '$lib/calculator/grades';

    const modalStore: ModalStore = getModalStore();

    type CourseUnits = {
        courseType: string;
        mandatoryUnits: string[];
        optionalUnits: string[];
        optionalUnitCount: number;
    };

    type OptionalSelection = {
        unitName: string;
        grade: InputGrade;
    };

    type FormState = {
        mandatoryGrades: Record<string, InputGrade>;
        optionalSelections: OptionalSelection[];
    };

    type CalculationFormResponse = {
        gradeCalculationResult?: GradesCalculation;
        validationFailure?: {
            title: string;
            message: string;
        };
        formState?: FormState;
    };

    export let data: {
        course_unit_data: CourseUnits;
        subject?: string;
        savedCalculation?: {
            formState: FormState;
            result: GradesCalculation;
        };
    };
    export let form: CalculationFormResponse | undefined;

    const courseUnitData = data.course_unit_data;
    const subject = data.subject ?? '';
    const subjectTitle = subject.replaceAll('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    const courseSlug = courseUnitData.courseType.toLowerCase().replaceAll(' ', '-');
    const gradeOptions: Array<{ value: InputGrade; label: string }> = [
        { value: 'DISTINCTION', label: 'Distinction' },
        { value: 'MERIT', label: 'Merit' },
        { value: 'PASS', label: 'Pass' },
        { value: 'NEAR_PASS', label: 'Near Pass' },
        { value: 'UNCLASSIFIED', label: 'Unclassified' },
        { value: 'NOT_MARKED', label: 'This unit is not marked' }
    ];

    const initialFormState: FormState | undefined = form?.formState ?? data.savedCalculation?.formState;
    let mandatoryGrades: Record<string, InputGrade> = { ...(initialFormState?.mandatoryGrades ?? {}) };
    let optionalSelections: OptionalSelection[] = initialFormState?.optionalSelections
        ? [...initialFormState.optionalSelections]
        : Array.from({ length: courseUnitData.optionalUnitCount }).map(() => ({
            unitName: '',
            grade: 'NOT_MARKED' as InputGrade
        }));

    while (optionalSelections.length < courseUnitData.optionalUnitCount) {
        optionalSelections.push({ unitName: '', grade: 'NOT_MARKED' });
    }
    for (const unitName of courseUnitData.mandatoryUnits) {
        if (!mandatoryGrades[unitName]) {
            mandatoryGrades[unitName] = 'NOT_MARKED';
        }
    }

    let latestCalculation: GradesCalculation | undefined =
        form?.gradeCalculationResult ?? data.savedCalculation?.result;

    let lastValidationMessage = '';
    let lastAppliedFormStateHash = '';

    $: if (form?.formState) {
        const nextHash = JSON.stringify(form.formState);
        if (nextHash !== lastAppliedFormStateHash) {
            mandatoryGrades = { ...form.formState.mandatoryGrades };
            optionalSelections = [...form.formState.optionalSelections];
            while (optionalSelections.length < courseUnitData.optionalUnitCount) {
                optionalSelections.push({ unitName: '', grade: 'NOT_MARKED' });
            }
            for (const unitName of courseUnitData.mandatoryUnits) {
                if (!mandatoryGrades[unitName]) {
                    mandatoryGrades[unitName] = 'NOT_MARKED';
                }
            }
            lastAppliedFormStateHash = nextHash;
        }
    }

    $: if (form?.gradeCalculationResult) {
        latestCalculation = form.gradeCalculationResult;
    }

    $: if (form?.validationFailure) {
        const validationMessage = `${form.validationFailure.title}:${form.validationFailure.message}`;
        if (validationMessage !== lastValidationMessage) {
            modalStore.trigger({
                type: 'alert',
                title: form.validationFailure.title,
                body: form.validationFailure.message
            });
            lastValidationMessage = validationMessage;
        }
    }

    let calculatorForm: HTMLFormElement | undefined;
    const submitCalculation = async () => {
        await tick();
        calculatorForm?.requestSubmit();
    };

    const enhanceCalculationForm = () => {
        return async ({ update }: { update: (options?: { reset?: boolean; invalidateAll?: boolean }) => Promise<void> }) => {
            await update({ reset: false, invalidateAll: false });
        };
    };

    const availableOptionalUnits = (index: number): string[] => {
        const selectedByOthers = new Set(
            optionalSelections
                .filter((_, otherIndex) => otherIndex !== index)
                .map((selection) => selection.unitName)
                .filter((unitName) => unitName.length > 0)
        );

        return courseUnitData.optionalUnits.filter((unitName) => {
            return unitName === optionalSelections[index].unitName || !selectedByOthers.has(unitName);
        });
    };

    type BoundaryRow = {
        points: number;
        grade: string;
        isCurrent: boolean;
    };

    const formatGrade = (gradeTokens: string[]): string => {
        return gradeTokens.join('');
    };

    let boundaryRows: BoundaryRow[] = [];
    let nextBoundaryMessage = '';

    $: {
        boundaryRows = [];
        nextBoundaryMessage = '';

        if (latestCalculation) {
            const pointsToGradeMap = getPointsToGradeMap(courseUnitData.courseType);
            if (pointsToGradeMap) {
                const currentPoints = latestCalculation.breakdown.points.current;
                const sortedThresholds = Array.from(pointsToGradeMap.keys()).sort((a, b) => a - b);
                const currentThreshold = [...sortedThresholds].reverse().find((threshold) => threshold <= currentPoints) ?? 0;

                const nextThreshold = sortedThresholds.find((threshold) => threshold > currentPoints);
                if (nextThreshold !== undefined) {
                    const pointsNeeded = nextThreshold - currentPoints;
                    const nextGrade = formatGrade((pointsToGradeMap.get(nextThreshold) ?? []).map((grade) => String(grade)));
                    nextBoundaryMessage = `${pointsNeeded} more qualification point${pointsNeeded === 1 ? '' : 's'} for ${nextGrade}`;
                } else {
                    nextBoundaryMessage = 'You are currently at the top available boundary.';
                }

                boundaryRows = [...sortedThresholds]
                    .reverse()
                    .map((threshold) => ({
                        points: threshold,
                        grade: formatGrade((pointsToGradeMap.get(threshold) ?? []).map((grade) => String(grade))),
                        isCurrent: threshold === currentThreshold
                    }));
            }
        }
    }

</script>

<svelte:head>
    <title>{subjectTitle} {courseUnitData.courseType} Grade Calculator | BTEC Grade Calculator</title>
    <meta name="description" content={`Calculate ${subjectTitle} ${courseUnitData.courseType} BTEC grades and UCAS points with live current, expected and maximum projections.`}/>
    <meta property="og:title" content={`${subjectTitle} ${courseUnitData.courseType} Grade Calculator | BTEC Grade Calculator`}/>
    <meta property="og:description" content={`Live grade and UCAS projection for ${subjectTitle} ${courseUnitData.courseType}.`}/>
    <meta property="og:url" content={`https://www.btecgradecalculator.com/calculate/${subject}/${courseSlug}`}/>
    <meta name="twitter:title" content={`${subjectTitle} ${courseUnitData.courseType} Grade Calculator`}/>
    <meta name="twitter:description" content={`Live grade and UCAS projection for ${subjectTitle} ${courseUnitData.courseType}.`}/>
</svelte:head>

<div class="container mx-auto px-4 md:px-8 py-8">
    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        <div class="text-center mt-2 mb-8">
            <p class="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Live calculator</p>
            <h2 class="pt-3 text-3xl md:text-5xl font-black tracking-tight">BTEC {courseUnitData.courseType}</h2>
            <p class="mt-3 text-slate-200">Results update automatically when you change any unit selection.</p>
        </div>

        <form method="POST" use:enhance={enhanceCalculationForm} bind:this={calculatorForm}>
            <div class="flex justify-center flex-col xl:flex-row gap-8">
                <div class="w-full">
                    <h3 class="mb-5 text-2xl font-bold tracking-tight">Mandatory Units</h3>
                    {#each courseUnitData.mandatoryUnits as unitName}
                        <div class="mb-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                            <p class="mb-3 text-base font-semibold">{unitName}</p>
                            <div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                                {#each gradeOptions as option}
                                    <label class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 cursor-pointer transition hover:bg-white/10">
                                        <input
                                            class="radio !border-white/40"
                                            type="radio"
                                            name={"mandatory:" + unitName}
                                            value={option.value}
                                            bind:group={mandatoryGrades[unitName]}
                                            on:change={submitCalculation}
                                        />
                                        <span>{option.label}</span>
                                    </label>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>

                {#if courseUnitData.optionalUnitCount > 0}
                    <div class="w-full">
                        <h3 class="mb-5 text-2xl font-bold tracking-tight">Optional Units</h3>
                        <p class="mb-4 text-slate-300 text-sm">
                            Selecting only an optional unit (with "This unit is not marked") may not change results until you add a marked grade.
                        </p>
                        {#each Array(courseUnitData.optionalUnitCount) as _, i}
                            <div class="mb-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                                <select
                                    class="select w-full mb-3 border-white/20 bg-black/30"
                                    name={"optional-unit-" + i}
                                    bind:value={optionalSelections[i].unitName}
                                    on:change={submitCalculation}
                                >
                                    <option value="">Select optional unit</option>
                                    {#each availableOptionalUnits(i) as unitName}
                                        <option value={unitName}>{unitName}</option>
                                    {/each}
                                </select>

                                <div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                                    {#each gradeOptions as option}
                                        <label class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 cursor-pointer transition hover:bg-white/10">
                                            <input
                                                class="radio !border-white/40"
                                                type="radio"
                                                name={"optional-grade-" + i}
                                                value={option.value}
                                                disabled={!optionalSelections[i].unitName}
                                                bind:group={optionalSelections[i].grade}
                                                on:change={submitCalculation}
                                            />
                                            <span>{option.label}</span>
                                        </label>
                                    {/each}
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
        </form>
    </div>

    {#if latestCalculation}
        {#key `${latestCalculation.currentGrade.grade}-${latestCalculation.expectedGrade.grade}-${latestCalculation.maximumGrade.grade}-${latestCalculation.breakdown.points.current}-${latestCalculation.breakdown.points.expected}-${latestCalculation.breakdown.points.maximum}`}
            <div class="grid gap-4 mt-6 md:grid-cols-3">
                <div class="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 shadow-xl p-5">
                    <h3 class="text-xl font-bold mb-3">Current Grade</h3>
                    <h6 class="text-base">Grade: {latestCalculation.currentGrade.grade}</h6>
                    <h6 class="text-base">Qualification Points: {latestCalculation.breakdown.points.current}</h6>
                    <h6 class="text-base">UCAS Points: {latestCalculation.currentGrade.ucasPoints}</h6>
                </div>
                <div class="rounded-2xl border border-fuchsia-300/30 bg-fuchsia-400/10 shadow-xl p-5">
                    <h3 class="text-xl font-bold mb-3">Expected Grade</h3>
                    <h6 class="text-base">Grade: {latestCalculation.expectedGrade.grade}</h6>
                    <h6 class="text-base">Qualification Points: {latestCalculation.breakdown.points.expected}</h6>
                    <h6 class="text-base">UCAS Points: {latestCalculation.expectedGrade.ucasPoints}</h6>
                </div>
                <div class="rounded-2xl border border-violet-300/30 bg-violet-400/10 shadow-xl p-5">
                    <h3 class="text-xl font-bold mb-3">Maximum Grade</h3>
                    <h6 class="text-base">Grade: {latestCalculation.maximumGrade.grade}</h6>
                    <h6 class="text-base">Qualification Points: {latestCalculation.breakdown.points.maximum}</h6>
                    <h6 class="text-base">UCAS Points: {latestCalculation.maximumGrade.ucasPoints}</h6>
                </div>
            </div>
        {/key}

        <div class="mt-6 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-400/10 p-4 shadow-xl">
            <p class="text-sm uppercase tracking-[0.16em] text-fuchsia-100/90">Next grade target</p>
            <p class="mt-2 text-base md:text-lg font-semibold text-white">{nextBoundaryMessage}</p>
        </div>

        <div class="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 shadow-xl">
            <h3 class="text-xl font-bold mb-3 tracking-tight">Grade boundaries</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead class="text-left text-slate-300 border-b border-white/10">
                    <tr>
                        <th class="py-2 pr-3">Grade</th>
                        <th class="py-2 pr-3">Qualification points</th>
                        <th class="py-2">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each boundaryRows as row}
                        <tr class={row.isCurrent ? 'bg-cyan-400/10 text-cyan-100' : 'text-slate-200'}>
                            <td class="py-2 pr-3 font-semibold">{row.grade}</td>
                            <td class="py-2 pr-3">{row.points}</td>
                            <td class="py-2">{row.isCurrent ? 'Your current boundary' : ''}</td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 shadow-xl">
            <h3 class="text-xl font-bold mb-3 tracking-tight">How your grade is calculated</h3>
            <p class="text-slate-100">
                We convert each selected unit grade into a coefficient, multiply by guided learning hours, and convert
                to points using:
                <code class="px-1 rounded bg-white/10">floor(coefficient × GLH ÷ 10)</code>.
            </p>
            <p class="mt-2 text-slate-200">
                We then compare total qualification points against the qualification thresholds for your course size.
            </p>
            <div class="mt-4 grid gap-3 md:grid-cols-3">
                <div class="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p class="font-semibold">Current</p>
                    <p>Qualification Points: {latestCalculation.breakdown.points.current}</p>
                    <p>Assumed coefficient for not marked units: {latestCalculation.breakdown.coefficients.current.toFixed(2)}</p>
                </div>
                <div class="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p class="font-semibold">Expected</p>
                    <p>Qualification Points: {latestCalculation.breakdown.points.expected}</p>
                    <p>Assumed coefficient for not marked units: {latestCalculation.breakdown.coefficients.expected.toFixed(2)}</p>
                </div>
                <div class="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p class="font-semibold">Maximum</p>
                    <p>Qualification Points: {latestCalculation.breakdown.points.maximum}</p>
                    <p>Assumed coefficient for not marked units: {latestCalculation.breakdown.coefficients.maximum.toFixed(2)}</p>
                </div>
            </div>
            <p class="mt-3 text-slate-300">
                Completed units: {latestCalculation.breakdown.completedUnits}/{latestCalculation.breakdown.totalUnits}
            </p>
        </div>
    {/if}
</div>

<script lang="ts">
    import {getModalStore, type ModalSettings, type ModalStore} from '@skeletonlabs/skeleton';
    import {goto} from "$app/navigation";

    const modalStore: ModalStore = getModalStore();

    const modal: ModalSettings = {
        type: 'alert',
        title: 'Invalid Unit Configuration',
        body: "Unit's may only be selected once."
    };

    interface CourseUnits {
        courseType: string;
        mandatoryUnits: string[];
        optionalUnits: string[];
        optionalUnitCount: number;
    }

    interface GradeCalculationResult {
        grade: string
        ucasPoints: string
    }

    interface GradesCalculationResult {
        currentGrade: GradeCalculationResult
        expectedGrade: GradeCalculationResult
        maximumGrade: GradeCalculationResult
    }

    interface validation_failure {
        title: string
        message: string
    }

    export let data: {
        course_unit_data: CourseUnits
    };
    const course_unit_data = data.course_unit_data;

    export let form: {
        gradeCalculationResult: GradesCalculationResult
        validationFailure: validation_failure
    };
    let grades_calculation_response: GradesCalculationResult = {
        currentGrade: {
            grade: "",
            ucasPoints: ""
        },
        expectedGrade: {
            grade: "",
            ucasPoints: ""
        },
        maximumGrade: {
            grade: "",
            ucasPoints: ""
        }
    }
    if (form) {
        if (form.validationFailure) {
            modalStore.trigger({
                type: 'alert',
                title: form.validationFailure?.title,
                body: form.validationFailure?.message
            });
        } else {
            grades_calculation_response = form.gradeCalculationResult
        }
    }
    function updateGradeSelectorValue(key: number) {
        console.log("settingGrades!")
        let select: HTMLElement | null = document.getElementById(String(key) + "unit");
        if (select instanceof HTMLSelectElement) {
            let gradeSelect: HTMLElement | null = document.getElementById(String(key) + "grade")
            gradeSelect?.setAttribute("name", select.value)
        }
    }

    function showExpectedGradeModal() {
        modalStore.trigger({
            type: 'alert',
            title: "What is expected grade?",
            body: "Your expected grade is the grade that our algorithms predict you will achieve, this is based on your previous performance and the relative difficulty of the remaining units"
        });
    }

    function showMaximumGradeModal() {
        modalStore.trigger({
            type: 'alert',
            title: "What is maximum grade?",
            body: "Your maximum grade is the grade you would achieve if you were to receive the highest possible grade for your remaining units."
        });
    }

    function showCurrentGradeModal() {
        modalStore.trigger({
            type: 'alert',
            title: "What is current grade?",
            body: "Your current grade is the grade you have achieved so far, based on your current grades."
        });
    }
</script>

<div>
    <div class="text-center mt-10">
        <h2 class="h2 font-extrabold">BTEC {course_unit_data.courseType} Grade Calculator</h2>
        <div class="text-right">
            <h4 class="h4 anchor mr-5"><a href="/faq">Need help?</a></h4>
        </div>
    </div>
    <div class="text-center overflow-y-auto">
        <form id="mandatoryUnits" method="POST">
            <div class="flex justify-center flex-col md:flex-row">
                <div class="">
                    <h3 class="h3 underline mb-5">Mandatory Units</h3>
                    {#each course_unit_data.mandatoryUnits as unit_name}
                        <div class="grid grid-cols-2 p-2.5">
                            <div class="text-left font-extrabold flex items-center">
                                <label for="{unit_name}">{unit_name}</label>
                            </div>
                            <div class="flex items-center">
                                <select id="{unit_name}" name="{unit_name}"
                                        class="bg-gray-50 ml-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Your Grade</option>
                                    <option value="DISTINCTION">Distinction</option>
                                    <option value="MERIT">Merit</option>
                                    <option value="PASS">Pass</option>
                                    <option value="NEAR_PASS">Near Pass</option>
                                    <option value="UNCLASSIFIED">Unclassified</option>
                                    <option value="PENDING">Pending</option>
                                </select>
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="">
                    <h3 class="h3 underline mb-5">Optional Units</h3>
                    {#each Array(course_unit_data.optionalUnitCount) as _, i}
                        <div class="grid grid-cols-2 p-2.5 items-center">
                            <div class="text-left">
                                <select id="{i}unit" on:input={() => updateGradeSelectorValue(i)}
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Your Unit</option>
                                    {#each course_unit_data.optionalUnits as unit_name}
                                        <option value="{unit_name}">{unit_name}</option>
                                    {/each}
                                </select>
                            </div>
                            <div>
                                <select id="{i}grade"
                                        class="mr-5 ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Your Grade</option>
                                    <option value="DISTINCTION">Distinction</option>
                                    <option value="MERIT">Merit</option>
                                    <option value="PASS">Pass</option>
                                    <option value="NEAR_PASS">Near Pass</option>
                                    <option value="PENDING">Pending</option>
                                    <option value="UNCLASSIFIED">Unclassified</option>
                                </select>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </form>
    </div>
    <div class="text-center m-5">
        <button type="submit" form="mandatoryUnits" class="btn btn-xl variant-filled">
            Calculate
        </button>
    </div>
    <div class="grid grid-cols-3 gap-4 ml-5 mr-5">
        <div class="bg-gray-700 p-4 rounded-lg shadow-md">
            <div class="flex items-center">
                <h3 class="h3 inline-block">Current Grade</h3>
                <button class="hidden md:block" on:click={showCurrentGradeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </button>
            </div>
            <div>
                <h6 class="h6">Grade: {grades_calculation_response.currentGrade.grade}</h6>
            </div>
            <div>
                <h6 class="h6">UCAS Points: {grades_calculation_response.currentGrade.ucasPoints}</h6>
            </div>
        </div>
        <div class="bg-gray-700 p-4 rounded-lg shadow-md">
            <div class="flex items-center">
                <h3 class="h3 inline-block">Expected Grade</h3>
                <button class="hidden md:block" on:click={showExpectedGradeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </button>
            </div>
            <div>
                <h6 class="h6">Grade: {grades_calculation_response.expectedGrade.grade}</h6>
            </div>
            <div>
                <h6 class="h6">UCAS Points: {grades_calculation_response.expectedGrade.ucasPoints}</h6>
            </div>
        </div>
        <div class="bg-gray-700 p-4 rounded-lg shadow-md inline-block">
            <div class="flex items-center">
                <h3 class="h3 inline-block">Maximum Grade</h3>
                <button class="hidden md:block" on:click={showMaximumGradeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </button>
            </div>
            <div>
                <h6 class="h6">Grade: {grades_calculation_response.maximumGrade.grade}</h6>
            </div>
            <div>
                <h6 class="h6">UCAS Points: {grades_calculation_response.maximumGrade.ucasPoints}</h6>
            </div>
        </div>
    </div>
</div>

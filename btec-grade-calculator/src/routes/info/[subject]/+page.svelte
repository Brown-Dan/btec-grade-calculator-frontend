<script lang="ts">
    export let data: {
        courses: Array<{
            courseType: string;
            guidedLearningHours: number;
            unitCount: number;
            description: string;
        }>;
        subject: string;
    };

    const subject = data.subject;
    const courses = data.courses;
    const toSlug = (value: string) => value.toLowerCase().replaceAll(" ", "-");
    const subjectTitle = subject.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
</script>

<svelte:head>
    <title>{subjectTitle} BTEC Course Guide | BTEC Grade Calculator</title>
    <meta name="description" content={`Need help deciding? Compare ${subjectTitle} BTEC course sizes, guided learning hours and units before calculating your grade.`}/>
    <meta property="og:title" content={`${subjectTitle} BTEC Course Guide | BTEC Grade Calculator`}/>
    <meta property="og:description" content={`Compare ${subjectTitle} BTEC course options and jump into grade calculation.`}/>
    <meta property="og:url" content={`https://www.btecgradecalculator.com/info/${subject}`}/>
    <meta name="twitter:title" content={`${subjectTitle} BTEC Course Guide | BTEC Grade Calculator`}/>
    <meta name="twitter:description" content={`Compare ${subjectTitle} BTEC course options and jump into grade calculation.`}/>
</svelte:head>

<div class="container mx-auto px-4 md:px-16 py-8">
    <div class="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <p class="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Need help deciding</p>
        <h2 class="mt-3 text-3xl md:text-4xl font-black tracking-tight">{subjectTitle} course information</h2>
        <p class="mt-3 text-slate-300">Compare course sizes, then jump straight into the calculator.</p>
    </div>
    <div class="grid gap-4 mt-6">
        {#each courses as course}
            <div class="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-lg transition hover:border-cyan-300/40">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                        <h3 class="text-xl font-bold tracking-tight">{course.courseType}</h3>
                        <p class="mt-2 text-slate-100">{course.description}</p>
                        <p class="mt-2 text-slate-300">
                            {course.guidedLearningHours} guided learning hours · {course.unitCount} units
                        </p>
                    </div>
                    <div class="flex gap-2">
                        <a class="btn variant-filled-primary" href={"/calculate/" + subject + "/" + toSlug(course.courseType)}>Use this course</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
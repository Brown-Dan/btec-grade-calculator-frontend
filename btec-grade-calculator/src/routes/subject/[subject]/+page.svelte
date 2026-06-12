<script lang="ts">

    export let data: {
        supportedTypes: string[]
        subject: string
    };
    const subject = data.subject;
    const supported_types = data.supportedTypes;
    const subjectTitle = subject.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());

    const toSlug = (value: string) => value.toLowerCase().replaceAll(' ', '-');
</script>

<svelte:head>
    <title>{subjectTitle} BTEC Courses | BTEC Grade Calculator</title>
    <meta name="description" content={`Choose a ${subjectTitle} BTEC course size and start calculating your current, expected and maximum grades.`}/>
    <meta property="og:title" content={`${subjectTitle} BTEC Courses | BTEC Grade Calculator`}/>
    <meta property="og:description" content={`Compare ${subjectTitle} BTEC course sizes and calculate grade outcomes instantly.`}/>
    <meta property="og:url" content={`https://www.btecgradecalculator.com/subject/${subject}`}/>
    <meta name="twitter:title" content={`${subjectTitle} BTEC Courses | BTEC Grade Calculator`}/>
    <meta name="twitter:description" content={`Compare ${subjectTitle} BTEC course sizes and calculate grade outcomes instantly.`}/>
</svelte:head>

<div class="container h-full mx-auto px-4 md:px-16 py-8">
    <div class="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <div class="text-center">
            <p class="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Choose pathway</p>
            <h2 class="pt-3 text-3xl md:text-4xl font-black tracking-tight">Choose your BTEC course size</h2>
            <h3 class="mt-3 text-slate-300">
                Need help deciding? Visit
                <a class="anchor font-semibold" href="/info/{subject}">course information</a>.
            </h3>
        </div>

        <nav class="mt-8">
            <ul class="grid gap-4 md:grid-cols-2">
                {#each supported_types as course_type}
                    <li class="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-lg transition hover:border-cyan-300/40 hover:bg-black/30">
                        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <span class="text-lg md:text-xl font-bold tracking-tight">{course_type}</span>
                            <div class="flex gap-2">
                                <a class="btn variant-filled-primary" href="/calculate/{subject}/{toSlug(course_type)}">Start calculating</a>
                            </div>
                        </div>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</div>

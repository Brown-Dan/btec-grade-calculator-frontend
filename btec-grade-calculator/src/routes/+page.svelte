<script lang="ts">
    import SubjectList from "$lib/components/landing/SubjectList.svelte";
</script>

<svelte:head>
    <title>BTEC Grade Calculator | Instant Grade & UCAS Predictions</title>
    <meta name="description"
          content="Free BTEC grade calculator for Computing, Business, IT, Science and Healthcare. Get current, expected and maximum grade predictions with qualification and UCAS points."/>
    <meta property="og:title" content="BTEC Grade Calculator | Instant Grade & UCAS Predictions"/>
    <meta property="og:description" content="Calculate your BTEC grade and UCAS points instantly across multiple subjects and course sizes."/>
    <meta property="og:url" content="https://www.btecgradecalculator.com"/>
    <meta name="twitter:title" content="BTEC Grade Calculator | Instant Grade & UCAS Predictions"/>
    <meta name="twitter:description" content="Calculate your BTEC grade and UCAS points instantly across multiple subjects and course sizes."/>
    <script type="application/ld+json">
        {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'BTEC Grade Calculator',
            url: 'https://www.btecgradecalculator.com',
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Any',
            description: 'Calculate current, expected and maximum BTEC grades with qualification and UCAS points.'
        })}
    </script>
</svelte:head>

<div class="container mx-auto px-4 md:px-16 py-8">
    <section class="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-xl overflow-hidden">
        <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
        <div class="absolute -left-10 -bottom-16 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-2xl"></div>
        <div class="relative text-center">
            <p class="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Fast, clean, reliable</p>
            <h2 class="mt-3 text-3xl md:text-5xl font-black tracking-tight">Your BTEC grades, instantly visualised</h2>
            <p class="mt-4 max-w-2xl mx-auto text-slate-200">
                Choose a subject, set your unit grades, and get current, expected, and maximum outcomes with a transparent points breakdown.
            </p>
        </div>
        <div class="mt-8">
            <SubjectList/>
        </div>
    </section>

    <section class="mt-8 grid gap-4 md:grid-cols-3">
        <div class="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-6 shadow-lg">
            <h3 class="text-lg font-semibold mb-2">Live updates</h3>
            <p class="text-slate-100">Every selection recalculates automatically, so you always see your latest position.</p>
        </div>
        <div class="rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10 p-6 shadow-lg">
            <h3 class="text-lg font-semibold mb-2">Clear scoring</h3>
            <p class="text-slate-100">Qualification points and UCAS points are shown side by side with no ambiguity.</p>
        </div>
        <div class="rounded-2xl border border-violet-300/20 bg-violet-400/10 p-6 shadow-lg">
            <h3 class="text-lg font-semibold mb-2">Course-aware</h3>
            <p class="text-slate-100">Built around course size rules and unit structures for realistic projections.</p>
        </div>
    </section>
</div>

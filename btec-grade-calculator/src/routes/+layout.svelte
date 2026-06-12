<script lang="ts">
    import '../app.postcss';
    import {AppBar, initializeStores, Modal, storePopup} from '@skeletonlabs/skeleton';
    import {goto} from "$app/navigation";
    import { page } from '$app/stores';
    import {arrow, autoUpdate, computePosition, flip, offset, shift} from '@floating-ui/dom';
    import {injectSpeedInsights} from '@vercel/speed-insights/sveltekit';
    import {inject} from '@vercel/analytics'

    inject()
    injectSpeedInsights();
    initializeStores();
    storePopup.set({computePosition, autoUpdate, offset, shift, flip, arrow});

    function goBack() {
        window.history.back()
    }

    const siteOrigin = 'https://www.btecgradecalculator.com';
    let canonicalUrl = siteOrigin;
    $: canonicalUrl = `${siteOrigin}${$page.url.pathname === '/' ? '' : $page.url.pathname}`;
</script>
<svelte:head>
    <meta name="robots" content="index, follow"/>
    <meta property="og:site_name" content="BTEC Grade Calculator"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content={canonicalUrl}/>
    <meta name="twitter:card" content="summary"/>
    <link rel="canonical" href={canonicalUrl}/>
</svelte:head>
<div class="relative min-h-screen overflow-hidden bg-[#060816] text-white">
    <div class="pointer-events-none absolute -left-40 -top-56 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-40 -top-24 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-3xl"></div>
    <div class="pointer-events-none absolute left-1/3 top-2/3 h-[20rem] w-[20rem] rounded-full bg-violet-500/20 blur-3xl"></div>

    <Modal/>
    <AppBar
        gridColumns="grid-cols-3"
        slotDefault="place-self-center"
        slotTrail="place-content-end"
        class="sticky top-0 z-50 border-b border-white/10 bg-[#090c1b]/70 backdrop-blur-xl"
    >
        <svelte:fragment slot="lead">
            <div class="flex gap-2">
                <button type="button" class="btn btn-sm variant-soft-surface" on:click={goBack}>Back</button>
                <button type="button" class="btn btn-sm variant-soft-surface" on:click={() => goto("/")}>Home</button>
            </div>
        </svelte:fragment>
        <svelte:fragment slot="default">
            <h1 class="text-base md:text-lg font-semibold tracking-wide">BTEC Grade Calculator</h1>
        </svelte:fragment>
        <svelte:fragment slot="trail">
            <div class="flex items-center gap-2 md:gap-3">
                <a class="btn btn-sm variant-soft-surface" href="https://github.com/Brown-Dan" target="_blank">GitHub</a>
                <a class="btn btn-sm variant-soft-surface" href="https://www.linkedin.com/in/daniel-brown-29bb19292/?originalSubdomain=uk" target="_blank">LinkedIn</a>
            </div>
        </svelte:fragment>
    </AppBar>

    <main class="relative z-10 max-w-7xl mx-auto">
        <slot/>
    </main>
</div>

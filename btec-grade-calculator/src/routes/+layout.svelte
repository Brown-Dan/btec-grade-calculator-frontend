<script lang="ts">
    import '../app.postcss';
    import {AppBar} from '@skeletonlabs/skeleton';
    import {goto} from "$app/navigation";
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
    import { storePopup } from '@skeletonlabs/skeleton';
    import { initializeStores, Modal } from '@skeletonlabs/skeleton';

    initializeStores();
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

    function navigateToHome() {
        goto("/")
    }
</script>

<Modal />
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <button type="button" class="btn-icon variant-filled-secondary" on:click={navigateToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
            </svg>
        </button>
    </svelte:fragment>
    <svelte:fragment slot="default">
        <h1 class="h1">Btec Grade Calculator</h1>
    </svelte:fragment>
    <svelte:fragment slot="trail"></svelte:fragment>
</AppBar>
<slot/>

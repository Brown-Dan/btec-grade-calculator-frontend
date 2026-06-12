<script lang="ts">

    import ListItem from "$lib/components/landing/ListItem.svelte";

    let subjects: string[] = ["computing", "business", "it", "science", "healthcare", "applied-science"]
</script>

<nav class="list-nav mt-2">
    <ul class="mx-auto grid w-full max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {#each subjects as subject_name}
            <ListItem {subject_name}/>
        {/each}
    </ul>
</nav>
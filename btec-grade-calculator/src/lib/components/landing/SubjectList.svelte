<script lang="ts">

    import ListItem from "$lib/components/landing/ListItem.svelte";

    let subjects: string[] = ["computing", "business"]
</script>

<nav class="list-nav flex justify-center mt-6">
    <ul class="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        {#each subjects as subject_name}
            <ListItem {subject_name}/>
        {/each}
    </ul>
</nav>
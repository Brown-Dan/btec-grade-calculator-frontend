<script lang="ts">
    import {get_svg} from "$lib/SvgRepository";

    export let subject_name: string;

    let subject_name_first_char: string = subject_name.at(0)!
</script>


<li class="h3 text-center font-extrabold p-5">
    <a href="/subject/{subject_name}" class="bg-secondary-hover-token">

        {@html get_svg(subject_name)}
        <span class="flex-auto">
            {subject_name.replace(subject_name_first_char, subject_name_first_char.toUpperCase())}
        </span>
    </a>
</li>
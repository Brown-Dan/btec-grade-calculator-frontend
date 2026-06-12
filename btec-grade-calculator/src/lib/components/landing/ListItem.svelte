<script lang="ts">
    import {get_svg} from "$lib/SvgRepository";

    export let subject_name: string;
    const title = subject_name
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
</script>

<li class="h-full p-2">
    <a href="/subject/{subject_name}"
       class="group flex h-full flex-col justify-start gap-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10">
        <div class="flex items-center gap-2">
            <span class="icon-wrap shrink-0 text-cyan-200 transition group-hover:text-cyan-100">
                {@html get_svg(subject_name)}
            </span>
            <span class="text-left text-[0.95rem] md:text-base font-bold leading-tight tracking-tight">
                {title}
            </span>
        </div>
        <span class="text-left text-[0.62rem] uppercase tracking-[0.08em] text-slate-300">Open course options</span>
    </a>
</li>

<style>
    .icon-wrap :global(svg) {
        width: 1.25rem;
        height: 1.25rem;
        display: block;
    }
</style>
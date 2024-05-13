<script lang="ts">

    export let data: {
        supportedTypes: any
        subject: string
    };
    const subject = data.subject;
    const supported_types = data.supportedTypes.supportedTypes;
</script>

<div class="container h-full mx-auto pr-16 pl-16">
    <div class="text-center mt-5 mb-5">
        <h2 class="h3 pt-4">Please choose your BTEC course from the options provided below.</h2>
        <h3 class="h4">Unsure about which course to select? Visit our <a class="anchor" href="/info/{subject}">Course Information</a> section for
            guidance!</h3>
    </div>
    <nav class="list-nav">
        <ul>
            {#each supported_types as course_type}
                <li class="text-center font-extrabold">
                    <a href="/calculate/{subject}/{course_type}" class="bg-secondary-hover-token">
                        <a href="/info/{subject}/{course_type}"> <span class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/></svg></span></a>
                        <span class="flex-auto">{course_type}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</div>
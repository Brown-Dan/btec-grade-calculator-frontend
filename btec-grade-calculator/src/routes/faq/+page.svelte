<script lang="ts">

    import {Accordion, AccordionItem} from "@skeletonlabs/skeleton";
</script>
<div class="text-center m-5">
    <h1 class="h1">FAQ</h1>
</div>
<Accordion class="items-center p-20 flex-wrap shadow-2xl">
    <AccordionItem open>
        <svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
        </svg>
        </svelte:fragment>
        <svelte:fragment slot="summary">How do I use the calculator?</svelte:fragment>
        <svelte:fragment slot="content">Navigating the BTEC Grade Calculator may initially seem daunting, but fear not. Simply select the BTEC course type relevant to your studies and proceed to the
            <a href="/btec-grade-calculator/static" class="anchor">calculator section</a>. Once there, input your grades for the Mandatory units—these are the units you must complete. If you have not yet received your grade, select "PENDING" without concern. Additionally, you'll be prompted to enter your grades for the optional units you're studying. Just select the unit name and input your grade. If you're unsure about the optional unit you're studying, you can leave it blank; our algorithms will still compute your grades accurately. Similarly, if you haven't received your grade for an optional unit, select "PENDING." After filling in your units and grades, simply click the calculate button, and your grades will be promptly displayed on the screen.
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        </svelte:fragment>
        <svelte:fragment slot="summary">What do the different grades mean?</svelte:fragment>
        <svelte:fragment slot="content">
            When utilizing the grade calculator, you'll encounter three distinct values: your current grade, your expected grade, and your maximum possible grade. Your current grade is computed from the grades of all the units you've completed thus far. Essentially, if you were to fail the remaining units, this would be the grade you'd receive (provided you still pass your mandatory units). Your expected grade is the grade our algorithms anticipate you to achieve. To calculate this value, we consider your performance thus far and the difficulty of your remaining units. Finally, your maximum grade represents the highest possible grade attainable given your existing grades. In essence, this is the grade you'd receive if you were to achieve the highest grade in your remaining units.
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        </svelte:fragment>
        <svelte:fragment slot="summary">How do I report a bug?</svelte:fragment>
        <svelte:fragment slot="content">
            If you've encountered any issues, like receiving incorrect grades, don't worry. Feel free to reach out to me via email at
            <a href="mailto:danielbrown05@icloud.com" class="anchor">danielbrown05@icloud.com</a> or connect with me on
            <a href="https://github.com/Brown-Dan" class="anchor">github</a>. I'm here to help! I aim to respond to all queries within 24 hours, so you can expect a prompt and helpful reply. Your success is my priority!
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        </svelte:fragment>
        <svelte:fragment slot="summary">How do I request a feature?</svelte:fragment>
        <svelte:fragment slot="content">
            Do you have a brilliant idea you'd love to see implemented? Noticed something on the website that could be more user-friendly? Your feedback matters! Feel free to share your thoughts by sending an email to   <a href="mailto:danielbrown05@icloud.com" class="anchor">danielbrown05@icloud.com</a> or by raising an issue on the <a href="https://github.com/Brown-Dan" class="anchor">github</a> repository. Every feature request is important to me, and I'll make sure to review each one promptly. Your input helps make the platform better for everyone!
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        </svelte:fragment>
        <svelte:fragment slot="summary">When will you support different subjects?</svelte:fragment>
        <svelte:fragment slot="content">
            At the moment, our service specializes in calculating grades for BTECs in Computing, recognizing the complexities involved in this task. However, we're excited to expand our support to cover other subjects as well! Our roadmap includes plans to introduce support for Business, Engineering, and Healthcare by Q3 2024, with additional subjects to follow shortly after. We're committed to providing a comprehensive solution to meet your grading needs across various disciplines. Stay tuned for updates as we continue to enhance our service!
        </svelte:fragment>
    </AccordionItem>
</Accordion>
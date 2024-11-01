<script lang="ts">
    import ListItem from "$lib/components/landing/ListItem.svelte";
    import SubjectList from "$lib/components/landing/SubjectList.svelte";

    let subjects: string[] = ["computing", "business"]
</script>

<svelte:head>
    <title>BTEC Grade Calculator</title>
    <meta name="description"
          content="Quickly calculate your BTEC grades with our easy-to-use calculator. Just enter your unit results to get an instant grade prediction and track your academic progress today!"/>
</svelte:head>

<div class="container mx-auto px-4 md:px-16 h-full">

    <div class="text-center mt-8 mb-4">
        <h2 class="h2">Choose Your BTEC Subject</h2>
        <p class="mt-3 max-w-2xl mx-auto">
            Use the BTEC Grade Calculator to project your grades and track your progress. Simply select your subject below to get started, and follow the steps to see how you're doing in your course.
        </p>
    </div>

    <SubjectList />

    <div class="mt-8 px-4 md:px-16 text-left max-w-3xl mx-auto">
        <p>
            The BTEC Grade Calculator supports vocational subjects like Computing and Business, helping you stay on
            track. BTEC courses offer practical, career-oriented learning, valued by employers and universities alike.
            With this calculator, you can see where you stand and work toward your target outcome.
        </p>
        <p class="mt-4">
            Designed for simplicity, the calculator makes it easy to track your grades across various BTEC units. Select
            your subject to start calculating and reach your academic goals!
        </p>
    </div>
</div>


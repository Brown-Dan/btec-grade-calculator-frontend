<script lang="ts">
    interface CourseUnits {
        courseType: string;
        mandatoryUnits: string[];
        optionalUnits: string[];
        optionalUnitCount: number;
        ucasPoints: string;
        guidedLearningHours: string;
        aLevelEquivalent: string;
        unitCount: string;
        description: string;
    }

    export let data: {
        course_data: CourseUnits
    };
    const course_data = data.course_data;

</script>


<div class="container mx-auto px-4 shadow-2xl p-5 mt-10">
    <div class="justify-center text-center">
        <div class="m-5 p-5">
            <h2 class="h1 underline mb-5 underline-offset-8">{course_data.courseType}</h2>
            <div class="text-left">
                <p class="font-extrabold h4">
                    {course_data.description}
                </p>
            </div>
        </div>
        <div class="flex flex-col xl:flex-row">
            <div class="w-full xl:w-1/3 justify-center">
                <h3 class="h3 mb-2 underline underline-offset-8">Key Facts</h3>
                <div class="mb-5 p-5 xl:text-center text-left">
                    <ul>
                        <li class="p-2"><b>UCAS Points range:</b> 0-{course_data.ucasPoints} points</li>
                        <li class="p-2"><b>Guided Learning Hours:</b> {course_data.guidedLearningHours} hours</li>
                        <li class="p-2"><b>Number of units:</b> {course_data.unitCount}</li>
                        <li class="p-2"><b>A Level Equivalent:</b> {course_data.aLevelEquivalent}</li>
                    </ul>
                </div>
            </div>
            <div class="w-full xl:w-1/3">
                <h3 class="h3 mb-2 underline underline-offset-8">Mandatory Units</h3>
                <div class="p-5 mb-5 xl:text-center text-left">
                    <ul>
                        {#each course_data.mandatoryUnits as unit_name}
                            <li class="p-2"><a href="/info/unit/{unit_name}" class="anchor">{unit_name}</a></li>
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="w-full xl:w-1/3">
                <h3 class="h3 mb-2 underline underline-offset-8">Optional Units</h3>
                <div class="p-5 mb-5 xl:text-center text-left">
                    <ul>
                        {#each course_data.optionalUnits as unit_name}
                            <li class="p-2"><a href="/info/unit/{unit_name}" class="anchor">{unit_name}</a></li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

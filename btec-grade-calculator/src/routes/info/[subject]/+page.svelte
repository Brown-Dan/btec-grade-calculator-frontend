<script lang="ts">
    import {popup, type PopupSettings} from '@skeletonlabs/skeleton';
    import {goto} from "$app/navigation";

    const guided_learning_hours_popup_hover: PopupSettings = {
        event: 'hover',
        target: 'guided_learning_hours_popup',
        placement: 'top'
    };
    const guided_learning_hours_popup_click: PopupSettings = {
        event: 'click',
        target: 'guided_learning_hours_popup',
        placement: 'top'
    };
    const unit_popup_hover: PopupSettings = {
        event: 'hover',
        target: 'unit_popup',
        placement: 'top'
    };
    const unit_popup_click: PopupSettings = {
        event: 'click',
        target: 'unit_popup',
        placement: 'top'
    };
    const course_action_popup: PopupSettings = {
        event: 'click',
        target: 'course_action_popup',
        placement: 'right-start'
    };

    let selected_course: string;

    function set_selected_course(course: string) {
        selected_course = course;
    }

    function goto_selected_course_info() {
        goto("/info/" + subject + "/" + selected_course)
    }

    function goto_selected_course_calculator() {
        goto("/calculate/" + subject + "/" + selected_course)
    }

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
        courses: CourseUnits[]
        subject: string
    };
    const subject = data.subject;
    const courses = data.courses
</script>


<div class="card p-4 variant-filled-secondary" data-popup="guided_learning_hours_popup">
    <p>Guided Learning Hours represent the time learners spend under direct supervision.</p>
    <div class="arrow variant-filled-secondary"/>
</div>

<div class="card p-4 variant-filled-secondary" data-popup="course_action_popup">
    <button name="calculate" class="btn-icon variant-filled-secondary" on:click={goto_selected_course_calculator}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"/>
        </svg>
    </button>
    <button name="information" class="btn-icon variant-filled-secondary" on:click={goto_selected_course_info}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
        </svg>
    </button>
    <div class="arrow variant-filled-secondary"/>
</div>

<div class="card p-4 variant-filled-secondary" data-popup="unit_popup">
    <p>The number of units that a learner is required to complete.</p>
    <div class="arrow variant-filled-secondary"/>
</div>

<div class="m-7">
    <div class="table-container">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>Course Name</th>
                <th>Description</th>
                <th class="[&>*]:pointer-events-none" use:popup={guided_learning_hours_popup_hover}
                    use:popup={guided_learning_hours_popup_click}>Guided Learning Hours
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
                    </svg>
                </th>
                <th class="[&>*]:pointer-events-none" use:popup={unit_popup_hover} use:popup={unit_popup_click}>Number
                    of units
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
                    </svg>
                </th>
            </tr>
            </thead>
            <tbody>
            {#each courses as course}
                <tr on:click={() => set_selected_course(course.courseType)}>
                    <td class="font-semibold w-fit anchor [&>*]:pointer-events-none" use:popup={course_action_popup}>
                        {course.courseType}
                    </td>
                    <td>{course.description}</td>
                    <td>{course.guidedLearningHours}</td>
                    <td>{course.unitCount}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>
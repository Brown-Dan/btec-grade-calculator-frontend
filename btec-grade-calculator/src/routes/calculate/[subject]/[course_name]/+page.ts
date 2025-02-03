import {findCourseBySubjectAndType} from "$lib/calculator/InformationRepository";

export const load = async ({params}) => {
    return {
        course_unit_data: findCourseBySubjectAndType(params.subject, params.course_name.replaceAll('-', ' ')),
        subject: params.subject
    };
};

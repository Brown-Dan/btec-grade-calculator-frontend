import {findCoursesBySubject} from "$lib/calculator/InformationRepository";

export const load = async ({fetch, params}) => {
    return {
        supportedTypes: findCoursesBySubject(params.subject).map(course => course.courseType),
        subject: params.subject
    };
};

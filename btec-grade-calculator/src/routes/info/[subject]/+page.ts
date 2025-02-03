import {findCoursesBySubject} from "$lib/calculator/InformationRepository";

export const load = async ({fetch, params}) => {
    return {
        courses: findCoursesBySubject(params.subject),
        subject: params.subject
    };
};

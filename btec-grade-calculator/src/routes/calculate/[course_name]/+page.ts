import {goto} from "$app/navigation";
import {redirect} from "@sveltejs/kit";

export const load = async ({fetch, params}) => {

    interface CourseUnits {
        courseType: string;
        mandatoryUnits: string[];
        optionalUnits: string[];
        optionalUnitCount: number;
    }

    let course_information_url: string = "http://localhost:8080/information/"

    let responseData;
    const response: Response = await fetch(course_information_url + params.course_name);
    if (response.ok) {
        responseData = await response.json();
    } else {
        redirect(308, "/error")
    }
    return {
        course_unit_data: responseData
    };
};

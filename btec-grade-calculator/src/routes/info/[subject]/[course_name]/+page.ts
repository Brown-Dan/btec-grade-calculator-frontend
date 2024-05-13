import {redirect} from "@sveltejs/kit";

export const load = async ({fetch, params}) => {

    let course_information_url: string = "http://localhost:8080/information/" + params.subject + "/"

    let responseData;
    const response: Response = await fetch(course_information_url + params.course_name);
    if (response.ok) {
        responseData = await response.json();
    } else {
        redirect(308, "/error")
    }
    return {
        course_data: responseData
    };
};

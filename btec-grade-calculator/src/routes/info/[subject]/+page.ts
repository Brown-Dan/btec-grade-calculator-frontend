import {redirect} from "@sveltejs/kit";

export const load = async ({fetch, params}) => {

    let information_url: string = "http://localhost:8080/information/"

    let responseData;
    const response: Response = await fetch(information_url + params.subject);
    if (response.ok) {
        responseData = await response.json();
    } else {
        redirect(308, "/error")
    }
    return {
        courses: responseData,
        subject: params.subject
    };
};

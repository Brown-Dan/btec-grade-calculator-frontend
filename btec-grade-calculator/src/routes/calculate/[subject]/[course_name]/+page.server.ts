import {redirect} from "@sveltejs/kit";

export function load() {
    // ...
}
export const actions = {
    default: async ({request, url, params}) => {
        interface unit {
            unitName: string
            grade: string
        }

        interface grade_calculation_request {
            courseType: string
            unit: unit[]
        }

        const data = await request.formData();

        // FORM VALIDATION
        interface validation_failure {
            title: string
            message: string
        }

        let validation_failure: validation_failure | undefined = undefined
        const formValues: FormDataEntryValue[] = Array.from(data.values())
        for (const index in formValues) {
            if (formValues.at(Number(index)) === "Select Your Grade") {
                validation_failure = {
                    title: "Missing Mandatory Grade",
                    message: "Please select a grade for all Mandatory Units"
                }
            }
        }
        const formKeys: string[] = Array.from(data.keys())
        const duplicates: string[] = Array.from(new Set(formKeys.filter((item, index) => formKeys.indexOf(item) != index)))
        if (duplicates.length > 0) {
            validation_failure = {
                title: "Duplicate Units Selected",
                message: "You have selected unit(s): '" + duplicates + "' more than one time"
            }
        }

        let calculationResponse;
        if (validation_failure == undefined) {
            const course_type = capitalizeWords(url.pathname.split("/")[3].replaceAll("-", " "));            const units: unit[] = Array.from(data.entries()).map(([unitName, grade]: [string, FormDataEntryValue]) => ({
                unitName,
                grade: String(grade)
            }));
            let subject: string = params.subject.replace(params.subject.at(0)!, params.subject.at(0)!.toUpperCase())
            const requestBody: string = JSON.stringify({courseType: course_type, units: units})
            const response: Response = await fetch('https://btec-grade-calculator-4a817c201846.herokuapp.com/calculate/' + subject, {
                method: 'POST',
                body: requestBody,
                headers: {
                    "content-type" : "application/json"
                }
            });
            if (response.ok) {
                calculationResponse = await response.json();
            } else {
                redirect(308, "/error")
            }
        }
        return {
            gradeCalculationResult: calculationResponse,
            validationFailure: validation_failure
        }
    }
};

const capitalizeWords = (str: string): string => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
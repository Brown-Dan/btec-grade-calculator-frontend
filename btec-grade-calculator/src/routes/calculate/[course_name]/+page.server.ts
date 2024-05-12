export function load() {
    // ...
}

export const actions = {

    default: async ({request}) => {
        interface validation_failure {
            title: string
            message: string
        }
        let validation_failure: validation_failure | undefined = undefined

        const data = await request.formData();
        // TODO make request to backend here
        let json: JSON = JSON.parse(`
                {
  "currentGrade" : {
    "grade" : "M",
    "ucasPoints" : "42"
  },
   "expectedGrade" : {
    "grade" : "D",
    "ucasPoints" : "70"
  },
   "maximumGrade" : {
    "grade" : "D*",
    "ucasPoints" : "82"
  }
}
            `)
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
        const duplicates: string[] = formKeys.filter((item, index) => formKeys.indexOf(item) != index)

        if (duplicates.length > 0) {
            validation_failure = {
                title: "Duplicate Units Selected",
                message: "You have selected unit(s): '" + duplicates + "' more than one time"
            }
        }

        return {
            gradeCalculationResult: json,
            validationFailure: validation_failure
        }
    }
};
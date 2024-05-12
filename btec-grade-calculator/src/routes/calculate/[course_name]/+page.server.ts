export function load() {
    // ...
}

export const actions = {
    default: async ({request}) => {
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
        return {
            gradeCalculationResult: json
        }
    }
};
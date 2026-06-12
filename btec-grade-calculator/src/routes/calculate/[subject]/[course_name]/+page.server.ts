import type { Actions } from "./$types";
import { findCourseBySubjectAndType } from "$lib/calculator/InformationRepository";
import { calculateGrades } from "$lib/calculator/grade-calculator";
import type { CourseGradeCalculationRequest, GradesCalculation, InputGrade } from "$lib/calculator/models";

const CALCULATION_COOKIE = "btec-calculator-state";

type OptionalFormSelection = {
    unitName: string;
    grade: InputGrade;
};

type FormState = {
    mandatoryGrades: Record<string, InputGrade>;
    optionalSelections: OptionalFormSelection[];
};

type SavedCalculation = {
    formState: FormState;
    result: GradesCalculation;
};

const parseSavedCalculation = (rawCookie: string | undefined): SavedCalculation | undefined => {
    if (!rawCookie) {
        return;
    }
    try {
        return JSON.parse(rawCookie) as SavedCalculation;
    } catch {
        return;
    }
};

export const load = async ({ cookies }) => {
    const savedCalculation = parseSavedCalculation(cookies.get(CALCULATION_COOKIE));
    return {
        savedCalculation
    };
};

export const actions: Actions = {
    default: async ({ request, params, cookies }) => {
        const courseTypeFromUrl = params.course_name.replaceAll("-", " ");
        const subject = params.subject;
        const course = findCourseBySubjectAndType(subject, courseTypeFromUrl);

        if (!course) {
            return {
                validationFailure: {
                    title: "Course not found",
                    message: "We could not load that course. Please choose another course."
                }
            };
        }

        const data = await request.formData();

        const mandatoryGrades: Record<string, InputGrade> = {};
        const units: CourseGradeCalculationRequest["units"] = [];

        for (const unitName of course.mandatoryUnits) {
            const selectedGrade = String(data.get(`mandatory:${unitName}`) ?? "") as InputGrade | "";
            const grade: InputGrade = selectedGrade || "NOT_MARKED";
            mandatoryGrades[unitName] = grade;
            units.push({ unitName, grade });
        }

        const optionalSelections: OptionalFormSelection[] = [];
        for (let i = 0; i < course.optionalUnitCount; i++) {
            const selectedUnitName = String(data.get(`optional-unit-${i}`) ?? "");
            const selectedGrade = String(data.get(`optional-grade-${i}`) ?? "") as InputGrade | "";

            const optionState: OptionalFormSelection = {
                unitName: selectedUnitName,
                grade: selectedGrade || "NOT_MARKED"
            };
            optionalSelections.push(optionState);

            if (selectedUnitName) {
                units.push({
                    unitName: selectedUnitName,
                    grade: optionState.grade
                });
            }
        }

        const chosenOptionalUnits = optionalSelections
            .map((selection) => selection.unitName)
            .filter((unitName) => unitName.length > 0);
        const duplicateOptionalUnits = chosenOptionalUnits.filter((unitName, index) => chosenOptionalUnits.indexOf(unitName) !== index);

        if (duplicateOptionalUnits.length > 0) {
            return {
                validationFailure: {
                    title: "Duplicate units selected",
                    message: `You selected the same optional unit multiple times: ${Array.from(new Set(duplicateOptionalUnits)).join(", ")}`
                },
                formState: {
                    mandatoryGrades,
                    optionalSelections
                }
            };
        }

        const calculationRequest: CourseGradeCalculationRequest = {
            subject,
            courseType: course.courseType,
            units
        };
        const gradeCalculationResult = calculateGrades(calculationRequest);

        const formState: FormState = {
            mandatoryGrades,
            optionalSelections
        };

        const savedCalculation: SavedCalculation = {
            formState,
            result: gradeCalculationResult
        };
        cookies.set(CALCULATION_COOKIE, JSON.stringify(savedCalculation), {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 30
        });

        return {
            gradeCalculationResult,
            formState,
            validationFailure: undefined
        };
    }
};

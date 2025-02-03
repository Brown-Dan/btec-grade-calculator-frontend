import {
    type CourseGradeCalculationRequest,
    type CourseResource,
    Grade,
    type GradesCalculation
} from "$lib/calculator/models";
import {findCourseBySubjectAndType} from "$lib/calculator/InformationRepository";
import {getGuidedLearningHoursByUnitName, Units} from "$lib/calculator/units";
import {getPointsToGradeMap} from "$lib/calculator/grades";
import {getUcasPointsFromGrade} from "$lib/calculator/ucas";

const CURRENT_GRADE_COEFFICIENT = 0.0;
const MAX_GRADE_COEFFICIENT = 2.66666667;
const gradeCoefficientMap: Map<string, number> = new Map([
    ["UNCLASSIFIED", 0.0],
    ["NEAR_PASS", 0.66666667],
    ["PASS", 1.0],
    ["MERIT", 1.66666667],
    ["DISTINCTION", 2.66666667]
]);

export function calculateGrades(gradeCalculationRequest: CourseGradeCalculationRequest): GradesCalculation {
    const actualCourse: CourseResource = findCourseBySubjectAndType(gradeCalculationRequest.subject, gradeCalculationRequest.courseType)!;

    // Presuming in this calculation that all mandatory units are present (front end validation)
    const missingOptionalUnitCount = (actualCourse.unitCount) - gradeCalculationRequest.units.length;

    // adding missing optional units to the request as a pending grade
    for (let i = 0; i < missingOptionalUnitCount; i++) {
        gradeCalculationRequest.units.push({
            unitName: Units.GENERIC_OPTIONAL_UNIT,
            grade: Grade.PENDING
        });
    }

    const predictedCoefficient = gradeCalculationRequest.units
        .filter((unit) => unit.grade !== Grade.PENDING)
        .map((unit) => gradeCoefficientMap.get(unit.grade)!)
        .reduce((sum, coefficient) => sum + coefficient!, 0) / gradeCalculationRequest.units.length;

    const pointGradeMap = getPointsToGradeMap(gradeCalculationRequest.courseType)!;


    const currentGrade = mapGrades(pointsToGrade(pointGradeMap, getPoints(gradeCalculationRequest, CURRENT_GRADE_COEFFICIENT)));
    const expectedGrade = mapGrades(pointsToGrade(pointGradeMap, getPoints(gradeCalculationRequest, predictedCoefficient)));
    const maximumGrade = mapGrades(pointsToGrade(pointGradeMap, getPoints(gradeCalculationRequest, MAX_GRADE_COEFFICIENT)));

    return {
        currentGrade: {
            grade: currentGrade,
            ucasPoints: getUcasPointsFromGrade(gradeCalculationRequest.courseType, currentGrade)
        },
        expectedGrade: {
            grade: expectedGrade,
            ucasPoints: getUcasPointsFromGrade(gradeCalculationRequest.courseType, expectedGrade)
        },
        maximumGrade: {
            grade: maximumGrade,
            ucasPoints: getUcasPointsFromGrade(gradeCalculationRequest.courseType, maximumGrade)
        }
    };

}

function getPoints(course: CourseGradeCalculationRequest, pendingCoefficient: number): number {
    let totalPoints = 0;
    for (const unit of course.units) {
        if (unit.grade === Grade.UNCLASSIFIED) {
            return 0;
        }
        const coefficient = unit.grade === Grade.PENDING ? pendingCoefficient : gradeCoefficientMap.get(unit.grade);
        console.log(unit.grade)
        console.log(gradeCoefficientMap.get(unit.grade))
        if (coefficient === undefined) {
            continue;
        }
        console.log(getGuidedLearningHoursByUnitName(unit.unitName))
        totalPoints += Math.floor(coefficient * getGuidedLearningHoursByUnitName(unit.unitName) / 10);
    }
    return totalPoints;
}

function pointsToGrade(pointsToGradeMap: Map<number, Grade[]>, points: number): Grade[] {
    let currentClosestThresholdDifference = Number.MAX_SAFE_INTEGER;
    let currentThreshold = 0;

    for (const threshold of pointsToGradeMap.keys()) {
        const difference = threshold - points;
        if (currentClosestThresholdDifference > 0 || (difference <= 0 && difference > currentClosestThresholdDifference)) {
            currentClosestThresholdDifference = difference;
            currentThreshold = threshold;
        }
    }
    return pointsToGradeMap.get(currentThreshold) || [];
}

function mapGrades(grades: Grade[]): string {
    return grades.map((grade) => grade).join('');
}

export interface Unit {
    name: string
    guidedLearningHours: number
}

export interface Course {
    subject: string;
    courseType: string;
    mandatoryUnitEntities: Unit[];
    optionalUnitEntities: Unit[];
    guidedLearningHours: number;
    maximumUcasPoints: number;
    aLevelEquivalent: string;
    description: string;
    optionalUnitCount: number;
}

export interface Subject {
    name: string;
    courses: Course[];
}

export enum Grade {
    PENDING = 'PENDING',
    UNCLASSIFIED = 'U',
    NEAR_PASS = 'NP',
    PASS = 'P',
    MERIT = 'M',
    DISTINCTION = 'D',
    DISTINCTION_STAR = 'D*'
}

export interface CourseResource {
    subject: string;
    courseType: string;
    mandatoryUnits: string[];
    optionalUnits: string[];
    guidedLearningHours: number;
    maximumUcasPoints: number;
    aLevelEquivalent: string;
    description: string;
    unitCount: number;
    optionalUnitCount: number;
}

export interface UnitGradeCalculationRequest {
    unitName: string;
    grade: Grade;
}

export interface CourseGradeCalculationRequest {
    subject: string;
    courseType: string;
    units: UnitGradeCalculationRequest[];
}

export interface GradeWithUcasPoints {
    grade: string;
    ucasPoints: number;
}

export interface GradesCalculation {
    currentGrade: GradeWithUcasPoints;
    expectedGrade: GradeWithUcasPoints;
    maximumGrade: GradeWithUcasPoints;
}

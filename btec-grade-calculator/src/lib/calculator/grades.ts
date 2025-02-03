import {Grade} from "$lib/calculator/models";

const CERTIFICATE_POINTS_TO_GRADE: Map<number, Grade[]> = new Map([
    [0, [Grade.UNCLASSIFIED]],
    [18, [Grade.PASS]],
    [26, [Grade.MERIT]],
    [42, [Grade.DISTINCTION]],
    [48, [Grade.DISTINCTION_STAR]]
]);

const EXTENDED_CERTIFICATE_POINTS_TO_GRADE: Map<number, Grade[]> = new Map([
    [0, [Grade.UNCLASSIFIED]],
    [36, [Grade.PASS]],
    [52, [Grade.MERIT]],
    [74, [Grade.DISTINCTION]],
    [90, [Grade.DISTINCTION_STAR]]
]);

const FOUNDATION_DIPLOMA_POINTS_TO_GRADE: Map<number, Grade[]> = new Map([
    [0, [Grade.UNCLASSIFIED]],
    [51, [Grade.PASS]],
    [73, [Grade.MERIT]],
    [104, [Grade.DISTINCTION]],
    [130, [Grade.DISTINCTION_STAR]]
]);

const DIPLOMA_POINTS_TO_GRADE: Map<number, Grade[]> = new Map([
    [0, [Grade.UNCLASSIFIED]],
    [72, [Grade.PASS, Grade.PASS]],
    [88, [Grade.MERIT, Grade.PASS]],
    [104, [Grade.MERIT, Grade.MERIT]],
    [124, [Grade.DISTINCTION, Grade.MERIT]],
    [144, [Grade.DISTINCTION, Grade.DISTINCTION]],
    [162, [Grade.DISTINCTION_STAR, Grade.DISTINCTION]],
    [180, [Grade.DISTINCTION_STAR, Grade.DISTINCTION_STAR]]
]);

const EXTENDED_DIPLOMA_POINTS_GRADE: Map<number, Grade[]> = new Map([
    [0, [Grade.UNCLASSIFIED]],
    [108, [Grade.PASS, Grade.PASS, Grade.PASS]],
    [124, [Grade.MERIT, Grade.PASS, Grade.PASS]],
    [140, [Grade.MERIT, Grade.MERIT, Grade.PASS]],
    [156, [Grade.MERIT, Grade.MERIT, Grade.MERIT]],
    [176, [Grade.DISTINCTION, Grade.MERIT, Grade.MERIT]],
    [196, [Grade.DISTINCTION, Grade.DISTINCTION, Grade.MERIT]],
    [216, [Grade.DISTINCTION, Grade.DISTINCTION, Grade.DISTINCTION]],
    [234, [Grade.DISTINCTION_STAR, Grade.DISTINCTION, Grade.DISTINCTION]],
    [252, [Grade.DISTINCTION_STAR, Grade.DISTINCTION_STAR, Grade.DISTINCTION]],
    [270, [Grade.DISTINCTION_STAR, Grade.DISTINCTION_STAR, Grade.DISTINCTION_STAR]]
]);

const COURSE_TYPE_TO_POINTS_TO_GRADE: Map<string, Map<number, Grade[]>> = new Map([
    ['National Certificate', CERTIFICATE_POINTS_TO_GRADE],
    ['National Extended Certificate', EXTENDED_CERTIFICATE_POINTS_TO_GRADE],
    ['National Foundation Diploma', FOUNDATION_DIPLOMA_POINTS_TO_GRADE],
    ['National Diploma', DIPLOMA_POINTS_TO_GRADE],
    ['National Extended Diploma', EXTENDED_DIPLOMA_POINTS_GRADE]
]);

export function getPointsToGradeMap(courseType: string): Map<number, Grade[]> | undefined {
    return COURSE_TYPE_TO_POINTS_TO_GRADE.get(courseType);
}

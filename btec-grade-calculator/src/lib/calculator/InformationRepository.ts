// public Optional<List<Course>> getSubjectInformation(String subject) {
//     return Arrays.stream(SubjectEntity.values()).filter(sbj -> sbj.getSubject().equalsIgnoreCase(subject))
//         .findFirst()
//         .map(SubjectEntity::getCourseTypes)
//         .map(courseEntities -> courseEntities.stream().map(this::mapCourseEntityToCourse).toList());
// }

import type {Course, CourseResource} from "$lib/calculator/models";
import {Subject, SubjectDetails} from "$lib/calculator/subject";

export const findCoursesBySubject = (subject: string): CourseResource[] => {
    let courses: Course[] = SubjectDetails[subject as Subject];

    if (courses === undefined) {
        return [];
    }
    return courses.map(course => mapCourseToCourseResource(course));
}

export const findCourseBySubjectAndType = (subject: string, courseType: string): CourseResource | undefined => {
    let courses: Course[] = SubjectDetails[subject as Subject];

    let course: Course | undefined = courses.find(course => course.courseType.toLowerCase() === courseType.toLowerCase());

    if (course === undefined) {
        return;
    }
    return mapCourseToCourseResource(course);
}


const mapCourseToCourseResource = (course: Course): CourseResource => {
    return {
        subject: course.subject,
        courseType: course.courseType,
        mandatoryUnits: course.mandatoryUnitEntities.map(unit => unit.name),
        optionalUnits: course.optionalUnitEntities.map(unit => unit.name),
        guidedLearningHours: course.guidedLearningHours,
        maximumUcasPoints: course.maximumUcasPoints,
        aLevelEquivalent: course.aLevelEquivalent,
        description: course.description,
        unitCount: (course.mandatoryUnitEntities.length + course.optionalUnitCount),
        optionalUnitCount: course.optionalUnitCount
    };
};

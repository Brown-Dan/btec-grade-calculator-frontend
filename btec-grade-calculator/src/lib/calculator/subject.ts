import {CourseDetails, Courses} from "$lib/calculator/courses";
import type {Course} from "$lib/calculator/models";

export enum Subject {
    COMPUTING = "computing",
    BUSINESS = "business"
}

export const SubjectDetails: Record<Subject, Course[]> = {
    [Subject.COMPUTING]: [
        CourseDetails[Courses.NATIONAL_CERTIFICATE_COMPUTING],
        CourseDetails[Courses.NATIONAL_EXTENDED_CERTIFICATE_COMPUTING],
        CourseDetails[Courses.NATIONAL_FOUNDATION_DIPLOMA_COMPUTING],
        CourseDetails[Courses.NATIONAL_DIPLOMA_COMPUTING],
        CourseDetails[Courses.NATIONAL_EXTENDED_DIPLOMA_COMPUTING]
    ],
    [Subject.BUSINESS]: [
        CourseDetails[Courses.NATIONAL_CERTIFICATE_BUSINESS],
        CourseDetails[Courses.NATIONAL_EXTENDED_CERTIFICATE_BUSINESS],
        CourseDetails[Courses.NATIONAL_FOUNDATION_DIPLOMA_BUSINESS],
        CourseDetails[Courses.NATIONAL_DIPLOMA_BUSINESS],
        CourseDetails[Courses.NATIONAL_EXTENDED_DIPLOMA_BUSINESS]
    ]
};

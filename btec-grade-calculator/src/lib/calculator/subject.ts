import {CourseDetails, Courses} from "$lib/calculator/courses";
import type {Course} from "$lib/calculator/models";

export enum Subject {
    COMPUTING = "computing",
    BUSINESS = "business",
    APPLIED_SCIENCE = "applied-science",
    IT = "it",
    SCIENCE = "science",
    HEALTHCARE = "healthcare"
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
    ],
    [Subject.APPLIED_SCIENCE]: [
        CourseDetails[Courses.NATIONAL_CERTIFICATE_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_EXTENDED_CERTIFICATE_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_FOUNDATION_DIPLOMA_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_DIPLOMA_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_EXTENDED_DIPLOMA_APPLIED_SCIENCE]
    ],
    [Subject.IT]: [
        CourseDetails[Courses.NATIONAL_CERTIFICATE_COMPUTING],
        CourseDetails[Courses.NATIONAL_EXTENDED_CERTIFICATE_COMPUTING],
        CourseDetails[Courses.NATIONAL_FOUNDATION_DIPLOMA_COMPUTING],
        CourseDetails[Courses.NATIONAL_DIPLOMA_COMPUTING],
        CourseDetails[Courses.NATIONAL_EXTENDED_DIPLOMA_COMPUTING]
    ],
    [Subject.SCIENCE]: [
        CourseDetails[Courses.NATIONAL_CERTIFICATE_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_EXTENDED_CERTIFICATE_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_FOUNDATION_DIPLOMA_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_DIPLOMA_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_EXTENDED_DIPLOMA_APPLIED_SCIENCE]
    ],
    [Subject.HEALTHCARE]: [
        CourseDetails[Courses.NATIONAL_CERTIFICATE_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_EXTENDED_CERTIFICATE_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_FOUNDATION_DIPLOMA_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_DIPLOMA_APPLIED_SCIENCE],
        CourseDetails[Courses.NATIONAL_EXTENDED_DIPLOMA_APPLIED_SCIENCE]
    ]
};

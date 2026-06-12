import { describe, expect, it } from 'vitest';
import { calculateGrades } from '$lib/calculator/grade-calculator';
import type { CourseGradeCalculationRequest, InputGrade } from '$lib/calculator/models';
import { Units } from '$lib/calculator/units';
import { findCoursesBySubject } from '$lib/calculator/InformationRepository';

describe('calculateGrades', () => {
	it('calculates current, expected, and maximum grades for not marked unit outcomes', () => {
		const request: CourseGradeCalculationRequest = {
			subject: 'computing',
			courseType: 'National Certificate',
			units: [
				{
					unitName: Units.FUNDAMENTALS_OF_COMPUTER_SYSTEMS,
					grade: 'DISTINCTION' as InputGrade
				},
				{
					unitName: Units.IT_SYSTEMS_SECURITY_AND_ENCRYPTION,
					grade: 'NOT_MARKED' as InputGrade
				}
			]
		};

		const result = calculateGrades(request);

		expect(result.currentGrade).toEqual({ grade: 'P', ucasPoints: 8 });
		expect(result.expectedGrade).toEqual({ grade: 'D*', ucasPoints: 28 });
		expect(result.maximumGrade).toEqual({ grade: 'D*', ucasPoints: 28 });
		expect(result.breakdown.completedUnits).toBe(1);
	});
});

describe('InformationRepository', () => {
	it('returns supported courses for a known subject', () => {
		const courses = findCoursesBySubject('computing');
		expect(courses.length).toBeGreaterThan(0);
		expect(courses.some((course) => course.courseType === 'National Extended Diploma')).toBe(true);
	});

	it('returns supported courses for applied science', () => {
		const courses = findCoursesBySubject('applied-science');
		expect(courses.length).toBe(5);
		expect(courses.some((course) => course.courseType === 'National Extended Certificate')).toBe(true);
	});

	it('returns supported courses for added subjects', () => {
		expect(findCoursesBySubject('it').length).toBe(5);
		expect(findCoursesBySubject('science').length).toBe(5);
		expect(findCoursesBySubject('healthcare').length).toBe(5);
	});
});

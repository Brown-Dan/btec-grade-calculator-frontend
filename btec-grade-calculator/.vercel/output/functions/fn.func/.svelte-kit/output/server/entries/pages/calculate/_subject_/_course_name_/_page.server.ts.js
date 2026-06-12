import { f as findCourseBySubjectAndType, U as Units, g as getGuidedLearningHoursByUnitName } from "../../../../../chunks/InformationRepository.js";
import { g as getPointsToGradeMap } from "../../../../../chunks/grades.js";
const EXTENDED_DIPLOMA_GRADE_TO_UCAS = {
  "D*D*D*": 168,
  "D*D*D": 160,
  "D*DD": 152,
  "DDD": 144,
  "DDM": 128,
  "DMM": 112,
  "MMM": 96,
  "MMP": 80,
  "MPP": 64,
  "PPP": 64
};
const DIPLOMA_GRADE_TO_UCAS = {
  "D*D*": 112,
  "D*D": 104,
  "DD": 96,
  "DM": 80,
  "MM": 64,
  "MP": 48,
  "PP": 32
};
const FOUNDATION_DIPLOMA_TO_UCAS = {
  "D*": 84,
  "D": 72,
  "M": 48,
  "P": 24
};
const EXTENDED_CERTIFICATE_TO_UCAS = {
  "D*": 56,
  "D": 48,
  "M": 32,
  "P": 16
};
const CERTIFICATE_TO_UCAS = {
  "D*": 28,
  "D": 24,
  "M": 16,
  "P": 8
};
const COURSE_TO_UCAS_MAP = {
  "National Certificate": CERTIFICATE_TO_UCAS,
  "National Extended Certificate": EXTENDED_CERTIFICATE_TO_UCAS,
  "National Foundation Diploma": FOUNDATION_DIPLOMA_TO_UCAS,
  "National Diploma": DIPLOMA_GRADE_TO_UCAS,
  "National Extended Diploma": EXTENDED_DIPLOMA_GRADE_TO_UCAS
};
function getUcasPointsFromGrade(courseName, grade) {
  const courseMap = COURSE_TO_UCAS_MAP[courseName];
  return courseMap ? courseMap[grade] ?? 0 : 0;
}
const CURRENT_GRADE_COEFFICIENT = 0;
const MAX_GRADE_COEFFICIENT = 2.66666667;
const PASS_GRADE_COEFFICIENT = 1;
const gradeCoefficientMap = /* @__PURE__ */ new Map([
  ["NOT_MARKED", PASS_GRADE_COEFFICIENT],
  ["UNCLASSIFIED", 0],
  ["NEAR_PASS", 0.66666667],
  ["PASS", PASS_GRADE_COEFFICIENT],
  ["MERIT", 1.66666667],
  ["DISTINCTION", 2.66666667]
]);
function calculateGrades(gradeCalculationRequest) {
  const actualCourse = findCourseBySubjectAndType(gradeCalculationRequest.subject, gradeCalculationRequest.courseType);
  const missingOptionalUnitCount = actualCourse.unitCount - gradeCalculationRequest.units.length;
  for (let i = 0; i < missingOptionalUnitCount; i++) {
    gradeCalculationRequest.units.push({
      unitName: Units.GENERIC_OPTIONAL_UNIT,
      grade: "NOT_MARKED"
    });
  }
  const completedUnits = gradeCalculationRequest.units.filter((unit) => unit.grade !== "NOT_MARKED");
  const predictedCoefficient = completedUnits.length === 0 ? PASS_GRADE_COEFFICIENT : completedUnits.map((unit) => gradeCoefficientMap.get(unit.grade)).reduce((sum, coefficient) => sum + coefficient, 0) / completedUnits.length;
  const pointGradeMap = getPointsToGradeMap(gradeCalculationRequest.courseType);
  const currentGrade = mapGrades(pointsToGrade(pointGradeMap, getPoints(gradeCalculationRequest, CURRENT_GRADE_COEFFICIENT)));
  const expectedGrade = mapGrades(pointsToGrade(pointGradeMap, getPoints(gradeCalculationRequest, predictedCoefficient)));
  const maximumGrade = mapGrades(pointsToGrade(pointGradeMap, getPoints(gradeCalculationRequest, MAX_GRADE_COEFFICIENT)));
  const currentPoints = getPoints(gradeCalculationRequest, CURRENT_GRADE_COEFFICIENT);
  const expectedPoints = getPoints(gradeCalculationRequest, predictedCoefficient);
  const maximumPoints = getPoints(gradeCalculationRequest, MAX_GRADE_COEFFICIENT);
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
    },
    breakdown: {
      totalUnits: gradeCalculationRequest.units.length,
      completedUnits: completedUnits.length,
      coefficients: {
        current: CURRENT_GRADE_COEFFICIENT,
        expected: predictedCoefficient,
        maximum: MAX_GRADE_COEFFICIENT
      },
      points: {
        current: currentPoints,
        expected: expectedPoints,
        maximum: maximumPoints
      }
    }
  };
}
function getPoints(course, notMarkedCoefficient) {
  let totalPoints = 0;
  for (const unit of course.units) {
    if (unit.grade === "UNCLASSIFIED") {
      return 0;
    }
    const coefficient = unit.grade === "NOT_MARKED" ? notMarkedCoefficient : gradeCoefficientMap.get(unit.grade);
    if (coefficient === void 0) {
      continue;
    }
    totalPoints += Math.floor(coefficient * getGuidedLearningHoursByUnitName(unit.unitName) / 10);
  }
  return totalPoints;
}
function pointsToGrade(pointsToGradeMap, points) {
  let currentClosestThresholdDifference = Number.MAX_SAFE_INTEGER;
  let currentThreshold = 0;
  for (const threshold of pointsToGradeMap.keys()) {
    const difference = threshold - points;
    if (currentClosestThresholdDifference > 0 || difference <= 0 && difference > currentClosestThresholdDifference) {
      currentClosestThresholdDifference = difference;
      currentThreshold = threshold;
    }
  }
  return pointsToGradeMap.get(currentThreshold) || [];
}
function mapGrades(grades) {
  return grades.map((grade) => grade).join("");
}
const CALCULATION_COOKIE = "btec-calculator-state";
const parseSavedCalculation = (rawCookie) => {
  if (!rawCookie) {
    return;
  }
  try {
    return JSON.parse(rawCookie);
  } catch {
    return;
  }
};
const load = async ({ cookies }) => {
  const savedCalculation = parseSavedCalculation(cookies.get(CALCULATION_COOKIE));
  return {
    savedCalculation
  };
};
const actions = {
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
    const mandatoryGrades = {};
    const units = [];
    for (const unitName of course.mandatoryUnits) {
      const selectedGrade = String(data.get(`mandatory:${unitName}`) ?? "");
      const grade = selectedGrade || "NOT_MARKED";
      mandatoryGrades[unitName] = grade;
      units.push({ unitName, grade });
    }
    const optionalSelections = [];
    for (let i = 0; i < course.optionalUnitCount; i++) {
      const selectedUnitName = String(data.get(`optional-unit-${i}`) ?? "");
      const selectedGrade = String(data.get(`optional-grade-${i}`) ?? "");
      const optionState = {
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
    const chosenOptionalUnits = optionalSelections.map((selection) => selection.unitName).filter((unitName) => unitName.length > 0);
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
    const calculationRequest = {
      subject,
      courseType: course.courseType,
      units
    };
    const gradeCalculationResult = calculateGrades(calculationRequest);
    const formState = {
      mandatoryGrades,
      optionalSelections
    };
    const savedCalculation = {
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
      validationFailure: void 0
    };
  }
};
export {
  actions,
  load
};

const EXTENDED_DIPLOMA_GRADE_TO_UCAS: Record<string, number> = {
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

const DIPLOMA_GRADE_TO_UCAS: Record<string, number> = {
    "D*D*": 112,
    "D*D": 104,
    "DD": 96,
    "DM": 80,
    "MM": 64,
    "MP": 48,
    "PP": 32
};

const FOUNDATION_DIPLOMA_TO_UCAS: Record<string, number> = {
    "D*": 84,
    "D": 72,
    "M": 48,
    "P": 24
};

const EXTENDED_CERTIFICATE_TO_UCAS: Record<string, number> = {
    "D*": 56,
    "D": 48,
    "M": 32,
    "P": 16
};

const CERTIFICATE_TO_UCAS: Record<string, number> = {
    "D*": 28,
    "D": 24,
    "M": 16,
    "P": 8
};

const COURSE_TO_UCAS_MAP: Record<string, Record<string, number>> = {
    "National Certificate": CERTIFICATE_TO_UCAS,
    "National Extended Certificate": EXTENDED_CERTIFICATE_TO_UCAS,
    "National Foundation Diploma": FOUNDATION_DIPLOMA_TO_UCAS,
    "National Diploma": DIPLOMA_GRADE_TO_UCAS,
    "National Extended Diploma": EXTENDED_DIPLOMA_GRADE_TO_UCAS
};

export function getUcasPointsFromGrade(courseName: string, grade: string): number {
    const courseMap = COURSE_TO_UCAS_MAP[courseName];
    return courseMap ? courseMap[grade] ?? 0 : 0;
}

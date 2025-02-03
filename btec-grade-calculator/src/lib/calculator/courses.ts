import {UnitDetails, Units} from "$lib/calculator/units";
import type {Course} from "$lib/calculator/models";

export enum Courses {
    NATIONAL_CERTIFICATE_COMPUTING = "National Certificate in Computing",
    NATIONAL_EXTENDED_CERTIFICATE_COMPUTING = "National Extended Certificate in Computing",
    NATIONAL_FOUNDATION_DIPLOMA_COMPUTING = "National Foundation Diploma in Computing",
    NATIONAL_DIPLOMA_COMPUTING = "National Diploma in Computing",
    NATIONAL_EXTENDED_DIPLOMA_COMPUTING = "National Extended Diploma in Computing",
    NATIONAL_CERTIFICATE_BUSINESS = "National Certificate in Business",
    NATIONAL_EXTENDED_CERTIFICATE_BUSINESS = "National Extended Certificate in Business",
    NATIONAL_FOUNDATION_DIPLOMA_BUSINESS = "National Foundation Diploma in Business",
    NATIONAL_DIPLOMA_BUSINESS = "National Diploma in Business",
    NATIONAL_EXTENDED_DIPLOMA_BUSINESS = "National Extended Diploma in Business"
}

export const CourseDetails: Record<Courses, Course> = {
    [Courses.NATIONAL_CERTIFICATE_COMPUTING]: {
        subject: "COMPUTING",
        courseType: "National Certificate",
        mandatoryUnitEntities: [
            UnitDetails[Units.FUNDAMENTALS_OF_COMPUTER_SYSTEMS],
            UnitDetails[Units.IT_SYSTEMS_SECURITY_AND_ENCRYPTION]
        ],
        optionalUnitEntities: [],
        guidedLearningHours: 180,
        maximumUcasPoints: 28,
        aLevelEquivalent: "0.5 A Levels",
        description: "This qualification is designed to be an introduction to the computing sector through applied learning. The qualification supports progression to higher education when taken as part of a programme of study that includes other vocational or general qualifications.",
        optionalUnitCount: 0
    },
    [Courses.NATIONAL_EXTENDED_CERTIFICATE_COMPUTING]: {
        subject: "COMPUTING",
        courseType: "National Extended Certificate",
        mandatoryUnitEntities: [
            UnitDetails[Units.PRINCIPLES_OF_COMPUTER_SCIENCE],
            UnitDetails[Units.FUNDAMENTALS_OF_COMPUTER_SYSTEMS],
            UnitDetails[Units.IT_SYSTEMS_SECURITY_AND_ENCRYPTION]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.HUMAN_COMPUTER_INTERACTION],
            UnitDetails[Units.DIGITAL_GRAPHICS_AND_ANIMATION],
            UnitDetails[Units.COMPUTER_GAMES_DEVELOPMENT],
            UnitDetails[Units.WEBSITE_DEVELOPMENT],
            UnitDetails[Units.MOBILE_APPS_DEVELOPMENT],
            UnitDetails[Units.MANAGING_AND_SUPPORTING_SYSTEMS],
            UnitDetails[Units.SYSTEMS_ANALYSIS_AND_DESIGN]
        ],
        guidedLearningHours: 360,
        maximumUcasPoints: 56,
        aLevelEquivalent: "1 A Level",
        description: "This qualification is designed to support learners who are interested in learning about the computing sector alongside other fields of study, with a view to progressing to a wide range of higher education courses, not necessarily in the computing sector. It is designed to be taken as part of a programme of study that includes other appropriate BTEC Nationals or A Levels.",
        optionalUnitCount: 1
    },
    [Courses.NATIONAL_FOUNDATION_DIPLOMA_COMPUTING]: {
        subject: "COMPUTING",
        courseType: "National Foundation Diploma",
        mandatoryUnitEntities: [
            UnitDetails[Units.PRINCIPLES_OF_COMPUTER_SCIENCE],
            UnitDetails[Units.FUNDAMENTALS_OF_COMPUTER_SYSTEMS],
            UnitDetails[Units.IT_SYSTEMS_SECURITY_AND_ENCRYPTION],
            UnitDetails[Units.BUSINESS_APPLICATIONS_OF_SOCIAL_MEDIA]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.HUMAN_COMPUTER_INTERACTION],
            UnitDetails[Units.DIGITAL_GRAPHICS_AND_ANIMATION],
            UnitDetails[Units.COMPUTER_GAMES_DEVELOPMENT],
            UnitDetails[Units.WEBSITE_DEVELOPMENT],
            UnitDetails[Units.MOBILE_APPS_DEVELOPMENT],
            UnitDetails[Units.MANAGING_AND_SUPPORTING_SYSTEMS],
            UnitDetails[Units.SYSTEMS_ANALYSIS_AND_DESIGN]
        ],
        guidedLearningHours: 510,
        maximumUcasPoints: 84,
        aLevelEquivalent: "1.5 A Levels",
        description: "This qualification is designed to support learners who wish to study computing as a one-year, full-time course, or for those wishing to take it alongside another area of complementary or contrasting study, as part of a two-year, full-time study programme. If taken as part of a programme of study that includes other appropriate BTEC Nationals or A Levels, it supports progression to higher education.",
        optionalUnitCount: 2
    },
    [Courses.NATIONAL_DIPLOMA_COMPUTING]: {
        subject: "COMPUTING",
        courseType: "National Diploma",
        mandatoryUnitEntities: [
            UnitDetails[Units.PRINCIPLES_OF_COMPUTER_SCIENCE],
            UnitDetails[Units.FUNDAMENTALS_OF_COMPUTER_SYSTEMS],
            UnitDetails[Units.IT_SYSTEMS_SECURITY_AND_ENCRYPTION],
            UnitDetails[Units.BUSINESS_APPLICATIONS_OF_SOCIAL_MEDIA],
            UnitDetails[Units.THE_IMPACT_OF_COMPUTING]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.HUMAN_COMPUTER_INTERACTION],
            UnitDetails[Units.DIGITAL_GRAPHICS_AND_ANIMATION],
            UnitDetails[Units.COMPUTER_GAMES_DEVELOPMENT],
            UnitDetails[Units.WEBSITE_DEVELOPMENT],
            UnitDetails[Units.MOBILE_APPS_DEVELOPMENT],
            UnitDetails[Units.MANAGING_AND_SUPPORTING_SYSTEMS],
            UnitDetails[Units.SYSTEMS_ANALYSIS_AND_DESIGN],
            UnitDetails[Units.DIGITAL_AUDIO],
            UnitDetails[Units.DIGITAL_VIDEO],
            UnitDetails[Units.OBJECT_ORIENTED_PROGRAMMING],
            UnitDetails[Units.RELATIONAL_DATABASE_DEVELOPMENT],
            UnitDetails[Units.COMPUTER_NETWORKING],
            UnitDetails[Units.VIRTUALISATION],
            UnitDetails[Units.SYSTEMS_METHODOLOGY]
        ],
        guidedLearningHours: 720,
        maximumUcasPoints: 112,
        aLevelEquivalent: "2 A Levels",
        description: "This qualification is designed to support learners who want an in-depth study of the computing sector as part of a 16–19 study programme. This programme may include other BTEC Nationals or A Levels to support progression to higher education courses in computing areas before entering employment. The additional qualification(s) studied allow learners either to give breadth to their study programme by choosing a contrasting subject, or to give it more focus by choosing a complementary subject.",
        optionalUnitCount: 2
    },
    [Courses.NATIONAL_EXTENDED_DIPLOMA_COMPUTING]: {
        subject: "COMPUTING",
        courseType: "National Extended Diploma",
        mandatoryUnitEntities: [
            UnitDetails[Units.PRINCIPLES_OF_COMPUTER_SCIENCE],
            UnitDetails[Units.FUNDAMENTALS_OF_COMPUTER_SYSTEMS],
            UnitDetails[Units.IT_SYSTEMS_SECURITY_AND_ENCRYPTION],
            UnitDetails[Units.BUSINESS_APPLICATIONS_OF_SOCIAL_MEDIA],
            UnitDetails[Units.THE_IMPACT_OF_COMPUTING],
            UnitDetails[Units.SOFTWARE_DESIGN_AND_DEVELOPMENT_PROJECT],
            UnitDetails[Units.PLANNING_AND_MANAGEMENT_OF_COMPUTING_PROJECTS]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.HUMAN_COMPUTER_INTERACTION],
            UnitDetails[Units.DIGITAL_GRAPHICS_AND_ANIMATION],
            UnitDetails[Units.COMPUTER_GAMES_DEVELOPMENT],
            UnitDetails[Units.WEBSITE_DEVELOPMENT],
            UnitDetails[Units.MOBILE_APPS_DEVELOPMENT],
            UnitDetails[Units.MANAGING_AND_SUPPORTING_SYSTEMS],
            UnitDetails[Units.SYSTEMS_ANALYSIS_AND_DESIGN],
            UnitDetails[Units.DIGITAL_AUDIO],
            UnitDetails[Units.DIGITAL_VIDEO],
            UnitDetails[Units.OBJECT_ORIENTED_PROGRAMMING],
            UnitDetails[Units.RELATIONAL_DATABASE_DEVELOPMENT],
            UnitDetails[Units.COMPUTER_NETWORKING],
            UnitDetails[Units.VIRTUALISATION],
            UnitDetails[Units.SYSTEMS_METHODOLOGY]
        ],
        guidedLearningHours: 1080,
        maximumUcasPoints: 168,
        aLevelEquivalent: "3 A Levels",
        description: "This qualification is designed to support learners who are interested in a two-year, full-time course that meets entry requirements for a course in computer-related study at higher education. The qualification enables learners to explore a choice of sector areas, enabling progression to either higher education or employment in the computing sector.",
        optionalUnitCount: 6
    },
    [Courses.NATIONAL_CERTIFICATE_BUSINESS]: {
        subject: "BUSINESS",
        courseType: "National Certificate",
        mandatoryUnitEntities: [
            UnitDetails[Units.EXPLORING_BUSINESS],
            UnitDetails[Units.DEVELOPING_A_MARKETING_CAMPAIGN]
        ],
        optionalUnitEntities: [],
        guidedLearningHours: 180,
        maximumUcasPoints: 28,
        aLevelEquivalent: "0.5 A Levels",
        description: `The Certificate offers an introduction to a vocational sector through applied learning.
        For learners for whom an element of business would be complementary, the qualification supports progression
        to higher education when taken as part of a programme of study that includes other vocational or general qualifications.`,
        optionalUnitCount: 0
    },
    [Courses.NATIONAL_EXTENDED_CERTIFICATE_BUSINESS]: {
        subject: "BUSINESS",
        courseType: "National Extended Certificate",
        mandatoryUnitEntities: [
            UnitDetails[Units.EXPLORING_BUSINESS],
            UnitDetails[Units.DEVELOPING_A_MARKETING_CAMPAIGN],
            UnitDetails[Units.PERSONAL_AND_BUSINESS_FINANCE]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.RECRUITMENT_AND_SELECTION_PROCESS],
            UnitDetails[Units.INVESTIGATING_CUSTOMER_SERVICE],
            UnitDetails[Units.MARKET_RESEARCH],
            UnitDetails[Units.THE_ENGLISH_LEGAL_SYSTEM],
            UnitDetails[Units.WORK_EXPERIENCE_IN_BUSINESS]
        ],
        guidedLearningHours: 360,
        maximumUcasPoints: 56,
        aLevelEquivalent: "1 A Level",
        description: `The Extended Certificate is for learners who are interested in learning about the business sector
        alongside other fields of study, with a view to progressing to a wide range of higher education courses, not necessarily in business-related subjects.
        It is designed to be taken as part of a programme of study that includes other appropriate BTEC Nationals or A Levels.`,
        optionalUnitCount: 1
    },
    [Courses.NATIONAL_FOUNDATION_DIPLOMA_BUSINESS]: {
        subject: "BUSINESS",
        courseType: "National Foundation Diploma",
        mandatoryUnitEntities: [
            UnitDetails[Units.EXPLORING_BUSINESS],
            UnitDetails[Units.DEVELOPING_A_MARKETING_CAMPAIGN],
            UnitDetails[Units.PERSONAL_AND_BUSINESS_FINANCE],
            UnitDetails[Units.MANAGING_AN_EVENT]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.RECRUITMENT_AND_SELECTION_PROCESS],
            UnitDetails[Units.INVESTIGATING_CUSTOMER_SERVICE],
            UnitDetails[Units.MARKET_RESEARCH],
            UnitDetails[Units.THE_ENGLISH_LEGAL_SYSTEM],
            UnitDetails[Units.WORK_EXPERIENCE_IN_BUSINESS],
            UnitDetails[Units.RECORDING_FINANCIAL_TRANSACTIONS],
            UnitDetails[Units.COST_AND_MANAGEMENT_ACCOUNTING],
            UnitDetails[Units.INVESTIGATING_RETAIL_BUSINESS],
            UnitDetails[Units.VISUAL_MERCHANDISING],
            UnitDetails[Units.DIGITAL_MARKETING],
            UnitDetails[Units.PITCHING_FOR_A_NEW_BUSINESS],
            UnitDetails[Units.TRAINING_AND_DEVELOPMENT],
            UnitDetails[Units.EMPLOYMENT_LAW],
            UnitDetails[Units.EFFECTIVE_MANAGEMENT_OF_PERSONAL_DEBT],
            UnitDetails[Units.SUPPLY_CHAIN_OPERATIONS],
        ],
        guidedLearningHours: 510,
        maximumUcasPoints: 84,
        aLevelEquivalent: "1.5 A Levels",
        description: `The Foundation Diploma is for learners looking to study business as a one-year, full-time course,
        or for those wishing to take it alongside another area of contrasting or complementary study.`,
        optionalUnitCount: 2
    },
    [Courses.NATIONAL_DIPLOMA_BUSINESS]: {
        subject: "BUSINESS",
        courseType: "National Diploma",
        mandatoryUnitEntities: [
            UnitDetails[Units.EXPLORING_BUSINESS],
            UnitDetails[Units.DEVELOPING_A_MARKETING_CAMPAIGN],
            UnitDetails[Units.PERSONAL_AND_BUSINESS_FINANCE],
            UnitDetails[Units.MANAGING_AN_EVENT],
            UnitDetails[Units.INTERNATIONAL_BUSINESS],
            UnitDetails[Units.PRINCIPLES_OF_MANAGEMENT]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.RECRUITMENT_AND_SELECTION_PROCESS],
            UnitDetails[Units.INVESTIGATING_CUSTOMER_SERVICE],
            UnitDetails[Units.MARKET_RESEARCH],
            UnitDetails[Units.THE_ENGLISH_LEGAL_SYSTEM],
            UnitDetails[Units.WORK_EXPERIENCE_IN_BUSINESS],
            UnitDetails[Units.RECORDING_FINANCIAL_TRANSACTIONS],
            UnitDetails[Units.COST_AND_MANAGEMENT_ACCOUNTING],
            UnitDetails[Units.INVESTIGATING_RETAIL_BUSINESS],
            UnitDetails[Units.VISUAL_MERCHANDISING],
            UnitDetails[Units.DIGITAL_MARKETING],
            UnitDetails[Units.PITCHING_FOR_A_NEW_BUSINESS],
            UnitDetails[Units.TRAINING_AND_DEVELOPMENT],
            UnitDetails[Units.EMPLOYMENT_LAW],
            UnitDetails[Units.EFFECTIVE_MANAGEMENT_OF_PERSONAL_DEBT],
            UnitDetails[Units.SUPPLY_CHAIN_OPERATIONS],
            UnitDetails[Units.TEAM_BUILDING_IN_BUSINESS],
            UnitDetails[Units.FINANCIAL_STATEMENTS_FOR_SPECIFIC_BUSINESSES],
            UnitDetails[Units.FINAL_ACCOUNTS_FOR_PUBLIC_LIMITED_COMPANIES],
            UnitDetails[Units.INVESTIGATING_CORPORATE_SOCIAL_RESPONSIBILITY],
            UnitDetails[Units.CREATIVE_PROMOTION],
            UnitDetails[Units.ASPECTS_OF_CIVIL_LIABILITY_AFFECTING_BUSINESS],
            UnitDetails[Units.ASPECTS_OF_CRIMINAL_LAW_IMPACTING_ON_BUSINESS_AND_INDIVIDUALS],
        ],
        guidedLearningHours: 720,
        maximumUcasPoints: 112,
        aLevelEquivalent: "2 A Levels",
        description: `The Diploma is designed to be the substantive part of a 16–19 study programme for learners who want
        a strong core of sector study. This qualification can also be used to progress to Higher Apprenticeships.`,
        optionalUnitCount: 2
    },
    [Courses.NATIONAL_EXTENDED_DIPLOMA_BUSINESS]: {
        subject: "BUSINESS",
        courseType: "National Extended Diploma",
        mandatoryUnitEntities: [
            UnitDetails[Units.EXPLORING_BUSINESS],
            UnitDetails[Units.DEVELOPING_A_MARKETING_CAMPAIGN],
            UnitDetails[Units.PERSONAL_AND_BUSINESS_FINANCE],
            UnitDetails[Units.MANAGING_AN_EVENT],
            UnitDetails[Units.INTERNATIONAL_BUSINESS],
            UnitDetails[Units.PRINCIPLES_OF_MANAGEMENT],
            UnitDetails[Units.BUSINESS_DECISION_MAKING]
        ],
        optionalUnitEntities: [
            UnitDetails[Units.RECRUITMENT_AND_SELECTION_PROCESS],
            UnitDetails[Units.INVESTIGATING_CUSTOMER_SERVICE],
            UnitDetails[Units.MARKET_RESEARCH],
            UnitDetails[Units.THE_ENGLISH_LEGAL_SYSTEM],
            UnitDetails[Units.WORK_EXPERIENCE_IN_BUSINESS],
            UnitDetails[Units.RECORDING_FINANCIAL_TRANSACTIONS],
            UnitDetails[Units.COST_AND_MANAGEMENT_ACCOUNTING],
            UnitDetails[Units.INVESTIGATING_RETAIL_BUSINESS],
            UnitDetails[Units.VISUAL_MERCHANDISING],
            UnitDetails[Units.DIGITAL_MARKETING],
            UnitDetails[Units.PITCHING_FOR_A_NEW_BUSINESS],
            UnitDetails[Units.TRAINING_AND_DEVELOPMENT],
            UnitDetails[Units.EMPLOYMENT_LAW],
            UnitDetails[Units.EFFECTIVE_MANAGEMENT_OF_PERSONAL_DEBT],
            UnitDetails[Units.SUPPLY_CHAIN_OPERATIONS],
            UnitDetails[Units.TEAM_BUILDING_IN_BUSINESS],
            UnitDetails[Units.FINANCIAL_STATEMENTS_FOR_SPECIFIC_BUSINESSES],
            UnitDetails[Units.FINAL_ACCOUNTS_FOR_PUBLIC_LIMITED_COMPANIES],
            UnitDetails[Units.INVESTIGATING_CORPORATE_SOCIAL_RESPONSIBILITY],
            UnitDetails[Units.CREATIVE_PROMOTION],
            UnitDetails[Units.ASPECTS_OF_CIVIL_LIABILITY_AFFECTING_BUSINESS],
            UnitDetails[Units.ASPECTS_OF_CRIMINAL_LAW_IMPACTING_ON_BUSINESS_AND_INDIVIDUALS],
            UnitDetails[Units.BRANDING],
            UnitDetails[Units.RELATIONSHIP_MARKETING],
            UnitDetails[Units.LEGAL_PRINCIPLES_AND_PROFESSIONAL_ETHICS_IN_FINANCIAL_SERVICES],
            UnitDetails[Units.BUYING_FOR_BUSINESS],
            UnitDetails[Units.INVESTMENT_OPPORTUNITIES_AND_FINANCIAL_PLANNING],
            UnitDetails[Units.INSURANCE_PRINCIPLES_AND_POLICIES],
        ],
        guidedLearningHours: 1080,
        maximumUcasPoints: 168,
        aLevelEquivalent: "3 A Levels",
        description: `The Extended Diploma is a two-year, full-time course that meets entry requirements in its own right
        for learners who want to progress to higher education courses in business areas before entering employment.`,
        optionalUnitCount: 6
    }
}

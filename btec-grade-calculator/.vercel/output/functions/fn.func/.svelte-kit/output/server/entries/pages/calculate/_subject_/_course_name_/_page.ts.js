import { f as findCourseBySubjectAndType } from "../../../../../chunks/InformationRepository.js";
const load = async ({ params }) => {
  return {
    course_unit_data: findCourseBySubjectAndType(params.subject, params.course_name.replaceAll("-", " ")),
    subject: params.subject
  };
};
export {
  load
};

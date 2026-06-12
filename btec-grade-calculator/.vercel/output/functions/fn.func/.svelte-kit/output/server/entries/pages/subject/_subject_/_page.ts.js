import { a as findCoursesBySubject } from "../../../../chunks/InformationRepository.js";
const load = async ({ fetch, params }) => {
  return {
    supportedTypes: findCoursesBySubject(params.subject).map((course) => course.courseType),
    subject: params.subject
  };
};
export {
  load
};

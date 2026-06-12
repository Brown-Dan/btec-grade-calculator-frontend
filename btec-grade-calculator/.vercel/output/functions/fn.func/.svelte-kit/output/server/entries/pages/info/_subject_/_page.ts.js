import { a as findCoursesBySubject } from "../../../../chunks/InformationRepository.js";
const load = async ({ fetch, params }) => {
  return {
    courses: findCoursesBySubject(params.subject),
    subject: params.subject
  };
};
export {
  load
};

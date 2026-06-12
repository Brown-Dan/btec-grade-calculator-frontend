import { c as create_ssr_component, e as escape, a as add_attribute, j as each } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const subject = data.subject;
  const courses = data.courses;
  const toSlug = (value) => value.toLowerCase().replaceAll(" ", "-");
  const subjectTitle = subject.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-6q3me0_START -->${$$result.title = `<title>${escape(subjectTitle)} BTEC Course Guide | BTEC Grade Calculator</title>`, ""}<meta name="description"${add_attribute("content", `Need help deciding? Compare ${subjectTitle} BTEC course sizes, guided learning hours and units before calculating your grade.`, 0)}><meta property="og:title"${add_attribute("content", `${subjectTitle} BTEC Course Guide | BTEC Grade Calculator`, 0)}><meta property="og:description"${add_attribute("content", `Compare ${subjectTitle} BTEC course options and jump into grade calculation.`, 0)}><meta property="og:url"${add_attribute("content", `https://www.btecgradecalculator.com/info/${subject}`, 0)}><meta name="twitter:title"${add_attribute("content", `${subjectTitle} BTEC Course Guide | BTEC Grade Calculator`, 0)}><meta name="twitter:description"${add_attribute("content", `Compare ${subjectTitle} BTEC course options and jump into grade calculation.`, 0)}><!-- HEAD_svelte-6q3me0_END -->`, ""} <div class="container mx-auto px-4 md:px-16 py-8"><div class="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl backdrop-blur-xl"><p class="text-xs uppercase tracking-[0.2em] text-cyan-200/80" data-svelte-h="svelte-1oxiu67">Need help deciding</p> <h2 class="mt-3 text-3xl md:text-4xl font-black tracking-tight">${escape(subjectTitle)} course information</h2> <p class="mt-3 text-slate-300" data-svelte-h="svelte-5vc9jn">Compare course sizes, then jump straight into the calculator.</p></div> <div class="grid gap-4 mt-6">${each(courses, (course) => {
    return `<div class="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-lg transition hover:border-cyan-300/40"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3"><div><h3 class="text-xl font-bold tracking-tight">${escape(course.courseType)}</h3> <p class="mt-2 text-slate-100">${escape(course.description)}</p> <p class="mt-2 text-slate-300">${escape(course.guidedLearningHours)} guided learning hours · ${escape(course.unitCount)} units
                        </p></div> <div class="flex gap-2"><a class="btn variant-filled-primary"${add_attribute("href", "/calculate/" + subject + "/" + toSlug(course.courseType), 0)}>Use this course</a> </div></div> </div>`;
  })}</div></div>`;
});
export {
  Page as default
};

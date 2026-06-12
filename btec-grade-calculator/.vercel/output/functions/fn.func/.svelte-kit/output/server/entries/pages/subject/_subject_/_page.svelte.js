import { c as create_ssr_component, e as escape, a as add_attribute, j as each } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const subject = data.subject;
  const supported_types = data.supportedTypes;
  const subjectTitle = subject.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
  const toSlug = (value) => value.toLowerCase().replaceAll(" ", "-");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1wqttf6_START -->${$$result.title = `<title>${escape(subjectTitle)} BTEC Courses | BTEC Grade Calculator</title>`, ""}<meta name="description"${add_attribute("content", `Choose a ${subjectTitle} BTEC course size and start calculating your current, expected and maximum grades.`, 0)}><meta property="og:title"${add_attribute("content", `${subjectTitle} BTEC Courses | BTEC Grade Calculator`, 0)}><meta property="og:description"${add_attribute("content", `Compare ${subjectTitle} BTEC course sizes and calculate grade outcomes instantly.`, 0)}><meta property="og:url"${add_attribute("content", `https://www.btecgradecalculator.com/subject/${subject}`, 0)}><meta name="twitter:title"${add_attribute("content", `${subjectTitle} BTEC Courses | BTEC Grade Calculator`, 0)}><meta name="twitter:description"${add_attribute("content", `Compare ${subjectTitle} BTEC course sizes and calculate grade outcomes instantly.`, 0)}><!-- HEAD_svelte-1wqttf6_END -->`, ""} <div class="container h-full mx-auto px-4 md:px-16 py-8"><div class="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl backdrop-blur-xl"><div class="text-center"><p class="text-xs uppercase tracking-[0.2em] text-cyan-200/80" data-svelte-h="svelte-1cz1yy0">Choose pathway</p> <h2 class="pt-3 text-3xl md:text-4xl font-black tracking-tight" data-svelte-h="svelte-1qvqka8">Choose your BTEC course size</h2> <h3 class="mt-3 text-slate-300">Need help deciding? Visit
                <a class="anchor font-semibold" href="${"/info/" + escape(subject, true)}">course information</a>.</h3></div> <nav class="mt-8"><ul class="grid gap-4 md:grid-cols-2">${each(supported_types, (course_type) => {
    return `<li class="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-lg transition hover:border-cyan-300/40 hover:bg-black/30"><div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><span class="text-lg md:text-xl font-bold tracking-tight">${escape(course_type)}</span> <div class="flex gap-2"><a class="btn variant-filled-primary" href="${"/calculate/" + escape(subject, true) + "/" + escape(toSlug(course_type), true)}">Start calculating</a> </div></div> </li>`;
  })}</ul></nav></div></div>`;
});
export {
  Page as default
};

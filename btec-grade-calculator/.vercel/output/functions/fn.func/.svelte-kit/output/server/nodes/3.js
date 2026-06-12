import * as universal from '../entries/pages/calculate/_subject_/_course_name_/_page.ts.js';
import * as server from '../entries/pages/calculate/_subject_/_course_name_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calculate/_subject_/_course_name_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/calculate/[subject]/[course_name]/+page.ts";
export { server };
export const server_id = "src/routes/calculate/[subject]/[course_name]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CwWFZXHo.js","_app/immutable/chunks/InformationRepository.BAvWrWar.js","_app/immutable/chunks/scheduler.DTDmOYLK.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.B1DGTWBL.js","_app/immutable/chunks/entry.IeV-yGn0.js","_app/immutable/chunks/index.DEYCpU7K.js","_app/immutable/chunks/stores.DaUwwDQk.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.CJ0D0XsA.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
export const fonts = [];

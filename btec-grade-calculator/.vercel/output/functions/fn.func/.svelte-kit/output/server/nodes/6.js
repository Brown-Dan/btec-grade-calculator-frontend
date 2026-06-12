import * as universal from '../entries/pages/info/_subject_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_subject_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/[subject]/+page.ts";
export const imports = ["_app/immutable/nodes/6.CLup16bI.js","_app/immutable/chunks/InformationRepository.BAvWrWar.js","_app/immutable/chunks/scheduler.DTDmOYLK.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.B1DGTWBL.js"];
export const stylesheets = [];
export const fonts = [];

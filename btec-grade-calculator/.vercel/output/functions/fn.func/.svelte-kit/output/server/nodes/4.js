

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/error/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.JA8a7SS0.js","_app/immutable/chunks/scheduler.DTDmOYLK.js","_app/immutable/chunks/index.B1DGTWBL.js"];
export const stylesheets = [];
export const fonts = [];

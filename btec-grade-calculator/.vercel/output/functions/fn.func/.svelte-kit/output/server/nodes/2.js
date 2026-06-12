

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Dh4LnwEJ.js","_app/immutable/chunks/scheduler.DTDmOYLK.js","_app/immutable/chunks/index.B1DGTWBL.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.DDNWH9xG.css"];
export const fonts = [];

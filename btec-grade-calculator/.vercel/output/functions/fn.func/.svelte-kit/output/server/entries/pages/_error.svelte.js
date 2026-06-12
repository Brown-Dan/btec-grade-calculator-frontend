import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex justify-center overflow-scroll mt-5"><div class="p-8 rounded-lg shadow-2xl m-5 text-center"><div class="text-center mb-6" data-svelte-h="svelte-8ewrb9"><h1 class="text-4xl font-bold text-white h1 p-5">Page Not Found</h1> <p class="text-lg mt-2 font-extrabold">We apologize, but the page you are looking for cannot be found.</p></div> <div class="my-6 p-5" data-svelte-h="svelte-tst2b4"><img src="https://i.kym-cdn.com/photos/images/newsfeed/001/042/619/4ea.jpg" alt="Funny Apology GIF" class="mx-auto"></div> <div class="text-center p-5" data-svelte-h="svelte-1dfatg8"><p class="text-lg font-extrabold">Please double-check the URL you entered to ensure it is correct.</p> <p class="text-lg mt-6 font-extrabold">Thank you for your patience and understanding!</p> <p class="text-sm mt-4">If you believe this is an error, please contact our support team for assistance.</p></div> <button class="btn btn-xl variant-filled" data-svelte-h="svelte-llq1u">Go Home</button></div></div>`;
});
export {
  Error as default
};

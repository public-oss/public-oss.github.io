/*!
 * KoliBri - The accessible HTML-Standard
 */
setInterval(() => {
  const e2 = document.querySelectorAll("kol-accordion,kol-details");
  e2 && e2.forEach((e3) => {
    e3.hasAttribute("_open") ? e3.removeAttribute("_open") : e3.setAttribute("_open", "");
  });
}, 1e3);
const e = {};
export {
  e as default
};

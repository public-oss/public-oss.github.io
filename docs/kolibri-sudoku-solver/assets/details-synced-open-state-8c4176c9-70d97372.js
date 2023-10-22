/*!
 * KoliBri - The accessible HTML-Standard
 */
const n = document.getElementById("details"), t = document.getElementById("button");
n._on = { onToggle: (e2, n2) => {
  t._label = "👆Details " + (n2 ? "schließen" : "öffnen");
} }, t._on = { onClick: () => {
  n._open = !n._open;
} };
const e = {};
export {
  e as default
};

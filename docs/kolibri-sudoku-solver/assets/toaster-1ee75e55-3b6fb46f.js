/*!
 * KoliBri - The accessible HTML-Standard
 */
class s {
  constructor(t2) {
    this.document = t2, this.toastContainerElement = this.document.createElement("kol-toast-container"), this.document.body.prepend(this.toastContainerElement);
  }
  static getInstance(t2) {
    let e = this.instances.get(t2);
    return e || (e = new s(t2), this.instances.set(t2, e)), e;
  }
  dispose() {
    const t2 = this.toastContainerElement;
    t2 ? (this.toastContainerElement = void 0, t2.remove()) : console.warn("Toaster service is already disposed.");
  }
  async enqueue(t2) {
    var e;
    await (null === (e = this.toastContainerElement) || void 0 === e ? void 0 : e.enqueue(t2));
  }
}
s.instances = /* @__PURE__ */ new Map();
/*!
 * KoliBri - The accessible HTML-Standard
 */
var t, i;
const a = s.getInstance(document);
a.enqueue({ description: "Toasty", label: "Initial Toast", type: "warning" });
let l = 0;
null === (t = document.getElementById("oneToast")) || void 0 === t || t.addEventListener("kol-click", () => {
  a.enqueue({ description: "Toasty " + ++l, label: "Label", type: "warning" });
}), null === (i = document.getElementById("manyToast")) || void 0 === i || i.addEventListener("kol-click", () => {
  for (let e = 0; e < 5; e++)
    a.enqueue({ description: "Toasty " + ++l, label: "Label", type: "warning" });
});

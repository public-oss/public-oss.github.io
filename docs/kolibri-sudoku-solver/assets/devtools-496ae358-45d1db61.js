import { o as oe, J as J$1, r as re, e as ee, c as ce, t as te, n as ne, l as le } from "./index-871f55f1.js";
/*!
 * KoliBri - The accessible HTML-Standard
 */
const s = (t, e) => {
  e.forEach((e2) => {
    false === t.has(e2) && t.add(e2);
  });
}, o = (t, e = document) => {
  if (e instanceof Document || e instanceof HTMLElement || e instanceof ShadowRoot) {
    const r = /* @__PURE__ */ new Set();
    s(r, e.querySelectorAll(t));
    const n = e.querySelectorAll('[class*="hydrated"]');
    for (let e2 = 0; e2 < n.length; e2++) {
      const i = n[e2].shadowRoot;
      s(r, o(t, "object" == typeof i && null !== i ? i : n[e2]));
    }
    return Array.from(r);
  }
  throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.");
}, u$1 = (t, e = document) => {
  if (e instanceof Document || e instanceof HTMLElement || e instanceof ShadowRoot) {
    let r = e.querySelector(t);
    if (null === r) {
      const n = e.querySelectorAll('[class*="hydrated"]');
      for (let e2 = 0; e2 < n.length; e2++) {
        const o2 = n[e2].shadowRoot;
        if (r = u$1(t, "object" == typeof o2 && null !== o2 ? o2 : n[e2]), null !== r)
          break;
      }
    }
    return r;
  }
  throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.");
};
var a = v$1, c = v$1, f = p, l = b, d = y, h$1 = m;
function v$1(t) {
  var e = w(t);
  return 3 == e.length ? e.concat(255) : (e[3] = Math.round(e[3]), e);
}
function p(t) {
  var e = w(t);
  return { r: e[0], g: e[1], b: e[2], a: 3 == e.length ? 255 : Math.round(e[3]) };
}
function b(t) {
  var e = w(t);
  return 3 == e.length && e.push(255), 255 == e[3] ? "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")" : 0 == e[3] ? "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", 0)" : "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + String(e[3] / 255).substr(1) + ")";
}
function y(t) {
  3 == (e = w(t)).length && e.push(255);
  var e, r = 255 == e[3], n = g(e[0]), o2 = g(e[1]), s2 = g(e[2]), i = S(n, o2, s2, e = g(Math.round(e[3])));
  return r ? i ? "#" + n.charAt(0) + o2.charAt(0) + s2.charAt(0) : "#" + n + o2 + s2 : i ? "#" + n.charAt(0) + o2.charAt(0) + s2.charAt(0) + e.charAt(0) : "#" + n + o2 + s2 + e;
}
function m(t) {
  var e = w(t);
  return 3 == e.length ? e.push(255) : e[3] = Math.round(e[3]), (e[3] << 24 >>> 0 | e[0] << 16 | e[1] << 8 | e[2]) >>> 0;
}
function w(t) {
  return "string" == typeof t ? N(t = t.toLowerCase()) || O(t) || _(t) || $(t) || k(t) || [0, 0, 0, 255] : j(t) || A(t) || x(t) || [0, 0, 0, 255];
}
function g(t) {
  var e = t.toString(16);
  return 1 == e.length ? "0" + e : e;
}
function S(t, e, r, n) {
  var o2 = ["ff", "00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "aa", "bb", "cc", "dd", "ee"];
  return -1 != o2.indexOf(t) && -1 != o2.indexOf(e) && -1 != o2.indexOf(r) && -1 != o2.indexOf(n);
}
function N(t) {
  return "red" == t ? [255, 0, 0] : "green" == t ? [0, 255, 0] : "blue" == t ? [0, 0, 255] : "black" == t ? [0, 0, 0] : "white" == t ? [255, 255, 255] : "cyan" == t ? [0, 255, 255] : "gray" == t || "grey" == t ? [128, 128, 128] : "magenta" == t || "pink" == t ? [255, 0, 255] : "yellow" == t ? [255, 255, 0] : void 0;
}
function E(t) {
  return 1 == t.length ? parseInt(t + t, 16) : parseInt(t, 16);
}
function O(t) {
  var e = t.replace(/^#/, ""), r = e.length;
  if (3 == r || 4 == r) {
    var n = E(e[0]), o2 = E(e[1]), s2 = E(e[2]), i = 3 == r ? 255 : E(e[3]);
    if (isNaN(n) || isNaN(o2) || isNaN(s2) || isNaN(i))
      return;
    return [n, o2, s2, i];
  }
}
function _(t) {
  var e = t.replace(/^#/, ""), r = e.length;
  if (6 == r || 8 == r) {
    var n = E(e.slice(0, 2)), o2 = E(e.slice(2, 4)), s2 = E(e.slice(4, 6)), i = 6 == r ? 255 : E(e.slice(6, 8));
    if (isNaN(n) || isNaN(o2) || isNaN(s2) || isNaN(i))
      return;
    return [n, o2, s2, i];
  }
}
function M(t, e) {
  return "number" != typeof t || true === e && Math.floor(t) !== t ? -1 : t >= 0 && t <= 255 ? t : -1;
}
function j(t) {
  if ("[object Object]" === Object.prototype.toString.call(t) && Object.getPrototypeOf(t) === Object.getPrototypeOf({})) {
    var e = M(null != t.r ? t.r : null != t.red ? t.red : 0, true), r = M(null != t.g ? t.g : null != t.green ? t.green : 0, true), n = M(null != t.b ? t.b : null != t.blue ? t.blue : 0, true), o2 = M(null != t.a ? t.a : null != t.alpha ? t.alpha : 255, true);
    if (-1 != e && -1 != r && -1 != n && -1 != o2)
      return [e, r, n, o2];
  }
}
function A(t) {
  if (Array.isArray(t) && (3 == t.length || 4 == t.length)) {
    var e = M(t[0], true), r = M(t[1], true), n = M(t[2], true), o2 = M(null != t[3] ? t[3] : 255, true);
    if (-1 != e && -1 != r && -1 != n && -1 != o2)
      return [e, r, n, o2];
  }
}
function x(t) {
  if ("number" == typeof t && Math.floor(t) == t && t <= 4294967295 && t >= 0)
    return [t >> 16 & 255, t >> 8 & 255, 255 & t, t >> 24 & 255];
}
function $(t) {
  if ("rgb(" == t.substr(0, 4)) {
    var e = (t = t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number), r = M(e[0], true), n = M(e[1], true), o2 = M(e[2], true);
    if (-1 != r && -1 != n && -1 != o2)
      return [r, n, o2, 255];
  }
}
function k(t) {
  if ("rgba(" == t.substr(0, 5)) {
    var e = (t = t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number), r = M(e[0], true), n = M(e[1], true), o2 = M(e[2], true), s2 = M(255 * e[3]);
    if (-1 != r && -1 != n && -1 != o2 && -1 != s2)
      return [r, n, o2, s2];
  }
}
function D(t) {
  return "function" == typeof t;
}
function T(t) {
  const e = t((t2) => {
    Error.call(t2), t2.stack = new Error().stack;
  });
  return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
}
a.arr = c, a.obj = f, a.css = l, a.hex = d, a.num = h$1;
const C = T((t) => function(e) {
  t(this), this.message = e ? `${e.length} errors occurred during unsubscription:
${e.map((t2, e2) => `${e2 + 1}) ${t2.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = e;
});
function P(t, e) {
  if (t) {
    const r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
class J {
  constructor(t) {
    this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = true;
      const { _parentage: e } = this;
      if (e)
        if (this._parentage = null, Array.isArray(e))
          for (const t2 of e)
            t2.remove(this);
        else
          e.remove(this);
      const { initialTeardown: r } = this;
      if (D(r))
        try {
          r();
        } catch (e2) {
          t = e2 instanceof C ? e2.errors : [e2];
        }
      const { _finalizers: n } = this;
      if (n) {
        this._finalizers = null;
        for (const e2 of n)
          try {
            I(e2);
          } catch (e3) {
            t = null != t ? t : [], e3 instanceof C ? t = [...t, ...e3.errors] : t.push(e3);
          }
      }
      if (t)
        throw new C(t);
    }
  }
  add(t) {
    var e;
    if (t && t !== this)
      if (this.closed)
        I(t);
      else {
        if (t instanceof J) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = null !== (e = this._finalizers) && void 0 !== e ? e : []).push(t);
      }
  }
  _hasParent(t) {
    const { _parentage: e } = this;
    return e === t || Array.isArray(e) && e.includes(t);
  }
  _addParent(t) {
    const { _parentage: e } = this;
    this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
  }
  _removeParent(t) {
    const { _parentage: e } = this;
    e === t ? this._parentage = null : Array.isArray(e) && P(e, t);
  }
  remove(t) {
    const { _finalizers: e } = this;
    e && P(e, t), t instanceof J && t._removeParent(this);
  }
}
J.EMPTY = (() => {
  const t = new J();
  return t.closed = true, t;
})();
const H = J.EMPTY;
function L(t) {
  return t instanceof J || t && "closed" in t && D(t.remove) && D(t.add) && D(t.unsubscribe);
}
function I(t) {
  D(t) ? t() : t.unsubscribe();
}
const U = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false }, F = { setTimeout(t, e, ...r) {
  const { delegate: n } = F;
  return (null == n ? void 0 : n.setTimeout) ? n.setTimeout(t, e, ...r) : setTimeout(t, e, ...r);
}, clearTimeout(t) {
  const { delegate: e } = F;
  return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(t);
}, delegate: void 0 };
function z(t) {
  F.setTimeout(() => {
    const { onUnhandledError: e } = U;
    if (!e)
      throw t;
    e(t);
  });
}
function W() {
}
const q = R("C", void 0, void 0);
function B(t) {
  return R("E", void 0, t);
}
function K(t) {
  return R("N", t, void 0);
}
function R(t, e, r) {
  return { kind: t, value: e, error: r };
}
function Y(t) {
  t();
}
class G extends J {
  constructor(t) {
    super(), this.isStopped = false, t ? (this.destination = t, L(t) && t.add(this)) : this.destination = nt;
  }
  static create(t, e, r) {
    return new Z(t, e, r);
  }
  next(t) {
    this.isStopped ? rt(K(t), this) : this._next(t);
  }
  error(t) {
    this.isStopped ? rt(B(t), this) : (this.isStopped = true, this._error(t));
  }
  complete() {
    this.isStopped ? rt(q, this) : (this.isStopped = true, this._complete());
  }
  unsubscribe() {
    this.closed || (this.isStopped = true, super.unsubscribe(), this.destination = null);
  }
  _next(t) {
    this.destination.next(t);
  }
  _error(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const Q = Function.prototype.bind;
function V(t, e) {
  return Q.call(t, e);
}
class X {
  constructor(t) {
    this.partialObserver = t;
  }
  next(t) {
    const { partialObserver: e } = this;
    if (e.next)
      try {
        e.next(t);
      } catch (t2) {
        tt(t2);
      }
  }
  error(t) {
    const { partialObserver: e } = this;
    if (e.error)
      try {
        e.error(t);
      } catch (t2) {
        tt(t2);
      }
    else
      tt(t);
  }
  complete() {
    const { partialObserver: t } = this;
    if (t.complete)
      try {
        t.complete();
      } catch (t2) {
        tt(t2);
      }
  }
}
class Z extends G {
  constructor(t, e, r) {
    let n;
    if (super(), D(t) || !t)
      n = { next: null != t ? t : void 0, error: null != e ? e : void 0, complete: null != r ? r : void 0 };
    else {
      let e2;
      this && U.useDeprecatedNextContext ? (e2 = Object.create(t), e2.unsubscribe = () => this.unsubscribe(), n = { next: t.next && V(t.next, e2), error: t.error && V(t.error, e2), complete: t.complete && V(t.complete, e2) }) : n = t;
    }
    this.destination = new X(n);
  }
}
function tt(t) {
  z(t);
}
function et(t) {
  throw t;
}
function rt(t, e) {
  const { onStoppedNotification: r } = U;
  r && F.setTimeout(() => r(t, e));
}
const nt = { closed: true, next: W, error: et, complete: W }, it = "function" == typeof Symbol && Symbol.observable || "@@observable";
function st(t) {
  return t;
}
function ot(t) {
  return 0 === t.length ? st : 1 === t.length ? t[0] : function(e) {
    return t.reduce((t2, e2) => e2(t2), e);
  };
}
class ut {
  constructor(t) {
    t && (this._subscribe = t);
  }
  lift(t) {
    const e = new ut();
    return e.source = this, e.operator = t, e;
  }
  subscribe(t, e, r) {
    const n = ft(t) ? t : new Z(t, e, r);
    return Y(() => {
      const { operator: t2, source: e2 } = this;
      n.add(t2 ? t2.call(n, e2) : e2 ? this._subscribe(n) : this._trySubscribe(n));
    }), n;
  }
  _trySubscribe(t) {
    try {
      return this._subscribe(t);
    } catch (e) {
      t.error(e);
    }
  }
  forEach(t, e) {
    return new (e = at(e))((e2, r) => {
      const n = new Z({ next: (e3) => {
        try {
          t(e3);
        } catch (t2) {
          r(t2), n.unsubscribe();
        }
      }, error: r, complete: e2 });
      this.subscribe(n);
    });
  }
  _subscribe(t) {
    var e;
    return null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t);
  }
  [it]() {
    return this;
  }
  pipe(...t) {
    return ot(t)(this);
  }
  toPromise(t) {
    return new (t = at(t))((t2, e) => {
      let r;
      this.subscribe((t3) => r = t3, (t3) => e(t3), () => t2(r));
    });
  }
}
function at(t) {
  var e;
  return null !== (e = null != t ? t : U.Promise) && void 0 !== e ? e : Promise;
}
function ct(t) {
  return t && D(t.next) && D(t.error) && D(t.complete);
}
function ft(t) {
  return t && t instanceof G || ct(t) && L(t);
}
ut.create = (t) => new ut(t);
const lt = T((t) => function() {
  t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
});
class dt extends ut {
  constructor() {
    super(), this.closed = false, this.currentObservers = null, this.observers = [], this.isStopped = false, this.hasError = false, this.thrownError = null;
  }
  lift(t) {
    const e = new ht(this, this);
    return e.operator = t, e;
  }
  _throwIfClosed() {
    if (this.closed)
      throw new lt();
  }
  next(t) {
    Y(() => {
      if (this._throwIfClosed(), !this.isStopped) {
        this.currentObservers || (this.currentObservers = Array.from(this.observers));
        for (const e of this.currentObservers)
          e.next(t);
      }
    });
  }
  error(t) {
    Y(() => {
      if (this._throwIfClosed(), !this.isStopped) {
        this.hasError = this.isStopped = true, this.thrownError = t;
        const { observers: e } = this;
        for (; e.length; )
          e.shift().error(t);
      }
    });
  }
  complete() {
    Y(() => {
      if (this._throwIfClosed(), !this.isStopped) {
        this.isStopped = true;
        const { observers: t } = this;
        for (; t.length; )
          t.shift().complete();
      }
    });
  }
  unsubscribe() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }
  get observed() {
    var t;
    return (null === (t = this.observers) || void 0 === t ? void 0 : t.length) > 0;
  }
  _trySubscribe(t) {
    return this._throwIfClosed(), super._trySubscribe(t);
  }
  _subscribe(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }
  _innerSubscribe(t) {
    const { hasError: e, isStopped: r, observers: n } = this;
    return e || r ? H : (this.currentObservers = null, n.push(t), new J(() => {
      this.currentObservers = null, P(n, t);
    }));
  }
  _checkFinalizedStatuses(t) {
    const { hasError: e, thrownError: r, isStopped: n } = this;
    e ? t.error(r) : n && t.complete();
  }
  asObservable() {
    const t = new ut();
    return t.source = this, t;
  }
}
dt.create = (t, e) => new ht(t, e);
class ht extends dt {
  constructor(t, e) {
    super(), this.destination = t, this.source = e;
  }
  next(t) {
    var e, r;
    null === (r = null === (e = this.destination) || void 0 === e ? void 0 : e.next) || void 0 === r || r.call(e, t);
  }
  error(t) {
    var e, r;
    null === (r = null === (e = this.destination) || void 0 === e ? void 0 : e.error) || void 0 === r || r.call(e, t);
  }
  complete() {
    var t, e;
    null === (e = null === (t = this.destination) || void 0 === t ? void 0 : t.complete) || void 0 === e || e.call(t);
  }
  _subscribe(t) {
    var e, r;
    return null !== (r = null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t)) && void 0 !== r ? r : H;
  }
}
var vt = 0.2126, pt = 0.7152, bt = 0.0722, yt = 1 / 12.92;
function mt(t) {
  return Math.pow((t + 0.055) / 1.055, 2.4);
}
function wt(t) {
  var e = t[0] / 255, r = t[1] / 255, n = t[2] / 255, o2 = e <= 0.03928 ? e * yt : mt(e), s2 = r <= 0.03928 ? r * yt : mt(r), i = n <= 0.03928 ? n * yt : mt(n);
  return o2 * vt + s2 * pt + i * bt;
}
function gt(t) {
  var e = 255;
  8 === (t = t.replace(/^#/, "")).length && (e = parseInt(t.slice(6, 8), 16), t = t.substring(0, 6)), 4 === t.length && (e = parseInt(t.slice(3, 4).repeat(2), 16), t = t.substring(0, 3)), 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
  var r = parseInt(t, 16);
  return [r >> 16, r >> 8 & 255, 255 & r, e];
}
function St(t, e) {
  return (Math.max(t, e) + 0.05) / (Math.min(t, e) + 0.05);
}
function Nt(t, e) {
  return St(wt(t), wt(e));
}
function Et(t, e) {
  return Nt(gt(t), gt(e));
}
function Ot(t) {
  return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : t >= 3 ? "AA Large" : "Fail";
}
const Ft = (t) => {
  try {
    return JSON.stringify(t).replace(/"/g, "'");
  } catch (e) {
    throw oe.warn(["stringifyJson", t]), oe.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."), new Error();
  }
}, zt = /^[{[]/, Wt = (t) => {
  if ("string" == typeof t)
    try {
      return JSON.parse(t);
    } catch (e) {
      if (zt.test(t))
        try {
          return JSON.parse(t.replace(/'/g, '"'));
        } catch (e2) {
          oe.warn(["parseJson", t]), oe.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).");
        }
    }
  throw new Error();
}, Kt = (t, e) => u$1(t, e || J$1()), Rt = (t, e) => o(t, e || J$1());
let Yt = null;
const Gt = () => (Yt = Yt || { backgroundColor: "#00000000", color: "#00000000", domNode: J$1().body, level: "Fail", score: 1 }, Yt), Qt = /(\d+, ){3}0\)/, Vt = (t, e = Gt()) => {
  const n = getComputedStyle(t), o2 = Qt.test(n.backgroundColor) ? e.backgroundColor : a.hex(n.backgroundColor), s2 = Qt.test(n.color) ? e.color : a.hex(n.color), i = Et(o2, s2), c2 = { backgroundColor: o2, color: s2, domNode: t, level: Ot(i), score: i };
  return i < 4.5 && oe.error(["Color-Contrast-Error", { backgroundColor: c2.backgroundColor, color: c2.color, level: c2.level, score: c2.score }, c2.domNode]), c2;
}, Xt = (t, e = Gt()) => {
  e.domNode instanceof HTMLElement && (e = Vt(e.domNode, e));
  const r = e.domNode.querySelector(t);
  if (null === r) {
    const r2 = e.domNode.querySelectorAll('[class="hydrated"]');
    for (let n = 0; n < r2.length && (e.domNode = r2[n], null === (e = Xt(t, e)).domNode); n++)
      ;
    return e;
  }
  return Vt(r, e);
};
class Zt {
  static queryHtmlElementColors(t, e, n = false, o2 = true) {
    let s2 = null;
    if (true === n || false === Zt.executionLock)
      if (false === n && (Zt.cache.clear(), Zt.cache.set(e.domNode, e), Zt.executionLock = true, true === o2 && oe.debug("[KoliBriUtils] Color contrast analysis started...")), t === e.domNode)
        s2 = e;
      else {
        const r = /* @__PURE__ */ new Set();
        if (e.domNode.shadowRoot) {
          const t2 = e.domNode.shadowRoot.children;
          for (let e2 = 0; e2 < t2.length; e2++)
            r.add(t2[e2]);
        }
        const n2 = e.domNode;
        if ("function" == typeof n2.assignedNodes) {
          const t2 = n2.assignedNodes();
          for (let e2 = 0; e2 < t2.length; e2++)
            t2[e2] instanceof HTMLElement && r.add(t2[e2]);
        }
        const o3 = e.domNode.children;
        for (let t2 = 0; t2 < o3.length; t2++)
          r.add(o3[t2]);
        const i = Array.from(r);
        for (let r2 = 0; r2 < i.length; r2++) {
          let n3 = Zt.cache.get(i[r2]);
          void 0 === n3 && (n3 = Vt(i[r2], e)), Zt.cache.set(i[r2], n3);
          const o4 = Zt.queryHtmlElementColors(t, n3, true, false);
          if (null !== o4) {
            s2 = o4;
            break;
          }
        }
      }
    else
      oe.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");
    return false === n && (true === o2 && oe.debug(`[KoliBriUtils] Color contrast analysis finished (${Zt.cache.size} DOM elements are analysed).`), Zt.executionLock = false, Zt.cache.clear()), s2;
  }
}
Zt.executionLock = false, Zt.cache = /* @__PURE__ */ new Map();
new dt();
/*!
 * KoliBri - The accessible HTML-Standard
 */
function h(t, o2) {
  try {
    Object.defineProperty(le, t, { get: function() {
      return o2;
    } });
  } catch (o3) {
    oe.debug(`KoliBri property ${t} is already bind.`);
  }
}
const u = (t, o2) => oe.debug(`${t} ${o2 ? "" : "not "}activated`), v = () => {
  if (re(), ee()) {
    ce(), h("a11yColorContrast", Vt), h("querySelector", Kt), h("querySelectorAll", Rt), h("querySelectorColors", Xt), h("utils", function() {
      return Zt;
    }), h("parseJson", Wt), h("stringifyJson", Ft);
    const t = J$1().body, e = J$1().createElement("svg");
    if (e.setAttribute("aria-label", "KoliBri-DevTools"), e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.setAttribute("role", "toolbar"), e.setAttribute("style", "position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"), e.innerHTML = '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="50"\n  height="50"\n  viewBox="0 0 600 600"\n>\n  <path d="M353 322L213 304V434L353 322Z" fill="#047" />\n  <path d="M209 564V304L149 434L209 564Z" fill="#047" />\n  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />\n  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />\n  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />\n  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />\n</svg>', J$1().body.appendChild(e), u("Development mode", ee()), u("Experimental mode", te()), u("Color contrast analysis", ne()), ne()) {
      const e2 = setTimeout(() => {
        clearTimeout(e2), setInterval(() => {
          Zt.queryHtmlElementColors(J$1().createElement("div"), Vt(t), false, false);
        }, 1e4);
      }, 2500);
    }
  }
};
export {
  v as initialize
};

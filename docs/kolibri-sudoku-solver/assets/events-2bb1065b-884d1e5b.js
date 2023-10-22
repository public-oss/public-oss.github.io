/*!
 * KoliBri - The accessible HTML-Standard
 */function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function e(t,n){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:n})}function a(t,n,o){return t.dispatchEvent(e(n,o))}function c(t,n,o){n&&a(n,t,o)}export{c as o,i as t};

import{J as t}from"./prop.validators-125a3282-9e7c3ce9.js";import{n as r}from"./a11y.tipps-583a2096-ea796d66.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const a=(e,s)=>{t(e,"_suggestions",o=>typeof o=="string"||typeof o=="number",s,void 0,{hooks:{afterPatch:o=>{Array.isArray(o)&&o.length&&r("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})};export{a as e};

/*! For license information please see 5497.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_kolibri_sudoku_solver=self.webpackChunk_public_oss_kolibri_sudoku_solver||[]).push([[5497],{6337:(t,e,o)=>{o.d(e,{A:()=>a});var n=o(3043),i=o(3340);const s=(0,o(379).b)();class a{constructor(t,e,o){var n,a;if(this.setFormAssociatedValue=t=>{var e;const o=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==o&&""!==o||(0,i.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const n=this.tryToStringifyValue(t);this.syncValue(t,n,this.formAssociated),this.syncValue(t,n,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(o),this.name=e,s){switch(null===(n=this.host)||void 0===n||n.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,o){if(s)try{if("boolean"!=typeof(o="object"==typeof o&&null!==o?JSON.stringify(o):o)&&"number"!=typeof o&&"string"!=typeof o)throw new Error("Invalid value type: "+typeof o);null==e||e.setAttribute(t,`${o}`)}catch(o){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,i.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,o){o&&("select"===this.name?(o.querySelectorAll("option").forEach((t=>{o.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),o.appendChild(t)}}))):"string"==typeof e?(o.setAttribute("value",e),o.value=e):(o.removeAttribute("value"),o.value=""))}validateName(t){((t,e,o)=>{(0,n.d)(t,"_name",e,o)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,i.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(s&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},7519:(t,e,o)=>{o.d(e,{I:()=>m,g:()=>h,v:()=>d});var n=o(3043),i=o(5052),s=o(2707),a=o(3340),r=o(5469),l=o(5319),c=o(6337);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:n}},d=(t,e,o)=>{(0,n.a)(t,"_hideError",e,o)};class u extends c.A{constructor(t,e,o){super(t,e,o),this.component=t}validateAlert(t){(0,n.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,n.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class m extends u{constructor(t,e,o){super(t,e,o),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,n.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,n.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,n.a)(this.component,"_disabled",t),!0===t&&(0,a.e)()}validateError(t){(0,n.d)(this.component,"_error",t)}validateHideLabel(t){(0,i.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,n.d)(this.component,"_hint",t)}validateId(t){(0,n.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,s.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,r.s)(t),(0,r.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const o=t.target.value;(0,r.s)(t),(0,r.t)("change",this.host,o),this.setFormAssociatedValue(o),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,o),this.valueChangeListeners.forEach((t=>t(o)))}onClick(t){var e;(0,r.s)(t),(0,r.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,r.s)(t),(0,r.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var o;this.setFormAssociatedValue(e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},2117:(t,e,o)=>{o.d(e,{I:()=>l,v:()=>r});var n=o(3043),i=o(7519),s=o(3340),a=o(4162);const r=(t,e)=>{(0,n.a)(t,"_hasCounter",e)};class l extends a.I{constructor(t,e,o){super(t,e,o),this.component=t}validateAutoComplete(t){(0,n.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){r(this.component,t)}validateHideError(t){(0,i.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateMaxLength(t){(0,n.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,n.d)(this.component,"_pattern",t)}validatePlaceholder(t){(0,n.d)(this.component,"_placeholder",t)}validateReadOnly(t){(0,n.a)(this.component,"_readOnly",t)}validateRequired(t){(0,n.a)(this.component,"_required",t)}validateValue(t){(0,n.d)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateHideError(this.component._hideError),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},153:(t,e,o)=>{o.d(e,{a:()=>r,p:()=>l});var n=o(3340),i=o(379),s=o(3043);const a=t=>{for((0,i.b)()&&((0,n.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,i.b)()&&console.log(t);return(0,i.b)()&&(0,n.d)("↑ Search form element finished."),t},r=(t={})=>{var e,o;const n=a(t.form);if(n instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===n.tagName)(0,s.f)(t,n),n.dispatchEvent(t);else if("KOL-FORM"===n.tagName){(0,s.f)(t,s.K.querySelector("form",n));const i=n;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onReset)&&(null===(o=i._on)||void 0===o||o.onReset(t))}}},l=(t={})=>{var e,o;const n=a(t.form);if(n instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:n});if("FORM"===n.tagName)(0,s.f)(t,n),n.dispatchEvent(t);else if("KOL-FORM"===n.tagName){(0,s.f)(t,s.K.querySelector("form",n));const i=n;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onSubmit)&&(null===(o=i._on)||void 0===o||o.onSubmit(t))}}}},4162:(t,e,o)=>{o.d(e,{I:()=>l});var n=o(6643),i=o(3043),s=o(4477),a=o(7519);const r=(t,e)=>{const o=t;"object"==typeof o&&null!==o&&((0,s.i)(o.right,1)&&(o.right={icon:o.right}),(0,s.i)(o.left,1)&&(o.left={icon:o.left}),e.set("_icons",o))};class l extends a.I{constructor(t,e,o){super(t,e,o),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||(0,n.i)(t.left)||(0,s.i)(t.right,1)||(0,n.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:r},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},5469:(t,e,o)=>{function n(t){t.stopImmediatePropagation(),t.stopPropagation()}function i(t,e,o){e&&function(t,e,o){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,o))}(e,t,o)}o.d(e,{s:()=>n,t:()=>i})},5052:(t,e,o)=>{o.d(e,{v:()=>i});var n=o(3043);const i=(t,e,o={})=>{(0,n.a)(t,"_hideLabel",e,o)}},6643:(t,e,o)=>{o.d(e,{i:()=>a,v:()=>r});var n=o(3043),i=o(4477);const s=(t,e,o)=>{(0,i.c)(o)?t[e]=o:(0,i.i)(o,1)&&(t[e]={icon:o})},a=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,i.b)(t.style))&&(0,i.i)(t.icon,1),r=(t,e)=>{(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(t){}(0,n.w)(t,"_icons",(t=>null===t||(0,i.i)(t,1)||"object"==typeof t&&null!==t&&((0,i.i)(t.left,1)||a(t.left)||(0,i.i)(t.right,1)||a(t.right)||(0,i.i)(t.top,1)||a(t.top)||(0,i.i)(t.bottom,1)||a(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,o)=>{null===e&&o.set("_icons",{}),(t=>{var e,o,n;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(o=t.nextState)||void 0===o?void 0:o.get("_icons");null===(n=t.nextState)||void 0===n||n.set("_icons",(t=>{let e={};return(0,i.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(s(e,"top",t.top),s(e,"right",t.right),s(e,"bottom",t.bottom),s(e,"left",t.left)),e})(e))}})(t)}},required:!0})}))}},2707:(t,e,o)=>{o.d(e,{a:()=>d,c:()=>l,h:()=>r,v:()=>h});var n=o(3340),i=o(3043);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(s))||void 0===e?void 0:e.length)||0}(t)>=e}function l(t){return a.test(t)}const c=new Set(["string"]),h=(t,e,o={})=>{(0,i.w)(t,"_label",(t=>"string"==typeof t),c,e,function(t){var e;return{hooks:{afterPatch:(e,o,i,s)=>{var a,c;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,o,i,s)),"string"==typeof e&&!1===r(e,3)&&!1===l(e)&&(0,n.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(o))},d=h},5319:(t,e,o)=>{o.d(e,{v:()=>a});var n=o(3340),i=o(3043);const s={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,n.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},a=(t,e)=>{(0,i.e)(t,"_tabIndex",e,s)}}}]);
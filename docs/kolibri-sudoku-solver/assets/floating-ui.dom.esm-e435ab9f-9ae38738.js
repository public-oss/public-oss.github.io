/*!
 * KoliBri - The accessible HTML-Standard
 */const I=Math.min,V=Math.max,U=Math.round,Q=Math.floor,H=t=>({x:t,y:t}),Lt={left:"right",right:"left",bottom:"top",top:"bottom"},At={start:"end",end:"start"};function it(t,e,o){return V(t,I(e,o))}function $(t,e){return typeof t=="function"?t(e):t}function M(t){return t.split("-")[0]}function j(t){return t.split("-")[1]}function ht(t){return t==="x"?"y":"x"}function lt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(M(t))?"y":"x"}function ct(t){return ht(et(t))}function Dt(t,e,o){o===void 0&&(o=!1);const n=j(t),i=ct(t),l=lt(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=Z(r)),[r,Z(r)]}function St(t){const e=Z(t);return[rt(t),e,rt(e)]}function rt(t){return t.replace(/start|end/g,e=>At[e])}function Ct(t,e,o){const n=["left","right"],i=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?l:r;default:return[]}}function Ot(t,e,o,n){const i=j(t);let l=Ct(M(t),o==="start",n);return i&&(l=l.map(r=>r+"-"+i),e&&(l=l.concat(l.map(rt)))),l}function Z(t){return t.replace(/left|right|bottom|top/g,e=>Lt[e])}function Ft(t){return{top:0,right:0,bottom:0,left:0,...t}}function gt(t){return typeof t!="number"?Ft(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ut(t,e,o){let{reference:n,floating:i}=t;const l=et(e),r=ct(e),c=lt(r),s=M(e),f=l==="y",m=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,g=n[c]/2-i[c]/2;let u;switch(s){case"top":u={x:m,y:n.y-i.height};break;case"bottom":u={x:m,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:d};break;case"left":u={x:n.x-i.width,y:d};break;default:u={x:n.x,y:n.y}}switch(j(e)){case"start":u[r]-=g*(o&&f?-1:1);break;case"end":u[r]+=g*(o&&f?-1:1)}return u}const Pt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:l=[],platform:r}=o,c=l.filter(Boolean),s=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:d}=ut(f,n,s),g=n,u={},a=0;for(let p=0;p<c.length;p++){const{name:h,fn:y}=c[p],{x,y:w,data:L,reset:b}=await y({x:m,y:d,initialPlacement:n,placement:g,strategy:i,middlewareData:u,rects:f,platform:r,elements:{reference:t,floating:e}});m=x??m,d=w??d,u={...u,[h]:{...u[h],...L}},b&&a<=50&&(a++,typeof b=="object"&&(b.placement&&(g=b.placement),b.rects&&(f=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:m,y:d}=ut(f,g,s)),p=-1)}return{x:m,y:d,placement:g,strategy:i,middlewareData:u}};async function yt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:l,rects:r,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:g=!1,padding:u=0}=$(e,t),a=gt(u),p=c[g?d==="floating"?"reference":"floating":d],h=tt(await l.getClippingRect({element:(o=await(l.isElement==null?void 0:l.isElement(p)))==null||o?p:p.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(c.floating)),boundary:f,rootBoundary:m,strategy:s})),y=d==="floating"?{...r.floating,x:n,y:i}:r.reference,x=await(l.getOffsetParent==null?void 0:l.getOffsetParent(c.floating)),w=await(l.isElement==null?void 0:l.isElement(x))&&await(l.getScale==null?void 0:l.getScale(x))||{x:1,y:1},L=tt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:x,strategy:s}):y);return{top:(h.top-L.top+a.top)/w.y,bottom:(L.bottom-h.bottom+a.bottom)/w.y,left:(h.left-L.left+a.left)/w.x,right:(L.right-h.right+a.right)/w.x}}const Qt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:l,platform:r,elements:c,middlewareData:s}=e,{element:f,padding:m=0}=$(t,e)||{};if(f==null)return{};const d=gt(m),g={x:o,y:n},u=ct(i),a=lt(u),p=await r.getDimensions(f),h=u==="y",y=h?"top":"left",x=h?"bottom":"right",w=h?"clientHeight":"clientWidth",L=l.reference[a]+l.reference[u]-g[u]-l.floating[a],b=g[u]-l.reference[u],F=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f));let E=F?F[w]:0;E&&await(r.isElement==null?void 0:r.isElement(F))||(E=c.floating[w]||l.floating[a]);const J=L/2-b/2,q=E/2-p[a]/2-1,Y=I(d[y],q),A=I(d[x],q),B=Y,P=E-p[a]-A,v=E/2-p[a]/2+J,D=it(B,v,P),k=!s.arrow&&j(i)!=null&&v!=D&&l.reference[a]/2-(v<B?Y:A)-p[a]/2<0,K=k?v<B?B-v:P-v:0;return{[u]:g[u]-K,data:{[u]:D,centerOffset:v-D+K},reset:k}}}),Ut=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:n,middlewareData:i,rects:l,initialPlacement:r,platform:c,elements:s}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:d,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:a=!0,...p}=$(t,e),h=M(n),y=M(r)===r,x=await(c.isRTL==null?void 0:c.isRTL(s.floating)),w=d||(y||!a?[Z(r)]:St(r));d||u==="none"||w.push(...Ot(r,a,u,x));const L=[r,...w],b=await yt(e,p),F=[];let E=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&F.push(b[h]),m){const A=Dt(n,l,x);F.push(b[A[0]],b[A[1]])}if(E=[...E,{placement:n,overflows:F}],!F.every(A=>A<=0)){var J,q;const A=(((J=i.flip)==null?void 0:J.index)||0)+1,B=L[A];if(B)return{data:{index:A,overflows:E},reset:{placement:B}};let P=(q=E.filter(v=>v.overflows[0]<=0).sort((v,D)=>v.overflows[1]-D.overflows[1])[0])==null?void 0:q.placement;if(!P)switch(g){case"bestFit":{var Y;const v=(Y=E.map(D=>[D.placement,D.overflows.filter(k=>k>0).reduce((k,K)=>k+K,0)]).sort((D,k)=>D[1]-k[1])[0])==null?void 0:Y[0];v&&(P=v);break}case"initialPlacement":P=r}if(n!==P)return{reset:{placement:P}}}return{}}}};async function kt(t,e){const{placement:o,platform:n,elements:i}=t,l=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=M(o),c=j(o),s=et(o)==="y",f=["left","top"].includes(r)?-1:1,m=l&&s?-1:1,d=$(e,t);let{mainAxis:g,crossAxis:u,alignmentAxis:a}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof a=="number"&&(u=c==="end"?-1*a:a),s?{x:u*m,y:g*f}:{x:g*f,y:u*m}}const Zt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,i=await kt(e,t);return{x:o+i.x,y:n+i.y,data:i}}}},te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:l=!0,crossAxis:r=!1,limiter:c={fn:h=>{let{x:y,y:x}=h;return{x:y,y:x}}},...s}=$(t,e),f={x:o,y:n},m=await yt(e,s),d=et(M(i)),g=ht(d);let u=f[g],a=f[d];if(l){const h=g==="y"?"bottom":"right";u=it(u+m[g==="y"?"top":"left"],u,u-m[h])}if(r){const h=d==="y"?"bottom":"right";a=it(a+m[d==="y"?"top":"left"],a,a-m[h])}const p=c.fn({...e,[g]:u,[d]:a});return{...p,data:{x:p.x-o,y:p.y-n}}}}};function W(t){return xt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function O(t){var e;return(e=(xt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function xt(t){return t instanceof Node||t instanceof R(t).Node}function C(t){return t instanceof Element||t instanceof R(t).Element}function S(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function dt(t){return typeof ShadowRoot<"u"&&(t instanceof ShadowRoot||t instanceof R(t).ShadowRoot)}function G(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Ht(t){return["table","td","th"].includes(W(t))}function st(t){const e=at(),o=T(t);return o.transform!=="none"||o.perspective!=="none"||!!o.containerType&&o.containerType!=="normal"||!e&&!!o.backdropFilter&&o.backdropFilter!=="none"||!e&&!!o.filter&&o.filter!=="none"||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Wt(t){let e=X(t);for(;S(e)&&!nt(e);){if(st(e))return e;e=X(e)}return null}function at(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(W(t))}function T(t){return R(t).getComputedStyle(t)}function ot(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(W(t)==="html")return t;const e=t.assignedSlot||t.parentNode||dt(t)&&t.host||O(t);return dt(e)?e.host:e}function wt(t){const e=X(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&G(e)?e:wt(e)}function _(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=wt(t),l=i===((n=t.ownerDocument)==null?void 0:n.body),r=R(i);return l?e.concat(r,r.visualViewport||[],G(i)?i:[],r.frameElement&&o?_(r.frameElement):[]):e.concat(i,_(i))}function vt(t){const e=T(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=S(t),l=i?t.offsetWidth:o,r=i?t.offsetHeight:n,c=U(o)!==l||U(n)!==r;return c&&(o=l,n=r),{width:o,height:n,$:c}}function ft(t){return C(t)?t:t.contextElement}function N(t){const e=ft(t);if(!S(e))return H(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:l}=vt(e);let r=(l?U(o.width):o.width)/n,c=(l?U(o.height):o.height)/i;return r&&Number.isFinite(r)||(r=1),c&&Number.isFinite(c)||(c=1),{x:r,y:c}}const Bt=H(0);function bt(t){const e=R(t);return at()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Bt}function Vt(t,e,o){return e===void 0&&(e=!1),!(!o||e&&o!==R(t))&&e}function z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),l=ft(t);let r=H(1);e&&(n?C(n)&&(r=N(n)):r=N(t));const c=Vt(l,o,n)?bt(l):H(0);let s=(i.left+c.x)/r.x,f=(i.top+c.y)/r.y,m=i.width/r.x,d=i.height/r.y;if(l){const g=R(l),u=n&&C(n)?R(n):n;let a=g.frameElement;for(;a&&n&&u!==g;){const p=N(a),h=a.getBoundingClientRect(),y=T(a),x=h.left+(a.clientLeft+parseFloat(y.paddingLeft))*p.x,w=h.top+(a.clientTop+parseFloat(y.paddingTop))*p.y;s*=p.x,f*=p.y,m*=p.x,d*=p.y,s+=x,f+=w,a=R(a).frameElement}}return tt({width:m,height:d,x:s,y:f})}function Mt(t){let{rect:e,offsetParent:o,strategy:n}=t;const i=S(o),l=O(o);if(o===l)return e;let r={scrollLeft:0,scrollTop:0},c=H(1);const s=H(0);if((i||!i&&n!=="fixed")&&((W(o)!=="body"||G(l))&&(r=ot(o)),S(o))){const f=z(o);c=N(o),s.x=f.x+o.clientLeft,s.y=f.y+o.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+s.x,y:e.y*c.y-r.scrollTop*c.y+s.y}}function zt(t){return Array.from(t.getClientRects())}function Rt(t){return z(O(t)).left+ot(t).scrollLeft}function Nt(t){const e=O(t),o=ot(t),n=t.ownerDocument.body,i=V(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),l=V(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+Rt(t);const c=-o.scrollTop;return T(n).direction==="rtl"&&(r+=V(e.clientWidth,n.clientWidth)-i),{width:i,height:l,x:r,y:c}}function It(t,e){const o=R(t),n=O(t),i=o.visualViewport;let l=n.clientWidth,r=n.clientHeight,c=0,s=0;if(i){l=i.width,r=i.height;const f=at();(!f||f&&e==="fixed")&&(c=i.offsetLeft,s=i.offsetTop)}return{width:l,height:r,x:c,y:s}}function Xt(t,e){const o=z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,l=S(t)?N(t):H(1);return{width:t.clientWidth*l.x,height:t.clientHeight*l.y,x:i*l.x,y:n*l.y}}function mt(t,e,o){let n;if(e==="viewport")n=It(t,o);else if(e==="document")n=Nt(O(t));else if(C(e))n=Xt(e,o);else{const i=bt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return tt(n)}function Tt(t,e){const o=X(t);return!(o===e||!C(o)||nt(o))&&(T(o).position==="fixed"||Tt(o,e))}function qt(t,e){const o=e.get(t);if(o)return o;let n=_(t,[],!1).filter(c=>C(c)&&W(c)!=="body"),i=null;const l=T(t).position==="fixed";let r=l?X(t):t;for(;C(r)&&!nt(r);){const c=T(r),s=st(r);s||c.position!=="fixed"||(i=null),(l?!s&&!i:!s&&c.position==="static"&&i&&["absolute","fixed"].includes(i.position)||G(r)&&!s&&Tt(t,r))?n=n.filter(f=>f!==r):i=c,r=X(r)}return e.set(t,n),n}function Yt(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const l=[...o==="clippingAncestors"?qt(e,this._c):[].concat(o),n],r=l[0],c=l.reduce((s,f)=>{const m=mt(e,f,i);return s.top=V(m.top,s.top),s.right=I(m.right,s.right),s.bottom=I(m.bottom,s.bottom),s.left=V(m.left,s.left),s},mt(e,r,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function _t(t){return vt(t)}function $t(t,e,o){const n=S(e),i=O(e),l=o==="fixed",r=z(t,!0,l,e);let c={scrollLeft:0,scrollTop:0};const s=H(0);if(n||!n&&!l)if((W(e)!=="body"||G(i))&&(c=ot(e)),n){const f=z(e,!0,l,e);s.x=f.x+e.clientLeft,s.y=f.y+e.clientTop}else i&&(s.x=Rt(i));return{x:r.left+c.scrollLeft-s.x,y:r.top+c.scrollTop-s.y,width:r.width,height:r.height}}function pt(t,e){return S(t)&&T(t).position!=="fixed"?e?e(t):t.offsetParent:null}function Et(t,e){const o=R(t);if(!S(t))return o;let n=pt(t,e);for(;n&&Ht(n)&&T(n).position==="static";)n=pt(n,e);return n&&(W(n)==="html"||W(n)==="body"&&T(n).position==="static"&&!st(n))?o:n||Wt(t)||o}const jt=async function(t){let{reference:e,floating:o,strategy:n}=t;const i=this.getOffsetParent||Et,l=this.getDimensions;return{reference:$t(e,await i(o),n),floating:{x:0,y:0,...await l(o)}}};function Gt(t){return T(t).direction==="rtl"}const Jt={convertOffsetParentRelativeRectToViewportRelativeRect:Mt,getDocumentElement:O,getClippingRect:Yt,getOffsetParent:Et,getElementRects:jt,getClientRects:zt,getDimensions:_t,getScale:N,isElement:C,isRTL:Gt};function Kt(t,e){let o,n=null;const i=O(t);function l(){clearTimeout(o),n&&n.disconnect(),n=null}return function r(c,s){c===void 0&&(c=!1),s===void 0&&(s=1),l();const{left:f,top:m,width:d,height:g}=t.getBoundingClientRect();if(c||e(),!d||!g)return;const u={rootMargin:-Q(m)+"px "+-Q(i.clientWidth-(f+d))+"px "+-Q(i.clientHeight-(m+g))+"px "+-Q(f)+"px",threshold:V(0,I(1,s))||1};let a=!0;function p(h){const y=h[0].intersectionRatio;if(y!==s){if(!a)return r();y?r(!1,y):o=setTimeout(()=>{r(!1,1e-7)},100)}a=!1}try{n=new IntersectionObserver(p,{...u,root:i.ownerDocument})}catch{n=new IntersectionObserver(p,u)}n.observe(t)}(!0),l}function ee(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:s=!1}=n,f=ft(t),m=i||l?[...f?_(f):[],..._(e)]:[];m.forEach(h=>{i&&h.addEventListener("scroll",o,{passive:!0}),l&&h.addEventListener("resize",o)});const d=f&&c?Kt(f,o):null;let g,u=-1,a=null;r&&(a=new ResizeObserver(h=>{let[y]=h;y&&y.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{a&&a.observe(e)})),o()}),f&&!s&&a.observe(f),a.observe(e));let p=s?z(t):null;return s&&function h(){const y=z(t);!p||y.x===p.x&&y.y===p.y&&y.width===p.width&&y.height===p.height||o(),p=y,g=requestAnimationFrame(h)}(),o(),()=>{m.forEach(h=>{i&&h.removeEventListener("scroll",o),l&&h.removeEventListener("resize",o)}),d&&d(),a&&a.disconnect(),a=null,s&&cancelAnimationFrame(g)}}const ne=(t,e,o)=>{const n=new Map,i={platform:Jt,...o},l={...i.platform,_c:n};return Pt(t,e,{...i,platform:l})};export{ne as A,Zt as D,te as M,Ut as O,Qt as T,ee as b};

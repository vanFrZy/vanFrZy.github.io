function g(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function I(){return Object.create(null)}function b(t){t.forEach(U)}function M(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Ht(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ft(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Ft(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=e.dirty[s]|r[s];return l}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,l){if(r){const o=V(e,n,i,l);t.p(o,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Qt(t){return t&&M(t.destroy)?t.destroy:g}const X=typeof window<"u";let _t=X?()=>window.performance.now():()=>Date.now(),F=X?t=>requestAnimationFrame(t):g;const x=new Set;function Y(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(Y)}function dt(t){let e;return x.size===0&&F(Y),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function ht(){P=!0}function mt(){P=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:pt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,r=Math.max(f,r)}const l=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);l.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<l.length&&o[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(o[c],_)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=et("style");return xt(Z(t),e),e.sheet}function xt(t,e){return gt(t.head||t,e),e.sheet}function bt(t,e){if(P){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){P&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Vt(){return W(" ")}function Xt(){return W("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function G(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:G(t,i,e[i])}function te(t,e){for(const n in e)G(t,n,e[n])}function ee(t,e){Object.keys(e).forEach(n=>{vt(t,n,e[n])})}function vt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:G(t,e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(e))}function ne(t,e,n){return it(t,e,n,et)}function ie(t,e,n){return it(t,e,n,wt)}function kt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function re(t){return kt(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ce(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function le(t,e){return new t(e)}const D=new Map;let O=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:$t(e),rules:{}};return D.set(t,n),n}function J(t,e,n,i,r,l,o,s=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const $=e+(n-e)*l(y);u+=y*100+`%{${o($,1-$)}}
`}const _=u+`100% {${o(n,1-n)}}
}`,f=`__svelte_${jt(_)}_${s}`,h=Z(t),{stylesheet:a,rules:d}=D.get(h)||Ct(h,t);d[f]||(d[f]=!0,a.insertRule(`@keyframes ${f} ${_}`,a.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${r}ms 1 both`,O+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||Dt())}function Dt(){F(()=>{O||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),D.clear())})}let N;function E(t){N=t}function R(){if(!N)throw new Error("Function called outside component initialization");return N}function ue(t){R().$$.on_mount.push(t)}function fe(t){R().$$.after_update.push(t)}function ae(t,e){return R().$$.context.set(t,e),e}function _e(t){return R().$$.context.get(t)}function de(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],K=[],C=[],Q=[],rt=Promise.resolve();let L=!1;function st(){L||(L=!0,rt.then(ot))}function he(){return st(),rt}function T(t){C.push(t)}const B=new Set;let j=0;function ot(){const t=N;do{for(;j<v.length;){const e=v[j];j++,E(e),Ot(e.$$)}for(E(null),v.length=0,j=0;K.length;)K.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];B.has(n)||(B.add(n),n())}C.length=0}while(v.length);for(;Q.length;)Q.pop()();L=!1,B.clear(),E(t)}function Ot(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let w;function Tt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function H(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const S=new Set;let p;function me(){p={r:0,c:[],p}}function pe(){p.r||b(p.c),p=p.p}function Mt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),p.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function ge(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),o=i?0:1,s=null,c=null,u=null;function _(){u&&St(t,u)}function f(a,d){const m=a.b-o;return d*=Math.abs(m),{a:o,b:a.b,d:m,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:m=300,easing:y=lt,tick:$=g,css:q}=l||Pt,z={start:_t()+d,b:a};a||(z.group=p,p.r+=1),s||c?c=z:(q&&(_(),u=J(t,o,a,m,d,y,q)),a&&$(0,1),s=f(z,m),T(()=>H(t,a,"start")),dt(k=>{if(c&&k>c.start&&(s=f(c,m),c=null,H(t,s.b,"start"),q&&(_(),u=J(t,o,s.b,s.duration,0,y,l.css))),s){if(k>=s.end)$(o=s.b,1-o),H(t,s.b,"end"),c||(s.b?_():--s.group.r||b(s.group.c)),s=null;else if(k>=s.start){const ct=k-s.start;o=s.a+s.d*y(ct/s.duration),$(o,1-o)}}return!!(s||c)}))}return{run(a){M(l)?Tt().then(()=>{l=l(r),h(a)}):h(a)},end(){_(),s=c=null}}}function $e(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=e[l];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[l]=s}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}function be(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||T(()=>{const o=t.$$.on_mount.map(U).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...o):b(o),t.$$.on_mount=[]}),l.forEach(T)}function qt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(v.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,r,l,o,s=[-1]){const c=N;E(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&r(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),_&&zt(t,f)),h}):[],u.update(),_=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ht();const f=Et(e.target);u.fragment&&u.fragment.l(f),f.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),mt(),ot()}E(c)}class Ee{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){if(!M(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{te as $,he as A,g as B,Kt as C,ae as D,ut as E,Jt as F,de as G,K as H,Ft as I,ee as J,Zt as K,Qt as L,Yt as M,Gt as N,It as O,Wt as P,$e as Q,M as R,Ee as S,b as T,T as U,ge as V,xe as W,bt as X,_e as Y,wt as Z,ie as _,Vt as a,Lt as a0,Ht as a1,ce as a2,Ut as b,re as c,pe as d,Xt as e,Mt as f,me as g,tt as h,ve as i,fe as j,et as k,ne as l,Et as m,G as n,ue as o,oe as p,W as q,kt as r,Bt as s,ye as t,se as u,le as v,be as w,we as x,Rt as y,qt as z};
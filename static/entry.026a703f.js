function ta(c,e){const t=Object.create(null),a=c.split(",");for(let n=0;n<a.length;n++)t[a[n]]=!0;return e?n=>!!t[n.toLowerCase()]:n=>!!t[n]}const b1={},S6=[],Q2=()=>{},nb=()=>!1,$8=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),aa=c=>c.startsWith("onUpdate:"),q1=Object.assign,na=(c,e)=>{const t=c.indexOf(e);t>-1&&c.splice(t,1)},rb=Object.prototype.hasOwnProperty,d1=(c,e)=>rb.call(c,e),Q=Array.isArray,k6=c=>W8(c)==="[object Map]",af=c=>W8(c)==="[object Set]",sb=c=>W8(c)==="[object RegExp]",t1=c=>typeof c=="function",A1=c=>typeof c=="string",i0=c=>typeof c=="symbol",_1=c=>c!==null&&typeof c=="object",nf=c=>(_1(c)||t1(c))&&t1(c.then)&&t1(c.catch),rf=Object.prototype.toString,W8=c=>rf.call(c),ib=c=>W8(c).slice(8,-1),sf=c=>W8(c)==="[object Object]",ra=c=>A1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,q0=ta(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),me=c=>{const e=Object.create(null);return t=>e[t]||(e[t]=c(t))},ob=/-(\w)/g,z3=me(c=>c.replace(ob,(e,t)=>t?t.toUpperCase():"")),lb=/\B([A-Z])/g,f6=me(c=>c.replace(lb,"-$1").toLowerCase()),pe=me(c=>c.charAt(0).toUpperCase()+c.slice(1)),E9=me(c=>c?`on${pe(c)}`:""),Q4=(c,e)=>!Object.is(c,e),A6=(c,e)=>{for(let t=0;t<c.length;t++)c[t](e)},z7=(c,e,t)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:t})},_c=c=>{const e=parseFloat(c);return isNaN(e)?c:e},of=c=>{const e=A1(c)?Number(c):NaN;return isNaN(e)?c:e};let ys;const bc=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ve(c){if(Q(c)){const e={};for(let t=0;t<c.length;t++){const a=c[t],n=A1(a)?db(a):ve(a);if(n)for(const r in n)e[r]=n[r]}return e}else if(A1(c)||_1(c))return c}const fb=/;(?![^(]*\))/g,hb=/:([^]+)/,ub=/\/\*[^]*?\*\//g;function db(c){const e={};return c.replace(ub,"").split(fb).forEach(t=>{if(t){const a=t.split(hb);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function ze(c){let e="";if(A1(c))e=c;else if(Q(c))for(let t=0;t<c.length;t++){const a=ze(c[t]);a&&(e+=a+" ")}else if(_1(c))for(const t in c)c[t]&&(e+=t+" ");return e.trim()}function mb(c){if(!c)return null;let{class:e,style:t}=c;return e&&!A1(e)&&(c.class=ze(e)),t&&(c.style=ve(t)),c}const pb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vb=ta(pb);function lf(c){return!!c||c===""}const MH1=c=>A1(c)?c:c==null?"":Q(c)||_1(c)&&(c.toString===rf||!t1(c.toString))?JSON.stringify(c,ff,2):String(c),ff=(c,e)=>e&&e.__v_isRef?ff(c,e.value):k6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[a,n],r)=>(t[P9(a,r)+" =>"]=n,t),{})}:af(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>P9(t))}:i0(e)?P9(e):_1(e)&&!Q(e)&&!sf(e)?String(e):e,P9=(c,e="")=>{var t;return i0(c)?`Symbol(${(t=c.description)!=null?t:e})`:c};let S2;class hf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=S2,!e&&S2&&(this.index=(S2.scopes||(S2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=S2;try{return S2=this,e()}finally{S2=t}}}on(){S2=this}off(){S2=this.parent}stop(e){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function ge(c){return new hf(c)}function zb(c,e=S2){e&&e.active&&e.effects.push(c)}function uf(){return S2}function gb(c){S2&&S2.cleanups.push(c)}const sa=c=>{const e=new Set(c);return e.w=0,e.n=0,e},df=c=>(c.w&v4)>0,mf=c=>(c.n&v4)>0,Cb=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=v4},Hb=c=>{const{deps:e}=c;if(e.length){let t=0;for(let a=0;a<e.length;a++){const n=e[a];df(n)&&!mf(n)?n.delete(c):e[t++]=n,n.w&=~v4,n.n&=~v4}e.length=t}},g7=new WeakMap;let E0=0,v4=1;const xc=30;let G2;const q4=Symbol(""),wc=Symbol("");class ia{constructor(e,t=null,a){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,zb(this,a)}run(){if(!this.active)return this.fn();let e=G2,t=l4;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=G2,G2=this,l4=!0,v4=1<<++E0,E0<=xc?Cb(this):_s(this),this.fn()}finally{E0<=xc&&Hb(this),v4=1<<--E0,G2=this.parent,l4=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){G2===this?this.deferStop=!0:this.active&&(_s(this),this.onStop&&this.onStop(),this.active=!1)}}function _s(c){const{deps:e}=c;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(c);e.length=0}}let l4=!0;const pf=[];function o0(){pf.push(l4),l4=!1}function l0(){const c=pf.pop();l4=c===void 0?!0:c}function x2(c,e,t){if(l4&&G2){let a=g7.get(c);a||g7.set(c,a=new Map);let n=a.get(t);n||a.set(t,n=sa()),vf(n)}}function vf(c,e){let t=!1;E0<=xc?mf(c)||(c.n|=v4,t=!df(c)):t=!c.has(G2),t&&(c.add(G2),G2.deps.push(c))}function A3(c,e,t,a,n,r){const s=g7.get(c);if(!s)return;let i=[];if(e==="clear")i=[...s.values()];else if(t==="length"&&Q(c)){const o=Number(a);s.forEach((l,f)=>{(f==="length"||!i0(f)&&f>=o)&&i.push(l)})}else switch(t!==void 0&&i.push(s.get(t)),e){case"add":Q(c)?ra(t)&&i.push(s.get("length")):(i.push(s.get(q4)),k6(c)&&i.push(s.get(wc)));break;case"delete":Q(c)||(i.push(s.get(q4)),k6(c)&&i.push(s.get(wc)));break;case"set":k6(c)&&i.push(s.get(q4));break}if(i.length===1)i[0]&&Nc(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);Nc(sa(o))}}function Nc(c,e){const t=Q(c)?c:[...c];for(const a of t)a.computed&&bs(a);for(const a of t)a.computed||bs(a)}function bs(c,e){(c!==G2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function Mb(c,e){var t;return(t=g7.get(c))==null?void 0:t.get(e)}const Vb=ta("__proto__,__v_isRef,__isVue"),zf=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(i0)),xs=Lb();function Lb(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...t){const a=f1(this);for(let r=0,s=this.length;r<s;r++)x2(a,"get",r+"");const n=a[e](...t);return n===-1||n===!1?a[e](...t.map(f1)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...t){o0();const a=f1(this)[e].apply(this,t);return l0(),a}}),c}function yb(c){const e=f1(this);return x2(e,"has",c),e.hasOwnProperty(c)}class gf{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,a){const n=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return r;if(t==="__v_raw")return a===(n?r?Ib:Vf:r?Mf:Hf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(a)?e:void 0;const s=Q(e);if(!n){if(s&&d1(xs,t))return Reflect.get(xs,t,a);if(t==="hasOwnProperty")return yb}const i=Reflect.get(e,t,a);return(i0(t)?zf.has(t):Vb(t))||(n||x2(e,"get",t),r)?i:P1(i)?s&&ra(t)?i:i.value:_1(i)?n?Lf(i):g3(i):i}}class Cf extends gf{constructor(e=!1){super(!1,e)}set(e,t,a,n){let r=e[t];if(J4(r)&&P1(r)&&!P1(a))return!1;if(!this._shallow&&(!C7(a)&&!J4(a)&&(r=f1(r),a=f1(a)),!Q(e)&&P1(r)&&!P1(a)))return r.value=a,!0;const s=Q(e)&&ra(t)?Number(t)<e.length:d1(e,t),i=Reflect.set(e,t,a,n);return e===f1(n)&&(s?Q4(a,r)&&A3(e,"set",t,a):A3(e,"add",t,a)),i}deleteProperty(e,t){const a=d1(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&a&&A3(e,"delete",t,void 0),n}has(e,t){const a=Reflect.has(e,t);return(!i0(t)||!zf.has(t))&&x2(e,"has",t),a}ownKeys(e){return x2(e,"iterate",Q(e)?"length":q4),Reflect.ownKeys(e)}}class _b extends gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const bb=new Cf,xb=new _b,wb=new Cf(!0),oa=c=>c,Ce=c=>Reflect.getPrototypeOf(c);function x5(c,e,t=!1,a=!1){c=c.__v_raw;const n=f1(c),r=f1(e);t||(Q4(e,r)&&x2(n,"get",e),x2(n,"get",r));const{has:s}=Ce(n),i=a?oa:t?ha:l8;if(s.call(n,e))return i(c.get(e));if(s.call(n,r))return i(c.get(r));c!==n&&c.get(e)}function w5(c,e=!1){const t=this.__v_raw,a=f1(t),n=f1(c);return e||(Q4(c,n)&&x2(a,"has",c),x2(a,"has",n)),c===n?t.has(c):t.has(c)||t.has(n)}function N5(c,e=!1){return c=c.__v_raw,!e&&x2(f1(c),"iterate",q4),Reflect.get(c,"size",c)}function ws(c){c=f1(c);const e=f1(this);return Ce(e).has.call(e,c)||(e.add(c),A3(e,"add",c,c)),this}function Ns(c,e){e=f1(e);const t=f1(this),{has:a,get:n}=Ce(t);let r=a.call(t,c);r||(c=f1(c),r=a.call(t,c));const s=n.call(t,c);return t.set(c,e),r?Q4(e,s)&&A3(t,"set",c,e):A3(t,"add",c,e),this}function Ss(c){const e=f1(this),{has:t,get:a}=Ce(e);let n=t.call(e,c);n||(c=f1(c),n=t.call(e,c)),a&&a.call(e,c);const r=e.delete(c);return n&&A3(e,"delete",c,void 0),r}function ks(){const c=f1(this),e=c.size!==0,t=c.clear();return e&&A3(c,"clear",void 0,void 0),t}function S5(c,e){return function(a,n){const r=this,s=r.__v_raw,i=f1(s),o=e?oa:c?ha:l8;return!c&&x2(i,"iterate",q4),s.forEach((l,f)=>a.call(n,o(l),o(f),r))}}function k5(c,e,t){return function(...a){const n=this.__v_raw,r=f1(n),s=k6(r),i=c==="entries"||c===Symbol.iterator&&s,o=c==="keys"&&s,l=n[c](...a),f=t?oa:e?ha:l8;return!e&&x2(r,"iterate",o?wc:q4),{next(){const{value:h,done:u}=l.next();return u?{value:h,done:u}:{value:i?[f(h[0]),f(h[1])]:f(h),done:u}},[Symbol.iterator](){return this}}}}function W3(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function Nb(){const c={get(r){return x5(this,r)},get size(){return N5(this)},has:w5,add:ws,set:Ns,delete:Ss,clear:ks,forEach:S5(!1,!1)},e={get(r){return x5(this,r,!1,!0)},get size(){return N5(this)},has:w5,add:ws,set:Ns,delete:Ss,clear:ks,forEach:S5(!1,!0)},t={get(r){return x5(this,r,!0)},get size(){return N5(this,!0)},has(r){return w5.call(this,r,!0)},add:W3("add"),set:W3("set"),delete:W3("delete"),clear:W3("clear"),forEach:S5(!0,!1)},a={get(r){return x5(this,r,!0,!0)},get size(){return N5(this,!0)},has(r){return w5.call(this,r,!0)},add:W3("add"),set:W3("set"),delete:W3("delete"),clear:W3("clear"),forEach:S5(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{c[r]=k5(r,!1,!1),t[r]=k5(r,!0,!1),e[r]=k5(r,!1,!0),a[r]=k5(r,!0,!0)}),[c,t,e,a]}const[Sb,kb,Ab,Tb]=Nb();function la(c,e){const t=e?c?Tb:Ab:c?kb:Sb;return(a,n,r)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?a:Reflect.get(d1(t,n)&&n in a?t:a,n,r)}const Eb={get:la(!1,!1)},Pb={get:la(!1,!0)},Rb={get:la(!0,!1)},Hf=new WeakMap,Mf=new WeakMap,Vf=new WeakMap,Ib=new WeakMap;function Db(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ob(c){return c.__v_skip||!Object.isExtensible(c)?0:Db(ib(c))}function g3(c){return J4(c)?c:fa(c,!1,bb,Eb,Hf)}function j8(c){return fa(c,!1,wb,Pb,Mf)}function Lf(c){return fa(c,!0,xb,Rb,Vf)}function fa(c,e,t,a,n){if(!_1(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const r=n.get(c);if(r)return r;const s=Ob(c);if(s===0)return c;const i=new Proxy(c,s===2?a:t);return n.set(c,i),i}function f4(c){return J4(c)?f4(c.__v_raw):!!(c&&c.__v_isReactive)}function J4(c){return!!(c&&c.__v_isReadonly)}function C7(c){return!!(c&&c.__v_isShallow)}function yf(c){return f4(c)||J4(c)}function f1(c){const e=c&&c.__v_raw;return e?f1(e):c}function q6(c){return z7(c,"__v_skip",!0),c}const l8=c=>_1(c)?g3(c):c,ha=c=>_1(c)?Lf(c):c;function _f(c){l4&&G2&&(c=f1(c),vf(c.dep||(c.dep=sa())))}function bf(c,e){c=f1(c);const t=c.dep;t&&Nc(t)}function P1(c){return!!(c&&c.__v_isRef===!0)}function B2(c){return xf(c,!1)}function f8(c){return xf(c,!0)}function xf(c,e){return P1(c)?c:new Fb(c,e)}class Fb{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:f1(e),this._value=t?e:l8(e)}get value(){return _f(this),this._value}set value(e){const t=this.__v_isShallow||C7(e)||J4(e);e=t?e:f1(e),Q4(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:l8(e),bf(this))}}function k1(c){return P1(c)?c.value:c}const Bb={get:(c,e,t)=>k1(Reflect.get(c,e,t)),set:(c,e,t,a)=>{const n=c[e];return P1(n)&&!P1(t)?(n.value=t,!0):Reflect.set(c,e,t,a)}};function wf(c){return f4(c)?c:new Proxy(c,Bb)}function Ub(c){const e=Q(c)?new Array(c.length):{};for(const t in c)e[t]=Nf(c,t);return e}class qb{constructor(e,t,a){this._object=e,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Mb(f1(this._object),this._key)}}class $b{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Wb(c,e,t){return P1(c)?c:t1(c)?new $b(c):_1(c)&&arguments.length>1?Nf(c,e,t):B2(c)}function Nf(c,e,t){const a=c[e];return P1(a)?a:new qb(c,e,t)}class jb{constructor(e,t,a,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ia(e,()=>{this._dirty||(this._dirty=!0,bf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=a}get value(){const e=f1(this);return _f(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gb(c,e,t=!1){let a,n;const r=t1(c);return r?(a=c,n=Q2):(a=c.get,n=c.set),new jb(a,n,r||!n,t)}function VH1(c,...e){}function h4(c,e,t,a){let n;try{n=a?c(...a):c()}catch(r){f0(r,e,t)}return n}function U2(c,e,t,a){if(t1(c)){const r=h4(c,e,t,a);return r&&nf(r)&&r.catch(s=>{f0(s,e,t)}),r}const n=[];for(let r=0;r<c.length;r++)n.push(U2(c[r],e,t,a));return n}function f0(c,e,t,a=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,i=t;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](c,s,i)===!1)return}r=r.parent}const o=e.appContext.config.errorHandler;if(o){h4(o,null,10,[c,s,i]);return}}Kb(c,t,n,a)}function Kb(c,e,t,a=!0){console.error(c)}let h8=!1,Sc=!1;const l2=[];let o3=0;const T6=[];let b3=null,E4=0;const Sf=Promise.resolve();let ua=null;function L4(c){const e=ua||Sf;return c?e.then(this?c.bind(this):c):e}function Yb(c){let e=o3+1,t=l2.length;for(;e<t;){const a=e+t>>>1,n=l2[a],r=u8(n);r<c||r===c&&n.pre?e=a+1:t=a}return e}function He(c){(!l2.length||!l2.includes(c,h8&&c.allowRecurse?o3+1:o3))&&(c.id==null?l2.push(c):l2.splice(Yb(c.id),0,c),kf())}function kf(){!h8&&!Sc&&(Sc=!0,ua=Sf.then(Af))}function Zb(c){const e=l2.indexOf(c);e>o3&&l2.splice(e,1)}function kc(c){Q(c)?T6.push(...c):(!b3||!b3.includes(c,c.allowRecurse?E4+1:E4))&&T6.push(c),kf()}function As(c,e,t=h8?o3+1:0){for(;t<l2.length;t++){const a=l2[t];if(a&&a.pre){if(c&&a.id!==c.uid)continue;l2.splice(t,1),t--,a()}}}function H7(c){if(T6.length){const e=[...new Set(T6)];if(T6.length=0,b3){b3.push(...e);return}for(b3=e,b3.sort((t,a)=>u8(t)-u8(a)),E4=0;E4<b3.length;E4++)b3[E4]();b3=null,E4=0}}const u8=c=>c.id==null?1/0:c.id,Xb=(c,e)=>{const t=u8(c)-u8(e);if(t===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return t};function Af(c){Sc=!1,h8=!0,l2.sort(Xb);const e=Q2;try{for(o3=0;o3<l2.length;o3++){const t=l2[o3];t&&t.active!==!1&&h4(t,null,14)}}finally{o3=0,l2.length=0,H7(),h8=!1,ua=null,(l2.length||T6.length)&&Af()}}function Qb(c,e,...t){if(c.isUnmounted)return;const a=c.vnode.props||b1;let n=t;const r=e.startsWith("update:"),s=r&&e.slice(7);if(s&&s in a){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:h,trim:u}=a[f]||b1;u&&(n=t.map(d=>A1(d)?d.trim():d)),h&&(n=t.map(_c))}let i,o=a[i=E9(e)]||a[i=E9(z3(e))];!o&&r&&(o=a[i=E9(f6(e))]),o&&U2(o,c,6,n);const l=a[i+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,U2(l,c,6,n)}}function Tf(c,e,t=!1){const a=e.emitsCache,n=a.get(c);if(n!==void 0)return n;const r=c.emits;let s={},i=!1;if(!t1(c)){const o=l=>{const f=Tf(l,e,!0);f&&(i=!0,q1(s,f))};!t&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!r&&!i?(_1(c)&&a.set(c,null),null):(Q(r)?r.forEach(o=>s[o]=null):q1(s,r),_1(c)&&a.set(c,s),s)}function Me(c,e){return!c||!$8(e)?!1:(e=e.slice(2).replace(/Once$/,""),d1(c,e[0].toLowerCase()+e.slice(1))||d1(c,f6(e))||d1(c,e))}let J1=null,Ve=null;function M7(c){const e=J1;return J1=c,Ve=c&&c.type.__scopeId||null,e}function LH1(c){Ve=c}function yH1(){Ve=null}function da(c,e=J1,t){if(!e||c._n)return c;const a=(...n)=>{a._d&&Gs(-1);const r=M7(e);let s;try{s=c(...n)}finally{M7(r),a._d&&Gs(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function R9(c){const{type:e,vnode:t,proxy:a,withProxy:n,props:r,propsOptions:[s],slots:i,attrs:o,emit:l,render:f,renderCache:h,data:u,setupState:d,ctx:v,inheritAttrs:H}=c;let y,M;const C=M7(c);try{if(t.shapeFlag&4){const m=n||a,L=m;y=I2(f.call(L,m,h,r,d,u,v)),M=o}else{const m=e;y=I2(m.length>1?m(r,{attrs:o,slots:i,emit:l}):m(r,null)),M=e.props?o:ex(o)}}catch(m){G0.length=0,f0(m,c,1),y=N1(g2)}let z=y;if(M&&H!==!1){const m=Object.keys(M),{shapeFlag:L}=z;m.length&&L&7&&(s&&m.some(aa)&&(M=cx(M,s)),z=E3(z,M))}return t.dirs&&(z=E3(z),z.dirs=z.dirs?z.dirs.concat(t.dirs):t.dirs),t.transition&&(z.transition=t.transition),y=z,M7(C),y}function Jb(c){let e;for(let t=0;t<c.length;t++){const a=c[t];if(G6(a)){if(a.type!==g2||a.children==="v-if"){if(e)return;e=a}}else return}return e}const ex=c=>{let e;for(const t in c)(t==="class"||t==="style"||$8(t))&&((e||(e={}))[t]=c[t]);return e},cx=(c,e)=>{const t={};for(const a in c)(!aa(a)||!(a.slice(9)in e))&&(t[a]=c[a]);return t};function tx(c,e,t){const{props:a,children:n,component:r}=c,{props:s,children:i,patchFlag:o}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return a?Ts(a,s,l):!!s;if(o&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const u=f[h];if(s[u]!==a[u]&&!Me(l,u))return!0}}}else return(n||i)&&(!i||!i.$stable)?!0:a===s?!1:a?s?Ts(a,s,l):!0:!!s;return!1}function Ts(c,e,t){const a=Object.keys(e);if(a.length!==Object.keys(c).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(e[r]!==c[r]&&!Me(t,r))return!0}return!1}function ma({vnode:c,parent:e},t){for(;e&&e.subTree===c;)(c=e.vnode).el=t,e=e.parent}const pa="components";function _H1(c,e){return Pf(pa,c,!0,e)||c}const Ef=Symbol.for("v-ndc");function ax(c){return A1(c)?Pf(pa,c,!1)||c:c||Ef}function Pf(c,e,t=!0,a=!1){const n=J1||U1;if(n){const r=n.type;if(c===pa){const i=Dc(r,!1);if(i&&(i===e||i===z3(e)||i===pe(z3(e))))return r}const s=Es(n[c]||r[c],e)||Es(n.appContext[c],e);return!s&&a?r:s}}function Es(c,e){return c&&(c[e]||c[z3(e)]||c[pe(z3(e))])}const Rf=c=>c.__isSuspense,nx={name:"Suspense",__isSuspense:!0,process(c,e,t,a,n,r,s,i,o,l){c==null?rx(e,t,a,n,r,s,i,o,l):sx(c,e,t,a,n,s,i,o,l)},hydrate:ix,create:za,normalize:ox},va=nx;function d8(c,e){const t=c.props&&c.props[e];t1(t)&&t()}function rx(c,e,t,a,n,r,s,i,o){const{p:l,o:{createElement:f}}=o,h=f("div"),u=c.suspense=za(c,n,a,e,h,t,r,s,i,o);l(null,u.pendingBranch=c.ssContent,h,null,a,u,r,s),u.deps>0?(d8(c,"onPending"),d8(c,"onFallback"),l(null,c.ssFallback,e,t,a,null,r,s),E6(u,c.ssFallback)):u.resolve(!1,!0)}function sx(c,e,t,a,n,r,s,i,{p:o,um:l,o:{createElement:f}}){const h=e.suspense=c.suspense;h.vnode=e,e.el=c.el;const u=e.ssContent,d=e.ssFallback,{activeBranch:v,pendingBranch:H,isInFallback:y,isHydrating:M}=h;if(H)h.pendingBranch=u,K2(u,H)?(o(H,u,h.hiddenContainer,null,n,h,r,s,i),h.deps<=0?h.resolve():y&&(o(v,d,t,a,n,null,r,s,i),E6(h,d))):(h.pendingId++,M?(h.isHydrating=!1,h.activeBranch=H):l(H,n,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),y?(o(null,u,h.hiddenContainer,null,n,h,r,s,i),h.deps<=0?h.resolve():(o(v,d,t,a,n,null,r,s,i),E6(h,d))):v&&K2(u,v)?(o(v,u,t,a,n,h,r,s,i),h.resolve(!0)):(o(null,u,h.hiddenContainer,null,n,h,r,s,i),h.deps<=0&&h.resolve()));else if(v&&K2(u,v))o(v,u,t,a,n,h,r,s,i),E6(h,u);else if(d8(e,"onPending"),h.pendingBranch=u,h.pendingId++,o(null,u,h.hiddenContainer,null,n,h,r,s,i),h.deps<=0)h.resolve();else{const{timeout:C,pendingId:z}=h;C>0?setTimeout(()=>{h.pendingId===z&&h.fallback(d)},C):C===0&&h.fallback(d)}}function za(c,e,t,a,n,r,s,i,o,l,f=!1){const{p:h,m:u,um:d,n:v,o:{parentNode:H,remove:y}}=l;let M;const C=lx(c);C&&e!=null&&e.pendingBranch&&(M=e.pendingId,e.deps++);const z=c.props?of(c.props.timeout):void 0,m={vnode:c,parent:e,parentComponent:t,isSVG:s,container:a,hiddenContainer:n,anchor:r,deps:0,pendingId:0,timeout:typeof z=="number"?z:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(L=!1,N=!1){const{vnode:S,activeBranch:_,pendingBranch:w,pendingId:E,effects:W,parentComponent:R,container:J}=m;let C1=!1;if(m.isHydrating)m.isHydrating=!1;else if(!L){C1=_&&w.transition&&w.transition.mode==="out-in",C1&&(_.transition.afterLeave=()=>{E===m.pendingId&&(u(w,J,v(_),0),kc(W))});let{anchor:r1}=m;_&&(r1=v(_),d(_,R,m,!0)),C1||u(w,J,r1,0)}E6(m,w),m.pendingBranch=null,m.isInFallback=!1;let u1=m.parent,B=!1;for(;u1;){if(u1.pendingBranch){u1.effects.push(...W),B=!0;break}u1=u1.parent}!B&&!C1&&kc(W),m.effects=[],C&&e&&e.pendingBranch&&M===e.pendingId&&(e.deps--,e.deps===0&&!N&&e.resolve()),d8(S,"onResolve")},fallback(L){if(!m.pendingBranch)return;const{vnode:N,activeBranch:S,parentComponent:_,container:w,isSVG:E}=m;d8(N,"onFallback");const W=v(S),R=()=>{m.isInFallback&&(h(null,L,w,W,_,null,E,i,o),E6(m,L))},J=L.transition&&L.transition.mode==="out-in";J&&(S.transition.afterLeave=R),m.isInFallback=!0,d(S,_,null,!0),J||R()},move(L,N,S){m.activeBranch&&u(m.activeBranch,L,N,S),m.container=L},next(){return m.activeBranch&&v(m.activeBranch)},registerDep(L,N){const S=!!m.pendingBranch;S&&m.deps++;const _=L.vnode.el;L.asyncDep.catch(w=>{f0(w,L,0)}).then(w=>{if(L.isUnmounted||m.isUnmounted||m.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:E}=L;Ic(L,w,!1),_&&(E.el=_);const W=!_&&L.subTree.el;N(L,E,H(_||L.subTree.el),_?null:v(L.subTree),m,s,o),W&&y(W),ma(L,E.el),S&&--m.deps===0&&m.resolve()})},unmount(L,N){m.isUnmounted=!0,m.activeBranch&&d(m.activeBranch,t,L,N),m.pendingBranch&&d(m.pendingBranch,t,L,N)}};return m}function ix(c,e,t,a,n,r,s,i,o){const l=e.suspense=za(e,a,t,c.parentNode,document.createElement("div"),null,n,r,s,i,!0),f=o(c,l.pendingBranch=e.ssContent,t,l,r,s);return l.deps===0&&l.resolve(!1,!0),f}function ox(c){const{shapeFlag:e,children:t}=c,a=e&32;c.ssContent=Ps(a?t.default:t),c.ssFallback=a?Ps(t.fallback):N1(g2)}function Ps(c){let e;if(t1(c)){const t=j6&&c._c;t&&(c._d=!1,l3()),c=c(),t&&(c._d=!0,e=O2,ah())}return Q(c)&&(c=Jb(c)),c=I2(c),e&&!c.dynamicChildren&&(c.dynamicChildren=e.filter(t=>t!==c)),c}function If(c,e){e&&e.pendingBranch?Q(c)?e.effects.push(...c):e.effects.push(c):kc(c)}function E6(c,e){c.activeBranch=e;const{vnode:t,parentComponent:a}=c,n=t.el=e.el;a&&a.subTree===t&&(a.vnode.el=n,ma(a,n))}function lx(c){var e;return((e=c.props)==null?void 0:e.suspensible)!=null&&c.props.suspensible!==!1}function bH1(c,e){return ga(c,null,e)}const A5={};function $4(c,e,t){return ga(c,e,t)}function ga(c,e,{immediate:t,deep:a,flush:n,onTrack:r,onTrigger:s}=b1){var i;const o=uf()===((i=U1)==null?void 0:i.scope)?U1:null;let l,f=!1,h=!1;if(P1(c)?(l=()=>c.value,f=C7(c)):f4(c)?(l=()=>c,a=!0):Q(c)?(h=!0,f=c.some(m=>f4(m)||C7(m)),l=()=>c.map(m=>{if(P1(m))return m.value;if(f4(m))return R4(m);if(t1(m))return h4(m,o,2)})):t1(c)?e?l=()=>h4(c,o,2):l=()=>{if(!(o&&o.isUnmounted))return u&&u(),U2(c,o,3,[d])}:l=Q2,e&&a){const m=l;l=()=>R4(m())}let u,d=m=>{u=C.onStop=()=>{h4(m,o,4),u=C.onStop=void 0}},v;if(Y6)if(d=Q2,e?t&&U2(e,o,3,[l(),h?[]:void 0,d]):l(),n==="sync"){const m=Jx();v=m.__watcherHandles||(m.__watcherHandles=[])}else return Q2;let H=h?new Array(c.length).fill(A5):A5;const y=()=>{if(C.active)if(e){const m=C.run();(a||f||(h?m.some((L,N)=>Q4(L,H[N])):Q4(m,H)))&&(u&&u(),U2(e,o,3,[m,H===A5?void 0:h&&H[0]===A5?[]:H,d]),H=m)}else C.run()};y.allowRecurse=!!e;let M;n==="sync"?M=y:n==="post"?M=()=>a2(y,o&&o.suspense):(y.pre=!0,o&&(y.id=o.uid),M=()=>He(y));const C=new ia(l,M);e?t?y():H=C.run():n==="post"?a2(C.run.bind(C),o&&o.suspense):C.run();const z=()=>{C.stop(),o&&o.scope&&na(o.scope.effects,C)};return v&&v.push(z),z}function fx(c,e,t){const a=this.proxy,n=A1(c)?c.includes(".")?Df(a,c):()=>a[c]:c.bind(a,a);let r;t1(e)?r=e:(r=e.handler,t=e);const s=U1;K6(this);const i=ga(n,r.bind(a),t);return s?K6(s):G4(),i}function Df(c,e){const t=e.split(".");return()=>{let a=c;for(let n=0;n<t.length&&a;n++)a=a[t[n]];return a}}function R4(c,e){if(!_1(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),P1(c))R4(c.value,e);else if(Q(c))for(let t=0;t<c.length;t++)R4(c[t],e);else if(af(c)||k6(c))c.forEach(t=>{R4(t,e)});else if(sf(c))for(const t in c)R4(c[t],e);return c}function xH1(c,e){const t=J1;if(t===null)return c;const a=_e(t)||t.proxy,n=c.dirs||(c.dirs=[]);for(let r=0;r<e.length;r++){let[s,i,o,l=b1]=e[r];s&&(t1(s)&&(s={mounted:s,updated:s}),s.deep&&R4(i),n.push({dir:s,instance:a,value:i,oldValue:void 0,arg:o,modifiers:l}))}return c}function i3(c,e,t,a){const n=c.dirs,r=e&&e.dirs;for(let s=0;s<n.length;s++){const i=n[s];r&&(i.oldValue=r[s].value);let o=i.dir[a];o&&(o0(),U2(o,t,8,[c.el,i,c,e]),l0())}}const J3=Symbol("_leaveCb"),T5=Symbol("_enterCb");function Of(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ha(()=>{c.isMounted=!0}),Va(()=>{c.isUnmounting=!0}),c}const P2=[Function,Array],Ff={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:P2,onEnter:P2,onAfterEnter:P2,onEnterCancelled:P2,onBeforeLeave:P2,onLeave:P2,onAfterLeave:P2,onLeaveCancelled:P2,onBeforeAppear:P2,onAppear:P2,onAfterAppear:P2,onAppearCancelled:P2},hx={name:"BaseTransition",props:Ff,setup(c,{slots:e}){const t=h0(),a=Of();let n;return()=>{const r=e.default&&Ca(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const H of r)if(H.type!==g2){s=H;break}}const i=f1(c),{mode:o}=i;if(a.isLeaving)return I9(s);const l=Rs(s);if(!l)return I9(s);const f=m8(l,i,a,t);$6(l,f);const h=t.subTree,u=h&&Rs(h);let d=!1;const{getTransitionKey:v}=l.type;if(v){const H=v();n===void 0?n=H:H!==n&&(n=H,d=!0)}if(u&&u.type!==g2&&(!K2(l,u)||d)){const H=m8(u,i,a,t);if($6(u,H),o==="out-in")return a.isLeaving=!0,H.afterLeave=()=>{a.isLeaving=!1,t.update.active!==!1&&t.update()},I9(s);o==="in-out"&&l.type!==g2&&(H.delayLeave=(y,M,C)=>{const z=Bf(a,u);z[String(u.key)]=u,y[J3]=()=>{M(),y[J3]=void 0,delete f.delayedLeave},f.delayedLeave=C})}return s}}},ux=hx;function Bf(c,e){const{leavingVNodes:t}=c;let a=t.get(e.type);return a||(a=Object.create(null),t.set(e.type,a)),a}function m8(c,e,t,a){const{appear:n,mode:r,persisted:s=!1,onBeforeEnter:i,onEnter:o,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:u,onAfterLeave:d,onLeaveCancelled:v,onBeforeAppear:H,onAppear:y,onAfterAppear:M,onAppearCancelled:C}=e,z=String(c.key),m=Bf(t,c),L=(_,w)=>{_&&U2(_,a,9,w)},N=(_,w)=>{const E=w[1];L(_,w),Q(_)?_.every(W=>W.length<=1)&&E():_.length<=1&&E()},S={mode:r,persisted:s,beforeEnter(_){let w=i;if(!t.isMounted)if(n)w=H||i;else return;_[J3]&&_[J3](!0);const E=m[z];E&&K2(c,E)&&E.el[J3]&&E.el[J3](),L(w,[_])},enter(_){let w=o,E=l,W=f;if(!t.isMounted)if(n)w=y||o,E=M||l,W=C||f;else return;let R=!1;const J=_[T5]=C1=>{R||(R=!0,C1?L(W,[_]):L(E,[_]),S.delayedLeave&&S.delayedLeave(),_[T5]=void 0)};w?N(w,[_,J]):J()},leave(_,w){const E=String(c.key);if(_[T5]&&_[T5](!0),t.isUnmounting)return w();L(h,[_]);let W=!1;const R=_[J3]=J=>{W||(W=!0,w(),J?L(v,[_]):L(d,[_]),_[J3]=void 0,m[E]===c&&delete m[E])};m[E]=c,u?N(u,[_,R]):R()},clone(_){return m8(_,e,t,a)}};return S}function I9(c){if(G8(c))return c=E3(c),c.children=null,c}function Rs(c){return G8(c)?c.children?c.children[0]:void 0:c}function $6(c,e){c.shapeFlag&6&&c.component?$6(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function Ca(c,e=!1,t){let a=[],n=0;for(let r=0;r<c.length;r++){let s=c[r];const i=t==null?s.key:String(t)+String(s.key!=null?s.key:r);s.type===p2?(s.patchFlag&128&&n++,a=a.concat(Ca(s.children,e,i))):(e||s.type!==g2)&&a.push(i!=null?E3(s,{key:i}):s)}if(n>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}/*! #__NO_SIDE_EFFECTS__ */function B3(c,e){return t1(c)?(()=>q1({name:c.name},e,{setup:c}))():c}const W4=c=>!!c.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Is(c){t1(c)&&(c={loader:c});const{loader:e,loadingComponent:t,errorComponent:a,delay:n=200,timeout:r,suspensible:s=!0,onError:i}=c;let o=null,l,f=0;const h=()=>(f++,o=null,u()),u=()=>{let d;return o||(d=o=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),i)return new Promise((H,y)=>{i(v,()=>H(h()),()=>y(v),f+1)});throw v}).then(v=>d!==o&&o?o:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),l=v,v)))};return B3({name:"AsyncComponentWrapper",__asyncLoader:u,get __asyncResolved(){return l},setup(){const d=U1;if(l)return()=>D9(l,d);const v=C=>{o=null,f0(C,d,13,!a)};if(s&&d.suspense||Y6)return u().then(C=>()=>D9(C,d)).catch(C=>(v(C),()=>a?N1(a,{error:C}):null));const H=B2(!1),y=B2(),M=B2(!!n);return n&&setTimeout(()=>{M.value=!1},n),r!=null&&setTimeout(()=>{if(!H.value&&!y.value){const C=new Error(`Async component timed out after ${r}ms.`);v(C),y.value=C}},r),u().then(()=>{H.value=!0,d.parent&&G8(d.parent.vnode)&&He(d.parent.update)}).catch(C=>{v(C),y.value=C}),()=>{if(H.value&&l)return D9(l,d);if(y.value&&a)return N1(a,{error:y.value});if(t&&!M.value)return N1(t)}}})}function D9(c,e){const{ref:t,props:a,children:n,ce:r}=e.vnode,s=N1(c,a,n);return s.ref=t,s.ce=r,delete e.vnode.ce,s}const G8=c=>c.type.__isKeepAlive,dx={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(c,{slots:e}){const t=h0(),a=t.ctx;if(!a.renderer)return()=>{const C=e.default&&e.default();return C&&C.length===1?C[0]:C};const n=new Map,r=new Set;let s=null;const i=t.suspense,{renderer:{p:o,m:l,um:f,o:{createElement:h}}}=a,u=h("div");a.activate=(C,z,m,L,N)=>{const S=C.component;l(C,z,m,0,i),o(S.vnode,C,z,m,S,i,L,C.slotScopeIds,N),a2(()=>{S.isDeactivated=!1,S.a&&A6(S.a);const _=C.props&&C.props.onVnodeMounted;_&&L2(_,S.parent,C)},i)},a.deactivate=C=>{const z=C.component;l(C,u,null,1,i),a2(()=>{z.da&&A6(z.da);const m=C.props&&C.props.onVnodeUnmounted;m&&L2(m,z.parent,C),z.isDeactivated=!0},i)};function d(C){O9(C),f(C,t,i,!0)}function v(C){n.forEach((z,m)=>{const L=Dc(z.type);L&&(!C||!C(L))&&H(m)})}function H(C){const z=n.get(C);!s||!K2(z,s)?d(z):s&&O9(s),n.delete(C),r.delete(C)}$4(()=>[c.include,c.exclude],([C,z])=>{C&&v(m=>P0(C,m)),z&&v(m=>!P0(z,m))},{flush:"post",deep:!0});let y=null;const M=()=>{y!=null&&n.set(y,F9(t.subTree))};return Ha(M),Ma(M),Va(()=>{n.forEach(C=>{const{subTree:z,suspense:m}=t,L=F9(z);if(C.type===L.type&&C.key===L.key){O9(L);const N=L.component.da;N&&a2(N,m);return}d(C)})}),()=>{if(y=null,!e.default)return null;const C=e.default(),z=C[0];if(C.length>1)return s=null,C;if(!G6(z)||!(z.shapeFlag&4)&&!(z.shapeFlag&128))return s=null,z;let m=F9(z);const L=m.type,N=Dc(W4(m)?m.type.__asyncResolved||{}:L),{include:S,exclude:_,max:w}=c;if(S&&(!N||!P0(S,N))||_&&N&&P0(_,N))return s=m,z;const E=m.key==null?L:m.key,W=n.get(E);return m.el&&(m=E3(m),z.shapeFlag&128&&(z.ssContent=m)),y=E,W?(m.el=W.el,m.component=W.component,m.transition&&$6(m,m.transition),m.shapeFlag|=512,r.delete(E),r.add(E)):(r.add(E),w&&r.size>parseInt(w,10)&&H(r.values().next().value)),m.shapeFlag|=256,s=m,Rf(z.type)?z:m}}},mx=dx;function P0(c,e){return Q(c)?c.some(t=>P0(t,e)):A1(c)?c.split(",").includes(e):sb(c)?c.test(e):!1}function px(c,e){Uf(c,"a",e)}function vx(c,e){Uf(c,"da",e)}function Uf(c,e,t=U1){const a=c.__wdc||(c.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(Le(e,a,t),t){let n=t.parent;for(;n&&n.parent;)G8(n.parent.vnode)&&zx(a,e,t,n),n=n.parent}}function zx(c,e,t,a){const n=Le(e,c,a,!0);qf(()=>{na(a[e],n)},t)}function O9(c){c.shapeFlag&=-257,c.shapeFlag&=-513}function F9(c){return c.shapeFlag&128?c.ssContent:c}function Le(c,e,t=U1,a=!1){if(t){const n=t[c]||(t[c]=[]),r=e.__weh||(e.__weh=(...s)=>{if(t.isUnmounted)return;o0(),K6(t);const i=U2(e,t,c,s);return G4(),l0(),i});return a?n.unshift(r):n.push(r),r}}const U3=c=>(e,t=U1)=>(!Y6||c==="sp")&&Le(c,(...a)=>e(...a),t),gx=U3("bm"),Ha=U3("m"),Cx=U3("bu"),Ma=U3("u"),Va=U3("bum"),qf=U3("um"),Hx=U3("sp"),Mx=U3("rtg"),Vx=U3("rtc");function $f(c,e=U1){Le("ec",c,e)}function wH1(c,e,t,a){let n;const r=t&&t[a];if(Q(c)||A1(c)){n=new Array(c.length);for(let s=0,i=c.length;s<i;s++)n[s]=e(c[s],s,void 0,r&&r[s])}else if(typeof c=="number"){n=new Array(c);for(let s=0;s<c;s++)n[s]=e(s+1,s,void 0,r&&r[s])}else if(_1(c))if(c[Symbol.iterator])n=Array.from(c,(s,i)=>e(s,i,void 0,r&&r[i]));else{const s=Object.keys(c);n=new Array(s.length);for(let i=0,o=s.length;i<o;i++){const l=s[i];n[i]=e(c[l],l,i,r&&r[i])}}else n=[];return t&&(t[a]=n),n}function NH1(c,e){for(let t=0;t<e.length;t++){const a=e[t];if(Q(a))for(let n=0;n<a.length;n++)c[a[n].name]=a[n].fn;else a&&(c[a.name]=a.key?(...n)=>{const r=a.fn(...n);return r&&(r.key=a.key),r}:a.fn)}return c}function SH1(c,e,t={},a,n){if(J1.isCE||J1.parent&&W4(J1.parent)&&J1.parent.isCE)return e!=="default"&&(t.name=e),N1("slot",t,a&&a());let r=c[e];r&&r._c&&(r._d=!1),l3();const s=r&&Wf(r(t)),i=t4(p2,{key:t.key||s&&s.key||`_${e}`},s||(a?a():[]),s&&c._===1?64:-2);return!n&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Wf(c){return c.some(e=>G6(e)?!(e.type===g2||e.type===p2&&!Wf(e.children)):!0)?c:null}const Ac=c=>c?fh(c)?_e(c)||c.proxy:Ac(c.parent):null,$0=q1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>Ac(c.parent),$root:c=>Ac(c.root),$emit:c=>c.emit,$options:c=>La(c),$forceUpdate:c=>c.f||(c.f=()=>He(c.update)),$nextTick:c=>c.n||(c.n=L4.bind(c.proxy)),$watch:c=>fx.bind(c)}),B9=(c,e)=>c!==b1&&!c.__isScriptSetup&&d1(c,e),Lx={get({_:c},e){const{ctx:t,setupState:a,data:n,props:r,accessCache:s,type:i,appContext:o}=c;let l;if(e[0]!=="$"){const d=s[e];if(d!==void 0)switch(d){case 1:return a[e];case 2:return n[e];case 4:return t[e];case 3:return r[e]}else{if(B9(a,e))return s[e]=1,a[e];if(n!==b1&&d1(n,e))return s[e]=2,n[e];if((l=c.propsOptions[0])&&d1(l,e))return s[e]=3,r[e];if(t!==b1&&d1(t,e))return s[e]=4,t[e];Tc&&(s[e]=0)}}const f=$0[e];let h,u;if(f)return e==="$attrs"&&x2(c,"get",e),f(c);if((h=i.__cssModules)&&(h=h[e]))return h;if(t!==b1&&d1(t,e))return s[e]=4,t[e];if(u=o.config.globalProperties,d1(u,e))return u[e]},set({_:c},e,t){const{data:a,setupState:n,ctx:r}=c;return B9(n,e)?(n[e]=t,!0):a!==b1&&d1(a,e)?(a[e]=t,!0):d1(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(r[e]=t,!0)},has({_:{data:c,setupState:e,accessCache:t,ctx:a,appContext:n,propsOptions:r}},s){let i;return!!t[s]||c!==b1&&d1(c,s)||B9(e,s)||(i=r[0])&&d1(i,s)||d1(a,s)||d1($0,s)||d1(n.config.globalProperties,s)},defineProperty(c,e,t){return t.get!=null?c._.accessCache[e]=0:d1(t,"value")&&this.set(c,e,t.value,null),Reflect.defineProperty(c,e,t)}};function kH1(){return jf().slots}function AH1(){return jf().attrs}function jf(){const c=h0();return c.setupContext||(c.setupContext=uh(c))}function Ds(c){return Q(c)?c.reduce((e,t)=>(e[t]=null,e),{}):c}let Tc=!0;function yx(c){const e=La(c),t=c.proxy,a=c.ctx;Tc=!1,e.beforeCreate&&Os(e.beforeCreate,c,"bc");const{data:n,computed:r,methods:s,watch:i,provide:o,inject:l,created:f,beforeMount:h,mounted:u,beforeUpdate:d,updated:v,activated:H,deactivated:y,beforeDestroy:M,beforeUnmount:C,destroyed:z,unmounted:m,render:L,renderTracked:N,renderTriggered:S,errorCaptured:_,serverPrefetch:w,expose:E,inheritAttrs:W,components:R,directives:J,filters:C1}=e;if(l&&_x(l,a,null),s)for(const r1 in s){const K=s[r1];t1(K)&&(a[r1]=K.bind(t))}if(n){const r1=n.call(t,t);_1(r1)&&(c.data=g3(r1))}if(Tc=!0,r)for(const r1 in r){const K=r[r1],W2=t1(K)?K.bind(t,t):t1(K.get)?K.get.bind(t,t):Q2,$3=!t1(K)&&t1(K.set)?K.set.bind(t):Q2,n3=W1({get:W2,set:$3});Object.defineProperty(a,r1,{enumerable:!0,configurable:!0,get:()=>n3.value,set:H2=>n3.value=H2})}if(i)for(const r1 in i)Gf(i[r1],a,t,r1);if(o){const r1=t1(o)?o.call(t):o;Reflect.ownKeys(r1).forEach(K=>{j4(K,r1[K])})}f&&Os(f,c,"c");function B(r1,K){Q(K)?K.forEach(W2=>r1(W2.bind(t))):K&&r1(K.bind(t))}if(B(gx,h),B(Ha,u),B(Cx,d),B(Ma,v),B(px,H),B(vx,y),B($f,_),B(Vx,N),B(Mx,S),B(Va,C),B(qf,m),B(Hx,w),Q(E))if(E.length){const r1=c.exposed||(c.exposed={});E.forEach(K=>{Object.defineProperty(r1,K,{get:()=>t[K],set:W2=>t[K]=W2})})}else c.exposed||(c.exposed={});L&&c.render===Q2&&(c.render=L),W!=null&&(c.inheritAttrs=W),R&&(c.components=R),J&&(c.directives=J)}function _x(c,e,t=Q2){Q(c)&&(c=Ec(c));for(const a in c){const n=c[a];let r;_1(n)?"default"in n?r=e2(n.from||a,n.default,!0):r=e2(n.from||a):r=e2(n),P1(r)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):e[a]=r}}function Os(c,e,t){U2(Q(c)?c.map(a=>a.bind(e.proxy)):c.bind(e.proxy),e,t)}function Gf(c,e,t,a){const n=a.includes(".")?Df(t,a):()=>t[a];if(A1(c)){const r=e[c];t1(r)&&$4(n,r)}else if(t1(c))$4(n,c.bind(t));else if(_1(c))if(Q(c))c.forEach(r=>Gf(r,e,t,a));else{const r=t1(c.handler)?c.handler.bind(t):e[c.handler];t1(r)&&$4(n,r,c)}}function La(c){const e=c.type,{mixins:t,extends:a}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:s}}=c.appContext,i=r.get(e);let o;return i?o=i:!n.length&&!t&&!a?o=e:(o={},n.length&&n.forEach(l=>V7(o,l,s,!0)),V7(o,e,s)),_1(e)&&r.set(e,o),o}function V7(c,e,t,a=!1){const{mixins:n,extends:r}=e;r&&V7(c,r,t,!0),n&&n.forEach(s=>V7(c,s,t,!0));for(const s in e)if(!(a&&s==="expose")){const i=bx[s]||t&&t[s];c[s]=i?i(c[s],e[s]):e[s]}return c}const bx={data:Fs,props:Bs,emits:Bs,methods:R0,computed:R0,beforeCreate:m2,created:m2,beforeMount:m2,mounted:m2,beforeUpdate:m2,updated:m2,beforeDestroy:m2,beforeUnmount:m2,destroyed:m2,unmounted:m2,activated:m2,deactivated:m2,errorCaptured:m2,serverPrefetch:m2,components:R0,directives:R0,watch:wx,provide:Fs,inject:xx};function Fs(c,e){return e?c?function(){return q1(t1(c)?c.call(this,this):c,t1(e)?e.call(this,this):e)}:e:c}function xx(c,e){return R0(Ec(c),Ec(e))}function Ec(c){if(Q(c)){const e={};for(let t=0;t<c.length;t++)e[c[t]]=c[t];return e}return c}function m2(c,e){return c?[...new Set([].concat(c,e))]:e}function R0(c,e){return c?q1(Object.create(null),c,e):e}function Bs(c,e){return c?Q(c)&&Q(e)?[...new Set([...c,...e])]:q1(Object.create(null),Ds(c),Ds(e??{})):e}function wx(c,e){if(!c)return e;if(!e)return c;const t=q1(Object.create(null),c);for(const a in e)t[a]=m2(c[a],e[a]);return t}function Kf(){return{app:null,config:{isNativeTag:nb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nx=0;function Sx(c,e){return function(a,n=null){t1(a)||(a=q1({},a)),n!=null&&!_1(n)&&(n=null);const r=Kf(),s=new WeakSet;let i=!1;const o=r.app={_uid:Nx++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:dh,get config(){return r.config},set config(l){},use(l,...f){return s.has(l)||(l&&t1(l.install)?(s.add(l),l.install(o,...f)):t1(l)&&(s.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,h){if(!i){const u=N1(a,n);return u.appContext=r,f&&e?e(u,l):c(u,l,h),i=!0,o._container=l,l.__vue_app__=o,_e(u.component)||u.component.proxy}},unmount(){i&&(c(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o},runWithContext(l){p8=o;try{return l()}finally{p8=null}}};return o}}let p8=null;function j4(c,e){if(U1){let t=U1.provides;const a=U1.parent&&U1.parent.provides;a===t&&(t=U1.provides=Object.create(a)),t[c]=e}}function e2(c,e,t=!1){const a=U1||J1;if(a||p8){const n=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:p8._context.provides;if(n&&c in n)return n[c];if(arguments.length>1)return t&&t1(e)?e.call(a&&a.proxy):e}}function ya(){return!!(U1||J1||p8)}function kx(c,e,t,a=!1){const n={},r={};z7(r,ye,1),c.propsDefaults=Object.create(null),Yf(c,e,n,r);for(const s in c.propsOptions[0])s in n||(n[s]=void 0);t?c.props=a?n:j8(n):c.type.props?c.props=n:c.props=r,c.attrs=r}function Ax(c,e,t,a){const{props:n,attrs:r,vnode:{patchFlag:s}}=c,i=f1(n),[o]=c.propsOptions;let l=!1;if((a||s>0)&&!(s&16)){if(s&8){const f=c.vnode.dynamicProps;for(let h=0;h<f.length;h++){let u=f[h];if(Me(c.emitsOptions,u))continue;const d=e[u];if(o)if(d1(r,u))d!==r[u]&&(r[u]=d,l=!0);else{const v=z3(u);n[v]=Pc(o,i,v,d,c,!1)}else d!==r[u]&&(r[u]=d,l=!0)}}}else{Yf(c,e,n,r)&&(l=!0);let f;for(const h in i)(!e||!d1(e,h)&&((f=f6(h))===h||!d1(e,f)))&&(o?t&&(t[h]!==void 0||t[f]!==void 0)&&(n[h]=Pc(o,i,h,void 0,c,!0)):delete n[h]);if(r!==i)for(const h in r)(!e||!d1(e,h))&&(delete r[h],l=!0)}l&&A3(c,"set","$attrs")}function Yf(c,e,t,a){const[n,r]=c.propsOptions;let s=!1,i;if(e)for(let o in e){if(q0(o))continue;const l=e[o];let f;n&&d1(n,f=z3(o))?!r||!r.includes(f)?t[f]=l:(i||(i={}))[f]=l:Me(c.emitsOptions,o)||(!(o in a)||l!==a[o])&&(a[o]=l,s=!0)}if(r){const o=f1(t),l=i||b1;for(let f=0;f<r.length;f++){const h=r[f];t[h]=Pc(n,o,h,l[h],c,!d1(l,h))}}return s}function Pc(c,e,t,a,n,r){const s=c[t];if(s!=null){const i=d1(s,"default");if(i&&a===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&t1(o)){const{propsDefaults:l}=n;t in l?a=l[t]:(K6(n),a=l[t]=o.call(null,e),G4())}else a=o}s[0]&&(r&&!i?a=!1:s[1]&&(a===""||a===f6(t))&&(a=!0))}return a}function Zf(c,e,t=!1){const a=e.propsCache,n=a.get(c);if(n)return n;const r=c.props,s={},i=[];let o=!1;if(!t1(c)){const f=h=>{o=!0;const[u,d]=Zf(h,e,!0);q1(s,u),d&&i.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!r&&!o)return _1(c)&&a.set(c,S6),S6;if(Q(r))for(let f=0;f<r.length;f++){const h=z3(r[f]);Us(h)&&(s[h]=b1)}else if(r)for(const f in r){const h=z3(f);if(Us(h)){const u=r[f],d=s[h]=Q(u)||t1(u)?{type:u}:q1({},u);if(d){const v=Ws(Boolean,d.type),H=Ws(String,d.type);d[0]=v>-1,d[1]=H<0||v<H,(v>-1||d1(d,"default"))&&i.push(h)}}}const l=[s,i];return _1(c)&&a.set(c,l),l}function Us(c){return c[0]!=="$"}function qs(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function $s(c,e){return qs(c)===qs(e)}function Ws(c,e){return Q(e)?e.findIndex(t=>$s(t,c)):t1(e)&&$s(e,c)?0:-1}const Xf=c=>c[0]==="_"||c==="$stable",_a=c=>Q(c)?c.map(I2):[I2(c)],Tx=(c,e,t)=>{if(e._n)return e;const a=da((...n)=>_a(e(...n)),t);return a._c=!1,a},Qf=(c,e,t)=>{const a=c._ctx;for(const n in c){if(Xf(n))continue;const r=c[n];if(t1(r))e[n]=Tx(n,r,a);else if(r!=null){const s=_a(r);e[n]=()=>s}}},Jf=(c,e)=>{const t=_a(e);c.slots.default=()=>t},Ex=(c,e)=>{if(c.vnode.shapeFlag&32){const t=e._;t?(c.slots=f1(e),z7(e,"_",t)):Qf(e,c.slots={})}else c.slots={},e&&Jf(c,e);z7(c.slots,ye,1)},Px=(c,e,t)=>{const{vnode:a,slots:n}=c;let r=!0,s=b1;if(a.shapeFlag&32){const i=e._;i?t&&i===1?r=!1:(q1(n,e),!t&&i===1&&delete n._):(r=!e.$stable,Qf(e,n)),s=e}else e&&(Jf(c,e),s={default:1});if(r)for(const i in n)!Xf(i)&&s[i]==null&&delete n[i]};function L7(c,e,t,a,n=!1){if(Q(c)){c.forEach((u,d)=>L7(u,e&&(Q(e)?e[d]:e),t,a,n));return}if(W4(a)&&!n)return;const r=a.shapeFlag&4?_e(a.component)||a.component.proxy:a.el,s=n?null:r,{i,r:o}=c,l=e&&e.r,f=i.refs===b1?i.refs={}:i.refs,h=i.setupState;if(l!=null&&l!==o&&(A1(l)?(f[l]=null,d1(h,l)&&(h[l]=null)):P1(l)&&(l.value=null)),t1(o))h4(o,i,12,[s,f]);else{const u=A1(o),d=P1(o);if(u||d){const v=()=>{if(c.f){const H=u?d1(h,o)?h[o]:f[o]:o.value;n?Q(H)&&na(H,r):Q(H)?H.includes(r)||H.push(r):u?(f[o]=[r],d1(h,o)&&(h[o]=f[o])):(o.value=[r],c.k&&(f[c.k]=o.value))}else u?(f[o]=s,d1(h,o)&&(h[o]=s)):d&&(o.value=s,c.k&&(f[c.k]=s))};s?(v.id=-1,a2(v,t)):v()}}}let j3=!1;const E5=c=>/svg/.test(c.namespaceURI)&&c.tagName!=="foreignObject",P5=c=>c.nodeType===8;function Rx(c){const{mt:e,p:t,o:{patchProp:a,createText:n,nextSibling:r,parentNode:s,remove:i,insert:o,createComment:l}}=c,f=(z,m)=>{if(!m.hasChildNodes()){t(null,z,m),H7(),m._vnode=z;return}j3=!1,h(m.firstChild,z,null,null,null),H7(),m._vnode=z,j3&&console.error("Hydration completed but contains mismatches.")},h=(z,m,L,N,S,_=!1)=>{const w=P5(z)&&z.data==="[",E=()=>H(z,m,L,N,S,w),{type:W,ref:R,shapeFlag:J,patchFlag:C1}=m;let u1=z.nodeType;m.el=z,C1===-2&&(_=!1,m.dynamicChildren=null);let B=null;switch(W){case W6:u1!==3?m.children===""?(o(m.el=n(""),s(z),z),B=z):B=E():(z.data!==m.children&&(j3=!0,z.data=m.children),B=r(z));break;case g2:C(z)?(B=r(z),M(m.el=z.content.firstChild,z,L)):u1!==8||w?B=E():B=r(z);break;case j0:if(w&&(z=r(z),u1=z.nodeType),u1===1||u1===3){B=z;const r1=!m.children.length;for(let K=0;K<m.staticCount;K++)r1&&(m.children+=B.nodeType===1?B.outerHTML:B.data),K===m.staticCount-1&&(m.anchor=B),B=r(B);return w?r(B):B}else E();break;case p2:w?B=v(z,m,L,N,S,_):B=E();break;default:if(J&1)(u1!==1||m.type.toLowerCase()!==z.tagName.toLowerCase())&&!C(z)?B=E():B=u(z,m,L,N,S,_);else if(J&6){m.slotScopeIds=S;const r1=s(z);if(w?B=y(z):P5(z)&&z.data==="teleport start"?B=y(z,z.data,"teleport end"):B=r(z),e(m,r1,null,L,N,E5(r1),_),W4(m)){let K;w?(K=N1(p2),K.anchor=B?B.previousSibling:r1.lastChild):K=z.nodeType===3?oh(""):N1("div"),K.el=z,m.component.subTree=K}}else J&64?u1!==8?B=E():B=m.type.hydrate(z,m,L,N,S,_,c,d):J&128&&(B=m.type.hydrate(z,m,L,N,E5(s(z)),S,_,c,h))}return R!=null&&L7(R,null,N,m),B},u=(z,m,L,N,S,_)=>{_=_||!!m.dynamicChildren;const{type:w,props:E,patchFlag:W,shapeFlag:R,dirs:J,transition:C1}=m,u1=w==="input"||w==="option";if(u1||W!==-1){if(J&&i3(m,null,L,"created"),E)if(u1||!_||W&48)for(const K in E)(u1&&(K.endsWith("value")||K==="indeterminate")||$8(K)&&!q0(K)||K[0]===".")&&a(z,K,null,E[K],!1,void 0,L);else E.onClick&&a(z,"onClick",null,E.onClick,!1,void 0,L);let B;(B=E&&E.onVnodeBeforeMount)&&L2(B,L,m);let r1=!1;if(C(z)){r1=ch(N,C1)&&L&&L.vnode.props&&L.vnode.props.appear;const K=z.content.firstChild;r1&&C1.beforeEnter(K),M(K,z,L),m.el=z=K}if(J&&i3(m,null,L,"beforeMount"),((B=E&&E.onVnodeMounted)||J||r1)&&If(()=>{B&&L2(B,L,m),r1&&C1.enter(z),J&&i3(m,null,L,"mounted")},N),R&16&&!(E&&(E.innerHTML||E.textContent))){let K=d(z.firstChild,m,z,L,N,S,_);for(;K;){j3=!0;const W2=K;K=K.nextSibling,i(W2)}}else R&8&&z.textContent!==m.children&&(j3=!0,z.textContent=m.children)}return z.nextSibling},d=(z,m,L,N,S,_,w)=>{w=w||!!m.dynamicChildren;const E=m.children,W=E.length;for(let R=0;R<W;R++){const J=w?E[R]:E[R]=I2(E[R]);if(z)z=h(z,J,N,S,_,w);else{if(J.type===W6&&!J.children)continue;j3=!0,t(null,J,L,null,N,S,E5(L),_)}}return z},v=(z,m,L,N,S,_)=>{const{slotScopeIds:w}=m;w&&(S=S?S.concat(w):w);const E=s(z),W=d(r(z),m,E,L,N,S,_);return W&&P5(W)&&W.data==="]"?r(m.anchor=W):(j3=!0,o(m.anchor=l("]"),E,W),W)},H=(z,m,L,N,S,_)=>{if(j3=!0,m.el=null,_){const W=y(z);for(;;){const R=r(z);if(R&&R!==W)i(R);else break}}const w=r(z),E=s(z);return i(z),t(null,m,E,w,L,N,E5(E),S),w},y=(z,m="[",L="]")=>{let N=0;for(;z;)if(z=r(z),z&&P5(z)&&(z.data===m&&N++,z.data===L)){if(N===0)return r(z);N--}return z},M=(z,m,L)=>{const N=m.parentNode;N&&N.replaceChild(z,m);let S=L;for(;S;)S.vnode.el===m&&(S.vnode.el=S.subTree.el=z),S=S.parent},C=z=>z.nodeType===1&&z.tagName.toLowerCase()==="template";return[f,h]}const a2=If;function Ix(c){return eh(c)}function Dx(c){return eh(c,Rx)}function eh(c,e){const t=bc();t.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:s,createText:i,createComment:o,setText:l,setElementText:f,parentNode:h,nextSibling:u,setScopeId:d=Q2,insertStaticContent:v}=c,H=(p,g,V,b=null,k=null,A=null,U=!1,I=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!K2(p,g)&&(b=x(p),H2(p,k,A,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:T,ref:Z,shapeFlag:j}=g;switch(T){case W6:y(p,g,V,b);break;case g2:M(p,g,V,b);break;case j0:p==null&&C(g,V,b,U);break;case p2:R(p,g,V,b,k,A,U,I,D);break;default:j&1?L(p,g,V,b,k,A,U,I,D):j&6?J(p,g,V,b,k,A,U,I,D):(j&64||j&128)&&T.process(p,g,V,b,k,A,U,I,D,O)}Z!=null&&k&&L7(Z,p&&p.ref,A,g||p,!g)},y=(p,g,V,b)=>{if(p==null)a(g.el=i(g.children),V,b);else{const k=g.el=p.el;g.children!==p.children&&l(k,g.children)}},M=(p,g,V,b)=>{p==null?a(g.el=o(g.children||""),V,b):g.el=p.el},C=(p,g,V,b)=>{[p.el,p.anchor]=v(p.children,g,V,b,p.el,p.anchor)},z=({el:p,anchor:g},V,b)=>{let k;for(;p&&p!==g;)k=u(p),a(p,V,b),p=k;a(g,V,b)},m=({el:p,anchor:g})=>{let V;for(;p&&p!==g;)V=u(p),n(p),p=V;n(g)},L=(p,g,V,b,k,A,U,I,D)=>{U=U||g.type==="svg",p==null?N(g,V,b,k,A,U,I,D):w(p,g,k,A,U,I,D)},N=(p,g,V,b,k,A,U,I)=>{let D,T;const{type:Z,props:j,shapeFlag:X,transition:n1,dirs:l1}=p;if(D=p.el=s(p.type,A,j&&j.is,j),X&8?f(D,p.children):X&16&&_(p.children,D,null,b,k,A&&Z!=="foreignObject",U,I),l1&&i3(p,null,b,"created"),S(D,p,p.scopeId,U,b),j){for(const H1 in j)H1!=="value"&&!q0(H1)&&r(D,H1,null,j[H1],A,p.children,b,k,o2);"value"in j&&r(D,"value",null,j.value),(T=j.onVnodeBeforeMount)&&L2(T,b,p)}l1&&i3(p,null,b,"beforeMount");const V1=ch(k,n1);V1&&n1.beforeEnter(D),a(D,g,V),((T=j&&j.onVnodeMounted)||V1||l1)&&a2(()=>{T&&L2(T,b,p),V1&&n1.enter(D),l1&&i3(p,null,b,"mounted")},k)},S=(p,g,V,b,k)=>{if(V&&d(p,V),b)for(let A=0;A<b.length;A++)d(p,b[A]);if(k){let A=k.subTree;if(g===A){const U=k.vnode;S(p,U,U.scopeId,U.slotScopeIds,k.parent)}}},_=(p,g,V,b,k,A,U,I,D=0)=>{for(let T=D;T<p.length;T++){const Z=p[T]=I?e4(p[T]):I2(p[T]);H(null,Z,g,V,b,k,A,U,I)}},w=(p,g,V,b,k,A,U)=>{const I=g.el=p.el;let{patchFlag:D,dynamicChildren:T,dirs:Z}=g;D|=p.patchFlag&16;const j=p.props||b1,X=g.props||b1;let n1;V&&N4(V,!1),(n1=X.onVnodeBeforeUpdate)&&L2(n1,V,g,p),Z&&i3(g,p,V,"beforeUpdate"),V&&N4(V,!0);const l1=k&&g.type!=="foreignObject";if(T?E(p.dynamicChildren,T,I,V,b,l1,A):U||K(p,g,I,null,V,b,l1,A,!1),D>0){if(D&16)W(I,g,j,X,V,b,k);else if(D&2&&j.class!==X.class&&r(I,"class",null,X.class,k),D&4&&r(I,"style",j.style,X.style,k),D&8){const V1=g.dynamicProps;for(let H1=0;H1<V1.length;H1++){const B1=V1[H1],j2=j[B1],z6=X[B1];(z6!==j2||B1==="value")&&r(I,B1,j2,z6,k,p.children,V,b,o2)}}D&1&&p.children!==g.children&&f(I,g.children)}else!U&&T==null&&W(I,g,j,X,V,b,k);((n1=X.onVnodeUpdated)||Z)&&a2(()=>{n1&&L2(n1,V,g,p),Z&&i3(g,p,V,"updated")},b)},E=(p,g,V,b,k,A,U)=>{for(let I=0;I<g.length;I++){const D=p[I],T=g[I],Z=D.el&&(D.type===p2||!K2(D,T)||D.shapeFlag&70)?h(D.el):V;H(D,T,Z,null,b,k,A,U,!0)}},W=(p,g,V,b,k,A,U)=>{if(V!==b){if(V!==b1)for(const I in V)!q0(I)&&!(I in b)&&r(p,I,V[I],null,U,g.children,k,A,o2);for(const I in b){if(q0(I))continue;const D=b[I],T=V[I];D!==T&&I!=="value"&&r(p,I,T,D,U,g.children,k,A,o2)}"value"in b&&r(p,"value",V.value,b.value)}},R=(p,g,V,b,k,A,U,I,D)=>{const T=g.el=p?p.el:i(""),Z=g.anchor=p?p.anchor:i("");let{patchFlag:j,dynamicChildren:X,slotScopeIds:n1}=g;n1&&(I=I?I.concat(n1):n1),p==null?(a(T,V,b),a(Z,V,b),_(g.children,V,Z,k,A,U,I,D)):j>0&&j&64&&X&&p.dynamicChildren?(E(p.dynamicChildren,X,V,k,A,U,I),(g.key!=null||k&&g===k.subTree)&&ba(p,g,!0)):K(p,g,V,Z,k,A,U,I,D)},J=(p,g,V,b,k,A,U,I,D)=>{g.slotScopeIds=I,p==null?g.shapeFlag&512?k.ctx.activate(g,V,b,U,D):C1(g,V,b,k,A,U,D):u1(p,g,D)},C1=(p,g,V,b,k,A,U)=>{const I=p.component=Gx(p,b,k);if(G8(p)&&(I.ctx.renderer=O),Kx(I),I.asyncDep){if(k&&k.registerDep(I,B),!p.el){const D=I.subTree=N1(g2);M(null,D,g,V)}return}B(I,p,g,V,k,A,U)},u1=(p,g,V)=>{const b=g.component=p.component;if(tx(p,g,V))if(b.asyncDep&&!b.asyncResolved){r1(b,g,V);return}else b.next=g,Zb(b.update),b.update();else g.el=p.el,b.vnode=g},B=(p,g,V,b,k,A,U)=>{const I=()=>{if(p.isMounted){let{next:Z,bu:j,u:X,parent:n1,vnode:l1}=p,V1=Z,H1;N4(p,!1),Z?(Z.el=l1.el,r1(p,Z,U)):Z=l1,j&&A6(j),(H1=Z.props&&Z.props.onVnodeBeforeUpdate)&&L2(H1,n1,Z,l1),N4(p,!0);const B1=R9(p),j2=p.subTree;p.subTree=B1,H(j2,B1,h(j2.el),x(j2),p,k,A),Z.el=B1.el,V1===null&&ma(p,B1.el),X&&a2(X,k),(H1=Z.props&&Z.props.onVnodeUpdated)&&a2(()=>L2(H1,n1,Z,l1),k)}else{let Z;const{el:j,props:X}=g,{bm:n1,m:l1,parent:V1}=p,H1=W4(g);if(N4(p,!1),n1&&A6(n1),!H1&&(Z=X&&X.onVnodeBeforeMount)&&L2(Z,V1,g),N4(p,!0),j&&p1){const B1=()=>{p.subTree=R9(p),p1(j,p.subTree,p,k,null)};H1?g.type.__asyncLoader().then(()=>!p.isUnmounted&&B1()):B1()}else{const B1=p.subTree=R9(p);H(null,B1,V,b,p,k,A),g.el=B1.el}if(l1&&a2(l1,k),!H1&&(Z=X&&X.onVnodeMounted)){const B1=g;a2(()=>L2(Z,V1,B1),k)}(g.shapeFlag&256||V1&&W4(V1.vnode)&&V1.vnode.shapeFlag&256)&&p.a&&a2(p.a,k),p.isMounted=!0,g=V=b=null}},D=p.effect=new ia(I,()=>He(T),p.scope),T=p.update=()=>D.run();T.id=p.uid,N4(p,!0),T()},r1=(p,g,V)=>{g.component=p;const b=p.vnode.props;p.vnode=g,p.next=null,Ax(p,g.props,b,V),Px(p,g.children,V),o0(),As(p),l0()},K=(p,g,V,b,k,A,U,I,D=!1)=>{const T=p&&p.children,Z=p?p.shapeFlag:0,j=g.children,{patchFlag:X,shapeFlag:n1}=g;if(X>0){if(X&128){$3(T,j,V,b,k,A,U,I,D);return}else if(X&256){W2(T,j,V,b,k,A,U,I,D);return}}n1&8?(Z&16&&o2(T,k,A),j!==T&&f(V,j)):Z&16?n1&16?$3(T,j,V,b,k,A,U,I,D):o2(T,k,A,!0):(Z&8&&f(V,""),n1&16&&_(j,V,b,k,A,U,I,D))},W2=(p,g,V,b,k,A,U,I,D)=>{p=p||S6,g=g||S6;const T=p.length,Z=g.length,j=Math.min(T,Z);let X;for(X=0;X<j;X++){const n1=g[X]=D?e4(g[X]):I2(g[X]);H(p[X],n1,V,null,k,A,U,I,D)}T>Z?o2(p,k,A,!0,!1,j):_(g,V,b,k,A,U,I,D,j)},$3=(p,g,V,b,k,A,U,I,D)=>{let T=0;const Z=g.length;let j=p.length-1,X=Z-1;for(;T<=j&&T<=X;){const n1=p[T],l1=g[T]=D?e4(g[T]):I2(g[T]);if(K2(n1,l1))H(n1,l1,V,null,k,A,U,I,D);else break;T++}for(;T<=j&&T<=X;){const n1=p[j],l1=g[X]=D?e4(g[X]):I2(g[X]);if(K2(n1,l1))H(n1,l1,V,null,k,A,U,I,D);else break;j--,X--}if(T>j){if(T<=X){const n1=X+1,l1=n1<Z?g[n1].el:b;for(;T<=X;)H(null,g[T]=D?e4(g[T]):I2(g[T]),V,l1,k,A,U,I,D),T++}}else if(T>X)for(;T<=j;)H2(p[T],k,A,!0),T++;else{const n1=T,l1=T,V1=new Map;for(T=l1;T<=X;T++){const N2=g[T]=D?e4(g[T]):I2(g[T]);N2.key!=null&&V1.set(N2.key,T)}let H1,B1=0;const j2=X-l1+1;let z6=!1,Ms=0;const L0=new Array(j2);for(T=0;T<j2;T++)L0[T]=0;for(T=n1;T<=j;T++){const N2=p[T];if(B1>=j2){H2(N2,k,A,!0);continue}let r3;if(N2.key!=null)r3=V1.get(N2.key);else for(H1=l1;H1<=X;H1++)if(L0[H1-l1]===0&&K2(N2,g[H1])){r3=H1;break}r3===void 0?H2(N2,k,A,!0):(L0[r3-l1]=T+1,r3>=Ms?Ms=r3:z6=!0,H(N2,g[r3],V,null,k,A,U,I,D),B1++)}const Vs=z6?Ox(L0):S6;for(H1=Vs.length-1,T=j2-1;T>=0;T--){const N2=l1+T,r3=g[N2],Ls=N2+1<Z?g[N2+1].el:b;L0[T]===0?H(null,r3,V,Ls,k,A,U,I,D):z6&&(H1<0||T!==Vs[H1]?n3(r3,V,Ls,2):H1--)}}},n3=(p,g,V,b,k=null)=>{const{el:A,type:U,transition:I,children:D,shapeFlag:T}=p;if(T&6){n3(p.component.subTree,g,V,b);return}if(T&128){p.suspense.move(g,V,b);return}if(T&64){U.move(p,g,V,O);return}if(U===p2){a(A,g,V);for(let j=0;j<D.length;j++)n3(D[j],g,V,b);a(p.anchor,g,V);return}if(U===j0){z(p,g,V);return}if(b!==2&&T&1&&I)if(b===0)I.beforeEnter(A),a(A,g,V),a2(()=>I.enter(A),k);else{const{leave:j,delayLeave:X,afterLeave:n1}=I,l1=()=>a(A,g,V),V1=()=>{j(A,()=>{l1(),n1&&n1()})};X?X(A,l1,V1):V1()}else a(A,g,V)},H2=(p,g,V,b=!1,k=!1)=>{const{type:A,props:U,ref:I,children:D,dynamicChildren:T,shapeFlag:Z,patchFlag:j,dirs:X}=p;if(I!=null&&L7(I,null,V,p,!0),Z&256){g.ctx.deactivate(p);return}const n1=Z&1&&X,l1=!W4(p);let V1;if(l1&&(V1=U&&U.onVnodeBeforeUnmount)&&L2(V1,g,p),Z&6)b5(p.component,V,b);else{if(Z&128){p.suspense.unmount(V,b);return}n1&&i3(p,null,g,"beforeUnmount"),Z&64?p.type.remove(p,g,V,k,O,b):T&&(A!==p2||j>0&&j&64)?o2(T,g,V,!1,!0):(A===p2&&j&384||!k&&Z&16)&&o2(D,g,V),b&&p6(p)}(l1&&(V1=U&&U.onVnodeUnmounted)||n1)&&a2(()=>{V1&&L2(V1,g,p),n1&&i3(p,null,g,"unmounted")},V)},p6=p=>{const{type:g,el:V,anchor:b,transition:k}=p;if(g===p2){v6(V,b);return}if(g===j0){m(p);return}const A=()=>{n(V),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:U,delayLeave:I}=k,D=()=>U(V,A);I?I(p.el,A,D):D()}else A()},v6=(p,g)=>{let V;for(;p!==g;)V=u(p),n(p),p=V;n(g)},b5=(p,g,V)=>{const{bum:b,scope:k,update:A,subTree:U,um:I}=p;b&&A6(b),k.stop(),A&&(A.active=!1,H2(U,p,g,V)),I&&a2(I,g),a2(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},o2=(p,g,V,b=!1,k=!1,A=0)=>{for(let U=A;U<p.length;U++)H2(p[U],g,V,b,k)},x=p=>p.shapeFlag&6?x(p.component.subTree):p.shapeFlag&128?p.suspense.next():u(p.anchor||p.el),$=(p,g,V)=>{p==null?g._vnode&&H2(g._vnode,null,null,!0):H(g._vnode||null,p,g,null,null,null,V),As(),H7(),g._vnode=p},O={p:H,um:H2,m:n3,r:p6,mt:C1,mc:_,pc:K,pbc:E,n:x,o:c};let Y,p1;return e&&([Y,p1]=e(O)),{render:$,hydrate:Y,createApp:Sx($,Y)}}function N4({effect:c,update:e},t){c.allowRecurse=e.allowRecurse=t}function ch(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function ba(c,e,t=!1){const a=c.children,n=e.children;if(Q(a)&&Q(n))for(let r=0;r<a.length;r++){const s=a[r];let i=n[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=n[r]=e4(n[r]),i.el=s.el),t||ba(s,i)),i.type===W6&&(i.el=s.el)}}function Ox(c){const e=c.slice(),t=[0];let a,n,r,s,i;const o=c.length;for(a=0;a<o;a++){const l=c[a];if(l!==0){if(n=t[t.length-1],c[n]<l){e[a]=n,t.push(a);continue}for(r=0,s=t.length-1;r<s;)i=r+s>>1,c[t[i]]<l?r=i+1:s=i;l<c[t[r]]&&(r>0&&(e[a]=t[r-1]),t[r]=a)}}for(r=t.length,s=t[r-1];r-- >0;)t[r]=s,s=e[s];return t}const Fx=c=>c.__isTeleport,W0=c=>c&&(c.disabled||c.disabled===""),js=c=>typeof SVGElement<"u"&&c instanceof SVGElement,Rc=(c,e)=>{const t=c&&c.to;return A1(t)?e?e(t):null:t},Bx={name:"Teleport",__isTeleport:!0,process(c,e,t,a,n,r,s,i,o,l){const{mc:f,pc:h,pbc:u,o:{insert:d,querySelector:v,createText:H,createComment:y}}=l,M=W0(e.props);let{shapeFlag:C,children:z,dynamicChildren:m}=e;if(c==null){const L=e.el=H(""),N=e.anchor=H("");d(L,t,a),d(N,t,a);const S=e.target=Rc(e.props,v),_=e.targetAnchor=H("");S&&(d(_,S),s=s||js(S));const w=(E,W)=>{C&16&&f(z,E,W,n,r,s,i,o)};M?w(t,N):S&&w(S,_)}else{e.el=c.el;const L=e.anchor=c.anchor,N=e.target=c.target,S=e.targetAnchor=c.targetAnchor,_=W0(c.props),w=_?t:N,E=_?L:S;if(s=s||js(N),m?(u(c.dynamicChildren,m,w,n,r,s,i),ba(c,e,!0)):o||h(c,e,w,E,n,r,s,i,!1),M)_?e.props&&c.props&&e.props.to!==c.props.to&&(e.props.to=c.props.to):R5(e,t,L,l,1);else if((e.props&&e.props.to)!==(c.props&&c.props.to)){const W=e.target=Rc(e.props,v);W&&R5(e,W,null,l,0)}else _&&R5(e,N,S,l,1)}th(e)},remove(c,e,t,a,{um:n,o:{remove:r}},s){const{shapeFlag:i,children:o,anchor:l,targetAnchor:f,target:h,props:u}=c;if(h&&r(f),s&&r(l),i&16){const d=s||!W0(u);for(let v=0;v<o.length;v++){const H=o[v];n(H,e,t,d,!!H.dynamicChildren)}}},move:R5,hydrate:Ux};function R5(c,e,t,{o:{insert:a},m:n},r=2){r===0&&a(c.targetAnchor,e,t);const{el:s,anchor:i,shapeFlag:o,children:l,props:f}=c,h=r===2;if(h&&a(s,e,t),(!h||W0(f))&&o&16)for(let u=0;u<l.length;u++)n(l[u],e,t,2);h&&a(i,e,t)}function Ux(c,e,t,a,n,r,{o:{nextSibling:s,parentNode:i,querySelector:o}},l){const f=e.target=Rc(e.props,o);if(f){const h=f._lpa||f.firstChild;if(e.shapeFlag&16)if(W0(e.props))e.anchor=l(s(c),e,i(c),t,a,n,r),e.targetAnchor=h;else{e.anchor=s(c);let u=h;for(;u;)if(u=s(u),u&&u.nodeType===8&&u.data==="teleport anchor"){e.targetAnchor=u,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}l(h,e,f,t,a,n,r)}th(e)}return e.anchor&&s(e.anchor)}const TH1=Bx;function th(c){const e=c.ctx;if(e&&e.ut){let t=c.children[0].el;for(;t&&t!==c.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const p2=Symbol.for("v-fgt"),W6=Symbol.for("v-txt"),g2=Symbol.for("v-cmt"),j0=Symbol.for("v-stc"),G0=[];let O2=null;function l3(c=!1){G0.push(O2=c?null:[])}function ah(){G0.pop(),O2=G0[G0.length-1]||null}let j6=1;function Gs(c){j6+=c}function nh(c){return c.dynamicChildren=j6>0?O2||S6:null,ah(),j6>0&&O2&&O2.push(c),c}function qx(c,e,t,a,n,r){return nh(sh(c,e,t,a,n,r,!0))}function t4(c,e,t,a,n){return nh(N1(c,e,t,a,n,!0))}function G6(c){return c?c.__v_isVNode===!0:!1}function K2(c,e){return c.type===e.type&&c.key===e.key}const ye="__vInternal",rh=({key:c})=>c??null,s7=({ref:c,ref_key:e,ref_for:t})=>(typeof c=="number"&&(c=""+c),c!=null?A1(c)||P1(c)||t1(c)?{i:J1,r:c,k:e,f:!!t}:c:null);function sh(c,e=null,t=null,a=0,n=null,r=c===p2?0:1,s=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&rh(e),ref:e&&s7(e),scopeId:Ve,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:J1};return i?(xa(o,t),r&128&&c.normalize(o)):t&&(o.shapeFlag|=A1(t)?8:16),j6>0&&!s&&O2&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&O2.push(o),o}const N1=$x;function $x(c,e=null,t=null,a=0,n=null,r=!1){if((!c||c===Ef)&&(c=g2),G6(c)){const i=E3(c,e,!0);return t&&xa(i,t),j6>0&&!r&&O2&&(i.shapeFlag&6?O2[O2.indexOf(c)]=i:O2.push(i)),i.patchFlag|=-2,i}if(Xx(c)&&(c=c.__vccOpts),e){e=ih(e);let{class:i,style:o}=e;i&&!A1(i)&&(e.class=ze(i)),_1(o)&&(yf(o)&&!Q(o)&&(o=q1({},o)),e.style=ve(o))}const s=A1(c)?1:Rf(c)?128:Fx(c)?64:_1(c)?4:t1(c)?2:0;return sh(c,e,t,a,n,s,r,!0)}function ih(c){return c?yf(c)||ye in c?q1({},c):c:null}function E3(c,e,t=!1){const{props:a,ref:n,patchFlag:r,children:s}=c,i=e?lh(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:i,key:i&&rh(i),ref:e&&e.ref?t&&n?Q(n)?n.concat(s7(e)):[n,s7(e)]:s7(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:s,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==p2?r===-1?16:r|16:r,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&E3(c.ssContent),ssFallback:c.ssFallback&&E3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function oh(c=" ",e=0){return N1(W6,null,c,e)}function EH1(c,e){const t=N1(j0,null,c);return t.staticCount=e,t}function PH1(c="",e=!1){return e?(l3(),t4(g2,null,c)):N1(g2,null,c)}function I2(c){return c==null||typeof c=="boolean"?N1(g2):Q(c)?N1(p2,null,c.slice()):typeof c=="object"?e4(c):N1(W6,null,String(c))}function e4(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:E3(c)}function xa(c,e){let t=0;const{shapeFlag:a}=c;if(e==null)e=null;else if(Q(e))t=16;else if(typeof e=="object")if(a&65){const n=e.default;n&&(n._c&&(n._d=!1),xa(c,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!(ye in e)?e._ctx=J1:n===3&&J1&&(J1.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else t1(e)?(e={default:e,_ctx:J1},t=32):(e=String(e),a&64?(t=16,e=[oh(e)]):t=8);c.children=e,c.shapeFlag|=t}function lh(...c){const e={};for(let t=0;t<c.length;t++){const a=c[t];for(const n in a)if(n==="class")e.class!==a.class&&(e.class=ze([e.class,a.class]));else if(n==="style")e.style=ve([e.style,a.style]);else if($8(n)){const r=e[n],s=a[n];s&&r!==s&&!(Q(r)&&r.includes(s))&&(e[n]=r?[].concat(r,s):s)}else n!==""&&(e[n]=a[n])}return e}function L2(c,e,t,a=null){U2(c,e,7,[t,a])}const Wx=Kf();let jx=0;function Gx(c,e,t){const a=c.type,n=(e?e.appContext:c.appContext)||Wx,r={uid:jx++,vnode:c,type:a,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new hf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zf(a,n),emitsOptions:Tf(a,n),emit:null,emitted:null,propsDefaults:b1,inheritAttrs:a.inheritAttrs,ctx:b1,data:b1,props:b1,attrs:b1,slots:b1,refs:b1,setupState:b1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Qb.bind(null,r),c.ce&&c.ce(r),r}let U1=null;const h0=()=>U1||J1;let wa,g6,Ks="__VUE_INSTANCE_SETTERS__";(g6=bc()[Ks])||(g6=bc()[Ks]=[]),g6.push(c=>U1=c),wa=c=>{g6.length>1?g6.forEach(e=>e(c)):g6[0](c)};const K6=c=>{wa(c),c.scope.on()},G4=()=>{U1&&U1.scope.off(),wa(null)};function fh(c){return c.vnode.shapeFlag&4}let Y6=!1;function Kx(c,e=!1){Y6=e;const{props:t,children:a}=c.vnode,n=fh(c);kx(c,t,n,e),Ex(c,a);const r=n?Yx(c,e):void 0;return Y6=!1,r}function Yx(c,e){const t=c.type;c.accessCache=Object.create(null),c.proxy=q6(new Proxy(c.ctx,Lx));const{setup:a}=t;if(a){const n=c.setupContext=a.length>1?uh(c):null;K6(c),o0();const r=h4(a,c,0,[c.props,n]);if(l0(),G4(),nf(r)){if(r.then(G4,G4),e)return r.then(s=>{Ic(c,s,e)}).catch(s=>{f0(s,c,0)});c.asyncDep=r}else Ic(c,r,e)}else hh(c,e)}function Ic(c,e,t){t1(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:_1(e)&&(c.setupState=wf(e)),hh(c,t)}let Ys;function hh(c,e,t){const a=c.type;if(!c.render){if(!e&&Ys&&!a.render){const n=a.template||La(c).template;if(n){const{isCustomElement:r,compilerOptions:s}=c.appContext.config,{delimiters:i,compilerOptions:o}=a,l=q1(q1({isCustomElement:r,delimiters:i},s),o);a.render=Ys(n,l)}}c.render=a.render||Q2}{K6(c),o0();try{yx(c)}finally{l0(),G4()}}}function Zx(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,t){return x2(c,"get","$attrs"),e[t]}}))}function uh(c){const e=t=>{c.exposed=t||{}};return{get attrs(){return Zx(c)},slots:c.slots,emit:c.emit,expose:e}}function _e(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(wf(q6(c.exposed)),{get(e,t){if(t in e)return e[t];if(t in $0)return $0[t](c)},has(e,t){return t in e||t in $0}}))}function Dc(c,e=!0){return t1(c)?c.displayName||c.name:c.name||e&&c.__name}function Xx(c){return t1(c)&&"__vccOpts"in c}const W1=(c,e)=>Gb(c,e,Y6);function b2(c,e,t){const a=arguments.length;return a===2?_1(e)&&!Q(e)?G6(e)?N1(c,null,[e]):N1(c,e):N1(c,null,e):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&G6(t)&&(t=[t]),N1(c,e,t))}const Qx=Symbol.for("v-scx"),Jx=()=>e2(Qx),dh="3.3.11",ew="http://www.w3.org/2000/svg",P4=typeof document<"u"?document:null,Zs=P4&&P4.createElement("template"),cw={insert:(c,e,t)=>{e.insertBefore(c,t||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,t,a)=>{const n=e?P4.createElementNS(ew,c):P4.createElement(c,t?{is:t}:void 0);return c==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:c=>P4.createTextNode(c),createComment:c=>P4.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>P4.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,t,a,n,r){const s=t?t.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===r||!(n=n.nextSibling)););else{Zs.innerHTML=a?`<svg>${c}</svg>`:c;const i=Zs.content;if(a){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}e.insertBefore(i,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},G3="transition",y0="animation",Z6=Symbol("_vtc"),be=(c,{slots:e})=>b2(ux,ph(c),e);be.displayName="Transition";const mh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tw=be.props=q1({},Ff,mh),S4=(c,e=[])=>{Q(c)?c.forEach(t=>t(...e)):c&&c(...e)},Xs=c=>c?Q(c)?c.some(e=>e.length>1):c.length>1:!1;function ph(c){const e={};for(const R in c)R in mh||(e[R]=c[R]);if(c.css===!1)return e;const{name:t="v",type:a,duration:n,enterFromClass:r=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:o=r,appearActiveClass:l=s,appearToClass:f=i,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:u=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=c,v=aw(n),H=v&&v[0],y=v&&v[1],{onBeforeEnter:M,onEnter:C,onEnterCancelled:z,onLeave:m,onLeaveCancelled:L,onBeforeAppear:N=M,onAppear:S=C,onAppearCancelled:_=z}=e,w=(R,J,C1)=>{X3(R,J?f:i),X3(R,J?l:s),C1&&C1()},E=(R,J)=>{R._isLeaving=!1,X3(R,h),X3(R,d),X3(R,u),J&&J()},W=R=>(J,C1)=>{const u1=R?S:C,B=()=>w(J,R,C1);S4(u1,[J,B]),Qs(()=>{X3(J,R?o:r),_3(J,R?f:i),Xs(u1)||Js(J,a,H,B)})};return q1(e,{onBeforeEnter(R){S4(M,[R]),_3(R,r),_3(R,s)},onBeforeAppear(R){S4(N,[R]),_3(R,o),_3(R,l)},onEnter:W(!1),onAppear:W(!0),onLeave(R,J){R._isLeaving=!0;const C1=()=>E(R,J);_3(R,h),zh(),_3(R,u),Qs(()=>{R._isLeaving&&(X3(R,h),_3(R,d),Xs(m)||Js(R,a,y,C1))}),S4(m,[R,C1])},onEnterCancelled(R){w(R,!1),S4(z,[R])},onAppearCancelled(R){w(R,!0),S4(_,[R])},onLeaveCancelled(R){E(R),S4(L,[R])}})}function aw(c){if(c==null)return null;if(_1(c))return[U9(c.enter),U9(c.leave)];{const e=U9(c);return[e,e]}}function U9(c){return of(c)}function _3(c,e){e.split(/\s+/).forEach(t=>t&&c.classList.add(t)),(c[Z6]||(c[Z6]=new Set)).add(e)}function X3(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.remove(a));const t=c[Z6];t&&(t.delete(e),t.size||(c[Z6]=void 0))}function Qs(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let nw=0;function Js(c,e,t,a){const n=c._endId=++nw,r=()=>{n===c._endId&&a()};if(t)return setTimeout(r,t);const{type:s,timeout:i,propCount:o}=vh(c,e);if(!s)return a();const l=s+"end";let f=0;const h=()=>{c.removeEventListener(l,u),r()},u=d=>{d.target===c&&++f>=o&&h()};setTimeout(()=>{f<o&&h()},i+1),c.addEventListener(l,u)}function vh(c,e){const t=window.getComputedStyle(c),a=v=>(t[v]||"").split(", "),n=a(`${G3}Delay`),r=a(`${G3}Duration`),s=ei(n,r),i=a(`${y0}Delay`),o=a(`${y0}Duration`),l=ei(i,o);let f=null,h=0,u=0;e===G3?s>0&&(f=G3,h=s,u=r.length):e===y0?l>0&&(f=y0,h=l,u=o.length):(h=Math.max(s,l),f=h>0?s>l?G3:y0:null,u=f?f===G3?r.length:o.length:0);const d=f===G3&&/\b(transform|all)(,|$)/.test(a(`${G3}Property`).toString());return{type:f,timeout:h,propCount:u,hasTransform:d}}function ei(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((t,a)=>ci(t)+ci(c[a])))}function ci(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function zh(){return document.body.offsetHeight}function rw(c,e,t){const a=c[Z6];a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?c.removeAttribute("class"):t?c.setAttribute("class",e):c.className=e}const Na=Symbol("_vod"),RH1={beforeMount(c,{value:e},{transition:t}){c[Na]=c.style.display==="none"?"":c.style.display,t&&e?t.beforeEnter(c):_0(c,e)},mounted(c,{value:e},{transition:t}){t&&e&&t.enter(c)},updated(c,{value:e,oldValue:t},{transition:a}){!e!=!t&&(a?e?(a.beforeEnter(c),_0(c,!0),a.enter(c)):a.leave(c,()=>{_0(c,!1)}):_0(c,e))},beforeUnmount(c,{value:e}){_0(c,e)}};function _0(c,e){c.style.display=e?c[Na]:"none"}function sw(c,e,t){const a=c.style,n=A1(t);if(t&&!n){if(e&&!A1(e))for(const r in e)t[r]==null&&Oc(a,r,"");for(const r in t)Oc(a,r,t[r])}else{const r=a.display;n?e!==t&&(a.cssText=t):e&&c.removeAttribute("style"),Na in c&&(a.display=r)}}const ti=/\s*!important$/;function Oc(c,e,t){if(Q(t))t.forEach(a=>Oc(c,e,a));else if(t==null&&(t=""),e.startsWith("--"))c.setProperty(e,t);else{const a=iw(c,e);ti.test(t)?c.setProperty(f6(a),t.replace(ti,""),"important"):c[a]=t}}const ai=["Webkit","Moz","ms"],q9={};function iw(c,e){const t=q9[e];if(t)return t;let a=z3(e);if(a!=="filter"&&a in c)return q9[e]=a;a=pe(a);for(let n=0;n<ai.length;n++){const r=ai[n]+a;if(r in c)return q9[e]=r}return e}const ni="http://www.w3.org/1999/xlink";function ow(c,e,t,a,n){if(a&&e.startsWith("xlink:"))t==null?c.removeAttributeNS(ni,e.slice(6,e.length)):c.setAttributeNS(ni,e,t);else{const r=vb(e);t==null||r&&!lf(t)?c.removeAttribute(e):c.setAttribute(e,r?"":t)}}function lw(c,e,t,a,n,r,s){if(e==="innerHTML"||e==="textContent"){a&&s(a,n,r),c[e]=t??"";return}const i=c.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){c._value=t;const l=i==="OPTION"?c.getAttribute("value"):c.value,f=t??"";l!==f&&(c.value=f),t==null&&c.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof c[e];l==="boolean"?t=lf(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{c[e]=t}catch{}o&&c.removeAttribute(e)}function V6(c,e,t,a){c.addEventListener(e,t,a)}function fw(c,e,t,a){c.removeEventListener(e,t,a)}const ri=Symbol("_vei");function hw(c,e,t,a,n=null){const r=c[ri]||(c[ri]={}),s=r[e];if(a&&s)s.value=a;else{const[i,o]=uw(e);if(a){const l=r[e]=pw(a,n);V6(c,i,l,o)}else s&&(fw(c,i,s,o),r[e]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function uw(c){let e;if(si.test(c)){e={};let a;for(;a=c.match(si);)c=c.slice(0,c.length-a[0].length),e[a[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):f6(c.slice(2)),e]}let $9=0;const dw=Promise.resolve(),mw=()=>$9||(dw.then(()=>$9=0),$9=Date.now());function pw(c,e){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;U2(vw(a,t.value),e,5,[a])};return t.value=c,t.attached=mw(),t}function vw(c,e){if(Q(e)){const t=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{t.call(c),c._stopped=!0},e.map(a=>n=>!n._stopped&&a&&a(n))}else return e}const ii=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,zw=(c,e,t,a,n=!1,r,s,i,o)=>{e==="class"?rw(c,a,n):e==="style"?sw(c,t,a):$8(e)?aa(e)||hw(c,e,t,a,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gw(c,e,a,n))?lw(c,e,a,r,s,i,o):(e==="true-value"?c._trueValue=a:e==="false-value"&&(c._falseValue=a),ow(c,e,a,n))};function gw(c,e,t,a){if(a)return!!(e==="innerHTML"||e==="textContent"||e in c&&ii(e)&&t1(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=c.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return ii(e)&&A1(t)?!1:e in c}const gh=new WeakMap,Ch=new WeakMap,y7=Symbol("_moveCb"),oi=Symbol("_enterCb"),Hh={name:"TransitionGroup",props:q1({},tw,{tag:String,moveClass:String}),setup(c,{slots:e}){const t=h0(),a=Of();let n,r;return Ma(()=>{if(!n.length)return;const s=c.moveClass||`${c.name||"v"}-move`;if(!Lw(n[0].el,t.vnode.el,s))return;n.forEach(Hw),n.forEach(Mw);const i=n.filter(Vw);zh(),i.forEach(o=>{const l=o.el,f=l.style;_3(l,s),f.transform=f.webkitTransform=f.transitionDuration="";const h=l[y7]=u=>{u&&u.target!==l||(!u||/transform$/.test(u.propertyName))&&(l.removeEventListener("transitionend",h),l[y7]=null,X3(l,s))};l.addEventListener("transitionend",h)})}),()=>{const s=f1(c),i=ph(s);let o=s.tag||p2;n=r,r=e.default?Ca(e.default()):[];for(let l=0;l<r.length;l++){const f=r[l];f.key!=null&&$6(f,m8(f,i,a,t))}if(n)for(let l=0;l<n.length;l++){const f=n[l];$6(f,m8(f,i,a,t)),gh.set(f,f.el.getBoundingClientRect())}return N1(o,null,r)}}},Cw=c=>delete c.mode;Hh.props;const IH1=Hh;function Hw(c){const e=c.el;e[y7]&&e[y7](),e[oi]&&e[oi]()}function Mw(c){Ch.set(c,c.el.getBoundingClientRect())}function Vw(c){const e=gh.get(c),t=Ch.get(c),a=e.left-t.left,n=e.top-t.top;if(a||n){const r=c.el.style;return r.transform=r.webkitTransform=`translate(${a}px,${n}px)`,r.transitionDuration="0s",c}}function Lw(c,e,t){const a=c.cloneNode(),n=c[Z6];n&&n.forEach(i=>{i.split(/\s+/).forEach(o=>o&&a.classList.remove(o))}),t.split(/\s+/).forEach(i=>i&&a.classList.add(i)),a.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(a);const{hasTransform:s}=vh(a);return r.removeChild(a),s}const li=c=>{const e=c.props["onUpdate:modelValue"]||!1;return Q(e)?t=>A6(e,t):e};function yw(c){c.target.composing=!0}function fi(c){const e=c.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const W9=Symbol("_assign"),DH1={created(c,{modifiers:{lazy:e,trim:t,number:a}},n){c[W9]=li(n);const r=a||n.props&&n.props.type==="number";V6(c,e?"change":"input",s=>{if(s.target.composing)return;let i=c.value;t&&(i=i.trim()),r&&(i=_c(i)),c[W9](i)}),t&&V6(c,"change",()=>{c.value=c.value.trim()}),e||(V6(c,"compositionstart",yw),V6(c,"compositionend",fi),V6(c,"change",fi))},mounted(c,{value:e}){c.value=e??""},beforeUpdate(c,{value:e,modifiers:{lazy:t,trim:a,number:n}},r){if(c[W9]=li(r),c.composing)return;const s=n||c.type==="number"?_c(c.value):c.value,i=e??"";s!==i&&(document.activeElement===c&&c.type!=="range"&&(t||a&&c.value.trim()===i)||(c.value=i))}},_w=["ctrl","shift","alt","meta"],bw={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>_w.some(t=>c[`${t}Key`]&&!e.includes(t))},OH1=(c,e)=>c._withMods||(c._withMods=(t,...a)=>{for(let n=0;n<e.length;n++){const r=bw[e[n]];if(r&&r(t,e))return}return c(t,...a)}),xw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},FH1=(c,e)=>c._withKeys||(c._withKeys=t=>{if(!("key"in t))return;const a=f6(t.key);if(e.some(n=>n===a||xw[n]===a))return c(t)}),Mh=q1({patchProp:zw},cw);let K0,hi=!1;function Vh(){return K0||(K0=Ix(Mh))}function ww(){return K0=hi?K0:Dx(Mh),hi=!0,K0}const BH1=(...c)=>{Vh().render(...c)},Nw=(...c)=>{const e=Vh().createApp(...c),{mount:t}=e;return e.mount=a=>{const n=Lh(a);if(!n)return;const r=e._component;!t1(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const s=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},e},Sw=(...c)=>{const e=ww().createApp(...c),{mount:t}=e;return e.mount=a=>{const n=Lh(a);if(n)return t(n,!0,n instanceof SVGElement)},e};function Lh(c){return A1(c)?document.querySelector(c):c}const kw=/#/g,Aw=/&/g,Tw=/=/g,Sa=/\+/g,Ew=/%5e/gi,Pw=/%60/gi,Rw=/%7c/gi,Iw=/%20/gi;function Dw(c){return encodeURI(""+c).replace(Rw,"|")}function Fc(c){return Dw(typeof c=="string"?c:JSON.stringify(c)).replace(Sa,"%2B").replace(Iw,"+").replace(kw,"%23").replace(Aw,"%26").replace(Pw,"`").replace(Ew,"^")}function j9(c){return Fc(c).replace(Tw,"%3D")}function _7(c=""){try{return decodeURIComponent(""+c)}catch{return""+c}}function Ow(c){return _7(c.replace(Sa," "))}function Fw(c){return _7(c.replace(Sa," "))}function Bw(c=""){const e={};c[0]==="?"&&(c=c.slice(1));for(const t of c.split("&")){const a=t.match(/([^=]+)=?(.*)/)||[];if(a.length<2)continue;const n=Ow(a[1]);if(n==="__proto__"||n==="constructor")continue;const r=Fw(a[2]||"");e[n]===void 0?e[n]=r:Array.isArray(e[n])?e[n].push(r):e[n]=[e[n],r]}return e}function Uw(c,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${j9(c)}=${Fc(t)}`).join("&"):`${j9(c)}=${Fc(e)}`:j9(c)}function qw(c){return Object.keys(c).filter(e=>c[e]!==void 0).map(e=>Uw(e,c[e])).filter(Boolean).join("&")}const $w=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Ww=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,jw=/^([/\\]\s*){2,}[^/\\]/;function K8(c,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?$w.test(c):Ww.test(c)||(e.acceptRelative?jw.test(c):!1)}const Gw=/^[\s\0]*(blob|data|javascript|vbscript):$/i;function Kw(c){return!!c&&Gw.test(c)}const Yw=/\/$|\/\?|\/#/;function Bc(c="",e){return e?Yw.test(c):c.endsWith("/")}function yh(c="",e){if(!e)return(Bc(c)?c.slice(0,-1):c)||"/";if(!Bc(c,!0))return c||"/";let t=c,a="";const n=c.indexOf("#");n>=0&&(t=c.slice(0,n),a=c.slice(n));const[r,...s]=t.split("?");return(r.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")+a}function Uc(c="",e){if(!e)return c.endsWith("/")?c:c+"/";if(Bc(c,!0))return c||"/";let t=c,a="";const n=c.indexOf("#");if(n>=0&&(t=c.slice(0,n),a=c.slice(n),!t))return a;const[r,...s]=t.split("?");return r+"/"+(s.length>0?`?${s.join("?")}`:"")+a}function Zw(c=""){return c.startsWith("/")}function ui(c=""){return Zw(c)?c:"/"+c}function Xw(c,e){if(bh(e)||K8(c))return c;const t=yh(e);return c.startsWith(t)?c:Y8(t,c)}function di(c,e){if(bh(e))return c;const t=yh(e);if(!c.startsWith(t))return c;const a=c.slice(t.length);return a[0]==="/"?a:"/"+a}function _h(c,e){const t=xe(c),a={...Bw(t.search),...e};return t.search=qw(a),cN(t)}function bh(c){return!c||c==="/"}function Qw(c){return c&&c!=="/"}const Jw=/^\.?\//;function Y8(c,...e){let t=c||"";for(const a of e.filter(n=>Qw(n)))if(t){const n=a.replace(Jw,"");t=Uc(t)+n}else t=a;return t}function eN(c,e,t={}){return t.trailingSlash||(c=Uc(c),e=Uc(e)),t.leadingSlash||(c=ui(c),e=ui(e)),t.encoding||(c=_7(c),e=_7(e)),c===e}function xe(c="",e){const t=c.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,h,u=""]=t;return{protocol:h.toLowerCase(),pathname:u,href:h+u,auth:"",host:"",search:"",hash:""}}if(!K8(c,{acceptRelative:!0}))return e?xe(e+c):mi(c);const[,a="",n,r=""]=c.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,s="",i=""]=r.match(/([^#/?]*)(.*)?/)||[],{pathname:o,search:l,hash:f}=mi(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:a.toLowerCase(),auth:n?n.slice(0,Math.max(0,n.length-1)):"",host:s,pathname:o,search:l,hash:f}}function mi(c=""){const[e="",t="",a=""]=(c.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:a}}function cN(c){const e=c.pathname||"",t=c.search?(c.search.startsWith("?")?"":"?")+c.search:"",a=c.hash||"",n=c.auth?c.auth+"@":"",r=c.host||"";return(c.protocol?c.protocol+"//":"")+n+r+e+t+a}const tN=()=>{var c;return((c=window==null?void 0:window.__NUXT__)==null?void 0:c.config)||{}},b7=tN().app,aN=()=>b7.baseURL,nN=()=>b7.buildAssetsDir,ka=(...c)=>Y8(xh(),nN(),...c),xh=(...c)=>{const e=b7.cdnURL||b7.baseURL;return c.length?Y8(e,...c):e};globalThis.__buildAssetsURL=ka,globalThis.__publicAssetsURL=xh;const rN=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,sN=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,iN=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function oN(c,e){if(c==="__proto__"||c==="constructor"&&e&&typeof e=="object"&&"prototype"in e){lN(c);return}return e}function lN(c){console.warn(`[destr] Dropping "${c}" key to prevent prototype pollution.`)}function x7(c,e={}){if(typeof c!="string")return c;const t=c.trim();if(c[0]==='"'&&c.at(-1)==='"'&&!c.includes("\\"))return t.slice(1,-1);if(t.length<=9){const a=t.toLowerCase();if(a==="true")return!0;if(a==="false")return!1;if(a==="undefined")return;if(a==="null")return null;if(a==="nan")return Number.NaN;if(a==="infinity")return Number.POSITIVE_INFINITY;if(a==="-infinity")return Number.NEGATIVE_INFINITY}if(!iN.test(c)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return c}try{if(rN.test(c)||sN.test(c)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(c,oN)}return JSON.parse(c)}catch(a){if(e.strict)throw a;return c}}class fN extends Error{constructor(e,t){super(e,t),this.name="FetchError",t!=null&&t.cause&&!this.cause&&(this.cause=t.cause)}}function hN(c){var o,l,f,h,u;const e=((o=c.error)==null?void 0:o.message)||((l=c.error)==null?void 0:l.toString())||"",t=((f=c.request)==null?void 0:f.method)||((h=c.options)==null?void 0:h.method)||"GET",a=((u=c.request)==null?void 0:u.url)||String(c.request)||"/",n=`[${t}] ${JSON.stringify(a)}`,r=c.response?`${c.response.status} ${c.response.statusText}`:"<no response>",s=`${n}: ${r}${e?` ${e}`:""}`,i=new fN(s,c.error?{cause:c.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(i,d,{get(){return c[d]}});for(const[d,v]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(i,d,{get(){return c.response&&c.response[v]}});return i}const uN=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function pi(c="GET"){return uN.has(c.toUpperCase())}function dN(c){if(c===void 0)return!1;const e=typeof c;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(c)?!0:c.buffer?!1:c.constructor&&c.constructor.name==="Object"||typeof c.toJSON=="function"}const mN=new Set(["image/svg","application/xml","application/xhtml","application/html"]),pN=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function vN(c=""){if(!c)return"json";const e=c.split(";").shift()||"";return pN.test(e)?"json":mN.has(e)||e.startsWith("text/")?"text":"blob"}function zN(c,e,t=globalThis.Headers){const a={...e,...c};if(e!=null&&e.params&&(c!=null&&c.params)&&(a.params={...e==null?void 0:e.params,...c==null?void 0:c.params}),e!=null&&e.query&&(c!=null&&c.query)&&(a.query={...e==null?void 0:e.query,...c==null?void 0:c.query}),e!=null&&e.headers&&(c!=null&&c.headers)){a.headers=new t((e==null?void 0:e.headers)||{});for(const[n,r]of new t((c==null?void 0:c.headers)||{}))a.headers.set(n,r)}return a}const gN=new Set([408,409,425,429,500,502,503,504]),CN=new Set([101,204,205,304]);function wh(c={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:a=globalThis.AbortController}=c;async function n(i){const o=i.error&&i.error.name==="AbortError"&&!i.options.timeout||!1;if(i.options.retry!==!1&&!o){let f;typeof i.options.retry=="number"?f=i.options.retry:f=pi(i.options.method)?0:1;const h=i.response&&i.response.status||500;if(f>0&&(Array.isArray(i.options.retryStatusCodes)?i.options.retryStatusCodes.includes(h):gN.has(h))){const u=i.options.retryDelay||0;return u>0&&await new Promise(d=>setTimeout(d,u)),r(i.request,{...i.options,retry:f-1,timeout:i.options.timeout})}}const l=hN(i);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}const r=async function(o,l={}){var u;const f={request:o,options:zN(l,c.defaults,t),response:void 0,error:void 0};if(f.options.method=(u=f.options.method)==null?void 0:u.toUpperCase(),f.options.onRequest&&await f.options.onRequest(f),typeof f.request=="string"&&(f.options.baseURL&&(f.request=Xw(f.request,f.options.baseURL)),(f.options.query||f.options.params)&&(f.request=_h(f.request,{...f.options.params,...f.options.query}))),f.options.body&&pi(f.options.method)&&(dN(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new t(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half"))),!f.options.signal&&f.options.timeout){const d=new a;setTimeout(()=>d.abort(),f.options.timeout),f.options.signal=d.signal}try{f.response=await e(f.request,f.options)}catch(d){return f.error=d,f.options.onRequestError&&await f.options.onRequestError(f),await n(f)}if(f.response.body&&!CN.has(f.response.status)&&f.options.method!=="HEAD"){const d=(f.options.parseResponse?"json":f.options.responseType)||vN(f.response.headers.get("content-type")||"");switch(d){case"json":{const v=await f.response.text(),H=f.options.parseResponse||x7;f.response._data=H(v);break}case"stream":{f.response._data=f.response.body;break}default:f.response._data=await f.response[d]()}}return f.options.onResponse&&await f.options.onResponse(f),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await f.options.onResponseError(f),await n(f)):f.response},s=async function(o,l){return(await r(o,l))._data};return s.raw=r,s.native=(...i)=>e(...i),s.create=(i={})=>wh({...c,defaults:{...c.defaults,...i}}),s}const Aa=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),HN=Aa.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),MN=Aa.Headers,VN=Aa.AbortController,LN=wh({fetch:HN,Headers:MN,AbortController:VN}),yN=LN;globalThis.$fetch||(globalThis.$fetch=yN.create({baseURL:aN()}));function qc(c,e={},t){for(const a in c){const n=c[a],r=t?`${t}:${a}`:a;typeof n=="object"&&n!==null?qc(n,e,r):typeof n=="function"&&(e[r]=n)}return e}const _N={run:c=>c()},bN=()=>_N,Nh=typeof console.createTask<"u"?console.createTask:bN;function xN(c,e){const t=e.shift(),a=Nh(t);return c.reduce((n,r)=>n.then(()=>a.run(()=>r(...e))),Promise.resolve())}function wN(c,e){const t=e.shift(),a=Nh(t);return Promise.all(c.map(n=>a.run(()=>n(...e))))}function G9(c,e){for(const t of[...c])t(e)}class NN{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,a={}){if(!e||typeof t!="function")return()=>{};const n=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!a.allowDeprecated){let s=r.message;s||(s=`${n} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let a,n=(...r)=>(typeof a=="function"&&a(),a=void 0,n=void 0,t(...r));return a=this.hook(e,n),a}removeHook(e,t){if(this._hooks[e]){const a=this._hooks[e].indexOf(t);a!==-1&&this._hooks[e].splice(a,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const a=this._hooks[e]||[];delete this._hooks[e];for(const n of a)this.hook(e,n)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=qc(e),a=Object.keys(t).map(n=>this.hook(n,t[n]));return()=>{for(const n of a.splice(0,a.length))n()}}removeHooks(e){const t=qc(e);for(const a in t)this.removeHook(a,t[a])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(xN,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(wN,e,...t)}callHookWith(e,t,...a){const n=this._before||this._after?{name:t,args:a,context:{}}:void 0;this._before&&G9(this._before,n);const r=e(t in this._hooks?[...this._hooks[t]]:[],a);return r instanceof Promise?r.finally(()=>{this._after&&n&&G9(this._after,n)}):(this._after&&n&&G9(this._after,n),r)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Sh(){return new NN}function SN(c={}){let e,t=!1;const a=s=>{if(e&&e!==s)throw new Error("Context conflict")};let n;if(c.asyncContext){const s=c.AsyncLocalStorage||globalThis.AsyncLocalStorage;s?n=new s:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(n&&e===void 0){const s=n.getStore();if(s!==void 0)return s}return e};return{use:()=>{const s=r();if(s===void 0)throw new Error("Context is not available");return s},tryUse:()=>r(),set:(s,i)=>{i||a(s),e=s,t=!0},unset:()=>{e=void 0,t=!1},call:(s,i)=>{a(s),e=s;try{return n?n.run(s,i):i()}finally{t||(e=void 0)}},async callAsync(s,i){e=s;const o=()=>{e=s},l=()=>e===s?o:void 0;$c.add(l);try{const f=n?n.run(s,i):i();return t||(e=void 0),await f}finally{$c.delete(l)}}}}function kN(c={}){const e={};return{get(t,a={}){return e[t]||(e[t]=SN({...c,...a})),e[t],e[t]}}}const w7=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},vi="__unctx__",AN=w7[vi]||(w7[vi]=kN()),TN=(c,e={})=>AN.get(c,e),zi="__unctx_async_handlers__",$c=w7[zi]||(w7[zi]=new Set);function v8(c){const e=[];for(const n of $c){const r=n();r&&e.push(r)}const t=()=>{for(const n of e)n()};let a=c();return a&&typeof a=="object"&&"catch"in a&&(a=a.catch(n=>{throw t(),n})),[a,t]}const kh=TN("nuxt-app",{asyncContext:!1}),EN="__nuxt_plugin";function PN(c){let e=0;const t={_scope:ge(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.8.2"},get vue(){return t.vueApp.version}},payload:g3({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:n=>t._scope.run(()=>ON(t,n)),isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let n=!1;return()=>{if(!n&&(n=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...c};t.hooks=Sh(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(n,r)=>{const s="$"+n;I5(t,s,r),I5(t.vueApp.config.globalProperties,s,r)},I5(t.vueApp,"$nuxt",t),I5(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener("nuxt.preloadError",r=>{t.callHook("app:chunkError",{error:r.payload})}),window.useNuxtApp=window.useNuxtApp||I1;const n=t.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});t.hook("app:mounted",n)}const a=g3(t.payload.config);return t.provide("config",a),t}async function RN(c,e){if(e.hooks&&c.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:t}=await c.runWithContext(()=>e(c))||{};if(t&&typeof t=="object")for(const a in t)c.provide(a,t[a])}}async function IN(c,e){const t=[],a=[];for(const n of e){const r=RN(c,n);n.parallel?t.push(r.catch(s=>a.push(s))):await r}if(await Promise.all(t),a.length)throw a[0]}/*! @__NO_SIDE_EFFECTS__ */function w2(c){return typeof c=="function"?c:(delete c.name,Object.assign(c.setup||(()=>{}),c,{[EN]:!0}))}const DN=w2;function ON(c,e,t){const a=()=>t?e(...t):e();return kh.set(c),c.vueApp.runWithContext(a)}/*! @__NO_SIDE_EFFECTS__ */function I1(){var e;let c;if(ya()&&(c=(e=h0())==null?void 0:e.appContext.app.$nuxt),c=c||kh.tryUse(),!c)throw new Error("[nuxt] instance unavailable");return c}/*! @__NO_SIDE_EFFECTS__ */function we(){return I1().$config}function I5(c,e,t){Object.defineProperty(c,e,{get:()=>t})}const FN="modulepreload",BN=function(c,e){return c[0]==="."?new URL(c,e).href:c},gi={},UN=function(e,t,a){if(!t||t.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=BN(r,a),r in gi)return;gi[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(!!a)for(let f=n.length-1;f>=0;f--){const h=n[f];if(h.href===r&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":FN,s||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),s)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},R2=(...c)=>UN(...c).catch(e=>{const t=new Event("nuxt.preloadError");throw t.payload=e,window.dispatchEvent(t),e}),qN=-1,$N=-2,WN=-3,jN=-4,GN=-5,KN=-6;function YN(c,e){return ZN(JSON.parse(c),e)}function ZN(c,e){if(typeof c=="number")return n(c,!0);if(!Array.isArray(c)||c.length===0)throw new Error("Invalid input");const t=c,a=Array(t.length);function n(r,s=!1){if(r===qN)return;if(r===WN)return NaN;if(r===jN)return 1/0;if(r===GN)return-1/0;if(r===KN)return-0;if(s)throw new Error("Invalid input");if(r in a)return a[r];const i=t[r];if(!i||typeof i!="object")a[r]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const o=i[0],l=e==null?void 0:e[o];if(l)return a[r]=l(n(i[1]));switch(o){case"Date":a[r]=new Date(i[1]);break;case"Set":const f=new Set;a[r]=f;for(let d=1;d<i.length;d+=1)f.add(n(i[d]));break;case"Map":const h=new Map;a[r]=h;for(let d=1;d<i.length;d+=2)h.set(n(i[d]),n(i[d+1]));break;case"RegExp":a[r]=new RegExp(i[1],i[2]);break;case"Object":a[r]=Object(i[1]);break;case"BigInt":a[r]=BigInt(i[1]);break;case"null":const u=Object.create(null);a[r]=u;for(let d=1;d<i.length;d+=2)u[i[d]]=n(i[d+1]);break;default:throw new Error(`Unknown type ${o}`)}}else{const o=new Array(i.length);a[r]=o;for(let l=0;l<i.length;l+=1){const f=i[l];f!==$N&&(o[l]=n(f))}}else{const o={};a[r]=o;for(const l in i){const f=i[l];o[l]=n(f)}}return a[r]}return n(0)}function XN(c){return Array.isArray(c)?c:[c]}const QN=["title","titleTemplate","script","style","noscript"],i7=["base","meta","link","style","script","noscript"],JN=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],eS=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Ah=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],cS=typeof window<"u";function Ta(c){let e=9;for(let t=0;t<c.length;)e=Math.imul(e^c.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ci(c){return c._h||Ta(c._d?c._d:`${c.tag}:${c.textContent||c.innerHTML||""}:${Object.entries(c.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function Th(c,e){const{props:t,tag:a}=c;if(eS.includes(a))return a;if(a==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const n=["id"];a==="meta"&&n.push("name","property","http-equiv");for(const r of n)if(typeof t[r]<"u"){const s=String(t[r]);return e&&!e(s)?!1:`${a}:${r}:${s}`}return!1}function Hi(c,e){return c==null?e||null:typeof c=="function"?c(e):c}async function tS(c,e,t){const a={tag:c,props:await Eh(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(c)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(c))};return Ah.forEach(n=>{const r=typeof a.props[n]<"u"?a.props[n]:t[n];typeof r<"u"&&((!["innerHTML","textContent","children"].includes(n)||QN.includes(a.tag))&&(a[n==="children"?"innerHTML":n]=r),delete a.props[n])}),a.props.body&&(a.tagPosition="bodyClose",delete a.props.body),a.tag==="script"&&typeof a.innerHTML=="object"&&(a.innerHTML=JSON.stringify(a.innerHTML),a.props.type=a.props.type||"application/json"),Array.isArray(a.props.content)?a.props.content.map(n=>({...a,props:{...a.props,content:n}})):a}function aS(c){return typeof c=="object"&&!Array.isArray(c)&&(c=Object.keys(c).filter(e=>c[e])),(Array.isArray(c)?c.join(" "):c).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function Eh(c,e){for(const t of Object.keys(c)){if(t==="class"){c[t]=aS(c[t]);continue}if(c[t]instanceof Promise&&(c[t]=await c[t]),!e&&!Ah.includes(t)){const a=String(c[t]),n=t.startsWith("data-");a==="true"||a===""?c[t]=n?"true":!0:c[t]||(n&&a==="false"?c[t]="false":delete c[t])}}return c}const nS=10;async function rS(c){const e=[];return Object.entries(c.resolvedInput).filter(([t,a])=>typeof a<"u"&&JN.includes(t)).forEach(([t,a])=>{const n=XN(a);e.push(...n.map(r=>tS(t,r,c)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,a)=>(t._e=c._i,c.mode&&(t._m=c.mode),t._p=(c._i<<nS)+a,t))}const Mi={base:-10,title:10},Vi={critical:-80,high:-10,low:20};function N7(c){let e=100;const t=c.tagPriority;return typeof t=="number"?t:(c.tag==="meta"?(c.props["http-equiv"]==="content-security-policy"&&(e=-30),c.props.charset&&(e=-20),c.props.name==="viewport"&&(e=-15)):c.tag==="link"&&c.props.rel==="preconnect"?e=20:c.tag in Mi&&(e=Mi[c.tag]),typeof t=="string"&&t in Vi?e+Vi[t]:e)}const sS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Ph=["onload","onerror","onabort","onprogress","onloadstart"],K3="%separator";function o7(c,e,t){if(typeof c!="string"||!c.includes("%"))return c;function a(s){let i;return["s","pageTitle"].includes(s)?i=e.pageTitle:s.includes(".")?i=s.split(".").reduce((o,l)=>o&&o[l]||void 0,e):i=e[s],typeof i<"u"?(i||"").replace(/"/g,'\\"'):!1}let n=c;try{n=decodeURI(c)}catch{}return(n.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(s=>{const i=a(s.slice(1));typeof i=="string"&&(c=c.replace(new RegExp(`\\${s}(\\W|$)`,"g"),(o,l)=>`${i}${l}`).trim())}),c.includes(K3)&&(c.endsWith(K3)&&(c=c.slice(0,-K3.length).trim()),c.startsWith(K3)&&(c=c.slice(K3.length).trim()),c=c.replace(new RegExp(`\\${K3}\\s*\\${K3}`,"g"),K3),c=o7(c,{separator:t},t)),c}async function iS(c){const e={tag:c.tagName.toLowerCase(),props:await Eh(c.getAttributeNames().reduce((t,a)=>({...t,[a]:c.getAttribute(a)}),{})),innerHTML:c.innerHTML};return e._d=Th(e),e}async function Rh(c,e={}){var f;const t=e.document||c.resolvedOptions.document;if(!t)return;const a={shouldRender:c.dirty,tags:[]};if(await c.hooks.callHook("dom:beforeRender",a),!a.shouldRender)return;const n=(await c.resolveTags()).map(h=>({tag:h,id:i7.includes(h.tag)?Ci(h):h.tag,shouldRender:!0}));let r=c._dom;if(!r){r={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};for(const h of["body","head"]){const u=(f=t==null?void 0:t[h])==null?void 0:f.children;for(const d of[...u].filter(v=>i7.includes(v.tagName.toLowerCase())))r.elMap[d.getAttribute("data-hid")||Ci(await iS(d))]=d}}r.pendingSideEffects={...r.sideEffects||{}},r.sideEffects={};function s(h,u,d){const v=`${h}:${u}`;r.sideEffects[v]=d,delete r.pendingSideEffects[v]}function i({id:h,$el:u,tag:d}){const v=d.tag.endsWith("Attrs");r.elMap[h]=u,v||(["textContent","innerHTML"].forEach(H=>{d[H]&&d[H]!==u[H]&&(u[H]=d[H])}),s(h,"el",()=>{r.elMap[h].remove(),delete r.elMap[h]})),Object.entries(d.props).forEach(([H,y])=>{const M=`attr:${H}`;if(H==="class")for(const C of(y||"").split(" ").filter(Boolean))v&&s(h,`${M}:${C}`,()=>u.classList.remove(C)),!u.classList.contains(C)&&u.classList.add(C);else u.getAttribute(H)!==y&&u.setAttribute(H,y===!0?"":String(y)),v&&s(h,M,()=>u.removeAttribute(H))})}const o=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of n){const{tag:u,shouldRender:d,id:v}=h;if(d){if(u.tag==="title"){t.title=u.textContent;continue}h.$el=h.$el||r.elMap[v],h.$el?i(h):i7.includes(u.tag)&&o.push(h)}}for(const h of o){const u=h.tag.tagPosition||"head";h.$el=t.createElement(h.tag.tag),i(h),l[u]=l[u]||t.createDocumentFragment(),l[u].appendChild(h.$el)}for(const h of n)await c.hooks.callHook("dom:renderTag",h,t,s);l.head&&t.head.appendChild(l.head),l.bodyOpen&&t.body.insertBefore(l.bodyOpen,t.body.firstChild),l.bodyClose&&t.body.appendChild(l.bodyClose),Object.values(r.pendingSideEffects).forEach(h=>h()),c._dom=r,c.dirty=!1,await c.hooks.callHook("dom:rendered",{renders:n})}async function oS(c,e={}){const t=e.delayFn||(a=>setTimeout(a,10));return c._domUpdatePromise=c._domUpdatePromise||new Promise(a=>t(async()=>{await Rh(c,e),delete c._domUpdatePromise,a()}))}function lS(c){return e=>{var a,n;const t=((n=(a=e.resolvedOptions.document)==null?void 0:a.head.querySelector('script[id="unhead:payload"]'))==null?void 0:n.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":function(r){oS(r,c)}}}}}const fS=["templateParams","htmlAttrs","bodyAttrs"],hS={hooks:{"tag:normalise":function({tag:c}){["hid","vmid","key"].forEach(a=>{c.props[a]&&(c.key=c.props[a],delete c.props[a])});const t=Th(c)||(c.key?`${c.tag}:${c.key}`:!1);t&&(c._d=t)},"tags:resolve":function(c){const e={};c.tags.forEach(a=>{const n=(a.key?`${a.tag}:${a.key}`:a._d)||a._p,r=e[n];if(r){let i=a==null?void 0:a.tagDuplicateStrategy;if(!i&&fS.includes(a.tag)&&(i="merge"),i==="merge"){const o=r.props;["class","style"].forEach(l=>{o[l]&&(a.props[l]?(l==="style"&&!o[l].endsWith(";")&&(o[l]+=";"),a.props[l]=`${o[l]} ${a.props[l]}`):a.props[l]=o[l])}),e[n].props={...o,...a.props};return}else if(a._e===r._e){r._duped=r._duped||[],a._d=`${r._d}:${r._duped.length+1}`,r._duped.push(a);return}else if(N7(a)>N7(r))return}const s=Object.keys(a.props).length+(a.innerHTML?1:0)+(a.textContent?1:0);if(i7.includes(a.tag)&&s===0){delete e[n];return}e[n]=a});const t=[];Object.values(e).forEach(a=>{const n=a._duped;delete a._duped,t.push(a),n&&t.push(...n)}),c.tags=t,c.tags=c.tags.filter(a=>!(a.tag==="meta"&&(a.props.name||a.props.property)&&!a.props.content))}}},uS={mode:"server",hooks:{"tags:resolve":function(c){const e={};c.tags.filter(t=>["titleTemplate","templateParams","title"].includes(t.tag)&&t._m==="server").forEach(t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props}),Object.keys(e).length&&c.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},dS=["script","link","bodyAttrs"];function mS(c){const e={},t={};return Object.entries(c.props).forEach(([a,n])=>{a.startsWith("on")&&typeof n=="function"?(Ph.includes(a)&&(e[a]=`this.dataset.${a} = true`),t[a]=n):e[a]=n}),{props:e,eventHandlers:t}}const pS=c=>({hooks:{"tags:resolve":function(e){for(const t of e.tags)if(dS.includes(t.tag)){const{props:a,eventHandlers:n}=mS(t);t.props=a,Object.keys(n).length&&((t.props.src||t.props.href)&&(t.key=t.key||Ta(t.props.src||t.props.href)),t._eventHandlers=n)}},"dom:renderTag":function(e,t,a){if(!e.tag._eventHandlers)return;const n=e.tag.tag==="bodyAttrs"?t.defaultView:e.$el;Object.entries(e.tag._eventHandlers).forEach(([r,s])=>{const i=`${e.tag._d||e.tag._p}:${r}`,o=r.slice(2).toLowerCase(),l=`data-h-${o}`;if(a(e.id,i,()=>{}),e.$el.hasAttribute(l))return;e.$el.setAttribute(l,"");let f;const h=u=>{s(u),f==null||f.disconnect()};r in e.$el.dataset?h(new Event(r.replace("on",""))):Ph.includes(r)&&typeof MutationObserver<"u"?(f=new MutationObserver(u=>{u.some(v=>v.attributeName===`data-${r}`)&&(h(new Event(r.replace("on",""))),f==null||f.disconnect())}),f.observe(e.$el,{attributes:!0})):n.addEventListener(o,h),a(e.id,i,()=>{f==null||f.disconnect(),n.removeEventListener(o,h),e.$el.removeAttribute(l)})})}}}),vS=["link","style","script","noscript"],zS={hooks:{"tag:normalise":({tag:c})=>{c.key&&vS.includes(c.tag)&&(c.props["data-hid"]=c._h=Ta(c.key))}}},gS={hooks:{"tags:resolve":c=>{const e=t=>{var a;return(a=c.tags.find(n=>n._d===t))==null?void 0:a._p};for(const{prefix:t,offset:a}of sS)for(const n of c.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(t))){const r=e(n.tagPriority.replace(t,""));typeof r<"u"&&(n._p=r+a)}c.tags.sort((t,a)=>t._p-a._p).sort((t,a)=>N7(t)-N7(a))}}},CS={meta:"content",link:"href",htmlAttrs:"lang"},HS=c=>({hooks:{"tags:resolve":e=>{var i;const{tags:t}=e,a=(i=t.find(o=>o.tag==="title"))==null?void 0:i.textContent,n=t.findIndex(o=>o.tag==="templateParams"),r=n!==-1?t[n].props:{},s=r.separator||"|";delete r.separator,r.pageTitle=o7(r.pageTitle||a||"",r,s);for(const o of t.filter(l=>l.processTemplateParams!==!1)){const l=CS[o.tag];l&&typeof o.props[l]=="string"?o.props[l]=o7(o.props[l],r,s):(o.processTemplateParams===!0||["titleTemplate","title"].includes(o.tag))&&["innerHTML","textContent"].forEach(f=>{typeof o[f]=="string"&&(o[f]=o7(o[f],r,s))})}c._templateParams=r,c._separator=s,e.tags=t.filter(o=>o.tag!=="templateParams")}}}),MS={hooks:{"tags:resolve":c=>{const{tags:e}=c;let t=e.findIndex(n=>n.tag==="titleTemplate");const a=e.findIndex(n=>n.tag==="title");if(a!==-1&&t!==-1){const n=Hi(e[t].textContent,e[a].textContent);n!==null?e[a].textContent=n||e[a].textContent:delete e[a]}else if(t!==-1){const n=Hi(e[t].textContent);n!==null&&(e[t].textContent=n,e[t].tag="title",t=-1)}t!==-1&&delete e[t],c.tags=e.filter(Boolean)}}},VS={hooks:{"tags:afterResolve":function(c){for(const e of c.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Ih;function LS(c={}){const e=yS(c);return e.use(lS()),Ih=e}function Li(c,e){return!c||c==="server"&&e||c==="client"&&!e}function yS(c={}){const e=Sh();e.addHooks(c.hooks||{}),c.document=c.document||(cS?document:void 0);const t=!c.document,a=()=>{i.dirty=!0,e.callHook("entries:updated",i)};let n=0,r=[];const s=[],i={plugins:s,dirty:!1,resolvedOptions:c,hooks:e,headEntries(){return r},use(o){const l=typeof o=="function"?o(i):o;(!l.key||!s.some(f=>f.key===l.key))&&(s.push(l),Li(l.mode,t)&&e.addHooks(l.hooks||{}))},push(o,l){l==null||delete l.head;const f={_i:n++,input:o,...l};return Li(f.mode,t)&&(r.push(f),a()),{dispose(){r=r.filter(h=>h._i!==f._i),e.callHook("entries:updated",i),a()},patch(h){r=r.map(u=>(u._i===f._i&&(u.input=f.input=h),u)),a()}}},async resolveTags(){const o={tags:[],entries:[...r]};await e.callHook("entries:resolve",o);for(const l of o.entries){const f=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(f):f),l.resolvedInput)for(const h of await rS(l)){const u={tag:h,entry:l,resolvedOptions:i.resolvedOptions};await e.callHook("tag:normalise",u),o.tags.push(u.tag)}}return await e.callHook("tags:beforeResolve",o),await e.callHook("tags:resolve",o),await e.callHook("tags:afterResolve",o),o.tags},ssr:t};return[hS,uS,pS,zS,gS,HS,MS,VS,...(c==null?void 0:c.plugins)||[]].forEach(o=>i.use(o)),i.hooks.callHook("init",i),i}function _S(){return Ih}const bS=dh.startsWith("3");function xS(c){return typeof c=="function"?c():k1(c)}function Wc(c,e=""){if(c instanceof Promise)return c;const t=xS(c);return!c||!t?t:Array.isArray(t)?t.map(a=>Wc(a,e)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([a,n])=>a==="titleTemplate"||a.startsWith("on")?[a,k1(n)]:[a,Wc(n,a)])):t}const wS={hooks:{"entries:resolve":function(c){for(const e of c.entries)e.resolvedInput=Wc(e.input)}}},Dh="usehead";function NS(c){return{install(t){bS&&(t.config.globalProperties.$unhead=c,t.config.globalProperties.$head=c,t.provide(Dh,c))}}.install}function SS(c={}){c.domDelayFn=c.domDelayFn||(t=>L4(()=>setTimeout(()=>t(),0)));const e=LS(c);return e.use(wS),e.install=NS(e),e}const jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gc="__unhead_injection_handler__";function kS(c){jc[Gc]=c}function UH1(){if(Gc in jc)return jc[Gc]();const c=e2(Dh);return c||_S()}function AS(c){return{ctx:{table:c},matchAll:e=>Fh(e,c)}}function Oh(c){const e={};for(const t in c)e[t]=t==="dynamic"?new Map(Object.entries(c[t]).map(([a,n])=>[a,Oh(n)])):new Map(Object.entries(c[t]));return e}function TS(c){return AS(Oh(c))}function Fh(c,e){const t=[];for(const[n,r]of yi(e.wildcard))c.startsWith(n)&&t.push(r);for(const[n,r]of yi(e.dynamic))if(c.startsWith(n+"/")){const s="/"+c.slice(n.length).split("/").splice(2).join("/");t.push(...Fh(s,r))}const a=e.static.get(c);return a&&t.push(a),t.filter(Boolean)}function yi(c){return[...c.entries()].sort((e,t)=>e[0].length-t[0].length)}function Kc(c,e,t=".",a){if(!K9(e))return Kc(c,{},t,a);const n=Object.assign({},e);for(const r in c){if(r==="__proto__"||r==="constructor")continue;const s=c[r];s!=null&&(a&&a(n,r,s,t)||(Array.isArray(s)&&Array.isArray(n[r])?n[r]=[...s,...n[r]]:K9(s)&&K9(n[r])?n[r]=Kc(s,n[r],(t?`${t}.`:"")+r.toString(),a):n[r]=s))}return n}function K9(c){if(c===null||typeof c!="object")return!1;const e=Object.getPrototypeOf(c);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in c)&&!(Symbol.iterator in c)}function Bh(c){return(...e)=>e.reduce((t,a)=>Kc(t,a,"",c),{})}const Uh=Bh(),ES=Bh((c,e,t)=>{if(c[e]!==void 0&&typeof t=="function")return c[e]=t(c[e]),!0});function PS(c,e){try{return e in c}catch{return!1}}var RS=Object.defineProperty,IS=(c,e,t)=>e in c?RS(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t,k4=(c,e,t)=>(IS(c,typeof e!="symbol"?e+"":e,t),t);class Yc extends Error{constructor(e,t={}){super(e,t),k4(this,"statusCode",500),k4(this,"fatal",!1),k4(this,"unhandled",!1),k4(this,"statusMessage"),k4(this,"data"),k4(this,"cause"),t.cause&&!this.cause&&(this.cause=t.cause)}toJSON(){const e={message:this.message,statusCode:Xc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=qh(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}k4(Yc,"__h3_error__",!0);function Zc(c){if(typeof c=="string")return new Yc(c);if(DS(c))return c;const e=new Yc(c.message??c.statusMessage??"",{cause:c.cause||c});if(PS(c,"stack"))try{Object.defineProperty(e,"stack",{get(){return c.stack}})}catch{try{e.stack=c.stack}catch{}}if(c.data&&(e.data=c.data),c.statusCode?e.statusCode=Xc(c.statusCode,e.statusCode):c.status&&(e.statusCode=Xc(c.status,e.statusCode)),c.statusMessage?e.statusMessage=c.statusMessage:c.statusText&&(e.statusMessage=c.statusText),e.statusMessage){const t=e.statusMessage;qh(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return c.fatal!==void 0&&(e.fatal=c.fatal),c.unhandled!==void 0&&(e.unhandled=c.unhandled),e}function DS(c){var e;return((e=c==null?void 0:c.constructor)==null?void 0:e.__h3_error__)===!0}const OS=/[^\u0009\u0020-\u007E]/g;function qh(c=""){return c.replace(OS,"")}function Xc(c,e=200){return!c||(typeof c=="string"&&(c=Number.parseInt(c,10)),c<100||c>999)?e:c}const $h=Symbol("layout-meta"),Z8=Symbol("route"),Ne=()=>Wb(I1().payload,"error"),y6=c=>{const e=Ea(c);try{const t=I1(),a=Ne();t.hooks.callHook("app:error",e),a.value=a.value||e}catch{throw e}return e},FS=async(c={})=>{const e=I1(),t=Ne();e.callHook("app:error:cleared",c),c.redirect&&await h6().replace(c.redirect),t.value=null},BS=c=>!!(c&&typeof c=="object"&&"__nuxt_error"in c),Ea=c=>{const e=Zc(c);return e.__nuxt_error=!0,e},h6=()=>{var c;return(c=I1())==null?void 0:c.$router},Pa=()=>ya()?e2(Z8,I1()._route):I1()._route;/*! @__NO_SIDE_EFFECTS__ */const US=()=>{try{if(I1()._processingMiddleware)return!0}catch{return!0}return!1},qH1=(c,e)=>{c||(c="/");const t=typeof c=="string"?c:_h(c.path||"/",c.query||{})+(c.hash||"");if(e!=null&&e.open){{const{target:i="_blank",windowFeatures:o={}}=e.open,l=Object.entries(o).filter(([f,h])=>h!==void 0).map(([f,h])=>`${f.toLowerCase()}=${h}`).join(", ");open(t,i,l)}return Promise.resolve()}const a=(e==null?void 0:e.external)||K8(t,{acceptRelative:!0});if(a){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const i=xe(t).protocol;if(i&&Kw(i))throw new Error(`Cannot navigate to a URL with '${i}' protocol.`)}const n=US();if(!a&&n)return c;const r=h6(),s=I1();return a?(s._scope.stop(),e!=null&&e.replace?location.replace(t):location.href=t,n?s.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?r.replace(c):r.push(c)},qS={nuxt:{buildId:"fdcfe8d7-713e-4d0c-b759-114ec6090302"}},$S=ES(qS);function WS(){const c=I1();return c._appConfig||(c._appConfig=g3($S)),c._appConfig}const jS=!1,Qc=!1,GS=!1,$H1={componentName:"NuxtLink"},KS="#__nuxt";let l7,Wh;function YS(){var e;const c=(e=WS().nuxt)==null?void 0:e.buildId;return l7=$fetch(ka(`builds/meta/${c}.json`)),l7.then(t=>{Wh=TS(t.matcher)}),l7}function Se(){return l7||YS()}async function jh(c){return await Se(),Uh({},...Wh.matchAll(c).reverse())}function _i(c,e={}){const t=ZS(c,e),a=I1(),n=a._payloadCache=a._payloadCache||{};return t in n||(n[t]=XS(c).then(r=>r?Gh(t).then(s=>s||(delete n[t],null)):(n[t]=null,null))),n[t]}const bi="json";function ZS(c,e={}){const t=new URL(c,"http://localhost");if(t.search)throw new Error("Payload URL cannot contain search params: "+c);if(t.host!=="localhost"||K8(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+c);const a=e.hash||(e.fresh?Date.now():"");return Y8(we().app.baseURL,t.pathname,a?`_payload.${a}.${bi}`:`_payload.${bi}`)}async function Gh(c){const e=fetch(c).then(t=>t.text().then(Kh));try{return await e}catch(t){console.warn("[nuxt] Cannot load payload ",c,t)}return null}async function XS(c=Pa().path){if((await Se()).prerendered.includes(c))return!0;const t=await jh(c);return!!t.prerender&&!t.redirect}let D5=null;async function QS(){if(D5)return D5;const c=document.getElementById("__NUXT_DATA__");if(!c)return{};const e=Kh(c.textContent||""),t=c.dataset.src?await Gh(c.dataset.src):void 0;return D5={...e,...t,...window.__NUXT__},D5}function Kh(c){return YN(c,I1()._payloadRevivers)}function f7(c,e){I1()._payloadRevivers[c]=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(c,e){if(!c)throw u0(e)},u0=function(c){return new Error("Firebase Database ("+Yh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=function(c){const e=[];let t=0;for(let a=0;a<c.length;a++){let n=c.charCodeAt(a);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&a+1<c.length&&(c.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(c.charCodeAt(++a)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},JS=function(c){const e=[];let t=0,a=0;for(;t<c.length;){const n=c[t++];if(n<128)e[a++]=String.fromCharCode(n);else if(n>191&&n<224){const r=c[t++];e[a++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=c[t++],s=c[t++],i=c[t++],o=((n&7)<<18|(r&63)<<12|(s&63)<<6|i&63)-65536;e[a++]=String.fromCharCode(55296+(o>>10)),e[a++]=String.fromCharCode(56320+(o&1023))}else{const r=c[t++],s=c[t++];e[a++]=String.fromCharCode((n&15)<<12|(r&63)<<6|s&63)}}return e.join("")},ke={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<c.length;n+=3){const r=c[n],s=n+1<c.length,i=s?c[n+1]:0,o=n+2<c.length,l=o?c[n+2]:0,f=r>>2,h=(r&3)<<4|i>>4;let u=(i&15)<<2|l>>6,d=l&63;o||(d=64,s||(u=64)),a.push(t[f],t[h],t[u],t[d])}return a.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(Zh(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):JS(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<c.length;){const r=t[c.charAt(n++)],i=n<c.length?t[c.charAt(n)]:0;++n;const l=n<c.length?t[c.charAt(n)]:64;++n;const h=n<c.length?t[c.charAt(n)]:64;if(++n,r==null||i==null||l==null||h==null)throw new ek;const u=r<<2|i>>4;if(a.push(u),l!==64){const d=i<<4&240|l>>2;if(a.push(d),h!==64){const v=l<<6&192|h;a.push(v)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}};class ek extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xh=function(c){const e=Zh(c);return ke.encodeByteArray(e,!0)},S7=function(c){return Xh(c).replace(/\./g,"")},k7=function(c){try{return ke.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(c){return Qh(void 0,c)}function Qh(c,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:c===void 0&&(c={});break;case Array:c=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!tk(t)||(c[t]=Qh(c[t],e[t]));return c}function tk(c){return c!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=()=>ak().__FIREBASE_DEFAULTS__,rk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const c={}.__FIREBASE_DEFAULTS__;if(c)return JSON.parse(c)},sk=()=>{if(typeof document>"u")return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=c&&k7(c[1]);return e&&JSON.parse(e)},Ra=()=>{try{return nk()||rk()||sk()}catch(c){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`);return}},Jh=c=>{var e,t;return(t=(e=Ra())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[c]},eu=c=>{const e=Jh(c);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},cu=()=>{var c;return(c=Ra())===null||c===void 0?void 0:c.config},tu=c=>{var e;return(e=Ra())===null||e===void 0?void 0:e[`_${c}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",n=c.iat||0,r=c.sub||c.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},c),i="";return[S7(JSON.stringify(t)),S7(JSON.stringify(s)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u2())}function ik(){const c=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof c=="object"&&c.id!==void 0}function nu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ok(){const c=u2();return c.indexOf("MSIE ")>=0||c.indexOf("Trident/")>=0}function ru(){return Yh.NODE_ADMIN===!0}function su(){try{return typeof indexedDB=="object"}catch{return!1}}function lk(){return new Promise((c,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(a),c(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var r;e(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="FirebaseError";class M3 extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=fk,Object.setPrototypeOf(this,M3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d0.prototype.create)}}class d0{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?hk(r,a):"Error",i=`${this.serviceName}: ${s} (${n}).`;return new M3(n,i,a)}}function hk(c,e){return c.replace(uk,(t,a)=>{const n=e[a];return n!=null?String(n):`<${a}?>`})}const uk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z8(c){return JSON.parse(c)}function G1(c){return JSON.stringify(c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=function(c){let e={},t={},a={},n="";try{const r=c.split(".");e=z8(k7(r[0])||""),t=z8(k7(r[1])||""),n=r[2],a=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:a,signature:n}},dk=function(c){const e=iu(c),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},mk=function(c){const e=iu(c).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V3(c,e){return Object.prototype.hasOwnProperty.call(c,e)}function X6(c,e){if(Object.prototype.hasOwnProperty.call(c,e))return c[e]}function Jc(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function A7(c,e,t){const a={};for(const n in c)Object.prototype.hasOwnProperty.call(c,n)&&(a[n]=e.call(t,c[n],n,c));return a}function T7(c,e){if(c===e)return!0;const t=Object.keys(c),a=Object.keys(e);for(const n of t){if(!a.includes(n))return!1;const r=c[n],s=e[n];if(xi(r)&&xi(s)){if(!T7(r,s))return!1}else if(r!==s)return!1}for(const n of a)if(!t.includes(n))return!1;return!0}function xi(c){return c!==null&&typeof c=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(c){const e=[];for(const[t,a]of Object.entries(c))Array.isArray(a)?a.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function I0(c){const e={};return c.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,r]=a.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function D0(c){const e=c.indexOf("?");if(!e)return"";const t=c.indexOf("#",e);return c.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const a=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)a[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)a[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=a[h-3]^a[h-8]^a[h-14]^a[h-16];a[h]=(u<<1|u>>>31)&4294967295}let n=this.chain_[0],r=this.chain_[1],s=this.chain_[2],i=this.chain_[3],o=this.chain_[4],l,f;for(let h=0;h<80;h++){h<40?h<20?(l=i^r&(s^i),f=1518500249):(l=r^s^i,f=1859775393):h<60?(l=r&s|i&(r|s),f=2400959708):(l=r^s^i,f=3395469782);const u=(n<<5|n>>>27)+l+o+f+a[h]&4294967295;o=i,i=s,s=(r<<30|r>>>2)&4294967295,r=n,n=u}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+i&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const a=t-this.blockSize;let n=0;const r=this.buf_;let s=this.inbuf_;for(;n<t;){if(s===0)for(;n<=a;)this.compress_(e,n),n+=this.blockSize;if(typeof e=="string"){for(;n<t;)if(r[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}else for(;n<t;)if(r[s]=e[n],++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=t&255,t/=256;this.compress_(this.buf_);let a=0;for(let n=0;n<5;n++)for(let r=24;r>=0;r-=8)e[a]=this.chain_[n]>>r&255,++a;return e}}function vk(c,e){const t=new zk(c,e);return t.subscribe.bind(t)}class zk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let n;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");gk(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:a},n.next===void 0&&(n.next=Y9),n.error===void 0&&(n.error=Y9),n.complete===void 0&&(n.complete=Y9);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gk(c,e){if(typeof c!="object"||c===null)return!1;for(const t of e)if(t in c&&typeof c[t]=="function")return!0;return!1}function Y9(){}function Ae(c,e){return`${c} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=function(c){const e=[];let t=0;for(let a=0;a<c.length;a++){let n=c.charCodeAt(a);if(n>=55296&&n<=56319){const r=n-55296;a++,P(a<c.length,"Surrogate pair missing trail surrogate.");const s=c.charCodeAt(a)-56320;n=65536+(r<<10)+s}n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):n<65536?(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},Te=function(c){let e=0;for(let t=0;t<c.length;t++){const a=c.charCodeAt(t);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(c){return c&&c._delegate?c._delegate:c}class e3{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new e6;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vk(e))try{this.getOrInitializeService({instanceIdentifier:A4})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:n});a.resolve(r)}catch{}}}}clearInstance(e=A4){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=A4){return this.instances.has(e)}getOptions(e=A4){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[r,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);a===i&&s.resolve(n)}return n}onInit(e,t){var a;const n=this.normalizeInstanceIdentifier(t),r=(a=this.onInitCallbacks.get(n))!==null&&a!==void 0?a:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const n of a)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Mk(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=A4){return this.component?this.component.multipleInstances?e:A4:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mk(c){return c===A4?void 0:c}function Vk(c){return c.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v1;(function(c){c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT"})(v1||(v1={}));const yk={debug:v1.DEBUG,verbose:v1.VERBOSE,info:v1.INFO,warn:v1.WARN,error:v1.ERROR,silent:v1.SILENT},_k=v1.INFO,bk={[v1.DEBUG]:"log",[v1.VERBOSE]:"log",[v1.INFO]:"info",[v1.WARN]:"warn",[v1.ERROR]:"error"},xk=(c,e,...t)=>{if(e<c.logLevel)return;const a=new Date().toISOString(),n=bk[e];if(n)console[n](`[${a}]  ${c.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class X8{constructor(e){this.name=e,this._logLevel=_k,this._logHandler=xk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v1))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v1.DEBUG,...e),this._logHandler(this,v1.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v1.VERBOSE,...e),this._logHandler(this,v1.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v1.INFO,...e),this._logHandler(this,v1.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v1.WARN,...e),this._logHandler(this,v1.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v1.ERROR,...e),this._logHandler(this,v1.ERROR,...e)}}const wk=(c,e)=>e.some(t=>c instanceof t);let wi,Ni;function Nk(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sk(){return Ni||(Ni=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ou=new WeakMap,et=new WeakMap,lu=new WeakMap,Z9=new WeakMap,Da=new WeakMap;function kk(c){const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("success",r),c.removeEventListener("error",s)},r=()=>{t(u4(c.result)),n()},s=()=>{a(c.error),n()};c.addEventListener("success",r),c.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&ou.set(t,c)}).catch(()=>{}),Da.set(e,c),e}function Ak(c){if(et.has(c))return;const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("complete",r),c.removeEventListener("error",s),c.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{a(c.error||new DOMException("AbortError","AbortError")),n()};c.addEventListener("complete",r),c.addEventListener("error",s),c.addEventListener("abort",s)});et.set(c,e)}let ct={get(c,e,t){if(c instanceof IDBTransaction){if(e==="done")return et.get(c);if(e==="objectStoreNames")return c.objectStoreNames||lu.get(c);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return u4(c[e])},set(c,e,t){return c[e]=t,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function Tk(c){ct=c(ct)}function Ek(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=c.call(X9(this),e,...t);return lu.set(a,e.sort?e.sort():[e]),u4(a)}:Sk().includes(c)?function(...e){return c.apply(X9(this),e),u4(ou.get(this))}:function(...e){return u4(c.apply(X9(this),e))}}function Pk(c){return typeof c=="function"?Ek(c):(c instanceof IDBTransaction&&Ak(c),wk(c,Nk())?new Proxy(c,ct):c)}function u4(c){if(c instanceof IDBRequest)return kk(c);if(Z9.has(c))return Z9.get(c);const e=Pk(c);return e!==c&&(Z9.set(c,e),Da.set(e,c)),e}const X9=c=>Da.get(c);function Rk(c,e,{blocked:t,upgrade:a,blocking:n,terminated:r}={}){const s=indexedDB.open(c,e),i=u4(s);return a&&s.addEventListener("upgradeneeded",o=>{a(u4(s.result),o.oldVersion,o.newVersion,u4(s.transaction),o)}),t&&s.addEventListener("blocked",o=>t(o.oldVersion,o.newVersion,o)),i.then(o=>{r&&o.addEventListener("close",()=>r()),n&&o.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const Ik=["get","getKey","getAll","getAllKeys","count"],Dk=["put","add","delete","clear"],Q9=new Map;function Si(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(Q9.get(e))return Q9.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,n=Dk.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(n||Ik.includes(t)))return;const r=async function(s,...i){const o=this.transaction(s,n?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[t](...i),n&&o.done]))[0]};return Q9.set(e,r),r}Tk(c=>({...c,get:(e,t,a)=>Si(e,t)||c.get(e,t,a),has:(e,t)=>!!Si(e,t)||c.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fk(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function Fk(c){const e=c.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tt="@firebase/app",ki="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6=new X8("@firebase/app"),Bk="@firebase/app-compat",Uk="@firebase/analytics-compat",qk="@firebase/analytics",$k="@firebase/app-check-compat",Wk="@firebase/app-check",jk="@firebase/auth",Gk="@firebase/auth-compat",Kk="@firebase/database",Yk="@firebase/database-compat",Zk="@firebase/functions",Xk="@firebase/functions-compat",Qk="@firebase/installations",Jk="@firebase/installations-compat",eA="@firebase/messaging",cA="@firebase/messaging-compat",tA="@firebase/performance",aA="@firebase/performance-compat",nA="@firebase/remote-config",rA="@firebase/remote-config-compat",sA="@firebase/storage",iA="@firebase/storage-compat",oA="@firebase/firestore",lA="@firebase/firestore-compat",fA="firebase",hA="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]",uA={[tt]:"fire-core",[Bk]:"fire-core-compat",[qk]:"fire-analytics",[Uk]:"fire-analytics-compat",[Wk]:"fire-app-check",[$k]:"fire-app-check-compat",[jk]:"fire-auth",[Gk]:"fire-auth-compat",[Kk]:"fire-rtdb",[Yk]:"fire-rtdb-compat",[Zk]:"fire-fn",[Xk]:"fire-fn-compat",[Qk]:"fire-iid",[Jk]:"fire-iid-compat",[eA]:"fire-fcm",[cA]:"fire-fcm-compat",[tA]:"fire-perf",[aA]:"fire-perf-compat",[nA]:"fire-rc",[rA]:"fire-rc-compat",[sA]:"fire-gcs",[iA]:"fire-gcs-compat",[oA]:"fire-fst",[lA]:"fire-fst-compat","fire-js":"fire-js",[fA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E7=new Map,nt=new Map;function dA(c,e){try{c.container.addComponent(e)}catch(t){c6.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,t)}}function C3(c){const e=c.name;if(nt.has(e))return c6.debug(`There were multiple attempts to register component ${e}.`),!1;nt.set(e,c);for(const t of E7.values())dA(t,c);return!0}function Ee(c,e){const t=c.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),c.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},d4=new d0("app","Firebase",mA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new e3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw d4.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4=hA;function fu(c,e={}){let t=c;typeof e!="object"&&(e={name:e});const a=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),n=a.name;if(typeof n!="string"||!n)throw d4.create("bad-app-name",{appName:String(n)});if(t||(t=cu()),!t)throw d4.create("no-options");const r=E7.get(n);if(r){if(T7(t,r.options)&&T7(a,r.config))return r;throw d4.create("duplicate-app",{appName:n})}const s=new Lk(n);for(const o of nt.values())s.addComponent(o);const i=new pA(t,a,s);return E7.set(n,i),i}function Pe(c=at){const e=E7.get(c);if(!e&&c===at&&cu())return fu();if(!e)throw d4.create("no-app",{appName:c});return e}function T2(c,e,t){var a;let n=(a=uA[c])!==null&&a!==void 0?a:c;t&&(n+=`-${t}`);const r=n.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const i=[`Unable to register library "${n}" with version "${e}":`];r&&i.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&i.push("and"),s&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),c6.warn(i.join(" "));return}C3(new e3(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="firebase-heartbeat-database",zA=1,g8="firebase-heartbeat-store";let J9=null;function hu(){return J9||(J9=Rk(vA,zA,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(g8)}}}).catch(c=>{throw d4.create("idb-open",{originalErrorMessage:c.message})})),J9}async function gA(c){try{return await(await hu()).transaction(g8).objectStore(g8).get(uu(c))}catch(e){if(e instanceof M3)c6.warn(e.message);else{const t=d4.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});c6.warn(t.message)}}}async function Ai(c,e){try{const a=(await hu()).transaction(g8,"readwrite");await a.objectStore(g8).put(e,uu(c)),await a.done}catch(t){if(t instanceof M3)c6.warn(t.message);else{const a=d4.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});c6.warn(a.message)}}}function uu(c){return`${c.name}!${c.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=1024,HA=30*24*60*60*1e3;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new LA(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ti();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=HA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ti(),{heartbeatsToSend:a,unsentEntries:n}=VA(this._heartbeatsCache.heartbeats),r=S7(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ti(){return new Date().toISOString().substring(0,10)}function VA(c,e=CA){const t=[];let a=c.slice();for(const n of c){const r=t.find(s=>s.agent===n.agent);if(r){if(r.dates.push(n.date),Ei(t)>e){r.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Ei(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class LA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return su()?lk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ei(c){return S7(JSON.stringify({version:2,heartbeats:c})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(c){C3(new e3("platform-logger",e=>new Ok(e),"PRIVATE")),C3(new e3("heartbeat",e=>new MA(e),"PRIVATE")),T2(tt,ki,c),T2(tt,ki,"esm2017"),T2("fire-js","")}yA("");var _A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Oa=Oa||{},a1=_A||self;function Re(c){var e=typeof c;return e=e!="object"?e:c?Array.isArray(c)?"array":e:"null",e=="array"||e=="object"&&typeof c.length=="number"}function Q8(c){var e=typeof c;return e=="object"&&c!=null||e=="function"}function bA(c){return Object.prototype.hasOwnProperty.call(c,ec)&&c[ec]||(c[ec]=++xA)}var ec="closure_uid_"+(1e9*Math.random()>>>0),xA=0;function wA(c,e,t){return c.call.apply(c.bind,arguments)}function NA(c,e,t){if(!c)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),c.apply(e,n)}}return function(){return c.apply(e,arguments)}}function f2(c,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f2=wA:f2=NA,f2.apply(null,arguments)}function O5(c,e){var t=Array.prototype.slice.call(arguments,1);return function(){var a=t.slice();return a.push.apply(a,arguments),c.apply(this,a)}}function t2(c,e){function t(){}t.prototype=e.prototype,c.$=e.prototype,c.prototype=new t,c.prototype.constructor=c,c.ac=function(a,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(a,s)}}function _4(){this.s=this.s,this.o=this.o}var SA=0;_4.prototype.s=!1;_4.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SA!=0)&&bA(this)};_4.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const du=Array.prototype.indexOf?function(c,e){return Array.prototype.indexOf.call(c,e,void 0)}:function(c,e){if(typeof c=="string")return typeof e!="string"||e.length!=1?-1:c.indexOf(e,0);for(let t=0;t<c.length;t++)if(t in c&&c[t]===e)return t;return-1};function Fa(c){const e=c.length;if(0<e){const t=Array(e);for(let a=0;a<e;a++)t[a]=c[a];return t}return[]}function Pi(c,e){for(let t=1;t<arguments.length;t++){const a=arguments[t];if(Re(a)){const n=c.length||0,r=a.length||0;c.length=n+r;for(let s=0;s<r;s++)c[n+s]=a[s]}else c.push(a)}}function h2(c,e){this.type=c,this.g=this.target=e,this.defaultPrevented=!1}h2.prototype.h=function(){this.defaultPrevented=!0};var kA=function(){if(!a1.addEventListener||!Object.defineProperty)return!1;var c=!1,e=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const t=()=>{};a1.addEventListener("test",t,e),a1.removeEventListener("test",t,e)}catch{}return c}();function C8(c){return/^[\s\xa0]*$/.test(c)}function Ie(){var c=a1.navigator;return c&&(c=c.userAgent)?c:""}function f3(c){return Ie().indexOf(c)!=-1}function Ba(c){return Ba[" "](c),c}Ba[" "]=function(){};function AA(c,e){var t=_T;return Object.prototype.hasOwnProperty.call(t,c)?t[c]:t[c]=e(c)}var TA=f3("Opera"),H8=f3("Trident")||f3("MSIE"),mu=f3("Edge"),rt=mu||H8,pu=f3("Gecko")&&!(Ie().toLowerCase().indexOf("webkit")!=-1&&!f3("Edge"))&&!(f3("Trident")||f3("MSIE"))&&!f3("Edge"),EA=Ie().toLowerCase().indexOf("webkit")!=-1&&!f3("Edge");function vu(){var c=a1.document;return c?c.documentMode:void 0}e:{var Ri="",cc=function(){var c=Ie();if(pu)return/rv:([^\);]+)(\)|;)/.exec(c);if(mu)return/Edge\/([\d\.]+)/.exec(c);if(H8)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c);if(EA)return/WebKit\/(\S+)/.exec(c);if(TA)return/(?:Version)[ \/]?(\S+)/.exec(c)}();if(cc&&(Ri=cc?cc[1]:""),H8){var Ii=vu();if(Ii!=null&&Ii>parseFloat(Ri))break e}}a1.document&&H8&&vu();function M8(c,e){if(h2.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var t=this.type=c.type,a=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=e,e=c.relatedTarget){if(pu){e:{try{Ba(e.nodeName);var n=!0;break e}catch{}n=!1}n||(e=null)}}else t=="mouseover"?e=c.fromElement:t=="mouseout"&&(e=c.toElement);this.relatedTarget=e,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:PA[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&M8.$.h.call(this)}}t2(M8,h2);var PA={2:"touch",3:"pen",4:"mouse"};M8.prototype.h=function(){M8.$.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var J8="closure_listenable_"+(1e6*Math.random()|0),RA=0;function IA(c,e,t,a,n){this.listener=c,this.proxy=null,this.src=e,this.type=t,this.capture=!!a,this.la=n,this.key=++RA,this.fa=this.ia=!1}function De(c){c.fa=!0,c.listener=null,c.proxy=null,c.src=null,c.la=null}function Ua(c,e,t){for(const a in c)e.call(t,c[a],a,c)}function DA(c,e){for(const t in c)e.call(void 0,c[t],t,c)}function zu(c){const e={};for(const t in c)e[t]=c[t];return e}const Di="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gu(c,e){let t,a;for(let n=1;n<arguments.length;n++){a=arguments[n];for(t in a)c[t]=a[t];for(let r=0;r<Di.length;r++)t=Di[r],Object.prototype.hasOwnProperty.call(a,t)&&(c[t]=a[t])}}function Oe(c){this.src=c,this.g={},this.h=0}Oe.prototype.add=function(c,e,t,a,n){var r=c.toString();c=this.g[r],c||(c=this.g[r]=[],this.h++);var s=it(c,e,a,n);return-1<s?(e=c[s],t||(e.ia=!1)):(e=new IA(e,this.src,r,!!a,n),e.ia=t,c.push(e)),e};function st(c,e){var t=e.type;if(t in c.g){var a=c.g[t],n=du(a,e),r;(r=0<=n)&&Array.prototype.splice.call(a,n,1),r&&(De(e),c.g[t].length==0&&(delete c.g[t],c.h--))}}function it(c,e,t,a){for(var n=0;n<c.length;++n){var r=c[n];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==a)return n}return-1}var qa="closure_lm_"+(1e6*Math.random()|0),tc={};function Cu(c,e,t,a,n){if(a&&a.once)return Mu(c,e,t,a,n);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Cu(c,e[r],t,a,n);return null}return t=ja(t),c&&c[J8]?c.O(e,t,Q8(a)?!!a.capture:!!a,n):Hu(c,e,t,!1,a,n)}function Hu(c,e,t,a,n,r){if(!e)throw Error("Invalid event type");var s=Q8(n)?!!n.capture:!!n,i=Wa(c);if(i||(c[qa]=i=new Oe(c)),t=i.add(e,t,a,s,r),t.proxy)return t;if(a=OA(),t.proxy=a,a.src=c,a.listener=t,c.addEventListener)kA||(n=s),n===void 0&&(n=!1),c.addEventListener(e.toString(),a,n);else if(c.attachEvent)c.attachEvent(Lu(e.toString()),a);else if(c.addListener&&c.removeListener)c.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return t}function OA(){function c(t){return e.call(c.src,c.listener,t)}const e=FA;return c}function Mu(c,e,t,a,n){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Mu(c,e[r],t,a,n);return null}return t=ja(t),c&&c[J8]?c.P(e,t,Q8(a)?!!a.capture:!!a,n):Hu(c,e,t,!0,a,n)}function Vu(c,e,t,a,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)Vu(c,e[r],t,a,n);else a=Q8(a)?!!a.capture:!!a,t=ja(t),c&&c[J8]?(c=c.i,e=String(e).toString(),e in c.g&&(r=c.g[e],t=it(r,t,a,n),-1<t&&(De(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete c.g[e],c.h--)))):c&&(c=Wa(c))&&(e=c.g[e.toString()],c=-1,e&&(c=it(e,t,a,n)),(t=-1<c?e[c]:null)&&$a(t))}function $a(c){if(typeof c!="number"&&c&&!c.fa){var e=c.src;if(e&&e[J8])st(e.i,c);else{var t=c.type,a=c.proxy;e.removeEventListener?e.removeEventListener(t,a,c.capture):e.detachEvent?e.detachEvent(Lu(t),a):e.addListener&&e.removeListener&&e.removeListener(a),(t=Wa(e))?(st(t,c),t.h==0&&(t.src=null,e[qa]=null)):De(c)}}}function Lu(c){return c in tc?tc[c]:tc[c]="on"+c}function FA(c,e){if(c.fa)c=!0;else{e=new M8(e,this);var t=c.listener,a=c.la||c.src;c.ia&&$a(c),c=t.call(a,e)}return c}function Wa(c){return c=c[qa],c instanceof Oe?c:null}var ac="__closure_events_fn_"+(1e9*Math.random()>>>0);function ja(c){return typeof c=="function"?c:(c[ac]||(c[ac]=function(e){return c.handleEvent(e)}),c[ac])}function c2(){_4.call(this),this.i=new Oe(this),this.S=this,this.J=null}t2(c2,_4);c2.prototype[J8]=!0;c2.prototype.removeEventListener=function(c,e,t,a){Vu(this,c,e,t,a)};function s2(c,e){var t,a=c.J;if(a)for(t=[];a;a=a.J)t.push(a);if(c=c.S,a=e.type||e,typeof e=="string")e=new h2(e,c);else if(e instanceof h2)e.target=e.target||c;else{var n=e;e=new h2(a,c),gu(e,n)}if(n=!0,t)for(var r=t.length-1;0<=r;r--){var s=e.g=t[r];n=F5(s,a,!0,e)&&n}if(s=e.g=c,n=F5(s,a,!0,e)&&n,n=F5(s,a,!1,e)&&n,t)for(r=0;r<t.length;r++)s=e.g=t[r],n=F5(s,a,!1,e)&&n}c2.prototype.N=function(){if(c2.$.N.call(this),this.i){var c=this.i,e;for(e in c.g){for(var t=c.g[e],a=0;a<t.length;a++)De(t[a]);delete c.g[e],c.h--}}this.J=null};c2.prototype.O=function(c,e,t,a){return this.i.add(String(c),e,!1,t,a)};c2.prototype.P=function(c,e,t,a){return this.i.add(String(c),e,!0,t,a)};function F5(c,e,t,a){if(e=c.i.g[String(e)],!e)return!0;e=e.concat();for(var n=!0,r=0;r<e.length;++r){var s=e[r];if(s&&!s.fa&&s.capture==t){var i=s.listener,o=s.la||s.src;s.ia&&st(c.i,s),n=i.call(o,a)!==!1&&n}}return n&&!a.defaultPrevented}var Ga=a1.JSON.stringify;class BA{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UA(){var c=Ka;let e=null;return c.g&&(e=c.g,c.g=c.g.next,c.g||(c.h=null),e.next=null),e}class qA{constructor(){this.h=this.g=null}add(e,t){const a=yu.get();a.set(e,t),this.h?this.h.next=a:this.g=a,this.h=a}}var yu=new BA(()=>new $A,c=>c.reset());class $A{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function WA(c){var e=1;c=c.split(":");const t=[];for(;0<e&&c.length;)t.push(c.shift()),e--;return c.length&&t.push(c.join(":")),t}function jA(c){a1.setTimeout(()=>{throw c},0)}let V8,L8=!1,Ka=new qA,_u=()=>{const c=a1.Promise.resolve(void 0);V8=()=>{c.then(GA)}};var GA=()=>{for(var c;c=UA();){try{c.h.call(c.g)}catch(t){jA(t)}var e=yu;e.j(c),100>e.h&&(e.h++,c.next=e.g,e.g=c)}L8=!1};function Fe(c,e){c2.call(this),this.h=c||1,this.g=e||a1,this.j=f2(this.qb,this),this.l=Date.now()}t2(Fe,c2);F=Fe.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var c=Date.now()-this.l;0<c&&c<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-c):(this.T&&(this.g.clearTimeout(this.T),this.T=null),s2(this,"tick"),this.ga&&(Ya(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ya(c){c.ga=!1,c.T&&(c.g.clearTimeout(c.T),c.T=null)}F.N=function(){Fe.$.N.call(this),Ya(this),delete this.g};function Za(c,e,t){if(typeof c=="function")t&&(c=f2(c,t));else if(c&&typeof c.handleEvent=="function")c=f2(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:a1.setTimeout(c,e||0)}function bu(c){c.g=Za(()=>{c.g=null,c.i&&(c.i=!1,bu(c))},c.j);const e=c.h;c.h=null,c.m.apply(null,e)}class KA extends _4{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bu(this)}N(){super.N(),this.g&&(a1.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function y8(c){_4.call(this),this.h=c,this.g={}}t2(y8,_4);var Oi=[];function xu(c,e,t,a){Array.isArray(t)||(t&&(Oi[0]=t.toString()),t=Oi);for(var n=0;n<t.length;n++){var r=Cu(e,t[n],a||c.handleEvent,!1,c.h||c);if(!r)break;c.g[r.key]=r}}function wu(c){Ua(c.g,function(e,t){this.g.hasOwnProperty(t)&&$a(e)},c),c.g={}}y8.prototype.N=function(){y8.$.N.call(this),wu(this)};y8.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Be(){this.g=!0}Be.prototype.Ea=function(){this.g=!1};function YA(c,e,t,a,n,r){c.info(function(){if(c.g)if(r)for(var s="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var h=f.split("_");s=2<=h.length&&h[1]=="type"?s+(f+"="+l+"&"):s+(f+"=redacted&")}}else s=null;else s=r;return"XMLHTTP REQ ("+a+") [attempt "+n+"]: "+e+`
`+t+`
`+s})}function ZA(c,e,t,a,n,r,s){c.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+n+"]: "+e+`
`+t+`
`+r+" "+s})}function _6(c,e,t,a){c.info(function(){return"XMLHTTP TEXT ("+e+"): "+QA(c,t)+(a?" "+a:"")})}function XA(c,e){c.info(function(){return"TIMEOUT: "+e})}Be.prototype.info=function(){};function QA(c,e){if(!c.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(c=0;c<t.length;c++)if(Array.isArray(t[c])){var a=t[c];if(!(2>a.length)){var n=a[1];if(Array.isArray(n)&&!(1>n.length)){var r=n[0];if(r!="noop"&&r!="stop"&&r!="close")for(var s=1;s<n.length;s++)n[s]=""}}}}return Ga(t)}catch{return e}}var p0={},Fi=null;function Xa(){return Fi=Fi||new c2}p0.Ta="serverreachability";function Nu(c){h2.call(this,p0.Ta,c)}t2(Nu,h2);function _8(c){const e=Xa();s2(e,new Nu(e))}p0.STAT_EVENT="statevent";function Su(c,e){h2.call(this,p0.STAT_EVENT,c),this.stat=e}t2(Su,h2);function v2(c){const e=Xa();s2(e,new Su(e,c))}p0.Ua="timingevent";function ku(c,e){h2.call(this,p0.Ua,c),this.size=e}t2(ku,h2);function e5(c,e){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a1.setTimeout(function(){c()},e)}var Qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},JA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ja(){}Ja.prototype.h=null;function Bi(c){return c.h||(c.h=c.i())}function eT(){}var c5={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function en(){h2.call(this,"d")}t2(en,h2);function cn(){h2.call(this,"c")}t2(cn,h2);var ot;function Ue(){}t2(Ue,Ja);Ue.prototype.g=function(){return new XMLHttpRequest};Ue.prototype.i=function(){return{}};ot=new Ue;function t5(c,e,t,a){this.l=c,this.j=e,this.m=t,this.W=a||1,this.U=new y8(this),this.P=cT,c=rt?125:void 0,this.V=new Fe(c),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var cT=45e3,Tu={},lt={};F=t5.prototype;F.setTimeout=function(c){this.P=c};function ft(c,e,t){c.L=1,c.A=$e(P3(e)),c.u=t,c.S=!0,Eu(c,null)}function Eu(c,e){c.G=Date.now(),a5(c),c.B=P3(c.A);var t=c.B,a=c.W;Array.isArray(a)||(a=[String(a)]),Uu(t.i,"t",a),c.o=0,t=c.l.J,c.h=new Au,c.g=ld(c.l,t?e:null,!c.u),0<c.O&&(c.M=new KA(f2(c.Pa,c,c.g),c.O)),xu(c.U,c.g,"readystatechange",c.nb),e=c.I?zu(c.I):{},c.u?(c.v||(c.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",c.g.ha(c.B,c.v,c.u,e)):(c.v="GET",c.g.ha(c.B,c.v,null,e)),_8(),YA(c.j,c.v,c.B,c.m,c.W,c.u)}F.nb=function(c){c=c.target;const e=this.M;e&&h3(c)==3?e.l():this.Pa(c)};F.Pa=function(c){try{if(c==this.g)e:{const f=h3(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>f)&&(f!=3||rt||this.g&&(this.h.h||this.g.ja()||Wi(this.g)))){this.J||f!=4||e==7||(e==8||0>=h?_8(3):_8(2)),qe(this);var t=this.g.da();this.ca=t;c:if(Pu(this)){var a=Wi(this.g);c="";var n=a.length,r=h3(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){I4(this),Y0(this);var s="";break c}this.h.i=new a1.TextDecoder}for(e=0;e<n;e++)this.h.h=!0,c+=this.h.i.decode(a[e],{stream:r&&e==n-1});a.length=0,this.h.g+=c,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=t==200,ZA(this.j,this.v,this.B,this.m,this.W,f,t),this.i){if(this.aa&&!this.K){c:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C8(i)){var l=i;break c}}l=null}if(t=l)_6(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ht(this,t);else{this.i=!1,this.s=3,v2(12),I4(this),Y0(this);break e}}this.S?(Ru(this,f,s),rt&&this.i&&f==3&&(xu(this.U,this.V,"tick",this.mb),this.V.start())):(_6(this.j,this.m,s,null),ht(this,s)),f==4&&I4(this),this.i&&!this.J&&(f==4?rd(this.l,this):(this.i=!1,a5(this)))}else VT(this.g),t==400&&0<s.indexOf("Unknown SID")?(this.s=3,v2(12)):(this.s=0,v2(13)),I4(this),Y0(this)}}}catch{}finally{}};function Pu(c){return c.g?c.v=="GET"&&c.L!=2&&c.l.Ha:!1}function Ru(c,e,t){let a=!0,n;for(;!c.J&&c.o<t.length;)if(n=tT(c,t),n==lt){e==4&&(c.s=4,v2(14),a=!1),_6(c.j,c.m,null,"[Incomplete Response]");break}else if(n==Tu){c.s=4,v2(15),_6(c.j,c.m,t,"[Invalid Chunk]"),a=!1;break}else _6(c.j,c.m,n,null),ht(c,n);Pu(c)&&c.o!=0&&(c.h.g=c.h.g.slice(c.o),c.o=0),e!=4||t.length!=0||c.h.h||(c.s=1,v2(16),a=!1),c.i=c.i&&a,a?0<t.length&&!c.ba&&(c.ba=!0,e=c.l,e.g==c&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),on(e),e.M=!0,v2(11))):(_6(c.j,c.m,t,"[Invalid Chunked Response]"),I4(c),Y0(c))}F.mb=function(){if(this.g){var c=h3(this.g),e=this.g.ja();this.o<e.length&&(qe(this),Ru(this,c,e),this.i&&c!=4&&a5(this))}};function tT(c,e){var t=c.o,a=e.indexOf(`
`,t);return a==-1?lt:(t=Number(e.substring(t,a)),isNaN(t)?Tu:(a+=1,a+t>e.length?lt:(e=e.slice(a,a+t),c.o=a+t,e)))}F.cancel=function(){this.J=!0,I4(this)};function a5(c){c.Y=Date.now()+c.P,Iu(c,c.P)}function Iu(c,e){if(c.C!=null)throw Error("WatchDog timer not null");c.C=e5(f2(c.lb,c),e)}function qe(c){c.C&&(a1.clearTimeout(c.C),c.C=null)}F.lb=function(){this.C=null;const c=Date.now();0<=c-this.Y?(XA(this.j,this.B),this.L!=2&&(_8(),v2(17)),I4(this),this.s=2,Y0(this)):Iu(this,this.Y-c)};function Y0(c){c.l.H==0||c.J||rd(c.l,c)}function I4(c){qe(c);var e=c.M;e&&typeof e.sa=="function"&&e.sa(),c.M=null,Ya(c.V),wu(c.U),c.g&&(e=c.g,c.g=null,e.abort(),e.sa())}function ht(c,e){try{var t=c.l;if(t.H!=0&&(t.g==c||ut(t.i,c))){if(!c.K&&ut(t.i,c)&&t.H==3){try{var a=t.Ja.g.parse(e)}catch{a=null}if(Array.isArray(a)&&a.length==3){var n=a;if(n[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<c.G)I7(t),Ke(t);else break e;sn(t),v2(18)}}else t.Fa=n[1],0<t.Fa-t.V&&37500>n[2]&&t.G&&t.A==0&&!t.v&&(t.v=e5(f2(t.ib,t),6e3));if(1>=Wu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else D4(t,11)}else if((c.K||t.g==c)&&I7(t),!C8(e))for(n=t.Ja.g.parse(e),e=0;e<n.length;e++){let l=n[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const f=l[3];f!=null&&(t.ra=f,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const u=l[5];u!=null&&typeof u=="number"&&0<u&&(a=1.5*u,t.L=a,t.l.info("backChannelRequestTimeoutMs_="+a)),a=t;const d=c.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=a.i;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(tn(r,r.h),r.h=null))}if(a.F){const H=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;H&&(a.Da=H,w1(a.I,a.F,H))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-c.G,t.l.info("Handshake RTT: "+t.S+"ms")),a=t;var s=c;if(a.wa=od(a,a.J?a.pa:null,a.Y),s.K){ju(a.i,s);var i=s,o=a.L;o&&i.setTimeout(o),i.C&&(qe(i),a5(i)),a.g=s}else ad(a);0<t.j.length&&Ye(t)}else l[0]!="stop"&&l[0]!="close"||D4(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?D4(t,7):rn(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}_8(4)}catch{}}function aT(c){if(c.Z&&typeof c.Z=="function")return c.Z();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(Re(c)){for(var e=[],t=c.length,a=0;a<t;a++)e.push(c[a]);return e}e=[],t=0;for(a in c)e[t++]=c[a];return e}function nT(c){if(c.ta&&typeof c.ta=="function")return c.ta();if(!c.Z||typeof c.Z!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(Re(c)||typeof c=="string"){var e=[];c=c.length;for(var t=0;t<c;t++)e.push(t);return e}e=[],t=0;for(const a in c)e[t++]=a;return e}}}function Du(c,e){if(c.forEach&&typeof c.forEach=="function")c.forEach(e,void 0);else if(Re(c)||typeof c=="string")Array.prototype.forEach.call(c,e,void 0);else for(var t=nT(c),a=aT(c),n=a.length,r=0;r<n;r++)e.call(void 0,a[r],t&&t[r],c)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rT(c,e){if(c){c=c.split("&");for(var t=0;t<c.length;t++){var a=c[t].indexOf("="),n=null;if(0<=a){var r=c[t].substring(0,a);n=c[t].substring(a+1)}else r=c[t];e(r,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}function K4(c){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,c instanceof K4){this.h=c.h,P7(this,c.j),this.s=c.s,this.g=c.g,R7(this,c.m),this.l=c.l;var e=c.i,t=new b8;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ui(this,t),this.o=c.o}else c&&(e=String(c).match(Ou))?(this.h=!1,P7(this,e[1]||"",!0),this.s=O0(e[2]||""),this.g=O0(e[3]||"",!0),R7(this,e[4]),this.l=O0(e[5]||"",!0),Ui(this,e[6]||"",!0),this.o=O0(e[7]||"")):(this.h=!1,this.i=new b8(null,this.h))}K4.prototype.toString=function(){var c=[],e=this.j;e&&c.push(F0(e,qi,!0),":");var t=this.g;return(t||e=="file")&&(c.push("//"),(e=this.s)&&c.push(F0(e,qi,!0),"@"),c.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&c.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&c.push("/"),c.push(F0(t,t.charAt(0)=="/"?oT:iT,!0))),(t=this.i.toString())&&c.push("?",t),(t=this.o)&&c.push("#",F0(t,fT)),c.join("")};function P3(c){return new K4(c)}function P7(c,e,t){c.j=t?O0(e,!0):e,c.j&&(c.j=c.j.replace(/:$/,""))}function R7(c,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);c.m=e}else c.m=null}function Ui(c,e,t){e instanceof b8?(c.i=e,hT(c.i,c.h)):(t||(e=F0(e,lT)),c.i=new b8(e,c.h))}function w1(c,e,t){c.i.set(e,t)}function $e(c){return w1(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function O0(c,e){return c?e?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function F0(c,e,t){return typeof c=="string"?(c=encodeURI(c).replace(e,sT),t&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var qi=/[#\/\?@]/g,iT=/[#\?:]/g,oT=/[#\?]/g,lT=/[#\?@]/g,fT=/#/g;function b8(c,e){this.h=this.g=null,this.i=c||null,this.j=!!e}function b4(c){c.g||(c.g=new Map,c.h=0,c.i&&rT(c.i,function(e,t){c.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}F=b8.prototype;F.add=function(c,e){b4(this),this.i=null,c=v0(this,c);var t=this.g.get(c);return t||this.g.set(c,t=[]),t.push(e),this.h+=1,this};function Fu(c,e){b4(c),e=v0(c,e),c.g.has(e)&&(c.i=null,c.h-=c.g.get(e).length,c.g.delete(e))}function Bu(c,e){return b4(c),e=v0(c,e),c.g.has(e)}F.forEach=function(c,e){b4(this),this.g.forEach(function(t,a){t.forEach(function(n){c.call(e,n,a,this)},this)},this)};F.ta=function(){b4(this);const c=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let a=0;a<e.length;a++){const n=c[a];for(let r=0;r<n.length;r++)t.push(e[a])}return t};F.Z=function(c){b4(this);let e=[];if(typeof c=="string")Bu(this,c)&&(e=e.concat(this.g.get(v0(this,c))));else{c=Array.from(this.g.values());for(let t=0;t<c.length;t++)e=e.concat(c[t])}return e};F.set=function(c,e){return b4(this),this.i=null,c=v0(this,c),Bu(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[e]),this.h+=1,this};F.get=function(c,e){return c?(c=this.Z(c),0<c.length?String(c[0]):e):e};function Uu(c,e,t){Fu(c,e),0<t.length&&(c.i=null,c.g.set(v0(c,e),Fa(t)),c.h+=t.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var a=e[t];const r=encodeURIComponent(String(a)),s=this.Z(a);for(a=0;a<s.length;a++){var n=r;s[a]!==""&&(n+="="+encodeURIComponent(String(s[a]))),c.push(n)}}return this.i=c.join("&")};function v0(c,e){return e=String(e),c.j&&(e=e.toLowerCase()),e}function hT(c,e){e&&!c.j&&(b4(c),c.i=null,c.g.forEach(function(t,a){var n=a.toLowerCase();a!=n&&(Fu(this,a),Uu(this,n,t))},c)),c.j=e}var uT=class{constructor(c,e){this.g=c,this.map=e}};function qu(c){this.l=c||dT,a1.PerformanceNavigationTiming?(c=a1.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a1.g&&a1.g.Ka&&a1.g.Ka()&&a1.g.Ka().dc),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dT=10;function $u(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Wu(c){return c.h?1:c.g?c.g.size:0}function ut(c,e){return c.h?c.h==e:c.g?c.g.has(e):!1}function tn(c,e){c.g?c.g.add(e):c.h=e}function ju(c,e){c.h&&c.h==e?c.h=null:c.g&&c.g.has(e)&&c.g.delete(e)}qu.prototype.cancel=function(){if(this.i=Gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Gu(c){if(c.h!=null)return c.i.concat(c.h.F);if(c.g!=null&&c.g.size!==0){let e=c.i;for(const t of c.g.values())e=e.concat(t.F);return e}return Fa(c.i)}var mT=class{stringify(c){return a1.JSON.stringify(c,void 0)}parse(c){return a1.JSON.parse(c,void 0)}};function pT(){this.g=new mT}function vT(c,e,t){const a=t||"";try{Du(c,function(n,r){let s=n;Q8(n)&&(s=Ga(n)),e.push(a+r+"="+encodeURIComponent(s))})}catch(n){throw e.push(a+"type="+encodeURIComponent("_badmap")),n}}function zT(c,e){const t=new Be;if(a1.Image){const a=new Image;a.onload=O5(B5,t,a,"TestLoadImage: loaded",!0,e),a.onerror=O5(B5,t,a,"TestLoadImage: error",!1,e),a.onabort=O5(B5,t,a,"TestLoadImage: abort",!1,e),a.ontimeout=O5(B5,t,a,"TestLoadImage: timeout",!1,e),a1.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=c}else e(!1)}function B5(c,e,t,a,n){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,n(a)}catch{}}function We(c){this.l=c.ec||null,this.j=c.ob||!1}t2(We,Ja);We.prototype.g=function(){return new je(this.l,this.j)};We.prototype.i=function(c){return function(){return c}}({});function je(c,e){c2.call(this),this.F=c,this.u=e,this.m=void 0,this.readyState=an,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}t2(je,c2);var an=0;F=je.prototype;F.open=function(c,e){if(this.readyState!=an)throw this.abort(),Error("Error reopening a connection");this.C=c,this.B=e,this.readyState=1,x8(this)};F.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};c&&(e.body=c),(this.F||a1).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,n5(this)),this.readyState=an};F.$a=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,x8(this)),this.g&&(this.readyState=3,x8(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof a1.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ku(this)}else c.text().then(this.Za.bind(this),this.ka.bind(this))};function Ku(c){c.j.read().then(c.Xa.bind(c)).catch(c.ka.bind(c))}F.Xa=function(c){if(this.g){if(this.u&&c.value)this.response.push(c.value);else if(!this.u){var e=c.value?c.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!c.done}))&&(this.response=this.responseText+=e)}c.done?n5(this):x8(this),this.readyState==3&&Ku(this)}};F.Za=function(c){this.g&&(this.response=this.responseText=c,n5(this))};F.Ya=function(c){this.g&&(this.response=c,n5(this))};F.ka=function(){this.g&&n5(this)};function n5(c){c.readyState=4,c.l=null,c.j=null,c.A=null,x8(c)}F.setRequestHeader=function(c,e){this.v.append(c,e)};F.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,c.push(t[0]+": "+t[1]),t=e.next();return c.join(`\r
`)};function x8(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(je.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});var gT=a1.JSON.parse;function F1(c){c2.call(this),this.headers=new Map,this.u=c||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Yu,this.L=this.M=!1}t2(F1,c2);var Yu="",CT=/^https?$/i,HT=["POST","PUT"];F=F1.prototype;F.Oa=function(c){this.M=c};F.ha=function(c,e,t,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+c);e=e?e.toUpperCase():"GET",this.I=c,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ot.g(),this.C=this.u?Bi(this.u):Bi(ot),this.g.onreadystatechange=f2(this.La,this);try{this.G=!0,this.g.open(e,String(c),!0),this.G=!1}catch(r){$i(this,r);return}if(c=t||"",t=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var n in a)t.set(n,a[n]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const r of a.keys())t.set(r,a.get(r));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),n=a1.FormData&&c instanceof a1.FormData,!(0<=du(HT,e))||a||n||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,s]of t)this.g.setRequestHeader(r,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qu(this),0<this.B&&((this.L=MT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=f2(this.ua,this)):this.A=Za(this.ua,this.B,this)),this.v=!0,this.g.send(c),this.v=!1}catch(r){$i(this,r)}};function MT(c){return H8&&typeof c.timeout=="number"&&c.ontimeout!==void 0}F.ua=function(){typeof Oa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,s2(this,"timeout"),this.abort(8))};function $i(c,e){c.h=!1,c.g&&(c.l=!0,c.g.abort(),c.l=!1),c.j=e,c.m=5,Zu(c),Ge(c)}function Zu(c){c.F||(c.F=!0,s2(c,"complete"),s2(c,"error"))}F.abort=function(c){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=c||7,s2(this,"complete"),s2(this,"abort"),Ge(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ge(this,!0)),F1.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?Xu(this):this.kb())};F.kb=function(){Xu(this)};function Xu(c){if(c.h&&typeof Oa<"u"&&(!c.C[1]||h3(c)!=4||c.da()!=2)){if(c.v&&h3(c)==4)Za(c.La,0,c);else if(s2(c,"readystatechange"),h3(c)==4){c.h=!1;try{const s=c.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var a;if(a=s===0){var n=String(c.I).match(Ou)[1]||null;!n&&a1.self&&a1.self.location&&(n=a1.self.location.protocol.slice(0,-1)),a=!CT.test(n?n.toLowerCase():"")}t=a}if(t)s2(c,"complete"),s2(c,"success");else{c.m=6;try{var r=2<h3(c)?c.g.statusText:""}catch{r=""}c.j=r+" ["+c.da()+"]",Zu(c)}}finally{Ge(c)}}}}function Ge(c,e){if(c.g){Qu(c);const t=c.g,a=c.C[0]?()=>{}:null;c.g=null,c.C=null,e||s2(c,"ready");try{t.onreadystatechange=a}catch{}}}function Qu(c){c.g&&c.L&&(c.g.ontimeout=null),c.A&&(a1.clearTimeout(c.A),c.A=null)}F.isActive=function(){return!!this.g};function h3(c){return c.g?c.g.readyState:0}F.da=function(){try{return 2<h3(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(c){if(this.g){var e=this.g.responseText;return c&&e.indexOf(c)==0&&(e=e.substring(c.length)),gT(e)}};function Wi(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.K){case Yu:case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function VT(c){const e={};c=(c.g&&2<=h3(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<c.length;a++){if(C8(c[a]))continue;var t=WA(c[a]);const n=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[n]||[];e[n]=r,r.push(t)}DA(e,function(a){return a.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ju(c){let e="";return Ua(c,function(t,a){e+=a,e+=":",e+=t,e+=`\r
`}),e}function nn(c,e,t){e:{for(a in t){var a=!1;break e}a=!0}a||(t=Ju(t),typeof c=="string"?t!=null&&encodeURIComponent(String(t)):w1(c,e,t))}function b0(c,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[c]||e}function ed(c){this.Ga=0,this.j=[],this.l=new Be,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=b0("failFast",!1,c),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=b0("baseRetryDelayMs",5e3,c),this.hb=b0("retryDelaySeedMs",1e4,c),this.eb=b0("forwardChannelMaxRetries",2,c),this.xa=b0("forwardChannelRequestTimeoutMs",2e4,c),this.va=c&&c.xmlHttpFactory||void 0,this.Ha=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.i=new qu(c&&c.concurrentRequestLimit),this.Ja=new pT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=c&&c.bc||!1,c&&c.Ea&&this.l.Ea(),c&&c.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&c&&c.detectBufferingProxy||!1,this.qa=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.qa=c.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=ed.prototype;F.ra=8;F.H=1;function rn(c){if(cd(c),c.H==3){var e=c.W++,t=P3(c.I);if(w1(t,"SID",c.K),w1(t,"RID",e),w1(t,"TYPE","terminate"),r5(c,t),e=new t5(c,c.l,e),e.L=2,e.A=$e(P3(t)),t=!1,a1.navigator&&a1.navigator.sendBeacon)try{t=a1.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&a1.Image&&(new Image().src=e.A,t=!0),t||(e.g=ld(e.l,null),e.g.ha(e.A)),e.G=Date.now(),a5(e)}id(c)}function Ke(c){c.g&&(on(c),c.g.cancel(),c.g=null)}function cd(c){Ke(c),c.u&&(a1.clearTimeout(c.u),c.u=null),I7(c),c.i.cancel(),c.m&&(typeof c.m=="number"&&a1.clearTimeout(c.m),c.m=null)}function Ye(c){if(!$u(c.i)&&!c.m){c.m=!0;var e=c.Na;V8||_u(),L8||(V8(),L8=!0),Ka.add(e,c),c.C=0}}function LT(c,e){return Wu(c.i)>=c.i.j-(c.m?1:0)?!1:c.m?(c.j=e.F.concat(c.j),!0):c.H==1||c.H==2||c.C>=(c.cb?0:c.eb)?!1:(c.m=e5(f2(c.Na,c,e),sd(c,c.C)),c.C++,!0)}F.Na=function(c){if(this.m)if(this.m=null,this.H==1){if(!c){this.W=Math.floor(1e5*Math.random()),c=this.W++;const n=new t5(this,this.l,c);let r=this.s;if(this.U&&(r?(r=zu(r),gu(r,this.U)):r=this.U),this.o!==null||this.O||(n.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){c:{var a=this.j[t];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break c}a=void 0}if(a===void 0)break;if(e+=a,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=td(this,n,e),t=P3(this.I),w1(t,"RID",c),w1(t,"CVER",22),this.F&&w1(t,"X-HTTP-Session-Id",this.F),r5(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Ju(r)))+"&"+e:this.o&&nn(t,this.o,r)),tn(this.i,n),this.bb&&w1(t,"TYPE","init"),this.P?(w1(t,"$req",e),w1(t,"SID","null"),n.aa=!0,ft(n,t,null)):ft(n,t,e),this.H=2}}else this.H==3&&(c?ji(this,c):this.j.length==0||$u(this.i)||ji(this))};function ji(c,e){var t;e?t=e.m:t=c.W++;const a=P3(c.I);w1(a,"SID",c.K),w1(a,"RID",t),w1(a,"AID",c.V),r5(c,a),c.o&&c.s&&nn(a,c.o,c.s),t=new t5(c,c.l,t,c.C+1),c.o===null&&(t.I=c.s),e&&(c.j=e.F.concat(c.j)),e=td(c,t,1e3),t.setTimeout(Math.round(.5*c.xa)+Math.round(.5*c.xa*Math.random())),tn(c.i,t),ft(t,a,e)}function r5(c,e){c.na&&Ua(c.na,function(t,a){w1(e,a,t)}),c.h&&Du({},function(t,a){w1(e,a,t)})}function td(c,e,t){t=Math.min(c.j.length,t);var a=c.h?f2(c.h.Va,c.h,c):null;e:{var n=c.j;let r=-1;for(;;){const s=["count="+t];r==-1?0<t?(r=n[0].g,s.push("ofs="+r)):r=0:s.push("ofs="+r);let i=!0;for(let o=0;o<t;o++){let l=n[o].g;const f=n[o].map;if(l-=r,0>l)r=Math.max(0,n[o].g-100),i=!1;else try{vT(f,s,"req"+l+"_")}catch{a&&a(f)}}if(i){a=s.join("&");break e}}}return c=c.j.splice(0,t),e.F=c,a}function ad(c){if(!c.g&&!c.u){c.ba=1;var e=c.Ma;V8||_u(),L8||(V8(),L8=!0),Ka.add(e,c),c.A=0}}function sn(c){return c.g||c.u||3<=c.A?!1:(c.ba++,c.u=e5(f2(c.Ma,c),sd(c,c.A)),c.A++,!0)}F.Ma=function(){if(this.u=null,nd(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var c=2*this.S;this.l.info("BP detection timer enabled: "+c),this.B=e5(f2(this.jb,this),c)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,v2(10),Ke(this),nd(this))};function on(c){c.B!=null&&(a1.clearTimeout(c.B),c.B=null)}function nd(c){c.g=new t5(c,c.l,"rpc",c.ba),c.o===null&&(c.g.I=c.s),c.g.O=0;var e=P3(c.wa);w1(e,"RID","rpc"),w1(e,"SID",c.K),w1(e,"AID",c.V),w1(e,"CI",c.G?"0":"1"),!c.G&&c.qa&&w1(e,"TO",c.qa),w1(e,"TYPE","xmlhttp"),r5(c,e),c.o&&c.s&&nn(e,c.o,c.s),c.L&&c.g.setTimeout(c.L);var t=c.g;c=c.pa,t.L=1,t.A=$e(P3(e)),t.u=null,t.S=!0,Eu(t,c)}F.ib=function(){this.v!=null&&(this.v=null,Ke(this),sn(this),v2(19))};function I7(c){c.v!=null&&(a1.clearTimeout(c.v),c.v=null)}function rd(c,e){var t=null;if(c.g==e){I7(c),on(c),c.g=null;var a=2}else if(ut(c.i,e))t=e.F,ju(c.i,e),a=1;else return;if(c.H!=0){if(e.i)if(a==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var n=c.C;a=Xa(),s2(a,new ku(a,t)),Ye(c)}else ad(c);else if(n=e.s,n==3||n==0&&0<e.ca||!(a==1&&LT(c,e)||a==2&&sn(c)))switch(t&&0<t.length&&(e=c.i,e.i=e.i.concat(t)),n){case 1:D4(c,5);break;case 4:D4(c,10);break;case 3:D4(c,6);break;default:D4(c,2)}}}function sd(c,e){let t=c.ab+Math.floor(Math.random()*c.hb);return c.isActive()||(t*=2),t*e}function D4(c,e){if(c.l.info("Error code "+e),e==2){var t=null;c.h&&(t=null);var a=f2(c.pb,c);t||(t=new K4("//www.google.com/images/cleardot.gif"),a1.location&&a1.location.protocol=="http"||P7(t,"https"),$e(t)),zT(t.toString(),a)}else v2(2);c.H=0,c.h&&c.h.za(e),id(c),cd(c)}F.pb=function(c){c?(this.l.info("Successfully pinged google.com"),v2(2)):(this.l.info("Failed to ping google.com"),v2(1))};function id(c){if(c.H=0,c.ma=[],c.h){const e=Gu(c.i);(e.length!=0||c.j.length!=0)&&(Pi(c.ma,e),Pi(c.ma,c.j),c.i.i.length=0,Fa(c.j),c.j.length=0),c.h.ya()}}function od(c,e,t){var a=t instanceof K4?P3(t):new K4(t);if(a.g!="")e&&(a.g=e+"."+a.g),R7(a,a.m);else{var n=a1.location;a=n.protocol,e=e?e+"."+n.hostname:n.hostname,n=+n.port;var r=new K4(null);a&&P7(r,a),e&&(r.g=e),n&&R7(r,n),t&&(r.l=t),a=r}return t=c.F,e=c.Da,t&&e&&w1(a,t,e),w1(a,"VER",c.ra),r5(c,a),a}function ld(c,e,t){if(e&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=c.Ha&&!c.va?new F1(new We({ob:t})):new F1(c.va),e.Oa(c.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function fd(){}F=fd.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function q2(c,e){c2.call(this),this.g=new ed(e),this.l=c,this.h=e&&e.messageUrlParams||null,c=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.s=c,c=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(c?c["X-WebChannel-Content-Type"]=e.messageContentType:c={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(c?c["X-WebChannel-Client-Profile"]=e.Ca:c={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=c,(c=e&&e.cc)&&!C8(c)&&(this.g.o=c),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C8(e)&&(this.g.F=e,c=this.h,c!==null&&e in c&&(c=this.h,e in c&&delete c[e])),this.j=new z0(this)}t2(q2,c2);q2.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var c=this.g,e=this.l,t=this.h||void 0;v2(0),c.Y=e,c.na=t||{},c.G=c.aa,c.I=od(c,null,c.Y),Ye(c)};q2.prototype.close=function(){rn(this.g)};q2.prototype.u=function(c){var e=this.g;if(typeof c=="string"){var t={};t.__data__=c,c=t}else this.v&&(t={},t.__data__=Ga(c),c=t);e.j.push(new uT(e.fb++,c)),e.H==3&&Ye(e)};q2.prototype.N=function(){this.g.h=null,delete this.j,rn(this.g),delete this.g,q2.$.N.call(this)};function hd(c){en.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var e=c.__sm__;if(e){e:{for(const t in e){c=t;break e}c=void 0}(this.i=c)&&(c=this.i,e=e!==null&&c in e?e[c]:void 0),this.data=e}else this.data=c}t2(hd,en);function ud(){cn.call(this),this.status=1}t2(ud,cn);function z0(c){this.g=c}t2(z0,fd);z0.prototype.Ba=function(){s2(this.g,"a")};z0.prototype.Aa=function(c){s2(this.g,new hd(c))};z0.prototype.za=function(c){s2(this.g,new ud)};z0.prototype.ya=function(){s2(this.g,"b")};function yT(){this.blockSize=-1}function H3(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}t2(H3,yT);H3.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nc(c,e,t){t||(t=0);var a=Array(16);if(typeof e=="string")for(var n=0;16>n;++n)a[n]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(n=0;16>n;++n)a[n]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=c.g[0],t=c.g[1],n=c.g[2];var r=c.g[3],s=e+(r^t&(n^r))+a[0]+3614090360&4294967295;e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[1]+3905402710&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[2]+606105819&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[3]+3250441966&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(r^t&(n^r))+a[4]+4118548399&4294967295,e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[5]+1200080426&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[6]+2821735955&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[7]+4249261313&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(r^t&(n^r))+a[8]+1770035416&4294967295,e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[9]+2336552879&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[10]+4294925233&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[11]+2304563134&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(r^t&(n^r))+a[12]+1804603682&4294967295,e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[13]+4254626195&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[14]+2792965006&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[15]+1236535329&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(n^r&(t^n))+a[1]+4129170786&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[6]+3225465664&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[11]+643717713&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[0]+3921069994&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(t^n))+a[5]+3593408605&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[10]+38016083&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[15]+3634488961&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[4]+3889429448&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(t^n))+a[9]+568446438&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[14]+3275163606&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[3]+4107603335&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[8]+1163531501&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(t^n))+a[13]+2850285829&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[2]+4243563512&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[7]+1735328473&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[12]+2368359562&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(t^n^r)+a[5]+4294588738&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[8]+2272392833&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[11]+1839030562&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[14]+4259657740&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(t^n^r)+a[1]+2763975236&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[4]+1272893353&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[7]+4139469664&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[10]+3200236656&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(t^n^r)+a[13]+681279174&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[0]+3936430074&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[3]+3572445317&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[6]+76029189&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(t^n^r)+a[9]+3654602809&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[12]+3873151461&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[15]+530742520&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[2]+3299628645&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(n^(t|~r))+a[0]+4096336452&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[7]+1126891415&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[14]+2878612391&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[5]+4237533241&4294967295,t=n+(s<<21&4294967295|s>>>11),s=e+(n^(t|~r))+a[12]+1700485571&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[3]+2399980690&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[10]+4293915773&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[1]+2240044497&4294967295,t=n+(s<<21&4294967295|s>>>11),s=e+(n^(t|~r))+a[8]+1873313359&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[15]+4264355552&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[6]+2734768916&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[13]+1309151649&4294967295,t=n+(s<<21&4294967295|s>>>11),s=e+(n^(t|~r))+a[4]+4149444226&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[11]+3174756917&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[2]+718787259&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[9]+3951481745&4294967295,c.g[0]=c.g[0]+e&4294967295,c.g[1]=c.g[1]+(n+(s<<21&4294967295|s>>>11))&4294967295,c.g[2]=c.g[2]+n&4294967295,c.g[3]=c.g[3]+r&4294967295}H3.prototype.j=function(c,e){e===void 0&&(e=c.length);for(var t=e-this.blockSize,a=this.m,n=this.h,r=0;r<e;){if(n==0)for(;r<=t;)nc(this,c,r),r+=this.blockSize;if(typeof c=="string"){for(;r<e;)if(a[n++]=c.charCodeAt(r++),n==this.blockSize){nc(this,a),n=0;break}}else for(;r<e;)if(a[n++]=c[r++],n==this.blockSize){nc(this,a),n=0;break}}this.h=n,this.i+=e};H3.prototype.l=function(){var c=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);c[0]=128;for(var e=1;e<c.length-8;++e)c[e]=0;var t=8*this.i;for(e=c.length-8;e<c.length;++e)c[e]=t&255,t/=256;for(this.j(c),c=Array(16),e=t=0;4>e;++e)for(var a=0;32>a;a+=8)c[t++]=this.g[e]>>>a&255;return c};function g1(c,e){this.h=e;for(var t=[],a=!0,n=c.length-1;0<=n;n--){var r=c[n]|0;a&&r==e||(t[n]=r,a=!1)}this.g=t}var _T={};function ln(c){return-128<=c&&128>c?AA(c,function(e){return new g1([e|0],0>e?-1:0)}):new g1([c|0],0>c?-1:0)}function u3(c){if(isNaN(c)||!isFinite(c))return P6;if(0>c)return n2(u3(-c));for(var e=[],t=1,a=0;c>=t;a++)e[a]=c/t|0,t*=dt;return new g1(e,0)}function dd(c,e){if(c.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(c.charAt(0)=="-")return n2(dd(c.substring(1),e));if(0<=c.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=u3(Math.pow(e,8)),a=P6,n=0;n<c.length;n+=8){var r=Math.min(8,c.length-n),s=parseInt(c.substring(n,n+r),e);8>r?(r=u3(Math.pow(e,r)),a=a.R(r).add(u3(s))):(a=a.R(t),a=a.add(u3(s)))}return a}var dt=4294967296,P6=ln(0),mt=ln(1),Gi=ln(16777216);F=g1.prototype;F.ea=function(){if(D2(this))return-n2(this).ea();for(var c=0,e=1,t=0;t<this.g.length;t++){var a=this.D(t);c+=(0<=a?a:dt+a)*e,e*=dt}return c};F.toString=function(c){if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if(w3(this))return"0";if(D2(this))return"-"+n2(this).toString(c);for(var e=u3(Math.pow(c,6)),t=this,a="";;){var n=O7(t,e).g;t=D7(t,n.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(c);if(t=n,w3(t))return r+a;for(;6>r.length;)r="0"+r;a=r+a}};F.D=function(c){return 0>c?0:c<this.g.length?this.g[c]:this.h};function w3(c){if(c.h!=0)return!1;for(var e=0;e<c.g.length;e++)if(c.g[e]!=0)return!1;return!0}function D2(c){return c.h==-1}F.X=function(c){return c=D7(this,c),D2(c)?-1:w3(c)?0:1};function n2(c){for(var e=c.g.length,t=[],a=0;a<e;a++)t[a]=~c.g[a];return new g1(t,~c.h).add(mt)}F.abs=function(){return D2(this)?n2(this):this};F.add=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0,n=0;n<=e;n++){var r=a+(this.D(n)&65535)+(c.D(n)&65535),s=(r>>>16)+(this.D(n)>>>16)+(c.D(n)>>>16);a=s>>>16,r&=65535,s&=65535,t[n]=s<<16|r}return new g1(t,t[t.length-1]&-2147483648?-1:0)};function D7(c,e){return c.add(n2(e))}F.R=function(c){if(w3(this)||w3(c))return P6;if(D2(this))return D2(c)?n2(this).R(n2(c)):n2(n2(this).R(c));if(D2(c))return n2(this.R(n2(c)));if(0>this.X(Gi)&&0>c.X(Gi))return u3(this.ea()*c.ea());for(var e=this.g.length+c.g.length,t=[],a=0;a<2*e;a++)t[a]=0;for(a=0;a<this.g.length;a++)for(var n=0;n<c.g.length;n++){var r=this.D(a)>>>16,s=this.D(a)&65535,i=c.D(n)>>>16,o=c.D(n)&65535;t[2*a+2*n]+=s*o,U5(t,2*a+2*n),t[2*a+2*n+1]+=r*o,U5(t,2*a+2*n+1),t[2*a+2*n+1]+=s*i,U5(t,2*a+2*n+1),t[2*a+2*n+2]+=r*i,U5(t,2*a+2*n+2)}for(a=0;a<e;a++)t[a]=t[2*a+1]<<16|t[2*a];for(a=e;a<2*e;a++)t[a]=0;return new g1(t,0)};function U5(c,e){for(;(c[e]&65535)!=c[e];)c[e+1]+=c[e]>>>16,c[e]&=65535,e++}function x0(c,e){this.g=c,this.h=e}function O7(c,e){if(w3(e))throw Error("division by zero");if(w3(c))return new x0(P6,P6);if(D2(c))return e=O7(n2(c),e),new x0(n2(e.g),n2(e.h));if(D2(e))return e=O7(c,n2(e)),new x0(n2(e.g),e.h);if(30<c.g.length){if(D2(c)||D2(e))throw Error("slowDivide_ only works with positive integers.");for(var t=mt,a=e;0>=a.X(c);)t=Ki(t),a=Ki(a);var n=C6(t,1),r=C6(a,1);for(a=C6(a,2),t=C6(t,2);!w3(a);){var s=r.add(a);0>=s.X(c)&&(n=n.add(t),r=s),a=C6(a,1),t=C6(t,1)}return e=D7(c,n.R(e)),new x0(n,e)}for(n=P6;0<=c.X(e);){for(t=Math.max(1,Math.floor(c.ea()/e.ea())),a=Math.ceil(Math.log(t)/Math.LN2),a=48>=a?1:Math.pow(2,a-48),r=u3(t),s=r.R(e);D2(s)||0<s.X(c);)t-=a,r=u3(t),s=r.R(e);w3(r)&&(r=mt),n=n.add(r),c=D7(c,s)}return new x0(n,c)}F.gb=function(c){return O7(this,c).h};F.and=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0;a<e;a++)t[a]=this.D(a)&c.D(a);return new g1(t,this.h&c.h)};F.or=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0;a<e;a++)t[a]=this.D(a)|c.D(a);return new g1(t,this.h|c.h)};F.xor=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0;a<e;a++)t[a]=this.D(a)^c.D(a);return new g1(t,this.h^c.h)};function Ki(c){for(var e=c.g.length+1,t=[],a=0;a<e;a++)t[a]=c.D(a)<<1|c.D(a-1)>>>31;return new g1(t,c.h)}function C6(c,e){var t=e>>5;e%=32;for(var a=c.g.length-t,n=[],r=0;r<a;r++)n[r]=0<e?c.D(r+t)>>>e|c.D(r+t+1)<<32-e:c.D(r+t);return new g1(n,c.h)}q2.prototype.send=q2.prototype.u;q2.prototype.open=q2.prototype.m;q2.prototype.close=q2.prototype.close;Qa.NO_ERROR=0;Qa.TIMEOUT=8;Qa.HTTP_ERROR=6;JA.COMPLETE="complete";eT.EventType=c5;c5.OPEN="a";c5.CLOSE="b";c5.ERROR="c";c5.MESSAGE="d";c2.prototype.listen=c2.prototype.O;F1.prototype.listenOnce=F1.prototype.P;F1.prototype.getLastError=F1.prototype.Sa;F1.prototype.getLastErrorCode=F1.prototype.Ia;F1.prototype.getStatus=F1.prototype.da;F1.prototype.getResponseJson=F1.prototype.Wa;F1.prototype.getResponseText=F1.prototype.ja;F1.prototype.send=F1.prototype.ha;F1.prototype.setWithCredentials=F1.prototype.Oa;H3.prototype.digest=H3.prototype.l;H3.prototype.reset=H3.prototype.reset;H3.prototype.update=H3.prototype.j;g1.prototype.add=g1.prototype.add;g1.prototype.multiply=g1.prototype.R;g1.prototype.modulo=g1.prototype.gb;g1.prototype.compare=g1.prototype.X;g1.prototype.toNumber=g1.prototype.ea;g1.prototype.toString=g1.prototype.toString;g1.prototype.getBits=g1.prototype.D;g1.fromNumber=u3;g1.fromString=dd;var bT=g1;const Yi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}y2.UNAUTHENTICATED=new y2(null),y2.GOOGLE_CREDENTIALS=new y2("google-credentials-uid"),y2.FIRST_PARTY=new y2("first-party-uid"),y2.MOCK_USER=new y2("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F7=new X8("@firebase/firestore");function k2(c,...e){if(F7.logLevel<=v1.DEBUG){const t=e.map(md);F7.debug(`Firestore (${Ze}): ${c}`,...t)}}function fn(c,...e){if(F7.logLevel<=v1.ERROR){const t=e.map(md);F7.error(`Firestore (${Ze}): ${c}`,...t)}}function md(c){if(typeof c=="string")return c;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(c)}catch{return c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(c="Unexpected state"){const e=`FIRESTORE (${Ze}) INTERNAL ASSERTION FAILED: `+c;throw fn(e),new Error(e)}function pt(c,e){c||pd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y1 extends M3{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(y2.UNAUTHENTICATED))}shutdown(){}}class NT{constructor(e){this.t=e,this.currentUser=y2.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let a=this.i;const n=o=>this.i!==a?(a=this.i,t(o)):Promise.resolve();let r=new R6;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new R6,e.enqueueRetryable(()=>n(this.currentUser))};const s=()=>{const o=r;e.enqueueRetryable(async()=>{await o.promise,await n(this.currentUser)})},i=o=>{k2("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(k2("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new R6)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(a=>this.i!==e?(k2("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(pt(typeof a.accessToken=="string"),new xT(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pt(e===null||typeof e=="string"),new y2(e)}}class ST{constructor(e,t,a){this.l=e,this.h=t,this.P=a,this.type="FirstParty",this.user=y2.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kT{constructor(e,t,a){this.l=e,this.h=t,this.P=a}getToken(){return Promise.resolve(new ST(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(y2.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const a=r=>{r.error!=null&&k2("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const s=r.token!==this.R;return this.R=r.token,k2("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>a(r))};const n=r=>{k2("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>n(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?n(r):k2("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(pt(typeof t.token=="string"),this.R=t.token,new AT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(c){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(c);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let a=0;a<c;a++)t[a]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let a="";for(;a.length<20;){const n=ET(40);for(let r=0;r<n.length;++r)a.length<20&&n[r]<t&&(a+=e.charAt(n[r]%e.length))}return a}}function B7(c,e){return c<e?-1:c>e?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y1(K1.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y1(K1.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Y1(K1.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y1(K1.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Z0.fromMillis(Date.now())}static fromDate(e){return Z0.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor(1e6*(e-1e3*t));return new Z0(t,a)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B7(this.nanoseconds,e.nanoseconds):B7(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}function vd(c){return c.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t,a,n,r,s,i,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=i,this.longPollingOptions=o,this.useFetchStreams=l}}class U7{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new U7("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof U7&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zi,h1;(h1=Zi||(Zi={}))[h1.OK=0]="OK",h1[h1.CANCELLED=1]="CANCELLED",h1[h1.UNKNOWN=2]="UNKNOWN",h1[h1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",h1[h1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",h1[h1.NOT_FOUND=5]="NOT_FOUND",h1[h1.ALREADY_EXISTS=6]="ALREADY_EXISTS",h1[h1.PERMISSION_DENIED=7]="PERMISSION_DENIED",h1[h1.UNAUTHENTICATED=16]="UNAUTHENTICATED",h1[h1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",h1[h1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",h1[h1.ABORTED=10]="ABORTED",h1[h1.OUT_OF_RANGE=11]="OUT_OF_RANGE",h1[h1.UNIMPLEMENTED=12]="UNIMPLEMENTED",h1[h1.INTERNAL=13]="INTERNAL",h1[h1.UNAVAILABLE=14]="UNAVAILABLE",h1[h1.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new bT([4294967295,4294967295],0);function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,t,a=1e3,n=1.5,r=6e4){this.si=e,this.timerId=t,this.Fo=a,this.Mo=n,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),a=Math.max(0,Date.now()-this.Bo),n=Math.max(0,t-a);n>0&&k2("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,a,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=n,this.removalCallback=r,this.deferred=new R6,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,a,n,r){const s=Date.now()+a,i=new hn(e,t,s,n,r);return i.start(a),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y1(K1.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function DT(c,e){if(fn("AsyncQueue",`${e}: ${c}`),vd(c))return new Y1(K1.UNAVAILABLE,`${e}: ${c}`);throw c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,a,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=n,this.user=y2.UNAUTHENTICATED,this.clientId=PT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async r=>{k2("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(a,r=>(k2("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y1(K1.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new R6;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=DT(t,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(c){const e={};return c.timeoutSeconds!==void 0&&(e.timeoutSeconds=c.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map;function FT(c,e,t,a){if(e===!0&&a===!0)throw new Y1(K1.INVALID_ARGUMENT,`${c} and ${t} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){var t,a;if(e.host===void 0){if(e.ssl!==void 0)throw new Y1(K1.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y1(K1.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zd((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y1(K1.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y1(K1.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y1(K1.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,n){return a.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class BT{constructor(e,t,a,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y1(K1.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y1(K1.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qi(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new wT;switch(a.type){case"firstParty":return new kT(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new Y1(K1.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const a=Xi.get(t);a&&(k2("ComponentProvider","Removing Datastore"),Xi.delete(t),a.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new IT(this,"async_queue_retry"),this.iu=()=>{const t=rc();t&&k2("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=rc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new R6;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!vd(e))throw e;k2("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(a=>{this.eu=a,this.tu=!1;const n=function(s){let i=s.message||"";return s.stack&&(i=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),i}(a);throw fn("INTERNAL UNHANDLED ERROR: ",n),a}).then(a=>(this.tu=!1,a))));return this.Ja=t,t}enqueueAfterDelay(e,t,a){this.su(),this.ru.indexOf(e)>-1&&(t=0);const n=hn.createAndSchedule(this,e,t,a,r=>this.au(r));return this.Xa.push(n),n}su(){this.eu&&pd()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,a)=>t.targetTimeMs-a.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class qT extends BT{constructor(e,t,a,n){super(e,t,a,n),this.type="firestore",this._queue=function(){return new UT}(),this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$T(this),this._firestoreClient.terminate()}}function $T(c){var e,t,a;const n=c._freezeSettings(),r=function(i,o,l,f){return new RT(i,o,l,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,zd(f.experimentalLongPollingOptions),f.useFetchStreams)}(c._databaseId,((e=c._app)===null||e===void 0?void 0:e.options.appId)||"",c._persistenceKey,n);c._firestoreClient=new OT(c._authCredentials,c._appCheckCredentials,c._queue,r),!((t=n.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((a=n.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(c._firestoreClient._uninitializedComponentsProvider={_offlineKind:n.localCache.kind,_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y1(K1.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y1(K1.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B7(this._lat,e._lat)||B7(this._long,e._long)}}(function(e,t=!0){(function(n){Ze=n})(y4),C3(new e3("firestore",(a,{instanceIdentifier:n,options:r})=>{const s=a.getProvider("app").getImmediate(),i=new qT(new NT(a.getProvider("auth-internal")),new TT(a.getProvider("app-check-internal")),function(l,f){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Y1(K1.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new U7(l.options.projectId,f)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),T2(Yi,"4.4.0",e),T2(Yi,"4.4.0","esm2017")})();const jT=DN(()=>{f7("FirebaseTimestamp",c=>q6(new Z0(c.seconds,c.nanoseconds))),f7("FirebaseGeoPoint",c=>q6(new WT(c.latitude,c.longitude))),f7("DocumentData",c=>{const e=typeof c=="string"?JSON.parse(c):c,t=e.id;return delete e.id,Object.defineProperty(e,"id",{value:t})})}),Ji={NuxtError:c=>Ea(c),EmptyShallowRef:c=>f8(c==="_"?void 0:c==="0n"?BigInt(0):x7(c)),EmptyRef:c=>B2(c==="_"?void 0:c==="0n"?BigInt(0):x7(c)),ShallowRef:c=>f8(c),ShallowReactive:c=>j8(c),Ref:c=>B2(c),Reactive:c=>g3(c)},GT=w2({name:"nuxt:revive-payload:client",order:-30,async setup(c){let e,t;for(const a in Ji)f7(a,Ji[a]);Object.assign(c.payload,([e,t]=v8(()=>c.runWithContext(QS)),e=await e,t(),e)),window.__NUXT__=c.payload}}),KT=[],YT=w2({name:"nuxt:head",enforce:"pre",setup(c){const e=SS({plugins:KT});kS(()=>I1().vueApp._context.provides.usehead),c.vueApp.use(e);{let t=!0;const a=async()=>{t=!1,await Rh(e)};e.hooks.hook("dom:beforeRender",n=>{n.shouldRender=!t}),c.hooks.hook("page:start",()=>{t=!0}),c.hooks.hook("page:finish",()=>{c.isHydrating||a()}),c.hooks.hook("app:error",a),c.hooks.hook("app:suspense:resolve",a)}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const L6=typeof window<"u";function ZT(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const z1=Object.assign;function sc(c,e){const t={};for(const a in e){const n=e[a];t[a]=c3(n)?n.map(c):c(n)}return t}const X0=()=>{},c3=Array.isArray,XT=/\/$/,QT=c=>c.replace(XT,"");function ic(c,e,t="/"){let a,n={},r="",s="";const i=e.indexOf("#");let o=e.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(a=e.slice(0,o),r=e.slice(o+1,i>-1?i:e.length),n=c(r)),i>-1&&(a=a||e.slice(0,i),s=e.slice(i,e.length)),a=tE(a??e,t),{fullPath:a+(r&&"?")+r+s,path:a,query:n,hash:s}}function JT(c,e){const t=e.query?c(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function eo(c,e){return!e||!c.toLowerCase().startsWith(e.toLowerCase())?c:c.slice(e.length)||"/"}function eE(c,e,t){const a=e.matched.length-1,n=t.matched.length-1;return a>-1&&a===n&&Q6(e.matched[a],t.matched[n])&&gd(e.params,t.params)&&c(e.query)===c(t.query)&&e.hash===t.hash}function Q6(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function gd(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const t in c)if(!cE(c[t],e[t]))return!1;return!0}function cE(c,e){return c3(c)?co(c,e):c3(e)?co(e,c):c===e}function co(c,e){return c3(e)?c.length===e.length&&c.every((t,a)=>t===e[a]):c.length===1&&c[0]===e}function tE(c,e){if(c.startsWith("/"))return c;if(!c)return e;const t=e.split("/"),a=c.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=t.length-1,s,i;for(s=0;s<a.length;s++)if(i=a[s],i!==".")if(i==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+a.slice(s-(s===a.length?1:0)).join("/")}var w8;(function(c){c.pop="pop",c.push="push"})(w8||(w8={}));var Q0;(function(c){c.back="back",c.forward="forward",c.unknown=""})(Q0||(Q0={}));function aE(c){if(!c)if(L6){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),QT(c)}const nE=/^[^#]+#/;function rE(c,e){return c.replace(nE,"#")+e}function sE(c,e){const t=document.documentElement.getBoundingClientRect(),a=c.getBoundingClientRect();return{behavior:e.behavior,left:a.left-t.left-(e.left||0),top:a.top-t.top-(e.top||0)}}const Xe=()=>({left:window.pageXOffset,top:window.pageYOffset});function iE(c){let e;if("el"in c){const t=c.el,a=typeof t=="string"&&t.startsWith("#"),n=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!n)return;e=sE(n,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function to(c,e){return(history.state?history.state.position-e:-1)+c}const vt=new Map;function oE(c,e){vt.set(c,e)}function lE(c){const e=vt.get(c);return vt.delete(c),e}let fE=()=>location.protocol+"//"+location.host;function Cd(c,e){const{pathname:t,search:a,hash:n}=e,r=c.indexOf("#");if(r>-1){let i=n.includes(c.slice(r))?c.slice(r).length:1,o=n.slice(i);return o[0]!=="/"&&(o="/"+o),eo(o,"")}return eo(t,c)+a+n}function hE(c,e,t,a){let n=[],r=[],s=null;const i=({state:u})=>{const d=Cd(c,location),v=t.value,H=e.value;let y=0;if(u){if(t.value=d,e.value=u,s&&s===v){s=null;return}y=H?u.position-H.position:0}else a(d);n.forEach(M=>{M(t.value,v,{delta:y,type:w8.pop,direction:y?y>0?Q0.forward:Q0.back:Q0.unknown})})};function o(){s=t.value}function l(u){n.push(u);const d=()=>{const v=n.indexOf(u);v>-1&&n.splice(v,1)};return r.push(d),d}function f(){const{history:u}=window;u.state&&u.replaceState(z1({},u.state,{scroll:Xe()}),"")}function h(){for(const u of r)u();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:h}}function ao(c,e,t,a=!1,n=!1){return{back:c,current:e,forward:t,replaced:a,position:window.history.length,scroll:n?Xe():null}}function uE(c){const{history:e,location:t}=window,a={value:Cd(c,t)},n={value:e.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const h=c.indexOf("#"),u=h>-1?(t.host&&document.querySelector("base")?c:c.slice(h))+o:fE()+c+o;try{e[f?"replaceState":"pushState"](l,"",u),n.value=l}catch(d){console.error(d),t[f?"replace":"assign"](u)}}function s(o,l){const f=z1({},e.state,ao(n.value.back,o,n.value.forward,!0),l,{position:n.value.position});r(o,f,!0),a.value=o}function i(o,l){const f=z1({},n.value,e.state,{forward:o,scroll:Xe()});r(f.current,f,!0);const h=z1({},ao(a.value,o,null),{position:f.position+1},l);r(o,h,!1),a.value=o}return{location:a,state:n,push:i,replace:s}}function Hd(c){c=aE(c);const e=uE(c),t=hE(c,e.state,e.location,e.replace);function a(r,s=!0){s||t.pauseListeners(),history.go(r)}const n=z1({location:"",base:c,go:a,createHref:rE.bind(null,c)},e,t);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function dE(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),Hd(c)}function mE(c){return typeof c=="string"||c&&typeof c=="object"}function Md(c){return typeof c=="string"||typeof c=="symbol"}const s3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vd=Symbol("");var no;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(no||(no={}));function J6(c,e){return z1(new Error,{type:c,[Vd]:!0},e)}function y3(c,e){return c instanceof Error&&Vd in c&&(e==null||!!(c.type&e))}const ro="[^/]+?",pE={sensitive:!1,strict:!1,start:!0,end:!0},vE=/[.+*?^${}()[\]/\\]/g;function zE(c,e){const t=z1({},pE,e),a=[];let n=t.start?"^":"";const r=[];for(const l of c){const f=l.length?[]:[90];t.strict&&!l.length&&(n+="/");for(let h=0;h<l.length;h++){const u=l[h];let d=40+(t.sensitive?.25:0);if(u.type===0)h||(n+="/"),n+=u.value.replace(vE,"\\$&"),d+=40;else if(u.type===1){const{value:v,repeatable:H,optional:y,regexp:M}=u;r.push({name:v,repeatable:H,optional:y});const C=M||ro;if(C!==ro){d+=10;try{new RegExp(`(${C})`)}catch(m){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+m.message)}}let z=H?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(z=y&&l.length<2?`(?:/${z})`:"/"+z),y&&(z+="?"),n+=z,d+=20,y&&(d+=-8),H&&(d+=-20),C===".*"&&(d+=-50)}f.push(d)}a.push(f)}if(t.strict&&t.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}t.strict||(n+="/?"),t.end?n+="$":t.strict&&(n+="(?:/|$)");const s=new RegExp(n,t.sensitive?"":"i");function i(l){const f=l.match(s),h={};if(!f)return null;for(let u=1;u<f.length;u++){const d=f[u]||"",v=r[u-1];h[v.name]=d&&v.repeatable?d.split("/"):d}return h}function o(l){let f="",h=!1;for(const u of c){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const d of u)if(d.type===0)f+=d.value;else if(d.type===1){const{value:v,repeatable:H,optional:y}=d,M=v in l?l[v]:"";if(c3(M)&&!H)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=c3(M)?M.join("/"):M;if(!C)if(y)u.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);f+=C}}return f||"/"}return{re:s,score:a,keys:r,parse:i,stringify:o}}function gE(c,e){let t=0;for(;t<c.length&&t<e.length;){const a=e[t]-c[t];if(a)return a;t++}return c.length<e.length?c.length===1&&c[0]===40+40?-1:1:c.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CE(c,e){let t=0;const a=c.score,n=e.score;for(;t<a.length&&t<n.length;){const r=gE(a[t],n[t]);if(r)return r;t++}if(Math.abs(n.length-a.length)===1){if(so(a))return 1;if(so(n))return-1}return n.length-a.length}function so(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const HE={type:0,value:""},ME=/[a-zA-Z0-9_]/;function VE(c){if(!c)return[[]];if(c==="/")return[[HE]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(d){throw new Error(`ERR (${t})/"${l}": ${d}`)}let t=0,a=t;const n=[];let r;function s(){r&&n.push(r),r=[]}let i=0,o,l="",f="";function h(){l&&(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function u(){l+=o}for(;i<c.length;){if(o=c[i++],o==="\\"&&t!==2){a=t,t=4;continue}switch(t){case 0:o==="/"?(l&&h(),s()):o===":"?(h(),t=1):u();break;case 4:u(),t=a;break;case 1:o==="("?t=2:ME.test(o)?u():(h(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:t=3:f+=o;break;case 3:h(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),s(),n}function LE(c,e,t){const a=zE(VE(c.path),t),n=z1(a,{record:c,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function yE(c,e){const t=[],a=new Map;e=lo({strict:!1,end:!0,sensitive:!1},e);function n(f){return a.get(f)}function r(f,h,u){const d=!u,v=_E(f);v.aliasOf=u&&u.record;const H=lo(e,f),y=[v];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const m of z)y.push(z1({},v,{components:u?u.record.components:v.components,path:m,aliasOf:u?u.record:v}))}let M,C;for(const z of y){const{path:m}=z;if(h&&m[0]!=="/"){const L=h.record.path,N=L[L.length-1]==="/"?"":"/";z.path=h.record.path+(m&&N+m)}if(M=LE(z,h,H),u?u.alias.push(M):(C=C||M,C!==M&&C.alias.push(M),d&&f.name&&!oo(M)&&s(f.name)),v.children){const L=v.children;for(let N=0;N<L.length;N++)r(L[N],M,u&&u.children[N])}u=u||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&o(M)}return C?()=>{s(C)}:X0}function s(f){if(Md(f)){const h=a.get(f);h&&(a.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(s),h.alias.forEach(s))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&a.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function i(){return t}function o(f){let h=0;for(;h<t.length&&CE(f,t[h])>=0&&(f.record.path!==t[h].record.path||!Ld(f,t[h]));)h++;t.splice(h,0,f),f.record.name&&!oo(f)&&a.set(f.record.name,f)}function l(f,h){let u,d={},v,H;if("name"in f&&f.name){if(u=a.get(f.name),!u)throw J6(1,{location:f});H=u.record.name,d=z1(io(h.params,u.keys.filter(C=>!C.optional).map(C=>C.name)),f.params&&io(f.params,u.keys.map(C=>C.name))),v=u.stringify(d)}else if("path"in f)v=f.path,u=t.find(C=>C.re.test(v)),u&&(d=u.parse(v),H=u.record.name);else{if(u=h.name?a.get(h.name):t.find(C=>C.re.test(h.path)),!u)throw J6(1,{location:f,currentLocation:h});H=u.record.name,d=z1({},h.params,f.params),v=u.stringify(d)}const y=[];let M=u;for(;M;)y.unshift(M.record),M=M.parent;return{name:H,path:v,params:d,matched:y,meta:xE(y)}}return c.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:s,getRoutes:i,getRecordMatcher:n}}function io(c,e){const t={};for(const a of e)a in c&&(t[a]=c[a]);return t}function _E(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:bE(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function bE(c){const e={},t=c.props||!1;if("component"in c)e.default=t;else for(const a in c.components)e[a]=typeof t=="object"?t[a]:t;return e}function oo(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function xE(c){return c.reduce((e,t)=>z1(e,t.meta),{})}function lo(c,e){const t={};for(const a in c)t[a]=a in e?e[a]:c[a];return t}function Ld(c,e){return e.children.some(t=>t===c||Ld(c,t))}const yd=/#/g,wE=/&/g,NE=/\//g,SE=/=/g,kE=/\?/g,_d=/\+/g,AE=/%5B/g,TE=/%5D/g,bd=/%5E/g,EE=/%60/g,xd=/%7B/g,PE=/%7C/g,wd=/%7D/g,RE=/%20/g;function un(c){return encodeURI(""+c).replace(PE,"|").replace(AE,"[").replace(TE,"]")}function IE(c){return un(c).replace(xd,"{").replace(wd,"}").replace(bd,"^")}function zt(c){return un(c).replace(_d,"%2B").replace(RE,"+").replace(yd,"%23").replace(wE,"%26").replace(EE,"`").replace(xd,"{").replace(wd,"}").replace(bd,"^")}function DE(c){return zt(c).replace(SE,"%3D")}function OE(c){return un(c).replace(yd,"%23").replace(kE,"%3F")}function FE(c){return c==null?"":OE(c).replace(NE,"%2F")}function q7(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function BE(c){const e={};if(c===""||c==="?")return e;const a=(c[0]==="?"?c.slice(1):c).split("&");for(let n=0;n<a.length;++n){const r=a[n].replace(_d," "),s=r.indexOf("="),i=q7(s<0?r:r.slice(0,s)),o=s<0?null:q7(r.slice(s+1));if(i in e){let l=e[i];c3(l)||(l=e[i]=[l]),l.push(o)}else e[i]=o}return e}function fo(c){let e="";for(let t in c){const a=c[t];if(t=DE(t),a==null){a!==void 0&&(e+=(e.length?"&":"")+t);continue}(c3(a)?a.map(r=>r&&zt(r)):[a&&zt(a)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function UE(c){const e={};for(const t in c){const a=c[t];a!==void 0&&(e[t]=c3(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return e}const qE=Symbol(""),ho=Symbol(""),dn=Symbol(""),mn=Symbol(""),gt=Symbol("");function w0(){let c=[];function e(a){return c.push(a),()=>{const n=c.indexOf(a);n>-1&&c.splice(n,1)}}function t(){c=[]}return{add:e,list:()=>c.slice(),reset:t}}function c4(c,e,t,a,n){const r=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((s,i)=>{const o=h=>{h===!1?i(J6(4,{from:t,to:e})):h instanceof Error?i(h):mE(h)?i(J6(2,{from:e,to:h})):(r&&a.enterCallbacks[n]===r&&typeof h=="function"&&r.push(h),s())},l=c.call(a&&a.instances[n],e,t,o);let f=Promise.resolve(l);c.length<3&&(f=f.then(o)),f.catch(h=>i(h))})}function oc(c,e,t,a){const n=[];for(const r of c)for(const s in r.components){let i=r.components[s];if(!(e!=="beforeRouteEnter"&&!r.instances[s]))if($E(i)){const l=(i.__vccOpts||i)[e];l&&n.push(c4(l,t,a,r,s))}else{let o=i();n.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${r.path}"`));const f=ZT(l)?l.default:l;r.components[s]=f;const u=(f.__vccOpts||f)[e];return u&&c4(u,t,a,r,s)()}))}}return n}function $E(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function uo(c){const e=e2(dn),t=e2(mn),a=W1(()=>e.resolve(k1(c.to))),n=W1(()=>{const{matched:o}=a.value,{length:l}=o,f=o[l-1],h=t.matched;if(!f||!h.length)return-1;const u=h.findIndex(Q6.bind(null,f));if(u>-1)return u;const d=mo(o[l-2]);return l>1&&mo(f)===d&&h[h.length-1].path!==d?h.findIndex(Q6.bind(null,o[l-2])):u}),r=W1(()=>n.value>-1&&KE(t.params,a.value.params)),s=W1(()=>n.value>-1&&n.value===t.matched.length-1&&gd(t.params,a.value.params));function i(o={}){return GE(o)?e[k1(c.replace)?"replace":"push"](k1(c.to)).catch(X0):Promise.resolve()}return{route:a,href:W1(()=>a.value.href),isActive:r,isExactActive:s,navigate:i}}const WE=B3({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uo,setup(c,{slots:e}){const t=g3(uo(c)),{options:a}=e2(dn),n=W1(()=>({[po(c.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[po(c.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return c.custom?r:b2("a",{"aria-current":t.isExactActive?c.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:n.value},r)}}}),jE=WE;function GE(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function KE(c,e){for(const t in e){const a=e[t],n=c[t];if(typeof a=="string"){if(a!==n)return!1}else if(!c3(n)||n.length!==a.length||a.some((r,s)=>r!==n[s]))return!1}return!0}function mo(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const po=(c,e,t)=>c??e??t,YE=B3({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:t}){const a=e2(gt),n=W1(()=>c.route||a.value),r=e2(ho,0),s=W1(()=>{let l=k1(r);const{matched:f}=n.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),i=W1(()=>n.value.matched[s.value]);j4(ho,W1(()=>s.value+1)),j4(qE,i),j4(gt,n);const o=B2();return $4(()=>[o.value,i.value,c.name],([l,f,h],[u,d,v])=>{f&&(f.instances[h]=l,d&&d!==f&&l&&l===u&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),l&&f&&(!d||!Q6(f,d)||!u)&&(f.enterCallbacks[h]||[]).forEach(H=>H(l))},{flush:"post"}),()=>{const l=n.value,f=c.name,h=i.value,u=h&&h.components[f];if(!u)return vo(t.default,{Component:u,route:l});const d=h.props[f],v=d?d===!0?l.params:typeof d=="function"?d(l):d:null,y=b2(u,z1({},v,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(h.instances[f]=null)},ref:o}));return vo(t.default,{Component:y,route:l})||y}}});function vo(c,e){if(!c)return null;const t=c(e);return t.length===1?t[0]:t}const Nd=YE;function ZE(c){const e=yE(c.routes,c),t=c.parseQuery||BE,a=c.stringifyQuery||fo,n=c.history,r=w0(),s=w0(),i=w0(),o=f8(s3);let l=s3;L6&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=sc.bind(null,x=>""+x),h=sc.bind(null,FE),u=sc.bind(null,q7);function d(x,$){let O,Y;return Md(x)?(O=e.getRecordMatcher(x),Y=$):Y=x,e.addRoute(Y,O)}function v(x){const $=e.getRecordMatcher(x);$&&e.removeRoute($)}function H(){return e.getRoutes().map(x=>x.record)}function y(x){return!!e.getRecordMatcher(x)}function M(x,$){if($=z1({},$||o.value),typeof x=="string"){const V=ic(t,x,$.path),b=e.resolve({path:V.path},$),k=n.createHref(V.fullPath);return z1(V,b,{params:u(b.params),hash:q7(V.hash),redirectedFrom:void 0,href:k})}let O;if("path"in x)O=z1({},x,{path:ic(t,x.path,$.path).path});else{const V=z1({},x.params);for(const b in V)V[b]==null&&delete V[b];O=z1({},x,{params:h(V)}),$.params=h($.params)}const Y=e.resolve(O,$),p1=x.hash||"";Y.params=f(u(Y.params));const p=JT(a,z1({},x,{hash:IE(p1),path:Y.path})),g=n.createHref(p);return z1({fullPath:p,hash:p1,query:a===fo?UE(x.query):x.query||{}},Y,{redirectedFrom:void 0,href:g})}function C(x){return typeof x=="string"?ic(t,x,o.value.path):z1({},x)}function z(x,$){if(l!==x)return J6(8,{from:$,to:x})}function m(x){return S(x)}function L(x){return m(z1(C(x),{replace:!0}))}function N(x){const $=x.matched[x.matched.length-1];if($&&$.redirect){const{redirect:O}=$;let Y=typeof O=="function"?O(x):O;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=C(Y):{path:Y},Y.params={}),z1({query:x.query,hash:x.hash,params:"path"in Y?{}:x.params},Y)}}function S(x,$){const O=l=M(x),Y=o.value,p1=x.state,p=x.force,g=x.replace===!0,V=N(O);if(V)return S(z1(C(V),{state:typeof V=="object"?z1({},p1,V.state):p1,force:p,replace:g}),$||O);const b=O;b.redirectedFrom=$;let k;return!p&&eE(a,Y,O)&&(k=J6(16,{to:b,from:Y}),n3(Y,Y,!0,!1)),(k?Promise.resolve(k):E(b,Y)).catch(A=>y3(A)?y3(A,2)?A:$3(A):K(A,b,Y)).then(A=>{if(A){if(y3(A,2))return S(z1({replace:g},C(A.to),{state:typeof A.to=="object"?z1({},p1,A.to.state):p1,force:p}),$||b)}else A=R(b,Y,!0,g,p1);return W(b,Y,A),A})}function _(x,$){const O=z(x,$);return O?Promise.reject(O):Promise.resolve()}function w(x){const $=v6.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(x):x()}function E(x,$){let O;const[Y,p1,p]=XE(x,$);O=oc(Y.reverse(),"beforeRouteLeave",x,$);for(const V of Y)V.leaveGuards.forEach(b=>{O.push(c4(b,x,$))});const g=_.bind(null,x,$);return O.push(g),o2(O).then(()=>{O=[];for(const V of r.list())O.push(c4(V,x,$));return O.push(g),o2(O)}).then(()=>{O=oc(p1,"beforeRouteUpdate",x,$);for(const V of p1)V.updateGuards.forEach(b=>{O.push(c4(b,x,$))});return O.push(g),o2(O)}).then(()=>{O=[];for(const V of p)if(V.beforeEnter)if(c3(V.beforeEnter))for(const b of V.beforeEnter)O.push(c4(b,x,$));else O.push(c4(V.beforeEnter,x,$));return O.push(g),o2(O)}).then(()=>(x.matched.forEach(V=>V.enterCallbacks={}),O=oc(p,"beforeRouteEnter",x,$),O.push(g),o2(O))).then(()=>{O=[];for(const V of s.list())O.push(c4(V,x,$));return O.push(g),o2(O)}).catch(V=>y3(V,8)?V:Promise.reject(V))}function W(x,$,O){i.list().forEach(Y=>w(()=>Y(x,$,O)))}function R(x,$,O,Y,p1){const p=z(x,$);if(p)return p;const g=$===s3,V=L6?history.state:{};O&&(Y||g?n.replace(x.fullPath,z1({scroll:g&&V&&V.scroll},p1)):n.push(x.fullPath,p1)),o.value=x,n3(x,$,O,g),$3()}let J;function C1(){J||(J=n.listen((x,$,O)=>{if(!b5.listening)return;const Y=M(x),p1=N(Y);if(p1){S(z1(p1,{replace:!0}),Y).catch(X0);return}l=Y;const p=o.value;L6&&oE(to(p.fullPath,O.delta),Xe()),E(Y,p).catch(g=>y3(g,12)?g:y3(g,2)?(S(g.to,Y).then(V=>{y3(V,20)&&!O.delta&&O.type===w8.pop&&n.go(-1,!1)}).catch(X0),Promise.reject()):(O.delta&&n.go(-O.delta,!1),K(g,Y,p))).then(g=>{g=g||R(Y,p,!1),g&&(O.delta&&!y3(g,8)?n.go(-O.delta,!1):O.type===w8.pop&&y3(g,20)&&n.go(-1,!1)),W(Y,p,g)}).catch(X0)}))}let u1=w0(),B=w0(),r1;function K(x,$,O){$3(x);const Y=B.list();return Y.length?Y.forEach(p1=>p1(x,$,O)):console.error(x),Promise.reject(x)}function W2(){return r1&&o.value!==s3?Promise.resolve():new Promise((x,$)=>{u1.add([x,$])})}function $3(x){return r1||(r1=!x,C1(),u1.list().forEach(([$,O])=>x?O(x):$()),u1.reset()),x}function n3(x,$,O,Y){const{scrollBehavior:p1}=c;if(!L6||!p1)return Promise.resolve();const p=!O&&lE(to(x.fullPath,0))||(Y||!O)&&history.state&&history.state.scroll||null;return L4().then(()=>p1(x,$,p)).then(g=>g&&iE(g)).catch(g=>K(g,x,$))}const H2=x=>n.go(x);let p6;const v6=new Set,b5={currentRoute:o,listening:!0,addRoute:d,removeRoute:v,hasRoute:y,getRoutes:H,resolve:M,options:c,push:m,replace:L,go:H2,back:()=>H2(-1),forward:()=>H2(1),beforeEach:r.add,beforeResolve:s.add,afterEach:i.add,onError:B.add,isReady:W2,install(x){const $=this;x.component("RouterLink",jE),x.component("RouterView",Nd),x.config.globalProperties.$router=$,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>k1(o)}),L6&&!p6&&o.value===s3&&(p6=!0,m(n.location).catch(p1=>{}));const O={};for(const p1 in s3)Object.defineProperty(O,p1,{get:()=>o.value[p1],enumerable:!0});x.provide(dn,$),x.provide(mn,j8(O)),x.provide(gt,o);const Y=x.unmount;v6.add(x),x.unmount=function(){v6.delete(x),v6.size<1&&(l=s3,J&&J(),J=null,o.value=s3,p6=!1,r1=!1),Y()}}};function o2(x){return x.reduce(($,O)=>$.then(()=>w(O)),Promise.resolve())}return b5}function XE(c,e){const t=[],a=[],n=[],r=Math.max(e.matched.length,c.matched.length);for(let s=0;s<r;s++){const i=e.matched[s];i&&(c.matched.find(l=>Q6(l,i))?a.push(i):t.push(i));const o=c.matched[s];o&&(e.matched.find(l=>Q6(l,o))||n.push(o))}return[t,a,n]}function QE(){return e2(mn)}const zo=[{name:"auth-login",path:"/auth/login",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./login.464dbfe0.js"),["./login.464dbfe0.js","./input.5233a104.js","./button.0a9f82c1.js","./button.47ef1e85.css","./input.725af75b.css","./nuxt-link.63f25bcd.js","./index.54ec8d12.js","./index.a14acd15.css","./index.399e4ec2.js","./index.2b473548.css","./logo.52c09cc3.js"],import.meta.url).then(c=>c.default||c)},{name:"auth-register",path:"/auth/register",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./register.c26c5b1e.js"),["./register.c26c5b1e.js","./input.5233a104.js","./button.0a9f82c1.js","./button.47ef1e85.css","./input.725af75b.css","./nuxt-link.63f25bcd.js","./index.54ec8d12.js","./index.a14acd15.css","./index.399e4ec2.js","./index.2b473548.css","./logo.52c09cc3.js"],import.meta.url).then(c=>c.default||c)},{name:"example-auth-login",path:"/example/auth/login",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./login.b5c2471a.js"),["./login.b5c2471a.js","./nuxt-link.63f25bcd.js"],import.meta.url).then(c=>c.default||c)},{name:"example-auth-register",path:"/example/auth/register",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./register.ace40847.js"),[],import.meta.url).then(c=>c.default||c)},{name:"example-order",path:"/example/order",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./index.30166d9c.js"),["./index.30166d9c.js","./input.5233a104.js","./button.0a9f82c1.js","./button.47ef1e85.css","./input.725af75b.css","./progress.c29ff1b3.js","./progress.1e8abf41.css","./overlay.634e7ac5.js","./auth.ed90e6d4.js","./overlay.d290fda9.css","./input-number.de728674.js","./input-number.3792883a.css","./cart.15e2a50f.js","./index.6e5cf974.css"],import.meta.url).then(c=>c.default||c)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./index.739bdb4b.js"),["./index.739bdb4b.js","./index.3f063dd8.css"],import.meta.url).then(c=>c.default||c)},{name:"order-AdminOrderPage",path:"/order/AdminOrderPage",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./AdminOrderPage.eb0edbad.js"),["./AdminOrderPage.eb0edbad.js","./input.5233a104.js","./button.0a9f82c1.js","./button.47ef1e85.css","./input.725af75b.css","./progress.c29ff1b3.js","./progress.1e8abf41.css","./overlay.634e7ac5.js","./auth.ed90e6d4.js","./overlay.d290fda9.css","./index.54ec8d12.js","./index.a14acd15.css","./index.399e4ec2.js","./index.2b473548.css","./AdminOrderPage.80cb6b02.css","./icon.cc1f23bd.css"],import.meta.url).then(c=>c.default||c)},{name:"order-UserOrderPage",path:"/order/UserOrderPage",meta:{},alias:[],redirect:void 0,component:()=>R2(()=>import("./UserOrderPage.6e69a1ea.js"),["./UserOrderPage.6e69a1ea.js","./button.0a9f82c1.js","./button.47ef1e85.css","./overlay.634e7ac5.js","./auth.ed90e6d4.js","./overlay.d290fda9.css","./cart.15e2a50f.js","./UserOrderPage.00161a28.css"],import.meta.url).then(c=>c.default||c)}],Sd=(c,e,t)=>(e=e===!0?{}:e,{default:()=>{var a;return e?b2(c,e,t):(a=t.default)==null?void 0:a.call(t)}});function go(c){const e=(c==null?void 0:c.meta.key)??c.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var a;return((a=c.params[t.slice(1)])==null?void 0:a.toString())||""});return typeof e=="function"?e(c):e}function JE(c,e){return c===e?!1:go(c)!==go(e)?!0:!c.matched.every((a,n)=>{var r,s;return a.components&&a.components.default===((s=(r=e.matched[n])==null?void 0:r.components)==null?void 0:s.default)})}const eP={scrollBehavior(c,e,t){var l;const a=I1(),n=((l=h6().options)==null?void 0:l.scrollBehaviorType)??"auto";let r=t||void 0;const s=typeof c.meta.scrollToTop=="function"?c.meta.scrollToTop(c,e):c.meta.scrollToTop;if(!r&&e&&c&&s!==!1&&JE(c,e)&&(r={left:0,top:0}),c.path===e.path){if(e.hash&&!c.hash)return{left:0,top:0};if(c.hash)return{el:c.hash,top:Co(c.hash),behavior:n}}const i=f=>!!(f.meta.pageTransition??Qc),o=i(e)&&i(c)?"page:transition:finish":"page:finish";return new Promise(f=>{a.hooks.hookOnce(o,async()=>{await L4(),c.hash&&(r={el:c.hash,top:Co(c.hash),behavior:n}),f(r)})})}};function Co(c){try{const e=document.querySelector(c);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}const cP={hashMode:!1,scrollBehaviorType:"auto"},M2={...cP,...eP},tP=async c=>{var o;let e,t;if(!((o=c.meta)!=null&&o.validate))return;const a=I1(),n=h6();if(([e,t]=v8(()=>Promise.resolve(c.meta.validate(c))),e=await e,t(),e)===!0)return;const s=Ea({statusCode:404,statusMessage:`Page Not Found: ${c.fullPath}`}),i=n.beforeResolve(l=>{if(i(),l===c){const f=n.afterEach(async()=>{f(),await a.runWithContext(()=>y6(s)),window.history.pushState({},"",c.fullPath)});return!1}})},aP=async c=>{let e,t;const a=([e,t]=v8(()=>jh(c.path)),e=await e,t(),e);if(a.redirect)return a.redirect},nP=[tP,aP],J0={authentic:()=>R2(()=>import("./authentic.4ed993c7.js"),[],import.meta.url)};function rP(c,e,t){const{pathname:a,search:n,hash:r}=e,s=c.indexOf("#");if(s>-1){const l=r.includes(c.slice(s))?c.slice(s).length:1;let f=r.slice(l);return f[0]!=="/"&&(f="/"+f),di(f,"")}const i=di(a,c),o=!t||eN(i,t,{trailingSlash:!0})?i:t;return o+(o.includes("?")?"":n)+r}const sP=w2({name:"nuxt:router",enforce:"pre",async setup(c){var H,y;let e,t,a=we().app.baseURL;M2.hashMode&&!a.includes("#")&&(a+="#");const n=((H=M2.history)==null?void 0:H.call(M2,a))??(M2.hashMode?dE(a):Hd(a)),r=((y=M2.routes)==null?void 0:y.call(M2,zo))??zo;let s;const i=rP(a,window.location,c.payload.path),o=ZE({...M2,scrollBehavior:(M,C,z)=>{var m;if(C===s3){s=z;return}return o.options.scrollBehavior=M2.scrollBehavior,(m=M2.scrollBehavior)==null?void 0:m.call(M2,M,s3,s||z)},history:n,routes:r});c.vueApp.use(o);const l=f8(o.currentRoute.value);o.afterEach((M,C)=>{l.value=C}),Object.defineProperty(c.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const f=f8(o.resolve(i)),h=()=>{f.value=o.currentRoute.value};c.hook("page:finish",h),o.afterEach((M,C)=>{var z,m,L,N;((m=(z=M.matched[0])==null?void 0:z.components)==null?void 0:m.default)===((N=(L=C.matched[0])==null?void 0:L.components)==null?void 0:N.default)&&h()});const u={};for(const M in f.value)Object.defineProperty(u,M,{get:()=>f.value[M]});c._route=j8(u),c._middleware=c._middleware||{global:[],named:{}};const d=Ne();try{[e,t]=v8(()=>o.isReady()),await e,t()}catch(M){[e,t]=v8(()=>c.runWithContext(()=>y6(M))),await e,t()}const v=c.payload.state._layout;return o.beforeEach(async(M,C)=>{var z;M.meta=g3(M.meta),c.isHydrating&&v&&!J4(M.meta.layout)&&(M.meta.layout=v),c._processingMiddleware=!0;{const m=new Set([...nP,...c._middleware.global]);for(const L of M.matched){const N=L.meta.middleware;if(N)if(Array.isArray(N))for(const S of N)m.add(S);else m.add(N)}for(const L of m){const N=typeof L=="string"?c._middleware.named[L]||await((z=J0[L])==null?void 0:z.call(J0).then(_=>_.default||_)):L;if(!N)throw new Error(`Unknown route middleware: '${L}'.`);const S=await c.runWithContext(()=>N(M,C));if(!c.payload.serverRendered&&c.isHydrating&&(S===!1||S instanceof Error)){const _=S||Zc({statusCode:404,statusMessage:`Page Not Found: ${i}`});return await c.runWithContext(()=>y6(_)),!1}if(S!==!0&&(S||S===!1))return S}}}),o.onError(()=>{delete c._processingMiddleware}),o.afterEach(async(M,C,z)=>{delete c._processingMiddleware,!c.isHydrating&&d.value&&await c.runWithContext(FS),M.matched.length===0&&await c.runWithContext(()=>y6(Zc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${M.fullPath}`})))}),c.hooks.hookOnce("app:created",async()=>{try{await o.replace({...o.resolve(i),name:void 0,force:!0}),o.options.scrollBehavior=M2.scrollBehavior}catch(M){await c.runWithContext(()=>y6(M))}}),{provide:{router:o}}}}),Ho=globalThis.requestIdleCallback||(c=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{c(t)},1)}),WH1=globalThis.cancelIdleCallback||(c=>{clearTimeout(c)}),kd=c=>{const e=I1();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Ho(c)}):Ho(c)},iP=w2({name:"nuxt:payload",setup(c){h6().beforeResolve(async(e,t)=>{if(e.path===t.path)return;const a=await _i(e.path);a&&Object.assign(c.static.data,a.data)}),kd(()=>{var e;c.hooks.hook("link:prefetch",async t=>{xe(t).protocol||await _i(t)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Se,1e3)})}}),oP=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ad;const s5=c=>Ad=c,Td=Symbol();function Ct(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var e8;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(e8||(e8={}));function lP(){const c=ge(!0),e=c.run(()=>B2({}));let t=[],a=[];const n=q6({install(r){s5(n),n._a=r,r.provide(Td,n),r.config.globalProperties.$pinia=n,a.forEach(s=>t.push(s)),a=[]},use(r){return!this._a&&!oP?a.push(r):t.push(r),this},_p:t,_a:null,_e:c,_s:new Map,state:e});return n}const Ed=()=>{};function Mo(c,e,t,a=Ed){c.push(e);const n=()=>{const r=c.indexOf(e);r>-1&&(c.splice(r,1),a())};return!t&&uf()&&gb(n),n}function H6(c,...e){c.slice().forEach(t=>{t(...e)})}const fP=c=>c();function Ht(c,e){c instanceof Map&&e instanceof Map&&e.forEach((t,a)=>c.set(a,t)),c instanceof Set&&e instanceof Set&&e.forEach(c.add,c);for(const t in e){if(!e.hasOwnProperty(t))continue;const a=e[t],n=c[t];Ct(n)&&Ct(a)&&c.hasOwnProperty(t)&&!P1(a)&&!f4(a)?c[t]=Ht(n,a):c[t]=a}return c}const hP=Symbol();function uP(c){return!Ct(c)||!c.hasOwnProperty(hP)}const{assign:Q3}=Object;function dP(c){return!!(P1(c)&&c.effect)}function mP(c,e,t,a){const{state:n,actions:r,getters:s}=e,i=t.state.value[c];let o;function l(){i||(t.state.value[c]=n?n():{});const f=Ub(t.state.value[c]);return Q3(f,r,Object.keys(s||{}).reduce((h,u)=>(h[u]=q6(W1(()=>{s5(t);const d=t._s.get(c);return s[u].call(d,d)})),h),{}))}return o=Pd(c,l,e,t,a,!0),o}function Pd(c,e,t={},a,n,r){let s;const i=Q3({actions:{}},t),o={deep:!0};let l,f,h=[],u=[],d;const v=a.state.value[c];!r&&!v&&(a.state.value[c]={}),B2({});let H;function y(_){let w;l=f=!1,typeof _=="function"?(_(a.state.value[c]),w={type:e8.patchFunction,storeId:c,events:d}):(Ht(a.state.value[c],_),w={type:e8.patchObject,payload:_,storeId:c,events:d});const E=H=Symbol();L4().then(()=>{H===E&&(l=!0)}),f=!0,H6(h,w,a.state.value[c])}const M=r?function(){const{state:w}=t,E=w?w():{};this.$patch(W=>{Q3(W,E)})}:Ed;function C(){s.stop(),h=[],u=[],a._s.delete(c)}function z(_,w){return function(){s5(a);const E=Array.from(arguments),W=[],R=[];function J(B){W.push(B)}function C1(B){R.push(B)}H6(u,{args:E,name:_,store:L,after:J,onError:C1});let u1;try{u1=w.apply(this&&this.$id===c?this:L,E)}catch(B){throw H6(R,B),B}return u1 instanceof Promise?u1.then(B=>(H6(W,B),B)).catch(B=>(H6(R,B),Promise.reject(B))):(H6(W,u1),u1)}}const m={_p:a,$id:c,$onAction:Mo.bind(null,u),$patch:y,$reset:M,$subscribe(_,w={}){const E=Mo(h,_,w.detached,()=>W()),W=s.run(()=>$4(()=>a.state.value[c],R=>{(w.flush==="sync"?f:l)&&_({storeId:c,type:e8.direct,events:d},R)},Q3({},o,w)));return E},$dispose:C},L=g3(m);a._s.set(c,L);const S=(a._a&&a._a.runWithContext||fP)(()=>a._e.run(()=>(s=ge()).run(e)));for(const _ in S){const w=S[_];if(P1(w)&&!dP(w)||f4(w))r||(v&&uP(w)&&(P1(w)?w.value=v[_]:Ht(w,v[_])),a.state.value[c][_]=w);else if(typeof w=="function"){const E=z(_,w);S[_]=E,i.actions[_]=w}}return Q3(L,S),Q3(f1(L),S),Object.defineProperty(L,"$state",{get:()=>a.state.value[c],set:_=>{y(w=>{Q3(w,_)})}}),a._p.forEach(_=>{Q3(L,s.run(()=>_({store:L,app:a._a,pinia:a,options:i})))}),v&&r&&t.hydrate&&t.hydrate(L.$state,v),l=!0,f=!0,L}function jH1(c,e,t){let a,n;const r=typeof e=="function";typeof c=="string"?(a=c,n=r?t:e):(n=c,a=c.id);function s(i,o){const l=ya();return i=i||(l?e2(Td,null):null),i&&s5(i),i=Ad,i._s.has(a)||(r?Pd(a,e,n,i):mP(a,n,i)),i._s.get(a)}return s.$id=a,s}function pP(c={}){const e=c.path||window.location.pathname;let t={};try{t=x7(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(c.force||(t==null?void 0:t.path)!==e||(t==null?void 0:t.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(c.ttl??1e4)}))}catch{}if(c.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:I1().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const vP=w2(c=>{const e=lP();return c.vueApp.use(e),s5(e),c.payload&&c.payload.pinia&&(e.state.value=c.payload.pinia),{provide:{pinia:e}}}),zP=w2({name:"nuxt:global-components"}),O4={default:()=>R2(()=>import("./default.9927c054.js"),["./default.9927c054.js","./nuxt-link.63f25bcd.js","./index.54ec8d12.js","./button.0a9f82c1.js","./button.47ef1e85.css","./index.a14acd15.css","./input-number.de728674.js","./input.5233a104.js","./input.725af75b.css","./input-number.3792883a.css","./auth.ed90e6d4.js","./cart.15e2a50f.js","./logo.52c09cc3.js","./default.dd7be457.css","./icon.cc1f23bd.css"],import.meta.url).then(c=>c.default||c)},gP=w2({name:"nuxt:prefetch",setup(c){const e=h6();c.hooks.hook("app:mounted",()=>{e.beforeEach(async t=>{var n;const a=(n=t==null?void 0:t.meta)==null?void 0:n.layout;a&&typeof O4[a]=="function"&&await O4[a]()})}),c.hooks.hook("link:prefetch",t=>{var s,i,o,l;if(K8(t))return;const a=e.resolve(t);if(!a)return;const n=(s=a==null?void 0:a.meta)==null?void 0:s.layout;let r=Array.isArray((i=a==null?void 0:a.meta)==null?void 0:i.middleware)?(o=a==null?void 0:a.meta)==null?void 0:o.middleware:[(l=a==null?void 0:a.meta)==null?void 0:l.middleware];r=r.filter(f=>typeof f=="string");for(const f of r)typeof J0[f]=="function"&&J0[f]();n&&typeof O4[n]=="function"&&O4[n]()})}});var CP="firebase",HP="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */T2(CP,HP,"app");const MP=w2(()=>({provide:{firebaseApp:fu(we().public.vuefire.config)}}));function pn(c,e){var t={};for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&e.indexOf(a)<0&&(t[a]=c[a]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(c);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(c,a[n])&&(t[a[n]]=c[a[n]]);return t}function Rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Id=Rd,Dd=new d0("auth","Firebase",Rd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $7=new X8("@firebase/auth");function VP(c,...e){$7.logLevel<=v1.WARN&&$7.warn(`Auth (${y4}): ${c}`,...e)}function h7(c,...e){$7.logLevel<=v1.ERROR&&$7.error(`Auth (${y4}): ${c}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(c,...e){throw vn(c,...e)}function p3(c,...e){return vn(c,...e)}function LP(c,e,t){const a=Object.assign(Object.assign({},Id()),{[e]:t});return new d0("auth","Firebase",a).create(e,{appName:c.name})}function vn(c,...e){if(typeof c!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=c.name),c._errorFactory.create(t,...a)}return Dd.create(c,...e)}function c1(c,e,...t){if(!c)throw vn(e,...t)}function N3(c){const e="INTERNAL ASSERTION FAILED: "+c;throw h7(e),new Error(e)}function R3(c,e){c||N3(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.href)||""}function yP(){return Vo()==="http:"||Vo()==="https:"}function Vo(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yP()||ik()||"connection"in navigator)?navigator.onLine:!0}function bP(){if(typeof navigator>"u")return null;const c=navigator;return c.languages&&c.languages[0]||c.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e,t){this.shortDelay=e,this.longDelay=t,R3(t>e,"Short delay should be less than long delay!"),this.isMobile=Ia()||nu()}get(){return _P()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(c,e){R3(c.emulator,"Emulator should always be set here");const{url:t}=c.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;N3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;N3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;N3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new i5(3e4,6e4);function x4(c,e){return c.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:c.tenantId}):e}async function w4(c,e,t,a,n={}){return Fd(c,n,async()=>{let r={},s={};a&&(e==="GET"?s=a:r={body:JSON.stringify(a)});const i=m0(Object.assign({key:c.config.apiKey},s)).slice(1),o=await c._getAdditionalHeaders();return o["Content-Type"]="application/json",c.languageCode&&(o["X-Firebase-Locale"]=c.languageCode),Od.fetch()(Bd(c,c.config.apiHost,t,i),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},r))})}async function Fd(c,e,t){c._canInitEmulator=!1;const a=Object.assign(Object.assign({},xP),e);try{const n=new SP(c),r=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw q5(c,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const i=r.ok?s.errorMessage:s.error.message,[o,l]=i.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw q5(c,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw q5(c,"email-already-in-use",s);if(o==="USER_DISABLED")throw q5(c,"user-disabled",s);const f=a[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw LP(c,f,l);t3(c,f)}}catch(n){if(n instanceof M3)throw n;t3(c,"network-request-failed",{message:String(n)})}}async function o5(c,e,t,a,n={}){const r=await w4(c,e,t,a,n);return"mfaPendingCredential"in r&&t3(c,"multi-factor-auth-required",{_serverResponse:r}),r}function Bd(c,e,t,a){const n=`${e}${t}?${a}`;return c.config.emulator?zn(c.config,n):`${c.config.apiScheme}://${n}`}function NP(c){switch(c){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(p3(this.auth,"network-request-failed")),wP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q5(c,e,t){const a={appName:c.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const n=p3(c,e,a);return n.customData._tokenResponse=t,n}function Lo(c){return c!==void 0&&c.enterprise!==void 0}class kP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return NP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function AP(c,e){return w4(c,"GET","/v2/recaptchaConfig",x4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(c,e){return w4(c,"POST","/v1/accounts:delete",e)}async function EP(c,e){return w4(c,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c8(c){if(c)try{const e=new Date(Number(c));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PP(c,e=!1){const t=$1(c),a=await t.getIdToken(e),n=gn(a);c1(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,s=r==null?void 0:r.sign_in_provider;return{claims:n,token:a,authTime:c8(lc(n.auth_time)),issuedAtTime:c8(lc(n.iat)),expirationTime:c8(lc(n.exp)),signInProvider:s||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function lc(c){return Number(c)*1e3}function gn(c){const[e,t,a]=c.split(".");if(e===void 0||t===void 0||a===void 0)return h7("JWT malformed, contained fewer than 3 sections"),null;try{const n=k7(t);return n?JSON.parse(n):(h7("Failed to decode base64 JWT payload"),null)}catch(n){return h7("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function RP(c){const e=gn(c);return c1(e,"internal-error"),c1(typeof e.exp<"u","internal-error"),c1(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N8(c,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof M3&&IP(a)&&c.auth.currentUser===c&&await c.auth.signOut(),a}}function IP({code:c}){return c==="auth/user-disabled"||c==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=c8(this.lastLoginAt),this.creationTime=c8(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W7(c){var e;const t=c.auth,a=await c.getIdToken(),n=await N8(c,EP(t,{idToken:a}));c1(n==null?void 0:n.users.length,t,"internal-error");const r=n.users[0];c._notifyReloadListener(r);const s=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?BP(r.providerUserInfo):[],i=FP(c.providerData,s),o=c.isAnonymous,l=!(c.email&&r.passwordHash)&&!(i!=null&&i.length),f=o?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ud(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(c,h)}async function OP(c){const e=$1(c);await W7(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FP(c,e){return[...c.filter(a=>!e.some(n=>n.providerId===a.providerId)),...e]}function BP(c){return c.map(e=>{var{providerId:t}=e,a=pn(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(c,e){const t=await Fd(c,{},async()=>{const a=m0({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:r}=c.config,s=Bd(c,n,"/v1/token",`key=${r}`),i=await c._getAdditionalHeaders();return i["Content-Type"]="application/x-www-form-urlencoded",Od.fetch()(s,{method:"POST",headers:i,body:a})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qP(c,e){return w4(c,"POST","/v2/accounts:revokeToken",x4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S8{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){c1(e.idToken,"internal-error"),c1(typeof e.idToken<"u","internal-error"),c1(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return c1(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:n,expiresIn:r}=await UP(e,t);this.updateTokensAndExpiration(a,n,Number(r))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:n,expirationTime:r}=t,s=new S8;return a&&(c1(typeof a=="string","internal-error",{appName:e}),s.refreshToken=a),n&&(c1(typeof n=="string","internal-error",{appName:e}),s.accessToken=n),r&&(c1(typeof r=="number","internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new S8,this.toJSON())}_performRefresh(){return N3("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(c,e){c1(typeof c=="string"||typeof c>"u","internal-error",{appName:e})}class Y4{constructor(e){var{uid:t,auth:a,stsTokenManager:n}=e,r=pn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ud(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await N8(this,this.stsTokenManager.getToken(this.auth,e));return c1(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return PP(this,e)}reload(){return OP(this)}_assign(e){this!==e&&(c1(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Y4(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){c1(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await W7(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await N8(this,TP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,n,r,s,i,o,l,f;const h=(a=t.displayName)!==null&&a!==void 0?a:void 0,u=(n=t.email)!==null&&n!==void 0?n:void 0,d=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,v=(s=t.photoURL)!==null&&s!==void 0?s:void 0,H=(i=t.tenantId)!==null&&i!==void 0?i:void 0,y=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,M=(l=t.createdAt)!==null&&l!==void 0?l:void 0,C=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:m,isAnonymous:L,providerData:N,stsTokenManager:S}=t;c1(z&&S,e,"internal-error");const _=S8.fromJSON(this.name,S);c1(typeof z=="string",e,"internal-error"),Y3(h,e.name),Y3(u,e.name),c1(typeof m=="boolean",e,"internal-error"),c1(typeof L=="boolean",e,"internal-error"),Y3(d,e.name),Y3(v,e.name),Y3(H,e.name),Y3(y,e.name),Y3(M,e.name),Y3(C,e.name);const w=new Y4({uid:z,auth:e,email:u,emailVerified:m,displayName:h,isAnonymous:L,photoURL:v,phoneNumber:d,tenantId:H,stsTokenManager:_,createdAt:M,lastLoginAt:C});return N&&Array.isArray(N)&&(w.providerData=N.map(E=>Object.assign({},E))),y&&(w._redirectEventId=y),w}static async _fromIdTokenResponse(e,t,a=!1){const n=new S8;n.updateFromServerResponse(t);const r=new Y4({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:a});return await W7(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map;function S3(c){R3(c instanceof Function,"Expected a class definition");let e=yo.get(c);return e?(R3(e instanceof c,"Instance stored in cache mismatched with class"),e):(e=new c,yo.set(c,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qd.type="NONE";const _o=qd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u7(c,e,t){return`firebase:${c}:${e}:${t}`}class I6{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:n,name:r}=this.auth;this.fullUserKey=u7(this.userKey,n.apiKey,r),this.fullPersistenceKey=u7("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Y4._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new I6(S3(_o),e,a);const n=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=n[0]||S3(_o);const s=u7(a,e.config.apiKey,e.name);let i=null;for(const l of t)try{const f=await l._get(s);if(f){const h=Y4._fromJSON(e,f);l!==r&&(i=h),r=l;break}}catch{}const o=n.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new I6(r,e,a):(r=o[0],i&&await r._set(s,i.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(s)}catch{}})),new I6(r,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(c){const e=c.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kd(e))return"Blackberry";if(Yd(e))return"Webos";if(Cn(e))return"Safari";if((e.includes("chrome/")||Wd(e))&&!e.includes("edge/"))return"Chrome";if(Gd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=c.match(t);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function $d(c=u2()){return/firefox\//i.test(c)}function Cn(c=u2()){const e=c.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wd(c=u2()){return/crios\//i.test(c)}function jd(c=u2()){return/iemobile/i.test(c)}function Gd(c=u2()){return/android/i.test(c)}function Kd(c=u2()){return/blackberry/i.test(c)}function Yd(c=u2()){return/webos/i.test(c)}function Qe(c=u2()){return/iphone|ipad|ipod/i.test(c)||/macintosh/i.test(c)&&/mobile/i.test(c)}function $P(c=u2()){var e;return Qe(c)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WP(){return ok()&&document.documentMode===10}function Zd(c=u2()){return Qe(c)||Gd(c)||Yd(c)||Kd(c)||/windows phone/i.test(c)||jd(c)}function jP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(c,e=[]){let t;switch(c){case"Browser":t=bo(u2());break;case"Worker":t=`${bo(u2())}-${c}`;break;default:t=c}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${y4}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=r=>new Promise((s,i)=>{try{const o=e(r);s(o)}catch(o){i(o)}});a.onAbort=t,this.queue.push(a);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(c,e={}){return w4(c,"GET","/v2/passwordPolicy",x4(c,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=6;class ZP{constructor(e){var t,a,n,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=s.minPasswordLength)!==null&&t!==void 0?t:YP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,a,n,r,s,i;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(t=o.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(a=o.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(n=o.containsLowercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(r=o.containsUppercaseLetter)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(s=o.containsNumericCharacter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(i=o.containsNonAlphanumericCharacter)!==null&&i!==void 0?i:!0),o}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let n=0;n<e.length;n++)a=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,t,a,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xo(this),this.idTokenSubscription=new xo(this),this.beforeStateQueue=new GP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=S3(t)),this._initializationPromise=this.queue(async()=>{var a,n;if(!this._deleted&&(this.persistenceManager=await I6.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const a=await this.assertedPersistence.getCurrentUser();let n=a,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,i=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o!=null&&o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return c1(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await W7(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?$1(e):null;return t&&c1(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&c1(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(S3(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KP(this),t=new ZP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new d0("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await qP(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&S3(e)||this._popupRedirectResolver;c1(t,this,"argument-error"),this.redirectPersistenceManager=await I6.create(this,[S3(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,n){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let s=!1;const i=this._isInitialized?Promise.resolve():this._initializationPromise;if(c1(i,this,"internal-error"),i.then(()=>{s||r(this.currentUser)}),typeof t=="function"){const o=e.addObserver(t,a,n);return()=>{s=!0,o()}}else{const o=e.addObserver(t);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return c1(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&VP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function u6(c){return $1(c)}class xo{constructor(e){this.auth=e,this.observer=null,this.addObserver=vk(t=>this.observer=t)}get next(){return c1(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(){var c,e;return(e=(c=document.getElementsByTagName("head"))===null||c===void 0?void 0:c[0])!==null&&e!==void 0?e:document}function Qd(c){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",c),a.onload=e,a.onerror=n=>{const r=p3("internal-error");r.customData=n,t(r)},a.type="text/javascript",a.charset="UTF-8",QP().appendChild(a)})}function JP(c){return`__${c}${Math.floor(Math.random()*1e6)}`}const eR="https://www.google.com/recaptcha/enterprise.js?render=",cR="recaptcha-enterprise",tR="NO_RECAPTCHA";class aR{constructor(e){this.type=cR,this.auth=u6(e)}async verify(e="verify",t=!1){async function a(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(s,i)=>{AP(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)i(new Error("recaptcha Enterprise site key undefined"));else{const l=new kP(o);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,s(l.siteKey)}}).catch(o=>{i(o)})})}function n(r,s,i){const o=window.grecaptcha;Lo(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(l=>{s(l)}).catch(()=>{s(tR)})}):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,s)=>{a(this.auth).then(i=>{if(!t&&Lo(window.grecaptcha))n(i,r,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Qd(eR+i).then(()=>{n(i,r,s)}).catch(o=>{s(o)})}}).catch(i=>{s(i)})})}}async function wo(c,e,t,a=!1){const n=new aR(c);let r;try{r=await n.verify(t)}catch{r=await n.verify(t,!0)}const s=Object.assign({},e);return a?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Vt(c,e,t,a){var n;if(!((n=c._getRecaptchaConfig())===null||n===void 0)&&n.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await wo(c,e,t,t==="getOobCode");return a(c,r)}else return a(c,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await wo(c,e,t,t==="getOobCode");return a(c,s)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(c,e){const t=Ee(c,"auth");if(t.isInitialized()){const n=t.getImmediate(),r=t.getOptions();if(T7(r,e??{}))return n;t3(n,"already-initialized")}return t.initialize({options:e})}function nR(c,e){const t=(e==null?void 0:e.persistence)||[],a=(Array.isArray(t)?t:[t]).map(S3);e!=null&&e.errorMap&&c._updateErrorMap(e.errorMap),c._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function rR(c,e,t){const a=u6(c);c1(a._canInitEmulator,a,"emulator-config-failed"),c1(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const n=!!(t!=null&&t.disableWarnings),r=em(e),{host:s,port:i}=sR(e),o=i===null?"":`:${i}`;a.config.emulator={url:`${r}//${s}${o}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:s,port:i,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||iR()}function em(c){const e=c.indexOf(":");return e<0?"":c.substr(0,e+1)}function sR(c){const e=em(c),t=/(\/\/)?([^?#/]+)/.exec(c.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const r=n[1];return{host:r,port:No(a.substr(r.length+1))}}else{const[r,s]=a.split(":");return{host:r,port:No(s)}}}function No(c){if(!c)return null;const e=Number(c);return isNaN(e)?null:e}function iR(){function c(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return N3("not implemented")}_getIdTokenResponse(e){return N3("not implemented")}_linkToIdToken(e,t){return N3("not implemented")}_getReauthenticationResolver(e){return N3("not implemented")}}async function oR(c,e){return w4(c,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(c,e){return o5(c,"POST","/v1/accounts:signInWithPassword",x4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(c,e){return o5(c,"POST","/v1/accounts:signInWithEmailLink",x4(c,e))}async function hR(c,e){return o5(c,"POST","/v1/accounts:signInWithEmailLink",x4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k8 extends Hn{constructor(e,t,a,n=null){super("password",a),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new k8(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new k8(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vt(e,t,"signInWithPassword",lR);case"emailLink":return fR(e,{email:this._email,oobCode:this._password});default:t3(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const a={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vt(e,a,"signUpPassword",oR);case"emailLink":return hR(e,{idToken:t,email:this._email,oobCode:this._password});default:t3(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D6(c,e){return o5(c,"POST","/v1/accounts:signInWithIdp",x4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="http://localhost";class t6 extends Hn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new t6(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):t3("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:n}=t,r=pn(t,["providerId","signInMethod"]);if(!a||!n)return null;const s=new t6(a,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return D6(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,D6(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,D6(e,t)}buildRequest(){const e={requestUri:uR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=m0(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(c){switch(c){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mR(c){const e=I0(D0(c)).link,t=e?I0(D0(e)).deep_link_id:null,a=I0(D0(c)).deep_link_id;return(a?I0(D0(a)).link:null)||a||t||e||c}class Mn{constructor(e){var t,a,n,r,s,i;const o=I0(D0(e)),l=(t=o.apiKey)!==null&&t!==void 0?t:null,f=(a=o.oobCode)!==null&&a!==void 0?a:null,h=dR((n=o.mode)!==null&&n!==void 0?n:null);c1(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(r=o.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(s=o.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(i=o.tenantId)!==null&&i!==void 0?i:null}static parseLink(e){const t=mR(e);try{return new Mn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.providerId=g0.PROVIDER_ID}static credential(e,t){return k8._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=Mn.parseLink(t);return c1(a,"argument-error"),k8._fromEmailAndCode(e,a.code,a.tenantId)}}g0.PROVIDER_ID="password";g0.EMAIL_PASSWORD_SIGN_IN_METHOD="password";g0.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5 extends cm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4 extends l5{constructor(){super("facebook.com")}static credential(e){return t6._fromParams({providerId:a4.PROVIDER_ID,signInMethod:a4.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return a4.credentialFromTaggedObject(e)}static credentialFromError(e){return a4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return a4.credential(e.oauthAccessToken)}catch{return null}}}a4.FACEBOOK_SIGN_IN_METHOD="facebook.com";a4.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4 extends l5{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return t6._fromParams({providerId:n4.PROVIDER_ID,signInMethod:n4.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n4.credentialFromTaggedObject(e)}static credentialFromError(e){return n4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return n4.credential(t,a)}catch{return null}}}n4.GOOGLE_SIGN_IN_METHOD="google.com";n4.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4 extends l5{constructor(){super("github.com")}static credential(e){return t6._fromParams({providerId:r4.PROVIDER_ID,signInMethod:r4.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return r4.credentialFromTaggedObject(e)}static credentialFromError(e){return r4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return r4.credential(e.oauthAccessToken)}catch{return null}}}r4.GITHUB_SIGN_IN_METHOD="github.com";r4.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4 extends l5{constructor(){super("twitter.com")}static credential(e,t){return t6._fromParams({providerId:s4.PROVIDER_ID,signInMethod:s4.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return s4.credentialFromTaggedObject(e)}static credentialFromError(e){return s4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return s4.credential(t,a)}catch{return null}}}s4.TWITTER_SIGN_IN_METHOD="twitter.com";s4.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(c,e){return o5(c,"POST","/v1/accounts:signUp",x4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,n=!1){const r=await Y4._fromIdTokenResponse(e,a,n),s=So(a);return new a6({user:r,providerId:s,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const n=So(a);return new a6({user:e,providerId:n,_tokenResponse:a,operationType:t})}}function So(c){return c.providerId?c.providerId:"phoneNumber"in c?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j7 extends M3{constructor(e,t,a,n){var r;super(t.code,t.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,j7.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,n){return new j7(e,t,a,n)}}function tm(c,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(c):t._getIdTokenResponse(c)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?j7._fromErrorAndOperation(c,r,e,a):r})}async function vR(c,e,t=!1){const a=await N8(c,e._linkToIdToken(c.auth,await c.getIdToken()),t);return a6._forOperation(c,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(c,e,t=!1){const{auth:a}=c,n="reauthenticate";try{const r=await N8(c,tm(a,n,e,c),t);c1(r.idToken,a,"internal-error");const s=gn(r.idToken);c1(s,a,"internal-error");const{sub:i}=s;return c1(c.uid===i,a,"user-mismatch"),a6._forOperation(c,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&t3(a,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(c,e,t=!1){const a="signIn",n=await tm(c,a,e),r=await a6._fromIdTokenResponse(c,a,n);return t||await c._updateCurrentUser(r.user),r}async function gR(c,e){return am(u6(c),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(c){const e=u6(c);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GH1(c,e,t){const a=u6(c),s=await Vt(a,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pR).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&nm(c),o}),i=await a6._fromIdTokenResponse(a,"signIn",s);return await a._updateCurrentUser(i.user),i}function KH1(c,e,t){return gR($1(c),g0.credential(e,t)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&nm(c),a})}function rm(c,e,t,a){return $1(c).onIdTokenChanged(e,t,a)}function CR(c,e,t){return $1(c).beforeAuthStateChanged(e,t)}function YH1(c,e,t,a){return $1(c).onAuthStateChanged(e,t,a)}function ZH1(c){return $1(c).signOut()}const G7="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(G7,"1"),this.storage.removeItem(G7),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(){const c=u2();return Cn(c)||Qe(c)}const MR=1e3,VR=10;class im extends sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HR()&&jP(),this.fallbackToPolling=Zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),n=this.localCache[t];a!==n&&e(t,n,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,i,o)=>{this.notifyListeners(s,o)});return}const a=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(a);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!t)return}const n=()=>{const s=this.storage.getItem(a);!t&&this.localCache[a]===s||this.notifyListeners(a,s)},r=this.storage.getItem(a);WP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,VR):n()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},MR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}im.type="LOCAL";const om=im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lm.type="SESSION";const fm=lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(c){return Promise.all(c.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const a=new Je(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const i=Array.from(s).map(async l=>l(t.origin,r)),o=await LR(i);t.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Je.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(c="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return c+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise((i,o)=>{const l=Vn("",20);n.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},a);s={messageChannel:n,onMessage(h){const u=h;if(u.data.eventId===l)switch(u.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),i(u.data.response);break;default:clearTimeout(f),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v3(){return window}function _R(c){v3().location.href=c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(){return typeof v3().WorkerGlobalScope<"u"&&typeof v3().importScripts=="function"}async function bR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xR(){var c;return((c=navigator==null?void 0:navigator.serviceWorker)===null||c===void 0?void 0:c.controller)||null}function wR(){return hm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firebaseLocalStorageDb",NR=1,K7="firebaseLocalStorage",dm="fbase_key";class f5{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function e9(c,e){return c.transaction([K7],e?"readwrite":"readonly").objectStore(K7)}function SR(){const c=indexedDB.deleteDatabase(um);return new f5(c).toPromise()}function Lt(){const c=indexedDB.open(um,NR);return new Promise((e,t)=>{c.addEventListener("error",()=>{t(c.error)}),c.addEventListener("upgradeneeded",()=>{const a=c.result;try{a.createObjectStore(K7,{keyPath:dm})}catch(n){t(n)}}),c.addEventListener("success",async()=>{const a=c.result;a.objectStoreNames.contains(K7)?e(a):(a.close(),await SR(),e(await Lt()))})})}async function ko(c,e,t){const a=e9(c,!0).put({[dm]:e,value:t});return new f5(a).toPromise()}async function kR(c,e){const t=e9(c,!1).get(e),a=await new f5(t).toPromise();return a===void 0?null:a.value}function Ao(c,e){const t=e9(c,!0).delete(e);return new f5(t).toPromise()}const AR=800,TR=3;class mm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>TR)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Je._getInstance(wR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bR(),!this.activeServiceWorker)return;this.sender=new yR(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lt();return await ko(e,G7,"1"),await Ao(e,G7),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>ko(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>kR(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ao(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const r=e9(n,!1).getAll();return new f5(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:n,value:r}of e)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mm.type="LOCAL";const pm=mm;new i5(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(c,e){return e?S3(e):(c1(c._popupRedirectResolver,c,"argument-error"),c._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Hn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return D6(e,this._buildIdpRequest())}_linkToIdToken(e,t){return D6(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return D6(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PR(c){return am(c.auth,new Ln(c),c.bypassAuthState)}function RR(c){const{auth:e,user:t}=c;return c1(t,e,"internal-error"),zR(t,new Ln(c),c.bypassAuthState)}async function IR(c){const{auth:e,user:t}=c;return c1(t,e,"internal-error"),vR(t,new Ln(c),c.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,a,n,r=!1){this.auth=e,this.resolver=a,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:n,tenantId:r,error:s,type:i}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:t,sessionId:a,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PR;case"linkViaPopup":case"linkViaRedirect":return IR;case"reauthViaPopup":case"reauthViaRedirect":return RR;default:t3(this.auth,"internal-error")}}resolve(e){R3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){R3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=new i5(2e3,1e4);class b6 extends vm{constructor(e,t,a,n,r){super(e,t,n,r),this.provider=a,this.authWindow=null,this.pollId=null,b6.currentPopupAction&&b6.currentPopupAction.cancel(),b6.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return c1(e,this.auth,"internal-error"),e}async onExecution(){R3(this.filter.length===1,"Popup operations only handle one event");const e=Vn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(p3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,b6.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p3(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DR.get())};e()}}b6.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="pendingRedirect",d7=new Map;class FR extends vm{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=d7.get(this.auth._key());if(!e){try{const a=await BR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}d7.set(this.auth._key(),e)}return this.bypassAuthState||d7.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BR(c,e){const t=$R(e),a=qR(c);if(!await a._isAvailable())return!1;const n=await a._get(t)==="true";return await a._remove(t),n}function UR(c,e){d7.set(c._key(),e)}function qR(c){return S3(c._redirectPersistence)}function $R(c){return u7(OR,c.config.apiKey,c.name)}async function WR(c,e,t=!1){const a=u6(c),n=ER(a,e),s=await new FR(a,n,t).execute();return s&&!t&&(delete s.user._redirectEventId,await a._persistUserIfCurrent(s.user),await a._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=10*60*1e3;class GR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!zm(e)){const n=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(p3(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jR&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(e))}saveEventToCache(e){this.cachedEventUids.add(To(e)),this.lastProcessedEventTime=Date.now()}}function To(c){return[c.type,c.eventId,c.sessionId,c.tenantId].filter(e=>e).join("-")}function zm({type:c,error:e}){return c==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(c){switch(c.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zm(c);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(c,e={}){return w4(c,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XR=/^https?/;async function QR(c){if(c.config.emulator)return;const{authorizedDomains:e}=await YR(c);for(const t of e)try{if(JR(t))return}catch{}t3(c,"unauthorized-domain")}function JR(c){const e=Mt(),{protocol:t,hostname:a}=new URL(e);if(c.startsWith("chrome-extension://")){const s=new URL(c);return s.hostname===""&&a===""?t==="chrome-extension:"&&c.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===a}if(!XR.test(t))return!1;if(ZR.test(c))return a===c;const n=c.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new i5(3e4,6e4);function Eo(){const c=v3().___jsl;if(c!=null&&c.H){for(const e of Object.keys(c.H))if(c.H[e].r=c.H[e].r||[],c.H[e].L=c.H[e].L||[],c.H[e].r=[...c.H[e].L],c.CP)for(let t=0;t<c.CP.length;t++)c.CP[t]=null}}function cI(c){return new Promise((e,t)=>{var a,n,r;function s(){Eo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eo(),t(p3(c,"network-request-failed"))},timeout:eI.get()})}if(!((n=(a=v3().gapi)===null||a===void 0?void 0:a.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((r=v3().gapi)===null||r===void 0)&&r.load)s();else{const i=JP("iframefcb");return v3()[i]=()=>{gapi.load?s():t(p3(c,"network-request-failed"))},Qd(`https://apis.google.com/js/api.js?onload=${i}`).catch(o=>t(o))}}).catch(e=>{throw m7=null,e})}let m7=null;function tI(c){return m7=m7||cI(c),m7}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new i5(5e3,15e3),nI="__/auth/iframe",rI="emulator/auth/iframe",sI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oI(c){const e=c.config;c1(e.authDomain,c,"auth-domain-config-required");const t=e.emulator?zn(e,rI):`https://${c.config.authDomain}/${nI}`,a={apiKey:e.apiKey,appName:c.name,v:y4},n=iI.get(c.config.apiHost);n&&(a.eid=n);const r=c._getFrameworks();return r.length&&(a.fw=r.join(",")),`${t}?${m0(a).slice(1)}`}async function lI(c){const e=await tI(c),t=v3().gapi;return c1(t,c,"internal-error"),e.open({where:document.body,url:oI(c),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sI,dontclear:!0},a=>new Promise(async(n,r)=>{await a.restyle({setHideOnLeave:!1});const s=p3(c,"network-request-failed"),i=v3().setTimeout(()=>{r(s)},aI.get());function o(){v3().clearTimeout(i),n(a)}a.ping(o).then(o,()=>{r(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hI=500,uI=600,dI="_blank",mI="http://localhost";class Po{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pI(c,e,t,a=hI,n=uI){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString();let i="";const o=Object.assign(Object.assign({},fI),{width:a.toString(),height:n.toString(),top:r,left:s}),l=u2().toLowerCase();t&&(i=Wd(l)?dI:t),$d(l)&&(e=e||mI,o.scrollbars="yes");const f=Object.entries(o).reduce((u,[d,v])=>`${u}${d}=${v},`,"");if($P(l)&&i!=="_self")return vI(e||"",i),new Po(null);const h=window.open(e||"",i,f);c1(h,c,"popup-blocked");try{h.focus()}catch{}return new Po(h)}function vI(c,e){const t=document.createElement("a");t.href=c,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="__/auth/handler",gI="emulator/auth/handler",CI=encodeURIComponent("fac");async function Ro(c,e,t,a,n,r){c1(c.config.authDomain,c,"auth-domain-config-required"),c1(c.config.apiKey,c,"invalid-api-key");const s={apiKey:c.config.apiKey,appName:c.name,authType:t,redirectUrl:a,v:y4,eventId:n};if(e instanceof cm){e.setDefaultLanguage(c.languageCode),s.providerId=e.providerId||"",Jc(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(r||{}))s[f]=h}if(e instanceof l5){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(s.scopes=f.join(","))}c.tenantId&&(s.tid=c.tenantId);const i=s;for(const f of Object.keys(i))i[f]===void 0&&delete i[f];const o=await c._getAppCheckToken(),l=o?`#${CI}=${encodeURIComponent(o)}`:"";return`${HI(c)}?${m0(i).slice(1)}${l}`}function HI({config:c}){return c.emulator?zn(c,gI):`https://${c.authDomain}/${zI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="webStorageSupport";class MI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fm,this._completeRedirectFn=WR,this._overrideRedirectResult=UR}async _openPopup(e,t,a,n){var r;R3((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await Ro(e,t,a,Mt(),n);return pI(e,s,Vn())}async _openRedirect(e,t,a,n){await this._originValidation(e);const r=await Ro(e,t,a,Mt(),n);return _R(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(R3(r,"If manager is not set, promise should be"),r)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await lI(e),a=new GR(e);return t.register("authEvent",n=>(c1(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:a.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fc,{type:fc},n=>{var r;const s=(r=n==null?void 0:n[0])===null||r===void 0?void 0:r[fc];s!==void 0&&t(!!s),t3(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zd()||Cn()||Qe()}}const gm=MI;var Io="@firebase/auth",Do="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){c1(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(c){switch(c){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yI(c){C3(new e3("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:i}=a.options;c1(s&&!s.includes(":"),"invalid-api-key",{appName:a.name});const o={apiKey:s,authDomain:i,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xd(c)},l=new XP(a,n,r,o);return nR(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),C3(new e3("auth-internal",e=>{const t=u6(e.getProvider("auth").getImmediate());return(a=>new VI(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),T2(Io,Do,LI(c)),T2(Io,Do,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=5*60,bI=tu("authIdTokenMaxAge")||_I;let Oo=null;const xI=c=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>bI)return;const n=t==null?void 0:t.token;Oo!==n&&(Oo=n,await fetch(c,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function XH1(c=Pe()){const e=Ee(c,"auth");if(e.isInitialized())return e.getImmediate();const t=Jd(c,{popupRedirectResolver:gm,persistence:[pm,om,fm]}),a=tu("authTokenSyncURL");if(a){const r=xI(a);CR(t,r,()=>r(t.currentUser)),rm(t,s=>r(s))}const n=Jh("auth");return n&&rR(t,`http://${n}`),t}yI("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new Map,NI={activated:!1,tokenObservers:[]};function a3(c){return wI.get(c)||Object.assign({},NI)}const Fo={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t,a,n,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=a,this.lowerBound=n,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=n,n>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new e6,this.pending.promise.catch(t=>{}),await kI(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new e6,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function kI(c){return new Promise(e=>{setTimeout(e,c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Y7=new d0("appCheck","AppCheck",AI);function Cm(c){if(!a3(c).activated)throw Y7.create("use-before-activation",{appName:c.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="firebase-app-check-database",EI=1,yt="firebase-app-check-store";let $5=null;function PI(){return $5||($5=new Promise((c,e)=>{try{const t=indexedDB.open(TI,EI);t.onsuccess=a=>{c(a.target.result)},t.onerror=a=>{var n;e(Y7.create("storage-open",{originalErrorMessage:(n=a.target.error)===null||n===void 0?void 0:n.message}))},t.onupgradeneeded=a=>{const n=a.target.result;switch(a.oldVersion){case 0:n.createObjectStore(yt,{keyPath:"compositeKey"})}}}catch(t){e(Y7.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),$5)}function RI(c,e){return II(DI(c),e)}async function II(c,e){const a=(await PI()).transaction(yt,"readwrite"),r=a.objectStore(yt).put({compositeKey:c,value:e});return new Promise((s,i)=>{r.onsuccess=o=>{s()},a.onerror=o=>{var l;i(Y7.create("storage-set",{originalErrorMessage:(l=o.target.error)===null||l===void 0?void 0:l.message}))}})}function DI(c){return`${c.options.appId}-${c.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new X8("@firebase/app-check");function Bo(c,e){return su()?RI(c,e).catch(t=>{_t.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={error:"UNKNOWN_ERROR"};function FI(c){return ke.encodeString(JSON.stringify(c),!1)}async function bt(c,e=!1){const t=c.app;Cm(t);const a=a3(t);let n=a.token,r;if(n&&!B0(n)&&(a.token=void 0,n=void 0),!n){const o=await a.cachedTokenPromise;o&&(B0(o)?n=o:await Bo(t,void 0))}if(!e&&n&&B0(n))return{token:n.token};let s=!1;try{a.exchangeTokenPromise||(a.exchangeTokenPromise=a.provider.getToken().finally(()=>{a.exchangeTokenPromise=void 0}),s=!0),n=await a3(t).exchangeTokenPromise}catch(o){o.code==="appCheck/throttled"?_t.warn(o.message):_t.error(o),r=o}let i;return n?r?B0(n)?i={token:n.token,internalError:r}:i=qo(r):(i={token:n.token},a.token=n,await Bo(t,n)):i=qo(r),s&&$I(t,i),i}async function BI(c){const e=c.app;Cm(e);const{provider:t}=a3(e);{const{token:a}=await t.getToken();return{token:a}}}function UI(c,e,t,a){const{app:n}=c,r=a3(n),s={next:t,error:a,type:e};if(r.tokenObservers=[...r.tokenObservers,s],r.token&&B0(r.token)){const i=r.token;Promise.resolve().then(()=>{t({token:i.token}),Uo(c)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Uo(c))}function Hm(c,e){const t=a3(c),a=t.tokenObservers.filter(n=>n.next!==e);a.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=a}function Uo(c){const{app:e}=c,t=a3(e);let a=t.tokenRefresher;a||(a=qI(c),t.tokenRefresher=a),!a.isRunning()&&t.isTokenAutoRefreshEnabled&&a.start()}function qI(c){const{app:e}=c;return new SI(async()=>{const t=a3(e);let a;if(t.token?a=await bt(c,!0):a=await bt(c),a.error)throw a.error;if(a.internalError)throw a.internalError},()=>!0,()=>{const t=a3(e);if(t.token){let a=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const n=t.token.expireTimeMillis-5*60*1e3;return a=Math.min(a,n),Math.max(0,a-Date.now())}else return 0},Fo.RETRIAL_MIN_WAIT,Fo.RETRIAL_MAX_WAIT)}function $I(c,e){const t=a3(c).tokenObservers;for(const a of t)try{a.type==="EXTERNAL"&&e.error!=null?a.error(e.error):a.next(e)}catch{}}function B0(c){return c.expireTimeMillis-Date.now()>0}function qo(c){return{token:FI(OI),error:c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=a3(this.app);for(const t of e)Hm(this.app,t.next);return Promise.resolve()}}function jI(c,e){return new WI(c,e)}function GI(c){return{getToken:e=>bt(c,e),getLimitedUseToken:()=>BI(c),addTokenListener:e=>UI(c,"INTERNAL",e),removeTokenListener:e=>Hm(c.app,e)}}const KI="@firebase/app-check",YI="0.8.1",ZI="app-check",$o="app-check-internal";function XI(){C3(new e3(ZI,c=>{const e=c.getProvider("app").getImmediate(),t=c.getProvider("heartbeat");return jI(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((c,e,t)=>{c.getProvider($o).initialize()})),C3(new e3($o,c=>{const e=c.getProvider("app-check").getImmediate();return GI(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),T2(KI,YI)}XI();const Mm=Symbol("firebaseApp");function QI(c){return h0()&&e2(Mm,null)||Pe(c)}const W5=new WeakMap;function JI(c,e){if(!W5.has(c)){const t=ge(!0);W5.set(c,t);const{unmount:a}=e;e.unmount=()=>{a.call(e),t.stop(),W5.delete(c)}}return W5.get(c)}const eD=new WeakMap,j5=new WeakMap;function cD(c){const e=QI(c);if(!j5.has(e)){let t;const n=[new Promise(r=>{t=r}),r=>{j5.set(e,r),t(r.value)}];j5.set(e,n)}return j5.get(e)}function tD(c,e){rm(e,t=>{const a=cD();c.value=t,Array.isArray(a)&&a[1](c)})}const Wo="@firebase/database",jo="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vm="";function aD(c){Vm=c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),G1(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:z8(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return V3(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=function(c){try{if(typeof window<"u"&&typeof window[c]<"u"){const e=window[c];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nD(e)}}catch{}return new rD},F4=Lm("localStorage"),xt=Lm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O6=new X8("@firebase/database"),sD=function(){let c=1;return function(){return c++}}(),ym=function(c){const e=Ck(c),t=new pk;t.update(e);const a=t.digest();return ke.encodeByteArray(a)},h5=function(...c){let e="";for(let t=0;t<c.length;t++){const a=c[t];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=h5.apply(null,a):typeof a=="object"?e+=G1(a):e+=a,e+=" "}return e};let Z4=null,Go=!0;const iD=function(c,e){P(!e||c===!0||c===!1,"Can't turn on custom loggers persistently."),c===!0?(O6.logLevel=v1.VERBOSE,Z4=O6.log.bind(O6),e&&xt.set("logging_enabled",!0)):typeof c=="function"?Z4=c:(Z4=null,xt.remove("logging_enabled"))},r2=function(...c){if(Go===!0&&(Go=!1,Z4===null&&xt.get("logging_enabled")===!0&&iD(!0)),Z4){const e=h5.apply(null,c);Z4(e)}},u5=function(c){return function(...e){r2(c,...e)}},wt=function(...c){const e="FIREBASE INTERNAL ERROR: "+h5(...c);O6.error(e)},I3=function(...c){const e=`FIREBASE FATAL ERROR: ${h5(...c)}`;throw O6.error(e),new Error(e)},C2=function(...c){const e="FIREBASE WARNING: "+h5(...c);O6.warn(e)},oD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&C2("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yn=function(c){return typeof c=="number"&&(c!==c||c===Number.POSITIVE_INFINITY||c===Number.NEGATIVE_INFINITY)},lD=function(c){if(document.readyState==="complete")c();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,c())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},e0="[MIN_NAME]",n6="[MAX_NAME]",d6=function(c,e){if(c===e)return 0;if(c===e0||e===n6)return-1;if(e===e0||c===n6)return 1;{const t=Ko(c),a=Ko(e);return t!==null?a!==null?t-a===0?c.length-e.length:t-a:-1:a!==null?1:c<e?-1:1}},fD=function(c,e){return c===e?0:c<e?-1:1},N0=function(c,e){if(e&&c in e)return e[c];throw new Error("Missing required key ("+c+") in object: "+G1(e))},_n=function(c){if(typeof c!="object"||c===null)return G1(c);const e=[];for(const a in c)e.push(a);e.sort();let t="{";for(let a=0;a<e.length;a++)a!==0&&(t+=","),t+=G1(e[a]),t+=":",t+=_n(c[e[a]]);return t+="}",t},_m=function(c,e){const t=c.length;if(t<=e)return[c];const a=[];for(let n=0;n<t;n+=e)n+e>t?a.push(c.substring(n,t)):a.push(c.substring(n,n+e));return a};function i2(c,e){for(const t in c)c.hasOwnProperty(t)&&e(t,c[t])}const bm=function(c){P(!yn(c),"Invalid JSON number");const e=11,t=52,a=(1<<e-1)-1;let n,r,s,i,o;c===0?(r=0,s=0,n=1/c===-1/0?1:0):(n=c<0,c=Math.abs(c),c>=Math.pow(2,1-a)?(i=Math.min(Math.floor(Math.log(c)/Math.LN2),a),r=i+a,s=Math.round(c*Math.pow(2,t-i)-Math.pow(2,t))):(r=0,s=Math.round(c/Math.pow(2,1-a-t))));const l=[];for(o=t;o;o-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(o=e;o;o-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(n?1:0),l.reverse();const f=l.join("");let h="";for(o=0;o<64;o+=8){let u=parseInt(f.substr(o,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},hD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dD(c,e){let t="Unknown Error";c==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":c==="permission_denied"?t="Client doesn't have permission to access the desired data.":c==="unavailable"&&(t="The service is unavailable");const a=new Error(c+" at "+e._path.toString()+": "+t);return a.code=c.toUpperCase(),a}const mD=new RegExp("^-?(0*)\\d{1,10}$"),pD=-2147483648,vD=2147483647,Ko=function(c){if(mD.test(c)){const e=Number(c);if(e>=pD&&e<=vD)return e}return null},C0=function(c){try{c()}catch(e){setTimeout(()=>{const t=e.stack||"";throw C2("Exception was thrown by user callback.",t),e},Math.floor(0))}},zD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},t8=function(c,e){const t=setTimeout(c,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(a=>this.appCheck=a)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,a):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(a=>a.addTokenListener(e))}notifyForInvalidToken(){C2(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,t,a){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(n=>this.auth_=n)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(r2("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,a):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',C2(e)}}class F6{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}F6.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="5",xm="v",wm="s",Nm="r",Sm="f",km=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Am="ls",Tm="p",Nt="ac",Em="websocket",Pm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t,a,n,r=!1,s="",i=!1,o=!1){this.secure=t,this.namespace=a,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=i,this.isUsingEmulator=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=F4.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&F4.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function HD(c){return c.host!==c.internalHost||c.isCustomHost()||c.includeNamespaceInQueryParams}function Im(c,e,t){P(typeof e=="string","typeof type must == string"),P(typeof t=="object","typeof params must == object");let a;if(e===Em)a=(c.secure?"wss://":"ws://")+c.internalHost+"/.ws?";else if(e===Pm)a=(c.secure?"https://":"http://")+c.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HD(c)&&(t.ns=c.namespace);const n=[];return i2(t,(r,s)=>{n.push(r+"="+s)}),a+n.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.counters_={}}incrementCounter(e,t=1){V3(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ck(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc={},uc={};function xn(c){const e=c.toString();return hc[e]||(hc[e]=new MD),hc[e]}function VD(c,e){const t=c.toString();return uc[t]||(uc[t]=e()),uc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<a.length;++n)a[n]&&C0(()=>{this.onMessage_(a[n])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="start",yD="close",_D="pLPCommand",bD="pRTLPCB",Dm="id",Om="pw",Fm="ser",xD="cb",wD="seg",ND="ts",SD="d",kD="dframe",Bm=1870,Um=30,AD=Bm-Um,TD=25e3,ED=3e4;class x6{constructor(e,t,a,n,r,s,i){this.connId=e,this.repoInfo=t,this.applicationId=a,this.appCheckToken=n,this.authToken=r,this.transportSessionId=s,this.lastSessionId=i,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=u5(e),this.stats_=xn(t),this.urlFn=o=>(this.appCheckToken&&(o[Nt]=this.appCheckToken),Im(t,Pm,o))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new LD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ED)),lD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wn((...r)=>{const[s,i,o,l,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===Yo)this.id=i,this.password=o;else if(s===yD)i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...r)=>{const[s,i]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(s,i)},()=>{this.onClosed_()},this.urlFn);const a={};a[Yo]="t",a[Fm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[xD]=this.scriptTagHolder.uniqueCallbackIdentifier),a[xm]=bn,this.transportSessionId&&(a[wm]=this.transportSessionId),this.lastSessionId&&(a[Am]=this.lastSessionId),this.applicationId&&(a[Tm]=this.applicationId),this.appCheckToken&&(a[Nt]=this.appCheckToken),typeof location<"u"&&location.hostname&&km.test(location.hostname)&&(a[Nm]=Sm);const n=this.urlFn(a);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){x6.forceAllow_=!0}static forceDisallow(){x6.forceDisallow_=!0}static isAvailable(){return x6.forceAllow_?!0:!x6.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hD()&&!uD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=G1(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const a=Xh(t),n=_m(a,AD);for(let r=0;r<n.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const a={};a[kD]="t",a[Dm]=e,a[Om]=t,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=G1(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wn{constructor(e,t,a,n){this.onDisconnect=a,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sD(),window[_D+this.uniqueCallbackIdentifier]=e,window[bD+this.uniqueCallbackIdentifier]=t,this.myIFrame=wn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(i){r2("frame writing exception"),i.stack&&r2(i.stack),r2(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||r2("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dm]=this.myID,e[Om]=this.myPW,e[Fm]=this.currentSerial;let t=this.urlFn(e),a="",n=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Um+a.length<=Bm;){const s=this.pendingSegs.shift();a=a+"&"+wD+n+"="+s.seg+"&"+ND+n+"="+s.ts+"&"+SD+n+"="+s.d,n++}return t=t+a,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,a){this.pendingSegs.push({seg:e,ts:t,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const a=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(a,Math.floor(TD)),r=()=>{clearTimeout(n),a()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const n=a.readyState;(!n||n==="loaded"||n==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),t())},a.onerror=()=>{r2("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=16384,RD=45e3;let Z7=null;typeof MozWebSocket<"u"?Z7=MozWebSocket:typeof WebSocket<"u"&&(Z7=WebSocket);class Y2{constructor(e,t,a,n,r,s,i){this.connId=e,this.applicationId=a,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=u5(this.connId),this.stats_=xn(t),this.connURL=Y2.connectionURL_(t,s,i,n,a),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,a,n,r){const s={};return s[xm]=bn,typeof location<"u"&&location.hostname&&km.test(location.hostname)&&(s[Nm]=Sm),t&&(s[wm]=t),a&&(s[Am]=a),n&&(s[Nt]=n),r&&(s[Tm]=r),Im(e,Em,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,F4.set("previous_websocket_failure",!0);try{let a;ru(),this.mySock=new Z7(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const n=a.message||a.data;n&&this.log_(n),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const n=a.message||a.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){Y2.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(t);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&Z7!==null&&!Y2.forceDisallow_}static previouslyFailed(){return F4.isInMemoryStorage||F4.get("previous_websocket_failure")===!0}markConnectionHealthy(){F4.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const a=z8(t);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const a=this.extractFrameCount_(t);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const t=G1(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const a=_m(t,PD);a.length>1&&this.sendString_(String(a.length));for(let n=0;n<a.length;n++)this.sendString_(a[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Y2.responsesRequiredToBeHealthy=2;Y2.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A8{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[x6,Y2]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Y2&&Y2.isAvailable();let a=t&&!Y2.previouslyFailed();if(e.webSocketOnly&&(t||C2("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[Y2];else{const n=this.transports_=[];for(const r of A8.ALL_TRANSPORTS)r&&r.isAvailable()&&n.push(r);A8.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}A8.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=6e4,DD=5e3,OD=10*1024,FD=100*1024,dc="t",Zo="d",BD="s",Xo="r",UD="e",Qo="o",Jo="a",el="n",cl="p",qD="h";class $D{constructor(e,t,a,n,r,s,i,o,l,f){this.id=e,this.repoInfo_=t,this.applicationId_=a,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=s,this.onReady_=i,this.onDisconnect_=o,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=u5("c:"+this.id+":"),this.transportManager_=new A8(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,a)},Math.floor(0));const n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=t8(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>OD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dc in e){const t=e[dc];t===Jo?this.upgradeIfSecondaryHealthy_():t===Xo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=N0("t",e),a=N0("d",e);if(t==="c")this.onSecondaryControl_(a);else if(t==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:el,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=N0("t",e),a=N0("d",e);t==="c"?this.onControl_(a):t==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=N0(dc,e);if(Zo in e){const a=e[Zo];if(t===qD){const n=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(n.h=this.repoInfo_.host),this.onHandshake_(n)}else if(t===el){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let n=0;n<this.pendingDataMessages.length;++n)this.onDataMessage_(this.pendingDataMessages[n]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===BD?this.onConnectionShutdown_(a):t===Xo?this.onReset_(a):t===UD?wt("Server Error: "+a):t===Qo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,a=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),bn!==a&&C2("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,a),t8(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ID))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):t8(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(F4.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{put(e,t,a,n){}merge(e,t,a,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,a){}onDisconnectMerge(e,t,a){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let n=0;n<a.length;n++)a[n].callback.apply(a[n].context,t)}}on(e,t,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:a});const n=this.getInitialEvent(e);n&&t.apply(a,n)}off(e,t,a){this.validateEventType_(e);const n=this.listeners_[e]||[];for(let r=0;r<n.length;r++)if(n[r].callback===t&&(!a||a===n[r].context)){n.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X7 extends $m{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ia()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new X7}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=32,al=768;class M1{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let a=0;for(let n=0;n<this.pieces_.length;n++)this.pieces_[n].length>0&&(this.pieces_[a]=this.pieces_[n],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function m1(){return new M1("")}function s1(c){return c.pieceNum_>=c.pieces_.length?null:c.pieces_[c.pieceNum_]}function z4(c){return c.pieces_.length-c.pieceNum_}function y1(c){let e=c.pieceNum_;return e<c.pieces_.length&&e++,new M1(c.pieces_,e)}function Nn(c){return c.pieceNum_<c.pieces_.length?c.pieces_[c.pieces_.length-1]:null}function WD(c){let e="";for(let t=c.pieceNum_;t<c.pieces_.length;t++)c.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(c.pieces_[t])));return e||"/"}function T8(c,e=0){return c.pieces_.slice(c.pieceNum_+e)}function Wm(c){if(c.pieceNum_>=c.pieces_.length)return null;const e=[];for(let t=c.pieceNum_;t<c.pieces_.length-1;t++)e.push(c.pieces_[t]);return new M1(e,0)}function E1(c,e){const t=[];for(let a=c.pieceNum_;a<c.pieces_.length;a++)t.push(c.pieces_[a]);if(e instanceof M1)for(let a=e.pieceNum_;a<e.pieces_.length;a++)t.push(e.pieces_[a]);else{const a=e.split("/");for(let n=0;n<a.length;n++)a[n].length>0&&t.push(a[n])}return new M1(t,0)}function o1(c){return c.pieceNum_>=c.pieces_.length}function z2(c,e){const t=s1(c),a=s1(e);if(t===null)return e;if(t===a)return z2(y1(c),y1(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+c+")")}function jD(c,e){const t=T8(c,0),a=T8(e,0);for(let n=0;n<t.length&&n<a.length;n++){const r=d6(t[n],a[n]);if(r!==0)return r}return t.length===a.length?0:t.length<a.length?-1:1}function Sn(c,e){if(z4(c)!==z4(e))return!1;for(let t=c.pieceNum_,a=e.pieceNum_;t<=c.pieces_.length;t++,a++)if(c.pieces_[t]!==e.pieces_[a])return!1;return!0}function F2(c,e){let t=c.pieceNum_,a=e.pieceNum_;if(z4(c)>z4(e))return!1;for(;t<c.pieces_.length;){if(c.pieces_[t]!==e.pieces_[a])return!1;++t,++a}return!0}class GD{constructor(e,t){this.errorPrefix_=t,this.parts_=T8(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Te(this.parts_[a]);jm(this)}}function KD(c,e){c.parts_.length>0&&(c.byteLength_+=1),c.parts_.push(e),c.byteLength_+=Te(e),jm(c)}function YD(c){const e=c.parts_.pop();c.byteLength_-=Te(e),c.parts_.length>0&&(c.byteLength_-=1)}function jm(c){if(c.byteLength_>al)throw new Error(c.errorPrefix_+"has a key path longer than "+al+" bytes ("+c.byteLength_+").");if(c.parts_.length>tl)throw new Error(c.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tl+") or object contains a cycle "+T4(c))}function T4(c){return c.parts_.length===0?"":"in property '"+c.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends $m{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}static getInstance(){return new kn}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=1e3,ZD=60*5*1e3,nl=30*1e3,XD=1.3,QD=3e4,JD="server_kill",rl=3;class T3 extends qm{constructor(e,t,a,n,r,s,i,o){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=a,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.authOverride_=o,this.id=T3.nextPersistentConnectionId_++,this.log_=u5("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=S0,this.maxReconnectDelay_=ZD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!ru())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&X7.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,a){const n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_(G1(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),a&&(this.requestCBHash_[n]=a)}get(e){this.initConnection_();const t=new e6,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:s=>{const i=s.d;s.s==="ok"?t.resolve(i):t.reject(i)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,a,n){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const i={onComplete:n,hashFn:t,query:e,tag:a};this.listens.get(s).set(r,i),this.connected_&&this.sendListen_(i)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(a)})}sendListen_(e){const t=e.query,a=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+a+" for "+n);const r={p:a},s="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(s,r,i=>{const o=i.d,l=i.s;T3.warnOnListenWarnings_(o,t),(this.listens.get(a)&&this.listens.get(a).get(n))===e&&(this.log_("listen response",i),l!=="ok"&&this.removeListen_(a,n),e.onComplete&&e.onComplete(l,o))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&V3(e,"w")){const a=X6(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const n='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();C2(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${n} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=dk(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(t,a,n=>{const r=n.s,s=n.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,a=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,a)})}unlisten(e,t){const a=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+n),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,n)&&this.connected_&&this.sendUnlisten_(a,n,e._queryObject,t)}sendUnlisten_(e,t,a,n){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";n&&(r.q=a,r.t=n),this.sendRequest(s,r)}onDisconnectPut(e,t,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:a})}onDisconnectMerge(e,t,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:a})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,a,n){const r={p:t,d:a};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,s=>{n&&setTimeout(()=>{n(s.s,s.d)},Math.floor(0))})}put(e,t,a,n){this.putInternal("p",e,t,a,n)}merge(e,t,a,n){this.putInternal("m",e,t,a,n)}putInternal(e,t,a,n,r){this.initConnection_();const s={p:t,d:a};r!==void 0&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:n}),this.outstandingPutCount_++;const i=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(i):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,a,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),n&&n(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,a=>{if(a.s!=="ok"){const r=a.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+G1(e));const t=e.r,a=this.requestCBHash_[t];a&&(delete this.requestCBHash_[t],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):wt("Unrecognized action received from server: "+G1(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=S0,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=S0,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QD&&(this.reconnectDelay_=S0),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*XD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+T3.nextConnectionId_++,r=this.lastSessionId;let s=!1,i=null;const o=function(){i?i.close():(s=!0,a())},l=function(h){P(i,"sendRequest call when we're not connected not allowed."),i.sendRequest(h)};this.realtime_={close:o,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);s?r2("getToken() completed but was canceled"):(r2("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,i=new $D(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,a,d=>{C2(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(JD)},r))}catch(h){this.log_("Failed to get token: "+h),s||(this.repoInfo_.nodeAdmin&&C2(h),o())}}}interrupt(e){r2("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){r2("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jc(this.interruptReasons_)&&(this.reconnectDelay_=S0,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let a;t?a=t.map(r=>_n(r)).join("$"):a="default";const n=this.removeListen_(e,a);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){const a=new M1(e).toString();let n;if(this.listens.has(a)){const r=this.listens.get(a);n=r.get(t),r.delete(t),r.size===0&&this.listens.delete(a)}else n=void 0;return n}onAuthRevoked_(e,t){r2("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rl&&(this.reconnectDelay_=nl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){r2("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Vm.replace(/\./g,"-")]=1,Ia()?e["framework.cordova"]=1:nu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=X7.getInstance().currentlyOnline();return Jc(this.interruptReasons_)&&e}}T3.nextPersistentConnectionId_=0;T3.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new i1(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c9{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const a=new i1(e0,e),n=new i1(e0,t);return this.compare(a,n)!==0}minPost(){return i1.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G5;class Gm extends c9{static get __EMPTY_NODE(){return G5}static set __EMPTY_NODE(e){G5=e}compare(e,t){return d6(e.name,t.name)}isDefinedOn(e){throw u0("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return i1.MIN}maxPost(){return new i1(n6,G5)}makePost(e,t){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new i1(e,G5)}toString(){return".key"}}const B6=new Gm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(e,t,a,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?a(e.key,t):1,n&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Q1{constructor(e,t,a,n,r){this.key=e,this.value=t,this.color=a??Q1.RED,this.left=n??_2.EMPTY_NODE,this.right=r??_2.EMPTY_NODE}copy(e,t,a,n,r){return new Q1(e??this.key,t??this.value,a??this.color,n??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let n=this;const r=a(e,n.key);return r<0?n=n.copy(null,null,null,n.left.insert(e,t,a),null):r===0?n=n.copy(null,t,null,null,null):n=n.copy(null,null,null,null,n.right.insert(e,t,a)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return _2.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let a,n;if(a=this,t(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),t(e,a.key)===0){if(a.right.isEmpty())return _2.EMPTY_NODE;n=a.right.min_(),a=a.copy(n.key,n.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Q1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Q1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Q1.RED=!0;Q1.BLACK=!1;class eO{copy(e,t,a,n,r){return this}insert(e,t,a){return new Q1(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _2{constructor(e,t=_2.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new _2(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Q1.BLACK,null,null))}remove(e){return new _2(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Q1.BLACK,null,null))}get(e){let t,a=this.root_;for(;!a.isEmpty();){if(t=this.comparator_(e,a.key),t===0)return a.value;t<0?a=a.left:t>0&&(a=a.right)}return null}getPredecessorKey(e){let t,a=this.root_,n=null;for(;!a.isEmpty();)if(t=this.comparator_(e,a.key),t===0){if(a.left.isEmpty())return n?n.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else t<0?a=a.left:t>0&&(n=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new K5(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new K5(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new K5(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new K5(this.root_,null,this.comparator_,!0,e)}}_2.EMPTY_NODE=new eO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(c,e){return d6(c.name,e.name)}function An(c,e){return d6(c,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St;function tO(c){St=c}const Km=function(c){return typeof c=="number"?"number:"+bm(c):"string:"+c},Ym=function(c){if(c.isLeafNode()){const e=c.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&V3(e,".sv"),"Priority must be a string or number.")}else P(c===St||c.isEmpty(),"priority of unexpected type.");P(c===St||c.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl;class X1{constructor(e,t=X1.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ym(this.priorityNode_)}static set __childrenNodeConstructor(e){sl=e}static get __childrenNodeConstructor(){return sl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X1(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X1.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return o1(e)?this:s1(e)===".priority"?this.priorityNode_:X1.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:X1.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const a=s1(e);return a===null?t:t.isEmpty()&&a!==".priority"?this:(P(a!==".priority"||z4(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,X1.__childrenNodeConstructor.EMPTY_NODE.updateChild(y1(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Km(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bm(this.value_):e+=this.value_,this.lazyHash_=ym(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X1.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X1.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,a=typeof this.value_,n=X1.VALUE_TYPE_ORDER.indexOf(t),r=X1.VALUE_TYPE_ORDER.indexOf(a);return P(n>=0,"Unknown leaf type: "+t),P(r>=0,"Unknown leaf type: "+a),n===r?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}X1.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zm,Xm;function aO(c){Zm=c}function nO(c){Xm=c}class rO extends c9{compare(e,t){const a=e.node.getPriority(),n=t.node.getPriority(),r=a.compareTo(n);return r===0?d6(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return i1.MIN}maxPost(){return new i1(n6,new X1("[PRIORITY-POST]",Xm))}makePost(e,t){const a=Zm(e);return new i1(t,new X1("[PRIORITY-POST]",a))}toString(){return".priority"}}const R1=new rO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=Math.log(2);class iO{constructor(e){const t=r=>parseInt(Math.log(r)/sO,10),a=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const n=a(this.count);this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Q7=function(c,e,t,a){c.sort(e);const n=function(o,l){const f=l-o;let h,u;if(f===0)return null;if(f===1)return h=c[o],u=t?t(h):h,new Q1(u,h.node,Q1.BLACK,null,null);{const d=parseInt(f/2,10)+o,v=n(o,d),H=n(d+1,l);return h=c[d],u=t?t(h):h,new Q1(u,h.node,Q1.BLACK,v,H)}},r=function(o){let l=null,f=null,h=c.length;const u=function(v,H){const y=h-v,M=h;h-=v;const C=n(y+1,M),z=c[y],m=t?t(z):z;d(new Q1(m,z.node,H,null,C))},d=function(v){l?(l.left=v,l=v):(f=v,l=v)};for(let v=0;v<o.count;++v){const H=o.nextBitIsOne(),y=Math.pow(2,o.count-(v+1));H?u(y,Q1.BLACK):(u(y,Q1.BLACK),u(y,Q1.RED))}return f},s=new iO(c.length),i=r(s);return new _2(a||e,i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;const M6={};class k3{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return P(M6&&R1,"ChildrenNode.ts has not been loaded"),mc=mc||new k3({".priority":M6},{".priority":R1}),mc}get(e){const t=X6(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof _2?t:null}hasIndex(e){return V3(this.indexSet_,e.toString())}addIndex(e,t){P(e!==B6,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let n=!1;const r=t.getIterator(i1.Wrap);let s=r.getNext();for(;s;)n=n||e.isDefinedOn(s.node),a.push(s),s=r.getNext();let i;n?i=Q7(a,e.getCompare()):i=M6;const o=e.toString(),l=Object.assign({},this.indexSet_);l[o]=e;const f=Object.assign({},this.indexes_);return f[o]=i,new k3(f,l)}addToIndexes(e,t){const a=A7(this.indexes_,(n,r)=>{const s=X6(this.indexSet_,r);if(P(s,"Missing index implementation for "+r),n===M6)if(s.isDefinedOn(e.node)){const i=[],o=t.getIterator(i1.Wrap);let l=o.getNext();for(;l;)l.name!==e.name&&i.push(l),l=o.getNext();return i.push(e),Q7(i,s.getCompare())}else return M6;else{const i=t.get(e.name);let o=n;return i&&(o=o.remove(new i1(e.name,i))),o.insert(e,e.node)}});return new k3(a,this.indexSet_)}removeFromIndexes(e,t){const a=A7(this.indexes_,n=>{if(n===M6)return n;{const r=t.get(e.name);return r?n.remove(new i1(e.name,r)):n}});return new k3(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k0;class e1{constructor(e,t,a){this.children_=e,this.priorityNode_=t,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Ym(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return k0||(k0=new e1(new _2(An),null,k3.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||k0}updatePriority(e){return this.children_.isEmpty()?this:new e1(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?k0:t}}getChild(e){const t=s1(e);return t===null?this:this.getImmediateChild(t).getChild(y1(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(P(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const a=new i1(e,t);let n,r;t.isEmpty()?(n=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(a,this.children_)):(n=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(a,this.children_));const s=n.isEmpty()?k0:this.priorityNode_;return new e1(n,s,r)}}updateChild(e,t){const a=s1(e);if(a===null)return t;{P(s1(e)!==".priority"||z4(e)===1,".priority must be the last token in a path");const n=this.getImmediateChild(a).updateChild(y1(e),t);return this.updateImmediateChild(a,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let a=0,n=0,r=!0;if(this.forEachChild(R1,(s,i)=>{t[s]=i.val(e),a++,r&&e1.INTEGER_REGEXP_.test(s)?n=Math.max(n,Number(s)):r=!1}),!e&&r&&n<2*a){const s=[];for(const i in t)s[i]=t[i];return s}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Km(this.getPriority().val())+":"),this.forEachChild(R1,(t,a)=>{const n=a.hash();n!==""&&(e+=":"+t+":"+n)}),this.lazyHash_=e===""?"":ym(e)}return this.lazyHash_}getPredecessorChildName(e,t,a){const n=this.resolveIndex_(a);if(n){const r=n.getPredecessorKey(new i1(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const a=t.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new i1(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const a=t.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new i1(t,this.children_.get(t)):null}forEachChild(e,t){const a=this.resolveIndex_(e);return a?a.inorderTraversal(n=>t(n.name,n.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const a=this.resolveIndex_(t);if(a)return a.getIteratorFrom(e,n=>n);{const n=this.children_.getIteratorFrom(e.name,i1.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const a=this.resolveIndex_(t);if(a)return a.getReverseIteratorFrom(e,n=>n);{const n=this.children_.getReverseIteratorFrom(e.name,i1.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===d5?-1:0}withIndex(e){if(e===B6||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new e1(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===B6||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const a=this.getIterator(R1),n=t.getIterator(R1);let r=a.getNext(),s=n.getNext();for(;r&&s;){if(r.name!==s.name||!r.node.equals(s.node))return!1;r=a.getNext(),s=n.getNext()}return r===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===B6?null:this.indexMap_.get(e.toString())}}e1.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oO extends e1{constructor(){super(new _2(An),e1.EMPTY_NODE,k3.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return e1.EMPTY_NODE}isEmpty(){return!1}}const d5=new oO;Object.defineProperties(i1,{MIN:{value:new i1(e0,e1.EMPTY_NODE)},MAX:{value:new i1(n6,d5)}});Gm.__EMPTY_NODE=e1.EMPTY_NODE;X1.__childrenNodeConstructor=e1;tO(d5);nO(d5);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=!0;function j1(c,e=null){if(c===null)return e1.EMPTY_NODE;if(typeof c=="object"&&".priority"in c&&(e=c[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof c=="object"&&".value"in c&&c[".value"]!==null&&(c=c[".value"]),typeof c!="object"||".sv"in c){const t=c;return new X1(t,j1(e))}if(!(c instanceof Array)&&lO){const t=[];let a=!1;if(i2(c,(s,i)=>{if(s.substring(0,1)!=="."){const o=j1(i);o.isEmpty()||(a=a||!o.getPriority().isEmpty(),t.push(new i1(s,o)))}}),t.length===0)return e1.EMPTY_NODE;const r=Q7(t,cO,s=>s.name,An);if(a){const s=Q7(t,R1.getCompare());return new e1(r,j1(e),new k3({".priority":s},{".priority":R1}))}else return new e1(r,j1(e),k3.Default)}else{let t=e1.EMPTY_NODE;return i2(c,(a,n)=>{if(V3(c,a)&&a.substring(0,1)!=="."){const r=j1(n);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(a,r))}}),t.updatePriority(j1(e))}}aO(j1);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO extends c9{constructor(e){super(),this.indexPath_=e,P(!o1(e)&&s1(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const a=this.extractChild(e.node),n=this.extractChild(t.node),r=a.compareTo(n);return r===0?d6(e.name,t.name):r}makePost(e,t){const a=j1(e),n=e1.EMPTY_NODE.updateChild(this.indexPath_,a);return new i1(t,n)}maxPost(){const e=e1.EMPTY_NODE.updateChild(this.indexPath_,d5);return new i1(n6,e)}toString(){return T8(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO extends c9{compare(e,t){const a=e.node.compareTo(t.node);return a===0?d6(e.name,t.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return i1.MIN}maxPost(){return i1.MAX}makePost(e,t){const a=j1(e);return new i1(t,a)}toString(){return".value"}}const uO=new hO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(c){return{type:"value",snapshotNode:c}}function c0(c,e){return{type:"child_added",snapshotNode:e,childName:c}}function E8(c,e){return{type:"child_removed",snapshotNode:e,childName:c}}function P8(c,e,t){return{type:"child_changed",snapshotNode:e,childName:c,oldSnap:t}}function dO(c,e){return{type:"child_moved",snapshotNode:e,childName:c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.index_=e}updateChild(e,t,a,n,r,s){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const i=e.getImmediateChild(t);return i.getChild(n).equals(a.getChild(n))&&i.isEmpty()===a.isEmpty()||(s!=null&&(a.isEmpty()?e.hasChild(t)?s.trackChildChange(E8(t,i)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):i.isEmpty()?s.trackChildChange(c0(t,a)):s.trackChildChange(P8(t,a,i))),e.isLeafNode()&&a.isEmpty())?e:e.updateImmediateChild(t,a).withIndex(this.index_)}updateFullNode(e,t,a){return a!=null&&(e.isLeafNode()||e.forEachChild(R1,(n,r)=>{t.hasChild(n)||a.trackChildChange(E8(n,r))}),t.isLeafNode()||t.forEachChild(R1,(n,r)=>{if(e.hasChild(n)){const s=e.getImmediateChild(n);s.equals(r)||a.trackChildChange(P8(n,r,s))}else a.trackChildChange(c0(n,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?e1.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(e){this.indexedFilter_=new Tn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=R8.getStartPost_(e),this.endPost_=R8.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,a=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&a}updateChild(e,t,a,n,r,s){return this.matches(new i1(t,a))||(a=e1.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,a,n,r,s)}updateFullNode(e,t,a){t.isLeafNode()&&(t=e1.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(e1.EMPTY_NODE);const r=this;return t.forEachChild(R1,(s,i)=>{r.matches(new i1(s,i))||(n=n.updateImmediateChild(s,e1.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,n,a)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=t=>{const a=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new R8(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,a,n,r,s){return this.rangedFilter_.matches(new i1(t,a))||(a=e1.EMPTY_NODE),e.getImmediateChild(t).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,a,n,r,s):this.fullLimitUpdateChild_(e,t,a,r,s)}updateFullNode(e,t,a){let n;if(t.isLeafNode()||t.isEmpty())n=e1.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){n=e1.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;r.hasNext()&&s<this.limit_;){const i=r.getNext();if(this.withinDirectionalStart(i))if(this.withinDirectionalEnd(i))n=n.updateImmediateChild(i.name,i.node),s++;else break;else continue}}else{n=t.withIndex(this.index_),n=n.updatePriority(e1.EMPTY_NODE);let r;this.reverse_?r=n.getReverseIterator(this.index_):r=n.getIterator(this.index_);let s=0;for(;r.hasNext();){const i=r.getNext();s<this.limit_&&this.withinDirectionalStart(i)&&this.withinDirectionalEnd(i)?s++:n=n.updateImmediateChild(i.name,e1.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,n,a)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,a,n,r){let s;if(this.reverse_){const h=this.index_.getCompare();s=(u,d)=>h(d,u)}else s=this.index_.getCompare();const i=e;P(i.numChildren()===this.limit_,"");const o=new i1(t,a),l=this.reverse_?i.getFirstChild(this.index_):i.getLastChild(this.index_),f=this.rangedFilter_.matches(o);if(i.hasChild(t)){const h=i.getImmediateChild(t);let u=n.getChildAfterChild(this.index_,l,this.reverse_);for(;u!=null&&(u.name===t||i.hasChild(u.name));)u=n.getChildAfterChild(this.index_,u,this.reverse_);const d=u==null?1:s(u,o);if(f&&!a.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(P8(t,a,h)),i.updateImmediateChild(t,a);{r!=null&&r.trackChildChange(E8(t,h));const H=i.updateImmediateChild(t,e1.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(c0(u.name,u.node)),H.updateImmediateChild(u.name,u.node)):H}}else return a.isEmpty()?e:f&&s(l,o)>=0?(r!=null&&(r.trackChildChange(E8(l.name,l.node)),r.trackChildChange(c0(t,a))),i.updateImmediateChild(t,a).updateImmediateChild(l.name,e1.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R1}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:e0}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:n6}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===R1}copy(){const e=new En;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pO(c){return c.loadsAllData()?new Tn(c.getIndex()):c.hasLimit()?new mO(c):new R8(c)}function il(c){const e={};if(c.isDefault())return e;let t;if(c.index_===R1?t="$priority":c.index_===uO?t="$value":c.index_===B6?t="$key":(P(c.index_ instanceof fO,"Unrecognized index type!"),t=c.index_.toString()),e.orderBy=G1(t),c.startSet_){const a=c.startAfterSet_?"startAfter":"startAt";e[a]=G1(c.indexStartValue_),c.startNameSet_&&(e[a]+=","+G1(c.indexStartName_))}if(c.endSet_){const a=c.endBeforeSet_?"endBefore":"endAt";e[a]=G1(c.indexEndValue_),c.endNameSet_&&(e[a]+=","+G1(c.indexEndName_))}return c.limitSet_&&(c.isViewFromLeft()?e.limitToFirst=c.limit_:e.limitToLast=c.limit_),e}function ol(c){const e={};if(c.startSet_&&(e.sp=c.indexStartValue_,c.startNameSet_&&(e.sn=c.indexStartName_),e.sin=!c.startAfterSet_),c.endSet_&&(e.ep=c.indexEndValue_,c.endNameSet_&&(e.en=c.indexEndName_),e.ein=!c.endBeforeSet_),c.limitSet_){e.l=c.limit_;let t=c.viewFrom_;t===""&&(c.isViewFromLeft()?t="l":t="r"),e.vf=t}return c.index_!==R1&&(e.i=c.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J7 extends qm{constructor(e,t,a,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=a,this.appCheckTokenProvider_=n,this.log_=u5("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,a,n){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=J7.getListenId_(e,a),i={};this.listens_[s]=i;const o=il(e._queryParams);this.restRequest_(r+".json",o,(l,f)=>{let h=f;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,a),X6(this.listens_,s)===i){let u;l?l===401?u="permission_denied":u="rest_error:"+l:u="ok",n(u,null)}})}unlisten(e,t){const a=J7.getListenId_(e,t);delete this.listens_[a]}get(e){const t=il(e._queryParams),a=e._path.toString(),n=new e6;return this.restRequest_(a+".json",t,(r,s)=>{let i=s;r===404&&(i=null,r=null),r===null?(this.onDataUpdate_(a,i,!1,null),n.resolve(i)):n.reject(new Error(i))}),n.promise}refreshAuthToken(e){}restRequest_(e,t={},a){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+m0(t);this.log_("Sending REST request for "+s);const i=new XMLHttpRequest;i.onreadystatechange=()=>{if(a&&i.readyState===4){this.log_("REST Response for "+s+" received. status:",i.status,"response:",i.responseText);let o=null;if(i.status>=200&&i.status<300){try{o=z8(i.responseText)}catch{C2("Failed to parse JSON response for "+s+": "+i.responseText)}a(null,o)}else i.status!==401&&i.status!==404&&C2("Got unsuccessful REST response for "+s+" Status: "+i.status),a(i.status);a=null}},i.open("GET",s,!0),i.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.rootNode_=e1.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return{value:null,children:new Map}}function Jm(c,e,t){if(o1(e))c.value=t,c.children.clear();else if(c.value!==null)c.value=c.value.updateChild(e,t);else{const a=s1(e);c.children.has(a)||c.children.set(a,ee());const n=c.children.get(a);e=y1(e),Jm(n,e,t)}}function kt(c,e,t){c.value!==null?t(e,c.value):zO(c,(a,n)=>{const r=new M1(e.toString()+"/"+a);kt(n,r,t)})}function zO(c,e){c.children.forEach((t,a)=>{e(a,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&i2(this.last_,(a,n)=>{t[a]=t[a]-n}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=10*1e3,CO=30*1e3,HO=5*60*1e3;class MO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gO(e);const a=ll+(CO-ll)*Math.random();t8(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),t={};let a=!1;i2(e,(n,r)=>{r>0&&V3(this.statsToReport_,n)&&(t[n]=r,a=!0)}),a&&this.server_.reportStats(t),t8(this.reportStats_.bind(this),Math.floor(Math.random()*2*HO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z2;(function(c){c[c.OVERWRITE=0]="OVERWRITE",c[c.MERGE=1]="MERGE",c[c.ACK_USER_WRITE=2]="ACK_USER_WRITE",c[c.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Z2||(Z2={}));function Pn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function In(c){return{fromUser:!1,fromServer:!0,queryId:c,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,a){this.path=e,this.affectedTree=t,this.revert=a,this.type=Z2.ACK_USER_WRITE,this.source=Pn()}operationForChild(e){if(o1(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new M1(e));return new ce(m1(),t,this.revert)}}else return P(s1(this.path)===e,"operationForChild called for unrelated child."),new ce(y1(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I8{constructor(e,t){this.source=e,this.path=t,this.type=Z2.LISTEN_COMPLETE}operationForChild(e){return o1(this.path)?new I8(this.source,m1()):new I8(this.source,y1(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e,t,a){this.source=e,this.path=t,this.snap=a,this.type=Z2.OVERWRITE}operationForChild(e){return o1(this.path)?new r6(this.source,m1(),this.snap.getImmediateChild(e)):new r6(this.source,y1(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,t,a){this.source=e,this.path=t,this.children=a,this.type=Z2.MERGE}operationForChild(e){if(o1(this.path)){const t=this.children.subtree(new M1(e));return t.isEmpty()?null:t.value?new r6(this.source,m1(),t.value):new t0(this.source,m1(),t)}else return P(s1(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t0(this.source,y1(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e,t,a){this.node_=e,this.fullyInitialized_=t,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(o1(e))return this.isFullyInitialized()&&!this.filtered_;const t=s1(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LO(c,e,t,a){const n=[],r=[];return e.forEach(s=>{s.type==="child_changed"&&c.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&r.push(dO(s.childName,s.snapshotNode))}),A0(c,n,"child_removed",e,a,t),A0(c,n,"child_added",e,a,t),A0(c,n,"child_moved",r,a,t),A0(c,n,"child_changed",e,a,t),A0(c,n,"value",e,a,t),n}function A0(c,e,t,a,n,r){const s=a.filter(i=>i.type===t);s.sort((i,o)=>_O(c,i,o)),s.forEach(i=>{const o=yO(c,i,r);n.forEach(l=>{l.respondsTo(i.type)&&e.push(l.createEvent(o,c.query_))})})}function yO(c,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,c.index_)),e}function _O(c,e,t){if(e.childName==null||t.childName==null)throw u0("Should only compare child_ events.");const a=new i1(e.childName,e.snapshotNode),n=new i1(t.childName,t.snapshotNode);return c.index_.compare(a,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t9(c,e){return{eventCache:c,serverCache:e}}function a8(c,e,t,a){return t9(new g4(e,t,a),c.serverCache)}function ep(c,e,t,a){return t9(c.eventCache,new g4(e,t,a))}function te(c){return c.eventCache.isFullyInitialized()?c.eventCache.getNode():null}function s6(c){return c.serverCache.isFullyInitialized()?c.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;const bO=()=>(pc||(pc=new _2(fD)),pc);class L1{constructor(e,t=bO()){this.value=e,this.children=t}static fromObject(e){let t=new L1(null);return i2(e,(a,n)=>{t=t.set(new M1(a),n)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:m1(),value:this.value};if(o1(e))return null;{const a=s1(e),n=this.children.get(a);if(n!==null){const r=n.findRootMostMatchingPathAndValue(y1(e),t);return r!=null?{path:E1(new M1(a),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(o1(e))return this;{const t=s1(e),a=this.children.get(t);return a!==null?a.subtree(y1(e)):new L1(null)}}set(e,t){if(o1(e))return new L1(t,this.children);{const a=s1(e),r=(this.children.get(a)||new L1(null)).set(y1(e),t),s=this.children.insert(a,r);return new L1(this.value,s)}}remove(e){if(o1(e))return this.children.isEmpty()?new L1(null):new L1(null,this.children);{const t=s1(e),a=this.children.get(t);if(a){const n=a.remove(y1(e));let r;return n.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,n),this.value===null&&r.isEmpty()?new L1(null):new L1(this.value,r)}else return this}}get(e){if(o1(e))return this.value;{const t=s1(e),a=this.children.get(t);return a?a.get(y1(e)):null}}setTree(e,t){if(o1(e))return t;{const a=s1(e),r=(this.children.get(a)||new L1(null)).setTree(y1(e),t);let s;return r.isEmpty()?s=this.children.remove(a):s=this.children.insert(a,r),new L1(this.value,s)}}fold(e){return this.fold_(m1(),e)}fold_(e,t){const a={};return this.children.inorderTraversal((n,r)=>{a[n]=r.fold_(E1(e,n),t)}),t(e,this.value,a)}findOnPath(e,t){return this.findOnPath_(e,m1(),t)}findOnPath_(e,t,a){const n=this.value?a(t,this.value):!1;if(n)return n;if(o1(e))return null;{const r=s1(e),s=this.children.get(r);return s?s.findOnPath_(y1(e),E1(t,r),a):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,m1(),t)}foreachOnPath_(e,t,a){if(o1(e))return this;{this.value&&a(t,this.value);const n=s1(e),r=this.children.get(n);return r?r.foreachOnPath_(y1(e),E1(t,n),a):new L1(null)}}foreach(e){this.foreach_(m1(),e)}foreach_(e,t){this.children.inorderTraversal((a,n)=>{n.foreach_(E1(e,a),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,a)=>{a.value&&e(t,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.writeTree_=e}static empty(){return new J2(new L1(null))}}function n8(c,e,t){if(o1(e))return new J2(new L1(t));{const a=c.writeTree_.findRootMostValueAndPath(e);if(a!=null){const n=a.path;let r=a.value;const s=z2(n,e);return r=r.updateChild(s,t),new J2(c.writeTree_.set(n,r))}else{const n=new L1(t),r=c.writeTree_.setTree(e,n);return new J2(r)}}}function At(c,e,t){let a=c;return i2(t,(n,r)=>{a=n8(a,E1(e,n),r)}),a}function fl(c,e){if(o1(e))return J2.empty();{const t=c.writeTree_.setTree(e,new L1(null));return new J2(t)}}function Tt(c,e){return m6(c,e)!=null}function m6(c,e){const t=c.writeTree_.findRootMostValueAndPath(e);return t!=null?c.writeTree_.get(t.path).getChild(z2(t.path,e)):null}function hl(c){const e=[],t=c.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(R1,(a,n)=>{e.push(new i1(a,n))}):c.writeTree_.children.inorderTraversal((a,n)=>{n.value!=null&&e.push(new i1(a,n.value))}),e}function m4(c,e){if(o1(e))return c;{const t=m6(c,e);return t!=null?new J2(new L1(t)):new J2(c.writeTree_.subtree(e))}}function Et(c){return c.writeTree_.isEmpty()}function a0(c,e){return cp(m1(),c.writeTree_,e)}function cp(c,e,t){if(e.value!=null)return t.updateChild(c,e.value);{let a=null;return e.children.inorderTraversal((n,r)=>{n===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),a=r.value):t=cp(E1(c,n),r,t)}),!t.getChild(c).isEmpty()&&a!==null&&(t=t.updateChild(E1(c,".priority"),a)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a9(c,e){return rp(e,c)}function xO(c,e,t,a,n){P(a>c.lastWriteId,"Stacking an older write on top of newer ones"),n===void 0&&(n=!0),c.allWrites.push({path:e,snap:t,writeId:a,visible:n}),n&&(c.visibleWrites=n8(c.visibleWrites,e,t)),c.lastWriteId=a}function wO(c,e,t,a){P(a>c.lastWriteId,"Stacking an older merge on top of newer ones"),c.allWrites.push({path:e,children:t,writeId:a,visible:!0}),c.visibleWrites=At(c.visibleWrites,e,t),c.lastWriteId=a}function NO(c,e){for(let t=0;t<c.allWrites.length;t++){const a=c.allWrites[t];if(a.writeId===e)return a}return null}function SO(c,e){const t=c.allWrites.findIndex(i=>i.writeId===e);P(t>=0,"removeWrite called with nonexistent writeId.");const a=c.allWrites[t];c.allWrites.splice(t,1);let n=a.visible,r=!1,s=c.allWrites.length-1;for(;n&&s>=0;){const i=c.allWrites[s];i.visible&&(s>=t&&kO(i,a.path)?n=!1:F2(a.path,i.path)&&(r=!0)),s--}if(n){if(r)return AO(c),!0;if(a.snap)c.visibleWrites=fl(c.visibleWrites,a.path);else{const i=a.children;i2(i,o=>{c.visibleWrites=fl(c.visibleWrites,E1(a.path,o))})}return!0}else return!1}function kO(c,e){if(c.snap)return F2(c.path,e);for(const t in c.children)if(c.children.hasOwnProperty(t)&&F2(E1(c.path,t),e))return!0;return!1}function AO(c){c.visibleWrites=tp(c.allWrites,TO,m1()),c.allWrites.length>0?c.lastWriteId=c.allWrites[c.allWrites.length-1].writeId:c.lastWriteId=-1}function TO(c){return c.visible}function tp(c,e,t){let a=J2.empty();for(let n=0;n<c.length;++n){const r=c[n];if(e(r)){const s=r.path;let i;if(r.snap)F2(t,s)?(i=z2(t,s),a=n8(a,i,r.snap)):F2(s,t)&&(i=z2(s,t),a=n8(a,m1(),r.snap.getChild(i)));else if(r.children){if(F2(t,s))i=z2(t,s),a=At(a,i,r.children);else if(F2(s,t))if(i=z2(s,t),o1(i))a=At(a,m1(),r.children);else{const o=X6(r.children,s1(i));if(o){const l=o.getChild(y1(i));a=n8(a,m1(),l)}}}else throw u0("WriteRecord should have .snap or .children")}}return a}function ap(c,e,t,a,n){if(!a&&!n){const r=m6(c.visibleWrites,e);if(r!=null)return r;{const s=m4(c.visibleWrites,e);if(Et(s))return t;if(t==null&&!Tt(s,m1()))return null;{const i=t||e1.EMPTY_NODE;return a0(s,i)}}}else{const r=m4(c.visibleWrites,e);if(!n&&Et(r))return t;if(!n&&t==null&&!Tt(r,m1()))return null;{const s=function(l){return(l.visible||n)&&(!a||!~a.indexOf(l.writeId))&&(F2(l.path,e)||F2(e,l.path))},i=tp(c.allWrites,s,e),o=t||e1.EMPTY_NODE;return a0(i,o)}}}function EO(c,e,t){let a=e1.EMPTY_NODE;const n=m6(c.visibleWrites,e);if(n)return n.isLeafNode()||n.forEachChild(R1,(r,s)=>{a=a.updateImmediateChild(r,s)}),a;if(t){const r=m4(c.visibleWrites,e);return t.forEachChild(R1,(s,i)=>{const o=a0(m4(r,new M1(s)),i);a=a.updateImmediateChild(s,o)}),hl(r).forEach(s=>{a=a.updateImmediateChild(s.name,s.node)}),a}else{const r=m4(c.visibleWrites,e);return hl(r).forEach(s=>{a=a.updateImmediateChild(s.name,s.node)}),a}}function PO(c,e,t,a,n){P(a||n,"Either existingEventSnap or existingServerSnap must exist");const r=E1(e,t);if(Tt(c.visibleWrites,r))return null;{const s=m4(c.visibleWrites,r);return Et(s)?n.getChild(t):a0(s,n.getChild(t))}}function RO(c,e,t,a){const n=E1(e,t),r=m6(c.visibleWrites,n);if(r!=null)return r;if(a.isCompleteForChild(t)){const s=m4(c.visibleWrites,n);return a0(s,a.getNode().getImmediateChild(t))}else return null}function IO(c,e){return m6(c.visibleWrites,e)}function DO(c,e,t,a,n,r,s){let i;const o=m4(c.visibleWrites,e),l=m6(o,m1());if(l!=null)i=l;else if(t!=null)i=a0(o,t);else return[];if(i=i.withIndex(s),!i.isEmpty()&&!i.isLeafNode()){const f=[],h=s.getCompare(),u=r?i.getReverseIteratorFrom(a,s):i.getIteratorFrom(a,s);let d=u.getNext();for(;d&&f.length<n;)h(d,a)!==0&&f.push(d),d=u.getNext();return f}else return[]}function OO(){return{visibleWrites:J2.empty(),allWrites:[],lastWriteId:-1}}function ae(c,e,t,a){return ap(c.writeTree,c.treePath,e,t,a)}function Dn(c,e){return EO(c.writeTree,c.treePath,e)}function ul(c,e,t,a){return PO(c.writeTree,c.treePath,e,t,a)}function ne(c,e){return IO(c.writeTree,E1(c.treePath,e))}function FO(c,e,t,a,n,r){return DO(c.writeTree,c.treePath,e,t,a,n,r)}function On(c,e,t){return RO(c.writeTree,c.treePath,e,t)}function np(c,e){return rp(E1(c.treePath,e),c.writeTree)}function rp(c,e){return{treePath:c,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,a=e.childName;P(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),P(a!==".priority","Only non-priority child changes can be tracked.");const n=this.changeMap.get(a);if(n){const r=n.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(a,P8(a,e.snapshotNode,n.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(a);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(a,E8(a,n.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(a,c0(a,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(a,P8(a,e.snapshotNode,n.oldSnap));else throw u0("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{getCompleteChild(e){return null}getChildAfterChild(e,t,a){return null}}const sp=new UO;class Fn{constructor(e,t,a=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=a}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new g4(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return On(this.writes_,e,a)}}getChildAfterChild(e,t,a){const n=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:s6(this.viewCache_),r=FO(this.writes_,n,t,1,a,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(c){return{filter:c}}function $O(c,e){P(e.eventCache.getNode().isIndexed(c.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(c.filter.getIndex()),"Server snap not indexed")}function WO(c,e,t,a,n){const r=new BO;let s,i;if(t.type===Z2.OVERWRITE){const l=t;l.source.fromUser?s=Pt(c,e,l.path,l.snap,a,n,r):(P(l.source.fromServer,"Unknown source."),i=l.source.tagged||e.serverCache.isFiltered()&&!o1(l.path),s=re(c,e,l.path,l.snap,a,n,i,r))}else if(t.type===Z2.MERGE){const l=t;l.source.fromUser?s=GO(c,e,l.path,l.children,a,n,r):(P(l.source.fromServer,"Unknown source."),i=l.source.tagged||e.serverCache.isFiltered(),s=Rt(c,e,l.path,l.children,a,n,i,r))}else if(t.type===Z2.ACK_USER_WRITE){const l=t;l.revert?s=ZO(c,e,l.path,a,n,r):s=KO(c,e,l.path,l.affectedTree,a,n,r)}else if(t.type===Z2.LISTEN_COMPLETE)s=YO(c,e,t.path,a,r);else throw u0("Unknown operation type: "+t.type);const o=r.getChanges();return jO(e,s,o),{viewCache:s,changes:o}}function jO(c,e,t){const a=e.eventCache;if(a.isFullyInitialized()){const n=a.getNode().isLeafNode()||a.getNode().isEmpty(),r=te(c);(t.length>0||!c.eventCache.isFullyInitialized()||n&&!a.getNode().equals(r)||!a.getNode().getPriority().equals(r.getPriority()))&&t.push(Qm(te(e)))}}function ip(c,e,t,a,n,r){const s=e.eventCache;if(ne(a,t)!=null)return e;{let i,o;if(o1(t))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=s6(e),f=l instanceof e1?l:e1.EMPTY_NODE,h=Dn(a,f);i=c.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=ae(a,s6(e));i=c.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=s1(t);if(l===".priority"){P(z4(t)===1,"Can't have a priority with additional path components");const f=s.getNode();o=e.serverCache.getNode();const h=ul(a,t,f,o);h!=null?i=c.filter.updatePriority(f,h):i=s.getNode()}else{const f=y1(t);let h;if(s.isCompleteForChild(l)){o=e.serverCache.getNode();const u=ul(a,t,s.getNode(),o);u!=null?h=s.getNode().getImmediateChild(l).updateChild(f,u):h=s.getNode().getImmediateChild(l)}else h=On(a,l,e.serverCache);h!=null?i=c.filter.updateChild(s.getNode(),l,h,f,n,r):i=s.getNode()}}return a8(e,i,s.isFullyInitialized()||o1(t),c.filter.filtersNodes())}}function re(c,e,t,a,n,r,s,i){const o=e.serverCache;let l;const f=s?c.filter:c.filter.getIndexedFilter();if(o1(t))l=f.updateFullNode(o.getNode(),a,null);else if(f.filtersNodes()&&!o.isFiltered()){const d=o.getNode().updateChild(t,a);l=f.updateFullNode(o.getNode(),d,null)}else{const d=s1(t);if(!o.isCompleteForPath(t)&&z4(t)>1)return e;const v=y1(t),y=o.getNode().getImmediateChild(d).updateChild(v,a);d===".priority"?l=f.updatePriority(o.getNode(),y):l=f.updateChild(o.getNode(),d,y,v,sp,null)}const h=ep(e,l,o.isFullyInitialized()||o1(t),f.filtersNodes()),u=new Fn(n,h,r);return ip(c,h,t,n,u,i)}function Pt(c,e,t,a,n,r,s){const i=e.eventCache;let o,l;const f=new Fn(n,e,r);if(o1(t))l=c.filter.updateFullNode(e.eventCache.getNode(),a,s),o=a8(e,l,!0,c.filter.filtersNodes());else{const h=s1(t);if(h===".priority")l=c.filter.updatePriority(e.eventCache.getNode(),a),o=a8(e,l,i.isFullyInitialized(),i.isFiltered());else{const u=y1(t),d=i.getNode().getImmediateChild(h);let v;if(o1(u))v=a;else{const H=f.getCompleteChild(h);H!=null?Nn(u)===".priority"&&H.getChild(Wm(u)).isEmpty()?v=H:v=H.updateChild(u,a):v=e1.EMPTY_NODE}if(d.equals(v))o=e;else{const H=c.filter.updateChild(i.getNode(),h,v,u,f,s);o=a8(e,H,i.isFullyInitialized(),c.filter.filtersNodes())}}}return o}function dl(c,e){return c.eventCache.isCompleteForChild(e)}function GO(c,e,t,a,n,r,s){let i=e;return a.foreach((o,l)=>{const f=E1(t,o);dl(e,s1(f))&&(i=Pt(c,i,f,l,n,r,s))}),a.foreach((o,l)=>{const f=E1(t,o);dl(e,s1(f))||(i=Pt(c,i,f,l,n,r,s))}),i}function ml(c,e,t){return t.foreach((a,n)=>{e=e.updateChild(a,n)}),e}function Rt(c,e,t,a,n,r,s,i){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,l;o1(t)?l=a:l=new L1(null).setTree(t,a);const f=e.serverCache.getNode();return l.children.inorderTraversal((h,u)=>{if(f.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),v=ml(c,d,u);o=re(c,o,new M1(h),v,n,r,s,i)}}),l.children.inorderTraversal((h,u)=>{const d=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!f.hasChild(h)&&!d){const v=e.serverCache.getNode().getImmediateChild(h),H=ml(c,v,u);o=re(c,o,new M1(h),H,n,r,s,i)}}),o}function KO(c,e,t,a,n,r,s){if(ne(n,t)!=null)return e;const i=e.serverCache.isFiltered(),o=e.serverCache;if(a.value!=null){if(o1(t)&&o.isFullyInitialized()||o.isCompleteForPath(t))return re(c,e,t,o.getNode().getChild(t),n,r,i,s);if(o1(t)){let l=new L1(null);return o.getNode().forEachChild(B6,(f,h)=>{l=l.set(new M1(f),h)}),Rt(c,e,t,l,n,r,i,s)}else return e}else{let l=new L1(null);return a.foreach((f,h)=>{const u=E1(t,f);o.isCompleteForPath(u)&&(l=l.set(f,o.getNode().getChild(u)))}),Rt(c,e,t,l,n,r,i,s)}}function YO(c,e,t,a,n){const r=e.serverCache,s=ep(e,r.getNode(),r.isFullyInitialized()||o1(t),r.isFiltered());return ip(c,s,t,a,sp,n)}function ZO(c,e,t,a,n,r){let s;if(ne(a,t)!=null)return e;{const i=new Fn(a,e,n),o=e.eventCache.getNode();let l;if(o1(t)||s1(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=ae(a,s6(e));else{const h=e.serverCache.getNode();P(h instanceof e1,"serverChildren would be complete if leaf node"),f=Dn(a,h)}f=f,l=c.filter.updateFullNode(o,f,r)}else{const f=s1(t);let h=On(a,f,e.serverCache);h==null&&e.serverCache.isCompleteForChild(f)&&(h=o.getImmediateChild(f)),h!=null?l=c.filter.updateChild(o,f,h,y1(t),i,r):e.eventCache.getNode().hasChild(f)?l=c.filter.updateChild(o,f,e1.EMPTY_NODE,y1(t),i,r):l=o,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=ae(a,s6(e)),s.isLeafNode()&&(l=c.filter.updateFullNode(l,s,r)))}return s=e.serverCache.isFullyInitialized()||ne(a,m1())!=null,a8(e,l,s,c.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,n=new Tn(a.getIndex()),r=pO(a);this.processor_=qO(r);const s=t.serverCache,i=t.eventCache,o=n.updateFullNode(e1.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(e1.EMPTY_NODE,i.getNode(),null),f=new g4(o,s.isFullyInitialized(),n.filtersNodes()),h=new g4(l,i.isFullyInitialized(),r.filtersNodes());this.viewCache_=t9(h,f),this.eventGenerator_=new VO(this.query_)}get query(){return this.query_}}function QO(c){return c.viewCache_.serverCache.getNode()}function JO(c){return te(c.viewCache_)}function eF(c,e){const t=s6(c.viewCache_);return t&&(c.query._queryParams.loadsAllData()||!o1(e)&&!t.getImmediateChild(s1(e)).isEmpty())?t.getChild(e):null}function pl(c){return c.eventRegistrations_.length===0}function cF(c,e){c.eventRegistrations_.push(e)}function vl(c,e,t){const a=[];if(t){P(e==null,"A cancel should cancel all event registrations.");const n=c.query._path;c.eventRegistrations_.forEach(r=>{const s=r.createCancelEvent(t,n);s&&a.push(s)})}if(e){let n=[];for(let r=0;r<c.eventRegistrations_.length;++r){const s=c.eventRegistrations_[r];if(!s.matches(e))n.push(s);else if(e.hasAnyCallback()){n=n.concat(c.eventRegistrations_.slice(r+1));break}}c.eventRegistrations_=n}else c.eventRegistrations_=[];return a}function zl(c,e,t,a){e.type===Z2.MERGE&&e.source.queryId!==null&&(P(s6(c.viewCache_),"We should always have a full cache before handling merges"),P(te(c.viewCache_),"Missing event cache, even though we have a server cache"));const n=c.viewCache_,r=WO(c.processor_,n,e,t,a);return $O(c.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),c.viewCache_=r.viewCache,op(c,r.changes,r.viewCache.eventCache.getNode(),null)}function tF(c,e){const t=c.viewCache_.eventCache,a=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(R1,(r,s)=>{a.push(c0(r,s))}),t.isFullyInitialized()&&a.push(Qm(t.getNode())),op(c,a,t.getNode(),e)}function op(c,e,t,a){const n=a?[a]:c.eventRegistrations_;return LO(c.eventGenerator_,e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let se;class lp{constructor(){this.views=new Map}}function aF(c){P(!se,"__referenceConstructor has already been defined"),se=c}function nF(){return P(se,"Reference.ts has not been loaded"),se}function rF(c){return c.views.size===0}function Bn(c,e,t,a){const n=e.source.queryId;if(n!==null){const r=c.views.get(n);return P(r!=null,"SyncTree gave us an op for an invalid query."),zl(r,e,t,a)}else{let r=[];for(const s of c.views.values())r=r.concat(zl(s,e,t,a));return r}}function fp(c,e,t,a,n){const r=e._queryIdentifier,s=c.views.get(r);if(!s){let i=ae(t,n?a:null),o=!1;i?o=!0:a instanceof e1?(i=Dn(t,a),o=!1):(i=e1.EMPTY_NODE,o=!1);const l=t9(new g4(i,o,!1),new g4(a,n,!1));return new XO(e,l)}return s}function sF(c,e,t,a,n,r){const s=fp(c,e,a,n,r);return c.views.has(e._queryIdentifier)||c.views.set(e._queryIdentifier,s),cF(s,t),tF(s,t)}function iF(c,e,t,a){const n=e._queryIdentifier,r=[];let s=[];const i=C4(c);if(n==="default")for(const[o,l]of c.views.entries())s=s.concat(vl(l,t,a)),pl(l)&&(c.views.delete(o),l.query._queryParams.loadsAllData()||r.push(l.query));else{const o=c.views.get(n);o&&(s=s.concat(vl(o,t,a)),pl(o)&&(c.views.delete(n),o.query._queryParams.loadsAllData()||r.push(o.query)))}return i&&!C4(c)&&r.push(new(nF())(e._repo,e._path)),{removed:r,events:s}}function hp(c){const e=[];for(const t of c.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function p4(c,e){let t=null;for(const a of c.views.values())t=t||eF(a,e);return t}function up(c,e){if(e._queryParams.loadsAllData())return n9(c);{const a=e._queryIdentifier;return c.views.get(a)}}function dp(c,e){return up(c,e)!=null}function C4(c){return n9(c)!=null}function n9(c){for(const e of c.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ie;function oF(c){P(!ie,"__referenceConstructor has already been defined"),ie=c}function lF(){return P(ie,"Reference.ts has not been loaded"),ie}let fF=1;class gl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new L1(null),this.pendingWriteTree_=OO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mp(c,e,t,a,n){return xO(c.pendingWriteTree_,e,t,a,n),n?H0(c,new r6(Pn(),e,t)):[]}function hF(c,e,t,a){wO(c.pendingWriteTree_,e,t,a);const n=L1.fromObject(t);return H0(c,new t0(Pn(),e,n))}function o4(c,e,t=!1){const a=NO(c.pendingWriteTree_,e);if(SO(c.pendingWriteTree_,e)){let r=new L1(null);return a.snap!=null?r=r.set(m1(),!0):i2(a.children,s=>{r=r.set(new M1(s),!0)}),H0(c,new ce(a.path,r,t))}else return[]}function m5(c,e,t){return H0(c,new r6(Rn(),e,t))}function uF(c,e,t){const a=L1.fromObject(t);return H0(c,new t0(Rn(),e,a))}function dF(c,e){return H0(c,new I8(Rn(),e))}function mF(c,e,t){const a=qn(c,t);if(a){const n=$n(a),r=n.path,s=n.queryId,i=z2(r,e),o=new I8(In(s),i);return Wn(c,r,o)}else return[]}function oe(c,e,t,a,n=!1){const r=e._path,s=c.syncPointTree_.get(r);let i=[];if(s&&(e._queryIdentifier==="default"||dp(s,e))){const o=iF(s,e,t,a);rF(s)&&(c.syncPointTree_=c.syncPointTree_.remove(r));const l=o.removed;if(i=o.events,!n){const f=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=c.syncPointTree_.findOnPath(r,(u,d)=>C4(d));if(f&&!h){const u=c.syncPointTree_.subtree(r);if(!u.isEmpty()){const d=zF(u);for(let v=0;v<d.length;++v){const H=d[v],y=H.query,M=gp(c,H);c.listenProvider_.startListening(r8(y),D8(c,y),M.hashFn,M.onComplete)}}}!h&&l.length>0&&!a&&(f?c.listenProvider_.stopListening(r8(e),null):l.forEach(u=>{const d=c.queryToTagMap.get(r9(u));c.listenProvider_.stopListening(r8(u),d)}))}gF(c,l)}return i}function pp(c,e,t,a){const n=qn(c,a);if(n!=null){const r=$n(n),s=r.path,i=r.queryId,o=z2(s,e),l=new r6(In(i),o,t);return Wn(c,s,l)}else return[]}function pF(c,e,t,a){const n=qn(c,a);if(n){const r=$n(n),s=r.path,i=r.queryId,o=z2(s,e),l=L1.fromObject(t),f=new t0(In(i),o,l);return Wn(c,s,f)}else return[]}function It(c,e,t,a=!1){const n=e._path;let r=null,s=!1;c.syncPointTree_.foreachOnPath(n,(u,d)=>{const v=z2(u,n);r=r||p4(d,v),s=s||C4(d)});let i=c.syncPointTree_.get(n);i?(s=s||C4(i),r=r||p4(i,m1())):(i=new lp,c.syncPointTree_=c.syncPointTree_.set(n,i));let o;r!=null?o=!0:(o=!1,r=e1.EMPTY_NODE,c.syncPointTree_.subtree(n).foreachChild((d,v)=>{const H=p4(v,m1());H&&(r=r.updateImmediateChild(d,H))}));const l=dp(i,e);if(!l&&!e._queryParams.loadsAllData()){const u=r9(e);P(!c.queryToTagMap.has(u),"View does not exist, but we have a tag");const d=CF();c.queryToTagMap.set(u,d),c.tagToQueryMap.set(d,u)}const f=a9(c.pendingWriteTree_,n);let h=sF(i,e,t,f,r,o);if(!l&&!s&&!a){const u=up(i,e);h=h.concat(HF(c,e,u))}return h}function Un(c,e,t){const n=c.pendingWriteTree_,r=c.syncPointTree_.findOnPath(e,(s,i)=>{const o=z2(s,e),l=p4(i,o);if(l)return l});return ap(n,e,r,t,!0)}function vF(c,e){const t=e._path;let a=null;c.syncPointTree_.foreachOnPath(t,(l,f)=>{const h=z2(l,t);a=a||p4(f,h)});let n=c.syncPointTree_.get(t);n?a=a||p4(n,m1()):(n=new lp,c.syncPointTree_=c.syncPointTree_.set(t,n));const r=a!=null,s=r?new g4(a,!0,!1):null,i=a9(c.pendingWriteTree_,e._path),o=fp(n,e,i,r?s.getNode():e1.EMPTY_NODE,r);return JO(o)}function H0(c,e){return vp(e,c.syncPointTree_,null,a9(c.pendingWriteTree_,m1()))}function vp(c,e,t,a){if(o1(c.path))return zp(c,e,t,a);{const n=e.get(m1());t==null&&n!=null&&(t=p4(n,m1()));let r=[];const s=s1(c.path),i=c.operationForChild(s),o=e.children.get(s);if(o&&i){const l=t?t.getImmediateChild(s):null,f=np(a,s);r=r.concat(vp(i,o,l,f))}return n&&(r=r.concat(Bn(n,c,a,t))),r}}function zp(c,e,t,a){const n=e.get(m1());t==null&&n!=null&&(t=p4(n,m1()));let r=[];return e.children.inorderTraversal((s,i)=>{const o=t?t.getImmediateChild(s):null,l=np(a,s),f=c.operationForChild(s);f&&(r=r.concat(zp(f,i,o,l)))}),n&&(r=r.concat(Bn(n,c,a,t))),r}function gp(c,e){const t=e.query,a=D8(c,t);return{hashFn:()=>(QO(e)||e1.EMPTY_NODE).hash(),onComplete:n=>{if(n==="ok")return a?mF(c,t._path,a):dF(c,t._path);{const r=dD(n,t);return oe(c,t,null,r)}}}}function D8(c,e){const t=r9(e);return c.queryToTagMap.get(t)}function r9(c){return c._path.toString()+"$"+c._queryIdentifier}function qn(c,e){return c.tagToQueryMap.get(e)}function $n(c){const e=c.indexOf("$");return P(e!==-1&&e<c.length-1,"Bad queryKey."),{queryId:c.substr(e+1),path:new M1(c.substr(0,e))}}function Wn(c,e,t){const a=c.syncPointTree_.get(e);P(a,"Missing sync point for query tag that we're tracking");const n=a9(c.pendingWriteTree_,e);return Bn(a,t,n,null)}function zF(c){return c.fold((e,t,a)=>{if(t&&C4(t))return[n9(t)];{let n=[];return t&&(n=hp(t)),i2(a,(r,s)=>{n=n.concat(s)}),n}})}function r8(c){return c._queryParams.loadsAllData()&&!c._queryParams.isDefault()?new(lF())(c._repo,c._path):c}function gF(c,e){for(let t=0;t<e.length;++t){const a=e[t];if(!a._queryParams.loadsAllData()){const n=r9(a),r=c.queryToTagMap.get(n);c.queryToTagMap.delete(n),c.tagToQueryMap.delete(r)}}}function CF(){return fF++}function HF(c,e,t){const a=e._path,n=D8(c,e),r=gp(c,t),s=c.listenProvider_.startListening(r8(e),n,r.hashFn,r.onComplete),i=c.syncPointTree_.subtree(a);if(n)P(!C4(i.value),"If we're adding a query, it shouldn't be shadowed");else{const o=i.fold((l,f,h)=>{if(!o1(l)&&f&&C4(f))return[n9(f).query];{let u=[];return f&&(u=u.concat(hp(f).map(d=>d.query))),i2(h,(d,v)=>{u=u.concat(v)}),u}});for(let l=0;l<o.length;++l){const f=o[l];c.listenProvider_.stopListening(r8(f),D8(c,f))}}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new jn(t)}node(){return this.node_}}class Gn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=E1(this.path_,e);return new Gn(this.syncTree_,t)}node(){return Un(this.syncTree_,this.path_)}}const MF=function(c){return c=c||{},c.timestamp=c.timestamp||new Date().getTime(),c},Cl=function(c,e,t){if(!c||typeof c!="object")return c;if(P(".sv"in c,"Unexpected leaf node or priority contents"),typeof c[".sv"]=="string")return VF(c[".sv"],e,t);if(typeof c[".sv"]=="object")return LF(c[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(c,null,2))},VF=function(c,e,t){switch(c){case"timestamp":return t.timestamp;default:P(!1,"Unexpected server value: "+c)}},LF=function(c,e,t){c.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(c,null,2));const a=c.increment;typeof a!="number"&&P(!1,"Unexpected increment value: "+a);const n=e.node();if(P(n!==null&&typeof n<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return a;const s=n.getValue();return typeof s!="number"?a:s+a},Cp=function(c,e,t,a){return Kn(e,new Gn(t,c),a)},Hp=function(c,e,t){return Kn(c,new jn(e),t)};function Kn(c,e,t){const a=c.getPriority().val(),n=Cl(a,e.getImmediateChild(".priority"),t);let r;if(c.isLeafNode()){const s=c,i=Cl(s.getValue(),e,t);return i!==s.getValue()||n!==s.getPriority().val()?new X1(i,j1(n)):c}else{const s=c;return r=s,n!==s.getPriority().val()&&(r=r.updatePriority(new X1(n))),s.forEachChild(R1,(i,o)=>{const l=Kn(o,e.getImmediateChild(i),t);l!==o&&(r=r.updateImmediateChild(i,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e="",t=null,a={children:{},childCount:0}){this.name=e,this.parent=t,this.node=a}}function Zn(c,e){let t=e instanceof M1?e:new M1(e),a=c,n=s1(t);for(;n!==null;){const r=X6(a.node.children,n)||{children:{},childCount:0};a=new Yn(n,a,r),t=y1(t),n=s1(t)}return a}function M0(c){return c.node.value}function Mp(c,e){c.node.value=e,Dt(c)}function Vp(c){return c.node.childCount>0}function yF(c){return M0(c)===void 0&&!Vp(c)}function s9(c,e){i2(c.node.children,(t,a)=>{e(new Yn(t,c,a))})}function Lp(c,e,t,a){t&&!a&&e(c),s9(c,n=>{Lp(n,e,!0,a)}),t&&a&&e(c)}function _F(c,e,t){let a=t?c:c.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function p5(c){return new M1(c.parent===null?c.name:p5(c.parent)+"/"+c.name)}function Dt(c){c.parent!==null&&bF(c.parent,c.name,c)}function bF(c,e,t){const a=yF(t),n=V3(c.node.children,e);a&&n?(delete c.node.children[e],c.node.childCount--,Dt(c)):!a&&!n&&(c.node.children[e]=t.node,c.node.childCount++,Dt(c))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF=/[\[\].#$\/\u0000-\u001F\u007F]/,wF=/[\[\].#$\u0000-\u001F\u007F]/,vc=10*1024*1024,Xn=function(c){return typeof c=="string"&&c.length!==0&&!xF.test(c)},yp=function(c){return typeof c=="string"&&c.length!==0&&!wF.test(c)},NF=function(c){return c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),yp(c)},SF=function(c){return c===null||typeof c=="string"||typeof c=="number"&&!yn(c)||c&&typeof c=="object"&&V3(c,".sv")},kF=function(c,e,t,a){a&&e===void 0||i9(Ae(c,"value"),e,t)},i9=function(c,e,t){const a=t instanceof M1?new GD(t,c):t;if(e===void 0)throw new Error(c+"contains undefined "+T4(a));if(typeof e=="function")throw new Error(c+"contains a function "+T4(a)+" with contents = "+e.toString());if(yn(e))throw new Error(c+"contains "+e.toString()+" "+T4(a));if(typeof e=="string"&&e.length>vc/3&&Te(e)>vc)throw new Error(c+"contains a string greater than "+vc+" utf8 bytes "+T4(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let n=!1,r=!1;if(i2(e,(s,i)=>{if(s===".value")n=!0;else if(s!==".priority"&&s!==".sv"&&(r=!0,!Xn(s)))throw new Error(c+" contains an invalid key ("+s+") "+T4(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KD(a,s),i9(c,i,a),YD(a)}),n&&r)throw new Error(c+' contains ".value" child '+T4(a)+" in addition to actual children.")}},AF=function(c,e){let t,a;for(t=0;t<e.length;t++){a=e[t];const r=T8(a);for(let s=0;s<r.length;s++)if(!(r[s]===".priority"&&s===r.length-1)){if(!Xn(r[s]))throw new Error(c+"contains an invalid key ("+r[s]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jD);let n=null;for(t=0;t<e.length;t++){if(a=e[t],n!==null&&F2(n,a))throw new Error(c+"contains a path "+n.toString()+" that is ancestor of another path "+a.toString());n=a}},TF=function(c,e,t,a){if(a&&e===void 0)return;const n=Ae(c,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(n+" must be an object containing the children to replace.");const r=[];i2(e,(s,i)=>{const o=new M1(s);if(i9(n,i,E1(t,o)),Nn(o)===".priority"&&!SF(i))throw new Error(n+"contains an invalid value for '"+o.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(o)}),AF(n,r)},_p=function(c,e,t,a){if(!(a&&t===void 0)&&!yp(t))throw new Error(Ae(c,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},EF=function(c,e,t,a){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_p(c,e,t,a)},bp=function(c,e){if(s1(e)===".info")throw new Error(c+" failed = Can't modify data under /.info/")},PF=function(c,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xn(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!NF(t))throw new Error(Ae(c,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function o9(c,e){let t=null;for(let a=0;a<e.length;a++){const n=e[a],r=n.getPath();t!==null&&!Sn(r,t.path)&&(c.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(n)}t&&c.eventLists_.push(t)}function xp(c,e,t){o9(c,t),wp(c,a=>Sn(a,e))}function $2(c,e,t){o9(c,t),wp(c,a=>F2(a,e)||F2(e,a))}function wp(c,e){c.recursionDepth_++;let t=!0;for(let a=0;a<c.eventLists_.length;a++){const n=c.eventLists_[a];if(n){const r=n.path;e(r)?(IF(c.eventLists_[a]),c.eventLists_[a]=null):t=!1}}t&&(c.eventLists_=[]),c.recursionDepth_--}function IF(c){for(let e=0;e<c.events.length;e++){const t=c.events[e];if(t!==null){c.events[e]=null;const a=t.getEventRunner();Z4&&r2("event: "+t.toString()),C0(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF="repo_interrupt",OF=25;class FF{constructor(e,t,a,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=a,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ee(),this.transactionQueueTree_=new Yn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BF(c,e,t){if(c.stats_=xn(c.repoInfo_),c.forceRestClient_||zD())c.server_=new J7(c.repoInfo_,(a,n,r,s)=>{Hl(c,a,n,r,s)},c.authTokenProvider_,c.appCheckProvider_),setTimeout(()=>Ml(c,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{G1(t)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}c.persistentConnection_=new T3(c.repoInfo_,e,(a,n,r,s)=>{Hl(c,a,n,r,s)},a=>{Ml(c,a)},a=>{qF(c,a)},c.authTokenProvider_,c.appCheckProvider_,t),c.server_=c.persistentConnection_}c.authTokenProvider_.addTokenChangeListener(a=>{c.server_.refreshAuthToken(a)}),c.appCheckProvider_.addTokenChangeListener(a=>{c.server_.refreshAppCheckToken(a.token)}),c.statsReporter_=VD(c.repoInfo_,()=>new MO(c.stats_,c.server_)),c.infoData_=new vO,c.infoSyncTree_=new gl({startListening:(a,n,r,s)=>{let i=[];const o=c.infoData_.getNode(a._path);return o.isEmpty()||(i=m5(c.infoSyncTree_,a._path,o),setTimeout(()=>{s("ok")},0)),i},stopListening:()=>{}}),Qn(c,"connected",!1),c.serverSyncTree_=new gl({startListening:(a,n,r,s)=>(c.server_.listen(a,r,n,(i,o)=>{const l=s(i,o);$2(c.eventQueue_,a._path,l)}),[]),stopListening:(a,n)=>{c.server_.unlisten(a,n)}})}function UF(c){const t=c.infoData_.getNode(new M1(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function l9(c){return MF({timestamp:UF(c)})}function Hl(c,e,t,a,n){c.dataUpdateCount++;const r=new M1(e);t=c.interceptServerDataCallback_?c.interceptServerDataCallback_(e,t):t;let s=[];if(n)if(a){const o=A7(t,l=>j1(l));s=pF(c.serverSyncTree_,r,o,n)}else{const o=j1(t);s=pp(c.serverSyncTree_,r,o,n)}else if(a){const o=A7(t,l=>j1(l));s=uF(c.serverSyncTree_,r,o)}else{const o=j1(t);s=m5(c.serverSyncTree_,r,o)}let i=r;s.length>0&&(i=n0(c,r)),$2(c.eventQueue_,i,s)}function Ml(c,e){Qn(c,"connected",e),e===!1&&GF(c)}function qF(c,e){i2(e,(t,a)=>{Qn(c,t,a)})}function Qn(c,e,t){const a=new M1("/.info/"+e),n=j1(t);c.infoData_.updateSnapshot(a,n);const r=m5(c.infoSyncTree_,a,n);$2(c.eventQueue_,a,r)}function Jn(c){return c.nextWriteId_++}function $F(c,e,t){const a=vF(c.serverSyncTree_,e);return a!=null?Promise.resolve(a):c.server_.get(e).then(n=>{const r=j1(n).withIndex(e._queryParams.getIndex());It(c.serverSyncTree_,e,t,!0);let s;if(e._queryParams.loadsAllData())s=m5(c.serverSyncTree_,e._path,r);else{const i=D8(c.serverSyncTree_,e);s=pp(c.serverSyncTree_,e._path,r,i)}return $2(c.eventQueue_,e._path,s),oe(c.serverSyncTree_,e,t,null,!0),r},n=>(v5(c,"get for query "+G1(e)+" failed: "+n),Promise.reject(new Error(n))))}function WF(c,e,t,a,n){v5(c,"set",{path:e.toString(),value:t,priority:a});const r=l9(c),s=j1(t,a),i=Un(c.serverSyncTree_,e),o=Hp(s,i,r),l=Jn(c),f=mp(c.serverSyncTree_,e,o,l,!0);o9(c.eventQueue_,f),c.server_.put(e.toString(),s.val(!0),(u,d)=>{const v=u==="ok";v||C2("set at "+e+" failed: "+u);const H=o4(c.serverSyncTree_,l,!v);$2(c.eventQueue_,e,H),Ft(c,n,u,d)});const h=cr(c,e);n0(c,h),$2(c.eventQueue_,h,[])}function jF(c,e,t,a){v5(c,"update",{path:e.toString(),value:t});let n=!0;const r=l9(c),s={};if(i2(t,(i,o)=>{n=!1,s[i]=Cp(E1(e,i),j1(o),c.serverSyncTree_,r)}),n)r2("update() called with empty data.  Don't do anything."),Ft(c,a,"ok",void 0);else{const i=Jn(c),o=hF(c.serverSyncTree_,e,s,i);o9(c.eventQueue_,o),c.server_.merge(e.toString(),t,(l,f)=>{const h=l==="ok";h||C2("update at "+e+" failed: "+l);const u=o4(c.serverSyncTree_,i,!h),d=u.length>0?n0(c,e):e;$2(c.eventQueue_,d,u),Ft(c,a,l,f)}),i2(t,l=>{const f=cr(c,E1(e,l));n0(c,f)}),$2(c.eventQueue_,e,[])}}function GF(c){v5(c,"onDisconnectEvents");const e=l9(c),t=ee();kt(c.onDisconnect_,m1(),(n,r)=>{const s=Cp(n,r,c.serverSyncTree_,e);Jm(t,n,s)});let a=[];kt(t,m1(),(n,r)=>{a=a.concat(m5(c.serverSyncTree_,n,r));const s=cr(c,n);n0(c,s)}),c.onDisconnect_=ee(),$2(c.eventQueue_,m1(),a)}function KF(c,e,t){let a;s1(e._path)===".info"?a=It(c.infoSyncTree_,e,t):a=It(c.serverSyncTree_,e,t),xp(c.eventQueue_,e._path,a)}function Ot(c,e,t){let a;s1(e._path)===".info"?a=oe(c.infoSyncTree_,e,t):a=oe(c.serverSyncTree_,e,t),xp(c.eventQueue_,e._path,a)}function YF(c){c.persistentConnection_&&c.persistentConnection_.interrupt(DF)}function v5(c,...e){let t="";c.persistentConnection_&&(t=c.persistentConnection_.id+":"),r2(t,...e)}function Ft(c,e,t,a){e&&C0(()=>{if(t==="ok")e(null);else{const n=(t||"error").toUpperCase();let r=n;a&&(r+=": "+a);const s=new Error(r);s.code=n,e(s)}})}function Np(c,e,t){return Un(c.serverSyncTree_,e,t)||e1.EMPTY_NODE}function er(c,e=c.transactionQueueTree_){if(e||f9(c,e),M0(e)){const t=kp(c,e);P(t.length>0,"Sending zero length transaction queue"),t.every(n=>n.status===0)&&ZF(c,p5(e),t)}else Vp(e)&&s9(e,t=>{er(c,t)})}function ZF(c,e,t){const a=t.map(l=>l.currentWriteId),n=Np(c,e,a);let r=n;const s=n.hash();for(let l=0;l<t.length;l++){const f=t[l];P(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const h=z2(e,f.path);r=r.updateChild(h,f.currentOutputSnapshotRaw)}const i=r.val(!0),o=e;c.server_.put(o.toString(),i,l=>{v5(c,"transaction put response",{path:o.toString(),status:l});let f=[];if(l==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,f=f.concat(o4(c.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();f9(c,Zn(c.transactionQueueTree_,e)),er(c,c.transactionQueueTree_),$2(c.eventQueue_,e,f);for(let u=0;u<h.length;u++)C0(h[u])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{C2("transaction at "+o.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}n0(c,e)}},s)}function n0(c,e){const t=Sp(c,e),a=p5(t),n=kp(c,t);return XF(c,n,a),a}function XF(c,e,t){if(e.length===0)return;const a=[];let n=[];const s=e.filter(i=>i.status===0).map(i=>i.currentWriteId);for(let i=0;i<e.length;i++){const o=e[i],l=z2(t,o.path);let f=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)f=!0,h=o.abortReason,n=n.concat(o4(c.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=OF)f=!0,h="maxretry",n=n.concat(o4(c.serverSyncTree_,o.currentWriteId,!0));else{const u=Np(c,o.path,s);o.currentInputSnapshot=u;const d=e[i].update(u.val());if(d!==void 0){i9("transaction failed: Data returned ",d,o.path);let v=j1(d);typeof d=="object"&&d!=null&&V3(d,".priority")||(v=v.updatePriority(u.getPriority()));const y=o.currentWriteId,M=l9(c),C=Hp(v,u,M);o.currentOutputSnapshotRaw=v,o.currentOutputSnapshotResolved=C,o.currentWriteId=Jn(c),s.splice(s.indexOf(y),1),n=n.concat(mp(c.serverSyncTree_,o.path,C,o.currentWriteId,o.applyLocally)),n=n.concat(o4(c.serverSyncTree_,y,!0))}else f=!0,h="nodata",n=n.concat(o4(c.serverSyncTree_,o.currentWriteId,!0))}$2(c.eventQueue_,t,n),n=[],f&&(e[i].status=2,function(u){setTimeout(u,Math.floor(0))}(e[i].unwatcher),e[i].onComplete&&(h==="nodata"?a.push(()=>e[i].onComplete(null,!1,e[i].currentInputSnapshot)):a.push(()=>e[i].onComplete(new Error(h),!1,null))))}f9(c,c.transactionQueueTree_);for(let i=0;i<a.length;i++)C0(a[i]);er(c,c.transactionQueueTree_)}function Sp(c,e){let t,a=c.transactionQueueTree_;for(t=s1(e);t!==null&&M0(a)===void 0;)a=Zn(a,t),e=y1(e),t=s1(e);return a}function kp(c,e){const t=[];return Ap(c,e,t),t.sort((a,n)=>a.order-n.order),t}function Ap(c,e,t){const a=M0(e);if(a)for(let n=0;n<a.length;n++)t.push(a[n]);s9(e,n=>{Ap(c,n,t)})}function f9(c,e){const t=M0(e);if(t){let a=0;for(let n=0;n<t.length;n++)t[n].status!==2&&(t[a]=t[n],a++);t.length=a,Mp(e,t.length>0?t:void 0)}s9(e,a=>{f9(c,a)})}function cr(c,e){const t=p5(Sp(c,e)),a=Zn(c.transactionQueueTree_,e);return _F(a,n=>{zc(c,n)}),zc(c,a),Lp(a,n=>{zc(c,n)}),t}function zc(c,e){const t=M0(e);if(t){const a=[];let n=[],r=-1;for(let s=0;s<t.length;s++)t[s].status===3||(t[s].status===1?(P(r===s-1,"All SENT items should be at beginning of queue."),r=s,t[s].status=3,t[s].abortReason="set"):(P(t[s].status===0,"Unexpected transaction status in abort"),t[s].unwatcher(),n=n.concat(o4(c.serverSyncTree_,t[s].currentWriteId,!0)),t[s].onComplete&&a.push(t[s].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mp(e,void 0):t.length=r+1,$2(c.eventQueue_,p5(e),n);for(let s=0;s<a.length;s++)C0(a[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QF(c){let e="";const t=c.split("/");for(let a=0;a<t.length;a++)if(t[a].length>0){let n=t[a];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch{}e+="/"+n}return e}function JF(c){const e={};c.charAt(0)==="?"&&(c=c.substring(1));for(const t of c.split("&")){if(t.length===0)continue;const a=t.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):C2(`Invalid query segment '${t}' in query '${c}'`)}return e}const Vl=function(c,e){const t=eB(c),a=t.namespace;t.domain==="firebase.com"&&I3(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&t.domain!=="localhost"&&I3("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||oD();const n=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Rm(t.host,t.secure,a,n,e,"",a!==t.subdomain),path:new M1(t.pathString)}},eB=function(c){let e="",t="",a="",n="",r="",s=!0,i="https",o=443;if(typeof c=="string"){let l=c.indexOf("//");l>=0&&(i=c.substring(0,l-1),c=c.substring(l+2));let f=c.indexOf("/");f===-1&&(f=c.length);let h=c.indexOf("?");h===-1&&(h=c.length),e=c.substring(0,Math.min(f,h)),f<h&&(n=QF(c.substring(f,h)));const u=JF(c.substring(Math.min(c.length,h)));l=e.indexOf(":"),l>=0?(s=i==="https"||i==="wss",o=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const v=e.indexOf(".");a=e.substring(0,v).toLowerCase(),t=e.substring(v+1),r=a}"ns"in u&&(r=u.ns)}return{host:e,port:o,domain:t,subdomain:a,secure:s,scheme:i,pathString:n,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t,a,n){this.eventType=e,this.eventRegistration=t,this.snapshot=a,this.prevName=n}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+G1(this.snapshot.exportVal())}}class Ep{constructor(e,t,a){this.eventRegistration=e,this.error=t,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,a,n){this._repo=e,this._path=t,this._queryParams=a,this._orderByCalled=n}get key(){return o1(this._path)?null:Nn(this._path)}get ref(){return new L3(this._repo,this._path)}get _queryIdentifier(){const e=ol(this._queryParams),t=_n(e);return t==="{}"?"default":t}get _queryObject(){return ol(this._queryParams)}isEqual(e){if(e=$1(e),!(e instanceof ar))return!1;const t=this._repo===e._repo,a=Sn(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&a&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+WD(this._path)}}class L3 extends ar{constructor(e,t){super(e,t,new En,!1)}get parent(){const e=Wm(this._path);return e===null?null:new L3(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class r0{constructor(e,t,a){this._node=e,this.ref=t,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new M1(e),a=le(this.ref,e);return new r0(this._node.getChild(t),a,R1)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,n)=>e(new r0(n,le(this.ref,a),R1)))}hasChild(e){const t=new M1(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function QH1(c,e){return c=$1(c),c._checkNotDeleted("ref"),e!==void 0?le(c._root,e):c._root}function le(c,e){return c=$1(c),s1(c._path)===null?EF("child","path",e,!1):_p("child","path",e,!1),new L3(c._repo,E1(c._path,e))}function JH1(c){return bp("remove",c._path),cB(c,null)}function cB(c,e){c=$1(c),bp("set",c._path),kF("set",e,c._path,!1);const t=new e6;return WF(c._repo,c._path,e,null,t.wrapCallback(()=>{})),t.promise}function eM1(c,e){TF("update",e,c._path,!1);const t=new e6;return jF(c._repo,c._path,e,t.wrapCallback(()=>{})),t.promise}function cM1(c){c=$1(c);const e=new tr(()=>{}),t=new z5(e);return $F(c._repo,c,t).then(a=>new r0(a,new L3(c._repo,c._path),c._queryParams.getIndex()))}class z5{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const a=t._queryParams.getIndex();return new Tp("value",this,new r0(e.snapshotNode,new L3(t._repo,t._path),a))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ep(this,e,t):null}matches(e){return e instanceof z5?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class h9{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ep(this,e,t):null}createEvent(e,t){P(e.childName!=null,"Child events should have a childName.");const a=le(new L3(t._repo,t._path),e.childName),n=t._queryParams.getIndex();return new Tp(e.type,this,new r0(e.snapshotNode,a,n),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof h9?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function tB(c,e,t,a,n){let r;if(typeof a=="object"&&(r=void 0,n=a),typeof a=="function"&&(r=a),n&&n.onlyOnce){const o=t,l=(f,h)=>{Ot(c._repo,c,i),o(f,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const s=new tr(t,r||void 0),i=e==="value"?new z5(s):new h9(e,s);return KF(c._repo,c,i),()=>Ot(c._repo,c,i)}function tM1(c,e,t,a){return tB(c,"value",e,t,a)}function aM1(c,e,t){let a=null;const n=t?new tr(t):null;e==="value"?a=new z5(n):e&&(a=new h9(e,n)),Ot(c._repo,c,a)}aF(L3);oF(L3);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aB="FIREBASE_DATABASE_EMULATOR_HOST",Bt={};let nB=!1;function rB(c,e,t,a){c.repoInfo_=new Rm(`${e}:${t}`,!1,c.repoInfo_.namespace,c.repoInfo_.webSocketOnly,c.repoInfo_.nodeAdmin,c.repoInfo_.persistenceKey,c.repoInfo_.includeNamespaceInQueryParams,!0),a&&(c.authTokenProvider_=a)}function sB(c,e,t,a,n){let r=a||c.options.databaseURL;r===void 0&&(c.options.projectId||I3("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),r2("Using default host for project ",c.options.projectId),r=`${c.options.projectId}-default-rtdb.firebaseio.com`);let s=Vl(r,n),i=s.repoInfo,o,l;typeof process<"u"&&process.env&&(l=process.env[aB]),l?(o=!0,r=`http://${l}?ns=${i.namespace}`,s=Vl(r,n),i=s.repoInfo):o=!s.repoInfo.secure;const f=n&&o?new F6(F6.OWNER):new CD(c.name,c.options,e);PF("Invalid Firebase Database URL",s),o1(s.path)||I3("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oB(i,c,f,new gD(c.name,t));return new lB(h,c)}function iB(c,e){const t=Bt[e];(!t||t[c.key]!==c)&&I3(`Database ${e}(${c.repoInfo_}) has already been deleted.`),YF(c),delete t[c.key]}function oB(c,e,t,a){let n=Bt[e.name];n||(n={},Bt[e.name]=n);let r=n[c.toURLString()];return r&&I3("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new FF(c,nB,t,a),n[c.toURLString()]=r,r}class lB{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new L3(this._repo,m1())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iB(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&I3("Cannot call "+e+" on a deleted database.")}}function nM1(c=Pe(),e){const t=Ee(c,"database").getImmediate({identifier:e});if(!t._instanceStarted){const a=eu("database");a&&fB(t,...a)}return t}function fB(c,e,t,a={}){c=$1(c),c._checkNotDeleted("useEmulator"),c._instanceStarted&&I3("Cannot call useEmulator() after instance has already been initialized.");const n=c._repoInternal;let r;if(n.repoInfo_.nodeAdmin)a.mockUserToken&&I3('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new F6(F6.OWNER);else if(a.mockUserToken){const s=typeof a.mockUserToken=="string"?a.mockUserToken:au(a.mockUserToken,c.app.options.projectId);r=new F6(s)}rB(n,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hB(c){aD(y4),C3(new e3("database",(e,{instanceIdentifier:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sB(a,n,r,t)},"PUBLIC").setMultipleInstances(!0)),T2(Wo,jo,c),T2(Wo,jo,"esm2017")}T3.prototype.simpleListen=function(c,e){this.sendRequest("q",{p:c},e)};T3.prototype.echo=function(c,e){this.sendRequest("echo",{d:c},e)};hB();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firebasestorage.googleapis.com",Rp="storageBucket",uB=2*60*1e3,dB=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1 extends M3{constructor(e,t,a=0){super(gc(e),`Firebase Storage: ${t} (${gc(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,O1.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var D1;(function(c){c.UNKNOWN="unknown",c.OBJECT_NOT_FOUND="object-not-found",c.BUCKET_NOT_FOUND="bucket-not-found",c.PROJECT_NOT_FOUND="project-not-found",c.QUOTA_EXCEEDED="quota-exceeded",c.UNAUTHENTICATED="unauthenticated",c.UNAUTHORIZED="unauthorized",c.UNAUTHORIZED_APP="unauthorized-app",c.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",c.INVALID_CHECKSUM="invalid-checksum",c.CANCELED="canceled",c.INVALID_EVENT_NAME="invalid-event-name",c.INVALID_URL="invalid-url",c.INVALID_DEFAULT_BUCKET="invalid-default-bucket",c.NO_DEFAULT_BUCKET="no-default-bucket",c.CANNOT_SLICE_BLOB="cannot-slice-blob",c.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",c.NO_DOWNLOAD_URL="no-download-url",c.INVALID_ARGUMENT="invalid-argument",c.INVALID_ARGUMENT_COUNT="invalid-argument-count",c.APP_DELETED="app-deleted",c.INVALID_ROOT_OPERATION="invalid-root-operation",c.INVALID_FORMAT="invalid-format",c.INTERNAL_ERROR="internal-error",c.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(D1||(D1={}));function gc(c){return"storage/"+c}function nr(){const c="An unknown error occurred, please check the error payload for server response.";return new O1(D1.UNKNOWN,c)}function mB(c){return new O1(D1.OBJECT_NOT_FOUND,"Object '"+c+"' does not exist.")}function pB(c){return new O1(D1.QUOTA_EXCEEDED,"Quota for bucket '"+c+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vB(){const c="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new O1(D1.UNAUTHENTICATED,c)}function zB(){return new O1(D1.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gB(c){return new O1(D1.UNAUTHORIZED,"User does not have permission to access '"+c+"'.")}function CB(){return new O1(D1.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HB(){return new O1(D1.CANCELED,"User canceled the upload/download.")}function MB(c){return new O1(D1.INVALID_URL,"Invalid URL '"+c+"'.")}function VB(c){return new O1(D1.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+c+"'.")}function LB(){return new O1(D1.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rp+"' property when initializing the app?")}function yB(){return new O1(D1.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _B(){return new O1(D1.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bB(c){return new O1(D1.UNSUPPORTED_ENVIRONMENT,`${c} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ut(c){return new O1(D1.INVALID_ARGUMENT,c)}function Ip(){return new O1(D1.APP_DELETED,"The Firebase app was deleted.")}function xB(c){return new O1(D1.INVALID_ROOT_OPERATION,"The operation '"+c+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function s8(c,e){return new O1(D1.INVALID_FORMAT,"String does not match format '"+c+"': "+e)}function T0(c){throw new O1(D1.INTERNAL_ERROR,"Internal error: "+c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let a;try{a=A2.makeFromUrl(e,t)}catch{return new A2(e,"")}if(a.path==="")return a;throw VB(e)}static makeFromUrl(e,t){let a=null;const n="([A-Za-z0-9.\\-_]+)";function r(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const s="(/(.*))?$",i=new RegExp("^gs://"+n+s,"i"),o={bucket:1,path:3};function l(m){m.path_=decodeURIComponent(m.path)}const f="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${f}/b/${n}/o${u}`,"i"),v={bucket:1,path:3},H=t===Pp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",M=new RegExp(`^https?://${H}/${n}/${y}`,"i"),z=[{regex:i,indices:o,postModify:r},{regex:d,indices:v,postModify:l},{regex:M,indices:{bucket:1,path:2},postModify:l}];for(let m=0;m<z.length;m++){const L=z[m],N=L.regex.exec(e);if(N){const S=N[L.indices.bucket];let _=N[L.indices.path];_||(_=""),a=new A2(S,_),L.postModify(a);break}}if(a==null)throw MB(e);return a}}class wB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NB(c,e,t){let a=1,n=null,r=null,s=!1,i=0;function o(){return i===2}let l=!1;function f(...y){l||(l=!0,e.apply(null,y))}function h(y){n=setTimeout(()=>{n=null,c(d,o())},y)}function u(){r&&clearTimeout(r)}function d(y,...M){if(l){u();return}if(y){u(),f.call(null,y,...M);return}if(o()||s){u(),f.call(null,y,...M);return}a<64&&(a*=2);let z;i===1?(i=2,z=0):z=(a+Math.random())*1e3,h(z)}let v=!1;function H(y){v||(v=!0,u(),!l&&(n!==null?(y||(i=2),clearTimeout(n),h(0)):y||(i=1)))}return h(0),r=setTimeout(()=>{s=!0,H(!0)},t),H}function SB(c){c(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kB(c){return c!==void 0}function AB(c){return typeof c=="object"&&!Array.isArray(c)}function rr(c){return typeof c=="string"||c instanceof String}function Ll(c){return sr()&&c instanceof Blob}function sr(){return typeof Blob<"u"}function yl(c,e,t,a){if(a<e)throw Ut(`Invalid value for '${c}'. Expected ${e} or greater.`);if(a>t)throw Ut(`Invalid value for '${c}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u9(c,e,t){let a=e;return t==null&&(a=`https://${e}`),`${t}://${a}/v0${c}`}function Dp(c){const e=encodeURIComponent;let t="?";for(const a in c)if(c.hasOwnProperty(a)){const n=e(a)+"="+e(c[a]);t=t+n+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X4;(function(c){c[c.NO_ERROR=0]="NO_ERROR",c[c.NETWORK_ERROR=1]="NETWORK_ERROR",c[c.ABORT=2]="ABORT"})(X4||(X4={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TB(c,e){const t=c>=500&&c<600,n=[408,429].indexOf(c)!==-1,r=e.indexOf(c)!==-1;return t||n||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EB{constructor(e,t,a,n,r,s,i,o,l,f,h,u=!0){this.url_=e,this.method_=t,this.headers_=a,this.body_=n,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=h,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,v)=>{this.resolve_=d,this.reject_=v,this.start_()})}start_(){const e=(a,n)=>{if(n){a(!1,new Y5(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const s=i=>{const o=i.loaded,l=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&r.addUploadProgressListener(s),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(s),this.pendingConnection_=null;const i=r.getErrorCode()===X4.NO_ERROR,o=r.getStatus();if(!i||TB(o,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===X4.ABORT;a(!1,new Y5(!1,null,f));return}const l=this.successCodes_.indexOf(o)!==-1;a(!0,new Y5(l,r))})},t=(a,n)=>{const r=this.resolve_,s=this.reject_,i=n.connection;if(n.wasSuccessCode)try{const o=this.callback_(i,i.getResponse());kB(o)?r(o):r()}catch(o){s(o)}else if(i!==null){const o=nr();o.serverResponse=i.getErrorText(),this.errorCallback_?s(this.errorCallback_(i,o)):s(o)}else if(n.canceled){const o=this.appDelete_?Ip():HB();s(o)}else{const o=CB();s(o)}};this.canceled_?t(!1,new Y5(!1,null,!0)):this.backoffId_=NB(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Y5{constructor(e,t,a){this.wasSuccessCode=e,this.connection=t,this.canceled=!!a}}function PB(c,e){e!==null&&e.length>0&&(c.Authorization="Firebase "+e)}function RB(c,e){c["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function IB(c,e){e&&(c["X-Firebase-GMPID"]=e)}function DB(c,e){e!==null&&(c["X-Firebase-AppCheck"]=e)}function OB(c,e,t,a,n,r,s=!0){const i=Dp(c.urlParams),o=c.url+i,l=Object.assign({},c.headers);return IB(l,e),PB(l,t),RB(l,r),DB(l,a),new EB(o,c.method,l,c.body,c.successCodes,c.additionalRetryCodes,c.handler,c.errorHandler,c.timeout,c.progressCallback,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BB(...c){const e=FB();if(e!==void 0){const t=new e;for(let a=0;a<c.length;a++)t.append(c[a]);return t.getBlob()}else{if(sr())return new Blob(c);throw new O1(D1.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function UB(c,e,t){return c.webkitSlice?c.webkitSlice(e,t):c.mozSlice?c.mozSlice(e,t):c.slice?c.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qB(c){if(typeof atob>"u")throw bB("base-64");return atob(c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cc{constructor(e,t){this.data=e,this.contentType=t||null}}function $B(c,e){switch(c){case d3.RAW:return new Cc(Op(e));case d3.BASE64:case d3.BASE64URL:return new Cc(Fp(c,e));case d3.DATA_URL:return new Cc(jB(e),GB(e))}throw nr()}function Op(c){const e=[];for(let t=0;t<c.length;t++){let a=c.charCodeAt(t);if(a<=127)e.push(a);else if(a<=2047)e.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(t<c.length-1&&(c.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=a,s=c.charCodeAt(++t);a=65536|(r&1023)<<10|s&1023,e.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?e.push(239,191,189):e.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(e)}function WB(c){let e;try{e=decodeURIComponent(c)}catch{throw s8(d3.DATA_URL,"Malformed data URL.")}return Op(e)}function Fp(c,e){switch(c){case d3.BASE64:{const n=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(n||r)throw s8(c,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case d3.BASE64URL:{const n=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(n||r)throw s8(c,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=qB(e)}catch(n){throw n.message.includes("polyfill")?n:s8(c,"Invalid character found")}const a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n);return a}class Bp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw s8(d3.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=t[1]||null;a!=null&&(this.base64=KB(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=e.substring(e.indexOf(",")+1)}}function jB(c){const e=new Bp(c);return e.base64?Fp(d3.BASE64,e.rest):WB(e.rest)}function GB(c){return new Bp(c).contentType}function KB(c,e){return c.length>=e.length?c.substring(c.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,t){let a=0,n="";Ll(e)?(this.data_=e,a=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),a=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),a=e.length),this.size_=a,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ll(this.data_)){const a=this.data_,n=UB(a,e,t);return n===null?null:new i4(n)}else{const a=new Uint8Array(this.data_.buffer,e,t-e);return new i4(a,!0)}}static getBlob(...e){if(sr()){const t=e.map(a=>a instanceof i4?a.data_:a);return new i4(BB.apply(null,t))}else{const t=e.map(s=>rr(s)?$B(d3.RAW,s).data:s.data_);let a=0;t.forEach(s=>{a+=s.byteLength});const n=new Uint8Array(a);let r=0;return t.forEach(s=>{for(let i=0;i<s.length;i++)n[r++]=s[i]}),new i4(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(c){let e;try{e=JSON.parse(c)}catch{return null}return AB(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YB(c){if(c.length===0)return null;const e=c.lastIndexOf("/");return e===-1?"":c.slice(0,e)}function ZB(c,e){const t=e.split("/").filter(a=>a.length>0).join("/");return c.length===0?t:c+"/"+t}function qp(c){const e=c.lastIndexOf("/",c.length-2);return e===-1?c:c.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XB(c,e){return e}class d2{constructor(e,t,a,n){this.server=e,this.local=t||e,this.writable=!!a,this.xform=n||XB}}let Z5=null;function QB(c){return!rr(c)||c.length<2?c:qp(c)}function $p(){if(Z5)return Z5;const c=[];c.push(new d2("bucket")),c.push(new d2("generation")),c.push(new d2("metageneration")),c.push(new d2("name","fullPath",!0));function e(r,s){return QB(s)}const t=new d2("name");t.xform=e,c.push(t);function a(r,s){return s!==void 0?Number(s):s}const n=new d2("size");return n.xform=a,c.push(n),c.push(new d2("timeCreated")),c.push(new d2("updated")),c.push(new d2("md5Hash",null,!0)),c.push(new d2("cacheControl",null,!0)),c.push(new d2("contentDisposition",null,!0)),c.push(new d2("contentEncoding",null,!0)),c.push(new d2("contentLanguage",null,!0)),c.push(new d2("contentType",null,!0)),c.push(new d2("metadata","customMetadata",!0)),Z5=c,Z5}function JB(c,e){function t(){const a=c.bucket,n=c.fullPath,r=new A2(a,n);return e._makeStorageReference(r)}Object.defineProperty(c,"ref",{get:t})}function eU(c,e,t){const a={};a.type="file";const n=t.length;for(let r=0;r<n;r++){const s=t[r];a[s.local]=s.xform(a,e[s.server])}return JB(a,c),a}function Wp(c,e,t){const a=Up(e);return a===null?null:eU(c,a,t)}function cU(c,e,t,a){const n=Up(e);if(n===null||!rr(n.downloadTokens))return null;const r=n.downloadTokens;if(r.length===0)return null;const s=encodeURIComponent;return r.split(",").map(l=>{const f=c.bucket,h=c.fullPath,u="/b/"+s(f)+"/o/"+s(h),d=u9(u,t,a),v=Dp({alt:"media",token:l});return d+v})[0]}function tU(c,e){const t={},a=e.length;for(let n=0;n<a;n++){const r=e[n];r.writable&&(t[r.server]=c[r.local])}return JSON.stringify(t)}class ir{constructor(e,t,a,n){this.url=e,this.method=t,this.handler=a,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(c){if(!c)throw nr()}function aU(c,e){function t(a,n){const r=Wp(c,n,e);return jp(r!==null),r}return t}function nU(c,e){function t(a,n){const r=Wp(c,n,e);return jp(r!==null),cU(r,n,c.host,c._protocol)}return t}function Gp(c){function e(t,a){let n;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?n=zB():n=vB():t.getStatus()===402?n=pB(c.bucket):t.getStatus()===403?n=gB(c.path):n=a,n.status=t.getStatus(),n.serverResponse=a.serverResponse,n}return e}function Kp(c){const e=Gp(c);function t(a,n){let r=e(a,n);return a.getStatus()===404&&(r=mB(c.path)),r.serverResponse=n.serverResponse,r}return t}function rU(c,e,t){const a=e.fullServerUrl(),n=u9(a,c.host,c._protocol),r="GET",s=c.maxOperationRetryTime,i=new ir(n,r,nU(c,t),s);return i.errorHandler=Kp(e),i}function sU(c,e){const t=e.fullServerUrl(),a=u9(t,c.host,c._protocol),n="DELETE",r=c.maxOperationRetryTime;function s(o,l){}const i=new ir(a,n,s,r);return i.successCodes=[200,204],i.errorHandler=Kp(e),i}function iU(c,e){return c&&c.contentType||e&&e.type()||"application/octet-stream"}function oU(c,e,t){const a=Object.assign({},t);return a.fullPath=c.path,a.size=e.size(),a.contentType||(a.contentType=iU(null,e)),a}function lU(c,e,t,a,n){const r=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function i(){let z="";for(let m=0;m<2;m++)z=z+Math.random().toString().slice(2);return z}const o=i();s["Content-Type"]="multipart/related; boundary="+o;const l=oU(e,a,n),f=tU(l,t),h="--"+o+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+o+`\r
Content-Type: `+l.contentType+`\r
\r
`,u=`\r
--`+o+"--",d=i4.getBlob(h,a,u);if(d===null)throw yB();const v={name:l.fullPath},H=u9(r,c.host,c._protocol),y="POST",M=c.maxUploadRetryTime,C=new ir(H,y,aU(c,t),M);return C.urlParams=v,C.headers=s,C.body=d.uploadData(),C.errorHandler=Gp(e),C}class fU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=X4.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=X4.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=X4.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,a,n){if(this.sent_)throw T0("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),n!==void 0)for(const r in n)n.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,n[r].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw T0("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw T0("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw T0("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw T0("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hU extends fU{initXhr(){this.xhr_.responseType="text"}}function or(){return new hU}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(e,t){this._service=e,t instanceof A2?this._location=t:this._location=A2.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new i6(e,t)}get root(){const e=new A2(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qp(this._location.path)}get storage(){return this._service}get parent(){const e=YB(this._location.path);if(e===null)return null;const t=new A2(this._location.bucket,e);return new i6(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw xB(e)}}function uU(c,e,t){c._throwIfRoot("uploadBytes");const a=lU(c.storage,c._location,$p(),new i4(e,!0),t);return c.storage.makeRequestWithTokens(a,or).then(n=>({metadata:n,ref:c}))}function dU(c){c._throwIfRoot("getDownloadURL");const e=rU(c.storage,c._location,$p());return c.storage.makeRequestWithTokens(e,or).then(t=>{if(t===null)throw _B();return t})}function mU(c){c._throwIfRoot("deleteObject");const e=sU(c.storage,c._location);return c.storage.makeRequestWithTokens(e,or)}function pU(c,e){const t=ZB(c._location.path,e),a=new A2(c._location.bucket,t);return new i6(c.storage,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(c){return/^[A-Za-z]+:\/\//.test(c)}function zU(c,e){return new i6(c,e)}function Yp(c,e){if(c instanceof lr){const t=c;if(t._bucket==null)throw LB();const a=new i6(t,t._bucket);return e!=null?Yp(a,e):a}else return e!==void 0?pU(c,e):c}function gU(c,e){if(e&&vU(e)){if(c instanceof lr)return zU(c,e);throw Ut("To use ref(service, url), the first argument must be a Storage instance.")}else return Yp(c,e)}function _l(c,e){const t=e==null?void 0:e[Rp];return t==null?null:A2.makeFromBucketSpec(t,c)}function CU(c,e,t,a={}){c.host=`${e}:${t}`,c._protocol="http";const{mockUserToken:n}=a;n&&(c._overrideAuthToken=typeof n=="string"?n:au(n,c.app.options.projectId))}class lr{constructor(e,t,a,n,r){this.app=e,this._authProvider=t,this._appCheckProvider=a,this._url=n,this._firebaseVersion=r,this._bucket=null,this._host=Pp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uB,this._maxUploadRetryTime=dB,this._requests=new Set,n!=null?this._bucket=A2.makeFromBucketSpec(n,this._host):this._bucket=_l(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=A2.makeFromBucketSpec(this._url,e):this._bucket=_l(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new i6(this,e)}_makeRequest(e,t,a,n,r=!0){if(this._deleted)return new wB(Ip());{const s=OB(e,this._appId,a,n,t,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[a,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,a,n).getPromise()}}const bl="@firebase/storage",xl="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="storage";function rM1(c,e,t){return c=$1(c),uU(c,e,t)}function sM1(c){return c=$1(c),dU(c)}function iM1(c){return c=$1(c),mU(c)}function oM1(c,e){return c=$1(c),gU(c,e)}function lM1(c=Pe(),e){c=$1(c);const a=Ee(c,Zp).getImmediate({identifier:e}),n=eu("storage");return n&&HU(a,...n),a}function HU(c,e,t,a={}){CU(c,e,t,a)}function MU(c,{instanceIdentifier:e}){const t=c.getProvider("app").getImmediate(),a=c.getProvider("auth-internal"),n=c.getProvider("app-check-internal");return new lr(t,a,n,e,y4)}function VU(){C3(new e3(Zp,MU,"PUBLIC").setMultipleInstances(!0)),T2(bl,xl,""),T2(bl,xl,"esm2017")}VU();const Xp=Symbol("VueFireAuth");function LU({dependencies:c,initialUser:e}){return(t,a)=>{const[n,r]=yU(t,a,e,c);tD(n,r)}}function yU(c,e,t,a,n=Jd(c,a)){const r=JI(c,e).run(()=>B2(t));return eD.set(c,r),e.provide(Xp,n),[r,n]}function _U(c,{firebaseApp:e,modules:t=[]}){c.provide(Mm,e);for(const a of t)a(e,c)}const bU=w2(c=>{const e=c.$firebaseApp;return LU({initialUser:c.payload.vuefireUser,dependencies:{errorMap:Id,persistence:[pm,om],popupRedirectResolver:gm}})(e,c.vueApp),{provide:{firebaseAuth:c.vueApp.runWithContext(()=>e2(Xp))}}}),xU=w2(c=>{const e=c.$firebaseApp;c.vueApp.use(_U,{firebaseApp:e})}),wU=w2({name:"nuxt:chunk-reload",setup(c){const e=h6(),t=we(),a=new Set;e.beforeEach(()=>{a.clear()}),c.hook("app:chunkError",({error:r})=>{a.add(r)});function n(r){const i="href"in r&&r.href.startsWith("#")?t.app.baseURL+r.href:Y8(t.app.baseURL,r.fullPath);pP({path:i,persistState:!0})}c.hook("app:manifest:update",()=>{e.beforeResolve(n)}),e.onError((r,s)=>{a.has(r)&&n(s)})}}),NU=w2(c=>{let e;async function t(){const a=await Se();e&&clearTimeout(e),e=setTimeout(t,1e3*60*60);const n=await $fetch(ka("builds/latest.json"));n.id!==a.id&&c.hooks.callHook("app:manifest:update",n)}kd(()=>{e=setTimeout(t,1e3*60*60)})});function wl(c,e){var t=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),t.push.apply(t,a)}return t}function q(c){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wl(Object(t),!0).forEach(function(a){Z1(c,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):wl(Object(t)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(t,a))})}return c}function fe(c){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(c)}function SU(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function Nl(c,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function kU(c,e,t){return e&&Nl(c.prototype,e),t&&Nl(c,t),Object.defineProperty(c,"prototype",{writable:!1}),c}function Z1(c,e,t){return e in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}function fr(c,e){return TU(c)||PU(c,e)||Qp(c,e)||IU()}function g5(c){return AU(c)||EU(c)||Qp(c)||RU()}function AU(c){if(Array.isArray(c))return qt(c)}function TU(c){if(Array.isArray(c))return c}function EU(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function PU(c,e){var t=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(t!=null){var a=[],n=!0,r=!1,s,i;try{for(t=t.call(c);!(n=(s=t.next()).done)&&(a.push(s.value),!(e&&a.length===e));n=!0);}catch(o){r=!0,i=o}finally{try{!n&&t.return!=null&&t.return()}finally{if(r)throw i}}return a}}function Qp(c,e){if(c){if(typeof c=="string")return qt(c,e);var t=Object.prototype.toString.call(c).slice(8,-1);if(t==="Object"&&c.constructor&&(t=c.constructor.name),t==="Map"||t==="Set")return Array.from(c);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qt(c,e)}}function qt(c,e){(e==null||e>c.length)&&(e=c.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=c[t];return a}function RU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sl=function(){},hr={},Jp={},ev=null,cv={mark:Sl,measure:Sl};try{typeof window<"u"&&(hr=window),typeof document<"u"&&(Jp=document),typeof MutationObserver<"u"&&(ev=MutationObserver),typeof performance<"u"&&(cv=performance)}catch{}var DU=hr.navigator||{},kl=DU.userAgent,Al=kl===void 0?"":kl,H4=hr,S1=Jp,Tl=ev,X5=cv;H4.document;var q3=!!S1.documentElement&&!!S1.head&&typeof S1.addEventListener=="function"&&typeof S1.createElement=="function",tv=~Al.indexOf("MSIE")||~Al.indexOf("Trident/"),Q5,J5,e7,c7,t7,D3="___FONT_AWESOME___",$t=16,av="fa",nv="svg-inline--fa",o6="data-fa-i2svg",Wt="data-fa-pseudo-element",OU="data-fa-pseudo-element-pending",ur="data-prefix",dr="data-icon",El="fontawesome-i2svg",FU="async",BU=["HTML","HEAD","STYLE","SCRIPT"],rv=function(){try{return!0}catch{return!1}}(),x1="classic",T1="sharp",mr=[x1,T1];function C5(c){return new Proxy(c,{get:function(t,a){return a in t?t[a]:t[x1]}})}var O8=C5((Q5={},Z1(Q5,x1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Z1(Q5,T1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Q5)),F8=C5((J5={},Z1(J5,x1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z1(J5,T1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),J5)),B8=C5((e7={},Z1(e7,x1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z1(e7,T1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),e7)),UU=C5((c7={},Z1(c7,x1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z1(c7,T1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),c7)),qU=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,sv="fa-layers-text",$U=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,WU=C5((t7={},Z1(t7,x1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z1(t7,T1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),t7)),iv=[1,2,3,4,5,6,7,8,9,10],jU=iv.concat([11,12,13,14,15,16,17,18,19,20]),GU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U8=new Set;Object.keys(F8[x1]).map(U8.add.bind(U8));Object.keys(F8[T1]).map(U8.add.bind(U8));var KU=[].concat(mr,g5(U8),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B4.GROUP,B4.SWAP_OPACITY,B4.PRIMARY,B4.SECONDARY]).concat(iv.map(function(c){return"".concat(c,"x")})).concat(jU.map(function(c){return"w-".concat(c)})),i8=H4.FontAwesomeConfig||{};function YU(c){var e=S1.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function ZU(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(S1&&typeof S1.querySelector=="function"){var XU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];XU.forEach(function(c){var e=fr(c,2),t=e[0],a=e[1],n=ZU(YU(t));n!=null&&(i8[a]=n)})}var ov={styleDefault:"solid",familyDefault:"classic",cssPrefix:av,replacementClass:nv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i8.familyPrefix&&(i8.cssPrefix=i8.familyPrefix);var s0=q(q({},ov),i8);s0.autoReplaceSvg||(s0.observeMutations=!1);var G={};Object.keys(ov).forEach(function(c){Object.defineProperty(G,c,{enumerable:!0,set:function(t){s0[c]=t,o8.forEach(function(a){return a(G)})},get:function(){return s0[c]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){s0.cssPrefix=e,o8.forEach(function(t){return t(G)})},get:function(){return s0.cssPrefix}});H4.FontAwesomeConfig=G;var o8=[];function QU(c){return o8.push(c),function(){o8.splice(o8.indexOf(c),1)}}var Z3=$t,m3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function JU(c){if(!(!c||!q3)){var e=S1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var t=S1.head.childNodes,a=null,n=t.length-1;n>-1;n--){var r=t[n],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return S1.head.insertBefore(e,a),c}}var eq="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q8(){for(var c=12,e="";c-- >0;)e+=eq[Math.random()*62|0];return e}function V0(c){for(var e=[],t=(c||[]).length>>>0;t--;)e[t]=c[t];return e}function pr(c){return c.classList?V0(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function lv(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cq(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(lv(c[t]),'" ')},"").trim()}function d9(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(c[t].trim(),";")},"")}function vr(c){return c.size!==m3.size||c.x!==m3.x||c.y!==m3.y||c.rotate!==m3.rotate||c.flipX||c.flipY}function tq(c){var e=c.transform,t=c.containerWidth,a=c.iconWidth,n={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(i)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:n,inner:o,path:l}}function aq(c){var e=c.transform,t=c.width,a=t===void 0?$t:t,n=c.height,r=n===void 0?$t:n,s=c.startCentered,i=s===void 0?!1:s,o="";return i&&tv?o+="translate(".concat(e.x/Z3-a/2,"em, ").concat(e.y/Z3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/Z3,"em), calc(-50% + ").concat(e.y/Z3,"em)) "):o+="translate(".concat(e.x/Z3,"em, ").concat(e.y/Z3,"em) "),o+="scale(".concat(e.size/Z3*(e.flipX?-1:1),", ").concat(e.size/Z3*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var nq=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function fv(){var c=av,e=nv,t=G.cssPrefix,a=G.replacementClass,n=nq;if(t!==c||a!==e){var r=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(i,".".concat(a))}return n}var Pl=!1;function Hc(){G.autoAddCss&&!Pl&&(JU(fv()),Pl=!0)}var rq={mixout:function(){return{dom:{css:fv,insertCss:Hc}}},hooks:function(){return{beforeDOMElementCreation:function(){Hc()},beforeI2svg:function(){Hc()}}}},O3=H4||{};O3[D3]||(O3[D3]={});O3[D3].styles||(O3[D3].styles={});O3[D3].hooks||(O3[D3].hooks={});O3[D3].shims||(O3[D3].shims=[]);var X2=O3[D3],hv=[],sq=function c(){S1.removeEventListener("DOMContentLoaded",c),he=1,hv.map(function(e){return e()})},he=!1;q3&&(he=(S1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S1.readyState),he||S1.addEventListener("DOMContentLoaded",sq));function iq(c){q3&&(he?setTimeout(c,0):hv.push(c))}function H5(c){var e=c.tag,t=c.attributes,a=t===void 0?{}:t,n=c.children,r=n===void 0?[]:n;return typeof c=="string"?lv(c):"<".concat(e," ").concat(cq(a),">").concat(r.map(H5).join(""),"</").concat(e,">")}function Rl(c,e,t){if(c&&c[e]&&c[e][t])return{prefix:e,iconName:t,icon:c[e][t]}}var oq=function(e,t){return function(a,n,r,s){return e.call(t,a,n,r,s)}},Mc=function(e,t,a,n){var r=Object.keys(e),s=r.length,i=n!==void 0?oq(t,n):t,o,l,f;for(a===void 0?(o=1,f=e[r[0]]):(o=0,f=a);o<s;o++)l=r[o],f=i(f,e[l],l,e);return f};function lq(c){for(var e=[],t=0,a=c.length;t<a;){var n=c.charCodeAt(t++);if(n>=55296&&n<=56319&&t<a){var r=c.charCodeAt(t++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),t--)}else e.push(n)}return e}function jt(c){var e=lq(c);return e.length===1?e[0].toString(16):null}function fq(c,e){var t=c.length,a=c.charCodeAt(e),n;return a>=55296&&a<=56319&&t>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(a-55296)*1024+n-56320+65536:a}function Il(c){return Object.keys(c).reduce(function(e,t){var a=c[t],n=!!a.icon;return n?e[a.iconName]=a.icon:e[t]=a,e},{})}function Gt(c,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,n=a===void 0?!1:a,r=Il(e);typeof X2.hooks.addPack=="function"&&!n?X2.hooks.addPack(c,Il(e)):X2.styles[c]=q(q({},X2.styles[c]||{}),r),c==="fas"&&Gt("fa",e)}var a7,n7,r7,w6=X2.styles,hq=X2.shims,uq=(a7={},Z1(a7,x1,Object.values(B8[x1])),Z1(a7,T1,Object.values(B8[T1])),a7),zr=null,uv={},dv={},mv={},pv={},vv={},dq=(n7={},Z1(n7,x1,Object.keys(O8[x1])),Z1(n7,T1,Object.keys(O8[T1])),n7);function mq(c){return~KU.indexOf(c)}function pq(c,e){var t=e.split("-"),a=t[0],n=t.slice(1).join("-");return a===c&&n!==""&&!mq(n)?n:null}var zv=function(){var e=function(r){return Mc(w6,function(s,i,o){return s[o]=Mc(i,r,{}),s},{})};uv=e(function(n,r,s){if(r[3]&&(n[r[3]]=s),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){n[o.toString(16)]=s})}return n}),dv=e(function(n,r,s){if(n[s]=s,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){n[o]=s})}return n}),vv=e(function(n,r,s){var i=r[2];return n[s]=s,i.forEach(function(o){n[o]=s}),n});var t="far"in w6||G.autoFetchSvg,a=Mc(hq,function(n,r){var s=r[0],i=r[1],o=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(n.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:i,iconName:o}),n},{names:{},unicodes:{}});mv=a.names,pv=a.unicodes,zr=m9(G.styleDefault,{family:G.familyDefault})};QU(function(c){zr=m9(c.styleDefault,{family:G.familyDefault})});zv();function gr(c,e){return(uv[c]||{})[e]}function vq(c,e){return(dv[c]||{})[e]}function U4(c,e){return(vv[c]||{})[e]}function gv(c){return mv[c]||{prefix:null,iconName:null}}function zq(c){var e=pv[c],t=gr("fas",c);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function M4(){return zr}var Cr=function(){return{prefix:null,iconName:null,rest:[]}};function m9(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,a=t===void 0?x1:t,n=O8[a][c],r=F8[a][c]||F8[a][n],s=c in X2.styles?c:null;return r||s||null}var Dl=(r7={},Z1(r7,x1,Object.keys(B8[x1])),Z1(r7,T1,Object.keys(B8[T1])),r7);function p9(c){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=(e={},Z1(e,x1,"".concat(G.cssPrefix,"-").concat(x1)),Z1(e,T1,"".concat(G.cssPrefix,"-").concat(T1)),e),s=null,i=x1;(c.includes(r[x1])||c.some(function(l){return Dl[x1].includes(l)}))&&(i=x1),(c.includes(r[T1])||c.some(function(l){return Dl[T1].includes(l)}))&&(i=T1);var o=c.reduce(function(l,f){var h=pq(G.cssPrefix,f);if(w6[f]?(f=uq[i].includes(f)?UU[i][f]:f,s=f,l.prefix=f):dq[i].indexOf(f)>-1?(s=f,l.prefix=m9(f,{family:i})):h?l.iconName=h:f!==G.replacementClass&&f!==r[x1]&&f!==r[T1]&&l.rest.push(f),!n&&l.prefix&&l.iconName){var u=s==="fa"?gv(l.iconName):{},d=U4(l.prefix,l.iconName);u.prefix&&(s=null),l.iconName=u.iconName||d||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!w6.far&&w6.fas&&!G.autoFetchSvg&&(l.prefix="fas")}return l},Cr());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===T1&&(w6.fass||G.autoFetchSvg)&&(o.prefix="fass",o.iconName=U4(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=M4()||"fas"),o}var gq=function(){function c(){SU(this,c),this.definitions={}}return kU(c,[{key:"add",value:function(){for(var t=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){t.definitions[i]=q(q({},t.definitions[i]||{}),s[i]),Gt(i,s[i]);var o=B8[x1][i];o&&Gt(o,s[i]),zv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(function(r){var s=n[r],i=s.prefix,o=s.iconName,l=s.icon,f=l[2];t[i]||(t[i]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(t[i][h]=l)}),t[i][o]=l}),t}}]),c}(),Ol=[],N6={},U6={},Cq=Object.keys(U6);function Hq(c,e){var t=e.mixoutsTo;return Ol=c,N6={},Object.keys(U6).forEach(function(a){Cq.indexOf(a)===-1&&delete U6[a]}),Ol.forEach(function(a){var n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(function(s){typeof n[s]=="function"&&(t[s]=n[s]),fe(n[s])==="object"&&Object.keys(n[s]).forEach(function(i){t[s]||(t[s]={}),t[s][i]=n[s][i]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(s){N6[s]||(N6[s]=[]),N6[s].push(r[s])})}a.provides&&a.provides(U6)}),t}function Kt(c,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),n=2;n<t;n++)a[n-2]=arguments[n];var r=N6[c]||[];return r.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function l6(c){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];var n=N6[c]||[];n.forEach(function(r){r.apply(null,t)})}function F3(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return U6[c]?U6[c].apply(null,e):void 0}function Yt(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,t=c.prefix||M4();if(e)return e=U4(t,e)||e,Rl(Cv.definitions,t,e)||Rl(X2.styles,t,e)}var Cv=new gq,Mq=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,l6("noAuto")},Vq={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q3?(l6("beforeI2svg",e),F3("pseudoElements2svg",e),F3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,iq(function(){yq({autoReplaceSvgRoot:t}),l6("watch",e)})}},Lq={icon:function(e){if(e===null)return null;if(fe(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:U4(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=m9(e[0]);return{prefix:a,iconName:U4(a,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(qU))){var n=p9(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||M4(),iconName:U4(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=M4();return{prefix:r,iconName:U4(r,e)||e}}}},E2={noAuto:Mq,config:G,dom:Vq,parse:Lq,library:Cv,findIconDefinition:Yt,toHtml:H5},yq=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,a=t===void 0?S1:t;(Object.keys(X2.styles).length>0||G.autoFetchSvg)&&q3&&G.autoReplaceSvg&&E2.dom.i2svg({node:a})};function v9(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(a){return H5(a)})}}),Object.defineProperty(c,"node",{get:function(){if(q3){var a=S1.createElement("div");return a.innerHTML=c.html,a.children}}}),c}function _q(c){var e=c.children,t=c.main,a=c.mask,n=c.attributes,r=c.styles,s=c.transform;if(vr(s)&&t.found&&!a.found){var i=t.width,o=t.height,l={x:i/o/2,y:.5};n.style=d9(q(q({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function bq(c){var e=c.prefix,t=c.iconName,a=c.children,n=c.attributes,r=c.symbol,s=r===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},n),{},{id:s}),children:a}]}]}function Hr(c){var e=c.icons,t=e.main,a=e.mask,n=c.prefix,r=c.iconName,s=c.transform,i=c.symbol,o=c.title,l=c.maskId,f=c.titleId,h=c.extra,u=c.watchable,d=u===void 0?!1:u,v=a.found?a:t,H=v.width,y=v.height,M=n==="fak",C=[G.replacementClass,r?"".concat(G.cssPrefix,"-").concat(r):""].filter(function(w){return h.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(h.classes).join(" "),z={children:[],attributes:q(q({},h.attributes),{},{"data-prefix":n,"data-icon":r,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat(y)})},m=M&&!~h.classes.indexOf("fa-fw")?{width:"".concat(H/y*16*.0625,"em")}:{};d&&(z.attributes[o6]=""),o&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(f||q8())},children:[o]}),delete z.attributes.title);var L=q(q({},z),{},{prefix:n,iconName:r,main:t,mask:a,maskId:l,transform:s,symbol:i,styles:q(q({},m),h.styles)}),N=a.found&&t.found?F3("generateAbstractMask",L)||{children:[],attributes:{}}:F3("generateAbstractIcon",L)||{children:[],attributes:{}},S=N.children,_=N.attributes;return L.children=S,L.attributes=_,i?bq(L):_q(L)}function Fl(c){var e=c.content,t=c.width,a=c.height,n=c.transform,r=c.title,s=c.extra,i=c.watchable,o=i===void 0?!1:i,l=q(q(q({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(l[o6]="");var f=q({},s.styles);vr(n)&&(f.transform=aq({transform:n,startCentered:!0,width:t,height:a}),f["-webkit-transform"]=f.transform);var h=d9(f);h.length>0&&(l.style=h);var u=[];return u.push({tag:"span",attributes:l,children:[e]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function xq(c){var e=c.content,t=c.title,a=c.extra,n=q(q(q({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),r=d9(a.styles);r.length>0&&(n.style=r);var s=[];return s.push({tag:"span",attributes:n,children:[e]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var Vc=X2.styles;function Zt(c){var e=c[0],t=c[1],a=c.slice(4),n=fr(a,1),r=n[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(B4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(B4.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(B4.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:s}}var wq={found:!1,width:512,height:512};function Nq(c,e){!rv&&!G.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function Xt(c,e){var t=e;return e==="fa"&&G.styleDefault!==null&&(e=M4()),new Promise(function(a,n){if(F3("missingIconAbstract"),t==="fa"){var r=gv(c)||{};c=r.iconName||c,e=r.prefix||e}if(c&&e&&Vc[e]&&Vc[e][c]){var s=Vc[e][c];return a(Zt(s))}Nq(c,e),a(q(q({},wq),{},{icon:G.showMissingIcons&&c?F3("missingIconAbstract")||{}:{}}))})}var Bl=function(){},Qt=G.measurePerformance&&X5&&X5.mark&&X5.measure?X5:{mark:Bl,measure:Bl},U0='FA "6.5.1"',Sq=function(e){return Qt.mark("".concat(U0," ").concat(e," begins")),function(){return Hv(e)}},Hv=function(e){Qt.mark("".concat(U0," ").concat(e," ends")),Qt.measure("".concat(U0," ").concat(e),"".concat(U0," ").concat(e," begins"),"".concat(U0," ").concat(e," ends"))},Mr={begin:Sq,end:Hv},p7=function(){};function Ul(c){var e=c.getAttribute?c.getAttribute(o6):null;return typeof e=="string"}function kq(c){var e=c.getAttribute?c.getAttribute(ur):null,t=c.getAttribute?c.getAttribute(dr):null;return e&&t}function Aq(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(G.replacementClass)}function Tq(){if(G.autoReplaceSvg===!0)return v7.replace;var c=v7[G.autoReplaceSvg];return c||v7.replace}function Eq(c){return S1.createElementNS("http://www.w3.org/2000/svg",c)}function Pq(c){return S1.createElement(c)}function Mv(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,a=t===void 0?c.tag==="svg"?Eq:Pq:t;if(typeof c=="string")return S1.createTextNode(c);var n=a(c.tag);Object.keys(c.attributes||[]).forEach(function(s){n.setAttribute(s,c.attributes[s])});var r=c.children||[];return r.forEach(function(s){n.appendChild(Mv(s,{ceFn:a}))}),n}function Rq(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var v7={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(n){t.parentNode.insertBefore(Mv(n),t)}),t.getAttribute(o6)===null&&G.keepOriginalSource){var a=S1.createComment(Rq(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(e){var t=e[0],a=e[1];if(~pr(t).indexOf(G.replacementClass))return v7.replace(e);var n=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(i,o){return o===G.replacementClass||o.match(n)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var s=a.map(function(i){return H5(i)}).join(`
`);t.setAttribute(o6,""),t.innerHTML=s}};function ql(c){c()}function Vv(c,e){var t=typeof e=="function"?e:p7;if(c.length===0)t();else{var a=ql;G.mutateApproach===FU&&(a=H4.requestAnimationFrame||ql),a(function(){var n=Tq(),r=Mr.begin("mutate");c.map(n),r(),t()})}}var Vr=!1;function Lv(){Vr=!0}function Jt(){Vr=!1}var ue=null;function $l(c){if(Tl&&G.observeMutations){var e=c.treeCallback,t=e===void 0?p7:e,a=c.nodeCallback,n=a===void 0?p7:a,r=c.pseudoElementsCallback,s=r===void 0?p7:r,i=c.observeMutationsRoot,o=i===void 0?S1:i;ue=new Tl(function(l){if(!Vr){var f=M4();V0(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Ul(h.addedNodes[0])&&(G.searchPseudoElements&&s(h.target),t(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&Ul(h.target)&&~GU.indexOf(h.attributeName))if(h.attributeName==="class"&&kq(h.target)){var u=p9(pr(h.target)),d=u.prefix,v=u.iconName;h.target.setAttribute(ur,d||f),v&&h.target.setAttribute(dr,v)}else Aq(h.target)&&n(h.target)})}}),q3&&ue.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Iq(){ue&&ue.disconnect()}function Dq(c){var e=c.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(a,n){var r=n.split(":"),s=r[0],i=r.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),t}function Oq(c){var e=c.getAttribute("data-prefix"),t=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",n=p9(pr(c));return n.prefix||(n.prefix=M4()),e&&t&&(n.prefix=e,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&a.length>0&&(n.iconName=vq(n.prefix,c.innerText)||gr(n.prefix,jt(c.innerText))),!n.iconName&&G.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function Fq(c){var e=V0(c.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),t=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return G.autoA11y&&(t?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(a||q8()):(e["aria-hidden"]="true",e.focusable="false")),e}function Bq(){return{iconName:null,title:null,titleId:null,prefix:null,transform:m3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wl(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Oq(c),a=t.iconName,n=t.prefix,r=t.rest,s=Fq(c),i=Kt("parseNodeAttributes",{},c),o=e.styleParser?Dq(c):[];return q({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:m3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}var Uq=X2.styles;function yv(c){var e=G.autoReplaceSvg==="nest"?Wl(c,{styleParser:!1}):Wl(c);return~e.extra.classes.indexOf(sv)?F3("generateLayersText",c,e):F3("generateSvgReplacementMutation",c,e)}var V4=new Set;mr.map(function(c){V4.add("fa-".concat(c))});Object.keys(O8[x1]).map(V4.add.bind(V4));Object.keys(O8[T1]).map(V4.add.bind(V4));V4=g5(V4);function jl(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q3)return Promise.resolve();var t=S1.documentElement.classList,a=function(h){return t.add("".concat(El,"-").concat(h))},n=function(h){return t.remove("".concat(El,"-").concat(h))},r=G.autoFetchSvg?V4:mr.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Uq));r.includes("fa")||r.push("fa");var s=[".".concat(sv,":not([").concat(o6,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(o6,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=V0(c.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),n("complete");else return Promise.resolve();var o=Mr.begin("onTree"),l=i.reduce(function(f,h){try{var u=yv(h);u&&f.push(u)}catch(d){rv||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(u){Vv(u,function(){a("active"),a("complete"),n("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(u){o(),h(u)})})}function qq(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yv(c).then(function(t){t&&Vv([t],e)})}function $q(c){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Yt(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Yt(n||{})),c(a,q(q({},t),{},{mask:n}))}}var Wq=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,n=a===void 0?m3:a,r=t.symbol,s=r===void 0?!1:r,i=t.mask,o=i===void 0?null:i,l=t.maskId,f=l===void 0?null:l,h=t.title,u=h===void 0?null:h,d=t.titleId,v=d===void 0?null:d,H=t.classes,y=H===void 0?[]:H,M=t.attributes,C=M===void 0?{}:M,z=t.styles,m=z===void 0?{}:z;if(e){var L=e.prefix,N=e.iconName,S=e.icon;return v9(q({type:"icon"},e),function(){return l6("beforeDOMElementCreation",{iconDefinition:e,params:t}),G.autoA11y&&(u?C["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(v||q8()):(C["aria-hidden"]="true",C.focusable="false")),Hr({icons:{main:Zt(S),mask:o?Zt(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:N,transform:q(q({},m3),n),symbol:s,title:u,maskId:f,titleId:v,extra:{attributes:C,styles:m,classes:y}})})}},jq={mixout:function(){return{icon:$q(Wq)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=jl,t.nodeCallback=qq,t}}},provides:function(e){e.i2svg=function(t){var a=t.node,n=a===void 0?S1:a,r=t.callback,s=r===void 0?function(){}:r;return jl(n,s)},e.generateSvgReplacementMutation=function(t,a){var n=a.iconName,r=a.title,s=a.titleId,i=a.prefix,o=a.transform,l=a.symbol,f=a.mask,h=a.maskId,u=a.extra;return new Promise(function(d,v){Promise.all([Xt(n,i),f.iconName?Xt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var y=fr(H,2),M=y[0],C=y[1];d([t,Hr({icons:{main:M,mask:C},prefix:i,iconName:n,transform:o,symbol:l,maskId:h,title:r,titleId:s,extra:u,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){var a=t.children,n=t.attributes,r=t.main,s=t.transform,i=t.styles,o=d9(i);o.length>0&&(n.style=o);var l;return vr(s)&&(l=F3("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),a.push(l||r.icon),{children:a,attributes:n}}}},Gq={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.classes,r=n===void 0?[]:n;return v9({type:"layer"},function(){l6("beforeDOMElementCreation",{assembler:t,params:a});var s=[];return t(function(i){Array.isArray(i)?i.map(function(o){s=s.concat(o.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(g5(r)).join(" ")},children:s}]})}}}},Kq={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.title,r=n===void 0?null:n,s=a.classes,i=s===void 0?[]:s,o=a.attributes,l=o===void 0?{}:o,f=a.styles,h=f===void 0?{}:f;return v9({type:"counter",content:t},function(){return l6("beforeDOMElementCreation",{content:t,params:a}),xq({content:t.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(g5(i))}})})}}}},Yq={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?m3:n,s=a.title,i=s===void 0?null:s,o=a.classes,l=o===void 0?[]:o,f=a.attributes,h=f===void 0?{}:f,u=a.styles,d=u===void 0?{}:u;return v9({type:"text",content:t},function(){return l6("beforeDOMElementCreation",{content:t,params:a}),Fl({content:t,transform:q(q({},m3),r),title:i,extra:{attributes:h,styles:d,classes:["".concat(G.cssPrefix,"-layers-text")].concat(g5(l))}})})}}},provides:function(e){e.generateLayersText=function(t,a){var n=a.title,r=a.transform,s=a.extra,i=null,o=null;if(tv){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/l,o=f.height/l}return G.autoA11y&&!n&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Fl({content:t.innerHTML,width:i,height:o,transform:r,title:n,extra:s,watchable:!0})])}}},Zq=new RegExp('"',"ug"),Gl=[1105920,1112319];function Xq(c){var e=c.replace(Zq,""),t=fq(e,0),a=t>=Gl[0]&&t<=Gl[1],n=e.length===2?e[0]===e[1]:!1;return{value:jt(n?e[0]:e),isSecondary:a||n}}function Kl(c,e){var t="".concat(OU).concat(e.replace(":","-"));return new Promise(function(a,n){if(c.getAttribute(t)!==null)return a();var r=V0(c.children),s=r.filter(function(S){return S.getAttribute(Wt)===e})[0],i=H4.getComputedStyle(c,e),o=i.getPropertyValue("font-family").match($U),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(s&&!o)return c.removeChild(s),a();if(o&&f!=="none"&&f!==""){var h=i.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?T1:x1,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?F8[u][o[2].toLowerCase()]:WU[u][l],v=Xq(h),H=v.value,y=v.isSecondary,M=o[0].startsWith("FontAwesome"),C=gr(d,H),z=C;if(M){var m=zq(H);m.iconName&&m.prefix&&(C=m.iconName,d=m.prefix)}if(C&&!y&&(!s||s.getAttribute(ur)!==d||s.getAttribute(dr)!==z)){c.setAttribute(t,z),s&&c.removeChild(s);var L=Bq(),N=L.extra;N.attributes[Wt]=e,Xt(C,d).then(function(S){var _=Hr(q(q({},L),{},{icons:{main:S,mask:Cr()},prefix:d,iconName:z,extra:N,watchable:!0})),w=S1.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(w,c.firstChild):c.appendChild(w),w.outerHTML=_.map(function(E){return H5(E)}).join(`
`).splice(1).map(h=>({text:h.replace("webpack:/","").replace(".vue",".js").trim(),internal:h.includes("node_modules")&&!h.includes(".cache")||h.includes("internal")||h.includes("new Promise")})).map(h=>`<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);const a=Number(t.statusCode||500),n=a===404,r=t.statusMessage??(n?"Page Not Found":"Internal Server Error"),s=t.message||t.toString(),i=void 0,f=n?Is(()=>R2(()=>import("./error-404.2849f414.js"),["./error-404.2849f414.js","./nuxt-link.63f25bcd.js","./vue.f36acd1f.285f4355.js","./error-404.95c28eb4.css"],import.meta.url).then(h=>h.default||h)):Is(()=>R2(()=>import("./error-500.833fabaf.js"),["./error-500.833fabaf.js","./vue.f36acd1f.285f4355.js","./error-500.e798523c.css"],import.meta.url).then(h=>h.default||h));return(h,u)=>(l3(),t4(k1(f),mb(ih({statusCode:k1(a),statusMessage:k1(r),description:k1(s),stack:k1(i)})),null,16))}},cf={__name:"nuxt-root",setup(c){const e=()=>null,t=I1(),a=t.deferHydration(),n=!1;j4(Z8,Pa()),t.hooks.callHookWith(i=>i.map(o=>o()),"vue:setup");const r=Ne();$f((i,o,l)=>{if(t.hooks.callHook("vue:error",i,o,l).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),BS(i)&&(i.fatal||i.unhandled))return t.runWithContext(()=>y6(i)),!1});const s=!1;return(i,o)=>(l3(),t4(va,{onResolve:k1(a)},{default:da(()=>[k1(r)?(l3(),t4(k1(HH1),{key:0,error:k1(r)},null,8,["error"])):k1(s)?(l3(),t4(k1(e),{key:1,context:k1(s)},null,8,["context"])):k1(n)?(l3(),t4(ax(k1(n)),{key:2})):(l3(),t4(k1(CH1),{key:3}))]),_:1},8,["onResolve"]))}};let tf;{let c;tf=async function(){var s,i;if(c)return c;const a=!!((s=window.__NUXT__)!=null&&s.serverRendered||((i=document.getElementById("__NUXT_DATA__"))==null?void 0:i.dataset.ssr)==="true")?Sw(cf):Nw(cf),n=PN({vueApp:a});async function r(o){await n.callHook("app:error",o),n.payload.error=n.payload.error||o}a.config.errorHandler=r;try{await IN(n,rH1)}catch(o){r(o)}try{await n.hooks.callHook("app:created",a),await n.hooks.callHook("app:beforeMount",a),a.mount(KS),await n.hooks.callHook("app:mounted",a),await L4()}catch(o){r(o)}return a.config.errorHandler===r&&(a.config.errorHandler=void 0),a},c=tf().catch(e=>{console.error("Error while mounting app:",e)})}export{b2 as $,_H1 as A,jH1 as B,W1 as C,LH1 as D,yH1 as E,p2 as F,nM1 as G,lM1 as H,ze as I,wH1 as J,oM1 as K,rM1 as L,sM1 as M,cB as N,QH1 as O,eM1 as P,cM1 as Q,iM1 as R,JH1 as S,h6 as T,B3 as U,K8 as V,Ha as W,kd as X,Ho as Y,WH1 as Z,vH1 as _,Wc as a,Y8 as a0,xe as a1,Bw as a2,$H1 as a3,Uc as a4,yh as a5,we as a6,I1 as a7,SH1 as a8,RH1 as a9,NH1 as aA,TH1 as aB,gx as aC,E3 as aD,W6 as aE,g2 as aF,Lf as aG,qf as aH,ZH1 as aI,YH1 as aJ,tM1 as aK,aM1 as aL,IH1 as aM,sf as aN,uf as aO,z3 as aP,d1 as aQ,VH1 as aR,be as aa,t1 as ab,g3 as ac,Ma as ad,t4 as ae,OH1 as af,A1 as ag,j8 as ah,ve as ai,ax as aj,G6 as ak,BH1 as al,Q as am,j4 as an,L4 as ao,f8 as ap,AH1 as aq,kH1 as ar,Wb as as,lh as at,Q2 as au,_1 as av,EH1 as aw,Gb as ax,gb as ay,e2 as az,$4 as b,vx as c,px as d,XH1 as e,qx as f,h0 as g,sh as h,UH1 as i,N1 as j,P1 as k,da as l,l3 as m,qH1 as n,Va as o,oh as p,GH1 as q,B2 as r,KH1 as s,xH1 as t,k1 as u,DH1 as v,bH1 as w,FH1 as x,MH1 as y,PH1 as z};
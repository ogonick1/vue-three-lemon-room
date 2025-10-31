(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kf(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Tt={},co=[],Hi=()=>{},Nm=()=>!1,Tc=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Vf=i=>i.startsWith("onUpdate:"),In=Object.assign,Wf=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},$0=Object.prototype.hasOwnProperty,dt=(i,e)=>$0.call(i,e),je=Array.isArray,uo=i=>bc(i)==="[object Map]",Fm=i=>bc(i)==="[object Set]",Qe=i=>typeof i=="function",Kt=i=>typeof i=="string",kr=i=>typeof i=="symbol",Dt=i=>i!==null&&typeof i=="object",Bm=i=>(Dt(i)||Qe(i))&&Qe(i.then)&&Qe(i.catch),zm=Object.prototype.toString,bc=i=>zm.call(i),j0=i=>bc(i).slice(8,-1),Hm=i=>bc(i)==="[object Object]",Xf=i=>Kt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,oa=kf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ac=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},K0=/-\w/g,Nr=Ac(i=>i.replace(K0,e=>e.slice(1).toUpperCase())),Z0=/\B([A-Z])/g,Ps=Ac(i=>i.replace(Z0,"-$1").toLowerCase()),Gm=Ac(i=>i.charAt(0).toUpperCase()+i.slice(1)),Xc=Ac(i=>i?`on${Gm(i)}`:""),Cr=(i,e)=>!Object.is(i,e),Yc=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},km=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},J0=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Zh;const wc=()=>Zh||(Zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yf(i){if(je(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Kt(n)?nv(n):Yf(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Kt(i)||Dt(i))return i}const Q0=/;(?![^(]*\))/g,ev=/:([^]+)/,tv=/\/\*[^]*?\*\//g;function nv(i){const e={};return i.replace(tv,"").split(Q0).forEach(t=>{if(t){const n=t.split(ev);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function qf(i){let e="";if(Kt(i))e=i;else if(je(i))for(let t=0;t<i.length;t++){const n=qf(i[t]);n&&(e+=n+" ")}else if(Dt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rv=kf(iv);function Vm(i){return!!i||i===""}const Wm=i=>!!(i&&i.__v_isRef===!0),Xm=i=>Kt(i)?i:i==null?"":je(i)||Dt(i)&&(i.toString===zm||!Qe(i.toString))?Wm(i)?Xm(i.value):JSON.stringify(i,Ym,2):String(i),Ym=(i,e)=>Wm(e)?Ym(i,e.value):uo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[qc(n,s)+" =>"]=r,t),{})}:Fm(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qc(t))}:kr(e)?qc(e):Dt(e)&&!je(e)&&!Hm(e)?String(e):e,qc=(i,e="")=>{var t;return kr(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let On;class sv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=On,!e&&On&&(this.index=(On.scopes||(On.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=On;try{return On=this,e()}finally{On=t}}}on(){++this._on===1&&(this.prevScope=On,On=this)}off(){this._on>0&&--this._on===0&&(On=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ov(){return On}let Et;const $c=new WeakSet;class qm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,On&&On.active&&On.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$c.has(this)&&($c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jh(this),Km(this);const e=Et,t=Ai;Et=this,Ai=!0;try{return this.fn()}finally{Zm(this),Et=e,Ai=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kf(e);this.deps=this.depsTail=void 0,Jh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$u(this)&&this.run()}get dirty(){return $u(this)}}let $m=0,aa,la;function jm(i,e=!1){if(i.flags|=8,e){i.next=la,la=i;return}i.next=aa,aa=i}function $f(){$m++}function jf(){if(--$m>0)return;if(la){let e=la;for(la=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;aa;){let e=aa;for(aa=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function Km(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zm(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Kf(n),av(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function $u(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function Jm(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Ca)||(i.globalVersion=Ca,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!$u(i))))return;i.flags|=2;const e=i.dep,t=Et,n=Ai;Et=i,Ai=!0;try{Km(i);const r=i.fn(i._value);(e.version===0||Cr(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Et=t,Ai=n,Zm(i),i.flags&=-3}}function Kf(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Kf(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function av(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let Ai=!0;const Qm=[];function ar(){Qm.push(Ai),Ai=!1}function lr(){const i=Qm.pop();Ai=i===void 0?!0:i}function Jh(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Ca=0;class lv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Ai||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new lv(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,e_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=n)}return t}trigger(e){this.version++,Ca++,this.notify(e)}notify(e){$f();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{jf()}}}function e_(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)e_(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const ju=new WeakMap,hs=Symbol(""),Ku=Symbol(""),Pa=Symbol("");function dn(i,e,t){if(Ai&&Et){let n=ju.get(i);n||ju.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Zf),r.map=n,r.key=t),r.track()}}function nr(i,e,t,n,r,s){const a=ju.get(i);if(!a){Ca++;return}const o=l=>{l&&l.trigger()};if($f(),e==="clear")a.forEach(o);else{const l=je(i),c=l&&Xf(t);if(l&&t==="length"){const u=Number(n);a.forEach((f,d)=>{(d==="length"||d===Pa||!kr(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Pa)),e){case"add":l?c&&o(a.get("length")):(o(a.get(hs)),uo(i)&&o(a.get(Ku)));break;case"delete":l||(o(a.get(hs)),uo(i)&&o(a.get(Ku)));break;case"set":uo(i)&&o(a.get(hs));break}}jf()}function Us(i){const e=ht(i);return e===i?e:(dn(e,"iterate",Pa),wi(i)?e:e.map(Rn))}function Jf(i){return dn(i=ht(i),"iterate",Pa),i}const cv={__proto__:null,[Symbol.iterator](){return jc(this,Symbol.iterator,Rn)},concat(...i){return Us(this).concat(...i.map(e=>je(e)?Us(e):e))},entries(){return jc(this,"entries",i=>(i[1]=Rn(i[1]),i))},every(i,e){return Xi(this,"every",i,e,void 0,arguments)},filter(i,e){return Xi(this,"filter",i,e,t=>t.map(Rn),arguments)},find(i,e){return Xi(this,"find",i,e,Rn,arguments)},findIndex(i,e){return Xi(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Xi(this,"findLast",i,e,Rn,arguments)},findLastIndex(i,e){return Xi(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Xi(this,"forEach",i,e,void 0,arguments)},includes(...i){return Kc(this,"includes",i)},indexOf(...i){return Kc(this,"indexOf",i)},join(i){return Us(this).join(i)},lastIndexOf(...i){return Kc(this,"lastIndexOf",i)},map(i,e){return Xi(this,"map",i,e,void 0,arguments)},pop(){return Go(this,"pop")},push(...i){return Go(this,"push",i)},reduce(i,...e){return Qh(this,"reduce",i,e)},reduceRight(i,...e){return Qh(this,"reduceRight",i,e)},shift(){return Go(this,"shift")},some(i,e){return Xi(this,"some",i,e,void 0,arguments)},splice(...i){return Go(this,"splice",i)},toReversed(){return Us(this).toReversed()},toSorted(i){return Us(this).toSorted(i)},toSpliced(...i){return Us(this).toSpliced(...i)},unshift(...i){return Go(this,"unshift",i)},values(){return jc(this,"values",Rn)}};function jc(i,e,t){const n=Jf(i),r=n[e]();return n!==i&&!wi(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const uv=Array.prototype;function Xi(i,e,t,n,r,s){const a=Jf(i),o=a!==i&&!wi(i),l=a[e];if(l!==uv[e]){const f=l.apply(i,s);return o?Rn(f):f}let c=t;a!==i&&(o?c=function(f,d){return t.call(this,Rn(f),d,i)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,i)}));const u=l.call(a,c,n);return o&&r?r(u):u}function Qh(i,e,t,n){const r=Jf(i);let s=t;return r!==i&&(wi(i)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,i)}):s=function(a,o,l){return t.call(this,a,Rn(o),l,i)}),r[e](s,...n)}function Kc(i,e,t){const n=ht(i);dn(n,"iterate",Pa);const r=n[e](...t);return(r===-1||r===!1)&&nh(t[0])?(t[0]=ht(t[0]),n[e](...t)):r}function Go(i,e,t=[]){ar(),$f();const n=ht(i)[e].apply(i,t);return jf(),lr(),n}const fv=kf("__proto__,__v_isRef,__isVue"),t_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(kr));function hv(i){kr(i)||(i=String(i));const e=ht(this);return dn(e,"has",i),e.hasOwnProperty(i)}class n_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?yv:o_:s?s_:r_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=je(e);if(!r){let l;if(a&&(l=cv[t]))return l;if(t==="hasOwnProperty")return hv}const o=Reflect.get(e,t,_n(e)?e:n);if((kr(t)?t_.has(t):fv(t))||(r||dn(e,"get",t),s))return o;if(_n(o)){const l=a&&Xf(t)?o:o.value;return r&&Dt(l)?Ju(l):l}return Dt(o)?r?Ju(o):eh(o):o}}class i_ extends n_{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=Es(s);if(!wi(n)&&!Es(n)&&(s=ht(s),n=ht(n)),!je(e)&&_n(s)&&!_n(n))return l||(s.value=n),!0}const a=je(e)&&Xf(t)?Number(t)<e.length:dt(e,t),o=Reflect.set(e,t,n,_n(e)?e:r);return e===ht(r)&&(a?Cr(n,s)&&nr(e,"set",t,n):nr(e,"add",t,n)),o}deleteProperty(e,t){const n=dt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&nr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!kr(t)||!t_.has(t))&&dn(e,"has",t),n}ownKeys(e){return dn(e,"iterate",je(e)?"length":hs),Reflect.ownKeys(e)}}class dv extends n_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const pv=new i_,mv=new dv,_v=new i_(!0);const Zu=i=>i,Za=i=>Reflect.getPrototypeOf(i);function gv(i,e,t){return function(...n){const r=this.__v_raw,s=ht(r),a=uo(s),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=r[i](...n),u=t?Zu:e?Qu:Rn;return!e&&dn(s,"iterate",l?Ku:hs),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ja(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function vv(i,e){const t={get(r){const s=this.__v_raw,a=ht(s),o=ht(r);i||(Cr(r,o)&&dn(a,"get",r),dn(a,"get",o));const{has:l}=Za(a),c=e?Zu:i?Qu:Rn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!i&&dn(ht(r),"iterate",hs),r.size},has(r){const s=this.__v_raw,a=ht(s),o=ht(r);return i||(Cr(r,o)&&dn(a,"has",r),dn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=ht(o),c=e?Zu:i?Qu:Rn;return!i&&dn(l,"iterate",hs),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return In(t,i?{add:Ja("add"),set:Ja("set"),delete:Ja("delete"),clear:Ja("clear")}:{add(r){!e&&!wi(r)&&!Es(r)&&(r=ht(r));const s=ht(this);return Za(s).has.call(s,r)||(s.add(r),nr(s,"add",r,r)),this},set(r,s){!e&&!wi(s)&&!Es(s)&&(s=ht(s));const a=ht(this),{has:o,get:l}=Za(a);let c=o.call(a,r);c||(r=ht(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Cr(s,u)&&nr(a,"set",r,s):nr(a,"add",r,s),this},delete(r){const s=ht(this),{has:a,get:o}=Za(s);let l=a.call(s,r);l||(r=ht(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&nr(s,"delete",r,void 0),c},clear(){const r=ht(this),s=r.size!==0,a=r.clear();return s&&nr(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gv(r,i,e)}),t}function Qf(i,e){const t=vv(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(dt(t,r)&&r in n?t:n,r,s)}const xv={get:Qf(!1,!1)},Mv={get:Qf(!1,!0)},Sv={get:Qf(!0,!1)};const r_=new WeakMap,s_=new WeakMap,o_=new WeakMap,yv=new WeakMap;function Ev(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tv(i){return i.__v_skip||!Object.isExtensible(i)?0:Ev(j0(i))}function eh(i){return Es(i)?i:th(i,!1,pv,xv,r_)}function bv(i){return th(i,!1,_v,Mv,s_)}function Ju(i){return th(i,!0,mv,Sv,o_)}function th(i,e,t,n,r){if(!Dt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=Tv(i);if(s===0)return i;const a=r.get(i);if(a)return a;const o=new Proxy(i,s===2?n:t);return r.set(i,o),o}function ca(i){return Es(i)?ca(i.__v_raw):!!(i&&i.__v_isReactive)}function Es(i){return!!(i&&i.__v_isReadonly)}function wi(i){return!!(i&&i.__v_isShallow)}function nh(i){return i?!!i.__v_raw:!1}function ht(i){const e=i&&i.__v_raw;return e?ht(e):i}function Av(i){return!dt(i,"__v_skip")&&Object.isExtensible(i)&&km(i,"__v_skip",!0),i}const Rn=i=>Dt(i)?eh(i):i,Qu=i=>Dt(i)?Ju(i):i;function _n(i){return i?i.__v_isRef===!0:!1}function Nl(i){return wv(i,!1)}function wv(i,e){return _n(i)?i:new Rv(i,e)}class Rv{constructor(e,t){this.dep=new Zf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:Rn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||wi(e)||Es(e);e=n?e:ht(e),Cr(e,t)&&(this._rawValue=e,this._value=n?e:Rn(e),this.dep.trigger())}}function Cv(i){return _n(i)?i.value:i}const Pv={get:(i,e,t)=>e==="__v_raw"?i:Cv(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return _n(r)&&!_n(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function a_(i){return ca(i)?i:new Proxy(i,Pv)}class Lv{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return jm(this,!0),!0}get value(){const e=this.dep.track();return Jm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dv(i,e,t=!1){let n,r;return Qe(i)?n=i:(n=i.get,r=i.set),new Lv(n,r,t)}const Qa={},Kl=new WeakMap;let es;function Uv(i,e=!1,t=es){if(t){let n=Kl.get(t);n||Kl.set(t,n=[]),n.push(i)}}function Iv(i,e,t=Tt){const{immediate:n,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=E=>r?E:wi(E)||r===!1||r===0?Sr(E,1):Sr(E);let u,f,d,h,g=!1,_=!1;if(_n(i)?(f=()=>i.value,g=wi(i)):ca(i)?(f=()=>c(i),g=!0):je(i)?(_=!0,g=i.some(E=>ca(E)||wi(E)),f=()=>i.map(E=>{if(_n(E))return E.value;if(ca(E))return c(E);if(Qe(E))return l?l(E,2):E()})):Qe(i)?e?f=l?()=>l(i,2):i:f=()=>{if(d){ar();try{d()}finally{lr()}}const E=es;es=u;try{return l?l(i,3,[h]):i(h)}finally{es=E}}:f=Hi,e&&r){const E=f,C=r===!0?1/0:r;f=()=>Sr(E(),C)}const m=ov(),p=()=>{u.stop(),m&&m.active&&Wf(m.effects,u)};if(s&&e){const E=e;e=(...C)=>{E(...C),p()}}let S=_?new Array(i.length).fill(Qa):Qa;const v=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const C=u.run();if(r||g||(_?C.some((R,A)=>Cr(R,S[A])):Cr(C,S))){d&&d();const R=es;es=u;try{const A=[C,S===Qa?void 0:_&&S[0]===Qa?[]:S,h];S=C,l?l(e,3,A):e(...A)}finally{es=R}}}else u.run()};return o&&o(v),u=new qm(f),u.scheduler=a?()=>a(v,!1):v,h=E=>Uv(E,!1,u),d=u.onStop=()=>{const E=Kl.get(u);if(E){if(l)l(E,4);else for(const C of E)C();Kl.delete(u)}},e?n?v(!0):S=u.run():a?a(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Sr(i,e=1/0,t){if(e<=0||!Dt(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,_n(i))Sr(i.value,e,t);else if(je(i))for(let n=0;n<i.length;n++)Sr(i[n],e,t);else if(Fm(i)||uo(i))i.forEach(n=>{Sr(n,e,t)});else if(Hm(i)){for(const n in i)Sr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Sr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ya(i,e,t,n){try{return n?i(...n):i()}catch(r){Rc(r,e,t)}}function Vi(i,e,t,n){if(Qe(i)){const r=Ya(i,e,t,n);return r&&Bm(r)&&r.catch(s=>{Rc(s,e,t)}),r}if(je(i)){const r=[];for(let s=0;s<i.length;s++)r.push(Vi(i[s],e,t,n));return r}}function Rc(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Tt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}o=o.parent}if(s){ar(),Ya(s,null,10,[i,l,c]),lr();return}}Ov(i,t,r,n,a)}function Ov(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Cn=[];let Pi=-1;const fo=[];let xr=null,eo=0;const l_=Promise.resolve();let Zl=null;function Nv(i){const e=Zl||l_;return i?e.then(this?i.bind(this):i):e}function Fv(i){let e=Pi+1,t=Cn.length;for(;e<t;){const n=e+t>>>1,r=Cn[n],s=La(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function ih(i){if(!(i.flags&1)){const e=La(i),t=Cn[Cn.length-1];!t||!(i.flags&2)&&e>=La(t)?Cn.push(i):Cn.splice(Fv(e),0,i),i.flags|=1,c_()}}function c_(){Zl||(Zl=l_.then(f_))}function Bv(i){je(i)?fo.push(...i):xr&&i.id===-1?xr.splice(eo+1,0,i):i.flags&1||(fo.push(i),i.flags|=1),c_()}function ed(i,e,t=Pi+1){for(;t<Cn.length;t++){const n=Cn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Cn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function u_(i){if(fo.length){const e=[...new Set(fo)].sort((t,n)=>La(t)-La(n));if(fo.length=0,xr){xr.push(...e);return}for(xr=e,eo=0;eo<xr.length;eo++){const t=xr[eo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}xr=null,eo=0}}const La=i=>i.id==null?i.flags&2?-1:1/0:i.id;function f_(i){try{for(Pi=0;Pi<Cn.length;Pi++){const e=Cn[Pi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ya(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pi<Cn.length;Pi++){const e=Cn[Pi];e&&(e.flags&=-2)}Pi=-1,Cn.length=0,u_(),Zl=null,(Cn.length||fo.length)&&f_()}}let Fi=null,h_=null;function Jl(i){const e=Fi;return Fi=i,h_=i&&i.type.__scopeId||null,e}function zv(i,e=Fi,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&ud(-1);const s=Jl(e);let a;try{a=i(...r)}finally{Jl(s),n._d&&ud(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Yr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(ar(),Vi(l,t,8,[i.el,o,i,e]),lr())}}const Hv=Symbol("_vte"),Gv=i=>i.__isTeleport,kv=Symbol("_leaveCb");function rh(i,e){i.shapeFlag&6&&i.component?(i.transition=e,rh(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function d_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}const Ql=new WeakMap;function ua(i,e,t,n,r=!1){if(je(i)){i.forEach((g,_)=>ua(g,e&&(je(e)?e[_]:e),t,n,r));return}if(fa(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&ua(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?uh(n.component):n.el,a=r?null:s,{i:o,r:l}=i,c=e&&e.r,u=o.refs===Tt?o.refs={}:o.refs,f=o.setupState,d=ht(f),h=f===Tt?Nm:g=>dt(d,g);if(c!=null&&c!==l){if(td(e),Kt(c))u[c]=null,h(c)&&(f[c]=null);else if(_n(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Qe(l))Ya(l,o,12,[a,u]);else{const g=Kt(l),_=_n(l);if(g||_){const m=()=>{if(i.f){const p=g?h(l)?f[l]:u[l]:l.value;if(r)je(p)&&Wf(p,s);else if(je(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],h(l)&&(f[l]=u[l]);else{const S=[s];l.value=S,i.k&&(u[i.k]=S)}}else g?(u[l]=a,h(l)&&(f[l]=a)):_&&(l.value=a,i.k&&(u[i.k]=a))};if(a){const p=()=>{m(),Ql.delete(i)};p.id=-1,Ql.set(i,p),Yn(p,t)}else td(i),m()}}}function td(i){const e=Ql.get(i);e&&(e.flags|=8,Ql.delete(i))}wc().requestIdleCallback;wc().cancelIdleCallback;const fa=i=>!!i.type.__asyncLoader,p_=i=>i.type.__isKeepAlive;function Vv(i,e){m_(i,"a",e)}function Wv(i,e){m_(i,"da",e)}function m_(i,e,t=Ln){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Cc(e,n,t),t){let r=t.parent;for(;r&&r.parent;)p_(r.parent.vnode)&&Xv(n,e,t,r),r=r.parent}}function Xv(i,e,t,n){const r=Cc(e,i,n,!0);__(()=>{Wf(n[e],r)},t)}function Cc(i,e,t=Ln,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{ar();const o=qa(t),l=Vi(e,t,i,a);return o(),lr(),l});return n?r.unshift(s):r.push(s),s}}const hr=i=>(e,t=Ln)=>{(!Ua||i==="sp")&&Cc(i,(...n)=>e(...n),t)},Yv=hr("bm"),sh=hr("m"),qv=hr("bu"),$v=hr("u"),oh=hr("bum"),__=hr("um"),jv=hr("sp"),Kv=hr("rtg"),Zv=hr("rtc");function Jv(i,e=Ln){Cc("ec",i,e)}const Qv=Symbol.for("v-ndc"),ef=i=>i?F_(i)?uh(i):ef(i.parent):null,ha=In(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ef(i.parent),$root:i=>ef(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>v_(i),$forceUpdate:i=>i.f||(i.f=()=>{ih(i.update)}),$nextTick:i=>i.n||(i.n=Nv.bind(i.proxy)),$watch:i=>Sx.bind(i)}),Zc=(i,e)=>i!==Tt&&!i.__isScriptSetup&&dt(i,e),ex={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Zc(n,e))return a[e]=1,n[e];if(r!==Tt&&dt(r,e))return a[e]=2,r[e];if((c=i.propsOptions[0])&&dt(c,e))return a[e]=3,s[e];if(t!==Tt&&dt(t,e))return a[e]=4,t[e];tf&&(a[e]=0)}}const u=ha[e];let f,d;if(u)return e==="$attrs"&&dn(i.attrs,"get",""),u(i);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Tt&&dt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,dt(d,e))return d[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Zc(r,e)?(r[e]=t,!0):n!==Tt&&dt(n,e)?(n[e]=t,!0):dt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s,type:a}},o){let l,c;return!!(t[o]||i!==Tt&&o[0]!=="$"&&dt(i,o)||Zc(e,o)||(l=s[0])&&dt(l,o)||dt(n,o)||dt(ha,o)||dt(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:dt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function nd(i){return je(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let tf=!0;function tx(i){const e=v_(i),t=i.proxy,n=i.ctx;tf=!1,e.beforeCreate&&id(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:v,unmounted:E,render:C,renderTracked:R,renderTriggered:A,errorCaptured:F,serverPrefetch:M,expose:b,inheritAttrs:G,components:O,directives:$,filters:U}=e;if(c&&nx(c,n,null),a)for(const k in a){const V=a[k];Qe(V)&&(n[k]=V.bind(t))}if(r){const k=r.call(t,t);Dt(k)&&(i.data=eh(k))}if(tf=!0,s)for(const k in s){const V=s[k],Q=Qe(V)?V.bind(t,t):Qe(V.get)?V.get.bind(t,t):Hi,P=!Qe(V)&&Qe(V.set)?V.set.bind(t):Hi,se=Yx({get:Q,set:P});Object.defineProperty(n,k,{enumerable:!0,configurable:!0,get:()=>se.value,set:fe=>se.value=fe})}if(o)for(const k in o)g_(o[k],n,t,k);if(l){const k=Qe(l)?l.call(t):l;Reflect.ownKeys(k).forEach(V=>{lx(V,k[V])})}u&&id(u,i,"c");function H(k,V){je(V)?V.forEach(Q=>k(Q.bind(t))):V&&k(V.bind(t))}if(H(Yv,f),H(sh,d),H(qv,h),H($v,g),H(Vv,_),H(Wv,m),H(Jv,F),H(Zv,R),H(Kv,A),H(oh,S),H(__,E),H(jv,M),je(b))if(b.length){const k=i.exposed||(i.exposed={});b.forEach(V=>{Object.defineProperty(k,V,{get:()=>t[V],set:Q=>t[V]=Q,enumerable:!0})})}else i.exposed||(i.exposed={});C&&i.render===Hi&&(i.render=C),G!=null&&(i.inheritAttrs=G),O&&(i.components=O),$&&(i.directives=$),M&&d_(i)}function nx(i,e,t=Hi){je(i)&&(i=nf(i));for(const n in i){const r=i[n];let s;Dt(r)?"default"in r?s=Fl(r.from||n,r.default,!0):s=Fl(r.from||n):s=Fl(r),_n(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[n]=s}}function id(i,e,t){Vi(je(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function g_(i,e,t,n){let r=n.includes(".")?L_(t,n):()=>t[n];if(Kt(i)){const s=e[i];Qe(s)&&Qc(r,s)}else if(Qe(i))Qc(r,i.bind(t));else if(Dt(i))if(je(i))i.forEach(s=>g_(s,e,t,n));else{const s=Qe(i.handler)?i.handler.bind(t):e[i.handler];Qe(s)&&Qc(r,s,i)}}function v_(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=i.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ec(l,c,a,!0)),ec(l,e,a)),Dt(e)&&s.set(e,l),l}function ec(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ec(i,s,t,!0),r&&r.forEach(a=>ec(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=ix[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const ix={data:rd,props:sd,emits:sd,methods:Jo,computed:Jo,beforeCreate:Mn,created:Mn,beforeMount:Mn,mounted:Mn,beforeUpdate:Mn,updated:Mn,beforeDestroy:Mn,beforeUnmount:Mn,destroyed:Mn,unmounted:Mn,activated:Mn,deactivated:Mn,errorCaptured:Mn,serverPrefetch:Mn,components:Jo,directives:Jo,watch:sx,provide:rd,inject:rx};function rd(i,e){return e?i?function(){return In(Qe(i)?i.call(this,this):i,Qe(e)?e.call(this,this):e)}:e:i}function rx(i,e){return Jo(nf(i),nf(e))}function nf(i){if(je(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Mn(i,e){return i?[...new Set([].concat(i,e))]:e}function Jo(i,e){return i?In(Object.create(null),i,e):e}function sd(i,e){return i?je(i)&&je(e)?[...new Set([...i,...e])]:In(Object.create(null),nd(i),nd(e??{})):e}function sx(i,e){if(!i)return e;if(!e)return i;const t=In(Object.create(null),i);for(const n in e)t[n]=Mn(i[n],e[n]);return t}function x_(){return{app:null,config:{isNativeTag:Nm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ox=0;function ax(i,e){return function(n,r=null){Qe(n)||(n=In({},n)),r!=null&&!Dt(r)&&(r=null);const s=x_(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:ox++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:qx,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Qe(u.install)?(a.add(u),u.install(c,...f)):Qe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Gi(n,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),i(h,u,d),l=!0,c._container=u,u.__vue_app__=c,uh(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Vi(o,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ho;ho=c;try{return u()}finally{ho=f}}};return c}}let ho=null;function lx(i,e){if(Ln){let t=Ln.provides;const n=Ln.parent&&Ln.parent.provides;n===t&&(t=Ln.provides=Object.create(n)),t[i]=e}}function Fl(i,e,t=!1){const n=Hx();if(n||ho){let r=ho?ho._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Qe(e)?e.call(n&&n.proxy):e}}const M_={},S_=()=>Object.create(M_),y_=i=>Object.getPrototypeOf(i)===M_;function cx(i,e,t,n=!1){const r={},s=S_();i.propsDefaults=Object.create(null),E_(i,e,r,s);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);t?i.props=n?r:bv(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function ux(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=i,o=ht(r),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Pc(i.emitsOptions,d))continue;const h=e[d];if(l)if(dt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=Nr(d);r[g]=rf(l,o,g,h,i,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{E_(i,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!dt(e,f)&&((u=Ps(f))===f||!dt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=rf(l,o,f,void 0,i,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!dt(e,f))&&(delete s[f],c=!0)}c&&nr(i.attrs,"set","")}function E_(i,e,t,n){const[r,s]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(oa(l))continue;const c=e[l];let u;r&&dt(r,u=Nr(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Pc(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=ht(t),c=o||Tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=rf(r,l,f,c[f],i,!dt(c,f))}}return a}function rf(i,e,t,n,r,s){const a=i[t];if(a!=null){const o=dt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=qa(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Ps(t))&&(n=!0))}return n}const fx=new WeakMap;function T_(i,e,t=!1){const n=t?fx:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,a={},o=[];let l=!1;if(!Qe(i)){const u=f=>{l=!0;const[d,h]=T_(f,e,!0);In(a,d),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Dt(i)&&n.set(i,co),co;if(je(s))for(let u=0;u<s.length;u++){const f=Nr(s[u]);od(f)&&(a[f]=Tt)}else if(s)for(const u in s){const f=Nr(u);if(od(f)){const d=s[u],h=a[f]=je(d)||Qe(d)?{type:d}:In({},d),g=h.type;let _=!1,m=!0;if(je(g))for(let p=0;p<g.length;++p){const S=g[p],v=Qe(S)&&S.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=Qe(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||dt(h,"default"))&&o.push(f)}}const c=[a,o];return Dt(i)&&n.set(i,c),c}function od(i){return i[0]!=="$"&&!oa(i)}const ah=i=>i==="_"||i==="_ctx"||i==="$stable",lh=i=>je(i)?i.map(Ui):[Ui(i)],hx=(i,e,t)=>{if(e._n)return e;const n=zv((...r)=>lh(e(...r)),t);return n._c=!1,n},b_=(i,e,t)=>{const n=i._ctx;for(const r in i){if(ah(r))continue;const s=i[r];if(Qe(s))e[r]=hx(r,s,n);else if(s!=null){const a=lh(s);e[r]=()=>a}}},A_=(i,e)=>{const t=lh(e);i.slots.default=()=>t},w_=(i,e,t)=>{for(const n in e)(t||!ah(n))&&(i[n]=e[n])},dx=(i,e,t)=>{const n=i.slots=S_();if(i.vnode.shapeFlag&32){const r=e._;r?(w_(n,e,t),t&&km(n,"_",r,!0)):b_(e,n)}else e&&A_(i,e)},px=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,a=Tt;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:w_(r,e,t):(s=!e.$stable,b_(e,r)),a=e}else e&&(A_(i,e),a={default:1});if(s)for(const o in r)!ah(o)&&a[o]==null&&delete r[o]},Yn=Cx;function mx(i){return _x(i)}function _x(i,e){const t=wc();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Hi,insertStaticContent:g}=i,_=(y,I,B,K=null,Y=null,D=null,oe=void 0,T=null,x=!!I.dynamicChildren)=>{if(y===I)return;y&&!ko(y,I)&&(K=he(y),fe(y,Y,D,!0),y=null),I.patchFlag===-2&&(x=!1,I.dynamicChildren=null);const{type:L,ref:Z,shapeFlag:W}=I;switch(L){case Lc:m(y,I,B,K);break;case Fr:p(y,I,B,K);break;case eu:y==null&&S(I,B,K,oe);break;case er:O(y,I,B,K,Y,D,oe,T,x);break;default:W&1?C(y,I,B,K,Y,D,oe,T,x):W&6?$(y,I,B,K,Y,D,oe,T,x):(W&64||W&128)&&L.process(y,I,B,K,Y,D,oe,T,x,be)}Z!=null&&Y?ua(Z,y&&y.ref,D,I||y,!I):Z==null&&y&&y.ref!=null&&ua(y.ref,null,D,y,!0)},m=(y,I,B,K)=>{if(y==null)n(I.el=o(I.children),B,K);else{const Y=I.el=y.el;I.children!==y.children&&c(Y,I.children)}},p=(y,I,B,K)=>{y==null?n(I.el=l(I.children||""),B,K):I.el=y.el},S=(y,I,B,K)=>{[y.el,y.anchor]=g(y.children,I,B,K,y.el,y.anchor)},v=({el:y,anchor:I},B,K)=>{let Y;for(;y&&y!==I;)Y=d(y),n(y,B,K),y=Y;n(I,B,K)},E=({el:y,anchor:I})=>{let B;for(;y&&y!==I;)B=d(y),r(y),y=B;r(I)},C=(y,I,B,K,Y,D,oe,T,x)=>{I.type==="svg"?oe="svg":I.type==="math"&&(oe="mathml"),y==null?R(I,B,K,Y,D,oe,T,x):M(y,I,Y,D,oe,T,x)},R=(y,I,B,K,Y,D,oe,T)=>{let x,L;const{props:Z,shapeFlag:W,transition:q,dirs:re}=y;if(x=y.el=a(y.type,D,Z&&Z.is,Z),W&8?u(x,y.children):W&16&&F(y.children,x,null,K,Y,Jc(y,D),oe,T),re&&Yr(y,null,K,"created"),A(x,y,y.scopeId,oe,K),Z){for(const ce in Z)ce!=="value"&&!oa(ce)&&s(x,ce,null,Z[ce],D,K);"value"in Z&&s(x,"value",null,Z.value,D),(L=Z.onVnodeBeforeMount)&&Ci(L,K,y)}re&&Yr(y,null,K,"beforeMount");const ae=gx(Y,q);ae&&q.beforeEnter(x),n(x,I,B),((L=Z&&Z.onVnodeMounted)||ae||re)&&Yn(()=>{L&&Ci(L,K,y),ae&&q.enter(x),re&&Yr(y,null,K,"mounted")},Y)},A=(y,I,B,K,Y)=>{if(B&&h(y,B),K)for(let D=0;D<K.length;D++)h(y,K[D]);if(Y){let D=Y.subTree;if(I===D||U_(D.type)&&(D.ssContent===I||D.ssFallback===I)){const oe=Y.vnode;A(y,oe,oe.scopeId,oe.slotScopeIds,Y.parent)}}},F=(y,I,B,K,Y,D,oe,T,x=0)=>{for(let L=x;L<y.length;L++){const Z=y[L]=T?Mr(y[L]):Ui(y[L]);_(null,Z,I,B,K,Y,D,oe,T)}},M=(y,I,B,K,Y,D,oe)=>{const T=I.el=y.el;let{patchFlag:x,dynamicChildren:L,dirs:Z}=I;x|=y.patchFlag&16;const W=y.props||Tt,q=I.props||Tt;let re;if(B&&qr(B,!1),(re=q.onVnodeBeforeUpdate)&&Ci(re,B,I,y),Z&&Yr(I,y,B,"beforeUpdate"),B&&qr(B,!0),(W.innerHTML&&q.innerHTML==null||W.textContent&&q.textContent==null)&&u(T,""),L?b(y.dynamicChildren,L,T,B,K,Jc(I,Y),D):oe||V(y,I,T,null,B,K,Jc(I,Y),D,!1),x>0){if(x&16)G(T,W,q,B,Y);else if(x&2&&W.class!==q.class&&s(T,"class",null,q.class,Y),x&4&&s(T,"style",W.style,q.style,Y),x&8){const ae=I.dynamicProps;for(let ce=0;ce<ae.length;ce++){const ue=ae[ce],Me=W[ue],ie=q[ue];(ie!==Me||ue==="value")&&s(T,ue,Me,ie,Y,B)}}x&1&&y.children!==I.children&&u(T,I.children)}else!oe&&L==null&&G(T,W,q,B,Y);((re=q.onVnodeUpdated)||Z)&&Yn(()=>{re&&Ci(re,B,I,y),Z&&Yr(I,y,B,"updated")},K)},b=(y,I,B,K,Y,D,oe)=>{for(let T=0;T<I.length;T++){const x=y[T],L=I[T],Z=x.el&&(x.type===er||!ko(x,L)||x.shapeFlag&198)?f(x.el):B;_(x,L,Z,null,K,Y,D,oe,!0)}},G=(y,I,B,K,Y)=>{if(I!==B){if(I!==Tt)for(const D in I)!oa(D)&&!(D in B)&&s(y,D,I[D],null,Y,K);for(const D in B){if(oa(D))continue;const oe=B[D],T=I[D];oe!==T&&D!=="value"&&s(y,D,T,oe,Y,K)}"value"in B&&s(y,"value",I.value,B.value,Y)}},O=(y,I,B,K,Y,D,oe,T,x)=>{const L=I.el=y?y.el:o(""),Z=I.anchor=y?y.anchor:o("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:re}=I;re&&(T=T?T.concat(re):re),y==null?(n(L,B,K),n(Z,B,K),F(I.children||[],B,Z,Y,D,oe,T,x)):W>0&&W&64&&q&&y.dynamicChildren?(b(y.dynamicChildren,q,B,Y,D,oe,T),(I.key!=null||Y&&I===Y.subTree)&&R_(y,I,!0)):V(y,I,B,Z,Y,D,oe,T,x)},$=(y,I,B,K,Y,D,oe,T,x)=>{I.slotScopeIds=T,y==null?I.shapeFlag&512?Y.ctx.activate(I,B,K,oe,x):U(I,B,K,Y,D,oe,x):z(y,I,x)},U=(y,I,B,K,Y,D,oe)=>{const T=y.component=zx(y,K,Y);if(p_(y)&&(T.ctx.renderer=be),Gx(T,!1,oe),T.asyncDep){if(Y&&Y.registerDep(T,H,oe),!y.el){const x=T.subTree=Gi(Fr);p(null,x,I,B),y.placeholder=x.el}}else H(T,y,I,B,Y,D,oe)},z=(y,I,B)=>{const K=I.component=y.component;if(wx(y,I,B))if(K.asyncDep&&!K.asyncResolved){k(K,I,B);return}else K.next=I,K.update();else I.el=y.el,K.vnode=I},H=(y,I,B,K,Y,D,oe)=>{const T=()=>{if(y.isMounted){let{next:W,bu:q,u:re,parent:ae,vnode:ce}=y;{const Se=C_(y);if(Se){W&&(W.el=ce.el,k(y,W,oe)),Se.asyncDep.then(()=>{y.isUnmounted||T()});return}}let ue=W,Me;qr(y,!1),W?(W.el=ce.el,k(y,W,oe)):W=ce,q&&Yc(q),(Me=W.props&&W.props.onVnodeBeforeUpdate)&&Ci(Me,ae,W,ce),qr(y,!0);const ie=ld(y),Fe=y.subTree;y.subTree=ie,_(Fe,ie,f(Fe.el),he(Fe),y,Y,D),W.el=ie.el,ue===null&&Rx(y,ie.el),re&&Yn(re,Y),(Me=W.props&&W.props.onVnodeUpdated)&&Yn(()=>Ci(Me,ae,W,ce),Y)}else{let W;const{el:q,props:re}=I,{bm:ae,m:ce,parent:ue,root:Me,type:ie}=y,Fe=fa(I);qr(y,!1),ae&&Yc(ae),!Fe&&(W=re&&re.onVnodeBeforeMount)&&Ci(W,ue,I),qr(y,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(ie);const Se=y.subTree=ld(y);_(null,Se,B,K,y,Y,D),I.el=Se.el}if(ce&&Yn(ce,Y),!Fe&&(W=re&&re.onVnodeMounted)){const Se=I;Yn(()=>Ci(W,ue,Se),Y)}(I.shapeFlag&256||ue&&fa(ue.vnode)&&ue.vnode.shapeFlag&256)&&y.a&&Yn(y.a,Y),y.isMounted=!0,I=B=K=null}};y.scope.on();const x=y.effect=new qm(T);y.scope.off();const L=y.update=x.run.bind(x),Z=y.job=x.runIfDirty.bind(x);Z.i=y,Z.id=y.uid,x.scheduler=()=>ih(Z),qr(y,!0),L()},k=(y,I,B)=>{I.component=y;const K=y.vnode.props;y.vnode=I,y.next=null,ux(y,I.props,K,B),px(y,I.children,B),ar(),ed(y),lr()},V=(y,I,B,K,Y,D,oe,T,x=!1)=>{const L=y&&y.children,Z=y?y.shapeFlag:0,W=I.children,{patchFlag:q,shapeFlag:re}=I;if(q>0){if(q&128){P(L,W,B,K,Y,D,oe,T,x);return}else if(q&256){Q(L,W,B,K,Y,D,oe,T,x);return}}re&8?(Z&16&&ye(L,Y,D),W!==L&&u(B,W)):Z&16?re&16?P(L,W,B,K,Y,D,oe,T,x):ye(L,Y,D,!0):(Z&8&&u(B,""),re&16&&F(W,B,K,Y,D,oe,T,x))},Q=(y,I,B,K,Y,D,oe,T,x)=>{y=y||co,I=I||co;const L=y.length,Z=I.length,W=Math.min(L,Z);let q;for(q=0;q<W;q++){const re=I[q]=x?Mr(I[q]):Ui(I[q]);_(y[q],re,B,null,Y,D,oe,T,x)}L>Z?ye(y,Y,D,!0,!1,W):F(I,B,K,Y,D,oe,T,x,W)},P=(y,I,B,K,Y,D,oe,T,x)=>{let L=0;const Z=I.length;let W=y.length-1,q=Z-1;for(;L<=W&&L<=q;){const re=y[L],ae=I[L]=x?Mr(I[L]):Ui(I[L]);if(ko(re,ae))_(re,ae,B,null,Y,D,oe,T,x);else break;L++}for(;L<=W&&L<=q;){const re=y[W],ae=I[q]=x?Mr(I[q]):Ui(I[q]);if(ko(re,ae))_(re,ae,B,null,Y,D,oe,T,x);else break;W--,q--}if(L>W){if(L<=q){const re=q+1,ae=re<Z?I[re].el:K;for(;L<=q;)_(null,I[L]=x?Mr(I[L]):Ui(I[L]),B,ae,Y,D,oe,T,x),L++}}else if(L>q)for(;L<=W;)fe(y[L],Y,D,!0),L++;else{const re=L,ae=L,ce=new Map;for(L=ae;L<=q;L++){const _e=I[L]=x?Mr(I[L]):Ui(I[L]);_e.key!=null&&ce.set(_e.key,L)}let ue,Me=0;const ie=q-ae+1;let Fe=!1,Se=0;const Oe=new Array(ie);for(L=0;L<ie;L++)Oe[L]=0;for(L=re;L<=W;L++){const _e=y[L];if(Me>=ie){fe(_e,Y,D,!0);continue}let we;if(_e.key!=null)we=ce.get(_e.key);else for(ue=ae;ue<=q;ue++)if(Oe[ue-ae]===0&&ko(_e,I[ue])){we=ue;break}we===void 0?fe(_e,Y,D,!0):(Oe[we-ae]=L+1,we>=Se?Se=we:Fe=!0,_(_e,I[we],B,null,Y,D,oe,T,x),Me++)}const Ae=Fe?vx(Oe):co;for(ue=Ae.length-1,L=ie-1;L>=0;L--){const _e=ae+L,we=I[_e],Ke=I[_e+1],lt=_e+1<Z?Ke.el||Ke.placeholder:K;Oe[L]===0?_(null,we,B,lt,Y,D,oe,T,x):Fe&&(ue<0||L!==Ae[ue]?se(we,B,lt,2):ue--)}}},se=(y,I,B,K,Y=null)=>{const{el:D,type:oe,transition:T,children:x,shapeFlag:L}=y;if(L&6){se(y.component.subTree,I,B,K);return}if(L&128){y.suspense.move(I,B,K);return}if(L&64){oe.move(y,I,B,be);return}if(oe===er){n(D,I,B);for(let W=0;W<x.length;W++)se(x[W],I,B,K);n(y.anchor,I,B);return}if(oe===eu){v(y,I,B);return}if(K!==2&&L&1&&T)if(K===0)T.beforeEnter(D),n(D,I,B),Yn(()=>T.enter(D),Y);else{const{leave:W,delayLeave:q,afterLeave:re}=T,ae=()=>{y.ctx.isUnmounted?r(D):n(D,I,B)},ce=()=>{D._isLeaving&&D[kv](!0),W(D,()=>{ae(),re&&re()})};q?q(D,ae,ce):ce()}else n(D,I,B)},fe=(y,I,B,K=!1,Y=!1)=>{const{type:D,props:oe,ref:T,children:x,dynamicChildren:L,shapeFlag:Z,patchFlag:W,dirs:q,cacheIndex:re}=y;if(W===-2&&(Y=!1),T!=null&&(ar(),ua(T,null,B,y,!0),lr()),re!=null&&(I.renderCache[re]=void 0),Z&256){I.ctx.deactivate(y);return}const ae=Z&1&&q,ce=!fa(y);let ue;if(ce&&(ue=oe&&oe.onVnodeBeforeUnmount)&&Ci(ue,I,y),Z&6)de(y.component,B,K);else{if(Z&128){y.suspense.unmount(B,K);return}ae&&Yr(y,null,I,"beforeUnmount"),Z&64?y.type.remove(y,I,B,be,K):L&&!L.hasOnce&&(D!==er||W>0&&W&64)?ye(L,I,B,!1,!0):(D===er&&W&384||!Y&&Z&16)&&ye(x,I,B),K&&ne(y)}(ce&&(ue=oe&&oe.onVnodeUnmounted)||ae)&&Yn(()=>{ue&&Ci(ue,I,y),ae&&Yr(y,null,I,"unmounted")},B)},ne=y=>{const{type:I,el:B,anchor:K,transition:Y}=y;if(I===er){le(B,K);return}if(I===eu){E(y);return}const D=()=>{r(B),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(y.shapeFlag&1&&Y&&!Y.persisted){const{leave:oe,delayLeave:T}=Y,x=()=>oe(B,D);T?T(y.el,D,x):x()}else D()},le=(y,I)=>{let B;for(;y!==I;)B=d(y),r(y),y=B;r(I)},de=(y,I,B)=>{const{bum:K,scope:Y,job:D,subTree:oe,um:T,m:x,a:L}=y;ad(x),ad(L),K&&Yc(K),Y.stop(),D&&(D.flags|=8,fe(oe,y,I,B)),T&&Yn(T,I),Yn(()=>{y.isUnmounted=!0},I)},ye=(y,I,B,K=!1,Y=!1,D=0)=>{for(let oe=D;oe<y.length;oe++)fe(y[oe],I,B,K,Y)},he=y=>{if(y.shapeFlag&6)return he(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const I=d(y.anchor||y.el),B=I&&I[Hv];return B?d(B):I};let Le=!1;const Pe=(y,I,B)=>{y==null?I._vnode&&fe(I._vnode,null,null,!0):_(I._vnode||null,y,I,null,null,null,B),I._vnode=y,Le||(Le=!0,ed(),u_(),Le=!1)},be={p:_,um:fe,m:se,r:ne,mt:U,mc:F,pc:V,pbc:b,n:he,o:i};return{render:Pe,hydrate:void 0,createApp:ax(Pe)}}function Jc({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qr({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function gx(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function R_(i,e,t=!1){const n=i.children,r=e.children;if(je(n)&&je(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Mr(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&R_(a,o)),o.type===Lc&&o.patchFlag!==-1&&(o.el=a.el),o.type===Fr&&!o.el&&(o.el=a.el)}}function vx(i){const e=i.slice(),t=[0];let n,r,s,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,i[t[o]]<c?s=o+1:a=o;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function C_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:C_(e)}function ad(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const xx=Symbol.for("v-scx"),Mx=()=>Fl(xx);function Qc(i,e,t){return P_(i,e,t)}function P_(i,e,t=Tt){const{immediate:n,deep:r,flush:s,once:a}=t,o=In({},t),l=e&&n||!e&&s!=="post";let c;if(Ua){if(s==="sync"){const h=Mx();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Hi,h.resume=Hi,h.pause=Hi,h}}const u=Ln;o.call=(h,g,_)=>Vi(h,u,g,_);let f=!1;s==="post"?o.scheduler=h=>{Yn(h,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(h,g)=>{g?h():ih(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Iv(i,e,o);return Ua&&(c?c.push(d):l&&d()),d}function Sx(i,e,t){const n=this.proxy,r=Kt(i)?i.includes(".")?L_(n,i):()=>n[i]:i.bind(n,n);let s;Qe(e)?s=e:(s=e.handler,t=e);const a=qa(this),o=P_(r,s.bind(n),t);return a(),o}function L_(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const yx=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Nr(e)}Modifiers`]||i[`${Ps(e)}Modifiers`];function Ex(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Tt;let r=t;const s=e.startsWith("update:"),a=s&&yx(n,e.slice(7));a&&(a.trim&&(r=t.map(u=>Kt(u)?u.trim():u)),a.number&&(r=t.map(J0)));let o,l=n[o=Xc(e)]||n[o=Xc(Nr(e))];!l&&s&&(l=n[o=Xc(Ps(e))]),l&&Vi(l,i,6,r);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Vi(c,i,6,r)}}const Tx=new WeakMap;function D_(i,e,t=!1){const n=t?Tx:e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let a={},o=!1;if(!Qe(i)){const l=c=>{const u=D_(c,e,!0);u&&(o=!0,In(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!o?(Dt(i)&&n.set(i,null),null):(je(s)?s.forEach(l=>a[l]=null):In(a,s),Dt(i)&&n.set(i,a),a)}function Pc(i,e){return!i||!Tc(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(i,e[0].toLowerCase()+e.slice(1))||dt(i,Ps(e))||dt(i,e))}function ld(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=i,m=Jl(i);let p,S;try{if(t.shapeFlag&4){const E=r||n,C=E;p=Ui(c.call(C,E,u,f,h,d,g)),S=o}else{const E=e;p=Ui(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),S=e.props?o:bx(o)}}catch(E){da.length=0,Rc(E,i,1),p=Gi(Fr)}let v=p;if(S&&_!==!1){const E=Object.keys(S),{shapeFlag:C}=v;E.length&&C&7&&(s&&E.some(Vf)&&(S=Ax(S,s)),v=yo(v,S,!1,!0))}return t.dirs&&(v=yo(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&rh(v,t.transition),p=v,Jl(m),p}const bx=i=>{let e;for(const t in i)(t==="class"||t==="style"||Tc(t))&&((e||(e={}))[t]=i[t]);return e},Ax=(i,e)=>{const t={};for(const n in i)(!Vf(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function wx(i,e,t){const{props:n,children:r,component:s}=i,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?cd(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==n[d]&&!Pc(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?cd(n,a,c):!0:!!a;return!1}function cd(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Pc(t,s))return!0}return!1}function Rx({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const U_=i=>i.__isSuspense;function Cx(i,e){e&&e.pendingBranch?je(i)?e.effects.push(...i):e.effects.push(i):Bv(i)}const er=Symbol.for("v-fgt"),Lc=Symbol.for("v-txt"),Fr=Symbol.for("v-cmt"),eu=Symbol.for("v-stc"),da=[];let ti=null;function tc(i=!1){da.push(ti=i?null:[])}function Px(){da.pop(),ti=da[da.length-1]||null}let Da=1;function ud(i,e=!1){Da+=i,i<0&&ti&&e&&(ti.hasOnce=!0)}function I_(i){return i.dynamicChildren=Da>0?ti||co:null,Px(),Da>0&&ti&&ti.push(i),i}function sf(i,e,t,n,r,s){return I_(Kn(i,e,t,n,r,s,!0))}function Lx(i,e,t,n,r){return I_(Gi(i,e,t,n,r,!0))}function O_(i){return i?i.__v_isVNode===!0:!1}function ko(i,e){return i.type===e.type&&i.key===e.key}const N_=({key:i})=>i??null,Bl=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Kt(i)||_n(i)||Qe(i)?{i:Fi,r:i,k:e,f:!!t}:i:null);function Kn(i,e=null,t=null,n=0,r=null,s=i===er?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&N_(e),ref:e&&Bl(e),scopeId:h_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Fi};return o?(ch(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Kt(t)?8:16),Da>0&&!a&&ti&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ti.push(l),l}const Gi=Dx;function Dx(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Qv)&&(i=Fr),O_(i)){const o=yo(i,e,!0);return t&&ch(o,t),Da>0&&!s&&ti&&(o.shapeFlag&6?ti[ti.indexOf(i)]=o:ti.push(o)),o.patchFlag=-2,o}if(Xx(i)&&(i=i.__vccOpts),e){e=Ux(e);let{class:o,style:l}=e;o&&!Kt(o)&&(e.class=qf(o)),Dt(l)&&(nh(l)&&!je(l)&&(l=In({},l)),e.style=Yf(l))}const a=Kt(i)?1:U_(i)?128:Gv(i)?64:Dt(i)?4:Qe(i)?2:0;return Kn(i,e,t,n,r,a,s,!0)}function Ux(i){return i?nh(i)||y_(i)?In({},i):i:null}function yo(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=i,c=e?Nx(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&N_(c),ref:e&&e.ref?t&&s?je(s)?s.concat(Bl(e)):[s,Bl(e)]:Bl(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==er?a===-1?16:a|16:a,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&yo(i.ssContent),ssFallback:i.ssFallback&&yo(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&rh(u,l.clone(u)),u}function Ix(i=" ",e=0){return Gi(Lc,null,i,e)}function Ox(i="",e=!1){return e?(tc(),Lx(Fr,null,i)):Gi(Fr,null,i)}function Ui(i){return i==null||typeof i=="boolean"?Gi(Fr):je(i)?Gi(er,null,i.slice()):O_(i)?Mr(i):Gi(Lc,null,String(i))}function Mr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:yo(i)}function ch(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),ch(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!y_(e)?e._ctx=Fi:r===3&&Fi&&(Fi.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Fi},t=32):(e=String(e),n&64?(t=16,e=[Ix(e)]):t=8);i.children=e,i.shapeFlag|=t}function Nx(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=qf([e.class,n.class]));else if(r==="style")e.style=Yf([e.style,n.style]);else if(Tc(r)){const s=e[r],a=n[r];a&&s!==a&&!(je(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function Ci(i,e,t,n=null){Vi(i,e,7,[t,n])}const Fx=x_();let Bx=0;function zx(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Fx,s={uid:Bx++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:T_(n,r),emitsOptions:D_(n,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:n.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ex.bind(null,s),i.ce&&i.ce(s),s}let Ln=null;const Hx=()=>Ln||Fi;let nc,of;{const i=wc(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};nc=e("__VUE_INSTANCE_SETTERS__",t=>Ln=t),of=e("__VUE_SSR_SETTERS__",t=>Ua=t)}const qa=i=>{const e=Ln;return nc(i),i.scope.on(),()=>{i.scope.off(),nc(e)}},fd=()=>{Ln&&Ln.scope.off(),nc(null)};function F_(i){return i.vnode.shapeFlag&4}let Ua=!1;function Gx(i,e=!1,t=!1){e&&of(e);const{props:n,children:r}=i.vnode,s=F_(i);cx(i,n,s,e),dx(i,r,t||e);const a=s?kx(i,e):void 0;return e&&of(!1),a}function kx(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,ex);const{setup:n}=t;if(n){ar();const r=i.setupContext=n.length>1?Wx(i):null,s=qa(i),a=Ya(n,i,0,[i.props,r]),o=Bm(a);if(lr(),s(),(o||i.sp)&&!fa(i)&&d_(i),o){if(a.then(fd,fd),e)return a.then(l=>{hd(i,l)}).catch(l=>{Rc(l,i,0)});i.asyncDep=a}else hd(i,a)}else B_(i)}function hd(i,e,t){Qe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Dt(e)&&(i.setupState=a_(e)),B_(i)}function B_(i,e,t){const n=i.type;i.render||(i.render=n.render||Hi);{const r=qa(i);ar();try{tx(i)}finally{lr(),r()}}}const Vx={get(i,e){return dn(i,"get",""),i[e]}};function Wx(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Vx),slots:i.slots,emit:i.emit,expose:e}}function uh(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(a_(Av(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ha)return ha[t](i)},has(e,t){return t in e||t in ha}})):i.proxy}function Xx(i){return Qe(i)&&"__vccOpts"in i}const Yx=(i,e)=>Dv(i,e,Ua),qx="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let af;const dd=typeof window<"u"&&window.trustedTypes;if(dd)try{af=dd.createPolicy("vue",{createHTML:i=>i})}catch{}const z_=af?i=>af.createHTML(i):i=>i,$x="http://www.w3.org/2000/svg",jx="http://www.w3.org/1998/Math/MathML",Ji=typeof document<"u"?document:null,pd=Ji&&Ji.createElement("template"),Kx={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Ji.createElementNS($x,i):e==="mathml"?Ji.createElementNS(jx,i):t?Ji.createElement(i,{is:t}):Ji.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Ji.createTextNode(i),createComment:i=>Ji.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ji.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{pd.innerHTML=z_(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const o=pd.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zx=Symbol("_vtc");function Jx(i,e,t){const n=i[Zx];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const md=Symbol("_vod"),Qx=Symbol("_vsh"),eM=Symbol(""),tM=/(?:^|;)\s*display\s*:/;function nM(i,e,t){const n=i.style,r=Kt(t);let s=!1;if(t&&!r){if(e)if(Kt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&zl(n,o,"")}else for(const a in e)t[a]==null&&zl(n,a,"");for(const a in t)a==="display"&&(s=!0),zl(n,a,t[a])}else if(r){if(e!==t){const a=n[eM];a&&(t+=";"+a),n.cssText=t,s=tM.test(t)}}else e&&i.removeAttribute("style");md in i&&(i[md]=s?n.display:"",i[Qx]&&(n.display="none"))}const _d=/\s*!important$/;function zl(i,e,t){if(je(t))t.forEach(n=>zl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=iM(i,e);_d.test(t)?i.setProperty(Ps(n),t.replace(_d,""),"important"):i[n]=t}}const gd=["Webkit","Moz","ms"],tu={};function iM(i,e){const t=tu[e];if(t)return t;let n=Nr(e);if(n!=="filter"&&n in i)return tu[e]=n;n=Gm(n);for(let r=0;r<gd.length;r++){const s=gd[r]+n;if(s in i)return tu[e]=s}return e}const vd="http://www.w3.org/1999/xlink";function xd(i,e,t,n,r,s=rv(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(vd,e.slice(6,e.length)):i.setAttributeNS(vd,e,t):t==null||s&&!Vm(t)?i.removeAttribute(e):i.setAttribute(e,s?"":kr(t)?String(t):t)}function Md(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?z_(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let a=!1;if(t===""||t==null){const o=typeof i[e];o==="boolean"?t=Vm(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(r||e)}function rM(i,e,t,n){i.addEventListener(e,t,n)}function sM(i,e,t,n){i.removeEventListener(e,t,n)}const Sd=Symbol("_vei");function oM(i,e,t,n,r=null){const s=i[Sd]||(i[Sd]={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=aM(e);if(n){const c=s[e]=uM(n,r);rM(i,o,c,l)}else a&&(sM(i,o,a,l),s[e]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function aM(i){let e;if(yd.test(i)){e={};let n;for(;n=i.match(yd);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ps(i.slice(2)),e]}let nu=0;const lM=Promise.resolve(),cM=()=>nu||(lM.then(()=>nu=0),nu=Date.now());function uM(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Vi(fM(n,t.value),e,5,[n])};return t.value=i,t.attached=cM(),t}function fM(i,e){if(je(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Ed=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,hM=(i,e,t,n,r,s)=>{const a=r==="svg";e==="class"?Jx(i,n,a):e==="style"?nM(i,t,n):Tc(e)?Vf(e)||oM(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dM(i,e,n,a))?(Md(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xd(i,e,n,a,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Kt(n))?Md(i,Nr(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),xd(i,e,n,a))};function dM(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Ed(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ed(e)&&Kt(t)?!1:e in i}const pM=In({patchProp:hM},Kx);let Td;function mM(){return Td||(Td=mx(pM))}const _M=(...i)=>{const e=mM().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=vM(n);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,gM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function gM(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function vM(i){return Kt(i)?document.querySelector(i):i}function Qi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function H_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Eo={duration:.5,overwrite:!1,delay:0},fh,an,Rt,pi=1e8,xt=1/pi,lf=Math.PI*2,xM=lf/4,MM=0,G_=Math.sqrt,SM=Math.cos,yM=Math.sin,rn=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},cr=function(e){return typeof e=="number"},hh=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},dh=function(){return typeof window<"u"},el=function(e){return It(e)||rn(e)},k_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,cf=/(?:-?\.?\d|\.)+/gi,V_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,W_=/[+-]=-?[.\d]+/,X_=/[^,'"\[\]\s]+/gi,EM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,Li,uf,ph,ri={},ic={},Y_,q_=function(e){return(ic=To(e,ri))&&kn},mh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ia=function(e,t){return!t&&console.warn(e)},$_=function(e,t){return e&&(ri[e]=t)&&ic&&(ic[e]=t)||ri},Oa=function(){return 0},TM={suppressEvents:!0,isStart:!0,kill:!1},Hl={suppressEvents:!0,kill:!1},bM={suppressEvents:!0},_h={},Pr=[],ff={},j_,jn={},ru={},bd=30,Gl=[],gh="",vh=function(e){var t=e[0],n,r;if(Wi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Gl.length;r--&&!Gl[r].targetTest(t););n=Gl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new xg(e[r],n)))||e.splice(r,1);return e},ds=function(e){return e._gsap||vh(mi(e))[0]._gsap},K_=function(e,t,n){return(n=e[t])&&It(n)?e[t]():hh(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},po=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},AM=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},rc=function(){var e=Pr.length,t=Pr.slice(0),n,r;for(ff={},Pr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},xh=function(e){return!!(e._initted||e._startAt||e.add)},Z_=function(e,t,n,r){Pr.length&&!an&&rc(),e.render(t,n,!!(an&&t<0&&xh(e))),Pr.length&&!an&&rc()},J_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(X_).length<2?t:rn(e)?e.trim():e},Q_=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wM=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},To=function(e,t){for(var n in t)e[n]=t[n];return e},Ad=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},sc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},pa=function(e){var t=e.parent||Pt,n=e.keyframes?wM(gn(e.keyframes)):si;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},RM=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},eg=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Dc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},CM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hf=function(e,t,n,r){return e._startAt&&(an?e._startAt.revert(Hl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},PM=function i(e){return!e||e._ts&&i(e.parent)},wd=function(e){return e._repeat?bo(e._tTime,e=e.duration()+e._rDelay)*e:0},bo=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},oc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uc=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},Ic=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uc(e),n._dirty||ps(n,e)),e},tg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=oc(e.rawTime(),t),(!t._dur||$a(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},Oi=function(e,t,n,r){return t.parent&&Br(t),t._start=kt((cr(n)?n:n||e!==Pt?ci(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),eg(e,t,"_first","_last",e._sort?"_start":0),df(t)||(e._recent=t),r||tg(e,t),e._ts<0&&Ic(e,e._tTime),e},ng=function(e,t){return(ri.ScrollTrigger||mh("scrollTrigger",t))&&ri.ScrollTrigger.create(t,e)},ig=function(e,t,n,r,s){if(Sh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&j_!==Qn.frame)return Pr.push(e),e._lazy=[s,r],1},LM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},df=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DM=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&LM(e)&&!(!e._initted&&df(e))||(e._ts<0||e._dp._ts<0)&&!df(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=$a(0,e._tDur,t),u=bo(l,o),e._yoyo&&u&1&&(a=1-a),u!==bo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||an||r||e._zTime===xt||!t&&e._zTime){if(!e._initted&&ig(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&hf(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Br(e,1),!n&&!an&&(ni(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},UM=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ao=function(e,t,n,r){var s=e._repeat,a=kt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:kt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Ic(e,e._tTime=e._tDur*o),e.parent&&Uc(e),n||ps(e.parent,e),e},Rd=function(e){return e instanceof Dn?ps(e):Ao(e,e._dur)},IM={_start:0,endTime:Oa,totalDuration:Oa},ci=function i(e,t,n){var r=e.labels,s=e._recent||IM,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,c;return rn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ma=function(e,t,n){var r=cr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;a.immediateRender=Fn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Gt(t[0],a,t[s+1])},Vr=function(e,t){return e||e===0?t(e):t},$a=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!rn(e)||!(t=EM.exec(e))?"":t[1]},OM=function(e,t,n){return Vr(n,function(r){return $a(e,t,r)})},pf=[].slice,rg=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Li},NM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return rn(r)&&!t||rg(r,1)?(s=n).push.apply(s,mi(r)):n.push(r)})||n},mi=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):rn(e)&&!n&&(uf||!wo())?pf.call((t||ph).querySelectorAll(e),0):gn(e)?NM(e,n):rg(e)?pf.call(e,0):e?[e]:[]},mf=function(e){return e=mi(e)[0]||Ia("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Ia("Invalid scope")||ph.createElement("div"):e)}},sg=function(e){return e.sort(function(){return .5-Math.random()})},og=function(e){if(It(e))return e;var t=Wi(e)?e:{each:e},n=ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return rn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(d,h,g){var _=(g||t).length,m=a[_],p,S,v,E,C,R,A,F,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,pi])[1],!M){for(A=-pi;A<(A=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*u-.5:r%M,S=M===pi?0:l?_*f/M-.5:r/M|0,A=0,F=pi,R=0;R<_;R++)v=R%M-p,E=S-(R/M|0),m[R]=C=c?Math.abs(c==="y"?E:v):G_(v*v+E*E),C>A&&(A=C),C<F&&(F=C);r==="random"&&sg(m),m.max=A-F,m.min=F,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=pn(t.amount||t.each)||0,n=n&&_<0?_g(n):n}return _=(m[d]-m.min)/m.max||0,kt(m.b+(n?n(_):_)*m.v)+m.u}},_f=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=kt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(cr(n)?0:pn(n))}},ag=function(e,t){var n=gn(e),r,s;return!n&&Wi(e)&&(r=n=e.radius||pi,e.values?(e=mi(e.values),(s=!cr(e[0]))&&(r*=r)):e=_f(e.increment)),Vr(t,n?It(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:a,s||u===a||cr(a)?u:u+pn(a)}:_f(e))},lg=function(e,t,n,r){return Vr(gn(e)?!t:n===!0?!!(n=0):!r,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},FM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},BM=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},zM=function(e,t,n){return ug(e,t,0,1,n)},cg=function(e,t,n){return Vr(n,function(r){return e[~~t(r)]})},HM=function i(e,t,n){var r=t-e;return gn(e)?cg(e,i(0,e.length),t):Vr(n,function(s){return(r+(s-e)%r)%r+e})},GM=function i(e,t,n){var r=t-e,s=r*2;return gn(e)?cg(e,i(0,e.length-1),t):Vr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Na=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?X_:cf),n+=e.substr(t,r-t)+lg(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},ug=function(e,t,n,r,s){var a=t-e,o=r-n;return Vr(s,function(l){return n+((l-e)/a*o||0)})},kM=function i(e,t,n,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=rn(e),o={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else r||(e=To(gn(e)?[]:{},e));if(!u){for(l in t)Mh.call(o,e,l,"get",t[l]);s=function(g){return Th(g,o)||(a?e.p:e)}}}return Vr(n,s)},Cd=function(e,t,n){var r=e.labels,s=pi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ni=function(e,t,n){var r=e.vars,s=r[t],a=Rt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Pr.length&&rc(),o&&(Rt=o),u=l?s.apply(c,l):s.call(c),Rt=a,u},Qo=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&ni(e,"onInterrupt"),e},so,fg=[],hg=function(e){if(e)if(e=!e.name&&e.default||e,dh()||e.headless){var t=e.name,n=It(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oa,render:Th,add:Mh,kill:rS,modifier:iS,rawVars:0},a={targetTest:0,get:0,getSetter:Eh,aliases:{},register:0};if(wo(),e!==r){if(jn[t])return;si(r,si(sc(e,s),a)),To(r.prototype,To(s,sc(e,a))),jn[r.prop=t]=r,e.targetTest&&(Gl.push(r),_h[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$_(t,r),e.register&&e.register(kn,r,zn)}else fg.push(e)},vt=255,ea={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},su=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},dg=function(e,t,n){var r=e?cr(e)?[e>>16,e>>8&vt,e&vt]:0:ea.black,s,a,o,l,c,u,f,d,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])r=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&vt,r&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(cf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=su(l+1/3,s,a),r[1]=su(l,s,a),r[2]=su(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(V_),n&&r.length<4&&(r[3]=1),r}else r=e.match(cf)||ea.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/vt,a=r[1]/vt,o=r[2]/vt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},pg=function(e){var t=[],n=[],r=-1;return e.split(Lr).forEach(function(s){var a=s.match(ro)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Pd=function(e,t,n){var r="",s=(e+r).match(Lr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=dg(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=pg(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Lr,"1").split(ro),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Lr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Lr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),VM=/hsl[a]?\(/,mg=function(e){var t=e.join(" "),n;if(Lr.lastIndex=0,Lr.test(t))return n=VM.test(t),e[1]=Pd(e[1],n),e[0]=Pd(e[0],n,pg(e[1])),!0},Fa,Qn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,g=function _(m){var p=i()-r,S=m===!0,v,E,C,R;if((p>e||p<0)&&(n+=p-t),r+=p,C=r-n,v=C-a,(v>0||S)&&(R=++f.frame,d=C-f.time*1e3,f.time=C=C/1e3,a+=v+(v>=s?4:s-v),E=1),S||(l=c(_)),E)for(h=0;h<o.length;h++)o[h](C,d,R,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Y_&&(!uf&&dh()&&(Li=uf=window,ph=Li.document||{},ri.gsap=kn,(Li.gsapVersions||(Li.gsapVersions=[])).push(kn.version),q_(ic||Li.GreenSockGlobals||!Li.gsap&&Li||{}),fg.forEach(hg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Fa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fa=0,c=Oa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,S){var v=p?function(E,C,R,A){m(E,C,R,A),f.remove(v)}:m;return f.remove(m),o[S?"unshift":"push"](v),wo(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f}(),wo=function(){return!Fa&&Qn.wake()},ot={},WM=/^[\d.\-M][\d.\-,\s]/,XM=/["']/g,YM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(XM,"").trim():+c,r=l.substr(o+1).trim();return t},qM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},$M=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[YM(t[1])]:qM(e).split(",").map(J_)):ot._CE&&WM.test(e)?ot._CE("",e):n},_g=function(e){return function(t){return 1-e(1-t)}},gg=function i(e,t){for(var n=e._first,r;n;)n instanceof Dn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ms=function(e,t){return e&&(It(e)?e:ot[e]||$M(e))||t},Ls=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Bn(e,function(o){ot[o]=ri[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},vg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ou=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/lf*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*yM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:vg(o);return s=lf/s,l.config=function(c,u){return i(e,c,u)},l},au=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:vg(n);return r.config=function(s){return i(e,s)},r};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ls(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Ls("Elastic",ou("in"),ou("out"),ou());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Ls("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ls("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ls("Circ",function(i){return-(G_(1-i*i)-1)});Ls("Sine",function(i){return i===1?1:-SM(i*xM)+1});Ls("Back",au("in"),au("out"),au());ot.SteppedEase=ot.steps=ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-xt;return function(o){return((r*$a(0,a,o)|0)+s)*n}}};Eo.ease=ot["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return gh+=i+","+i+"Params,"});var xg=function(e,t){this.id=MM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:K_,this.set=t?t.getSetter:Eh},Ba=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ao(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Fa||Qn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ao(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(wo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ic(this,n),!s._dp||s.parent||tg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===xt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Z_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?bo(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?oc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime($a(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Uc(this),CM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Oi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bM);var r=an;return an=n,xh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Rd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ci(this,n),Fn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Fn(r)),this._dur||(this._zTime=-xt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=It(n)?n:Q_,o=function(){var c=r.then;r.then=null,It(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Qo(this)},i}();si(Ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var Dn=function(i){H_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fn(n.sortChildren),Pt&&Oi(n.parent||Pt,Qi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ng(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ma(0,arguments,this),this},t.from=function(r,s,a){return ma(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ma(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,pa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(r,s,ci(this,a),1),this},t.call=function(r,s,a){return Oi(this,Gt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Gt(r,a,ci(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,pa(a).immediateRender=Fn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,pa(o).immediateRender=Fn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:kt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,g,_,m,p,S,v,E,C,R,A;if(this!==Pt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,E=this._start,v=this._ts,p=!v,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=kt(u%m),u===l?(_=this._repeat,d=c):(C=kt(u/m),_=~~C,_&&_===C&&(d=c,_--),d>c&&(d=c)),C=bo(this._tTime,m),!o&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),R&&_&1&&(d=c-d,A=1),_!==C&&!this._lock){var F=R&&C&1,M=F===(R&&_&1);if(_<C&&(F=!F),o=F?0:u%c?c:u,this._lock=1,this.render(o||(A?0:kt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=F?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;gg(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=UM(this,kt(o),kt(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!C&&(ni(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&S!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-xt);break}}h=g}else{h=this._last;for(var b=r<0?r:d;h;){if(g=h._prev,(h._act||b<=h._end)&&h._ts&&S!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,s,a||an&&xh(h)),d!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=b?-xt:xt);break}}h=g}}if(S&&!s&&(this.pause(),S.render(d>=o?0:-xt)._zTime=d>=o?1:-1,this._ts))return this._start=E,Uc(this),this.render(r,s,a);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Br(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ni(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(cr(s)||(s=ci(this,s,r)),!(r instanceof Ba)){if(gn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(rn(r))return this.addLabel(r,s);if(It(r))r=Gt.delayedCall(0,r);else return this}return this!==r?Oi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Gt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return rn(r)?this.removeLabel(r):It(r)?this.killTweensOf(r):(r.parent===this&&Dc(this,r),r===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(Qn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ci(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Gt.delayedCall(0,s||Oa,a);return o.data="isPause",this._hasPause=1,Oi(this,o,ci(this,r))},t.removePause=function(r){var s=this._first;for(r=ci(this,r);s;)s._start===r&&s.data==="isPause"&&Br(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)yr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=mi(r),l=this._first,c=cr(s),u;l;)l instanceof Gt?AM(l._targets,o)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ci(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Gt.to(a,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||xt,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ao(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,si({startAt:{time:ci(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Cd(this,ci(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Cd(this,ci(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ps(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ps(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=pi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Oi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ao(a,a===Pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Pt._ts&&(Z_(Pt,oc(r,Pt)),j_=Qn.frame),Qn.frame>=bd){bd+=ii.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&ii.autoSleep&&Qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qn.sleep()}}},e}(Ba);si(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jM=function(e,t,n,r,s,a,o){var l=new zn(this._pt,e,t,0,1,bg,null,s),c=0,u=0,f,d,h,g,_,m,p,S;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Na(r)),a&&(S=[n,r],a(S,e,t),n=S[0],r=S[1]),d=n.match(iu)||[];f=iu.exec(r);)g=f[0],_=r.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?po(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=iu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(W_.test(r)||p)&&(l.e=0),this._pt=l,l},Mh=function(e,t,n,r,s,a,o,l,c,u){It(r)&&(r=r(s||0,e,a));var f=e[t],d=n!=="get"?n:It(f)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=It(f)?c?eS:Eg:yh,g;if(rn(r)&&(~r.indexOf("random(")&&(r=Na(r)),r.charAt(1)==="="&&(g=po(d,r)+(pn(d)||0),(g||g===0)&&(r=g))),!u||d!==r||gf)return!isNaN(d*r)&&r!==""?(g=new zn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?nS:Tg,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&mh(t,r),jM.call(this,e,t,d,r,h,l||ii.stringFilter,c))},KM=function(e,t,n,r,s){if(It(e)&&(e=_a(e,s,t,n,r)),!Wi(e)||e.style&&e.nodeType||gn(e)||k_(e))return rn(e)?_a(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=_a(e[o],s,t,n,r);return a},Mg=function(e,t,n,r,s,a){var o,l,c,u;if(jn[e]&&(o=new jn[e]).init(s,o.rawVars?t[e]:KM(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new zn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==so))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},yr,gf,Sh=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!fh,E=e.timeline,C,R,A,F,M,b,G,O,$,U,z,H,k;if(E&&(!d||!s)&&(s="none"),e._ease=ms(s,Eo.ease),e._yEase=f?_g(ms(f===!0?s:f,Eo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!E&&!!r.runBackwards,!E||d&&!r.stagger){if(O=m[0]?ds(m[0]).harness:0,H=O&&r[O.prop],C=sc(r,_h),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?Hl:TM),_._lazy=0),a){if(Br(e._startAt=Gt.set(m,si({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!o&&!h)&&e._startAt.revert(Hl),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=si({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Fn(l),immediateRender:o,stagger:0,parent:p},C),H&&(A[O.prop]=H),Br(e._startAt=Gt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Hl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Fn(l)||l&&!g,R=0;R<m.length;R++){if(M=m[R],G=M._gsap||vh(m)[R]._gsap,e._ptLookup[R]=U={},ff[G.id]&&Pr.length&&rc(),z=S===m?R:S.indexOf(M),O&&($=new O).init(M,H||C,e,z,S)!==!1&&(e._pt=F=new zn(e._pt,M,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(V){U[V]=F}),$.priority&&(b=1)),!O||H)for(A in C)jn[A]&&($=Mg(A,C,e,z,M,S))?$.priority&&(b=1):U[A]=F=Mh.call(e,M,A,"get",C[A],z,S,0,r.stringFilter);e._op&&e._op[R]&&e.kill(M,e._op[R]),v&&e._pt&&(yr=e,Pt.killTweensOf(M,U,e.globalTime(t)),k=!e.parent,yr=0),e._pt&&l&&(ff[G.id]=1)}b&&Ag(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&E.render(pi,!0,!0)},ZM=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return gf=1,e.vars[t]="+=0",Sh(e,o),gf=0,l?Ia(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ft(n)+pn(f.e)),f.b&&(f.b=u.s+pn(f.b))},JM=function(e,t){var n=e[0]?ds(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=To({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},QM=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(gn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},_a=function(e,t,n,r,s){return It(e)?e.call(t,n,r,s):rn(e)&&~e.indexOf("random(")?Na(e):e},Sg=gh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yg={};Bn(Sg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return yg[i]=1});var Gt=function(i){H_(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:pa(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=r.parent||Pt,v=(gn(n)||k_(n)?cr(n[0]):"length"in r)?[n]:mi(n),E,C,R,A,F,M,b,G;if(o._targets=v.length?vh(v):Ia("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||d||el(c)||el(u)){if(r=o.vars,E=o.timeline=new Dn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),E.kill(),E.parent=E._dp=Qi(o),E._start=0,d||el(c)||el(u)){if(A=v.length,b=d&&og(d),Wi(d))for(F in d)~Sg.indexOf(F)&&(G||(G={}),G[F]=d[F]);for(C=0;C<A;C++)R=sc(r,yg),R.stagger=0,p&&(R.yoyoEase=p),G&&To(R,G),M=v[C],R.duration=+_a(c,Qi(o),C,M,v),R.delay=(+_a(u,Qi(o),C,M,v)||0)-o._delay,!d&&A===1&&R.delay&&(o._delay=u=R.delay,o._start+=u,R.delay=0),E.to(M,R,b?b(C,M,v):0),E._ease=ot.none;E.duration()?c=u=0:o.timeline=0}else if(g){pa(si(E.vars.defaults,{ease:"none"})),E._ease=ms(g.ease||r.ease||"none");var O=0,$,U,z;if(gn(g))g.forEach(function(H){return E.to(v,H,">")}),E.duration();else{R={};for(F in g)F==="ease"||F==="easeEach"||QM(F,g[F],R,g.easeEach);for(F in R)for($=R[F].sort(function(H,k){return H.t-k.t}),O=0,C=0;C<$.length;C++)U=$[C],z={ease:U.e,duration:(U.t-(C?$[C-1].t:0))/100*c},z[F]=U.v,E.to(v,z,O),O+=z.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return h===!0&&!fh&&(yr=Qi(o),Pt.killTweensOf(v),yr=0),Oi(S,Qi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===kt(S._time)&&Fn(f)&&PM(Qi(o))&&S.data!=="nested")&&(o._tTime=-xt,o.render(Math.max(0,-u)||0)),m&&ng(Qi(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-xt&&!u?l:r<xt?0:r,d,h,g,_,m,p,S,v,E;if(!c)DM(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=kt(f%_),f===l?(g=this._repeat,d=c):(m=kt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(E=this._yEase,d=c-d),m=bo(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&gg(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(ig(this,u?r:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(E||this._ease)(d/c),this._from&&(this.ratio=S=1-S),!o&&f&&!s&&!m&&(ni(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(S,h.d),h=h._next;v&&v.render(r<0?r:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&hf(this,r,s,a),ni(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&hf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Br(this,1),!s&&!(u&&!o)&&(f||o||p)&&(ni(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Fa||Qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sh(this,c),u=this._ease(c/this._dur),ZM(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Ic(this,0),this.parent||eg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,yr&&yr.vars.overwrite!==!0)._first||Qo(this),this.parent&&a!==this.timeline.totalDuration()&&Ao(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?mi(r):o,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&RM(o,l))return s==="all"&&(this._pt=0),Qo(this);for(f=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},Bn(s,function(S){return _[S]=1}),s=_),s=JM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Dc(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&Qo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ma(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ma(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Pt.killTweensOf(r,s,a)},e}(Ba);si(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(i){Gt[i]=function(){var e=new Dn,t=pf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var yh=function(e,t,n){return e[t]=n},Eg=function(e,t,n){return e[t](n)},eS=function(e,t,n,r){return e[t](r.fp,n)},tS=function(e,t,n){return e.setAttribute(t,n)},Eh=function(e,t){return It(e[t])?Eg:hh(e[t])&&e.setAttribute?tS:yh},Tg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Th=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iS=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},rS=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Dc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},sS=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Ag=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},zn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Tg,this.d=l||this,this.set=c||yh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=sS,this.m=n,this.mt=s,this.tween=r},i}();Bn(gh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return _h[i]=1});ri.TweenMax=ri.TweenLite=Gt;ri.TimelineLite=ri.TimelineMax=Dn;Pt=new Dn({sortChildren:!1,defaults:Eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=mg;var _s=[],kl={},oS=[],Ld=0,aS=0,lu=function(e){return(kl[e]||oS).map(function(t){return t()})},vf=function(){var e=Date.now(),t=[];e-Ld>2&&(lu("matchMediaInit"),_s.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Li.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),lu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ld=e,lu("matchMedia"))},wg=function(){function i(t,n){this.selector=n&&mf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=aS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){It(n)&&(s=r,r=n,n=It);var a=this,o=function(){var c=Rt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=mf(s)),Rt=a,f=r.apply(a,arguments),It(f)&&a._r.push(f),Rt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===It?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Rt;Rt=null,n(this),Rt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Gt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=_s.length;a--;)_s[a].id===this.id&&_s.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),lS=function(){function i(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Wi(n)||(n={matches:n});var a=new wg(0,s||this.scope),o=a.conditions={},l,c,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Li.matchMedia(n[c]),l&&(_s.indexOf(a)<0&&_s.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(vf):l.addEventListener("change",vf)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ac={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return hg(r)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,r){rn(e)&&(e=mi(e)[0]);var s=ds(e||{}).get,a=n?Q_:J_;return n==="native"&&(n=""),e&&(t?a((jn[t]&&jn[t].get||s)(e,t,n,r)):function(o,l,c){return a((jn[o]&&jn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var r=e.map(function(u){return kn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=jn[t],o=ds(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;so._pt=0,f.init(e,n?u+n:u,so,0,[e]),f.render(1,f),so._pt&&Th(1,so)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=kn.to(e,si((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,Eo.ease)),Ad(Eo,e||{})},config:function(e){return Ad(ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!jn[o]&&!ri[o]&&Ia(t+" effect requires "+o+" plugin.")}),ru[t]=function(o,l,c){return n(mi(o),si(l||{},s),c)},a&&(Dn.prototype[t]=function(o,l,c){return this.add(ru[t](o,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):ot},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),r,s;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,r=Pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Gt&&r.vars.onComplete===r._targets[0]))&&Oi(n,r,r._start-r._delay),r=s;return Oi(Pt,n,0),n},context:function(e,t){return e?new wg(e,t):Rt},matchMedia:function(e){return new lS(e)},matchMediaRefresh:function(){return _s.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||vf()},addEventListener:function(e,t){var n=kl[e]||(kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:HM,wrapYoyo:GM,distribute:og,random:lg,snap:ag,normalize:zM,getUnit:pn,clamp:OM,splitColor:dg,toArray:mi,selector:mf,mapRange:ug,pipe:FM,unitize:BM,interpolate:kM,shuffle:sg},install:q_,effects:ru,ticker:Qn,updateRoot:Dn.updateRoot,plugins:jn,globalTimeline:Pt,core:{PropTween:zn,globals:$_,Tween:Gt,Timeline:Dn,Animation:Ba,getCache:ds,_removeLinkedListItem:Dc,reverting:function(){return an},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return fh=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ac[i]=Gt[i]});Qn.add(Dn.updateRoot);so=ac.to({},{duration:0});var cS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},uS=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=cS(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},cu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}uS(o,s)}}}},kn=ac.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},cu("roundProps",_f),cu("modifiers"),cu("snap",ag))||ac;Gt.version=Dn.version=kn.version="3.13.0";Y_=1;dh()&&wo();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dd,Er,mo,bh,cs,Ud,Ah,fS=function(){return typeof window<"u"},ur={},ts=180/Math.PI,_o=Math.PI/180,Is=Math.atan2,Id=1e8,wh=/([A-Z])/g,hS=/(left|right|width|margin|padding|x)/i,dS=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_S=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gS=function(e,t,n){return e.style[t]=n},vS=function(e,t,n){return e.style.setProperty(t,n)},xS=function(e,t,n){return e._gsap[t]=n},MS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},SS=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},yS=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Lt="transform",Hn=Lt+"Origin",ES=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in ur&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=tr(r,o)}):this.tfm[e]=a.x?a[e]:tr(r,e),e===Hn&&(this.tfm.zOrigin=a.zOrigin);else return Bi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Hn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},Pg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},TS=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ah(),(!s||!s.isStart)&&!n[Lt]&&(Pg(n),r.zOrigin&&n[Hn]&&(n[Hn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Lg=function(e,t){var n={target:e,props:[],revert:TS,save:ES};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Dg,Mf=function(e,t){var n=Er.createElementNS?Er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Er.createElement(e);return n&&n.style?n:Er.createElement(e)},_i=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(wh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ro(t)||t,1)||""},Od="O,Moz,ms,Ms,Webkit".split(","),Ro=function(e,t,n){var r=t||cs,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Od[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Od[a]:"")+e},Sf=function(){fS()&&window.document&&(Dd=window,Er=Dd.document,mo=Er.documentElement,cs=Mf("div")||{style:{}},Mf("div"),Lt=Ro(Lt),Hn=Lt+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dg=!!Ro("perspective"),Ah=kn.core.reverting,bh=1)},Nd=function(e){var t=e.ownerSVGElement,n=Mf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),mo.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),mo.removeChild(n),s},Fd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ug=function(e){var t,n;try{t=e.getBBox()}catch{t=Nd(e),n=1}return t&&(t.width||t.height)||n||(t=Nd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fd(e,["x","cx","x1"])||0,y:+Fd(e,["y","cy","y1"])||0,width:0,height:0}:t},Ig=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ug(e))},Ts=function(e,t){if(t){var n=e.style,r;t in ur&&t!==Hn&&(t=Lt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(wh,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,r,s,a){var o=new zn(e._pt,t,n,0,1,a?Cg:Rg);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Bd={deg:1,rad:1,turn:1},bS={grid:1,flex:1},zr=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=cs.style,l=hS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",g,_,m,p;if(r===a||!s||Bd[r]||Bd[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&Ig(e),(h||a==="%")&&(ur[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ft(h?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(d?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Er||!_.appendChild)&&(_=Er.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Qn.time&&!m.uncache)return Ft(s/m.width*f);if(h&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+r,g=e[u],S?e.style[t]=S:Ts(e,t)}else(h||a==="%")&&!bS[_i(_,"display")]&&(o.position=_i(e,"position")),_===e&&(o.position="static"),_.appendChild(cs),g=cs[u],_.removeChild(cs),o.position="absolute";return l&&h&&(m=ds(_),m.time=Qn.time,m.width=_[u]),Ft(d?g*s/f:g&&s?f/g*s:0)},tr=function(e,t,n,r){var s;return bh||Sf(),t in Bi&&t!=="transform"&&(t=Bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ur[t]&&t!=="transform"?(s=Ha(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cc(_i(e,Hn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=lc[t]&&lc[t](e,t,n)||_i(e,t)||K_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zr(e,t,s,n)+n:s},AS=function(e,t,n,r){if(!n||n==="none"){var s=Ro(t,e,1),a=s&&_i(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var o=new zn(this._pt,e.style,t,0,1,bg),l=0,c=0,u,f,d,h,g,_,m,p,S,v,E,C;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=_i(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=_i(e,t)||r,_?e.style[t]=_:Ts(e,t)),u=[n,r],mg(u),n=u[0],r=u[1],d=n.match(ro)||[],C=r.match(ro)||[],C.length){for(;f=ro.exec(r);)m=f[0],S=r.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,E=_.substr((h+"").length),m.charAt(1)==="="&&(m=po(h,m)+E),p=parseFloat(m),v=m.substr((p+"").length),l=ro.lastIndex-v.length,v||(v=v||ii.units[t]||E,l===r.length&&(r+=v,o.e+=v)),E!==v&&(h=zr(e,t,_,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Cg:Rg;return W_.test(r)&&(o.e=0),this._pt=o,o},zd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=zd[n]||n,t[1]=zd[r]||r,t.join(" ")},RS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ur[o]&&(l=1,o=o==="transformOrigin"?Hn:Lt),Ts(n,o);l&&(Ts(n,Lt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ha(n,1),a.uncache=1,Pg(r)))}},lc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new zn(e._pt,t,n,0,0,RS);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},za=[1,0,0,1,0,0],Og={},Ng=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hd=function(e){var t=_i(e,Lt);return Ng(t)?za:t.substr(7).match(V_).map(Ft)},Rh=function(e,t){var n=e._gsap||ds(e),r=e.style,s=Hd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?za:s):(s===za&&!e.offsetParent&&e!==mo&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,mo.appendChild(e)),s=Hd(e),l?r.display=l:Ts(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yf=function(e,t,n,r,s,a){var o=e._gsap,l=s||Rh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],v=t.split(" "),E=parseFloat(v[0])||0,C=parseFloat(v[1])||0,R,A,F,M;n?l!==za&&(A=h*m-g*_)&&(F=E*(m/A)+C*(-_/A)+(_*S-m*p)/A,M=E*(-g/A)+C*(h/A)-(h*S-g*p)/A,E=F,C=M):(R=Ug(e),E=R.x+(~v[0].indexOf("%")?E/100*R.width:E),C=R.y+(~(v[1]||v[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&o.smooth?(p=E-c,S=C-u,o.xOffset=f+(p*h+S*_)-p,o.yOffset=d+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=C,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Hn]="0px 0px",a&&(Tr(a,o,"xOrigin",c,E),Tr(a,o,"yOrigin",u,C),Tr(a,o,"xOffset",f,o.xOffset),Tr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},Ha=function(e,t){var n=e._gsap||new xg(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=_i(e,Hn)||"0",u,f,d,h,g,_,m,p,S,v,E,C,R,A,F,M,b,G,O,$,U,z,H,k,V,Q,P,se,fe,ne,le,de;return u=f=d=_=m=p=S=v=E=0,h=g=1,n.svg=!!(e.getCTM&&Ig(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),r.scale=r.rotate=r.translate="none"),A=Rh(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),yf(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,R=n.yOrigin||0,A!==za&&(G=A[0],O=A[1],$=A[2],U=A[3],u=z=A[4],f=H=A[5],A.length===6?(h=Math.sqrt(G*G+O*O),g=Math.sqrt(U*U+$*$),_=G||O?Is(O,G)*ts:0,S=$||U?Is($,U)*ts+_:0,S&&(g*=Math.abs(Math.cos(S*_o))),n.svg&&(u-=C-(C*G+R*$),f-=R-(C*O+R*U))):(de=A[6],ne=A[7],P=A[8],se=A[9],fe=A[10],le=A[11],u=A[12],f=A[13],d=A[14],F=Is(de,fe),m=F*ts,F&&(M=Math.cos(-F),b=Math.sin(-F),k=z*M+P*b,V=H*M+se*b,Q=de*M+fe*b,P=z*-b+P*M,se=H*-b+se*M,fe=de*-b+fe*M,le=ne*-b+le*M,z=k,H=V,de=Q),F=Is(-$,fe),p=F*ts,F&&(M=Math.cos(-F),b=Math.sin(-F),k=G*M-P*b,V=O*M-se*b,Q=$*M-fe*b,le=U*b+le*M,G=k,O=V,$=Q),F=Is(O,G),_=F*ts,F&&(M=Math.cos(F),b=Math.sin(F),k=G*M+O*b,V=z*M+H*b,O=O*M-G*b,H=H*M-z*b,G=k,z=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Ft(Math.sqrt(G*G+O*O+$*$)),g=Ft(Math.sqrt(H*H+de*de)),F=Is(z,H),S=Math.abs(F)>2e-4?F*ts:0,E=le?1/(le<0?-le:le):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ng(_i(e,Lt)),k&&e.setAttribute("transform",k))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(h*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ft(h),n.scaleY=Ft(g),n.rotation=Ft(_)+o,n.rotationX=Ft(m)+o,n.rotationY=Ft(p)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Hn]=cc(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?PS:Dg?Fg:CS,n.uncache=0,n},cc=function(e){return(e=e.split(" "))[0]+" "+e[1]},uu=function(e,t,n){var r=pn(t);return Ft(parseFloat(t)+parseFloat(zr(e,"x",n+"px",r)))+r},CS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fg(e,t)},$r="0deg",Vo="0px",jr=") ",Fg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,E="",C=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==$r||u!==$r)){var R=parseFloat(u)*_o,A=Math.sin(R),F=Math.cos(R),M;R=parseFloat(f)*_o,M=Math.cos(R),a=uu(S,a,A*M*-v),o=uu(S,o,-Math.sin(R)*-v),l=uu(S,l,F*M*-v+v)}m!==Vo&&(E+="perspective("+m+jr),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(C||a!==Vo||o!==Vo||l!==Vo)&&(E+=l!==Vo||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+jr),c!==$r&&(E+="rotate("+c+jr),u!==$r&&(E+="rotateY("+u+jr),f!==$r&&(E+="rotateX("+f+jr),(d!==$r||h!==$r)&&(E+="skew("+d+", "+h+jr),(g!==1||_!==1)&&(E+="scale("+g+", "+_+jr),S.style[Lt]=E||"translate(0, 0)"},PS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(a),E=parseFloat(o),C,R,A,F,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_o,c*=_o,C=Math.cos(l)*f,R=Math.sin(l)*f,A=Math.sin(l-c)*-d,F=Math.cos(l-c)*d,c&&(u*=_o,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,F*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,R*=M)),C=Ft(C),R=Ft(R),A=Ft(A),F=Ft(F)):(C=f,F=d,R=A=0),(v&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(v=zr(h,"x",a,"px"),E=zr(h,"y",o,"px")),(g||_||m||p)&&(v=Ft(v+g-(g*C+_*A)+m),E=Ft(E+_-(g*R+_*F)+p)),(r||s)&&(M=h.getBBox(),v=Ft(v+r/100*M.width),E=Ft(E+s/100*M.height)),M="matrix("+C+","+R+","+A+","+F+","+v+","+E+")",h.setAttribute("transform",M),S&&(h.style[Lt]=M)},LS=function(e,t,n,r,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ts:1),c=l-r,u=r+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Id)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Id)%a-~~(c/a)*a)),e._pt=d=new zn(e._pt,t,n,r,c,pS),d.e=u,d.u="deg",e._props.push(n),d},Gd=function(e,t){for(var n in t)e[n]=t[n];return e},DS=function(e,t,n){var r=Gd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Lt]=t,o=Ha(n,1),Ts(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],a[Lt]=t,o=Ha(n,1),a[Lt]=c);for(l in ur)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=pn(c),g=pn(u),f=h!==g?zr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new zn(e._pt,o,l,f,d-f,xf),e._pt.u=g||0,e._props.push(l));Gd(o,r)};Bn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});lc[e>1?"border"+i:i]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(g){return tr(o,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,h,f)}});var Bg={name:"css",register:Sf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,g,_,m,p,S,v,E,C,R,A,F;bh||Sf(),this.styles=this.styles||Lg(e),F=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(jn[_]&&Mg(_,t,n,r,e,s)))){if(h=typeof u,g=lc[_],h==="function"&&(u=u.call(n,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Na(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Lr.lastIndex=0,Lr.test(c)||(m=pn(c),p=pn(u)),p?m!==p&&(c=zr(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),F.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=Na(c)),pn(c+"")||c==="auto"||(c+=ii.units[_]||pn(tr(e,_))||""),(c+"").charAt(1)==="="&&(c=tr(e,_))):c=tr(e,_),d=parseFloat(c),S=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in Bi&&(_==="autoAlpha"&&(d===1&&tr(e,"visibility")==="hidden"&&f&&(d=0),F.push("visibility",0,o.visibility),Tr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Bi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ur,v){if(this.styles.save(_),h==="string"&&u.substring(0,6)==="var(--"&&(u=_i(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),E||(C=e._gsap,C.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new zn(this._pt,o,Lt,0,1,C.renderTransform,C,0,-1),E.dep=1),_==="scale")this._pt=new zn(this._pt,C,"scaleY",C.scaleY,(S?po(C.scaleY,S+f):f)-C.scaleY||0,xf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){F.push(Hn,0,o[Hn]),u=wS(u),C.svg?yf(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Tr(this,C,"zOrigin",C.zOrigin,p),Tr(this,o,_,cc(c),cc(u)));continue}else if(_==="svgOrigin"){yf(e,u,1,R,0,this);continue}else if(_ in Og){LS(this,C,_,d,S?po(d,S+u):u);continue}else if(_==="smoothOrigin"){Tr(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){DS(this,u,e);continue}}else _ in o||(_=Ro(_)||_);if(v||(f||f===0)&&(d||d===0)&&!dS.test(u)&&_ in o)m=(c+"").substr((d+"").length),f||(f=0),p=pn(u)||(_ in ii.units?ii.units[_]:m),m!==p&&(d=zr(e,_,c,p)),this._pt=new zn(this._pt,v?C:o,_,d,(S?po(d,S+f):f)-d,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?_S:xf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=mS);else if(_ in o)AS.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,r,s);else if(_!=="parseTransform"){mh(_,u);continue}v||(_ in o?F.push(_,0,o[_]):typeof e[_]=="function"?F.push(_,2,e[_]()):F.push(_,1,c||e[_])),a.push(_)}}A&&Ag(this)},render:function(e,t){if(t.tween._time||!Ah())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:tr,aliases:Bi,getSetter:function(e,t,n){var r=Bi[t];return r&&r.indexOf(",")<0&&(t=r),t in ur&&t!==Hn&&(e._gsap.x||tr(e,"x"))?n&&Ud===n?t==="scale"?MS:xS:(Ud=n||{})&&(t==="scale"?SS:yS):e.style&&!hh(e.style[t])?gS:~t.indexOf("-")?vS:Eh(e,t)},core:{_removeProperty:Ts,_getMatrix:Rh}};kn.utils.checkPrefix=Ro;kn.core.getStyleSaver=Lg;(function(i,e,t,n){var r=Bn(i+","+e+","+t,function(s){ur[s]=1});Bn(e,function(s){ii.units[s]="deg",Og[s]=1}),Bi[r[13]]=i+","+e,Bn(n,function(s){var a=s.split(":");Bi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ii.units[i]="px"});kn.registerPlugin(Bg);var os=kn.registerPlugin(Bg)||kn;os.core.Tween;function US(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function IS(i,e,t){return e&&US(i.prototype,e),i}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on,Vl,ei,br,Ar,go,zg,ns,ga,Hg,rr,yi,Gg,kg=function(){return on||typeof window<"u"&&(on=window.gsap)&&on.registerPlugin&&on},Vg=1,oo=[],rt=[],ki=[],va=Date.now,Ef=function(e,t){return t},OS=function(){var e=ga.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,rt),r.push.apply(r,ki),rt=n,ki=r,Ef=function(a,o){return t[a](o)}},Dr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},xa=function(e){return!!~Hg.indexOf(e)},Sn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},xn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},tl="scrollLeft",nl="scrollTop",Tf=function(){return rr&&rr.isPressed||rt.cache++},uc=function(e,t){var n=function r(s){if(s||s===0){Vg&&(ei.history.scrollRestoration="manual");var a=rr&&rr.isPressed;s=r.v=Math.round(s)||(rr&&rr.iOS?1:0),e(s),r.cacheID=rt.cache,a&&Ef("ss",s)}else(t||rt.cache!==r.cacheID||Ef("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Un={s:tl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:uc(function(i){return arguments.length?ei.scrollTo(i,jt.sc()):ei.pageXOffset||br[tl]||Ar[tl]||go[tl]||0})},jt={s:nl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:uc(function(i){return arguments.length?ei.scrollTo(Un.sc(),i):ei.pageYOffset||br[nl]||Ar[nl]||go[nl]||0})},Nn=function(e,t){return(t&&t._ctx&&t._ctx.selector||on.utils.toArray)(e)[0]||(typeof e=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},NS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Hr=function(e,t){var n=t.s,r=t.sc;xa(e)&&(e=br.scrollingElement||Ar);var s=rt.indexOf(e),a=r===jt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Sn(e,"scroll",Tf);var o=rt[s+a],l=o||(rt[s+a]=uc(Dr(e,n),!0)||(xa(e)?r:uc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=on.getProperty(e,"scrollBehavior")==="smooth"),l},bf=function(e,t,n){var r=e,s=e,a=va(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=va();_||m-a>l?(s=r,r=g,o=a,a=m):n?r+=g:r=s+(g-s)/(m-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},d=function(g){var _=o,m=s,p=va();return(g||g===0)&&g!==r&&u(g),a===o||p-o>c?0:(r+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Wo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wg=function(){ga=on.core.globals().ScrollTrigger,ga&&ga.core&&OS()},Xg=function(e){return on=e||kg(),!Vl&&on&&typeof document<"u"&&document.body&&(ei=window,br=document,Ar=br.documentElement,go=br.body,Hg=[ei,br,Ar,go],on.utils.clamp,Gg=on.core.context||function(){},ns="onpointerenter"in go?"pointer":"mouse",zg=Bt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=Bt.eventTypes=("ontouchstart"in Ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Vg=0},500),Wg(),Vl=1),Vl};Un.op=jt;rt.cache=0;var Bt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Vl||Xg(on)||console.warn("Please gsap.registerPlugin(Observer)"),ga||Wg();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,v=n.onPress,E=n.onRelease,C=n.onRight,R=n.onLeft,A=n.onUp,F=n.onDown,M=n.onChangeX,b=n.onChangeY,G=n.onChange,O=n.onToggleX,$=n.onToggleY,U=n.onHover,z=n.onHoverEnd,H=n.onMove,k=n.ignoreCheck,V=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,se=n.onWheel,fe=n.onEnable,ne=n.onDisable,le=n.onClick,de=n.scrollSpeed,ye=n.capture,he=n.allowClicks,Le=n.lockAxis,Pe=n.onLockAxis;this.target=o=Nn(o)||Ar,this.vars=n,h&&(h=on.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,de=de||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(go).lineHeight)||22);var be,Ve,y,I,B,K,Y,D=this,oe=0,T=0,x=n.passive||!u&&n.passive!==!1,L=Hr(o,Un),Z=Hr(o,jt),W=L(),q=Z(),re=~a.indexOf("touch")&&!~a.indexOf("pointer")&&yi[0]==="pointerdown",ae=xa(o),ce=o.ownerDocument||br,ue=[0,0,0],Me=[0,0,0],ie=0,Fe=function(){return ie=va()},Se=function(Re,Be){return(D.event=Re)&&h&&NS(Re.target,h)||Be&&re&&Re.pointerType!=="touch"||k&&k(Re,Be)},Oe=function(){D._vx.reset(),D._vy.reset(),Ve.pause(),f&&f(D)},Ae=function(){var Re=D.deltaX=kd(ue),Be=D.deltaY=kd(Me),pe=Math.abs(Re)>=r,ke=Math.abs(Be)>=r;G&&(pe||ke)&&G(D,Re,Be,ue,Me),pe&&(C&&D.deltaX>0&&C(D),R&&D.deltaX<0&&R(D),M&&M(D),O&&D.deltaX<0!=oe<0&&O(D),oe=D.deltaX,ue[0]=ue[1]=ue[2]=0),ke&&(F&&D.deltaY>0&&F(D),A&&D.deltaY<0&&A(D),b&&b(D),$&&D.deltaY<0!=T<0&&$(D),T=D.deltaY,Me[0]=Me[1]=Me[2]=0),(I||y)&&(H&&H(D),y&&(m&&y===1&&m(D),S&&S(D),y=0),I=!1),K&&!(K=!1)&&Pe&&Pe(D),B&&(se(D),B=!1),be=0},_e=function(Re,Be,pe){ue[pe]+=Re,Me[pe]+=Be,D._vx.update(Re),D._vy.update(Be),c?be||(be=requestAnimationFrame(Ae)):Ae()},we=function(Re,Be){Le&&!Y&&(D.axis=Y=Math.abs(Re)>Math.abs(Be)?"x":"y",K=!0),Y!=="y"&&(ue[2]+=Re,D._vx.update(Re,!0)),Y!=="x"&&(Me[2]+=Be,D._vy.update(Be,!0)),c?be||(be=requestAnimationFrame(Ae)):Ae()},Ke=function(Re){if(!Se(Re,1)){Re=Wo(Re,u);var Be=Re.clientX,pe=Re.clientY,ke=Be-D.x,He=pe-D.y,qe=D.isDragging;D.x=Be,D.y=pe,(qe||(ke||He)&&(Math.abs(D.startX-Be)>=s||Math.abs(D.startY-pe)>=s))&&(y=qe?2:1,qe||(D.isDragging=!0),we(ke,He))}},lt=D.onPress=function(Ie){Se(Ie,1)||Ie&&Ie.button||(D.axis=Y=null,Ve.pause(),D.isPressed=!0,Ie=Wo(Ie),oe=T=0,D.startX=D.x=Ie.clientX,D.startY=D.y=Ie.clientY,D._vx.reset(),D._vy.reset(),Sn(V?o:ce,yi[1],Ke,x,!0),D.deltaX=D.deltaY=0,v&&v(D))},Te=D.onRelease=function(Ie){if(!Se(Ie,1)){xn(V?o:ce,yi[1],Ke,!0);var Re=!isNaN(D.y-D.startY),Be=D.isDragging,pe=Be&&(Math.abs(D.x-D.startX)>3||Math.abs(D.y-D.startY)>3),ke=Wo(Ie);!pe&&Re&&(D._vx.reset(),D._vy.reset(),u&&he&&on.delayedCall(.08,function(){if(va()-ie>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(ce.createEvent){var He=ce.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,ei,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(He)}}})),D.isDragging=D.isGesturing=D.isPressed=!1,f&&Be&&!V&&Ve.restart(!0),y&&Ae(),p&&Be&&p(D),E&&E(D,pe)}},me=function(Re){return Re.touches&&Re.touches.length>1&&(D.isGesturing=!0)&&Q(Re,D.isDragging)},N=function(){return(D.isGesturing=!1)||P(D)},ge=function(Re){if(!Se(Re)){var Be=L(),pe=Z();_e((Be-W)*de,(pe-q)*de,1),W=Be,q=pe,f&&Ve.restart(!0)}},ve=function(Re){if(!Se(Re)){Re=Wo(Re,u),se&&(B=!0);var Be=(Re.deltaMode===1?l:Re.deltaMode===2?ei.innerHeight:1)*g;_e(Re.deltaX*Be,Re.deltaY*Be,0),f&&!V&&Ve.restart(!0)}},Ge=function(Re){if(!Se(Re)){var Be=Re.clientX,pe=Re.clientY,ke=Be-D.x,He=pe-D.y;D.x=Be,D.y=pe,I=!0,f&&Ve.restart(!0),(ke||He)&&we(ke,He)}},ze=function(Re){D.event=Re,U(D)},st=function(Re){D.event=Re,z(D)},ut=function(Re){return Se(Re)||Wo(Re,u)&&le(D)};Ve=D._dc=on.delayedCall(d||.25,Oe).pause(),D.deltaX=D.deltaY=0,D._vx=bf(0,50,!0),D._vy=bf(0,50,!0),D.scrollX=L,D.scrollY=Z,D.isDragging=D.isGesturing=D.isPressed=!1,Gg(this),D.enable=function(Ie){return D.isEnabled||(Sn(ae?ce:o,"scroll",Tf),a.indexOf("scroll")>=0&&Sn(ae?ce:o,"scroll",ge,x,ye),a.indexOf("wheel")>=0&&Sn(o,"wheel",ve,x,ye),(a.indexOf("touch")>=0&&zg||a.indexOf("pointer")>=0)&&(Sn(o,yi[0],lt,x,ye),Sn(ce,yi[2],Te),Sn(ce,yi[3],Te),he&&Sn(o,"click",Fe,!0,!0),le&&Sn(o,"click",ut),Q&&Sn(ce,"gesturestart",me),P&&Sn(ce,"gestureend",N),U&&Sn(o,ns+"enter",ze),z&&Sn(o,ns+"leave",st),H&&Sn(o,ns+"move",Ge)),D.isEnabled=!0,D.isDragging=D.isGesturing=D.isPressed=I=y=!1,D._vx.reset(),D._vy.reset(),W=L(),q=Z(),Ie&&Ie.type&&lt(Ie),fe&&fe(D)),D},D.disable=function(){D.isEnabled&&(oo.filter(function(Ie){return Ie!==D&&xa(Ie.target)}).length||xn(ae?ce:o,"scroll",Tf),D.isPressed&&(D._vx.reset(),D._vy.reset(),xn(V?o:ce,yi[1],Ke,!0)),xn(ae?ce:o,"scroll",ge,ye),xn(o,"wheel",ve,ye),xn(o,yi[0],lt,ye),xn(ce,yi[2],Te),xn(ce,yi[3],Te),xn(o,"click",Fe,!0),xn(o,"click",ut),xn(ce,"gesturestart",me),xn(ce,"gestureend",N),xn(o,ns+"enter",ze),xn(o,ns+"leave",st),xn(o,ns+"move",Ge),D.isEnabled=D.isPressed=D.isDragging=!1,ne&&ne(D))},D.kill=D.revert=function(){D.disable();var Ie=oo.indexOf(D);Ie>=0&&oo.splice(Ie,1),rr===D&&(rr=0)},oo.push(D),V&&xa(o)&&(rr=D),D.enable(_)},IS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Bt.version="3.13.0";Bt.create=function(i){return new Bt(i)};Bt.register=Xg;Bt.getAll=function(){return oo.slice()};Bt.getById=function(i){return oo.filter(function(e){return e.vars.id===i})[0]};kg()&&on.registerPlugin(Bt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,to,nt,yt,Zn,ft,Ch,fc,Ga,Ma,ta,il,fn,Oc,Af,bn,Vd,Wd,no,Yg,fu,qg,Tn,wf,$g,jg,vr,Rf,Ph,vo,Lh,hc,Cf,hu,rl=1,hn=Date.now,du=hn(),gi=0,na=0,Xd=function(e,t,n){var r=$n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Yd=function(e,t){return t&&(!$n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},FS=function i(){return na&&requestAnimationFrame(i)},qd=function(){return Oc=1},$d=function(){return Oc=0},Di=function(e){return e},ia=function(e){return Math.round(e*1e5)/1e5||0},Kg=function(){return typeof window<"u"},Zg=function(){return Ce||Kg()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},bs=function(e){return!!~Ch.indexOf(e)},Jg=function(e){return(e==="Height"?Lh:nt["inner"+e])||Zn["client"+e]||ft["client"+e]},Qg=function(e){return Dr(e,"getBoundingClientRect")||(bs(e)?function(){return $l.width=nt.innerWidth,$l.height=Lh,$l}:function(){return ir(e)})},BS=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=Dr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?Jg(s):e["client"+s])||0}},zS=function(e,t){return!t||~ki.indexOf(e)?Qg(e):function(){return $l}},zi=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=Dr(e,n))?a()-Qg(e)()[s]:bs(e)?(Zn[n]||ft[n])-Jg(r):e[n]-e["offset"+r])},sl=function(e,t){for(var n=0;n<no.length;n+=3)(!t||~t.indexOf(no[n+1]))&&e(no[n],no[n+1],no[n+2])},$n=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},ra=function(e){return typeof e=="number"},is=function(e){return typeof e=="object"},Xo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},pu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Os=Math.abs,e0="left",t0="top",Dh="right",Uh="bottom",gs="width",vs="height",Sa="Right",ya="Left",Ea="Top",Ta="Bottom",Ht="padding",ui="margin",Co="Width",Ih="Height",$t="px",fi=function(e){return nt.getComputedStyle(e)},HS=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},jd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ir=function(e,t){var n=t&&fi(e)[Af]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},dc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},n0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},GS=function(e){return function(t){return Ce.utils.snap(n0(e),t)}},Oh=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},kS=function(e){return function(t,n){return Oh(n0(e))(t,n.direction)}},ol=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},tn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},en=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},al=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ll={toggleActions:"play",anticipatePin:0},pc={top:0,left:0,center:.5,bottom:1,right:1},Wl=function(e,t){if($n(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in pc?pc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},cl=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=yt.createElement("div"),_=bs(n)||Dr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?ft:n,S=e.indexOf("start")!==-1,v=S?c:u,E="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(E+=(r===jt?Dh:Uh)+":"+(a+parseFloat(d))+"px;"),o&&(E+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=E,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Xl(g,0,r,S),g},Xl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Co]=1,s["border"+o+Co]=0,s[n.p]=t+"px",Ce.set(e,s)},et=[],Pf={},ka,Zd=function(){return hn()-gi>34&&(ka||(ka=requestAnimationFrame(or)))},Ns=function(){(!Tn||!Tn.isPressed||Tn.startX>ft.clientWidth)&&(rt.cache++,Tn?ka||(ka=requestAnimationFrame(or)):or(),gi||ws("scrollStart"),gi=hn())},mu=function(){jg=nt.innerWidth,$g=nt.innerHeight},sa=function(e){rt.cache++,(e===!0||!fn&&!qg&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!wf||jg!==nt.innerWidth||Math.abs(nt.innerHeight-$g)>nt.innerHeight*.25))&&fc.restart(!0)},As={},VS=[],i0=function i(){return en(Ze,"scrollEnd",i)||us(!0)},ws=function(e){return As[e]&&As[e].map(function(t){return t()})||VS},qn=[],r0=function(e){for(var t=0;t<qn.length;t+=5)(!e||qn[t+4]&&qn[t+4].query===e)&&(qn[t].style.cssText=qn[t+1],qn[t].getBBox&&qn[t].setAttribute("transform",qn[t+2]||""),qn[t+3].uncache=1)},Nh=function(e,t){var n;for(bn=0;bn<et.length;bn++)n=et[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));hc=!0,t&&r0(t),t||ws("revert")},s0=function(e,t){rt.cache++,(t||!An)&&rt.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(nt.history.scrollRestoration=Ph=e)},An,xs=0,Jd,WS=function(){if(Jd!==xs){var e=Jd=xs;requestAnimationFrame(function(){return e===xs&&us(!0)})}},o0=function(){ft.appendChild(vo),Lh=!Tn&&vo.offsetHeight||nt.innerHeight,ft.removeChild(vo)},Qd=function(e){return Ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},us=function(e,t){if(Zn=yt.documentElement,ft=yt.body,Ch=[nt,yt,Zn,ft],gi&&!e&&!hc){tn(Ze,"scrollEnd",i0);return}o0(),An=Ze.isRefreshing=!0,rt.forEach(function(r){return mn(r)&&++r.cacheID&&(r.rec=r())});var n=ws("refreshInit");Yg&&Ze.sort(),t||Nh(),rt.forEach(function(r){mn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),hc=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Cf=1,Qd(!0),et.forEach(function(r){var s=zi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Qd(!1),Cf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){mn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),s0(Ph,1),fc.pause(),xs++,An=2,or(2),et.forEach(function(r){return mn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),An=Ze.isRefreshing=!1,ws("refresh")},Lf=0,Yl=1,ba,or=function(e){if(e===2||!An&&!hc){Ze.isUpdating=!0,ba&&ba.update(0);var t=et.length,n=hn(),r=n-du>=50,s=t&&et[0].scroll();if(Yl=Lf>s?-1:1,An||(Lf=s),r&&(gi&&!Oc&&n-gi>200&&(gi=0,ws("scrollEnd")),ta=du,du=n),Yl<0){for(bn=t;bn-- >0;)et[bn]&&et[bn].update(0,r);Yl=1}else for(bn=0;bn<t;bn++)et[bn]&&et[bn].update(0,r);Ze.isUpdating=!1}ka=0},Df=[e0,t0,Uh,Dh,ui+Ta,ui+Sa,ui+Ea,ui+ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ql=Df.concat([gs,vs,"boxSizing","max"+Co,"max"+Ih,"position",ui,Ht,Ht+Ea,Ht+Sa,Ht+Ta,Ht+ya]),XS=function(e,t,n){xo(n);var r=e._gsap;if(r.spacerIsNative)xo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},_u=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Df.length,a=t.style,o=e.style,l;s--;)l=Df[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Uh]=o[Dh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[gs]=dc(e,Un)+$t,a[vs]=dc(e,jt)+$t,a[Ht]=o[ui]=o[t0]=o[e0]="0",xo(r),o[gs]=o["max"+Co]=n[gs],o[vs]=o["max"+Ih]=n[vs],o[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},YS=/([A-Z])/g,xo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(YS,"-$1").toLowerCase())}},ul=function(e){for(var t=ql.length,n=e.style,r=[],s=0;s<t;s++)r.push(ql[s],n[ql[s]]);return r.t=e,r},qS=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},$l={left:0,top:0},ep=function(e,t,n,r,s,a,o,l,c,u,f,d,h,g){mn(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Wl("0"+e.substr(3),n):0));var _=h?h.time():0,m,p,S;if(h&&h.seek(0),isNaN(e)||(e=+e),ra(e))h&&(e=Ce.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Xl(o,n,r,!0);else{mn(t)&&(t=t(l));var v=(e||"0").split(" "),E,C,R,A;S=Nn(t,l)||ft,E=ir(S)||{},(!E||!E.left&&!E.top)&&fi(S).display==="none"&&(A=S.style.display,S.style.display="block",E=ir(S),A?S.style.display=A:S.style.removeProperty("display")),C=Wl(v[0],E[r.d]),R=Wl(v[1]||"0",n),e=E[r.p]-c[r.p]-u+C+s-R,o&&Xl(o,R,r,n-R<20||o._isStart&&R>20),n-=n-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var F=e+n,M=a._isStart;m="scroll"+r.d2,Xl(a,F,r,M&&F>20||!M&&(f?Math.max(ft[m],Zn[m]):a.parentNode[m])<=F+1),f&&(c=ir(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+$t))}return h&&S&&(m=ir(S),h.seek(d),p=ir(S),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},$S=/(webkit|moz|length|cssText|inset)/i,tp=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===ft){e._stOrig=s.cssText,o=fi(e);for(a in o)!+a&&!$S.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},a0=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},fl=function(e,t,n){var r={};r[t.p]="+="+n,Ce.set(e,r)},np=function(e,t){var n=Hr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,g={};c=c||n();var _=a0(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&or()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=Ce.to(e,l),d};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),Ze.isTouch&&tn(e,"touchmove",n.wheelHandler),s},Ze=function(){function i(t,n){to||i.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!na){this.update=this.refresh=this.kill=Di;return}n=jd($n(n)||ra(n)||n.nodeType?{trigger:n}:n,ll);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,v=s.once,E=s.snap,C=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,F=s.fastScrollEnd,M=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:jt,G=!f&&f!==0,O=Nn(n.scroller||nt),$=Ce.core.getCache(O),U=bs(O),z=("pinType"in n?n.pinType:Dr(O,"pinType")||U&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=G&&n.toggleActions.split(" "),V="markers"in n?n.markers:ll.markers,Q=U?0:parseFloat(fi(O)["border"+b.p2+Co])||0,P=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(P)},fe=BS(O,U,b),ne=zS(O,U),le=0,de=0,ye=0,he=Hr(O,b),Le,Pe,be,Ve,y,I,B,K,Y,D,oe,T,x,L,Z,W,q,re,ae,ce,ue,Me,ie,Fe,Se,Oe,Ae,_e,we,Ke,lt,Te,me,N,ge,ve,Ge,ze,st;if(P._startClamp=P._endClamp=!1,P._dir=b,m*=45,P.scroller=O,P.scroll=A?A.time.bind(A):he,Ve=he(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(Yg=1,n.refreshPriority===-9999&&(ba=P)),$.tweenScroll=$.tweenScroll||{top:np(O,jt),left:np(O,Un)},P.tweenTo=Le=$.tweenScroll[b.p],P.scrubDuration=function(pe){me=ra(pe)&&pe,me?Te?Te.duration(pe):Te=Ce.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:me,paused:!0,onComplete:function(){return p&&p(P)}}):(Te&&Te.progress(1).kill(),Te=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),Ke=0,l||(l=r.vars.id)),E&&((!is(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in ft.style&&Ce.set(U?[ft,Zn]:O,{scrollBehavior:"auto"}),rt.forEach(function(pe){return mn(pe)&&pe.target===(U?yt.scrollingElement||Zn:O)&&(pe.smooth=!1)}),be=mn(E.snapTo)?E.snapTo:E.snapTo==="labels"?GS(r):E.snapTo==="labelsDirectional"?kS(r):E.directional!==!1?function(pe,ke){return Oh(E.snapTo)(pe,hn()-de<500?0:ke.direction)}:Ce.utils.snap(E.snapTo),N=E.duration||{min:.1,max:2},N=is(N)?Ma(N.min,N.max):Ma(N,N),ge=Ce.delayedCall(E.delay||me/2||.1,function(){var pe=he(),ke=hn()-de<500,He=Le.tween;if((ke||Math.abs(P.getVelocity())<10)&&!He&&!Oc&&le!==pe){var qe=(pe-I)/L,Ct=r&&!G?r.totalProgress():qe,tt=ke?0:(Ct-lt)/(hn()-ta)*1e3||0,Mt=Ce.utils.clamp(-qe,1-qe,Os(tt/2)*tt/.185),Yt=qe+(E.inertia===!1?0:Mt),bt,St,pt=E,Vn=pt.onStart,w=pt.onInterrupt,X=pt.onComplete;if(bt=be(Yt,P),ra(bt)||(bt=Yt),St=Math.max(0,Math.round(I+bt*L)),pe<=B&&pe>=I&&St!==pe){if(He&&!He._initted&&He.data<=Os(St-pe))return;E.inertia===!1&&(Mt=bt-qe),Le(St,{duration:N(Os(Math.max(Os(Yt-Ct),Os(bt-Ct))*.185/tt/.05||0)),ease:E.ease||"power3",data:Os(St-pe),onInterrupt:function(){return ge.restart(!0)&&w&&w(P)},onComplete:function(){P.update(),le=he(),r&&!G&&(Te?Te.resetTo("totalProgress",bt,r._tTime/r._tDur):r.progress(bt)),Ke=lt=r&&!G?r.totalProgress():P.progress,S&&S(P),X&&X(P)}},pe,Mt*L,St-pe-Mt*L),Vn&&Vn(P,Le.tween)}}else P.isActive&&le!==pe&&ge.restart(!0)}).pause()),l&&(Pf[l]=P),d=P.trigger=Nn(d||h!==!0&&h),st=d&&d._gsap&&d._gsap.stRevert,st&&(st=st(P)),h=h===!0?d:Nn(h),$n(o)&&(o={targets:d,className:o}),h&&(g===!1||g===ui||(g=!g&&h.parentNode&&h.parentNode.style&&fi(h.parentNode).display==="flex"?!1:Ht),P.pin=h,Pe=Ce.core.getCache(h),Pe.spacer?Z=Pe.pinState:(R&&(R=Nn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Pe.spacerIsNative=!!R,R&&(Pe.spacerState=ul(R))),Pe.spacer=re=R||yt.createElement("div"),re.classList.add("pin-spacer"),l&&re.classList.add("pin-spacer-"+l),Pe.pinState=Z=ul(h)),n.force3D!==!1&&Ce.set(h,{force3D:!0}),P.spacer=re=Pe.spacer,we=fi(h),Fe=we[g+b.os2],ce=Ce.getProperty(h),ue=Ce.quickSetter(h,b.a,$t),_u(h,re,we),q=ul(h)),V){T=is(V)?jd(V,Kd):Kd,D=cl("scroller-start",l,O,b,T,0),oe=cl("scroller-end",l,O,b,T,0,D),ae=D["offset"+b.op.d2];var ut=Nn(Dr(O,"content")||O);K=this.markerStart=cl("start",l,ut,b,T,ae,0,A),Y=this.markerEnd=cl("end",l,ut,b,T,ae,0,A),A&&(ze=Ce.quickSetter([K,Y],b.a,$t)),!z&&!(ki.length&&Dr(O,"fixedMarkers")===!0)&&(HS(U?ft:O),Ce.set([D,oe],{force3D:!0}),Oe=Ce.quickSetter(D,b.a,$t),_e=Ce.quickSetter(oe,b.a,$t))}if(A){var Ie=A.vars.onUpdate,Re=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),Ie&&Ie.apply(A,Re||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(pe,ke){if(!ke)return P.kill(!0);var He=pe!==!1||!P.enabled,qe=fn;He!==P.isReverted&&(He&&(ve=Math.max(he(),P.scroll.rec||0),ye=P.progress,Ge=r&&r.progress()),K&&[K,Y,D,oe].forEach(function(Ct){return Ct.style.display=He?"none":"block"}),He&&(fn=P,P.update(He)),h&&(!C||!P.isActive)&&(He?XS(h,re,Z):_u(h,re,fi(h),Se)),He||P.update(He),fn=qe,P.isReverted=He)},P.refresh=function(pe,ke,He,qe){if(!((fn||!P.enabled)&&!ke)){if(h&&pe&&gi){tn(i,"scrollEnd",i0);return}!An&&se&&se(P),fn=P,Le.tween&&!He&&(Le.tween.kill(),Le.tween=0),Te&&Te.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Ye){return Ye.vars.immediateRender&&Ye.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ct=fe(),tt=ne(),Mt=A?A.duration():zi(O,b),Yt=L<=.01||!L,bt=0,St=qe||0,pt=is(He)?He.end:n.end,Vn=n.endTrigger||d,w=is(He)?He.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),X=P.pinnedContainer=n.pinnedContainer&&Nn(n.pinnedContainer,P),te=d&&Math.max(0,et.indexOf(P))||0,ee=te,j,xe,De,We,Ue,Ne,Xe,$e,wt,qt,mt,vn,_t;for(V&&is(He)&&(vn=Ce.getProperty(D,b.p),_t=Ce.getProperty(oe,b.p));ee-- >0;)Ne=et[ee],Ne.end||Ne.refresh(0,1)||(fn=P),Xe=Ne.pin,Xe&&(Xe===d||Xe===h||Xe===X)&&!Ne.isReverted&&(qt||(qt=[]),qt.unshift(Ne),Ne.revert(!0,!0)),Ne!==et[ee]&&(te--,ee--);for(mn(w)&&(w=w(P)),w=Xd(w,"start",P),I=ep(w,d,Ct,b,he(),K,D,P,tt,Q,z,Mt,A,P._startClamp&&"_startClamp")||(h?-.001:0),mn(pt)&&(pt=pt(P)),$n(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=($n(w)?w.split(" ")[0]:"")+pt:(bt=Wl(pt.substr(2),Ct),pt=$n(w)?w:(A?Ce.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,I):I)+bt,Vn=d)),pt=Xd(pt,"end",P),B=Math.max(I,ep(pt||(Vn?"100% 0":Mt),Vn,Ct,b,he()+bt,Y,oe,P,tt,Q,z,Mt,A,P._endClamp&&"_endClamp"))||-.001,bt=0,ee=te;ee--;)Ne=et[ee],Xe=Ne.pin,Xe&&Ne.start-Ne._pinPush<=I&&!A&&Ne.end>0&&(j=Ne.end-(P._startClamp?Math.max(0,Ne.start):Ne.start),(Xe===d&&Ne.start-Ne._pinPush<I||Xe===X)&&isNaN(w)&&(bt+=j*(1-Ne.progress)),Xe===h&&(St+=j));if(I+=bt,B+=bt,P._startClamp&&(P._startClamp+=bt),P._endClamp&&!An&&(P._endClamp=B||-.001,B=Math.min(B,zi(O,b))),L=B-I||(I-=.01)&&.001,Yt&&(ye=Ce.utils.clamp(0,1,Ce.utils.normalize(I,B,ve))),P._pinPush=St,K&&bt&&(j={},j[b.a]="+="+bt,X&&(j[b.p]="-="+he()),Ce.set([K,Y],j)),h&&!(Cf&&P.end>=zi(O,b)))j=fi(h),We=b===jt,De=he(),Me=parseFloat(ce(b.a))+St,!Mt&&B>1&&(mt=(U?yt.scrollingElement||Zn:O).style,mt={style:mt,value:mt["overflow"+b.a.toUpperCase()]},U&&fi(ft)["overflow"+b.a.toUpperCase()]!=="scroll"&&(mt.style["overflow"+b.a.toUpperCase()]="scroll")),_u(h,re,j),q=ul(h),xe=ir(h,!0),$e=z&&Hr(O,We?Un:jt)(),g?(Se=[g+b.os2,L+St+$t],Se.t=re,ee=g===Ht?dc(h,b)+L+St:0,ee&&(Se.push(b.d,ee+$t),re.style.flexBasis!=="auto"&&(re.style.flexBasis=ee+$t)),xo(Se),X&&et.forEach(function(Ye){Ye.pin===X&&Ye.vars.pinSpacing!==!1&&(Ye._subPinOffset=!0)}),z&&he(ve)):(ee=dc(h,b),ee&&re.style.flexBasis!=="auto"&&(re.style.flexBasis=ee+$t)),z&&(Ue={top:xe.top+(We?De-I:$e)+$t,left:xe.left+(We?$e:De-I)+$t,boxSizing:"border-box",position:"fixed"},Ue[gs]=Ue["max"+Co]=Math.ceil(xe.width)+$t,Ue[vs]=Ue["max"+Ih]=Math.ceil(xe.height)+$t,Ue[ui]=Ue[ui+Ea]=Ue[ui+Sa]=Ue[ui+Ta]=Ue[ui+ya]="0",Ue[Ht]=j[Ht],Ue[Ht+Ea]=j[Ht+Ea],Ue[Ht+Sa]=j[Ht+Sa],Ue[Ht+Ta]=j[Ht+Ta],Ue[Ht+ya]=j[Ht+ya],W=qS(Z,Ue,C),An&&he(0)),r?(wt=r._initted,fu(1),r.render(r.duration(),!0,!0),ie=ce(b.a)-Me+L+St,Ae=Math.abs(L-ie)>1,z&&Ae&&W.splice(W.length-2,2),r.render(0,!0,!0),wt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),fu(0)):ie=L,mt&&(mt.value?mt.style["overflow"+b.a.toUpperCase()]=mt.value:mt.style.removeProperty("overflow-"+b.a));else if(d&&he()&&!A)for(xe=d.parentNode;xe&&xe!==ft;)xe._pinOffset&&(I-=xe._pinOffset,B-=xe._pinOffset),xe=xe.parentNode;qt&&qt.forEach(function(Ye){return Ye.revert(!1,!0)}),P.start=I,P.end=B,Ve=y=An?ve:he(),!A&&!An&&(Ve<ve&&he(ve),P.scroll.rec=0),P.revert(!1,!0),de=hn(),ge&&(le=-1,ge.restart(!0)),fn=0,r&&G&&(r._initted||Ge)&&r.progress()!==Ge&&r.progress(Ge||0,!0).render(r.time(),!0,!0),(Yt||ye!==P.progress||A||_||r&&!r._initted)&&(r&&!G&&(r._initted||ye||r.vars.immediateRender!==!1)&&r.totalProgress(A&&I<-.001&&!ye?Ce.utils.normalize(I,B,0):ye,!0),P.progress=Yt||(Ve-I)/L===ye?0:ye),h&&g&&(re._pinOffset=Math.round(P.progress*ie)),Te&&Te.invalidate(),isNaN(vn)||(vn-=Ce.getProperty(D,b.p),_t-=Ce.getProperty(oe,b.p),fl(D,b,vn),fl(K,b,vn-(qe||0)),fl(oe,b,_t),fl(Y,b,_t-(qe||0))),Yt&&!An&&P.update(),u&&!An&&!x&&(x=!0,u(P),x=!1)}},P.getVelocity=function(){return(he()-y)/(hn()-ta)*1e3||0},P.endAnimation=function(){Xo(P.callbackAnimation),r&&(Te?Te.progress(1):r.paused()?G||Xo(r,P.direction<0,1):Xo(r,r.reversed()))},P.labelToScroll=function(pe){return r&&r.labels&&(I||P.refresh()||I)+r.labels[pe]/r.duration()*L||0},P.getTrailing=function(pe){var ke=et.indexOf(P),He=P.direction>0?et.slice(0,ke).reverse():et.slice(ke+1);return($n(pe)?He.filter(function(qe){return qe.vars.preventOverlaps===pe}):He).filter(function(qe){return P.direction>0?qe.end<=I:qe.start>=B})},P.update=function(pe,ke,He){if(!(A&&!He&&!pe)){var qe=An===!0?ve:P.scroll(),Ct=pe?0:(qe-I)/L,tt=Ct<0?0:Ct>1?1:Ct||0,Mt=P.progress,Yt,bt,St,pt,Vn,w,X,te;if(ke&&(y=Ve,Ve=A?he():qe,E&&(lt=Ke,Ke=r&&!G?r.totalProgress():tt)),m&&h&&!fn&&!rl&&gi&&(!tt&&I<qe+(qe-y)/(hn()-ta)*m?tt=1e-4:tt===1&&B>qe+(qe-y)/(hn()-ta)*m&&(tt=.9999)),tt!==Mt&&P.enabled){if(Yt=P.isActive=!!tt&&tt<1,bt=!!Mt&&Mt<1,w=Yt!==bt,Vn=w||!!tt!=!!Mt,P.direction=tt>Mt?1:-1,P.progress=tt,Vn&&!fn&&(St=tt&&!Mt?0:tt===1?1:Mt===1?2:3,G&&(pt=!w&&k[St+1]!=="none"&&k[St+1]||k[St],te=r&&(pt==="complete"||pt==="reset"||pt in r))),M&&(w||te)&&(te||f||!r)&&(mn(M)?M(P):P.getTrailing(M).forEach(function(De){return De.endAnimation()})),G||(Te&&!fn&&!rl?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",tt,r._tTime/r._tDur):(Te.vars.totalProgress=tt,Te.invalidate().restart())):r&&r.totalProgress(tt,!!(fn&&(de||pe)))),h){if(pe&&g&&(re.style[g+b.os2]=Fe),!z)ue(ia(Me+ie*tt));else if(Vn){if(X=!pe&&tt>Mt&&B+1>qe&&qe+1>=zi(O,b),C)if(!pe&&(Yt||X)){var ee=ir(h,!0),j=qe-I;tp(h,ft,ee.top+(b===jt?j:0)+$t,ee.left+(b===jt?0:j)+$t)}else tp(h,re);xo(Yt||X?W:q),Ae&&tt<1&&Yt||ue(Me+(tt===1&&!X?ie:0))}}E&&!Le.tween&&!fn&&!rl&&ge.restart(!0),o&&(w||v&&tt&&(tt<1||!hu))&&Ga(o.targets).forEach(function(De){return De.classList[Yt||v?"add":"remove"](o.className)}),a&&!G&&!pe&&a(P),Vn&&!fn?(G&&(te&&(pt==="complete"?r.pause().totalProgress(1):pt==="reset"?r.restart(!0).pause():pt==="restart"?r.restart(!0):r[pt]()),a&&a(P)),(w||!hu)&&(c&&w&&pu(P,c),H[St]&&pu(P,H[St]),v&&(tt===1?P.kill(!1,1):H[St]=0),w||(St=tt===1?1:3,H[St]&&pu(P,H[St]))),F&&!Yt&&Math.abs(P.getVelocity())>(ra(F)?F:2500)&&(Xo(P.callbackAnimation),Te?Te.progress(1):Xo(r,pt==="reverse"?1:!tt,1))):G&&a&&!fn&&a(P)}if(_e){var xe=A?qe/A.duration()*(A._caScrollDist||0):qe;Oe(xe+(D._isFlipped?1:0)),_e(xe)}ze&&ze(-qe/A.duration()*(A._caScrollDist||0))}},P.enable=function(pe,ke){P.enabled||(P.enabled=!0,tn(O,"resize",sa),U||tn(O,"scroll",Ns),se&&tn(i,"refreshInit",se),pe!==!1&&(P.progress=ye=0,Ve=y=le=he()),ke!==!1&&P.refresh())},P.getTween=function(pe){return pe&&Le?Le.tween:Te},P.setPositions=function(pe,ke,He,qe){if(A){var Ct=A.scrollTrigger,tt=A.duration(),Mt=Ct.end-Ct.start;pe=Ct.start+Mt*pe/tt,ke=Ct.start+Mt*ke/tt}P.refresh(!1,!1,{start:Yd(pe,He&&!!P._startClamp),end:Yd(ke,He&&!!P._endClamp)},qe),P.update()},P.adjustPinSpacing=function(pe){if(Se&&pe){var ke=Se.indexOf(b.d)+1;Se[ke]=parseFloat(Se[ke])+pe+$t,Se[1]=parseFloat(Se[1])+pe+$t,xo(Se)}},P.disable=function(pe,ke){if(P.enabled&&(pe!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ke||Te&&Te.pause(),ve=0,Pe&&(Pe.uncache=1),se&&en(i,"refreshInit",se),ge&&(ge.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!U)){for(var He=et.length;He--;)if(et[He].scroller===O&&et[He]!==P)return;en(O,"resize",sa),U||en(O,"scroll",Ns)}},P.kill=function(pe,ke){P.disable(pe,ke),Te&&!ke&&Te.kill(),l&&delete Pf[l];var He=et.indexOf(P);He>=0&&et.splice(He,1),He===bn&&Yl>0&&bn--,He=0,et.forEach(function(qe){return qe.scroller===P.scroller&&(He=1)}),He||An||(P.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),ke||r.kill()),K&&[K,Y,D,oe].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),ba===P&&(ba=0),h&&(Pe&&(Pe.uncache=1),He=0,et.forEach(function(qe){return qe.pin===h&&He++}),He||(Pe.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),st&&st(P),r&&r.add&&!L){var Be=P.update;P.update=function(){P.update=Be,rt.cache++,I||B||P.refresh()},Ce.delayedCall(.01,P.update),L=.01,I=B=0}else P.refresh();h&&WS()},i.register=function(n){return to||(Ce=n||Zg(),Kg()&&window.document&&i.enable(),to=na),to},i.defaults=function(n){if(n)for(var r in n)ll[r]=n[r];return ll},i.disable=function(n,r){na=0,et.forEach(function(a){return a[r?"kill":"disable"](n)}),en(nt,"wheel",Ns),en(yt,"scroll",Ns),clearInterval(il),en(yt,"touchcancel",Di),en(ft,"touchstart",Di),ol(en,yt,"pointerdown,touchstart,mousedown",qd),ol(en,yt,"pointerup,touchend,mouseup",$d),fc.kill(),sl(en);for(var s=0;s<rt.length;s+=3)al(en,rt[s],rt[s+1]),al(en,rt[s],rt[s+2])},i.enable=function(){if(nt=window,yt=document,Zn=yt.documentElement,ft=yt.body,Ce&&(Ga=Ce.utils.toArray,Ma=Ce.utils.clamp,Rf=Ce.core.context||Di,fu=Ce.core.suppressOverwrites||Di,Ph=nt.history.scrollRestoration||"auto",Lf=nt.pageYOffset||0,Ce.core.globals("ScrollTrigger",i),ft)){na=1,vo=document.createElement("div"),vo.style.height="100vh",vo.style.position="absolute",o0(),FS(),Bt.register(Ce),i.isTouch=Bt.isTouch,vr=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wf=Bt.isTouch===1,tn(nt,"wheel",Ns),Ch=[nt,yt,Zn,ft],Ce.matchMedia?(i.matchMedia=function(c){var u=Ce.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ce.addEventListener("matchMediaInit",function(){return Nh()}),Ce.addEventListener("matchMediaRevert",function(){return r0()}),Ce.addEventListener("matchMedia",function(){us(0,1),ws("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return mu(),mu})):console.warn("Requires GSAP 3.11.0 or later"),mu(),tn(yt,"scroll",Ns);var n=ft.hasAttribute("style"),r=ft.style,s=r.borderTopStyle,a=Ce.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=ir(ft),jt.m=Math.round(o.top+jt.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(ft.setAttribute("style",""),ft.removeAttribute("style")),il=setInterval(Zd,250),Ce.delayedCall(.5,function(){return rl=0}),tn(yt,"touchcancel",Di),tn(ft,"touchstart",Di),ol(tn,yt,"pointerdown,touchstart,mousedown",qd),ol(tn,yt,"pointerup,touchend,mouseup",$d),Af=Ce.utils.checkPrefix("transform"),ql.push(Af),to=hn(),fc=Ce.delayedCall(.2,us).pause(),no=[yt,"visibilitychange",function(){var c=nt.innerWidth,u=nt.innerHeight;yt.hidden?(Vd=c,Wd=u):(Vd!==c||Wd!==u)&&sa()},yt,"DOMContentLoaded",us,nt,"load",us,nt,"resize",sa],sl(tn),et.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)al(en,rt[l],rt[l+1]),al(en,rt[l],rt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(hu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(il)||(il=r)&&setInterval(Zd,r),"ignoreMobileResize"in n&&(wf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(sl(en)||sl(tn,n.autoRefreshEvents||"none"),qg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Nn(n),a=rt.indexOf(s),o=bs(s);~a&&rt.splice(a,o?6:2),r&&(o?ki.unshift(nt,r,ft,r,Zn,r):ki.unshift(s,r))},i.clearMatchMedia=function(n){et.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=($n(n)?Nn(n):n).getBoundingClientRect(),o=a[s?gs:vs]*r||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},i.positionInViewport=function(n,r,s){$n(n)&&(n=Nn(n));var a=n.getBoundingClientRect(),o=a[s?gs:vs],l=r==null?o/2:r in pc?pc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},i.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=As.killAll||[];As={},r.forEach(function(s){return s()})}},i}();Ze.version="3.13.0";Ze.saveStyles=function(i){return i?Ga(i).forEach(function(e){if(e&&e.style){var t=qn.indexOf(e);t>=0&&qn.splice(t,5),qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Rf())}}):qn};Ze.revert=function(i,e){return Nh(!i,e)};Ze.create=function(i,e){return new Ze(i,e)};Ze.refresh=function(i){return i?sa(!0):(to||Ze.register())&&us(!0)};Ze.update=function(i){return++rt.cache&&or(i===!0?2:0)};Ze.clearScrollMemory=s0;Ze.maxScroll=function(i,e){return zi(i,e?Un:jt)};Ze.getScrollFunc=function(i,e){return Hr(Nn(i),e?Un:jt)};Ze.getById=function(i){return Pf[i]};Ze.getAll=function(){return et.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!gi};Ze.snapDirectional=Oh;Ze.addEventListener=function(i,e){var t=As[i]||(As[i]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(i,e){var t=As[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=Ce.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&mn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return mn(s)&&(s=s(),tn(Ze,"refresh",function(){return s=e.batchMax()})),Ga(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ze.create(c))}),t};var ip=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},gu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===Zn&&i(ft,t)},hl={auto:1,scroll:1},jS=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ce.core.getCache(s),o=hn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ft&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hl[(l=fi(s)).overflowY]||hl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!bs(s)&&(hl[(l=fi(s)).overflowY]||hl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},l0=function(e,t,n,r){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&jS,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&tn(yt,Bt.eventTypes[0],sp,!1,!0)},onDisable:function(){return en(yt,Bt.eventTypes[0],sp,!0)}})},KS=/(input|label|select|textarea)/i,rp,sp=function(e){var t=KS.test(e.target.tagName);(t||rp)&&(e._gsapAllow=!0,rp=t)},ZS=function(e){is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Nn(e.target)||Zn,u=Ce.core.globals().ScrollSmoother,f=u&&u.get(),d=vr&&(e.content&&Nn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Hr(c,jt),g=Hr(c,Un),_=1,m=(Bt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,S=mn(r)?function(){return r(o)}:function(){return r||2.8},v,E,C=l0(c,e.type,!0,s),R=function(){return E=!1},A=Di,F=Di,M=function(){l=zi(c,jt),F=Ma(vr?1:0,l),n&&(A=Ma(0,zi(c,Un))),v=xs},b=function(){d._gsap.y=ia(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},G=function(){if(E){requestAnimationFrame(R);var V=ia(o.deltaY/2),Q=F(h.v-V);if(d&&Q!==h.v+h.offset){h.offset=Q-h.v;var P=ia((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",h.cacheID=rt.cache,or()}return!0}h.offset&&b(),E=!0},O,$,U,z,H=function(){M(),O.isActive()&&O.vars.scrollY>l&&(h()>l?O.progress(1)&&h(l):O.resetTo("scrollY",l))};return d&&Ce.set(d,{y:"+=0"}),e.ignoreCheck=function(k){return vr&&k.type==="touchmove"&&G()||_>1.05&&k.type!=="touchstart"||o.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){E=!1;var k=_;_=ia((nt.visualViewport&&nt.visualViewport.scale||1)/m),O.pause(),k!==_&&gu(c,_>1.01?!0:n?!1:"x"),$=g(),U=h(),M(),v=xs},e.onRelease=e.onGestureStart=function(k,V){if(h.offset&&b(),!V)z.restart(!0);else{rt.cache++;var Q=S(),P,se;n&&(P=g(),se=P+Q*.05*-k.velocityX/.227,Q*=ip(g,P,se,zi(c,Un)),O.vars.scrollX=A(se)),P=h(),se=P+Q*.05*-k.velocityY/.227,Q*=ip(h,P,se,zi(c,jt)),O.vars.scrollY=F(se),O.invalidate().duration(Q).play(.01),(vr&&O.vars.scrollY>=l||P>=l-1)&&Ce.to({},{onUpdate:H,duration:Q})}a&&a(k)},e.onWheel=function(){O._ts&&O.pause(),hn()-p>1e3&&(v=0,p=hn())},e.onChange=function(k,V,Q,P,se){if(xs!==v&&M(),V&&n&&g(A(P[2]===V?$+(k.startX-k.x):g()+V-P[1])),Q){h.offset&&b();var fe=se[2]===Q,ne=fe?U+k.startY-k.y:h()+Q-se[1],le=F(ne);fe&&ne!==le&&(U+=le-ne),h(le)}(Q||V)&&or()},e.onEnable=function(){gu(c,n?!1:"x"),Ze.addEventListener("refresh",H),tn(nt,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){gu(c,!0),en(nt,"resize",H),Ze.removeEventListener("refresh",H),C.kill()},e.lockAxis=e.lockAxis!==!1,o=new Bt(e),o.iOS=vr,vr&&!h()&&h(1),vr&&Ce.ticker.add(Di),z=o._dc,O=Ce.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:a0(h,h(),function(){return O.pause()})},onUpdate:or,onComplete:z.vars.onComplete}),o};Ze.sort=function(i){if(mn(i))return et.sort(i);var e=nt.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(i){return new Bt(i)};Ze.normalizeScroll=function(i){if(typeof i>"u")return Tn;if(i===!0&&Tn)return Tn.enable();if(i===!1){Tn&&Tn.kill(),Tn=i;return}var e=i instanceof Bt?i:ZS(i);return Tn&&Tn.target===e.target&&Tn.kill(),bs(e.target)&&(Tn=e),e};Ze.core={_getVelocityProp:bf,_inputObserver:l0,_scrollers:rt,_proxies:ki,bridge:{ss:function(){gi||ws("scrollStart"),gi=hn()},ref:function(){return fn}}};Zg()&&Ce.registerPlugin(Ze);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="160",JS=0,op=1,QS=2,c0=1,u0=2,Zi=3,Gr=0,Wt=1,Ni=2,Ur=0,Mo=1,ap=2,lp=3,cp=4,ey=5,as=100,ty=101,ny=102,up=103,fp=104,iy=200,ry=201,sy=202,oy=203,Uf=204,If=205,ay=206,ly=207,cy=208,uy=209,fy=210,hy=211,dy=212,py=213,my=214,_y=0,gy=1,vy=2,mc=3,xy=4,My=5,Sy=6,yy=7,f0=0,Ey=1,Ty=2,Ir=0,by=1,Ay=2,wy=3,h0=4,Ry=5,Cy=6,d0=300,Po=301,Lo=302,Of=303,Nf=304,Nc=306,Ff=1e3,Ti=1001,Bf=1002,wn=1003,hp=1004,vu=1005,hi=1006,Py=1007,Va=1008,Or=1009,Ly=1010,Dy=1011,Bh=1012,p0=1013,wr=1014,Rr=1015,Wa=1016,m0=1017,_0=1018,Ms=1020,Uy=1021,bi=1023,Iy=1024,Oy=1025,Ss=1026,Do=1027,Ny=1028,g0=1029,Fy=1030,v0=1031,x0=1033,xu=33776,Mu=33777,Su=33778,yu=33779,dp=35840,pp=35841,mp=35842,_p=35843,M0=36196,gp=37492,vp=37496,xp=37808,Mp=37809,Sp=37810,yp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,wp=37816,Rp=37817,Cp=37818,Pp=37819,Lp=37820,Dp=37821,Eu=36492,Up=36494,Ip=36495,By=36283,Op=36284,Np=36285,Fp=36286,S0=3e3,ys=3001,zy=3200,Hy=3201,y0=0,Gy=1,di="",Vt="srgb",fr="srgb-linear",zh="display-p3",Fc="display-p3-linear",_c="linear",At="srgb",gc="rec709",vc="p3",Fs=7680,Bp=519,ky=512,Vy=513,Wy=514,E0=515,Xy=516,Yy=517,qy=518,$y=519,zp=35044,Hp="300 es",zf=1035,sr=2e3,xc=2001;class Oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gp=1234567;const Aa=Math.PI/180,Uo=180/Math.PI;function No(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Pn(i,e,t){return Math.max(e,Math.min(t,i))}function Hh(i,e){return(i%e+e)%e}function jy(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ky(i,e,t){return i!==e?(t-i)/(e-i):0}function wa(i,e,t){return(1-t)*i+t*e}function Zy(i,e,t,n){return wa(i,e,1-Math.exp(-t*n))}function Jy(i,e=1){return e-Math.abs(Hh(i,e*2)-e)}function Qy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function eE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nE(i,e){return i+Math.random()*(e-i)}function iE(i){return i*(.5-Math.random())}function rE(i){i!==void 0&&(Gp=i);let e=Gp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sE(i){return i*Aa}function oE(i){return i*Uo}function Hf(i){return(i&i-1)===0&&i!==0}function aE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lE(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function io(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cE={DEG2RAD:Aa,RAD2DEG:Uo,generateUUID:No,clamp:Pn,euclideanModulo:Hh,mapLinear:jy,inverseLerp:Ky,lerp:wa,damp:Zy,pingpong:Jy,smoothstep:Qy,smootherstep:eE,randInt:tE,randFloat:nE,randFloatSpread:iE,seededRandom:rE,degToRad:sE,radToDeg:oE,isPowerOfTwo:Hf,ceilPowerOfTwo:aE,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:lE,normalize:yn,denormalize:io};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,r,s,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=r[0],m=r[3],p=r[6],S=r[1],v=r[4],E=r[7],C=r[2],R=r[5],A=r[8];return s[0]=a*_+o*S+l*C,s[3]=a*m+o*v+l*R,s[6]=a*p+o*E+l*A,s[1]=c*_+u*S+f*C,s[4]=c*m+u*v+f*R,s[7]=c*p+u*E+f*A,s[2]=d*_+h*S+g*C,s[5]=d*m+h*v+g*R,s[8]=d*p+h*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*f+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new it;function T0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uE(){const i=Xa("canvas");return i.style.display="block",i}const kp={};function Ra(i){i in kp||(kp[i]=!0,console.warn(i))}const Vp=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wp=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dl={[fr]:{transfer:_c,primaries:gc,toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:At,primaries:gc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fc]:{transfer:_c,primaries:vc,toReference:i=>i.applyMatrix3(Wp),fromReference:i=>i.applyMatrix3(Vp)},[zh]:{transfer:At,primaries:vc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wp),fromReference:i=>i.applyMatrix3(Vp).convertLinearToSRGB()}},fE=new Set([fr,Fc]),gt={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fE.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=dl[e].toReference,r=dl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return dl[i].primaries},getTransfer:function(i){return i===di?_c:dl[i].transfer}};function So(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class b0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=Xa("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=So(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(So(t[n]/255)*255):t[n]=So(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hE=0;class A0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=No(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Au(r[a].image)):s.push(Au(r[a]))}else s=Au(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Au(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?b0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dE=0;class Gn extends Oo{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,n=Ti,r=Ti,s=hi,a=Va,o=bi,l=Or,c=Gn.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=No(),this.name="",this.source=new A0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ys?Vt:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?ys:S0}set encoding(e){Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ys?Vt:di}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=d0;Gn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,n=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(h+1)/2,C=(p+1)/2,R=(u+d)/4,A=(f+_)/4,F=(g+m)/4;return v>E&&v>C?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=R/n,s=A/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=F/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=F/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pE extends Oo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ys?Vt:di),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new A0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends pE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class w0 extends Gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mE extends Gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-o;const p=l*d+c*h+u*g+f*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,p*S);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const E=o*S;if(l=l*m+d*E,c=c*m+h*E,u=u*m+g*E,f=f*m+_*E,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),d=l(n/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new J,Xp=new Fo;class Ds{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(s,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pl.copy(n.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),ml.subVectors(this.max,Yo),zs.subVectors(e.a,Yo),Hs.subVectors(e.b,Yo),Gs.subVectors(e.c,Yo),dr.subVectors(Hs,zs),pr.subVectors(Gs,Hs),Kr.subVectors(zs,Gs);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Kr.z,Kr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Kr.z,0,-Kr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Kr.y,Kr.x,0];return!Ru(t,zs,Hs,Gs,ml)||(t=[1,0,0,0,1,0,0,0,1],!Ru(t,zs,Hs,Gs,ml))?!1:(_l.crossVectors(dr,pr),t=[_l.x,_l.y,_l.z],Ru(t,zs,Hs,Gs,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new J,new J,new J,new J,new J,new J,new J,new J],xi=new J,pl=new Ds,zs=new J,Hs=new J,Gs=new J,dr=new J,pr=new J,Kr=new J,Yo=new J,ml=new J,_l=new J,Zr=new J;function Ru(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zr.fromArray(i,s);const o=r.x*Math.abs(Zr.x)+r.y*Math.abs(Zr.y)+r.z*Math.abs(Zr.z),l=e.dot(Zr),c=t.dot(Zr),u=n.dot(Zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _E=new Ds,qo=new J,Cu=new J;class ja{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_E.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Cu)),this.expandByPoint(qo.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new J,Pu=new J,gl=new J,mr=new J,Lu=new J,vl=new J,Du=new J;class gE{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pu.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Pu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gl),o=mr.dot(this.direction),l=-mr.dot(gl),c=mr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Pu).addScaledVector(gl,d),h}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),r=qi.dot(qi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,r,s){Lu.subVectors(t,e),vl.subVectors(n,e),Du.crossVectors(Lu,vl);let a=this.direction.dot(Du),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mr.subVectors(this.origin,e);const l=o*this.direction.dot(vl.crossVectors(mr,vl));if(l<0)return null;const c=o*this.direction.dot(Lu.cross(mr));if(c<0||l+c>a)return null;const u=-o*mr.dot(Du);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,r,s,a,o,l,c,u,f,d,h,g,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,d,h,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vE,e,xE)}lookAt(e,t,n){const r=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),_r.crossVectors(n,Wn),_r.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),_r.crossVectors(n,Wn)),_r.normalize(),xl.crossVectors(Wn,_r),r[0]=_r.x,r[4]=xl.x,r[8]=Wn.x,r[1]=_r.y,r[5]=xl.y,r[9]=Wn.y,r[2]=_r.z,r[6]=xl.z,r[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],E=n[11],C=n[15],R=r[0],A=r[4],F=r[8],M=r[12],b=r[1],G=r[5],O=r[9],$=r[13],U=r[2],z=r[6],H=r[10],k=r[14],V=r[3],Q=r[7],P=r[11],se=r[15];return s[0]=a*R+o*b+l*U+c*V,s[4]=a*A+o*G+l*z+c*Q,s[8]=a*F+o*O+l*H+c*P,s[12]=a*M+o*$+l*k+c*se,s[1]=u*R+f*b+d*U+h*V,s[5]=u*A+f*G+d*z+h*Q,s[9]=u*F+f*O+d*H+h*P,s[13]=u*M+f*$+d*k+h*se,s[2]=g*R+_*b+m*U+p*V,s[6]=g*A+_*G+m*z+p*Q,s[10]=g*F+_*O+m*H+p*P,s[14]=g*M+_*$+m*k+p*se,s[3]=S*R+v*b+E*U+C*V,s[7]=S*A+v*G+E*z+C*Q,s[11]=S*F+v*O+E*H+C*P,s[15]=S*M+v*$+E*k+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*h-n*l*h)+_*(+t*l*h-t*c*d+s*a*d-r*a*h+r*c*u-s*l*u)+m*(+t*c*f-t*o*h-s*a*f+n*a*h+s*o*u-n*c*u)+p*(-r*o*u-t*l*f+t*o*d+r*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=f*m*c-_*d*c+_*l*h-o*m*h-f*l*p+o*d*p,v=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,E=u*_*c-g*f*c+g*o*h-a*_*h-u*o*p+a*f*p,C=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,R=t*S+n*v+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(_*d*s-f*m*s-_*r*h+n*m*h+f*r*p-n*d*p)*A,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*A,e[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*h-n*l*h)*A,e[4]=v*A,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*A,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*h+t*l*h)*A,e[8]=E*A,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*h-t*o*h)*A,e[12]=C*A,e[13]=(u*_*r-g*f*r+g*n*d-t*_*d-u*n*m+t*f*m)*A,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,S=l*c,v=l*u,E=l*f,C=n.x,R=n.y,A=n.z;return r[0]=(1-(_+p))*C,r[1]=(h+E)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(h-E)*R,r[5]=(1-(d+p))*R,r[6]=(m+S)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(m-S)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ks.set(r[0],r[1],r[2]).length();const a=ks.set(r[4],r[5],r[6]).length(),o=ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mi.copy(this);const c=1/s,u=1/a,f=1/o;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=f,Mi.elements[9]*=f,Mi.elements[10]*=f,t.setFromRotationMatrix(Mi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=sr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let h,g;if(o===sr)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===xc)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=sr){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(a-s),d=(t+e)*c,h=(n+r)*u;let g,_;if(o===sr)g=(a+s)*f,_=-2*f;else if(o===xc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ks=new J,Mi=new Ot,vE=new J(0,0,0),xE=new J(1,1,1),_r=new J,xl=new J,Wn=new J,Yp=new Ot,qp=new Fo;class Bc{constructor(e=0,t=0,n=0,r=Bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bc.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ME=0;const $p=new J,Vs=new Fo,$i=new Ot,Ml=new J,$o=new J,SE=new J,yE=new Fo,jp=new J(1,0,0),Kp=new J(0,1,0),Zp=new J(0,0,1),EE={type:"added"},TE={type:"removed"};class Xt extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new J,t=new Bc,n=new Fo,r=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new it}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(jp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,t){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ml.copy(e):Ml.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt($o,Ml,this.up):$i.lookAt(Ml,$o,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix($i),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(EE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(TE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,SE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new J(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new J,ji=new J,Uu=new J,Ki=new J,Ws=new J,Xs=new J,Jp=new J,Iu=new J,Ou=new J,Nu=new J;let Sl=!1;class Ei{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Si.subVectors(e,t),r.cross(Si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Si.subVectors(r,t),ji.subVectors(n,t),Uu.subVectors(e,t);const a=Si.dot(Si),o=Si.dot(ji),l=Si.dot(Uu),c=ji.dot(ji),u=ji.dot(Uu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getUV(e,t,n,r,s,a,o,l){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static isFrontFacing(e,t,n,r){return Si.subVectors(n,t),ji.subVectors(e,t),Si.cross(ji).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Si.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),Ei.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ws.subVectors(r,n),Xs.subVectors(s,n),Iu.subVectors(e,n);const l=Ws.dot(Iu),c=Xs.dot(Iu);if(l<=0&&c<=0)return t.copy(n);Ou.subVectors(e,r);const u=Ws.dot(Ou),f=Xs.dot(Ou);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ws,a);Nu.subVectors(e,s);const h=Ws.dot(Nu),g=Xs.dot(Nu);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Xs,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Jp.subVectors(s,r),o=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(Jp,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Fu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=Hh(e,1),t=Pn(t,0,1),n=Pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fu(a,s,e+1/3),this.g=Fu(a,s,e),this.b=Fu(a,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=C0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=bu(e.r),this.g=bu(e.g),this.b=bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return gt.fromWorkingColorSpace(un.copy(this),e),Math.round(Pn(un.r*255,0,255))*65536+Math.round(Pn(un.g*255,0,255))*256+Math.round(Pn(un.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(un.copy(this),t);const n=un.r,r=un.g,s=un.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Vt){gt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,r=un.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(yl);const n=wa(gr.h,yl.h,t),r=wa(gr.s,yl.s,t),s=wa(gr.l,yl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ct;ct.NAMES=C0;let bE=0;class Ka extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Mo,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uf,this.blendDst=If,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==Gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uf&&(n.blendSrc=this.blendSrc),this.blendDst!==If&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sc extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=f0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new J,El=new at;class Ri{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=io(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=io(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=io(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=io(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class P0 extends Ri{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class L0 extends Ri{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends Ri{constructor(e,t,n){super(new Float32Array(e),t,n)}}let AE=0;const ai=new Ot,Bu=new Xt,Ys=new J,Xn=new Ds,jo=new Ds,Qt=new J;class vi extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T0(e)?L0:P0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];jo.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Xn.min,jo.min),Xn.expandByPoint(Qt),Qt.addVectors(Xn.max,jo.max),Xn.expandByPoint(Qt)):(Xn.expandByPoint(jo.min),Xn.expandByPoint(jo.max))}Xn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qt.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),Qt.add(Ys)),r=Math.max(r,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new J,u[b]=new J;const f=new J,d=new J,h=new J,g=new at,_=new at,m=new at,p=new J,S=new J;function v(b,G,O){f.fromArray(r,b*3),d.fromArray(r,G*3),h.fromArray(r,O*3),g.fromArray(a,b*2),_.fromArray(a,G*2),m.fromArray(a,O*2),d.sub(f),h.sub(f),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(h,-_.y).multiplyScalar($),S.copy(h).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar($),c[b].add(p),c[G].add(p),c[O].add(p),u[b].add(S),u[G].add(S),u[O].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,G=E.length;b<G;++b){const O=E[b],$=O.start,U=O.count;for(let z=$,H=$+U;z<H;z+=3)v(n[z+0],n[z+1],n[z+2])}const C=new J,R=new J,A=new J,F=new J;function M(b){A.fromArray(s,b*3),F.copy(A);const G=c[b];C.copy(G),C.sub(A.multiplyScalar(A.dot(G))).normalize(),R.crossVectors(F,G);const $=R.dot(u[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=$}for(let b=0,G=E.length;b<G;++b){const O=E[b],$=O.start,U=O.count;for(let z=$,H=$+U;z<H;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new J,s=new J,a=new J,o=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Ri(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qp=new Ot,Jr=new gE,Tl=new ja,em=new J,qs=new J,$s=new J,js=new J,zu=new J,bl=new J,Al=new at,wl=new at,Rl=new at,tm=new J,nm=new J,im=new J,Cl=new J,Pl=new J;class sn extends Xt{constructor(e=new vi,t=new Sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(zu.fromBufferAttribute(f,e),a?bl.addScaledVector(zu,u):bl.addScaledVector(zu.sub(t),u))}t.add(bl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Tl,em)===null||Jr.origin.distanceToSquared(em)>(e.far-e.near)**2))&&(Qp.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(Qp),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let E=S,C=v;E<C;E+=3){const R=o.getX(E),A=o.getX(E+1),F=o.getX(E+2);r=Ll(this,p,e,n,c,u,f,R,A,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);r=Ll(this,a,e,n,c,u,f,S,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=S,C=v;E<C;E+=3){const R=E,A=E+1,F=E+2;r=Ll(this,p,e,n,c,u,f,R,A,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,E=m+2;r=Ll(this,a,e,n,c,u,f,S,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wE(i,e,t,n,r,s,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Gr,o),l===null)return null;Pl.copy(o),Pl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pl);return c<t.near||c>t.far?null:{distance:c,point:Pl.clone(),object:i}}function Ll(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,qs),i.getVertexPosition(l,$s),i.getVertexPosition(c,js);const u=wE(i,e,t,n,qs,$s,js,Cl);if(u){r&&(Al.fromBufferAttribute(r,o),wl.fromBufferAttribute(r,l),Rl.fromBufferAttribute(r,c),u.uv=Ei.getInterpolation(Cl,qs,$s,js,Al,wl,Rl,new at)),s&&(Al.fromBufferAttribute(s,o),wl.fromBufferAttribute(s,l),Rl.fromBufferAttribute(s,c),u.uv1=Ei.getInterpolation(Cl,qs,$s,js,Al,wl,Rl,new at),u.uv2=u.uv1),a&&(tm.fromBufferAttribute(a,o),nm.fromBufferAttribute(a,l),im.fromBufferAttribute(a,c),u.normal=Ei.getInterpolation(Cl,qs,$s,js,tm,nm,im,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new J,materialIndex:0};Ei.getNormal(qs,$s,js,f.normal),u.face=f}return u}class Bo extends vi{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function g(_,m,p,S,v,E,C,R,A,F,M){const b=E/A,G=C/F,O=E/2,$=C/2,U=R/2,z=A+1,H=F+1;let k=0,V=0;const Q=new J;for(let P=0;P<H;P++){const se=P*G-$;for(let fe=0;fe<z;fe++){const ne=fe*b-O;Q[_]=ne*S,Q[m]=se*v,Q[p]=U,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(fe/A),f.push(1-P/F),k+=1}}for(let P=0;P<F;P++)for(let se=0;se<A;se++){const fe=d+se+z*P,ne=d+se+z*(P+1),le=d+(se+1)+z*(P+1),de=d+(se+1)+z*P;l.push(fe,ne,de),l.push(ne,le,de),V+=6}o.addGroup(h,V,M),h+=V,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=Io(i[t]);for(const r in n)e[r]=n[r]}return e}function RE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function D0(i){return i.getRenderTarget()===null?i.outputColorSpace:gt.workingColorSpace}const CE={clone:Io,merge:En};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=LE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=RE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class U0 extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jn extends U0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class DE extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const s=new Jn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const a=new Jn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const o=new Jn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const l=new Jn(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const c=new Jn(Ks,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===sr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class I0 extends Gn{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Po,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UE extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ys?Vt:di),this.texture=new I0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bo(5,5,5),s=new Cs({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Ur});s.uniforms.tEquirect.value=t;const a=new sn(r,s),o=t.minFilter;return t.minFilter===Va&&(t.minFilter=hi),new DE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Hu=new J,IE=new J,OE=new it;class rs{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Hu.subVectors(n,t).cross(IE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||OE.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new ja,Dl=new J;class Gh{constructor(e=new rs,t=new rs,n=new rs,r=new rs,s=new rs,a=new rs){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sr){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],v=r[14],E=r[15];if(n[0].setComponents(l-s,d-c,m-h,E-p).normalize(),n[1].setComponents(l+s,d+c,m+h,E+p).normalize(),n[2].setComponents(l+a,d+u,m+g,E+S).normalize(),n[3].setComponents(l-a,d-u,m-g,E-S).normalize(),n[4].setComponents(l-o,d-f,m-_,E-v).normalize(),t===sr)n[5].setComponents(l+o,d+f,m+_,E+v).normalize();else if(t===xc)n[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function NE(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,d=c.usage,h=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,f){const d=u.array,h=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),h.count===-1&&g.length===0&&i.bufferSubData(f,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class zc extends vi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-a;for(let v=0;v<c;v++){const E=v*f-s;g.push(E,-S,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const v=S+c*p,E=S+c*(p+1),C=S+1+c*(p+1),R=S+1+c*p;h.push(v,E,R),h.push(E,C,R)}this.setIndex(h),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,AT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,JT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,QT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:FE,alphahash_pars_fragment:BE,alphamap_fragment:zE,alphamap_pars_fragment:HE,alphatest_fragment:GE,alphatest_pars_fragment:kE,aomap_fragment:VE,aomap_pars_fragment:WE,batching_pars_vertex:XE,batching_vertex:YE,begin_vertex:qE,beginnormal_vertex:$E,bsdfs:jE,iridescence_fragment:KE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:QE,clipping_planes_pars_vertex:eT,clipping_planes_vertex:tT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:rT,color_vertex:sT,common:oT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:lT,displacementmap_pars_vertex:cT,displacementmap_vertex:uT,emissivemap_fragment:fT,emissivemap_pars_fragment:hT,colorspace_fragment:dT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:_T,envmap_pars_fragment:gT,envmap_pars_vertex:vT,envmap_physical_pars_fragment:PT,envmap_vertex:xT,fog_vertex:MT,fog_pars_vertex:ST,fog_fragment:yT,fog_pars_fragment:ET,gradientmap_pars_fragment:TT,lightmap_fragment:bT,lightmap_pars_fragment:AT,lights_lambert_fragment:wT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:LT,lights_toon_pars_fragment:DT,lights_phong_fragment:UT,lights_phong_pars_fragment:IT,lights_physical_fragment:OT,lights_physical_pars_fragment:NT,lights_fragment_begin:FT,lights_fragment_maps:BT,lights_fragment_end:zT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:VT,map_fragment:WT,map_pars_fragment:XT,map_particle_fragment:YT,map_particle_pars_fragment:qT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:jT,morphcolor_vertex:KT,morphnormal_vertex:ZT,morphtarget_pars_vertex:JT,morphtarget_vertex:QT,normal_fragment_begin:eb,normal_fragment_maps:tb,normal_pars_fragment:nb,normal_pars_vertex:ib,normal_vertex:rb,normalmap_pars_fragment:sb,clearcoat_normal_fragment_begin:ob,clearcoat_normal_fragment_maps:ab,clearcoat_pars_fragment:lb,iridescence_pars_fragment:cb,opaque_fragment:ub,packing:fb,premultiplied_alpha_fragment:hb,project_vertex:db,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:xb,shadowmap_vertex:Mb,shadowmask_pars_fragment:Sb,skinbase_vertex:yb,skinning_pars_vertex:Eb,skinning_vertex:Tb,skinnormal_vertex:bb,specularmap_fragment:Ab,specularmap_pars_fragment:wb,tonemapping_fragment:Rb,tonemapping_pars_fragment:Cb,transmission_fragment:Pb,transmission_pars_fragment:Lb,uv_pars_fragment:Db,uv_pars_vertex:Ub,uv_vertex:Ib,worldpos_vertex:Ob,background_vert:Nb,background_frag:Fb,backgroundCube_vert:Bb,backgroundCube_frag:zb,cube_vert:Hb,cube_frag:Gb,depth_vert:kb,depth_frag:Vb,distanceRGBA_vert:Wb,distanceRGBA_frag:Xb,equirect_vert:Yb,equirect_frag:qb,linedashed_vert:$b,linedashed_frag:jb,meshbasic_vert:Kb,meshbasic_frag:Zb,meshlambert_vert:Jb,meshlambert_frag:Qb,meshmatcap_vert:eA,meshmatcap_frag:tA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:aA,meshtoon_vert:lA,meshtoon_frag:cA,points_vert:uA,points_frag:fA,shadow_vert:hA,shadow_frag:dA,sprite_vert:pA,sprite_frag:mA},Ee={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ii={basic:{uniforms:En([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:En([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:En([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:En([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:En([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:En([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:En([Ee.points,Ee.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:En([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:En([Ee.common,Ee.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:En([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:En([Ee.sprite,Ee.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:En([Ee.common,Ee.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:En([Ee.lights,Ee.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ii.physical={uniforms:En([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ul={r:0,b:0,g:0};function _A(i,e,t,n,r,s,a){const o=new ct(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(m,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Nc)?(u===void 0&&(u=new sn(new Bo(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:Io(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=gt.getTransfer(v.colorSpace)!==At,(f!==v||d!==v.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new sn(new zc(2,2),new Cs({name:"BackgroundMaterial",uniforms:Io(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=gt.getTransfer(v.colorSpace)!==At,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ul,D0(i)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function gA(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(U,z,H,k,V){let Q=!1;if(a){const P=_(k,H,z);c!==P&&(c=P,h(c.object)),Q=p(U,k,H,V),Q&&S(U,k,H,V)}else{const P=z.wireframe===!0;(c.geometry!==k.id||c.program!==H.id||c.wireframe!==P)&&(c.geometry=k.id,c.program=H.id,c.wireframe=P,Q=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,F(U,z,H,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(U){return n.isWebGL2?i.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,z,H){const k=H.wireframe===!0;let V=o[U.id];V===void 0&&(V={},o[U.id]=V);let Q=V[z.id];Q===void 0&&(Q={},V[z.id]=Q);let P=Q[k];return P===void 0&&(P=m(d()),Q[k]=P),P}function m(U){const z=[],H=[],k=[];for(let V=0;V<r;V++)z[V]=0,H[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:k,object:U,attributes:{},index:null}}function p(U,z,H,k){const V=c.attributes,Q=z.attributes;let P=0;const se=H.getAttributes();for(const fe in se)if(se[fe].location>=0){const le=V[fe];let de=Q[fe];if(de===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(de=U.instanceColor)),le===void 0||le.attribute!==de||de&&le.data!==de.data)return!0;P++}return c.attributesNum!==P||c.index!==k}function S(U,z,H,k){const V={},Q=z.attributes;let P=0;const se=H.getAttributes();for(const fe in se)if(se[fe].location>=0){let le=Q[fe];le===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(le=U.instanceColor));const de={};de.attribute=le,le&&le.data&&(de.data=le.data),V[fe]=de,P++}c.attributes=V,c.attributesNum=P,c.index=k}function v(){const U=c.newAttributes;for(let z=0,H=U.length;z<H;z++)U[z]=0}function E(U){C(U,0)}function C(U,z){const H=c.newAttributes,k=c.enabledAttributes,V=c.attributeDivisors;H[U]=1,k[U]===0&&(i.enableVertexAttribArray(U),k[U]=1),V[U]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),V[U]=z)}function R(){const U=c.newAttributes,z=c.enabledAttributes;for(let H=0,k=z.length;H<k;H++)z[H]!==U[H]&&(i.disableVertexAttribArray(H),z[H]=0)}function A(U,z,H,k,V,Q,P){P===!0?i.vertexAttribIPointer(U,z,H,V,Q):i.vertexAttribPointer(U,z,H,k,V,Q)}function F(U,z,H,k){if(n.isWebGL2===!1&&(U.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=k.attributes,Q=H.getAttributes(),P=z.defaultAttributeValues;for(const se in Q){const fe=Q[se];if(fe.location>=0){let ne=V[se];if(ne===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),ne!==void 0){const le=ne.normalized,de=ne.itemSize,ye=t.get(ne);if(ye===void 0)continue;const he=ye.buffer,Le=ye.type,Pe=ye.bytesPerElement,be=n.isWebGL2===!0&&(Le===i.INT||Le===i.UNSIGNED_INT||ne.gpuType===p0);if(ne.isInterleavedBufferAttribute){const Ve=ne.data,y=Ve.stride,I=ne.offset;if(Ve.isInstancedInterleavedBuffer){for(let B=0;B<fe.locationSize;B++)C(fe.location+B,Ve.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let B=0;B<fe.locationSize;B++)E(fe.location+B);i.bindBuffer(i.ARRAY_BUFFER,he);for(let B=0;B<fe.locationSize;B++)A(fe.location+B,de/fe.locationSize,Le,le,y*Pe,(I+de/fe.locationSize*B)*Pe,be)}else{if(ne.isInstancedBufferAttribute){for(let Ve=0;Ve<fe.locationSize;Ve++)C(fe.location+Ve,ne.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ve=0;Ve<fe.locationSize;Ve++)E(fe.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Ve=0;Ve<fe.locationSize;Ve++)A(fe.location+Ve,de/fe.locationSize,Le,le,de*Pe,de/fe.locationSize*Ve*Pe,be)}}else if(P!==void 0){const le=P[se];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(fe.location,le);break;case 3:i.vertexAttrib3fv(fe.location,le);break;case 4:i.vertexAttrib4fv(fe.location,le);break;default:i.vertexAttrib1fv(fe.location,le)}}}}R()}function M(){O();for(const U in o){const z=o[U];for(const H in z){const k=z[H];for(const V in k)g(k[V].object),delete k[V];delete z[H]}delete o[U]}}function b(U){if(o[U.id]===void 0)return;const z=o[U.id];for(const H in z){const k=z[H];for(const V in k)g(k[V].object),delete k[V];delete z[H]}delete o[U.id]}function G(U){for(const z in o){const H=o[z];if(H[U.id]===void 0)continue;const k=H[U.id];for(const V in k)g(k[V].object),delete k[V];delete H[U.id]}}function O(){$(),u=!0,c!==l&&(c=l,h(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:E,disableUnusedAttributes:R}}function vA(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,g;if(r)h=i,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function xA(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=a||e.has("OES_texture_float"),C=v&&E,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:R}}function MA(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new rs,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,v=S*4;let E=p.clippingState||null;l.value=E,E=u(g,d,v,h);for(let C=0;C!==v;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=h;v!==_;++v,E+=4)a.copy(f[v]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function SA(i){let e=new WeakMap;function t(a,o){return o===Of?a.mapping=Po:o===Nf&&(a.mapping=Lo),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Of||o===Nf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new UE(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class N0 extends U0{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ao=4,rm=[.125,.215,.35,.446,.526,.582],ls=20,Gu=new N0,sm=new ct;let ku=null,Vu=0,Wu=0;const ss=(1+Math.sqrt(5))/2,Js=1/ss,om=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,ss,Js),new J(0,ss,-Js),new J(Js,0,ss),new J(-Js,0,ss),new J(ss,Js,0),new J(-ss,Js,0)];class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ku=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,Vu,Wu),e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Po||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Wa,format:bi,colorSpace:fr,depthBuffer:!1},r=lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yA(s)),this._blurMaterial=EA(s,e,t)}return r}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,n,r){const o=new Jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sm),u.toneMapping=Ir,u.autoClear=!1;const h=new Sc({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new sn(new Bo,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(sm),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Il(r,S*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Po||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Il(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Gu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=om[(r-1)%om.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new sn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ls-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let S=0;for(let A=0;A<ls;++A){const F=A/_,M=Math.exp(-F*F/2);p.push(M),A===0?S+=M:A<m&&(S+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[r],C=3*E*(r>v-ao?r-v+ao:0),R=4*(this._cubeSize-E);Il(t,C,R,3*E,2*E),l.setRenderTarget(t),l.render(f,Gu)}}function yA(i){const e=[],t=[],n=[];let r=i;const s=i-ao+1+rm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ao?l=rm[a-i+ao-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*h),v=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,F=R>2?0:-1,M=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];S.set(M,_*g*R),v.set(d,m*g*R);const b=[R,R,R,R,R,R];E.set(b,p*g*R)}const C=new vi;C.setAttribute("position",new Ri(S,_)),C.setAttribute("uv",new Ri(v,m)),C.setAttribute("faceIndex",new Ri(E,p)),e.push(C),r>ao&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lm(i,e,t){const n=new Rs(i,e,t);return n.texture.mapping=Nc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Il(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function EA(i,e,t){const n=new Float32Array(ls),r=new J(0,1,0);return new Cs({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function cm(){return new Cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function um(){return new Cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TA(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Of||l===Nf,u=l===Po||l===Lo;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new am(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new am(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function AA(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const S=h.array;_=h.version;for(let v=0,E=S.length;v<E;v+=3){const C=S[v+0],R=S[v+1],A=S[v+2];d.push(C,R,R,A,A,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,E=S.length/3-1;v<E;v+=3){const C=v+0,R=v+1,A=v+2;d.push(C,R,R,A,A,C)}}else return;const m=new(T0(d)?L0:P0)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function wA(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,g){i.drawElements(s,g,o,h*l),t.update(g,s,1)}function f(h,g,_){if(_===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,h*l,_),t.update(g,s,_)}function d(h,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(h[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,h,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];t.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function RA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function CA(i,e){return i[0]-e[0]}function PA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function LA(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new nn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=h!==void 0?h.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let U=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let F=0;S===!0&&(F=1),v===!0&&(F=2),E===!0&&(F=3);let M=u.attributes.position.count*F,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const G=new Float32Array(M*b*4*g),O=new w0(G,M,b,g);O.type=Rr,O.needsUpdate=!0;const $=F*4;for(let z=0;z<g;z++){const H=C[z],k=R[z],V=A[z],Q=M*b*4*z;for(let P=0;P<H.count;P++){const se=P*$;S===!0&&(a.fromBufferAttribute(H,P),G[Q+se+0]=a.x,G[Q+se+1]=a.y,G[Q+se+2]=a.z,G[Q+se+3]=0),v===!0&&(a.fromBufferAttribute(k,P),G[Q+se+4]=a.x,G[Q+se+5]=a.y,G[Q+se+6]=a.z,G[Q+se+7]=0),E===!0&&(a.fromBufferAttribute(V,P),G[Q+se+8]=a.x,G[Q+se+9]=a.y,G[Q+se+10]=a.z,G[Q+se+11]=V.itemSize===4?a.w:1)}}_={count:g,texture:O,size:new at(M,b)},s.set(u,_),u.addEventListener("dispose",U)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const h=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==h){g=[];for(let v=0;v<h;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<h;v++){const E=g[v];E[0]=v,E[1]=d[v]}g.sort(PA);for(let v=0;v<8;v++)v<h&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(CA);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const E=o[v],C=E[0],R=E[1];C!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),m&&u.getAttribute("morphNormal"+v)!==m[C]&&u.setAttribute("morphNormal"+v,m[C]),r[v]=R,p+=R):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function DA(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class F0 extends Gn{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ss,u!==Ss&&u!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ss&&(n=wr),n===void 0&&u===Do&&(n=Ms),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const B0=new Gn,z0=new F0(1,1);z0.compareFunction=E0;const H0=new w0,G0=new mE,k0=new I0,fm=[],hm=[],dm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function zo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=fm[r];if(s===void 0&&(s=new Float32Array(r),fm[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function UA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function IA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function OA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function NA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function FA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;mm.set(n),i.uniformMatrix2fv(this.addr,!1,mm),Jt(t,n)}}function BA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;pm.set(n),i.uniformMatrix3fv(this.addr,!1,pm),Jt(t,n)}}function zA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;dm.set(n),i.uniformMatrix4fv(this.addr,!1,dm),Jt(t,n)}}function HA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function GA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function kA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function VA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function WA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function XA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function YA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function qA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function $A(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?z0:B0;t.setTexture2D(e||s,r)}function jA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||G0,r)}function KA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||k0,r)}function ZA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||H0,r)}function JA(i){switch(i){case 5126:return UA;case 35664:return IA;case 35665:return OA;case 35666:return NA;case 35674:return FA;case 35675:return BA;case 35676:return zA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return kA;case 35669:case 35673:return VA;case 5125:return WA;case 36294:return XA;case 36295:return YA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return ZA}}function QA(i,e){i.uniform1fv(this.addr,e)}function ew(i,e){const t=zo(e,this.size,2);i.uniform2fv(this.addr,t)}function tw(i,e){const t=zo(e,this.size,3);i.uniform3fv(this.addr,t)}function nw(i,e){const t=zo(e,this.size,4);i.uniform4fv(this.addr,t)}function iw(i,e){const t=zo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rw(i,e){const t=zo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sw(i,e){const t=zo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ow(i,e){i.uniform1iv(this.addr,e)}function aw(i,e){i.uniform2iv(this.addr,e)}function lw(i,e){i.uniform3iv(this.addr,e)}function cw(i,e){i.uniform4iv(this.addr,e)}function uw(i,e){i.uniform1uiv(this.addr,e)}function fw(i,e){i.uniform2uiv(this.addr,e)}function hw(i,e){i.uniform3uiv(this.addr,e)}function dw(i,e){i.uniform4uiv(this.addr,e)}function pw(i,e,t){const n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||B0,s[a])}function mw(i,e,t){const n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||G0,s[a])}function _w(i,e,t){const n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||k0,s[a])}function gw(i,e,t){const n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||H0,s[a])}function vw(i){switch(i){case 5126:return QA;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return ow;case 35667:case 35671:return aw;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return fw;case 36295:return hw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return gw}}class xw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=JA(t.type)}}class Mw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vw(t.type)}}class Sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function _m(i,e){i.seq.push(e),i.map[e.id]=e}function yw(i,e,t){const n=i.name,r=n.length;for(Xu.lastIndex=0;;){const s=Xu.exec(n),a=Xu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){_m(t,c===void 0?new xw(o,i,e):new Mw(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Sw(o),_m(t,f)),t=f}}}class jl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);yw(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function gm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ew=37297;let Tw=0;function bw(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Aw(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===vc&&t===gc?n="LinearDisplayP3ToLinearSRGB":e===gc&&t===vc&&(n="LinearSRGBToLinearDisplayP3"),i){case fr:case Fc:return[n,"LinearTransferOETF"];case Vt:case zh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function vm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bw(i.getShaderSource(e),a)}else return r}function ww(i,e){const t=Aw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rw(i,e){let t;switch(e){case by:t="Linear";break;case Ay:t="Reinhard";break;case wy:t="OptimizedCineon";break;case h0:t="ACESFilmic";break;case Cy:t="AgX";break;case Ry:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cw(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lo).join(`
`)}function Pw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lo).join(`
`)}function Lw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function lo(i){return i!==""}function xm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(i){return i.replace(Uw,Ow)}const Iw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ow(i,e){let t=Je[e];if(t===void 0){const n=Iw.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gf(t)}const Nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(i){return i.replace(Nw,Fw)}function Fw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function zw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Po:case Lo:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function Gw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case f0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ey:e="ENVMAP_BLENDING_MIX";break;case Ty:e="ENVMAP_BLENDING_ADD";break}return e}function kw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vw(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Bw(t),c=zw(t),u=Hw(t),f=Gw(t),d=kw(t),h=t.isWebGL2?"":Cw(t),g=Pw(t),_=Lw(s),m=r.createProgram();let p,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lo).join(`
`),p.length>0&&(p+=`
`),S=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lo).join(`
`),S.length>0&&(S+=`
`)):(p=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),S=[h,ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ir?Rw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ww("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),a=Gf(a),a=xm(a,t),a=Mm(a,t),o=Gf(o),o=xm(o,t),o=Mm(o,t),a=Sm(a),o=Sm(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=v+p+a,C=v+S+o,R=gm(r,r.VERTEX_SHADER,E),A=gm(r,r.FRAGMENT_SHADER,C);r.attachShader(m,R),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function F(O){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(A).trim();let H=!0,k=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,R,A);else{const V=vm(r,R,"vertex"),Q=vm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+V+`
`+Q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(U===""||z==="")&&(k=!1);k&&(O.diagnostics={runnable:H,programLog:$,vertexShader:{log:U,prefix:p},fragmentShader:{log:z,prefix:S}})}r.deleteShader(R),r.deleteShader(A),M=new jl(r,m),b=Dw(r,m)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(m,Ew)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let Ww=0;class Xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yw(e),t.set(e,n)),n}}class Yw{constructor(e){this.id=Ww++,this.code=e,this.usedTimes=0}}function qw(i,e,t,n,r,s,a){const o=new R0,l=new Xw,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,b,G,O,$){const U=O.fog,z=$.geometry,H=M.isMeshStandardMaterial?O.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),V=k&&k.mapping===Nc?k.image.height:null,Q=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=P!==void 0?P.length:0;let fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let ne,le,de,ye;if(Q){const Re=Ii[Q];ne=Re.vertexShader,le=Re.fragmentShader}else ne=M.vertexShader,le=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const he=i.getRenderTarget(),Le=$.isInstancedMesh===!0,Pe=$.isBatchedMesh===!0,be=!!M.map,Ve=!!M.matcap,y=!!k,I=!!M.aoMap,B=!!M.lightMap,K=!!M.bumpMap,Y=!!M.normalMap,D=!!M.displacementMap,oe=!!M.emissiveMap,T=!!M.metalnessMap,x=!!M.roughnessMap,L=M.anisotropy>0,Z=M.clearcoat>0,W=M.iridescence>0,q=M.sheen>0,re=M.transmission>0,ae=L&&!!M.anisotropyMap,ce=Z&&!!M.clearcoatMap,ue=Z&&!!M.clearcoatNormalMap,Me=Z&&!!M.clearcoatRoughnessMap,ie=W&&!!M.iridescenceMap,Fe=W&&!!M.iridescenceThicknessMap,Se=q&&!!M.sheenColorMap,Oe=q&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,_e=!!M.specularColorMap,we=!!M.specularIntensityMap,Ke=re&&!!M.transmissionMap,lt=re&&!!M.thicknessMap,Te=!!M.gradientMap,me=!!M.alphaMap,N=M.alphaTest>0,ge=!!M.alphaHash,ve=!!M.extensions,Ge=!!z.attributes.uv1,ze=!!z.attributes.uv2,st=!!z.attributes.uv3;let ut=Ir;return M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ut=i.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:le,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Pe,instancing:Le,instancingColor:Le&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:fr,map:be,matcap:Ve,envMap:y,envMapMode:y&&k.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:B,bumpMap:K,normalMap:Y,displacementMap:d&&D,emissiveMap:oe,normalMapObjectSpace:Y&&M.normalMapType===Gy,normalMapTangentSpace:Y&&M.normalMapType===y0,metalnessMap:T,roughnessMap:x,anisotropy:L,anisotropyMap:ae,clearcoat:Z,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:Me,iridescence:W,iridescenceMap:ie,iridescenceThicknessMap:Fe,sheen:q,sheenColorMap:Se,sheenRoughnessMap:Oe,specularMap:Ae,specularColorMap:_e,specularIntensityMap:we,transmission:re,transmissionMap:Ke,thicknessMap:lt,gradientMap:Te,opaque:M.transparent===!1&&M.blending===Mo,alphaMap:me,alphaTest:N,alphaHash:ge,combine:M.combine,mapUv:be&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:B&&_(M.lightMap.channel),bumpMapUv:K&&_(M.bumpMap.channel),normalMapUv:Y&&_(M.normalMap.channel),displacementMapUv:D&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ae&&_(M.anisotropyMap.channel),clearcoatMapUv:ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ae&&_(M.specularMap.channel),specularColorMapUv:_e&&_(M.specularColorMap.channel),specularIntensityMapUv:we&&_(M.specularIntensityMap.channel),transmissionMapUv:Ke&&_(M.transmissionMap.channel),thicknessMapUv:lt&&_(M.thicknessMap.channel),alphaMapUv:me&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Y||L),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:ze,vertexUv3s:st,pointsUvs:$.isPoints===!0&&!!z.attributes.uv&&(be||me),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===At,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ni,flipSided:M.side===Wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ve&&M.extensions.derivatives===!0,extensionFragDepth:ve&&M.extensions.fragDepth===!0,extensionDrawBuffers:ve&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)b.push(G),b.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(S(b,M),v(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){const b=g[M.type];let G;if(b){const O=Ii[b];G=CE.clone(O.uniforms)}else G=M.uniforms;return G}function C(M,b){let G;for(let O=0,$=c.length;O<$;O++){const U=c[O];if(U.cacheKey===b){G=U,++G.usedTimes;break}}return G===void 0&&(G=new Vw(i,b,M,s),c.push(G)),G}function R(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:F}}function $w(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function jw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Em(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tm(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,h,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||jw),n.length>1&&n.sort(d||Em),r.length>1&&r.sort(d||Em)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Kw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Tm,i.set(n,[a])):r>=s.length?(a=new Tm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new ct};break;case"SpotLight":t={position:new J,direction:new J,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function Jw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qw=0;function e1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t1(i,e){const t=new Zw,n=Jw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new J);const s=new J,a=new Ot,o=new Ot;function l(u,f){let d=0,h=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let _=0,m=0,p=0,S=0,v=0,E=0,C=0,R=0,A=0,F=0,M=0;u.sort(e1);const b=f===!0?Math.PI:1;for(let O=0,$=u.length;O<$;O++){const U=u[O],z=U.color,H=U.intensity,k=U.distance,V=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=z.r*H*b,h+=z.g*H*b,g+=z.b*H*b;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(U.sh.coefficients[Q],H);M++}else if(U.isDirectionalLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const P=U.shadow,se=n.get(U);se.shadowBias=P.bias,se.shadowNormalBias=P.normalBias,se.shadowRadius=P.radius,se.shadowMapSize=P.mapSize,r.directionalShadow[_]=se,r.directionalShadowMap[_]=V,r.directionalShadowMatrix[_]=U.shadow.matrix,E++}r.directional[_]=Q,_++}else if(U.isSpotLight){const Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(z).multiplyScalar(H*b),Q.distance=k,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,r.spot[p]=Q;const P=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,P.updateMatrices(U),U.castShadow&&F++),r.spotLightMatrix[p]=P.matrix,U.castShadow){const se=n.get(U);se.shadowBias=P.bias,se.shadowNormalBias=P.normalBias,se.shadowRadius=P.radius,se.shadowMapSize=P.mapSize,r.spotShadow[p]=se,r.spotShadowMap[p]=V,R++}p++}else if(U.isRectAreaLight){const Q=t.get(U);Q.color.copy(z).multiplyScalar(H),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),r.rectArea[S]=Q,S++}else if(U.isPointLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*b),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const P=U.shadow,se=n.get(U);se.shadowBias=P.bias,se.shadowNormalBias=P.normalBias,se.shadowRadius=P.radius,se.shadowMapSize=P.mapSize,se.shadowCameraNear=P.camera.near,se.shadowCameraFar=P.camera.far,r.pointShadow[m]=se,r.pointShadowMap[m]=V,r.pointShadowMatrix[m]=U.shadow.matrix,C++}r.point[m]=Q,m++}else if(U.isHemisphereLight){const Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar(H*b),Q.groundColor.copy(U.groundColor).multiplyScalar(H*b),r.hemi[v]=Q,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==_||G.pointLength!==m||G.spotLength!==p||G.rectAreaLength!==S||G.hemiLength!==v||G.numDirectionalShadows!==E||G.numPointShadows!==C||G.numSpotShadows!==R||G.numSpotMaps!==A||G.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=S,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-F,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=M,G.directionalLength=_,G.pointLength=m,G.spotLength=p,G.rectAreaLength=S,G.hemiLength=v,G.numDirectionalShadows=E,G.numPointShadows=C,G.numSpotShadows=R,G.numSpotMaps=A,G.numLightProbes=M,r.version=Qw++)}function c(u,f){let d=0,h=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const E=u[S];if(E.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),d++}else if(E.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(E.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const C=r.point[h];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function bm(i,e){const t=new t1(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n1(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new bm(i,e),t.set(s,[l])):a>=o.length?(l=new bm(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class i1 extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r1 extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a1(i,e,t){let n=new Gh;const r=new at,s=new at,a=new nn,o=new i1({depthPacking:Hy}),l=new r1,c={},u=t.maxTextureSize,f={[Gr]:Wt,[Wt]:Gr,[Ni]:Ni},d=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:s1,fragmentShader:o1}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new vi;g.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let p=this.type;this.render=function(R,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ur),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const $=p!==Zi&&this.type===Zi,U=p===Zi&&this.type!==Zi;for(let z=0,H=R.length;z<H;z++){const k=R[z],V=k.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Q=V.getFrameExtents();if(r.multiply(Q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,V.mapSize.y=s.y)),V.map===null||$===!0||U===!0){const se=this.type!==Zi?{minFilter:wn,magFilter:wn}:{};V.map!==null&&V.map.dispose(),V.map=new Rs(r.x,r.y,se),V.map.texture.name=k.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const P=V.getViewportCount();for(let se=0;se<P;se++){const fe=V.getViewport(se);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),O.viewport(a),V.updateMatrices(k,se),n=V.getFrustum(),E(A,F,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===Zi&&S(V,F),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,G)};function S(R,A){const F=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rs(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,F,d,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,F,h,_,null)}function v(R,A,F,M){let b=null;const G=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)b=G;else if(b=F.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=b.uuid,$=A.uuid;let U=c[O];U===void 0&&(U={},c[O]=U);let z=U[$];z===void 0&&(z=b.clone(),U[$]=z,A.addEventListener("dispose",C)),b=z}if(b.visible=A.visible,b.wireframe=A.wireframe,M===Zi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=i.properties.get(b);O.light=F}return b}function E(R,A,F,M,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Zi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const $=e.update(R),U=R.material;if(Array.isArray(U)){const z=$.groups;for(let H=0,k=z.length;H<k;H++){const V=z[H],Q=U[V.materialIndex];if(Q&&Q.visible){const P=v(R,Q,M,b);R.onBeforeShadow(i,R,A,F,$,P,V),i.renderBufferDirect(F,null,$,P,R,V),R.onAfterShadow(i,R,A,F,$,P,V)}}}else if(U.visible){const z=v(R,U,M,b);R.onBeforeShadow(i,R,A,F,$,z,null),i.renderBufferDirect(F,null,$,z,R,null),R.onAfterShadow(i,R,A,F,$,z,null)}}const O=R.children;for(let $=0,U=O.length;$<U;$++)E(O[$],A,F,M,b)}function C(R){R.target.removeEventListener("dispose",C);for(const F in c){const M=c[F],b=R.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function l1(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const ge=new nn;let ve=null;const Ge=new nn(0,0,0,0);return{setMask:function(ze){ve!==ze&&!N&&(i.colorMask(ze,ze,ze,ze),ve=ze)},setLocked:function(ze){N=ze},setClear:function(ze,st,ut,Ie,Re){Re===!0&&(ze*=Ie,st*=Ie,ut*=Ie),ge.set(ze,st,ut,Ie),Ge.equals(ge)===!1&&(i.clearColor(ze,st,ut,Ie),Ge.copy(ge))},reset:function(){N=!1,ve=null,Ge.set(-1,0,0,0)}}}function s(){let N=!1,ge=null,ve=null,Ge=null;return{setTest:function(ze){ze?Pe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ze){ge!==ze&&!N&&(i.depthMask(ze),ge=ze)},setFunc:function(ze){if(ve!==ze){switch(ze){case _y:i.depthFunc(i.NEVER);break;case gy:i.depthFunc(i.ALWAYS);break;case vy:i.depthFunc(i.LESS);break;case mc:i.depthFunc(i.LEQUAL);break;case xy:i.depthFunc(i.EQUAL);break;case My:i.depthFunc(i.GEQUAL);break;case Sy:i.depthFunc(i.GREATER);break;case yy:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ze}},setLocked:function(ze){N=ze},setClear:function(ze){Ge!==ze&&(i.clearDepth(ze),Ge=ze)},reset:function(){N=!1,ge=null,ve=null,Ge=null}}}function a(){let N=!1,ge=null,ve=null,Ge=null,ze=null,st=null,ut=null,Ie=null,Re=null;return{setTest:function(Be){N||(Be?Pe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Be){ge!==Be&&!N&&(i.stencilMask(Be),ge=Be)},setFunc:function(Be,pe,ke){(ve!==Be||Ge!==pe||ze!==ke)&&(i.stencilFunc(Be,pe,ke),ve=Be,Ge=pe,ze=ke)},setOp:function(Be,pe,ke){(st!==Be||ut!==pe||Ie!==ke)&&(i.stencilOp(Be,pe,ke),st=Be,ut=pe,Ie=ke)},setLocked:function(Be){N=Be},setClear:function(Be){Re!==Be&&(i.clearStencil(Be),Re=Be)},reset:function(){N=!1,ge=null,ve=null,Ge=null,ze=null,st=null,ut=null,Ie=null,Re=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},h={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,E=null,C=null,R=null,A=null,F=null,M=new ct(0,0,0),b=0,G=!1,O=null,$=null,U=null,z=null,H=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(P)[1]),V=Q>=1):P.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),V=Q>=2);let se=null,fe={};const ne=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),de=new nn().fromArray(ne),ye=new nn().fromArray(le);function he(N,ge,ve,Ge){const ze=new Uint8Array(4),st=i.createTexture();i.bindTexture(N,st),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<ve;ut++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ge,0,i.RGBA,1,1,Ge,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(ge+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return st}const Le={};Le[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),l.setFunc(mc),oe(!1),T(op),Pe(i.CULL_FACE),Y(Ur);function Pe(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function be(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ve(N,ge){return h[N]!==ge?(i.bindFramebuffer(N,ge),h[N]=ge,n&&(N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge)),!0):!1}function y(N,ge){let ve=_,Ge=!1;if(N)if(ve=g.get(ge),ve===void 0&&(ve=[],g.set(ge,ve)),N.isWebGLMultipleRenderTargets){const ze=N.texture;if(ve.length!==ze.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let st=0,ut=ze.length;st<ut;st++)ve[st]=i.COLOR_ATTACHMENT0+st;ve.length=ze.length,Ge=!0}}else ve[0]!==i.COLOR_ATTACHMENT0&&(ve[0]=i.COLOR_ATTACHMENT0,Ge=!0);else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ge=!0);Ge&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function I(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const B={[as]:i.FUNC_ADD,[ty]:i.FUNC_SUBTRACT,[ny]:i.FUNC_REVERSE_SUBTRACT};if(n)B[up]=i.MIN,B[fp]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(B[up]=N.MIN_EXT,B[fp]=N.MAX_EXT)}const K={[iy]:i.ZERO,[ry]:i.ONE,[sy]:i.SRC_COLOR,[Uf]:i.SRC_ALPHA,[fy]:i.SRC_ALPHA_SATURATE,[cy]:i.DST_COLOR,[ay]:i.DST_ALPHA,[oy]:i.ONE_MINUS_SRC_COLOR,[If]:i.ONE_MINUS_SRC_ALPHA,[uy]:i.ONE_MINUS_DST_COLOR,[ly]:i.ONE_MINUS_DST_ALPHA,[hy]:i.CONSTANT_COLOR,[dy]:i.ONE_MINUS_CONSTANT_COLOR,[py]:i.CONSTANT_ALPHA,[my]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(N,ge,ve,Ge,ze,st,ut,Ie,Re,Be){if(N===Ur){p===!0&&(be(i.BLEND),p=!1);return}if(p===!1&&(Pe(i.BLEND),p=!0),N!==ey){if(N!==S||Be!==G){if((v!==as||R!==as)&&(i.blendEquation(i.FUNC_ADD),v=as,R=as),Be)switch(N){case Mo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ap:i.blendFunc(i.ONE,i.ONE);break;case lp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ap:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,C=null,A=null,F=null,M.set(0,0,0),b=0,S=N,G=Be}return}ze=ze||ge,st=st||ve,ut=ut||Ge,(ge!==v||ze!==R)&&(i.blendEquationSeparate(B[ge],B[ze]),v=ge,R=ze),(ve!==E||Ge!==C||st!==A||ut!==F)&&(i.blendFuncSeparate(K[ve],K[Ge],K[st],K[ut]),E=ve,C=Ge,A=st,F=ut),(Ie.equals(M)===!1||Re!==b)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Re),M.copy(Ie),b=Re),S=N,G=!1}function D(N,ge){N.side===Ni?be(i.CULL_FACE):Pe(i.CULL_FACE);let ve=N.side===Wt;ge&&(ve=!ve),oe(ve),N.blending===Mo&&N.transparent===!1?Y(Ur):Y(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Ge=N.stencilWrite;c.setTest(Ge),Ge&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(N){O!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),O=N)}function T(N){N!==JS?(Pe(i.CULL_FACE),N!==$&&(N===op?i.cullFace(i.BACK):N===QS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),$=N}function x(N){N!==U&&(V&&i.lineWidth(N),U=N)}function L(N,ge,ve){N?(Pe(i.POLYGON_OFFSET_FILL),(z!==ge||H!==ve)&&(i.polygonOffset(ge,ve),z=ge,H=ve)):be(i.POLYGON_OFFSET_FILL)}function Z(N){N?Pe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function W(N){N===void 0&&(N=i.TEXTURE0+k-1),se!==N&&(i.activeTexture(N),se=N)}function q(N,ge,ve){ve===void 0&&(se===null?ve=i.TEXTURE0+k-1:ve=se);let Ge=fe[ve];Ge===void 0&&(Ge={type:void 0,texture:void 0},fe[ve]=Ge),(Ge.type!==N||Ge.texture!==ge)&&(se!==ve&&(i.activeTexture(ve),se=ve),i.bindTexture(N,ge||Le[N]),Ge.type=N,Ge.texture=ge)}function re(){const N=fe[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){de.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function Ke(N){ye.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ye.copy(N))}function lt(N,ge){let ve=f.get(ge);ve===void 0&&(ve=new WeakMap,f.set(ge,ve));let Ge=ve.get(N);Ge===void 0&&(Ge=i.getUniformBlockIndex(ge,N.name),ve.set(N,Ge))}function Te(N,ge){const Ge=f.get(ge).get(N);u.get(ge)!==Ge&&(i.uniformBlockBinding(ge,Ge,N.__bindingPointIndex),u.set(ge,Ge))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},se=null,fe={},h={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,E=null,C=null,R=null,A=null,F=null,M=new ct(0,0,0),b=0,G=!1,O=null,$=null,U=null,z=null,H=null,de.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:be,bindFramebuffer:Ve,drawBuffers:y,useProgram:I,setBlending:Y,setMaterial:D,setFlipSided:oe,setCullFace:T,setLineWidth:x,setPolygonOffset:L,setScissorTest:Z,activeTexture:W,bindTexture:q,unbindTexture:re,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:Ae,texImage3D:_e,updateUBOMapping:lt,uniformBlockBinding:Te,texStorage2D:Se,texStorage3D:Oe,texSubImage2D:ue,texSubImage3D:Me,compressedTexSubImage2D:ie,compressedTexSubImage3D:Fe,scissor:we,viewport:Ke,reset:me}}function c1(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return h?new OffscreenCanvas(T,x):Xa("canvas")}function _(T,x,L,Z){let W=1;if((T.width>Z||T.height>Z)&&(W=Z/Math.max(T.width,T.height)),W<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const q=x?Mc:Math.floor,re=q(W*T.width),ae=q(W*T.height);f===void 0&&(f=g(re,ae));const ce=L?g(re,ae):f;return ce.width=re,ce.height=ae,ce.getContext("2d").drawImage(T,0,0,re,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+re+"x"+ae+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Hf(T.width)&&Hf(T.height)}function p(T){return o?!1:T.wrapS!==Ti||T.wrapT!==Ti||T.minFilter!==wn&&T.minFilter!==hi}function S(T,x){return T.generateMipmaps&&x&&T.minFilter!==wn&&T.minFilter!==hi}function v(T){i.generateMipmap(T)}function E(T,x,L,Z,W=!1){if(o===!1)return x;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===i.RED&&(L===i.FLOAT&&(q=i.R32F),L===i.HALF_FLOAT&&(q=i.R16F),L===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.R8UI),L===i.UNSIGNED_SHORT&&(q=i.R16UI),L===i.UNSIGNED_INT&&(q=i.R32UI),L===i.BYTE&&(q=i.R8I),L===i.SHORT&&(q=i.R16I),L===i.INT&&(q=i.R32I)),x===i.RG&&(L===i.FLOAT&&(q=i.RG32F),L===i.HALF_FLOAT&&(q=i.RG16F),L===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RGBA){const re=W?_c:gt.getTransfer(Z);L===i.FLOAT&&(q=i.RGBA32F),L===i.HALF_FLOAT&&(q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(q=re===At?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function C(T,x,L){return S(T,L)===!0||T.isFramebufferTexture&&T.minFilter!==wn&&T.minFilter!==hi?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){return T===wn||T===hp||T===vu?i.NEAREST:i.LINEAR}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&u.delete(x)}function F(T){const x=T.target;x.removeEventListener("dispose",F),G(x)}function M(T){const x=n.get(T);if(x.__webglInit===void 0)return;const L=T.source,Z=d.get(L);if(Z){const W=Z[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&b(T),Object.keys(Z).length===0&&d.delete(L)}n.remove(T)}function b(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const L=T.source,Z=d.get(L);delete Z[x.__cacheKey],a.memory.textures--}function G(T){const x=T.texture,L=n.get(T),Z=n.get(x);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(L.__webglFramebuffer[W]))for(let q=0;q<L.__webglFramebuffer[W].length;q++)i.deleteFramebuffer(L.__webglFramebuffer[W][q]);else i.deleteFramebuffer(L.__webglFramebuffer[W]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[W])}else{if(Array.isArray(L.__webglFramebuffer))for(let W=0;W<L.__webglFramebuffer.length;W++)i.deleteFramebuffer(L.__webglFramebuffer[W]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let W=0;W<L.__webglColorRenderbuffer.length;W++)L.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[W]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let W=0,q=x.length;W<q;W++){const re=n.get(x[W]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(x[W])}n.remove(x),n.remove(T)}let O=0;function $(){O=0}function U(){const T=O;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),O+=1,T}function z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const L=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(L,T,x);return}}t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+x)}function k(T,x){const L=n.get(T);if(T.version>0&&L.__version!==T.version){de(L,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+x)}function V(T,x){const L=n.get(T);if(T.version>0&&L.__version!==T.version){de(L,T,x);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+x)}function Q(T,x){const L=n.get(T);if(T.version>0&&L.__version!==T.version){ye(L,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+x)}const P={[Ff]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Bf]:i.MIRRORED_REPEAT},se={[wn]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[vu]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[Py]:i.LINEAR_MIPMAP_NEAREST,[Va]:i.LINEAR_MIPMAP_LINEAR},fe={[ky]:i.NEVER,[$y]:i.ALWAYS,[Vy]:i.LESS,[E0]:i.LEQUAL,[Wy]:i.EQUAL,[qy]:i.GEQUAL,[Xy]:i.GREATER,[Yy]:i.NOTEQUAL};function ne(T,x,L){if(L?(i.texParameteri(T,i.TEXTURE_WRAP_S,P[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,P[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,P[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,se[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,se[x.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ti||x.wrapT!==Ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,R(x.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==wn&&x.minFilter!==hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===wn||x.minFilter!==vu&&x.minFilter!==Va||x.type===Rr&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Wa&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function le(T,x){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let W=d.get(Z);W===void 0&&(W={},d.set(Z,W));const q=z(x);if(q!==T.__cacheKey){W[q]===void 0&&(W[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),W[q].usedTimes++;const re=W[T.__cacheKey];re!==void 0&&(W[T.__cacheKey].usedTimes--,re.usedTimes===0&&b(x)),T.__cacheKey=q,T.__webglTexture=W[q].texture}return L}function de(T,x,L){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const W=le(T,x),q=x.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+L);const re=n.get(q);if(q.version!==re.__version||W===!0){t.activeTexture(i.TEXTURE0+L);const ae=gt.getPrimaries(gt.workingColorSpace),ce=x.colorSpace===di?null:gt.getPrimaries(x.colorSpace),ue=x.colorSpace===di||ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Me=p(x)&&m(x.image)===!1;let ie=_(x.image,Me,!1,r.maxTextureSize);ie=oe(x,ie);const Fe=m(ie)||o,Se=s.convert(x.format,x.colorSpace);let Oe=s.convert(x.type),Ae=E(x.internalFormat,Se,Oe,x.colorSpace,x.isVideoTexture);ne(Z,x,Fe);let _e;const we=x.mipmaps,Ke=o&&x.isVideoTexture!==!0&&Ae!==M0,lt=re.__version===void 0||W===!0,Te=C(x,ie,Fe);if(x.isDepthTexture)Ae=i.DEPTH_COMPONENT,o?x.type===Rr?Ae=i.DEPTH_COMPONENT32F:x.type===wr?Ae=i.DEPTH_COMPONENT24:x.type===Ms?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:x.type===Rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ss&&Ae===i.DEPTH_COMPONENT&&x.type!==Bh&&x.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=wr,Oe=s.convert(x.type)),x.format===Do&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,x.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ms,Oe=s.convert(x.type))),lt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Se,Oe,null));else if(x.isDataTexture)if(we.length>0&&Fe){Ke&&lt&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,we[0].width,we[0].height);for(let me=0,N=we.length;me<N;me++)_e=we[me],Ke?t.texSubImage2D(i.TEXTURE_2D,me,0,0,_e.width,_e.height,Se,Oe,_e.data):t.texImage2D(i.TEXTURE_2D,me,Ae,_e.width,_e.height,0,Se,Oe,_e.data);x.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Se,Oe,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Se,Oe,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ae,we[0].width,we[0].height,ie.depth);for(let me=0,N=we.length;me<N;me++)_e=we[me],x.format!==bi?Se!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,_e.width,_e.height,ie.depth,Se,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ae,_e.width,_e.height,ie.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,_e.width,_e.height,ie.depth,Se,Oe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ae,_e.width,_e.height,ie.depth,0,Se,Oe,_e.data)}else{Ke&&lt&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,we[0].width,we[0].height);for(let me=0,N=we.length;me<N;me++)_e=we[me],x.format!==bi?Se!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,me,0,0,_e.width,_e.height,Se,Oe,_e.data):t.texImage2D(i.TEXTURE_2D,me,Ae,_e.width,_e.height,0,Se,Oe,_e.data)}else if(x.isDataArrayTexture)Ke?(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,Oe,ie.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,Se,Oe,ie.data);else if(x.isData3DTexture)Ke?(lt&&t.texStorage3D(i.TEXTURE_3D,Te,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,Oe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,Se,Oe,ie.data);else if(x.isFramebufferTexture){if(lt)if(Ke)t.texStorage2D(i.TEXTURE_2D,Te,Ae,ie.width,ie.height);else{let me=ie.width,N=ie.height;for(let ge=0;ge<Te;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ae,me,N,0,Se,Oe,null),me>>=1,N>>=1}}else if(we.length>0&&Fe){Ke&&lt&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,we[0].width,we[0].height);for(let me=0,N=we.length;me<N;me++)_e=we[me],Ke?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Se,Oe,_e):t.texImage2D(i.TEXTURE_2D,me,Ae,Se,Oe,_e);x.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Oe,ie)):t.texImage2D(i.TEXTURE_2D,0,Ae,Se,Oe,ie);S(x,Fe)&&v(Z),re.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ye(T,x,L){if(x.image.length!==6)return;const Z=le(T,x),W=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+L);const q=n.get(W);if(W.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+L);const re=gt.getPrimaries(gt.workingColorSpace),ae=x.colorSpace===di?null:gt.getPrimaries(x.colorSpace),ce=x.colorSpace===di||re===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let me=0;me<6;me++)!ue&&!Me?ie[me]=_(x.image[me],!1,!0,r.maxCubemapSize):ie[me]=Me?x.image[me].image:x.image[me],ie[me]=oe(x,ie[me]);const Fe=ie[0],Se=m(Fe)||o,Oe=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type),_e=E(x.internalFormat,Oe,Ae,x.colorSpace),we=o&&x.isVideoTexture!==!0,Ke=q.__version===void 0||Z===!0;let lt=C(x,Fe,Se);ne(i.TEXTURE_CUBE_MAP,x,Se);let Te;if(ue){we&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,_e,Fe.width,Fe.height);for(let me=0;me<6;me++){Te=ie[me].mipmaps;for(let N=0;N<Te.length;N++){const ge=Te[N];x.format!==bi?Oe!==null?we?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,ge.width,ge.height,Oe,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,ge.width,ge.height,Oe,Ae,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,_e,ge.width,ge.height,0,Oe,Ae,ge.data)}}}else{Te=x.mipmaps,we&&Ke&&(Te.length>0&&lt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,_e,ie[0].width,ie[0].height));for(let me=0;me<6;me++)if(Me){we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ie[me].width,ie[me].height,Oe,Ae,ie[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,ie[me].width,ie[me].height,0,Oe,Ae,ie[me].data);for(let N=0;N<Te.length;N++){const ve=Te[N].image[me].image;we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,ve.width,ve.height,Oe,Ae,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,_e,ve.width,ve.height,0,Oe,Ae,ve.data)}}else{we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe,Ae,ie[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,Oe,Ae,ie[me]);for(let N=0;N<Te.length;N++){const ge=Te[N];we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,Oe,Ae,ge.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,_e,Oe,Ae,ge.image[me])}}}S(x,Se)&&v(i.TEXTURE_CUBE_MAP),q.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function he(T,x,L,Z,W,q){const re=s.convert(L.format,L.colorSpace),ae=s.convert(L.type),ce=E(L.internalFormat,re,ae,L.colorSpace);if(!n.get(x).__hasExternalTextures){const Me=Math.max(1,x.width>>q),ie=Math.max(1,x.height>>q);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,q,ce,Me,ie,x.depth,0,re,ae,null):t.texImage2D(W,q,ce,Me,ie,0,re,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Y(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,W,n.get(L).__webglTexture,0,K(x)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,W,n.get(L).__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,x,L){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let Z=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(L||Y(x)){const W=x.depthTexture;W&&W.isDepthTexture&&(W.type===Rr?Z=i.DEPTH_COMPONENT32F:W.type===wr&&(Z=i.DEPTH_COMPONENT24));const q=K(x);Y(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,Z,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,q,Z,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const Z=K(x);L&&Y(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,x.width,x.height):Y(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const Z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let W=0;W<Z.length;W++){const q=Z[W],re=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),ce=E(q.internalFormat,re,ae,q.colorSpace),ue=K(x);L&&Y(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ce,x.width,x.height):Y(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ce,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,W=K(x);if(x.depthTexture.format===Ss)Y(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Do)Y(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(T){const x=n.get(T),L=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,T)}else if(L){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=i.createRenderbuffer(),Le(x.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Le(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,x,L){const Z=n.get(T);x!==void 0&&he(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&be(T)}function y(T){const x=T.texture,L=n.get(T),Z=n.get(x);T.addEventListener("dispose",F),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++);const W=T.isWebGLCubeRenderTarget===!0,q=T.isWebGLMultipleRenderTargets===!0,re=m(T)||o;if(W){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let ce=0;ce<x.mipmaps.length;ce++)L.__webglFramebuffer[ae][ce]=i.createFramebuffer()}else L.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)L.__webglFramebuffer[ae]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(q)if(r.drawBuffers){const ae=T.texture;for(let ce=0,ue=ae.length;ce<ue;ce++){const Me=n.get(ae[ce]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Y(T)===!1){const ae=q?x:[x];L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const ue=ae[ce];L.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const Me=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),Fe=E(ue.internalFormat,Me,ie,ue.colorSpace,T.isXRRenderTarget===!0),Se=K(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Fe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ne(i.TEXTURE_CUBE_MAP,x,re);for(let ae=0;ae<6;ae++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)he(L.__webglFramebuffer[ae][ce],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else he(L.__webglFramebuffer[ae],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);S(x,re)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){const ae=T.texture;for(let ce=0,ue=ae.length;ce<ue;ce++){const Me=ae[ce],ie=n.get(Me);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),ne(i.TEXTURE_2D,Me,re),he(L.__webglFramebuffer,T,Me,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),S(Me,re)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Z.__webglTexture),ne(ae,x,re),o&&x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)he(L.__webglFramebuffer[ce],T,x,i.COLOR_ATTACHMENT0,ae,ce);else he(L.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ae,0);S(x,re)&&v(ae),t.unbindTexture()}T.depthBuffer&&be(T)}function I(T){const x=m(T)||o,L=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,W=L.length;Z<W;Z++){const q=L[Z];if(S(q,x)){const re=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(q).__webglTexture;t.bindTexture(re,ae),v(re),t.unbindTexture()}}}function B(T){if(o&&T.samples>0&&Y(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],L=T.width,Z=T.height;let W=i.COLOR_BUFFER_BIT;const q=[],re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(T),ce=T.isWebGLMultipleRenderTargets===!0;if(ce)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){q.push(i.COLOR_ATTACHMENT0+ue),T.depthBuffer&&q.push(re);const Me=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Me===!1&&(T.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]),Me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[re])),ce){const ie=n.get(x[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,L,Z,0,0,L,Z,W,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);const Me=n.get(x[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function K(T){return Math.min(r.maxSamples,T.samples)}function Y(T){const x=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function oe(T,x){const L=T.colorSpace,Z=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===zf||L!==fr&&L!==di&&(gt.getTransfer(L)===At?o===!1?e.has("EXT_sRGB")===!0&&Z===bi?(T.format=zf,T.minFilter=hi,T.generateMipmaps=!1):x=b0.sRGBToLinear(x):(Z!==bi||W!==Or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),x}this.allocateTextureUnit=U,this.resetTextureUnits=$,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Ve,this.setupRenderTarget=y,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Y}function u1(i,e,t){const n=t.isWebGL2;function r(s,a=di){let o;const l=gt.getTransfer(a);if(s===Or)return i.UNSIGNED_BYTE;if(s===m0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===_0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ly)return i.BYTE;if(s===Dy)return i.SHORT;if(s===Bh)return i.UNSIGNED_SHORT;if(s===p0)return i.INT;if(s===wr)return i.UNSIGNED_INT;if(s===Rr)return i.FLOAT;if(s===Wa)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Uy)return i.ALPHA;if(s===bi)return i.RGBA;if(s===Iy)return i.LUMINANCE;if(s===Oy)return i.LUMINANCE_ALPHA;if(s===Ss)return i.DEPTH_COMPONENT;if(s===Do)return i.DEPTH_STENCIL;if(s===zf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ny)return i.RED;if(s===g0)return i.RED_INTEGER;if(s===Fy)return i.RG;if(s===v0)return i.RG_INTEGER;if(s===x0)return i.RGBA_INTEGER;if(s===xu||s===Mu||s===Su||s===yu)if(l===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===xu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dp||s===pp||s===mp||s===_p)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===dp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_p)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===M0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gp||s===vp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===gp)return l===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xp||s===Mp||s===Sp||s===yp||s===Ep||s===Tp||s===bp||s===Ap||s===wp||s===Rp||s===Cp||s===Pp||s===Lp||s===Dp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ep)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dp)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eu||s===Up||s===Ip)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Eu)return l===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Up)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ip)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===By||s===Op||s===Np||s===Fp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Eu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Op)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Np)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ms?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class f1 extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fs extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class d1 extends Oo{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],v=[],E=new at;let C=null;const R=new Jn;R.layers.enable(1),R.viewport=new nn;const A=new Jn;A.layers.enable(2),A.viewport=new nn;const F=[R,A],M=new f1;M.layers.enable(1),M.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=S[ne];return le===void 0&&(le=new Yu,S[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=S[ne];return le===void 0&&(le=new Yu,S[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=S[ne];return le===void 0&&(le=new Yu,S[ne]=le),le.getHandSpace()};function O(ne){const le=v.indexOf(ne.inputSource);if(le===-1)return;const de=S[le];de!==void 0&&(de.update(ne.inputSource,ne.frame,c||a),de.dispatchEvent({type:ne.type,data:ne.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",U);for(let ne=0;ne<S.length;ne++){const le=v[ne];le!==null&&(v[ne]=null,S[ne].disconnect(le))}b=null,G=null,e.setRenderTarget(m),h=null,d=null,f=null,r=null,p=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),p=new Rs(h.framebufferWidth,h.framebufferHeight,{format:bi,type:Or,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,de=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?Do:Ss,de=_.stencil?Ms:wr);const he={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Rs(d.textureWidth,d.textureHeight,{format:bi,type:Or,depthTexture:new F0(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(p);Le.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(ne){for(let le=0;le<ne.removed.length;le++){const de=ne.removed[le],ye=v.indexOf(de);ye>=0&&(v[ye]=null,S[ye].disconnect(de))}for(let le=0;le<ne.added.length;le++){const de=ne.added[le];let ye=v.indexOf(de);if(ye===-1){for(let Le=0;Le<S.length;Le++)if(Le>=v.length){v.push(de),ye=Le;break}else if(v[Le]===null){v[Le]=de,ye=Le;break}if(ye===-1)break}const he=S[ye];he&&he.connect(de)}}const z=new J,H=new J;function k(ne,le,de){z.setFromMatrixPosition(le.matrixWorld),H.setFromMatrixPosition(de.matrixWorld);const ye=z.distanceTo(H),he=le.projectionMatrix.elements,Le=de.projectionMatrix.elements,Pe=he[14]/(he[10]-1),be=he[14]/(he[10]+1),Ve=(he[9]+1)/he[5],y=(he[9]-1)/he[5],I=(he[8]-1)/he[0],B=(Le[8]+1)/Le[0],K=Pe*I,Y=Pe*B,D=ye/(-I+B),oe=D*-I;le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(oe),ne.translateZ(D),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const T=Pe+D,x=be+D,L=K-oe,Z=Y+(ye-oe),W=Ve*be/x*T,q=y*be/x*T;ne.projectionMatrix.makePerspective(L,Z,W,q,T,x),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function V(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;M.near=A.near=R.near=ne.near,M.far=A.far=R.far=ne.far,(b!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,G=M.far);const le=ne.parent,de=M.cameras;V(M,le);for(let ye=0;ye<de.length;ye++)V(de[ye],le);de.length===2?k(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),Q(ne,M,le)};function Q(ne,le,de){de===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(de.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Uo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)};let P=null;function se(ne,le){if(u=le.getViewerPose(c||a),g=le,u!==null){const de=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let ye=!1;de.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let he=0;he<de.length;he++){const Le=de[he];let Pe=null;if(h!==null)Pe=h.getViewport(Le);else{const Ve=f.getViewSubImage(d,Le);Pe=Ve.viewport,he===0&&(e.setRenderTargetTextures(p,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(p))}let be=F[he];be===void 0&&(be=new Jn,be.layers.enable(he),be.viewport=new nn,F[he]=be),be.matrix.fromArray(Le.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Le.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),he===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(be)}}for(let de=0;de<S.length;de++){const ye=v[de],he=S[de];ye!==null&&he!==void 0&&he.update(ye,le,c||a)}P&&P(ne,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const fe=new O0;fe.setAnimationLoop(se),this.setAnimationLoop=function(ne){P=ne},this.dispose=function(){}}}function p1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,D0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function m1(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const E=v.program;n.uniformBlockBinding(S,E)}function c(S,v){let E=r[S.id];E===void 0&&(g(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(S,C);const R=e.render.frame;s[S.id]!==R&&(d(S),s[S.id]=R)}function u(S){const v=f();S.__bindingPointIndex=v;const E=i.createBuffer(),C=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=r[S.id],E=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,A=E.length;R<A;R++){const F=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,b=F.length;M<b;M++){const G=F[M];if(h(G,R,M,C)===!0){const O=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let U=0;for(let z=0;z<$.length;z++){const H=$[z],k=_(H);typeof H=="number"||typeof H=="boolean"?(G.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+U,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=0,G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=0,G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=0):(H.toArray(G.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,v,E,C){const R=S.value,A=v+"_"+E;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const F=C[A];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return C[A]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(S){const v=S.uniforms;let E=0;const C=16;for(let A=0,F=v.length;A<F;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,G=M.length;b<G;b++){const O=M[b],$=Array.isArray(O.value)?O.value:[O.value];for(let U=0,z=$.length;U<z;U++){const H=$[U],k=_(H),V=E%C;V!==0&&C-V<k.boundary&&(E+=C-V),O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=k.storage}}}const R=E%C;return R>0&&(E+=C-R),S.__size=E,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class V0{constructor(e={}){const{canvas:t=uE(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Ir,this.toneMappingExposure=1;const v=this;let E=!1,C=0,R=0,A=null,F=-1,M=null;const b=new nn,G=new nn;let O=null;const $=new ct(0);let U=0,z=t.width,H=t.height,k=1,V=null,Q=null;const P=new nn(0,0,z,H),se=new nn(0,0,z,H);let fe=!1;const ne=new Gh;let le=!1,de=!1,ye=null;const he=new Ot,Le=new at,Pe=new J,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?k:1}let y=n;function I(w,X){for(let te=0;te<w.length;te++){const ee=w[te],j=t.getContext(ee,X);if(j!==null)return j}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fh}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ge,!1),y===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),y=I(X,w),y===null)throw I(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let B,K,Y,D,oe,T,x,L,Z,W,q,re,ae,ce,ue,Me,ie,Fe,Se,Oe,Ae,_e,we,Ke;function lt(){B=new bA(y),K=new xA(y,B,e),B.init(K),_e=new u1(y,B,K),Y=new l1(y,B,K),D=new RA(y),oe=new $w,T=new c1(y,B,Y,oe,K,_e,D),x=new SA(v),L=new TA(v),Z=new NE(y,K),we=new gA(y,B,Z,K),W=new AA(y,Z,D,we),q=new DA(y,W,Z,D),Se=new LA(y,K,T),Me=new MA(oe),re=new qw(v,x,L,B,K,we,Me),ae=new p1(v,oe),ce=new Kw,ue=new n1(B,K),Fe=new _A(v,x,L,Y,q,d,l),ie=new a1(v,q,K),Ke=new m1(y,D,K,Y),Oe=new vA(y,B,D,K),Ae=new wA(y,B,D,K),D.programs=re.programs,v.capabilities=K,v.extensions=B,v.properties=oe,v.renderLists=ce,v.shadowMap=ie,v.state=Y,v.info=D}lt();const Te=new d1(v,y);this.xr=Te,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const w=B.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=B.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(z,H,!1))},this.getSize=function(w){return w.set(z,H)},this.setSize=function(w,X,te=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,H=X,t.width=Math.floor(w*k),t.height=Math.floor(X*k),te===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(z*k,H*k).floor()},this.setDrawingBufferSize=function(w,X,te){z=w,H=X,k=te,t.width=Math.floor(w*te),t.height=Math.floor(X*te),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,X,te,ee){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,X,te,ee),Y.viewport(b.copy(P).multiplyScalar(k).floor())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,X,te,ee){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,X,te,ee),Y.scissor(G.copy(se).multiplyScalar(k).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){Y.setScissorTest(fe=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(w=!0,X=!0,te=!0){let ee=0;if(w){let j=!1;if(A!==null){const xe=A.texture.format;j=xe===x0||xe===v0||xe===g0}if(j){const xe=A.texture.type,De=xe===Or||xe===wr||xe===Bh||xe===Ms||xe===m0||xe===_0,We=Fe.getClearColor(),Ue=Fe.getClearAlpha(),Ne=We.r,Xe=We.g,$e=We.b;De?(h[0]=Ne,h[1]=Xe,h[2]=$e,h[3]=Ue,y.clearBufferuiv(y.COLOR,0,h)):(g[0]=Ne,g[1]=Xe,g[2]=$e,g[3]=Ue,y.clearBufferiv(y.COLOR,0,g))}else ee|=y.COLOR_BUFFER_BIT}X&&(ee|=y.DEPTH_BUFFER_BIT),te&&(ee|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ce.dispose(),ue.dispose(),oe.dispose(),x.dispose(),L.dispose(),q.dispose(),we.dispose(),Ke.dispose(),re.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Re),Te.removeEventListener("sessionend",Be),ye&&(ye.dispose(),ye=null),pe.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=D.autoReset,X=ie.enabled,te=ie.autoUpdate,ee=ie.needsUpdate,j=ie.type;lt(),D.autoReset=w,ie.enabled=X,ie.autoUpdate=te,ie.needsUpdate=ee,ie.type=j}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ve(w){const X=w.target;X.removeEventListener("dispose",ve),Ge(X)}function Ge(w){ze(w),oe.remove(w)}function ze(w){const X=oe.get(w).programs;X!==void 0&&(X.forEach(function(te){re.releaseProgram(te)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,te,ee,j,xe){X===null&&(X=be);const De=j.isMesh&&j.matrixWorld.determinant()<0,We=St(w,X,te,ee,j);Y.setMaterial(ee,De);let Ue=te.index,Ne=1;if(ee.wireframe===!0){if(Ue=W.getWireframeAttribute(te),Ue===void 0)return;Ne=2}const Xe=te.drawRange,$e=te.attributes.position;let wt=Xe.start*Ne,qt=(Xe.start+Xe.count)*Ne;xe!==null&&(wt=Math.max(wt,xe.start*Ne),qt=Math.min(qt,(xe.start+xe.count)*Ne)),Ue!==null?(wt=Math.max(wt,0),qt=Math.min(qt,Ue.count)):$e!=null&&(wt=Math.max(wt,0),qt=Math.min(qt,$e.count));const mt=qt-wt;if(mt<0||mt===1/0)return;we.setup(j,ee,We,te,Ue);let vn,_t=Oe;if(Ue!==null&&(vn=Z.get(Ue),_t=Ae,_t.setIndex(vn)),j.isMesh)ee.wireframe===!0?(Y.setLineWidth(ee.wireframeLinewidth*Ve()),_t.setMode(y.LINES)):_t.setMode(y.TRIANGLES);else if(j.isLine){let Ye=ee.linewidth;Ye===void 0&&(Ye=1),Y.setLineWidth(Ye*Ve()),j.isLineSegments?_t.setMode(y.LINES):j.isLineLoop?_t.setMode(y.LINE_LOOP):_t.setMode(y.LINE_STRIP)}else j.isPoints?_t.setMode(y.POINTS):j.isSprite&&_t.setMode(y.TRIANGLES);if(j.isBatchedMesh)_t.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)_t.renderInstances(wt,mt,j.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Gc=Math.min(te.instanceCount,Ye);_t.renderInstances(wt,mt,Gc)}else _t.render(wt,mt)};function st(w,X,te){w.transparent===!0&&w.side===Ni&&w.forceSinglePass===!1?(w.side=Wt,w.needsUpdate=!0,Mt(w,X,te),w.side=Gr,w.needsUpdate=!0,Mt(w,X,te),w.side=Ni):Mt(w,X,te)}this.compile=function(w,X,te=null){te===null&&(te=w),m=ue.get(te),m.init(),S.push(m),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),w!==te&&w.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(v._useLegacyLights);const ee=new Set;return w.traverse(function(j){const xe=j.material;if(xe)if(Array.isArray(xe))for(let De=0;De<xe.length;De++){const We=xe[De];st(We,te,j),ee.add(We)}else st(xe,te,j),ee.add(xe)}),S.pop(),m=null,ee},this.compileAsync=function(w,X,te=null){const ee=this.compile(w,X,te);return new Promise(j=>{function xe(){if(ee.forEach(function(De){oe.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){j(w);return}setTimeout(xe,10)}B.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ut=null;function Ie(w){ut&&ut(w)}function Re(){pe.stop()}function Be(){pe.start()}const pe=new O0;pe.setAnimationLoop(Ie),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(w){ut=w,Te.setAnimationLoop(w),w===null?pe.stop():pe.start()},Te.addEventListener("sessionstart",Re),Te.addEventListener("sessionend",Be),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,A),m=ue.get(w,S.length),m.init(),S.push(m),he.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ne.setFromProjectionMatrix(he),de=this.localClippingEnabled,le=Me.init(this.clippingPlanes,de),_=ce.get(w,p.length),_.init(),p.push(_),ke(w,X,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,Q),this.info.render.frame++,le===!0&&Me.beginShadows();const te=m.state.shadowsArray;if(ie.render(te,w,X),le===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Fe.render(_,w),m.setupLights(v._useLegacyLights),X.isArrayCamera){const ee=X.cameras;for(let j=0,xe=ee.length;j<xe;j++){const De=ee[j];He(_,w,De,De.viewport)}}else He(_,w,X);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,X),we.resetDefaultState(),F=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ke(w,X,te,ee){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){ee&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const De=q.update(w),We=w.material;We.visible&&_.push(w,De,We,te,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){const De=q.update(w),We=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Pe.copy(De.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(We)){const Ue=De.groups;for(let Ne=0,Xe=Ue.length;Ne<Xe;Ne++){const $e=Ue[Ne],wt=We[$e.materialIndex];wt&&wt.visible&&_.push(w,De,wt,te,Pe.z,$e)}}else We.visible&&_.push(w,De,We,te,Pe.z,null)}}const xe=w.children;for(let De=0,We=xe.length;De<We;De++)ke(xe[De],X,te,ee)}function He(w,X,te,ee){const j=w.opaque,xe=w.transmissive,De=w.transparent;m.setupLightsView(te),le===!0&&Me.setGlobalState(v.clippingPlanes,te),xe.length>0&&qe(j,xe,X,te),ee&&Y.viewport(b.copy(ee)),j.length>0&&Ct(j,X,te),xe.length>0&&Ct(xe,X,te),De.length>0&&Ct(De,X,te),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function qe(w,X,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;const xe=K.isWebGL2;ye===null&&(ye=new Rs(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?Wa:Or,minFilter:Va,samples:xe?4:0})),v.getDrawingBufferSize(Le),xe?ye.setSize(Le.x,Le.y):ye.setSize(Mc(Le.x),Mc(Le.y));const De=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor($),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const We=v.toneMapping;v.toneMapping=Ir,Ct(w,te,ee),T.updateMultisampleRenderTarget(ye),T.updateRenderTargetMipmap(ye);let Ue=!1;for(let Ne=0,Xe=X.length;Ne<Xe;Ne++){const $e=X[Ne],wt=$e.object,qt=$e.geometry,mt=$e.material,vn=$e.group;if(mt.side===Ni&&wt.layers.test(ee.layers)){const _t=mt.side;mt.side=Wt,mt.needsUpdate=!0,tt(wt,te,ee,qt,mt,vn),mt.side=_t,mt.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(ye),T.updateRenderTargetMipmap(ye)),v.setRenderTarget(De),v.setClearColor($,U),v.toneMapping=We}function Ct(w,X,te){const ee=X.isScene===!0?X.overrideMaterial:null;for(let j=0,xe=w.length;j<xe;j++){const De=w[j],We=De.object,Ue=De.geometry,Ne=ee===null?De.material:ee,Xe=De.group;We.layers.test(te.layers)&&tt(We,X,te,Ue,Ne,Xe)}}function tt(w,X,te,ee,j,xe){w.onBeforeRender(v,X,te,ee,j,xe),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,X,te,ee,w,xe),j.transparent===!0&&j.side===Ni&&j.forceSinglePass===!1?(j.side=Wt,j.needsUpdate=!0,v.renderBufferDirect(te,X,ee,j,w,xe),j.side=Gr,j.needsUpdate=!0,v.renderBufferDirect(te,X,ee,j,w,xe),j.side=Ni):v.renderBufferDirect(te,X,ee,j,w,xe),w.onAfterRender(v,X,te,ee,j,xe)}function Mt(w,X,te){X.isScene!==!0&&(X=be);const ee=oe.get(w),j=m.state.lights,xe=m.state.shadowsArray,De=j.state.version,We=re.getParameters(w,j.state,xe,X,te),Ue=re.getProgramCacheKey(We);let Ne=ee.programs;ee.environment=w.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(w.isMeshStandardMaterial?L:x).get(w.envMap||ee.environment),Ne===void 0&&(w.addEventListener("dispose",ve),Ne=new Map,ee.programs=Ne);let Xe=Ne.get(Ue);if(Xe!==void 0){if(ee.currentProgram===Xe&&ee.lightsStateVersion===De)return bt(w,We),Xe}else We.uniforms=re.getUniforms(w),w.onBuild(te,We,v),w.onBeforeCompile(We,v),Xe=re.acquireProgram(We,Ue),Ne.set(Ue,Xe),ee.uniforms=We.uniforms;const $e=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&($e.clippingPlanes=Me.uniform),bt(w,We),ee.needsLights=Vn(w),ee.lightsStateVersion=De,ee.needsLights&&($e.ambientLightColor.value=j.state.ambient,$e.lightProbe.value=j.state.probe,$e.directionalLights.value=j.state.directional,$e.directionalLightShadows.value=j.state.directionalShadow,$e.spotLights.value=j.state.spot,$e.spotLightShadows.value=j.state.spotShadow,$e.rectAreaLights.value=j.state.rectArea,$e.ltc_1.value=j.state.rectAreaLTC1,$e.ltc_2.value=j.state.rectAreaLTC2,$e.pointLights.value=j.state.point,$e.pointLightShadows.value=j.state.pointShadow,$e.hemisphereLights.value=j.state.hemi,$e.directionalShadowMap.value=j.state.directionalShadowMap,$e.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$e.spotShadowMap.value=j.state.spotShadowMap,$e.spotLightMatrix.value=j.state.spotLightMatrix,$e.spotLightMap.value=j.state.spotLightMap,$e.pointShadowMap.value=j.state.pointShadowMap,$e.pointShadowMatrix.value=j.state.pointShadowMatrix),ee.currentProgram=Xe,ee.uniformsList=null,Xe}function Yt(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=jl.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function bt(w,X){const te=oe.get(w);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function St(w,X,te,ee,j){X.isScene!==!0&&(X=be),T.resetTextureUnits();const xe=X.fog,De=ee.isMeshStandardMaterial?X.environment:null,We=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fr,Ue=(ee.isMeshStandardMaterial?L:x).get(ee.envMap||De),Ne=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Xe=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),$e=!!te.morphAttributes.position,wt=!!te.morphAttributes.normal,qt=!!te.morphAttributes.color;let mt=Ir;ee.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=v.toneMapping);const vn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_t=vn!==void 0?vn.length:0,Ye=oe.get(ee),Gc=m.state.lights;if(le===!0&&(de===!0||w!==M)){const oi=w===M&&ee.id===F;Me.setState(ee,w,oi)}let Ut=!1;ee.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Gc.state.version||Ye.outputColorSpace!==We||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||Ye.envMap!==Ue||ee.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==Ne||Ye.vertexTangents!==Xe||Ye.morphTargets!==$e||Ye.morphNormals!==wt||Ye.morphColors!==qt||Ye.toneMapping!==mt||K.isWebGL2===!0&&Ye.morphTargetsCount!==_t)&&(Ut=!0):(Ut=!0,Ye.__version=ee.version);let Wr=Ye.currentProgram;Ut===!0&&(Wr=Mt(ee,X,j));let jh=!1,Ho=!1,kc=!1;const ln=Wr.getUniforms(),Xr=Ye.uniforms;if(Y.useProgram(Wr.program)&&(jh=!0,Ho=!0,kc=!0),ee.id!==F&&(F=ee.id,Ho=!0),jh||M!==w){ln.setValue(y,"projectionMatrix",w.projectionMatrix),ln.setValue(y,"viewMatrix",w.matrixWorldInverse);const oi=ln.map.cameraPosition;oi!==void 0&&oi.setValue(y,Pe.setFromMatrixPosition(w.matrixWorld)),K.logarithmicDepthBuffer&&ln.setValue(y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ln.setValue(y,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ho=!0,kc=!0)}if(j.isSkinnedMesh){ln.setOptional(y,j,"bindMatrix"),ln.setOptional(y,j,"bindMatrixInverse");const oi=j.skeleton;oi&&(K.floatVertexTextures?(oi.boneTexture===null&&oi.computeBoneTexture(),ln.setValue(y,"boneTexture",oi.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(ln.setOptional(y,j,"batchingTexture"),ln.setValue(y,"batchingTexture",j._matricesTexture,T));const Vc=te.morphAttributes;if((Vc.position!==void 0||Vc.normal!==void 0||Vc.color!==void 0&&K.isWebGL2===!0)&&Se.update(j,te,Wr),(Ho||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,ln.setValue(y,"receiveShadow",j.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Xr.envMap.value=Ue,Xr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ho&&(ln.setValue(y,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&pt(Xr,kc),xe&&ee.fog===!0&&ae.refreshFogUniforms(Xr,xe),ae.refreshMaterialUniforms(Xr,ee,k,H,ye),jl.upload(y,Yt(Ye),Xr,T)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(jl.upload(y,Yt(Ye),Xr,T),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ln.setValue(y,"center",j.center),ln.setValue(y,"modelViewMatrix",j.modelViewMatrix),ln.setValue(y,"normalMatrix",j.normalMatrix),ln.setValue(y,"modelMatrix",j.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const oi=ee.uniformsGroups;for(let Wc=0,q0=oi.length;Wc<q0;Wc++)if(K.isWebGL2){const Kh=oi[Wc];Ke.update(Kh,Wr),Ke.bind(Kh,Wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wr}function pt(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Vn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,X,te){oe.get(w.texture).__webglTexture=X,oe.get(w.depthTexture).__webglTexture=te;const ee=oe.get(w);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=te===void 0,ee.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,X){const te=oe.get(w);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,te=0){A=w,C=X,R=te;let ee=!0,j=null,xe=!1,De=!1;if(w){const Ue=oe.get(w);Ue.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(y.FRAMEBUFFER,null),ee=!1):Ue.__webglFramebuffer===void 0?T.setupRenderTarget(w):Ue.__hasExternalTextures&&T.rebindTextures(w,oe.get(w.texture).__webglTexture,oe.get(w.depthTexture).__webglTexture);const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(De=!0);const Xe=oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?j=Xe[X][te]:j=Xe[X],xe=!0):K.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?j=oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[te]:j=Xe,b.copy(w.viewport),G.copy(w.scissor),O=w.scissorTest}else b.copy(P).multiplyScalar(k).floor(),G.copy(se).multiplyScalar(k).floor(),O=fe;if(Y.bindFramebuffer(y.FRAMEBUFFER,j)&&K.drawBuffers&&ee&&Y.drawBuffers(w,j),Y.viewport(b),Y.scissor(G),Y.setScissorTest(O),xe){const Ue=oe.get(w.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,te)}else if(De){const Ue=oe.get(w.texture),Ne=X||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ue.__webglTexture,te||0,Ne)}F=-1},this.readRenderTargetPixels=function(w,X,te,ee,j,xe,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(We=We[De]),We){Y.bindFramebuffer(y.FRAMEBUFFER,We);try{const Ue=w.texture,Ne=Ue.format,Xe=Ue.type;if(Ne!==bi&&_e.convert(Ne)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Xe===Wa&&(B.has("EXT_color_buffer_half_float")||K.isWebGL2&&B.has("EXT_color_buffer_float"));if(Xe!==Or&&_e.convert(Xe)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Rr&&(K.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ee&&te>=0&&te<=w.height-j&&y.readPixels(X,te,ee,j,_e.convert(Ne),_e.convert(Xe),xe)}finally{const Ue=A!==null?oe.get(A).__webglFramebuffer:null;Y.bindFramebuffer(y.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(w,X,te=0){const ee=Math.pow(2,-te),j=Math.floor(X.image.width*ee),xe=Math.floor(X.image.height*ee);T.setTexture2D(X,0),y.copyTexSubImage2D(y.TEXTURE_2D,te,0,0,w.x,w.y,j,xe),Y.unbindTexture()},this.copyTextureToTexture=function(w,X,te,ee=0){const j=X.image.width,xe=X.image.height,De=_e.convert(te.format),We=_e.convert(te.type);T.setTexture2D(te,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,te.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,te.unpackAlignment),X.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ee,w.x,w.y,j,xe,De,We,X.image.data):X.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ee,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,De,X.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,ee,w.x,w.y,De,We,X.image),ee===0&&te.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(w,X,te,ee,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,We=w.max.z-w.min.z+1,Ue=_e.convert(ee.format),Ne=_e.convert(ee.type);let Xe;if(ee.isData3DTexture)T.setTexture3D(ee,0),Xe=y.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)T.setTexture2DArray(ee,0),Xe=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,ee.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,ee.unpackAlignment);const $e=y.getParameter(y.UNPACK_ROW_LENGTH),wt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),qt=y.getParameter(y.UNPACK_SKIP_PIXELS),mt=y.getParameter(y.UNPACK_SKIP_ROWS),vn=y.getParameter(y.UNPACK_SKIP_IMAGES),_t=te.isCompressedTexture?te.mipmaps[j]:te.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,_t.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,_t.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,w.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,w.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,w.min.z),te.isDataTexture||te.isData3DTexture?y.texSubImage3D(Xe,j,X.x,X.y,X.z,xe,De,We,Ue,Ne,_t.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(Xe,j,X.x,X.y,X.z,xe,De,We,Ue,_t.data)):y.texSubImage3D(Xe,j,X.x,X.y,X.z,xe,De,We,Ue,Ne,_t),y.pixelStorei(y.UNPACK_ROW_LENGTH,$e),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,wt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,qt),y.pixelStorei(y.UNPACK_SKIP_ROWS,mt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,vn),j===0&&ee.generateMipmaps&&y.generateMipmap(Xe),Y.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Y.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,Y.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zh?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Fc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?ys:S0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ys?Vt:fr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _1 extends V0{}_1.prototype.isWebGL1Renderer=!0;class Vh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(e),this.near=t,this.far=n}clone(){return new Vh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class g1 extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Am extends Ri{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new Ot,wm=new Ot,Ol=[],Rm=new Ds,v1=new Ot,Ko=new sn,Zo=new ja;class Cm extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Am(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,v1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ds),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Rm.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Rm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ja),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Zo.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(n),e.ray.intersectsSphere(Zo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qs),wm.multiplyMatrices(n,Qs),Ko.matrixWorld=wm,Ko.raycast(e,Ol);for(let a=0,o=Ol.length;a<o;a++){const l=Ol[a];l.instanceId=s,l.object=this,t.push(l)}Ol.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Am(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wh extends vi{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new J,u=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const h=n+f/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yc extends vi{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const _=[],m=n/2;let p=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Nt(f,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(h,2));function S(){const E=new J,C=new J;let R=0;const A=(t-e)/n;for(let F=0;F<=s;F++){const M=[],b=F/s,G=b*(t-e)+e;for(let O=0;O<=r;O++){const $=O/r,U=$*l+o,z=Math.sin(U),H=Math.cos(U);C.x=G*z,C.y=-b*n+m,C.z=G*H,f.push(C.x,C.y,C.z),E.set(z,A,H).normalize(),d.push(E.x,E.y,E.z),h.push($,1-b),M.push(g++)}_.push(M)}for(let F=0;F<r;F++)for(let M=0;M<s;M++){const b=_[M][F],G=_[M+1][F],O=_[M+1][F+1],$=_[M][F+1];u.push(b,G,$),u.push(G,O,$),R+=6}c.addGroup(p,R,0),p+=R}function v(E){const C=g,R=new at,A=new J;let F=0;const M=E===!0?e:t,b=E===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*b,0),d.push(0,b,0),h.push(.5,.5),g++;const G=g;for(let O=0;O<=r;O++){const U=O/r*l+o,z=Math.cos(U),H=Math.sin(U);A.x=M*H,A.y=m*b,A.z=M*z,f.push(A.x,A.y,A.z),d.push(0,b,0),R.x=z*.5+.5,R.y=H*.5*b+.5,h.push(R.x,R.y),g++}for(let O=0;O<r;O++){const $=C+O,U=G+O;E===!0?u.push(U,U+1,$):u.push(U+1,U,$),F+=3}c.addGroup(p,F,E===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xh extends vi{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,h=new J,g=new at;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,v=S,E=S+n+1,C=S+n+2,R=S+1;o.push(v,E,R),o.push(E,C,R)}}this.setIndex(o),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yh extends vi{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new J,d=new J,h=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const R=C/t;f.x=-e*Math.cos(r+R*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+v*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(R+E,1-v),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const v=u[p][S+1],E=u[p][S],C=u[p+1][S],R=u[p+1][S+1];(p!==0||a>0)&&h.push(v,E,R),(p!==n-1||l<Math.PI)&&h.push(E,C,R)}this.setIndex(h),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ec extends vi{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new J,f=new J,d=new J;for(let h=0;h<=n;h++)for(let g=0;g<=r;g++){const _=g/r*s,m=h/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=r;g++){const _=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,S=(r+1)*h+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class li extends Ka{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y0,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Pm={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class W0{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const x1=new W0;class qh{constructor(e){this.manager=e!==void 0?e:x1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qh.DEFAULT_MATERIAL_NAME="__DEFAULT";class M1 extends qh{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pm.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Xa("img");function l(){u(),Pm.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class S1 extends qh{constructor(e){super(e)}load(e,t,n,r){const s=new Gn,a=new M1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class $h extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class y1 extends $h{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qu=new Ot,Lm=new J,Dm=new J;class X0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gh,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lm),Dm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dm),t.updateMatrixWorld(),qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E1 extends X0{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Uo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class T1 extends $h{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new E1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class b1 extends X0{constructor(){super(new N0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Um extends $h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new b1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Im();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Im(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);const Y0=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},w1={key:0,class:"loader-overlay"},R1={class:"loader-text"},Om=.18,C1={__name:"VirtualRoom",setup(i){const e=O=>new URL(`https://ogonick1.github.io/vue-three-lemon-room/${O}`,import.meta.url).href;os.registerPlugin(Ze);const t=Nl(null);let n,r,s,a,o,l,c,u,f,d;const h=Nl(!0),g=Nl(0);let _,m;const p={x:0,y:0,targetX:0,targetY:0};function S(O){if(!t.value)return;const $=t.value.getBoundingClientRect(),U=(O.clientX-$.left)/$.width*2-1,z=(O.clientY-$.top)/$.height*2-1;p.targetX=Math.max(-1,Math.min(1,U)),p.targetY=Math.max(-1,Math.min(1,z))}function v(){p.targetX=0,p.targetY=0}function E(){const z={px:e("textures/walls/px.jpg"),nx:e("textures/walls/nx.jpg"),py:e("textures/walls/py.jpg"),ny:e("textures/walls/ny.jpg"),pz:e("textures/walls/pz.jpg"),nz:e("textures/walls/nz.jpg")},H={};Object.entries(z).forEach(([Q,P])=>{var fe,ne;const se=m.load(P);se.colorSpace=Vt,se.anisotropy=Math.min(16,((ne=(fe=n.capabilities).getMaxAnisotropy)==null?void 0:ne.call(fe))||8),H[Q]=se});const k=[new li({map:H.px,side:Wt,roughness:.9}),new li({map:H.nx,side:Wt,roughness:.9}),new li({map:H.py,side:Wt,roughness:.9}),new li({map:H.ny,side:Wt,roughness:.9}),new li({map:H.pz,side:Wt,roughness:.9}),new li({map:H.nz,side:Wt,roughness:.9})],V=new Bo(40,14,40);c=new sn(V,k),c.position.y=14*.5-.5,r.add(c)}function C(){const O=new Wh(12,128),$=new li({color:2302760,roughness:.95,metalness:.02});u=new sn(O,$),u.rotation.x=-Math.PI/2,u.receiveShadow=!0,r.add(u);const U=new Xh(3.4,3.8,64),z=new Sc({color:3538824,transparent:!0,opacity:.18}),H=new sn(U,z);H.rotation.x=-Math.PI/2,H.position.y=.01,r.add(H)}function R(){var Z,W;f=new fs;const O=new yc(.3,.6,3.6,16),$=new li({color:7293483,roughness:.92,metalness:.03}),U=new sn(O,$);U.position.y=1.8,U.castShadow=!0,f.add(U);const z=new fs,H=new li({color:6570275,roughness:.9});for(let q=0;q<7;q++){const re=2+Math.random()*1.4,ae=.3,ce=.05,ue=new yc(ce,ae,re,20),Me=new sn(ue,H);Me.castShadow=!0,Me.position.y=1.2+Math.random()*1.2,Me.rotation.y=Math.random()*Math.PI*2,Me.rotation.z=-.3+Math.random()*.6,Me.translateY(re*.5),z.add(Me)}f.add(z);const k=[{r:2.1,y:2.7,w:.5},{r:1.8,y:3.5,w:.35},{r:1.3,y:4.3,w:.15}],V=q=>{const re=k.reduce((ce,ue)=>ce+ue.w,0);let ae=q;return k.map((ce,ue)=>{let Me=Math.round(q*(ce.w/re));return ue===k.length-1&&(Me=ae),ae-=Me,Me})},Q=400,[P,se,fe]=V(Q),ne=m.load(e("textures/leaves/leaf.png"));ne.colorSpace=Vt,ne.anisotropy=Math.min(16,((W=(Z=n.capabilities).getMaxAnisotropy)==null?void 0:W.call(Z))||8);const le=new zc(.24,.42),de=new li({map:ne,transparent:!0,alphaTest:.45,side:Ni,roughness:.72,metalness:.05}),ye=new Cm(le,de,Q);ye.castShadow=!0;const he=new Xt,Le=q=>{const re=new J(q.x,0,q.z).normalize(),ae=new Fo().setFromUnitVectors(new J(0,0,1),re);he.quaternion.copy(ae),he.rotateX(-.35+Math.random()*.3),he.rotateZ(-.2+Math.random()*.4)},Pe=(q,re,ae)=>{const ce=[],ue=1.65/re,Me=Math.PI*(3-Math.sqrt(5));for(let ie=0;ie<re;ie++){const Fe=-.7+ie*ue+ue*.5,Se=Math.sqrt(1-Fe*Fe),Oe=ie*Me,Ae=Math.cos(Oe)*Se,_e=Math.sin(Oe)*Se,we=new J(Ae,Fe,_e);we.multiplyScalar(q.r*(1.2+Math.random()*.2)),we.y+=q.y+(-.1+Math.random()*.2),ce.push(we)}for(let ie=0;ie<re;ie++){const Fe=ce[ie];he.position.copy(Fe),Le(Fe);const Se=.9+Math.random()*.5;he.scale.set(Se,Se,1),he.updateMatrix(),ye.setMatrixAt(ae+ie,he.matrix)}};let be=0;Pe(k[0],P,be),be+=P,Pe(k[1],se,be),be+=se,Pe(k[2],fe,be),ye.instanceMatrix.needsUpdate=!0;const Ve=50,y=new Yh(.085,14,14),I=new li({color:15190075,roughness:.5,metalness:.15}),B=new Cm(y,I,Ve);B.castShadow=!0;const K=(q,re,ae)=>{const ce=[],ue=1.2/re,Me=Math.PI*(3-Math.sqrt(5));for(let ie=0;ie<re;ie++){const Fe=-.25+ie*ue+ue*.5,Se=Math.sqrt(1-Fe*Fe),Oe=ie*Me,Ae=Math.cos(Oe)*Se,_e=Math.sin(Oe)*Se,we=new J(Ae,Fe,_e);we.multiplyScalar(q.r*(.92+Math.random()*.2)),we.y+=q.y+(-.12+Math.random()*.2),ce.push(we)}for(let ie=0;ie<re;ie++){const Fe=ce[ie];he.position.copy(Fe),he.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI*2,Math.random()*Math.PI);const Se=1+Math.random()*.6;he.scale.set(.8*Se,1.45*Se,.8*Se),he.updateMatrix(),B.setMatrixAt(ae+ie,he.matrix)}},[Y,D,oe]=V(Ve);be=0,K(k[0],Y,be),be+=Y,K(k[1],D,be),be+=D,K(k[2],oe,be),B.instanceMatrix.needsUpdate=!0;const T=new sn(new Ec(.52,.02,8,64),new Sc({color:3538824}));T.position.y=1.2,f.add(T);const x=new sn(new Ec(2.1,.06,12,64),new li({color:2711359,roughness:.8,metalness:.05}));x.rotation.x=-Math.PI/2,x.position.y=.02,f.add(x);const L=new fs;L.add(ye,B),f.add(L),r.add(f),os.to(L.rotation,{z:.06,duration:2.8,yoyo:!0,repeat:-1,ease:"sine.inOut"}),os.to(L.position,{y:"+=0.06",duration:2.8,yoyo:!0,repeat:-1,ease:"sine.inOut"})}function A(){const O=new y1(14544639,1052693,.8);r.add(O);const $=new Um(16777215,1.2);$.position.set(6,10,6),$.castShadow=!0,$.shadow.mapSize.set(2048,2048),$.shadow.bias=-2e-4,r.add($);const U=new Um(10158028,.45);U.position.set(-6,7,-8),r.add(U);const z=new T1(9109452,.85,35,Math.PI/6,.35,1);z.position.set(0,9,0),r.add(z)}function F(){_=new W0,_.onProgress=(O,$,U)=>{g.value=Math.round($/U*100)},_.onLoad=()=>{os.to({},{duration:.2,onComplete:()=>h.value=!1})},m=new S1(_),r=new g1,r.fog=new Vh(921104,35,60),s=new Jn(60,1,.1,200),s.position.set(0,1.7,20),n=new V0({antialias:!0,alpha:!1}),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(t.value.clientWidth,t.value.clientHeight),n.outputColorSpace=Vt,n.toneMapping=h0,n.toneMappingExposure=1.1,n.shadowMap.enabled=!0,n.shadowMap.type=u0,t.value.appendChild(n.domElement),a=new A1}function M(){if(!t.value)return;const O=t.value.clientWidth,$=t.value.clientHeight;s.aspect=O/$,s.updateProjectionMatrix(),n.setSize(O,$)}function b(){const O={radius:20,angle:0,height:1.7},$=()=>{const U=Math.cos(O.angle)*O.radius,z=Math.sin(O.angle)*O.radius;s.position.set(U,O.height,z),s.lookAt(0,2.8,0)};$(),d=os.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:t.value,start:"top top",end:"+=2400",scrub:!0},onUpdate:$}),d.to(O,{radius:8,height:1.6,duration:.45},0),d.to(c.material,{colorProps:{r:.12,g:.12,b:.14},duration:.45},0),d.to(O,{angle:Math.PI*2,duration:.55},.45)}function G(){const O=a.getElapsedTime();if(p.x+=(p.targetX-p.x)*.08,p.y+=(p.targetY-p.y)*.08,u!=null&&u.material){const $=.96+Math.sin(O*1.2)*.02;u.material.roughness=cE.clamp($,.9,.99)}s.lookAt(0,2.8,0),s.rotateX(-p.y*Om),s.rotateY(p.x*Om),n.render(r,s),o=requestAnimationFrame(G)}return sh(()=>{F(),E(),C(),R(),A(),M(),t.value.addEventListener("mousemove",S),t.value.addEventListener("mouseleave",v),l=new ResizeObserver(M),l.observe(t.value),b(),G()}),oh(()=>{var O,$,U;o&&cancelAnimationFrame(o),Ze.getAll().forEach(z=>z.kill()),l&&l.disconnect(),(O=t.value)==null||O.removeEventListener("mousemove",S),($=t.value)==null||$.removeEventListener("mouseleave",v),n==null||n.dispose(),r==null||r.traverse(z=>{var H,k,V,Q;z.isMesh&&((k=(H=z.geometry)==null?void 0:H.dispose)==null||k.call(H),Array.isArray(z.material)?z.material.forEach(P=>{var se;return(se=P.dispose)==null?void 0:se.call(P)}):(Q=(V=z.material)==null?void 0:V.dispose)==null||Q.call(V))}),(U=n==null?void 0:n.domElement)!=null&&U.parentNode&&n.domElement.parentNode.removeChild(n.domElement)}),(O,$)=>(tc(),sf("div",{ref_key:"wrap",ref:t,class:"three-wrap"},[h.value?(tc(),sf("div",w1,[$[0]||($[0]=Kn("div",{class:"spinner"},null,-1)),Kn("div",R1,"Loading "+Xm(g.value)+"%",1)])):Ox("",!0),$[1]||($[1]=Kn("div",{class:"hud"},[Kn("div",{class:"hud-inner"},[Kn("h2",null,"Lemon Tree Room"),Kn("p",null,"Скроль, щоб увійти та обійти лимонне дерево по колу.")])],-1))],512))}},P1=Y0(C1,[["__scopeId","data-v-265471a8"]]),L1={__name:"App",setup(i){os.registerPlugin(Ze);const e=Nl(null);return sh(()=>{Ze.create({trigger:e.value,start:"top top",end:"+=2400",scrub:!0,pin:!0})}),oh(()=>{Ze.getAll().forEach(t=>t.kill())}),(t,n)=>(tc(),sf("div",null,[n[0]||(n[0]=Kn("section",{class:"spacer"},[Kn("h1",null,"Прокручуй вниз, щоб увійти в кімнату →")],-1)),Kn("section",{ref_key:"pinSection",ref:e,class:"pin-section"},[Gi(P1)],512),n[1]||(n[1]=Kn("section",{class:"spacer",style:{height:"140vh"}},[Kn("h1",null,"Кінець. Можна прокрутити назад ⤴")],-1))]))}},D1=Y0(L1,[["__scopeId","data-v-a9ec827f"]]);_M(D1).mount("#app");

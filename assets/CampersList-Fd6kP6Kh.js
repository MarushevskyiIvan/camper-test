import{h as dn,r as v,u as p,i as z,c as pn,e as hn,j as o,g as yo,k as bo,l as xo,m as So,a as tr,d as rr,n as jo}from"./index-CN1LkJv1.js";var wo=function(t){return To(t)&&!_o(t)};function To(e){return!!e&&typeof e=="object"}function _o(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Co(e)}var Eo=typeof Symbol=="function"&&Symbol.for,Oo=Eo?Symbol.for("react.element"):60103;function Co(e){return e.$$typeof===Oo}function Ao(e){return Array.isArray(e)?[]:{}}function ft(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ge(Ao(e),e,t):e}function $o(e,t,r){return e.concat(t).map(function(n){return ft(n,r)})}function Mo(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=ft(e[a],r)}),Object.keys(t).forEach(function(a){!r.isMergeableObject(t[a])||!e[a]?n[a]=ft(t[a],r):n[a]=Ge(e[a],t[a],r)}),n}function Ge(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||$o,r.isMergeableObject=r.isMergeableObject||wo;var n=Array.isArray(t),a=Array.isArray(e),i=n===a;return i?n?r.arrayMerge(e,t,r):Mo(e,t,r):ft(t,r)}Ge.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return Ge(n,a,r)},{})};var Bt=Ge,vn=typeof global=="object"&&global&&global.Object===Object&&global,Ro=typeof self=="object"&&self&&self.Object===Object&&self,ie=vn||Ro||Function("return this")(),me=ie.Symbol,mn=Object.prototype,Fo=mn.hasOwnProperty,Io=mn.toString,He=me?me.toStringTag:void 0;function Po(e){var t=Fo.call(e,He),r=e[He];try{e[He]=void 0;var n=!0}catch{}var a=Io.call(e);return n&&(t?e[He]=r:delete e[He]),a}var Lo=Object.prototype,No=Lo.toString;function Do(e){return No.call(e)}var ko="[object Null]",Uo="[object Undefined]",wr=me?me.toStringTag:void 0;function Oe(e){return e==null?e===void 0?Uo:ko:wr&&wr in Object(e)?Po(e):Do(e)}function gn(e,t){return function(r){return e(t(r))}}var nr=gn(Object.getPrototypeOf,Object);function Ce(e){return e!=null&&typeof e=="object"}var Wo="[object Object]",Bo=Function.prototype,Ho=Object.prototype,yn=Bo.toString,Vo=Ho.hasOwnProperty,zo=yn.call(Object);function Tr(e){if(!Ce(e)||Oe(e)!=Wo)return!1;var t=nr(e);if(t===null)return!0;var r=Vo.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&yn.call(r)==zo}var _r=Array.isArray,Er=Object.keys,qo=Object.prototype.hasOwnProperty,Go=typeof Element<"u";function Ht(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=_r(e),n=_r(t),a,i,u;if(r&&n){if(i=e.length,i!=t.length)return!1;for(a=i;a--!==0;)if(!Ht(e[a],t[a]))return!1;return!0}if(r!=n)return!1;var l=e instanceof Date,m=t instanceof Date;if(l!=m)return!1;if(l&&m)return e.getTime()==t.getTime();var f=e instanceof RegExp,_=t instanceof RegExp;if(f!=_)return!1;if(f&&_)return e.toString()==t.toString();var g=Er(e);if(i=g.length,i!==Er(t).length)return!1;for(a=i;a--!==0;)if(!qo.call(t,g[a]))return!1;if(Go&&e instanceof Element&&t instanceof Element)return e===t;for(a=i;a--!==0;)if(u=g[a],!(u==="_owner"&&e.$$typeof)&&!Ht(e[u],t[u]))return!1;return!0}return e!==e&&t!==t}var Ko=function(t,r){try{return Ht(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const xe=dn(Ko);function Yo(){this.__data__=[],this.size=0}function bn(e,t){return e===t||e!==e&&t!==t}function vt(e,t){for(var r=e.length;r--;)if(bn(e[r][0],t))return r;return-1}var Xo=Array.prototype,Jo=Xo.splice;function Zo(e){var t=this.__data__,r=vt(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Jo.call(t,r,1),--this.size,!0}function Qo(e){var t=this.__data__,r=vt(t,e);return r<0?void 0:t[r][1]}function ea(e){return vt(this.__data__,e)>-1}function ta(e,t){var r=this.__data__,n=vt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function ue(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ue.prototype.clear=Yo;ue.prototype.delete=Zo;ue.prototype.get=Qo;ue.prototype.has=ea;ue.prototype.set=ta;function ra(){this.__data__=new ue,this.size=0}function na(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function oa(e){return this.__data__.get(e)}function aa(e){return this.__data__.has(e)}function Ze(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ia="[object AsyncFunction]",sa="[object Function]",la="[object GeneratorFunction]",ca="[object Proxy]";function xn(e){if(!Ze(e))return!1;var t=Oe(e);return t==sa||t==la||t==ia||t==ca}var Pt=ie["__core-js_shared__"],Or=function(){var e=/[^.]+$/.exec(Pt&&Pt.keys&&Pt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ua(e){return!!Or&&Or in e}var fa=Function.prototype,da=fa.toString;function Ae(e){if(e!=null){try{return da.call(e)}catch{}try{return e+""}catch{}}return""}var pa=/[\\^$.*+?()[\]{}|]/g,ha=/^\[object .+?Constructor\]$/,va=Function.prototype,ma=Object.prototype,ga=va.toString,ya=ma.hasOwnProperty,ba=RegExp("^"+ga.call(ya).replace(pa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xa(e){if(!Ze(e)||ua(e))return!1;var t=xn(e)?ba:ha;return t.test(Ae(e))}function Sa(e,t){return e==null?void 0:e[t]}function $e(e,t){var r=Sa(e,t);return xa(r)?r:void 0}var Ke=$e(ie,"Map"),Ye=$e(Object,"create");function ja(){this.__data__=Ye?Ye(null):{},this.size=0}function wa(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ta="__lodash_hash_undefined__",_a=Object.prototype,Ea=_a.hasOwnProperty;function Oa(e){var t=this.__data__;if(Ye){var r=t[e];return r===Ta?void 0:r}return Ea.call(t,e)?t[e]:void 0}var Ca=Object.prototype,Aa=Ca.hasOwnProperty;function $a(e){var t=this.__data__;return Ye?t[e]!==void 0:Aa.call(t,e)}var Ma="__lodash_hash_undefined__";function Ra(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ye&&t===void 0?Ma:t,this}function _e(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_e.prototype.clear=ja;_e.prototype.delete=wa;_e.prototype.get=Oa;_e.prototype.has=$a;_e.prototype.set=Ra;function Fa(){this.size=0,this.__data__={hash:new _e,map:new(Ke||ue),string:new _e}}function Ia(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function mt(e,t){var r=e.__data__;return Ia(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Pa(e){var t=mt(this,e).delete(e);return this.size-=t?1:0,t}function La(e){return mt(this,e).get(e)}function Na(e){return mt(this,e).has(e)}function Da(e,t){var r=mt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function ge(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ge.prototype.clear=Fa;ge.prototype.delete=Pa;ge.prototype.get=La;ge.prototype.has=Na;ge.prototype.set=Da;var ka=200;function Ua(e,t){var r=this.__data__;if(r instanceof ue){var n=r.__data__;if(!Ke||n.length<ka-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ge(n)}return r.set(e,t),this.size=r.size,this}function De(e){var t=this.__data__=new ue(e);this.size=t.size}De.prototype.clear=ra;De.prototype.delete=na;De.prototype.get=oa;De.prototype.has=aa;De.prototype.set=Ua;function Wa(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Cr=function(){try{var e=$e(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Sn(e,t,r){t=="__proto__"&&Cr?Cr(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ba=Object.prototype,Ha=Ba.hasOwnProperty;function jn(e,t,r){var n=e[t];(!(Ha.call(e,t)&&bn(n,r))||r===void 0&&!(t in e))&&Sn(e,t,r)}function gt(e,t,r,n){var a=!r;r||(r={});for(var i=-1,u=t.length;++i<u;){var l=t[i],m=n?n(r[l],e[l],l,r,e):void 0;m===void 0&&(m=e[l]),a?Sn(r,l,m):jn(r,l,m)}return r}function Va(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var za="[object Arguments]";function Ar(e){return Ce(e)&&Oe(e)==za}var wn=Object.prototype,qa=wn.hasOwnProperty,Ga=wn.propertyIsEnumerable,Ka=Ar(function(){return arguments}())?Ar:function(e){return Ce(e)&&qa.call(e,"callee")&&!Ga.call(e,"callee")},Qe=Array.isArray;function Ya(){return!1}var Tn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$r=Tn&&typeof module=="object"&&module&&!module.nodeType&&module,Xa=$r&&$r.exports===Tn,Mr=Xa?ie.Buffer:void 0,Ja=Mr?Mr.isBuffer:void 0,_n=Ja||Ya,Za=9007199254740991,Qa=/^(?:0|[1-9]\d*)$/;function ei(e,t){var r=typeof e;return t=t??Za,!!t&&(r=="number"||r!="symbol"&&Qa.test(e))&&e>-1&&e%1==0&&e<t}var ti=9007199254740991;function En(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ti}var ri="[object Arguments]",ni="[object Array]",oi="[object Boolean]",ai="[object Date]",ii="[object Error]",si="[object Function]",li="[object Map]",ci="[object Number]",ui="[object Object]",fi="[object RegExp]",di="[object Set]",pi="[object String]",hi="[object WeakMap]",vi="[object ArrayBuffer]",mi="[object DataView]",gi="[object Float32Array]",yi="[object Float64Array]",bi="[object Int8Array]",xi="[object Int16Array]",Si="[object Int32Array]",ji="[object Uint8Array]",wi="[object Uint8ClampedArray]",Ti="[object Uint16Array]",_i="[object Uint32Array]",I={};I[gi]=I[yi]=I[bi]=I[xi]=I[Si]=I[ji]=I[wi]=I[Ti]=I[_i]=!0;I[ri]=I[ni]=I[vi]=I[oi]=I[mi]=I[ai]=I[ii]=I[si]=I[li]=I[ci]=I[ui]=I[fi]=I[di]=I[pi]=I[hi]=!1;function Ei(e){return Ce(e)&&En(e.length)&&!!I[Oe(e)]}function or(e){return function(t){return e(t)}}var On=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ve=On&&typeof module=="object"&&module&&!module.nodeType&&module,Oi=Ve&&Ve.exports===On,Lt=Oi&&vn.process,Le=function(){try{var e=Ve&&Ve.require&&Ve.require("util").types;return e||Lt&&Lt.binding&&Lt.binding("util")}catch{}}(),Rr=Le&&Le.isTypedArray,Ci=Rr?or(Rr):Ei,Ai=Object.prototype,$i=Ai.hasOwnProperty;function Cn(e,t){var r=Qe(e),n=!r&&Ka(e),a=!r&&!n&&_n(e),i=!r&&!n&&!a&&Ci(e),u=r||n||a||i,l=u?Va(e.length,String):[],m=l.length;for(var f in e)(t||$i.call(e,f))&&!(u&&(f=="length"||a&&(f=="offset"||f=="parent")||i&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||ei(f,m)))&&l.push(f);return l}var Mi=Object.prototype;function ar(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Mi;return e===r}var Ri=gn(Object.keys,Object),Fi=Object.prototype,Ii=Fi.hasOwnProperty;function Pi(e){if(!ar(e))return Ri(e);var t=[];for(var r in Object(e))Ii.call(e,r)&&r!="constructor"&&t.push(r);return t}function An(e){return e!=null&&En(e.length)&&!xn(e)}function ir(e){return An(e)?Cn(e):Pi(e)}function Li(e,t){return e&&gt(t,ir(t),e)}function Ni(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Di=Object.prototype,ki=Di.hasOwnProperty;function Ui(e){if(!Ze(e))return Ni(e);var t=ar(e),r=[];for(var n in e)n=="constructor"&&(t||!ki.call(e,n))||r.push(n);return r}function sr(e){return An(e)?Cn(e,!0):Ui(e)}function Wi(e,t){return e&&gt(t,sr(t),e)}var $n=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fr=$n&&typeof module=="object"&&module&&!module.nodeType&&module,Bi=Fr&&Fr.exports===$n,Ir=Bi?ie.Buffer:void 0,Pr=Ir?Ir.allocUnsafe:void 0;function Hi(e,t){if(t)return e.slice();var r=e.length,n=Pr?Pr(r):new e.constructor(r);return e.copy(n),n}function Mn(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Vi(e,t){for(var r=-1,n=e==null?0:e.length,a=0,i=[];++r<n;){var u=e[r];t(u,r,e)&&(i[a++]=u)}return i}function Rn(){return[]}var zi=Object.prototype,qi=zi.propertyIsEnumerable,Lr=Object.getOwnPropertySymbols,lr=Lr?function(e){return e==null?[]:(e=Object(e),Vi(Lr(e),function(t){return qi.call(e,t)}))}:Rn;function Gi(e,t){return gt(e,lr(e),t)}function Fn(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var Ki=Object.getOwnPropertySymbols,In=Ki?function(e){for(var t=[];e;)Fn(t,lr(e)),e=nr(e);return t}:Rn;function Yi(e,t){return gt(e,In(e),t)}function Pn(e,t,r){var n=t(e);return Qe(e)?n:Fn(n,r(e))}function Xi(e){return Pn(e,ir,lr)}function Ji(e){return Pn(e,sr,In)}var Vt=$e(ie,"DataView"),zt=$e(ie,"Promise"),qt=$e(ie,"Set"),Gt=$e(ie,"WeakMap"),Nr="[object Map]",Zi="[object Object]",Dr="[object Promise]",kr="[object Set]",Ur="[object WeakMap]",Wr="[object DataView]",Qi=Ae(Vt),es=Ae(Ke),ts=Ae(zt),rs=Ae(qt),ns=Ae(Gt),Se=Oe;(Vt&&Se(new Vt(new ArrayBuffer(1)))!=Wr||Ke&&Se(new Ke)!=Nr||zt&&Se(zt.resolve())!=Dr||qt&&Se(new qt)!=kr||Gt&&Se(new Gt)!=Ur)&&(Se=function(e){var t=Oe(e),r=t==Zi?e.constructor:void 0,n=r?Ae(r):"";if(n)switch(n){case Qi:return Wr;case es:return Nr;case ts:return Dr;case rs:return kr;case ns:return Ur}return t});const cr=Se;var os=Object.prototype,as=os.hasOwnProperty;function is(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&as.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Br=ie.Uint8Array;function ur(e){var t=new e.constructor(e.byteLength);return new Br(t).set(new Br(e)),t}function ss(e,t){var r=t?ur(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ls=/\w*$/;function cs(e){var t=new e.constructor(e.source,ls.exec(e));return t.lastIndex=e.lastIndex,t}var Hr=me?me.prototype:void 0,Vr=Hr?Hr.valueOf:void 0;function us(e){return Vr?Object(Vr.call(e)):{}}function fs(e,t){var r=t?ur(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var ds="[object Boolean]",ps="[object Date]",hs="[object Map]",vs="[object Number]",ms="[object RegExp]",gs="[object Set]",ys="[object String]",bs="[object Symbol]",xs="[object ArrayBuffer]",Ss="[object DataView]",js="[object Float32Array]",ws="[object Float64Array]",Ts="[object Int8Array]",_s="[object Int16Array]",Es="[object Int32Array]",Os="[object Uint8Array]",Cs="[object Uint8ClampedArray]",As="[object Uint16Array]",$s="[object Uint32Array]";function Ms(e,t,r){var n=e.constructor;switch(t){case xs:return ur(e);case ds:case ps:return new n(+e);case Ss:return ss(e,r);case js:case ws:case Ts:case _s:case Es:case Os:case Cs:case As:case $s:return fs(e,r);case hs:return new n;case vs:case ys:return new n(e);case ms:return cs(e);case gs:return new n;case bs:return us(e)}}var zr=Object.create,Rs=function(){function e(){}return function(t){if(!Ze(t))return{};if(zr)return zr(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Fs(e){return typeof e.constructor=="function"&&!ar(e)?Rs(nr(e)):{}}var Is="[object Map]";function Ps(e){return Ce(e)&&cr(e)==Is}var qr=Le&&Le.isMap,Ls=qr?or(qr):Ps,Ns="[object Set]";function Ds(e){return Ce(e)&&cr(e)==Ns}var Gr=Le&&Le.isSet,ks=Gr?or(Gr):Ds,Us=1,Ws=2,Bs=4,Ln="[object Arguments]",Hs="[object Array]",Vs="[object Boolean]",zs="[object Date]",qs="[object Error]",Nn="[object Function]",Gs="[object GeneratorFunction]",Ks="[object Map]",Ys="[object Number]",Dn="[object Object]",Xs="[object RegExp]",Js="[object Set]",Zs="[object String]",Qs="[object Symbol]",el="[object WeakMap]",tl="[object ArrayBuffer]",rl="[object DataView]",nl="[object Float32Array]",ol="[object Float64Array]",al="[object Int8Array]",il="[object Int16Array]",sl="[object Int32Array]",ll="[object Uint8Array]",cl="[object Uint8ClampedArray]",ul="[object Uint16Array]",fl="[object Uint32Array]",F={};F[Ln]=F[Hs]=F[tl]=F[rl]=F[Vs]=F[zs]=F[nl]=F[ol]=F[al]=F[il]=F[sl]=F[Ks]=F[Ys]=F[Dn]=F[Xs]=F[Js]=F[Zs]=F[Qs]=F[ll]=F[cl]=F[ul]=F[fl]=!0;F[qs]=F[Nn]=F[el]=!1;function ut(e,t,r,n,a,i){var u,l=t&Us,m=t&Ws,f=t&Bs;if(r&&(u=a?r(e,n,a,i):r(e)),u!==void 0)return u;if(!Ze(e))return e;var _=Qe(e);if(_){if(u=is(e),!l)return Mn(e,u)}else{var g=cr(e),d=g==Nn||g==Gs;if(_n(e))return Hi(e,l);if(g==Dn||g==Ln||d&&!a){if(u=m||d?{}:Fs(e),!l)return m?Yi(e,Wi(u,e)):Gi(e,Li(u,e))}else{if(!F[g])return a?e:{};u=Ms(e,g,l)}}i||(i=new De);var b=i.get(e);if(b)return b;i.set(e,u),ks(e)?e.forEach(function(L){u.add(ut(L,t,r,L,e,i))}):Ls(e)&&e.forEach(function(L,R){u.set(R,ut(L,t,r,R,e,i))});var M=f?m?Ji:Xi:m?sr:ir,k=_?void 0:M(e);return Wa(k||e,function(L,R){k&&(R=L,L=e[R]),jn(u,R,ut(L,t,r,R,e,i))}),u}var dl=4;function Kr(e){return ut(e,dl)}function kn(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var pl="[object Symbol]";function fr(e){return typeof e=="symbol"||Ce(e)&&Oe(e)==pl}var hl="Expected a function";function dr(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(hl);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var u=e.apply(this,n);return r.cache=i.set(a,u)||i,u};return r.cache=new(dr.Cache||ge),r}dr.Cache=ge;var vl=500;function ml(e){var t=dr(e,function(n){return r.size===vl&&r.clear(),n}),r=t.cache;return t}var gl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yl=/\\(\\)?/g,bl=ml(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(gl,function(r,n,a,i){t.push(a?i.replace(yl,"$1"):n||r)}),t});const xl=bl;var Sl=1/0;function jl(e){if(typeof e=="string"||fr(e))return e;var t=e+"";return t=="0"&&1/e==-Sl?"-0":t}var wl=1/0,Yr=me?me.prototype:void 0,Xr=Yr?Yr.toString:void 0;function Un(e){if(typeof e=="string")return e;if(Qe(e))return kn(e,Un)+"";if(fr(e))return Xr?Xr.call(e):"";var t=e+"";return t=="0"&&1/e==-wl?"-0":t}function Tl(e){return e==null?"":Un(e)}function Wn(e){return Qe(e)?kn(e,jl):fr(e)?[e]:Mn(xl(Tl(e)))}var Bn={exports:{}},$={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H=typeof Symbol=="function"&&Symbol.for,pr=H?Symbol.for("react.element"):60103,hr=H?Symbol.for("react.portal"):60106,yt=H?Symbol.for("react.fragment"):60107,bt=H?Symbol.for("react.strict_mode"):60108,xt=H?Symbol.for("react.profiler"):60114,St=H?Symbol.for("react.provider"):60109,jt=H?Symbol.for("react.context"):60110,vr=H?Symbol.for("react.async_mode"):60111,wt=H?Symbol.for("react.concurrent_mode"):60111,Tt=H?Symbol.for("react.forward_ref"):60112,_t=H?Symbol.for("react.suspense"):60113,_l=H?Symbol.for("react.suspense_list"):60120,Et=H?Symbol.for("react.memo"):60115,Ot=H?Symbol.for("react.lazy"):60116,El=H?Symbol.for("react.block"):60121,Ol=H?Symbol.for("react.fundamental"):60117,Cl=H?Symbol.for("react.responder"):60118,Al=H?Symbol.for("react.scope"):60119;function X(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pr:switch(e=e.type,e){case vr:case wt:case yt:case xt:case bt:case _t:return e;default:switch(e=e&&e.$$typeof,e){case jt:case Tt:case Ot:case Et:case St:return e;default:return t}}case hr:return t}}}function Hn(e){return X(e)===wt}$.AsyncMode=vr;$.ConcurrentMode=wt;$.ContextConsumer=jt;$.ContextProvider=St;$.Element=pr;$.ForwardRef=Tt;$.Fragment=yt;$.Lazy=Ot;$.Memo=Et;$.Portal=hr;$.Profiler=xt;$.StrictMode=bt;$.Suspense=_t;$.isAsyncMode=function(e){return Hn(e)||X(e)===vr};$.isConcurrentMode=Hn;$.isContextConsumer=function(e){return X(e)===jt};$.isContextProvider=function(e){return X(e)===St};$.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr};$.isForwardRef=function(e){return X(e)===Tt};$.isFragment=function(e){return X(e)===yt};$.isLazy=function(e){return X(e)===Ot};$.isMemo=function(e){return X(e)===Et};$.isPortal=function(e){return X(e)===hr};$.isProfiler=function(e){return X(e)===xt};$.isStrictMode=function(e){return X(e)===bt};$.isSuspense=function(e){return X(e)===_t};$.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yt||e===wt||e===xt||e===bt||e===_t||e===_l||typeof e=="object"&&e!==null&&(e.$$typeof===Ot||e.$$typeof===Et||e.$$typeof===St||e.$$typeof===jt||e.$$typeof===Tt||e.$$typeof===Ol||e.$$typeof===Cl||e.$$typeof===Al||e.$$typeof===El)};$.typeOf=X;Bn.exports=$;var $l=Bn.exports,Vn=$l,Ml={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rl={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zn={};zn[Vn.ForwardRef]=Ml;zn[Vn.Memo]=Rl;function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B.apply(this,arguments)}function qn(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var Ct=v.createContext(void 0);Ct.displayName="FormikContext";var Fl=Ct.Provider;Ct.Consumer;function Il(){var e=v.useContext(Ct);return e}var Z=function(t){return typeof t=="function"},At=function(t){return t!==null&&typeof t=="object"},Pl=function(t){return String(Math.floor(Number(t)))===t},Nt=function(t){return Object.prototype.toString.call(t)==="[object String]"},Ll=function(t){return v.Children.count(t)===0},Dt=function(t){return At(t)&&Z(t.then)};function Y(e,t,r,n){n===void 0&&(n=0);for(var a=Wn(t);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?r:e}function we(e,t,r){for(var n=Kr(e),a=n,i=0,u=Wn(t);i<u.length-1;i++){var l=u[i],m=Y(e,u.slice(0,i+1));if(m&&(At(m)||Array.isArray(m)))a=a[l]=Kr(m);else{var f=u[i+1];a=a[l]=Pl(f)&&Number(f)>=0?[]:{}}}return(i===0?e:a)[u[i]]===r?e:(r===void 0?delete a[u[i]]:a[u[i]]=r,i===0&&r===void 0&&delete n[u[i]],n)}function Gn(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var a=0,i=Object.keys(e);a<i.length;a++){var u=i[a],l=e[u];At(l)?r.get(l)||(r.set(l,!0),n[u]=Array.isArray(l)?[]:{},Gn(l,t,r,n[u])):n[u]=t}return n}function Nl(e,t){switch(t.type){case"SET_VALUES":return B({},e,{values:t.payload});case"SET_TOUCHED":return B({},e,{touched:t.payload});case"SET_ERRORS":return xe(e.errors,t.payload)?e:B({},e,{errors:t.payload});case"SET_STATUS":return B({},e,{status:t.payload});case"SET_ISSUBMITTING":return B({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return B({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return B({},e,{values:we(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return B({},e,{touched:we(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return B({},e,{errors:we(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return B({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return B({},e,{touched:Gn(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return B({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return B({},e,{isSubmitting:!1});default:return e}}var be={},st={};function Dl(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,a=n===void 0?!0:n,i=e.validateOnMount,u=i===void 0?!1:i,l=e.isInitialValid,m=e.enableReinitialize,f=m===void 0?!1:m,_=e.onSubmit,g=qn(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=B({validateOnChange:r,validateOnBlur:a,validateOnMount:u,onSubmit:_},g),b=v.useRef(d.initialValues),M=v.useRef(d.initialErrors||be),k=v.useRef(d.initialTouched||st),L=v.useRef(d.initialStatus),R=v.useRef(!1),oe=v.useRef({});v.useEffect(function(){return R.current=!0,function(){R.current=!1}},[]);var rt=v.useState(0),We=rt[1],se=v.useRef({values:d.initialValues,errors:d.initialErrors||be,touched:d.initialTouched||st,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=se.current,O=v.useCallback(function(s){var h=se.current;se.current=Nl(h,s),h!==se.current&&We(function(y){return y+1})},[]),nt=v.useCallback(function(s,h){return new Promise(function(y,x){var E=d.validate(s,h);E==null?y(be):Dt(E)?E.then(function(A){y(A||be)},function(A){x(A)}):y(E)})},[d.validate]),ye=v.useCallback(function(s,h){var y=d.validationSchema,x=Z(y)?y(h):y,E=h&&x.validateAt?x.validateAt(h,s):Wl(s,x);return new Promise(function(A,W){E.then(function(){A(be)},function(le){le.name==="ValidationError"?A(Ul(le)):W(le)})})},[d.validationSchema]),ot=v.useCallback(function(s,h){return new Promise(function(y){return y(oe.current[s].validate(h))})},[]),at=v.useCallback(function(s){var h=Object.keys(oe.current).filter(function(x){return Z(oe.current[x].validate)}),y=h.length>0?h.map(function(x){return ot(x,Y(s,x))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(y).then(function(x){return x.reduce(function(E,A,W){return A==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||A&&(E=we(E,h[W],A)),E},{})})},[ot]),Me=v.useCallback(function(s){return Promise.all([at(s),d.validationSchema?ye(s):{},d.validate?nt(s):{}]).then(function(h){var y=h[0],x=h[1],E=h[2],A=Bt.all([y,x,E],{arrayMerge:Bl});return A})},[d.validate,d.validationSchema,at,nt,ye]),G=J(function(s){return s===void 0&&(s=C.values),O({type:"SET_ISVALIDATING",payload:!0}),Me(s).then(function(h){return R.current&&(O({type:"SET_ISVALIDATING",payload:!1}),O({type:"SET_ERRORS",payload:h})),h})});v.useEffect(function(){u&&R.current===!0&&xe(b.current,d.initialValues)&&G(b.current)},[u,G]);var j=v.useCallback(function(s){var h=s&&s.values?s.values:b.current,y=s&&s.errors?s.errors:M.current?M.current:d.initialErrors||{},x=s&&s.touched?s.touched:k.current?k.current:d.initialTouched||{},E=s&&s.status?s.status:L.current?L.current:d.initialStatus;b.current=h,M.current=y,k.current=x,L.current=E;var A=function(){O({type:"RESET_FORM",payload:{isSubmitting:!!s&&!!s.isSubmitting,errors:y,touched:x,status:E,values:h,isValidating:!!s&&!!s.isValidating,submitCount:s&&s.submitCount&&typeof s.submitCount=="number"?s.submitCount:0}})};if(d.onReset){var W=d.onReset(C.values,Sr);Dt(W)?W.then(A):A()}else A()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);v.useEffect(function(){R.current===!0&&!xe(b.current,d.initialValues)&&f&&(b.current=d.initialValues,j(),u&&G(b.current))},[f,d.initialValues,j,u,G]),v.useEffect(function(){f&&R.current===!0&&!xe(M.current,d.initialErrors)&&(M.current=d.initialErrors||be,O({type:"SET_ERRORS",payload:d.initialErrors||be}))},[f,d.initialErrors]),v.useEffect(function(){f&&R.current===!0&&!xe(k.current,d.initialTouched)&&(k.current=d.initialTouched||st,O({type:"SET_TOUCHED",payload:d.initialTouched||st}))},[f,d.initialTouched]),v.useEffect(function(){f&&R.current===!0&&!xe(L.current,d.initialStatus)&&(L.current=d.initialStatus,O({type:"SET_STATUS",payload:d.initialStatus}))},[f,d.initialStatus,d.initialTouched]);var w=J(function(s){if(oe.current[s]&&Z(oe.current[s].validate)){var h=Y(C.values,s),y=oe.current[s].validate(h);return Dt(y)?(O({type:"SET_ISVALIDATING",payload:!0}),y.then(function(x){return x}).then(function(x){O({type:"SET_FIELD_ERROR",payload:{field:s,value:x}}),O({type:"SET_ISVALIDATING",payload:!1})})):(O({type:"SET_FIELD_ERROR",payload:{field:s,value:y}}),Promise.resolve(y))}else if(d.validationSchema)return O({type:"SET_ISVALIDATING",payload:!0}),ye(C.values,s).then(function(x){return x}).then(function(x){O({type:"SET_FIELD_ERROR",payload:{field:s,value:Y(x,s)}}),O({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),D=v.useCallback(function(s,h){var y=h.validate;oe.current[s]={validate:y}},[]),c=v.useCallback(function(s){delete oe.current[s]},[]),S=J(function(s,h){O({type:"SET_TOUCHED",payload:s});var y=h===void 0?a:h;return y?G(C.values):Promise.resolve()}),U=v.useCallback(function(s){O({type:"SET_ERRORS",payload:s})},[]),V=J(function(s,h){var y=Z(s)?s(C.values):s;O({type:"SET_VALUES",payload:y});var x=h===void 0?r:h;return x?G(y):Promise.resolve()}),N=v.useCallback(function(s,h){O({type:"SET_FIELD_ERROR",payload:{field:s,value:h}})},[]),K=J(function(s,h,y){O({type:"SET_FIELD_VALUE",payload:{field:s,value:h}});var x=y===void 0?r:y;return x?G(we(C.values,s,h)):Promise.resolve()}),ae=v.useCallback(function(s,h){var y=h,x=s,E;if(!Nt(s)){s.persist&&s.persist();var A=s.target?s.target:s.currentTarget,W=A.type,le=A.name,Ft=A.id,It=A.value,mo=A.checked,bf=A.outerHTML,jr=A.options,go=A.multiple;y=h||le||Ft,x=/number|range/.test(W)?(E=parseFloat(It),isNaN(E)?"":E):/checkbox/.test(W)?Vl(Y(C.values,y),mo,It):jr&&go?Hl(jr):It}y&&K(y,x)},[K,C.values]),fe=J(function(s){if(Nt(s))return function(h){return ae(h,s)};ae(s)}),de=J(function(s,h,y){h===void 0&&(h=!0),O({type:"SET_FIELD_TOUCHED",payload:{field:s,value:h}});var x=y===void 0?a:y;return x?G(C.values):Promise.resolve()}),it=v.useCallback(function(s,h){s.persist&&s.persist();var y=s.target,x=y.name,E=y.id,A=y.outerHTML,W=h||x||E;de(W,!0)},[de]),Be=J(function(s){if(Nt(s))return function(h){return it(h,s)};it(s)}),yr=v.useCallback(function(s){Z(s)?O({type:"SET_FORMIK_STATE",payload:s}):O({type:"SET_FORMIK_STATE",payload:function(){return s}})},[]),br=v.useCallback(function(s){O({type:"SET_STATUS",payload:s})},[]),xr=v.useCallback(function(s){O({type:"SET_ISSUBMITTING",payload:s})},[]),Mt=J(function(){return O({type:"SUBMIT_ATTEMPT"}),G().then(function(s){var h=s instanceof Error,y=!h&&Object.keys(s).length===0;if(y){var x;try{if(x=lo(),x===void 0)return}catch(E){throw E}return Promise.resolve(x).then(function(E){return R.current&&O({type:"SUBMIT_SUCCESS"}),E}).catch(function(E){if(R.current)throw O({type:"SUBMIT_FAILURE"}),E})}else if(R.current&&(O({type:"SUBMIT_FAILURE"}),h))throw s})}),so=J(function(s){s&&s.preventDefault&&Z(s.preventDefault)&&s.preventDefault(),s&&s.stopPropagation&&Z(s.stopPropagation)&&s.stopPropagation(),Mt().catch(function(h){console.warn("Warning: An unhandled error was caught from submitForm()",h)})}),Sr={resetForm:j,validateForm:G,validateField:w,setErrors:U,setFieldError:N,setFieldTouched:de,setFieldValue:K,setStatus:br,setSubmitting:xr,setTouched:S,setValues:V,setFormikState:yr,submitForm:Mt},lo=J(function(){return _(C.values,Sr)}),co=J(function(s){s&&s.preventDefault&&Z(s.preventDefault)&&s.preventDefault(),s&&s.stopPropagation&&Z(s.stopPropagation)&&s.stopPropagation(),j()}),uo=v.useCallback(function(s){return{value:Y(C.values,s),error:Y(C.errors,s),touched:!!Y(C.touched,s),initialValue:Y(b.current,s),initialTouched:!!Y(k.current,s),initialError:Y(M.current,s)}},[C.errors,C.touched,C.values]),fo=v.useCallback(function(s){return{setValue:function(y,x){return K(s,y,x)},setTouched:function(y,x){return de(s,y,x)},setError:function(y){return N(s,y)}}},[K,de,N]),po=v.useCallback(function(s){var h=At(s),y=h?s.name:s,x=Y(C.values,y),E={name:y,value:x,onChange:fe,onBlur:Be};if(h){var A=s.type,W=s.value,le=s.as,Ft=s.multiple;A==="checkbox"?W===void 0?E.checked=!!x:(E.checked=!!(Array.isArray(x)&&~x.indexOf(W)),E.value=W):A==="radio"?(E.checked=x===W,E.value=W):le==="select"&&Ft&&(E.value=E.value||[],E.multiple=!0)}return E},[Be,fe,C.values]),Rt=v.useMemo(function(){return!xe(b.current,C.values)},[b.current,C.values]),ho=v.useMemo(function(){return typeof l<"u"?Rt?C.errors&&Object.keys(C.errors).length===0:l!==!1&&Z(l)?l(d):l:C.errors&&Object.keys(C.errors).length===0},[l,Rt,C.errors,d]),vo=B({},C,{initialValues:b.current,initialErrors:M.current,initialTouched:k.current,initialStatus:L.current,handleBlur:Be,handleChange:fe,handleReset:co,handleSubmit:so,resetForm:j,setErrors:U,setFormikState:yr,setFieldTouched:de,setFieldValue:K,setFieldError:N,setStatus:br,setSubmitting:xr,setTouched:S,setValues:V,submitForm:Mt,validateForm:G,validateField:w,isValid:ho,dirty:Rt,unregisterField:c,registerField:D,getFieldProps:po,getFieldMeta:uo,getFieldHelpers:fo,validateOnBlur:a,validateOnChange:r,validateOnMount:u});return vo}function kl(e){var t=Dl(e),r=e.component,n=e.children,a=e.render,i=e.innerRef;return v.useImperativeHandle(i,function(){return t}),v.createElement(Fl,{value:t},r?v.createElement(r,t):a?a(t):n?Z(n)?n(t):Ll(n)?null:v.Children.only(n):null)}function Ul(e){var t={};if(e.inner){if(e.inner.length===0)return we(t,e.path,e.message);for(var a=e.inner,r=Array.isArray(a),n=0,a=r?a:a[Symbol.iterator]();;){var i;if(r){if(n>=a.length)break;i=a[n++]}else{if(n=a.next(),n.done)break;i=n.value}var u=i;Y(t,u.path)||(t=we(t,u.path,u.message))}}return t}function Wl(e,t,r,n){r===void 0&&(r=!1);var a=Kt(e);return t[r?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function Kt(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(a){return Array.isArray(a)===!0||Tr(a)?Kt(a):a!==""?a:void 0}):Tr(e[n])?t[n]=Kt(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Bl(e,t,r){var n=e.slice();return t.forEach(function(i,u){if(typeof n[u]>"u"){var l=r.clone!==!1,m=l&&r.isMergeableObject(i);n[u]=m?Bt(Array.isArray(i)?[]:{},i,r):i}else r.isMergeableObject(i)?n[u]=Bt(e[u],i,r):e.indexOf(i)===-1&&n.push(i)}),n}function Hl(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Vl(e,t,r){if(typeof e=="boolean")return!!t;var n=[],a=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),a=i>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,i).concat(n.slice(i+1)):n}var zl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?v.useLayoutEffect:v.useEffect;function J(e){var t=v.useRef(e);return zl(function(){t.current=e}),v.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current.apply(void 0,n)},[])}var ql=v.forwardRef(function(e,t){var r=e.action,n=qn(e,["action"]),a=r??"#",i=Il(),u=i.handleReset,l=i.handleSubmit;return v.createElement("form",B({onSubmit:l,ref:t,onReset:u,action:a},n))});ql.displayName="Form";const Gl=p.p`
	margin-bottom: 14px;
`,Jr=p.h3`
	margin-bottom: 48px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -24px;
		width: 100%;
		height: 1px;
		background-color: rgba(16, 24, 40, 0.1);
	}
`,pe=p.svg`
	width: 32px;
	height: 32px;
	stroke: #101828;
	fill: transparent;
`,ce=p.label`
	display: flex;

	align-items: center;
	flex-direction: column;
	gap: 8px;
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 10px;
	padding: 17px 12px;
	width: 112px;
	height: 95px;
	cursor: pointer;

	&&:hover {
		border: 1px solid #e44848;
	}
	&&:focus {
		border: 1px solid #e44848;
	}

	& span {
		font-weight: 500;
		font-size: 16px;
		line-height: 1.25;
		text-align: center;
	}
`,he=p.input`
	opacity: 0;
	display: none;

	&:checked + ${ce} {
		border-color: ${z.colorRed};
	}
`,Zr=p.div`
	display: flex;
	width: 360px;
	margin-bottom: 32px;
	flex-wrap: wrap;
	gap: 10px;
`;p.input`
	padding-top: 8px;
	padding-bottom: 8px;
`;p.svg`
	width: 40px;
	height: 28px;
	stroke: #101828;
	fill: transparent;
`;p.label`
	padding-top: 9px;
	padding-bottom: 9px;
`;const Kl=p.button`
	border-radius: 200px;
	border: none;
	padding: 16px 40px;

	background: ${z.colorRed};

	font-weight: 500;
	font-size: 16px;
	line-height: 150%;
	letter-spacing: -0.01em;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 64px;
	&&:hover {
		background-color: #d84343;
	}
	&&:focus {
		background-color: #d84343;
	}
`,Yl=p.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 360px;
	margin-top: 8px;
`,Xl=p.div`
	margin-bottom: 32px;
`;p.div`
	border-radius: 10px;
	padding: 18px 285px 18px 18px;
	width: 360px;
	height: 56px;
`;const Jl=p.input`
	border-radius: 10px;
	border: none;
	padding: 18px 218px 18px 18px;
	width: 360px;
	height: 56px;
	background: #f7f7f7;
	padding-left: 44px;
	outline: transparent;

	&&:focus {
		border: 0.5px solid #e44848;
	}
`,Zl=p.svg`
	position: absolute;
	left: 18px;
	top: 50%;
	transform: translateY(-50%);
	width: 18px;
	height: 20px;
	stroke-width: 1.3px;
	fill: transparent;
	stroke: #101828;
`,P="/camper-test/assets/sprite-yC_Scu6s.svg",Sf=()=>{const[e,t]=pn(),r=hn(),n=e.get("page")||1;let a=parseInt(e.get("limit"))||4;const i=Object.fromEntries(e),u=(f,_)=>{const{type:g,checked:d,value:b}=_.target;g==="checkbox"&&d||g==="radio"&&d?e.set(f,b):e.delete(f),t(e)},l=f=>{f.target.value!==""?e.set("location",f.target.value):e.delete("location"),t(e)},m=f=>{f.preventDefault(),r(yo({page:n,limit:a,...i}))};return o.jsxs("form",{onSubmit:m,children:[o.jsxs(Xl,{children:[o.jsx("label",{children:"Location"}),o.jsxs(Yl,{children:[o.jsx(Zl,{children:o.jsx("use",{href:P+"#icon-location"})}),o.jsx(Jl,{type:"text",placeholder:"City",name:"location",onChange:l})]})]}),o.jsx(Gl,{children:"Filters"}),o.jsx(Jr,{children:"Vehicle equipment"}),o.jsxs(Zr,{children:[o.jsx(he,{type:"checkbox",name:"AC",value:1,onChange:f=>u("airConditioner",f),id:"AC"}),o.jsxs(ce,{htmlFor:"AC",children:[o.jsx(pe,{children:o.jsx("use",{href:P+"#icon-ac"})}),o.jsx("span",{children:"AC"})]}),o.jsx(he,{type:"checkbox",name:"transmission",value:"automatic",onChange:f=>u("transmission",f),id:"transmission"}),o.jsxs(ce,{htmlFor:"transmission",children:[o.jsx(pe,{children:o.jsx("use",{href:P+"#icon-automatic"})}),o.jsx("span",{children:"Automatic"})]}),o.jsx(he,{type:"checkbox",name:"kitchen",value:1,onChange:f=>u("kitchen",f),id:"kitchen"}),o.jsxs(ce,{htmlFor:"kitchen",children:[o.jsx(pe,{children:o.jsx("use",{href:P+"#icon-kitchen"})}),o.jsx("span",{children:"Kitchen"})]}),o.jsx(he,{type:"checkbox",name:"TV",value:1,onChange:f=>u("TV",f),id:"TV"}),o.jsxs(ce,{htmlFor:"TV",children:[o.jsx(pe,{children:o.jsx("use",{href:P+"#icon-tv"})}),o.jsx("span",{children:"TV"})]}),o.jsx(he,{type:"checkbox",name:"shower",value:1,onChange:f=>u("shower",f),id:"shower"}),o.jsxs(ce,{htmlFor:"shower",children:[o.jsx(pe,{children:o.jsx("use",{href:P+"#icon-shower"})}),o.jsx("span",{children:"Showers/WC"})]})]}),o.jsx(Jr,{children:"Vehicle type"}),o.jsxs(Zr,{children:[o.jsx(he,{type:"radio",name:"form",value:"panelTruck",onChange:f=>u("form",f),id:"van"}),o.jsxs(ce,{htmlFor:"van",children:[o.jsx(pe,{children:o.jsx("use",{href:P+"#icon-van"})}),o.jsx("span",{children:"Van"})]}),o.jsx(he,{type:"radio",name:"form",value:"fullyIntegrated",onChange:f=>u("form",f),id:"fullyIntegrated"}),o.jsxs(ce,{htmlFor:"fullyIntegrated",style:{position:"relative",justifyContent:"flex-end",padding:"9px"},children:[o.jsx(pe,{style:{position:"absolute",top:"9px"},children:o.jsx("use",{href:P+"#icon-alcove"})}),o.jsx("span",{children:"Fully Integrated"})]}),o.jsx(he,{type:"radio",name:"form",value:"alcove",onChange:f=>u("form",f),id:"alcove"}),o.jsxs(ce,{htmlFor:"alcove",children:[o.jsx(pe,{children:o.jsx("use",{href:P+"#icon-fully-integrated"})}),o.jsx("span",{children:"Alcove"})]})]}),o.jsx(Kl,{children:"Search"})]})},Ql=p.button`
	border-radius: 200px;
	border: none;
	padding: 16px 40px;

	background: ${z.colorRed};
	font-weight: 500;
	font-size: 16px;
	line-height: 150%;
	letter-spacing: -0.01em;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	&&:hover {
		background-color: #d84343;
	}
	&&:focus {
		background-color: #d84343;
	}
`,ec=({id:e,onShowMore:t})=>o.jsx(Ql,{onClick:()=>t(e),children:"Show more"}),tc=p.li`
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 20px;
	padding: 24px;
	width: 888px;
	height: 358px;
	display: flex;
	gap: 24px;
	margin-bottom: 32px;
`,rc=p.div`
	width: 526px;
	height: 310px;
`,nc=p.img`
	border-radius: 10px;
	width: 290px;
	height: 310px;
	object-fit: cover;
`,oc=p.h3`
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`,ac=p.p`
	font-family: var(--font-family);
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
`,ic=p.div`
	display: flex;
	gap: 10px;
	align-items: center;
`,sc=p.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;
`,lc=p.a`
	text-decoration: underline;
`,cc=p.svg`
	height: 16px;
	width: 16px;
`,uc=p.svg`
	width: 16px;
	height: 16px;
	stroke-width: 1.3px;
	fill: transparent;
	stroke: #101828;
`,fc=p.span`
	display: flex;
	align-items: center;
`,dc=p.div`
	height: 24px;
	display: flex;
	gap: 16px;
	margin-bottom: 24px;
`,Qr=p.div`
	display: flex;
	align-items: center;
	gap: 4px;
`,pc=p.p`
	width: 525px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-bottom: 24px;
`,hc=p.ul`
	width: 526px;
	max-height: 96px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	flex-direction: row;
	overflow: hidden;
	margin-bottom: 24px;
`,Re=p.li`
	border-radius: 100px;
	padding: 12px 18px;
	display: flex;
	gap: 8px;
	align-items: center;
	height: 44px;

	background: ${z.colorLightGrey};
`,Fe=p.svg`
	width: 20px;
	height: 20px;
`,vc=p.svg`
	height: 24px;
	width: 24px;
	fill: #e44848;
	stroke: #e44848;
	cursor: pointer;
	&&:hover {
		stroke: #d84343;
	}
`,en=p.button`
	background: none;
	border: none;
`,mc=p.svg`
	height: 24px;
	width: 24px;
	fill: transparent;
	stroke: #101828;
	cursor: pointer;
`,lt="persist:favorites",gc=({id:e})=>{const[t,r]=v.useState(!1);v.useEffect(()=>{const i=JSON.parse(localStorage.getItem(lt));i&&i.includes(e)&&r(!0)},[e]);const n=hn(),a=()=>{r(!t);const i=JSON.parse(localStorage.getItem(lt))??[];if(!t)localStorage.setItem(lt,JSON.stringify([...i,e]));else{const u=i.filter(l=>l!==e);localStorage.setItem(lt,JSON.stringify(u)),n(bo(e))}};return o.jsx(o.Fragment,{children:t?o.jsx(en,{children:o.jsx(vc,{onClick:a,children:o.jsx("use",{href:P+"#icon-heart-null"})})}):o.jsx(en,{children:o.jsx(mc,{onClick:a,children:o.jsx("use",{href:P+"#icon-heart-null"})})})})},yc="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342",bc=({campers:e,handleShowMore:t})=>o.jsx(o.Fragment,{children:e&&e.map(({id:r,adults:n,description:a,gallery:i,location:u,name:l,price:m,rating:f,reviews:_,details:g,engine:d,transmission:b})=>{const{airConditioner:M,kitchen:k,beds:L}=g;return o.jsxs(tc,{children:[o.jsx(nc,{src:i?i[0]:yc}),o.jsxs(rc,{children:[o.jsxs(sc,{children:[o.jsx(oc,{children:l}),o.jsxs(ic,{children:[o.jsxs(ac,{children:["€",m.toFixed(2)]}),o.jsx(gc,{id:r})]})]}),o.jsxs(dc,{children:[o.jsx(Qr,{children:o.jsx(lc,{children:o.jsxs(fc,{children:[o.jsx(cc,{children:o.jsx("use",{href:P+"#icon-star"})}),o.jsxs("p",{children:[f,"(",_.length," Reviews)"]})]})})}),o.jsxs(Qr,{children:[o.jsx(uc,{children:o.jsx("use",{href:P+"#icon-location"})}),o.jsx("p",{children:u})]})]}),o.jsx(pc,{children:a}),o.jsxs(hc,{children:[o.jsxs(Re,{children:[o.jsx(Fe,{children:o.jsx("use",{href:P+"#icon-adults"})}),o.jsxs("span",{children:[n," adults"]})]}),o.jsxs(Re,{children:[o.jsx(Fe,{children:o.jsx("use",{href:P+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),o.jsx("span",{children:b})]}),o.jsxs(Re,{children:[o.jsx(Fe,{children:o.jsx("use",{href:P+"#icon-petrol"})}),o.jsx("span",{children:d})]}),k>=1&&o.jsxs(Re,{children:[o.jsx(Fe,{children:o.jsx("use",{href:P+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),o.jsx("span",{children:"Kitchen"})]}),o.jsxs(Re,{children:[o.jsx(Fe,{children:o.jsx("use",{href:P+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),o.jsxs("span",{children:[L," beds"]})]}),M>=1&&o.jsxs(Re,{children:[o.jsx(Fe,{children:o.jsx("use",{href:P+"#icon-ac"})}),o.jsx("span",{children:"AC"})]})]}),o.jsx(ec,{onShowMore:t,id:r})]})]},r)})}),xc=p.button`
	border: 1px solid rgba(71, 84, 103, 0.2);
	border-radius: 200px;
	padding: 16px 32px;
	height: 56px;
	background-color: white;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		border: 1px solid #ffc531;
	}
	&:focus {
		border: 1px solid #ffc531;
	}
`,Sc=p.div`
	margin-top: 24px;
	margin-bottom: 24px;

	display: flex;
	align-items: center;
	justify-content: center;
`,jc=({addCampers:e})=>o.jsx(Sc,{children:o.jsx(xc,{onClick:e,children:"Load more"})});var Yt={exports:{}},Ee={},Kn={exports:{}},wc="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Tc=wc,_c=Tc;function Yn(){}function Xn(){}Xn.resetWarningCache=Yn;var Ec=function(){function e(n,a,i,u,l,m){if(m!==_c){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xn,resetWarningCache:Yn};return r.PropTypes=r,r};Kn.exports=Ec();var Jn=Kn.exports,Xt={exports:{}},re={},Jt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=_;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var r="none",n="contents",a=/input|select|textarea|button|object|iframe/;function i(g,d){return d.getPropertyValue("overflow")!=="visible"||g.scrollWidth<=0&&g.scrollHeight<=0}function u(g){var d=g.offsetWidth<=0&&g.offsetHeight<=0;if(d&&!g.innerHTML)return!0;try{var b=window.getComputedStyle(g),M=b.getPropertyValue("display");return d?M!==n&&i(g,b):M===r}catch{return console.warn("Failed to inspect element style"),!1}}function l(g){for(var d=g,b=g.getRootNode&&g.getRootNode();d&&d!==document.body;){if(b&&d===b&&(d=b.host.parentNode),u(d))return!1;d=d.parentNode}return!0}function m(g,d){var b=g.nodeName.toLowerCase(),M=a.test(b)&&!g.disabled||b==="a"&&g.href||d;return M&&l(g)}function f(g){var d=g.getAttribute("tabindex");d===null&&(d=void 0);var b=isNaN(d);return(b||d>=0)&&m(g,!b)}function _(g){var d=[].slice.call(g.querySelectorAll("*"),0).reduce(function(b,M){return b.concat(M.shadowRoot?_(M.shadowRoot):[M])},[]);return d.filter(f)}e.exports=t.default})(Jt,Jt.exports);var Zn=Jt.exports;Object.defineProperty(re,"__esModule",{value:!0});re.resetState=$c;re.log=Mc;re.handleBlur=Xe;re.handleFocus=Je;re.markForFocusLater=Rc;re.returnFocus=Fc;re.popWithoutFocus=Ic;re.setupScopedFocus=Pc;re.teardownScopedFocus=Lc;var Oc=Zn,Cc=Ac(Oc);function Ac(e){return e&&e.__esModule?e:{default:e}}var Ne=[],Pe=null,Zt=!1;function $c(){Ne=[]}function Mc(){}function Xe(){Zt=!0}function Je(){if(Zt){if(Zt=!1,!Pe)return;setTimeout(function(){if(!Pe.contains(document.activeElement)){var e=(0,Cc.default)(Pe)[0]||Pe;e.focus()}},0)}}function Rc(){Ne.push(document.activeElement)}function Fc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Ne.length!==0&&(t=Ne.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Ic(){Ne.length>0&&Ne.pop()}function Pc(e){Pe=e,window.addEventListener?(window.addEventListener("blur",Xe,!1),document.addEventListener("focus",Je,!0)):(window.attachEvent("onBlur",Xe),document.attachEvent("onFocus",Je))}function Lc(){Pe=null,window.addEventListener?(window.removeEventListener("blur",Xe),document.removeEventListener("focus",Je)):(window.detachEvent("onBlur",Xe),document.detachEvent("onFocus",Je))}var Qt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=Zn,n=a(r);function a(l){return l&&l.__esModule?l:{default:l}}function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return l.activeElement.shadowRoot?i(l.activeElement.shadowRoot):l.activeElement}function u(l,m){var f=(0,n.default)(l);if(!f.length){m.preventDefault();return}var _=void 0,g=m.shiftKey,d=f[0],b=f[f.length-1],M=i();if(l===M){if(!g)return;_=b}if(b===M&&!g&&(_=d),d===M&&g&&(_=b),_){m.preventDefault(),_.focus();return}var k=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=k!=null&&k[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var R=f.indexOf(M);if(R>-1&&(R+=g?-1:1),_=f[R],typeof _>"u"){m.preventDefault(),_=g?b:d,_.focus();return}m.preventDefault(),_.focus()}}e.exports=t.default})(Qt,Qt.exports);var Nc=Qt.exports,ne={},Dc=function(){},kc=Dc,te={},Qn={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=r:window.ExecutionEnvironment=r})()})(Qn);var Uc=Qn.exports;Object.defineProperty(te,"__esModule",{value:!0});te.canUseDOM=te.SafeNodeList=te.SafeHTMLCollection=void 0;var Wc=Uc,Bc=Hc(Wc);function Hc(e){return e&&e.__esModule?e:{default:e}}var $t=Bc.default,Vc=$t.canUseDOM?window.HTMLElement:{};te.SafeHTMLCollection=$t.canUseDOM?window.HTMLCollection:{};te.SafeNodeList=$t.canUseDOM?window.NodeList:{};te.canUseDOM=$t.canUseDOM;te.default=Vc;Object.defineProperty(ne,"__esModule",{value:!0});ne.resetState=Yc;ne.log=Xc;ne.assertNodeList=eo;ne.setElement=Jc;ne.validateElement=mr;ne.hide=Zc;ne.show=Qc;ne.documentNotReadyOrSSRTesting=eu;var zc=kc,qc=Kc(zc),Gc=te;function Kc(e){return e&&e.__esModule?e:{default:e}}var Q=null;function Yc(){Q&&(Q.removeAttribute?Q.removeAttribute("aria-hidden"):Q.length!=null?Q.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(Q).forEach(function(e){return e.removeAttribute("aria-hidden")})),Q=null}function Xc(){}function eo(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Jc(e){var t=e;if(typeof t=="string"&&Gc.canUseDOM){var r=document.querySelectorAll(t);eo(r,t),t=r}return Q=t||Q,Q}function mr(e){var t=e||Q;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,qc.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Zc(e){var t=!0,r=!1,n=void 0;try{for(var a=mr(e)[Symbol.iterator](),i;!(t=(i=a.next()).done);t=!0){var u=i.value;u.setAttribute("aria-hidden","true")}}catch(l){r=!0,n=l}finally{try{!t&&a.return&&a.return()}finally{if(r)throw n}}}function Qc(e){var t=!0,r=!1,n=void 0;try{for(var a=mr(e)[Symbol.iterator](),i;!(t=(i=a.next()).done);t=!0){var u=i.value;u.removeAttribute("aria-hidden")}}catch(l){r=!0,n=l}finally{try{!t&&a.return&&a.return()}finally{if(r)throw n}}}function eu(){Q=null}var ke={};Object.defineProperty(ke,"__esModule",{value:!0});ke.resetState=tu;ke.log=ru;var ze={},qe={};function tn(e,t){e.classList.remove(t)}function tu(){var e=document.getElementsByTagName("html")[0];for(var t in ze)tn(e,ze[t]);var r=document.body;for(var n in qe)tn(r,qe[n]);ze={},qe={}}function ru(){}var nu=function(t,r){return t[r]||(t[r]=0),t[r]+=1,r},ou=function(t,r){return t[r]&&(t[r]-=1),r},au=function(t,r,n){n.forEach(function(a){nu(r,a),t.add(a)})},iu=function(t,r,n){n.forEach(function(a){ou(r,a),r[a]===0&&t.remove(a)})};ke.add=function(t,r){return au(t.classList,t.nodeName.toLowerCase()=="html"?ze:qe,r.split(" "))};ke.remove=function(t,r){return iu(t.classList,t.nodeName.toLowerCase()=="html"?ze:qe,r.split(" "))};var Ue={};Object.defineProperty(Ue,"__esModule",{value:!0});Ue.log=lu;Ue.resetState=cu;function su(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var to=function e(){var t=this;su(this,e),this.register=function(r){t.openInstances.indexOf(r)===-1&&(t.openInstances.push(r),t.emit("register"))},this.deregister=function(r){var n=t.openInstances.indexOf(r);n!==-1&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(r){t.subscribers.push(r)},this.emit=function(r){t.subscribers.forEach(function(n){return n(r,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},dt=new to;function lu(){console.log("portalOpenInstances ----------"),console.log(dt.openInstances.length),dt.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function cu(){dt=new to}Ue.default=dt;var gr={};Object.defineProperty(gr,"__esModule",{value:!0});gr.resetState=pu;gr.log=hu;var uu=Ue,fu=du(uu);function du(e){return e&&e.__esModule?e:{default:e}}var q=void 0,ee=void 0,Te=[];function pu(){for(var e=[q,ee],t=0;t<e.length;t++){var r=e[t];r&&r.parentNode&&r.parentNode.removeChild(r)}q=ee=null,Te=[]}function hu(){console.log("bodyTrap ----------"),console.log(Te.length);for(var e=[q,ee],t=0;t<e.length;t++){var r=e[t],n=r||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")}function rn(){Te.length!==0&&Te[Te.length-1].focusContent()}function vu(e,t){!q&&!ee&&(q=document.createElement("div"),q.setAttribute("data-react-modal-body-trap",""),q.style.position="absolute",q.style.opacity="0",q.setAttribute("tabindex","0"),q.addEventListener("focus",rn),ee=q.cloneNode(),ee.addEventListener("focus",rn)),Te=t,Te.length>0?(document.body.firstChild!==q&&document.body.insertBefore(q,document.body.firstChild),document.body.lastChild!==ee&&document.body.appendChild(ee)):(q.parentElement&&q.parentElement.removeChild(q),ee.parentElement&&ee.parentElement.removeChild(ee))}fu.default.subscribe(vu);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(j){for(var w=1;w<arguments.length;w++){var D=arguments[w];for(var c in D)Object.prototype.hasOwnProperty.call(D,c)&&(j[c]=D[c])}return j},n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},a=function(){function j(w,D){for(var c=0;c<D.length;c++){var S=D[c];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(w,S.key,S)}}return function(w,D,c){return D&&j(w.prototype,D),c&&j(w,c),w}}(),i=v,u=Jn,l=se(u),m=re,f=We(m),_=Nc,g=se(_),d=ne,b=We(d),M=ke,k=We(M),L=te,R=se(L),oe=Ue,rt=se(oe);function We(j){if(j&&j.__esModule)return j;var w={};if(j!=null)for(var D in j)Object.prototype.hasOwnProperty.call(j,D)&&(w[D]=j[D]);return w.default=j,w}function se(j){return j&&j.__esModule?j:{default:j}}function C(j,w){if(!(j instanceof w))throw new TypeError("Cannot call a class as a function")}function O(j,w){if(!j)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:j}function nt(j,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);j.prototype=Object.create(w&&w.prototype,{constructor:{value:j,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(j,w):j.__proto__=w)}var ye={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ot=function(w){return w.code==="Tab"||w.keyCode===9},at=function(w){return w.code==="Escape"||w.keyCode===27},Me=0,G=function(j){nt(w,j);function w(D){C(this,w);var c=O(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,D));return c.setOverlayRef=function(S){c.overlay=S,c.props.overlayRef&&c.props.overlayRef(S)},c.setContentRef=function(S){c.content=S,c.props.contentRef&&c.props.contentRef(S)},c.afterClose=function(){var S=c.props,U=S.appElement,V=S.ariaHideApp,N=S.htmlOpenClassName,K=S.bodyOpenClassName,ae=S.parentSelector,fe=ae&&ae().ownerDocument||document;K&&k.remove(fe.body,K),N&&k.remove(fe.getElementsByTagName("html")[0],N),V&&Me>0&&(Me-=1,Me===0&&b.show(U)),c.props.shouldFocusAfterRender&&(c.props.shouldReturnFocusAfterClose?(f.returnFocus(c.props.preventScroll),f.teardownScopedFocus()):f.popWithoutFocus()),c.props.onAfterClose&&c.props.onAfterClose(),rt.default.deregister(c)},c.open=function(){c.beforeOpen(),c.state.afterOpen&&c.state.beforeClose?(clearTimeout(c.closeTimer),c.setState({beforeClose:!1})):(c.props.shouldFocusAfterRender&&(f.setupScopedFocus(c.node),f.markForFocusLater()),c.setState({isOpen:!0},function(){c.openAnimationFrame=requestAnimationFrame(function(){c.setState({afterOpen:!0}),c.props.isOpen&&c.props.onAfterOpen&&c.props.onAfterOpen({overlayEl:c.overlay,contentEl:c.content})})}))},c.close=function(){c.props.closeTimeoutMS>0?c.closeWithTimeout():c.closeWithoutTimeout()},c.focusContent=function(){return c.content&&!c.contentHasFocus()&&c.content.focus({preventScroll:!0})},c.closeWithTimeout=function(){var S=Date.now()+c.props.closeTimeoutMS;c.setState({beforeClose:!0,closesAt:S},function(){c.closeTimer=setTimeout(c.closeWithoutTimeout,c.state.closesAt-Date.now())})},c.closeWithoutTimeout=function(){c.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},c.afterClose)},c.handleKeyDown=function(S){ot(S)&&(0,g.default)(c.content,S),c.props.shouldCloseOnEsc&&at(S)&&(S.stopPropagation(),c.requestClose(S))},c.handleOverlayOnClick=function(S){c.shouldClose===null&&(c.shouldClose=!0),c.shouldClose&&c.props.shouldCloseOnOverlayClick&&(c.ownerHandlesClose()?c.requestClose(S):c.focusContent()),c.shouldClose=null},c.handleContentOnMouseUp=function(){c.shouldClose=!1},c.handleOverlayOnMouseDown=function(S){!c.props.shouldCloseOnOverlayClick&&S.target==c.overlay&&S.preventDefault()},c.handleContentOnClick=function(){c.shouldClose=!1},c.handleContentOnMouseDown=function(){c.shouldClose=!1},c.requestClose=function(S){return c.ownerHandlesClose()&&c.props.onRequestClose(S)},c.ownerHandlesClose=function(){return c.props.onRequestClose},c.shouldBeClosed=function(){return!c.state.isOpen&&!c.state.beforeClose},c.contentHasFocus=function(){return document.activeElement===c.content||c.content.contains(document.activeElement)},c.buildClassName=function(S,U){var V=(typeof U>"u"?"undefined":n(U))==="object"?U:{base:ye[S],afterOpen:ye[S]+"--after-open",beforeClose:ye[S]+"--before-close"},N=V.base;return c.state.afterOpen&&(N=N+" "+V.afterOpen),c.state.beforeClose&&(N=N+" "+V.beforeClose),typeof U=="string"&&U?N+" "+U:N},c.attributesFromObject=function(S,U){return Object.keys(U).reduce(function(V,N){return V[S+"-"+N]=U[N],V},{})},c.state={afterOpen:!1,beforeClose:!1},c.shouldClose=null,c.moveFromContentToOverlay=null,c}return a(w,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(c,S){this.props.isOpen&&!c.isOpen?this.open():!this.props.isOpen&&c.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!S.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var c=this.props,S=c.appElement,U=c.ariaHideApp,V=c.htmlOpenClassName,N=c.bodyOpenClassName,K=c.parentSelector,ae=K&&K().ownerDocument||document;N&&k.add(ae.body,N),V&&k.add(ae.getElementsByTagName("html")[0],V),U&&(Me+=1,b.hide(S)),rt.default.register(this)}},{key:"render",value:function(){var c=this.props,S=c.id,U=c.className,V=c.overlayClassName,N=c.defaultStyles,K=c.children,ae=U?{}:N.content,fe=V?{}:N.overlay;if(this.shouldBeClosed())return null;var de={ref:this.setOverlayRef,className:this.buildClassName("overlay",V),style:r({},fe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},it=r({id:S,ref:this.setContentRef,style:r({},ae,this.props.style.content),className:this.buildClassName("content",U),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Be=this.props.contentElement(it,K);return this.props.overlayElement(de,Be)}}]),w}(i.Component);G.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},G.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),parentSelector:l.default.func,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(R.default),l.default.instanceOf(L.SafeHTMLCollection),l.default.instanceOf(L.SafeNodeList),l.default.arrayOf(l.default.instanceOf(R.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=G,e.exports=t.default})(Xt,Xt.exports);var mu=Xt.exports;function ro(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function no(e){function t(r){var n=this.constructor.getDerivedStateFromProps(e,r);return n??null}this.setState(t.bind(this))}function oo(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}ro.__suppressDeprecationWarning=!0;no.__suppressDeprecationWarning=!0;oo.__suppressDeprecationWarning=!0;function gu(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var r=null,n=null,a=null;if(typeof t.componentWillMount=="function"?r="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?n="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(n="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),r!==null||n!==null||a!==null){var i=e.displayName||e.name,u=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+u+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=ro,t.componentWillReceiveProps=no),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=oo;var l=t.componentDidUpdate;t.componentDidUpdate=function(f,_,g){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:g;l.call(this,f,_,d)}}return e}const yu=Object.freeze(Object.defineProperty({__proto__:null,polyfill:gu},Symbol.toStringTag,{value:"Module"})),bu=xo(yu);Object.defineProperty(Ee,"__esModule",{value:!0});Ee.bodyOpenClassName=Ee.portalClassName=void 0;var nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xu=function(){function e(t,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ao=v,pt=et(ao),Su=So,ht=et(Su),ju=Jn,T=et(ju),wu=mu,on=et(wu),Tu=ne,_u=Ou(Tu),ve=te,an=et(ve),Eu=bu;function Ou(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function et(e){return e&&e.__esModule?e:{default:e}}function Cu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Au(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $u=Ee.portalClassName="ReactModalPortal",Mu=Ee.bodyOpenClassName="ReactModal__Body--open",je=ve.canUseDOM&&ht.default.createPortal!==void 0,ln=function(t){return document.createElement(t)},cn=function(){return je?ht.default.createPortal:ht.default.unstable_renderSubtreeIntoContainer};function ct(e){return e()}var tt=function(e){Au(t,e);function t(){var r,n,a,i;Cu(this,t);for(var u=arguments.length,l=Array(u),m=0;m<u;m++)l[m]=arguments[m];return i=(n=(a=sn(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this].concat(l))),a),a.removePortal=function(){!je&&ht.default.unmountComponentAtNode(a.node);var f=ct(a.props.parentSelector);f&&f.contains(a.node)?f.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(f){a.portal=f},a.renderPortal=function(f){var _=cn(),g=_(a,pt.default.createElement(on.default,nn({defaultStyles:t.defaultStyles},f)),a.node);a.portalRef(g)},n),sn(a,i)}return xu(t,[{key:"componentDidMount",value:function(){if(ve.canUseDOM){je||(this.node=ln("div")),this.node.className=this.props.portalClassName;var n=ct(this.props.parentSelector);n.appendChild(this.node),!je&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(n){var a=ct(n.parentSelector),i=ct(this.props.parentSelector);return{prevParent:a,nextParent:i}}},{key:"componentDidUpdate",value:function(n,a,i){if(ve.canUseDOM){var u=this.props,l=u.isOpen,m=u.portalClassName;n.portalClassName!==m&&(this.node.className=m);var f=i.prevParent,_=i.nextParent;_!==f&&(f.removeChild(this.node),_.appendChild(this.node)),!(!n.isOpen&&!l)&&!je&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ve.canUseDOM||!this.node||!this.portal)){var n=this.portal.state,a=Date.now(),i=n.isOpen&&this.props.closeTimeoutMS&&(n.closesAt||a+this.props.closeTimeoutMS);i?(n.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,i-a)):this.removePortal()}}},{key:"render",value:function(){if(!ve.canUseDOM||!je)return null;!this.node&&je&&(this.node=ln("div"));var n=cn();return n(pt.default.createElement(on.default,nn({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(n){_u.setElement(n)}}]),t}(ao.Component);tt.propTypes={isOpen:T.default.bool.isRequired,style:T.default.shape({content:T.default.object,overlay:T.default.object}),portalClassName:T.default.string,bodyOpenClassName:T.default.string,htmlOpenClassName:T.default.string,className:T.default.oneOfType([T.default.string,T.default.shape({base:T.default.string.isRequired,afterOpen:T.default.string.isRequired,beforeClose:T.default.string.isRequired})]),overlayClassName:T.default.oneOfType([T.default.string,T.default.shape({base:T.default.string.isRequired,afterOpen:T.default.string.isRequired,beforeClose:T.default.string.isRequired})]),appElement:T.default.oneOfType([T.default.instanceOf(an.default),T.default.instanceOf(ve.SafeHTMLCollection),T.default.instanceOf(ve.SafeNodeList),T.default.arrayOf(T.default.instanceOf(an.default))]),onAfterOpen:T.default.func,onRequestClose:T.default.func,closeTimeoutMS:T.default.number,ariaHideApp:T.default.bool,shouldFocusAfterRender:T.default.bool,shouldCloseOnOverlayClick:T.default.bool,shouldReturnFocusAfterClose:T.default.bool,preventScroll:T.default.bool,parentSelector:T.default.func,aria:T.default.object,data:T.default.object,role:T.default.string,contentLabel:T.default.string,shouldCloseOnEsc:T.default.bool,overlayRef:T.default.func,contentRef:T.default.func,id:T.default.string,overlayElement:T.default.func,contentElement:T.default.func};tt.defaultProps={isOpen:!1,portalClassName:$u,bodyOpenClassName:Mu,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,r){return pt.default.createElement("div",t,r)},contentElement:function(t,r){return pt.default.createElement("div",t,r)}};tt.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Eu.polyfill)(tt);Ee.default=tt;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Ee,n=a(r);function a(i){return i&&i.__esModule?i:{default:i}}t.default=n.default,e.exports=t.default})(Yt,Yt.exports);var Ru=Yt.exports;const io=dn(Ru),Fu=p.a`
	text-decoration: underline;
`,Iu=p.div`
	position: relative;
`,Pu=p.button`
	width: 32px;
	position: absolute;
	top: 0px;
	right: 0px;
	background: transparent;
	border: none;
`,Lu=p.svg`
	height: 32px;
	width: 32px;
	fill: transparent;
	stroke: #101828;
`,Nu=p.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	margin-bottom: 24px;
`,Du=p.h3`
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-bottom: 8px;
`,ku=p.p`
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
	margin-bottom: 24px;
`,kt=p.img`
	border-radius: 10px;
	width: 290px;
	height: 310px;
	object-fit: cover;
`,Uu=p.svg`
	height: 16px;
	width: 16px;
`,Wu=p.svg`
	width: 16px;
	height: 16px;
	stroke-width: 1.3px;
	fill: transparent;
	stroke: #101828;
`,Bu=p.span`
	display: flex;
	align-items: center;
`,Hu=p.div`
	height: 24px;
	display: flex;
	gap: 16px;
	margin-bottom: 16px;
`,un=p.div`
	display: flex;
	align-items: center;
	gap: 4px;
`,Vu=p.p`
	font-size: 16px;
	line-height: 1.5;
	width: 902px;
	margin-bottom: 44px;
`,Ut="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFjq4Ist4_3GEX01sQ9Kg7Ucxkmg8FbMP7w&usqp=CAU",zu=({id:e,onClose:t})=>{const[r,n]=v.useState({}),a=tr(rr);v.useEffect(()=>{const d=a.find(b=>b.id===e);n(d)},[a,e]);const{name:i,gallery:u,price:l,rating:m,reviews:f,location:_,description:g}=r;return o.jsx(o.Fragment,{children:r&&o.jsxs(Iu,{children:[o.jsx(Du,{children:i}),o.jsxs(Hu,{children:[o.jsx(un,{children:o.jsx(Fu,{children:o.jsxs(Bu,{children:[o.jsx(Uu,{children:o.jsx("use",{href:P+"#icon-star"})}),o.jsxs("p",{children:[m,"(",f==null?void 0:f.length," Reviews)"]})]})})}),o.jsxs(un,{children:[o.jsx(Wu,{children:o.jsx("use",{href:P+"#icon-location"})}),o.jsx("p",{children:_})]})]}),o.jsxs(ku,{children:["€",l]}),o.jsx(Pu,{onClick:t,children:o.jsx(Lu,{children:o.jsx("use",{href:P+"#icon-close"})})}),u&&u.length>0&&o.jsxs(Nu,{children:[o.jsx(kt,{src:u[0]||Ut}),o.jsx(kt,{src:u[1]||Ut}),o.jsx(kt,{src:u[2]||Ut})]}),o.jsx(Vu,{children:g})]})})},qu=p.ul`
	width: 430px;

	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	flex-direction: row;
	margin-bottom: 44px;
`,Gu=p.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2%;

	margin-bottom: 48px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -24px;
		width: 100%;
		height: 1px;
		background-color: rgba(16, 24, 40, 0.1);
	}
`,Ku=p.li`
	border-radius: 100px;
	padding: 12px 18px;
	display: flex;
	gap: 8px;
	align-items: center;
	height: 44px;
	background: ${z.colorLightGrey};

	& span {
		font-weight: 500;
		font-size: 16px;
		line-height: 1.25;
		text-align: center;
	}
`,Yu=p.svg`
	width: 20px;
	height: 20px;
`,Xu=p.ul`
	width: 430px;
`,Ie=p.li`
	display: flex;
	justify-content: space-between;
	margin-bottom: 14px;

	& span {
		font-weight: 500;
		font-size: 18px;
		line-height: 1.33;
		text-align: center;
	}
`,Ju="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let er=(e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=Ju[r[e]&63];return t};const Zu=({id:e})=>{const[t,r]=v.useState({}),n=tr(rr);v.useEffect(()=>{const d=n.find(b=>b.id===e);r(d)},[n,e]);const{details:a,form:i,length:u,width:l,height:m,tank:f,consumption:_}=t,g={kitchen:"icon-kitchen",bathroom:"icon-toilet",microwave:"icon-microwave",water:"icon-water",gas:"icon-gas",freezer:"icon-freezer",toilet:"icon-toilet",hob:"icon-hob",CD:"icon-cd",airConditioner:"icon-air-conditioner",shower:"icon-shower",TV:"icon-tv",beds:"icon-beds",automatic:"icon-automatic",AC:"icon-ac",alcove:"icon-alcove",radio:"icon-radio"};return o.jsxs("div",{children:[o.jsx(qu,{children:a&&Object.entries(a).map(([d,b])=>o.jsxs(Ku,{children:[o.jsx(Yu,{children:o.jsx("use",{href:`${P}#${g[d]}`,style:{stroke:"#101828",fill:"transparent"}})}),o.jsxs("span",{children:[d,": ",b]})]},er()))}),o.jsxs(Xu,{children:[o.jsx("li",{children:o.jsx(Gu,{children:"Vehicle details"})}),o.jsxs(Ie,{children:[o.jsx("span",{children:"Form"}),o.jsx("span",{children:i})]}),o.jsxs(Ie,{children:[o.jsx("span",{children:"Length"}),o.jsx("span",{children:u})]}),o.jsxs(Ie,{children:[o.jsx("span",{children:" Width"}),o.jsx("span",{children:l})]}),o.jsxs(Ie,{children:[o.jsx("span",{children:"Height"}),o.jsxs("span",{children:[" ",m]})]}),o.jsxs(Ie,{children:[o.jsx("span",{children:"Tank"}),o.jsx("span",{children:f})]}),o.jsxs(Ie,{children:[o.jsx("span",{children:" Consumption"}),o.jsxs("span",{children:[" ",_]})]})]})]})},Qu=p.div`
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 10px;
	padding: 24px;
	width: 448px;
`,ef=p.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	margin-bottom: 8px;
`,tf=p.p`
	font-size: 16px;
	line-height: 1.5;
	color: ${z.colorGrey};
	margin-bottom: 24px;
`,rf=p.form`
	display: flex;
	flex-direction: column;
	gap: 14px;
`,Wt=p.input`
	width: 100%;
	background: ${z.colorWhite};
	border: none;
	border-radius: 10px;
	padding: 18px;

	height: 56px;
	background: ${z.colorWhite};

	&:focus::placeholder {
		color: ${z.colorBlack};
		border-color: red;
		border: none;
	}
`,nf=p.textarea`
	width: 100%;
	height: 114px;
	background: ${z.colorWhite};
	border: none;
	border-radius: 10px;
	padding: 18px;

	background: ${z.colorWhite};
	resize: none;
	&:focus::placeholder {
		color: ${z.colorBlack};
	}
`,of=p.button`
	border-radius: 200px;
	border: none;
	padding: 16px 60px;

	margin-top: 10px;

	width: 160px;
	height: 56px;

	background: ${z.colorRed};
	font-weight: 500;
	font-size: 16px;
	line-height: 1.5;
	letter-spacing: -0.01em;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	&&:hover {
		background-color: #d84343;
	}
	&&:focus {
		background-color: #d84343;
	}
`,af=()=>o.jsxs(Qu,{children:[o.jsx(ef,{children:"Book your campervan now"}),o.jsx(tf,{children:"Stay connected! We are always ready to help you."}),o.jsx(kl,{initialValues:{firstName:"",email:"",BookingDate:"",Comments:""},onSubmit:async e=>{console.log(e)},children:o.jsxs(rf,{children:[o.jsx("label",{children:o.jsx(Wt,{name:"firstName",placeholder:"Name",type:"text"})}),o.jsx("label",{children:o.jsx(Wt,{name:"email",placeholder:"Email",type:"email"})}),o.jsx("label",{children:o.jsx(Wt,{name:"BookingDate",placeholder:"Booking date",type:"date"})}),o.jsx("label",{children:o.jsx(nf,{name:"Comments",placeholder:"Comments",type:"text"})}),o.jsx(of,{type:"submit",children:"Send"})]})})]});p.ul`
	width: 430px;

	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	flex-direction: row;
	margin-bottom: 44px;
`;const sf=p.h3`
	font-weight: 600;
	font-size: 18px;
	line-height: 1.33;
	margin-bottom: 4px;
`,lf=p.span`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;

	height: 60px;
	width: 60px;
	background: ${z.colorLightGrey};

	color: ${z.colorRed};

	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
`,cf=p.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 16px;
`,uf=p.svg`
	height: 16px;
	width: 16px;
	display: inline-block;
`;p.li`
	border-radius: 100px;
	padding: 12px 18px;
	display: flex;
	gap: 8px;
	align-items: center;
	height: 44px;
	background: ${z.colorLightGrey};
`;p.svg`
	width: 20px;
	height: 20px;
`;const ff=p.ul`
	width: 430px;
	height: 286px;
`,df=p.li`
	width: 430px;
	font-size: 16px;
	line-height: 1.5;

	margin-bottom: 24px;
`,pf=({id:e})=>{const[t,r]=v.useState({}),n=tr(rr);v.useEffect(()=>{const i=n.find(u=>u.id===e);r(i)},[n,e]);const{reviews:a}=t;return o.jsx(ff,{children:a&&a.map(({reviewer_name:i,comment:u})=>{const[l]=i;return o.jsxs(df,{children:[o.jsxs(cf,{children:[o.jsx(lf,{children:l}),o.jsxs("div",{children:[o.jsx(sf,{children:i}),Array.from({length:5},(m,f)=>o.jsx(uf,{children:o.jsx("use",{href:P+"#icon-star",style:{fill:"red"}})},er()))]})]}),o.jsx("p",{children:u})]},er())})})},hf=p.div`
	width: 926px;
	overflow-y: auto;
	height: 100%;
	padding-right: 16px;
	position: relative;
	overflow-x: hidden;

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: #d9d9d9;
		border-radius: 7px;
	}

	&::-webkit-scrollbar {
		width: 8px;
		height: 264px;
		background: transparent;
	}
`,vf=p.div`
	display: flex;
	gap: 40px;
	margin-bottom: 68px;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;

	position: relative;

	&::after {
		position: absolute;
		content: '';
		background-color: rgba(16, 24, 40, 0.2);
		height: 1px;
		width: 100%;
		bottom: -24px;
	}
`,fn=p(jo)`
	display: flex;
	gap: 40px;

	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;

	&.active {
		&::after {
			position: absolute;
			content: '';
			background-color: ${z.colorRed};
			height: 4px;
			width: 85px;
			bottom: -25px;
		}
	}
`,mf=p.div`
	display: flex;
	gap: 24px;
`;io.setAppElement("#root");const gf={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",height:"720px",position:"relative",borderRadius:"20px",overflow:"hidden",overflowX:"hidden",padding:"40px",width:"982px",transform:"translate(-50%, -50%)"}},yf=({isOpen:e,isClose:t,id:r})=>{const[n,a]=v.useState("features"),i=m=>{a(m)},u=()=>{document.body.classList.add("modal-open")},l=()=>{document.body.classList.remove("modal-open"),t()};return o.jsx(io,{isOpen:e,onRequestClose:l,onAfterOpen:u,style:gf,children:o.jsxs(hf,{children:[o.jsx(zu,{id:r,onClose:l}),o.jsxs("div",{children:[o.jsxs(vf,{children:[o.jsx("li",{children:o.jsx(fn,{to:"#",onClick:()=>i("features"),className:n==="features"?"active":"",children:"Features"})}),o.jsx("li",{children:o.jsx(fn,{to:"#",onClick:()=>i("reviews"),className:n==="reviews"?"active":"",children:"Reviews"})})]}),o.jsxs(mf,{children:[n==="features"&&o.jsx(Zu,{id:r}),n==="reviews"&&o.jsx(pf,{id:r}),o.jsx(af,{})]})]})]})})},jf=({campers:e})=>{const[t,r]=v.useState(null),[n,a]=v.useState(!1),[i,u]=pn(),l=i.get("page")||1;let m=parseInt(i.get("limit"))||4;const f=Object.fromEntries(i),_=()=>{m+=4,u({...f,page:l,limit:m})},g=()=>{a(b=>!b)},d=b=>{r(b),g()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("ul",{children:o.jsx(bc,{handleShowMore:d,campers:e})}),m===e.length&&o.jsx(jc,{addCampers:_})]}),o.jsx(yf,{isOpen:n,isClose:g,id:t})]})};export{Sf as C,jf as a};

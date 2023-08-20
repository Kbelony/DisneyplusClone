function Fy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hf={exports:{}},Uo={},Wf={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),By=Symbol.for("react.portal"),Vy=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Wy=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),Gy=Symbol.for("react.forward_ref"),qy=Symbol.for("react.suspense"),Xy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Sd=Symbol.iterator;function Qy(e){return e===null||typeof e!="object"?null:(e=Sd&&e[Sd]||e["@@iterator"],typeof e=="function"?e:null)}var bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kf=Object.assign,Gf={};function Rr(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||bf}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qf(){}qf.prototype=Rr.prototype;function Mu(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||bf}var $u=Mu.prototype=new qf;$u.constructor=Mu;Kf($u,Rr.prototype);$u.isPureReactComponent=!0;var Td=Array.isArray,Xf=Object.prototype.hasOwnProperty,Uu={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Xf.call(t,r)&&!Yf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Vi,type:e,key:s,ref:o,props:i,_owner:Uu.current}}function Jy(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function Zy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zy(""+e.key):t.toString(36)}function Ds(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Vi:case By:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Al(o,0):r,Td(i)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),Ds(i,t,n,"",function(u){return u})):i!=null&&(ju(i)&&(i=Jy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Td(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Al(s,l);o+=Ds(s,t,n,a,i)}else if(a=Qy(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Al(s,l++),o+=Ds(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return Ds(e,r,"","",function(s){return t.call(n,s,i++)}),r}function e0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},xs={transition:null},t0={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:xs,ReactCurrentOwner:Uu};$.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Rr;$.Fragment=Vy;$.Profiler=Wy;$.PureComponent=Mu;$.StrictMode=Hy;$.Suspense=qy;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Uu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Xf.call(t,a)&&!Yf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Vi,type:e.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:Ky,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:by,_context:e},e.Consumer=e};$.createElement=Qf;$.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Gy,render:e}};$.isValidElement=ju;$.lazy=function(e){return{$$typeof:Yy,_payload:{_status:-1,_result:e},_init:e0}};$.memo=function(e,t){return{$$typeof:Xy,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=xs.transition;xs.transition={};try{e()}finally{xs.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Ae.current.useCallback(e,t)};$.useContext=function(e){return Ae.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ae.current.useEffect(e,t)};$.useId=function(){return Ae.current.useId()};$.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ae.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};$.useRef=function(e){return Ae.current.useRef(e)};$.useState=function(e){return Ae.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ae.current.useTransition()};$.version="18.2.0";Wf.exports=$;var D=Wf.exports;const Jf=zy(D),n0=Fy({__proto__:null,default:Jf},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=D,i0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),o0=Object.prototype.hasOwnProperty,l0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a0={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)o0.call(t,r)&&!a0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:i0,type:e,key:s,ref:o,props:i,_owner:l0.current}}Uo.Fragment=s0;Uo.jsx=Zf;Uo.jsxs=Zf;Hf.exports=Uo;var k=Hf.exports,wa={},ep={exports:{}},He={},tp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,x){var L=T.length;T.push(x);e:for(;0<L;){var J=L-1>>>1,ie=T[J];if(0<i(ie,x))T[J]=x,T[L]=ie,L=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var x=T[0],L=T.pop();if(L!==x){T[0]=L;e:for(var J=0,ie=T.length,as=ie>>>1;J<as;){var En=2*(J+1)-1,Pl=T[En],In=En+1,us=T[In];if(0>i(Pl,L))In<ie&&0>i(us,Pl)?(T[J]=us,T[In]=L,J=In):(T[J]=Pl,T[En]=L,J=En);else if(In<ie&&0>i(us,L))T[J]=us,T[In]=L,J=In;else break e}}return x}function i(T,x){var L=T.sortIndex-x.sortIndex;return L!==0?L:T.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,f=null,g=3,m=!1,v=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=T)r(u),x.sortIndex=x.expirationTime,t(a,x);else break;x=n(u)}}function y(T){if(w=!1,p(T),!v)if(n(a)!==null)v=!0,kl(I);else{var x=n(u);x!==null&&Cl(y,x.startTime-T)}}function I(T,x){v=!1,w&&(w=!1,h(A),A=-1),m=!0;var L=g;try{for(p(x),f=n(a);f!==null&&(!(f.expirationTime>x)||T&&!nt());){var J=f.callback;if(typeof J=="function"){f.callback=null,g=f.priorityLevel;var ie=J(f.expirationTime<=x);x=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(a)&&r(a),p(x)}else r(a);f=n(a)}if(f!==null)var as=!0;else{var En=n(u);En!==null&&Cl(y,En.startTime-x),as=!1}return as}finally{f=null,g=L,m=!1}}var C=!1,P=null,A=-1,H=5,M=-1;function nt(){return!(e.unstable_now()-M<H)}function Mr(){if(P!==null){var T=e.unstable_now();M=T;var x=!0;try{x=P(!0,T)}finally{x?$r():(C=!1,P=null)}}else C=!1}var $r;if(typeof d=="function")$r=function(){d(Mr)};else if(typeof MessageChannel<"u"){var Id=new MessageChannel,jy=Id.port2;Id.port1.onmessage=Mr,$r=function(){jy.postMessage(null)}}else $r=function(){R(Mr,0)};function kl(T){P=T,C||(C=!0,$r())}function Cl(T,x){A=R(function(){T(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,kl(I))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var x=3;break;default:x=g}var L=g;g=x;try{return T()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,x){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=g;g=T;try{return x()}finally{g=L}},e.unstable_scheduleCallback=function(T,x,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,T){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=L+ie,T={id:c++,callback:x,priorityLevel:T,startTime:L,expirationTime:ie,sortIndex:-1},L>J?(T.sortIndex=L,t(u,T),n(a)===null&&T===n(u)&&(w?(h(A),A=-1):w=!0,Cl(y,L-J))):(T.sortIndex=ie,t(a,T),v||m||(v=!0,kl(I))),T},e.unstable_shouldYield=nt,e.unstable_wrapCallback=function(T){var x=g;return function(){var L=g;g=x;try{return T.apply(this,arguments)}finally{g=L}}}})(np);tp.exports=np;var u0=tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=D,Ve=u0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ip=new Set,di={};function Kn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(di[e]=t,e=0;e<t.length;e++)ip.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_a=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},Pd={};function d0(e){return _a.call(Pd,e)?!0:_a.call(Cd,e)?!1:c0.test(e)?Pd[e]=!0:(Cd[e]=!0,!1)}function h0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f0(e,t,n,r){if(t===null||typeof t>"u"||h0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fu,zu);fe[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fu,zu);fe[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fu,zu);fe[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bu(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f0(t,n,i,r)&&(n=null),r||i===null?d0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ds=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),Ea=Symbol.for("react.profiler"),sp=Symbol.for("react.provider"),op=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Ia=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),lp=Symbol.for("react.offscreen"),Ad=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=Ad&&e[Ad]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Rl;function Gr(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var Nl=!1;function Ol(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function p0(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Yn:return"Portal";case Ea:return"Profiler";case Vu:return"StrictMode";case Ia:return"Suspense";case Sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case op:return(e.displayName||"Context")+".Consumer";case sp:return(e._context.displayName||"Context")+".Provider";case Hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wu:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ap(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m0(e){var t=ap(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hs(e){e._valueTracker||(e._valueTracker=m0(e))}function up(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ap(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ka(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cp(e,t){t=t.checked,t!=null&&Bu(e,"checked",t,!1)}function Ca(e,t){cp(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pa(e,t,n){(t!=="number"||qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Od(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(qr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function dp(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fs,fp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fs=fs||document.createElement("div"),fs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){v0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function pp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function gp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var y0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Na(e,t){if(t){if(y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Da=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,cr=null,dr=null;function xd(e){if(e=bi(e)){if(typeof xa!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Vo(t),xa(e.stateNode,e.type,t))}}function mp(e){cr?dr?dr.push(e):dr=[e]:cr=e}function vp(){if(cr){var e=cr,t=dr;if(dr=cr=null,xd(e),t)for(e=0;e<t.length;e++)xd(t[e])}}function yp(e,t){return e(t)}function wp(){}var Dl=!1;function _p(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return yp(e,t,n)}finally{Dl=!1,(cr!==null||dr!==null)&&(wp(),vp())}}function fi(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var La=!1;if(Dt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){La=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{La=!1}function w0(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ei=!1,Xs=null,Ys=!1,Ma=null,_0={onError:function(e){ei=!0,Xs=e}};function E0(e,t,n,r,i,s,o,l,a){ei=!1,Xs=null,w0.apply(_0,arguments)}function I0(e,t,n,r,i,s,o,l,a){if(E0.apply(this,arguments),ei){if(ei){var u=Xs;ei=!1,Xs=null}else throw Error(_(198));Ys||(Ys=!0,Ma=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ld(e){if(Gn(e)!==e)throw Error(_(188))}function S0(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ld(i),e;if(s===r)return Ld(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ip(e){return e=S0(e),e!==null?Sp(e):null}function Sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sp(e);if(t!==null)return t;e=e.sibling}return null}var Tp=Ve.unstable_scheduleCallback,Md=Ve.unstable_cancelCallback,T0=Ve.unstable_shouldYield,k0=Ve.unstable_requestPaint,Z=Ve.unstable_now,C0=Ve.unstable_getCurrentPriorityLevel,Ku=Ve.unstable_ImmediatePriority,kp=Ve.unstable_UserBlockingPriority,Qs=Ve.unstable_NormalPriority,P0=Ve.unstable_LowPriority,Cp=Ve.unstable_IdlePriority,jo=null,mt=null;function A0(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:O0,R0=Math.log,N0=Math.LN2;function O0(e){return e>>>=0,e===0?32:31-(R0(e)/N0|0)|0}var ps=64,gs=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Js(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Xr(l):(s&=o,s!==0&&(r=Xr(s)))}else o=n&~i,o!==0?r=Xr(o):s!==0&&(r=Xr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),i=1<<n,r|=e[n],t&=~i;return r}function D0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-lt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=D0(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pp(){var e=ps;return ps<<=1,!(ps&4194240)&&(ps=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function L0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Gu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function Ap(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rp,qu,Np,Op,Dp,Ua=!1,ms=[],Zt=null,en=null,tn=null,pi=new Map,gi=new Map,bt=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function Fr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=bi(t),t!==null&&qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $0(e,t,n,r,i){switch(t){case"focusin":return Zt=Fr(Zt,e,t,n,r,i),!0;case"dragenter":return en=Fr(en,e,t,n,r,i),!0;case"mouseover":return tn=Fr(tn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return pi.set(s,Fr(pi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,gi.set(s,Fr(gi.get(s)||null,e,t,n,r,i)),!0}return!1}function xp(e){var t=Cn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ep(n),t!==null){e.blockedOn=t,Dp(e.priority,function(){Np(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Da=r,n.target.dispatchEvent(r),Da=null}else return t=bi(n),t!==null&&qu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ud(e,t,n){Ls(e)&&n.delete(t)}function U0(){Ua=!1,Zt!==null&&Ls(Zt)&&(Zt=null),en!==null&&Ls(en)&&(en=null),tn!==null&&Ls(tn)&&(tn=null),pi.forEach(Ud),gi.forEach(Ud)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,U0)))}function mi(e){function t(i){return zr(i,e)}if(0<ms.length){zr(ms[0],e);for(var n=1;n<ms.length;n++){var r=ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&zr(Zt,e),en!==null&&zr(en,e),tn!==null&&zr(tn,e),pi.forEach(t),gi.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)xp(n),n.blockedOn===null&&bt.shift()}var hr=jt.ReactCurrentBatchConfig,Zs=!0;function j0(e,t,n,r){var i=z,s=hr.transition;hr.transition=null;try{z=1,Xu(e,t,n,r)}finally{z=i,hr.transition=s}}function F0(e,t,n,r){var i=z,s=hr.transition;hr.transition=null;try{z=4,Xu(e,t,n,r)}finally{z=i,hr.transition=s}}function Xu(e,t,n,r){if(Zs){var i=ja(e,t,n,r);if(i===null)Hl(e,t,r,eo,n),$d(e,r);else if($0(i,e,t,n,r))r.stopPropagation();else if($d(e,r),t&4&&-1<M0.indexOf(e)){for(;i!==null;){var s=bi(i);if(s!==null&&Rp(s),s=ja(e,t,n,r),s===null&&Hl(e,t,r,eo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var eo=null;function ja(e,t,n,r){if(eo=null,e=bu(r),e=Cn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function Lp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case Ku:return 1;case kp:return 4;case Qs:case P0:return 16;case Cp:return 536870912;default:return 16}default:return 16}}var Yt=null,Yu=null,Ms=null;function Mp(){if(Ms)return Ms;var e,t=Yu,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ms=i.slice(e,1<r?1-r:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vs(){return!0}function jd(){return!1}function We(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vs:jd,this.isPropagationStopped=jd,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=We(Nr),Wi=Y({},Nr,{view:0,detail:0}),z0=We(Wi),Ll,Ml,Br,Fo=Y({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Ll=e.screenX-Br.screenX,Ml=e.screenY-Br.screenY):Ml=Ll=0,Br=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),Fd=We(Fo),B0=Y({},Fo,{dataTransfer:0}),V0=We(B0),H0=Y({},Wi,{relatedTarget:0}),$l=We(H0),W0=Y({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=We(W0),K0=Y({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=We(K0),q0=Y({},Nr,{data:0}),zd=We(q0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q0[e])?!!t[e]:!1}function Ju(){return J0}var Z0=Y({},Wi,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),e1=We(Z0),t1=Y({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=We(t1),n1=Y({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),r1=We(n1),i1=Y({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=We(i1),o1=Y({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l1=We(o1),a1=[9,13,27,32],Zu=Dt&&"CompositionEvent"in window,ti=null;Dt&&"documentMode"in document&&(ti=document.documentMode);var u1=Dt&&"TextEvent"in window&&!ti,$p=Dt&&(!Zu||ti&&8<ti&&11>=ti),Vd=String.fromCharCode(32),Hd=!1;function Up(e,t){switch(e){case"keyup":return a1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function c1(e,t){switch(e){case"compositionend":return jp(t);case"keypress":return t.which!==32?null:(Hd=!0,Vd);case"textInput":return e=t.data,e===Vd&&Hd?null:e;default:return null}}function d1(e,t){if(Jn)return e==="compositionend"||!Zu&&Up(e,t)?(e=Mp(),Ms=Yu=Yt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!h1[e.type]:t==="textarea"}function Fp(e,t,n,r){mp(r),t=to(t,"onChange"),0<t.length&&(n=new Qu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ni=null,vi=null;function f1(e){Yp(e,0)}function zo(e){var t=tr(e);if(up(t))return e}function p1(e,t){if(e==="change")return t}var zp=!1;if(Dt){var Ul;if(Dt){var jl="oninput"in document;if(!jl){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),jl=typeof bd.oninput=="function"}Ul=jl}else Ul=!1;zp=Ul&&(!document.documentMode||9<document.documentMode)}function Kd(){ni&&(ni.detachEvent("onpropertychange",Bp),vi=ni=null)}function Bp(e){if(e.propertyName==="value"&&zo(vi)){var t=[];Fp(t,vi,e,bu(e)),_p(f1,t)}}function g1(e,t,n){e==="focusin"?(Kd(),ni=t,vi=n,ni.attachEvent("onpropertychange",Bp)):e==="focusout"&&Kd()}function m1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(vi)}function v1(e,t){if(e==="click")return zo(t)}function y1(e,t){if(e==="input"||e==="change")return zo(t)}function w1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:w1;function yi(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_a.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qd(e,t){var n=Gd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function Vp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hp(){for(var e=window,t=qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qs(e.document)}return t}function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _1(e){var t=Hp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vp(n.ownerDocument.documentElement,n)){if(r!==null&&ec(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=qd(n,s);var o=qd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E1=Dt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Fa=null,ri=null,za=!1;function Xd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;za||Zn==null||Zn!==qs(r)||(r=Zn,"selectionStart"in r&&ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&yi(ri,r)||(ri=r,r=to(Fa,"onSelect"),0<r.length&&(t=new Qu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function ys(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionend:ys("Transition","TransitionEnd")},Fl={},Wp={};Dt&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Bo(e){if(Fl[e])return Fl[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wp)return Fl[e]=t[n];return e}var bp=Bo("animationend"),Kp=Bo("animationiteration"),Gp=Bo("animationstart"),qp=Bo("transitionend"),Xp=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){Xp.set(e,t),Kn(t,[e])}for(var zl=0;zl<Yd.length;zl++){var Bl=Yd[zl],I1=Bl.toLowerCase(),S1=Bl[0].toUpperCase()+Bl.slice(1);pn(I1,"on"+S1)}pn(bp,"onAnimationEnd");pn(Kp,"onAnimationIteration");pn(Gp,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(qp,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Qd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I0(r,t,void 0,e),e.currentTarget=null}function Yp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Qd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Qd(i,l,u),s=a}}}if(Ys)throw e=Ma,Ys=!1,Ma=null,e}function W(e,t){var n=t[ba];n===void 0&&(n=t[ba]=new Set);var r=e+"__bubble";n.has(r)||(Qp(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),Qp(n,e,r,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[ws]){e[ws]=!0,ip.forEach(function(n){n!=="selectionchange"&&(T1.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,Vl("selectionchange",!1,t))}}function Qp(e,t,n,r){switch(Lp(t)){case 1:var i=j0;break;case 4:i=F0;break;default:i=Xu}n=i.bind(null,t,n,e),i=void 0,!La||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Cn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}_p(function(){var u=s,c=bu(n),f=[];e:{var g=Xp.get(e);if(g!==void 0){var m=Qu,v=e;switch(e){case"keypress":if($s(n)===0)break e;case"keydown":case"keyup":m=e1;break;case"focusin":v="focus",m=$l;break;case"focusout":v="blur",m=$l;break;case"beforeblur":case"afterblur":m=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=r1;break;case bp:case Kp:case Gp:m=b0;break;case qp:m=s1;break;case"scroll":m=z0;break;case"wheel":m=l1;break;case"copy":case"cut":case"paste":m=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bd}var w=(t&4)!==0,R=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=fi(d,h),y!=null&&w.push(_i(d,y,p)))),R)break;d=d.return}0<w.length&&(g=new m(g,v,null,n,c),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==Da&&(v=n.relatedTarget||n.fromElement)&&(Cn(v)||v[xt]))break e;if((m||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Cn(v):null,v!==null&&(R=Gn(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Fd,y="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Bd,y="onPointerLeave",h="onPointerEnter",d="pointer"),R=m==null?g:tr(m),p=v==null?g:tr(v),g=new w(y,d+"leave",m,n,c),g.target=R,g.relatedTarget=p,y=null,Cn(c)===u&&(w=new w(h,d+"enter",v,n,c),w.target=p,w.relatedTarget=R,y=w),R=y,m&&v)t:{for(w=m,h=v,d=0,p=w;p;p=qn(p))d++;for(p=0,y=h;y;y=qn(y))p++;for(;0<d-p;)w=qn(w),d--;for(;0<p-d;)h=qn(h),p--;for(;d--;){if(w===h||h!==null&&w===h.alternate)break t;w=qn(w),h=qn(h)}w=null}else w=null;m!==null&&Jd(f,g,m,w,!1),v!==null&&R!==null&&Jd(f,R,v,w,!0)}}e:{if(g=u?tr(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var I=p1;else if(Wd(g))if(zp)I=y1;else{I=m1;var C=g1}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(I=v1);if(I&&(I=I(e,u))){Fp(f,I,n,c);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Pa(g,"number",g.value)}switch(C=u?tr(u):window,e){case"focusin":(Wd(C)||C.contentEditable==="true")&&(Zn=C,Fa=u,ri=null);break;case"focusout":ri=Fa=Zn=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Xd(f,n,c);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":Xd(f,n,c)}var P;if(Zu)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Jn?Up(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&($p&&n.locale!=="ko"&&(Jn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Jn&&(P=Mp()):(Yt=c,Yu="value"in Yt?Yt.value:Yt.textContent,Jn=!0)),C=to(u,A),0<C.length&&(A=new zd(A,e,null,n,c),f.push({event:A,listeners:C}),P?A.data=P:(P=jp(n),P!==null&&(A.data=P)))),(P=u1?c1(e,n):d1(e,n))&&(u=to(u,"onBeforeInput"),0<u.length&&(c=new zd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}Yp(f,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fi(e,n),s!=null&&r.unshift(_i(e,s,i)),s=fi(e,t),s!=null&&r.push(_i(e,s,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=fi(n,s),a!=null&&o.unshift(_i(n,a,l))):i||(a=fi(n,s),a!=null&&o.push(_i(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var k1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function Zd(e){return(typeof e=="string"?e:""+e).replace(k1,`
`).replace(C1,"")}function _s(e,t,n){if(t=Zd(t),Zd(e)!==t&&n)throw Error(_(425))}function no(){}var Ba=null,Va=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(e){return eh.resolve(null).then(e).catch(R1)}:Wa;function R1(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mi(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),ht="__reactFiber$"+Or,Ei="__reactProps$"+Or,xt="__reactContainer$"+Or,ba="__reactEvents$"+Or,N1="__reactListeners$"+Or,O1="__reactHandles$"+Or;function Cn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=th(e);e!==null;){if(n=e[ht])return n;e=th(e)}return t}e=n,n=e.parentNode}return null}function bi(e){return e=e[ht]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Vo(e){return e[Ei]||null}var Ka=[],nr=-1;function gn(e){return{current:e}}function K(e){0>nr||(e.current=Ka[nr],Ka[nr]=null,nr--)}function V(e,t){nr++,Ka[nr]=e.current,e.current=t}var dn={},Ie=gn(dn),De=gn(!1),Un=dn;function Er(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function ro(){K(De),K(Ie)}function nh(e,t,n){if(Ie.current!==dn)throw Error(_(168));V(Ie,t),V(De,n)}function Jp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,g0(e)||"Unknown",i));return Y({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Un=Ie.current,V(Ie,e),V(De,De.current),!0}function rh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Jp(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,K(De),K(Ie),V(Ie,e)):K(De),V(De,n)}var St=null,Ho=!1,bl=!1;function Zp(e){St===null?St=[e]:St.push(e)}function D1(e){Ho=!0,Zp(e)}function mn(){if(!bl&&St!==null){bl=!0;var e=0,t=z;try{var n=St;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Ho=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),Tp(Ku,mn),i}finally{z=t,bl=!1}}return null}var rr=[],ir=0,so=null,oo=0,be=[],Ke=0,jn=null,kt=1,Ct="";function Sn(e,t){rr[ir++]=oo,rr[ir++]=so,so=e,oo=t}function eg(e,t,n){be[Ke++]=kt,be[Ke++]=Ct,be[Ke++]=jn,jn=e;var r=kt;e=Ct;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-lt(t)+i|n<<i|r,Ct=s+e}else kt=1<<s|n<<i|r,Ct=e}function tc(e){e.return!==null&&(Sn(e,1),eg(e,1,0))}function nc(e){for(;e===so;)so=rr[--ir],rr[ir]=null,oo=rr[--ir],rr[ir]=null;for(;e===jn;)jn=be[--Ke],be[Ke]=null,Ct=be[--Ke],be[Ke]=null,kt=be[--Ke],be[Ke]=null}var ze=null,je=null,G=!1,ot=null;function tg(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ih(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,je=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:kt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,je=null,!0):!1;default:return!1}}function Ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qa(e){if(G){var t=je;if(t){var n=t;if(!ih(e,t)){if(Ga(e))throw Error(_(418));t=nn(n.nextSibling);var r=ze;t&&ih(e,t)?tg(r,n):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(Ga(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function sh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Es(e){if(e!==ze)return!1;if(!G)return sh(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=je)){if(Ga(e))throw ng(),Error(_(418));for(;t;)tg(e,t),t=nn(t.nextSibling)}if(sh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=ze?nn(e.stateNode.nextSibling):null;return!0}function ng(){for(var e=je;e;)e=nn(e.nextSibling)}function Ir(){je=ze=null,G=!1}function rc(e){ot===null?ot=[e]:ot.push(e)}var x1=jt.ReactCurrentBatchConfig;function it(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var lo=gn(null),ao=null,sr=null,ic=null;function sc(){ic=sr=ao=null}function oc(e){var t=lo.current;K(lo),e._currentValue=t}function Xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){ao=e,ic=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(ic!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(ao===null)throw Error(_(308));sr=e,ao.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Pn=null;function lc(e){Pn===null?Pn=[e]:Pn.push(e)}function rg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ig(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}function oh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var i=e.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,c=u=a=null,l=s;do{var g=l.lane,m=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(g=t,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(m,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(m,f,g):v,g==null)break e;f=Y({},f,g);break e;case 2:Wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=f):c=c.next=m,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);zn|=o,e.lanes=o,e.memoizedState=f}}function lh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var sg=new rp.Component().refs;function Ya(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=on(e),s=Nt(r,i);s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,i),t!==null&&(at(t,e,i,r),Us(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=on(e),s=Nt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,i),t!==null&&(at(t,e,i,r),Us(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=on(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(at(t,e,r,n),Us(t,e,r))}};function ah(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!yi(n,r)||!yi(i,s):!0}function og(e,t,n){var r=!1,i=dn,s=t.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=xe(t)?Un:Ie.current,r=t.contextTypes,s=(r=r!=null)?Er(e,i):dn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function uh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Qa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=sg,ac(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=xe(t)?Un:Ie.current,i.context=Er(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ya(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wo.enqueueReplaceState(i,i.state,null),uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===sg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Is(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ch(e){var t=e._init;return t(e._payload)}function lg(e){function t(h,d){if(e){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=ln(h,d),h.index=0,h.sibling=null,h}function s(h,d,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=2,d):p):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,d,p,y){return d===null||d.tag!==6?(d=Jl(p,h.mode,y),d.return=h,d):(d=i(d,p),d.return=h,d)}function a(h,d,p,y){var I=p.type;return I===Qn?c(h,d,p.props.children,y,p.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&ch(I)===d.type)?(y=i(d,p.props),y.ref=Vr(h,d,p),y.return=h,y):(y=Hs(p.type,p.key,p.props,null,h.mode,y),y.ref=Vr(h,d,p),y.return=h,y)}function u(h,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Zl(p,h.mode,y),d.return=h,d):(d=i(d,p.children||[]),d.return=h,d)}function c(h,d,p,y,I){return d===null||d.tag!==7?(d=Ln(p,h.mode,y,I),d.return=h,d):(d=i(d,p),d.return=h,d)}function f(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Jl(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ds:return p=Hs(d.type,d.key,d.props,null,h.mode,p),p.ref=Vr(h,null,d),p.return=h,p;case Yn:return d=Zl(d,h.mode,p),d.return=h,d;case Ht:var y=d._init;return f(h,y(d._payload),p)}if(qr(d)||Ur(d))return d=Ln(d,h.mode,p,null),d.return=h,d;Is(h,d)}return null}function g(h,d,p,y){var I=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:l(h,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ds:return p.key===I?a(h,d,p,y):null;case Yn:return p.key===I?u(h,d,p,y):null;case Ht:return I=p._init,g(h,d,I(p._payload),y)}if(qr(p)||Ur(p))return I!==null?null:c(h,d,p,y,null);Is(h,p)}return null}function m(h,d,p,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,l(d,h,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ds:return h=h.get(y.key===null?p:y.key)||null,a(d,h,y,I);case Yn:return h=h.get(y.key===null?p:y.key)||null,u(d,h,y,I);case Ht:var C=y._init;return m(h,d,p,C(y._payload),I)}if(qr(y)||Ur(y))return h=h.get(p)||null,c(d,h,y,I,null);Is(d,y)}return null}function v(h,d,p,y){for(var I=null,C=null,P=d,A=d=0,H=null;P!==null&&A<p.length;A++){P.index>A?(H=P,P=null):H=P.sibling;var M=g(h,P,p[A],y);if(M===null){P===null&&(P=H);break}e&&P&&M.alternate===null&&t(h,P),d=s(M,d,A),C===null?I=M:C.sibling=M,C=M,P=H}if(A===p.length)return n(h,P),G&&Sn(h,A),I;if(P===null){for(;A<p.length;A++)P=f(h,p[A],y),P!==null&&(d=s(P,d,A),C===null?I=P:C.sibling=P,C=P);return G&&Sn(h,A),I}for(P=r(h,P);A<p.length;A++)H=m(P,h,A,p[A],y),H!==null&&(e&&H.alternate!==null&&P.delete(H.key===null?A:H.key),d=s(H,d,A),C===null?I=H:C.sibling=H,C=H);return e&&P.forEach(function(nt){return t(h,nt)}),G&&Sn(h,A),I}function w(h,d,p,y){var I=Ur(p);if(typeof I!="function")throw Error(_(150));if(p=I.call(p),p==null)throw Error(_(151));for(var C=I=null,P=d,A=d=0,H=null,M=p.next();P!==null&&!M.done;A++,M=p.next()){P.index>A?(H=P,P=null):H=P.sibling;var nt=g(h,P,M.value,y);if(nt===null){P===null&&(P=H);break}e&&P&&nt.alternate===null&&t(h,P),d=s(nt,d,A),C===null?I=nt:C.sibling=nt,C=nt,P=H}if(M.done)return n(h,P),G&&Sn(h,A),I;if(P===null){for(;!M.done;A++,M=p.next())M=f(h,M.value,y),M!==null&&(d=s(M,d,A),C===null?I=M:C.sibling=M,C=M);return G&&Sn(h,A),I}for(P=r(h,P);!M.done;A++,M=p.next())M=m(P,h,A,M.value,y),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?A:M.key),d=s(M,d,A),C===null?I=M:C.sibling=M,C=M);return e&&P.forEach(function(Mr){return t(h,Mr)}),G&&Sn(h,A),I}function R(h,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Qn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ds:e:{for(var I=p.key,C=d;C!==null;){if(C.key===I){if(I=p.type,I===Qn){if(C.tag===7){n(h,C.sibling),d=i(C,p.props.children),d.return=h,h=d;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&ch(I)===C.type){n(h,C.sibling),d=i(C,p.props),d.ref=Vr(h,C,p),d.return=h,h=d;break e}n(h,C);break}else t(h,C);C=C.sibling}p.type===Qn?(d=Ln(p.props.children,h.mode,y,p.key),d.return=h,h=d):(y=Hs(p.type,p.key,p.props,null,h.mode,y),y.ref=Vr(h,d,p),y.return=h,h=y)}return o(h);case Yn:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(h,d.sibling),d=i(d,p.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Zl(p,h.mode,y),d.return=h,h=d}return o(h);case Ht:return C=p._init,R(h,d,C(p._payload),y)}if(qr(p))return v(h,d,p,y);if(Ur(p))return w(h,d,p,y);Is(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,p),d.return=h,h=d):(n(h,d),d=Jl(p,h.mode,y),d.return=h,h=d),o(h)):n(h,d)}return R}var Sr=lg(!0),ag=lg(!1),Ki={},vt=gn(Ki),Ii=gn(Ki),Si=gn(Ki);function An(e){if(e===Ki)throw Error(_(174));return e}function uc(e,t){switch(V(Si,t),V(Ii,e),V(vt,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ra(t,e)}K(vt),V(vt,t)}function Tr(){K(vt),K(Ii),K(Si)}function ug(e){An(Si.current);var t=An(vt.current),n=Ra(t,e.type);t!==n&&(V(Ii,e),V(vt,n))}function cc(e){Ii.current===e&&(K(vt),K(Ii))}var q=gn(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function dc(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var js=jt.ReactCurrentDispatcher,Gl=jt.ReactCurrentBatchConfig,Fn=0,X=null,ne=null,se=null,ho=!1,ii=!1,Ti=0,L1=0;function pe(){throw Error(_(321))}function hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function fc(e,t,n,r,i,s){if(Fn=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,js.current=e===null||e.memoizedState===null?j1:F1,e=n(r,i),ii){s=0;do{if(ii=!1,Ti=0,25<=s)throw Error(_(301));s+=1,se=ne=null,t.updateQueue=null,js.current=z1,e=n(r,i)}while(ii)}if(js.current=fo,t=ne!==null&&ne.next!==null,Fn=0,se=ne=X=null,ho=!1,t)throw Error(_(300));return e}function pc(){var e=Ti!==0;return Ti=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?X.memoizedState=se=e:se=se.next=e,se}function Qe(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=se===null?X.memoizedState:se.next;if(t!==null)se=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?X.memoizedState=se=e:se=se.next=e}return se}function ki(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Fn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,X.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ut(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,zn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ut(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function cg(){}function dg(e,t){var n=X,r=Qe(),i=t(),s=!ut(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,gc(pg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Ci(9,fg.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(_(349));Fn&30||hg(n,t,i)}return i}function hg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fg(e,t,n,r){t.value=n,t.getSnapshot=r,gg(t)&&mg(e)}function pg(e,t,n){return n(function(){gg(t)&&mg(e)})}function gg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function mg(e){var t=Lt(e,1);t!==null&&at(t,e,1,-1)}function dh(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=U1.bind(null,X,e),[t.memoizedState,e]}function Ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vg(){return Qe().memoizedState}function Fs(e,t,n,r){var i=dt();X.flags|=e,i.memoizedState=Ci(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,r!==null&&hc(r,o.deps)){i.memoizedState=Ci(t,n,s,r);return}}X.flags|=e,i.memoizedState=Ci(1|t,n,s,r)}function hh(e,t){return Fs(8390656,8,e,t)}function gc(e,t){return bo(2048,8,e,t)}function yg(e,t){return bo(4,2,e,t)}function wg(e,t){return bo(4,4,e,t)}function _g(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eg(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,_g.bind(null,t,e),n)}function mc(){}function Ig(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sg(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tg(e,t,n){return Fn&21?(ut(n,t)||(n=Pp(),X.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function M1(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{z=n,Gl.transition=r}}function kg(){return Qe().memoizedState}function $1(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cg(e))Pg(t,n);else if(n=rg(e,t,n,r),n!==null){var i=Ce();at(n,e,r,i),Ag(n,t,r)}}function U1(e,t,n){var r=on(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cg(e))Pg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ut(l,o)){var a=t.interleaved;a===null?(i.next=i,lc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=rg(e,t,i,r),n!==null&&(i=Ce(),at(n,e,r,i),Ag(n,t,r))}}function Cg(e){var t=e.alternate;return e===X||t!==null&&t===X}function Pg(e,t){ii=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ag(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}var fo={readContext:Ye,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},j1={readContext:Ye,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4194308,4,_g.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:dh,useDebugValue:mc,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=dh(!1),t=e[0];return e=M1.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=dt();if(G){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),oe===null)throw Error(_(349));Fn&30||hg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,hh(pg.bind(null,r,s,e),[e]),r.flags|=2048,Ci(9,fg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=dt(),t=oe.identifierPrefix;if(G){var n=Ct,r=kt;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},F1={readContext:Ye,useCallback:Ig,useContext:Ye,useEffect:gc,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:wg,useMemo:Sg,useReducer:ql,useRef:vg,useState:function(){return ql(ki)},useDebugValue:mc,useDeferredValue:function(e){var t=Qe();return Tg(t,ne.memoizedState,e)},useTransition:function(){var e=ql(ki)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:cg,useSyncExternalStore:dg,useId:kg,unstable_isNewReconciler:!1},z1={readContext:Ye,useCallback:Ig,useContext:Ye,useEffect:gc,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:wg,useMemo:Sg,useReducer:Xl,useRef:vg,useState:function(){return Xl(ki)},useDebugValue:mc,useDeferredValue:function(e){var t=Qe();return ne===null?t.memoizedState=e:Tg(t,ne.memoizedState,e)},useTransition:function(){var e=Xl(ki)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:cg,useSyncExternalStore:dg,useId:kg,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=p0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B1=typeof WeakMap=="function"?WeakMap:Map;function Rg(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,au=r),Ja(e,t)},n}function Ng(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ja(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function fh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tw.bind(null,e,t,n),t.then(e,e))}function ph(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var V1=jt.ReactCurrentOwner,Oe=!1;function Te(e,t,n,r){t.child=e===null?ag(t,null,n,r):Sr(t,e.child,n,r)}function mh(e,t,n,r,i){n=n.render;var s=t.ref;return fr(t,i),r=fc(e,t,n,r,s,i),n=pc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(G&&n&&tc(t),t.flags|=1,Te(e,t,r,i),t.child)}function vh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Tc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Og(e,t,s,r,i)):(e=Hs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(o,r)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=ln(s,r),e.ref=t.ref,e.return=t,t.child=e}function Og(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(yi(s,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return Za(e,t,n,r,i)}function Dg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(lr,Ue),Ue|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(lr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(lr,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,V(lr,Ue),Ue|=r;return Te(e,t,i,n),t.child}function xg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Za(e,t,n,r,i){var s=xe(n)?Un:Ie.current;return s=Er(t,s),fr(t,i),n=fc(e,t,n,r,s,i),r=pc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(G&&r&&tc(t),t.flags|=1,Te(e,t,n,i),t.child)}function yh(e,t,n,r,i){if(xe(n)){var s=!0;io(t)}else s=!1;if(fr(t,i),t.stateNode===null)zs(e,t),og(t,n,r),Qa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=xe(n)?Un:Ie.current,u=Er(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&uh(t,o,r,u),Wt=!1;var g=t.memoizedState;o.state=g,uo(t,r,o,i),a=t.memoizedState,l!==r||g!==a||De.current||Wt?(typeof c=="function"&&(Ya(t,n,c,r),a=t.memoizedState),(l=Wt||ah(t,n,l,r,g,a,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ig(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:it(t.type,l),o.props=u,f=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=xe(n)?Un:Ie.current,a=Er(t,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||g!==a)&&uh(t,o,r,a),Wt=!1,g=t.memoizedState,o.state=g,uo(t,r,o,i);var v=t.memoizedState;l!==f||g!==v||De.current||Wt?(typeof m=="function"&&(Ya(t,n,m,r),v=t.memoizedState),(u=Wt||ah(t,n,u,r,g,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return eu(e,t,n,r,s,i)}function eu(e,t,n,r,i,s){xg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&rh(t,n,!1),Mt(e,t,s);r=t.stateNode,V1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Sr(t,e.child,null,s),t.child=Sr(t,null,l,s)):Te(e,t,l,s),t.memoizedState=r.state,i&&rh(t,n,!0),t.child}function Lg(e){var t=e.stateNode;t.pendingContext?nh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nh(e,t.context,!1),uc(e,t.containerInfo)}function wh(e,t,n,r,i){return Ir(),rc(i),t.flags|=256,Te(e,t,n,r),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mg(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(q,i&1),e===null)return qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qo(o,r,0,null),e=Ln(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=nu(n),t.memoizedState=tu,e):vc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return H1(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ln(l,s):(s=Ln(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=tu,r}return s=e.child,e=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vc(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,n,r){return r!==null&&rc(r),Sr(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(_(422))),Ss(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=qo({mode:"visible",children:r.children},i,0,null),s=Ln(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Sr(t,e.child,null,o),t.child.memoizedState=nu(o),t.memoizedState=tu,s);if(!(t.mode&1))return Ss(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(_(419)),r=Yl(s,r,void 0),Ss(e,t,o,r)}if(l=(o&e.childLanes)!==0,Oe||l){if(r=oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(e,i),at(r,e,i,-1))}return Sc(),r=Yl(Error(_(421))),Ss(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,je=nn(i.nextSibling),ze=t,G=!0,ot=null,e!==null&&(be[Ke++]=kt,be[Ke++]=Ct,be[Ke++]=jn,kt=e.id,Ct=e.overflow,jn=t),t=vc(t,r.children),t.flags|=4096,t)}function _h(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xa(e.return,t,n)}function Ql(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $g(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Te(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_h(e,n,t);else if(e.tag===19)_h(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ql(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ql(t,!0,n,null,s);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function W1(e,t,n){switch(t.tag){case 3:Lg(t),Ir();break;case 5:ug(t);break;case 1:xe(t.type)&&io(t);break;case 4:uc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Mg(e,t,n):(V(q,q.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $g(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Dg(e,t,n)}return Mt(e,t,n)}var Ug,ru,jg,Fg;Ug=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ru=function(){};jg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,An(vt.current);var s=null;switch(n){case"input":i=ka(e,i),r=ka(e,r),s=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),s=[];break;case"textarea":i=Aa(e,i),r=Aa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}Na(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(di.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(di.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&W("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Fg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function b1(e,t,n){var r=t.pendingProps;switch(nc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return xe(t.type)&&ro(),ge(t),null;case 3:return r=t.stateNode,Tr(),K(De),K(Ie),dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(du(ot),ot=null))),ru(e,t),ge(t),null;case 5:cc(t);var i=An(Si.current);if(n=t.type,e!==null&&t.stateNode!=null)jg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ge(t),null}if(e=An(vt.current),Es(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ht]=t,r[Ei]=s,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)W(Yr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Rd(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":Od(r,s),W("invalid",r)}Na(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",""+l]):di.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":hs(r),Nd(r,s,!0);break;case"textarea":hs(r),Dd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=no)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ht]=t,e[Ei]=r,Ug(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oa(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)W(Yr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Rd(e,r),i=ka(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),W("invalid",e);break;case"textarea":Od(e,r),i=Aa(e,r),W("invalid",e);break;default:i=r}Na(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?gp(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fp(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&hi(e,a):typeof a=="number"&&hi(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(di.hasOwnProperty(s)?a!=null&&s==="onScroll"&&W("scroll",e):a!=null&&Bu(e,s,a,o))}switch(n){case"input":hs(e),Nd(e,r,!1);break;case"textarea":hs(e),Dd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ur(e,!!r.multiple,s,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Fg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=An(Si.current),An(vt.current),Es(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:_s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return ge(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&je!==null&&t.mode&1&&!(t.flags&128))ng(),Ir(),t.flags|=98560,s=!1;else if(s=Es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[ht]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else ot!==null&&(du(ot),ot=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?re===0&&(re=3):Sc())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Tr(),ru(e,t),e===null&&wi(t.stateNode.containerInfo),ge(t),null;case 10:return oc(t.type._context),ge(t),null;case 17:return xe(t.type)&&ro(),ge(t),null;case 19:if(K(q),s=t.memoizedState,s===null)return ge(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Hr(s,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Hr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>Cr&&(t.flags|=128,r=!0,Hr(s,!1),t.lanes=4194304)}else{if(!r)if(e=co(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return ge(t),null}else 2*Z()-s.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,Hr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function K1(e,t){switch(nc(t),t.tag){case 1:return xe(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),K(De),K(Ie),dc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cc(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Tr(),null;case 10:return oc(t.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var Ts=!1,ve=!1,G1=typeof WeakSet=="function"?WeakSet:Set,S=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function iu(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Eh=!1;function q1(e,t){if(Ba=Zs,e=Hp(),ec(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,f=e,g=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)g=f,f=m;for(;;){if(f===e)break t;if(g===n&&++u===i&&(l=o),g===s&&++c===r&&(a=o),(m=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Va={focusedElem:e,selectionRange:n},Zs=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,R=v.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:it(t.type,w),R);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=Eh,Eh=!1,v}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&iu(t,n,s)}i=i.next}while(i!==r)}}function Ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function su(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zg(e){var t=e.alternate;t!==null&&(e.alternate=null,zg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Ei],delete t[ba],delete t[N1],delete t[O1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bg(e){return e.tag===5||e.tag===3||e.tag===4}function Ih(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}var ue=null,st=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Vg(e,t,n),n=n.sibling}function Vg(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:ve||or(n,t);case 6:var r=ue,i=st;ue=null,Bt(e,t,n),ue=r,st=i,ue!==null&&(st?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(st?(e=ue,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),mi(e)):Wl(ue,n.stateNode));break;case 4:r=ue,i=st,ue=n.stateNode.containerInfo,st=!0,Bt(e,t,n),ue=r,st=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&iu(n,t,o),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!ve&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Bt(e,t,n),ve=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Sh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new G1),t.forEach(function(r){var i=rw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,st=!1;break e;case 3:ue=l.stateNode.containerInfo,st=!0;break e;case 4:ue=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(ue===null)throw Error(_(160));Vg(s,o,i),ue=null,st=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hg(t,e),t=t.sibling}function Hg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ct(e),r&4){try{si(3,e,e.return),Ko(3,e)}catch(w){Q(e,e.return,w)}try{si(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:rt(t,e),ct(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(rt(t,e),ct(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{hi(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cp(i,s),Oa(l,o);var u=Oa(l,s);for(o=0;o<a.length;o+=2){var c=a[o],f=a[o+1];c==="style"?gp(i,f):c==="dangerouslySetInnerHTML"?fp(i,f):c==="children"?hi(i,f):Bu(i,c,f,u)}switch(l){case"input":Ca(i,s);break;case"textarea":dp(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ur(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?ur(i,!!s.multiple,s.defaultValue,!0):ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ei]=s}catch(w){Q(e,e.return,w)}}break;case 6:if(rt(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Q(e,e.return,w)}}break;case 3:if(rt(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:rt(t,e),ct(e);break;case 13:rt(t,e),ct(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_c=Z())),r&4&&Sh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||c,rt(t,e),ve=u):rt(t,e),ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(S=e,c=e.child;c!==null;){for(f=S=c;S!==null;){switch(g=S,m=g.child,g.tag){case 0:case 11:case 14:case 15:si(4,g,g.return);break;case 1:or(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:or(g,g.return);break;case 22:if(g.memoizedState!==null){kh(f);continue}}m!==null?(m.return=g,S=m):kh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=pp("display",o))}catch(w){Q(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rt(t,e),ct(e),r&4&&Sh(e);break;case 21:break;default:rt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bg(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hi(i,""),r.flags&=-33);var s=Ih(e);lu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ih(e);ou(e,l,o);break;default:throw Error(_(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X1(e,t,n){S=e,Wg(e)}function Wg(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ts;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ve;l=Ts;var u=ve;if(Ts=o,(ve=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Ch(i):a!==null?(a.return=o,S=a):Ch(i);for(;s!==null;)S=s,Wg(s),s=s.sibling;S=i,Ts=l,ve=u}Th(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):Th(e)}}function Th(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&lh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lh(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&mi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ve||t.flags&512&&su(t)}catch(g){Q(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function kh(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ch(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ko(4,t)}catch(a){Q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Q(t,i,a)}}var s=t.return;try{su(t)}catch(a){Q(t,s,a)}break;case 5:var o=t.return;try{su(t)}catch(a){Q(t,o,a)}}}catch(a){Q(t,t.return,a)}if(t===e){S=null;break}var l=t.sibling;if(l!==null){l.return=t.return,S=l;break}S=t.return}}var Y1=Math.ceil,po=jt.ReactCurrentDispatcher,yc=jt.ReactCurrentOwner,Xe=jt.ReactCurrentBatchConfig,j=0,oe=null,te=null,de=0,Ue=0,lr=gn(0),re=0,Pi=null,zn=0,Go=0,wc=0,oi=null,Ne=null,_c=0,Cr=1/0,It=null,go=!1,au=null,sn=null,ks=!1,Qt=null,mo=0,li=0,uu=null,Bs=-1,Vs=0;function Ce(){return j&6?Z():Bs!==-1?Bs:Bs=Z()}function on(e){return e.mode&1?j&2&&de!==0?de&-de:x1.transition!==null?(Vs===0&&(Vs=Pp()),Vs):(e=z,e!==0||(e=window.event,e=e===void 0?16:Lp(e.type)),e):1}function at(e,t,n,r){if(50<li)throw li=0,uu=null,Error(_(185));Hi(e,n,r),(!(j&2)||e!==oe)&&(e===oe&&(!(j&2)&&(Go|=n),re===4&&Kt(e,de)),Le(e,r),n===1&&j===0&&!(t.mode&1)&&(Cr=Z()+500,Ho&&mn()))}function Le(e,t){var n=e.callbackNode;x0(e,t);var r=Js(e,e===oe?de:0);if(r===0)n!==null&&Md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Md(n),t===1)e.tag===0?D1(Ph.bind(null,e)):Zp(Ph.bind(null,e)),A1(function(){!(j&6)&&mn()}),n=null;else{switch(Ap(r)){case 1:n=Ku;break;case 4:n=kp;break;case 16:n=Qs;break;case 536870912:n=Cp;break;default:n=Qs}n=Jg(n,bg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bg(e,t){if(Bs=-1,Vs=0,j&6)throw Error(_(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=Js(e,e===oe?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var i=j;j|=2;var s=Gg();(oe!==e||de!==t)&&(It=null,Cr=Z()+500,xn(e,t));do try{Z1();break}catch(l){Kg(e,l)}while(1);sc(),po.current=s,j=i,te!==null?t=0:(oe=null,de=0,t=re)}if(t!==0){if(t===2&&(i=$a(e),i!==0&&(r=i,t=cu(e,i))),t===1)throw n=Pi,xn(e,0),Kt(e,r),Le(e,Z()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Q1(i)&&(t=vo(e,r),t===2&&(s=$a(e),s!==0&&(r=s,t=cu(e,s))),t===1))throw n=Pi,xn(e,0),Kt(e,r),Le(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Tn(e,Ne,It);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=_c+500-Z(),10<t)){if(Js(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wa(Tn.bind(null,e,Ne,It),t);break}Tn(e,Ne,It);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y1(r/1960))-r,10<r){e.timeoutHandle=Wa(Tn.bind(null,e,Ne,It),r);break}Tn(e,Ne,It);break;case 5:Tn(e,Ne,It);break;default:throw Error(_(329))}}}return Le(e,Z()),e.callbackNode===n?bg.bind(null,e):null}function cu(e,t){var n=oi;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=vo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&du(t)),e}function du(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Q1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~wc,t&=~Go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function Ph(e){if(j&6)throw Error(_(327));pr();var t=Js(e,0);if(!(t&1))return Le(e,Z()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=$a(e);r!==0&&(t=r,n=cu(e,r))}if(n===1)throw n=Pi,xn(e,0),Kt(e,t),Le(e,Z()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ne,It),Le(e,Z()),null}function Ec(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Cr=Z()+500,Ho&&mn())}}function Bn(e){Qt!==null&&Qt.tag===0&&!(j&6)&&pr();var t=j;j|=1;var n=Xe.transition,r=z;try{if(Xe.transition=null,z=1,e)return e()}finally{z=r,Xe.transition=n,j=t,!(j&6)&&mn()}}function Ic(){Ue=lr.current,K(lr)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,P1(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:Tr(),K(De),K(Ie),dc();break;case 5:cc(r);break;case 4:Tr();break;case 13:K(q);break;case 19:K(q);break;case 10:oc(r.type._context);break;case 22:case 23:Ic()}n=n.return}if(oe=e,te=e=ln(e.current,null),de=Ue=t,re=0,Pi=null,wc=Go=zn=0,Ne=oi=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pn=null}return e}function Kg(e,t){do{var n=te;try{if(sc(),js.current=fo,ho){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(Fn=0,se=ne=X=null,ii=!1,Ti=0,yc.current=null,n===null||n.return===null){re=1,Pi=t,te=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=de,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=ph(o);if(m!==null){m.flags&=-257,gh(m,o,l,s,t),m.mode&1&&fh(s,u,t),t=m,a=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){fh(s,u,t),Sc();break e}a=Error(_(426))}}else if(G&&l.mode&1){var R=ph(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),gh(R,o,l,s,t),rc(kr(a,l));break e}}s=a=kr(a,l),re!==4&&(re=2),oi===null?oi=[s]:oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Rg(s,a,t);oh(s,h);break e;case 1:l=a;var d=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(sn===null||!sn.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Ng(s,l,t);oh(s,y);break e}}s=s.return}while(s!==null)}Xg(n)}catch(I){t=I,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Gg(){var e=po.current;return po.current=fo,e===null?fo:e}function Sc(){(re===0||re===3||re===2)&&(re=4),oe===null||!(zn&268435455)&&!(Go&268435455)||Kt(oe,de)}function vo(e,t){var n=j;j|=2;var r=Gg();(oe!==e||de!==t)&&(It=null,xn(e,t));do try{J1();break}catch(i){Kg(e,i)}while(1);if(sc(),j=n,po.current=r,te!==null)throw Error(_(261));return oe=null,de=0,re}function J1(){for(;te!==null;)qg(te)}function Z1(){for(;te!==null&&!T0();)qg(te)}function qg(e){var t=Qg(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Xg(e):te=t,yc.current=null}function Xg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=K1(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=b1(n,t,Ue),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Tn(e,t,n){var r=z,i=Xe.transition;try{Xe.transition=null,z=1,ew(e,t,n,r)}finally{Xe.transition=i,z=r}return null}function ew(e,t,n,r){do pr();while(Qt!==null);if(j&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(L0(e,s),e===oe&&(te=oe=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ks||(ks=!0,Jg(Qs,function(){return pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=z;z=1;var l=j;j|=4,yc.current=null,q1(e,n),Hg(n,e),_1(Va),Zs=!!Ba,Va=Ba=null,e.current=n,X1(n),k0(),j=l,z=o,Xe.transition=s}else e.current=n;if(ks&&(ks=!1,Qt=e,mo=i),s=e.pendingLanes,s===0&&(sn=null),A0(n.stateNode),Le(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=au,au=null,e;return mo&1&&e.tag!==0&&pr(),s=e.pendingLanes,s&1?e===uu?li++:(li=0,uu=e):li=0,mn(),null}function pr(){if(Qt!==null){var e=Ap(mo),t=Xe.transition,n=z;try{if(Xe.transition=null,z=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,mo=0,j&6)throw Error(_(331));var i=j;for(j|=4,S=e.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var c=S;switch(c.tag){case 0:case 11:case 15:si(8,c,s)}var f=c.child;if(f!==null)f.return=c,S=f;else for(;S!==null;){c=S;var g=c.sibling,m=c.return;if(zg(c),c===u){S=null;break}if(g!==null){g.return=m,S=g;break}S=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:si(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,S=h;break e}S=s.return}}var d=e.current;for(S=d;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=d;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ko(9,l)}}catch(I){Q(l,l.return,I)}if(l===o){S=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,S=y;break e}S=l.return}}if(j=i,mn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{z=n,Xe.transition=t}}return!1}function Ah(e,t,n){t=kr(n,t),t=Rg(e,t,1),e=rn(e,t,1),t=Ce(),e!==null&&(Hi(e,1,t),Le(e,t))}function Q(e,t,n){if(e.tag===3)Ah(e,e,n);else for(;t!==null;){if(t.tag===3){Ah(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=kr(n,e),e=Ng(t,e,1),t=rn(t,e,1),e=Ce(),t!==null&&(Hi(t,1,e),Le(t,e));break}}t=t.return}}function tw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>Z()-_c?xn(e,0):wc|=n),Le(e,t)}function Yg(e,t){t===0&&(e.mode&1?(t=gs,gs<<=1,!(gs&130023424)&&(gs=4194304)):t=1);var n=Ce();e=Lt(e,t),e!==null&&(Hi(e,t,n),Le(e,n))}function nw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yg(e,n)}function rw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Yg(e,n)}var Qg;Qg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,W1(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,G&&t.flags&1048576&&eg(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zs(e,t),e=t.pendingProps;var i=Er(t,Ie.current);fr(t,n),i=fc(null,t,r,e,i,n);var s=pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(s=!0,io(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ac(t),i.updater=Wo,t.stateNode=i,i._reactInternals=t,Qa(t,r,e,n),t=eu(null,t,r,!0,s,n)):(t.tag=0,G&&s&&tc(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sw(r),e=it(r,e),i){case 0:t=Za(null,t,r,e,n);break e;case 1:t=yh(null,t,r,e,n);break e;case 11:t=mh(null,t,r,e,n);break e;case 14:t=vh(null,t,r,it(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Za(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),yh(e,t,r,i,n);case 3:e:{if(Lg(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ig(e,t),uo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=kr(Error(_(423)),t),t=wh(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(_(424)),t),t=wh(e,t,r,n,i);break e}else for(je=nn(t.stateNode.containerInfo.firstChild),ze=t,G=!0,ot=null,n=ag(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){t=Mt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return ug(t),e===null&&qa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ha(r,i)?o=null:s!==null&&Ha(r,s)&&(t.flags|=32),xg(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&qa(t),null;case 13:return Mg(e,t,n);case 4:return uc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),mh(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,V(lo,r._currentValue),r._currentValue=o,s!==null)if(ut(s.value,o)){if(s.children===i.children&&!De.current){t=Mt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Nt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xa(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fr(t,n),i=Ye(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),vh(e,t,r,i,n);case 15:return Og(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),zs(e,t),t.tag=1,xe(r)?(e=!0,io(t)):e=!1,fr(t,n),og(t,r,i),Qa(t,r,i,n),eu(null,t,r,!0,e,n);case 19:return $g(e,t,n);case 22:return Dg(e,t,n)}throw Error(_(156,t.tag))};function Jg(e,t){return Tp(e,t)}function iw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new iw(e,t,n,r)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sw(e){if(typeof e=="function")return Tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Wu)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Tc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qn:return Ln(n.children,i,s,t);case Vu:o=8,i|=8;break;case Ea:return e=qe(12,n,t,i|2),e.elementType=Ea,e.lanes=s,e;case Ia:return e=qe(13,n,t,i),e.elementType=Ia,e.lanes=s,e;case Sa:return e=qe(19,n,t,i),e.elementType=Sa,e.lanes=s,e;case lp:return qo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sp:o=10;break e;case op:o=9;break e;case Hu:o=11;break e;case Wu:o=14;break e;case Ht:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ln(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function qo(e,t,n,r){return e=qe(22,e,r,t),e.elementType=lp,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ow(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kc(e,t,n,r,i,s,o,l,a){return e=new ow(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(s),e}function lw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zg(e){if(!e)return dn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(xe(n))return Jp(e,n,t)}return t}function em(e,t,n,r,i,s,o,l,a){return e=kc(n,r,!0,e,i,s,o,l,a),e.context=Zg(null),n=e.current,r=Ce(),i=on(n),s=Nt(r,i),s.callback=t??null,rn(n,s,i),e.current.lanes=i,Hi(e,i,r),Le(e,r),e}function Xo(e,t,n,r){var i=t.current,s=Ce(),o=on(i);return n=Zg(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,o),e!==null&&(at(e,i,o,s),Us(e,i,o)),o}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cc(e,t){Rh(e,t),(e=e.alternate)&&Rh(e,t)}function aw(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pc(e){this._internalRoot=e}Yo.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Xo(e,t,null,null)};Yo.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){Xo(null,e,null,null)}),t[xt]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Op();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&xp(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nh(){}function uw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=yo(o);s.call(u)}}var o=em(t,r,e,0,null,!1,!1,"",Nh);return e._reactRootContainer=o,e[xt]=o.current,wi(e.nodeType===8?e.parentNode:e),Bn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=yo(a);l.call(u)}}var a=kc(e,0,!1,null,null,!1,!1,"",Nh);return e._reactRootContainer=a,e[xt]=a.current,wi(e.nodeType===8?e.parentNode:e),Bn(function(){Xo(t,a,n,r)}),a}function Jo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=yo(o);l.call(a)}}Xo(t,o,e,i)}else o=uw(n,t,e,i,r);return yo(o)}Rp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(Gu(t,n|1),Le(t,Z()),!(j&6)&&(Cr=Z()+500,mn()))}break;case 13:Bn(function(){var r=Lt(e,1);if(r!==null){var i=Ce();at(r,e,1,i)}}),Cc(e,1)}};qu=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Ce();at(t,e,134217728,n)}Cc(e,134217728)}};Np=function(e){if(e.tag===13){var t=on(e),n=Lt(e,t);if(n!==null){var r=Ce();at(n,e,t,r)}Cc(e,t)}};Op=function(){return z};Dp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};xa=function(e,t,n){switch(t){case"input":if(Ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vo(r);if(!i)throw Error(_(90));up(r),Ca(r,i)}}}break;case"textarea":dp(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};yp=Ec;wp=Bn;var cw={usingClientEntryPoint:!1,Events:[bi,tr,Vo,mp,vp,Ec]},Wr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dw={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ip(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{jo=Cs.inject(dw),mt=Cs}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(_(200));return lw(e,t,null,n)};He.createRoot=function(e,t){if(!Ac(e))throw Error(_(299));var n=!1,r="",i=tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=kc(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,wi(e.nodeType===8?e.parentNode:e),new Pc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ip(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Bn(e)};He.hydrate=function(e,t,n){if(!Qo(t))throw Error(_(200));return Jo(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Ac(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=em(t,null,e,1,n??null,i,!1,s,o),e[xt]=t.current,wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yo(t)};He.render=function(e,t,n){if(!Qo(t))throw Error(_(200));return Jo(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(_(40));return e._reactRootContainer?(Bn(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};He.unstable_batchedUpdates=Ec;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Jo(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm)}catch(e){console.error(e)}}nm(),ep.exports=He;var hw=ep.exports,Oh=hw;wa.createRoot=Oh.createRoot,wa.hydrateRoot=Oh.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var Jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jt||(Jt={}));const Dh="popstate";function fw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return hu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rm(i)}return gw(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pw(){return Math.random().toString(36).substr(2,8)}function xh(e,t){return{usr:e.state,key:e.key,idx:t}}function hu(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zo(t):t,{state:n,key:t&&t.key||r||pw()})}function rm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Jt.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(wo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){l=Jt.Pop;let R=c(),h=R==null?null:R-u;u=R,a&&a({action:l,location:w.location,delta:h})}function g(R,h){l=Jt.Push;let d=hu(w.location,R,h);n&&n(d,R),u=c()+1;let p=xh(d,u),y=w.createHref(d);try{o.pushState(p,"",y)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(y)}s&&a&&a({action:l,location:w.location,delta:1})}function m(R,h){l=Jt.Replace;let d=hu(w.location,R,h);n&&n(d,R),u=c();let p=xh(d,u),y=w.createHref(d);o.replaceState(p,"",y),s&&a&&a({action:l,location:w.location,delta:0})}function v(R){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof R=="string"?R:rm(R);return $e(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let w={get action(){return l},get location(){return e(i,o)},listen(R){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Dh,f),a=R,()=>{i.removeEventListener(Dh,f),a=null}},createHref(R){return t(i,R)},createURL:v,encodeLocation(R){let h=v(R);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:m,go(R){return o.go(R)}};return w}var Lh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lh||(Lh={}));function mw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zo(t):t,i=om(r.pathname||"/",n);if(i==null)return null;let s=im(e);vw(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=Cw(s[l],Rw(i));return o}function im(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&($e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=gr([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),im(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Tw(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of sm(s.path))i(s,o,a)}),t}function sm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=sm(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function vw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yw=/^:\w+$/,ww=3,_w=2,Ew=1,Iw=10,Sw=-2,Mh=e=>e==="*";function Tw(e,t){let n=e.split("/"),r=n.length;return n.some(Mh)&&(r+=Sw),t&&(r+=_w),n.filter(i=>!Mh(i)).reduce((i,s)=>i+(yw.test(s)?ww:s===""?Ew:Iw),r)}function kw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Cw(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Pw({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;s.push({params:r,pathname:gr([i,c.pathname]),pathnameBase:Ow(gr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=gr([i,c.pathnameBase]))}return s}function Pw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Aw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let g=l[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=Nw(l[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Aw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Rw(e){try{return decodeURI(e)}catch(t){return Rc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Nw(e,t){try{return decodeURIComponent(e)}catch(n){return Rc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function om(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const gr=e=>e.join("/").replace(/\/\/+/g,"/"),Ow=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function Dw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"];new Set(lm);const xw=["get",...lm];new Set(xw);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fu(){return fu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fu.apply(this,arguments)}const Lw=D.createContext(null),Mw=D.createContext(null),am=D.createContext(null),el=D.createContext(null),tl=D.createContext({outlet:null,matches:[],isDataRoute:!1}),um=D.createContext(null);function Nc(){return D.useContext(el)!=null}function $w(){return Nc()||$e(!1),D.useContext(el).location}function Uw(e,t){return jw(e,t)}function jw(e,t,n){Nc()||$e(!1);let{navigator:r}=D.useContext(am),{matches:i}=D.useContext(tl),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=$w(),u;if(t){var c;let w=typeof t=="string"?Zo(t):t;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||$e(!1),u=w}else u=a;let f=u.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",m=mw(e,{pathname:g}),v=Hw(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:gr([l,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:gr([l,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&v?D.createElement(el.Provider,{value:{location:fu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Jt.Pop}},v):v}function Fw(){let e=Gw(),t=Dw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),n?D.createElement("pre",{style:i},n):null,s)}const zw=D.createElement(Fw,null);class Bw extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?D.createElement(tl.Provider,{value:this.props.routeContext},D.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vw(e){let{routeContext:t,match:n,children:r}=e,i=D.useContext(Lw);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(tl.Provider,{value:t},r)}function Hw(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||$e(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,f=null;n&&(f=a.route.errorElement||zw);let g=t.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=f:a.route.Component?v=D.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,D.createElement(Vw,{match:a,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?D.createElement(Bw,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var pu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pu||{});function Ww(e){let t=D.useContext(Mw);return t||$e(!1),t}function bw(e){let t=D.useContext(tl);return t||$e(!1),t}function Kw(e){let t=bw(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function Gw(){var e;let t=D.useContext(um),n=Ww(pu.UseRouteError),r=Kw(pu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function cm(e){$e(!1)}function qw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Jt.Pop,navigator:s,static:o=!1}=e;Nc()&&$e(!1);let l=t.replace(/^\/*/,"/"),a=D.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Zo(r));let{pathname:u="/",search:c="",hash:f="",state:g=null,key:m="default"}=r,v=D.useMemo(()=>{let w=om(u,l);return w==null?null:{location:{pathname:w,search:c,hash:f,state:g,key:m},navigationType:i}},[l,u,c,f,g,m,i]);return v==null?null:D.createElement(am.Provider,{value:a},D.createElement(el.Provider,{children:n,value:v}))}function Xw(e){let{children:t,location:n}=e;return Uw(gu(t),n)}new Promise(()=>{});function gu(e,t){t===void 0&&(t=[]);let n=[];return D.Children.forEach(e,(r,i)=>{if(!D.isValidElement(r))return;let s=[...t,i];if(r.type===D.Fragment){n.push.apply(n,gu(r.props.children,s));return}r.type!==cm&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Yw="startTransition",$h=n0[Yw];function Qw(e){let{basename:t,children:n,future:r,window:i}=e,s=D.useRef();s.current==null&&(s.current=fw({window:i,v5Compat:!0}));let o=s.current,[l,a]=D.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=D.useCallback(f=>{u&&$h?$h(()=>a(f)):a(f)},[a,u]);return D.useLayoutEffect(()=>o.listen(c),[o,c]),D.createElement(qw,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}var Uh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Uh||(Uh={}));var jh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jh||(jh={}));const Jw="/DisneyplusClone/assets/cta-logo-one-73855ecd.svg",Zw="/DisneyplusClone/assets/cta-logo-two-8349a1f6.png",e_=()=>k.jsx("div",{className:"login-page",children:k.jsxs("div",{className:"flex flex-col items-center justify-center h-screen",children:[k.jsx("div",{className:"CTA-logo-one pb-5",children:k.jsx("img",{src:Jw,alt:""})}),k.jsx("h1",{className:"text-2xl md:text-5xl font-bold text-center pb-3",children:"Nouvelles productions originales, grands films, séries incontournables et encore + en streaming"}),k.jsx("p",{className:"mb-5",children:"Sans coût additionnel. Sans engagement.*"}),k.jsx("div",{className:"signup-button mb-5",children:k.jsx("a",{href:"",className:"p-4 px-24",children:k.jsx("span",{className:"text-xl",children:"S'incrire"})})}),k.jsx("p",{className:"mb-6 text-center",children:"Profitez de 12 mois au prix de 10 avec un abonnement annuel. Économies par rapport à un an d'abonnement mensuel."}),k.jsx("div",{className:"CTA-logo-two pb-5 flex items-center justify-center",children:k.jsx("img",{src:Zw,alt:""})})]})}),t_="/DisneyplusClone/assets/logo-6839fb08.png",n_="/DisneyplusClone/assets/home-icon-d79d4c9d.svg",r_="/DisneyplusClone/assets/search-icon-85588ffe.svg",i_="/DisneyplusClone/assets/watchlist-icon-0c8fcc67.svg",s_="/DisneyplusClone/assets/original-icon-9ff55255.svg",o_="/DisneyplusClone/assets/movie-icon-5f606aca.svg",l_="/DisneyplusClone/assets/series-icon-786e0d5a.svg";/**
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
 *//**
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
 */const dm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},a_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,c=s>>2,f=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(g=64)),r.push(n[c],n[f],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw new u_;const g=s<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class u_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c_=function(e){const t=dm(e);return hm.encodeByteArray(t,!0)},_o=function(e){return c_(e).replace(/\./g,"")},fm=function(e){try{return hm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Eo(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!d_(n)||(e[n]=Eo(e[n],t[n]));return e}function d_(e){return e!=="__proto__"}/**
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
 */function h_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const f_=()=>h_().__FIREBASE_DEFAULTS__,p_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},g_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&fm(e[1]);return t&&JSON.parse(t)},Oc=()=>{try{return f_()||p_()||g_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pm=e=>{var t,n;return(n=(t=Oc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},m_=e=>{const t=pm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},gm=()=>{var e;return(e=Oc())===null||e===void 0?void 0:e.config},mm=e=>{var t;return(t=Oc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class v_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function y_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[_o(JSON.stringify(n)),_o(JSON.stringify(o)),l].join(".")}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function __(){return typeof self=="object"&&self.self===self}function vm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function E_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I_(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ym(){try{return typeof indexedDB=="object"}catch{return!1}}function wm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function S_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const T_="FirebaseError";class tt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=T_,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}}class Ft{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?k_(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new tt(i,l,r)}}function k_(e,t){return e.replace(C_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const C_=/\{\$([^}]+)}/g;/**
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
 */function Fh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function P_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ai(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(zh(s)&&zh(o)){if(!Ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zh(e){return e!==null&&typeof e=="object"}/**
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
 */function Gi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _m(e,t){const n=new A_(e,t);return n.subscribe.bind(n)}class A_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");R_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ea),i.error===void 0&&(i.error=ea),i.complete===void 0&&(i.complete=ea);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ea(){}/**
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
 */const N_=1e3,O_=2,D_=4*60*60*1e3,x_=.5;function Bh(e,t=N_,n=O_){const r=t*Math.pow(n,e),i=Math.round(x_*r*(Math.random()-.5)*2);return Math.min(D_,r+i)}/**
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
 */function vn(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class L_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new v_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($_(t))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kn){return this.instances.has(t)}getOptions(t=kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kn){return this.component?this.component.multipleInstances?t:kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M_(e){return e===kn?void 0:e}function $_(e){return e.instantiationMode==="EAGER"}/**
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
 */class U_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new L_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Dc=[];var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Em={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},j_=F.INFO,F_={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},z_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=F_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qi{constructor(t){this.name=t,this._logLevel=j_,this._logHandler=z_,this._userLogHandler=null,Dc.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Em[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}function B_(e){Dc.forEach(t=>{t.setLogLevel(e)})}function V_(e,t){for(const n of Dc){let r=null;t&&t.level&&(r=Em[t.level]),e===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(a=>{if(a==null)return null;if(typeof a=="string")return a;if(typeof a=="number"||typeof a=="boolean")return a.toString();if(a instanceof Error)return a.message;try{return JSON.stringify(a)}catch{return null}}).filter(a=>a).join(" ");s>=(r??i.logLevel)&&e({level:F[s].toLowerCase(),message:l,args:o,type:i.name})}}}const H_=(e,t)=>t.some(n=>e instanceof n);let Vh,Hh;function W_(){return Vh||(Vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b_(){return Hh||(Hh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Im=new WeakMap,mu=new WeakMap,Sm=new WeakMap,ta=new WeakMap,xc=new WeakMap;function K_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(an(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Im.set(n,e)}).catch(()=>{}),xc.set(t,e),t}function G_(e){if(mu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});mu.set(e,t)}let vu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return mu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function q_(e){vu=e(vu)}function X_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(na(this),t,...n);return Sm.set(r,t.sort?t.sort():[t]),an(r)}:b_().includes(e)?function(...t){return e.apply(na(this),t),an(Im.get(this))}:function(...t){return an(e.apply(na(this),t))}}function Y_(e){return typeof e=="function"?X_(e):(e instanceof IDBTransaction&&G_(e),H_(e,W_())?new Proxy(e,vu):e)}function an(e){if(e instanceof IDBRequest)return K_(e);if(ta.has(e))return ta.get(e);const t=Y_(e);return t!==e&&(ta.set(e,t),xc.set(t,e)),t}const na=e=>xc.get(e);function Q_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=an(o);return r&&o.addEventListener("upgradeneeded",a=>{r(an(o.result),a.oldVersion,a.newVersion,an(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const J_=["get","getKey","getAll","getAllKeys","count"],Z_=["put","add","delete","clear"],ra=new Map;function Wh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ra.get(t))return ra.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Z_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||J_.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ra.set(t,s),s}q_(e=>({...e,get:(t,n,r)=>Wh(t,n)||e.get(t,n,r),has:(t,n)=>!!Wh(t,n)||e.has(t,n)}));/**
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
 */class eE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const yu="@firebase/app",bh="0.9.16";/**
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
 */const Vn=new qi("@firebase/app"),nE="@firebase/app-compat",rE="@firebase/analytics-compat",iE="@firebase/analytics",sE="@firebase/app-check-compat",oE="@firebase/app-check",lE="@firebase/auth",aE="@firebase/auth-compat",uE="@firebase/database",cE="@firebase/database-compat",dE="@firebase/functions",hE="@firebase/functions-compat",fE="@firebase/installations",pE="@firebase/installations-compat",gE="@firebase/messaging",mE="@firebase/messaging-compat",vE="@firebase/performance",yE="@firebase/performance-compat",wE="@firebase/remote-config",_E="@firebase/remote-config-compat",EE="@firebase/storage",IE="@firebase/storage-compat",SE="@firebase/firestore",TE="@firebase/firestore-compat",kE="firebase",CE="10.2.0";/**
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
 */const hn="[DEFAULT]",PE={[yu]:"fire-core",[nE]:"fire-core-compat",[iE]:"fire-analytics",[rE]:"fire-analytics-compat",[oE]:"fire-app-check",[sE]:"fire-app-check-compat",[lE]:"fire-auth",[aE]:"fire-auth-compat",[uE]:"fire-rtdb",[cE]:"fire-rtdb-compat",[dE]:"fire-fn",[hE]:"fire-fn-compat",[fE]:"fire-iid",[pE]:"fire-iid-compat",[gE]:"fire-fcm",[mE]:"fire-fcm-compat",[vE]:"fire-perf",[yE]:"fire-perf-compat",[wE]:"fire-rc",[_E]:"fire-rc-compat",[EE]:"fire-gcs",[IE]:"fire-gcs-compat",[SE]:"fire-fst",[TE]:"fire-fst-compat","fire-js":"fire-js",[kE]:"fire-js-all"};/**
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
 */const fn=new Map,Ri=new Map;function Io(e,t){try{e.container.addComponent(t)}catch(n){Vn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tm(e,t){e.container.addOrOverwriteComponent(t)}function Ze(e){const t=e.name;if(Ri.has(t))return Vn.debug(`There were multiple attempts to register component ${t}.`),!1;Ri.set(t,e);for(const n of fn.values())Io(n,e);return!0}function zt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function AE(e,t,n=hn){zt(e,t).clearInstance(n)}function RE(){Ri.clear()}/**
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
 */const NE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Ft("app","Firebase",NE);/**
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
 */let OE=class{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}};/**
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
 */const yn=CE;function nl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:hn,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ot.create("bad-app-name",{appName:String(i)});if(n||(n=gm()),!n)throw Ot.create("no-options");const s=fn.get(i);if(s){if(Ai(n,s.options)&&Ai(r,s.config))return s;throw Ot.create("duplicate-app",{appName:i})}const o=new U_(i);for(const a of Ri.values())o.addComponent(a);const l=new OE(n,r,o);return fn.set(i,l),l}function rl(e=hn){const t=fn.get(e);if(!t&&e===hn&&gm())return nl();if(!t)throw Ot.create("no-app",{appName:e});return t}function DE(){return Array.from(fn.values())}async function km(e){const t=e.name;fn.has(t)&&(fn.delete(t),await Promise.all(e.container.getProviders().map(n=>n.delete())),e.isDeleted=!0)}function Pe(e,t,n){var r;let i=(r=PE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}Ze(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function Cm(e,t){if(e!==null&&typeof e!="function")throw Ot.create("invalid-log-argument");V_(e,t)}function Pm(e){B_(e)}/**
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
 */const xE="firebase-heartbeat-database",LE=1,Ni="firebase-heartbeat-store";let ia=null;function Am(){return ia||(ia=Q_(xE,LE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ni)}}}).catch(e=>{throw Ot.create("idb-open",{originalErrorMessage:e.message})})),ia}async function ME(e){try{return await(await Am()).transaction(Ni).objectStore(Ni).get(Rm(e))}catch(t){if(t instanceof tt)Vn.warn(t.message);else{const n=Ot.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(n.message)}}}async function Kh(e,t){try{const r=(await Am()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(t,Rm(e)),await r.done}catch(n){if(n instanceof tt)Vn.warn(n.message);else{const r=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function Rm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const $E=1024,UE=30*24*60*60*1e3;class jE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=UE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gh(),{heartbeatsToSend:n,unsentEntries:r}=FE(this._heartbeatsCache.heartbeats),i=_o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gh(){return new Date().toISOString().substring(0,10)}function FE(e,t=$E){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ym()?wm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ME(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qh(e){return _o(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function BE(e){Ze(new Je("platform-logger",t=>new eE(t),"PRIVATE")),Ze(new Je("heartbeat",t=>new jE(t),"PRIVATE")),Pe(yu,bh,e),Pe(yu,bh,"esm2017"),Pe("fire-js","")}BE("");const VE=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:tt,SDK_VERSION:yn,_DEFAULT_ENTRY_NAME:hn,_addComponent:Io,_addOrOverwriteComponent:Tm,_apps:fn,_clearComponents:RE,_components:Ri,_getProvider:zt,_registerComponent:Ze,_removeServiceInstance:AE,deleteApp:km,getApp:rl,getApps:DE,initializeApp:nl,onLog:Cm,registerVersion:Pe,setLogLevel:Pm},Symbol.toStringTag,{value:"Module"}));var HE="firebase",WE="10.2.0";/**
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
 */Pe(HE,WE,"app");const bE=(e,t)=>t.some(n=>e instanceof n);let Xh,Yh;function KE(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GE(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nm=new WeakMap,wu=new WeakMap,Om=new WeakMap,sa=new WeakMap,Lc=new WeakMap;function qE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(un(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Nm.set(n,e)}).catch(()=>{}),Lc.set(t,e),t}function XE(e){if(wu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});wu.set(e,t)}let _u={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Om.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function YE(e){_u=e(_u)}function QE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(oa(this),t,...n);return Om.set(r,t.sort?t.sort():[t]),un(r)}:GE().includes(e)?function(...t){return e.apply(oa(this),t),un(Nm.get(this))}:function(...t){return un(e.apply(oa(this),t))}}function JE(e){return typeof e=="function"?QE(e):(e instanceof IDBTransaction&&XE(e),bE(e,KE())?new Proxy(e,_u):e)}function un(e){if(e instanceof IDBRequest)return qE(e);if(sa.has(e))return sa.get(e);const t=JE(e);return t!==e&&(sa.set(e,t),Lc.set(t,e)),t}const oa=e=>Lc.get(e);function ZE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=un(o);return r&&o.addEventListener("upgradeneeded",a=>{r(un(o.result),a.oldVersion,a.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const eI=["get","getKey","getAll","getAllKeys","count"],tI=["put","add","delete","clear"],la=new Map;function Qh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(la.get(t))return la.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=tI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return la.set(t,s),s}YE(e=>({...e,get:(t,n,r)=>Qh(t,n)||e.get(t,n,r),has:(t,n)=>!!Qh(t,n)||e.has(t,n)}));const Dm="@firebase/installations",Mc="0.6.4";/**
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
 */const xm=1e4,Lm=`w:${Mc}`,Mm="FIS_v2",nI="https://firebaseinstallations.googleapis.com/v1",rI=60*60*1e3,iI="installations",sI="Installations";/**
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
 */const oI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hn=new Ft(iI,sI,oI);function $m(e){return e instanceof tt&&e.code.includes("request-failed")}/**
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
 */function Um({projectId:e}){return`${nI}/projects/${e}/installations`}function jm(e){return{token:e.token,requestStatus:2,expiresIn:aI(e.expiresIn),creationTime:Date.now()}}async function Fm(e,t){const r=(await t.json()).error;return Hn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function lI(e,{refreshToken:t}){const n=zm(e);return n.append("Authorization",uI(t)),n}async function Bm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function aI(e){return Number(e.replace("s","000"))}function uI(e){return`${Mm} ${e}`}/**
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
 */async function cI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Um(e),i=zm(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Mm,appId:e.appId,sdkVersion:Lm},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Bm(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:jm(u.authToken)}}else throw await Fm("Create Installation",a)}/**
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
 */function Vm(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function dI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const hI=/^[cdef][\w-]{21}$/,Eu="";function fI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=pI(e);return hI.test(n)?n:Eu}catch{return Eu}}function pI(e){return dI(e).substr(0,22)}/**
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
 */function il(e){return`${e.appName}!${e.appId}`}/**
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
 */const Hm=new Map;function Wm(e,t){const n=il(e);bm(n,t),gI(n,t)}function bm(e,t){const n=Hm.get(e);if(n)for(const r of n)r(t)}function gI(e,t){const n=mI();n&&n.postMessage({key:e,fid:t}),vI()}let Rn=null;function mI(){return!Rn&&"BroadcastChannel"in self&&(Rn=new BroadcastChannel("[Firebase] FID Change"),Rn.onmessage=e=>{bm(e.data.key,e.data.fid)}),Rn}function vI(){Hm.size===0&&Rn&&(Rn.close(),Rn=null)}/**
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
 */const yI="firebase-installations-database",wI=1,Wn="firebase-installations-store";let aa=null;function $c(){return aa||(aa=ZE(yI,wI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wn)}}})),aa}async function So(e,t){const n=il(e),i=(await $c()).transaction(Wn,"readwrite"),s=i.objectStore(Wn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Wm(e,t.fid),t}async function Km(e){const t=il(e),r=(await $c()).transaction(Wn,"readwrite");await r.objectStore(Wn).delete(t),await r.done}async function sl(e,t){const n=il(e),i=(await $c()).transaction(Wn,"readwrite"),s=i.objectStore(Wn),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Wm(e,l.fid),l}/**
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
 */async function Uc(e){let t;const n=await sl(e.appConfig,r=>{const i=_I(r),s=EI(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Eu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function _I(e){const t=e||{fid:fI(),registrationStatus:0};return Gm(t)}function EI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Hn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=II(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:SI(e)}:{installationEntry:t}}async function II(e,t){try{const n=await cI(e,t);return So(e.appConfig,n)}catch(n){throw $m(n)&&n.customData.serverCode===409?await Km(e.appConfig):await So(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function SI(e){let t=await Jh(e.appConfig);for(;t.registrationStatus===1;)await Vm(100),t=await Jh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Uc(e);return r||n}return t}function Jh(e){return sl(e,t=>{if(!t)throw Hn.create("installation-not-found");return Gm(t)})}function Gm(e){return TI(e)?{fid:e.fid,registrationStatus:0}:e}function TI(e){return e.registrationStatus===1&&e.registrationTime+xm<Date.now()}/**
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
 */async function kI({appConfig:e,heartbeatServiceProvider:t},n){const r=CI(e,n),i=lI(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Lm,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Bm(()=>fetch(r,l));if(a.ok){const u=await a.json();return jm(u)}else throw await Fm("Generate Auth Token",a)}function CI(e,{fid:t}){return`${Um(e)}/${t}/authTokens:generate`}/**
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
 */async function jc(e,t=!1){let n;const r=await sl(e.appConfig,s=>{if(!qm(s))throw Hn.create("not-registered");const o=s.authToken;if(!t&&RI(o))return s;if(o.requestStatus===1)return n=PI(e,t),s;{if(!navigator.onLine)throw Hn.create("app-offline");const l=OI(s);return n=AI(e,l),l}});return n?await n:r.authToken}async function PI(e,t){let n=await Zh(e.appConfig);for(;n.authToken.requestStatus===1;)await Vm(100),n=await Zh(e.appConfig);const r=n.authToken;return r.requestStatus===0?jc(e,t):r}function Zh(e){return sl(e,t=>{if(!qm(t))throw Hn.create("not-registered");const n=t.authToken;return DI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function AI(e,t){try{const n=await kI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await So(e.appConfig,r),n}catch(n){if($m(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Km(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await So(e.appConfig,r)}throw n}}function qm(e){return e!==void 0&&e.registrationStatus===2}function RI(e){return e.requestStatus===2&&!NI(e)}function NI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+rI}function OI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function DI(e){return e.requestStatus===1&&e.requestTime+xm<Date.now()}/**
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
 */async function xI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Uc(t);return r?r.catch(console.error):jc(t).catch(console.error),n.fid}/**
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
 */async function LI(e,t=!1){const n=e;return await MI(n),(await jc(n,t)).token}async function MI(e){const{registrationPromise:t}=await Uc(e);t&&await t}/**
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
 */function $I(e){if(!e||!e.options)throw ua("App Configuration");if(!e.name)throw ua("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ua(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ua(e){return Hn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Xm="installations",UI="installations-internal",jI=e=>{const t=e.getProvider("app").getImmediate(),n=$I(t),r=zt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},FI=e=>{const t=e.getProvider("app").getImmediate(),n=zt(t,Xm).getImmediate();return{getId:()=>xI(n),getToken:i=>LI(n,i)}};function zI(){Ze(new Je(Xm,jI,"PUBLIC")),Ze(new Je(UI,FI,"PRIVATE"))}zI();Pe(Dm,Mc);Pe(Dm,Mc,"esm2017");/**
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
 */const To="analytics",BI="firebase_id",VI="origin",HI=60*1e3,WI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Me=new qi("@firebase/analytics");/**
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
 */const bI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new Ft("analytics","Analytics",bI);/**
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
 */function KI(e){if(!e.startsWith(Fc)){const t=Be.create("invalid-gtag-resource",{gtagURL:e});return Me.warn(t.message),""}return e}function Ym(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function GI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function qI(e,t){const n=GI("firebase-js-sdk-policy",{createScriptURL:KI}),r=document.createElement("script"),i=`${Fc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function XI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function YI(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await Ym(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Me.error(l)}e("config",i,s)}async function QI(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Ym(n);for(const a of o){const u=l.find(f=>f.measurementId===a),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Me.error(s)}}function JI(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await QI(e,t,n,l,a)}else if(s==="config"){const[l,a]=o;await YI(e,t,n,r,l,a)}else if(s==="consent"){const[l]=o;e("consent","update",l)}else if(s==="get"){const[l,a,u]=o;e("get",l,a,u)}else if(s==="set"){const[l]=o;e("set",l)}else e(s,...o)}catch(l){Me.error(l)}}return i}function ZI(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=JI(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function eS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Fc)&&n.src.includes(e))return n;return null}/**
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
 */const tS=30,nS=1e3;class rS{constructor(t={},n=nS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Qm=new rS;function iS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function sS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:iS(r)},s=WI.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function oS(e,t=Qm,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Be.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new uS;return setTimeout(async()=>{l.abort()},n!==void 0?n:HI),Jm({appId:r,apiKey:i,measurementId:s},o,l,t)}async function Jm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Qm){var s;const{appId:o,measurementId:l}=e;try{await lS(r,t)}catch(a){if(l)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await sS(e);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!aS(u)){if(i.deleteThrottleMetadata(o),l)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Bh(n,i.intervalMillis,tS):Bh(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Me.debug(`Calling attemptFetch again in ${c} millis`),Jm(e,f,r,i)}}function lS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function aS(e){if(!(e instanceof tt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class uS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function cS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function dS(){if(ym())try{await wm()}catch(e){return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hS(e,t,n,r,i,s,o){var l;const a=oS(e);a.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Me.error(m)),t.push(a);const u=dS().then(m=>{if(m)return r.getId()}),[c,f]=await Promise.all([a,u]);eS(s)||qI(s,c.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[VI]="firebase",g.update=!0,f!=null&&(g[BI]=f),i("config",c.measurementId,g),c.measurementId}/**
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
 */class fS{constructor(t){this.app=t}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},ef=[];const tf={};let ca="dataLayer",pS="gtag",nf,Zm,rf=!1;function gS(){const e=[];if(vm()&&e.push("This is a browser extension environment."),S_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});Me.warn(n.message)}}function mS(e,t,n){gS();const r=e.options.appId;if(!r)throw Be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(ai[r]!=null)throw Be.create("already-exists",{id:r});if(!rf){XI(ca);const{wrappedGtag:s,gtagCore:o}=ZI(ai,ef,tf,ca,pS);Zm=s,nf=o,rf=!0}return ai[r]=hS(e,ef,tf,t,nf,ca,n),new fS(e)}function vS(e=rl()){e=vn(e);const t=zt(e,To);return t.isInitialized()?t.getImmediate():yS(e)}function yS(e,t={}){const n=zt(e,To);if(n.isInitialized()){const i=n.getImmediate();if(Ai(t,n.getOptions()))return i;throw Be.create("already-initialized")}return n.initialize({options:t})}function wS(e,t,n,r){e=vn(e),cS(Zm,ai[e.app.options.appId],t,n,r).catch(i=>Me.error(i))}const sf="@firebase/analytics",of="0.10.0";function _S(){Ze(new Je(To,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return mS(r,i,n)},"PUBLIC")),Ze(new Je("analytics-internal",e,"PRIVATE")),Pe(sf,of),Pe(sf,of,"esm2017");function e(t){try{const n=t.getProvider(To).getImmediate();return{logEvent:(r,i,s)=>wS(n,r,i,s)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}_S();var ES=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,zc=zc||{},N=ES||self;function ol(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Xi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function IS(e){return Object.prototype.hasOwnProperty.call(e,da)&&e[da]||(e[da]=++SS)}var da="closure_uid_"+(1e9*Math.random()>>>0),SS=0;function TS(e,t,n){return e.call.apply(e.bind,arguments)}function kS(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function _e(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=TS:_e=kS,_e.apply(null,arguments)}function Ps(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ae(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(r,o)}}function wn(){this.s=this.s,this.o=this.o}var CS=0;wn.prototype.s=!1;wn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),CS!=0)&&IS(this)};wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ev=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Bc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function lf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ol(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ee(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var PS=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{N.addEventListener("test",()=>{},t),N.removeEventListener("test",()=>{},t)}catch{}return e}();function Oi(e){return/^[\s\xa0]*$/.test(e)}function ll(){var e=N.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return ll().indexOf(e)!=-1}function Vc(e){return Vc[" "](e),e}Vc[" "]=function(){};function AS(e,t){var n=ET;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var RS=ft("Opera"),Di=ft("Trident")||ft("MSIE"),tv=ft("Edge"),Iu=tv||Di,nv=ft("Gecko")&&!(ll().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),NS=ll().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function rv(){var e=N.document;return e?e.documentMode:void 0}e:{var af="",ha=function(){var e=ll();if(nv)return/rv:([^\);]+)(\)|;)/.exec(e);if(tv)return/Edge\/([\d\.]+)/.exec(e);if(Di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(NS)return/WebKit\/(\S+)/.exec(e);if(RS)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ha&&(af=ha?ha[1]:""),Di){var uf=rv();if(uf!=null&&uf>parseFloat(af))break e}}N.document&&Di&&rv();function xi(e,t){if(Ee.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(nv){e:{try{Vc(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:OS[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xi.$.h.call(this)}}ae(xi,Ee);var OS={2:"touch",3:"pen",4:"mouse"};xi.prototype.h=function(){xi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Yi="closure_listenable_"+(1e6*Math.random()|0),DS=0;function xS(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++DS,this.fa=this.ia=!1}function al(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Hc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function LS(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function iv(e){const t={};for(const n in e)t[n]=e[n];return t}const cf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<cf.length;s++)n=cf[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ul(e){this.src=e,this.g={},this.h=0}ul.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Tu(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new xS(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Su(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=ev(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(al(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Tu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Wc="closure_lm_"+(1e6*Math.random()|0),fa={};function ov(e,t,n,r,i){if(r&&r.once)return av(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ov(e,t[s],n,r,i);return null}return n=Gc(n),e&&e[Yi]?e.O(t,n,Xi(r)?!!r.capture:!!r,i):lv(e,t,n,!1,r,i)}function lv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Xi(i)?!!i.capture:!!i,l=Kc(e);if(l||(e[Wc]=l=new ul(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=MS(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)PS||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(cv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MS(){function e(n){return t.call(e.src,e.listener,n)}const t=$S;return e}function av(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)av(e,t[s],n,r,i);return null}return n=Gc(n),e&&e[Yi]?e.P(t,n,Xi(r)?!!r.capture:!!r,i):lv(e,t,n,!0,r,i)}function uv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)uv(e,t[s],n,r,i);else r=Xi(r)?!!r.capture:!!r,n=Gc(n),e&&e[Yi]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Tu(s,n,r,i),-1<n&&(al(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Kc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Tu(t,n,r,i)),(n=-1<e?t[e]:null)&&bc(n))}function bc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Yi])Su(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(cv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Kc(t))?(Su(n,e),n.h==0&&(n.src=null,t[Wc]=null)):al(e)}}}function cv(e){return e in fa?fa[e]:fa[e]="on"+e}function $S(e,t){if(e.fa)e=!0;else{t=new xi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&bc(e),e=n.call(r,t)}return e}function Kc(e){return e=e[Wc],e instanceof ul?e:null}var pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gc(e){return typeof e=="function"?e:(e[pa]||(e[pa]=function(t){return e.handleEvent(t)}),e[pa])}function le(){wn.call(this),this.i=new ul(this),this.S=this,this.J=null}ae(le,wn);le.prototype[Yi]=!0;le.prototype.removeEventListener=function(e,t,n,r){uv(this,e,t,n,r)};function he(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ee(t,e);else if(t instanceof Ee)t.target=t.target||e;else{var i=t;t=new Ee(r,e),sv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=As(o,r,!0,t)&&i}if(o=t.g=e,i=As(o,r,!0,t)&&i,i=As(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=As(o,r,!1,t)&&i}le.prototype.N=function(){if(le.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)al(n[r]);delete e.g[t],e.h--}}this.J=null};le.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};le.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function As(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Su(e.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var qc=N.JSON.stringify;class US{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function jS(){var e=Xc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class FS{constructor(){this.h=this.g=null}add(t,n){const r=dv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dv=new US(()=>new zS,e=>e.reset());class zS{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BS(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function VS(e){N.setTimeout(()=>{throw e},0)}let Li,Mi=!1,Xc=new FS,hv=()=>{const e=N.Promise.resolve(void 0);Li=()=>{e.then(HS)}};var HS=()=>{for(var e;e=jS();){try{e.h.call(e.g)}catch(n){VS(n)}var t=dv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Mi=!1};function cl(e,t){le.call(this),this.h=e||1,this.g=t||N,this.j=_e(this.qb,this),this.l=Date.now()}ae(cl,le);E=cl.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),he(this,"tick"),this.ga&&(Yc(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}E.N=function(){cl.$.N.call(this),Yc(this),delete this.g};function Qc(e,t,n){if(typeof e=="function")n&&(e=_e(e,n));else if(e&&typeof e.handleEvent=="function")e=_e(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:N.setTimeout(e,t||0)}function fv(e){e.g=Qc(()=>{e.g=null,e.i&&(e.i=!1,fv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class WS extends wn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:fv(this)}N(){super.N(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(e){wn.call(this),this.h=e,this.g={}}ae($i,wn);var df=[];function pv(e,t,n,r){Array.isArray(n)||(n&&(df[0]=n.toString()),n=df);for(var i=0;i<n.length;i++){var s=ov(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function gv(e){Hc(e.g,function(t,n){this.g.hasOwnProperty(n)&&bc(t)},e),e.g={}}$i.prototype.N=function(){$i.$.N.call(this),gv(this)};$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dl(){this.g=!0}dl.prototype.Ea=function(){this.g=!1};function bS(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function KS(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ar(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+qS(e,n)+(r?" "+r:"")})}function GS(e,t){e.info(function(){return"TIMEOUT: "+t})}dl.prototype.info=function(){};function qS(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return qc(n)}catch{return t}}var Dr={},hf=null;function Jc(){return hf=hf||new le}Dr.Ta="serverreachability";function mv(e){Ee.call(this,Dr.Ta,e)}ae(mv,Ee);function Ui(e){const t=Jc();he(t,new mv(t))}Dr.STAT_EVENT="statevent";function vv(e,t){Ee.call(this,Dr.STAT_EVENT,e),this.stat=t}ae(vv,Ee);function ke(e){const t=Jc();he(t,new vv(t,e))}Dr.Ua="timingevent";function yv(e,t){Ee.call(this,Dr.Ua,e),this.size=t}ae(yv,Ee);function Qi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){e()},t)}var Zc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},XS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ed(){}ed.prototype.h=null;function ff(e){return e.h||(e.h=e.i())}function YS(){}var Ji={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function td(){Ee.call(this,"d")}ae(td,Ee);function nd(){Ee.call(this,"c")}ae(nd,Ee);var ku;function hl(){}ae(hl,ed);hl.prototype.g=function(){return new XMLHttpRequest};hl.prototype.i=function(){return{}};ku=new hl;function Zi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new $i(this),this.P=QS,e=Iu?125:void 0,this.V=new cl(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wv}function wv(){this.i=null,this.g="",this.h=!1}var QS=45e3,Cu={},ko={};E=Zi.prototype;E.setTimeout=function(e){this.P=e};function Pu(e,t,n){e.L=1,e.v=pl($t(t)),e.s=n,e.S=!0,_v(e,null)}function _v(e,t){e.G=Date.now(),es(e),e.A=$t(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Av(n.i,"t",r),e.C=0,n=e.l.J,e.h=new wv,e.g=Xv(e.l,n?t:null,!e.s),0<e.O&&(e.M=new WS(_e(e.Pa,e,e.g),e.O)),pv(e.U,e.g,"readystatechange",e.nb),t=e.I?iv(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ui(),bS(e.j,e.u,e.A,e.m,e.W,e.s)}E.nb=function(e){e=e.target;const t=this.M;t&&pt(e)==3?t.l():this.Pa(e)};E.Pa=function(e){try{if(e==this.g)e:{const c=pt(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Iu||this.g&&(this.h.h||this.g.ja()||vf(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?Ui(3):Ui(2)),fl(this);var n=this.g.da();this.ca=n;t:if(Ev(this)){var r=vf(this.g);e="";var i=r.length,s=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),ui(this);var o="";break t}this.h.i=new N.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,KS(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oi(l)){var u=l;break t}}u=null}if(n=u)ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Au(this,n);else{this.i=!1,this.o=3,ke(12),Nn(this),ui(this);break e}}this.S?(Iv(this,c,o),Iu&&this.i&&c==3&&(pv(this.U,this.V,"tick",this.mb),this.V.start())):(ar(this.j,this.m,o,null),Au(this,o)),c==4&&Nn(this),this.i&&!this.J&&(c==4?bv(this.l,this):(this.i=!1,es(this)))}else yT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ke(12)):(this.o=0,ke(13)),Nn(this),ui(this)}}}catch{}finally{}};function Ev(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Iv(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=JS(e,n),i==ko){t==4&&(e.o=4,ke(14),r=!1),ar(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Cu){e.o=4,ke(15),ar(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ar(e.j,e.m,i,null),Au(e,i);Ev(e)&&i!=ko&&i!=Cu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ke(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ad(t),t.M=!0,ke(11))):(ar(e.j,e.m,n,"[Invalid Chunked Response]"),Nn(e),ui(e))}E.mb=function(){if(this.g){var e=pt(this.g),t=this.g.ja();this.C<t.length&&(fl(this),Iv(this,e,t),this.i&&e!=4&&es(this))}};function JS(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?ko:(n=Number(t.substring(n,r)),isNaN(n)?Cu:(r+=1,r+n>t.length?ko:(t=t.slice(r,r+n),e.C=r+n,t)))}E.cancel=function(){this.J=!0,Nn(this)};function es(e){e.Y=Date.now()+e.P,Sv(e,e.P)}function Sv(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Qi(_e(e.lb,e),t)}function fl(e){e.B&&(N.clearTimeout(e.B),e.B=null)}E.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(GS(this.j,this.A),this.L!=2&&(Ui(),ke(17)),Nn(this),this.o=2,ui(this)):Sv(this,this.Y-e)};function ui(e){e.l.H==0||e.J||bv(e.l,e)}function Nn(e){fl(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Yc(e.V),gv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Au(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ru(n.i,e))){if(!e.K&&Ru(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ao(n),yl(n);else break e;ld(n),ke(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qi(_e(n.ib,n),6e3));if(1>=Ov(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else On(n,11)}else if((e.K||n.g==e)&&Ao(n),!Oi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rd(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,b(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=qv(r,r.J?r.pa:null,r.Y),o.K){Dv(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(fl(l),es(l)),r.g=o}else Hv(r);0<n.j.length&&wl(n)}else u[0]!="stop"&&u[0]!="close"||On(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?On(n,7):od(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ui(4)}catch{}}function ZS(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ol(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function eT(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ol(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Tv(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ol(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=eT(e),r=ZS(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var kv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Mn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Mn){this.h=e.h,Co(this,e.j),this.s=e.s,this.g=e.g,Po(this,e.m),this.l=e.l;var t=e.i,n=new ji;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),pf(this,n),this.o=e.o}else e&&(t=String(e).match(kv))?(this.h=!1,Co(this,t[1]||"",!0),this.s=Qr(t[2]||""),this.g=Qr(t[3]||"",!0),Po(this,t[4]),this.l=Qr(t[5]||"",!0),pf(this,t[6]||"",!0),this.o=Qr(t[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}Mn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jr(t,gf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Jr(t,gf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Jr(n,n.charAt(0)=="/"?iT:rT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jr(n,oT)),e.join("")};function $t(e){return new Mn(e)}function Co(e,t,n){e.j=n?Qr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Po(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function pf(e,t,n){t instanceof ji?(e.i=t,lT(e.i,e.h)):(n||(t=Jr(t,sT)),e.i=new ji(t,e.h))}function b(e,t,n){e.i.set(t,n)}function pl(e){return b(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,nT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gf=/[#\/\?@]/g,rT=/[#\?:]/g,iT=/[#\?]/g,sT=/[#\?@]/g,oT=/#/g;function ji(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _n(e){e.g||(e.g=new Map,e.h=0,e.i&&tT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=ji.prototype;E.add=function(e,t){_n(this),this.i=null,e=xr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Cv(e,t){_n(e),t=xr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Pv(e,t){return _n(e),t=xr(e,t),e.g.has(t)}E.forEach=function(e,t){_n(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};E.ta=function(){_n(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};E.Z=function(e){_n(this);let t=[];if(typeof e=="string")Pv(this,e)&&(t=t.concat(this.g.get(xr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return _n(this),this.i=null,e=xr(this,e),Pv(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Av(e,t,n){Cv(e,t),0<n.length&&(e.i=null,e.g.set(xr(e,t),Bc(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function xr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function lT(e,t){t&&!e.j&&(_n(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Cv(this,r),Av(this,i,n))},e)),e.j=t}var aT=class{constructor(e,t){this.g=e,this.map=t}};function Rv(e){this.l=e||uT,N.PerformanceNavigationTiming?(e=N.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(N.g&&N.g.Ka&&N.g.Ka()&&N.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uT=10;function Nv(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ov(e){return e.h?1:e.g?e.g.size:0}function Ru(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function rd(e,t){e.g?e.g.add(t):e.h=t}function Dv(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Rv.prototype.cancel=function(){if(this.i=xv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function xv(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Bc(e.i)}var cT=class{stringify(e){return N.JSON.stringify(e,void 0)}parse(e){return N.JSON.parse(e,void 0)}};function dT(){this.g=new cT}function hT(e,t,n){const r=n||"";try{Tv(e,function(i,s){let o=i;Xi(i)&&(o=qc(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function fT(e,t){const n=new dl;if(N.Image){const r=new Image;r.onload=Ps(Rs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ps(Rs,n,r,"TestLoadImage: error",!1,t),r.onabort=Ps(Rs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ps(Rs,n,r,"TestLoadImage: timeout",!1,t),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Rs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function gl(e){this.l=e.fc||null,this.j=e.ob||!1}ae(gl,ed);gl.prototype.g=function(){return new ml(this.l,this.j)};gl.prototype.i=function(e){return function(){return e}}({});function ml(e,t){le.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=id,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(ml,le);var id=0;E=ml.prototype;E.open=function(e,t){if(this.readyState!=id)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fi(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||N).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=id};E.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lv(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Lv(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}E.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ts(this):Fi(this),this.readyState==3&&Lv(this)}};E.Za=function(e){this.g&&(this.response=this.responseText=e,ts(this))};E.Ya=function(e){this.g&&(this.response=e,ts(this))};E.ka=function(){this.g&&ts(this)};function ts(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fi(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Fi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var pT=N.JSON.parse;function ee(e){le.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Mv,this.L=this.M=!1}ae(ee,le);var Mv="",gT=/^https?$/i,mT=["POST","PUT"];E=ee.prototype;E.Oa=function(e){this.M=e};E.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ku.g(),this.C=this.u?ff(this.u):ff(ku),this.g.onreadystatechange=_e(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){mf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=N.FormData&&e instanceof N.FormData,!(0<=ev(mT,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jv(this),0<this.B&&((this.L=vT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.ua,this)):this.A=Qc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){mf(this,s)}};function vT(e){return Di&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.ua=function(){typeof zc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function mf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,$v(e),vl(e)}function $v(e){e.F||(e.F=!0,he(e,"complete"),he(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,he(this,"complete"),he(this,"abort"),vl(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vl(this,!0)),ee.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Uv(this):this.kb())};E.kb=function(){Uv(this)};function Uv(e){if(e.h&&typeof zc<"u"&&(!e.C[1]||pt(e)!=4||e.da()!=2)){if(e.v&&pt(e)==4)Qc(e.La,0,e);else if(he(e,"readystatechange"),pt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(kv)[1]||null;!i&&N.self&&N.self.location&&(i=N.self.location.protocol.slice(0,-1)),r=!gT.test(i?i.toLowerCase():"")}n=r}if(n)he(e,"complete"),he(e,"success");else{e.m=6;try{var s=2<pt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",$v(e)}}finally{vl(e)}}}}function vl(e,t){if(e.g){jv(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||he(e,"ready");try{n.onreadystatechange=r}catch{}}}function jv(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(N.clearTimeout(e.A),e.A=null)}E.isActive=function(){return!!this.g};function pt(e){return e.g?e.g.readyState:0}E.da=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),pT(t)}};function vf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Mv:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function yT(e){const t={};e=(e.g&&2<=pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Oi(e[r]))continue;var n=BS(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}LS(t,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fv(e){let t="";return Hc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function sd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Fv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):b(e,t,n))}function br(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zv(e){this.Ga=0,this.j=[],this.l=new dl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=br("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=br("baseRetryDelayMs",5e3,e),this.hb=br("retryDelaySeedMs",1e4,e),this.eb=br("forwardChannelMaxRetries",2,e),this.xa=br("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Rv(e&&e.concurrentRequestLimit),this.Ja=new dT,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=zv.prototype;E.ra=8;E.H=1;function od(e){if(Bv(e),e.H==3){var t=e.W++,n=$t(e.I);if(b(n,"SID",e.K),b(n,"RID",t),b(n,"TYPE","terminate"),ns(e,n),t=new Zi(e,e.l,t),t.L=2,t.v=pl($t(n)),n=!1,N.navigator&&N.navigator.sendBeacon)try{n=N.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&N.Image&&(new Image().src=t.v,n=!0),n||(t.g=Xv(t.l,null),t.g.ha(t.v)),t.G=Date.now(),es(t)}Gv(e)}function yl(e){e.g&&(ad(e),e.g.cancel(),e.g=null)}function Bv(e){yl(e),e.u&&(N.clearTimeout(e.u),e.u=null),Ao(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&N.clearTimeout(e.m),e.m=null)}function wl(e){if(!Nv(e.i)&&!e.m){e.m=!0;var t=e.Na;Li||hv(),Mi||(Li(),Mi=!0),Xc.add(t,e),e.C=0}}function wT(e,t){return Ov(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Qi(_e(e.Na,e,t),Kv(e,e.C)),e.C++,!0)}E.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Zi(this,this.l,e);let s=this.s;if(this.U&&(s?(s=iv(s),sv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Vv(this,i,t),n=$t(this.I),b(n,"RID",e),b(n,"CVER",22),this.F&&b(n,"X-HTTP-Session-Id",this.F),ns(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Fv(s)))+"&"+t:this.o&&sd(n,this.o,s)),rd(this.i,i),this.bb&&b(n,"TYPE","init"),this.P?(b(n,"$req",t),b(n,"SID","null"),i.aa=!0,Pu(i,n,null)):Pu(i,n,t),this.H=2}}else this.H==3&&(e?yf(this,e):this.j.length==0||Nv(this.i)||yf(this))};function yf(e,t){var n;t?n=t.m:n=e.W++;const r=$t(e.I);b(r,"SID",e.K),b(r,"RID",n),b(r,"AID",e.V),ns(e,r),e.o&&e.s&&sd(r,e.o,e.s),n=new Zi(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Vv(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),rd(e.i,n),Pu(n,r,t)}function ns(e,t){e.na&&Hc(e.na,function(n,r){b(t,r,n)}),e.h&&Tv({},function(n,r){b(t,r,n)})}function Vv(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_e(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const c=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{hT(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Hv(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Li||hv(),Mi||(Li(),Mi=!0),Xc.add(t,e),e.A=0}}function ld(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Qi(_e(e.Ma,e),Kv(e,e.A)),e.A++,!0)}E.Ma=function(){if(this.u=null,Wv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Qi(_e(this.jb,this),e)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ke(10),yl(this),Wv(this))};function ad(e){e.B!=null&&(N.clearTimeout(e.B),e.B=null)}function Wv(e){e.g=new Zi(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);b(t,"RID","rpc"),b(t,"SID",e.K),b(t,"AID",e.V),b(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&b(t,"TO",e.qa),b(t,"TYPE","xmlhttp"),ns(e,t),e.o&&e.s&&sd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=pl($t(t)),n.s=null,n.S=!0,_v(n,e)}E.ib=function(){this.v!=null&&(this.v=null,yl(this),ld(this),ke(19))};function Ao(e){e.v!=null&&(N.clearTimeout(e.v),e.v=null)}function bv(e,t){var n=null;if(e.g==t){Ao(e),ad(e),e.g=null;var r=2}else if(Ru(e.i,t))n=t.F,Dv(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Jc(),he(r,new yv(r,n)),wl(e)}else Hv(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&wT(e,t)||r==2&&ld(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:On(e,5);break;case 4:On(e,10);break;case 3:On(e,6);break;default:On(e,2)}}}function Kv(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function On(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=_e(e.pb,e);n||(n=new Mn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Co(n,"https"),pl(n)),fT(n.toString(),r)}else ke(2);e.H=0,e.h&&e.h.za(t),Gv(e),Bv(e)}E.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ke(2)):(this.l.info("Failed to ping google.com"),ke(1))};function Gv(e){if(e.H=0,e.ma=[],e.h){const t=xv(e.i);(t.length!=0||e.j.length!=0)&&(lf(e.ma,t),lf(e.ma,e.j),e.i.i.length=0,Bc(e.j),e.j.length=0),e.h.ya()}}function qv(e,t,n){var r=n instanceof Mn?$t(n):new Mn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Po(r,r.m);else{var i=N.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Mn(null);r&&Co(s,r),t&&(s.g=t),i&&Po(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&b(r,n,t),b(r,"VER",e.ra),ns(e,r),r}function Xv(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ee(new gl({ob:!0})):new ee(e.va),t.Oa(e.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function Yv(){}E=Yv.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function et(e,t){le.call(this),this.g=new zv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Oi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Oi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Lr(this)}ae(et,le);et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ke(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=qv(e,null,e.Y),wl(e)};et.prototype.close=function(){od(this.g)};et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=qc(e),e=n);t.j.push(new aT(t.fb++,e)),t.H==3&&wl(t)};et.prototype.N=function(){this.g.h=null,delete this.j,od(this.g),delete this.g,et.$.N.call(this)};function Qv(e){td.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ae(Qv,td);function Jv(){nd.call(this),this.status=1}ae(Jv,nd);function Lr(e){this.g=e}ae(Lr,Yv);Lr.prototype.Ba=function(){he(this.g,"a")};Lr.prototype.Aa=function(e){he(this.g,new Qv(e))};Lr.prototype.za=function(e){he(this.g,new Jv)};Lr.prototype.ya=function(){he(this.g,"b")};function _T(){this.blockSize=-1}function _t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ae(_t,_T);_t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ga(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}_t.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ga(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ga(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ga(this,r),i=0;break}}this.h=i,this.i+=t};_t.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function B(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var ET={};function ud(e){return-128<=e&&128>e?AS(e,function(t){return new B([t|0],0>t?-1:0)}):new B([e|0],0>e?-1:0)}function gt(e){if(isNaN(e)||!isFinite(e))return mr;if(0>e)return ce(gt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Nu;return new B(t,0)}function Zv(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ce(Zv(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gt(Math.pow(t,8)),r=mr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=gt(Math.pow(t,s)),r=r.R(s).add(gt(o))):(r=r.R(n),r=r.add(gt(o)))}return r}var Nu=4294967296,mr=ud(0),Ou=ud(1),wf=ud(16777216);E=B.prototype;E.ea=function(){if(Ge(this))return-ce(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Nu+r)*t,t*=Nu}return e};E.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Pt(this))return"0";if(Ge(this))return"-"+ce(this).toString(e);for(var t=gt(Math.pow(e,6)),n=this,r="";;){var i=No(n,t).g;n=Ro(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Pt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};E.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Pt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ge(e){return e.h==-1}E.X=function(e){return e=Ro(this,e),Ge(e)?-1:Pt(e)?0:1};function ce(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new B(n,~e.h).add(Ou)}E.abs=function(){return Ge(this)?ce(this):this};E.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new B(n,n[n.length-1]&-2147483648?-1:0)};function Ro(e,t){return e.add(ce(t))}E.R=function(e){if(Pt(this)||Pt(e))return mr;if(Ge(this))return Ge(e)?ce(this).R(ce(e)):ce(ce(this).R(e));if(Ge(e))return ce(this.R(ce(e)));if(0>this.X(wf)&&0>e.X(wf))return gt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=e.D(i)>>>16,a=e.D(i)&65535;n[2*r+2*i]+=o*a,Ns(n,2*r+2*i),n[2*r+2*i+1]+=s*a,Ns(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,Ns(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,Ns(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new B(n,0)};function Ns(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Kr(e,t){this.g=e,this.h=t}function No(e,t){if(Pt(t))throw Error("division by zero");if(Pt(e))return new Kr(mr,mr);if(Ge(e))return t=No(ce(e),t),new Kr(ce(t.g),ce(t.h));if(Ge(t))return t=No(e,ce(t)),new Kr(ce(t.g),t.h);if(30<e.g.length){if(Ge(e)||Ge(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ou,r=t;0>=r.X(e);)n=_f(n),r=_f(r);var i=Xn(n,1),s=Xn(r,1);for(r=Xn(r,2),n=Xn(n,2);!Pt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Xn(r,1),n=Xn(n,1)}return t=Ro(e,i.R(t)),new Kr(i,t)}for(i=mr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gt(n),o=s.R(t);Ge(o)||0<o.X(e);)n-=r,s=gt(n),o=s.R(t);Pt(s)&&(s=Ou),i=i.add(s),e=Ro(e,o)}return new Kr(i,e)}E.gb=function(e){return No(this,e).h};E.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new B(n,this.h&e.h)};E.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new B(n,this.h|e.h)};E.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new B(n,this.h^e.h)};function _f(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new B(n,e.h)}function Xn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new B(i,e.h)}et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;Zc.NO_ERROR=0;Zc.TIMEOUT=8;Zc.HTTP_ERROR=6;XS.COMPLETE="complete";YS.EventType=Ji;Ji.OPEN="a";Ji.CLOSE="b";Ji.ERROR="c";Ji.MESSAGE="d";le.prototype.listen=le.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;_t.prototype.digest=_t.prototype.l;_t.prototype.reset=_t.prototype.reset;_t.prototype.update=_t.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=gt;B.fromString=Zv;var IT=B;const Ef="@firebase/firestore";/**
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
 */class me{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
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
 */let rs="10.2.0";/**
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
 */const Pr=new qi("@firebase/firestore");function Fe(e,...t){if(Pr.logLevel<=F.DEBUG){const n=t.map(dd);Pr.debug(`Firestore (${rs}): ${e}`,...n)}}function cd(e,...t){if(Pr.logLevel<=F.ERROR){const n=t.map(dd);Pr.error(`Firestore (${rs}): ${e}`,...n)}}function ST(e,...t){if(Pr.logLevel<=F.WARN){const n=t.map(dd);Pr.warn(`Firestore (${rs}): ${e}`,...n)}}function dd(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function hd(e="Unexpected state"){const t=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+e;throw cd(t),new Error(t)}function Du(e,t){e||hd()}/**
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
 */const ye={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class we extends tt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ey{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class TT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class kT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CT{constructor(t){this.t=t,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{Fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Du(typeof r.accessToken=="string"),new ey(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Du(t===null||typeof t=="string"),new me(t)}}class PT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new PT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Fe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Du(typeof n.token=="string"),this.R=n.token,new RT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function OT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class DT{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=OT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ty(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class xT{constructor(t,n,r,i,s,o,l,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class Oo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Oo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var If,U;(U=If||(If={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new IT([4294967295,4294967295],0);function ma(){return typeof document<"u"?document:null}/**
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
 */class LT{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&Fe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
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
 */class fd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new fd(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new we(ye.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function MT(e,t){if(cd("AsyncQueue",`${t}: ${e}`),ty(e))return new we(ye.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class $T{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=DT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Fe("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Fe("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new we(ye.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=MT(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function ny(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Sf=new Map;function UT(e,t,n,r){if(t===!0&&r===!0)throw new we(ye.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function jT(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":hd()}function FT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new we(ye.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jT(e);throw new we(ye.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Tf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new we(ye.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new we(ye.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}UT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ny((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ry{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new we(ye.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new we(ye.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TT;switch(r.type){case"firstParty":return new AT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new we(ye.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sf.get(n);r&&(Fe("ComponentProvider","Removing Datastore"),Sf.delete(n),r.terminate())}(this),Promise.resolve()}}function zT(e,t,n,r={}){var i;const s=(e=FT(e,ry))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ST("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=me.MOCK_USER;else{l=y_(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new we(ye.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new me(u)}e._authCredentials=new kT(new ey(l,a))}}/**
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
 */class BT{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new LT(this,"async_queue_retry"),this.eu=()=>{const n=ma();n&&Fe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new vr;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!ty(t))throw t;Fe("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw cd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const i=fd.createAndSchedule(this,t,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&hd()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}class VT extends ry{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new BT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HT(this),this._firestoreClient.terminate()}}function iy(e,t){const n=typeof e=="object"?e:rl(),r=typeof e=="string"?e:t||"(default)",i=zt(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=m_("firestore");s&&zT(i,...s)}return i}function HT(e){var t,n,r;const i=e._freezeSettings(),s=function(l,a,u,c){return new xT(l,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ny(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new $T(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){rs=i})(yn),Ze(new Je("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new VT(new CT(r.getProvider("auth-internal")),new NT(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new we(ye.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Pe(Ef,"4.1.1",t),Pe(Ef,"4.1.1","esm2017")})();function pd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WT=sy,oy=new Ft("auth","Firebase",sy());/**
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
 */const Do=new qi("@firebase/auth");function bT(e,...t){Do.logLevel<=F.WARN&&Do.warn(`Auth (${yn}): ${e}`,...t)}function Ws(e,...t){Do.logLevel<=F.ERROR&&Do.error(`Auth (${yn}): ${e}`,...t)}/**
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
 */function Et(e,...t){throw gd(e,...t)}function yt(e,...t){return gd(e,...t)}function ly(e,t,n){const r=Object.assign(Object.assign({},WT()),{[t]:n});return new Ft("auth","Firebase",r).create(t,{appName:e.name})}function KT(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Et(e,"argument-error"),ly(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return oy.create(e,...t)}function O(e,t,...n){if(!e)throw gd(t,...n)}function At(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ws(t),new Error(t)}function Ut(e,t){e||At(t)}/**
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
 */function xu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function GT(){return kf()==="http:"||kf()==="https:"}function kf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function qT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GT()||vm()||"connection"in navigator)?navigator.onLine:!0}function XT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class is{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ut(n>t,"Short delay should be less than long delay!"),this.isMobile=w_()||E_()}get(){return qT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function md(e,t){Ut(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ay{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QT=new is(3e4,6e4);function uy(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ss(e,t,n,r,i={}){return cy(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const l=Gi(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ay.fetch()(dy(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function cy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},YT),t);try{const i=new ZT(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Os(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Os(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Os(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw Os(e,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ly(e,c,u);Et(e,c)}}catch(i){if(i instanceof tt)throw i;Et(e,"network-request-failed",{message:String(i)})}}async function JT(e,t,n,r,i={}){const s=await ss(e,t,n,r,i);return"mfaPendingCredential"in s&&Et(e,"multi-factor-auth-required",{_serverResponse:s}),s}function dy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?md(e.config,i):`${e.config.apiScheme}://${i}`}class ZT{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),QT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Os(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ek(e,t){return ss(e,"POST","/v1/accounts:delete",t)}async function tk(e,t){return ss(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ci(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function nk(e,t=!1){const n=vn(e),r=await n.getIdToken(t),i=vd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ci(va(i.auth_time)),issuedAtTime:ci(va(i.iat)),expirationTime:ci(va(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function va(e){return Number(e)*1e3}function vd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ws("JWT malformed, contained fewer than 3 sections"),null;try{const i=fm(n);return i?JSON.parse(i):(Ws("Failed to decode base64 JWT payload"),null)}catch(i){return Ws("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rk(e){const t=vd(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function zi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof tt&&ik(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ik({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class sk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zi(e,tk(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?ak(s.providerUserInfo):[],l=lk(e.providerData,o),a=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new hy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function ok(e){const t=vn(e);await xo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lk(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function ak(e){return e.map(t=>{var{providerId:n}=t,r=pd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uk(e,t){const n=await cy(e,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=dy(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ay.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):rk(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uk(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bi;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function Vt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class $n{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=pd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await zi(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return nk(this,t)}reload(){return ok(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $n(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await zi(this,ek(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,l,a,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:y,isAnonymous:I,providerData:C,stsTokenManager:P}=n;O(p&&P,t,"internal-error");const A=Bi.fromJSON(this.name,P);O(typeof p=="string",t,"internal-error"),Vt(f,t.name),Vt(g,t.name),O(typeof y=="boolean",t,"internal-error"),O(typeof I=="boolean",t,"internal-error"),Vt(m,t.name),Vt(v,t.name),Vt(w,t.name),Vt(R,t.name),Vt(h,t.name),Vt(d,t.name);const H=new $n({uid:p,auth:t,email:g,emailVerified:y,displayName:f,isAnonymous:I,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:A,createdAt:h,lastLoginAt:d});return C&&Array.isArray(C)&&(H.providerData=C.map(M=>Object.assign({},M))),R&&(H._redirectEventId=R),H}static async _fromIdTokenResponse(t,n,r=!1){const i=new Bi;i.updateFromServerResponse(n);const s=new $n({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await xo(s),s}}/**
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
 */const Cf=new Map;function Rt(e){Ut(e instanceof Function,"Expected a class definition");let t=Cf.get(e);return t?(Ut(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Cf.set(e,t),t)}/**
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
 */class fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}fy.type="NONE";const Pf=fy;/**
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
 */function bs(e,t,n){return`firebase:${e}:${t}:${n}`}class yr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bs(this.userKey,i.apiKey,s),this.fullPersistenceKey=bs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$n._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new yr(Rt(Pf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt(Pf);const o=bs(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const f=$n._fromJSON(t,c);u!==s&&(l=f),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new yr(s,t,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new yr(s,t,r))}}/**
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
 */function Af(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(my(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(py(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yy(t))return"Blackberry";if(wy(t))return"Webos";if(yd(t))return"Safari";if((t.includes("chrome/")||gy(t))&&!t.includes("edge/"))return"Chrome";if(vy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function py(e=Se()){return/firefox\//i.test(e)}function yd(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gy(e=Se()){return/crios\//i.test(e)}function my(e=Se()){return/iemobile/i.test(e)}function vy(e=Se()){return/android/i.test(e)}function yy(e=Se()){return/blackberry/i.test(e)}function wy(e=Se()){return/webos/i.test(e)}function _l(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ck(e=Se()){var t;return _l(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function dk(){return I_()&&document.documentMode===10}function _y(e=Se()){return _l(e)||vy(e)||wy(e)||yy(e)||/windows phone/i.test(e)||my(e)}function hk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ey(e,t=[]){let n;switch(e){case"Browser":n=Af(Se());break;case"Worker":n=`${Af(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yn}/${r}`}/**
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
 */class fk{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,l)=>{try{const a=t(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pk(e,t={}){return ss(e,"GET","/v2/passwordPolicy",uy(e,t))}/**
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
 */const gk=6;class mk{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class vk{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rf(this),this.idTokenSubscription=new Rf(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=XT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?vn(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await pk(this),n=new mk(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ft("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Rt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&bT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function El(e){return vn(e)}class Rf{constructor(t){this.auth=t,this.observer=null,this.addObserver=_m(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function yk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function wk(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yk().appendChild(r)})}function _k(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ek(e,t){const n=zt(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ai(s,t??{}))return i;Et(i,"already-initialized")}return n.initialize({options:t})}function Ik(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Sk(e,t,n){const r=El(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Iy(t),{host:o,port:l}=Tk(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kk()}function Iy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Tk(e){const t=Iy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nf(o)}}}function Nf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function kk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Sy{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(t){return At("not implemented")}_linkToIdToken(t,n){return At("not implemented")}_getReauthenticationResolver(t){return At("not implemented")}}/**
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
 */async function wr(e,t){return JT(e,"POST","/v1/accounts:signInWithIdp",uy(e,t))}/**
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
 */const Ck="http://localhost";class bn extends Sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=pd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return wr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,wr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,wr(t,n)}buildRequest(){const t={requestUri:Ck,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gi(n)}return t}}/**
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
 */class wd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class os extends wd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gt extends os{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class qt extends os{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Xt extends os{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */class Ar{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await $n._fromIdTokenResponse(t,r,i),o=Of(r);return new Ar({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Of(r);return new Ar({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Of(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Lo extends tt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Lo(t,n,r,i)}}function Ty(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(e,s,t,r):s})}async function Pk(e,t,n=!1){const r=await zi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ar._forOperation(e,"link",r)}/**
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
 */async function Ak(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await zi(e,Ty(r,i,t,e),n);O(s.idToken,r,"internal-error");const o=vd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(e.uid===l,r,"user-mismatch"),Ar._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function Rk(e,t,n=!1){const r="signIn",i=await Ty(e,r,t),s=await Ar._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Nk(e,t,n,r){return vn(e).onIdTokenChanged(t,n,r)}function Ok(e,t,n){return vn(e).beforeAuthStateChanged(t,n)}const Mo="__sak";/**
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
 */class ky{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dk(){const e=Se();return yd(e)||_l(e)}const xk=1e3,Lk=10;class Cy extends ky{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dk()&&hk(),this.fallbackToPolling=_y(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dk()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Lk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Cy.type="LOCAL";const Mk=Cy;/**
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
 */class Py extends ky{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Py.type="SESSION";const Ay=Py;/**
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
 */function $k(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Il{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Il(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await $k(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
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
 */function _d(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Uk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=_d("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function jk(e){wt().location.href=e}/**
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
 */function Ry(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Bk(){return Ry()?self:null}/**
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
 */const Ny="firebaseLocalStorageDb",Vk=1,$o="firebaseLocalStorage",Oy="fbase_key";class ls{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sl(e,t){return e.transaction([$o],t?"readwrite":"readonly").objectStore($o)}function Hk(){const e=indexedDB.deleteDatabase(Ny);return new ls(e).toPromise()}function Lu(){const e=indexedDB.open(Ny,Vk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore($o,{keyPath:Oy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains($o)?t(r):(r.close(),await Hk(),t(await Lu()))})})}async function Df(e,t,n){const r=Sl(e,!0).put({[Oy]:t,value:n});return new ls(r).toPromise()}async function Wk(e,t){const n=Sl(e,!1).get(t),r=await new ls(n).toPromise();return r===void 0?null:r.value}function xf(e,t){const n=Sl(e,!0).delete(t);return new ls(n).toPromise()}const bk=800,Kk=3;class Dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Kk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(Bk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Fk(),!this.activeServiceWorker)return;this.sender=new Uk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||zk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Lu();return await Df(t,Mo,"1"),await xf(t,Mo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Wk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Sl(i,!1).getAll();return new ls(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dy.type="LOCAL";const Gk=Dy;new is(3e4,6e4);/**
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
 */function xy(e,t){return t?Rt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ed extends Sy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return wr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return wr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function qk(e){return Rk(e.auth,new Ed(e),e.bypassAuthState)}function Xk(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),Ak(n,new Ed(e),e.bypassAuthState)}async function Yk(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),Pk(n,new Ed(e),e.bypassAuthState)}/**
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
 */class Ly{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return qk;case"linkViaPopup":case"linkViaRedirect":return Yk;case"reauthViaPopup":case"reauthViaRedirect":return Xk;default:Et(this.auth,"internal-error")}}resolve(t){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qk=new is(2e3,1e4);async function Jk(e,t,n){const r=El(e);KT(e,t,wd);const i=xy(r,n);return new Dn(r,"signInViaPopup",t,i).executeNotNull()}class Dn extends Ly{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const t=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Qk.get())};t()}}Dn.currentPopupAction=null;/**
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
 */const Zk="pendingRedirect",Ks=new Map;class eC extends Ly{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ks.get(this.auth._key());if(!t){try{const r=await tC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ks.set(this.auth._key(),t)}return this.bypassAuthState||Ks.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(e,t){const n=iC(t),r=rC(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nC(e,t){Ks.set(e._key(),t)}function rC(e){return Rt(e._redirectPersistence)}function iC(e){return bs(Zk,e.config.apiKey,e.name)}async function sC(e,t,n=!1){const r=El(e),i=xy(r,t),o=await new eC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const oC=10*60*1e3;class lC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!aC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!My(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=oC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lf(t))}saveEventToCache(t){this.cachedEventUids.add(Lf(t)),this.lastProcessedEventTime=Date.now()}}function Lf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function My({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function aC(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return My(e);default:return!1}}/**
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
 */async function uC(e,t={}){return ss(e,"GET","/v1/projects",t)}/**
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
 */const cC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dC=/^https?/;async function hC(e){if(e.config.emulator)return;const{authorizedDomains:t}=await uC(e);for(const n of t)try{if(fC(n))return}catch{}Et(e,"unauthorized-domain")}function fC(e){const t=xu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dC.test(n))return!1;if(cC.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pC=new is(3e4,6e4);function Mf(){const e=wt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function gC(e){return new Promise((t,n)=>{var r,i,s;function o(){Mf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(yt(e,"network-request-failed"))},timeout:pC.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const l=_k("iframefcb");return wt()[l]=()=>{gapi.load?o():n(yt(e,"network-request-failed"))},wk(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Gs=null,t})}let Gs=null;function mC(e){return Gs=Gs||gC(e),Gs}/**
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
 */const vC=new is(5e3,15e3),yC="__/auth/iframe",wC="emulator/auth/iframe",_C={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?md(t,wC):`https://${e.config.authDomain}/${yC}`,r={apiKey:t.apiKey,appName:e.name,v:yn},i=EC.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gi(r).slice(1)}`}async function SC(e){const t=await mC(e),n=wt().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:IC(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_C,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(e,"network-request-failed"),l=wt().setTimeout(()=>{s(o)},vC.get());function a(){wt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const TC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kC=500,CC=600,PC="_blank",AC="http://localhost";class $f{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RC(e,t,n,r=kC,i=CC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},TC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Se().toLowerCase();n&&(l=gy(u)?PC:n),py(u)&&(t=t||AC,a.scrollbars="yes");const c=Object.entries(a).reduce((g,[m,v])=>`${g}${m}=${v},`,"");if(ck(u)&&l!=="_self")return NC(t||"",l),new $f(null);const f=window.open(t||"",l,c);O(f,e,"popup-blocked");try{f.focus()}catch{}return new $f(f)}function NC(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OC="__/auth/handler",DC="emulator/auth/handler",xC=encodeURIComponent("fac");async function Uf(e,t,n,r,i,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:yn,eventId:i};if(t instanceof wd){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",P_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(t instanceof os){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await e._getAppCheckToken(),u=a?`#${xC}=${encodeURIComponent(a)}`:"";return`${LC(e)}?${Gi(l).slice(1)}${u}`}function LC({config:e}){return e.emulator?md(e,DC):`https://${e.authDomain}/${OC}`}/**
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
 */const ya="webStorageSupport";class MC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ay,this._completeRedirectFn=sC,this._overrideRedirectResult=nC}async _openPopup(t,n,r,i){var s;Ut((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Uf(t,n,r,xu(),i);return RC(t,o,_d())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Uf(t,n,r,xu(),i);return jk(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await SC(t),r=new lC(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ya,{type:ya},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ya];o!==void 0&&n(!!o),Et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hC(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _y()||yd()||_l()}}const $C=MC;var jf="@firebase/auth",Ff="1.2.0";/**
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
 */class UC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jC(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FC(e){Ze(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ey(e)},u=new vk(r,i,s,a);return Ik(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ze(new Je("auth-internal",t=>{const n=El(t.getProvider("auth").getImmediate());return(r=>new UC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(jf,Ff,jC(e)),Pe(jf,Ff,"esm2017")}/**
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
 */const zC=5*60,BC=mm("authIdTokenMaxAge")||zC;let zf=null;const VC=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BC)return;const i=n==null?void 0:n.token;zf!==i&&(zf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HC(e=rl()){const t=zt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ek(e,{popupRedirectResolver:$C,persistence:[Gk,Mk,Ay]}),r=mm("authTokenSyncURL");if(r){const s=VC(r);Ok(n,s,()=>s(n.currentUser)),Nk(n,o=>s(o))}const i=pm("auth");return i&&Sk(n,`http://${i}`),n}FC("Browser");/**
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
 */class WC{constructor(t,n){this._delegate=t,this.firebase=n,Io(t,new Je("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),km(this._delegate)))}_getService(t,n=hn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(t,n=hn){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){Io(this._delegate,t)}_addOrOverwriteComponent(t){Tm(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const bC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Bf=new Ft("app-compat","Firebase",bC);/**
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
 */function KC(e){const t={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Pe,setLogLevel:Pm,onLog:Cm,apps:null,SDK_VERSION:yn,INTERNAL:{registerComponent:l,removeApp:r,useAsService:a,modularAPIs:VE}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete t[u]}function i(u){if(u=u||hn,!Fh(t,u))throw Bf.create("no-app",{appName:u});return t[u]}i.App=e;function s(u,c={}){const f=nl(u,c);if(Fh(t,f.name))return t[f.name];const g=new e(f,n);return t[f.name]=g,g}function o(){return Object.keys(t).map(u=>t[u])}function l(u){const c=u.name,f=c.replace("-compat","");if(Ze(u)&&u.type==="PUBLIC"){const g=(m=i())=>{if(typeof m[f]!="function")throw Bf.create("invalid-app-argument",{appName:c});return m[f]()};u.serviceProps!==void 0&&Eo(g,u.serviceProps),n[f]=g,e.prototype[f]=function(...m){return this._getService.bind(this,c).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?n[f]:null}function a(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function $y(){const e=KC(WC);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:$y,extendNamespace:t,createSubscribe:_m,ErrorFactory:Ft,deepExtend:Eo});function t(n){Eo(e,n)}return e}const GC=$y();/**
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
 */const Vf=new qi("@firebase/app-compat"),qC="@firebase/app-compat",XC="0.2.16";/**
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
 */function YC(e){Pe(qC,XC,e)}/**
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
 */if(__()&&self.firebase!==void 0){Vf.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Vf.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Uy=GC;YC();var QC="firebase",JC="10.2.0";/**
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
 */Uy.registerVersion(QC,JC,"app-compat");const ZC={apiKey:"AIzaSyATUy8Z53oIfwIdKHRUlqsAYTSXkmtsHdM",authDomain:"disneyplus-clone-44b8e.firebaseapp.com",projectId:"disneyplus-clone-44b8e",storageBucket:"disneyplus-clone-44b8e.appspot.com",messagingSenderId:"430820995952",appId:"1:430820995952:web:5188f5203e09f41f9e55b5",measurementId:"G-EYTWP2Q9E6"},Tl=nl(ZC);vS(Tl);iy(Tl);const e2=HC(Tl),t2=new Tt;Uy.storage;iy(Tl);const n2=()=>{const e=()=>{Jk(e2,t2).then(t=>{console.log(t)})};return k.jsx("nav",{children:k.jsx("div",{className:"navbar-component",children:k.jsxs("ul",{className:"nav-list flex justify-between pt-5 pl-9",children:[k.jsx("li",{className:"nav-list-item",children:k.jsx("a",{href:"",children:k.jsx("picture",{className:"logo ",children:k.jsx("img",{className:"w-24 mr-5",src:t_,alt:""})})})}),k.jsxs("div",{className:"menu hidden md:flex",children:[k.jsx("li",{className:"nav-list-item ",children:k.jsx("a",{href:"/",children:k.jsxs("div",{className:"mr-4 p-2 flex",children:[k.jsx("img",{className:"w-8",src:n_,alt:""}),k.jsx("span",{className:"pt-1.5",children:"HOME"})]})})}),k.jsx("li",{className:"nav-list-item",children:k.jsx("a",{href:"/",children:k.jsxs("div",{className:"mr-4 p-2 flex",children:[k.jsx("img",{className:"w-8",src:r_,alt:""}),k.jsx("span",{className:"pt-1.5",children:"SEARCH"})]})})}),k.jsx("li",{className:"nav-list-item",children:k.jsx("a",{href:"/",children:k.jsxs("div",{className:"mr-4 p-2 flex",children:[k.jsx("img",{className:"w-8",src:i_,alt:""}),k.jsx("span",{className:"pt-1.5",children:"WATCHLIST"})]})})}),k.jsx("li",{className:"nav-list-item",children:k.jsx("a",{href:"/",children:k.jsxs("div",{className:"mr-4 p-2 flex",children:[k.jsx("img",{className:"w-8",src:s_,alt:""}),k.jsx("span",{className:"pt-1.5",children:"ORIGINALS"})]})})}),k.jsx("li",{className:"nav-list-item",children:k.jsx("a",{href:"/",children:k.jsxs("div",{className:"mr-4 p-2 flex",children:[k.jsx("img",{className:"w-8",src:o_,alt:""}),k.jsx("span",{className:"pt-1.5",children:"MOVIES"})]})})}),k.jsx("li",{className:"nav-list-item",children:k.jsx("a",{href:"/",children:k.jsxs("div",{className:"mr-4 p-2 flex",children:[k.jsx("img",{className:"w-8",src:l_,alt:""}),k.jsx("span",{className:"pt-1.5",children:"SERIES"})]})})})]}),k.jsx("li",{className:"nav-list-item ml-auto",children:k.jsx("a",{onClick:e,children:k.jsx("div",{className:"login-button mr-9 p-2",children:k.jsx("span",{children:"s'identifier"})})})})]})})})};function r2(){return k.jsxs("div",{className:"App",children:[k.jsx(n2,{}),k.jsx(Xw,{children:k.jsx(cm,{path:"/DisneyplusClone/",element:k.jsx(e_,{})})})]})}wa.createRoot(document.getElementById("root")).render(k.jsx(Jf.StrictMode,{children:k.jsx(Qw,{children:k.jsx(r2,{})})}));

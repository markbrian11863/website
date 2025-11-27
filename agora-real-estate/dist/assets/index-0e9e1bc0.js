function gu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function xu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bl={exports:{}},wi={},Vl={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),yu=Symbol.for("react.portal"),vu=Symbol.for("react.fragment"),bu=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),ju=Symbol.for("react.provider"),ku=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),zu=Symbol.for("react.memo"),Cu=Symbol.for("react.lazy"),vs=Symbol.iterator;function Eu(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var Hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wl=Object.assign,Gl={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||Hl}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ql(){}Ql.prototype=gn.prototype;function va(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||Hl}var ba=va.prototype=new Ql;ba.constructor=va;Wl(ba,gn.prototype);ba.isPureReactComponent=!0;var bs=Array.isArray,ql=Object.prototype.hasOwnProperty,wa={current:null},Kl={key:!0,ref:!0,__self:!0,__source:!0};function Yl(e,t,n){var r,o={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)ql.call(t,r)&&!Kl.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)o[r]===void 0&&(o[r]=c[r]);return{$$typeof:ar,type:e,key:a,ref:s,props:o,_owner:wa.current}}function Pu(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function Iu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ws=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Iu(""+e.key):t.toString(36)}function _r(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ar:case yu:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Gi(s,0):r,bs(o)?(n="",e!=null&&(n=e.replace(ws,"$&/")+"/"),_r(o,t,n,"",function(d){return d})):o!=null&&(ja(o)&&(o=Pu(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(ws,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",bs(e))for(var c=0;c<e.length;c++){a=e[c];var l=r+Gi(a,c);s+=_r(a,t,n,l,o)}else if(l=Eu(e),typeof l=="function")for(e=l.call(e),c=0;!(a=e.next()).done;)a=a.value,l=r+Gi(a,c++),s+=_r(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function hr(e,t,n){if(e==null)return e;var r=[],o=0;return _r(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Mu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Tr={transition:null},_u={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:wa};function Xl(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=gn;T.Fragment=vu;T.Profiler=wu;T.PureComponent=va;T.StrictMode=bu;T.Suspense=Su;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_u;T.act=Xl;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wl({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=wa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)ql.call(t,l)&&!Kl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:ar,type:e.type,key:o,ref:a,props:r,_owner:s}};T.createContext=function(e){return e={$$typeof:ku,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ju,_context:e},e.Consumer=e};T.createElement=Yl;T.createFactory=function(e){var t=Yl.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Nu,render:e}};T.isValidElement=ja;T.lazy=function(e){return{$$typeof:Cu,_payload:{_status:-1,_result:e},_init:Mu}};T.memo=function(e,t){return{$$typeof:zu,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};T.unstable_act=Xl;T.useCallback=function(e,t){return ce.current.useCallback(e,t)};T.useContext=function(e){return ce.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};T.useEffect=function(e,t){return ce.current.useEffect(e,t)};T.useId=function(){return ce.current.useId()};T.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ce.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};T.useRef=function(e){return ce.current.useRef(e)};T.useState=function(e){return ce.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ce.current.useTransition()};T.version="18.3.1";Vl.exports=T;var j=Vl.exports;const ji=xu(j),Tu=gu({__proto__:null,default:ji},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=j,Au=Symbol.for("react.element"),Ru=Symbol.for("react.fragment"),Fu=Object.prototype.hasOwnProperty,Ou=Lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Du={key:!0,ref:!0,__self:!0,__source:!0};function Zl(e,t,n){var r,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Fu.call(t,r)&&!Du.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Au,type:e,key:a,ref:s,props:o,_owner:Ou.current}}wi.Fragment=Ru;wi.jsx=Zl;wi.jsxs=Zl;Bl.exports=wi;var i=Bl.exports,vo={},Jl={exports:{}},je={},ec={exports:{}},tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var _=z.length;z.push(M);e:for(;0<_;){var G=_-1>>>1,X=z[G];if(0<o(X,M))z[G]=M,z[_]=X,_=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],_=z.pop();if(_!==M){z[0]=_;e:for(var G=0,X=z.length,mr=X>>>1;G<mr;){var jt=2*(G+1)-1,Wi=z[jt],kt=jt+1,fr=z[kt];if(0>o(Wi,_))kt<X&&0>o(fr,Wi)?(z[G]=fr,z[kt]=_,G=kt):(z[G]=Wi,z[jt]=_,G=jt);else if(kt<X&&0>o(fr,_))z[G]=fr,z[kt]=_,G=kt;else break e}}return M}function o(z,M){var _=z.sortIndex-M.sortIndex;return _!==0?_:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],d=[],g=1,m=null,f=3,y=!1,b=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=z)r(d),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(d)}}function v(z){if(x=!1,h(z),!b)if(n(l)!==null)b=!0,Vi(N);else{var M=n(d);M!==null&&Hi(v,M.startTime-z)}}function N(z,M){b=!1,x&&(x=!1,u(I),I=-1),y=!0;var _=f;try{for(h(M),m=n(l);m!==null&&(!(m.expirationTime>M)||z&&!Ie());){var G=m.callback;if(typeof G=="function"){m.callback=null,f=m.priorityLevel;var X=G(m.expirationTime<=M);M=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(l)&&r(l),h(M)}else r(l);m=n(l)}if(m!==null)var mr=!0;else{var jt=n(d);jt!==null&&Hi(v,jt.startTime-M),mr=!1}return mr}finally{m=null,f=_,y=!1}}var C=!1,P=null,I=-1,$=5,L=-1;function Ie(){return!(e.unstable_now()-L<$)}function bn(){if(P!==null){var z=e.unstable_now();L=z;var M=!0;try{M=P(!0,z)}finally{M?wn():(C=!1,P=null)}}else C=!1}var wn;if(typeof p=="function")wn=function(){p(bn)};else if(typeof MessageChannel<"u"){var ys=new MessageChannel,hu=ys.port2;ys.port1.onmessage=bn,wn=function(){hu.postMessage(null)}}else wn=function(){w(bn,0)};function Vi(z){P=z,C||(C=!0,wn())}function Hi(z,M){I=w(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,Vi(N))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var _=f;f=M;try{return z()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var _=f;f=z;try{return M()}finally{f=_}},e.unstable_scheduleCallback=function(z,M,_){var G=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=_+X,z={id:g++,callback:M,priorityLevel:z,startTime:_,expirationTime:X,sortIndex:-1},_>G?(z.sortIndex=_,t(d,z),n(l)===null&&z===n(d)&&(x?(u(I),I=-1):x=!0,Hi(v,_-G))):(z.sortIndex=X,t(l,z),b||y||(b=!0,Vi(N))),z},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(z){var M=f;return function(){var _=f;f=M;try{return z.apply(this,arguments)}finally{f=_}}}})(tc);ec.exports=tc;var Uu=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u=j,we=Uu;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nc=new Set,Vn={};function Ot(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=Object.prototype.hasOwnProperty,Bu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,js={},ks={};function Vu(e){return bo.call(ks,e)?!0:bo.call(js,e)?!1:Bu.test(e)?ks[e]=!0:(js[e]=!0,!1)}function Hu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wu(e,t,n,r){if(t===null||typeof t>"u"||Hu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ka=/[\-:]([a-z])/g;function Na(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ka,Na);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ka,Na);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ka,Na);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sa(e,t,n,r){var o=ne.hasOwnProperty(t)?ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wu(t,n,o,r)&&(n=null),r||o===null?Vu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=$u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),rc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),jo=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Qi;function In(e){if(Qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||""}return`
`+Qi+e}var qi=!1;function Ki(e,t){if(!e||qi)return"";qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),a=r.stack.split(`
`),s=o.length-1,c=a.length-1;1<=s&&0<=c&&o[s]!==a[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==a[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==a[c]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=c);break}}}finally{qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Gu(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Ki(e.type,!1),e;case 11:return e=Ki(e.type.render,!1),e;case 1:return e=Ki(e.type,!0),e;default:return""}}function No(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case $t:return"Portal";case wo:return"Profiler";case za:return"StrictMode";case jo:return"Suspense";case ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case rc:return(e._context.displayName||"Context")+".Provider";case Ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return t=e.displayName||null,t!==null?t:No(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return No(e(t))}catch{}}return null}function Qu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return No(t);case 8:return t===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qu(e){var t=ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=qu(e))}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function So(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ss(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lc(e,t){t=t.checked,t!=null&&Sa(e,"checked",t,!1)}function zo(e,t){lc(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Co(e,t.type,n):t.hasOwnProperty("defaultValue")&&Co(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Co(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Mn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function cc(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Es(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Po(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ku=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Ku.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function mc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Yu=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Io(e,t){if(t){if(Yu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function Pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,en=null,tn=null;function Ps(e){if(e=cr(e)){if(typeof To!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ci(t),To(e.stateNode,e.type,t))}}function fc(e){en?tn?tn.push(e):tn=[e]:en=e}function hc(){if(en){var e=en,t=tn;if(tn=en=null,Ps(e),t)for(e=0;e<t.length;e++)Ps(t[e])}}function gc(e,t){return e(t)}function xc(){}var Yi=!1;function yc(e,t,n){if(Yi)return e(t,n);Yi=!0;try{return gc(e,t,n)}finally{Yi=!1,(en!==null||tn!==null)&&(xc(),hc())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Lo=!1;if(Ke)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Lo=!1}function Xu(e,t,n,r,o,a,s,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var An=!1,Gr=null,Qr=!1,Ao=null,Zu={onError:function(e){An=!0,Gr=e}};function Ju(e,t,n,r,o,a,s,c,l){An=!1,Gr=null,Xu.apply(Zu,arguments)}function ep(e,t,n,r,o,a,s,c,l){if(Ju.apply(this,arguments),An){if(An){var d=Gr;An=!1,Gr=null}else throw Error(k(198));Qr||(Qr=!0,Ao=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Is(e){if(Dt(e)!==e)throw Error(k(188))}function tp(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Is(o),e;if(a===r)return Is(o),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,c=o.child;c;){if(c===n){s=!0,n=o,r=a;break}if(c===r){s=!0,r=o,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=o;break}if(c===r){s=!0,r=a,n=o;break}c=c.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function bc(e){return e=tp(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wc(e);if(t!==null)return t;e=e.sibling}return null}var jc=we.unstable_scheduleCallback,Ms=we.unstable_cancelCallback,np=we.unstable_shouldYield,rp=we.unstable_requestPaint,Q=we.unstable_now,ip=we.unstable_getCurrentPriorityLevel,Ia=we.unstable_ImmediatePriority,kc=we.unstable_UserBlockingPriority,qr=we.unstable_NormalPriority,op=we.unstable_LowPriority,Nc=we.unstable_IdlePriority,ki=null,$e=null;function ap(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:cp,sp=Math.log,lp=Math.LN2;function cp(e){return e>>>=0,e===0?32:31-(sp(e)/lp|0)|0}var vr=64,br=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~o;c!==0?r=_n(c):(a&=s,a!==0&&(r=_n(a)))}else s=n&~o,s!==0?r=_n(s):a!==0&&(r=_n(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),o=1<<n,r|=e[n],t&=~o;return r}function dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Ae(a),c=1<<s,l=o[s];l===-1?(!(c&n)||c&r)&&(o[s]=dp(c,t)):l<=t&&(e.expiredLanes|=c),a&=~c}}function Ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Xi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function pp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ae(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var R=0;function zc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,_a,Ec,Pc,Ic,Fo=!1,wr=[],ct=null,dt=null,ut=null,Gn=new Map,Qn=new Map,it=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Nn(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function fp(e,t,n,r,o){switch(t){case"focusin":return ct=Nn(ct,e,t,n,r,o),!0;case"dragenter":return dt=Nn(dt,e,t,n,r,o),!0;case"mouseover":return ut=Nn(ut,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Gn.set(a,Nn(Gn.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Qn.set(a,Nn(Qn.get(a)||null,e,t,n,r,o)),!0}return!1}function Mc(e){var t=zt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=vc(n),t!==null){e.blockedOn=t,Ic(e.priority,function(){Ec(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_o=r,n.target.dispatchEvent(r),_o=null}else return t=cr(n),t!==null&&_a(t),e.blockedOn=n,!1;t.shift()}return!0}function Ts(e,t,n){Lr(e)&&n.delete(t)}function hp(){Fo=!1,ct!==null&&Lr(ct)&&(ct=null),dt!==null&&Lr(dt)&&(dt=null),ut!==null&&Lr(ut)&&(ut=null),Gn.forEach(Ts),Qn.forEach(Ts)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,Fo||(Fo=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,hp)))}function qn(e){function t(o){return Sn(o,e)}if(0<wr.length){Sn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&Sn(ct,e),dt!==null&&Sn(dt,e),ut!==null&&Sn(ut,e),Gn.forEach(t),Qn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Mc(n),n.blockedOn===null&&it.shift()}var nn=et.ReactCurrentBatchConfig,Yr=!0;function gp(e,t,n,r){var o=R,a=nn.transition;nn.transition=null;try{R=1,Ta(e,t,n,r)}finally{R=o,nn.transition=a}}function xp(e,t,n,r){var o=R,a=nn.transition;nn.transition=null;try{R=4,Ta(e,t,n,r)}finally{R=o,nn.transition=a}}function Ta(e,t,n,r){if(Yr){var o=Oo(e,t,n,r);if(o===null)so(e,t,r,Xr,n),_s(e,r);else if(fp(o,e,t,n,r))r.stopPropagation();else if(_s(e,r),t&4&&-1<mp.indexOf(e)){for(;o!==null;){var a=cr(o);if(a!==null&&Cc(a),a=Oo(e,t,n,r),a===null&&so(e,t,r,Xr,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else so(e,t,r,null,n)}}var Xr=null;function Oo(e,t,n,r){if(Xr=null,e=Pa(r),e=zt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function _c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ip()){case Ia:return 1;case kc:return 4;case qr:case op:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var at=null,La=null,Ar=null;function Tc(){if(Ar)return Ar;var e,t=La,n=t.length,r,o="value"in at?at.value:at.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[a-r];r++);return Ar=o.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function Ls(){return!1}function ke(e){function t(n,r,o,a,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?jr:Ls,this.isPropagationStopped=Ls,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=ke(xn),lr=H({},xn,{view:0,detail:0}),yp=ke(lr),Zi,Ji,zn,Ni=H({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Zi=e.screenX-zn.screenX,Ji=e.screenY-zn.screenY):Ji=Zi=0,zn=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),As=ke(Ni),vp=H({},Ni,{dataTransfer:0}),bp=ke(vp),wp=H({},lr,{relatedTarget:0}),eo=ke(wp),jp=H({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),kp=ke(jp),Np=H({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sp=ke(Np),zp=H({},xn,{data:0}),Rs=ke(zp),Cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pp[e])?!!t[e]:!1}function Ra(){return Ip}var Mp=H({},lr,{key:function(e){if(e.key){var t=Cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ra,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=ke(Mp),Tp=H({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fs=ke(Tp),Lp=H({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ra}),Ap=ke(Lp),Rp=H({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=ke(Rp),Op=H({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=ke(Op),Up=[9,13,27,32],Fa=Ke&&"CompositionEvent"in window,Rn=null;Ke&&"documentMode"in document&&(Rn=document.documentMode);var $p=Ke&&"TextEvent"in window&&!Rn,Lc=Ke&&(!Fa||Rn&&8<Rn&&11>=Rn),Os=String.fromCharCode(32),Ds=!1;function Ac(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Bp(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Ds=!0,Os);case"textInput":return e=t.data,e===Os&&Ds?null:e;default:return null}}function Vp(e,t){if(Vt)return e==="compositionend"||!Fa&&Ac(e,t)?(e=Tc(),Ar=La=at=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lc&&t.locale!=="ko"?null:t.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hp[e.type]:t==="textarea"}function Fc(e,t,n,r){fc(r),t=Zr(t,"onChange"),0<t.length&&(n=new Aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fn=null,Kn=null;function Wp(e){qc(e,0)}function Si(e){var t=Gt(e);if(sc(t))return e}function Gp(e,t){if(e==="change")return t}var Oc=!1;if(Ke){var to;if(Ke){var no="oninput"in document;if(!no){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),no=typeof $s.oninput=="function"}to=no}else to=!1;Oc=to&&(!document.documentMode||9<document.documentMode)}function Bs(){Fn&&(Fn.detachEvent("onpropertychange",Dc),Kn=Fn=null)}function Dc(e){if(e.propertyName==="value"&&Si(Kn)){var t=[];Fc(t,Kn,e,Pa(e)),yc(Wp,t)}}function Qp(e,t,n){e==="focusin"?(Bs(),Fn=t,Kn=n,Fn.attachEvent("onpropertychange",Dc)):e==="focusout"&&Bs()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Kn)}function Kp(e,t){if(e==="click")return Si(t)}function Yp(e,t){if(e==="input"||e==="change")return Si(t)}function Xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Xp;function Yn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bo.call(t,o)||!Fe(e[o],t[o]))return!1}return!0}function Vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,t){var n=Vs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vs(n)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $c(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zp(e){var t=$c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uc(n.ownerDocument.documentElement,n)){if(r!==null&&Oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Hs(n,a);var s=Hs(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jp=Ke&&"documentMode"in document&&11>=document.documentMode,Ht=null,Do=null,On=null,Uo=!1;function Ws(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uo||Ht==null||Ht!==Wr(r)||(r=Ht,"selectionStart"in r&&Oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Yn(On,r)||(On=r,r=Zr(Do,"onSelect"),0<r.length&&(t=new Aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},ro={},Bc={};Ke&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function zi(e){if(ro[e])return ro[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bc)return ro[e]=t[n];return e}var Vc=zi("animationend"),Hc=zi("animationiteration"),Wc=zi("animationstart"),Gc=zi("transitionend"),Qc=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Qc.set(e,t),Ot(t,[e])}for(var io=0;io<Gs.length;io++){var oo=Gs[io],em=oo.toLowerCase(),tm=oo[0].toUpperCase()+oo.slice(1);vt(em,"on"+tm)}vt(Vc,"onAnimationEnd");vt(Hc,"onAnimationIteration");vt(Wc,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(Gc,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ep(r,t,void 0,e),e.currentTarget=null}function qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==a&&o.isPropagationStopped())break e;Qs(o,c,d),a=l}else for(s=0;s<r.length;s++){if(c=r[s],l=c.instance,d=c.currentTarget,c=c.listener,l!==a&&o.isPropagationStopped())break e;Qs(o,c,d),a=l}}}if(Qr)throw e=Ao,Qr=!1,Ao=null,e}function O(e,t){var n=t[Wo];n===void 0&&(n=t[Wo]=new Set);var r=e+"__bubble";n.has(r)||(Kc(t,e,2,!1),n.add(r))}function ao(e,t,n){var r=0;t&&(r|=4),Kc(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Nr]){e[Nr]=!0,nc.forEach(function(n){n!=="selectionchange"&&(nm.has(n)||ao(n,!1,e),ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,ao("selectionchange",!1,t))}}function Kc(e,t,n,r){switch(_c(t)){case 1:var o=gp;break;case 4:o=xp;break;default:o=Ta}n=o.bind(null,t,n,e),o=void 0,!Lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function so(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;c!==null;){if(s=zt(c),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}c=c.parentNode}}r=r.return}yc(function(){var d=a,g=Pa(n),m=[];e:{var f=Qc.get(e);if(f!==void 0){var y=Aa,b=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":y=_p;break;case"focusin":b="focus",y=eo;break;case"focusout":b="blur",y=eo;break;case"beforeblur":case"afterblur":y=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=As;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ap;break;case Vc:case Hc:case Wc:y=kp;break;case Gc:y=Fp;break;case"scroll":y=yp;break;case"wheel":y=Dp;break;case"copy":case"cut":case"paste":y=Sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Fs}var x=(t&4)!==0,w=!x&&e==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var p=d,h;p!==null;){h=p;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,u!==null&&(v=Wn(p,u),v!=null&&x.push(Zn(p,v,h)))),w)break;p=p.return}0<x.length&&(f=new y(f,b,null,n,g),m.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==_o&&(b=n.relatedTarget||n.fromElement)&&(zt(b)||b[Ye]))break e;if((y||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=d,b=b?zt(b):null,b!==null&&(w=Dt(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(x=As,v="onMouseLeave",u="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Fs,v="onPointerLeave",u="onPointerEnter",p="pointer"),w=y==null?f:Gt(y),h=b==null?f:Gt(b),f=new x(v,p+"leave",y,n,g),f.target=w,f.relatedTarget=h,v=null,zt(g)===d&&(x=new x(u,p+"enter",b,n,g),x.target=h,x.relatedTarget=w,v=x),w=v,y&&b)t:{for(x=y,u=b,p=0,h=x;h;h=Ut(h))p++;for(h=0,v=u;v;v=Ut(v))h++;for(;0<p-h;)x=Ut(x),p--;for(;0<h-p;)u=Ut(u),h--;for(;p--;){if(x===u||u!==null&&x===u.alternate)break t;x=Ut(x),u=Ut(u)}x=null}else x=null;y!==null&&qs(m,f,y,x,!1),b!==null&&w!==null&&qs(m,w,b,x,!0)}}e:{if(f=d?Gt(d):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var N=Gp;else if(Us(f))if(Oc)N=Yp;else{N=qp;var C=Qp}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Kp);if(N&&(N=N(e,d))){Fc(m,N,n,g);break e}C&&C(e,f,d),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Co(f,"number",f.value)}switch(C=d?Gt(d):window,e){case"focusin":(Us(C)||C.contentEditable==="true")&&(Ht=C,Do=d,On=null);break;case"focusout":On=Do=Ht=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,Ws(m,n,g);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":Ws(m,n,g)}var P;if(Fa)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Vt?Ac(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Lc&&n.locale!=="ko"&&(Vt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Vt&&(P=Tc()):(at=g,La="value"in at?at.value:at.textContent,Vt=!0)),C=Zr(d,I),0<C.length&&(I=new Rs(I,e,null,n,g),m.push({event:I,listeners:C}),P?I.data=P:(P=Rc(n),P!==null&&(I.data=P)))),(P=$p?Bp(e,n):Vp(e,n))&&(d=Zr(d,"onBeforeInput"),0<d.length&&(g=new Rs("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=P))}qc(m,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Wn(e,n),a!=null&&r.unshift(Zn(e,a,o)),a=Wn(e,t),a!=null&&r.push(Zn(e,a,o))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,o){for(var a=t._reactName,s=[];n!==null&&n!==r;){var c=n,l=c.alternate,d=c.stateNode;if(l!==null&&l===r)break;c.tag===5&&d!==null&&(c=d,o?(l=Wn(n,a),l!=null&&s.unshift(Zn(n,l,c))):o||(l=Wn(n,a),l!=null&&s.push(Zn(n,l,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var rm=/\r\n?/g,im=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(rm,`
`).replace(im,"")}function Sr(e,t,n){if(t=Ks(t),Ks(e)!==t&&n)throw Error(k(425))}function Jr(){}var $o=null,Bo=null;function Vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(sm)}:Ho;function sm(e){setTimeout(function(){throw e})}function lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+yn,Jn="__reactProps$"+yn,Ye="__reactContainer$"+yn,Wo="__reactEvents$"+yn,lm="__reactListeners$"+yn,cm="__reactHandles$"+yn;function zt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xs(e);e!==null;){if(n=e[Ue])return n;e=Xs(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Ue]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ci(e){return e[Jn]||null}var Go=[],Qt=-1;function bt(e){return{current:e}}function D(e){0>Qt||(e.current=Go[Qt],Go[Qt]=null,Qt--)}function F(e,t){Qt++,Go[Qt]=e.current,e.current=t}var yt={},ae=bt(yt),me=bt(!1),Tt=yt;function ln(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function fe(e){return e=e.childContextTypes,e!=null}function ei(){D(me),D(ae)}function Zs(e,t,n){if(ae.current!==yt)throw Error(k(168));F(ae,t),F(me,n)}function Yc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Qu(e)||"Unknown",o));return H({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Tt=ae.current,F(ae,e),F(me,me.current),!0}function Js(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Yc(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,D(me),D(ae),F(ae,e)):D(me),F(me,n)}var He=null,Ei=!1,co=!1;function Xc(e){He===null?He=[e]:He.push(e)}function dm(e){Ei=!0,Xc(e)}function wt(){if(!co&&He!==null){co=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,Ei=!1}catch(o){throw He!==null&&(He=He.slice(e+1)),jc(Ia,wt),o}finally{R=t,co=!1}}return null}var qt=[],Kt=0,ni=null,ri=0,Ne=[],Se=0,Lt=null,We=1,Ge="";function Nt(e,t){qt[Kt++]=ri,qt[Kt++]=ni,ni=e,ri=t}function Zc(e,t,n){Ne[Se++]=We,Ne[Se++]=Ge,Ne[Se++]=Lt,Lt=e;var r=We;e=Ge;var o=32-Ae(r)-1;r&=~(1<<o),n+=1;var a=32-Ae(t)+o;if(30<a){var s=o-o%5;a=(r&(1<<s)-1).toString(32),r>>=s,o-=s,We=1<<32-Ae(t)+o|n<<o|r,Ge=a+e}else We=1<<a|n<<o|r,Ge=e}function Da(e){e.return!==null&&(Nt(e,1),Zc(e,1,0))}function Ua(e){for(;e===ni;)ni=qt[--Kt],qt[Kt]=null,ri=qt[--Kt],qt[Kt]=null;for(;e===Lt;)Lt=Ne[--Se],Ne[Se]=null,Ge=Ne[--Se],Ne[Se]=null,We=Ne[--Se],Ne[Se]=null}var be=null,ve=null,U=!1,Le=null;function Jc(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function el(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,ve=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:We,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,ve=null,!0):!1;default:return!1}}function Qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qo(e){if(U){var t=ve;if(t){var n=t;if(!el(e,t)){if(Qo(e))throw Error(k(418));t=pt(n.nextSibling);var r=be;t&&el(e,t)?Jc(r,n):(e.flags=e.flags&-4097|2,U=!1,be=e)}}else{if(Qo(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,be=e}}}function tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function zr(e){if(e!==be)return!1;if(!U)return tl(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vo(e.type,e.memoizedProps)),t&&(t=ve)){if(Qo(e))throw ed(),Error(k(418));for(;t;)Jc(e,t),t=pt(t.nextSibling)}if(tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=be?pt(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=ve;e;)e=pt(e.nextSibling)}function cn(){ve=be=null,U=!1}function $a(e){Le===null?Le=[e]:Le.push(e)}var um=et.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var c=o.refs;s===null?delete c[a]:c[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nl(e){var t=e._init;return t(e._payload)}function td(e){function t(u,p){if(e){var h=u.deletions;h===null?(u.deletions=[p],u.flags|=16):h.push(p)}}function n(u,p){if(!e)return null;for(;p!==null;)t(u,p),p=p.sibling;return null}function r(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function o(u,p){return u=gt(u,p),u.index=0,u.sibling=null,u}function a(u,p,h){return u.index=h,e?(h=u.alternate,h!==null?(h=h.index,h<p?(u.flags|=2,p):h):(u.flags|=2,p)):(u.flags|=1048576,p)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function c(u,p,h,v){return p===null||p.tag!==6?(p=xo(h,u.mode,v),p.return=u,p):(p=o(p,h),p.return=u,p)}function l(u,p,h,v){var N=h.type;return N===Bt?g(u,p,h.props.children,v,h.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===nt&&nl(N)===p.type)?(v=o(p,h.props),v.ref=Cn(u,p,h),v.return=u,v):(v=Vr(h.type,h.key,h.props,null,u.mode,v),v.ref=Cn(u,p,h),v.return=u,v)}function d(u,p,h,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=yo(h,u.mode,v),p.return=u,p):(p=o(p,h.children||[]),p.return=u,p)}function g(u,p,h,v,N){return p===null||p.tag!==7?(p=_t(h,u.mode,v,N),p.return=u,p):(p=o(p,h),p.return=u,p)}function m(u,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xo(""+p,u.mode,h),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:return h=Vr(p.type,p.key,p.props,null,u.mode,h),h.ref=Cn(u,null,p),h.return=u,h;case $t:return p=yo(p,u.mode,h),p.return=u,p;case nt:var v=p._init;return m(u,v(p._payload),h)}if(Mn(p)||jn(p))return p=_t(p,u.mode,h,null),p.return=u,p;Cr(u,p)}return null}function f(u,p,h,v){var N=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:c(u,p,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gr:return h.key===N?l(u,p,h,v):null;case $t:return h.key===N?d(u,p,h,v):null;case nt:return N=h._init,f(u,p,N(h._payload),v)}if(Mn(h)||jn(h))return N!==null?null:g(u,p,h,v,null);Cr(u,h)}return null}function y(u,p,h,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return u=u.get(h)||null,c(p,u,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gr:return u=u.get(v.key===null?h:v.key)||null,l(p,u,v,N);case $t:return u=u.get(v.key===null?h:v.key)||null,d(p,u,v,N);case nt:var C=v._init;return y(u,p,h,C(v._payload),N)}if(Mn(v)||jn(v))return u=u.get(h)||null,g(p,u,v,N,null);Cr(p,v)}return null}function b(u,p,h,v){for(var N=null,C=null,P=p,I=p=0,$=null;P!==null&&I<h.length;I++){P.index>I?($=P,P=null):$=P.sibling;var L=f(u,P,h[I],v);if(L===null){P===null&&(P=$);break}e&&P&&L.alternate===null&&t(u,P),p=a(L,p,I),C===null?N=L:C.sibling=L,C=L,P=$}if(I===h.length)return n(u,P),U&&Nt(u,I),N;if(P===null){for(;I<h.length;I++)P=m(u,h[I],v),P!==null&&(p=a(P,p,I),C===null?N=P:C.sibling=P,C=P);return U&&Nt(u,I),N}for(P=r(u,P);I<h.length;I++)$=y(P,u,I,h[I],v),$!==null&&(e&&$.alternate!==null&&P.delete($.key===null?I:$.key),p=a($,p,I),C===null?N=$:C.sibling=$,C=$);return e&&P.forEach(function(Ie){return t(u,Ie)}),U&&Nt(u,I),N}function x(u,p,h,v){var N=jn(h);if(typeof N!="function")throw Error(k(150));if(h=N.call(h),h==null)throw Error(k(151));for(var C=N=null,P=p,I=p=0,$=null,L=h.next();P!==null&&!L.done;I++,L=h.next()){P.index>I?($=P,P=null):$=P.sibling;var Ie=f(u,P,L.value,v);if(Ie===null){P===null&&(P=$);break}e&&P&&Ie.alternate===null&&t(u,P),p=a(Ie,p,I),C===null?N=Ie:C.sibling=Ie,C=Ie,P=$}if(L.done)return n(u,P),U&&Nt(u,I),N;if(P===null){for(;!L.done;I++,L=h.next())L=m(u,L.value,v),L!==null&&(p=a(L,p,I),C===null?N=L:C.sibling=L,C=L);return U&&Nt(u,I),N}for(P=r(u,P);!L.done;I++,L=h.next())L=y(P,u,I,L.value,v),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?I:L.key),p=a(L,p,I),C===null?N=L:C.sibling=L,C=L);return e&&P.forEach(function(bn){return t(u,bn)}),U&&Nt(u,I),N}function w(u,p,h,v){if(typeof h=="object"&&h!==null&&h.type===Bt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case gr:e:{for(var N=h.key,C=p;C!==null;){if(C.key===N){if(N=h.type,N===Bt){if(C.tag===7){n(u,C.sibling),p=o(C,h.props.children),p.return=u,u=p;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===nt&&nl(N)===C.type){n(u,C.sibling),p=o(C,h.props),p.ref=Cn(u,C,h),p.return=u,u=p;break e}n(u,C);break}else t(u,C);C=C.sibling}h.type===Bt?(p=_t(h.props.children,u.mode,v,h.key),p.return=u,u=p):(v=Vr(h.type,h.key,h.props,null,u.mode,v),v.ref=Cn(u,p,h),v.return=u,u=v)}return s(u);case $t:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(u,p.sibling),p=o(p,h.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else t(u,p);p=p.sibling}p=yo(h,u.mode,v),p.return=u,u=p}return s(u);case nt:return C=h._init,w(u,p,C(h._payload),v)}if(Mn(h))return b(u,p,h,v);if(jn(h))return x(u,p,h,v);Cr(u,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(u,p.sibling),p=o(p,h),p.return=u,u=p):(n(u,p),p=xo(h,u.mode,v),p.return=u,u=p),s(u)):n(u,p)}return w}var dn=td(!0),nd=td(!1),ii=bt(null),oi=null,Yt=null,Ba=null;function Va(){Ba=Yt=oi=null}function Ha(e){var t=ii.current;D(ii),e._currentValue=t}function Ko(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){oi=e,Ba=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(Ba!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(oi===null)throw Error(k(308));Yt=e,oi.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Ct=null;function Wa(e){Ct===null?Ct=[e]:Ct.push(e)}function rd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xe(e,n)}return o=r.interleaved,o===null?(t.next=t,Wa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xe(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}function rl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,r){var o=e.updateQueue;rt=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var l=c,d=l.next;l.next=null,s===null?a=d:s.next=d,s=l;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==s&&(c===null?g.firstBaseUpdate=d:c.next=d,g.lastBaseUpdate=l))}if(a!==null){var m=o.baseState;s=0,g=d=l=null,c=a;do{var f=c.lane,y=c.eventTime;if((r&f)===f){g!==null&&(g=g.next={eventTime:y,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,x=c;switch(f=t,y=n,x.tag){case 1:if(b=x.payload,typeof b=="function"){m=b.call(y,m,f);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=x.payload,f=typeof b=="function"?b.call(y,m,f):b,f==null)break e;m=H({},m,f);break e;case 2:rt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[c]:f.push(c))}else y={eventTime:y,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(d=g=y,l=m):g=g.next=y,s|=f;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;f=c,c=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(g===null&&(l=m),o.baseState=l,o.firstBaseUpdate=d,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Rt|=s,e.lanes=s,e.memoizedState=m}}function il(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var dr={},Be=bt(dr),er=bt(dr),tr=bt(dr);function Et(e){if(e===dr)throw Error(k(174));return e}function Qa(e,t){switch(F(tr,t),F(er,e),F(Be,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Po(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Po(t,e)}D(Be),F(Be,t)}function un(){D(Be),D(er),D(tr)}function od(e){Et(tr.current);var t=Et(Be.current),n=Po(t,e.type);t!==n&&(F(er,e),F(Be,n))}function qa(e){er.current===e&&(D(Be),D(er))}var B=bt(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=[];function Ka(){for(var e=0;e<uo.length;e++)uo[e]._workInProgressVersionPrimary=null;uo.length=0}var Or=et.ReactCurrentDispatcher,po=et.ReactCurrentBatchConfig,At=0,V=null,K=null,Z=null,li=!1,Dn=!1,nr=0,pm=0;function re(){throw Error(k(321))}function Ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Xa(e,t,n,r,o,a){if(At=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?gm:xm,e=n(r,o),Dn){a=0;do{if(Dn=!1,nr=0,25<=a)throw Error(k(301));a+=1,Z=K=null,t.updateQueue=null,Or.current=ym,e=n(r,o)}while(Dn)}if(Or.current=ci,t=K!==null&&K.next!==null,At=0,Z=K=V=null,li=!1,t)throw Error(k(300));return e}function Za(){var e=nr!==0;return nr=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function Pe(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(k(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function rr(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=K,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var c=s=null,l=null,d=a;do{var g=d.lane;if((At&g)===g)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=m,s=r):l=l.next=m,V.lanes|=g,Rt|=g}d=d.next}while(d!==null&&d!==a);l===null?s=r:l.next=c,Fe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,V.lanes|=a,Rt|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);Fe(a,t.memoizedState)||(pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ad(){}function sd(e,t){var n=V,r=Pe(),o=t(),a=!Fe(r.memoizedState,o);if(a&&(r.memoizedState=o,pe=!0),r=r.queue,Ja(dd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,ir(9,cd.bind(null,n,r,o,t),void 0,null),J===null)throw Error(k(349));At&30||ld(n,t,o)}return o}function ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cd(e,t,n,r){t.value=n,t.getSnapshot=r,ud(t)&&pd(e)}function dd(e,t,n){return n(function(){ud(t)&&pd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function pd(e){var t=Xe(e,1);t!==null&&Re(t,e,1,-1)}function ol(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=hm.bind(null,V,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function md(){return Pe().memoizedState}function Dr(e,t,n,r){var o=De();V.flags|=e,o.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function Pi(e,t,n,r){var o=Pe();r=r===void 0?null:r;var a=void 0;if(K!==null){var s=K.memoizedState;if(a=s.destroy,r!==null&&Ya(r,s.deps)){o.memoizedState=ir(t,n,a,r);return}}V.flags|=e,o.memoizedState=ir(1|t,n,a,r)}function al(e,t){return Dr(8390656,8,e,t)}function Ja(e,t){return Pi(2048,8,e,t)}function fd(e,t){return Pi(4,2,e,t)}function hd(e,t){return Pi(4,4,e,t)}function gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xd(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4,4,gd.bind(null,t,e),n)}function es(){}function yd(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vd(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bd(e,t,n){return At&21?(Fe(n,t)||(n=Sc(),V.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function mm(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=po.transition;po.transition={};try{e(!1),t()}finally{R=n,po.transition=r}}function wd(){return Pe().memoizedState}function fm(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jd(e))kd(t,n);else if(n=rd(e,t,n,r),n!==null){var o=le();Re(n,e,r,o),Nd(n,t,r)}}function hm(e,t,n){var r=ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jd(e))kd(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,c=a(s,n);if(o.hasEagerState=!0,o.eagerState=c,Fe(c,s)){var l=t.interleaved;l===null?(o.next=o,Wa(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=rd(e,t,o,r),n!==null&&(o=le(),Re(n,e,r,o),Nd(n,t,r))}}function jd(e){var t=e.alternate;return e===V||t!==null&&t===V}function kd(e,t){Dn=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}var ci={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},gm={readContext:Ee,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:al,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fm.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:ol,useDebugValue:es,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=ol(!1),t=e[0];return e=mm.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,o=De();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),J===null)throw Error(k(349));At&30||ld(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,al(dd.bind(null,r,a,e),[e]),r.flags|=2048,ir(9,cd.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=De(),t=J.identifierPrefix;if(U){var n=Ge,r=We;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xm={readContext:Ee,useCallback:yd,useContext:Ee,useEffect:Ja,useImperativeHandle:xd,useInsertionEffect:fd,useLayoutEffect:hd,useMemo:vd,useReducer:mo,useRef:md,useState:function(){return mo(rr)},useDebugValue:es,useDeferredValue:function(e){var t=Pe();return bd(t,K.memoizedState,e)},useTransition:function(){var e=mo(rr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:sd,useId:wd,unstable_isNewReconciler:!1},ym={readContext:Ee,useCallback:yd,useContext:Ee,useEffect:Ja,useImperativeHandle:xd,useInsertionEffect:fd,useLayoutEffect:hd,useMemo:vd,useReducer:fo,useRef:md,useState:function(){return fo(rr)},useDebugValue:es,useDeferredValue:function(e){var t=Pe();return K===null?t.memoizedState=e:bd(t,K.memoizedState,e)},useTransition:function(){var e=fo(rr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:sd,useId:wd,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ii={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),o=ht(e),a=Qe(r,o);a.payload=t,n!=null&&(a.callback=n),t=mt(e,a,o),t!==null&&(Re(t,e,o,r),Fr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),o=ht(e),a=Qe(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=mt(e,a,o),t!==null&&(Re(t,e,o,r),Fr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=ht(e),o=Qe(n,r);o.tag=2,t!=null&&(o.callback=t),t=mt(e,o,r),t!==null&&(Re(t,e,r,n),Fr(t,e,r))}};function sl(e,t,n,r,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(o,a):!0}function Sd(e,t,n){var r=!1,o=yt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ee(a):(o=fe(t)?Tt:ae.current,r=t.contextTypes,a=(r=r!=null)?ln(e,o):yt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ii,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ii.enqueueReplaceState(t,t.state,null)}function Xo(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ga(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ee(a):(a=fe(t)?Tt:ae.current,o.context=ln(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Yo(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ii.enqueueReplaceState(o,o.state,null),ai(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Gu(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ho(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vm=typeof WeakMap=="function"?WeakMap:Map;function zd(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,la=r),Zo(e,t)},n}function Cd(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zo(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Zo(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function cl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Tm.bind(null,e,t,n),t.then(e,e))}function dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ul(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var bm=et.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?nd(t,null,n,r):dn(t,e.child,n,r)}function pl(e,t,n,r,o){n=n.render;var a=t.ref;return rn(t,o),r=Xa(e,t,n,r,a,o),n=Za(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(U&&n&&Da(t),t.flags|=1,se(e,t,r,o),t.child)}function ml(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!ls(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ed(e,t,a,r,o)):(e=Vr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(s,r)&&e.ref===t.ref)return Ze(e,t,o)}return t.flags|=1,e=gt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ed(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Yn(a,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ze(e,t,o)}return Jo(e,t,n,r,o)}function Pd(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Zt,ye),ye|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Zt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,F(Zt,ye),ye|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,F(Zt,ye),ye|=r;return se(e,t,o,n),t.child}function Id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jo(e,t,n,r,o){var a=fe(n)?Tt:ae.current;return a=ln(t,a),rn(t,o),n=Xa(e,t,n,r,a,o),r=Za(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(U&&r&&Da(t),t.flags|=1,se(e,t,n,o),t.child)}function fl(e,t,n,r,o){if(fe(n)){var a=!0;ti(t)}else a=!1;if(rn(t,o),t.stateNode===null)Ur(e,t),Sd(t,n,r),Xo(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=fe(n)?Tt:ae.current,d=ln(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||l!==d)&&ll(t,s,r,d),rt=!1;var f=t.memoizedState;s.state=f,ai(t,r,s,o),l=t.memoizedState,c!==r||f!==l||me.current||rt?(typeof g=="function"&&(Yo(t,n,g,r),l=t.memoizedState),(c=rt||sl(t,n,c,r,f,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=d,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,id(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:_e(t.type,c),s.props=d,m=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ee(l):(l=fe(n)?Tt:ae.current,l=ln(t,l));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==m||f!==l)&&ll(t,s,r,l),rt=!1,f=t.memoizedState,s.state=f,ai(t,r,s,o);var b=t.memoizedState;c!==m||f!==b||me.current||rt?(typeof y=="function"&&(Yo(t,n,y,r),b=t.memoizedState),(d=rt||sl(t,n,d,r,f,b,l)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ea(e,t,n,r,a,o)}function ea(e,t,n,r,o,a){Id(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Js(t,n,!1),Ze(e,t,a);r=t.stateNode,bm.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=dn(t,e.child,null,a),t.child=dn(t,null,c,a)):se(e,t,c,a),t.memoizedState=r.state,o&&Js(t,n,!0),t.child}function Md(e){var t=e.stateNode;t.pendingContext?Zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zs(e,t.context,!1),Qa(e,t.containerInfo)}function hl(e,t,n,r,o){return cn(),$a(o),t.flags|=256,se(e,t,n,r),t.child}var ta={dehydrated:null,treeContext:null,retryLane:0};function na(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,t,n){var r=t.pendingProps,o=B.current,a=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),F(B,o&1),e===null)return qo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Ti(s,r,0,null),e=_t(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=na(n),t.memoizedState=ta,e):ts(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return wm(e,t,s,r,c,o,n);if(a){a=r.fallback,s=t.mode,o=e.child,c=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gt(o,l),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?a=gt(c,a):(a=_t(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?na(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=ta,r}return a=e.child,e=a.sibling,r=gt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ts(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&$a(r),dn(t,e.child,null,n),e=ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wm(e,t,n,r,o,a,s){if(n)return t.flags&256?(t.flags&=-257,r=ho(Error(k(422))),Er(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Ti({mode:"visible",children:r.children},o,0,null),a=_t(a,o,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&dn(t,e.child,null,s),t.child.memoizedState=na(s),t.memoizedState=ta,a);if(!(t.mode&1))return Er(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(k(419)),r=ho(a,r,void 0),Er(e,t,s,r)}if(c=(s&e.childLanes)!==0,pe||c){if(r=J,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Xe(e,o),Re(r,e,o,-1))}return ss(),r=ho(Error(k(421))),Er(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Lm.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,ve=pt(o.nextSibling),be=t,U=!0,Le=null,e!==null&&(Ne[Se++]=We,Ne[Se++]=Ge,Ne[Se++]=Lt,We=e.id,Ge=e.overflow,Lt=t),t=ts(t,r.children),t.flags|=4096,t)}function gl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ko(e.return,t,n)}function go(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Td(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,n,t);else if(e.tag===19)gl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),go(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&si(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}go(t,!0,n,null,a);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jm(e,t,n){switch(t.tag){case 3:Md(t),cn();break;case 5:od(t);break;case 1:fe(t.type)&&ti(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;F(ii,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?_d(e,t,n):(F(B,B.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Td(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,n)}return Ze(e,t,n)}var Ld,ra,Ad,Rd;Ld=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ra=function(){};Ad=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Et(Be.current);var a=null;switch(n){case"input":o=So(e,o),r=So(e,r),a=[];break;case"select":o=H({},o,{value:void 0}),r=H({},r,{value:void 0}),a=[];break;case"textarea":o=Eo(e,o),r=Eo(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Io(n,r);var s;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var c=o[d];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var l=r[d];if(c=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&O("scroll",e),a||c===l||(a=[])):(a=a||[]).push(d,l))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Rd=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function km(e,t,n){var r=t.pendingProps;switch(Ua(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return fe(t.type)&&ei(),ie(t),null;case 3:return r=t.stateNode,un(),D(me),D(ae),Ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(ua(Le),Le=null))),ra(e,t),ie(t),null;case 5:qa(t);var o=Et(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ad(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ie(t),null}if(e=Et(Be.current),zr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ue]=t,r[Jn]=a,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(o=0;o<Tn.length;o++)O(Tn[o],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ss(r,a),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},O("invalid",r);break;case"textarea":Cs(r,a),O("invalid",r)}Io(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&Sr(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&Sr(r.textContent,c,e),o=["children",""+c]):Vn.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&O("scroll",r)}switch(n){case"input":xr(r),zs(r,a,!0);break;case"textarea":xr(r),Es(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Jr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ue]=t,e[Jn]=r,Ld(e,t,!1,!1),t.stateNode=e;e:{switch(s=Mo(n,r),n){case"dialog":O("cancel",e),O("close",e),o=r;break;case"iframe":case"object":case"embed":O("load",e),o=r;break;case"video":case"audio":for(o=0;o<Tn.length;o++)O(Tn[o],e);o=r;break;case"source":O("error",e),o=r;break;case"img":case"image":case"link":O("error",e),O("load",e),o=r;break;case"details":O("toggle",e),o=r;break;case"input":Ss(e,r),o=So(e,r),O("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Cs(e,r),o=Eo(e,r),O("invalid",e);break;default:o=r}Io(n,o),c=o;for(a in c)if(c.hasOwnProperty(a)){var l=c[a];a==="style"?mc(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uc(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hn(e,l):typeof l=="number"&&Hn(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vn.hasOwnProperty(a)?l!=null&&a==="onScroll"&&O("scroll",e):l!=null&&Sa(e,a,l,s))}switch(n){case"input":xr(e),zs(e,r,!1);break;case"textarea":xr(e),Es(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Jt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Rd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Et(tr.current),Et(Be.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(a=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return ie(t),null;case 13:if(D(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&t.mode&1&&!(t.flags&128))ed(),cn(),t.flags|=98560,a=!1;else if(a=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[Ue]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),a=!1}else Le!==null&&(ua(Le),Le=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):ss())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return un(),ra(e,t),e===null&&Xn(t.stateNode.containerInfo),ie(t),null;case 10:return Ha(t.type._context),ie(t),null;case 17:return fe(t.type)&&ei(),ie(t),null;case 19:if(D(B),a=t.memoizedState,a===null)return ie(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)En(a,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=si(e),s!==null){for(t.flags|=128,En(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(B,B.current&1|2),t.child}e=e.sibling}a.tail!==null&&Q()>mn&&(t.flags|=128,r=!0,En(a,!1),t.lanes=4194304)}else{if(!r)if(e=si(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!U)return ie(t),null}else 2*Q()-a.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,En(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Q(),t.sibling=null,n=B.current,F(B,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return as(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Nm(e,t){switch(Ua(t),t.tag){case 1:return fe(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),D(me),D(ae),Ka(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if(D(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(B),null;case 4:return un(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return as(),null;case 24:return null;default:return null}}var Pr=!1,oe=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,S=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function ia(e,t,n){try{n()}catch(r){W(e,t,r)}}var xl=!1;function zm(e,t){if($o=Yr,e=$c(),Oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,c=-1,l=-1,d=0,g=0,m=e,f=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(c=s+o),m!==a||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)f=m,m=y;for(;;){if(m===e)break t;if(f===n&&++d===o&&(c=s),f===a&&++g===r&&(l=s),(y=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=y}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bo={focusedElem:e,selectionRange:n},Yr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var x=b.memoizedProps,w=b.memoizedState,u=t.stateNode,p=u.getSnapshotBeforeUpdate(t.elementType===t.type?x:_e(t.type,x),w);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){W(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return b=xl,xl=!1,b}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&ia(t,n,a)}o=o.next}while(o!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fd(e){var t=e.alternate;t!==null&&(e.alternate=null,Fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Jn],delete t[Wo],delete t[lm],delete t[cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Od(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}var ee=null,Te=!1;function tt(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:oe||Xt(n,t);case 6:var r=ee,o=Te;ee=null,tt(e,t,n),ee=r,Te=o,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?lo(e.parentNode,n):e.nodeType===1&&lo(e,n),qn(e)):lo(ee,n.stateNode));break;case 4:r=ee,o=Te,ee=n.stateNode.containerInfo,Te=!0,tt(e,t,n),ee=r,Te=o;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&ia(n,t,s),o=o.next}while(o!==r)}tt(e,t,n);break;case 1:if(!oe&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){W(n,t,c)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,tt(e,t,n),oe=r):tt(e,t,n);break;default:tt(e,t,n)}}function vl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var o=Am.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:ee=c.stateNode,Te=!1;break e;case 3:ee=c.stateNode.containerInfo,Te=!0;break e;case 4:ee=c.stateNode.containerInfo,Te=!0;break e}c=c.return}if(ee===null)throw Error(k(160));Dd(a,s,o),ee=null,Te=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(d){W(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}function Ud(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Oe(e),r&4){try{Un(3,e,e.return),Mi(3,e)}catch(x){W(e,e.return,x)}try{Un(5,e,e.return)}catch(x){W(e,e.return,x)}}break;case 1:Me(t,e),Oe(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Me(t,e),Oe(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var o=e.stateNode;try{Hn(o,"")}catch(x){W(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&lc(o,a),Mo(c,s);var d=Mo(c,a);for(s=0;s<l.length;s+=2){var g=l[s],m=l[s+1];g==="style"?mc(o,m):g==="dangerouslySetInnerHTML"?uc(o,m):g==="children"?Hn(o,m):Sa(o,g,m,d)}switch(c){case"input":zo(o,a);break;case"textarea":cc(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Jt(o,!!a.multiple,y,!1):f!==!!a.multiple&&(a.defaultValue!=null?Jt(o,!!a.multiple,a.defaultValue,!0):Jt(o,!!a.multiple,a.multiple?[]:"",!1))}o[Jn]=a}catch(x){W(e,e.return,x)}}break;case 6:if(Me(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(x){W(e,e.return,x)}}break;case 3:if(Me(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(x){W(e,e.return,x)}break;case 4:Me(t,e),Oe(e);break;case 13:Me(t,e),Oe(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(is=Q())),r&4&&vl(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||g,Me(t,e),oe=d):Me(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(m=S=g;S!==null;){switch(f=S,y=f.child,f.tag){case 0:case 11:case 14:case 15:Un(4,f,f.return);break;case 1:Xt(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(x){W(r,n,x)}}break;case 5:Xt(f,f.return);break;case 22:if(f.memoizedState!==null){wl(m);continue}}y!==null?(y.return=f,S=y):wl(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{o=m.stateNode,d?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=pc("display",s))}catch(x){W(e,e.return,x)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(x){W(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Oe(e),r&4&&vl(e);break;case 21:break;default:Me(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Od(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hn(o,""),r.flags&=-33);var a=yl(e);sa(e,a,o);break;case 3:case 4:var s=r.stateNode.containerInfo,c=yl(e);aa(e,c,s);break;default:throw Error(k(161))}}catch(l){W(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e,t,n){S=e,$d(e)}function $d(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var o=S,a=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Pr;if(!s){var c=o.alternate,l=c!==null&&c.memoizedState!==null||oe;c=Pr;var d=oe;if(Pr=s,(oe=l)&&!d)for(S=o;S!==null;)s=S,l=s.child,s.tag===22&&s.memoizedState!==null?jl(o):l!==null?(l.return=s,S=l):jl(o);for(;a!==null;)S=a,$d(a),a=a.sibling;S=o,Pr=c,oe=d}bl(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,S=a):bl(e)}}function bl(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&il(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}il(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&qn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&oa(t)}catch(f){W(t,t.return,f)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function wl(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function jl(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(l){W(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){W(t,o,l)}}var a=t.return;try{oa(t)}catch(l){W(t,a,l)}break;case 5:var s=t.return;try{oa(t)}catch(l){W(t,s,l)}}}catch(l){W(t,t.return,l)}if(t===e){S=null;break}var c=t.sibling;if(c!==null){c.return=t.return,S=c;break}S=t.return}}var Em=Math.ceil,di=et.ReactCurrentDispatcher,ns=et.ReactCurrentOwner,Ce=et.ReactCurrentBatchConfig,A=0,J=null,q=null,te=0,ye=0,Zt=bt(0),Y=0,or=null,Rt=0,_i=0,rs=0,$n=null,ue=null,is=0,mn=1/0,Ve=null,ui=!1,la=null,ft=null,Ir=!1,st=null,pi=0,Bn=0,ca=null,$r=-1,Br=0;function le(){return A&6?Q():$r!==-1?$r:$r=Q()}function ht(e){return e.mode&1?A&2&&te!==0?te&-te:um.transition!==null?(Br===0&&(Br=Sc()),Br):(e=R,e!==0||(e=window.event,e=e===void 0?16:_c(e.type)),e):1}function Re(e,t,n,r){if(50<Bn)throw Bn=0,ca=null,Error(k(185));sr(e,n,r),(!(A&2)||e!==J)&&(e===J&&(!(A&2)&&(_i|=n),Y===4&&ot(e,te)),he(e,r),n===1&&A===0&&!(t.mode&1)&&(mn=Q()+500,Ei&&wt()))}function he(e,t){var n=e.callbackNode;up(e,t);var r=Kr(e,e===J?te:0);if(r===0)n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ms(n),t===1)e.tag===0?dm(kl.bind(null,e)):Xc(kl.bind(null,e)),am(function(){!(A&6)&&wt()}),n=null;else{switch(zc(r)){case 1:n=Ia;break;case 4:n=kc;break;case 16:n=qr;break;case 536870912:n=Nc;break;default:n=qr}n=Kd(n,Bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bd(e,t){if($r=-1,Br=0,A&6)throw Error(k(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Kr(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mi(e,r);else{t=r;var o=A;A|=2;var a=Hd();(J!==e||te!==t)&&(Ve=null,mn=Q()+500,Mt(e,t));do try{Mm();break}catch(c){Vd(e,c)}while(1);Va(),di.current=a,A=o,q!==null?t=0:(J=null,te=0,t=Y)}if(t!==0){if(t===2&&(o=Ro(e),o!==0&&(r=o,t=da(e,o))),t===1)throw n=or,Mt(e,0),ot(e,r),he(e,Q()),n;if(t===6)ot(e,r);else{if(o=e.current.alternate,!(r&30)&&!Pm(o)&&(t=mi(e,r),t===2&&(a=Ro(e),a!==0&&(r=a,t=da(e,a))),t===1))throw n=or,Mt(e,0),ot(e,r),he(e,Q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:St(e,ue,Ve);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=is+500-Q(),10<t)){if(Kr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ho(St.bind(null,e,ue,Ve),t);break}St(e,ue,Ve);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Ae(r);a=1<<s,s=t[s],s>o&&(o=s),r&=~a}if(r=o,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Em(r/1960))-r,10<r){e.timeoutHandle=Ho(St.bind(null,e,ue,Ve),r);break}St(e,ue,Ve);break;case 5:St(e,ue,Ve);break;default:throw Error(k(329))}}}return he(e,Q()),e.callbackNode===n?Bd.bind(null,e):null}function da(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=mi(e,t),e!==2&&(t=ue,ue=n,t!==null&&ua(t)),e}function ua(e){ue===null?ue=e:ue.push.apply(ue,e)}function Pm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Fe(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~rs,t&=~_i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function kl(e){if(A&6)throw Error(k(327));on();var t=Kr(e,0);if(!(t&1))return he(e,Q()),null;var n=mi(e,t);if(e.tag!==0&&n===2){var r=Ro(e);r!==0&&(t=r,n=da(e,r))}if(n===1)throw n=or,Mt(e,0),ot(e,t),he(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,ue,Ve),he(e,Q()),null}function os(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(mn=Q()+500,Ei&&wt())}}function Ft(e){st!==null&&st.tag===0&&!(A&6)&&on();var t=A;A|=1;var n=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=n,A=t,!(A&6)&&wt()}}function as(){ye=Zt.current,D(Zt)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,om(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ua(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:un(),D(me),D(ae),Ka();break;case 5:qa(r);break;case 4:un();break;case 13:D(B);break;case 19:D(B);break;case 10:Ha(r.type._context);break;case 22:case 23:as()}n=n.return}if(J=e,q=e=gt(e.current,null),te=ye=t,Y=0,or=null,rs=_i=Rt=0,ue=$n=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,r.next=s}n.pending=r}Ct=null}return e}function Vd(e,t){do{var n=q;try{if(Va(),Or.current=ci,li){for(var r=V.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}li=!1}if(At=0,Z=K=V=null,Dn=!1,nr=0,ns.current=null,n===null||n.return===null){Y=1,or=t,q=null;break}e:{var a=e,s=n.return,c=n,l=t;if(t=te,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,g=c,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=dl(s);if(y!==null){y.flags&=-257,ul(y,s,c,a,t),y.mode&1&&cl(a,d,t),t=y,l=d;var b=t.updateQueue;if(b===null){var x=new Set;x.add(l),t.updateQueue=x}else b.add(l);break e}else{if(!(t&1)){cl(a,d,t),ss();break e}l=Error(k(426))}}else if(U&&c.mode&1){var w=dl(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ul(w,s,c,a,t),$a(pn(l,c));break e}}a=l=pn(l,c),Y!==4&&(Y=2),$n===null?$n=[a]:$n.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var u=zd(a,l,t);rl(a,u);break e;case 1:c=l;var p=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ft===null||!ft.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=Cd(a,c,t);rl(a,v);break e}}a=a.return}while(a!==null)}Gd(n)}catch(N){t=N,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function Hd(){var e=di.current;return di.current=ci,e===null?ci:e}function ss(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(Rt&268435455)&&!(_i&268435455)||ot(J,te)}function mi(e,t){var n=A;A|=2;var r=Hd();(J!==e||te!==t)&&(Ve=null,Mt(e,t));do try{Im();break}catch(o){Vd(e,o)}while(1);if(Va(),A=n,di.current=r,q!==null)throw Error(k(261));return J=null,te=0,Y}function Im(){for(;q!==null;)Wd(q)}function Mm(){for(;q!==null&&!np();)Wd(q)}function Wd(e){var t=qd(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Gd(e):q=t,ns.current=null}function Gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nm(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,q=null;return}}else if(n=km(n,t,ye),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Y===0&&(Y=5)}function St(e,t,n){var r=R,o=Ce.transition;try{Ce.transition=null,R=1,_m(e,t,n,r)}finally{Ce.transition=o,R=r}return null}function _m(e,t,n,r){do on();while(st!==null);if(A&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(pp(e,a),e===J&&(q=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Kd(qr,function(){return on(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ce.transition,Ce.transition=null;var s=R;R=1;var c=A;A|=4,ns.current=null,zm(e,n),Ud(n,e),Zp(Bo),Yr=!!$o,Bo=$o=null,e.current=n,Cm(n),rp(),A=c,R=s,Ce.transition=a}else e.current=n;if(Ir&&(Ir=!1,st=e,pi=o),a=e.pendingLanes,a===0&&(ft=null),ap(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ui)throw ui=!1,e=la,la=null,e;return pi&1&&e.tag!==0&&on(),a=e.pendingLanes,a&1?e===ca?Bn++:(Bn=0,ca=e):Bn=0,wt(),null}function on(){if(st!==null){var e=zc(pi),t=Ce.transition,n=R;try{if(Ce.transition=null,R=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,pi=0,A&6)throw Error(k(331));var o=A;for(A|=4,S=e.current;S!==null;){var a=S,s=a.child;if(S.flags&16){var c=a.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Un(8,g,a)}var m=g.child;if(m!==null)m.return=g,S=m;else for(;S!==null;){g=S;var f=g.sibling,y=g.return;if(Fd(g),g===d){S=null;break}if(f!==null){f.return=y,S=f;break}S=y}}}var b=a.alternate;if(b!==null){var x=b.child;if(x!==null){b.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}S=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,S=s;else e:for(;S!==null;){if(a=S,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Un(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,S=u;break e}S=a.return}}var p=e.current;for(S=p;S!==null;){s=S;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,S=h;else e:for(s=p;S!==null;){if(c=S,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Mi(9,c)}}catch(N){W(c,c.return,N)}if(c===s){S=null;break e}var v=c.sibling;if(v!==null){v.return=c.return,S=v;break e}S=c.return}}if(A=o,wt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{R=n,Ce.transition=t}}return!1}function Nl(e,t,n){t=pn(n,t),t=zd(e,t,1),e=mt(e,t,1),t=le(),e!==null&&(sr(e,1,t),he(e,t))}function W(e,t,n){if(e.tag===3)Nl(e,e,n);else for(;t!==null;){if(t.tag===3){Nl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=pn(n,e),e=Cd(t,e,1),t=mt(t,e,1),e=le(),t!==null&&(sr(t,1,e),he(t,e));break}}t=t.return}}function Tm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>Q()-is?Mt(e,0):rs|=n),he(e,t)}function Qd(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=le();e=Xe(e,t),e!==null&&(sr(e,t,n),he(e,n))}function Lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qd(e,n)}function Am(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Qd(e,n)}var qd;qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,jm(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&Zc(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var o=ln(t,ae.current);rn(t,n),o=Xa(null,t,r,e,o,n);var a=Za();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(a=!0,ti(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ga(t),o.updater=Ii,t.stateNode=o,o._reactInternals=t,Xo(t,r,e,n),t=ea(null,t,r,!0,a,n)):(t.tag=0,U&&a&&Da(t),se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fm(r),e=_e(r,e),o){case 0:t=Jo(null,t,r,e,n);break e;case 1:t=fl(null,t,r,e,n);break e;case 11:t=pl(null,t,r,e,n);break e;case 14:t=ml(null,t,r,_e(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),Jo(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),fl(e,t,r,o,n);case 3:e:{if(Md(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,o=a.element,id(e,t),ai(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=pn(Error(k(423)),t),t=hl(e,t,r,n,o);break e}else if(r!==o){o=pn(Error(k(424)),t),t=hl(e,t,r,n,o);break e}else for(ve=pt(t.stateNode.containerInfo.firstChild),be=t,U=!0,Le=null,n=nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===o){t=Ze(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return od(t),e===null&&qo(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,Vo(r,o)?s=null:a!==null&&Vo(r,a)&&(t.flags|=32),Id(e,t),se(e,t,s,n),t.child;case 6:return e===null&&qo(t),null;case 13:return _d(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),pl(e,t,r,o,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,F(ii,r._currentValue),r._currentValue=s,a!==null)if(Fe(a.value,s)){if(a.children===o.children&&!me.current){t=Ze(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){s=a.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Qe(-1,n&-n),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?l.next=l:(l.next=g.next,g.next=l),d.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ko(a.return,n,t),c.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(k(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ko(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,rn(t,n),o=Ee(o),r=r(o),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,o=_e(r,t.pendingProps),o=_e(r.type,o),ml(e,t,r,o,n);case 15:return Ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),Ur(e,t),t.tag=1,fe(r)?(e=!0,ti(t)):e=!1,rn(t,n),Sd(t,r,o),Xo(t,r,o,n),ea(null,t,r,!0,e,n);case 19:return Td(e,t,n);case 22:return Pd(e,t,n)}throw Error(k(156,t.tag))};function Kd(e,t){return jc(e,t)}function Rm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new Rm(e,t,n,r)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fm(e){if(typeof e=="function")return ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ca)return 11;if(e===Ea)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,o,a){var s=2;if(r=e,typeof e=="function")ls(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return _t(n.children,o,a,t);case za:s=8,o|=8;break;case wo:return e=ze(12,n,t,o|2),e.elementType=wo,e.lanes=a,e;case jo:return e=ze(13,n,t,o),e.elementType=jo,e.lanes=a,e;case ko:return e=ze(19,n,t,o),e.elementType=ko,e.lanes=a,e;case oc:return Ti(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rc:s=10;break e;case ic:s=9;break e;case Ca:s=11;break e;case Ea:s=14;break e;case nt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ze(s,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function _t(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=ze(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function xo(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function yo(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Om(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xi(0),this.expirationTimes=Xi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cs(e,t,n,r,o,a,s,c,l){return e=new Om(e,t,n,c,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ze(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ga(a),e}function Dm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yd(e){if(!e)return yt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(fe(n))return Yc(e,n,t)}return t}function Xd(e,t,n,r,o,a,s,c,l){return e=cs(n,r,!0,e,o,a,s,c,l),e.context=Yd(null),n=e.current,r=le(),o=ht(n),a=Qe(r,o),a.callback=t??null,mt(n,a,o),e.current.lanes=o,sr(e,o,r),he(e,r),e}function Li(e,t,n,r){var o=t.current,a=le(),s=ht(o);return n=Yd(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(o,t,s),e!==null&&(Re(e,o,s,a),Fr(e,o,s)),s}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ds(e,t){Sl(e,t),(e=e.alternate)&&Sl(e,t)}function Um(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function us(e){this._internalRoot=e}Ai.prototype.render=us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Li(e,t,null,null)};Ai.prototype.unmount=us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Li(null,e,null,null)}),t[Ye]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Mc(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zl(){}function $m(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var d=fi(s);a.call(d)}}var s=Xd(t,r,e,0,null,!1,!1,"",zl);return e._reactRootContainer=s,e[Ye]=s.current,Xn(e.nodeType===8?e.parentNode:e),Ft(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var d=fi(l);c.call(d)}}var l=cs(e,0,!1,null,null,!1,!1,"",zl);return e._reactRootContainer=l,e[Ye]=l.current,Xn(e.nodeType===8?e.parentNode:e),Ft(function(){Li(t,l,n,r)}),l}function Fi(e,t,n,r,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var c=o;o=function(){var l=fi(s);c.call(l)}}Li(t,s,e,o)}else s=$m(n,t,e,o,r);return fi(s)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(Ma(t,n|1),he(t,Q()),!(A&6)&&(mn=Q()+500,wt()))}break;case 13:Ft(function(){var r=Xe(e,1);if(r!==null){var o=le();Re(r,e,1,o)}}),ds(e,1)}};_a=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=le();Re(t,e,134217728,n)}ds(e,134217728)}};Ec=function(e){if(e.tag===13){var t=ht(e),n=Xe(e,t);if(n!==null){var r=le();Re(n,e,t,r)}ds(e,t)}};Pc=function(){return R};Ic=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};To=function(e,t,n){switch(t){case"input":if(zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ci(r);if(!o)throw Error(k(90));sc(r),zo(r,o)}}}break;case"textarea":cc(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};gc=os;xc=Ft;var Bm={usingClientEntryPoint:!1,Events:[cr,Gt,Ci,fc,hc,os]},Pn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vm={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bc(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||Um,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{ki=Mr.inject(Vm),$e=Mr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(t))throw Error(k(200));return Dm(e,t,null,n)};je.createRoot=function(e,t){if(!ps(e))throw Error(k(299));var n=!1,r="",o=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cs(e,1,!1,null,null,n,!1,r,o),e[Ye]=t.current,Xn(e.nodeType===8?e.parentNode:e),new us(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=bc(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Ft(e)};je.hydrate=function(e,t,n){if(!Ri(t))throw Error(k(200));return Fi(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!ps(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",s=Zd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Xd(t,null,e,1,n??null,o,!1,a,s),e[Ye]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ai(t)};je.render=function(e,t,n){if(!Ri(t))throw Error(k(200));return Fi(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(k(40));return e._reactRootContainer?(Ft(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};je.unstable_batchedUpdates=os;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Fi(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function Jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jd)}catch(e){console.error(e)}}Jd(),Jl.exports=je;var Hm=Jl.exports,Cl=Hm;vo.createRoot=Cl.createRoot,vo.hydrateRoot=Cl.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const El="popstate";function Wm(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:s,hash:c}=r.location;return pa("",{pathname:a,search:s,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:tu(o)}return Qm(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function eu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gm(){return Math.random().toString(36).substr(2,8)}function Pl(e,t){return{usr:e.state,key:e.key,idx:t}}function pa(e,t,n,r){return n===void 0&&(n=null),hi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Oi(t):t,{state:n,key:t&&t.key||r||Gm()})}function tu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Oi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Qm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,s=o.history,c=lt.Pop,l=null,d=g();d==null&&(d=0,s.replaceState(hi({},s.state,{idx:d}),""));function g(){return(s.state||{idx:null}).idx}function m(){c=lt.Pop;let w=g(),u=w==null?null:w-d;d=w,l&&l({action:c,location:x.location,delta:u})}function f(w,u){c=lt.Push;let p=pa(x.location,w,u);n&&n(p,w),d=g()+1;let h=Pl(p,d),v=x.createHref(p);try{s.pushState(h,"",v)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(v)}a&&l&&l({action:c,location:x.location,delta:1})}function y(w,u){c=lt.Replace;let p=pa(x.location,w,u);n&&n(p,w),d=g();let h=Pl(p,d),v=x.createHref(p);s.replaceState(h,"",v),a&&l&&l({action:c,location:x.location,delta:0})}function b(w){let u=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof w=="string"?w:tu(w);return p=p.replace(/ $/,"%20"),xe(u,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,u)}let x={get action(){return c},get location(){return e(o,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(El,m),l=w,()=>{o.removeEventListener(El,m),l=null}},createHref(w){return t(o,w)},createURL:b,encodeLocation(w){let u=b(w);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:f,replace:y,go(w){return s.go(w)}};return x}var Il;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Il||(Il={}));function qm(e,t,n){return n===void 0&&(n="/"),Km(e,t,n,!1)}function Km(e,t,n,r){let o=typeof t=="string"?Oi(t):t,a=iu(o.pathname||"/",n);if(a==null)return null;let s=nu(e);Ym(s);let c=null;for(let l=0;c==null&&l<s.length;++l){let d=lf(a);c=af(s[l],d,r)}return c}function nu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,s,c)=>{let l={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=an([r,l.relativePath]),g=n.concat(l);a.children&&a.children.length>0&&(xe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),nu(a.children,t,g,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:rf(d,a.index),routesMeta:g})};return e.forEach((a,s)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,s);else for(let l of ru(a.path))o(a,s,l)}),t}function ru(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let s=ru(r.join("/")),c=[];return c.push(...s.map(l=>l===""?a:[a,l].join("/"))),o&&c.push(...s),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function Ym(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:of(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xm=/^:[\w-]+$/,Zm=3,Jm=2,ef=1,tf=10,nf=-2,Ml=e=>e==="*";function rf(e,t){let n=e.split("/"),r=n.length;return n.some(Ml)&&(r+=nf),t&&(r+=Jm),n.filter(o=>!Ml(o)).reduce((o,a)=>o+(Xm.test(a)?Zm:a===""?ef:tf),r)}function of(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function af(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},a="/",s=[];for(let c=0;c<r.length;++c){let l=r[c],d=c===r.length-1,g=a==="/"?t:t.slice(a.length)||"/",m=_l({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},g),f=l.route;if(!m&&d&&n&&!r[r.length-1].route.index&&(m=_l({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},g)),!m)return null;Object.assign(o,m.params),s.push({params:o,pathname:an([a,m.pathname]),pathnameBase:cf(an([a,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(a=an([a,m.pathnameBase]))}return s}function _l(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sf(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:r.reduce((d,g,m)=>{let{paramName:f,isOptional:y}=g;if(f==="*"){let x=c[m]||"";s=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const b=c[m];return y&&!b?d[f]=void 0:d[f]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:s,pattern:e}}function sf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),eu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function lf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return eu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function iu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const an=e=>e.join("/").replace(/\/\/+/g,"/"),cf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function df(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ou=["post","put","patch","delete"];new Set(ou);const uf=["get",...ou];new Set(uf);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}const pf=j.createContext(null),mf=j.createContext(null),au=j.createContext(null),Di=j.createContext(null),Ui=j.createContext({outlet:null,matches:[],isDataRoute:!1}),su=j.createContext(null);function ms(){return j.useContext(Di)!=null}function ff(){return ms()||xe(!1),j.useContext(Di).location}function hf(e,t){return gf(e,t)}function gf(e,t,n,r){ms()||xe(!1);let{navigator:o}=j.useContext(au),{matches:a}=j.useContext(Ui),s=a[a.length-1],c=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let d=ff(),g;if(t){var m;let w=typeof t=="string"?Oi(t):t;l==="/"||(m=w.pathname)!=null&&m.startsWith(l)||xe(!1),g=w}else g=d;let f=g.pathname||"/",y=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=qm(e,{pathname:y}),x=wf(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:an([l,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:an([l,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r);return t&&x?j.createElement(Di.Provider,{value:{location:gi({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:lt.Pop}},x):x}function xf(){let e=Sf(),t=df(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,a)}const yf=j.createElement(xf,null);class vf extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Ui.Provider,{value:this.props.routeContext},j.createElement(su.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bf(e){let{routeContext:t,match:n,children:r}=e,o=j.useContext(pf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Ui.Provider,{value:t},r)}function wf(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=(o=n)==null?void 0:o.errors;if(c!=null){let g=s.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);g>=0||xe(!1),s=s.slice(0,Math.min(s.length,g+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<s.length;g++){let m=s[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=g),m.route.id){let{loaderData:f,errors:y}=n,b=m.route.loader&&f[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||b){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((g,m,f)=>{let y,b=!1,x=null,w=null;n&&(y=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||yf,l&&(d<0&&f===0?(zf("route-fallback",!1),b=!0,w=null):d===f&&(b=!0,w=m.route.hydrateFallbackElement||null)));let u=t.concat(s.slice(0,f+1)),p=()=>{let h;return y?h=x:b?h=w:m.route.Component?h=j.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=g,j.createElement(bf,{match:m,routeContext:{outlet:g,matches:u,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?j.createElement(vf,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:p(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):p()},null)}var ma=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ma||{});function jf(e){let t=j.useContext(mf);return t||xe(!1),t}function kf(e){let t=j.useContext(Ui);return t||xe(!1),t}function Nf(e){let t=kf(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function Sf(){var e;let t=j.useContext(su),n=jf(ma.UseRouteError),r=Nf(ma.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const Tl={};function zf(e,t,n){!t&&!Tl[e]&&(Tl[e]=!0)}function Cf(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function fa(e){xe(!1)}function Ef(e){let{basename:t="/",children:n=null,location:r,navigationType:o=lt.Pop,navigator:a,static:s=!1,future:c}=e;ms()&&xe(!1);let l=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:a,static:s,future:gi({v7_relativeSplatPath:!1},c)}),[l,c,a,s]);typeof r=="string"&&(r=Oi(r));let{pathname:g="/",search:m="",hash:f="",state:y=null,key:b="default"}=r,x=j.useMemo(()=>{let w=iu(g,l);return w==null?null:{location:{pathname:w,search:m,hash:f,state:y,key:b},navigationType:o}},[l,g,m,f,y,b,o]);return x==null?null:j.createElement(au.Provider,{value:d},j.createElement(Di.Provider,{children:n,value:x}))}function Pf(e){let{children:t,location:n}=e;return hf(ha(t),n)}new Promise(()=>{});function ha(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,o)=>{if(!j.isValidElement(r))return;let a=[...t,o];if(r.type===j.Fragment){n.push.apply(n,ha(r.props.children,a));return}r.type!==fa&&xe(!1),!r.props.index||!r.props.children||xe(!1);let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ha(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const If="6";try{window.__reactRouterVersion=If}catch{}const Mf="startTransition",Ll=Tu[Mf];function _f(e){let{basename:t,children:n,future:r,window:o}=e,a=j.useRef();a.current==null&&(a.current=Wm({window:o,v5Compat:!0}));let s=a.current,[c,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},g=j.useCallback(m=>{d&&Ll?Ll(()=>l(m)):l(m)},[l,d]);return j.useLayoutEffect(()=>s.listen(g),[s,g]),j.useEffect(()=>Cf(r),[r]),j.createElement(Ef,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:r})}var Al;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Al||(Al={}));var Rl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rl||(Rl={}));const lu=j.createContext(void 0),$i=()=>{const e=j.useContext(lu);if(e===void 0)throw new Error("useUser must be used within a UserProvider");return e},Tf=({children:e})=>{const[t,n]=j.useState(null),[r,o]=j.useState(!1),a=l=>{try{if(!l.id||!l.email||!l.name)throw new Error("Invalid user data: missing required fields");n(l),o(!0),localStorage.setItem("cursor_user",JSON.stringify(l))}catch(d){throw console.error("Error during login:",d),d}},s=()=>{n(null),o(!1),localStorage.removeItem("cursor_user")},c=l=>{if(t){const d={...t,...l};n(d),localStorage.setItem("cursor_user",JSON.stringify(d))}};return ji.useEffect(()=>{try{const l=localStorage.getItem("cursor_user");if(l){const d=JSON.parse(l);d&&d.id&&d.email?(n(d),o(!0)):localStorage.removeItem("cursor_user")}}catch(l){console.error("Error loading user data:",l),localStorage.removeItem("cursor_user")}},[]),i.jsx(lu.Provider,{value:{user:t,isAuthenticated:r,login:a,logout:s,updateUser:c},children:e})};var Lf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Af=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rf=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:s,children:c,...l},d)=>j.createElement("svg",{ref:d,...Lf,width:o,height:o,stroke:r,strokeWidth:s?Number(a)*24/Number(o):a,className:`lucide lucide-${Af(e)}`,...l},[...t.map(([g,m])=>j.createElement(g,m)),...(Array.isArray(c)?c:[c])||[]]));return n.displayName=`${e}`,n};var E=Rf;const Ff=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Of=E("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Df=E("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]),Uf=E("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]),Fl=E("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]),$f=E("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),fn=E("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),Bf=E("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),cu=E("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Vf=E("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),du=E("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Hf=E("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]),uu=E("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),fs=E("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),hn=E("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),pu=E("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),xi=E("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),mu=E("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]),vn=E("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),ga=E("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),qe=E("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Wf=E("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),fu=E("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Gf=E("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]),Qf=E("Folder",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}]]),Bi=E("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),Ol=E("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]),hs=E("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),qf=E("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Kf=E("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),Yf=E("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),Xf=E("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),Dl=E("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Zf=E("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),gs=E("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Ul=E("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Jf=E("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),yi=E("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),$l=E("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),eh=E("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),th=E("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Hr=E("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),nh=E("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),rh=E("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),ih=E("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),oh=E("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),ur=E("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ah=E("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),vi=E("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),xa=E("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),Je=E("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),bi=E("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),sh=E("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),lh=E("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),ch=E("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),dh=E("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),ya=E("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),pr=E("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),uh=E("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]),ph=E("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),xs=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ge=E("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),mh=({isOpen:e,onClose:t,initialTab:n="login"})=>{const{login:r}=$i(),[o,a]=j.useState(n),[s,c]=j.useState(!1),[l,d]=j.useState(!1),[g,m]=j.useState(""),[f,y]=j.useState({email:"",password:"",confirmPassword:"",firstName:"",lastName:"",agreeToTerms:!1});ji.useEffect(()=>{console.log("🎯 AuthModal useEffect triggered. isOpen:",e,"initialTab:",n),e&&(console.log("✅ AuthModal is opening with tab:",n),y({email:"",password:"",confirmPassword:"",firstName:"",lastName:"",agreeToTerms:!1}),m(""),d(!1),a(n))},[e,n]);const b=u=>{const{name:p,value:h,type:v,checked:N}=u.target;y(C=>({...C,[p]:v==="checkbox"?N:h}))};if(!e)return console.log("🚫 AuthModal not rendering - isOpen is false"),null;console.log("🎯 AuthModal rendering with activeTab:",o,"isOpen:",e);const x=async u=>{u.preventDefault(),d(!0),m("");try{if(o==="login"){if(!f.email||!f.password){m("Please fill in all required fields."),d(!1);return}setTimeout(()=>{try{const p={id:"1",name:f.email.split("@")[0],email:f.email,plan:"pro",subscription:{status:"active",nextBilling:"2024-02-15",amount:"$1.00"}};r(p),d(!1),t()}catch(p){console.error("Login error:",p),m("Login failed. Please try again."),d(!1)}},1e3)}else{if(!f.email||!f.password||!f.firstName||!f.lastName){m("Please fill in all required fields."),d(!1);return}if(f.password!==f.confirmPassword){m("Passwords do not match."),d(!1);return}if(!f.agreeToTerms){m("Please agree to the Terms of Service."),d(!1);return}setTimeout(()=>{try{const p=new Date;p.setDate(p.getDate()+21);const h={id:String(Date.now()),name:`${f.firstName} ${f.lastName}`,email:f.email,plan:"free",subscription:{status:"trial",nextBilling:p.toISOString().split("T")[0],amount:"Free Trial (21 days)"}};r(h),d(!1),t()}catch(p){console.error("Signup error:",p),m("Account creation failed. Please try again."),d(!1)}},1e3)}}catch(p){console.error("Authentication error:",p),m("Authentication failed. Please try again."),d(!1)}},w=u=>{d(!0),setTimeout(()=>{try{const p=new Date;p.setDate(p.getDate()+21);const h={id:u+"-"+Date.now(),name:`${u.charAt(0).toUpperCase()+u.slice(1)} User`,email:`user@${u}.com`,plan:"free",subscription:{status:"trial",nextBilling:p.toISOString().split("T")[0],amount:"Free Trial (21 days)"}};r(h),d(!1),t()}catch(p){console.error("Social login error:",p),m(`${u} login failed. Please try again.`),d(!1)}},1e3)};return i.jsxs("div",{className:"modal-overlay",onClick:t,children:[i.jsxs("div",{className:"modal-content",onClick:u=>u.stopPropagation(),children:[i.jsx("button",{className:"close-button",onClick:t,children:i.jsx(xs,{size:24})}),i.jsxs("div",{className:"auth-header",children:[i.jsx("h2",{children:o==="login"?"Welcome Back":"Create Account"}),i.jsx("p",{children:o==="login"?"Sign in to access your AI coding assistant":"Join thousands of developers using Cursor AI"})]}),i.jsxs("div",{className:"auth-tabs",children:[i.jsx("button",{className:`tab-button ${o==="login"?"active":""}`,onClick:()=>a("login"),children:"Sign In"}),i.jsx("button",{className:`tab-button ${o==="signup"?"active":""}`,onClick:()=>a("signup"),children:"Sign Up"})]}),i.jsxs("div",{className:"social-auth",children:[i.jsxs("button",{className:"social-button google",onClick:()=>w("google"),children:[i.jsx(Hf,{size:20}),"Continue with Google"]}),i.jsxs("button",{className:"social-button github",onClick:()=>w("github"),children:[i.jsx(hs,{size:20}),"Continue with GitHub"]})]}),i.jsx("div",{className:"divider",children:i.jsx("span",{children:"or"})}),g&&i.jsx("div",{className:"error-message",children:g}),i.jsxs("form",{onSubmit:x,className:"auth-form",children:[o==="signup"&&i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"firstName",children:"First Name"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(ya,{size:20,className:"input-icon"}),i.jsx("input",{type:"text",id:"firstName",name:"firstName",value:f.firstName,onChange:b,required:!0,placeholder:"John"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"lastName",children:"Last Name"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(ya,{size:20,className:"input-icon"}),i.jsx("input",{type:"text",id:"lastName",name:"lastName",value:f.lastName,onChange:b,required:!0,placeholder:"Doe"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(gs,{size:20,className:"input-icon"}),i.jsx("input",{type:"email",id:"email",name:"email",value:f.email,onChange:b,required:!0,placeholder:"john@example.com"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"password",children:"Password"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Dl,{size:20,className:"input-icon"}),i.jsx("input",{type:s?"text":"password",id:"password",name:"password",value:f.password,onChange:b,required:!0,placeholder:"Enter your password"}),i.jsx("button",{type:"button",className:"password-toggle",onClick:()=>c(!s),children:s?i.jsx(ga,{size:20}):i.jsx(qe,{size:20})})]})]}),o==="signup"&&i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Dl,{size:20,className:"input-icon"}),i.jsx("input",{type:s?"text":"password",id:"confirmPassword",name:"confirmPassword",value:f.confirmPassword,onChange:b,required:!0,placeholder:"Confirm your password"})]})]}),o==="signup"&&i.jsx("div",{className:"form-group checkbox-group",children:i.jsxs("label",{className:"checkbox-label",children:[i.jsx("input",{type:"checkbox",name:"agreeToTerms",checked:f.agreeToTerms,onChange:b,required:!0}),i.jsx("span",{className:"checkmark"}),"I agree to the ",i.jsx("a",{href:"#terms",children:"Terms of Service"})," and ",i.jsx("a",{href:"#privacy",children:"Privacy Policy"})]})}),i.jsx("button",{type:"submit",className:"auth-submit",disabled:l,children:l?i.jsx("span",{children:o==="login"?"Signing In...":"Creating Account..."}):o==="login"?"Sign In":"Create Account"})]}),o==="login"&&i.jsx("div",{className:"auth-links",children:i.jsx("a",{href:"#forgot-password",className:"forgot-password",children:"Forgot your password?"})}),i.jsx("div",{className:"auth-footer",children:i.jsxs("p",{children:[o==="login"?"Don't have an account? ":"Already have an account? ",i.jsx("button",{type:"button",className:"switch-auth",onClick:()=>a(o==="login"?"signup":"login"),children:o==="login"?"Sign up":"Sign in"})]})})]}),i.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transform: scale(1);
          animation: slideIn 0.3s ease;
          z-index: 10000;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #718096;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: #f7fafc;
          color: #2d3748;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: #718096;
          font-size: 1rem;
        }

        .auth-tabs {
          display: flex;
          background: #f7fafc;
          border-radius: 12px;
          margin-bottom: 2rem;
          padding: 4px;
        }

        .tab-button {
          flex: 1;
          padding: 12px 24px;
          border: none;
          background: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button.active {
          background: white;
          color: #ff6b6b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .social-auth {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 24px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .social-button:hover {
          border-color: #ff6b6b;
          background: #fff5f5;
        }

        .social-button.google {
          color: #4285f4;
        }

        .social-button.github {
          color: #333;
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 2rem 0;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e2e8f0;
        }

        .divider span {
          background: white;
          padding: 0 1rem;
          color: #718096;
          font-size: 0.875rem;
        }

        .auth-form {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: #718096;
          z-index: 1;
        }

        .input-wrapper input {
          width: 100%;
          padding: 12px 12px 12px 48px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #ff6b6b;
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #718096;
          cursor: pointer;
          padding: 4px;
        }

        .checkbox-group {
          margin-bottom: 2rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .checkbox-label input[type="checkbox"] {
          display: none;
        }

        .checkmark {
          width: 20px;
          height: 20px;
          border: 2px solid #e2e8f0;
          border-radius: 4px;
          flex-shrink: 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .checkbox-label input[type="checkbox"]:checked + .checkmark {
          background: #ff6b6b;
          border-color: #ff6b6b;
        }

        .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
          content: '✓';
          position: absolute;
          top: -2px;
          left: 3px;
          color: white;
          font-size: 14px;
          font-weight: bold;
        }

        .checkbox-label a {
          color: #ff6b6b;
          text-decoration: none;
        }

        .checkbox-label a:hover {
          text-decoration: underline;
        }

        .auth-submit {
          width: 100%;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .auth-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .error-message {
          background: #fed7d7;
          color: #c53030;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          text-align: center;
        }

        .auth-links {
          text-align: center;
          margin-bottom: 1rem;
        }

        .forgot-password {
          color: #ff6b6b;
          text-decoration: none;
          font-size: 0.875rem;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        .auth-footer {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .auth-footer p {
          color: #718096;
          margin: 0;
        }

        .switch-auth {
          background: none;
          border: none;
          color: #ff6b6b;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
        }

        .switch-auth:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .modal-content {
            padding: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .auth-header h2 {
            font-size: 1.75rem;
          }
        }
      `})]})},fh=({isOpen:e,onClose:t})=>{var c,l,d,g;const[n,r]=j.useState("profile"),{user:o,logout:a}=$i(),s=()=>{a(),t(),window.location.href="/"};return e?i.jsxs("div",{className:"profile-overlay",onClick:t,children:[i.jsxs("div",{className:"profile-content",onClick:m=>m.stopPropagation(),children:[i.jsxs("div",{className:"profile-header",children:[i.jsx("img",{src:(o==null?void 0:o.avatar)||`https://ui-avatars.com/api/?name=${o==null?void 0:o.name}&background=ff6b6b&color=fff`,alt:o==null?void 0:o.name,className:"profile-avatar"}),i.jsxs("div",{className:"profile-info",children:[i.jsx("h2",{children:(o==null?void 0:o.name)||"User"}),i.jsx("p",{children:(o==null?void 0:o.email)||"user@example.com"}),i.jsxs("span",{className:"plan-badge",children:[(o==null?void 0:o.plan)||"Free"," Plan"]})]})]}),i.jsxs("div",{className:"profile-tabs",children:[i.jsxs("button",{className:`tab-btn ${n==="profile"?"active":""}`,onClick:()=>r("profile"),children:[i.jsx(ya,{size:16}),"Profile"]}),i.jsxs("button",{className:`tab-btn ${n==="billing"?"active":""}`,onClick:()=>r("billing"),children:[i.jsx(xi,{size:16}),"Billing"]}),i.jsxs("button",{className:`tab-btn ${n==="settings"?"active":""}`,onClick:()=>r("settings"),children:[i.jsx(ur,{size:16}),"Settings"]})]}),i.jsxs("div",{className:"profile-body",children:[n==="profile"&&i.jsxs("div",{className:"profile-section",children:[i.jsx("h3",{children:"Profile Information"}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Full Name"}),i.jsx("input",{type:"text",value:(o==null?void 0:o.name)||""})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Email"}),i.jsx("input",{type:"email",value:(o==null?void 0:o.email)||""})]}),i.jsx("button",{className:"btn btn-primary",children:"Update Profile"})]}),n==="billing"&&i.jsxs("div",{className:"billing-section",children:[i.jsx("h3",{children:"Billing Information"}),i.jsxs("div",{className:"subscription-card",children:[i.jsxs("div",{className:"sub-header",children:[i.jsxs("h4",{children:["Current Plan: ",(o==null?void 0:o.plan)||"Free"]}),i.jsx("span",{className:`status ${((c=o==null?void 0:o.subscription)==null?void 0:c.status)||"inactive"}`,children:((l=o==null?void 0:o.subscription)==null?void 0:l.status)||"Inactive"})]}),i.jsxs("p",{children:["Next billing: ",((d=o==null?void 0:o.subscription)==null?void 0:d.nextBilling)||"N/A"]}),i.jsxs("p",{children:["Amount: ",((g=o==null?void 0:o.subscription)==null?void 0:g.amount)||"Free","/month"]}),i.jsxs("div",{className:"billing-actions",children:[i.jsx("button",{className:"btn btn-secondary",children:"Change Plan"}),i.jsx("button",{className:"btn btn-outline",children:"Cancel Subscription"})]})]})]}),n==="settings"&&i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Preferences"}),i.jsxs("div",{className:"setting-item",children:[i.jsx($f,{size:20}),i.jsx("span",{children:"Email Notifications"}),i.jsx("input",{type:"checkbox",defaultChecked:!0})]}),i.jsxs("div",{className:"setting-item",children:[i.jsx(vi,{size:20}),i.jsx("span",{children:"Two-Factor Authentication"}),i.jsx("button",{className:"btn btn-sm",children:"Enable"})]}),i.jsxs("div",{className:"setting-item",children:[i.jsx(vn,{size:20}),i.jsx("span",{children:"Auto-update"}),i.jsx("input",{type:"checkbox",defaultChecked:!0})]})]})]}),i.jsx("div",{className:"profile-footer",children:i.jsxs("button",{className:"logout-btn",onClick:s,children:[i.jsx(Zf,{size:16}),"Sign Out"]})})]}),i.jsx("style",{jsx:!0,children:`
        .profile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .profile-content {
          background: white;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          border-bottom: 1px solid #e2e8f0;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border-radius: 20px 20px 0 0;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.3);
        }

        .profile-info h2 {
          margin: 0 0 0.25rem;
          font-size: 1.5rem;
        }

        .profile-info p {
          margin: 0 0 0.5rem;
          opacity: 0.9;
        }

        .plan-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .profile-tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
        }

        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          color: #ff6b6b;
          border-bottom: 2px solid #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .profile-body {
          padding: 2rem;
        }

        .profile-section h3,
        .billing-section h3,
        .settings-section h3 {
          margin-bottom: 1.5rem;
          color: #1a365d;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .subscription-card {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .sub-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .sub-header h4 {
          margin: 0;
          color: #1a365d;
        }

        .status.active {
          background: #48bb78;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
        }

        .billing-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .setting-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .setting-item:last-child {
          border-bottom: none;
        }

        .profile-footer {
          padding: 1.5rem 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e53e3e;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }

        .btn {
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn-outline {
          background: none;
          border: 2px solid #e2e8f0;
          color: #2d3748;
        }

        .btn-sm {
          padding: 4px 12px;
          font-size: 0.875rem;
        }
      `})]}):null},hh=()=>{const[e,t]=j.useState(!1),[n,r]=j.useState(!1),[o,a]=j.useState(!1),[s,c]=j.useState("login"),[l,d]=j.useState(!1),{user:g,isAuthenticated:m,logout:f}=$i();j.useEffect(()=>{const u=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const y=[{name:"Home",href:"#home"},{name:"Features",href:"#features"},{name:"AI Studio",href:"#ai-studio"},{name:"Pricing",href:"#pricing"},{name:"Download",href:"#download"},...m?[{name:"Dashboard",href:"/dashboard"}]:[]],b=()=>{c("login"),a(!0)},x=()=>{console.log("🎯 Start Free Trial button clicked!"),console.log("Setting auth modal tab to signup..."),c("signup"),console.log("Opening auth modal..."),a(!0),console.log("Auth modal should be open now. Modal state:",!0)},w=()=>{d(!0)};return i.jsxs("header",{className:`header ${e?"header-scrolled":""}`,children:[i.jsxs("div",{className:"container",children:[i.jsxs("nav",{className:"nav",children:[i.jsxs("div",{className:"logo",children:[i.jsx(fs,{size:32}),i.jsx("span",{children:"Cursor"}),i.jsx(ge,{size:20,className:"ai-icon"})]}),i.jsx("ul",{className:"nav-links",children:y.map(u=>i.jsx("li",{children:u.href.startsWith("/")?i.jsx("a",{href:u.href,className:"nav-link",children:u.name}):i.jsx("a",{href:u.href,className:"nav-link",children:u.name})},u.name))}),i.jsx("div",{className:"nav-actions",children:m?i.jsx("div",{className:"user-menu",children:i.jsxs("button",{className:"user-button",onClick:w,children:[i.jsx("img",{src:(g==null?void 0:g.avatar)||`https://ui-avatars.com/api/?name=${g==null?void 0:g.name}&background=ff6b6b&color=fff`,alt:g==null?void 0:g.name,className:"user-avatar"}),i.jsx("span",{className:"user-name",children:g==null?void 0:g.name}),i.jsx(du,{size:16})]})}):i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"btn btn-secondary",onClick:b,children:"Sign In"}),i.jsx("button",{onClick:x,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"12px 24px",border:"none",borderRadius:"25px",fontSize:"16px",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.3)",transition:"all 0.3s ease"},onMouseOver:u=>u.target.style.transform="translateY(-2px)",onMouseOut:u=>u.target.style.transform="translateY(0)",children:"Start Free Trial"})]})}),i.jsx("button",{className:"mobile-menu-button",onClick:()=>r(!n),children:n?i.jsx(xs,{size:24}):i.jsx(Jf,{size:24})})]}),n&&i.jsxs("div",{className:"mobile-menu",children:[y.map(u=>i.jsx("a",{href:u.href,className:"mobile-menu-link",onClick:()=>r(!1),children:u.name},u.name)),m?i.jsx("button",{className:"btn btn-primary mobile-menu-cta",onClick:w,children:"My Account"}):i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"btn btn-secondary mobile-menu-cta",onClick:b,children:"Sign In"}),i.jsx("button",{onClick:x,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"12px 24px",border:"none",borderRadius:"25px",fontSize:"16px",fontWeight:"600",cursor:"pointer",width:"100%",marginTop:"10px"},children:"Start Free Trial"}),i.jsx("button",{onClick:()=>{console.log("🚨 EMERGENCY BACKUP TRIAL BUTTON CLICKED!"),console.log("Force opening modal..."),c("signup"),a(!0),console.log("Modal state set to open with signup tab")},style:{background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",padding:"8px 16px",border:"none",borderRadius:"20px",fontSize:"12px",fontWeight:"600",cursor:"pointer",marginLeft:"10px",boxShadow:"0 2px 10px rgba(16, 185, 129, 0.3)"},children:"🚀 BACKUP"})]})]})]}),i.jsx(mh,{isOpen:o,onClose:()=>a(!1),initialTab:s}),i.jsx(fh,{isOpen:l,onClose:()=>d(!1)}),i.jsx("style",{jsx:!0,children:`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.25rem;
          color: #1a365d;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-weight: 500;
          color: #4a5568;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #ff6b6b;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-menu {
          position: relative;
        }

        .user-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 107, 107, 0.1);
          border: 2px solid rgba(255, 107, 107, 0.2);
          border-radius: 50px;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .user-button:hover {
          background: rgba(255, 107, 107, 0.15);
          border-color: rgba(255, 107, 107, 0.3);
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-name {
          font-weight: 500;
          color: #2d3748;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          color: #4a5568;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 2rem;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-menu-link {
          padding: 0.75rem 0;
          font-weight: 500;
          color: #4a5568;
          border-bottom: 1px solid #e2e8f0;
        }

        .mobile-menu-cta {
          margin-top: 1rem;
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav {
            height: 70px;
          }

          .nav-links {
            display: none;
          }

          .nav-actions {
            display: none;
          }

          .mobile-menu-button {
            display: block;
            padding: 10px;
            min-width: 44px;
            min-height: 44px;
          }

          .mobile-menu {
            display: flex;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .logo span {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 480px) {
          .nav {
            height: 60px;
            padding: 0 10px;
          }

          .logo span {
            font-size: 1rem;
          }

          .mobile-menu {
            padding: 1.5rem;
          }

          .mobile-menu-link {
            padding: 1rem 0;
            font-size: 1.125rem;
          }
        }
      `})]})},gh=()=>{var o,a;const{user:e}=$i(),t=[{icon:i.jsx(hn,{size:24}),label:"Lines of Code",value:"12,847",color:"from-blue-500 to-blue-600"},{icon:i.jsx(uu,{size:24}),label:"Time Saved",value:"45.2h",color:"from-green-500 to-green-600"},{icon:i.jsx(bi,{size:24}),label:"AI Suggestions",value:"1,234",color:"from-yellow-500 to-orange-500"},{icon:i.jsx(lh,{size:24}),label:"Productivity",value:"+67%",color:"from-purple-500 to-purple-600"}],n=[{name:"E-commerce App",language:"React",lastModified:"2 hours ago",progress:85},{name:"API Server",language:"Node.js",lastModified:"1 day ago",progress:60},{name:"Mobile App",language:"Flutter",lastModified:"3 days ago",progress:40}],r=[{title:"Speed Demon",description:"10,000 lines coded with AI assistance",icon:"🚀"},{title:"Bug Squasher",description:"100 bugs fixed using AI suggestions",icon:"🐛"},{title:"Early Adopter",description:"First month user",icon:"⭐"}];return i.jsxs("section",{id:"dashboard",className:"dashboard-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"dashboard-header",children:[i.jsxs("div",{className:"welcome",children:[i.jsxs("h1",{children:["Welcome back, ",(o=e==null?void 0:e.name)==null?void 0:o.split(" ")[0],"! 👋"]}),i.jsx("p",{children:"Here's what you've accomplished with Cursor AI"})]}),i.jsxs("div",{className:"plan-status",children:[i.jsxs("span",{className:"plan-badge",children:[(e==null?void 0:e.plan)||"Free"," Plan"]}),((a=e==null?void 0:e.subscription)==null?void 0:a.status)==="trial"&&i.jsx("span",{className:"trial-badge",children:"14 days left in trial"})]})]}),i.jsx("div",{className:"stats-grid",children:t.map((s,c)=>i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:`stat-icon bg-gradient-to-r ${s.color}`,children:s.icon}),i.jsxs("div",{className:"stat-content",children:[i.jsx("h3",{children:s.value}),i.jsx("p",{children:s.label})]})]},c))}),i.jsxs("div",{className:"dashboard-content",children:[i.jsxs("div",{className:"main-content",children:[i.jsxs("div",{className:"recent-projects",children:[i.jsx("h2",{children:"Recent Projects"}),i.jsx("div",{className:"projects-list",children:n.map((s,c)=>i.jsxs("div",{className:"project-card",children:[i.jsxs("div",{className:"project-info",children:[i.jsx("h3",{children:s.name}),i.jsxs("p",{children:[s.language," • ",s.lastModified]})]}),i.jsxs("div",{className:"project-progress",children:[i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${s.progress}%`}})}),i.jsxs("span",{children:[s.progress,"%"]})]})]},c))})]}),i.jsxs("div",{className:"quick-actions",children:[i.jsx("h2",{children:"Quick Actions"}),i.jsxs("div",{className:"actions-grid",children:[i.jsxs("button",{className:"action-card",children:[i.jsx(hn,{size:32}),i.jsx("span",{children:"New Project"})]}),i.jsxs("button",{className:"action-card",onClick:()=>window.location.href="#ai-studio",children:[i.jsx(Je,{size:32}),i.jsx("span",{children:"AI Studio"})]}),i.jsxs("button",{className:"action-card",children:[i.jsx(vn,{size:32}),i.jsx("span",{children:"Download IDE"})]}),i.jsxs("button",{className:"action-card",children:[i.jsx(pr,{size:32}),i.jsx("span",{children:"Invite Team"})]})]})]})]}),i.jsxs("div",{className:"sidebar-content",children:[i.jsxs("div",{className:"achievements",children:[i.jsx("h2",{children:"Achievements"}),i.jsx("div",{className:"achievements-list",children:r.map((s,c)=>i.jsxs("div",{className:"achievement-card",children:[i.jsx("span",{className:"achievement-icon",children:s.icon}),i.jsxs("div",{className:"achievement-info",children:[i.jsx("h4",{children:s.title}),i.jsx("p",{children:s.description})]})]},c))})]}),i.jsxs("div",{className:"usage-summary",children:[i.jsx("h2",{children:"This Month"}),i.jsxs("div",{className:"usage-stats",children:[i.jsxs("div",{className:"usage-item",children:[i.jsx("span",{children:"AI Completions"}),i.jsx("span",{children:"2,847 / 5,000"})]}),i.jsxs("div",{className:"usage-item",children:[i.jsx("span",{children:"Code Generated"}),i.jsx("span",{children:"12.4k lines"})]}),i.jsxs("div",{className:"usage-item",children:[i.jsx("span",{children:"Time Saved"}),i.jsx("span",{children:"45.2 hours"})]})]})]})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .dashboard-section {
          background: #f8fafc;
          padding: 6rem 0 4rem;
          min-height: 100vh;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .welcome h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }

        .welcome p {
          color: #718096;
          font-size: 1.125rem;
        }

        .plan-status {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .plan-badge {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .trial-badge {
          background: #ffd700;
          color: #1a365d;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-content h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin: 0;
        }

        .stat-content p {
          color: #718096;
          margin: 0;
          font-size: 0.875rem;
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .main-content, .sidebar-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .recent-projects, .quick-actions, .achievements, .usage-summary {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .recent-projects h2, .quick-actions h2, .achievements h2, .usage-summary h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 1.5rem;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .project-card:hover {
          border-color: #ff6b6b;
        }

        .project-info h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 0.25rem;
        }

        .project-info p {
          font-size: 0.875rem;
          color: #718096;
          margin: 0;
        }

        .project-progress {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar {
          width: 100px;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          transition: width 0.3s ease;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #4a5568;
        }

        .action-card:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
          color: #ff6b6b;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .achievement-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 8px;
        }

        .achievement-icon {
          font-size: 1.5rem;
        }

        .achievement-info h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 0.25rem;
        }

        .achievement-info p {
          font-size: 0.75rem;
          color: #718096;
          margin: 0;
        }

        .usage-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .usage-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .usage-item:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 1rem;
          }

          .dashboard-content {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .welcome h1 {
            font-size: 2rem;
          }
        }
      `})]})},xh=()=>i.jsxs("section",{id:"home",className:"hero",children:[i.jsx("div",{className:"hero-content",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"hero-text",children:[i.jsxs("h1",{className:"hero-title",children:["The AI-First",i.jsx("span",{className:"highlight",children:" Code Editor"})]}),i.jsx("p",{className:"hero-subtitle",children:"Built for productivity with AI that understands your code. Write, edit, and debug faster than ever with Cursor's intelligent assistance and powerful features."}),i.jsxs("div",{className:"offer-banner",children:[i.jsx("span",{className:"offer-icon",children:"🎉"}),i.jsxs("span",{className:"offer-text",children:[i.jsx("strong",{children:"FREE for 3 Weeks!"})," Then from $1/month worldwide • M-Pesa Paybill: 200999"]})]}),i.jsxs("div",{className:"download-section",children:[i.jsxs("button",{className:"btn btn-primary download-btn",children:[i.jsx(vn,{size:20}),"Start Free Month"]}),i.jsxs("button",{className:"btn btn-secondary demo-btn",children:[i.jsx(Je,{size:20}),"Try Web Version"]})]}),i.jsx("div",{className:"payment-info",children:i.jsx("span",{className:"payment-text",children:"💳 Visa/Mastercard • 🌍 PayPal • 📱 Mobile Money • ₿ Crypto • 🏦 Bank Transfer"})}),i.jsxs("div",{className:"ai-features",children:[i.jsxs("div",{className:"feature-tag",children:[i.jsx(hn,{size:16}),i.jsx("span",{children:"AI Code Completion"})]}),i.jsxs("div",{className:"feature-tag",children:[i.jsx(ge,{size:16}),i.jsx("span",{children:"Smart Refactoring"})]}),i.jsxs("div",{className:"feature-tag",children:[i.jsx(Je,{size:16}),i.jsx("span",{children:"Natural Language Editing"})]})]}),i.jsxs("div",{className:"stats",children:[i.jsxs("div",{className:"stat",children:[i.jsx("div",{className:"stat-icon",children:i.jsx(pr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("h3",{children:"1M+"}),i.jsx("p",{children:"Active Developers"})]})]}),i.jsxs("div",{className:"stat",children:[i.jsx("div",{className:"stat-icon",children:i.jsx(bi,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("h3",{children:"4.9/5"}),i.jsx("p",{children:"User Rating"})]})]}),i.jsxs("div",{className:"stat",children:[i.jsx("div",{className:"stat-icon",children:i.jsx(ge,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("h3",{children:"50%"}),i.jsx("p",{children:"Faster Coding"})]})]})]})]})})}),i.jsx("div",{className:"hero-image",children:i.jsx("div",{className:"hero-bg"})}),i.jsx("style",{jsx:!0,children:`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-top: 80px;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .highlight {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .download-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .download-btn, .demo-btn {
          gap: 8px;
          padding: 16px 32px;
          font-weight: 600;
          border-radius: 12px;
        }

        .ai-features {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .offer-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          padding: 12px 20px;
          border-radius: 50px;
          margin-bottom: 2rem;
          color: white;
          font-size: 1rem;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
          animation: pulse 2s infinite;
        }

        .offer-icon {
          font-size: 1.25rem;
        }

        .offer-text strong {
          font-weight: 700;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .payment-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .payment-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 25px;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          background: rgba(255, 255, 255, 0.2);
          padding: 12px;
          border-radius: 50%;
        }

        .stat-content h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }

        .stat-content p {
          opacity: 0.8;
          margin: 0;
        }

        .hero-image {
          position: absolute;
          top: 0;
          right: -20%;
          width: 60%;
          height: 100%;
          z-index: 1;
        }

        .hero-bg {
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80') center/cover;
          opacity: 0.3;
          border-radius: 20px 0 0 20px;
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 70px;
            min-height: 90vh;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .download-section {
            flex-direction: column;
            margin-bottom: 2rem;
          }

          .download-btn, .demo-btn {
            width: 100%;
            min-height: 50px;
          }

          .stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-image {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 60px;
            min-height: 85vh;
          }

          .hero-title {
            font-size: 2rem;
            line-height: 1.1;
          }

          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .search-input {
            padding: 0 12px;
          }

          .search-field {
            font-size: 16px; /* Prevent zoom on iOS */
          }

          .stat {
            justify-content: center;
            text-align: center;
          }

          .stat-content h3 {
            font-size: 1.5rem;
          }
        }
      `})]}),yh=()=>{const e=[{id:1,icon:i.jsx(fn,{size:40}),title:"AI Code Completion",description:"Intelligent autocomplete that understands your entire codebase and suggests context-aware completions.",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",badge:"AI-Powered"},{id:2,icon:i.jsx(yi,{size:40}),title:"Chat with AI",description:"Ask questions about your code, get explanations, and receive programming help in natural language.",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",badge:"Interactive"},{id:3,icon:i.jsx(fs,{size:40}),title:"Smart Refactoring",description:"Automatically refactor and optimize your code while maintaining functionality and improving readability.",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",badge:"Smart"},{id:4,icon:i.jsx(Bi,{size:40}),title:"Git Integration",description:"Seamless Git workflow with AI-powered commit messages and intelligent merge conflict resolution.",image:"https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",badge:"Integrated"},{id:5,icon:i.jsx(sh,{size:40}),title:"Integrated Terminal",description:"Built-in terminal with AI assistance for command suggestions and error debugging.",image:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",badge:"Terminal"},{id:6,icon:i.jsx(eh,{size:40}),title:"Custom Themes",description:"Beautiful themes and customizable interface to match your coding style and preferences.",image:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",badge:"Customizable"}];return i.jsxs("section",{id:"features",className:"section",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Powerful AI Features"}),i.jsx("p",{className:"section-subtitle",children:"Experience the future of coding with AI-powered tools that understand your intent and help you code faster"}),i.jsx("div",{className:"features-grid",children:e.map(t=>i.jsxs("div",{className:"feature-card",children:[i.jsxs("div",{className:"feature-image",children:[i.jsx("img",{src:t.image,alt:t.title}),i.jsx("div",{className:"feature-badge",children:t.badge}),i.jsx("div",{className:"feature-overlay",children:i.jsx("div",{className:"feature-icon",children:t.icon})})]}),i.jsxs("div",{className:"feature-content",children:[i.jsx("h3",{className:"feature-title",children:t.title}),i.jsx("p",{className:"feature-description",children:t.description}),i.jsxs("button",{className:"feature-link",children:["Learn More ",i.jsx(Je,{size:16})]})]})]},t.id))}),i.jsx("div",{className:"features-cta",children:i.jsx("button",{className:"btn btn-primary",children:"Try All Features Free"})})]}),i.jsx("style",{jsx:!0,children:`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .feature-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-image img {
          transform: scale(1.05);
        }

        .feature-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .feature-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(255, 107, 107, 0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover .feature-overlay {
          opacity: 1;
        }

        .feature-icon {
          color: white;
          transform: scale(1.2);
        }

        .feature-content {
          padding: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #1a365d;
        }

        .feature-description {
          color: #718096;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feature-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #ff6b6b;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .feature-link:hover {
          color: #ff5252;
        }

        .features-cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-image {
            height: 180px;
          }

          .feature-content {
            padding: 1.25rem;
          }
        }
      `})]})},vh=()=>{const e=[{icon:i.jsx(fn,{size:32}),title:"AI Code Assistant",description:"Advanced AI that understands your code and provides intelligent suggestions and completions."},{icon:i.jsx(hn,{size:32}),title:"Multi-Language Support",description:"Support for 40+ programming languages with syntax highlighting and intelligent features."},{icon:i.jsx(ge,{size:32}),title:"Lightning Fast",description:"Optimized performance for large codebases with instant file search and navigation."},{icon:i.jsx(Je,{size:32}),title:"Smart Debugging",description:"AI-powered debugging with automatic error detection and intelligent fix suggestions."},{icon:i.jsx(pr,{size:32}),title:"Team Collaboration",description:"Real-time collaboration features with shared workspaces and live editing capabilities."},{icon:i.jsx(vi,{size:32}),title:"Secure & Private",description:"Enterprise-grade security with local processing and encrypted data transmission."}];return i.jsxs("section",{id:"services",className:"section services-section",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Why Choose Cursor"}),i.jsx("p",{className:"section-subtitle",children:"Advanced AI-powered features that revolutionize the way you write and edit code"}),i.jsx("div",{className:"services-grid",children:e.map((t,n)=>i.jsxs("div",{className:"service-card",children:[i.jsx("div",{className:"service-icon",children:t.icon}),i.jsx("h3",{className:"service-title",children:t.title}),i.jsx("p",{className:"service-description",children:t.description}),i.jsx("button",{className:"service-link",children:"Learn More →"})]},n))})]}),i.jsx("style",{jsx:!0,children:`
        .services-section {
          background: #f8fafc;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #ff6b6b;
        }

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1);
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a365d;
        }

        .service-description {
          color: #718096;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-link {
          background: none;
          border: none;
          color: #ff6b6b;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #ff5252;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},bh=()=>{const e=[{name:"Free Trial",price:"Free",period:"for 3 weeks",description:"Perfect to get started - no commitment",icon:i.jsx(bi,{size:24}),features:["Full access for 21 days","Unlimited AI completions","All premium features","Advanced code generation","Priority support","Custom themes & plugins","No credit card required"],buttonText:"Start 3-Week Trial",popular:!0,color:"from-green-500 to-emerald-600"},{name:"Monthly Global",price:"From $1",period:"/month",description:"After free trial - affordable worldwide pricing",icon:i.jsx(ge,{size:24}),features:["Everything from free trial","Local currency pricing","KSh 100 (Kenya), ₹80 (India), ₦500 (Nigeria)","$1 USD, €1 EUR, £1 GBP minimum","Unlimited AI completions","Advanced code generation","Priority support","Custom themes & plugins"],buttonText:"View Local Pricing",popular:!1,color:"from-orange-500 to-red-600"},{name:"Student",price:"KSh 50",period:"/month",description:"Special rate for students with valid ID",icon:i.jsx(mu,{size:24}),features:["Everything in Monthly plan","50% student discount","Valid student ID required","All premium features","Priority student support","Access to coding resources","Career development tools","Portfolio building features"],buttonText:"Get Student Rate",popular:!1,color:"from-purple-600 to-indigo-700"}];return i.jsxs("section",{id:"pricing",className:"section pricing-section",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Global Pricing - Local Currencies"}),i.jsx("p",{className:"section-subtitle",children:"Start with a full month completely free, then continue with affordable local pricing. Available in 25+ currencies worldwide."}),i.jsxs("div",{className:"pricing-toggle",children:[i.jsx("span",{className:"toggle-label active",children:"Monthly"}),i.jsxs("div",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",id:"billing-toggle"}),i.jsx("label",{htmlFor:"billing-toggle"})]}),i.jsxs("span",{className:"toggle-label",children:["Annual ",i.jsx("span",{className:"discount",children:"Save 20%"})]})]}),i.jsx("div",{className:"pricing-grid",children:e.map((t,n)=>i.jsxs("div",{className:`pricing-card ${t.popular?"popular":""}`,children:[t.popular&&i.jsxs("div",{className:"popular-badge",children:[i.jsx(bi,{size:16}),"Most Popular"]}),i.jsx("div",{className:`plan-icon bg-gradient-to-r ${t.color}`,children:t.icon}),i.jsxs("div",{className:"plan-header",children:[i.jsx("h3",{className:"plan-name",children:t.name}),i.jsx("p",{className:"plan-description",children:t.description}),i.jsxs("div",{className:"plan-price",children:[i.jsx("span",{className:"price-amount",children:t.price}),t.period&&i.jsx("span",{className:"price-period",children:t.period})]})]}),i.jsx("ul",{className:"plan-features",children:t.features.map((r,o)=>i.jsxs("li",{className:"feature-item",children:[i.jsx(Vf,{size:16,className:"feature-check"}),i.jsx("span",{children:r})]},o))}),i.jsx("button",{className:`btn ${t.popular?"btn-primary":"btn-secondary"} plan-button`,children:t.buttonText})]},n))}),i.jsx("div",{className:"pricing-note",children:i.jsxs("p",{children:["✅ ",i.jsx("strong",{children:"3 weeks FREE trial"})," • ✅ ",i.jsx("strong",{children:"No credit card required"})," • ✅ ",i.jsx("strong",{children:"Cancel anytime"})," • 📱 ",i.jsx("strong",{children:"M-Pesa Paybill: 200999"})," • 💳 ",i.jsx("strong",{children:"Account: 0109060077244"})]})})]}),i.jsx("style",{jsx:!0,children:`
        .pricing-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .pricing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .toggle-label {
          font-weight: 500;
          transition: opacity 0.3s ease;
        }

        .toggle-label.active {
          opacity: 1;
        }

        .toggle-label:not(.active) {
          opacity: 0.7;
        }

        .discount {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          margin-left: 0.5rem;
        }

        .toggle-switch {
          position: relative;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-switch label {
          display: block;
          width: 60px;
          height: 30px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          cursor: pointer;
          position: relative;
          transition: background 0.3s ease;
        }

        .toggle-switch label::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .toggle-switch input:checked + label::after {
          transform: translateX(30px);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          color: #1a365d;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .pricing-card.popular {
          transform: scale(1.05);
          border: 3px solid #ffa726;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .plan-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 15px;
          color: white;
          margin-bottom: 1.5rem;
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .plan-description {
          color: #718096;
          margin-bottom: 1.5rem;
        }

        .plan-price {
          margin-bottom: 2rem;
        }

        .price-amount {
          font-size: 3rem;
          font-weight: 700;
          color: #1a365d;
        }

        .price-period {
          color: #718096;
          font-size: 1rem;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
          text-align: left;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #4a5568;
        }

        .feature-check {
          color: #48bb78;
          flex-shrink: 0;
        }

        .plan-button {
          width: 100%;
          padding: 1rem 2rem;
          font-weight: 600;
        }

        .pricing-note {
          text-align: center;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card.popular {
            transform: none;
          }

          .pricing-toggle {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `})]})},wh=()=>{const[e,t]=j.useState("Global"),n={Global:[{currency:"USD",price:"$1.00",country:"United States"},{currency:"EUR",price:"€0.95",country:"European Union"},{currency:"GBP",price:"£0.85",country:"United Kingdom"},{currency:"CAD",price:"C$1.35",country:"Canada"},{currency:"AUD",price:"A$1.50",country:"Australia"}],Africa:[{currency:"KES",price:"KSh 100",country:"Kenya"},{currency:"NGN",price:"₦500",country:"Nigeria"},{currency:"ZAR",price:"R18",country:"South Africa"},{currency:"GHS",price:"₵6",country:"Ghana"},{currency:"UGX",price:"USh 3,700",country:"Uganda"}],Asia:[{currency:"INR",price:"₹80",country:"India"},{currency:"CNY",price:"¥7",country:"China"},{currency:"JPY",price:"¥150",country:"Japan"},{currency:"KRW",price:"₩1,300",country:"South Korea"},{currency:"SGD",price:"S$1.35",country:"Singapore"}],Americas:[{currency:"BRL",price:"R$5",country:"Brazil"},{currency:"MXN",price:"$18",country:"Mexico"},{currency:"ARS",price:"$100",country:"Argentina"},{currency:"CLP",price:"$850",country:"Chile"},{currency:"COP",price:"$4,200",country:"Colombia"}],Europe:[{currency:"EUR",price:"€0.95",country:"Germany/France/Italy"},{currency:"PLN",price:"4 zł",country:"Poland"},{currency:"CZK",price:"23 Kč",country:"Czech Republic"},{currency:"SEK",price:"10 kr",country:"Sweden"},{currency:"NOK",price:"11 kr",country:"Norway"}]},r=Object.keys(n);return i.jsxs("section",{className:"currency-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("h2",{className:"currency-title",children:[i.jsx(qf,{size:32}),"Local Pricing Worldwide"]}),i.jsx("p",{className:"currency-subtitle",children:"Fair pricing adjusted for your local economy. Select your region to see pricing in your currency."}),i.jsxs("div",{className:"region-selector",children:[i.jsx("label",{htmlFor:"region-select",children:"Choose your region:"}),i.jsx("select",{id:"region-select",value:e,onChange:o=>t(o.target.value),className:"region-dropdown",children:r.map(o=>i.jsx("option",{value:o,children:o},o))}),i.jsx(du,{size:20,className:"dropdown-icon"})]}),i.jsx("div",{className:"pricing-grid",children:n[e].map((o,a)=>i.jsxs("div",{className:"currency-card",children:[i.jsxs("div",{className:"currency-header",children:[i.jsx("span",{className:"currency-code",children:o.currency}),i.jsx("span",{className:"currency-price",children:o.price})]}),i.jsx("div",{className:"currency-country",children:o.country}),i.jsx("div",{className:"currency-note",children:"per month after free trial"})]},a))}),i.jsxs("div",{className:"currency-benefits",children:[i.jsxs("div",{className:"benefit-item",children:[i.jsx("span",{className:"benefit-icon",children:"🌍"}),i.jsx("span",{children:"200+ countries supported"})]}),i.jsxs("div",{className:"benefit-item",children:[i.jsx("span",{className:"benefit-icon",children:"💱"}),i.jsx("span",{children:"25+ currencies available"})]}),i.jsxs("div",{className:"benefit-item",children:[i.jsx("span",{className:"benefit-icon",children:"⚡"}),i.jsx("span",{children:"Automatic currency detection"})]}),i.jsxs("div",{className:"benefit-item",children:[i.jsx("span",{className:"benefit-icon",children:"🔒"}),i.jsx("span",{children:"Secure global payments"})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .currency-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 5rem 0;
        }

        .currency-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
        }

        .currency-subtitle {
          text-align: center;
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .region-selector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .region-selector label {
          font-weight: 500;
          font-size: 1.125rem;
        }

        .region-dropdown {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px 40px 12px 16px;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          appearance: none;
          cursor: pointer;
          min-width: 150px;
        }

        .region-dropdown:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .dropdown-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .currency-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .currency-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .currency-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .currency-code {
          font-weight: 700;
          font-size: 1.125rem;
          opacity: 0.8;
        }

        .currency-price {
          font-weight: 700;
          font-size: 1.5rem;
          color: #ffd700;
        }

        .currency-country {
          font-size: 0.875rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .currency-note {
          font-size: 0.75rem;
          opacity: 0.7;
          font-style: italic;
        }

        .currency-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.125rem;
          font-weight: 500;
        }

        .benefit-icon {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .currency-title {
            font-size: 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .region-selector {
            flex-direction: column;
            gap: 0.75rem;
          }

          .pricing-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
          }

          .currency-benefits {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `})]})},jh=()=>{const e=[{name:"Credit/Debit Cards",icon:i.jsx(xi,{size:32}),description:"Visa, Mastercard, American Express worldwide",details:"Secure payment in any currency • Instant activation",color:"from-blue-600 to-blue-700",global:!0},{name:"PayPal",icon:i.jsx(vi,{size:32}),description:"Pay with PayPal in 200+ countries",details:"USD, EUR, GBP, KES & 25+ currencies supported",color:"from-indigo-600 to-purple-700",global:!0},{name:"M-Pesa Payment (Kenya)",icon:i.jsx(xa,{size:32}),description:"Direct M-Pesa payment to developer account",details:"Paybill: 200999 • Account: 0109060077244",color:"from-green-600 to-green-700",region:"Kenya"},{name:"Bank Transfer",icon:i.jsx(Fl,{size:32}),description:"Direct bank transfer worldwide",details:"SWIFT, SEPA, ACH, local transfers supported",color:"from-orange-600 to-red-700",global:!0},{name:"Crypto Payments",icon:i.jsx(Fl,{size:32}),description:"Bitcoin, Ethereum, USDC, USDT",details:"Instant confirmation • Lower fees • Global access",color:"from-yellow-600 to-orange-700",global:!0},{name:"Regional Options",icon:i.jsx(xi,{size:32}),description:"Local payment methods by region",details:"Alipay, WeChat Pay, UPI, Pix, SEPA & more",color:"from-teal-600 to-cyan-700",global:!0}],t=[{region:"Africa",methods:"M-Pesa (Kenya), MTN Money (Ghana), Orange Money (Senegal), EcoCash (Zimbabwe)"},{region:"Asia",methods:"Alipay, WeChat Pay (China), UPI, Paytm (India), GrabPay (SE Asia)"},{region:"Europe",methods:"SEPA, Klarna, Sofort, iDEAL, Bancontact, Przelewy24"},{region:"Americas",methods:"Pix (Brazil), Interac (Canada), ACH (USA), OXXO (Mexico)"},{region:"Middle East",methods:"STC Pay (Saudi), CashU, Fawry (Egypt), Knet (Kuwait)"},{region:"Oceania",methods:"POLi, BPAY (Australia), Internet Banking (New Zealand)"}];return i.jsxs("section",{className:"payment-section",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"payment-title",children:"Global Payment Options"}),i.jsx("p",{className:"payment-subtitle",children:"Pay from anywhere in the world with your preferred method. 200+ countries supported with local currencies and payment options."}),i.jsx("div",{className:"payment-grid",children:e.map((n,r)=>i.jsxs("div",{className:"payment-card",children:[i.jsx("div",{className:`payment-icon bg-gradient-to-r ${n.color}`,children:n.icon}),i.jsxs("h3",{className:"payment-name",children:[n.name,n.global&&i.jsx("span",{className:"global-badge",children:"🌍 Global"}),n.region&&i.jsxs("span",{className:"region-badge",children:["🇰🇪 ",n.region]})]}),i.jsx("p",{className:"payment-description",children:n.description}),i.jsx("div",{className:"payment-details",children:n.details}),i.jsxs("button",{className:"btn btn-secondary payment-btn",children:["Choose ",n.name]})]},r))}),i.jsxs("div",{className:"regional-methods",children:[i.jsx("h3",{className:"regional-title",children:"Regional Payment Methods"}),i.jsx("div",{className:"regional-grid",children:t.map((n,r)=>i.jsxs("div",{className:"regional-card",children:[i.jsx("h4",{className:"regional-name",children:n.region}),i.jsx("p",{className:"regional-list",children:n.methods})]},r))})]}),i.jsxs("div",{className:"payment-security",children:[i.jsx(vi,{size:24}),i.jsxs("div",{className:"security-text",children:[i.jsx("h4",{children:"Secure & Encrypted"}),i.jsx("p",{children:"All payments are processed securely. Your financial information is never stored."})]})]}),i.jsxs("div",{className:"payment-guarantee",children:[i.jsxs("div",{className:"guarantee-item",children:[i.jsx("span",{className:"guarantee-icon",children:"✅"}),i.jsx("span",{children:"7-day money-back guarantee"})]}),i.jsxs("div",{className:"guarantee-item",children:[i.jsx("span",{className:"guarantee-icon",children:"✅"}),i.jsx("span",{children:"Cancel anytime, no questions asked"})]}),i.jsxs("div",{className:"guarantee-item",children:[i.jsx("span",{className:"guarantee-icon",children:"✅"}),i.jsx("span",{children:"Instant activation after payment"})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .payment-section {
          background: #f8fafc;
          padding: 4rem 0;
        }

        .payment-title {
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
          color: #1a365d;
          margin-bottom: 1rem;
        }

        .payment-subtitle {
          text-align: center;
          color: #4a5568;
          font-size: 1.125rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .payment-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
          border: 2px solid transparent;
        }

        .payment-card:hover {
          transform: translateY(-5px);
          border-color: #ff6b6b;
        }

        .payment-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          color: white;
          margin-bottom: 1.5rem;
        }

        .payment-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.75rem;
        }

        .payment-description {
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .payment-details {
          background: #edf2f7;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          color: #2d3748;
          font-family: 'Courier New', monospace;
          margin-bottom: 1.5rem;
        }

        .payment-btn {
          width: 100%;
          padding: 12px 24px;
        }

        .global-badge {
          display: inline-block;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 12px;
          margin-left: 0.5rem;
          font-weight: 500;
        }

        .region-badge {
          display: inline-block;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 12px;
          margin-left: 0.5rem;
          font-weight: 500;
        }

        .regional-methods {
          margin: 4rem 0;
        }

        .regional-title {
          font-size: 1.875rem;
          font-weight: 600;
          text-align: center;
          color: #1a365d;
          margin-bottom: 2rem;
        }

        .regional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .regional-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid #ff6b6b;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .regional-card:hover {
          transform: translateY(-3px);
        }

        .regional-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.75rem;
        }

        .regional-list {
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
          font-size: 0.875rem;
        }

        .payment-security {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .security-text h4 {
          color: #1a365d;
          margin: 0 0 0.25rem;
          font-weight: 600;
        }

        .security-text p {
          color: #4a5568;
          margin: 0;
          font-size: 0.875rem;
        }

        .payment-guarantee {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4a5568;
          font-weight: 500;
        }

        .guarantee-icon {
          color: #48bb78;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .payment-title {
            font-size: 1.875rem;
          }

          .payment-grid {
            grid-template-columns: 1fr;
          }

          .payment-guarantee {
            grid-template-columns: 1fr;
          }

          .payment-security {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})},kh=()=>{const e=[{name:"Windows",icon:i.jsx($l,{size:32}),description:"Windows 10, 11",size:"145 MB",link:"#download-windows"},{name:"macOS",icon:i.jsx(Df,{size:32}),description:"macOS 10.15+",size:"156 MB",link:"#download-mac"},{name:"Linux",icon:i.jsx($l,{size:32}),description:"Ubuntu, Debian, etc.",size:"142 MB",link:"#download-linux"}];return i.jsxs("section",{id:"download",className:"download-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"download-content",children:[i.jsxs("div",{className:"download-text",children:[i.jsx("h2",{children:"Download Cursor AI"}),i.jsx("p",{className:"download-subtitle",children:"Get started with the AI-first code editor. Available on all major platforms with seamless synchronization across devices."}),i.jsxs("div",{className:"download-stats",children:[i.jsxs("div",{className:"stat",children:[i.jsx("h3",{children:"1M+"}),i.jsx("p",{children:"Downloads"})]}),i.jsxs("div",{className:"stat",children:[i.jsx("h3",{children:"4.9★"}),i.jsx("p",{children:"Rating"})]}),i.jsxs("div",{className:"stat",children:[i.jsx("h3",{children:"50+"}),i.jsx("p",{children:"Languages"})]})]}),i.jsxs("div",{className:"download-features",children:[i.jsxs("div",{className:"feature",children:[i.jsx("span",{className:"checkmark",children:"✓"}),i.jsx("span",{children:"Free forever plan available"})]}),i.jsxs("div",{className:"feature",children:[i.jsx("span",{className:"checkmark",children:"✓"}),i.jsx("span",{children:"No credit card required"})]}),i.jsxs("div",{className:"feature",children:[i.jsx("span",{className:"checkmark",children:"✓"}),i.jsx("span",{children:"Install in under 2 minutes"})]})]})]}),i.jsxs("div",{className:"download-platforms",children:[i.jsx("h3",{children:"Choose Your Platform"}),i.jsx("div",{className:"platforms-grid",children:e.map((t,n)=>i.jsxs("a",{href:t.link,className:"platform-card",children:[i.jsx("div",{className:"platform-icon",children:t.icon}),i.jsxs("div",{className:"platform-info",children:[i.jsx("h4",{children:t.name}),i.jsx("p",{children:t.description}),i.jsx("span",{className:"platform-size",children:t.size})]}),i.jsx("div",{className:"download-arrow",children:i.jsx(vn,{size:20})})]},n))}),i.jsxs("div",{className:"alternative-download",children:[i.jsx("p",{children:"Or try the web version"}),i.jsx("button",{className:"btn btn-secondary web-version-btn",children:"Launch Web Editor"})]}),i.jsx("div",{className:"github-link",children:i.jsxs("a",{href:"#github",className:"github-btn",children:[i.jsx(hs,{size:20}),"View on GitHub"]})})]})]}),i.jsxs("div",{className:"trust-indicators",children:[i.jsx("p",{children:"Trusted by developers at"}),i.jsxs("div",{className:"companies",children:[i.jsx("div",{className:"company",children:"Google"}),i.jsx("div",{className:"company",children:"Microsoft"}),i.jsx("div",{className:"company",children:"Meta"}),i.jsx("div",{className:"company",children:"Netflix"}),i.jsx("div",{className:"company",children:"Spotify"})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .download-section {
          background: #f8fafc;
          padding: 5rem 0;
        }

        .download-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .download-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 1.5rem;
        }

        .download-subtitle {
          font-size: 1.25rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .download-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ff6b6b;
          margin: 0;
        }

        .stat p {
          color: #718096;
          margin: 0;
          font-size: 0.875rem;
        }

        .download-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4a5568;
        }

        .checkmark {
          background: #48bb78;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }

        .download-platforms h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .platforms-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .platform-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .platform-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          color: inherit;
        }

        .platform-icon {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .platform-info {
          flex: 1;
        }

        .platform-info h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: #1a365d;
        }

        .platform-info p {
          color: #718096;
          margin: 0 0 0.25rem;
        }

        .platform-size {
          color: #a0aec0;
          font-size: 0.875rem;
        }

        .download-arrow {
          color: #ff6b6b;
        }

        .alternative-download {
          text-align: center;
          padding: 1.5rem;
          border: 2px dashed #e2e8f0;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .alternative-download p {
          color: #718096;
          margin-bottom: 1rem;
        }

        .web-version-btn {
          padding: 12px 24px;
        }

        .github-link {
          text-align: center;
        }

        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .github-btn:hover {
          color: #ff6b6b;
        }

        .trust-indicators {
          text-align: center;
          border-top: 1px solid #e2e8f0;
          padding-top: 3rem;
        }

        .trust-indicators p {
          color: #718096;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .companies {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .company {
          font-weight: 600;
          color: #a0aec0;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .download-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .download-text h2 {
            font-size: 2rem;
          }

          .download-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .companies {
            gap: 1.5rem;
          }

          .company {
            font-size: 1rem;
          }
        }
      `})]})},Pt=e=>{const t=document.createElement("div");t.className="success-notification",t.textContent=e,t.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `,document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease",setTimeout(()=>{t.parentNode&&document.body.removeChild(t)},300)},3e3)},It=e=>{const t=document.createElement("div");t.className="error-notification",t.textContent=e,t.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(245, 101, 101, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `,document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease",setTimeout(()=>{t.parentNode&&document.body.removeChild(t)},300)},4e3)};if(!document.querySelector("#notification-styles")){const e=document.createElement("style");e.id="notification-styles",e.textContent=`
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `,document.head.appendChild(e)}const Nh=({onImageUpload:e,onImageAnalyze:t})=>{const[n,r]=j.useState(!1),[o,a]=j.useState([]),[s,c]=j.useState(!1),l=j.useRef(null),d=j.useRef(null),g=u=>{u.preventDefault(),u.stopPropagation(),u.type==="dragenter"||u.type==="dragover"?r(!0):u.type==="dragleave"&&r(!1)},m=u=>{u.preventDefault(),u.stopPropagation(),r(!1),u.dataTransfer.files&&u.dataTransfer.files[0]&&f(u.dataTransfer.files)},f=u=>{const p=Array.from(u);if(p.length===0){alert("No files selected. Please select any type of file.");return}if(p.length>10){alert("Maximum 10 files allowed at once.");return}p.forEach(h=>{y(h,"file")})},y=(u,p)=>{if(u.size>52428800){It("File size too large. Please select a file under 50MB.");return}c(!0);const v=new FileReader;v.onload=N=>{var C;try{const P=(C=N.target)==null?void 0:C.result,I={id:Date.now().toString()+Math.random().toString(36),url:P,name:u.name,size:u.size,source:p};a($=>[...$,I]),e(u,p),Pt(`File "${u.name}" uploaded successfully!`),c(!1)}catch(P){console.error("Error processing file:",P),It("Error processing file. Please try again."),c(!1)}},v.onerror=()=>{console.error("Error reading file"),It("Error reading file. Please try again."),c(!1)},v.readAsDataURL(u)},b=u=>{a(p=>p.filter(h=>h.id!==u))},x=u=>{t(u)},w=u=>{if(u===0)return"0 Bytes";const p=1024,h=["Bytes","KB","MB","GB"],v=Math.floor(Math.log(u)/Math.log(p));return parseFloat((u/Math.pow(p,v)).toFixed(2))+" "+h[v]};return i.jsxs("div",{className:"image-uploader",children:[i.jsxs("div",{className:"upload-methods",children:[i.jsx("h3",{children:"AI Image Analysis"}),i.jsx("p",{children:"Upload images or take photos for AI-powered analysis and code generation"}),i.jsxs("div",{className:"upload-buttons",children:[i.jsxs("button",{className:"upload-btn file-upload",onClick:()=>{var u;return(u=l.current)==null?void 0:u.click()},children:[i.jsx(dh,{size:24}),"Upload Files"]}),i.jsxs("button",{className:"upload-btn camera-upload",onClick:()=>{var u;return(u=d.current)==null?void 0:u.click()},children:[i.jsx(Bf,{size:24}),"Take Photo"]})]}),i.jsx("input",{ref:l,type:"file",multiple:!0,accept:"*/*",onChange:u=>u.target.files&&f(u.target.files),style:{display:"none"}}),i.jsx("input",{ref:d,type:"file",accept:"*/*",onChange:u=>u.target.files&&f(u.target.files),style:{display:"none"}}),i.jsxs("div",{className:`drop-zone ${n?"active":""}`,onDragEnter:g,onDragLeave:g,onDragOver:g,onDrop:m,children:[i.jsx(Kf,{size:48}),i.jsx("p",{children:"Drag and drop images here"}),i.jsx("span",{children:"Supports all file types (Max 50MB each)"})]})]}),s&&i.jsxs("div",{className:"processing-indicator",children:[i.jsx(Je,{size:24,className:"spinning"}),i.jsx("span",{children:"Processing image..."})]}),o.length>0&&i.jsxs("div",{className:"uploaded-images",children:[i.jsxs("h4",{children:["Uploaded Images (",o.length,")"]}),i.jsx("div",{className:"images-grid",children:o.map(u=>i.jsxs("div",{className:"image-card",children:[i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:u.url,alt:u.name}),i.jsxs("div",{className:"image-overlay",children:[i.jsxs("button",{className:"analyze-btn",onClick:()=>x(u.url),children:[i.jsx(ge,{size:16}),"Analyze"]}),i.jsxs("button",{className:"view-btn",onClick:()=>window.open(u.url,"_blank"),children:[i.jsx(qe,{size:16}),"View"]})]})]}),i.jsxs("div",{className:"image-info",children:[i.jsx("h5",{children:u.name}),i.jsxs("div",{className:"image-meta",children:[i.jsxs("span",{className:`source-badge ${u.source}`,children:[u.source==="camera"?"📷":"📁"," ",u.source]}),i.jsx("span",{className:"file-size",children:w(u.size)})]})]}),i.jsx("button",{className:"remove-btn",onClick:()=>b(u.id),children:i.jsx(xs,{size:16})})]},u.id))})]}),i.jsx("style",{jsx:!0,children:`
        .image-uploader {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .upload-methods h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }

        .upload-methods p {
          color: #718096;
          margin-bottom: 2rem;
        }

        .upload-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .upload-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .file-upload {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .file-upload:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .camera-upload {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .camera-upload:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .drop-zone {
          border: 3px dashed #e2e8f0;
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #718096;
        }

        .drop-zone.active {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
          color: #ff6b6b;
        }

        .drop-zone:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.02);
        }

        .drop-zone p {
          margin: 1rem 0 0.5rem;
          font-weight: 500;
          font-size: 1.125rem;
        }

        .drop-zone span {
          font-size: 0.875rem;
          opacity: 0.7;
        }

        .processing-indicator {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .spinning {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .uploaded-images h4 {
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .image-card {
          position: relative;
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .image-card:hover {
          transform: translateY(-5px);
        }

        .image-preview {
          position: relative;
          height: 150px;
          overflow: hidden;
        }

        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-card:hover .image-overlay {
          opacity: 1;
        }

        .analyze-btn, .view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .analyze-btn {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
        }

        .view-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .image-info {
          padding: 1rem;
        }

        .image-info h5 {
          margin: 0 0 0.5rem;
          font-weight: 500;
          color: #2d3748;
          font-size: 0.875rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .image-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
        }

        .source-badge {
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 500;
        }

        .source-badge.file {
          background: #e6fffa;
          color: #319795;
        }

        .source-badge.camera {
          background: #fff5f5;
          color: #e53e3e;
        }

        .file-size {
          color: #718096;
        }

        .remove-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-card:hover .remove-btn {
          opacity: 1;
        }

        .remove-btn:hover {
          background: #e53e3e;
        }

        @media (max-width: 768px) {
          .upload-buttons {
            flex-direction: column;
          }

          .images-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }

          .drop-zone {
            padding: 2rem 1rem;
          }
        }
      `})]})},Sh=({imageUrl:e,onAnalysisComplete:t})=>{const[n,r]=j.useState(!1),[o,a]=j.useState(null),[s,c]=j.useState("react"),l=async()=>{r(!0),setTimeout(()=>{const m={id:Date.now().toString(),imageUrl:e,analysis:{description:"A modern mobile app login screen with clean design, featuring email and password input fields, a gradient background, and a prominent 'Sign In' button.",objects:["login form","input fields","button","logo","background"],colors:["#667eea","#764ba2","#ffffff","#2d3748"],text:["Sign In","Email","Password","Forgot Password?"],suggestions:["Add form validation","Include social login options","Improve accessibility","Add loading states"]},generatedCode:{html:`<div class="login-container">
  <div class="login-form">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email" class="input-field">
    <input type="password" placeholder="Password" class="input-field">
    <button class="signin-btn">Sign In</button>
    <a href="#" class="forgot-link">Forgot Password?</a>
  </div>
</div>`,css:`.login-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

.signin-btn {
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
}`,javascript:`// Form validation and submission
const form = document.querySelector('.login-form');
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');
const submitBtn = form.querySelector('.signin-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if (validateForm(email, password)) {
    submitForm(email, password);
  }
});

function validateForm(email, password) {
  if (!email || !password) {
    alert('Please fill in all fields');
    return false;
  }
  return true;
}

function submitForm(email, password) {
  // Handle login logic
  console.log('Login attempt:', { email, password });
}`,react:`import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Handle login logic
      console.log('Login attempt:', { email, password });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        <button 
          type="submit" 
          className="signin-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
        <a href="#" className="forgot-link">Forgot Password?</a>
      </form>
    </div>
  );
};

export default LoginForm;`},timestamp:new Date};a(m),t(m),Pt("Image analysis completed successfully!"),r(!1)},2e3)},d=async m=>{try{await navigator.clipboard.writeText(m),Pt("Code copied to clipboard!");const f=event==null?void 0:event.target;if(f){const y=f.innerHTML;f.innerHTML="✓ Copied!",setTimeout(()=>{f.innerHTML=y},2e3)}}catch(f){console.error("Failed to copy code:",f);const y=document.createElement("textarea");y.value=m,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),alert("Code copied to clipboard!")}},g=(m,f)=>{try{if(!m){alert("No code to download");return}const y=new Blob([m],{type:"text/plain;charset=utf-8"}),b=URL.createObjectURL(y),x=document.createElement("a");x.href=b,x.download=f,x.style.display="none",document.body.appendChild(x),x.click(),document.body.removeChild(x),setTimeout(()=>URL.revokeObjectURL(b),100)}catch(y){console.error("Error downloading file:",y),alert("Error downloading file. Please try again.")}};return i.jsxs("div",{className:"image-analyzer",children:[i.jsxs("div",{className:"analyzer-header",children:[i.jsx("div",{className:"image-preview",children:i.jsx("img",{src:e,alt:"Analysis target"})}),i.jsx("div",{className:"analyzer-actions",children:i.jsx("button",{className:"analyze-btn",onClick:l,disabled:n,children:n?i.jsxs(i.Fragment,{children:[i.jsx(Je,{size:20,className:"spinning"}),"Analyzing..."]}):i.jsxs(i.Fragment,{children:[i.jsx(fn,{size:20}),"Analyze with AI"]})})})]}),o&&i.jsxs("div",{className:"analysis-results",children:[i.jsxs("div",{className:"analysis-section",children:[i.jsxs("h3",{children:[i.jsx(qe,{size:20})," AI Analysis"]}),i.jsxs("div",{className:"analysis-content",children:[i.jsx("p",{className:"description",children:o.analysis.description}),i.jsxs("div",{className:"analysis-grid",children:[i.jsxs("div",{className:"analysis-item",children:[i.jsx("h4",{children:"Detected Objects"}),i.jsx("div",{className:"tags",children:o.analysis.objects.map((m,f)=>i.jsx("span",{className:"tag object-tag",children:m},f))})]}),i.jsxs("div",{className:"analysis-item",children:[i.jsx("h4",{children:"Color Palette"}),i.jsx("div",{className:"color-palette",children:o.analysis.colors.map((m,f)=>i.jsx("div",{className:"color-swatch",style:{backgroundColor:m},title:m},f))})]}),i.jsxs("div",{className:"analysis-item",children:[i.jsx("h4",{children:"Text Found"}),i.jsx("div",{className:"tags",children:o.analysis.text.map((m,f)=>i.jsxs("span",{className:"tag text-tag",children:['"',m,'"']},f))})]}),i.jsxs("div",{className:"analysis-item",children:[i.jsx("h4",{children:"AI Suggestions"}),i.jsx("ul",{className:"suggestions",children:o.analysis.suggestions.map((m,f)=>i.jsx("li",{children:m},f))})]})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsxs("h3",{children:[i.jsx(hn,{size:20})," Generated Code"]}),i.jsx("div",{className:"code-tabs",children:Object.keys(o.generatedCode).map(m=>i.jsx("button",{className:`code-tab ${s===m?"active":""}`,onClick:()=>c(m),children:m.toUpperCase()},m))}),i.jsxs("div",{className:"code-content",children:[i.jsxs("div",{className:"code-header",children:[i.jsxs("span",{className:"code-title",children:[s.toUpperCase()," Code"]}),i.jsxs("div",{className:"code-actions",children:[i.jsxs("button",{className:"action-btn",onClick:()=>d(o.generatedCode[s]),children:[i.jsx(pu,{size:16}),"Copy"]}),i.jsxs("button",{className:"action-btn",onClick:()=>g(o.generatedCode[s],`component.${s==="javascript"?"js":s}`),children:[i.jsx(vn,{size:16}),"Download"]})]})]}),i.jsx("pre",{className:"code-block",children:i.jsx("code",{children:o.generatedCode[s]})})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .image-analyzer {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .analyzer-header {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .image-preview {
          flex: 1;
          max-width: 300px;
        }

        .image-preview img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .analyzer-actions {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .analyze-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .analyze-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .analyze-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 2s linear infinite;
        }

        .analysis-results {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .analysis-section, .code-section {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .analysis-section h3, .code-section h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .description {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #ff6b6b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .analysis-item {
          background: white;
          padding: 1rem;
          border-radius: 8px;
        }

        .analysis-item h4 {
          color: #2d3748;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: #e2e8f0;
          color: #2d3748;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .object-tag {
          background: #e6fffa;
          color: #319795;
        }

        .text-tag {
          background: #fff5f5;
          color: #e53e3e;
        }

        .color-palette {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .color-swatch {
          width: 30px;
          height: 30px;
          border-radius: 6px;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .suggestions {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .suggestions li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 0.875rem;
        }

        .suggestions li:last-child {
          border-bottom: none;
        }

        .code-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .code-tab {
          padding: 8px 16px;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .code-tab.active {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .code-content {
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #2d3748;
          color: white;
        }

        .code-title {
          font-weight: 600;
        }

        .code-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .code-block {
          margin: 0;
          padding: 1rem;
          background: #1a202c;
          color: #e2e8f0;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          overflow-x: auto;
        }

        @media (max-width: 768px) {
          .analyzer-header {
            flex-direction: column;
          }

          .analysis-grid {
            grid-template-columns: 1fr;
          }

          .code-tabs {
            flex-wrap: wrap;
          }
        }
      `})]})},zh=({onCodeGenerate:e})=>{var b;const[t,n]=j.useState(""),[r,o]=j.useState("react"),[a,s]=j.useState(!1),[c,l]=j.useState(""),d=[{id:"react",name:"React Component",icon:"⚛️"},{id:"html",name:"HTML/CSS",icon:"🌐"},{id:"javascript",name:"JavaScript",icon:"📜"},{id:"api",name:"API Code",icon:"🔌"},{id:"database",name:"Database Query",icon:"🗄️"},{id:"python",name:"Python",icon:"🐍"}],g=async()=>{t.trim()&&(s(!0),e(t,r),setTimeout(()=>{try{const x=m(r,t);l(x),Pt("Code generated successfully!"),s(!1)}catch(x){console.error("Error generating code:",x),It("Error generating code. Please try again."),s(!1)}},2e3))},m=(x,w)=>{switch(x){case"react":return`import React, { useState } from 'react';

const ${w.replace(/\s+/g,"")}Component = () => {
  const [data, setData] = useState([]);

  return (
    <div className="component-container">
      <h2>${w}</h2>
      <p>Generated component based on your prompt</p>
      {/* Add your implementation here */}
    </div>
  );
};

export default ${w.replace(/\s+/g,"")}Component;`;case"html":return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${w}</title>
    <style>
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .main-content {
            background: #f8fafc;
            border-radius: 12px;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="main-content">
            <h1>${w}</h1>
            <p>Generated HTML structure</p>
        </div>
    </div>
</body>
</html>`;case"javascript":return`// ${w}
function main() {
    console.log('Generated JavaScript for: ${w}');
    
    // Your implementation here
    const result = processData();
    return result;
}

function processData() {
    // Add your logic here
    return 'Implementation based on: ${w}';
}

main();`;case"python":return`# ${w}
def main():
    """Generated Python code for: ${w}"""
    print('Generated Python implementation')
    
    # Your implementation here
    result = process_data()
    return result

def process_data():
    """Add your logic here"""
    return f"Implementation based on: ${w}"

if __name__ == "__main__":
    main()`;default:return`/* ${w} */
// Generated code for ${x}
console.log('Implementation for: ${w}');`}},f=async()=>{try{await navigator.clipboard.writeText(c),Pt("Code copied to clipboard!");const x=document.querySelector(".action-btn");if(x){const w=x.textContent;x.textContent="✓ Copied!",setTimeout(()=>{x.textContent=w},2e3)}}catch(x){console.error("Failed to copy code:",x);try{const w=document.createElement("textarea");w.value=c,document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w),Pt("Code copied to clipboard!")}catch{It("Failed to copy code. Please select and copy manually.")}}},y=()=>{try{if(!c){It("No code to download");return}const w=(N=>{switch(N){case"python":return"py";case"html":return"html";case"javascript":return"js";case"react":return"jsx";case"api":return"js";case"database":return"sql";default:return"txt"}})(r),u=`generated_${r}_${Date.now()}.${w}`,p=new Blob([c],{type:"text/plain;charset=utf-8"}),h=URL.createObjectURL(p),v=document.createElement("a");v.href=h,v.download=u,v.style.display="none",document.body.appendChild(v),v.click(),document.body.removeChild(v),setTimeout(()=>URL.revokeObjectURL(h),100),Pt(`Code downloaded as ${u}`)}catch(x){console.error("Error downloading file:",x),It("Error downloading file. Please try again.")}};return i.jsxs("div",{className:"code-generator",children:[i.jsxs("div",{className:"generator-header",children:[i.jsxs("h3",{children:[i.jsx(hn,{size:24}),"AI Code Generator"]}),i.jsx("p",{children:"Describe what you want to build, and AI will generate the code"})]}),i.jsx("div",{className:"code-types",children:d.map(x=>i.jsxs("button",{className:`type-btn ${r===x.id?"active":""}`,onClick:()=>o(x.id),children:[i.jsx("span",{className:"type-icon",children:x.icon}),i.jsx("span",{className:"type-name",children:x.name})]},x.id))}),i.jsxs("div",{className:"prompt-section",children:[i.jsx("textarea",{placeholder:"Describe what you want to build... (e.g., 'Create a login form with validation' or 'Build a shopping cart component')",value:t,onChange:x=>n(x.target.value),className:"prompt-input"}),i.jsx("button",{className:"generate-btn",onClick:g,disabled:!t.trim()||a,children:a?i.jsxs(i.Fragment,{children:[i.jsx(Je,{size:20,className:"spinning"}),"Generating..."]}):i.jsxs(i.Fragment,{children:[i.jsx(ge,{size:20}),"Generate Code"]})})]}),c&&i.jsxs("div",{className:"code-output",children:[i.jsxs("div",{className:"output-header",children:[i.jsxs("h4",{children:["Generated ",(b=d.find(x=>x.id===r))==null?void 0:b.name]}),i.jsxs("div",{className:"output-actions",children:[i.jsxs("button",{onClick:f,className:"action-btn",children:[i.jsx(pu,{size:16}),"Copy"]}),i.jsxs("button",{onClick:y,className:"action-btn",children:[i.jsx(vn,{size:16}),"Download"]})]})]}),i.jsx("pre",{className:"code-display",children:i.jsx("code",{children:c})})]}),i.jsx("style",{jsx:!0,children:`
        .code-generator {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .generator-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .generator-header p {
          color: #718096;
          margin-bottom: 2rem;
        }

        .code-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .type-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .type-btn:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .type-btn.active {
          border-color: #ff6b6b;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 167, 38, 0.1) 100%);
        }

        .type-icon {
          font-size: 1.5rem;
        }

        .type-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: #2d3748;
        }

        .prompt-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .prompt-input {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          resize: vertical;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .prompt-input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .generate-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .generate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .generate-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 2s linear infinite;
        }

        .code-output {
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
        }

        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #2d3748;
          color: white;
        }

        .output-header h4 {
          margin: 0;
          font-weight: 600;
        }

        .output-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .code-display {
          margin: 0;
          padding: 1.5rem;
          background: #1a202c;
          color: #e2e8f0;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          overflow-x: auto;
          white-space: pre-wrap;
        }

        @media (max-width: 768px) {
          .code-types {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .generate-btn {
            align-self: stretch;
          }
        }
      `})]})},Ch=()=>i.jsxs("div",{className:"payment-instructions",children:[i.jsxs("div",{className:"instructions-header",children:[i.jsxs("h3",{children:[i.jsx(xa,{size:24}),"M-Pesa Payment Instructions"]}),i.jsx("p",{children:"Easy step-by-step guide to pay for your Cursor AI subscription"})]}),i.jsxs("div",{className:"payment-details-card",children:[i.jsxs("div",{className:"detail-item primary",children:[i.jsx(xi,{size:20}),i.jsxs("div",{className:"detail-content",children:[i.jsx("span",{className:"detail-label",children:"Paybill Number"}),i.jsx("span",{className:"detail-value",children:"200999"})]})]}),i.jsxs("div",{className:"detail-item primary",children:[i.jsx(xa,{size:20}),i.jsxs("div",{className:"detail-content",children:[i.jsx("span",{className:"detail-label",children:"Account Number"}),i.jsx("span",{className:"detail-value",children:"0109060077244"})]})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx(Ff,{size:20}),i.jsxs("div",{className:"detail-content",children:[i.jsx("span",{className:"detail-label",children:"Monthly Amount"}),i.jsx("span",{className:"detail-value",children:"KSh 100"})]})]})]}),i.jsxs("div",{className:"step-by-step",children:[i.jsx("h4",{children:"How to Pay via M-Pesa:"}),i.jsxs("div",{className:"steps-grid",children:[i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"1"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h5",{children:"Open M-Pesa Menu"}),i.jsx("p",{children:"Dial *334# or open M-Pesa app"})]})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"2"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h5",{children:"Select Paybill"}),i.jsx("p",{children:'Choose "Lipa na M-Pesa" → "Paybill"'})]})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"3"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h5",{children:"Enter Details"}),i.jsxs("p",{children:["Business No: ",i.jsx("strong",{children:"200999"})]}),i.jsxs("p",{children:["Account: ",i.jsx("strong",{children:"0109060077244"})]})]})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"4"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h5",{children:"Enter Amount"}),i.jsxs("p",{children:["Amount: ",i.jsx("strong",{children:"KSh 100"})]}),i.jsx("p",{children:"Enter your M-Pesa PIN"})]})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"5"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h5",{children:"Confirmation"}),i.jsx("p",{children:"You'll receive SMS confirmation"}),i.jsx("p",{children:"Account activated instantly!"})]})]})]})]}),i.jsx("div",{className:"payment-support",children:i.jsxs("div",{className:"support-card",children:[i.jsx(cu,{size:24,className:"text-green-500"}),i.jsxs("div",{className:"support-content",children:[i.jsx("h5",{children:"Need Help?"}),i.jsxs("p",{children:["Contact us at ",i.jsx("strong",{children:"11863mark@gmail.com"})]}),i.jsx("p",{children:"We'll help you set up your subscription"})]})]})}),i.jsx("style",{jsx:!0,children:`
        .payment-instructions {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .instructions-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .instructions-header h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .instructions-header p {
          color: #718096;
        }

        .payment-details-card {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .detail-item.primary {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .detail-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .detail-label {
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .detail-value {
          font-size: 1.25rem;
          font-weight: 700;
          font-family: 'Courier New', monospace;
        }

        .step-by-step h4 {
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .step {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
        }

        .step-number {
          position: absolute;
          top: -12px;
          left: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
        }

        .step-content h5 {
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .step-content p {
          color: #4a5568;
          margin: 0.25rem 0;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .payment-support {
          background: #f0fff4;
          border: 1px solid #9ae6b4;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .support-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .support-content h5 {
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .support-content p {
          color: #2d3748;
          margin: 0.25rem 0;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }

          .payment-details-card {
            padding: 1.5rem;
          }

          .detail-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .detail-value {
            font-size: 1.125rem;
          }
        }
      `})]}),Eh=()=>{const[e,t]=j.useState(null),[n,r]=j.useState([]),o=(l,d)=>{console.log("Image uploaded:",l.name,"Source:",d)},a=l=>{t(l)},s=l=>{r(d=>[l,...d])},c=(l,d)=>{console.log("Generating code:",l,"Type:",d)};return i.jsxs("section",{id:"ai-studio",className:"ai-studio-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"studio-header",children:[i.jsxs("h2",{children:[i.jsx(Je,{size:32}),"AI Studio"]}),i.jsx("p",{children:"Upload images, analyze with AI, and generate code instantly"})]}),i.jsxs("div",{className:"studio-content",children:[i.jsxs("div",{className:"ai-tools-grid",children:[i.jsx("div",{className:"ai-tool",children:i.jsx(Nh,{onImageUpload:o,onImageAnalyze:a})}),i.jsx("div",{className:"ai-tool",children:i.jsx(zh,{onCodeGenerate:c})})]}),i.jsx(Ch,{}),e&&i.jsx(Sh,{imageUrl:e,onAnalysisComplete:s}),n.length>0&&i.jsxs("div",{className:"analysis-history",children:[i.jsx("h3",{children:"Analysis History"}),i.jsx("div",{className:"history-grid",children:n.slice(0,3).map(l=>i.jsxs("div",{className:"history-card",children:[i.jsx("img",{src:l.imageUrl,alt:"Analysis"}),i.jsxs("div",{className:"history-info",children:[i.jsxs("p",{children:[l.analysis.description.substring(0,100),"..."]}),i.jsx("span",{children:new Date(l.timestamp).toLocaleDateString()})]})]},l.id))})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .ai-studio-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6rem 0;
        }

        .studio-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .studio-header h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .studio-header p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .analysis-history {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .analysis-history h3 {
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .history-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .history-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .history-card img {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
        }

        .history-info p {
          margin: 0 0 0.5rem;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .history-info span {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .ai-tools-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .ai-tool {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 968px) {
          .ai-tools-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Ph=()=>{const[e,t]=j.useState({name:"",email:"",phone:"",subject:"",message:""}),n=a=>{t({...e,[a.target.name]:a.target.value})},r=a=>{a.preventDefault(),console.log("Form submitted:",e),alert("Thank you for your message! We will get back to you soon.")},o=[{icon:i.jsx(gs,{size:24}),title:"Email Support",details:["11863mark@gmail.com","support@cursor-ai.com"],description:"24/7 email support"},{icon:i.jsx(th,{size:24}),title:"Live Chat",details:["Available in app","Instant responses"],description:"Real-time assistance"},{icon:i.jsx(Ul,{size:24}),title:"Community",details:["Discord Server","GitHub Discussions"],description:"Join our community"},{icon:i.jsx(uu,{size:24}),title:"Documentation",details:["Getting Started Guide","API Reference"],description:"Self-service help"}];return i.jsxs("section",{id:"contact",className:"section contact-section",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Get Support"}),i.jsx("p",{className:"section-subtitle",children:"Have questions about Cursor AI? Our support team is here to help you get the most out of your coding experience"}),i.jsxs("div",{className:"contact-content",children:[i.jsxs("div",{className:"contact-info",children:[i.jsx("div",{className:"contact-cards",children:o.map((a,s)=>i.jsxs("div",{className:"contact-card",children:[i.jsx("div",{className:"contact-icon",children:a.icon}),i.jsx("h3",{className:"contact-title",children:a.title}),i.jsx("div",{className:"contact-details",children:a.details.map((c,l)=>i.jsx("p",{children:c},l))}),i.jsx("p",{className:"contact-description",children:a.description})]},s))}),i.jsx("div",{className:"map-container",children:i.jsxs("div",{className:"map-placeholder",children:[i.jsx(Ul,{size:48}),i.jsx("p",{children:"Interactive Map"}),i.jsx("p",{className:"map-note",children:"Click to view our location"})]})})]}),i.jsx("div",{className:"contact-form-container",children:i.jsxs("form",{className:"contact-form",onSubmit:r,children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:n,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:n,required:!0})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:n})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"subject",children:"Subject"}),i.jsxs("select",{id:"subject",name:"subject",value:e.subject,onChange:n,required:!0,children:[i.jsx("option",{value:"",children:"Select a subject"}),i.jsx("option",{value:"technical",children:"Technical Support"}),i.jsx("option",{value:"billing",children:"Billing & Subscriptions"}),i.jsx("option",{value:"feature",children:"Feature Request"}),i.jsx("option",{value:"bug",children:"Bug Report"}),i.jsx("option",{value:"enterprise",children:"Enterprise Inquiry"}),i.jsx("option",{value:"general",children:"General Question"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Message"}),i.jsx("textarea",{id:"message",name:"message",rows:6,value:e.message,onChange:n,placeholder:"Describe your issue or question...",required:!0})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary submit-btn",children:[i.jsx(oh,{size:20}),"Send Message"]})]})})]})]}),i.jsx("style",{jsx:!0,children:`
        .contact-section {
          background: #f8fafc;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .contact-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.75rem;
        }

        .contact-details p {
          color: #4a5568;
          margin: 0.25rem 0;
          font-weight: 500;
        }

        .contact-description {
          color: #718096;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .map-container {
          grid-column: 1 / -1;
        }

        .map-placeholder {
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
        }

        .map-note {
          font-size: 0.875rem;
          opacity: 0.9;
          margin: 0;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #ff6b6b;
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          gap: 0.5rem;
          width: 100%;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-cards {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-card {
            padding: 1.25rem;
          }

          .contact-form {
            padding: 1.25rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 12px;
            font-size: 16px; /* Prevent zoom on iOS */
            min-height: 44px;
          }

          .form-group textarea {
            min-height: 120px;
          }

          .submit-btn {
            min-height: 50px;
            font-size: 1.125rem;
          }

          .map-placeholder {
            padding: 2rem;
          }
        }
      `})]})},Ih=()=>{const e={product:[{name:"Download",href:"#download"},{name:"Features",href:"#features"},{name:"Pricing",href:"#pricing"},{name:"Changelog",href:"#changelog"},{name:"Roadmap",href:"#roadmap"}],developers:[{name:"Documentation",href:"#docs"},{name:"API Reference",href:"#api"},{name:"Extensions",href:"#extensions"},{name:"Themes",href:"#themes"},{name:"Shortcuts",href:"#shortcuts"}],support:[{name:"Help Center",href:"#help"},{name:"Contact Support",href:"#contact"},{name:"Community",href:"#community"},{name:"Discord",href:"#discord"},{name:"GitHub Issues",href:"#github"}],company:[{name:"About",href:"#about"},{name:"Blog",href:"#blog"},{name:"Careers",href:"#careers"},{name:"Privacy Policy",href:"#privacy"},{name:"Terms of Service",href:"#terms"}]},t=[{icon:i.jsx(Wf,{size:20}),href:"#facebook",name:"Facebook"},{icon:i.jsx(ch,{size:20}),href:"#twitter",name:"Twitter"},{icon:i.jsx(Yf,{size:20}),href:"#instagram",name:"Instagram"},{icon:i.jsx(Xf,{size:20}),href:"#linkedin",name:"LinkedIn"}];return i.jsxs("footer",{className:"footer",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"footer-content",children:[i.jsxs("div",{className:"footer-section",children:[i.jsxs("div",{className:"footer-logo",children:[i.jsx(fs,{size:32}),i.jsx("span",{children:"Cursor"}),i.jsx(ge,{size:20,className:"ai-icon"})]}),i.jsx("p",{className:"footer-description",children:"The AI-first code editor that understands your code. Write, edit, and debug faster than ever with intelligent assistance."}),i.jsxs("div",{className:"contact-info",children:[i.jsxs("div",{className:"contact-item",children:[i.jsx(gs,{size:16}),i.jsx("span",{children:"11863mark@gmail.com"})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx(hs,{size:16}),i.jsx("span",{children:"github.com/getcursor"})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx(yi,{size:16}),i.jsx("span",{children:"Join our Discord"})]})]})]}),i.jsxs("div",{className:"footer-section",children:[i.jsx("h3",{className:"footer-title",children:"Product"}),i.jsx("ul",{className:"footer-links",children:e.product.map((n,r)=>i.jsx("li",{children:i.jsx("a",{href:n.href,children:n.name})},r))})]}),i.jsxs("div",{className:"footer-section",children:[i.jsx("h3",{className:"footer-title",children:"Developers"}),i.jsx("ul",{className:"footer-links",children:e.developers.map((n,r)=>i.jsx("li",{children:i.jsx("a",{href:n.href,children:n.name})},r))})]}),i.jsxs("div",{className:"footer-section",children:[i.jsx("h3",{className:"footer-title",children:"Support"}),i.jsx("ul",{className:"footer-links",children:e.support.map((n,r)=>i.jsx("li",{children:i.jsx("a",{href:n.href,children:n.name})},r))})]}),i.jsxs("div",{className:"footer-section",children:[i.jsx("h3",{className:"footer-title",children:"Company"}),i.jsx("ul",{className:"footer-links",children:e.company.map((n,r)=>i.jsx("li",{children:i.jsx("a",{href:n.href,children:n.name})},r))})]})]}),i.jsx("div",{className:"footer-bottom",children:i.jsxs("div",{className:"footer-bottom-content",children:[i.jsx("p",{className:"copyright",children:"© 2024 Cursor Technologies Inc. All rights reserved."}),i.jsx("div",{className:"social-links",children:t.map((n,r)=>i.jsx("a",{href:n.href,className:"social-link","aria-label":n.name,children:n.icon},r))})]})})]}),i.jsx("style",{jsx:!0,children:`
        .footer {
          background: #1a202c;
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section {
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .footer-description {
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #a0aec0;
          font-size: 0.875rem;
        }

        .footer-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #a0aec0;
          transition: color 0.3s ease;
          font-size: 0.875rem;
        }

        .footer-links a:hover {
          color: #667eea;
        }

        .footer-bottom {
          border-top: 1px solid #2d3748;
          padding-top: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .copyright {
          color: #a0aec0;
          font-size: 0.875rem;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #2d3748;
          border-radius: 50%;
          color: #a0aec0;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 2rem;
          }

          .footer-section:nth-child(4),
          .footer-section:nth-child(5) {
            grid-column: 2 / -1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-section:nth-child(4),
          .footer-section:nth-child(5) {
            grid-column: 1;
            display: block;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .contact-info {
            gap: 1rem;
          }
        }
      `})]})},Mh=()=>{const[e,t]=j.useState("projects"),[n,r]=j.useState(!1),o=[{id:"1",name:"Sarah Chen",email:"sarah@team.com",role:"owner",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b601?w=150&h=150&fit=crop&crop=face",status:"online",lastSeen:"now"},{id:"2",name:"Mike Johnson",email:"mike@team.com",role:"developer",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",status:"online",lastSeen:"2 min ago"},{id:"3",name:"Emily Davis",email:"emily@team.com",role:"developer",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",status:"away",lastSeen:"15 min ago"}],a=[{id:"1",name:"E-commerce Platform",description:"Full-stack e-commerce solution with AI recommendations",members:["1","2","3"],lastModified:"2 hours ago",status:"active"},{id:"2",name:"Mobile Banking App",description:"Secure mobile banking application",members:["1","2"],lastModified:"1 day ago",status:"active"}],s=l=>{switch(l){case"owner":return i.jsx(mu,{size:16,className:"text-yellow-500"});case"admin":return i.jsx(ur,{size:16,className:"text-blue-500"});default:return null}},c=l=>{switch(l){case"online":return"bg-green-500";case"away":return"bg-yellow-500";default:return"bg-gray-400"}};return i.jsxs("div",{className:"team-workspace",children:[i.jsxs("div",{className:"workspace-header",children:[i.jsx("h2",{children:"Team Workspace"}),i.jsxs("div",{className:"workspace-actions",children:[i.jsxs("button",{className:"btn btn-secondary",children:[i.jsx(uh,{size:20}),"Start Meeting"]}),i.jsxs("button",{className:"btn btn-primary",onClick:()=>r(!0),children:[i.jsx(Hr,{size:20}),"Invite Members"]})]})]}),i.jsxs("div",{className:"workspace-tabs",children:[i.jsxs("button",{className:`tab ${e==="projects"?"active":""}`,onClick:()=>t("projects"),children:[i.jsx(Bi,{size:16}),"Projects"]}),i.jsxs("button",{className:`tab ${e==="team"?"active":""}`,onClick:()=>t("team"),children:[i.jsx(pr,{size:16}),"Team Members"]}),i.jsxs("button",{className:`tab ${e==="chat"?"active":""}`,onClick:()=>t("chat"),children:[i.jsx(yi,{size:16}),"Team Chat"]})]}),i.jsxs("div",{className:"workspace-content",children:[e==="projects"&&i.jsxs("div",{className:"projects-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h3",{children:["Active Projects (",a.length,")"]}),i.jsxs("button",{className:"btn btn-primary",children:[i.jsx(Hr,{size:16}),"New Project"]})]}),i.jsx("div",{className:"projects-grid",children:a.map(l=>i.jsxs("div",{className:"project-card",children:[i.jsxs("div",{className:"project-header",children:[i.jsx("h4",{children:l.name}),i.jsx("span",{className:`status-badge ${l.status}`,children:l.status})]}),i.jsx("p",{className:"project-description",children:l.description}),i.jsxs("div",{className:"project-members",children:[i.jsx("div",{className:"member-avatars",children:l.members.map(d=>{const g=o.find(m=>m.id===d);return g?i.jsx("img",{src:g.avatar,alt:g.name,className:"member-avatar",title:g.name},d):null})}),i.jsxs("span",{className:"member-count",children:["+",l.members.length," members"]})]}),i.jsxs("div",{className:"project-footer",children:[i.jsxs("span",{className:"last-modified",children:["Updated ",l.lastModified]}),i.jsxs("button",{className:"btn btn-outline",children:[i.jsx(ah,{size:14}),"Open"]})]})]},l.id))})]}),e==="team"&&i.jsxs("div",{className:"team-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h3",{children:["Team Members (",o.length,")"]}),i.jsxs("button",{className:"btn btn-primary",children:[i.jsx(Hr,{size:16}),"Invite Member"]})]}),i.jsx("div",{className:"members-list",children:o.map(l=>i.jsxs("div",{className:"member-card",children:[i.jsxs("div",{className:"member-info",children:[i.jsxs("div",{className:"member-avatar-container",children:[i.jsx("img",{src:l.avatar,alt:l.name,className:"member-avatar"}),i.jsx("div",{className:`status-dot ${c(l.status)}`})]}),i.jsxs("div",{className:"member-details",children:[i.jsxs("div",{className:"member-name",children:[l.name,s(l.role)]}),i.jsx("div",{className:"member-email",children:l.email}),i.jsxs("div",{className:"member-status",children:[l.status," • ",l.lastSeen]})]})]}),i.jsxs("div",{className:"member-actions",children:[i.jsx("span",{className:"role-badge",children:l.role}),i.jsxs("button",{className:"btn btn-outline btn-sm",children:[i.jsx(yi,{size:14}),"Message"]})]})]},l.id))})]}),e==="chat"&&i.jsxs("div",{className:"chat-section",children:[i.jsxs("div",{className:"chat-messages",children:[i.jsxs("div",{className:"message",children:[i.jsx("img",{src:o[0].avatar,alt:"",className:"message-avatar"}),i.jsxs("div",{className:"message-content",children:[i.jsxs("div",{className:"message-header",children:[i.jsx("span",{className:"message-author",children:o[0].name}),i.jsx("span",{className:"message-time",children:"10:30 AM"})]}),i.jsx("p",{children:"Just pushed the latest changes to the main branch. The new AI completion feature is ready for testing!"})]})]}),i.jsxs("div",{className:"message",children:[i.jsx("img",{src:o[1].avatar,alt:"",className:"message-avatar"}),i.jsxs("div",{className:"message-content",children:[i.jsxs("div",{className:"message-header",children:[i.jsx("span",{className:"message-author",children:o[1].name}),i.jsx("span",{className:"message-time",children:"10:32 AM"})]}),i.jsx("p",{children:"Great! I'll review the code and run some tests. The @ command feature looks amazing."})]})]})]}),i.jsxs("div",{className:"chat-input",children:[i.jsx("input",{type:"text",placeholder:"Type a message..."}),i.jsx("button",{className:"send-btn",children:"Send"})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .team-workspace {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .workspace-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .workspace-header h2 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .workspace-actions {
          display: flex;
          gap: 1rem;
        }

        .workspace-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          background: #f7fafc;
          padding: 4px;
          border-radius: 12px;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 12px 20px;
          border: none;
          background: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          color: #718096;
          transition: all 0.3s ease;
        }

        .tab.active {
          background: white;
          color: #ff6b6b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-header h3 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: #ff6b6b;
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.1);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .project-header h4 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .status-badge.active {
          background: #c6f6d5;
          color: #276749;
        }

        .project-description {
          color: #718096;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-members {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .member-avatars {
          display: flex;
          margin-left: -8px;
        }

        .member-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
        }

        .member-count {
          font-size: 0.875rem;
          color: #718096;
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .last-modified {
          font-size: 0.875rem;
          color: #718096;
        }

        .members-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .member-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .member-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .member-avatar-container {
          position: relative;
        }

        .member-avatar-container .member-avatar {
          width: 48px;
          height: 48px;
        }

        .status-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
        }

        .member-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .member-name {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #1a365d;
        }

        .member-email {
          color: #718096;
          font-size: 0.875rem;
        }

        .member-status {
          color: #a0aec0;
          font-size: 0.75rem;
        }

        .member-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .role-badge {
          background: #e2e8f0;
          color: #2d3748;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .chat-section {
          display: flex;
          flex-direction: column;
          height: 400px;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          gap: 1rem;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .message-content {
          flex: 1;
        }

        .message-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .message-author {
          font-weight: 600;
          color: #1a365d;
        }

        .message-time {
          font-size: 0.75rem;
          color: #a0aec0;
        }

        .message-content p {
          margin: 0;
          color: #2d3748;
          line-height: 1.5;
        }

        .chat-input {
          display: flex;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .chat-input input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
        }

        .chat-input input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .send-btn {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn-outline {
          background: none;
          border: 1px solid #e2e8f0;
          color: #2d3748;
        }

        .btn-sm {
          padding: 6px 12px;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .workspace-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .workspace-actions {
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .member-card {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .member-actions {
            justify-content: space-between;
          }
        }
      `})]})},_h=()=>{const[e,t]=j.useState("gpt-4"),[n,r]=j.useState(""),[o,a]=j.useState(!1),s=[{id:"gpt-4",name:"GPT-4 Turbo",description:"Most advanced model with superior code understanding",capabilities:["Complex reasoning","Large context","Multi-language"],speed:"medium",quality:"high"},{id:"claude-3",name:"Claude 3 Sonnet",description:"Excellent for code analysis and refactoring",capabilities:["Code review","Documentation","Bug fixing"],speed:"fast",quality:"high"},{id:"codex",name:"GitHub Copilot",description:"Specialized for code generation and completion",capabilities:["Code completion","Function generation","Comments"],speed:"fast",quality:"medium"},{id:"local",name:"Local Model",description:"Privacy-focused local inference",capabilities:["Offline","Private","Fast"],speed:"fast",quality:"basic"}],c=[{command:"@explain",description:"Explain selected code"},{command:"@refactor",description:"Refactor and improve code"},{command:"@test",description:"Generate unit tests"},{command:"@docs",description:"Generate documentation"},{command:"@fix",description:"Fix bugs in code"},{command:"@optimize",description:"Optimize performance"},{command:"@convert",description:"Convert to different language"},{command:"@review",description:"Code review and suggestions"}];return i.jsxs("div",{className:"enhanced-completion",children:[i.jsxs("div",{className:"completion-header",children:[i.jsxs("h3",{children:[i.jsx(fn,{size:24}),"Enhanced AI Code Completion"]}),i.jsxs("button",{className:"settings-btn",onClick:()=>a(!o),children:[i.jsx(ur,{size:20}),"Model Settings"]})]}),o&&i.jsxs("div",{className:"model-settings",children:[i.jsx("h4",{children:"AI Model Selection"}),i.jsx("div",{className:"models-grid",children:s.map(l=>i.jsxs("div",{className:`model-card ${e===l.id?"selected":""}`,onClick:()=>t(l.id),children:[i.jsxs("div",{className:"model-header",children:[i.jsx("h5",{children:l.name}),i.jsxs("div",{className:"model-badges",children:[i.jsx("span",{className:`badge speed-${l.speed}`,children:l.speed}),i.jsx("span",{className:`badge quality-${l.quality}`,children:l.quality})]})]}),i.jsx("p",{children:l.description}),i.jsx("div",{className:"capabilities",children:l.capabilities.map((d,g)=>i.jsx("span",{className:"capability-tag",children:d},g))})]},l.id))})]}),i.jsxs("div",{className:"at-commands-section",children:[i.jsxs("h4",{children:[i.jsx(Uf,{size:20}),"@ Command System"]}),i.jsx("p",{children:"Use @ commands to quickly access AI-powered code assistance"}),i.jsx("div",{className:"command-input",children:i.jsx("input",{type:"text",placeholder:"Type @ to see available commands...",value:n,onChange:l=>r(l.target.value),className:"command-field"})}),i.jsx("div",{className:"commands-grid",children:c.map((l,d)=>i.jsxs("div",{className:"command-card",onClick:()=>r(l.command),children:[i.jsx("div",{className:"command-name",children:l.command}),i.jsx("div",{className:"command-desc",children:l.description})]},d))})]}),i.jsxs("div",{className:"completion-features",children:[i.jsx("h4",{children:"AI Completion Features"}),i.jsxs("div",{className:"features-grid",children:[i.jsxs("div",{className:"feature-item",children:[i.jsx(ge,{size:24}),i.jsx("h5",{children:"Intelligent Suggestions"}),i.jsx("p",{children:"Context-aware code completions based on your project"})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx(fu,{size:24}),i.jsx("h5",{children:"Multi-file Context"}),i.jsx("p",{children:"AI understands relationships across your entire codebase"})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx(fn,{size:24}),i.jsx("h5",{children:"Code Understanding"}),i.jsx("p",{children:"Deep semantic analysis for accurate suggestions"})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .enhanced-completion {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .completion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .completion-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .settings-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #e2e8f0;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .settings-btn:hover {
          background: #cbd5e0;
        }

        .model-settings {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .model-settings h4 {
          color: #1a365d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .model-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .model-card:hover {
          border-color: #ff6b6b;
        }

        .model-card.selected {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .model-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .model-header h5 {
          margin: 0;
          color: #1a365d;
          font-weight: 600;
        }

        .model-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge {
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .speed-fast { background: #c6f6d5; color: #276749; }
        .speed-medium { background: #fed7aa; color: #c05621; }
        .speed-slow { background: #fecaca; color: #dc2626; }
        .quality-high { background: #dbeafe; color: #1e40af; }
        .quality-medium { background: #e0e7ff; color: #5b21b6; }
        .quality-basic { background: #f3f4f6; color: #374151; }

        .model-card p {
          color: #718096;
          margin: 0.5rem 0;
          font-size: 0.875rem;
        }

        .capabilities {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }

        .capability-tag {
          background: #e2e8f0;
          color: #2d3748;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .at-commands-section {
          margin-bottom: 2rem;
        }

        .at-commands-section h4 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .at-commands-section p {
          color: #718096;
          margin-bottom: 1.5rem;
        }

        .command-input {
          margin-bottom: 1.5rem;
        }

        .command-field {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Courier New', monospace;
          transition: border-color 0.3s ease;
        }

        .command-field:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .commands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .command-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .command-card:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .command-name {
          font-family: 'Courier New', monospace;
          font-weight: 600;
          color: #ff6b6b;
          margin-bottom: 0.25rem;
        }

        .command-desc {
          font-size: 0.875rem;
          color: #718096;
        }

        .completion-features h4 {
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .feature-item {
          text-align: center;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
        }

        .feature-item svg {
          color: #ff6b6b;
          margin-bottom: 1rem;
        }

        .feature-item h5 {
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .feature-item p {
          color: #718096;
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .completion-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .models-grid {
            grid-template-columns: 1fr;
          }

          .commands-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Th=()=>{const[e,t]=j.useState(""),[n,r]=j.useState("all"),[o,a]=j.useState(!1),s=[{id:"1",name:"src",path:"/src",size:0,type:"folder",ignored:!1,children:[{id:"2",name:"components",path:"/src/components",size:0,type:"folder",ignored:!1,children:[{id:"3",name:"Header.tsx",path:"/src/components/Header.tsx",size:4532,type:"file",language:"typescript",ignored:!1},{id:"4",name:"Footer.tsx",path:"/src/components/Footer.tsx",size:3214,type:"file",language:"typescript",ignored:!1}]},{id:"5",name:"App.tsx",path:"/src/App.tsx",size:2156,type:"file",language:"typescript",ignored:!1},{id:"6",name:"index.tsx",path:"/src/index.tsx",size:1024,type:"file",language:"typescript",ignored:!1}]},{id:"7",name:"node_modules",path:"/node_modules",size:156e6,type:"folder",ignored:!0,children:[]},{id:"8",name:".git",path:"/.git",size:45e6,type:"folder",ignored:!0,children:[]},{id:"9",name:"package.json",path:"/package.json",size:2048,type:"file",language:"json",ignored:!1},{id:"10",name:".cursorignore",path:"/.cursorignore",size:512,type:"file",language:"text",ignored:!1},{id:"11",name:"README.md",path:"/README.md",size:3072,type:"file",language:"markdown",ignored:!1}],c={totalFiles:245,totalSize:"89.2 MB",ignoredFiles:1234,ignoredSize:"156.7 MB",languages:{TypeScript:45,JavaScript:32,CSS:18,JSON:12,Markdown:8}},l=m=>{if(m===0)return"0 B";const f=1024,y=["B","KB","MB","GB"],b=Math.floor(Math.log(m)/Math.log(f));return parseFloat((m/Math.pow(f,b)).toFixed(1))+" "+y[b]},d=m=>m.type==="folder"?i.jsx(Qf,{size:16,className:m.ignored?"text-gray-400":"text-blue-500"}):i.jsx(Gf,{size:16,className:m.ignored?"text-gray-400":"text-green-500"}),g=(m,f=0)=>m.map(y=>y.ignored&&!o?null:i.jsxs("div",{className:"file-item",style:{paddingLeft:`${f*20}px`},children:[i.jsxs("div",{className:`file-content ${y.ignored?"ignored":""}`,children:[i.jsxs("div",{className:"file-info",children:[d(y),i.jsx("span",{className:"file-name",children:y.name}),y.language&&i.jsx("span",{className:"language-badge",children:y.language})]}),i.jsxs("div",{className:"file-meta",children:[i.jsx("span",{className:"file-size",children:l(y.size)}),y.ignored&&i.jsx(ga,{size:14,className:"ignored-icon"})]})]}),y.children&&y.children.length>0&&i.jsx("div",{className:"file-children",children:g(y.children,f+1)})]},y.id));return i.jsxs("div",{className:"project-manager",children:[i.jsxs("div",{className:"manager-header",children:[i.jsxs("h3",{children:[i.jsx(Bi,{size:24}),"Large Project Manager"]}),i.jsx("div",{className:"manager-actions",children:i.jsxs("button",{className:"btn btn-secondary",children:[i.jsx(ur,{size:16}),"Configure"]})})]}),i.jsx("div",{className:"project-stats",children:i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("h4",{children:"Total Files"}),i.jsx("span",{className:"stat-number",children:c.totalFiles}),i.jsx("span",{className:"stat-size",children:c.totalSize})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("h4",{children:"Ignored Files"}),i.jsx("span",{className:"stat-number",children:c.ignoredFiles}),i.jsx("span",{className:"stat-size",children:c.ignoredSize})]}),i.jsxs("div",{className:"stat-card languages",children:[i.jsx("h4",{children:"Languages"}),i.jsx("div",{className:"language-list",children:Object.entries(c.languages).map(([m,f])=>i.jsxs("div",{className:"language-item",children:[i.jsx("span",{children:m}),i.jsx("span",{className:"count",children:f})]},m))})]})]})}),i.jsxs("div",{className:"project-controls",children:[i.jsx("div",{className:"search-section",children:i.jsxs("div",{className:"search-input",children:[i.jsx(ih,{size:16}),i.jsx("input",{type:"text",placeholder:"Search files and folders...",value:e,onChange:m=>t(m.target.value)})]})}),i.jsxs("div",{className:"filter-section",children:[i.jsx("div",{className:"filter-buttons",children:["all","files","folders","typescript","ignored"].map(m=>i.jsx("button",{className:`filter-btn ${n===m?"active":""}`,onClick:()=>r(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))}),i.jsx("div",{className:"view-options",children:i.jsxs("button",{className:`view-btn ${o?"active":""}`,onClick:()=>a(!o),children:[o?i.jsx(qe,{size:16}):i.jsx(ga,{size:16}),o?"Hide Ignored":"Show Ignored"]})})]})]}),i.jsxs("div",{className:"file-explorer",children:[i.jsxs("div",{className:"explorer-header",children:[i.jsx("h4",{children:"Project Structure"}),i.jsxs("div",{className:"performance-indicator",children:[i.jsx(ge,{size:14,className:"text-green-500"}),i.jsx("span",{children:"Optimized for large projects"})]})]}),i.jsx("div",{className:"file-tree",children:g(s)})]}),i.jsx("style",{jsx:!0,children:`
        .project-manager {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .manager-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .project-stats {
          margin-bottom: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 2fr;
          gap: 1.5rem;
        }

        .stat-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
        }

        .stat-card h4 {
          color: #718096;
          font-size: 0.875rem;
          margin: 0 0 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 0.25rem;
        }

        .stat-size {
          color: #718096;
          font-size: 0.875rem;
        }

        .language-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .language-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .language-item:last-child {
          border-bottom: none;
        }

        .count {
          background: #e2e8f0;
          color: #2d3748;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .project-controls {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .search-section {
          margin-bottom: 1rem;
        }

        .search-input {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input svg {
          position: absolute;
          left: 12px;
          color: #718096;
          z-index: 1;
        }

        .search-input input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
        }

        .search-input input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .filter-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .filter-btn {
          padding: 6px 12px;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .filter-btn:hover {
          border-color: #ff6b6b;
        }

        .filter-btn.active {
          background: #ff6b6b;
          color: white;
          border-color: #ff6b6b;
        }

        .view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 6px 12px;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .view-btn:hover {
          border-color: #ff6b6b;
        }

        .view-btn.active {
          background: #ff6b6b;
          color: white;
          border-color: #ff6b6b;
        }

        .file-explorer {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .explorer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .explorer-header h4 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .performance-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #718096;
          font-size: 0.875rem;
        }

        .file-tree {
          max-height: 400px;
          overflow-y: auto;
          padding: 1rem 0;
        }

        .file-item {
          border-bottom: 1px solid #f7fafc;
        }

        .file-item:last-child {
          border-bottom: none;
        }

        .file-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .file-content:hover {
          background: #f8fafc;
        }

        .file-content.ignored {
          opacity: 0.6;
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .file-name {
          font-weight: 500;
          color: #2d3748;
        }

        .language-badge {
          background: #e2e8f0;
          color: #2d3748;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .file-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .file-size {
          color: #718096;
          font-size: 0.875rem;
        }

        .ignored-icon {
          color: #a0aec0;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn-secondary:hover {
          background: #cbd5e0;
        }

        @media (max-width: 768px) {
          .manager-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .filter-section {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .filter-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `})]})},Lh=()=>{const[e,t]=j.useState(`# Dependencies
node_modules/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
/dist/
/build/
*.tgz
*.tar.gz

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Large files
*.zip
*.rar
*.7z
*.tar
*.iso

# AI ignore patterns
*.min.js
*.min.css
/coverage/
/.nyc_output/`),[n]=j.useState([{pattern:"node_modules/",description:"NPM dependencies"},{pattern:"*.log",description:"Log files"},{pattern:".env*",description:"Environment files"},{pattern:"/dist/",description:"Build output"},{pattern:"*.min.js",description:"Minified JavaScript"},{pattern:"*.min.css",description:"Minified CSS"},{pattern:".git/",description:"Git repository"},{pattern:"coverage/",description:"Test coverage"},{pattern:"*.zip",description:"Archive files"},{pattern:".vscode/",description:"VS Code settings"}]),[r]=j.useState({totalPatterns:23,excludedFiles:1456,savedSpace:"234 MB",performanceGain:"67%"}),o=c=>{t(l=>`${l}
${c}`)},a=()=>{console.log("Saving .cursorignore file:",e),alert(".cursorignore file saved successfully!")},s=()=>{t(`# Default Cursor AI ignore patterns
node_modules/
.git/
dist/
build/
*.log
.env*`)};return i.jsxs("div",{className:"cursor-ignore-editor",children:[i.jsxs("div",{className:"editor-header",children:[i.jsxs("h3",{children:[i.jsx(fu,{size:24}),".cursorignore Editor"]}),i.jsxs("div",{className:"header-actions",children:[i.jsxs("button",{className:"btn btn-secondary",onClick:s,children:[i.jsx(nh,{size:16}),"Reset"]}),i.jsxs("button",{className:"btn btn-primary",onClick:a,children:[i.jsx(rh,{size:16}),"Save"]})]})]}),i.jsx("div",{className:"editor-stats",children:i.jsx("div",{className:"stats-grid",children:Object.entries(r).map(([c,l])=>i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-label",children:c.replace(/([A-Z])/g," $1").toLowerCase()}),i.jsx("span",{className:"stat-value",children:l})]},c))})}),i.jsxs("div",{className:"editor-content",children:[i.jsxs("div",{className:"editor-section",children:[i.jsx("h4",{children:"Edit .cursorignore"}),i.jsx("textarea",{value:e,onChange:c=>t(c.target.value),className:"ignore-textarea",placeholder:"Add patterns to ignore files and folders..."})]}),i.jsxs("div",{className:"patterns-section",children:[i.jsx("h4",{children:"Common Patterns"}),i.jsx("div",{className:"patterns-grid",children:n.map((c,l)=>i.jsxs("div",{className:"pattern-card",children:[i.jsxs("div",{className:"pattern-info",children:[i.jsx("code",{className:"pattern-text",children:c.pattern}),i.jsx("span",{className:"pattern-desc",children:c.description})]}),i.jsx("button",{className:"add-pattern-btn",onClick:()=>o(c.pattern),children:i.jsx(Hr,{size:14})})]},l))})]})]}),i.jsxs("div",{className:"preview-section",children:[i.jsxs("h4",{children:[i.jsx(qe,{size:20}),"Preview Impact"]}),i.jsxs("div",{className:"impact-grid",children:[i.jsxs("div",{className:"impact-card positive",children:[i.jsx("h5",{children:"Will be ignored"}),i.jsxs("ul",{children:[i.jsx("li",{children:"node_modules/ (1,234 files)"}),i.jsx("li",{children:"*.log (45 files)"}),i.jsx("li",{children:".env files (8 files)"}),i.jsx("li",{children:"dist/ (156 files)"})]})]}),i.jsxs("div",{className:"impact-card neutral",children:[i.jsx("h5",{children:"Will be included"}),i.jsxs("ul",{children:[i.jsx("li",{children:"src/ (89 files)"}),i.jsx("li",{children:"public/ (12 files)"}),i.jsx("li",{children:"*.tsx, *.ts (67 files)"}),i.jsx("li",{children:"package.json (1 file)"})]})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .cursor-ignore-editor {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .editor-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .editor-stats {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-label {
          display: block;
          color: #718096;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          text-transform: capitalize;
        }

        .stat-value {
          display: block;
          color: #1a365d;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .editor-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .editor-section h4,
        .patterns-section h4 {
          color: #1a365d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .ignore-textarea {
          width: 100%;
          height: 300px;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          resize: vertical;
        }

        .ignore-textarea:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .patterns-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pattern-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .pattern-card:hover {
          border-color: #ff6b6b;
        }

        .pattern-info {
          flex: 1;
        }

        .pattern-text {
          display: block;
          font-family: 'Courier New', monospace;
          font-weight: 600;
          color: #ff6b6b;
          margin-bottom: 0.25rem;
        }

        .pattern-desc {
          font-size: 0.875rem;
          color: #718096;
        }

        .add-pattern-btn {
          background: #e2e8f0;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-pattern-btn:hover {
          background: #ff6b6b;
          color: white;
        }

        .preview-section h4 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .impact-card {
          padding: 1.5rem;
          border-radius: 12px;
          border: 2px solid transparent;
        }

        .impact-card.positive {
          background: #f0fff4;
          border-color: #68d391;
        }

        .impact-card.neutral {
          background: #f7fafc;
          border-color: #cbd5e0;
        }

        .impact-card h5 {
          margin: 0 0 1rem;
          color: #1a365d;
          font-weight: 600;
        }

        .impact-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .impact-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 0.875rem;
          color: #2d3748;
        }

        .impact-card li:last-child {
          border-bottom: none;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 968px) {
          .editor-content {
            grid-template-columns: 1fr;
          }

          .impact-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})},Ah=()=>{const[e,t]=j.useState("review"),[n,r]=j.useState(`function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

const user = {
  name: "John",
  email: "john@email.com"
};

// TODO: Add validation
function processOrder(order) {
  if (order.items) {
    const total = calculateTotal(order.items);
    console.log("Order total:", total);
    return total;
  }
}`),[o]=j.useState([{id:"1",type:"warning",severity:"medium",message:"Consider using reduce() instead of for loop for better readability",line:3,column:3,file:"utils.js",fixable:!0,suggestion:"items.reduce((total, item) => total + (item.price * item.quantity), 0)"},{id:"2",type:"error",severity:"high",message:"Function may return undefined without explicit return",line:16,column:1,file:"utils.js",fixable:!0,suggestion:"Add explicit return statement for else case"},{id:"3",type:"suggestion",severity:"low",message:"Consider adding type annotations for better TypeScript support",line:1,column:1,file:"utils.js",fixable:!0,suggestion:"function calculateTotal(items: OrderItem[]): number"},{id:"4",type:"info",severity:"low",message:"TODO comment should be converted to proper issue tracking",line:12,column:1,file:"utils.js",fixable:!1}]),[a]=j.useState(`interface OrderItem {
  price: number;
  quantity: number;
}

interface Order {
  items: OrderItem[];
}

interface User {
  name: string;
  email: string;
}

function calculateTotal(items: OrderItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

const user: User = {
  name: "John",
  email: "john@email.com"
};

function processOrder(order: Order): number | null {
  if (!order.items || order.items.length === 0) {
    console.warn("Order has no items");
    return null;
  }
  
  const total = calculateTotal(order.items);
  console.log("Order total:", total);
  return total;
}`),s=d=>{switch(d){case"error":return i.jsx(ph,{className:"text-red-500",size:16});case"warning":return i.jsx(Of,{className:"text-yellow-500",size:16});case"suggestion":return i.jsx(cu,{className:"text-blue-500",size:16});default:return i.jsx(qe,{className:"text-gray-500",size:16})}},c=d=>{switch(d){case"high":return"border-red-200 bg-red-50";case"medium":return"border-yellow-200 bg-yellow-50";default:return"border-blue-200 bg-blue-50"}},l=d=>{const g=o.find(m=>m.id===d);g&&g.fixable&&console.log("Applying fix for:",g.message)};return i.jsxs("div",{className:"code-review-refine",children:[i.jsxs("div",{className:"review-header",children:[i.jsxs("h3",{children:[i.jsx(qe,{size:24}),"Code Review & Refine"]}),i.jsxs("div",{className:"review-actions",children:[i.jsxs("button",{className:"btn btn-secondary",children:[i.jsx(Ol,{size:16}),"Create PR"]}),i.jsxs("button",{className:"btn btn-primary",children:[i.jsx(ge,{size:16}),"Auto-fix All"]})]})]}),i.jsxs("div",{className:"review-tabs",children:[i.jsxs("button",{className:`tab ${e==="review"?"active":""}`,onClick:()=>t("review"),children:[i.jsx(qe,{size:16}),"Code Review"]}),i.jsxs("button",{className:`tab ${e==="refine"?"active":""}`,onClick:()=>t("refine"),children:[i.jsx(ge,{size:16}),"AI Refine"]}),i.jsxs("button",{className:`tab ${e==="compare"?"active":""}`,onClick:()=>t("compare"),children:[i.jsx(Ol,{size:16}),"Compare"]})]}),i.jsxs("div",{className:"review-content",children:[e==="review"&&i.jsxs("div",{className:"review-section",children:[i.jsxs("div",{className:"code-editor",children:[i.jsx("h4",{children:"Original Code"}),i.jsx("textarea",{value:n,onChange:d=>r(d.target.value),className:"code-textarea"})]}),i.jsxs("div",{className:"issues-panel",children:[i.jsxs("div",{className:"issues-header",children:[i.jsxs("h4",{children:["Issues Found (",o.length,")"]}),i.jsxs("div",{className:"issue-summary",children:[i.jsxs("span",{className:"error-count",children:[o.filter(d=>d.type==="error").length," errors"]}),i.jsxs("span",{className:"warning-count",children:[o.filter(d=>d.type==="warning").length," warnings"]})]})]}),i.jsx("div",{className:"issues-list",children:o.map(d=>i.jsxs("div",{className:`issue-card ${c(d.severity)}`,children:[i.jsxs("div",{className:"issue-header",children:[i.jsxs("div",{className:"issue-info",children:[s(d.type),i.jsx("span",{className:"issue-type",children:d.type}),i.jsxs("span",{className:"issue-location",children:["Line ",d.line,":",d.column]})]}),d.fixable&&i.jsxs("button",{className:"fix-btn",onClick:()=>l(d.id),children:[i.jsx(ge,{size:14}),"Fix"]})]}),i.jsx("p",{className:"issue-message",children:d.message}),d.suggestion&&i.jsxs("div",{className:"issue-suggestion",children:[i.jsx("span",{className:"suggestion-label",children:"Suggested fix:"}),i.jsx("code",{className:"suggestion-code",children:d.suggestion})]})]},d.id))})]})]}),e==="refine"&&i.jsxs("div",{className:"refine-section",children:[i.jsxs("div",{className:"refine-options",children:[i.jsx("h4",{children:"AI Refinement Options"}),i.jsxs("div",{className:"options-grid",children:[i.jsxs("label",{className:"option-checkbox",children:[i.jsx("input",{type:"checkbox",defaultChecked:!0}),i.jsx("span",{children:"Add TypeScript types"})]}),i.jsxs("label",{className:"option-checkbox",children:[i.jsx("input",{type:"checkbox",defaultChecked:!0}),i.jsx("span",{children:"Improve error handling"})]}),i.jsxs("label",{className:"option-checkbox",children:[i.jsx("input",{type:"checkbox",defaultChecked:!0}),i.jsx("span",{children:"Optimize performance"})]}),i.jsxs("label",{className:"option-checkbox",children:[i.jsx("input",{type:"checkbox"}),i.jsx("span",{children:"Add documentation"})]}),i.jsxs("label",{className:"option-checkbox",children:[i.jsx("input",{type:"checkbox"}),i.jsx("span",{children:"Follow style guide"})]}),i.jsxs("label",{className:"option-checkbox",children:[i.jsx("input",{type:"checkbox"}),i.jsx("span",{children:"Add unit tests"})]})]})]}),i.jsxs("div",{className:"refined-code",children:[i.jsx("h4",{children:"AI Refined Code"}),i.jsx("pre",{className:"code-display",children:i.jsx("code",{children:a})})]})]}),e==="compare"&&i.jsxs("div",{className:"compare-section",children:[i.jsxs("div",{className:"compare-grid",children:[i.jsxs("div",{className:"code-panel original",children:[i.jsx("h4",{children:"Original"}),i.jsx("pre",{className:"code-display",children:i.jsx("code",{children:n})})]}),i.jsxs("div",{className:"code-panel refined",children:[i.jsx("h4",{children:"Refined"}),i.jsx("pre",{className:"code-display",children:i.jsx("code",{children:a})})]})]}),i.jsxs("div",{className:"comparison-stats",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-label",children:"Lines of code"}),i.jsx("span",{className:"stat-change positive",children:"+8 lines"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-label",children:"Type safety"}),i.jsx("span",{className:"stat-change positive",children:"+100%"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-label",children:"Error handling"}),i.jsx("span",{className:"stat-change positive",children:"Improved"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-label",children:"Readability"}),i.jsx("span",{className:"stat-change positive",children:"Enhanced"})]})]})]})]}),i.jsx("style",{jsx:!0,children:`
        .code-review-refine {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .review-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .review-actions {
          display: flex;
          gap: 1rem;
        }

        .review-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          background: #f7fafc;
          padding: 4px;
          border-radius: 12px;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 12px 20px;
          border: none;
          background: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          color: #718096;
          transition: all 0.3s ease;
        }

        .tab.active {
          background: white;
          color: #ff6b6b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .review-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .code-editor h4,
        .issues-panel h4,
        .refine-options h4,
        .refined-code h4 {
          color: #1a365d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .code-textarea {
          width: 100%;
          height: 400px;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          resize: none;
        }

        .code-textarea:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .issues-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .issue-summary {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }

        .error-count {
          color: #e53e3e;
          font-weight: 500;
        }

        .warning-count {
          color: #d69e2e;
          font-weight: 500;
        }

        .issues-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 350px;
          overflow-y: auto;
        }

        .issue-card {
          padding: 1rem;
          border: 1px solid;
          border-radius: 8px;
        }

        .issue-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .issue-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .issue-type {
          font-weight: 500;
          text-transform: capitalize;
        }

        .issue-location {
          background: rgba(0, 0, 0, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-family: 'Courier New', monospace;
        }

        .fix-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: #ff6b6b;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .issue-message {
          margin: 0 0 0.75rem;
          color: #2d3748;
          line-height: 1.4;
        }

        .issue-suggestion {
          background: rgba(0, 0, 0, 0.05);
          padding: 0.75rem;
          border-radius: 4px;
        }

        .suggestion-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
          color: #718096;
        }

        .suggestion-code {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          color: #2d3748;
        }

        .refine-section {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .option-checkbox {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .option-checkbox input[type="checkbox"] {
          margin: 0;
        }

        .code-display {
          background: #1a202c;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          overflow-x: auto;
        }

        .compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .code-panel {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .code-panel h4 {
          padding: 1rem;
          margin: 0;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .code-panel .code-display {
          margin: 0;
          border-radius: 0;
        }

        .comparison-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 12px;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          color: #718096;
          font-weight: 500;
        }

        .stat-change {
          font-weight: 600;
        }

        .stat-change.positive {
          color: #48bb78;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        @media (max-width: 968px) {
          .review-section,
          .refine-section,
          .compare-grid {
            grid-template-columns: 1fr;
          }

          .comparison-stats {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Rh=()=>{const[e,t]=j.useState("collaboration"),n=[{id:"collaboration",name:"Team Collaboration",icon:i.jsx(pr,{size:20}),description:"Real-time collaboration tools"},{id:"ai-completion",name:"Enhanced AI",icon:i.jsx(fn,{size:20}),description:"Advanced AI code completion"},{id:"project-management",name:"Project Manager",icon:i.jsx(Bi,{size:20}),description:"Large project handling"},{id:"cursor-ignore",name:".cursorignore",icon:i.jsx(ur,{size:20}),description:"File exclusion management"},{id:"code-review",name:"Code Review",icon:i.jsx(qe,{size:20}),description:"Review and refine code"}];return i.jsxs("section",{id:"advanced-features",className:"advanced-features-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"features-header",children:[i.jsxs("h2",{children:[i.jsx(ge,{size:32}),"Advanced Developer Features"]}),i.jsx("p",{children:"Professional tools for serious developers and teams"})]}),i.jsx("div",{className:"features-navigation",children:n.map(r=>i.jsxs("button",{className:`feature-nav-btn ${e===r.id?"active":""}`,onClick:()=>t(r.id),children:[r.icon,i.jsxs("div",{className:"nav-content",children:[i.jsx("span",{className:"nav-title",children:r.name}),i.jsx("span",{className:"nav-desc",children:r.description})]})]},r.id))}),i.jsxs("div",{className:"feature-content",children:[e==="collaboration"&&i.jsx(Mh,{}),e==="ai-completion"&&i.jsx(_h,{}),e==="project-management"&&i.jsx(Th,{}),e==="cursor-ignore"&&i.jsx(Lh,{}),e==="code-review"&&i.jsx(Ah,{})]})]}),i.jsx("style",{jsx:!0,children:`
        .advanced-features-section {
          background: #f8fafc;
          padding: 6rem 0;
        }

        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .features-header h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 1rem;
        }

        .features-header p {
          font-size: 1.25rem;
          color: #718096;
        }

        .features-navigation {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .feature-nav-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .feature-nav-btn:hover {
          border-color: #ff6b6b;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.1);
        }

        .feature-nav-btn.active {
          border-color: #ff6b6b;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 167, 38, 0.1) 100%);
        }

        .nav-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-title {
          font-weight: 600;
          color: #1a365d;
        }

        .nav-desc {
          font-size: 0.875rem;
          color: #718096;
        }

        .feature-content {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 768px) {
          .features-navigation {
            grid-template-columns: 1fr;
          }

          .features-header h2 {
            font-size: 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `})]})};function Fh(){return i.jsx(Tf,{children:i.jsxs("div",{className:"App",children:[i.jsx(hh,{}),i.jsx("main",{children:i.jsxs(Pf,{children:[i.jsx(fa,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(xh,{}),i.jsx(yh,{}),i.jsx(vh,{}),i.jsx(bh,{}),i.jsx(wh,{}),i.jsx(jh,{}),i.jsx(Eh,{}),i.jsx(Rh,{}),i.jsx(kh,{}),i.jsx(Ph,{})]})}),i.jsx(fa,{path:"/dashboard",element:i.jsx(gh,{})})]})}),i.jsx(Ih,{})]})})}vo.createRoot(document.getElementById("root")).render(i.jsx(ji.StrictMode,{children:i.jsx(_f,{children:i.jsx(Fh,{})})}));

(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const x of h)if(x.type==="childList")for(const E of x.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&s(E)}).observe(document,{childList:!0,subtree:!0});function d(h){const x={};return h.integrity&&(x.integrity=h.integrity),h.referrerPolicy&&(x.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?x.credentials="include":h.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function s(h){if(h.ep)return;h.ep=!0;const x=d(h);fetch(h.href,x)}})();function Ig(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bu={exports:{}},Pn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function Pg(){if(c1)return Pn;c1=1;var n=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(s,h,x){var E=null;if(x!==void 0&&(E=""+x),h.key!==void 0&&(E=""+h.key),"key"in h){x={};for(var _ in h)_!=="key"&&(x[_]=h[_])}else x=h;return h=x.ref,{$$typeof:n,type:s,key:E,ref:h!==void 0?h:null,props:x}}return Pn.Fragment=u,Pn.jsx=d,Pn.jsxs=d,Pn}var u1;function t2(){return u1||(u1=1,bu.exports=Pg()),bu.exports}var o=t2(),yu={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function e2(){if(s1)return F;s1=1;var n=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),E=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.iterator;function Z(b){return b===null||typeof b!="object"?null:(b=N&&b[N]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,pt={};function et(b,$,B){this.props=b,this.context=$,this.refs=pt,this.updater=B||G}et.prototype.isReactComponent={},et.prototype.setState=function(b,$){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,$,"setState")},et.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function X(){}X.prototype=et.prototype;function bt(b,$,B){this.props=b,this.context=$,this.refs=pt,this.updater=B||G}var Ot=bt.prototype=new X;Ot.constructor=bt,J(Ot,et.prototype),Ot.isPureReactComponent=!0;var yt=Array.isArray;function ht(){}var U={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function Kt(b,$,B){var k=B.ref;return{$$typeof:n,type:b,key:$,ref:k!==void 0?k:null,props:B}}function be(b,$){return Kt(b.type,$,b.props)}function Rt(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function Ut(b){var $={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return $[B]})}var _t=/\/+/g;function Jt(b,$){return typeof b=="object"&&b!==null&&b.key!=null?Ut(""+b.key):$.toString(36)}function It(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ht,ht):(b.status="pending",b.then(function($){b.status==="pending"&&(b.status="fulfilled",b.value=$)},function($){b.status==="pending"&&(b.status="rejected",b.reason=$)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function C(b,$,B,k,L){var P=typeof b;(P==="undefined"||P==="boolean")&&(b=null);var it=!1;if(b===null)it=!0;else switch(P){case"bigint":case"string":case"number":it=!0;break;case"object":switch(b.$$typeof){case n:case u:it=!0;break;case T:return it=b._init,C(it(b._payload),$,B,k,L)}}if(it)return L=L(b),it=k===""?"."+Jt(b,0):k,yt(L)?(B="",it!=null&&(B=it.replace(_t,"$&/")+"/"),C(L,$,B,"",function(ce){return ce})):L!=null&&(Rt(L)&&(L=be(L,B+(L.key==null||b&&b.key===L.key?"":(""+L.key).replace(_t,"$&/")+"/")+it)),$.push(L)),1;it=0;var Qt=k===""?".":k+":";if(yt(b))for(var Tt=0;Tt<b.length;Tt++)k=b[Tt],P=Qt+Jt(k,Tt),it+=C(k,$,B,P,L);else if(Tt=Z(b),typeof Tt=="function")for(b=Tt.call(b),Tt=0;!(k=b.next()).done;)k=k.value,P=Qt+Jt(k,Tt++),it+=C(k,$,B,P,L);else if(P==="object"){if(typeof b.then=="function")return C(It(b),$,B,k,L);throw $=String(b),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return it}function H(b,$,B){if(b==null)return b;var k=[],L=0;return C(b,k,"","",function(P){return $.call(B,P,L++)}),k}function V(b){if(b._status===-1){var $=b._result;$=$(),$.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=$)}if(b._status===1)return b._result.default;throw b._result}var rt=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},nt={map:H,forEach:function(b,$,B){H(b,function(){$.apply(this,arguments)},B)},count:function(b){var $=0;return H(b,function(){$++}),$},toArray:function(b){return H(b,function($){return $})||[]},only:function(b){if(!Rt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return F.Activity=R,F.Children=nt,F.Component=et,F.Fragment=d,F.Profiler=h,F.PureComponent=bt,F.StrictMode=s,F.Suspense=S,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,F.__COMPILER_RUNTIME={__proto__:null,c:function(b){return U.H.useMemoCache(b)}},F.cache=function(b){return function(){return b.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(b,$,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var k=J({},b.props),L=b.key;if($!=null)for(P in $.key!==void 0&&(L=""+$.key),$)!W.call($,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&$.ref===void 0||(k[P]=$[P]);var P=arguments.length-2;if(P===1)k.children=B;else if(1<P){for(var it=Array(P),Qt=0;Qt<P;Qt++)it[Qt]=arguments[Qt+2];k.children=it}return Kt(b.type,L,k)},F.createContext=function(b){return b={$$typeof:E,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:x,_context:b},b},F.createElement=function(b,$,B){var k,L={},P=null;if($!=null)for(k in $.key!==void 0&&(P=""+$.key),$)W.call($,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(L[k]=$[k]);var it=arguments.length-2;if(it===1)L.children=B;else if(1<it){for(var Qt=Array(it),Tt=0;Tt<it;Tt++)Qt[Tt]=arguments[Tt+2];L.children=Qt}if(b&&b.defaultProps)for(k in it=b.defaultProps,it)L[k]===void 0&&(L[k]=it[k]);return Kt(b,P,L)},F.createRef=function(){return{current:null}},F.forwardRef=function(b){return{$$typeof:_,render:b}},F.isValidElement=Rt,F.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:V}},F.memo=function(b,$){return{$$typeof:v,type:b,compare:$===void 0?null:$}},F.startTransition=function(b){var $=U.T,B={};U.T=B;try{var k=b(),L=U.S;L!==null&&L(B,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(ht,rt)}catch(P){rt(P)}finally{$!==null&&B.types!==null&&($.types=B.types),U.T=$}},F.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},F.use=function(b){return U.H.use(b)},F.useActionState=function(b,$,B){return U.H.useActionState(b,$,B)},F.useCallback=function(b,$){return U.H.useCallback(b,$)},F.useContext=function(b){return U.H.useContext(b)},F.useDebugValue=function(){},F.useDeferredValue=function(b,$){return U.H.useDeferredValue(b,$)},F.useEffect=function(b,$){return U.H.useEffect(b,$)},F.useEffectEvent=function(b){return U.H.useEffectEvent(b)},F.useId=function(){return U.H.useId()},F.useImperativeHandle=function(b,$,B){return U.H.useImperativeHandle(b,$,B)},F.useInsertionEffect=function(b,$){return U.H.useInsertionEffect(b,$)},F.useLayoutEffect=function(b,$){return U.H.useLayoutEffect(b,$)},F.useMemo=function(b,$){return U.H.useMemo(b,$)},F.useOptimistic=function(b,$){return U.H.useOptimistic(b,$)},F.useReducer=function(b,$,B){return U.H.useReducer(b,$,B)},F.useRef=function(b){return U.H.useRef(b)},F.useState=function(b){return U.H.useState(b)},F.useSyncExternalStore=function(b,$,B){return U.H.useSyncExternalStore(b,$,B)},F.useTransition=function(){return U.H.useTransition()},F.version="19.2.8",F}var f1;function Wu(){return f1||(f1=1,yu.exports=e2()),yu.exports}var I=Wu();const re=Ig(I);var xu={exports:{}},ti={},vu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1;function l2(){return d1||(d1=1,(function(n){function u(C,H){var V=C.length;C.push(H);t:for(;0<V;){var rt=V-1>>>1,nt=C[rt];if(0<h(nt,H))C[rt]=H,C[V]=nt,V=rt;else break t}}function d(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var H=C[0],V=C.pop();if(V!==H){C[0]=V;t:for(var rt=0,nt=C.length,b=nt>>>1;rt<b;){var $=2*(rt+1)-1,B=C[$],k=$+1,L=C[k];if(0>h(B,V))k<nt&&0>h(L,B)?(C[rt]=L,C[k]=V,rt=k):(C[rt]=B,C[$]=V,rt=$);else if(k<nt&&0>h(L,V))C[rt]=L,C[k]=V,rt=k;else break t}}return H}function h(C,H){var V=C.sortIndex-H.sortIndex;return V!==0?V:C.id-H.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;n.unstable_now=function(){return x.now()}}else{var E=Date,_=E.now();n.unstable_now=function(){return E.now()-_}}var S=[],v=[],T=1,R=null,N=3,Z=!1,G=!1,J=!1,pt=!1,et=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,bt=typeof setImmediate<"u"?setImmediate:null;function Ot(C){for(var H=d(v);H!==null;){if(H.callback===null)s(v);else if(H.startTime<=C)s(v),H.sortIndex=H.expirationTime,u(S,H);else break;H=d(v)}}function yt(C){if(J=!1,Ot(C),!G)if(d(S)!==null)G=!0,ht||(ht=!0,Ut());else{var H=d(v);H!==null&&It(yt,H.startTime-C)}}var ht=!1,U=-1,W=5,Kt=-1;function be(){return pt?!0:!(n.unstable_now()-Kt<W)}function Rt(){if(pt=!1,ht){var C=n.unstable_now();Kt=C;var H=!0;try{t:{G=!1,J&&(J=!1,X(U),U=-1),Z=!0;var V=N;try{e:{for(Ot(C),R=d(S);R!==null&&!(R.expirationTime>C&&be());){var rt=R.callback;if(typeof rt=="function"){R.callback=null,N=R.priorityLevel;var nt=rt(R.expirationTime<=C);if(C=n.unstable_now(),typeof nt=="function"){R.callback=nt,Ot(C),H=!0;break e}R===d(S)&&s(S),Ot(C)}else s(S);R=d(S)}if(R!==null)H=!0;else{var b=d(v);b!==null&&It(yt,b.startTime-C),H=!1}}break t}finally{R=null,N=V,Z=!1}H=void 0}}finally{H?Ut():ht=!1}}}var Ut;if(typeof bt=="function")Ut=function(){bt(Rt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,Jt=_t.port2;_t.port1.onmessage=Rt,Ut=function(){Jt.postMessage(null)}}else Ut=function(){et(Rt,0)};function It(C,H){U=et(function(){C(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(C){C.callback=null},n.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_next=function(C){switch(N){case 1:case 2:case 3:var H=3;break;default:H=N}var V=N;N=H;try{return C()}finally{N=V}},n.unstable_requestPaint=function(){pt=!0},n.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var V=N;N=C;try{return H()}finally{N=V}},n.unstable_scheduleCallback=function(C,H,V){var rt=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?rt+V:rt):V=rt,C){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=V+nt,C={id:T++,callback:H,priorityLevel:C,startTime:V,expirationTime:nt,sortIndex:-1},V>rt?(C.sortIndex=V,u(v,C),d(S)===null&&C===d(v)&&(J?(X(U),U=-1):J=!0,It(yt,V-rt))):(C.sortIndex=nt,u(S,C),G||Z||(G=!0,ht||(ht=!0,Ut()))),C},n.unstable_shouldYield=be,n.unstable_wrapCallback=function(C){var H=N;return function(){var V=N;N=H;try{return C.apply(this,arguments)}finally{N=V}}}})(Su)),Su}var h1;function a2(){return h1||(h1=1,vu.exports=l2()),vu.exports}var ju={exports:{}},ne={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function n2(){if(m1)return ne;m1=1;var n=Wu();function u(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)v+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function x(S,v,T){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:R==null?null:""+R,children:S,containerInfo:v,implementation:T}}var E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ne.createPortal=function(S,v){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(u(299));return x(S,v,null,T)},ne.flushSync=function(S){var v=E.T,T=s.p;try{if(E.T=null,s.p=2,S)return S()}finally{E.T=v,s.p=T,s.d.f()}},ne.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},ne.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},ne.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var T=v.as,R=_(T,v.crossOrigin),N=typeof v.integrity=="string"?v.integrity:void 0,Z=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;T==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:R,integrity:N,fetchPriority:Z}):T==="script"&&s.d.X(S,{crossOrigin:R,integrity:N,fetchPriority:Z,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ne.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var T=_(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(S)},ne.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var T=v.as,R=_(T,v.crossOrigin);s.d.L(S,T,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ne.preloadModule=function(S,v){if(typeof S=="string")if(v){var T=_(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(S)},ne.requestFormReset=function(S){s.d.r(S)},ne.unstable_batchedUpdates=function(S,v){return S(v)},ne.useFormState=function(S,v,T){return E.H.useFormState(S,v,T)},ne.useFormStatus=function(){return E.H.useHostTransitionStatus()},ne.version="19.2.8",ne}var g1;function i2(){if(g1)return ju.exports;g1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(u){console.error(u)}}return n(),ju.exports=n2(),ju.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1;function r2(){if(p1)return ti;p1=1;var n=a2(),u=Wu(),d=i2();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function x(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function E(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(x(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=x(t),e===null)throw Error(s(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===l)return S(i),t;if(r===a)return S(i),e;r=r.sibling}throw Error(s(188))}if(l.return!==a.return)l=i,a=r;else{for(var c=!1,f=i.child;f;){if(f===l){c=!0,l=i,a=r;break}if(f===a){c=!0,a=i,l=r;break}f=f.sibling}if(!c){for(f=r.child;f;){if(f===l){c=!0,l=r,a=i;break}if(f===a){c=!0,a=r,l=i;break}f=f.sibling}if(!c)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:e}function T(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=T(t),e!==null)return e;t=t.sibling}return null}var R=Object.assign,N=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),pt=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),Ot=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Kt=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),Rt=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=Rt&&t[Rt]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Symbol.for("react.client.reference");function Jt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===_t?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case et:return"Profiler";case pt:return"StrictMode";case yt:return"Suspense";case ht:return"SuspenseList";case Kt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case bt:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case Ot:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return e=t.displayName||null,e!==null?e:Jt(t.type)||"Memo";case W:e=t._payload,t=t._init;try{return Jt(t(e))}catch{}}return null}var It=Array.isArray,C=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},rt=[],nt=-1;function b(t){return{current:t}}function $(t){0>nt||(t.current=rt[nt],rt[nt]=null,nt--)}function B(t,e){nt++,rt[nt]=t.current,t.current=e}var k=b(null),L=b(null),P=b(null),it=b(null);function Qt(t,e){switch(B(P,e),B(L,t),B(k,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?O0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=O0(e),t=_0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(k),B(k,t)}function Tt(){$(k),$(L),$(P)}function ce(t){t.memoizedState!==null&&B(it,t);var e=k.current,l=_0(e,t.type);e!==l&&(B(L,t),B(k,l))}function mi(t){L.current===t&&($(k),$(L)),it.current===t&&($(it),Jn._currentValue=V)}var Ir,rs;function Ll(t){if(Ir===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ir=e&&e[1]||"",rs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ir+t+rs}var Pr=!1;function to(t,e){if(!t||Pr)return"";Pr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(A){var w=A}Reflect.construct(t,[],D)}else{try{D.call()}catch(A){w=A}t.call(D.prototype)}}else{try{throw Error()}catch(A){w=A}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(A){if(A&&w&&typeof A.stack=="string")return[A.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),c=r[0],f=r[1];if(c&&f){var m=c.split(`
`),z=f.split(`
`);for(i=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(a===m.length||i===z.length)for(a=m.length-1,i=z.length-1;1<=a&&0<=i&&m[a]!==z[i];)i--;for(;1<=a&&0<=i;a--,i--)if(m[a]!==z[i]){if(a!==1||i!==1)do if(a--,i--,0>i||m[a]!==z[i]){var M=`
`+m[a].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=a&&0<=i);break}}}finally{Pr=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ll(l):""}function Mh(t,e){switch(t.tag){case 26:case 27:case 5:return Ll(t.type);case 16:return Ll("Lazy");case 13:return t.child!==e&&e!==null?Ll("Suspense Fallback"):Ll("Suspense");case 19:return Ll("SuspenseList");case 0:case 15:return to(t.type,!1);case 11:return to(t.type.render,!1);case 1:return to(t.type,!0);case 31:return Ll("Activity");default:return""}}function os(t){try{var e="",l=null;do e+=Mh(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var eo=Object.prototype.hasOwnProperty,lo=n.unstable_scheduleCallback,ao=n.unstable_cancelCallback,$h=n.unstable_shouldYield,Oh=n.unstable_requestPaint,ye=n.unstable_now,_h=n.unstable_getCurrentPriorityLevel,cs=n.unstable_ImmediatePriority,us=n.unstable_UserBlockingPriority,gi=n.unstable_NormalPriority,Dh=n.unstable_LowPriority,ss=n.unstable_IdlePriority,Rh=n.log,Bh=n.unstable_setDisableYieldValue,on=null,xe=null;function gl(t){if(typeof Rh=="function"&&Bh(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(on,t)}catch{}}var ve=Math.clz32?Math.clz32:kh,Nh=Math.log,Hh=Math.LN2;function kh(t){return t>>>=0,t===0?32:31-(Nh(t)/Hh|0)|0}var pi=256,bi=262144,yi=4194304;function Xl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xi(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,r=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~r,a!==0?i=Xl(a):(c&=f,c!==0?i=Xl(c):l||(l=f&~t,l!==0&&(i=Xl(l))))):(f=a&~r,f!==0?i=Xl(f):c!==0?i=Xl(c):l||(l=a&~t,l!==0&&(i=Xl(l)))),i===0?0:e!==0&&e!==i&&(e&r)===0&&(r=i&-i,l=e&-e,r>=l||r===32&&(l&4194048)!==0)?e:i}function cn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Uh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fs(){var t=yi;return yi<<=1,(yi&62914560)===0&&(yi=4194304),t}function no(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function un(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gh(t,e,l,a,i,r){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,m=t.expirationTimes,z=t.hiddenUpdates;for(l=c&~l;0<l;){var M=31-ve(l),D=1<<M;f[M]=0,m[M]=-1;var w=z[M];if(w!==null)for(z[M]=null,M=0;M<w.length;M++){var A=w[M];A!==null&&(A.lane&=-536870913)}l&=~D}a!==0&&ds(t,a,0),r!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=r&~(c&~e))}function ds(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ve(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function hs(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ve(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function ms(t,e){var l=e&-e;return l=(l&42)!==0?1:io(l),(l&(t.suspendedLanes|e))!==0?0:l}function io(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ro(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function gs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:e1(t.type))}function ps(t,e){var l=H.p;try{return H.p=t,e()}finally{H.p=l}}var pl=Math.random().toString(36).slice(2),Pt="__reactFiber$"+pl,ue="__reactProps$"+pl,ma="__reactContainer$"+pl,oo="__reactEvents$"+pl,Yh="__reactListeners$"+pl,qh="__reactHandles$"+pl,bs="__reactResources$"+pl,sn="__reactMarker$"+pl;function co(t){delete t[Pt],delete t[ue],delete t[oo],delete t[Yh],delete t[qh]}function ga(t){var e=t[Pt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ma]||l[Pt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=U0(t);t!==null;){if(l=t[Pt])return l;t=U0(t)}return e}t=l,l=t.parentNode}return null}function pa(t){if(t=t[Pt]||t[ma]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function fn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ba(t){var e=t[bs];return e||(e=t[bs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[sn]=!0}var ys=new Set,xs={};function Ql(t,e){ya(t,e),ya(t+"Capture",e)}function ya(t,e){for(xs[t]=e,t=0;t<e.length;t++)ys.add(e[t])}var Lh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vs={},Ss={};function Xh(t){return eo.call(Ss,t)?!0:eo.call(vs,t)?!1:Lh.test(t)?Ss[t]=!0:(vs[t]=!0,!1)}function vi(t,e,l){if(Xh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Si(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function We(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function js(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qh(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(c){l=""+c,r.call(this,c)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uo(t){if(!t._valueTracker){var e=js(t)?"checked":"value";t._valueTracker=Qh(t,e,""+t[e])}}function zs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=js(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function ji(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vh=/[\n"\\]/g;function Me(t){return t.replace(Vh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function so(t,e,l,a,i,r,c,f){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ce(e)):t.value!==""+Ce(e)&&(t.value=""+Ce(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?fo(t,c,Ce(e)):l!=null?fo(t,c,Ce(l)):a!=null&&t.removeAttribute("value"),i==null&&r!=null&&(t.defaultChecked=!!r),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+Ce(f):t.removeAttribute("name")}function ws(t,e,l,a,i,r,c,f){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||l!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){uo(t);return}l=l!=null?""+Ce(l):"",e=e!=null?""+Ce(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),uo(t)}function fo(t,e,l){e==="number"&&ji(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function xa(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Ce(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Es(t,e,l){if(e!=null&&(e=""+Ce(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Ce(l):""}function As(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(s(92));if(It(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Ce(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),uo(t)}function va(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Zh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ts(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Zh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Cs(t,e,l){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&Ts(t,i,a)}else for(var r in e)e.hasOwnProperty(r)&&Ts(t,r,e[r])}function ho(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(t){return Jh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fe(){}var mo=null;function go(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sa=null,ja=null;function Ms(t){var e=pa(t);if(e&&(t=e.stateNode)){var l=t[ue]||null;t:switch(t=e.stateNode,e.type){case"input":if(so(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Me(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[ue]||null;if(!i)throw Error(s(90));so(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&zs(a)}break t;case"textarea":Es(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&xa(t,!!l.multiple,e,!1)}}}var po=!1;function $s(t,e,l){if(po)return t(e,l);po=!0;try{var a=t(e);return a}finally{if(po=!1,(Sa!==null||ja!==null)&&(sr(),Sa&&(e=Sa,t=ja,ja=Sa=null,Ms(e),t)))for(e=0;e<t.length;e++)Ms(t[e])}}function dn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ue]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,e,typeof l));return l}var Ie=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(Ie)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){bo=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{bo=!1}var bl=null,yo=null,wi=null;function Os(){if(wi)return wi;var t,e=yo,l=e.length,a,i="value"in bl?bl.value:bl.textContent,r=i.length;for(t=0;t<l&&e[t]===i[t];t++);var c=l-t;for(a=1;a<=c&&e[l-a]===i[r-a];a++);return wi=i.slice(t,1<a?1-a:void 0)}function Ei(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ai(){return!0}function _s(){return!1}function se(t){function e(l,a,i,r,c){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(r):r[f]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ai:_s,this.isPropagationStopped=_s,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),e}var Vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=se(Vl),mn=R({},Vl,{view:0,detail:0}),Wh=se(mn),xo,vo,gn,Ci=R({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gn&&(gn&&t.type==="mousemove"?(xo=t.screenX-gn.screenX,vo=t.screenY-gn.screenY):vo=xo=0,gn=t),xo)},movementY:function(t){return"movementY"in t?t.movementY:vo}}),Ds=se(Ci),Fh=R({},Ci,{dataTransfer:0}),Ih=se(Fh),Ph=R({},mn,{relatedTarget:0}),So=se(Ph),tm=R({},Vl,{animationName:0,elapsedTime:0,pseudoElement:0}),em=se(tm),lm=R({},Vl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),am=se(lm),nm=R({},Vl,{data:0}),Rs=se(nm),im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=om[t])?!!e[t]:!1}function jo(){return cm}var um=R({},mn,{key:function(t){if(t.key){var e=im[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ei(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jo,charCode:function(t){return t.type==="keypress"?Ei(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ei(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sm=se(um),fm=R({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=se(fm),dm=R({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jo}),hm=se(dm),mm=R({},Vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=se(mm),pm=R({},Ci,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=se(pm),ym=R({},Vl,{newState:0,oldState:0}),xm=se(ym),vm=[9,13,27,32],zo=Ie&&"CompositionEvent"in window,pn=null;Ie&&"documentMode"in document&&(pn=document.documentMode);var Sm=Ie&&"TextEvent"in window&&!pn,Ns=Ie&&(!zo||pn&&8<pn&&11>=pn),Hs=" ",ks=!1;function Us(t,e){switch(t){case"keyup":return vm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var za=!1;function jm(t,e){switch(t){case"compositionend":return Gs(e);case"keypress":return e.which!==32?null:(ks=!0,Hs);case"textInput":return t=e.data,t===Hs&&ks?null:t;default:return null}}function zm(t,e){if(za)return t==="compositionend"||!zo&&Us(t,e)?(t=Os(),wi=yo=bl=null,za=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ns&&e.locale!=="ko"?null:e.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wm[t.type]:e==="textarea"}function qs(t,e,l,a){Sa?ja?ja.push(a):ja=[a]:Sa=a,e=br(e,"onChange"),0<e.length&&(l=new Ti("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var bn=null,yn=null;function Em(t){E0(t,0)}function Mi(t){var e=fn(t);if(zs(e))return t}function Ls(t,e){if(t==="change")return e}var Xs=!1;if(Ie){var wo;if(Ie){var Eo="oninput"in document;if(!Eo){var Qs=document.createElement("div");Qs.setAttribute("oninput","return;"),Eo=typeof Qs.oninput=="function"}wo=Eo}else wo=!1;Xs=wo&&(!document.documentMode||9<document.documentMode)}function Vs(){bn&&(bn.detachEvent("onpropertychange",Zs),yn=bn=null)}function Zs(t){if(t.propertyName==="value"&&Mi(yn)){var e=[];qs(e,yn,t,go(t)),$s(Em,e)}}function Am(t,e,l){t==="focusin"?(Vs(),bn=e,yn=l,bn.attachEvent("onpropertychange",Zs)):t==="focusout"&&Vs()}function Tm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mi(yn)}function Cm(t,e){if(t==="click")return Mi(e)}function Mm(t,e){if(t==="input"||t==="change")return Mi(e)}function $m(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:$m;function xn(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!eo.call(e,i)||!Se(t[i],e[i]))return!1}return!0}function Ks(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Js(t,e){var l=Ks(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Ks(l)}}function Ws(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ws(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ji(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=ji(t.document)}return e}function Ao(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Om=Ie&&"documentMode"in document&&11>=document.documentMode,wa=null,To=null,vn=null,Co=!1;function Is(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Co||wa==null||wa!==ji(a)||(a=wa,"selectionStart"in a&&Ao(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vn&&xn(vn,a)||(vn=a,a=br(To,"onSelect"),0<a.length&&(e=new Ti("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=wa)))}function Zl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ea={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionrun:Zl("Transition","TransitionRun"),transitionstart:Zl("Transition","TransitionStart"),transitioncancel:Zl("Transition","TransitionCancel"),transitionend:Zl("Transition","TransitionEnd")},Mo={},Ps={};Ie&&(Ps=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Kl(t){if(Mo[t])return Mo[t];if(!Ea[t])return t;var e=Ea[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Ps)return Mo[t]=e[l];return t}var tf=Kl("animationend"),ef=Kl("animationiteration"),lf=Kl("animationstart"),_m=Kl("transitionrun"),Dm=Kl("transitionstart"),Rm=Kl("transitioncancel"),af=Kl("transitionend"),nf=new Map,$o="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$o.push("scrollEnd");function Ge(t,e){nf.set(t,e),Ql(e,[t])}var $i=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$e=[],Aa=0,Oo=0;function Oi(){for(var t=Aa,e=Oo=Aa=0;e<t;){var l=$e[e];$e[e++]=null;var a=$e[e];$e[e++]=null;var i=$e[e];$e[e++]=null;var r=$e[e];if($e[e++]=null,a!==null&&i!==null){var c=a.pending;c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i}r!==0&&rf(l,i,r)}}function _i(t,e,l,a){$e[Aa++]=t,$e[Aa++]=e,$e[Aa++]=l,$e[Aa++]=a,Oo|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function _o(t,e,l,a){return _i(t,e,l,a),Di(t)}function Jl(t,e){return _i(t,null,null,e),Di(t)}function rf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,r=t.return;r!==null;)r.childLanes|=l,a=r.alternate,a!==null&&(a.childLanes|=l),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(i=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,i&&e!==null&&(i=31-ve(l),t=r.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),r):null}function Di(t){if(50<qn)throw qn=0,Yc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ta={};function Bm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,l,a){return new Bm(t,e,l,a)}function Do(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pe(t,e){var l=t.alternate;return l===null?(l=je(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function of(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ri(t,e,l,a,i,r){var c=0;if(a=t,typeof t=="function")Do(t)&&(c=1);else if(typeof t=="string")c=Gg(t,l,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Kt:return t=je(31,l,e,i),t.elementType=Kt,t.lanes=r,t;case J:return Wl(l.children,i,r,e);case pt:c=8,i|=24;break;case et:return t=je(12,l,e,i|2),t.elementType=et,t.lanes=r,t;case yt:return t=je(13,l,e,i),t.elementType=yt,t.lanes=r,t;case ht:return t=je(19,l,e,i),t.elementType=ht,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bt:c=10;break t;case X:c=9;break t;case Ot:c=11;break t;case U:c=14;break t;case W:c=16,a=null;break t}c=29,l=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=je(c,l,e,i),e.elementType=t,e.type=a,e.lanes=r,e}function Wl(t,e,l,a){return t=je(7,t,a,e),t.lanes=l,t}function Ro(t,e,l){return t=je(6,t,null,e),t.lanes=l,t}function cf(t){var e=je(18,null,null,0);return e.stateNode=t,e}function Bo(t,e,l){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var uf=new WeakMap;function Oe(t,e){if(typeof t=="object"&&t!==null){var l=uf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:os(e)},uf.set(t,e),e)}return{value:t,source:e,stack:os(e)}}var Ca=[],Ma=0,Bi=null,Sn=0,_e=[],De=0,yl=null,Qe=1,Ve="";function tl(t,e){Ca[Ma++]=Sn,Ca[Ma++]=Bi,Bi=t,Sn=e}function sf(t,e,l){_e[De++]=Qe,_e[De++]=Ve,_e[De++]=yl,yl=t;var a=Qe;t=Ve;var i=32-ve(a)-1;a&=~(1<<i),l+=1;var r=32-ve(e)+i;if(30<r){var c=i-i%5;r=(a&(1<<c)-1).toString(32),a>>=c,i-=c,Qe=1<<32-ve(e)+i|l<<i|a,Ve=r+t}else Qe=1<<r|l<<i|a,Ve=t}function No(t){t.return!==null&&(tl(t,1),sf(t,1,0))}function Ho(t){for(;t===Bi;)Bi=Ca[--Ma],Ca[Ma]=null,Sn=Ca[--Ma],Ca[Ma]=null;for(;t===yl;)yl=_e[--De],_e[De]=null,Ve=_e[--De],_e[De]=null,Qe=_e[--De],_e[De]=null}function ff(t,e){_e[De++]=Qe,_e[De++]=Ve,_e[De++]=yl,Qe=e.id,Ve=e.overflow,yl=t}var te=null,Ct=null,ft=!1,xl=null,Re=!1,ko=Error(s(519));function vl(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jn(Oe(e,t)),ko}function df(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Pt]=t,e[ue]=a,l){case"dialog":ct("cancel",e),ct("close",e);break;case"iframe":case"object":case"embed":ct("load",e);break;case"video":case"audio":for(l=0;l<Xn.length;l++)ct(Xn[l],e);break;case"source":ct("error",e);break;case"img":case"image":case"link":ct("error",e),ct("load",e);break;case"details":ct("toggle",e);break;case"input":ct("invalid",e),ws(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ct("invalid",e);break;case"textarea":ct("invalid",e),As(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||M0(e.textContent,l)?(a.popover!=null&&(ct("beforetoggle",e),ct("toggle",e)),a.onScroll!=null&&ct("scroll",e),a.onScrollEnd!=null&&ct("scrollend",e),a.onClick!=null&&(e.onclick=Fe),e=!0):e=!1,e||vl(t,!0)}function hf(t){for(te=t.return;te;)switch(te.tag){case 5:case 31:case 13:Re=!1;return;case 27:case 3:Re=!0;return;default:te=te.return}}function $a(t){if(t!==te)return!1;if(!ft)return hf(t),ft=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||lu(t.type,t.memoizedProps)),l=!l),l&&Ct&&vl(t),hf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ct=k0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ct=k0(t)}else e===27?(e=Ct,Rl(t.type)?(t=ou,ou=null,Ct=t):Ct=e):Ct=te?Ne(t.stateNode.nextSibling):null;return!0}function Fl(){Ct=te=null,ft=!1}function Uo(){var t=xl;return t!==null&&(me===null?me=t:me.push.apply(me,t),xl=null),t}function jn(t){xl===null?xl=[t]:xl.push(t)}var Go=b(null),Il=null,el=null;function Sl(t,e,l){B(Go,e._currentValue),e._currentValue=l}function ll(t){t._currentValue=Go.current,$(Go)}function Yo(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function qo(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var r=i.dependencies;if(r!==null){var c=i.child;r=r.firstContext;t:for(;r!==null;){var f=r;r=i;for(var m=0;m<e.length;m++)if(f.context===e[m]){r.lanes|=l,f=r.alternate,f!==null&&(f.lanes|=l),Yo(r.return,l,t),a||(c=null);break t}r=f.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(s(341));c.lanes|=l,r=c.alternate,r!==null&&(r.lanes|=l),Yo(c,l,t),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Oa(t,e,l,a){t=null;for(var i=e,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var f=i.type;Se(i.pendingProps.value,c.value)||(t!==null?t.push(f):t=[f])}}else if(i===it.current){if(c=i.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Jn):t=[Jn])}i=i.return}t!==null&&qo(e,t,l,a),e.flags|=262144}function Ni(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pl(t){Il=t,el=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ee(t){return mf(Il,t)}function Hi(t,e){return Il===null&&Pl(t),mf(t,e)}function mf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},el===null){if(t===null)throw Error(s(308));el=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else el=el.next=e;return l}var Nm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Hm=n.unstable_scheduleCallback,km=n.unstable_NormalPriority,Gt={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new Nm,data:new Map,refCount:0}}function zn(t){t.refCount--,t.refCount===0&&Hm(km,function(){t.controller.abort()})}var wn=null,Xo=0,_a=0,Da=null;function Um(t,e){if(wn===null){var l=wn=[];Xo=0,_a=Zc(),Da={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Xo++,e.then(gf,gf),e}function gf(){if(--Xo===0&&wn!==null){Da!==null&&(Da.status="fulfilled");var t=wn;wn=null,_a=0,Da=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var pf=C.S;C.S=function(t,e){Pd=ye(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Um(t,e),pf!==null&&pf(t,e)};var ta=b(null);function Qo(){var t=ta.current;return t!==null?t:At.pooledCache}function ki(t,e){e===null?B(ta,ta.current):B(ta,e.pool)}function bf(){var t=Qo();return t===null?null:{parent:Gt._currentValue,pool:t}}var Ra=Error(s(460)),Vo=Error(s(474)),Ui=Error(s(542)),Gi={then:function(){}};function yf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Fe,Fe),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sf(t),t;default:if(typeof e.status=="string")e.then(Fe,Fe);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sf(t),t}throw la=e,Ra}}function ea(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(la=l,Ra):l}}var la=null;function vf(){if(la===null)throw Error(s(459));var t=la;return la=null,t}function Sf(t){if(t===Ra||t===Ui)throw Error(s(483))}var Ba=null,En=0;function Yi(t){var e=En;return En+=1,Ba===null&&(Ba=[]),xf(Ba,t,e)}function An(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function qi(t,e){throw e.$$typeof===N?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function jf(t){function e(y,p){if(t){var j=y.deletions;j===null?(y.deletions=[p],y.flags|=16):j.push(p)}}function l(y,p){if(!t)return null;for(;p!==null;)e(y,p),p=p.sibling;return null}function a(y){for(var p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function i(y,p){return y=Pe(y,p),y.index=0,y.sibling=null,y}function r(y,p,j){return y.index=j,t?(j=y.alternate,j!==null?(j=j.index,j<p?(y.flags|=67108866,p):j):(y.flags|=67108866,p)):(y.flags|=1048576,p)}function c(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function f(y,p,j,O){return p===null||p.tag!==6?(p=Ro(j,y.mode,O),p.return=y,p):(p=i(p,j),p.return=y,p)}function m(y,p,j,O){var Q=j.type;return Q===J?M(y,p,j.props.children,O,j.key):p!==null&&(p.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===W&&ea(Q)===p.type)?(p=i(p,j.props),An(p,j),p.return=y,p):(p=Ri(j.type,j.key,j.props,null,y.mode,O),An(p,j),p.return=y,p)}function z(y,p,j,O){return p===null||p.tag!==4||p.stateNode.containerInfo!==j.containerInfo||p.stateNode.implementation!==j.implementation?(p=Bo(j,y.mode,O),p.return=y,p):(p=i(p,j.children||[]),p.return=y,p)}function M(y,p,j,O,Q){return p===null||p.tag!==7?(p=Wl(j,y.mode,O,Q),p.return=y,p):(p=i(p,j),p.return=y,p)}function D(y,p,j){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Ro(""+p,y.mode,j),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Z:return j=Ri(p.type,p.key,p.props,null,y.mode,j),An(j,p),j.return=y,j;case G:return p=Bo(p,y.mode,j),p.return=y,p;case W:return p=ea(p),D(y,p,j)}if(It(p)||Ut(p))return p=Wl(p,y.mode,j,null),p.return=y,p;if(typeof p.then=="function")return D(y,Yi(p),j);if(p.$$typeof===bt)return D(y,Hi(y,p),j);qi(y,p)}return null}function w(y,p,j,O){var Q=p!==null?p.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Q!==null?null:f(y,p,""+j,O);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return j.key===Q?m(y,p,j,O):null;case G:return j.key===Q?z(y,p,j,O):null;case W:return j=ea(j),w(y,p,j,O)}if(It(j)||Ut(j))return Q!==null?null:M(y,p,j,O,null);if(typeof j.then=="function")return w(y,p,Yi(j),O);if(j.$$typeof===bt)return w(y,p,Hi(y,j),O);qi(y,j)}return null}function A(y,p,j,O,Q){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return y=y.get(j)||null,f(p,y,""+O,Q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:return y=y.get(O.key===null?j:O.key)||null,m(p,y,O,Q);case G:return y=y.get(O.key===null?j:O.key)||null,z(p,y,O,Q);case W:return O=ea(O),A(y,p,j,O,Q)}if(It(O)||Ut(O))return y=y.get(j)||null,M(p,y,O,Q,null);if(typeof O.then=="function")return A(y,p,j,Yi(O),Q);if(O.$$typeof===bt)return A(y,p,j,Hi(p,O),Q);qi(p,O)}return null}function Y(y,p,j,O){for(var Q=null,mt=null,q=p,lt=p=0,st=null;q!==null&&lt<j.length;lt++){q.index>lt?(st=q,q=null):st=q.sibling;var gt=w(y,q,j[lt],O);if(gt===null){q===null&&(q=st);break}t&&q&&gt.alternate===null&&e(y,q),p=r(gt,p,lt),mt===null?Q=gt:mt.sibling=gt,mt=gt,q=st}if(lt===j.length)return l(y,q),ft&&tl(y,lt),Q;if(q===null){for(;lt<j.length;lt++)q=D(y,j[lt],O),q!==null&&(p=r(q,p,lt),mt===null?Q=q:mt.sibling=q,mt=q);return ft&&tl(y,lt),Q}for(q=a(q);lt<j.length;lt++)st=A(q,y,lt,j[lt],O),st!==null&&(t&&st.alternate!==null&&q.delete(st.key===null?lt:st.key),p=r(st,p,lt),mt===null?Q=st:mt.sibling=st,mt=st);return t&&q.forEach(function(Ul){return e(y,Ul)}),ft&&tl(y,lt),Q}function K(y,p,j,O){if(j==null)throw Error(s(151));for(var Q=null,mt=null,q=p,lt=p=0,st=null,gt=j.next();q!==null&&!gt.done;lt++,gt=j.next()){q.index>lt?(st=q,q=null):st=q.sibling;var Ul=w(y,q,gt.value,O);if(Ul===null){q===null&&(q=st);break}t&&q&&Ul.alternate===null&&e(y,q),p=r(Ul,p,lt),mt===null?Q=Ul:mt.sibling=Ul,mt=Ul,q=st}if(gt.done)return l(y,q),ft&&tl(y,lt),Q;if(q===null){for(;!gt.done;lt++,gt=j.next())gt=D(y,gt.value,O),gt!==null&&(p=r(gt,p,lt),mt===null?Q=gt:mt.sibling=gt,mt=gt);return ft&&tl(y,lt),Q}for(q=a(q);!gt.done;lt++,gt=j.next())gt=A(q,y,lt,gt.value,O),gt!==null&&(t&&gt.alternate!==null&&q.delete(gt.key===null?lt:gt.key),p=r(gt,p,lt),mt===null?Q=gt:mt.sibling=gt,mt=gt);return t&&q.forEach(function(Fg){return e(y,Fg)}),ft&&tl(y,lt),Q}function Et(y,p,j,O){if(typeof j=="object"&&j!==null&&j.type===J&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:t:{for(var Q=j.key;p!==null;){if(p.key===Q){if(Q=j.type,Q===J){if(p.tag===7){l(y,p.sibling),O=i(p,j.props.children),O.return=y,y=O;break t}}else if(p.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===W&&ea(Q)===p.type){l(y,p.sibling),O=i(p,j.props),An(O,j),O.return=y,y=O;break t}l(y,p);break}else e(y,p);p=p.sibling}j.type===J?(O=Wl(j.props.children,y.mode,O,j.key),O.return=y,y=O):(O=Ri(j.type,j.key,j.props,null,y.mode,O),An(O,j),O.return=y,y=O)}return c(y);case G:t:{for(Q=j.key;p!==null;){if(p.key===Q)if(p.tag===4&&p.stateNode.containerInfo===j.containerInfo&&p.stateNode.implementation===j.implementation){l(y,p.sibling),O=i(p,j.children||[]),O.return=y,y=O;break t}else{l(y,p);break}else e(y,p);p=p.sibling}O=Bo(j,y.mode,O),O.return=y,y=O}return c(y);case W:return j=ea(j),Et(y,p,j,O)}if(It(j))return Y(y,p,j,O);if(Ut(j)){if(Q=Ut(j),typeof Q!="function")throw Error(s(150));return j=Q.call(j),K(y,p,j,O)}if(typeof j.then=="function")return Et(y,p,Yi(j),O);if(j.$$typeof===bt)return Et(y,p,Hi(y,j),O);qi(y,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,p!==null&&p.tag===6?(l(y,p.sibling),O=i(p,j),O.return=y,y=O):(l(y,p),O=Ro(j,y.mode,O),O.return=y,y=O),c(y)):l(y,p)}return function(y,p,j,O){try{En=0;var Q=Et(y,p,j,O);return Ba=null,Q}catch(q){if(q===Ra||q===Ui)throw q;var mt=je(29,q,null,y.mode);return mt.lanes=O,mt.return=y,mt}finally{}}}var aa=jf(!0),zf=jf(!1),jl=!1;function Zo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(xt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Di(t),rf(t,null,l),e}return _i(t,a,e,l),Di(t)}function Tn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,hs(t,l)}}function Jo(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,r=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};r===null?i=r=c:r=r.next=c,l=l.next}while(l!==null);r===null?i=r=e:r=r.next=e}else i=r=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Wo=!1;function Cn(){if(Wo){var t=Da;if(t!==null)throw t}}function Mn(t,e,l,a){Wo=!1;var i=t.updateQueue;jl=!1;var r=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,z=m.next;m.next=null,c===null?r=z:c.next=z,c=m;var M=t.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==c&&(f===null?M.firstBaseUpdate=z:f.next=z,M.lastBaseUpdate=m))}if(r!==null){var D=i.baseState;c=0,M=z=m=null,f=r;do{var w=f.lane&-536870913,A=w!==f.lane;if(A?(ut&w)===w:(a&w)===w){w!==0&&w===_a&&(Wo=!0),M!==null&&(M=M.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var Y=t,K=f;w=e;var Et=l;switch(K.tag){case 1:if(Y=K.payload,typeof Y=="function"){D=Y.call(Et,D,w);break t}D=Y;break t;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=K.payload,w=typeof Y=="function"?Y.call(Et,D,w):Y,w==null)break t;D=R({},D,w);break t;case 2:jl=!0}}w=f.callback,w!==null&&(t.flags|=64,A&&(t.flags|=8192),A=i.callbacks,A===null?i.callbacks=[w]:A.push(w))}else A={lane:w,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(z=M=A,m=D):M=M.next=A,c|=w;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;A=f,f=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);M===null&&(m=D),i.baseState=m,i.firstBaseUpdate=z,i.lastBaseUpdate=M,r===null&&(i.shared.lanes=0),Ml|=c,t.lanes=c,t.memoizedState=D}}function wf(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Ef(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)wf(l[t],e)}var Na=b(null),Li=b(0);function Af(t,e){t=fl,B(Li,t),B(Na,e),fl=t|e.baseLanes}function Fo(){B(Li,fl),B(Na,Na.current)}function Io(){fl=Li.current,$(Na),$(Li)}var ze=b(null),Be=null;function El(t){var e=t.alternate;B(Ht,Ht.current&1),B(ze,t),Be===null&&(e===null||Na.current!==null||e.memoizedState!==null)&&(Be=t)}function Po(t){B(Ht,Ht.current),B(ze,t),Be===null&&(Be=t)}function Tf(t){t.tag===22?(B(Ht,Ht.current),B(ze,t),Be===null&&(Be=t)):Al()}function Al(){B(Ht,Ht.current),B(ze,ze.current)}function we(t){$(ze),Be===t&&(Be=null),$(Ht)}var Ht=b(0);function Xi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||iu(l)||ru(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var al=0,tt=null,zt=null,Yt=null,Qi=!1,Ha=!1,na=!1,Vi=0,$n=0,ka=null,Ym=0;function Bt(){throw Error(s(321))}function tc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Se(t[l],e[l]))return!1;return!0}function ec(t,e,l,a,i,r){return al=r,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?sd:pc,na=!1,r=l(a,i),na=!1,Ha&&(r=Mf(e,l,a,i)),Cf(t),r}function Cf(t){C.H=Dn;var e=zt!==null&&zt.next!==null;if(al=0,Yt=zt=tt=null,Qi=!1,$n=0,ka=null,e)throw Error(s(300));t===null||qt||(t=t.dependencies,t!==null&&Ni(t)&&(qt=!0))}function Mf(t,e,l,a){tt=t;var i=0;do{if(Ha&&(ka=null),$n=0,Ha=!1,25<=i)throw Error(s(301));if(i+=1,Yt=zt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=fd,r=e(l,a)}while(Ha);return r}function qm(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?On(e):e,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(tt.flags|=1024),e}function lc(){var t=Vi!==0;return Vi=0,t}function ac(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function nc(t){if(Qi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Qi=!1}al=0,Yt=zt=tt=null,Ha=!1,$n=Vi=0,ka=null}function ie(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?tt.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function kt(){if(zt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Yt===null?tt.memoizedState:Yt.next;if(e!==null)Yt=e,zt=t;else{if(t===null)throw tt.alternate===null?Error(s(467)):Error(s(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Yt===null?tt.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function Zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function On(t){var e=$n;return $n+=1,ka===null&&(ka=[]),t=xf(ka,t,e),e=tt,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?sd:pc),t}function Ki(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return On(t);if(t.$$typeof===bt)return ee(t)}throw Error(s(438,String(t)))}function ic(t){var e=null,l=tt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=tt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Zi(),tt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=be;return e.index++,l}function nl(t,e){return typeof e=="function"?e(t):e}function Ji(t){var e=kt();return rc(e,zt,t)}function rc(t,e,l){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var i=t.baseQueue,r=a.pending;if(r!==null){if(i!==null){var c=i.next;i.next=r.next,r.next=c}e.baseQueue=i=r,a.pending=null}if(r=t.baseState,i===null)t.memoizedState=r;else{e=i.next;var f=c=null,m=null,z=e,M=!1;do{var D=z.lane&-536870913;if(D!==z.lane?(ut&D)===D:(al&D)===D){var w=z.revertLane;if(w===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),D===_a&&(M=!0);else if((al&w)===w){z=z.next,w===_a&&(M=!0);continue}else D={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(f=m=D,c=r):m=m.next=D,tt.lanes|=w,Ml|=w;D=z.action,na&&l(r,D),r=z.hasEagerState?z.eagerState:l(r,D)}else w={lane:D,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(f=m=w,c=r):m=m.next=w,tt.lanes|=D,Ml|=D;z=z.next}while(z!==null&&z!==e);if(m===null?c=r:m.next=f,!Se(r,t.memoizedState)&&(qt=!0,M&&(l=Da,l!==null)))throw l;t.memoizedState=r,t.baseState=c,t.baseQueue=m,a.lastRenderedState=r}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function oc(t){var e=kt(),l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,r=e.memoizedState;if(i!==null){l.pending=null;var c=i=i.next;do r=t(r,c.action),c=c.next;while(c!==i);Se(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),l.lastRenderedState=r}return[r,a]}function $f(t,e,l){var a=tt,i=kt(),r=ft;if(r){if(l===void 0)throw Error(s(407));l=l()}else l=e();var c=!Se((zt||i).memoizedState,l);if(c&&(i.memoizedState=l,qt=!0),i=i.queue,sc(Df.bind(null,a,i,t),[t]),i.getSnapshot!==e||c||Yt!==null&&Yt.memoizedState.tag&1){if(a.flags|=2048,Ua(9,{destroy:void 0},_f.bind(null,a,i,l,e),null),At===null)throw Error(s(349));r||(al&127)!==0||Of(a,e,l)}return l}function Of(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=tt.updateQueue,e===null?(e=Zi(),tt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function _f(t,e,l,a){e.value=l,e.getSnapshot=a,Rf(e)&&Bf(t)}function Df(t,e,l){return l(function(){Rf(e)&&Bf(t)})}function Rf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Se(t,l)}catch{return!0}}function Bf(t){var e=Jl(t,2);e!==null&&ge(e,t,2)}function cc(t){var e=ie();if(typeof t=="function"){var l=t;if(t=l(),na){gl(!0);try{l()}finally{gl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e}function Nf(t,e,l,a){return t.baseState=l,rc(t,zt,typeof a=="function"?a:nl)}function Lm(t,e,l,a,i){if(Ii(t))throw Error(s(485));if(t=e.action,t!==null){var r={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};C.T!==null?l(!0):r.isTransition=!1,a(r),l=e.pending,l===null?(r.next=e.pending=r,Hf(e,r)):(r.next=l.next,e.pending=l.next=r)}}function Hf(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var r=C.T,c={};C.T=c;try{var f=l(i,a),m=C.S;m!==null&&m(c,f),kf(t,e,f)}catch(z){uc(t,e,z)}finally{r!==null&&c.types!==null&&(r.types=c.types),C.T=r}}else try{r=l(i,a),kf(t,e,r)}catch(z){uc(t,e,z)}}function kf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Uf(t,e,a)},function(a){return uc(t,e,a)}):Uf(t,e,l)}function Uf(t,e,l){e.status="fulfilled",e.value=l,Gf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Hf(t,l)))}function uc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Gf(e),e=e.next;while(e!==a)}t.action=null}function Gf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Yf(t,e){return e}function qf(t,e){if(ft){var l=At.formState;if(l!==null){t:{var a=tt;if(ft){if(Ct){e:{for(var i=Ct,r=Re;i.nodeType!==8;){if(!r){i=null;break e}if(i=Ne(i.nextSibling),i===null){i=null;break e}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ct=Ne(i.nextSibling),a=i.data==="F!";break t}}vl(a)}a=!1}a&&(e=l[0])}}return l=ie(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yf,lastRenderedState:e},l.queue=a,l=od.bind(null,tt,a),a.dispatch=l,a=cc(!1),r=gc.bind(null,tt,!1,a.queue),a=ie(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=Lm.bind(null,tt,i,r,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function Lf(t){var e=kt();return Xf(e,zt,t)}function Xf(t,e,l){if(e=rc(t,e,Yf)[0],t=Ji(nl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=On(e)}catch(c){throw c===Ra?Ui:c}else a=e;e=kt();var i=e.queue,r=i.dispatch;return l!==e.memoizedState&&(tt.flags|=2048,Ua(9,{destroy:void 0},Xm.bind(null,i,l),null)),[a,r,t]}function Xm(t,e){t.action=e}function Qf(t){var e=kt(),l=zt;if(l!==null)return Xf(e,l,t);kt(),e=e.memoizedState,l=kt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ua(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=tt.updateQueue,e===null&&(e=Zi(),tt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Vf(){return kt().memoizedState}function Wi(t,e,l,a){var i=ie();tt.flags|=t,i.memoizedState=Ua(1|e,{destroy:void 0},l,a===void 0?null:a)}function Fi(t,e,l,a){var i=kt();a=a===void 0?null:a;var r=i.memoizedState.inst;zt!==null&&a!==null&&tc(a,zt.memoizedState.deps)?i.memoizedState=Ua(e,r,l,a):(tt.flags|=t,i.memoizedState=Ua(1|e,r,l,a))}function Zf(t,e){Wi(8390656,8,t,e)}function sc(t,e){Fi(2048,8,t,e)}function Qm(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=Zi(),tt.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Kf(t){var e=kt().memoizedState;return Qm({ref:e,nextImpl:t}),function(){if((xt&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function Jf(t,e){return Fi(4,2,t,e)}function Wf(t,e){return Fi(4,4,t,e)}function Ff(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function If(t,e,l){l=l!=null?l.concat([t]):null,Fi(4,4,Ff.bind(null,e,t),l)}function fc(){}function Pf(t,e){var l=kt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&tc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function td(t,e){var l=kt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&tc(e,a[1]))return a[0];if(a=t(),na){gl(!0);try{t()}finally{gl(!1)}}return l.memoizedState=[a,e],a}function dc(t,e,l){return l===void 0||(al&1073741824)!==0&&(ut&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=e0(),tt.lanes|=t,Ml|=t,l)}function ed(t,e,l,a){return Se(l,e)?l:Na.current!==null?(t=dc(t,l,a),Se(t,e)||(qt=!0),t):(al&42)===0||(al&1073741824)!==0&&(ut&261930)===0?(qt=!0,t.memoizedState=l):(t=e0(),tt.lanes|=t,Ml|=t,e)}function ld(t,e,l,a,i){var r=H.p;H.p=r!==0&&8>r?r:8;var c=C.T,f={};C.T=f,gc(t,!1,e,l);try{var m=i(),z=C.S;if(z!==null&&z(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var M=Gm(m,a);_n(t,e,M,Te(t))}else _n(t,e,a,Te(t))}catch(D){_n(t,e,{then:function(){},status:"rejected",reason:D},Te())}finally{H.p=r,c!==null&&f.types!==null&&(c.types=f.types),C.T=c}}function Vm(){}function hc(t,e,l,a){if(t.tag!==5)throw Error(s(476));var i=ad(t).queue;ld(t,i,e,V,l===null?Vm:function(){return nd(t),l(a)})}function ad(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:V},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function nd(t){var e=ad(t);e.next===null&&(e=t.alternate.memoizedState),_n(t,e.next.queue,{},Te())}function mc(){return ee(Jn)}function id(){return kt().memoizedState}function rd(){return kt().memoizedState}function Zm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Te();t=zl(l);var a=wl(e,t,l);a!==null&&(ge(a,e,l),Tn(a,e,l)),e={cache:Lo()},t.payload=e;return}e=e.return}}function Km(t,e,l){var a=Te();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ii(t)?cd(e,l):(l=_o(t,e,l,a),l!==null&&(ge(l,t,a),ud(l,e,a)))}function od(t,e,l){var a=Te();_n(t,e,l,a)}function _n(t,e,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ii(t))cd(e,i);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var c=e.lastRenderedState,f=r(c,l);if(i.hasEagerState=!0,i.eagerState=f,Se(f,c))return _i(t,e,i,0),At===null&&Oi(),!1}catch{}finally{}if(l=_o(t,e,i,a),l!==null)return ge(l,t,a),ud(l,e,a),!0}return!1}function gc(t,e,l,a){if(a={lane:2,revertLane:Zc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ii(t)){if(e)throw Error(s(479))}else e=_o(t,l,a,2),e!==null&&ge(e,t,2)}function Ii(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function cd(t,e){Ha=Qi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function ud(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,hs(t,l)}}var Dn={readContext:ee,use:Ki,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt};Dn.useEffectEvent=Bt;var sd={readContext:ee,use:Ki,useCallback:function(t,e){return ie().memoizedState=[t,e===void 0?null:e],t},useContext:ee,useEffect:Zf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Wi(4194308,4,Ff.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Wi(4194308,4,t,e)},useInsertionEffect:function(t,e){Wi(4,2,t,e)},useMemo:function(t,e){var l=ie();e=e===void 0?null:e;var a=t();if(na){gl(!0);try{t()}finally{gl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=ie();if(l!==void 0){var i=l(e);if(na){gl(!0);try{l(e)}finally{gl(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Km.bind(null,tt,t),[a.memoizedState,t]},useRef:function(t){var e=ie();return t={current:t},e.memoizedState=t},useState:function(t){t=cc(t);var e=t.queue,l=od.bind(null,tt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:fc,useDeferredValue:function(t,e){var l=ie();return dc(l,t,e)},useTransition:function(){var t=cc(!1);return t=ld.bind(null,tt,t.queue,!0,!1),ie().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=tt,i=ie();if(ft){if(l===void 0)throw Error(s(407));l=l()}else{if(l=e(),At===null)throw Error(s(349));(ut&127)!==0||Of(a,e,l)}i.memoizedState=l;var r={value:l,getSnapshot:e};return i.queue=r,Zf(Df.bind(null,a,r,t),[t]),a.flags|=2048,Ua(9,{destroy:void 0},_f.bind(null,a,r,l,e),null),l},useId:function(){var t=ie(),e=At.identifierPrefix;if(ft){var l=Ve,a=Qe;l=(a&~(1<<32-ve(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=Vi++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Ym++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:mc,useFormState:qf,useActionState:qf,useOptimistic:function(t){var e=ie();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=gc.bind(null,tt,!0,l),l.dispatch=e,[t,e]},useMemoCache:ic,useCacheRefresh:function(){return ie().memoizedState=Zm.bind(null,tt)},useEffectEvent:function(t){var e=ie(),l={impl:t};return e.memoizedState=l,function(){if((xt&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}},pc={readContext:ee,use:Ki,useCallback:Pf,useContext:ee,useEffect:sc,useImperativeHandle:If,useInsertionEffect:Jf,useLayoutEffect:Wf,useMemo:td,useReducer:Ji,useRef:Vf,useState:function(){return Ji(nl)},useDebugValue:fc,useDeferredValue:function(t,e){var l=kt();return ed(l,zt.memoizedState,t,e)},useTransition:function(){var t=Ji(nl)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:On(t),e]},useSyncExternalStore:$f,useId:id,useHostTransitionStatus:mc,useFormState:Lf,useActionState:Lf,useOptimistic:function(t,e){var l=kt();return Nf(l,zt,t,e)},useMemoCache:ic,useCacheRefresh:rd};pc.useEffectEvent=Kf;var fd={readContext:ee,use:Ki,useCallback:Pf,useContext:ee,useEffect:sc,useImperativeHandle:If,useInsertionEffect:Jf,useLayoutEffect:Wf,useMemo:td,useReducer:oc,useRef:Vf,useState:function(){return oc(nl)},useDebugValue:fc,useDeferredValue:function(t,e){var l=kt();return zt===null?dc(l,t,e):ed(l,zt.memoizedState,t,e)},useTransition:function(){var t=oc(nl)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:On(t),e]},useSyncExternalStore:$f,useId:id,useHostTransitionStatus:mc,useFormState:Qf,useActionState:Qf,useOptimistic:function(t,e){var l=kt();return zt!==null?Nf(l,zt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:ic,useCacheRefresh:rd};fd.useEffectEvent=Kf;function bc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var yc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Te(),i=zl(a);i.payload=e,l!=null&&(i.callback=l),e=wl(t,i,a),e!==null&&(ge(e,t,a),Tn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Te(),i=zl(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=wl(t,i,a),e!==null&&(ge(e,t,a),Tn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Te(),a=zl(l);a.tag=2,e!=null&&(a.callback=e),e=wl(t,a,l),e!==null&&(ge(e,t,l),Tn(e,t,l))}};function dd(t,e,l,a,i,r,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,r,c):e.prototype&&e.prototype.isPureReactComponent?!xn(l,a)||!xn(i,r):!0}function hd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function ia(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}function md(t){$i(t)}function gd(t){console.error(t)}function pd(t){$i(t)}function Pi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function bd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function xc(t,e,l){return l=zl(l),l.tag=3,l.payload={element:null},l.callback=function(){Pi(t,e)},l}function yd(t){return t=zl(t),t.tag=3,t}function xd(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;t.payload=function(){return i(r)},t.callback=function(){bd(e,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){bd(e,l,a),typeof i!="function"&&($l===null?$l=new Set([this]):$l.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Jm(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Oa(e,l,i,!0),l=ze.current,l!==null){switch(l.tag){case 31:case 13:return Be===null?fr():l.alternate===null&&Nt===0&&(Nt=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Gi?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Xc(t,a,i)),!1;case 22:return l.flags|=65536,a===Gi?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Xc(t,a,i)),!1}throw Error(s(435,l.tag))}return Xc(t,a,i),fr(),!1}if(ft)return e=ze.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==ko&&(t=Error(s(422),{cause:a}),jn(Oe(t,l)))):(a!==ko&&(e=Error(s(423),{cause:a}),jn(Oe(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Oe(a,l),i=xc(t.stateNode,a,i),Jo(t,i),Nt!==4&&(Nt=2)),!1;var r=Error(s(520),{cause:a});if(r=Oe(r,l),Yn===null?Yn=[r]:Yn.push(r),Nt!==4&&(Nt=2),e===null)return!0;a=Oe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=xc(l.stateNode,a,t),Jo(l,t),!1;case 1:if(e=l.type,r=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&($l===null||!$l.has(r))))return l.flags|=65536,i&=-i,l.lanes|=i,i=yd(i),xd(i,t,l,a),Jo(l,i),!1}l=l.return}while(l!==null);return!1}var vc=Error(s(461)),qt=!1;function le(t,e,l,a){e.child=t===null?zf(e,null,l,a):aa(e,t.child,l,a)}function vd(t,e,l,a,i){l=l.render;var r=e.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return Pl(e),a=ec(t,e,l,c,r,i),f=lc(),t!==null&&!qt?(ac(t,e,i),il(t,e,i)):(ft&&f&&No(e),e.flags|=1,le(t,e,a,i),e.child)}function Sd(t,e,l,a,i){if(t===null){var r=l.type;return typeof r=="function"&&!Do(r)&&r.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=r,jd(t,e,r,a,i)):(t=Ri(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Cc(t,i)){var c=r.memoizedProps;if(l=l.compare,l=l!==null?l:xn,l(c,a)&&t.ref===e.ref)return il(t,e,i)}return e.flags|=1,t=Pe(r,a),t.ref=e.ref,t.return=e,e.child=t}function jd(t,e,l,a,i){if(t!==null){var r=t.memoizedProps;if(xn(r,a)&&t.ref===e.ref)if(qt=!1,e.pendingProps=a=r,Cc(t,i))(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,il(t,e,i)}return Sc(t,e,l,a,i)}function zd(t,e,l,a){var i=a.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|l:l,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~r}else a=0,e.child=null;return wd(t,e,r,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ki(e,r!==null?r.cachePool:null),r!==null?Af(e,r):Fo(),Tf(e);else return a=e.lanes=536870912,wd(t,e,r!==null?r.baseLanes|l:l,l,a)}else r!==null?(ki(e,r.cachePool),Af(e,r),Al(),e.memoizedState=null):(t!==null&&ki(e,null),Fo(),Al());return le(t,e,i,l),e.child}function Rn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function wd(t,e,l,a,i){var r=Qo();return r=r===null?null:{parent:Gt._currentValue,pool:r},e.memoizedState={baseLanes:l,cachePool:r},t!==null&&ki(e,null),Fo(),Tf(e),t!==null&&Oa(t,e,a,!0),e.childLanes=i,null}function tr(t,e){return e=lr({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ed(t,e,l){return aa(e,t.child,null,l),t=tr(e,e.pendingProps),t.flags|=2,we(e),e.memoizedState=null,t}function Wm(t,e,l){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ft){if(a.mode==="hidden")return t=tr(e,a),e.lanes=536870912,Rn(null,t);if(Po(e),(t=Ct)?(t=H0(t,Re),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:yl!==null?{id:Qe,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},l=cf(t),l.return=e,e.child=l,te=e,Ct=null)):t=null,t===null)throw vl(e);return e.lanes=536870912,null}return tr(e,a)}var r=t.memoizedState;if(r!==null){var c=r.dehydrated;if(Po(e),i)if(e.flags&256)e.flags&=-257,e=Ed(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(qt||Oa(t,e,l,!1),i=(l&t.childLanes)!==0,qt||i){if(a=At,a!==null&&(c=ms(a,l),c!==0&&c!==r.retryLane))throw r.retryLane=c,Jl(t,c),ge(a,t,c),vc;fr(),e=Ed(t,e,l)}else t=r.treeContext,Ct=Ne(c.nextSibling),te=e,ft=!0,xl=null,Re=!1,t!==null&&ff(e,t),e=tr(e,a),e.flags|=4096;return e}return t=Pe(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function er(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Sc(t,e,l,a,i){return Pl(e),l=ec(t,e,l,a,void 0,i),a=lc(),t!==null&&!qt?(ac(t,e,i),il(t,e,i)):(ft&&a&&No(e),e.flags|=1,le(t,e,l,i),e.child)}function Ad(t,e,l,a,i,r){return Pl(e),e.updateQueue=null,l=Mf(e,a,l,i),Cf(t),a=lc(),t!==null&&!qt?(ac(t,e,r),il(t,e,r)):(ft&&a&&No(e),e.flags|=1,le(t,e,l,r),e.child)}function Td(t,e,l,a,i){if(Pl(e),e.stateNode===null){var r=Ta,c=l.contextType;typeof c=="object"&&c!==null&&(r=ee(c)),r=new l(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yc,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},Zo(e),c=l.contextType,r.context=typeof c=="object"&&c!==null?ee(c):Ta,r.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(bc(e,l,c,a),r.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&yc.enqueueReplaceState(r,r.state,null),Mn(e,a,r,i),Cn(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){r=e.stateNode;var f=e.memoizedProps,m=ia(l,f);r.props=m;var z=r.context,M=l.contextType;c=Ta,typeof M=="object"&&M!==null&&(c=ee(M));var D=l.getDerivedStateFromProps;M=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f||z!==c)&&hd(e,r,a,c),jl=!1;var w=e.memoizedState;r.state=w,Mn(e,a,r,i),Cn(),z=e.memoizedState,f||w!==z||jl?(typeof D=="function"&&(bc(e,l,D,a),z=e.memoizedState),(m=jl||dd(e,l,m,a,w,z,c))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=z),r.props=a,r.state=z,r.context=c,a=m):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,Ko(t,e),c=e.memoizedProps,M=ia(l,c),r.props=M,D=e.pendingProps,w=r.context,z=l.contextType,m=Ta,typeof z=="object"&&z!==null&&(m=ee(z)),f=l.getDerivedStateFromProps,(z=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==D||w!==m)&&hd(e,r,a,m),jl=!1,w=e.memoizedState,r.state=w,Mn(e,a,r,i),Cn();var A=e.memoizedState;c!==D||w!==A||jl||t!==null&&t.dependencies!==null&&Ni(t.dependencies)?(typeof f=="function"&&(bc(e,l,f,a),A=e.memoizedState),(M=jl||dd(e,l,M,a,w,A,m)||t!==null&&t.dependencies!==null&&Ni(t.dependencies))?(z||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,m),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,m)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=A),r.props=a,r.state=A,r.context=m,a=M):(typeof r.componentDidUpdate!="function"||c===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),a=!1)}return r=a,er(t,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&a?(e.child=aa(e,t.child,null,i),e.child=aa(e,null,l,i)):le(t,e,l,i),e.memoizedState=r.state,t=e.child):t=il(t,e,i),t}function Cd(t,e,l,a){return Fl(),e.flags|=256,le(t,e,l,a),e.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zc(t){return{baseLanes:t,cachePool:bf()}}function wc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ae),t}function Md(t,e,l){var a=e.pendingProps,i=!1,r=(e.flags&128)!==0,c;if((c=r)||(c=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),c&&(i=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(i?El(e):Al(),(t=Ct)?(t=H0(t,Re),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:yl!==null?{id:Qe,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},l=cf(t),l.return=e,e.child=l,te=e,Ct=null)):t=null,t===null)throw vl(e);return ru(t)?e.lanes=32:e.lanes=536870912,null}var f=a.children;return a=a.fallback,i?(Al(),i=e.mode,f=lr({mode:"hidden",children:f},i),a=Wl(a,i,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,a=e.child,a.memoizedState=zc(l),a.childLanes=wc(t,c,l),e.memoizedState=jc,Rn(null,a)):(El(e),Ec(e,f))}var m=t.memoizedState;if(m!==null&&(f=m.dehydrated,f!==null)){if(r)e.flags&256?(El(e),e.flags&=-257,e=Ac(t,e,l)):e.memoizedState!==null?(Al(),e.child=t.child,e.flags|=128,e=null):(Al(),f=a.fallback,i=e.mode,a=lr({mode:"visible",children:a.children},i),f=Wl(f,i,l,null),f.flags|=2,a.return=e,f.return=e,a.sibling=f,e.child=a,aa(e,t.child,null,l),a=e.child,a.memoizedState=zc(l),a.childLanes=wc(t,c,l),e.memoizedState=jc,e=Rn(null,a));else if(El(e),ru(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var z=c.dgst;c=z,a=Error(s(419)),a.stack="",a.digest=c,jn({value:a,source:null,stack:null}),e=Ac(t,e,l)}else if(qt||Oa(t,e,l,!1),c=(l&t.childLanes)!==0,qt||c){if(c=At,c!==null&&(a=ms(c,l),a!==0&&a!==m.retryLane))throw m.retryLane=a,Jl(t,a),ge(c,t,a),vc;iu(f)||fr(),e=Ac(t,e,l)}else iu(f)?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Ct=Ne(f.nextSibling),te=e,ft=!0,xl=null,Re=!1,t!==null&&ff(e,t),e=Ec(e,a.children),e.flags|=4096);return e}return i?(Al(),f=a.fallback,i=e.mode,m=t.child,z=m.sibling,a=Pe(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,z!==null?f=Pe(z,f):(f=Wl(f,i,l,null),f.flags|=2),f.return=e,a.return=e,a.sibling=f,e.child=a,Rn(null,a),a=e.child,f=t.child.memoizedState,f===null?f=zc(l):(i=f.cachePool,i!==null?(m=Gt._currentValue,i=i.parent!==m?{parent:m,pool:m}:i):i=bf(),f={baseLanes:f.baseLanes|l,cachePool:i}),a.memoizedState=f,a.childLanes=wc(t,c,l),e.memoizedState=jc,Rn(t.child,a)):(El(e),l=t.child,t=l.sibling,l=Pe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function Ec(t,e){return e=lr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function lr(t,e){return t=je(22,t,null,e),t.lanes=0,t}function Ac(t,e,l){return aa(e,t.child,null,l),t=Ec(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $d(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Yo(t.return,e,l)}function Tc(t,e,l,a,i,r){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:r}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=i,c.treeForkCount=r)}function Od(t,e,l){var a=e.pendingProps,i=a.revealOrder,r=a.tail;a=a.children;var c=Ht.current,f=(c&2)!==0;if(f?(c=c&1|2,e.flags|=128):c&=1,B(Ht,c),le(t,e,a,l),a=ft?Sn:0,!f&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$d(t,l,e);else if(t.tag===19)$d(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&Xi(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Tc(e,!1,i,l,r,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xi(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Tc(e,!0,l,null,r,a);break;case"together":Tc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function il(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Ml|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Oa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,l=Pe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Pe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Cc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ni(t)))}function Fm(t,e,l){switch(e.tag){case 3:Qt(e,e.stateNode.containerInfo),Sl(e,Gt,t.memoizedState.cache),Fl();break;case 27:case 5:ce(e);break;case 4:Qt(e,e.stateNode.containerInfo);break;case 10:Sl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Po(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(El(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Md(t,e,l):(El(e),t=il(t,e,l),t!==null?t.sibling:null);El(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Oa(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return Od(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Ht,Ht.current),a)break;return null;case 22:return e.lanes=0,zd(t,e,l,e.pendingProps);case 24:Sl(e,Gt,t.memoizedState.cache)}return il(t,e,l)}function _d(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!Cc(t,l)&&(e.flags&128)===0)return qt=!1,Fm(t,e,l);qt=(t.flags&131072)!==0}else qt=!1,ft&&(e.flags&1048576)!==0&&sf(e,Sn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ea(e.elementType),e.type=t,typeof t=="function")Do(t)?(a=ia(t,a),e.tag=1,e=Td(null,e,t,a,l)):(e.tag=0,e=Sc(null,e,t,a,l));else{if(t!=null){var i=t.$$typeof;if(i===Ot){e.tag=11,e=vd(null,e,t,a,l);break t}else if(i===U){e.tag=14,e=Sd(null,e,t,a,l);break t}}throw e=Jt(t)||t,Error(s(306,e,""))}}return e;case 0:return Sc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=ia(a,e.pendingProps),Td(t,e,a,i,l);case 3:t:{if(Qt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var r=e.memoizedState;i=r.element,Ko(t,e),Mn(e,a,null,l);var c=e.memoizedState;if(a=c.cache,Sl(e,Gt,a),a!==r.cache&&qo(e,[Gt],l,!0),Cn(),a=c.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Cd(t,e,a,l);break t}else if(a!==i){i=Oe(Error(s(424)),e),jn(i),e=Cd(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ct=Ne(t.firstChild),te=e,ft=!0,xl=null,Re=!0,l=zf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Fl(),a===i){e=il(t,e,l);break t}le(t,e,a,l)}e=e.child}return e;case 26:return er(t,e),t===null?(l=L0(e.type,null,e.pendingProps,null))?e.memoizedState=l:ft||(l=e.type,t=e.pendingProps,a=yr(P.current).createElement(l),a[Pt]=e,a[ue]=t,ae(a,l,t),Wt(a),e.stateNode=a):e.memoizedState=L0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ce(e),t===null&&ft&&(a=e.stateNode=G0(e.type,e.pendingProps,P.current),te=e,Re=!0,i=Ct,Rl(e.type)?(ou=i,Ct=Ne(a.firstChild)):Ct=i),le(t,e,e.pendingProps.children,l),er(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((i=a=Ct)&&(a=Tg(a,e.type,e.pendingProps,Re),a!==null?(e.stateNode=a,te=e,Ct=Ne(a.firstChild),Re=!1,i=!0):i=!1),i||vl(e)),ce(e),i=e.type,r=e.pendingProps,c=t!==null?t.memoizedProps:null,a=r.children,lu(i,r)?a=null:c!==null&&lu(i,c)&&(e.flags|=32),e.memoizedState!==null&&(i=ec(t,e,qm,null,null,l),Jn._currentValue=i),er(t,e),le(t,e,a,l),e.child;case 6:return t===null&&ft&&((t=l=Ct)&&(l=Cg(l,e.pendingProps,Re),l!==null?(e.stateNode=l,te=e,Ct=null,t=!0):t=!1),t||vl(e)),null;case 13:return Md(t,e,l);case 4:return Qt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=aa(e,null,a,l):le(t,e,a,l),e.child;case 11:return vd(t,e,e.type,e.pendingProps,l);case 7:return le(t,e,e.pendingProps,l),e.child;case 8:return le(t,e,e.pendingProps.children,l),e.child;case 12:return le(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Sl(e,e.type,a.value),le(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,Pl(e),i=ee(i),a=a(i),e.flags|=1,le(t,e,a,l),e.child;case 14:return Sd(t,e,e.type,e.pendingProps,l);case 15:return jd(t,e,e.type,e.pendingProps,l);case 19:return Od(t,e,l);case 31:return Wm(t,e,l);case 22:return zd(t,e,l,e.pendingProps);case 24:return Pl(e),a=ee(Gt),t===null?(i=Qo(),i===null&&(i=At,r=Lo(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=l),i=r),e.memoizedState={parent:a,cache:i},Zo(e),Sl(e,Gt,i)):((t.lanes&l)!==0&&(Ko(t,e),Mn(e,null,null,l),Cn()),i=t.memoizedState,r=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Sl(e,Gt,a)):(a=r.cache,Sl(e,Gt,a),a!==i.cache&&qo(e,[Gt],l,!0))),le(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function rl(t){t.flags|=4}function Mc(t,e,l,a,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(i0())t.flags|=8192;else throw la=Gi,Vo}else t.flags&=-16777217}function Dd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(e))if(i0())t.flags|=8192;else throw la=Gi,Vo}function ar(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?fs():536870912,t.lanes|=e,La|=e)}function Bn(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Im(t,e,l){var a=e.pendingProps;switch(Ho(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Mt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ll(Gt),Tt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&($a(e)?rl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Uo())),Mt(e),null;case 26:var i=e.type,r=e.memoizedState;return t===null?(rl(e),r!==null?(Mt(e),Dd(e,r)):(Mt(e),Mc(e,i,null,a,l))):r?r!==t.memoizedState?(rl(e),Mt(e),Dd(e,r)):(Mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&rl(e),Mt(e),Mc(e,i,t,a,l)),null;case 27:if(mi(e),l=P.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&rl(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Mt(e),null}t=k.current,$a(e)?df(e):(t=G0(i,a,l),e.stateNode=t,rl(e))}return Mt(e),null;case 5:if(mi(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&rl(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Mt(e),null}if(r=k.current,$a(e))df(e);else{var c=yr(P.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?c.createElement(i,{is:a.is}):c.createElement(i)}}r[Pt]=e,r[ue]=a;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=r;t:switch(ae(r,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&rl(e)}}return Mt(e),Mc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&rl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=P.current,$a(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=te,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||M0(t.nodeValue,l)),t||vl(e,!0)}else t=yr(t).createTextNode(a),t[Pt]=e,e.stateNode=t}return Mt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=$a(e),l!==null){if(t===null){if(!a)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Pt]=e}else Fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),t=!1}else l=Uo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(we(e),e):(we(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=$a(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Pt]=e}else Fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),i=!1}else i=Uo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(we(e),e):(we(e),null)}return we(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),ar(e,e.updateQueue),Mt(e),null);case 4:return Tt(),t===null&&Fc(e.stateNode.containerInfo),Mt(e),null;case 10:return ll(e.type),Mt(e),null;case 19:if($(Ht),a=e.memoizedState,a===null)return Mt(e),null;if(i=(e.flags&128)!==0,r=a.rendering,r===null)if(i)Bn(a,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=Xi(t),r!==null){for(e.flags|=128,Bn(a,!1),t=r.updateQueue,e.updateQueue=t,ar(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)of(l,t),l=l.sibling;return B(Ht,Ht.current&1|2),ft&&tl(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ye()>cr&&(e.flags|=128,i=!0,Bn(a,!1),e.lanes=4194304)}else{if(!i)if(t=Xi(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,ar(e,t),Bn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ft)return Mt(e),null}else 2*ye()-a.renderingStartTime>cr&&l!==536870912&&(e.flags|=128,i=!0,Bn(a,!1),e.lanes=4194304);a.isBackwards?(r.sibling=e.child,e.child=r):(t=a.last,t!==null?t.sibling=r:e.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,l=Ht.current,B(Ht,i?l&1|2:l&1),ft&&tl(e,a.treeForkCount),t):(Mt(e),null);case 22:case 23:return we(e),Io(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),l=e.updateQueue,l!==null&&ar(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&$(ta),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ll(Gt),Mt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Pm(t,e){switch(Ho(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ll(Gt),Tt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mi(e),null;case 31:if(e.memoizedState!==null){if(we(e),e.alternate===null)throw Error(s(340));Fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(we(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $(Ht),null;case 4:return Tt(),null;case 10:return ll(e.type),null;case 22:case 23:return we(e),Io(),t!==null&&$(ta),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ll(Gt),null;case 25:return null;default:return null}}function Rd(t,e){switch(Ho(e),e.tag){case 3:ll(Gt),Tt();break;case 26:case 27:case 5:mi(e);break;case 4:Tt();break;case 31:e.memoizedState!==null&&we(e);break;case 13:we(e);break;case 19:$(Ht);break;case 10:ll(e.type);break;case 22:case 23:we(e),Io(),t!==null&&$(ta);break;case 24:ll(Gt)}}function Nn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var r=l.create,c=l.inst;a=r(),c.destroy=a}l=l.next}while(l!==i)}}catch(f){jt(e,e.return,f)}}function Tl(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&t)===t){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,i=e;var m=l,z=f;try{z()}catch(M){jt(i,m,M)}}}a=a.next}while(a!==r)}}catch(M){jt(e,e.return,M)}}function Bd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Ef(e,l)}catch(a){jt(t,t.return,a)}}}function Nd(t,e,l){l.props=ia(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){jt(t,e,a)}}function Hn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){jt(t,e,i)}}function Ze(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){jt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){jt(t,e,i)}else l.current=null}function Hd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){jt(t,t.return,i)}}function $c(t,e,l){try{var a=t.stateNode;Sg(a,t.type,l,e),a[ue]=e}catch(i){jt(t,t.return,i)}}function kd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Rl(t.type)||t.tag===4}function Oc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Rl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Fe));else if(a!==4&&(a===27&&Rl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(_c(t,e,l),t=t.sibling;t!==null;)_c(t,e,l),t=t.sibling}function nr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Rl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(nr(t,e,l),t=t.sibling;t!==null;)nr(t,e,l),t=t.sibling}function Ud(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ae(e,a,l),e[Pt]=t,e[ue]=l}catch(r){jt(t,t.return,r)}}var ol=!1,Lt=!1,Dc=!1,Gd=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function tg(t,e){if(t=t.containerInfo,tu=Er,t=Fs(t),Ao(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break t}var c=0,f=-1,m=-1,z=0,M=0,D=t,w=null;e:for(;;){for(var A;D!==l||i!==0&&D.nodeType!==3||(f=c+i),D!==r||a!==0&&D.nodeType!==3||(m=c+a),D.nodeType===3&&(c+=D.nodeValue.length),(A=D.firstChild)!==null;)w=D,D=A;for(;;){if(D===t)break e;if(w===l&&++z===i&&(f=c),w===r&&++M===a&&(m=c),(A=D.nextSibling)!==null)break;D=w,w=D.parentNode}D=A}l=f===-1||m===-1?null:{start:f,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(eu={focusedElem:t,selectionRange:l},Er=!1,Ft=e;Ft!==null;)if(e=Ft,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ft=t;else for(;Ft!==null;){switch(e=Ft,r=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)i=t[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,l=e,i=r.memoizedProps,r=r.memoizedState,a=l.stateNode;try{var Y=ia(l.type,i);t=a.getSnapshotBeforeUpdate(Y,r),a.__reactInternalSnapshotBeforeUpdate=t}catch(K){jt(l,l.return,K)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)nu(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Ft=t;break}Ft=e.return}}function Yd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ul(t,l),a&4&&Nn(5,l);break;case 1:if(ul(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){jt(l,l.return,c)}else{var i=ia(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){jt(l,l.return,c)}}a&64&&Bd(l),a&512&&Hn(l,l.return);break;case 3:if(ul(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Ef(t,e)}catch(c){jt(l,l.return,c)}}break;case 27:e===null&&a&4&&Ud(l);case 26:case 5:ul(t,l),e===null&&a&4&&Hd(l),a&512&&Hn(l,l.return);break;case 12:ul(t,l);break;case 31:ul(t,l),a&4&&Xd(t,l);break;case 13:ul(t,l),a&4&&Qd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=ug.bind(null,l),Mg(t,l))));break;case 22:if(a=l.memoizedState!==null||ol,!a){e=e!==null&&e.memoizedState!==null||Lt,i=ol;var r=Lt;ol=a,(Lt=e)&&!r?sl(t,l,(l.subtreeFlags&8772)!==0):ul(t,l),ol=i,Lt=r}break;case 30:break;default:ul(t,l)}}function qd(t){var e=t.alternate;e!==null&&(t.alternate=null,qd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&co(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,fe=!1;function cl(t,e,l){for(l=l.child;l!==null;)Ld(t,e,l),l=l.sibling}function Ld(t,e,l){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(on,l)}catch{}switch(l.tag){case 26:Lt||Ze(l,e),cl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Lt||Ze(l,e);var a=Dt,i=fe;Rl(l.type)&&(Dt=l.stateNode,fe=!1),cl(t,e,l),Vn(l.stateNode),Dt=a,fe=i;break;case 5:Lt||Ze(l,e);case 6:if(a=Dt,i=fe,Dt=null,cl(t,e,l),Dt=a,fe=i,Dt!==null)if(fe)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(l.stateNode)}catch(r){jt(l,e,r)}else try{Dt.removeChild(l.stateNode)}catch(r){jt(l,e,r)}break;case 18:Dt!==null&&(fe?(t=Dt,B0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Fa(t)):B0(Dt,l.stateNode));break;case 4:a=Dt,i=fe,Dt=l.stateNode.containerInfo,fe=!0,cl(t,e,l),Dt=a,fe=i;break;case 0:case 11:case 14:case 15:Tl(2,l,e),Lt||Tl(4,l,e),cl(t,e,l);break;case 1:Lt||(Ze(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Nd(l,e,a)),cl(t,e,l);break;case 21:cl(t,e,l);break;case 22:Lt=(a=Lt)||l.memoizedState!==null,cl(t,e,l),Lt=a;break;default:cl(t,e,l)}}function Xd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fa(t)}catch(l){jt(e,e.return,l)}}}function Qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fa(t)}catch(l){jt(e,e.return,l)}}function eg(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Gd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Gd),e;default:throw Error(s(435,t.tag))}}function ir(t,e){var l=eg(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var i=sg.bind(null,t,a);a.then(i,i)}})}function de(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],r=t,c=e,f=c;t:for(;f!==null;){switch(f.tag){case 27:if(Rl(f.type)){Dt=f.stateNode,fe=!1;break t}break;case 5:Dt=f.stateNode,fe=!1;break t;case 3:case 4:Dt=f.stateNode.containerInfo,fe=!0;break t}f=f.return}if(Dt===null)throw Error(s(160));Ld(r,c,i),Dt=null,fe=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Vd(e,t),e=e.sibling}var Ye=null;function Vd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:de(e,t),he(t),a&4&&(Tl(3,t,t.return),Nn(3,t),Tl(5,t,t.return));break;case 1:de(e,t),he(t),a&512&&(Lt||l===null||Ze(l,l.return)),a&64&&ol&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Ye;if(de(e,t),he(t),a&512&&(Lt||l===null||Ze(l,l.return)),a&4){var r=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[sn]||r[Pt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),ae(r,a,l),r[Pt]=t,Wt(r),a=r;break t;case"link":var c=V0("link","href",i).get(a+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(r=c[f],r.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&r.getAttribute("rel")===(l.rel==null?null:l.rel)&&r.getAttribute("title")===(l.title==null?null:l.title)&&r.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break e}}r=i.createElement(a),ae(r,a,l),i.head.appendChild(r);break;case"meta":if(c=V0("meta","content",i).get(a+(l.content||""))){for(f=0;f<c.length;f++)if(r=c[f],r.getAttribute("content")===(l.content==null?null:""+l.content)&&r.getAttribute("name")===(l.name==null?null:l.name)&&r.getAttribute("property")===(l.property==null?null:l.property)&&r.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&r.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break e}}r=i.createElement(a),ae(r,a,l),i.head.appendChild(r);break;default:throw Error(s(468,a))}r[Pt]=t,Wt(r),a=r}t.stateNode=a}else Z0(i,t.type,t.stateNode);else t.stateNode=Q0(i,a,t.memoizedProps);else r!==a?(r===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):r.count--,a===null?Z0(i,t.type,t.stateNode):Q0(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&$c(t,t.memoizedProps,l.memoizedProps)}break;case 27:de(e,t),he(t),a&512&&(Lt||l===null||Ze(l,l.return)),l!==null&&a&4&&$c(t,t.memoizedProps,l.memoizedProps);break;case 5:if(de(e,t),he(t),a&512&&(Lt||l===null||Ze(l,l.return)),t.flags&32){i=t.stateNode;try{va(i,"")}catch(Y){jt(t,t.return,Y)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,$c(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Dc=!0);break;case 6:if(de(e,t),he(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(Y){jt(t,t.return,Y)}}break;case 3:if(Sr=null,i=Ye,Ye=xr(e.containerInfo),de(e,t),Ye=i,he(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(Y){jt(t,t.return,Y)}Dc&&(Dc=!1,Zd(t));break;case 4:a=Ye,Ye=xr(t.stateNode.containerInfo),de(e,t),he(t),Ye=a;break;case 12:de(e,t),he(t);break;case 31:de(e,t),he(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ir(t,a)));break;case 13:de(e,t),he(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(or=ye()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ir(t,a)));break;case 22:i=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,z=ol,M=Lt;if(ol=z||i,Lt=M||m,de(e,t),Lt=M,ol=z,he(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||m||ol||Lt||ra(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(r=m.stateNode,i)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=m.stateNode;var D=m.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(Y){jt(m,m.return,Y)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(Y){jt(m,m.return,Y)}}}else if(e.tag===18){if(l===null){m=e;try{var A=m.stateNode;i?N0(A,!0):N0(m.stateNode,!1)}catch(Y){jt(m,m.return,Y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,ir(t,l))));break;case 19:de(e,t),he(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ir(t,a)));break;case 30:break;case 21:break;default:de(e,t),he(t)}}function he(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(kd(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var i=l.stateNode,r=Oc(t);nr(t,r,i);break;case 5:var c=l.stateNode;l.flags&32&&(va(c,""),l.flags&=-33);var f=Oc(t);nr(t,f,c);break;case 3:case 4:var m=l.stateNode.containerInfo,z=Oc(t);_c(t,z,m);break;default:throw Error(s(161))}}catch(M){jt(t,t.return,M)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Zd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ul(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Yd(t,e.alternate,e),e=e.sibling}function ra(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Tl(4,e,e.return),ra(e);break;case 1:Ze(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Nd(e,e.return,l),ra(e);break;case 27:Vn(e.stateNode);case 26:case 5:Ze(e,e.return),ra(e);break;case 22:e.memoizedState===null&&ra(e);break;case 30:ra(e);break;default:ra(e)}t=t.sibling}}function sl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,r=e,c=r.flags;switch(r.tag){case 0:case 11:case 15:sl(i,r,l),Nn(4,r);break;case 1:if(sl(i,r,l),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){jt(a,a.return,z)}if(a=r,i=a.updateQueue,i!==null){var f=a.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)wf(m[i],f)}catch(z){jt(a,a.return,z)}}l&&c&64&&Bd(r),Hn(r,r.return);break;case 27:Ud(r);case 26:case 5:sl(i,r,l),l&&a===null&&c&4&&Hd(r),Hn(r,r.return);break;case 12:sl(i,r,l);break;case 31:sl(i,r,l),l&&c&4&&Xd(i,r);break;case 13:sl(i,r,l),l&&c&4&&Qd(i,r);break;case 22:r.memoizedState===null&&sl(i,r,l),Hn(r,r.return);break;case 30:break;default:sl(i,r,l)}e=e.sibling}}function Rc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&zn(l))}function Bc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&zn(t))}function qe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kd(t,e,l,a),e=e.sibling}function Kd(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:qe(t,e,l,a),i&2048&&Nn(9,e);break;case 1:qe(t,e,l,a);break;case 3:qe(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&zn(t)));break;case 12:if(i&2048){qe(t,e,l,a),t=e.stateNode;try{var r=e.memoizedProps,c=r.id,f=r.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){jt(e,e.return,m)}}else qe(t,e,l,a);break;case 31:qe(t,e,l,a);break;case 13:qe(t,e,l,a);break;case 23:break;case 22:r=e.stateNode,c=e.alternate,e.memoizedState!==null?r._visibility&2?qe(t,e,l,a):kn(t,e):r._visibility&2?qe(t,e,l,a):(r._visibility|=2,Ga(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Rc(c,e);break;case 24:qe(t,e,l,a),i&2048&&Bc(e.alternate,e);break;default:qe(t,e,l,a)}}function Ga(t,e,l,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,c=e,f=l,m=a,z=c.flags;switch(c.tag){case 0:case 11:case 15:Ga(r,c,f,m,i),Nn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?Ga(r,c,f,m,i):kn(r,c):(M._visibility|=2,Ga(r,c,f,m,i)),i&&z&2048&&Rc(c.alternate,c);break;case 24:Ga(r,c,f,m,i),i&&z&2048&&Bc(c.alternate,c);break;default:Ga(r,c,f,m,i)}e=e.sibling}}function kn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:kn(l,a),i&2048&&Rc(a.alternate,a);break;case 24:kn(l,a),i&2048&&Bc(a.alternate,a);break;default:kn(l,a)}e=e.sibling}}var Un=8192;function Ya(t,e,l){if(t.subtreeFlags&Un)for(t=t.child;t!==null;)Jd(t,e,l),t=t.sibling}function Jd(t,e,l){switch(t.tag){case 26:Ya(t,e,l),t.flags&Un&&t.memoizedState!==null&&Yg(l,Ye,t.memoizedState,t.memoizedProps);break;case 5:Ya(t,e,l);break;case 3:case 4:var a=Ye;Ye=xr(t.stateNode.containerInfo),Ya(t,e,l),Ye=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Un,Un=16777216,Ya(t,e,l),Un=a):Ya(t,e,l));break;default:Ya(t,e,l)}}function Wd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Gn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ft=a,Id(a,t)}Wd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fd(t),t=t.sibling}function Fd(t){switch(t.tag){case 0:case 11:case 15:Gn(t),t.flags&2048&&Tl(9,t,t.return);break;case 3:Gn(t);break;case 12:Gn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,rr(t)):Gn(t);break;default:Gn(t)}}function rr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ft=a,Id(a,t)}Wd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Tl(8,e,e.return),rr(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,rr(e));break;default:rr(e)}t=t.sibling}}function Id(t,e){for(;Ft!==null;){var l=Ft;switch(l.tag){case 0:case 11:case 15:Tl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:zn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ft=a;else t:for(l=t;Ft!==null;){a=Ft;var i=a.sibling,r=a.return;if(qd(a),a===l){Ft=null;break t}if(i!==null){i.return=r,Ft=i;break t}Ft=r}}}var lg={getCacheForType:function(t){var e=ee(Gt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return ee(Gt).controller.signal}},ag=typeof WeakMap=="function"?WeakMap:Map,xt=0,At=null,ot=null,ut=0,St=0,Ee=null,Cl=!1,qa=!1,Nc=!1,fl=0,Nt=0,Ml=0,oa=0,Hc=0,Ae=0,La=0,Yn=null,me=null,kc=!1,or=0,Pd=0,cr=1/0,ur=null,$l=null,Vt=0,Ol=null,Xa=null,dl=0,Uc=0,Gc=null,t0=null,qn=0,Yc=null;function Te(){return(xt&2)!==0&&ut!==0?ut&-ut:C.T!==null?Zc():gs()}function e0(){if(Ae===0)if((ut&536870912)===0||ft){var t=bi;bi<<=1,(bi&3932160)===0&&(bi=262144),Ae=t}else Ae=536870912;return t=ze.current,t!==null&&(t.flags|=32),Ae}function ge(t,e,l){(t===At&&(St===2||St===9)||t.cancelPendingCommit!==null)&&(Qa(t,0),_l(t,ut,Ae,!1)),un(t,l),((xt&2)===0||t!==At)&&(t===At&&((xt&2)===0&&(oa|=l),Nt===4&&_l(t,ut,Ae,!1)),Ke(t))}function l0(t,e,l){if((xt&6)!==0)throw Error(s(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||cn(t,e),i=a?rg(t,e):Lc(t,e,!0),r=a;do{if(i===0){qa&&!a&&_l(t,e,0,!1);break}else{if(l=t.current.alternate,r&&!ng(l)){i=Lc(t,e,!1),r=!1;continue}if(i===2){if(r=e,t.errorRecoveryDisabledLanes&r)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var f=t;i=Yn;var m=f.current.memoizedState.isDehydrated;if(m&&(Qa(f,c).flags|=256),c=Lc(f,c,!1),c!==2){if(Nc&&!m){f.errorRecoveryDisabledLanes|=r,oa|=r,i=4;break t}r=me,me=i,r!==null&&(me===null?me=r:me.push.apply(me,r))}i=c}if(r=!1,i!==2)continue}}if(i===1){Qa(t,0),_l(t,e,0,!0);break}t:{switch(a=t,r=i,r){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:_l(a,e,Ae,!Cl);break t;case 2:me=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=or+300-ye(),10<i)){if(_l(a,e,Ae,!Cl),xi(a,0,!0)!==0)break t;dl=e,a.timeoutHandle=D0(a0.bind(null,a,l,me,ur,kc,e,Ae,oa,La,Cl,r,"Throttled",-0,0),i);break t}a0(a,l,me,ur,kc,e,Ae,oa,La,Cl,r,null,-0,0)}}break}while(!0);Ke(t)}function a0(t,e,l,a,i,r,c,f,m,z,M,D,w,A){if(t.timeoutHandle=-1,D=e.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fe},Jd(e,r,D);var Y=(r&62914560)===r?or-ye():(r&4194048)===r?Pd-ye():0;if(Y=qg(D,Y),Y!==null){dl=r,t.cancelPendingCommit=Y(f0.bind(null,t,e,r,l,a,i,c,f,m,M,D,null,w,A)),_l(t,r,c,!z);return}}f0(t,e,r,l,a,i,c,f,m)}function ng(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],r=i.getSnapshot;i=i.value;try{if(!Se(r(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _l(t,e,l,a){e&=~Hc,e&=~oa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var r=31-ve(i),c=1<<r;a[r]=-1,i&=~c}l!==0&&ds(t,l,e)}function sr(){return(xt&6)===0?(Ln(0),!1):!0}function qc(){if(ot!==null){if(St===0)var t=ot.return;else t=ot,el=Il=null,nc(t),Ba=null,En=0,t=ot;for(;t!==null;)Rd(t.alternate,t),t=t.return;ot=null}}function Qa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,wg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),dl=0,qc(),At=t,ot=l=Pe(t.current,null),ut=e,St=0,Ee=null,Cl=!1,qa=cn(t,e),Nc=!1,La=Ae=Hc=oa=Ml=Nt=0,me=Yn=null,kc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-ve(a),r=1<<i;e|=t[i],a&=~r}return fl=e,Oi(),l}function n0(t,e){tt=null,C.H=Dn,e===Ra||e===Ui?(e=vf(),St=3):e===Vo?(e=vf(),St=4):St=e===vc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,ot===null&&(Nt=1,Pi(t,Oe(e,t.current)))}function i0(){var t=ze.current;return t===null?!0:(ut&4194048)===ut?Be===null:(ut&62914560)===ut||(ut&536870912)!==0?t===Be:!1}function r0(){var t=C.H;return C.H=Dn,t===null?Dn:t}function o0(){var t=C.A;return C.A=lg,t}function fr(){Nt=4,Cl||(ut&4194048)!==ut&&ze.current!==null||(qa=!0),(Ml&134217727)===0&&(oa&134217727)===0||At===null||_l(At,ut,Ae,!1)}function Lc(t,e,l){var a=xt;xt|=2;var i=r0(),r=o0();(At!==t||ut!==e)&&(ur=null,Qa(t,e)),e=!1;var c=Nt;t:do try{if(St!==0&&ot!==null){var f=ot,m=Ee;switch(St){case 8:qc(),c=6;break t;case 3:case 2:case 9:case 6:ze.current===null&&(e=!0);var z=St;if(St=0,Ee=null,Va(t,f,m,z),l&&qa){c=0;break t}break;default:z=St,St=0,Ee=null,Va(t,f,m,z)}}ig(),c=Nt;break}catch(M){n0(t,M)}while(!0);return e&&t.shellSuspendCounter++,el=Il=null,xt=a,C.H=i,C.A=r,ot===null&&(At=null,ut=0,Oi()),c}function ig(){for(;ot!==null;)c0(ot)}function rg(t,e){var l=xt;xt|=2;var a=r0(),i=o0();At!==t||ut!==e?(ur=null,cr=ye()+500,Qa(t,e)):qa=cn(t,e);t:do try{if(St!==0&&ot!==null){e=ot;var r=Ee;e:switch(St){case 1:St=0,Ee=null,Va(t,e,r,1);break;case 2:case 9:if(yf(r)){St=0,Ee=null,u0(e);break}e=function(){St!==2&&St!==9||At!==t||(St=7),Ke(t)},r.then(e,e);break t;case 3:St=7;break t;case 4:St=5;break t;case 7:yf(r)?(St=0,Ee=null,u0(e)):(St=0,Ee=null,Va(t,e,r,7));break;case 5:var c=null;switch(ot.tag){case 26:c=ot.memoizedState;case 5:case 27:var f=ot;if(c?K0(c):f.stateNode.complete){St=0,Ee=null;var m=f.sibling;if(m!==null)ot=m;else{var z=f.return;z!==null?(ot=z,dr(z)):ot=null}break e}}St=0,Ee=null,Va(t,e,r,5);break;case 6:St=0,Ee=null,Va(t,e,r,6);break;case 8:qc(),Nt=6;break t;default:throw Error(s(462))}}og();break}catch(M){n0(t,M)}while(!0);return el=Il=null,C.H=a,C.A=i,xt=l,ot!==null?0:(At=null,ut=0,Oi(),Nt)}function og(){for(;ot!==null&&!$h();)c0(ot)}function c0(t){var e=_d(t.alternate,t,fl);t.memoizedProps=t.pendingProps,e===null?dr(t):ot=e}function u0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ad(l,e,e.pendingProps,e.type,void 0,ut);break;case 11:e=Ad(l,e,e.pendingProps,e.type.render,e.ref,ut);break;case 5:nc(e);default:Rd(l,e),e=ot=of(e,fl),e=_d(l,e,fl)}t.memoizedProps=t.pendingProps,e===null?dr(t):ot=e}function Va(t,e,l,a){el=Il=null,nc(e),Ba=null,En=0;var i=e.return;try{if(Jm(t,i,e,l,ut)){Nt=1,Pi(t,Oe(l,t.current)),ot=null;return}}catch(r){if(i!==null)throw ot=i,r;Nt=1,Pi(t,Oe(l,t.current)),ot=null;return}e.flags&32768?(ft||a===1?t=!0:qa||(ut&536870912)!==0?t=!1:(Cl=t=!0,(a===2||a===9||a===3||a===6)&&(a=ze.current,a!==null&&a.tag===13&&(a.flags|=16384))),s0(e,t)):dr(e)}function dr(t){var e=t;do{if((e.flags&32768)!==0){s0(e,Cl);return}t=e.return;var l=Im(e.alternate,e,fl);if(l!==null){ot=l;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);Nt===0&&(Nt=5)}function s0(t,e){do{var l=Pm(t.alternate,t);if(l!==null){l.flags&=32767,ot=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){ot=t;return}ot=t=l}while(t!==null);Nt=6,ot=null}function f0(t,e,l,a,i,r,c,f,m){t.cancelPendingCommit=null;do hr();while(Vt!==0);if((xt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(r=e.lanes|e.childLanes,r|=Oo,Gh(t,l,r,c,f,m),t===At&&(ot=At=null,ut=0),Xa=e,Ol=t,dl=l,Uc=r,Gc=i,t0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fg(gi,function(){return p0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,i=H.p,H.p=2,c=xt,xt|=4;try{tg(t,e,l)}finally{xt=c,H.p=i,C.T=a}}Vt=1,d0(),h0(),m0()}}function d0(){if(Vt===1){Vt=0;var t=Ol,e=Xa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var a=H.p;H.p=2;var i=xt;xt|=4;try{Vd(e,t);var r=eu,c=Fs(t.containerInfo),f=r.focusedElem,m=r.selectionRange;if(c!==f&&f&&f.ownerDocument&&Ws(f.ownerDocument.documentElement,f)){if(m!==null&&Ao(f)){var z=m.start,M=m.end;if(M===void 0&&(M=z),"selectionStart"in f)f.selectionStart=z,f.selectionEnd=Math.min(M,f.value.length);else{var D=f.ownerDocument||document,w=D&&D.defaultView||window;if(w.getSelection){var A=w.getSelection(),Y=f.textContent.length,K=Math.min(m.start,Y),Et=m.end===void 0?K:Math.min(m.end,Y);!A.extend&&K>Et&&(c=Et,Et=K,K=c);var y=Js(f,K),p=Js(f,Et);if(y&&p&&(A.rangeCount!==1||A.anchorNode!==y.node||A.anchorOffset!==y.offset||A.focusNode!==p.node||A.focusOffset!==p.offset)){var j=D.createRange();j.setStart(y.node,y.offset),A.removeAllRanges(),K>Et?(A.addRange(j),A.extend(p.node,p.offset)):(j.setEnd(p.node,p.offset),A.addRange(j))}}}}for(D=[],A=f;A=A.parentNode;)A.nodeType===1&&D.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var O=D[f];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Er=!!tu,eu=tu=null}finally{xt=i,H.p=a,C.T=l}}t.current=e,Vt=2}}function h0(){if(Vt===2){Vt=0;var t=Ol,e=Xa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var a=H.p;H.p=2;var i=xt;xt|=4;try{Yd(t,e.alternate,e)}finally{xt=i,H.p=a,C.T=l}}Vt=3}}function m0(){if(Vt===4||Vt===3){Vt=0,Oh();var t=Ol,e=Xa,l=dl,a=t0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Vt=5:(Vt=0,Xa=Ol=null,g0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&($l=null),ro(l),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(on,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=C.T,i=H.p,H.p=2,C.T=null;try{for(var r=t.onRecoverableError,c=0;c<a.length;c++){var f=a[c];r(f.value,{componentStack:f.stack})}}finally{C.T=e,H.p=i}}(dl&3)!==0&&hr(),Ke(t),i=t.pendingLanes,(l&261930)!==0&&(i&42)!==0?t===Yc?qn++:(qn=0,Yc=t):qn=0,Ln(0)}}function g0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,zn(e)))}function hr(){return d0(),h0(),m0(),p0()}function p0(){if(Vt!==5)return!1;var t=Ol,e=Uc;Uc=0;var l=ro(dl),a=C.T,i=H.p;try{H.p=32>l?32:l,C.T=null,l=Gc,Gc=null;var r=Ol,c=dl;if(Vt=0,Xa=Ol=null,dl=0,(xt&6)!==0)throw Error(s(331));var f=xt;if(xt|=4,Fd(r.current),Kd(r,r.current,c,l),xt=f,Ln(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(on,r)}catch{}return!0}finally{H.p=i,C.T=a,g0(t,e)}}function b0(t,e,l){e=Oe(l,e),e=xc(t.stateNode,e,2),t=wl(t,e,2),t!==null&&(un(t,2),Ke(t))}function jt(t,e,l){if(t.tag===3)b0(t,t,l);else for(;e!==null;){if(e.tag===3){b0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($l===null||!$l.has(a))){t=Oe(l,t),l=yd(2),a=wl(e,l,2),a!==null&&(xd(l,a,e,t),un(a,2),Ke(a));break}}e=e.return}}function Xc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new ag;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(Nc=!0,i.add(l),t=cg.bind(null,t,e,l),e.then(t,t))}function cg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,At===t&&(ut&l)===l&&(Nt===4||Nt===3&&(ut&62914560)===ut&&300>ye()-or?(xt&2)===0&&Qa(t,0):Hc|=l,La===ut&&(La=0)),Ke(t)}function y0(t,e){e===0&&(e=fs()),t=Jl(t,e),t!==null&&(un(t,e),Ke(t))}function ug(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),y0(t,l)}function sg(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),y0(t,l)}function fg(t,e){return lo(t,e)}var mr=null,Za=null,Qc=!1,gr=!1,Vc=!1,Dl=0;function Ke(t){t!==Za&&t.next===null&&(Za===null?mr=Za=t:Za=Za.next=t),gr=!0,Qc||(Qc=!0,hg())}function Ln(t,e){if(!Vc&&gr){Vc=!0;do for(var l=!1,a=mr;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var c=a.suspendedLanes,f=a.pingedLanes;r=(1<<31-ve(42|t)+1)-1,r&=i&~(c&~f),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(l=!0,j0(a,r))}else r=ut,r=xi(a,a===At?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||cn(a,r)||(l=!0,j0(a,r));a=a.next}while(l);Vc=!1}}function dg(){x0()}function x0(){gr=Qc=!1;var t=0;Dl!==0&&zg()&&(t=Dl);for(var e=ye(),l=null,a=mr;a!==null;){var i=a.next,r=v0(a,e);r===0?(a.next=null,l===null?mr=i:l.next=i,i===null&&(Za=l)):(l=a,(t!==0||(r&3)!==0)&&(gr=!0)),a=i}Vt!==0&&Vt!==5||Ln(t),Dl!==0&&(Dl=0)}function v0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var c=31-ve(r),f=1<<c,m=i[c];m===-1?((f&l)===0||(f&a)!==0)&&(i[c]=Uh(f,e)):m<=e&&(t.expiredLanes|=f),r&=~f}if(e=At,l=ut,l=xi(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(St===2||St===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ao(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||cn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ao(a),ro(l)){case 2:case 8:l=us;break;case 32:l=gi;break;case 268435456:l=ss;break;default:l=gi}return a=S0.bind(null,t),l=lo(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ao(a),t.callbackPriority=2,t.callbackNode=null,2}function S0(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(hr()&&t.callbackNode!==l)return null;var a=ut;return a=xi(t,t===At?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(l0(t,a,e),v0(t,ye()),t.callbackNode!=null&&t.callbackNode===l?S0.bind(null,t):null)}function j0(t,e){if(hr())return null;l0(t,e,!0)}function hg(){Eg(function(){(xt&6)!==0?lo(cs,dg):x0()})}function Zc(){if(Dl===0){var t=_a;t===0&&(t=pi,pi<<=1,(pi&261888)===0&&(pi=256)),Dl=t}return Dl}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zi(""+t)}function w0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function mg(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var r=z0((i[ue]||null).action),c=a.submitter;c&&(e=(e=c[ue]||null)?z0(e.formAction):c.getAttribute("formAction"),e!==null&&(r=e,c=null));var f=new Ti("action","action",null,a,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Dl!==0){var m=c?w0(i,c):new FormData(i);hc(l,{pending:!0,data:m,method:i.method,action:r},null,m)}}else typeof r=="function"&&(f.preventDefault(),m=c?w0(i,c):new FormData(i),hc(l,{pending:!0,data:m,method:i.method,action:r},r,m))},currentTarget:i}]})}}for(var Kc=0;Kc<$o.length;Kc++){var Jc=$o[Kc],gg=Jc.toLowerCase(),pg=Jc[0].toUpperCase()+Jc.slice(1);Ge(gg,"on"+pg)}Ge(tf,"onAnimationEnd"),Ge(ef,"onAnimationIteration"),Ge(lf,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(_m,"onTransitionRun"),Ge(Dm,"onTransitionStart"),Ge(Rm,"onTransitionCancel"),Ge(af,"onTransitionEnd"),ya("onMouseEnter",["mouseout","mouseover"]),ya("onMouseLeave",["mouseout","mouseover"]),ya("onPointerEnter",["pointerout","pointerover"]),ya("onPointerLeave",["pointerout","pointerover"]),Ql("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ql("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ql("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ql("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xn));function E0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var r=void 0;if(e)for(var c=a.length-1;0<=c;c--){var f=a[c],m=f.instance,z=f.currentTarget;if(f=f.listener,m!==r&&i.isPropagationStopped())break t;r=f,i.currentTarget=z;try{r(i)}catch(M){$i(M)}i.currentTarget=null,r=m}else for(c=0;c<a.length;c++){if(f=a[c],m=f.instance,z=f.currentTarget,f=f.listener,m!==r&&i.isPropagationStopped())break t;r=f,i.currentTarget=z;try{r(i)}catch(M){$i(M)}i.currentTarget=null,r=m}}}}function ct(t,e){var l=e[oo];l===void 0&&(l=e[oo]=new Set);var a=t+"__bubble";l.has(a)||(A0(e,t,2,!1),l.add(a))}function Wc(t,e,l){var a=0;e&&(a|=4),A0(l,t,a,e)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Fc(t){if(!t[pr]){t[pr]=!0,ys.forEach(function(l){l!=="selectionchange"&&(bg.has(l)||Wc(l,!1,t),Wc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pr]||(e[pr]=!0,Wc("selectionchange",!1,e))}}function A0(t,e,l,a){switch(e1(e)){case 2:var i=Qg;break;case 8:i=Vg;break;default:i=du}l=i.bind(null,e,l,t),i=void 0,!bo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function Ic(t,e,l,a,i){var r=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===i)break;if(c===4)for(c=a.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;f!==null;){if(c=ga(f),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){a=r=c;continue t}f=f.parentNode}}a=a.return}$s(function(){var z=r,M=go(l),D=[];t:{var w=nf.get(t);if(w!==void 0){var A=Ti,Y=t;switch(t){case"keypress":if(Ei(l)===0)break t;case"keydown":case"keyup":A=sm;break;case"focusin":Y="focus",A=So;break;case"focusout":Y="blur",A=So;break;case"beforeblur":case"afterblur":A=So;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=hm;break;case tf:case ef:case lf:A=em;break;case af:A=gm;break;case"scroll":case"scrollend":A=Wh;break;case"wheel":A=bm;break;case"copy":case"cut":case"paste":A=am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Bs;break;case"toggle":case"beforetoggle":A=xm}var K=(e&4)!==0,Et=!K&&(t==="scroll"||t==="scrollend"),y=K?w!==null?w+"Capture":null:w;K=[];for(var p=z,j;p!==null;){var O=p;if(j=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||j===null||y===null||(O=dn(p,y),O!=null&&K.push(Qn(p,O,j))),Et)break;p=p.return}0<K.length&&(w=new A(w,Y,null,l,M),D.push({event:w,listeners:K}))}}if((e&7)===0){t:{if(w=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",w&&l!==mo&&(Y=l.relatedTarget||l.fromElement)&&(ga(Y)||Y[ma]))break t;if((A||w)&&(w=M.window===M?M:(w=M.ownerDocument)?w.defaultView||w.parentWindow:window,A?(Y=l.relatedTarget||l.toElement,A=z,Y=Y?ga(Y):null,Y!==null&&(Et=x(Y),K=Y.tag,Y!==Et||K!==5&&K!==27&&K!==6)&&(Y=null)):(A=null,Y=z),A!==Y)){if(K=Ds,O="onMouseLeave",y="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(K=Bs,O="onPointerLeave",y="onPointerEnter",p="pointer"),Et=A==null?w:fn(A),j=Y==null?w:fn(Y),w=new K(O,p+"leave",A,l,M),w.target=Et,w.relatedTarget=j,O=null,ga(M)===z&&(K=new K(y,p+"enter",Y,l,M),K.target=j,K.relatedTarget=Et,O=K),Et=O,A&&Y)e:{for(K=yg,y=A,p=Y,j=0,O=y;O;O=K(O))j++;O=0;for(var Q=p;Q;Q=K(Q))O++;for(;0<j-O;)y=K(y),j--;for(;0<O-j;)p=K(p),O--;for(;j--;){if(y===p||p!==null&&y===p.alternate){K=y;break e}y=K(y),p=K(p)}K=null}else K=null;A!==null&&T0(D,w,A,K,!1),Y!==null&&Et!==null&&T0(D,Et,Y,K,!0)}}t:{if(w=z?fn(z):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var mt=Ls;else if(Ys(w))if(Xs)mt=Mm;else{mt=Tm;var q=Am}else A=w.nodeName,!A||A.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?z&&ho(z.elementType)&&(mt=Ls):mt=Cm;if(mt&&(mt=mt(t,z))){qs(D,mt,l,M);break t}q&&q(t,w,z),t==="focusout"&&z&&w.type==="number"&&z.memoizedProps.value!=null&&fo(w,"number",w.value)}switch(q=z?fn(z):window,t){case"focusin":(Ys(q)||q.contentEditable==="true")&&(wa=q,To=z,vn=null);break;case"focusout":vn=To=wa=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,Is(D,l,M);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":Is(D,l,M)}var lt;if(zo)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else za?Us(t,l)&&(st="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(Ns&&l.locale!=="ko"&&(za||st!=="onCompositionStart"?st==="onCompositionEnd"&&za&&(lt=Os()):(bl=M,yo="value"in bl?bl.value:bl.textContent,za=!0)),q=br(z,st),0<q.length&&(st=new Rs(st,t,null,l,M),D.push({event:st,listeners:q}),lt?st.data=lt:(lt=Gs(l),lt!==null&&(st.data=lt)))),(lt=Sm?jm(t,l):zm(t,l))&&(st=br(z,"onBeforeInput"),0<st.length&&(q=new Rs("onBeforeInput","beforeinput",null,l,M),D.push({event:q,listeners:st}),q.data=lt)),mg(D,t,z,l,M)}E0(D,e)})}function Qn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function br(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=dn(t,l),i!=null&&a.unshift(Qn(t,i,r)),i=dn(t,e),i!=null&&a.push(Qn(t,i,r))),t.tag===3)return a;t=t.return}return[]}function yg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T0(t,e,l,a,i){for(var r=e._reactName,c=[];l!==null&&l!==a;){var f=l,m=f.alternate,z=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||z===null||(m=z,i?(z=dn(l,r),z!=null&&c.unshift(Qn(l,z,m))):i||(z=dn(l,r),z!=null&&c.push(Qn(l,z,m)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var xg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function C0(t){return(typeof t=="string"?t:""+t).replace(xg,`
`).replace(vg,"")}function M0(t,e){return e=C0(e),C0(t)===e}function wt(t,e,l,a,i,r){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||va(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&va(t,""+a);break;case"className":Si(t,"class",a);break;case"tabIndex":Si(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(t,l,a);break;case"style":Cs(t,a,r);break;case"data":if(e!=="object"){Si(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=zi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(l==="formAction"?(e!=="input"&&wt(t,e,"name",i.name,i,null),wt(t,e,"formEncType",i.formEncType,i,null),wt(t,e,"formMethod",i.formMethod,i,null),wt(t,e,"formTarget",i.formTarget,i,null)):(wt(t,e,"encType",i.encType,i,null),wt(t,e,"method",i.method,i,null),wt(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=zi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Fe);break;case"onScroll":a!=null&&ct("scroll",t);break;case"onScrollEnd":a!=null&&ct("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=zi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":ct("beforetoggle",t),ct("toggle",t),vi(t,"popover",a);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":vi(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Kh.get(l)||l,vi(t,l,a))}}function Pc(t,e,l,a,i,r){switch(l){case"style":Cs(t,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"children":typeof a=="string"?va(t,a):(typeof a=="number"||typeof a=="bigint")&&va(t,""+a);break;case"onScroll":a!=null&&ct("scroll",t);break;case"onScrollEnd":a!=null&&ct("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Fe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),r=t[ue]||null,r=r!=null?r[l]:null,typeof r=="function"&&t.removeEventListener(e,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):vi(t,l,a)}}}function ae(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ct("error",t),ct("load",t);var a=!1,i=!1,r;for(r in l)if(l.hasOwnProperty(r)){var c=l[r];if(c!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:wt(t,e,r,c,l,null)}}i&&wt(t,e,"srcSet",l.srcSet,l,null),a&&wt(t,e,"src",l.src,l,null);return;case"input":ct("invalid",t);var f=r=c=i=null,m=null,z=null;for(a in l)if(l.hasOwnProperty(a)){var M=l[a];if(M!=null)switch(a){case"name":i=M;break;case"type":c=M;break;case"checked":m=M;break;case"defaultChecked":z=M;break;case"value":r=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,e));break;default:wt(t,e,a,M,l,null)}}ws(t,r,f,m,z,c,i,!1);return;case"select":ct("invalid",t),a=c=r=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":r=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:wt(t,e,i,f,l,null)}e=r,l=c,t.multiple=!!a,e!=null?xa(t,!!a,e,!1):l!=null&&xa(t,!!a,l,!0);return;case"textarea":ct("invalid",t),r=i=a=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":i=f;break;case"children":r=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:wt(t,e,c,f,l,null)}As(t,a,i,r);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:wt(t,e,m,a,l,null)}return;case"dialog":ct("beforetoggle",t),ct("toggle",t),ct("cancel",t),ct("close",t);break;case"iframe":case"object":ct("load",t);break;case"video":case"audio":for(a=0;a<Xn.length;a++)ct(Xn[a],t);break;case"image":ct("error",t),ct("load",t);break;case"details":ct("toggle",t);break;case"embed":case"source":case"link":ct("error",t),ct("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(a=l[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:wt(t,e,z,a,l,null)}return;default:if(ho(e)){for(M in l)l.hasOwnProperty(M)&&(a=l[M],a!==void 0&&Pc(t,e,M,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&wt(t,e,f,a,l,null))}function Sg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,c=null,f=null,m=null,z=null,M=null;for(A in l){var D=l[A];if(l.hasOwnProperty(A)&&D!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=D;default:a.hasOwnProperty(A)||wt(t,e,A,null,a,D)}}for(var w in a){var A=a[w];if(D=l[w],a.hasOwnProperty(w)&&(A!=null||D!=null))switch(w){case"type":r=A;break;case"name":i=A;break;case"checked":z=A;break;case"defaultChecked":M=A;break;case"value":c=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,e));break;default:A!==D&&wt(t,e,w,A,a,D)}}so(t,c,f,m,z,M,r,i);return;case"select":A=c=f=w=null;for(r in l)if(m=l[r],l.hasOwnProperty(r)&&m!=null)switch(r){case"value":break;case"multiple":A=m;default:a.hasOwnProperty(r)||wt(t,e,r,null,a,m)}for(i in a)if(r=a[i],m=l[i],a.hasOwnProperty(i)&&(r!=null||m!=null))switch(i){case"value":w=r;break;case"defaultValue":f=r;break;case"multiple":c=r;default:r!==m&&wt(t,e,i,r,a,m)}e=f,l=c,a=A,w!=null?xa(t,!!l,w,!1):!!a!=!!l&&(e!=null?xa(t,!!l,e,!0):xa(t,!!l,l?[]:"",!1));return;case"textarea":A=w=null;for(f in l)if(i=l[f],l.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:wt(t,e,f,null,a,i)}for(c in a)if(i=a[c],r=l[c],a.hasOwnProperty(c)&&(i!=null||r!=null))switch(c){case"value":w=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==r&&wt(t,e,c,i,a,r)}Es(t,w,A);return;case"option":for(var Y in l)if(w=l[Y],l.hasOwnProperty(Y)&&w!=null&&!a.hasOwnProperty(Y))switch(Y){case"selected":t.selected=!1;break;default:wt(t,e,Y,null,a,w)}for(m in a)if(w=a[m],A=l[m],a.hasOwnProperty(m)&&w!==A&&(w!=null||A!=null))switch(m){case"selected":t.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:wt(t,e,m,w,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in l)w=l[K],l.hasOwnProperty(K)&&w!=null&&!a.hasOwnProperty(K)&&wt(t,e,K,null,a,w);for(z in a)if(w=a[z],A=l[z],a.hasOwnProperty(z)&&w!==A&&(w!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,e));break;default:wt(t,e,z,w,a,A)}return;default:if(ho(e)){for(var Et in l)w=l[Et],l.hasOwnProperty(Et)&&w!==void 0&&!a.hasOwnProperty(Et)&&Pc(t,e,Et,void 0,a,w);for(M in a)w=a[M],A=l[M],!a.hasOwnProperty(M)||w===A||w===void 0&&A===void 0||Pc(t,e,M,w,a,A);return}}for(var y in l)w=l[y],l.hasOwnProperty(y)&&w!=null&&!a.hasOwnProperty(y)&&wt(t,e,y,null,a,w);for(D in a)w=a[D],A=l[D],!a.hasOwnProperty(D)||w===A||w==null&&A==null||wt(t,e,D,w,a,A)}function $0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],r=i.transferSize,c=i.initiatorType,f=i.duration;if(r&&f&&$0(c)){for(c=0,f=i.responseEnd,a+=1;a<l.length;a++){var m=l[a],z=m.startTime;if(z>f)break;var M=m.transferSize,D=m.initiatorType;M&&$0(D)&&(m=m.responseEnd,c+=M*(m<f?1:(f-z)/(m-z)))}if(--a,e+=8*(r+c)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var tu=null,eu=null;function yr(t){return t.nodeType===9?t:t.ownerDocument}function O0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var au=null;function zg(){var t=window.event;return t&&t.type==="popstate"?t===au?!1:(au=t,!0):(au=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(Ag)}:D0;function Ag(t){setTimeout(function(){throw t})}function Rl(t){return t==="head"}function B0(t,e){var l=e,a=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(i),Fa(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Vn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Vn(l);for(var r=l.firstChild;r;){var c=r.nextSibling,f=r.nodeName;r[sn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&r.rel.toLowerCase()==="stylesheet"||l.removeChild(r),r=c}}else l==="body"&&Vn(t.ownerDocument.body);l=i}while(l);Fa(e)}function N0(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function nu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":nu(l),co(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Tg(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[sn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Ne(t.nextSibling),t===null)break}return null}function Cg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ne(t.nextSibling),t===null))return null;return t}function H0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ne(t.nextSibling),t===null))return null;return t}function iu(t){return t.data==="$?"||t.data==="$~"}function ru(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Mg(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ne(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ou=null;function k0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ne(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function G0(t,e,l){switch(e=yr(l),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);co(t)}var He=new Map,Y0=new Set;function xr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hl=H.d;H.d={f:$g,r:Og,D:_g,C:Dg,L:Rg,m:Bg,X:Hg,S:Ng,M:kg};function $g(){var t=hl.f(),e=sr();return t||e}function Og(t){var e=pa(t);e!==null&&e.tag===5&&e.type==="form"?nd(e):hl.r(t)}var Ka=typeof document>"u"?null:document;function q0(t,e,l){var a=Ka;if(a&&typeof e=="string"&&e){var i=Me(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Y0.has(i)||(Y0.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),ae(e,"link",t),Wt(e),a.head.appendChild(e)))}}function _g(t){hl.D(t),q0("dns-prefetch",t,null)}function Dg(t,e){hl.C(t,e),q0("preconnect",t,e)}function Rg(t,e,l){hl.L(t,e,l);var a=Ka;if(a&&t&&e){var i='link[rel="preload"][as="'+Me(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Me(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Me(l.imageSizes)+'"]')):i+='[href="'+Me(t)+'"]';var r=i;switch(e){case"style":r=Ja(t);break;case"script":r=Wa(t)}He.has(r)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),He.set(r,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Zn(r))||e==="script"&&a.querySelector(Kn(r))||(e=a.createElement("link"),ae(e,"link",t),Wt(e),a.head.appendChild(e)))}}function Bg(t,e){hl.m(t,e);var l=Ka;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Me(a)+'"][href="'+Me(t)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Wa(t)}if(!He.has(r)&&(t=R({rel:"modulepreload",href:t},e),He.set(r,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Kn(r)))return}a=l.createElement("link"),ae(a,"link",t),Wt(a),l.head.appendChild(a)}}}function Ng(t,e,l){hl.S(t,e,l);var a=Ka;if(a&&t){var i=ba(a).hoistableStyles,r=Ja(t);e=e||"default";var c=i.get(r);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(Zn(r)))f.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=He.get(r))&&cu(t,l);var m=c=a.createElement("link");Wt(m),ae(m,"link",t),m._p=new Promise(function(z,M){m.onload=z,m.onerror=M}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,vr(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:f},i.set(r,c)}}}function Hg(t,e){hl.X(t,e);var l=Ka;if(l&&t){var a=ba(l).hoistableScripts,i=Wa(t),r=a.get(i);r||(r=l.querySelector(Kn(i)),r||(t=R({src:t,async:!0},e),(e=He.get(i))&&uu(t,e),r=l.createElement("script"),Wt(r),ae(r,"link",t),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function kg(t,e){hl.M(t,e);var l=Ka;if(l&&t){var a=ba(l).hoistableScripts,i=Wa(t),r=a.get(i);r||(r=l.querySelector(Kn(i)),r||(t=R({src:t,async:!0,type:"module"},e),(e=He.get(i))&&uu(t,e),r=l.createElement("script"),Wt(r),ae(r,"link",t),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function L0(t,e,l,a){var i=(i=P.current)?xr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ja(l.href),l=ba(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ja(l.href);var r=ba(i).hoistableStyles,c=r.get(t);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,c),(r=i.querySelector(Zn(t)))&&!r._p&&(c.instance=r,c.state.loading=5),He.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},He.set(t,l),r||Ug(i,t,l,c.state))),e&&a===null)throw Error(s(528,""));return c}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Wa(l),l=ba(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ja(t){return'href="'+Me(t)+'"'}function Zn(t){return'link[rel="stylesheet"]['+t+"]"}function X0(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function Ug(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ae(e,"link",l),Wt(e),t.head.appendChild(e))}function Wa(t){return'[src="'+Me(t)+'"]'}function Kn(t){return"script[async]"+t}function Q0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Me(l.href)+'"]');if(a)return e.instance=a,Wt(a),a;var i=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Wt(a),ae(a,"style",i),vr(a,l.precedence,t),e.instance=a;case"stylesheet":i=Ja(l.href);var r=t.querySelector(Zn(i));if(r)return e.state.loading|=4,e.instance=r,Wt(r),r;a=X0(l),(i=He.get(i))&&cu(a,i),r=(t.ownerDocument||t).createElement("link"),Wt(r);var c=r;return c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),ae(r,"link",a),e.state.loading|=4,vr(r,l.precedence,t),e.instance=r;case"script":return r=Wa(l.src),(i=t.querySelector(Kn(r)))?(e.instance=i,Wt(i),i):(a=l,(i=He.get(r))&&(a=R({},l),uu(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),Wt(i),ae(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,vr(a,l.precedence,t));return e.instance}function vr(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===e)r=f;else if(r!==i)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function cu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function uu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Sr=null;function V0(t,e,l){if(Sr===null){var a=new Map,i=Sr=new Map;i.set(l,a)}else i=Sr,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var r=l[i];if(!(r[sn]||r[Pt]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(e)||"";c=t+c;var f=a.get(c);f?f.push(r):a.set(c,[r])}}return a}function Z0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Gg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yg(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var i=Ja(a.href),r=e.querySelector(Zn(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=jr.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=r,Wt(r);return}r=e.ownerDocument||e,a=X0(a),(i=He.get(i))&&cu(a,i),r=r.createElement("link"),Wt(r);var c=r;c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),ae(r,"link",a),l.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=jr.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var su=0;function qg(t,e){return t.stylesheets&&t.count===0&&wr(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&wr(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&su===0&&(su=62500*jg());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&wr(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>su?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function jr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zr=null;function wr(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zr=new Map,e.forEach(Lg,t),zr=null,jr.call(t))}function Lg(t,e){if(!(e.state.loading&4)){var l=zr.get(t);if(l)var a=l.get(null);else{l=new Map,zr.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var c=i[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}i=e.instance,c=i.getAttribute("data-precedence"),r=l.get(c)||a,r===a&&l.set(null,i),l.set(c,i),this.count++,a=jr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Jn={$$typeof:bt,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Xg(t,e,l,a,i,r,c,f,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=no(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.hiddenUpdates=no(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function J0(t,e,l,a,i,r,c,f,m,z,M,D){return t=new Xg(t,e,l,c,m,z,M,D,f),e=1,r===!0&&(e|=24),r=je(3,null,null,e),t.current=r,r.stateNode=t,e=Lo(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:l,cache:e},Zo(r),t}function W0(t){return t?(t=Ta,t):Ta}function F0(t,e,l,a,i,r){i=W0(i),a.context===null?a.context=i:a.pendingContext=i,a=zl(e),a.payload={element:l},r=r===void 0?null:r,r!==null&&(a.callback=r),l=wl(t,a,e),l!==null&&(ge(l,t,e),Tn(l,t,e))}function I0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function fu(t,e){I0(t,e),(t=t.alternate)&&I0(t,e)}function P0(t){if(t.tag===13||t.tag===31){var e=Jl(t,67108864);e!==null&&ge(e,t,67108864),fu(t,67108864)}}function t1(t){if(t.tag===13||t.tag===31){var e=Te();e=io(e);var l=Jl(t,e);l!==null&&ge(l,t,e),fu(t,e)}}var Er=!0;function Qg(t,e,l,a){var i=C.T;C.T=null;var r=H.p;try{H.p=2,du(t,e,l,a)}finally{H.p=r,C.T=i}}function Vg(t,e,l,a){var i=C.T;C.T=null;var r=H.p;try{H.p=8,du(t,e,l,a)}finally{H.p=r,C.T=i}}function du(t,e,l,a){if(Er){var i=hu(a);if(i===null)Ic(t,e,a,Ar,l),l1(t,a);else if(Kg(i,t,e,l,a))a.stopPropagation();else if(l1(t,a),e&4&&-1<Zg.indexOf(t)){for(;i!==null;){var r=pa(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Xl(r.pendingLanes);if(c!==0){var f=r;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var m=1<<31-ve(c);f.entanglements[1]|=m,c&=~m}Ke(r),(xt&6)===0&&(cr=ye()+500,Ln(0))}}break;case 31:case 13:f=Jl(r,2),f!==null&&ge(f,r,2),sr(),fu(r,2)}if(r=hu(a),r===null&&Ic(t,e,a,Ar,l),r===i)break;i=r}i!==null&&a.stopPropagation()}else Ic(t,e,a,null,l)}}function hu(t){return t=go(t),mu(t)}var Ar=null;function mu(t){if(Ar=null,t=ga(t),t!==null){var e=x(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=E(e),t!==null)return t;t=null}else if(l===31){if(t=_(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ar=t,null}function e1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_h()){case cs:return 2;case us:return 8;case gi:case Dh:return 32;case ss:return 268435456;default:return 32}default:return 32}}var gu=!1,Bl=null,Nl=null,Hl=null,Wn=new Map,Fn=new Map,kl=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l1(t,e){switch(t){case"focusin":case"focusout":Bl=null;break;case"dragenter":case"dragleave":Nl=null;break;case"mouseover":case"mouseout":Hl=null;break;case"pointerover":case"pointerout":Wn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(e.pointerId)}}function In(t,e,l,a,i,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&P0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Kg(t,e,l,a,i){switch(e){case"focusin":return Bl=In(Bl,t,e,l,a,i),!0;case"dragenter":return Nl=In(Nl,t,e,l,a,i),!0;case"mouseover":return Hl=In(Hl,t,e,l,a,i),!0;case"pointerover":var r=i.pointerId;return Wn.set(r,In(Wn.get(r)||null,t,e,l,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Fn.set(r,In(Fn.get(r)||null,t,e,l,a,i)),!0}return!1}function a1(t){var e=ga(t.target);if(e!==null){var l=x(e);if(l!==null){if(e=l.tag,e===13){if(e=E(l),e!==null){t.blockedOn=e,ps(t.priority,function(){t1(l)});return}}else if(e===31){if(e=_(l),e!==null){t.blockedOn=e,ps(t.priority,function(){t1(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=hu(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);mo=a,l.target.dispatchEvent(a),mo=null}else return e=pa(l),e!==null&&P0(e),t.blockedOn=l,!1;e.shift()}return!0}function n1(t,e,l){Tr(t)&&l.delete(e)}function Jg(){gu=!1,Bl!==null&&Tr(Bl)&&(Bl=null),Nl!==null&&Tr(Nl)&&(Nl=null),Hl!==null&&Tr(Hl)&&(Hl=null),Wn.forEach(n1),Fn.forEach(n1)}function Cr(t,e){t.blockedOn===e&&(t.blockedOn=null,gu||(gu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Jg)))}var Mr=null;function i1(t){Mr!==t&&(Mr=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Mr===t&&(Mr=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(mu(a||l)===null)continue;break}var r=pa(l);r!==null&&(t.splice(e,3),e-=3,hc(r,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Fa(t){function e(m){return Cr(m,t)}Bl!==null&&Cr(Bl,t),Nl!==null&&Cr(Nl,t),Hl!==null&&Cr(Hl,t),Wn.forEach(e),Fn.forEach(e);for(var l=0;l<kl.length;l++){var a=kl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<kl.length&&(l=kl[0],l.blockedOn===null);)a1(l),l.blockedOn===null&&kl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],r=l[a+1],c=i[ue]||null;if(typeof r=="function")c||i1(l);else if(c){var f=null;if(r&&r.hasAttribute("formAction")){if(i=r,c=r[ue]||null)f=c.formAction;else if(mu(i)!==null)continue}else f=c.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),i1(l)}}}function r1(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function pu(t){this._internalRoot=t}$r.prototype.render=pu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var l=e.current,a=Te();F0(l,a,t,e,null,null)},$r.prototype.unmount=pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;F0(t.current,2,null,t,null,null),sr(),e[ma]=null}};function $r(t){this._internalRoot=t}$r.prototype.unstable_scheduleHydration=function(t){if(t){var e=gs();t={blockedOn:null,target:t,priority:e};for(var l=0;l<kl.length&&e!==0&&e<kl[l].priority;l++);kl.splice(l,0,t),l===0&&a1(t)}};var o1=u.version;if(o1!=="19.2.8")throw Error(s(527,o1,"19.2.8"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var Wg={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{on=Or.inject(Wg),xe=Or}catch{}}return ti.createRoot=function(t,e){if(!h(t))throw Error(s(299));var l=!1,a="",i=md,r=gd,c=pd;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=J0(t,1,!1,null,null,l,a,null,i,r,c,r1),t[ma]=e.current,Fc(t),new pu(e)},ti.hydrateRoot=function(t,e,l){if(!h(t))throw Error(s(299));var a=!1,i="",r=md,c=gd,f=pd,m=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(r=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(m=l.formState)),e=J0(t,1,!0,e,l??null,a,i,m,r,c,f,r1),e.context=W0(null),l=e.current,a=Te(),a=io(a),i=zl(a),i.callback=null,wl(l,i,a),l=a,e.current.lanes=l,un(e,l),Ke(e),t[ma]=e.current,Fc(t),new $r(e)},ti.version="19.2.8",ti}var b1;function o2(){if(b1)return xu.exports;b1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(u){console.error(u)}}return n(),xu.exports=r2(),xu.exports}var c2=o2(),$t="-ms-",ci="-moz-",vt="-webkit-",K1="comm",Xr="rule",Fu="decl",u2="@import",s2="@namespace",J1="@keyframes",f2="@layer",W1=Math.abs,Iu=String.fromCharCode,qu=Object.assign;function d2(n,u){return Zt(n,0)^45?(((u<<2^Zt(n,0))<<2^Zt(n,1))<<2^Zt(n,2))<<2^Zt(n,3):0}function F1(n){return n.trim()}function ml(n,u){return(n=u.exec(n))?n[0]:n}function at(n,u,d){return n.replace(u,d)}function Nr(n,u,d){return n.indexOf(u,d)}function Zt(n,u){return n.charCodeAt(u)|0}function sa(n,u,d){return n.slice(u,d)}function Le(n){return n.length}function I1(n){return n.length}function ii(n,u){return u.push(n),n}function h2(n,u){return n.map(u).join("")}function y1(n,u){return n.filter(function(d){return!ml(d,u)})}var Qr=1,tn=1,P1=0,ke=0,Xt=0,an="";function Vr(n,u,d,s,h,x,E,_){return{value:n,root:u,parent:d,type:s,props:h,children:x,line:Qr,column:tn,length:E,return:"",siblings:_}}function Gl(n,u){return qu(Vr("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},u)}function Ia(n){for(;n.root;)n=Gl(n.root,{children:[n]});ii(n,n.siblings)}function m2(){return Xt}function g2(){return Xt=ke>0?Zt(an,--ke):0,tn--,Xt===10&&(tn=1,Qr--),Xt}function Xe(){return Xt=ke<P1?Zt(an,ke++):0,tn++,Xt===10&&(tn=1,Qr++),Xt}function Yl(){return Zt(an,ke)}function Hr(){return ke}function Zr(n,u){return sa(an,n,u)}function si(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function p2(n){return Qr=tn=1,P1=Le(an=n),ke=0,[]}function b2(n){return an="",n}function zu(n){return F1(Zr(ke-1,Lu(n===91?n+2:n===40?n+1:n)))}function y2(n){for(;(Xt=Yl())&&Xt<33;)Xe();return si(n)>2||si(Xt)>3?"":" "}function x2(n,u){for(;--u&&Xe()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return Zr(n,Hr()+(u<6&&Yl()==32&&Xe()==32))}function Lu(n){for(;Xe();)switch(Xt){case n:return ke;case 34:case 39:n!==34&&n!==39&&Lu(Xt);break;case 40:n===41&&Lu(n);break;case 92:Xe();break}return ke}function v2(n,u){for(;Xe()&&n+Xt!==57;)if(n+Xt===84&&Yl()===47)break;return"/*"+Zr(u,ke-1)+"*"+Iu(n===47?n:Xe())}function S2(n){for(;!si(Yl());)Xe();return Zr(n,ke)}function j2(n){return b2(kr("",null,null,null,[""],n=p2(n),0,[0],n))}function kr(n,u,d,s,h,x,E,_,S){for(var v=0,T=0,R=E,N=0,Z=0,G=0,J=1,pt=1,et=1,X=0,bt="",Ot=h,yt=x,ht=s,U=bt;pt;)switch(G=X,X=Xe()){case 40:if(G!=108&&Zt(U,R-1)==58){Nr(U+=at(zu(X),"&","&\f"),"&\f",W1(v?_[v-1]:0))!=-1&&(et=-1);break}case 34:case 39:case 91:U+=zu(X);break;case 9:case 10:case 13:case 32:U+=y2(G);break;case 92:U+=x2(Hr()-1,7);continue;case 47:switch(Yl()){case 42:case 47:ii(z2(v2(Xe(),Hr()),u,d,S),S),(si(G||1)==5||si(Yl()||1)==5)&&Le(U)&&sa(U,-1,void 0)!==" "&&(U+=" ");break;default:U+="/"}break;case 123*J:_[v++]=Le(U)*et;case 125*J:case 59:case 0:switch(X){case 0:case 125:pt=0;case 59+T:et==-1&&(U=at(U,/\f/g,"")),Z>0&&(Le(U)-R||J===0&&G===47)&&ii(Z>32?v1(U+";",s,d,R-1,S):v1(at(U," ","")+";",s,d,R-2,S),S);break;case 59:U+=";";default:if(ii(ht=x1(U,u,d,v,T,h,_,bt,Ot=[],yt=[],R,x),x),X===123)if(T===0)kr(U,u,ht,ht,Ot,x,R,_,yt);else{switch(N){case 99:if(Zt(U,3)===110)break;case 108:if(Zt(U,2)===97)break;default:T=0;case 100:case 109:case 115:}T?kr(n,ht,ht,s&&ii(x1(n,ht,ht,0,0,h,_,bt,h,Ot=[],R,yt),yt),h,yt,R,_,s?Ot:yt):kr(U,ht,ht,ht,[""],yt,0,_,yt)}}v=T=Z=0,J=et=1,bt=U="",R=E;break;case 58:R=1+Le(U),Z=G;default:if(J<1){if(X==123)--J;else if(X==125&&J++==0&&g2()==125)continue}switch(U+=Iu(X),X*J){case 38:et=T>0?1:(U+="\f",-1);break;case 44:_[v++]=(Le(U)-1)*et,et=1;break;case 64:Yl()===45&&(U+=zu(Xe())),N=Yl(),T=R=Le(bt=U+=S2(Hr())),X++;break;case 45:G===45&&Le(U)==2&&(J=0)}}return x}function x1(n,u,d,s,h,x,E,_,S,v,T,R){for(var N=h-1,Z=h===0?x:[""],G=I1(Z),J=0,pt=0,et=0;J<s;++J)for(var X=0,bt=sa(n,N+1,N=W1(pt=E[J])),Ot=n;X<G;++X)(Ot=F1(pt>0?Z[X]+" "+bt:at(bt,/&\f/g,Z[X])))&&(S[et++]=Ot);return Vr(n,u,d,h===0?Xr:_,S,v,T,R)}function z2(n,u,d,s){return Vr(n,u,d,K1,Iu(m2()),sa(n,2,-2),0,s)}function v1(n,u,d,s,h){return Vr(n,u,d,Fu,sa(n,0,s),sa(n,s+1,-1),s,h)}function th(n,u,d){switch(d2(n,u)){case 5103:return vt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return vt+n+n;case 4855:return vt+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return ci+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return vt+n+ci+n+$t+n+n;case 5936:switch(Zt(n,u+11)){case 114:return vt+n+$t+at(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return vt+n+$t+at(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return vt+n+$t+at(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return vt+n+$t+n+n;case 6165:return vt+n+$t+"flex-"+n+n;case 5187:return vt+n+at(n,/(\w+).+(:[^]+)/,vt+"box-$1$2"+$t+"flex-$1$2")+n;case 5443:return vt+n+$t+"flex-item-"+at(n,/flex-|-self/g,"")+(ml(n,/flex-|baseline/)?"":$t+"grid-row-"+at(n,/flex-|-self/g,""))+n;case 4675:return vt+n+$t+"flex-line-pack"+at(n,/align-content|flex-|-self/g,"")+n;case 5548:return vt+n+$t+at(n,"shrink","negative")+n;case 5292:return vt+n+$t+at(n,"basis","preferred-size")+n;case 6060:return vt+"box-"+at(n,"-grow","")+vt+n+$t+at(n,"grow","positive")+n;case 4554:return vt+at(n,/([^-])(transform)/g,"$1"+vt+"$2")+n;case 6187:return at(at(at(n,/(zoom-|grab)/,vt+"$1"),/(image-set)/,vt+"$1"),n,"")+n;case 5495:case 3959:return at(n,/(image-set\([^]*)/,vt+"$1$`$1");case 4968:return at(at(n,/(.+:)(flex-)?(.*)/,vt+"box-pack:$3"+$t+"flex-pack:$3"),/space-between/,"justify")+vt+n+n;case 4200:if(!ml(n,/flex-|baseline/))return $t+"grid-column-align"+sa(n,u)+n;break;case 2592:case 3360:return $t+at(n,"template-","")+n;case 4384:case 3616:return d&&d.some(function(s,h){return u=h,ml(s.props,/grid-\w+-end/)})?~Nr(n+(d=d[u].value),"span",0)?n:$t+at(n,"-start","")+n+$t+"grid-row-span:"+(~Nr(d,"span",0)?ml(d,/\d+/):+ml(d,/\d+/)-+ml(n,/\d+/))+";":$t+at(n,"-start","")+n;case 4896:case 4128:return d&&d.some(function(s){return ml(s.props,/grid-\w+-start/)})?n:$t+at(at(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return at(n,/(.+)-inline(.+)/,vt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Le(n)-1-u>6)switch(Zt(n,u+1)){case 109:if(Zt(n,u+4)!==45)break;case 102:return at(n,/(.+:)(.+)-([^]+)/,"$1"+vt+"$2-$3$1"+ci+(Zt(n,u+3)==108?"$3":"$2-$3"))+n;case 115:return~Nr(n,"stretch",0)?th(at(n,"stretch","fill-available"),u,d)+n:n}break;case 5152:case 5920:return at(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,h,x,E,_,S,v){return $t+h+":"+x+v+(E?$t+h+"-span:"+(_?S:+S-+x)+v:"")+n});case 4949:if(Zt(n,u+6)===121)return at(n,":",":"+vt)+n;break;case 6444:switch(Zt(n,Zt(n,14)===45?18:11)){case 120:return at(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+vt+(Zt(n,14)===45?"inline-":"")+"box$3$1"+vt+"$2$3$1"+$t+"$2box$3")+n;case 100:return at(n,":",":"+$t)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return at(n,"scroll-","scroll-snap-")+n}return n}function Yr(n,u){for(var d="",s=0;s<n.length;s++)d+=u(n[s],s,n,u)||"";return d}function w2(n,u,d,s){switch(n.type){case f2:if(n.children.length)break;case u2:case s2:case Fu:return n.return=n.return||n.value;case K1:return"";case J1:return n.return=n.value+"{"+Yr(n.children,s)+"}";case Xr:if(!Le(n.value=n.props.join(",")))return""}return Le(d=Yr(n.children,s))?n.return=n.value+"{"+d+"}":""}function E2(n){var u=I1(n);return function(d,s,h,x){for(var E="",_=0;_<u;_++)E+=n[_](d,s,h,x)||"";return E}}function A2(n){return function(u){u.root||(u=u.return)&&n(u)}}function T2(n,u,d,s){if(n.length>-1&&!n.return)switch(n.type){case Fu:n.return=th(n.value,n.length,d);return;case J1:return Yr([Gl(n,{value:at(n.value,"@","@"+vt)})],s);case Xr:if(n.length)return h2(d=n.props,function(h){switch(ml(h,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ia(Gl(n,{props:[at(h,/:(read-\w+)/,":"+ci+"$1")]})),Ia(Gl(n,{props:[h]})),qu(n,{props:y1(d,s)});break;case"::placeholder":Ia(Gl(n,{props:[at(h,/:(plac\w+)/,":"+vt+"input-$1")]})),Ia(Gl(n,{props:[at(h,/:(plac\w+)/,":"+ci+"$1")]})),Ia(Gl(n,{props:[at(h,/:(plac\w+)/,$t+"input-$1")]})),Ia(Gl(n,{props:[h]})),qu(n,{props:y1(d,s)});break}return""})}}var Pa={},wu,Eu;const en=typeof process<"u"&&Pa!==void 0&&(Pa.REACT_APP_SC_ATTR||Pa.SC_ATTR)||"data-styled",eh="active",lh="data-styled-version",Kr="6.5.3",Pu=`/*!sc*/
`,ui=typeof window<"u"&&typeof document<"u";function S1(n){if(typeof process<"u"&&Pa!==void 0){const u=Pa[n];if(u!==void 0&&u!=="")return u!=="false"}}const C2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Eu=(wu=S1("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&wu!==void 0?wu:S1("SC_DISABLE_SPEEDY"))!==null&&Eu!==void 0?Eu:typeof process<"u"&&Pa!==void 0&&!1),ah="sc-keyframes-",M2={};function fa(n,...u){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${n} for more information.${u.length>0?` Args: ${u.join(", ")}`:""}`)}let Ur=new Map,qr=new Map,Gr=1;const ri=n=>{if(Ur.has(n))return Ur.get(n);for(;qr.has(Gr);)Gr++;const u=Gr++;return Ur.set(n,u),qr.set(u,n),u},$2=n=>qr.get(n),O2=(n,u)=>{Gr=u+1,Ur.set(n,u),qr.set(u,n)},ts=Object.freeze([]),ln=Object.freeze({});function nh(n,u,d=ln){return n.theme!==d.theme&&n.theme||u||d.theme}const _2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D2=/(^-|-$)/g;function ih(n){return n.replace(_2,"-").replace(D2,"")}const R2=/(a)(d)/gi,j1=n=>String.fromCharCode(n+(n>25?39:97));function es(n){let u,d="";for(u=Math.abs(n);u>52;u=u/52|0)d=j1(u%52)+d;return(j1(u%52)+d).replace(R2,"$1-$2")}const Xu=5381,ua=(n,u)=>{let d=u.length;for(;d;)n=33*n^u.charCodeAt(--d);return n},rh=n=>ua(Xu,n);function ls(n){return es(rh(n)>>>0)}function B2(n){return n.displayName||n.name||"Component"}function Qu(n){return typeof n=="string"&&!0}function N2(n){return Qu(n)?`styled.${n}`:`Styled(${B2(n)})`}const oh=Symbol.for("react.memo"),H2=Symbol.for("react.forward_ref"),k2={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},U2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ch={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G2={[H2]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[oh]:ch};function z1(n){return("type"in(u=n)&&u.type.$$typeof)===oh?ch:"$$typeof"in n?G2[n.$$typeof]:k2;var u}const Y2=Object.defineProperty,q2=Object.getOwnPropertyNames,L2=Object.getOwnPropertySymbols,X2=Object.getOwnPropertyDescriptor,Q2=Object.getPrototypeOf,V2=Object.prototype;function uh(n,u,d){if(typeof u!="string"){const s=Q2(u);s&&s!==V2&&uh(n,s,d);const h=q2(u).concat(L2(u)),x=z1(n),E=z1(u);for(let _=0;_<h.length;++_){const S=h[_];if(!(S in U2||d&&d[S]||E&&S in E||x&&S in x)){const v=X2(u,S);try{Y2(n,S,v)}catch{}}}}return n}function nn(n){return typeof n=="function"}const Z2=Symbol.for("react.forward_ref");function as(n){return n!=null&&(typeof n=="object"||typeof n=="function")&&n.$$typeof===Z2&&"styledComponentId"in n}function oi(n,u){return n&&u?n+" "+u:n||u||""}function Lr(n,u){return n.join("")}function fi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Vu(n,u,d=!1){if(!d&&!fi(n)&&!Array.isArray(n))return u;if(Array.isArray(u))for(let s=0;s<u.length;s++)n[s]=Vu(n[s],u[s]);else if(fi(u))for(const s in u)n[s]=Vu(n[s],u[s]);return n}function ns(n,u){Object.defineProperty(n,"toString",{value:u})}const K2=class{constructor(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n,this._cGroup=0,this._cIndex=0}indexOfGroup(n){if(n===this._cGroup)return this._cIndex;let u=this._cIndex;if(n>this._cGroup)for(let d=this._cGroup;d<n;d++)u+=this.groupSizes[d];else for(let d=this._cGroup-1;d>=n;d--)u-=this.groupSizes[d];return this._cGroup=n,this._cIndex=u,u}insertRules(n,u){if(n>=this.groupSizes.length){const h=this.groupSizes,x=h.length;let E=x;for(;n>=E;)if(E<<=1,E<0)throw fa(16,`${n}`);this.groupSizes=new Uint32Array(E),this.groupSizes.set(h),this.length=E;for(let _=x;_<E;_++)this.groupSizes[_]=0}let d=this.indexOfGroup(n+1),s=0;for(let h=0,x=u.length;h<x;h++)this.tag.insertRule(d,u[h])&&(this.groupSizes[n]++,d++,s++);s>0&&this._cGroup>n&&(this._cIndex+=s)}clearGroup(n){if(n<this.length){const u=this.groupSizes[n],d=this.indexOfGroup(n),s=d+u;this.groupSizes[n]=0;for(let h=d;h<s;h++)this.tag.deleteRule(d);u>0&&this._cGroup>n&&(this._cIndex-=u)}}getGroup(n){let u="";if(n>=this.length||this.groupSizes[n]===0)return u;const d=this.groupSizes[n],s=this.indexOfGroup(n),h=s+d;for(let x=s;x<h;x++)u+=this.tag.getRule(x)+Pu;return u}},J2=`style[${en}][${lh}="${Kr}"]`,W2=new RegExp(`^${en}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),w1=n=>typeof ShadowRoot<"u"&&n instanceof ShadowRoot||"host"in n&&n.nodeType===11,Zu=n=>{if(!n)return document;if(w1(n))return n;if("getRootNode"in n){const u=n.getRootNode();if(w1(u))return u}return document},F2=(n,u,d)=>{const s=d.split(",");let h;for(let x=0,E=s.length;x<E;x++)(h=s[x])&&n.registerName(u,h)},I2=(n,u)=>{var d;const s=((d=u.textContent)!==null&&d!==void 0?d:"").split(Pu),h=[];for(let x=0,E=s.length;x<E;x++){const _=s[x].trim();if(!_)continue;const S=_.match(W2);if(S){const v=0|parseInt(S[1],10),T=S[2];v!==0&&(O2(T,v),F2(n,T,S[3]),n.getTag().insertRules(v,h)),h.length=0}else h.push(_)}},Au=n=>{const u=Zu(n.options.target).querySelectorAll(J2);for(let d=0,s=u.length;d<s;d++){const h=u[d];h&&h.getAttribute(en)!==eh&&(I2(n,h),h.parentNode&&h.parentNode.removeChild(h))}};let ei=!1;function P2(){if(ei!==!1)return ei;if(typeof document<"u"){const n=document.head.querySelector('meta[property="csp-nonce"]');if(n)return ei=n.nonce||n.getAttribute("content")||void 0;const u=document.head.querySelector('meta[name="sc-nonce"]');if(u)return ei=u.getAttribute("content")||void 0}return ei=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const sh=(n,u)=>{const d=document.head,s=n||d,h=document.createElement("style"),x=(S=>{const v=Array.from(S.querySelectorAll(`style[${en}]`));return v[v.length-1]})(s),E=x!==void 0?x.nextSibling:null;h.setAttribute(en,eh),h.setAttribute(lh,Kr);const _=u||P2();return _&&h.setAttribute("nonce",_),s.insertBefore(h,E),h},tp=class{constructor(n,u){this.element=sh(n,u),this.element.appendChild(document.createTextNode("")),this.sheet=(d=>{var s;if(d.sheet)return d.sheet;const h=(s=d.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let x=0,E=h.length;x<E;x++){const _=h[x];if(_.ownerNode===d)return _}throw fa(17)})(this.element),this.length=0}insertRule(n,u){try{return this.sheet.insertRule(u,n),this.length++,!0}catch{return!1}}deleteRule(n){this.sheet.deleteRule(n),this.length--}getRule(n){const u=this.sheet.cssRules[n];return u&&u.cssText?u.cssText:""}},ep=class{constructor(n,u){this.element=sh(n,u),this.nodes=this.element.childNodes,this.length=0}insertRule(n,u){if(n<=this.length&&n>=0){const d=document.createTextNode(u);return this.element.insertBefore(d,this.nodes[n]||null),this.length++,!0}return!1}deleteRule(n){this.element.removeChild(this.nodes[n]),this.length--}getRule(n){return n<this.length?this.nodes[n].textContent:""}};let E1=ui;const lp={isServer:!ui,useCSSOMInjection:!C2};class hi{static registerId(u){return ri(u)}constructor(u=ln,d={},s){this.options=Object.assign(Object.assign({},lp),u),this.gs=d,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!u.isServer,!this.server&&ui&&E1&&(E1=!1,Au(this)),ns(this,()=>(h=>{const x=h.getTag(),{length:E}=x;let _="";for(let S=0;S<E;S++){const v=$2(S);if(v===void 0)continue;const T=h.names.get(v);if(T===void 0||!T.size)continue;const R=x.getGroup(S);if(R.length===0)continue;const N=en+".g"+S+'[id="'+v+'"]';let Z="";for(const G of T)G.length>0&&(Z+=G+",");_+=R+N+'{content:"'+Z+'"}'+Pu}return _})(this))}rehydrate(){!this.server&&ui&&Au(this)}reconstructWithOptions(u,d=!0){const s=new hi(Object.assign(Object.assign({},this.options),u),this.gs,d&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&ui&&u.target!==this.options.target&&Zu(this.options.target)!==Zu(u.target)&&Au(s),s}allocateGSInstance(u){return this.gs[u]=(this.gs[u]||0)+1}getTag(){return this.tag||(this.tag=(u=(({useCSSOMInjection:d,target:s,nonce:h})=>d?new tp(s,h):new ep(s,h))(this.options),new K2(u)));var u}hasNameForId(u,d){var s,h;return(h=(s=this.names.get(u))===null||s===void 0?void 0:s.has(d))!==null&&h!==void 0&&h}registerName(u,d){ri(u),u.startsWith(ah)&&this.keyframeIds.add(u);const s=this.names.get(u);s?s.add(d):this.names.set(u,new Set([d]))}insertRules(u,d,s){this.registerName(u,d),this.getTag().insertRules(ri(u),s)}clearNames(u){this.names.has(u)&&this.names.get(u).clear()}clearRules(u){this.getTag().clearGroup(ri(u)),this.clearNames(u)}clearTag(){this.tag=void 0}}const fh=new WeakSet,ap={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function np(n,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||n in ap||n.startsWith("--")?String(u).trim():u+"px"}const ca=47;function A1(n){if(n.charCodeAt(0)===45&&n.charCodeAt(1)===45)return n;let u="";for(let d=0;d<n.length;d++){const s=n.charCodeAt(d);u+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):n[d]}return u.startsWith("ms-")?"-"+u:u}const dh=Symbol.for("sc-keyframes");function ip(n){return typeof n=="object"&&n!==null&&dh in n}function hh(n){return nn(n)&&!(n.prototype&&n.prototype.isReactComponent)}const mh=n=>n==null||n===!1||n==="",rp=Symbol.for("react.client.reference");function T1(n){return n.$$typeof===rp}function gh(n,u){for(const d in n){const s=n[d];n.hasOwnProperty(d)&&!mh(s)&&(Array.isArray(s)&&fh.has(s)||nn(s)?u.push(A1(d)+":",s,";"):fi(s)?(u.push(d+" {"),gh(s,u),u.push("}")):u.push(A1(d)+": "+np(d,s)+";"))}}function ql(n,u,d,s,h=[]){if(mh(n))return h;const x=typeof n;if(x==="string")return h.push(n),h;if(x==="function"){if(T1(n))return h;if(hh(n)&&u){const E=n(u);return ql(E,u,d,s,h)}return h.push(n),h}if(Array.isArray(n)){for(let E=0;E<n.length;E++)ql(n[E],u,d,s,h);return h}return as(n)?(h.push(`.${n.styledComponentId}`),h):ip(n)?(d?(n.inject(d,s),h.push(n.getName(s))):h.push(n),h):T1(n)?h:fi(n)?n.toString!==Object.prototype.toString?(h.push(n.toString()),h):(gh(n,h),h):(h.push(n.toString()),h)}const op=rh(Kr);class cp{constructor(u,d,s){this.rules=u,this.componentId=d,this.baseHash=ua(op,d),this.baseStyle=s,hi.registerId(d)}generateAndInjectStyles(u,d,s){let h=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,d,s):"";{let x="";for(let E=0;E<this.rules.length;E++){const _=this.rules[E];if(typeof _=="string")x+=_;else if(_)if(hh(_)){const S=_(u);typeof S=="string"?x+=S:S!=null&&S!==!1&&(x+=Lr(ql(S,u,d,s)))}else x+=Lr(ql(_,u,d,s))}if(x){this.dynamicNameCache||(this.dynamicNameCache=new Map);const E=s.hash?s.hash+x:x;let _=this.dynamicNameCache.get(E);if(!_){if(_=es(ua(ua(this.baseHash,s.hash),x)>>>0),this.dynamicNameCache.size>=200){const S=this.dynamicNameCache.keys().next().value;S!==void 0&&this.dynamicNameCache.delete(S)}this.dynamicNameCache.set(E,_)}if(!d.hasNameForId(this.componentId,_)){const S=s(x,"."+_,void 0,this.componentId);d.insertRules(this.componentId,_,S)}h=oi(h,_)}}return h}}const up=/&/g;function ph(n,u){let d=0;for(;--u>=0&&n.charCodeAt(u)===92;)d++;return!(1&~d)}function Tu(n){const u=n.length;let d="",s=0,h=0,x=0,E=!1,_=!1;for(let S=0;S<u;S++){const v=n.charCodeAt(S);if(x!==0||E||v!==ca||n.charCodeAt(S+1)!==42)if(E)v===42&&n.charCodeAt(S+1)===ca&&(E=!1,S++);else if(v!==34&&v!==39||ph(n,S)){if(x===0)if(v===123)h++;else if(v===125){if(h--,h<0){_=!0;let T=S+1;for(;T<u;){const R=n.charCodeAt(T);if(R===59||R===10)break;T++}T<u&&n.charCodeAt(T)===59&&T++,h=0,S=T-1,s=T;continue}h===0&&(d+=n.substring(s,S+1),s=S+1)}else v===59&&h===0&&(d+=n.substring(s,S+1),s=S+1)}else x===0?x=v:x===v&&(x=0);else E=!0,S++}return _||h!==0||x!==0?(s<u&&h===0&&x===0&&(d+=n.substring(s)),d):n}function bh(n,u){const d=u+" ",s=","+d;for(let h=0;h<n.length;h++){const x=n[h];if(x.type==="rule"){x.value=(d+x.value).replaceAll(",",s);const E=x.props,_=[];for(let S=0;S<E.length;S++)_[S]=d+E[S];x.props=_}Array.isArray(x.children)&&x.type!=="@keyframes"&&bh(x.children,u)}return n}function sp({options:n=ln,plugins:u=ts}=ln){let d,s,h;const x=(N,Z,G)=>G.startsWith(s)&&G.endsWith(s)&&G.replaceAll(s,"").length>0?`.${d}`:N,E=u.slice();E.push(N=>{N.type===Xr&&N.value.includes("&")&&(h||(h=new RegExp(`\\${s}\\b`,"g")),N.props[0]=N.props[0].replace(up,s).replace(h,x))}),n.prefix&&E.push(T2),E.push(w2);let _=[];const S=E2(E.concat(A2(N=>_.push(N)))),v=(N,Z="",G="",J="&")=>{d=J,s=Z,h=void 0;const pt=(function(X){const bt=X.indexOf("//")!==-1,Ot=X.indexOf("}")!==-1;if(!bt&&!Ot)return X;if(!bt)return Tu(X);const yt=X.length;let ht="",U=0,W=0,Kt=0,be=0,Rt=0,Ut=!1;for(;W<yt;){const _t=X.charCodeAt(W);if(_t!==34&&_t!==39||ph(X,W))if(Kt===0)if(_t===ca&&W+1<yt&&X.charCodeAt(W+1)===42){for(W+=2;W+1<yt&&(X.charCodeAt(W)!==42||X.charCodeAt(W+1)!==ca);)W++;W+=2}else if(_t!==40)if(_t!==41)if(be>0)W++;else if(_t===42&&W+1<yt&&X.charCodeAt(W+1)===ca)ht+=X.substring(U,W),W+=2,U=W,Ut=!0;else if(_t===ca&&W+1<yt&&X.charCodeAt(W+1)===ca){for(ht+=X.substring(U,W);W<yt&&X.charCodeAt(W)!==10;)W++;U=W,Ut=!0}else _t===123?Rt++:_t===125&&Rt--,W++;else be>0&&be--,W++;else be++,W++;else W++;else Kt===0?Kt=_t:Kt===_t&&(Kt=0),W++}return Ut?(U<yt&&(ht+=X.substring(U)),Rt===0?ht:Tu(ht)):Rt===0?X:Tu(X)})(N);let et=j2(G||Z?G+" "+Z+" { "+pt+" }":pt);return n.namespace&&(et=bh(et,n.namespace)),_=[],Yr(et,S),_},T=n;let R=Xu;for(let N=0;N<u.length;N++)u[N].name||fa(15),R=ua(R,u[N].name);return T!=null&&T.namespace&&(R=ua(R,T.namespace)),T!=null&&T.prefix&&(R=ua(R,"p")),v.hash=R!==Xu?R.toString():"",v}const fp=new hi,Ku=sp(),yh=re.createContext({shouldForwardProp:void 0,styleSheet:fp,stylis:Ku,stylisPlugins:void 0});yh.Consumer;function xh(){return re.useContext(yh)}const di=re.createContext(void 0);di.Consumer;function C1(n){const u=re.useContext(di),d=re.useMemo(()=>(function(s,h){if(!s)throw fa(14);if(nn(s))return s(h);if(Array.isArray(s)||typeof s!="object")throw fa(8);return h?Object.assign(Object.assign({},h),s):s})(n.theme,u),[n.theme,u]);return n.children?re.createElement(di.Provider,{value:d},n.children):null}const M1=Object.prototype.hasOwnProperty,Cu={};function dp(n,u){const d=typeof n!="string"?"sc":ih(n);Cu[d]=(Cu[d]||0)+1;const s=d+"-"+ls(Kr+d+Cu[d]);return u?u+"-"+s:s}function hp(n,u,d){const s=as(n),h=n,x=!Qu(n),{attrs:E=ts,componentId:_=dp(u.displayName,u.parentComponentId),displayName:S=N2(n)}=u,v=u.displayName&&u.componentId?ih(u.displayName)+"-"+u.componentId:u.componentId||_,T=s&&h.attrs?h.attrs.concat(E).filter(Boolean):E;let{shouldForwardProp:R}=u;if(s&&h.shouldForwardProp){const J=h.shouldForwardProp;if(u.shouldForwardProp){const pt=u.shouldForwardProp;R=(et,X)=>J(et,X)&&pt(et,X)}else R=J}const N=new cp(d,v,s?h.componentStyle:void 0);function Z(J,pt){return(function(et,X,bt){const{attrs:Ot,componentStyle:yt,defaultProps:ht,foldedComponentIds:U,styledComponentId:W,target:Kt}=et,be=re.useContext(di),Rt=xh(),Ut=et.shouldForwardProp||Rt.shouldForwardProp,_t=nh(X,be,ht)||ln;let Jt,It;{const rt=re.useRef(null),nt=rt.current;if(nt!==null&&nt[1]===_t&&nt[2]===Rt.styleSheet&&nt[3]===Rt.stylis&&nt[7]===yt&&(function(b,$,B){const k=b,L=$;let P=0;for(const it in L)if(M1.call(L,it)&&(P++,k[it]!==L[it]))return!1;return P===B})(nt[0],X,nt[4]))Jt=nt[5],It=nt[6];else{Jt=(function($,B,k){const L=Object.assign(Object.assign({},B),{className:void 0,theme:k}),P=$.length>1;for(let it=0;it<$.length;it++){const Qt=$[it],Tt=nn(Qt)?Qt(P?Object.assign({},L):L):Qt;for(const ce in Tt)ce==="className"?L.className=oi(L.className,Tt[ce]):ce==="style"?L.style=Object.assign(Object.assign({},L.style),Tt[ce]):ce in B&&B[ce]===void 0||(L[ce]=Tt[ce])}return"className"in B&&typeof B.className=="string"&&(L.className=oi(L.className,B.className)),L})(Ot,X,_t),It=yt.generateAndInjectStyles(Jt,Rt.styleSheet,Rt.stylis);let b=0;for(const $ in X)M1.call(X,$)&&b++;rt.current=[X,_t,Rt.styleSheet,Rt.stylis,b,Jt,It,yt]}}const C=Jt.as||Kt,H=(function(rt,nt,b,$){const B={};for(const k in rt)rt[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&rt.theme===b||(k==="forwardedAs"?B.as=rt.forwardedAs:$&&!$(k,nt)||(B[k]=rt[k]));return B})(Jt,C,_t,Ut);let V=oi(U,W);return It&&(V+=" "+It),Jt.className&&(V+=" "+Jt.className),H[Qu(C)&&C.includes("-")?"class":"className"]=V,bt&&(H.ref=bt),I.createElement(C,H)})(G,J,pt)}Z.displayName=S;let G=re.forwardRef(Z);return G.attrs=T,G.componentStyle=N,G.displayName=S,G.shouldForwardProp=R,G.foldedComponentIds=s?oi(h.foldedComponentIds,h.styledComponentId):"",G.styledComponentId=v,G.target=s?h.target:n,Object.defineProperty(G,"defaultProps",{get(){return this._foldedDefaultProps},set(J){this._foldedDefaultProps=s?(function(pt,...et){for(const X of et)Vu(pt,X,!0);return pt})({},h.defaultProps,J):J}}),ns(G,()=>`.${G.styledComponentId}`),x&&uh(G,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}var mp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function $1(n,u){const d=[n[0]];for(let s=0,h=u.length;s<h;s+=1)d.push(u[s],n[s+1]);return d}const O1=n=>(fh.add(n),n);function dt(n,...u){if(nn(n)||fi(n))return O1(ql($1(ts,[n,...u])));const d=n;return u.length===0&&d.length===1&&typeof d[0]=="string"?ql(d):O1(ql($1(d,u)))}function Ju(n,u,d=ln){if(!u)throw fa(1,u);const s=(h,...x)=>n(u,d,dt(h,...x));return s.attrs=h=>Ju(n,u,Object.assign(Object.assign({},d),{attrs:Array.prototype.concat(d.attrs,h).filter(Boolean)})),s.withConfig=h=>Ju(n,u,Object.assign(Object.assign({},d),h)),s}const vh=n=>Ju(hp,n),g=vh;mp.forEach(n=>{g[n]=vh(n)});class gp{constructor(u,d){this.instanceRules=new Map,this.rules=u,this.componentId=d,this.isStatic=(function(s){for(let h=0;h<s.length;h+=1){const x=s[h];if(nn(x)&&!as(x))return!1}return!0})(u),hi.registerId(this.componentId)}removeStyles(u,d){this.instanceRules.delete(u),this.rebuildGroup(d)}renderStyles(u,d,s,h){const x=this.componentId;if(this.isStatic){if(s.hasNameForId(x,x+u))this.instanceRules.has(u)||this.computeRules(u,d,s,h);else{const _=this.computeRules(u,d,s,h);s.insertRules(x,_.name,_.rules)}return}const E=this.instanceRules.get(u);if(this.computeRules(u,d,s,h),!s.server&&E){const _=E.rules,S=this.instanceRules.get(u).rules;if(_.length===S.length){let v=!0;for(let T=0;T<_.length;T++)if(_[T]!==S[T]){v=!1;break}if(v)return}}this.rebuildGroup(s)}computeRules(u,d,s,h){const x=Lr(ql(this.rules,d,s,h)),E={name:this.componentId+u,rules:h(x,"")};return this.instanceRules.set(u,E),E}rebuildGroup(u){const d=this.componentId;u.clearRules(d);for(const s of this.instanceRules.values())u.insertRules(d,s.name,s.rules)}}function pp(n,...u){const d=dt(n,...u),s=`sc-global-${ls(JSON.stringify(d))}`,h=new gp(d,s),x=_=>{const S=xh(),v=re.useContext(di);let T;{const R=re.useRef(null);R.current===null&&(R.current=S.styleSheet.allocateGSInstance(s)),T=R.current}S.styleSheet.server&&E(T,_,S.styleSheet,v,S.stylis);{const R=h.isStatic?[T,S.styleSheet,h]:[T,_,S.styleSheet,v,S.stylis,h],N=re.useRef(h);re.useLayoutEffect(()=>{S.styleSheet.server||(N.current!==h&&(S.styleSheet.clearRules(s),N.current=h),E(T,_,S.styleSheet,v,S.stylis))},R),re.useLayoutEffect(()=>()=>{S.styleSheet.server||h.removeStyles(T,S.styleSheet)},[T,S.styleSheet,h])}return S.styleSheet.server&&h.instanceRules.delete(T),null};function E(_,S,v,T,R){if(h.isStatic)h.renderStyles(_,M2,v,R);else{const N=Object.assign(Object.assign({},S),{theme:nh(S,T,x.defaultProps)});h.renderStyles(_,N,v,R)}}return re.memo(x)}var Sh;class bp{constructor(u,d){this[Sh]=!0,this.inject=(s,h=Ku)=>{const x=this.getName(h);if(!s.hasNameForId(this.id,x)){const E=h(this.rules,x,"@keyframes");s.insertRules(this.id,x,E)}},this.name=u,this.id=ah+u,this.rules=d,ri(this.id),ns(this,()=>{throw fa(12,String(this.name))})}getName(u=Ku){return u.hash?this.name+es(+u.hash>>>0):this.name}}function oe(n,...u){const d=Lr(dt(n,...u)),s=ls(d);return new bp(s,d)}Sh=dh;const _1={colors:{bg:"#040d1a",bg2:"#071428",bgCard:"rgba(6, 20, 45, 0.72)",bgCardSolid:"#06142d",bgCardHover:"rgba(8, 24, 52, 0.88)",bgGlass:"rgba(6, 20, 45, 0.55)",bgDark:"rgba(3, 8, 20, 0.95)",bgModalOverlay:"rgba(0, 0, 0, 0.75)",border:"rgba(20, 184, 166, 0.12)",borderHover:"rgba(20, 184, 166, 0.30)",borderAccent:"rgba(6, 182, 212, 0.40)",borderLight:"rgba(255, 255, 255, 0.06)",accent:"#14b8a6",accentHover:"#0d9488",accentCyan:"#06b6d4",accentSky:"#22d3ee",accentEmerald:"#34d399",accentPink:"#f472b6",accentAmber:"#fbbf24",accentPurple:"#a855f7",text:"#e2eaf4",text2:"#94b8d4",text3:"#5a7d9a",textWhite:"#ffffff",error:"#ef4444",errorBg:"rgba(239, 68, 68, 0.08)",success:"#10b981",successBg:"rgba(16, 185, 129, 0.08)"},gradients:{primary:"linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",full:"linear-gradient(135deg, #14b8a6 0%, #06b6d4 45%, #22d3ee 100%)",subtle:"linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(6, 182, 212, 0.08))",cardHover:"linear-gradient(135deg, rgba(20, 184, 166, 0.06), rgba(6, 182, 212, 0.04))",progress:"linear-gradient(90deg, #14b8a6, #22d3ee)",timeline:"linear-gradient(to bottom, rgba(20, 184, 166, 0.45) 0%, rgba(6, 182, 212, 0.04) 100%)"},fonts:{body:"'Inter', system-ui, -apple-system, sans-serif",heading:"'Outfit', sans-serif",mono:"'JetBrains Mono', monospace"},typography:{hero:"clamp(3.2rem, 6.5vw, 5.5rem)",h2:"clamp(1.9rem, 3.8vw, 2.65rem)",h3:"clamp(1.1rem, 2vw, 1.3rem)",body:"0.975rem",small:"0.85rem",xs:"0.75rem",tag:"0.68rem"},radii:{sm:"0.4rem",md:"0.625rem",lg:"1rem",xl:"1.5rem",full:"9999px"},shadows:{sm:"0 2px 6px rgba(0, 0, 0, 0.4)",md:"0 6px 24px rgba(0, 0, 0, 0.5)",lg:"0 12px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(20, 184, 166, 0.08)",glow:"0 6px 28px rgba(20, 184, 166, 0.40)",glowLg:"0 0 40px rgba(20, 184, 166, 0.25)"},transitions:{spring:"cubic-bezier(0.16, 1, 0.3, 1)",easeOut:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",default:"0.28s cubic-bezier(0.16, 1, 0.3, 1)",fast:"0.15s ease"},breakpoints:{xs:"375px",sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},spacing:{container:"1180px",sectionPy:"7rem",sectionPyMobile:"4.5rem",navHeight:"72px"}},yp=oe`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,ha=oe`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xp=oe`
  to {
    opacity: 1;
    transform: scale(1);
  }
`,vp=oe`
  0%, 100% { opacity: 1; box-shadow: 0 0 6px #34d399; }
  50% { opacity: 0.6; box-shadow: 0 0 14px #34d399; }
`,Sp=oe`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(15px, -15px) scale(1.03); }
`,jh=oe`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`,jp=oe`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,zp=oe`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.04); }
`,wp=oe`
  0% { opacity: 0; filter: blur(8px); transform: translateY(10px); }
  4%, 22% { opacity: 1; filter: blur(0px); transform: translateY(0); }
  26%, 100% { opacity: 0; filter: blur(8px); transform: translateY(-10px); }
`,Ep=oe`
  0% { opacity: 1; top: 5px; }
  100% { opacity: 0; top: 18px; }
`,Ap=oe`
  0%, 100% { opacity: 0.75; }
  50% { opacity: 1; box-shadow: 0 0 10px rgba(6, 182, 212, 0.25); }
`,zh=oe`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
`,Tp=oe`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,Cp=oe`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
`,Mp=oe`
  from { transform: scale(0.6); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`,D1=pp`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;600;700;800;900&display=swap");

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 76px;
    font-size: 16px;
    scrollbar-gutter: stable;
  }

  body {
    font-family: ${({theme:n})=>n.fonts.body};
    background: ${({theme:n})=>n.colors.bg};
    color: ${({theme:n})=>n.colors.text};
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.005em;
    cursor: default;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
  }

  :focus-visible {
    outline: 2px solid ${({theme:n})=>n.colors.accent};
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Scroll reveal utilities */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(4px);
    transition: opacity 0.7s ${({theme:n})=>n.transitions.spring},
                transform 0.7s ${({theme:n})=>n.transitions.spring},
                filter 0.7s ${({theme:n})=>n.transitions.spring};
    will-change: opacity, transform, filter;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html {
      scroll-behavior: auto;
    }
    .reveal {
      opacity: 1;
      transform: none;
      filter: none;
    }
  }
`,Je=g.div`
  max-width: ${({theme:n})=>n.spacing.container};
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 0 1rem;
  }
`,Jr=g.section`
  padding: ${({theme:n})=>n.spacing.sectionPy} 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing.sectionPyMobile} 0;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 3.5rem 0;
  }
`,Wr=g(Jr)`
  background: ${({theme:n})=>n.colors.bg2};
`,$p=g.span`
  background: ${({theme:n})=>n.gradients.full};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,wh=g.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.small};
  font-weight: 600;
  letter-spacing: -0.005em;
  transition: all ${({theme:n})=>n.transitions.default};
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  border: none;
  font-family: inherit;
  text-decoration: none;

  &:active {
    transform: scale(0.97);
  }

  svg {
    flex-shrink: 0;
    transition: transform ${({theme:n})=>n.transitions.default};
  }

  &:hover svg.arrow {
    transform: translateX(4px);
  }

  ${({$variant:n,theme:u})=>n==="primary"&&dt`
      background: ${u.gradients.primary};
      color: #ffffff;
      border: 1px solid rgba(20, 184, 166, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${u.shadows.glow};
      }
    `}

  ${({$variant:n,theme:u})=>n==="secondary"&&dt`
      background: rgba(6, 182, 212, 0.08);
      color: ${u.colors.accentSky};
      border: 1px solid rgba(6, 182, 212, 0.2);

      &:hover {
        background: rgba(6, 182, 212, 0.15);
        border-color: rgba(6, 182, 212, 0.4);
        transform: translateY(-2px);
      }
    `}

  ${({$variant:n,theme:u})=>n==="outline"&&dt`
      background: transparent;
      color: ${u.colors.text2};
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        border-color: rgba(20, 184, 166, 0.4);
        color: ${u.colors.text};
        background: rgba(20, 184, 166, 0.06);
        transform: translateY(-2px);
      }
    `}

  ${({$size:n})=>n==="lg"&&dt`
      padding: 0.9rem 1.8rem;
      font-size: 0.95rem;
    `}

  ${({$size:n})=>n==="sm"&&dt`
      padding: 0.42rem 0.9rem;
      font-size: 0.8rem;
    `}

  ${({$fullWidth:n})=>n&&dt`
      width: 100%;
      justify-content: center;
    `}
`,da=g.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.small};
  font-weight: 600;
  letter-spacing: -0.005em;
  transition: all ${({theme:n})=>n.transitions.default};
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  border: none;
  font-family: inherit;
  text-decoration: none;

  &:active {
    transform: scale(0.97);
  }

  svg {
    flex-shrink: 0;
    transition: transform ${({theme:n})=>n.transitions.default};
  }

  &:hover svg.arrow {
    transform: translateX(4px);
  }

  ${({$variant:n,theme:u})=>n==="primary"&&dt`
      background: ${u.gradients.primary};
      color: #ffffff;
      border: 1px solid rgba(20, 184, 166, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${u.shadows.glow};
      }
    `}

  ${({$variant:n,theme:u})=>n==="secondary"&&dt`
      background: rgba(6, 182, 212, 0.08);
      color: ${u.colors.accentSky};
      border: 1px solid rgba(6, 182, 212, 0.2);

      &:hover {
        background: rgba(6, 182, 212, 0.15);
        border-color: rgba(6, 182, 212, 0.4);
        transform: translateY(-2px);
      }
    `}

  ${({$variant:n,theme:u})=>n==="outline"&&dt`
      background: transparent;
      color: ${u.colors.text2};
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        border-color: rgba(20, 184, 166, 0.4);
        color: ${u.colors.text};
        background: rgba(20, 184, 166, 0.06);
        transform: translateY(-2px);
      }
    `}

  ${({$size:n})=>n==="lg"&&dt`
      padding: 0.9rem 1.8rem;
      font-size: 0.95rem;
    `}

  ${({$size:n})=>n==="sm"&&dt`
      padding: 0.42rem 0.9rem;
      font-size: 0.8rem;
    `}

  ${({$fullWidth:n})=>n&&dt`
      width: 100%;
      justify-content: center;
    `}
`,Op=g.a`
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 99999;
  background: ${({theme:n})=>n.colors.accent};
  color: ${({theme:n})=>n.colors.bg};
  padding: 0.5rem 1rem;
  border-radius: 0 0 ${({theme:n})=>n.radii.md} ${({theme:n})=>n.radii.md};
  font-weight: 700;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`,_p=g.div`
  text-align: center;
  margin-top: 2.75rem;
`,Dp=g.div`
  position: fixed;
  inset: 0;
  background: ${({theme:n})=>n.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
`,Rp=g.div`
  text-align: center;
`,Bp=g.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  animation: ${Mp} 0.6s ${({theme:n})=>n.transitions.spring} forwards;
  filter: drop-shadow(0 0 20px rgba(20, 184, 166, 0.4));
`,Np=g.div`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text3};
  letter-spacing: 0.03em;
  margin-bottom: 1.25rem;
`,Hp=g.div`
  width: 140px;
  height: 2.5px;
  background: rgba(20, 184, 166, 0.12);
  border-radius: ${({theme:n})=>n.radii.full};
  overflow: hidden;
  margin: 0 auto 0.75rem;
`,kp=g.div`
  height: 100%;
  background: ${({theme:n})=>n.gradients.primary};
  border-radius: ${({theme:n})=>n.radii.full};
  width: 0;
  transition: width 0.05s linear;
`,Up=g.div`
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: ${({theme:n})=>n.typography.xs};
  color: ${({theme:n})=>n.colors.text3};
`,Gp=()=>o.jsxs("svg",{viewBox:"0 0 48 48",width:"64",height:"64",fill:"none","aria-hidden":"true",children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"gsLoadGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#14b8a6"}),o.jsx("stop",{offset:"50%",stopColor:"#06b6d4"}),o.jsx("stop",{offset:"100%",stopColor:"#22d3ee"})]})}),o.jsx("rect",{width:"48",height:"48",rx:"14",fill:"#06142d"}),o.jsx("rect",{x:"1.5",y:"1.5",width:"45",height:"45",rx:"12.5",fill:"url(#gsLoadGrad)",fillOpacity:"0.12",stroke:"url(#gsLoadGrad)",strokeWidth:"1.5"}),o.jsx("path",{d:"M 23 15 H 17 C 13.5 15 13.5 24 17 24 H 23 V 20",stroke:"url(#gsLoadGrad)",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M 31 33 H 25 C 21.5 33 21.5 24 25 24 H 31 C 34.5 24 34.5 15 31 15 H 25",stroke:"#F8FAFC",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round"})]});function Yp({onLoaded:n}){const u=I.useRef(null),d=I.useRef(null);return I.useEffect(()=>{let s=0;const h=setInterval(()=>{s+=Math.random()*18,s>=100&&(s=100,clearInterval(h)),u.current&&(u.current.style.width=`${s}%`),d.current&&(d.current.textContent=`${Math.floor(s)}%`)},80),x=()=>{clearInterval(h),u.current&&(u.current.style.width="100%"),d.current&&(d.current.textContent="100%"),setTimeout(n,500)};return document.readyState==="complete"?x():window.addEventListener("load",x),()=>{clearInterval(h),window.removeEventListener("load",x)}},[n]),o.jsx(Dp,{"aria-hidden":"true",role:"presentation",children:o.jsxs(Rp,{children:[o.jsx(Bp,{children:o.jsx(Gp,{})}),o.jsx(Np,{children:"Granth Senjaliya"}),o.jsx(Hp,{children:o.jsx(kp,{ref:u})}),o.jsx(Up,{ref:d,children:"0%"})]})})}const qp=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"dsa",label:"DSA"},{id:"education",label:"Education"},{id:"contact",label:"Contact"}],Lp=g.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.4s ${({theme:n})=>n.transitions.easeOut},
              border-color 0.4s,
              box-shadow 0.4s;

  ${({$scrolled:n,theme:u})=>n&&dt`
      background: rgba(4, 13, 26, 0.92);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border-bottom: 1px solid ${u.colors.border};
      box-shadow: ${u.shadows.md};
    `}
`,Xp=g.nav`
  max-width: ${({theme:n})=>n.spacing.container};
  margin: 0 auto;
  padding: 0.85rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: 0.75rem 1.25rem;
  }
`,Qp=g.a`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-shrink: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`,Vp=g.span`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.text};
  letter-spacing: -0.01em;
`,Zp=g.span`
  color: ${({theme:n})=>n.colors.accent};
`,Kp=g.ul`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  margin-left: auto;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    width: min(300px, 85vw);
    height: 100vh;
    background: rgba(4, 13, 26, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    gap: 0;
    padding: 5rem 2rem 2rem;
    border-left: 1px solid ${({theme:n})=>n.colors.border};
    z-index: 999;
    align-items: flex-start;
    display: ${({$isOpen:n})=>n?"flex":"none"};

    li {
      width: 100%;
    }
  }
`,Jp=g.a`
  position: relative;
  color: ${({theme:n})=>n.colors.text3};
  font-size: ${({theme:n})=>n.typography.small};
  font-weight: 500;
  padding: 0.45rem 0.75rem;
  border-radius: ${({theme:n})=>n.radii.sm};
  letter-spacing: 0.01em;
  transition: color 0.2s, background 0.2s;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    right: 50%;
    height: 2px;
    background: ${({theme:n})=>n.colors.accent};
    border-radius: ${({theme:n})=>n.radii.full};
    transition: left 0.3s ${({theme:n})=>n.transitions.spring},
                right 0.3s ${({theme:n})=>n.transitions.spring};
  }

  &:hover {
    color: ${({theme:n})=>n.colors.text};

    &::after {
      left: 12px;
      right: 12px;
    }
  }

  ${({$isActive:n,theme:u})=>n&&dt`
      color: ${u.colors.text};
      background: rgba(20, 184, 166, 0.1);

      &::after {
        left: 12px;
        right: 12px;
        opacity: 0.9;
      }
    `}

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    display: block;
    padding: 0.85rem 0;
    font-size: 1rem;
    border-bottom: 1px solid ${({theme:n})=>n.colors.border};
    border-radius: 0;
    width: 100%;

    &::after {
      display: none;
    }

    ${({$isActive:n})=>n&&dt`
        background: transparent;
        color: ${({theme:u})=>u.colors.accent};
      `}
  }
`,Wp=g.div`
  flex-shrink: 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    display: none;
  }
`,Eh=g.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.42rem 0.95rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text2};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.full};
  transition: all ${({theme:n})=>n.transitions.default};
  background: none;
  cursor: pointer;

  &:hover {
    color: ${({theme:n})=>n.colors.bg};
    border-color: ${({theme:n})=>n.colors.accent};
    background: ${({theme:n})=>n.colors.accent};
    transform: translateY(-1px);
    box-shadow: ${({theme:n})=>n.shadows.glow};
  }
`,Fp=g.li`
  display: none;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    display: block;
    padding: 1rem 0;
    width: 100%;
  }
`,Ip=g(Eh)`
  width: 100%;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  border-radius: ${({theme:n})=>n.radii.md};
  background: ${({theme:n})=>n.gradients.primary};
  color: #ffffff;
  border: none;
`,Pp=g.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  border-radius: ${({theme:n})=>n.radii.sm};
  transition: background 0.15s;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({theme:n})=>n.colors.text2};
    border-radius: ${({theme:n})=>n.radii.full};
    transition: all 0.35s ${({theme:n})=>n.transitions.spring};
  }

  ${({$isOpen:n})=>n&&dt`
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    display: flex;
    margin-left: auto;
  }
`,tb=g.div`
  display: none;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.5);
  }
`,eb=()=>o.jsxs("svg",{viewBox:"0 0 48 48",width:"38",height:"38",fill:"none","aria-hidden":"true",children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"gsNavGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#14b8a6"}),o.jsx("stop",{offset:"50%",stopColor:"#06b6d4"}),o.jsx("stop",{offset:"100%",stopColor:"#22d3ee"})]})}),o.jsx("rect",{width:"48",height:"48",rx:"12",fill:"#06142d"}),o.jsx("rect",{x:"1.5",y:"1.5",width:"45",height:"45",rx:"11",fill:"url(#gsNavGrad)",fillOpacity:"0.15",stroke:"url(#gsNavGrad)",strokeWidth:"1.5"}),o.jsx("path",{d:"M 23 15 H 17 C 13.5 15 13.5 24 17 24 H 23 V 20",stroke:"url(#gsNavGrad)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M 31 33 H 25 C 21.5 33 21.5 24 25 24 H 31 C 34.5 24 34.5 15 31 15 H 25",stroke:"#F8FAFC",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]});function lb({activeSection:n,onOpenResume:u}){const[d,s]=I.useState(!1),[h,x]=I.useState(!1),E=I.useRef(null),_=I.useRef(null),S="nav-mobile-menu";I.useEffect(()=>{const N=()=>s(window.scrollY>40);return window.addEventListener("scroll",N,{passive:!0}),()=>window.removeEventListener("scroll",N)},[]);const v=()=>{x(!1),document.body.style.overflow=""},T=()=>{var Z;const N=!h;x(N),document.body.style.overflow=N?"hidden":"",N||(Z=_.current)==null||Z.focus()},R=N=>{v();const Z=document.getElementById(N);Z&&Z.scrollIntoView({behavior:"smooth",block:"start"})};return I.useEffect(()=>{const N=G=>{G.key==="Escape"&&h&&v()},Z=G=>{h&&E.current&&!E.current.contains(G.target)&&v()};return document.addEventListener("keydown",N),document.addEventListener("mousedown",Z),()=>{document.removeEventListener("keydown",N),document.removeEventListener("mousedown",Z)}},[h]),I.useEffect(()=>()=>{document.body.style.overflow=""},[]),o.jsxs(Lp,{$scrolled:d,id:"navHeader",role:"banner",ref:E,children:[o.jsxs(Xp,{"aria-label":"Main navigation",children:[o.jsxs(Qp,{href:"#home","aria-label":"Granth Senjaliya Home",onClick:N=>{N.preventDefault(),R("home")},children:[o.jsx(eb,{}),o.jsxs(Vp,{children:["Granth",o.jsx(Zp,{children:"."})]})]}),o.jsxs(Kp,{id:S,$isOpen:h,role:"list",children:[qp.map(N=>o.jsx("li",{children:o.jsx(Jp,{href:`#${N.id}`,$isActive:n===N.id,onClick:Z=>{Z.preventDefault(),R(N.id)},"aria-current":n===N.id?"page":void 0,children:N.label})},N.id)),o.jsx(Fp,{children:o.jsx(Ip,{onClick:()=>{u(),v()},children:"Resume"})})]}),o.jsx(Wp,{children:o.jsxs(Eh,{onClick:u,"aria-label":"Open Resume Preview",children:[o.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:[o.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.jsx("polyline",{points:"14 2 14 8 20 8"}),o.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),o.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),"Resume"]})}),o.jsxs(Pp,{$isOpen:h,onClick:T,"aria-label":h?"Close menu":"Open menu","aria-expanded":h,"aria-controls":S,ref:_,children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),h&&o.jsx(tb,{onClick:v,"aria-hidden":"true"})]})}const ab=""+new URL("granth-profile-1OopXPz6.webp",import.meta.url).href,nb=""+new URL("granth-profile-BzBSKKTM.jpg",import.meta.url).href,Mu=["CSE Student","Developer","Problem Solver","IoT Enthusiast"],ib=g.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 5.5rem 0 4rem;
`,rb=g.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`,ob=g.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`,cb=g.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
`,ub=g.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-image: linear-gradient(rgba(20, 184, 166, 0.035) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(20, 184, 166, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 65% at 50% 45%, black, transparent);
  -webkit-mask-image: radial-gradient(ellipse 70% 65% at 50% 45%, black, transparent);
  pointer-events: none;
`,$u=g.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  pointer-events: none;
  animation: ${Sp} 12s ease-in-out infinite;
  max-width: 100%;

  &.glow1 {
    width: min(480px, 65vw);
    height: min(480px, 65vw);
    background: rgba(20, 184, 166, 0.09);
    top: -200px;
    right: 30px;
  }

  &.glow2 {
    width: min(340px, 60vw);
    height: min(340px, 60vw);
    background: rgba(6, 182, 212, 0.08);
    bottom: -100px;
    left: 0;
    animation-delay: 4s;
  }

  &.glow3 {
    width: min(240px, 50vw);
    height: min(240px, 50vw);
    background: rgba(34, 211, 238, 0.06);
    top: 45%;
    left: 42%;
    animation-delay: 7s;
  }
`,sb=g(Je)`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
  min-height: 82vh;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    min-height: unset;
    padding-top: 2rem;
  }
`,fb=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  min-width: 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    align-items: center;
  }
`,db=g.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.text3};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${({theme:n})=>n.radii.full};
  padding: 0.32rem 0.9rem;
  width: fit-content;
  opacity: 0;
  transform: translateY(20px);
  animation: ${ha} 0.75s ${({theme:n})=>n.transitions.spring} forwards;
  animation-delay: 0.1s;
`,hb=g.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:n})=>n.colors.accentEmerald};
  box-shadow: 0 0 6px ${({theme:n})=>n.colors.accentEmerald};
  animation: ${vp} 2.5s ease-in-out infinite;
`,mb=g.h1`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: ${({theme:n})=>n.typography.hero};
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 0.95;
  display: flex;
  flex-direction: column;
  gap: 0.04em;
  opacity: 0;
  transform: translateY(20px);
  animation: ${ha} 0.75s ${({theme:n})=>n.transitions.spring} forwards;
  animation-delay: 0.2s;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: clamp(2.6rem, 11vw, 3.8rem);
    line-height: 1;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    font-size: clamp(2.2rem, 12vw, 3rem);
  }
`,gb=g.span`
  font-size: 0.2em;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.text3};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  font-family: ${({theme:n})=>n.fonts.body};
`,R1=g.span`
  display: block;

  &.gradient {
    background: ${({theme:n})=>n.gradients.full};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,pb=g.span`
  color: ${({theme:n})=>n.colors.accent};
`,bb=g.div`
  display: flex;
  align-items: center;
  min-height: 2.2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: ${ha} 0.75s ${({theme:n})=>n.transitions.spring} forwards;
  animation-delay: 0.38s;
`,yb=g.div`
  position: relative;
  min-height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    justify-content: center;
  }
`,xb=g.span`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({theme:n})=>n.colors.accentSky};
  animation: ${wp} 0.6s ${({theme:n})=>n.transitions.spring};
`,vb=g.p`
  color: ${({theme:n})=>n.colors.text2};
  font-size: ${({theme:n})=>n.typography.body};
  line-height: 1.78;
  max-width: 490px;
  opacity: 0;
  transform: translateY(20px);
  animation: ${ha} 0.75s ${({theme:n})=>n.transitions.spring} forwards;
  animation-delay: 0.52s;

  strong {
    color: ${({theme:n})=>n.colors.text};
    font-weight: 600;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    max-width: 520px;
  }
`,Sb=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  opacity: 0;
  transform: translateY(20px);
  animation: ${ha} 0.75s ${({theme:n})=>n.transitions.spring} forwards;
  animation-delay: 0.66s;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    justify-content: center;
  }
`,jb=g.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(20px);
  animation: ${ha} 0.75s ${({theme:n})=>n.transitions.spring} forwards;
  animation-delay: 0.82s;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    justify-content: center;
  }
`,Ou=g.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: ${({theme:n})=>n.radii.sm};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: ${({theme:n})=>n.colors.text3};
  transition: all ${({theme:n})=>n.transitions.default};

  &:hover {
    color: ${({theme:n})=>n.colors.text};
    border-color: rgba(20, 184, 166, 0.35);
    background: rgba(20, 184, 166, 0.08);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(20, 184, 166, 0.2);
  }
`,zb=g.div`
  width: 1px;
  height: 18px;
  background: ${({theme:n})=>n.colors.border};
  margin: 0 0.15rem;
`,wb=g.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.74rem;
  color: ${({theme:n})=>n.colors.text3};
`,Eb=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    order: -1;
  }
`,Ah=g.div`
  position: relative;
  width: 340px;
  height: 340px;
  max-width: 100%;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 195px;
    height: 195px;
  }
`,B1=g.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: ${jp} 18s linear infinite;

  &.ring1 {
    border: 1px solid rgba(20, 184, 166, 0.2);
  }

  &.ring2 {
    inset: -14px;
    border: 1px dashed rgba(6, 182, 212, 0.15);
    animation-duration: 26s;
    animation-direction: reverse;
  }
`,Ab=g.div`
  position: absolute;
  inset: -24px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%);
  animation: ${zp} 5s ease-in-out infinite;
`,Tb=g.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(20, 184, 166, 0.32);
  background: ${({theme:n})=>n.colors.bgCardSolid};
  box-shadow: 0 0 40px rgba(20, 184, 166, 0.15), inset 0 0 24px rgba(0, 0, 0, 0.35);
  transition: border-color 0.4s, box-shadow 0.4s;

  &:hover {
    border-color: rgba(20, 184, 166, 0.6);
    box-shadow: 0 0 60px rgba(20, 184, 166, 0.25), inset 0 0 24px rgba(0, 0, 0, 0.35);
  }

  picture, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.7s ${({theme:n})=>n.transitions.spring};
  }

  ${Ah}:hover & img {
    transform: scale(1.04);
  }
`,N1=g.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(6, 20, 45, 0.92);
  border: 1px solid rgba(20, 184, 166, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0.38rem 0.8rem;
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text};
  box-shadow: ${({theme:n})=>n.shadows.md};
  animation: ${jh} 4s ease-in-out infinite;

  &.tr {
    top: 8%;
    right: -4%;
    animation-delay: 0s;
  }

  &.bl {
    bottom: 13%;
    left: -4%;
    animation-delay: 2s;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    display: none;
  }
`,Cb=g.div`
  position: absolute;
  bottom: -4%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(6, 20, 45, 0.92);
  border: 1px solid rgba(20, 184, 166, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0.3rem 0.8rem;
  border-radius: 0.45rem;
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.62rem;
  color: ${({theme:n})=>n.colors.accentSky};
  white-space: nowrap;
  animation: ${jh} 4.5s ease-in-out infinite;
  animation-delay: 1s;

  span {
    color: ${({theme:n})=>n.colors.text3};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    display: none;
  }
`,Mb=g.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
`,$b=g.div`
  width: 20px;
  height: 32px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  position: relative;
`,Ob=g.div`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 6px;
  background: ${({theme:n})=>n.colors.accent};
  border-radius: ${({theme:n})=>n.radii.full};
  animation: ${Ep} 2.2s ease-in-out infinite;
`;function _b(){const n=I.useRef(null);return I.useEffect(()=>{const u=n.current;if(!u||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const d=u.getContext("2d");let s=[],h;const x=()=>{u.width=u.offsetWidth,u.height=u.offsetHeight};x();const E=()=>{const T=Math.floor(u.width*u.height/22e3);s=Array.from({length:T},()=>({x:Math.random()*u.width,y:Math.random()*u.height,r:Math.random()*1.1+.2,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,o:Math.random()*.35+.06}))};E();const _=()=>{d.clearRect(0,0,u.width,u.height),s.forEach(T=>{d.beginPath(),d.arc(T.x,T.y,T.r,0,Math.PI*2),d.fillStyle=`rgba(20, 184, 166, ${T.o})`,d.fill(),T.x+=T.vx,T.y+=T.vy,T.x<0&&(T.x=u.width),T.x>u.width&&(T.x=0),T.y<0&&(T.y=u.height),T.y>u.height&&(T.y=0)});for(let T=0;T<s.length;T++)for(let R=T+1;R<s.length;R++){const N=s[T].x-s[R].x,Z=s[T].y-s[R].y,G=Math.sqrt(N*N+Z*Z);G<100&&(d.beginPath(),d.moveTo(s[T].x,s[T].y),d.lineTo(s[R].x,s[R].y),d.strokeStyle=`rgba(20, 184, 166, ${.06*(1-G/100)})`,d.lineWidth=.4,d.stroke())}h=requestAnimationFrame(_)};_();const S=()=>{x(),E()};window.addEventListener("resize",S,{passive:!0});const v=()=>{document.hidden?cancelAnimationFrame(h):_()};return document.addEventListener("visibilitychange",v),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",S),document.removeEventListener("visibilitychange",v)}},[]),o.jsx(ob,{ref:n,"aria-hidden":"true"})}function Db(){const[n,u]=I.useState(0),d=I.useRef(null),s=I.useRef(null);I.useEffect(()=>{const x=setInterval(()=>u(E=>(E+1)%Mu.length),3e3);return()=>clearInterval(x)},[]),I.useEffect(()=>{const x=d.current,E=s.current;if(!x||!E||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const _=v=>{if(window.innerWidth<1024)return;const T=E.getBoundingClientRect(),R=Math.max(-1,Math.min(1,(v.clientX-(T.left+T.width/2))/(window.innerWidth/2))),N=Math.max(-1,Math.min(1,(v.clientY-(T.top+T.height/2))/(window.innerHeight/2)));x.style.transition="transform 120ms cubic-bezier(0.16,1,0.3,1)",x.style.transform=`perspective(1000px) rotateX(${(N*-5).toFixed(2)}deg) rotateY(${(R*5).toFixed(2)}deg)`},S=()=>{x.style.transition="transform 600ms cubic-bezier(0.16,1,0.3,1)",x.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)"};return document.addEventListener("mousemove",_),E.addEventListener("mouseleave",S),()=>{document.removeEventListener("mousemove",_),E.removeEventListener("mouseleave",S)}},[]);const h=x=>{const E=document.getElementById(x);E&&E.scrollIntoView({behavior:"smooth"})};return o.jsxs(ib,{id:"home","aria-label":"Introduction",children:[o.jsxs(rb,{"aria-hidden":"true",children:[o.jsx(_b,{}),o.jsx(cb,{}),o.jsx(ub,{}),o.jsx($u,{className:"glow1"}),o.jsx($u,{className:"glow2"}),o.jsx($u,{className:"glow3"})]}),o.jsxs(sb,{children:[o.jsxs(fb,{children:[o.jsxs(db,{children:[o.jsx(hb,{"aria-hidden":"true"}),o.jsx("span",{children:"Available for opportunities"})]}),o.jsxs(mb,{children:[o.jsx(gb,{children:"Hello, I am"}),o.jsx(R1,{children:"Granth"}),o.jsxs(R1,{className:"gradient",children:["Senjaliya",o.jsx(pb,{"aria-hidden":"true",children:"."})]})]}),o.jsx(bb,{children:o.jsx(yb,{"aria-live":"polite","aria-label":`Current role: ${Mu[n]}`,children:o.jsx(xb,{children:Mu[n]},n)})}),o.jsxs(vb,{children:["Computer Science Engineering student at ",o.jsx("strong",{children:"CHARUSAT"})," passionate about programming, web development, problem solving, and IoT. I turn ideas into practical projects and continuously sharpen my technical skills."]}),o.jsxs(Sb,{children:[o.jsxs(da,{$variant:"primary",href:"#projects",onClick:x=>{x.preventDefault(),h("projects")},children:["View My Work",o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",className:"arrow","aria-hidden":"true",children:[o.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),o.jsxs(da,{$variant:"outline",href:"#contact",onClick:x=>{x.preventDefault(),h("contact")},children:["Contact Me",o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",className:"arrow","aria-hidden":"true",children:[o.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),o.jsxs(jb,{children:[o.jsx(Ou,{href:"https://github.com/GranthSenjaliya88",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",children:o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"})})}),o.jsx(Ou,{href:"https://leetcode.com/u/Granth88/",target:"_blank",rel:"noopener noreferrer","aria-label":"LeetCode profile",children:o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"})})}),o.jsx(Ou,{href:"mailto:granthsenjaliya881@gmail.com","aria-label":"Send email",children:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),o.jsx(zb,{"aria-hidden":"true"}),o.jsxs(wb,{children:[o.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Gujarat, India"]})]})]}),o.jsx(Eb,{ref:s,"aria-hidden":"true",children:o.jsxs(Ah,{children:[o.jsx(B1,{className:"ring1"}),o.jsx(B1,{className:"ring2"}),o.jsx(Ab,{}),o.jsx(Tb,{ref:d,children:o.jsxs("picture",{children:[o.jsx("source",{type:"image/webp",srcSet:ab}),o.jsx("img",{src:nb,alt:"Granth Senjaliya — CSE Student and Developer",width:"340",height:"340",loading:"eager"})]})}),o.jsxs(N1,{className:"tr",children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("polyline",{points:"16 18 22 12 16 6"}),o.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"Developer"]}),o.jsxs(N1,{className:"bl",children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"12",r:"2"}),o.jsx("path",{d:"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49"})]}),"IoT Builder"]}),o.jsx(Cb,{"aria-hidden":"true",children:o.jsx("span",{children:"// keep_learning();"})})]})})]}),o.jsx(Mb,{href:"#about","aria-label":"Scroll down to About section",onClick:x=>{x.preventDefault(),h("about")},children:o.jsx($b,{children:o.jsx(Ob,{})})})]})}const Rb=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Ue(n={}){const u=I.useRef(null);return I.useEffect(()=>{const d=u.current;if(!d)return;if(Rb||!("IntersectionObserver"in window)){d.classList.add("visible");return}const s=new IntersectionObserver(h=>{h.forEach(x=>{if(x.isIntersecting){const E=Number(d.dataset.revealDelay||0);setTimeout(()=>d.classList.add("visible"),E),s.unobserve(d)}})},{threshold:.08,rootMargin:"0px 0px -40px 0px",...n});return s.observe(d),()=>s.disconnect()},[]),u}const Bb=g.div`
  text-align: center;
  margin-bottom: 3.75rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    margin-bottom: 2.75rem;
  }
`,Nb=g.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.tag};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.accent};
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.2);
  padding: 0.25rem 0.8rem;
  border-radius: ${({theme:n})=>n.radii.full};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`,Hb=g.h2`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: ${({theme:n})=>n.typography.h2};
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.035em;
  margin-bottom: 0.55rem;
  color: ${({theme:n})=>n.colors.text};
`,kb=g.p`
  color: ${({theme:n})=>n.colors.text3};
  font-size: ${({theme:n})=>n.typography.body};
  max-width: 460px;
  margin: 0 auto;
  line-height: 1.65;
`;function rn({tag:n,title:u,subtitle:d}){return o.jsxs(Bb,{children:[n&&o.jsx(Nb,{children:n}),o.jsx(Hb,{children:u}),d&&o.jsx(kb,{children:d})]})}const Ub=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: start;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`,Gb=g.div``,H1=g.p`
  color: ${({theme:n})=>n.colors.text2};
  margin-bottom: 1.1rem;
  font-size: ${({theme:n})=>n.typography.body};
  line-height: 1.78;

  strong {
    color: ${({theme:n})=>n.colors.text};
    font-weight: 600;
  }
`,Yb=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.25rem;
`,qb=g.span`
  font-size: 0.76rem;
  font-weight: 500;
  padding: 0.28rem 0.72rem;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.16);
  color: ${({theme:n})=>n.colors.text2};
  border-radius: ${({theme:n})=>n.radii.full};
  transition: all 0.2s ${({theme:n})=>n.transitions.spring};

  &:hover {
    background: rgba(20, 184, 166, 0.16);
    color: ${({theme:n})=>n.colors.text};
  }
`,Lb=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Xb=g.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1.15rem;
  background: ${({theme:n})=>n.colors.bgCard};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.md};
  transition: all ${({theme:n})=>n.transitions.default};

  &:hover {
    border-color: ${({theme:n})=>n.colors.borderAccent};
    background: ${({theme:n})=>n.colors.bgCardHover};
    transform: translateY(-3px);
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,Qb=g.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: ${({theme:n})=>n.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.16);
  color: ${({theme:n})=>n.colors.accent};
`,Vb=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`,Zb=g.span`
  font-size: ${({theme:n})=>n.typography.small};
  font-weight: 700;
  color: ${({theme:n})=>n.colors.text};
`,Kb=g.span`
  font-size: 0.72rem;
  color: ${({theme:n})=>n.colors.text3};
`,Jb=[{icon:o.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M22 10v6M2 10l10-5 10 5-10 5z"}),o.jsx("path",{d:"M6 12v5c3 3 9 3 12 0v-5"})]}),label:"CSE Student",sub:"CHARUSAT · 2025 Batch"},{icon:o.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),o.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),o.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),o.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),label:"Multiple Projects",sub:"Web, IoT & Electronics"},{icon:o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),label:"DSA Learner",sub:"Algorithms & Problem Solving"},{icon:o.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"12",r:"2"}),o.jsx("path",{d:"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"})]}),label:"IoT Enthusiast",sub:"Arduino · ESP32 · ESP8266"}],Wb=["CHARUSAT","CSE 2025","Builder","DSA","IoT","Web Dev"];function Fb(){const n=Ue(),u=Ue();return o.jsx(Wr,{id:"about","aria-labelledby":"about-heading",children:o.jsxs(Je,{children:[o.jsx(rn,{tag:"About Me",title:"Who I Am",subtitle:"A glimpse into my background & philosophy"}),o.jsxs(Ub,{children:[o.jsxs(Gb,{ref:n,className:"reveal",children:[o.jsxs(H1,{children:["I am ",o.jsx("strong",{children:"Granth Senjaliya"}),", a Computer Science Engineering student at ",o.jsx("strong",{children:"CHARUSAT"}),". I am passionate about software development, data structures, web technologies, and IoT. I enjoy learning new technologies and building projects that solve real problems."]}),o.jsxs(H1,{children:["Currently in my ",o.jsx("strong",{children:"CSE 2025 batch"}),", I am continuously levelling up — mastering algorithms, building web apps, and experimenting with embedded systems like Arduino and ESP32. I believe in clean code and solutions that truly matter."]}),o.jsx(Yb,{role:"list","aria-label":"Skills and interests",children:Wb.map(d=>o.jsx(qb,{role:"listitem",children:d},d))})]}),o.jsx(Lb,{ref:u,className:"reveal",children:Jb.map(d=>o.jsxs(Xb,{children:[o.jsx(Qb,{"aria-hidden":"true",children:d.icon}),o.jsxs(Vb,{children:[o.jsx(Zb,{children:d.label}),o.jsx(Kb,{children:d.sub})]})]},d.label))})]})]})})}const Ib=[{id:"programming",title:"Programming",iconType:"code",skills:[{name:"C",logoClass:"skC",color:"#a8b9cc"},{name:"C++",logoClass:"skCpp",color:"#659ad3"},{name:"Java",logoClass:"skJava",color:"#ea2d2e"},{name:"DSA",logoClass:"skDsa",color:"#06b6d4"},{name:"Problem Solving",logoClass:"skPs",color:"#10b981"}]},{id:"webdev",title:"Web Development",iconType:"globe",skills:[{name:"HTML5",logoClass:"skHtml",color:"#e44d26"},{name:"CSS3",logoClass:"skCss",color:"#1572b6"},{name:"JavaScript",logoClass:"skJs",color:"#f0db4f"},{name:"Responsive",logoClass:"skResp",color:"#8b5cf6"},{name:"UI/UX",logoClass:"skUx",color:"#ec4899"}]},{id:"iot",title:"Hardware / IoT",iconType:"chip",skills:[{name:"Arduino",logoClass:"skArd",color:"#00979c"},{name:"ESP32",logoClass:"skEsp",color:"#e53e3e",label:"ESP32"},{name:"ESP8266",logoClass:"skEsp",color:"#e53e3e",label:"8266"},{name:"Sensors",logoClass:"skSensor",color:"#10b981"},{name:"IoT Projects",logoClass:"skIot",color:"#06b6d4"}]},{id:"tools",title:"Tools",iconType:"tool",skills:[{name:"Git",logoClass:"skGit",color:"#f34f29"},{name:"GitHub",logoClass:"skGh",color:"#ffffff"},{name:"VS Code",logoClass:"skVsc",color:"#0065a9"},{name:"Arduino IDE",logoClass:"skArd",color:"#00979c"},{name:"Figma",logoClass:"skFig",color:"#a259ff"}]}],Pb=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Th(){const n=I.useRef(null);return I.useEffect(()=>{const u=n.current;if(!u||Pb||window.matchMedia("(hover: none)").matches)return;const s=3.5,h="transform 120ms cubic-bezier(0.16,1,0.3,1)",x="transform 480ms cubic-bezier(0.16,1,0.3,1)",E=()=>{u.style.transition=h},_=v=>{const T=u.getBoundingClientRect(),R=v.clientX-T.left,Z=(v.clientY-T.top-T.height/2)/(T.height/2)*-s,G=(R-T.width/2)/(T.width/2)*s;u.style.transform=`perspective(900px) rotateX(${Z.toFixed(2)}deg) rotateY(${G.toFixed(2)}deg) translateY(-4px)`},S=()=>{u.style.transition=x,u.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)"};return u.addEventListener("mouseenter",E),u.addEventListener("mousemove",_),u.addEventListener("mouseleave",S),()=>{u.removeEventListener("mouseenter",E),u.removeEventListener("mousemove",_),u.removeEventListener("mouseleave",S)}},[]),n}const ty=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,ey=g.div`
  background: ${({theme:n})=>n.colors.bgCard};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.lg};
  padding: 1.75rem;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({theme:n})=>n.colors.borderAccent};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: 1.35rem;
  }
`,ly=g.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`,ay=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:n})=>n.radii.sm};
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.2);
  color: ${({theme:n})=>n.colors.accent};
`,ny=g.h3`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.text};
  letter-spacing: -0.01em;
`,iy=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 0.75rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: 0.55rem;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
  }
`,Fr=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  padding: 0.95rem 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.md};
  min-width: 0;
  transition: all ${({theme:n})=>n.transitions.default};
  position: relative;
  overflow: hidden;
  cursor: default;

  &:hover {
    background: rgba(20, 184, 166, 0.08);
    border-color: rgba(20, 184, 166, 0.35);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(20, 184, 166, 0.15);
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: 0.75rem 0.65rem;
  }
`,ry=g.div`
  width: 48px;
  height: 48px;
  border-radius: ${({theme:n})=>n.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  transition: transform ${({theme:n})=>n.transitions.default};

  ${Fr}:hover & {
    transform: translateY(-2px) scale(1.06);
  }
`,oy=g.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text3};
  text-align: center;
  transition: color 0.2s;

  ${Fr}:hover & {
    color: ${({theme:n})=>n.colors.text};
  }
`,cy=g.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, 0.05) 50%, transparent 62%);
  transform: translateX(-100%);
  transition: transform 0.55s ease;
  pointer-events: none;

  ${Fr}:hover & {
    transform: translateX(100%);
  }
`,uy={programming:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("polyline",{points:"16 18 22 12 16 6"}),o.jsx("polyline",{points:"8 6 2 12 8 18"})]}),webdev:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),o.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),iot:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),o.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),tools:o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})};function sy({skill:n}){const u=n.color||"#14b8a6",d=n.label||n.name.slice(0,5);return o.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{width:"36",height:"36",rx:"8",fill:u,fillOpacity:"0.15"}),o.jsx("text",{x:"18",y:"23",textAnchor:"middle",fontFamily:"JetBrains Mono,monospace",fontSize:"8",fontWeight:"700",fill:u,children:d})]})}function fy({skill:n}){const u=Th();return o.jsxs(Fr,{ref:u,"aria-label":n.name,children:[o.jsx(ry,{children:o.jsx(sy,{skill:n})}),o.jsx(oy,{children:n.name}),o.jsx(cy,{"aria-hidden":"true"})]})}function dy({cat:n}){const u=Ue();return o.jsxs(ey,{ref:u,className:"reveal",children:[o.jsxs(ly,{children:[o.jsx(ay,{"aria-hidden":"true",children:uy[n.id]}),o.jsx(ny,{id:`skills-${n.id}`,children:n.title})]}),o.jsx(iy,{role:"list","aria-labelledby":`skills-${n.id}`,children:n.skills.map(d=>o.jsx("div",{role:"listitem",children:o.jsx(fy,{skill:d})},d.name))})]})}function hy(){const n=Ue();return o.jsx(Jr,{id:"skills","aria-labelledby":"skills-heading",children:o.jsxs(Je,{children:[o.jsx("div",{ref:n,className:"reveal",children:o.jsx(rn,{tag:"Skills",title:"My Tech Stack",subtitle:"Authentic tools & technologies I engineer with"})}),o.jsx(ty,{children:Ib.map(u=>o.jsx(dy,{cat:u},u.id))})]})})}const k1=[{id:1,title:"ESP32 Voice Controlled Home Automation",category:"IoT / Embedded Systems",description:"IoT-based home automation using ESP32 and voice commands to control household appliances remotely over Wi-Fi with instant response feedback.",what:"Voice-enabled smart home relay control system.",why:"Enables hands-free, accessible remote appliance switching.",how:"ESP32 microcontroller, voice parsing, Wi-Fi websockets, relay board.",tags:["ESP32","IoT","Voice Module","Arduino"],tagType:"iot",featured:!0,visualType:"iot",githubUrl:"https://github.com/GranthSenjaliya88",liveUrl:null,typeLabel:"Hardware Project",typeIcon:"hardware"},{id:2,title:"Farmer Guide Website",category:"Web Development",description:"A Gujarati-language farming web guide delivering crucial information regarding crops, pest management, fertilizers, and agricultural government schemes.",what:"Gujarati language portal for regional farmers.",why:"Bridges language barriers for local agricultural advisory.",how:"Semantic HTML5, CSS3 layout, vanilla JS logic.",tags:["HTML","CSS","JavaScript"],tagType:"web",featured:!1,visualType:"web",githubUrl:"https://github.com/GranthSenjaliya88",liveUrl:null,typeLabel:"Web Application",typeIcon:"web"},{id:3,title:"Digital Voting System",category:"Digital Electronics",description:"Digital voting machine using push buttons, counters, 7-segment displays, logic gates, and debouncing circuits for accurate vote processing.",what:"Hardware electronic vote counting circuit.",why:"Ensures reliable, debounced digital ballot tallies.",how:"CD4026 IC counters, 7-segment displays, logic gates.",tags:["Digital Electronics","Logic Gates","CD4026"],tagType:"elec",featured:!1,visualType:"elec",githubUrl:"https://github.com/GranthSenjaliya88",liveUrl:null,typeLabel:"Hardware Project",typeIcon:"hardware"}],my=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,is=g.article`
  background: ${({theme:n})=>n.colors.bgCard};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.32s ${({theme:n})=>n.transitions.spring};

  &:hover {
    border-color: ${({theme:n})=>n.colors.borderAccent};
    transform: translateY(-5px);
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }

  ${({$isFeatured:n})=>n&&dt`
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: stretch;

      @media (max-width: ${({theme:u})=>u.breakpoints.lg}) {
        grid-column: 1;
        grid-template-columns: 1fr;
      }
    `}

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    border-radius: ${({theme:n})=>n.radii.md};
  }
`,gy=g.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`,py=g.div`
  height: 240px;
  flex: 1;
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.55s ${({theme:n})=>n.transitions.spring};

  ${is}:hover & {
    transform: scale(1.03);
  }

  ${({$visualType:n})=>n==="iot"&&dt`
      background: linear-gradient(135deg, #040d1a, #06203a);
    `}

  ${({$visualType:n})=>n==="web"&&dt`
      background: linear-gradient(135deg, #071428, #052636);
    `}

  ${({$visualType:n})=>n==="elec"&&dt`
      background: linear-gradient(135deg, #040d1a, #1a0b2e);
    `}

  ${({$isFeatured:n})=>n&&dt`
      height: 100%;
      min-height: 280px;
    `}
`,by=g.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(4, 13, 26, 0.4), transparent);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;

  ${is}:hover & {
    opacity: 1;
  }
`,yy=g.div`
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  z-index: 5;
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.text3};
  background: rgba(4, 13, 26, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.18rem 0.5rem;
  border-radius: ${({theme:n})=>n.radii.full};
  backdrop-filter: blur(8px);
`,xy=g.div`
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  z-index: 5;
  background: ${({theme:n})=>n.gradients.primary};
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.22rem 0.65rem;
  border-radius: ${({theme:n})=>n.radii.full};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,vy=g.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: 1.15rem;
  }
`,Sy=g.div`
  font-size: ${({theme:n})=>n.typography.tag};
  font-weight: 600;
  font-family: ${({theme:n})=>n.fonts.mono};
  color: ${({theme:n})=>n.colors.text3};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,jy=g.h3`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({theme:n})=>n.colors.text};
  line-height: 1.28;
  letter-spacing: -0.02em;
`,zy=g.p`
  font-size: 0.86rem;
  color: ${({theme:n})=>n.colors.text2};
  line-height: 1.65;
`,wy=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.85rem 0.95rem;
  background: rgba(6, 20, 45, 0.6);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.sm};
`,_u=g.div`
  font-size: 0.78rem;
  color: ${({theme:n})=>n.colors.text2};
  line-height: 1.5;

  strong {
    font-family: ${({theme:n})=>n.fonts.mono};
    font-size: 0.68rem;
    color: ${({theme:n})=>n.colors.accentSky};
    background: rgba(6, 182, 212, 0.08);
    border: 1px solid rgba(6, 182, 212, 0.2);
    padding: 0.08rem 0.38rem;
    border-radius: 0.25rem;
    letter-spacing: 0.04em;
    margin-right: 0.35rem;
  }
`,Ey=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
`,Ay=g.span`
  font-size: ${({theme:n})=>n.typography.tag};
  font-weight: 600;
  font-family: ${({theme:n})=>n.fonts.mono};
  padding: 0.2rem 0.55rem;
  border-radius: ${({theme:n})=>n.radii.full};
  letter-spacing: 0.03em;

  ${({$type:n})=>n==="iot"&&dt`
      background: rgba(6, 182, 212, 0.08);
      color: #22d3ee;
      border: 1px solid rgba(6, 182, 212, 0.2);
    `}

  ${({$type:n})=>n==="web"&&dt`
      background: rgba(251, 191, 36, 0.08);
      color: #fbbf24;
      border: 1px solid rgba(251, 191, 36, 0.2);
    `}

  ${({$type:n})=>n==="elec"&&dt`
      background: rgba(168, 85, 247, 0.08);
      color: #c084fc;
      border: 1px solid rgba(168, 85, 247, 0.2);
    `}
`,Ty=g.div`
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  align-items: center;
`,U1=g.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.42rem 0.9rem;
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: 0.78rem;
  font-weight: 600;
  transition: all ${({theme:n})=>n.transitions.default};
  text-decoration: none;

  ${({$variant:n,theme:u})=>n==="github"&&dt`
      background: rgba(255, 255, 255, 0.04);
      color: ${u.colors.text2};
      border: 1px solid rgba(255, 255, 255, 0.08);

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        color: ${u.colors.text};
        border-color: rgba(255, 255, 255, 0.18);
      }
    `}

  ${({$variant:n,theme:u})=>n==="demo"&&dt`
      background: rgba(20, 184, 166, 0.08);
      color: ${u.colors.accent};
      border: 1px solid rgba(20, 184, 166, 0.2);

      &:hover {
        background: rgba(20, 184, 166, 0.18);
        border-color: ${u.colors.accent};
      }
    `}
`,Cy=g.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.74rem;
  color: ${({theme:n})=>n.colors.text3};
  padding: 0.42rem 0.9rem;
  border-radius: ${({theme:n})=>n.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.05);
`,My=g.div`
  position: relative;
  width: 200px;
  height: 200px;
  z-index: 2;
`,li=g.div`
  position: absolute;
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: ${({theme:n})=>n.colors.accentSky};
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.64rem;
  font-weight: 700;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  white-space: nowrap;
  animation: ${Ap} 3.5s ease-in-out infinite;

  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(20, 184, 166, 0.15);
    border-color: rgba(20, 184, 166, 0.45);
    color: ${({theme:n})=>n.colors.accent};
    font-size: 0.72rem;
  }

  &.top {
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0.5s;
  }

  &.right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    animation-delay: 1s;
  }

  &.bottom {
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 1.5s;
  }

  &.left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    animation-delay: 2s;
  }
`,$y=g.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;function Oy(){return o.jsxs(My,{"aria-hidden":"true",children:[o.jsx(li,{className:"center",children:"ESP32"}),o.jsx(li,{className:"top",children:"Voice"}),o.jsx(li,{className:"right",children:"Wi-Fi"}),o.jsx(li,{className:"bottom",children:"Relay"}),o.jsx(li,{className:"left",children:"Device"}),o.jsxs($y,{viewBox:"0 0 200 200",children:[o.jsx("line",{x1:"100",y1:"100",x2:"100",y2:"40",stroke:"#06b6d4",strokeWidth:"1",strokeDasharray:"4 2",opacity:"0.6"}),o.jsx("line",{x1:"100",y1:"100",x2:"155",y2:"100",stroke:"#06b6d4",strokeWidth:"1",strokeDasharray:"4 2",opacity:"0.6"}),o.jsx("line",{x1:"100",y1:"100",x2:"100",y2:"160",stroke:"#06b6d4",strokeWidth:"1",strokeDasharray:"4 2",opacity:"0.6"}),o.jsx("line",{x1:"100",y1:"100",x2:"45",y2:"100",stroke:"#06b6d4",strokeWidth:"1",strokeDasharray:"4 2",opacity:"0.6"})]})]})}const _y=g.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 0.55rem;
  width: 240px;
  overflow: hidden;
`,Dy=g.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 0.7rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
`,Du=g.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;

  &.red { background: #ff5f57; }
  &.yellow { background: #febc2e; }
  &.green { background: #28c840; }
`,Ry=g.span`
  margin-left: 0.4rem;
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.63rem;
  color: ${({theme:n})=>n.colors.text3};
  flex: 1;
  text-align: center;
`,By=g.div`
  padding: 0.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,Ru=g.div`
  height: 7px;
  border-radius: ${({theme:n})=>n.radii.full};
  background: rgba(255, 255, 255, 0.045);
  animation: ${zh} 2.5s ease-in-out infinite;
  width: ${({$width:n})=>n||"100%"};
`,Ny=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3rem;
`,Bu=g.div`
  height: 28px;
  background: rgba(20, 184, 166, 0.06);
  border: 1px solid rgba(20, 184, 166, 0.1);
  border-radius: 0.35rem;
  animation: ${zh} 2.5s ease-in-out infinite;
`;function Hy(){return o.jsxs(_y,{"aria-hidden":"true",children:[o.jsxs(Dy,{children:[o.jsx(Du,{className:"red"}),o.jsx(Du,{className:"yellow"}),o.jsx(Du,{className:"green"}),o.jsx(Ry,{children:"farmer-guide.local"})]}),o.jsxs(By,{children:[o.jsx(Ru,{$width:"90%"}),o.jsx(Ru,{$width:"65%"}),o.jsxs(Ny,{children:[o.jsx(Bu,{}),o.jsx(Bu,{}),o.jsx(Bu,{})]}),o.jsx(Ru,{$width:"40%"})]})]})}const ky=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  z-index: 2;
`,Uy=g.div`
  display: flex;
  gap: 0.45rem;
`,Gy=g.div`
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.63rem;
  color: ${({theme:n})=>n.colors.accentSky};
  letter-spacing: 0.06em;
`;function Yy(){return o.jsxs(ky,{"aria-hidden":"true",children:[o.jsxs(Uy,{children:[o.jsxs("svg",{viewBox:"0 0 60 90",width:"50",height:"75",children:[o.jsx("rect",{x:"8",y:"2",width:"44",height:"8",rx:"4",fill:"#06B6D4",opacity:"0.9"}),o.jsx("rect",{x:"2",y:"8",width:"8",height:"36",rx:"4",fill:"#7C3AED",opacity:"0.7"}),o.jsx("rect",{x:"50",y:"8",width:"8",height:"36",rx:"4",fill:"#7C3AED",opacity:"0.9"}),o.jsx("rect",{x:"8",y:"41",width:"44",height:"8",rx:"4",fill:"#06B6D4",opacity:"0.8"}),o.jsx("rect",{x:"2",y:"46",width:"8",height:"36",rx:"4",fill:"#06B6D4",opacity:"0.6"}),o.jsx("rect",{x:"50",y:"46",width:"8",height:"36",rx:"4",fill:"#06B6D4",opacity:"0.9"}),o.jsx("rect",{x:"8",y:"80",width:"44",height:"8",rx:"4",fill:"#7C3AED",opacity:"0.7"})]}),o.jsxs("svg",{viewBox:"0 0 60 90",width:"50",height:"75",children:[o.jsx("rect",{x:"8",y:"2",width:"44",height:"8",rx:"4",fill:"#06B6D4",opacity:"0.5"}),o.jsx("rect",{x:"2",y:"8",width:"8",height:"36",rx:"4",fill:"#7C3AED",opacity:"0.9"}),o.jsx("rect",{x:"50",y:"8",width:"8",height:"36",rx:"4",fill:"#7C3AED",opacity:"0.6"}),o.jsx("rect",{x:"8",y:"41",width:"44",height:"8",rx:"4",fill:"#06B6D4",opacity:"0.9"}),o.jsx("rect",{x:"2",y:"46",width:"8",height:"36",rx:"4",fill:"#06B6D4",opacity:"0.9"}),o.jsx("rect",{x:"50",y:"46",width:"8",height:"36",rx:"4",fill:"#06B6D4",opacity:"0.4"}),o.jsx("rect",{x:"8",y:"80",width:"44",height:"8",rx:"4",fill:"#7C3AED",opacity:"0.9"})]})]}),o.jsx(Gy,{children:"CD4026 Counter"})]})}const qy={iot:Oy,web:Hy,elec:Yy};function G1({project:n,isFeatured:u}){const d=Th(),s=Ue(),h=qy[n.visualType]||(()=>null),x=E=>{d.current=E,s.current=E};return o.jsxs(is,{ref:x,$isFeatured:u,className:"reveal","aria-label":n.title,children:[o.jsxs(gy,{children:[o.jsxs(py,{$visualType:n.visualType,$isFeatured:u,children:[o.jsx(by,{"aria-hidden":"true"}),o.jsx(h,{})]}),o.jsx(yy,{"aria-hidden":"true",children:String(n.id).padStart(2,"0")}),u&&o.jsx(xy,{children:"Featured"})]}),o.jsxs(vy,{children:[o.jsx(Sy,{children:n.category}),o.jsx(jy,{children:n.title}),o.jsx(zy,{children:n.description}),o.jsxs(wy,{children:[o.jsxs(_u,{children:[o.jsx("strong",{children:"WHAT:"})," ",n.what]}),o.jsxs(_u,{children:[o.jsx("strong",{children:"WHY:"})," ",n.why]}),o.jsxs(_u,{children:[o.jsx("strong",{children:"HOW:"})," ",n.how]})]}),o.jsx(Ey,{children:n.tags.map(E=>o.jsx(Ay,{$type:n.tagType,children:E},E))}),o.jsxs(Ty,{children:[n.githubUrl&&o.jsxs(U1,{$variant:"github",href:n.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[o.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"})}),"View Code"]}),n.liveUrl&&o.jsxs(U1,{$variant:"demo",href:n.liveUrl,target:"_blank",rel:"noopener noreferrer",children:["Live Demo",o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),o.jsx("polyline",{points:"7 7 17 7 17 17"})]})]}),o.jsxs(Cy,{children:[n.typeIcon==="hardware"?o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),o.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}):o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"})]}),n.typeLabel]})]})]})]})}function Ly(){const n=Ue(),u=k1.find(s=>s.featured),d=k1.filter(s=>!s.featured);return o.jsx(Wr,{id:"projects","aria-labelledby":"projects-heading",children:o.jsxs(Je,{children:[o.jsx("div",{ref:n,className:"reveal",children:o.jsx(rn,{tag:"Projects",title:"What I Have Built",subtitle:"Real-world applications engineered for impact"})}),o.jsxs(my,{children:[u&&o.jsx(G1,{project:u,isFeatured:!0}),d.map(s=>o.jsx(G1,{project:s,isFeatured:!1},s.id))]}),o.jsx(_p,{children:o.jsxs(da,{$variant:"outline",href:"https://github.com/GranthSenjaliya88",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"})}),"View All on GitHub",o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",className:"arrow","aria-hidden":"true",children:[o.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]})})}const Xy=[{id:1,label:"Arrays & Strings",iconType:"list"},{id:2,label:"Linked Lists",iconType:"link"},{id:3,label:"Searching",iconType:"search"},{id:4,label:"Sorting",iconType:"sort"},{id:5,label:"Two Pointers",iconType:"twoptr"},{id:6,label:"Recursion",iconType:"recurse"},{id:7,label:"Stack & Queue",iconType:"wave"},{id:8,label:"Trees",iconType:"tree"}],Qy=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,Vy=g.div`
  background: ${({theme:n})=>n.colors.bgCard};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:n})=>n.shadows.md};
`,Zy=g.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
`,Nu=g.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  &.red { background: #ff5f57; }
  &.yellow { background: #febc2e; }
  &.green { background: #28c840; }
`,Ky=g.span`
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.72rem;
  color: ${({theme:n})=>n.colors.text3};
  margin-left: 0.5rem;
`,Jy=g.div`
  padding: 1.25rem 1.35rem;
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.82rem;
  line-height: 1.8;
  background: rgba(4, 13, 26, 0.6);
`,pe=g.div`
  white-space: pre-wrap;
`,ai=g.span`
  color: #5a6373;
  font-style: italic;
`,_r=g.span`
  color: #c792ea;
  font-weight: 600;
`,Wy=g.span`
  color: #c3e88d;
`,Y1=g.span`
  color: #80deea;
`,Fy=g.span`
  color: #82aaff;
  font-weight: 600;
`,Iy=g.span`
  color: #f78c6c;
`,Py=g.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background: ${({theme:n})=>n.colors.accentSky};
  vertical-align: middle;
  animation: ${Tp} 1.1s step-end infinite;
`,t5=g.div``,e5=g.a`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1.15rem;
  background: ${({theme:n})=>n.colors.bgCard};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.md};
  margin-bottom: 1.25rem;
  transition: all ${({theme:n})=>n.transitions.default};
  text-decoration: none;

  &:hover {
    border-color: ${({theme:n})=>n.colors.borderAccent};
    transform: translateY(-2px);
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,l5=g.div`
  width: 48px;
  height: 48px;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(255, 161, 22, 0.08);
  color: #ffa11a;
`,a5=g.div`
  h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({theme:n})=>n.colors.text};
    margin-bottom: 0.15rem;
  }

  p {
    font-size: 0.78rem;
    color: ${({theme:n})=>n.colors.text3};
  }
`,n5=g.span`
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.accent};
  margin-top: 0.3rem;
`,i5=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,r5=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem;
  background: ${({theme:n})=>n.colors.bgCard};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 0.45rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.text2};
  transition: all 0.22s ${({theme:n})=>n.transitions.spring};

  svg {
    color: ${({theme:n})=>n.colors.accent};
    flex-shrink: 0;
  }

  &:hover {
    border-color: rgba(20, 184, 166, 0.3);
    color: ${({theme:n})=>n.colors.text};
    transform: translateX(3px);
  }
`,o5=({type:n})=>({list:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),o.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),o.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),o.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),o.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),o.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),link:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),o.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),search:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),sort:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"m3 16 4 4 4-4"}),o.jsx("path",{d:"M7 20V4"}),o.jsx("path",{d:"m21 8-4-4-4 4"}),o.jsx("path",{d:"M17 4v16"})]}),twoptr:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("polyline",{points:"17 1 21 5 17 9"}),o.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),o.jsx("polyline",{points:"7 23 3 19 7 15"}),o.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),recurse:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("polyline",{points:"17 1 21 5 17 9"}),o.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"})]}),wave:o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),tree:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 1-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})})[n]||null;function c5(){const n=Ue(),u=Ue();return o.jsx(Jr,{id:"dsa","aria-labelledby":"dsa-heading",children:o.jsxs(Je,{children:[o.jsx(rn,{tag:"Coding",title:"DSA & Problem Solving",subtitle:"Core computer science fundamentals & problem solving"}),o.jsxs(Qy,{children:[o.jsx("div",{ref:n,className:"reveal",children:o.jsxs(Vy,{children:[o.jsxs(Zy,{"aria-hidden":"true",children:[o.jsx(Nu,{className:"red"}),o.jsx(Nu,{className:"yellow"}),o.jsx(Nu,{className:"green"}),o.jsx(Ky,{children:"problem_solve.cpp"})]}),o.jsxs(Jy,{role:"img","aria-label":"Code snippet showing DSA practice in C++",children:[o.jsx(pe,{children:o.jsx(ai,{children:"// Actively practicing DSA"})}),o.jsxs(pe,{children:[o.jsx(_r,{children:"#include"})," ",o.jsx(Wy,{children:"<bits/stdc++.h>"})]}),o.jsxs(pe,{children:[o.jsx(_r,{children:"using namespace"})," ",o.jsx(Y1,{children:"std"}),";"]}),o.jsx(pe,{children:" "}),o.jsx(pe,{children:o.jsx(ai,{children:"// Topics covered:"})}),o.jsx(pe,{children:o.jsx(ai,{children:"// Arrays · Strings · Linked Lists"})}),o.jsx(pe,{children:o.jsx(ai,{children:"// Sorting · Searching · Two Pointers"})}),o.jsx(pe,{children:o.jsx(ai,{children:"// Recursion · Stack · Queue"})}),o.jsx(pe,{children:" "}),o.jsxs(pe,{children:[o.jsx(_r,{children:"int"})," ",o.jsx(Fy,{children:"main"}),"() ","{"]}),o.jsxs(pe,{children:["  ",o.jsx(Y1,{children:"keep_learning"}),"();"]}),o.jsxs(pe,{children:["  ",o.jsx(_r,{children:"return"})," ",o.jsx(Iy,{children:"0"}),";"]}),o.jsx(pe,{children:"}"}),o.jsx(pe,{children:o.jsx(Py,{"aria-hidden":"true"})})]})]})}),o.jsxs(t5,{ref:u,className:"reveal",children:[o.jsxs(e5,{href:"https://leetcode.com/u/Granth88/",target:"_blank",rel:"noopener noreferrer",children:[o.jsx(l5,{"aria-hidden":"true",children:o.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"})})}),o.jsxs(a5,{children:[o.jsx("h4",{children:"LeetCode Profile"}),o.jsx("p",{children:"Practicing algorithmic problem solving"}),o.jsx(n5,{children:"View Profile →"})]})]}),o.jsx(i5,{role:"list","aria-label":"DSA topics covered",children:Xy.map(d=>o.jsxs(r5,{role:"listitem",children:[o.jsx(o5,{type:d.iconType}),o.jsx("span",{children:d.label})]},d.id))})]})]})]})})}const u5=[{id:1,institution:"CHARUSAT University",degree:"Bachelor of Engineering",field:"Computer Science Engineering",batch:"CSE · 2025 Batch",period:"2022 — Present",status:"active",statusLabel:"Currently Enrolled",type:"university",highlights:["Algorithms","Web Dev","IoT","DSA","Digital Electronics"]},{id:2,institution:"Aspire Public School",degree:"Higher Secondary School (12th)",field:"Science Stream",batch:"GSEB · Passed 2025",period:"2023 — 2025",status:"done",statusLabel:"Completed 2025",type:"school",highlights:[]},{id:3,institution:"Aspire Public School",degree:"Secondary School (10th)",field:"GSEB Board",batch:"Percentage: 87%",period:"Passed 2023",status:"done",statusLabel:"Completed 2023",type:"school",highlights:[],score:"87%"}],s5=g.div`
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  padding-left: 2.75rem;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({theme:n})=>n.gradients.timeline};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding-left: 2.25rem;
    max-width: 100%;
  }
`,f5=g.div`
  position: relative;
  margin-bottom: 1.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`,d5=g.div`
  position: absolute;
  left: -2.55rem;
  top: 1.5rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({theme:n})=>n.colors.bgCardSolid};
  border: 2px solid ${({theme:n})=>n.colors.text3};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({$isActive:n,theme:u})=>n&&dt`
      border-color: ${u.colors.accent};
      background: rgba(20, 184, 166, 0.2);
    `}

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    left: -2.05rem;
  }
`,h5=g.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:n})=>n.colors.accent};
  animation: ${Cp} 2.5s ease-in-out infinite;
`,m5=g.div`
  background: ${({theme:n})=>n.colors.bgCard};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-left: 3px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:n})=>n.radii.md};
  padding: 1.4rem;
  transition: all 0.3s ${({theme:n})=>n.transitions.spring};
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${({theme:n})=>n.colors.borderAccent};
    transform: translateX(5px);
    box-shadow: ${({theme:n})=>n.shadows.md};
  }

  ${({$isActive:n,theme:u})=>n&&dt`
      border-left-color: ${u.colors.accent};
    `}
`,g5=g.div`
  position: absolute;
  top: 1.15rem;
  right: 1.15rem;
  font-family: ${({theme:n})=>n.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.text3};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.18rem 0.55rem;
  border-radius: ${({theme:n})=>n.radii.full};
`,p5=g.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`,b5=g.div`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: ${({theme:n})=>n.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.18);
  color: ${({theme:n})=>n.colors.accent};
`,y5=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
`,x5=g.span`
  font-size: 0.74rem;
  color: ${({theme:n})=>n.colors.text3};
  font-weight: 500;
`,v5=g.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.tag};
  font-weight: 700;
  padding: 0.16rem 0.55rem;
  border-radius: ${({theme:n})=>n.radii.full};
  letter-spacing: 0.05em;
  width: fit-content;

  ${({$status:n,theme:u})=>n==="active"?dt`
          background: rgba(52, 211, 153, 0.1);
          color: ${u.colors.accentEmerald};
          border: 1px solid rgba(52, 211, 153, 0.25);
        `:dt`
          background: rgba(148, 163, 184, 0.05);
          color: ${u.colors.text3};
          border: 1px solid rgba(148, 163, 184, 0.12);
        `}
`,S5=g.h3`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({theme:n})=>n.colors.text};
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
`,j5=g.p`
  font-size: 0.9rem;
  color: ${({theme:n})=>n.colors.text2};
  margin-bottom: 0.15rem;
`,z5=g.p`
  font-size: 0.76rem;
  color: ${({theme:n})=>n.colors.text3};
  font-family: ${({theme:n})=>n.fonts.mono};
  margin-bottom: 0.65rem;

  strong {
    color: ${({theme:n})=>n.colors.accentEmerald};
  }
`,w5=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`,E5=g.span`
  font-size: ${({theme:n})=>n.typography.tag};
  font-weight: 600;
  padding: 0.16rem 0.5rem;
  background: rgba(20, 184, 166, 0.06);
  border: 1px solid rgba(20, 184, 166, 0.14);
  color: ${({theme:n})=>n.colors.accent};
  border-radius: ${({theme:n})=>n.radii.full};
`,A5=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M22 10v6M2 10l10-5 10 5-10 5z"}),o.jsx("path",{d:"M6 12v5c3 3 9 3 12 0v-5"})]}),T5=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]});function C5(){const n=Ue(),u=Ue();return o.jsx(Wr,{id:"education","aria-labelledby":"education-heading",children:o.jsxs(Je,{children:[o.jsx("div",{ref:n,className:"reveal",children:o.jsx(rn,{tag:"Education",title:"Academic Journey",subtitle:"Verified academic qualifications"})}),o.jsx(s5,{ref:u,className:"reveal",role:"list","aria-label":"Education timeline",children:u5.map(d=>o.jsxs(f5,{role:"listitem",children:[o.jsx(d5,{$isActive:d.status==="active","aria-hidden":"true",children:d.status==="active"&&o.jsx(h5,{})}),o.jsx("div",{children:o.jsxs(m5,{$isActive:d.status==="active",children:[o.jsx(g5,{children:d.period}),o.jsxs(p5,{children:[o.jsx(b5,{"aria-hidden":"true",children:d.type==="university"?o.jsx(A5,{}):o.jsx(T5,{})}),o.jsxs(y5,{children:[o.jsx(x5,{children:d.degree}),o.jsx(v5,{$status:d.status,children:d.statusLabel})]})]}),o.jsx(S5,{children:d.institution}),o.jsx(j5,{children:d.field}),o.jsx(z5,{children:d.score?o.jsxs(o.Fragment,{children:[d.batch.split(":")[0],": ",o.jsx("strong",{children:d.score})]}):d.batch}),d.highlights.length>0&&o.jsx(w5,{role:"list","aria-label":"Areas of study",children:d.highlights.map(s=>o.jsx(E5,{role:"listitem",children:s},s))})]})})]},d.id))})]})})}const M5=g.div`
  position: relative;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.bgCard};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.xl};
  padding: 3rem 3.5rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
    gap: 2rem;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 1.75rem 1.25rem;
  }
`,$5=g.div`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: min(500px, 90vw);
  height: 350px;
  background: radial-gradient(ellipse, rgba(20, 184, 166, 0.08) 0%, transparent 70%);
  pointer-events: none;
`,O5=g.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: ${({theme:n})=>n.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:n})=>n.colors.accent};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    margin: 0 auto;
  }
`,_5=g.div`
  flex: 1;
  position: relative;
  z-index: 1;

  p {
    color: ${({theme:n})=>n.colors.text2};
    font-size: 0.9rem;
    line-height: 1.65;
  }
`,D5=g.h2`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({theme:n})=>n.colors.text};
  margin-bottom: 0.4rem;
`,R5=g.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;

    button, a {
      width: 100%;
      justify-content: center;
    }
  }
`;function B5({onOpenResume:n}){return o.jsx(Jr,{id:"resume","aria-labelledby":"resume-banner-heading",children:o.jsx(Je,{children:o.jsxs(M5,{children:[o.jsx($5,{"aria-hidden":"true"}),o.jsx(O5,{"aria-hidden":"true",children:o.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.jsx("polyline",{points:"14 2 14 8 20 8"}),o.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),o.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})}),o.jsxs(_5,{children:[o.jsx(D5,{id:"resume-banner-heading",children:"Professional Resume"}),o.jsx("p",{children:"Explore my detailed academic record, project achievements, technical competencies, and background."})]}),o.jsxs(R5,{children:[o.jsxs(wh,{$variant:"secondary",type:"button",onClick:n,"aria-label":"View Interactive Resume",children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),o.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"View Interactive Resume"]}),o.jsxs(da,{$variant:"primary",href:"./Granth_Senjaliya_Resume.pdf",download:"Granth_Senjaliya_Resume.pdf","aria-label":"Download PDF Resume",children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"7 10 12 15 17 10"}),o.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download PDF Resume"]})]})]})})})}const N5=g.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,H5=g.div``,k5=g.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.95rem;
  background: ${({theme:n})=>n.colors.bgCard};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.md};
  margin-bottom: 0.65rem;
  transition: all 0.25s ${({theme:n})=>n.transitions.spring};

  &:hover {
    border-color: ${({theme:n})=>n.colors.borderAccent};
    transform: translateX(3px);
  }
`,U5=g.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.18);
  border-radius: ${({theme:n})=>n.radii.sm};
  color: ${({theme:n})=>n.colors.accent};
`,G5=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`,Y5=g.span`
  font-size: 0.7rem;
  color: ${({theme:n})=>n.colors.text3};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,q5=g.span`
  font-size: ${({theme:n})=>n.typography.small};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text};
  transition: color 0.2s;

  a&, & a {
    color: ${({theme:n})=>n.colors.text};
    text-decoration: none;

    &:hover {
      color: ${({theme:n})=>n.colors.accent};
    }
  }
`,L5=g.div`
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: column;

    a {
      justify-content: center;
    }
  }
`,X5=g.div`
  margin-top: 1.25rem;
`,Q5=g.p`
  font-size: ${({theme:n})=>n.typography.xs};
  color: ${({theme:n})=>n.colors.text3};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,V5=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,q1=g.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.38rem 0.85rem;
  background: ${({theme:n})=>n.colors.bgCard};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text2};
  transition: all 0.22s ${({theme:n})=>n.transitions.spring};
  text-decoration: none;

  &:hover {
    border-color: ${({theme:n})=>n.colors.accent};
    color: ${({theme:n})=>n.colors.accent};
    transform: translateY(-1px);
  }
`,Z5=g.div`
  background: ${({theme:n})=>n.colors.bgCard};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.lg};
  padding: 1.75rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 1.25rem;
  }
`,K5=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`,J5=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Dr=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Rr=g.label`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text2};
`,Hu=g.input`
  width: 100%;
  padding: 0.68rem 0.95rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:n})=>n.radii.md};
  color: ${({theme:n})=>n.colors.text};
  font-family: ${({theme:n})=>n.fonts.body};
  font-size: ${({theme:n})=>n.typography.small};
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  outline: none;

  &::placeholder {
    color: ${({theme:n})=>n.colors.text3};
  }

  &:focus {
    border-color: ${({theme:n})=>n.colors.accent};
    box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
    background: rgba(20, 184, 166, 0.03);
  }

  ${({$hasError:n,theme:u})=>n&&dt`
      border-color: ${u.colors.error};
      box-shadow: 0 0 0 3px ${u.colors.errorBg};
    `}
`,W5=g.textarea`
  width: 100%;
  padding: 0.68rem 0.95rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:n})=>n.radii.md};
  color: ${({theme:n})=>n.colors.text};
  font-family: ${({theme:n})=>n.fonts.body};
  font-size: ${({theme:n})=>n.typography.small};
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  outline: none;
  resize: vertical;
  min-height: 110px;

  &::placeholder {
    color: ${({theme:n})=>n.colors.text3};
  }

  &:focus {
    border-color: ${({theme:n})=>n.colors.accent};
    box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
    background: rgba(20, 184, 166, 0.03);
  }

  ${({$hasError:n,theme:u})=>n&&dt`
      border-color: ${u.colors.error};
      box-shadow: 0 0 0 3px ${u.colors.errorBg};
    `}
`,Br=g.span`
  font-size: 0.7rem;
  color: ${({theme:n})=>n.colors.error};
`,F5=g.svg`
  animation: ${yp} 0.9s linear infinite;
`,I5=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.9rem 1.1rem;
  background: ${({theme:n})=>n.colors.successBg};
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: ${({theme:n})=>n.radii.md};
  color: ${({theme:n})=>n.colors.text};
  font-size: ${({theme:n})=>n.typography.small};

  .feedback-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme:n})=>n.colors.accentEmerald};
    font-weight: 700;
  }

  .feedback-desc {
    color: ${({theme:n})=>n.colors.text2};
    font-size: 0.82rem;
    line-height: 1.5;
  }

  .mailto-fallback {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.25rem;
    color: ${({theme:n})=>n.colors.accent};
    font-weight: 600;
    text-decoration: underline;
  }
`,L1={name:"",email:"",subject:"",message:""},Ch={name:"",email:"",subject:"",message:""};function X1(n){const u={...Ch};return n.name.trim()||(u.name="Name is required."),n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(u.email="Enter a valid email address."):u.email="Email is required.",n.subject.trim()||(u.subject="Subject is required."),n.message.trim()?n.message.trim().length<10&&(u.message="Message must be at least 10 characters."):u.message="Message is required.",u}function P5(){const[n,u]=I.useState(L1),[d,s]=I.useState(Ch),[h,x]=I.useState(!1),[E,_]=I.useState(null),S=Ue(),v=Ue(),T=G=>{const{name:J,value:pt}=G.target;u(et=>({...et,[J]:pt})),d[J]&&s(et=>({...et,[J]:""}))},R=G=>{const{name:J}=G.target,pt=X1(n);s(et=>({...et,[J]:pt[J]}))},N=async G=>{G.preventDefault();const J=X1(n);s(J),!Object.values(J).some(Boolean)&&(x(!0),await new Promise(pt=>setTimeout(pt,1200)),x(!1),_({...n}),u(L1))},Z=[{icon:o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]}),label:"Email",value:"granthsenjaliya881@gmail.com",href:"mailto:granthsenjaliya881@gmail.com"},{icon:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.84 2 2 0 0 1 3.62 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"})}),label:"Phone",value:"+91 98251 06122",href:"tel:+919825106122"},{icon:o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),label:"Location",value:"CHARUSAT, Gujarat, India",href:null}];return o.jsx(Wr,{id:"contact","aria-labelledby":"contact-heading",children:o.jsxs(Je,{children:[o.jsx(rn,{tag:"Contact",title:o.jsxs(o.Fragment,{children:["Let's Build Something",o.jsx("br",{}),o.jsx($p,{children:"Great Together."})]}),subtitle:"Have a project idea, internship opportunity, or technical inquiry? Reach out directly."}),o.jsxs(N5,{children:[o.jsxs(H5,{ref:S,className:"reveal",children:[Z.map(G=>o.jsxs(k5,{children:[o.jsx(U5,{children:G.icon}),o.jsxs(G5,{children:[o.jsx(Y5,{children:G.label}),o.jsx(q5,{children:G.href?o.jsx("a",{href:G.href,children:G.value}):G.value})]})]},G.label)),o.jsxs(L5,{children:[o.jsxs(da,{$variant:"primary",href:"mailto:granthsenjaliya881@gmail.com",children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Email Me"]}),o.jsxs(da,{$variant:"secondary",href:"tel:+919825106122",children:[o.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.84 2 2 0 0 1 3.62 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"})}),"Call Me"]})]}),o.jsxs(X5,{children:[o.jsx(Q5,{children:"Profiles"}),o.jsxs(V5,{children:[o.jsxs(q1,{href:"https://github.com/GranthSenjaliya88",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"})}),"GitHub"]}),o.jsxs(q1,{href:"https://leetcode.com/u/Granth88/",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"})}),"LeetCode"]})]})]})]}),o.jsx(Z5,{ref:v,className:"reveal",children:o.jsxs(K5,{onSubmit:N,noValidate:!0,"aria-label":"Contact form",children:[o.jsxs(J5,{children:[o.jsxs(Dr,{children:[o.jsx(Rr,{htmlFor:"contact-name",children:"Name"}),o.jsx(Hu,{type:"text",id:"contact-name",name:"name",$hasError:!!d.name,placeholder:"Your full name",value:n.name,onChange:T,onBlur:R,autoComplete:"name",required:!0,"aria-required":"true","aria-describedby":d.name?"err-name":void 0,"aria-invalid":!!d.name}),d.name&&o.jsx(Br,{id:"err-name",role:"alert",children:d.name})]}),o.jsxs(Dr,{children:[o.jsx(Rr,{htmlFor:"contact-email",children:"Email"}),o.jsx(Hu,{type:"email",id:"contact-email",name:"email",$hasError:!!d.email,placeholder:"your@email.com",value:n.email,onChange:T,onBlur:R,autoComplete:"email",required:!0,"aria-required":"true","aria-describedby":d.email?"err-email":void 0,"aria-invalid":!!d.email}),d.email&&o.jsx(Br,{id:"err-email",role:"alert",children:d.email})]})]}),o.jsxs(Dr,{children:[o.jsx(Rr,{htmlFor:"contact-subject",children:"Subject"}),o.jsx(Hu,{type:"text",id:"contact-subject",name:"subject",$hasError:!!d.subject,placeholder:"What is this regarding?",value:n.subject,onChange:T,onBlur:R,required:!0,"aria-required":"true","aria-describedby":d.subject?"err-subject":void 0,"aria-invalid":!!d.subject}),d.subject&&o.jsx(Br,{id:"err-subject",role:"alert",children:d.subject})]}),o.jsxs(Dr,{children:[o.jsx(Rr,{htmlFor:"contact-message",children:"Message"}),o.jsx(W5,{id:"contact-message",name:"message",$hasError:!!d.message,placeholder:"Tell me about your project, idea, or opportunity...",rows:5,value:n.message,onChange:T,onBlur:R,required:!0,"aria-required":"true","aria-describedby":d.message?"err-message":void 0,"aria-invalid":!!d.message}),d.message&&o.jsx(Br,{id:"err-message",role:"alert",children:d.message})]}),o.jsx(wh,{$variant:"primary",$fullWidth:!0,type:"submit",disabled:h,id:"submitBtn",children:h?o.jsxs(o.Fragment,{children:[o.jsx(F5,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Validating…"]}):o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),"Send Message"]})}),E&&o.jsxs(I5,{role:"status","aria-live":"polite",children:[o.jsxs("div",{className:"feedback-header",children:[o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),o.jsx("span",{children:"Form validation successful!"})]}),o.jsxs("div",{className:"feedback-desc",children:["Client-side validation passed for ",o.jsx("strong",{children:E.name})," (",E.email,"). Since this is a static site without an active email backend, click below to send directly:"]}),o.jsx("a",{className:"mailto-fallback",href:`mailto:granthsenjaliya881@gmail.com?subject=${encodeURIComponent(E.subject)}&body=${encodeURIComponent(`From: ${E.name} (${E.email})

${E.message}`)}`,children:"Open in your email client →"})]})]})})]})]})})}const tx=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"dsa",label:"DSA"},{id:"education",label:"Education"},{id:"contact",label:"Contact"}],ex=g.footer`
  background: ${({theme:n})=>n.colors.bgDark};
  border-top: 1px solid ${({theme:n})=>n.colors.border};
  padding: 3.5rem 0 1.5rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: 2.5rem 0 1.5rem;
  }
`,lx=g.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2.5rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`,ax=g.div``,nx=g.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
  width: fit-content;

  &:hover {
    opacity: 0.85;
  }
`,ix=g.span`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.text};
`,rx=g.span`
  color: ${({theme:n})=>n.colors.accent};
`,ox=g.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text3};
  margin-bottom: 0.4rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,cx=g.p`
  font-size: 0.8rem;
  color: ${({theme:n})=>n.colors.text3};
  line-height: 1.65;
  max-width: 240px;
`,Q1=g.div``,V1=g.h3`
  font-size: 0.72rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.text2};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.85rem;
`,Z1=g.ul``,ni=g.a`
  font-size: 0.83rem;
  color: ${({theme:n})=>n.colors.text3};
  display: block;
  padding: 0.2rem 0;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: ${({theme:n})=>n.colors.text};
    transform: translateX(3px);
  }
`,ux=g.hr`
  border: none;
  border-top: 1px solid ${({theme:n})=>n.colors.border};
`,sx=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`,fx=g.p`
  font-size: 0.78rem;
  color: ${({theme:n})=>n.colors.text3};
`,dx=g.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: ${({theme:n})=>n.colors.text3};
`,hx=()=>o.jsxs("svg",{viewBox:"0 0 48 48",width:"36",height:"36",fill:"none","aria-hidden":"true",children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"gsFootGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#14b8a6"}),o.jsx("stop",{offset:"50%",stopColor:"#06b6d4"}),o.jsx("stop",{offset:"100%",stopColor:"#22d3ee"})]})}),o.jsx("rect",{width:"48",height:"48",rx:"12",fill:"#06142d"}),o.jsx("rect",{x:"1.5",y:"1.5",width:"45",height:"45",rx:"11",fill:"url(#gsFootGrad)",fillOpacity:"0.15",stroke:"url(#gsFootGrad)",strokeWidth:"1.5"}),o.jsx("path",{d:"M 23 15 H 17 C 13.5 15 13.5 24 17 24 H 23 V 20",stroke:"url(#gsFootGrad)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M 31 33 H 25 C 21.5 33 21.5 24 25 24 H 31 C 34.5 24 34.5 15 31 15 H 25",stroke:"#F8FAFC",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]});function mx(){const n=u=>{const d=document.getElementById(u);d&&d.scrollIntoView({behavior:"smooth"})};return o.jsxs(ex,{id:"footerMain",children:[o.jsx(Je,{children:o.jsxs(lx,{children:[o.jsxs(ax,{children:[o.jsxs(nx,{href:"#home","aria-label":"Granth Senjaliya - Home",onClick:u=>{u.preventDefault(),n("home")},children:[o.jsx(hx,{}),o.jsxs(ix,{children:["Granth",o.jsx(rx,{children:"."})]})]}),o.jsx(ox,{children:"CSE Student · Developer · Builder"}),o.jsx(cx,{children:"Turning concepts into code and hardware into smart systems."})]}),o.jsxs(Q1,{children:[o.jsx(V1,{children:"Navigation"}),o.jsx(Z1,{children:tx.map(u=>o.jsx("li",{children:o.jsx(ni,{href:`#${u.id}`,onClick:d=>{d.preventDefault(),n(u.id)},children:u.label})},u.id))})]}),o.jsxs(Q1,{children:[o.jsx(V1,{children:"Connect"}),o.jsxs(Z1,{children:[o.jsx("li",{children:o.jsx(ni,{href:"https://github.com/GranthSenjaliya88",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),o.jsx("li",{children:o.jsx(ni,{href:"https://leetcode.com/u/Granth88/",target:"_blank",rel:"noopener noreferrer",children:"LeetCode"})}),o.jsx("li",{children:o.jsx(ni,{href:"mailto:granthsenjaliya881@gmail.com",children:"Email"})}),o.jsx("li",{children:o.jsx(ni,{href:"tel:+919825106122",children:"Phone"})})]})]})]})}),o.jsx(ux,{"aria-hidden":"true"}),o.jsx(Je,{children:o.jsxs(sx,{children:[o.jsxs(fx,{children:["© ",new Date().getFullYear()," Granth Senjaliya. All rights reserved."]}),o.jsxs(dx,{children:[o.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Gujarat, India"]})]})})]})}const gx=g.div`
  position: fixed;
  inset: 0;
  z-index: 9001;
  background: ${({theme:n})=>n.colors.bgModalOverlay};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: ${xp} 0.25s ${({theme:n})=>n.transitions.spring};

  @media print {
    position: static;
    background: none;
    backdrop-filter: none;
    padding: 0;
    display: block;
  }
`,px=g.div`
  background: ${({theme:n})=>n.colors.bg2};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.xl};
  width: 100%;
  max-width: 720px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.75);
  animation: ${ha} 0.3s ${({theme:n})=>n.transitions.spring};

  @media print {
    background: #ffffff !important;
    color: #111827 !important;
    border: none !important;
    box-shadow: none !important;
    max-height: none !important;
    max-width: 100% !important;
    border-radius: 0 !important;
    display: block !important;
  }
`,bx=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.75rem 1.25rem;
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
  gap: 1rem;
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.06), transparent);

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media print {
    border-bottom: 2px solid #14b8a6;
    padding: 0 0 1rem 0;
    background: none;
  }
`,yx=g.h2`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({theme:n})=>n.colors.text};

  @media print {
    color: #0f172a !important;
    font-size: 1.8rem;
  }
`,xx=g.p`
  font-size: 0.78rem;
  color: ${({theme:n})=>n.colors.text3};
  margin-top: 0.2rem;

  @media print {
    color: #475569 !important;
    font-size: 0.9rem;
  }
`,vx=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media print {
    display: none !important;
  }
`,Sx=g.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.text2};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:n})=>n.radii.full};
  transition: all 0.2s;
  background: none;
  cursor: pointer;

  &:hover {
    border-color: rgba(20, 184, 166, 0.3);
    color: ${({theme:n})=>n.colors.text};
    background: rgba(20, 184, 166, 0.08);
  }
`,jx=g.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:n})=>n.radii.sm};
  color: ${({theme:n})=>n.colors.text3};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${({theme:n})=>n.colors.errorBg};
    border-color: rgba(239, 68, 68, 0.3);
    color: ${({theme:n})=>n.colors.error};
  }
`,zx=g.div`
  overflow-y: auto;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media print {
    padding: 1rem 0;
    overflow: visible;
    gap: 1rem;
  }
`,wx=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  font-size: 0.8rem;
  color: ${({theme:n})=>n.colors.text2};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  svg {
    color: ${({theme:n})=>n.colors.accent};
  }

  a {
    color: ${({theme:n})=>n.colors.accent};

    &:hover {
      text-decoration: underline;
    }
  }

  @media print {
    color: #334155 !important;
    gap: 0.5rem 1rem;

    svg {
      color: #0f766e !important;
    }

    a {
      color: #0f766e !important;
      text-decoration: none;
    }
  }
`,ku=g.section``,Uu=g.h3`
  font-family: ${({theme:n})=>n.fonts.heading};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({theme:n})=>n.colors.accent};
  margin-bottom: 0.75rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid rgba(20, 184, 166, 0.15);

  @media print {
    color: #0f766e !important;
    border-bottom: 1px solid #cbd5e1 !important;
    font-size: 0.85rem;
  }
`,Gu=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-bottom: 0.55rem;
  font-size: 0.85rem;

  strong {
    color: ${({theme:n})=>n.colors.text};
  }

  span {
    color: ${({theme:n})=>n.colors.text3};
    font-size: 0.78rem;
  }

  @media print {
    strong {
      color: #0f172a !important;
    }
    span {
      color: #64748b !important;
    }
  }
`,Ex=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem 1.5rem;
  font-size: 0.82rem;
  color: ${({theme:n})=>n.colors.text2};

  strong {
    color: ${({theme:n})=>n.colors.text3};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }

  @media print {
    color: #334155 !important;
    strong {
      color: #0f172a !important;
    }
  }
`,Yu=g.div`
  margin-bottom: 0.75rem;
  font-size: 0.85rem;

  strong {
    display: block;
    color: ${({theme:n})=>n.colors.text};
    margin-bottom: 0.15rem;
  }

  p {
    color: ${({theme:n})=>n.colors.text2};
  }

  @media print {
    strong {
      color: #0f172a !important;
    }
    p {
      color: #334155 !important;
    }
  }
`,Ax=g.p`
  font-size: 0.74rem;
  color: ${({theme:n})=>n.colors.text3};
  font-style: italic;
  text-align: center;

  @media print {
    display: none;
  }
`;function Tx({isOpen:n,onClose:u,openerRef:d}){const s=I.useRef(null),h=I.useRef(null);return I.useEffect(()=>{if(!n)return;const x=s.current;if(!x)return;const E=x.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),_=E[0],S=E[E.length-1];setTimeout(()=>{var T;return(T=h.current)==null?void 0:T.focus()},60);const v=T=>{T.key==="Tab"&&(T.shiftKey?document.activeElement===_&&(T.preventDefault(),S.focus()):document.activeElement===S&&(T.preventDefault(),_.focus())),T.key==="Escape"&&u()};return document.addEventListener("keydown",v),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",v),document.body.style.overflow=""}},[n,u]),I.useEffect(()=>{!n&&(d!=null&&d.current)&&d.current.focus()},[n,d]),n?o.jsx(gx,{onClick:x=>{x.target===x.currentTarget&&u()},"aria-modal":"true",role:"dialog","aria-labelledby":"resume-dialog-title",ref:s,id:"resume-dialog-overlay",children:o.jsxs(px,{role:"document",children:[o.jsxs(bx,{children:[o.jsxs("div",{children:[o.jsx(yx,{id:"resume-dialog-title",children:"Granth Senjaliya"}),o.jsx(xx,{children:"CSE Student · CHARUSAT · Gujarat, India"})]}),o.jsxs(vx,{children:[o.jsxs(da,{$variant:"primary",$size:"sm",href:"./Granth_Senjaliya_Resume.pdf",download:"Granth_Senjaliya_Resume.pdf","aria-label":"Download PDF Resume",children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"7 10 12 15 17 10"}),o.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download"]}),o.jsxs(Sx,{onClick:()=>window.print(),"aria-label":"Print resume",children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),o.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),o.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),"Print"]}),o.jsx(jx,{onClick:u,ref:h,"aria-label":"Close resume preview",children:o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),o.jsxs(zx,{children:[o.jsxs(wx,{children:[o.jsxs("span",{children:[o.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"granthsenjaliya881@gmail.com"]}),o.jsxs("span",{children:[o.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.84 2 2 0 0 1 3.62 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"})}),"+91 98251 06122"]}),o.jsx("span",{children:o.jsx("a",{href:"https://github.com/GranthSenjaliya88",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),o.jsx("span",{children:o.jsx("a",{href:"https://leetcode.com/u/Granth88/",target:"_blank",rel:"noopener noreferrer",children:"LeetCode"})})]}),o.jsxs(ku,{"aria-labelledby":"r-edu-title",children:[o.jsx(Uu,{id:"r-edu-title",children:"Education"}),o.jsxs(Gu,{children:[o.jsx("strong",{children:"Bachelor of Engineering – Computer Science"}),o.jsx("span",{children:"CHARUSAT · 2022–Present (2025 Batch)"})]}),o.jsxs(Gu,{children:[o.jsx("strong",{children:"12th – Science Stream (GSEB)"}),o.jsx("span",{children:"Aspire Public School · 2023–2025"})]}),o.jsxs(Gu,{children:[o.jsx("strong",{children:"10th – GSEB · 87%"}),o.jsx("span",{children:"Aspire Public School · Passed 2023"})]})]}),o.jsxs(ku,{"aria-labelledby":"r-skills-title",children:[o.jsx(Uu,{id:"r-skills-title",children:"Technical Skills"}),o.jsxs(Ex,{children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Languages:"})," C, C++, Java, JavaScript"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Web:"})," HTML5, CSS3, JavaScript"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"IoT/HW:"})," Arduino, ESP32, ESP8266, Sensors"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"DSA:"})," Arrays, Linked Lists, Sorting, Searching, Recursion, Stack, Queue, Trees"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Tools:"})," Git, GitHub, VS Code, Figma, Arduino IDE"]})]})]}),o.jsxs(ku,{"aria-labelledby":"r-proj-title",children:[o.jsx(Uu,{id:"r-proj-title",children:"Projects"}),o.jsxs(Yu,{children:[o.jsx("strong",{children:"ESP32 Voice Controlled Home Automation"}),o.jsx("p",{children:"IoT-based home automation using ESP32 and voice commands over Wi-Fi with relay switching."})]}),o.jsxs(Yu,{children:[o.jsx("strong",{children:"Farmer Guide Website"}),o.jsx("p",{children:"Gujarati-language farming guide covering crops, pest management, fertilizers, and government schemes."})]}),o.jsxs(Yu,{children:[o.jsx("strong",{children:"Digital Voting System"}),o.jsx("p",{children:"Hardware vote counter using CD4026 IC, logic gates, push buttons, and 7-segment displays."})]})]}),o.jsx(Ax,{children:"For the official PDF version, click the Download button above."})]})]})}):null}const Cx=g.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 2.5px;
  background: ${({theme:n})=>n.gradients.progress};
  z-index: 9999;
  transition: width 0.1s linear;
  pointer-events: none;
`;function Mx(){const[n,u]=I.useState(0);return I.useEffect(()=>{const d=()=>{const s=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;u(h>0?Math.min(100,s/h*100):0)};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),o.jsx(Cx,{style:{width:`${n}%`},role:"progressbar","aria-valuenow":Math.round(n),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Page scroll progress"})}const $x=g.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  background: ${({theme:n})=>n.colors.bgCardSolid};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: ${({theme:n})=>n.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:n})=>n.colors.text2};
  box-shadow: ${({theme:n})=>n.shadows.md};
  transition: all ${({theme:n})=>n.transitions.default};
  opacity: ${({$visible:n})=>n?1:0};
  pointer-events: ${({$visible:n})=>n?"auto":"none"};
  transform: ${({$visible:n})=>n?"translateY(0)":"translateY(12px)"};
  z-index: 500;
  cursor: pointer;

  &:hover {
    background: ${({theme:n})=>n.colors.accent};
    color: ${({theme:n})=>n.colors.bg};
    border-color: ${({theme:n})=>n.colors.accent};
    transform: translateY(-3px);
    box-shadow: ${({theme:n})=>n.shadows.glow};
  }
`;function Ox(){const[n,u]=I.useState(!1);I.useEffect(()=>{const s=()=>u(window.scrollY>500);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);const d=()=>window.scrollTo({top:0,behavior:"smooth"});return o.jsx($x,{$visible:n,onClick:d,"aria-label":"Back to top",tabIndex:n?0:-1,children:o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:o.jsx("polyline",{points:"18 15 12 9 6 15"})})})}const _x=["home","about","skills","projects","dsa","education","contact"];function Dx(){const[n,u]=I.useState("home"),d=I.useCallback(()=>{const s=window.scrollY+120;let h="home";for(const x of _x){const E=document.getElementById(x);E&&s>=E.offsetTop&&s<E.offsetTop+E.offsetHeight&&(h=x)}u(h)},[]);return I.useEffect(()=>(d(),window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)),[d]),n}function Rx(){const[n,u]=I.useState(!1),[d,s]=I.useState(!1),h=Dx(),x=I.useRef(null),E=S=>{S!=null&&S.currentTarget&&(x.current=S.currentTarget),s(!0)},_=()=>s(!1);return I.useEffect(()=>{document.title="Granth Senjaliya | CSE Student & Developer"},[]),n?o.jsxs(C1,{theme:_1,children:[o.jsx(D1,{}),o.jsx(Op,{href:"#main-content",children:"Skip to main content"}),o.jsx(Mx,{}),o.jsx(lb,{activeSection:h,onOpenResume:E}),o.jsxs("main",{id:"main-content",children:[o.jsx(Db,{onOpenResume:E}),o.jsx(Fb,{}),o.jsx(hy,{}),o.jsx(Ly,{}),o.jsx(c5,{}),o.jsx(C5,{}),o.jsx(B5,{onOpenResume:E}),o.jsx(P5,{})]}),o.jsx(mx,{}),o.jsx(Ox,{}),o.jsx(Tx,{isOpen:d,onClose:_,openerRef:x})]}):o.jsxs(C1,{theme:_1,children:[o.jsx(D1,{}),o.jsx(Yp,{onLoaded:()=>u(!0)})]})}c2.createRoot(document.getElementById("root")).render(o.jsx(I.StrictMode,{children:o.jsx(Rx,{})}));

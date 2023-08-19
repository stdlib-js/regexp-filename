// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reFilename=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,f){var l,c,s,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(e,t)||a.call(e,t)?(l=e.__proto__,e.__proto__=r,delete e[t],e[t]=f.value,e.__proto__=l):e[t]=f.value),s="get"in f,p="set"in f,c&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(e,t,f.get),p&&i&&i.call(e,t,f.set),e};function l(e,t,r){f(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function p(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}l(c,"REGEXP",s);var m=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;function v(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}l(p,"REGEXP",m);var y="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function b(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}var h=b,g=d;function w(e){if(h===setTimeout)return setTimeout(e,0);if((h===b||!h)&&setTimeout)return h=setTimeout,setTimeout(e,0);try{return h(e,0)}catch(t){try{return h.call(null,e,0)}catch(t){return h.call(this,e,0)}}}"function"==typeof y.setTimeout&&(h=setTimeout),"function"==typeof y.clearTimeout&&(g=clearTimeout);var _,T=[],j=!1,E=-1;function O(){j&&_&&(j=!1,_.length?T=_.concat(T):E=-1,T.length&&S())}function S(){if(!j){var e=w(O);j=!0;for(var t=T.length;t;){for(_=T,T=[];++E<t;)_&&_[E].run();E=-1,t=T.length}_=null,j=!1,function(e){if(g===clearTimeout)return clearTimeout(e);if((g===d||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(e);try{g(e)}catch(t){try{return g.call(null,e)}catch(t){return g.call(this,e)}}}(e)}}function P(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];T.push(new N(e,t)),1!==T.length||j||w(S)}function N(e,t){this.fun=e,this.array=t}N.prototype.run=function(){this.fun.apply(null,this.array)};var I="browser",k="browser",A={},G=[],x={},V={},X={};function F(){}var L=F,M=F,R=F,$=F,z=F,D=F,Z=F;function C(e){throw new Error("process.binding is not supported")}function Y(){return"/"}function U(e){throw new Error("process.chdir is not supported")}function W(){return 0}var q=y.performance||{},B=q.now||q.mozNow||q.msNow||q.oNow||q.webkitNow||function(){return(new Date).getTime()};function H(e){var t=.001*B.call(q),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var J=new Date;function K(){return(new Date-J)/1e3}var Q={nextTick:P,title:I,browser:true,env:A,argv:G,version:"",versions:x,on:L,addListener:M,once:R,off:$,removeListener:z,removeAllListeners:D,emit:Z,binding:C,cwd:Y,chdir:U,umask:W,hrtime:H,platform:k,release:V,config:X,uptime:K},ee="win32"===v(Object.freeze({__proto__:null,addListener:M,argv:G,binding:C,browser:true,chdir:U,config:X,cwd:Y,default:Q,emit:Z,env:A,hrtime:H,nextTick:P,off:$,on:L,once:R,platform:k,release:V,removeAllListeners:D,removeListener:z,title:I,umask:W,uptime:K,version:"",versions:x})).platform,te=Math.floor;function re(e){return te(e)===e}function ne(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&re(e.length)&&e.length>=0&&e.length<=9007199254740991}function oe(e){return"number"==typeof e}var ie="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ue(){return ie&&"symbol"==typeof Symbol.toStringTag}var ae=Object.prototype.toString;var fe=Object.prototype.hasOwnProperty;var le="function"==typeof Symbol?Symbol.toStringTag:"";var ce=ue()?function(e){var t,r,n,o,i;if(null==e)return ae.call(e);r=e[le],i=le,t=null!=(o=e)&&fe.call(o,i);try{e[le]=void 0}catch(t){return ae.call(e)}return n=ae.call(e),t?e[le]=r:delete e[le],n}:function(e){return ae.call(e)},se=Number,pe=se.prototype.toString;var me=ue();function ve(e){return"object"==typeof e&&(e instanceof se||(me?function(e){try{return pe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ce(e)))}function ye(e){return oe(e)||ve(e)}l(ye,"isPrimitive",oe),l(ye,"isObject",ve);var be=Number.POSITIVE_INFINITY,de=se.NEGATIVE_INFINITY;function he(e){return e<be&&e>de&&re(e)}function ge(e){return oe(e)&&he(e)}function we(e){return ve(e)&&he(e.valueOf())}function _e(e){return ge(e)||we(e)}function Te(e){return"string"==typeof e}l(_e,"isPrimitive",ge),l(_e,"isObject",we);var je=String.prototype.valueOf;var Ee=ue();function Oe(e){return"object"==typeof e&&(e instanceof String||(Ee?function(e){try{return je.call(e),!0}catch(e){return!1}}(e):"[object String]"===ce(e)))}function Se(e){return Te(e)||Oe(e)}function Pe(e){return e!=e}function Ne(e){return oe(e)&&Pe(e)}function Ie(e){return ve(e)&&Pe(e.valueOf())}function ke(e){return Ne(e)||Ie(e)}function Ae(e,t,r){var n,o,i;if(!ne(e)&&!Te(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ge(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(o=r)<0&&(o=0)}else o=0;if(Te(e)){if(!Te(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==e.indexOf(t,o)}if(n=e.length,Ne(t)){for(i=o;i<n;i++)if(Ne(e[i]))return!0;return!1}for(i=o;i<n;i++)if(e[i]===t)return!0;return!1}function Ge(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}l(Se,"isPrimitive",Te),l(Se,"isObject",Oe),l(ke,"isPrimitive",Ne),l(ke,"isObject",Ie);var xe=["posix","win32"];function Ve(e){if(arguments.length>0&&!Ae(xe,e))throw new Error(Ge("0sX7p,O1",xe.join('", "'),e));return"win32"===e||ee?/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}return l(Ve,"REGEXP",ee?m:s),l(Ve,"REGEXP_POSIX",s),l(Ve,"REGEXP_WIN32",m),Ve}));
//# sourceMappingURL=browser.js.map

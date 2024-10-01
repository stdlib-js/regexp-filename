// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reFilename=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function b(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,m,"e"),n=f.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function y(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function T(e){return e!=e}function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,n,o,a,u,s,l,f,p,g,d,h;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+y(h):y(h)+p)),u+=n.arg||"",s+=1}return u}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var P=Object.prototype,V=P.toString,$=P.__defineGetter__,A=P.__defineSetter__,F=P.__lookupGetter__,N=P.__lookupSetter__;var R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(F.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&A&&A.call(e,r,t.set),e};function G(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var X=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function C(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}G(L,"REGEXP",X);var Z=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;function M(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}G(C,"REGEXP",Z);var z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function W(){throw new Error("setTimeout has not been defined")}function D(){throw new Error("clearTimeout has not been defined")}var U=W,Y=D;function q(e){if(U===setTimeout)return setTimeout(e,0);if((U===W||!U)&&setTimeout)return U=setTimeout,setTimeout(e,0);try{return U(e,0)}catch(r){try{return U.call(null,e,0)}catch(r){return U.call(this,e,0)}}}"function"==typeof z.setTimeout&&(U=setTimeout),"function"==typeof z.clearTimeout&&(Y=clearTimeout);var B,H=[],J=!1,K=-1;function Q(){J&&B&&(J=!1,B.length?H=B.concat(H):K=-1,H.length&&ee())}function ee(){if(!J){var e=q(Q);J=!0;for(var r=H.length;r;){for(B=H,H=[];++K<r;)B&&B[K].run();K=-1,r=H.length}B=null,J=!1,function(e){if(Y===clearTimeout)return clearTimeout(e);if((Y===D||!Y)&&clearTimeout)return Y=clearTimeout,clearTimeout(e);try{return Y(e)}catch(r){try{return Y.call(null,e)}catch(r){return Y.call(this,e)}}}(e)}}function re(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];H.push(new te(e,r)),1!==H.length||J||q(ee)}function te(e,r){this.fun=e,this.array=r}te.prototype.run=function(){this.fun.apply(null,this.array)};var ne="browser",ie="browser",oe={},ae=[],ce={},ue={},se={};function le(){}var fe=le,pe=le,ge=le,de=le,he=le,ve=le,me=le;function we(e){throw new Error("process.binding is not supported")}function be(){return"/"}function ye(e){throw new Error("process.chdir is not supported")}function Ee(){return 0}var _e=z.performance||{},Te=_e.now||_e.mozNow||_e.msNow||_e.oNow||_e.webkitNow||function(){return(new Date).getTime()};function Se(e){var r=.001*Te.call(_e),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var je=new Date;function ke(){return(new Date-je)/1e3}var Oe={nextTick:re,title:ne,browser:true,env:oe,argv:ae,version:"",versions:ce,on:fe,addListener:pe,once:ge,off:de,removeListener:he,removeAllListeners:ve,emit:me,binding:we,cwd:be,chdir:ye,umask:Ee,hrtime:Se,platform:ie,release:ue,config:se,uptime:ke},xe="win32"===M(Object.freeze({__proto__:null,addListener:pe,argv:ae,binding:we,browser:true,chdir:ye,config:se,cwd:be,default:Oe,emit:me,env:oe,hrtime:Se,nextTick:re,off:de,on:fe,once:ge,platform:ie,release:ue,removeAllListeners:ve,removeListener:he,title:ne,umask:Ee,uptime:ke,version:"",versions:ce})).platform,Ie=Math.floor;function Pe(e){return Ie(e)===e}var Ve=9007199254740991;function $e(e){return"number"==typeof e}var Ae="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Fe(){return Ae&&"symbol"==typeof Symbol.toStringTag}var Ne=Object.prototype.toString;var Re=Object.prototype.hasOwnProperty;var Ge="function"==typeof Symbol?Symbol:void 0,Le="function"==typeof Ge?Ge.toStringTag:"";var Xe=Fe()?function(e){var r,t,n,i,o;if(null==e)return Ne.call(e);t=e[Le],o=Le,r=null!=(i=e)&&Re.call(i,o);try{e[Le]=void 0}catch(r){return Ne.call(e)}return n=Ne.call(e),r?e[Le]=t:delete e[Le],n}:function(e){return Ne.call(e)},Ce=Number,Ze=Ce.prototype.toString;var Me=Fe();function ze(e){return"object"==typeof e&&(e instanceof Ce||(Me?function(e){try{return Ze.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Xe(e)))}function We(e){return $e(e)||ze(e)}G(We,"isPrimitive",$e),G(We,"isObject",ze);var De=Number.POSITIVE_INFINITY,Ue=Ce.NEGATIVE_INFINITY;function Ye(e){return e<De&&e>Ue&&Pe(e)}function qe(e){return $e(e)&&Ye(e)}function Be(e){return ze(e)&&Ye(e.valueOf())}function He(e){return qe(e)||Be(e)}function Je(e){return"string"==typeof e}G(He,"isPrimitive",qe),G(He,"isObject",Be);var Ke=String.prototype.valueOf;var Qe=Fe();function er(e){return"object"==typeof e&&(e instanceof String||(Qe?function(e){try{return Ke.call(e),!0}catch(e){return!1}}(e):"[object String]"===Xe(e)))}function rr(e){return Je(e)||er(e)}function tr(e){return e!=e}function nr(e){return $e(e)&&tr(e)}function ir(e){return ze(e)&&tr(e.valueOf())}function or(e){return nr(e)||ir(e)}function ar(e,r,t){var n,i,o,a;if(!(a=e,"object"==typeof a&&null!==a&&"number"==typeof a.length&&Pe(a.length)&&a.length>=0&&a.length<=Ve||Je(e)))throw new TypeError(I("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!qe(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(Je(e)){if(!Je(r))throw new TypeError(I("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,i)}if(n=e.length,nr(r)){for(o=i;o<n;o++)if(nr(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}G(rr,"isPrimitive",Je),G(rr,"isObject",er),G(or,"isPrimitive",nr),G(or,"isObject",ir);var cr=["posix","win32"];function ur(e){if(arguments.length>0&&!ar(cr,e))throw new Error(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0sX7p",cr.join('", "'),e));return"win32"===e||xe?/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}return G(ur,"REGEXP",xe?Z:X),G(ur,"REGEXP_POSIX",X),G(ur,"REGEXP_WIN32",Z),ur}));
//# sourceMappingURL=browser.js.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e,{REGEXP as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-filename-posix@v0.2.1-esm/index.mjs";export{REGEXP as REGEXP_POSIX}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-filename-posix@v0.2.1-esm/index.mjs";import i,{REGEXP as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-filename-windows@v0.2.2-esm/index.mjs";export{REGEXP as REGEXP_WIN32}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-filename-windows@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var o=["posix","win32"];function p(s){if(arguments.length>0&&!d(o,s))throw new Error(m("0sX7p",o.join('", "'),s));return"win32"===s||n?i():e()}var l=n?r:t;s(p,"REGEXP",l),s(p,"REGEXP_POSIX",t),s(p,"REGEXP_WIN32",r);export{l as REGEXP,p as default};
//# sourceMappingURL=index.mjs.map

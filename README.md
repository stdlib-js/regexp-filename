<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reFilename

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][mdn-regexp] to split a filename.



<section class="usage">

## Usage

To use in Observable,

```javascript
reFilename = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-filename@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var reFilename = require( 'path/to/vendor/umd/regexp-filename/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-filename@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.reFilename;
})();
</script>
```

#### reFilename( \[platform] )

Returns a [regular expression][mdn-regexp] to split a filename.

```javascript
var RE = reFilename();
// returns <RegExp>

RE = reFilename( 'posix' );
// returns <RegExp>

var parts = RE.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',  // input value
        '/',                  // root
        'foo/bar/',           // dirname
        'index.js',           // basename
        '.js'                 // extname
    ]
*/

RE = reFilename( 'win32' );
// returns <RegExp>

parts = RE.exec( 'C:\\foo\\bar\\index.js' ).slice();
/* returns
    [
        'C:\\foo\\bar\\index.js',   // input value
        'C:',                       // device
        '\\',                       // slash
        'foo\\bar\\',               // dirname
        'index.js',                 // basename
        '.js'                       // extname
    ]
*/
```

#### reFilename.REGEXP

[Regular expression][mdn-regexp] to split a filename.

```javascript
var bool = ( reFilename.REGEXP.toString() === reFilename().toString() );
// returns true
```

#### reFilename.REGEXP_POSIX

[Regular expression][@stdlib/regexp/filename-posix] to split a [POSIX][posix] filename. 

```javascript
var parts = reFilename.REGEXP_POSIX.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',  // input value
        '/',                  // root
        'foo/bar/',           // dirname
        'index.js',           // basename
        '.js'                 // extname
    ]
*/
```

#### reFilename.REGEXP_WIN32

[Regular expression][@stdlib/regexp/filename-windows] to split a Windows filename.

```javascript
var parts = reFilename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' ).slice();
/* returns
    [
        'C:\\foo\\bar\\index.js',   // input value
        'C:',                       // device
        '\\',                       // slash
        'foo\\bar\\',               // dirname
        'index.js',                 // basename
        '.js'                       // extname
    ]
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The as `REGEXP` exported [regular expression][mdn-regexp] is [platform][@stdlib/assert/is-windows]-dependent. If the current process is running on Windows, `REGEXP === REGEXP_WIN32`; otherwise, `REGEXP === REGEXP_POSIX`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-filename@umd/browser.js"></script>
<script type="text/javascript">
(function () {
var RE_FILENAME = reFilename();

// Assuming a POSIX platform...
var parts = RE_FILENAME.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',
        '/',
        'foo/bar/',
        'index.js',
        '.js'
    ]
*/

parts = reFilename.REGEXP_POSIX.exec( '/foo/bar/home.html' ).slice();
/* returns
    [
        '/foo/bar/home.html',
        '/',
        'foo/bar/',
        'home.html',
        '.html'
    ]
*/

parts = reFilename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' ).slice();
/* returns
    [
        'C:\\foo\\bar\\home.html',
        'C:',
        '\\',
        'foo\\bar\\',
        'home.html',
        '.html'
    ]
*/

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp-filename-posix`][@stdlib/regexp/filename-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to split a POSIX filename.</span>
-   <span class="package-name">[`@stdlib/regexp-filename-windows`][@stdlib/regexp/filename-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to split a Windows filename.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-filename.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-filename

[test-image]: https://github.com/stdlib-js/regexp-filename/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-filename/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-filename/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-filename?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-filename.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-filename/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-filename/tree/deno
[umd-url]: https://github.com/stdlib-js/regexp-filename/tree/umd
[esm-url]: https://github.com/stdlib-js/regexp-filename/tree/esm
[branches-url]: https://github.com/stdlib-js/regexp-filename/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-filename/main/LICENSE

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows/tree/umd

<!-- <related-links> -->

[@stdlib/regexp/filename-posix]: https://github.com/stdlib-js/regexp-filename-posix/tree/umd

[@stdlib/regexp/filename-windows]: https://github.com/stdlib-js/regexp-filename-windows/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->

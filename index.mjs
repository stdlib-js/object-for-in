// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e,n,o){var s;if("object"!=typeof e||null===e)throw new TypeError(t("null3L",e));if(!r(n))throw new TypeError(t("null2H",n));for(s in e)if(!1===n.call(o,e[s],s,e))return e;return e}export{e as default};
//# sourceMappingURL=index.mjs.map

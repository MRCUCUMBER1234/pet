"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation/index.jsx\");\n/* harmony import */ var _components_LinkAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LinkAdapter */ \"./components/LinkAdapter/index.js\");\n\n\n\nconst Posts = ()=>{\n    const posts = [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/iriskales/Documents/front&back materials/projects/pet/pages/posts.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"post\"\n            }, void 0, false, {\n                fileName: \"/Users/iriskales/Documents/front&back materials/projects/pet/pages/posts.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            posts.map((param)=>/*#__PURE__*/ {\n                let { id , title  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkAdapter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        link: \"/posts/\".concat(id),\n                        text: title\n                    }, void 0, false, {\n                        fileName: \"/Users/iriskales/Documents/front&back materials/projects/pet/pages/posts.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/iriskales/Documents/front&back materials/projects/pet/pages/posts.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iriskales/Documents/front&back materials/projects/pet/pages/posts.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQWtEO0FBQ0U7QUFFcEQsTUFBTUUsUUFBUSxJQUFNO0lBRWhCLE1BQU1DLFFBQVEsRUFBRTtJQUVoQixxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDSiw4REFBVUE7Ozs7OzBCQUNYLDhEQUFDSzswQkFBRTs7Ozs7O1lBQ0ZGLE1BQU1HLEdBQUcsQ0FBQyx1QkFDUDtvQkFEUSxFQUFDQyxHQUFFLEVBQUVDLE1BQUssRUFBQzt1QkFDbkIsOERBQUNDOzhCQUNHLDRFQUFDUiwrREFBV0E7d0JBQUNTLE1BQU0sVUFBYSxPQUFISDt3QkFBTUksTUFBTUg7Ozs7Ozs7Ozs7O1lBQ3pDOzs7Ozs7O0FBSXBCO0tBZk1OO0FBaUJOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzLmpzPzUzZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IExpbmtBZGFwdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xpbmtBZGFwdGVyXCI7XG5cbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcG9zdHMgPSBbXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPHA+cG9zdDwvcD5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHtpZCwgdGl0bGV9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0FkYXB0ZXIgbGluaz17YC9wb3N0cy8ke2lkfWB9IHRleHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0czsiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIkxpbmtBZGFwdGVyIiwiUG9zdHMiLCJwb3N0cyIsImRpdiIsInAiLCJtYXAiLCJpZCIsInRpdGxlIiwibGkiLCJsaW5rIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slug */ \"./node_modules/slug/slug.js\");\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar index = function(param) {\n    var characters = param.characters;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Rick and Morty \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            characters.results.map(function(character) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/character/[slug]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: [\n                                \" \",\n                                character.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this1)\n                }, character.id, false, {\n                    fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUMwQztBQUNiO0FBQ0w7QUFFeEIsSUFBTUcsS0FBSyxHQUFHLGdCQUFvQjtRQUFqQkMsVUFBVSxTQUFWQSxVQUFVOztJQUN6QixxQkFDRSw4REFBQ0osMERBQU07OzBCQUNMLDhEQUFDSyxJQUFFOzBCQUFDLGlCQUFlOzs7OztxQkFBSztZQUN2QkQsVUFBVSxDQUFDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxTQUFTO3FDQUNoQyw4REFBQ0MsSUFBRTs4QkFJRCw0RUFBQ1Isa0RBQUk7d0JBQUNTLElBQUksRUFBQyxtQkFBbUI7a0NBQzVCLDRFQUFDQyxHQUFDOztnQ0FBQyxHQUFDO2dDQUFDSCxTQUFTLENBQUNJLElBQUk7Ozs7OztrQ0FBSzs7Ozs7OEJBQ25CO21CQUxGSixTQUFTLENBQUNLLEVBQUU7Ozs7MEJBTWQ7YUFDTixDQUFDOzs7Ozs7YUFDSyxDQUNUO0NBQ0g7O0FBY0QsK0RBQWVWLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bmZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgc2x1ZyBmcm9tIFwic2x1Z1wiO1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyBjaGFyYWN0ZXJzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxPlJpY2sgYW5kIE1vcnR5IDwvaDE+XHJcbiAgICAgIHtjaGFyYWN0ZXJzLnJlc3VsdHMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgICAgICA8bGlcclxuICAgICAgICAgIGtleT17Y2hhcmFjdGVyLmlkfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGFyYWN0ZXIvW3NsdWddXCI+XHJcbiAgICAgICAgICAgIDxhPiB7Y2hhcmFjdGVyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBkYXRhIGZldGNoXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHVuZmV0Y2goXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlclwiKTtcclxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coY2hhcmFjdGVycyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlcnMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTGluayIsInNsdWciLCJpbmRleCIsImNoYXJhY3RlcnMiLCJoMSIsInJlc3VsdHMiLCJtYXAiLCJjaGFyYWN0ZXIiLCJsaSIsImhyZWYiLCJhIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
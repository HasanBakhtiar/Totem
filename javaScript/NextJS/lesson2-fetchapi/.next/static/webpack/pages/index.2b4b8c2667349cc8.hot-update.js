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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar index = function(param) {\n    var characters = param.characters;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Rick and Morty \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            characters.results.map(function(character) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    as: \"/character/$slug\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/character/[slug]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: [\n                                \"  \",\n                                character.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                            lineNumber: 12,\n                            columnNumber: 7\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, _this1)\n                }, character.id, false, {\n                    fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hasan\\\\Desktop\\\\Totem\\\\javaScript\\\\NextJS\\\\lesson2-fetchapi\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDMEM7QUFDZDtBQUU1QixJQUFNRSxLQUFLLEdBQUcsZ0JBQWtCO1FBQWhCQyxVQUFVLFNBQVZBLFVBQVU7O0lBQ3hCLHFCQUNFLDhEQUFDSCwwREFBTTs7MEJBQ0wsOERBQUNJLElBQUU7MEJBQUMsaUJBQWU7Ozs7O3FCQUFLO1lBQ3pCRCxVQUFVLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxTQUFTO3FDQUMvQiw4REFBQ0MsSUFBRTtvQkFBb0JDLEVBQUUsRUFBRyxrQkFBZ0I7OEJBQzVDLDRFQUFDUixrREFBSTt3QkFBQ1MsSUFBSSxFQUFDLG1CQUFtQjtrQ0FDOUIsNEVBQUNDLEdBQUM7O2dDQUFDLElBQUU7Z0NBQUNKLFNBQVMsQ0FBQ0ssSUFBSTs7Ozs7O2tDQUFLOzs7Ozs4QkFDbEI7bUJBSEVMLFNBQVMsQ0FBQ00sRUFBRTs7OzswQkFJaEI7YUFDTixDQUFDOzs7Ozs7YUFDTyxDQUNUO0NBQ0g7O0FBZ0JELCtEQUFlWCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5mZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcclxuXHJcbmNvbnN0IGluZGV4ID0gKHtjaGFyYWN0ZXJzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+UmljayBhbmQgTW9ydHkgPC9oMT5cclxuICAgIHtjaGFyYWN0ZXJzLnJlc3VsdHMubWFwKGNoYXJhY3Rlcj0+KFxyXG4gICAgICA8bGkga2V5PXtjaGFyYWN0ZXIuaWR9IGFzPXtgL2NoYXJhY3Rlci8kc2x1Z2B9PlxyXG4gICAgICA8TGluayBocmVmPVwiL2NoYXJhY3Rlci9bc2x1Z11cIj5cclxuICAgICAgPGE+ICB7Y2hhcmFjdGVyLm5hbWV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAvLyBkYXRhIGZldGNoXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHVuZmV0Y2goXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlclwiKVxyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJzKTtcclxuICByZXR1cm57XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIGNoYXJhY3RlcnNcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiaW5kZXgiLCJjaGFyYWN0ZXJzIiwiaDEiLCJyZXN1bHRzIiwibWFwIiwiY2hhcmFjdGVyIiwibGkiLCJhcyIsImhyZWYiLCJhIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
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

/***/ "./components/Layout/web/NavBar.js":
/*!*****************************************!*\
  !*** ./components/Layout/web/NavBar.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ \"./components/Layout/web/data.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NavBar = function() {\n    _s();\n    var ref = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)(), theme = ref.theme, setTheme = ref.setTheme;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), isDarkMode = ref1[0], setIsDarkMode = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (isDarkMode == true) {\n        setTheme(\"dark\");\n    } else {\n        setTheme(\"light\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"hidden md:flex flex-row items-center justify-around h-18 rounded-b-3xl bg-white dark:bg-[#222222]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-5xl text-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_7__.CgMonday, {\n                    className: \"rotate-180\"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-row self-end h-12\",\n                children: _data__WEBPACK_IMPORTED_MODULE_6__.navLinks.map(function(link, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: link.path,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide px-4 text-sm flex items-center justify-center rounded-lg\",\n                            children: link.name\n                        }, index, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n                            lineNumber: 30,\n                            columnNumber: 8\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white dark:bg-[#222222] hover:bg-gray-50 border-2 border-gray-700 text-sm text-gray-700 p-1 my-1 rounded-3xl font-medium tracking-wide leading-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    onChange: function() {\n                        return setIsDarkMode(!isDarkMode);\n                    },\n                    checked: isDarkMode,\n                    className: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/web/NavBar.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, _this);\n};\n_s(NavBar, \"55f5LueLYbvSUwMp/oDXTT6AhO4=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC93ZWIvTmF2QmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQztBQUVGO0FBRVc7QUFDSztBQUNqQjtBQUNWO0FBQ0s7QUFFbEMsSUFBTVMsTUFBTSxHQUFHLFdBQU07O0lBQ3BCLElBQTRCSCxHQUFVLEdBQVZBLHFEQUFRLEVBQUUsRUFBOUJJLEtBQUssR0FBZUosR0FBVSxDQUE5QkksS0FBSyxFQUFFQyxRQUFRLEdBQUtMLEdBQVUsQ0FBdkJLLFFBQVE7SUFDdkIsSUFBb0NSLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUF2Q1MsVUFBVSxHQUFtQlQsSUFBVSxHQUE3QixFQUFFVSxhQUFhLEdBQUlWLElBQVUsR0FBZDtJQUNoQyxJQUFNVyxNQUFNLEdBQUdiLHNEQUFTLEVBQUU7SUFFMUIsSUFBSVcsVUFBVSxJQUFJLElBQUksRUFBRTtRQUN2QkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLE9BQU87UUFDTkEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxxQkFDQyw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsbUdBQW9HOzswQkFDbEgsOERBQUNDLE1BQUk7Z0JBQUNELFNBQVMsRUFBQyx3QkFBd0I7MEJBQ3ZDLDRFQUFDaEIsb0RBQVE7b0JBQUNnQixTQUFTLEVBQUMsWUFBWTs7Ozs7eUJBQUc7Ozs7O3FCQUM3QjswQkFDUCw4REFBQ0UsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLDZCQUE2QjswQkFDekNSLCtDQUFZLENBQUMsU0FBQ1ksSUFBSSxFQUFFQyxLQUFLLEVBQUs7b0JBQzlCLHFCQUNDLDhEQUFDZCxrREFBSTt3QkFBQ2UsSUFBSSxFQUFFRixJQUFJLENBQUNHLElBQUk7a0NBQ3BCLDRFQUFDQyxJQUFFOzRCQUNGUixTQUFTLEVBQUMsMElBQTBJO3NDQVFuSkksSUFBSSxDQUFDSyxJQUFJOzJCQUZMSixLQUFLOzs7O2lDQU1OOzs7Ozs2QkFDQyxDQUNOO2dCQUNILENBQUMsQ0FBQzs7Ozs7cUJBQ0U7MEJBQ0wsOERBQUNLLEtBQUc7Z0JBQUNWLFNBQVMsRUFBQyx3SkFBd0o7MEJBQ3RLLDRFQUFDWCxtRUFBYztvQkFDZHNCLFFBQVEsRUFBRTsrQkFBTWQsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztxQkFBQTtvQkFDMUNnQixPQUFPLEVBQUVoQixVQUFVO29CQUNuQkksU0FBUyxFQUFDLEdBQUc7Ozs7O3lCQUNaOzs7OztxQkFDRzs7Ozs7O2FBQ0QsQ0FDTDtBQUNILENBQUM7R0E5Q0tQLE1BQU07O1FBQ2lCSCxpREFBUTtRQUVyQkwsa0RBQVM7OztBQUhuQlEsS0FBQUEsTUFBTTtBQWdEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L3dlYi9OYXZCYXIuanM/MmJiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZ01vbmRheSB9IGZyb20gJ3JlYWN0LWljb25zL2NnJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXlOaWdodFRvZ2dsZSBmcm9tICdyZWFjdC1kYXktYW5kLW5pZ2h0LXRvZ2dsZSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBuYXZMaW5rcyB9IGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcblx0Y29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cdGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGlmIChpc0RhcmtNb2RlID09IHRydWUpIHtcblx0XHRzZXRUaGVtZSgnZGFyaycpO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRoZW1lKCdsaWdodCcpO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCAgaC0xOCByb3VuZGVkLWItM3hsIGJnLXdoaXRlIGRhcms6YmctWyMyMjIyMjJdJz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC01eGwgdGV4dC1ncmF5LTcwMCc+XG5cdFx0XHRcdDxDZ01vbmRheSBjbGFzc05hbWU9J3JvdGF0ZS0xODAnIC8+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHNlbGYtZW5kIGgtMTInPlxuXHRcdFx0XHR7bmF2TGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtsaW5rLnBhdGh9PlxuXHRcdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctMjIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGN1cnNvci1wb2ludGVyIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGUgcHgtNCB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcnXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY2xhc3NOYW1lPXtgICR7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRsaW5rLnJvdXRlci5wYXRobmFtZSA9PT0gbGluay5wYXRoXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdD8gJ3RleHQtZ3JheS03MDAgYm9yZGVyLWItWzVweF0gYm9yZGVyLWdyYXktNzAwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZSB0by1ncmF5LTEwMCBkYXJrOmZyb20tWyMyMjIyMjJdJ1xuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHQ6ICd3LTIyIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBjdXJzb3ItcG9pbnRlciBmb250LW1lZGl1bSB0cmFja2luZy13aWRlc3QgcHgtMiBwdC1bMXJlbV0gdGV4dC1zbSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcnXG5cdFx0XHRcdFx0XHRcdFx0Ly8gfWB9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtsaW5rLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnktMzAwJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtsaW5rLmxhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj4gKi99XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIGRhcms6YmctWyMyMjIyMjJdIGhvdmVyOmJnLWdyYXktNTAgYm9yZGVyLTIgYm9yZGVyLWdyYXktNzAwIHRleHQtc20gdGV4dC1ncmF5LTcwMCBwLTEgbXktMSByb3VuZGVkLTN4bCBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIGxlYWRpbmctbm9uZSc+XG5cdFx0XHRcdDxEYXlOaWdodFRvZ2dsZVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiBzZXRJc0RhcmtNb2RlKCFpc0RhcmtNb2RlKX1cblx0XHRcdFx0XHRjaGVja2VkPXtpc0RhcmtNb2RlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nICdcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIkNnTW9uZGF5IiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRheU5pZ2h0VG9nZ2xlIiwidXNlVGhlbWUiLCJMaW5rIiwibmF2TGlua3MiLCJOYXZCYXIiLCJ0aGVtZSIsInNldFRoZW1lIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJyb3V0ZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJocmVmIiwicGF0aCIsImxpIiwibmFtZSIsImRpdiIsIm9uQ2hhbmdlIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/web/NavBar.js\n"));

/***/ })

});
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

/***/ "./components/Layout/NewNavbar.jsx":
/*!*****************************************!*\
  !*** ./components/Layout/NewNavbar.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layout/NewNavbar.module.css */ \"./components/Layout/NewNavbar.module.css\");\n/* harmony import */ var _Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme)(), theme = ref4.theme, setTheme = ref4.setTheme;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), isDarkMode = ref5[0], setIsDarkMode = ref5[1];\n    if (isDarkMode == true) {\n        setTheme(\"dark\");\n    } else {\n        setTheme(\"light\");\n    }\n    console.log(next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        className: \"header fixed top-0 w-screen z-[100] invisible md:visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().corner),\n                className: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                className: \"ml-[5p] nav\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().svg),\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().path),\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().ul),\n                        className: \"ul\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().a),\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().a),\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().a),\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().a),\n                                    href: \"/#contact\",\n                                    children: \"My Info\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().svg),\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().path),\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"corner -ml-12 mr-12 invisible md:visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    onChange: function() {\n                        return setIsDarkMode(!isDarkMode);\n                    },\n                    checked: isDarkMode,\n                    className: \"mt-2.5 ml-4\"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, _this);\n};\n_s(NewNavbar, \"nNVnivz9zCRf/+xMNYGyytVB3S8=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0QsU0FBUyxFQUFDLDBDQUEwQzswQkFDeEQsNEVBQUN6QixtRUFBYztvQkFDZHFDLFFBQVEsRUFBRTsrQkFBTWpCLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7cUJBQUE7b0JBQzFDbUIsT0FBTyxFQUFFbkIsVUFBVTtvQkFDbkJNLFNBQVMsRUFBQyxhQUFhOzs7Ozt5QkFDdEI7Ozs7O3FCQUVHOzs7Ozs7YUFDRSxDQUNSO0FBQ0gsQ0FBQztHQXRGS3RCLFNBQVM7O1FBc0JjRixpREFBUTs7O0FBdEIvQkUsS0FBQUEsU0FBUztBQXdGZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05ld05hdmJhci5qc3g/ZDFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSwgQWlPdXRsaW5lTWFpbCwgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhR2l0aHViLCBGYUxpbmtlZGluSW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCc0ZpbGxQZXJzb25MaW5lc0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRGF5TmlnaHRUb2dnbGUgZnJvbSAncmVhY3QtZGF5LWFuZC1uaWdodC10b2dnbGUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9MYXlvdXQvTmV3TmF2YmFyLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBOZXdOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtuYXZCZywgc2V0TmF2QmddID0gdXNlU3RhdGUoJyMyMjIyMjInKTtcblx0Y29uc3QgW2xpbmtDb2xvciwgc2V0TGlua0NvbG9yXSA9IHVzZVN0YXRlKCcjRjdGN0Y3Jyk7XG5cdFxuXG5cdGNvbnN0IGhhbmRsZU5hdiA9ICgpID0+IHtcblx0XHRzZXROYXYoIW5hdik7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVTaGFkb3cgPSAoKSA9PiB7XG5cdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPj0gOTApIHtcblx0XHRcdFx0c2V0U2hhZG93KHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0U2hhZG93KGZhbHNlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTaGFkb3cpO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cdGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKCk7XG5cblx0aWYgKGlzRGFya01vZGUgPT0gdHJ1ZSkge1xuXHRcdHNldFRoZW1lKCdkYXJrJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGhlbWUoJ2xpZ2h0Jyk7XG5cdH1cblx0Y29uc29sZS5sb2codXNlVGhlbWUpO1xuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlclxuXHRcdFx0Y2xhc3M9e2NsYXNzZXMuaGVhZGVyfVxuXHRcdFx0Y2xhc3NOYW1lPSdoZWFkZXIgZml4ZWQgdG9wLTAgdy1zY3JlZW4gei1bMTAwXSBpbnZpc2libGUgbWQ6dmlzaWJsZSdcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzLmNvcm5lcn0gY2xhc3NOYW1lPSdjb3JuZXInPjwvZGl2PlxuXG5cdFx0XHQ8bmF2IGNsYXNzPXtjbGFzc2VzLm5hdn0gY2xhc3NOYW1lPSdtbC1bNXBdIG5hdic+XG5cdFx0XHRcdDxzdmcgY2xhc3M9e2NsYXNzZXMuc3ZnfSB2aWV3Qm94PScwIDAgMiAzJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG5cdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdGNsYXNzPXtjbGFzc2VzLnBhdGh9XG5cdFx0XHRcdFx0XHRkPSdNMCwwIEwxLDIgQzEuNSwzIDEuNSwzIDIsMyBMMiwwIFonXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDx1bCBjbGFzcz17Y2xhc3Nlcy51bH0gY2xhc3NOYW1lPSd1bCc+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPXtjbGFzc2VzLmxpfSBjbGFzc05hbWU9JyB0ZXh0LXNtIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzPXtjbGFzc2VzLmF9IGhyZWY9Jy8nPlxuXHRcdFx0XHRcdFx0XHRIb21lXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9e2NsYXNzZXMubGl9IGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzPXtjbGFzc2VzLmF9IGhyZWY9Jy8jcHJvamVjdHMnPlxuXHRcdFx0XHRcdFx0XHRQcm9qZWN0c1xuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPXtjbGFzc2VzLmxpfSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzcz17Y2xhc3Nlcy5hfSBocmVmPScvcmVzdW1lJz5cblx0XHRcdFx0XHRcdFx0UmVzdW1lXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9e2NsYXNzZXMubGl9IGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzPXtjbGFzc2VzLmF9IGhyZWY9Jy8jY29udGFjdCc+XG5cdFx0XHRcdFx0XHRcdE15IEluZm9cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8c3ZnIGNsYXNzPXtjbGFzc2VzLnN2Z30gdmlld0JveD0nMCAwIDIgMycgYXJpYS1oaWRkZW49J3RydWUnPlxuXHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRjbGFzcz17Y2xhc3Nlcy5wYXRofVxuXHRcdFx0XHRcdFx0ZD0nTTAsMCBMMCwzIEMwLjUsMyAwLjUsMyAxLDIgTDIsMCBaJ1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb3JuZXIgLW1sLTEyIG1yLTEyIGludmlzaWJsZSBtZDp2aXNpYmxlJz5cblx0XHRcdFx0PERheU5pZ2h0VG9nZ2xlXG5cdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHNldElzRGFya01vZGUoIWlzRGFya01vZGUpfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e2lzRGFya01vZGV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC0yLjUgbWwtNCdcblx0XHRcdFx0Lz5cblx0XHRcdFx0ey8qIFRPRE8gcHV0IHNvbWV0aGluZyBlbHNlIGhlcmU/IGdpdGh1YiBsaW5rPyAqL31cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3TmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBaU91dGxpbmVDbG9zZSIsIkFpT3V0bGluZU1haWwiLCJBaU91dGxpbmVNZW51IiwiRmFHaXRodWIiLCJGYUxpbmtlZGluSW4iLCJCc0ZpbGxQZXJzb25MaW5lc0ZpbGwiLCJEYXlOaWdodFRvZ2dsZSIsInVzZVRoZW1lIiwiY2xhc3NlcyIsIk5ld05hdmJhciIsIm5hdiIsInNldE5hdiIsInNoYWRvdyIsInNldFNoYWRvdyIsIm5hdkJnIiwic2V0TmF2QmciLCJsaW5rQ29sb3IiLCJzZXRMaW5rQ29sb3IiLCJoYW5kbGVOYXYiLCJoYW5kbGVTaGFkb3ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW1lIiwic2V0VGhlbWUiLCJpc0RhcmtNb2RlIiwic2V0SXNEYXJrTW9kZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJjbGFzcyIsImNsYXNzTmFtZSIsImRpdiIsImNvcm5lciIsInN2ZyIsInZpZXdCb3giLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJkIiwidWwiLCJsaSIsImEiLCJocmVmIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/NewNavbar.jsx\n"));

/***/ })

});
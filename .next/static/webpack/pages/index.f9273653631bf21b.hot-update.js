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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout/NewNavbar.module.css */ \"./components/Layout/NewNavbar.module.css\");\n/* harmony import */ var _Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)(), theme = ref4.theme, setTheme = ref4.setTheme;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), isDarkMode = ref5[0], setIsDarkMode = ref5[1];\n    if (isDarkMode == true) {\n        setTheme(\"dark\");\n    } else {\n        setTheme(\"light\");\n    }\n    console.log(next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-12 h-12\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex justify-center fixed bg-white ml-[5p] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-\",\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().path),\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().ul),\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"My Info\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().svg),\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().path),\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-ml-12 mr-12 invisible md:visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    onChange: function() {\n                        return setIsDarkMode(!isDarkMode);\n                    },\n                    checked: isDarkMode,\n                    className: \"mt-2.5 ml-4\"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 80,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, _this);\n};\n_s(NewNavbar, \"nNVnivz9zCRf/+xMNYGyytVB3S8=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTs7O0FBckIvQkUsS0FBQUEsU0FBUztBQW9GZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05ld05hdmJhci5qc3g/ZDFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRGF5TmlnaHRUb2dnbGUgZnJvbSAncmVhY3QtZGF5LWFuZC1uaWdodC10b2dnbGUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9MYXlvdXQvTmV3TmF2YmFyLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBOZXdOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtuYXZCZywgc2V0TmF2QmddID0gdXNlU3RhdGUoJyMyMjIyMjInKTtcblx0Y29uc3QgW2xpbmtDb2xvciwgc2V0TGlua0NvbG9yXSA9IHVzZVN0YXRlKCcjRjdGN0Y3Jyk7XG5cblx0Y29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xuXHRcdHNldE5hdighbmF2KTtcblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVNoYWRvdyA9ICgpID0+IHtcblx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuXHRcdFx0XHRzZXRTaGFkb3codHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTaGFkb3coZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNoYWRvdyk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblx0Y29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGUoKTtcblxuXHRpZiAoaXNEYXJrTW9kZSA9PSB0cnVlKSB7XG5cdFx0c2V0VGhlbWUoJ2RhcmsnKTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaGVtZSgnbGlnaHQnKTtcblx0fVxuXHRjb25zb2xlLmxvZyh1c2VUaGVtZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xMiBoLTEyJz48L2Rpdj5cblxuXHRcdFx0PG5hdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgZml4ZWQgYmctd2hpdGUgbWwtWzVwXSAnPlxuXHRcdFx0XHQ8c3ZnIGNsYXNzTmFtZT0ndy0nIHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0Y2xhc3M9e2NsYXNzZXMucGF0aH1cblx0XHRcdFx0XHRcdGQ9J00wLDAgTDEsMiBDMS41LDMgMS41LDMgMiwzIEwyLDAgWidcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PHVsIGNsYXNzPXtjbGFzc2VzLnVsfSBjbGFzc05hbWU9Jyc+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPXtjbGFzc2VzLmxpfSBjbGFzc05hbWU9JyB0ZXh0LXNtIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rICBocmVmPScvJz5cblx0XHRcdFx0XHRcdFx0SG9tZVxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPXtjbGFzc2VzLmxpfSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayAgaHJlZj0nLyNwcm9qZWN0cyc+XG5cdFx0XHRcdFx0XHRcdFByb2plY3RzXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9e2NsYXNzZXMubGl9IGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rICBocmVmPScvcmVzdW1lJz5cblx0XHRcdFx0XHRcdFx0UmVzdW1lXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9e2NsYXNzZXMubGl9IGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rICBocmVmPScvI2NvbnRhY3QnPlxuXHRcdFx0XHRcdFx0XHRNeSBJbmZvXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PHN2ZyBjbGFzcz17Y2xhc3Nlcy5zdmd9IHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0Y2xhc3M9e2NsYXNzZXMucGF0aH1cblx0XHRcdFx0XHRcdGQ9J00wLDAgTDAsMyBDMC41LDMgMC41LDMgMSwyIEwyLDAgWidcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvbmF2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nLW1sLTEyIG1yLTEyIGludmlzaWJsZSBtZDp2aXNpYmxlJz5cblx0XHRcdFx0PERheU5pZ2h0VG9nZ2xlXG5cdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHNldElzRGFya01vZGUoIWlzRGFya01vZGUpfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e2lzRGFya01vZGV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC0yLjUgbWwtNCdcblx0XHRcdFx0Lz5cblx0XHRcdFx0ey8qIFRPRE8gcHV0IHNvbWV0aGluZyBlbHNlIGhlcmU/IGdpdGh1YiBsaW5rPyAqL31cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3TmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGF5TmlnaHRUb2dnbGUiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJOZXdOYXZiYXIiLCJuYXYiLCJzZXROYXYiLCJzaGFkb3ciLCJzZXRTaGFkb3ciLCJuYXZCZyIsInNldE5hdkJnIiwibGlua0NvbG9yIiwic2V0TGlua0NvbG9yIiwiaGFuZGxlTmF2IiwiaGFuZGxlU2hhZG93Iiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3ZnIiwidmlld0JveCIsImFyaWEtaGlkZGVuIiwicGF0aCIsImNsYXNzIiwiZCIsInVsIiwibGkiLCJocmVmIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/NewNavbar.jsx\n"));

/***/ })

});
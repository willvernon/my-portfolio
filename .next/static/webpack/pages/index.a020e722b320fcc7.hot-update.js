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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)(), theme = ref4.theme, setTheme = ref4.setTheme;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), isDarkMode = ref5[0], setIsDarkMode = ref5[1];\n    if (isDarkMode == true) {\n        setTheme(\"dark\");\n    } else {\n        setTheme(\"light\");\n    }\n    console.log(next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-12 h-12\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex justify-center fixed bg-white ml-[5p] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-8 h-12 block\",\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            className: \"fill-white\",\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex relative justify-center items-center bg-white bg-contain p-0 m-0 h-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" relative px-2 text-sm hover:border-t \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" relative px-2 text-sm hover:border-t \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" relative px-2 text-sm hover:border-t \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" relative px-2 text-sm hover:border-t \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"My Info\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-8 h-12 block\",\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            className: \"fill-white\",\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-ml-12 mr-12 invisible md:visible \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    onChange: function() {\n                        return setIsDarkMode(!isDarkMode);\n                    },\n                    checked: isDarkMode,\n                    className: \"mt-2.5 ml-4 flex items-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 80,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, _this);\n};\n_s(NewNavbar, \"nNVnivz9zCRf/+xMNYGyytVB3S8=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFDLHdDQUF5QzswQ0FDdEQsNEVBQUM1QixrREFBSTtvQ0FBQ3FDLElBQUksRUFBQyxZQUFZOzhDQUFDLFVBQVE7Ozs7O3lDQUFPOzs7OztxQ0FDbkM7MENBQ0wsOERBQUNELElBQUU7Z0NBQUNSLFNBQVMsRUFBQyx3Q0FBeUM7MENBQ3RELDRFQUFDNUIsa0RBQUk7b0NBQUNxQyxJQUFJLEVBQUMsU0FBUzs4Q0FBQyxRQUFNOzs7Ozt5Q0FBTzs7Ozs7cUNBQzlCOzBDQUNMLDhEQUFDRCxJQUFFO2dDQUFDUixTQUFTLEVBQUMsd0NBQXlDOzBDQUN0RCw0RUFBQzVCLGtEQUFJO29DQUFDcUMsSUFBSSxFQUFDLFdBQVc7OENBQUMsU0FBTzs7Ozs7eUNBQU87Ozs7O3FDQUNqQzs7Ozs7OzZCQUNEO2tDQUNMLDhEQUFDUCxLQUFHO3dCQUNIRixTQUFTLEVBQUMsZ0JBQWdCO3dCQUMxQkcsT0FBTyxFQUFDLFNBQVM7d0JBQ2pCQyxhQUFXLEVBQUMsTUFBTTtrQ0FFbEIsNEVBQUNDLE1BQUk7NEJBQ0pMLFNBQVMsRUFBQyxZQUFZOzRCQUN0Qk0sQ0FBQyxFQUFDLG1DQUFtQzs7Ozs7aUNBQ3BDOzs7Ozs2QkFDRzs7Ozs7O3FCQUNEOzBCQUVOLDhEQUFDTCxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsb0NBQW9DOzBCQUNsRCw0RUFBQ3hCLG1FQUFjO29CQUNka0MsUUFBUSxFQUFFOytCQUFNZCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO3FCQUFBO29CQUMxQ2dCLE9BQU8sRUFBRWhCLFVBQVU7b0JBQ25CSyxTQUFTLEVBQUMsK0JBQStCOzs7Ozt5QkFDeEM7Ozs7O3FCQUVHOzs7Ozs7YUFDRSxDQUNSO0FBQ0gsQ0FBQztHQWxGS3JCLFNBQVM7O1FBcUJjRixpREFBUTs7O0FBckIvQkUsS0FBQUEsU0FBUztBQW9GZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05ld05hdmJhci5qc3g/ZDFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRGF5TmlnaHRUb2dnbGUgZnJvbSAncmVhY3QtZGF5LWFuZC1uaWdodC10b2dnbGUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9MYXlvdXQvTmV3TmF2YmFyLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBOZXdOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtuYXZCZywgc2V0TmF2QmddID0gdXNlU3RhdGUoJyMyMjIyMjInKTtcblx0Y29uc3QgW2xpbmtDb2xvciwgc2V0TGlua0NvbG9yXSA9IHVzZVN0YXRlKCcjRjdGN0Y3Jyk7XG5cblx0Y29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xuXHRcdHNldE5hdighbmF2KTtcblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVNoYWRvdyA9ICgpID0+IHtcblx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuXHRcdFx0XHRzZXRTaGFkb3codHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTaGFkb3coZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNoYWRvdyk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblx0Y29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGUoKTtcblxuXHRpZiAoaXNEYXJrTW9kZSA9PSB0cnVlKSB7XG5cdFx0c2V0VGhlbWUoJ2RhcmsnKTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaGVtZSgnbGlnaHQnKTtcblx0fVxuXHRjb25zb2xlLmxvZyh1c2VUaGVtZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xMiBoLTEyJz48L2Rpdj5cblxuXHRcdFx0PG5hdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgZml4ZWQgYmctd2hpdGUgbWwtWzVwXSAnPlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTggaC0xMiBibG9jaydcblx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMiAzJ1xuXHRcdFx0XHRcdGFyaWEtaGlkZGVuPSd0cnVlJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmlsbC13aGl0ZSdcblx0XHRcdFx0XHRcdGQ9J00wLDAgTDEsMiBDMS41LDMgMS41LDMgMiwzIEwyLDAgWidcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nZmxleCByZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctd2hpdGUgYmctY29udGFpbiBwLTAgbS0wIGgtMTInPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyByZWxhdGl2ZSBweC0yIHRleHQtc20gaG92ZXI6Ym9yZGVyLXQgICc+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHJlbGF0aXZlIHB4LTIgdGV4dC1zbSBob3Zlcjpib3JkZXItdCAgJz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy8jcHJvamVjdHMnPlByb2plY3RzPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHJlbGF0aXZlIHB4LTIgdGV4dC1zbSBob3Zlcjpib3JkZXItdCAgJz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXN1bWUnPlJlc3VtZTwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyByZWxhdGl2ZSBweC0yIHRleHQtc20gaG92ZXI6Ym9yZGVyLXQgICc+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI2NvbnRhY3QnPk15IEluZm88L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ndy04IGgtMTIgYmxvY2snXG5cdFx0XHRcdFx0dmlld0JveD0nMCAwIDIgMydcblx0XHRcdFx0XHRhcmlhLWhpZGRlbj0ndHJ1ZSdcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZpbGwtd2hpdGUnXG5cdFx0XHRcdFx0XHRkPSdNMCwwIEwwLDMgQzAuNSwzIDAuNSwzIDEsMiBMMiwwIFonXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L25hdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9Jy1tbC0xMiBtci0xMiBpbnZpc2libGUgbWQ6dmlzaWJsZSAnPlxuXHRcdFx0XHQ8RGF5TmlnaHRUb2dnbGVcblx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4gc2V0SXNEYXJrTW9kZSghaXNEYXJrTW9kZSl9XG5cdFx0XHRcdFx0Y2hlY2tlZD17aXNEYXJrTW9kZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9J210LTIuNSBtbC00IGZsZXggaXRlbXMtY2VudGVyJ1xuXHRcdFx0XHQvPlxuXHRcdFx0XHR7LyogVE9ETyBwdXQgc29tZXRoaW5nIGVsc2UgaGVyZT8gZ2l0aHViIGxpbms/ICovfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdOYXZiYXI7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEYXlOaWdodFRvZ2dsZSIsInVzZVRoZW1lIiwiY2xhc3NlcyIsIk5ld05hdmJhciIsIm5hdiIsInNldE5hdiIsInNoYWRvdyIsInNldFNoYWRvdyIsIm5hdkJnIiwic2V0TmF2QmciLCJsaW5rQ29sb3IiLCJzZXRMaW5rQ29sb3IiLCJoYW5kbGVOYXYiLCJoYW5kbGVTaGFkb3ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW1lIiwic2V0VGhlbWUiLCJpc0RhcmtNb2RlIiwic2V0SXNEYXJrTW9kZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzdmciLCJ2aWV3Qm94IiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsInVsIiwibGkiLCJocmVmIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/NewNavbar.jsx\n"));

/***/ })

});
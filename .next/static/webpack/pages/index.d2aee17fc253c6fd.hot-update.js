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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout/NewNavbar.module.css */ \"./components/Layout/NewNavbar.module.css\");\n/* harmony import */ var _Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)(), theme = ref4.theme, setTheme = ref4.setTheme;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), isDarkMode = ref5[0], setIsDarkMode = ref5[1];\n    if (isDarkMode == true) {\n        setTheme(\"dark\");\n    } else {\n        setTheme(\"light\");\n    }\n    console.log(next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-12 h-12\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex justify-center fixed bg-white ml-[5p] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-8 h-12 block\",\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            className: \"fill-white\",\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex relative justify-center items-center bg-white bg-contain p-0 m-0 h-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" relative text-sm hover:border-t \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" relative text-sm hover:border-t \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"My Info\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        class: (_Layout_NewNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().svg),\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            className: \"fill-white\",\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-ml-12 mr-12 invisible md:visible\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/NewNavbar.jsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, _this);\n};\n_s(NewNavbar, \"nNVnivz9zCRf/+xMNYGyytVB3S8=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixTQUFTLEVBQUMsbUNBQW9DOzBDQUNqRCw0RUFBQzVCLGtEQUFJO29DQUFDcUMsSUFBSSxFQUFDLFlBQVk7OENBQUMsVUFBUTs7Ozs7eUNBQU87Ozs7O3FDQUNuQzswQ0FDTCw4REFBQ0QsSUFBRTtnQ0FBQ0UsS0FBSyxFQUFFaEMsd0VBQVU7Z0NBQUVzQixTQUFTLEVBQUMseUJBQTBCOzBDQUMxRCw0RUFBQzVCLGtEQUFJO29DQUFDcUMsSUFBSSxFQUFDLFNBQVM7OENBQUMsUUFBTTs7Ozs7eUNBQU87Ozs7O3FDQUM5QjswQ0FDTCw4REFBQ0QsSUFBRTtnQ0FBQ0UsS0FBSyxFQUFFaEMsd0VBQVU7Z0NBQUVzQixTQUFTLEVBQUMseUJBQTBCOzBDQUMxRCw0RUFBQzVCLGtEQUFJO29DQUFDcUMsSUFBSSxFQUFDLFdBQVc7OENBQUMsU0FBTzs7Ozs7eUNBQU87Ozs7O3FDQUNqQzs7Ozs7OzZCQUNEO2tDQUNMLDhEQUFDUCxLQUFHO3dCQUFDUSxLQUFLLEVBQUVoQyx5RUFBVzt3QkFBRXlCLE9BQU8sRUFBQyxTQUFTO3dCQUFDQyxhQUFXLEVBQUMsTUFBTTtrQ0FDNUQsNEVBQUNDLE1BQUk7NEJBQ0pMLFNBQVMsRUFBQyxZQUFZOzRCQUN0Qk0sQ0FBQyxFQUFDLG1DQUFtQzs7Ozs7aUNBQ3BDOzs7Ozs2QkFDRzs7Ozs7O3FCQUNEOzBCQUVOLDhEQUFDTCxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsbUNBQW1DOzs7OztxQkFPNUM7Ozs7OzthQUNFLENBQ1I7QUFDSCxDQUFDO0dBOUVLckIsU0FBUzs7UUFxQmNGLGlEQUFROzs7QUFyQi9CRSxLQUFBQSxTQUFTO0FBZ0ZmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTmV3TmF2YmFyLmpzeD9kMWZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBEYXlOaWdodFRvZ2dsZSBmcm9tICdyZWFjdC1kYXktYW5kLW5pZ2h0LXRvZ2dsZSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL0xheW91dC9OZXdOYXZiYXIubW9kdWxlLmNzcyc7XG5cbmNvbnN0IE5ld05hdmJhciA9ICgpID0+IHtcblx0Y29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NoYWRvdywgc2V0U2hhZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW25hdkJnLCBzZXROYXZCZ10gPSB1c2VTdGF0ZSgnIzIyMjIyMicpO1xuXHRjb25zdCBbbGlua0NvbG9yLCBzZXRMaW5rQ29sb3JdID0gdXNlU3RhdGUoJyNGN0Y3RjcnKTtcblxuXHRjb25zdCBoYW5kbGVOYXYgPSAoKSA9PiB7XG5cdFx0c2V0TmF2KCFuYXYpO1xuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlU2hhZG93ID0gKCkgPT4ge1xuXHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZID49IDkwKSB7XG5cdFx0XHRcdHNldFNoYWRvdyh0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFNoYWRvdyhmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2hhZG93KTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXHRjb25zdCBbaXNEYXJrTW9kZSwgc2V0SXNEYXJrTW9kZV0gPSB1c2VTdGF0ZSgpO1xuXG5cdGlmIChpc0RhcmtNb2RlID09IHRydWUpIHtcblx0XHRzZXRUaGVtZSgnZGFyaycpO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRoZW1lKCdsaWdodCcpO1xuXHR9XG5cdGNvbnNvbGUubG9nKHVzZVRoZW1lKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTEyIGgtMTInPjwvZGl2PlxuXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBmaXhlZCBiZy13aGl0ZSBtbC1bNXBdICc+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRjbGFzc05hbWU9J3ctOCBoLTEyIGJsb2NrJ1xuXHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAyIDMnXG5cdFx0XHRcdFx0YXJpYS1oaWRkZW49J3RydWUnXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmaWxsLXdoaXRlJ1xuXHRcdFx0XHRcdFx0ZD0nTTAsMCBMMSwyIEMxLjUsMyAxLjUsMyAyLDMgTDIsMCBaJ1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdmbGV4IHJlbGF0aXZlIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBiZy1jb250YWluIHAtMCBtLTAgaC0xMic+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHJlbGF0aXZlIHRleHQtc20gaG92ZXI6Ym9yZGVyLXQgICc+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHJlbGF0aXZlIHRleHQtc20gaG92ZXI6Ym9yZGVyLXQgICc+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI3Byb2plY3RzJz5Qcm9qZWN0czwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz17Y2xhc3Nlcy5saX0gY2xhc3NOYW1lPScgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3Jlc3VtZSc+UmVzdW1lPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPXtjbGFzc2VzLmxpfSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI2NvbnRhY3QnPk15IEluZm88L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PHN2ZyBjbGFzcz17Y2xhc3Nlcy5zdmd9IHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmaWxsLXdoaXRlJ1xuXHRcdFx0XHRcdFx0ZD0nTTAsMCBMMCwzIEMwLjUsMyAwLjUsMyAxLDIgTDIsMCBaJ1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSctbWwtMTIgbXItMTIgaW52aXNpYmxlIG1kOnZpc2libGUnPlxuXHRcdFx0XHR7LyogPERheU5pZ2h0VG9nZ2xlXG5cdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHNldElzRGFya01vZGUoIWlzRGFya01vZGUpfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e2lzRGFya01vZGV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC0yLjUgbWwtNCdcblx0XHRcdFx0Lz4gKi99XG5cdFx0XHRcdHsvKiBUT0RPIHB1dCBzb21ldGhpbmcgZWxzZSBoZXJlPyBnaXRodWIgbGluaz8gKi99XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld05hdmJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRheU5pZ2h0VG9nZ2xlIiwidXNlVGhlbWUiLCJjbGFzc2VzIiwiTmV3TmF2YmFyIiwibmF2Iiwic2V0TmF2Iiwic2hhZG93Iiwic2V0U2hhZG93IiwibmF2QmciLCJzZXROYXZCZyIsImxpbmtDb2xvciIsInNldExpbmtDb2xvciIsImhhbmRsZU5hdiIsImhhbmRsZVNoYWRvdyIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbWUiLCJzZXRUaGVtZSIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwiY29uc29sZSIsImxvZyIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsInN2ZyIsInZpZXdCb3giLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJkIiwidWwiLCJsaSIsImhyZWYiLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/NewNavbar.jsx\n"));

/***/ })

});
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

/***/ "./components/NewNavbar.jsx":
/*!**********************************!*\
  !*** ./components/NewNavbar.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_MeMoji_Mac_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/MeMoji-Mac.png */ \"./public/assets/MeMoji-Mac.png\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    // const [position, setPosition] = useState('fixed')\n    // const router = useRouter();\n    // useEffect(() => {\n    //   if (\n    //     router.asPath === '/property' ||\n    //     router.asPath === '/crypto' ||\n    //     router.asPath === '/netflix' ||\n    //     router.asPath === '/twitch'\n    //   ) {\n    //     setNavBg('transparent');\n    //     setLinkColor('#ecf0f3');\n    //   } else {\n    //     setNavBg('#ecf0f3');\n    //     setLinkColor('#1f2937');\n    //   }\n    // }, [router]);\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)(), theme = ref4.theme, setTheme = ref4.setTheme;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isDarkMode = ref5[0], setIsDarkMode = ref5[1];\n    var x = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: shadow ? \"shadow-xl z-[100] ease-in-out duration-300\" : \"  z-[100]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    onChange: function() {\n                                        return setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n                                    },\n                                    checked: false,\n                                    className: \"mt-2.5 ml-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 100,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n        lineNumber: 56,\n        columnNumber: 3\n    }, _this);\n    console.log(theme);\n};\n_s(NewNavbar, \"E7HHCKs6v56HvqRASQEX/MuWyIM=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3TmF2YmFyLmpzeD85Mzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlLCBBaU91dGxpbmVNYWlsLCBBaU91dGxpbmVNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRmFHaXRodWIsIEZhTGlua2VkaW5JbiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IEJzRmlsbFBlcnNvbkxpbmVzRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOYXZMb2dvIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvTWVNb2ppLU1hYy5wbmcnO1xuaW1wb3J0IERheU5pZ2h0VG9nZ2xlIGZyb20gJ3JlYWN0LWRheS1hbmQtbmlnaHQtdG9nZ2xlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xuXG5jb25zdCBOZXdOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtuYXZCZywgc2V0TmF2QmddID0gdXNlU3RhdGUoJyMyMjIyMjInKTtcblx0Y29uc3QgW2xpbmtDb2xvciwgc2V0TGlua0NvbG9yXSA9IHVzZVN0YXRlKCcjRjdGN0Y3Jyk7XG5cdC8vIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoJ2ZpeGVkJylcblx0Ly8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcblx0Ly8gICBpZiAoXG5cdC8vICAgICByb3V0ZXIuYXNQYXRoID09PSAnL3Byb3BlcnR5JyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9jcnlwdG8nIHx8XG5cdC8vICAgICByb3V0ZXIuYXNQYXRoID09PSAnL25ldGZsaXgnIHx8XG5cdC8vICAgICByb3V0ZXIuYXNQYXRoID09PSAnL3R3aXRjaCdcblx0Ly8gICApIHtcblx0Ly8gICAgIHNldE5hdkJnKCd0cmFuc3BhcmVudCcpO1xuXHQvLyAgICAgc2V0TGlua0NvbG9yKCcjZWNmMGYzJyk7XG5cdC8vICAgfSBlbHNlIHtcblx0Ly8gICAgIHNldE5hdkJnKCcjZWNmMGYzJyk7XG5cdC8vICAgICBzZXRMaW5rQ29sb3IoJyMxZjI5MzcnKTtcblx0Ly8gICB9XG5cdC8vIH0sIFtyb3V0ZXJdKTtcblxuXHRjb25zdCBoYW5kbGVOYXYgPSAoKSA9PiB7XG5cdFx0c2V0TmF2KCFuYXYpO1xuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlU2hhZG93ID0gKCkgPT4ge1xuXHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZID49IDkwKSB7XG5cdFx0XHRcdHNldFNoYWRvdyh0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFNoYWRvdyhmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2hhZG93KTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRsZXQgeCA9IGZhbHNlXG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgdy1zY3JlZW4nPlxuXHRcdFx0PGRpdiBjbGFzcz0nY29ybmVyJz48L2Rpdj5cblxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PHN2ZyB2aWV3Qm94PScwIDAgMiAzJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG5cdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMMSwyIEMxLjUsMyAxLjUsMyAyLDMgTDIsMCBaJyAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PHVsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHNoYWRvd1xuXHRcdFx0XHRcdFx0XHQ/ICdzaGFkb3cteGwgei1bMTAwXSBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAnXG5cdFx0XHRcdFx0XHRcdDogJyAgei1bMTAwXSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPScgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nLyc+SG9tZTwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI3Byb2plY3RzJz5Qcm9qZWN0czwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVzdW1lJz5SZXN1bWU8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPScgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nLyNjb250YWN0Jz5Db250YWN0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PERheU5pZ2h0VG9nZ2xlXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldFRoZW1lKHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC0yLjUgbWwtNCdcblx0XHRcdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PHN2ZyB2aWV3Qm94PScwIDAgMiAzJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG5cdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMMCwzIEMwLjUsMyAwLjUsMyAxLDIgTDIsMCBaJyAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvbmF2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPSdjb3JuZXInPlxuXHRcdFx0XHR7LyogVE9ETyBwdXQgc29tZXRoaW5nIGVsc2UgaGVyZT8gZ2l0aHViIGxpbms/ICovfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7Y29uc29sZS5sb2codGhlbWUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3TmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBaU91dGxpbmVDbG9zZSIsIkFpT3V0bGluZU1haWwiLCJBaU91dGxpbmVNZW51IiwiRmFHaXRodWIiLCJGYUxpbmtlZGluSW4iLCJCc0ZpbGxQZXJzb25MaW5lc0ZpbGwiLCJOYXZMb2dvIiwiRGF5TmlnaHRUb2dnbGUiLCJ1c2VUaGVtZSIsIk5ld05hdmJhciIsIm5hdiIsInNldE5hdiIsInNoYWRvdyIsInNldFNoYWRvdyIsIm5hdkJnIiwic2V0TmF2QmciLCJsaW5rQ29sb3IiLCJzZXRMaW5rQ29sb3IiLCJoYW5kbGVOYXYiLCJoYW5kbGVTaGFkb3ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW1lIiwic2V0VGhlbWUiLCJpc0RhcmtNb2RlIiwic2V0SXNEYXJrTW9kZSIsIngiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJjbGFzcyIsInN2ZyIsInZpZXdCb3giLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJkIiwidWwiLCJsaSIsImhyZWYiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewNavbar.jsx\n"));

/***/ })

});
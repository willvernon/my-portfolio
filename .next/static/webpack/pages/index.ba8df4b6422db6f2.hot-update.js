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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_MeMoji_Mac_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/MeMoji-Mac.png */ \"./public/assets/MeMoji-Mac.png\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    // const [position, setPosition] = useState('fixed')\n    // const router = useRouter();\n    // useEffect(() => {\n    //   if (\n    //     router.asPath === '/property' ||\n    //     router.asPath === '/crypto' ||\n    //     router.asPath === '/netflix' ||\n    //     router.asPath === '/twitch'\n    //   ) {\n    //     setNavBg('transparent');\n    //     setLinkColor('#ecf0f3');\n    //   } else {\n    //     setNavBg('#ecf0f3');\n    //     setLinkColor('#1f2937');\n    //   }\n    // }, [router]);\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)(), 2), theme = ref4[0], setTheme = ref4[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: shadow ? \"shadow-xl z-[100] ease-in-out duration-300\" : \"  z-[100]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    onChange: function() {\n                                        return setIsDarkMode(!isDarkMode);\n                                    },\n                                    checked: isDarkMode,\n                                    className: \"mt-2.5 ml-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 92,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, _this);\n};\n_s(NewNavbar, \"UZJ5wL0FDA6yAT24AGEOqkQu6lc=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxJQUFFO2dDQUFDVCxTQUFTLEVBQUMseUJBQTBCOzBDQUN2Qyw0RUFBQy9CLGtEQUFJO29DQUFDeUMsSUFBSSxFQUFDLFNBQVM7OENBQUMsUUFBTTs7Ozs7eUNBQU87Ozs7O3FDQUM5QjswQ0FDTCw4REFBQ0QsSUFBRTtnQ0FBQ1QsU0FBUyxFQUFDLHlCQUEwQjswQ0FDdkMsNEVBQUMvQixrREFBSTtvQ0FBQ3lDLElBQUksRUFBQyxXQUFXOzhDQUFDLFNBQU87Ozs7O3lDQUFPOzs7OztxQ0FDakM7MENBQ0wsOERBQUNELElBQUU7MENBQ0YsNEVBQUM1QixtRUFBYztvQ0FDZDhCLFFBQVEsRUFBRTsrQ0FBTUMsYUFBYSxDQUFDLENBQUNDLFVBQVUsQ0FBQztxQ0FBQTtvQ0FDMUNDLE9BQU8sRUFBRUQsVUFBVTtvQ0FDbkJiLFNBQVMsRUFBQyxhQUFhOzs7Ozt5Q0FDdEI7Ozs7O3FDQUNFOzs7Ozs7NkJBQ0Q7a0NBQ0wsOERBQUNHLEtBQUc7d0JBQUNDLE9BQU8sRUFBQyxTQUFTO3dCQUFDQyxhQUFXLEVBQUMsTUFBTTtrQ0FDeEMsNEVBQUNDLE1BQUk7NEJBQUNDLENBQUMsRUFBQyxtQ0FBbUM7Ozs7O2lDQUFHOzs7Ozs2QkFDekM7Ozs7OztxQkFDRDswQkFFTiw4REFBQ04sS0FBRztnQkFBQ0MsS0FBSyxFQUFDLFFBQVE7Ozs7O3FCQUViOzs7Ozs7YUFDRSxDQUNSO0FBQ0gsQ0FBQztHQXJGS25CLFNBQVM7O1FBc0NZRCxpREFBUTs7O0FBdEM3QkMsS0FBQUEsU0FBUztBQXVGZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3TmF2YmFyLmpzeD85Mzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlLCBBaU91dGxpbmVNYWlsLCBBaU91dGxpbmVNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRmFHaXRodWIsIEZhTGlua2VkaW5JbiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IEJzRmlsbFBlcnNvbkxpbmVzRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOYXZMb2dvIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvTWVNb2ppLU1hYy5wbmcnO1xuaW1wb3J0IERheU5pZ2h0VG9nZ2xlIGZyb20gJ3JlYWN0LWRheS1hbmQtbmlnaHQtdG9nZ2xlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xuXG5jb25zdCBOZXdOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtuYXZCZywgc2V0TmF2QmddID0gdXNlU3RhdGUoJyMyMjIyMjInKTtcblx0Y29uc3QgW2xpbmtDb2xvciwgc2V0TGlua0NvbG9yXSA9IHVzZVN0YXRlKCcjRjdGN0Y3Jyk7XG5cdC8vIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoJ2ZpeGVkJylcblx0Ly8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcblx0Ly8gICBpZiAoXG5cdC8vICAgICByb3V0ZXIuYXNQYXRoID09PSAnL3Byb3BlcnR5JyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9jcnlwdG8nIHx8XG5cdC8vICAgICByb3V0ZXIuYXNQYXRoID09PSAnL25ldGZsaXgnIHx8XG5cdC8vICAgICByb3V0ZXIuYXNQYXRoID09PSAnL3R3aXRjaCdcblx0Ly8gICApIHtcblx0Ly8gICAgIHNldE5hdkJnKCd0cmFuc3BhcmVudCcpO1xuXHQvLyAgICAgc2V0TGlua0NvbG9yKCcjZWNmMGYzJyk7XG5cdC8vICAgfSBlbHNlIHtcblx0Ly8gICAgIHNldE5hdkJnKCcjZWNmMGYzJyk7XG5cdC8vICAgICBzZXRMaW5rQ29sb3IoJyMxZjI5MzcnKTtcblx0Ly8gICB9XG5cdC8vIH0sIFtyb3V0ZXJdKTtcblxuXHRjb25zdCBoYW5kbGVOYXYgPSAoKSA9PiB7XG5cdFx0c2V0TmF2KCFuYXYpO1xuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlU2hhZG93ID0gKCkgPT4ge1xuXHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZID49IDkwKSB7XG5cdFx0XHRcdHNldFNoYWRvdyh0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFNoYWRvdyhmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2hhZG93KTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlVGhlbWUoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCB3LXNjcmVlbic+XG5cdFx0XHQ8ZGl2IGNsYXNzPSdjb3JuZXInPjwvZGl2PlxuXG5cdFx0XHQ8bmF2PlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEwxLDIgQzEuNSwzIDEuNSwzIDIsMyBMMiwwIFonIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8dWxcblx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0c2hhZG93XG5cdFx0XHRcdFx0XHRcdD8gJ3NoYWRvdy14bCB6LVsxMDBdIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCdcblx0XHRcdFx0XHRcdFx0OiAnICB6LVsxMDBdJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy8jcHJvamVjdHMnPlByb2plY3RzPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXN1bWUnPlJlc3VtZTwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI2NvbnRhY3QnPkNvbnRhY3Q8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8RGF5TmlnaHRUb2dnbGVcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHNldElzRGFya01vZGUoIWlzRGFya01vZGUpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtpc0RhcmtNb2RlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTIuNSBtbC00J1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEwwLDMgQzAuNSwzIDAuNSwzIDEsMiBMMiwwIFonIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9J2Nvcm5lcic+XG5cdFx0XHRcdHsvKiBUT0RPIHB1dCBzb21ldGhpbmcgZWxzZSBoZXJlPyBnaXRodWIgbGluaz8gKi99XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld05hdmJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWlPdXRsaW5lQ2xvc2UiLCJBaU91dGxpbmVNYWlsIiwiQWlPdXRsaW5lTWVudSIsIkZhR2l0aHViIiwiRmFMaW5rZWRpbkluIiwiQnNGaWxsUGVyc29uTGluZXNGaWxsIiwiTmF2TG9nbyIsIkRheU5pZ2h0VG9nZ2xlIiwidXNlVGhlbWUiLCJOZXdOYXZiYXIiLCJuYXYiLCJzZXROYXYiLCJzaGFkb3ciLCJzZXRTaGFkb3ciLCJuYXZCZyIsInNldE5hdkJnIiwibGlua0NvbG9yIiwic2V0TGlua0NvbG9yIiwiaGFuZGxlTmF2IiwiaGFuZGxlU2hhZG93Iiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJzdmciLCJ2aWV3Qm94IiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsInVsIiwibGkiLCJocmVmIiwib25DaGFuZ2UiLCJzZXRJc0RhcmtNb2RlIiwiaXNEYXJrTW9kZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NewNavbar.jsx\n"));

/***/ })

});
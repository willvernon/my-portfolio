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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_MeMoji_Mac_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/MeMoji-Mac.png */ \"./public/assets/MeMoji-Mac.png\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useRouter } from 'next/router';\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    // const [position, setPosition] = useState('fixed')\n    // const router = useRouter();\n    // useEffect(() => {\n    //   if (\n    //     router.asPath === '/property' ||\n    //     router.asPath === '/crypto' ||\n    //     router.asPath === '/netflix' ||\n    //     router.asPath === '/twitch'\n    //   ) {\n    //     setNavBg('transparent');\n    //     setLinkColor('#ecf0f3');\n    //   } else {\n    //     setNavBg('#ecf0f3');\n    //     setLinkColor('#1f2937');\n    //   }\n    // }, [router]);\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: shadow ? \"fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300\" : \"fixed w-full h-20 z-[100]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"fixed top-0 w-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"corner\"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            viewBox: \"0 0 2 3\",\n                            \"aria-hidden\": \"true\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 7\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"ml-2 text-sm hover:border-b\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 8\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"ml-2 text-sm hover:border-b\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/#projects\",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 8\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"ml-2 text-sm hover:border-b\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/resume\",\n                                        children: \"Resume\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 8\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"ml-2 text-sm hover:border-b\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/#contact\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 8\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            viewBox: \"0 0 2 3\",\n                            \"aria-hidden\": \"true\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 7\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"corner\"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n            lineNumber: 54,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, _this);\n};\n_s(NewNavbar, \"tR0gMb/jl1nUAJdKmSHz8wm9s44=\");\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO2tEQUFDLFFBQU07Ozs7OzZDQUFPOzs7Ozt5Q0FDOUI7OENBQ0wsOERBQUNELElBQUU7b0NBQUNULFNBQVMsRUFBQyw2QkFBOEI7OENBQzNDLDRFQUFDM0Isa0RBQUk7d0NBQUNxQyxJQUFJLEVBQUMsV0FBVztrREFBQyxTQUFPOzs7Ozs2Q0FBTzs7Ozs7eUNBQ2pDOzs7Ozs7aUNBQ0Q7c0NBQ0wsOERBQUNQLEtBQUc7NEJBQUNDLE9BQU8sRUFBQyxTQUFTOzRCQUFDQyxhQUFXLEVBQUMsTUFBTTtzQ0FDeEMsNEVBQUNDLE1BQUk7Z0NBQUNDLENBQUMsRUFBQyxtQ0FBbUM7Ozs7O3FDQUFHOzs7OztpQ0FDekM7Ozs7Ozt5QkFDRDs4QkFFTiw4REFBQ1IsS0FBRztvQkFBQ0csS0FBSyxFQUFDLFFBQVE7Ozs7O3lCQUViOzs7Ozs7aUJBQ0U7Ozs7O2FBQ0osQ0FDTDtBQUNILENBQUM7R0E1RUtqQixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUE4RWYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld05hdmJhci5qc3g/OTM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSwgQWlPdXRsaW5lTWFpbCwgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhR2l0aHViLCBGYUxpbmtlZGluSW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCc0ZpbGxQZXJzb25MaW5lc0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTmF2TG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL01lTW9qaS1NYWMucG5nJztcblxuY29uc3QgTmV3TmF2YmFyID0gKCkgPT4ge1xuXHRjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2hhZG93LCBzZXRTaGFkb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbbmF2QmcsIHNldE5hdkJnXSA9IHVzZVN0YXRlKCcjMjIyMjIyJyk7XG5cdGNvbnN0IFtsaW5rQ29sb3IsIHNldExpbmtDb2xvcl0gPSB1c2VTdGF0ZSgnI0Y3RjdGNycpO1xuXHQvLyBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKCdmaXhlZCcpXG5cdC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cdC8vICAgaWYgKFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9wcm9wZXJ0eScgfHxcblx0Ly8gICAgIHJvdXRlci5hc1BhdGggPT09ICcvY3J5cHRvJyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9uZXRmbGl4JyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy90d2l0Y2gnXG5cdC8vICAgKSB7XG5cdC8vICAgICBzZXROYXZCZygndHJhbnNwYXJlbnQnKTtcblx0Ly8gICAgIHNldExpbmtDb2xvcignI2VjZjBmMycpO1xuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICBzZXROYXZCZygnI2VjZjBmMycpO1xuXHQvLyAgICAgc2V0TGlua0NvbG9yKCcjMWYyOTM3Jyk7XG5cdC8vICAgfVxuXHQvLyB9LCBbcm91dGVyXSk7XG5cblx0Y29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xuXHRcdHNldE5hdighbmF2KTtcblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVNoYWRvdyA9ICgpID0+IHtcblx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuXHRcdFx0XHRzZXRTaGFkb3codHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTaGFkb3coZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNoYWRvdyk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17c2hhZG93XG5cdFx0XHRcdFx0PyBcImZpeGVkIHctZnVsbCBoLTIwIHNoYWRvdy14bCB6LVsxMDBdIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXG5cdFx0XHRcdFx0OiBcImZpeGVkIHctZnVsbCBoLTIwIHotWzEwMF1cIlxuXHRcdH0+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgdy1zY3JlZW4nPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdjb3JuZXInPjwvZGl2PlxuXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPScnPlxuXHRcdFx0XHRcdDxzdmcgdmlld0JveD0nMCAwIDIgMycgYXJpYS1oaWRkZW49J3RydWUnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMMSwyIEMxLjUsMyAxLjUsMyAyLDMgTDIsMCBaJyAvPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J21sLTIgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J21sLTIgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI3Byb2plY3RzJz5Qcm9qZWN0czwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdtbC0yIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3Jlc3VtZSc+UmVzdW1lPC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J21sLTIgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI2NvbnRhY3QnPkNvbnRhY3Q8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PHN2ZyB2aWV3Qm94PScwIDAgMiAzJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEwwLDMgQzAuNSwzIDAuNSwzIDEsMiBMMiwwIFonIC8+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvbmF2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9J2Nvcm5lcic+XG5cdFx0XHRcdFx0ey8qIFRPRE8gcHV0IHNvbWV0aGluZyBlbHNlIGhlcmU/IGdpdGh1YiBsaW5rPyAqL31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld05hdmJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWlPdXRsaW5lQ2xvc2UiLCJBaU91dGxpbmVNYWlsIiwiQWlPdXRsaW5lTWVudSIsIkZhR2l0aHViIiwiRmFMaW5rZWRpbkluIiwiQnNGaWxsUGVyc29uTGluZXNGaWxsIiwiTmF2TG9nbyIsIk5ld05hdmJhciIsIm5hdiIsInNldE5hdiIsInNoYWRvdyIsInNldFNoYWRvdyIsIm5hdkJnIiwic2V0TmF2QmciLCJsaW5rQ29sb3IiLCJzZXRMaW5rQ29sb3IiLCJoYW5kbGVOYXYiLCJoYW5kbGVTaGFkb3ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImNsYXNzIiwic3ZnIiwidmlld0JveCIsImFyaWEtaGlkZGVuIiwicGF0aCIsImQiLCJ1bCIsImxpIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NewNavbar.jsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_MeMoji_Mac_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/MeMoji-Mac.png */ \"./public/assets/MeMoji-Mac.png\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useRouter } from 'next/router';\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    // const [position, setPosition] = useState('fixed')\n    // const router = useRouter();\n    // useEffect(() => {\n    //   if (\n    //     router.asPath === '/property' ||\n    //     router.asPath === '/crypto' ||\n    //     router.asPath === '/netflix' ||\n    //     router.asPath === '/twitch'\n    //   ) {\n    //     setNavBg('transparent');\n    //     setLinkColor('#ecf0f3');\n    //   } else {\n    //     setNavBg('#ecf0f3');\n    //     setLinkColor('#1f2937');\n    //   }\n    // }, [router]);\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"ml-2 text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 8\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"ml-2 text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 8\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"ml-2 text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 8\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"ml-2 text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 8\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 78,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n        lineNumber: 50,\n        columnNumber: 4\n    }, _this);\n};\n_s(NewNavbar, \"tR0gMb/jl1nUAJdKmSHz8wm9s44=\");\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQixrREFBSTtvQ0FBQ3FDLElBQUksRUFBQyxXQUFXOzhDQUFDLFNBQU87Ozs7O3lDQUFPOzs7OztxQ0FDakM7Ozs7Ozs2QkFDRDtrQ0FDTCw4REFBQ1AsS0FBRzt3QkFBQ0MsT0FBTyxFQUFDLFNBQVM7d0JBQUNDLGFBQVcsRUFBQyxNQUFNO2tDQUN4Qyw0RUFBQ0MsTUFBSTs0QkFBQ0MsQ0FBQyxFQUFDLG1DQUFtQzs7Ozs7aUNBQUc7Ozs7OzZCQUN6Qzs7Ozs7O3FCQUNEOzBCQUVOLDhEQUFDTixLQUFHO2dCQUFDQyxLQUFLLEVBQUMsUUFBUTs7Ozs7cUJBRWI7Ozs7OzthQUNFLENBRVQ7QUFDSCxDQUFDO0dBMUVLakIsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBNEVmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdOYXZiYXIuanN4PzkzODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlPdXRsaW5lQ2xvc2UsIEFpT3V0bGluZU1haWwsIEFpT3V0bGluZU1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQgeyBGYUdpdGh1YiwgRmFMaW5rZWRpbkluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgQnNGaWxsUGVyc29uTGluZXNGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5hdkxvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9NZU1vamktTWFjLnBuZyc7XG5cbmNvbnN0IE5ld05hdmJhciA9ICgpID0+IHtcblx0Y29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NoYWRvdywgc2V0U2hhZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW25hdkJnLCBzZXROYXZCZ10gPSB1c2VTdGF0ZSgnIzIyMjIyMicpO1xuXHRjb25zdCBbbGlua0NvbG9yLCBzZXRMaW5rQ29sb3JdID0gdXNlU3RhdGUoJyNGN0Y3RjcnKTtcblx0Ly8gY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSgnZml4ZWQnKVxuXHQvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xuXHQvLyAgIGlmIChcblx0Ly8gICAgIHJvdXRlci5hc1BhdGggPT09ICcvcHJvcGVydHknIHx8XG5cdC8vICAgICByb3V0ZXIuYXNQYXRoID09PSAnL2NyeXB0bycgfHxcblx0Ly8gICAgIHJvdXRlci5hc1BhdGggPT09ICcvbmV0ZmxpeCcgfHxcblx0Ly8gICAgIHJvdXRlci5hc1BhdGggPT09ICcvdHdpdGNoJ1xuXHQvLyAgICkge1xuXHQvLyAgICAgc2V0TmF2QmcoJ3RyYW5zcGFyZW50Jyk7XG5cdC8vICAgICBzZXRMaW5rQ29sb3IoJyNlY2YwZjMnKTtcblx0Ly8gICB9IGVsc2Uge1xuXHQvLyAgICAgc2V0TmF2QmcoJyNlY2YwZjMnKTtcblx0Ly8gICAgIHNldExpbmtDb2xvcignIzFmMjkzNycpO1xuXHQvLyAgIH1cblx0Ly8gfSwgW3JvdXRlcl0pO1xuXG5cdGNvbnN0IGhhbmRsZU5hdiA9ICgpID0+IHtcblx0XHRzZXROYXYoIW5hdik7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVTaGFkb3cgPSAoKSA9PiB7XG5cdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPj0gOTApIHtcblx0XHRcdFx0c2V0U2hhZG93KHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0U2hhZG93KGZhbHNlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTaGFkb3cpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHRcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCB3LXNjcmVlbic+XG5cdFx0XHRcdDxkaXYgY2xhc3M9J2Nvcm5lcic+PC9kaXY+XG5cblx0XHRcdFx0PG5hdlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHN2ZyB2aWV3Qm94PScwIDAgMiAzJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEwxLDIgQzEuNSwzIDEuNSwzIDIsMyBMMiwwIFonIC8+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbWwtMiB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy8nPkhvbWU8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbWwtMiB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy8jcHJvamVjdHMnPlByb2plY3RzPC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J21sLTIgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVzdW1lJz5SZXN1bWU8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbWwtMiB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy8jY29udGFjdCc+Q29udGFjdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00wLDAgTDAsMyBDMC41LDMgMC41LDMgMSwyIEwyLDAgWicgLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9uYXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz0nY29ybmVyJz5cblx0XHRcdFx0XHR7LyogVE9ETyBwdXQgc29tZXRoaW5nIGVsc2UgaGVyZT8gZ2l0aHViIGxpbms/ICovfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdFxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3TmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBaU91dGxpbmVDbG9zZSIsIkFpT3V0bGluZU1haWwiLCJBaU91dGxpbmVNZW51IiwiRmFHaXRodWIiLCJGYUxpbmtlZGluSW4iLCJCc0ZpbGxQZXJzb25MaW5lc0ZpbGwiLCJOYXZMb2dvIiwiTmV3TmF2YmFyIiwibmF2Iiwic2V0TmF2Iiwic2hhZG93Iiwic2V0U2hhZG93IiwibmF2QmciLCJzZXROYXZCZyIsImxpbmtDb2xvciIsInNldExpbmtDb2xvciIsImhhbmRsZU5hdiIsImhhbmRsZVNoYWRvdyIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJzdmciLCJ2aWV3Qm94IiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsInVsIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewNavbar.jsx\n"));

/***/ })

});
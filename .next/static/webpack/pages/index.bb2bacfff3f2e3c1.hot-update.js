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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_MeMoji_Mac_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/MeMoji-Mac.png */ \"./public/assets/MeMoji-Mac.png\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    // const [position, setPosition] = useState('fixed')\n    // const router = useRouter();\n    // useEffect(() => {\n    //   if (\n    //     router.asPath === '/property' ||\n    //     router.asPath === '/crypto' ||\n    //     router.asPath === '/netflix' ||\n    //     router.asPath === '/twitch'\n    //   ) {\n    //     setNavBg('transparent');\n    //     setLinkColor('#ecf0f3');\n    //   } else {\n    //     setNavBg('#ecf0f3');\n    //     setLinkColor('#1f2937');\n    //   }\n    // }, [router]);\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)(), theme = ref4.theme, setTheme = ref4.setTheme;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isDarkMode = ref5[0], setIsDarkMode = ref5[1];\n    var x = false;\n    var light = x;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: shadow ? \"shadow-xl z-[100] ease-in-out duration-300\" : \"  z-[100]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    onChange: function() {\n                                        return setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n                                    },\n                                    checked: false,\n                                    className: \"mt-2.5 ml-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 101,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n        lineNumber: 57,\n        columnNumber: 3\n    }, _this);\n    console.log(theme);\n};\n_s(NewNavbar, \"E7HHCKs6v56HvqRASQEX/MuWyIM=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7QUFnR2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld05hdmJhci5qc3g/OTM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSwgQWlPdXRsaW5lTWFpbCwgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhR2l0aHViLCBGYUxpbmtlZGluSW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCc0ZpbGxQZXJzb25MaW5lc0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTmF2TG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL01lTW9qaS1NYWMucG5nJztcbmltcG9ydCBEYXlOaWdodFRvZ2dsZSBmcm9tICdyZWFjdC1kYXktYW5kLW5pZ2h0LXRvZ2dsZSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcblxuY29uc3QgTmV3TmF2YmFyID0gKCkgPT4ge1xuXHRjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2hhZG93LCBzZXRTaGFkb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbbmF2QmcsIHNldE5hdkJnXSA9IHVzZVN0YXRlKCcjMjIyMjIyJyk7XG5cdGNvbnN0IFtsaW5rQ29sb3IsIHNldExpbmtDb2xvcl0gPSB1c2VTdGF0ZSgnI0Y3RjdGNycpO1xuXHQvLyBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKCdmaXhlZCcpXG5cdC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cdC8vICAgaWYgKFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9wcm9wZXJ0eScgfHxcblx0Ly8gICAgIHJvdXRlci5hc1BhdGggPT09ICcvY3J5cHRvJyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9uZXRmbGl4JyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy90d2l0Y2gnXG5cdC8vICAgKSB7XG5cdC8vICAgICBzZXROYXZCZygndHJhbnNwYXJlbnQnKTtcblx0Ly8gICAgIHNldExpbmtDb2xvcignI2VjZjBmMycpO1xuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICBzZXROYXZCZygnI2VjZjBmMycpO1xuXHQvLyAgICAgc2V0TGlua0NvbG9yKCcjMWYyOTM3Jyk7XG5cdC8vICAgfVxuXHQvLyB9LCBbcm91dGVyXSk7XG5cblx0Y29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xuXHRcdHNldE5hdighbmF2KTtcblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVNoYWRvdyA9ICgpID0+IHtcblx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuXHRcdFx0XHRzZXRTaGFkb3codHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTaGFkb3coZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNoYWRvdyk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0SXNEYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0bGV0IHggPSBmYWxzZVxuICAgIGxldCBsaWdodCA9IHhcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCB3LXNjcmVlbic+XG5cdFx0XHQ8ZGl2IGNsYXNzPSdjb3JuZXInPjwvZGl2PlxuXG5cdFx0XHQ8bmF2PlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEwxLDIgQzEuNSwzIDEuNSwzIDIsMyBMMiwwIFonIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8dWxcblx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0c2hhZG93XG5cdFx0XHRcdFx0XHRcdD8gJ3NoYWRvdy14bCB6LVsxMDBdIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCdcblx0XHRcdFx0XHRcdFx0OiAnICB6LVsxMDBdJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy8jcHJvamVjdHMnPlByb2plY3RzPC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nIHRleHQtc20gIGhvdmVyOmJvcmRlci1iJz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXN1bWUnPlJlc3VtZTwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI2NvbnRhY3QnPkNvbnRhY3Q8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8RGF5TmlnaHRUb2dnbGVcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTIuNSBtbC00J1xuXHRcdFx0XHRcdFx0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEwwLDMgQzAuNSwzIDAuNSwzIDEsMiBMMiwwIFonIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9J2Nvcm5lcic+XG5cdFx0XHRcdHsvKiBUT0RPIHB1dCBzb21ldGhpbmcgZWxzZSBoZXJlPyBnaXRodWIgbGluaz8gKi99XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtjb25zb2xlLmxvZyh0aGVtZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdOYXZiYXI7XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFpT3V0bGluZUNsb3NlIiwiQWlPdXRsaW5lTWFpbCIsIkFpT3V0bGluZU1lbnUiLCJGYUdpdGh1YiIsIkZhTGlua2VkaW5JbiIsIkJzRmlsbFBlcnNvbkxpbmVzRmlsbCIsIk5hdkxvZ28iLCJEYXlOaWdodFRvZ2dsZSIsInVzZVRoZW1lIiwiTmV3TmF2YmFyIiwibmF2Iiwic2V0TmF2Iiwic2hhZG93Iiwic2V0U2hhZG93IiwibmF2QmciLCJzZXROYXZCZyIsImxpbmtDb2xvciIsInNldExpbmtDb2xvciIsImhhbmRsZU5hdiIsImhhbmRsZVNoYWRvdyIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbWUiLCJzZXRUaGVtZSIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwieCIsImxpZ2h0IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJzdmciLCJ2aWV3Qm94IiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsInVsIiwibGkiLCJocmVmIiwib25DaGFuZ2UiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NewNavbar.jsx\n"));

/***/ })

});
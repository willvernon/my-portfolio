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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_MeMoji_Mac_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/MeMoji-Mac.png */ \"./public/assets/MeMoji-Mac.png\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-day-and-night-toggle */ \"./node_modules/react-day-and-night-toggle/dist/index.js\");\n/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useRouter } from 'next/router';\n\n\n\nvar NewNavbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), shadow = ref1[0], setShadow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#222222\"), navBg = ref2[0], setNavBg = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#F7F7F7\"), linkColor = ref3[0], setLinkColor = ref3[1];\n    // const [position, setPosition] = useState('fixed')\n    // const router = useRouter();\n    // useEffect(() => {\n    //   if (\n    //     router.asPath === '/property' ||\n    //     router.asPath === '/crypto' ||\n    //     router.asPath === '/netflix' ||\n    //     router.asPath === '/twitch'\n    //   ) {\n    //     setNavBg('transparent');\n    //     setLinkColor('#ecf0f3');\n    //   } else {\n    //     setNavBg('#ecf0f3');\n    //     setLinkColor('#1f2937');\n    //   }\n    // }, [router]);\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleShadow = function() {\n            if (window.scrollY >= 90) {\n                setShadow(true);\n            } else {\n                setShadow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShadow);\n    }, []);\n    var ref4 = (0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)(light), theme = ref4.theme, setTheme = ref4.setTheme;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isDarkMode = ref5[0], setIsDarkMode = ref5[1];\n    if (isDarkMode === true) {\n        setTheme(theme === \"dark\");\n    } else {\n        setTheme(theme === \"light\");\n    }\n    console.log(theme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: shadow ? \"shadow-xl z-[100] ease-in-out duration-300\" : \"  z-[100]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/resume\",\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" text-sm hover:border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    onChange: function() {\n                                        return setIsDarkMode(!isDarkMode);\n                                    },\n                                    // setTheme(theme === 'dark' ? 'light' : 'dark')}\n                                    checked: isDarkMode,\n                                    className: \"mt-2.5 ml-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 2 3\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"corner\"\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n                lineNumber: 100,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/NewNavbar.jsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, _this);\n};\n_s(NewNavbar, \"E7HHCKs6v56HvqRASQEX/MuWyIM=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = NewNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNavbar);\nvar _c;\n$RefreshReg$(_c, \"NewNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFROzs7OztxQkFFYjs7Ozs7O2FBQ0UsQ0FDUjtBQUNILENBQUM7R0E3Rkt4QixTQUFTOztRQXNDY0QsaURBQVE7OztBQXRDL0JDLEtBQUFBLFNBQVM7QUErRmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld05hdmJhci5qc3g/OTM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSwgQWlPdXRsaW5lTWFpbCwgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhR2l0aHViLCBGYUxpbmtlZGluSW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCc0ZpbGxQZXJzb25MaW5lc0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTmF2TG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL01lTW9qaS1NYWMucG5nJztcbmltcG9ydCBEYXlOaWdodFRvZ2dsZSBmcm9tICdyZWFjdC1kYXktYW5kLW5pZ2h0LXRvZ2dsZSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcblxuY29uc3QgTmV3TmF2YmFyID0gKCkgPT4ge1xuXHRjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2hhZG93LCBzZXRTaGFkb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbbmF2QmcsIHNldE5hdkJnXSA9IHVzZVN0YXRlKCcjMjIyMjIyJyk7XG5cdGNvbnN0IFtsaW5rQ29sb3IsIHNldExpbmtDb2xvcl0gPSB1c2VTdGF0ZSgnI0Y3RjdGNycpO1xuXHQvLyBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKCdmaXhlZCcpXG5cdC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cdC8vICAgaWYgKFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9wcm9wZXJ0eScgfHxcblx0Ly8gICAgIHJvdXRlci5hc1BhdGggPT09ICcvY3J5cHRvJyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy9uZXRmbGl4JyB8fFxuXHQvLyAgICAgcm91dGVyLmFzUGF0aCA9PT0gJy90d2l0Y2gnXG5cdC8vICAgKSB7XG5cdC8vICAgICBzZXROYXZCZygndHJhbnNwYXJlbnQnKTtcblx0Ly8gICAgIHNldExpbmtDb2xvcignI2VjZjBmMycpO1xuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICBzZXROYXZCZygnI2VjZjBmMycpO1xuXHQvLyAgICAgc2V0TGlua0NvbG9yKCcjMWYyOTM3Jyk7XG5cdC8vICAgfVxuXHQvLyB9LCBbcm91dGVyXSk7XG5cblx0Y29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xuXHRcdHNldE5hdighbmF2KTtcblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVNoYWRvdyA9ICgpID0+IHtcblx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuXHRcdFx0XHRzZXRTaGFkb3codHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTaGFkb3coZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNoYWRvdyk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUobGlnaHQpO1xuXHRjb25zdCBbaXNEYXJrTW9kZSwgc2V0SXNEYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGlmIChpc0RhcmtNb2RlID09PSB0cnVlKSB7XG5cdFx0c2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGhlbWUodGhlbWUgPT09ICdsaWdodCcpO1xuXHR9XG4gICAgY29uc29sZS5sb2codGhlbWUpXG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgdy1zY3JlZW4nPlxuXHRcdFx0PGRpdiBjbGFzcz0nY29ybmVyJz48L2Rpdj5cblxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PHN2ZyB2aWV3Qm94PScwIDAgMiAzJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG5cdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMMSwyIEMxLjUsMyAxLjUsMyAyLDMgTDIsMCBaJyAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PHVsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHNoYWRvd1xuXHRcdFx0XHRcdFx0XHQ/ICdzaGFkb3cteGwgei1bMTAwXSBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAnXG5cdFx0XHRcdFx0XHRcdDogJyAgei1bMTAwXSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPScgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nLyc+SG9tZTwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvI3Byb2plY3RzJz5Qcm9qZWN0czwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9JyB0ZXh0LXNtICBob3Zlcjpib3JkZXItYic+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVzdW1lJz5SZXN1bWU8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPScgdGV4dC1zbSAgaG92ZXI6Ym9yZGVyLWInPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nLyNjb250YWN0Jz5Db250YWN0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PERheU5pZ2h0VG9nZ2xlXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiBzZXRJc0RhcmtNb2RlKCFpc0RhcmtNb2RlKX1cblx0XHRcdFx0XHRcdFx0Ly8gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtpc0RhcmtNb2RlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTIuNSBtbC00J1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9JzAgMCAyIDMnIGFyaWEtaGlkZGVuPSd0cnVlJz5cblx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEwwLDMgQzAuNSwzIDAuNSwzIDEsMiBMMiwwIFonIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9J2Nvcm5lcic+XG5cdFx0XHRcdHsvKiBUT0RPIHB1dCBzb21ldGhpbmcgZWxzZSBoZXJlPyBnaXRodWIgbGluaz8gKi99XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld05hdmJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWlPdXRsaW5lQ2xvc2UiLCJBaU91dGxpbmVNYWlsIiwiQWlPdXRsaW5lTWVudSIsIkZhR2l0aHViIiwiRmFMaW5rZWRpbkluIiwiQnNGaWxsUGVyc29uTGluZXNGaWxsIiwiTmF2TG9nbyIsIkRheU5pZ2h0VG9nZ2xlIiwidXNlVGhlbWUiLCJOZXdOYXZiYXIiLCJuYXYiLCJzZXROYXYiLCJzaGFkb3ciLCJzZXRTaGFkb3ciLCJuYXZCZyIsInNldE5hdkJnIiwibGlua0NvbG9yIiwic2V0TGlua0NvbG9yIiwiaGFuZGxlTmF2IiwiaGFuZGxlU2hhZG93Iiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaWdodCIsInRoZW1lIiwic2V0VGhlbWUiLCJpc0RhcmtNb2RlIiwic2V0SXNEYXJrTW9kZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJjbGFzcyIsInN2ZyIsInZpZXdCb3giLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJkIiwidWwiLCJsaSIsImhyZWYiLCJvbkNoYW5nZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NewNavbar.jsx\n"));

/***/ })

});
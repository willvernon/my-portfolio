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

/***/ "./components/Layout/Mobile/MobileNavBar.js":
/*!**************************************************!*\
  !*** ./components/Layout/Mobile/MobileNavBar.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavButton */ \"./components/Layout/Mobile/NavButton.js\");\n//N flex md:hidden flex-row items-center justify-around px-8 h-12 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar MobileNavBar = function() {\n    _s();\n    var ref = useTheme(), theme = ref.theme, setTheme = ref.setTheme;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(useState(), 2), isDarkMode = ref1[0], setIsDarkMode = ref1[1];\n    var router = useRouter();\n    if (isDarkMode == true) {\n        setTheme(\"dark\");\n    } else {\n        setTheme(\"light\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex md:hidden flex-row items-center justify-around px-8 h-12 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-5xl text-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CgMonday, {\n                    className: \"rotate-180\"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-row self-end h-12\",\n                children: navLinks.map(function(link, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: link.path,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide px-4 text-sm flex items-center justify-center rounded-lg\",\n                            children: link.name\n                        }, index, false, {\n                            fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n                            lineNumber: 23,\n                            columnNumber: 8\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white dark:bg-[#222222] hover:bg-gray-50 border-2 border-gray-700 text-sm text-gray-700 p-1 my-1 rounded-3xl font-medium tracking-wide leading-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DayNightToggle, {\n                    onChange: function() {\n                        return setIsDarkMode(!isDarkMode);\n                    },\n                    checked: isDarkMode,\n                    className: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n                    lineNumber: 42,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Mobile/MobileNavBar.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, _this);\n};\n_s(MobileNavBar, \"9YoVTl4u4kMzBoF0tOP++sUnra0=\", true);\n_c = MobileNavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNavBar);\nvar _c;\n$RefreshReg$(_c, \"MobileNavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9Nb2JpbGUvTW9iaWxlTmF2QmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNElBQTRJO0FBQzVJOzs7O0FBQW9DO0FBRXBDLElBQU1DLFlBQVksR0FBRyxXQUFNOztJQUMxQixJQUE0QkMsR0FBVSxHQUFWQSxRQUFRLEVBQUUsRUFBOUJDLEtBQUssR0FBZUQsR0FBVSxDQUE5QkMsS0FBSyxFQUFFQyxRQUFRLEdBQUtGLEdBQVUsQ0FBdkJFLFFBQVE7SUFDdkIsSUFBb0NDLElBQVUsb0ZBQVZBLFFBQVEsRUFBRSxNQUF2Q0MsVUFBVSxHQUFtQkQsSUFBVSxHQUE3QixFQUFFRSxhQUFhLEdBQUlGLElBQVUsR0FBZDtJQUNoQyxJQUFNRyxNQUFNLEdBQUdDLFNBQVMsRUFBRTtJQUUxQixJQUFJSCxVQUFVLElBQUksSUFBSSxFQUFFO1FBQ3ZCRixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsT0FBTztRQUNOQSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELHFCQUNDLDhEQUFDTSxLQUFHO1FBQUNDLFNBQVMsRUFBQywwSUFBMEk7OzBCQUN4Siw4REFBQ0MsTUFBSTtnQkFBQ0QsU0FBUyxFQUFDLHdCQUF3QjswQkFDdkMsNEVBQUNFLFFBQVE7b0JBQUNGLFNBQVMsRUFBQyxZQUFZOzs7Ozt5QkFBRzs7Ozs7cUJBQzdCOzBCQUNQLDhEQUFDRyxJQUFFO2dCQUFDSCxTQUFTLEVBQUMsNkJBQTZCOzBCQUN6Q0ksUUFBUSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7b0JBQzlCLHFCQUNDLDhEQUFDQyxJQUFJO3dCQUFDQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtrQ0FDcEIsNEVBQUNDLElBQUU7NEJBQ0ZYLFNBQVMsRUFBQywwSUFBMEk7c0NBUW5KTSxJQUFJLENBQUNNLElBQUk7MkJBRkxMLEtBQUs7Ozs7aUNBTU47Ozs7OzZCQUNDLENBQ047Z0JBQ0gsQ0FBQyxDQUFDOzs7OztxQkFDRTswQkFDTCw4REFBQ00sS0FBRztnQkFBQ2IsU0FBUyxFQUFDLHdKQUF3SjswQkFDdEssNEVBQUNjLGNBQWM7b0JBQ2RDLFFBQVEsRUFBRTsrQkFBTW5CLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7cUJBQUE7b0JBQzFDcUIsT0FBTyxFQUFFckIsVUFBVTtvQkFDbkJLLFNBQVMsRUFBQyxHQUFHOzs7Ozt5QkFDWjs7Ozs7cUJBQ0c7Ozs7OzthQUNELENBQ0w7QUFDSCxDQUFDO0dBOUNLVixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFnRGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTW9iaWxlL01vYmlsZU5hdkJhci5qcz9mNDZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vTiBmbGV4IG1kOmhpZGRlbiBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgcHgtOCBoLTEyIGJnLXdoaXRlIHZpc2libGUgbWQ6aW52aXNpYmxlIGZpeGVkIGJvdHRvbS0wIHctZnVsbCByb3VuZGVkLXQtM3hsIHRleHQtMnhsXG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gJy4vTmF2QnV0dG9uJztcblxuY29uc3QgTW9iaWxlTmF2QmFyID0gKCkgPT4ge1xuXHRjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblx0Y29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGUoKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0aWYgKGlzRGFya01vZGUgPT0gdHJ1ZSkge1xuXHRcdHNldFRoZW1lKCdkYXJrJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGhlbWUoJ2xpZ2h0Jyk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT0nZmxleCBtZDpoaWRkZW4gZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIHB4LTggaC0xMiBiZy13aGl0ZSB2aXNpYmxlIG1kOmludmlzaWJsZSBmaXhlZCBib3R0b20tMCB3LWZ1bGwgcm91bmRlZC10LTN4bCB0ZXh0LTJ4bCc+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtNXhsIHRleHQtZ3JheS03MDAnPlxuXHRcdFx0XHQ8Q2dNb25kYXkgY2xhc3NOYW1lPSdyb3RhdGUtMTgwJyAvPlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzZWxmLWVuZCBoLTEyJz5cblx0XHRcdFx0e25hdkxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17bGluay5wYXRofT5cblx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTIyIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBjdXJzb3ItcG9pbnRlciBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHB4LTQgdGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnJ1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNsYXNzTmFtZT17YCAke1xuXHRcdFx0XHRcdFx0XHRcdC8vIFx0bGluay5yb3V0ZXIucGF0aG5hbWUgPT09IGxpbmsucGF0aFxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHQ/ICd0ZXh0LWdyYXktNzAwIGJvcmRlci1iLVs1cHhdIGJvcmRlci1ncmF5LTcwMCBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUgdG8tZ3JheS0xMDAgZGFyazpmcm9tLVsjMjIyMjIyXSdcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0OiAndy0yMiB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS03MDAgY3Vyc29yLXBvaW50ZXIgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXN0IHB4LTIgcHQtWzFyZW1dIHRleHQtc20gZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnJ1xuXHRcdFx0XHRcdFx0XHRcdC8vIH1gfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGluay5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8c3BhbiBjbGFzc05hbWU9J3RleHQtc2Vjb25kYXJ5LTMwMCc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7bGluay5sYWJlbH1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+ICovfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBkYXJrOmJnLVsjMjIyMjIyXSBob3ZlcjpiZy1ncmF5LTUwIGJvcmRlci0yIGJvcmRlci1ncmF5LTcwMCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgcC0xIG15LTEgcm91bmRlZC0zeGwgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZSBsZWFkaW5nLW5vbmUnPlxuXHRcdFx0XHQ8RGF5TmlnaHRUb2dnbGVcblx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4gc2V0SXNEYXJrTW9kZSghaXNEYXJrTW9kZSl9XG5cdFx0XHRcdFx0Y2hlY2tlZD17aXNEYXJrTW9kZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9JyAnXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25hdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdkJhcjtcbiJdLCJuYW1lcyI6WyJOYXZCdXR0b24iLCJNb2JpbGVOYXZCYXIiLCJ1c2VUaGVtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwicm91dGVyIiwidXNlUm91dGVyIiwibmF2IiwiY2xhc3NOYW1lIiwic3BhbiIsIkNnTW9uZGF5IiwidWwiLCJuYXZMaW5rcyIsIm1hcCIsImxpbmsiLCJpbmRleCIsIkxpbmsiLCJocmVmIiwicGF0aCIsImxpIiwibmFtZSIsImRpdiIsIkRheU5pZ2h0VG9nZ2xlIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Mobile/MobileNavBar.js\n"));

/***/ })

});
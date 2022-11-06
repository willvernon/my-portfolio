/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MobileNavbar.jsx":
/*!*************************************!*\
  !*** ./components/MobileNavbar.jsx ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./components/About.jsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.jsx\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.jsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Skills */ \"./components/Skills.jsx\");\n/* harmony import */ var _components_Layout_NewNavbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/NewNavbar */ \"./components/Layout/NewNavbar.jsx\");\n/* harmony import */ var _components_MobileNavbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MobileNavbar */ \"./components/MobileNavbar.jsx\");\n/* harmony import */ var _components_MobileNavbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_MobileNavbar__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Will | Front-End Developer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"I’m a front-end web developer specializing in building (and designing) exceptional digital experiences.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/pages/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/assets/MeMoji-Mac.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_MobileNavbar__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NewNavbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/pages/index.js\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ1c7QUFDSTtBQUNOO0FBQ0k7QUFDSTtBQUNKO0FBQ2E7QUFDRDtBQUV2QyxTQUFTUyxJQUFJLEdBQUc7SUFDOUIscUJBQ0MsOERBQUNDLEtBQUc7OzBCQUNILDhEQUFDVixrREFBSTs7a0NBQ0osOERBQUNXLE9BQUs7a0NBQUMsNEJBQTBCOzs7Ozs0QkFBUTtrQ0FDekMsOERBQUNDLE1BQUk7d0JBQ0pDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLHlHQUF5Rzs7Ozs7NEJBQ2hIO2tDQUNGLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLHdCQUF3Qjs7Ozs7NEJBQUc7Ozs7OztvQkFDM0M7MEJBRVAsOERBQUNULGlFQUFZOzs7O29CQUFHOzBCQUNoQiw4REFBQ0Qsb0VBQVM7Ozs7b0JBQUc7Ozs7OztZQU1SLENBQ0w7QUFDSCxDQUFDO0FBckJ1QkUsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscyc7XG5pbXBvcnQgTmV3TmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L05ld05hdmJhcic7XG5pbXBvcnQgTW9iaWxlTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlTmF2YmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5XaWxsIHwgRnJvbnQtRW5kIERldmVsb3BlcjwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT0nZGVzY3JpcHRpb24nXG5cdFx0XHRcdFx0Y29udGVudD0nSeKAmW0gYSBmcm9udC1lbmQgd2ViIGRldmVsb3BlciBzcGVjaWFsaXppbmcgaW4gYnVpbGRpbmcgKGFuZCBkZXNpZ25pbmcpIGV4Y2VwdGlvbmFsIGRpZ2l0YWwgZXhwZXJpZW5jZXMuJ1xuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGluayByZWw9J2ljb24nIGhyZWY9Jy9hc3NldHMvTWVNb2ppLU1hYy5wbmcnIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHR7LyogPE5hdkJhciAvPiAqL31cblx0XHRcdDxNb2JpbGVOYXZiYXIgLz5cblx0XHRcdDxOZXdOYXZiYXIgLz5cblx0XHRcdHsvKiA8TWFpbiAvPiAqL31cblx0XHRcdHsvKiA8QWJvdXQgLz4gKi99XG5cdFx0XHR7LyogPFNraWxscyAvPiAqL31cblx0XHRcdHsvKiA8UHJvamVjdHMgLz4gKi99XG5cdFx0XHR7LyogPENvbnRhY3QgLz4gKi99XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkFib3V0IiwiQ29udGFjdCIsIk1haW4iLCJOYXZCYXIiLCJQcm9qZWN0cyIsIlNraWxscyIsIk5ld05hdmJhciIsIk1vYmlsZU5hdmJhciIsIkhvbWUiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
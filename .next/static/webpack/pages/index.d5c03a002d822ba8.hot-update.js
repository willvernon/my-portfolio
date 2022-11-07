/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout/NavButton.js":
/*!****************************************!*\
  !*** ./components/Layout/NavButton.js ***!
  \****************************************/
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

/***/ "./components/Layout/Tabbar.jsx":
/*!**************************************!*\
  !*** ./components/Layout/Tabbar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/navigation */ \"./data/navigation.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavButton */ \"./components/Layout/NavButton.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavButton__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar NavBar = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"NavBar\",\n        children: props.navButtons.map(function(button) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_NavButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n                path: button.path,\n                label: button.label,\n                icon: button.icon\n            }, button.path, false, {\n                fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Tabbar.jsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/Layout/Tabbar.jsx\",\n        lineNumber: 10,\n        columnNumber: 2\n    }, _this);\n};\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar); // const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {\n // \tconst getTabIcon = useCallback((item) => {\n // \t\tswitch (item) {\n // \t\t\tcase 'Home':\n // \t\t\t\treturn <AiFillHome />;\n // \t\t\tcase 'Discover':\n // \t\t\t\treturn <AiFillCompass />;\n // \t\t\tcase 'Store':\n // \t\t\t\treturn <BsFillBagFill />;\n // \t\t\tcase 'Inbox':\n // \t\t\t\treturn <CgInbox />;\n // \t\t\tcase 'Profile':\n // \t\t\t\treturn <BsFillPersonFill />;\n // \t\t}\n // \t}, []);\n // \treturn (\n // \t\t<nav className='flex md:hidden flex-row items-center justify-around px-8 h-12 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl'>\n // \t\t\t{navigationData.map((item, index) => (\n // \t\t\t\t<span\n // \t\t\t\t\tkey={index}\n // \t\t\t\t\tclassName={classNames([\n // \t\t\t\t\t\t'text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-full flex items-center justify-center',\n // \t\t\t\t\t\tcurrentRoute === item &&\n // \t\t\t\t\t\t\t'bg-gradient-to-t from-white to-gray-100 border-t-4 border-gray-700 text-gray-700 px-1 rounded-lg',\n // \t\t\t\t\t])}\n // \t\t\t\t\tonClick={() => setCurrentRoute(item)}\n // \t\t\t\t>\n // \t\t\t\t\t<span className='-mb-1'>{getTabIcon(item)}</span>\n // \t\t\t\t</span>\n // \t\t\t))}\n // \t\t</nav>\n // \t);\n // };\n // export default Tabbar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9UYWJiYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDUDtBQUN1QjtBQUNNO0FBQ3hCO0FBQ007QUFDWDtBQUVwQyxJQUFNVSxNQUFNLEdBQUcsU0FBQ0MsS0FBSzt5QkFDcEIsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFFBQVE7a0JBQ3JCRixLQUFLLENBQUNILFVBQVUsQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLE1BQU07aUNBQzVCLDhEQUFDTixtREFBUztnQkFFVE8sSUFBSSxFQUFFRCxNQUFNLENBQUNDLElBQUk7Z0JBQ2pCQyxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FBSztnQkFDbkJDLElBQUksRUFBRUgsTUFBTSxDQUFDRyxJQUFJO2VBSFpILE1BQU0sQ0FBQ0MsSUFBSTs7OztxQkFJZjtTQUNGLENBQUM7Ozs7O2FBQ0c7Q0FDTjtBQVhLTixLQUFBQSxNQUFNO0FBYVosK0RBQWVBLE1BQU0sRUFBQyxDQUl0QiwwRUFBMEU7Q0FDMUUsOENBQThDO0NBQzlDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsNkJBQTZCO0NBQzdCLHNCQUFzQjtDQUN0QixnQ0FBZ0M7Q0FDaEMsbUJBQW1CO0NBQ25CLGdDQUFnQztDQUNoQyxtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLHFCQUFxQjtDQUNyQixtQ0FBbUM7Q0FDbkMsTUFBTTtDQUNOLFdBQVc7Q0FFWCxZQUFZO0NBQ1osK0pBQStKO0NBQy9KLDRDQUE0QztDQUM1QyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLCtCQUErQjtDQUMvQix5R0FBeUc7Q0FDekcsaUNBQWlDO0NBQ2pDLDZHQUE2RztDQUM3RyxXQUFXO0NBQ1gsNkNBQTZDO0NBQzdDLFFBQVE7Q0FDUix5REFBeUQ7Q0FDekQsY0FBYztDQUNkLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsTUFBTTtDQUNOLEtBQUs7Q0FFTCx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvVGFiYmFyLmpzeD83ZjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQWlGaWxsSG9tZSwgQWlGaWxsQ29tcGFzcyB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEJzRmlsbEJhZ0ZpbGwsIEJzRmlsbFBlcnNvbkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgeyBDZ0luYm94IH0gZnJvbSAncmVhY3QtaWNvbnMvY2cnO1xuaW1wb3J0IG5hdkJ1dHRvbnMgZnJvbSAnLi4vLi4vZGF0YS9uYXZpZ2F0aW9uJztcbmltcG9ydCBOYXZCdXR0b24gZnJvbSAnLi9OYXZCdXR0b24nO1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IChcblx0PGRpdiBjbGFzc05hbWU9J05hdkJhcic+XG5cdFx0e3Byb3BzLm5hdkJ1dHRvbnMubWFwKChidXR0b24pID0+IChcblx0XHRcdDxOYXZCdXR0b25cblx0XHRcdFx0a2V5PXtidXR0b24ucGF0aH1cblx0XHRcdFx0cGF0aD17YnV0dG9uLnBhdGh9XG5cdFx0XHRcdGxhYmVsPXtidXR0b24ubGFiZWx9XG5cdFx0XHRcdGljb249e2J1dHRvbi5pY29ufVxuXHRcdFx0Lz5cblx0XHQpKX1cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cblxuXG4vLyBjb25zdCBUYWJiYXIgPSAoeyBuYXZpZ2F0aW9uRGF0YSwgY3VycmVudFJvdXRlLCBzZXRDdXJyZW50Um91dGUgfSkgPT4ge1xuLy8gXHRjb25zdCBnZXRUYWJJY29uID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+IHtcbi8vIFx0XHRzd2l0Y2ggKGl0ZW0pIHtcbi8vIFx0XHRcdGNhc2UgJ0hvbWUnOlxuLy8gXHRcdFx0XHRyZXR1cm4gPEFpRmlsbEhvbWUgLz47XG4vLyBcdFx0XHRjYXNlICdEaXNjb3Zlcic6XG4vLyBcdFx0XHRcdHJldHVybiA8QWlGaWxsQ29tcGFzcyAvPjtcbi8vIFx0XHRcdGNhc2UgJ1N0b3JlJzpcbi8vIFx0XHRcdFx0cmV0dXJuIDxCc0ZpbGxCYWdGaWxsIC8+O1xuLy8gXHRcdFx0Y2FzZSAnSW5ib3gnOlxuLy8gXHRcdFx0XHRyZXR1cm4gPENnSW5ib3ggLz47XG4vLyBcdFx0XHRjYXNlICdQcm9maWxlJzpcbi8vIFx0XHRcdFx0cmV0dXJuIDxCc0ZpbGxQZXJzb25GaWxsIC8+O1xuLy8gXHRcdH1cbi8vIFx0fSwgW10pO1xuXG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PG5hdiBjbGFzc05hbWU9J2ZsZXggbWQ6aGlkZGVuIGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBweC04IGgtMTIgYmctd2hpdGUgdmlzaWJsZSBtZDppbnZpc2libGUgZml4ZWQgYm90dG9tLTAgdy1mdWxsIHJvdW5kZWQtdC0zeGwgdGV4dC0yeGwnPlxuLy8gXHRcdFx0e25hdmlnYXRpb25EYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbi8vIFx0XHRcdFx0PHNwYW5cbi8vIFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuLy8gXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhbXG4vLyBcdFx0XHRcdFx0XHQndGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGN1cnNvci1wb2ludGVyIHctMTggaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJyxcbi8vIFx0XHRcdFx0XHRcdGN1cnJlbnRSb3V0ZSA9PT0gaXRlbSAmJlxuLy8gXHRcdFx0XHRcdFx0XHQnYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHRvLWdyYXktMTAwIGJvcmRlci10LTQgYm9yZGVyLWdyYXktNzAwIHRleHQtZ3JheS03MDAgcHgtMSByb3VuZGVkLWxnJyxcbi8vIFx0XHRcdFx0XHRdKX1cbi8vIFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50Um91dGUoaXRlbSl9XG4vLyBcdFx0XHRcdD5cbi8vIFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9Jy1tYi0xJz57Z2V0VGFiSWNvbihpdGVtKX08L3NwYW4+XG4vLyBcdFx0XHRcdDwvc3Bhbj5cbi8vIFx0XHRcdCkpfVxuLy8gXHRcdDwvbmF2PlxuLy8gXHQpO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgVGFiYmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJjbGFzc05hbWVzIiwiQWlGaWxsSG9tZSIsIkFpRmlsbENvbXBhc3MiLCJCc0ZpbGxCYWdGaWxsIiwiQnNGaWxsUGVyc29uRmlsbCIsIkNnSW5ib3giLCJuYXZCdXR0b25zIiwiTmF2QnV0dG9uIiwiTmF2QmFyIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJidXR0b24iLCJwYXRoIiwibGFiZWwiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Tabbar.jsx\n"));

/***/ })

});
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

/***/ "./components/RubberLetters.jsx":
/*!**************************************!*\
  !*** ./components/RubberLetters.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RubberLetters; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), hovered = ref[0], setHovered = ref[1];\nvar toggleHover = function() {\n    return setHovered(!hovered);\n};\nvar letters = [\n    \"a\",\n    \"b\",\n    \"c\",\n    \"d\",\n    \"e\",\n    \"f\",\n    \"g\"\n];\nfunction RubberLetters() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text\",\n        children: [\n            \"// here I iterate over letters array to keep it dry\",\n            letters.map(function(letter, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Letter, {\n                    children: letter\n                }, i, false, {\n                    fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/RubberLetters.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/RubberLetters.jsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, this);\n}\n_c = RubberLetters;\nvar Letter = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), hovered = ref[0], setHovered = ref[1];\n    var toggleHover = function() {\n        return setHovered(!hovered);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: hovered ? \"rubberBand animated\" : \"rubberBand\",\n        onMouseEnter: toggleHover,\n        onMouseLeave: toggleHover,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/RubberLetters.jsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, _this);\n};\n_s(Letter, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n_c1 = Letter;\nvar _c, _c1;\n$RefreshReg$(_c, \"RubberLetters\");\n$RefreshReg$(_c1, \"Letter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1J1YmJlckxldHRlcnMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQTBCO0FBQ087QUFFRTtBQUVuQyxJQUE4QkEsR0FBcUIsb0ZBQXJCQSxxREFBYyxDQUFDLEtBQUssQ0FBQyxNQUE1Q0UsT0FBTyxHQUFnQkYsR0FBcUIsR0FBckMsRUFBRUcsVUFBVSxHQUFJSCxHQUFxQixHQUF6QjtBQUMxQixJQUFNSSxXQUFXLEdBQUc7V0FBTUQsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztDQUFBO0FBRTlDLElBQU1HLE9BQU8sR0FBRztJQUFDLEdBQUc7SUFBRSxHQUFHO0lBQUUsR0FBRztJQUFFLEdBQUc7SUFBRSxHQUFHO0lBQUUsR0FBRztJQUFFLEdBQUc7Q0FBQztBQUVwQyxTQUFTQyxhQUFhLEdBQUc7O0lBQ3ZDLHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOztZQUFDLHFEQUVyQjtZQUFDSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxNQUFNLEVBQUVDLENBQUM7cUNBQ3RCLDhEQUFDQyxNQUFNOzhCQUFVRixNQUFNO21CQUFWQyxDQUFDOzs7O3lCQUFtQjthQUNqQyxDQUFDOzs7Ozs7WUFDRyxDQUNMO0FBQ0gsQ0FBQztBQVR1QkwsS0FBQUEsYUFBYTtBQVdyQyxJQUFNTSxNQUFNLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDekIsSUFBOEJiLEdBQXFCLG9GQUFyQkEscURBQWMsQ0FBQyxLQUFLLENBQUMsTUFBNUNFLE9BQU8sR0FBZ0JGLEdBQXFCLEdBQXJDLEVBQUVHLFVBQVUsR0FBSUgsR0FBcUIsR0FBekI7SUFDMUIsSUFBTUksV0FBVyxHQUFHO2VBQU1ELFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7S0FBQTtJQUM5QyxxQkFDQyw4REFBQ1ksTUFBSTtRQUNKTixTQUFTLEVBQUVOLE9BQU8sR0FBRyxxQkFBcUIsR0FBRyxZQUFZO1FBQ3pEYSxZQUFZLEVBQUVYLFdBQVc7UUFDekJZLFlBQVksRUFBRVosV0FBVztrQkFFeEJTLFFBQVE7Ozs7O2FBQ0gsQ0FDTjtBQUNILENBQUM7R0FaS0QsTUFBTTtBQUFOQSxNQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUnViYmVyTGV0dGVycy5qc3g/NjlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL01haW4ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IHRvZ2dsZUhvdmVyID0gKCkgPT4gc2V0SG92ZXJlZCghaG92ZXJlZCk7XG5cbmNvbnN0IGxldHRlcnMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUnViYmVyTGV0dGVycygpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dCc+XG5cdFx0XHQvLyBoZXJlIEkgaXRlcmF0ZSBvdmVyIGxldHRlcnMgYXJyYXkgdG8ga2VlcCBpdCBkcnlcblx0XHRcdHtsZXR0ZXJzLm1hcCgobGV0dGVyLCBpKSA9PiAoXG5cdFx0XHRcdDxMZXR0ZXIga2V5PXtpfT57bGV0dGVyfTwvTGV0dGVyPlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmNvbnN0IExldHRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB0b2dnbGVIb3ZlciA9ICgpID0+IHNldEhvdmVyZWQoIWhvdmVyZWQpO1xuXHRyZXR1cm4gKFxuXHRcdDxzcGFuXG5cdFx0XHRjbGFzc05hbWU9e2hvdmVyZWQgPyAncnViYmVyQmFuZCBhbmltYXRlZCcgOiAncnViYmVyQmFuZCd9XG5cdFx0XHRvbk1vdXNlRW50ZXI9e3RvZ2dsZUhvdmVyfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXt0b2dnbGVIb3Zlcn1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9zcGFuPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJ0b2dnbGVIb3ZlciIsImxldHRlcnMiLCJSdWJiZXJMZXR0ZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibGV0dGVyIiwiaSIsIkxldHRlciIsImNoaWxkcmVuIiwic3BhbiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RubberLetters.jsx\n"));

/***/ })

});
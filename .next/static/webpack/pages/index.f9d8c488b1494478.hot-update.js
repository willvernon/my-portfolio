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

/***/ "./components/TS/ReactParticles.tsx":
/*!******************************************!*\
  !*** ./components/TS/ReactParticles.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReactParticles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_particle_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particle-image */ \"./node_modules/react-particle-image/dist/index.es.js\");\n\n\n\nvar particleOptions = {\n    filter: function(param) {\n        var x = param.x, y = param.y, image = param.image;\n        // Get pixel\n        var pixel = image.get(x, y);\n        // Make a particle for this pixel if blue > 50 (range 0-255)\n        return pixel.b > 50;\n    },\n    color: function(param) {\n        var x = param.x, y = param.y, image = param.image;\n        return \"#61dafb\";\n    }\n};\nfunction ReactParticles() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_particle_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        src: \"/assets/MeMoji.jpg\",\n        scale: 0.75,\n        entropy: 20,\n        maxParticles: 4200,\n        particleOptions: particleOptions\n    }, void 0, false, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/TS/ReactParticles.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = ReactParticles;\nvar _c;\n$RefreshReg$(_c, \"ReactParticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RTL1JlYWN0UGFydGljbGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQU9EO0FBRzlCLElBQU1FLGVBQWUsR0FBb0I7SUFDdkNDLE1BQU0sRUFBRSxnQkFBcUI7WUFBbEJDLENBQUMsU0FBREEsQ0FBQyxFQUFFQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO1FBQ3BCLFlBQVk7UUFDWixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsR0FBRyxDQUFDSixDQUFDLEVBQUVDLENBQUMsQ0FBQztRQUM3Qiw0REFBNEQ7UUFDNUQsT0FBT0UsS0FBSyxDQUFDRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDREMsS0FBSyxFQUFFO1lBQUdOLENBQUMsU0FBREEsQ0FBQyxFQUFFQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO2VBQU8sU0FBUztLQUFBO0NBQ3RDO0FBRWMsU0FBU0ssY0FBYyxHQUFHO0lBR3ZDLHFCQUVFLDhEQUFDViw0REFBYTtRQUNaVyxHQUFHLEVBQUMsb0JBQW9CO1FBQ3hCQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxPQUFPLEVBQUUsRUFBRTtRQUNYQyxZQUFZLEVBQUUsSUFBSTtRQUNsQmIsZUFBZSxFQUFFQSxlQUFlOzs7OztZQUNoQyxDQUVGO0FBQ0osQ0FBQztBQWR1QlMsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RTL1JlYWN0UGFydGljbGVzLnRzeD8zZjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIkByb29rcy91c2Utd2luZG93LXNpemVcIjtcbmltcG9ydCBQYXJ0aWNsZUltYWdlLCB7XG4gIFBhcnRpY2xlT3B0aW9ucyxcbiAgVmVjdG9yLFxuICBmb3JjZXMsXG4gIFBhcnRpY2xlRm9yY2Vcbn0gZnJvbSBcInJlYWN0LXBhcnRpY2xlLWltYWdlXCI7XG5cblxuY29uc3QgcGFydGljbGVPcHRpb25zOiBQYXJ0aWNsZU9wdGlvbnMgPSB7XG4gIGZpbHRlcjogKHsgeCwgeSwgaW1hZ2UgfSkgPT4ge1xuICAgIC8vIEdldCBwaXhlbFxuICAgIGNvbnN0IHBpeGVsID0gaW1hZ2UuZ2V0KHgsIHkpO1xuICAgIC8vIE1ha2UgYSBwYXJ0aWNsZSBmb3IgdGhpcyBwaXhlbCBpZiBibHVlID4gNTAgKHJhbmdlIDAtMjU1KVxuICAgIHJldHVybiBwaXhlbC5iID4gNTA7XG4gIH0sXG4gIGNvbG9yOiAoeyB4LCB5LCBpbWFnZSB9KSA9PiBcIiM2MWRhZmJcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhY3RQYXJ0aWNsZXMoKSB7XG4gXG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8UGFydGljbGVJbWFnZVxuICAgICAgc3JjPScvYXNzZXRzL01lTW9qaS5qcGcnXG4gICAgICBzY2FsZT17MC43NX1cbiAgICAgIGVudHJvcHk9ezIwfVxuICAgICAgbWF4UGFydGljbGVzPXs0MjAwfVxuICAgICAgcGFydGljbGVPcHRpb25zPXtwYXJ0aWNsZU9wdGlvbnN9XG4gICAgLz5cbiAgICBcbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJQYXJ0aWNsZUltYWdlIiwicGFydGljbGVPcHRpb25zIiwiZmlsdGVyIiwieCIsInkiLCJpbWFnZSIsInBpeGVsIiwiZ2V0IiwiYiIsImNvbG9yIiwiUmVhY3RQYXJ0aWNsZXMiLCJzcmMiLCJzY2FsZSIsImVudHJvcHkiLCJtYXhQYXJ0aWNsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TS/ReactParticles.tsx\n"));

/***/ })

});
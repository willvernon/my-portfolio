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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReactParticles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rooks_use_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooks/use-window-size */ \"./node_modules/@rooks/use-window-size/lib/index.esm.js\");\n/* harmony import */ var react_particle_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-particle-image */ \"./node_modules/react-particle-image/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar particleOptions = {\n    filter: function(param) {\n        var x = param.x, y = param.y, image = param.image;\n        // Get pixel\n        var pixel = image.get(x, y);\n        // Make a particle for this pixel if blue > 50 (range 0-255)\n        return pixel.b > 50;\n    },\n    color: function(param) {\n        var x = param.x, y = param.y, image = param.image;\n        return \"#61dafb\";\n    },\n    radius: function() {\n        return Math.random() * 1.5 + 0.5;\n    },\n    mass: function() {\n        return 40;\n    },\n    friction: function() {\n        return 0.15;\n    },\n    initialPosition: function(param) {\n        var canvasDimensions = param.canvasDimensions;\n        return new react_particle_image__WEBPACK_IMPORTED_MODULE_3__.Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);\n    }\n};\nvar motionForce = function(x, y) {\n    return react_particle_image__WEBPACK_IMPORTED_MODULE_3__.forces.disturbance(x, y, 5);\n};\nfunction ReactParticles() {\n    _s();\n    var ref = (0,_rooks_use_window_size__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), innerWidth = ref.innerWidth, innerHeight = ref.innerHeight;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_particle_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        src: \"../public/assets/react-logo.png\",\n        width: Number(innerWidth),\n        height: Number(innerHeight),\n        scale: 0.75,\n        entropy: 20,\n        maxParticles: 4000,\n        particleOptions: particleOptions,\n        mouseMoveForce: motionForce,\n        touchMoveForce: motionForce,\n        backgroundColor: \"#191D1F\",\n        className: \"z-100\"\n    }, void 0, false, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/TS/ReactParticles.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ReactParticles, \"0lcdWYgaN90VoGUbC+is5a1XV5w=\", false, function() {\n    return [\n        _rooks_use_window_size__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ReactParticles;\nvar _c;\n$RefreshReg$(_c, \"ReactParticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RTL1JlYWN0UGFydGljbGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ29CO0FBTXJCO0FBRzlCLElBQU1LLGVBQWUsR0FBb0I7SUFDdkNDLE1BQU0sRUFBRSxnQkFBcUI7WUFBbEJDLENBQUMsU0FBREEsQ0FBQyxFQUFFQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO1FBQ3BCLFlBQVk7UUFDWixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsR0FBRyxDQUFDSixDQUFDLEVBQUVDLENBQUMsQ0FBQztRQUM3Qiw0REFBNEQ7UUFDNUQsT0FBT0UsS0FBSyxDQUFDRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDREMsS0FBSyxFQUFFO1lBQUdOLENBQUMsU0FBREEsQ0FBQyxFQUFFQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO2VBQU8sU0FBUztLQUFBO0lBQ3JDSyxNQUFNLEVBQUU7ZUFBTUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRztLQUFBO0lBQ3ZDQyxJQUFJLEVBQUU7ZUFBTSxFQUFFO0tBQUE7SUFDZEMsUUFBUSxFQUFFO2VBQU0sSUFBSTtLQUFBO0lBQ3BCQyxlQUFlLEVBQUUsZ0JBQTBCO1lBQXZCQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQjtRQUNsQyxPQUFPLElBQUlqQix3REFBTSxDQUFDaUIsZ0JBQWdCLENBQUNDLEtBQUssR0FBRyxDQUFDLEVBQUVELGdCQUFnQixDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztDQUNGO0FBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQUNoQixDQUFTLEVBQUVDLENBQVMsRUFBb0I7SUFDM0QsT0FBT0osb0VBQWtCLENBQUNHLENBQUMsRUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFYyxTQUFTaUIsY0FBYyxHQUFHOztJQUN2QyxJQUFvQ3hCLEdBQWUsR0FBZkEsa0VBQWEsRUFBRSxFQUEzQ3lCLFVBQVUsR0FBa0J6QixHQUFlLENBQTNDeUIsVUFBVSxFQUFFQyxXQUFXLEdBQUsxQixHQUFlLENBQS9CMEIsV0FBVztJQUUvQixxQkFDRSw4REFBQ3pCLDREQUFhO1FBQ1owQixHQUFHLEVBQUUsaUNBQWlDO1FBQ3RDUCxLQUFLLEVBQUVRLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDO1FBQ3pCSixNQUFNLEVBQUVPLE1BQU0sQ0FBQ0YsV0FBVyxDQUFDO1FBQzNCRyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxPQUFPLEVBQUUsRUFBRTtRQUNYQyxZQUFZLEVBQUUsSUFBSTtRQUNsQjNCLGVBQWUsRUFBRUEsZUFBZTtRQUNoQzRCLGNBQWMsRUFBRVYsV0FBVztRQUMzQlcsY0FBYyxFQUFFWCxXQUFXO1FBQzNCWSxlQUFlLEVBQUMsU0FBUztRQUN6QkMsU0FBUyxFQUFDLE9BQU87Ozs7O1lBQ2pCLENBQ0Y7QUFDSixDQUFDO0dBbEJ1QlgsY0FBYzs7UUFDQXhCLDhEQUFhOzs7QUFEM0J3QixLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVFMvUmVhY3RQYXJ0aWNsZXMudHN4PzNmODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiQHJvb2tzL3VzZS13aW5kb3ctc2l6ZVwiO1xuaW1wb3J0IFBhcnRpY2xlSW1hZ2UsIHtcbiAgUGFydGljbGVPcHRpb25zLFxuICBWZWN0b3IsXG4gIGZvcmNlcyxcbiAgUGFydGljbGVGb3JjZVxufSBmcm9tIFwicmVhY3QtcGFydGljbGUtaW1hZ2VcIjtcblxuXG5jb25zdCBwYXJ0aWNsZU9wdGlvbnM6IFBhcnRpY2xlT3B0aW9ucyA9IHtcbiAgZmlsdGVyOiAoeyB4LCB5LCBpbWFnZSB9KSA9PiB7XG4gICAgLy8gR2V0IHBpeGVsXG4gICAgY29uc3QgcGl4ZWwgPSBpbWFnZS5nZXQoeCwgeSk7XG4gICAgLy8gTWFrZSBhIHBhcnRpY2xlIGZvciB0aGlzIHBpeGVsIGlmIGJsdWUgPiA1MCAocmFuZ2UgMC0yNTUpXG4gICAgcmV0dXJuIHBpeGVsLmIgPiA1MDtcbiAgfSxcbiAgY29sb3I6ICh7IHgsIHksIGltYWdlIH0pID0+IFwiIzYxZGFmYlwiLFxuICByYWRpdXM6ICgpID0+IE1hdGgucmFuZG9tKCkgKiAxLjUgKyAwLjUsXG4gIG1hc3M6ICgpID0+IDQwLFxuICBmcmljdGlvbjogKCkgPT4gMC4xNSxcbiAgaW5pdGlhbFBvc2l0aW9uOiAoeyBjYW52YXNEaW1lbnNpb25zIH0pID0+IHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcihjYW52YXNEaW1lbnNpb25zLndpZHRoIC8gMiwgY2FudmFzRGltZW5zaW9ucy5oZWlnaHQgLyAyKTtcbiAgfVxufTtcblxuY29uc3QgbW90aW9uRm9yY2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQYXJ0aWNsZUZvcmNlID0+IHtcbiAgcmV0dXJuIGZvcmNlcy5kaXN0dXJiYW5jZSh4LCB5LCA1KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlYWN0UGFydGljbGVzKCkge1xuICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB1c2VXaW5kb3dTaXplKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFydGljbGVJbWFnZVxuICAgICAgc3JjPXtcIi4uL3B1YmxpYy9hc3NldHMvcmVhY3QtbG9nby5wbmdcIn1cbiAgICAgIHdpZHRoPXtOdW1iZXIoaW5uZXJXaWR0aCl9XG4gICAgICBoZWlnaHQ9e051bWJlcihpbm5lckhlaWdodCl9XG4gICAgICBzY2FsZT17MC43NX1cbiAgICAgIGVudHJvcHk9ezIwfVxuICAgICAgbWF4UGFydGljbGVzPXs0MDAwfVxuICAgICAgcGFydGljbGVPcHRpb25zPXtwYXJ0aWNsZU9wdGlvbnN9XG4gICAgICBtb3VzZU1vdmVGb3JjZT17bW90aW9uRm9yY2V9XG4gICAgICB0b3VjaE1vdmVGb3JjZT17bW90aW9uRm9yY2V9XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMTkxRDFGXCJcbiAgICAgIGNsYXNzTmFtZT0nei0xMDAnXG4gICAgLz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VXaW5kb3dTaXplIiwiUGFydGljbGVJbWFnZSIsIlZlY3RvciIsImZvcmNlcyIsInBhcnRpY2xlT3B0aW9ucyIsImZpbHRlciIsIngiLCJ5IiwiaW1hZ2UiLCJwaXhlbCIsImdldCIsImIiLCJjb2xvciIsInJhZGl1cyIsIk1hdGgiLCJyYW5kb20iLCJtYXNzIiwiZnJpY3Rpb24iLCJpbml0aWFsUG9zaXRpb24iLCJjYW52YXNEaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtb3Rpb25Gb3JjZSIsImRpc3R1cmJhbmNlIiwiUmVhY3RQYXJ0aWNsZXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzcmMiLCJOdW1iZXIiLCJzY2FsZSIsImVudHJvcHkiLCJtYXhQYXJ0aWNsZXMiLCJtb3VzZU1vdmVGb3JjZSIsInRvdWNoTW92ZUZvcmNlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TS/ReactParticles.tsx\n"));

/***/ })

});
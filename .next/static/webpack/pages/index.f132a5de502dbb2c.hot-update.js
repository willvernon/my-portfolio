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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReactParticles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rooks_use_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooks/use-window-size */ \"./node_modules/@rooks/use-window-size/lib/index.esm.js\");\n/* harmony import */ var react_particle_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-particle-image */ \"./node_modules/react-particle-image/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar particleOptions = {\n    filter: function(param) {\n        var x = param.x, y = param.y, image = param.image;\n        // Get pixel\n        var pixel = image.get(x, y);\n        // Make a particle for this pixel if blue > 50 (range 0-255)\n        return pixel.b > 50;\n    },\n    color: function(param) {\n        var x = param.x, y = param.y, image = param.image;\n        return \"#61dafb\";\n    },\n    radius: function() {\n        return Math.random() * 1.5 + 0.5;\n    },\n    mass: function() {\n        return 40;\n    },\n    friction: function() {\n        return 0.15;\n    },\n    initialPosition: function(param) {\n        var canvasDimensions = param.canvasDimensions;\n        return new react_particle_image__WEBPACK_IMPORTED_MODULE_3__.Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);\n    }\n};\nvar motionForce = function(x, y) {\n    return react_particle_image__WEBPACK_IMPORTED_MODULE_3__.forces.disturbance(x, y, 5);\n};\nfunction ReactParticles() {\n    _s();\n    var ref = (0,_rooks_use_window_size__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), innerWidth = ref.innerWidth, innerHeight = ref.innerHeight;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_particle_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        src: \"../public/assets/react-logo.png\",\n        width: Number(innerWidth),\n        height: Number(innerHeight),\n        scale: 0.75,\n        entropy: 20,\n        maxParticles: 4000,\n        particleOptions: particleOptions,\n        mouseMoveForce: motionForce,\n        touchMoveForce: motionForce,\n        backgroundColor: \"#191D1F\",\n        className: \"z\"\n    }, void 0, false, {\n        fileName: \"/Users/willvernon/Documents/GitHub/my-portfolio/components/TS/ReactParticles.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ReactParticles, \"0lcdWYgaN90VoGUbC+is5a1XV5w=\", false, function() {\n    return [\n        _rooks_use_window_size__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ReactParticles;\nvar _c;\n$RefreshReg$(_c, \"ReactParticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RTL1JlYWN0UGFydGljbGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ29CO0FBTXJCO0FBRzlCLElBQU1LLGVBQWUsR0FBb0I7SUFDdkNDLE1BQU0sRUFBRSxnQkFBcUI7WUFBbEJDLENBQUMsU0FBREEsQ0FBQyxFQUFFQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO1FBQ3BCLFlBQVk7UUFDWixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsR0FBRyxDQUFDSixDQUFDLEVBQUVDLENBQUMsQ0FBQztRQUM3Qiw0REFBNEQ7UUFDNUQsT0FBT0UsS0FBSyxDQUFDRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDREMsS0FBSyxFQUFFO1lBQUdOLENBQUMsU0FBREEsQ0FBQyxFQUFFQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO2VBQU8sU0FBUztLQUFBO0lBQ3JDSyxNQUFNLEVBQUU7ZUFBTUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRztLQUFBO0lBQ3ZDQyxJQUFJLEVBQUU7ZUFBTSxFQUFFO0tBQUE7SUFDZEMsUUFBUSxFQUFFO2VBQU0sSUFBSTtLQUFBO0lBQ3BCQyxlQUFlLEVBQUUsZ0JBQTBCO1lBQXZCQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQjtRQUNsQyxPQUFPLElBQUlqQix3REFBTSxDQUFDaUIsZ0JBQWdCLENBQUNDLEtBQUssR0FBRyxDQUFDLEVBQUVELGdCQUFnQixDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztDQUNGO0FBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQUNoQixDQUFTLEVBQUVDLENBQVMsRUFBb0I7SUFDM0QsT0FBT0osb0VBQWtCLENBQUNHLENBQUMsRUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFYyxTQUFTaUIsY0FBYyxHQUFHOztJQUN2QyxJQUFvQ3hCLEdBQWUsR0FBZkEsa0VBQWEsRUFBRSxFQUEzQ3lCLFVBQVUsR0FBa0J6QixHQUFlLENBQTNDeUIsVUFBVSxFQUFFQyxXQUFXLEdBQUsxQixHQUFlLENBQS9CMEIsV0FBVztJQUUvQixxQkFDRSw4REFBQ3pCLDREQUFhO1FBQ1owQixHQUFHLEVBQUUsaUNBQWlDO1FBQ3RDUCxLQUFLLEVBQUVRLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDO1FBQ3pCSixNQUFNLEVBQUVPLE1BQU0sQ0FBQ0YsV0FBVyxDQUFDO1FBQzNCRyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxPQUFPLEVBQUUsRUFBRTtRQUNYQyxZQUFZLEVBQUUsSUFBSTtRQUNsQjNCLGVBQWUsRUFBRUEsZUFBZTtRQUNoQzRCLGNBQWMsRUFBRVYsV0FBVztRQUMzQlcsY0FBYyxFQUFFWCxXQUFXO1FBQzNCWSxlQUFlLEVBQUMsU0FBUztRQUN6QkMsU0FBUyxFQUFDLEdBQUc7Ozs7O1lBQ2IsQ0FDRjtBQUNKLENBQUM7R0FsQnVCWCxjQUFjOztRQUNBeEIsOERBQWE7OztBQUQzQndCLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UUy9SZWFjdFBhcnRpY2xlcy50c3g/M2Y4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCJAcm9va3MvdXNlLXdpbmRvdy1zaXplXCI7XG5pbXBvcnQgUGFydGljbGVJbWFnZSwge1xuICBQYXJ0aWNsZU9wdGlvbnMsXG4gIFZlY3RvcixcbiAgZm9yY2VzLFxuICBQYXJ0aWNsZUZvcmNlXG59IGZyb20gXCJyZWFjdC1wYXJ0aWNsZS1pbWFnZVwiO1xuXG5cbmNvbnN0IHBhcnRpY2xlT3B0aW9uczogUGFydGljbGVPcHRpb25zID0ge1xuICBmaWx0ZXI6ICh7IHgsIHksIGltYWdlIH0pID0+IHtcbiAgICAvLyBHZXQgcGl4ZWxcbiAgICBjb25zdCBwaXhlbCA9IGltYWdlLmdldCh4LCB5KTtcbiAgICAvLyBNYWtlIGEgcGFydGljbGUgZm9yIHRoaXMgcGl4ZWwgaWYgYmx1ZSA+IDUwIChyYW5nZSAwLTI1NSlcbiAgICByZXR1cm4gcGl4ZWwuYiA+IDUwO1xuICB9LFxuICBjb2xvcjogKHsgeCwgeSwgaW1hZ2UgfSkgPT4gXCIjNjFkYWZiXCIsXG4gIHJhZGl1czogKCkgPT4gTWF0aC5yYW5kb20oKSAqIDEuNSArIDAuNSxcbiAgbWFzczogKCkgPT4gNDAsXG4gIGZyaWN0aW9uOiAoKSA9PiAwLjE1LFxuICBpbml0aWFsUG9zaXRpb246ICh7IGNhbnZhc0RpbWVuc2lvbnMgfSkgPT4ge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKGNhbnZhc0RpbWVuc2lvbnMud2lkdGggLyAyLCBjYW52YXNEaW1lbnNpb25zLmhlaWdodCAvIDIpO1xuICB9XG59O1xuXG5jb25zdCBtb3Rpb25Gb3JjZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IFBhcnRpY2xlRm9yY2UgPT4ge1xuICByZXR1cm4gZm9yY2VzLmRpc3R1cmJhbmNlKHgsIHksIDUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhY3RQYXJ0aWNsZXMoKSB7XG4gIGNvbnN0IHsgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgfSA9IHVzZVdpbmRvd1NpemUoKTtcblxuICByZXR1cm4gKFxuICAgIDxQYXJ0aWNsZUltYWdlXG4gICAgICBzcmM9e1wiLi4vcHVibGljL2Fzc2V0cy9yZWFjdC1sb2dvLnBuZ1wifVxuICAgICAgd2lkdGg9e051bWJlcihpbm5lcldpZHRoKX1cbiAgICAgIGhlaWdodD17TnVtYmVyKGlubmVySGVpZ2h0KX1cbiAgICAgIHNjYWxlPXswLjc1fVxuICAgICAgZW50cm9weT17MjB9XG4gICAgICBtYXhQYXJ0aWNsZXM9ezQwMDB9XG4gICAgICBwYXJ0aWNsZU9wdGlvbnM9e3BhcnRpY2xlT3B0aW9uc31cbiAgICAgIG1vdXNlTW92ZUZvcmNlPXttb3Rpb25Gb3JjZX1cbiAgICAgIHRvdWNoTW92ZUZvcmNlPXttb3Rpb25Gb3JjZX1cbiAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMxOTFEMUZcIlxuICAgICAgY2xhc3NOYW1lPSd6J1xuICAgIC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlV2luZG93U2l6ZSIsIlBhcnRpY2xlSW1hZ2UiLCJWZWN0b3IiLCJmb3JjZXMiLCJwYXJ0aWNsZU9wdGlvbnMiLCJmaWx0ZXIiLCJ4IiwieSIsImltYWdlIiwicGl4ZWwiLCJnZXQiLCJiIiwiY29sb3IiLCJyYWRpdXMiLCJNYXRoIiwicmFuZG9tIiwibWFzcyIsImZyaWN0aW9uIiwiaW5pdGlhbFBvc2l0aW9uIiwiY2FudmFzRGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwibW90aW9uRm9yY2UiLCJkaXN0dXJiYW5jZSIsIlJlYWN0UGFydGljbGVzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic3JjIiwiTnVtYmVyIiwic2NhbGUiLCJlbnRyb3B5IiwibWF4UGFydGljbGVzIiwibW91c2VNb3ZlRm9yY2UiLCJ0b3VjaE1vdmVGb3JjZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TS/ReactParticles.tsx\n"));

/***/ })

});
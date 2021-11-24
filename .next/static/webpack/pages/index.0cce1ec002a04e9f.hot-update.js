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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/styles */ \"./utils/styles.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var description = param.description, title = param.title, children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_5__.Store), state = ref.state, dispatch = ref.dispatch;\n    var darkMode = state.darkMode, cart = state.cart;\n    var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.createTheme)({\n        typography: {\n            fontFamily: \"'Nunito Sans', sansSerif,\"\n        },\n        palette: {\n            type: darkMode ? 'dark' : 'light',\n            primary: {\n                main: '#000'\n            },\n            secondary: {\n                main: '#000'\n            }\n        }\n    });\n    var classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var darkModeChangehandler = function() {\n        dispatch({\n            type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'\n        });\n        var newDarkMode = !darkMode;\n        js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].set('darkMode', newDarkMode ? 'ON' : 'OFF');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n            lineNumber: 44,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: title ? \"\".concat(title, \" - Decor\") : 'Decor'\n                    }),\n                    description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: description,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n                theme: theme,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.CssBaseline, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.AppBar, {\n                        position: \"static\",\n                        className: classes.navbar,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Toolbar, {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                    href: \"/\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: classes.brand,\n                                        src: \"/logo.svg\",\n                                        width: 130,\n                                        height: 60,\n                                        alt: \"\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        },\n                                        __self: this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: classes.grow,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Switch, {\n                                            className: classes.switch,\n                                            checked: darkMode,\n                                            onChange: darkModeChangehandler,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                            href: \"/cart\",\n                                            className: classes.cart,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: [\n                                                cart.cartItems.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Badge, {\n                                                    className: classes.cartBadge,\n                                                    color: \"secondary\",\n                                                    badgeContent: cart.cartItems.length,\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: this\n                                                }) : '',\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    src: \"/cart.svg\",\n                                                    width: 50,\n                                                    height: 50,\n                                                    alt: \"\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this\n                                                })\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                            href: \"/login\",\n                                            className: classes.login,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                src: \"/login.svg\",\n                                                width: 24,\n                                                height: 50,\n                                                alt: \"\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                        className: classes.main,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: children\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                        className: classes.footer,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Buskik\\\\Desktop\\\\next-decor\\\\components\\\\Layout.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Todos direitos reservados. Decor.\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Layout, \"EF2oHeQ4X9PTzYFBt2WytnUZp1I=\", false, function() {\n    return [\n        _utils_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRVQsT0FBTyxDQUFDVCxJQUFJOzs7Ozs7OztnREFDdkNBLElBQUksQ0FBQzhCLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsd0VBQ3ZCMUMsb0RBQUs7b0RBQ0o2QixTQUFTLEVBQUVULE9BQU8sQ0FBQ3VCLFNBQVM7b0RBQzVCQyxLQUFLLEVBQUMsQ0FBVztvREFDakJDLFlBQVksRUFBRWxDLElBQUksQ0FBQzhCLFNBQVMsQ0FBQ0MsTUFBTTs7Ozs7OztxREFHckMsQ0FBRTtxSEFFSHBELG1EQUFLO29EQUFDMkMsR0FBRyxFQUFDLENBQVc7b0RBQUNDLEtBQUssRUFBRSxFQUFFO29EQUFFQyxNQUFNLEVBQUUsRUFBRTtvREFBRUMsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7Ozs7NkdBRXJEekMsbURBQUk7NENBQUNvQyxJQUFJLEVBQUMsQ0FBUTs0Q0FBQ0YsU0FBUyxFQUFFVCxPQUFPLENBQUMwQixLQUFLOzs7Ozs7OzJIQUN6Q3hELG1EQUFLO2dEQUFDMkMsR0FBRyxFQUFDLENBQVk7Z0RBQUNDLEtBQUssRUFBRSxFQUFFO2dEQUFFQyxNQUFNLEVBQUUsRUFBRTtnREFBRUMsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7Ozs7Ozs7O3lGQUs1RDVDLHdEQUFTO3dCQUFDcUMsU0FBUyxFQUFFVCxPQUFPLENBQUNGLElBQUk7Ozs7Ozs7a0NBQUdYLFFBQVE7O3lGQUM1Q3dDLENBQU07d0JBQUNsQixTQUFTLEVBQUVULE9BQU8sQ0FBQzJCLE1BQU07Ozs7Ozs7dUdBQzlCaEQseURBQVU7Ozs7Ozs7c0NBQUMsQ0FBaUM7Ozs7Ozs7QUFLdkQsQ0FBQztHQTVFdUJLLE1BQU07O1FBaUJaSCxxREFBUzs7O0tBakJIRyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIGNyZWF0ZVRoZW1lLFxyXG4gIENzc0Jhc2VsaW5lLFxyXG4gIExpbmssXHJcbiAgU3dpdGNoLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEJhZGdlLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3V0aWxzL1N0b3JlJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGRlc2NyaXB0aW9uLCB0aXRsZSwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcclxuICBjb25zdCB7IGRhcmtNb2RlLCBjYXJ0IH0gPSBzdGF0ZTtcclxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICAgIHR5cG9ncmFwaHk6IHtcclxuICAgICAgZm9udEZhbWlseTogXCInTnVuaXRvIFNhbnMnLCBzYW5zU2VyaWYsXCIsXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICB0eXBlOiBkYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiAnIzAwMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIG1haW46ICcjMDAwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGRhcmtNb2RlQ2hhbmdlaGFuZGxlciA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogZGFya01vZGUgPyAnREFSS19NT0RFX09GRicgOiAnREFSS19NT0RFX09OJyB9KTtcclxuICAgIGNvbnN0IG5ld0RhcmtNb2RlID0gIWRhcmtNb2RlO1xyXG4gICAgQ29va2llcy5zZXQoJ2RhcmtNb2RlJywgbmV3RGFya01vZGUgPyAnT04nIDogJ09GRicpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyBgJHt0aXRsZX0gLSBEZWNvcmAgOiAnRGVjb3InfTwvdGl0bGU+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPn1cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9e2NsYXNzZXMubmF2YmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJyYW5kfVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2xvZ28uc3ZnXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMzB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezYwfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNofVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17ZGFya01vZGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGFya01vZGVDaGFuZ2VoYW5kbGVyfVxyXG4gICAgICAgICAgICAgID48L1N3aXRjaD5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnR9PlxyXG4gICAgICAgICAgICAgICAge2NhcnQuY2FydEl0ZW1zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0QmFkZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJhZGdlQ29udGVudD17Y2FydC5jYXJ0SXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICA+PC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jYXJ0LnN2Z1wiIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ2luLnN2Z1wiIHdpZHRoPXsyNH0gaGVpZ2h0PXs1MH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHk+VG9kb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy4gRGVjb3IuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJIZWFkIiwiSW1hZ2UiLCJBcHBCYXIiLCJDb250YWluZXIiLCJjcmVhdGVUaGVtZSIsIkNzc0Jhc2VsaW5lIiwiTGluayIsIlN3aXRjaCIsIlRoZW1lUHJvdmlkZXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkJhZGdlIiwidXNlU3R5bGVzIiwiU3RvcmUiLCJDb29raWVzIiwiTGF5b3V0IiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsImRhcmtNb2RlIiwiY2FydCIsInRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJwYWxldHRlIiwidHlwZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiY2xhc3NlcyIsImRhcmtNb2RlQ2hhbmdlaGFuZGxlciIsIm5ld0RhcmtNb2RlIiwic2V0IiwiZGl2IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJocmVmIiwiYnJhbmQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImdyb3ciLCJzd2l0Y2giLCJjaGVja2VkIiwib25DaGFuZ2UiLCJjYXJ0SXRlbXMiLCJsZW5ndGgiLCJjYXJ0QmFkZ2UiLCJjb2xvciIsImJhZGdlQ29udGVudCIsImxvZ2luIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});
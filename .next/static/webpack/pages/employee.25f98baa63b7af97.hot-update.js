"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/employee",{

/***/ "./pages/employee.js":
/*!***************************!*\
  !*** ./pages/employee.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ \"./components/container.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_logica__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/logica */ \"./components/logica.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Employees = (props)=>{\n    _s();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        data: \"\"\n    });\n    const [id, setid] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getlist = async ()=>{\n            const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api-rest-nodejs-production.up.railway.app/employee\");\n            const resJson = await res.json();\n            console.log({\n                props: {\n                    resJson\n                }\n            });\n            return {\n                props: {\n                    resJson\n                }\n            };\n        };\n    }, [\n        id\n    ]);\n    co;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table table-striped table-hover\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"NOMBRE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"SALARIO\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"ACCIONES\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: props.resJson.map((employee)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.name_e\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.salary\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-info\",\n                                                children: \"Editar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"hidden\",\n                                                id: \"id\",\n                                                name: \"id\",\n                                                value: employee.id\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: (Event)=>Eliminar(employee.id),\n                                                className: \"btn btn-danger\",\n                                                children: \"Eliminar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, employee.id, true, {\n                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                lineNumber: 40,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Employees, \"Z2I7zCBomNhJewPhUNWAksGdQKM=\");\n_c = Employees;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Employees);\nvar _c;\n$RefreshReg$(_c, \"Employees\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbXBsb3llZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1g7QUFDYztBQUNQO0FBQ2Q7QUFHOUIsTUFBTU0sWUFBWSxDQUFDQyxRQUFTOztJQUN4QixNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7UUFDNUJLLE1BQUs7SUFDVDtJQUNDLE1BQU0sQ0FBQ0UsSUFBR0MsTUFBTSxHQUFHUiwrQ0FBUUEsQ0FBQztRQUN6Qk8sSUFBRztJQUNQO0lBQ0NOLGdEQUFTQSxDQUFFLElBQUk7UUFDWixNQUFNUSxVQUFVLFVBQVU7WUFDMUIsTUFBTUMsTUFBTSxNQUFNWix1REFBS0EsQ0FBQztZQUN4QixNQUFNYSxVQUFVLE1BQU1ELElBQUlFLElBQUk7WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ1YsT0FBTTtvQkFBQ087Z0JBQU87WUFBQztZQUM1QixPQUFPO2dCQUFDUCxPQUFNO29CQUFDTztnQkFBTztZQUFDO1FBQ3ZCO0lBQ0gsR0FBRztRQUFDSjtLQUFHO0lBQ1BRO0lBRUQscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDbkIsNkRBQVNBO3NCQUNOLDRFQUFDb0I7Z0JBQU1DLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FDRyw0RUFBQ0M7OzhDQUNHLDhEQUFDQztvQ0FBR0MsT0FBTTs4Q0FBTTs7Ozs7OzhDQUNoQiw4REFBQ0Q7b0NBQUdDLE9BQU07OENBQU07Ozs7Ozs4Q0FDaEIsOERBQUNEO29DQUFHQyxPQUFNOzhDQUFNOzs7Ozs7OENBQ2hCLDhEQUFDRDs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNFO2tDQUVHbkIsTUFBTU8sT0FBTyxDQUFDYSxHQUFHLENBQUNDLENBQUFBLHlCQUNkLDhEQUFDTDs7a0RBQ0csOERBQUNNO2tEQUFJRCxTQUFTbEIsRUFBRTs7Ozs7O2tEQUNoQiw4REFBQ21CO2tEQUFJRCxTQUFTRSxNQUFNOzs7Ozs7a0RBQ3BCLDhEQUFDRDtrREFBSUQsU0FBU0csTUFBTTs7Ozs7O2tEQUNwQiw4REFBQ0Y7OzBEQUNELDhEQUFDRztnREFBUVgsV0FBVTswREFBZ0I7Ozs7OzswREFFL0IsOERBQUNZO2dEQUFNQyxNQUFLO2dEQUFTeEIsSUFBRztnREFBS3lCLE1BQUs7Z0RBQUtDLE9BQU9SLFNBQVNsQixFQUFFOzs7Ozs7MERBQ3pELDhEQUFDc0I7Z0RBQU9LLFNBQVNDLENBQUFBLFFBQVFDLFNBQVNYLFNBQVNsQixFQUFFO2dEQUFHVyxXQUFVOzBEQUFpQjs7Ozs7Ozs7Ozs7OzsrQkFSMUVPLFNBQVNsQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCaEQ7R0F4RE1KO0tBQUFBOztBQW1FTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lbXBsb3llZS5qcz82NmQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7RGVsZXRlRW1wbG95ZWV9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9naWNhJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcclxuXHJcblxyXG5jb25zdCBFbXBsb3llZXMgPSAocHJvcHMpID0+e1xyXG4gICAgY29uc3QgW2RhdGEsc2V0ZGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTonJ1xyXG4gICAgfSlcclxuICAgICBjb25zdCBbaWQsc2V0aWRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGlkOicnXHJcbiAgICB9KVxyXG4gICAgIHVzZUVmZmVjdCggKCk9PntcclxuICAgICAgICBjb25zdCBnZXRsaXN0ID0gYXN5bmMoKSA9PntcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGktcmVzdC1ub2RlanMtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9lbXBsb3llZScpXHJcbiAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyh7cHJvcHM6e3Jlc0pzb259fSlcclxuICAgICAgICByZXR1cm4ge3Byb3BzOntyZXNKc29ufX1cclxuICAgICAgICB9XHJcbiAgICAgfSwgW2lkXSlcclxuICAgICBjb1xyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5PTUJSRTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TQUxBUklPPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BQ0NJT05FUzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucmVzSnNvbi5tYXAoZW1wbG95ZWUgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlbXBsb3llZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbXBsb3llZS5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZW1wbG95ZWUubmFtZV9lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbXBsb3llZS5zYWxhcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8nID5FZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBpZD0naWQnIG5hbWU9J2lkJyB2YWx1ZT17ZW1wbG95ZWUuaWR9ID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0V2ZW50ID0+RWxpbWluYXIoZW1wbG95ZWUuaWQpfSBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJz5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcblxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS1yZXN0LW5vZGVqcy1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2VtcGxveWVlJylcclxuICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIHtwcm9wczp7cmVzSnNvbn19XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiZmV0Y2giLCJEZWxldGVFbXBsb3llZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3dhbCIsIkVtcGxveWVlcyIsInByb3BzIiwiZGF0YSIsInNldGRhdGEiLCJpZCIsInNldGlkIiwiZ2V0bGlzdCIsInJlcyIsInJlc0pzb24iLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNvIiwiZGl2IiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwiZW1wbG95ZWUiLCJ0ZCIsIm5hbWVfZSIsInNhbGFyeSIsImJ1dHRvbiIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJFdmVudCIsIkVsaW1pbmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/employee.js\n"));

/***/ })

});
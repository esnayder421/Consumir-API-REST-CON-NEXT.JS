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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ \"./components/container.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_logica__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/logica */ \"./components/logica.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Employees = (props)=>{\n    _s();\n    resJson;\n    const [id, setid] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async ()=>{\n        const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api-rest-nodejs-production.up.railway.app/employee\");\n        const resJson1 = await res.json();\n        console.log({\n            props: {\n                resJson: resJson1\n            }\n        });\n    }, [\n        id\n    ]);\n    const Eliminar = (id)=>{\n        (0,_components_logica__WEBPACK_IMPORTED_MODULE_3__.DeleteEmployee)(id);\n        alert(\"cambio de estado\");\n        setid(id + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table table-striped table-hover\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"NOMBRE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"SALARIO\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"ACCIONES\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: resJson.map((employee)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.name_e\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.salary\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-info\",\n                                                children: \"Editar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"hidden\",\n                                                id: \"id\",\n                                                name: \"id\",\n                                                value: employee.id\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: (Event)=>Eliminar(employee.id),\n                                                className: \"btn btn-danger\",\n                                                children: \"Eliminar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, employee.id, true, {\n                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                lineNumber: 42,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n    async function getServerSideProps() {\n        ;\n        ;\n    }\n};\n_s(Employees, \"efzKSFhEQziSmzQ1lbhLker0KVw=\");\n_c = Employees;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Employees);\nvar _c;\n$RefreshReg$(_c, \"Employees\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbXBsb3llZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1g7QUFDYztBQUNQO0FBQ2Q7QUFHOUIsTUFBTU0sWUFBWSxDQUFDQyxRQUFTOztJQUN4QkM7SUFDQyxNQUFNLENBQUNDLElBQUdDLE1BQU0sR0FBR1AsK0NBQVFBLENBQUM7UUFDekJNLElBQUc7SUFDUDtJQUNDTCxnREFBU0EsQ0FBRSxVQUFXO1FBRW5CLE1BQU1PLE1BQU0sTUFBTVYsdURBQUtBLENBQUM7UUFDeEIsTUFBTU8sV0FBVSxNQUFNRyxJQUFJQyxJQUFJO1FBQzlCQyxRQUFRQyxHQUFHLENBQUM7WUFBQ1AsT0FBTTtnQkFBQ0MsU0FBQUE7WUFBTztRQUFDO0lBQy9CLEdBQUc7UUFBQ0M7S0FBRztJQUdQLE1BQU1NLFdBQVcsQ0FBQ04sS0FBTztRQUN0QlAsa0VBQWNBLENBQUNPO1FBQ2ZPLE1BQU07UUFDTk4sTUFBTUQsS0FBSTtJQUNkO0lBRUEscUJBQ0ksOERBQUNRO2tCQUNHLDRFQUFDakIsNkRBQVNBO3NCQUNOLDRFQUFDa0I7Z0JBQU1DLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FDRyw0RUFBQ0M7OzhDQUNHLDhEQUFDQztvQ0FBR0MsT0FBTTs4Q0FBTTs7Ozs7OzhDQUNoQiw4REFBQ0Q7b0NBQUdDLE9BQU07OENBQU07Ozs7Ozs4Q0FDaEIsOERBQUNEO29DQUFHQyxPQUFNOzhDQUFNOzs7Ozs7OENBQ2hCLDhEQUFDRDs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNFO2tDQUVHaEIsUUFBUWlCLEdBQUcsQ0FBQ0MsQ0FBQUEseUJBQ1IsOERBQUNMOztrREFDRyw4REFBQ007a0RBQUlELFNBQVNqQixFQUFFOzs7Ozs7a0RBQ2hCLDhEQUFDa0I7a0RBQUlELFNBQVNFLE1BQU07Ozs7OztrREFDcEIsOERBQUNEO2tEQUFJRCxTQUFTRyxNQUFNOzs7Ozs7a0RBQ3BCLDhEQUFDRjs7MERBQ0QsOERBQUNHO2dEQUFRWCxXQUFVOzBEQUFnQjs7Ozs7OzBEQUUvQiw4REFBQ1k7Z0RBQU1DLE1BQUs7Z0RBQVN2QixJQUFHO2dEQUFLd0IsTUFBSztnREFBS0MsT0FBT1IsU0FBU2pCLEVBQUU7Ozs7OzswREFDekQsOERBQUNxQjtnREFBT0ssU0FBU0MsQ0FBQUEsUUFBUXJCLFNBQVNXLFNBQVNqQixFQUFFO2dEQUFHVSxXQUFVOzBEQUFpQjs7Ozs7Ozs7Ozs7OzsrQkFSMUVPLFNBQVNqQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCM0MsZUFBZTRCLHFCQUFxQjs7O0lBR3JDO0FBQ0o7R0E3RE0vQjtLQUFBQTs7QUFrRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWUuanM/NjZkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQge0RlbGV0ZUVtcGxveWVlfSBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2ljYSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcblxyXG5cclxuY29uc3QgRW1wbG95ZWVzID0gKHByb3BzKSA9PntcclxuICAgIHJlc0pzb25cclxuICAgICBjb25zdCBbaWQsc2V0aWRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGlkOicnXHJcbiAgICB9KVxyXG4gICAgIHVzZUVmZmVjdCggYXN5bmMgKCkgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLXJlc3Qtbm9kZWpzLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvZW1wbG95ZWUnKVxyXG4gICAgICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coe3Byb3BzOntyZXNKc29ufX0pXHJcbiAgICAgfSwgW2lkXSlcclxuXHJcblxyXG4gICAgIGNvbnN0IEVsaW1pbmFyID0gKGlkKSA9PiB7XHJcbiAgICAgICAgRGVsZXRlRW1wbG95ZWUoaWQpXHJcbiAgICAgICAgYWxlcnQoJ2NhbWJpbyBkZSBlc3RhZG8nKVxyXG4gICAgICAgIHNldGlkKGlkICsxKVxyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5PTUJSRTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TQUxBUklPPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BQ0NJT05FUzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzSnNvbi5tYXAoZW1wbG95ZWUgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlbXBsb3llZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbXBsb3llZS5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZW1wbG95ZWUubmFtZV9lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbXBsb3llZS5zYWxhcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8nID5FZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBpZD0naWQnIG5hbWU9J2lkJyB2YWx1ZT17ZW1wbG95ZWUuaWR9ID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0V2ZW50ID0+RWxpbWluYXIoZW1wbG95ZWUuaWQpfSBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJz5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcblxyXG4gICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGktcmVzdC1ub2RlanMtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9lbXBsb3llZScpXHJcbiAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiZmV0Y2giLCJEZWxldGVFbXBsb3llZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3dhbCIsIkVtcGxveWVlcyIsInByb3BzIiwicmVzSnNvbiIsImlkIiwic2V0aWQiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIkVsaW1pbmFyIiwiYWxlcnQiLCJkaXYiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJlbXBsb3llZSIsInRkIiwibmFtZV9lIiwic2FsYXJ5IiwiYnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DbGljayIsIkV2ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/employee.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ \"./components/container.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_logica__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/logica */ \"./components/logica.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Employees = (props)=>{\n    _s();\n    resJson = {};\n    const [id, setid] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async ()=>{\n        const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api-rest-nodejs-production.up.railway.app/employee\");\n        const resJson1 = await res.json();\n        console.log({\n            props: {\n                resJson: resJson1\n            }\n        });\n    }, [\n        id\n    ]);\n    const Eliminar = (id)=>{\n        (0,_components_logica__WEBPACK_IMPORTED_MODULE_3__.DeleteEmployee)(id);\n        alert(\"cambio de estado\");\n        setid(id + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table table-striped table-hover\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"NOMBRE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"SALARIO\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"ACCIONES\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: resJson.map((employee)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.name_e\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.salary\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-info\",\n                                                children: \"Editar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"hidden\",\n                                                id: \"id\",\n                                                name: \"id\",\n                                                value: employee.id\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: (Event)=>Eliminar(employee.id),\n                                                className: \"btn btn-danger\",\n                                                children: \"Eliminar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, employee.id, true, {\n                                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                                lineNumber: 42,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\CrudNext\\\\pages\\\\employee.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n    async function getServerSideProps() {\n        ;\n        ;\n    }\n};\n_s(Employees, \"efzKSFhEQziSmzQ1lbhLker0KVw=\");\n_c = Employees;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Employees);\nvar _c;\n$RefreshReg$(_c, \"Employees\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbXBsb3llZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1g7QUFDYztBQUNQO0FBQ2Q7QUFHOUIsTUFBTU0sWUFBWSxDQUFDQyxRQUFTOztJQUN4QkMsVUFBUSxDQUFDO0lBQ1IsTUFBTSxDQUFDQyxJQUFHQyxNQUFNLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3pCTSxJQUFHO0lBQ1A7SUFDQ0wsZ0RBQVNBLENBQUUsVUFBVztRQUVuQixNQUFNTyxNQUFNLE1BQU1WLHVEQUFLQSxDQUFDO1FBQ3hCLE1BQU1PLFdBQVUsTUFBTUcsSUFBSUMsSUFBSTtRQUM5QkMsUUFBUUMsR0FBRyxDQUFDO1lBQUNQLE9BQU07Z0JBQUNDLFNBQUFBO1lBQU87UUFBQztJQUMvQixHQUFHO1FBQUNDO0tBQUc7SUFHUCxNQUFNTSxXQUFXLENBQUNOLEtBQU87UUFDdEJQLGtFQUFjQSxDQUFDTztRQUNmTyxNQUFNO1FBQ05OLE1BQU1ELEtBQUk7SUFDZDtJQUVBLHFCQUNJLDhEQUFDUTtrQkFDRyw0RUFBQ2pCLDZEQUFTQTtzQkFDTiw0RUFBQ2tCO2dCQUFNQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQ0csNEVBQUNDOzs4Q0FDRyw4REFBQ0M7b0NBQUdDLE9BQU07OENBQU07Ozs7Ozs4Q0FDaEIsOERBQUNEO29DQUFHQyxPQUFNOzhDQUFNOzs7Ozs7OENBQ2hCLDhEQUFDRDtvQ0FBR0MsT0FBTTs4Q0FBTTs7Ozs7OzhDQUNoQiw4REFBQ0Q7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDRTtrQ0FFR2hCLFFBQVFpQixHQUFHLENBQUNDLENBQUFBLHlCQUNSLDhEQUFDTDs7a0RBQ0csOERBQUNNO2tEQUFJRCxTQUFTakIsRUFBRTs7Ozs7O2tEQUNoQiw4REFBQ2tCO2tEQUFJRCxTQUFTRSxNQUFNOzs7Ozs7a0RBQ3BCLDhEQUFDRDtrREFBSUQsU0FBU0csTUFBTTs7Ozs7O2tEQUNwQiw4REFBQ0Y7OzBEQUNELDhEQUFDRztnREFBUVgsV0FBVTswREFBZ0I7Ozs7OzswREFFL0IsOERBQUNZO2dEQUFNQyxNQUFLO2dEQUFTdkIsSUFBRztnREFBS3dCLE1BQUs7Z0RBQUtDLE9BQU9SLFNBQVNqQixFQUFFOzs7Ozs7MERBQ3pELDhEQUFDcUI7Z0RBQU9LLFNBQVNDLENBQUFBLFFBQVFyQixTQUFTVyxTQUFTakIsRUFBRTtnREFBR1UsV0FBVTswREFBaUI7Ozs7Ozs7Ozs7Ozs7K0JBUjFFTyxTQUFTakIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QjNDLGVBQWU0QixxQkFBcUI7OztJQUdyQztBQUNKO0dBN0RNL0I7S0FBQUE7O0FBa0VOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VtcGxveWVlLmpzPzY2ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHtEZWxldGVFbXBsb3llZX0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpY2EnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xyXG5cclxuXHJcbmNvbnN0IEVtcGxveWVlcyA9IChwcm9wcykgPT57XHJcbiAgICByZXNKc29uPXt9XHJcbiAgICAgY29uc3QgW2lkLHNldGlkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpZDonJ1xyXG4gICAgfSlcclxuICAgICB1c2VFZmZlY3QoIGFzeW5jICgpID0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS1yZXN0LW5vZGVqcy1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2VtcGxveWVlJylcclxuICAgICAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHtwcm9wczp7cmVzSnNvbn19KVxyXG4gICAgIH0sIFtpZF0pXHJcblxyXG5cclxuICAgICBjb25zdCBFbGltaW5hciA9IChpZCkgPT4ge1xyXG4gICAgICAgIERlbGV0ZUVtcGxveWVlKGlkKVxyXG4gICAgICAgIGFsZXJ0KCdjYW1iaW8gZGUgZXN0YWRvJylcclxuICAgICAgICBzZXRpZChpZCArMSlcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OT01CUkU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U0FMQVJJTzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QUNDSU9ORVM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0pzb24ubWFwKGVtcGxveWVlID0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZW1wbG95ZWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZW1wbG95ZWUuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VtcGxveWVlLm5hbWVfZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZW1wbG95ZWUuc2FsYXJ5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJyA+RWRpdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9J2lkJyBuYW1lPSdpZCcgdmFsdWU9e2VtcGxveWVlLmlkfSA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtFdmVudCA9PkVsaW1pbmFyKGVtcGxveWVlLmlkKX0gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlcic+RWxpbWluYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG5cclxuICAgICBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLXJlc3Qtbm9kZWpzLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvZW1wbG95ZWUnKVxyXG4gICAgICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlcztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImZldGNoIiwiRGVsZXRlRW1wbG95ZWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN3YWwiLCJFbXBsb3llZXMiLCJwcm9wcyIsInJlc0pzb24iLCJpZCIsInNldGlkIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJFbGltaW5hciIsImFsZXJ0IiwiZGl2IiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwiZW1wbG95ZWUiLCJ0ZCIsIm5hbWVfZSIsInNhbGFyeSIsImJ1dHRvbiIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJFdmVudCIsImdldFNlcnZlclNpZGVQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/employee.js\n"));

/***/ })

});
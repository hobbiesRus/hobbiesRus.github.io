webpackHotUpdate_N_E("pages/_app",{

/***/ "./layouts/layout.js":
/*!***************************!*\
  !*** ./layouts/layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ecommerce_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecommerce.config */ "./ecommerce.config.js");

var _jsxFileName = "C:\\Users\\davud\\Documents\\Projects\\hobbypage\\layouts\\layout.js";





function Layout(_ref) {
  var _this = this;

  var children = _ref.children,
      categories = _ref.categories;

  if (categories.length > _ecommerce_config__WEBPACK_IMPORTED_MODULE_5__["navItemLength"]) {
    categories = categories.slice(0, _ecommerce_config__WEBPACK_IMPORTED_MODULE_5__["navItemLength"]);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "\r mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0\r px-4 pt-8 flex flex-col w-fw\r ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-4 sm:mr-16 max-w-48 sm:max-w-none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                "aria-label": "Home",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/logo.png",
                  alt: "logo",
                  width: "90",
                  height: "28"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-wrap mt-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                "aria-label": "Home",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "\r sm:mr-8 sm:mb-0\r mb-4 text-left text-smaller mr-4\r ",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), categories.map(function (category, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/category/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["slugify"])(category)),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "aria-label": category,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "\r sm:mr-8 sm:mb-0\r mb-4 text-left text-smaller mr-4\r ",
                    children: category.charAt(0).toUpperCase() + category.slice(1)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 21
                }, _this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/categories",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                "aria-label": "All categories",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "\r sm:mr-8 sm:mb-0\r mb-4 text-left text-smaller mr-4 \r ",
                  children: "All"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mobile:px-10 px-4 pb-10 flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "w-fw",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "\r sm:flex-row sm:items-center\r flex-col\r flex w-fw px-12 py-8\r desktop:px-0\r border-solid\r border-t border-gray-300",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "block text-gray-700 text-xs",
          children: "Copyright \xA9 2021 DCDesign."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "\r sm:justify-end sm:m-0\r flex flex-1 mt-4\r ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/admin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              "aria-label": "Admin panel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
      autoClose: 3000
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwibmF2SXRlbUxlbmd0aCIsInNsaWNlIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsInNsdWdpZnkiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUEwQztBQUFBOztBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQ3ZELE1BQUlBLFVBQVUsQ0FBQ0MsTUFBWCxHQUFvQkMsK0RBQXhCLEVBQXVDO0FBQ3JDRixjQUFVLEdBQUdBLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixDQUFqQixFQUFvQkQsK0RBQXBCLENBQWI7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLDZGQUFmO0FBQUEsa0NBSUU7QUFBSyxxQkFBUyxFQUFDLHNDQUFmO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFHLDhCQUFXLE1BQWQ7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUMsV0FBVDtBQUFxQixxQkFBRyxFQUFDLE1BQXpCO0FBQWdDLHVCQUFLLEVBQUMsSUFBdEM7QUFBMkMsd0JBQU0sRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBV0U7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsb0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFHLDhCQUFXLE1BQWQ7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsMERBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQVlJRixVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSxrQ0FDYixxRUFBQyxnREFBRDtBQUNFLG9CQUFJLHNCQUFlQyw4REFBTyxDQUFDRixRQUFELENBQXRCLENBRE47QUFBQSx1Q0FJRTtBQUFHLGdDQUFZQSxRQUFmO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLDBEQUFiO0FBQUEsOEJBSUdBLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsV0FBbkIsS0FBbUNKLFFBQVEsQ0FBQ0YsS0FBVCxDQUFlLENBQWY7QUFKdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixpQkFFT0csS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURhO0FBQUEsYUFBZixDQVpKLGVBNEJFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxhQUFYO0FBQUEscUNBQ0U7QUFBRyw4QkFBVyxnQkFBZDtBQUFBLHVDQUNFO0FBQUcsMkJBQVMsRUFBQywyREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXdERTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxNQUFoQjtBQUFBLGtCQUF3QlA7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4REYsZUEyREU7QUFBUSxlQUFTLEVBQUMscUJBQWxCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJIQUFmO0FBQUEsZ0NBT0U7QUFBTSxtQkFBUyxFQUFDLDZCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVFFO0FBQUssbUJBQVMsRUFBQyxnREFBZjtBQUFBLGlDQUlFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxRQUFYO0FBQUEsbUNBQ0U7QUFBRyw0QkFBVztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0RGLGVBZ0ZFLHFFQUFDLDZEQUFEO0FBQWdCLGVBQVMsRUFBRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0ZEO0tBeEZ1QkQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc0ZmRhNDA2OTk0ZDM2YjE0NzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJ1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCB7IG5hdkl0ZW1MZW5ndGggfSBmcm9tICcuLi9lY29tbWVyY2UuY29uZmlnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGNhdGVnb3JpZXMgfSkge1xyXG4gIGlmIChjYXRlZ29yaWVzLmxlbmd0aCA+IG5hdkl0ZW1MZW5ndGgpIHtcclxuICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLnNsaWNlKDAsIG5hdkl0ZW1MZW5ndGgpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgbW9iaWxlOnB4LTEyIHNtOmZsZXgtcm93IHNtOnB0LTEyIHNtOnBiLTYgZGVza3RvcDpweC0wXHJcbiAgICAgICAgICAgIHB4LTQgcHQtOCBmbGV4IGZsZXgtY29sIHctZndcclxuICAgICAgICAgIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgc206bXItMTYgbWF4LXctNDggc206bWF4LXctbm9uZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiSG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiB3aWR0aD1cIjkwXCIgaGVpZ2h0PVwiMjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtMVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiSG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICBzbTptci04IHNtOm1iLTBcclxuICAgICAgICAgICAgICAgICAgICBtYi00IHRleHQtbGVmdCB0ZXh0LXNtYWxsZXIgbXItNFxyXG4gICAgICAgICAgICAgICAgICBcIj5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2NhdGVnb3J5LyR7c2x1Z2lmeShjYXRlZ29yeSl9YH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD17Y2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc206bXItOCBzbTptYi0wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWItNCB0ZXh0LWxlZnQgdGV4dC1zbWFsbGVyIG1yLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhdGVnb3J5LnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiQWxsIGNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc206bXItOCBzbTptYi0wXHJcbiAgICAgICAgICAgICAgICAgICAgbWItNCB0ZXh0LWxlZnQgdGV4dC1zbWFsbGVyIG1yLTQgXHJcbiAgICAgICAgICAgICAgICAgIFwiPlxyXG4gICAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlOnB4LTEwIHB4LTQgcGItMTAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZndcIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXJcclxuICAgICAgICBmbGV4LWNvbFxyXG4gICAgICAgIGZsZXggdy1mdyBweC0xMiBweS04XHJcbiAgICAgICAgZGVza3RvcDpweC0wXHJcbiAgICAgICAgYm9yZGVyLXNvbGlkXHJcbiAgICAgICAgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQteHNcIj5Db3B5cmlnaHQgwqkgMjAyMSBEQ0Rlc2lnbi48L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICBzbTpqdXN0aWZ5LWVuZCBzbTptLTBcclxuICAgICAgICAgICAgZmxleCBmbGV4LTEgbXQtNFxyXG4gICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiQWRtaW4gcGFuZWxcIj5cclxuICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkXCI+QWRtaW5zPC9wPiAqL31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIGF1dG9DbG9zZT17MzAwMH0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
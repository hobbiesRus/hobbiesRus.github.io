webpackHotUpdate_N_E("pages/category/[name]",{

/***/ "./pages/category/[name].js":
/*!**********************************!*\
  !*** ./pages/category/[name].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ListItem */ "./components/ListItem.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _components_CartLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CartLink */ "./components/CartLink.js");



var _jsxFileName = "C:\\Users\\davud\\Documents\\Projects\\hobbypage\\pages\\category\\[name].js",
    _this = undefined;






var Category = function Category(props) {
  var inventory = props.inventory,
      title = props.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Hobbies - ", title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Jamstack ECommerce - ".concat(title)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Jamstack ECommerce - ".concat(title)
      }, "title", false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "max-w-fw flex flex-col w-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-4 sm:pt-10 pb-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl font-light",
            children: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["titleIfy"])(title)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-1 flex-wrap flex-row",
            children: inventory.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
                link: "/product/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(item.name)),
                title: item.name,
                price: item.price,
                imageSrc: item.image
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = Category;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW25hbWVdLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwicHJvcHMiLCJpbnZlbnRvcnkiLCJ0aXRsZSIsInRpdGxlSWZ5IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2x1Z2lmeSIsIm5hbWUiLCJwcmljZSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbEJDLFNBRGtCLEdBQ0dELEtBREgsQ0FDbEJDLFNBRGtCO0FBQUEsTUFDUEMsS0FETyxHQUNHRixLQURILENBQ1BFLEtBRE87QUFFMUIsc0JBQ0U7QUFBQSw0QkFFRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsaUNBQWtCQSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxpQ0FBMEJBLEtBQTFCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8saUNBQTBCQSxLQUExQjtBQUFqQyxTQUF3RSxPQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQyxxQkFBZDtBQUFBLHNCQUFxQ0MsK0RBQVEsQ0FBQ0QsS0FBRDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQUEsc0JBRUlELFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM3QixrQ0FDRSxxRUFBQyw0REFBRDtBQUVFLG9CQUFJLHFCQUFjQyw4REFBTyxDQUFDRixJQUFJLENBQUNHLElBQU4sQ0FBckIsQ0FGTjtBQUdFLHFCQUFLLEVBQUVILElBQUksQ0FBQ0csSUFIZDtBQUlFLHFCQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FKZDtBQUtFLHdCQUFRLEVBQUVKLElBQUksQ0FBQ0s7QUFMakIsaUJBQ09KLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVNELGFBVkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQW1DRCxDQXJDRDs7S0FBTVAsUTs7QUE2RFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tuYW1lXS4xNzE5Yzk2ZjdhYzI0ZjcwMDAwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0SXRlbSdcclxuaW1wb3J0IHsgdGl0bGVJZnksIHNsdWdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJ1xyXG5pbXBvcnQgZmV0Y2hDYXRlZ29yaWVzIGZyb20gJy4uLy4uL3V0aWxzL2NhdGVnb3J5UHJvdmlkZXInXHJcbmltcG9ydCBpbnZlbnRvcnlGb3JDYXRlZ29yeSBmcm9tICcuLi8uLi91dGlscy9pbnZlbnRvcnlGb3JDYXRlZ29yeSdcclxuaW1wb3J0IENhcnRMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FydExpbmsnXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW52ZW50b3J5LCB0aXRsZSB9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxDYXJ0TGluayAvPiAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvYmJpZXMgLSB7dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgSmFtc3RhY2sgRUNvbW1lcmNlIC0gJHt0aXRsZX1gfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgSmFtc3RhY2sgRUNvbW1lcmNlIC0gJHt0aXRsZX1gfSBrZXk9XCJ0aXRsZVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctZncgZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBzbTpwdC0xMCBwYi04XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWxpZ2h0XCI+e3RpdGxlSWZ5KHRpdGxlKX08L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LXdyYXAgZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxpbms9e2AvcHJvZHVjdC8ke3NsdWdpZnkoaXRlbS5uYW1lKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyAoKSB7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQ2F0ZWdvcmllcygpXHJcbiAgY29uc3QgcGF0aHMgPSBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XHJcbiAgICByZXR1cm4geyBwYXJhbXM6IHsgbmFtZTogc2x1Z2lmeShjYXRlZ29yeSkgfX1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBwYXJhbXMubmFtZS5yZXBsYWNlKC8tL2csXCIgXCIpXHJcbiAgY29uc3QgaW52ZW50b3J5ID0gYXdhaXQgaW52ZW50b3J5Rm9yQ2F0ZWdvcnkoY2F0ZWdvcnkpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGludmVudG9yeSxcclxuICAgICAgdGl0bGU6IGNhdGVnb3J5XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=
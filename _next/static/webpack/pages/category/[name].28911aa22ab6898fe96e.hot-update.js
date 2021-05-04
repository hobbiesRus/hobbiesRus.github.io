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
        content: "Hobbies - ".concat(title)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Hobbies - ".concat(title)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW25hbWVdLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwicHJvcHMiLCJpbnZlbnRvcnkiLCJ0aXRsZSIsInRpdGxlSWZ5IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2x1Z2lmeSIsIm5hbWUiLCJwcmljZSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbEJDLFNBRGtCLEdBQ0dELEtBREgsQ0FDbEJDLFNBRGtCO0FBQUEsTUFDUEMsS0FETyxHQUNHRixLQURILENBQ1BFLEtBRE87QUFFMUIsc0JBQ0U7QUFBQSw0QkFFRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsaUNBQWtCQSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxzQkFBZUEsS0FBZjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLHNCQUFlQSxLQUFmO0FBQWpDLFNBQTZELE9BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU9FO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsaUNBQ0U7QUFBSSxxQkFBUyxFQUFDLHFCQUFkO0FBQUEsc0JBQXFDQywrREFBUSxDQUFDRCxLQUFEO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsZ0NBQWY7QUFBQSxzQkFFSUQsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzdCLGtDQUNFLHFFQUFDLDREQUFEO0FBRUUsb0JBQUkscUJBQWNDLDhEQUFPLENBQUNGLElBQUksQ0FBQ0csSUFBTixDQUFyQixDQUZOO0FBR0UscUJBQUssRUFBRUgsSUFBSSxDQUFDRyxJQUhkO0FBSUUscUJBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUpkO0FBS0Usd0JBQVEsRUFBRUosSUFBSSxDQUFDSztBQUxqQixpQkFDT0osS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBU0QsYUFWRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBbUNELENBckNEOztLQUFNUCxROztBQTZEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW25hbWVdLjI4OTExYWEyMmFiNjg5OGZlOTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpc3RJdGVtJ1xyXG5pbXBvcnQgeyB0aXRsZUlmeSwgc2x1Z2lmeSB9IGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcnMnXHJcbmltcG9ydCBmZXRjaENhdGVnb3JpZXMgZnJvbSAnLi4vLi4vdXRpbHMvY2F0ZWdvcnlQcm92aWRlcidcclxuaW1wb3J0IGludmVudG9yeUZvckNhdGVnb3J5IGZyb20gJy4uLy4uL3V0aWxzL2ludmVudG9yeUZvckNhdGVnb3J5J1xyXG5pbXBvcnQgQ2FydExpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJ0TGluaydcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbnZlbnRvcnksIHRpdGxlIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPENhcnRMaW5rIC8+ICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9iYmllcyAtIHt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2BIb2JiaWVzIC0gJHt0aXRsZX1gfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgSG9iYmllcyAtICR7dGl0bGV9YH0ga2V5PVwidGl0bGVcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWZ3IGZsZXggZmxleC1jb2wgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgc206cHQtMTAgcGItOFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1saWdodFwiPnt0aXRsZUlmeSh0aXRsZSl9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC13cmFwIGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rPXtgL3Byb2R1Y3QvJHtzbHVnaWZ5KGl0ZW0ubmFtZSl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCkge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaENhdGVnb3JpZXMoKVxyXG4gIGNvbnN0IHBhdGhzID0gY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xyXG4gICAgcmV0dXJuIHsgcGFyYW1zOiB7IG5hbWU6IHNsdWdpZnkoY2F0ZWdvcnkpIH19XHJcbiAgfSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLm5hbWUucmVwbGFjZSgvLS9nLFwiIFwiKVxyXG4gIGNvbnN0IGludmVudG9yeSA9IGF3YWl0IGludmVudG9yeUZvckNhdGVnb3J5KGNhdGVnb3J5KVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpbnZlbnRvcnksXHJcbiAgICAgIHRpdGxlOiBjYXRlZ29yeVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9
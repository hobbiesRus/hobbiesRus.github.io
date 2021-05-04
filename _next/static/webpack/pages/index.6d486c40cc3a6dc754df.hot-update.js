webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _components_CartLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CartLink */ "./components/CartLink.js");



var _jsxFileName = "C:\\Users\\davud\\Documents\\Projects\\hobbypage\\pages\\index.js",
    _this = undefined;






var Home = function Home(_ref) {
  var _ref$inventoryData = _ref.inventoryData,
      inventoryData = _ref$inventoryData === void 0 ? [] : _ref$inventoryData,
      _ref$categories = _ref.categories,
      categoryData = _ref$categories === void 0 ? [] : _ref$categories;
  var inventory = inventoryData.slice(0, 10);
  var categories = categoryData.slice(0, 6);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Hobby Advisor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "Jamstack ECommerce Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:title",
          content: "Hobby Advisor"
        }, "title", false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-blue-300\r p-6 pb-10 smpb-6\r flex lg:flex-row flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            year: "2022",
            category: "Hobby Advisor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Center"], {
            price: "200",
            title: inventory[2].name // link={`/category/${slugify(categories)}`}
            ,
            link: "/categories/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
            designer: "Jason Bourne"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-1 justify-center items-center relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Showcase"] // imageSrc={inventory[8].image}
          , {
            imageSrc: '/products/herohobby.png'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "absolute\r w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88\r bg-white z-0 rounded-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "\r lg:my-8 lg:grid-cols-2\r grid-cols-1\r grid gap-4 my-4 \r ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["DisplayMedium"], {
        imageSrc: categories[0].image,
        subtitle: "".concat(categories[0].itemCount, " items"),
        title: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["titleIfy"])(categories[0].name),
        link: "/category/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(categories[0].name))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["DisplayMedium"], {
        imageSrc: categories[1].image,
        subtitle: "".concat(categories[1].itemCount, " items"),
        title: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["titleIfy"])(categories[1].name),
        link: "/category/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(categories[1].name))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pt-10 pb-6 flex flex-col items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-4xl mb-3",
        children: "Trending Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-600 text-sm",
        children: "Find the perfect hobby for your needs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "my-8 flex flex-col lg:flex-row justify-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["DisplaySmall"], {
        imageSrc: inventory[0].image,
        title: inventory[0].name,
        subtitle: inventory[0].categories[0],
        link: "/product/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(inventory[0].name))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["DisplaySmall"], {
        imageSrc: inventory[1].image,
        title: inventory[1].name,
        subtitle: inventory[1].categories[0],
        link: "/product/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(inventory[1].name))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["DisplaySmall"], {
        imageSrc: inventory[2].image,
        title: inventory[2].name,
        subtitle: inventory[2].categories[0],
        link: "/product/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(inventory[2].name))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["DisplaySmall"], {
        imageSrc: inventory[3].image,
        title: inventory[3].name,
        subtitle: inventory[3].categories[0],
        link: "/product/".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(inventory[3].name))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImludmVudG9yeURhdGEiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlEYXRhIiwiaW52ZW50b3J5Iiwic2xpY2UiLCJuYW1lIiwiaW1hZ2UiLCJpdGVtQ291bnQiLCJ0aXRsZUlmeSIsInNsdWdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyRDtBQUFBLGdDQUF4REMsYUFBd0Q7QUFBQSxNQUF4REEsYUFBd0QsbUNBQXhDLEVBQXdDO0FBQUEsNkJBQXBDQyxVQUFvQztBQUFBLE1BQXhCQyxZQUF3QixnQ0FBVCxFQUFTO0FBQ3RFLE1BQU1DLFNBQVMsR0FBR0gsYUFBYSxDQUFDSSxLQUFkLENBQW9CLENBQXBCLEVBQXVCLEVBQXZCLENBQWxCO0FBQ0EsTUFBTUgsVUFBVSxHQUFHQyxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBbkI7QUFFQSxzQkFDRTtBQUFBLDRCQUVFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxjQUFJLEVBQUMsYUFBWDtBQUF5QixpQkFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFNLGtCQUFRLEVBQUMsVUFBZjtBQUEwQixpQkFBTyxFQUFDO0FBQWxDLFdBQXNELE9BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsNERBQWY7QUFBQSxnQ0FHRTtBQUFLLG1CQUFTLEVBQUMsMkNBQWY7QUFBQSxrQ0FDRSxxRUFBQywr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QkFBUSxFQUFFRixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFGLFVBQWIsQ0FBd0IsQ0FBeEIsQ0FIWjtBQUlFLFlBQUkscUJBQWNRLDhEQUFPLENBQUNOLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUUsSUFBZCxDQUFyQjtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWVFLHFFQUFDLHdEQUFEO0FBQ0UsZ0JBQVEsRUFBRUYsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRyxLQUR6QjtBQUVFLGFBQUssRUFBRUgsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxJQUZ0QjtBQUdFLGdCQUFRLEVBQUVGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUYsVUFBYixDQUF3QixDQUF4QixDQUhaO0FBSUUsWUFBSSxxQkFBY1EsOERBQU8sQ0FBQ04sU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxJQUFkLENBQXJCO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLGVBc0JFLHFFQUFDLHdEQUFEO0FBQ0UsZ0JBQVEsRUFBRUYsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRyxLQUR6QjtBQUVFLGFBQUssRUFBRUgsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxJQUZ0QjtBQUdFLGdCQUFRLEVBQUVGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUYsVUFBYixDQUF3QixDQUF4QixDQUhaO0FBSUUsWUFBSSxxQkFBY1EsOERBQU8sQ0FBQ04sU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxJQUFkLENBQXJCO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1REY7QUFBQSxrQkFERjtBQTRGRCxDQWhHRDs7S0FBTU4sSTs7QUFpSVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkNDg2YzQwY2MzYTZkYzc1NGRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IENlbnRlciwgRm9vdGVyLCBUYWcsIFNob3djYXNlLCBEaXNwbGF5U21hbGwsIERpc3BsYXlNZWRpdW0gfSBmcm9tICcuLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0aXRsZUlmeSwgc2x1Z2lmeSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnXHJcbmltcG9ydCB7IGZldGNoSW52ZW50b3J5IH0gZnJvbSAnLi4vdXRpbHMvaW52ZW50b3J5UHJvdmlkZXInXHJcbmltcG9ydCBDYXJ0TGluayBmcm9tICcuLi9jb21wb25lbnRzL0NhcnRMaW5rJ1xyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBpbnZlbnRvcnlEYXRhID0gW10sIGNhdGVnb3JpZXM6IGNhdGVnb3J5RGF0YSA9IFtdIH0pID0+IHtcclxuICBjb25zdCBpbnZlbnRvcnkgPSBpbnZlbnRvcnlEYXRhLnNsaWNlKDAsIDEwKVxyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBjYXRlZ29yeURhdGEuc2xpY2UoMCwgNilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8Q2FydExpbmsgLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+SG9iYnkgQWR2aXNvcjwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSmFtc3RhY2sgRUNvbW1lcmNlIE5leHQgcHJvdmlkZXMgYSB3YXkgdG8gcXVpY2tseSBnZXQgdXAgYW5kIHJ1bm5pbmcgd2l0aCBhIGZ1bGx5IGNvbmZpZ3VyYWJsZSBFQ29tbWVyY2Ugc2l0ZSB1c2luZyBOZXh0LmpzLlwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkhvYmJ5IEFkdmlzb3JcIiBrZXk9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS0zMDBcclxuICAgICAgICBwLTYgcGItMTAgc21wYi02XHJcbiAgICAgICAgZmxleCBsZzpmbGV4LXJvdyBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHBsLTIgc206cHQtMTIgc206cGwtMTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgeWVhcj1cIjIwMjJcIlxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5PVwiSG9iYnkgQWR2aXNvclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDZW50ZXJcclxuICAgICAgICAgICAgICBwcmljZT1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2ludmVudG9yeVsyXS5uYW1lfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIGxpbms9e2AvY2F0ZWdvcnkvJHtzbHVnaWZ5KGNhdGVnb3JpZXMpfWB9XHJcbiAgICAgICAgICAgICAgbGluaz17YC9jYXRlZ29yaWVzL2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgICBkZXNpZ25lcj1cIkphc29uIEJvdXJuZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPFNob3djYXNlXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZVNyYz17aW52ZW50b3J5WzhdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM9eycvcHJvZHVjdHMvaGVyb2hvYmJ5LnBuZyd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlXHJcbiAgICAgICAgICAgICAgdy00OCBoLTQ4IHNtOnctNzIgc206aC03MiB4bDp3LTg4IHhsOmgtODhcclxuICAgICAgICAgICAgICBiZy13aGl0ZSB6LTAgcm91bmRlZC1mdWxsXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICBsZzpteS04IGxnOmdyaWQtY29scy0yXHJcbiAgICAgICAgZ3JpZC1jb2xzLTFcclxuICAgICAgICBncmlkIGdhcC00IG15LTQgXHJcbiAgICAgIFwiPlxyXG4gICAgICAgIDxEaXNwbGF5TWVkaXVtXHJcbiAgICAgICAgICBpbWFnZVNyYz17Y2F0ZWdvcmllc1swXS5pbWFnZX1cclxuICAgICAgICAgIHN1YnRpdGxlPXtgJHtjYXRlZ29yaWVzWzBdLml0ZW1Db3VudH0gaXRlbXNgfVxyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlSWZ5KGNhdGVnb3JpZXNbMF0ubmFtZSl9XHJcbiAgICAgICAgICBsaW5rPXtgL2NhdGVnb3J5LyR7c2x1Z2lmeShjYXRlZ29yaWVzWzBdLm5hbWUpfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RGlzcGxheU1lZGl1bVxyXG4gICAgICAgICAgaW1hZ2VTcmM9e2NhdGVnb3JpZXNbMV0uaW1hZ2V9XHJcbiAgICAgICAgICBzdWJ0aXRsZT17YCR7Y2F0ZWdvcmllc1sxXS5pdGVtQ291bnR9IGl0ZW1zYH1cclxuICAgICAgICAgIHRpdGxlPXt0aXRsZUlmeShjYXRlZ29yaWVzWzFdLm5hbWUpfVxyXG4gICAgICAgICAgbGluaz17YC9jYXRlZ29yeS8ke3NsdWdpZnkoY2F0ZWdvcmllc1sxXS5uYW1lKX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHBiLTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItM1wiPlRyZW5kaW5nIE5vdzwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXCI+RmluZCB0aGUgcGVyZmVjdCBob2JieSBmb3IgeW91ciBuZWVkcy48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTggZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8RGlzcGxheVNtYWxsXHJcbiAgICAgICAgICBpbWFnZVNyYz17aW52ZW50b3J5WzBdLmltYWdlfVxyXG4gICAgICAgICAgdGl0bGU9e2ludmVudG9yeVswXS5uYW1lfVxyXG4gICAgICAgICAgc3VidGl0bGU9e2ludmVudG9yeVswXS5jYXRlZ29yaWVzWzBdfVxyXG4gICAgICAgICAgbGluaz17YC9wcm9kdWN0LyR7c2x1Z2lmeShpbnZlbnRvcnlbMF0ubmFtZSl9YH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RGlzcGxheVNtYWxsXHJcbiAgICAgICAgICBpbWFnZVNyYz17aW52ZW50b3J5WzFdLmltYWdlfVxyXG4gICAgICAgICAgdGl0bGU9e2ludmVudG9yeVsxXS5uYW1lfVxyXG4gICAgICAgICAgc3VidGl0bGU9e2ludmVudG9yeVsxXS5jYXRlZ29yaWVzWzBdfVxyXG4gICAgICAgICAgbGluaz17YC9wcm9kdWN0LyR7c2x1Z2lmeShpbnZlbnRvcnlbMV0ubmFtZSl9YH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RGlzcGxheVNtYWxsXHJcbiAgICAgICAgICBpbWFnZVNyYz17aW52ZW50b3J5WzJdLmltYWdlfVxyXG4gICAgICAgICAgdGl0bGU9e2ludmVudG9yeVsyXS5uYW1lfVxyXG4gICAgICAgICAgc3VidGl0bGU9e2ludmVudG9yeVsyXS5jYXRlZ29yaWVzWzBdfVxyXG4gICAgICAgICAgbGluaz17YC9wcm9kdWN0LyR7c2x1Z2lmeShpbnZlbnRvcnlbMl0ubmFtZSl9YH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RGlzcGxheVNtYWxsXHJcbiAgICAgICAgICBpbWFnZVNyYz17aW52ZW50b3J5WzNdLmltYWdlfVxyXG4gICAgICAgICAgdGl0bGU9e2ludmVudG9yeVszXS5uYW1lfVxyXG4gICAgICAgICAgc3VidGl0bGU9e2ludmVudG9yeVszXS5jYXRlZ29yaWVzWzBdfVxyXG4gICAgICAgICAgbGluaz17YC9wcm9kdWN0LyR7c2x1Z2lmeShpbnZlbnRvcnlbM10ubmFtZSl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGludmVudG9yeSA9IGF3YWl0IGZldGNoSW52ZW50b3J5KClcclxuICBcclxuICBjb25zdCBpbnZlbnRvcnlDYXRlZ29yaXplZCA9IGludmVudG9yeS5yZWR1Y2UoKGFjYywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG5leHQuY2F0ZWdvcmllc1xyXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGFjYy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGMpXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gYWNjW2luZGV4XVxyXG4gICAgICAgIGl0ZW0uaXRlbUNvdW50ID0gaXRlbS5pdGVtQ291bnQgKyAxXHJcbiAgICAgICAgYWNjW2luZGV4XSA9IGl0ZW1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgICAgbmFtZTogYyxcclxuICAgICAgICAgIGltYWdlOiBuZXh0LmltYWdlLFxyXG4gICAgICAgICAgaXRlbUNvdW50OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjYy5wdXNoKGl0ZW0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGludmVudG9yeURhdGE6IGludmVudG9yeSxcclxuICAgICAgY2F0ZWdvcmllczogaW52ZW50b3J5Q2F0ZWdvcml6ZWRcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9
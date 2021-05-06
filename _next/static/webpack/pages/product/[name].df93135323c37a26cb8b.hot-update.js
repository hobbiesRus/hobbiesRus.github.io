webpackHotUpdate_N_E("pages/product/[name]",{

/***/ "./pages/product/[name].js":
/*!*********************************!*\
  !*** ./pages/product/[name].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Image */ "./components/Image.js");
/* harmony import */ var _components_QuantityPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuantityPicker */ "./components/QuantityPicker.js");
/* harmony import */ var _components_CartLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CartLink */ "./components/CartLink.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/mainContext */ "./context/mainContext.js");




var _jsxFileName = "C:\\Users\\davud\\Documents\\Projects\\hobbypage\\pages\\product\\[name].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ItemView = function ItemView(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      numberOfitems = _useState[0],
      updateNumberOfItems = _useState[1];

  var product = props.product;
  var price = product.price,
      image = product.image,
      name = product.name,
      description = product.description,
      brand = product.brand;
  var addToCart = props.context.addToCart;

  function addItemToCart(product) {
    product["quantity"] = numberOfitems;
    addToCart(product);
  }

  function increment() {
    updateNumberOfItems(numberOfitems + 1);
  }

  function decrement() {
    if (numberOfitems === 1) return;
    updateNumberOfItems(numberOfitems - 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: ["Hobbies - ", name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Hobbies - ".concat(name)
      }, "title", false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "\r sm:py-12\r md:flex-row\r py-4 w-full flex flex-1 flex-col my-0 mx-auto\r ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "py-16 p10 flex flex-1 justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
            src: image,
            alt: "Inventory item",
            className: "max-h-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "\r sm:mt-0 mt-2 text-5xl font-light leading-large\r ",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: "text-2xl tracking-wide sm:py-8 py-6",
          children: ["$", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "text-gray-600 leading-7",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "my-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          full: true,
          title: "Check it out" // onClick={() => window.open( 'http://www.google.com')}
          ,
          onClick: function onClick() {
            return window.open(brand);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ItemView, "xGgKDV4les7T754ZWhRDc6pLTwk=");

_c = ItemView;

function ItemViewWithContext(props) {
  var _this2 = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__["ContextProviderComponent"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__["SiteContext"].Consumer, {
      children: function children(context) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ItemView, _objectSpread(_objectSpread({}, props), {}, {
          context: context
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 22
        }, _this2);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

_c2 = ItemViewWithContext;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ItemViewWithContext);

var _c, _c2;

$RefreshReg$(_c, "ItemView");
$RefreshReg$(_c2, "ItemViewWithContext");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bbmFtZV0uanMiXSwibmFtZXMiOlsiSXRlbVZpZXciLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtYmVyT2ZpdGVtcyIsInVwZGF0ZU51bWJlck9mSXRlbXMiLCJwcm9kdWN0IiwicHJpY2UiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImJyYW5kIiwiYWRkVG9DYXJ0IiwiY29udGV4dCIsImFkZEl0ZW1Ub0NhcnQiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJ3aW5kb3ciLCJvcGVuIiwiSXRlbVZpZXdXaXRoQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLENBQUQsQ0FEM0I7QUFBQSxNQUNuQkMsYUFEbUI7QUFBQSxNQUNKQyxtQkFESTs7QUFBQSxNQUVsQkMsT0FGa0IsR0FFTkosS0FGTSxDQUVsQkksT0FGa0I7QUFBQSxNQUdsQkMsS0FIa0IsR0FHeUJELE9BSHpCLENBR2xCQyxLQUhrQjtBQUFBLE1BR1hDLEtBSFcsR0FHeUJGLE9BSHpCLENBR1hFLEtBSFc7QUFBQSxNQUdKQyxJQUhJLEdBR3lCSCxPQUh6QixDQUdKRyxJQUhJO0FBQUEsTUFHRUMsV0FIRixHQUd5QkosT0FIekIsQ0FHRUksV0FIRjtBQUFBLE1BR2VDLEtBSGYsR0FHeUJMLE9BSHpCLENBR2VLLEtBSGY7QUFBQSxNQUlQQyxTQUpPLEdBSVFWLEtBSlIsQ0FJbEJXLE9BSmtCLENBSVBELFNBSk87O0FBTTFCLFdBQVNFLGFBQVQsQ0FBd0JSLE9BQXhCLEVBQWlDO0FBQy9CQSxXQUFPLENBQUMsVUFBRCxDQUFQLEdBQXNCRixhQUF0QjtBQUNBUSxhQUFTLENBQUNOLE9BQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNTLFNBQVQsR0FBcUI7QUFDbkJWLHVCQUFtQixDQUFDRCxhQUFhLEdBQUcsQ0FBakIsQ0FBbkI7QUFDRDs7QUFFRCxXQUFTWSxTQUFULEdBQXFCO0FBQ25CLFFBQUlaLGFBQWEsS0FBSyxDQUF0QixFQUF5QjtBQUN6QkMsdUJBQW1CLENBQUNELGFBQWEsR0FBRyxDQUFqQixDQUFuQjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBRUUscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGlDQUFrQkssSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxzQkFBZUQsSUFBZjtBQUFqQyxTQUE0RCxPQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRTtBQUFLLGVBQVMsRUFBQyw4RUFBZjtBQUFBLDhCQUtFO0FBQUssaUJBQVMsRUFBQywrREFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxtREFBZjtBQUFBLGlDQUNFLHFFQUFDLHlEQUFEO0FBQU8sZUFBRyxFQUFFRCxLQUFaO0FBQW1CLGVBQUcsRUFBQyxnQkFBdkI7QUFBd0MscUJBQVMsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVVFO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxzREFBZDtBQUFBLG9CQUVHQztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFJLG1CQUFTLEVBQUMscUNBQWQ7QUFBQSwwQkFBc0RGLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFO0FBQUcsbUJBQVMsRUFBQyx5QkFBYjtBQUFBLG9CQUF3Q0c7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFhSSxxRUFBQywwREFBRDtBQUNBLGNBQUksTUFESjtBQUVBLGVBQUssRUFBQyxjQUZOLENBR0E7QUFIQTtBQUlBLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU8sTUFBTSxDQUFDQyxJQUFQLENBQVlQLEtBQVosQ0FBTjtBQUFBO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBeUNELENBN0REOztHQUFNVixROztLQUFBQSxROztBQXNGTixTQUFTa0IsbUJBQVQsQ0FBNkJqQixLQUE3QixFQUFvQztBQUFBOztBQUNsQyxzQkFDRSxxRUFBQyw2RUFBRDtBQUFBLDJCQUNFLHFFQUFDLGdFQUFELENBQWEsUUFBYjtBQUFBLGdCQUVJLGtCQUFBVyxPQUFPO0FBQUEsNEJBQUkscUVBQUMsUUFBRCxrQ0FBY1gsS0FBZDtBQUFxQixpQkFBTyxFQUFFVztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFKO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O01BVlFNLG1COztBQVlNQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tuYW1lXS5kZjkzMTM1MzIzYzM3YTI2Y2I4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbWFnZSdcclxuaW1wb3J0IFF1YW50aXR5UGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVhbnRpdHlQaWNrZXInXHJcbmltcG9ydCB7IGZldGNoSW52ZW50b3J5IH0gZnJvbSAnLi4vLi4vdXRpbHMvaW52ZW50b3J5UHJvdmlkZXInXHJcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJ1xyXG5pbXBvcnQgQ2FydExpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJ0TGluaydcclxuaW1wb3J0IHsgU2l0ZUNvbnRleHQsIENvbnRleHRQcm92aWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnXHJcblxyXG5jb25zdCBJdGVtVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtudW1iZXJPZml0ZW1zLCB1cGRhdGVOdW1iZXJPZkl0ZW1zXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgcHJpY2UsIGltYWdlLCBuYW1lLCBkZXNjcmlwdGlvbiwgYnJhbmQgfSA9IHByb2R1Y3RcclxuICBjb25zdCB7IGNvbnRleHQ6IHsgYWRkVG9DYXJ0IH19ID0gcHJvcHNcclxuXHJcbiAgZnVuY3Rpb24gYWRkSXRlbVRvQ2FydCAocHJvZHVjdCkge1xyXG4gICAgcHJvZHVjdFtcInF1YW50aXR5XCJdID0gbnVtYmVyT2ZpdGVtc1xyXG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XHJcbiAgICB1cGRhdGVOdW1iZXJPZkl0ZW1zKG51bWJlck9maXRlbXMgKyAxKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjcmVtZW50KCkge1xyXG4gICAgaWYgKG51bWJlck9maXRlbXMgPT09IDEpIHJldHVyblxyXG4gICAgdXBkYXRlTnVtYmVyT2ZJdGVtcyhudW1iZXJPZml0ZW1zIC0gMSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIHsvKiA8Q2FydExpbmsgLz4gKi99XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib2JiaWVzIC0ge25hbWV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YEhvYmJpZXMgLSAke25hbWV9YH0ga2V5PVwidGl0bGVcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgc206cHktMTJcclxuICAgICAgICBtZDpmbGV4LXJvd1xyXG4gICAgICAgIHB5LTQgdy1mdWxsIGZsZXggZmxleC0xIGZsZXgtY29sIG15LTAgbXgtYXV0b1xyXG4gICAgICBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBoLTEyMCBmbGV4IGZsZXgtMSBiZy1saWdodCBob3ZlcjpiZy1saWdodC0yMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTYgcDEwIGZsZXggZmxleC0xIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiSW52ZW50b3J5IGl0ZW1cIiBjbGFzc05hbWU9XCJtYXgtaC1mdWxsXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBweC0wIG1kOnB4LTEwIHBiLTggdy1mdWxsIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgc206bXQtMCBtdC0yIHRleHQtNXhsIGZvbnQtbGlnaHQgbGVhZGluZy1sYXJnZVxyXG4gICAgICAgICAgXCI+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0cmFja2luZy13aWRlIHNtOnB5LTggcHktNlwiPiR7cHJpY2V9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbGVhZGluZy03XCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNlwiPlxyXG4gICAgICAgICAgICB7LyogPFF1YW50aXR5UGlja2VyXHJcbiAgICAgICAgICAgICAgaW5jcmVtZW50PXtpbmNyZW1lbnR9XHJcbiAgICAgICAgICAgICAgZGVjcmVtZW50PXtkZWNyZW1lbnR9XHJcbiAgICAgICAgICAgICAgbnVtYmVyT2ZpdGVtcz17bnVtYmVyT2ZpdGVtc31cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBmdWxsXHJcbiAgICAgICAgICAgIHRpdGxlPVwiQ2hlY2sgaXQgb3V0XCJcclxuICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nKX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYnJhbmQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyAoKSB7XHJcbiAgY29uc3QgaW52ZW50b3J5ID0gYXdhaXQgZmV0Y2hJbnZlbnRvcnkoKVxyXG4gIGNvbnN0IHBhdGhzID0gaW52ZW50b3J5Lm1hcChpdGVtID0+IHtcclxuICAgIHJldHVybiB7IHBhcmFtczogeyBuYW1lOiBzbHVnaWZ5KGl0ZW0ubmFtZSkgfX1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy5uYW1lLnJlcGxhY2UoLy0vZyxcIiBcIilcclxuICBjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBmZXRjaEludmVudG9yeSgpXHJcbiAgY29uc3QgcHJvZHVjdCA9IGludmVudG9yeS5maW5kKGl0ZW0gPT4gc2x1Z2lmeShpdGVtLm5hbWUpID09PSBzbHVnaWZ5KG5hbWUpKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdCxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEl0ZW1WaWV3V2l0aENvbnRleHQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHRQcm92aWRlckNvbXBvbmVudD5cclxuICAgICAgPFNpdGVDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRleHQgPT4gPEl0ZW1WaWV3IHsuLi5wcm9wc30gY29udGV4dD17Y29udGV4dH0gLz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvU2l0ZUNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICA8L0NvbnRleHRQcm92aWRlckNvbXBvbmVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1WaWV3V2l0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9
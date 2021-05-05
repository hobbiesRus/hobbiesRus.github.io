webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils/inventory.js":
/*!****************************!*\
  !*** ./utils/inventory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

var inventory = [{
  categories: ['creative'],
  name: 'Drumming',
  price: '1000',
  image: '/products/drumset.jpg',
  description: ' You can easily record your own tracks, and jam out with this awesome drum set. 40 New Preset Kits, 200 User Kits and over 400 New Voices.Faithful reproduction of real sound and ambience recorded in a well-known studio .',
  brand: 'https://amzn.to/3vylxD4',
  currentInventory: 1
}, {
  categories: ['creative'],
  name: 'Jewerly making',
  price: '25',
  image: '/products/jewerly.jpg',
  description: 'Spend your time creating unique jewerly. This type of hobby can even be monitized, or even add on to your wardrobe. Let your imagination go wild.',
  brand: 'https://amzn.to/33dh8JK',
  currentInventory: 1
}, {
  categories: ['creative'],
  name: 'Photography',
  price: '499',
  image: '/products/photography.jpg',
  description: 'Capture the outdoors, create cool image. Possibilities are endless with this hobby',
  brand: 'https://amzn.to/3nS4Wrq',
  currentInventory: 1
}, {
  categories: ['creative'],
  name: 'Cocktail mixing',
  price: '499',
  image: '/products/cocktail.jpg',
  description: 'Most people love a good cocktail. Mix and match and explore different tastes. Entertain guests with your new inventions ',
  brand: 'https://amzn.to/3aZ582W',
  currentInventory: 1
}, {
  categories: ['creative'],
  name: 'Indoor gardening',
  price: 'varies',
  image: '/products/cocktail.jpg',
  description: 'Most people love a good cocktail. Mix and match and explore different tastes. Entertain guests with your new inventions ',
  brand: 'https://amzn.to/3aZ582W',
  currentInventory: 1
}, {
  categories: ['for kids'],
  name: 'Magnetic Tiles',
  price: '24',
  image: '/products/kids1.jpg',
  description: 'Let the kid imagination run wild with this creative toy. Build houses, cars, and anything they can imagine. Lots of hours of fun',
  brand: 'https://amzn.to/3tgZWOb',
  currentInventory: 1
}, {
  categories: ['for kids'],
  name: 'Magnetic Tiles',
  price: '24',
  image: '/products/kids1.jpg',
  description: 'Let the kid imagination run wild with this creative toy. Build houses, cars, and anything they can imagine. Lots of hours of fun',
  brand: 'https://amzn.to/3tgZWOb',
  currentInventory: 1
}, {
  categories: ['for kids'],
  name: 'RC Cars',
  price: '100',
  image: '/products/rccar.jpg',
  description: 'Have fun outside with this awesome RC car.',
  brand: 'https://amzn.to/33cBX86',
  currentInventory: 1
}, {
  categories: ['for kids'],
  name: 'model Kits',
  price: '68',
  image: '/products/modelkit.jpg',
  description: 'This is fun, and most of all the parents can join in on the fun.',
  brand: 'https://amzn.to/3aZFuuQ',
  currentInventory: 1
}, {
  categories: ['for kids'],
  name: 'Magic Kits',
  price: '68',
  image: '/products/magic.jpg',
  description: 'Learn magic, have your kids entertain others. Either way, this is a fun hobby to engage in',
  brand: 'https://amzn.to/33aSrNQ',
  currentInventory: 1
}, {
  categories: ['outdoor'],
  name: 'Archery',
  price: '80',
  image: '/products/archery.jpg',
  description: 'Hone your skills in archery. You can practice this in a safe space, or even enter into competitive local games',
  brand: 'https://amzn.to/3egQ1E4',
  currentInventory: 4
}, {
  categories: ['outdoor', 'for couples'],
  name: 'outdoor painting',
  price: '26',
  image: '/products/painting.jpg',
  description: 'Enjoy the great outdoors, and paint it at the same time. Capture the streams, oceans, and landascape. This is a great hobby!.',
  brand: 'https://amzn.to/3nL97Ff',
  currentInventory: 10
}, {
  categories: ['for couples', 'outdoor'],
  name: 'Paint Ball',
  price: '200',
  image: '/products/paintball.jpg',
  description: ' Dodge, shoot!, roll, plan, and win. This is a great way to enjoy a good time with friends.',
  brand: 'https://amzn.to/3h0CMJ5',
  currentInventory: 24
}, {
  categories: ['outdoor', 'for couples'],
  name: 'Done flying',
  price: '45',
  image: '/products/drone.jpg',
  description: ' There is a huge community of drone enthusiasts. This hobby can easily morph into aerial photography, or even nature videography. Great way to spend time outdoor',
  brand: 'https://amzn.to/3eRLM0D',
  currentInventory: 2
}, {
  categories: ['for couples'],
  name: 'Tennis',
  price: '89',
  image: '/products/tennis.jpg',
  description: 'This is a great for couples and mostly its also a way to excercise',
  brand: 'https://amzn.to/3vzwBzK',
  currentInventory: 2
}];
inventory.map(function (i) {
  i.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
  return i;
});
/* harmony default export */ __webpack_exports__["default"] = (inventory);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbImludmVudG9yeSIsImNhdGVnb3JpZXMiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYnJhbmQiLCJjdXJyZW50SW52ZW50b3J5IiwibWFwIiwiaSIsImlkIiwidXVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLFNBQVMsR0FBRyxDQUNkO0FBQ0FDLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEWjtBQUMwQkMsTUFBSSxFQUFFLFVBRGhDO0FBQzRDQyxPQUFLLEVBQUUsTUFEbkQ7QUFDMkRDLE9BQUssRUFBRSx1QkFEbEU7QUFDMkZDLGFBQVcsRUFBRSw4TkFEeEc7QUFDd1VDLE9BQUssRUFBRSx5QkFEL1U7QUFDMFdDLGtCQUFnQixFQUFFO0FBRDVYLENBRGMsRUFHZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxnQkFEbEM7QUFDb0RDLE9BQUssRUFBRSxJQUQzRDtBQUNpRUMsT0FBSyxFQUFFLHVCQUR4RTtBQUNpR0MsYUFBVyxFQUFFLG1KQUQ5RztBQUNtUUMsT0FBSyxFQUFFLHlCQUQxUTtBQUNxU0Msa0JBQWdCLEVBQUU7QUFEdlQsQ0FIYyxFQU1kO0FBQ0VOLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEZDtBQUM0QkMsTUFBSSxFQUFFLGFBRGxDO0FBQ2lEQyxPQUFLLEVBQUUsS0FEeEQ7QUFDK0RDLE9BQUssRUFBRSwyQkFEdEU7QUFDbUdDLGFBQVcsRUFBRSxvRkFEaEg7QUFDc01DLE9BQUssRUFBRSx5QkFEN007QUFDd09DLGtCQUFnQixFQUFFO0FBRDFQLENBTmMsRUFTZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxpQkFEbEM7QUFDcURDLE9BQUssRUFBRSxLQUQ1RDtBQUNtRUMsT0FBSyxFQUFFLHdCQUQx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QUMsU0FBRCxFQUFZLGFBQVosQ0FEZDtBQUMwQ0MsTUFBSSxFQUFFLGFBRGhEO0FBQytEQyxPQUFLLEVBQUUsSUFEdEU7QUFDNEVDLE9BQUssRUFBRSxxQkFEbkY7QUFDMEdDLGFBQVcsRUFBRSxtS0FEdkg7QUFDNFJDLE9BQUssRUFBRSx5QkFEblM7QUFDK1RDLGtCQUFnQixFQUFFO0FBRGpWLENBL0JjLEVBaUNaO0FBQ0VOLFlBQVUsRUFBRSxDQUFDLGFBQUQsQ0FEZDtBQUMrQkMsTUFBSSxFQUFFLFFBRHJDO0FBQytDQyxPQUFLLEVBQUUsSUFEdEQ7QUFDNERDLE9BQUssRUFBRSxzQkFEbkU7QUFDMkZDLGFBQVcsRUFBRSxvRUFEeEc7QUFDOEtDLE9BQUssRUFBRSx5QkFEckw7QUFDZ05DLGtCQUFnQixFQUFFO0FBRGxPLENBakNZLENBQWhCO0FBc0NBUCxTQUFTLENBQUNRLEdBQVYsQ0FBYyxVQUFBQyxDQUFDLEVBQUk7QUFDakJBLEdBQUMsQ0FBQ0MsRUFBRixHQUFPQywrQ0FBSSxFQUFYO0FBQ0EsU0FBT0YsQ0FBUDtBQUNELENBSEQ7QUFLZVQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lZWRjZTkxZDI4MDA2Y2UzOTI5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXHJcblxyXG5sZXQgaW52ZW50b3J5ID0gW1xyXG4gIHtcclxuICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdEcnVtbWluZycsIHByaWNlOiAnMTAwMCcsIGltYWdlOiAnL3Byb2R1Y3RzL2RydW1zZXQuanBnJywgZGVzY3JpcHRpb246ICcgWW91IGNhbiBlYXNpbHkgcmVjb3JkIHlvdXIgb3duIHRyYWNrcywgYW5kIGphbSBvdXQgd2l0aCB0aGlzIGF3ZXNvbWUgZHJ1bSBzZXQuIDQwIE5ldyBQcmVzZXQgS2l0cywgMjAwIFVzZXIgS2l0cyBhbmQgb3ZlciA0MDAgTmV3IFZvaWNlcy5GYWl0aGZ1bCByZXByb2R1Y3Rpb24gb2YgcmVhbCBzb3VuZCBhbmQgYW1iaWVuY2UgcmVjb3JkZWQgaW4gYSB3ZWxsLWtub3duIHN0dWRpbyAuJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM3Z5bHhENCcsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdKZXdlcmx5IG1ha2luZycsIHByaWNlOiAnMjUnLCBpbWFnZTogJy9wcm9kdWN0cy9qZXdlcmx5LmpwZycsIGRlc2NyaXB0aW9uOiAnU3BlbmQgeW91ciB0aW1lIGNyZWF0aW5nIHVuaXF1ZSBqZXdlcmx5LiBUaGlzIHR5cGUgb2YgaG9iYnkgY2FuIGV2ZW4gYmUgbW9uaXRpemVkLCBvciBldmVuIGFkZCBvbiB0byB5b3VyIHdhcmRyb2JlLiBMZXQgeW91ciBpbWFnaW5hdGlvbiBnbyB3aWxkLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzMzZGg4SksnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAgICBcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdQaG90b2dyYXBoeScsIHByaWNlOiAnNDk5JywgaW1hZ2U6ICcvcHJvZHVjdHMvcGhvdG9ncmFwaHkuanBnJywgZGVzY3JpcHRpb246ICdDYXB0dXJlIHRoZSBvdXRkb29ycywgY3JlYXRlIGNvb2wgaW1hZ2UuIFBvc3NpYmlsaXRpZXMgYXJlIGVuZGxlc3Mgd2l0aCB0aGlzIGhvYmJ5JywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM25TNFdycScsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICAgIFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnY3JlYXRpdmUnXSwgbmFtZTogJ0NvY2t0YWlsIG1peGluZycsIHByaWNlOiAnNDk5JywgaW1hZ2U6ICcvcHJvZHVjdHMvY29ja3RhaWwuanBnJywgZGVzY3JpcHRpb246ICdNb3N0IHBlb3BsZSBsb3ZlIGEgZ29vZCBjb2NrdGFpbC4gTWl4IGFuZCBtYXRjaCBhbmQgZXhwbG9yZSBkaWZmZXJlbnQgdGFzdGVzLiBFbnRlcnRhaW4gZ3Vlc3RzIHdpdGggeW91ciBuZXcgaW52ZW50aW9ucyAnLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zYVo1ODJXJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gICAgXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydjcmVhdGl2ZSddLCBuYW1lOiAnSW5kb29yIGdhcmRlbmluZycsIHByaWNlOiAndmFyaWVzJywgaW1hZ2U6ICcvcHJvZHVjdHMvY29ja3RhaWwuanBnJywgZGVzY3JpcHRpb246ICdNb3N0IHBlb3BsZSBsb3ZlIGEgZ29vZCBjb2NrdGFpbC4gTWl4IGFuZCBtYXRjaCBhbmQgZXhwbG9yZSBkaWZmZXJlbnQgdGFzdGVzLiBFbnRlcnRhaW4gZ3Vlc3RzIHdpdGggeW91ciBuZXcgaW52ZW50aW9ucyAnLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zYVo1ODJXJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFsnZm9yIGtpZHMnXSwgbmFtZTogJ01hZ25ldGljIFRpbGVzJywgcHJpY2U6ICcyNCcsIGltYWdlOiAnL3Byb2R1Y3RzL2tpZHMxLmpwZycsIGRlc2NyaXB0aW9uOiAnTGV0IHRoZSBraWQgaW1hZ2luYXRpb24gcnVuIHdpbGQgd2l0aCB0aGlzIGNyZWF0aXZlIHRveS4gQnVpbGQgaG91c2VzLCBjYXJzLCBhbmQgYW55dGhpbmcgdGhleSBjYW4gaW1hZ2luZS4gTG90cyBvZiBob3VycyBvZiBmdW4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zdGdaV09iJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnZm9yIGtpZHMnXSwgbmFtZTogJ01hZ25ldGljIFRpbGVzJywgcHJpY2U6ICcyNCcsIGltYWdlOiAnL3Byb2R1Y3RzL2tpZHMxLmpwZycsIGRlc2NyaXB0aW9uOiAnTGV0IHRoZSBraWQgaW1hZ2luYXRpb24gcnVuIHdpbGQgd2l0aCB0aGlzIGNyZWF0aXZlIHRveS4gQnVpbGQgaG91c2VzLCBjYXJzLCBhbmQgYW55dGhpbmcgdGhleSBjYW4gaW1hZ2luZS4gTG90cyBvZiBob3VycyBvZiBmdW4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zdGdaV09iJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gIHtcclxuICBjYXRlZ29yaWVzOiBbJ2ZvciBraWRzJ10sIG5hbWU6ICdSQyBDYXJzJywgcHJpY2U6ICcxMDAnLCBpbWFnZTogJy9wcm9kdWN0cy9yY2Nhci5qcGcnLCBkZXNjcmlwdGlvbjogJ0hhdmUgZnVuIG91dHNpZGUgd2l0aCB0aGlzIGF3ZXNvbWUgUkMgY2FyLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzMzY0JYODYnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAge1xyXG4gIGNhdGVnb3JpZXM6IFsnZm9yIGtpZHMnXSwgbmFtZTogJ21vZGVsIEtpdHMnLCBwcmljZTogJzY4JywgaW1hZ2U6ICcvcHJvZHVjdHMvbW9kZWxraXQuanBnJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGZ1biwgYW5kIG1vc3Qgb2YgYWxsIHRoZSBwYXJlbnRzIGNhbiBqb2luIGluIG9uIHRoZSBmdW4uJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM2FaRnV1UScsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2ZvciBraWRzJ10sIG5hbWU6ICdNYWdpYyBLaXRzJywgcHJpY2U6ICc2OCcsIGltYWdlOiAnL3Byb2R1Y3RzL21hZ2ljLmpwZycsIGRlc2NyaXB0aW9uOiAnTGVhcm4gbWFnaWMsIGhhdmUgeW91ciBraWRzIGVudGVydGFpbiBvdGhlcnMuIEVpdGhlciB3YXksIHRoaXMgaXMgYSBmdW4gaG9iYnkgdG8gZW5nYWdlIGluJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vMzNhU3JOUScsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ291dGRvb3InXSwgbmFtZTogJ0FyY2hlcnknLCBwcmljZTogJzgwJywgaW1hZ2U6ICcvcHJvZHVjdHMvYXJjaGVyeS5qcGcnLCBkZXNjcmlwdGlvbjogJ0hvbmUgeW91ciBza2lsbHMgaW4gYXJjaGVyeS4gWW91IGNhbiBwcmFjdGljZSB0aGlzIGluIGEgc2FmZSBzcGFjZSwgb3IgZXZlbiBlbnRlciBpbnRvIGNvbXBldGl0aXZlIGxvY2FsIGdhbWVzJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM2VnUTFFNCcsIGN1cnJlbnRJbnZlbnRvcnk6IDQgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ291dGRvb3InLCAnZm9yIGNvdXBsZXMnXSwgbmFtZTogJ291dGRvb3IgcGFpbnRpbmcnLCBwcmljZTogJzI2JywgaW1hZ2U6ICcvcHJvZHVjdHMvcGFpbnRpbmcuanBnJywgZGVzY3JpcHRpb246ICdFbmpveSB0aGUgZ3JlYXQgb3V0ZG9vcnMsIGFuZCBwYWludCBpdCBhdCB0aGUgc2FtZSB0aW1lLiBDYXB0dXJlIHRoZSBzdHJlYW1zLCBvY2VhbnMsIGFuZCBsYW5kYXNjYXBlLiBUaGlzIGlzIGEgZ3JlYXQgaG9iYnkhLicgLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zbkw5N0ZmJywgY3VycmVudEludmVudG9yeTogMTB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnZm9yIGNvdXBsZXMnLCAnb3V0ZG9vciddLCBuYW1lOiAnUGFpbnQgQmFsbCcsIHByaWNlOiAnMjAwJywgaW1hZ2U6ICcvcHJvZHVjdHMvcGFpbnRiYWxsLmpwZycsIGRlc2NyaXB0aW9uOiAnIERvZGdlLCBzaG9vdCEsIHJvbGwsIHBsYW4sIGFuZCB3aW4uIFRoaXMgaXMgYSBncmVhdCB3YXkgdG8gZW5qb3kgYSBnb29kIHRpbWUgd2l0aCBmcmllbmRzLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNoMENNSjUnLCBjdXJyZW50SW52ZW50b3J5OiAyNCB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnb3V0ZG9vcicsICdmb3IgY291cGxlcyddLCBuYW1lOiAnRG9uZSBmbHlpbmcnLCBwcmljZTogJzQ1JywgaW1hZ2U6ICcvcHJvZHVjdHMvZHJvbmUuanBnJywgZGVzY3JpcHRpb246ICcgVGhlcmUgaXMgYSBodWdlIGNvbW11bml0eSBvZiBkcm9uZSBlbnRodXNpYXN0cy4gVGhpcyBob2JieSBjYW4gZWFzaWx5IG1vcnBoIGludG8gYWVyaWFsIHBob3RvZ3JhcGh5LCBvciBldmVuIG5hdHVyZSB2aWRlb2dyYXBoeS4gR3JlYXQgd2F5IHRvIHNwZW5kIHRpbWUgb3V0ZG9vcicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNlUkxNMEQnICwgY3VycmVudEludmVudG9yeTogMn0sXHJcbiAgICB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFsnZm9yIGNvdXBsZXMnXSwgbmFtZTogJ1Rlbm5pcycsIHByaWNlOiAnODknLCBpbWFnZTogJy9wcm9kdWN0cy90ZW5uaXMuanBnJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZ3JlYXQgZm9yIGNvdXBsZXMgYW5kIG1vc3RseSBpdHMgYWxzbyBhIHdheSB0byBleGNlcmNpc2UnLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zdnp3QnpLJywgY3VycmVudEludmVudG9yeTogMn0sXHJcbiAgXHJcbiAgIF1cclxuXHJcbmludmVudG9yeS5tYXAoaSA9PiB7XHJcbiAgaS5pZCA9IHV1aWQoKVxyXG4gIHJldHVybiBpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnZlbnRvcnkiXSwic291cmNlUm9vdCI6IiJ9
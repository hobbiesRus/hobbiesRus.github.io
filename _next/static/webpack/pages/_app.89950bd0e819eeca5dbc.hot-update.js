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
  price: '10-100',
  image: '/products/indoorgarden.jpg',
  description: 'What a great way to decorate your home, and have fun in the process. Did you know that some indoor plants can even help clean the air? Check out this great hobby  ',
  brand: 'https://www.amazon.com/s?k=indoor+gardening&camp=1789&creative=9325&linkCode=ur2&linkId=4827661f588a9bc382af146011c2d346&tag=hobbystore020-20',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbImludmVudG9yeSIsImNhdGVnb3JpZXMiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYnJhbmQiLCJjdXJyZW50SW52ZW50b3J5IiwibWFwIiwiaSIsImlkIiwidXVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLFNBQVMsR0FBRyxDQUNkO0FBQ0FDLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEWjtBQUMwQkMsTUFBSSxFQUFFLFVBRGhDO0FBQzRDQyxPQUFLLEVBQUUsTUFEbkQ7QUFDMkRDLE9BQUssRUFBRSx1QkFEbEU7QUFDMkZDLGFBQVcsRUFBRSw4TkFEeEc7QUFDd1VDLE9BQUssRUFBRSx5QkFEL1U7QUFDMFdDLGtCQUFnQixFQUFFO0FBRDVYLENBRGMsRUFHZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxnQkFEbEM7QUFDb0RDLE9BQUssRUFBRSxJQUQzRDtBQUNpRUMsT0FBSyxFQUFFLHVCQUR4RTtBQUNpR0MsYUFBVyxFQUFFLG1KQUQ5RztBQUNtUUMsT0FBSyxFQUFFLHlCQUQxUTtBQUNxU0Msa0JBQWdCLEVBQUU7QUFEdlQsQ0FIYyxFQU1kO0FBQ0VOLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEZDtBQUM0QkMsTUFBSSxFQUFFLGFBRGxDO0FBQ2lEQyxPQUFLLEVBQUUsS0FEeEQ7QUFDK0RDLE9BQUssRUFBRSwyQkFEdEU7QUFDbUdDLGFBQVcsRUFBRSxvRkFEaEg7QUFDc01DLE9BQUssRUFBRSx5QkFEN007QUFDd09DLGtCQUFnQixFQUFFO0FBRDFQLENBTmMsRUFTZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxpQkFEbEM7QUFDcURDLE9BQUssRUFBRSxLQUQ1RDtBQUNtRUMsT0FBSyxFQUFFLHdCQUQx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VSxFQUFFLENBQUMsYUFBRCxDQURkO0FBQytCQyxNQUFJLEVBQUUsUUFEckM7QUFDK0NDLE9BQUssRUFBRSxJQUR0RDtBQUM0REMsT0FBSyxFQUFFLHNCQURuRTtBQUMyRkMsYUFBVyxFQUFFLG9FQUR4RztBQUM4S0MsT0FBSyxFQUFFLHlCQURyTDtBQUNnTkMsa0JBQWdCLEVBQUU7QUFEbE8sQ0EvQlksQ0FBaEI7QUFvQ0FQLFNBQVMsQ0FBQ1EsR0FBVixDQUFjLFVBQUFDLENBQUMsRUFBSTtBQUNqQkEsR0FBQyxDQUFDQyxFQUFGLEdBQU9DLCtDQUFJLEVBQVg7QUFDQSxTQUFPRixDQUFQO0FBQ0QsQ0FIRDtBQUtlVCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg5OTUwYmQwZTgxOWVlY2E1ZGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcclxuXHJcbmxldCBpbnZlbnRvcnkgPSBbXHJcbiAge1xyXG4gIGNhdGVnb3JpZXM6IFsnY3JlYXRpdmUnXSwgbmFtZTogJ0RydW1taW5nJywgcHJpY2U6ICcxMDAwJywgaW1hZ2U6ICcvcHJvZHVjdHMvZHJ1bXNldC5qcGcnLCBkZXNjcmlwdGlvbjogJyBZb3UgY2FuIGVhc2lseSByZWNvcmQgeW91ciBvd24gdHJhY2tzLCBhbmQgamFtIG91dCB3aXRoIHRoaXMgYXdlc29tZSBkcnVtIHNldC4gNDAgTmV3IFByZXNldCBLaXRzLCAyMDAgVXNlciBLaXRzIGFuZCBvdmVyIDQwMCBOZXcgVm9pY2VzLkZhaXRoZnVsIHJlcHJvZHVjdGlvbiBvZiByZWFsIHNvdW5kIGFuZCBhbWJpZW5jZSByZWNvcmRlZCBpbiBhIHdlbGwta25vd24gc3R1ZGlvIC4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zdnlseEQ0JywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnY3JlYXRpdmUnXSwgbmFtZTogJ0pld2VybHkgbWFraW5nJywgcHJpY2U6ICcyNScsIGltYWdlOiAnL3Byb2R1Y3RzL2pld2VybHkuanBnJywgZGVzY3JpcHRpb246ICdTcGVuZCB5b3VyIHRpbWUgY3JlYXRpbmcgdW5pcXVlIGpld2VybHkuIFRoaXMgdHlwZSBvZiBob2JieSBjYW4gZXZlbiBiZSBtb25pdGl6ZWQsIG9yIGV2ZW4gYWRkIG9uIHRvIHlvdXIgd2FyZHJvYmUuIExldCB5b3VyIGltYWdpbmF0aW9uIGdvIHdpbGQuJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vMzNkaDhKSycsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICAgIFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnY3JlYXRpdmUnXSwgbmFtZTogJ1Bob3RvZ3JhcGh5JywgcHJpY2U6ICc0OTknLCBpbWFnZTogJy9wcm9kdWN0cy9waG90b2dyYXBoeS5qcGcnLCBkZXNjcmlwdGlvbjogJ0NhcHR1cmUgdGhlIG91dGRvb3JzLCBjcmVhdGUgY29vbCBpbWFnZS4gUG9zc2liaWxpdGllcyBhcmUgZW5kbGVzcyB3aXRoIHRoaXMgaG9iYnknLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zblM0V3JxJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gICAgXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydjcmVhdGl2ZSddLCBuYW1lOiAnQ29ja3RhaWwgbWl4aW5nJywgcHJpY2U6ICc0OTknLCBpbWFnZTogJy9wcm9kdWN0cy9jb2NrdGFpbC5qcGcnLCBkZXNjcmlwdGlvbjogJ01vc3QgcGVvcGxlIGxvdmUgYSBnb29kIGNvY2t0YWlsLiBNaXggYW5kIG1hdGNoIGFuZCBleHBsb3JlIGRpZmZlcmVudCB0YXN0ZXMuIEVudGVydGFpbiBndWVzdHMgd2l0aCB5b3VyIG5ldyBpbnZlbnRpb25zICcsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNhWjU4MlcnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAgICBcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdJbmRvb3IgZ2FyZGVuaW5nJywgcHJpY2U6ICcxMC0xMDAnLCBpbWFnZTogJy9wcm9kdWN0cy9pbmRvb3JnYXJkZW4uanBnJywgZGVzY3JpcHRpb246ICdXaGF0IGEgZ3JlYXQgd2F5IHRvIGRlY29yYXRlIHlvdXIgaG9tZSwgYW5kIGhhdmUgZnVuIGluIHRoZSBwcm9jZXNzLiBEaWQgeW91IGtub3cgdGhhdCBzb21lIGluZG9vciBwbGFudHMgY2FuIGV2ZW4gaGVscCBjbGVhbiB0aGUgYWlyPyBDaGVjayBvdXQgdGhpcyBncmVhdCBob2JieSAgJywgYnJhbmQ6ICdodHRwczovL3d3dy5hbWF6b24uY29tL3M/az1pbmRvb3IrZ2FyZGVuaW5nJmNhbXA9MTc4OSZjcmVhdGl2ZT05MzI1JmxpbmtDb2RlPXVyMiZsaW5rSWQ9NDgyNzY2MWY1ODhhOWJjMzgyYWYxNDYwMTFjMmQzNDYmdGFnPWhvYmJ5c3RvcmUwMjAtMjAnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAgICBcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2ZvciBraWRzJ10sIG5hbWU6ICdNYWduZXRpYyBUaWxlcycsIHByaWNlOiAnMjQnLCBpbWFnZTogJy9wcm9kdWN0cy9raWRzMS5qcGcnLCBkZXNjcmlwdGlvbjogJ0xldCB0aGUga2lkIGltYWdpbmF0aW9uIHJ1biB3aWxkIHdpdGggdGhpcyBjcmVhdGl2ZSB0b3kuIEJ1aWxkIGhvdXNlcywgY2FycywgYW5kIGFueXRoaW5nIHRoZXkgY2FuIGltYWdpbmUuIExvdHMgb2YgaG91cnMgb2YgZnVuJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM3RnWldPYicsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgY2F0ZWdvcmllczogWydmb3Iga2lkcyddLCBuYW1lOiAnUkMgQ2FycycsIHByaWNlOiAnMTAwJywgaW1hZ2U6ICcvcHJvZHVjdHMvcmNjYXIuanBnJywgZGVzY3JpcHRpb246ICdIYXZlIGZ1biBvdXRzaWRlIHdpdGggdGhpcyBhd2Vzb21lIFJDIGNhci4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zM2NCWDg2JywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gIHtcclxuICBjYXRlZ29yaWVzOiBbJ2ZvciBraWRzJ10sIG5hbWU6ICdtb2RlbCBLaXRzJywgcHJpY2U6ICc2OCcsIGltYWdlOiAnL3Byb2R1Y3RzL21vZGVsa2l0LmpwZycsIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBmdW4sIGFuZCBtb3N0IG9mIGFsbCB0aGUgcGFyZW50cyBjYW4gam9pbiBpbiBvbiB0aGUgZnVuLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNhWkZ1dVEnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydmb3Iga2lkcyddLCBuYW1lOiAnTWFnaWMgS2l0cycsIHByaWNlOiAnNjgnLCBpbWFnZTogJy9wcm9kdWN0cy9tYWdpYy5qcGcnLCBkZXNjcmlwdGlvbjogJ0xlYXJuIG1hZ2ljLCBoYXZlIHlvdXIga2lkcyBlbnRlcnRhaW4gb3RoZXJzLiBFaXRoZXIgd2F5LCB0aGlzIGlzIGEgZnVuIGhvYmJ5IHRvIGVuZ2FnZSBpbicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzMzYVNyTlEnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydvdXRkb29yJ10sIG5hbWU6ICdBcmNoZXJ5JywgcHJpY2U6ICc4MCcsIGltYWdlOiAnL3Byb2R1Y3RzL2FyY2hlcnkuanBnJywgZGVzY3JpcHRpb246ICdIb25lIHlvdXIgc2tpbGxzIGluIGFyY2hlcnkuIFlvdSBjYW4gcHJhY3RpY2UgdGhpcyBpbiBhIHNhZmUgc3BhY2UsIG9yIGV2ZW4gZW50ZXIgaW50byBjb21wZXRpdGl2ZSBsb2NhbCBnYW1lcycsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNlZ1ExRTQnLCBjdXJyZW50SW52ZW50b3J5OiA0IH0sXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydvdXRkb29yJywgJ2ZvciBjb3VwbGVzJ10sIG5hbWU6ICdvdXRkb29yIHBhaW50aW5nJywgcHJpY2U6ICcyNicsIGltYWdlOiAnL3Byb2R1Y3RzL3BhaW50aW5nLmpwZycsIGRlc2NyaXB0aW9uOiAnRW5qb3kgdGhlIGdyZWF0IG91dGRvb3JzLCBhbmQgcGFpbnQgaXQgYXQgdGhlIHNhbWUgdGltZS4gQ2FwdHVyZSB0aGUgc3RyZWFtcywgb2NlYW5zLCBhbmQgbGFuZGFzY2FwZS4gVGhpcyBpcyBhIGdyZWF0IGhvYmJ5IS4nICwgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM25MOTdGZicsIGN1cnJlbnRJbnZlbnRvcnk6IDEwfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2ZvciBjb3VwbGVzJywgJ291dGRvb3InXSwgbmFtZTogJ1BhaW50IEJhbGwnLCBwcmljZTogJzIwMCcsIGltYWdlOiAnL3Byb2R1Y3RzL3BhaW50YmFsbC5qcGcnLCBkZXNjcmlwdGlvbjogJyBEb2RnZSwgc2hvb3QhLCByb2xsLCBwbGFuLCBhbmQgd2luLiBUaGlzIGlzIGEgZ3JlYXQgd2F5IHRvIGVuam95IGEgZ29vZCB0aW1lIHdpdGggZnJpZW5kcy4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zaDBDTUo1JywgY3VycmVudEludmVudG9yeTogMjQgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ291dGRvb3InLCAnZm9yIGNvdXBsZXMnXSwgbmFtZTogJ0RvbmUgZmx5aW5nJywgcHJpY2U6ICc0NScsIGltYWdlOiAnL3Byb2R1Y3RzL2Ryb25lLmpwZycsIGRlc2NyaXB0aW9uOiAnIFRoZXJlIGlzIGEgaHVnZSBjb21tdW5pdHkgb2YgZHJvbmUgZW50aHVzaWFzdHMuIFRoaXMgaG9iYnkgY2FuIGVhc2lseSBtb3JwaCBpbnRvIGFlcmlhbCBwaG90b2dyYXBoeSwgb3IgZXZlbiBuYXR1cmUgdmlkZW9ncmFwaHkuIEdyZWF0IHdheSB0byBzcGVuZCB0aW1lIG91dGRvb3InLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zZVJMTTBEJyAsIGN1cnJlbnRJbnZlbnRvcnk6IDJ9LFxyXG4gICAge1xyXG4gICAgICBjYXRlZ29yaWVzOiBbJ2ZvciBjb3VwbGVzJ10sIG5hbWU6ICdUZW5uaXMnLCBwcmljZTogJzg5JywgaW1hZ2U6ICcvcHJvZHVjdHMvdGVubmlzLmpwZycsIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGdyZWF0IGZvciBjb3VwbGVzIGFuZCBtb3N0bHkgaXRzIGFsc28gYSB3YXkgdG8gZXhjZXJjaXNlJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM3Z6d0J6SycsIGN1cnJlbnRJbnZlbnRvcnk6IDJ9LFxyXG4gIFxyXG4gICBdXHJcblxyXG5pbnZlbnRvcnkubWFwKGkgPT4ge1xyXG4gIGkuaWQgPSB1dWlkKClcclxuICByZXR1cm4gaVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW52ZW50b3J5Il0sInNvdXJjZVJvb3QiOiIifQ==
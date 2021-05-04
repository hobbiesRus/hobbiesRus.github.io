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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbImludmVudG9yeSIsImNhdGVnb3JpZXMiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYnJhbmQiLCJjdXJyZW50SW52ZW50b3J5IiwibWFwIiwiaSIsImlkIiwidXVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLFNBQVMsR0FBRyxDQUNkO0FBQ0FDLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEWjtBQUMwQkMsTUFBSSxFQUFFLFVBRGhDO0FBQzRDQyxPQUFLLEVBQUUsTUFEbkQ7QUFDMkRDLE9BQUssRUFBRSx1QkFEbEU7QUFDMkZDLGFBQVcsRUFBRSw4TkFEeEc7QUFDd1VDLE9BQUssRUFBRSx5QkFEL1U7QUFDMFdDLGtCQUFnQixFQUFFO0FBRDVYLENBRGMsRUFHZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxnQkFEbEM7QUFDb0RDLE9BQUssRUFBRSxJQUQzRDtBQUNpRUMsT0FBSyxFQUFFLHVCQUR4RTtBQUNpR0MsYUFBVyxFQUFFLG1KQUQ5RztBQUNtUUMsT0FBSyxFQUFFLHlCQUQxUTtBQUNxU0Msa0JBQWdCLEVBQUU7QUFEdlQsQ0FIYyxFQU1kO0FBQ0VOLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEZDtBQUM0QkMsTUFBSSxFQUFFLGFBRGxDO0FBQ2lEQyxPQUFLLEVBQUUsS0FEeEQ7QUFDK0RDLE9BQUssRUFBRSwyQkFEdEU7QUFDbUdDLGFBQVcsRUFBRSxvRkFEaEg7QUFDc01DLE9BQUssRUFBRSx5QkFEN007QUFDd09DLGtCQUFnQixFQUFFO0FBRDFQLENBTmMsRUFTZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxpQkFEbEM7QUFDcURDLE9BQUssRUFBRSxLQUQ1RDtBQUNtRUMsT0FBSyxFQUFFLHdCQUQx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UyxDQUFDUSxHQUFWLENBQWMsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pCQSxHQUFDLENBQUNDLEVBQUYsR0FBT0MsK0NBQUksRUFBWDtBQUNBLFNBQU9GLENBQVA7QUFDRCxDQUhEO0FBS2VULHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTA0ZmY0NDBhM2Y5YjYyNDdiODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xyXG5cclxubGV0IGludmVudG9yeSA9IFtcclxuICB7XHJcbiAgY2F0ZWdvcmllczogWydjcmVhdGl2ZSddLCBuYW1lOiAnRHJ1bW1pbmcnLCBwcmljZTogJzEwMDAnLCBpbWFnZTogJy9wcm9kdWN0cy9kcnVtc2V0LmpwZycsIGRlc2NyaXB0aW9uOiAnIFlvdSBjYW4gZWFzaWx5IHJlY29yZCB5b3VyIG93biB0cmFja3MsIGFuZCBqYW0gb3V0IHdpdGggdGhpcyBhd2Vzb21lIGRydW0gc2V0LiA0MCBOZXcgUHJlc2V0IEtpdHMsIDIwMCBVc2VyIEtpdHMgYW5kIG92ZXIgNDAwIE5ldyBWb2ljZXMuRmFpdGhmdWwgcmVwcm9kdWN0aW9uIG9mIHJlYWwgc291bmQgYW5kIGFtYmllbmNlIHJlY29yZGVkIGluIGEgd2VsbC1rbm93biBzdHVkaW8gLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzN2eWx4RDQnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydjcmVhdGl2ZSddLCBuYW1lOiAnSmV3ZXJseSBtYWtpbmcnLCBwcmljZTogJzI1JywgaW1hZ2U6ICcvcHJvZHVjdHMvamV3ZXJseS5qcGcnLCBkZXNjcmlwdGlvbjogJ1NwZW5kIHlvdXIgdGltZSBjcmVhdGluZyB1bmlxdWUgamV3ZXJseS4gVGhpcyB0eXBlIG9mIGhvYmJ5IGNhbiBldmVuIGJlIG1vbml0aXplZCwgb3IgZXZlbiBhZGQgb24gdG8geW91ciB3YXJkcm9iZS4gTGV0IHlvdXIgaW1hZ2luYXRpb24gZ28gd2lsZC4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zM2RoOEpLJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gICAgXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydjcmVhdGl2ZSddLCBuYW1lOiAnUGhvdG9ncmFwaHknLCBwcmljZTogJzQ5OScsIGltYWdlOiAnL3Byb2R1Y3RzL3Bob3RvZ3JhcGh5LmpwZycsIGRlc2NyaXB0aW9uOiAnQ2FwdHVyZSB0aGUgb3V0ZG9vcnMsIGNyZWF0ZSBjb29sIGltYWdlLiBQb3NzaWJpbGl0aWVzIGFyZSBlbmRsZXNzIHdpdGggdGhpcyBob2JieScsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNuUzRXcnEnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAgICBcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdDb2NrdGFpbCBtaXhpbmcnLCBwcmljZTogJzQ5OScsIGltYWdlOiAnL3Byb2R1Y3RzL2NvY2t0YWlsLmpwZycsIGRlc2NyaXB0aW9uOiAnTW9zdCBwZW9wbGUgbG92ZSBhIGdvb2QgY29ja3RhaWwuIE1peCBhbmQgbWF0Y2ggYW5kIGV4cGxvcmUgZGlmZmVyZW50IHRhc3Rlcy4gRW50ZXJ0YWluIGd1ZXN0cyB3aXRoIHlvdXIgbmV3IGludmVudGlvbnMgJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM2FaNTgyVycsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICAgIFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnZm9yIGtpZHMnXSwgbmFtZTogJ01hZ25ldGljIFRpbGVzJywgcHJpY2U6ICcyNCcsIGltYWdlOiAnL3Byb2R1Y3RzL2tpZHMxLmpwZycsIGRlc2NyaXB0aW9uOiAnTGV0IHRoZSBraWQgaW1hZ2luYXRpb24gcnVuIHdpbGQgd2l0aCB0aGlzIGNyZWF0aXZlIHRveS4gQnVpbGQgaG91c2VzLCBjYXJzLCBhbmQgYW55dGhpbmcgdGhleSBjYW4gaW1hZ2luZS4gTG90cyBvZiBob3VycyBvZiBmdW4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zdGdaV09iJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gIHtcclxuICBjYXRlZ29yaWVzOiBbJ2ZvciBraWRzJ10sIG5hbWU6ICdSQyBDYXJzJywgcHJpY2U6ICcxMDAnLCBpbWFnZTogJy9wcm9kdWN0cy9yY2Nhci5qcGcnLCBkZXNjcmlwdGlvbjogJ0hhdmUgZnVuIG91dHNpZGUgd2l0aCB0aGlzIGF3ZXNvbWUgUkMgY2FyLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzMzY0JYODYnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAge1xyXG4gIGNhdGVnb3JpZXM6IFsnZm9yIGtpZHMnXSwgbmFtZTogJ21vZGVsIEtpdHMnLCBwcmljZTogJzY4JywgaW1hZ2U6ICcvcHJvZHVjdHMvbW9kZWxraXQuanBnJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGZ1biwgYW5kIG1vc3Qgb2YgYWxsIHRoZSBwYXJlbnRzIGNhbiBqb2luIGluIG9uIHRoZSBmdW4uJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM2FaRnV1UScsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2ZvciBraWRzJ10sIG5hbWU6ICdNYWdpYyBLaXRzJywgcHJpY2U6ICc2OCcsIGltYWdlOiAnL3Byb2R1Y3RzL21hZ2ljLmpwZycsIGRlc2NyaXB0aW9uOiAnTGVhcm4gbWFnaWMsIGhhdmUgeW91ciBraWRzIGVudGVydGFpbiBvdGhlcnMuIEVpdGhlciB3YXksIHRoaXMgaXMgYSBmdW4gaG9iYnkgdG8gZW5nYWdlIGluJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vMzNhU3JOUScsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ291dGRvb3InXSwgbmFtZTogJ0FyY2hlcnknLCBwcmljZTogJzgwJywgaW1hZ2U6ICcvcHJvZHVjdHMvYXJjaGVyeS5qcGcnLCBkZXNjcmlwdGlvbjogJ0hvbmUgeW91ciBza2lsbHMgaW4gYXJjaGVyeS4gWW91IGNhbiBwcmFjdGljZSB0aGlzIGluIGEgc2FmZSBzcGFjZSwgb3IgZXZlbiBlbnRlciBpbnRvIGNvbXBldGl0aXZlIGxvY2FsIGdhbWVzJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM2VnUTFFNCcsIGN1cnJlbnRJbnZlbnRvcnk6IDQgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ291dGRvb3InLCAnZm9yIGNvdXBsZXMnXSwgbmFtZTogJ291dGRvb3IgcGFpbnRpbmcnLCBwcmljZTogJzI2JywgaW1hZ2U6ICcvcHJvZHVjdHMvcGFpbnRpbmcuanBnJywgZGVzY3JpcHRpb246ICdFbmpveSB0aGUgZ3JlYXQgb3V0ZG9vcnMsIGFuZCBwYWludCBpdCBhdCB0aGUgc2FtZSB0aW1lLiBDYXB0dXJlIHRoZSBzdHJlYW1zLCBvY2VhbnMsIGFuZCBsYW5kYXNjYXBlLiBUaGlzIGlzIGEgZ3JlYXQgaG9iYnkhLicgLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zbkw5N0ZmJywgY3VycmVudEludmVudG9yeTogMTB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnZm9yIGNvdXBsZXMnLCAnb3V0ZG9vciddLCBuYW1lOiAnUGFpbnQgQmFsbCcsIHByaWNlOiAnMjAwJywgaW1hZ2U6ICcvcHJvZHVjdHMvcGFpbnRiYWxsLmpwZycsIGRlc2NyaXB0aW9uOiAnIERvZGdlLCBzaG9vdCEsIHJvbGwsIHBsYW4sIGFuZCB3aW4uIFRoaXMgaXMgYSBncmVhdCB3YXkgdG8gZW5qb3kgYSBnb29kIHRpbWUgd2l0aCBmcmllbmRzLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNoMENNSjUnLCBjdXJyZW50SW52ZW50b3J5OiAyNCB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnb3V0ZG9vcicsICdmb3IgY291cGxlcyddLCBuYW1lOiAnRG9uZSBmbHlpbmcnLCBwcmljZTogJzQ1JywgaW1hZ2U6ICcvcHJvZHVjdHMvZHJvbmUuanBnJywgZGVzY3JpcHRpb246ICcgVGhlcmUgaXMgYSBodWdlIGNvbW11bml0eSBvZiBkcm9uZSBlbnRodXNpYXN0cy4gVGhpcyBob2JieSBjYW4gZWFzaWx5IG1vcnBoIGludG8gYWVyaWFsIHBob3RvZ3JhcGh5LCBvciBldmVuIG5hdHVyZSB2aWRlb2dyYXBoeS4gR3JlYXQgd2F5IHRvIHNwZW5kIHRpbWUgb3V0ZG9vcicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzNlUkxNMEQnICwgY3VycmVudEludmVudG9yeTogMn0sXHJcbiAgICB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFsnZm9yIGNvdXBsZXMnXSwgbmFtZTogJ1Rlbm5pcycsIHByaWNlOiAnODknLCBpbWFnZTogJy9wcm9kdWN0cy90ZW5uaXMuanBnJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZ3JlYXQgZm9yIGNvdXBsZXMgYW5kIG1vc3RseSBpdHMgYWxzbyBhIHdheSB0byBleGNlcmNpc2UnLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zdnp3QnpLJywgY3VycmVudEludmVudG9yeTogMn0sXHJcbiAgXHJcbiAgIF1cclxuXHJcbmludmVudG9yeS5tYXAoaSA9PiB7XHJcbiAgaS5pZCA9IHV1aWQoKVxyXG4gIHJldHVybiBpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnZlbnRvcnkiXSwic291cmNlUm9vdCI6IiJ9
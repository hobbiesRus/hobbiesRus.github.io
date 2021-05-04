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
  brand: 'https://www.amazon.com/dp/B07WRTH2QP?pd_rd_i=B07WRTH2QP&pd_rd_w=HcR8O&pf_rd_p=ee186ce0-6bf7-4893-85b9-f3368b019e0f&pd_rd_wg=zPNiT&pf_rd_r=8VBZ24X2N5VCGYATXVE9&pd_rd_r=550c31aa-919e-4834-9d1d-93c4423c1978',
  currentInventory: 4
}, {
  categories: ['outdoor', 'for couples'],
  name: 'outdoor painting',
  price: '100',
  image: '/products/painting.jpg',
  description: 'Enjoy the great outdoors, and paint it at the same time. Capture the streams, oceans, and landascape. This is a great hobby!.',
  brand: 'http://www.google.com',
  currentInventory: 10
}, {
  categories: ['for couples', 'outdoor'],
  name: 'Paint Ball',
  price: '200',
  image: '/products/paintball.jpg',
  description: ' Dodge, shoot!, roll, plan, and win. This is a great way to enjoy a good time with friends.',
  brand: 'https://www.amazon.com/Action-Village-Tippmann-Paintball-Tactical/dp/B019EFCR5W/ref=sr_1_5?dchild=1&keywords=paintball&qid=1619895269&sr=8-5',
  currentInventory: 24
}, {
  categories: ['outdoor', 'for couples'],
  name: 'Done flying',
  price: '45',
  image: '/products/drone.jpg',
  description: ' There is a huge community of drone enthusiasts. This hobby can easily morph into aerial photography, or even nature videography. Great way to spend time outdoor',
  brand: 'https://www.amazon.com/Cheerwing-X5SW-V3-Explorers2-Headless-Quadcopter/dp/B011JV9HA2/ref=sr_1_1_sspa?dchild=1&keywords=cheap+drones&qid=1619894708&s=toys-and-games&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNlc4UlFaUVZDU0VEJmVuY3J5cHRlZElkPUEwNzM0ODk4NDRMWkVHRExXVFBWJmVuY3J5cHRlZEFkSWQ9QTA3Mjk0MDAxUUpEQzZWOTA4STNGJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
  currentInventory: 2
}, {
  categories: ['for couples'],
  name: 'Tennis',
  price: '119',
  image: '/products/tennis.jpg',
  description: 'This is a great for couples and mostly its also a way to excercise',
  brand: 'https://www.amazon.com/Wilson-Pre-Strung-Racquet-Bundled-Advantage/dp/B07YNZPVQ7/ref=sr_1_2?dchild=1&keywords=tennis+kit&qid=1619997451&sr=8-2',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbImludmVudG9yeSIsImNhdGVnb3JpZXMiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYnJhbmQiLCJjdXJyZW50SW52ZW50b3J5IiwibWFwIiwiaSIsImlkIiwidXVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLFNBQVMsR0FBRyxDQUNkO0FBQ0FDLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEWjtBQUMwQkMsTUFBSSxFQUFFLFVBRGhDO0FBQzRDQyxPQUFLLEVBQUUsTUFEbkQ7QUFDMkRDLE9BQUssRUFBRSx1QkFEbEU7QUFDMkZDLGFBQVcsRUFBRSw4TkFEeEc7QUFDd1VDLE9BQUssRUFBRSx5QkFEL1U7QUFDMFdDLGtCQUFnQixFQUFFO0FBRDVYLENBRGMsRUFHZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxnQkFEbEM7QUFDb0RDLE9BQUssRUFBRSxJQUQzRDtBQUNpRUMsT0FBSyxFQUFFLHVCQUR4RTtBQUNpR0MsYUFBVyxFQUFFLG1KQUQ5RztBQUNtUUMsT0FBSyxFQUFFLHlCQUQxUTtBQUNxU0Msa0JBQWdCLEVBQUU7QUFEdlQsQ0FIYyxFQU1kO0FBQ0VOLFlBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEZDtBQUM0QkMsTUFBSSxFQUFFLGFBRGxDO0FBQ2lEQyxPQUFLLEVBQUUsS0FEeEQ7QUFDK0RDLE9BQUssRUFBRSwyQkFEdEU7QUFDbUdDLGFBQVcsRUFBRSxvRkFEaEg7QUFDc01DLE9BQUssRUFBRSx5QkFEN007QUFDd09DLGtCQUFnQixFQUFFO0FBRDFQLENBTmMsRUFTZDtBQUNFTixZQUFVLEVBQUUsQ0FBQyxVQUFELENBRGQ7QUFDNEJDLE1BQUksRUFBRSxpQkFEbEM7QUFDcURDLE9BQUssRUFBRSxLQUQ1RDtBQUNtRUMsT0FBSyxFQUFFLHdCQUQx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QUFTLENBQUNRLEdBQVYsQ0FBYyxVQUFBQyxDQUFDLEVBQUk7QUFDakJBLEdBQUMsQ0FBQ0MsRUFBRixHQUFPQywrQ0FBSSxFQUFYO0FBQ0EsU0FBT0YsQ0FBUDtBQUNELENBSEQ7QUFLZVQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NGU5MTkyOTU5NjMyN2I5NWY3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXHJcblxyXG5sZXQgaW52ZW50b3J5ID0gW1xyXG4gIHtcclxuICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdEcnVtbWluZycsIHByaWNlOiAnMTAwMCcsIGltYWdlOiAnL3Byb2R1Y3RzL2RydW1zZXQuanBnJywgZGVzY3JpcHRpb246ICcgWW91IGNhbiBlYXNpbHkgcmVjb3JkIHlvdXIgb3duIHRyYWNrcywgYW5kIGphbSBvdXQgd2l0aCB0aGlzIGF3ZXNvbWUgZHJ1bSBzZXQuIDQwIE5ldyBQcmVzZXQgS2l0cywgMjAwIFVzZXIgS2l0cyBhbmQgb3ZlciA0MDAgTmV3IFZvaWNlcy5GYWl0aGZ1bCByZXByb2R1Y3Rpb24gb2YgcmVhbCBzb3VuZCBhbmQgYW1iaWVuY2UgcmVjb3JkZWQgaW4gYSB3ZWxsLWtub3duIHN0dWRpbyAuJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM3Z5bHhENCcsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdKZXdlcmx5IG1ha2luZycsIHByaWNlOiAnMjUnLCBpbWFnZTogJy9wcm9kdWN0cy9qZXdlcmx5LmpwZycsIGRlc2NyaXB0aW9uOiAnU3BlbmQgeW91ciB0aW1lIGNyZWF0aW5nIHVuaXF1ZSBqZXdlcmx5LiBUaGlzIHR5cGUgb2YgaG9iYnkgY2FuIGV2ZW4gYmUgbW9uaXRpemVkLCBvciBldmVuIGFkZCBvbiB0byB5b3VyIHdhcmRyb2JlLiBMZXQgeW91ciBpbWFnaW5hdGlvbiBnbyB3aWxkLicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzMzZGg4SksnLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAgICBcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2NyZWF0aXZlJ10sIG5hbWU6ICdQaG90b2dyYXBoeScsIHByaWNlOiAnNDk5JywgaW1hZ2U6ICcvcHJvZHVjdHMvcGhvdG9ncmFwaHkuanBnJywgZGVzY3JpcHRpb246ICdDYXB0dXJlIHRoZSBvdXRkb29ycywgY3JlYXRlIGNvb2wgaW1hZ2UuIFBvc3NpYmlsaXRpZXMgYXJlIGVuZGxlc3Mgd2l0aCB0aGlzIGhvYmJ5JywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vM25TNFdycScsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICAgIFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnY3JlYXRpdmUnXSwgbmFtZTogJ0NvY2t0YWlsIG1peGluZycsIHByaWNlOiAnNDk5JywgaW1hZ2U6ICcvcHJvZHVjdHMvY29ja3RhaWwuanBnJywgZGVzY3JpcHRpb246ICdNb3N0IHBlb3BsZSBsb3ZlIGEgZ29vZCBjb2NrdGFpbC4gTWl4IGFuZCBtYXRjaCBhbmQgZXhwbG9yZSBkaWZmZXJlbnQgdGFzdGVzLiBFbnRlcnRhaW4gZ3Vlc3RzIHdpdGggeW91ciBuZXcgaW52ZW50aW9ucyAnLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zYVo1ODJXJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gICAgXHJcbiAge1xyXG4gICAgY2F0ZWdvcmllczogWydmb3Iga2lkcyddLCBuYW1lOiAnTWFnbmV0aWMgVGlsZXMnLCBwcmljZTogJzI0JywgaW1hZ2U6ICcvcHJvZHVjdHMva2lkczEuanBnJywgZGVzY3JpcHRpb246ICdMZXQgdGhlIGtpZCBpbWFnaW5hdGlvbiBydW4gd2lsZCB3aXRoIHRoaXMgY3JlYXRpdmUgdG95LiBCdWlsZCBob3VzZXMsIGNhcnMsIGFuZCBhbnl0aGluZyB0aGV5IGNhbiBpbWFnaW5lLiBMb3RzIG9mIGhvdXJzIG9mIGZ1bicsIGJyYW5kOiAnaHR0cHM6Ly9hbXpuLnRvLzN0Z1pXT2InLCBjdXJyZW50SW52ZW50b3J5OiAxIH0sXHJcbiAge1xyXG4gIGNhdGVnb3JpZXM6IFsnZm9yIGtpZHMnXSwgbmFtZTogJ1JDIENhcnMnLCBwcmljZTogJzEwMCcsIGltYWdlOiAnL3Byb2R1Y3RzL3JjY2FyLmpwZycsIGRlc2NyaXB0aW9uOiAnSGF2ZSBmdW4gb3V0c2lkZSB3aXRoIHRoaXMgYXdlc29tZSBSQyBjYXIuJywgYnJhbmQ6ICdodHRwczovL2Ftem4udG8vMzNjQlg4NicsIGN1cnJlbnRJbnZlbnRvcnk6IDEgfSxcclxuICB7XHJcbiAgY2F0ZWdvcmllczogWydmb3Iga2lkcyddLCBuYW1lOiAnbW9kZWwgS2l0cycsIHByaWNlOiAnNjgnLCBpbWFnZTogJy9wcm9kdWN0cy9tb2RlbGtpdC5qcGcnLCBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgZnVuLCBhbmQgbW9zdCBvZiBhbGwgdGhlIHBhcmVudHMgY2FuIGpvaW4gaW4gb24gdGhlIGZ1bi4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zYVpGdXVRJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnZm9yIGtpZHMnXSwgbmFtZTogJ01hZ2ljIEtpdHMnLCBwcmljZTogJzY4JywgaW1hZ2U6ICcvcHJvZHVjdHMvbWFnaWMuanBnJywgZGVzY3JpcHRpb246ICdMZWFybiBtYWdpYywgaGF2ZSB5b3VyIGtpZHMgZW50ZXJ0YWluIG90aGVycy4gRWl0aGVyIHdheSwgdGhpcyBpcyBhIGZ1biBob2JieSB0byBlbmdhZ2UgaW4nLCBicmFuZDogJ2h0dHBzOi8vYW16bi50by8zM2FTck5RJywgY3VycmVudEludmVudG9yeTogMSB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnb3V0ZG9vciddLCBuYW1lOiAnQXJjaGVyeScsIHByaWNlOiAnODAnLCBpbWFnZTogJy9wcm9kdWN0cy9hcmNoZXJ5LmpwZycsIGRlc2NyaXB0aW9uOiAnSG9uZSB5b3VyIHNraWxscyBpbiBhcmNoZXJ5LiBZb3UgY2FuIHByYWN0aWNlIHRoaXMgaW4gYSBzYWZlIHNwYWNlLCBvciBldmVuIGVudGVyIGludG8gY29tcGV0aXRpdmUgbG9jYWwgZ2FtZXMnLCBicmFuZDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZHAvQjA3V1JUSDJRUD9wZF9yZF9pPUIwN1dSVEgyUVAmcGRfcmRfdz1IY1I4TyZwZl9yZF9wPWVlMTg2Y2UwLTZiZjctNDg5My04NWI5LWYzMzY4YjAxOWUwZiZwZF9yZF93Zz16UE5pVCZwZl9yZF9yPThWQloyNFgyTjVWQ0dZQVRYVkU5JnBkX3JkX3I9NTUwYzMxYWEtOTE5ZS00ODM0LTlkMWQtOTNjNDQyM2MxOTc4JywgY3VycmVudEludmVudG9yeTogNCB9LFxyXG4gIHtcclxuICAgIGNhdGVnb3JpZXM6IFsnb3V0ZG9vcicsICdmb3IgY291cGxlcyddLCBuYW1lOiAnb3V0ZG9vciBwYWludGluZycsIHByaWNlOiAnMTAwJywgaW1hZ2U6ICcvcHJvZHVjdHMvcGFpbnRpbmcuanBnJywgZGVzY3JpcHRpb246ICdFbmpveSB0aGUgZ3JlYXQgb3V0ZG9vcnMsIGFuZCBwYWludCBpdCBhdCB0aGUgc2FtZSB0aW1lLiBDYXB0dXJlIHRoZSBzdHJlYW1zLCBvY2VhbnMsIGFuZCBsYW5kYXNjYXBlLiBUaGlzIGlzIGEgZ3JlYXQgaG9iYnkhLicgLCBicmFuZDogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbScsIGN1cnJlbnRJbnZlbnRvcnk6IDEwfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ2ZvciBjb3VwbGVzJywgJ291dGRvb3InXSwgbmFtZTogJ1BhaW50IEJhbGwnLCBwcmljZTogJzIwMCcsIGltYWdlOiAnL3Byb2R1Y3RzL3BhaW50YmFsbC5qcGcnLCBkZXNjcmlwdGlvbjogJyBEb2RnZSwgc2hvb3QhLCByb2xsLCBwbGFuLCBhbmQgd2luLiBUaGlzIGlzIGEgZ3JlYXQgd2F5IHRvIGVuam95IGEgZ29vZCB0aW1lIHdpdGggZnJpZW5kcy4nLCBicmFuZDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vQWN0aW9uLVZpbGxhZ2UtVGlwcG1hbm4tUGFpbnRiYWxsLVRhY3RpY2FsL2RwL0IwMTlFRkNSNVcvcmVmPXNyXzFfNT9kY2hpbGQ9MSZrZXl3b3Jkcz1wYWludGJhbGwmcWlkPTE2MTk4OTUyNjkmc3I9OC01JywgY3VycmVudEludmVudG9yeTogMjQgfSxcclxuICB7XHJcbiAgICBjYXRlZ29yaWVzOiBbJ291dGRvb3InLCAnZm9yIGNvdXBsZXMnXSwgbmFtZTogJ0RvbmUgZmx5aW5nJywgcHJpY2U6ICc0NScsIGltYWdlOiAnL3Byb2R1Y3RzL2Ryb25lLmpwZycsIGRlc2NyaXB0aW9uOiAnIFRoZXJlIGlzIGEgaHVnZSBjb21tdW5pdHkgb2YgZHJvbmUgZW50aHVzaWFzdHMuIFRoaXMgaG9iYnkgY2FuIGVhc2lseSBtb3JwaCBpbnRvIGFlcmlhbCBwaG90b2dyYXBoeSwgb3IgZXZlbiBuYXR1cmUgdmlkZW9ncmFwaHkuIEdyZWF0IHdheSB0byBzcGVuZCB0aW1lIG91dGRvb3InLCBicmFuZDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vQ2hlZXJ3aW5nLVg1U1ctVjMtRXhwbG9yZXJzMi1IZWFkbGVzcy1RdWFkY29wdGVyL2RwL0IwMTFKVjlIQTIvcmVmPXNyXzFfMV9zc3BhP2RjaGlsZD0xJmtleXdvcmRzPWNoZWFwK2Ryb25lcyZxaWQ9MTYxOTg5NDcwOCZzPXRveXMtYW5kLWdhbWVzJnNyPTEtMS1zcG9ucyZwc2M9MSZzcExhPVpXNWpjbmx3ZEdWa1VYVmhiR2xtYVdWeVBVRXhObGM0VWxGYVVWWkRVMFZFSm1WdVkzSjVjSFJsWkVsa1BVRXdOek0wT0RrNE5EUk1Xa1ZIUkV4WFZGQldKbVZ1WTNKNWNIUmxaRUZrU1dROVFUQTNNamswTURBeFVVcEVRelpXT1RBNFNUTkdKbmRwWkdkbGRFNWhiV1U5YzNCZllYUm1KbUZqZEdsdmJqMWpiR2xqYTFKbFpHbHlaV04wSm1SdlRtOTBURzluUTJ4cFkyczlkSEoxWlE9PScgLCBjdXJyZW50SW52ZW50b3J5OiAyfSxcclxuICAgIHtcclxuICAgICAgY2F0ZWdvcmllczogWydmb3IgY291cGxlcyddLCBuYW1lOiAnVGVubmlzJywgcHJpY2U6ICcxMTknLCBpbWFnZTogJy9wcm9kdWN0cy90ZW5uaXMuanBnJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZ3JlYXQgZm9yIGNvdXBsZXMgYW5kIG1vc3RseSBpdHMgYWxzbyBhIHdheSB0byBleGNlcmNpc2UnLCBicmFuZDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vV2lsc29uLVByZS1TdHJ1bmctUmFjcXVldC1CdW5kbGVkLUFkdmFudGFnZS9kcC9CMDdZTlpQVlE3L3JlZj1zcl8xXzI/ZGNoaWxkPTEma2V5d29yZHM9dGVubmlzK2tpdCZxaWQ9MTYxOTk5NzQ1MSZzcj04LTInLCBjdXJyZW50SW52ZW50b3J5OiAyfSxcclxuICBcclxuICAgXVxyXG5cclxuaW52ZW50b3J5Lm1hcChpID0+IHtcclxuICBpLmlkID0gdXVpZCgpXHJcbiAgcmV0dXJuIGlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludmVudG9yeSJdLCJzb3VyY2VSb290IjoiIn0=
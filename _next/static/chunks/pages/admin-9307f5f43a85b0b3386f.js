_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"7Cbv":function(e,t,n){"use strict";var r,a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&c.test(e)},s=[],u=0;u<256;++u)s.push((u+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};t.a=function(e,t,n){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return l(r)}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,s,"next",e)}function s(e){r(c,a,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},Ho3L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n("IT5z")}])},"IF/j":function(e,t,n){"use strict";function r(e){var t="\xe0\xe1\xe4\xe2\xe3\xe5\u0103\xe6\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\u011b\u0117\xeb\xea\u0119\u011f\u01f5\u1e27\xec\xed\xef\xee\u012f\u0142\u1e3f\u01f9\u0144\u0148\xf1\xf2\xf3\xf6\xf4\u0153\xf8\u1e55\u0155\u0159\xdf\u015f\u015b\u0161\u0219\u0165\u021b\xf9\xfa\xfc\xfb\u01d8\u016f\u0171\u016b\u0173\u1e83\u1e8d\xff\xfd\u017a\u017e\u017c\xb7/_,:;",n=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(n,(function(e){return"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function a(e){for(var t=e.split("-"),n=0;n<t.length;n++){var r=t[n];t[n]=r.charAt(0).toUpperCase()+r.slice(1)}return t.join(" ")}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e.length<=t?e:e.substring(0,t)+"..."}n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},IT5z:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c=n("1OyB"),i=n("vuIU"),s=n("JX7q"),u=n("Ji7U"),l=n("md7G"),f=n("foSv"),d=n("rePB"),p=n("nKUr"),b=n("q1tI"),m=n.n(b);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(e){Object(u.a)(n,e);var t=h(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(d.a)(Object(s.a)(e),"state",{username:"",email:"",password:""}),Object(d.a)(Object(s.a)(e),"onChange",(function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))})),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"my-4",children:"Sign Up"}),Object(p.jsx)("div",{className:"flex flex-1 justify-center",children:Object(p.jsx)("div",{className:"w-full max-w-144",children:Object(p.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{onChange:this.onChange,name:"username",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username"})]}),Object(p.jsxs)("div",{className:"mb-6",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{onChange:this.onChange,name:"email",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"email",placeholder:"Email address"})]}),Object(p.jsxs)("div",{className:"mb-6",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{onChange:this.onChange,name:"password",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"})]}),Object(p.jsxs)("div",{className:"flex items-center justify-between",children:[Object(p.jsx)("button",{onClick:function(){return e.props.signUp(e.state)},className:"bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"Sign Up"}),Object(p.jsx)("a",{className:"inline-block align-baseline font-bold text-sm",href:"#",onClick:function(){return e.props.toggleFormState("signIn")},children:"Already signed up?"})]})]})})})]})}}]),n}(m.a.Component);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e){Object(u.a)(n,e);var t=g(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(d.a)(Object(s.a)(e),"state",{username:"",authcode:""}),Object(d.a)(Object(s.a)(e),"onChange",(function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))})),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"py-4",children:"Sign Up"}),Object(p.jsx)("div",{className:"flex flex-1 justify-center",children:Object(p.jsx)("div",{className:"w-full max-w-144",children:Object(p.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{onChange:this.onChange,name:"username",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username"})]}),Object(p.jsxs)("div",{className:"mb-6",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"authcode",children:"Authentication Code"}),Object(p.jsx)("input",{onChange:this.onChange,name:"authcode",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"authcode",type:"authcode"})]}),Object(p.jsxs)("div",{className:"flex items-center justify-between",children:[Object(p.jsx)("button",{onClick:function(){return e.props.confirmSignUp(e.state)},className:"bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"Confirm Sign Up"}),Object(p.jsx)("a",{className:"inline-block align-baseline font-bold text-sm",href:"#",children:"Forgot Password?"})]})]})})})]})}}]),n}(m.a.Component);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(e){Object(u.a)(n,e);var t=O(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(d.a)(Object(s.a)(e),"state",{username:"",password:""}),Object(d.a)(Object(s.a)(e),"onChange",(function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))})),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"my-4",children:"Sign In"}),Object(p.jsx)("div",{className:"flex flex-1 justify-center",children:Object(p.jsx)("div",{className:"w-full max-w-144",children:Object(p.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{onChange:this.onChange,name:"username",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username"})]}),Object(p.jsxs)("div",{className:"mb-6",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{onChange:this.onChange,name:"password",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"})]}),Object(p.jsxs)("div",{className:"flex items-center justify-between",children:[Object(p.jsx)("button",{onClick:function(){return e.props.signIn(e.state)},className:"bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"Sign In"}),Object(p.jsx)("a",{className:"inline-block align-baseline font-bold text-sm",href:"#",children:"Forgot Password?"})]})]})})})]})}}]),n}(m.a.Component);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var w={name:"",brand:"",price:"",categories:[],image:"",description:"",currentInventory:""},N=function(e){Object(u.a)(n,e);var t=x(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=t.call.apply(t,[this].concat(i)),Object(d.a)(Object(s.a)(e),"state",w),Object(d.a)(Object(s.a)(e),"clearForm",(function(){e.setState((function(){return w}))})),Object(d.a)(Object(s.a)(e),"onChange",(function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))})),Object(d.a)(Object(s.a)(e),"onImageChange",function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.target.files[0],e.setState({image:r});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.a)(Object(s.a)(e),"addItem",Object(o.a)(a.a.mark((function t(){var n,r,o,c,i,s,u,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,r=n.name,o=n.brand,c=n.price,i=n.categories,s=n.image,u=n.description,l=n.currentInventory,r&&o&&c&&i.length&&u&&l&&s){t.next=3;break}return t.abrupt("return");case 3:e.clearForm();case 4:case"end":return t.stop()}}),t)})))),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,r=t.brand,a=t.price,o=t.categories,c=(t.image,t.description),i=t.currentInventory;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-3xl",children:"Add Item"}),Object(p.jsx)("div",{className:"flex flex-1 justify-center",children:Object(p.jsx)("div",{className:"w-full max-w-144",children:Object(p.jsxs)("form",{className:"bg-white shadow-xs rounded px-8 pt-6 pb-8 mb-4",children:[Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Item name"}),Object(p.jsx)("input",{onChange:this.onChange,value:n,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Item name",name:"name"})]}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"price",children:"Item price"}),Object(p.jsx)("input",{onChange:this.onChange,value:a,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"price",type:"text",placeholder:"Item price",name:"price"})]}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"description",children:"Item Description"}),Object(p.jsx)("input",{onChange:this.onChange,value:c,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"description",placeholder:"Item Description",name:"description"})]}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"item image",children:"Item image"}),Object(p.jsx)("input",{type:"file",onChange:function(t){return e.onImageChange(t)}})]}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"currentInventory",children:"In stock"}),Object(p.jsx)("input",{onChange:this.onChange,value:i,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"currentInventory",placeholder:"Items in stock",name:"currentInventory"})]}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"categories",children:"Item categories"}),Object(p.jsx)("input",{onChange:this.onChange,value:o,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"categories",placeholder:"Comma separated list of item categories",name:"categories"})]}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"brand",children:"Item brand"}),Object(p.jsx)("input",{onChange:this.onChange,value:r,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"brand",placeholder:"Item brand",name:"brand"})]}),Object(p.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[Object(p.jsx)("button",{onClick:this.addItem,className:"bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"Add Item"}),Object(p.jsx)("a",{onClick:this.clearForm,className:"inline-block align-baseline font-bold text-sm",href:"#",children:"Clear Form"})]})]})})})]})}}]),n}(m.a.Component);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=n("LaK9");function S(){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(k.a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n("fL5F"),E=n("xY5u"),U=n("YFqc"),D=n.n(U),F=n("IF/j"),z=n("ma3e");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(e){Object(u.a)(n,e);var t=_(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=t.call.apply(t,[this].concat(i)),Object(d.a)(Object(s.a)(e),"state",{inventory:[],currentItem:{},editingIndex:[]}),Object(d.a)(Object(s.a)(e),"fetchInventory",Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:n=t.sent,e.setState({inventory:n});case 4:case"end":return t.stop()}}),t)})))),Object(d.a)(Object(s.a)(e),"editItem",(function(t,n){var r=n;e.setState({editingIndex:r,currentItem:t})})),Object(d.a)(Object(s.a)(e),"saveItem",function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=C(e.state.inventory))[n]=e.state.currentItem,e.setState({editingIndex:null,inventory:r});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.a)(Object(s.a)(e),"deleteItem",function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[].concat(C(e.state.inventory.slice(0,n)),C(e.state.inventory.slice(n+1))),e.setState({inventory:r});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.a)(Object(s.a)(e),"onChange",(function(t){var n=L(L({},e.state.currentItem),{},Object(d.a)({},t.target.name,t.target.value));e.setState({currentItem:n})})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.fetchInventory()}},{key:"render",value:function(){var e=this,t=this.state,n=t.inventory,r=t.currentItem,a=t.editingIndex;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"text-3xl",children:"Inventory"}),n.map((function(t,n){return a===n?Object(p.jsx)("div",{className:"border-b py-10",children:Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)(D.a,{href:"/product/".concat(Object(F.b)(t.name)),children:Object(p.jsx)("a",{"aria-label":t.name,children:Object(p.jsx)(E.a,{className:"w-32 m-0",src:t.image,alt:t.name})})}),Object(p.jsx)("input",{onChange:function(t){return e.onChange(t,n)},className:"ml-8 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:r.name,placeholder:"Item name",name:"name"}),Object(p.jsxs)("div",{className:"flex flex-1 justify-end items-center",children:[Object(p.jsx)("p",{className:"m-0 text-sm mr-2",children:"In stock:"}),Object(p.jsx)("input",{onChange:e.onChange,className:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:r.currentInventory,name:"currentInventory",placeholder:"Item inventory"}),Object(p.jsx)("input",{onChange:e.onChange,className:"ml-16 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:r.price,name:"price",placeholder:"Item price"})]}),Object(p.jsx)("div",{role:"button",onClick:function(){return e.saveItem(n)},className:"m-0 ml-10 text-gray-900 text-s cursor-pointer",children:Object(p.jsx)("p",{className:"text-sm ml-10 m-0",children:"Save"})})]})},t.id):Object(p.jsx)("div",{className:"border-b py-10",children:Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)(D.a,{href:"/product/".concat(Object(F.b)(t.name)),children:Object(p.jsx)("a",{children:Object(p.jsx)(E.a,{className:"w-32 m-0",src:t.image,alt:t.name})})}),Object(p.jsx)(D.a,{href:"/product/".concat(Object(F.b)(t.name)),children:Object(p.jsx)("a",{children:Object(p.jsx)("p",{className:"m-0 pl-10 text-gray-600 text-sm",children:t.name})})}),Object(p.jsxs)("div",{className:"flex flex-1 justify-end",children:[Object(p.jsxs)("p",{className:"m-0 pl-10 text-gray-900 text-sm",children:["In stock: ",t.currentInventory]}),Object(p.jsx)("p",{className:"m-0 pl-20 text-gray-900 font-semibold",children:R.a+t.price})]}),Object(p.jsxs)("div",{className:"flex items-center m-0 ml-10 text-gray-900 text-s cursor-pointer",children:[Object(p.jsx)(z.e,{onClick:function(){return e.deleteItem(n)}}),Object(p.jsx)("p",{role:"button",onClick:function(){return e.editItem(t,n)},className:"text-sm ml-10 m-0",children:"Edit"})]})]})},t.id)}))]})}}]),n}(m.a.Component);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var J=function(e){Object(u.a)(n,e);var t=M(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(d.a)(Object(s.a)(e),"state",{viewState:"view"}),e}return Object(i.a)(n,[{key:"toggleViewState",value:function(e){this.setState((function(){return{viewState:e}}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"flex my-6",children:[Object(p.jsx)("p",{role:"button",className:"mr-4 cursor-pointer hover:text-primary",onClick:function(){return e.toggleViewState("view")},children:"View Inventory"}),Object(p.jsx)("p",{role:"button",className:"cursor-pointer hover:text-primary",onClick:function(){return e.toggleViewState("add")},children:"Add Item"})]}),"view"===this.state.viewState?Object(p.jsx)(T,{}):Object(p.jsx)(N,{}),Object(p.jsx)("button",{onClick:this.props.signOut,className:"mt-4 bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"Sign Out"})]})}}]),n}(m.a.Component);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var B=function(e){Object(u.a)(n,e);var t=q(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=t.call.apply(t,[this].concat(i)),Object(d.a)(Object(s.a)(e),"state",{formState:"signUp",isAdmin:!1}),Object(d.a)(Object(s.a)(e),"toggleFormState",(function(t){e.setState((function(){return{formState:t}}))})),Object(d.a)(Object(s.a)(e),"signUp",function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.username,n.email,n.password,e.setState({formState:"confirmSignUp"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.a)(Object(s.a)(e),"confirmSignUp",function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.username,n.authcode,e.setState({formState:"signIn"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.a)(Object(s.a)(e),"signIn",function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.username,n.password,e.setState({formState:"signedIn",isAdmin:!0});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.a)(Object(s.a)(e),"signOut",Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({formState:"signUp"});case 1:case"end":return t.stop()}}),t)})))),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.formState,r=t.isAdmin;return Object(p.jsx)("div",{className:"flex flex-col",children:Object(p.jsxs)("div",{className:"max-w-fw flex flex-col",children:[Object(p.jsx)("div",{className:"pt-10",children:Object(p.jsx)("h1",{className:"text-5xl font-light",children:"Admin Panel"})}),function(t,n){switch(t){case"signUp":return Object(p.jsx)(j,V(V({},n),{},{signUp:e.signUp,toggleFormState:e.toggleFormState}));case"confirmSignUp":return Object(p.jsx)(y,V(V({},n),{},{confirmSignUp:e.confirmSignUp}));case"signIn":return Object(p.jsx)(v,V(V({},n),{},{signIn:e.signIn,toggleFormState:e.toggleFormState}));case"signedIn":return r?Object(p.jsx)(J,V(V({},n),{},{signOut:e.signOut})):Object(p.jsx)("h3",{children:"Not an admin"});default:return null}}(n)]})})}}]),n}(m.a.Component);t.default=B},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},LaK9:function(e,t,n){"use strict";var r=n("7Cbv"),a=[{categories:["creative"],name:"Drumming",price:"1000",image:"/products/drumset.jpg",description:" You can easily record your own tracks, and jam out with this awesome drum set. 40 New Preset Kits, 200 User Kits and over 400 New Voices.Faithful reproduction of real sound and ambience recorded in a well-known studio .",brand:"https://amzn.to/3vylxD4",currentInventory:1},{categories:["creative"],name:"Jewerly making",price:"25",image:"/products/jewerly.jpg",description:"Spend your time creating unique jewerly. This type of hobby can even be monitized, or even add on to your wardrobe. Let your imagination go wild.",brand:"https://amzn.to/33dh8JK",currentInventory:1},{categories:["creative"],name:"Photography",price:"499",image:"/products/photography.jpg",description:"Capture the outdoors, create cool image. Possibilities are endless with this hobby",brand:"https://amzn.to/3nS4Wrq",currentInventory:1},{categories:["creative"],name:"Cocktail mixing",price:"499",image:"/products/cocktail.jpg",description:"Most people love a good cocktail. Mix and match and explore different tastes. Entertain guests with your new inventions ",brand:"https://amzn.to/3aZ582W",currentInventory:1},{categories:["for kids"],name:"Magnetic Tiles",price:"24",image:"/products/kids1.jpg",description:"Let the kid imagination run wild with this creative toy. Build houses, cars, and anything they can imagine. Lots of hours of fun",brand:"https://amzn.to/3tgZWOb",currentInventory:1},{categories:["for kids"],name:"RC Cars",price:"100",image:"/products/rccar.jpg",description:"Have fun outside with this awesome RC car.",brand:"https://amzn.to/33cBX86",currentInventory:1},{categories:["for kids"],name:"model Kits",price:"68",image:"/products/modelkit.jpg",description:"This is fun, and most of all the parents can join in on the fun.",brand:"https://amzn.to/3aZFuuQ",currentInventory:1},{categories:["for kids"],name:"Magic Kits",price:"68",image:"/products/magic.jpg",description:"Learn magic, have your kids entertain others. Either way, this is a fun hobby to engage in",brand:"https://amzn.to/33aSrNQ",currentInventory:1},{categories:["outdoor"],name:"Archery",price:"80",image:"/products/archery.jpg",description:"Hone your skills in archery. You can practice this in a safe space, or even enter into competitive local games",brand:"https://amzn.to/3egQ1E4",currentInventory:4},{categories:["outdoor","for couples"],name:"outdoor painting",price:"26",image:"/products/painting.jpg",description:"Enjoy the great outdoors, and paint it at the same time. Capture the streams, oceans, and landascape. This is a great hobby!.",brand:"https://amzn.to/3nL97Ff",currentInventory:10},{categories:["for couples","outdoor"],name:"Paint Ball",price:"200",image:"/products/paintball.jpg",description:" Dodge, shoot!, roll, plan, and win. This is a great way to enjoy a good time with friends.",brand:"https://amzn.to/3h0CMJ5",currentInventory:24},{categories:["outdoor","for couples"],name:"Done flying",price:"45",image:"/products/drone.jpg",description:" There is a huge community of drone enthusiasts. This hobby can easily morph into aerial photography, or even nature videography. Great way to spend time outdoor",brand:"https://amzn.to/3eRLM0D",currentInventory:2},{categories:["for couples"],name:"Tennis",price:"89",image:"/products/tennis.jpg",description:"This is a great for couples and mostly its also a way to excercise",brand:"https://amzn.to/3vzwBzK",currentInventory:2}];a.map((function(e){return e.id=Object(r.a)(),e})),t.a=a},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.a.createContext&&a.a.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function u(e){return e&&e.map((function(e,t){return a.a.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return a.a.createElement(f,i({attr:i({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var n,r=e.attr,o=e.size,c=e.title,u=s(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&a.a.createElement("title",null,c),e.children)};return void 0!==c?a.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(o)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,b=e.children,m=e.replace,h=e.shallow,j=e.scroll,g=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var y=o.Children.only(b),O=y&&"object"===typeof y&&y.ref,v=(0,s.useIntersection)({rootMargin:"200px"}),x=r(v,2),w=x[0],N=x[1],I=o.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,o.useEffect)((function(){var e=N&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,N,g,t,n]);var C={ref:I,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,m,h,j,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(C.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(y,C)};t.default=f},fL5F:function(e,t,n){"use strict";t.a="$"},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var a=n("JX7q");function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},xY5u:function(e,t,n){"use strict";var r=n("rePB"),a=n("zLVn");var o=n("nKUr");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.src,n=function(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["src"]);return Object(o.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({src:t},n))}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["Ho3L",0,2,3,1]]]);
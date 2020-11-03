require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2,3],Array(89).concat([
/* 89 */
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);

            __webpack_require__(219)();
            
            
        if (false) {}
        
            const context = __webpack_require__(335);
            global.registerWebpackModules(context);
            if (false) {}
            
        
        /*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

__webpack_require__(125);
__webpack_require__(344);
const { Page } = __webpack_require__(208);
const application = __webpack_require__(27);

// Dev, test, prod urls
const apiLoginUrlDev = "https://sts-dev.pciaa.net/api/pci/signin/issue";
const apiLoginUrlTest = "https://sts-test.pciaa.net/api/pci/signin/issue";
const apiLoginUrlProd = "https://sts.apci.org/api/pci/signin/issue";
const apiBaseServiceUrlDev = "https://dev.pciaa.net/pciwebsite/congressapi/legislators/";
const apiBaseServiceUrlTest = "https://test.pciaa.net/pciwebsite/congressapi/legislators/";
const apiBaseServiceUrlProd = "https://www.apci.org/pciwebsite/congressapi/legislators/";
const scopeDev = "http://dev.pciaa.net/";
const scopeTest = "http://test.pciaa.net/";
const scopeProd = "http://www.apci.org/";

// Define all global variables used throughout the entire solution.
global.apiLoginUrl = apiLoginUrlProd;
global.apiBaseServiceUrl = apiBaseServiceUrlProd;
global.scope = scopeProd;
global.token = null;
global.personId = null;
global.currentUser = null;
global.companyId = null;
global.isPci = false;
global.isCongressAdmin = false;
global.isCongressUser = false;
global.isCongressExternalUser = false;

//application.start({ moduleName: "login/login-page" });
//application.run({ moduleName: "login/login-page" });
application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if (false ) {} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": 119
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 118;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n"},{"type":"rule","selectors":["ActivityIndicator"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"}]},{"type":"rule","selectors":["Page"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"comment","comment":" margin-top: -20; fix nested frame spacing "}]},{"type":"rule","selectors":[".ios .page"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":[".android TextField"],"declarations":[{"type":"declaration","property":"font","value":"14"}]},{"type":"rule","selectors":[".android .login-field"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"0"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":[".ios .login-field"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"15"},{"type":"declaration","property":"margin-top","value":"10"}]},{"type":"rule","selectors":[".android .login-field-switch"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".ios .login-field-switch"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".hr-light"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".hr-dark"],"declarations":[{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".android .button"],"declarations":[{"type":"declaration","property":"background","value":"#eee"},{"type":"declaration","property":"border-color","value":"#ccc"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"30"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".ios .button"],"declarations":[{"type":"declaration","property":"background","value":"#eee"},{"type":"declaration","property":"border-color","value":"#ccc"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".android .login-button"],"declarations":[{"type":"declaration","property":"background","value":"#ccc"},{"type":"declaration","property":"border-color","value":"#999"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"30"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".ios .login-button"],"declarations":[{"type":"declaration","property":"background","value":"#0075be"},{"type":"declaration","property":"border-color","value":"#0075be"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":[".android .forgot-button"],"declarations":[{"type":"declaration","property":"background","value":"transparent"},{"type":"declaration","property":"border","value":"none"},{"type":"declaration","property":"color","value":"#ea092a"},{"type":"declaration","property":"font-size","value":"11"}]},{"type":"rule","selectors":[".ios .forgot-button"],"declarations":[{"type":"declaration","property":"background","value":"transparent"},{"type":"declaration","property":"border","value":"none"},{"type":"declaration","property":"color","value":"#ea092a"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".navigation-frame Page"],"declarations":[{"type":"comment","comment":" margin-top: 20; fix nested frame spacing "},{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".tab"],"declarations":[{"type":"comment","comment":" padding: 10; "},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"1"},{"type":"declaration","property":"background-color","value":"#eeeeee"},{"type":"declaration","property":"color","value":"#999"}]},{"type":"rule","selectors":[".tab-selected"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"}]},{"type":"rule","selectors":[".android .tab-icon"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"22"},{"type":"declaration","property":"font-family","value":"fontawesome"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".ios .tab-icon"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"22"},{"type":"declaration","property":"font-family","value":"'FontAwesome'"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".tab-label"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"margin-bottom","value":"1"}]},{"type":"rule","selectors":[".action-bar-title"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".android .list-view-item"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"5"},{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".ios .list-view-item"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"margin-right","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".android .list-view-item-small"],"declarations":[{"type":"declaration","property":"font-size","value":"11"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"5"},{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".ios .list-view-item-small"],"declarations":[{"type":"declaration","property":"font-size","value":"13"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"margin-right","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".rad-list-view-item"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"comment","comment":" color: #212121; "},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".android .list-view-item-form"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"comment","comment":" margin-right: 20; "},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".ios .list-view-item-form"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"comment","comment":" margin-right: 20; "},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".android .list-view-item-form-bottom"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".ios .list-view-item-form-bottom"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".list-view-section-blank"],"declarations":[{"type":"declaration","property":"background-color","value":"#ddd"},{"type":"declaration","property":"height","value":"1"}]},{"type":"rule","selectors":[".android .list-view-section-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"10"},{"type":"comment","comment":" height: 30; "},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"10"}]},{"type":"rule","selectors":[".ios .list-view-section-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"35"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".android .list-view-section-header-no-border"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"height","value":"30"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".ios .list-view-section-header-no-border"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"35"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".list-view-section-detail"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"}]},{"type":"rule","selectors":[".android .list-view-item-main-top"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ios .list-view-item-main-top"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".android .list-view-item-main"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".ios .list-view-item-main"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .list-view-item-picker"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".ios .list-view-item-picker"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".android .list-view-item-textview"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ios .list-view-item-textview"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".android .list-view-item-left"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".ios .list-view-item-left"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".android .list-view-item-right"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".ios .list-view-item-right"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".android .list-view-item-sub-email"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"margin-top","value":"3"},{"type":"declaration","property":"text-decoration","value":"underline"}]},{"type":"rule","selectors":[".ios .list-view-item-sub-email"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"},{"type":"declaration","property":"text-decoration","value":"underline"}]},{"type":"rule","selectors":[".android .list-view-item-sub-phone"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".ios .list-view-item-sub-phone"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .list-view-item-sub-title"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".ios .list-view-item-sub-title"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .list-view-item-sub"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".ios .list-view-item-sub"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .fn-list-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#ccc"},{"type":"declaration","property":"font-family","value":"fontawesome"},{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".ios .fn-list-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#ccc"},{"type":"declaration","property":"font-family","value":"'FontAwesome'"},{"type":"declaration","property":"font-size","value":"26"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".android .fn-list-view-item-small"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-family","value":"fontawesome"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".ios .fn-list-view-item-small"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-family","value":"'FontAwesome'"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".login-background"],"declarations":[{"type":"comment","comment":" background-color: #0075be; "},{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".android .scroll-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"}]},{"type":"rule","selectors":[".ios .scroll-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"padding-left","value":"15"},{"type":"declaration","property":"padding-right","value":"15"}]},{"type":"rule","selectors":[".android .segmented-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#33a8f1"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"selected-background-color","value":"#0075be"},{"type":"comment","comment":" NEEDED "}]},{"type":"rule","selectors":[".ios .segmented-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#33a8f1"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"selected-background-color","value":"#0075be"},{"type":"comment","comment":" NEEDED "}]},{"type":"rule","selectors":[".swipe-icons"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"comment","comment":" padding-left: 10;\n    padding-right: 10; "},{"type":"declaration","property":"width","value":"80"}]},{"type":"rule","selectors":[".blue"],"declarations":[{"type":"declaration","property":"background-color","value":"#0075be"}]},{"type":"rule","selectors":[".green"],"declarations":[{"type":"comment","comment":" background-color: green; "},{"type":"declaration","property":"background-color","value":"#35c4af"},{"type":"comment","comment":" #0a573d; "}]},{"type":"rule","selectors":[".orange"],"declarations":[{"type":"comment","comment":" background-color: #f68320; "},{"type":"declaration","property":"background-color","value":"#e88011"}]},{"type":"rule","selectors":[".red"],"declarations":[{"type":"comment","comment":" background-color: #cc2d30; "},{"type":"declaration","property":"background-color","value":"#ea092a"}]},{"type":"comment","comment":" .android .switch {\n    color: #cc2d30;\n} "},{"type":"rule","selectors":[".ios .switch"],"declarations":[{"type":"comment","comment":" background-color: #cc2d30; "},{"type":"declaration","property":"background-color","value":"#ea092a"}]},{"type":"comment","comment":" Switch[checked=true] {\n    color: white ;\n    background-color: #0075be;\n    transform: scale(1.25, 1.25);\n    transform: translate(-5, 0);\n  }\n  \n  Switch[checked=false] {\n    color: gray;\n    background-color: gray;\n  } "},{"type":"rule","selectors":[".view-title"],"declarations":[{"type":"declaration","property":"background-color","value":"#0075be"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"20"},{"type":"comment","comment":" height: 44; "},{"type":"declaration","property":"padding-bottom","value":"10"},{"type":"declaration","property":"padding-top","value":"10"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"comment","comment":"\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n"},{"type":"comment","comment":"@import '~nativescript-theme-core/css/core.light.css';"}],"parsingErrors":[]}};; 
if (false ) {} 

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Assignment";

        if (args.isBackNavigation) {
            if (global.refreshAssignments !== undefined && global.refreshAssignments === true) {
                // page.bindingContext.set("meetingCreated", "Y");
                // page.bindingContext.set("lobbyistId", global.personId);
                // page.bindingContext.set("lobbyist", global.currentUser);
                page.bindingContext.meetingCreated = "Y";
                page.bindingContext.lobbyistId = global.personId;
                page.bindingContext.lobbyist = global.currentUser;

                var lobbyistGridLayout = page.getViewById("lobbyistGridLayout");
                var lobbyistLabel = page.getViewById("lobbyistLabel");

                lobbyistGridLayout.visibility = "visible";
                lobbyistLabel.text = global.currentUser;
            }
        } else {
            global.refreshAssignments = false;

            page.bindingContext = navigationContext;
        }
    } catch(e) {
        dialogs.alert(e);
    }
    
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAddTap(args) {
    try
    {
        var model = {
            meetingId: 0,
            meetingDate: new Date(),
            venueTypeId: 1,
            venueType: "In Person",
            attendeeTypeId: 1,
            attendeeType: "Staff Only",
            lobbyistId: global.personId,
            lobbyist: null,
            legislatorId: navigationContext.legislatorId,
            fullName: navigationContext.legislator,
            name: null,
            pciInitiatives: navigationContext.initiative,
            surveys: navigationContext.survey,
            pciAttendees: global.currentUser,
            primaryOfficeContact: null,
            meetingLocationId: 2,
            location: "Meeting in DC",
            legislatorStaffAttendees: null,
            followUpNeeded: false,
            followUpDate: null,
            followUpNotes: null,
            creatorId: global.personId,
            notes: null,
            initiativeId: navigationContext.initiativeId,
            surveyId: navigationContext.surveyId,
            assignmentId: navigationContext.assignmentId
        }

        const navigationEntry = {
            moduleName: "meetings/meeting/meeting-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onAddTap\" ios.systemIcon=\"4\" android.systemIcon=\"ic_menu_add\" ios.position=\"right\" \n            visibility=\"{{ meetingCreated === 'Y' ? 'collapse' : 'visible' }}\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"assignmentId\" text=\"{{ assignmentId }}\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"{{ legislator }}\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" width=\"100%\">\n            <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Company\" verticalAlignment=\"middle\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ company }}\" horizontalAlignment=\"right\" verticalAlignment=\"middle\" textWrap=\"true\" class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Initiative\" verticalAlignment=\"middle\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ initiative }}\" horizontalAlignment=\"right\" verticalAlignment=\"middle\" textWrap=\"true\" class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Survey\" verticalAlignment=\"middle\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ survey }}\" horizontalAlignment=\"right\" verticalAlignment=\"middle\" textWrap=\"true\" class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Meeting Created?\" verticalAlignment=\"middle\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ meetingCreated === 'Y' ? 'Yes' : 'No' }}\" horizontalAlignment=\"right\" verticalAlignment=\"middle\" class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout id=\"lobbyistGridLayout\" columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ meetingCreated === 'Y' ? 'visible' : 'collapse' }}\">\n                <Label row=\"0\" col=\"0\" text=\"Lobbyist\" verticalAlignment=\"middle\" class=\"list-view-item-left\" />\n                <Label id=\"lobbyistLabel\" row=\"0\" col=\"1\" text=\"{{ lobbyist }}\" horizontalAlignment=\"right\" verticalAlignment=\"middle\" textWrap=\"true\" class=\"list-view-item-right\" />\n            </GridLayout>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const AssignmentsViewModel = __webpack_require__(123);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var gestures = __webpack_require__(57);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.5;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var searchBar;
var assignmentsPageSize = 25;
var assignmentsSearchText = "";
var meetingCreated = "N";
var assignmentsSearchSubmitted = false;

var assignmentsList = new AssignmentsViewModel([]);

var pageData = new ObservableModule.fromObject({
    assignmentsList: assignmentsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Assignments";

        if (args.isBackNavigation) {
            if (global.refreshAssignments !== undefined && global.refreshAssignments === true) {
                assignmentsList.empty();

                pageData.set("isLoading", true);

                assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function () {
                    pageData.set("isLoading", false);

                    global.refreshAssignments = false;
                });
            }
        } else {
            if (assignmentsSearchText !== "") {
                var searchBar = page.getViewById("searchBar");

                searchBar.text = assignmentsSearchText;
            }
        
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSelectedIndexChanged(args) {
    try {
        if (args.newIndex === 0) {
            meetingCreated = "N";
        } else {
            meetingCreated = "Y";
        }

        assignmentsList.empty();

        pageData.set("isLoading", true);

        assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSearchBarLoaded(args) {
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args) {
    searchBar = args.object;

    assignmentsSearchText = searchBar.text.trim();

    assignmentsList.empty();
    
    pageData.set("isLoading", true);

    assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function (){
        pageData.set("isLoading", false);

        assignmentsSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    assignmentsSearchText = "";

    if (assignmentsSearchSubmitted) {
        assignmentsList.empty();
        
        pageData.set("isLoading", true);

        assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function (){
            pageData.set("isLoading", false);

            assignmentsSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    }
}

function onItemTap(args) {
    try {
        if (platform.isIOS) {
            if (swipeOpen) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 200
                });

                swipeOpen = false;
            } else {
                var view = args.view;
                var model = view.bindingContext;

                const navigationEntry = {
                    moduleName: "assignments/assignment/assignment-page",
                    context: model,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadMoreItems(args) {
    try {
        var assignmentsListCount = assignmentsList.length;
        var assignmentsPageNumber = Math.ceil(assignmentsListCount / assignmentsPageSize) + 1;
        var assignmentsRemainder = assignmentsListCount % assignmentsPageSize;

        if (assignmentsRemainder !== 0 && assignmentsRemainder < assignmentsPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        assignmentsList.load(meetingCreated, assignmentsSearchText, assignmentsPageNumber, assignmentsPageSize).then(function (){
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onAddClick(args) {
    var view = args.object;
    
    var model = {
        meetingId: 0,
        meetingDate: new Date(),
        venueTypeId: 1,
        venueType: "In Person",
        attendeeTypeId: 1,
        attendeeType: "Staff Only",
        lobbyistId: global.personId,
        lobbyist: null,
        legislatorId: view.bindingContext.legislatorId,
        fullName: view.bindingContext.legislator,
        name: null,
        pciInitiatives: view.bindingContext.initiative,
        surveys: view.bindingContext.survey,
        pciAttendees: global.currentUser,
        primaryOfficeContact: null,
        meetingLocationId: 1,
        location: "Meeting in District",
        legislatorStaffAttendees: null,
        followUpNeeded: false,
        followUpDate: null,
        followUpNotes: null,
        creatorId: global.personId,
        notes: null,
        initiativeId: view.bindingContext.initiativeId,
        surveyId: view.bindingContext.surveyId,
        assignmentId: view.bindingContext.assignmentId
    }

    const navigationEntry = {
        moduleName: "meetings/meeting/meeting-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);

    if (swipeOpen) {
        swipedItem.animate({
            translate: { x: 0, y: 0 },
            duration: 200
        });

        swipeOpen = false;
    }
}

function onLayoutLoaded(args) {
    var layout = args.object;

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
            try {
                if (swipeOpen) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 200
                    });
    
                    swipeOpen = false;
                } else {
                    var view = args.view;
                    var model = view.bindingContext;
    
                    const navigationEntry = {
                        moduleName: "assignments/assignment/assignment-page",
                        context: model,
                        clearHistory: false
                    };
    
                    frameModule.topmost().navigate(navigationEntry);
                }
            }
            catch(e)
            {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            }
        });
    }

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                if (view.bindingContext.meetingCreated === "N") {
                    var assignmentsListView = page.getViewById("assignmentsListView");
    
                    if (platform.isAndroid) {
                        assignmentsListView.nativeView.requestDisallowInterceptTouchEvent(true);
                    } else if (platform.isIOS) {
                        assignmentsListView.ios.scrollEnabled = false;
                    }
    
                    swipeOpen = true;
                    swipedItem = layout;

                    var newX = layout.translateX + args.deltaX;

                    if (newX >= MIN_X && newX <= MAX_X) {
                        layout.translateX = newX;
                    }
                    
                    if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                        // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                        let destX = 0;
                        
                        // if user hit or crossed the THESHOLD either way, let's finish in that direction
                        if (newX <= MIN_X * THRESHOLD) {
                            destX = MIN_X;
                        } else if (newX >= MAX_X * THRESHOLD) {
                            destX = MAX_X;
                        }
                        
                        layout.animate({
                            translate: { x: destX, y: 0 },
                            duration: 200
                        });
                    }

                    if (platform.isAndroid) {
                        assignmentsListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        assignmentsListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                } else {
                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onAddClick = onAddClick;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function AssignmentsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(meetingCreated, filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "assignmentsfilter?meetingCreated=" + meetingCreated + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize + "&companyId=" + global.companyId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(assignment) {
                if (assignment.AssignmentId !== null && assignment.AssignmentId !== 0) {
                    viewModel.push({
                        assignmentId: assignment.AssignmentId,
                        companyId: assignment.CompanyId,
                        company: assignment.Company,
                        initiativeId: assignment.InitiativeId,
                        initiative: assignment.Initiative,
                        surveyId: assignment.SurveyId,
                        survey: assignment.Survey,
                        legislatorId: assignment.LegislatorId,
                        legislator: assignment.Legislator,
                        party: assignment.Party,
                        partyName: assignment.PartyName,
                        state: assignment.State,
                        stateName: assignment.StateName,
                        committeeIds: assignment.CommitteeIds,
                        committees: assignment.Committees,
                        createdDate: assignment.CreatedDate,
                        completionDate: assignment.CompletionDate,
                        assignmentStatusCode: assignment.AssignmentStatusCode,
                        assignmentStatus: assignment.AssignmentStatus,
                        meetingCreated: assignment.MeetingCreated,
                        meetingId: assignment.MeetingId,
                        lobbyistId: assignment.LobbyistId,
                        lobbyist: assignment.Lobbyist
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = AssignmentsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\" />\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\">\n            <SearchBar id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Open Assignments\" />\n                    <SegmentedBarItem title=\"Closed Assignments\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView id=\"assignmentsListView\" items=\"{{ assignmentsList }}\" itemLoading=\"onItemLoading\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <AbsoluteLayout>\n                        <!-- BACKGROUND: Swipe Actions -->\n                        <GridLayout columns=\"*, 80\" android:rows=\"67\" ios:rows=\"75\" width=\"100%\">\n                            <Label col=\"0\" />\n                            <GridLayout col=\"1\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onAddClick\" class=\"swipe-icons orange\" \n                                visibility=\"{{ meetingCreated === 'Y' ? 'collapse' : 'visible' }}\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf073;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Add Meeting\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                        </GridLayout>\n                        <!-- FOREGROUND: List View Item Details -->\n                        <StackLayout loaded=\"onLayoutLoaded\" backgroundColor=\"white\" width=\"100%\">\n                            <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                                <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                    <Label text=\"{{ legislator }}\" class=\"list-view-item-main-top\" />\n                                    <GridLayout columns=\"auto, *\" rows=\"*\" visibility=\"{{ initiative.length > 0 ? 'visible' : 'collapse' }}\">\n                                        <Label row=\"0\" col=\"0\" text=\"Initiative: \" class=\"list-view-item-sub-title\" />\n                                        <Label row=\"0\" col=\"1\" text=\"{{ initiative }}\" class=\"list-view-item-sub\" />\n                                    </GridLayout>\n                                    <GridLayout columns=\"auto, *\" rows=\"*\">\n                                        <Label row=\"0\" col=\"0\" text=\"Survey: \" class=\"list-view-item-sub-title\" />\n                                        <Label row=\"0\" col=\"1\" text=\"{{ survey }}\" class=\"list-view-item-sub\" />\n                                    </GridLayout>\n                                </StackLayout>\n                                <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                            </GridLayout>\n                        </StackLayout>\n                    </AbsoluteLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if (true) {
    // registers tns-core-modules UI framework modules
    __webpack_require__(96);

    // register application modules
    // This will register each `page` postfixed xml, css, js, ts, scss etc. in the app/ folder
    const context = __webpack_require__(337);
    global.registerWebpackModules(context);
}
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteeViewModel = __webpack_require__(127);
const observableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;

var committeeList = new CommitteeViewModel([]);

var pageData = new observableModule.fromObject({
    committeeList: committeeList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committee";

        var navigationContext = page.navigationContext;

        var committeeName = page.getViewById("committeeName");
        var committee = navigationContext.committeeName;
        var maxLength = 35;

        if (committee.length > maxLength) {
            for (var i = maxLength; i > 0; i--) {
                var position = committee.indexOf(" ", i);

                if (position > -1 && position <= maxLength) {
                    committee = committee.substr(0, position) + "..."

                    break;
                }
            }
        }

        committeeName.text = committee;

        committeeList.empty();

        if (committeeList.length === 0) {
            pageData.set("isLoading", true);
    
            committeeList.load(navigationContext.committeeId).then(function () {
                pageData.set("isLoading", false);
            });
        }
    
        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    var view = args.view;
    var model = view.bindingContext;

    const navigationEntry = {
        moduleName: "legislators/legislator/legislator-page",
        context: model,
        clearHistory: false
    };

    try
    {
        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function CommitteeViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(committeeId) {
        return http.request({
            url: global.apiBaseServiceUrl + "committeemembers?committeeId=" + committeeId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(legislator) {
                var side = legislator.Side;

                if (side.length > 0) {
                    side = " (" + side + ")";
                }

                viewModel.push({
                    committeeId: legislator.CommitteeId,
                    name: legislator.Name,
                    subcommittee: legislator.Subcommittee,
                    side: side,
                    rank: legislator.Rank,
                    bioGuideId: legislator.BioGuideId,
                    legislatorId: legislator.LegislatorId,
                    fullName: legislator.FullName,
                    title: legislator.Title,
                    office: legislator.Office,
                    state: legislator.State,
                    stateName: legislator.StateName,
                    phone: legislator.Phone,
                    termStart: legislator.TermStart,
                    termEnd: legislator.TermEnd,
                    chamber: legislator.Chamber,
                    party: legislator.Party,
                    partyName: legislator.PartyName,
                    bio: legislator.BioPlainText
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteeViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"committeeName\" text=\"\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeeList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ fullName }}\" class=\"list-view-item-main-top\" />\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"{{ title }}\" class=\"list-view-item-sub\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ side }}\" class=\"list-view-item-sub\" visibility=\"{{ side.length > 0 ? 'visible' : 'collapse' }}\" />\n                                </GridLayout>\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteesViewModel = __webpack_require__(130);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;
var searchBar;
var committeesPageSize = 25;
var committeesSearchText = "";
var chamberId = 0;
var committeesSearchSubmitted = false;

var committeesList = new CommitteesViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committees";
    
        if (committeesSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = committeesSearchText;
        }
        
        // Since the Page contains a SegmentedBar,
        // the selectedIndexChanged event will perform the initial load of the ListView.
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSelectedIndexChanged(args) {
    try {
        chamberId = args.newIndex;

        committeesList.empty();

        pageData.set("isLoading", true);

        committeesList.load(chamberId, committeesSearchText, 1, committeesPageSize).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args)
{
    searchBar = args.object;

    committeesSearchText = searchBar.text.trim();

    committeesList.empty();
    
    pageData.set("isLoading", true);

    committeesList.load(chamberId, committeesSearchText, 1, committeesPageSize).then(function (){
        pageData.set("isLoading", false);

        committeesSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    committeesSearchText = "";

    if (committeesSearchSubmitted) {
        committeesList.empty();
        
        pageData.set("isLoading", true);

        committeesList.load(chamberId, committeesSearchText, 1, committeesPageSize).then(function (){
            pageData.set("isLoading", false);

            committeesSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemTap(args) {
    try
    {
        var index = args.index;
        var committee = committeesList.getItem(index);
        var committeeId;
        var committeeName;

        if (committee.isSubcommittee === "True") {
            committeeId = committee.subcommitteeId;
            committeeName = committee.subcommitteeName;
        } else {
            committeeId = committee.committeeId;
            committeeName = committee.committeeName;
        }

        const navigationEntry = {
            moduleName: "committees/committee/committee-page",
            context: { 
                committeeId: committeeId,
                committeeName: committeeName
            },
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadMoreItems(args)
{
    var committeesListCount = committeesList.length;
    var committeesPageNumber = Math.ceil(committeesListCount / committeesPageSize) + 1;
    var committeesRemainder = committeesListCount % committeesPageSize;

    if (committeesRemainder !== 0 && committeesRemainder < committeesPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    committeesList.load(chamberId, committeesSearchText, committeesPageNumber, committeesPageSize).then(function (){
        pageData.set("isLoading", false);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
; 
if (false ) {} 

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(chamberId, filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "committeesfilter?chamberId=" + chamberId + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                if (committee.FullName !== null) {
                    var fullName = committee.FullName;
                    var title = committee.Title;

                    if (fullName.length > 0) {
                        if (title.indexOf(";") > 0) {
                            title = title.substr(0, title.indexOf(';')) + ": ";
                            fullName = fullName.replace(";", ", ");
                        } else {
                            title += ": ";
                        }
                    }

                    viewModel.push({
                        committeeId: committee.CommitteeId,
                        committeeName: committee.CommitteeName,
                        parentCommitteeId: committee.ParentCommitteeId,
                        subcommitteeId: committee.SubcommitteeId,
                        subcommitteeName: committee.SubcommitteeName,
                        isSubcommittee: committee.IsSubcommittee,
                        chamberId: committee.ChamberId,
                        chamber: committee.Chamber,
                        office: committee.Office,
                        phone: committee.Phone,
                        website: committee.Website,
                        fullName: fullName,
                        title: title
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\" />\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\">\n            <SearchBar id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem class=\"selectedSegment\" title=\"All\" />\n                    <SegmentedBarItem title=\"House\" />\n                    <SegmentedBarItem title=\"Senate\" />\n                    <SegmentedBarItem title=\"Joint\" />\n                    <SegmentedBarItem title=\"Caucus\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeesList }}\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ isSubcommittee === 'True' ? subcommitteeName : committeeName }}\" textWrap=\"true\" \n                                    style=\"{{ isSubcommittee === 'True' ? 'margin-left: 15;' : 'margin-left: 0;' }}\" class=\"list-view-item-main-top\" />\n                                <GridLayout columns=\"auto, *\" rows=\"*\" visibility=\"{{ fullName.length > 0 ? 'visible' : 'collapse' }}\">\n                                    <Label row=\"0\" col=\"0\" text=\"{{ title }}\" style=\"{{ isSubcommittee === 'True' ? 'margin-left: 15;' : 'margin-left: 0;' }}\" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ fullName }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                                <GridLayout columns=\"auto, *\" rows=\"*\" visibility=\"{{ phone.length > 0 ? 'visible' : 'collapse' }}\">\n                                    <Label row=\"0\" col=\"0\" text=\"Phone: \" style=\"{{ isSubcommittee === 'True' ? 'margin-left: 15;' : 'margin-left: 0;' }}\" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ phone }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
const HomeViewModel = __webpack_require__(133);
//var dialogs = require("ui/dialogs");

const homeViewModel = new HomeViewModel();
var page;

function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    //const page = args.object;
    page = args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = homeViewModel;
}

/* function onTabViewLoaded(args) {
    const tabView = args.object;

    tabView.eachChild((child) => {
        child._iosViewController.tabBarItem.titlePositionAdjustment = {
            horizontal: 0,
            vertical: 0
        };
    });

    page.actionBar.title = "Legislators";
} */

/* function onTabViewSelectedIndexChanged(args) {
    var tabView = args.object;
    var selectedIndex = tabView.selectedIndex;
        
    if (selectedIndex === 0) { // Legislators
        page.actionBar.title = "Legislators";
    } else if (selectedIndex === 1) { // Committees
        page.actionBar.title = "Committees";
    } else if (selectedIndex === 2) { // My Meetings
        page.actionBar.title = "My Meetings";
    } else { // Assignments
        page.actionBar.title = "Assignments";
    }
} */

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;
// exports.onTabViewLoaded = onTabViewLoaded;
// exports.onTabViewSelectedIndexChanged = onTabViewSelectedIndexChanged;
; 
if (false ) {} 

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

const Observable = __webpack_require__(8).Observable;

function HomeViewModel() {
    const viewModel = new Observable();

    return viewModel;
}

module.exports = HomeViewModel;
; 
if (false ) {} 

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page class=\"page\" navigatingTo=\"onNavigatingTo\" xmlns=\"http://schemas.nativescript.org/tns.xsd\">\n    <ActionBar class=\"action-bar\" />\n\n    <GridLayout>\n        <!-- Add your page content here -->\n    </GridLayout>\n    <!--<TabView id=\"mainTabs\" loaded=\"onTabViewLoaded\" selectedIndexChanged=\"onTabViewSelectedIndexChanged\">\n        <TabView.items>\n            <TabViewItem title=\"Legislators\" iconSource=\"res://legislator-icon\" xmlns:Legislators=\"home/legislators\">\n                <TabViewItem.view>\n                    <Legislators:legislators-page />\n                </TabViewItem.view>\n            </TabViewItem>\n            <TabViewItem title=\"Committees\" iconSource=\"res://committee-icon\" xmlns:Committees=\"home/committees\">\n                <TabViewItem.view>\n                    <Committees:committees-page />\n                </TabViewItem.view>\n            </TabViewItem>\n            <TabViewItem title=\"My Meetings\" iconSource=\"res://meeting-icon\">\n                <TabViewItem.view>\n                    <Label text=\"My Meetings\" />\n                </TabViewItem.view>\n            </TabViewItem>\n            <TabViewItem title=\"Assignments\" iconSource=\"res://assignment-icon\" xmlns:Assignments=\"home/assignments\">\n                <TabViewItem.view>\n                    <Assignments:assignments-page />\n                </TabViewItem.view>\n            </TabViewItem>\n        </TabView.items>\n    </TabView>-->\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Bio";

    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"legislatorId\" text=\"{{ legislatorId }}\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"{{ fullName }}\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\">\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Office\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ office }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"State\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ stateName }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Phone\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ phone }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Term Start\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ termStart }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Chamber\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ chamber }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Party\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ partyName }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Bio\" class=\"list-view-item-left\" />\n            </GridLayout>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\">\n            <GridLayout columns=\"*\" rows=\"*\">\n                <!-- <ScrollView row=\"0\" col=\"0\"> -->\n                    <TextView text=\"{{ bio }}\" editable=\"false\" class=\"scroll-view-item\" />\n                <!-- </ScrollView> -->\n            </GridLayout>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteesViewModel = __webpack_require__(138);
const observableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;

var committeesList = new CommitteesViewModel([]);

var pageData = new observableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committees";

        var navigationContext = page.navigationContext;
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");
    
        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;
    
        committeesList.empty();
    
        pageData.set("isLoading", true);
    
        committeesList.load(navigationContext.legislatorId).then(function () {
            pageData.set("isLoading", false);
        });
    
        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(legislatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "committees?legislatorId=" + legislatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                viewModel.push({
                    committeeId: committee.CommitteeId,
                    name: committee.Name,
                    phone: committee.Phone,
                    chamberId: committee.ChamberId,
                    chamber: committee.Chamber,
                    parentCommitteeId: committee.ParentCommitteeId,
                    subcommittee: committee.Subcommittee,
                    rank: committee.Rank,
                    title: committee.Title
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"legislatorId\" text=\"\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeesList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ name }}\" textWrap=\"true\" style=\"{{ subcommittee === 'True' ? 'margin-left: 15;' : 'margin-left: 0;' }}\" class=\"list-view-item-main-top\" />\n                                <Label text=\"{{ title }}\" style=\"{{ subcommittee === 'True' ? 'margin-left: 15;' : 'margin-left: 0;' }}\" class=\"list-view-item-sub\" />\n                            </StackLayout>\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

const InitiativetiersViewModel = __webpack_require__(141);
const observableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;

var initiativeTiersList = new InitiativetiersViewModel([]);

var pageData = new observableModule.fromObject({
    initiativeTiersList: initiativeTiersList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Initiative Tiers";

        var navigationContext = page.navigationContext;
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");
    
        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;
    
        initiativeTiersList.empty();
    
        pageData.set("isLoading", true);
    
        initiativeTiersList.load(navigationContext.legislatorId).then(function () {
            pageData.set("isLoading", false);
        });
    
        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function InitiativetiersViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(legislatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "initiativestances?legislatorId=" + legislatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(initiative) {
                viewModel.push({
                    initiativeId: initiative.InitiativeId,
                    initiative: initiative.Initiative,
                    legislatorId: initiative.LegislatorId,
                    legislator: initiative.Legislator,
                    tier: initiative.Tier,
                    issueStanceId: initiative.IssueStanceId,
                    issueStance: initiative.IssueStance
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = InitiativetiersViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"legislatorId\" text=\"\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" borderColor=\"#000\" borderWidth=\"0 0 0.25 0\">\n            <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                <Label row=\"0\" col=\"0\" text=\"Initiative\" class=\"list-view-item-main-top\" />\n                <Label row=\"0\" col=\"1\" text=\"Tier\" class=\"list-view-item-main-top\" />\n            </GridLayout>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\" width=\"100%\">\n            <ListView items=\"{{ initiativeTiersList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ initiative }}\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"{{ tier }}\" class=\"list-view-item-main-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

const LegislatorViewModel = __webpack_require__(144);
const observableModule = __webpack_require__(8);
// const Color = require("color").Color;
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;
var navigationContext;

var legislatorList = new LegislatorViewModel([]);

var pageData = new observableModule.fromObject({
    legislatorList: legislatorList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;

    page.actionBar.title = "Legislator";

    // if (frameModule.topmost().ios) {
    //     var navigationBar = frameModule.topmost().ios.controller.navigationBar;

    //     //dialogs.alert(navigationBar.items);

    //     try {
    //         navigationBar.tintColor = new Color("#007aff").ios;
    //     }
    //     catch(e)
    //     {
    //         dialogs.alert(e);
    //     }
    // }

    // if (page.ios)
    // {
    //     var selectedViewController = page.ios;

    //     selectedViewController.hidesBottomBarWhenPushed = false;
    // }

    navigationContext = page.navigationContext;
    var legislatorId = page.getViewById("legislatorId");
    var legislatorName = page.getViewById("legislatorName");
    
    legislatorId.text = navigationContext.legislatorId;
    legislatorName.text = navigationContext.fullName;

    legislatorList.empty();
    legislatorList.load(navigationContext.bioguideId);

    //dialogs.alert(legislatorList.getItem(legislatorList.length - 1).title);
    
    page.bindingContext = pageData;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args)
{
    try
    {
        var index = args.index;
        var item = legislatorList.getItem(index);

        navigationContext.reference = "nav";
        navigationContext.relationalType = "legislator";
        navigationContext.relationalId = navigationContext.legislatorId;

        const navigationEntry = {
            moduleName: item.navigateTo,
            context: navigationContext,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var dialogs = __webpack_require__(14);

function LegislatorViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(bioguideId) {
        var data;

        if (bioguideId === null || bioguideId === "") {
            data = [
                {"title": "Meetings", "navigateTo": "meetings/meetings-page"},
                {"title": "Initiative Tiers", "navigateTo": "legislators/legislator/initiativetiers/initiativetiers-page"},
                {"title": "Surveys", "navigateTo": "legislators/legislator/surveys/surveys-page"},
                {"title": "Relationships", "navigateTo": "profiles/profiles-page"},
                {"title": "Committees", "navigateTo": "legislators/legislator/committees/committees-page"}
            ];
        } else {
            data = [
                {"title": "Meetings", "navigateTo": "meetings/meetings-page"},
                {"title": "Initiative Tiers", "navigateTo": "legislators/legislator/initiativetiers/initiativetiers-page"},
                {"title": "Surveys", "navigateTo": "legislators/legislator/surveys/surveys-page"},
                {"title": "Relationships", "navigateTo": "profiles/profiles-page"},
                {"title": "Bio", "navigateTo": "legislators/legislator/bio/bio-page"},
                {"title": "Committees", "navigateTo": "legislators/legislator/committees/committees-page"}
            ];
        }

        data.forEach(function(dataItem) {
            viewModel.push({
                title: dataItem.title,
                navigateTo: dataItem.navigateTo
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    return viewModel;
}

module.exports = LegislatorViewModel;
; 
if (false ) {} 

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"legislatorId\" text=\"\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" width=\"100%\">\n            <ListView items=\"{{ legislatorList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ title }}\" verticalAlignment=\"middle\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" verticalAlignment=\"middle\" class=\"fn-list-view-item\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const SelectViewModel = __webpack_require__(147);
const ObservableModule = __webpack_require__(8);
var http = __webpack_require__(21);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;
var navigationContext;

var selectList = new SelectViewModel([]);

var switchTap = false;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    selectList: selectList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        pageData.boundData = navigationContext;
        pageData.boundData.updated = false;
        
        page.actionBar.title = "Select Survey(s)";

        selectList.empty();

        pageData.set("isLoading", true);

        selectList.load(navigationContext.meetingId).then(function () {
            pageData.set("isLoading", false);

            page.bindingContext = pageData;
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("tap", function(args) {
        // Necessary to prevent the checkedChange event from firing on the switch when user scrolls.
        switchTap = true;
    });

    checkedSwitch.on("checkedChange", function(args) {
        if (switchTap) {
            var stackLayout = args.object.parent;
            var indexLabel = stackLayout.getViewById("indexLabel");

            var model = selectList.getItem(indexLabel.text);

            model.checked = args.value;
            
            http.request({
                url: global.apiBaseServiceUrl + "updatemeetingsurvey",
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": global.token },
                content: JSON.stringify(model)
            }).then(function (response) {
                // var result = response.content.toJSON();

                // dialogs.alert(result);
                pageData.boundData.updated = true;

                switchTap = false;
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function SelectViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(meetingId) {
        return http.request({
            url: global.apiBaseServiceUrl + "meetingsurveys?meetingId=" + meetingId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(survey) {
                var checked = false;

                if (survey.Checked === "true") {
                    checked = true;
                }

                viewModel.push({
                    meetingId: survey.MeetingId,
                    legislatorId: survey.LegislatorId,
                    surveyId: survey.SurveyId,
                    survey: survey.Survey,
                    initiativeIds: survey.InitiativeIds,
                    intitiatives: survey.Initiatives,
                    year: survey.Year,
                    chamberId: survey.ChamberId,
                    chamber: survey.Chamber,
                    checked: survey.Checked
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = SelectViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"*\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ selectList }}\" itemTemplateSelector=\"$index\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ survey }}\" class=\"list-view-item-main-top\" />\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"Session Year: \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ year }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"Chamber/Caucus: \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ chamber }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                            </StackLayout>\n                            <StackLayout row=\"0\" col=\"1\" verticalAlignment=\"middle\">\n                                <Switch id=\"checkedSwitch\" row=\"0\" col=\"1\" checked=\"{{ checked }}\" \n                                    loaded=\"onSwitchLoaded\" horizontalAlignment=\"right\" class=\"switch\" />\n                                <Label id=\"indexLabel\" text=\"{{ $index }}\" visibility=\"collapse\" />\n                            </StackLayout>\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"1\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ResponseViewModel = __webpack_require__(150);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;

var responseList = new ResponseViewModel([]);
var responseIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    responseIndex: responseIndex,
    responseList: responseList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;

        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");

        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;
        
        var surveyTitle = navigationContext.boundData.survey;
        var maxLength = 20;

        if (surveyTitle.length > maxLength) {
            for (var i = maxLength; i > 0; i--) {
                var position = surveyTitle.indexOf(" ", i);

                if (position > -1 && position <= maxLength) {
                    surveyTitle = surveyTitle.substr(0, position) + "..."

                    break;
                }
            }
        }

        page.actionBar.title = surveyTitle;

        pageData.boundData = navigationContext.boundData;
        pageData.boundData.result = "";

        responseList.empty();

        if (responseList.Items.length === 0) {
            pageData.set("isLoading", true);
    
            responseList.load(pageData.boundData.surveyQuestionId).then(function () {
                responseIndex = 0;

                if (pageData.boundData.responseId.toString().length > 0) {
                    pageData.responseList = responseList;

                    var i;

                    for (i = 0; i < responseList.List.length; i++) {
                        if (pageData.responseList.List.getItem(i).responseId === pageData.boundData.responseId) {
                            responseIndex = i;
                        }
                    }
                }

                pageData.responseIndex = responseIndex;

                page.bindingContext = pageData;

                pageData.set("isLoading", false);
            });
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var responseListPicker = page.getViewById("responseListPicker");
        
        responseListPicker.on("selectedIndexChange", function(args) {
            var responseLabel = page.getViewById("responseLabel");

            responseLabel.text = pageData.responseList.Items.getItem(args.object.selectedIndex);
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        if (platform.isAndroid) {
            var comments = page.getViewById("comments");

            comments.dismissSoftInput();
        }

        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onGridLayoutTap(args) {
    try {
        if (platform.isAndroid) {
            var comments = page.getViewById("comments");

            comments.dismissSoftInput();
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onStackLayoutTap(args) {
    try {
        if (platform.isAndroid) {
            var comments = page.getViewById("comments");

            comments.dismissSoftInput();
        }

        var responseListPickerGridLayout = page.getViewById("responseListPickerGridLayout");
        
        if (responseListPickerGridLayout.visibility === "collapse") {
            responseListPickerGridLayout.visibility = "visible";

            page.addCss("#responseLabel {color: #cc2d30;}");
        } else {
            responseListPickerGridLayout.visibility = "collapse";

            page.addCss("#responseLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSaveTap(args) {
    if (platform.isAndroid) {
        var comments = page.getViewById("comments");

        comments.dismissSoftInput();
    }

    var responseListPicker = page.getViewById("responseListPicker");

    pageData.boundData.responseId = pageData.responseList.List.getItem(responseListPicker.selectedIndex).responseId;
    pageData.boundData.response = pageData.responseList.List.getItem(responseListPicker.selectedIndex).response;
    
    var result;

    http.request({
        url: global.apiBaseServiceUrl + "updatelegislatorsurvey",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData.boundData)
    }).then(function (response) {
        pageData.boundData.result = "Update";

        frameModule.topmost().goBack();
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;
exports.onStackLayoutTap = onStackLayoutTap;
exports.onSaveTap = onSaveTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8).Observable;
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function ResponseViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function(surveyQuestionId) {
        return http.request({
            url: global.apiBaseServiceUrl + "surveyresponseset?surveyQuestionId=" + surveyQuestionId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(response) {
                viewModel.Items.push(
                    response.Response
                );

                viewModel.List.push({
                    responseId: response.ResponseId,
                    response: response.Response
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = ResponseViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onSaveTap\" ios.systemIcon=\"3\" android.systemIcon=\"ic_menu_save\" ios.position=\"right\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\" tap=\"onGridLayoutTap\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\" visibility=\"{{ boundData.relationalType === 'legislator' ? 'visible' : 'collapse' }}\">\n            <Label id=\"legislatorId\" text=\"\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"{{ boundData.surveyQuestion }}\" textWrap=\"true\" class=\"list-view-item-left\" />\n            </GridLayout>\n            <StackLayout tap=\"onStackLayoutTap\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Response\" class=\"list-view-item-left\" />\n                    <Label id=\"responseLabel\" row=\"0\" col=\"1\" text=\"{{ boundData.response }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <GridLayout id=\"responseListPickerGridLayout\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"collapse\">\n                <ListPicker id=\"responseListPicker\" row=\"0\" col=\"0\" items=\"{{ responseList.Items }}\" selectedIndex=\"{{ responseIndex }}\" horizontalAlignment=\"center\" class=\"list-view-item-picker\"></ListPicker>\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Follow Up Required?\" class=\"list-view-item-left\" />\n                <Switch row=\"0\" col=\"1\" checked=\"{{ boundData.followUpRequired }}\" horizontalAlignment=\"right\" class=\"switch\" />\n            </GridLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Comments/Observations\" class=\"list-view-item-left\" />\n            </GridLayout> -->\n            <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form\">\n                <TextView id=\"comments\" row=\"0\" col=\"0\" text=\"{{ boundData.comments }}\" hint=\"Comments/Observations\" class=\"list-view-item-textview\" />\n            </GridLayout>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

const SurveyViewModel = __webpack_require__(153);
const ObservableModule = __webpack_require__(8);
const appModule = __webpack_require__(27);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;
var model;
var navigationContext;

var surveyList = new SurveyViewModel([]);

var pageData = new ObservableModule.fromObject({
    boundData: null,
    surveyList: surveyList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;

        var surveyTitle = navigationContext.survey;
        var maxLength = 20;

        if (surveyTitle.length > maxLength) {
            for (var i = maxLength; i > 0; i--) {
                var position = surveyTitle.indexOf(" ", i);

                if (position > -1 && position <= maxLength) {
                    surveyTitle = surveyTitle.substr(0, position) + "..."

                    break;
                }
            }
        }

        //page.actionBar.title = "Survey";
        page.actionBar.title = surveyTitle;

        pageData.boundData = navigationContext;

        const boolTextConverter = (value) => {
            var result = "No";

            if (value) {
                result = "Yes";
            }

            return result;
        };

        appModule.getResources().boolTextConverter = boolTextConverter;

        if (args.isBackNavigation) {
            if (model.result === "Update") {
                surveyList.empty();
            
                if (surveyList.length === 0) {
                    pageData.set("isLoading", true);
            
                    surveyList.load(navigationContext.legislatorId, navigationContext.surveyId).then(function () {
                        pageData.set("isLoading", false);
                    });
                }
            
                page.bindingContext = pageData;
            }
        } else {
            navigationContext = page.navigationContext;

            var legislatorId = page.getViewById("legislatorId");
            var legislatorName = page.getViewById("legislatorName");

            legislatorId.text = navigationContext.legislatorId;
            legislatorName.text = navigationContext.fullName;

            surveyList.empty();
            
            pageData.set("isLoading", true);
    
            surveyList.load(navigationContext.legislatorId, navigationContext.surveyId).then(function () {
                pageData.set("isLoading", false);
            });
        
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try
    {
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");
        var view = args.view;

        model = view.bindingContext;
        model.relationalType = navigationContext.relationalType;
        model.relationalId = navigationContext.relationalId;
        //dialogs.alert(view.bindingContext.surveyQuestion);

        const navigationEntry = {
            moduleName: "legislators/legislator/surveys/survey/question/question-page",
            context: { 
                legislatorId: legislatorId.text,
                fullName: legislatorName.text,
                boundData: model
            },
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function SurveyViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(legislatorId, surveyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "legislatorsurvey?legislatorId=" + legislatorId + "&surveyId=" + surveyId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(surveyQuestion) {
                var followUpRequired = false;

                if (surveyQuestion.FollowUpRequired === "true") {
                    followUpRequired = true;
                }

                viewModel.push({
                    legislatorId: surveyQuestion.LegislatorId,
                    fullName: surveyQuestion.FullName,
                    surveyId: surveyQuestion.SurveyId,
                    survey: surveyQuestion.Survey,
                    surveyQuestionId: surveyQuestion.SurveyQuestionId,
                    surveyQuestion: surveyQuestion.SurveyQuestion,
                    initiativeIds: surveyQuestion.InitiativeIds,
                    initiatives: surveyQuestion.Initiatives,
                    responseId: surveyQuestion.ResponseId,
                    response: surveyQuestion.Response,
                    followUpRequired: followUpRequired,
                    comments: surveyQuestion.Comments,
                    editorId: surveyQuestion.EditorId,
                    editor: surveyQuestion.Editor,
                    modifiedDate: surveyQuestion.ModifiedDate
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = SurveyViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\" visibility=\"{{ boundData.relationalType === 'legislator' ? 'visible' : 'collapse' }}\">\n            <Label id=\"legislatorId\" text=\"\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ surveyList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\">\n                                <Label text=\"{{ surveyQuestion }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                <Label text=\"Survey Question Response\" class=\"list-view-item-sub\" style=\"font-style: italic;\" horizontalAlignment=\"center\" />\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"Response: \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ response }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"Follow Up Required? \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ followUpRequired | boolTextConverter() }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                                <StackLayout direction=\"horizontal\">\n                                    <Label row=\"0\" col=\"0\" text=\"Comments/Observations: \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ comments }}\" textWrap=\"true\" class=\"list-view-item-sub\" visibility=\"{{ comments === null || comments.length === 0 ? 'collapse' : 'visible' }}\" />\n                                </StackLayout>\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

const SurveysViewModel = __webpack_require__(156);
const observableModule = __webpack_require__(8);
const appModule = __webpack_require__(27);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;
var navigationContext;

var surveysActive;

var surveysList = new SurveysViewModel([]);

var pageData = new observableModule.fromObject({
    boundData: null,
    surveysList: surveysList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        page.actionBar.title = "Surveys";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");

        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;

        if (args.isBackNavigation) {
            surveysList.empty();

            pageData.set("isLoading", true);

            surveysList.load(navigationContext.legislatorId, navigationContext.meetingId, surveysActive).then(function () {
                pageData.set("isLoading", false);
            });
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSelectedIndexChanged(args) {
    try {
        if (args.newIndex === 0) {
            surveysActive = "Y";
        }
        else {
            surveysActive = "N";
        }

        surveysList.empty();

        pageData.set("isLoading", true);

        surveysList.load(navigationContext.legislatorId, navigationContext.meetingId, surveysActive).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onAddTap(args) {
    try {
        pageData.boundData.relationalType = "meeting";
        pageData.boundData.relationalId = pageData.boundData.meetingId;
        
        const navigationEntry = {
            moduleName: "legislators/legislator/surveys/select/select-page",
            context: pageData.boundData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try
    {
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");
        var index = args.index;
        var item = surveysList.getItem(index);

        const navigationEntry = {
            moduleName: "legislators/legislator/surveys/survey/survey-page",
            context: { 
                surveyId: item.surveyId,
                survey: item.survey,
                legislatorId: legislatorId.text,
                fullName: legislatorName.text,
                relationalType: navigationContext.relationalType,
                relationalId: navigationContext.relationalId
            },
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onAddTap = onAddTap;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function SurveysViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(legislatorId, meetingId, surveysActive) {
        var url = global.apiBaseServiceUrl + "legislatorsurveys?legislatorId=" + legislatorId;

        if (meetingId !== null) {
            url += "&meetingId=" + meetingId;
        }

        url += "&active=" + surveysActive;

        return http.request({
            url: url, //global.apiBaseServiceUrl + "legislatorsurveys?legislatorId=" + legislatorId + "&active=" + surveysActive,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(survey) {
                var questionCount = "(" + survey.QuestionCount + " survey questions)";

                viewModel.push({
                    legislatorId: survey.LegislatorId,
                    fullName: survey.FullName,
                    surveyId: survey.SurveyId,
                    survey: survey.Survey,
                    initiativeIds: survey.InitiativeIds,
                    initiatives: survey.Initiatives,
                    year: survey.Year,
                    chamber: survey.Chamber,
                    questionCount: questionCount
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = SurveysViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onAddTap\" ios.systemIcon=\"4\" android.systemIcon=\"ic_menu_add\" ios.position=\"right\" \n            visibility=\"{{ boundData.relationalType === 'legislator' ? 'collapse' : 'visible' }}\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\" visibility=\"{{ boundData.relationalType === 'legislator' ? 'visible' : 'collapse' }}\">\n            <Label id=\"legislatorId\" text=\"\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Current Surveys\" />\n                    <SegmentedBarItem title=\"Archived Surveys\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ surveysList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\">\n                                <Label text=\"{{ survey }}\" class=\"list-view-item-main-top\" />\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"Initiative(s): \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ initiatives }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"Session Year: \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ year }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                                <GridLayout columns=\"auto, *\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"Chamber/Caucus: \" class=\"list-view-item-sub-title\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ chamber }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                                <Label text=\"{{ questionCount }}\" class=\"list-view-item-sub\" />\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const LegislatorsViewModel = __webpack_require__(159);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var gestures = __webpack_require__(57);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

const MIN_X = -160;
const MAX_X = 0;
const THRESHOLD = 0.25;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
// var view;
var searchBar;
var legislatorsPageSize = 25;
var legislatorsSearchText = "";
var legislatorsSearchSubmitted = false;

var legislatorsList = new LegislatorsViewModel([]);

var pageData = new ObservableModule.fromObject({
    legislatorsList: legislatorsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Legislators";

        if (legislatorsSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = legislatorsSearchText;
        }
        
        if (legislatorsList.length === 0) {
            pageData.set("isLoading", true);

            legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function () {
                pageData.set("isLoading", false);
            });
        }

        page.bindingContext = pageData;

        // var observerTap = page.observe(gestures.GestureTypes.tap, function (args) {
        //     searchBar.dismissSoftInput(); })
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

// function onViewLoaded(args) {
//     view = args.object;
//     page = view.page;
    
//     page.actionBar.title = "Legislators";

//     //legislatorsList.empty();
    
//     if (legislatorsList.length === 0) {
//         viewData.set("isLoading", true);

//         legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function () {
//             viewData.set("isLoading", false);
//         });

//         view.bindingContext = viewData;
//     }

//     // var observerTap = page.observe(gestures.GestureTypes.tap, function (args) {
//     //     searchBar.dismissSoftInput(); })
// }

// function onViewUnloaded(args) {

// }

function onSearchBarLoaded(args) {
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
        //searchBar.ios.animated = true;
        // searchbar.ios.setShowsCancelButtonAnimated(true, true);
    }
}

function onSubmit(args) {
    searchBar = args.object;

    legislatorsSearchText = searchBar.text.trim();

    legislatorsList.empty();
    
    pageData.set("isLoading", true);

    legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function (){
        pageData.set("isLoading", false);

        legislatorsSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    legislatorsSearchText = "";

    if (legislatorsSearchSubmitted) {
        legislatorsList.empty();
        
        pageData.set("isLoading", true);

        legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function (){
            pageData.set("isLoading", false);

            legislatorsSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    }
}

// function onButtonTap(args) {
//     searchBar.ios.showsCancelButton = !searchBar.ios.showsCancelButton;
// }

function onItemTap(args) {
    try {
        if (platform.isIOS) {
            if (swipeOpen) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 200
                });

                swipeOpen = false;
            } else {
                var view = args.view;
                var model = view.bindingContext;

                const navigationEntry = {
                    moduleName: "legislators/legislator/legislator-page",
                    context: model,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadMoreItems(args) {
    try {
        var legislatorsListCount = legislatorsList.length;
        var legislatorsPageNumber = Math.ceil(legislatorsListCount / legislatorsPageSize) + 1;
        var legislatorsRemainder = legislatorsListCount % legislatorsPageSize;

        if (legislatorsRemainder !== 0 && legislatorsRemainder < legislatorsPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        legislatorsList.load(legislatorsSearchText, legislatorsPageNumber, legislatorsPageSize).then(function (){
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onAddClick(args) {
    var view = args.object;

    var model = {
        meetingId: 0,
        meetingDate: new Date(),
        venueTypeId: 1,
        venueType: "In Person",
        attendeeTypeId: 1,
        attendeeType: "Staff Only",
        lobbyistId: global.personId,
        lobbyist: null,
        legislatorId: view.bindingContext.legislatorId,
        fullName: view.bindingContext.fullName,
        name: null,
        pciInitiatives: null,
        surveys: null,
        pciAttendees: global.currentUser,
        primaryOfficeContact: null,
        meetingLocationId: 2,
        location: "Meeting in DC",
        legislatorStaffAttendees: null,
        followUpNeeded: false,
        followUpDate: null,
        followUpNotes: null,
        creatorId: global.personId,
        notes: null,
        initiativeId: null,
        surveyId: null,
        assignmentId: null
    }

    const navigationEntry = {
        moduleName: "meetings/meeting/meeting-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);

    if (swipeOpen) {
        swipedItem.animate({
            translate: { x: 0, y: 0 },
            duration: 200
        });

        swipeOpen = false;
    }
}

function onViewClick(args) {
    var view = args.object;
    var model = view.bindingContext;

    model.reference = "nav";
    model.relationalType = "legislator";
    model.relationalId = view.bindingContext.legislatorId;

    const navigationEntry = {
        moduleName: "meetings/meetings-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);

    if (swipeOpen) {
        swipedItem.animate({
            translate: { x: 0, y: 0 },
            duration: 200
        });

        swipeOpen = false;
    }
}

function onLayoutLoaded(args) {
    var layout = args.object;

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
            try {
                if (swipeOpen) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 200
                    });
        
                    swipeOpen = false;
                } else {
                    var view = args.view;
                    var model = view.bindingContext;
        
                    const navigationEntry = {
                        moduleName: "legislators/legislator/legislator-page",
                        context: model,
                        clearHistory: false
                    };
        
                    frameModule.topmost().navigate(navigationEntry);
                }
            }
            catch(e)
            {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            }
        });
    }

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                var legislatorsListView = page.getViewById("legislatorsListView");

                if (platform.isAndroid) {
                    legislatorsListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    legislatorsListView.ios.scrollEnabled = false;
                }

                swipeOpen = true;
                swipedItem = layout;

                var newX = layout.translateX + args.deltaX;

                if (newX >= MIN_X && newX <= MAX_X) {
                    layout.translateX = newX;
                }
                
                if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                    // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                    let destX = 0;
                    
                    // if user hit or crossed the THESHOLD either way, let's finish in that direction
                    if (newX <= MIN_X * THRESHOLD) {
                        destX = MIN_X;
                    } else if (newX >= MAX_X * THRESHOLD) {
                        destX = MAX_X;
                    }
                    
                    layout.animate({
                        translate: { x: destX, y: 0 },
                        duration: 200
                    });

                    if (platform.isAndroid) {
                        legislatorsListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        legislatorsListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
// exports.onViewLoaded = onViewLoaded;
// exports.onViewUnloaded = onViewUnloaded;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
// exports.onButtonTap = onButtonTap;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onAddClick = onAddClick;
exports.onViewClick = onViewClick;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function LegislatorsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "legislatorfilter?filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(legislator) {
                if (legislator.LegislatorId !== null && legislator.LegislatorId !== 0) {
                    viewModel.push({
                        legislatorId: legislator.LegislatorId,
                        bioguideId: legislator.BioguideId,
                        birthdate: legislator.Birthdate,
                        chamber: legislator.Chamber,
                        fullName: legislator.FullName,
                        district: legislator.District,
                        facebookId: legislator.FacebookId,
                        fax: legislator.Fax,
                        combinedName: legislator.LastName + ", " + legislator.FirstName + " " + legislator.MiddleName,
                        firstName: legislator.FirstName,
                        lastName: legislator.LastName,
                        middleName: legislator.MiddleName,
                        gender: legislator.Gender,
                        inOffice: legislator.InOffice,
                        office: legislator.Office,
                        party: legislator.Party,
                        partyName: legislator.PartyName,
                        phone: legislator.Phone,
                        state: legislator.State,
                        stateName: legislator.StateName,
                        stateRank: legislator.StateRank,
                        termStart: legislator.TermStart,
                        termEnd: legislator.TermEnd,
                        title: legislator.Title,
                        titleName: legislator.TitleName,
                        twitterId: legislator.TwitterId,
                        website: legislator.Website,
                        youTubeUrl: legislator.YouTubeUrl,
                        bio: legislator.BioPlainText,
                        imageUrl: legislator.PictureUrl,
                        description: legislator.Description
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = LegislatorsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\" />\n    \n<!-- <StackLayout loaded=\"onViewLoaded\" unloaded=\"onViewUnloaded\"> -->\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" direction=\"horizontal\">\n            <SearchBar row=\"0\" col=\"0\" id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n            <!-- <Button tap=\"onButtonTap\" text=\"Toggle Cancel\" /> -->\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView id=\"legislatorsListView\" items=\"{{ legislatorsList }}\" itemLoading=\"onItemLoading\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <AbsoluteLayout>\n                        <!-- BACKGROUND: Swipe Actions -->\n                        <GridLayout columns=\"*, 80, 80\" rows=\"54\" width=\"100%\">\n                            <Label col=\"0\" />\n                            <GridLayout col=\"1\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onAddClick\" class=\"swipe-icons orange\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf073;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Add Meeting\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                            <GridLayout col=\"2\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onViewClick\" class=\"swipe-icons blue\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf2b5;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Meetings\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                        </GridLayout>\n                        <!-- FOREGROUND: List View Item Details -->\n                        <StackLayout loaded=\"onLayoutLoaded\" backgroundColor=\"white\" width=\"100%\">\n                            <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\" height=\"54\">\n                                <Label row=\"0\" col=\"0\" text=\"{{ combinedName }}\" class=\"list-view-item-main-top\" verticalAlignment=\"middle\" />\n                                <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                            </GridLayout>\n                        </StackLayout>\n                    </AbsoluteLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n<!-- </StackLayout> -->\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

const LoginViewModel = __webpack_require__(162);
const platformModule = __webpack_require__(13);
const observableModule = __webpack_require__(8);
const appSettings = __webpack_require__(44);
const dialogs = __webpack_require__(14);
var utilsModule = __webpack_require__(163);
const fingerprintAuthPlugin = __webpack_require__(338);
var fingerprintAuth = new fingerprintAuthPlugin.FingerprintAuth();
var orientation = __webpack_require__(164);
var page;
var loginViewModel;
var email;
var password;
var rememberMe;

function onNavigatingTo(args) {
    orientation.disableRotation();
}

function onLoaded(args)
{
    page = args.object;

    loginViewModel = new LoginViewModel();

    loginViewModel.email = appSettings.getString("email", "");
    loginViewModel.password = appSettings.getString("password", "");
    loginViewModel.rememberMe = appSettings.getBoolean("rememberMe", false);
    loginViewModel.useTouchId = appSettings.getBoolean("useTouchId", false);

    page.bindingContext = loginViewModel;
}

function onNavigatedTo(args)
{
    try {
        if (platformModule.isIOS) {
            if (loginViewModel.useTouchId)
            {
                fingerprintAuth.available().then(
                    fingerprintAuth.verifyFingerprint({
                        message: 'Log on to view legislator information' // optional, shown in the fingerprint dialog (default: 'Scan your finger').
                    }).then(
                        () => {
                            const bindingContext = page.bindingContext;

                            bindingContext.signIn(null);
                        },
                        error => {
                            // when error.code === -3, the user pressed the button labeled with your fallbackMessage
                            dialogs.alert("Fingerprint NOT OK. Error code: " + error.code + ". Error message: " + error.message);
                        }
                    )
                );
            }
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSigninButtonTap(args) {
    try {
        let button = args.object;

        email = button.page.getViewById("email");
        password = button.page.getViewById("password");
        rememberMe = button.page.getViewById("rememberMe");

        appSettings.setBoolean("rememberMe", rememberMe.checked);

        if (rememberMe.checked)
        {
            appSettings.setString("email", email.text);
            appSettings.setString("password", password.text);
        }
        else
        {
            appSettings.setBoolean("useTouchId", false);
            appSettings.setString("email", "");
            appSettings.setString("password", "");
        }

        var scanType;

        fingerprintAuth.available().then((result) => 
        {
            if (result.touch) {
                scanType = "touch";
            }
            else
            {
                scanType = "face"
            }

            loginViewModel.signIn(scanType);
        }).catch((e) =>
        {
            scanType = null;

            loginViewModel.signIn(scanType);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onForgotPasswordTap() {
    utilsModule.openUrl("https://www.apci.org/forgotpassword")
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onNavigatedTo = onNavigatedTo;
exports.onSigninButtonTap = onSigninButtonTap;
exports.onForgotPasswordTap = onForgotPasswordTap;
; 
if (false ) {} 

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const platformModule = __webpack_require__(13);
const observableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var appSettings = __webpack_require__(44);
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",
        rememberMe: false,
        useTouchId: false,

        signIn: function(scanType) {
            const email = this.email;
            const password = this.password;

            // dialogs.alert(global.token + "\nisPci: " + global.isPci + "\nisCongressAdmin: " + global.isCongressAdmin + 
            //     "\nisCongressUser: " + global.isCongressUser + "\nisCongressExternalUser: " + global.isCongressExternalUser + 
            //     "\npersonId: " + global.personId + "\ncompanyId: " + global.companyId + "\ncurrentUser: " + global.currentUser);

            http.request({
                url: global.apiLoginUrl,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({ EmailAddress: email, Password: password, Scope: global.scope })
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);

                if (data.AccessToken !== undefined && data.AccessToken !== null)
                {
                    global.token = data.AccessToken;
                    
                    var pciEveryonePosition = global.token.toLowerCase().indexOf("pci.everyone");

                    if (pciEveryonePosition > 0)
                    {
                        global.isPci = true;
                    }

                    var congressUserPosition = global.token.toLowerCase().indexOf("congress+user");
                    var congressExternalUserPosition = global.token.toLowerCase().indexOf("congress+external+user");
                    var congressAdminPosition = global.token.toLowerCase().indexOf("congress+admin");

                    if (congressAdminPosition > 0)
                    {
                        global.isCongressAdmin = true;
                    }
                    else if (congressUserPosition > 0)
                    {
                        global.isCongressUser = true;
                    }
                    else if (congressExternalUserPosition > 0)
                    {
                        global.isCongressExternalUser = true;
                    }

                    if (global.isCongressAdmin || global.isCongressUser || global.isCongressExternalUser)
                    {
                        var personIdPosition = token.toLowerCase().indexOf("&personid=") + 10;
                        var firstNamePosition = token.toLowerCase().indexOf("&firstname=");

                        global.personId = token.slice(personIdPosition, firstNamePosition);

                        var fullNamePosition = token.toLowerCase().indexOf("&fullname=") + 10;
                        var streetAddress1Position = token.toLowerCase().indexOf("&streetaddress1=");

                        global.currentUser = decodeURIComponent(token.slice(fullNamePosition, streetAddress1Position)).replace("+", " ");

                        var companyIdPosition = token.toLowerCase().indexOf("&companyid=") + 11;
                        var deptIdPosition = token.toLowerCase().indexOf("&deptid=");

                        global.companyId = token.slice(companyIdPosition, deptIdPosition);

                        const navigationEntry = {
                            moduleName: "main-page", // "home/home-page",
                            clearHistory: true
                        };

                        var useTouchId = appSettings.getBoolean("useTouchId", false);
                        var rememberMe = appSettings.getBoolean("rememberMe", false);

                        if ((useTouchId === undefined || useTouchId === null || useTouchId === false) && scanType === "touch" && rememberMe && platformModule.isIOS)
                        {
                            dialogs.confirm(
                                {
                                    title: "Touch ID for \"LegCon\"",
                                    message: "Would you like to use the fingerprint scanner to log on in the future?",
                                    okButtonText: "Yes",
                                    cancelButtonText: "No"
                                }
                            ).then(function (result) {
                                if (result)
                                {
                                    appSettings.setBoolean("useTouchId", true);

                                    try
                                    {
                                        frameModule.topmost().navigate(navigationEntry);
                                    }
                                    catch(e)
                                    {
                                        dialogs.alert({
                                            title: "Error",
                                            message: e.toString(),
                                            okButtonText: "OK"
                                        });
                                    }
                                }
                                else
                                {
                                    appSettings.setBoolean("useTouchId", false);

                                    try
                                    {
                                        frameModule.topmost().navigate(navigationEntry);
                                    }
                                    catch(e)
                                    {
                                        dialogs.alert({
                                            title: "Error",
                                            message: e.toString(),
                                            okButtonText: "OK"
                                        });
                                    }
                                }
                            });
                        }
                        else if ((useTouchId === undefined || useTouchId === null || useTouchId === false) && scanType === "face" && rememberMe && platformModule.isIOS)
                        {
                            appSettings.setBoolean("useTouchId", true);
                        }
                        else
                        {
                            try
                            {
                                frameModule.topmost().navigate(navigationEntry);
                            }
                            catch(e)
                            {
                                dialogs.alert({
                                    title: "Error",
                                    message: e.toString(),
                                    okButtonText: "OK"
                                });
                            }
                        }
                    }
                    else
                    {
                        dialogs.alert("Unauthorized user account.");
                    }
                }
                else
                {
                    // undefined or null data.AccessToken returned.  
                    // Usually the result of invalid user name and password.
                    dialogs.alert("Invalid email address or password.")
                }
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page class=\"page\" navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" navigatedTo=\"onNavigatedTo\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" style=\"margin-top: 0;\">\n    <ScrollView class=\"login-background\">\n        <GridLayout columns=\"*\" rows=\"*, auto, auto, auto, auto, auto\" height=\"100%\" width=\"100%\">\n            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n                <Image src=\"res://login\" android:stretch=\"aspectFill\" ios:stretch=\"none\"></Image>\n            </StackLayout>\n            <StackLayout row=\"1\" col=\"0\" orientation=\"vertical\" backgroundColor=\"#eee\" verticalAlignment=\"bottom\" margin=\"0 10 0 10\" borderRadius=\"5\">\n                <StackLayout orientation=\"horizontal\" class=\"login-field\">\n                    <StackLayout width=\"10%\" verticalAlignment=\"center\">\n                        <Image src=\"res://email\" android:stretch=\"aspectFill\" ios:stretch=\"none\"></Image>\n                    </StackLayout>\n                    <StackLayout width=\"90%\" verticalAlignment=\"center\">\n                        <TextField id=\"email\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\" autocapitalization=\"none\"\n                            text=\"{{ email }}\" width=\"100%\" textAlignment=\"left\"></TextField>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row=\"2\" col=\"0\" orientation=\"vertical\" backgroundColor=\"#eee\" verticalAlignment=\"bottom\" margin=\"5 10 0 10\" borderRadius=\"5\">\n                <StackLayout orientation=\"horizontal\" class=\"login-field\">\n                    <StackLayout width=\"10%\" verticalAlignment=\"center\">\n                        <Image src=\"res://password\" android:stretch=\"aspectFill\" ios:stretch=\"none\"></Image>\n                    </StackLayout>\n                    <StackLayout width=\"90%\" verticalAlignment=\"center\">\n                        <TextField id=\"password\" hint=\"Password\" secure=\"true\" autocorrect=\"false\" autocapitalization=\"none\"\n                            text=\"{{ password }}\" width=\"100%\" textAlignment=\"left\"></TextField>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row=\"3\" col=\"0\" orientation=\"vertical\" backgroundColor=\"#eee\" verticalAlignment=\"bottom\" margin=\"5 10 0 10\" borderRadius=\"5\">\n                <StackLayout orientation=\"horizontal\" class=\"login-field-switch\">\n                    <StackLayout width=\"40%\" verticalAlignment=\"center\">\n                        <Label text=\"Remember Me\" horizontalAlignment=\"left\" />\n                    </StackLayout>\n                    <StackLayout width=\"60%\" verticalAlignment=\"center\">\n                        <Switch id=\"rememberMe\" checked=\"{{ rememberMe }}\" horizontalAlignment=\"right\" class=\"switch\" />\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row=\"4\" col=\"0\" orientation=\"vertical\" verticalAlignment=\"top\" margin=\"0 10 0 10\">\n                <Button class=\"login-button\" text=\"Sign In\" tap=\"onSigninButtonTap\"></Button>\n            </StackLayout>\n            <StackLayout row=\"5\" col=\"0\" orientation=\"vertical\" verticalAlignment=\"top\" margin=\"5 10 30 10\">\n                <Button class=\"forgot-button\" text=\"Forgot Password?\" tap=\"onForgotPasswordTap\"></Button>\n            </StackLayout>\n        </GridLayout>\n    </ScrollView>\n</Page>"; 
if (false ) {} 

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

const application = __webpack_require__(27);
var frame = __webpack_require__(17);
var gridLayout = __webpack_require__(82);
var stackLayout = __webpack_require__(58)
var Label = __webpack_require__(43).Label;
var orientation = __webpack_require__(164);

var page;

function onNavigatingTo(args) {
    orientation.enableRotation();
    page = args.object;
    page._tabs = [];

    page.tabItems = [
        { path: "legislators/legislators-page", iconCode: "\uf19c", label: "Legislators" },
        { path: "committees/committees-page", iconCode: "\uf0c0", label: "Committees" },
        { path: "meetings/meetings-page", iconCode: "\uf2b5", label: "My Meetings" },
        { path: "assignments/assignments-page", iconCode: "\uf03a", label: "Assignments" }
    ];

    var numItems = page.tabItems.length;

    var newGrid = new gridLayout.GridLayout();

    newGrid.id = "tab-navigation";

    newGrid.addRow(new gridLayout.ItemSpec(1, "star"));
    newGrid.addRow(new gridLayout.ItemSpec(1, "auto"));
    
    for (var i = 0; i < numItems; i++) {
        newGrid.addColumn(new gridLayout.ItemSpec(1, "star"));
    }
    
    var frameHolder = new stackLayout.StackLayout();
    
    page.navFrame = new frame.Frame();

    page.navFrame.id = "navigation-frame";
    page.navFrame.className = "navigation-frame";

    frameHolder.addChild(page.navFrame);

    newGrid.addChild(frameHolder);

    gridLayout.GridLayout.setColumn(frameHolder, 0);
    gridLayout.GridLayout.setRow(frameHolder, 0);
    gridLayout.GridLayout.setColumnSpan(frameHolder, numItems);

    for (var i = 0; i < numItems; i++) {
        var currentItem = page.tabItems[i];
        var tab = new stackLayout.StackLayout();

        tab.direction = "vertical";

        if (i === 0) {
            tab.className = "tab tab-selected";
        } else {
            tab.className = "tab";
        }

        tab.id = "tab_" + i;
        
        tab.on("tap", function (args) {
            return onTabSelected(args, currentItem);
        })

        var icon = new Label();

        icon.className = 'tab-icon';

        //icon.text = String.fromCharCode(currentItem.iconCode)
        icon.text = currentItem.iconCode;
        tab.addChild(icon);

        var label = new Label();

        label.className = 'tab-label';
        label.text = currentItem.label;
        tab.addChild(label);

        page._tabs.push(tab);
        newGrid.addChild(tab);

        gridLayout.GridLayout.setRow(tab, 1);
        gridLayout.GridLayout.setColumn(tab, i);
    }

    page.content = newGrid;

    const dateConverter = (value, format) => {
        let result = format;

        if (value === null) {
            //result = "";
        } else {
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? `0${day}` : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? `0${month}` : month);
            result = result.replace("YYYY", value.getFullYear());
        }

        return result;
    };

    application.getResources().dateConverter = dateConverter;
    application.getResources().dateFormat = "MM/DD/YYYY";

    var navigationEntry = {
        moduleName: page.tabItems[0].path,
        context: {
            reference: "tab"
        },
        clearHistory: true
    }

    page.navFrame.navigate(navigationEntry);
    //page.navFrame.navigate(page.tabItems[0].path);
}

function onTabSelected(args) {
    var selectedTab = args.object;
    var index = selectedTab.id.substring(selectedTab.id.indexOf("tab_") + 4);

    if (selectedTab.className.indexOf("tab-selected") > -1) {
        var currentFrame = page.getViewById("navigation-frame");
        
        if (page.tabItems[index].label === currentFrame.currentPage.actionBar.title) {
            return;
        }
    }

    page._tabs.forEach(function(tab) {
        tab.className = 'tab';
    });

    selectedTab.className = 'tab tab-selected';

    showTab(page.tabItems[index]);
}

function showTab(tabItem) {
    var navigationEntry = {
        moduleName: tabItem.path,
        context: {
            reference: "tab"
        },
        clearHistory: true
    }

    page.navFrame.navigate(navigationEntry)
}

exports.onNavigatingTo = onNavigatingTo;
; 
if (false ) {} 

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" backgroundSpanUnderStatusBar=\"true\" actionBarHidden=\"true\" navigatingTo=\"onNavigatingTo\">\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const AttendeeTypeViewModel = __webpack_require__(169);
const ObservableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;
var attendeeTypeList = new AttendeeTypeViewModel([]);

var attendeeTypeIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    attendeeTypeIndex: attendeeTypeIndex,
    attendeeTypeList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Cong. Office Attendees";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.attendeeTypeList === undefined) {
            pageData.set("isLoading", true);

            attendeeTypeList.load().then(function () {
                global.attendeeTypeList = attendeeTypeList;

                pageData.attendeeTypeList = global.attendeeTypeList;

                attendeeTypeIndex = 0;

                if (pageData.boundData.attendeeTypeId !== null && pageData.boundData.attendeeTypeId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.attendeeTypeList.List.length; i++) {
                        if (pageData.attendeeTypeList.List.getItem(i).attendeeTypeId === pageData.boundData.attendeeTypeId) {
                            attendeeTypeIndex = i;
                        }
                    }
                }

                pageData.attendeeTypeIndex = attendeeTypeIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.attendeeTypeList = global.attendeeTypeList;
            
            attendeeTypeIndex = 0;

            if (pageData.boundData.attendeeTypeId !== null && pageData.boundData.attendeeTypeId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.attendeeTypeList.List.length; i++) {
                    if (pageData.attendeeTypeList.List.getItem(i).attendeeTypeId === pageData.boundData.attendeeTypeId) {
                        attendeeTypeIndex = i;
                    }
                }
            }

            pageData.attendeeTypeIndex = attendeeTypeIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var attendeeTypeListPicker = page.getViewById("attendeeTypeListPicker");
        
        attendeeTypeListPicker.on("selectedIndexChange", function(args) {
            var attendeeTypeItem = pageData.attendeeTypeList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(attendeeTypeItem.attendeeTypeId + ": " + attendeeTypeItem.attendeeType);
            pageData.boundData.attendeeTypeId = attendeeTypeItem.attendeeTypeId;
            pageData.boundData.attendeeType = attendeeTypeItem.attendeeType;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8).Observable;
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function AttendeeTypeViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "meetingattendeetypes",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(attendeeType) {
                viewModel.Items.push(
                    attendeeType.Type
                );

                viewModel.List.push({
                    attendeeTypeId: attendeeType.AttendeeTypeId,
                    attendeeType: attendeeType.Type
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = AttendeeTypeViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <GridLayout row=\"1\" col=\"0\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n            <ListPicker id=\"attendeeTypeListPicker\" row=\"0\" col=\"0\" items=\"{{ attendeeTypeList.Items }}\" selectedIndex=\"{{ attendeeTypeIndex }}\" \n                horizontalAlignment=\"center\" class=\"list-view-item-picker\"></ListPicker>\n        </GridLayout>\n        <StackLayout row=\"2\" col=\"0\" height=\"100%\" class=\"list-view-section-header\"></StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

const platform = __webpack_require__(13);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Follow Up";

        navigationContext = page.navigationContext;

        page.bindingContext = navigationContext;

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var followUpDateDatePicker = page.getViewById("followUpDateDatePicker");

        followUpDateDatePicker.on("dateChange", function(args) {
            var followUpDateLabel = page.getViewById("followUpDateLabel");

            followUpDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        dismissKeyboard()

        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onGridLayoutTap(args) {
    try {
        dismissKeyboard()
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("checkedChange", function(args) {
        dismissKeyboard()

        var detailsLabel = page.getViewById("detailsLabel");
        var followUpDetailsStackLayout = page.getViewById("followUpDetailsStackLayout");
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");

        if (args.value) {
            detailsLabel.visibility = "visible";
            followUpDetailsStackLayout.visibility = "visible";
        } else {
            detailsLabel.visibility = "collapse";
            followUpDetailsStackLayout.visibility = "collapse";
        }

        followUpDateDatePickerGridLayout.visibility = "collapse";

        page.addCss("#followUpDateLabel {color: #666;}");
    });
}

function onTextViewFocus(args) {
    try {
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");

        followUpDateDatePickerGridLayout.visibility = "collapse";

        page.addCss("#followUpDateLabel {color: #666;}");
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutFollowUpDateTap(args) {
    try {
        dismissKeyboard()

        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");
        
        if (followUpDateDatePickerGridLayout.visibility === "collapse") {
            followUpDateDatePickerGridLayout.visibility = "visible";

            page.addCss("#followUpDateLabel {color: #cc2d30;}");
        } else {
            followUpDateDatePickerGridLayout.visibility = "collapse";

            page.addCss("#followUpDateLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function dateConverter(value, format) {
    let result = format;

    const day = value.getDate();

    result = result.replace("DD", day < 10 ? `0${day}` : day);

    const month = value.getMonth() + 1;

    result = result.replace("MM", month < 10 ? `0${month}` : month);
    result = result.replace("YYYY", value.getFullYear());

    return result;
}

function dismissKeyboard() {
    if (platform.isAndroid) {
        var followUpNotes = page.getViewById("followUpNotes");

        followUpNotes.dismissSoftInput();
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onTextViewFocus = onTextViewFocus;
exports.onStackLayoutFollowUpDateTap = onStackLayoutFollowUpDateTap;
; 
if (false ) {} 

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" tap=\"onGridLayoutTap\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <StackLayout row=\"1\" col=\"0\">\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                <Label row=\"0\" col=\"0\" text=\"Follow Up Needed?\" class=\"list-view-item-left\" />\n                <Switch row=\"0\" col=\"1\" checked=\"{{ followUpNeeded }}\" loaded=\"onSwitchLoaded\" horizontalAlignment=\"right\" class=\"switch\" />\n            </GridLayout>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" style=\"background-color: #eee;\">\n            <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header-no-border\">\n                <Label id=\"detailsLabel\" text=\"DETAILS\" verticalAlignment=\"bottom\" visibility=\"{{ followUpNeeded === 'true' || followUpNeeded === true ? 'visible' : 'collapse' }}\" />\n            </StackLayout>\n            <StackLayout id=\"followUpDetailsStackLayout\" class=\"list-view-section-detail\" visibility=\"{{ followUpNeeded === 'true' || followUpNeeded === true ? 'visible' : 'collapse' }}\">\n                <StackLayout tap=\"onStackLayoutFollowUpDateTap\">\n                    <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                        <Label row=\"0\" col=\"0\" text=\"Follow Up Completed\" class=\"list-view-item-left\" />\n                        <Label id=\"followUpDateLabel\" row=\"0\" col=\"1\" text=\"{{ followUpDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                    </GridLayout>\n                </StackLayout>\n                <GridLayout id=\"followUpDateDatePickerGridLayout\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"collapse\">\n                    <DatePicker id=\"followUpDateDatePicker\" row=\"0\" col=\"0\" date=\"{{ followUpDate }}\" horizontalAlignment=\"center\" class=\"list-view-item-right\"></DatePicker>\n                </GridLayout>\n                <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form-bottom\">\n                    <TextView id=\"followUpNotes\" row=\"0\" col=\"0\" text=\"{{ followUpNotes }}\" focus=\"onTextViewFocus\" hint=\"Follow Up Notes\" class=\"list-view-item-textview\" height=\"100%\" />\n                </GridLayout>\n            </StackLayout>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const InitiativesViewModel = __webpack_require__(174);
const ObservableModule = __webpack_require__(8);
var http = __webpack_require__(21);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;
var navigationContext;

var initiativesList = new InitiativesViewModel([]);

var switchTap = false;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    initiativesList: initiativesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;
        pageData.boundData.updated = false;
        
        page.actionBar.title = "Select Initiative(s)";

        initiativesList.empty();

        pageData.set("isLoading", true);

        initiativesList.load(navigationContext.meetingId).then(function () {
            pageData.set("isLoading", false);

            page.bindingContext = pageData;
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("tap", function(args) {
        // Necessary to prevent the checkedChange event from firing on the switch when user scrolls.
        switchTap = true;
    });

    checkedSwitch.on("checkedChange", function(args) {
        if (switchTap) {
            var stackLayout = args.object.parent;
            var indexLabel = stackLayout.getViewById("indexLabel");

            var model = initiativesList.getItem(indexLabel.text);

            model.checked = args.value;
            
            http.request({
                url: global.apiBaseServiceUrl + "updatemeetinginitiative",
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": global.token },
                content: JSON.stringify(model)
            }).then(function (response) {
                // var result = response.content.toJSON();

                // dialogs.alert(result);
                pageData.boundData.updated = true;

                switchTap = false;
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function InitiativesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(meetingId) {
        return http.request({
            url: global.apiBaseServiceUrl + "meetinginitiatives?meetingId=" + meetingId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(initiative) {
                var checked = false;

                if (initiative.Checked === "true") {
                    checked = true;
                }

                viewModel.push({
                    meetingId: initiative.MeetingId,
                    legislatorId: initiative.LegislatorId,
                    initiativeId: initiative.InitiativeId,
                    initiative: initiative.Initiative,
                    checked: initiative.Checked
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = InitiativesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"*\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ initiativesList }}\" itemTemplateSelector=\"$index\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ initiative }}\" class=\"list-view-item-main-top\" />\n                            </StackLayout>\n                            <StackLayout row=\"0\" col=\"1\" verticalAlignment=\"middle\">\n                                <Switch id=\"checkedSwitch\" row=\"0\" col=\"1\" checked=\"{{ checked }}\" \n                                    loaded=\"onSwitchLoaded\" horizontalAlignment=\"right\" class=\"switch\" />\n                                <Label id=\"indexLabel\" text=\"{{ $index }}\" visibility=\"collapse\" />\n                            </StackLayout>\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"1\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const MeetingViewModel = __webpack_require__(177);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
const appModule = __webpack_require__(27);
var http = __webpack_require__(21);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;

// var pageData = new ObservableModule.fromObject({
//     boundData: null
// });

var pageData = new ObservableModule.Observable();

function onNavigatingTo(args) {
    try {
        page = args.object;

        var offeredToMembersLabel = page.getViewById("offeredToMembersLabel");
        var followUpTitle = page.getViewById("followUpTitle");
        var followUpLabel = page.getViewById("followUpLabel");

        const limitText = (text, limit) => {
            let result = text;

            if (result !== null) {
                if (result.length > limit) {
                    for (var i = limit; i > 0; i--) {
                        var position = result.indexOf(" ", i);

                        if (position > -1 && position <= limit) {
                            result = result.substr(0, position) + "..."

                            break;
                        }
                    }
                }
            }

            return result;
        };

        appModule.getResources().limitText = limitText;

        if (args.isBackNavigation) {
            var venueTypeLabel = page.getViewById("venueTypeLabel");
            var notesLabel = page.getViewById("notesLabel");
            var legislatorLabel = page.getViewById("legislatorLabel");
            var attendeeTypeLabel = page.getViewById("attendeeTypeLabel");
            var meetingLocationLabel = page.getViewById("meetingLocationLabel");
            var staffAttendeesLabel = page.getViewById("staffAttendeesLabel");

            venueTypeLabel.text = pageData.venueType;

            if (pageData.offeredToMembers === true || pageData.offeredToMembers === "true") {
                offeredToMembersLabel.text = "Yes";
            } else {
                offeredToMembersLabel.text = "No";
            }

            notesLabel.text = limitText(pageData.notes, 30);
            legislatorLabel.text = pageData.fullName;
            attendeeTypeLabel.text = pageData.attendeeType;
            meetingLocationLabel.text = pageData.location;
            staffAttendeesLabel.text = limitText(pageData.legislatorStaffAttendees, 20);

            if (pageData.followUpNeeded === true || pageData.followUpNeeded === "true") {
                if (pageData.followUpDate === null) {
                    followUpTitle.text = "Follow Up Needed?";
                    followUpLabel.text = "Yes";
                } else {
                    followUpTitle.text = "Follow Up Date";
                    followUpLabel.text = dateConverter(pageData.followUpDate, "MM/DD/YYYY");
                }
            } else {
                followUpTitle.text = "Follow Up Needed?";
                followUpLabel.text = "No";
            }

            if (pageData.updated) {
                var currentMeeting = new MeetingViewModel();

                currentMeeting.load(pageData.meetingId).then(function () {
                    var initiativesLabel = page.getViewById("initiativesLabel");
                    var surveysLabel = page.getViewById("surveysLabel");
                    var pciAttendeesLabel = page.getViewById("pciAttendeesLabel");

                    pageData.pciInitiatives = currentMeeting.pciInitiatives;
                    pageData.surveys = currentMeeting.surveys;
                    pageData.pciAttendees = currentMeeting.pciAttendees;
                    
                    initiativesLabel.text = limitText(pageData.pciInitiatives, 25);
                    surveysLabel.text = limitText(pageData.surveys, 25);
                    pciAttendeesLabel.text = limitText(pageData.pciAttendees, 25);

                    pageData.updated = false;
                });
            }

        } else {
            navigationContext = page.navigationContext;
            
            pageData = navigationContext;
            pageData.result = "";

            if (pageData.meetingId === null || pageData.meetingId === 0) {
                page.actionBar.title = "Add Meeting";
            } else {
                page.actionBar.title = "Edit Meeting";
            }

            if (pageData.offeredToMembers === true || pageData.offeredToMembers === "true") {
                offeredToMembersLabel.text = "Yes";
            } else {
                offeredToMembersLabel.text = "No";
            }

            if (pageData.followUpNeeded === true || pageData.followUpNeeded === "true") {
                if (pageData.followUpDate === null) {
                    followUpTitle.text = "Follow Up Needed?";
                    followUpLabel.text = "Yes";
                } else {
                    followUpTitle.text = "Follow Up Completed";
                    followUpLabel.text = dateConverter(pageData.followUpDate, "MM/DD/YYYY");
                }
            } else {
                followUpTitle.text = "Follow Up Needed?";
                followUpLabel.text = "No";
            }

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var meetingDateDatePicker = page.getViewById("meetingDateDatePicker");
        
        meetingDateDatePicker.on("dateChange", function(args) {
            var meetingDateLabel = page.getViewById("meetingDateLabel");

            meetingDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutMeetingDateTap(args) {
    try {
        var meetingDateGridLayout = page.getViewById("meetingDateGridLayout");
        
        if (meetingDateGridLayout.visibility === "collapse") {
            meetingDateGridLayout.visibility = "visible";

            page.addCss("#meetingDateLabel {color: #cc2d30;}");
        } else {
            meetingDateGridLayout.visibility = "collapse";

            page.addCss("#meetingDateLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutVenueTypeTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/venuetype/venuetype-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutOfferedToMembersTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/offeredtomembers/offeredtomembers-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutNotesTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/notes/notes-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutFollowUpTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/followup/followup-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutInitiativesTap(args) {
    try
    {
        collapseMeetingDate();

        if (pageData.meetingId === null || pageData.meetingId === 0) {
            if (platform.isAndroid) {
                dialogs.confirm({
                    title: "Save",
                    message: "A new meeting must be saved prior to adding an initiative. Would you like to save this meeting?",
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                }).then(function (result) {
                    if (result) {
                        saveMeeting("meetings/meeting/initiatives/initiatives-page", false);
                    }
                });
            } else if (platform.isIOS) {
                dialogs.action({
                    message: "A new meeting must be saved prior to adding an initiative. Would you like to save this meeting?",
                    cancelButtonText: "Cancel",
                    actions: ["Save"]
                }).then(function (result) {
                    if (result === "Save") {
                        saveMeeting("meetings/meeting/initiatives/initiatives-page", false);
                    }
                });
            }
        } else {
            pageData.relationalType = "meeting";
            pageData.relationalId = pageData.meetingId;
            
            const navigationEntry = {
                moduleName: "meetings/meeting/initiatives/initiatives-page",
                context: pageData,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutSurveysTap(args) {
    try
    {
        collapseMeetingDate();

        if (pageData.meetingId === null || pageData.meetingId === 0) {
            if (platform.isAndroid) {
                dialogs.confirm({
                    title: "Save",
                    message: "A new meeting must be saved prior to adding a survey. Would you like to save this meeting?",
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                }).then(function (result) {
                    if (result) {
                        saveMeeting("legislators/legislator/surveys/surveys-page", false);
                    }
                });
            } else if (platform.isIOS) {
                dialogs.action({
                    message: "A new meeting must be saved prior to adding a survey. Would you like to save this meeting?",
                    cancelButtonText: "Cancel",
                    actions: ["Save"]
                }).then(function (result) {
                    if (result === "Save") {
                        saveMeeting("legislators/legislator/surveys/surveys-page", true);
                    }
                });
            }
        } else {
            pageData.relationalType = "meeting";
            pageData.relationalId = pageData.meetingId;
            
            const navigationEntry = {
                moduleName: "legislators/legislator/surveys/surveys-page",
                context: pageData,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutLegislatorTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/legislator/legislator-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutAttendeeTypeTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/attendeetype/attendeetype-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutMeetingLocationTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/meetinglocation/meetinglocation-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutPciAttendeesTap(args) {
    try
    {
        collapseMeetingDate();

        if (pageData.meetingId === null || pageData.meetingId === 0) {
            if (platform.isAndroid) {
                dialogs.confirm({
                    title: "Save",
                    message: "A new meeting must be saved prior to adding PCI attendees. Would you like to save this meeting?",
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                }).then(function (result) {
                    if (result) {
                        saveMeeting("profiles/profiles-page", false);
                    }
                });
            } else if (platform.isIOS) {
                dialogs.action({
                    message: "A new meeting must be saved prior to adding PCI attendees. Would you like to save this meeting?",
                    cancelButtonText: "Cancel",
                    actions: ["Save"]
                }).then(function (result) {
                    if (result === "Save") {
                        saveMeeting("profiles/profiles-page", true);
                    }
                });
            }
        } else {
            pageData.relationalType = "meeting";
            pageData.relationalId = pageData.meetingId;
            
            const navigationEntry = {
                moduleName: "profiles/profiles-page",
                context: pageData,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutStaffAttendeesTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/staffattendees/staffattendees-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSaveTap(args) {
    try {
        collapseMeetingDate();

        saveMeeting(null, false);
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function saveMeeting(moduleName, isAttendees) {
    var isAdd = false;

    if (pageData.meetingId === null || pageData.meetingId === 0) {
        isAdd = true;
    }

    http.request({
        url: global.apiBaseServiceUrl + "insertupdatemeeting",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData)
    }).then(function (response) {
        var result = response.content.toString();
        var data = JSON.parse(result);
        
        if (data.MeetingId !== null)
        {
            if (isAdd) {
                if (pageData.assignmentId !== null && pageData.assignmentId !== 0) {
                    global.refreshAssignments = true;
                }
            }

            if (moduleName === null) {
                pageData.meetingId = data.MeetingId;

                frameModule.topmost().goBack();
            } else {
                pageData.meetingId = data.MeetingId;

                //if (isAttendees) {
                    pageData.relationalType = "meeting";
                    pageData.relationalId = pageData.meetingId; 
                //}
                
                const navigationEntry = {
                    moduleName: moduleName,
                    context: pageData,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        } else {
            dialogs.alert("There was an error saving the meeting.");
        }
        
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    });
}

function dateConverter(value, format) {
    let result = format;

    const day = value.getDate();

    result = result.replace("DD", day < 10 ? `0${day}` : day);

    const month = value.getMonth() + 1;

    result = result.replace("MM", month < 10 ? `0${month}` : month);
    result = result.replace("YYYY", value.getFullYear());

    return result;
};

function collapseMeetingDate() {
    var meetingDateGridLayout = page.getViewById("meetingDateGridLayout");

    meetingDateGridLayout.visibility = "collapse";

    page.addCss("#meetingDateLabel {color: #666;}");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onStackLayoutMeetingDateTap = onStackLayoutMeetingDateTap;
exports.onStackLayoutVenueTypeTap = onStackLayoutVenueTypeTap;
exports.onStackLayoutOfferedToMembersTap = onStackLayoutOfferedToMembersTap;
exports.onStackLayoutNotesTap = onStackLayoutNotesTap;
exports.onStackLayoutFollowUpTap = onStackLayoutFollowUpTap;
exports.onStackLayoutInitiativesTap = onStackLayoutInitiativesTap;
exports.onStackLayoutSurveysTap = onStackLayoutSurveysTap;
exports.onStackLayoutLegislatorTap = onStackLayoutLegislatorTap;
exports.onStackLayoutAttendeeTypeTap = onStackLayoutAttendeeTypeTap;
exports.onStackLayoutMeetingLocationTap = onStackLayoutMeetingLocationTap;
exports.onStackLayoutPciAttendeesTap = onStackLayoutPciAttendeesTap;
exports.onStackLayoutStaffAttendeesTap = onStackLayoutStaffAttendeesTap;
exports.onBackTap = onBackTap;
exports.onSaveTap = onSaveTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8);
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function MeetingViewModel() {
    const viewModel = ObservableModule.fromObject({
        meetingId: null,
        meetingDate: null,
        venueTypeId: null,
        venueType: null,
        attendeeTypeId: null,
        attendeeType: null,
        lobbyistId: null,
        lobbyist: null,
        legislatorId: null,
        fullName: null,
        name: null,
        pciInitiatives: null,
        surveys: null,
        pciAttendees: null,
        primaryOfficeContact: null,
        meetingLocationId: null,
        location: null,
        legislatorStaffAttendees: null,
        followUpNeeded: null,
        followUpDate: null,
        followUpNotes: null,
        creatorId: null,
        notes: null,
        initiativeId: null,
        surveyId: null,
        assignmentId: null,

        load: function(meetingId) {
            return new Promise((resolve, reject) => {
                return http.request({
                    url: global.apiBaseServiceUrl + "meeting?meetingId=" + meetingId,
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": global.token }
                }).then(function (response) {
                    var result = response.content.toString();
                    var data = JSON.parse(result);
                    var meetingDate;
                    var followUpDate;
                    
                    meetingDate = new Date(parseInt(data.MeetingDate.substring(data.MeetingDate.indexOf("/Date(") + 6, data.MeetingDate.indexOf(")/"))));

                    if (data.FollowUpDate === null || data.FollowUpDate.length === 0) {
                        followUpDate = null;
                    } else {
                        followUpDate = new Date(parseInt(data.FollowUpDate.substring(data.FollowUpDate.indexOf("/Date(") + 6, data.FollowUpDate.indexOf(")/"))));
                    }

                    viewModel.meetingId = data.MeetingId,
                    viewModel.meetingDate = meetingDate,
                    viewModel.venueTypeId = data.VenueTypeId,
                    viewModel.venueType = data.VenueType,
                    viewModel.attendeeTypeId = data.AttendeeTypeId,
                    viewModel.attendeeType = data.AttendeeType,
                    viewModel.lobbyistId = data.LobbyistId,
                    viewModel.lobbyist = data.Lobbyist,
                    viewModel.legislatorId = data.LegislatorId,
                    viewModel.fullName = data.FullName,
                    viewModel.name = data.Name,
                    viewModel.pciInitiatives = data.PciInitiatives,
                    viewModel.surveys = data.Surveys,
                    viewModel.pciAttendees = data.PciAttendees,
                    viewModel.primaryOfficeContact = data.PrimaryOfficeContact,
                    viewModel.meetingLocationId = data.MeetingLocationId,
                    viewModel.location = data.Location,
                    viewModel.legislatorStaffAttendees = data.LegislatorStaffAttendees,
                    viewModel.followUpNeeded = data.FollowUpNeeded,
                    viewModel.followUpDate = followUpDate,
                    viewModel.followUpNotes = data.FollowUpNotes,
                    viewModel.creatorId = data.CreatorId,
                    viewModel.notes = data.Notes,
                    viewModel.initiativeId = data.InitiativeId,
                    viewModel.surveyId = data.SurveyId,
                    viewModel.assignmentId = data.AssignmentId;

                    resolve("SUCCESS");

                }, function (e) {
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });

                    reject("FAILURE");
                });
            })
        }
    });

    return viewModel;
}

module.exports = MeetingViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onSaveTap\" ios.systemIcon=\"3\" android.systemIcon=\"ic_menu_save\" ios.position=\"right\" />\n    </ActionBar>\n\n    <ScrollView>\n        <StackLayout verticalAlignment=\"top\">\n            <StackLayout verticalAlignment=\"top\" class=\"list-view-section-blank\">\n                <Label text=\"\" verticalAlignment=\"bottom\" />\n            </StackLayout>\n            <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                <Label text=\"MEETING INFORMATION\" verticalAlignment=\"bottom\" />\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutMeetingDateTap\">\n                <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item-form\" verticalAlignment=\"middle\">\n                    <Label row=\"0\" col=\"0\" text=\"Meeting Date\" class=\"list-view-item-left\" />\n                    <Label id=\"meetingDateLabel\" row=\"0\" col=\"1\" text=\"{{ meetingDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <GridLayout id=\"meetingDateGridLayout\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"collapse\">\n                <DatePicker id=\"meetingDateDatePicker\" row=\"0\" col=\"0\" date=\"{{ meetingDate }}\" horizontalAlignment=\"center\" class=\"list-view-item-picker\"></DatePicker>\n            </GridLayout>\n            <StackLayout tap=\"onStackLayoutVenueTypeTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Venue\" class=\"list-view-item-left\" />\n                    <Label id=\"venueTypeLabel\" row=\"0\" col=\"1\" text=\"{{ venueType }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutOfferedToMembersTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Offered to APCIA Members?\" class=\"list-view-item-left\" />\n                    <Label id=\"offeredToMembersLabel\" row=\"0\" col=\"1\" text=\"\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutNotesTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Notes\" class=\"list-view-item-left\" />\n                    <Label id=\"notesLabel\" row=\"0\" col=\"1\" text=\"{{ notes | limitText(30) }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form-bottom\">\n                <TextView row=\"0\" col=\"0\" text=\"{{ notes }}\" hint=\"Notes\" class=\"list-view-item-right\" />\n            </GridLayout> -->\n            <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                <Label text=\"FOLLOW UP INFORMATION\" verticalAlignment=\"bottom\" />\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutFollowUpTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label id=\"followUpTitle\" row=\"0\" col=\"0\" text=\"\" class=\"list-view-item-left\" />\n                    <Label id=\"followUpLabel\" row=\"0\" col=\"1\" text=\"\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                <Label text=\"RELATED INFORMATION\" verticalAlignment=\"bottom\" />\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutInitiativesTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"*\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Initiatives\" class=\"list-view-item-left\" />\n                    <Label id=\"initiativesLabel\" row=\"0\" col=\"1\" text=\"{{ pciInitiatives | limitText(25) }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutSurveysTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"*\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Surveys\" class=\"list-view-item-left\" />\n                    <Label id=\"surveysLabel\" row=\"0\" col=\"1\" text=\"{{ surveys | limitText(25) }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                <Label text=\"ATTENDEE INFORMATION\" verticalAlignment=\"bottom\" />\n            </StackLayout>\n            <!-- <StackLayout tap=\"onStackLayoutLegislatorTap\"> -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Legislator\" class=\"list-view-item-left\" verticalAlignment=\"middle\" />\n                    <Label id=\"legislatorLabel\" row=\"0\" col=\"1\" text=\"{{ fullName }}\" class=\"list-view-item-right\" />\n                    <!-- <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" /> -->\n                </GridLayout>\n            <!-- </StackLayout> -->\n            <StackLayout tap=\"onStackLayoutAttendeeTypeTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Cong. Office Attendees\" class=\"list-view-item-left\" />\n                    <Label id=\"attendeeTypeLabel\" row=\"0\" col=\"1\" text=\"{{ attendeeType }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutMeetingLocationTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Type\" class=\"list-view-item-left\" />\n                    <Label id=\"meetingLocationLabel\" row=\"0\" col=\"1\" text=\"{{ location }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutPciAttendeesTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"*\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"APCIA Attendees\" class=\"list-view-item-left\" />\n                    <Label id=\"pciAttendeesLabel\" row=\"0\" col=\"1\" text=\"{{ pciAttendees | limitText(25) }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutStaffAttendeesTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Cong. Staff Attendees\" class=\"list-view-item-left\" />\n                    <Label id=\"staffAttendeesLabel\" row=\"0\" col=\"1\" text=\"{{ legislatorStaffAttendees | limitText(20) }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form-bottom\">\n                <TextView row=\"0\" col=\"0\" text=\"{{ legislatorStaffAttendees }}\" hint=\"Congressional Staff Attendees\" class=\"list-view-item-right\" />\n            </GridLayout> -->\n        </StackLayout>\n    </ScrollView>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const MeetingLocationViewModel = __webpack_require__(180);
const ObservableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;
var meetingLocationList = new MeetingLocationViewModel([]);

var meetingLocationIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    meetingLocationIndex: meetingLocationIndex,
    meetingLocationList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.meetingLocationList === undefined) {
            pageData.set("isLoading", true);

            meetingLocationList.load().then(function () {
                global.meetingLocationList = meetingLocationList;

                pageData.meetingLocationList = global.meetingLocationList;

                meetingLocationIndex = 0;

                if (pageData.boundData.meetingLocationId !== null && pageData.boundData.meetingLocationId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.meetingLocationList.List.length; i++) {
                        if (pageData.meetingLocationList.List.getItem(i).meetingLocationId === pageData.boundData.meetingLocationId) {
                            meetingLocationIndex = i;
                        }
                    }
                }

                pageData.meetingLocationIndex = meetingLocationIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.meetingLocationList = global.meetingLocationList;
            
            meetingLocationIndex = 0;

            if (pageData.boundData.meetingLocationId !== null && pageData.boundData.meetingLocationId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.meetingLocationList.List.length; i++) {
                    if (pageData.meetingLocationList.List.getItem(i).meetingLocationId === pageData.boundData.meetingLocationId) {
                        meetingLocationIndex = i;
                    }
                }
            }

            pageData.meetingLocationIndex = meetingLocationIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var meetingLocationListPicker = page.getViewById("meetingLocationListPicker");
        
        meetingLocationListPicker.on("selectedIndexChange", function(args) {
            var meetingLocationItem = pageData.meetingLocationList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(meetingLocationItem.meetingLocationId + ": " + meetingLocationItem.meetingLocation);
            pageData.boundData.meetingLocationId = meetingLocationItem.meetingLocationId;
            pageData.boundData.location = meetingLocationItem.meetingLocation;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8).Observable;
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function MeetingLocationViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "meetinglocations",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meetingLocation) {
                viewModel.Items.push(
                    meetingLocation.Location
                );

                viewModel.List.push({
                    meetingLocationId: meetingLocation.MeetingLocationId,
                    meetingLocation: meetingLocation.Location
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = MeetingLocationViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <GridLayout row=\"1\" col=\"0\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n            <ListPicker id=\"meetingLocationListPicker\" row=\"0\" col=\"0\" items=\"{{ meetingLocationList.Items }}\" selectedIndex=\"{{ meetingLocationIndex }}\" \n                horizontalAlignment=\"center\" class=\"list-view-item-picker\"></ListPicker>\n        </GridLayout>\n        <StackLayout row=\"2\" col=\"0\" height=\"100%\" class=\"list-view-section-header\"></StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

const platform = __webpack_require__(13);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Notes";

        navigationContext = page.navigationContext;

        page.bindingContext = navigationContext;

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        dismissKeyboard()

        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onGridLayoutTap(args) {
    try {
        dismissKeyboard()
    } catch(e) {
        dialogs.alert(e);
    }
}

function dismissKeyboard() {
    if (platform.isAndroid) {
        var notes = page.getViewById("notes");

        notes.dismissSoftInput();
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;
; 
if (false ) {} 

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form\" tap=\"onGridLayoutTap\">\n        <TextView id=\"notes\" row=\"0\" col=\"0\" text=\"{{ notes }}\" hint=\"Notes\" class=\"list-view-item-textview\" height=\"100%\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

const platform = __webpack_require__(13);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "APCIA Members";

        navigationContext = page.navigationContext;

        page.bindingContext = navigationContext;

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <StackLayout row=\"1\" col=\"0\">\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                <Label row=\"0\" col=\"0\" text=\"Offered to APCIA Members?\" class=\"list-view-item-left\" />\n                <Switch row=\"0\" col=\"1\" checked=\"{{ offeredToMembers }}\" horizontalAlignment=\"right\" class=\"switch\" />\n            </GridLayout>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" style=\"background-color: #eee;\"></StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

const platform = __webpack_require__(13);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Cong. Staff Attendees";

        page.bindingContext = page.navigationContext;

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        dismissKeyboard()

        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onGridLayoutTap(args) {
    try {
        dismissKeyboard()
    } catch(e) {
        dialogs.alert(e);
    }
}

function dismissKeyboard() {
    if (platform.isAndroid) {
        var legislatorStaffAttendees = page.getViewById("legislatorStaffAttendees");

        legislatorStaffAttendees.dismissSoftInput();
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;
; 
if (false ) {} 

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form\" tap=\"onGridLayoutTap\">\n        <TextView id=\"legislatorStaffAttendees\" row=\"0\" col=\"0\" text=\"{{ legislatorStaffAttendees }}\" hint=\"Congressional Staff Attendees\" class=\"list-view-item-textview\" height=\"100%\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const VenueTypeViewModel = __webpack_require__(189);
const ObservableModule = __webpack_require__(8);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

var page;
var navigationContext;
var venueTypeList = new VenueTypeViewModel([]);

var venueTypeIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    venueTypeIndex: venueTypeIndex,
    venueTypeList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Venue";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.venueTypeList === undefined) {
            pageData.set("isLoading", true);

            venueTypeList.load().then(function () {
                global.venueTypeList = venueTypeList;

                pageData.venueTypeList = global.venueTypeList;

                venueTypeIndex = 0;

                if (pageData.boundData.venueTypeId !== null && pageData.boundData.venueTypeId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.venueTypeList.List.length; i++) {
                        if (pageData.venueTypeList.List.getItem(i).venueTypeId === pageData.boundData.venueTypeId) {
                            venueTypeIndex = i;
                        }
                    }
                }

                pageData.venueTypeIndex = venueTypeIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.venueTypeList = global.venueTypeList;
            
            venueTypeIndex = 0;

            if (pageData.boundData.venueTypeId !== null && pageData.boundData.venueTypeId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.venueTypeList.List.length; i++) {
                    if (pageData.venueTypeList.List.getItem(i).venueTypeId === pageData.boundData.venueTypeId) {
                        venueTypeIndex = i;
                    }
                }
            }

            pageData.venueTypeIndex = venueTypeIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var venueTypeListPicker = page.getViewById("venueTypeListPicker");
        
        venueTypeListPicker.on("selectedIndexChange", function(args) {
            var venueTypeItem = pageData.venueTypeList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(venueTypeItem.venueTypeId + ": " + venueTypeItem.venueType);
            pageData.boundData.venueTypeId = venueTypeItem.venueTypeId;
            pageData.boundData.venueType = venueTypeItem.venueType;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8).Observable;
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function VenueTypeViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "meetingvenuetypes",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(venueType) {
                viewModel.Items.push(
                    venueType.VenueType
                );

                viewModel.List.push({
                    venueTypeId: venueType.VenueTypeId,
                    venueType: venueType.VenueType
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = VenueTypeViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <GridLayout row=\"1\" col=\"0\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n            <ListPicker id=\"venueTypeListPicker\" row=\"0\" col=\"0\" items=\"{{ venueTypeList.Items }}\" selectedIndex=\"{{ venueTypeIndex }}\" \n                horizontalAlignment=\"center\" class=\"list-view-item-picker\" width=\"100%\"></ListPicker>\n        </GridLayout>\n        <StackLayout row=\"2\" col=\"0\" height=\"100%\" class=\"list-view-section-header\"></StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const MeetingsViewModel = __webpack_require__(192);
// const LegislatorViewModel = require("./meeting/legislator/legislator-view-model");
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var gestures = __webpack_require__(57);
var frameModule = __webpack_require__(17);
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.5;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var navigationContext;

var meetingsList = new MeetingsViewModel([]);
// var legislatorList = new LegislatorViewModel([]);

var pageData = new ObservableModule.fromObject({
    meetingsList: meetingsList,
    reference: "tab",
    recentMeetings: "Y",
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        page.actionBar.title = "Meetings";
        
        navigationContext = page.navigationContext;

        if (navigationContext.reference === "tab") {
            pageData.reference = "tab";
        } else {
            pageData.reference = "nav";
        }

        if (args.isBackNavigation) {
            meetingsList.empty();

            pageData.set("isLoading", true);

            meetingsList.load(pageData.reference, navigationContext.legislatorId, pageData.recentMeetings).then(function () {
                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSelectedIndexChanged(args) {
    try {
        if (args.newIndex === 0) {
            pageData.recentMeetings = "Y";
        }
        else {
            pageData.recentMeetings = "N";
        }

        meetingsList.empty();

        pageData.set("isLoading", true);

        meetingsList.load(pageData.reference, navigationContext.legislatorId, pageData.recentMeetings).then(function () {
            // NEED THE FOLLOWING COMMENTED CODE ONCE WE ALLOW THE LEGISLATOR FIELD TO BE EDITABLE.
            // if (global.legislatorList === undefined) {
            //     legislatorList.load().then(function () {
            //         global.legislatorList = legislatorList;

            //         pageData.set("isLoading", false);

            //         page.bindingContext = pageData;
            //     });
            // } else {
                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            // }
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAddTap(args) {
    try
    {
        var model = {
            meetingId: 0,
            meetingDate: new Date(),
            venueTypeId: 1,
            venueType: "In Person",
            attendeeTypeId: 1,
            attendeeType: "Staff Only",
            lobbyistId: global.personId,
            lobbyist: null,
            legislatorId: navigationContext.legislatorId,
            fullName: navigationContext.fullName,
            name: null,
            pciInitiatives: null,
            surveys: null,
            pciAttendees: global.currentUser,
            primaryOfficeContact: null,
            meetingLocationId: 2,
            location: "Meeting in DC",
            legislatorStaffAttendees: null,
            followUpNeeded: false,
            followUpDate: null,
            followUpNotes: null,
            creatorId: global.personId,
            notes: null,
            initiativeId: null,
            surveyId: null,
            assignmentId: null
        }

        const navigationEntry = {
            moduleName: "meetings/meeting/meeting-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        if (platform.isIOS) {
            if (swipeOpen) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 200
                });

                swipeOpen = false;
            } else {
                var view = args.view;

                model = view.bindingContext;

                const navigationEntry = {
                    moduleName: "meetings/meeting/meeting-page",
                    context: model,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onDeleteClick(args) {
    if (platform.isAndroid) {
        dialogs.confirm({
            title: "Delete",
            message: "Meeting will be deleted. Delete?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (result) {
            if (result) {
                var view = args.object;

                http.request({
                    url: global.apiBaseServiceUrl + "deletemeeting",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": global.token },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    meetingsList.empty();
        
                    pageData.set("isLoading", true);
        
                    meetingsList.load(pageData.reference, navigationContext.legislatorId, pageData.recentMeetings).then(function () {
                            pageData.set("isLoading", false);
        
                            page.bindingContext = pageData;
                    });
                    
                }, function (e) {
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });
                });
            }
        });
    } else if (platform.isIOS) {
        dialogs.action({
            message: "Would you like to delete this meeting?",
            cancelButtonText: "Cancel",
            actions: ["Delete"]
        }).then(function (result) {
            if (result === "Delete") {
                var view = args.object;

                http.request({
                    url: global.apiBaseServiceUrl + "deletemeeting",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": global.token },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    meetingsList.empty();
        
                    pageData.set("isLoading", true);
        
                    meetingsList.load(pageData.reference, navigationContext.legislatorId, pageData.recentMeetings).then(function () {
                            pageData.set("isLoading", false);
        
                            page.bindingContext = pageData;
                    });
                    
                }, function (e) {
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });
                });
            }
        });
    }

    if (swipeOpen) {
        swipedItem.animate({
            translate: { x: 0, y: 0 },
            duration: 200
        });

        swipeOpen = false;
    }
}

function onLayoutLoaded(args) {
    var layout = args.object;

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
            try {
                if (swipeOpen) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 200
                    });
    
                    swipeOpen = false;
                } else {
                    var view = args.view;
    
                    model = view.bindingContext;
    
                    const navigationEntry = {
                        moduleName: "meetings/meeting/meeting-page",
                        context: model,
                        clearHistory: false
                    };
    
                    frameModule.topmost().navigate(navigationEntry);
                }
            }
            catch(e)
            {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            }
        });
    }

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                var meetingsListView = page.getViewById("meetingsListView");

                if (platform.isAndroid) {
                    meetingsListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    meetingsListView.ios.scrollEnabled = false;
                }

                swipeOpen = true;
                swipedItem = layout;

                var newX = layout.translateX + args.deltaX;

                if (newX >= MIN_X && newX <= MAX_X) {
                    layout.translateX = newX;
                }
                
                if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                    // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                    let destX = 0;
                    
                    // if user hit or crossed the THESHOLD either way, let's finish in that direction
                    if (newX <= MIN_X * THRESHOLD) {
                        destX = MIN_X;
                    } else if (newX >= MAX_X * THRESHOLD) {
                        destX = MAX_X;
                    }
                    
                    layout.animate({
                        translate: { x: destX, y: 0 },
                        duration: 200
                    });

                    if (platform.isAndroid) {
                        meetingsListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        meetingsListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemLoading = onItemLoading;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
exports.onItemTap = onItemTap;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onDeleteClick = onDeleteClick;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var frameModule = __webpack_require__(17);
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function MeetingsViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(reference, legislatorId, recentMeetings) {
        var requestUrl;

        if (reference === "tab") {
            requestUrl = global.apiBaseServiceUrl + "meetings?personId=" + global.personId + "&recentMeetings=" + recentMeetings;
        } else {
            if (global.isPci) {
                requestUrl = global.apiBaseServiceUrl + "meetings?legislatorId=" + legislatorId + "&recentMeetings=" + recentMeetings;
            } else {
                requestUrl = global.apiBaseServiceUrl + "meetings?personId=" + global.personId + "&legislatorId=" + legislatorId + "&recentMeetings=" + recentMeetings;
            }
        }

        return http.request({
            url: requestUrl,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token } //,
            //content: JSON.stringify({ filter: "", page: "1", pageSize: "20" })
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meeting) {
                var meetingDate;
                // var legislatorStaffAttendees = meeting.LegislatorStaffAttendees;
                var pciInitiatives = meeting.PciInitiatives;
                var followUpDate;
                
                meetingDate = new Date(parseInt(meeting.MeetingDate.substring(meeting.MeetingDate.indexOf("/Date(") + 6, meeting.MeetingDate.indexOf(")/"))));

                // if (legislatorStaffAttendees.length > 0)
                // {
                //     legislatorStaffAttendees = "with " + legislatorStaffAttendees;
                // }

                if (pciInitiatives.length > 0)
                {
                    pciInitiatives = "on " + pciInitiatives
                }

                if (meeting.FollowUpDate === null || meeting.FollowUpDate.length === 0) {
                    followUpDate = null;
                } else {
                    followUpDate = new Date(parseInt(meeting.FollowUpDate.substring(meeting.FollowUpDate.indexOf("/Date(") + 6, meeting.FollowUpDate.indexOf(")/"))));
                }

                viewModel.push({
                    meetingId: meeting.MeetingId,
                    meetingDate: meetingDate,
                    venueTypeId: meeting.VenueTypeId,
                    venueType: meeting.VenueType,
                    offeredToMembers: meeting.OfferedToMembers,
                    attendeeTypeId: meeting.AttendeeTypeId,
                    attendeeType: meeting.AttendeeType,
                    lobbyistId: meeting.LobbyistId,
                    lobbyist: meeting.Lobbyist,
                    legislatorId: meeting.LegislatorId,
                    fullName: meeting.FullName,
                    name: meeting.Name,
                    pciInitiatives: meeting.PciInitiatives,
                    surveys: meeting.Surveys,
                    pciAttendees: meeting.PciAttendees,
                    primaryOfficeContact: meeting.PrimaryOfficeContact,
                    meetingLocationId: meeting.MeetingLocationId,
                    location: meeting.Location,
                    legislatorStaffAttendees: meeting.LegislatorStaffAttendees,
                    followUpNeeded: meeting.FollowUpNeeded,
                    followUpDate: followUpDate,
                    followUpNotes: meeting.FollowUpNotes,
                    creatorId: meeting.CreatorId,
                    notes: meeting.Notes,
                    initiativeId: meeting.InitiativeId,
                    surveyId: meeting.SurveyId,
                    assignmentId: meeting.AssignmentId
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = MeetingsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" visibility=\"{{ reference === 'tab' ? 'collapse' : 'visible' }}\" />\n        </android>\n        <ActionItem tap=\"onAddTap\" ios.systemIcon=\"4\" android.systemIcon=\"ic_menu_add\" ios.position=\"right\" \n            visibility=\"{{ reference === 'tab' ? 'collapse' : 'visible' }}\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Recent Meetings\" />\n                    <SegmentedBarItem title=\"All Meetings\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView id=\"meetingsListView\" items=\"{{ meetingsList }}\" itemLoading=\"onItemLoading\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <AbsoluteLayout>\n                        <!-- BACKGROUND: Swipe Actions -->\n                        <GridLayout columns=\"*, 80\" width=\"100%\"\n                            android:rows=\"{{ pciInitiatives.length > 0 &amp;&amp; legislatorStaffAttendees.length > 0 ? '89' : pciInitiatives.length > 0 || legislatorStaffAttendees.length > 0 ? '70' : '51' }}\"\n                            ios:rows=\"{{ pciInitiatives.length > 0 &amp;&amp; legislatorStaffAttendees.length > 0 ? '98' : pciInitiatives.length > 0 || legislatorStaffAttendees.length > 0 ? '78' : '58' }}\">\n                            <Label col=\"0\" />\n                            <GridLayout col=\"1\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onDeleteClick\" class=\"swipe-icons red\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf1f8;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Delete\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                        </GridLayout>\n                        <!-- FOREGROUND: List View Item Details -->\n                        <StackLayout loaded=\"onLayoutLoaded\" backgroundColor=\"white\" width=\"100%\">\n                            <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                                <StackLayout row=\"0\" col=\"0\">\n                                    <Label text=\"{{ name }}\" class=\"list-view-item-main-top\" />\n                                    <Label text=\"{{ meetingDate | dateConverter(dateFormat) }}\" class=\"list-view-item-main\" />\n                                    <Label text=\"{{ 'with ' + legislatorStaffAttendees }}\" visibility=\"{{ legislatorStaffAttendees.length > 0 ? 'visible' : 'collapse' }}\" class=\"list-view-item-sub\" />\n                                    <Label text=\"{{ 'on ' + pciInitiatives }}\" visibility=\"{{ pciInitiatives.length > 0 ? 'visible' : 'collapse' }}\" class=\"list-view-item-sub\" />\n                                </StackLayout>\n                                <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                            </GridLayout>\n                        </StackLayout>\n                    </AbsoluteLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RelationshipTypeViewModel = __webpack_require__(195);
const FamiliarityLevelViewModel = __webpack_require__(196);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var email = __webpack_require__(340);
var phone = __webpack_require__(341);

var page;
var navigationContext;

var relationshipList = new RelationshipTypeViewModel([]);
var familiarityList = new FamiliarityLevelViewModel([]);

var relationshipIndex = 0;
var familiarityIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    relationshipIndex: relationshipIndex,
    relationshipList: null,
    familiarityIndex: familiarityIndex,
    familiarityList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;

        page.actionBar.title = "Profile";

        if (args.isBackNavigation) {
            var personDetails = page.getViewById("personDetails");
            var fullNameLabel = page.getViewById("fullNameLabel");
            var companyLabel = page.getViewById("companyLabel");
            var titleLabel = page.getViewById("titleLabel");
            var emailAddressButton = page.getViewById("emailAddressButton");
            var workPhoneButton = page.getViewById("workPhoneButton");
            var selectPerson = page.getViewById("selectPerson");
            var rightArrow = page.getViewById("rightArrow");

            if (pageData.boundData.personId !== null && pageData.boundData.personId !== 0) {
                fullNameLabel.text = pageData.boundData.fullName;
                companyLabel.text = pageData.boundData.company;
                titleLabel.text = pageData.boundData.title;
                emailAddressButton.text = pageData.boundData.emailAddress;
                workPhoneButton.text = pageData.boundData.workPhone;

                personDetails.visibility = "visible";
                selectPerson.visibility = "collapse";
                rightArrow.visibility = "collapse";

                if (pageData.boundData.emailAddress !== null && pageData.boundData.emailAddress.length > 0) {
                    emailAddressButton.visibility = "visible";
                }

                if (pageData.boundData.workPhone !== null && pageData.boundData.workPhone.length > 0) {
                    workPhoneButton.visibility = "visible";
                }
            }

        } else {
            pageData.boundData = navigationContext.boundData;
            pageData.boundData.result = "";

            if (global.relationshipList === undefined) {
                pageData.set("isLoading", true);

                relationshipList.load().then(function () {
                    global.relationshipList = relationshipList;

                    pageData.relationshipList = global.relationshipList;

                    relationshipIndex = 0;

                    if (pageData.boundData.relationshipTypeId !== null && pageData.boundData.relationshipTypeId.toString().length > 0) {
                        var i;

                        for (i = 0; i < pageData.relationshipList.List.length; i++) {
                            if (pageData.relationshipList.List.getItem(i).relationshipTypeId === pageData.boundData.relationshipTypeId) {
                                relationshipIndex = i;
                            }
                        }
                    }

                    pageData.relationshipIndex = relationshipIndex;
                    pageData.boundData.relationshipTypeId = pageData.relationshipList.List.getItem(relationshipIndex).relationshipTypeId;
                    pageData.boundData.relationshipType = pageData.relationshipList.List.getItem(relationshipIndex).relationshipType;

                    if (global.familiarityList === undefined) {
                        familiarityList.load().then(function () {
                            global.familiarityList = familiarityList;
            
                            pageData.familiarityList = global.familiarityList;
            
                            familiarityIndex = 0;
            
                            if (pageData.boundData.familiarityLevelId !== null && pageData.boundData.familiarityLevelId.toString().length > 0) {
                                var j;
            
                                for (j = 0; j < pageData.familiarityList.List.length; j++) {
                                    if (pageData.familiarityList.List.getItem(j).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                                        familiarityIndex = j;
                                    }
                                }
                            }

                            pageData.familiarityIndex = familiarityIndex;
                            pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevelId;
                            pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevel;
            
                            pageData.set("isLoading", false);
            
                            page.bindingContext = pageData;
                        });
                    } else {
                        pageData.familiarityList = global.familiarityList;
            
                        familiarityIndex = 0;
        
                        if (pageData.boundData.familiarityLevelId !== null && pageData.boundData.familiarityLevelId.toString().length > 0) {
                            var j;
        
                            for (j = 0; j < pageData.familiarityList.List.length; j++) {
                                if (pageData.familiarityList.List.getItem(j).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                                    familiarityIndex = j;
                                }
                            }
                        }

                        pageData.familiarityIndex = familiarityIndex;
                        pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevelId;
                        pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevel;
        
                        pageData.set("isLoading", false);
        
                        page.bindingContext = pageData;
                    }
                });
            } else {
                pageData.relationshipList = global.relationshipList;

                relationshipIndex = 0;

                if (pageData.boundData.relationshipTypeId !== null && pageData.boundData.relationshipTypeId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.relationshipList.List.length; i++) {
                        if (pageData.relationshipList.List.getItem(i).relationshipTypeId === pageData.boundData.relationshipTypeId) {
                            relationshipIndex = i;
                        }
                    }
                }

                pageData.relationshipIndex = relationshipIndex;
                pageData.boundData.relationshipTypeId = pageData.relationshipList.List.getItem(relationshipIndex).relationshipTypeId;
                pageData.boundData.relationshipType = pageData.relationshipList.List.getItem(relationshipIndex).relationshipType;

                pageData.familiarityList = global.familiarityList;

                familiarityIndex = 0;

                if (pageData.boundData.familiarityLevelId !== null && pageData.boundData.familiarityLevelId.toString().length > 0) {
                    var j;

                    for (j = 0; j < pageData.familiarityList.List.length; j++) {
                        if (pageData.familiarityList.List.getItem(j).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                            familiarityIndex = j;
                        }
                    }
                }

                pageData.familiarityIndex = familiarityIndex;
                pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevelId;
                pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevel;

                page.bindingContext = pageData;
            }
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var relationshipListPicker = page.getViewById("relationshipListPicker");
        
        relationshipListPicker.on("selectedIndexChange", function(args) {
            var relationshipLabel = page.getViewById("relationshipLabel");
            var relationshipItem = pageData.relationshipList.List.getItem(args.object.selectedIndex);
            
            pageData.boundData.relationshipTypeId = relationshipItem.relationshipTypeId;
            pageData.boundData.relationshipType = relationshipItem.relationshipType;

            relationshipLabel.text = pageData.boundData.relationshipType;
            // dialogs.alert(relationshipItem.relationshipTypeId + ": " + relationshipItem.relationshipType);
        });

        var familiarityListPicker = page.getViewById("familiarityListPicker");
        
        familiarityListPicker.on("selectedIndexChange", function(args) {
            var familiarityLabel = page.getViewById("familiarityLabel");
            var familiarityItem = pageData.familiarityList.List.getItem(args.object.selectedIndex);
            
            pageData.boundData.familiarityLevelId = familiarityItem.familiarityLevelId;
            pageData.boundData.familiarityLevel = familiarityItem.familiarityLevel;

            familiarityLabel.text = pageData.boundData.familiarityLevel;
            // dialogs.alert(familiarityItem.familiarityLevelId + ": " + familiarityItem.familiarityLevel);
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        dismissKeyboard();

        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onGridLayoutTap(args) {
    try {
        dismissKeyboard();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectionTap(args) {
    try
    {
        dismissKeyboard();

        // Only navigate if this is a new relationship.
        if (pageData.boundData.personId === null || pageData.boundData.personId === 0) {
            const navigationEntry = {
                moduleName: "profiles/profilesearch/profilesearch-page",
                context: pageData.boundData,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry); 
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onEmailTap(args) {
    dismissKeyboard();

    var emailButton = args.object;
    var emailAddress = emailButton.text;

    email.compose({
        to: [emailAddress]
    })
}

function onPhoneTap(args) {
    dismissKeyboard();

    var phoneButton = args.object;
    var phoneNumber = phoneButton.text;

    phone.dial(phoneNumber, false);
}

function onStackLayoutRelationshipTap(args) {
    try {
        dismissKeyboard();

        var relationshipListPickerGridLayout = page.getViewById("relationshipListPickerGridLayout");
        var familiarityListPickerGridLayout = page.getViewById("familiarityListPickerGridLayout");
        
        if (relationshipListPickerGridLayout.visibility === "collapse") {
            relationshipListPickerGridLayout.visibility = "visible";
            familiarityListPickerGridLayout.visibility = "collapse";

            page.addCss("#relationshipLabel {color: #cc2d30;}");
            page.addCss("#familiarityLabel {color: #666;}");
        } else {
            relationshipListPickerGridLayout.visibility = "collapse";

            page.addCss("#relationshipLabel {color: #666;}");
        }
    }
    catch(e)
    {
        diadialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutFamiliarityTap(args) {
    try {
        dismissKeyboard();

        var relationshipListPickerGridLayout = page.getViewById("relationshipListPickerGridLayout");
        var familiarityListPickerGridLayout = page.getViewById("familiarityListPickerGridLayout");
        
        if (familiarityListPickerGridLayout.visibility === "collapse") {
            relationshipListPickerGridLayout.visibility = "collapse";
            familiarityListPickerGridLayout.visibility = "visible";

            page.addCss("#relationshipLabel {color: #666;}");
            page.addCss("#familiarityLabel {color: #cc2d30;}");
        } else {
            familiarityListPickerGridLayout.visibility = "collapse";

            page.addCss("#familiarityLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onTextViewFocus(args) {
    try {
        var relationshipListPickerGridLayout = page.getViewById("relationshipListPickerGridLayout");
        var familiarityListPickerGridLayout = page.getViewById("familiarityListPickerGridLayout");

        relationshipListPickerGridLayout.visibility = "collapse";
        familiarityListPickerGridLayout.visibility = "collapse";

        page.addCss("#relationshipLabel {color: #666;}");
        page.addCss("#familiarityLabel {color: #666;}");
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSaveTap(args) {
    dismissKeyboard();

    if (pageData.boundData.personId === null || pageData.boundData.personId === 0) {
        var label;

        if (navigationContext.relationalType === "legislator") {
            label = "relationship";
        } else {
            label = "attendee";
        }

        dialogs.alert({
            title: "Input Validation",
            message: "A person must be selected prior to saving this " + label + ".",
            okButtonText: "OK"
        });
    } else {
        var relationshipListPicker = page.getViewById("relationshipListPicker");

        pageData.boundData.relationshipTypeId = pageData.relationshipList.List.getItem(relationshipListPicker.selectedIndex).relationshipTypeId;
        pageData.boundData.relationshipType = pageData.relationshipList.List.getItem(relationshipListPicker.selectedIndex).relationshipType;

        var familiarityListPicker = page.getViewById("familiarityListPicker");

        pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityListPicker.selectedIndex).familiarityLevelId;
        pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityListPicker.selectedIndex).familiarityLevel;
        
        var result;

        pageData.set("isLoading", true);

        http.request({
            url: global.apiBaseServiceUrl + "updateprofilerelationship",
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": global.token },
            content: JSON.stringify(pageData.boundData)
        }).then(function (response) {
            // result = response.content.toJSON();
            // dialogs.alert(result);
            // dialogs.alert(pageData.boundData.responseId + ": " + pageData.boundData.response);

            pageData.boundData.result = "Update";

            pageData.set("isLoading", false);

            frameModule.topmost().goBack();
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    }
}

function dismissKeyboard() {
    if (platform.isAndroid) {
        var notes = page.getViewById("notes");

        notes.dismissSoftInput();
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;
exports.onSelectionTap = onSelectionTap;
exports.onEmailTap = onEmailTap;
exports.onPhoneTap = onPhoneTap;
exports.onStackLayoutRelationshipTap = onStackLayoutRelationshipTap;
exports.onStackLayoutFamiliarityTap = onStackLayoutFamiliarityTap;
exports.onTextViewFocus = onTextViewFocus;
exports.onSaveTap = onSaveTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8).Observable;
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function RelationshipTypeViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "relationshiptypes",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(relationshipType) {
                viewModel.Items.push(
                    relationshipType.Type
                );

                viewModel.List.push({
                    relationshipTypeId: relationshipType.RelationshipTypeId,
                    relationshipType: relationshipType.Type
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = RelationshipTypeViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8).Observable;
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function FamiliarityLevelViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "familiaritylevels",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(familiarityLevel) {
                viewModel.Items.push(
                    familiarityLevel.Level
                );

                viewModel.List.push({
                    familiarityLevelId: familiarityLevel.FamiliarityLevelId,
                    familiarityLevel: familiarityLevel.Level
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = FamiliarityLevelViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onSaveTap\" ios.systemIcon=\"3\" android.systemIcon=\"ic_menu_save\" ios.position=\"right\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"*\" height=\"100%\" width=\"100%\" tap=\"onGridLayoutTap\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\">\n            <StackLayout class=\"list-view-item-form\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" tap=\"onSelectionTap\" verticalAlignment=\"middle\">\n                    <StackLayout id=\"personDetails\" row=\"0\" col=\"0\" visibility=\"{{ boundData.personId === null || boundData.personId === 0 ? 'collapse' : 'visible' }}\">\n                        <Label id=\"fullNameLabel\" text=\"{{ boundData.fullName }}\" class=\"list-view-item-main-top\" />\n                        <Label id=\"companyLabel\" text=\"{{ boundData.company }}\" class=\"list-view-item-sub\" />\n                        <Label id=\"titleLabel\" text=\"{{ boundData.title }}\" class=\"list-view-item-sub\" />\n                        <Label id=\"emailAddressButton\" text=\"{{ boundData.emailAddress }}\" tap=\"onEmailTap\" horizontalAlignment=\"left\" class=\"list-view-item-sub-email\" \n                            visibility=\"{{ boundData.emailAddress !== null &amp;&amp; boundData.emailAddress.length > 0 ? 'visible' : 'collapse' }}\" />\n                        <Label id=\"workPhoneButton\" text=\"{{ boundData.workPhone }}\" tap=\"onPhoneTap\" horizontalAlignment=\"left\" class=\"list-view-item-sub-phone\" \n                            visibility=\"{{ boundData.workPhone !== null &amp;&amp; boundData.workPhone.length > 0 ? 'visible' : 'collapse' }}\"/>\n                    </StackLayout>\n                    <StackLayout id=\"selectPerson\" row=\"0\" col=\"0\" visibility=\"{{ boundData.personId !== null &amp;&amp; boundData.personId !== 0 ? 'collapse' : 'visible' }}\">\n                        <Label text=\"Select Person\" class=\"list-view-item-left\" style=\"color: #999; font-style: italic;\" />\n                    </StackLayout>\n                    <Label id=\"rightArrow\" row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" visibility=\"{{ boundData.personId !== null &amp;&amp; boundData.personId !== 0 ? 'collapse' : 'visible' }}\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutRelationshipTap\" visibility=\"{{ boundData.relationalType === 'legislator' ? 'visible' : 'collapse' }}\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Relationship\" class=\"list-view-item-left\" />\n                    <Label id=\"relationshipLabel\" row=\"0\" col=\"1\" text=\"{{ boundData.relationshipType }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <GridLayout id=\"relationshipListPickerGridLayout\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"collapse\">\n                <ListPicker id=\"relationshipListPicker\" row=\"0\" col=\"0\" items=\"{{ relationshipList.Items }}\" selectedIndex=\"{{ relationshipIndex }}\" horizontalAlignment=\"center\" class=\"list-view-item-right\"></ListPicker>\n            </GridLayout>\n            <StackLayout tap=\"onStackLayoutFamiliarityTap\" visibility=\"{{ boundData.relationalType === 'legislator' ? 'visible' : 'collapse' }}\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Knows How Well?\" class=\"list-view-item-left\" />\n                    <Label id=\"familiarityLabel\" row=\"0\" col=\"1\" text=\"{{ boundData.familiarityLevel }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <GridLayout id=\"familiarityListPickerGridLayout\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"collapse\">\n                <ListPicker id=\"familiarityListPicker\" row=\"0\" col=\"0\" items=\"{{ familiarityList.Items }}\" selectedIndex=\"{{ familiarityIndex }}\" horizontalAlignment=\"center\" class=\"list-view-item-right\"></ListPicker>\n            </GridLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Notes\" class=\"list-view-item-left\" />\n            </GridLayout> -->\n            <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form\">\n                <TextView id=\"notes\" row=\"0\" col=\"0\" text=\"{{ boundData.notes }}\" focus=\"onTextViewFocus\" hint=\"Notes\" class=\"list-view-item-textview\" />\n            </GridLayout>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"1\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ProfilesViewModel = __webpack_require__(199);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var gestures = __webpack_require__(57);
var http = __webpack_require__(21);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.5;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var model;
var navigationContext;

var profilesList = new ProfilesViewModel([]);

var pageData = new ObservableModule.fromObject({
    boundData: null,
    profilesList: profilesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        if (args.isBackNavigation) {
            profilesList.empty();

            pageData.set("isLoading", true);
    
            profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                pageData.set("isLoading", false);
    
                page.bindingContext = pageData;
            });
        } else {
            navigationContext = page.navigationContext;

            pageData.boundData = navigationContext;
            pageData.boundData.updated = false;
            
            var legislatorId = page.getViewById("legislatorId");
            var legislatorName = page.getViewById("legislatorName");
        
            legislatorId.text = navigationContext.relationalId;
            legislatorName.text = navigationContext.fullName;
        
            if (navigationContext.relationalType === "legislator") {
                page.actionBar.title = "Relationships";
            } else {
                page.actionBar.title = "APCIA Attendees";
            }
            
            profilesList.empty();
        
            pageData.set("isLoading", true);
        
            profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                pageData.set("isLoading", false);
            });
        
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    }
}

function onItemTap(args) {
    try {
        if (platform.isIOS) {
            if (swipeOpen) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 200
                });

                swipeOpen = false;
            } else {
                var view = args.view;

                model = view.bindingContext;

                const navigationEntry = {
                    moduleName: "profiles/profile/profile-page",
                    context: { 
                        relationalType: navigationContext.relationalType,
                        relationalId: navigationContext.relationalId,
                        boundData: model
                    },
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onAddTap(args) {
    try
    {
        pageData.boundData.updated = true;

        var model = {
            relationalType: navigationContext.relationalType,
            relationalId: navigationContext.relationalId,
            personId: 0,
            fullName: null,
            company: null,
            title: null,
            workPhone: null,
            emailAddress: null,
            relationshipTypeId: null,
            relationshipType: null,
            familiarityLevelId: null,
            familiarityLevel: null,
            notes: null,
            modifiedDate: new Date(),
            checked: false
        }

        const navigationEntry = {
            moduleName: "profiles/profile/profile-page",
            context: { 
                relationalType: navigationContext.relationalType,
                relationalId: navigationContext.relationalId,
                boundData: model
            },
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onDeleteClick(args) {
    var profileType;

    if (navigationContext.relationalType === "legislator") {
        profileType = "Relationship";
    } else {
        profileType = "Attendee";
    }
    
    if (platform.isAndroid) {
        dialogs.confirm({
            title: "Delete",
            message: profileType + " will be deleted. Delete?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (result) {
            if (result) {
                var view = args.object;
                
                view.bindingContext.checked = false;

                http.request({
                    url: global.apiBaseServiceUrl + "insertdeleteprofilerelationship",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": global.token },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    // result = response.content.toJSON();
                    // dialogs.alert(result);

                    pageData.boundData.updated = true;

                    profilesList.empty();
        
                    pageData.set("isLoading", true);
        
                    profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                            pageData.set("isLoading", false);
        
                            page.bindingContext = pageData;
                    });
                    
                }, function (e) {
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });
                });
            }
        });
    } else if (platform.isIOS) {
        dialogs.action({
            message: "Would you like to delete this " + profileType.toLowerCase() + "?",
            cancelButtonText: "Cancel",
            actions: ["Delete"]
        }).then(function (result) {
            if (result === "Delete") {
                var view = args.object;
                
                view.bindingContext.checked = false;

                http.request({
                    url: global.apiBaseServiceUrl + "insertdeleteprofilerelationship",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": global.token },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    // result = response.content.toJSON();
                    // dialogs.alert(result);

                    pageData.boundData.updated = true;

                    profilesList.empty();
        
                    pageData.set("isLoading", true);
        
                    profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                            pageData.set("isLoading", false);
        
                            page.bindingContext = pageData;
                    });
                    
                }, function (e) {
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });
                });
            }
        });
    }

    if (swipeOpen) {
        swipedItem.animate({
            translate: { x: 0, y: 0 },
            duration: 200
        });

        swipeOpen = false;
    }
}

function onLayoutLoaded(args) {
    var layout = args.object;

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
            try {
                if (swipeOpen) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 200
                    });
    
                    swipeOpen = false;
                } else {
                    var view = args.view;
    
                    model = view.bindingContext;
    
                    const navigationEntry = {
                        moduleName: "profiles/profile/profile-page",
                        context: { 
                            relationalType: navigationContext.relationalType,
                            relationalId: navigationContext.relationalId,
                            boundData: model
                        },
                        clearHistory: false
                    };
    
                    frameModule.topmost().navigate(navigationEntry);
                }
            }
            catch(e)
            {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            }
        });
    }

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                var profilesListView = page.getViewById("profilesListView");

                if (platform.isAndroid) {
                    profilesListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    profilesListView.ios.scrollEnabled = false;
                }

                swipeOpen = true;
                swipedItem = layout;

                var newX = layout.translateX + args.deltaX;

                if (newX >= MIN_X && newX <= MAX_X) {
                    layout.translateX = newX;
                }
                
                if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                    // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                    let destX = 0;
                    
                    // if user hit or crossed the THESHOLD either way, let's finish in that direction
                    if (newX <= MIN_X * THRESHOLD) {
                        destX = MIN_X;
                    } else if (newX >= MAX_X * THRESHOLD) {
                        destX = MAX_X;
                    }
                    
                    layout.animate({
                        translate: { x: destX, y: 0 },
                        duration: 200
                    });

                    if (platform.isAndroid) {
                        profilesListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        profilesListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onAddTap = onAddTap;
exports.onBackTap = onBackTap;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onDeleteClick = onDeleteClick;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function ProfilesViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(relationalType, relationalId) {
        return http.request({
            url: global.apiBaseServiceUrl + "profilerelationships?relationalType=" + relationalType + "&relationalId=" + relationalId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(profile) {
                viewModel.push({
                    relationalType: profile.RelationalType,
                    relationalId: profile.RelationalId,
                    personId: profile.PersonId,
                    fullName: profile.FullName,
                    company: profile.Company,
                    title: profile.Title,
                    workPhone: profile.WorkPhone,
                    emailAddress: profile.EmailAddress,
                    relationshipTypeId: profile.RelationshipTypeId,
                    relationshipType: profile.RelationshipType,
                    familiarityLevelId: profile.FamiliarityLevelId,
                    familiarityLevel: profile.FamiliarityLevel,
                    notes: profile.Notes,
                    modifiedDate: profile.ModifiedDate,
                    checked: profile.Checked,
                    total: profile.Total
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = ProfilesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onAddTap\" ios.systemIcon=\"4\" android.systemIcon=\"ic_menu_add\" ios.position=\"right\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" class=\"view-title\" visibility=\"{{ boundData.relationalType === 'legislator' ? 'visible' : 'collapse' }}\">\n            <Label id=\"legislatorId\" text=\"\" visibility=\"collapsed\" />\n            <Label id=\"legislatorName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView id=\"profilesListView\" items=\"{{ profilesList }}\" itemLoading=\"onItemLoading\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <AbsoluteLayout>\n                        <!-- BACKGROUND: Swipe Actions -->\n                        <GridLayout columns=\"*, 80\" android:rows=\"48\" ios:rows=\"55\" width=\"100%\">\n                            <Label col=\"0\" />\n                            <GridLayout col=\"1\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onDeleteClick\" class=\"swipe-icons red\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf1f8;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Delete\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                        </GridLayout>\n                        <!-- FOREGROUND: List View Item Details -->\n                        <StackLayout loaded=\"onLayoutLoaded\" backgroundColor=\"white\" width=\"100%\">\n                            <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                                <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                    <Label text=\"{{ fullName }}\" class=\"list-view-item-main-top\" />\n                                    <Label text=\"{{ company }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                </StackLayout>\n                                <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                            </GridLayout>\n                        </StackLayout>\n                    </AbsoluteLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const platform = __webpack_require__(13);
const ProfileSearchViewModel = __webpack_require__(202);
const ObservableModule = __webpack_require__(8);
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);
var page;
var navigationContext;

var searchBar;
var profileSearchPageSize = 25;
var profileSearchSearchText = "";
var profileSearchSearchSubmitted = false;

var profileSearchList = new ProfileSearchViewModel([]);

var switchTap = false;

var pageData = new ObservableModule.fromObject({
    profileSearchList: profileSearchList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        if (navigationContext.relationalType === "legislator") {
            page.actionBar.title = "Profile Search";
        } else {
            page.actionBar.title = "PCI Attendee Search";
        }

        // if (profileSearchSearchText !== "") {
        //     var searchBar = page.getViewById("searchBar");

        //     searchBar.text = profileSearchSearchText;
        // }
        
        // if (profileSearchList.length === 0) {
        profileSearchSearchText = "";
        
        profileSearchList.empty();

        pageData.set("isLoading", true);

        profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
            pageData.set("isLoading", false);
        });
        // }

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args)
{
    searchBar = args.object;

    profileSearchSearchText = searchBar.text.trim();

    profileSearchList.empty();
    
    pageData.set("isLoading", true);

    profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
        pageData.set("isLoading", false);

        profileSearchSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    profileSearchSearchText = "";

    if (profileSearchSearchSubmitted) {
        profileSearchList.empty();
        
        pageData.set("isLoading", true);

        profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
            pageData.set("isLoading", false);

            profileSearchSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("tap", function(args) {
        // Necessary to prevent the checkedChange event from firing on the switch when user scrolls.
        switchTap = true;
    });

    checkedSwitch.on("checkedChange", function(args) {
        if (switchTap) {
            var stackLayout = args.object.parent;
            var indexLabel = stackLayout.getViewById("indexLabel");

            var model = profileSearchList.getItem(indexLabel.text);

            model.checked = args.value;
            
            http.request({
                url: global.apiBaseServiceUrl + "insertdeleteprofilerelationship",
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": global.token },
                content: JSON.stringify(model)
            }).then(function (response) {
                switchTap = false;
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });
}

function onLoadMoreItems(args) {
    var profileSearchListCount = profileSearchList.length;
    var profileSearchPageNumber = Math.ceil(profileSearchListCount / profileSearchPageSize) + 1;
    var profileSearchRemainder = profileSearchListCount % profileSearchPageSize;

    if (profileSearchRemainder !== 0 && profileSearchRemainder < profileSearchPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, profileSearchPageNumber, profileSearchPageSize).then(function (){
        pageData.set("isLoading", false);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onLoadMoreItems = onLoadMoreItems;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function ProfileSearchViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(relationalType, relationalId, filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "profilerelationshipfilter?relationalType=" + relationalType + "&relationalId=" + relationalId + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(profile) {
                if (profile.PersonId !== null && profile.PersonId !== 0) {
                    var checked = false;

                    if (profile.Checked === "true") {
                        checked = true;
                    }

                    viewModel.push({
                        relationalType: profile.RelationalType,
                        relationalId: profile.RelationalId,
                        personId: profile.PersonId,
                        fullName: profile.FullName,
                        company: profile.Company,
                        title: profile.Title,
                        checked: checked,
                        total: profile.Total
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = ProfileSearchViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\" />\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" direction=\"horizontal\">\n            <SearchBar row=\"0\" col=\"0\" id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ profileSearchList }}\" loadMoreItems=\"onLoadMoreItems\" itemTemplateSelector=\"$index\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                            <Label text=\"{{ fullName }}\" class=\"list-view-item-main-top\" />\n                            <Label text=\"{{ company }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                            <Label text=\"{{ title }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                        </StackLayout>\n                        <StackLayout row=\"0\" col=\"1\" verticalAlignment=\"middle\">\n                            <Switch id=\"checkedSwitch\" row=\"0\" col=\"1\" checked=\"{{ checked }}\" \n                                loaded=\"onSwitchLoaded\" horizontalAlignment=\"right\" class=\"switch\" />\n                            <Label id=\"indexLabel\" text=\"{{ $index }}\" visibility=\"collapse\" />\n                        </StackLayout>\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

const ProfileSearchViewModel = __webpack_require__(205);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(8);
var http = __webpack_require__(21);
var frameModule = __webpack_require__(17);
var dialogs = __webpack_require__(14);
var page;
var navigationContext;

var searchBar;
var profileSearchPageSize = 25;
var profileSearchSearchText = "";
var profileSearchSearchSubmitted = false;

var previousSelected = null;

var profileSearchList = new ProfileSearchViewModel([]);

var pageData = new ObservableModule.fromObject({
    boundData: null,
    profileSearchList: profileSearchList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        if (navigationContext.relationalType === "legislator") {
            page.actionBar.title = "Profile Search";
        } else {
            page.actionBar.title = "PCI Attendee Search";
        }

        pageData.boundData = navigationContext;

        // if (profileSearchSearchText !== "") {
        //     var searchBar = page.getViewById("searchBar");

        //     searchBar.text = profileSearchSearchText;
        // }
        
        // if (profileSearchList.length === 0) {
        profileSearchSearchText = "";
        
        profileSearchList.empty();

        pageData.set("isLoading", true);

        profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
            pageData.set("isLoading", false);

            page.bindingContext = pageData;
        });
        // }

    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args)
{
    searchBar = args.object;

    profileSearchSearchText = searchBar.text.trim();

    profileSearchList.empty();
    
    pageData.set("isLoading", true);

    profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
        pageData.set("isLoading", false);

        profileSearchSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    profileSearchSearchText = "";

    if (profileSearchSearchSubmitted) {
        profileSearchList.empty();
        
        pageData.set("isLoading", true);

        profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
            pageData.set("isLoading", false);

            profileSearchSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onLoadMoreItems(args) {
    try {
        var profileSearchListCount = profileSearchList.length;
        var profileSearchPageNumber = Math.ceil(profileSearchListCount / profileSearchPageSize) + 1;
        var profileSearchRemainder = profileSearchListCount % profileSearchPageSize;

        if (profileSearchRemainder !== 0 && profileSearchRemainder < profileSearchPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, profileSearchPageNumber, profileSearchPageSize).then(function (){
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var selected = pageData.profileSearchList.getItem(args.index); //.set("checked", true);

        selected.checked = !selected.checked;

        if (previousSelected !== null & previousSelected !== selected) {
            previousSelected.checked = false;
        }
        
        page.getViewById("profileSearch").refresh();

        if (selected.checked) {
            previousSelected = selected;

            pageData.boundData.personId = selected.personId;
            pageData.boundData.fullName = selected.fullName;
            pageData.boundData.company = selected.company;
            pageData.boundData.title = selected.title;
            pageData.boundData.emailAddress = selected.emailAddress;
            pageData.boundData.workPhone = selected.workPhone;
        } else {
            previousSelected = null;

            pageData.boundData.personId = null;
            pageData.boundData.fullName = null;
            pageData.boundData.company = null;
            pageData.boundData.title = null;
            pageData.boundData.emailAddress = null;
            pageData.boundData.workPhone = null;
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(8);
var ObservableArray = __webpack_require__(19).ObservableArray;
var http = __webpack_require__(21);
var dialogs = __webpack_require__(14);

function ProfileSearchViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(relationalType, relationalId, filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "profilerelationshipfilter?relationalType=" + relationalType + "&relationalId=" + relationalId + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(profile) {
                if (profile.PersonId !== null && profile.PersonId !== 0) {
                    var checked = false;

                    if (profile.Checked === "true") {
                        checked = true;
                    }

                    if (!checked) {
                        viewModel.push({
                            relationalType: profile.RelationalType,
                            relationalId: profile.RelationalId,
                            personId: profile.PersonId,
                            fullName: profile.FullName,
                            company: profile.Company,
                            title: profile.Title,
                            emailAddress: profile.EmailAddress,
                            workPhone: profile.WorkPhone,
                            checked: checked,
                            total: profile.Total
                        });
                    }
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = ProfileSearchViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" direction=\"horizontal\">\n            <SearchBar row=\"0\" col=\"0\" id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView id=\"profileSearch\" items=\"{{ profileSearchList }}\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ fullName }}\" class=\"list-view-item-main-top\" />\n                                <Label text=\"{{ company }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                <Label text=\"{{ title }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                            </StackLayout>\n                            <StackLayout row=\"0\" col=\"1\" verticalAlignment=\"middle\">\n                                <Label row=\"0\" col=\"1\" text=\"&#xf00c;\" class=\"fn-list-view-item-small\" visibility=\"{{ checked ? 'visible' : 'collapse' }}\" />\n                            </StackLayout>\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// There is a bug in angular: https://github.com/angular/angular-cli/pull/8589/files
// Legendary stuff, its webpack plugin pretty much doesn't work with empty TypeScript files in v1.8.3
void 0;
; 
if (false ) {} 

/***/ }),
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": 336,
	"./app.css": 119,
	"./app.js": 105,
	"./assignments/assignment/assignment-page.js": 120,
	"./assignments/assignment/assignment-page.xml": 121,
	"./assignments/assignments-page.js": 122,
	"./assignments/assignments-page.xml": 124,
	"./assignments/assignments-view-model.js": 123,
	"./bundle-config.js": 125,
	"./committees/committee/committee-page.js": 126,
	"./committees/committee/committee-page.xml": 128,
	"./committees/committee/committee-view-model.js": 127,
	"./committees/committees-page.js": 129,
	"./committees/committees-page.xml": 131,
	"./committees/committees-view-model.js": 130,
	"./components/tab-navigation.js": 342,
	"./home/home-page.js": 132,
	"./home/home-page.xml": 134,
	"./home/home-view-model.js": 133,
	"./legislators/legislator/bio/bio-page.js": 135,
	"./legislators/legislator/bio/bio-page.xml": 136,
	"./legislators/legislator/committees/committees-page.js": 137,
	"./legislators/legislator/committees/committees-page.xml": 139,
	"./legislators/legislator/committees/committees-view-model.js": 138,
	"./legislators/legislator/initiativetiers/initiativetiers-page.js": 140,
	"./legislators/legislator/initiativetiers/initiativetiers-page.xml": 142,
	"./legislators/legislator/initiativetiers/initiativetiers-view-model.js": 141,
	"./legislators/legislator/legislator-page.js": 143,
	"./legislators/legislator/legislator-page.xml": 145,
	"./legislators/legislator/legislator-view-model.js": 144,
	"./legislators/legislator/surveys/select/select-page.js": 146,
	"./legislators/legislator/surveys/select/select-page.xml": 148,
	"./legislators/legislator/surveys/select/select-view-model.js": 147,
	"./legislators/legislator/surveys/survey/question/question-page.js": 149,
	"./legislators/legislator/surveys/survey/question/question-page.xml": 151,
	"./legislators/legislator/surveys/survey/question/response-view-model.js": 150,
	"./legislators/legislator/surveys/survey/survey-page.js": 152,
	"./legislators/legislator/surveys/survey/survey-page.xml": 154,
	"./legislators/legislator/surveys/survey/survey-view-model.js": 153,
	"./legislators/legislator/surveys/surveys-page.js": 155,
	"./legislators/legislator/surveys/surveys-page.xml": 157,
	"./legislators/legislator/surveys/surveys-view-model.js": 156,
	"./legislators/legislators-page.js": 158,
	"./legislators/legislators-page.xml": 160,
	"./legislators/legislators-view-model.js": 159,
	"./login/login-page.js": 161,
	"./login/login-page.xml": 165,
	"./login/login-view-model.js": 162,
	"./main-page.js": 166,
	"./main-page.xml": 167,
	"./meetings/meeting/attendeetype/attendeetype-page.js": 168,
	"./meetings/meeting/attendeetype/attendeetype-page.xml": 170,
	"./meetings/meeting/attendeetype/attendeetype-view-model.js": 169,
	"./meetings/meeting/followup/followup-page.js": 171,
	"./meetings/meeting/followup/followup-page.xml": 172,
	"./meetings/meeting/initiatives/initiatives-page.js": 173,
	"./meetings/meeting/initiatives/initiatives-page.xml": 175,
	"./meetings/meeting/initiatives/initiatives-view-model.js": 174,
	"./meetings/meeting/meeting-page.js": 176,
	"./meetings/meeting/meeting-page.xml": 178,
	"./meetings/meeting/meeting-view-model.js": 177,
	"./meetings/meeting/meetinglocation/meetinglocation-page.js": 179,
	"./meetings/meeting/meetinglocation/meetinglocation-page.xml": 181,
	"./meetings/meeting/meetinglocation/meetinglocation-view-model.js": 180,
	"./meetings/meeting/notes/notes-page.js": 182,
	"./meetings/meeting/notes/notes-page.xml": 183,
	"./meetings/meeting/offeredtomembers/offeredtomembers-page.js": 184,
	"./meetings/meeting/offeredtomembers/offeredtomembers-page.xml": 185,
	"./meetings/meeting/staffattendees/staffattendees-page.js": 186,
	"./meetings/meeting/staffattendees/staffattendees-page.xml": 187,
	"./meetings/meeting/venuetype/venuetype-page.js": 188,
	"./meetings/meeting/venuetype/venuetype-page.xml": 190,
	"./meetings/meeting/venuetype/venuetype-view-model.js": 189,
	"./meetings/meetings-page.js": 191,
	"./meetings/meetings-page.xml": 193,
	"./meetings/meetings-view-model.js": 192,
	"./profiles/profile/familiaritylevel-view-model.js": 196,
	"./profiles/profile/profile-page.js": 194,
	"./profiles/profile/profile-page.xml": 197,
	"./profiles/profile/relationshiptype-view-model.js": 195,
	"./profiles/profiles-page.js": 198,
	"./profiles/profiles-page.xml": 200,
	"./profiles/profiles-view-model.js": 199,
	"./profiles/profilesearch/old/profilesearch-page.js": 201,
	"./profiles/profilesearch/old/profilesearch-page.xml": 203,
	"./profiles/profilesearch/old/profilesearch-view-model.js": 202,
	"./profiles/profilesearch/profilesearch-page.js": 204,
	"./profiles/profilesearch/profilesearch-page.xml": 206,
	"./profiles/profilesearch/profilesearch-view-model.js": 205,
	"./vendor-platform.js": 207,
	"./vendor.js": 343
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 335;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Frame defaultPage=\"login/login-page\"></Frame>"; 
if (false ) {} 

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assignments/assignment/assignment-page.js": 120,
	"./assignments/assignment/assignment-page.xml": 121,
	"./assignments/assignments-page.js": 122,
	"./assignments/assignments-page.xml": 124,
	"./committees/committee/committee-page.js": 126,
	"./committees/committee/committee-page.xml": 128,
	"./committees/committees-page.js": 129,
	"./committees/committees-page.xml": 131,
	"./home/home-page.js": 132,
	"./home/home-page.xml": 134,
	"./legislators/legislator/bio/bio-page.js": 135,
	"./legislators/legislator/bio/bio-page.xml": 136,
	"./legislators/legislator/committees/committees-page.js": 137,
	"./legislators/legislator/committees/committees-page.xml": 139,
	"./legislators/legislator/initiativetiers/initiativetiers-page.js": 140,
	"./legislators/legislator/initiativetiers/initiativetiers-page.xml": 142,
	"./legislators/legislator/legislator-page.js": 143,
	"./legislators/legislator/legislator-page.xml": 145,
	"./legislators/legislator/surveys/select/select-page.js": 146,
	"./legislators/legislator/surveys/select/select-page.xml": 148,
	"./legislators/legislator/surveys/survey/question/question-page.js": 149,
	"./legislators/legislator/surveys/survey/question/question-page.xml": 151,
	"./legislators/legislator/surveys/survey/survey-page.js": 152,
	"./legislators/legislator/surveys/survey/survey-page.xml": 154,
	"./legislators/legislator/surveys/surveys-page.js": 155,
	"./legislators/legislator/surveys/surveys-page.xml": 157,
	"./legislators/legislators-page.js": 158,
	"./legislators/legislators-page.xml": 160,
	"./login/login-page.js": 161,
	"./login/login-page.xml": 165,
	"./main-page.js": 166,
	"./main-page.xml": 167,
	"./meetings/meeting/attendeetype/attendeetype-page.js": 168,
	"./meetings/meeting/attendeetype/attendeetype-page.xml": 170,
	"./meetings/meeting/followup/followup-page.js": 171,
	"./meetings/meeting/followup/followup-page.xml": 172,
	"./meetings/meeting/initiatives/initiatives-page.js": 173,
	"./meetings/meeting/initiatives/initiatives-page.xml": 175,
	"./meetings/meeting/meeting-page.js": 176,
	"./meetings/meeting/meeting-page.xml": 178,
	"./meetings/meeting/meetinglocation/meetinglocation-page.js": 179,
	"./meetings/meeting/meetinglocation/meetinglocation-page.xml": 181,
	"./meetings/meeting/notes/notes-page.js": 182,
	"./meetings/meeting/notes/notes-page.xml": 183,
	"./meetings/meeting/offeredtomembers/offeredtomembers-page.js": 184,
	"./meetings/meeting/offeredtomembers/offeredtomembers-page.xml": 185,
	"./meetings/meeting/staffattendees/staffattendees-page.js": 186,
	"./meetings/meeting/staffattendees/staffattendees-page.xml": 187,
	"./meetings/meeting/venuetype/venuetype-page.js": 188,
	"./meetings/meeting/venuetype/venuetype-page.xml": 190,
	"./meetings/meetings-page.js": 191,
	"./meetings/meetings-page.xml": 193,
	"./profiles/profile/profile-page.js": 194,
	"./profiles/profile/profile-page.xml": 197,
	"./profiles/profiles-page.js": 198,
	"./profiles/profiles-page.xml": 200,
	"./profiles/profilesearch/old/profilesearch-page.js": 201,
	"./profiles/profilesearch/old/profilesearch-page.xml": 203,
	"./profiles/profilesearch/profilesearch-page.js": 204,
	"./profiles/profilesearch/profilesearch-page.xml": 206
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 337;

/***/ }),
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var gridLayout = __webpack_require__(82)
var stackLayout = __webpack_require__(58)
var Label = __webpack_require__(43).Label
//var dependencyObservableModule = require("ui/core/dependency-observable")
//var View = require("ui/core/view").View
var frame = __webpack_require__(17)
//var platform = require("platform")
var color = __webpack_require__(5)

var TabNavigation = (function (_super) {
    __extends(TabNavigation, _super)
    function TabNavigation() {
        _super.call(this)

        this.backgroundColor = new color.Color("#ffffff")
        this.navFrame = new frame.Frame()
        this._tabs = []
        
        var _this = this
        this.on('loaded', function(args){
            var obj = args.object
            if(obj.id==='tab-navigation'){
              return;   
            }
            _this.createUi(obj.tabs)
            _this.navFrame.isLoaded = false
            _this.navFrame.navigate(obj.tabs[0].path)
        })

    }

    TabNavigation.prototype.createUi = function (items) {
        var _this = this
        var numItems = items.length
        this.removeChildren()
        this.id = "tab-navigation"        
        this.addRow(new gridLayout.ItemSpec(1, gridLayout.GridUnitType.star))
        this.addRow(new gridLayout.ItemSpec(1, gridLayout.GridUnitType.auto))
        
        for (var i = 0; i < numItems; i++) {
            this.addColumn(new gridLayout.ItemSpec(1, gridLayout.GridUnitType.star))
        }

        this.navFrame.className = "navigation-frame"
        this.addChild(this.navFrame)
        gridLayout.GridLayout.setColumn(this.navFrame, 0)
        gridLayout.GridLayout.setRow(this.navFrame, 0)
        gridLayout.GridLayout.setColumnSpan(this.navFrame, numItems)

        for (var i = 0; i < numItems; i++) {
            (function () {
                var currentItem = items[i]

                var tab = new stackLayout.StackLayout()
                tab.direction = "vertical"
                if(i == 0) {
                    tab.className = "tab tab-selected"
                } else {
                    tab.className = "tab"
                }

                tab.id = "tab_"+i
                tab.on("tap", function (args) {
                    return _this.onTabSelected(args, currentItem) 
                })

                var icon = new Label()
                icon.className = 'tab-icon'
                //icon.text = String.fromCharCode(currentItem.iconCode)
                icon.text = currentItem.iconCode
                tab.addChild(icon)

                var label = new Label()
                label.className = 'tab-label'
                label.text = currentItem.label
                tab.addChild(label)

                _this._tabs.push(tab)
                _this.addChild(tab)
                gridLayout.GridLayout.setRow(tab, 1)
                gridLayout.GridLayout.setColumn(tab, i)
            }())
        }
    }

    TabNavigation.prototype.showTab = function(item) {
        var navigationEntry = {
            moduleName: item.path,
            animated: false,
            clearHistory: true
        }
        this.navFrame.navigate(navigationEntry)
    }

    TabNavigation.prototype.onTabSelected = function (args, item) {
        var selectedObj = args.object
        if (selectedObj.className.indexOf("tab-selected") > -1) {
            return
        }
        this._tabs.forEach(function(tab){
            tab.className = 'tab'
        });
        selectedObj.className = 'tab tab-selected'
        this.showTab(item)
    }

    return TabNavigation

}(gridLayout.GridLayout))

exports.TabNavigation = TabNavigation; 
if (false ) {} 

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Snapshot the ~/app.css and the theme
const application = __webpack_require__(27);
__webpack_require__(48);
const appCssContext = __webpack_require__(118);
global.registerWebpackModules(appCssContext);
application.loadAppCss();

__webpack_require__(207);

__webpack_require__(96);
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ })
]),[[105,0,1]]]);
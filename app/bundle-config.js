if (global.TNS_WEBPACK) {
    // registers tns-core-modules UI framework modules
    require("@nativescript/core/bundle-entry-points");

    // register application modules
    // This will register each `page` postfixed xml, css, js, ts, scss etc. in the app/ folder
    const context = require.context("~/", true, /(page|fragment)\.(xml|css|js|ts|scss)$/);
    global.registerWebpackModules(context);
}

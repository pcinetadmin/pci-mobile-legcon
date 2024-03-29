// Snapshot the ~/app.css and the theme
const application = require("@nativescript/core/application");
require("@nativescript/core/ui/styling/style-scope");
const appCssContext = require.context("~/", false, /^\.\/app\.(css|scss|less|sass)$/);
global.registerWebpackModules(appCssContext);
application.loadAppCss();

require("./vendor-platform");

require("@nativescript/core/bundle-entry-points");

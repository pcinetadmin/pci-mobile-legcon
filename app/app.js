/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
require("@proplugins/nativescript-platform-css");
const { Page } = require("@nativescript/core");
const application = require("application");

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

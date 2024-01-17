const Auth0LoginViewModel = require("./auth0login-view-model");
const dialogs = require("@nativescript/core/ui/dialogs");
// var orientation = require('@proplugins/nativescript-orientation');
var page;
var auth0LoginViewModel;

function onNavigatingTo(args) {
    // orientation.disableRotation();
}

function onLoaded(args)
{
    page = args.object;

    auth0LoginViewModel = new Auth0LoginViewModel();

    page.bindingContext = auth0LoginViewModel;
}

function onNavigatedTo(args)
{
    try {
        auth0LoginViewModel.onLogin();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoginButtonTap(args) {
    try {
        auth0LoginViewModel.onLogin();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLogoutButtonTap(args) {
    try {
        auth0LoginViewModel.onLogout();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onNavigatedTo = onNavigatedTo;
exports.onLoginButtonTap = onLoginButtonTap;
exports.onLogoutButtonTap = onLogoutButtonTap;

const LoginViewModel = require("./login-view-model");
const platformModule = require("@nativescript/core/platform");
const observableModule = require("@nativescript/core/data/observable");
const appSettings = require("@nativescript/core/application-settings");
const dialogs = require("@nativescript/core/ui/dialogs");
var utilsModule = require("@nativescript/core/utils");
const fingerprintAuthPlugin = require("@nativescript/fingerprint-auth");
var fingerprintAuth = new fingerprintAuthPlugin.FingerprintAuth();
// var orientation = require('@proplugins/nativescript-orientation');
var page;
var loginViewModel;
var email;
var password;
var rememberMe;

function onNavigatingTo(args) {
    // orientation.disableRotation();
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

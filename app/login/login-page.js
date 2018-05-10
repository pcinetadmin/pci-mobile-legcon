const LoginViewModel = require("./login-view-model");
const platformModule = require("platform");
const observableModule = require("data/observable");
const appSettings = require("application-settings");
const dialogs = require("ui/dialogs");
const fingerprintAuthPlugin = require("nativescript-fingerprint-auth");
var fingerprintAuth = new fingerprintAuthPlugin.FingerprintAuth();
var page;
var loginViewModel;
var email;
var password;
var rememberMe;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    page = args.object;

    loginViewModel = new LoginViewModel();

    loginViewModel.email = appSettings.getString("email", "");
    loginViewModel.password = appSettings.getString("password", "");
    loginViewModel.rememberMe = appSettings.getBoolean("rememberMe", false);
    loginViewModel.useTouchId = appSettings.getBoolean("useTouchId", false);

    page.bindingContext = loginViewModel;
}

function onLoaded(args)
{
    
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

                            bindingContext.signIn();
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
        rememberMe = page.getViewById("rememberMe");
        email = page.getViewById("email");
        password = page.getViewById("password");

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

        const button = args.object;
        const bindingContext = button.bindingContext;
        
        bindingContext.signIn();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onForgotPasswordTap() {
    /* ***********************************************************
    * Call your Forgot Password logic here.
    *************************************************************/
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onNavigatedTo = onNavigatedTo;
exports.onSigninButtonTap = onSigninButtonTap;
exports.onForgotPasswordTap = onForgotPasswordTap;

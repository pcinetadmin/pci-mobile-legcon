const platform = require("@nativescript/core/platform");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

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

const platform = require("@nativescript/core/platform");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Primary Contact";

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
        var primaryOfficeContact = page.getViewById("primaryOfficeContact");

        primaryOfficeContact.dismissSoftInput();
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;

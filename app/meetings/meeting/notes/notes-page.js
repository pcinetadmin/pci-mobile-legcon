const platform = require("platform");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

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

const platform = require("platform");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

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

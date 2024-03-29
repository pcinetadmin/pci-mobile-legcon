const platform = require("@nativescript/core/platform");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Follow Up";

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

function onLoaded(args) {
    try {
        var followUpDateDatePicker = page.getViewById("followUpDateDatePicker");

        followUpDateDatePicker.on("dateChange", function(args) {
            var followUpDateLabel = page.getViewById("followUpDateLabel");

            followUpDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadedDatePicker(args) {
    try {
        if (platform.isIOS && platform.Device.osVersion >= '14.0') {
            args.object.ios.preferredDatePickerStyle = 1; // 1 - wheel, 2 - compact, 3 - inline
        }
    }
    catch(e)
    {
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

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("checkedChange", function(args) {
        dismissKeyboard()

        var detailsLabel = page.getViewById("detailsLabel");
        var followUpDetailsStackLayout = page.getViewById("followUpDetailsStackLayout");
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");

        if (args.value) {
            detailsLabel.visibility = "visible";
            followUpDetailsStackLayout.visibility = "visible";
        } else {
            detailsLabel.visibility = "collapse";
            followUpDetailsStackLayout.visibility = "collapse";
        }

        followUpDateDatePickerGridLayout.visibility = "collapse";

        page.addCss("#followUpDateLabel {color: #666;}");
    });
}

function onTextViewFocus(args) {
    try {
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");

        followUpDateDatePickerGridLayout.visibility = "collapse";

        page.addCss("#followUpDateLabel {color: #666;}");
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutFollowUpDateTap(args) {
    try {
        dismissKeyboard()

        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");
        
        if (followUpDateDatePickerGridLayout.visibility === "collapse") {
            followUpDateDatePickerGridLayout.visibility = "visible";

            page.addCss("#followUpDateLabel {color: #cc2d30;}");
        } else {
            followUpDateDatePickerGridLayout.visibility = "collapse";

            page.addCss("#followUpDateLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function dateConverter(value, format) {
    let result = format;

    const day = value.getDate();

    result = result.replace("DD", day < 10 ? `0${day}` : day);

    const month = value.getMonth() + 1;

    result = result.replace("MM", month < 10 ? `0${month}` : month);
    result = result.replace("YYYY", value.getFullYear());

    return result;
}

function dismissKeyboard() {
    if (platform.isAndroid) {
        var followUpNotes = page.getViewById("followUpNotes");

        followUpNotes.dismissSoftInput();
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onLoadedDatePicker = onLoadedDatePicker;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onTextViewFocus = onTextViewFocus;
exports.onStackLayoutFollowUpDateTap = onStackLayoutFollowUpDateTap;

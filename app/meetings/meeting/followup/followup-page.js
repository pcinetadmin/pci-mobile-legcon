var dialogs = require("ui/dialogs");

var page;
var navigationContext;

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Follow Up";

        navigationContext = page.navigationContext;

        page.bindingContext = navigationContext;

    } catch(e) {
        dialogs.alert(e);
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
        dialogs.alert(e);
    }
}

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("checkedChange", function(args) {
        var detailsLabelStackLayout = page.getViewById("detailsLabelStackLayout");
        var detailsStackLayout = page.getViewById("detailsStackLayout");

        if (args.value) {
            detailsLabelStackLayout.visibility = "visible";
            detailsStackLayout.visibility = "visible";
        } else {
            detailsLabelStackLayout.visibility = "collapse";
            detailsStackLayout.visibility = "collapse";
        }
    });
}

function onStackLayoutFollowUpDateTap(args) {
    try {
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
        dialogs.alert(e);
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
};

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onStackLayoutFollowUpDateTap = onStackLayoutFollowUpDateTap;

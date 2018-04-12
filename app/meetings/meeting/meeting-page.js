const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

var venueTypeIndex = 0;
var legislatorIndex = 0;
var attendeeTypeIndex = 0;
var meetingLocationIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    venueTypeIndex: venueTypeIndex,
    venueTypeList: null,
    legislatorIndex: legislatorIndex,
    legislatorList: null,
    attendeeTypeIndex: attendeeTypeIndex,
    attendeeTypeList: null,
    meetingLocationIndex: meetingLocationIndex,
    meetingLocationList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;
        
        pageData.boundData = navigationContext;
        pageData.boundData.result = "";

        var meetingDateDatePicker = page.getViewById("meetingDateDatePicker");
        var followUpDateDatePicker = page.getViewById("followUpDateDatePicker");

        if (pageData.boundData.meetingId === null || pageData.boundData.meetingId === 0) {
            page.actionBar.title = "Add Meeting";

            var today = new Date();

            meetingDateDatePicker.date = today;
        } else {
            page.actionBar.title = "Edit Meeting";

            // meetingDateDatePicker.year = pageData.boundData.meetingDate.getFullYear();
            // meetingDateDatePicker.month = pageData.boundData.meetingDate.getMonth() + 1;
            // meetingDateDatePicker.day = pageData.boundData.meetingDate.getDate();
            meetingDateDatePicker.date = pageData.boundData.meetingDate;
            followUpDateDatePicker.date = pageData.boundData.followUpDate;
        }

        pageData.venueTypeList = global.venueTypeList;

        venueTypeIndex = 0;

        if (pageData.boundData.venueTypeId !== null && pageData.boundData.venueTypeId.toString().length > 0) {
            var i;

            for (i = 0; i < pageData.venueTypeList.List.length; i++) {
                if (pageData.venueTypeList.List.getItem(i).venueTypeId === pageData.boundData.venueTypeId) {
                    venueTypeIndex = i;
                }
            }
        }

        pageData.boundData.venueType = pageData.venueTypeList.List.getItem(venueTypeIndex).venueType;

        pageData.legislatorList = global.legislatorList;

        legislatorIndex = 0;

        if (pageData.boundData.legislatorId !== null && pageData.boundData.legislatorId.toString().length > 0) {
            var i;

            for (i = 0; i < pageData.legislatorList.List.length; i++) {
                if (pageData.legislatorList.List.getItem(i).legislatorId === pageData.boundData.legislatorId) {
                    legislatorIndex = i;
                }
            }
        }

        pageData.boundData.legislator = pageData.legislatorList.List.getItem(legislatorIndex).legislator;

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onLoaded(args) {
    try {
        var meetingDateDatePicker = page.getViewById("meetingDateDatePicker");

        meetingDateDatePicker.on("dateChange", function(args) {
            var meetingDateLabel = page.getViewById("meetingDateLabel");

            pageData.boundData.meetingDate = args.value;

            meetingDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });

        var venueTypeListPicker = page.getViewById("venueTypeListPicker");
        
        venueTypeListPicker.on("selectedIndexChange", function(args) {
            var venueTypeLabel = page.getViewById("venueTypeLabel");

            venueTypeLabel.text = pageData.venueTypeList.Items.getItem(args.object.selectedIndex);
        });

        var followUpDateDatePicker = page.getViewById("followUpDateDatePicker");

        followUpDateDatePicker.on("dateChange", function(args) {
            var followUpDateLabel = page.getViewById("followUpDateLabel");

            pageData.boundData.followUpDate = args.value;

            followUpDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });

        var legislatorListPicker = page.getViewById("legislatorListPicker");
        
        legislatorListPicker.on("selectedIndexChange", function(args) {
            var legislatorLabel = page.getViewById("legislatorLabel");

            legislatorLabel.text = pageData.legislatorList.Items.getItem(args.object.selectedIndex);
        });
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutMeetingDateTap(args) {
    try {
        var meetingDateDatePickerGridLayout = page.getViewById("meetingDateDatePickerGridLayout");
        var venueTypeListPickerGridLayout = page.getViewById("venueTypeListPickerGridLayout");
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");
        var legislatorListPickerGridLayout = page.getViewById("legislatorListPickerGridLayout");
        
        if (meetingDateDatePickerGridLayout.visibility === "collapse") {
            meetingDateDatePickerGridLayout.visibility = "visible";
            venueTypeListPickerGridLayout.visibility = "collapse";
            followUpDateDatePickerGridLayout.visibility = "collapse";
            legislatorListPickerGridLayout.visibility = "collapse";

            page.addCss("#meetingDateLabel {color: #cc2d30;}");
            page.addCss("#venueTypeLabel {color: #666;}");
            page.addCss("#followUpDateLabel {color: #666;}");
            page.addCss("#legislatorLabel {color: #666;}");
        } else {
            meetingDateDatePickerGridLayout.visibility = "collapse";

            page.addCss("#meetingDateLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutVenueTypeTap(args) {
    try {
        var meetingDateDatePickerGridLayout = page.getViewById("meetingDateDatePickerGridLayout");
        var venueTypeListPickerGridLayout = page.getViewById("venueTypeListPickerGridLayout");
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");
        var legislatorListPickerGridLayout = page.getViewById("legislatorListPickerGridLayout");
        
        if (venueTypeListPickerGridLayout.visibility === "collapse") {
            meetingDateDatePickerGridLayout.visibility = "collapse";
            venueTypeListPickerGridLayout.visibility = "visible";
            followUpDateDatePickerGridLayout.visibility = "collapse";
            legislatorListPickerGridLayout.visibility = "collapse";

            page.addCss("#meetingDateLabel {color: #666;}");
            page.addCss("#venueTypeLabel {color: #cc2d30;}");
            page.addCss("#followUpDateLabel {color: #666;}");
            page.addCss("#legislatorLabel {color: #666;}");
        } else {
            venueTypeListPickerGridLayout.visibility = "collapse";

            page.addCss("#venueTypeLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutFollowUpDateTap(args) {
    try {
        var meetingDateDatePickerGridLayout = page.getViewById("meetingDateDatePickerGridLayout");
        var venueTypeListPickerGridLayout = page.getViewById("venueTypeListPickerGridLayout");
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");
        var legislatorListPickerGridLayout = page.getViewById("legislatorListPickerGridLayout");
        
        if (followUpDateDatePickerGridLayout.visibility === "collapse") {
            meetingDateDatePickerGridLayout.visibility = "collapse";
            venueTypeListPickerGridLayout.visibility = "collapse";
            followUpDateDatePickerGridLayout.visibility = "visible";
            legislatorListPickerGridLayout.visibility = "collapse";

            page.addCss("#meetingDateLabel {color: #666;}");
            page.addCss("#venueTypeLabel {color: #666;}");
            page.addCss("#followUpDateLabel {color: #cc2d30;}");
            page.addCss("#legislatorLabel {color: #666;}");
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

function onStackLayoutLegislatorTap(args) {
    try {
        var meetingDateDatePickerGridLayout = page.getViewById("meetingDateDatePickerGridLayout");
        var venueTypeListPickerGridLayout = page.getViewById("venueTypeListPickerGridLayout");
        var followUpDateDatePickerGridLayout = page.getViewById("followUpDateDatePickerGridLayout");
        var legislatorListPickerGridLayout = page.getViewById("legislatorListPickerGridLayout");
        
        if (legislatorListPickerGridLayout.visibility === "collapse") {
            meetingDateDatePickerGridLayout.visibility = "collapse";
            venueTypeListPickerGridLayout.visibility = "collapse";
            followUpDateDatePickerGridLayout.visibility = "collapse";
            legislatorListPickerGridLayout.visibility = "visible";

            page.addCss("#meetingDateLabel {color: #666;}");
            page.addCss("#venueTypeLabel {color: #666;}");
            page.addCss("#followUpDateLabel {color: #666;}");
            page.addCss("#legislatorLabel {color: #cc2d30;}");
            dialogs.alert("you're cool now!");
        } else {
            legislatorListPickerGridLayout.visibility = "collapse";

            page.addCss("#legislatorLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onSave(args) {

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
exports.onStackLayoutMeetingDateTap = onStackLayoutMeetingDateTap;
exports.onStackLayoutVenueTypeTap = onStackLayoutVenueTypeTap;
exports.onStackLayoutFollowUpDateTap = onStackLayoutFollowUpDateTap;
exports.onStackLayoutLegislatorTap = onStackLayoutLegislatorTap;
exports.onSave = onSave;

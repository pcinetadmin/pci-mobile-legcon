const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

var legislatorIndex = 0;
var attendeeTypeIndex = 0;
var meetingLocationIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
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

        var followUpTitle = page.getViewById("followUpTitle");
        var followUpLabel = page.getViewById("followUpLabel");

        if (args.isBackNavigation) {
            var meetingDateLabel = page.getViewById("meetingDateLabel");
            var venueTypeLabel = page.getViewById("venueTypeLabel");

            meetingDateLabel.text = dateConverter(pageData.boundData.meetingDate, "MM/DD/YYYY");
            venueTypeLabel.text = pageData.boundData.venueType;

            if (pageData.boundData.followUpNeeded === true) {
                if (pageData.boundData.followUpDate === null) {
                    followUpTitle.text = "Follow Up Needed?";
                    followUpLabel.text = "Yes";
                } else {
                    followUpTitle.text = "Follow Up Date";
                    followUpLabel.text = dateConverter(pageData.boundData.followUpDate, "MM/DD/YYYY");
                }
            } else {
                followUpTitle.text = "Follow Up Needed?";
                followUpLabel.text = "No";
            }

        } else {
            navigationContext = page.navigationContext;
            
            pageData.boundData = navigationContext;
            pageData.boundData.result = "";

            if (pageData.boundData.meetingId === null || pageData.boundData.meetingId === 0) {
                page.actionBar.title = "Add Meeting";

                var today = new Date();

                //meetingDateDatePicker.date = today;
            } else {
                page.actionBar.title = "Edit Meeting";
            }

            if (pageData.boundData.followUpNeeded === true) {
                if (pageData.boundData.followUpDate === null) {
                    followUpTitle.text = "Follow Up Needed?";
                    followUpLabel.text = "Yes";
                } else {
                    followUpTitle.text = "Follow Up Date";
                    followUpLabel.text = dateConverter(pageData.boundData.followUpDate, "MM/DD/YYYY");
                }
            } else {
                followUpTitle.text = "Follow Up Needed?";
                followUpLabel.text = "No";
            }

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

            // pageData.boundData.fullName = pageData.legislatorList.List.getItem(legislatorIndex).legislator;

            pageData.attendeeTypeList = global.attendeeTypeList;

            attendeeTypeIndex = 0;

            if (pageData.boundData.attendeeTypeId !== null && pageData.boundData.attendeeTypeId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.attendeeTypeList.List.length; i++) {
                    if (pageData.attendeeTypeList.List.getItem(i).attendeeTypeId === pageData.boundData.attendeeTypeId) {
                        attendeeTypeIndex = i;
                    }
                }
            }

            //pageData.boundData.attendeeType = pageData.attendeeTypeList.List.getItem(attendeeTypeIndex).attendeeType;

            pageData.meetingLocationList = global.meetingLocationList;

            meetingLocationIndex = 0;

            if (pageData.boundData.meetingLocationId !== null && pageData.boundData.meetingLocationId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.meetingLocationList.List.length; i++) {
                    if (pageData.meetingLocationList.List.getItem(i).meetingLocationId === pageData.boundData.meetingLocationId) {
                        meetingLocationIndex = i;
                    }
                }
            }

            //pageData.boundData.location = pageData.meetingLocationList.List.getItem(meetingLocationIndex).meetingLocation;

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onLoaded(args) {
    //dialogs.alert(pageData.boundData.followUpNeeded);
    try {
        var legislatorListPicker = page.getViewById("legislatorListPicker");
        
        legislatorListPicker.on("selectedIndexChange", function(args) {
            var legislatorLabel = page.getViewById("legislatorLabel");

            legislatorLabel.text = pageData.legislatorList.Items.getItem(args.object.selectedIndex);
        });

        var attendeeTypeListPicker = page.getViewById("attendeeTypeListPicker");
        
        attendeeTypeListPicker.on("selectedIndexChange", function(args) {
            var attendeeTypeLabel = page.getViewById("attendeeTypeLabel");

            attendeeTypeLabel.text = pageData.attendeeTypeList.Items.getItem(args.object.selectedIndex);
        });

        var meetingLocationListPicker = page.getViewById("meetingLocationListPicker");
        
        meetingLocationListPicker.on("selectedIndexChange", function(args) {
            var meetingLocationLabel = page.getViewById("meetingLocationLabel");

            meetingLocationLabel.text = pageData.meetingLocationList.Items.getItem(args.object.selectedIndex);
        });
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutMeetingDateTap(args) {
    try {
        const navigationEntry = {
            moduleName: "meetings/meeting/meetingdate/meetingdate-page",
            context: pageData.boundData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutVenueTypeTap(args) {
    try {
        const navigationEntry = {
            moduleName: "meetings/meeting/venuetype/venuetype-page",
            context: pageData.boundData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutFollowUpTap(args) {
    try {
        const navigationEntry = {
            moduleName: "meetings/meeting/followup/followup-page",
            context: pageData.boundData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutLegislatorTap(args) {
    try {
        var legislatorListPickerGridLayout = page.getViewById("legislatorListPickerGridLayout");
        var attendeeTypeListPickerGridLayout = page.getViewById("attendeeTypeListPickerGridLayout");
        var meetingLocationListPickerGridLayout = page.getViewById("meetingLocationListPickerGridLayout");
        
        if (legislatorListPickerGridLayout.visibility === "collapse") {
            legislatorListPickerGridLayout.visibility = "visible";
            attendeeTypeListPickerGridLayout.visibility = "collapse";
            meetingLocationListPickerGridLayout.visibility = "collapse";

            page.addCss("#legislatorLabel {color: #cc2d30;}");
            page.addCss("#attendeeTypeLabel {color: #666;}");
            page.addCss("#meetingLocationTypeLabel {color: #666;}");
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

function onStackLayoutAttendeeTypeTap(args) {
    try {
        var legislatorListPickerGridLayout = page.getViewById("legislatorListPickerGridLayout");
        var attendeeTypeListPickerGridLayout = page.getViewById("attendeeTypeListPickerGridLayout");
        var meetingLocationListPickerGridLayout = page.getViewById("meetingLocationListPickerGridLayout");
        
        if (attendeeTypeListPickerGridLayout.visibility === "collapse") {
            legislatorListPickerGridLayout.visibility = "collapse";
            attendeeTypeListPickerGridLayout.visibility = "visible";
            meetingLocationListPickerGridLayout.visibility = "collapse";

            page.addCss("#legislatorLabel {color: #666;}");
            page.addCss("#attendeeTypeLabel {color: #cc2d30;}");
            page.addCss("#meetingLocationTypeLabel {color: #666;}");
        } else {
            attendeeTypeListPickerGridLayout.visibility = "collapse";

            page.addCss("#attendeeTypeLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutMeetingLocationTap(args) {
    try {
        var legislatorListPickerGridLayout = page.getViewById("legislatorListPickerGridLayout");
        var attendeeTypeListPickerGridLayout = page.getViewById("attendeeTypeListPickerGridLayout");
        var meetingLocationListPickerGridLayout = page.getViewById("meetingLocationListPickerGridLayout");
        
        if (attendeeTypeListPickerGridLayout.visibility === "collapse") {
            legislatorListPickerGridLayout.visibility = "collapse";
            attendeeTypeListPickerGridLayout.visibility = "collapse";
            meetingLocationListPickerGridLayout.visibility = "visible";

            page.addCss("#legislatorLabel {color: #666;}");
            page.addCss("#attendeeTypeLabel {color: #666;}");
            page.addCss("#meetingLocationTypeLabel {color: #cc2d30;}");
        } else {
            meetingLocationListPickerGridLayout.visibility = "collapse";

            page.addCss("#meetingLocationTypeLabel {color: #666;}");
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
exports.onStackLayoutFollowUpTap = onStackLayoutFollowUpTap;
exports.onStackLayoutLegislatorTap = onStackLayoutLegislatorTap;
exports.onStackLayoutAttendeeTypeTap = onStackLayoutAttendeeTypeTap;
exports.onSave = onSave;

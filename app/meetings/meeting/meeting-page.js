const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

var pageData = new ObservableModule.fromObject({
    boundData: null
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        var followUpTitle = page.getViewById("followUpTitle");
        var followUpLabel = page.getViewById("followUpLabel");

        if (args.isBackNavigation) {
            var venueTypeLabel = page.getViewById("venueTypeLabel");
            var legislatorLabel = page.getViewById("legislatorLabel");
            var attendeeTypeLabel = page.getViewById("attendeeTypeLabel");
            var meetingLocationLabel = page.getViewById("meetingLocationLabel");

            venueTypeLabel.text = pageData.boundData.venueType;
            legislatorLabel.text = pageData.boundData.fullName;
            attendeeTypeLabel.text = pageData.boundData.attendeeType;
            meetingLocationLabel.text = pageData.boundData.location;

            if (pageData.boundData.followUpNeeded === true || pageData.boundData.followUpNeeded === "true") {
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
            } else {
                page.actionBar.title = "Edit Meeting";
            }

            if (pageData.boundData.followUpNeeded === true || pageData.boundData.followUpNeeded === "true") {
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

            page.bindingContext = pageData;
        }
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

            meetingDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutMeetingDateTap(args) {
    try {
        var meetingDateGridLayout = page.getViewById("meetingDateGridLayout");
        
        if (meetingDateGridLayout.visibility === "collapse") {
            meetingDateGridLayout.visibility = "visible";

            page.addCss("#meetingDateLabel {color: #cc2d30;}");
        } else {
            meetingDateGridLayout.visibility = "collapse";

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

function onStackLayoutInitiativesTap(args) {
    try
    {
        const navigationEntry = {
            moduleName: "meetings/meeting/initiatives/initiatives-page",
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

function onStackLayoutSurveysTap(args) {
    try
    {
        const navigationEntry = {
            moduleName: "legislators/legislator/surveys/surveys-page",
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
        const navigationEntry = {
            moduleName: "meetings/meeting/legislator/legislator-page",
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

function onStackLayoutAttendeeTypeTap(args) {
    try {
        const navigationEntry = {
            moduleName: "meetings/meeting/attendeetype/attendeetype-page",
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

function onStackLayoutMeetingLocationTap(args) {
    try {
        const navigationEntry = {
            moduleName: "meetings/meeting/meetinglocation/meetinglocation-page",
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

function onStackLayoutPciAttendeesTap(args) {
    try
    {
        pageData.boundData.relationalType = "meeting";
        pageData.boundData.relationalId = pageData.boundData.meetingId;    

        const navigationEntry = {
            moduleName: "profiles/profiles-page",
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

function onSave(args) {
    // dialogs.alert(pageData.boundData.meetingId + ": " + pageData.boundData.fullName);
    var result;

    http.request({
        url: global.apiBaseServiceUrl + "insertupdatemeeting",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData.boundData)
    }).then(function (response) {
        // result = response.content.toJSON();
        // dialogs.alert(result);
        
        // pageData.boundData.result = "Update";

        frameModule.topmost().goBack();
    }, function (e) {
        dialogs.alert(e);
    });

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
exports.onStackLayoutInitiativesTap = onStackLayoutInitiativesTap;
exports.onStackLayoutSurveysTap = onStackLayoutSurveysTap;
exports.onStackLayoutLegislatorTap = onStackLayoutLegislatorTap;
exports.onStackLayoutAttendeeTypeTap = onStackLayoutAttendeeTypeTap;
exports.onStackLayoutMeetingLocationTap = onStackLayoutMeetingLocationTap;
exports.onStackLayoutPciAttendeesTap = onStackLayoutPciAttendeesTap;
exports.onSave = onSave;

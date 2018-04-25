const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
const appModule = require("application");
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

        const limitText = (text, limit) => {
            let result = text;

            if (result.length > limit) {
                for (var i = limit; i > 0; i--) {
                    var position = result.indexOf(" ", i);

                    if (position > -1 && position <= limit) {
                        result = result.substr(0, position) + "..."

                        break;
                    }
                }
            }

            return result;
        };

        appModule.getResources().limitText = limitText;

        if (args.isBackNavigation) {
            var venueTypeLabel = page.getViewById("venueTypeLabel");
            var notesLabel = page.getViewById("notesLabel");
            var legislatorLabel = page.getViewById("legislatorLabel");
            var attendeeTypeLabel = page.getViewById("attendeeTypeLabel");
            var meetingLocationLabel = page.getViewById("meetingLocationLabel");
            var staffAttendeesLabel = page.getViewById("staffAttendeesLabel");

            venueTypeLabel.text = pageData.boundData.venueType;
            notesLabel.text = limitText(pageData.boundData.notes, 30);
            legislatorLabel.text = pageData.boundData.fullName;
            attendeeTypeLabel.text = pageData.boundData.attendeeType;
            meetingLocationLabel.text = pageData.boundData.location;
            staffAttendeesLabel.text = limitText(pageData.boundData.legislatorStaffAttendees, 20);

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

function onStackLayoutNotesTap(args) {
    try {
        const navigationEntry = {
            moduleName: "meetings/meeting/notes/notes-page",
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
        saveMeeting("meetings/meeting/initiatives/initiatives-page", false);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutSurveysTap(args) {
    try
    {
        saveMeeting("legislators/legislator/surveys/surveys-page", false);
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
        saveMeeting("profiles/profiles-page", true);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutStaffAttendeesTap(args) {
    try {
        const navigationEntry = {
            moduleName: "meetings/meeting/staffattendees/staffattendees-page",
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
    saveMeeting(null, false);
}

function saveMeeting(moduleName, isAttendees) {
    var isAdd = false;

    if (pageData.boundData.meetingId === null || pageData.boundData.meetingId === 0) {
        isAdd = true;
    }

    http.request({
        url: global.apiBaseServiceUrl + "insertupdatemeeting",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData.boundData)
    }).then(function (response) {
        var result = response.content.toString();
        var data = JSON.parse(result);
        
        if (data.MeetingId !== null)
        {
            if (isAdd) {
                if (pageData.boundData.assignmentId !== null && pageData.boundData.assignmentId !== 0) {
                    global.refreshAssignments = true;
                }
            }

            if (moduleName === null) {
                pageData.boundData.meetingId = data.MeetingId;

                frameModule.topmost().goBack();
            } else {
                pageData.boundData.meetingId = data.MeetingId;

                if (isAttendees) {
                    pageData.boundData.relationalType = "meeting";
                    pageData.boundData.relationalId = pageData.boundData.meetingId; 
                }
                
                const navigationEntry = {
                    moduleName: moduleName,
                    context: pageData.boundData,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        } else {
            dialogs.alert("There was an error saving the meeting.");
        }
        
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
exports.onStackLayoutNotesTap = onStackLayoutNotesTap;
exports.onStackLayoutFollowUpTap = onStackLayoutFollowUpTap;
exports.onStackLayoutInitiativesTap = onStackLayoutInitiativesTap;
exports.onStackLayoutSurveysTap = onStackLayoutSurveysTap;
exports.onStackLayoutLegislatorTap = onStackLayoutLegislatorTap;
exports.onStackLayoutAttendeeTypeTap = onStackLayoutAttendeeTypeTap;
exports.onStackLayoutMeetingLocationTap = onStackLayoutMeetingLocationTap;
exports.onStackLayoutPciAttendeesTap = onStackLayoutPciAttendeesTap;
exports.onStackLayoutStaffAttendeesTap = onStackLayoutStaffAttendeesTap;
exports.onSave = onSave;

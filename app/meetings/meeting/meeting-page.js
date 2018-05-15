const MeetingViewModel = require("./meeting-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
const appModule = require("application");
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

// var pageData = new ObservableModule.fromObject({
//     boundData: null
// });

var pageData = new ObservableModule.Observable();

function onNavigatingTo(args) {
    try {
        page = args.object;

        var followUpTitle = page.getViewById("followUpTitle");
        var followUpLabel = page.getViewById("followUpLabel");

        const limitText = (text, limit) => {
            let result = text;

            if (result !== null) {
                if (result.length > limit) {
                    for (var i = limit; i > 0; i--) {
                        var position = result.indexOf(" ", i);

                        if (position > -1 && position <= limit) {
                            result = result.substr(0, position) + "..."

                            break;
                        }
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

            venueTypeLabel.text = pageData.venueType;
            notesLabel.text = limitText(pageData.notes, 30);
            legislatorLabel.text = pageData.fullName;
            attendeeTypeLabel.text = pageData.attendeeType;
            meetingLocationLabel.text = pageData.location;
            staffAttendeesLabel.text = limitText(pageData.legislatorStaffAttendees, 20);

            if (pageData.followUpNeeded === true || pageData.followUpNeeded === "true") {
                if (pageData.followUpDate === null) {
                    followUpTitle.text = "Follow Up Needed?";
                    followUpLabel.text = "Yes";
                } else {
                    followUpTitle.text = "Follow Up Date";
                    followUpLabel.text = dateConverter(pageData.followUpDate, "MM/DD/YYYY");
                }
            } else {
                followUpTitle.text = "Follow Up Needed?";
                followUpLabel.text = "No";
            }

            if (pageData.updated) {
                var currentMeeting = new MeetingViewModel();

                currentMeeting.load(pageData.meetingId).then(function () {
                    var initiativesLabel = page.getViewById("initiativesLabel");
                    var surveysLabel = page.getViewById("surveysLabel");
                    var pciAttendeesLabel = page.getViewById("pciAttendeesLabel");

                    pageData.pciInitiatives = currentMeeting.pciInitiatives;
                    pageData.surveys = currentMeeting.surveys;
                    pageData.pciAttendees = currentMeeting.pciAttendees;
                    
                    initiativesLabel.text = limitText(pageData.pciInitiatives, 25);
                    surveysLabel.text = limitText(pageData.surveys, 25);
                    pciAttendeesLabel.text = limitText(pageData.pciAttendees, 25);

                    pageData.updated = false;
                });
            }

        } else {
            navigationContext = page.navigationContext;
            
            pageData = navigationContext;
            pageData.result = "";

            if (pageData.meetingId === null || pageData.meetingId === 0) {
                page.actionBar.title = "Add Meeting";
            } else {
                page.actionBar.title = "Edit Meeting";
            }

            if (pageData.followUpNeeded === true || pageData.followUpNeeded === "true") {
                if (pageData.followUpDate === null) {
                    followUpTitle.text = "Follow Up Needed?";
                    followUpLabel.text = "Yes";
                } else {
                    followUpTitle.text = "Follow Up Completed";
                    followUpLabel.text = dateConverter(pageData.followUpDate, "MM/DD/YYYY");
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
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
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
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
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
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutVenueTypeTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/venuetype/venuetype-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutNotesTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/notes/notes-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutFollowUpTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/followup/followup-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutInitiativesTap(args) {
    try
    {
        collapseMeetingDate();

        if (pageData.meetingId === null || pageData.meetingId === 0) {
            if (platform.isAndroid) {
                dialogs.confirm({
                    title: "Save",
                    message: "A new meeting must be saved prior to adding an initiative. Would you like to save this meeting?",
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                }).then(function (result) {
                    if (result) {
                        saveMeeting("meetings/meeting/initiatives/initiatives-page", false);
                    }
                });
            } else if (platform.isIOS) {
                dialogs.action({
                    message: "A new meeting must be saved prior to adding an initiative. Would you like to save this meeting?",
                    cancelButtonText: "Cancel",
                    actions: ["Save"]
                }).then(function (result) {
                    if (result === "Save") {
                        saveMeeting("meetings/meeting/initiatives/initiatives-page", false);
                    }
                });
            }
        } else {
            pageData.relationalType = "meeting";
            pageData.relationalId = pageData.meetingId;
            
            const navigationEntry = {
                moduleName: "meetings/meeting/initiatives/initiatives-page",
                context: pageData,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutSurveysTap(args) {
    try
    {
        collapseMeetingDate();

        if (pageData.meetingId === null || pageData.meetingId === 0) {
            if (platform.isAndroid) {
                dialogs.confirm({
                    title: "Save",
                    message: "A new meeting must be saved prior to adding a survey. Would you like to save this meeting?",
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                }).then(function (result) {
                    if (result) {
                        saveMeeting("legislators/legislator/surveys/surveys-page", false);
                    }
                });
            } else if (platform.isIOS) {
                dialogs.action({
                    message: "A new meeting must be saved prior to adding a survey. Would you like to save this meeting?",
                    cancelButtonText: "Cancel",
                    actions: ["Save"]
                }).then(function (result) {
                    if (result === "Save") {
                        saveMeeting("legislators/legislator/surveys/surveys-page", true);
                    }
                });
            }
        } else {
            pageData.relationalType = "meeting";
            pageData.relationalId = pageData.meetingId;
            
            const navigationEntry = {
                moduleName: "legislators/legislator/surveys/surveys-page",
                context: pageData,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutLegislatorTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/legislator/legislator-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutAttendeeTypeTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/attendeetype/attendeetype-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutMeetingLocationTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/meetinglocation/meetinglocation-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutPciAttendeesTap(args) {
    try
    {
        collapseMeetingDate();

        if (pageData.meetingId === null || pageData.meetingId === 0) {
            if (platform.isAndroid) {
                dialogs.confirm({
                    title: "Save",
                    message: "A new meeting must be saved prior to adding PCI attendees. Would you like to save this meeting?",
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                }).then(function (result) {
                    if (result) {
                        saveMeeting("profiles/profiles-page", false);
                    }
                });
            } else if (platform.isIOS) {
                dialogs.action({
                    message: "A new meeting must be saved prior to adding PCI attendees. Would you like to save this meeting?",
                    cancelButtonText: "Cancel",
                    actions: ["Save"]
                }).then(function (result) {
                    if (result === "Save") {
                        saveMeeting("profiles/profiles-page", true);
                    }
                });
            }
        } else {
            pageData.relationalType = "meeting";
            pageData.relationalId = pageData.meetingId;
            
            const navigationEntry = {
                moduleName: "profiles/profiles-page",
                context: pageData,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
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

function onStackLayoutStaffAttendeesTap(args) {
    try {
        collapseMeetingDate();

        const navigationEntry = {
            moduleName: "meetings/meeting/staffattendees/staffattendees-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
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
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSaveTap(args) {
    try {
        collapseMeetingDate();

        saveMeeting(null, false);
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function saveMeeting(moduleName, isAttendees) {
    var isAdd = false;

    if (pageData.meetingId === null || pageData.meetingId === 0) {
        isAdd = true;
    }

    http.request({
        url: global.apiBaseServiceUrl + "insertupdatemeeting",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData)
    }).then(function (response) {
        var result = response.content.toString();
        var data = JSON.parse(result);
        
        if (data.MeetingId !== null)
        {
            if (isAdd) {
                if (pageData.assignmentId !== null && pageData.assignmentId !== 0) {
                    global.refreshAssignments = true;
                }
            }

            if (moduleName === null) {
                pageData.meetingId = data.MeetingId;

                frameModule.topmost().goBack();
            } else {
                pageData.meetingId = data.MeetingId;

                //if (isAttendees) {
                    pageData.relationalType = "meeting";
                    pageData.relationalId = pageData.meetingId; 
                //}
                
                const navigationEntry = {
                    moduleName: moduleName,
                    context: pageData,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        } else {
            dialogs.alert("There was an error saving the meeting.");
        }
        
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
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

function collapseMeetingDate() {
    var meetingDateGridLayout = page.getViewById("meetingDateGridLayout");

    meetingDateGridLayout.visibility = "collapse";

    page.addCss("#meetingDateLabel {color: #666;}");
}

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
exports.onBackTap = onBackTap;
exports.onSaveTap = onSaveTap;

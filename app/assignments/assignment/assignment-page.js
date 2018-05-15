const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Assignment";

        if (args.isBackNavigation) {
            if (global.refreshAssignments !== undefined && global.refreshAssignments === true) {
                // page.bindingContext.set("meetingCreated", "Y");
                // page.bindingContext.set("lobbyistId", global.personId);
                // page.bindingContext.set("lobbyist", global.currentUser);
                page.bindingContext.meetingCreated = "Y";
                page.bindingContext.lobbyistId = global.personId;
                page.bindingContext.lobbyist = global.currentUser;

                var lobbyistGridLayout = page.getViewById("lobbyistGridLayout");
                var lobbyistLabel = page.getViewById("lobbyistLabel");

                lobbyistGridLayout.visibility = "visible";
                lobbyistLabel.text = global.currentUser;
            }
        } else {
            global.refreshAssignments = false;

            page.bindingContext = navigationContext;
        }
    } catch(e) {
        dialogs.alert(e);
    }
    
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAddTap(args) {
    try
    {
        var model = {
            meetingId: 0,
            meetingDate: new Date(),
            venueTypeId: 1,
            venueType: "In Person",
            attendeeTypeId: 1,
            attendeeType: "Staff Only",
            lobbyistId: global.personId,
            lobbyist: null,
            legislatorId: navigationContext.legislatorId,
            fullName: navigationContext.legislator,
            name: null,
            pciInitiatives: navigationContext.initiative,
            surveys: navigationContext.survey,
            pciAttendees: global.currentUser,
            primaryOfficeContact: null,
            meetingLocationId: 1,
            location: "Meeting in District",
            legislatorStaffAttendees: null,
            followUpNeeded: false,
            followUpDate: null,
            followUpNotes: null,
            creatorId: global.personId,
            notes: null,
            initiativeId: navigationContext.initiativeId,
            surveyId: navigationContext.surveyId,
            assignmentId: navigationContext.assignmentId
        }

        const navigationEntry = {
            moduleName: "meetings/meeting/meeting-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;

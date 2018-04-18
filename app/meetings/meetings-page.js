const MeetingsViewModel = require("./meetings-view-model");
// const LegislatorViewModel = require("./meeting/legislator/legislator-view-model");
const ObservableModule = require("data/observable");
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var swipeOpen = false;

var meetingsList = new MeetingsViewModel([]);
// var legislatorList = new LegislatorViewModel([]);

var pageData = new ObservableModule.fromObject({
    meetingsList: meetingsList,
    reference: "tab",
    recentMeetings: "Y",
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        page.actionBar.title = "Meetings";
        
        navigationContext = page.navigationContext;

        if (navigationContext.reference === "tab") {
            pageData.reference = "tab";
        } else {
            pageData.reference = "nav";
        }

        if (args.isBackNavigation) {
            meetingsList.empty();

            pageData.set("isLoading", true);

            meetingsList.load(pageData.reference, navigationContext.legislatorId, pageData.recentMeetings).then(function () {
                    pageData.set("isLoading", false);

                    page.bindingContext = pageData;
            });
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.
            // page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        if (args.newIndex === 0) {
            pageData.recentMeetings = "Y";
        }
        else {
            pageData.recentMeetings = "N";
        }

        meetingsList.empty();

        pageData.set("isLoading", true);

        meetingsList.load(pageData.reference, navigationContext.legislatorId, pageData.recentMeetings).then(function () {
            // NEED THE FOLLOWING COMMENTED CODE ONCE WE ALLOW THE LEGISLATOR FIELD TO BE EDITABLE.
            // if (global.legislatorList === undefined) {
            //     legislatorList.load().then(function () {
            //         global.legislatorList = legislatorList;

            //         pageData.set("isLoading", false);

            //         page.bindingContext = pageData;
            //     });
            // } else {
                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            // }
        });
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try
    {
        if (swipeOpen) {
            var meetingsListView = page.getViewById("meetingsListView");

            meetingsListView.notifySwipeToExecuteFinished();

            swipeOpen = false;
        } else {
            var view = args.view;

            model = view.bindingContext;

            const navigationEntry = {
                moduleName: "meetings/meeting/meeting-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
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
            fullName: navigationContext.fullName,
            name: null,
            pciInitiatives: null,
            primaryOfficeContact: null,
            meetingLocationId: 1,
            location: "Meeting in District",
            legislatorStaffAttendees: null,
            followUpNeeded: false,
            followUpDate: null,
            followUpNotes: null,
            creatorId: global.personId,
            notes: null,
            initiativeId: null,
            surveyId: null,
            assignmentId: null
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

function onSwipeCellStarted(args) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args.object;
    // var leftItem = swipeView.getViewById("leftIcons");
    var rightItem = swipeView.getViewById("rightIcons");

    swipeLimits.left = 0; //leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;

    swipeOpen = true;
}

function onRightSwipeClick(args) {
    if (args.object.id === "deleteIcon") {
        dialogs.action({
            message: "Would you like to delete this meeting?",
            cancelButtonText: "Cancel",
            actions: ["Delete"]
        }).then(function (result) {
            if (result === "Delete") {
                var view = args.object;

                http.request({
                    url: global.apiBaseServiceUrl + "deletemeeting",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": global.token },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    meetingsList.empty();
        
                    pageData.set("isLoading", true);
        
                    meetingsList.load(pageData.reference, navigationContext.legislatorId, pageData.recentMeetings).then(function () {
                            pageData.set("isLoading", false);
        
                            page.bindingContext = pageData;
                    });
                    
                }, function (e) {
                    dialogs.alert(e);
                });
            }
        });
    }

    var meetingsListView = page.getViewById("meetingsListView");

    meetingsListView.notifySwipeToExecuteFinished();

    swipeOpen = false;
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
exports.onAddTap = onAddTap;
exports.onSwipeCellStarted = onSwipeCellStarted;
exports.onRightSwipeClick = onRightSwipeClick;

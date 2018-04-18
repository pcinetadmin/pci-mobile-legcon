const AssignmentsViewModel = require("./assignments-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var searchBar;
var assignmentsPageSize = 25;
var assignmentsSearchText = "";
var meetingCreated = "N";
var assignmentsSearchSubmitted = false;
var swipeOpen = false;

var assignmentsList = new AssignmentsViewModel([]);

var pageData = new observableModule.fromObject({
    assignmentsList: assignmentsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Assignments";

        if (args.isBackNavigation) {
            assignmentsList.empty();

            pageData.set("isLoading", true);

            assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function () {
                pageData.set("isLoading", false);
            });
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.
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
            meetingCreated = "N";
        } else {
            meetingCreated = "Y";
        }

        assignmentsList.empty();

        pageData.set("isLoading", true);

        assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    // iOS Styling
    searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
    searchBar.ios.showsCancelButton = true;
}

function onSubmit(args)
{
    searchBar = args.object;

    assignmentsSearchText = searchBar.text.trim();

    assignmentsList.empty();
    
    pageData.set("isLoading", true);

    assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function (){
        pageData.set("isLoading", false);

        assignmentsSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    assignmentsSearchText = "";

    if (assignmentsSearchSubmitted) {
        assignmentsList.empty();
        
        pageData.set("isLoading", true);

        assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function (){
            pageData.set("isLoading", false);

            assignmentsSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemTap(args) {
    try
    {
        if (swipeOpen) {
            var assignmentsListView = page.getViewById("assignmentsListView");

            assignmentsListView.notifySwipeToExecuteFinished();

            swipeOpen = false;
        } else {
            var view = args.view;
            var model = view.bindingContext;

            const navigationEntry = {
                moduleName: "assignments/assignment/assignment-page",
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

function onLoadMoreItems(args)
{
    var assignmentsListCount = assignmentsList.length;
    var assignmentsPageNumber = Math.ceil(assignmentsListCount / assignmentsPageSize) + 1;
    var assignmentsRemainder = assignmentsListCount % assignmentsPageSize;

    if (assignmentsRemainder !== 0 && assignmentsRemainder < assignmentsPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    assignmentsList.load(meetingCreated, assignmentsSearchText, assignmentsPageNumber, assignmentsPageSize).then(function (){
        pageData.set("isLoading", false);
    });
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
    var view = args.object;
    
    if (args.object.id === "addIcon") {
        var model = {
            meetingId: 0,
            meetingDate: new Date(),
            venueTypeId: 1,
            venueType: "In Person",
            attendeeTypeId: 1,
            attendeeType: "Staff Only",
            lobbyistId: global.personId,
            lobbyist: null,
            legislatorId: view.bindingContext.legislatorId,
            fullName: view.bindingContext.legislator,
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
            initiativeId: view.bindingContext.initiativeId,
            surveyId: view.bindingContext.surveyId,
            assignmentId: view.bindingContext.assignmentId
        }

        const navigationEntry = {
            moduleName: "meetings/meeting/meeting-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }

    var assignmentsListView = page.getViewById("assignmentsListView");

    assignmentsListView.notifySwipeToExecuteFinished();

    swipeOpen = false;
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onSwipeCellStarted = onSwipeCellStarted;
exports.onRightSwipeClick = onRightSwipeClick;

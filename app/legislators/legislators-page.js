const LegislatorsViewModel = require("./legislators-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var gestures = require("ui/gestures");
var dialogs = require("ui/dialogs");
var page;
// var view;
var searchBar;
var legislatorsPageSize = 25;
var legislatorsSearchText = "";
var legislatorsSearchSubmitted = false;

var swipeOpen = false;

var legislatorsList = new LegislatorsViewModel([]);

var pageData = new observableModule.fromObject({
    legislatorsList: legislatorsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Legislators";

        if (legislatorsList.length === 0) {
            pageData.set("isLoading", true);

            legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function () {
                pageData.set("isLoading", false);
            });
        }

        page.bindingContext = pageData;

        // var observerTap = page.observe(gestures.GestureTypes.tap, function (args) {
        //     searchBar.dismissSoftInput(); })
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

// function onViewLoaded(args) {
//     view = args.object;
//     page = view.page;
    
//     page.actionBar.title = "Legislators";

//     //legislatorsList.empty();
    
//     if (legislatorsList.length === 0) {
//         viewData.set("isLoading", true);

//         legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function () {
//             viewData.set("isLoading", false);
//         });

//         view.bindingContext = viewData;
//     }

//     // var observerTap = page.observe(gestures.GestureTypes.tap, function (args) {
//     //     searchBar.dismissSoftInput(); })
// }

// function onViewUnloaded(args) {

// }

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    // iOS Styling
    searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
    searchBar.ios.showsCancelButton = true;
    // searchbar.ios.setShowsCancelButtonAnimated(true, true);
}

function onSubmit(args)
{
    searchBar = args.object;

    legislatorsSearchText = searchBar.text.trim();

    legislatorsList.empty();
    
    pageData.set("isLoading", true);

    legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function (){
        pageData.set("isLoading", false);

        legislatorsSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    legislatorsSearchText = "";

    if (legislatorsSearchSubmitted) {
        legislatorsList.empty();
        
        pageData.set("isLoading", true);

        legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function (){
            pageData.set("isLoading", false);

            legislatorsSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onButtonTap(args) {
    searchBar.ios.showsCancelButton = !searchBar.ios.showsCancelButton;
}

function onItemTap(args) {
    try
    {
        if (swipeOpen) {
            var legislatorsListView = page.getViewById("legislatorsListView");

            legislatorsListView.notifySwipeToExecuteFinished();

            swipeOpen = false;
        } else {
            var view = args.view;
            var model = view.bindingContext;

            const navigationEntry = {
                moduleName: "legislators/legislator/legislator-page",
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
    var legislatorsListCount = legislatorsList.length;
    var legislatorsPageNumber = Math.ceil(legislatorsListCount / legislatorsPageSize) + 1;
    var legislatorsRemainder = legislatorsListCount % legislatorsPageSize;

    if (legislatorsRemainder !== 0 && legislatorsRemainder < legislatorsPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    legislatorsList.load(legislatorsSearchText, legislatorsPageNumber, legislatorsPageSize).then(function (){
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
    var swipeIconId = args.object.id;

    if (swipeIconId === "addIcon") {
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

    } else if (swipeIconId === "viewIcon") {
        var view = args.object;
        var model = view.bindingContext;

        model.reference = "nav";
        model.relationalType = "legislator";
        model.relationalId = view.bindingContext.legislatorId;

        const navigationEntry = {
            moduleName: "meetings/meetings-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);

    }

    var legislatorsListView = page.getViewById("legislatorsListView");

    legislatorsListView.notifySwipeToExecuteFinished();

    swipeOpen = false;
}

exports.onNavigatingTo = onNavigatingTo;
// exports.onViewLoaded = onViewLoaded;
// exports.onViewUnloaded = onViewUnloaded;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onButtonTap = onButtonTap;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onSwipeCellStarted = onSwipeCellStarted;
exports.onRightSwipeClick = onRightSwipeClick;

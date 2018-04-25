const AssignmentsViewModel = require("./assignments-view-model");
const ObservableModule = require("data/observable");
var gestures = require("ui/gestures");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.5;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var searchBar;
var assignmentsPageSize = 25;
var assignmentsSearchText = "";
var meetingCreated = "N";
var assignmentsSearchSubmitted = false;

var assignmentsList = new AssignmentsViewModel([]);

var pageData = new ObservableModule.fromObject({
    assignmentsList: assignmentsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Assignments";

        if (args.isBackNavigation) {
            if (global.refreshAssignments !== undefined && global.refreshAssignments === true) {
                assignmentsList.empty();

                pageData.set("isLoading", true);

                assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function () {
                    pageData.set("isLoading", false);

                    global.refreshAssignments = false;
                });
            }
        } else {
            if (assignmentsSearchText !== "") {
                var searchBar = page.getViewById("searchBar");

                searchBar.text = assignmentsSearchText;
            }
        
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

function onSearchBarLoaded(args) {
    searchBar = args.object;

    // iOS Styling
    searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
    searchBar.ios.showsCancelButton = true;
    // searchbar.ios.setShowsCancelButtonAnimated(true, true);
}

function onSubmit(args) {
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

function onClear(args) {
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

function onItemLoading(args) {
    var cell = args.ios;

    cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
}

function onItemTap(args) {
    try {
        if (swipeOpen) {
            swipedItem.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });

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

function onLoadMoreItems(args) {
    try {
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
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAddClick(args) {
    var view = args.object;
    
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

    if (swipeOpen) {
        swipedItem.animate({
            translate: { x: 0, y: 0 },
            duration: 200
        });

        swipeOpen = false;
    }
}

function onLayoutLoaded(args) {
    var layout = args.object;

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                if (view.bindingContext.meetingCreated === "N") {
                    var assignmentsListView = page.getViewById("assignmentsListView");
    
                    assignmentsListView.ios.scrollEnabled = false;
    
                    swipeOpen = true;
                    swipedItem = layout;

                    var newX = layout.translateX + args.deltaX;

                    if (newX >= MIN_X && newX <= MAX_X) {
                        layout.translateX = newX;
                    }
                    
                    if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                        // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                        let destX = 0;
                        
                        // if user hit or crossed the THESHOLD either way, let's finish in that direction
                        if (newX <= MIN_X * THRESHOLD) {
                            destX = MIN_X;
                        } else if (newX >= MAX_X * THRESHOLD) {
                            destX = MAX_X;
                        }
                        
                        layout.animate({
                            translate: { x: destX, y: 0 },
                            duration: 200
                        });
                    }

                    assignmentsListView.ios.scrollEnabled = true;
                    isSwiping = false;
                } else {
                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert(e);
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onAddClick = onAddClick;

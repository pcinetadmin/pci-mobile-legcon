const LegislatorsViewModel = require("./legislators-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var gestures = require("ui/gestures");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

const MIN_X = -160;
const MAX_X = 0;
const THRESHOLD = 0.25;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
// var view;
var searchBar;
var legislatorsPageSize = 25;
var legislatorsSearchText = "";
var legislatorsSearchSubmitted = false;

var legislatorsList = new LegislatorsViewModel([]);

var pageData = new ObservableModule.fromObject({
    legislatorsList: legislatorsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Legislators";

        if (legislatorsSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = legislatorsSearchText;
        }
        
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
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
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

function onSearchBarLoaded(args) {
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
        //searchBar.ios.animated = true;
        // searchbar.ios.setShowsCancelButtonAnimated(true, true);
    }
}

function onSubmit(args) {
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

function onClear(args) {
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

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    }
}

// function onButtonTap(args) {
//     searchBar.ios.showsCancelButton = !searchBar.ios.showsCancelButton;
// }

function onItemTap(args) {
    try {
        if (platform.isIOS) {
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
                    moduleName: "legislators/legislator/legislator-page",
                    context: model,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
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

function onLoadMoreItems(args) {
    try {
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
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
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
        fullName: view.bindingContext.fullName,
        name: null,
        pciInitiatives: null,
        surveys: null,
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

    if (swipeOpen) {
        swipedItem.animate({
            translate: { x: 0, y: 0 },
            duration: 200
        });

        swipeOpen = false;
    }
}

function onViewClick(args) {
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

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
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
                        moduleName: "legislators/legislator/legislator-page",
                        context: model,
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
        });
    }

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
                var legislatorsListView = page.getViewById("legislatorsListView");

                if (platform.isAndroid) {
                    legislatorsListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    legislatorsListView.ios.scrollEnabled = false;
                }

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

                    if (platform.isAndroid) {
                        legislatorsListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        legislatorsListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
// exports.onViewLoaded = onViewLoaded;
// exports.onViewUnloaded = onViewUnloaded;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
// exports.onButtonTap = onButtonTap;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onAddClick = onAddClick;
exports.onViewClick = onViewClick;

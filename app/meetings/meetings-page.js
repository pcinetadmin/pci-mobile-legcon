const MeetingsViewModel = require("./meetings-view-model");
// const LegislatorViewModel = require("./meeting/legislator/legislator-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var gestures = require("ui/gestures");
var frameModule = require("ui/frame");
var http = require("http");
var dialogs = require("ui/dialogs");

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.5;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var navigationContext;

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
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
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
            fullName: navigationContext.fullName,
            name: null,
            pciInitiatives: null,
            surveys: null,
            pciAttendees: global.currentUser,
            primaryOfficeContact: null,
            meetingLocationId: 2,
            location: "Meeting in DC",
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
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

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

                model = view.bindingContext;

                const navigationEntry = {
                    moduleName: "meetings/meeting/meeting-page",
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

function onDeleteClick(args) {
    if (platform.isAndroid) {
        dialogs.confirm({
            title: "Delete",
            message: "Meeting will be deleted. Delete?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (result) {
            if (result) {
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
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });
                });
            }
        });
    } else if (platform.isIOS) {
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
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });
                });
            }
        });
    }

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
                var meetingsListView = page.getViewById("meetingsListView");

                if (platform.isAndroid) {
                    meetingsListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    meetingsListView.ios.scrollEnabled = false;
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
                        meetingsListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        meetingsListView.ios.scrollEnabled = true;
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
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemLoading = onItemLoading;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
exports.onItemTap = onItemTap;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onDeleteClick = onDeleteClick;

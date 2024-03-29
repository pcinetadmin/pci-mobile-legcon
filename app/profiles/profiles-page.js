const ProfilesViewModel = require("./profiles-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var gestures = require("@nativescript/core/ui/gestures");
var http = require("@nativescript/core/http");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.5;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var model;
var navigationContext;

var profilesList = new ProfilesViewModel([]);

var pageData = new ObservableModule.fromObject({
    boundData: null,
    profilesList: profilesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        if (args.isBackNavigation) {
            profilesList.empty();

            pageData.set("isLoading", true);
    
            profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                pageData.set("isLoading", false);
    
                page.bindingContext = pageData;
            });
        } else {
            navigationContext = page.navigationContext;
                 
            pageData.boundData = navigationContext;
            pageData.boundData.updated = false;

            var legislatorId = page.getViewById("legislatorId");
            var legislatorName = page.getViewById("legislatorName");
        
            legislatorId.text = navigationContext.relationalId;
            legislatorName.text = navigationContext.fullName;
        
            if (navigationContext.relationalType === "legislator") {
                page.actionBar.title = "Relationships";
            } else {
                page.actionBar.title = "APCIA Attendees";
            }
            
            profilesList.empty();
        
            pageData.set("isLoading", true);
        
            profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                pageData.set("isLoading", false);
            });
        
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

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
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
                    moduleName: "profiles/profile/profile-page",
                    context: { 
                        relationalType: navigationContext.relationalType,
                        relationalId: navigationContext.relationalId,
                        boundData: model
                    },
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

function onAddTap(args) {
    try
    {
        pageData.boundData.updated = true;

        var model = {
            relationalType: navigationContext.relationalType,
            relationalId: navigationContext.relationalId,
            personId: 0,
            fullName: null,
            company: null,
            title: null,
            workPhone: null,
            emailAddress: null,
            relationshipTypeId: null,
            relationshipType: null,
            familiarityLevelId: null,
            familiarityLevel: null,
            notes: null,
            modifiedDate: new Date(),
            checked: false
        }

        const navigationEntry = {
            moduleName: "profiles/profile/profile-page",
            context: { 
                relationalType: navigationContext.relationalType,
                relationalId: navigationContext.relationalId,
                boundData: model
            },
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

function onDeleteClick(args) {
    var profileType;

    if (navigationContext.relationalType === "legislator") {
        profileType = "Relationship";
    } else {
        profileType = "Attendee";
    }
    
    if (platform.isAndroid) {
        dialogs.confirm({
            title: "Delete",
            message: profileType + " will be deleted. Delete?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (result) {
            if (result) {
                var view = args.object;
                
                view.bindingContext.checked = false;

                http.request({
                    url: global.apiBaseServiceUrl + "insertdeleteprofilerelationship",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    // result = response.content.toJSON();
                    // dialogs.alert(result);

                    pageData.boundData.updated = true;

                    profilesList.empty();
        
                    pageData.set("isLoading", true);
        
                    profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
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
            message: "Would you like to delete this " + profileType.toLowerCase() + "?",
            cancelButtonText: "Cancel",
            actions: ["Delete"]
        }).then(function (result) {
            if (result === "Delete") {
                var view = args.object;
                
                view.bindingContext.checked = false;

                http.request({
                    url: global.apiBaseServiceUrl + "insertdeleteprofilerelationship",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    // result = response.content.toJSON();
                    // dialogs.alert(result);

                    pageData.boundData.updated = true;

                    profilesList.empty();
        
                    pageData.set("isLoading", true);
        
                    profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
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
                        moduleName: "profiles/profile/profile-page",
                        context: { 
                            relationalType: navigationContext.relationalType,
                            relationalId: navigationContext.relationalId,
                            boundData: model
                        },
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
                var profilesListView = page.getViewById("profilesListView");

                if (platform.isAndroid) {
                    profilesListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    profilesListView.ios.scrollEnabled = false;
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
                        profilesListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        profilesListView.ios.scrollEnabled = true;
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
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onAddTap = onAddTap;
exports.onBackTap = onBackTap;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onDeleteClick = onDeleteClick;

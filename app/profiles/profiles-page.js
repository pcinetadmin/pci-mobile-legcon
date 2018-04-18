const ProfilesViewModel = require("./profiles-view-model");
const ObservableModule = require("data/observable");
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var model;
var navigationContext;
var swipeOpen = false;

var profilesList = new ProfilesViewModel([]);

var pageData = new ObservableModule.fromObject({
    profilesList: profilesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        if (args.isBackNavigation) {
            if (model === null || model.result === "Update") {
                profilesList.empty();
            
                if (profilesList.length === 0) {
                    pageData.set("isLoading", true);
            
                    profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                        pageData.set("isLoading", false);
                    });
                }
            
                page.bindingContext = pageData;
            }
        } else {
            navigationContext = page.navigationContext;

            var legislatorId = page.getViewById("legislatorId");
            var legislatorName = page.getViewById("legislatorName");
        
            legislatorId.text = navigationContext.relationalId;
            legislatorName.text = navigationContext.fullName;
        
            if (navigationContext.relationalType === "legislator") {
                page.actionBar.title = "PCI Relationships";
            } else {
                page.actionBar.title = "PCI Attendees";
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
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try
    {
        if (swipeOpen) {
            var profilesListView = page.getViewById("profilesListView");

            profilesListView.notifySwipeToExecuteFinished();

            swipeOpen = false;
        } else {
            var view = args.view;

            model = view.bindingContext;
            // dialogs.alert(view.bindingContext.fullName);

            const navigationEntry = {
                moduleName: "profiles/profile/profile-page",
                context: { 
                    relationalType: navigationContext.relationalType,
                    boundData: model
                },
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
        model = null;

        const navigationEntry = {
            moduleName: "profiles/profilesearch/profilesearch-page",
            context: { 
                relationalType: navigationContext.relationalType,
                relationalId: navigationContext.relationalId
            },
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
        var profileType;

        if (navigationContext.relationalType === "legislator") {
            profileType = "relationship";
        } else {
            profileType = "attendee";
        }
        
        dialogs.action({
            message: "Would you like to delete this " + profileType + "?",
            cancelButtonText: "Cancel",
            actions: ["Delete"]
        }).then(function (result) {
            if (result === "Delete") {
                var view = args.object;
                
                view.bindingContext.checked = false;

                http.request({
                    url: global.apiBaseServiceUrl + "insertdeleteprofilerelationship",
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": global.token },
                    content: JSON.stringify(view.bindingContext)
                }).then(function (response) {
                    // result = response.content.toJSON();
                    // dialogs.alert(result);

                    profilesList.empty();
        
                    pageData.set("isLoading", true);
        
                    profilesList.load(navigationContext.relationalType, navigationContext.relationalId).then(function () {
                            pageData.set("isLoading", false);
        
                            page.bindingContext = pageData;
                    });
                    
                }, function (e) {
                    dialogs.alert(e);
                });
            }
        });
    }

    var profilesListView = page.getViewById("profilesListView");

    profilesListView.notifySwipeToExecuteFinished();

    swipeOpen = false;
}

exports.onNavigatingTo = onNavigatingTo;
exports.onItemTap = onItemTap;
exports.onAddTap = onAddTap;
exports.onSwipeCellStarted = onSwipeCellStarted;
exports.onRightSwipeClick = onRightSwipeClick;

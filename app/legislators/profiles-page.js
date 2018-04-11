const ProfilesViewModel = require("./profiles-view-model");
const ObservableModule = require("data/observable");
const appModule = require("application");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var model;
var navigationContext;

var profilesList = new ProfilesViewModel([]);

var pageData = new ObservableModule.fromObject({
    profilesList: profilesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        if (args.isBackNavigation) {
            if (model.result === "Update") {
                profilesList.empty();
            
                if (profilesList.length === 0) {
                    pageData.set("isLoading", true);
            
                    profilesList.load(navigationContext.relationalType, navigationContext.legislatorId).then(function () {
                        pageData.set("isLoading", false);
                    });
                }
            
                page.bindingContext = pageData;
            }
        } else {
            navigationContext = page.navigationContext;
            var legislatorId = page.getViewById("legislatorId");
            var legislatorName = page.getViewById("legislatorName");
        
            legislatorId.text = navigationContext.legislatorId;
            legislatorName.text = navigationContext.fullName;
        
            if (navigationContext.relationalType === "legislator") {
                page.actionBar.title = "PCI Relationships";
            } else {
                page.actionBar.title = "PCI Attendees";
            }
            
            profilesList.empty();
        
            pageData.set("isLoading", true);
        
            profilesList.load(navigationContext.relationalType, navigationContext.legislatorId).then(function () {
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
        var view = args.view;

        model = view.bindingContext;
        // dialogs.alert(view.bindingContext.fullName);

        const navigationEntry = {
            moduleName: "legislators/profile-page",
            context: { 
                relationalType: navigationContext.relationalType,
                boundData: model
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

exports.onNavigatingTo = onNavigatingTo;
exports.onItemTap = onItemTap;

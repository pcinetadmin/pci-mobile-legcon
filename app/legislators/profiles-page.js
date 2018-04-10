const ProfilesViewModel = require("./profiles-view-model");
const observableModule = require("data/observable");
var dialogs = require("ui/dialogs");
var page;

var profilesList = new ProfilesViewModel([]);

var pageData = new observableModule.fromObject({
    profilesList: profilesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        var navigationContext = page.navigationContext;
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
    catch(e)
    {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;

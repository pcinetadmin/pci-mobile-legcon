const InitiativetiersViewModel = require("./initiativetiers-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");
var page;

var initiativeTiersList = new InitiativetiersViewModel([]);

var pageData = new observableModule.fromObject({
    initiativeTiersList: initiativeTiersList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Initiative Tiers";

        var navigationContext = page.navigationContext;
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");
    
        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;
    
        initiativeTiersList.empty();
    
        pageData.set("isLoading", true);
    
        initiativeTiersList.load(navigationContext.legislatorId).then(function () {
            pageData.set("isLoading", false);
        });
    
        page.bindingContext = pageData;
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;

const InitiativetiersViewModel = require("./initiativetiers-view-model");
const observableModule = require("data/observable");
var dialogs = require("ui/dialogs");
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

exports.onNavigatingTo = onNavigatingTo;

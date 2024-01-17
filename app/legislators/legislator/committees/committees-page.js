const CommitteesViewModel = require("./committees-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");
var page;

var committeesList = new CommitteesViewModel([]);

var pageData = new observableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committees";

        var navigationContext = page.navigationContext;
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");
    
        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;
    
        committeesList.empty();
    
        pageData.set("isLoading", true);
    
        committeesList.load(navigationContext.legislatorId).then(function () {
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

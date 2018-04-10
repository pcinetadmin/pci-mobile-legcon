const LegislatorCommitteesViewModel = require("./legislatorcommittees-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;

var legislatorCommitteesList = new LegislatorCommitteesViewModel([]);

var pageData = new observableModule.fromObject({
    legislatorCommitteesList: legislatorCommitteesList,
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
    
        legislatorCommitteesList.empty();
    
        pageData.set("isLoading", true);
    
        legislatorCommitteesList.load(navigationContext.legislatorId).then(function () {
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

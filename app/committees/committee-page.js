const CommitteeViewModel = require("./committee-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;

var committeeList = new CommitteeViewModel([]);

var pageData = new observableModule.fromObject({
    committeeList: committeeList,
    isLoading: false
});

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committee";

        var navigationContext = page.navigationContext;
        var committeeId = page.getViewById("committeeId");
        var committeeName = page.getViewById("committeeName");

        committeeId.text = navigationContext.committeeId;
        committeeName.text = navigationContext.committeeName;

        committeeList.empty();

        if (committeeList.length === 0) {
            pageData.set("isLoading", true);
    
            committeeList.load(navigationContext.committeeId).then(function () {
                pageData.set("isLoading", false);
            });
        }
    
        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    var view = args.view;
    var model = view.bindingContext;

    const navigationEntry = {
        moduleName: "legislators/legislator-page",
        context: model,
        clearHistory: false
    };

    try
    {
        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onItemTap = onItemTap;

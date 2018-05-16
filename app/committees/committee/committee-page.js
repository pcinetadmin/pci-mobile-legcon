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

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committee";

        var navigationContext = page.navigationContext;

        var committeeName = page.getViewById("committeeName");
        var committee = navigationContext.committeeName;
        var maxLength = 35;

        if (committee.length > maxLength) {
            for (var i = maxLength; i > 0; i--) {
                var position = committee.indexOf(" ", i);

                if (position > -1 && position <= maxLength) {
                    committee = committee.substr(0, position) + "..."

                    break;
                }
            }
        }

        committeeName.text = committee;

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

function onItemTap(args) {
    var view = args.view;
    var model = view.bindingContext;

    const navigationEntry = {
        moduleName: "legislators/legislator/legislator-page",
        context: model,
        clearHistory: false
    };

    try
    {
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;

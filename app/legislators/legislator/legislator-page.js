const LegislatorViewModel = require("./legislator-view-model");
const observableModule = require("data/observable");
// const Color = require("color").Color;
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;

var legislatorList = new LegislatorViewModel([]);

var pageData = new observableModule.fromObject({
    legislatorList: legislatorList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;

    page.actionBar.title = "Legislator";

    // if (frameModule.topmost().ios) {
    //     var navigationBar = frameModule.topmost().ios.controller.navigationBar;

    //     //dialogs.alert(navigationBar.items);

    //     try {
    //         navigationBar.tintColor = new Color("#007aff").ios;
    //     }
    //     catch(e)
    //     {
    //         dialogs.alert(e);
    //     }
    // }

    // if (page.ios)
    // {
    //     var selectedViewController = page.ios;

    //     selectedViewController.hidesBottomBarWhenPushed = false;
    // }

    navigationContext = page.navigationContext;
    var legislatorId = page.getViewById("legislatorId");
    var legislatorName = page.getViewById("legislatorName");
    
    legislatorId.text = navigationContext.legislatorId;
    legislatorName.text = navigationContext.fullName;

    legislatorList.empty();
    legislatorList.load(navigationContext.bioguideId);

    //dialogs.alert(legislatorList.getItem(legislatorList.length - 1).title);
    
    page.bindingContext = pageData;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args)
{
    try
    {
        var index = args.index;
        var item = legislatorList.getItem(index);

        navigationContext.reference = "nav";
        navigationContext.relationalType = "legislator";
        navigationContext.relationalId = navigationContext.legislatorId;

        const navigationEntry = {
            moduleName: item.navigateTo,
            context: navigationContext,
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;

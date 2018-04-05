const LegislatorViewModel = require("./legislator-view-model");
const observableModule = require("data/observable");
// const Color = require("color").Color;
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;

var legislatorList = new LegislatorViewModel([]);

var pageData = new observableModule.fromObject({
    legislatorList: legislatorList,
    isLoading: false
});

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
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

    var navigationContext = page.navigationContext;
    var legislatorId = page.getViewById("legislatorId");
    var legislatorName = page.getViewById("legislatorName");
    
    legislatorId.text = navigationContext.legislatorId;
    legislatorName.text = navigationContext.fullName;

    legislatorList.empty();
    legislatorList.load();

    //dialogs.alert(legislatorList.getItem(legislatorList.length - 1).title);
    
    page.bindingContext = pageData;
}

function onItemTap(args)
{
    var legislatorId = page.getViewById("legislatorId");
    var legislatorName = page.getViewById("legislatorName");
    var index = args.index;
    var item = legislatorList.getItem(index);

    const navigationEntry = {
        moduleName: "legislators/" + item.navigateTo,
        context: { 
            legislatorId: legislatorId.text,
            fullName: legislatorName.text
        },
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

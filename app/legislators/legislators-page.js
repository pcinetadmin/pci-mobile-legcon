const LegislatorsViewModel = require("./legislators-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var gestures = require("ui/gestures");
var dialogs = require("ui/dialogs");
var page;
// var view;
var searchBar;
var legislatorsPageSize = 25;
var legislatorsSearchText = "";
var legislatorsSearchSubmitted = false;

var legislatorsList = new LegislatorsViewModel([]);

var pageData = new observableModule.fromObject({
    legislatorsList: legislatorsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Legislators";

        if (legislatorsList.length === 0) {
            pageData.set("isLoading", true);

            legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function () {
                pageData.set("isLoading", false);
            });
        }

        page.bindingContext = pageData;

        // var observerTap = page.observe(gestures.GestureTypes.tap, function (args) {
        //     searchBar.dismissSoftInput(); })
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

// function onViewLoaded(args) {
//     view = args.object;
//     page = view.page;
    
//     page.actionBar.title = "Legislators";

//     //legislatorsList.empty();
    
//     if (legislatorsList.length === 0) {
//         viewData.set("isLoading", true);

//         legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function () {
//             viewData.set("isLoading", false);
//         });

//         view.bindingContext = viewData;
//     }

//     // var observerTap = page.observe(gestures.GestureTypes.tap, function (args) {
//     //     searchBar.dismissSoftInput(); })
// }

// function onViewUnloaded(args) {

// }

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    // iOS Styling
    searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
    searchBar.ios.showsCancelButton = true;
    // searchbar.ios.setShowsCancelButtonAnimated(true, true);
}

function onSubmit(args)
{
    searchBar = args.object;

    legislatorsSearchText = searchBar.text.trim();

    legislatorsList.empty();
    
    pageData.set("isLoading", true);

    legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function (){
        pageData.set("isLoading", false);

        legislatorsSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    legislatorsSearchText = "";

    if (legislatorsSearchSubmitted) {
        legislatorsList.empty();
        
        pageData.set("isLoading", true);

        legislatorsList.load(legislatorsSearchText, 1, legislatorsPageSize).then(function (){
            pageData.set("isLoading", false);

            legislatorsSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onButtonTap(args) {
    searchBar.ios.showsCancelButton = !searchBar.ios.showsCancelButton;
}

function onItemTap(args) {
    var index = args.index;
    var legislator = legislatorsList.getItem(index);

    // try {
    //     var tabView = page.getViewById("mainTabs");
    //     //dialogs.alert(tabView.items[0].view);
    //     tabView.items[0].view = "legislator-tab/legislator/legislator-page";
    // }
    // catch(e)
    // {
    //     dialogs.alert(e);
    // }

    const navigationEntry = {
        moduleName: "legislators/legislator-page",
        context: { 
            legislatorId: legislator.legislatorId,
            fullName: legislator.fullName
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

function onLoadMoreItems(args)
{
    var legislatorsListCount = legislatorsList.length;
    var legislatorsPageNumber = Math.ceil(legislatorsListCount / legislatorsPageSize) + 1;
    var legislatorsRemainder = legislatorsListCount % legislatorsPageSize;

    if (legislatorsRemainder !== 0 && legislatorsRemainder < legislatorsPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    legislatorsList.load(legislatorsSearchText, legislatorsPageNumber, legislatorsPageSize).then(function (){
        pageData.set("isLoading", false);
    });
}

exports.onNavigatingTo = onNavigatingTo;
// exports.onViewLoaded = onViewLoaded;
// exports.onViewUnloaded = onViewUnloaded;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onButtonTap = onButtonTap;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;

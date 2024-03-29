const platform = require("@nativescript/core/platform");
const ProfileSearchViewModel = require("./profilesearch-view-model");
const ObservableModule = require("@nativescript/core/data/observable");
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");
var page;
var navigationContext;

var searchBar;
var profileSearchPageSize = 25;
var profileSearchSearchText = "";
var profileSearchSearchSubmitted = false;

var profileSearchList = new ProfileSearchViewModel([]);

var switchTap = false;

var pageData = new ObservableModule.fromObject({
    profileSearchList: profileSearchList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        if (navigationContext.relationalType === "legislator") {
            page.actionBar.title = "Profile Search";
        } else {
            page.actionBar.title = "APCIA Attendee Search";
        }

        // if (profileSearchSearchText !== "") {
        //     var searchBar = page.getViewById("searchBar");

        //     searchBar.text = profileSearchSearchText;
        // }
        
        // if (profileSearchList.length === 0) {
        profileSearchSearchText = "";
        
        profileSearchList.empty();

        pageData.set("isLoading", true);

        profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
            pageData.set("isLoading", false);
        });
        // }

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

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args)
{
    searchBar = args.object;

    profileSearchSearchText = searchBar.text.trim();

    profileSearchList.empty();
    
    pageData.set("isLoading", true);

    profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
        pageData.set("isLoading", false);

        profileSearchSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    profileSearchSearchText = "";

    if (profileSearchSearchSubmitted) {
        profileSearchList.empty();
        
        pageData.set("isLoading", true);

        profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, 1, profileSearchPageSize).then(function () {
            pageData.set("isLoading", false);

            profileSearchSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("tap", function(args) {
        // Necessary to prevent the checkedChange event from firing on the switch when user scrolls.
        switchTap = true;
    });

    checkedSwitch.on("checkedChange", function(args) {
        if (switchTap) {
            var stackLayout = args.object.parent;
            var indexLabel = stackLayout.getViewById("indexLabel");

            var model = profileSearchList.getItem(indexLabel.text);

            model.checked = args.value;
            
            http.request({
                url: global.apiBaseServiceUrl + "insertdeleteprofilerelationship",
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` },
                content: JSON.stringify(model)
            }).then(function (response) {
                switchTap = false;
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });
}

function onLoadMoreItems(args) {
    var profileSearchListCount = profileSearchList.length;
    var profileSearchPageNumber = Math.ceil(profileSearchListCount / profileSearchPageSize) + 1;
    var profileSearchRemainder = profileSearchListCount % profileSearchPageSize;

    if (profileSearchRemainder !== 0 && profileSearchRemainder < profileSearchPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    profileSearchList.load(navigationContext.relationalType, navigationContext.relationalId, profileSearchSearchText, profileSearchPageNumber, profileSearchPageSize).then(function (){
        pageData.set("isLoading", false);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onLoadMoreItems = onLoadMoreItems;

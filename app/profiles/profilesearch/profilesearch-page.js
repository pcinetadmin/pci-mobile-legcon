const platform = require("platform");
const ProfileSearchViewModel = require("./profilesearch-view-model");
const ObservableModule = require("data/observable");
var http = require("http");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;

var searchBar;
var profileSearchPageSize = 25;
var profileSearchSearchText = "";
var profileSearchSearchSubmitted = false;

var previousSelected = null;

var profileSearchList = new ProfileSearchViewModel([]);

var pageData = new ObservableModule.fromObject({
    boundData: null,
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
            page.actionBar.title = "PCI Attendee Search";
        }

        pageData.boundData = navigationContext;

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

            page.bindingContext = pageData;
        });
        // }

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

function onLoadMoreItems(args) {
    try {
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
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        var selected = pageData.profileSearchList.getItem(args.index); //.set("checked", true);

        selected.checked = !selected.checked;

        if (previousSelected !== null & previousSelected !== selected) {
            previousSelected.checked = false;
        }
        
        page.getViewById("profileSearch").refresh();

        if (selected.checked) {
            previousSelected = selected;

            pageData.boundData.personId = selected.personId;
            pageData.boundData.fullName = selected.fullName;
            pageData.boundData.company = selected.company;
            pageData.boundData.title = selected.title;
            pageData.boundData.emailAddress = selected.emailAddress;
            pageData.boundData.workPhone = selected.workPhone;
        } else {
            previousSelected = null;

            pageData.boundData.personId = null;
            pageData.boundData.fullName = null;
            pageData.boundData.company = null;
            pageData.boundData.title = null;
            pageData.boundData.emailAddress = null;
            pageData.boundData.workPhone = null;
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onItemTap = onItemTap;

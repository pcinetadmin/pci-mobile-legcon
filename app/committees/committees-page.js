const CommitteesViewModel = require("./committees-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var searchBar;
var committeesPageSize = 25;
var committeesSearchText = "";
var chamberId = 0;
var committeesSearchSubmitted = false;

var committeesList = new CommitteesViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committees";
    
        if (committeesSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = committeesSearchText;
        }
        
        // Since the Page contains a SegmentedBar,
        // the selectedIndexChanged event will perform the initial load of the ListView.
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

function onSelectedIndexChanged(args) {
    try {
        chamberId = args.newIndex;

        committeesList.empty();

        pageData.set("isLoading", true);

        committeesList.load(chamberId, committeesSearchText, 1, committeesPageSize).then(function () {
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

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args)
{
    searchBar = args.object;

    committeesSearchText = searchBar.text.trim();

    committeesList.empty();
    
    pageData.set("isLoading", true);

    committeesList.load(chamberId, committeesSearchText, 1, committeesPageSize).then(function (){
        pageData.set("isLoading", false);

        committeesSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    committeesSearchText = "";

    if (committeesSearchSubmitted) {
        committeesList.empty();
        
        pageData.set("isLoading", true);

        committeesList.load(chamberId, committeesSearchText, 1, committeesPageSize).then(function (){
            pageData.set("isLoading", false);

            committeesSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemTap(args) {
    try
    {
        var index = args.index;
        var committee = committeesList.getItem(index);
        var committeeId;
        var committeeName;

        if (committee.isSubcommittee === "True") {
            committeeId = committee.subcommitteeId;
            committeeName = committee.subcommitteeName;
        } else {
            committeeId = committee.committeeId;
            committeeName = committee.committeeName;
        }

        const navigationEntry = {
            moduleName: "committees/committee/committee-page",
            context: { 
                committeeId: committeeId,
                committeeName: committeeName
            },
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

function onLoadMoreItems(args)
{
    var committeesListCount = committeesList.length;
    var committeesPageNumber = Math.ceil(committeesListCount / committeesPageSize) + 1;
    var committeesRemainder = committeesListCount % committeesPageSize;

    if (committeesRemainder !== 0 && committeesRemainder < committeesPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    committeesList.load(chamberId, committeesSearchText, committeesPageNumber, committeesPageSize).then(function (){
        pageData.set("isLoading", false);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;

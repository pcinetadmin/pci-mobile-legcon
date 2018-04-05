const CommitteesViewModel = require("./committees-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var searchBar;
var committeesPageSize = 25;
var committeesSearchText = "";
var chamberId = 0;
var committeesSearchSubmitted = false;

var committeesList = new CommitteesViewModel([]);

var pageData = new observableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Committees";
    
        // Since the Page contains a SegmentedBar,
        // the selectedIndexChanged event will perform the initial load of the ListView.
    }
    catch(e)
    {
        dialogs.alert(e);
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
        dialogs.alert(e);
    }
}

function onSearchBarLoaded(args)
{
    searchBar = args.object;

    // iOS Styling
    searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
    searchBar.ios.showsCancelButton = true;
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
        moduleName: "committees/committee-page",
        context: { 
            committeeId: committeeId,
            committeeName: committeeName
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
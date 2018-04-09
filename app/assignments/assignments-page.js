const AssignmentsViewModel = require("./assignments-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var searchBar;
var assignmentsPageSize = 25;
var assignmentsSearchText = "";
var meetingCreated = "N";
var assignmentsSearchSubmitted = false;

var assignmentsList = new AssignmentsViewModel([]);

var pageData = new observableModule.fromObject({
    assignmentsList: assignmentsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Assignments";

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
        if (args.newIndex === 0) {
            meetingCreated = "N";
        } else {
            meetingCreated = "Y";
        }

        assignmentsList.empty();

        pageData.set("isLoading", true);

        assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function () {
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

    assignmentsSearchText = searchBar.text.trim();

    assignmentsList.empty();
    
    pageData.set("isLoading", true);

    assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function (){
        pageData.set("isLoading", false);

        assignmentsSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args)
{
    searchBar.text = "";
    assignmentsSearchText = "";

    if (assignmentsSearchSubmitted) {
        assignmentsList.empty();
        
        pageData.set("isLoading", true);

        assignmentsList.load(meetingCreated, assignmentsSearchText, 1, assignmentsPageSize).then(function (){
            pageData.set("isLoading", false);

            assignmentsSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemTap(args) {
    // var index = args.index;
    // var assignment = assignmentsList.getItem(index);
    var view = args.view;
    var model = view.bindingContext;

    const navigationEntry = {
        moduleName: "assignments/assignment-page",
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

function onLoadMoreItems(args)
{
    var assignmentsListCount = assignmentsList.length;
    var assignmentsPageNumber = Math.ceil(assignmentsListCount / assignmentsPageSize) + 1;
    var assignmentsRemainder = assignmentsListCount % assignmentsPageSize;

    if (assignmentsRemainder !== 0 && assignmentsRemainder < assignmentsPageSize)
    {
        return;
    }

    pageData.set("isLoading", true);

    assignmentsList.load(meetingCreated, assignmentsSearchText, assignmentsPageNumber, assignmentsPageSize).then(function (){
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

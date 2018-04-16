const MeetingsViewModel = require("./meetings-view-model");
const LegislatorViewModel = require("./meeting/legislator/legislator-view-model");
const ObservableModule = require("data/observable");
const appModule = require("application");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;
var reference;

var meetingsList = new MeetingsViewModel([]);
var legislatorList = new LegislatorViewModel([]);

var pageData = new ObservableModule.fromObject({
    meetingsList: meetingsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        page.actionBar.title = "Meetings";
        
        navigationContext = page.navigationContext;

        if (navigationContext.reference === "tab") {
            reference = "tab";
        } else {
            reference = "nav";
        }

        const dateConverter = (value, format) => {
            let result = format;

            if (value === null) {
                //result = "";
            } else {
                const day = value.getDate();
                result = result.replace("DD", day < 10 ? `0${day}` : day);
                const month = value.getMonth() + 1;
                result = result.replace("MM", month < 10 ? `0${month}` : month);
                result = result.replace("YYYY", value.getFullYear());
            }

            return result;
        };

        appModule.getResources().dateConverter = dateConverter;
        appModule.getResources().dateFormat = "MM/DD/YYYY";
    
        // Since the Page contains a SegmentedBar,
        // the selectedIndexChanged event will perform the initial load of the ListView.

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var recentMeetings;

        if (args.newIndex === 0) {
            recentMeetings = "Y";
        }
        else {
            recentMeetings = "N";
        }

        meetingsList.empty();

        pageData.set("isLoading", true);

        meetingsList.load(reference, navigationContext.legislatorId, recentMeetings).then(function () {
            // NEED THE FOLLOWING COMMENTED CODE ONCE WE ALLOW THE LEGISLATOR FIELD TO BE EDITABLE.
            // if (global.legislatorList === undefined) {
            //     legislatorList.load().then(function () {
            //         global.legislatorList = legislatorList;

            //         pageData.set("isLoading", false);

            //         page.bindingContext = pageData;
            //     });
            // } else {
                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            // }
        });
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try
    {
        var view = args.view;

        model = view.bindingContext;

        const navigationEntry = {
            moduleName: "meetings/meeting/meeting-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;

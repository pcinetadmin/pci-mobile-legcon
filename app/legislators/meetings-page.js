const MeetingsViewModel = require("./meetings-view-model");
const observableModule = require("data/observable");
const appModule = require("application");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;
var initialLoad = true;

var meetingsList = new MeetingsViewModel([]);

var pageData = new observableModule.fromObject({
    meetingsList: meetingsList,
    isLoading: false
});

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    try {
        page = args.object;

        page.actionBar.title = "Meetings";
        
        navigationContext = page.navigationContext;

        const dateConverter = (value, format) => {
            let result = format;
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? `0${day}` : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? `0${month}` : month);
            result = result.replace("YYYY", value.getFullYear());

            return result;
        };

        appModule.getResources().dateConverter = dateConverter;
        appModule.getResources().dateFormat = "MM/DD/YYYY";

        if (meetingsList.length === 0) {
            pageData.set("isLoading", true);

            meetingsList.load(navigationContext.legislatorId, "Y").then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    if (initialLoad) {
        initialLoad = false;
    }
    else
    {
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

            meetingsList.load(navigationContext.legislatorId, recentMeetings).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
        catch(e)
        {
            dialogs.alert(e);
        }
    }
}

function onItemTap(args) {

}

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;

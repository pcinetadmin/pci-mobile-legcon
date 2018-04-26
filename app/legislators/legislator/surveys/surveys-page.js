const SurveysViewModel = require("./surveys-view-model");
const observableModule = require("data/observable");
const appModule = require("application");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;

var surveysList = new SurveysViewModel([]);

var pageData = new observableModule.fromObject({
    boundData: null,
    surveysList: surveysList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        page.actionBar.title = "Surveys";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");

        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;

        // Since the Page contains a SegmentedBar,
        // the selectedIndexChanged event will perform the initial load of the ListView.
    
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

function onSelectedIndexChanged(args) {
    try {
        var surveysActive;

        if (args.newIndex === 0) {
            surveysActive = "Y";
        }
        else {
            surveysActive = "N";
        }

        surveysList.empty();

        pageData.set("isLoading", true);

        surveysList.load(navigationContext.legislatorId, navigationContext.meetingId, surveysActive).then(function () {
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

function onItemTap(args) {
    var legislatorId = page.getViewById("legislatorId");
    var legislatorName = page.getViewById("legislatorName");
    var index = args.index;
    var item = surveysList.getItem(index);

    const navigationEntry = {
        moduleName: "legislators/legislator/surveys/survey/survey-page",
        context: { 
            surveyId: item.surveyId,
            legislatorId: legislatorId.text,
            fullName: legislatorName.text,
            relationalType: navigationContext.relationalType,
            relationalId: navigationContext.relationalId
        },
        clearHistory: false
    };

    try
    {
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
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;

const SurveysViewModel = require("./surveys-view-model");
const observableModule = require("@nativescript/core/data/observable");
const appModule = require("@nativescript/core/application");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");
var page;
var navigationContext;

var surveysActive;

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

        if (args.isBackNavigation) {
            surveysList.empty();

            pageData.set("isLoading", true);

            surveysList.load(navigationContext.legislatorId, navigationContext.meetingId, surveysActive).then(function () {
                pageData.set("isLoading", false);
            });
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            page.bindingContext = pageData;
        }
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

function onAddTap(args) {
    try {
        pageData.boundData.relationalType = "meeting";
        pageData.boundData.relationalId = pageData.boundData.meetingId;
        
        const navigationEntry = {
            moduleName: "legislators/legislator/surveys/select/select-page",
            context: pageData.boundData,
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

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try
    {
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");
        var index = args.index;
        var item = surveysList.getItem(index);

        const navigationEntry = {
            moduleName: "legislators/legislator/surveys/survey/survey-page",
            context: { 
                surveyId: item.surveyId,
                survey: item.survey,
                legislatorId: legislatorId.text,
                fullName: legislatorName.text,
                relationalType: navigationContext.relationalType,
                relationalId: navigationContext.relationalId
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

exports.onNavigatingTo = onNavigatingTo;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onAddTap = onAddTap;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;

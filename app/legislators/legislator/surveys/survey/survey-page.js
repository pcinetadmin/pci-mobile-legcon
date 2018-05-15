const SurveyViewModel = require("./survey-view-model");
const ObservableModule = require("data/observable");
const appModule = require("application");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var model;
var navigationContext;

var surveyList = new SurveyViewModel([]);

var pageData = new ObservableModule.fromObject({
    boundData: null,
    surveyList: surveyList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;

        var surveyTitle = navigationContext.survey;
        var maxLength = 20;

        if (surveyTitle.length > maxLength) {
            for (var i = maxLength; i > 0; i--) {
                var position = surveyTitle.indexOf(" ", i);

                if (position > -1 && position <= maxLength) {
                    surveyTitle = surveyTitle.substr(0, position) + "..."

                    break;
                }
            }
        }

        //page.actionBar.title = "Survey";
        page.actionBar.title = surveyTitle;

        pageData.boundData = navigationContext;

        const boolTextConverter = (value) => {
            var result = "No";

            if (value) {
                result = "Yes";
            }

            return result;
        };

        appModule.getResources().boolTextConverter = boolTextConverter;

        if (args.isBackNavigation) {
            if (model.result === "Update") {
                surveyList.empty();
            
                if (surveyList.length === 0) {
                    pageData.set("isLoading", true);
            
                    surveyList.load(navigationContext.legislatorId, navigationContext.surveyId).then(function () {
                        pageData.set("isLoading", false);
                    });
                }
            
                page.bindingContext = pageData;
            }
        } else {
            navigationContext = page.navigationContext;

            var legislatorId = page.getViewById("legislatorId");
            var legislatorName = page.getViewById("legislatorName");

            legislatorId.text = navigationContext.legislatorId;
            legislatorName.text = navigationContext.fullName;

            surveyList.empty();
            
            pageData.set("isLoading", true);
    
            surveyList.load(navigationContext.legislatorId, navigationContext.surveyId).then(function () {
                pageData.set("isLoading", false);
            });
        
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
        var view = args.view;

        model = view.bindingContext;
        model.relationalType = navigationContext.relationalType;
        model.relationalId = navigationContext.relationalId;
        //dialogs.alert(view.bindingContext.surveyQuestion);

        const navigationEntry = {
            moduleName: "legislators/legislator/surveys/survey/question/question-page",
            context: { 
                legislatorId: legislatorId.text,
                fullName: legislatorName.text,
                boundData: model
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
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;

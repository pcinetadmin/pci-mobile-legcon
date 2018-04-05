const SurveyViewModel = require("./survey-view-model");
const observableModule = require("data/observable");
const appModule = require("application");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;

var surveyList = new SurveyViewModel([]);

var pageData = new observableModule.fromObject({
    surveyList: surveyList,
    isLoading: false
});

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    try {
        page = args.object;

        page.actionBar.title = "Survey";

        navigationContext = page.navigationContext;
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");

        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;

        const boolConverter = (value) => {
            var result = "No";

            if (value === "true") {
                result = "Yes";
            }

            return result;
        };

        appModule.getResources().boolConverter = boolConverter;

        surveyList.empty();
        
        if (surveyList.length === 0) {
            pageData.set("isLoading", true);
    
            surveyList.load(navigationContext.legislatorId, navigationContext.surveyId).then(function () {
                pageData.set("isLoading", false);
            });
        }
    
        page.bindingContext = pageData;

    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try
    {
        var view = args.object;

        const navigationEntry = {
            moduleName: "legislators/surveyquestion-page",
            context: view.bindingContext,
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
exports.onItemTap = onItemTap;

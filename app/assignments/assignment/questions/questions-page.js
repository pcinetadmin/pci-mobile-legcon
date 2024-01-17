const QuestionsViewModel = require("./questions-view-model");
const ObservableModule = require("@nativescript/core/data/observable");
const appModule = require("@nativescript/core/application");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");
var page;
var model;
var navigationContext;

var questionsList = new QuestionsViewModel([]);

var pageData = new ObservableModule.fromObject({
    boundData: null,
    questionsList: questionsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;

        page.actionBar.title = "Questions";

        pageData.boundData = navigationContext;

        const limitText = (text, limit) => {
            let result = text;

            if (result !== null) {
                if (result.length > limit) {
                    for (var i = limit; i > 0; i--) {
                        var position = result.indexOf(" ", i);

                        if (position > -1 && position <= limit) {
                            result = result.substr(0, position) + "..."

                            break;
                        }
                    }
                }
            }

            return result;
        };

        appModule.getResources().limitText = limitText;

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
                questionsList.empty();
            
                if (questionsList.length === 0) {
                    pageData.set("isLoading", true);
            
                    questionsList.load(navigationContext.assignmentId, navigationContext.legislatorId).then(function () {
                        pageData.set("isLoading", false);
                    });
                }
            
                page.bindingContext = pageData;
            }
        } else {
            navigationContext = page.navigationContext;

            var assignmentName = page.getViewById("assignmentName");
            var legislatorName = page.getViewById("legislatorName");

            assignmentName.text = limitText(navigationContext.assignmentName, 30);
            legislatorName.text = navigationContext.legislator;

            questionsList.empty();
            
            pageData.set("isLoading", true);
    
            questionsList.load(navigationContext.assignmentId, navigationContext.legislatorId).then(function () {
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
        var view = args.view;

        model = view.bindingContext;
        model.relationalType = navigationContext.relationalType;
        model.relationalId = navigationContext.relationalId;
        //dialogs.alert(view.bindingContext.surveyQuestion);

        const navigationEntry = {
            moduleName: "assignments/assignment/questions/question/question-page",
            context: { 
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

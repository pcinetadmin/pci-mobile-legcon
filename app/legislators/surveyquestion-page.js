const SurveyquestionViewModel = require("./surveyquestion-view-model");
const ResponseViewModel = require("./response-view-model");
const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

var page;

var responseList = new ResponseViewModel([]);
var responseIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    responseIndex: responseIndex,
    responseList: responseList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        var navigationContext = page.navigationContext;
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");

        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;
        
        var surveyTitle = navigationContext.boundData.survey;
        var maxLength = 23;

        if (surveyTitle.length > maxLength) {
            for (var i = maxLength; i > 0; i--) {
                var position = surveyTitle.indexOf(" ", i);

                if (position > -1 && position <= maxLength) {
                    surveyTitle = surveyTitle.substr(0, position) + "..."

                    break;
                }
            }
        }

        page.actionBar.title = surveyTitle;

        pageData.boundData = navigationContext.boundData;

        responseList.empty();

        if (responseList.Items.length === 0) {
            pageData.set("isLoading", true);
    
            responseList.load(pageData.boundData.surveyQuestionId).then(function () {
                pageData.responseList = responseList;

                var i;

                for (i = 0; i < responseList.List.length; i++) {
                    if (pageData.responseList.List.getItem(i).responseId === pageData.boundData.responseId) {
                        responseIndex = i;
                    }
                }

                pageData.responseIndex = responseIndex;

                page.bindingContext = pageData;

                pageData.set("isLoading", false);
            });
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onLoaded(args) {
    try {
        var responseListPicker = page.getViewById("responseListPicker");
        
        responseListPicker.on("selectedIndexChange", function(args) {
            var responseLabel = page.getViewById("responseLabel");

            responseLabel.text = pageData.responseList.Items.getItem(args.object.selectedIndex);
            //dialogs.alert(pageData.responseList.Items.getItem(args.object.selectedIndex));
        });
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutTap(args) {
    try {
        var responseListPickerGridLayout = page.getViewById("responseListPickerGridLayout");
        
        // dialogs.alert(pageData.responseList.List.getItem(0).responseId);

        if (responseListPickerGridLayout.visibility === "collapse") {
            responseListPickerGridLayout.visibility = "visible";

            page.addCss("#responseLabel {color: red;}");
        } else {
            responseListPickerGridLayout.visibility = "collapse";

            page.addCss("#responseLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onStackLayoutTap = onStackLayoutTap;
exports.onLoaded = onLoaded;

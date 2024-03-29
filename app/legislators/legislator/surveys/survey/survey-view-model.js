const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function SurveyViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(legislatorId, surveyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "legislatorsurvey?legislatorId=" + legislatorId + "&surveyId=" + surveyId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(surveyQuestion) {
                var followUpRequired = false;

                if (surveyQuestion.FollowUpRequired === "true") {
                    followUpRequired = true;
                }

                viewModel.push({
                    legislatorId: surveyQuestion.LegislatorId,
                    fullName: surveyQuestion.FullName,
                    surveyId: surveyQuestion.SurveyId,
                    survey: surveyQuestion.Survey,
                    surveyQuestionId: surveyQuestion.SurveyQuestionId,
                    surveyQuestion: surveyQuestion.SurveyQuestion,
                    initiativeIds: surveyQuestion.InitiativeIds,
                    initiatives: surveyQuestion.Initiatives,
                    responseId: surveyQuestion.ResponseId,
                    response: surveyQuestion.Response,
                    followUpRequired: followUpRequired,
                    comments: surveyQuestion.Comments,
                    editorId: surveyQuestion.EditorId,
                    editor: surveyQuestion.Editor,
                    modifiedDate: surveyQuestion.ModifiedDate
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = SurveyViewModel;

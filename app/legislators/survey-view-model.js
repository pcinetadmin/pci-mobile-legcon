const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function SurveyViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(legislatorId, surveyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "legislatorsurvey?legislatorId=" + legislatorId + "&surveyId=" + surveyId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(surveyQuestion) {
                var followUpRequired = "No";

                if (surveyQuestion.FollowUpRequired === "true")
                {
                    followUpRequired = "Yes";
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
            dialogs.alert(e);
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

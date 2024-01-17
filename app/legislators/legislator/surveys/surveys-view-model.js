const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function SurveysViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(legislatorId, meetingId, surveysActive) {
        var url = global.apiBaseServiceUrl + "legislatorsurveys?legislatorId=" + legislatorId;

        if (meetingId !== null) {
            url += "&meetingId=" + meetingId;
        }

        url += "&active=" + surveysActive;

        return http.request({
            url: url, //global.apiBaseServiceUrl + "legislatorsurveys?legislatorId=" + legislatorId + "&active=" + surveysActive,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(survey) {
                var questionCount = "(" + survey.QuestionCount + " survey questions)";

                viewModel.push({
                    legislatorId: survey.LegislatorId,
                    fullName: survey.FullName,
                    surveyId: survey.SurveyId,
                    survey: survey.Survey,
                    initiativeIds: survey.InitiativeIds,
                    initiatives: survey.Initiatives,
                    year: survey.Year,
                    chamber: survey.Chamber,
                    questionCount: questionCount
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

module.exports = SurveysViewModel;

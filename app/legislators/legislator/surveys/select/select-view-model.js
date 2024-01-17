const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function SelectViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(meetingId) {
        return http.request({
            url: global.apiBaseServiceUrl + "meetingsurveys?meetingId=" + meetingId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(survey) {
                var checked = false;

                if (survey.Checked === "true") {
                    checked = true;
                }

                viewModel.push({
                    meetingId: survey.MeetingId,
                    legislatorId: survey.LegislatorId,
                    surveyId: survey.SurveyId,
                    survey: survey.Survey,
                    initiativeIds: survey.InitiativeIds,
                    intitiatives: survey.Initiatives,
                    year: survey.Year,
                    chamberId: survey.ChamberId,
                    chamber: survey.Chamber,
                    checked: survey.Checked
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

module.exports = SelectViewModel;

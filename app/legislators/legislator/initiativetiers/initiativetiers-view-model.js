const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function InitiativetiersViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(legislatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "initiativestances?legislatorId=" + legislatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(initiative) {
                viewModel.push({
                    initiativeId: initiative.InitiativeId,
                    initiative: initiative.Initiative,
                    legislatorId: initiative.LegislatorId,
                    legislator: initiative.Legislator,
                    tier: initiative.Tier,
                    issueStanceId: initiative.IssueStanceId,
                    issueStance: initiative.IssueStance
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

module.exports = InitiativetiersViewModel;

const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function InitiativesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(meetingId) {
        return http.request({
            url: global.apiBaseServiceUrl + "meetinginitiatives?meetingId=" + meetingId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(initiative) {
                var checked = false;

                if (initiative.Checked === "true") {
                    checked = true;
                }

                viewModel.push({
                    meetingId: initiative.MeetingId,
                    legislatorId: initiative.LegislatorId,
                    initiativeId: initiative.InitiativeId,
                    initiative: initiative.Initiative,
                    checked: initiative.Checked
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

module.exports = InitiativesViewModel;

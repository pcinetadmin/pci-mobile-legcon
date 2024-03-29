const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(legislatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "committees?legislatorId=" + legislatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                viewModel.push({
                    committeeId: committee.CommitteeId,
                    name: committee.Name,
                    phone: committee.Phone,
                    chamberId: committee.ChamberId,
                    chamber: committee.Chamber,
                    parentCommitteeId: committee.ParentCommitteeId,
                    subcommittee: committee.Subcommittee,
                    rank: committee.Rank,
                    title: committee.Title
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

module.exports = CommitteesViewModel;

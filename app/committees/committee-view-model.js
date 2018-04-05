const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function CommitteeViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(committeeId) {
        return http.request({
            url: global.apiBaseServiceUrl + "committeemembers?committeeId=" + committeeId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(legislator) {
                var side = legislator.Side;

                if (side.length > 0) {
                    side = " (" + side + ")";
                }

                viewModel.push({
                    committeeId: legislator.CommitteeId,
                    name: legislator.Name,
                    subcommittee: legislator.Subcommittee,
                    side: side,
                    rank: legislator.Rank,
                    bioGuideId: legislator.BioGuideId,
                    legislatorId: legislator.LegislatorId,
                    fullName: legislator.FullName,
                    title: legislator.Title
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

module.exports = CommitteeViewModel;

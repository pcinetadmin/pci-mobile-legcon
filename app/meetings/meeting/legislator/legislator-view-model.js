const ObservableModule = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function LegislatorViewModel(items) {
    const viewModel = new ObservableArray(items)

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "list",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(legislator) {
                var group = legislator.FullName.substring(legislator.FullName.lastIndexOf(" ") + 1, legislator.FullName.lastIndexOf(" ") + 2);

                viewModel.push({
                    legislatorId: legislator.LegislatorId,
                    legislator: legislator.FullName,
                    group: group
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

    viewModel.groupingFunction = function(item) {
        return (item) => {
            return item.group;
        };
    }

    viewModel.filteringFunction = function(item, filter) {
        return (item) => {
            return item.fullName.includes(filter);
        };
    }

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = LegislatorViewModel;
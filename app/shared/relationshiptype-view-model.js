const ObservableModule = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function RelationshipTypeViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "relationshiptypes",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(relationshipType) {
                viewModel.Items.push(
                    relationshipType.Type
                );

                viewModel.List.push({
                    relationshipTypeId: relationshipType.RelationshipTypeId,
                    relationshipType: relationshipType.Type
                });
            });
        }, function (e) {
            dialogs.alert(e);
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = RelationshipTypeViewModel;
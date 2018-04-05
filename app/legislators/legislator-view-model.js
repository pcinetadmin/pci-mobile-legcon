const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var dialogs = require("ui/dialogs");

function LegislatorViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function() {
        var data = [
            {"title": "Meetings", "navigateTo": "meetings-page"},
            {"title": "PCI Initiative Tiers", "navigateTo": "initiativetiers-page"},
            {"title": "Surveys", "navigateTo": "surveys-page"},
            {"title": "PCI Relationships", "navigateTo": "relationships-page"},
            {"title": "Bio", "navigateTo": "bio-page"},
            {"title": "Committees", "navigateTo": "committees-page"}
        ];

        data.forEach(function(dataItem) {
            viewModel.push({
                title: dataItem.title,
                navigateTo: dataItem.navigateTo
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

module.exports = LegislatorViewModel;

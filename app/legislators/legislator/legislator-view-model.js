const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var dialogs = require("ui/dialogs");

function LegislatorViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function() {
        var data = [
            {"title": "Meetings", "navigateTo": "meetings/meetings-page"},
            {"title": "PCI Initiative Tiers", "navigateTo": "legislators/legislator/initiativetiers/initiativetiers-page"},
            {"title": "Surveys", "navigateTo": "legislators/legislator/surveys/surveys-page"},
            {"title": "PCI Relationships", "navigateTo": "profiles/profiles-page"},
            {"title": "Bio", "navigateTo": "legislators/legislator/bio/bio-page"},
            {"title": "Committees", "navigateTo": "legislators/legislator/committees/committees-page"}
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
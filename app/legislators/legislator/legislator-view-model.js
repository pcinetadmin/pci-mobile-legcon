const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var dialogs = require("@nativescript/core/ui/dialogs");

function LegislatorViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(bioguideId) {
        var data;

        if (bioguideId === null || bioguideId === "") {
            data = [
                {"title": "Meetings", "navigateTo": "meetings/meetings-page"},
                {"title": "Initiative Tiers", "navigateTo": "legislators/legislator/initiativetiers/initiativetiers-page"},
                // {"title": "Surveys", "navigateTo": "legislators/legislator/surveys/surveys-page"},
                {"title": "Relationships", "navigateTo": "profiles/profiles-page"},
                {"title": "Committees", "navigateTo": "legislators/legislator/committees/committees-page"}
            ];
        } else {
            data = [
                {"title": "Meetings", "navigateTo": "meetings/meetings-page"},
                {"title": "Initiative Tiers", "navigateTo": "legislators/legislator/initiativetiers/initiativetiers-page"},
                // {"title": "Surveys", "navigateTo": "legislators/legislator/surveys/surveys-page"},
                {"title": "Relationships", "navigateTo": "profiles/profiles-page"},
                {"title": "Bio", "navigateTo": "legislators/legislator/bio/bio-page"},
                {"title": "Committees", "navigateTo": "legislators/legislator/committees/committees-page"}
            ];
        }

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

const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function AssignmentViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(navigationContext) {
        viewModel.push({
            label: "Company",
            value: navigationContext.company
        });

        viewModel.push({
            label: "Initiative",
            value: navigationContext.initiative
        });

        viewModel.push({
            label: "Survey",
            value: navigationContext.survey
        });

        var meetingCreated;

        if (navigationContext.meetingCreated === "Y")
        {
            viewModel.push({
                label: "Meeting Created?",
                value: "Yes"
            });
    
            viewModel.push({
                label: "Lobbyist",
                value: navigationContext.lobbyist
            });
        } else {
            viewModel.push({
                label: "Meeting Created?",
                value: "No"
            });
        }
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    return viewModel;
}

module.exports = AssignmentViewModel;

const observableModule = require("data/observable");

function MeetingViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = MeetingViewModel;

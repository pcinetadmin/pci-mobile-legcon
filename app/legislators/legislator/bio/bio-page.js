const observableModule = require("data/observable");

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Bio";

    page.bindingContext = navigationContext;
}

exports.onNavigatingTo = onNavigatingTo;

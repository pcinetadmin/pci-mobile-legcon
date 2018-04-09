const BioViewModel = require("./bio-view-model");
const observableModule = require("data/observable");

var bioList = new BioViewModel([]);

var pageData = new observableModule.fromObject({
    bioList: bioList.Items,
    bio: bioList.Bio,
    isLoading: false
});

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Bio";

    page.bindingContext = navigationContext;
}

exports.onNavigatingTo = onNavigatingTo;

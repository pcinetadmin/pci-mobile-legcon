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

    page.actionBar.title = "Bio";

    var navigationContext = page.navigationContext;
    var legislatorId = page.getViewById("legislatorId");
    var legislatorName = page.getViewById("legislatorName");

    legislatorId.text = navigationContext.legislatorId;
    legislatorName.text = navigationContext.fullName;

    bioList.empty();

    pageData.set("isLoading", true);

    bioList.load(navigationContext.legislatorId).then(function () {
        pageData.set("isLoading", false);

        pageData.bio = bioList.Bio;

        page.bindingContext = pageData;
    });

}

exports.onNavigatingTo = onNavigatingTo;

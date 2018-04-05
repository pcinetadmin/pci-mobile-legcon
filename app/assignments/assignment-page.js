const AssignmentViewModel = require("./assignment-view-model");
const observableModule = require("data/observable");
var dialogs = require("ui/dialogs");

var assignmentList = new AssignmentViewModel([]);

var pageData = new observableModule.fromObject({
    assignmentList: assignmentList
});

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    try {
        const page = args.object;

        page.actionBar.title = "Assignment";

        var navigationContext = page.navigationContext;
        var assignmentId = page.getViewById("assignmentId");
        var legislatorName = page.getViewById("legislatorName");

        assignmentId.text = navigationContext.assignmentId;
        legislatorName.text = navigationContext.legislator;

        assignmentList.empty();
        assignmentList.load(navigationContext);

        page.bindingContext = pageData;
    } catch(e) {
        dialogs.alert(e);
    }
    

}

exports.onNavigatingTo = onNavigatingTo;

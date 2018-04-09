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
        var navigationContext = page.navigationContext;

        page.actionBar.title = "Assignment";

        page.bindingContext = navigationContext;
    } catch(e) {
        dialogs.alert(e);
    }
    

}

exports.onNavigatingTo = onNavigatingTo;

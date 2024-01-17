const AssignmentViewModel = require("./assignment-view-model");
const ObservableModule = require("@nativescript/core/data/observable");
const appModule = require("@nativescript/core/application");
var http = require("@nativescript/core/http");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

var pageData = new ObservableModule.Observable();

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Assignment";

        const limitText = (text, limit) => {
            let result = text;

            if (result !== null) {
                if (result.length > limit) {
                    for (var i = limit; i > 0; i--) {
                        var position = result.indexOf(" ", i);

                        if (position > -1 && position <= limit) {
                            result = result.substr(0, position) + "..."

                            break;
                        }
                    }
                }
            }

            return result;
        };

        appModule.getResources().limitText = limitText;

        const countText = (text, identifyingText) => {
            let result = text;

            if (result === "0") {
                result = "No" + identifyingText;
            } else {
                result += identifyingText;
            }

            return result;
        };

        appModule.getResources().countText = countText;

        if (args.isBackNavigation) {
            var helpfulContextLabel = page.getViewById("helpfulContextLabel");

            helpfulContextLabel.text = limitText(pageData.helpfulContextPlainText, 30);

            var currentAssignment = new AssignmentViewModel();

            currentAssignment.load(pageData.assignmentId, pageData.legislatorId).then(function () {
                var meetingsLabel = page.getViewById("meetingsLabel");

                pageData.meetingCount = currentAssignment.meetingCount;

                meetingsLabel.text = countText(pageData.meetingCount, " meeting(s) created");
            });

            /* if (global.refreshAssignments !== undefined && global.refreshAssignments === true) {
                page.bindingContext.meetingCreated = "Y";
                page.bindingContext.lobbyistId = global.personId;
                page.bindingContext.lobbyist = global.currentUser;

                var lobbyistGridLayout = page.getViewById("lobbyistGridLayout");
                var lobbyistLabel = page.getViewById("lobbyistLabel");

                lobbyistGridLayout.visibility = "visible";
                lobbyistLabel.text = global.currentUser;
            } */
        } else {
            pageData = navigationContext;

            if (pageData.assignmentStatusCode === undefined) {
                var currentAssignment = new AssignmentViewModel();

                currentAssignment.load(pageData.assignmentId, pageData.legislatorId).then(function () {
                    pageData = currentAssignment;

                    page.bindingContext = currentAssignment;
                });
            } else {
                page.bindingContext = navigationContext;
            }

            var summary = page.getViewById("summary");

            if (pageData.assignmentStatusCode === "S") {
                summary.editable = false;
            } else {
                summary.editable = true;
            }

            global.refreshAssignments = false;
        }
    } catch(e) {
        dialogs.alert(e);
    }
    
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onStackLayoutHelpfulContextTap(args) {
    try {
        const navigationEntry = {
            moduleName: "assignments/assignment/helpfulcontext/helpfulcontext-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutMeetingsTap(args) {
    try
    {
        const navigationEntry = {
            moduleName: "assignments/assignment/meetings/meetings-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutQuestionsTap(args) {
    try
    {
        const navigationEntry = {
            moduleName: "assignments/assignment/questions/questions-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSaveTap(args) {
    try {
        saveAssignment();
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSubmitTap(args) {
    try {
        pageData.assignmentStatusCode = "S";
        pageData.submittedById = global.personId;

        saveAssignment();
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onActionTap(args) {
    try {
        dialogs.action({
            // message: "Available Actions",
            cancelButtonText: "Cancel",
            actions: ["Save", "Submit"]
        }).then(function (result) {
            if (result == "Save") {
                saveAssignment();
            } else if (result == "Submit") {
                dialogs.action({
                    message: "Would you like to submit this assignment?",
                    cancelButtonText: "Cancel",
                    actions: ["Submit"]
                }).then(function (result) {
                    if (result === "Submit") {
                        pageData.assignmentStatusCode = "S";
                        pageData.submittedById = global.personId;

                        saveAssignment();
                    }
                });
            }
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function saveAssignment() {
    http.request({
        url: global.apiBaseServiceUrl + "updateassignment",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` },
        content: JSON.stringify(pageData)
    }).then(function (response) {
        global.refreshAssignments = true;
        
        frameModule.topmost().goBack();
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    });
}

function dateConverter(value, format) {
    let result = format;

    const day = value.getDate();

    result = result.replace("DD", day < 10 ? `0${day}` : day);

    const month = value.getMonth() + 1;

    result = result.replace("MM", month < 10 ? `0${month}` : month);
    result = result.replace("YYYY", value.getFullYear());

    return result;
};

exports.onNavigatingTo = onNavigatingTo;
exports.onStackLayoutHelpfulContextTap = onStackLayoutHelpfulContextTap;
exports.onStackLayoutMeetingsTap = onStackLayoutMeetingsTap;
exports.onStackLayoutQuestionsTap = onStackLayoutQuestionsTap;
exports.onBackTap = onBackTap;
exports.onSaveTap = onSaveTap;
exports.onSubmitTap = onSubmitTap;
exports.onActionTap = onActionTap;

const ResponseViewModel = require("./response-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
const appModule = require("@nativescript/core/application");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

var responseList = new ResponseViewModel([]);
var responseIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    responseIndex: responseIndex,
    responseList: responseList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;

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
        
        page.actionBar.title = "Question";

        pageData.boundData = navigationContext.boundData;
        pageData.boundData.result = "";

        responseList.empty();

        if (responseList.Items.length === 0) {
            pageData.set("isLoading", true);
    
            responseList.load(pageData.boundData.questionId).then(function () {
                responseIndex = 0;

                if (pageData.boundData.responseId.toString().length > 0) {
                    pageData.responseList = responseList;

                    var i;

                    for (i = 0; i < responseList.List.length; i++) {
                        if (pageData.responseList.List.getItem(i).responseId === pageData.boundData.responseId) {
                            responseIndex = i;
                        }
                    }
                }

                pageData.responseIndex = responseIndex;

                page.bindingContext = pageData;

                pageData.set("isLoading", false);
            });
        }
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

function onLoaded(args) {
    try {
        var responseListPicker = page.getViewById("responseListPicker");
        
        responseListPicker.on("selectedIndexChange", function(args) {
            var responseLabel = page.getViewById("responseLabel");

            responseLabel.text = pageData.responseList.Items.getItem(args.object.selectedIndex);
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

function onBackTap(args) {
    try {
        if (platform.isAndroid) {
            var notes = page.getViewById("notes");

            notes.dismissSoftInput();
        }

        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onGridLayoutTap(args) {
    try {
        if (platform.isAndroid) {
            var notes = page.getViewById("notes");

            notes.dismissSoftInput();
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onStackLayoutTap(args) {
    try {
        if (platform.isAndroid) {
            var notes = page.getViewById("notes");

            notes.dismissSoftInput();
        }

        var responseListPickerGridLayout = page.getViewById("responseListPickerGridLayout");
        
        if (responseListPickerGridLayout.visibility === "collapse") {
            responseListPickerGridLayout.visibility = "visible";

            page.addCss("#responseLabel {color: #cc2d30;}");
        } else {
            responseListPickerGridLayout.visibility = "collapse";

            page.addCss("#responseLabel {color: #666;}");
        }
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

function onNotesFocus(args) {
    try {
        var responseListPickerGridLayout = page.getViewById("responseListPickerGridLayout");

        responseListPickerGridLayout.visibility = "collapse";

        page.addCss("#responseLabel {color: #666;}");
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSaveTap(args) {
    if (platform.isAndroid) {
        var notes = page.getViewById("notes");

        notes.dismissSoftInput();
    }

    var responseListPicker = page.getViewById("responseListPicker");

    pageData.boundData.responseId = pageData.responseList.List.getItem(responseListPicker.selectedIndex).responseId;
    pageData.boundData.response = pageData.responseList.List.getItem(responseListPicker.selectedIndex).response;
    pageData.boundData.editorId = global.personId;

    var result;

    http.request({
        url: global.apiBaseServiceUrl + "updateassignmentlegislatorquestion",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` },
        content: JSON.stringify(pageData.boundData)
    }).then(function (response) {
        pageData.boundData.result = "Update";

        frameModule.topmost().goBack();
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
exports.onGridLayoutTap = onGridLayoutTap;
exports.onStackLayoutTap = onStackLayoutTap;
exports.onNotesFocus = onNotesFocus;
exports.onSaveTap = onSaveTap;

const SelectViewModel = require("./select-view-model");
const ObservableModule = require("@nativescript/core/data/observable");
var http = require("@nativescript/core/http");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");
var page;
var navigationContext;

var selectList = new SelectViewModel([]);

var switchTap = false;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    selectList: selectList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        pageData.boundData = navigationContext;
        pageData.boundData.updated = false;
        
        page.actionBar.title = "Select Survey(s)";

        selectList.empty();

        pageData.set("isLoading", true);

        selectList.load(navigationContext.meetingId).then(function () {
            pageData.set("isLoading", false);

            page.bindingContext = pageData;
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

function onSwitchLoaded(args) {
    var checkedSwitch = args.object;

    checkedSwitch.on("tap", function(args) {
        // Necessary to prevent the checkedChange event from firing on the switch when user scrolls.
        switchTap = true;
    });

    checkedSwitch.on("checkedChange", function(args) {
        if (switchTap) {
            var stackLayout = args.object.parent;
            var indexLabel = stackLayout.getViewById("indexLabel");

            var model = selectList.getItem(indexLabel.text);

            model.checked = args.value;
            
            http.request({
                url: global.apiBaseServiceUrl + "updatemeetingsurvey",
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` },
                content: JSON.stringify(model)
            }).then(function (response) {
                // var result = response.content.toJSON();

                // dialogs.alert(result);
                pageData.boundData.updated = true;

                switchTap = false;
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSwitchLoaded = onSwitchLoaded;
exports.onBackTap = onBackTap;

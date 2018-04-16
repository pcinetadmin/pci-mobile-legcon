const InitiativesViewModel = require("./initiatives-view-model");
const ObservableModule = require("data/observable");
var http = require("http");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;

var initiativesList = new InitiativesViewModel([]);

var switchTap = false;

var pageData = new ObservableModule.fromObject({
    initiativesList: initiativesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        page.actionBar.title = "Select Initiative(s)";

        initiativesList.empty();

        pageData.set("isLoading", true);

        initiativesList.load(navigationContext.meetingId).then(function () {
            pageData.set("isLoading", false);

            page.bindingContext = pageData;
        });
    }
    catch(e)
    {
        dialogs.alert(e);
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

            var model = initiativesList.getItem(indexLabel.text);

            model.checked = args.value;
            
            http.request({
                url: global.apiBaseServiceUrl + "updatemeetinginitiative",
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": global.token },
                content: JSON.stringify(model)
            }).then(function (response) {
                // var result = response.content.toJSON();

                // dialogs.alert(result);

                switchTap = false;
            }, function (e) {
                dialogs.alert(e);
            });
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSwitchLoaded = onSwitchLoaded;

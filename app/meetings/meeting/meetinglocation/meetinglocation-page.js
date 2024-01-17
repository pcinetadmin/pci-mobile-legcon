const MeetingLocationViewModel = require("./meetinglocation-view-model");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;
var meetingLocationList = new MeetingLocationViewModel([]);

var meetingLocationIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    meetingLocationIndex: meetingLocationIndex,
    meetingLocationList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.meetingLocationList === undefined) {
            pageData.set("isLoading", true);

            meetingLocationList.load().then(function () {
                global.meetingLocationList = meetingLocationList;

                pageData.meetingLocationList = global.meetingLocationList;

                meetingLocationIndex = 0;

                if (pageData.boundData.meetingLocationId !== null && pageData.boundData.meetingLocationId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.meetingLocationList.List.length; i++) {
                        if (pageData.meetingLocationList.List.getItem(i).meetingLocationId === pageData.boundData.meetingLocationId) {
                            meetingLocationIndex = i;
                        }
                    }
                }

                pageData.meetingLocationIndex = meetingLocationIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.meetingLocationList = global.meetingLocationList;
            
            meetingLocationIndex = 0;

            if (pageData.boundData.meetingLocationId !== null && pageData.boundData.meetingLocationId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.meetingLocationList.List.length; i++) {
                    if (pageData.meetingLocationList.List.getItem(i).meetingLocationId === pageData.boundData.meetingLocationId) {
                        meetingLocationIndex = i;
                    }
                }
            }

            pageData.meetingLocationIndex = meetingLocationIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var meetingLocationListPicker = page.getViewById("meetingLocationListPicker");
        
        meetingLocationListPicker.on("selectedIndexChange", function(args) {
            var meetingLocationItem = pageData.meetingLocationList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(meetingLocationItem.meetingLocationId + ": " + meetingLocationItem.meetingLocation);
            pageData.boundData.meetingLocationId = meetingLocationItem.meetingLocationId;
            pageData.boundData.location = meetingLocationItem.meetingLocation;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;

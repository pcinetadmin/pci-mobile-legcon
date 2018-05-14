const AttendeeTypeViewModel = require("./attendeetype-view-model");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var attendeeTypeList = new AttendeeTypeViewModel([]);

var attendeeTypeIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    attendeeTypeIndex: attendeeTypeIndex,
    attendeeTypeList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Cong. Office Attendees";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.attendeeTypeList === undefined) {
            pageData.set("isLoading", true);

            attendeeTypeList.load().then(function () {
                global.attendeeTypeList = attendeeTypeList;

                pageData.attendeeTypeList = global.attendeeTypeList;

                attendeeTypeIndex = 0;

                if (pageData.boundData.attendeeTypeId !== null && pageData.boundData.attendeeTypeId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.attendeeTypeList.List.length; i++) {
                        if (pageData.attendeeTypeList.List.getItem(i).attendeeTypeId === pageData.boundData.attendeeTypeId) {
                            attendeeTypeIndex = i;
                        }
                    }
                }

                pageData.attendeeTypeIndex = attendeeTypeIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.attendeeTypeList = global.attendeeTypeList;
            
            attendeeTypeIndex = 0;

            if (pageData.boundData.attendeeTypeId !== null && pageData.boundData.attendeeTypeId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.attendeeTypeList.List.length; i++) {
                    if (pageData.attendeeTypeList.List.getItem(i).attendeeTypeId === pageData.boundData.attendeeTypeId) {
                        attendeeTypeIndex = i;
                    }
                }
            }

            pageData.attendeeTypeIndex = attendeeTypeIndex;

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
        var attendeeTypeListPicker = page.getViewById("attendeeTypeListPicker");
        
        attendeeTypeListPicker.on("selectedIndexChange", function(args) {
            var attendeeTypeItem = pageData.attendeeTypeList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(attendeeTypeItem.attendeeTypeId + ": " + attendeeTypeItem.attendeeType);
            pageData.boundData.attendeeTypeId = attendeeTypeItem.attendeeTypeId;
            pageData.boundData.attendeeType = attendeeTypeItem.attendeeType;
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

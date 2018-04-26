const VenueTypeViewModel = require("./venuetype-view-model");
const ObservableModule = require("data/observable");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var venueTypeList = new VenueTypeViewModel([]);

var venueTypeIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    venueTypeIndex: venueTypeIndex,
    venueTypeList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Venue";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.venueTypeList === undefined) {
            pageData.set("isLoading", true);

            venueTypeList.load().then(function () {
                global.venueTypeList = venueTypeList;

                pageData.venueTypeList = global.venueTypeList;

                venueTypeIndex = 0;

                if (pageData.boundData.venueTypeId !== null && pageData.boundData.venueTypeId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.venueTypeList.List.length; i++) {
                        if (pageData.venueTypeList.List.getItem(i).venueTypeId === pageData.boundData.venueTypeId) {
                            venueTypeIndex = i;
                        }
                    }
                }

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.venueTypeList = global.venueTypeList;
            
            venueTypeIndex = 0;

            if (pageData.boundData.venueTypeId !== null && pageData.boundData.venueTypeId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.venueTypeList.List.length; i++) {
                    if (pageData.venueTypeList.List.getItem(i).venueTypeId === pageData.boundData.venueTypeId) {
                        venueTypeIndex = i;
                    }
                }
            }

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
        var venueTypeListPicker = page.getViewById("venueTypeListPicker");
        
        venueTypeListPicker.on("selectedIndexChange", function(args) {
            var venueTypeItem = pageData.venueTypeList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(venueTypeItem.venueTypeId + ": " + venueTypeItem.venueType);
            pageData.boundData.venueTypeId = venueTypeItem.venueTypeId;
            pageData.boundData.venueType = venueTypeItem.venueType;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;

const RelationshipTypeViewModel = require("./relationshiptype-view-model");
const FamiliarityLevelViewModel = require("./familiaritylevel-view-model");
const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

var relationshipList = new RelationshipTypeViewModel([]);
var relationshipIndex = 0;

var familiarityList = new FamiliarityLevelViewModel([]);
var familiarityIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    relationshipIndex: relationshipIndex,
    relationshipList: relationshipList,
    familiarityIndex: familiarityIndex,
    familiarityList: familiarityList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;
        
        page.actionBar.title = "Profile";

        pageData.boundData = navigationContext.boundData;
        pageData.boundData.result = "";

        if (relationshipList.Items.length === 0) {
            pageData.set("isLoading", true);
    
            relationshipList.load().then(function () {
                relationshipIndex = 0;

                if (pageData.boundData.relationshipTypeId.toString().length > 0) {
                    pageData.relationshipList = relationshipList;

                    var i;

                    for (i = 0; i < relationshipList.List.length; i++) {
                        if (pageData.relationshipList.List.getItem(i).relationshipTypeId === pageData.boundData.relationshipTypeId) {
                            relationshipIndex = i;
                        }
                    }
                }

                pageData.relationshipIndex = relationshipIndex;

                // page.bindingContext = pageData;

                pageData.set("isLoading", false);
            });
        } else {
            relationshipIndex = 0;

            if (pageData.boundData.relationshipTypeId.toString().length > 0) {
                pageData.relationshipList = relationshipList;

                var i;

                for (i = 0; i < relationshipList.List.length; i++) {
                    if (pageData.relationshipList.List.getItem(i).relationshipTypeId === pageData.boundData.relationshipTypeId) {
                        relationshipIndex = i;
                    }
                }
            }

            pageData.relationshipIndex = relationshipIndex;

            // page.bindingContext = pageData;
        }

        if (familiarityList.Items.length === 0) {
            pageData.set("isLoading", true);
    
            familiarityList.load().then(function () {
                familiarityIndex = 0;

                if (pageData.boundData.familiarityLevelId.toString().length > 0) {
                    pageData.familiarityList = familiarityList;

                    var i;

                    for (i = 0; i < familiarityList.List.length; i++) {
                        if (pageData.familiarityList.List.getItem(i).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                            familiarityIndex = i;
                        }
                    }
                }

                pageData.familiarityIndex = familiarityIndex;

                // page.bindingContext = pageData;

                pageData.set("isLoading", false);
            });
        } else {
            familiarityIndex = 0;

            if (pageData.boundData.familiarityLevelId.toString().length > 0) {
                pageData.familiarityList = familiarityList;

                var i;

                for (i = 0; i < familiarityList.List.length; i++) {
                    if (pageData.familiarityList.List.getItem(i).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                        familiarityIndex = i;
                    }
                }
            }

            pageData.familiarityIndex = familiarityIndex;

            // page.bindingContext = pageData;
        }

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onLoaded(args) {
    try {
        var relationshipListPicker = page.getViewById("relationshipListPicker");
        
        relationshipListPicker.on("selectedIndexChange", function(args) {
            var relationshipLabel = page.getViewById("relationshipLabel");

            relationshipLabel.text = pageData.relationshipList.Items.getItem(args.object.selectedIndex);
        });

        var familiarityListPicker = page.getViewById("familiarityListPicker");
        
        familiarityListPicker.on("selectedIndexChange", function(args) {
            var familiarityLabel = page.getViewById("familiarityLabel");

            familiarityLabel.text = pageData.familiarityList.Items.getItem(args.object.selectedIndex);
        });
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutRelationshipTap(args) {
    try {
        var relationshipListPickerGridLayout = page.getViewById("relationshipListPickerGridLayout");
        
        // dialogs.alert(pageData.relationshipList.List.getItem(0).relationshipTypeId);

        if (relationshipListPickerGridLayout.visibility === "collapse") {
            relationshipListPickerGridLayout.visibility = "visible";

            page.addCss("#responseLabel {color: #cc2d30;}");
        } else {
            relationshipListPickerGridLayout.visibility = "collapse";

            page.addCss("#responseLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onStackLayoutFamiliarityTap(args) {
    try {
        var familiarityListPickerGridLayout = page.getViewById("familiarityListPickerGridLayout");
        
        // dialogs.alert(pageData.familiarityList.List.getItem(0).familiarityLevelId);

        if (familiarityListPickerGridLayout.visibility === "collapse") {
            familiarityListPickerGridLayout.visibility = "visible";

            page.addCss("#responseLabel {color: #cc2d30;}");
        } else {
            familiarityListPickerGridLayout.visibility = "collapse";

            page.addCss("#responseLabel {color: #666;}");
        }
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

function onSave(args) {
    var relationshipListPicker = page.getViewById("relationshipListPicker");

    pageData.boundData.relationshipTypeId = pageData.relationshipList.List.getItem(relationshipListPicker.selectedIndex).relationshipTypeId;
    pageData.boundData.relationshipType = pageData.relationshipList.List.getItem(relationshipListPicker.selectedIndex).relationshipType;

    var familiarityListPicker = page.getViewById("familiarityListPicker");

    pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityListPicker.selectedIndex).familiarityLevelId;
    pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityListPicker.selectedIndex).familiarityLevel;
    
    var result;

    http.request({
        url: global.apiBaseServiceUrl + "updateprofilerelationship",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData.boundData)
    }).then(function (response) {
        // result = response.content.toJSON();
        // dialogs.alert(result);
        // dialogs.alert(pageData.boundData.responseId + ": " + pageData.boundData.response);

        pageData.boundData.result = "Update";

        frameModule.topmost().goBack();
    }, function (e) {
        dialogs.alert(e);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onStackLayoutRelationshipTap = onStackLayoutRelationshipTap;
exports.onStackLayoutFamiliarityTap = onStackLayoutFamiliarityTap;

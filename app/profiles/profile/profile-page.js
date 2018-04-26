const RelationshipTypeViewModel = require("./relationshiptype-view-model");
const FamiliarityLevelViewModel = require("./familiaritylevel-view-model");
const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var frameModule = require("ui/frame");
var http = require("http");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var relationshipList = new RelationshipTypeViewModel([]);
var familiarityList = new FamiliarityLevelViewModel([]);

var relationshipIndex = 0;
var familiarityIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    relationshipIndex: relationshipIndex,
    relationshipList: null,
    familiarityIndex: familiarityIndex,
    familiarityList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;

        navigationContext = page.navigationContext;
        
        page.actionBar.title = "Profile";

        pageData.boundData = navigationContext.boundData;
        pageData.boundData.result = "";

        if (global.relationshipList === undefined) {
            pageData.set("isLoading", true);

            relationshipList.load().then(function () {
                global.relationshipList = relationshipList;

                pageData.relationshipList = global.relationshipList;

                relationshipIndex = 0;

                if (pageData.boundData.relationshipTypeId !== null && pageData.boundData.relationshipTypeId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.relationshipList.List.length; i++) {
                        if (pageData.relationshipList.List.getItem(i).relationshipTypeId === pageData.boundData.relationshipTypeId) {
                            relationshipIndex = i;
                        }
                    }
                }

                pageData.relationshipIndex = relationshipIndex;
                pageData.boundData.relationshipTypeId = pageData.relationshipList.List.getItem(relationshipIndex).relationshipTypeId;
                pageData.boundData.relationshipType = pageData.relationshipList.List.getItem(relationshipIndex).relationshipType;

                if (global.familiarityList === undefined) {
                    familiarityList.load().then(function () {
                        global.familiarityList = familiarityList;
        
                        pageData.familiarityList = global.familiarityList;
        
                        familiarityIndex = 0;
        
                        if (pageData.boundData.familiarityLevelId !== null && pageData.boundData.familiarityLevelId.toString().length > 0) {
                            var j;
        
                            for (j = 0; j < pageData.familiarityList.List.length; j++) {
                                if (pageData.familiarityList.List.getItem(j).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                                    familiarityIndex = j;
                                }
                            }
                        }

                        pageData.familiarityIndex = familiarityIndex;
                        pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevelId;
                        pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevel;
        
                        pageData.set("isLoading", false);
        
                        page.bindingContext = pageData;
                    });
                } else {
                    pageData.familiarityList = global.familiarityList;
        
                    familiarityIndex = 0;
    
                    if (pageData.boundData.familiarityLevelId !== null && pageData.boundData.familiarityLevelId.toString().length > 0) {
                        var j;
    
                        for (j = 0; j < pageData.familiarityList.List.length; j++) {
                            if (pageData.familiarityList.List.getItem(j).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                                familiarityIndex = j;
                            }
                        }
                    }

                    pageData.familiarityIndex = familiarityIndex;
                    pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevelId;
                    pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevel;
    
                    pageData.set("isLoading", false);
    
                    page.bindingContext = pageData;
                }
            });
        } else {
            pageData.relationshipList = global.relationshipList;

            relationshipIndex = 0;

            if (pageData.boundData.relationshipTypeId !== null && pageData.boundData.relationshipTypeId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.relationshipList.List.length; i++) {
                    if (pageData.relationshipList.List.getItem(i).relationshipTypeId === pageData.boundData.relationshipTypeId) {
                        relationshipIndex = i;
                    }
                }
            }

            pageData.relationshipIndex = relationshipIndex;
            pageData.boundData.relationshipTypeId = pageData.relationshipList.List.getItem(relationshipIndex).relationshipTypeId;
            pageData.boundData.relationshipType = pageData.relationshipList.List.getItem(relationshipIndex).relationshipType;

            pageData.familiarityList = global.familiarityList;

            familiarityIndex = 0;

            if (pageData.boundData.familiarityLevelId !== null && pageData.boundData.familiarityLevelId.toString().length > 0) {
                var j;

                for (j = 0; j < pageData.familiarityList.List.length; j++) {
                    if (pageData.familiarityList.List.getItem(j).familiarityLevelId === pageData.boundData.familiarityLevelId) {
                        familiarityIndex = j;
                    }
                }
            }

            pageData.familiarityIndex = familiarityIndex;
            pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevelId;
            pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityIndex).familiarityLevel;

            page.bindingContext = pageData;
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
        var relationshipListPicker = page.getViewById("relationshipListPicker");
        
        relationshipListPicker.on("selectedIndexChange", function(args) {
            var relationshipLabel = page.getViewById("relationshipLabel");
            var relationshipItem = pageData.relationshipList.List.getItem(args.object.selectedIndex);
            
            pageData.boundData.relationshipTypeId = relationshipItem.relationshipTypeId;
            pageData.boundData.relationshipType = relationshipItem.relationshipType;

            relationshipLabel.text = pageData.boundData.relationshipType;
            // dialogs.alert(relationshipItem.relationshipTypeId + ": " + relationshipItem.relationshipType);
        });

        var familiarityListPicker = page.getViewById("familiarityListPicker");
        
        familiarityListPicker.on("selectedIndexChange", function(args) {
            var familiarityLabel = page.getViewById("familiarityLabel");
            var familiarityItem = pageData.familiarityList.List.getItem(args.object.selectedIndex);
            
            pageData.boundData.familiarityLevelId = familiarityItem.familiarityLevelId;
            pageData.boundData.familiarityLevel = familiarityItem.familiarityLevel;

            familiarityLabel.text = pageData.boundData.familiarityLevel;
            // dialogs.alert(familiarityItem.familiarityLevelId + ": " + familiarityItem.familiarityLevel);
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

function onStackLayoutRelationshipTap(args) {
    try {
        var relationshipListPickerGridLayout = page.getViewById("relationshipListPickerGridLayout");
        var familiarityListPickerGridLayout = page.getViewById("familiarityListPickerGridLayout");
        
        if (relationshipListPickerGridLayout.visibility === "collapse") {
            relationshipListPickerGridLayout.visibility = "visible";
            familiarityListPickerGridLayout.visibility = "collapse";

            page.addCss("#relationshipLabel {color: #cc2d30;}");
            page.addCss("#familiarityLabel {color: #666;}");
        } else {
            relationshipListPickerGridLayout.visibility = "collapse";

            page.addCss("#relationshipLabel {color: #666;}");
        }
    }
    catch(e)
    {
        diadialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutFamiliarityTap(args) {
    try {
        var relationshipListPickerGridLayout = page.getViewById("relationshipListPickerGridLayout");
        var familiarityListPickerGridLayout = page.getViewById("familiarityListPickerGridLayout");
        
        if (familiarityListPickerGridLayout.visibility === "collapse") {
            relationshipListPickerGridLayout.visibility = "collapse";
            familiarityListPickerGridLayout.visibility = "visible";

            page.addCss("#relationshipLabel {color: #666;}");
            page.addCss("#familiarityLabel {color: #cc2d30;}");
        } else {
            familiarityListPickerGridLayout.visibility = "collapse";

            page.addCss("#familiarityLabel {color: #666;}");
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

function onTextViewFocus(args) {
    try {
        var relationshipListPickerGridLayout = page.getViewById("relationshipListPickerGridLayout");
        var familiarityListPickerGridLayout = page.getViewById("familiarityListPickerGridLayout");

        relationshipListPickerGridLayout.visibility = "collapse";
        familiarityListPickerGridLayout.visibility = "collapse";

        page.addCss("#relationshipLabel {color: #666;}");
        page.addCss("#familiarityLabel {color: #666;}");
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

function onSave(args) {
    var relationshipListPicker = page.getViewById("relationshipListPicker");

    pageData.boundData.relationshipTypeId = pageData.relationshipList.List.getItem(relationshipListPicker.selectedIndex).relationshipTypeId;
    pageData.boundData.relationshipType = pageData.relationshipList.List.getItem(relationshipListPicker.selectedIndex).relationshipType;

    var familiarityListPicker = page.getViewById("familiarityListPicker");

    pageData.boundData.familiarityLevelId = pageData.familiarityList.List.getItem(familiarityListPicker.selectedIndex).familiarityLevelId;
    pageData.boundData.familiarityLevel = pageData.familiarityList.List.getItem(familiarityListPicker.selectedIndex).familiarityLevel;
    
    var result;

    pageData.set("isLoading", true);

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

        pageData.set("isLoading", false);

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
exports.onStackLayoutRelationshipTap = onStackLayoutRelationshipTap;
exports.onStackLayoutFamiliarityTap = onStackLayoutFamiliarityTap;
exports.onTextViewFocus = onTextViewFocus;
exports.onSave = onSave;

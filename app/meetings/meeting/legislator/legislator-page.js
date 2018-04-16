const ObservableModule = require("data/observable");
var dialogs = require("ui/dialogs");

var page;
var listView;
var navigationContext;

// var legislatorIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    // legislatorIndex: legislatorIndex,
    legislatorList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Legislator";

        listView = page.getViewById("legislatorListView");

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        // if (global.legislatorList === undefined) {
        //     pageData.set("isLoading", true);

        //     legislatorList.load().then(function () {
        //         global.legislatorList = legislatorList;

        //         pageData.legislatorList = global.legislatorList;

                // legislatorIndex = 0;

                // if (pageData.boundData.legislatorId !== null && pageData.boundData.legislatorId.toString().length > 0) {
                //     var i;

                //     for (i = 0; i < pageData.legislatorList.List.length; i++) {
                //         if (pageData.legislatorList.List.getItem(i).legislatorId === pageData.boundData.legislatorId) {
                //             legislatorIndex = i;
                //         }
                //     }
                // }

        //         if (pageData.boundData.legislatorId !== null && pageData.boundData.legislatorId.toString().length > 0) {
        //             var i;
        
        //             for (i = 0; i < pageData.legislatorList.length; i++) {
        //                 if (pageData.legislatorList.getItem(i).legislatorId === pageData.boundData.legislatorId) {
        //                     listView.selectItemAt(i);
        //                 }
        //             }
        //         }
        //         pageData.set("isLoading", false);

        //         page.bindingContext = pageData;
        //     });
        // } else {
            pageData.legislatorList = global.legislatorList;
            
            // legislatorIndex = 0;

            // if (pageData.boundData.legislatorId !== null && pageData.boundData.legislatorId.toString().length > 0) {
            //     var i;

            //     for (i = 0; i < pageData.legislatorList.List.length; i++) {
            //         if (pageData.legislatorList.List.getItem(i).legislatorId === pageData.boundData.legislatorId) {
            //             legislatorIndex = i;
            //         }
            //     }
            // }

            // if (pageData.boundData.legislatorId !== null && pageData.boundData.legislatorId.toString().length > 0) {
            //     var i;
    
            //     for (i = 0; i < pageData.legislatorList.length; i++) {
            //         if (pageData.legislatorList.getItem(i).legislatorId === pageData.boundData.legislatorId) {
            //             listView.selectItemAt(i);
            //         }
            //     }
            // }

            page.bindingContext = pageData;
        // }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onLoaded(args) {
    try {
        
    } catch(e) {
        dialogs.alert(e);
    }
}

function onNavigatedTo(args) {
    try {
        if (pageData.boundData.legislatorId !== null && pageData.boundData.legislatorId.toString().length > 0) {
            pageData.legislatorList.forEach(function (legislator, i) {
                if (Number(legislator.legislatorId) === Number(pageData.boundData.legislatorId)) {
                    listView.selectItemAt(i);
                }
            });
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemSelected(args) {
    try {
        var newIndex = args.index;
        var legislatorItem = pageData.legislatorList.getItem(args.index);

        pageData.boundData.legislatorId = legislatorItem.legislatorId;
        pageData.boundData.fullName = legislatorItem.legislator;

        var selectedItems = listView.getSelectedItems();

        pageData.legislatorList.forEach(function (legislator, i) {
            selectedItems.forEach(function (selectedLegislator) {
                if (Number(legislator.legislatorId) === Number(selectedLegislator.legislatorId)) {
                    if (Number(legislatorItem.legislatorId) === Number(selectedLegislator.legislatorId))
                    {
                        // Leave this one selected.
                    } else {
                        listView.deselectItemAt(i);
                    }
                }
            });
        });

    } catch(e) {
        dialogs.alert(e);
    }  
}

function onItemDeselected(args) {
    try {
        listView.selectItemAt(args.index);
        // var legislatorItem = pageData.legislatorList.getItem(args.index);

    } catch(e) {
        dialogs.alert(e);
    }  
}

function groupingFunction(item) {
    return (item) => {
        return item.group;
    };
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onNavigatedTo = onNavigatedTo;
exports.onItemSelected = onItemSelected;
exports.onItemDeselected = onItemDeselected;
exports.groupingFunction = groupingFunction;

const RelationshipTypeViewModel = require("./shared/relationshiptype-view-model");
const FamiliarityLevelViewModel = require("./shared/familiaritylevel-view-model");
var frame = require("ui/frame");
var gridLayout = require("ui/layouts/grid-layout");
var stackLayout = require("ui/layouts/stack-layout")
var Label = require("ui/label").Label;
var dialogs = require("ui/dialogs");

var page;
var relationshipList = new RelationshipTypeViewModel([]);
var familiarityList = new FamiliarityLevelViewModel([]);

function onNavigatingTo(args) {
    page = args.object;
    page._tabs = [];

    page.tabItems = [
        { path: "legislators/legislators-page", iconCode: "\uf19c", label: "Legislators" },
        { path: "committees/committees-page", iconCode: "\uf0c0", label: "Committees" },
        { path: "meetings/meetings-page", iconCode: "\uf2b5", label: "My Meetings" },
        { path: "assignments/assignments-page", iconCode: "\uf03a", label: "Assignments" }
    ];

    var numItems = page.tabItems.length;

    var newGrid = new gridLayout.GridLayout();

    newGrid.id = "tab-navigation";

    var star = new gridLayout.ItemSpec(1, "star");
    var auto = new gridLayout.ItemSpec(1, "auto");

    newGrid.addRow(new gridLayout.ItemSpec(1, "star"));
    newGrid.addRow(new gridLayout.ItemSpec(1, "auto"));
    
    for (var i = 0; i < numItems; i++) {
        newGrid.addColumn(new gridLayout.ItemSpec(1, "star"));
    }
    
    page.navFrame = new frame.Frame();

    page.navFrame.id = "navigation-frame";
    page.navFrame.className = "navigation-frame";

    newGrid.addChild(page.navFrame);

    gridLayout.GridLayout.setColumn(page.navFrame, 0);
    gridLayout.GridLayout.setRow(page.navFrame, 0);
    gridLayout.GridLayout.setColumnSpan(page.navFrame, numItems);

    for (var i = 0; i < numItems; i++) {
        var currentItem = page.tabItems[i];
        var tab = new stackLayout.StackLayout();

        tab.direction = "vertical";

        if (i === 0) {
            tab.className = "tab tab-selected";
        } else {
            tab.className = "tab";
        }

        tab.id = "tab_" + i;
        
        tab.on("tap", function (args) {
            return onTabSelected(args, currentItem);
        })

        var icon = new Label();

        icon.className = 'tab-icon';

        //icon.text = String.fromCharCode(currentItem.iconCode)
        icon.text = currentItem.iconCode;
        tab.addChild(icon);

        var label = new Label();

        label.className = 'tab-label';
        label.text = currentItem.label;
        tab.addChild(label);

        page._tabs.push(tab);
        newGrid.addChild(tab);

        gridLayout.GridLayout.setRow(tab, 1);
        gridLayout.GridLayout.setColumn(tab, i);
    }

    page.content = newGrid;

    page.navFrame.navigate(page.tabItems[0].path);

    relationshipList.load().then(function () {
        global.relationshipList = relationshipList;
    });

    familiarityList.load().then(function () {
        global.familiarityList = familiarityList;
    });
}

function onTabSelected(args) {
    //dialogs.alert(global.familiarityList.Items.length);
    var selectedTab = args.object;
    var index = selectedTab.id.substring(selectedTab.id.indexOf("tab_") + 4);

    if (selectedTab.className.indexOf("tab-selected") > -1) {
        var currentFrame = page.getViewById("navigation-frame");
        //dialogs.alert(currentFrame.currentPage.actionBar.title);
        if (page.tabItems[index].label === currentFrame.currentPage.actionBar.title) {
            return;
        }
    }

    page._tabs.forEach(function(tab) {
        tab.className = 'tab';
    });

    selectedTab.className = 'tab tab-selected';

    showTab(page.tabItems[index]);
}

function showTab(tabItem) {
    var navigationEntry = {
        moduleName: tabItem.path,
        context: {
            reference: "tab"
        },
        clearHistory: true
    }

    page.navFrame.navigate(navigationEntry)
}

exports.onNavigatingTo = onNavigatingTo;

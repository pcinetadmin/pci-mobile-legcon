var gridLayout = require("@nativescript/core/ui/layouts/grid-layout")
var stackLayout = require("@nativescript/core/ui/layouts/stack-layout")
var Label = require("@nativescript/core/ui/label").Label
//var dependencyObservableModule = require("@nativescript/core/ui/core/dependency-observable")
//var View = require("@nativescript/core/ui/core/view").View
var frame = require("@nativescript/core/ui/frame")
//var platform = require("@nativescript/core/platform")
var color = require("@nativescript/core/color")

var TabNavigation = (function (_super) {
    __extends(TabNavigation, _super)
    function TabNavigation() {
        _super.call(this)

        this.backgroundColor = new color.Color("#ffffff")
        this.navFrame = new frame.Frame()
        this._tabs = []
        
        var _this = this
        this.on('loaded', function(args){
            var obj = args.object
            if(obj.id==='tab-navigation'){
              return;   
            }
            _this.createUi(obj.tabs)
            _this.navFrame.isLoaded = false
            _this.navFrame.navigate(obj.tabs[0].path)
        })

    }

    TabNavigation.prototype.createUi = function (items) {
        var _this = this
        var numItems = items.length
        this.removeChildren()
        this.id = "tab-navigation"        
        this.addRow(new gridLayout.ItemSpec(1, gridLayout.GridUnitType.star))
        this.addRow(new gridLayout.ItemSpec(1, gridLayout.GridUnitType.auto))
        
        for (var i = 0; i < numItems; i++) {
            this.addColumn(new gridLayout.ItemSpec(1, gridLayout.GridUnitType.star))
        }

        this.navFrame.className = "navigation-frame"
        this.addChild(this.navFrame)
        gridLayout.GridLayout.setColumn(this.navFrame, 0)
        gridLayout.GridLayout.setRow(this.navFrame, 0)
        gridLayout.GridLayout.setColumnSpan(this.navFrame, numItems)

        for (var i = 0; i < numItems; i++) {
            (function () {
                var currentItem = items[i]

                var tab = new stackLayout.StackLayout()
                tab.direction = "vertical"
                if(i == 0) {
                    tab.className = "tab tab-selected"
                } else {
                    tab.className = "tab"
                }

                tab.id = "tab_"+i
                tab.on("tap", function (args) {
                    return _this.onTabSelected(args, currentItem) 
                })

                var icon = new Label()
                icon.className = 'tab-icon'
                //icon.text = String.fromCharCode(currentItem.iconCode)
                icon.text = currentItem.iconCode
                tab.addChild(icon)

                var label = new Label()
                label.className = 'tab-label'
                label.text = currentItem.label
                tab.addChild(label)

                _this._tabs.push(tab)
                _this.addChild(tab)
                gridLayout.GridLayout.setRow(tab, 1)
                gridLayout.GridLayout.setColumn(tab, i)
            }())
        }
    }

    TabNavigation.prototype.showTab = function(item) {
        var navigationEntry = {
            moduleName: item.path,
            animated: false,
            clearHistory: true
        }
        this.navFrame.navigate(navigationEntry)
    }

    TabNavigation.prototype.onTabSelected = function (args, item) {
        var selectedObj = args.object
        if (selectedObj.className.indexOf("tab-selected") > -1) {
            return
        }
        this._tabs.forEach(function(tab){
            tab.className = 'tab'
        });
        selectedObj.className = 'tab tab-selected'
        this.showTab(item)
    }

    return TabNavigation

}(gridLayout.GridLayout))

exports.TabNavigation = TabNavigation
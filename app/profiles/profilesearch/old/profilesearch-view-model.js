const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function ProfileSearchViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(relationalType, relationalId, filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "profilerelationshipfilter?relationalType=" + relationalType + "&relationalId=" + relationalId + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(profile) {
                if (profile.PersonId !== null && profile.PersonId !== 0) {
                    var checked = false;

                    if (profile.Checked === "true") {
                        checked = true;
                    }

                    viewModel.push({
                        relationalType: profile.RelationalType,
                        relationalId: profile.RelationalId,
                        personId: profile.PersonId,
                        fullName: profile.FullName,
                        company: profile.Company,
                        title: profile.Title,
                        checked: checked,
                        total: profile.Total
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = ProfileSearchViewModel;

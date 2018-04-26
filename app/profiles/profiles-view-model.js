const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function ProfilesViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(relationalType, relationalId) {
        return http.request({
            url: global.apiBaseServiceUrl + "profilerelationships?relationalType=" + relationalType + "&relationalId=" + relationalId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(profile) {
                viewModel.push({
                    relationalType: profile.RelationalType,
                    relationalId: profile.RelationalId,
                    personId: profile.PersonId,
                    fullName: profile.FullName,
                    company: profile.Company,
                    title: profile.Title,
                    workPhone: profile.WorkPhone,
                    emailAddress: profile.EmailAddress,
                    mailTo: profile.MailTo,
                    relationshipTypeId: profile.RelationshipTypeId,
                    relationshipType: profile.RelationshipType,
                    familiarityLevelId: profile.FamiliarityLevelId,
                    familiarityLevel: profile.FamiliarityLevel,
                    notes: profile.Notes,
                    modifiedDate: profile.ModifiedDate,
                    checked: profile.Checked,
                    total: profile.Total
                });
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

module.exports = ProfilesViewModel;

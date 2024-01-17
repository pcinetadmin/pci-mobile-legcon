const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(chamberId, filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "committeesfilter?chamberId=" + chamberId + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                if (committee.FullName !== null) {
                    var fullName = committee.FullName;
                    var title = committee.Title;

                    if (fullName.length > 0) {
                        if (title.indexOf(";") > 0) {
                            title = title.substr(0, title.indexOf(';')) + ": ";
                            fullName = fullName.replace(";", ", ");
                        } else {
                            title += ": ";
                        }
                    }

                    viewModel.push({
                        committeeId: committee.CommitteeId,
                        committeeName: committee.CommitteeName,
                        parentCommitteeId: committee.ParentCommitteeId,
                        subcommitteeId: committee.SubcommitteeId,
                        subcommitteeName: committee.SubcommitteeName,
                        isSubcommittee: committee.IsSubcommittee,
                        chamberId: committee.ChamberId,
                        chamber: committee.Chamber,
                        office: committee.Office,
                        phone: committee.Phone,
                        website: committee.Website,
                        fullName: fullName,
                        title: title
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

module.exports = CommitteesViewModel;

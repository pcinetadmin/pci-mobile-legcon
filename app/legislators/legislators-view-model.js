const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function LegislatorsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "legislatorfilter?filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(legislator) {
                if (legislator.LegislatorId !== null && legislator.LegislatorId !== 0) {
                    viewModel.push({
                        legislatorId: legislator.LegislatorId,
                        bioguideId: legislator.BioguideId,
                        birthdate: legislator.Birthdate,
                        chamber: legislator.Chamber,
                        fullName: legislator.FullName,
                        district: legislator.District,
                        facebookId: legislator.FacebookId,
                        fax: legislator.Fax,
                        combinedName: legislator.LastName + ", " + legislator.FirstName + " " + legislator.MiddleName,
                        firstName: legislator.FirstName,
                        lastName: legislator.LastName,
                        middleName: legislator.MiddleName,
                        gender: legislator.Gender,
                        inOffice: legislator.InOffice,
                        office: legislator.Office,
                        party: legislator.Party,
                        partyName: legislator.PartyName,
                        phone: legislator.Phone,
                        state: legislator.State,
                        stateName: legislator.StateName,
                        stateRank: legislator.StateRank,
                        termStart: legislator.TermStart,
                        termEnd: legislator.TermEnd,
                        title: legislator.Title,
                        titleName: legislator.TitleName,
                        twitterId: legislator.TwitterId,
                        website: legislator.Website,
                        youTubeUrl: legislator.YouTubeUrl,
                        bio: legislator.BioPlainText,
                        imageUrl: legislator.PictureUrl,
                        description: legislator.Description
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

module.exports = LegislatorsViewModel;

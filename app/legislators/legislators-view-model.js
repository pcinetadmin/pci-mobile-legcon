const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function LegislatorsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "legislatorfilter?filter=" + filter + "&page=" + page + "&pageSize=" + pageSize,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token } //,
            //content: JSON.stringify({ filter: "", page: "1", pageSize: "20" })
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(legislator) {
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
            });
        }, function (e) {
            dialogs.alert(e);
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

const ObservableModule = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function BioViewModel(items) {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray(items);
    viewModel.Bio = "";

    viewModel.load = function(legislatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "legislator?legislatorId=" + legislatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);
            
            viewModel.Items.push({
                label: "Office",
                value: data.Office
            });

            viewModel.Items.push({
                label: "State",
                value: data.StateName
            });

            viewModel.Items.push({
                label: "Phone",
                value: data.Phone
            });

            viewModel.Items.push({
                label: "Term Start",
                value: data.TermStart
            });

            viewModel.Items.push({
                label: "Chamber",
                value: data.Chamber
            });

            viewModel.Items.push({
                label: "Party",
                value: data.PartyName
            });

            viewModel.Items.push({
                label: "PCI Bio",
                value: ""
            });

            viewModel.Bio = data.BioPlainText;

            // viewModel.legislatorId = data.LegislatorId;
            // viewModel.bioguideId = data.BioguideId;
            // viewModel.birthdate = data.Birthdate;
            // viewModel.fullName = data.FullName;
            // viewModel.district = data.District;
            // viewModel.facebookId = data.FacebookId;
            // viewModel.fax = data.Fax;
            // viewModel.firstName = data.FirstName;
            // viewModel.lastName = data.LastName;
            // viewModel.middleName = data.MiddleName;
            // viewModel.gender = data.Gender;
            // viewModel.inOffice = data.InOffice;
            // viewModel.party = data.Party;
            // viewModel.state = data.State;
            // viewModel.termEnd = data.TermEnd;
            // viewModel.title = data.Title;
            // viewModel.titleName = data.TitleName;
            // viewModel.twitterId = data.TwitterId;
            // viewModel.website = data.Website;
            // viewModel.youTubeUrl = data.YouTubeUrl;
            // viewModel.bio = data.Bio;
            // viewModel.imageUrl = data.PictureUrl;
            // viewModel.description = data.Description;
            
        }, function (e) {
            dialogs.alert(e);
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();

            viewModel.Bio = "";
        }
    };

    return viewModel;
}

module.exports = BioViewModel;

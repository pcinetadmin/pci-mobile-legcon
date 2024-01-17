const ObservableModule = require("@nativescript/core/data/observable");
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function AssignmentViewModel() {
    const viewModel = ObservableModule.fromObject({
        assignmentId: null,
        assignmentName: null,
        companyId: null,
        company: null,
        initiativeIds: null,
        initiatives: null,
        legislatorId: null,
        legislator: null,
        party: null,
        partyName: null,
        state: null,
        stateName: null,
        chamberId: null,
        chamber: null,
        sessionYear: null,
        appliesTo: null,
        committeeIds: null,
        committees: null,
        createdDate: null,
        assignmentStatusCode: null,
        assignmentStatus: null,
        lobbyistId: null,
        lobbyist: null,
        summary: null,
        helpfulContext: null,
        helpfulContextPlainText: null,
        meetingCount: null,
        questionCount: null,
        submittedById: null,
        submittedBy: null,
        submittedDate: null,
        publishedDate: null,

        load: function(assignmentId, legislatorId) {
            return new Promise((resolve, reject) => {
                return http.request({
                    url: global.apiBaseServiceUrl + "assignmentlegislator?assignmentId=" + assignmentId + "&legislatorId=" + legislatorId,
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
                }).then(function (response) {
                    var result = response.content.toString();
                    var data = JSON.parse(result);
                    // var createdDate;
                    // var submittedDate;
                    
                    // createdDate = new Date(parseInt(data.CreatedDate.substring(data.CreatedDate.indexOf("/Date(") + 6, data.CreatedDate.indexOf(")/"))));

                    // if (data.SubmittedDate === null || data.SubmittedDate.length === 0) {
                    //     submittedDate = null;
                    // } else {
                    //     submittedDate = new Date(parseInt(data.SubmittedDate.substring(data.SubmittedDate.indexOf("/Date(") + 6, data.SubmittedDate.indexOf(")/"))));
                    // }

                    var publishedDate;
                
                    publishedDate = new Date(parseInt(data.PublishedDate.substring(data.PublishedDate.indexOf("/Date(") + 6, data.PublishedDate.indexOf(")/"))));

                    viewModel.assignmentId = data.AssignmentId,
                    viewModel.assignmentName = data.AssignmentName,
                    viewModel.companyId = data.CompanyId,
                    viewModel.company = data.Company,
                    viewModel.initiativeIds = data.InitiativeIds,
                    viewModel.initiatives = data.Initiatives,
                    viewModel.legislatorId = data.LegislatorId,
                    viewModel.legislator = data.Legislator,
                    viewModel.party = data.Party,
                    viewModel.partyName = data.PartyName,
                    viewModel.state = data.State,
                    viewModel.stateName = data.StateName,
                    viewModel.chamberId = data.ChamberId,
                    viewModel.chamber = data.Chamber,
                    viewModel.sessionYear = data.SessionYear,
                    viewModel.appliesTo = data.Chamber + ", " + data.SessionYear,
                    viewModel.committeeIds = data.CommitteeIds,
                    viewModel.committees = data.Committees,
                    viewModel.createdDate = data.CreatedDate,
                    viewModel.assignmentStatusCode = data.AssignmentStatusCode,
                    viewModel.assignmentStatus = data.AssignmentStatus,
                    viewModel.lobbyistId = data.LobbyistId,
                    viewModel.lobbyist = data.Lobbyist,
                    viewModel.summary = data.Summary,
                    viewModel.helpfulContext = data.HelpfulContext,
                    viewModel.helpfulContextPlainText = data.HelpfulContextPlainText,
                    viewModel.meetingCount = data.MeetingCount,
                    viewModel.questionCount = data.QuestionCount,
                    viewModel.submittedById = data.SubmittedById,
                    viewModel.submittedBy = data.SubmittedBy,
                    viewModel.submittedDate = data.SubmittedDate,
                    viewModel.publishedDate = publishedDate;

                    resolve("SUCCESS");

                }, function (e) {
                    dialogs.alert({
                        title: "Error",
                        message: e.toString(),
                        okButtonText: "OK"
                    });

                    reject("FAILURE");
                });
            })
        }
    });

    return viewModel;
}

module.exports = AssignmentViewModel;

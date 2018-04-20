const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function AssignmentsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(meetingCreated, filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "assignmentsfilter?meetingCreated=" + meetingCreated + "&filter=" + filter + "&page=" + page + "&pageSize=" + pageSize + "&companyId=" + global.companyId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token } //,
            //content: JSON.stringify({ filter: "", page: "1", pageSize: "20" })
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(assignment) {
                viewModel.push({
                    assignmentId: assignment.AssignmentId,
                    companyId: assignment.CompanyId,
                    company: assignment.Company,
                    initiativeId: assignment.InitiativeId,
                    initiative: assignment.Initiative,
                    surveyId: assignment.SurveyId,
                    survey: assignment.Survey,
                    legislatorId: assignment.LegislatorId,
                    legislator: assignment.Legislator,
                    party: assignment.Party,
                    partyName: assignment.PartyName,
                    state: assignment.State,
                    stateName: assignment.StateName,
                    committeeIds: assignment.CommitteeIds,
                    committees: assignment.Committees,
                    createdDate: assignment.CreatedDate,
                    completionDate: assignment.CompletionDate,
                    assignmentStatusCode: assignment.AssignmentStatusCode,
                    assignmentStatus: assignment.AssignmentStatus,
                    meetingCreated: assignment.MeetingCreated,
                    meetingId: assignment.MeetingId,
                    lobbyistId: assignment.LobbyistId,
                    lobbyist: assignment.Lobbyist
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

module.exports = AssignmentsViewModel;

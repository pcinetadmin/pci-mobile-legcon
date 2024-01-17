const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function AssignmentsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(statusCode, filter, page, pageSize) {
        return http.request({
            // url: global.apiBaseServiceUrl + "assignmentsfilter?meetingCreated=" + meetingCreated + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize + "&companyId=" + global.companyId,
            url: global.apiBaseServiceUrl + "firmassignmentsfilter?statusCode=" + statusCode + "&filter=" + filter.replace(/ /g, "%20") + "&page=" + page + "&pageSize=" + pageSize + "&personId=" + global.personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(assignment) {
                if (assignment.AssignmentId !== null && assignment.AssignmentId !== 0) {
                    var publishedDate;
                
                    publishedDate = new Date(parseInt(assignment.PublishedDate.substring(assignment.PublishedDate.indexOf("/Date(") + 6, assignment.PublishedDate.indexOf(")/"))));

                    viewModel.push({
                        assignmentId: assignment.AssignmentId,
                        assignmentName: assignment.AssignmentName,
                        companyId: assignment.CompanyId,
                        company: assignment.Company,
                        initiativeIds: assignment.InitiativeIds,
                        initiatives: assignment.Initiatives,
                        legislatorId: assignment.LegislatorId,
                        legislator: assignment.Legislator,
                        party: assignment.Party,
                        partyName: assignment.PartyName,
                        state: assignment.State,
                        stateName: assignment.StateName,
                        chamberId: assignment.ChamberId,
                        chamber: assignment.Chamber,
                        sessionYear: assignment.SessionYear,
                        appliesTo: assignment.Chamber + ", " + assignment.SessionYear,
                        committeeIds: assignment.CommitteeIds,
                        committees: assignment.Committees,
                        createdDate: assignment.CreatedDate,
                        assignmentStatusCode: assignment.AssignmentStatusCode,
                        assignmentStatus: assignment.AssignmentStatus,
                        lobbyistId: assignment.LobbyistId,
                        lobbyist: assignment.Lobbyist,
                        summary: assignment.Summary,
                        helpfulContext: assignment.HelpfulContext,
                        helpfulContextPlainText: assignment.HelpfulContextPlainText,
                        meetingCount: assignment.MeetingCount,
                        questionCount: assignment.QuestionCount,
                        submittedById: assignment.SubmittedById,
                        submittedBy: assignment.SubmittedBy,
                        submittedDate: assignment.SubmittedDate,
                        publishedDate: publishedDate
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

module.exports = AssignmentsViewModel;

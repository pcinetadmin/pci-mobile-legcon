const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function MeetingsViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(reference, legislatorId, recentMeetings) {
        var requestUrl;

        if (reference === "tab") {
            requestUrl = global.apiBaseServiceUrl + "meetings?personId=" + global.personId + "&recentMeetings=" + recentMeetings;
        } else {
            if (global.isPci) {
                requestUrl = global.apiBaseServiceUrl + "meetings?legislatorId=" + legislatorId + "&recentMeetings=" + recentMeetings;
            } else {
                requestUrl = global.apiBaseServiceUrl + "meetings?personId=" + global.personId + "&legislatorId=" + legislatorId + "&recentMeetings=" + recentMeetings;
            }
        }

        return http.request({
            url: requestUrl,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token } //,
            //content: JSON.stringify({ filter: "", page: "1", pageSize: "20" })
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meeting) {
                var meetingDate;
                var legislatorStaffAttendees = meeting.LegislatorStaffAttendees;
                var pciInitiatives = meeting.PciInitiatives;
                
                meetingDate = meeting.MeetingDate.substring(meeting.MeetingDate.indexOf("/Date(") + 6, meeting.MeetingDate.indexOf(")/"));

                if (legislatorStaffAttendees.length > 0)
                {
                    legislatorStaffAttendees = "with " + legislatorStaffAttendees;
                }

                if (pciInitiatives.length > 0)
                {
                    pciInitiatives = "on " + pciInitiatives
                }

                viewModel.push({
                    meetingId: meeting.MeetingId,
                    meetingDate: new Date(parseInt(meetingDate)),
                    venueTypeId: meeting.VenueTypeId,
                    venueType: meeting.VenueType,
                    attendeeTypeId: meeting.AttendeeTypeId,
                    attendeeType: meeting.AttendeeType,
                    lobbyistId: meeting.LobbyistId,
                    lobbyist: meeting.Lobbyist,
                    legislatorId: meeting.LegislatorId,
                    fullName: meeting.FullName,
                    name: meeting.Name,
                    pciInitiatives: pciInitiatives,
                    primaryOfficeContact: meeting.PrimaryOfficeContact,
                    meetingLocationId: meeting.LocationId,
                    location: meeting.Location,
                    legislatorStaffAttendees: legislatorStaffAttendees,
                    followUpNeeded: meeting.FollowUpNeeded,
                    followUpDate: meeting.FollowUpDate,
                    followUpNotes: meeting.FollowUpNotes,
                    creatorId: meeting.CreatorId,
                    notes: meeting.Notes,
                    initiativeId: meeting.InitiativeId,
                    surveyId: meeting.SurveyId,
                    assignmentId: meeting.AssignmentId
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

module.exports = MeetingsViewModel;

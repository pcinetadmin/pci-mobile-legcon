const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var frameModule = require("@nativescript/core/ui/frame");
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

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
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` } //,
            //content: JSON.stringify({ filter: "", page: "1", pageSize: "20" })
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meeting) {
                var meetingDate;
                var initiatives = meeting.Initiatives;
                var followUpDate;
                
                meetingDate = new Date(parseInt(meeting.MeetingDate.substring(meeting.MeetingDate.indexOf("/Date(") + 6, meeting.MeetingDate.indexOf(")/"))));

                if (initiatives.length > 0)
                {
                    initiatives = "on " + initiatives
                }

                if (meeting.FollowUpDate === null || meeting.FollowUpDate.length === 0) {
                    followUpDate = null;
                } else {
                    followUpDate = new Date(parseInt(meeting.FollowUpDate.substring(meeting.FollowUpDate.indexOf("/Date(") + 6, meeting.FollowUpDate.indexOf(")/"))));
                }

                viewModel.push({
                    meetingId: meeting.MeetingId,
                    meetingDate: meetingDate,
                    venueTypeId: meeting.VenueTypeId,
                    venueType: meeting.VenueType,
                    inPerson: meeting.InPerson,
                    offeredToMembers: meeting.OfferedToMembers,
                    attendeeTypeId: meeting.AttendeeTypeId,
                    attendeeType: meeting.AttendeeType,
                    lobbyistId: meeting.LobbyistId,
                    lobbyist: meeting.Lobbyist,
                    legislatorId: meeting.LegislatorId,
                    fullName: meeting.FullName,
                    name: meeting.Name,
                    initiativeIds: meeting.InitiativeIds,
                    initiatives: meeting.Initiatives,
                    pciAttendees: meeting.PciAttendees,
                    primaryOfficeContact: meeting.PrimaryOfficeContact,
                    meetingLocationId: meeting.MeetingLocationId,
                    location: meeting.Location,
                    legislatorStaffAttendees: meeting.LegislatorStaffAttendees,
                    followUpNeeded: meeting.FollowUpNeeded,
                    followUpDate: followUpDate,
                    followUpNotes: meeting.FollowUpNotes,
                    creatorId: meeting.CreatorId,
                    notes: meeting.Notes,
                    assignmentId: meeting.AssignmentId,
                    assignmentName: meeting.AssignmentName
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

module.exports = MeetingsViewModel;

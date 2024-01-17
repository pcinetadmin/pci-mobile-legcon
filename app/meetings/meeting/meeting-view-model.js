const ObservableModule = require("@nativescript/core/data/observable");
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function MeetingViewModel() {
    const viewModel = ObservableModule.fromObject({
        meetingId: null,
        meetingDate: null,
        venueTypeId: null,
        venueType: null,
        inPerson: null,
        offeredToMembers: null,
        attendeeTypeId: null,
        attendeeType: null,
        lobbyistId: null,
        lobbyist: null,
        legislatorId: null,
        fullName: null,
        name: null,
        initiativeIds: null,
        initiatives: null,
        pciAttendees: null,
        primaryOfficeContact: null,
        meetingLocationId: null,
        location: null,
        legislatorStaffAttendees: null,
        followUpNeeded: null,
        followUpDate: null,
        followUpNotes: null,
        creatorId: null,
        notes: null,
        assignmentId: null,

        load: function(meetingId) {
            return new Promise((resolve, reject) => {
                return http.request({
                    url: global.apiBaseServiceUrl + "meeting?meetingId=" + meetingId,
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
                }).then(function (response) {
                    var result = response.content.toString();
                    var data = JSON.parse(result);
                    var meetingDate;
                    var followUpDate;
                    
                    meetingDate = new Date(parseInt(data.MeetingDate.substring(data.MeetingDate.indexOf("/Date(") + 6, data.MeetingDate.indexOf(")/"))));

                    if (data.FollowUpDate === null || data.FollowUpDate.length === 0) {
                        followUpDate = null;
                    } else {
                        followUpDate = new Date(parseInt(data.FollowUpDate.substring(data.FollowUpDate.indexOf("/Date(") + 6, data.FollowUpDate.indexOf(")/"))));
                    }

                    viewModel.meetingId = data.MeetingId,
                    viewModel.meetingDate = meetingDate,
                    viewModel.venueTypeId = data.VenueTypeId,
                    viewModel.venueType = data.VenueType,
                    viewModel.inPerson = data.InPerson,
                    viewModel.inPerson = data.OfferedToMembers,
                    viewModel.attendeeTypeId = data.AttendeeTypeId,
                    viewModel.attendeeType = data.AttendeeType,
                    viewModel.lobbyistId = data.LobbyistId,
                    viewModel.lobbyist = data.Lobbyist,
                    viewModel.legislatorId = data.LegislatorId,
                    viewModel.fullName = data.FullName,
                    viewModel.name = data.Name,
                    viewModel.initiativeIds = data.InitiativeIds,
                    viewModel.initiatives = data.Initiatives,
                    viewModel.pciAttendees = data.PciAttendees,
                    viewModel.primaryOfficeContact = data.PrimaryOfficeContact,
                    viewModel.meetingLocationId = data.MeetingLocationId,
                    viewModel.location = data.Location,
                    viewModel.legislatorStaffAttendees = data.LegislatorStaffAttendees,
                    viewModel.followUpNeeded = data.FollowUpNeeded,
                    viewModel.followUpDate = followUpDate,
                    viewModel.followUpNotes = data.FollowUpNotes,
                    viewModel.creatorId = data.CreatorId,
                    viewModel.notes = data.Notes,
                    viewModel.assignmentId = data.AssignmentId;

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

module.exports = MeetingViewModel;

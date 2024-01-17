const observableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var frameModule = require("@nativescript/core/ui/frame");
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function QuestionsViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(assignmentId, legislatorId) {
        var requestUrl = global.apiBaseServiceUrl + "assignmentlegislatorquestions?assignmentId=" + assignmentId + "&legislatorId=" + legislatorId;
        
        return http.request({
            url: requestUrl,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` } //,
            //content: JSON.stringify({ filter: "", page: "1", pageSize: "20" })
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(question) {
                viewModel.push({
                    questionId: question.QuestionId,
                    question: question.Question,
                    assignmentId: question.AssignmentId,
                    assignmentName: question.AssignmentName,
                    legislatorId: question.LegislatorId,
                    fullName: question.FullName,
                    responseSetId: question.ResponseSetId,
                    responseSet: question.ResponseSet,
                    responseId: question.ResponseId,
                    response: question.Response,
                    notes: question.Notes,
                    editorId: question.EditorId,
                    editor: question.Editor,
                    modifiedDate: question.ModifiedDate
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

module.exports = QuestionsViewModel;

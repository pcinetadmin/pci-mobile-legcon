const SurveyquestionViewModel = require("./surveyquestion-view-model");

var page;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    try {
        page = args.object;

        var navigationContext = page.navigationContext;
        var legislatorId = page.getViewById("legislatorId");
        var legislatorName = page.getViewById("legislatorName");

        legislatorId.text = navigationContext.legislatorId;
        legislatorName.text = navigationContext.fullName;
        
        var surveyTitle = navigationContext.boundData.survey;
        var maxLength = 23;

        if (surveyTitle.length > maxLength) {
            for (var i = maxLength; i > 0; i--) {
                var position = surveyTitle.indexOf(" ", i);

                if (position > -1 && position <= maxLength) {
                    surveyTitle = surveyTitle.substr(0, position) + "..."

                    break;
                }
            }
        }

        page.actionBar.title = surveyTitle;

        page.bindingContext = navigationContext.boundData;
    }
    catch(e)
    {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;

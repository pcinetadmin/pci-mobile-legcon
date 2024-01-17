const observableModule = require("@nativescript/core/data/observable");
const auth0Module = require("nativescript-auth0");
var frameModule = require("@nativescript/core/ui/frame");
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

var auth0Object = auth0Module.Auth0;

function Auth0LoginViewModel() {
    const viewModel = observableModule.fromObject({
        auth0: "",
        message: "",

        onLogout: function() {
            var auth0 = new auth0Object(global.auth0ClientID, global.auth0Domain);

            auth0.logoutUser();
        },

        onLogin: function() {
            var auth0 = new auth0Object(global.auth0ClientID, global.auth0Domain);

            auth0WebAuthentication(auth0);
        }
    });

    function auth0WebAuthentication(auth0) {
        auth0.webAuthentication({
            audience: global.apiAudienceUrl,
            scope: 'openid offline_access'
        }).then((result) => {
            global.token = result.accessToken.toString();
            
            auth0GetUserInfo(auth0);
        }).catch((e) => {
            console.error(e.toString());

            /* dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            }); */
        });
    }

    function auth0GetUserInfo(auth0) {
        var auth0Id = "";

        auth0.getUserInfo(global.token).then((response) => {
            auth0Id = response.sub.toString();
            
            var roles = response.customClaims[global.auth0RoleIdentifier];
            
            for (let i = 0; i < roles.length; i++) {
                switch(roles[i].toString().toLowerCase()) {
                    case "pci.everyone":
                        global.isPci = true;

                        break;

                    case "congress user":
                        global.isCongressUser = true;
                        
                        break;

                    case "congress admin":
                        global.isCongressAdmin = true;
                        
                        break;

                    case "congress external user":
                        global.isCongressExternalUser = true;
                        
                        break;

                    default:
                        // do nothing

                }
            }

            if (global.isCongressAdmin || global.isCongressUser || global.isCongressExternalUser || global.isPci)
            {
                http.request({
                    url: global.apiBaseServiceUrl + "userdetails?auth0Id=" + auth0Id,
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
                }).then(function (response) {
                    var result = response.content.toString();
                    var data = JSON.parse(result);
        
                    global.personId = data.PersonId;
                    global.currentUser = data.FullName;
                    global.companyId = data.CompanyId;

                    navigateToMain();

                }, error => {
                    dialogs.alert({
                        title: "Error",
                        message: error,
                        okButtonText: "OK"
                    });
                });
            } else {
                // undefined or null data.AccessToken returned.  
                // Usually the result of invalid user name and password.
                dialogs.alert("Invalid email address or password.")
            }

        }).catch((e) => {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    }

    function navigateToMain() {
        try
        {
            const navigationEntry = {
                moduleName: "main-page",
                clearHistory: true
            };

            frameModule.topmost().navigate(navigationEntry);
        }
        catch(e)
        {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    }

    return viewModel;
}

module.exports = Auth0LoginViewModel;
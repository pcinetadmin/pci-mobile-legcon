const platformModule = require("platform");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var appSettings = require("application-settings");
var http = require("http");
var dialogs = require("ui/dialogs");

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",
        rememberMe: false,
        useTouchId: false,

        signIn: function() {
            const email = this.email;
            const password = this.password;

            // dialogs.alert(global.token + "\nisPci: " + global.isPci + "\nisCongressAdmin: " + global.isCongressAdmin + 
            //     "\nisCongressUser: " + global.isCongressUser + "\nisCongressExternalUser: " + global.isCongressExternalUser + 
            //     "\npersonId: " + global.personId + "\ncompanyId: " + global.companyId + "\ncurrentUser: " + global.currentUser);

            http.request({
                url: global.apiLoginUrl,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({ EmailAddress: email, Password: password, Scope: global.scope })
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);

                if (data.AccessToken !== undefined && data.AccessToken !== null)
                {
                    global.token = data.AccessToken;
                    
                    var pciEveryonePosition = global.token.toLowerCase().indexOf("pci.everyone");

                    if (pciEveryonePosition > 0)
                    {
                        global.isPci = true;
                    }

                    var congressUserPosition = global.token.toLowerCase().indexOf("congress+user");
                    var congressExternalUserPosition = global.token.toLowerCase().indexOf("congress+external+user");
                    var congressAdminPosition = global.token.toLowerCase().indexOf("congress+admin");

                    if (congressAdminPosition > 0)
                    {
                        global.isCongressAdmin = true;
                    }
                    else if (congressUserPosition > 0)
                    {
                        global.isCongressUser = true;
                    }
                    else if (congressExternalUserPosition > 0)
                    {
                        global.isCongressExternalUser = true;
                    }

                    if (global.isCongressAdmin || global.isCongressUser || global.isCongressExternalUser)
                    {
                        var personIdPosition = token.toLowerCase().indexOf("&personid=") + 10;
                        var firstNamePosition = token.toLowerCase().indexOf("&firstname=");

                        global.personId = token.slice(personIdPosition, firstNamePosition);

                        var fullNamePosition = token.toLowerCase().indexOf("&fullname=") + 10;
                        var streetAddress1Position = token.toLowerCase().indexOf("&streetaddress1=");

                        global.currentUser = decodeURIComponent(token.slice(fullNamePosition, streetAddress1Position)).replace("+", " ");

                        var companyIdPosition = token.toLowerCase().indexOf("&companyid=") + 11;
                        var deptIdPosition = token.toLowerCase().indexOf("&deptid=");

                        global.companyId = token.slice(companyIdPosition, deptIdPosition);

                        const navigationEntry = {
                            moduleName: "main-page", // "home/home-page",
                            clearHistory: true
                        };

                        var useTouchId = appSettings.getBoolean("useTouchId", false);
                        var rememberMe = appSettings.getBoolean("rememberMe", false);

                        if ((useTouchId === undefined || useTouchId === null || useTouchId === false) && rememberMe && platformModule.isIOS)
                        {
                            dialogs.confirm(
                                {
                                    title: "Touch ID for \"PCI LegCon\"",
                                    message: "Would you like to use the fingerprint scanner to log on in the future?",
                                    okButtonText: "Yes",
                                    cancelButtonText: "No"
                                }
                            ).then(function (result) {
                                if (result)
                                {
                                    appSettings.setBoolean("useTouchId", true);

                                    try
                                    {
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
                                else
                                {
                                    appSettings.setBoolean("useTouchId", false);

                                    try
                                    {
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
                            });
                        }
                        else
                        {
                            try
                            {
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
                    }
                    else
                    {
                        dialogs.alert("Unauthorized user account.");
                    }
                }
                else
                {
                    // undefined or null data.AccessToken returned.  
                    // Usually the result of invalid user name and password.
                    //dialogs.alert("Null access token returned.");
                    dialogs.alert("Invalid email address or password.")
                }
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;

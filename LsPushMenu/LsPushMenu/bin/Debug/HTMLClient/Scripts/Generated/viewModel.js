/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditPerson(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPerson screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPerson.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPerson", parameters);
    }

    function Main(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Main screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="People" type="msls.VisualCollection" elementType="msls.application.Person">
        /// Gets the people for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Main.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Main", parameters);
    }

    function PageTwo(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the PageTwo screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="People" type="msls.VisualCollection" elementType="msls.application.Person">
        /// Gets the people for this screen.
        /// </field>
        /// <field name="details" type="msls.application.PageTwo.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "PageTwo", parameters);
    }

    function SubSection(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the SubSection screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.SubSection.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "SubSection", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditPerson: $defineScreen(AddEditPerson, [
            { name: "Person", kind: "local", type: lightSwitchApplication.Person }
        ], [
        ]),

        Main: $defineScreen(Main, [
            {
                name: "People", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.People;
                }
            }
        ], [
        ]),

        PageTwo: $defineScreen(PageTwo, [
            {
                name: "People", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.People;
                }
            }
        ], [
        ]),

        SubSection: $defineScreen(SubSection, [
        ], [
        ]),

        showAddEditPerson: $defineShowScreen(function showAddEditPerson(Person, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPerson screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPerson", parameters, options);
        }),

        showMain: $defineShowScreen(function showMain(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Main screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Main", parameters, options);
        }),

        showPageTwo: $defineShowScreen(function showPageTwo(options) {
            /// <summary>
            /// Asynchronously navigates forward to the PageTwo screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("PageTwo", parameters, options);
        }),

        showSubSection: $defineShowScreen(function showSubSection(options) {
            /// <summary>
            /// Asynchronously navigates forward to the SubSection screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("SubSection", parameters, options);
        })

    });

}(msls.application));

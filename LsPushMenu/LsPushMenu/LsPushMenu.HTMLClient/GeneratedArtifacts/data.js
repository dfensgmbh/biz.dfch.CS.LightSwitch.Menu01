/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Person(entitySet) {
        /// <summary>
        /// Represents the Person entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this person.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this person.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this person.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this person.
        /// </field>
        /// <field name="EmailAddress" type="String">
        /// Gets or sets the emailAddress for this person.
        /// </field>
        /// <field name="Birthdate" type="Date">
        /// Gets or sets the birthdate for this person.
        /// </field>
        /// <field name="PersonType" type="String">
        /// Gets or sets the personType for this person.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this person.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this person.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this person.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this person.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this person.
        /// </field>
        /// <field name="details" type="msls.application.Person.Details">
        /// Gets the details for this person.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="People" type="msls.EntitySet">
        /// Gets the People entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Person: $defineEntity(Person, [
            { name: "Id", type: Number },
            { name: "FirstName", type: String },
            { name: "LastName", type: String },
            { name: "EmailAddress", type: String },
            { name: "Birthdate", type: Date },
            { name: "PersonType", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "People", elementType: Person }
        ], [
            {
                name: "People_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.People },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/People(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));

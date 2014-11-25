/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditPerson.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPerson
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.AddEditPerson,
            value: lightSwitchApplication.AddEditPerson
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.AddEditPerson,
            value: lightSwitchApplication.Person
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        EmailAddress: {
            _$class: msls.ContentItem,
            _$name: "EmailAddress",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        Birthdate: {
            _$class: msls.ContentItem,
            _$name: "Birthdate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: Date
        },
        PersonType: {
            _$class: msls.ContentItem,
            _$name: "PersonType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPerson
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPerson, {
        /// <field>
        /// Called when a new AddEditPerson screen is created.
        /// <br/>created(msls.application.AddEditPerson screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPerson],
        /// <field>
        /// Called before changes on an active AddEditPerson screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPerson screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPerson],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("left"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("LastName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("right"); }],
        /// <field>
        /// Called after the EmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddress_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("EmailAddress"); }],
        /// <field>
        /// Called after the Birthdate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Birthdate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("Birthdate"); }],
        /// <field>
        /// Called after the PersonType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonType_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("PersonType"); }]
    });

    lightSwitchApplication.Main.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Main
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Main,
            data: lightSwitchApplication.Main,
            value: lightSwitchApplication.Main
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.Main,
            data: lightSwitchApplication.Main,
            value: lightSwitchApplication.Main
        },
        spacerContent: {
            _$class: msls.ContentItem,
            _$name: "spacerContent",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Main,
            data: lightSwitchApplication.Main,
            value: lightSwitchApplication.Main
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Main,
            data: lightSwitchApplication.Main,
            value: lightSwitchApplication.Main
        },
        People: {
            _$class: msls.ContentItem,
            _$name: "People",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Main,
            data: lightSwitchApplication.Main,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Main,
                _$entry: {
                    elementType: lightSwitchApplication.Person
                }
            }
        },
        PeopleTemplate: {
            _$class: msls.ContentItem,
            _$name: "PeopleTemplate",
            _$parentName: "People",
            screen: lightSwitchApplication.Main,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Main
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Main, {
        /// <field>
        /// Called when a new Main screen is created.
        /// <br/>created(msls.application.Main screen)
        /// </field>
        created: [lightSwitchApplication.Main],
        /// <field>
        /// Called before changes on an active Main screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Main screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Main],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Main().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Main().findContentItem("Group1"); }],
        /// <field>
        /// Called to render the spacerContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        spacerContent_render: [$element, function () { return new lightSwitchApplication.Main().findContentItem("spacerContent"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Main().findContentItem("Group2"); }],
        /// <field>
        /// Called after the People content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        People_postRender: [$element, function () { return new lightSwitchApplication.Main().findContentItem("People"); }],
        /// <field>
        /// Called after the PeopleTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PeopleTemplate_postRender: [$element, function () { return new lightSwitchApplication.Main().findContentItem("PeopleTemplate"); }]
    });

    lightSwitchApplication.PageTwo.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.PageTwo
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.PageTwo,
            value: lightSwitchApplication.PageTwo
        },
        spacerContent: {
            _$class: msls.ContentItem,
            _$name: "spacerContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.PageTwo,
            value: lightSwitchApplication.PageTwo
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.PageTwo,
            value: lightSwitchApplication.PageTwo
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group1",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.PageTwo,
            value: lightSwitchApplication.PageTwo
        },
        People: {
            _$class: msls.ContentItem,
            _$name: "People",
            _$parentName: "Group1",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.PageTwo,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.PageTwo,
                _$entry: {
                    elementType: lightSwitchApplication.Person
                }
            }
        },
        PeopleTemplate: {
            _$class: msls.ContentItem,
            _$name: "PeopleTemplate",
            _$parentName: "People",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "PeopleTemplate",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.Person,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "PeopleTemplate",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.Person,
            value: String
        },
        EmailAddress: {
            _$class: msls.ContentItem,
            _$name: "EmailAddress",
            _$parentName: "PeopleTemplate",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.Person,
            value: String
        },
        Birthdate: {
            _$class: msls.ContentItem,
            _$name: "Birthdate",
            _$parentName: "PeopleTemplate",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.Person,
            value: Date
        },
        PersonType: {
            _$class: msls.ContentItem,
            _$name: "PersonType",
            _$parentName: "PeopleTemplate",
            screen: lightSwitchApplication.PageTwo,
            data: lightSwitchApplication.Person,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.PageTwo
        }
    };

    msls._addEntryPoints(lightSwitchApplication.PageTwo, {
        /// <field>
        /// Called when a new PageTwo screen is created.
        /// <br/>created(msls.application.PageTwo screen)
        /// </field>
        created: [lightSwitchApplication.PageTwo],
        /// <field>
        /// Called before changes on an active PageTwo screen are applied.
        /// <br/>beforeApplyChanges(msls.application.PageTwo screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.PageTwo],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("Group"); }],
        /// <field>
        /// Called to render the spacerContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        spacerContent_render: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("spacerContent"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("Group1"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("ScreenContent"); }],
        /// <field>
        /// Called after the People content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        People_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("People"); }],
        /// <field>
        /// Called after the PeopleTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PeopleTemplate_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("PeopleTemplate"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("LastName"); }],
        /// <field>
        /// Called after the EmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddress_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("EmailAddress"); }],
        /// <field>
        /// Called after the Birthdate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Birthdate_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("Birthdate"); }],
        /// <field>
        /// Called after the PersonType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonType_postRender: [$element, function () { return new lightSwitchApplication.PageTwo().findContentItem("PersonType"); }]
    });

    lightSwitchApplication.SubSection.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.SubSection
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.SubSection,
            data: lightSwitchApplication.SubSection,
            value: lightSwitchApplication.SubSection
        },
        spacerContent: {
            _$class: msls.ContentItem,
            _$name: "spacerContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.SubSection,
            data: lightSwitchApplication.SubSection,
            value: lightSwitchApplication.SubSection
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.SubSection,
            data: lightSwitchApplication.SubSection,
            value: lightSwitchApplication.SubSection
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.SubSection
        }
    };

    msls._addEntryPoints(lightSwitchApplication.SubSection, {
        /// <field>
        /// Called when a new SubSection screen is created.
        /// <br/>created(msls.application.SubSection screen)
        /// </field>
        created: [lightSwitchApplication.SubSection],
        /// <field>
        /// Called before changes on an active SubSection screen are applied.
        /// <br/>beforeApplyChanges(msls.application.SubSection screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.SubSection],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.SubSection().findContentItem("Group"); }],
        /// <field>
        /// Called to render the spacerContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        spacerContent_render: [$element, function () { return new lightSwitchApplication.SubSection().findContentItem("spacerContent"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.SubSection().findContentItem("ScreenContent"); }]
    });

}(msls.application));
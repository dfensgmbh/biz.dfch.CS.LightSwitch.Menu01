/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Main.spacerContent_render = function (element, contentItem) {
    if ($('#menu')[0].innerHTML == "") {
        // Create Menu
        $('#menu').multilevelpushmenu({
            menu: arrMenu,
            collapsed: true,
            containersToPush: [$("div[data-role*='page']"), $("div[data-role*='header']")],
            overlapWidth: 40,
            onItemClick: function () {
                // First argument is original event object
                var event = arguments[0],
                // Second argument is menu level object containing clicked item (<div> element)
                $menuLevelHolder = arguments[1],
                // Third argument is clicked item (<li> element)
                $item = arguments[2],
                // Fourth argument is instance settings/options object
                options = arguments[3];
                var itemName = $item.find('a:first').text();
                // Collapse menu
                $('#menu').multilevelpushmenu('collapse');

                // Open Page
                if (itemName == 'Main') {
                    myapp.showMain();
                }
                if (itemName == 'Sub Section') {
                    myapp.showSubSection();
                }
                if (itemName == 'Page Two') {
                    myapp.showPageTwo();
                }
            }
        });
    } else {
        // Menu already created
        // Update Menu containers to push
        updateContainersToPush();
    };
};
function updateContainersToPush() {
    // Array hold the ContainersToPush
    var arrContainersToPush = [];

    // Loop thru each LightSwitch page named 'page'
    $("div[data-role*='page']").each(function () {
        // Add the page to the array
        var LightSwitchPage = $(this)[0];
        arrContainersToPush.push(LightSwitchPage);
    });

    // Loop thru each LightSwitch header page named 'header'
    $("div[data-role*='header']").each(function () {
        // Add the page to the array
        var LightSwitchHeaderPage = $(this)[0];
        arrContainersToPush.push(LightSwitchHeaderPage);
    });

    // Set the containersToPush for the menu
    $('#menu').multilevelpushmenu('option', 'containersToPush', arrContainersToPush);
};
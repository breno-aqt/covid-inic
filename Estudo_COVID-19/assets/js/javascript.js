$(document).ready(function() {
    /*sidenav*/
    $('.sidenav').sidenav();

    /*bottom_nav*/
    $('ul.tabs').tabs();

    /* dropdown */
    $('.dropdown-trigger').dropdown({
        constrainWidth: false,
        belowOrigin: true
    });
    /* scrollspy */
    $('.scrollspy').scrollSpy();

    $('.fixed-action-btn').floatingActionButton();

});
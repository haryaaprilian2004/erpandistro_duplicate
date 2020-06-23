$(document).ready(function () {

    // SCROLL TO TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
            $('._navbar-fixed').slideDown();
        } else {
            $('#back-to-top').fadeOut();
            $('._navbar-fixed').slideUp();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    })

    // TROLL CLICK
    $('._troll ._size ._btn').click(function () {
        $(this).parent().find('._btn._active-product').attr('class', '_btn')
        $(this).toggleClass('_active-product');
    })
})
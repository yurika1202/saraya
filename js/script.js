/* global-nav_sp
--------------------------------- */
$(".global-nav__sp-btn").click(function (e) {
    $(this).toggleClass('js-open_btn');
    $(".open-contents_sp").toggleClass('js-open_nav');
});

$(".global-nav__link_sp").click(function (e) {
    $(".global-nav__sp-btn").removeClass('js-open_btn');
    $(".open-contents_sp").removeClass('js-open_nav');
});

/* under-header
--------------------------------- */
$(".under-header__nav-btn").click(function (e) {
    $(this).toggleClass('js-open_btn');
    $(".under-header__open-contents").toggleClass('js-open_nav');
});

$(".under-header__nav-link").click(function (e) {
    $(".under-header__nav-btn").removeClass('js-open_btn');
    $(".under-header__open-contents").removeClass('js-open_nav');
});
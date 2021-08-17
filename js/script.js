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
let header = $('.header'),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

// fixed header

checkScroll(scrollOffset)

$(window).on('scroll', function () {
    scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset)
});

function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
}




$('.menu__list-link').click(function (event) {
    event.preventDefault();

    $('.menu').removeClass('active');
    $('.header.fixed').removeClass('active');
    $('.menu__list').removeClass('active');
    $('.menu__list-item').removeClass('active');
    $('.header__burger').removeClass('active');
    $('.logo').removeClass('active');
    $('body').removeClass('no-scroll');

    let $this = $(this),
        blockId = $this.data('scroll');
    blockOffset = $(blockId).offset().top;
    $('html, body').animate({
        scrollTop: blockOffset
    }, 500)
})






$('.header__burger').click(function () {
    $(this).toggleClass('active');
    $('.menu__list-item').toggleClass('active');
    $('.menu').toggleClass('active');
    $('.logo').toggleClass('active');
    $('.menu__list').toggleClass('active');
    $('body').toggleClass('no-scroll');
    $('.header.fixed').toggleClass('active');
})
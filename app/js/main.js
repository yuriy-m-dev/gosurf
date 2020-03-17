$(function() {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg"></button>',
        asNavFor: '.slider-dots'
    });
    $('.slider-dots').slick({
        asNavFor: '.header__slider',
        arrows: false,
        slidesToShow: 4
    });
});
$(function() {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg"></button>',
        asNavFor: '.slider-dotshead'
    });
    $('.slider-dotshead').slick({
        asNavFor: '.header__slider',
        arrows: false,
        slidesToShow: 4
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg"></button>',
        asNavFor: '.slider-map'
    });
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });
});
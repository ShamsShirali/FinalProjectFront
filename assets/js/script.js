"use strict";

$(function () {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: `<div class="licons"><i class="fa-solid fa-arrow-left-long"></i></div>`,
        nextArrow: `<div class="ricons"><i class="fa-solid fa-arrow-right-long"></i></div>`
    });
})
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

//geri sayim
$(document).ready(function () {
    var countDownDate = new Date("Oct 10, 2023 00:23:59").getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (300 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      $(".days").html(days);
      $(".hours").html(hours);
      $(".minutes").html(minutes);
      $(".seconds").html(seconds);
      if (distance < 0) {
        clearInterval(x);
        $('.timer').addClass('d-none')
      }
    }, 1000);
  });
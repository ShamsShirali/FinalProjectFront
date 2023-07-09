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

  $('.three .generalcart').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<div data-aos="fade-right" class="licons"><i class="fa-solid fa-arrow-left-long"></i></div>`,
    nextArrow: `<div data-aos="fade-left" class="ricons"><i class="fa-solid fa-arrow-right-long"></i></div>`
  });

  $('.five .testimonials').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    prevArrow: `<div data-aos="fade-right" class="licons"><i class="fa-solid fa-arrow-left-long"></i></div>`,
    nextArrow: `<div data-aos="fade-left" class="ricons"><i class="fa-solid fa-arrow-right-long"></i></div>`
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

  let starList = document.querySelectorAll(".three .generalcart .card .firfloor .stars1 .st");

  starList.forEach(item => {
    item.addEventListener("click", function () {
      let num = item.getAttribute("id");
      for (let i = 0; i < starList.length; i++) {
        if (starList[i].getAttribute("id") <= num) {
          starList[i].classList.add("fa-solid")
          starList[i].classList.remove("fa-regular")
        }
        else {
          if (starList[i].classList.contains("fa-solid")) {
            starList[i].classList.remove("fa-solid")
            starList[i].classList.add("fa-regular")
          }
          else {
            starList[i].classList.add("fa-regular")
          }
        }
      }
    })
  });

  let starListfr = document.querySelectorAll(".three .generalcart .card .firfloor .stars1 .st");

  starListfr.forEach(item => {
    item.addEventListener("click", function () {
      let num = item.getAttribute("id");
      for (let i = 0; i < starListfr.length; i++) {
        if (starListfr[i].getAttribute("id") <= num) {
          starListfr[i].classList.add("fa-solid")
          starListfr[i].classList.remove("fa-regular")
        }
        else {
          if (starListfr[i].classList.contains("fa-solid")) {
            starListfr[i].classList.remove("fa-solid")
            starListfr[i].classList.add("fa-regular")
          }
          else {
            starListfr[i].classList.add("fa-regular")
          }
        }
      }
    })
  });

  let starListsc = document.querySelectorAll(".three .generalcart .card .firfloor .stars2 .st");

  starListsc.forEach(item => {
    item.addEventListener("click", function () {
      let num = item.getAttribute("id");
      for (let i = 0; i < starListsc.length; i++) {
        if (starListsc[i].getAttribute("id") <= num) {
          starListsc[i].classList.add("fa-solid")
          starListsc[i].classList.remove("fa-regular")
        }
        else {
          if (starListsc[i].classList.contains("fa-solid")) {
            starListsc[i].classList.remove("fa-solid")
            starListsc[i].classList.add("fa-regular")
          }
          else {
            starListsc[i].classList.add("fa-regular")
          }
        }
      }
    })
  });

  let starListth = document.querySelectorAll(".three .generalcart .card .firfloor .stars3 .st");

  starListth.forEach(item => {
    item.addEventListener("click", function () {
      let num = item.getAttribute("id");
      for (let i = 0; i < starListth.length; i++) {
        if (starListth[i].getAttribute("id") <= num) {
          starListth[i].classList.add("fa-solid")
          starListth[i].classList.remove("fa-regular")
        }
        else {
          if (starListth[i].classList.contains("fa-solid")) {
            starListth[i].classList.remove("fa-solid")
            starListth[i].classList.add("fa-regular")
          }
          else {
            starListth[i].classList.add("fa-regular")
          }
        }
      }
    })
  });

  let starListfo = document.querySelectorAll(".three .generalcart .card .firfloor .stars4 .st");

  starListfo.forEach(item => {
    item.addEventListener("click", function () {
      let num = item.getAttribute("id");
      for (let i = 0; i < starListfo.length; i++) {
        if (starListfo[i].getAttribute("id") <= num) {
          starListfo[i].classList.add("fa-solid")
          starListfo[i].classList.remove("fa-regular")
        }
        else {
          if (starListfo[i].classList.contains("fa-solid")) {
            starListfo[i].classList.remove("fa-solid")
            starListfo[i].classList.add("fa-regular")
          }
          else {
            starListfo[i].classList.add("fa-regular")
          }
        }
      }
    })
  });

  let starListfi = document.querySelectorAll(".three .generalcart .card .firfloor .stars5 .st");

  starListfi.forEach(item => {
    item.addEventListener("click", function () {
      let num = item.getAttribute("id");
      for (let i = 0; i < starListfi.length; i++) {
        if (starListfi[i].getAttribute("id") <= num) {
          starListfi[i].classList.add("fa-solid")
          starListfi[i].classList.remove("fa-regular")
        }
        else {
          if (starListfi[i].classList.contains("fa-solid")) {
            starListfi[i].classList.remove("fa-solid")
            starListfi[i].classList.add("fa-regular")
          }
          else {
            starListfi[i].classList.add("fa-regular")
          }
        }
      }
    })
  });

  let starListsi = document.querySelectorAll(".three .generalcart .card .firfloor .stars6 .st");

  starListsi.forEach(item => {
    item.addEventListener("click", function () {
      let num = item.getAttribute("id");
      for (let i = 0; i < starListsi.length; i++) {
        if (starListsi[i].getAttribute("id") <= num) {
          starListsi[i].classList.add("fa-solid")
          starListsi[i].classList.remove("fa-regular")
        }
        else {
          if (starListsi[i].classList.contains("fa-solid")) {
            starListsi[i].classList.remove("fa-solid")
            starListsi[i].classList.add("fa-regular")
          }
          else {
            starListsi[i].classList.add("fa-regular")
          }
        }
      }
    })
  });
})
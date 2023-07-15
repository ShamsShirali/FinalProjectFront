"use strict";

$('.two .filt .aparts li').each(function () {
    $(this).click(function () {
        if ($(this).attr("data-id") == 1) {
            $(this).next().css("color", "#666");
            $(this).next().next().css("color", "#666");
            $(this).next().next().next().css("color", "#666");
            $(this).next().next().next().next().css("color", "#666");
            $(this).css("color", "#bd9855");
        }
        if ($(this).attr("data-id") == 2) {
            $(this).prev().css("color", "#666");
            $(this).next().css("color", "#666");
            $(this).next().next().css("color", "#666");
            $(this).next().next().next().css("color", "#666");
            $(this).css("color", "#bd9855");
        }
        if ($(this).attr("data-id") == 3) {
            $(this).prev().css("color", "#666");
            $(this).prev().prev().css("color", "#666");
            $(this).next().css("color", "#666");
            $(this).next().next().css("color", "#666");
            $(this).css("color", "#bd9855");
        }
        if ($(this).attr("data-id") == 4) {
            $(this).prev().css("color", "#666");
            $(this).prev().prev().css("color", "#666");
            $(this).prev().prev().prev().css("color", "#666");
            $(this).next().css("color", "#666");
            $(this).css("color", "#bd9855");
        }
        if ($(this).attr("data-id") == 5) {
            $(this).prev().css("color", "#666");
            $(this).prev().prev().css("color", "#666");
            $(this).prev().prev().prev().css("color", "#666");
            $(this).prev().prev().prev().prev().css("color", "#666");
            $(this).css("color", "#bd9855");
        }
    })
})

let apart = document.querySelectorAll('.but');
let change = document.querySelectorAll('.all');

apart.forEach(index => {
    index.addEventListener('click', () => {
        document.querySelector('.active').classList.add('d-none');
        document.querySelector('.active').classList.remove('active');

        change.forEach(element => {
            if (element.getAttribute('data-id') == index.getAttribute('data-id')) {
                element.classList.remove('d-none');
                element.classList.add('active');
            }
        })
    })
});

$('.two .filt .title').click(function () {
    $(".two .filt .title .select").addClass(".show");
    $(".two .filt .aparts").removeClass(".show");
})
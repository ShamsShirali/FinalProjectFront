"use strict";

$('.two .picture .otherpic img').click(function () {
    let imgPath = $(this).attr('src');
    $('.here img').attr('src',imgPath).style.removeProperty('opacity');
    $(this).style.opacity=0.3;
});

let datas = 1;
document.querySelector('#counting').innerText = datas;

function increment() {
  if (datas > 1) {
    datas = datas - 1;
    document.querySelector('#counting').innerText = datas;
  }
}

function decrement() {
  datas = datas + 1;
  document.querySelector('#counting').innerText = datas;
}
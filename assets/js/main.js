$(function () {
  'use strict';

  $(window).on('load', function (event) {
    $('.preloader').fadeOut(1000);
  });

  //===== WOW

  new WOW().init();

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====
});
document.addEventListener('mousemove', function (e) {
  var body = document.querySelector('body');
  var heart = document.createElement('span');
  var x = e.offsetX;
  var y = e.offsetY;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  var size = Math.random() * 100;
  heart.style.width = 10 + size + 'px';
  heart.style.height = 10 + size + 'px';
  body.appendChild(heart);
  setTimeout(function () {
    heart, remove();
  }, 2);
});

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.arrowleft',
    nextArrow: '.arrowright',
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: false,
    fade: true,
  });

});
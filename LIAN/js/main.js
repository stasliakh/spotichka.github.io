// Slider

$(function () {
  $(".main__slider").slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    dotsClass: "slick-dot",
    autoplay: 3000,
    fade: false,
    dots: true,
    adaptiveHeight: true,
  });
});

// Burger

$(document).ready(function () {
  $(".show_case__menu-burger").click(function (event) {
    $(".show_case__menu-burger,.menu_wrapper").toggleClass("active");
  });
});

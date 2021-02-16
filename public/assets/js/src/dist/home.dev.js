"use strict";

var collapse = document.querySelector(".collaps--sign");
var collapseMenu = document.querySelector(".collaps--menu");
collapse.addEventListener("click", function () {
  console.log(collapseMenu.classList);
  collapseMenu.classList.toggle("appered");
});

window.onscroll = function navObacity(event) {
  var element = document.documentElement.scrollTop;

  document.querySelector(".header--main").onmouseover = function () {
    document.querySelector(".header--main").style.opacity = "1";
  };

  document.querySelector(".header--main").onmouseout = function () {
    document.querySelector(".header--main").style.opacity = "0.7";
  };

  if (element > 100) {
    document.querySelector(".header--main").style.opacity = "0.7";
  } else {
    document.querySelector(".header--main").style.opacity = "1";
  }
};

$(".card--slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
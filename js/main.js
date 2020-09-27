"use strict";


const generalHeader = document.querySelector(".ba-general-header");
const header = document.querySelector(".ba-header");
const sectionOne = document.querySelector(".ba-simple");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
		generalHeader.classList.add("dark-backgrould"),
		header.classList.add("add-padding");

    } else {
		generalHeader.classList.remove("dark-backgrould"),
		header.classList.remove("add-padding");
    }
  });
},
sectionOneOptions);
	
sectionOneObserver.observe(sectionOne);

const bestSlider = $('.ba-sliders');
bestSlider.slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	appendDots: '.ba-slick-dots',
	autoplay: true,
	autoplaySpeed: 5000,
	arrows : false,
	cssEase: 'linear'
});

const buildSlider = $('.ba-slider');
buildSlider.slick({
	dots: true,
	infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '.ba-slider-arrow--right',
  prevArrow: '.ba-slider-arrow--left',
  appendDots: '.ba-slider-dots'
});

let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {
            lat: -34.397,
            lng: 150.644,
          },
          zoom: 8,
        });
      }
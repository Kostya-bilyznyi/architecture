"use strict";


const header = document.querySelector(".ba-general-header");
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
      header.classList.add("dark-backgrould");
    } else {
      header.classList.remove("dark-backgrould");
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
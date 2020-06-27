'use strict';
const bestSlider = $('.ba-sliders');
bestSlider.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: '.ba-sliders__next',
	prevArrow: '.ba-sliders__prev',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,

			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
		  }
		}
	]
});

// Tabs


const links = $('.ba-farcry-tabs__links');

	links.on('click', function () {

		$('.ba-farcry-tabs__links.active').removeClass('active');
		$(this).addClass('active');
		$(this).closest('div.ba-farcry-tabs').find('div.ba-farcry-tabs__content').removeClass('active').eq($(this).index()).addClass('active');

	})
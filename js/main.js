(function ($) {
"use strict";


	/*------------- preloader js --------------*/
	function loader() {
		$(window).on('load', function () {
			$("#loading").fadeOut(500);
		});
	}
	loader();

	// Tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// countdown
	$('[data-countdown]').each(function () {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="time-count">%D <span>days</span></div><div class="time-count">%H <span>hour</span></div><div class="time-count">%M <span>minute</span></div><div class="time-count">%S <span>Second</span></div>'));
		});
	});
	// sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 2) {
			$("#header-sticky").removeClass("sticky-menu");
		} else {
			$("#header-sticky").addClass("sticky-menu");
		}
	});


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#header-sticky").removeClass("sticky");
	} else {
		$("#header-sticky").addClass("sticky");
	}
});

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.widget ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

	if (is_chrome) {
		var attributes = ['home', 'whatido', 'myworks', 'about', 'contact'];

		$.each(attributes, function( index, value ) {
			$('a[href="#' + value + '"]').click(function() {
				$('html, body').animate({
					scrollTop: $('#' + value).offset().top
				}, 1000);
			});
		});
	}


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 1000,
		dots: true,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

	$('.example-active').slick({
		dots: false,
		infinite: false,
		speed: 300,
		nextArrow : '<button type="button" class="slick-next"><i class="fas fa-angle-left"></i></button>',
		prevArrow : '<button type="button" class="slick-prev"><i class="fas fa-angle-right"></i></button>',
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});



/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

	/*----------------------------------------
              Wow.js Plugin
          ----------------------------------------*/

	new WOW().init();


})(jQuery);
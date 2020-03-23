jQuery(document).ready(function () {

	// Код для параллакса фона
	$objWindow = $(window);
	$('section[data-type="background"]').each(function () {
		var $bgObj = $(this);
		$(window).scroll(function () {
			var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$bgObj.css({
				backgroundPosition: coords
			});
		});
	});

	$("#carousel2").owlCarousel({
		items: 3,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 3
			}
		}
	});

	const slider1 = $('#carousel1');
	slider1.owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1000,
		autoplay: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.slider__customNextBtn').click(function () {
		slider1.trigger('next.owl.carousel');
	})

	$('.slider__customPrevBtn').click(function () {
		slider1.trigger('prev.owl.carousel');
	})

}); //конец ready
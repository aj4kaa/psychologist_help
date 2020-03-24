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
		dotsEach: true,
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
		dotsEach: true,
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
	});

	$('.slider__customPrevBtn').click(function () {
		slider1.trigger('prev.owl.carousel');
	});

	// Form

	// let message = {
	// 	loading: 'Загрузка',
	// 	success: 'Спасибо! Скоро мы с вами свяжемся!',
	// 	failure: 'Что то пошло не так...'
	// };

	// let form = document.queryCommandValue('.main-form'),
	// 	input = form.getElementByTagName('inpt'),
	// 	statusMessage = document.createElement('div');

	// 	statusMessage.classList.add('status');

	// form.addEventListener('submit', function(event) {
	// 	event.preventDefault();
	// });

}); //конец ready
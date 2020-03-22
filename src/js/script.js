jQuery(document).ready(function(){

	// Код для параллакса фона
	$objWindow = $(window);
	$('section[data-type="background"]').each(function(){
		var $bgObj = $(this);
		$(window).scroll(function() {
			var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
			var coords = '50% '+ yPos + 'px';
			$bgObj.css({ backgroundPosition: coords });
		});
	});
}); //конец ready
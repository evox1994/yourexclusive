$(document).ready(function(){

	function scrollHeader(){
		var st = $(window).scrollTop();
		if ( $(window).width() > 767 ) {
			if ( st > 136 ) {
				$('.header').addClass('active');
			} else {
				$('.header').removeClass('active');
			}
		} else {
			$('.header').removeClass('active');
		}
	}
	scrollHeader();

	$(window).scroll(function(){
		scrollHeader();
	});

	$('.scroll-btn').click(function(){
		var block = $(this).attr('href');
		var des;
		if ( $(window).width() > 767 ) {
			des = $(block).offset().top - 43;
		} else {
			des = $(block).offset().top - 163;
		}

		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('active');
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('active');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('active');
		}
	});

	$('.close-btn').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('active');
	});

});
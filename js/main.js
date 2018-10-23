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

	$('.fancybox').fancybox();

	$('.select-area').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$('.select-open').removeClass('active');
		} else {
			$(this).addClass('active');
			$('.select-open').addClass('active');
		}
	});

	$('.select-open a').click(function(){
		var val = $(this).attr('href');
		$('.select-open').removeClass('active');
		$('.select-area').removeClass('active');
		$('.select-area span').removeClass('active');
		$(val).addClass('active');
		return false;
	});

	$('body').on('click',function(e){
		var container = $('.header-select');
		if (container.has(e.target).length === 0) {
			$('.select-open').removeClass('active');
			$('.select-area').removeClass('active');
		}
	});

	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$('body').on('click','.photo-btn',function(){
		var el = $(this).attr('href');
		$(el).click();
		return false;
	});
	$('body').on('change','.photo-wrap input[type="file"]',function(){
		files = this.files;
		$(this).closest('.photo-wrap').find('.photo-btn').text(files[0].name);
	});
	$('.popup .add-btn').click(function(){
		var col = Number($(this).attr('data-col'));
		col++;
		$(this).parent().find('.photos').append('<div class="photo-wrap"><a href="#file-input-'+col+'" class="photo-btn">Прикрепить фотографию</a><input type="file" class="hide-input" id="file-input-'+col+'"></div>');
		$(this).attr('data-col',col);
	});

	$('.popup-radio ul li label').click(function(){
		if ( !$(this).hasClass('active') ) {
			$('.popup-radio ul li label').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).closest('form').find('.button-text .radio-btn').hasClass('active') ) {
			$(this).closest('form').find('input.required').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
			$(this).closest('form').find('textarea.required').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).closest('form').find('.button-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

});
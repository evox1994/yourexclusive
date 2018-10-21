$(document).ready(function(){

	$('.b-1-slider').slick();
	$('.b-2-slider').slick({
		fade: true,
		speed: 500,
		infinite: true,
		cssEase: 'linear',
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.b-3-slider').slick();
	$('.b-7-slider').slick({
		slidesToShow: 5,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	function filterCat() {
		var el = $('.filter-1 li.active').data('filter');
		$('.b-3-list').removeClass('active');
		$('.b-3-slider').removeClass('active');
		$('.catalog-list li').removeClass('active');
		$(el).addClass('active');
		$('.b-3-slider').slick('reinit');
	}
	filterCat();

	$('.filter-1 li').click(function(){
		if ( !$(this).hasClass('active') ){
			$('.filter-1 li').removeClass('active');
			$(this).addClass('active');
			filterCat();
		}
	});

	function filterWork() {
		var el = $('.filter-2 li.active').data('filter');
		$('.b-5-list li').removeClass('active');
		setTimeout(function(){
			$('.b-5-list li').css('display','none');
			if ( $(window).width() > 768 ) {
				$(el).css('display','inline-block');
			} else {
				$(el).css('display','block');
			}
			setTimeout(function(){$(el).addClass('active');},100);
		},300);
	}
	filterWork();

	$('.filter-2 li').click(function(){
		if ( !$(this).hasClass('active') ){
			$('.filter-2 li').removeClass('active');
			$(this).addClass('active');
			filterWork();
		}
	});

	$('.b-5 .filter li').click(function(){
		if ( $(this).hasClass('active') ) {
			$('.b-3 .filter li').removeClass('active');
		} else {
			$('.b-3 .filter li').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.reviews-more').click(function(){
		if ( $(this).closest('.reviews-text').find('p').hasClass('active') ){
			$(this).closest('.reviews-text').find('p').removeClass('active');
			$(this).text('Читать полность');
		} else {
			$(this).closest('.reviews-text').find('p').addClass('active');
			$(this).text('Скрыть');
		}
		return false;
	});

	setInterval(function(){
		var next = $('.slick-active .anim-img').data('next');
		var el = $(next).data('prev');
		$(el).removeClass('anim-img');
		setTimeout(function(){
			$(el).addClass('move');
			setTimeout(function(){
				$(next).addClass('active');
				setTimeout(function(){
					$(next).addClass('anim-img');
				},500);
			},500);
		},10);
		setTimeout(function(){
			$(el).removeClass('active');
			$(el).removeClass('move');
		},510);
	},4000);

	setInterval(function(){
		var next = $('.b-4-wrap .anim-img').data('next');
		var el = $(next).data('prev');
		$(el).removeClass('anim-img');
		setTimeout(function(){
			$(el).addClass('move');
			setTimeout(function(){
				$(next).addClass('active');
				setTimeout(function(){
					$(next).addClass('anim-img');
				},500);
			},500);
		},10);
		setTimeout(function(){
			$(el).removeClass('active');
			$(el).removeClass('move');
		},510);
	},4000);

});
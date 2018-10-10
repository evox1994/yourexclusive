$(document).ready(function(){

	$('.b-1-slider').slick();
	$('.b-2-slider').slick();
	$('.b-3-slider').slick();
	$('.b-7-slider').slick({
		slidesToShow: 5,
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
		$(el).addClass('active');
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

});
$(document).ready(function(){
	var orderEl = {}; //price,imgsrc,col,prodId
	var orderArr = JSON.parse(localStorage.getItem("yourexclusive-order"));
	var summa = Number(localStorage.getItem("yourexclusive-summa"));
	var order = [];

	if ( orderArr ) {
		for (var i = 0; i < orderArr.length; i++) {
			order.push(orderArr[i]);
		}
		$('.header-basket span b').text(summa);
	}

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
			$(el).css('display','inline-block');
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

	$('.catalog-image a').click(function(){
		var el = $(this).attr('href');
		var img = $(this).closest('.catalog-wrap').find('.catalog-image img').attr('src');
		var price = $(this).closest('.catalog-wrap').find('.catalog-price span').text();
		var prod_id = '#' + $(this).closest('li').attr('id');

		$('.product-image a').attr('href',img);
		$('.product-image img').attr('src',img);
		$('.product-example').attr('href',img);
		$('.product-price span').text(price);
		$('.product-btn').attr('href',prod_id);
		$(el).click();
		return false;
	});

	$('.catalog-buttons .more-btn').click(function(){
		var el = $(this).attr('href');
		var img = $(this).closest('.catalog-wrap').find('.catalog-image img').attr('src');
		var price = $(this).closest('.catalog-wrap').find('.catalog-price span').text();
		var prod_id = '#' + $(this).closest('li').attr('id');

		$('.product-image a').attr('href',img);
		$('.product-image img').attr('src',img);
		$('.product-example').attr('href',img);
		$('.product-price span').text(price);
		$('.product-btn').attr('href',prod_id);
		$(el).click();
		return false;
	});

	function Zak(el) {
		var nal = false;
		var prod = $(el).attr('href');
		var prod_id = $(prod).attr('id');
		var clone = {};
		var numt = 0;
		var coli = 0;
		var qwe;

		orderEl.imgsrc = $(prod).find('.catalog-image img').attr('src');
		orderEl.price = Number($(prod).find('.catalog-price span').text());
		orderEl.prodId = prod_id;
		if ( order.length ) {
			for (var i = 0; i < order.length; i++) {
				if ( order[i].prodId == prod_id ) {
					nal = true;
					numt = i;
					coli = Number(order[i].col);
					break;
				} else {
					numt = order.length;
				}
			}
			if (nal) {
				orderEl.col = coli + 1;
			} else {
				orderEl.col = 1;
			}
		} else {
			orderEl.col = 1;
		}
		for (var key in orderEl) {
			clone[key] = orderEl[key];
		}
		order[numt] = clone;
		summa = summa + Number(order[numt].price);
		$('.header-basket span b').text(summa);
		qwe = JSON.stringify(order);
		localStorage.setItem("yourexclusive-order",qwe);
		localStorage.setItem("yourexclusive-summa",summa);
	}

	$('.choose-btn').click(function(){
		Zak(this);
		return false;
	});

	$('.product-btn').click(function(){
		Zak(this);
		return false;
	});

});
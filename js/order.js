$(document).ready(function(){
	var orderEl = {}; //price,imgsrc,col,prodId
	var orderArr = JSON.parse(localStorage.getItem("yourexclusive-order"));
	var summa = Number(localStorage.getItem("yourexclusive-summa"));
	var order = [];

	if ( orderArr ) {
		for (var i = 0; i < orderArr.length; i++) {
			order.push(orderArr[i]);

			$('.order-list').append('<li id="'+order[i].prodId+'"><div class="li-left"><div class="li-image back-1"><img src="'+order[i].imgsrc+'"></div></div><div class="li-right"><div class="li-price"><span>'+order[i].price+'</span></div><div class="li-count"><div class="count-btn less"><p>-</p></div><span>'+order[i].col+'</span><div class="count-btn more"><p>+</p></div></div><div class="li-del"></div></div></li>');
		}
		$('.order-sum span').text(summa);
	}

	$('body').on('click','.more',function(){
		var prod_id = $(this).closest('li').attr('id');
		var coli, qwe;
		var numt = 0;
		var clone = {};

		for (var i = 0; i < order.length; i++) {
			if ( order[i].prodId == prod_id ) {
				numt = i;
				coli = Number(order[i].col);
				orderEl.col = coli + 1;
				break;
			}
		}
		orderEl.price = order[numt].price;
		orderEl.imgsrc = order[numt].imgsrc;
		orderEl.prodId = order[numt].prodId;
		for (var key in orderEl) {
			clone[key] = orderEl[key];
		}
		order[numt] = clone;
		summa = summa + Number(order[numt].price);
		$('.order-sum span').text(summa);
		$(this).closest('.li-count').find('span').text(order[numt].col);
		qwe = JSON.stringify(order);
		localStorage.setItem("yourexclusive-order",qwe);
		localStorage.setItem("yourexclusive-summa",summa);
	});

	$('body').on('click','.less',function(){
		var prod_id = $(this).closest('li').attr('id');
		var prod = '#'+prod_id;
		var coli, qwe;
		var numt = 0;
		var clone = {};

		for (var i = 0; i < order.length; i++) {
			if ( order[i].prodId == prod_id ) {
				numt = i;
				coli = Number(order[i].col);
				break;
			}
		}
		if ( coli > 1 ) {
			orderEl.col = coli - 1;
			orderEl.price = order[numt].price;
			orderEl.imgsrc = order[numt].imgsrc;
			orderEl.prodId = order[numt].prodId;
			for (var key in orderEl) {
				clone[key] = orderEl[key];
			}
			order[numt] = clone;
			summa = summa - Number(order[numt].price);
			$(this).closest('.li-count').find('span').text(order[numt].col);
		} else {
			summa = summa - order[numt].price;
			$(prod).remove();
			order.splice(numt,1);
		}
		$('.order-sum span').text(summa);
		qwe = JSON.stringify(order);
		localStorage.setItem("yourexclusive-order",qwe);
		localStorage.setItem("yourexclusive-summa",summa);
	});

	$('body').on('click','.li-del',function(){
		var prod_id = $(this).closest('li').attr('id');
		var prod = '#'+prod_id;
		var qwe;
		var numt = 0;

		for (var i = 0; i < order.length; i++) {
			if ( order[i].prodId == prod_id ) {
				numt = i;
				break;
			}
		}
		summa = summa - (order[numt].price * order[numt].col);
		$(prod).remove();
		order.splice(numt,1);
		$('.order-sum span').text(summa);
		qwe = JSON.stringify(order);
		localStorage.setItem("yourexclusive-order",qwe);
		localStorage.setItem("yourexclusive-summa",summa);
	});

	$('.b-1 .add-btn').click(function(){
		var col = Number($(this).attr('data-col'));
		col++;
		$(this).parent().find('.photos').append('<div class="photo-wrap"><a href="#photo-input-'+col+'" class="photo-btn">Прикрепить фотографию</a><input type="file" class="hide-input" id="photo-input-'+col+'"></div>');
		$(this).attr('data-col',col);
	});

	$('.radio-list label').click(function(){
		if ( !$(this).hasClass('active') ) {
			$('.radio-list label').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.chosen-select').chosen();

});
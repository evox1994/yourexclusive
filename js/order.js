$(document).ready(function(){

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
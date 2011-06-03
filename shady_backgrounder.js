$(window).load(function(){
	shady_backgrounder.init();
	shady_backgrounder.resize_body();
	shady_backgrounder.resize_background_images();
})

$(window).resize(function(){
	shady_backgrounder.resize_body();
	shady_backgrounder.resize_background_images();
})

var shady_backgrounder = {
	init : function(){
		var $body = $('body'),
			$outer_wrapper = $('<div id="outer_wrapper" />').css('position', 'relative').css('top', 0).css('bottom', 0),
			$bg_top_img = $('<img src="js/shady_imgs/bg_top.png" />').css('position',  'absolute').css('top', 0).addClass('background_image'),
			$bg_bot_img = $('<img src="js/shady_imgs/bg_bot.png" />').css('position',  'absolute').css('bottom', 0).addClass('background_image');
		$body.wrapInner( $outer_wrapper );
		$('#outer_wrapper')
			.append($bg_top_img)
			.append($bg_bot_img);
		$('body, html').css('height', '100%').css('min-height', '700px');
	},
	resize_body : function(){
		var body_height = $('body').height(),
			window_height = $('html').height();
		if ( body_height < window_height) {
			$('body').css("height", window_height);
		}
		$('#outer_wrapper').css("height", shady_backgrounder.body_height() );
	},
	resize_background_images : function(){
		$('.background_image').css('width', shady_backgrounder.body_width() );
	},
	body_height : function(){
		return $('body').height();
	},
	body_width : function(){
		return $('body').width();
	}
}
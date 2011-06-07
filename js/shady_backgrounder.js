$(window).load(function(){
	shady_backgrounder.init();
	shady_backgrounder.resize_body();
	shady_backgrounder.resize_background_images();
})

if (Modernizr.backgroundsize != true) {
	$(window).resize(function(){
		shady_backgrounder.resize_body();
		shady_backgrounder.resize_background_images();
	})
}

var shady_backgrounder = {
	init : function(){
		// use two background images for the most modern browsers
		if (Modernizr.multiplebgs == true && Modernizr.backgroundsize == true) {
			$('html').css({
				'background-image': 'url(js/shady_imgs/bg_top.png), url(js/shady_imgs/bg_bot.png)',
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
				'background-attachment': 'fixed',
				'background-position': 'bottom, top'
			})	
		}
		// user a single stretched browsers for those that don't support multiples backgrounds
		else if (Modernizr.backgroundsize == true) {
			$('html').css({
				'background-image': 'url(js/shady_imgs/bg_full.png)',
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
				'background-attachment': 'fixed'
			});
		}
		// special processing for browsers that don't support either of the two above
		else {
			var $body = $('body'),
				$outer_wrapper = $('<div id="outer_wrapper" />'),
				$bg_top_img = $('<img src="js/shady_imgs/bg_top.png" />'),
				$bg_bot_img = $('<img src="js/shady_imgs/bg_bot.png" />');

			$body.wrapInner( $outer_wrapper );
			
			// styles				
			$outer_wrapper.css({
				'position': 'relative',
				'top': 0,
				'bottom': 0
			})
			$bg_top_img
				.addClass('background_image')
				.css({
					'position':  'absolute',
					'top': 0,
				})
			$bg_bot_img
				.addClass('background_image')
				.css({
					'position':  'absolute',
					'bottom': 0
				})
				
			$('#outer_wrapper')
				.append($bg_top_img)
				.append($bg_bot_img);
			$('body, html').css('height', '100%').css('min-height', '700px');			
		}
	},
	resize_body : function(){
		var body_height = $('body').height(),
			window_height = $('html').height();
		if ( body_height < window_height) {
			$('body').css({
				"height": window_height
			});
		}
		$('#outer_wrapper').css({
			"height": shady_backgrounder.body_height()
		});
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
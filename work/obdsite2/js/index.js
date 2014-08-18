$(function(){
	var fullpage = $('#fullpage');
	fullpage.fullpage({
		verticalCentered: false,
		easing: 'easeOutQuint',
		css3: true,
		navigation: true,
		afterRender: function(){
			setTimeout(function(){
				$('.banner_logo').addClass('animate')
			},100);
			setTimeout(function(){
				$('.banner_t1').addClass('animate')
			},300);
			setTimeout(function(){
				$('.banner_t2').addClass('animate')
			},500);
			setTimeout(function(){
				$('.banner_t3').addClass('animate')
			},700);
			setTimeout(function(){
				$('.banner_bg_black').addClass('animate')
			},900);
			setTimeout(function(){
				$('.banner_bg').addClass('animate')
			},900);
		}
	})
	// fullpage.on('afterRender',function(){
	// 	alert('ok')
	// })
})
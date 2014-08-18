$(function(){
	var fullpage = $('#fullpage');
	fullpage.fullpage({
		verticalCentered: false,
		easing: 'easeOutQuint',
		css3: true,
		navigation: true,
		afterRender: function(){
			animate01();
		},
		onLeave: function(i,n){
			switch(n){
				case 2:
					animate02();
					break;
				case 3:
					animate03();
					break;
				case 4:
					
					break;
				case 5:
					
					break;
			}
		}
	})

	function animate01(){
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
			$('.banner_bg').addClass('animate')
		},900);
		setTimeout(function(){
			$('.banner_bg_black').addClass('animate')
		},1900);
	}
	function animate02(){
		setTimeout(function(){
			$('.index_b1_t .index_t1').addClass('animate')
		},100);
		setTimeout(function(){
			$('.index_b1_t .index_t2').addClass('animate')
		},300);
		setTimeout(function(){
			$('.index_b1_btn .index_dlAndroid').addClass('animate')
		},500);
		setTimeout(function(){
			$('.index_b1_btn .index_dlIphone').addClass('animate')
		},700);
		setTimeout(function(){
			$('.index_b1_bottom').addClass('animate')
		},900);
	}
	function animate03(){
		var oI = $('.index_b2_bottom i')
		setTimeout(function(){
			$('.index_b2_top .index_t1').addClass('animate')
		},100);
		setTimeout(function(){
			$('.index_b2_top .index_t2').addClass('animate')
		},300);
		setTimeout(function(){
			oI.eq(0).addClass('animate')
		},500);
		setTimeout(function(){
			oI.eq(1).addClass('animate')
		},650);
		setTimeout(function(){
			oI.eq(2).addClass('animate')
		},800);
		setTimeout(function(){
			oI.eq(5).addClass('animate')
		},950);
		setTimeout(function(){
			oI.eq(4).addClass('animate')
		},1100);
		setTimeout(function(){
			oI.eq(3).addClass('animate')
		},1250);
		setTimeout(function(){
			oI.eq(6).addClass('animate')
		},1400);
		setTimeout(function(){
			oI.eq(7).addClass('animate')
		},1550);
		setTimeout(function(){
			oI.eq(8).addClass('animate')
		},1700);
		setTimeout(function(){
			$('.index_b2_img').addClass('animate')
		},2000);
	}
})
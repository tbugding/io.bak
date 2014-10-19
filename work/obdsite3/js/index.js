var isFullPage = false;
var loadedPC = false;
var loadedMobile = false;
$(function(){
	var slidable = $('.slidable');
	function buildFullPage(){
		$('#fullpage').fullpage({
			verticalCentered: false,
			easing: 'easeOutQuint',
			css3: true,
			navigation: true,
			afterRender: function(){
				animate01();
				tabsB8();
			},
			onLeave: function(i,n,d){
				var iSection = $('.section').length;
				switch(n){
					case 2:
						animate02();
						break;
					case 3:
						animate03();
						break;
				}
				if(n!==iSection){
					$('#footer').removeClass('footer_pcShow');
				}

				console.log(n)
				if(n!==1){
					$('#header').addClass('header_pcHide')
				}


			},
			afterLoad: function(a,i){
				var iSection = $('.section').length;
				if(i==iSection){
					$('#footer').addClass('footer_pcShow')
				}

				if(i==1){
					$('#header').removeClass('header_pcHide');
				}
			},
			afterResize: function(){
				tabsB8();
			}
		});
	}
	

	

	$(window).on('resize',function(){
		loadIframe(winResize);
	});
	function winResize(){

		if(client.width<=720){
			console.log('mobile')
			$('#header').removeClass('header_pc header_pcHide');
			$('#fullpage').removeClass('fullpage_pc').hide();
			$('#mobile').removeClass('fullpage_pc').show();
			$('#footer').removeClass('footer_pc footer_pcShow');
			if(isFullPage){
				$.fn.fullpage.destroy('all');
				isFullPage = false;
			}
		}else{
			console.log('pc')
			$('#header').addClass('header_pc');
			$('#fullpage').addClass('fullpage_pc').show();
			$('#mobile').removeClass('fullpage_pc').hide();
			$('#footer').addClass('footer_pc');
			if(!isFullPage){
				buildFullPage();
				isFullPage = true;
			}
			// $.fn.fullpage.reBuild();
		}
	}

	loadIframe(winResize);
	function loadIframe(bc){
		if(client.width<=720 && !loadedMobile){
			$('<iframe id="iframeMobile" src="index_mobile.html" style="display:none"></iframe>').appendTo('body').on('load',function(e){
				$('#iframeMobile').contents().find('#mobile').prependTo('#pageWrap');
				loadedMobile = true;
				bc();
			});
		}else if(client.width>720 && !loadedPC){
			$('<iframe id="iframePC" src="index_pc.html" style="display:none"></iframe>').appendTo('body').on('load',function(e){
				$('#iframePC').contents().find('#fullpage').prependTo('#pageWrap');
				// buildFullPage();
				loadedPC = true;
				bc();
			});
		}else{
			bc();
		}
	}
	

	$('body').on('click','#activityClose',function(){
		$('#activityBanner').hide();
	})

	$('body').on('click','.mobile_userBoxBtns li',function(){
		var index = $(this).index();
		$('.mobile_userBoxContent').hide();
		$('.mobile_userBoxContent').eq(index).show();
	})




	function tabsB8(){
		var b8Li = $('.index_b8_list li');
		function b8Tab(){
			var i = b8Li.index($(this));
			b8Li.removeClass('current');
			b8Li.eq(i).addClass('current')
		}
		if(client.width<=960){
			b8Li.on('click',b8Tab)
			
		}else{
			b8Li.off('click',b8Tab);
		}
	}

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
		},600);
		setTimeout(function(){
			oI.eq(2).addClass('animate')
		},700);
		setTimeout(function(){
			oI.eq(5).addClass('animate')
		},800);
		setTimeout(function(){
			oI.eq(4).addClass('animate')
		},900);
		setTimeout(function(){
			oI.eq(3).addClass('animate')
		},1000);
		setTimeout(function(){
			oI.eq(6).addClass('animate')
		},1100);
		setTimeout(function(){
			oI.eq(7).addClass('animate')
		},1200);
		setTimeout(function(){
			oI.eq(8).addClass('animate')
		},1300);
		setTimeout(function(){
			$('.index_b2_img').addClass('animate')
		},1500);
	}
})
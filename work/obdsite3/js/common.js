
//获取屏幕宽高和用户代理
var client = {
	width : 0,
	height : 0,
	UA : ''
};
function getClient(){
	client = {};
	client.width = document.documentElement.clientWidth;
	client.height = document.documentElement.clientHeight;
	client.UA = window.navigator.userAgent;
	document.title = client.width +' - '+ client.height;
	if(client.width<=720){
		document.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			$('#header').css('top',scrollTop+'px');
		}
	}
}
$(window).on('resize',getClient);



$(function(){
	getClient();
	var nav = $('.nav');
	var navBtn = $('.nav_btn');
	var header = $('#header');
	var pageWrap = $('#pageWrap');
	var navBtnMask = $('#nav_btnMask');
	//原生click事件，JQ事件发现一次点击触发多次事件bug
	navBtn.get(0).onclick=function(){
		header.toggleClass('show');
		pageWrap.toggleClass('show');
	};
	$('body').on('click',function(e){
		if( header.hasClass('show') && e.target !== nav[0] && e.target !== navBtnMask[0]){
			header.removeClass('show');
			pageWrap.removeClass('show');
			// console.log('ok')
		}
		// console.log(e.target)
	});
	
})

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
	// console.log('width: ' + client.width + '\n' + 'height: ' + client.height + '\n' +'UA: ' + client.UA);
	document.title = client.width +' - '+ client.height;
}
$(window).on('resize',getClient);



$(function(){
	getClient();
	var nav = $('.nav');
	//原生click事件，JQ事件发现一次点击触发多次事件bug
	$('.nav_btn').get(0).onclick=function(){
		nav.toggleClass('show');
	}
})
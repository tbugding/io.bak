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

	var nav = $('.nav');
	// $('.nav_btn').on('click',function(){
	// 	alert('0')
	// 	nav.toggleClass('show')
	// })
	$('.nav_btn').get(0).onclick=function(){
		
		nav.toggleClass('show')
	}
}
$(window).on('resize',getClient);



$(function(){
	getClient();
})
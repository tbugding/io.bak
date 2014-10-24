var post = {
	register : 'http://192.168.8.69:7090/user/register',
	login : 'http://192.168.8.69:7090/user/auth',
	aCode : 'http://192.168.8.69:7090/user/activate/:id/127.0.0.1/activate_code',
	activate : 'http://192.168.8.69:7090/user/activate/activate_code',
	password : 'http://192.168.8.69:7090/user/password',
	retrievePW : 'http://192.168.8.69:7090/user/password/0/:username/127.0.0.1',

	adList : 'http://10.10.24.19:7081/adwap/rest/services/getAdInfo',
	adDown : 'http://10.10.24.19:7081/adwap/rest/services/getDoneAd',
	balance : 'http://10.10.24.19:7081/adwap/rest/services/getUserBalance',
	saveAliPay : 'http://10.10.24.19:7081/adwap/rest/services/saveAliPayInfo',
	// getAliPay : 'http://10.10.24.19:7081/adwap/rest/services/getAliPayInfo',
	withDraw : 'http://10.10.24.19:7081/adwap/rest/services/commitGetMoney',
	adCallback : 'http://10.10.24.19:7081/adwap/rest/services/adTaskCallback',
	countClick : 'http://10.10.24.19:7081/adwap/rest/services/statisUserClicks',

};

/*url中的search*/
function Search(){
	var search = window.location.search.substring(1);
	var arr = search.split('&');
	for(var i=0; i<arr.length; i++){
		var arr2 = arr[i].split('=');
		this[arr2[0]] = arr2[1];
	}
}
var oSearch = new Search();

/*取n到m随机数*/
function rdn(n,m){return parseInt(Math.random()*(m-n+1)+n)}
 
/*打开弹出层*/
function dialog(opt){
	if(typeof opt == 'string'){
		$('<div class="dialogMask"></div>').appendTo('body');
		$('#'+opt).show();
	}else{
		var win = $('<div class="dialogMask"></div><div class="dialog"><div class="diaContent">'+opt.msg+'</div><div class="diaBtn cf"><a class="diaBtn1" href="javascript:;" onclick="closeDialog('+opt.onConfirm+');">确 定</a></div>').appendTo('body');
	}
}

/*关闭弹出层*/
function closeDialog(opt){
	if(typeof opt == 'string'){
		$('#'+opt).hide();
	}else if(opt == undefined || typeof opt == 'function'){
		$('.dialog').remove();
	}
	$('.dialogMask').remove();

	if(typeof opt == 'function'){
		opt();
	}
}

/*统一ajax返回类型*/
function data2json(data){
	if(typeof data == 'string'){
		return eval('('+data+')');//JSON.parse(data)
	}else{
		return data;
	}
}

//cookie操作
function addCookie(name,value,iDay){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=name+'='+value+';path=/;expires='+oDate;
}

function getCookie(name){
	var arr=document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return '';
}

function delCookie(name){
	addCookie(name,'1',-1)
}

function isMobile(str){
	var reg = /^(1\d{10})$/;
	return reg.test(str);
}

function breakToken(){
	window.location.href = 'login.html';
}

// $(function(){
// 	if(getCookie('username') === ''){
// 		window.location.href = 'login.html';
// 	}
// });
var postIp = 'http://obd.mapbar.com/';

var postIp_pro = 'http://obd.mapbar.com/shop/';

var postIp_order = 'http://obd.mapbar.com/shop/';

var postIp_pay = 'http://obd.mapbar.com/shop/';

var postIp_cdy = 'http://obd.mapbar.com/shop/';

var postIp_alipay = 'https://buy.mapbar.com/';

var postIp_prize = 'http://10.10.24.200:8722/';

var postIp_chance = 'http://10.10.24.200:8722/';


/*获取url中的search*/
function Search(){
	var search = window.location.search.substring(1);
	var arr = search.split('&');
	for(var i=0; i<arr.length; i++){
		var arr2 = arr[i].split('=');
		this[arr2[0]] = arr2[1];
	}
}

/*取n到m随机数*/
function rdn(n,m){return parseInt(Math.random()*(m-n+1)+n)}

var MAC = new Search().mac;

/*打开弹出层*/
function dialog(opt){
	if(typeof opt == 'string'){
		$('<div class="dialogMask"></div>').appendTo('body');
		$('#'+opt).show();
	}else{
		var win = $('<div class="dialogMask"></div><div class="dialog"><div class="diaContent">'+opt.msg+'</div><div class="diaBtn cf"><a class="diaBtn1" href="javascript:;" onclick="closeDialog();">确 定</a></div>').appendTo('body');
	}
}

/*关闭弹出层*/
function closeDialog(opt){
	if(opt){
		$('#'+opt).hide();
	}else{
		$('.dialog').remove();
	}
	$('.dialogMask').remove();
}
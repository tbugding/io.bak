var ip = {

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


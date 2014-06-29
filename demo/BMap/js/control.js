window.onload=function(){

	//导航条
	var aNav=document.getElementById('nav').children;

	//地图
	var oMap=document.getElementById('mapWrap');

	//导航
	var oStartRoute=document.getElementById('startRoute');
	var aStartRouteInput=oStartRoute.getElementsByTagName('input');
	var aStartRouteBtn=oStartRoute.getElementsByTagName('li');
	var routeMode=[BMAP_MODE_TRANSIT,BMAP_MODE_DRIVING,BMAP_MODE_WALKING];

	//切换城市
	var oChangeCity=document.getElementById('changeCity');
	var oChangeCityInput=document.getElementById('changeCity_input');
	var oChangeCitySubmit=document.getElementById('changeCity_submit');
	var aChangeCity=document.getElementById('changeCity_city').children;

	//搜索
	var oSearch=document.getElementById('search');
	var oSearchInput=document.getElementById('search_input');
	var oSearchSubmit=document.getElementById('search_submit');

	var aFn=[oStartRoute,oChangeCity,oSearch];

	//初始化地图
	var map = new BMap.Map("mapWrap");
	map.centerAndZoom(initCity,12);
	map.addEventListener('click',function(){
		fnAllHide();
		for(var i=0,length=aNav.length; i<length; i++){
			aNav[i].className='';
		}
		aNav[0].className='current';
	})

	//添加缩放控件
	var zoomControl=new BMap.ZoomControl();
	map.addControl(zoomControl);

	//添加比例尺控件
	var ScaleControl=new BMap.ScaleControl({offset:new BMap.Size(90,6)});
	map.addControl(ScaleControl);

	//添加交通状况控件
	var trafficCtrl=new TrafficControl();
	map.addControl(trafficCtrl);

	//添加定位控件
	var geolocationCtrl=new GeolocationControl();
	map.addControl(geolocationCtrl);

	//导航条
	for(var i=0,length=aNav.length; i<length; i++){
		(function(index){
			aNav[index].onclick=function(){
				for(var i=0,length=aNav.length; i<length; i++){
					aNav[i].className='';
				}
				this.className='current';
				switch(index){
					case 0:
						fnAllHide();
						break;
					case 1:
						fnShow(0);
						break;
					case 2:
						fnShow(1);
						break;
					case 3:
						fnShow(2);
						break;
				}
			};
		})(i);
	}
	function fnAllHide(){
		for(var i=0;i<3;i++){
			aFn[i].style.display='';
		}
		oMap.className='';
	}
	function fnShow(index){
		for(var i=0;i<3;i++){
			aFn[i].style.display='';
		}
		aFn[index].style.display='block';
		oMap.className='harfMap';
	}

	//导航
	for(var j=0,lengthJ=aStartRouteBtn.length; j<lengthJ; j++){
		(function(index){
			aStartRouteBtn[j].onclick=function(){
				var start=aStartRouteInput[0].value;
				var end=aStartRouteInput[1].value;
				var mode=routeMode[index];
				// alert(mode+' | '+start+' | '+end+' | '+initCity)
				if(start && end){
					route(start,end,mode,initCity);
					fnAllHide();
				}
			};
		})(j)
	}

	//切换城市
	for(var k=0,lengthK=aChangeCity.length; k<lengthK; k++){
		(function(index){
			aChangeCity[index].onclick=function(){
				var city=aChangeCity[index].innerHTML;
				map.centerAndZoom(city,12);
				aNav[0].className='current';
				aNav[2].className='';
				fnAllHide();
				initCity=city;
			};
		})(k)
	}
	oChangeCitySubmit.onclick=function(){
		if(oChangeCityInput.value){
			map.centerAndZoom(oChangeCityInput.value,12);
			aNav[0].className='current';
			aNav[2].className='';
			fnAllHide();
		}
	};

	//搜素
	oSearchSubmit.onclick=function(){
		if(oSearchInput.value){
			var local = new BMap.LocalSearch(map, {      
				renderOptions:{map: map}      
			});      
			local.search(oSearchInput.value);
			aNav[0].className='current';
			aNav[3].className='';
			fnAllHide();
		}
	};
}

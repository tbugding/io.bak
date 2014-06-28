window.onload=function(){
	var oStartRoute=document.getElementById('startRoute');
	var aStartRouteInput=oStartRoute.getElementsByTagName('input');
	var aStartRouteBtn=oStartRoute.getElementsByTagName('li');
	var oMap=document.getElementById('mapWrap');

	//初始化地图
	var map = new BMap.Map("mapWrap");
	map.centerAndZoom(initCity);
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
	var aNav=document.getElementById('nav').children;
	for(var i=0,length=aNav.length; i<length; i++){
		(function(index){
			aNav[index].onclick=function(){
				for(var i=0,length=aNav.length; i<length; i++){
					aNav[i].className='';
				}
				this.className='current';
				switch(index){
					case 0:
						oStartRoute.style.display='';
						break;
					case 1:
						oMap.style.height='60%';
						oStartRoute.style.display='block';
						//Rout('史各庄','北苑',BMAP_MODE_TRANSIT,'北京')
						break;
					case 2:
						alert('城市');
						break;
					case 3:
						alert('搜索');
						break;
				}
			};
			
		})(i);
	}


	//导航
	var routeMode=[BMAP_MODE_TRANSIT,BMAP_MODE_DRIVING,BMAP_MODE_WALKING]
	for(var j=0,lengthJ=aStartRouteBtn.length; j<lengthJ; j++){
		(function(index){
			aStartRouteBtn[j].onclick=function(){
				var start=aStartRouteInput[0].value;
				var end=aStartRouteInput[1].value;
				var mode=routeMode[index];
				// alert(mode+' | '+start+' | '+end+' | '+initCity)
				if(start && end){
					route(start,end,mode,initCity)
				}
			};
		})(j)
	}
}

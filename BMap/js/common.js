//初始城市
window.initCity='北京';

//自定义控件-交通状况
function TrafficControl(){
	this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;      
	this.defaultOffset = new BMap.Size(8, 150);
}
TrafficControl.prototype = new BMap.Control();
TrafficControl.prototype.initialize = function(map){      
	var oDiv = document.createElement("div");      
	oDiv.appendChild(document.createTextNode("交"));
	oDiv.setAttribute('id','TrafficControl');
	var  trafficLay=null;
	oDiv.onclick = function(e){
		if(trafficLay){
			map.removeTileLayer(trafficLay);
			trafficLay=null;
		}else{
			trafficLay = new BMap.TrafficLayer();  
			map.addTileLayer(trafficLay);
		}
	}
	map.getContainer().appendChild(oDiv);    
	return oDiv;    
}

//自定义控件-定位
function GeolocationControl(){
	this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;      
	this.defaultOffset = new BMap.Size(8, 23);
}
GeolocationControl.prototype = new BMap.Control();
GeolocationControl.prototype.initialize = function(map){      
	var oDiv = document.createElement("div");      
	oDiv.appendChild(document.createTextNode("定"));
	oDiv.setAttribute('id','GeolocationControl');
	var marker=null;
	var lng=null;
	var lat=null;
	oDiv.onclick = function(e){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(markLocation);
		}else{
			alert("Geolocation is not supported by this browser.")
		}

		if(marker){
			zoomToLocation();
		}
	}
	map.getContainer().appendChild(oDiv);
	function markLocation(position){
		lng=position.coords.longitude;
		lat=position.coords.latitude;
		zoomToLocation();
		if(marker){
			map.removeOverlay(marker);
			marker = new BMap.Marker(new BMap.Point(lng, lat));
			map.addOverlay(marker);
		}else{
			marker = new BMap.Marker(new BMap.Point(position.coords.longitude, position.coords.latitude));
			map.addOverlay(marker);
		}
	}
	function zoomToLocation(){
		map.panTo(new BMap.Point(lng, lat))
	}
	return oDiv;    
}




function route(start,end,mode,region){
	var routeSearch=new BMap.RouteSearch();  
	var start = {  
		latlng: getRoutepoint(start),
		name: start
	  }  
	var end = {  
		latlng: getRoutepoint(end),
		name: end
	  }  
	var opts = {  
		mode:mode,
		//BMAP_MODE_TRANSIT、BMAP_MODE_DRIVING、 BMAP_MODE_WALKING、BMAP_MODE_NAVIGATION
		//公交、驾车、步行和导航
		region:region//"北京"  
	  }  
	var ss = new BMap.RouteSearch();  
	routeSearch.routeCall(start,end,opts);
}

function getRoutepoint(str){
	var myGeo = new BMap.Geocoder();      
	myGeo.getPoint(str, function(point){      
		if (point) {      
			return point;
		}      
	},initCity);
}

(function(aCanvas,mp3){
	//audio 上下文
	window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
	if(!AudioContext){return;}


	//动画，类似setTimeout的递归调用实现动画
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;//j

		var contex = new AudioContext(),  //创建一个audio上下文
		analyser = contex.createAnalyser(), //r 创建一个分析节点analyser 能对信号进行频域和时域上的分析
		oAudio = new Audio(window.location.search.substring(1) || mp3), //t 创建一个audio元素
		source = contex.createMediaElementSource(oAudio), //k 创建音频源
		frequency = analyser.frequencyBinCount / 2,  //analyser.frequencyBinCount 取样频率 默认1024  fftSize 是指频率分析下的快速傅里叶变换大小，他的值被限定在 32-2048 的 2 的整数次方
		u8arr = new Uint8Array(frequency),  //长度为frequency的Uint8Array字节数组
		aContex2D = [aCanvas[0].getContext("2d"),aCanvas[1].getContext("2d"),aCanvas[2].getContext("2d"),aCanvas[3].getContext("2d")],



		width = aCanvas[0].width,
		height = aCanvas[0].height,
		aBarGradient = [aContex2D[0].createLinearGradient(0, 0, 0, height),aContex2D[1].createLinearGradient(0, 0, 0, height),aContex2D[2].createLinearGradient(0, 0, 0, height),aContex2D[3].createLinearGradient(0, 0, 0, height)],
		barWidth = 6, //柱宽 q
		barMargin = 6, //柱间距
		barNumber = width / (barWidth + barMargin) | 0, //柱个数
		frequencyLength = frequency / barNumber | 0;  //frequency对应到柱个数的步长
		for(var i=0; i<aBarGradient.length; i++){
			aBarGradient[i].addColorStop(0, "#369");
			aBarGradient[i].addColorStop(1, "#000");
			aContex2D[i].fillStyle = aBarGradient[i];
		}
		source.connect(analyser);  //节点.连接到（目标节点）  当目标节点是 contex.destination 就可以输出了
		analyser.connect(contex.destination); //destination 是 AudioContext 实例的固有属性，他就是信号的最终汇聚的位置，也是信号的输出位置
		function draw() {
			
			if (oAudio.paused || oAudio.ended) {
				return
			}
			analyser.getByteFrequencyData(u8arr); //频域
			// analyser.getByteTimeDomainData(u8arr);  //时域
			aContex2D[0].clearRect(0, 0, width, height);  //清除矩形
			aContex2D[1].clearRect(0, 0, width, height);
			aContex2D[2].clearRect(0, 0, width, height);
			aContex2D[3].clearRect(0, 0, width, height);
			for (var i = 0; i < barNumber; i++) {
				var p1 = i * (barWidth + barMargin),
					p2 = Math.max(2, height - u8arr[i * frequencyLength] * 0.5);
				aContex2D[0].fillRect(p1, p2, barWidth, height);  //填充矩形 参数：x,y,width,height
				aContex2D[1].fillRect(p1, p2, barWidth, height);
				aContex2D[2].fillRect(p1, p2, barWidth, height);
				aContex2D[3].fillRect(p1, p2, barWidth, height);
			}
			requestAnimationFrame(draw);
		}
		oAudio.addEventListener("playing", draw, false);
		oAudio.addEventListener("play", function(){
			$('#bg').addClass('on');
			$('#show').addClass('on');
		}, false);
		oAudio.addEventListener("ended",function() {
			// aContex2D[0].clearRect(0, 0, width, height);
			// aContex2D[0].fill();
		},false);
		oAudio.autoplay = true;
		oAudio.loop = true;
})([
	document.querySelector("#canvas"),
	document.querySelector("#canvas2"),
	document.querySelector("#canvas3"),
	document.querySelector("#canvas4")
],'03.mp3');

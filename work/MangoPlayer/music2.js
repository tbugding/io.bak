(function(){
	//audio 上下文
	window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
	if(!AudioContext){return;}

	//动画，类似setTimeout的递归调用实现动画
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;//j


	if (typeof window.AudioContext == "undefined") {
		document.getElementById("show").innerHTML = '<object id="player" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6"> <param name="url" value="' + a + '.mp3" /><param name="AutoStart" value="1" /><embed src="' + a + '.mp3" type="application/x-mplayer2" width="360" height="60" autostart="true"></embed></object>'
	} else {
		var contex = new AudioContext(),  //创建一个audio上下文
		analyser = contex.createAnalyser(), //r 创建一个分析节点analyser 能对信号进行频域和时域上的分析
		// oAudio = new Audio("http://www.wuweierwei.com/music/a.mp3"),
		oAudio = new Audio("01.mp3"), //t 创建一个audio元素
		source = contex.createMediaElementSource(oAudio), //k 创建音频源
		frequency = analyser.frequencyBinCount / 2,  //analyser.frequencyBinCount 取样频率 默认1024  fftSize 是指频率分析下的快速傅里叶变换大小，他的值被限定在 32-2048 的 2 的整数次方

		u8arr = new Uint8Array(frequency),  //长度为frequency的Uint8Array字节数组
		oCanvas = document.querySelector("#canvas"),
		oCanvas2 = document.querySelector("#canvas2"),
		contex2D = oCanvas.getContext("2d"),
		contex2D2 = oCanvas2.getContext("2d"),
		width = oCanvas.width,  //c
		height = oCanvas.height,  //h
		barGradient = contex2D.createLinearGradient(0, 0, 0, height),  //线性渐变 作为 strokeStyle 或 fillStyle 属性的值， 使用addColorStop() 创建不同颜色 参数（渐变开始点x坐标,开始y,结束x,结束y）
		barGradient2 = contex2D2.createLinearGradient(0, 0, 0, height),
		barWidth = 1, //柱宽 q
		barMargin = 2, //柱间距
		barNumber = width / (barWidth + barMargin) | 0, //柱个数
		frequencyLength = frequency / barNumber | 0;  //frequency对应到柱个数的步长
		// b.addColorStop(0, "#85c2ff");
		// b.addColorStop(0.7, "#5c87b2");
		barGradient2.addColorStop(0, "rgba(57,156,255,0)");
		barGradient2.addColorStop(0.5, "rgba(28,78,128,0)");
		// b.addColorStop(0.5, "#F00");
		barGradient.addColorStop(1, "#000");
		barGradient2.addColorStop(1, "#000");
		contex2D.fillStyle = barGradient;
		contex2D2.fillStyle = barGradient2;
		source.connect(analyser);  //节点.连接到（目标节点）  当目标节点是 contex.destination 就可以输出了
		analyser.connect(contex.destination); //destination 是 AudioContext 实例的固有属性，他就是信号的最终汇聚的位置，也是信号的输出位置
		function draw() {
			
			if (oAudio.paused || oAudio.ended) {
				return
			}
			analyser.getByteFrequencyData(u8arr); //频域
			// analyser.getByteTimeDomainData(u8arr);  //时域
			contex2D.clearRect(0, 0, width, height);  //清除矩形
			contex2D2.clearRect(0, 0, width, height);
			for (var i = 0; i < barNumber; i++) {
				contex2D.fillRect(i * (barWidth + barMargin), Math.max(2, height - u8arr[i * frequencyLength] * 0.2), barWidth, height)  //填充矩形 参数：x,y,width,height
				contex2D2.fillRect(i * (barWidth + barMargin), Math.max(2, height - u8arr[i * frequencyLength] * 0.2), barWidth, height)
			}
			requestAnimationFrame(draw);
		}
		oAudio.addEventListener("playing", draw, false);
		oAudio.addEventListener("play", function(){
			$('#bg').addClass('on');
			$('#canvas').addClass('on');
		}, false);
		oAudio.addEventListener("ended",function() {
			contex2D.clearRect(0, 0, width, height);
			contex2D.fill();
		},false);
		// t.setAttribute("controls", "controls");
		oAudio.autoplay = true;
		oAudio.loop = true;
		// document.getElementById("show").appendChild(oAudio)
	}
})()

	window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;


	if (typeof window.AudioContext == "undefined") {
		document.getElementById("show").innerHTML = '<object id="player" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6"> <param name="url" value="' + a + '.mp3" /><param name="AutoStart" value="1" /><embed src="' + a + '.mp3" type="application/x-mplayer2" width="360" height="60" autostart="true"></embed></object>'
	} else {
		var n = new AudioContext(),
		r = n.createAnalyser(),
		// t = new Audio("http://www.wuweierwei.com/music/a.mp3"),
		t = new Audio("02.mp3"),
		k = n.createMediaElementSource(t),
		j = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
		l = r.frequencyBinCount / 2,
		u = new Uint8Array(l),
		f = document.querySelector("#canvas"),
		f2 = document.querySelector("#canvas2"),
		p = f.getContext("2d"),
		p2 = f2.getContext("2d"),
		c = f.width,
		h = f.height,
		b = p.createLinearGradient(0, 0, 0, h),
		b2 = p2.createLinearGradient(0, 0, 0, h),
		q = 1, //柱宽
		s = 2, //柱间距
		e = c / (q + s) | 0,
		d = l / e | 0,
		o;
		b.addColorStop(0, "#0080ff");
		b2.addColorStop(0, "rgba(57,156,255,0)");
		b2.addColorStop(0.5, "rgba(28,78,128,0)");
		// b.addColorStop(0.5, "#F00");
		b.addColorStop(1, "#000");
		b2.addColorStop(1, "#000");
		p.fillStyle = b;
		p2.fillStyle = b2;
		k.connect(r);
		r.connect(n.destination);
		function m() {
			
			o = 10000;
			if (t.paused || t.ended) {
				return
			}
			r.getByteFrequencyData(u);
			p.clearRect(0, 0, c, h);
			p2.clearRect(0, 0, c, h);
			for (o = 0; o < e; o++) {
				p.fillRect(o * (q + s), Math.max(2, h - u[o * d] * 0.2), q, h)
				p2.fillRect(o * (q + s), Math.max(2, h - u[o * d] * 0.2), q, h)
			}
			j(m)
		}
		t.addEventListener("playing", m, false);
		t.addEventListener("play", function(){
			$('#bg').addClass('on');
			$('#canvas').addClass('on');
		}, false);
		t.addEventListener("ended",
		function() {
			p.clearRect(0, 0, c, h);
			p.fill()
		},
		false);
		// t.setAttribute("controls", "controls");
		t.autoplay = true;
		document.getElementById("show").appendChild(t)
	}

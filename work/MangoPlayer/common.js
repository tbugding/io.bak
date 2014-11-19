// function $(a) {
// 	return document.getElementById(a)
// }
function ajax(o) {
	var xh = new XMLHttpRequest();
	xh.onreadystatechange = function() {
		this.readyState == 4 && this.status == 200 && o.success && o.success(o.dataType ? o.dataType == "xml" ? this.responseXML: o.dataType == "json" ? eval("(" + this.responseText + ")") : this.responseText: this.responseText)
	};
	o.loading && o.loading();
	xh.open(o.type || "GET", o.url, o.asyn || true);
	o.type == "POST" && xh.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xh.send(o.data || null)
}
function getScript(a, c) {
	var b = document.createElement("script");
	b.setAttribute("type", "text/javascript");
	if (c) {
		if (typeof b.onload == "undefined") {
			b.onreadystatechange = function() { (this.readyState == "loaded" || this.readyState == "complete") && c()
			}
		} else {
			b.onload = c
		}
	}
	b.setAttribute("src", a);
	document.body.appendChild(b)
}
function createMenu() {
	ajax({
		url: "/menu.xml",
		dataType: "xml",
		success: function(c) {
			var f = document.createElement("menu"),
			e = ["/html5/", "/css3/", "/javascript/", "/cases/"],
			d = e.length,
			a = d,
			b = location.href;
			f.innerHTML = c.documentElement.firstChild.nodeValue;
			while (d--) {
				if (b.indexOf(e[d]) != -1) {
					a = d;
					break
				}
			}
			f.children[a].className = "current";
			document.body.insertBefore(f, document.body.firstChild);
			f.addEventListener && f.addEventListener("touchstart",
			function(h) {
				var g = h.target;
				if (g.nodeName == "LI" && g.lastElementChild && g.lastElementChild.nodeName == "UL") {
					g.tabIndex = "-1";
					g.focus()
				}
			},
			false)
		}
	})
}
if (typeof document.addEventListener == "undefined") {
	if (typeof Element != "undefined") {
		Element.prototype.addEventListener = function(d, a, c) {
			var b = this;
			a[d] || (a[d] = function() {
				a.call(b)
			});
			this.attachEvent("on" + d, a[d], c)
		};
		Element.prototype.removeEventListener = function(c, a, b) {
			a[c] && this.detachEvent("on" + c, a[c], b)
		}
	}
	// window.attachEvent("onload", createMenu)
} else {
	// document.addEventListener("DOMContentLoaded", createMenu, false)
};
/**
 * 加载模块
 * @namespace loadingPlugis
 * @desc 只适应于css3
 */
var loadingPlugis = new (function () {
    var dom;
    var tp;
    /**
     * 设置dom
     * @param dom {String} 选择器".class","#id"
     */
    this.setDom = function (dom) {
        dom = document.querySelector(dom);
    };
    this.setType = function (type) {
        tp = type;
    }
    /**
     * 开始加载
     */
    this.start = function (){
        var div = document.createElement("div");
        var spinner = document.createElement("div");
        div.id = "loadingPlugin_mask";
        if(tp === 2) {
            div.innerHTML = "<div id='loading-spinner'></div>";
        } else if(!tp){
            div.innerHTML='<div class="spinner">' +
                '<div class="bar1"></div>' +
                '<div class="bar2"></div>' +
                '<div class="bar3"></div>' +
                '<div class="bar4"> </div>' +
                '<div class="bar5"></div>' +
                '<div class="bar6"></div>' +
                '<div class="bar7"></div>' +
                '<div class="bar8"></div>' +
                '<div class="bar9"></div>' +
                '<div class="bar10"></div>' +
                '<div class="bar11"></div>' +
                '<div class="bar12"></div></div>';

        }

        dom = dom ? dom : document.body;
        dom.appendChild(div);
    }
    /**
     * 加载结束
     */
    this.end = function () {
        var my1 = document.getElementById("loadingPlugin_mask");
        if (my1 != null)
            my1.parentNode.removeChild(my1);
    }
})();

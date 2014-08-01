/**
 * 构造函数,创建地图实例
 * @class 包装百度图，增加自定定义方法
 * @name MapView
 * @param {Object} opts
 * @param {String} opts.containerId 地图外部容器标识
 * @param {BMap.Point} opts.bCenter 百度地图中心点坐标
 * @param {Number} opts.bZoom 百度地图缩放级别
 * @param {Number} opts.lbNum lb的个数
 * @constructor
 * @example
 * <pre>
 *     <b>视图容器的基本结构</b><br/>
 *     <!-- 地图视图容器 -->
 *     <div id="container">
 *          <!-- 后代元素 -->
 *          <div _tmc="posterty">
 *              <!-- 十字线 -->
 *          </div>
 *          <div _tmc="posterty">
 *              <!-- 百度地图 -->
 *              <div _tmc="bMap">
 *              </div>
 *          </div>
 *     </div>
 * </pre>
 * */
function MapView(opts) {
    var _tmc = '_tmc',
        _posterity = 'posterity',
        _bMap = 'bMap';
    /**
     * 地图视图容器
     * @type JQuery
     * @private
     * */
    this._$container = $('#' + opts.containerId);
    /**
     * 地图视图容器中，带有后代标识的元素
     * @type JQuery[]
     * @private
     * */

    this._$containerPosterity = $('[' + _tmc + '="' + _posterity + '"]', this._$container);
    /**
     * 十字线容器
     * @type JQuery
     * @private
     * */
    this._$crossContainer = this._$containerPosterity.eq(0);
    /**
     * 地图容器（放大、缩小等操作是对于这个窗口的）
     * @type JQuery
     * @private
     * */
    this._$mapContainer = this._$containerPosterity.eq(1);
    /**
     * 百度地图容器，用于百度地图的实例化
     * @type HTMLElement
     * @private
     * */
    this._bMapContainer =  $('[_tmc="'+ _bMap +'"]', this._$mapContainer).get(0);


    /**
     * 百度地图缩放级别
     * @type Number
     * @private
     * */
    this._bZoom = opts.bZoom;

    /**
     * 百度地图的中心点
     * @type BMap.Point
     * @private
     * */
    this._bCenter = opts.bCenter;
    /**
     * 百度地图的实例对象
     * @type BMap
     * @private
     * */
    this.bMap = null;
    /**
     * 百度地图的实时路况对象
     * */
    this._bMapTraffic =  new BMap.TrafficLayer();
    /**
     * 数据驱动对象
     * @type DataDriver
     * @private
     * */
    this._driver = null;
    /**
     * label数组
     * @type {Array}
     * @private
     */
    this._lbArr = [];
    this._initBMap(opts);
    /**
     * 用来存储当前的label的数据(缓存切换时用)
     */
    this._curLabelArr = [new BMap.Label()]
};
/**
 * @name MapView#setDriver
 * @desc 设置驱动对象，添加事件监听
 * @param {DataDriver} driver 驱动对象
 * @public
 * @function
 * */
MapView.prototype.setDriver = function (driver) {
    this._driver = driver;
    this._createLabelA(driver);
};
/**
 * @name MapView#_createLabelA
 * @desc   缓存坐标数组
 * @param {DataDriver} driver 驱动对象
 * @private
 * @function
 * */
MapView.prototype._createLabelA = function  (driver) {
    var len = driver.getPageSize();
    for (var i = 0; i < len; i++) {
        var t = new BMap.Label('<a id="mapLab' + i + '" class = "mapLab"></a>');
        t.hide();
        this.bMap.addOverlay(t);
        this._lbArr.push(t);
    }
    this.lbSetListenerEvent();
}
MapView.prototype.lbSetListenerEvent = function () {
    var numReg = /\d+/;
    $(".mapLab").hover(function () {
        var num = parseInt(this.id.match(numReg));

        $("#ptr" + num).addClass('hover');
        //第一个单元格距离浏览器窗口的距离
        var firstTrTop = $("#TbBody").offset().top;
        //单元格距离浏览器窗口的距离
        var trTp = $("#ptr"+num).offset().top;
        var cT = trTp - firstTrTop;
        console.log(cT);
        $(".taP").animate({scrollTop: cT},"fast");
    }, function () {
        var num = parseInt(this.id.match(numReg));
        $("#ptr" + num).removeClass('hover');
    });
    $('.mapLab').click(function () {
        var num = parseInt(this.id.match(numReg));
        dDriver.selectData(num);
    });
}
/**
 * @name MapView#setBtn
 * @desc 设置关联按钮对象，添加事件监听
 * @param {ButtonView} btn 关联按钮对象
 * @public
 * @function
 * */
MapView.prototype.setBtn = function (btn) {

};
/**
 * @name MapView#setLabelPosition
 * @desc设置label的坐标
 * @param rowIndex 表格的索引
 * @param point 百度的坐标
 * @param state 数据的检查后的状态 state = -1表示不在路上，state = 1表示在路上，state = 0 表示在正在检测，
 */
MapView.prototype.setLabelPosition = function (rowIndex, point, state) {
    var lb = this._lbArr[rowIndex];
    var la = this._lbArr[rowIndex].getPosition();
    var clickLb = this._curLabelArr;
    lb.setStyle({
        background: 'black',
        fontSize: "0px",
        height: "1px",
        width: '1px',
        lineHeight: "0px",
        padding: "0px",
        border: "0px"
    });
    lb.setPosition(point);
    clickLb.push(lb);
    clickLb.shift().hide();
    lb.show();
}
/**
 * 设置label
 * @param rowIndex
 * @param state
 */
MapView.prototype.setLabelStyle = function (rowIndex, state) {
    var lb = this._lbArr[rowIndex], color;
    if (state === 1) {
        color = 'blue';
    } else if (state === -1) {
        color = 'red';
    };
    lb.setStyle({
        background: color
    });
}
/**
 * @name MapView#getLabel
 * @desc取得label
 * @param rowIndex 表格的索引
 */
MapView.prototype.getLabel = function (rowIndex) {
    return this._lbArr[rowIndex];
}
/**
 * @name MapView#_initBMap
 * @desc 初始化百度地图
 * @private
 * @function
 * */

MapView.prototype._initBMap = function (opts) {
    this.bMap = map;
    this._setMapSize(opts);
    /*this.bMap = new BMap.Map(this._bMapContainer);
    var map = this.bMap;
    map.centerAndZoom(this._bCenter, 14);
    map.setDefaultCursor('default');
    map.setDraggingCursor('default');
    map.disableDoubleClickZoom();
    this.setTrafficVisible(true);*/
    //var s =new BMap.TrafficControl();
    //s.show()
    var resizeTimer = null;
    var _this = this;
    this.bMap.addEventListener("rightclick", function (e) {
        if(_this._driver.index === null) {
            return;
        }
        $(".mapLab").unbind();
        var x = e.offsetX, y = e.offsetY;
        var point = this.pixelToPoint(new BMap.Pixel(x,y));
        _this.setLabelPosition(_this._driver.getRowIndex(),point);
        var zoom = _this._driver.getZoom();
        _this._driver.updateData(point, zoom);
        var rowIndex = _this._driver.getRowIndex(_this._driver.index);
        e.returnValue = false;
        return false;
    });
    $(window).bind("resize",function () {
        resizeTimer = resizeTimer ? null : setTimeout(_this._setMapSize(opts), 0);
    });
    this.bMap.addEventListener("resize", function () {
        if(_this._driver && _this._driver.index) {
            var boint = _this._driver.getPoint();
            this.bMap.setCenter(boint);
        }
    });
};
/**
 * @name MapView#_setMapSize
 * @desc 设置地图的高宽
 * @param opts
 * @private
 */
MapView.prototype._setMapSize = function (opts) {
    var bc = this._bMapContainer;
    bc.style.height = (window.innerHeight - opts.height)+"px";
    bc.style.width = (window.innerWidth - opts.width) + "px"
}
/**
 * @name MapView#zoomOutView
 * @desc 缩小视图
 * @public
 * @function
 * @param  {Boolean} zoom true 表示缩至最小级别
 */
MapView.prototype.zoomOutView = function (zoom) {
    var container = this._$mapContainer;
    var _zoom = parseInt(container.css('-webkit-transform').match(/(?=\()?\d+(?=\,)/));
    _zoom--;
    if (typeof zoom == 'boolean' && zoom || _zoom < 1) {
        _zoom = 1;
        console.log();
    }
    container.css({
        "-webkit-transform": "scale(" + _zoom + ")"
    });
};
/**
 * @name MapView#zoomInView
 * @desc 放大视图
 * @public
 * @function
 * */
MapView.prototype.zoomInView = function () {
    var sc = parseInt(this._$mapContainer.css('-webkit-transform').match(/(?=\()?\d+(?=\,)/));
    sc++;
    this._$mapContainer.css({
        "-webkit-transform": "scale(" + sc + ")"
    });
};
/**
 * @name MapView#panByView
 * @desc 设置视图移动
 * @param {Number} x 横向平移值
 * @param {Number} y 纵向平移值
 * @public
 * @function
 * */
MapView.prototype.panByView = function (x, y) {
    this.bMap.panBy(x, y, {noAnimation: true});
};
/**
 * @name MapView#getBMapZoom
 * @desc 获取百度地图缩放级别
 * @return {Number}
 * @public
 * @function
 * */
MapView.prototype.getBMapZoom = function () {
    return this.bMap.getZoom();
};
/**
 * @name MapView#getBMapCenter
 * @desc 获取百度地图中心点
 * @return {BMap.Point}
 * @public
 * @function
 * */
MapView.prototype.getBMapCenter = function () {
    return this.bMap.getCenter();
};
/**
 * @name MapView#setBMapZoom
 * @desc 设置百度地图缩放级别
 * @param {Number} bZoom 缩放级别 不设置取数据的级别
 * @public
 * @function
 * */
MapView.prototype.setBMapZoom = function (bZoom) {
    bZoom = bZoom ? bZoom :  this._driver.getData(0).pointImageInfo.grid.z;
    this.bMap.setZoom(bZoom);
};
/**
 * @name MapView#setBMapCenter
 * @desc 设置百度地图中心点
 * @param {BMap.Point} bpoint 百度地图坐标
 * @public
 * @function
 * */
MapView.prototype.setBMapCenter = function (bpoint) {
    //this.bMap.panTo(bpoint);
    this.bMap.setCenter(bpoint);
};
/**
 * @name MapView#setCrossVisible
 * @desc 设置十字线可见性
 * @param {Boolean} visible true 表示显示，false 表示隐藏，visible不写时，默认为true
 * @public
 * @function
 * */
MapView.prototype.setCrossVisible = function (visible) {
    visible ? this._$crossContainer.show() : this._$crossContainer.hide();
};
/**
 * @name MapView#setTrafficVisible
 * @desc 设置地图路况可见性
 * @param {Boolean} visible true 表示显示，false 表示隐藏，visible不写时，默认为true
 * @public
 * @function
 * */
MapView.prototype.setTrafficVisible = function (visible) {

    var map  = this.bMap;
    //var traffic = this._bMapTraffic;
    //var traffic = new BMap.TrafficLayer();
    //visible ? map.addTileLayer(traffic) : map.removeTileLayer(traffic);
};

/**
 * @name MapView#setAllLabelVisible
 * @desc 设置全体地标的可见性
 * @param {Boolean} visible true 表示显示，false 表示隐藏，visible不写时，默认为true
 * @public
 * @function
 * */
MapView.prototype.setAllLabelVisible = function (visible) {
    var curNum = this._driver.getRowIndex();
    var arr = this._lbArr;
    var len = this._lbArr.length;
    arr.forEach(function (a,index){
        if(index !== curNum){
            if(visible){
                a.show();
            }else{
                a.hide();
            }
        }
    });
};
 





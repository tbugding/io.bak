/**
 * @class 分页视图
 * @name ButtonView
 * @param {String} containerId  容器标识，必选
 * @constructor
 * */
function ButtonView (containerId) {
    /**
     * 视图JQuery对象
     * @type JQuery
     * @private
     * */
    this._$container = $('#' + containerId);
    this._$checkBoxes = $('input[type="checkbox"]');
    /**
     * 路况控制
     * @type HTMLElement
     * @private
     * */
    this._$traffic = this._$checkBoxes.eq(0);
    /**
     * 十字线控制
     * @type HTMLElement
     * @private
     * */
    this._$cross = this._$checkBoxes.eq(1);
    /**
     * 标注控制
     * @type HTMLElement
     * @private
     * */
    this._$label = this._$checkBoxes.eq(2);
    /**
     * 标注控制
     * @type HTMLElement
     * @private
     * */
    this._$removeRight = this._$checkBoxes.eq(3);
    /**
     * 百度地图实例
     * @type {object}
     * @private
     * */
    this._Map = null;
    this._tableView = null;
};

/**
 * @name ButtonView#setDriver
 * @desc 设置驱动对象，添加事件监听
 * @param {DataDriver} driver 驱动对象
 * @public
 * @function
 * */
ButtonView.prototype.setDriver = function (driver) {
    this._driver = driver;
};
ButtonView.prototype.setTableView = function (tableView) {
    this._tableView = tableView;
};

/**
 * @name ButtonView#setDriver
 * @desc 设置地图对象
 * @param {BMap.Map} map 地图对象
 * @public
 * @function
 * */
ButtonView.prototype.setMap = function (map) {
    this._Map = map;
};
/**
 *  @name ButtonView#setTrafficVisible
 *  @desc 设置路况可见性
 *  @public
 *  @function
 * */
ButtonView.prototype.setTrafficVisible = function () {
    var _this = this;
    this._$traffic.bind('click', function () {
        _this._Map.setTrafficVisible(this.checked);
    });
};

/**
 *  @name ButtonView#setTrafficVisible
 *  @desc 设置路况可见性
 *  @public
 *  @function
 * */
ButtonView.prototype.setRightTrHide = function () {
    var _this = this;
    this._$removeRight.bind('click', function () {
        _this._tableView.filterRightPoint(this.checked);
    });
};
/**
 *  @name ButtonView#setCrossVisible
 *  @desc 设置十字线可见性
 *  @public
 *  @function
 * */
ButtonView.prototype.setCrossVisible = function () {
    var _this =  this;
    this._$cross.bind("click",function (){
        _this._Map.setCrossVisible(this.checked)
    });
};
/**
 *  @name ButtonView#setAllLabelVisible
 *  @desc 设置所有标注可见性
 *  @public
 *  @function
 * */
ButtonView.prototype.setAllLabelVisible = function () {
    var _this =  this;
    this._$label.bind("click",function (){
        _this._Map.setAllLabelVisible(this.checked)
    });
};
/**
 * 显示隐藏标注快捷键方法
 */
ButtonView.prototype.switchLable =  function () {
    var _this = this;
    var cb = $('#cbMk').get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    _this._Map.setAllLabelVisible(cb.checked);
    _this._Map.lbSetListenerEvent();

}
/**
 * 显示隐藏十字线快捷键方法
 */
ButtonView.prototype.switchCross =  function () {
    var _this = this;
    var cb = $('#cbCenter').get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    _this._Map.setCrossVisible(cb.checked);
}

/**
 * 显示隐藏路况快捷键方法
 */
ButtonView.prototype.switchTraffic =  function () {
    var _this = this;
    var cb = $('#cbTraffic').get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    _this._Map.setTrafficVisible(cb.checked);
}
/**
 * 是否过滤快捷键方法
 */
ButtonView.prototype.switchFilter =  function () {
    var cb = this._$removeRight.get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    //_this._Map.setTrafficVisible(cb.checked);
    this._tableView.filterRightPoint(cb.checked);
}
/**
 *  @name ButtonView#showCurLable
 *  @desc select时只显示当前的label
 *  @public
 *  @function
 * */
ButtonView.prototype.showCurLable = function () {
    var cur = this._$label.get(0);
    if(cur.checked){
        cur.checked = false;
        this._Map.setAllLabelVisible(false);
    }
};
/**
 * @name ButtonView#finalize
 * @desc 释放资源
 * @public
 * @function
 * */
ButtonView.prototype.finalize = function () {};

/**
 * @ButtonView#traffic
 * @event
 * @param {Object} data
 * @param {Boolean} data.checked 是否被选中
 * */
/**
 * @ButtonView#cross
 * @event
 * @param {Object} data
 * @param {Boolean} data.checked 是否被选中
 * */
/**
 * @ButtonView#label
 * @event
 * @param {Object} data
 * @param {Boolean} data.checked 是否被选中
 * */
/**
 * @class 数据信息统计视图
 * @name CountView
 * @param {String} containerId  容器标识，必选
 * @constructor
 * @example
 * <pre>
 *     &lt;b&gt;视图基本结构&lt;/b&gt;
 *     &lt;table id="container"&gt;
 *          &lt;tr&gt;&lt;td&gt;错误：&lt;/td&gt;&lt;td _tmc&gt;&lt;/td&gt;&lt;/tr&gt;
 *          &lt;tr&gt;&lt;td&gt;检查：&lt;/td&gt;&lt;td _tmc&gt;&lt;/td&gt;&lt;/tr&gt;
 *          &lt;tr&gt;&lt;td&gt;勾选：&lt;/td&gt;&lt;td _tmc&gt;&lt;/td&gt;&lt;/tr&gt;
 *          &lt;tr&gt;&lt;td&gt;未勾选：&lt;/td&gt;&lt;td _tmc&gt;&lt;/td&gt;&lt;/tr&gt;
 *          &lt;tr&gt;&lt;td&gt;总数：&lt;/td&gt;&lt;td _tmc&gt;&lt;/td&gt;&lt;/tr&gt;
 *     &lt;/table&gt;
 * </pre>
 * */
function CountView (containerId) {
    /**
     * 分页视图JQuery对象
     * @type JQuery
     * @private
     * */
    this._$container = $('#' + containerId);
    /**
     * 地图视图容器中，带有后代标识的元素
     * @type JQuery[]
     * @private
     * */
    this._$containerPosterity = $('[_tmc]',this._$container);
    /**
     * 错误数量统计
     * @type HTMLElement
     * @private
     * */
    this._errorCon = this._$containerPosterity.eq(0);
    this._error = 0;
    /**
     * 验证完成的数量统计
     * @type HTMLElement
     * @private
     * */
    this._checkStateCon = this._$containerPosterity.eq(1);
    this._checkState = 0;
    /**
     * 已勾选数量统计
     * @type HTMLElement
     * @private
     * */
    this._isUsedCon = this._$containerPosterity.eq(2);
    this._isUsed = 0;
    /**
     * 未勾选数量统计
     * @type HTMLElement
     * @private
     * */
    this._noUsedCon = this._$containerPosterity.eq(3);
    this._noUsed = 0;
    /**
     * 总数量统计
     * @type HTMLElement
     * @private
     * */
    this._totleCon = this._$containerPosterity.eq(4);
    this._totle = [];
    this._mapZoom = this._$containerPosterity.eq(5);
    this._init();
};
/**
 * @name CountView#_init
 * @desc CountView的初始化设置
 * @private
 * @function
 *
 */
CountView.prototype._init = function (){
    this._$container.show();
}
/**
 * @name CountView#init
 * @desc CountView的初始化设置
 * @private
 * @function
 *
 */
CountView.prototype.init = function (){
    this._error = 0;
    this._checkState = 0;
    this._isUsed = 0;
    this._noUsed = 0;

}
/**
 * @name CountView#setTotle
 * @desc 设置当面数据总数，只计数，不显示
 * @public
 * @function
 * @param {Number} count 当前页的数据总数
 * @return {CountView} 当前实例对象
 * */

 CountView.prototype.setTotle = function (count) {
    this._totleCon.html(count);
    return this;
};

/**
 * @name CountView#setErrorCount
 * @desc 设置当前数据的错误
 * @param checkStatus 检查状态
 * @param lastCheckStatus 上一次的检查状态
 * @return {*}
 */
 CountView.prototype.setCheckCount = function (checkStatus,lastCheckStatus) {
    if(lastCheckStatus){
        if(checkStatus === -1 && lastCheckStatus === 1) {
            this._error++;
        } else if(checkStatus === 1 && lastCheckStatus === -1) {
            this._error--;
        }
        this._errorCon.html(this._error);
    } else {
        if(checkStatus === -1){
            this._error++;
        }
        this._errorCon.html(this._error);
        this._checkStateCon.html(++this._checkState);
    }
    return this;
};
/**
 * @name CountView#setUsed
 * @desc 设置当前数据的是否可用
 * @public
 * @function
 * @return {CountView} 当前实例对象
 * */
CountView.prototype.setUsed = function (isUsed) {
    if(isUsed === 1){
        this._isUsedCon.html(++this._isUsed);
    } else {
        this._noUsedCon.html(++this._noUsed);
    }
    return this;
};

/**
 * @name CountView#setMapZoom
 * @desc 设置当前的级别
 * @public
 * @function
 * @param {Number} zoom 当前页的数据总数
 * @return {CountView} 当前实例对象
 * */

CountView.prototype.setMapZoom = function (zoom) {
    console.log(zoom);
    this._mapZoom.html(zoom);
    return this;
};
/**
 * @name CountView#setUsed
 * @desc 设置当前数据的是否可用
 * @public
 * @function
 * @return {CountView} 当前实例对象
 * */
CountView.prototype.setSingleUsed = function (isUsed) {
    if(isUsed === 1){
        this._isUsedCon.html(++this._isUsed);
        this._noUsedCon.html(--this._noUsed);
    } else {
        this._isUsedCon.html(--this._isUsed);
        this._noUsedCon.html(++this._noUsed);
    }
    return this;
};
/**
 * @name CountView#setErrorCount
 * @desc 设置当前数据的错误
 * @public
 * @function
 * @return {CountView} 当前实例对象
 * */
/*CountView.prototype.setCheckCount = function () {
   this._checkStateCon.html(++this._checkState);
    return this;
};*/

/**
 * @name CountView#setCheckState
 * @desc 验证完成的数量统计，只计数，不显示
 * @public
 * @function
 * @param {Object} data
 * @param {Boolean} data.checkState 数据正确性状态值
 * @param {Number} data.pageNum 当前页码
 * @return {CountView} 当前实例对象
 * */
CountView.prototype.setCheckState = function (data) {};
/**
 * @name CountView#showCount
 * @desc 显示统计结果。（将对应的计数添加到容器中）
 * @public
 * @function
 * @return {CountView} 当前实例对象
 * */
CountView.prototype.showCount = function () {};
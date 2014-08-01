/**
 * @class 分页视图
 * @name NumberView
 * @param {String} containerId  容器标识，必选
 * @param {Object} opts
 * @param {Number} opts.showCount 要显示的页码数量，必选
 * @constructor
 * @example
 * <pre>
 *     <b>分页视图基本结构</b><br/>
 *     &lt;!-- 分页视图容器 --&gt;
 *     &lt;div id="pageContainer"&gt;
 *          &lt;a _tmc="first"&gt;首页&lt;/a&gt;
 *          &lt;a _tmc="pre"&gt;上一页&lt;/a&gt;
 *          &lt;div _tmc="num"&gt;
 *              &lt;a&gt;1&lt;/a&gt;
 *              &lt;a&gt;2&lt;/a&gt;
 *              ...
 *          &lt;/div&gt;
 *          &lt;a _tmc="next"&gt;下一页&lt;/a&gt;
 *          &lt;a _tmc="last"&gt;尾页&lt;/a&gt;
 *     &lt;/div&gt;
 * </pre>
 * */
function NumberView (containerId, opts) {
    /**
     * 分页视图JQuery对象
     * @type JQuery
     * @private
     * */
    this._$container = $('#' + containerId);
    /**
     * 页码容器JQuery对象
     * @type JQuery
     * @private
     * */
    this._$numContainer = null;
    /**
     * 页码容器JQuery对象 返回第一页
     * @type JQuery
     * @private
     * */
    this._$home = null;
    /**
     * 页码容器JQuery对象 返回最后一页
     * @type JQuery
     * @private
     * */
    this._$end = null;
    /**
     * 页码容器JQuery对象 下一页
     * @type JQuery
     * @private
     * */
    this._$next = null;
    /**
     * 页码容器JQuery对象 上一页
     * @type JQuery
     * @private
     * */
    this._$pre = null;
    /**
     * 要显示的页码数量
     * @type Number
     * @private
     * */
    this._showCount = opts.showCount;
    /**
     * 页码总数
     * @type Number
     * @private
     * */
    this._pageCount = 0;
    /**
     * 当前页码
     * @type Number
     * @private
     * */
    this._pageNum = 1;
    this._setListenerEvent();
};
NumberView.prototype._setListenerEvent = function () {
    var _this =this;
    this._$container.bind('click', function (e) {
        e.preventDefault();
        var target = e.target;
        var value = target.getAttribute('_tmc');
        if (!isNaN(value)) {
            value= parseInt(value);
        }
        var pageNum = _this._pageNum;
        var pageCount = _this._pageCount;
        if(!value){
            return;
        }
        if(typeof value === 'number'){
            _this.selectPage(value,_this._pageCount);
        }else {
            _this[value]();
        }
    });
};
/**
 *  @name NumberView#_render
 *  @desc 渲染页码容器
 *  @private
 *  @function
 *  @param {Number} pageNum 选中的页码
 *  @return {NumberView} 当前实例对象
 * */
NumberView.prototype._render = function (pageNum) {
    var dom = '',pageCount = this._pageCount,showCount = this._showCount;
    this._pageNum = pageNum;
    var halfCount = Math.ceil(showCount/2);
    var sIndex,count;
    if(showCount >= pageCount) {
        count = pageCount;
        sIndex = 1;
    } else{
        count = showCount;
        if(pageNum <= halfCount + 1) {
            sIndex = 1;
        } else if(pageNum > (pageCount - halfCount)){
            sIndex = pageCount - showCount + 1;
        } else {
            sIndex = pageNum - halfCount + 1;
        }
    }
    var s = pageNum ===1 ? '':'<a  href="#" _tmc="first">&lt;&lt;</a><a href="#" _tmc="pre">&lt;</a>';
    dom += s ;
    for(var i = sIndex;i < count + sIndex;i++){
        var s = i === pageNum ? 'class="on"':'';
        dom +=  '<a ' + s +' _tmc='+ i +' href="#">'+ i +'</a>'
    }
    var s = pageNum === pageCount ? '':'<a href="#" _tmc="next">&gt;</a><a href="#" _tmc="last">&gt;&gt;</a>'
    dom +=  s;
    this._$container.empty().append(dom);
};
/**
 *  @name NumberView#selectPage
 *  @desc 选中页码
 *  @public
 *  @function
 *  @param {Number} pageNum 选中的页码
 *  @param {Number} pageCount 共有多少页
 *  @return {NumberView} 当前实例对象
 * */
NumberView.prototype.selectPage = function (pageNum, pageCount) {
    if(typeof pageCount === 'number' && pageCount > 0){
        this._pageCount = pageCount;
    }
    this._render(pageNum);
    $(this).trigger('switch', {pageNum : pageNum});
    return this;
};
/**
 *  @name NumberView#next
 *  @desc 第一页
 *  @public
 *  @function
 * */
NumberView.prototype.next = function () {
    if(this._pageNum < this._pageCount) {
        this.selectPage(++this._pageNum);
    }
    return this;
};
/**
 *  @name NumberView#pre
 *  @desc 第一页
 *  @public
 *  @function
 * */
NumberView.prototype.pre = function () {
    if(this._pageNum > 1) {
        this.selectPage(--this._pageNum);
    }

    return this;
};
/**
 *  @name NumberView#first
 *  @desc 第一页
 *  @public
 *  @function
 * */
NumberView.prototype.first = function () {
    this.selectPage(1);
    return this;
};
/**
 *  @name NumberView#last
 *  @desc 最后一页
 *  @public
 *  @function
 * */
NumberView.prototype.last = function () {
    this.selectPage(this._pageCount);
    return this;
};

/**
 *  @name NumberView#setVisible
 *  @desc 设置分页组件可见性
 *  @public
 *  @function
 *  @param {Boolean} visible true，可见；false，不可见
 *  @return {NumberView} 当前实例对象
 * */
NumberView.prototype.setVisible = function (visible) {
    return this;
};
/**
 *  @name NumberView#switch
 *  @desc 切换页面时，抛出此事件
 *  @public
 *  @event
 *  @param {Object} data
 *  @param {Number} data.pageNum 当前页码
 * */

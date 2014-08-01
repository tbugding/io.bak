/**
 * @class 表格视图
 * @name TableView
 * @param {String} containerId  容器标识，必选
 * @constructor
 * */
function TableView (containerId) {
    /**
     * 表格视图JQuery对象
     * @type JQuery
     * @private
     * */
    this._$container = $('#' + containerId);
    /**
     * 表格视图DOM对象
     * @type HTMLElement
     * @private
     * */
    this._container = this._$container.get(0);
    /**
     * 表格视图标题对象
     * @type {*}
     * @private
     */
     this._$containerTitle = this._$container.children().eq(0);
    /**
     * 包括表格的div
     * @type {*}
     * @private
     */
    this._$containerTBContent = this._$container.children().eq(1);

    /**
     * 表格视图主体
     * @type {*}
     * @private
     */
    this._$containerBody = this._$containerTBContent.children();

    /**
     * 当前被选中的行号
     * @type Number
     * @private
     * */
     this._rowIndex = 0;
    /**
     * 数据驱动对象
     * @type DataDriver
     * @private
     * */
    this._driver = null;
    /**
     * 用来存储上一次点击的行号
     * @type {Array} 0 表示没有上一次点击的行号
     * @private
     */
    this._lastNumArr = [0];
    /**
     * 用来存储上一次点击的行号
     * @type {Array} 0 表示没有上一次点击的行号
     * @private
     */
    this._lastRowIndex = null;
    /**
     * 表格的高度
     * @type {number}
     */
    this._height = 0;
    /**
     * 表格行的高度
     * @type {number}
     */
    this._trHeight = 0;
    /**
     * tr是显示还是隐藏 数据
     * @type {Array}
     */
    this.trShowArr = [];
    this._tbBody = $("#TbBody");
    this._setSize();
};
/**
 *表格适应
 */
TableView.prototype.setTableHeight = function (){
    var tHeight = window.innerHeight - 250;
    var _height = this._$containerBody.height()
    /*if (_height > tHeight) {

    }else{
        this._$containerTBContent.height(_height+"px");
    }*/
    this._$containerTBContent.height(tHeight + "px");
    this._height = this._$containerTBContent.height();
    this._realheight =  _height;
    this._trHeight = this._$containerTBContent.find('tr').height();
}
/**
 * 窗口大小改变时改变table的高度
 * @private
 */
TableView.prototype._setSize = function () {
    var _this = this;
    $(window).bind("resize",function () {
        _this.setTableHeight();
    });
    /*window.onresize = function () {

    };
    window.addLi*/
}
/**
 * 过滤正确的点
 */
TableView.prototype.filterRightPoint = function  (boo) {
    if(boo) {
        this._$containerBody.find(".right").hide();
    } else {
        this._$containerBody.find(".right").show();
    }

}
/**
 * @name TableView#_setListenerEvent
 * @desc 为表格组件添加事件
 * @private
 * @function
 * */
TableView.prototype._setListenerEvent = function () {
    var numReg = /\d+/,_this = this;
    this._$containerBody.find("tr").bind("click",function (){
       var num = parseInt(this.id.match(numReg));
           _this.selectRow(num);
   });
    var usedNum = 0;
    var noUsedNum = 0;
   this._$containerBody.find("tr input").bind("click",function (e){
        var num = parseInt($(this).parent().parent().attr("id").match(numReg));
        var tf;
       if (this.checked) {
           usedNum++;
           noUsedNum--;
           tf = 1;
       } else {
           tf = 0;
           usedNum--;
           noUsedNum++;
       }
       _this._driver.updateUsed(num,tf,usedNum);
        e.stopPropagation();
   });
};
/**
 * 显示表格标题
 * @private
 */
TableView.prototype._showTitle = function (){
    this._$containerTitle.show();
}

/**
 * @name TableView#setDriver
 * @desc 设置数据驱动
 * @public
 * @function
 * @param {DataDriver} driver 驱动对象
 * @return {TableView} 当前实例对象
 * */
TableView.prototype.setDriver = function (driver) {
    this._driver = driver;
    this._$driver = $(driver);
    return this;
};
/**
 * @name TableView#fillTable
 * @desc 填充表格
 * @public
 * @function
 * @param {Number} sIndex 当前页数据片段的起点下标
 * @param {Number} eIndex 当前面数据片段的终点下标
 * @return {TableView} 当前实例对象
 * */
TableView.prototype.fillTable = function (sIndex, eIndex) {
    var data = null;
    var dom = '';
    this._showTitle();
    var i,j;
    for (i = sIndex,j = 0; i < eIndex; i++,j++) {
        data = this._driver.getTableData(i);
        var st = data.checkStatus;
        var cls;
        if (st ===1) {
            cls = 'right';
        } else if (st === -1){
            cls = 'error'
        } else if (!st){
            cls = 'loading'
        }
        var ckStatus = data.isUsed === 0? '':'checked="checked"';
        var trId = "ptr";
        dom +='<tr id="'+ trId + j +'" class="'+ cls +'"><td class="tbId">'
            + data.id + '<a  class="tbUrl" target="_blank" href="'+ data.url +'">&nbsp;</a></td><td class="tbDirection">'
            + data.direction + '</td><td class="tbLeft" >'
            + data.left + '</td><td class="tbTop">'
            + data.top + '</span></td><td class="ckInput"><input id="ckInput"'+ ckStatus +' type="checkbox"></td></tr>';
    }
    this._$containerBody.empty().append(dom);
    var _this = this;
    setTimeout(function (){
        _this.setTableHeight();
    },0)
    this._setListenerEvent();
    return this;
};
/**
 * @name TableView#selectRow
 * @desc 选择某行
 * @public
 * @function
 * @param {Number} rowIndex 行号
 * @return {TableView} 当前实例对象
 * */
TableView.prototype.selectRow = function (rowIndex) {
    this._driver.selectData(rowIndex);
    var data = this._driver.getDataByRowIndex(rowIndex);
    var grid = data.pointImageInfo.grid;
    var offset = data.pointImageInfo.offset;
    var _this = this;

    /**/
    return this;
};
/**
 * @name TableView#updateRow
 * @desc 更新某行
 * @public
 * @function
 * @param {Number} rowIndex 行号
 * @param {Number} left 删格图的左边距离
 * @param {Number} top  删格图的顶部距离
* @param {String} url  删格图的地址
 * */
TableView.prototype.updateRow = function (rowIndex,left,top,url){
    this._removeRowClass(rowIndex,'right');
    this._removeRowClass(rowIndex,'error');
    this._addRowClass(rowIndex,'loading');
    this._addRowClass(rowIndex,'afterChanges');
    this._$containerBody.find("#ptr"+rowIndex).find(".tbLeft").html(left);
    this._$containerBody.find("#ptr"+rowIndex).find(".tbTop").html(top);
    this._$containerBody.find("#ptr"+rowIndex).find(".tbUrl").attr("href",url);
};
/**
 * @name TableView#updateSelectRow
 * @desc 更新选中行
 * @public
 * @function
 * @param {Number} rowIndex 行号
 * @return {TableView} 当前实例对象
 * */
TableView.prototype.updateSelectRow = function (rowIndex){
    this._addRowClass(rowIndex,'on');
    var lastArr = this._lastNumArr;
    lastArr.push(rowIndex);
    this._lastRowIndex = lastArr.shift();
    if(this._lastRowIndex!== rowIndex){
        this._removeRowClass(this._lastRowIndex,'on');
    }
    this._rowIndex = rowIndex;
}
/**
 * @name TableView#_updateState
 * @desc 更新检查状态
 * @public
 * @function
 * @return {TableView} 当前实例对象
 * */
TableView.prototype.updateState = function (data){
    var checkStatus = data.checkStatus;
    var rowIndex = data.rowIndex;
    this._removeRowClass(rowIndex,"loading");
    this._removeRowClass(rowIndex,"right");
    this._removeRowClass(rowIndex,"error");
    if(checkStatus === -1){
        this._addRowClass(rowIndex,"error");
    }else if(checkStatus === 1) {
        this._addRowClass(rowIndex,"right");
    }
}
/**
 * @name TableView#updateOneState
 * @desc 更新检查状态
 * @public
 * @function
 * @return {TableView} 当前实例对象
 * */
TableView.prototype.updateOneState = function (data){
    var checkStatus = data.checkStatus;
    var rowIndex = data.rowIndex;
    this._removeRowClass(rowIndex,"loading");
    this._removeRowClass(rowIndex,"right");
    this._removeRowClass(rowIndex,"error");
    if(checkStatus === -1){
        this._addRowClass(rowIndex,"error");
    }else if(checkStatus === 1) {
        this._addRowClass(rowIndex,"right");
    }
}
/**
 * @name TableView#_showClass
 * @desc 显示此标签
 * @private
 * @function
 * */
TableView.prototype._showClass = function (rowIndex) {
    this._$containerBody.find("tr").eq(rowIndex).show();
    return this;
};
/**
 * @name TableView#_hideClass
 * @desc 显示此标签
 * @private
 * @function
 * */
TableView.prototype._hideClass = function (rowIndex) {
    this._$containerBody.find("tr").eq(rowIndex).hide();
    return this;
};
/**
 * @name TableView#_setItemClass
 * @desc 为行添加样式
 * @private
 * @function
 * @param {Number} rowIndex 页码
 * @param {String} cls 样式名称
 * @return {TableView} 当前实例对象
 * */
TableView.prototype._addRowClass = function (rowIndex, cls) {
    this._$containerBody.find("tr").eq(rowIndex).addClass(cls);
    return this;
};
/**
 * @name TableView#_removeItemClass
 * @desc 从行上移除样式
 * @private
 * @function
 * @param {Number} rowIndex 页码
 * @param {String} cls 样式名称
 * @return {TableView} 当前实例对象
 * */
TableView.prototype._removeRowClass = function (rowIndex, cls) {
    this._$containerBody.find("tr").eq(rowIndex).removeClass(cls);
    return this;
};
TableView.prototype.setScroll = function () {
    var bodyTop = this._$containerTBContent.offset().top;

    var trIdNum = this._rowIndex;
    var trHeight = this._trHeight;
    var _height = this._height;
    //var downIndexHeight = trHeight * (trIdNum + 2);
    var  scrollContainer = this._$containerTBContent.get(0);
    //var s = $("#ptr"+trIdNum).offset().top - scrollContainer.scrollTop;
    var sTop = scrollContainer.scrollTop;
    //第一个单元格距离浏览器窗口的距离
    var firstTrTop = this._tbBody.offset().top;
    //单元格距离浏览器窗口的距离
    var trTp = $("#ptr"+trIdNum).offset().top;
    if(trTp + trHeight > _height + bodyTop) {
        var s = trTp - firstTrTop  - _height  - sTop + trHeight;
        scrollContainer.scrollTop += s;
    }
    if(trTp < bodyTop) {
        var s = bodyTop - trTp;
        scrollContainer.scrollTop -= s;
    }


    /*if(showHeight > 0) {
    } else {
        //crollContainer.scrollTop =
    }*/

    /*var upIndexHeight = trHeight * (trIdNum + 1);
    if (downIndexHeight > _height + scrollContainer.scrollTop - 1) {
        scrollContainer.scrollTop = downIndexHeight - _height;
        if(this._lastRowIndex > this._rowIndex) {
            scrollContainer.scrollTop = (trIdNum) * trHeight;
        }
    }
    if(upIndexHeight < scrollContainer.scrollTop) {
        scrollContainer.scrollTop = (trIdNum) * trHeight;
        if (downIndexHeight > _height + scrollContainer.scrollTop - 1) {
            scrollContainer.scrollTop = downIndexHeight - _height;
        }
    }*/
};
TableView.prototype.empty = function () {
    return this;
};
/**
 * @name TableView#used
 * @event
 * @param {Object} data
 * @param {Boolean} data.isUsed 行的勾选状态
 * @desc 行的勾选状态发生变化时，抛出此事件
 */
/**
 * @name TableView#select
 * @event
 * @param {Object} data
 * @param {Boolean} data.rowIndex 行索引
 * @desc 行的选中时，抛出此事件
 */

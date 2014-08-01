/**
 * @class 数据驱动类
 * @name DataDriver
 * @param {Number} pageSize  每页数据条数。必选
 * @constructor
 * */
var DataDriver = function (pageSize) {
    /**
     * 缓存数据集合
     * @type Array
     * @private
     * */
    this._dataArr = [];
    /**
     * 数据总数
     * @type Number
     * @private
     * */
    this._count = this._dataArr.length;
    /**
     * 当前页面编号（页码）
     * @type Number
     * @private
     * */
    this._pageNum = 1;
    /**
     * 数据片段长度
     * @type Number
     * @private
     * */
    this._pageSize = pageSize;
    /**
     * 当前的数据片段长度
     * @type Number
     * @private
     * */
    this._length = null;

    /**
     * 当前被选中的数据索引值
     * */
    this.index = null;
    /**
     * 数据库名称
     * */
    this._db = 0;
    /**
     * 是否是严格检查
     */
    this.isStrict = false;
    this.isOnlyError = false;
};
/**
 * @name DataDriver#setDataArr
 * @desc 设置数据集合
 * @public
 * @function
 * @param {Array} dataArr
 * */
DataDriver.prototype.setDataArr = function (dataArr){
    if(dataArr instanceof Array) {
        this._dataArr = dataArr;
        this._count = dataArr.length;
        $(this).trigger("getData",this._count);
    }
};
/**
 * @name DataDriver#setCurPage
 * @desc 设置当前页
 * @public
 * @function
 * @param {Number} pageNum 页码
 * */
DataDriver.prototype.setCurPage = function (pageNum) {
    pageNum = pageNum === undefined ? 1 : pageNum;
    this._pageNum = pageNum;
    var ps = this._pageSize;
    var sIndex = (pageNum -1) * ps;
    var pageCount = this.getPageCount();
    var eIndex = this._pageNum === pageCount && this.getCount() % ps ? (this.getCount() % ps + sIndex) : (ps + sIndex);
    this._length = eIndex - sIndex;
    $(this).trigger('switch', [sIndex, eIndex]);
    this.index = null;
    for(var i = sIndex; i < eIndex; i++) {
       this.checkData(i,false, this.isStrict);
        var data = this.getData(i);
        var row = this.getRowIndex(i);
        var isUsed = data.isUsed;
        $(this).trigger("upload",{rowIndex: row,isUsed: isUsed});
    }
};
/**
 * @name DataDriver#getFirstPoint
 * @desc 取得point
 * @public
 * @function
 * @param {Number} index
 * @returns {BMap.Point}或null
 * */
DataDriver.prototype.getPoint = function (index) {
    index = index === undefined ? this.index : index;
    return index === null ?  null : this._dataArr[index].bdpoint;
}
 /**
 * @name DataDriver#getPageSize
 * @desc 取得数据片段长度
 * @public
 * @function
 * */
DataDriver.prototype.getPageSize = function () {
    return this._pageSize;
}
/**
 * @name DataDriver#_selectAbsoluteData
 * @desc 选择某条数据
 * @private
 * @function
 * @param {Number} index 指定下标
 * */
DataDriver.prototype._selectAbsoluteData = function (index) {
    return this._dataArr[index];
};
/**
 * @name DataDriver#selectData
 * @desc 选择某条数据
 * @public
 * @function
 * @param {Number} rowIndex 行索引
 * */
DataDriver.prototype.selectData = function (rowIndex) {
    if(rowIndex === -1){
        return;
    };
    this.index = this._getIndex(rowIndex);
    var data = this._dataArr[this.index];
    var bdpoint = data.bdpoint;
    var cs = data.checkStatus;
    if(cs != 0) {
        $(this).trigger("select",{rowIndex:rowIndex,bpoint:bdpoint,checkState:cs});
    }
};
/**
 * @name DataDriver#updateData
 * @desc 更新数据，并重新检查(更新一条,地图打点时调用) 抛出更新事件 update
 * @public
 * @function
 * @param {BMap.Point} bpoint 新数据，百度地图的地理坐标
 * @param {Number} zoom 地图的级别
 * */
DataDriver.prototype.updateData = function (bpoint,zoom){
    if(this.index === null) {
        return;
    }
    var pointImageInfo = tmcTool.getImageInfo(bpoint,zoom);
    var left = pointImageInfo.offset.left;
    var top = pointImageInfo.offset.top;
    var url = pointImageInfo.trafficImg;
    this._dataArr[this.index].bdpoint = bpoint;
    this._dataArr[this.index].point = tmcTool.BD2GCJ(bpoint.lng, bpoint.lat);
    this._dataArr[this.index].pointImageInfo = pointImageInfo;
    $(this).trigger("update",{index:this.index, rowIndex:this.getRowIndex(),left: left,top: top,url: url});
    this.checkData(this.index, true, true);
};
/**
 * @name DataDriver#getZoom
 * @desc 取数据的zoom
 * @public
 * @function
 * */
DataDriver.prototype.getZoom = function (){
    var fistData = this._dataArr[0];
    return fistData ? fistData.pointImageInfo.grid.z : null;
};
/**
 * @name DataDriver#updateUsed
 * @desc 更新数据是否可用 并抛出事件
 * @public
 * @function
 * @param rowIndex 数据片段索引
 * @param isUsed 是否可用 1 可用 0 不可用
 * */
DataDriver.prototype.updateUsed = function (rowIndex,isUsed,subNum){
    var index = this._getIndex(rowIndex);
    var data = this._dataArr[index];
    data.isUsed = isUsed;
    $(this).trigger("cbCheck",{index: index, rowIndex: rowIndex,isUsed: isUsed,subNum:subNum});
    dataTool.update(index,data);
};
/**
 * @name DataDriver#nextData
 * @desc 选择下一条数据
 * @public
 * @function
 * */
DataDriver.prototype.nextData = function () {
    var min = (this._pageNum - 1)* this._pageSize;
    var max = min + this._length;
    var _index = this.index;
    var index = _index === null ? (min - 1) : _index;
    var j = 0;
    while (index < max) {
        index++;
        j++;
        if (index >= max) {
            index = min - 1;
            continue;
        }
        var arr = this.getData(index);
        if(arr.checkStatus ===1) {
          continue;
        };
        if (arr && arr.checkStatus) {
            break;
        }

        if(j >= 2 * this._length){
            break;
        }
    }
    this.index = index;
    var rowIndex = this.getRowIndex();
    this.selectData(rowIndex);
};
/**
 * @name DataDriver#preData
 * @desc 选择上一条数据
 * @public
 * @function
 * */
DataDriver.prototype.preData = function () {
    //var last = this.pageNum === page.pageTotle ? totle % page.pageSize : page.pageSize;
    var index = this.index;
    var min = (this._pageNum - 1)* this._pageSize;
    var max = min + this._length;
    while (index >= min) {
        index--;
        if (index < min) {
            index = max - 1;
        }
        if (this.getData(index).checkStatus) {
            break;
        }
    }
    this.index = index;
    var rowIndex = this.getRowIndex();
    this.selectData(rowIndex);
};

/**
 * @name DataDriver#_checkDate
 * @desc 抛出检测后状态事件
 * @param i
 * @param single true单个检查 false或undefined 批量检查
 * @private
 */
DataDriver.prototype.checkData = function (i, single, isStrict) {
    var data = this.getData(i);
    var checkStatus = data.checkStatus;
    var row = this.getRowIndex(i);
    /*$(this).trigger("upload",{rowIndex:row,isUsed:isUsed});*/
    if(single || !checkStatus){
        this._checkData(data,i,isStrict)
    } else {
        $(this).trigger("readStatus",{checkStatus: checkStatus,rowIndex: row,lastCheckStatus:0});
    }
}
/**
 * 检测
 * @param data
 * @param i
 * @private
 */
DataDriver.prototype._checkData =  function  (data,i,isStrict)  {
    var _this = this;
    var lastCheckStatus = data.checkStatus;
    tmcTool.checkAccuracy(data.pointImageInfo,  (function (i){
        return function (foo){
            var row = _this.getRowIndex(i);
            var checkStatus;
            if(foo){
                checkStatus = 1;
            } else {
                checkStatus = -1;
            }
            _this._dataArr[i].checkStatus = checkStatus;
            if(_this.getPageNum(i) === _this._pageNum){
                $(_this).trigger('checkStatus', {rowIndex : row, index : i,checkStatus: checkStatus,lastCheckStatus: lastCheckStatus});
            }
            //添加到数据库
            dataTool.update(i,data);
        }
    })(i),isStrict);
}

/**
 * @name DataDriver#getPageNum
 * @desc 获取当前页码
 * @public
 * @function
 * @param i i不存在取当前的pageNum,存在取当前数的pageNum
 * @return {Number}
 * */
DataDriver.prototype.getPageNum = function (i) {
    return i === undefined ? this._pageNum : (i - i % this._pageSize) / this._pageSize + 1;
};
/**
 * @name DataDriver#getPageCount
 * @desc 获取总页数
 * @public
 * @function
 * @return {Number}
 * */
DataDriver.prototype.getPageCount = function () {
    return  Math.ceil(this._count / this._pageSize);
};
/**
 * @name DataDriver#getCount
 * @desc 获取总数
 * @public
 * @function
 * @return {Number}
 * */
DataDriver.prototype.getCount = function () {
    return this._count;
};
/**
 * @name DataDriver#getData
 * @desc 获取指定下标取数据
 * @public
 * @function
 * @param {num} index 指定下标（数组索引值，绝对下标） 或者行索引
 * @return {Object} 数据缓存中的一项
 * */
DataDriver.prototype.getData = function (index) {
    /*var data;
    if(index.index !== undefined){
        data = this._dataArr[index.index];
    }else if(index.rowIndex !== undefined){
        var num = this._getIndex(index.rowIndex);
        data = this._dataArr[num];
    }else if(index !== undefined){
        data = this._dataArr[this._index];
    }*/
    return this._dataArr[index];
};
/**
 * 根据RowIndex取data
 * @param RowIndex
 */
DataDriver.prototype.getDataByRowIndex = function (RowIndex) {
    var index = this._getIndex(RowIndex);
    return this._dataArr[index];
}
/**
 * @name DataDriver#getTableData
 * @desc 获取table显示的内容指定下标取数据
 * @public
 * @function
 * @param {Number} index 指定下标（数组索引值，绝对下标）
 * @return {Array}
 * @example
 * <pre>
 *     ['mid', 'dire', 'left', 'top','checkStatus','isUsed']
 * </pre>
 * */
DataDriver.prototype.getTableData = function (index) {
    var data = this.getData(index);
    var p = {
        id:data.id,
        direction:data.direction,
        left:data.pointImageInfo.offset.left,
        top:data.pointImageInfo.offset.top,
        checkStatus:data.checkStatus,
        isUsed:data.isUsed,
        url:data.pointImageInfo.trafficImg
    };
    return p;
};
/**
 * @name DataDriver#getRowIndex
 * @desc 从数组的绝对索引获取行索引
 * @public
 * @function
 * @param {Number} index 数据索引
 * @return {Number}
 * */
DataDriver.prototype.getRowIndex = function (index) {
    index = index === undefined ? this.index : index;
    return index % this._pageSize;
};
/**
 * @name DataDriver#_getIndex
 * @desc 从行索引获取数据的绝对索引
 * @private
 * @function
 * @param {Number} rowIndex 行索引
 * @return {Number}
 * */
DataDriver.prototype._getIndex = function (rowIndex) {
    return  (this._pageNum - 1) * this._pageSize + rowIndex;
};
/**
 *  @name DataDriver#_calculatePagteNum
 *  @desc 根据数组索引，计算所属页
 *  @param {Number} index 数据索引
 *  @return {Number}
 * */
DataDriver.prototype._calculatePageNum = function (index) {
    index++;
    return Math.ceil(index / this._pageSize);
};
/**
 * @name DataDriver#finalize
 * @desc 释放资源
 * @public
 * @function
 * */
DataDriver.prototype.finalize = function () {};

/**
 * @name DataDriver#switch
 * @event
 * @param {Object} data
 * @param {Number} data.sIndex 起点索引值（绝对下标）
 * @param {Number} data.eIndex 终点索引值（绝对下标）
 * @param {Number} data.pageNum 当前页码
 * @param {Number} data.count 当前页的数据总数
 * @desc 切换数据时，抛出此事件
 */

/**
 * @name DataDriver#check
 * @event
 * @param {Object} data
 * @param {Number} data.checkState 数据正确性状态值
 * @param {Number} data.rowIndex 发生变化的数据表格索引值（所在当前页的行号）
 * @param {Number} data.pageNum 当前页码
 * @desc 当检查完成时，抛出此事件
 */

/**
 * @name DataDriver#cbCheck
 * @event
 * @param {Number} data
 * @param {Number} data.isUsed 数据正确性状态值
 * @param {Number} data.rowIndex 发生变化的数据表格索引值（所在当前页的行号）
 * @param {Number} data.pageNum 当前页码
 * @desc 单击checkbox，抛出此事件
 */

/**
 * @name DataDriver#update
 * @event
 * @param {Object} data
 * @param {Number} data.checkState 数据正确性状态值
 * @param {Number} data.rowIndex 发生变化的数据表格索引值（所在当前页的行号）
 * @param {Number} data.pageNum 当前页码
 * @desc 当更新数据，抛出此事件
 */
/**
 * @name DataDriver#select
 * @event
 * @desc 数据被选中时，抛出此事件
 * @param {Object} data
 * @param {Number} data.rowIndex 发生变化的数据表格索引值（所在当前页的行号）
 * @param {BMap.Point} data.bpoint 百度地图坐标
 * @param {Number} data.checkState 数据正确性状态值
 * */
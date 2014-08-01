/**
 *
 * @
 * @constructor
 */
function TreeTable () {
    this._dataDrive = null;
    this._dom = null;
    /**
     * 储存上一次的行号
     * @type {Array}
     * @private
     */
    this._lastNumArr = [0];
    this._init();
};
TreeTable.prototype.setDataDrive = function (data) {
    this._dataDrive = data;
};
TreeTable.prototype.setDom = function (dom) {
    this._dom = dom;
};
TreeTable.prototype._init = function () {
    //var data = this.data;
}
TreeTable.prototype.fill = function () {
    var dom = this._dom;
    var data = this._dataDrive.dataArr;
    var html = "";
    data.forEach(function (v,i) {
        html+= '<li><span _pic="'+ i +'_">'+ (i+1)+'. '+ v.url.replace("http://its.map.baidu.com:8002/traffic/TrafficTileService?","") +' <a href='+ v.url +' target ="_blank">查看</a> </span><ul>';
        v.point.forEach(function (y,j) {
            html+= '<li><span _pic="'+ i + '_' + j +'">'+ y.id+ ', ' + y.direction+ ', ' +y.left+ ', ' + y.top+'</span></li>';
        });
        html+="</ul></li>";
    });
    dom.html(html);
    dom.treeview({collapsed: true});
    this._event();
};
TreeTable.prototype._event = function () {
    //var picDom = this._dom.children("li");
    var spanPic = $("span[_pic]");
    var _this = this;
    spanPic.bind("click",function (){
        var picIndex = $(this).attr("_pic");
        var pos = picIndex.split("_");
        var picNum = parseInt(pos[0]);
        var pointNum = parseInt(pos[1]);
        _this.selectRow(picNum,pointNum);
    });
}
TreeTable.prototype.selectRow = function (picNum,pointNum) {
    if(isNaN(pointNum)) {
        this._dataDrive.selectPic(picNum);
        pointNum = '';
    } else {
        this._dataDrive.selectPoint(picNum,pointNum);
    }
    var index = picNum + '_'+ pointNum;
    //var spanPic = $('span[_pic='+ index +']');
    this.toggle(index);
};

TreeTable.prototype.toggle = function  (rowIndex) {
    var sel = "selected";
    this._addRowClass(rowIndex,sel);
    var lastArr = this._lastNumArr;
    lastArr.push(rowIndex);
    this._lastRowIndex = lastArr.shift();
    if(this._lastRowIndex!== rowIndex){
        this._removeRowClass(this._lastRowIndex,sel);
    }
    this._rowIndex = rowIndex;
}
TreeTable.prototype._addRowClass = function (rowIndex, cls) {
    $('span[_pic='+ rowIndex +']').addClass(cls);
    return this;
};
TreeTable.prototype.checkStart = function () {
    this._addRowClass(this._dataDrive.picIndex+"_",'loading');
    //$('span[_pic='+ this.picIndex+ '_' +']').addClass("loading")
}
TreeTable.prototype.checkEnd = function () {
    this._removeRowClass(this._dataDrive.picIndex+"_","loading");
}

TreeTable.prototype._removeRowClass = function (rowIndex, cls) {
    $('span[_pic='+ rowIndex +']').removeClass(cls);
    return this;
};
function DataDrive (pageSize) {
    this.dataArr = [{url:null,point:null}];
    this.picIndex = null;
    this.pointIndex = null;
    this.pageSize = null;
    this._pageNum = null;
    this._pageSize = pageSize;
    this.pointNum = null;
}
/**
 *
 * @param left
 * @param top
 */
DataDrive.prototype.changePoint = function (left,top) {
    var point = this.dataArr[this.picIndex].point[this.pointIndex];
    point.left = left;
    point.top = top;
    //$(this).trigger("chagePoint",[left,top]);
}
DataDrive.prototype.getPicData = function () {
    return this.dataArr[this.picIndex];
}
DataDrive.prototype.selectPic = function (rowIndex) {
    this.picIndex = rowIndex;
    var index = this.getIndex(rowIndex);
    $(this).trigger("picSelect");
};
DataDrive.prototype.selectPoint = function (picIndex,pointIndex) {
    this.picIndex = picIndex;
    this.pointIndex = pointIndex;
    $(this).trigger("pointSelect");
};
DataDrive.prototype.getIndex = function (rowIndex) {
    return  (this._pageNum - 1) * this._pageSize + rowIndex;
}
DataDrive.prototype.getRowIndex = function (index) {
    index = index === undefined ? this.index : index;
    return index % this._pageSize;
}
/**
 * @name DataDrive#picSelect
 * @desc 选中图片时触发此事件
 * @event
 */


function DataDrive () {
    this.dataArr = [{url:null,point:null}];
    this.picIndex = null;
    this.pointIndex = null;
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

function BasicCanvas () {
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');
  this._init();
}
BasicCanvas.prototype._init = function () {
    this.canvas.width = 256;
    this.canvas.height = 256;
};
BasicCanvas.prototype.hitPoint = function (x,y,img) {
    this.ctx.clearRect(0, 0, 256, 256);
    this.ctx.drawImage(img, 0, 0);
    this.ctx.fillStyle="#FF0000";  //填充的颜色
    this.ctx.strokeStyle="000";  //边框颜色
    this.ctx.linewidth = 0;  //边框宽
    this.ctx.fillRect(x,y,1,1);  //填充颜色 x y坐标 宽 高
    this.ctx.strokeRect(x, y,1,1);  //填充边框 x y坐标 宽 高
}

function BasicCanvas () {
  this.canvas = document.getElementById('scanvas');
  this.ctx = this.canvas.getContext('2d');
}
BasicCanvas.prototype.hitPoint = function (x,y,imageData) {
    this.ctx.clearRect(0, 0, 256, 256);
    //this.ctx.drawImage(img, 0, 0);
    this.ctx.putImageData(imageData,0,0);
    var boo = tools.checkPixel(x,y,imageData);
    var cl = boo ? "blue" : 'red';
    this.ctx.strokeStyle= cl;  //边框颜色
    this.ctx.linewidth = 0;  //边框宽
    this.ctx.fillRect(x,y,1,1);  //填充颜色 x y坐标 宽 高
    this.ctx.strokeRect(x, y,1,1);  //填充边框 x y坐标 宽 高
}

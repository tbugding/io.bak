var fs = require('fs');
var dataDrive = new DataDrive();

var treeTable = new TreeTable();
var imageDb = new CacheHelper("imageData", 0);
var myImageData = null;
var myPoint, dom_baring;
imageDb.init(function () {
    this.opened = true;
});
var imgArr = [];
$(dataDrive).bind("picSelect", function () {
    var arr = dataDrive.getPicData();
    //var key = parseInt(dataDrive.picIndex);
    dataDrive.pointIndex = null;
    var result = imgArr[dataDrive.picIndex];
    if (result) {
        setTimeout(function () {
            updataCk(arr, result);
        }, 200);
    } else {
        treeTable.checkStart();
        tools.getImageData(arr.url, function (data) {
            if (data) {
                myImageData = data;
                imgArr[dataDrive.picIndex] = data;
                //imageDb.add(parseInt(dataDrive.picIndex), data);
                updataCk(arr, data);
            }
            treeTable.checkEnd();
        });
    }
    /*imageDb.get(key, function (data) {
     var result = data.result;
     if (result) {
     myImageData = result.value;
     updataCk(arr, result.value);
     console.timeEnd("domChange");
     } else {
     treeTable.checkStart();

     tools.getImageData(arr.url, function (data) {
     if (data) {
     myImageData = data;
     imgArr[dataDrive.picIndex] = data;
     imageDb.add(parseInt(dataDrive.picIndex), data);
     updataCk(arr, data);
     }
     treeTable.checkEnd();
     });
     }
     });*/
});
function updataCk(arr, imageData) {
    arr.point.forEach(function (v, j) {
        var index = dataDrive.picIndex + "_" + j;
        var foo = tools.checkPixel(v.left, v.top, imageData);
        var checked = foo ? "right" : "error";
        $('span[_pic=' + index + ']').removeClass(checked);
        $('span[_pic=' + index + ']').addClass(checked);
    });
}
$(dataDrive).bind("pointSelect", function () {
    var key = parseInt(dataDrive.picIndex);
    var pointIndex = parseInt(dataDrive.pointIndex);
    if (isNaN(pointIndex)) {
        onsole.log(2323424);
        return false;
    }
    myPoint = dataDrive.dataArr[key].point[pointIndex];
    myImageData = imgArr[key];
    myCanvas.hitPoint(myPoint.left, myPoint.top, myImageData);
    /*imageDb.get(key, function (data) {
        var result = data.result;
        if (!result) {
            return false;
        }
        myImageData = result.value;
        myCanvas.hitPoint(myPoint.left, myPoint.top, result.value);
    });*/
});
var mycanvas, myctx;
function createCanvas() {
    if (!mycanvas) {
        mycanvas = document.createElement('canvas');
        mycanvas.width = 256;
        mycanvas.height = 256;
        myctx = mycanvas.getContext('2d');
    }
}
function _toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}
var mydata;
var events = function () {
    $(".dataTop li").bind("click", function () {
        var index = $(this).index();
        winform.toStep(index);
    });
    $("#attachData").bind("click", function () {
        loadingPlugis.start();
        setTimeout(function () {
            mydata = tools.createArr($("#mbData"));
            winform.toStep(1);
            dataDrive.dataArr = mydata;
            var len = mydata.length;
            dom_baring.attr("max", len);
            publicFuc.analyze();
            imageDb.clear(function () {
                loadingPlugis.end();
                $("#totle").html(dataDrive.pointNum);
                setTimeout(function () {
                    var index = 0, len = mydata.length;
                    var dom_error = $("#errorNum");
                    var dom_right = $("#rightNum");
                    //var dom_checked = $("#txt_checked");
                    var dom_baring = $("#baring");
                    var dom_numValue = $("#numValue");
                    dom_baring.attr("max", len);
                    var errorNum = 0;
                    var noshowPhoto = 0;
                    var rightNum = 0;
                    var checkedNum = 0;
                    var ps = 30;
                    var index = 0;
                    //分批请求和次数
                    var times = 0;
                    var count = 0;
                    //重新请求
                    //var repeat = 0;
                    function one() {
                        mydata.slice(index, index + ps).forEach(function (obj, i) {
                            var url = obj.url;
                            //var fileName = url.match(/x=[\d]+/g)[0].replace(/x=/, '') + '-' + url.match(/y=[\d]+/g)[0].replace(/y=/, '') + '-' + url.match(/level=[\d]+/g)[0].replace(/level=/, '');
                            //console.log(fileName);
                            var curNum = i + ps * times;
                            $("li" + curNum).className = 'loading';
                            //请求完成的处理
                            function filish(re, curNum) {
                                //dom_baring.attr("value", count);
                                createCanvas();
                                var b = new Buffer(re, 'binary');
                                var imageData = _toArrayBuffer(b);
                                var _blob = new Blob(new Array(imageData), { type: "image/png" });
                                var _url = URL.createObjectURL(_blob);
                                var _img = new Image();
                                var imgData;
                                //console.log(imgData);
                                _img.onload = function () {
                                    myctx.clearRect(0, 0, 256, 256);
                                    myctx.drawImage(this, 0, 0);
                                    URL.revokeObjectURL(_url);
                                    imgData = myctx.getImageData(0, 0, 256, 256);
                                    //callback(imgData);
                                    var ew = "";
                                    //console.log(imgData);
                                    if (imgData) {
                                        imgArr[curNum] = imgData;
                                        //imageDb.add(curNum, imgData);
                                        //console.log(imageData);
                                        obj.point.forEach(function (v, j) {
                                            //var ind = myIndex + "_" + j;
                                            var foo = tools.checkPixel(v.left, v.top, imgData);
                                            if (foo) {
                                                rightNum++;
                                            } else {
                                                errorNum++;
                                            }
                                            checkedNum++;
                                        });
                                    } else {
                                        $('span[_pic=' + curNum + '_' + ']').addClass("error");
                                        noshowPhoto++;
                                    }
                                    $('span[_pic=' + curNum + '_' + ']').removeClass("loading");
                                    if (ls === len) {
                                        dom_right.html(rightNum);
                                        dom_error.html(errorNum);
                                        $("#error_photo").html(noshowPhoto);
                                        $("#photoTotle").html(len);
                                    }
                                };
                                _img.src = _url;
                                _img.onerror = function () {
                                    //callback();
                                    $('span[_pic=' + curNum + '_' + ']').addClass("error");
                                    noshowPhoto++;
                                    if (ls === len) {
                                        dom_right.html(rightNum);
                                        dom_error.html(errorNum);
                                        $("#error_photo").html(noshowPhoto);
                                        $("#photoTotle").html(len);
                                    }
                                };
                                var ls = count + 1;
                                dom_baring.attr("value", ls);
                                dom_numValue.html(Math.floor(ls / len * 100) + '%');
                                if (++count % ps === 0) {
                                    index = ++times * ps;
                                    one();
                                }
                            }

                            //重新请求
                            var repeat = 0;
                            var reqpeatRequest = function (url, curNum) {
                                var stop = 0;
                                repeat++;
                                var req = http.get(url,function (res) {
                                    res.setEncoding('binary');
                                    //二进制（binary）
                                    var imageData = '';
                                    res.on('data',function (data) {
                                        //图片加载到内存变量
                                        imageData += data;
                                    }).on('end', function () {
                                            //加载完毕保存图片
                                            //console.log(imageData)
                                            //repeat = 0;
                                            if (!stop) {
                                                filish(imageData, curNum);
                                            } else {
                                                if (repeat < 5) {
                                                    reqpeatRequest(url, curNum);
                                                } else {
                                                    dom_baring.attr("value", count + 1);
                                                    if (++count % ps === 0) {
                                                        index = ++times * ps;
                                                        one();
                                                        //ew = 'pageup9';
                                                    }
                                                }
                                            }
                                        })
                                }).on("error", function (e) {
                                        //repeat++;
                                        if (repeat < 5) {
                                            reqpeatRequest(url, curNum);
                                        } else {
                                            dom_baring.attr("value", count);
                                            if (++count % ps === 0) {
                                                index = ++times * ps;
                                                one();
                                                //ew = 'pageup9';
                                            }
                                        }
                                    });
                                req.setTimeout(20000, function () {
                                    req.abort();
                                    stop = 1;
                                });
                            };
                            (function (stop) {
                                var req = http.get(url,function (res) {
                                    res.setEncoding('binary');//二进制（binary）
                                    var imageData = '';
                                    res.on('data',function (data) {
                                        //图片加载到内存变量
                                        imageData += data;
                                    }).on('end', function () {
                                            if (!stop) {
                                                filish(imageData, curNum);
                                            } else {
                                                reqpeatRequest(url, curNum);
                                            }
                                        });
                                }).on("error", function (e) {
                                        reqpeatRequest(url, curNum);
                                        //fs.appendFileSync('logo.txt', curNum + " " + url + e.message  + ' count ' + count + ' repeat ' + repeat + '  请求' + repeat + '次  error\n');
                                    });
                                req.setTimeout(20000, function () {
                                    req.abort();
                                    stop = 1;
                                });
                            })(0);
                        });
                    }

                    one();
                }, 100)
            });
        }, 10);
    });
    treeTable.setDom($("#browser"));
    myCanvas.canvas.addEventListener("click", function (e) {
        var pointIndex = dataDrive.pointIndex;
        if (dataDrive.dataArr &&typeof pointIndex === 'number' ) {
            var picIndex = dataDrive.picIndex;
            //console.log("第" + (index + 1) + "张图片", "第" + (j + 1) + "个点");
            var boo = tools.checkPixel(e.offsetX, e.offsetY, myImageData);
            myCanvas.hitPoint(e.offsetX, e.offsetY, myImageData);
            myPoint.left = e.offsetX;
            myPoint.top = e.offsetY;
            var dom = $('span[_pic=' + picIndex + '_' + pointIndex + ']');
            dom.html(myPoint.id + ", " + myPoint.direction + ", " + myPoint.left + ", " + myPoint.top);
            dom.removeClass("right").removeClass("error");
            var vClass = boo ? "right" : "error";
            dom.addClass(vClass);
        }
    }, false);
    //放大
    $("#zoomIn").bind("click", function () {
        zoomInCanvas();
    });
    //缩小
    $("#zoomOut").bind("click", function () {
        zoomOutCanvas();
    });
    $("#outPutData").bind("click", function () {
        loadingPlugis.start();
        setTimeout(function () {
            var html = "";
            var picArr = dataDrive.dataArr;
            picArr.forEach(function (sg, i) {
                var url = sg.url.replace(/\d+$/g, "$time$");
                html += url + '\n';
                var pointArr = sg.point;
                pointArr.forEach(function (pt, j) {
                    html += pt.id + ',' + pt.direction + ',' + pt.left + ',' + pt.top + '\n'
                })
            });
            $("#outputTXTData").val(html);
            winform.toStep(2);
            loadingPlugis.end();
        }, 100)

    });
    $(document).bind('keydown', function (evt) {
        var kc = evt.keyCode;
        if (kc === 187 || kc === 107) {
            zoomInCanvas();
        } else if (kc === 189 || kc === 109) {
            zoomOutCanvas();
        }
    });
};
var zoom = 2;
function zoomOutCanvas() {
    if (zoom > 1) {
        $("#scanvas").css({"-webkit-transform": "scale(" + --zoom + ")"});
    }
}
function zoomInCanvas() {
    $("#scanvas").css({"-webkit-transform": "scale(" + ++zoom + ")"});
}

var myCanvas, dom_treeViewContent;
$(function () {
    dom_baring = $("#baring");
    myCanvas = new BasicCanvas();
    events();
    dom_treeViewContent = $("#treeViewContent");
    dom_treeViewContent.height(document.documentElement.clientHeight - 200);
});

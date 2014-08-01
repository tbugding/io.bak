var Dom = {};
var myCanvas, myImageData;
var dDriver = new DataDriver(500);
var $dDriver = $(dDriver);
var mMap, tableView, numberView, $numberView, countView, buttomView;
var Kbfunction = {
    //从文本框中取得数据并添加数据到数据库
    analyze: function () {
        var domData = Dom.mbData.get(0);
        var data;
        if (initConstant.dataMode) {
            data = dataTool.getDataFromReverse(domData);
        } else {
            var zoom = parseInt(Dom.changLevel.val());
            data = dataTool.getDataFromContainer(domData, zoom);
        }
        if (data && data.length !== 0) {
            dataTool.clear(function () {
                dataTool.add('all', data);
                getDate(data);
            });
        } else {
            alert('数据不能为空！');
        }
    },
    //输出
    outPutData: function () {
        loadingPlugis.start();
        setTimeout(function () {
            showStep(3);
            var SourceArr = [], str = "", exDataNum = 0, len = dDriver.getCount();
            for (var i = 0; i < len; i++) {
                var _fd = dDriver.getData(i);
                if (_fd.isUsed) {
                    exDataNum++;
                    var top = _fd.pointImageInfo.offset.top;
                    var left = _fd.pointImageInfo.offset.left;
                    var tbId = _fd.id;
                    var url = _fd.pointImageInfo.trafficImg;
                    var toUrl = url.match(/(\S+)?(time=\d+)(\S+)/);
                    var newUrl = (toUrl[1] + toUrl[3] + '&time=$time$').replace(/&label=web2D&v=\d+&/, '');
                    var direction = _fd.direction;
                    var ieu = {};
                    ieu.url = newUrl;
                    ieu.str = tbId + ',' + direction + ',' + left + ',' + top + ',\n';
                    SourceArr.push(ieu);
                    str += _fd.id + '\t' + _fd.direction + '\t' + _fd.point.lng + '\t' + _fd.point.lat + '\n';
                }
            }
            SourceArr = Tools.arrCombine(SourceArr);
            var s = '';
            for (var i = 0; i < SourceArr.length; i++) {
                var o = SourceArr[i];
                s += o.url + '\n' + o.str;
            }
            Dom.feedBackToCopy.html(str);
            Dom.resultToCopy.html(s);
            var Rlenght = Dom.resultToCopy.html().replace(/(http)(\S+)(\$\n)/g, '').replace(/\n$/, '').split(/\n/).length;
            if (Rlenght === exDataNum) {
                Dom.fRe.html('<span style="color:blue;">\u6570\u636e\u65e0\u7f3a\u5931\uff0c\u7ed3\u679c\u6570\u636e\u6570\u91cf\u4e3a\uff1a' + Rlenght + '</span>');
            } else {
                Dom.fRe.html('<span style="color:red;">\u9519\u8bef\uff01\u8f93\u51fa\u6570\u636e\u6709\u4e22\u5931\uff01\u4e22\u5931\u7684\u6570\u91cf\uff1a' + (exDataNum - Rlenght) + '</span>');
            }
            loadingPlugis.end();
        }, 100)
    },
    //打点
    hitPoint: function (point) {
        mMap.setLabelPosition(dDriver.getRowIndex(), point);
        dDriver.updateData(point, dDriver.getZoom());
    }
};

//生成对象
function inits() {
    mMap = new MapView({
        bZoom: 1,
        bCenter: new BMap.Point(116.404, 39.915),
        containerId: 'container',
        height: 0,
        width: 320
    });
    tableView = new TableView("processTb");
    numberView = new NumberView("pager", {showCount: 6});
    countView = new CountView("psIt");
    buttomView = new ButtonView("topOption");
    buttomView.setDriver(dDriver);
    buttomView.setMap(mMap);
    buttomView.setTableView(tableView);
    buttomView.setTrafficVisible();
    buttomView.setCrossVisible();
    buttomView.setAllLabelVisible();
    buttomView.setRightTrHide();
    $dDriver = $(dDriver);
    $numberView = $(numberView);
}
//显示第几流程
function showStep(st) {
    initConstant.step = st;
    var index = st - 1;
    var letd = Dom.letd;
    toggle(Dom.dataTopLi, st, 'ov');
    letd.eq(index).show();
    letd.not(letd.eq(index)).hide();
}
function toggle(dom, num, cla) {
    dom.eq(num - 1).addClass(cla);
    dom.not(dom.eq(num - 1)).removeClass(cla);
}
function bindDomEvent() {
    //流程切换
    Dom.dataTopLi.bind("click", function () {
        showStep($(this).index() + 1);
    });
    Dom.chooseFormat.bind("click", function () {
        $('div', Dom.dataLi).each(function (i) {
            var _this = $(this);
            if (_this.is(":visible")) {
                _this.hide();
            } else {
                _this.show();
                initConstant.dataMode = i;
                if (i === 0) {
                    Dom.paramT.show();
                } else {
                    Dom.paramT.hide();
                }
            }
        });
    });
    Dom.attachToMap.bind("click", function () {
        dDriver.isStrict = document.getElementById("strict").checked;
        loadingPlugis.start();
        setTimeout(function () {
            Kbfunction.analyze();
        }, 0);
    });
    Dom.BtnExport.bind("click", function () {
        Kbfunction.outPutData();
    })
    //清空数据
    Dom.delTable.bind("click", function () {
        dataTool.clear(function () {
            window.location.reload();
        });
    });
}
var Tools = {
    arrCombine: function (arr) {
        var equalsByURL = function (sobj, tobj) {
            var flag = 'url' in sobj ? sobj['url'] === tobj['url'] : false;
            return flag;
        };
        var _targetArr = [];
        var tarObj = null;
        var curObj = null;
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            curObj = arr[i];
            if (!curObj) continue;
            for (var j = i + 1; j < length; j++) {
                tarObj = arr[j];
                if (!tarObj) continue;
                var flag = equalsByURL(curObj, tarObj);
                if (flag) {
                    if (curObj.str)
                        curObj.str += tarObj.str;
                    var s = curObj.str.split('\n');
                    s.pop();
                    s.sort(function (x, y) {
                        x = parseInt(x);
                        y = parseInt(y)
                        return x - y;
                    });
                    curObj.str = s.join('\n') + '\n';
                    arr[j] = undefined;
                }
            }
            _targetArr.push(curObj);
            arr[i] = undefined;
        }
        return _targetArr;
    }
}

/**
 * 取得dataArr并执行生成table操作
 * @param {Array{data}} dataArr
 */
function getDate(dataArr) {
    if (dataArr && dataArr.length !== 0) {
        dDriver.setDataArr(dataArr);
        tableView.setDriver(dDriver);
        mMap.setDriver(dDriver);
        mMap.setBMapZoom();
        countView.setMapZoom(mMap.getBMapZoom());
        numberView.selectPage(1, dDriver.getPageCount());
        showStep(2);
        loadingPlugis.end();
    }
}

$(function () {
    creatMap();
    initDom();
    bindDomEvent();
    inits();
    events();
    myCanvas = document.getElementById("myCanvas");
    dataTool.ready(function () {
        KeyBoardLisenters({mapView: mMap});
        //从数据库读取数据并生成table
        dataTool.getAll(function (e) {
            var result = e.result;
            if (result.length === 0) {
                return;
            }
            var all = result.pop().value;
            var data = [];
            if (all instanceof  Array) {
                all.forEach(function (v, i) {
                    function objToMbpoint(objPoint) {
                        return new BMap.Point(objPoint.lng, objPoint.lat);
                    }
                    var checkDate = result[i] ? result[i].value : null;
                    var allDate = all[i];
                    data[i] = checkDate ? checkDate : allDate;
                    data[i].bdpoint = objToMbpoint(data[i].bdpoint);
                });
                getDate(data);
            }
        });
    });
});

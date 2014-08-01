function events() {
    $dDriver.bind("getData", function (evt, count) {
        countView.setTotle(count)
    });
    $dDriver.bind("switch", function (evt, sIndex, eIndex) {
        tableView.fillTable(sIndex, eIndex);
        var point = dDriver.getPoint(sIndex)
        mMap.setBMapCenter(point);
    });
    $dDriver.bind("select", function (evt, data) {
        var rowIndex = data.rowIndex;
        var bpoint = data.bpoint;
        var checkState = data.checkState;
        mMap.setLabelPosition(rowIndex, bpoint, checkState);
        mMap.setBMapCenter(bpoint);
        tableView.updateSelectRow(rowIndex);
        buttomView.showCurLable();
        mMap.setLabelStyle(rowIndex,checkState);
        console.log(data);
        var data2 = dDriver.getDataByRowIndex(rowIndex)
        var grid = data2.pointImageInfo.grid;
        var offset = data2.pointImageInfo.offset;
        tmcTool.cache.get(grid.z+'_'+grid.x+'_'+grid.y ,function (e){
            var result = e.result;
            if(result) {
                myImageData = result.value;
                var ctx = myCanvas.getContext("2d");
                ctx.fill();
                ctx.clearRect(0, 0, 256, 256);
                ctx.beginPath();
                ctx.putImageData(result.value, 0, 0);
                ctx.arc(offset.left,offset.top,1,0,Math.PI*2);
                ctx.stroke();
                ctx.closePath();
            }

        })
    });
    $dDriver.bind("update", function (e, data) {
        var index = data.index;
        var rowIndex = data.rowIndex;
        var left = data.left;
        var top = data.top;
        var url = data.url;
        tableView.updateRow(rowIndex, left, top,url);
        var ctx = myCanvas.getContext("2d");
        ctx.fill();
        ctx.clearRect(0, 0, 256, 256);
        ctx.beginPath();
        ctx.putImageData(myImageData, 0, 0);
        ctx.arc(left,top,1,0,Math.PI*2);
        ctx.stroke();
        ctx.closePath();
    });
    $numberView.bind("switch", function (evt, data) {
        countView.init();
        dDriver.setCurPage(data.pageNum);
        $(".right").hide();
    });
    $dDriver.bind("upload", function (evt, data) {
        countView.setUsed(data.isUsed);
    });
    $dDriver.bind("cbCheck", function (evt, data) {
        countView.setSingleUsed(data.isUsed);
    });
    $dDriver.bind("readStatus", function (evt, data) {
        countView.setCheckCount(data.checkStatus,data.lastCheckStatus);
        mMap.setLabelStyle(data.rowIndex,data.checkStatus);
    });
    $dDriver.bind("checkStatus", function (evt, data) {
        countView.setCheckCount(data.checkStatus,data.lastCheckStatus);
        tableView.updateState(data);
        mMap.setLabelStyle(data.rowIndex,data.checkStatus);
    });
}
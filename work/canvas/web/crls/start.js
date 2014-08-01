$(function () {
    $("#attachToMap").bind("click", function () {
        tools.createArr($("#mbData"));
        var tbody = $("#pointList");
        var liList = "";
        var rps = dataDrive.dataArr;
        rps.forEach(function (v, i) {
            liList += '<li><a></a><ul></ul></li>';
            var imgUrl = v.url;
            tools.drawImage(v.point, imgUrl, i);
        });
        tbody.html(liList);
    });
    $("#outPutData").bind("click", function () {
        loadingPlugis.start();
        setTimeout(function () {
            var arr = dataDrive.dataArr;
            var str = "";
            arr.forEach(function (v) {
                var imgUrl = v.url.replace(/[\d]+$/g, "$time$");
                str += imgUrl + '\n';
                var pointArr = v.point;
                pointArr.forEach(function (v) {
                    str += v.id+","+ v.direction+ ','+ v.left+ ',' + v.top+',\n';
                });
            });
            var domoutPutDataTxt = $("#outPutDataTxt");
            domoutPutDataTxt.show();
            domoutPutDataTxt.val(str);
            loadingPlugis.end()
        },100)
    });
})
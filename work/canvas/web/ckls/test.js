var imageDb = new CacheHelper("imageData", 0);
var http = require("http");
var fs = require('fs');
$(function () {
    $("#test2").bind("click", function () {
        console.log(323232);
        toCheck();
    });
});
var mydata;
function toCheck() {
    mydata = tools.createArr($("#mbData"));
    //console.log(data);
    mydata.forEach(function (obj, i) {
        var url = obj.url;
        var fileName = url.match(/x=[\d]+/g)[0].replace(/x=/, '') + '-' + url.match(/y=[\d]+/g)[0].replace(/y=/, '') + '-' + url.match(/level=[\d]+/g)[0].replace(/level=/, '');
        //console.log(fileName);
        requestImage(url,i);
    });
}

function requestImage (url,index) {
    (function(url,index) {
        var req = http.get(url,function (res) {
            var _i = index;
            console.log(_i);
            //console.log(index);
            res.setEncoding('binary');//二进制（binary）
            var imageData = '';
            res.on('data',function (data) {//图片加载到内存变量
                imageData += data;
            }).on('end', function () {//加载完毕保存图片
                    //console.log(imageData);
                    console.log(res);
                    console.log(res.statusCode);
                    /*var yt = 'savaimg/'  + fileName + '.png';
                     //fs.appendFileSync('logo.txt', i + "\n" + url + '\n');
                     fs.writeFile(yt, imageData, 'binary', function (err) {//以二进制格式保存
                     if (err) throw err;
                     console.log('file saved');
                     });*/
                });
        }).on("error", function (e) {

            });
    })(url,index)

}

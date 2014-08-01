/**
 * @private
 * @desc 从百度上分解出的方法，及相关属性
 * */
var bd = {};

(function (exports) {
    var Hj = [75, 60, 45, 30, 15, 0],
        Qp = [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        Sp = [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Au = [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        Gi = new BMap.Size(256, 256);

    function ob(zoom) {
        return Math.pow(2, 18 - zoom);
    }

    function wz(zoom) {
        return ob(zoom) * 256;
    }

    function zo(a, b, c) {
        for (; a > c;) a -= c - b;
        for (; a < b;) a += c - b;
        return a
    }

    function Eo(a, b, c) {
        b != null && (a = Math.max(a, b));
        c != null && (a = Math.min(a, c));
        return a
    }

    function Yr(a, b) {
        if (a && b) {
            var c = b[0] + b[1] * Math.abs(a.lng),
                d = Math.abs(a.lat) / b[9],
                d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                c = c * (0 > a.lng ? -1 : 1),
                d = d * (0 > a.lat ? -1 : 1);
            return new BMap.Point(c, d)
        }
        return null;
    }

    function Wa(a) {
        var b, c;
        a.lng = zo(a.lng, -180, 180);
        a.lat = Eo(a.lat, -74, 74);
        b = new BMap.Point(a.lng, a.lat);
        for (var d = 0; d < Hj['length']; d++)
            if (b.lat >= Hj[d]) {
                c = Qp[d];
                break
            }
        if (!c)
            for (d = Hj['length'] - 1; 0 <= d; d--)
                if (b.lat <= -Hj[d]) {
                    c = Qp[d];
                    break
                }
        a = Yr(a, c);
        return a = new BMap.Point(a.lng.toFixed(2), a.lat.toFixed(2))
    }

    function Ra(a) {
        var b, c;
        b = new BMap.Point(Math.abs(a.lng), Math.abs(a.lat));
        for (var d = 0; d < Sp['length']; d++)
            if (b.lat >= Sp[d]) {
                c = Au[d];
                break
            }
        a = Yr(a, c);
        return a = new BMap.Point(a.lng.toFixed(6), a.lat.toFixed(6))
    }

    function qf(a) {
        return Ra(a);
    }

    function $a(a, b, c, d) {
        if (a) {
            a = Wa(a);
            b = ob(b);
            return new BMap.Pixel(Math.floor((a.lng - c.lng) / b), Math.floor((c.lat - a.lat) / b));
        }
    }

    exports.Wa = Wa;
    exports.Ra = Ra;
    exports.$a = $a;
    exports.wz = wz;
    exports.ob = ob;
    exports.Gi = Gi;
})(bd);

/**
 * 颜色样本
 */
var colorSample = [
    //绿色
    {
        H: 78,
        S: [131, 138],
        L: [124, 195]
    },
    //黄色
    {
        H: 25,
        S: [255, 255],
        L: [140, 190]
    },
    //红色
    {
        H: 0,
        S: [224, 225],
        L: [145, 190]
    }
];
/**
 * 颜色值转换类
 * @private
 */
var ColorConvert = {
    _HUE2RGB: function (v1, v2, v3) {
        if (v3 < 0) v3 += 1;
        if (v3 > 1) v3 -= 1;
        if (v3 * 6 < 1) return v1 + (v2 - v1) * 6 * v3;
        if (v3 * 2 < 1) return v2;
        if (v3 * 3 < 2) return v1 + (v2 - v1) * ((2.0 / 3.0) - v3) * 6;
        return v1;
    },
    /**
     * 将RGB颜色值转换为HSL颜色值
     * @param {Number} r 红色分量 0-255
     * @param {Number} g 绿色分量 0-255
     * @param {Number} b 蓝色分量 0-255
     * @return {H, S, L}
     */
    RGB2HSL: function (r, g, b) {
        var R = r / 255,
            G = g / 255,
            B = b / 255,
            trueMax = Math.max(r, g, b),
            min = Math.min(R, G, B),
            max = Math.max(R, G, B),
            delMax = max - min,
            delR, delG, delB,
            H, S, L;
        L = (max + min) / 2;
        if (delMax === 0) {
            H = 0;
            S = 0;
        } else {
            if (L < 0.5) {
                S = delMax / (max + min);
            } else {
                S = delMax / (2 - max - min);
            }
            delR = ((max - R) / 6 + delMax / 2) / delMax;
            delG = ((max - G) / 6 + delMax / 2) / delMax;
            delB = ((max - B) / 6 + delMax / 2) / delMax;
            if (r === trueMax) {
                H = delB - delG;
            } else if (g === trueMax) {
                H = (1 / 3) + delR - delB;
            } else if (b === trueMax) {
                H = (2 / 3) + delG - delR;
            }

            if (H < 0) {
                H += 1;
            }
            if (H > 1) {
                H -= 1;
            }
        }
        return {
            H: Math.round(H * 255),
            S: Math.round(S * 255),
            L: Math.round(L * 255)
        };
    },
    /**
     * 将HSL颜色值转换为RGB值
     * @private
     * @param {Number} H 色调值 0-255
     * @param {Number} S 饱和度 0-255
     * @param {Number} L 亮度 0-255
     * @return {R, G, B}
     */
    HSL2RGB: function (H, S, L) {
        H = H / 255;
        S = S / 255;
        L = L / 255;
        var R, G, B,
            var1, var2;
        if (S === 0) {
            R = L * 255.0;
            G = L * 255.0;
            B = L * 255.0;
        } else {
            if (L < 0.5) {
                var2 = L * (1 + S);
            } else {
                var2 = (L + S) - (S * L);
            }
            var1 = 2.0 * L - var2;

            R = Math.round(255.0 * this._HUE2RGB(var1, var2, H + (1.0 / 3.0)));
            G = Math.round(255.0 * this._HUE2RGB(var1, var2, H));
            B = Math.round(255.0 * this._HUE2RGB(var1, var2, H - (1.0 / 3.0)));
        }
        return {
            R: R,
            G: G,
            B: B
        };
    }
};
/**
 * @namespace
 * @name tmcTool
 * @desc tmc常用工具
 * @public
 * */

var tmcTool = {};
(function (exports) {
    var Wa = bd.Wa,
        Ra = bd.Ra,
        $a = bd.$a,
        wz = bd.wz,
        ob = bd.ob,
        Gi = bd.Gi;
    var canvas, ctx, timer = null;
    var checkCallback = [];
    //window.indexedDB && window.indexedDB.deleteDatabase('imgInfoDBTest');
    var cache = new CacheHelper('imgData', 24);
    //路况图片路径模板
    // {{time}} 随机时间
    // {{version}} 版本'016'为带路名 '16'为不带路名
    // {{zoom}} 缩放级别
    // {{x}} 网格X编号
    // {{y}} 网格Y编号
    //var trafficTemplate = 'http://its.map.baidu.com:8002/traffic/TrafficTileService?time={{time}}&label=web2D&v={{version}}&level={{zoom}}&x={{x}}&y={{y}}',
    var trafficTemplate = 'http://its.map.baidu.com:8002/traffic/TrafficTileService?time={{time}}&level={{zoom}}&x={{x}}&y={{y}}',
    //底图路径模板
    // {{x}} 网格X编号
    // {{y}} 网格Y编号
    // {{zoom}} 缩放级别
    // {{version}} 底图版本
        baseMapTemplate = 'http://online1.map.bdimg.com/tile/?qt=tile&x={{x}}&y={{y}}&z={{zoom}}&styles=pl&udt={{version}}',
        baseMapVersion = '20131220',
        imageInterface = 'http://192.168.0.175:8008/baiduImg.jsp?';
    //imageInterface = 'http://10.10.24.26:8081/couponse-api/baiduImg.jsp?';
    var x_pi = 3.14159265358979324 * 3000.0 / 180.0;

    /**
     * @name tmcTool#pixelToPoint
     * @desc 像素转经纬度
     * @function
     * @private
     * @param {BMap.Pixel} pixel
     * @param {Number} zoom
     * @param {BMap.Point} pt
     * @param {BMap.Size} size
     * @return {BMap.Point}
     */
    function pixelToPoint(pixel, zoom, pt, size) {
        var pt = Wa(pt);
        return Ra(new BMap.Point(
            pt.lng + zoom * (pixel.x - size['width'] / 2),
            pt.lat - zoom * (pixel.y - size['height'] / 2)
        ));
    }
    /**
     * @name tmcTool#toPoint
     * @desc 通过网格相关信息返回地理位置
     * @param {Number} gridX 网格横向编号
     * @param {Number} gridY 网格纵向编号
     * @param {Number} zoom 缩放级别
     * @param {Number} offsetX 相对于网格左上角横向偏移
     * @param {Number} offsetY 相对于网格左上角纵向偏移
     * @return {BMap.Point}
     * @function
     * @public
     */
    function toPoint(gridX, gridY, zoom, offsetX, offsetY) {
        var pt = getGridPoint(gridX, gridY, zoom);
        return pixelToPoint(new BMap.Pixel(offsetX + 128, offsetY + 128), ob(zoom), pt, new BMap.Size(256, 256));
    }

    function getTime() {
        return new Date().getTime();
    }

    /**
     * 取得网格编号
     * @param point
     * @param zoom
     * @returns {{x: number, y: number}}
     */
    function getGrid(point, zoom) {
        var pt = Wa(point),
            gridX = Math.floor(pt.lng / wz(zoom)),
            gridY = Math.floor(pt.lat / wz(zoom));
        return {
            x: gridX,
            y: gridY,
            z: zoom
        };
    }


    /**
     * 取得指定网格左上角地理坐标
     * @param x
     * @param y
     * @param z
     * @returns {BMap.Point}
     */
    function getGridPoint(x, y, z) {
        var pt = new BMap.Point(wz(z) * x, wz(z) * (y + 1));
        return Ra(pt);
    }

    /**
     * 取得pt2相对于pt1的偏移
     * @param {BMap.Point} pt1
     * @param {BMap.Point} pt2
     * @param {Number} z 缩放级别
     * @returns {{top : Number, left : Number}}
     */
    function getOffset(pt1, pt2, z) {
        var _pt1 = Wa(pt1),
            _px2 = $a(pt2, z, _pt1, Gi);
        return {
            top: _px2.y || 1,
            left: _px2.x || 1
        };
    }

    /**
     * 取得指定点的相关信息（所在网格编号、偏移）
     * @param {BMap.Point} pt
     * @param {Number} zoom
     * @returns {{grid: {x: number, y: number}, offset: {top: Number, left: Number}}}
     */
    function getPointInfo(pt, zoom) {
        var grid = getGrid(pt, zoom),
            origin = getGridPoint(grid.x, grid.y, zoom),
            offset = getOffset(origin, pt, zoom);
        return {
            grid: grid,
            offset: offset
        };
    }

    /**
     * @name tmcTool#getImageInfo
     * @desc 通过地理坐标获取图片相关信息
     * @param {BMap.Point} pt 百度地理坐标
     * @param {Number} zoom 百度地图缩放级别
     * @returns {Object}
     * @function
     * @public
     * @example
     * <pre>
     *     <b>返回值结构</b><br/>
     *      {
     *          trafficImg : 'url',
     *          grid : {
     *              x : 0,
     *              y : 0
     *          }
     *          offset : {
     *              left : 0,
     *              top : 0
     *          }
     *      }
     * </pre>
     */
    function getImageInfo(pt, zoom) {
        var i = getPointInfo(pt, zoom),
            traffic = trafficTemplate.replace('{{time}}', getTime())
                .replace('{{version}}', '16')
                .replace('{{zoom}}', i.grid.z)
                .replace('{{x}}', i.grid.x)
                .replace('{{y}}', i.grid.y),
            baseMap = baseMapTemplate.replace('{{version}}', baseMapVersion)
                .replace('{{x}}', i.grid.x)
                .replace('{{y}}', i.grid.y)
                .replace('{{zoom}}', i.grid.z);
        return {
            trafficImg: traffic,
            grid: i.grid,
            offset: i.offset
        };
    }

    /**
     * @name tmcTool#GCJ2BD
     * @desc 将GCJ02经纬度转换为BD-09经纬度
     * @public
     * @function
     * @param {Number} lng 经度
     * @param {Number} lat 纬度
     * @return {Object}
     * @example
     * <pre>
     *     <b>返回值结构</b><br/>
     *     {
     *         lng : 0,
     *         lat : 0
     *     }
     * </pre>
     */
    function GCJ2BD(lng, lat) {
        var x = lng, y = lat;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
        return {
            lng: z * Math.cos(theta) + 0.0065,
            lat: z * Math.sin(theta) + 0.006
        };
    }

    /**
     * @name tmcTool#BD2GCJ
     * @desc 将BD-09经纬度转换为GCJ02经纬度
     * @public
     * @function
     * @param {Number} lng 经度
     * @param {Number} lat 纬度
     * @return {Object}
     * @example
     * <pre>
     *     <b>返回值结构</b><br/>
     *     {
     *         lng : 0,
     *         lat : 0
     *     }
     * </pre>
     */
    function BD2GCJ(lng, lat) {
        var x = lng - 0.0065, y = lat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
        return {
            lng: z * Math.cos(theta),
            lat: z * Math.sin(theta)
        };
    }

    function createCanvas() {
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;
            ctx = canvas.getContext('2d');
        }
    }

    /**
     * 从url中取出数据作为id
     * @param {String} url
     * @return {String} id
     */
    var getKeyByURL = function (url) {
        var x = url.match(/x=\d+/)[0].match(/\d+/)[0];
        var y = url.match(/y=\d+/)[0].match(/\d+/)[0];
        var z = url.match(/(z|level)=\d+/)[0].match(/\d+/)[0]
        var key = [z, x, y].join('_');
        return key;
    };

    function getCanvasData(key, buffer, order) {
        createCanvas();
        var _blob = new Blob(new Array(buffer), { type: "image/png" });
        var _url = URL.createObjectURL(_blob);
        var _img = new Image();
        var imgData = undefined;
        _img.onload = function () {
            ctx.clearRect(0, 0, 256, 256);
            ctx.drawImage(this, 0, 0);
            URL.revokeObjectURL(_url);
            imgData = ctx.getImageData(0, 0, 256, 256);
            cache[order](key, imgData);
            exeCheckCallback(key, imgData);
        };
        _img.onerror = function () {
            exeCheckCallback(key, imgData);
        };
        _img.src = _url;
    };
    function requestImgData(url, order) {
        /*var xhr = new XMLHttpRequest();
         xhr.open('GET', imageInterface + url);
         xhr.responseType = 'arraybuffer';
         xhr.onreadystatechange = function () {
         if (xhr.readyState === 4 && xhr.status === 200) {
         var key = getKeyByURL(url);
         var buffer = xhr.response;
         console.log(xhr);
         getCanvasData(key, buffer, order);
         }
         };
         xhr.send();*/
        if (require("http")) {
            var http = require("http");
            http.get(url,function (res) {
                res.setEncoding('binary');//二进制（binary）
                var re = '';
                res.on('data',function (data) {
                    re += data;
                    // collect the data chunks to the variable named "html"
                }).on('end', function () {
                        //console.log(re);
                        var key = getKeyByURL(url);
                        var b = new Buffer(re, 'binary');
                        var imageData = toArrayBuffer(b);
                        getCanvasData(key, imageData, order);
                    })
            }).on('error', function (e) {
                    console.log("Got error: " + e.message);
                });
        }

    };
    function toArrayBuffer(buffer) {
        var ab = new ArrayBuffer(buffer.length);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];
        }
        return ab;
    }

    function exeCheckCallback(key, data) {
        var cbs = checkCallback[key].cbs;
        var length = cbs.length;
        for (var i = 0; i < length; i++) {
            cbs.pop()(data);
        }
        //	delete checkCallback[key];
    }

    function isExpire(record) {
        var time = parseInt(record.time) + parseInt(record.expire);
        return getTime() >= time;
    };
    /**
     * 从缓存中取数据
     * @param {String} key
     */
    function getImgDataFromDB(key) {
        cache.get(key, function (e) {
            var _cache = checkCallback[key];
            if (!_cache) return;
            var record = e.result;
            var url = _cache.url;
            var order = 'add';
            if (record) {
                if (!isExpire(record)) {
                    return exeCheckCallback(key, record.value);
                } else {
                    order = 'update';
                }
            }
            requestImgData(url, order);
        });
    }

    function getImgCanvasData() {
        for (var key in checkCallback) {
            getImgDataFromDB(key);
        }
    }

    function getImageData(url, callback) {
        timer && window.clearTimeout(timer);
        var key = getKeyByURL(url);
        if (!checkCallback[key]) {
            checkCallback[key] = {
                url: url,
                cbs: []	//callback集合
            };
        }
        checkCallback[key].cbs.push(callback);
        timer = window.setTimeout(getImgCanvasData, 0);
    }

    /**
     * @name tmcTool#checkAccuracy
     * @function
     * @public
     * @desc 验证准确性
     * @param {Object} info 信息
     * @param {String} info.trafficImg 路况图地址
     * @param {Object} info.offset 点偏移
     * @param {Number} info.offset.left 横向偏移
     * @param {Number} info.offset.top 纵向偏移
     * @param {Function} callback 验证完成后的回调方法
     * @param {Boolean} [strict=false] 是否启用严格验证
     * @param {Object} [customData] 自定义数据
     */
    function checkAccuracy(info, callback, strict, customData) {
        createCanvas();
        getImageData(info.trafficImg, function (data) {
            var flag = data ? checkPixel(info.offset, strict, data) : false;
            callback(flag);
        });
    }

    function checkPixel(offset, strict, imgData) {
        var x = offset.left, y = offset.top;
        var length = (256 * (y - 1) + x) * 4;
        window.imgD = imgData;
        var r = imgData.data[length - 4],
            g = imgData.data[length - 3],
            b = imgData.data[length - 2],
            a = imgData.data[length - 1],
            hsl = ColorConvert.RGB2HSL(r, g, b),
            h = hsl.H,
            s = hsl.S,
            l = hsl.L;
        /*var boo = !colorSample.every(function (color) {
         if (color.H === h) {
         if (strict) {
         return !(s >= color.S[0] && s <= color.S[1] && l >= color.L[0] && l <= color.L[1]);
         } else {
         return false;
         }
         }
         return true;
         });*/
        var boo;
        if (h === 0 && s === 0 && (l === 255 || l === 0)) {
            boo = false;
        } else {
            boo = true;
        }
        return boo;
    }

    cache.init(function () {
        exports.opened = true;
    });
    exports.checkAccuracy = checkAccuracy;
    exports.getImageInfo = getImageInfo;
    exports.GCJ2BD = GCJ2BD;
    exports.BD2GCJ = BD2GCJ;
    exports.toPoint = toPoint;
    exports.cache = cache;
})(tmcTool);
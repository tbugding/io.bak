var tools = {};
var http = require("http");
(function (exports) {
    function _trim(data) {
        return data.replace(/^\n+|\n+$/g, "");
    }

    function createArr(dom) {
        dataDrive.pointNum = 0;
        var data = _trim(dom.val());
        var timestamp = (new Date()).valueOf();
        if (data) {
            data = data + '\n';
            var a = data.split('http');
            a.shift();
            var fps = [];
            a.forEach(function (v, i) {
                var s = v.split('\n');
                s.pop();
                var obj = {};
                obj['point'] = [];
                s.forEach(function (d, j) {
                    if (j === 0) {
                        d = 'http' + d.replace("$time$", "") + timestamp;
                        s[j] = d;
                        obj['url'] = d;
                        return false;
                    } else {
                        d = d.replace(/,$/, '');
                        s[j] = d;
                        var pointArr = d.split(",")
                        var ls = {
                            id: pointArr[0],
                            direction: pointArr[1],
                            left: parseInt(pointArr[2]),
                            top: parseInt(pointArr[3])
                        };
                        dataDrive.pointNum++;
                        obj['point'].push(ls);
                    }
                });
                fps.push(obj);
            });
            return fps;
        }
    }

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

    function checkPixel(left, top, imgData) {
        if(imgData) {
            var x = left, y = top;
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
            //console.log("像素点:",left,top);
            //console.log("颜色:",h, s, l);
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
    };
    function _toArrayBuffer(buffer) {
        var ab = new ArrayBuffer(buffer.length);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];
        }
        return ab;
    }

    var canvas, ctx;

    function createCanvas() {
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;
            ctx = canvas.getContext('2d');
        }
    }
    createCanvas();
    function getImageData(url, callback) {
        //fs.appendFileSync('logo.txt',"ssss\n");
        var req = http.get(url,function (res) {
            res.setEncoding('binary');//二进制（binary）
            var re = '';
            res.on('data',function (data) {
                re += data;
            }).on('end', function () {
                    var b = new Buffer(re, 'binary');
                    var imageData = _toArrayBuffer(b);
                    var _blob = new Blob(new Array(imageData), { type: "image/png" });
                    var _url = URL.createObjectURL(_blob);
                    var _img = new Image();
                    var imgData = undefined;
                    _img.onload = function () {
                        ctx.clearRect(0, 0, 256, 256);
                        ctx.drawImage(this, 0, 0);
                        URL.revokeObjectURL(_url);
                        imgData = ctx.getImageData(0, 0, 256, 256);
                        callback(imgData);
                    };
                    _img.src = _url;
                    _img.onerror = function () {
                        callback();
                    };
                })
            res.on("close", function(e) {
                //fs.appendFileSync('logo.txt',"close\n");
                callback();
                //console.log();
                console.log("close");
            });
        }).on('error', function (e) {
                callback();
                //fs.appendFileSync('logo.txt',"Got error: " + e.message+'\n');
                console.log("Got error: " + e.message);
            })
        req.setTimeout(90000,function (res) {
            req.abort();
        });
    };


    function getImageDataOneByOne(url) {
        var http = require("http");
        http.get(url,function (res) {
            res.setEncoding('binary');//二进制（binary）
            var re = '';
            res.on('data',function (data) {
                re += data;
            }).on('end', function () {
                    var b = new Buffer(re, 'binary');
                    var imageData = _toArrayBuffer(b);
                    var _blob = new Blob(new Array(imageData), { type: "image/png" });
                    var _url = URL.createObjectURL(_blob);
                    var _img = new Image();
                    var imgData = undefined;
                    _img.onload = function () {
                        ctx.clearRect(0, 0, 256, 256);
                        ctx.drawImage(this, 0, 0);
                        URL.revokeObjectURL(_url);
                        imgData = ctx.getImageData(0, 0, 256, 256);
                        callback(imgData);
                        getImageDataOneByOne()
                    };
                    _img.src = _url;
                    _img.onerror = function () {
                        callback();
                    };
                })
        }).on('error', function (e) {
                callback();
                console.log("Got error: " + e.message);
            })
    }

    exports.createArr = createArr;
    exports.checkPixel = checkPixel;
    exports.getImageData = getImageData;
})(tools);
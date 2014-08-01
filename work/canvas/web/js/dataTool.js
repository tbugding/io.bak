/**
 * @namespace
 * @name dataTool
 * @desc 常用数据工具
 * */
var dataTool = new (function () {
    var _this = this;
    /**
     * 数据库对象
     * @tppe CacheHelper
     * @public
     * */
    this._db = null;
    if (typeof CacheHelper == 'function') {
        this._db = new CacheHelper('dataInfo', 0);
        this._db.init(function () {
            _this.opened = true;
        });
    }
    function getTime() {
        return new Date().getTime();
    }

    var timer = null;
    var sTime = getTime();
    /**
     * @name dataTool#ready
     * @desc 数据库已准备就绪
     * @param {Function} callback 执行函数
     * @public
     * @function
     * */
    this.ready = function (callback) {
        timer = window.setInterval(function () {
            if (getTime() - sTime > 6000) {
                //数据库连接超时
                alert('\u6570\u636E\u5E93\u8FDE\u63A5\u8D85\u65F6\uFF01');
                window.clearInterval(timer);
            };
            if (tmcTool.opened && _this.opened) {
                window.clearInterval(timer);
                callback && callback.apply(_this);
            }
        }, 0);
    };
    /**
     * @name dataTool#add
     * @desc 向缓存中添加一条记录
     * @public
     * @function
     * @param {String} id 标识符
     * @param {Object} value 对应值
     * @param {Function} callback 添加请求发出后，触发此函数，无论成功与否
     */
    this.add = function (id, value, callback) {
        this._db && this._db.add(id, value, callback);
    };
    /**
     * @name dataTool#exist
     * @desc 判断缓存中是否存在指定记录
     * @public
     * @function
     * @param {String} id 标识符
     * @param {Function} callback 请求发出后，触发此函数，无论成功与否
     * */
    this.exist = function (id, callback) {
        this._db && this._db.exist(id, callback);
    };
    /**
     * @name dataTool#getAll
     * @desc 取出全部缓存记录
     * @public
     * @function
     * @param {Function} callback 请求发出后，触发此函数，无论成功与否
     */
    this.getAll = function (callback) {
        this._db && this._db.getAll(callback);
    };
    /**
     * @name dataTool#get
     * @desc 从缓存中取出指定的记录
     * @public
     * @function
     * @param {String} id 标识符
     * @param {Function} callback 请求发出后，触发此函数，无论成功与否
     */
    this.get = function (id, callback) {
        this._db && this._db.get(id, callback);
    };
    /**
     * @name CacheHelper#update
     * @desc 更新缓存中的一条记录
     * @public
     * @function
     * @param {String} id 标识符
     * @param {Object} value 目标插入值
     * @param {Function} callback 请求发出后，触发此函数，无论成功与否
     */
    this.update = function (id, value, callback) {
        console.log(323232);
        this._db && this._db.update(id, value, callback);
    };
    /**
     * @name dataTool#clear
     * @desc 清理缓存中的记录
     * @public
     * @function
     * @param {Function} callback 请求发出后，触发此函数，无论成功与否
     */
    this.clear = function (callback) {
        this._db && this._db.clear(callback);
    };
    /**
     * @name dataTool#_strToObj
     * @desc 将字符串数据转为对象数据
     * @param {String} str 字符串数据
     * @return {Object} 对象数据
     * @private
     * @function
     * */
    this._strToObj = function (str) {
        return obj;
    };
    /**
     * @name dataTool#_strToObj
     * @desc 删除空格
     * @param {String} str 字符串数据
     * @private
     * @function
     * */
    this._trim = function (data) {
        return data.replace(/^\n+|\n+$/g, "");
    }
    /**
     * @name dataTool#getDataFromContainer
     * @desc 从指定的容器中取出数据字符串，并转成对象数组
     * @param {HTMLElement} container 数据容器
     * @param {Number} zoomLevel
     * @return {Array} 数组
     * @public
     * @function
     * */
    this.getDataFromContainer = function (container, zoomLevel) {
        var myValue = this._trim(container.value);
        if (myValue) {
            var strArr = myValue.split("\n");
            var mbE, _fp, _fps = [];
            strArr.every(function (val) {
                mbE = val.split('\t');
                if (mbE.length !== 4) {
                    //console.log(11111111);
                    //alert(11111);
                    //alert('\u8BF7\u586B\u5199\u6570\u636E\uFF01');
                    return false;
                }
                _fp = {};
                _fp.id = parseFloat(mbE[0]);
                _fp.direction = parseFloat(mbE[1]);
                _fp.point = {lng: parseFloat(mbE[2]), lat: parseFloat(mbE[3])};
                var _bdpoint = tmcTool.GCJ2BD(_fp.point.lng, _fp.point.lat);
                _fp.pointImageInfo = tmcTool.getImageInfo(_bdpoint, zoomLevel);
                _fp.bdpoint = new BMap.Point(_bdpoint.lng, _bdpoint.lat);
                _fp.isUsed = 1;
                _fp.checkStatus = 0;
                _fps.push(_fp);
                return true;
            });
        }
        return _fps;
    };
    /**
     * @name dataTool#getDataFromReverse
     * @desc 获取反推数据
     * @param {HTMLElement} container 数据容器
     * @return {Array} 数组
     * @public
     * @function
     * */
    this.getDataFromReverse = function (container) {
        var data = this._trim(container.value);
        if (data) {
            var a = data.split('http');
            a.shift();
            var _fps = [];
            var _fp = {};
            var aLen = a.length;
            for (var i = 0, l = aLen; i < l; i++) {
                var ai = a[i];
                var as = ai.match(/level=\d+&x=\d+&y=\d+/).toString().match(/\d+/g);
                var ay = ai.replace(/\:\S+time\=\$time\$[\n]/, '').split(/,\n/);
                if(i !== aLen -1) {
                    ay.pop();
                }
                var grid = {
                    x: parseInt(as[1]),
                    y: parseInt(as[2]),
                    z: parseInt(as[0])
                };

                for (var j = 0, len = ay.length; j < len; j++) {
                    var ayi = ay[j];
                    var tr = ayi.split(',');
                    var  gz = grid['z'];
                    var bdPoint = tmcTool.toPoint(grid['x'], grid['y'], gz, parseInt(tr[2]), parseInt(tr[3]));
                    _fp = {
                        id: parseInt(tr[0]),
                        direction: parseInt(tr[1]),
                        pointImageInfo: {
                            offset: {
                                left: parseInt(tr[2]),
                                top: parseInt(tr[3])
                            },
                            trafficImg: tmcTool.getImageInfo(bdPoint,gz).trafficImg,
                            baseMapImg: tmcTool.getImageInfo(bdPoint,gz).baseMapImg,
                            grid: grid
                        },
                        bdpoint: bdPoint,
                        point: tmcTool.BD2GCJ(bdPoint.lng, bdPoint.lat),
                        isUsed: 1,
                        checkStatus: 0
                    }
                    _fps.push(_fp);
                }

            }
            return _fps;
        }
    };
    /**
     * @name dataTool#mergeArr
     * @desc 将源数据向目标数组中合并，取代目标数组的对应下标项
     * @param {Array} targetArr 目标数组（被修改）
     * @param {Array} sourceArr 源数组
     * @return {Array} 数组
     * @public
     * @function
     * */
    this.mergeArr = function (targetArr, sourceArr) {
        return [];
    };
})();
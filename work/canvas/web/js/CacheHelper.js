/**
 * 构造函数,创建缓存助手的实例
 * @class 根据需要，建立不同的缓存对象
 * @name CacheHelper
 * @param {String} name 缓存集合名称
 * @param {Number} expire 缓存有效时间，单位：小时
 * @constructor
 */
function CacheHelper (name, expire) {
	/**
     * 缓存集合名称
     * @type String
     * @private
     */
	this._name = name;
	if(typeof expire == 'undefined') {
		expire = 24 * 365;		
	};
    if(expire == 0) {
        expire = 0;
    }
	/**
     * 缓存有效时间，单位：小时
     * @type Number
     * @private
	 * @default 365
     */
	this._expire = expire * 60 * 60 * 1000;
	/**
     * 数据库名称
     * @type String
     * @private
     */
	this._dbname = this._name;
	
	/**
	 * 数据库实例对象
	 * @private
	 * @type IndexdDB
	 * @default null
	 */
	this._db = null;
	/**
	 * 数据库开启标志
	 * @private
	 * @type Boolean
	 @ @default false
	 */
	this._opened = false;	
};
/**
 * @name CacheHelper#_onerror
 * @desc 请求发生错误
 * @private
 * @function
 * */
CacheHelper.prototype._onerror = function (e, callback) {
    var callbackParam = this._getParamForCallback();
    callbackParam.error = e.target.error;
    callback && callback.apply(this, [callbackParam])
};
/**
 * @name CacheHelper#_onsuccess
 * @desc 请求成功
 * @private
 * @function
 * */
CacheHelper.prototype._onsuccess = function (e, callback) {
    var callbackParam = this._getParamForCallback();
    callbackParam.suc = true;
    callbackParam.result = e.target.result;
    return callback && callback.apply(this, [callbackParam])
};
 /**
 * @name CacheHelper#_getObjectStore
 * @desc 根据事务模式取得存储对象
 * @private
 * @function
 * @param {String} state 事务模式， 
 */
CacheHelper.prototype._getObjectStore = function (mode) {
	if(this._db) {
		mode = mode || 'readonly';
		var transaction = this._db.transaction(this._name, mode);
		if(transaction) {
			return transaction.objectStore(this._name);
		}	
	}	
	return null;
};
 /**
 * @name CacheHelper#_getApplyReslut
 * @desc 所有回调函数的参数模型
 * @private
 * @function
 */
CacheHelper.prototype._getParamForCallback = function () {
	return {
		suc : false, 
		result : null, 
		error : null
	};
};
 /**
 * @name CacheHelper#_openDatabase
 * @desc 打开数据库
 * @private
 * @function
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype._openDatabase = function (callback) {
	var _this = this;
	var	request = CacheHelper._DB_SYSTEM.open(this._dbname);
	var callbackParam = this._getParamForCallback();
	request.onerror = function(e) {
		callbackParam.code = e.target.errorCode;
		callback && callback.apply(_this, [callbackParam])
	};
	request.onsuccess = function(e) {	
		_this._opened = true;
		_this._db = e.target.result;
		callbackParam.suc = true;
		callback && callback.apply(_this, [callbackParam])
	};
	request.onupgradeneeded = function (e) {		
		var store = e.currentTarget.result.createObjectStore(_this._name, {keyPath: "id"});
		store.createIndex("value", "value", { unique: false });        
		store.createIndex("expire", "expire", { unique: false });
		store.createIndex("time", "time", { unique: false });		
	};
};
/**
 * @name CacheHelper#getOpenState
 * @desc 获取数据的开启状态
 * @public
 * @function
 * @return {Boolean} true 表示已开启
 */
CacheHelper.prototype.getOpenState = function () {
	return this._opened;
};
 /**
 * @name CacheHelper#init
 * @desc 缓存初始化
 * @public
 * @function
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.init = function (callback) {
	this._openDatabase(callback);
};
 /**
 * @name CacheHelper#exist
 * @desc 判断缓存中是否存在指定记录
 * @public
 * @function
 * @param {String} key 标识符
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.exist = function (key, callback) {
	var store = this._getObjectStore();
	if(!store) return;
	var _this = this;	
	var request = store.count(key);

    request.onsuccess = function (e) {
        _this._onsuccess(e, callback);
    };
    request.onerror = function (e) {
        _this._onerror(e, callback);
    };
};

 /**
 * @name CacheHelper#add
 * @desc 向缓存中添加一条记录
 * @public
 * @function
 * @param {String} key 标识符
 * @param {Object} value 对应值
 * @param {Function} callback 添加请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.add = function (key, value, callback) {	
	var store = this._getObjectStore('readwrite');	
	if(!store) return;
	var _this = this;	
	var record = {
		id : key,
		value : value,
		time : new Date().valueOf(),
		expire : _this._expire
	};
	//console.info(record)
	var request = store.add(record)
	request.onsuccess = function(e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function(e) {
        _this._onerror(e, callback);
	};	
};
 /**
 * @name CacheHelper#update
 * @desc 更新缓存中的一条记录
 * @public
 * @function
 * @param {String} key 标识符
 * @param {Object} value 目标插入值
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.update = function (key, value, callback) {
	var store = this._getObjectStore('readwrite');	
	if(!store) return;
	var _this = this;
	var record = {
		id : key,
		value : value,
		time : new Date().valueOf(),
		expire : _this._expire
	};
	store.get(key).onsuccess = function(e) {
		var request = store.put(record);		
		request.onsuccess = function(e) {
            _this._onsuccess(e, callback);
		};			
		request.onerror = function(e) {
            _this._onerror(e, callback);
        };
    };
	store.get(key).onerror = function(e) {
        _this._onerror(e, callback);
	};	
};
 /**
 * @name CacheHelper#get
 * @desc 从缓存中取出指定的记录
 * @public
 * @function
 * @param {String} key 标识符
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.get = function (key, callback) {
	var store = this._getObjectStore();
	if(!store) return;
	var _this = this;	
	var request = store.get(key)
	request.onsuccess = function(e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function(e) {
        _this._onerror(e, callback);
	};
};
/**
 * @name CacheHelper#getAll
 * @desc 取出全部缓存记录
 * @public
 * @function
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.getAll = function (callback) {
    var store = this._getObjectStore();
    if(!store) return;
    var request = store.openCursor();
    var _this = this;
    var result = [];
    request.onsuccess = function(e) {
        var cursor = e.target.result;
        if (cursor) {
            result.push(cursor.value);
            cursor.continue();
        } else {
            _this._onsuccess( {target : {result : result}}, callback);
        }
    };
    request.onerror = function(e) {
        _this._onerror(e, callback);
    };
};
 /**
 * @name CacheHelper#clear
 * @desc 清理缓存中的记录
 * @public
 * @function
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.clear = function (callback) {
	var store = this._getObjectStore('readwrite');	
	if(!store) return;
	var _this = this;	
	var request = store.clear();
	request.onsuccess = function(e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function(e) {
        //_this._onerror(e, callback);
	};
};
 /**
 * @name CacheHelper#remove
 * @desc 删除缓存对象
 * @public
 * @function
 * @param {Function} callback 请求发出后，触发此函数，无论成功与否
 */
CacheHelper.prototype.remove = function (callback) {
	if(!this._db) return;
	var _this = this;
	this._db.close();
	var request = CacheHelper._DB_SYSTEM.deleteDatabase(this._dbname);
	request.onsuccess = function (e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function (e) {
        _this._onerror(e, callback);
	};
	this._name = null;
	this._expire = null;
	this._dbname = null;
	this._db = null;
};

/**
 * @desc 系统数据库
 * @constant
 * @private
 * @type IndexdDB
 * @default undefined
 */
CacheHelper._DB_SYSTEM = undefined;

/**
 * @desc 环境是否支持indexedDB数据库
 * @constant
 * @private
 * @type Boolean
 * @default undefined
 */
CacheHelper._DB_SUPPORT = (function () {
	CacheHelper._DB_SYSTEM = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	return CacheHelper._DB_SYSTEM ? true : false;
})();
if(!CacheHelper._DB_SUPPORT) {
	CacheHelper = null;
}

/**
 * @name CacheHelper#_callback
 * @function
 * @desc 回调函数
 * @public
 * @param {Object} evt
 * @param {Boolean} evt.suc 本次请求是否成功，true表示成功，查看evt.result；false表示失败，查看evt.error
 * @param {Object} evt.result 本次请求得到的结果，无结果则返回null
 * @param {Object} evt.error 请求发生错误时的信息
 */
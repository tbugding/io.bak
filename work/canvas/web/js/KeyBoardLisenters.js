/**
 * 创建键盘监听
 * @class 键盘控制所有操作
 * @name KeyBoardLisenters
 * @param {object} opts 驱动对象
 * @constructor
 */
function KeyBoardLisenters (opts) {
    $(document).bind('keydown', function (evt) {
        var factor = evt.shiftKey ? 10 : 1;
        if (evt.keyCode === 187) {
            opts.mapView.zoomInView();
            return false;
        } else if (evt.keyCode === 189) {
            opts.mapView.zoomOutView();
            return false;
        } else if (evt.keyCode === 48) {
            opts.mapView.zoomOutView(true);
            return false;
        } else if (evt.keyCode === 38) {
            opts.mapView.panByView(0,1*factor);
            return false;
            return false;
        } else if (evt.keyCode === 40) {
            opts.mapView.panByView(0, -1 * factor);
            return false;
        } else if (evt.keyCode === 37) {
            opts.mapView.panByView(1 * factor, 0);
            return false;
        } else if (evt.keyCode === 39) {
            opts.mapView.panByView(-1 * factor, 0);
            return false;
        } else if (evt.ctrlKey === true && evt.keyCode === 13) {
            var step = initConstant.step;
            if (step === 1) {
                Kbfunction.analyze();
             } else if (step === 2) {
                Kbfunction.outPutData();
             }
             return false;
        } else if (evt.keyCode === 13) {
            if(initConstant.step === 2) {
                Kbfunction.hitPoint(opts.mapView.getBMapCenter());
            }
        } else if (evt.ctrlKey === true && evt.keyCode === 65) {
            evt.keyCode === 404;
        }
        else if (evt.keyCode === 65) {
            buttomView.switchLable();
        } else if (evt.shiftKey === true && evt.keyCode === 9) {
            dDriver.preData();
            tableView.setScroll();
            return false;
        } else if (evt.keyCode === 9) {
            dDriver.nextData();
            tableView.setScroll();
            return false;
        } else if (evt.keyCode === 34) {
             numberView.next();
        } else if (evt.keyCode === 33) {
            numberView.pre();
        } else if (evt.keyCode === 36) {
            numberView.first();
        } else if (evt.keyCode === 35) {
            numberView.last();
        } else if (evt.keyCode === 88) {
            buttomView.switchCross();
        } else if (evt.keyCode === 90) {
            buttomView.switchTraffic();
        } else if(evt.keyCode === 70) {
            buttomView.switchFilter()
        }
    });
};
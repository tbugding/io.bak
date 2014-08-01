var gui = require('nw.gui');
var proWin = gui.Window.get();
$(function () {
    proWin.show();
    proWin.maximize();
    document.addEventListener("keydown",function(evt) {
        var kc = evt.keyCode;
        if(kc === 123) {
            proWin.showDevTools();
        } else if(kc === 116) {
            proWin.reloadIgnoringCache();
        }
    });
});
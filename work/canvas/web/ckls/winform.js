/**
 * 窗口操作以及状态
 * @namespace
 * @type {{}}
 */
var winform = {};
(function (exports) {
    /**
     * 跳到指定流程
     * @name winform#toStep

     */
    function toStep(num) {
        $(".dataTop li").eq(num).addClass("ov").siblings().removeClass("ov");
        $(".leftCont>div").eq(num).show().siblings().hide();
    };
    exports.toStep = toStep;
})(winform);
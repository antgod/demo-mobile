/**
 * Created by lihongji on 2015/6/13.
 */
var Base = (function() {
    var setConfig=function(_this,cfg){          //设置参数与事件信息
        _this.config=cfg;
        Util.mix(_this.events,cfg.events);      //事件可以从参数传递
        delete cfg.events;                      //设置事件为空，以免被继承
    }

    function Base() {}

    /*
        初始化方法
     */
    Base.prototype.init = function(config) {
        this.data = null;
        setConfig(this,config);
        this.html = "";
        this.containerId = config.containerId;
        this.templateId = config.templateId;
        this.template = baidu.template;
        this.template.ESCAPE = false;
        return this;
    };

    /*
        加载数据函数
    */
    Base.prototype.run=function(data,fn){
        this.loadData(data);
        this.render();
        this.draw();
        this.dispatchEvent();
        this.callback(fn);
    };

    /*
        获得模板内容函数
    */
    Base.prototype.render=function(){
        this.html = this.template(this.templateId, this.data);
    };

    /*
        绘制函数
    */
    Base.prototype.draw=function(){
        $(this.containerId).html(this.html);
    };

    /*
        读取数据函数
    */
    Base.prototype.loadData=function(data){
        Util.mix(data,this.config);      //混入数据，参数可以传递配置数据
        this.data = data;
    };

    /*
        模板加载后回调函数
    */
    Base.prototype.callback=function(callback){
        if(callback&&(typeof callback==="function")){
            callback();
        }
    };

    /*
        模板加载后回调函数
     */
    Base.prototype. drawPage=function(){
        $(this.containerId).html($(this.containerId).html()+this.html);
    };

    /*
        滚动操作
     */
    Base.prototype.scrollPage=function(data,fn){
        this.loadData(data);
        this.render();
        this.drawPage();
        this.dispatchEvent();
        this.callback(fn);
    };

    /*
        分发事件函数
    */
    Base.prototype.dispatchEvent = function() {
        for (var dom in this.events) {
            var domEvents = this.events[dom];
            for (var eventType in domEvents) {
                var eventHandler = domEvents[eventType];
                $(this.containerId).on(eventType,dom,eventHandler);
            }
        }
    };

    return Base;
})();


var BNJSReady = function (readyCallback) {
    if(readyCallback && typeof readyCallback == 'function'){
        if(window.BNJS && typeof window.BNJS == 'object' && BNJS._isAllReady){
            readyCallback();
        }else{
            document.addEventListener('BNJSReady', function() {
                readyCallback();
            }, false);
        }
    }
};
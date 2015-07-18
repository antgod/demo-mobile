/**
 * Created by lihongji on 2015/7/6.
 */

var onloadcallback=function() {

    BNJS.page.getData(function (params) {                     //获取页面参数
        var interfacePath = URLUtil.getUrlMsg();              //获取接口路径
        Load.initPage(BNJS);                                  //页面加载
        var Place = PlaceList(params);
        var place = new Place();
        place.init({
            containerId: "#hd-place",       //传入容器ID
            templateId : "hdPlaceTpl",      //传入模板ID
            title      : "约会好去处"
        });

        //刷新地点列表
        var paramOther = {
            request_type: 1
        };

        urlParam = URLUtil.getUrlByParams($.extend(params, paramOther));

        var url = interfacePath + urlParam;

        BNJS.http.get({
            url      : url,
            onSuccess: function (placeData) {
                place.run(placeData);
                BNJS.ui.hideLoadingPage();
            },
            onFail   : function (res) {
                BNJS.ui.showErrorPage();
            }
        });

        $(window).scrollLoader({
            loadContent: function (page) {
                Load.loading();

                var $this = $(this);
                $(this).trigger('disableLoad');

                var paramOther = {
                    request_type: 1,
                    begin_index : this.page * 15,
                    list_num    : 15
                };

                urlParam = URLUtil.getUrlByParams($.extend(params, paramOther));
                var url = interfacePath + urlParam;

                BNJS.http.get({
                    url: url,
                    onSuccess: function (placeData) {
                        if (placeData.place.length) {
                            place.scrollPage(placeData);
                            $this.trigger('enableLoad');
                        } else {
                            Load.loadnone();
                        }
                        Load.loadend();
                    },
                    onFail   : function (res) {
                        Load.loaderror();
                        $this.trigger('enableLoad');
                    }
                });
            }
        });
    });
};
!function (o) {
    BNJSReady(onloadcallback);
}(window);



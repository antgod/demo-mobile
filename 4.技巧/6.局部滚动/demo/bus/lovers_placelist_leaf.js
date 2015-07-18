/**
 * Created by lihongji on 2015/7/6.
 */


var onloadcallback=function(){
    BNJS.page.getData(function (params) {                           //获取页面参数
        var interfacePath = URLUtil.getUrlMsg();                    //获取接口路径
        Load.initPage(BNJS);                                        //页面加载
        BNJS.ui.title.setTitle(params.catName);                     //设置页面标题
        var paramOther = {
            request_type: 2,
            begin_index : 0,
            list_num    : 15
        };
        urlParam = URLUtil.getUrlByParams($.extend(params, paramOther));
        var url = interfacePath + urlParam;
        var goodsList = new GoodsList();
        goodsList.init({
            containerId: "#goods-list",       //传入容器ID
            templateId : "goodsListTpl"     //传入模板ID
        });

        BNJS.http.get({
            url      : url,
            onSuccess: function (goodsListData) {
                goodsList.run(goodsListData);
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
                    request_type: 2,
                    begin_index : this.page * 15,
                    list_num    : 15
                };

                urlParam = URLUtil.getUrlByParams($.extend(params, paramOther));
                var url = interfacePath + urlParam;

                BNJS.http.get({
                    url : url,
                    onSuccess: function (goodsListData) {
                        if (goodsListData.list.length) {
                            goodsList.scrollPage(goodsListData);
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



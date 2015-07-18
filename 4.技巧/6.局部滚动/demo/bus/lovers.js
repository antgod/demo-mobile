/**
 * Created by lihongji on 2015/7/6.
 */

//从跳转页面替换
var userinfo={location:"22.538244,113.944391","s":"e6247e5254b46c8a713fd8deb76f662b",
    "tid":"lovestopicbanner","userid":"null","cuid":"cuidtest","loccityid":"100010000","cityid":"300210000","y":"22.538244","x":"113.944391"}


var onloadcallback=function(){
//    Load.initPage(BNJS);                    //页面加载
//    var interfacePath=URLUtil.getUrlMsg();  //URL信息获取
//
//    //创建业务模板类,Base类见baseTemplate
//    var Nav=Util.extend(Base,{
//        events:{
//            ".hd-cat":{
//                "click": function(ev){
//                    var $cat=$(ev.target);
//                    var catId=$cat.attr("id");
//                    var catName=$cat.html();
//                    if (catId == "345") {
//                        var paramOther = {
//                            action      : "view",
//                            request_type: 4,
//                            category_id : catId
//                        };
//                        urlParam = URLUtil.getUrlByParams($.extend(userinfo, paramOther));
//                        var url = interfacePath + urlParam;
//                        BNJS.http.get({
//                            url      : url,
//                            onSuccess: function () {
//                                goToCir();
//                            },
//                            onFail   : function () {
//                                goToCir();
//                            }
//                        });
//
//                        function goToCir() {
//                            url = "bainuo://component?compid=movie&comppage=portal";
//                            BNJS.page.start(url, {});
//                        }
//
//                        return;
//                    }
//
//                    var paramOther = {
//                        catId:catId,
//                        catName:catName
//                    };
//                    var urlParam = URLUtil.getUrlByParams();
//                    var url = "bainuo://component?url=http://172.22.229.28:8080/lovers_cat_leaf.html";
//
//                    params = $.extend(userinfo, paramOther);
//
//                    BNJS.page.start(url, params);
//                }
//            }
//        }
//    });           //品类导航
//    var Place=PlaceList(userinfo);          //地点列表
//
//    var nav = new Nav();
//    nav.init({
//        containerId: "#hd-nav",       //传入容器ID
//        templateId : "hdNavTpl",     //传入模板ID
//        title      : "约会好去处"
//    });
//
//    var headerData ={
//        "cat": [
//            {"category_id": 326, "category_name": "\u7231\u7684\u6599\u7406\u5e97"},
//            {"category_id": 345, "category_name": "\u4e00\u8d77\u770b\u7535\u5f71"},
//            {"category_id": 320, "category_name": "\u4e00\u8d77\u73a9\u4e00\u8d77\u75af"}
//        ],
//            "s"  : "38af6cd8dccd10a45dde159bbe8b1832",
//            "userinfo": {
//                "x": "113.944391", "y": "22.538244", "cityid": "300210000", "loccityid": "100010000", "cuid": "cuidtest", "userid": null, "tid": "lovestopicbanner"
//            }
//    };
//    nav.run(headerData);
//
//    var place = new Place();
//    place.init({
//        containerId: "#hd-place",       //传入容器ID
//        templateId : "hdPlaceTpl",     //传入模板ID
//        title      : "精彩推荐"
//    });
//
//
//    //刷新地点列表
//    var paramOther = {
//        request_type: 1
//    };
//    urlParam = URLUtil.getUrlByParams($.extend(userinfo, paramOther));
//    var url = interfacePath+ urlParam;
//    BNJS.http.get({
//        url      : url,
//        onSuccess: function (placeData) {
//            place.run(placeData);
//        },
//        onFail   : function (res) {
//            BNJS.ui.showErrorPage();
//        }
//    });

//    var paramOther = {
//        request_type: 2,
//        begin_index : 0,
//        list_num    : 15
//    };
//    urlParam = URLUtil.getUrlByParams($.extend(userinfo, paramOther));
//    var url = interfacePath + urlParam;
    var goodsList = new GoodsList();
    goodsList.init({
        containerId: "#goods-list",         //传入容器ID
        templateId : "goodsListTpl"         //传入模板ID
    });

    goodsList.run(goodsListData);

//    BNJS.http.get({
//        url      : url,
//        onSuccess: function (goodsListData) {
//            goodsList.run(goodsListData);
//            BNJS.ui.hideLoadingPage();
//        },
//        onFail   : function (res) {
//            BNJS.ui.showErrorPage();
//        }
//    });

    $(window).scrollLoader({
        loadContent: function (page) {
            Load.loading();

            var $this = $(this);
            $(this).trigger('disableLoad');



           setTimeout(function(){
               goodsList.scrollPage(goodsListData);
               $this.trigger('enableLoad');
           },1000);


//            var paramOther = {
//                request_type: 2,
//                begin_index : this.page * 15,
//                list_num    : 15
//            };
//
//            urlParam = URLUtil.getUrlByParams($.extend(userinfo, paramOther));
//            var url = interfacePath + urlParam;
//
//            BNJS.http.get({
//                url: url,
//                onSuccess: function (goodsListData) {
//                    if (goodsListData.list.length) {
//                        goodsList.scrollPage(goodsListData);
//                        $this.trigger('enableLoad');
//                    } else {
//                        Load.loadnone();
//                    }
//                    Load.loadend();
//                },
//                onFail   : function (res) {
//                    Load.loaderror();
//                    $this.trigger('enableLoad');
//                }
//            });
        }
    });
};

!function (o) {
    //BNJSReady(onloadcallback);
    onloadcallback();
}(window);



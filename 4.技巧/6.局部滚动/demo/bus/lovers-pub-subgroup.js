/**
 * Created by lihongji on 2015/7/6.
 */

var Events={
    proxy:{
        ClickMoreDeal:function(ev){
            ev.stopPropagation();
            var target=ev.target;
            var $more=$(target).closest(".more-item");
            var $deals=$(target).closest(".items-list").children("li");
            $deals.show();
            $more.hide();
        }
    }
};



var PlaceList=function(userinfo){
    var Place=Util.extend(Base,{            //地点列表
        events:{
            ".more-place":{
                "click": function(ev){
                    var paramOther = {
                        request_type: 5,
                        location    : (userinfo.y + "," + userinfo.x)
                    };
                    var urlParam = URLUtil.getUrlByParams();
                    var url = "bainuo://component?url=http://172.22.229.28:8080/lovers_place_leaf.html";

                    //params 需要传到打开页面的数据
                    params = $.extend(userinfo, paramOther);

                    BNJS.page.start(url, params);
                }
            },
            ".hd-place-stand":{
                "click":function(ev){
                    var $ttl=$(ev.target).closest(".hd-place-stand").children(".hd-place-ttl");
                    var placeId=$ttl.attr("id");
                    var placeName=$ttl.html();

                    var paramOther = {
                        placeId:placeId,
                        placeName:placeName
                    };
                    var urlParam = URLUtil.getUrlByParams();
                    var url = "bainuo://component?url=http://172.22.229.28:8080/lovers_placelist_leaf.html";

                    params = $.extend(userinfo, paramOther);

                    BNJS.page.start(url, params);
                }
            }
        }
    });
    return Place;
};

var GoodsList=(function(){
    var GoodsList=Util.extend(Base,{
        events:{
            ".more-item":{
                "click": Events.proxy.ClickMoreDeal
            }
        }
    });
    return GoodsList;
})();


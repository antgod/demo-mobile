var Util={
	extend:function(Parent,Expand){
		var Child=function(){
			Parent.call(this);
		}
		Child.prototype=new Parent();
		
		this.mix(Child.prototype,Expand);
		
		Child.prototype.constructor = Child;
		return Child;
	},

	mix : function(r, s) {
		if(!r)r={};
		for ( var k in s) {
			if (s.hasOwnProperty(k)) {
				r[k] = s[k];
			}
		}
	},

    url2Params: function() {
        var url = location.search,
            params = {},
            params = [];

        if (url.indexof('?') != -1) {
            params = url.substr(1).split('&');
            for (var i = params.length; i--;) {
                var kv = params[i].split('='),
                    k = kv[0],
                    v = kv[1];

                params[k] = unescape(v);
            }
        }

        return params;
    },

    params2Url:function(o){
        var url=[];
        for(var i in o){
            var val=o[i];
            url.push(i+"="+val);
        }
        return url.join("&")
    },

	isJson:function(obj){
        var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length
        return isjson;
    },

    toast:function(msg) {
        setTimeout(function () {
            alert(msg);
        });
    }
};

/*
 * 事件处理器
 */
var Load = {
    initPage:function(BNJS){
        BNJS.ui.showLoadingPage();
        BNJS.ui.title.addActionButton({
            text    : '分享',
            icon    : 'share',
            callback: function () {
                // 点击回调分享功能
                BNJS.ui.share({
                    title    : '分享测试',
                    imgUrl   : 'http://e.hiphotos.baidu.com/nuomi/wh%3D470%2C285/sign=bbd1a730d588d43ff0fc99f64a2efe29/3801213fb80e7bec133503a42c2eb9389a506b83.jpg',
                    url      : 'http://www.nuomi.com',
                    onSuccess: function () {
                        alert('分享成功')
                    },
                    onFail   : function () {
                        alert('分享失败')
                    }
                });
            }
        });
    },
    initerror:function(){
        $(".init").hide();
        $(".initerror").show();
    },
    loading : function() {
        $(".loading").show();
    },
    loadend : function() {
        $(".loading").hide();
        $(".collapse").last().hide();
    },
    loaderror : function() {
        $(".error").show();
        this.loadend();
    },

    loadnonehide : function(){
        $(".none").hide();
    },

    tabloading : function(){
        $(".footer").hide();
        $(".tabload").show();
        $(".collapse").last().hide();
    },

    tabloadend : function(){
        $(".tabload").hide();
        $(".footer").show();
    },

    loadnone : function(){
        $(".none").show();
        $(".collapse").last().hide();
    },
    datajudge:function(data){
        if(!data||data=="null"||data==""||data=="false"){
            return false;
        }
        return true;
    }
}


var Filter={
    starWidth : function(store) {
        var point_int = parseInt(store); // 分数整数部分
        var point_double = store - point_int; // 分数小数部分

        var star_width =1; // 单个星宽度
        var star_whole_width =1.416; // 完整的星宽度
        var star_width = point_int * star_whole_width + point_double * star_width + "rem";
        return star_width;
    },

    dealScore:function(score){
        var score=this.point((score/10000),1);
        if(score==0.0||!score){
            return "";
        }else{
            return score+"分";
        }
    },

    point:function(num,point){
        return num.toFixed(point);
    },

    rmb:function(num){
        if(parseInt(num)==num){
            return "￥"+num;
        }else{
            return "￥"+this.point(num,1);
        }
    },

    getDistance:function(distance) {
        if (distance < 1000) {
            if (distance <= 0) {
                distance = "";
            } else if(distance <100){
                distance ='<100m';
            } else {
                distance =parseInt(distance)+ 'm';
            }
        } else {
            if (distance > 50000) {
                distance = '>50km';
            } else {
                distance = Number(distance / 1000).toFixed(1) + 'km';
            }
        }
        return distance;
    },
    displayMore:function(dealsLen){
        return dealsLen<=2?"none":"block";
    },
    displayDeal:function(index){
        return index>1?"none":"block";
    },
    display:function(index){
        return index?"block":"none";
    },
    campaignMsg:function (market_info) {
        var campaignText="";
        var campaign={mj:0,dj:0};
        if (market_info && market_info != "null" && (market_info.activityList instanceof Array)) {
            var activityList = market_info.activityList;
            for (var key in activityList) {
                var item = activityList[key];
                if(item.type="0"&&item.saleTarget=="goods"){

                }

                if (item.id && item.id == "68") {
                    if(!campaign.dj){
                        campaignText+='<span class="goods-dj">全网低价</span>';
                        campaign.dj=1;
                    }
                }

                if(item.type="0"&&item.saleTarget=="order"){
                    if(!campaign.mj){
                        campaignText+='<span class="goods-mj">满减</span>';
                        campaign.mj=1;
                    }
                }
            }
        }
        return campaignText;
    },
    array2String:function(cats) {
        return cats.join(" ");
    },
    getNearByIcon:function(category_first, category_second) {
        var icon;
        switch (category_first) {
            case 895:
            case 899:
            case 900:
            case 907:
            case 908:
            case 918:
            case 949:
                icon = "image/icon4.png";
                break;
            case 898:
                icon = "image/icon12.png";
                break;
            case 341:
                icon = "image/icon7.png";
                break;
            case 345:
                icon = "image/icon2.png";
                break;
            case 364:
                icon = "image/icon5.png";
                break;
            case 392:
                icon = "image/icon6.png";
                break;
            case 460:
                icon = "image/icon1.png";
                break;
            case 423:
                icon = "image/icon4.png";
                break;
            default:
                switch (category_second) {
                    case 320:
                        icon = "image/icon4.png";
                        break;
                    case 326:
                        icon = "image/icon1.png";
                        break;
                    default:
                        icon = "image/icon6.png";
                        break;
                }
        }
        return icon;
    },
    getPlaceImage:function(type){
        if (type) {
            return "../image/" + type + ".png";
        } else {
            return "../image/" + (Math.floor(Math.random() * 2) + 1) + ".png";
        }
    },
    currentPrice : function (market_info) {
        if (market_info && market_info != "null" && (market_info.activityList instanceof Array)) {
            var activityList = market_info.activityList;
            for (var key in activityList) {
                var item = activityList[key];
                if (item.type = "0" && item.saleTarget == "goods"&&item.costAmount) {
                    return  item.costAmount/1000;
                }
            }
        }
        return "";
    }
};

$.fn.scrollLoader = function(options) {
    var defaults = {
        ratio:.005,
        loadContent: function() {}
    };
    var options = $.extend(defaults, options);
    return this.each(function() {
        var obj = this;
        this.enabled = true;
        this.page=0;
        function check() {
            if (this.enabled) {
                var scrollHeight, scrollPosition;
                if (obj == window) {
                    scrollHeight = $(document).height();
                } else {
                    scrollHeight = $(obj)[0].scrollHeight;
                }
                scrollPosition = $(obj).height() + $(obj).scrollTop();
                if ((scrollHeight - scrollPosition) / scrollHeight <= options.ratio) {
                    this.page++;
                    options.loadContent.call(this,this.page);
                }
            }
        };

        $(obj).on("enableLoad", function() {
            this.enabled = true;
        });
        $(obj).on("disableLoad", function() {
            this.enabled = false;
        });
        $(obj).on("manualLoad", function() {
            options.loadContent.call();
        });

        $(obj).on("scroll", function() {
            check();
        });
        return false;
    });
};
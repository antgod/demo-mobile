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
    }
}

/*
 * 事件处理器
 */
var Load = {
    initerror:function(){
        $(".init").hide();
        $(".initerror").show();
    },
    loading : function() {
        $(".error").hide();
        $(".loading").show();
    },
    loadend : function() {
        $(".loading").hide();
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
var URLUtil={
	/**
	 * 解析url获得参数对象
	 */
	getParams: function() {
		var url = location.search,
			Params = {},
			params = [];

		if (url.indexOf('?') != -1) {
			params = url.substr(1).split('&');
			for (var i = params.length; i--;) {
				var kv = params[i].split('='),
					k = kv[0],
					v = kv[1];

				Params[k] = unescape(v);
			}
		}

		return Params;
	},
	
	getUrlByParams:function(o) {
        var url = [];
        for (var i in o) {
            var val = o[i];
            url.push(i + "=" + val);
        }
        return url.join("&")
    },

    getUrlMsg :function(o){
        var domains={online: "http://scene.nuomi.com",line:"http://10.94.45.40:8181"};
        var domainport = domains.line;
        var interfacePath =domainport+ "/soulscene/lovestopic?";
        return interfacePath;
    }
}
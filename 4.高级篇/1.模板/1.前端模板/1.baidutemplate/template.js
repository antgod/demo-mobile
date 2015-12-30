//创建业务模板类
var Header = (function() {
	var Header=Util.extend(Base,{
		events:{                //可以传递事件与参数（如样式参数等，是全局参数，在模板中直接调用）
            ".tabs .tab":{      //传入选择器
                click:function(ev){        //传入事件
                    $(ev.target).siblings().css("color","#000");
                    $(ev.target).css("color","red");
                },
                touchstart:function(ev){   //可以传多个事件
                    $(ev.target).siblings().css("font-size","12px");
                    $(ev.target).css("font-size","16px");
                }
            }
        }
	});
	return Header;
})();

var Content = (function() {
    var Content=Util.extend(Base,{
        events:{}
    });
    return Content;
})();

var Footer = (function() {
	var Footer=Util.extend(Base,{
		events:{}
	});
	return Footer;
})();

$(function(){
	var header = new Header();
	header.init( {
		containerId : ".head",      //传入容器ID
		templateId : "headTpl",     //传入模板ID
        title:"header",             //传入参数
        events:{                    //初始化也可以传入事件
            ".tab":{
                "click":function(ev){
                   $(ev.target).siblings().css("background","#ccc");
                   $(ev.target).css("background","#aaa");
                }
            }
        }
	});

    var content = new Content();
    content.init( {
        containerId : ".content",
        templateId : "contentTpl"
    });

	var footer = new Footer();
	footer.init( {
		containerId : ".foot",
		templateId : "footTpl",
        footer:["link1","link2","link3"]
	});

    var headData={navs:['选项卡1','选项卡2','选项卡3']};
    header.run(headData,function(){                 //回调函数
        var contentData={content:"内容"};
        content.run(contentData);
    });
    var footData={};
    footer.run(footData);
});

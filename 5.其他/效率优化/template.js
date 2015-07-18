/**
 * Created by lihongji on 2015/7/12.
 */
var express=require('express');
var path=require("path") ;
var app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/')); //设置模板存放模板

app.get('/',function(req,res){
   res.render('index',{navs:["菜单1","菜单2","菜单3"],footer:"footer"});
});
app.listen(3000);

/**
 * Created by lihongji on 2015/11/11.
 */

var  fs= require("fs");

//var compileFile=function(){
//    var path=Array.prototype.shift.call(arguments),
//        options=Array.prototype.shift.call(arguments)
//    fileContent= fs.readFileSync(__dirname + '/'+path, options.charset||'utf8');
//    var template=hbs.compile(fileContent)
//    return template(options.data||{});
//};
//
//hbs.registerHelper('fullName', function(person) {
//    return person.firstName + " " + person.lastName;
//});


var Velocity = require('velocityjs');

//1. 直接解析
console.log(Velocity.render('${name}name', {name:"lhj"}));

//2. 使用Parser和Compile
//var Parser = Velocity.Parser;
//var Compile = Velocity.Compile;
//
//var asts = Parser.parse('string of velocity');
//console.log(new Compile(asts))


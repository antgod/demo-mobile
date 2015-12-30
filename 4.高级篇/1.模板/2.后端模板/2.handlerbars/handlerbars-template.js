/**
 * Created by lihongji on 2015/11/11.
 */

var express = require('express'),
    app = express(),
    fs= require("fs"),
    hbs = require('handlebars');

var compileFile=function(){
    var path=Array.prototype.shift.call(arguments),
        options=Array.prototype.shift.call(arguments)
    fileContent= fs.readFileSync(__dirname + '/'+path, options.charset||'utf8');
    var template=hbs.compile(fileContent)
    return template(options.data||{});
};

hbs.registerHelper('fullName', function(person) {
    return person.firstName + " " + person.lastName;
});


app.get('/index', function (req, res){
    var content=compileFile("content.html",{data:{
        author: {firstName: "Alan", lastName: "Johnson"},
        body: "I Love Handlebars",
        comments: [{
            author: {firstName: "Yehuda", lastName: "Katz"},
            body: "Me too!"
        },
        {
            author: {firstName: "Li", lastName: "HongJi"},
            body: "I don't love!"
        }]
    }});

    var index=compileFile("index.html",{data:{
        content: content
    }});

    res.send(index);
});

app.listen(4000);


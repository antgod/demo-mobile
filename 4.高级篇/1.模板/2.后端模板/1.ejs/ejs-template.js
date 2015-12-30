/**
 * Created by lihongji on 2015/7/12.
 */
var path = require("path"),
    fs = require("fs"),
    ejs = require('ejs'),
    express = require('express'),
    app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/')); //设置模板存放模板

var compileFile = function () {
    var path = Array.prototype.shift.call(arguments),
        options = Array.prototype.shift.call(arguments)
    fileContent = fs.readFileSync(__dirname + '/' + path, options.charset || 'utf8');

    return ejs.render(fileContent, options.data || {});
};

var filters = {
    last: function (arr) {
        return arr[arr.length - 1];
    }
};

app.get('/index', function (req, res) {
    var header = compileFile("header.ejs", {data: {
        navs: ["菜单1", "菜单2", "菜单3"]
    }});

    var content = compileFile("content.ejs", {data: {
        filters: filters,
        names  : ['内容1', '内容2', '内容3']
    }});

    res.render('index', {header: header, content: content, footer: "footer"});
});

app.listen(3000);

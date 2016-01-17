var receiver = 'http://blog.qiyuetou.com/blog/wx/receiver.php', root = '/alidata/www/blog/w/';

fis.config.set('pack', {
    'pkg/aio.css': '**.less'
});

fis.config.merge({
    namespace: 'usershare',
    deploy   : {
        remote: [
            {
                //如果配置了receiver，fis会把文件逐个post到接收端上
                receiver: receiver,
                //从产出的结果的static目录下找文件
                from    : '/',
                //true: 上传目录从static下一级开始不包括static目录
                subOnly : false,
                //保存到远端机器的root + /webroot/static目录下
                //这个参数会跟随post请求一起发送
                to      : root,
                //某些后缀的文件不进行上传
                exclude : /.*\.(?:svn|cvs|tar|rar|psd).*/
            }
        ]
    }
});


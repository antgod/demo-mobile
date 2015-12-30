// 设置图片合并的最小间隔

fis.config.merge({
    modules : {
        parser : {
            less : ['less']
        },
        deploy : ['default', 'zip', 'tar']
    },
    roadmap : {
        ext : {
            less : 'css'
        }
    },
    namespace : 'friend',
    deploy: {
        remote: [{
            receiver : 'http://cp01-rdqa-dev412.cp01.baidu.com:8181/receiver.php',
            from : '/friend',
            to : '/home/users/xiangxiaobao/odp-dev/webroot/static/',
            replace : {
                from : fis.config.get('replaceFrom'),
                to : fis.config.get('replaceTo')
            }
        }]
    }
});
/**
 * Created by lihongji on 2015/6/13.
 */
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
        }

        $(obj).bind("enableLoad", function() {
            this.enabled = true;
        });
        $(obj).bind("disableLoad", function() {
            this.enabled = false;
        });
        $(obj).bind("manualLoad", function() {
            options.loadContent.call();
        });

        $(obj).bind("scroll", function() {
            check();
        });
        return false;
    });
};

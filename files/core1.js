define("jquery", [], function(a) {
    var b = window.jQuery({});
    window.jQuery.subscribe = function () {
        b.on.apply(b, arguments)
    }, window.jQuery.unsubscribe = function () {
        b.off.apply(b, arguments)
    }, window.jQuery.publish = function () {
        b.trigger.apply(b, arguments)
    }
    return window.jQuery;
});

window.console || (console = {}), console.log = console.log || function () {
}, console.warn = console.warn || function () {
}, console.error = console.error || function () {
}, console.info = console.info || function () {
}, require.config({
    baseUrl: "files/",
    urlArgs: "bust=v145",
    paths: {/*jquery: "../libs/jquery-2.1.1",*/ ui: "", modules: "", plugins: ""},
    shim: {"slick.min": ["jquery"], "parsley.min": ["jquery"]},
    waitSeconds: 0
/*}), require(["jquery"], function (a) {
    !function (a) {
        var b = $({});
        window.pubsub = b, $.subscribe = function () {
            b.on.apply(b, arguments)
        }, $.unsubscribe = function () {
            b.off.apply(b, arguments)
        }, $.publish = function () {
            b.trigger.apply(b, arguments)
        }
    }(jQuery), a(function () {
        a.initWidgets = function (b) {
            a(b || "html").find(".js-widget").each(function (b, c) {
                var d = this.onclick, e = d ? this.onclick() : {}, f = a(this);
                e.widget && a.fn[e.widget] ? f[e.widget](e.options ? e.options : null).removeClass("js-widget").addClass("js-widget-inited") : e.widget && require(["jquery", "ui", e.widget], function () {
                    a.fn[e.widget] && f[e.widget](e.options ? e.options : null).removeClass("js-widget").addClass("js-widget-inited")
                })
            })
        }, $.destroyWidgets = function (b) {
            $(b || document.body).find(".js-widget-inited").each(function () {
                var b = this.onclick, c = b ? this.onclick() : {}, d = $(this);
                c.widget && $.fn[c.widget] && d[c.widget]("destroy").removeClass("js-widget-inited").addClass("js-widget")
            })
        }, $.initWidgets()
    })
});*/
}), $(function () {
    $.initWidgets = function (b) {
        $(b || "html").find(".js-widget").each(function (b, c) {
            var d = this.onclick, e = d ? this.onclick() : {}, f = $(this);
            e.widget && $.fn[e.widget] ? f[e.widget](e.options ? e.options : null).removeClass("js-widget").addClass("js-widget-inited") : e.widget && require(["jquery", "ui", e.widget], function () {
                $.fn[e.widget] && f[e.widget](e.options ? e.options : null).removeClass("js-widget").addClass("js-widget-inited")
            })
        })
    }, $.destroyWidgets = function (b) {
        $(b || document.body).find(".js-widget-inited").each(function () {
            var b = this.onclick, c = b ? this.onclick() : {}, d = $(this);
            c.widget && $.fn[c.widget] && d[c.widget]("destroy").removeClass("js-widget-inited").addClass("js-widget")
        })
    }, $.initWidgets()
});
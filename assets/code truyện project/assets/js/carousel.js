!function($) {
    function n(a, i) {
        var s = $.extend({}, $.fn.carousel.defaults, i)
          , o = this
          , d = (a = $(a)).children(".slides");
        d.children("div").addClass("slideItem");
        var l = d.children(".slideItem")
          , f = l.find("img")
          , r = 0
          , h = 0
          , u = l.length
          , c = !1
          , v = !0;
        this.current = r,
        this.length = u,
        this.init = function() {
            var i = s;
            t(),
            1 == i.directionNav && D(),
            "none" != i.buttonNav && P(),
            1 == i.reflection && e(),
            1 == i.shadow && n(),
            1 == i.description && L(),
            1 == i.autoplay && K(),
            Q()
        }
        ;
        var g = function(i) {
            var t, e, n = s, r = u, o = n.frontWidth, a = n.frontHeight;
            return 0 != i && (a = "center" == n.hAlign ? 0 < i && i <= Math.ceil((r - 1) / 2) ? (e = g(i - 1),
            o = n.backZoom * e.width,
            n.backZoom * e.height) : (o = (t = g(r - i)).width,
            t.height) : i == r - 1 ? (o = n.frontWidth / n.backZoom,
            n.frontHeight / n.backZoom) : (e = g(i - 1),
            o = n.backZoom * e.width,
            n.backZoom * e.height)),
            {
                width: o,
                height: a
            }
        }
          , p = function(i) {
            var t, e, n = s, r = u, o = n.frontWidth, a = n.frontHeight + W(i) + X(i);
            return 0 != i && (a = "center" == n.hAlign ? 0 < i && i <= Math.ceil((r - 1) / 2) ? (e = g(i - 1),
            o = n.backZoom * e.width,
            n.backZoom * e.height + W(i) + X(i)) : (o = (t = p(r - i)).width,
            t.height) : i == r - 1 ? (o = n.frontWidth / n.backZoom,
            n.frontHeight / n.backZoom + W(i) + X(i)) : (e = g(i - 1),
            o = n.backZoom * e.width,
            n.backZoom * e.height + W(i) + X(i))),
            {
                width: o,
                height: a
            }
        }
          , m = function(i) {
            var t = s
              , i = g(i);
            return {
                vMargin: i.height * t.vMargin,
                hMargin: i.width * t.hMargin
            }
        }
          , b = function(i) {
            var t = s
              , e = w(i - 1) + (g(i - 1).height - g(i).height) / 2;
            return e = "center" != t.hAlign && i == u - 1 ? t.top - (g(i).height - g(0).height) / 2 : e
        }
          , w = function(i) {
            var t = s
              , e = t.top
              , n = m(i).vMargin;
            return "bottom" == t.vAlign && (e = t.bottom),
            e = 0 != i ? "center" == t.hAlign ? 0 < i && i <= Math.ceil((u - 1) / 2) ? "center" == t.vAlign ? b(i) : b(i) + n : w(u - i) : i == u - 1 ? "center" == t.vAlign ? b(i) : b(i) - n : "center" == t.vAlign ? b(i) : b(i) + n : e
        }
          , y = function(i) {
            var t, e = s, n = u, r = n % 2, o = n / 2, a = m(i).hMargin;
            return 0 == i ? "center" == e.hAlign ? t = (e.carouselWidth - e.frontWidth) / 2 : (t = e.left,
            "right" == e.hAlign && (t = e.right)) : "center" == e.hAlign ? 0 < i && i <= Math.ceil((n - 1) / 2) ? (t = y(i - 1) - a,
            0 == r && i == o && (t = (e.carouselWidth - p(i).width) / 2)) : t = e.carouselWidth - y(n - i) - p(i).width : t = i == n - 1 ? y(0) - (p(i).width - p(0).width) / 2 - a : y(i - 1) + (p(i - 1).width - p(i).width) / 2 + a,
            t
        }
          , k = function(i) {
            var t, e, n = s, r = 1, o = u - n.slidesPerScroll;
            return o < 2 && (o = 2),
            "center" == n.hAlign ? (t = (u - 1) / 2,
            e = o / 2,
            0 == i ? r = 1 : (r = n.backOpacity,
            1 + t - e <= i && i <= t + e && (r = 0))) : 0 == i ? r = 1 : (r = n.backOpacity,
            i < u - o || (r = 0)),
            r
        }
          , x = function(i) {
            for (var t = new Array, e = s, n = u, r = 0; r < n; r++) {
                var o = p(r);
                "left" == e.hAlign ? (t[r] = {
                    width: o.width,
                    height: o.height,
                    top: w(r),
                    left: y(r),
                    opacity: k(r)
                },
                "bottom" == e.vAlign && (t[r] = {
                    width: o.width,
                    height: o.height,
                    bottom: w(r),
                    left: y(r),
                    opacity: k(r)
                })) : (t[r] = {
                    width: o.width,
                    height: o.height,
                    top: w(r),
                    right: y(r),
                    opacity: k(r)
                },
                "bottom" == e.vAlign && (t[r] = {
                    width: o.width,
                    height: o.height,
                    bottom: w(r),
                    right: y(r),
                    opacity: k(r)
                }))
            }
            return t[i]
        }
          , A = function(i) {
            var t = i - r;
            return i < r && (t += u),
            t
        }
          , M = function(i) {
            var t = s.hAlign
              , i = "left" == t || "right" == t ? i == u - 1 ? u - 1 : u - (2 + i) : 0 <= i && i <= (u - 1) / 2 ? u - 1 - i : i - 1;
            return i
        }
          , q = function(i) {
            var t = s;
            1 == t.autoplay && 1 == t.pauseOnHover && U()
        }
          , O = function(i) {
            var t = s;
            1 == t.autoplay && 1 == t.pauseOnHover && 1 == v && K()
        }
          , t = function() {
            var i = s
              , t = u
              , e = f;
            d.css({
                "width": i.carouselWidth + "px",
                "height": i.carouselHeight + "px"
            }).bind("mouseover", q).bind("mouseout", O),
            $(".description").bind("mouseover", q).bind("mouseout", O);
            for (var n = 0; n < t; n++) {
                var r = l.eq(n);
                r.css(x(A(n))).bind("click", T),
                l.eq(A(n)).css({
                    "z-index": M(n)
                }),
                e.eq(n).css(g(A(n))),
                0 == r.css("opacity") ? r.hide() : r.show()
            }
        }
          , C = function(i) {
            0 == i.css("opacity") && i.hide()
        }
          , I = function(i, t, e) {
            var n, r;
            1 != c && (n = s,
            r = u,
            1 == t && U(),
            -1 == (h = (h = i) == r ? 0 : h) && (h = r - 1),
            n.before(o),
            H(),
            v = e)
        }
          , H = function() {
            var i, t, e = u;
            if (1 != c)
                if (r != h) {
                    c = !0,
                    R(r),
                    t = h < r ? (i = e - r + h,
                    r - h) : (i = h - r,
                    r + e - h),
                    dir = t < i ? -1 : 1,
                    -1 == (r = (r += dir) == e ? 0 : r) && (r = e - 1),
                    E(),
                    Y(),
                    S(r);
                    for (var n = 0; n < e; n++)
                        Z(n)
                } else
                    c = !1
        }
          , Z = function(i) {
            var t = s
              , e = l.eq(i)
              , n = A(i);
            e.show(),
            e.animate(x(n), t.speed, "linear", function() {
                C($(this)),
                i == u - 1 && (c = !1,
                r != h ? H() : (o.current = r,
                V(r),
                t.after(o)))
            }),
            e.css({
                "z-index": M(n)
            }),
            f.eq(i).animate(g(n), t.speed, "linear"),
            1 == t.reflection && N(t, e, i),
            1 == t.shadow && B(t, e, i)
        }
          , T = function(i) {
            var t = $(this);
            if (t.index() != r)
                return I(t.index(), !0, !1),
                !1
        }
          , W = function(i) {
            var t = 0
              , e = s;
            return t = 1 == e.reflection ? e.reflectionHeight * g(i).height : t
        }
          , e = function() {
            var i = s
              , t = l
              , e = f
              , n = u
              , r = i.reflectionOpacity
              , o = "rgba(" + i.reflectionColor + "," + r + ")"
              , a = "rgba(" + i.reflectionColor + ",1)"
              , i = '<style type="text/css">';
            i += ".slideItem .gradient {",
            i += "position:absolute; left:0; top:0; margin:0; padding:0; border:none; width:100%; height:100%; ",
            i += "background: -moz-linear-gradient(" + o + "," + a + "); ",
            i += "background: -o-linear-gradient(" + o + "," + a + "); ",
            i += "background: -webkit-linear-gradient(" + o + "," + a + "); ",
            i += "background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(" + o + "), to(" + a + ")); ",
            i += "background: linear-gradient(" + o + "," + a + "); ",
            i += "} ",
            i += ".slideItem .reflection {",
            i += "filter: progid:DXImageTransform.Microsoft.Alpha(style=1,opacity=" + 100 * r + ",finishOpacity=0,startX=0,finishX=0,startY=0,finishY=100)",
            i += "-ms-filter: progid:DXImageTransform.Microsoft.Alpha(style=1,opacity=" + 100 * r + ",finishOpacity=0,startX=0,finishX=0,startY=0,finishY=100)",
            i += "}",
            $(i += "</style>").appendTo("head");
            for (var d = 0; d < n; d++) {
                var h = e.eq(d).attr("src")
                  , c = g(d);
                $('<div class="reflection"></div>').css({
                    "position": "absolute",
                    "margin": "0",
                    "padding": "0",
                    "border": "none",
                    "overflow": "hidden",
                    "left": "0",
                    "top": g(d).height + "px",
                    "width": "100%",
                    "height": W(d)
                }).appendTo(t.eq(d)).append($('<img src="' + h + '" />').css({
                    "width": c.width + "px",
                    "height": c.height + "px",
                    "left": "0",
                    "margin": "0",
                    "padding": "0",
                    "border": "none",
                    "-moz-transform": "rotate(180deg) scale(-1,1)",
                    "-webkit-transform": "rotate(180deg) scale(-1,1)",
                    "-o-transform": "rotate(180deg) scale(-1,1)",
                    "transform": "rotate(180deg) scale(-1,1)",
                    "filter": "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)",
                    "-ms-filter": "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"
                })).append('<div class="gradient"></div>')
            }
        }
          , N = function(i, t, e) {
            var n = t.children(".reflection")
              , t = i.speed
              , i = g(A(e));
            n.animate({
                "top": i.height + "px",
                "height": W(A(e))
            }, t, "linear"),
            n.children("img").animate(i, t, "linear")
        }
          , X = function(i) {
            var t = 0;
            return t = 1 == s.shadow ? .1 * g(i).height : t
        }
          , z = function(i) {
            var t = l.eq(i).find(".shadow")
              , e = t.children(".shadowLeft")
              , n = t.children(".shadowRight");
            t.children(".shadowMiddle");
            return g(i).width - (e.width() + n.width())
        }
          , n = function() {
            var i = l
              , t = u
              , e = g(0).width;
            "center" != s.hAlign && (e = g(t - 1).width);
            for (var n = 0; n < t; n++) {
                var r = i.eq(n);
                $('<div class="shadow"></div>').css({
                    "width": e + "px",
                    "z-index": "-1",
                    "position": "absolute",
                    "margin": "0",
                    "padding": "0",
                    "border": "none",
                    "overflow": "hidden",
                    "left": "0",
                    "bottom": "0"
                }).append('<div class="shadowLeft"></div><div class="shadowMiddle"></div><div class="shadowRight"></div>').appendTo(r).children("div").css({
                    "position": "relative",
                    "float": "left"
                }),
                r.find(".shadow").children(".shadowMiddle").width(z(n))
            }
        }
          , B = function(i, t, e) {
            t.find(".shadow").children(".shadowMiddle").animate({
                "width": z(A(e)) + "px"
            }, i.speed, "linear")
        }
          , D = function() {
            var i = a;
            i.append('<div class="nextButton"></div><div class="prevButton"></div>'),
            i.children(".nextButton").bind("click", function(i) {
                I(r + 1, !0, !1)
            }),
            i.children(".prevButton").bind("click", function(i) {
                I(r - 1, !0, !1)
            })
        }
          , P = function() {
            var i = a
              , t = u
              , e = "bullet"
              , n = "bulletActive";
            "numbers" == s.buttonNav && (e = "numbers",
            n = "numberActive"),
            i.append('<div class="buttonNav"></div>');
            for (var r = i.children(".buttonNav"), o = 0; o < t; o++)
                $('<div class="' + e + '">' + ("numbers" == e ? o + 1 : "") + "</div>").css({
                    "text-align": "center"
                }).bind("click", function(i) {
                    I($(this).index(), !0, !1)
                }).appendTo(r);
            i = r.children("." + e);
            i.eq(0).addClass(n),
            r.css({
                "width": u * i.outerWidth(!0),
                "height": i.outerHeight(!0)
            })
        }
          , Y = function() {
            var i = s
              , t = a.children(".buttonNav");
            "numbers" == i.buttonNav ? ((i = t.children(".numbers")).removeClass("numberActive"),
            i.eq(r).addClass("numberActive")) : ((t = t.children(".bullet")).removeClass("bulletActive"),
            t.eq(r).addClass("bulletActive"))
        }
          , L = function() {
            for (var i = $(s.descriptionContainer), t = (i.width(),
            i.height(),
            i.children("div")), e = t.length, n = 0; n < e; n++)
                t.eq(n).hide().css({
                    "position": "absolute",
                    "top": "0",
                    "left": "0"
                });
            t.eq(0).show()
        }
          , R = function(i) {
            var t = s;
            1 == t.description && $(t.descriptionContainer).children("div").eq(i).hide()
        }
          , S = function(i) {
            var t = s;
            1 == t.description && $(t.descriptionContainer).children("div").eq(i).show()
        }
          , j = function() {
            var i = g(0);
            $('<div class="spinner"></div>').hide().css(x(0)).css({
                "width": i.width + "px",
                "height": i.height + "px",
                "z-index": u + 3,
                "position": "absolute",
                "cursor": "pointer",
                "overflow": "hidden",
                "padding": "0",
                "margin": "0",
                "border": "none"
            }).appendTo(d)
        }
          , Q = function() {
            j();
            var i = g(0);
            $('<div class="videoOverlay"></div>').hide().css(x(0)).css({
                "width": i.width + "px",
                "height": i.height + "px",
                "z-index": u + 2,
                "position": "absolute",
                "cursor": "pointer",
                "overflow": "hidden",
                "padding": "0",
                "margin": "0",
                "border": "none"
            }).bind("click", G).appendTo(d),
            V(r)
        }
          , V = function(i) {
            l.eq(i).children("a").hasClass("video") && d.children(".videoOverlay").show()
        }
          , E = function() {
            var i = d;
            i.children(".videoOverlay").hide().children().remove(),
            i.children(".spinner").hide()
        }
          , F = function() {
            var i = d.children(".videoOverlay")
              , t = l.eq(r).children("a").attr("href")
              , t = getVideo(t);
            $("<iframe></iframe>").attr({
                "width": i.width() + "px",
                "height": i.height() + "px",
                "src": t,
                "frameborder": "0"
            }).bind("load", J).appendTo(i)
        }
          , G = function(i) {
            F(),
            d.children(".spinner").show(),
            $(this).hide(),
            1 == s.autoplay && (U(),
            v = !1)
        }
          , J = function(i) {
            var t = d;
            t.children(".videoOverlay").show(),
            t.children(".spinner").hide()
        }
          , K = function() {
            intervalProcess = setInterval(function() {
                I(r + 1, !1, !0)
            }, s.autoplayInterval)
        }
          , U = function() {
            1 == s.autoplay && clearInterval(intervalProcess)
        };
        this.prev = function() {
            I(r - 1, !0, !1)
        }
        ,
        this.next = function() {
            I(r + 1, !0, !1)
        }
        ,
        this.goTo = function(i) {
            I(i, !0, !1)
        }
        ,
        this.pause = function() {
            U(),
            v = !1
        }
        ,
        this.resume = function() {
            1 == s.autoplay && K()
        }
    }
    $.fn.carousel = function(i) {
        for (var t = [], e = 0; e < this.length; e++)
            this[e].carousel || (this[e].carousel = new n(this[e],i),
            this[e].carousel.init()),
            t.push(this[e].carousel);
        return 1 < t.length ? t : t[0]
    }
    ,
    $.fn.carousel.defaults = {
        hAlign: "center",
        vAlign: "center",
        hMargin: .4,
        vMargin: .2,
        frontWidth: 400,
        frontHeight: 300,
        carouselWidth: 1e3,
        carouselHeight: 360,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backZoom: .8,
        slidesPerScroll: 5,
        speed: 500,
        buttonNav: "none",
        directionNav: !1,
        autoplay: !0,
        autoplayInterval: 5e3,
        pauseOnHover: !0,
        mouse: !0,
        shadow: !1,
        reflection: !1,
        reflectionHeight: .2,
        reflectionOpacity: .5,
        reflectionColor: "255,255,255",
        description: !1,
        descriptionContainer: ".description",
        backOpacity: 1,
        before: function(i) {},
        after: function(i) {}
    }
}(jQuery);

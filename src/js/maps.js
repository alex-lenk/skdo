! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("isMobile")) : "function" == typeof define && define.amd ? define(["isMobile"], t) : "object" == typeof exports ? exports.ymapsTouchScroll = t(require("isMobile")) : e.ymapsTouchScroll = t(e.isMobile)
}(this, function (e) {
    return function (e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var r = o[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.d = function (e, o, n) {
            t.o(e, o) || Object.defineProperty(e, o, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, t.n = function (e) {
            var o = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(o, "a", o), o
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function (e, t, o) {
        "use strict";

        function n(e) {
            function t(e, t, o) {
                var n = document.createElement("div");
                for (var r in o) n.style[r] = o[r];
                return n.classList.add(e), t.appendChild(n), n
            }

            function o() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                l.style.zIndex = e ? u : u - 1, a.style.opacity = e ? ".5" : 0
            }
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (i.default && i.default.any && e.behaviors.isEnabled("multiTouch")) {
                e.behaviors.disable("drag");
                var r = e.container.getParentElement();
                getComputedStyle(r).position || (r.style.position = "relative");
                var u = getComputedStyle(e.container.getElement()).zIndex,
                    l = t("ymaps-touch-scroll", r, {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        zIndex: u - 1
                    }),
                    a = t("ymaps-touch-scroll-bg", l, {
                        background: "#000",
                        opacity: "0",
                        width: "100%",
                        height: "100%",
                        transition: "opacity .1s ease-in-out"
                    }),
                    s = e.margin.getMargin();
                for (var c in s) s[c] += 20;
                t("ymaps-touch-scroll-content", l, {
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    color: "#fff",
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    boxSizing: "border-box",
                    textOverflow: "ellipsis",
                    padding: s.join("px ") + "px"
                }).textContent = n.hasOwnProperty("text") ? n.text : "Чтобы переместить карту проведите по ней двумя пальцами", r.addEventListener("touchmove", function () {
                    return o()
                }), r.addEventListener("touchend", function () {
                    return o(!1)
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n;
        var r = o(1),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        e.exports = t.default
    }, function (t, o) {
        t.exports = e
    }])
});
! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ymapsTouchScroll = t() : e.ymapsTouchScroll = t()
}(this, function () {
    return function (e) {
        function t(o) {
            if (i[o]) return i[o].exports;
            var n = i[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.d = function (e, i, o) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.n = function (e) {
            var i = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function (e, t, i) {
        "use strict";

        function o(e) {
            function t(e, t, i) {
                var o = document.createElement("div");
                for (var n in i) o.style[n] = i[n];
                return o.classList.add(e), t.appendChild(o), o
            }

            function i() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                s.style.zIndex = e ? d : d - 1, a.style.opacity = e ? ".5" : 0
            }
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (r.default && r.default.any && e.behaviors.isEnabled("multiTouch")) {
                e.behaviors.disable("drag");
                var n = e.container.getParentElement();
                getComputedStyle(n).position || (n.style.position = "relative");
                var d = getComputedStyle(e.container.getElement()).zIndex,
                    s = t("ymaps-touch-scroll", n, {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        zIndex: d - 1
                    }),
                    a = t("ymaps-touch-scroll-bg", s, {
                        background: "#000",
                        opacity: "0",
                        width: "100%",
                        height: "100%",
                        transition: "opacity .1s ease-in-out"
                    }),
                    l = e.margin.getMargin();
                for (var p in l) l[p] += 20;
                t("ymaps-touch-scroll-content", s, {
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    color: "#fff",
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    boxSizing: "border-box",
                    textOverflow: "ellipsis",
                    padding: l.join("px ") + "px"
                }).textContent = o.hasOwnProperty("text") ? o.text : "Чтобы переместить карту проведите по ней двумя пальцами", n.addEventListener("touchmove", function () {
                    return i()
                }), n.addEventListener("touchend", function () {
                    return i(!1)
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = o;
        var n = i(1),
            r = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n);
        e.exports = t.default
    }, function (e, t, i) {
        var o, n, r;
        ! function (i) {
            var d = /iPhone/i,
                s = /iPod/i,
                a = /iPad/i,
                l = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
                p = /Android/i,
                c = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
                u = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
                f = /Windows Phone/i,
                h = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
                b = /BlackBerry/i,
                v = /BB10/i,
                y = /Opera Mini/i,
                x = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
                w = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
                m = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
                g = function (e, t) {
                    return e.test(t)
                },
                A = function (e) {
                    var t = e || navigator.userAgent,
                        i = t.split("[FBAN");
                    if (void 0 !== i[1] && (t = i[0]), i = t.split("Twitter"), void 0 !== i[1] && (t = i[0]), this.apple = {
                            phone: g(d, t),
                            ipod: g(s, t),
                            tablet: !g(d, t) && g(a, t),
                            device: g(d, t) || g(s, t) || g(a, t)
                        }, this.amazon = {
                            phone: g(c, t),
                            tablet: !g(c, t) && g(u, t),
                            device: g(c, t) || g(u, t)
                        }, this.android = {
                            phone: g(c, t) || g(l, t),
                            tablet: !g(c, t) && !g(l, t) && (g(u, t) || g(p, t)),
                            device: g(c, t) || g(u, t) || g(l, t) || g(p, t)
                        }, this.windows = {
                            phone: g(f, t),
                            tablet: g(h, t),
                            device: g(f, t) || g(h, t)
                        }, this.other = {
                            blackberry: g(b, t),
                            blackberry10: g(v, t),
                            opera: g(y, t),
                            firefox: g(w, t),
                            chrome: g(x, t),
                            device: g(b, t) || g(v, t) || g(y, t) || g(w, t) || g(x, t)
                        }, this.seven_inch = g(m, t), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
                },
                F = function () {
                    var e = new A;
                    return e.Class = A, e
                };
            void 0 !== e && e.exports && "undefined" == typeof window ? e.exports = A : void 0 !== e && e.exports && "undefined" != typeof window ? e.exports = F() : (n = [], o = i.isMobile = F(), void 0 !== (r = "function" == typeof o ? o.apply(t, n) : o) && (e.exports = r))
        }(this)
    }])
});
$(function () {
    var e = !1;
    ymaps.ready(function () {
        var e = new ymaps.Map("map", {
            center: [55.744156, 37.639141],
            zoom: 18,
            controls: [],
            scroll: false
        });
        e.behaviors.disable('scrollZoom');
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'), myPlacemark = new ymaps.Placemark(e.getCenter(), {
            hintContent: "Собственный значок метки",
            balloonContent: "Мы находимся тут!"
        }, {
            iconLayout: "default#image",
            iconImageHref: "templates/img/map-marker.png",
            iconImageSize: [60, 70],
            iconImageOffset: [-30, -80]
        });
            e.geoObjects.add(myPlacemark);
            e.controls.add('zoomControl');
        /*.add(myPlacemarkWithContent)*/

    })
});
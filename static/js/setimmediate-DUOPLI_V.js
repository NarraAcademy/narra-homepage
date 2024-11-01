import { c as e } from "./@ethereumjs-aMURc4PS.js";

!function(e) {
    if (!e.setImmediate) {
        var t, n, a, s, o, c = 1, i = {}, r = !1, f = e.document, l = Object.getPrototypeOf && Object.getPrototypeOf(e);
        l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? t = function(e) {
            process.nextTick((function() {
                m(e);
            }));
        } : !function() {
            if (e.postMessage && !e.importScripts) {
                var t = !0, n = e.onmessage;
                return e.onmessage = function() {
                    t = !1;
                }, e.postMessage("", "*"), e.onmessage = n, t;
            }
        }() ? e.MessageChannel ? ((a = new MessageChannel).port1.onmessage = function(e) {
            m(e.data);
        }, t = function(e) {
            a.port2.postMessage(e);
        }) : f && "onreadystatechange" in f.createElement("script") ? (n = f.documentElement, 
        t = function(e) {
            var t = f.createElement("script");
            t.onreadystatechange = function() {
                m(e), t.onreadystatechange = null, n.removeChild(t), t = null;
            }, n.appendChild(t);
        }) : t = function(e) {
            setTimeout(m, 0, e);
        } : (s = "setImmediate$" + Math.random() + "$", o = function(t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && m(+t.data.slice(s.length));
        }, e.addEventListener ? e.addEventListener("message", o, !1) : e.attachEvent("onmessage", o), 
        t = function(t) {
            e.postMessage(s + t, "*");
        }), l.setImmediate = function(e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var n = new Array(arguments.length - 1), a = 0; a < n.length; a++) n[a] = arguments[a + 1];
            var s = {
                callback: e,
                args: n
            };
            return i[c] = s, t(c), c++;
        }, l.clearImmediate = u;
    }
    function u(e) {
        delete i[e];
    }
    function m(e) {
        if (r) setTimeout(m, 0, e); else {
            var t = i[e];
            if (t) {
                r = !0;
                try {
                    !function(e) {
                        var t = e.callback, n = e.args;
                        switch (n.length) {
                          case 0:
                            t();
                            break;

                          case 1:
                            t(n[0]);
                            break;

                          case 2:
                            t(n[0], n[1]);
                            break;

                          case 3:
                            t(n[0], n[1], n[2]);
                            break;

                          default:
                            t.apply(void 0, n);
                        }
                    }(t);
                } finally {
                    u(e), r = !1;
                }
            }
        }
    }
}("undefined" == typeof self ? e : self);

/*
  trying to break down the code for the time that appeared on XKCD's page
  during January 2022
*/

// modules used
// math
// get time

(()=>{
    "use strict";
    function t(t, e) {
        if (e.length < t)
            throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present")
    }
    function e(e) {
        t(1, arguments);
        var n = Object.prototype.toString.call(e);
        return e instanceof Date || "object" == typeof e && "[object Date]" === n ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === n ? new Date(e) : ("string" != typeof e && "[object String]" !== n || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),
        console.warn((new Error).stack)),
        new Date(NaN))
    }
    function n(n, r) {
        t(2, arguments);
        var a = e(n)
          , o = e(r)
          , i = a.getTime() - o.getTime();
        return i < 0 ? -1 : i > 0 ? 1 : i
    }
    function r(n, r) {
        t(2, arguments);
        var a = e(n)
          , o = e(r);
        return a.getFullYear() - o.getFullYear()
    }
    function a(a, o) {
        t(2, arguments);
        var i = e(a)
          , s = e(o)
          , u = n(i, s)
          , c = Math.abs(r(i, s));
        i.setFullYear(1584),
        s.setFullYear(1584);
        var l = n(i, s) === -u
          , f = u * (c - Number(l));
        return 0 === f ? 0 : f
    }
    function o(n, r) {
        t(2, arguments);
        var a = e(n)
          , o = e(r)
          , i = a.getFullYear() - o.getFullYear()
          , s = a.getMonth() - o.getMonth();
        return 12 * i + s
    }
    function i(n) {
        t(1, arguments);
        var r = e(n);
        return r.setHours(23, 59, 59, 999),
        r
    }
    function s(n) {
        t(1, arguments);
        var r = e(n)
          , a = r.getMonth();
        return r.setFullYear(r.getFullYear(), a + 1, 0),
        r.setHours(23, 59, 59, 999),
        r
    }
    function u(n) {
        t(1, arguments);
        var r = e(n);
        return i(r).getTime() === s(r).getTime()
    }
    function c(r, a) {
        t(2, arguments);
        var i, s = e(r), c = e(a), l = n(s, c), f = Math.abs(o(s, c));
        if (f < 1)
            i = 0;
        else {
            1 === s.getMonth() && s.getDate() > 27 && s.setDate(30),
            s.setMonth(s.getMonth() - l * f);
            var h = n(s, c) === -l;
            u(e(r)) && 1 === f && 1 === n(r, c) && (h = !1),
            i = l * (f - Number(h))
        }
        return 0 === i ? 0 : i
    }
    function l(t) {
        var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
        return e.setUTCFullYear(t.getFullYear()),
        t.getTime() - e.getTime()
    }
    function f(n) {
        t(1, arguments);
        var r = e(n);
        return r.setHours(0, 0, 0, 0),
        r
    }
    var h = 864e5;
    function g(e, n) {
        t(2, arguments);
        var r = f(e)
          , a = f(n)
          , o = r.getTime() - l(r)
          , i = a.getTime() - l(a);
        return Math.round((o - i) / h)
    }
    function m(t, e) {
        var n = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
        return n < 0 ? -1 : n > 0 ? 1 : n
    }
    function d(n, r) {
        t(2, arguments);
        var a = e(n)
          , o = e(r)
          , i = m(a, o)
          , s = Math.abs(g(a, o));
        a.setDate(a.getDate() - i * s);
        var u = Number(m(a, o) === -i)
          , c = i * (s - u);
        return 0 === c ? 0 : c
    }
    Math.pow(10, 8);
    var v = 36e5;
    function p(n, r) {
        return t(2, arguments),
        e(n).getTime() - e(r).getTime()
    }
    var b = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function(t) {
            return t < 0 ? Math.ceil(t) : Math.floor(t)
        }
    };
    function y(t) {
        return t ? b[t] : b.trunc
    }
    function w(e, n, r) {
        t(2, arguments);
        var a = p(e, n) / v;
        return y(null == r ? void 0 : r.roundingMethod)(a)
    }
    function M(e, n, r) {
        t(2, arguments);
        var a = p(e, n) / 6e4;
        return y(null == r ? void 0 : r.roundingMethod)(a)
    }
    function D(e, n, r) {
        t(2, arguments);
        var a = p(e, n) / 1e3;
        return y(null == r ? void 0 : r.roundingMethod)(a)
    }
    function T(e) {
        return t(1, arguments),
        e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e)
    }
    function N(n) {
        if (t(1, arguments),
        !T(n) && "number" != typeof n)
            return !1;
        var r = e(n);
        return !isNaN(Number(r))
    }
    function x(t) {
        if (null === t || !0 === t || !1 === t)
            return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function E(n, r) {
        t(2, arguments);
        var a = e(n)
          , o = x(r);
        return isNaN(o) ? new Date(NaN) : o ? (a.setDate(a.getDate() + o),
        a) : a
    }
    function F(e, n) {
        t(2, arguments);
        var r = x(n);
        return E(e, -r)
    }
    function S(n, r) {
        t(2, arguments);
        var a = e(n)
          , o = x(r);
        if (isNaN(o))
            return new Date(NaN);
        if (!o)
            return a;
        var i = a.getDate()
          , s = new Date(a.getTime());
        s.setMonth(a.getMonth() + o + 1, 0);
        var u = s.getDate();
        return i >= u ? s : (a.setFullYear(s.getFullYear(), s.getMonth(), i),
        a)
    }
    function Y(e, n) {
        t(2, arguments);
        var r = x(n);
        return S(e, -r)
    }
    function k(e, n) {
        if (t(2, arguments),
        !n || "object" != typeof n)
            return new Date(NaN);
        var r = n.years ? x(n.years) : 0
          , a = n.months ? x(n.months) : 0
          , o = n.weeks ? x(n.weeks) : 0
          , i = n.days ? x(n.days) : 0
          , s = n.hours ? x(n.hours) : 0
          , u = n.minutes ? x(n.minutes) : 0
          , c = n.seconds ? x(n.seconds) : 0
          , l = Y(e, a + 12 * r)
          , f = F(l, i + 7 * o)
          , h = u + 60 * s
          , g = c + 60 * h
          , m = 1e3 * g
          , d = new Date(f.getTime() - m);
        return d
    }
    var j = function(t, e, n, r) {
        return new (n || (n = Promise))((function(a, o) {
            function i(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    o(t)
                }
            }
            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }
            function u(t) {
                var e;
                t.done ? a(t.value) : (e = t.value,
                e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))).then(i, s)
            }
            u((r = r.apply(t, e || [])).next())
        }
        ))
    }
      , H = function(t, e) {
        var n, r, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0])
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; i; )
                        try {
                            if (n = 1,
                            r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r),
                            0) : r.next) && !(a = a.call(r, o[1])).done)
                                return a;
                            switch (r = 0,
                            a && (o = [2 & o[0], a.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return i.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++,
                                r = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(),
                                i.trys.pop();
                                continue;
                            default:
                                if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                    i.label = a[1],
                                    a = o;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2],
                                    i.ops.push(o);
                                    break
                                }
                                a[2] && i.ops.pop(),
                                i.trys.pop();
                                continue
                            }
                            o = e.call(t, i)
                        } catch (t) {
                            o = [6, t],
                            r = 0
                        } finally {
                            n = a = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , C = "https://xkcd.com/count-wimRikmef"
      , R = "".concat(C, "/state")
      , O = "".concat(C, "/imgs/");
    function L() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]
    }
    function U() {
        return j(this, void 0, void 0, (function() {
            var t;
            return H(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, fetch(R)];
                case 1:
                    return [4, e.sent().json()];
                case 2:
                    return [2, {
                        img: (t = e.sent()).img,
                        start: new Date(t.start),
                        target: new Date(t.target),
                        until: new Date(t.until)
                    }]
                }
            }
            ))
        }
        ))
    }
    var I = function() {
        function r(r) {
            var o = this;
            this.frame = function() {
                var r = new Date;
                o.imgEl.src = O + o.state.img;
                var i = r < o.state.target;
                if (o.textEl.style.display = i ? "block" : "none",
                i) {
                    var s = (r.getTime() - o.state.start.getTime()) / (o.state.target.getTime() - o.state.start.getTime())
                      , u = Math.max(0, s)
                      , l = function(r) {
                        var o = r.start
                          , i = r.end;
                        t(1, arguments);
                        var s = e(o)
                          , u = e(i);
                        if (!N(s))
                            throw new RangeError("Start Date is invalid");
                        if (!N(u))
                            throw new RangeError("End Date is invalid");
                        var l = {
                            years: 0,
                            months: 0,
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        }
                          , f = n(s, u);
                        l.years = Math.abs(a(s, u));
                        var h = k(s, {
                            years: f * l.years
                        });
                        l.months = Math.abs(c(h, u));
                        var g = k(h, {
                            months: f * l.months
                        });
                        l.days = Math.abs(d(g, u));
                        var m = k(g, {
                            days: f * l.days
                        });
                        l.hours = Math.abs(w(m, u));
                        var v = k(m, {
                            hours: f * l.hours
                        });
                        l.minutes = Math.abs(M(v, u));
                        var p = k(v, {
                            minutes: f * l.minutes
                        });
                        return l.seconds = Math.abs(D(p, u)),
                        l
                    }({
                        start: r,
                        end: o.state.target
                    });
                    L({
                        fracDone: s,
                        clampedFracDone: u,
                        duration: l
                    }),
                    o.imgEl.alt = "".concat(l.days, " days, ").concat(l.hours, " hours, and ").concat(l.minutes, " minutes remaining"),
                    o.imgEl.width = 160,
                    o.imgEl.heigth = 100,
                    o.textEl.style.top = "".concat(50 - 40 * u, "%"),
                    o.textEl.innerText = "".concat(l.days, "d ").concat(l.hours, "h ").concat(l.minutes, "m")
                }
                var f = Math.max(200, 6e4 - r.getTime() % 6e4);
                L("Rendered. Next frame in", f),
                clearTimeout(o.frameTimeout),
                o.frameTimeout = setTimeout(o.frame, f)
            }
            ,
            this.updateState = function() {
                return j(o, void 0, void 0, (function() {
                    var t, e, n, r;
                    return H(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, U()];
                        case 1:
                            return L("Fetched state", t = a.sent()),
                            this.state = t,
                            this.frame(),
                            e = new Date,
                            n = t.until.getTime() - e.getTime(),
                            L("Updating in %s (from server: %s)", r = Math.max(3e4, n), n),
                            setTimeout(this.updateState, r),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            this.el = r,
            this.el.innerHTML = "",
            this.el.style.width = "160px",
            this.el.style.height = "100px",
            this.el.style.position = "relative",
            this.imgEl = document.createElement("img"),
            this.imgEl.alt = "",
            this.el.appendChild(this.imgEl),
            this.textEl = document.createElement("span"),
            this.textEl.setAttribute("style", "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 0 8px; font-family: xkcd-Regular-v3; font-size: 20px; font-variant: small-caps; letter-spacing: 1px; white-space: nowrap; background: white; border-radius: 99px"),
            this.el.appendChild(this.textEl)
        }
        return r.prototype.start = function() {
            return j(this, void 0, void 0, (function() {
                return H(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.updateState()];
                    case 1:
                        return t.sent(),
                        this.frame(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        r
    }();
    document.addEventListener("DOMContentLoaded", (function() {
        var t = document.getElementById("countdown");
        new I(t).start()
    }
    ))
}
)();

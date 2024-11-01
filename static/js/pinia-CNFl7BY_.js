import { e as t, r as e, m as n, i as s, w as o, a as c, b as a, f as r, t as i, j as u, k as f, o as p, n as l, l as h, p as y } from "./@vue-CLcIJuOQ.js";

/*!
 * pinia v2.2.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let d;

const b = t => d = t, v = 
/* istanbul ignore next */ Symbol();

function _(t) {
    return t && "object" == typeof t && "[object Object]" === Object.prototype.toString.call(t) && "function" != typeof t.toJSON;
}

var j, m;

function O() {
    const s = t(!0), o = s.run((() => e({})));
    let c = [], a = [];
    const r = n({
        install(t) {
            b(r), r._a = t, t.provide(v, r), t.config.globalProperties.$pinia = r, a.forEach((t => c.push(t))), 
            a = [];
        },
        use(t) {
            return this._a ? c.push(t) : a.push(t), this;
        },
        _p: c,
        // it's actually undefined here
        // @ts-expect-error
        _a: null,
        _e: s,
        _s:  new Map,
        state: o
    });
    return r;
}

(m = j || (j = {})).direct = "direct", m.patchObject = "patch object", m.patchFunction = "patch function";

const $ = () => {};

function g(t, e, n, s = $) {
    t.push(e);
    const o = () => {
        const n = t.indexOf(e);
        n > -1 && (t.splice(n, 1), s());
    };
    return !n && f() && p(o), o;
}

function S(t, ...e) {
    t.slice().forEach((t => {
        t(...e);
    }));
}

const P = t => t(), w = Symbol(), E = Symbol();

function x(t, e) {
    t instanceof Map && e instanceof Map ? e.forEach(((e, n) => t.set(n, e))) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
        if (!e.hasOwnProperty(n)) continue;
        const s = e[n], o = t[n];
        _(o) && _(s) && t.hasOwnProperty(n) && !a(s) && !r(s) ? t[n] = x(o, s) : t[n] = s;
    }
    return t;
}

const I = 
/* istanbul ignore next */ Symbol();

const {assign: M} = Object;

function k(n, s, u = {}, f, p, h) {
    let y;
    const d = M({
        actions: {}
    }, u), v = {
        deep: !0
    };
    let m, O, k, A = [], F = [];
    const C = f.state.value[n];
    let J;
    function N(t) {
        let e;
        m = O = !1, "function" == typeof t ? (t(f.state.value[n]), e = {
            type: j.patchFunction,
            storeId: n,
            events: k
        }) : (x(f.state.value[n], t), e = {
            type: j.patchObject,
            payload: t,
            storeId: n,
            events: k
        });
        const s = J = Symbol();
        l().then((() => {
            J === s && (m = !0);
        })), O = !0, S(A, e, f.state.value[n]);
    }
    h || C || (f.state.value[n] = {}), e({});
    const W = h ? function() {
        const {state: t} = u, e = t ? t() : {};
        this.$patch((t => {
            M(t, e);
        }));
    } : 
    /* istanbul ignore next */ $;
    const q = (t, e = "") => {
        if (w in t) return t[E] = e, t;
        const s = function() {
            b(f);
            const e = Array.from(arguments), o = [], c = [];
            let a;
            S(F, {
                args: e,
                name: s[E],
                store: B,
                after: function(t) {
                    o.push(t);
                },
                onError: function(t) {
                    c.push(t);
                }
            });
            try {
                a = t.apply(this && this.$id === n ? this : B, e);
            } catch (r) {
                throw S(c, r), r;
            }
            return a instanceof Promise ? a.then((t => (S(o, t), t))).catch((t => (S(c, t), 
            Promise.reject(t)))) : (S(o, a), a);
        };
        return s[w] = !0, s[E] = e, s;
    }, z = {
        _p: f,
        // _s: scope,
        $id: n,
        $onAction: g.bind(null, F),
        $patch: N,
        $reset: W,
        $subscribe(t, e = {}) {
            const s = g(A, t, e.detached, (() => c())), c = y.run((() => o((() => f.state.value[n]), (s => {
                ("sync" === e.flush ? O : m) && t({
                    storeId: n,
                    type: j.direct,
                    events: k
                }, s);
            }), M({}, v, e))));
            return s;
        },
        $dispose: function() {
            y.stop(), A = [], F = [], f._s.delete(n);
        }
    }, B = c(z);
    f._s.set(n, B);
    const D = (f._a && f._a.runWithContext || P)((() => f._e.run((() => (y = t()).run((() => s({
        action: q
    })))))));
    for (const t in D) {
        const e = D[t];
        if (a(e) && (!a(H = e) || !H.effect) || r(e)) h || (!C || _(G = e) && G.hasOwnProperty(I) || (a(e) ? e.value = C[t] : x(e, C[t])), 
        f.state.value[n][t] = e); else if ("function" == typeof e) {
            const n = q(e, t);
            D[t] = n, d.actions[t] = e;
        }
    }
    var G, H;
    return M(B, D), M(i(B), D), Object.defineProperty(B, "$state", {
        get: () => f.state.value[n],
        set: t => {
            N((e => {
                M(e, t);
            }));
        }
    }), f._p.forEach((t => {
        M(B, y.run((() => t({
            store: B,
            app: f._a,
            pinia: f,
            options: d
        }))));
    })), C && h && u.hydrate && u.hydrate(B.$state, C), m = !0, O = !0, B;
}

/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function A(t, e, o) {
    let c, a;
    const r = "function" == typeof e;
    function i(t, o) {
        const i = u();
        (t = // in test mode, ignore the argument provided as we can always retrieve a
        // pinia instance with getActivePinia()
        t || (i ? s(v, null) : null)) && b(t), (t = d)._s.has(c) || (r ? k(c, e, a, t) : function(t, e, s) {
            const {state: o, actions: c, getters: a} = e, r = s.state.value[t];
            let i;
            i = k(t, (function() {
                r || (s.state.value[t] = o ? o() : {});
                const e = h(s.state.value[t]);
                return M(e, c, Object.keys(a || {}).reduce(((e, o) => (e[o] = n(y((() => {
                    b(s);
                    const e = s._s.get(t);
                    return a[o].call(e, e);
                }))), e)), {}));
            }), e, s, 0, !0);
        }(c, a, t));
        return t._s.get(c);
    }
    return "string" == typeof t ? (c = t, a = r ? o : e) : (a = t, c = t.id), i.$id = c, 
    i;
}

export { O as c, A as d };

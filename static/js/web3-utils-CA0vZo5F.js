import { k as t, b as e, g as n } from "./ethereum-cryptography-wqlT3DIR.js";

import { ag as i, ab as s, ah as r, ai as o, aj as a, ak as c, W as u, al as h, am as l, an as f, ao as d, ap as m, aq as p, ar as g, r as y, O as v, c as _, as as b, ac as w, at as I, au as A, av as S, aw as R, ax as B, ae as x } from "./web3-errors-hzVYhHGn.js";

import { v as E, h as T, m as P, a as k, u as j, n as C, i as q, o as Q, b as W, p as O, q as L, g as N, r as $, s as M, w as D, x as H, y as U, z, A as F, B as G, C as X, d as V, D as J, E as K, F as Y } from "./web3-validator-BARD4gRE.js";

import { B as Z, T as tt, a as et, F as nt, D as it, W as st } from "./web3-types-DSrrWgZ8.js";

import { u as rt } from "./@noble-Cuw1cgUn.js";

import { E as ot } from "./eventemitter3-DvedpluM.js";

function at(t) {
    var e, n;
    return t instanceof Uint8Array || "Uint8Array" === (null === (e = null == t ? void 0 : t.constructor) || void 0 === e ? void 0 : e.name) || "Buffer" === (null === (n = null == t ? void 0 : t.constructor) || void 0 === n ? void 0 : n.name);
}

function ct(...t) {
    const e = t.reduce(((t, e) => t + e.length), 0), n = new Uint8Array(e);
    let i = 0;
    for (const s of t) n.set(s, i), i += s.length;
    return n;
}

function ut(t, e) {
    if (t === e) return !0;
    if (t.byteLength !== e.byteLength) return !1;
    for (let n = 0; n < t.byteLength; n += 1) if (t[n] !== e[n]) return !1;
    return !0;
}

const ht = {
    noether: BigInt(0),
    wei: BigInt(1),
    kwei: BigInt(1e3),
    Kwei: BigInt(1e3),
    babbage: BigInt(1e3),
    femtoether: BigInt(1e3),
    mwei: BigInt(1e6),
    Mwei: BigInt(1e6),
    lovelace: BigInt(1e6),
    picoether: BigInt(1e6),
    gwei: BigInt(1e9),
    Gwei: BigInt(1e9),
    shannon: BigInt(1e9),
    nanoether: BigInt(1e9),
    nano: BigInt(1e9),
    szabo: BigInt(1e12),
    microether: BigInt(1e12),
    micro: BigInt(1e12),
    finney: BigInt(1e15),
    milliether: BigInt(1e15),
    milli: BigInt(1e15),
    ether: BigInt("1000000000000000000"),
    kether: BigInt("1000000000000000000000"),
    grand: BigInt("1000000000000000000000"),
    mether: BigInt("1000000000000000000000000"),
    gether: BigInt("1000000000000000000000000000"),
    tether: BigInt("1000000000000000000000000000000")
}, lt = t => {
    if (E.validate([ "bytes" ], [ t ]), at(t)) return t;
    if (Array.isArray(t)) return new Uint8Array(t);
    if ("string" == typeof t) return T(t);
    throw new i(t);
}, {uint8ArrayToHexString: ft} = M, dt = t => ft(lt(t)), mt = t => "string" == typeof t && "0x" !== t.slice(0, 2).toLowerCase() ? lt(`0x${t}`) : lt(t), pt = t => (E.validate([ "hex" ], [ t ]), 
P(t)), gt = pt, yt = (t, e) => {
    "bigint" != typeof t && E.validate([ "int" ], [ t ]);
    let n = Q(t);
    return e && (n.startsWith("-") || n.length % 2 != 1 ? n.length % 2 == 0 && n.startsWith("-") && (n = "-0x0".concat(n.slice(3))) : n = "0x0".concat(n.slice(2))), 
    n;
}, vt = yt, _t = t => {
    E.validate([ "string" ], [ t ]);
    let e = t.replace(/^(?:\u0000)/, "");
    return e = e.replace(/(?:\u0000)$/, ""), dt((new TextEncoder).encode(e));
}, bt = _t, wt = _t, It = t => e(mt(t)), At = rt, St = It, Rt = t => {
    E.validate([ "string" ], [ t ]);
    let e = "";
    for (let n = 0; n < t.length; n += 1) {
        const i = t.charCodeAt(n).toString(16);
        e += i.length % 2 != 0 ? `0${i}` : i;
    }
    return `0x${e}`;
}, Bt = Rt, xt = t => new TextDecoder("ascii").decode(mt(t)), Et = xt, Tt = (t, e) => {
    if ("string" == typeof t && k(t)) return e ? "address" : `0x${t.toLowerCase().replace(/^0x/i, "")}`;
    if ("boolean" == typeof t) return e ? "bool" : t ? "0x01" : "0x00";
    if ("number" == typeof t) return e ? t < 0 ? "int256" : "uint256" : yt(t);
    if ("bigint" == typeof t) return e ? "bigint" : yt(t);
    if (at(t)) return e ? "bytes" : dt(t);
    if ("object" == typeof t && t) return e ? "string" : _t(JSON.stringify(t));
    if ("string" == typeof t) {
        if (t.startsWith("-0x") || t.startsWith("-0X")) return e ? "int256" : yt(t);
        if (W(t)) return e ? "bytes" : t;
        if (O(t) && !L(t) && !N(t)) return e ? "bytes" : `0x${t}`;
        if (O(t) && !L(t) && N(t)) return e ? "uint" : yt(t);
        if (!Number.isFinite(t)) return e ? "string" : _t(t);
    }
    throw new r(t);
}, Pt = t => {
    if ("number" == typeof t) return t > 1e20 ? BigInt(t) : t;
    if ("bigint" == typeof t) return t >= Number.MIN_SAFE_INTEGER && t <= Number.MAX_SAFE_INTEGER ? Number(t) : t;
    if ("string" == typeof t && W(t)) return pt(t);
    try {
        return Pt(BigInt(t));
    } catch (e) {
        throw new o(t);
    }
}, kt = t => {
    if ("number" == typeof t) return BigInt(t);
    if ("bigint" == typeof t) return t;
    if ("string" == typeof t && O(t)) return t.startsWith("-") ? -BigInt(t.substring(1)) : BigInt(t);
    throw new o(t);
}, jt = e => {
    if (!k(e, !1)) throw new s(e);
    const n = e.toLowerCase().replace(/^0x/i, ""), i = j(t(C(At(n))));
    if (q(i) || "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470" === i) return "";
    let r = "0x";
    const o = i.replace(/^0x/i, "");
    for (let t = 0; t < n.length; t += 1) parseInt(o[t], 16) > 7 ? r += n[t].toUpperCase() : r += n[t];
    return r;
}, Ct = t => {
    if ("boolean" == typeof t) return t;
    if ("number" == typeof t && (0 === t || 1 === t)) return Boolean(t);
    if ("bigint" == typeof t && (t === BigInt(0) || t === BigInt(1))) return Boolean(t);
    if ("string" == typeof t && !W(t) && ("1" === t || "0" === t || "false" === t || "true" === t)) return "true" === t || "false" !== t && Boolean(Number(t));
    if ("string" == typeof t && W(t) && ("0x1" === t || "0x0" === t)) return Boolean(Pt(t));
    throw new u(t);
};

class qt extends ot {
    constructor() {
        super(...arguments), this.maxListeners = Number.MAX_SAFE_INTEGER;
    }
    setMaxListeners(t) {
        return this.maxListeners = t, this;
    }
    getMaxListeners() {
        return this.maxListeners;
    }
}

const Qt = W, Wt = O, Ot = D, Lt = k, Nt = H, $t = U, Mt = z, Dt = F, Ht = G, Ut = X, zt = t => "object" == typeof t && !q(t) && 0 !== Object.keys(t).length && [ "input", "data", "from", "gas", "gasPrice", "gasLimit", "address", "jsonInterface", "syncWithContext", "dataInputFill" ].some((e => e in t)), Ft = q, Gt = t => !("object" != typeof t || q(t) || Array.isArray(t) || t instanceof tt), Xt = (t, ...e) => {
    if (!Gt(t)) return t;
    const n = Object.assign({}, t);
    for (const i of e) for (const t in i) Gt(i[t]) ? (n[t] || (n[t] = {}), n[t] = Xt(n[t], i[t])) : !q(i[t]) && Object.hasOwnProperty.call(i, t) && (Array.isArray(i[t]) || i[t] instanceof tt ? n[t] = i[t].slice(0) : n[t] = i[t]);
    return n;
}, Vt = (t, e, n = "0") => "string" == typeof t ? W(t) ? J(t, e, n) : t.padStart(e, n) : (E.validate([ "int" ], [ t ]), 
J(t, e, n)), Jt = (t, e, n = "0") => {
    if ("string" == typeof t && !W(t)) return t.padEnd(e, n);
    const i = "string" == typeof t && W(t) ? t : yt(t), s = i.startsWith("-") ? 3 : 2;
    return E.validate([ i.startsWith("-") ? "int" : "uint" ], [ t ]), i.padEnd(e + s, n);
}, Kt = Jt, Yt = Vt, Zt = (t, e = 64) => {
    E.validate([ "int" ], [ t ]);
    const n = Pt(t);
    if (n >= 0) return Vt(Tt(n), e);
    const i = $(BigInt(2), BigInt(4 * e));
    if (-n >= i) throw new l(`value: ${t}, nibbleWidth: ${e}`);
    const s = BigInt(n);
    return Vt(yt(s + i), e);
}, {parseBaseType: te} = M, ee = t => "object" == typeof t && !q(t) && "number" in t && "bytes" in t, ne = (t, e, n = []) => {
    let i, s = Object.assign({}, t);
    for (const r of e) {
        if (s.oneOf && i) {
            const t = i, e = n.find((([e]) => e === t));
            e && e[0] === i && (s = s.oneOf[e[1]]);
        }
        if (!s.properties && !s.items) return;
        if (s.properties) s = s.properties[r]; else if (s.items && s.items.properties) {
            s = s.items.properties[r];
        } else s.items && K(s.items) ? s = s.items : s.items && Array.isArray(s.items) && (s = s.items[parseInt(r, 10)]);
        s && r && (i = r);
    }
    return s;
}, ie = (t, e, n) => {
    try {
        const {baseType: i, baseTypeSize: s} = te(e);
        if ("int" === i || "uint" === i) switch (n.number) {
          case et.NUMBER:
            return Number(kt(t));

          case et.HEX:
            return yt(kt(t));

          case et.STR:
            return kt(t).toString();

          case et.BIGINT:
            return kt(t);

          default:
            throw new f(`Invalid format: ${String(n.number)}`);
        }
        if ("bytes" === i) {
            let e;
            switch (s ? "string" == typeof t ? e = Vt(t, 2 * s) : at(t) && (e = ct(new Uint8Array(s - t.length), t)) : e = t, 
            n.bytes) {
              case nt.HEX:
                return dt(lt(e));

              case nt.UINT8ARRAY:
                return lt(e);

              default:
                throw new f(`Invalid format: ${String(n.bytes)}`);
            }
        }
        if ("string" === i) return String(t);
    } catch (i) {
        return t;
    }
    return t;
}, se = ({value: t, schemaProp: e, schema: n, object: i, key: s, dataPath: r, format: o, oneOfPath: a = []}) => {
    var c, u;
    if (Array.isArray(t)) {
        let h = e;
        if (void 0 !== (null == e ? void 0 : e.oneOf) && e.oneOf.forEach(((n, i) => {
            var r, o;
            !Array.isArray(null == e ? void 0 : e.items) && ("object" == typeof t[0] && "object" === (null === (r = null == n ? void 0 : n.items) || void 0 === r ? void 0 : r.type) || "string" == typeof t[0] && "object" !== (null === (o = null == n ? void 0 : n.items) || void 0 === o ? void 0 : o.type)) && (h = n, 
            a.push([ s, i ]));
        })), q(null == h ? void 0 : h.items)) return delete i[s], r.pop(), !0;
        if (K(h.items) && !q(h.items.format)) {
            for (let e = 0; e < t.length; e += 1) i[s][e] = ie(t[e], 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            null === (c = null == h ? void 0 : h.items) || void 0 === c ? void 0 : c.format, o);
            return r.pop(), !0;
        }
        if (!Array.isArray(null == h ? void 0 : h.items) && "object" === (null === (u = null == h ? void 0 : h.items) || void 0 === u ? void 0 : u.type)) {
            for (const e of t) re(e, n, r, o, a);
            return r.pop(), !0;
        }
        if (Array.isArray(null == h ? void 0 : h.items)) {
            for (let e = 0; e < t.length; e += 1) i[s][e] = ie(t[e], h.items[e].format, o);
            return r.pop(), !0;
        }
    }
    return !1;
}, re = (t, e, n, i, s = []) => {
    var r;
    if (!K(t) && !Array.isArray(t)) return ie(t, null == e ? void 0 : e.format, i);
    const o = t;
    if (Array.isArray(o) && "array" === (null == e ? void 0 : e.type) && "object" === (null === (r = null == e ? void 0 : e.items) || void 0 === r ? void 0 : r.type)) se({
        value: o,
        schemaProp: e,
        schema: e,
        object: o,
        key: "",
        dataPath: n,
        format: i,
        oneOfPath: s
    }); else for (const [a, c] of Object.entries(o)) {
        n.push(a);
        let t = ne(e, n, s);
        if (q(t)) delete o[a], n.pop(); else if (K(c)) re(c, e, n, i, s), n.pop(); else if (!se({
            value: c,
            schemaProp: t,
            schema: e,
            object: o,
            key: a,
            dataPath: n,
            format: i,
            oneOfPath: s
        })) {
            if (void 0 === (null == t ? void 0 : t.format) && void 0 !== (null == t ? void 0 : t.oneOf)) for (const [e, n] of t.oneOf.entries()) if (void 0 !== (null == n ? void 0 : n.format)) {
                t = n;
                break;
            }
            o[a] = ie(c, t.format, i), n.pop();
        }
    }
    return o;
}, oe = (t, e, n = it) => {
    let i;
    i = K(e) ? Xt({}, e) : Array.isArray(e) ? [ ...e ] : e;
    const s = K(t) ? t : Y(t);
    if (!s.properties && !s.items && !s.format) throw new f("Invalid json schema for formatting");
    return re(i, s, [], n);
}, ae = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", ce = e => {
    let n;
    return n = "bigint" == typeof e || "number" == typeof e ? rt(e.toString()) : Array.isArray(e) ? new Uint8Array(e) : "string" != typeof e || W(e) ? lt(e) : rt(e), 
    dt(t(C(n)));
}, ue = t => {
    let e;
    e = "string" == typeof t ? t.startsWith("0x") && W(t) ? mt(t) : rt(t) : t;
    const n = ce(e);
    return n === ae ? void 0 : n;
}, he = t => {
    const e = ue(t);
    return q(e) ? ae : e;
}, le = (t, e) => {
    const n = /^(\d+).*$/.exec(t.slice(e));
    return n ? parseInt(n[1], 10) : 0;
}, fe = t => t.toString(2).length, de = (t, e) => {
    const n = e.toString();
    if ("string" === t) {
        if ("string" == typeof e) return _t(e);
        throw new d(e);
    }
    if ("bool" === t || "boolean" === t) {
        if ("boolean" == typeof e) return e ? "01" : "00";
        throw new u(e);
    }
    if ("address" === t) {
        if (!k(n)) throw new s(n);
        return n;
    }
    const r = (t => t.startsWith("int[") ? `int256${t.slice(3)}` : "int" === t ? "int256" : t.startsWith("uint[") ? `uint256'${t.slice(4)}` : "uint" === t ? "uint256" : t)(t);
    if (t.startsWith("uint")) {
        const t = le(r, 4);
        if (t % 8 || t < 8 || t > 256) throw new m(n);
        const e = Pt(n);
        if (fe(e) > t) throw new p(n);
        if (e < BigInt(0)) throw new g(n);
        return t ? Yt(e.toString(16), t / 8 * 2) : e.toString(16);
    }
    if (t.startsWith("int")) {
        const e = le(r, 3);
        if (e % 8 || e < 8 || e > 256) throw new m(t);
        const i = Pt(n);
        if (fe(i) > e) throw new p(n);
        return i < BigInt(0) ? Zt(i.toString(), e / 8 * 2) : e ? Yt(i.toString(16), e / 4) : i.toString(16);
    }
    if ("bytes" === r) {
        if (n.replace(/^0x/i, "").length % 2 != 0) throw new i(n);
        return n;
    }
    if (t.startsWith("bytes")) {
        if (n.replace(/^0x/i, "").length % 2 != 0) throw new i(n);
        const e = le(t, 5);
        if (!e || e < 1 || e > 64 || e < n.replace(/^0x/i, "").length / 2) throw new i(n);
        return Kt(n, 2 * e);
    }
    return "";
}, me = t => {
    const [e, n] = (t => {
        if (Array.isArray(t)) throw new Error("Autodetection of array types is not supported.");
        let e, n;
        if ("object" == typeof t && ("t" in t || "type" in t) && ("v" in t || "value" in t)) e = "t" in t ? t.t : t.type, 
        n = "v" in t ? t.v : t.value, e = "bigint" === e.toLowerCase() ? "int" : e; else {
            if ("bigint" == typeof t) return [ "int", t ];
            e = Tt(t, !0), n = Tt(t), e.startsWith("int") || e.startsWith("uint") || (e = "bytes");
        }
        return !e.startsWith("int") && !e.startsWith("uint") || "string" != typeof n || /^(-)?0x/i.test(n) || (n = kt(n)), 
        [ e, n ];
    })(t);
    if (Array.isArray(n)) {
        return n.map((t => de(e, t).replace("0x", ""))).join("");
    }
    return de(e, n).replace("0x", "");
}, pe = (...t) => `0x${t.map(me).join("").toLowerCase()}`, ge = t => n(t);

var ye = function(t, e, n, i) {
    return new (n || (n = Promise))((function(s, r) {
        function o(t) {
            try {
                c(i.next(t));
            } catch (e) {
                r(e);
            }
        }
        function a(t) {
            try {
                c(i.throw(t));
            } catch (e) {
                r(e);
            }
        }
        function c(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(o, a);
        }
        c((i = i.apply(t, e || [])).next());
    }));
};

function ve(t) {
    return ("object" == typeof t || "function" == typeof t) && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    "function" == typeof t.then;
}

function _e(t, e, n) {
    return ye(this, void 0, void 0, (function*() {
        let i;
        const s = yield Promise.race([ t instanceof Promise ? t : t(), new Promise(((t, s) => {
            i = setTimeout((() => n ? s(n) : t(void 0)), e);
        })) ]);
        if (i && clearTimeout(i), s instanceof Error) throw s;
        return s;
    }));
}

function be(t, e) {
    let n;
    return [ new Promise(((i, s) => {
        n = setInterval(function r() {
            return (() => {
                ye(this, void 0, void 0, (function*() {
                    try {
                        const s = yield _e(t, e);
                        q(s) || (clearInterval(n), i(s));
                    } catch (r) {
                        clearInterval(n), s(r);
                    }
                }));
            })(), r;
        }(), 
        // this will immediate invoke first call
        e);
    })), n ];
}

function we(t, e) {
    let n;
    const i = new Promise(((i, s) => {
        n = setTimeout((() => {
            s(e);
        }), t);
    }));
    return [ n, i ];
}

function Ie(t, e) {
    let n;
    const i = new Promise(((i, s) => {
        n = setInterval((() => {
            (() => {
                ye(this, void 0, void 0, (function*() {
                    const e = yield t();
                    e && (clearInterval(n), s(e));
                }));
            })();
        }), e);
    }));
    return [ n, i ];
}

const Ae = () => {
    const t = ge(16);
    t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128;
    const e = dt(t);
    return [ e.substring(2, 10), e.substring(10, 14), e.substring(14, 18), e.substring(18, 22), e.substring(22, 34) ].join("-");
}, Se = t => {
    const e = t.error.code;
    return y.has(e) || e >= -32099 && e <= -32e3;
}, Re = t => !Array.isArray(t) && !!t && "2.0" === t.jsonrpc && // JSON RPC consider "null" as valid response
"result" in t && q(t.error) && ("number" == typeof t.id || "string" == typeof t.id), Be = t => !Array.isArray(t) && "2.0" === t.jsonrpc && !!t && q(t.result) && // JSON RPC consider "null" as valid response
"error" in t && ("number" == typeof t.id || "string" == typeof t.id), xe = t => !(Array.isArray(t) || !t || "2.0" !== t.jsonrpc || q(t.params) || q(t.method)), Ee = t => !Array.isArray(t) && !!t && "2.0" === t.jsonrpc && "id" in t && // JSON RPC consider "null" as valid response
"result" in t, Te = t => Re(t) || Be(t), Pe = t => Array.isArray(t) ? t.every(Te) : Te(t), ke = t => Array.isArray(t) && t.length > 0 && Pe(t);

let je;

const Ce = t => {
    je = t;
}, qe = t => {
    var e, n, i, s;
    return void 0 !== je && (je += 1), {
        jsonrpc: null !== (e = t.jsonrpc) && void 0 !== e ? e : "2.0",
        id: null !== (i = null !== (n = t.id) && void 0 !== n ? n : je) && void 0 !== i ? i : Ae(),
        method: t.method,
        params: null !== (s = t.params) && void 0 !== s ? s : void 0
    };
}, Qe = t => t.map((t => qe(t))), We = t => Array.isArray(t) && t.length > 0, Oe =  Object.freeze( Object.defineProperty({
    __proto__: null,
    isBatchRequest: We,
    isBatchResponse: ke,
    isResponseRpcError: Se,
    isResponseWithError: Be,
    isResponseWithNotification: xe,
    isResponseWithResult: Re,
    isSubscriptionResult: Ee,
    isValidResponse: Pe,
    setRequestIdStart: Ce,
    toBatchPayload: Qe,
    toPayload: qe,
    validateResponse: Te
}, Symbol.toStringTag, {
    value: "Module"
}));

var Le, Ne = function(t, e, n, i) {
    return new (n || (n = Promise))((function(s, r) {
        function o(t) {
            try {
                c(i.next(t));
            } catch (e) {
                r(e);
            }
        }
        function a(t) {
            try {
                c(i.throw(t));
            } catch (e) {
                r(e);
            }
        }
        function c(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(o, a);
        }
        c((i = i.apply(t, e || [])).next());
    }));
};

class $e {
    /**
   *
   * @param timeout - (optional) The timeout in milliseconds.
   * @param eagerStart - (optional) If true, the timer starts as soon as the promise is created.
   * @param timeoutMessage - (optional) The message to include in the timeout erro that is thrown when the promise times out.
   */
    constructor({timeout: t, eagerStart: e, timeoutMessage: n} = {
        timeout: 0,
        eagerStart: !1,
        timeoutMessage: "DeferredPromise timed out"
    }) {
        this[Le] = "Promise", this._state = "pending", this._promise = new Promise(((t, e) => {
            this._resolve = t, this._reject = e;
        })), this._timeoutMessage = n, this._timeoutInterval = t, e && this.startTimer();
    }
    /**
   * Returns the current state of the promise.
   * @returns 'pending' | 'fulfilled' | 'rejected'
   */    get state() {
        return this._state;
    }
    /**
   *
   * @param onfulfilled - (optional) The callback to execute when the promise is fulfilled.
   * @param onrejected  - (optional) The callback to execute when the promise is rejected.
   * @returns
   */    then(t, e) {
        return Ne(this, void 0, void 0, (function*() {
            return this._promise.then(t, e);
        }));
    }
    /**
   *
   * @param onrejected - (optional) The callback to execute when the promise is rejected.
   * @returns
   */    catch(t) {
        return Ne(this, void 0, void 0, (function*() {
            return this._promise.catch(t);
        }));
    }
    /**
   *
   * @param onfinally - (optional) The callback to execute when the promise is settled (fulfilled or rejected).
   * @returns
   */    finally(t) {
        return Ne(this, void 0, void 0, (function*() {
            return this._promise.finally(t);
        }));
    }
    /**
   * Resolves the current promise.
   * @param value - The value to resolve the promise with.
   */    resolve(t) {
        this._resolve(t), this._state = "fulfilled", this._clearTimeout();
    }
    /**
   * Rejects the current promise.
   * @param reason - The reason to reject the promise with.
   */    reject(t) {
        this._reject(t), this._state = "rejected", this._clearTimeout();
    }
    /**
   * Starts the timeout timer for the promise.
   */    startTimer() {
        this._timeoutInterval && this._timeoutInterval > 0 && (this._timeoutId = setTimeout(this._checkTimeout.bind(this), this._timeoutInterval));
    }
    _checkTimeout() {
        "pending" === this._state && this._timeoutId && this.reject(new v(this._timeoutMessage));
    }
    _clearTimeout() {
        this._timeoutId && clearTimeout(this._timeoutId);
    }
}

Le = Symbol.toStringTag;

class Me {
    constructor(t, e) {
        this.eventEmitter = t, this.autoReconnect = e, this.chunkTimeout = 15e3;
    }
    clearQueues() {
        "function" == typeof this._clearQueues && this._clearQueues();
    }
    onError(t) {
        this._clearQueues = t;
    }
    parseResponse(t) {
        const e = [];
        return t.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|").forEach((t => {
            let n, i = t;
            this.lastChunk && (i = this.lastChunk + i);
            try {
                n = JSON.parse(i);
            } catch (s) {
                return this.lastChunk = i, this.lastChunkTimeout && clearTimeout(this.lastChunkTimeout), 
                void (this.lastChunkTimeout = setTimeout((() => {
                    this.autoReconnect || (this.clearQueues(), this.eventEmitter.emit("error", new _({
                        id: 1,
                        jsonrpc: "2.0",
                        error: {
                            code: 2,
                            message: "Chunk timeout"
                        }
                    })));
                }), this.chunkTimeout));
            }
            clearTimeout(this.lastChunkTimeout), this.lastChunk = void 0, n && e.push(n);
        })), e;
    }
}

var De = function(t, e, n, i) {
    return new (n || (n = Promise))((function(s, r) {
        function o(t) {
            try {
                c(i.next(t));
            } catch (e) {
                r(e);
            }
        }
        function a(t) {
            try {
                c(i.throw(t));
            } catch (e) {
                r(e);
            }
        }
        function c(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(o, a);
        }
        c((i = i.apply(t, e || [])).next());
    }));
};

class He extends st {
    constructor() {
        super(...arguments), this._eventEmitter = new ot, this._chainId = "", this._accounts = [];
    }
    _getChainId() {
        var t;
        return De(this, void 0, void 0, (function*() {
            const e = yield this.request(qe({
                method: "eth_chainId",
                params: []
            }));
            return null !== (t = null == e ? void 0 : e.result) && void 0 !== t ? t : "";
        }));
    }
    _getAccounts() {
        var t;
        return De(this, void 0, void 0, (function*() {
            const e = yield this.request(qe({
                method: "eth_accounts",
                params: []
            }));
            return null !== (t = null == e ? void 0 : e.result) && void 0 !== t ? t : [];
        }));
    }
    _onConnect() {
        Promise.all([ this._getChainId().then((t => {
            t !== this._chainId && (this._chainId = t, this._eventEmitter.emit("chainChanged", this._chainId));
        })).catch((t => {})), this._getAccounts().then((t => {
            this._accounts.length === t.length && t.every((e => t.includes(e))) || (this._accounts = t, 
            this._onAccountsChanged());
        })).catch((t => {})) ]).then((() => this._eventEmitter.emit("connect", {
            chainId: this._chainId
        }))).catch((t => {}));
    }
    // todo this must be ProvideRpcError with a message too
    _onDisconnect(t, e) {
        this._eventEmitter.emit("disconnect", new b(t, e));
    }
    _onAccountsChanged() {
        this._eventEmitter.emit("accountsChanged", this._accounts);
    }
}

var Ue = function(t, e, n, i) {
    return new (n || (n = Promise))((function(s, r) {
        function o(t) {
            try {
                c(i.next(t));
            } catch (e) {
                r(e);
            }
        }
        function a(t) {
            try {
                c(i.throw(t));
            } catch (e) {
                r(e);
            }
        }
        function c(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(o, a);
        }
        c((i = i.apply(t, e || [])).next());
    }));
};

const ze = {
    autoReconnect: !0,
    delay: 5e3,
    maxAttempts: 5
};

class Fe extends He {
    /**
   * This is an abstract class for implementing a socket provider (e.g. WebSocket, IPC). It extends the EIP-1193 provider {@link EIP1193Provider}.
   * @param socketPath - The path to the socket (e.g. /ipc/path or ws://localhost:8546)
   * @param socketOptions - The options for the socket connection. Its type is supposed to be specified in the inherited classes.
   * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
   */
    constructor(t, e, n) {
        if (super(), this._connectionStatus = "connecting", this._onMessageHandler = this._onMessage.bind(this), 
        this._onOpenHandler = this._onConnect.bind(this), this._onCloseHandler = this._onCloseEvent.bind(this), 
        this._onErrorHandler = this._onError.bind(this), !this._validateProviderPath(t)) throw new w(t);
        this._socketPath = t, this._socketOptions = e, this._reconnectOptions = Object.assign(Object.assign({}, ze), null != n ? n : {}), 
        this._pendingRequestsQueue =  new Map, this._sentRequestsQueue =  new Map, this._init(), 
        this.connect(), this.chunkResponseParser = new Me(this._eventEmitter, this._reconnectOptions.autoReconnect), 
        this.chunkResponseParser.onError((() => {
            this._clearQueues();
        })), this.isReconnecting = !1;
    }
    get SocketConnection() {
        return this._socketConnection;
    }
    _init() {
        this._reconnectAttempts = 0;
    }
    /**
   * Try to establish a connection to the socket
   */    connect() {
        try {
            this._openSocketConnection(), this._connectionStatus = "connecting", this._addSocketListeners();
        } catch (t) {
            if (!this.isReconnecting) throw this._connectionStatus = "disconnected", t && t.message ? new I(`Error while connecting to ${this._socketPath}. Reason: ${t.message}`) : new w(this._socketPath);
            setImmediate((() => {
                this._reconnect();
            }));
        }
    }
    // eslint-disable-next-line class-methods-use-this
    _validateProviderPath(t) {
        return !!t;
    }
    /**
   *
   * @returns the pendingRequestQueue size
   */
    // eslint-disable-next-line class-methods-use-this
    getPendingRequestQueueSize() {
        return this._pendingRequestsQueue.size;
    }
    /**
   *
   * @returns the sendPendingRequests size
   */
    // eslint-disable-next-line class-methods-use-this
    getSentRequestsQueueSize() {
        return this._sentRequestsQueue.size;
    }
    /**
   *
   * @returns `true` if the socket supports subscriptions
   */
    // eslint-disable-next-line class-methods-use-this
    supportsSubscriptions() {
        return !0;
    }
    on(t, e) {
        this._eventEmitter.on(t, e);
    }
    once(t, e) {
        this._eventEmitter.once(t, e);
    }
    removeListener(t, e) {
        this._eventEmitter.removeListener(t, e);
    }
    _onDisconnect(t, e) {
        this._connectionStatus = "disconnected", super._onDisconnect(t, e);
    }
    /**
   * Disconnects the socket
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */    disconnect(t, e) {
        const n = null != t ? t : 1e3;
        this._removeSocketListeners(), "disconnected" !== this.getStatus() && this._closeSocketConnection(n, e), 
        this._onDisconnect(n, e);
    }
    /**
   * Safely disconnects the socket, async and waits for request size to be 0 before disconnecting
   * @param forceDisconnect - If true, will clear queue after 5 attempts of waiting for both pending and sent queue to be 0
   * @param ms - Determines the ms of setInterval
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */    safeDisconnect(t, e, n = !1, i = 1e3) {
        return Ue(this, void 0, void 0, (function*() {
            let s = 0;
            yield (() => Ue(this, void 0, void 0, (function*() {
                return new Promise((t => {
                    const e = setInterval((() => {
                        n && s >= 5 && this.clearQueues(), 0 === this.getPendingRequestQueueSize() && 0 === this.getSentRequestsQueueSize() && (clearInterval(e), 
                        t(!0)), s += 1;
                    }), i);
                }));
            })))(), this.disconnect(t, e);
        }));
    }
    /**
   * Removes all listeners for the specified event type.
   * @param type - The event type to remove the listeners for
   */    removeAllListeners(t) {
        this._eventEmitter.removeAllListeners(t);
    }
    _onError(t) {
        this.isReconnecting ? this._reconnect() : this._eventEmitter.emit("error", t);
    }
    /**
   * Resets the socket, removing all listeners and pending requests
   */    reset() {
        this._sentRequestsQueue.clear(), this._pendingRequestsQueue.clear(), this._init(), 
        this._removeSocketListeners(), this._addSocketListeners();
    }
    _reconnect() {
        this.isReconnecting || (this.isReconnecting = !0, this._sentRequestsQueue.size > 0 && this._sentRequestsQueue.forEach(((t, e) => {
            t.deferredPromise.reject(new A), this._sentRequestsQueue.delete(e);
        })), this._reconnectAttempts < this._reconnectOptions.maxAttempts ? (this._reconnectAttempts += 1, 
        setTimeout((() => {
            this._removeSocketListeners(), this.connect(), this.isReconnecting = !1;
        }), this._reconnectOptions.delay)) : (this.isReconnecting = !1, this._clearQueues(), 
        this._removeSocketListeners(), this._eventEmitter.emit("error", new S(this._reconnectOptions.maxAttempts))));
    }
    /**
   *  Creates a request object to be sent to the server
   */    request(t) {
        return Ue(this, void 0, void 0, (function*() {
            if (Ft(this._socketConnection)) throw new Error("Connection is undefined");
            "disconnected" === this.getStatus() && this.connect();
            const e = We(t) ? t[0].id : t.id;
            if (!e) throw new R("Request Id not defined");
            if (this._sentRequestsQueue.has(e)) throw new B(e);
            const n = new $e;
            n.catch((t => {
                this._eventEmitter.emit("error", t);
            }));
            const i = {
                payload: t,
                deferredPromise: n
            };
            if ("connecting" === this.getStatus()) return this._pendingRequestsQueue.set(e, i), 
            i.deferredPromise;
            this._sentRequestsQueue.set(e, i);
            try {
                this._sendToSocket(i.payload);
            } catch (s) {
                this._sentRequestsQueue.delete(e), this._eventEmitter.emit("error", s);
            }
            return n;
        }));
    }
    _onConnect() {
        this._connectionStatus = "connected", this._reconnectAttempts = 0, super._onConnect(), 
        this._sendPendingRequests();
    }
    _sendPendingRequests() {
        for (const [e, n] of this._pendingRequestsQueue.entries()) try {
            this._sendToSocket(n.payload), this._pendingRequestsQueue.delete(e), this._sentRequestsQueue.set(e, n);
        } catch (t) {
            this._pendingRequestsQueue.delete(e), this._eventEmitter.emit("error", t);
        }
    }
    _onMessage(t) {
        const e = this._parseResponses(t);
        if (!Ft(e) && 0 !== e.length) for (const n of e) {
            if (xe(n) && n.method.endsWith("_subscription")) return void this._eventEmitter.emit("message", n);
            const t = ke(n) ? n[0].id : n.id, e = this._sentRequestsQueue.get(t);
            if (!e) return;
            (ke(n) || Re(n) || Be(n)) && (this._eventEmitter.emit("message", n), e.deferredPromise.resolve(n)), 
            this._sentRequestsQueue.delete(t);
        }
    }
    clearQueues(t) {
        this._clearQueues(t);
    }
    _clearQueues(t) {
        this._pendingRequestsQueue.size > 0 && this._pendingRequestsQueue.forEach(((e, n) => {
            e.deferredPromise.reject(new x(t)), this._pendingRequestsQueue.delete(n);
        })), this._sentRequestsQueue.size > 0 && this._sentRequestsQueue.forEach(((e, n) => {
            e.deferredPromise.reject(new x(t)), this._sentRequestsQueue.delete(n);
        })), this._removeSocketListeners();
    }
}

const Ge =  Object.freeze( Object.defineProperty({
    __proto__: null,
    ChunkResponseParser: Me,
    Eip1193Provider: He,
    EventEmitter: qt,
    SocketProvider: Fe,
    Web3DeferredPromise: $e,
    asciiToHex: Rt,
    bytesToHex: dt,
    bytesToUint8Array: lt,
    checkAddressCheckSum: Ot,
    compareBlockNumbers: (t, e) => {
        const n = "string" == typeof t && V(t), i = "string" == typeof e && V(e);
        if (t === e || ("earliest" === t || 0 === t) && ("earliest" === e || 0 === e)) return 0;
        if ("earliest" === t && e > 0) return -1;
        if ("earliest" === e && t > 0) return 1;
        if (n && i) {
            const n = {
                [Z.EARLIEST]: 1,
                [Z.FINALIZED]: 2,
                [Z.SAFE]: 3,
                [Z.LATEST]: 4,
                [Z.PENDING]: 5
            };
            return n[t] < n[e] ? -1 : 1;
        }
        if (n && !i || !n && i) throw new h("Cannot compare blocktag with provided non-blocktag input.");
        const s = BigInt(t), r = BigInt(e);
        return s < r ? -1 : s === r ? 0 : 1;
    },
    convert: re,
    convertScalarValue: ie,
    encodePacked: pe,
    ethUnitMap: ht,
    format: oe,
    fromAscii: Bt,
    fromDecimal: vt,
    fromTwosComplement: (t, e = 64) => {
        E.validate([ "int" ], [ t ]);
        const n = Pt(t);
        if (n < 0) return n;
        const i = Math.ceil(Math.log(Number(n)) / Math.log(2));
        if (i > 4 * e) throw new l(`value: "${t}", nibbleWidth: "${e}"`);
        if (4 * e !== i) return n;
        const s = $(BigInt(2), BigInt(e) * BigInt(4));
        return Pt(BigInt(n) - s);
    },
    fromUtf8: bt,
    fromWei: (t, e) => {
        let n;
        if ("string" == typeof e) {
            if (n = ht[e], !n) throw new a(e);
        } else {
            if (e < 0 || !Number.isInteger(e)) throw new c(e);
            n = $(BigInt(10), BigInt(e));
        }
        const i = String(Pt(t)), s = n.toString().length - 1;
        if (s <= 0) return i.toString();
        const r = i.padStart(s, "0"), o = r.slice(0, -s), u = r.slice(-s).replace(/\.?0+$/, "");
        if ("" === o) return `0.${u}`;
        if ("" === u) return o;
        return `${o}.${u}`.slice(0, o.length + s + 1);
    },
    getStorageSlotNumForLongString: t => ue(`0x${("number" == typeof t ? t.toString() : t).padStart(64, "0")}`),
    hexToAscii: xt,
    hexToBytes: mt,
    hexToNumber: pt,
    hexToNumberString: t => pt(t).toString(),
    hexToString: St,
    hexToUtf8: It,
    isAddress: Lt,
    isBatchRequest: We,
    isBatchResponse: ke,
    isBloom: Nt,
    isContractAddressInBloom: Dt,
    isContractInitOptions: zt,
    isDataFormat: ee,
    isHex: Wt,
    isHexStrict: Qt,
    isInBloom: $t,
    isNullish: Ft,
    isPromise: ve,
    isResponseRpcError: Se,
    isResponseWithError: Be,
    isResponseWithNotification: xe,
    isResponseWithResult: Re,
    isSubscriptionResult: Ee,
    isTopic: Ht,
    isTopicInBloom: Ut,
    isUint8Array: at,
    isUserEthereumAddressInBloom: Mt,
    isValidResponse: Pe,
    jsonRpc: Oe,
    keccak256: ce,
    keccak256Wrapper: ce,
    leftPad: Yt,
    mergeDeep: Xt,
    numberToHex: yt,
    padLeft: Vt,
    padRight: Jt,
    pollTillDefined: function(t, e) {
        return ye(this, void 0, void 0, (function*() {
            return be(t, e)[0];
        }));
    },
    pollTillDefinedAndReturnIntervalId: be,
    processSolidityEncodePackedArgs: me,
    randomBytes: ge,
    randomHex: t => dt(ge(t)),
    rejectIfConditionAtInterval: Ie,
    rejectIfTimeout: we,
    rightPad: Kt,
    setRequestIdStart: Ce,
    sha3: ue,
    sha3Raw: he,
    soliditySha3: (...t) => ue(pe(...t)),
    soliditySha3Raw: (...t) => he(pe(...t)),
    stringToHex: wt,
    toAscii: Et,
    toBatchPayload: Qe,
    toBigInt: kt,
    toBool: Ct,
    toChecksumAddress: jt,
    toDecimal: gt,
    toHex: Tt,
    toNumber: Pt,
    toPayload: qe,
    toTwosComplement: Zt,
    toUtf8: t => "string" == typeof t ? It(t) : (E.validate([ "bytes" ], [ t ]), e(t)),
    toWei: (t, e) => {
        let n;
        if (E.validate([ "number" ], [ t ]), "string" == typeof e) {
            if (n = ht[e], !n) throw new a(e);
        } else {
            if (e < 0 || !Number.isInteger(e)) throw new c(e);
            n = $(BigInt(10), BigInt(e));
        }
        let i = t;
        "number" == typeof i && (i = i > 1e20 ? BigInt(i) : i.toLocaleString("fullwide", {
            useGrouping: !1,
            maximumFractionDigits: 20
        }));
        const [s, r] = String("string" != typeof i || W(i) ? Pt(i) : i).split(".").concat(""), o = BigInt(`${s}${r}`) * n, u = r.length;
        return 0 === u ? o.toString() : o.toString().slice(0, -u);
    },
    uint8ArrayConcat: ct,
    uint8ArrayEquals: ut,
    utf8ToBytes: At,
    utf8ToHex: _t,
    uuidV4: Ae,
    validateResponse: Te,
    waitWithTimeout: _e
}, Symbol.toStringTag, {
    value: "Module"
}));

export { Pt as A, he as B, kt as C, Vt as D, qt as E, Ct as F, At as G, It as H, ct as I, at as J, ut as K, _t as L, bt as M, ge as N, Ae as O, ue as P, Yt as Q, pt as R, Fe as S, He as T, $e as W, zt as a, ee as b, Re as c, We as d, Qe as e, oe as f, qe as g, ve as h, Ft as i, Be as j, Se as k, ke as l, xe as m, Xt as n, dt as o, mt as p, ce as q, Ie as r, we as s, Tt as t, Ge as u, be as v, yt as w, lt as x, ht as y, jt as z };

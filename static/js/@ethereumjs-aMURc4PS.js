var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function r(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}

var t = {};

Object.defineProperty(t, "__esModule", {
    value: !0
});

var n = t.RLP = t.utils = t.decode = t.encode = void 0;

function o(e) {
    if (Array.isArray(e)) {
        const r = [];
        let t = 0;
        for (let n = 0; n < e.length; n++) {
            const i = o(e[n]);
            r.push(i), t += i.length;
        }
        return g(l(t, 192), ...r);
    }
    const r = m(e);
    return 1 === r.length && r[0] < 128 ? r : g(l(r.length, 128), r);
}

function i(e, r, t) {
    if (t > e.length) throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
    return e.slice(r, t);
}

function a(e) {
    if (0 === e[0]) throw new Error("invalid RLP: extra zeros");
    return c(s(e));
}

function l(e, r) {
    if (e < 56) return Uint8Array.from([ e + r ]);
    const t = w(e), n = w(r + 55 + t.length / 2);
    return Uint8Array.from(h(n + t));
}

function f(e, r = !1) {
    if (null == e || 0 === e.length) return Uint8Array.from([]);
    const t = d(m(e));
    if (r) return t;
    if (0 !== t.remainder.length) throw new Error("invalid RLP: remainder must be zero");
    return t.data;
}

function d(e) {
    let r, t, n, o, l;
    const f = [], u = e[0];
    if (u <= 127) return {
        data: e.slice(0, 1),
        remainder: e.slice(1)
    };
    if (u <= 183) {
        if (r = u - 127, n = 128 === u ? Uint8Array.from([]) : i(e, 1, r), 2 === r && n[0] < 128) throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
        return {
            data: n,
            remainder: e.slice(r)
        };
    }
    if (u <= 191) {
        if (t = u - 182, e.length - 1 < t) throw new Error("invalid RLP: not enough bytes for string length");
        if (r = a(i(e, 1, t)), r <= 55) throw new Error("invalid RLP: expected string length to be greater than 55");
        return n = i(e, t, r + t), {
            data: n,
            remainder: e.slice(r + t)
        };
    }
    if (u <= 247) {
        for (r = u - 191, o = i(e, 1, r); o.length; ) l = d(o), f.push(l.data), o = l.remainder;
        return {
            data: f,
            remainder: e.slice(r)
        };
    }
    {
        if (t = u - 246, r = a(i(e, 1, t)), r < 56) throw new Error("invalid RLP: encoded list too short");
        const n = t + r;
        if (n > e.length) throw new Error("invalid RLP: total length is larger than the data");
        for (o = i(e, t, n); o.length; ) l = d(o), f.push(l.data), o = l.remainder;
        return {
            data: f,
            remainder: e.slice(n)
        };
    }
}

t.encode = o, t.decode = f;

const u = Array.from({
    length: 256
}, ((e, r) => r.toString(16).padStart(2, "0")));

function s(e) {
    let r = "";
    for (let t = 0; t < e.length; t++) r += u[e[t]];
    return r;
}

function c(e) {
    const r = Number.parseInt(e, 16);
    if (Number.isNaN(r)) throw new Error("Invalid byte sequence");
    return r;
}

function h(e) {
    if ("string" != typeof e) throw new TypeError("hexToBytes: expected string, got " + typeof e);
    if (e.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
    const r = new Uint8Array(e.length / 2);
    for (let t = 0; t < r.length; t++) {
        const n = 2 * t;
        r[t] = c(e.slice(n, n + 2));
    }
    return r;
}

function g(...e) {
    if (1 === e.length) return e[0];
    const r = e.reduce(((e, r) => e + r.length), 0), t = new Uint8Array(r);
    for (let n = 0, o = 0; n < e.length; n++) {
        const r = e[n];
        t.set(r, o), o += r.length;
    }
    return t;
}

function y(e) {
    return (new TextEncoder).encode(e);
}

function w(e) {
    if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
    const r = e.toString(16);
    return r.length % 2 ? `0${r}` : r;
}

function p(e) {
    return e.length >= 2 && "0" === e[0] && "x" === e[1];
}

function m(e) {
    if (e instanceof Uint8Array) return e;
    if ("string" == typeof e) return p(e) ? h((r = "string" != typeof (t = e) ? t : p(t) ? t.slice(2) : t).length % 2 ? `0${r}` : r) : y(e);
    var r, t;
    if ("number" == typeof e || "bigint" == typeof e) return e ? h(w(e)) : Uint8Array.from([]);
    if (null == e) return Uint8Array.from([]);
    throw new Error("toBytes: received unsupported type " + typeof e);
}

t.utils = {
    bytesToHex: s,
    concatBytes: g,
    hexToBytes: h,
    utf8ToBytes: y
}, n = t.RLP = {
    encode: o,
    decode: f
};

export { n as R, e as c, r as g };

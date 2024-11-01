import { V as e, W as t } from "./web3-errors-hzVYhHGn.js";

import { i as n, B as r, z as o, C as i, D as s, F as a, x as u, o as c, G as p, H as d, I as l, t as m } from "./web3-utils-CA0vZo5F.js";

import { a as y, h as f, u as h, e as g } from "./web3-validator-BARD4gRE.js";

import "./web3-types-DSrrWgZ8.js";

import { p as b } from "./abitype-BIaCt7HV.js";

const v = e => !n(e) && "object" == typeof e && !n(e.type) && "error" === e.type, w = e => !n(e) && "object" == typeof e && !n(e.type) && "event" === e.type, j = e => !n(e) && "object" == typeof e && !n(e.type) && "function" === e.type, x = e => !n(e) && "object" == typeof e && !n(e.type) && "constructor" === e.type, I = e => e.includes("[]") ? {
    type: "tuple[]",
    name: e.slice(0, -2)
} : {
    type: "tuple",
    name: e
}, _ = e => {
    const t = [];
    for (const n of Object.keys(e)) {
        const r = e[n];
        "object" == typeof r ? t.push(Object.assign(Object.assign({}, I(n)), {
            components: _(r)
        })) : t.push({
            name: n,
            type: e[n]
        });
    }
    return t;
}, A = (t, n) => {
    const r = [];
    return n.forEach((n => {
        if ("object" == typeof n.components) {
            if (!n.type.startsWith("tuple")) throw new e(`Invalid value given "${n.type}". Error: components found but type is not tuple.`);
            const o = n.type.indexOf("["), i = o >= 0 ? n.type.substring(o) : "", s = A(t, n.components);
            Array.isArray(s) && t ? r.push(`tuple(${s.join(",")})${i}`) : r.push(`(${s.join(",")})${i}`);
        } else r.push(n.type);
    })), r;
}, B = e => {
    var t, n, r, o;
    return v(e) || w(e) || j(e) ? (null === (t = e.name) || void 0 === t ? void 0 : t.includes("(")) ? e.name : `${null !== (n = e.name) && void 0 !== n ? n : ""}(${A(!1, null !== (r = e.inputs) && void 0 !== r ? r : []).join(",")})` : `(${A(!1, null !== (o = e.inputs) && void 0 !== o ? o : []).join(",")})`;
}, W = t => {
    if ("string" != typeof t && !w(t)) throw new e("Invalid parameter value in encodeEventSignature");
    let n;
    return n = !t || "function" != typeof t && "object" != typeof t ? t : B(t), r(n);
}, O = 32;

function $(e = 0) {
    var t;
    if (void 0 !== (null === (t = globalThis.Buffer) || void 0 === t ? void 0 : t.alloc)) {
        const t = globalThis.Buffer.alloc(e);
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    }
    return new Uint8Array(e);
}

function N(e) {
    var t, n;
    return Object.assign(Object.assign({}, e), {
        name: null !== (t = e.name) && void 0 !== t ? t : "",
        components: null === (n = e.components) || void 0 === n ? void 0 : n.map((e => N(e)))
    });
}

function S(t) {
    return t.map((t => {
        var r, o, i;
        if (!n(o = t) && "object" == typeof o && !n(o.type) && "string" == typeof o.type) return t;
        if ("string" == typeof t) return N(b(t.replace(/tuple/, "")));
        if ("object" == typeof (i = t) && void 0 === i.components && void 0 === i.name) {
            const e = Object.keys(t)[0], n = I(e);
            return n.name = null !== (r = n.name) && void 0 !== r ? r : "", Object.assign(Object.assign({}, n), {
                components: _(t[e])
            });
        }
        throw new e("Invalid abi");
    }));
}

function z(t) {
    const n = t.type.lastIndexOf("["), r = t.type.substring(0, n), o = t.type.substring(n);
    let i = -1;
    if ("[]" !== o && (i = Number(o.slice(1, -1)), isNaN(i))) throw new e("Invalid fixed array size", {
        size: o
    });
    return {
        param: {
            type: r,
            name: "",
            components: t.components
        },
        size: i
    };
}

function E(e) {
    var t, n;
    return !("string" !== e.type && "bytes" !== e.type && !e.type.endsWith("[]")) || ("tuple" === e.type ? null !== (n = null === (t = e.components) || void 0 === t ? void 0 : t.some(E)) && void 0 !== n && n : !!e.type.endsWith("]") && E(z(e).param));
}

const k =  new Map;

let L = BigInt(256);

for (let ie = 8; ie <= 256; ie += 8) k.set(`uint${ie}`, {
    min: BigInt(0),
    max: L - BigInt(1)
}), k.set(`int${ie}`, {
    min: -L / BigInt(2),
    max: L / BigInt(2) - BigInt(1)
}), L *= BigInt(256);

k.set("int", k.get("int256")), k.set("uint", k.get("uint256"));

const C = BigInt(1) << BigInt(256);

function P(e, t = 32) {
    let n;
    return n = e < 0 ? (C + e).toString(16) : e.toString(16), n = s(n, 2 * t), f(n);
}

function U(t, n) {
    let r;
    try {
        r = i(n);
    } catch (s) {
        throw new e("provided input is not number value", {
            type: t.type,
            value: n,
            name: t.name
        });
    }
    const o = k.get(t.type);
    if (!o) throw new e("provided abi contains invalid number datatype", {
        type: t.type
    });
    if (r < o.min) throw new e("provided input is less then minimum for given type", {
        type: t.type,
        value: n,
        name: t.name,
        minimum: o.min.toString()
    });
    if (r > o.max) throw new e("provided input is greater then maximum for given type", {
        type: t.type,
        value: n,
        name: t.name,
        maximum: o.max.toString()
    });
    return {
        dynamic: !1,
        encoded: P(r)
    };
}

function q(t, n) {
    if (n.length < O) throw new e("Not enough bytes left to decode", {
        param: t,
        bytesLeft: n.length
    });
    const r = n.subarray(0, O), o = k.get(t.type);
    if (!o) throw new e("provided abi contains invalid number datatype", {
        type: t.type
    });
    const i = function(e, t) {
        const n = h(e), r = BigInt(n);
        return r <= t ? r : r - C;
    }(r, o.max);
    if (i < o.min) throw new e("decoded value is less then minimum for given type", {
        type: t.type,
        value: i,
        name: t.name,
        minimum: o.min.toString()
    });
    if (i > o.max) throw new e("decoded value is greater then maximum for given type", {
        type: t.type,
        value: i,
        name: t.name,
        maximum: o.max.toString()
    });
    return {
        result: i,
        encoded: n.subarray(O),
        consumed: O
    };
}

function F(t, n) {
    if ("string" == typeof n && n.length % 2 != 0 && (n += "0"), !g(n)) throw new e("provided input is not valid bytes value", {
        type: t.type,
        value: n,
        name: t.name
    });
    const r = u(n), [, o] = t.type.split("bytes");
    if (o) {
        if (Number(o) > 32 || Number(o) < 1) throw new e("invalid bytes type. Static byte type can have between 1 and 32 bytes", {
            type: t.type
        });
        if (Number(o) < r.length) throw new e("provided input size is different than type size", {
            type: t.type,
            value: n,
            name: t.name
        });
        const i = $(O);
        return i.set(r), {
            dynamic: !1,
            encoded: i
        };
    }
    const i = Math.ceil(r.length / O), s = $(O + i * O);
    return s.set(U({
        type: "uint32",
        name: ""
    }, r.length).encoded), s.set(r, O), {
        dynamic: !0,
        encoded: s
    };
}

function G(t, n) {
    const [, r] = t.type.split("bytes");
    let o = Number(r), i = n, s = 1, a = 0;
    if (!o) {
        const e = q({
            type: "uint32",
            name: ""
        }, i);
        o = Number(e.result), a += e.consumed, i = e.encoded, s = Math.ceil(o / O);
    }
    if (o > n.length) throw new e("there is not enough data to decode", {
        type: t.type,
        encoded: n,
        size: o
    });
    return {
        result: c(i.subarray(0, o)),
        encoded: i.subarray(s * O),
        consumed: a + s * O
    };
}

function M(e) {
    let t = 0, n = 0;
    const r = [], o = [];
    for (const i of e) i.dynamic ? t += O : t += i.encoded.length;
    for (const i of e) i.dynamic ? (r.push(U({
        type: "uint256",
        name: ""
    }, t + n)), o.push(i), n += i.encoded.length) : r.push(i);
    return l(...r.map((e => e.encoded)), ...o.map((e => e.encoded)));
}

function D(n, r) {
    if ("string" === n.type) return function(t, n) {
        if ("string" != typeof n) throw new e("invalid input, should be string", {
            input: n
        });
        return F({
            type: "bytes",
            name: ""
        }, p(n));
    }(0, r);
    if ("bool" === n.type) return function(n, r) {
        let o;
        try {
            o = a(r);
        } catch (i) {
            if (i instanceof t) throw new e("provided input is not valid boolean value", {
                type: n.type,
                value: r,
                name: n.name
            });
        }
        return U({
            type: "uint8",
            name: ""
        }, Number(o));
    }(n, r);
    if ("address" === n.type) return function(t, n) {
        if ("string" != typeof n) throw new e("address type expects string as input type", {
            value: n,
            name: t.name,
            type: t.type
        });
        let r = n.toLowerCase();
        if (r.startsWith("0x") || (r = `0x${r}`), !y(r)) throw new e("provided input is not valid address", {
            value: n,
            name: t.name,
            type: t.type
        });
        const o = f(r), i = $(O);
        return i.set(o, 12), {
            dynamic: !1,
            encoded: i
        };
    }(n, r);
    if ("tuple" === n.type) return T(n, r);
    if (n.type.endsWith("]")) return function(t, n) {
        if (!Array.isArray(n)) throw new e("Expected value to be array", {
            abi: t,
            values: n
        });
        const {size: r, param: o} = z(t), i = n.map((e => D(o, e))), s = -1 === r, a = i.length > 0 && i[0].dynamic;
        if (!s && n.length !== r) throw new e("Given arguments count doesn't match array length", {
            arrayLength: r,
            argumentsLength: n.length
        });
        if (s || a) {
            const e = M(i);
            if (s) {
                const t = U({
                    type: "uint256",
                    name: ""
                }, i.length).encoded;
                return {
                    dynamic: !0,
                    encoded: i.length > 0 ? l(t, e) : t
                };
            }
            return {
                dynamic: !0,
                encoded: e
            };
        }
        return {
            dynamic: !1,
            encoded: l(...i.map((e => e.encoded)))
        };
    }(n, r);
    if (n.type.startsWith("bytes")) return F(n, r);
    if (n.type.startsWith("uint") || n.type.startsWith("int")) return U(n, r);
    throw new e("Unsupported", {
        param: n,
        value: r
    });
}

function R(t, n) {
    if ("string" === t.type) return function(e, t) {
        const n = G({
            type: "bytes",
            name: ""
        }, t);
        return {
            result: d(n.result),
            encoded: n.encoded,
            consumed: n.consumed
        };
    }(0, n);
    if ("bool" === t.type) return function(t, n) {
        const r = q({
            type: "uint8",
            name: ""
        }, n);
        if (r.result > 1 || r.result < 0) throw new e("Invalid boolean value encoded", {
            boolBytes: n.subarray(0, O),
            numberResult: r
        });
        return {
            result: r.result === BigInt(1),
            encoded: r.encoded,
            consumed: O
        };
    }(0, n);
    if ("address" === t.type) return function(t, n) {
        const r = n.subarray(12, O);
        if (20 !== r.length) throw new e("Invalid decoding input, not enough bytes to decode address", {
            bytes: n
        });
        const i = h(r);
        return {
            result: o(i),
            encoded: n.subarray(O),
            consumed: O
        };
    }(0, n);
    if ("tuple" === t.type) return H(t, n);
    if (t.type.endsWith("]")) return function(e, t) {
        let {size: n, param: r} = z(e), o = 0;
        const i = [];
        let s = t;
        if (-1 === n) {
            const e = q({
                type: "uint32",
                name: ""
            }, t);
            n = Number(e.result), o = e.consumed, s = e.encoded;
        }
        if (E(r)) {
            for (let e = 0; e < n; e += 1) {
                const t = q({
                    type: "uint32",
                    name: ""
                }, s.subarray(e * O));
                o += t.consumed;
                const n = R(r, s.subarray(Number(t.result)));
                o += n.consumed, i.push(n.result);
            }
            return {
                result: i,
                encoded: s.subarray(o),
                consumed: o
            };
        }
        for (let a = 0; a < n; a += 1) {
            const e = R(r, t.subarray(o));
            o += e.consumed, i.push(e.result);
        }
        return {
            result: i,
            encoded: t.subarray(o),
            consumed: o
        };
    }(t, n);
    if (t.type.startsWith("bytes")) return G(t, n);
    if (t.type.startsWith("uint") || t.type.startsWith("int")) return q(t, n);
    throw new e("Unsupported", {
        param: t,
        bytes: n
    });
}

function T(t, n) {
    var r, o, i;
    let s = !1;
    if (!Array.isArray(n) && "object" != typeof n) throw new e("param must be either Array or Object", {
        param: t,
        input: n
    });
    const a = n, u = [];
    for (let c = 0; c < (null !== (o = null === (r = t.components) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0); c += 1) {
        const r = t.components[c];
        let o;
        if (Array.isArray(a)) {
            if (c >= a.length) throw new e("input param length missmatch", {
                param: t,
                input: n
            });
            o = D(r, a[c]);
        } else {
            const s = a[null !== (i = r.name) && void 0 !== i ? i : ""];
            if (null == s) throw new e("missing input defined in abi", {
                param: t,
                input: n,
                paramName: r.name
            });
            o = D(r, s);
        }
        o.dynamic && (s = !0), u.push(o);
    }
    return s ? {
        dynamic: !0,
        encoded: M(u)
    } : {
        dynamic: !1,
        encoded: l(...u.map((e => e.encoded)))
    };
}

function H(e, t) {
    const n = {
        __length__: 0
    };
    let r = 0;
    if (!e.components) return {
        result: n,
        encoded: t,
        consumed: r
    };
    let o = 0;
    for (const [i, s] of e.components.entries()) {
        let e;
        if (E(s)) {
            const n = q({
                type: "uint32",
                name: ""
            }, t.subarray(r));
            e = R(s, t.subarray(Number(n.result))), r += n.consumed, o += e.consumed;
        } else e = R(s, t.subarray(r)), r += e.consumed;
        n.__length__ += 1, n[i] = e.result, s.name && "" !== s.name && (n[s.name] = e.result);
    }
    return {
        encoded: t.subarray(r + o),
        result: n,
        consumed: r + o
    };
}

function V(e) {
    const t = [];
    return e.forEach((e => {
        if (Array.isArray(e)) {
            const n = V(e);
            t.push({
                type: "tuple",
                components: n,
                name: ""
            });
        } else t.push({
            type: m(e, !0)
        });
    })), t;
}

function X(t, n) {
    if ((null == t ? void 0 : t.length) !== n.length) throw new e("Invalid number of values received for given ABI", {
        expected: null == t ? void 0 : t.length,
        received: n.length
    });
    const r = S(t);
    return h(T({
        type: "tuple",
        name: "",
        components: r
    }, n).encoded);
}

function Y(t) {
    try {
        const e = V(t);
        return h(T({
            type: "tuple",
            name: "",
            components: e
        }, t).encoded);
    } catch (n) {
        throw new e("Could not infer types from given params", {
            params: t
        });
    }
}

const J = (e, t) => X([ e ], [ t ]), K = (t, n, r) => {
    try {
        if (t.length > 0 && (!n || "0x" === n || "0X" === n)) throw new e("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");
        return function(e, t) {
            return H({
                type: "tuple",
                name: "",
                components: S(e)
            }, f(t)).result;
        }(t, `0x${n.replace(/0x/i, "")}`);
    } catch (o) {
        throw new e(`Parameter decoding error: ${o.message}`, {
            internalErr: o
        });
    }
}, Q = (e, t) => K(e, t), Z = (e, t) => Q([ e ], t)[0], ee = t => {
    if ("string" != typeof t && !j(t)) throw new e("Invalid parameter value in encodeFunctionSignature");
    let n;
    return n = !t || "function" != typeof t && "object" != typeof t ? t : B(t), r(n).slice(0, 10);
}, te = (t, n) => {
    var r;
    if (!j(t)) throw new e("Invalid parameter value in encodeFunctionCall");
    return `${ee(t)}${X(null !== (r = t.inputs) && void 0 !== r ? r : [], null != n ? n : []).replace("0x", "")}`;
}, ne = [ "bool", "string", "int", "uint", "address", "fixed", "ufixed" ], re = (e, t, n) => {
    const r = Array.isArray(n) ? n : [ n ], o = {}, i = {};
    for (const [l, m] of e.entries()) m.indexed ? o[l] = m : i[l] = m;
    const s = t ? K(Object.values(i), t) : {
        __length__: 0
    }, a = r.length - Object.keys(o).length, u = Object.values(o).map(((e, t) => {
        return ne.some((t => e.type.startsWith(t))) ? (n = e.type, o = r[t + a], "string" === n ? o : Z(n, o)) : r[t + a];
        var n, o;
    })), c = {
        __length__: 0
    };
    let p = 0, d = 0;
    for (const [l, m] of e.entries()) c[l] = "string" === m.type ? "" : void 0, o[l] && (c[l] = u[p], 
    p += 1), i[l] && (c[l] = s[String(d)], d += 1), m.name && (c[m.name] = c[l]), c.__length__ += 1;
    return c;
}, oe = (t, n) => {
    if (null == n ? void 0 : n.data) {
        let i, s, a;
        try {
            const o = n.data.slice(0, 10), u = t.find((t => (t => {
                if ("string" != typeof t && !v(t)) throw new e("Invalid parameter value in encodeErrorSignature");
                let n;
                return n = !t || "function" != typeof t && "object" != typeof t ? t : B(t), r(n);
            })(t).startsWith(o)));
            (null == u ? void 0 : u.inputs) ? (i = u.name, s = B(u), a = Q([ ...u.inputs ], n.data.substring(10))) : n.data.startsWith("0x08c379a0") ? (i = "Error", 
            s = "Error(string)", a = Q([ {
                name: "message",
                type: "string"
            } ], n.data.substring(10))) : n.data.startsWith("0x4e487b71") && (i = "Panic", s = "Panic(uint256)", 
            a = Q([ {
                name: "code",
                type: "uint256"
            } ], n.data.substring(10)));
        } catch (o) {}
        i && n.setDecodedProperties(i, s, a);
    }
};

export { te as a, ee as b, J as c, X as d, W as e, Z as f, Q as g, re as h, v as i, oe as j, B as k, Y as l, x as m, j as n, w as o };

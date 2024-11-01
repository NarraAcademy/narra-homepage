import { af as e, ay as t, ag as r, ai as s, az as i } from "./web3-errors-hzVYhHGn.js";

import { B as n, T as a } from "./web3-types-DSrrWgZ8.js";

import { k as o } from "./ethereum-cryptography-wqlT3DIR.js";

import { u as l } from "./@noble-Cuw1cgUn.js";

import { Z as u, z as f } from "./zod-D1IQRcUw.js";

const c = e => e.message ? e.message : "unspecified error";

class y extends e {
    constructor(e) {
        super(), this.code = t, this.errors = e, super.message = `Web3 validator found ${e.length} error[s]:\n${this._compileErrors().join("\n")}`;
    }
    _compileErrors() {
        return this.errors.map(c);
    }
}

const m = [ "bool", "int", "uint", "bytes", "string", "address", "tuple" ], p = e => "object" == typeof e && "type" in e && "name" in e, d = e => "string" == typeof e, h = e => "string" == typeof e && /^((-)?0x[0-9a-f]+|(0x))$/i.test(e);

function g(e, t) {
    return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/));
}

const b = e => "number" == typeof e || "bigint" == typeof e || "string" == typeof e && /^((-0x|0x|-)?[0-9a-f]+|(0x))$/i.test(e);

function v(e) {
    if ("string" != typeof e) throw new Error("[isHexPrefixed] input must be type 'string', received type " + typeof e);
    return e.startsWith("0x");
}

const A = function(e) {
    for (const [t, r] of Object.entries(e)) if (void 0 !== r && r.length > 0 && 0 === r[0]) throw new Error(`${t} cannot have leading zeroes, received: ${r.toString()}`);
}, $ = [ "hex", "number", "blockNumber", "blockNumberOrTag", "filter", "bloom" ], x = e => {
    let t, r = e.replace(/ /, ""), s = !1, i = [];
    if (e.includes("[") && (r = r.slice(0, r.indexOf("[")), i = [ ...e.matchAll(/(?:\[(\d*)\])/g) ].map((e => parseInt(e[1], 10))).map((e => Number.isNaN(e) ? -1 : e)), 
    s = i.length > 0), m.includes(r)) return {
        baseType: r,
        isArray: s,
        baseTypeSize: t,
        arraySizes: i
    };
    if (r.startsWith("int")) t = parseInt(r.substring(3), 10), r = "int"; else if (r.startsWith("uint")) t = parseInt(e.substring(4), 10), 
    r = "uint"; else {
        if (!r.startsWith("bytes")) return {
            baseType: void 0,
            isArray: !1,
            baseTypeSize: void 0,
            arraySizes: i
        };
        t = parseInt(r.substring(5), 10), r = "bytes";
    }
    return {
        baseType: r,
        isArray: s,
        baseTypeSize: t,
        arraySizes: i
    };
}, I = (e, t = {}) => {
    if (Object.keys(t).includes("type")) throw new y([ {
        keyword: "eth",
        message: 'Either "eth" or "type" can be presented in schema',
        params: {
            eth: e
        },
        instancePath: "",
        schemaPath: ""
    } ]);
    const {baseType: r, baseTypeSize: s} = x(e);
    if (!r && !$.includes(e)) throw new y([ {
        keyword: "eth",
        message: `Eth data type "${e}" is not valid`,
        params: {
            eth: e
        },
        instancePath: "",
        schemaPath: ""
    } ]);
    if (r) {
        if ("tuple" === r) throw new Error('"tuple" type is not implemented directly.');
        return {
            format: `${r}${null != s ? s : ""}`,
            required: !0
        };
    }
    return e ? {
        format: e,
        required: !0
    } : {};
}, w = (e, t = "/0") => {
    const r = {
        type: "array",
        items: [],
        maxItems: e.length,
        minItems: e.length
    };
    for (const [s, i] of e.entries()) {
        let e, n, a = [];
        p(i) ? (e = i.type, n = i.name || `${t}/${s}`, a = i.components) : "string" == typeof i ? (e = i, 
        n = `${t}/${s}`) : Array.isArray(i) && (i[0] && "string" == typeof i[0] && i[0].startsWith("tuple") && !Array.isArray(i[0]) && i[1] && Array.isArray(i[1]) ? (e = i[0], 
        n = `${t}/${s}`, a = i[1]) : (e = "tuple", n = `${t}/${s}`, a = i));
        const {baseType: o, isArray: l, arraySizes: u} = x(e);
        let f, c = r;
        for (let t = u.length - 1; t > 0; t -= 1) f = {
            type: "array",
            $id: n,
            items: [],
            maxItems: u[t],
            minItems: u[t]
        }, u[t] < 0 && (delete f.maxItems, delete f.minItems), Array.isArray(c.items) ? 0 === c.items.length ? c.items = [ f ] : c.items.push(f) : c.items = [ c.items, f ], 
        c = f;
        if ("tuple" !== o || l) if ("tuple" === o && l) {
            const e = u[0], t = Object.assign({
                type: "array",
                $id: n,
                items: w(a, n)
            }, e >= 0 && {
                minItems: e,
                maxItems: e
            });
            c.items.push(t);
        } else if (l) {
            const t = u[0], r = Object.assign({
                type: "array",
                $id: n,
                items: I(e)
            }, t >= 0 && {
                minItems: t,
                maxItems: t
            });
            c.items.push(r);
        } else Array.isArray(c.items), c.items.push(Object.assign({
            $id: n
        }, I(e))); else {
            const e = w(a, n);
            e.$id = n, c.items.push(e);
        }
        c = r;
    }
    return r;
}, T = e => w(e), S = (e, t) => 1 === t ? e : S(e[0], t - 1), j = (e, t, r) => {
    const s = [];
    for (const [i, n] of e.entries()) {
        let e, a, o = [];
        p(n) ? (e = n.type, a = n.name, o = n.components) : "string" == typeof n ? e = n : Array.isArray(n) && (n[1] && Array.isArray(n[1]) ? (e = n[0], 
        o = n[1]) : (e = "tuple", o = n));
        const {baseType: l, isArray: u, arraySizes: f} = x(e), c = Array.isArray(t) ? t[i] : t[a];
        if ("tuple" !== l || u) if ("tuple" === l && u) {
            const e = [];
            for (const t of c) if (f.length > 1) {
                const s = S(t, f.length - 1), i = [];
                for (const e of s) i.push(j(o, e, r));
                e.push(i);
            } else e.push(j(o, t, r));
            s.push(e);
        } else s.push(c); else s.push(j(o, c, r));
    }
    return (r = null != r ? r : []).push(...s), r;
}, z = e => {
    if (e >= 48 && e <= 57) return e - 48;
    if (e >= 65 && e <= 70) return e - 55;
    if (e >= 97 && e <= 102) return e - 87;
    throw new Error(`Invalid code point: ${e}`);
}, B = e => {
    if (!h(e)) throw new Error("Invalid hex string");
    const [t, r] = e.startsWith("-") ? [ !0, e.slice(1) ] : [ !1, e ], s = BigInt(r);
    return s > Number.MAX_SAFE_INTEGER ? t ? -s : s : s < Number.MIN_SAFE_INTEGER ? s : t ? -1 * Number(s) : Number(s);
}, O = e => {
    if (("number" == typeof e || "bigint" == typeof e) && e < 0) return `-0x${e.toString(16).slice(1)}`;
    if (("number" == typeof e || "bigint" == typeof e) && e >= 0) return `0x${e.toString(16)}`;
    if ("string" == typeof e && h(e)) {
        const [t, r] = e.startsWith("-") ? [ !0, e.slice(1) ] : [ !1, e ];
        return `${t ? "-" : ""}0x${r.split(/^(-)?0(x|X)/).slice(-1)[0].replace(/^0+/, "").toLowerCase()}`;
    }
    if ("string" == typeof e && !h(e)) return O(BigInt(e));
    throw new s(e);
}, E = (e, t, r = "0") => {
    if ("string" == typeof e && !h(e)) return e.padStart(t, r);
    const s = "string" == typeof e && h(e) ? e : O(e), [i, n] = s.startsWith("-") ? [ "-0x", s.slice(3) ] : [ "0x", s.slice(2) ];
    return `${i}${n.padStart(t, r)}`;
};

function N(e) {
    let t = "0x";
    for (const r of e) {
        const e = r.toString(16);
        t += 1 === e.length ? `0${e}` : e;
    }
    return t;
}

const k = 48, _ = 57, W = 65, P = 70, q = 97, F = 102;

function U(e) {
    return e >= k && e <= _ ? e - k : e >= W && e <= P ? e - (W - 10) : e >= q && e <= F ? e - (q - 10) : void 0;
}

function C(e) {
    let t = 0;
    if (!e.startsWith("0") || "x" !== e[1] && "X" !== e[1] || (t = 2), e.length % 2 != 0) throw new r(`hex string has odd length: ${e}`);
    const s = (e.length - t) / 2, i = new Uint8Array(s);
    for (let n = 0, a = t; n < s; n += 1) {
        const t = U(e.charCodeAt(a++)), s = U(e.charCodeAt(a++));
        if (void 0 === t || void 0 === s) throw new r(`Invalid byte sequence ("${e[a - 2]}${e[a - 1]}" in "${e}").`);
        i[n] = 16 * t + s;
    }
    return i;
}

function X(e) {
    var t;
    return e instanceof Uint8Array || "Uint8Array" !== (null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) ? e : Uint8Array.from(e);
}

const J =  Object.freeze( Object.defineProperty({
    __proto__: null,
    abiSchemaToJsonSchema: w,
    codePointToInt: z,
    ensureIfUint8Array: X,
    ethAbiToJsonSchema: T,
    fetchArrayElement: S,
    hexToNumber: B,
    hexToUint8Array: C,
    numberToHex: O,
    padLeft: E,
    parseBaseType: x,
    transformJsonDataToAbiFormat: j,
    uint8ArrayToHexString: N
}, Symbol.toStringTag, {
    value: "Module"
})), L = e => {
    var t, r;
    return e instanceof Uint8Array || "Uint8Array" === (null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) || "Buffer" === (null === (r = null == e ? void 0 : e.constructor) || void 0 === r ? void 0 : r.name);
}, M = (e, t = {
    abiType: "bytes"
}) => {
    if ("string" != typeof e && !Array.isArray(e) && !L(e)) return !1;
    if ("string" == typeof e && h(e) && e.startsWith("-")) return !1;
    if ("string" == typeof e && !h(e)) return !1;
    let r;
    if ("string" == typeof e) {
        if (e.length % 2 != 0) return !1;
        r = C(e);
    } else if (Array.isArray(e)) {
        if (e.some((e => e < 0 || e > 255 || !Number.isInteger(e)))) return !1;
        r = new Uint8Array(e);
    } else r = e;
    if (null == t ? void 0 : t.abiType) {
        const {baseTypeSize: e} = x(t.abiType);
        return !e || r.length === e;
    }
    return !(null == t ? void 0 : t.size) || r.length === (null == t ? void 0 : t.size);
}, H = e => {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(e)) return !1;
    const t = e.slice(2), r = l(t.toLowerCase()), s = N(o(X(r))).slice(2);
    for (let i = 0; i < 40; i += 1) if (parseInt(s[i], 16) > 7 && t[i].toUpperCase() !== t[i] || parseInt(s[i], 16) <= 7 && t[i].toLowerCase() !== t[i]) return !1;
    return !0;
}, G = (e, t = !0) => {
    if ("string" != typeof e && !L(e)) return !1;
    let r;
    return r = L(e) ? N(e) : "string" != typeof e || h(e) || e.toLowerCase().startsWith("0x") ? e : `0x${e}`, 
    !!/^(0x)?[0-9a-f]{40}$/i.test(r) && (!(!/^(0x|0X)?[0-9a-f]{40}$/.test(r) && !/^(0x|0X)?[0-9A-F]{40}$/.test(r)) || (!t || H(r)));
}, R = (e, t) => {
    if (t === BigInt(0)) return BigInt(1);
    let r = e;
    for (let s = 1; s < t; s += 1) r *= e;
    return r;
}, D = (e, t = {
    abiType: "uint"
}) => {
    if (![ "number", "string", "bigint" ].includes(typeof e) || "string" == typeof e && 0 === e.length) return !1;
    let r;
    if (null == t ? void 0 : t.abiType) {
        const {baseTypeSize: e} = x(t.abiType);
        e && (r = e);
    } else t.bitSize && (r = t.bitSize);
    const s = R(BigInt(2), BigInt(null != r ? r : 256)) - BigInt(1);
    try {
        const t = "string" == typeof e && h(e) ? BigInt(B(e)) : BigInt(e);
        return t >= 0 && t <= s;
    } catch (i) {
        return !1;
    }
}, Z = (e, t = {
    abiType: "int"
}) => {
    if (![ "number", "string", "bigint" ].includes(typeof e)) return !1;
    if ("number" == typeof e && e > Number.MAX_SAFE_INTEGER) return !1;
    let r;
    if (null == t ? void 0 : t.abiType) {
        const {baseTypeSize: e, baseType: s} = x(t.abiType);
        if ("int" !== s) return !1;
        e && (r = e);
    } else t.bitSize && (r = t.bitSize);
    const s = R(BigInt(2), BigInt((null != r ? r : 256) - 1)), i = BigInt(-1) * R(BigInt(2), BigInt((null != r ? r : 256) - 1));
    try {
        const t = "string" == typeof e && h(e) ? BigInt(B(e)) : BigInt(e);
        return t >= i && t <= s;
    } catch (n) {
        return !1;
    }
}, K = e => !!Z(e) || (!("string" != typeof e || !/[0-9.]/.test(e) || e.indexOf(".") !== e.lastIndexOf(".")) || "number" == typeof e), Q = e => D(e), V = e => Object.values(n).includes(e), Y = e => V(e) || Q(e), ee = e => "string" == typeof e && (!!/^(0x)?[0-9a-f]{512}$/i.test(e) && !(!/^(0x)?[0-9a-f]{512}$/.test(e) && !/^(0x)?[0-9A-F]{512}$/.test(e))), te = (e, t) => {
    if ("string" == typeof t && !h(t)) return !1;
    if (!ee(e)) return !1;
    const r = "string" == typeof t ? C(t) : t, s = N(o(r)).slice(2);
    for (let i = 0; i < 12; i += 4) {
        const t = 
        // eslint-disable-next-line no-bitwise
        (parseInt(s.slice(i, i + 2), 16) << 8) + parseInt(s.slice(i + 2, i + 4), 16) & 2047, r = 1 << t % 4;
        if ((z(e.charCodeAt(e.length - 1 - Math.floor(t / 4))) & r) !== r) return !1;
    }
    return !0;
}, re = (e, t) => {
    if (!ee(e)) return !1;
    if (!G(t)) return !1;
    const r = E(t, 64);
    return te(e, r);
}, se = (e, t) => !!ee(e) && (!!G(t) && te(e, t)), ie = e => 
// Using "null" value intentionally for validation
// eslint-disable-next-line no-null/no-null
null == e, ne = e => !("object" != typeof e || ie(e) || Array.isArray(e) || e instanceof a), ae = e => "string" == typeof e && (!!/^(0x)?[0-9a-f]{64}$/i.test(e) && !(!/^(0x)?[0-9a-f]{64}$/.test(e) && !/^(0x)?[0-9A-F]{64}$/.test(e))), oe = (e, t) => !!ee(e) && (!!ae(t) && te(e, t)), le = {
    address: e => G(e),
    bloom: e => ee(e),
    blockNumber: e => Q(e),
    blockTag: e => V(e),
    blockNumberOrTag: e => Y(e),
    bool: e => {
        return !![ "number", "string", "boolean" ].includes(typeof (t = e)) && ("boolean" == typeof t || ("string" != typeof t || h(t) ? "string" == typeof t && h(t) ? "0x1" === t || "0x0" === t : 1 === t || 0 === t : "1" === t || "0" === t));
        var t;
    },
    bytes: e => M(e),
    filter: e => (e => {
        const t = [ "fromBlock", "toBlock", "address", "topics", "blockHash" ];
        if (ie(e) || "object" != typeof e) return !1;
        if (!Object.keys(e).every((e => t.includes(e)))) return !1;
        if (!ie(e.fromBlock) && !Y(e.fromBlock) || !ie(e.toBlock) && !Y(e.toBlock)) return !1;
        if (!ie(e.address)) if (Array.isArray(e.address)) {
            if (!e.address.every((e => G(e)))) return !1;
        } else if (!G(e.address)) return !1;
        return !(!ie(e.topics) && !e.topics.every((e => !!ie(e) || (Array.isArray(e) ? e.every((e => ae(e))) : !!ae(e)))));
    })(e),
    hex: e => h(e),
    uint: e => D(e),
    int: e => Z(e),
    number: e => K(e),
    string: e => d(e)
};

for (let ye = 8; ye <= 256; ye += 8) le[`int${ye}`] = e => Z(e, {
    bitSize: ye
}), le[`uint${ye}`] = e => D(e, {
    bitSize: ye
});

for (let ye = 1; ye <= 32; ye += 1) le[`bytes${ye}`] = e => M(e, {
    size: ye
});

le.bytes256 = le.bytes;

const ue = e => {
    if ((!(null == e ? void 0 : e.type) || "object" === (null == e ? void 0 : e.type)) && (null == e ? void 0 : e.properties)) {
        const t = {};
        for (const r of Object.keys(e.properties)) {
            const s = ue(e.properties[r]);
            s && (t[r] = s);
        }
        return Array.isArray(e.required) ? f.object(t).partial().required(e.required.reduce(((e, t) => Object.assign(Object.assign({}, e), {
            [t]: !0
        })), {})) : f.object(t).partial();
    }
    if ("array" === (null == e ? void 0 : e.type) && (null == e ? void 0 : e.items)) {
        if (Array.isArray(e.items) && e.items.length > 1 && void 0 !== e.maxItems && new Set(e.items.map((e => e.$id))).size === e.items.length) {
            const t = [];
            for (const r of e.items) {
                const e = ue(r);
                e && t.push(e);
            }
            return f.tuple(t);
        }
        const t = Array.isArray(e.items) ? e.items[0] : e.items;
        let r = f.array(ue(t));
        return r = void 0 !== e.minItems ? r.min(e.minItems) : r, r = void 0 !== e.maxItems ? r.max(e.maxItems) : r, 
        r;
    }
    if (e.oneOf && Array.isArray(e.oneOf)) return f.union(e.oneOf.map((e => ue(e))));
    if (null == e ? void 0 : e.format) {
        if (!le[e.format]) throw new i(e.format);
        return f.any().refine(le[e.format], (t => ({
            params: {
                value: t,
                format: e.format
            }
        })));
    }
    return (null == e ? void 0 : e.type) && "object" !== (null == e ? void 0 : e.type) && "function" == typeof f[String(e.type)] ? f[String(e.type)]() : f.object({
        data: f.any()
    }).partial();
};

class fe {
    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    static factory() {
        return fe.validatorInstance || (fe.validatorInstance = new fe), fe.validatorInstance;
    }
    validate(e, t, r) {
        var s, i;
        const n = ue(e).safeParse(t);
        if (!n.success) {
            const e = this.convertErrors(null !== (i = null === (s = n.error) || void 0 === s ? void 0 : s.issues) && void 0 !== i ? i : []);
            if (e) {
                if (null == r ? void 0 : r.silent) return e;
                throw new y(e);
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    convertErrors(e) {
        if (e && Array.isArray(e) && e.length > 0) return e.map((e => {
            var t;
            let r, s, i, n;
            n = e.path.join("/");
            const a = String(e.path[e.path.length - 1]), o = e.path.join("/");
            if (e.code === u.too_big) s = "maxItems", n = `${o}/maxItems`, i = {
                limit: e.maximum
            }, r = `must NOT have more than ${e.maximum} items`; else if (e.code === u.too_small) s = "minItems", 
            n = `${o}/minItems`, i = {
                limit: e.minimum
            }, r = `must NOT have fewer than ${e.minimum} items`; else if (e.code === u.custom) {
                const {value: s, format: a} = null !== (t = e.params) && void 0 !== t ? t : {};
                r = void 0 === s ? `value at "/${n}" is required` : `value "${// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                "object" == typeof s ? JSON.stringify(s) : s}" at "/${n}" must pass "${a}" validation`, 
                i = {
                    value: s
                };
            }
            return {
                keyword: null != s ? s : a,
                instancePath: o ? `/${o}` : "",
                schemaPath: n ? `#${n}` : "#",
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params: null != i ? i : {
                    value: e.message
                },
                message: null != r ? r : e.message
            };
        }));
    }
}

const ce = new class {
    constructor() {
        this._validator = fe.factory();
    }
    validateJSONSchema(e, t, r) {
        return this._validator.validate(e, t, r);
    }
    validate(e, t, r = {
        silent: !1
    }) {
        var s, i;
        const n = T(e);
        if (!Array.isArray(n.items) || 0 !== (null === (s = n.items) || void 0 === s ? void 0 : s.length) || 0 !== t.length) {
            if (Array.isArray(n.items) && 0 === (null === (i = n.items) || void 0 === i ? void 0 : i.length) && 0 !== t.length) throw new y([ {
                instancePath: "/0",
                schemaPath: "/",
                keyword: "required",
                message: "empty schema against data can not be validated",
                params: t
            } ]);
            return this._validator.validate(n, t, r);
        }
    }
};

export { se as A, ae as B, oe as C, E as D, ne as E, T as F, y as W, G as a, h as b, K as c, V as d, M as e, d as f, D as g, C as h, ie as i, g as j, v as k, A as l, B as m, X as n, O as o, b as p, Z as q, R as r, J as s, j as t, N as u, ce as v, H as w, ee as x, te as y, re as z };

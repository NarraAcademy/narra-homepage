function e(e, t) {
    const n = e.exec(t);
    return null == n ? void 0 : n.groups;
}

var t = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, n = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, s = /^\(.+?\).*?$/, a = Object.defineProperty, i = (e, t, n) => (((e, t, n) => {
    t in e ? a(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n;
})(e, "symbol" != typeof t ? t + "" : t, n), n), r = class extends Error {
    constructor(e, t = {}) {
        var n;
        const s = t.cause instanceof r ? t.cause.details : (null == (n = t.cause) ? void 0 : n.message) ? t.cause.message : t.details, a = t.cause instanceof r && t.cause.docsPath || t.docsPath;
        super([ e || "An error occurred.", "", ...t.metaMessages ? [ ...t.metaMessages, "" ] : [], ...a ? [ `Docs: https://abitype.dev${a}` ] : [], ...s ? [ `Details: ${s}` ] : [], "Version: abitype@0.7.1" ].join("\n")), 
        i(this, "details"), i(this, "docsPath"), i(this, "metaMessages"), i(this, "shortMessage"), 
        i(this, "name", "AbiTypeError"), t.cause && (this.cause = t.cause), this.details = s, 
        this.docsPath = a, this.metaMessages = t.metaMessages, this.shortMessage = e;
    }
}, o = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;

function u(e) {
    return o.test(e);
}

function d(t) {
    return e(o, t);
}

var l =  new Set([ "memory", "indexed", "storage", "calldata" ]), p =  new Set([ "calldata", "memory", "storage" ]);

var y =  new Map([ 
// Unnamed
[ "address", {
    type: "address"
} ], [ "bool", {
    type: "bool"
} ], [ "bytes", {
    type: "bytes"
} ], [ "bytes32", {
    type: "bytes32"
} ], [ "int", {
    type: "int256"
} ], [ "int256", {
    type: "int256"
} ], [ "string", {
    type: "string"
} ], [ "uint", {
    type: "uint256"
} ], [ "uint8", {
    type: "uint8"
} ], [ "uint16", {
    type: "uint16"
} ], [ "uint24", {
    type: "uint24"
} ], [ "uint32", {
    type: "uint32"
} ], [ "uint64", {
    type: "uint64"
} ], [ "uint96", {
    type: "uint96"
} ], [ "uint112", {
    type: "uint112"
} ], [ "uint160", {
    type: "uint160"
} ], [ "uint192", {
    type: "uint192"
} ], [ "uint256", {
    type: "uint256"
} ], 
// Named
[ "address owner", {
    type: "address",
    name: "owner"
} ], [ "address to", {
    type: "address",
    name: "to"
} ], [ "bool approved", {
    type: "bool",
    name: "approved"
} ], [ "bytes _data", {
    type: "bytes",
    name: "_data"
} ], [ "bytes data", {
    type: "bytes",
    name: "data"
} ], [ "bytes signature", {
    type: "bytes",
    name: "signature"
} ], [ "bytes32 hash", {
    type: "bytes32",
    name: "hash"
} ], [ "bytes32 r", {
    type: "bytes32",
    name: "r"
} ], [ "bytes32 root", {
    type: "bytes32",
    name: "root"
} ], [ "bytes32 s", {
    type: "bytes32",
    name: "s"
} ], [ "string name", {
    type: "string",
    name: "name"
} ], [ "string symbol", {
    type: "string",
    name: "symbol"
} ], [ "string tokenURI", {
    type: "string",
    name: "tokenURI"
} ], [ "uint tokenId", {
    type: "uint256",
    name: "tokenId"
} ], [ "uint8 v", {
    type: "uint8",
    name: "v"
} ], [ "uint256 balance", {
    type: "uint256",
    name: "balance"
} ], [ "uint256 tokenId", {
    type: "uint256",
    name: "tokenId"
} ], [ "uint256 value", {
    type: "uint256",
    name: "value"
} ], 
// Indexed
[ "event:address indexed from", {
    type: "address",
    name: "from",
    indexed: !0
} ], [ "event:address indexed to", {
    type: "address",
    name: "to",
    indexed: !0
} ], [ "event:uint indexed tokenId", {
    type: "uint256",
    name: "tokenId",
    indexed: !0
} ], [ "event:uint256 indexed tokenId", {
    type: "uint256",
    name: "tokenId",
    indexed: !0
} ] ]), c = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/, m = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/, f = /^u?int$/;

function h(a, i) {
    var o, u;
    const d = function(e, t) {
        return t ? `${t}:${e}` : e;
    }(a, null == i ? void 0 : i.type);
    if (y.has(d)) return y.get(d);
    const l = s.test(a), w = e(l ? m : c, a);
    if (!w) throw new r("Invalid ABI parameter.", {
        details: a
    });
    if (w.name && function(e) {
        return "address" === e || "bool" === e || "function" === e || "string" === e || "tuple" === e || t.test(e) || n.test(e) || v.test(e);
    }(w.name)) throw new r("Invalid ABI parameter.", {
        details: a,
        metaMessages: [ `"${w.name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html` ]
    });
    const $ = w.name ? {
        name: w.name
    } : {}, I = "indexed" === w.modifier ? {
        indexed: !0
    } : {}, M = (null == i ? void 0 : i.structs) ?? {};
    let x, A = {};
    if (l) {
        x = "tuple";
        const e = g(w.type), t = [], n = e.length;
        for (let s = 0; s < n; s++) t.push(h(e[s], {
            structs: M
        }));
        A = {
            components: t
        };
    } else if (w.type in M) x = "tuple", A = {
        components: M[w.type]
    }; else if (f.test(w.type)) x = `${w.type}256`; else if (x = w.type, "struct" !== (null == i ? void 0 : i.type) && !b(x)) throw new r("Unknown type.", {
        metaMessages: [ `Type "${x}" is not a valid ABI type.` ]
    });
    if (w.modifier) {
        if (!(null == (u = null == (o = null == i ? void 0 : i.modifiers) ? void 0 : o.has) ? void 0 : u.call(o, w.modifier))) throw new r("Invalid ABI parameter.", {
            details: a,
            metaMessages: [ `Modifier "${w.modifier}" not allowed${(null == i ? void 0 : i.type) ? ` in "${i.type}" type` : ""}.` ]
        });
        if (p.has(w.modifier) && !function(e, t) {
            return t || "bytes" === e || "string" === e || "tuple" === e;
        }(x, !!w.array)) throw new r("Invalid ABI parameter.", {
            details: a,
            metaMessages: [ `Modifier "${w.modifier}" not allowed${(null == i ? void 0 : i.type) ? ` in "${i.type}" type` : ""}.`, `Data location can only be specified for array, struct, or mapping types, but "${w.modifier}" was given.` ]
        });
    }
    const k = {
        type: `${x}${w.array ?? ""}`,
        ...$,
        ...I,
        ...A
    };
    return y.set(d, k), k;
}

function g(e, t = [], n = "", s = 0) {
    if ("" === e) {
        if ("" === n) return t;
        if (0 !== s) throw new r("Unbalanced parentheses.", {
            metaMessages: [ `"${n.trim()}" has too many ${s > 0 ? "opening" : "closing"} parentheses.` ],
            details: `Depth "${s}"`
        });
        return [ ...t, n.trim() ];
    }
    const a = e.length;
    for (let i = 0; i < a; i++) {
        const a = e[i], r = e.slice(i + 1);
        switch (a) {
          case ",":
            return 0 === s ? g(r, [ ...t, n.trim() ]) : g(r, t, `${n}${a}`, s);

          case "(":
            return g(r, t, `${n}${a}`, s + 1);

          case ")":
            return g(r, t, `${n}${a}`, s - 1);

          default:
            return g(r, t, `${n}${a}`, s);
        }
    }
    return [];
}

function b(e) {
    return "address" === e || "bool" === e || "function" === e || "string" === e || t.test(e) || n.test(e);
}

var v = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;

var w = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?$/;

function $(t, n, a =  new Set) {
    const i = [], o = t.length;
    for (let u = 0; u < o; u++) {
        const o = t[u];
        if (s.test(o.type)) i.push(o); else {
            const t = e(w, o.type);
            if (!(null == t ? void 0 : t.type)) throw new r("Invalid ABI parameter.", {
                details: JSON.stringify(o, null, 2),
                metaMessages: [ "ABI parameter type is invalid." ]
            });
            const {array: s, type: u} = t;
            if (u in n) {
                if (a.has(u)) throw new r("Circular reference detected.", {
                    metaMessages: [ `Struct "${u}" is a circular reference.` ]
                });
                i.push({
                    ...o,
                    type: `tuple${s ?? ""}`,
                    components: $(n[u] ?? [], n, 
                     new Set([ ...a, u ]))
                });
            } else {
                if (!b(u)) throw new r("Unknown type.", {
                    metaMessages: [ `Type "${u}" is not a valid ABI type. Perhaps you forgot to include a struct signature?` ]
                });
                i.push(o);
            }
        }
    }
    return i;
}

function I(e) {
    let t;
    if ("string" == typeof e) t = h(e, {
        modifiers: l
    }); else {
        const n = function(e) {
            const t = {}, n = e.length;
            for (let o = 0; o < n; o++) {
                const n = e[o];
                if (!u(n)) continue;
                const s = d(n);
                if (!s) throw new r("Invalid struct signature.", {
                    details: n
                });
                const a = s.properties.split(";"), i = [], l = a.length;
                for (let e = 0; e < l; e++) {
                    const t = a[e].trim();
                    if (!t) continue;
                    const n = h(t, {
                        type: "struct"
                    });
                    i.push(n);
                }
                if (!i.length) throw new r("Invalid struct signature.", {
                    details: n,
                    metaMessages: [ "No properties exist." ]
                });
                t[s.name] = i;
            }
            const s = {}, a = Object.entries(t), i = a.length;
            for (let r = 0; r < i; r++) {
                const [e, n] = a[r];
                s[e] = $(n, t);
            }
            return s;
        }(e), s = e.length;
        for (let a = 0; a < s; a++) {
            const s = e[a];
            if (!u(s)) {
                t = h(s, {
                    modifiers: l,
                    structs: n
                });
                break;
            }
        }
    }
    if (!t) throw new r("Failed to parse ABI parameter.", {
        details: `parseAbiParameter(${JSON.stringify(e, null, 2)})`,
        docsPath: "/api/human.html#parseabiparameter-1"
    });
    return t;
}

export { I as p };

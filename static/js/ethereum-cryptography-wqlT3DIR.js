import { a as e, k as t, r, c as n, b as o, p as a, s, d as c, e as i } from "./@noble-Cuw1cgUn.js";

const u = e.bytes;

function l(e) {
    if (!(e instanceof Uint8Array)) throw new TypeError("bytesToUtf8 expected Uint8Array, got " + typeof e);
    return (new TextDecoder).decode(e);
}

(() => {
    const e = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, t = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
    t && !e && t("crypto");
})();

const d = (() => {
    const r = (n = t, t => (e.bytes(t), n(t)));
    var n;
    return r.create = t.create, r;
})();

function w(e) {
    return r(e);
}

const f = {
    web: o
};

function h(e, t, r) {
    if (!r.startsWith("aes-")) throw new Error(`AES submodule doesn't support mode ${r}`);
    if (16 !== t.length) throw new Error("AES: wrong IV length");
    if (r.startsWith("aes-128") && 16 !== e.length || r.startsWith("aes-256") && 32 !== e.length) throw new Error("AES: wrong key length");
}

async function p(e, t, r) {
    if (!f.web) throw new Error("Browser crypto not available.");
    let n;
    if ([ "aes-128-cbc", "aes-256-cbc" ].includes(e) && (n = "cbc"), [ "aes-128-ctr", "aes-256-ctr" ].includes(e) && (n = "ctr"), 
    !n) throw new Error("AES: unsupported mode");
    return [ await f.web.subtle.importKey("raw", t, {
        name: `AES-${n.toUpperCase()}`,
        length: 8 * t.length
    }, !0, [ "encrypt", "decrypt" ]), {
        name: `aes-${n}`,
        iv: r,
        counter: r,
        length: 128
    } ];
}

async function b(e, t, r, o = "aes-128-ctr", a = !0) {
    if (h(t, r, o), f.web) {
        const [n, s] = await p(o, t, r), c = await f.web.subtle.encrypt(s, n, e);
        let i = new Uint8Array(c);
        return a || "aes-cbc" !== s.name || e.length % 16 || (i = i.slice(0, -16)), i;
    }
    if (f.node) {
        const s = f.node.createCipheriv(o, t, r);
        return s.setAutoPadding(a), n(s.update(e), s.final());
    }
    throw new Error("The environment doesn't have AES module");
}

async function y(e, t, r, o = "aes-128-ctr", a = !0) {
    if (h(t, r, o), f.web) {
        const [s, c] = await p(o, t, r);
        if (!a && "aes-cbc" === c.name) {
            const a = await async function(e, t, r, n) {
                const o = e.slice(-16);
                for (let a = 0; a < 16; a++) o[a] ^= 16 ^ r[a];
                return (await b(o, t, r, n)).slice(0, 16);
            }(e, t, r, o);
            e = n(e, a);
        }
        const i = await f.web.subtle.decrypt(c, s, e), u = new Uint8Array(i);
        if ("aes-cbc" === c.name) {
            if (!function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                return !0;
            }(await b(u, t, r, o), e)) throw new Error("AES: wrong padding");
        }
        return u;
    }
    if (f.node) {
        const s = f.node.createDecipheriv(o, t, r);
        return s.setAutoPadding(a), n(s.update(e), s.final());
    }
    throw new Error("The environment doesn't have AES module");
}

function g(e, t, r, n, o) {
    if (![ "sha256", "sha512" ].includes(o)) throw new Error("Only sha256 and sha512 are supported");
    return u(e), u(t), a(s, e, t, {
        c: r,
        dkLen: n
    });
}

function m(e, t, r, n, o, a, s) {
    return u(e), u(t), c(e, t, {
        N: r,
        r: o,
        p: n,
        dkLen: a,
        onProgress: s
    });
}

const E =  Object.freeze( Object.defineProperty({
    __proto__: null,
    secp256k1: i
}, Symbol.toStringTag, {
    value: "Module"
}));

export { b as a, l as b, y as d, E as e, w as g, d as k, g as p, m as s };

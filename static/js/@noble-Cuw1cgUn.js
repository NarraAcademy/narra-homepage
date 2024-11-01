function t(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`positive integer expected, not ${t}`);
}

function e(t, ...e) {
    if (!((n = t) instanceof Uint8Array || null != n && "object" == typeof n && "Uint8Array" === n.constructor.name)) throw new Error("Uint8Array expected");
    var n;
    if (e.length > 0 && !e.includes(t.length)) throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}

function n(e) {
    if ("function" != typeof e || "function" != typeof e.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
    t(e.outputLen), t(e.blockLen);
}

function r(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
}

function o(t, n) {
    e(t);
    const r = n.outputLen;
    if (t.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}

const i = {
    number: t,
    bool: function(t) {
        if ("boolean" != typeof t) throw new Error(`boolean expected, not ${t}`);
    },
    bytes: e,
    hash: n,
    exists: r,
    output: o
}, s =  BigInt(2 ** 32 - 1), f =  BigInt(32);

function u(t, e = !1) {
    return e ? {
        h: Number(t & s),
        l: Number(t >> f & s)
    } : {
        h: 0 | Number(t >> f & s),
        l: 0 | Number(t & s)
    };
}

function a(t, e = !1) {
    let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
    for (let o = 0; o < t.length; o++) {
        const {h: i, l: s} = u(t[o], e);
        [n[o], r[o]] = [ i, s ];
    }
    return [ n, r ];
}

const c = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, h = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), l = t => new DataView(t.buffer, t.byteOffset, t.byteLength), d = (t, e) => t << 32 - e | t >>> e, p = (t, e) => t << e | t >>> 32 - e >>> 0, g = 68 === new Uint8Array(new Uint32Array([ 287454020 ]).buffer)[0];

function w(t) {
    for (let n = 0; n < t.length; n++) t[n] = (e = t[n]) << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
    var e;
}

function y(t) {
    if ("string" != typeof t) throw new Error("utf8ToBytes expected string, got " + typeof t);
    return new Uint8Array((new TextEncoder).encode(t));
}

function b(t) {
    return "string" == typeof t && (t = y(t)), e(t), t;
}

function m(...t) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
        const r = t[o];
        e(r), n += r.length;
    }
    const r = new Uint8Array(n);
    for (let e = 0, o = 0; e < t.length; e++) {
        const n = t[e];
        r.set(n, o), o += n.length;
    }
    return r;
}

class E {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}

const B = {}.toString;

function x(t, e) {
    if (void 0 !== e && "[object Object]" !== B.call(e)) throw new Error("Options should be object or undefined");
    return Object.assign(t, e);
}

function I(t) {
    const e = e => t().update(b(e)).digest(), n = t();
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), 
    e;
}

function v(t = 32) {
    if (c && "function" == typeof c.getRandomValues) return c.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined");
}

const S = [], A = [], O = [], L =  BigInt(0), k =  BigInt(1), R =  BigInt(2), U =  BigInt(7), N =  BigInt(256), q =  BigInt(113);

for (let ce = 0, he = k, le = 1, de = 0; ce < 24; ce++) {
    [le, de] = [ de, (2 * le + 3 * de) % 5 ], S.push(2 * (5 * de + le)), A.push((ce + 1) * (ce + 2) / 2 % 64);
    let t = L;
    for (let e = 0; e < 7; e++) he = (he << k ^ (he >> U) * q) % N, he & R && (t ^= k << (k <<  BigInt(e)) - k);
    O.push(t);
}

const [T, H] =  a(O, !0), F = (t, e, n) => n > 32 ? ((t, e, n) => e << n - 32 | t >>> 64 - n)(t, e, n) : ((t, e, n) => t << n | e >>> 32 - n)(t, e, n), $ = (t, e, n) => n > 32 ? ((t, e, n) => t << n - 32 | e >>> 64 - n)(t, e, n) : ((t, e, n) => e << n | t >>> 32 - n)(t, e, n);

class P extends E {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(e, n, r, o = !1, i = 24) {
        if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = o, 
        this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, 
        t(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200), this.state32 = h(this.state);
    }
    keccak() {
        g || w(this.state32), function(t, e = 24) {
            const n = new Uint32Array(10);
            for (let r = 24 - e; r < 24; r++) {
                for (let r = 0; r < 10; r++) n[r] = t[r] ^ t[r + 10] ^ t[r + 20] ^ t[r + 30] ^ t[r + 40];
                for (let r = 0; r < 10; r += 2) {
                    const e = (r + 8) % 10, o = (r + 2) % 10, i = n[o], s = n[o + 1], f = F(i, s, 1) ^ n[e], u = $(i, s, 1) ^ n[e + 1];
                    for (let n = 0; n < 50; n += 10) t[r + n] ^= f, t[r + n + 1] ^= u;
                }
                let e = t[2], o = t[3];
                for (let n = 0; n < 24; n++) {
                    const r = A[n], i = F(e, o, r), s = $(e, o, r), f = S[n];
                    e = t[f], o = t[f + 1], t[f] = i, t[f + 1] = s;
                }
                for (let r = 0; r < 50; r += 10) {
                    for (let e = 0; e < 10; e++) n[e] = t[r + e];
                    for (let e = 0; e < 10; e++) t[r + e] ^= ~n[(e + 2) % 10] & n[(e + 4) % 10];
                }
                t[0] ^= T[r], t[1] ^= H[r];
            }
            n.fill(0);
        }(this.state32, this.rounds), g || w(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(t) {
        r(this);
        const {blockLen: e, state: n} = this, o = (t = b(t)).length;
        for (let r = 0; r < o; ) {
            const i = Math.min(e - this.pos, o - r);
            for (let e = 0; e < i; e++) n[this.pos++] ^= t[r++];
            this.pos === e && this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const {state: t, suffix: e, pos: n, blockLen: r} = this;
        t[n] ^= e, 128 & e && n === r - 1 && this.keccak(), t[r - 1] ^= 128, this.keccak();
    }
    writeInto(t) {
        r(this, !1), e(t), this.finish();
        const n = this.state, {blockLen: o} = this;
        for (let e = 0, r = t.length; e < r; ) {
            this.posOut >= o && this.keccak();
            const i = Math.min(o - this.posOut, r - e);
            t.set(n.subarray(this.posOut, this.posOut + i), e), this.posOut += i, e += i;
        }
        return t;
    }
    xofInto(t) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(t);
    }
    xof(e) {
        return t(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(t) {
        if (o(t, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(t), this.destroy(), t;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = !0, this.state.fill(0);
    }
    _cloneInto(t) {
        const {blockLen: e, suffix: n, outputLen: r, rounds: o, enableXOF: i} = this;
        return t || (t = new P(e, n, r, i, o)), t.state32.set(this.state32), t.pos = this.pos, 
        t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, 
        t.outputLen = r, t.enableXOF = i, t.destroyed = this.destroyed, t;
    }
}

const C =  ((t, e, n) => I((() => new P(e, t, n))))(1, 136, 32);

class z extends E {
    constructor(t, e) {
        super(), this.finished = !1, this.destroyed = !1, n(t);
        const r = b(e);
        if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const o = this.blockLen, i = new Uint8Array(o);
        i.set(r.length > o ? t.create().update(r).digest() : r);
        for (let n = 0; n < i.length; n++) i[n] ^= 54;
        this.iHash.update(i), this.oHash = t.create();
        for (let n = 0; n < i.length; n++) i[n] ^= 106;
        this.oHash.update(i), i.fill(0);
    }
    update(t) {
        return r(this), this.iHash.update(t), this;
    }
    digestInto(t) {
        r(this), e(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), 
        this.oHash.digestInto(t), this.destroy();
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t;
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash: e, iHash: n, finished: r, destroyed: o, blockLen: i, outputLen: s} = this;
        return t.finished = r, t.destroyed = o, t.blockLen = i, t.outputLen = s, t.oHash = e._cloneInto(t.oHash), 
        t.iHash = n._cloneInto(t.iHash), t;
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
    }
}

const j = (t, e, n) => new z(t, e).update(n).digest();

function V(e, r, o, i) {
    const {c: s, dkLen: f, DK: u, PRF: a, PRFSalt: c} = function(e, r, o, i) {
        n(e);
        const s = x({
            dkLen: 32,
            asyncTick: 10
        }, i), {c: f, dkLen: u, asyncTick: a} = s;
        if (t(f), t(u), t(a), f < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
        const c = b(r), h = b(o), l = new Uint8Array(u), d = j.create(e, c), p = d._cloneInto().update(h);
        return {
            c: f,
            dkLen: u,
            asyncTick: a,
            DK: l,
            PRF: d,
            PRFSalt: p
        };
    }(e, r, o, i);
    let h;
    const d = new Uint8Array(4), p = l(d), g = new Uint8Array(a.outputLen);
    for (let t = 1, n = 0; n < f; t++, n += a.outputLen) {
        const e = u.subarray(n, n + a.outputLen);
        p.setInt32(0, t, !1), (h = c._cloneInto(h)).update(d).digestInto(g), e.set(g.subarray(0, e.length));
        for (let t = 1; t < s; t++) {
            a._cloneInto(h).update(g).digestInto(g);
            for (let t = 0; t < e.length; t++) e[t] ^= g[t];
        }
    }
    return function(t, e, n, r, o) {
        return t.destroy(), e.destroy(), r && r.destroy(), o.fill(0), n;
    }(a, c, u, h, g);
}

j.create = (t, e) => new z(t, e);

const Z = (t, e, n) => t & e ^ t & n ^ e & n;

class _ extends E {
    constructor(t, e, n, r) {
        super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = r, 
        this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), 
        this.view = l(this.buffer);
    }
    update(t) {
        r(this);
        const {view: e, buffer: n, blockLen: o} = this, i = (t = b(t)).length;
        for (let r = 0; r < i; ) {
            const s = Math.min(o - this.pos, i - r);
            if (s !== o) n.set(t.subarray(r, r + s), this.pos), this.pos += s, r += s, this.pos === o && (this.process(e, 0), 
            this.pos = 0); else {
                const e = l(t);
                for (;o <= i - r; r += o) this.process(e, r);
            }
        }
        return this.length += t.length, this.roundClean(), this;
    }
    digestInto(t) {
        r(this), o(t, this), this.finished = !0;
        const {buffer: e, view: n, blockLen: i, isLE: s} = this;
        let {pos: f} = this;
        e[f++] = 128, this.buffer.subarray(f).fill(0), this.padOffset > i - f && (this.process(n, 0), 
        f = 0);
        for (let r = f; r < i; r++) e[r] = 0;
        !function(t, e, n, r) {
            if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, n, r);
            const o = BigInt(32), i = BigInt(4294967295), s = Number(n >> o & i), f = Number(n & i), u = r ? 4 : 0, a = r ? 0 : 4;
            t.setUint32(e + u, s, r), t.setUint32(e + a, f, r);
        }(n, i - 8, BigInt(8 * this.length), s), this.process(n, 0);
        const u = l(t), a = this.outputLen;
        if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const c = a / 4, h = this.get();
        if (c > h.length) throw new Error("_sha2: outputLen bigger than state");
        for (let r = 0; r < c; r++) u.setUint32(4 * r, h[r], s);
    }
    digest() {
        const {buffer: t, outputLen: e} = this;
        this.digestInto(t);
        const n = t.slice(0, e);
        return this.destroy(), n;
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {blockLen: e, buffer: n, length: r, finished: o, destroyed: i, pos: s} = this;
        return t.length = r, t.pos = s, t.finished = o, t.destroyed = i, r % e && t.buffer.set(n), 
        t;
    }
}

const D =  new Uint32Array([ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ]), K =  new Uint32Array([ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ]), M =  new Uint32Array(64);

class G extends _ {
    constructor() {
        super(64, 32, 8, !1), this.A = 0 | K[0], this.B = 0 | K[1], this.C = 0 | K[2], this.D = 0 | K[3], 
        this.E = 0 | K[4], this.F = 0 | K[5], this.G = 0 | K[6], this.H = 0 | K[7];
    }
    get() {
        const {A: t, B: e, C: n, D: r, E: o, F: i, G: s, H: f} = this;
        return [ t, e, n, r, o, i, s, f ];
    }
    // prettier-ignore
    set(t, e, n, r, o, i, s, f) {
        this.A = 0 | t, this.B = 0 | e, this.C = 0 | n, this.D = 0 | r, this.E = 0 | o, 
        this.F = 0 | i, this.G = 0 | s, this.H = 0 | f;
    }
    process(t, e) {
        for (let h = 0; h < 16; h++, e += 4) M[h] = t.getUint32(e, !1);
        for (let h = 16; h < 64; h++) {
            const t = M[h - 15], e = M[h - 2], n = d(t, 7) ^ d(t, 18) ^ t >>> 3, r = d(e, 17) ^ d(e, 19) ^ e >>> 10;
            M[h] = r + M[h - 7] + n + M[h - 16] | 0;
        }
        let {A: n, B: r, C: o, D: i, E: s, F: f, G: u, H: a} = this;
        for (let h = 0; h < 64; h++) {
            const t = a + (d(s, 6) ^ d(s, 11) ^ d(s, 25)) + ((c = s) & f ^ ~c & u) + D[h] + M[h] | 0, e = (d(n, 2) ^ d(n, 13) ^ d(n, 22)) + Z(n, r, o) | 0;
            a = u, u = f, f = s, s = i + t | 0, i = o, o = r, r = n, n = t + e | 0;
        }
        var c;
        n = n + this.A | 0, r = r + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, 
        s = s + this.E | 0, f = f + this.F | 0, u = u + this.G | 0, a = a + this.H | 0, 
        this.set(n, r, o, i, s, f, u, a);
    }
    roundClean() {
        M.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}

const Y =  I((() => new G));

function W(t, e, n, r, o, i) {
    let s = t[e++] ^ n[r++], f = t[e++] ^ n[r++], u = t[e++] ^ n[r++], a = t[e++] ^ n[r++], c = t[e++] ^ n[r++], h = t[e++] ^ n[r++], l = t[e++] ^ n[r++], d = t[e++] ^ n[r++], g = t[e++] ^ n[r++], w = t[e++] ^ n[r++], y = t[e++] ^ n[r++], b = t[e++] ^ n[r++], m = t[e++] ^ n[r++], E = t[e++] ^ n[r++], B = t[e++] ^ n[r++], x = t[e++] ^ n[r++], I = s, v = f, S = u, A = a, O = c, L = h, k = l, R = d, U = g, N = w, q = y, T = b, H = m, F = E, $ = B, P = x;
    for (let C = 0; C < 8; C += 2) O ^= p(I + H | 0, 7), U ^= p(O + I | 0, 9), H ^= p(U + O | 0, 13), 
    I ^= p(H + U | 0, 18), N ^= p(L + v | 0, 7), F ^= p(N + L | 0, 9), v ^= p(F + N | 0, 13), 
    L ^= p(v + F | 0, 18), $ ^= p(q + k | 0, 7), S ^= p($ + q | 0, 9), k ^= p(S + $ | 0, 13), 
    q ^= p(k + S | 0, 18), A ^= p(P + T | 0, 7), R ^= p(A + P | 0, 9), T ^= p(R + A | 0, 13), 
    P ^= p(T + R | 0, 18), v ^= p(I + A | 0, 7), S ^= p(v + I | 0, 9), A ^= p(S + v | 0, 13), 
    I ^= p(A + S | 0, 18), k ^= p(L + O | 0, 7), R ^= p(k + L | 0, 9), O ^= p(R + k | 0, 13), 
    L ^= p(O + R | 0, 18), T ^= p(q + N | 0, 7), U ^= p(T + q | 0, 9), N ^= p(U + T | 0, 13), 
    q ^= p(N + U | 0, 18), H ^= p(P + $ | 0, 7), F ^= p(H + P | 0, 9), $ ^= p(F + H | 0, 13), 
    P ^= p($ + F | 0, 18);
    o[i++] = s + I | 0, o[i++] = f + v | 0, o[i++] = u + S | 0, o[i++] = a + A | 0, 
    o[i++] = c + O | 0, o[i++] = h + L | 0, o[i++] = l + k | 0, o[i++] = d + R | 0, 
    o[i++] = g + U | 0, o[i++] = w + N | 0, o[i++] = y + q | 0, o[i++] = b + T | 0, 
    o[i++] = m + H | 0, o[i++] = E + F | 0, o[i++] = B + $ | 0, o[i++] = x + P | 0;
}

function X(t, e, n, r, o) {
    let i = r + 0, s = r + 16 * o;
    for (let f = 0; f < 16; f++) n[s + f] = t[e + 16 * (2 * o - 1) + f];
    for (let f = 0; f < o; f++, i += 16, e += 16) W(n, s, t, e, n, i), f > 0 && (s += 16), 
    W(n, i, t, e += 16, n, s);
}

function J(e, n, r) {
    const {N: o, r: i, p: s, dkLen: f, blockSize32: u, V: a, B32: c, B: l, tmp: d, blockMixCb: p} = function(e, n, r) {
        const o = x({
            dkLen: 32,
            asyncTick: 10,
            maxmem: 1073742848
        }, r), {N: i, r: s, p: f, dkLen: u, asyncTick: a, maxmem: c, onProgress: l} = o;
        if (t(i), t(s), t(f), t(u), t(a), t(c), void 0 !== l && "function" != typeof l) throw new Error("progressCb should be function");
        const d = 128 * s, p = d / 4;
        if (i <= 1 || i & i - 1 || i >= 2 ** (d / 8) || i > 2 ** 32) throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
        if (f < 0 || f > 137438953440 / d) throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
        if (u < 0 || u > 137438953440) throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
        const g = d * (i + f);
        if (g > c) throw new Error(`Scrypt: parameters too large, ${g} (128 * r * (N + p)) > ${c} (maxmem)`);
        const w = V(Y, e, n, {
            c: 1,
            dkLen: d * f
        }), y = h(w), b = h(new Uint8Array(d * i)), m = h(new Uint8Array(d));
        let E = () => {};
        if (l) {
            const t = 2 * i * f, e = Math.max(Math.floor(t / 1e4), 1);
            let n = 0;
            E = () => {
                n++, !l || n % e && n !== t || l(n / t);
            };
        }
        return {
            N: i,
            r: s,
            p: f,
            dkLen: u,
            blockSize32: p,
            V: b,
            B32: y,
            B: w,
            tmp: m,
            blockMixCb: E,
            asyncTick: a
        };
    }(e, n, r);
    g || w(c);
    for (let t = 0; t < s; t++) {
        const e = u * t;
        for (let t = 0; t < u; t++) a[t] = c[e + t];
        for (let t = 0, n = 0; t < o - 1; t++) X(a, n, a, n += u, i), p();
        X(a, (o - 1) * u, c, e, i), p();
        for (let t = 0; t < o; t++) {
            const t = c[e + u - 16] % o;
            for (let n = 0; n < u; n++) d[n] = c[e + n] ^ a[t * u + n];
            X(d, 0, c, e, i), p();
        }
    }
    return g || w(c), function(t, e, n, r, o) {
        const i = V(Y, t, n, {
            c: 1,
            dkLen: e
        });
        return n.fill(0), r.fill(0), o.fill(0), i;
    }(e, f, l, a, d);
}

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Q =  BigInt(0), tt =  BigInt(1), et =  BigInt(2);

function nt(t) {
    return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name;
}

function rt(t) {
    if (!nt(t)) throw new Error("Uint8Array expected");
}

const ot =  Array.from({
    length: 256
}, ((t, e) => e.toString(16).padStart(2, "0")));

function it(t) {
    rt(t);
    let e = "";
    for (let n = 0; n < t.length; n++) e += ot[t[n]];
    return e;
}

function st(t) {
    const e = t.toString(16);
    return 1 & e.length ? `0${e}` : e;
}

function ft(t) {
    if ("string" != typeof t) throw new Error("hex string expected, got " + typeof t);
    return BigInt("" === t ? "0" : `0x${t}`);
}

const ut = 48, at = 57, ct = 65, ht = 70, lt = 97, dt = 102;

function pt(t) {
    return t >= ut && t <= at ? t - ut : t >= ct && t <= ht ? t - (ct - 10) : t >= lt && t <= dt ? t - (lt - 10) : void 0;
}

function gt(t) {
    if ("string" != typeof t) throw new Error("hex string expected, got " + typeof t);
    const e = t.length, n = e / 2;
    if (e % 2) throw new Error("padded hex string expected, got unpadded hex of length " + e);
    const r = new Uint8Array(n);
    for (let o = 0, i = 0; o < n; o++, i += 2) {
        const e = pt(t.charCodeAt(i)), n = pt(t.charCodeAt(i + 1));
        if (void 0 === e || void 0 === n) {
            const e = t[i] + t[i + 1];
            throw new Error('hex string expected, got non-hex character "' + e + '" at index ' + i);
        }
        r[o] = 16 * e + n;
    }
    return r;
}

function wt(t) {
    return ft(it(t));
}

function yt(t) {
    return rt(t), ft(it(Uint8Array.from(t).reverse()));
}

function bt(t, e) {
    return gt(t.toString(16).padStart(2 * e, "0"));
}

function mt(t, e) {
    return bt(t, e).reverse();
}

function Et(t, e, n) {
    let r;
    if ("string" == typeof e) try {
        r = gt(e);
    } catch (i) {
        throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${i}`);
    } else {
        if (!nt(e)) throw new Error(`${t} must be hex string or Uint8Array`);
        r = Uint8Array.from(e);
    }
    const o = r.length;
    if ("number" == typeof n && o !== n) throw new Error(`${t} expected ${n} bytes, got ${o}`);
    return r;
}

function Bt(...t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
        const n = t[r];
        rt(n), e += n.length;
    }
    const n = new Uint8Array(e);
    for (let r = 0, o = 0; r < t.length; r++) {
        const e = t[r];
        n.set(e, o), o += e.length;
    }
    return n;
}

const xt = t => (et << BigInt(t - 1)) - tt, It = t => new Uint8Array(t), vt = t => Uint8Array.from(t);

function St(t, e, n) {
    if ("number" != typeof t || t < 2) throw new Error("hashLen must be a number");
    if ("number" != typeof e || e < 2) throw new Error("qByteLen must be a number");
    if ("function" != typeof n) throw new Error("hmacFn must be a function");
    let r = It(t), o = It(t), i = 0;
    const s = () => {
        r.fill(1), o.fill(0), i = 0;
    }, f = (...t) => n(o, r, ...t), u = (t = It()) => {
        o = f(vt([ 0 ]), t), r = f(), 0 !== t.length && (o = f(vt([ 1 ]), t), r = f());
    }, a = () => {
        if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
        let t = 0;
        const n = [];
        for (;t < e; ) {
            r = f();
            const e = r.slice();
            n.push(e), t += r.length;
        }
        return Bt(...n);
    };
    return (t, e) => {
        let n;
        for (s(), u(t); !(n = e(a())); ) u();
        return s(), n;
    };
}

const At = {
    bigint: t => "bigint" == typeof t,
    function: t => "function" == typeof t,
    boolean: t => "boolean" == typeof t,
    string: t => "string" == typeof t,
    stringOrUint8Array: t => "string" == typeof t || nt(t),
    isSafeInteger: t => Number.isSafeInteger(t),
    array: t => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: t => "function" == typeof t && Number.isSafeInteger(t.outputLen)
};

function Ot(t, e, n = {}) {
    const r = (e, n, r) => {
        const o = At[n];
        if ("function" != typeof o) throw new Error(`Invalid validator "${n}", expected function`);
        const i = t[e];
        if (!(r && void 0 === i || o(i, t))) throw new Error(`Invalid param ${String(e)}=${i} (${typeof i}), expected ${n}`);
    };
    for (const [o, i] of Object.entries(e)) r(o, i, !1);
    for (const [o, i] of Object.entries(n)) r(o, i, !0);
    return t;
}

const Lt =  Object.freeze( Object.defineProperty({
    __proto__: null,
    abytes: rt,
    bitGet: function(t, e) {
        return t >> BigInt(e) & tt;
    },
    bitLen: function(t) {
        let e;
        for (e = 0; t > Q; t >>= tt, e += 1) ;
        return e;
    },
    bitMask: xt,
    bitSet: function(t, e, n) {
        return t | (n ? tt : Q) << BigInt(e);
    },
    bytesToHex: it,
    bytesToNumberBE: wt,
    bytesToNumberLE: yt,
    concatBytes: Bt,
    createHmacDrbg: St,
    ensureBytes: Et,
    equalBytes: function(t, e) {
        if (t.length !== e.length) return !1;
        let n = 0;
        for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
        return 0 === n;
    },
    hexToBytes: gt,
    hexToNumber: ft,
    isBytes: nt,
    numberToBytesBE: bt,
    numberToBytesLE: mt,
    numberToHexUnpadded: st,
    numberToVarBytesBE: function(t) {
        return gt(st(t));
    },
    utf8ToBytes: function(t) {
        if ("string" != typeof t) throw new Error("utf8ToBytes expected string, got " + typeof t);
        return new Uint8Array((new TextEncoder).encode(t));
    },
    validateObject: Ot
}, Symbol.toStringTag, {
    value: "Module"
})), kt = BigInt(0), Rt = BigInt(1), Ut = BigInt(2), Nt = BigInt(3), qt = BigInt(4), Tt = BigInt(5), Ht = BigInt(8);

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Ft(t, e) {
    const n = t % e;
    return n >= kt ? n : e + n;
}

function $t(t, e, n) {
    if (n <= kt || e < kt) throw new Error("Expected power/modulo > 0");
    if (n === Rt) return kt;
    let r = Rt;
    for (;e > kt; ) e & Rt && (r = r * t % n), t = t * t % n, e >>= Rt;
    return r;
}

function Pt(t, e, n) {
    let r = t;
    for (;e-- > kt; ) r *= r, r %= n;
    return r;
}

function Ct(t, e) {
    if (t === kt || e <= kt) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let n = Ft(t, e), r = e, o = kt, i = Rt;
    for (;n !== kt; ) {
        const t = r % n, e = o - i * (r / n);
        r = n, n = t, o = i, i = e;
    }
    if (r !== Rt) throw new Error("invert: does not exist");
    return Ft(o, e);
}

function zt(t) {
    if (t % qt === Nt) {
        const e = (t + Rt) / qt;
        return function(t, n) {
            const r = t.pow(n, e);
            if (!t.eql(t.sqr(r), n)) throw new Error("Cannot find square root");
            return r;
        };
    }
    if (t % Ht === Tt) {
        const e = (t - Tt) / Ht;
        return function(t, n) {
            const r = t.mul(n, Ut), o = t.pow(r, e), i = t.mul(n, o), s = t.mul(t.mul(i, Ut), o), f = t.mul(i, t.sub(s, t.ONE));
            if (!t.eql(t.sqr(f), n)) throw new Error("Cannot find square root");
            return f;
        };
    }
    return function(t) {
        const e = (t - Rt) / Ut;
        let n, r, o;
        for (n = t - Rt, r = 0; n % Ut === kt; n /= Ut, r++) ;
        for (o = Ut; o < t && $t(o, e, t) !== t - Rt; o++) ;
        if (1 === r) {
            const e = (t + Rt) / qt;
            return function(t, n) {
                const r = t.pow(n, e);
                if (!t.eql(t.sqr(r), n)) throw new Error("Cannot find square root");
                return r;
            };
        }
        const i = (n + Rt) / Ut;
        return function(t, s) {
            if (t.pow(s, e) === t.neg(t.ONE)) throw new Error("Cannot find square root");
            let f = r, u = t.pow(t.mul(t.ONE, o), n), a = t.pow(s, i), c = t.pow(s, n);
            for (;!t.eql(c, t.ONE); ) {
                if (t.eql(c, t.ZERO)) return t.ZERO;
                let e = 1;
                for (let r = t.sqr(c); e < f && !t.eql(r, t.ONE); e++) r = t.sqr(r);
                const n = t.pow(u, Rt << BigInt(f - e - 1));
                u = t.sqr(n), a = t.mul(a, n), c = t.mul(c, u), f = e;
            }
            return a;
        };
    }(t);
}

BigInt(9), BigInt(16);

const jt = [ "create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN" ];

function Vt(t, e) {
    const n = void 0 !== e ? e : t.toString(2).length;
    return {
        nBitLength: n,
        nByteLength: Math.ceil(n / 8)
    };
}

function Zt(t) {
    if ("bigint" != typeof t) throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
}

function _t(t) {
    const e = Zt(t);
    return e + Math.ceil(e / 2);
}

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Dt = BigInt(0), Kt = BigInt(1);

function Mt(t) {
    return Ot(t.Fp, jt.reduce(((t, e) => (t[e] = "function", t)), {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    })), Ot(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...Vt(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    });
}

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const {bytesToNumberBE: Gt, hexToBytes: Yt} = Lt, Wt = {
    // asn.1 DER encoding utils
    Err: class extends Error {
        constructor(t = "") {
            super(t);
        }
    },
    _parseInt(t) {
        const {Err: e} = Wt;
        if (t.length < 2 || 2 !== t[0]) throw new e("Invalid signature integer tag");
        const n = t[1], r = t.subarray(2, n + 2);
        if (!n || r.length !== n) throw new e("Invalid signature integer: wrong length");
        if (128 & r[0]) throw new e("Invalid signature integer: negative");
        if (0 === r[0] && !(128 & r[1])) throw new e("Invalid signature integer: unnecessary leading zero");
        return {
            d: Gt(r),
            l: t.subarray(n + 2)
        };
    },
    toSig(t) {
        const {Err: e} = Wt, n = "string" == typeof t ? Yt(t) : t;
        rt(n);
        let r = n.length;
        if (r < 2 || 48 != n[0]) throw new e("Invalid signature tag");
        if (n[1] !== r - 2) throw new e("Invalid signature: incorrect length");
        const {d: o, l: i} = Wt._parseInt(n.subarray(2)), {d: s, l: f} = Wt._parseInt(i);
        if (f.length) throw new e("Invalid signature: left bytes after parsing");
        return {
            r: o,
            s: s
        };
    },
    hexFromSig(t) {
        const e = t => 8 & Number.parseInt(t[0], 16) ? "00" + t : t, n = t => {
            const e = t.toString(16);
            return 1 & e.length ? `0${e}` : e;
        }, r = e(n(t.s)), o = e(n(t.r)), i = r.length / 2, s = o.length / 2, f = n(i), u = n(s);
        return `30${n(s + i + 4)}02${u}${o}02${f}${r}`;
    }
}, Xt = BigInt(0), Jt = BigInt(1);

BigInt(2);

const Qt = BigInt(3);

function te(t) {
    const e = function(t) {
        const e = Mt(t);
        Ot(e, {
            a: "field",
            b: "field"
        }, {
            allowedPrivateKeyLengths: "array",
            wrapPrivateKey: "boolean",
            isTorsionFree: "function",
            clearCofactor: "function",
            allowInfinityPoint: "boolean",
            fromBytes: "function",
            toBytes: "function"
        });
        const {endo: n, Fp: r, a: o} = e;
        if (n) {
            if (!r.eql(o, r.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
            if ("object" != typeof n || "bigint" != typeof n.beta || "function" != typeof n.splitScalar) throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
        }
        return Object.freeze({
            ...e
        });
    }(t), {Fp: n} = e, r = e.toBytes || ((t, e, r) => {
        const o = e.toAffine();
        return Bt(Uint8Array.from([ 4 ]), n.toBytes(o.x), n.toBytes(o.y));
    }), o = e.fromBytes || (t => {
        const e = t.subarray(1);
        return {
            x: n.fromBytes(e.subarray(0, n.BYTES)),
            y: n.fromBytes(e.subarray(n.BYTES, 2 * n.BYTES))
        };
    });
    function i(t) {
        const {a: r, b: o} = e, i = n.sqr(t), s = n.mul(i, t);
        return n.add(n.add(s, n.mul(t, r)), o);
    }
    if (!n.eql(n.sqr(e.Gy), i(e.Gx))) throw new Error("bad generator point: equation left != right");
    function s(t) {
        return "bigint" == typeof t && Xt < t && t < e.n;
    }
    function f(t) {
        if (!s(t)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function u(t) {
        const {allowedPrivateKeyLengths: n, nByteLength: r, wrapPrivateKey: o, n: i} = e;
        if (n && "bigint" != typeof t) {
            if (nt(t) && (t = it(t)), "string" != typeof t || !n.includes(t.length)) throw new Error("Invalid key");
            t = t.padStart(2 * r, "0");
        }
        let s;
        try {
            s = "bigint" == typeof t ? t : wt(Et("private key", t, r));
        } catch (u) {
            throw new Error(`private key must be ${r} bytes, hex or bigint, not ${typeof t}`);
        }
        return o && (s = Ft(s, i)), f(s), s;
    }
    const a =  new Map;
    function c(t) {
        if (!(t instanceof h)) throw new Error("ProjectivePoint expected");
    }
    class h {
        constructor(t, e, r) {
            if (this.px = t, this.py = e, this.pz = r, null == t || !n.isValid(t)) throw new Error("x required");
            if (null == e || !n.isValid(e)) throw new Error("y required");
            if (null == r || !n.isValid(r)) throw new Error("z required");
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(t) {
            const {x: e, y: r} = t || {};
            if (!t || !n.isValid(e) || !n.isValid(r)) throw new Error("invalid affine point");
            if (t instanceof h) throw new Error("projective point not allowed");
            const o = t => n.eql(t, n.ZERO);
            return o(e) && o(r) ? h.ZERO : new h(e, r, n.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */        static normalizeZ(t) {
            const e = n.invertBatch(t.map((t => t.pz)));
            return t.map(((t, n) => t.toAffine(e[n]))).map(h.fromAffine);
        }
        /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */        static fromHex(t) {
            const e = h.fromAffine(o(Et("pointHex", t)));
            return e.assertValidity(), e;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(t) {
            return h.BASE.multiply(u(t));
        }
        // "Private method", don't use it directly
        _setWindowSize(t) {
            this._WINDOW_SIZE = t, a.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            if (this.is0()) {
                if (e.allowInfinityPoint && !n.is0(this.py)) return;
                throw new Error("bad point: ZERO");
            }
            const {x: t, y: r} = this.toAffine();
            if (!n.isValid(t) || !n.isValid(r)) throw new Error("bad point: x or y not FE");
            const o = n.sqr(r), s = i(t);
            if (!n.eql(o, s)) throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
        }
        hasEvenY() {
            const {y: t} = this.toAffine();
            if (n.isOdd) return !n.isOdd(t);
            throw new Error("Field doesn't support isOdd");
        }
        /**
     * Compare one point to another.
     */        equals(t) {
            c(t);
            const {px: e, py: r, pz: o} = this, {px: i, py: s, pz: f} = t, u = n.eql(n.mul(e, f), n.mul(i, o)), a = n.eql(n.mul(r, f), n.mul(s, o));
            return u && a;
        }
        /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */        negate() {
            return new h(this.px, n.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const {a: t, b: r} = e, o = n.mul(r, Qt), {px: i, py: s, pz: f} = this;
            let u = n.ZERO, a = n.ZERO, c = n.ZERO, l = n.mul(i, i), d = n.mul(s, s), p = n.mul(f, f), g = n.mul(i, s);
            return g = n.add(g, g), c = n.mul(i, f), c = n.add(c, c), u = n.mul(t, c), a = n.mul(o, p), 
            a = n.add(u, a), u = n.sub(d, a), a = n.add(d, a), a = n.mul(u, a), u = n.mul(g, u), 
            c = n.mul(o, c), p = n.mul(t, p), g = n.sub(l, p), g = n.mul(t, g), g = n.add(g, c), 
            c = n.add(l, l), l = n.add(c, l), l = n.add(l, p), l = n.mul(l, g), a = n.add(a, l), 
            p = n.mul(s, f), p = n.add(p, p), l = n.mul(p, g), u = n.sub(u, l), c = n.mul(p, d), 
            c = n.add(c, c), c = n.add(c, c), new h(u, a, c);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(t) {
            c(t);
            const {px: r, py: o, pz: i} = this, {px: s, py: f, pz: u} = t;
            let a = n.ZERO, l = n.ZERO, d = n.ZERO;
            const p = e.a, g = n.mul(e.b, Qt);
            let w = n.mul(r, s), y = n.mul(o, f), b = n.mul(i, u), m = n.add(r, o), E = n.add(s, f);
            m = n.mul(m, E), E = n.add(w, y), m = n.sub(m, E), E = n.add(r, i);
            let B = n.add(s, u);
            return E = n.mul(E, B), B = n.add(w, b), E = n.sub(E, B), B = n.add(o, i), a = n.add(f, u), 
            B = n.mul(B, a), a = n.add(y, b), B = n.sub(B, a), d = n.mul(p, E), a = n.mul(g, b), 
            d = n.add(a, d), a = n.sub(y, d), d = n.add(y, d), l = n.mul(a, d), y = n.add(w, w), 
            y = n.add(y, w), b = n.mul(p, b), E = n.mul(g, E), y = n.add(y, b), b = n.sub(w, b), 
            b = n.mul(p, b), E = n.add(E, b), w = n.mul(y, E), l = n.add(l, w), w = n.mul(B, E), 
            a = n.mul(m, a), a = n.sub(a, w), w = n.mul(m, y), d = n.mul(B, d), d = n.add(d, w), 
            new h(a, l, d);
        }
        subtract(t) {
            return this.add(t.negate());
        }
        is0() {
            return this.equals(h.ZERO);
        }
        wNAF(t) {
            return d.wNAFCached(this, a, t, (t => {
                const e = n.invertBatch(t.map((t => t.pz)));
                return t.map(((t, n) => t.toAffine(e[n]))).map(h.fromAffine);
            }));
        }
        /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */        multiplyUnsafe(t) {
            const r = h.ZERO;
            if (t === Xt) return r;
            if (f(t), t === Jt) return this;
            const {endo: o} = e;
            if (!o) return d.unsafeLadder(this, t);
            let {k1neg: i, k1: s, k2neg: u, k2: a} = o.splitScalar(t), c = r, l = r, p = this;
            for (;s > Xt || a > Xt; ) s & Jt && (c = c.add(p)), a & Jt && (l = l.add(p)), p = p.double(), 
            s >>= Jt, a >>= Jt;
            return i && (c = c.negate()), u && (l = l.negate()), l = new h(n.mul(l.px, o.beta), l.py, l.pz), 
            c.add(l);
        }
        /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */        multiply(t) {
            f(t);
            let r, o, i = t;
            const {endo: s} = e;
            if (s) {
                const {k1neg: t, k1: e, k2neg: f, k2: u} = s.splitScalar(i);
                let {p: a, f: c} = this.wNAF(e), {p: l, f: p} = this.wNAF(u);
                a = d.constTimeNegate(t, a), l = d.constTimeNegate(f, l), l = new h(n.mul(l.px, s.beta), l.py, l.pz), 
                r = a.add(l), o = c.add(p);
            } else {
                const {p: t, f: e} = this.wNAF(i);
                r = t, o = e;
            }
            return h.normalizeZ([ r, o ])[0];
        }
        /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */        multiplyAndAddUnsafe(t, e, n) {
            const r = h.BASE, o = (t, e) => e !== Xt && e !== Jt && t.equals(r) ? t.multiply(e) : t.multiplyUnsafe(e), i = o(this, e).add(o(t, n));
            return i.is0() ? void 0 : i;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(t) {
            const {px: e, py: r, pz: o} = this, i = this.is0();
            null == t && (t = i ? n.ONE : n.inv(o));
            const s = n.mul(e, t), f = n.mul(r, t), u = n.mul(o, t);
            if (i) return {
                x: n.ZERO,
                y: n.ZERO
            };
            if (!n.eql(u, n.ONE)) throw new Error("invZ was invalid");
            return {
                x: s,
                y: f
            };
        }
        isTorsionFree() {
            const {h: t, isTorsionFree: n} = e;
            if (t === Jt) return !0;
            if (n) return n(h, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve");
        }
        clearCofactor() {
            const {h: t, clearCofactor: n} = e;
            return t === Jt ? this : n ? n(h, this) : this.multiplyUnsafe(e.h);
        }
        toRawBytes(t = !0) {
            return this.assertValidity(), r(h, this, t);
        }
        toHex(t = !0) {
            return it(this.toRawBytes(t));
        }
    }
    h.BASE = new h(e.Gx, e.Gy, n.ONE), h.ZERO = new h(n.ZERO, n.ONE, n.ZERO);
    const l = e.nBitLength, d = function(t, e) {
        const n = (t, e) => {
            const n = e.negate();
            return t ? n : e;
        }, r = t => ({
            windows: Math.ceil(e / t) + 1,
            windowSize: 2 ** (t - 1)
        });
        return {
            constTimeNegate: n,
            // non-const time multiplication ladder
            unsafeLadder(e, n) {
                let r = t.ZERO, o = e;
                for (;n > Dt; ) n & Kt && (r = r.add(o)), o = o.double(), n >>= Kt;
                return r;
            },
            /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
            precomputeWindow(t, e) {
                const {windows: n, windowSize: o} = r(e), i = [];
                let s = t, f = s;
                for (let r = 0; r < n; r++) {
                    f = s, i.push(f);
                    for (let t = 1; t < o; t++) f = f.add(s), i.push(f);
                    s = f.double();
                }
                return i;
            },
            /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
            wNAF(e, o, i) {
                const {windows: s, windowSize: f} = r(e);
                let u = t.ZERO, a = t.BASE;
                const c = BigInt(2 ** e - 1), h = 2 ** e, l = BigInt(e);
                for (let t = 0; t < s; t++) {
                    const e = t * f;
                    let r = Number(i & c);
                    i >>= l, r > f && (r -= h, i += Kt);
                    const s = e, d = e + Math.abs(r) - 1, p = t % 2 != 0, g = r < 0;
                    0 === r ? a = a.add(n(p, o[s])) : u = u.add(n(g, o[d]));
                }
                return {
                    p: u,
                    f: a
                };
            },
            wNAFCached(t, e, n, r) {
                const o = t._WINDOW_SIZE || 1;
                let i = e.get(t);
                return i || (i = this.precomputeWindow(t, o), 1 !== o && e.set(t, r(i))), this.wNAF(o, i, n);
            }
        };
    }(h, e.endo ? Math.ceil(l / 2) : l);
    return {
        CURVE: e,
        ProjectivePoint: h,
        normPrivateKeyToScalar: u,
        weierstrassEquation: i,
        isWithinCurveOrder: s
    };
}

function ee(t) {
    const e = function(t) {
        const e = Mt(t);
        return Ot(e, {
            hash: "hash",
            hmac: "function",
            randomBytes: "function"
        }, {
            bits2int: "function",
            bits2int_modN: "function",
            lowS: "boolean"
        }), Object.freeze({
            lowS: !0,
            ...e
        });
    }(t), {Fp: n, n: r} = e, o = n.BYTES + 1, i = 2 * n.BYTES + 1;
    function s(t) {
        return Ft(t, r);
    }
    function f(t) {
        return Ct(t, r);
    }
    const {ProjectivePoint: u, normPrivateKeyToScalar: a, weierstrassEquation: c, isWithinCurveOrder: h} = te({
        ...e,
        toBytes(t, e, r) {
            const o = e.toAffine(), i = n.toBytes(o.x), s = Bt;
            return r ? s(Uint8Array.from([ e.hasEvenY() ? 2 : 3 ]), i) : s(Uint8Array.from([ 4 ]), i, n.toBytes(o.y));
        },
        fromBytes(t) {
            const e = t.length, r = t[0], s = t.subarray(1);
            if (e !== o || 2 !== r && 3 !== r) {
                if (e === i && 4 === r) {
                    return {
                        x: n.fromBytes(s.subarray(0, n.BYTES)),
                        y: n.fromBytes(s.subarray(n.BYTES, 2 * n.BYTES))
                    };
                }
                throw new Error(`Point of length ${e} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`);
            }
            {
                const t = wt(s);
                if (!(Xt < (f = t) && f < n.ORDER)) throw new Error("Point is not on curve");
                const e = c(t);
                let o;
                try {
                    o = n.sqrt(e);
                } catch (u) {
                    const t = u instanceof Error ? ": " + u.message : "";
                    throw new Error("Point is not on curve" + t);
                }
                return !(1 & ~r) !== ((o & Jt) === Jt) && (o = n.neg(o)), {
                    x: t,
                    y: o
                };
            }
            var f;
        }
    }), l = t => it(bt(t, e.nByteLength));
    function d(t) {
        return t > r >> Jt;
    }
    const p = (t, e, n) => wt(t.slice(e, n));
    class g {
        constructor(t, e, n) {
            this.r = t, this.s = e, this.recovery = n, this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(t) {
            const n = e.nByteLength;
            return t = Et("compactSignature", t, 2 * n), new g(p(t, 0, n), p(t, n, 2 * n));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(t) {
            const {r: e, s: n} = Wt.toSig(Et("DER", t));
            return new g(e, n);
        }
        assertValidity() {
            if (!h(this.r)) throw new Error("r must be 0 < r < CURVE.n");
            if (!h(this.s)) throw new Error("s must be 0 < s < CURVE.n");
        }
        addRecoveryBit(t) {
            return new g(this.r, this.s, t);
        }
        recoverPublicKey(t) {
            const {r: r, s: o, recovery: i} = this, a = m(Et("msgHash", t));
            if (null == i || ![ 0, 1, 2, 3 ].includes(i)) throw new Error("recovery id invalid");
            const c = 2 === i || 3 === i ? r + e.n : r;
            if (c >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const h = 1 & i ? "03" : "02", d = u.fromHex(h + l(c)), p = f(c), g = s(-a * p), w = s(o * p), y = u.BASE.multiplyAndAddUnsafe(d, g, w);
            if (!y) throw new Error("point at infinify");
            return y.assertValidity(), y;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return d(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new g(this.r, s(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return gt(this.toDERHex());
        }
        toDERHex() {
            return Wt.hexFromSig({
                r: this.r,
                s: this.s
            });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return gt(this.toCompactHex());
        }
        toCompactHex() {
            return l(this.r) + l(this.s);
        }
    }
    const w = {
        isValidPrivateKey(t) {
            try {
                return a(t), !0;
            } catch (e) {
                return !1;
            }
        },
        normPrivateKeyToScalar: a,
        /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
        randomPrivateKey: () => {
            const t = _t(e.n);
            return function(t, e, n = !1) {
                const r = t.length, o = Zt(e), i = _t(e);
                if (r < 16 || r < i || r > 1024) throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);
                const s = Ft(n ? wt(t) : yt(t), e - Rt) + Rt;
                return n ? mt(s, o) : bt(s, o);
            }(e.randomBytes(t), e.n);
        },
        /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
        precompute: (t = 8, e = u.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), 
        e)
    };
    function y(t) {
        const e = nt(t), n = "string" == typeof t, r = (e || n) && t.length;
        return e ? r === o || r === i : n ? r === 2 * o || r === 2 * i : t instanceof u;
    }
    const b = e.bits2int || function(t) {
        const n = wt(t), r = 8 * t.length - e.nBitLength;
        return r > 0 ? n >> BigInt(r) : n;
    }, m = e.bits2int_modN || function(t) {
        return s(b(t));
    }, E = xt(e.nBitLength);
    function B(t) {
        if ("bigint" != typeof t) throw new Error("bigint expected");
        if (!(Xt <= t && t < E)) throw new Error(`bigint expected < 2^${e.nBitLength}`);
        return bt(t, e.nByteLength);
    }
    function x(t, r, o = I) {
        if ([ "recovered", "canonical" ].some((t => t in o))) throw new Error("sign() legacy options not supported");
        const {hash: i, randomBytes: c} = e;
        let {lowS: l, prehash: p, extraEntropy: w} = o;
        null == l && (l = !0), t = Et("msgHash", t), p && (t = Et("prehashed msgHash", i(t)));
        const y = m(t), E = a(r), x = [ B(E), B(y) ];
        if (null != w && !1 !== w) {
            const t = !0 === w ? c(n.BYTES) : w;
            x.push(Et("extraEntropy", t));
        }
        const v = Bt(...x), S = y;
        return {
            seed: v,
            k2sig: function(t) {
                const e = b(t);
                if (!h(e)) return;
                const n = f(e), r = u.BASE.multiply(e).toAffine(), o = s(r.x);
                if (o === Xt) return;
                const i = s(n * s(S + o * E));
                if (i === Xt) return;
                let a = (r.x === o ? 0 : 2) | Number(r.y & Jt), c = i;
                return l && d(i) && (c = function(t) {
                    return d(t) ? s(-t) : t;
                }(i), a ^= 1), new g(o, c, a);
            }
        };
    }
    const I = {
        lowS: e.lowS,
        prehash: !1
    }, v = {
        lowS: e.lowS,
        prehash: !1
    };
    return u.BASE._setWindowSize(8), {
        CURVE: e,
        getPublicKey: function(t, e = !0) {
            return u.fromPrivateKey(t).toRawBytes(e);
        },
        getSharedSecret: function(t, e, n = !0) {
            if (y(t)) throw new Error("first arg must be private key");
            if (!y(e)) throw new Error("second arg must be public key");
            return u.fromHex(e).multiply(a(t)).toRawBytes(n);
        },
        sign: function(t, n, r = I) {
            const {seed: o, k2sig: i} = x(t, n, r), s = e;
            return St(s.hash.outputLen, s.nByteLength, s.hmac)(o, i);
        },
        verify: function(t, n, r, o = v) {
            var i;
            const a = t;
            if (n = Et("msgHash", n), r = Et("publicKey", r), "strict" in o) throw new Error("options.strict was renamed to lowS");
            const {lowS: c, prehash: h} = o;
            let l, d;
            try {
                if ("string" == typeof a || nt(a)) try {
                    l = g.fromDER(a);
                } catch (I) {
                    if (!(I instanceof Wt.Err)) throw I;
                    l = g.fromCompact(a);
                } else {
                    if ("object" != typeof a || "bigint" != typeof a.r || "bigint" != typeof a.s) throw new Error("PARSE");
                    {
                        const {r: t, s: e} = a;
                        l = new g(t, e);
                    }
                }
                d = u.fromHex(r);
            } catch (S) {
                if ("PARSE" === S.message) throw new Error("signature must be Signature instance, Uint8Array or hex string");
                return !1;
            }
            if (c && l.hasHighS()) return !1;
            h && (n = e.hash(n));
            const {r: p, s: w} = l, y = m(n), b = f(w), E = s(y * b), B = s(p * b), x = null == (i = u.BASE.multiplyAndAddUnsafe(d, E, B)) ? void 0 : i.toAffine();
            return !!x && s(x.x) === p;
        },
        ProjectivePoint: u,
        Signature: g,
        utils: w
    };
}

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function ne(t) {
    return {
        hash: t,
        hmac: (e, ...n) => j(t, e, m(...n)),
        randomBytes: v
    };
}

BigInt(4);

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const re = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), oe = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), ie = BigInt(1), se = BigInt(2), fe = (t, e) => (t + e / se) / e;

const ue = function(t, e, n = !1, r = {}) {
    if (t <= kt) throw new Error(`Expected Field ORDER > 0, got ${t}`);
    const {nBitLength: o, nByteLength: i} = Vt(t, e);
    if (i > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const s = zt(t), f = Object.freeze({
        ORDER: t,
        BITS: o,
        BYTES: i,
        MASK: xt(o),
        ZERO: kt,
        ONE: Rt,
        create: e => Ft(e, t),
        isValid: e => {
            if ("bigint" != typeof e) throw new Error("Invalid field element: expected bigint, got " + typeof e);
            return kt <= e && e < t;
        },
        is0: t => t === kt,
        isOdd: t => (t & Rt) === Rt,
        neg: e => Ft(-e, t),
        eql: (t, e) => t === e,
        sqr: e => Ft(e * e, t),
        add: (e, n) => Ft(e + n, t),
        sub: (e, n) => Ft(e - n, t),
        mul: (e, n) => Ft(e * n, t),
        pow: (t, e) => function(t, e, n) {
            if (n < kt) throw new Error("Expected power > 0");
            if (n === kt) return t.ONE;
            if (n === Rt) return e;
            let r = t.ONE, o = e;
            for (;n > kt; ) n & Rt && (r = t.mul(r, o)), o = t.sqr(o), n >>= Rt;
            return r;
        }(f, t, e),
        div: (e, n) => Ft(e * Ct(n, t), t)
        // Same as above, but doesn't normalize
        ,
        sqrN: t => t * t,
        addN: (t, e) => t + e,
        subN: (t, e) => t - e,
        mulN: (t, e) => t * e,
        inv: e => Ct(e, t),
        sqrt: r.sqrt || (t => s(f, t)),
        invertBatch: t => function(t, e) {
            const n = new Array(e.length), r = e.reduce(((e, r, o) => t.is0(r) ? e : (n[o] = e, 
            t.mul(e, r))), t.ONE), o = t.inv(r);
            return e.reduceRight(((e, r, o) => t.is0(r) ? e : (n[o] = t.mul(e, n[o]), t.mul(e, r))), o), 
            n;
        }(f, t)
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        ,
        cmov: (t, e, n) => n ? e : t,
        toBytes: t => n ? mt(t, i) : bt(t, i),
        fromBytes: t => {
            if (t.length !== i) throw new Error(`Fp.fromBytes: expected ${i}, got ${t.length}`);
            return n ? yt(t) : wt(t);
        }
    });
    return Object.freeze(f);
}(re, void 0, void 0, {
    sqrt: function(t) {
        const e = re, n = BigInt(3), r = BigInt(6), o = BigInt(11), i = BigInt(22), s = BigInt(23), f = BigInt(44), u = BigInt(88), a = t * t * t % e, c = a * a * t % e, h = Pt(c, n, e) * c % e, l = Pt(h, n, e) * c % e, d = Pt(l, se, e) * a % e, p = Pt(d, o, e) * d % e, g = Pt(p, i, e) * p % e, w = Pt(g, f, e) * g % e, y = Pt(w, u, e) * w % e, b = Pt(y, f, e) * g % e, m = Pt(b, n, e) * c % e, E = Pt(m, s, e) * p % e, B = Pt(E, r, e) * a % e, x = Pt(B, se, e);
        if (!ue.eql(ue.sqr(x), t)) throw new Error("Cannot find square root");
        return x;
    }
}), ae = function(t, e) {
    const n = e => ee({
        ...t,
        ...ne(e)
    });
    return Object.freeze({
        ...n(e),
        create: n
    });
}({
    a: BigInt(0),
    // equation params: a, b
    b: BigInt(7),
    // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
    Fp: ue,
    // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
    n: oe,
    // Curve order, total count of valid points in the field
    // Base point (x, y) aka generator point
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    // Cofactor
    lowS: !0,
    // Allow only low-S signatures by default in sign() and verify()
    /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
    endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: t => {
            const e = oe, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -ie * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = n, s = BigInt("0x100000000000000000000000000000000"), f = fe(i * t, e), u = fe(-r * t, e);
            let a = Ft(t - f * n - u * o, e), c = Ft(-f * r - u * i, e);
            const h = a > s, l = c > s;
            if (h && (a = e - a), l && (c = e - c), a > s || c > s) throw new Error("splitScalar: Endomorphism failed, k=" + t);
            return {
                k1neg: h,
                k1: a,
                k2neg: l,
                k2: c
            };
        }
    }
}, Y);

BigInt(0), ae.ProjectivePoint;

export { i as a, c as b, m as c, J as d, ae as e, C as k, V as p, v as r, Y as s, y as u };

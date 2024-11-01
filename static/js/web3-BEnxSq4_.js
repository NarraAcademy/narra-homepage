import "./setimmediate-DUOPLI_V.js";

import { p as e, r as t, W as n } from "./web3-eth-vWxzIr98.js";

import { E as o } from "./web3-types-DSrrWgZ8.js";

import { I as r } from "./web3-errors-hzVYhHGn.js";

import "./web3-validator-BARD4gRE.js";

import { e as s, a as i, b as a, c, d, f as u, g as p, h as v } from "./web3-eth-abi-eT7or4Ei.js";

import { W as w, i as f } from "./web3-core-ObgmPHuP.js";

import { I as b } from "./web3-eth-iban-75eRxAWM.js";

import { W as m, r as l, h, s as j, a as y, e as g, p as P, b as E, c as T, d as x, f as O, g as K, i as C } from "./web3-eth-accounts-DxnCIhbC.js";

import "./crc-32-BOb1C-oO.js";

import "./@ethereumjs-aMURc4PS.js";

import { C as I } from "./web3-eth-contract-CZNEMiMZ.js";

import { E as S, r as q } from "./web3-eth-ens-BC7enYQN.js";

import { P as A } from "./web3-eth-personal-CKSgBcUg.js";

import "./web3-providers-http-C4pd9hst.js";

import "./isomorphic-ws-DZRFyHBe.js";

import { f as M, i as W, u as N, a as L, b as D } from "./web3-utils-CA0vZo5F.js";

import { N as F } from "./web3-net-DSmyH1-b.js";

import { m as _ } from "./web3-rpc-providers-vULLkS0L.js";

import "./web3-rpc-methods-Df_8n9zL.js";

const z = {
    encodeEventSignature: s,
    encodeFunctionCall: i,
    encodeFunctionSignature: a,
    encodeParameter: c,
    encodeParameters: d,
    decodeParameter: u,
    decodeParameters: p,
    decodeLog: v
};

var B = function(e, t, n, o) {
    return new (n || (n = Promise))((function(r, s) {
        function i(e) {
            try {
                c(o.next(e));
            } catch (t) {
                s(t);
            }
        }
        function a(e) {
            try {
                c(o.throw(e));
            } catch (t) {
                s(t);
            }
        }
        function c(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t);
            }))).then(i, a);
        }
        c((o = o.apply(e, t || [])).next());
    }));
};

var U, V, k = function(e, t, n, o) {
    return new (n || (n = Promise))((function(r, s) {
        function i(e) {
            try {
                c(o.next(e));
            } catch (t) {
                s(t);
            }
        }
        function a(e) {
            try {
                c(o.throw(e));
            } catch (t) {
                s(t);
            }
        }
        function c(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t);
            }))).then(i, a);
        }
        c((o = o.apply(e, t || [])).next());
    }));
};

(V = U || (U = {})).eip6963announceProvider = "eip6963:announceProvider", V.eip6963requestProvider = "eip6963:requestProvider";

const G =  new Map, H = "web3:providersMapUpdated";

class J extends w {
    constructor(s = _) {
        var i;
        W(s) || "string" == typeof s && "" === s.trim() || "string" != typeof s && !f(s) && s.provider;
        let a = {};
        "string" == typeof s || f(s) ? a.provider = s : a = s || {}, a.registeredSubscriptions = Object.assign(Object.assign({}, t), null !== (i = a.registeredSubscriptions) && void 0 !== i ? i : {}), 
        super(a);
        const c = (t => {
            const n = (n, r) => B(void 0, void 0, void 0, (function*() {
                const s = yield e(n, t), i = M({
                    format: "bytes"
                }, r, o);
                return x(s, i);
            })), r = e => {
                const t = O(e);
                return Object.assign(Object.assign({}, t), {
                    signTransaction: e => B(void 0, void 0, void 0, (function*() {
                        return n(e, t.privateKey);
                    }))
                });
            }, s = (e, t, o) => B(void 0, void 0, void 0, (function*() {
                var r;
                const s = yield K(e, t, null === (r = null == o ? void 0 : o.nonStrict) || void 0 === r || r);
                return Object.assign(Object.assign({}, s), {
                    signTransaction: e => B(void 0, void 0, void 0, (function*() {
                        return n(e, s.privateKey);
                    }))
                });
            })), i = () => {
                const e = C();
                return Object.assign(Object.assign({}, e), {
                    signTransaction: t => B(void 0, void 0, void 0, (function*() {
                        return n(t, e.privateKey);
                    }))
                });
            }, a = new m({
                create: i,
                privateKeyToAccount: r,
                decrypt: s
            });
            return {
                signTransaction: n,
                create: i,
                privateKeyToAccount: r,
                decrypt: s,
                recoverTransaction: l,
                hashMessage: h,
                sign: j,
                recover: y,
                encrypt: g,
                wallet: a,
                privateKeyToAddress: P,
                parseAndValidatePrivateKey: E,
                privateKeyToPublicKey: T
            };
        })(this);
        this._wallet = c.wallet, this._accountProvider = c, this.utils = N;
        const d = this;
        const u = d.use(n);
        this.eth = Object.assign(u, {
            // ENS module
            ens: d.use(S, q.main),
            // Iban helpers
            Iban: b,
            net: d.use(F),
            personal: d.use(A),
            // Contract helper and module
            Contract: class extends I {
                constructor(e, t, n, o, s) {
                    if (L(t) && L(n)) throw new r("Should not provide options at both 2nd and 3rd parameters");
                    let i, a, c, p = {};
                    if (!W(t) && "object" != typeof t && "string" != typeof t) throw new r;
                    if ("string" == typeof t && (i = t), p = L(t) ? t : L(n) ? n : {}, a = t instanceof w ? t : n instanceof w ? n : o instanceof w ? o : d.getContextObject(), 
                    s ? c = s : D(n) ? c = n : D(o) && (c = o), super(e, i, p, a, c), super.subscribeToContextEvents(d), 
                    !W(u)) {
                        const e = u.getTransactionMiddleware();
                        W(e) || super.setTransactionMiddleware(e);
                    }
                }
            },
            // ABI Helpers
            abi: z,
            // Accounts helper
            accounts: c
        });
    }
}

J.version = "4.14.0", J.utils = N, J.requestEIP6963Providers = () => k(void 0, void 0, void 0, (function*() {
    return new Promise(((e, t) => {
        "undefined" == typeof window && t(new Error("window object not available, EIP-6963 is intended to be used within a browser")), 
        window.addEventListener(U.eip6963announceProvider, (t => {
            G.set(t.detail.info.uuid, t.detail);
            const n = new CustomEvent(H, {
                detail: G
            });
            window.dispatchEvent(n), e(G);
        })), window.dispatchEvent(new Event(U.eip6963requestProvider));
    }));
})), J.onNewProviderDiscovered = e => {
    if ("undefined" == typeof window) throw new Error("window object not available, EIP-6963 is intended to be used within a browser");
    window.addEventListener(H, e);
}, J.modules = {
    Web3Eth: n,
    Iban: b,
    Net: F,
    ENS: S,
    Personal: A
};

export { J as W };

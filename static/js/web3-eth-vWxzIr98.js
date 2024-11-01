import "./setimmediate-DUOPLI_V.js";

import { E as t, H as e, D as n, F as r, a as i } from "./web3-types-DSrrWgZ8.js";

import { a as o, b as a, W as s, i as u } from "./web3-core-ObgmPHuP.js";

import { f as c, T as d, U as l, g as f, L as m, h, i as v, j as y, k as p, l as g, m as b, n as w, o as x, d as P, p as F, c as k, q as R, s as j, t as C, u as S, v as B, w as G, x as I, M as O, y as M, z as T, A as H, B as q, D as E, H as A, F as L, G as D, J as N, K as W, N as U, Q as z } from "./web3-errors-hzVYhHGn.js";

import "./web3-eth-iban-75eRxAWM.js";

import { i as _, v as J, W as K, a as V, b as $, c as Q, d as X, e as Y, f as Z, g as tt } from "./web3-validator-BARD4gRE.js";

import { g as et, s as nt, a as rt, b as it, c as ot, d as at, e as st, f as ut, h as ct, i as dt, j as lt, k as ft, l as mt, m as ht, n as vt, o as yt, p as pt, q as gt, r as bt, t as wt, u as xt, v as Pt, w as Ft, x as kt, y as Rt, z as jt, A as Ct, B as St, C as Bt, D as Gt, E as It, F as Ot, G as Mt, H as Tt, I as Ht, J as qt, K as Et, L as At, M as Lt, N as Dt, O as Nt, P as Wt } from "./web3-rpc-methods-Df_8n9zL.js";

import { T as Ut, p as zt, C as _t } from "./web3-eth-accounts-DxnCIhbC.js";

import "./crc-32-BOb1C-oO.js";

import "./@ethereumjs-aMURc4PS.js";

import { t as Jt, f as Kt, n as Vt, o as $t, p as Qt, q as Xt, r as Yt, s as Zt, v as te, w as ee, x as ne, y as re, z as ie, i as oe, A as ae } from "./web3-utils-CA0vZo5F.js";

import { g as se } from "./web3-net-DSmyH1-b.js";

import { i as ue, j as ce, h as de } from "./web3-eth-abi-eT7or4Ei.js";

const le = {
    type: "object",
    properties: {
        accessList: {
            type: "null"
        },
        maxFeePerGas: {
            type: "null"
        },
        maxPriorityFeePerGas: {
            type: "null"
        }
    }
}, fe = {
    type: "object",
    properties: {
        maxFeePerGas: {
            type: "null"
        },
        maxPriorityFeePerGas: {
            type: "null"
        }
    }
}, me = {
    type: "object",
    properties: {
        gasPrice: {
            type: "null"
        }
    }
}, he = (t, e, n) => {
    try {
        J.validateJSONSchema(t, e);
    } catch (r) {
        if (r instanceof K) throw new c(r.errors, n);
        throw r;
    }
}, ve = n => {
    var r, i;
    const o = n;
    if (!_(o.type)) {
        let e;
        switch (o.type) {
          case "0x0":
            e = le;
            break;

          case "0x1":
            e = fe;
            break;

          case "0x2":
            e = me;
            break;

          default:
            return Kt({
                format: "uint"
            }, o.type, t);
        }
        return he(e, o, o.type), Kt({
            format: "uint"
        }, o.type, t);
    }
    if (!_(o.maxFeePerGas) || !_(o.maxPriorityFeePerGas)) return he(me, o, "0x2"), "0x2";
    if (!_(o.accessList)) return he(fe, o, "0x1"), "0x1";
    const a = null !== (r = o.hardfork) && void 0 !== r ? r : null === (i = o.common) || void 0 === i ? void 0 : i.hardfork;
    if (!_(a)) {
        const t = Object.keys(e).indexOf(a);
        if (t >= Object.keys(e).indexOf("london")) return _(o.gasPrice) ? "0x2" : "0x0";
        if (t === Object.keys(e).indexOf("berlin")) return "0x0";
    }
    return _(o.gasPrice) ? void 0 : (he(le, o, "0x0"), "0x0");
}, ye = (t, e) => {
    var n;
    return (null !== (n = null == e ? void 0 : e.transactionTypeParser) && void 0 !== n ? n : ve)(t);
}, pe = {
    type: "array",
    items: Object.assign({}, {
        type: "object",
        properties: {
            address: {
                format: "address"
            },
            storageKeys: {
                type: "array",
                items: {
                    format: "bytes32"
                }
            }
        }
    })
}, ge = {
    type: "object",
    properties: {
        accessList: Object.assign({}, pe),
        gasUsed: {
            type: "string"
        }
    }
}, be = {
    type: "string",
    enum: [ "goerli", "kovan", "mainnet", "rinkeby", "ropsten", "sepolia" ]
}, we = {
    type: "string",
    enum: [ "arrowGlacier", "berlin", "byzantium", "chainstart", "constantinople", "dao", "homestead", "istanbul", "london", "merge", "muirGlacier", "petersburg", "shanghai", "spuriousDragon", "tangerineWhistle" ]
}, xe = {
    type: "object",
    properties: {
        from: {
            format: "address"
        },
        to: {
            oneOf: [ {
                format: "address"
            }, {
                type: "null"
            } ]
        },
        value: {
            format: "uint"
        },
        gas: {
            format: "uint"
        },
        gasPrice: {
            format: "uint"
        },
        effectiveGasPrice: {
            format: "uint"
        },
        type: {
            format: "uint"
        },
        maxFeePerGas: {
            format: "uint"
        },
        maxPriorityFeePerGas: {
            format: "uint"
        },
        accessList: Object.assign({}, pe),
        data: {
            format: "bytes"
        },
        input: {
            format: "bytes"
        },
        nonce: {
            format: "uint"
        },
        chain: Object.assign({}, be),
        hardfork: Object.assign({}, we),
        chainId: {
            format: "uint"
        },
        networkId: {
            format: "uint"
        },
        common: {
            type: "object",
            properties: {
                customChain: Object.assign({}, {
                    type: "object",
                    properties: {
                        name: {
                            format: "string"
                        },
                        networkId: {
                            format: "uint"
                        },
                        chainId: {
                            format: "uint"
                        }
                    }
                }),
                baseChain: Object.assign({}, be),
                hardfork: Object.assign({}, we)
            }
        },
        gasLimit: {
            format: "uint"
        },
        v: {
            format: "uint"
        },
        r: {
            format: "bytes32"
        },
        s: {
            format: "bytes32"
        }
    }
}, Pe = {
    type: "object",
    properties: Object.assign(Object.assign({}, xe.properties), {
        blockHash: {
            format: "bytes32"
        },
        blockNumber: {
            format: "uint"
        },
        hash: {
            format: "bytes32"
        },
        transactionIndex: {
            format: "uint"
        },
        from: {
            format: "address"
        },
        to: {
            oneOf: [ {
                format: "address"
            }, {
                type: "null"
            } ]
        },
        value: {
            format: "uint"
        },
        gas: {
            format: "uint"
        },
        gasPrice: {
            format: "uint"
        },
        effectiveGasPrice: {
            format: "uint"
        },
        type: {
            format: "uint"
        },
        maxFeePerGas: {
            format: "uint"
        },
        maxPriorityFeePerGas: {
            format: "uint"
        },
        accessList: Object.assign({}, pe),
        data: {
            format: "bytes"
        },
        input: {
            format: "bytes"
        },
        nonce: {
            format: "uint"
        },
        gasLimit: {
            format: "uint"
        },
        v: {
            format: "uint"
        },
        r: {
            format: "bytes32"
        },
        s: {
            format: "bytes32"
        }
    })
}, Fe = {
    type: "object",
    properties: {
        index: {
            format: "uint"
        },
        validatorIndex: {
            format: "uint"
        },
        address: {
            format: "address"
        },
        amount: {
            format: "uint"
        }
    }
}, ke = {
    type: "object",
    properties: {
        baseFeePerGas: {
            format: "uint"
        },
        blobGasUsed: {
            format: "uint"
        },
        difficulty: {
            format: "uint"
        },
        excessBlobGas: {
            format: "uint"
        },
        extraData: {
            format: "bytes"
        },
        gasLimit: {
            format: "uint"
        },
        gasUsed: {
            format: "uint"
        },
        hash: {
            format: "bytes32"
        },
        logsBloom: {
            format: "bytes256"
        },
        miner: {
            format: "bytes"
        },
        mixHash: {
            format: "bytes32"
        },
        nonce: {
            format: "uint"
        },
        number: {
            format: "uint"
        },
        parentBeaconBlockRoot: {
            format: "bytes32"
        },
        parentHash: {
            format: "bytes32"
        },
        receiptsRoot: {
            format: "bytes32"
        },
        sha3Uncles: {
            format: "bytes32"
        },
        size: {
            format: "uint"
        },
        stateRoot: {
            format: "bytes32"
        },
        timestamp: {
            format: "uint"
        },
        totalDifficulty: {
            format: "uint"
        },
        transactions: {
            oneOf: [ {
                type: "array",
                items: Object.assign({}, Pe)
            }, {
                type: "array",
                items: {
                    format: "bytes32"
                }
            } ]
        },
        transactionsRoot: {
            format: "bytes32"
        },
        uncles: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        withdrawals: {
            type: "array",
            items: Object.assign({}, Fe)
        },
        withdrawalsRoot: {
            format: "bytes32"
        }
    }
}, Re = {
    type: "object",
    properties: {
        author: {
            format: "bytes32"
        },
        excessDataGas: {
            format: "uint"
        },
        baseFeePerGas: {
            format: "uint"
        },
        blobGasUsed: {
            format: "uint"
        },
        difficulty: {
            format: "uint"
        },
        excessBlobGas: {
            format: "uint"
        },
        extraData: {
            format: "bytes"
        },
        gasLimit: {
            format: "uint"
        },
        gasUsed: {
            format: "uint"
        },
        hash: {
            format: "bytes32"
        },
        logsBloom: {
            format: "bytes256"
        },
        miner: {
            format: "bytes"
        },
        mixHash: {
            format: "bytes32"
        },
        nonce: {
            format: "uint"
        },
        number: {
            format: "uint"
        },
        parentBeaconBlockRoot: {
            format: "bytes32"
        },
        parentHash: {
            format: "bytes32"
        },
        receiptsRoot: {
            format: "bytes32"
        },
        sha3Uncles: {
            format: "bytes32"
        },
        size: {
            format: "uint"
        },
        stateRoot: {
            format: "bytes32"
        },
        timestamp: {
            format: "uint"
        },
        totalDifficulty: {
            format: "uint"
        },
        transactions: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        transactionsRoot: {
            format: "bytes32"
        },
        uncles: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        withdrawals: {
            type: "array",
            items: Object.assign({}, Fe)
        },
        withdrawalsRoot: {
            format: "bytes32"
        }
    }
}, je = {
    type: "object",
    properties: {
        removed: {
            format: "bool"
        },
        logIndex: {
            format: "uint"
        },
        transactionIndex: {
            format: "uint"
        },
        transactionHash: {
            format: "bytes32"
        },
        blockHash: {
            format: "bytes32"
        },
        blockNumber: {
            format: "uint"
        },
        address: {
            format: "address"
        },
        data: {
            format: "bytes"
        },
        topics: {
            type: "array",
            items: {
                format: "bytes32"
            }
        }
    }
}, Ce = {
    type: "object",
    properties: {
        startingBlock: {
            format: "string"
        },
        currentBlock: {
            format: "string"
        },
        highestBlock: {
            format: "string"
        },
        knownStates: {
            format: "string"
        },
        pulledStates: {
            format: "string"
        }
    }
}, Se = {
    type: "object",
    properties: {
        transactionHash: {
            format: "bytes32"
        },
        transactionIndex: {
            format: "uint"
        },
        blockHash: {
            format: "bytes32"
        },
        blockNumber: {
            format: "uint"
        },
        from: {
            format: "address"
        },
        to: {
            format: "address"
        },
        cumulativeGasUsed: {
            format: "uint"
        },
        gasUsed: {
            format: "uint"
        },
        effectiveGasPrice: {
            format: "uint"
        },
        contractAddress: {
            format: "address"
        },
        logs: {
            type: "array",
            items: Object.assign({}, je)
        },
        logsBloom: {
            format: "bytes"
        },
        root: {
            format: "bytes"
        },
        status: {
            format: "uint"
        },
        type: {
            format: "uint"
        }
    }
}, Be = {
    type: "object",
    properties: {
        messageHash: {
            format: "bytes"
        },
        r: {
            format: "bytes32"
        },
        s: {
            format: "bytes32"
        },
        v: {
            format: "bytes"
        },
        message: {
            format: "bytes"
        },
        signature: {
            format: "bytes"
        }
    }
}, Ge = {
    type: "object",
    properties: {
        oldestBlock: {
            format: "uint"
        },
        baseFeePerGas: {
            type: "array",
            items: {
                format: "uint"
            }
        },
        reward: {
            type: "array",
            items: {
                type: "array",
                items: {
                    format: "uint"
                }
            }
        },
        gasUsedRatio: {
            type: "array",
            items: {
                type: "number"
            }
        }
    }
}, Ie = {
    type: "object",
    properties: {
        balance: {
            format: "uint"
        },
        codeHash: {
            format: "bytes32"
        },
        nonce: {
            format: "uint"
        },
        storageHash: {
            format: "bytes32"
        },
        accountProof: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        storageProof: {
            type: "array",
            items: Object.assign({}, {
                type: "object",
                properties: {
                    key: {
                        format: "bytes32"
                    },
                    value: {
                        format: "uint"
                    },
                    proof: {
                        type: "array",
                        items: {
                            format: "bytes32"
                        }
                    }
                }
            })
        }
    }
};

function Oe(t, e = n, r = {
    transactionSchema: Pe,
    fillInputAndData: !1
}) {
    var i, o;
    let a = Vt({}, t);
    if (_(null == t ? void 0 : t.common) || (a.common = Object.assign({}, t.common), 
    _(null === (i = t.common) || void 0 === i ? void 0 : i.customChain) || (a.common.customChain = Object.assign({}, t.common.customChain))), 
    a = Kt(null !== (o = r.transactionSchema) && void 0 !== o ? o : Pe, a, e), !_(a.data) && !_(a.input) && // Converting toHex is accounting for data and input being Uint8Arrays
    // since comparing Uint8Array is not as straightforward as comparing strings
    Jt(a.data) !== Jt(a.input)) throw new d({
        data: $t(a.data),
        input: $t(a.input)
    });
    return r.fillInputAndData && (_(a.data) ? _(a.input) || (a.data = a.input) : a.input = a.data), 
    _(a.gasLimit) || (a.gas = a.gasLimit, delete a.gasLimit), a;
}

const Me = "ALLEVENTS", Te = {
    name: Me,
    signature: "",
    type: "event",
    inputs: []
}, He = {
    bytes: r.HEX,
    number: i.NUMBER
};

var qe = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

function Ee(e, n, r) {
    return qe(this, void 0, void 0, (function*() {
        const i = De(e, n);
        if (!_(i)) {
            if (i.startsWith("-")) throw new l(i);
            if (Number(i) < 0 || Number(i) > 127) throw new l(i);
            if (_(e.gasPrice) && ("0x0" === i || "0x1" === i)) return {
                gasPrice: yield cn(n, r),
                maxPriorityFeePerGas: void 0,
                maxFeePerGas: void 0
            };
            if ("0x2" === i) return Object.assign({
                gasPrice: void 0
            }, yield function(e, n, r) {
                var i, o, a, s;
                return qe(this, void 0, void 0, (function*() {
                    const u = yield ln(n, n.defaultBlock, !1, t);
                    if (_(u.baseFeePerGas)) throw new f;
                    let c;
                    if (_(e.gasPrice) && BigInt(u.baseFeePerGas) === BigInt(0) && (c = yield cn(n, r)), 
                    !_(e.gasPrice) || !_(c)) {
                        const t = Kt({
                            format: "uint"
                        }, null !== (i = e.gasPrice) && void 0 !== i ? i : c, r);
                        return {
                            maxPriorityFeePerGas: t,
                            maxFeePerGas: t
                        };
                    }
                    return {
                        maxPriorityFeePerGas: Kt({
                            format: "uint"
                        }, null !== (o = e.maxPriorityFeePerGas) && void 0 !== o ? o : n.defaultMaxPriorityFeePerGas, r),
                        maxFeePerGas: Kt({
                            format: "uint"
                        }, null !== (a = e.maxFeePerGas) && void 0 !== a ? a : BigInt(u.baseFeePerGas) * BigInt(2) + BigInt(null !== (s = e.maxPriorityFeePerGas) && void 0 !== s ? s : n.defaultMaxPriorityFeePerGas), r)
                    };
                }));
            }(e, n, r));
        }
    }));
}

var Ae = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

const Le = (t, e, n, r) => {
    if (void 0 !== n && t in n && void 0 !== n[t]) {
        if ("string" == typeof n[t] && V(n[t])) return n[t];
        if (!$(n[t]) && Q(n[t])) {
            if (e.wallet) {
                const r = e.wallet.get(Kt({
                    format: "uint"
                }, n[t], He));
                if (!_(r)) return r.address;
                throw new m;
            }
            throw new m;
        }
        throw "from" === t ? new h(n.from) : 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        new v(n.to);
    }
    if ("from" === t) {
        if (!_(r)) return zt(r);
        if (!_(e.defaultAccount)) return e.defaultAccount;
    }
}, De = (e, n) => {
    const r = ye(e, n);
    return _(r) ? _(n.defaultTransactionType) ? void 0 : Kt({
        format: "uint"
    }, n.defaultTransactionType, t) : r;
};

function Ne(e) {
    var n, r;
    return Ae(this, void 0, void 0, (function*() {
        let i = Kt(xe, e.transaction, e.web3Context.defaultReturnFormat);
        if (_(i.from) && (i.from = Le("from", e.web3Context, void 0, e.privateKey)), _(i.nonce) && (i.nonce = yield ((t, e, n = t.defaultReturnFormat) => Ae(void 0, void 0, void 0, (function*() {
            if (_(e)) throw new y;
            return mn(t, e, t.defaultBlock, n);
        })))(e.web3Context, i.from, t)), _(i.value) && (i.value = "0x0"), _(i.data)) _(i.input) ? i.input = "0x" : i.input.startsWith("0x") || (i.input = `0x${i.input}`); else {
            if (!_(i.input) && i.data !== i.input) throw new d({
                data: $t(i.data),
                input: $t(i.input)
            });
            i.data.startsWith("0x") || (i.data = `0x${i.data}`);
        }
        if (_(i.common)) {
            if (e.web3Context.defaultCommon) {
                const t = e.web3Context.defaultCommon, n = t.customChain.chainId, r = t.customChain.networkId, o = t.customChain.name;
                i.common = Object.assign(Object.assign({}, t), {
                    customChain: {
                        chainId: n,
                        networkId: r,
                        name: o
                    }
                });
            }
            _(i.chain) && (i.chain = e.web3Context.defaultChain), _(i.hardfork) && (i.hardfork = e.web3Context.defaultHardfork);
        }
        if (_(i.chainId) && _(null === (n = i.common) || void 0 === n ? void 0 : n.customChain.chainId) && (i.chainId = yield wn(e.web3Context, t)), 
        _(i.networkId) && (i.networkId = null !== (r = e.web3Context.defaultNetworkId) && void 0 !== r ? r : yield se(e.web3Context, t)), 
        _(i.gasLimit) && !_(i.gas) && (i.gasLimit = i.gas), i.type = De(i, e.web3Context), 
        !_(i.accessList) || "0x1" !== i.type && "0x2" !== i.type || (i.accessList = []), 
        e.fillGasPrice && (i = Object.assign(Object.assign({}, i), yield Ee(i, e.web3Context, t))), 
        _(i.gas) && _(i.gasLimit) && e.fillGasLimit) {
            const n = yield gn(e.web3Context, i, "latest", t);
            i = Object.assign(Object.assign({}, i), {
                gas: Kt({
                    format: "uint"
                }, n, t)
            });
        }
        return i;
    }));
}

var We = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

function Ue(t, e, n) {
    const r = t.transactionPollingInterval, [i, o] = Yt((() => We(this, void 0, void 0, (function*() {
        let r;
        try {
            r = yield dn(t, He);
        } catch (o) {
            return;
        }
        const i = r - e;
        if (i >= t.transactionBlockTimeout) return new p({
            starterBlockNumber: e,
            numberOfBlocks: i,
            transactionHash: n
        });
    }))), r);
    return [ o, {
        clean: () => {
            clearInterval(i);
        }
    } ];
}

function ze(t, e) {
    var n, r;
    return We(this, void 0, void 0, (function*() {
        const {provider: i} = t.requestManager;
        let o;
        const a = yield dn(t, He);
        return o = (null === (r = (n = i).supportsSubscriptions) || void 0 === r ? void 0 : r.call(n)) && t.enableExperimentalFeatures.useSubscriptionWhenCheckingBlockTimeout ? yield function(t, e, n) {
            var r;
            return We(this, void 0, void 0, (function*() {
                let i, o, a = !0;
                function s(r, i) {
                    o.clean(), a = !1;
                    const [s, u] = Ue(t, e, n);
                    o.clean = u.clean, s.catch((t => r(t)));
                }
                try {
                    i = yield null === (r = t.subscriptionManager) || void 0 === r ? void 0 : r.subscribe("newHeads"), 
                    o = {
                        clean: () => {
                            var e;
                            i.id && (null === (e = t.subscriptionManager) || void 0 === e || e.removeSubscription(i).then((() => {})).catch((() => {})));
                        }
                    };
                } catch (u) {
                    return Ue(t, e, n);
                }
                return [ new Promise(((r, o) => {
                    try {
                        i.on("data", (r => {
                            if (a = !1, !(null == r ? void 0 : r.number)) return;
                            const i = Number(BigInt(r.number) - BigInt(e));
                            i >= t.transactionBlockTimeout && o(new p({
                                starterBlockNumber: e,
                                numberOfBlocks: i,
                                transactionHash: n
                            }));
                        })), i.on("error", (t => {
                            s(o);
                        }));
                    } catch (u) {
                        s(o);
                    }
                    setTimeout((() => {
                        a && s(o);
                    }), 1e3 * t.blockHeaderTimeout);
                })), o ];
            }));
        }(t, a, e) : Ue(t, a, e), o;
    }));
}

var _e = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

function Je(t, e, n) {
    return _e(this, void 0, void 0, (function*() {
        const [r, i] = Zt(t.transactionSendTimeout, new g({
            numberOfSeconds: t.transactionSendTimeout / 1e3,
            transactionHash: n
        })), [o, a] = yield ze(t, n);
        try {
            return yield Promise.race([ e(), i, o ]);
        } finally {
            clearTimeout(r), a.clean();
        }
    }));
}

var Ke = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

function Ve(t, e, n, r) {
    var i;
    return Ke(this, void 0, void 0, (function*() {
        const o = null !== (i = t.transactionReceiptPollingInterval) && void 0 !== i ? i : t.transactionPollingInterval, [a, s] = te((() => Ke(this, void 0, void 0, (function*() {
            try {
                return (null != r ? r : fn)(t, e, n);
            } catch (i) {
                return;
            }
        }))), o), [u, c] = Zt(t.transactionPollingTimeout, new b({
            numberOfSeconds: t.transactionPollingTimeout / 1e3,
            transactionHash: e
        })), [d, l] = yield ze(t, e);
        try {
            return yield Promise.race([ a, c, d ]);
        } finally {
            u && clearTimeout(u), s && clearInterval(s), l.clean();
        }
    }));
}

var $e = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

const Qe = ({web3Context: t, transactionReceipt: e, transactionPromiEvent: n, customTransactionReceiptSchema: r, returnFormat: i}) => {
    var o;
    let a = 1;
    const s = setInterval((() => {
        $e(void 0, void 0, void 0, (function*() {
            if (a >= t.transactionConfirmationBlocks) return void clearInterval(s);
            const o = yield et(t.requestManager, ee(BigInt(e.blockNumber) + BigInt(a)), !1);
            (null == o ? void 0 : o.hash) && (a += 1, n.emit("confirmation", {
                confirmations: Kt({
                    format: "uint"
                }, a, i),
                receipt: Kt(null != r ? r : Se, e, i),
                latestBlockHash: Kt({
                    format: "bytes32"
                }, o.hash, i)
            }));
        }));
    }), null !== (o = t.transactionReceiptPollingInterval) && void 0 !== o ? o : t.transactionPollingInterval);
};

var Xe = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

function Ye(t, e, n, r, i, o) {
    if (_(n) || _(n.blockHash)) throw new w({
        receipt: n,
        blockHash: Kt({
            format: "bytes32"
        }, null == n ? void 0 : n.blockHash, i),
        transactionHash: Kt({
            format: "bytes32"
        }, r, i)
    });
    if (!n.blockNumber) throw new x({
        receipt: n
    });
    e.emit("confirmation", {
        confirmations: Kt({
            format: "uint"
        }, 1, i),
        receipt: Kt(null != o ? o : Se, n, i),
        latestBlockHash: Kt({
            format: "bytes32"
        }, n.blockHash, i)
    });
    const a = t.requestManager.provider;
    a && "supportsSubscriptions" in a && a.supportsSubscriptions() ? (({web3Context: t, transactionReceipt: e, transactionPromiEvent: n, customTransactionReceiptSchema: r, returnFormat: i}) => {
        let o, a = !0;
        setImmediate((() => {
            var s;
            null === (s = t.subscriptionManager) || void 0 === s || s.subscribe("newHeads").then((s => {
                s.on("data", (u => Xe(void 0, void 0, void 0, (function*() {
                    var c;
                    if (a = !1, !(null == u ? void 0 : u.number) || // For some cases, the on-data event is fired couple times for the same block!
                    // This needs investigation but seems to be because of multiple `subscription.on('data'...)` even this should not cause that.
                    o === (null == u ? void 0 : u.parentHash)) return;
                    o = null == u ? void 0 : u.parentHash;
                    const d = BigInt(u.number) - BigInt(e.blockNumber) + BigInt(1);
                    n.emit("confirmation", {
                        confirmations: Kt({
                            format: "uint"
                        }, d, i),
                        receipt: Kt(null != r ? r : Se, e, i),
                        latestBlockHash: Kt({
                            format: "bytes32"
                        }, u.parentHash, i)
                    }), d >= t.transactionConfirmationBlocks && (yield null === (c = t.subscriptionManager) || void 0 === c ? void 0 : c.removeSubscription(s));
                })))), s.on("error", (() => Xe(void 0, void 0, void 0, (function*() {
                    var o;
                    yield null === (o = t.subscriptionManager) || void 0 === o ? void 0 : o.removeSubscription(s), 
                    a = !1, Qe({
                        web3Context: t,
                        transactionReceipt: e,
                        transactionPromiEvent: n,
                        customTransactionReceiptSchema: r,
                        returnFormat: i
                    });
                }))));
            })).catch((() => {
                a = !1, Qe({
                    web3Context: t,
                    transactionReceipt: e,
                    customTransactionReceiptSchema: r,
                    transactionPromiEvent: n,
                    returnFormat: i
                });
            }));
        })), setTimeout((() => {
            a && Qe({
                web3Context: t,
                transactionReceipt: e,
                transactionPromiEvent: n,
                returnFormat: i
            });
        }), 1e3 * t.blockHeaderTimeout);
    })({
        web3Context: t,
        transactionReceipt: n,
        transactionPromiEvent: e,
        customTransactionReceiptSchema: o,
        returnFormat: i
    }) : Qe({
        web3Context: t,
        transactionReceipt: n,
        transactionPromiEvent: e,
        customTransactionReceiptSchema: o,
        returnFormat: i
    });
}

var Ze = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

function tn(t, e, n, r = t.defaultReturnFormat) {
    return Ze(this, void 0, void 0, (function*() {
        try {
            return void (yield pn(t, e, t.defaultBlock, r));
        } catch (i) {
            return ((t, e) => {
                var n, r, i, o, a;
                if (t instanceof P && t.cause instanceof F) {
                    if (void 0 !== e) {
                        const i = e.filter((t => ue(t)));
                        return ce(i, t.cause), {
                            reason: t.cause.message,
                            signature: null === (n = t.cause.data) || void 0 === n ? void 0 : n.slice(0, 10),
                            data: null === (r = t.cause.data) || void 0 === r ? void 0 : r.substring(10),
                            customErrorName: t.cause.errorName,
                            customErrorDecodedSignature: t.cause.errorSignature,
                            customErrorArguments: t.cause.errorArgs
                        };
                    }
                    return {
                        reason: t.cause.message,
                        signature: null === (i = t.cause.data) || void 0 === i ? void 0 : i.slice(0, 10),
                        data: null === (o = t.cause.data) || void 0 === o ? void 0 : o.substring(10)
                    };
                }
                if (t instanceof k && !Array.isArray(null === (a = t.cause) || void 0 === a ? void 0 : a.errors) && void 0 !== t.cause) return t.cause.message;
                throw t;
            })(i, n);
        }
    }));
}

var en = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

function nn(t, e, n, r, i, o) {
    return en(this, void 0, void 0, (function*() {
        let r, a = o;
        if (void 0 === a && t.handleRevert && void 0 !== e && (a = yield tn(t, e, i)), void 0 === a) r = new R(n); else if ("string" == typeof a) r = new j(a, void 0, n); else if (void 0 !== a.customErrorName && void 0 !== a.customErrorDecodedSignature && void 0 !== a.customErrorArguments) {
            const t = a;
            r = new C(t.reason, t.customErrorName, t.customErrorDecodedSignature, t.customErrorArguments, t.signature, n, t.data);
        } else r = new j(a.reason, a.signature, n, a.data);
        return r;
    }));
}

const rn = (t, e, r, i = n) => {
    var o, a, s, u, c;
    let d = Object.assign({}, t);
    const l = Kt(je, e, i);
    if ([ Me, "allEvents" ].includes(d.name)) {
        const t = r.find((t => t.signature === e.topics[0]));
        d = t || {
            anonymous: !0
        };
    }
    if (d.inputs = null !== (a = null !== (o = d.inputs) && void 0 !== o ? o : t.inputs) && void 0 !== a ? a : [], 
    !d.anonymous) {
        let t = 0;
        (null !== (s = d.inputs) && void 0 !== s ? s : []).forEach((e => {
            e.indexed && (t += 1);
        })), t > 0 && (null == e ? void 0 : e.topics) && (null == e ? void 0 : e.topics.length) !== t + 1 && (d = Object.assign(Object.assign({}, d), {
            anonymous: !0,
            inputs: []
        }));
    }
    const f = d.anonymous ? e.topics : (null !== (u = e.topics) && void 0 !== u ? u : []).slice(1);
    return Object.assign(Object.assign({}, l), {
        returnValues: de([ ...null !== (c = d.inputs) && void 0 !== c ? c : [] ], e.data, f),
        event: d.name,
        signature: !d.anonymous && e.topics && 0 !== e.topics.length && e.topics[0] ? e.topics[0] : void 0,
        raw: {
            data: e.data,
            topics: e.topics
        }
    });
};

var on = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

class an {
    constructor({options: t, web3Context: e, promiEvent: n, returnFormat: r}) {
        this.options = {
            checkRevertBeforeSending: !0
        }, this.options = t, this.web3Context = e, this.promiEvent = n, this.returnFormat = r;
    }
    getReceiptWithEvents(t) {
        var e, n;
        const r = Object.assign({}, null != t ? t : {});
        if ((null === (e = this.options) || void 0 === e ? void 0 : e.contractAbi) && r.logs && r.logs.length > 0) {
            r.events = {};
            for (const t of r.logs) {
                const e = rn(Te, t, null === (n = this.options) || void 0 === n ? void 0 : n.contractAbi, this.returnFormat);
                e.event && (r.events[e.event] = e);
            }
        }
        return r;
    }
    checkRevertBeforeSending(t) {
        return on(this, void 0, void 0, (function*() {
            if (!1 !== this.options.checkRevertBeforeSending) {
                let e = t;
                _(t.data) && _(t.input) && _(t.gas) && (e = Object.assign(Object.assign({}, t), {
                    gas: 21e3
                }));
                const n = yield tn(this.web3Context, e, this.options.contractAbi);
                if (void 0 !== n) throw yield nn(this.web3Context, t, void 0, 0, this.options.contractAbi, n);
            }
        }));
    }
    emitSending(t) {
        this.promiEvent.listenerCount("sending") > 0 && this.promiEvent.emit("sending", t);
    }
    populateGasPrice({transactionFormatted: e, transaction: n}) {
        var r;
        return on(this, void 0, void 0, (function*() {
            let i = e;
            return this.web3Context.config.ignoreGasPricing || (null === (r = this.options) || void 0 === r ? void 0 : r.ignoreGasPricing) || !_(e.gasPrice) || !_(n.maxPriorityFeePerGas) && !_(n.maxFeePerGas) || (i = Object.assign(Object.assign({}, e), yield Ee(e, this.web3Context, t))), 
            i;
        }));
    }
    signAndSend({wallet: t, tx: e}) {
        return on(this, void 0, void 0, (function*() {
            if (t) {
                const n = yield t.signTransaction(e);
                return Je(this.web3Context, (() => on(this, void 0, void 0, (function*() {
                    return nt(this.web3Context.requestManager, n.rawTransaction);
                }))), n.transactionHash);
            }
            return Je(this.web3Context, (() => on(this, void 0, void 0, (function*() {
                return rt(this.web3Context.requestManager, e);
            }))));
        }));
    }
    emitSent(t) {
        this.promiEvent.listenerCount("sent") > 0 && this.promiEvent.emit("sent", t);
    }
    emitTransactionHash(t) {
        this.promiEvent.listenerCount("transactionHash") > 0 && this.promiEvent.emit("transactionHash", t);
    }
    emitReceipt(t) {
        this.promiEvent.listenerCount("receipt") > 0 && this.promiEvent.emit("receipt", 
        // @ts-expect-error unknown type fix
        t);
    }
    handleError({error: t, tx: e}) {
        var n;
        return on(this, void 0, void 0, (function*() {
            let r = t;
            return r instanceof P && this.web3Context.handleRevert && (r = yield nn(this.web3Context, e, void 0, 0, null === (n = this.options) || void 0 === n ? void 0 : n.contractAbi)), 
            (r instanceof k || r instanceof P || r instanceof C || r instanceof R || r instanceof j || r instanceof b) && this.promiEvent.listenerCount("error") > 0 && this.promiEvent.emit("error", r), 
            r;
        }));
    }
    emitConfirmation({receipt: t, transactionHash: e, customTransactionReceiptSchema: n}) {
        this.promiEvent.listenerCount("confirmation") > 0 && Ye(this.web3Context, this.promiEvent, t, e, this.returnFormat, n);
    }
    handleResolve({receipt: t, tx: e}) {
        var n, r, i;
        return on(this, void 0, void 0, (function*() {
            if (null === (n = this.options) || void 0 === n ? void 0 : n.transactionResolver) return null === (r = this.options) || void 0 === r ? void 0 : r.transactionResolver(t);
            if (t.status === BigInt(0)) {
                const n = yield nn(this.web3Context, e, 
                // @ts-expect-error unknown type fix
                t, 0, null === (i = this.options) || void 0 === i ? void 0 : i.contractAbi);
                throw this.promiEvent.listenerCount("error") > 0 && this.promiEvent.emit("error", n), 
                n;
            }
            return t;
        }));
    }
}

var sn = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

const un = t => sn(void 0, void 0, void 0, (function*() {
    return it(t.requestManager);
}));

function cn(t, e) {
    return sn(this, void 0, void 0, (function*() {
        const n = yield at(t.requestManager);
        return Kt({
            format: "uint"
        }, n, null != e ? e : t.defaultReturnFormat);
    }));
}

function dn(t, e) {
    return sn(this, void 0, void 0, (function*() {
        const n = yield ut(t.requestManager);
        return Kt({
            format: "uint"
        }, n, null != e ? e : t.defaultReturnFormat);
    }));
}

function ln(e, n = e.defaultBlock, r = !1, i) {
    var o;
    return sn(this, void 0, void 0, (function*() {
        let a;
        if (Y(n)) {
            const i = Kt({
                format: "bytes32"
            }, n, t);
            a = yield ft(e.requestManager, i, r);
        } else {
            const i = X(n) ? n : Kt({
                format: "uint"
            }, n, t);
            a = yield et(e.requestManager, i, r);
        }
        const s = Kt(ke, a, null != i ? i : e.defaultReturnFormat);
        if (!_(s)) {
            return Object.assign(Object.assign({}, s), {
                transactions: null !== (o = s.transactions) && void 0 !== o ? o : []
            });
        }
        return s;
    }));
}

function fn(t, e, r) {
    return sn(this, void 0, void 0, (function*() {
        const i = Kt({
            format: "bytes32"
        }, e, n);
        let o;
        try {
            o = yield Ft(t.requestManager, i);
        } catch (a) {
            if ("object" != typeof a || _(a) || !("message" in a) || "transaction indexing is in progress" !== a.message) throw a;
        }
        return _(o) ? o : Kt(Se, o, null != r ? r : t.defaultReturnFormat);
    }));
}

function mn(e, n, r = e.defaultBlock, i) {
    return sn(this, void 0, void 0, (function*() {
        const o = X(r) ? r : Kt({
            format: "uint"
        }, r, t), a = yield kt(e.requestManager, n, o);
        return Kt({
            format: "uint"
        }, a, null != i ? i : e.defaultReturnFormat);
    }));
}

function hn(e, n, r, i = {
    checkRevertBeforeSending: !0
}, a) {
    const s = new o(((o, u) => {
        setImmediate((() => {
            (() => {
                sn(this, void 0, void 0, (function*() {
                    const c = new an({
                        web3Context: e,
                        promiEvent: s,
                        options: i,
                        returnFormat: r
                    });
                    let d = Object.assign({}, n);
                    _(a) || (d = yield a.processTransaction(d));
                    let l = Oe(Object.assign(Object.assign({}, d), {
                        from: Le("from", e, d),
                        to: Le("to", e, d)
                    }), t, {
                        transactionSchema: e.config.customTransactionSchema
                    });
                    try {
                        let t;
                        l = yield c.populateGasPrice({
                            transaction: d,
                            transactionFormatted: l
                        }), yield c.checkRevertBeforeSending(l), c.emitSending(l), e.wallet && !_(l.from) && (t = e.wallet.get(l.from));
                        const n = yield c.signAndSend({
                            wallet: t,
                            tx: l
                        }), i = Kt({
                            format: "bytes32"
                        }, n, null != r ? r : e.defaultReturnFormat);
                        c.emitSent(l), c.emitTransactionHash(i);
                        const a = yield Ve(e, n, null != r ? r : e.defaultReturnFormat), s = c.getReceiptWithEvents(Kt(Se, a, null != r ? r : e.defaultReturnFormat));
                        c.emitReceipt(s), o(yield c.handleResolve({
                            receipt: s,
                            tx: l
                        })), c.emitConfirmation({
                            receipt: s,
                            transactionHash: n
                        });
                    } catch (f) {
                        u(yield c.handleError({
                            error: f,
                            tx: l
                        }));
                    }
                }));
            })();
        }));
    }));
    return s;
}

function vn(e, n, r, i = {
    checkRevertBeforeSending: !0
}) {
    const a = new o(((o, s) => {
        setImmediate((() => {
            (() => {
                sn(this, void 0, void 0, (function*() {
                    const u = new an({
                        web3Context: e,
                        promiEvent: a,
                        options: i,
                        returnFormat: r
                    }), c = Kt({
                        format: "bytes"
                    }, n, t), d = Ut.fromSerializedData(ne(Qt(c))), l = Object.assign(Object.assign({}, d.toJSON()), {
                        // Some providers will default `from` to address(0) causing the error
                        // reported from `eth_call` to not be the reason the user's tx failed
                        // e.g. `eth_call` will return an Out of Gas error for a failed
                        // smart contract execution contract, because the sender, address(0),
                        // has no balance to pay for the gas of the transaction execution
                        from: d.getSenderAddress().toString()
                    });
                    try {
                        const {v: t, r: n, s: i} = l, a = function(t, e) {
                            var n = {};
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                var i = 0;
                                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                            }
                            return n;
                        }(l, [ "v", "r", "s" ]);
                        yield u.checkRevertBeforeSending(a), u.emitSending(c);
                        const s = yield Je(e, (() => sn(this, void 0, void 0, (function*() {
                            return nt(e.requestManager, c);
                        }))));
                        u.emitSent(c);
                        const d = Kt({
                            format: "bytes32"
                        }, s, null != r ? r : e.defaultReturnFormat);
                        u.emitTransactionHash(d);
                        const f = yield Ve(e, s, null != r ? r : e.defaultReturnFormat), m = u.getReceiptWithEvents(Kt(Se, f, null != r ? r : e.defaultReturnFormat));
                        u.emitReceipt(m), o(yield u.handleResolve({
                            receipt: m,
                            tx: l
                        })), u.emitConfirmation({
                            receipt: m,
                            transactionHash: s
                        });
                    } catch (f) {
                        s(yield u.handleError({
                            error: f,
                            tx: l
                        }));
                    }
                }));
            })();
        }));
    }));
    return a;
}

function yn(e, n, r = e.defaultReturnFormat) {
    return sn(this, void 0, void 0, (function*() {
        const i = yield jt(e.requestManager, Oe(n, t, {
            transactionSchema: e.config.customTransactionSchema
        }));
        return Z(i) ? function(t, e, n = {
            fillInputAndData: !1
        }) {
            return {
                raw: Kt({
                    format: "bytes"
                }, t, e),
                tx: Oe(Object.assign(Object.assign({}, Ut.fromSerializedData(Qt(t)).toJSON()), {
                    hash: $t(Xt(Qt(t))),
                    type: (r = Qt(t), r[0] > 127 ? "0x0" : Jt(r[0]))
                }), e, {
                    fillInputAndData: n.fillInputAndData,
                    transactionSchema: n.transactionSchema
                })
            };
            var r;
        }(i, r, {
            fillInputAndData: !0
        }) : {
            raw: Kt({
                format: "bytes"
            }, i.raw, r),
            tx: Oe(i.tx, r, {
                transactionSchema: e.config.customTransactionSchema,
                fillInputAndData: !0
            })
        };
    }));
}

function pn(e, n, r = e.defaultBlock, i = e.defaultReturnFormat) {
    return sn(this, void 0, void 0, (function*() {
        const o = X(r) ? r : Kt({
            format: "uint"
        }, r, t), a = yield Ct(e.requestManager, Oe(n, t, {
            transactionSchema: e.config.customTransactionSchema
        }), o);
        return Kt({
            format: "bytes"
        }, a, i);
    }));
}

function gn(e, n, r = e.defaultBlock, i) {
    return sn(this, void 0, void 0, (function*() {
        const o = Oe(n, t, {
            transactionSchema: e.config.customTransactionSchema
        }), a = X(r) ? r : Kt({
            format: "uint"
        }, r, t), s = yield St(e.requestManager, o, a);
        return Kt({
            format: "uint"
        }, s, null != i ? i : e.defaultReturnFormat);
    }));
}

function bn(t, e, n) {
    return sn(this, void 0, void 0, (function*() {
        let {toBlock: r, fromBlock: i} = e;
        _(r) || "number" != typeof r && "bigint" != typeof r || (r = ee(r)), _(i) || "number" != typeof i && "bigint" != typeof i || (i = ee(i));
        const o = Object.assign(Object.assign({}, e), {
            fromBlock: i,
            toBlock: r
        });
        return (yield Bt(t.requestManager, o)).map((e => "string" == typeof e ? e : Kt(je, e, null != n ? n : t.defaultReturnFormat)));
    }));
}

function wn(t, e) {
    return sn(this, void 0, void 0, (function*() {
        const n = yield Gt(t.requestManager);
        return Kt({
            format: "uint"
        }, 
        // Response is number in hex formatted string
        n, null != e ? e : t.defaultReturnFormat);
    }));
}

function xn(e, n, r = e.defaultBlock, i) {
    return sn(this, void 0, void 0, (function*() {
        const o = X(r) ? r : Kt({
            format: "uint"
        }, r, t), a = yield Mt(e.requestManager, Oe(n, t, {
            transactionSchema: e.config.customTransactionSchema
        }), o);
        return Kt(ge, a, null != i ? i : e.defaultReturnFormat);
    }));
}

class Pn extends a {
    _buildSubscriptionParams() {
        return [ "logs", this.args ];
    }
    formatSubscriptionResult(t) {
        return Kt(je, t, super.returnFormat);
    }
}

class Fn extends a {
    // eslint-disable-next-line
    _buildSubscriptionParams() {
        return [ "newPendingTransactions" ];
    }
    formatSubscriptionResult(t) {
        return Kt({
            format: "string"
        }, t, super.returnFormat);
    }
}

class kn extends a {
    // eslint-disable-next-line
    _buildSubscriptionParams() {
        return [ "newHeads" ];
    }
    formatSubscriptionResult(t) {
        return Kt(Re, t, super.returnFormat);
    }
}

class Rn extends a {
    // eslint-disable-next-line
    _buildSubscriptionParams() {
        return [ "syncing" ];
    }
    _processSubscriptionResult(t) {
        if ("boolean" == typeof t) this.emit("changed", t); else {
            const e = Object.fromEntries(Object.entries((null == t ? void 0 : t.status) || t).map((([t, e]) => [ t.charAt(0).toLowerCase() + t.substring(1), e ])));
            this.emit("changed", t.syncing), this.emit("data", Kt(Ce, e, super.returnFormat));
        }
    }
}

var jn = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

const Cn = {
    logs: Pn,
    newPendingTransactions: Fn,
    newHeads: kn,
    syncing: Rn,
    pendingTransactions: Fn,
    newBlockHeaders: kn
};

class Sn extends s {
    constructor(t) {
        "string" == typeof t || u(t) ? super({
            provider: t,
            registeredSubscriptions: Cn
        }) : t.registeredSubscriptions ? super(t) : (super(Object.assign(Object.assign({}, t), {
            registeredSubscriptions: Cn
        })), this.getFeeData = this.calculateFeeData);
    }
    setTransactionMiddleware(t) {
        this.transactionMiddleware = t;
    }
    getTransactionMiddleware() {
        return this.transactionMiddleware;
    }
    /**
   * @returns Returns the ethereum protocol version of the node.
   *
   * ```ts
   * web3.eth.getProtocolVersion().then(console.log);
   * > "63"
   * ```
   */    getProtocolVersion() {
        return jn(this, void 0, void 0, (function*() {
            return Ht(this.requestManager);
        }));
    }
    // TODO Add returnFormat parameter
    /**
   * Checks if the node is currently syncing.
   *
   * @returns Either a {@link SyncingStatusAPI}, or `false`.
   *
   * ```ts
   * web3.eth.isSyncing().then(console.log);
   * > {
   *     startingBlock: 100,
   *     currentBlock: 312,
   *     highestBlock: 512,
   *     knownStates: 234566,
   *     pulledStates: 123455
   * }
   * ```
   */
    isSyncing() {
        return jn(this, void 0, void 0, (function*() {
            return it(this.requestManager);
        }));
    }
    // TODO consider adding returnFormat parameter (to format address as bytes)
    /**
   * @returns Returns the coinbase address to which mining rewards will go.
   *
   * ```ts
   * web3.eth.getCoinbase().then(console.log);
   * > "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"
   * ```
   */
    getCoinbase() {
        return jn(this, void 0, void 0, (function*() {
            return qt(this.requestManager);
        }));
    }
    /**
   * Checks whether the node is mining or not.
   *
   * @returns `true` if the node is mining, otherwise `false`.
   *
   * ```ts
   * web3.eth.isMining().then(console.log);
   * > true
   * ```
   */    isMining() {
        return jn(this, void 0, void 0, (function*() {
            return Et(this.requestManager);
        }));
    }
    /**
   * @deprecated Will be removed in the future, please use {@link Web3Eth.getHashRate} method instead.
   *
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of hashes per second that the node is mining with.
   *
   * ```ts
   * web3.eth.getHashrate().then(console.log);
   * > 493736n
   *
   * web3.eth.getHashrate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x788a8"
   * ```
   */    getHashrate(t) {
        var e;
        return void 0 === t && (t = null !== (e = this.defaultReturnFormat) && void 0 !== e ? e : n), 
        jn(this, void 0, void 0, (function*() {
            return this.getHashRate(t);
        }));
    }
    /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of hashes per second that the node is mining with.
   *
   * ```ts
   * web3.eth.getHashRate().then(console.log);
   * > 493736n
   *
   * web3.eth.getHashRate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x788a8"
   * ```
   */    getHashRate(t = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(t, e) {
                return sn(this, void 0, void 0, (function*() {
                    const n = yield ot(t.requestManager);
                    return Kt({
                        format: "uint"
                    }, n, null != e ? e : t.defaultReturnFormat);
                }));
            }(this, t);
        }));
    }
    /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The gas price determined by the last few blocks median gas price.
   *
   * ```ts
   * web3.eth.getGasPrice().then(console.log);
   * > 20000000000n
   *
   * web3.eth.getGasPrice({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x4a817c800"
   * ```
   */    getGasPrice(t = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return cn(this, t);
        }));
    }
    /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns the current maxPriorityFeePerGas per gas in wei.
   *
   * ```ts
   * web3.eth.getMaxPriorityFeePerGas().then(console.log);
   * > 20000000000n
   *
   * web3.eth.getMaxPriorityFeePerGas({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x4a817c800"
   * ```
   */    getMaxPriorityFeePerGas(t = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(t, e) {
                return sn(this, void 0, void 0, (function*() {
                    const n = yield st(t.requestManager);
                    return Kt({
                        format: "uint"
                    }, n, null != e ? e : t.defaultReturnFormat);
                }));
            }(this, t);
        }));
    }
    /**
   * Calculates the current Fee Data.
   * If the node supports EIP-1559, then `baseFeePerGas` and `maxPriorityFeePerGas` will be returned along with the calculated `maxFeePerGas` value.
   * `maxFeePerGas` is calculated as `baseFeePerGas` * `baseFeePerGasFactor` + `maxPriorityFeePerGas`.
   * If the node does not support EIP-1559, then the `gasPrice` will be returned and the other values will be undefined.
   *
   * @param baseFeePerGasFactor (optional) The factor to multiply the `baseFeePerGas` with when calculating `maxFeePerGas`, if the node supports EIP-1559. The default value is 2.
   * @param alternativeMaxPriorityFeePerGas (optional) The alternative `maxPriorityFeePerGas` to use when calculating `maxFeePerGas`, if the node supports EIP-1559, but does not support the method `eth_maxPriorityFeePerGas`. The default value is 1 gwei.
   * @returns The current fee data.
   *
   * ```ts
   * web3.eth.calculateFeeData().then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 60000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * web3.eth.calculateFeeData(1n).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 40000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * web3.eth.calculateFeeData(3n).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 80000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   * ```
   */    calculateFeeData(t = BigInt(2), e = re.Gwei) {
        var n;
        return jn(this, void 0, void 0, (function*() {
            const r = yield this.getBlock(void 0, !1), i = null !== (n = null == r ? void 0 : r.baseFeePerGas) && void 0 !== n ? n : void 0;
            let o, a, s;
            try {
                o = yield this.getGasPrice();
            } catch (u) {}
            try {
                a = yield this.getMaxPriorityFeePerGas();
            } catch (u) {}
            return i && (a = null != a ? a : e, s = i * t + a), {
                gasPrice: o,
                maxFeePerGas: s,
                maxPriorityFeePerGas: a,
                baseFeePerGas: i
            };
        }));
    }
    /**
   * @returns A list of accounts the node controls (addresses are checksummed).
   *
   * ```ts
   * web3.eth.getAccounts().then(console.log);
   * > ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"]
   * ```
   */    getAccounts() {
        var t;
        return jn(this, void 0, void 0, (function*() {
            return (null !== (t = yield At(this.requestManager)) && void 0 !== t ? t : []).map((t => ie(t)));
        }));
    }
    /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The current block number.
   *
   * ```ts
   * web3.eth.getBlockNumber().then(console.log);
   * > 2744n
   *
   * web3.eth.getBlockNumber({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0xab8"
   * ```
   */    getBlockNumber(t = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return dn(this, t);
        }));
    }
    /**
   * Get the balance of an address at a given block.
   *
   * @param address The address to get the balance of.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the balance query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The current balance for the given address in `wei`.
   *
   * ```ts
   * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1000000000000n
   *
   * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > "0xe8d4a51000"
   * ```
   */    getBalance(e, n = this.defaultBlock, r = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n, r = e.defaultBlock, i) {
                return sn(this, void 0, void 0, (function*() {
                    const o = X(r) ? r : Kt({
                        format: "uint"
                    }, r, t), a = yield ct(e.requestManager, n, o);
                    return Kt({
                        format: "uint"
                    }, a, null != i ? i : e.defaultReturnFormat);
                }));
            }(this, e, n, r);
        }));
    }
    /**
   * Get the storage at a specific position of an address.
   *
   * @param address The address to get the storage from.
   * @param storageSlot The index position of the storage.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the storage query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The value in storage at the given position.
   *
   * ```ts
   * web3.eth.getStorageAt("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234", 0).then(console.log);
   * > "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"
   *
   * web3.eth.getStorageAt(
   *      "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234",
   *      0,
   *      undefined,
   *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
   * ).then(console.log);
   * > Uint8Array(31) [
   *       3, 52,  86, 115,  33,  35, 255, 255,
   *       35, 66,  52,  45, 209,  35,  66,  67,
   *       67, 36,  35,  66,  52, 253,  35,  79,
   *       210, 63, 212, 242,  61,  66,  52
   *    ]
   * ```
   */    getStorageAt(e, n, r = this.defaultBlock, i = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n, r, i = e.defaultBlock, o) {
                return sn(this, void 0, void 0, (function*() {
                    const a = Kt({
                        format: "uint"
                    }, r, t), s = X(i) ? i : Kt({
                        format: "uint"
                    }, i, t), u = yield dt(e.requestManager, n, a, s);
                    return Kt({
                        format: "bytes"
                    }, u, null != o ? o : e.defaultReturnFormat);
                }));
            }(this, e, n, r, i);
        }));
    }
    /**
   * Get the code at a specific address.
   *
   * @param address The address to get the code from.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the code query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The [data](https://ethereum.org/en/developers/docs/transactions/#the-data-field) at the provided `address`.
   *
   * ```ts
   * web3.eth.getCode("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234").then(console.log);
   * > "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
   *
   * web3.eth.getCode(
   *      "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *      undefined,
   *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
   * ).then(console.log);
   * > Uint8Array(50) [
   *   96,  1,  96,   0, 128, 53, 129, 26, 129, 129, 129,
   *   20, 96,  18,  87, 131,  1,   0, 91,  96,  27,  96,
   *   1, 53,  96,  37,  86, 91, 128, 96,   0,  82,  96,
   *   32, 96,   0, 242,  91, 96,   0, 96,   7, 130,   2,
   *   144, 80, 145, 144,  80, 86
   * ]
   * ```
   */    getCode(e, n = this.defaultBlock, r = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n, r = e.defaultBlock, i) {
                return sn(this, void 0, void 0, (function*() {
                    const o = X(r) ? r : Kt({
                        format: "uint"
                    }, r, t), a = yield lt(e.requestManager, n, o);
                    return Kt({
                        format: "bytes"
                    }, a, null != i ? i : e.defaultReturnFormat);
                }));
            }(this, e, n, r);
        }));
    }
    /**
   * Retrieves a {@link Block} matching the provided block number, block hash or block tag.
   *
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param hydrated If specified `true`, the returned block will contain all transactions as objects. If `false` it will only contain transaction hashes.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted (does not format transaction objects or hashes).
   * @returns A {@link Block} object matching the provided block number or block hash.
   *
   * ```ts
   * web3.eth.getBlock(0).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1n,
   *    number: 0n,
   *    gasLimit: 30000000n,
   *    gasUsed: 0n,
   *    timestamp: 1658281638n,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0n,
   *    totalDifficulty: 1n,
   *    baseFeePerGas: 1000000000n,
   *    size: 514n,
   *    transactions: [],
   *    uncles: []
   *  }
   *
   * web3.eth.getBlock(
   *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
   *      false,
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1,
   *    number: 0,
   *    gasLimit: 30000000,
   *    gasUsed: 0,
   *    timestamp: 1658281638,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0,
   *    totalDifficulty: 1,
   *    baseFeePerGas: 1000000000,
   *    size: 514,
   *    transactions: [],
   *    uncles: []
   *  }
   * ```
   */    getBlock(t = this.defaultBlock, e = !1, n = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return ln(this, t, e, n);
        }));
    }
    /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of transactions in the provided block.
   *
   * ```ts
   * web3.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getBlockTransactionCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */    getBlockTransactionCount(e = this.defaultBlock, n = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n = e.defaultBlock, r) {
                return sn(this, void 0, void 0, (function*() {
                    let i;
                    if (Y(n)) {
                        const r = Kt({
                            format: "bytes32"
                        }, n, t);
                        i = yield mt(e.requestManager, r);
                    } else {
                        const r = X(n) ? n : Kt({
                            format: "uint"
                        }, n, t);
                        i = yield ht(e.requestManager, r);
                    }
                    return Kt({
                        format: "uint"
                    }, i, null != r ? r : e.defaultReturnFormat);
                }));
            }(this, e, n);
        }));
    }
    /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of [uncles](https://ethereum.org/en/glossary/#ommer) in the provided block.
   *
   * ```ts
   * web3.eth.getBlockUncleCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getBlockUncleCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */    getBlockUncleCount(e = this.defaultBlock, n = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n = e.defaultBlock, r) {
                return sn(this, void 0, void 0, (function*() {
                    let i;
                    if (Y(n)) {
                        const r = Kt({
                            format: "bytes32"
                        }, n, t);
                        i = yield vt(e.requestManager, r);
                    } else {
                        const r = X(n) ? n : Kt({
                            format: "uint"
                        }, n, t);
                        i = yield yt(e.requestManager, r);
                    }
                    return Kt({
                        format: "uint"
                    }, i, null != r ? r : e.defaultReturnFormat);
                }));
            }(this, e, n);
        }));
    }
    /**
   *
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param uncleIndex The index position of the uncle.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A blocks [uncle](https://ethereum.org/en/glossary/#ommer) by a given uncle index position.
   *
   * ```ts
   * web3.eth.getUncle(0, 1).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1n,
   *    number: 0n,
   *    gasLimit: 30000000n,
   *    gasUsed: 0n,
   *    timestamp: 1658281638n,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0n,
   *    totalDifficulty: 1n,
   *    baseFeePerGas: 1000000000n,
   *    size: 514n,
   *    transactions: [],
   *    uncles: []
   *  }
   *
   * web3.eth.getUncle(
   *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
   *      1,
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1,
   *    number: 0,
   *    gasLimit: 30000000,
   *    gasUsed: 0,
   *    timestamp: 1658281638,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0,
   *    totalDifficulty: 1,
   *    baseFeePerGas: 1000000000,
   *    size: 514,
   *    transactions: [],
   *    uncles: []
   *  }
   * ```
   */    getUncle(e = this.defaultBlock, n, r = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n = e.defaultBlock, r, i) {
                return sn(this, void 0, void 0, (function*() {
                    const o = Kt({
                        format: "uint"
                    }, r, t);
                    let a;
                    if (Y(n)) {
                        const r = Kt({
                            format: "bytes32"
                        }, n, t);
                        a = yield pt(e.requestManager, r, o);
                    } else {
                        const r = X(n) ? n : Kt({
                            format: "uint"
                        }, n, t);
                        a = yield gt(e.requestManager, r, o);
                    }
                    return Kt(ke, a, null != i ? i : e.defaultReturnFormat);
                }));
            }(this, e, n, r);
        }));
    }
    /**
   * @param transactionHash The hash of the desired transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired transaction object.
   *
   * ```ts
   * web3.eth.getTransaction('0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc').then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0n,
   *    nonce: 0n,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1n,
   *    transactionIndex: 0n,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1n,
   *    gas: 90000n,
   *    gasPrice: 2000000000n,
   *    input: '0x',
   *    v: 2709n,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   *
   * web3.eth.getTransaction(
   *     web3.utils.hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0,
   *    nonce: 0,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1,
   *    transactionIndex: 0,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1,
   *    gas: 90000,
   *    gasPrice: 2000000000,
   *    input: '0x',
   *    v: 2709,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   * ```
   */    getTransaction(t, e = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            const r = yield function(t, e, r = t.defaultReturnFormat) {
                return sn(this, void 0, void 0, (function*() {
                    const i = Kt({
                        format: "bytes32"
                    }, e, n), o = yield bt(t.requestManager, i);
                    return _(o) ? o : Oe(o, r, {
                        transactionSchema: t.config.customTransactionSchema,
                        fillInputAndData: !0
                    });
                }));
            }(this, t, e);
            if (!r) throw new B;
            return r;
        }));
    }
    /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A list of pending transactions.
   *
   * ```ts
   * web3.eth.getPendingTransactions().then(console.log);
   * > [
   *      {
   *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *          type: 0n,
   *          nonce: 0n,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0n,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1n,
   *          gas: 90000n,
   *          gasPrice: 2000000000n,
   *          input: '0x',
   *          v: 2709n,
   *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *      },
   *      {
   *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *          type: 0n,
   *          nonce: 1n,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0n,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1n,
   *          gas: 90000n,
   *          gasPrice: 2000000000n,
   *          input: '0x',
   *          v: 2710n,
   *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
   *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
   *      }
   *   ]
   *
   * * web3.eth.getPendingTransactions({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > [
   *      {
   *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *          type: 0,
   *          nonce: 0,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1,
   *          gas: 90000,
   *          gasPrice: 2000000000,
   *          input: '0x',
   *          v: 2709,
   *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *      },
   *      {
   *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *          type: 0,
   *          nonce: 1,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1,
   *          gas: 90000,
   *          gasPrice: 2000000000,
   *          input: '0x',
   *          v: 2710,
   *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
   *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
   *      }
   *   ]
   * ```
   */    getPendingTransactions(t = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(t, e) {
                return sn(this, void 0, void 0, (function*() {
                    return (yield wt(t.requestManager)).map((n => Oe(n, null != e ? e : t.defaultReturnFormat, {
                        transactionSchema: t.config.customTransactionSchema,
                        fillInputAndData: !0
                    })));
                }));
            }(this, t);
        }));
    }
    /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param transactionIndex The index position of the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired transaction object.
   *
   * ```ts
   * web3.eth.getTransactionFromBlock('0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00', 0).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0n,
   *    nonce: 0n,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1n,
   *    transactionIndex: 0n,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1n,
   *    gas: 90000n,
   *    gasPrice: 2000000000n,
   *    input: '0x',
   *    v: 2709n,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   *
   * web3.eth.getTransactionFromBlock(
   *     hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
   *     0,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0,
   *    nonce: 0,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1,
   *    transactionIndex: 0,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1,
   *    gas: 90000,
   *    gasPrice: 2000000000,
   *    input: '0x',
   *    v: 2709,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   * ```
   */    getTransactionFromBlock(e = this.defaultBlock, n, r = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n = e.defaultBlock, r, i) {
                return sn(this, void 0, void 0, (function*() {
                    const o = Kt({
                        format: "uint"
                    }, r, t);
                    let a;
                    if (Y(n)) {
                        const r = Kt({
                            format: "bytes32"
                        }, n, t);
                        a = yield xt(e.requestManager, r, o);
                    } else {
                        const r = X(n) ? n : Kt({
                            format: "uint"
                        }, n, t);
                        a = yield Pt(e.requestManager, r, o);
                    }
                    return _(a) ? a : Oe(a, null != i ? i : e.defaultReturnFormat, {
                        transactionSchema: e.config.customTransactionSchema,
                        fillInputAndData: !0
                    });
                }));
            }(this, e, n, r);
        }));
    }
    /**
   * @param transactionHash Hash of the transaction to retrieve the receipt for.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired {@link TransactionReceipt} object.
   *
   * ```ts
   * web3.eth.getTransactionReceipt("0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f").then(console.log);
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0n,
   *      blockNumber: 2n,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000n,
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      effectiveGasPrice: 2000000000n,
   *      type: 0n
   *  }
   *
   * web3.eth.getTransactionReceipt(
   *      "0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f",
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0,
   *      blockNumber: 2,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000,
   *      gasUsed: 21000,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1,
   *      effectiveGasPrice: 2000000000,
   *      type: 0n
   *  }
   * ```
   */    getTransactionReceipt(t, e = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            const n = yield fn(this, t, e);
            if (!n) throw new B;
            return n;
        }));
    }
    /**
   * @param address The address to get the number of transactions for.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of transactions sent from the provided address.
   *
   * ```ts
   * web3.eth.getTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getTransactionCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     undefined,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */    getTransactionCount(t, e = this.defaultBlock, n = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return mn(this, t, e, n);
        }));
    }
    /**
   * @param transaction The {@link Transaction}, {@link TransactionWithFromLocalWalletIndex}, {@link TransactionWithToLocalWalletIndex} or {@link TransactionWithFromAndToLocalWalletIndex} to send. __Note:__ In the `to` and `from` fields when hex strings are used, it is assumed they are addresses, for any other form (number, string number, etc.) it is assumed they are wallet indexes.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @param options A configuration object used to change the behavior of the `sendTransaction` method.
   * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
   * ```ts
   * const transaction = {
   *   from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *   to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *   value: '0x1'
   * }
   *
   * const transactionHash = await web3.eth.sendTransaction(transaction);
   * console.log(transactionHash);
   * > 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
   *
   * web3.eth.sendTransaction(transaction).then(console.log);
   * > 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
   *
   * web3.eth.sendTransaction(transaction).catch(console.log);
   * > <Some TransactionError>
   *
   * // Example using options.ignoreGasPricing = true
   * web3.eth.sendTransaction(transaction, undefined, { ignoreGasPricing: true }).then(console.log);
   * > 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
   * ```
   *
   *
   * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
   * - `sending`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
   * > {
   *    from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *    to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *    value: '0x1',
   *    gasPrice: '0x77359400',
   *    maxPriorityFeePerGas: undefined,
   *    maxFeePerGas: undefined
   * }
   * ```
   * - `sent`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('sent', sentTransaction => console.log(sentTransaction));
   * > {
   *    from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *    to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *    value: '0x1',
   *    gasPrice: '0x77359400',
   *    maxPriorityFeePerGas: undefined,
   *    maxFeePerGas: undefined
   * }
   * ```
   * - `transactionHash`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('transactionHash', transactionHash => console.log(transactionHash));
   * > 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
   * ```
   * - `receipt`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('receipt', receipt => console.log(receipt));
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0n,
   *      blockNumber: 2n,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000n,
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      effectiveGasPrice: 2000000000n,
   *      type: 0n
   * }
   * ```
   * - `confirmation`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('confirmation', confirmation => console.log(confirmation));
   * > {
   *     confirmations: 1n,
   *     receipt: {
   *         transactionHash: '0xb4a3a35ae0f3e77ef0ff7be42010d948d011b21a4e341072ee18717b67e99ab8',
   *         transactionIndex: 0n,
   *         blockNumber: 5n,
   *         blockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548',
   *         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *         cumulativeGasUsed: 21000n,
   *         gasUsed: 21000n,
   *         logs: [],
   *         logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *         status: 1n,
   *         effectiveGasPrice: 2000000000n,
   *         type: 0n
   *     },
   *     latestBlockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548'
   * }
   * ```
   * - `error`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('error', error => console.log);
   * > <Some TransactionError>
   * ```
   */    sendTransaction(t, e = this.defaultReturnFormat, n) {
        return hn(this, t, e, n, this.transactionMiddleware);
    }
    /**
   * @param transaction Signed transaction in one of the valid {@link Bytes} format.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @param options A configuration object used to change the behavior of the method
   * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
   * ```ts
   * const signedTransaction = "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   *
   * const transactionHash = await web3.eth.sendSignedTransaction(signedTransaction);
   * console.log(transactionHash);
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   *
   * web3.eth.sendSignedTransaction(signedTransaction).then(console.log);
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   *
   * web3.eth.sendSignedTransaction(signedTransaction).catch(console.log);
   * > <Some TransactionError>
   * ```
   *
   *
   * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
   * - `sending`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
   * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   * ```
   * - `sent`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('sent', sentTransaction => console.log(sentTransaction));
   * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   * ```
   * - `transactionHash`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('transactionHash', transactionHash => console.log(transactionHash));
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   * ```
   * - `receipt`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('receipt', receipt => console.log(receipt));
   * > {
   *      blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
   *      blockNumber: 1n,
   *      cumulativeGasUsed: 21000n,
   *      effectiveGasPrice: 1000000001n,
   *      from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
   *      transactionIndex: 0n,
   *      type: 0n
   * }
   * ```
   * - `confirmation`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('confirmation', confirmation => console.log(confirmation));
   * > {
   *     confirmations: 1n,
   *     receipt: {
   *          blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
   *          blockNumber: 1n,
   *          cumulativeGasUsed: 21000n,
   *          effectiveGasPrice: 1000000001n,
   *          from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *          gasUsed: 21000n,
   *          logs: [],
   *          logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *          status: 1n,
   *          to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *          transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
   *          transactionIndex: 0n,
   *          type: 0n
   *     },
   *     latestBlockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081'
   * }
   * ```
   * - `error`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('error', error => console.log(error));
   * > <Some TransactionError>
   * ```
   */    sendSignedTransaction(t, e = this.defaultReturnFormat, n) {
        return vn(this, t, e, n);
    }
    /**
   * @param message Data to sign in one of the valid {@link Bytes} format.
   * @param address Address to sign data with, can be an address or the index of a local wallet.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The signed `message`.
   *
   * ```ts
   * // Using an unlocked account managed by connected RPC client
   * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
   * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
   *
   * // Using an unlocked account managed by connected RPC client
   * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.UINT8ARRAY }).then(console.log);
   * > Uint8Array(65) [
   *    48, 117,  94, 214,  83, 150, 250, 207, 134, 197,  62,
   *    98,  23, 197,  43,  77, 174, 190, 114, 170,  73,  65,
   *   216, 150,  53,  64, 157, 228, 201, 199, 249,  70, 109,
   *    78, 154, 174, 199, 151, 127,   5, 233,  35, 136, 155,
   *    51, 192, 208, 221,  39, 215,  34, 107, 110, 111,  86,
   *   206, 115, 116, 101, 197, 207, 208,  75, 228,   0
   * ]
   * ```
   *
   * // Using an indexed account managed by local Web3 wallet
   * web3.eth.sign("0x48656c6c6f20776f726c64", 0).then(console.log);
   * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
   */    sign(t, e, r = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(t, e, r, i = t.defaultReturnFormat) {
                var o;
                return sn(this, void 0, void 0, (function*() {
                    const a = Kt({
                        format: "bytes"
                    }, e, n);
                    if (null === (o = t.wallet) || void 0 === o ? void 0 : o.get(r)) {
                        const e = t.wallet.get(r).sign(a);
                        return Kt(Be, e, i);
                    }
                    if ("number" == typeof r) throw new S(e, 'RPC method "eth_sign" does not support index signatures');
                    const s = yield Rt(t.requestManager, r, a);
                    return Kt({
                        format: "bytes"
                    }, s, i);
                }));
            }(this, t, e, r);
        }));
    }
    /**
   * @param transaction The transaction object to sign.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns {@link SignedTransactionInfoAPI}, an object containing the [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/#top) encoded signed transaction (accessed via the `raw` property) and the signed transaction object (accessed via the `tx` property).
   *
   * ```ts
   * const transaction = {
   *      from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *      to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *      value: '0x1',
   *      gas: '21000',
   *      gasPrice: await web3Eth.getGasPrice(),
   *      nonce: '0x1',
   *      type: '0x0'
   * }
   *
   * web3.eth.signTransaction(transaction).then(console.log);
   * > {
   *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *   tx: {
   *      type: 0n,
   *      nonce: 1n,
   *      gasPrice: 1000000001n,
   *      gas: 21000n,
   *      value: 1n,
   *      v: 2710n,
   *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
   *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      data: '0x'
   *   }
   * }
   *
   * web3.eth.signTransaction(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > {
   *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *   tx: {
   *      type: 0,
   *      nonce: 1,
   *      gasPrice: 1000000001,
   *      gas: 21000,
   *      value: 1,
   *      v: 2710,
   *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
   *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      data: '0x'
   *   }
   * }
   * ```
   */    signTransaction(t, e = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return yn(this, t, e);
        }));
    }
    // TODO Decide what to do with transaction.to
    // https://github.com/ChainSafe/web3.js/pull/4525#issuecomment-982330076
    /**
   * Executes a message call within the EVM without creating a transaction.
   * It does not publish anything to the blockchain and does not consume any gas.
   *
   * @param transaction - A transaction object where all properties are optional except `to`, however it's recommended to include the `from` property or it may default to `0x0000000000000000000000000000000000000000` depending on your node or provider.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The returned data of the call, e.g. a smart contract function's return value.
   */
    call(t, e = this.defaultBlock, n = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return pn(this, t, e, n);
        }));
    }
    /**
   * Simulates the transaction within the EVM to estimate the amount of gas to be used by the transaction.
   * The transaction will not be added to the blockchain, and actual gas usage can vary when interacting
   * with a contract as a result of updating the contract's state.
   *
   * @param transaction The {@link Transaction} object to estimate the gas for.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The used gas for the simulated transaction execution.
   *
   * ```ts
   * const transaction = {
   *       from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *       to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *       value: '0x1',
   *       nonce: '0x1',
   *       type: '0x0'
   * }
   *
   * web3.eth.estimateGas(transaction).then(console.log);
   * > 21000n
   *
   * web3.eth.estimateGas(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > 21000
   * ```
   */    estimateGas(t, e = this.defaultBlock, n = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return gn(this, t, e, n);
        }));
    }
    /**
   * Gets past logs, matching the provided `filter`.
   *
   * @param filter A {@link Filter} object containing the properties for the desired logs.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
   *
   * ```ts
   * web3.eth.getPastLogs({
   *      address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
   *      topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
   *  }).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0n,
   *       transactionIndex: 0n,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234n,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   *
   * web3.eth.getPastLogs(
   *     {
   *       address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
   *       topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
   *     },
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0,
   *       transactionIndex: 0,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   * ```
   */    getPastLogs(t, e = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return bn(this, t, e);
        }));
    }
    /**
   * Gets work for miners to mine on. Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
   *
   * @returns The mining work as an array of strings with the following structure:
   *
   * String 32 Bytes - at index 0: current block header pow-hash
   * String 32 Bytes - at index 1: the seed hash used for the DAG.
   * String 32 Bytes - at index 2: the boundary condition ('target'), 2^256 / difficulty.
   *
   * ```ts
   * web3.eth.getWork().then(console.log);
   * > [
   *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
   *     "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
   *     "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
   * ]
   * ```
   */    getWork() {
        return jn(this, void 0, void 0, (function*() {
            return Lt(this.requestManager);
        }));
    }
    /**
   * Used for submitting a proof-of-work solution.
   *
   * @param nonce The nonce found (8 bytes).
   * @param hash  The header’s pow-hash (32 bytes).
   * @param digest The mix digest (32 bytes).
   * @returns Returns `true` if the provided solution is valid, otherwise `false`.
   *
   * ```ts
   * web3.eth.submitWork([
   *     "0x0000000000000001",
   *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
   *     "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
   * ]).then(console.log);
   * > true
   * ```
   */    submitWork(t, e, n) {
        return jn(this, void 0, void 0, (function*() {
            return Dt(this.requestManager, t, e, n);
        }));
    }
    // TODO - Format addresses
    /**
   * This method will request/enable the accounts from the current environment and for supporting [EIP 1102](https://eips.ethereum.org/EIPS/eip-1102)
   * This method will only work if you’re using the injected provider from a application like Metamask, Status or TrustWallet.
   * It doesn’t work if you’re connected to a node with a default Web3.js provider (WebsocketProvider, HttpProvider and IpcProvider).
   * For more information about the behavior of this method please read [EIP-1102](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md): Opt-in account exposure.
   *
   * @returns An array of enabled accounts.
   *
   * ```ts
   * web3.eth.requestAccounts().then(console.log);
   * > ['0aae0B295369a9FD31d5F28D9Ec85E40f4cb692BAf', '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe']
   * ```
   */
    requestAccounts() {
        return jn(this, void 0, void 0, (function*() {
            return Nt(this.requestManager);
        }));
    }
    /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The chain ID of the current connected node as described in the [EIP-695](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-695.md).
   *
   * ```ts
   * web3.eth.getChainId().then(console.log);
   * > 61n
   *
   * web3.eth.getChainId({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > 61
   * ```
   */    getChainId(t = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return wn(this, t);
        }));
    }
    /**
   * @returns The current client version.
   *
   * ```ts
   * web3.eth.getNodeInfo().then(console.log);
   * > "Mist/v0.9.3/darwin/go1.4.1"
   * ```
   */    getNodeInfo() {
        return jn(this, void 0, void 0, (function*() {
            return Wt(this.requestManager);
        }));
    }
    /**
   * @param address The Address of the account or contract.
   * @param storageKeys Array of storage-keys which should be proofed and included. See {@link web3.getStorageAt}.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The account and storage-values of the specified account including the Merkle-proof as described in [EIP-1186](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1186.md).
   *
   * ```ts
   * web3.eth.getProof(
   *     "0x1234567890123456789012345678901234567890",
   *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
   *     "latest"
   * ).then(console.log);
   * > {
   *     "address": "0x1234567890123456789012345678901234567890",
   *     "accountProof": [
   *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
   *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
   *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
   *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
   *     ],
   *     "balance": 0n,
   *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
   *     "nonce": 0n,
   *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
   *     "storageProof": [
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
   *             "value": 0n,
   *             "proof": []
   *         },
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
   *             "value": 0n,
   *             "proof": []
   *         }
   *     ]
   * }
   *
   * web3.eth.getProof(
   *     "0x1234567890123456789012345678901234567890",
   *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
   *     undefined,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *     "address": "0x1234567890123456789012345678901234567890",
   *     "accountProof": [
   *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
   *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
   *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
   *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
   *     ],
   *     "balance": 0,
   *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
   *     "nonce": 0,
   *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
   *     "storageProof": [
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
   *             "value": 0,
   *             "proof": []
   *         },
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
   *             "value": 0,
   *             "proof": []
   *         }
   *     ]
   * }
   * ```
   */    getProof(e, n, r = this.defaultBlock, i = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n, r, i = e.defaultBlock, o) {
                return sn(this, void 0, void 0, (function*() {
                    const a = r.map((e => Kt({
                        format: "bytes"
                    }, e, t))), s = X(i) ? i : Kt({
                        format: "uint"
                    }, i, t), u = yield It(e.requestManager, n, a, s);
                    return Kt(Ie, u, null != o ? o : e.defaultReturnFormat);
                }));
            }(this, e, n, r, i);
        }));
    }
    // TODO Throwing an error with Geth, but not Infura
    // TODO gasUsedRatio and reward not formatting
    /**
   * @param blockCount Number of blocks in the requested range. Between `1` and `1024` blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.
   * @param newestBlock Highest number block of the requested range.
   * @param rewardPercentiles A monotonically increasing list of percentile values to sample from each block’s effective priority fees per gas in ascending order, weighted by gas used. Example: `['0', '25', '50', '75', '100']` or `['0', '0.5', '1', '1.5', '3', '80']`
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns `baseFeePerGas` and transaction effective `priorityFeePerGas` history for the requested block range if available.
   * The range between `headBlock - 4` and `headBlock` is guaranteed to be available while retrieving data from the `pending` block and older history are optional to support.
   * For pre-EIP-1559 blocks the `gasPrice`s are returned as `rewards` and zeroes are returned for the `baseFeePerGas`.
   *
   * ```ts
   * web3.eth.getFeeHistory(4, 'pending', [0, 25, 75, 100]).then(console.log);
   * > {
   *     baseFeePerGas: [
   *         22983878621n,
   *         21417903463n,
   *         19989260230n,
   *         17770954829n,
   *         18850641304n
   *     ],
   *     gasUsedRatio: [
   *         0.22746546666666667,
   *         0.2331871,
   *         0.05610054885262125,
   *         0.7430227268212117
   *     ],
   *     oldestBlock: 15216343n,
   *     reward: [
   *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
   *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
   *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
   *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
   *     ]
   * }
   *
   * web3.eth.getFeeHistory(4, BlockTags.LATEST, [0, 25, 75, 100], { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > {
   *     baseFeePerGas: [
   *         22983878621,
   *         21417903463,
   *         19989260230,
   *         17770954829,
   *         18850641304
   *     ],
   *     gasUsedRatio: [
   *         0.22746546666666667,
   *         0.2331871,
   *         0.05610054885262125,
   *         0.7430227268212117
   *     ],
   *     oldestBlock: 15216343,
   *     reward: [
   *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
   *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
   *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
   *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
   *     ]
   * }
   * ```
   */
    getFeeHistory(e, n = this.defaultBlock, r, i = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return function(e, n, r = e.defaultBlock, i, o) {
                return sn(this, void 0, void 0, (function*() {
                    const a = Kt({
                        format: "uint"
                    }, n, t), s = X(r) ? r : Kt({
                        format: "uint"
                    }, r, t), u = Kt({
                        type: "array",
                        items: {
                            format: "uint"
                        }
                    }, i, He), c = yield Ot(e.requestManager, a, s, u);
                    return Kt(Ge, c, null != o ? o : e.defaultReturnFormat);
                }));
            }(this, e, n, r, i);
        }));
    }
    /**
   * This method generates an access list for a transaction.
   *
   * @param transaction - A transaction object where all properties are optional except `from`, however it's recommended to include the `to` property.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the createAccessList should be formatted.
   * @returns The returned data of the createAccessList,  e.g. The generated access list for transaction.
   * @example
   * ```ts
   * web3.eth.createAccessList({
   * from: '0xDe95305a63302C3aa4d3A9B42654659AeA72b694',
   * data: '0x9a67c8b100000000000000000000000000000000000000000000000000000000000004d0',
   * gasPrice: '0x3b9aca00',
   * gas: '0x3d0900',
   * to: '0x940b25304947ae863568B3804434EC77E2160b87'
   * })
   * .then(console.log);
   *
   * > {
   *  "accessList": [
   *     {
   *       "address": "0x15859bdf5aff2080a9968f6a410361e9598df62f",
   *       "storageKeys": [
   *         "0x0000000000000000000000000000000000000000000000000000000000000000"
   *       ]
   *     }
   *   ],
   *   "gasUsed": "0x7671"
   * }
   * ```
   */    createAccessList(t, e = this.defaultBlock, n = this.defaultReturnFormat) {
        return jn(this, void 0, void 0, (function*() {
            return xn(this, t, e, n);
        }));
    }
    /**
   * This method sends EIP-712 typed data to the RPC provider to be signed.
   *
   * @param address The address that corresponds with the private key used to sign the typed data.
   * @param typedData The EIP-712 typed data object.
   * @param useLegacy A boolean flag determining whether the RPC call uses the legacy method `eth_signTypedData` or the newer method `eth_signTypedData_v4`
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the signed typed data should be formatted.
   * @returns The signed typed data.
   */    signTypedData(t, e, r, i) {
        var o;
        return void 0 === r && (r = !1), void 0 === i && (i = null !== (o = this.defaultReturnFormat) && void 0 !== o ? o : n), 
        jn(this, void 0, void 0, (function*() {
            return function(t, e, n, r, i) {
                return sn(this, void 0, void 0, (function*() {
                    const o = yield Tt(t.requestManager, e, n, r);
                    return Kt({
                        format: "bytes"
                    }, o, null != i ? i : t.defaultReturnFormat);
                }));
            }(this, t, e, r, i);
        }));
    }
    /**
   * Lets you subscribe to specific events in the blockchain.
   *
   * @param name - The subscription you want to subscribe to.
   * @param args - Optional additional parameters, depending on the subscription type.
   * @returns A subscription object of type {@link RegisteredSubscription}. The object contains:
   *  - subscription.id: The subscription id, used to identify and unsubscribing the subscription.
   *  - subscription.subscribe(): Can be used to re-subscribe with the same parameters.
   *  - subscription.unsubscribe(): Unsubscribes the subscription and returns TRUE in the callback if successful.
   *  - subscription.args: The subscription arguments, used when re-subscribing.
   *
   *
   * You can use the subscription object to listen on:
   *
   * - on("data") - Fires on each incoming log with the log object as argument.
   * - on("changed") - Fires on each log which was removed from the blockchain. The log will have the additional property "removed: true".
   * - on("error") - Fires when an error in the subscription occurs.
   * - on("connected") - Fires once after the subscription successfully connected. Returns the subscription id.
   *
   * @example **Subscribe to Smart Contract events**
   * ```ts
   * // Subscribe to `logs`
   * const logSubscription = web3.eth.subscribe('logs', {
   *     address: '0x1234567890123456789012345678901234567890',
   *     topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
   * });
   * logSubscription.on('data', (data: any) => console.log(data));
   * logSubscription.on('error', (error: any) => console.log(error));
   *
   * ```
   *
   * @example **Subscribe to new block headers**
   * ```ts
   * // Subscribe to `newBlockHeaders`
   * const newBlocksSubscription = await web3.eth.subscribe('newBlockHeaders');
   *
   * newBlocksSubscription.on('data', async blockhead => {
   * 	console.log('New block header: ', blockhead);
   *
   * 	// You do not need the next line, if you like to keep notified for every new block
   * 	await newBlocksSubscription.unsubscribe();
   * 	console.log('Unsubscribed from new block headers.');
   * });
   * newBlocksSubscription.on('error', error =>
   * 	console.log('Error when subscribing to New block header: ', error),
   * );
   * ```
   *
   * 	### subscribe('pendingTransactions')
   *
   * Subscribes to incoming pending transactions.
   * You can subscribe to pending transactions by calling web3.eth.subscribe('pendingTransactions').
   *
   * ```ts
   * (await web3.eth.subscribe('pendingTransactions')).on('data', console.log);
   * ```
   *
   * ### subscribe('newHeads')
   * ( same as subscribe('newBlockHeaders'))
   * Subscribes to incoming block headers. This can be used as timer to check for changes on the blockchain.
   *
   * The structure of a returned block header is {@link BlockHeaderOutput}:
   *
   * ```ts
   * (await web3.eth.subscribe('newHeads')).on( // 'newBlockHeaders' would work as well
   *  'data',
   * console.log
   * );
   * >{
   * parentHash: '0x9e746a1d906b299def98c75b06f714d62dacadd567c7515d76eeaa8c8074c738',
   * sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   * miner: '0x0000000000000000000000000000000000000000',
   * stateRoot: '0xe0f04b04861ecfa95e82a9310d6a7ef7aef8d7417f5209c182582bfb98a8e307',
   * transactionsRoot: '0x31ab4ea571a9e10d3a19aaed07d190595b1dfa34e03960c04293fec565dea536',
   * logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   * difficulty: 2n,
   * number: 21n,
   * gasLimit: 11738125n,
   * gasUsed: 830006n,
   * timestamp: 1678797237n,
   * extraData: '0xd883010b02846765746888676f312e32302e31856c696e757800000000000000e0a6e93cf40e2e71a72e493272210c3f43738ccc7e7d7b14ffd51833797d896c09117e8dc4fbcbc969bd21b42e5af3e276a911524038c001b2109b63b8e0352601',
   * nonce: 0n
   * }
   * ```
   *
   * ### subscribe('syncing')
   * Subscribe to syncing events. This will return `true` when the node is syncing and when it’s finished syncing will return `false`, for the `changed` event.
   *
   * ```ts
   * (await web3.eth.subscribe('syncing')).on('changed', console.log);
   * > `true` // when syncing
   *
   * (await web3.eth.subscribe('syncing')).on('data', console.log);
   * > {
   *      startingBlock: 0,
   *      currentBlock: 0,
   *      highestBlock: 0,
   *      pulledStates: 0,
   *      knownStates: 0
   *   }
   * ```
   *
   * ### subscribe('logs', options)
   * Subscribes to incoming logs, filtered by the given options. If a valid numerical fromBlock options property is set, web3.js will retrieve logs beginning from this point, backfilling the response as necessary.
   *
   * options: You can subscribe to logs matching a given filter object, which can take the following parameters:
   * - `fromBlock`: (optional, default: 'latest') Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.
   * - `address`: (optional) Contract address or a list of addresses from which logs should originate.
   * - `topics`: (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with `or` options.
   *
   * ```ts
   *  (await web3.eth.subscribe('logs', {
   *    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *   })).on('data', console.log);
   *
   * > {
   * removed: false,
   * logIndex: 119n,
   * transactionIndex: 58n,
   * transactionHash: '0x61533efa77937360215069d5d6cb0be09a22af9721e6dc3df59d957833ed8870',
   * blockHash: '0xe32bb97084479d32247f66f8b46d00af2fbc3c2db2bc6e5843fe2e4d1ca9b099',
   * blockNumber: 18771966n,
   * address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
   * data: '0x00000000000000000000000000000000000000000000000000000000d88b2e40',
   * topics: [
   * '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
   * '0x0000000000000000000000002fb2457f6ec1865dc0d4e7300c696b69c2a1b989',
   * '0x00000000000000000000000027fd43babfbe83a81d14665b1a6fb8030a60c9b4'
   * ]
   * }
   *```
   */    subscribe(t, e, r) {
        var i, o;
        return void 0 === r && (r = null !== (i = this.defaultReturnFormat) && void 0 !== i ? i : n), 
        jn(this, void 0, void 0, (function*() {
            const n = yield null === (o = this.subscriptionManager) || void 0 === o ? void 0 : o.subscribe(t, e, r);
            return n instanceof Pn && "logs" === t && "object" == typeof e && !oe(e.fromBlock) && Number.isFinite(Number(e.fromBlock)) && setImmediate((() => {
                this.getPastLogs(e).then((t => {
                    for (const e of t) n._processSubscriptionResult(e);
                })).catch((t => {
                    n._processSubscriptionError(t);
                }));
            })), n;
        }));
    }
    static shouldClearSubscription({sub: t}) {
        return !(t instanceof Rn);
    }
    /**
   * Resets subscriptions.
   *
   * @param notClearSyncing If `true` it keeps the `syncing` subscription.
   * @returns A promise to an array of subscription ids that were cleared.
   *
   * ```ts
   * web3.eth.clearSubscriptions().then(console.log);
   * > [...] An array of subscription ids that were cleared
   * ```
   */    clearSubscriptions(t = !1) {
        var e;
        return null === (e = this.subscriptionManager) || void 0 === e ? void 0 : e.unsubscribe(
        // eslint-disable-next-line
        t ? Sn.shouldClearSubscription : void 0);
    }
}

const Bn = t => {
    if (
    // This check is verifying gas and gasPrice aren't less than 0.
    _(t.gas) || !tt(t.gas) || _(t.gasPrice) || !tt(t.gasPrice)) throw new N({
        gas: t.gas,
        gasPrice: t.gasPrice
    });
    if (!_(t.maxFeePerGas) || !_(t.maxPriorityFeePerGas)) throw new W({
        maxFeePerGas: t.maxFeePerGas,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas
    });
}, Gn = t => {
    if (!_(t.gasPrice) && "0x2" === t.type) throw new U(t.gasPrice);
    if ("0x0" === t.type || "0x1" === t.type) throw new W({
        maxFeePerGas: t.maxFeePerGas,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas
    });
    if (_(t.maxFeePerGas) || !tt(t.maxFeePerGas) || _(t.maxPriorityFeePerGas) || !tt(t.maxPriorityFeePerGas)) throw new z({
        maxPriorityFeePerGas: t.maxPriorityFeePerGas,
        maxFeePerGas: t.maxFeePerGas
    });
}, In = (e, n, r = {
    transactionSchema: void 0
}) => {
    if (!_(n)) return void n(e);
    if ("object" != typeof e || _(e)) throw new G(e);
    (t => {
        if (!_(t.common)) {
            if (_(t.common.customChain)) throw new O;
            if (_(t.common.customChain.chainId)) throw new M;
            if (!_(t.chainId) && t.chainId !== t.common.customChain.chainId) throw new T({
                txChainId: t.chainId,
                customChainId: t.common.customChain.chainId
            });
        }
    })(e), (t => {
        if (!_(t.common) && !_(t.chain) && !_(t.hardfork)) throw new H;
        if (!_(t.chain) && _(t.hardfork) || !_(t.hardfork) && _(t.chain)) throw new q({
            chain: t.chain,
            hardfork: t.hardfork
        });
    })(e), (t => {
        if (!_(t.common) && !_(t.common.baseChain) && !_(t.chain) && t.chain !== t.common.baseChain) throw new E({
            txChain: t.chain,
            baseChain: t.common.baseChain
        });
    })(e), (t => {
        if (!_(t.common) && !_(t.common.hardfork) && !_(t.hardfork) && t.hardfork !== t.common.hardfork) throw new A({
            txHardfork: t.hardfork,
            commonHardfork: t.common.hardfork
        });
    })(e);
    const i = Oe(e, t, {
        transactionSchema: r.transactionSchema
    });
    if ((t => {
        const e = !_(t.gas) || !_(t.gasLimit), n = e && !_(t.gasPrice), r = e && !_(t.maxPriorityFeePerGas) && !_(t.maxFeePerGas);
        if (!n && !r) throw new L({
            gas: t.gas,
            gasPrice: t.gasPrice,
            maxPriorityFeePerGas: t.maxPriorityFeePerGas,
            maxFeePerGas: t.maxFeePerGas
        });
        if (n && r) throw new D({
            gas: t.gas,
            gasPrice: t.gasPrice,
            maxPriorityFeePerGas: t.maxPriorityFeePerGas,
            maxFeePerGas: t.maxFeePerGas
        });
        (n ? Bn : Gn)(t), (!_(t.type) && t.type > "0x1" ? Gn : Bn)(t);
    })(i), _(i.nonce) || _(i.chainId) || i.nonce.startsWith("-") || i.chainId.startsWith("-")) throw new I({
        nonce: e.nonce,
        chainId: e.chainId
    });
};

var On = function(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t));
            } catch (e) {
                o(e);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                o(e);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(a, s);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

const Mn = (e, n, r, i = !1, o = !0) => On(void 0, void 0, void 0, (function*() {
    var a;
    const s = Oe(yield (a = {
        transaction: e,
        web3Context: n,
        privateKey: r,
        fillGasPrice: i,
        fillGasLimit: o
    }, Ae(void 0, void 0, void 0, (function*() {
        var t;
        return (null !== (t = a.web3Context.transactionBuilder) && void 0 !== t ? t : Ne)(Object.assign(Object.assign({}, a), {
            transaction: a.transaction
        }));
    }))), t, {
        transactionSchema: n.config.customTransactionSchema
    });
    return In(s, void 0, {
        transactionSchema: n.config.customTransactionSchema
    }), Ut.fromTxData((t => {
        var e, n;
        return Object.assign(Object.assign({}, t), {
            nonce: t.nonce,
            gasPrice: t.gasPrice,
            gasLimit: null !== (e = t.gasLimit) && void 0 !== e ? e : t.gas,
            to: t.to,
            value: t.value,
            data: null !== (n = t.data) && void 0 !== n ? n : t.input,
            type: t.type,
            chainId: t.chainId,
            accessList: t.accessList,
            maxPriorityFeePerGas: t.maxPriorityFeePerGas,
            maxFeePerGas: t.maxFeePerGas
        });
    })(s), ((t, e) => {
        var n, r, i, o, a, s, u, c, d, l, f, m, h, v, y, p, g, b;
        let w;
        if ((_(t.chain) || _(t.hardfork)) && _(t.common)) e.defaultCommon ? (w = Object.assign({}, e.defaultCommon), 
        _(w.hardfork) && (w.hardfork = null !== (n = t.hardfork) && void 0 !== n ? n : e.defaultHardfork), 
        _(w.baseChain) && (w.baseChain = e.defaultChain)) : w = _t.custom({
            name: "custom-network",
            chainId: ae(t.chainId),
            networkId: _(t.networkId) ? void 0 : ae(t.networkId),
            defaultHardfork: null !== (r = t.hardfork) && void 0 !== r ? r : e.defaultHardfork
        }, {
            baseChain: e.defaultChain
        }); else {
            const n = null !== (s = null !== (a = null === (o = null === (i = null == t ? void 0 : t.common) || void 0 === i ? void 0 : i.customChain) || void 0 === o ? void 0 : o.name) && void 0 !== a ? a : t.chain) && void 0 !== s ? s : "custom-network", r = ae(null !== (d = null === (c = null === (u = null == t ? void 0 : t.common) || void 0 === u ? void 0 : u.customChain) || void 0 === c ? void 0 : c.chainId) && void 0 !== d ? d : null == t ? void 0 : t.chainId), x = ae(null !== (m = null === (f = null === (l = null == t ? void 0 : t.common) || void 0 === l ? void 0 : l.customChain) || void 0 === f ? void 0 : f.networkId) && void 0 !== m ? m : null == t ? void 0 : t.networkId), P = null !== (y = null !== (v = null === (h = null == t ? void 0 : t.common) || void 0 === h ? void 0 : h.hardfork) && void 0 !== v ? v : null == t ? void 0 : t.hardfork) && void 0 !== y ? y : e.defaultHardfork, F = null !== (b = null !== (g = null === (p = t.common) || void 0 === p ? void 0 : p.baseChain) && void 0 !== g ? g : t.chain) && void 0 !== b ? b : e.defaultChain;
            r && x && n && (w = _t.custom({
                name: n,
                chainId: r,
                networkId: x,
                defaultHardfork: P
            }, {
                baseChain: F
            }));
        }
        return {
            common: w
        };
    })(s, n));
}));

export { Me as A, kn as N, Sn as W, Te as a, ke as b, pn as c, rn as d, xn as e, gn as f, bn as g, Oe as h, un as i, Mn as p, Cn as r, hn as s };

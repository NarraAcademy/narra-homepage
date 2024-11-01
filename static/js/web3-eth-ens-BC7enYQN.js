import { W as e } from "./web3-core-ObgmPHuP.js";

import { a as t } from "./web3-types-DSrrWgZ8.js";

import { a8 as n, a9 as s, aa as r } from "./web3-errors-hzVYhHGn.js";

import "./web3-eth-iban-75eRxAWM.js";

import { b as i, a } from "./web3-validator-BARD4gRE.js";

import "./setimmediate-DUOPLI_V.js";

import { i as o } from "./web3-eth-vWxzIr98.js";

import "./web3-eth-abi-eT7or4Ei.js";

import { g as y } from "./web3-net-DSmyH1-b.js";

import { C as d } from "./web3-eth-contract-CZNEMiMZ.js";

import { e as p } from "./@adraffy-sBKPPea8.js";

import { B as u, i as l, P as c } from "./web3-utils-CA0vZo5F.js";

const m = {
    addr: "0x3b3b57de",
    name: "0x691f3431",
    abi: "0x2203ab56",
    pubkey: "0xc8690233",
    text: "0x59d1d43c",
    contenthash: "0xbc1c58d1"
}, b = "addr", h = "addr", v = "pubkey", f = "contenthash", T = "text", x = "name", w = {
    main: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    goerli: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
}, g = {
    "0x1": "main",
    "0x5": "goerli"
}, A = [ {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "bytes32",
        name: "label",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "owner",
        type: "address"
    } ],
    name: "NewOwner",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "resolver",
        type: "address"
    } ],
    name: "NewResolver",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "owner",
        type: "address"
    } ],
    name: "Transfer",
    type: "event"
}, {
    inputs: [ {
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    } ],
    name: "isApprovedForAll",
    outputs: [ {
        internalType: "bool",
        name: "",
        type: "bool"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "owner",
    outputs: [ {
        internalType: "address",
        name: "",
        type: "address"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "recordExists",
    outputs: [ {
        internalType: "bool",
        name: "",
        type: "bool"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "resolver",
    outputs: [ {
        internalType: "address",
        name: "",
        type: "address"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "ttl",
    outputs: [ {
        internalType: "uint64",
        name: "",
        type: "uint64"
    } ],
    stateMutability: "view",
    type: "function"
} ], C = [ {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "a",
        type: "address"
    } ],
    name: "AddrChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "newAddress",
        type: "bytes"
    } ],
    name: "AddressChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
    } ],
    name: "ApprovalForAll",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "hash",
        type: "bytes"
    } ],
    name: "ContenthashChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "name",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "record",
        type: "bytes"
    } ],
    name: "DNSRecordChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "name",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
    } ],
    name: "DNSRecordDeleted",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "DNSZoneCleared",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lastzonehash",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "zonehash",
        type: "bytes"
    } ],
    name: "DNSZonehashChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
    }, {
        indexed: !1,
        internalType: "address",
        name: "implementer",
        type: "address"
    } ],
    name: "InterfaceChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "string",
        name: "name",
        type: "string"
    } ],
    name: "NameChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
    } ],
    name: "PubkeyChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [ {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "string",
        name: "indexedKey",
        type: "string"
    }, {
        indexed: !1,
        internalType: "string",
        name: "key",
        type: "string"
    } ],
    name: "TextChanged",
    type: "event"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "contentTypes",
        type: "uint256"
    } ],
    name: "ABI",
    outputs: [ {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "",
        type: "bytes"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "addr",
    outputs: [ {
        internalType: "address payable",
        name: "",
        type: "address"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
    } ],
    name: "addr",
    outputs: [ {
        internalType: "bytes",
        name: "",
        type: "bytes"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "contenthash",
    outputs: [ {
        internalType: "bytes",
        name: "",
        type: "bytes"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
    }, {
        internalType: "uint16",
        name: "resource",
        type: "uint16"
    } ],
    name: "dnsRecord",
    outputs: [ {
        internalType: "bytes",
        name: "",
        type: "bytes"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
    } ],
    name: "hasDNSRecords",
    outputs: [ {
        internalType: "bool",
        name: "",
        type: "bool"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
    } ],
    name: "interfaceImplementer",
    outputs: [ {
        internalType: "address",
        name: "",
        type: "address"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    } ],
    name: "isApprovedForAll",
    outputs: [ {
        internalType: "bool",
        name: "",
        type: "bool"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "name",
    outputs: [ {
        internalType: "string",
        name: "",
        type: "string"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "pubkey",
    outputs: [ {
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
    } ],
    name: "supportsInterface",
    outputs: [ {
        internalType: "bool",
        name: "",
        type: "bool"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "string",
        name: "key",
        type: "string"
    } ],
    name: "text",
    outputs: [ {
        internalType: "string",
        name: "",
        type: "string"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    } ],
    name: "zonehash",
    outputs: [ {
        internalType: "bytes",
        name: "",
        type: "bytes"
    } ],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [ {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "address",
        name: "a",
        type: "address"
    } ],
    name: "setAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
} ], _ = e => {
    let t = "";
    for (let n = 0; n < 32; n += 1) t += "00";
    if (e) {
        const n = (e => p(e))(e).split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
            const s = u(n[e]).slice(2);
            t = u(`0x${t}${s}`).slice(2);
        }
    }
    return `0x${t}`;
};

var k = function(e, t, n, s) {
    return new (n || (n = Promise))((function(r, i) {
        function a(e) {
            try {
                y(s.next(e));
            } catch (t) {
                i(t);
            }
        }
        function o(e) {
            try {
                y(s.throw(e));
            } catch (t) {
                i(t);
            }
        }
        function y(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t);
            }))).then(a, o);
        }
        y((s = s.apply(e, t || [])).next());
    }));
};

class I {
    constructor(e, t) {
        this.contract = new d(A, null != t ? t : w.main, e), this.context = e;
    }
    getOwner(e) {
        return k(this, void 0, void 0, (function*() {
            try {
                return this.contract.methods.owner(_(e)).call();
            } catch (t) {
                throw new Error;
            }
        }));
    }
    getTTL(e) {
        return k(this, void 0, void 0, (function*() {
            try {
                return this.contract.methods.ttl(_(e)).call();
            } catch (t) {
                throw new Error;
            }
        }));
    }
    recordExists(e) {
        return k(this, void 0, void 0, (function*() {
            try {
                return this.contract.methods.recordExists(_(e)).call();
            } catch (t) {
                throw new Error;
            }
        }));
    }
    getResolver(e) {
        return k(this, void 0, void 0, (function*() {
            try {
                return this.contract.methods.resolver(_(e)).call().then((e => {
                    if ("string" == typeof e) {
                        return new d(C, e, this.context);
                    }
                    throw new Error;
                }));
            } catch (t) {
                throw new Error;
            }
        }));
    }
    get events() {
        return this.contract.events;
    }
}

var M = function(e, t, n, s) {
    return new (n || (n = Promise))((function(r, i) {
        function a(e) {
            try {
                y(s.next(e));
            } catch (t) {
                i(t);
            }
        }
        function o(e) {
            try {
                y(s.throw(e));
            } catch (t) {
                i(t);
            }
        }
        function y(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t);
            }))).then(a, o);
        }
        y((s = s.apply(e, t || [])).next());
    }));
};

class R {
    constructor(e) {
        this.registry = e;
    }
    getResolverContractAdapter(e) {
        return M(this, void 0, void 0, (function*() {
            return this.registry.getResolver(e);
        }));
    }
    //  https://eips.ethereum.org/EIPS/eip-165
    // eslint-disable-next-line class-methods-use-this
    checkInterfaceSupport(e, t) {
        var s, r;
        return M(this, void 0, void 0, (function*() {
            if (l(m[t])) throw new n(null !== (s = e.options.address) && void 0 !== s ? s : "", t);
            if (!(yield e.methods.supportsInterface(m[t]).call())) throw new n(null !== (r = e.options.address) && void 0 !== r ? r : "", t);
        }));
    }
    supportsInterface(e, t) {
        var n;
        return M(this, void 0, void 0, (function*() {
            const s = yield this.getResolverContractAdapter(e);
            let r = t;
            if (!i(r)) {
                if (r = null !== (n = c(t)) && void 0 !== n ? n : "", "" === t) throw new Error("Invalid interface Id");
                r = r.slice(0, 10);
            }
            return s.methods.supportsInterface(r).call();
        }));
    }
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    getAddress(e, t = 60) {
        return M(this, void 0, void 0, (function*() {
            const n = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(n, h), n.methods.addr(_(e), t).call();
        }));
    }
    getPubkey(e) {
        return M(this, void 0, void 0, (function*() {
            const t = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(t, v), t.methods.pubkey(_(e)).call();
        }));
    }
    getContenthash(e) {
        return M(this, void 0, void 0, (function*() {
            const t = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(t, f), t.methods.contenthash(_(e)).call();
        }));
    }
    setAddress(e, t, n) {
        return M(this, void 0, void 0, (function*() {
            const s = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(s, b), s.methods.setAddr(_(e), t).send(n);
        }));
    }
    getText(e, t) {
        return M(this, void 0, void 0, (function*() {
            const n = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(n, T), n.methods.text(_(e), t).call();
        }));
    }
    getName(e, t = !0) {
        return M(this, void 0, void 0, (function*() {
            const n = `${e.toLowerCase().substring(2)}.addr.reverse`, s = yield this.getResolverContractAdapter(n);
            return t && (yield this.checkInterfaceSupport(s, x)), s.methods.name(_(n)).call();
        }));
    }
}

var j = function(e, t, n, s) {
    return new (n || (n = Promise))((function(r, i) {
        function a(e) {
            try {
                y(s.next(e));
            } catch (t) {
                i(t);
            }
        }
        function o(e) {
            try {
                y(s.throw(e));
            } catch (t) {
                i(t);
            }
        }
        function y(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t);
            }))).then(a, o);
        }
        y((s = s.apply(e, t || [])).next());
    }));
};

class E extends e {
    /**
   * Use to create an instance of ENS
   * @param registryAddr - (Optional) The address of the ENS registry (default: mainnet registry address)
   * @param provider - (Optional) The provider to use for the ENS instance
   * @example
   * ```ts
   * const ens = new ENS(
   * 	"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
   * 	"http://localhost:8545"
   * );
   *
   * console.log( ens.defaultChain);
   * > mainnet
   * ```
   */
    constructor(e, t) {
        super(null != t ? t : ""), this.registryAddress = null != e ? e : w.main, this._registry = new I(this.getContextObject(), e), 
        this._resolver = new R(this._registry);
    }
    /**
   * Returns the Resolver by the given address
   * @param name - The name of the ENS domain
   * @returns - An contract instance of the resolver
   *
   * @example
   * ```ts
   * const resolver = await ens.getResolver('resolver');
   *
   * console.log(resolver.options.address);
   * > '0x1234567890123456789012345678901234567890'
   * ```
   */    getResolver(e) {
        return j(this, void 0, void 0, (function*() {
            return this._registry.getResolver(e);
        }));
    }
    /**
   * Returns true if the record exists
   * @param name - The ENS name
   * @returns - Returns `true` if node exists in this ENS registry. This will return `false` for records that are in the legacy ENS registry but have not yet been migrated to the new one.
   * @example
   * ```ts
   * const exists = await web3.eth.ens.recordExists('ethereum.eth');
   * ```
   */    recordExists(e) {
        return j(this, void 0, void 0, (function*() {
            return this._registry.recordExists(e);
        }));
    }
    /**
   * Returns the caching TTL (time-to-live) of an ENS name.
   * @param name - The ENS name
   * @returns - Returns the caching TTL (time-to-live) of a name.
   * @example
   * ```ts
   * const owner = await web3.eth.ens.getTTL('ethereum.eth');
   * ```
   */    getTTL(e) {
        return j(this, void 0, void 0, (function*() {
            return this._registry.getTTL(e);
        }));
    }
    /**
   * Returns the owner by the given name and current configured or detected Registry
   * @param name - The ENS name
   * @returns - Returns the address of the owner of the name.
   * @example
   * ```ts
   * const owner = await web3.eth.ens.getOwner('ethereum.eth');
   * ```
   */    getOwner(e) {
        return j(this, void 0, void 0, (function*() {
            return this._registry.getOwner(e);
        }));
    }
    /**
   * Resolves an ENS name to an Ethereum address.
   * @param ENSName - The ENS name to resolve
   * @param coinType - (Optional) The coin type, defaults to 60 (ETH)
   * @returns - The Ethereum address of the given name
   * ```ts
   * const address = await web3.eth.ens.getAddress('ethereum.eth');
   * console.log(address);
   * > '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
   * ```
   */    getAddress(e, t = 60) {
        return j(this, void 0, void 0, (function*() {
            return this._resolver.getAddress(e, t);
        }));
    }
    /**
   * ERC-634 - Returns the text content stored in the resolver for the specified key.
   * @param ENSName - The ENS name to resolve
   * @param key - The key to resolve https://github.com/ethereum/ercs/blob/master/ERCS/erc-634.md#global-keys
   * @returns - The value content stored in the resolver for the specified key
   */    getText(e, t) {
        return j(this, void 0, void 0, (function*() {
            return a(e) ? this._resolver.getText(yield this._resolver.getName(e, !1), t) : this._resolver.getText(e, t);
        }));
    }
    /**
   * Resolves the name of an ENS node.
   * @param ENSName - The node to resolve
   * @returns - The name
   */    getName(e, t = !0) {
        return j(this, void 0, void 0, (function*() {
            return this._resolver.getName(e, t);
        }));
    }
    /**
   * Returns the X and Y coordinates of the curve point for the public key.
   * @param ENSName - The ENS name
   * @returns - The X and Y coordinates of the curve point for the public key
   * @example
   * ```ts
   * const key = await web3.eth.ens.getPubkey('ethereum.eth');
   * console.log(key);
   * > {
   * "0": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "1": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "x": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "y": "0x0000000000000000000000000000000000000000000000000000000000000000"
   * }
   * ```
   */    getPubkey(e) {
        return j(this, void 0, void 0, (function*() {
            return this._resolver.getPubkey(e);
        }));
    }
    /**
   * Returns the content hash object associated with an ENS node.
   * @param ENSName - The ENS name
   * @returns - The content hash object associated with an ENS node
   * @example
   * ```ts
   * const hash = await web3.eth.ens.getContenthash('ethereum.eth');
   * console.log(hash);
   * > 'QmaEBknbGT4bTQiQoe2VNgBJbRfygQGktnaW5TbuKixjYL'
   * ```
   */    getContenthash(e) {
        return j(this, void 0, void 0, (function*() {
            return this._resolver.getContenthash(e);
        }));
    }
    /**
   * Checks if the current used network is synced and looks for ENS support there.
   * Throws an error if not.
   * @returns - The address of the ENS registry if the network has been detected successfully
   * @example
   * ```ts
   * console.log(await web3.eth.ens.checkNetwork());
   * > '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
   * ```
   */    checkNetwork() {
        return j(this, void 0, void 0, (function*() {
            const e = Date.now() / 1e3;
            if (!this._lastSyncCheck || e - this._lastSyncCheck > 3600) {
                const t = yield o(this);
                if ("boolean" != typeof t || t) throw new s;
                this._lastSyncCheck = e;
            }
            if (this._detectedAddress) return this._detectedAddress;
            const n = yield y(this, Object.assign(Object.assign({}, this.defaultReturnFormat), {
                number: t.HEX
            })), i = w[g[n]];
            if (void 0 === i) throw new r(n);
            return this._detectedAddress = i, this._detectedAddress;
        }));
    }
    /**
   * Returns true if the related Resolver does support the given signature or interfaceId.
   * @param ENSName - The ENS name
   * @param interfaceId - The signature of the function or the interfaceId as described in the ENS documentation
   * @returns - `true` if the related Resolver does support the given signature or interfaceId.
   * @example
   * ```ts
   * const supports = await web3.eth.ens.supportsInterface('ethereum.eth', 'addr(bytes32');
   * console.log(supports);
   * > true
   * ```
   */    supportsInterface(e, t) {
        return j(this, void 0, void 0, (function*() {
            return this._resolver.supportsInterface(e, t);
        }));
    }
    /**
   * @returns - Returns all events that can be emitted by the ENS registry.
   */    get events() {
        return this._registry.events;
    }
    /**
   * Sets the address of an ENS name in his resolver.
   * @param name - The ENS name
   * @param address - The address to set
   * @param txConfig - (Optional) The transaction config
   * @returns - The transaction receipt
   * ```ts
   * const receipt = await ens.setAddress('web3js.eth','0xe2597eb05cf9a87eb1309e86750c903ec38e527e');
   *```
   */    setAddress(e, t, n) {
        return j(this, void 0, void 0, (function*() {
            return this._resolver.setAddress(e, t, n);
        }));
    }
}

export { E, w as r };

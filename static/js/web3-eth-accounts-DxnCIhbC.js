import { p as e } from "./crc-32-BOb1C-oO.js";

import { X as t, Y as r, Z as o, _ as i, $ as s, a0 as a, a1 as n, a2 as c, a3 as d, a4 as h, a5 as l } from "./web3-errors-hzVYhHGn.js";

import { i as f, j as u, k as m, l as g, b as p, f as v, v as b } from "./web3-validator-BARD4gRE.js";

import { b as k } from "./web3-types-DSrrWgZ8.js";

import { R as y } from "./@ethereumjs-aMURc4PS.js";

import { e as E, k as w, p as P, s as I, a as S, d as x } from "./ethereum-cryptography-wqlT3DIR.js";

import { e as B } from "./@noble-Cuw1cgUn.js";

import { p as A, w as T, o as C, J as O, E as H, I as L, K as D, x as F, L as _, M as R, B as G, z as M, N, O as z } from "./web3-utils-CA0vZo5F.js";

var $, U = function(e, t, r, o) {
    return new (r || (r = Promise))((function(i, s) {
        function a(e) {
            try {
                c(o.next(e));
            } catch (t) {
                s(t);
            }
        }
        function n(e) {
            try {
                c(o.throw(e));
            } catch (t) {
                s(t);
            }
        }
        function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                e(t);
            }))).then(a, n);
        }
        c((o = o.apply(e, t || [])).next());
    }));
};

class j extends k {
    constructor() {
        super(...arguments), this._addressMap =  new Map, this._defaultKeyName = "web3js_wallet";
    }
    /**
   * Get the storage object of the browser
   *
   * @returns the storage
   */    static getStorage() {
        let e;
        try {
            e = window.localStorage;
            const t = "__storage_test__";
            return e.setItem(t, t), e.removeItem(t), e;
        } catch (t) {
            return !t || // everything except Firefox
            22 !== t.code && // Firefox
            1014 !== t.code && // test name field too, because code might not be present
            // everything except Firefox
            "QuotaExceededError" !== t.name && // Firefox
            "NS_ERROR_DOM_QUOTA_REACHED" !== t.name || f(e) || 0 === e.length ? void 0 : e;
        }
    }
    /**
   * Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.
   *
   * @param numberOfAccounts - Number of accounts to create. Leave empty to create an empty wallet.
   * @returns The wallet
   * ```ts
   * web3.eth.accounts.wallet.create(2)
   * > Wallet(2) [
   *   {
   *     address: '0xde38310a42B751AE57d30cFFF4a0A3c52A442fCE',
   *     privateKey: '0x6422c9d28efdcbee93c1d32a5fc6fd6fa081b985487885296cf8c9bbb5872600',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   {
   *     address: '0x766BF755246d924B1d017Fdb5390f38a60166691',
   *     privateKey: '0x756530f13c0eb636ebdda655335f5dea9921e3362e2e588b0ad59e556f7751f0',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _addressMap: Map(2) {
   *     '0xde38310a42b751ae57d30cfff4a0a3c52a442fce' => 0,
   *     '0x766bf755246d924b1d017fdb5390f38a60166691' => 1
   *   },
   *   _defaultKeyName: 'web3js_wallet'
   * ]
   *
   * ```
   */    create(e) {
        for (let t = 0; t < e; t += 1) this.add(this._accountProvider.create());
        return this;
    }
    /**
   * Adds an account using a private key or account object to the wallet.
   *
   * @param account - A private key or account object
   * @returns The wallet
   *
   * ```ts
   * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
   * > Wallet(1) [
   *   {
   *     address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
   *     privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _addressMap: Map(1) { '0x85d70633b90e03e0276b98880286d0d055685ed7' => 0 },
   *   _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */    add(e) {
        var t;
        if ("string" == typeof e) return this.add(this._accountProvider.privateKeyToAccount(e));
        let r = this.length;
        return this.get(e.address) && (r = null !== (t = this._addressMap.get(e.address.toLowerCase())) && void 0 !== t ? t : r), 
        this._addressMap.set(e.address.toLowerCase(), r), this[r] = e, this;
    }
    /**
   * Get the account of the wallet with either the index or public address.
   *
   * @param addressOrIndex - A string of the address or number index within the wallet.
   * @returns The account object or undefined if the account doesn't exist
   */    get(e) {
        if ("string" == typeof e) {
            const t = this._addressMap.get(e.toLowerCase());
            return f(t) ? void 0 : this[t];
        }
        return this[e];
    }
    /**
   * Removes an account from the wallet.
   *
   * @param addressOrIndex - The account address, or index in the wallet.
   * @returns true if the wallet was removed. false if it couldn't be found.
   * ```ts
   * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
   *
   * web3.eth.accounts.wallet.remove('0x85D70633b90e03e0276B98880286D0D055685ed7');
   * > true
   * web3.eth.accounts.wallet
   * > Wallet(0) [
   * _accountProvider: {
   *   create: [Function: create],
   *   privateKeyToAccount: [Function: privateKeyToAccount],
   *   decrypt: [Function: decrypt]
   * },
   * _addressMap: Map(0) {},
   * _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */    remove(e) {
        if ("string" == typeof e) {
            const t = this._addressMap.get(e.toLowerCase());
            return !f(t) && (this._addressMap.delete(e.toLowerCase()), this.splice(t, 1), !0);
        }
        return !!this[e] && (this.splice(e, 1), !0);
    }
    /**
   * Securely empties the wallet and removes all its accounts.
   * Use this with *caution as it will remove all accounts stored in local wallet.
   *
   * @returns The wallet object
   * ```ts
   *
   * web3.eth.accounts.wallet.clear();
   * > Wallet(0) [
   * _accountProvider: {
   *   create: [Function: create],
   *   privateKeyToAccount: [Function: privateKeyToAccount],
   *   decrypt: [Function: decrypt]
   * },
   * _addressMap: Map(0) {},
   * _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */    clear() {
        return this._addressMap.clear(), this.length = 0, this;
    }
    /**
   * Encrypts all wallet accounts to an array of encrypted keystore v3 objects.
   *
   * @param password - The password which will be used for encryption
   * @param options - encryption options
   * @returns An array of the encrypted keystore v3.
   *
   * ```ts
   * web3.eth.accounts.wallet.create(1)
   * web3.eth.accounts.wallet.encrypt("abc").then(console.log);
   * > [
   * '{"version":3,"id":"fa46e213-a7c3-4844-b903-dd14d39cc7db",
   * "address":"fa3e41a401609103c241431cbdee8623ae2a321a","crypto":
   * {"ciphertext":"8d179a911d6146ad2924e86bf493ed89b8ff3596ffec0816e761c542016ab13c",
   * "cipherparams":{"iv":"acc888c6cf4a19b86846cef0185a7164"},"cipher":"aes-128-ctr",
   * "kdf":"scrypt","kdfparams":{"n":8192,"r":8,"p":1,"dklen":32,"salt":"6a743c9b367d15f4758e4f3f3378ff0fd443708d1c64854e07588ea5331823ae"},
   * "mac":"410544c8307e3691fda305eb3722d82c3431f212a87daa119a21587d96698b57"}}'
   * ]
   * ```
   */    encrypt(e, t) {
        return U(this, void 0, void 0, (function*() {
            return Promise.all(this.map((r => U(this, void 0, void 0, (function*() {
                return r.encrypt(e, t);
            })))));
        }));
    }
    /**
   * Decrypts keystore v3 objects.
   *
   * @param encryptedWallets - An array of encrypted keystore v3 objects to decrypt
   * @param password - The password to encrypt with
   * @param options - decrypt options for the wallets
   * @returns The decrypted wallet object
   *
   * ```ts
   * web3.eth.accounts.wallet.decrypt([
   * { version: 3,
   * id: '83191a81-aaca-451f-b63d-0c5f3b849289',
   * address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
   * crypto:
   * { ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
   *   cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
   *   cipher: 'aes-128-ctr',
   *   kdf: 'scrypt',
   *   kdfparams:
   *    { dklen: 32,
   *      salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
   *      n: 262144,
   *      r: 8,
   *      p: 1 },
   *   mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9' } },
   * { version: 3,
   * id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
   * address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
   * crypto:
   * { ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
   *   cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
   *   cipher: 'aes-128-ctr',
   *   kdf: 'scrypt',
   *   kdfparams:
   *    { dklen: 32,
   *      salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
   *      n: 262144,
   *      r: 8,
   *      p: 1 },
   *   mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0' } }
   * ], 'test').then(console.log)
   * > Wallet {
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _defaultKeyName: 'web3js_wallet',
   *   _accounts: {
   *     '0x85d70633b90e03e0276b98880286d0d055685ed7': {
   *       address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
   *       privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     },
   *     '0x06f702337909c06c82b09b7a22f0a2f0855d1f68': {
   *       address: '0x06F702337909C06C82B09B7A22F0a2f0855d1F68',
   *       privateKey: '87a51da18900da7398b3bab03996833138f269f8f66dd1237b98df6b9ce14573',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     },
   *     '0xb5d89661b59a9af0b34f58d19138baa2de48baaf': {
   *       address: '0xB5d89661B59a9aF0b34f58D19138bAa2de48BAaf',
   *       privateKey: '7ee61c5282979aae9dd795bb6a54e8bdc2bfe009acb64eb9a67322eec3b3da6e',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     }
   *   }
   * }
   * ```
   */    decrypt(e, t, r) {
        return U(this, void 0, void 0, (function*() {
            const o = yield Promise.all(e.map((e => U(this, void 0, void 0, (function*() {
                return this._accountProvider.decrypt(e, t, r);
            })))));
            for (const e of o) this.add(e);
            return this;
        }));
    }
    /**
   * Stores the wallet encrypted and as string in local storage.
   * **__NOTE:__** Browser only
   *
   * @param password - The password to encrypt the wallet
   * @param keyName - (optional) The key used for the local storage position, defaults to `"web3js_wallet"`.
   * @returns Will return boolean value true if saved properly
   * ```ts
   * web3.eth.accounts.wallet.save('test#!$');
   * >true
   * ```
   */    save(e, t) {
        return U(this, void 0, void 0, (function*() {
            const r = j.getStorage();
            if (!r) throw new Error("Local storage not available.");
            return r.setItem(null != t ? t : this._defaultKeyName, JSON.stringify(yield this.encrypt(e))), 
            !0;
        }));
    }
    /**
   * Loads a wallet from local storage and decrypts it.
   * **__NOTE:__** Browser only
   *
   * @param password - The password to decrypt the wallet.
   * @param keyName - (optional)The key used for local storage position, defaults to `web3js_wallet"`
   * @returns Returns the wallet object
   *
   * ```ts
   * web3.eth.accounts.wallet.save('test#!$');
   * > true
   * web3.eth.accounts.wallet.load('test#!$');
   * { defaultKeyName: "web3js_wallet",
   *   length: 0,
   *   _accounts: Accounts {_requestManager: RequestManager, givenProvider: Proxy, providers: {…}, _provider: WebsocketProvider, …},
   *   [[Prototype]]: Object
   * }
   * ```
   */    load(e, t) {
        return U(this, void 0, void 0, (function*() {
            const r = j.getStorage();
            if (!r) throw new Error("Local storage not available.");
            const o = r.getItem(null != t ? t : this._defaultKeyName);
            return o && (yield this.decrypt(JSON.parse(o) || [], e)), this;
        }));
    }
}

const q = null !== ($ = B) && void 0 !== $ ? $ : E, K = BigInt("0xffffffffffffffff"), V = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), J = q.CURVE.n / BigInt(2), X = {
    type: "object",
    required: [ "crypto", "id", "version", "address" ],
    properties: {
        crypto: {
            type: "object",
            required: [ "cipher", "ciphertext", "cipherparams", "kdf", "kdfparams", "mac" ],
            properties: {
                cipher: {
                    type: "string"
                },
                ciphertext: {
                    type: "string"
                },
                cipherparams: {
                    type: "object"
                },
                kdf: {
                    type: "string"
                },
                kdfparams: {
                    type: "object"
                },
                salt: {
                    type: "string"
                },
                mac: {
                    type: "string"
                }
            }
        },
        id: {
            type: "string"
        },
        version: {
            type: "number"
        },
        address: {
            type: "string"
        }
    }
};

var W, Y, Z, Q, ee, te, re, oe, ie, se, ae, ne;

(Y = W || (W = {}))[Y.Mainnet = 1] = "Mainnet", Y[Y.Goerli = 5] = "Goerli", Y[Y.Sepolia = 11155111] = "Sepolia", 
(Q = Z || (Z = {})).Chainstart = "chainstart", Q.Homestead = "homestead", Q.Dao = "dao", 
Q.TangerineWhistle = "tangerineWhistle", Q.SpuriousDragon = "spuriousDragon", Q.Byzantium = "byzantium", 
Q.Constantinople = "constantinople", Q.Petersburg = "petersburg", Q.Istanbul = "istanbul", 
Q.MuirGlacier = "muirGlacier", Q.Berlin = "berlin", Q.London = "london", Q.ArrowGlacier = "arrowGlacier", 
Q.GrayGlacier = "grayGlacier", Q.MergeForkIdTransition = "mergeForkIdTransition", 
Q.Merge = "merge", Q.Shanghai = "shanghai", Q.ShardingForkDev = "shardingFork", 
(te = ee || (ee = {})).ProofOfStake = "pos", te.ProofOfWork = "pow", te.ProofOfAuthority = "poa", 
(oe = re || (re = {})).Ethash = "ethash", oe.Clique = "clique", oe.Casper = "casper", 
(se = ie || (ie = {})).PolygonMainnet = "polygon-mainnet", se.PolygonMumbai = "polygon-mumbai", 
se.ArbitrumRinkebyTestnet = "arbitrum-rinkeby-testnet", se.ArbitrumOne = "arbitrum-one", 
se.xDaiChain = "x-dai-chain", se.OptimisticKovan = "optimistic-kovan", se.OptimisticEthereum = "optimistic-ethereum", 
(ne = ae || (ae = {}))[ne.Number = 0] = "Number", ne[ne.BigInt = 1] = "BigInt", 
ne[ne.Uint8Array = 2] = "Uint8Array", ne[ne.PrefixedHexString = 3] = "PrefixedHexString";

const ce = e => {
    if ("string" != typeof e) throw new Error("[stripHexPrefix] input must be type 'string', received " + typeof e);
    return m(e) ? e.slice(2) : e;
};

const de = function(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Received an invalid integer type: ${e}`);
    return `0x${e.toString(16)}`;
};

function he(e, t = !0) {
    var r, o;
    const {name: i, config: s, difficulty: a, mixHash: n, gasLimit: c, coinbase: d, baseFeePerGas: h} = e;
    let {extraData: l, timestamp: f, nonce: u} = e;
    const g = Number(f), {chainId: p} = s;
    if ("" === l && (l = "0x"), m(f) || (f = de(parseInt(f))), 18 !== u.length && (u = function(e) {
        return e && "0x0" !== e ? m(e) ? `0x${ce(e).padStart(16, "0")}` : `0x${e.padStart(16, "0")}` : "0x0000000000000000";
    }(u)), s.eip155Block !== s.eip158Block) throw new Error("EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork");
    const v = {
        name: i,
        chainId: p,
        networkId: p,
        genesis: {
            timestamp: f,
            // eslint-disable-next-line radix
            gasLimit: parseInt(c),
            // eslint-disable-next-line radix
            difficulty: parseInt(a),
            nonce: u,
            extraData: l,
            mixHash: n,
            coinbase: d,
            baseFeePerGas: h
        },
        hardfork: void 0,
        hardforks: [],
        bootstrapNodes: [],
        consensus: 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        void 0 !== s.clique ? {
            type: "poa",
            algorithm: "clique",
            clique: {
                // The recent geth genesis seems to be using blockperiodseconds
                // and epochlength for clique specification
                // see: https://hackmd.io/PqZgMpnkSWCWv5joJoFymQ
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                period: null !== (r = s.clique.period) && void 0 !== r ? r : s.clique.blockperiodseconds,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-assignment
                epoch: null !== (o = s.clique.epoch) && void 0 !== o ? o : s.clique.epochlength
            }
        } : {
            type: "pow",
            algorithm: "ethash",
            ethash: {}
        }
    }, b = {
        [Z.Homestead]: {
            name: "homesteadBlock"
        },
        [Z.Dao]: {
            name: "daoForkBlock"
        },
        [Z.TangerineWhistle]: {
            name: "eip150Block"
        },
        [Z.SpuriousDragon]: {
            name: "eip155Block"
        },
        [Z.Byzantium]: {
            name: "byzantiumBlock"
        },
        [Z.Constantinople]: {
            name: "constantinopleBlock"
        },
        [Z.Petersburg]: {
            name: "petersburgBlock"
        },
        [Z.Istanbul]: {
            name: "istanbulBlock"
        },
        [Z.MuirGlacier]: {
            name: "muirGlacierBlock"
        },
        [Z.Berlin]: {
            name: "berlinBlock"
        },
        [Z.London]: {
            name: "londonBlock"
        },
        [Z.MergeForkIdTransition]: {
            name: "mergeForkBlock",
            postMerge: t
        },
        [Z.Shanghai]: {
            name: "shanghaiTime",
            postMerge: !0,
            isTimestamp: !0
        },
        [Z.ShardingForkDev]: {
            name: "shardingForkTime",
            postMerge: !0,
            isTimestamp: !0
        }
    }, k = Object.keys(b).reduce(((e, t) => (e[b[t].name] = t, e)), {}), y = Object.keys(s).filter((
    // eslint-disable-next-line no-null/no-null, @typescript-eslint/no-unsafe-member-access
    e => void 0 !== k[e] && void 0 !== s[e] && null !== s[e]));
    if (v.hardforks = y.map((e => ({
        name: k[e],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        block: 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        !0 === b[k[e]].isTimestamp || // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        "number" != typeof s[e] ? 
        // eslint-disable-next-line no-null/no-null
        null : 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        s[e],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        timestamp: 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        !0 === b[k[e]].isTimestamp && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        "number" == typeof s[e] ? 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        s[e] : void 0
    }))).filter((e => null !== e.block || void 0 !== e.timestamp)), v.hardforks.sort(((e, t) => {
        var r, o;
        return (null !== (r = e.block) && void 0 !== r ? r : 1 / 0) - (null !== (o = t.block) && void 0 !== o ? o : 1 / 0);
    })), v.hardforks.sort(((e, t) => {
        var r, o;
        return (null !== (r = e.timestamp) && void 0 !== r ? r : g) - (null !== (o = t.timestamp) && void 0 !== o ? o : g);
    })), void 0 !== s.terminalTotalDifficulty) {
        const e = {
            name: Z.Merge,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            ttd: s.terminalTotalDifficulty,
            // eslint-disable-next-line no-null/no-null
            block: null
        }, t = v.hardforks.findIndex((
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        e => {
            var t;
            return !0 === (null === (t = b[e.name]) || void 0 === t ? void 0 : t.postMerge);
        }));
        -1 !== t ? v.hardforks.splice(t, 0, e) : v.hardforks.push(e);
    }
    const E = v.hardforks.length > 0 ? v.hardforks.slice(-1)[0] : void 0;
    return v.hardfork = null == E ? void 0 : E.name, v.hardforks.unshift({
        name: Z.Chainstart,
        block: 0
    }), v;
}

function le(e) {
    let t = e;
    if ("string" != typeof t) throw new Error("[padToEven] value must be type 'string', received " + typeof t);
    return t.length % 2 && (t = `0${t}`), t;
}

const fe = function(e) {
    var t;
    if (null == e) return new Uint8Array;
    if (e instanceof Uint8Array) return e;
    if ("Uint8Array" === (null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name)) return Uint8Array.from(e);
    if (Array.isArray(e)) return Uint8Array.from(e);
    if ("string" == typeof e) {
        if (!u(e)) throw new Error(`Cannot convert string to Uint8Array. only supports 0x-prefixed hex strings and this string was given: ${e}`);
        return A(le(ce(e)));
    }
    if ("number" == typeof e) return fe(T(e));
    if ("bigint" == typeof e) {
        if (e < BigInt(0)) throw new Error(`Cannot convert negative bigint to Uint8Array. Given: ${e}`);
        let t = e.toString(16);
        return t.length % 2 && (t = `0${t}`), fe(`0x${t}`);
    }
    if (e.toArray) return Uint8Array.from(e.toArray());
    throw new Error("invalid type");
};

function ue(e) {
    const t = C(e);
    return "0x" === t ? BigInt(0) : BigInt(t);
}

const me = function(e) {
    return new Uint8Array(e).fill(0);
};

function ge(e) {
    if (!O(e)) {
        throw new Error(`This method only supports Uint8Array but input was: ${e}`);
    }
}

const pe = function(e, t) {
    return ge(e), function(e, t) {
        const r = me(t);
        return e.length < t ? (r.set(e, t - e.length), r) : e.subarray(-t);
    }(e, t);
};

const ve = function(e) {
    return ge(e), function(e) {
        let t = e[0];
        for (;e.length > 0 && "0" === t.toString(); ) t = (e = e.slice(1))[0];
        return e;
    }(e);
}, be = e => `0x${e.toString(16)}`;

function ke(e) {
    return ve(fe(`0x${e.toString(16)}`));
}

const ye = function(e, t, r, o, i) {
    const s = function(e, t) {
        return e === BigInt(0) || e === BigInt(1) ? e : void 0 === t ? e - BigInt(27) : e - (t * BigInt(2) + BigInt(35));
    }(t, i);
    if (!function(e) {
        return e === BigInt(0) || e === BigInt(1);
    }(s)) throw new Error("Invalid signature v value");
    return new q.Signature(ue(r), ue(o)).addRecoveryBit(Number(s)).recoverPublicKey(e).toRawBytes(!1).slice(1);
};

function Ee(e, t) {
    if (null === e) return null;
    if (void 0 === e) return;
    if ("string" == typeof e && !u(e)) throw new Error(`A string must be provided with a 0x-prefix, given: ${e}`);
    if ("number" == typeof e && !Number.isSafeInteger(e)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
    const r = fe(e);
    switch (t) {
      case ae.Uint8Array:
        return r;

      case ae.BigInt:
        return ue(r);

      case ae.Number:
        {
            const e = ue(r);
            if (e > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
            return Number(e);
        }

      case ae.PrefixedHexString:
        return C(r);

      default:
        throw new Error("unknown outputType");
    }
}

const we = {
    name: "goerli",
    chainId: 5,
    networkId: 5,
    defaultHardfork: "merge",
    consensus: {
        type: "poa",
        algorithm: "clique",
        clique: {
            period: 15,
            epoch: 3e4
        }
    },
    comment: "Cross-client PoA test network",
    url: "https://github.com/goerli/testnet",
    genesis: {
        timestamp: "0x5c51a607",
        gasLimit: 10485760,
        difficulty: 1,
        nonce: "0x0000000000000000",
        extraData: "0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    hardforks: [ {
        name: "chainstart",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "homestead",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "tangerineWhistle",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "spuriousDragon",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "byzantium",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "constantinople",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "petersburg",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "istanbul",
        block: 1561651,
        forkHash: "0xc25efa5c"
    }, {
        name: "berlin",
        block: 4460644,
        forkHash: "0x757a1c47"
    }, {
        name: "london",
        block: 5062605,
        forkHash: "0xb8c6299d"
    }, {
        "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818",
        name: "merge",
        ttd: "10790000",
        block: 7382819,
        forkHash: "0xb8c6299d"
    }, {
        name: "mergeForkIdTransition",
        block: null,
        forkHash: null
    }, {
        name: "shanghai",
        block: null,
        forkHash: null
    } ],
    bootstrapNodes: [],
    dnsNetworks: [ "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net" ]
}, Pe = {
    name: "mainnet",
    chainId: 1,
    networkId: 1,
    defaultHardfork: "merge",
    consensus: {
        type: "pow",
        algorithm: "ethash",
        ethash: {}
    },
    comment: "The Ethereum main chain",
    url: "https://ethstats.net/",
    genesis: {
        gasLimit: 5e3,
        difficulty: 17179869184,
        nonce: "0x0000000000000042",
        extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
    },
    hardforks: [ {
        name: "chainstart",
        block: 0,
        forkHash: "0xfc64ec04"
    }, {
        name: "homestead",
        block: 115e4,
        forkHash: "0x97c2c34c"
    }, {
        name: "dao",
        block: 192e4,
        forkHash: "0x91d1f948"
    }, {
        name: "tangerineWhistle",
        block: 2463e3,
        forkHash: "0x7a64da13"
    }, {
        name: "spuriousDragon",
        block: 2675e3,
        forkHash: "0x3edd5b10"
    }, {
        name: "byzantium",
        block: 437e4,
        forkHash: "0xa00bc324"
    }, {
        name: "constantinople",
        block: 728e4,
        forkHash: "0x668db0af"
    }, {
        name: "petersburg",
        block: 728e4,
        forkHash: "0x668db0af"
    }, {
        name: "istanbul",
        block: 9069e3,
        forkHash: "0x879d6e30"
    }, {
        name: "muirGlacier",
        block: 92e5,
        forkHash: "0xe029e991"
    }, {
        name: "berlin",
        block: 12244e3,
        forkHash: "0x0eb440f6"
    }, {
        name: "london",
        block: 12965e3,
        forkHash: "0xb715077d"
    }, {
        name: "arrowGlacier",
        block: 13773e3,
        forkHash: "0x20c327fc"
    }, {
        name: "grayGlacier",
        block: 1505e4,
        forkHash: "0xf0afd0e3"
    }, {
        "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393",
        name: "merge",
        ttd: "58750000000000000000000",
        block: 15537394,
        forkHash: "0xf0afd0e3"
    }, {
        name: "mergeForkIdTransition",
        block: null,
        forkHash: null
    }, {
        name: "shanghai",
        block: null,
        forkHash: null
    } ],
    bootstrapNodes: [],
    dnsNetworks: [ "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net" ]
}, Ie = {
    name: "sepolia",
    chainId: 11155111,
    networkId: 11155111,
    defaultHardfork: "merge",
    consensus: {
        type: "pow",
        algorithm: "ethash",
        ethash: {}
    },
    comment: "PoW test network to replace Ropsten",
    url: "https://github.com/ethereum/go-ethereum/pull/23730",
    genesis: {
        timestamp: "0x6159af19",
        gasLimit: 3e7,
        difficulty: 131072,
        nonce: "0x0000000000000000",
        extraData: "0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"
    },
    hardforks: [ {
        name: "chainstart",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "homestead",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "tangerineWhistle",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "spuriousDragon",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "byzantium",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "constantinople",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "petersburg",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "istanbul",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "muirGlacier",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "berlin",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "london",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408",
        name: "merge",
        ttd: "17000000000000000",
        block: 1450409,
        forkHash: "0xfe3366e7"
    }, {
        name: "mergeForkIdTransition",
        block: 1735371,
        forkHash: "0xb96cbd13"
    }, {
        name: "shanghai",
        block: null,
        timestamp: "1677557088",
        forkHash: "0xf7f9bc08"
    } ],
    bootstrapNodes: [],
    dnsNetworks: [ "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net" ]
}, Se = {
    1153: {
        name: "EIP-1153",
        number: 1153,
        comment: "Transient Storage",
        url: "https://eips.ethereum.org/EIPS/eip-1153",
        status: "Review",
        minimumHardfork: "chainstart",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {
            tstore: {
                v: 100,
                d: "Base fee of the TSTORE opcode"
            },
            tload: {
                v: 100,
                d: "Base fee of the TLOAD opcode"
            }
        },
        vm: {},
        pow: {}
    },
    1559: {
        name: "EIP-1559",
        number: 1559,
        comment: "Fee market change for ETH 1.0 chain",
        url: "https://eips.ethereum.org/EIPS/eip-1559",
        status: "Final",
        minimumHardfork: "berlin",
        requiredEIPs: [ 2930 ],
        gasConfig: {
            baseFeeMaxChangeDenominator: {
                v: 8,
                d: "Maximum base fee change denominator"
            },
            elasticityMultiplier: {
                v: 2,
                d: "Maximum block gas target elasticity"
            },
            initialBaseFee: {
                v: 1e9,
                d: "Initial base fee on first EIP1559 block"
            }
        },
        gasPrices: {},
        vm: {},
        pow: {}
    },
    2315: {
        name: "EIP-2315",
        number: 2315,
        comment: "Simple subroutines for the EVM",
        url: "https://eips.ethereum.org/EIPS/eip-2315",
        status: "Draft",
        minimumHardfork: "istanbul",
        gasConfig: {},
        gasPrices: {
            beginsub: {
                v: 2,
                d: "Base fee of the BEGINSUB opcode"
            },
            returnsub: {
                v: 5,
                d: "Base fee of the RETURNSUB opcode"
            },
            jumpsub: {
                v: 10,
                d: "Base fee of the JUMPSUB opcode"
            }
        },
        vm: {},
        pow: {}
    },
    2537: {
        name: "EIP-2537",
        number: 2537,
        comment: "BLS12-381 precompiles",
        url: "https://eips.ethereum.org/EIPS/eip-2537",
        status: "Draft",
        minimumHardfork: "chainstart",
        gasConfig: {},
        gasPrices: {
            Bls12381G1AddGas: {
                v: 600,
                d: "Gas cost of a single BLS12-381 G1 addition precompile-call"
            },
            Bls12381G1MulGas: {
                v: 12e3,
                d: "Gas cost of a single BLS12-381 G1 multiplication precompile-call"
            },
            Bls12381G2AddGas: {
                v: 4500,
                d: "Gas cost of a single BLS12-381 G2 addition precompile-call"
            },
            Bls12381G2MulGas: {
                v: 55e3,
                d: "Gas cost of a single BLS12-381 G2 multiplication precompile-call"
            },
            Bls12381PairingBaseGas: {
                v: 115e3,
                d: "Base gas cost of BLS12-381 pairing check"
            },
            Bls12381PairingPerPairGas: {
                v: 23e3,
                d: "Per-pair gas cost of BLS12-381 pairing check"
            },
            Bls12381MapG1Gas: {
                v: 5500,
                d: "Gas cost of BLS12-381 map field element to G1"
            },
            Bls12381MapG2Gas: {
                v: 11e4,
                d: "Gas cost of BLS12-381 map field element to G2"
            },
            Bls12381MultiExpGasDiscount: {
                v: [ [ 1, 1200 ], [ 2, 888 ], [ 3, 764 ], [ 4, 641 ], [ 5, 594 ], [ 6, 547 ], [ 7, 500 ], [ 8, 453 ], [ 9, 438 ], [ 10, 423 ], [ 11, 408 ], [ 12, 394 ], [ 13, 379 ], [ 14, 364 ], [ 15, 349 ], [ 16, 334 ], [ 17, 330 ], [ 18, 326 ], [ 19, 322 ], [ 20, 318 ], [ 21, 314 ], [ 22, 310 ], [ 23, 306 ], [ 24, 302 ], [ 25, 298 ], [ 26, 294 ], [ 27, 289 ], [ 28, 285 ], [ 29, 281 ], [ 30, 277 ], [ 31, 273 ], [ 32, 269 ], [ 33, 268 ], [ 34, 266 ], [ 35, 265 ], [ 36, 263 ], [ 37, 262 ], [ 38, 260 ], [ 39, 259 ], [ 40, 257 ], [ 41, 256 ], [ 42, 254 ], [ 43, 253 ], [ 44, 251 ], [ 45, 250 ], [ 46, 248 ], [ 47, 247 ], [ 48, 245 ], [ 49, 244 ], [ 50, 242 ], [ 51, 241 ], [ 52, 239 ], [ 53, 238 ], [ 54, 236 ], [ 55, 235 ], [ 56, 233 ], [ 57, 232 ], [ 58, 231 ], [ 59, 229 ], [ 60, 228 ], [ 61, 226 ], [ 62, 225 ], [ 63, 223 ], [ 64, 222 ], [ 65, 221 ], [ 66, 220 ], [ 67, 219 ], [ 68, 219 ], [ 69, 218 ], [ 70, 217 ], [ 71, 216 ], [ 72, 216 ], [ 73, 215 ], [ 74, 214 ], [ 75, 213 ], [ 76, 213 ], [ 77, 212 ], [ 78, 211 ], [ 79, 211 ], [ 80, 210 ], [ 81, 209 ], [ 82, 208 ], [ 83, 208 ], [ 84, 207 ], [ 85, 206 ], [ 86, 205 ], [ 87, 205 ], [ 88, 204 ], [ 89, 203 ], [ 90, 202 ], [ 91, 202 ], [ 92, 201 ], [ 93, 200 ], [ 94, 199 ], [ 95, 199 ], [ 96, 198 ], [ 97, 197 ], [ 98, 196 ], [ 99, 196 ], [ 100, 195 ], [ 101, 194 ], [ 102, 193 ], [ 103, 193 ], [ 104, 192 ], [ 105, 191 ], [ 106, 191 ], [ 107, 190 ], [ 108, 189 ], [ 109, 188 ], [ 110, 188 ], [ 111, 187 ], [ 112, 186 ], [ 113, 185 ], [ 114, 185 ], [ 115, 184 ], [ 116, 183 ], [ 117, 182 ], [ 118, 182 ], [ 119, 181 ], [ 120, 180 ], [ 121, 179 ], [ 122, 179 ], [ 123, 178 ], [ 124, 177 ], [ 125, 176 ], [ 126, 176 ], [ 127, 175 ], [ 128, 174 ] ],
                d: "Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"
            }
        },
        vm: {},
        pow: {}
    },
    2565: {
        name: "EIP-2565",
        number: 2565,
        comment: "ModExp gas cost",
        url: "https://eips.ethereum.org/EIPS/eip-2565",
        status: "Final",
        minimumHardfork: "byzantium",
        gasConfig: {},
        gasPrices: {
            modexpGquaddivisor: {
                v: 3,
                d: "Gquaddivisor from modexp precompile for gas calculation"
            }
        },
        vm: {},
        pow: {}
    },
    2718: {
        name: "EIP-2718",
        comment: "Typed Transaction Envelope",
        url: "https://eips.ethereum.org/EIPS/eip-2718",
        status: "Final",
        minimumHardfork: "chainstart",
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    2929: {
        name: "EIP-2929",
        comment: "Gas cost increases for state access opcodes",
        url: "https://eips.ethereum.org/EIPS/eip-2929",
        status: "Final",
        minimumHardfork: "chainstart",
        gasConfig: {},
        gasPrices: {
            coldsload: {
                v: 2100,
                d: "Gas cost of the first read of storage from a given location (per transaction)"
            },
            coldaccountaccess: {
                v: 2600,
                d: "Gas cost of the first read of a given address (per transaction)"
            },
            warmstorageread: {
                v: 100,
                d: "Gas cost of reading storage locations which have already loaded 'cold'"
            },
            sstoreCleanGasEIP2200: {
                v: 2900,
                d: "Once per SSTORE operation from clean non-zero to something else"
            },
            sstoreNoopGasEIP2200: {
                v: 100,
                d: "Once per SSTORE operation if the value doesn't change"
            },
            sstoreDirtyGasEIP2200: {
                v: 100,
                d: "Once per SSTORE operation if a dirty value is changed"
            },
            sstoreInitRefundEIP2200: {
                v: 19900,
                d: "Once per SSTORE operation for resetting to the original zero value"
            },
            sstoreCleanRefundEIP2200: {
                v: 4900,
                d: "Once per SSTORE operation for resetting to the original non-zero value"
            },
            call: {
                v: 0,
                d: "Base fee of the CALL opcode"
            },
            callcode: {
                v: 0,
                d: "Base fee of the CALLCODE opcode"
            },
            delegatecall: {
                v: 0,
                d: "Base fee of the DELEGATECALL opcode"
            },
            staticcall: {
                v: 0,
                d: "Base fee of the STATICCALL opcode"
            },
            balance: {
                v: 0,
                d: "Base fee of the BALANCE opcode"
            },
            extcodesize: {
                v: 0,
                d: "Base fee of the EXTCODESIZE opcode"
            },
            extcodecopy: {
                v: 0,
                d: "Base fee of the EXTCODECOPY opcode"
            },
            extcodehash: {
                v: 0,
                d: "Base fee of the EXTCODEHASH opcode"
            },
            sload: {
                v: 0,
                d: "Base fee of the SLOAD opcode"
            },
            sstore: {
                v: 0,
                d: "Base fee of the SSTORE opcode"
            }
        },
        vm: {},
        pow: {}
    },
    2930: {
        name: "EIP-2930",
        comment: "Optional access lists",
        url: "https://eips.ethereum.org/EIPS/eip-2930",
        status: "Final",
        minimumHardfork: "istanbul",
        requiredEIPs: [ 2718, 2929 ],
        gasConfig: {},
        gasPrices: {
            accessListStorageKeyCost: {
                v: 1900,
                d: "Gas cost per storage key in an Access List transaction"
            },
            accessListAddressCost: {
                v: 2400,
                d: "Gas cost per storage key in an Access List transaction"
            }
        },
        vm: {},
        pow: {}
    },
    3198: {
        name: "EIP-3198",
        number: 3198,
        comment: "BASEFEE opcode",
        url: "https://eips.ethereum.org/EIPS/eip-3198",
        status: "Final",
        minimumHardfork: "london",
        gasConfig: {},
        gasPrices: {
            basefee: {
                v: 2,
                d: "Gas cost of the BASEFEE opcode"
            }
        },
        vm: {},
        pow: {}
    },
    3529: {
        name: "EIP-3529",
        comment: "Reduction in refunds",
        url: "https://eips.ethereum.org/EIPS/eip-3529",
        status: "Final",
        minimumHardfork: "berlin",
        requiredEIPs: [ 2929 ],
        gasConfig: {
            maxRefundQuotient: {
                v: 5,
                d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
            }
        },
        gasPrices: {
            selfdestructRefund: {
                v: 0,
                d: "Refunded following a selfdestruct operation"
            },
            sstoreClearRefundEIP2200: {
                v: 4800,
                d: "Once per SSTORE operation for clearing an originally existing storage slot"
            }
        },
        vm: {},
        pow: {}
    },
    3540: {
        name: "EIP-3540",
        number: 3540,
        comment: "EVM Object Format (EOF) v1",
        url: "https://eips.ethereum.org/EIPS/eip-3540",
        status: "Review",
        minimumHardfork: "london",
        requiredEIPs: [ 3541 ],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    3541: {
        name: "EIP-3541",
        comment: "Reject new contracts starting with the 0xEF byte",
        url: "https://eips.ethereum.org/EIPS/eip-3541",
        status: "Final",
        minimumHardfork: "berlin",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    3554: {
        name: "EIP-3554",
        comment: "Reduction in refunds",
        url: "Difficulty Bomb Delay to December 1st 2021",
        status: "Final",
        minimumHardfork: "muirGlacier",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {
            difficultyBombDelay: {
                v: 95e5,
                d: "the amount of blocks to delay the difficulty bomb with"
            }
        }
    },
    3607: {
        name: "EIP-3607",
        number: 3607,
        comment: "Reject transactions from senders with deployed code",
        url: "https://eips.ethereum.org/EIPS/eip-3607",
        status: "Final",
        minimumHardfork: "chainstart",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    3651: {
        name: "EIP-3651",
        number: 3198,
        comment: "Warm COINBASE",
        url: "https://eips.ethereum.org/EIPS/eip-3651",
        status: "Review",
        minimumHardfork: "london",
        requiredEIPs: [ 2929 ],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    3670: {
        name: "EIP-3670",
        number: 3670,
        comment: "EOF - Code Validation",
        url: "https://eips.ethereum.org/EIPS/eip-3670",
        status: "Review",
        minimumHardfork: "london",
        requiredEIPs: [ 3540 ],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    3675: {
        name: "EIP-3675",
        number: 3675,
        comment: "Upgrade consensus to Proof-of-Stake",
        url: "https://eips.ethereum.org/EIPS/eip-3675",
        status: "Final",
        minimumHardfork: "london",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    3855: {
        name: "EIP-3855",
        number: 3855,
        comment: "PUSH0 instruction",
        url: "https://eips.ethereum.org/EIPS/eip-3855",
        status: "Review",
        minimumHardfork: "chainstart",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {
            push0: {
                v: 2,
                d: "Base fee of the PUSH0 opcode"
            }
        },
        vm: {},
        pow: {}
    },
    3860: {
        name: "EIP-3860",
        number: 3860,
        comment: "Limit and meter initcode",
        url: "https://eips.ethereum.org/EIPS/eip-3860",
        status: "Review",
        minimumHardfork: "spuriousDragon",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {
            initCodeWordCost: {
                v: 2,
                d: "Gas to pay for each word (32 bytes) of initcode when creating a contract"
            }
        },
        vm: {
            maxInitCodeSize: {
                v: 49152,
                d: "Maximum length of initialization code when creating a contract"
            }
        },
        pow: {}
    },
    4345: {
        name: "EIP-4345",
        number: 4345,
        comment: "Difficulty Bomb Delay to June 2022",
        url: "https://eips.ethereum.org/EIPS/eip-4345",
        status: "Final",
        minimumHardfork: "london",
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {
            difficultyBombDelay: {
                v: 107e5,
                d: "the amount of blocks to delay the difficulty bomb with"
            }
        }
    },
    4399: {
        name: "EIP-4399",
        number: 4399,
        comment: "Supplant DIFFICULTY opcode with PREVRANDAO",
        url: "https://eips.ethereum.org/EIPS/eip-4399",
        status: "Review",
        minimumHardfork: "london",
        requiredEIPs: [],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    5133: {
        name: "EIP-5133",
        number: 5133,
        comment: "Delaying Difficulty Bomb to mid-September 2022",
        url: "https://eips.ethereum.org/EIPS/eip-5133",
        status: "Draft",
        minimumHardfork: "grayGlacier",
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {
            difficultyBombDelay: {
                v: 114e5,
                d: "the amount of blocks to delay the difficulty bomb with"
            }
        }
    }
}, xe = {
    chainstart: {
        name: "chainstart",
        comment: "Start of the Ethereum main chain",
        url: "",
        status: "",
        gasConfig: {
            minGasLimit: {
                v: 5e3,
                d: "Minimum the gas limit may ever be"
            },
            gasLimitBoundDivisor: {
                v: 1024,
                d: "The bound divisor of the gas limit, used in update calculations"
            },
            maxRefundQuotient: {
                v: 2,
                d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
            }
        },
        gasPrices: {
            base: {
                v: 2,
                d: "Gas base cost, used e.g. for ChainID opcode (Istanbul)"
            },
            tierStep: {
                v: [ 0, 2, 3, 5, 8, 10, 20 ],
                d: "Once per operation, for a selection of them"
            },
            exp: {
                v: 10,
                d: "Base fee of the EXP opcode"
            },
            expByte: {
                v: 10,
                d: "Times ceil(log256(exponent)) for the EXP instruction"
            },
            sha3: {
                v: 30,
                d: "Base fee of the SHA3 opcode"
            },
            sha3Word: {
                v: 6,
                d: "Once per word of the SHA3 operation's data"
            },
            sload: {
                v: 50,
                d: "Base fee of the SLOAD opcode"
            },
            sstoreSet: {
                v: 2e4,
                d: "Once per SSTORE operation if the zeroness changes from zero"
            },
            sstoreReset: {
                v: 5e3,
                d: "Once per SSTORE operation if the zeroness does not change from zero"
            },
            sstoreRefund: {
                v: 15e3,
                d: "Once per SSTORE operation if the zeroness changes to zero"
            },
            jumpdest: {
                v: 1,
                d: "Base fee of the JUMPDEST opcode"
            },
            log: {
                v: 375,
                d: "Base fee of the LOG opcode"
            },
            logData: {
                v: 8,
                d: "Per byte in a LOG* operation's data"
            },
            logTopic: {
                v: 375,
                d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"
            },
            create: {
                v: 32e3,
                d: "Base fee of the CREATE opcode"
            },
            call: {
                v: 40,
                d: "Base fee of the CALL opcode"
            },
            callStipend: {
                v: 2300,
                d: "Free gas given at beginning of call"
            },
            callValueTransfer: {
                v: 9e3,
                d: "Paid for CALL when the value transfor is non-zero"
            },
            callNewAccount: {
                v: 25e3,
                d: "Paid for CALL when the destination address didn't exist prior"
            },
            selfdestructRefund: {
                v: 24e3,
                d: "Refunded following a selfdestruct operation"
            },
            memory: {
                v: 3,
                d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"
            },
            quadCoeffDiv: {
                v: 512,
                d: "Divisor for the quadratic particle of the memory cost equation"
            },
            createData: {
                v: 200,
                d: ""
            },
            tx: {
                v: 21e3,
                d: "Per transaction. NOTE: Not payable on data of calls between transactions"
            },
            txCreation: {
                v: 32e3,
                d: "The cost of creating a contract via tx"
            },
            txDataZero: {
                v: 4,
                d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"
            },
            txDataNonZero: {
                v: 68,
                d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
            },
            copy: {
                v: 3,
                d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"
            },
            ecRecover: {
                v: 3e3,
                d: ""
            },
            sha256: {
                v: 60,
                d: ""
            },
            sha256Word: {
                v: 12,
                d: ""
            },
            ripemd160: {
                v: 600,
                d: ""
            },
            ripemd160Word: {
                v: 120,
                d: ""
            },
            identity: {
                v: 15,
                d: ""
            },
            identityWord: {
                v: 3,
                d: ""
            },
            stop: {
                v: 0,
                d: "Base fee of the STOP opcode"
            },
            add: {
                v: 3,
                d: "Base fee of the ADD opcode"
            },
            mul: {
                v: 5,
                d: "Base fee of the MUL opcode"
            },
            sub: {
                v: 3,
                d: "Base fee of the SUB opcode"
            },
            div: {
                v: 5,
                d: "Base fee of the DIV opcode"
            },
            sdiv: {
                v: 5,
                d: "Base fee of the SDIV opcode"
            },
            mod: {
                v: 5,
                d: "Base fee of the MOD opcode"
            },
            smod: {
                v: 5,
                d: "Base fee of the SMOD opcode"
            },
            addmod: {
                v: 8,
                d: "Base fee of the ADDMOD opcode"
            },
            mulmod: {
                v: 8,
                d: "Base fee of the MULMOD opcode"
            },
            signextend: {
                v: 5,
                d: "Base fee of the SIGNEXTEND opcode"
            },
            lt: {
                v: 3,
                d: "Base fee of the LT opcode"
            },
            gt: {
                v: 3,
                d: "Base fee of the GT opcode"
            },
            slt: {
                v: 3,
                d: "Base fee of the SLT opcode"
            },
            sgt: {
                v: 3,
                d: "Base fee of the SGT opcode"
            },
            eq: {
                v: 3,
                d: "Base fee of the EQ opcode"
            },
            iszero: {
                v: 3,
                d: "Base fee of the ISZERO opcode"
            },
            and: {
                v: 3,
                d: "Base fee of the AND opcode"
            },
            or: {
                v: 3,
                d: "Base fee of the OR opcode"
            },
            xor: {
                v: 3,
                d: "Base fee of the XOR opcode"
            },
            not: {
                v: 3,
                d: "Base fee of the NOT opcode"
            },
            byte: {
                v: 3,
                d: "Base fee of the BYTE opcode"
            },
            address: {
                v: 2,
                d: "Base fee of the ADDRESS opcode"
            },
            balance: {
                v: 20,
                d: "Base fee of the BALANCE opcode"
            },
            origin: {
                v: 2,
                d: "Base fee of the ORIGIN opcode"
            },
            caller: {
                v: 2,
                d: "Base fee of the CALLER opcode"
            },
            callvalue: {
                v: 2,
                d: "Base fee of the CALLVALUE opcode"
            },
            calldataload: {
                v: 3,
                d: "Base fee of the CALLDATALOAD opcode"
            },
            calldatasize: {
                v: 2,
                d: "Base fee of the CALLDATASIZE opcode"
            },
            calldatacopy: {
                v: 3,
                d: "Base fee of the CALLDATACOPY opcode"
            },
            codesize: {
                v: 2,
                d: "Base fee of the CODESIZE opcode"
            },
            codecopy: {
                v: 3,
                d: "Base fee of the CODECOPY opcode"
            },
            gasprice: {
                v: 2,
                d: "Base fee of the GASPRICE opcode"
            },
            extcodesize: {
                v: 20,
                d: "Base fee of the EXTCODESIZE opcode"
            },
            extcodecopy: {
                v: 20,
                d: "Base fee of the EXTCODECOPY opcode"
            },
            blockhash: {
                v: 20,
                d: "Base fee of the BLOCKHASH opcode"
            },
            coinbase: {
                v: 2,
                d: "Base fee of the COINBASE opcode"
            },
            timestamp: {
                v: 2,
                d: "Base fee of the TIMESTAMP opcode"
            },
            number: {
                v: 2,
                d: "Base fee of the NUMBER opcode"
            },
            difficulty: {
                v: 2,
                d: "Base fee of the DIFFICULTY opcode"
            },
            gaslimit: {
                v: 2,
                d: "Base fee of the GASLIMIT opcode"
            },
            pop: {
                v: 2,
                d: "Base fee of the POP opcode"
            },
            mload: {
                v: 3,
                d: "Base fee of the MLOAD opcode"
            },
            mstore: {
                v: 3,
                d: "Base fee of the MSTORE opcode"
            },
            mstore8: {
                v: 3,
                d: "Base fee of the MSTORE8 opcode"
            },
            sstore: {
                v: 0,
                d: "Base fee of the SSTORE opcode"
            },
            jump: {
                v: 8,
                d: "Base fee of the JUMP opcode"
            },
            jumpi: {
                v: 10,
                d: "Base fee of the JUMPI opcode"
            },
            pc: {
                v: 2,
                d: "Base fee of the PC opcode"
            },
            msize: {
                v: 2,
                d: "Base fee of the MSIZE opcode"
            },
            gas: {
                v: 2,
                d: "Base fee of the GAS opcode"
            },
            push: {
                v: 3,
                d: "Base fee of the PUSH opcode"
            },
            dup: {
                v: 3,
                d: "Base fee of the DUP opcode"
            },
            swap: {
                v: 3,
                d: "Base fee of the SWAP opcode"
            },
            callcode: {
                v: 40,
                d: "Base fee of the CALLCODE opcode"
            },
            return: {
                v: 0,
                d: "Base fee of the RETURN opcode"
            },
            invalid: {
                v: 0,
                d: "Base fee of the INVALID opcode"
            },
            selfdestruct: {
                v: 0,
                d: "Base fee of the SELFDESTRUCT opcode"
            }
        },
        vm: {
            stackLimit: {
                v: 1024,
                d: "Maximum size of VM stack allowed"
            },
            callCreateDepth: {
                v: 1024,
                d: "Maximum depth of call/create stack"
            },
            maxExtraDataSize: {
                v: 32,
                d: "Maximum size extra data may be after Genesis"
            }
        },
        pow: {
            minimumDifficulty: {
                v: 131072,
                d: "The minimum that the difficulty may ever be"
            },
            difficultyBoundDivisor: {
                v: 2048,
                d: "The bound divisor of the difficulty, used in the update calculations"
            },
            durationLimit: {
                v: 13,
                d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"
            },
            epochDuration: {
                v: 3e4,
                d: "Duration between proof-of-work epochs"
            },
            timebombPeriod: {
                v: 1e5,
                d: "Exponential difficulty timebomb period"
            },
            minerReward: {
                v: "5000000000000000000",
                d: "the amount a miner get rewarded for mining a block"
            },
            difficultyBombDelay: {
                v: 0,
                d: "the amount of blocks to delay the difficulty bomb with"
            }
        }
    },
    homestead: {
        name: "homestead",
        comment: "Homestead hardfork with protocol and network changes",
        url: "https://eips.ethereum.org/EIPS/eip-606",
        status: "Final",
        gasConfig: {},
        gasPrices: {
            delegatecall: {
                v: 40,
                d: "Base fee of the DELEGATECALL opcode"
            }
        },
        vm: {},
        pow: {}
    },
    dao: {
        name: "dao",
        comment: "DAO rescue hardfork",
        url: "https://eips.ethereum.org/EIPS/eip-779",
        status: "Final",
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    tangerineWhistle: {
        name: "tangerineWhistle",
        comment: "Hardfork with gas cost changes for IO-heavy operations",
        url: "https://eips.ethereum.org/EIPS/eip-608",
        status: "Final",
        gasConfig: {},
        gasPrices: {
            sload: {
                v: 200,
                d: "Once per SLOAD operation"
            },
            call: {
                v: 700,
                d: "Once per CALL operation & message call transaction"
            },
            extcodesize: {
                v: 700,
                d: "Base fee of the EXTCODESIZE opcode"
            },
            extcodecopy: {
                v: 700,
                d: "Base fee of the EXTCODECOPY opcode"
            },
            balance: {
                v: 400,
                d: "Base fee of the BALANCE opcode"
            },
            delegatecall: {
                v: 700,
                d: "Base fee of the DELEGATECALL opcode"
            },
            callcode: {
                v: 700,
                d: "Base fee of the CALLCODE opcode"
            },
            selfdestruct: {
                v: 5e3,
                d: "Base fee of the SELFDESTRUCT opcode"
            }
        },
        vm: {},
        pow: {}
    },
    spuriousDragon: {
        name: "spuriousDragon",
        comment: "HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit",
        url: "https://eips.ethereum.org/EIPS/eip-607",
        status: "Final",
        gasConfig: {},
        gasPrices: {
            expByte: {
                v: 50,
                d: "Times ceil(log256(exponent)) for the EXP instruction"
            }
        },
        vm: {
            maxCodeSize: {
                v: 24576,
                d: "Maximum length of contract code"
            }
        },
        pow: {}
    },
    byzantium: {
        name: "byzantium",
        comment: "Hardfork with new precompiles, instructions and other protocol changes",
        url: "https://eips.ethereum.org/EIPS/eip-609",
        status: "Final",
        gasConfig: {},
        gasPrices: {
            modexpGquaddivisor: {
                v: 20,
                d: "Gquaddivisor from modexp precompile for gas calculation"
            },
            ecAdd: {
                v: 500,
                d: "Gas costs for curve addition precompile"
            },
            ecMul: {
                v: 4e4,
                d: "Gas costs for curve multiplication precompile"
            },
            ecPairing: {
                v: 1e5,
                d: "Base gas costs for curve pairing precompile"
            },
            ecPairingWord: {
                v: 8e4,
                d: "Gas costs regarding curve pairing precompile input length"
            },
            revert: {
                v: 0,
                d: "Base fee of the REVERT opcode"
            },
            staticcall: {
                v: 700,
                d: "Base fee of the STATICCALL opcode"
            },
            returndatasize: {
                v: 2,
                d: "Base fee of the RETURNDATASIZE opcode"
            },
            returndatacopy: {
                v: 3,
                d: "Base fee of the RETURNDATACOPY opcode"
            }
        },
        vm: {},
        pow: {
            minerReward: {
                v: "3000000000000000000",
                d: "the amount a miner get rewarded for mining a block"
            },
            difficultyBombDelay: {
                v: 3e6,
                d: "the amount of blocks to delay the difficulty bomb with"
            }
        }
    },
    constantinople: {
        name: "constantinople",
        comment: "Postponed hardfork including EIP-1283 (SSTORE gas metering changes)",
        url: "https://eips.ethereum.org/EIPS/eip-1013",
        status: "Final",
        gasConfig: {},
        gasPrices: {
            netSstoreNoopGas: {
                v: 200,
                d: "Once per SSTORE operation if the value doesn't change"
            },
            netSstoreInitGas: {
                v: 2e4,
                d: "Once per SSTORE operation from clean zero"
            },
            netSstoreCleanGas: {
                v: 5e3,
                d: "Once per SSTORE operation from clean non-zero"
            },
            netSstoreDirtyGas: {
                v: 200,
                d: "Once per SSTORE operation from dirty"
            },
            netSstoreClearRefund: {
                v: 15e3,
                d: "Once per SSTORE operation for clearing an originally existing storage slot"
            },
            netSstoreResetRefund: {
                v: 4800,
                d: "Once per SSTORE operation for resetting to the original non-zero value"
            },
            netSstoreResetClearRefund: {
                v: 19800,
                d: "Once per SSTORE operation for resetting to the original zero value"
            },
            shl: {
                v: 3,
                d: "Base fee of the SHL opcode"
            },
            shr: {
                v: 3,
                d: "Base fee of the SHR opcode"
            },
            sar: {
                v: 3,
                d: "Base fee of the SAR opcode"
            },
            extcodehash: {
                v: 400,
                d: "Base fee of the EXTCODEHASH opcode"
            },
            create2: {
                v: 32e3,
                d: "Base fee of the CREATE2 opcode"
            }
        },
        vm: {},
        pow: {
            minerReward: {
                v: "2000000000000000000",
                d: "The amount a miner gets rewarded for mining a block"
            },
            difficultyBombDelay: {
                v: 5e6,
                d: "the amount of blocks to delay the difficulty bomb with"
            }
        }
    },
    petersburg: {
        name: "petersburg",
        comment: "Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople",
        url: "https://eips.ethereum.org/EIPS/eip-1716",
        status: "Final",
        gasConfig: {},
        gasPrices: {
            netSstoreNoopGas: {
                v: null,
                d: "Removed along EIP-1283"
            },
            netSstoreInitGas: {
                v: null,
                d: "Removed along EIP-1283"
            },
            netSstoreCleanGas: {
                v: null,
                d: "Removed along EIP-1283"
            },
            netSstoreDirtyGas: {
                v: null,
                d: "Removed along EIP-1283"
            },
            netSstoreClearRefund: {
                v: null,
                d: "Removed along EIP-1283"
            },
            netSstoreResetRefund: {
                v: null,
                d: "Removed along EIP-1283"
            },
            netSstoreResetClearRefund: {
                v: null,
                d: "Removed along EIP-1283"
            }
        },
        vm: {},
        pow: {}
    },
    istanbul: {
        name: "istanbul",
        comment: "HF targeted for December 2019 following the Constantinople/Petersburg HF",
        url: "https://eips.ethereum.org/EIPS/eip-1679",
        status: "Final",
        gasConfig: {},
        gasPrices: {
            blake2Round: {
                v: 1,
                d: "Gas cost per round for the Blake2 F precompile"
            },
            ecAdd: {
                v: 150,
                d: "Gas costs for curve addition precompile"
            },
            ecMul: {
                v: 6e3,
                d: "Gas costs for curve multiplication precompile"
            },
            ecPairing: {
                v: 45e3,
                d: "Base gas costs for curve pairing precompile"
            },
            ecPairingWord: {
                v: 34e3,
                d: "Gas costs regarding curve pairing precompile input length"
            },
            txDataNonZero: {
                v: 16,
                d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
            },
            sstoreSentryGasEIP2200: {
                v: 2300,
                d: "Minimum gas required to be present for an SSTORE call, not consumed"
            },
            sstoreNoopGasEIP2200: {
                v: 800,
                d: "Once per SSTORE operation if the value doesn't change"
            },
            sstoreDirtyGasEIP2200: {
                v: 800,
                d: "Once per SSTORE operation if a dirty value is changed"
            },
            sstoreInitGasEIP2200: {
                v: 2e4,
                d: "Once per SSTORE operation from clean zero to non-zero"
            },
            sstoreInitRefundEIP2200: {
                v: 19200,
                d: "Once per SSTORE operation for resetting to the original zero value"
            },
            sstoreCleanGasEIP2200: {
                v: 5e3,
                d: "Once per SSTORE operation from clean non-zero to something else"
            },
            sstoreCleanRefundEIP2200: {
                v: 4200,
                d: "Once per SSTORE operation for resetting to the original non-zero value"
            },
            sstoreClearRefundEIP2200: {
                v: 15e3,
                d: "Once per SSTORE operation for clearing an originally existing storage slot"
            },
            balance: {
                v: 700,
                d: "Base fee of the BALANCE opcode"
            },
            extcodehash: {
                v: 700,
                d: "Base fee of the EXTCODEHASH opcode"
            },
            chainid: {
                v: 2,
                d: "Base fee of the CHAINID opcode"
            },
            selfbalance: {
                v: 5,
                d: "Base fee of the SELFBALANCE opcode"
            },
            sload: {
                v: 800,
                d: "Base fee of the SLOAD opcode"
            }
        },
        vm: {},
        pow: {}
    },
    muirGlacier: {
        name: "muirGlacier",
        comment: "HF to delay the difficulty bomb",
        url: "https://eips.ethereum.org/EIPS/eip-2384",
        status: "Final",
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {
            difficultyBombDelay: {
                v: 9e6,
                d: "the amount of blocks to delay the difficulty bomb with"
            }
        }
    },
    berlin: {
        name: "berlin",
        comment: "HF targeted for July 2020 following the Muir Glacier HF",
        url: "https://eips.ethereum.org/EIPS/eip-2070",
        status: "Final",
        eips: [ 2565, 2929, 2718, 2930 ]
    },
    london: {
        name: "london",
        comment: "HF targeted for July 2021 following the Berlin fork",
        url: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md",
        status: "Final",
        eips: [ 1559, 3198, 3529, 3541 ]
    },
    shanghai: {
        name: "shanghai",
        comment: "Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode",
        url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md",
        status: "Final",
        eips: [ 3651, 3855, 3860, 4895 ]
    },
    arrowGlacier: {
        name: "arrowGlacier",
        comment: "HF to delay the difficulty bomb",
        url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md",
        status: "Final",
        eips: [ 4345 ],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    grayGlacier: {
        name: "grayGlacier",
        comment: "Delaying the difficulty bomb to Mid September 2022",
        url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md",
        status: "Draft",
        eips: [ 5133 ],
        gasConfig: {},
        gasPrices: {},
        vm: {},
        pow: {}
    },
    mergeForkIdTransition: {
        name: "mergeForkIdTransition",
        comment: "Pre-merge hardfork to fork off non-upgraded clients",
        url: "https://eips.ethereum.org/EIPS/eip-3675",
        status: "Draft",
        eips: []
    },
    merge: {
        name: "merge",
        comment: "Hardfork to upgrade the consensus mechanism to Proof-of-Stake",
        url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md",
        status: "Final",
        consensus: {
            type: "pos",
            algorithm: "casper",
            casper: {}
        },
        eips: [ 3675, 4399 ]
    }
}, {buf: Be} = e;

class Ae extends H {
    constructor(e) {
        var t, r;
        super(), this._eips = [], this._customChains = null !== (t = e.customChains) && void 0 !== t ? t : [], 
        this._chainParams = this.setChain(e.chain), this.DEFAULT_HARDFORK = null !== (r = this._chainParams.defaultHardfork) && void 0 !== r ? r : Z.Merge, 
        this.HARDFORK_CHANGES = this.hardforks().map((e => [ e.name, xe[e.name] ])), this._hardfork = this.DEFAULT_HARDFORK, 
        void 0 !== e.hardfork && this.setHardfork(e.hardfork), e.eips && this.setEIPs(e.eips);
    }
    /**
   * Creates a {@link Common} object for a custom chain, based on a standard one.
   *
   * It uses all the {@link Chain} parameters from the {@link baseChain} option except the ones overridden
   * in a provided {@link chainParamsOrName} dictionary. Some usage example:
   *
   * ```javascript
   * Common.custom({chainId: 123})
   * ```
   *
   * There are also selected supported custom chains which can be initialized by using one of the
   * {@link CustomChains} for {@link chainParamsOrName}, e.g.:
   *
   * ```javascript
   * Common.custom(CustomChains.MaticMumbai)
   * ```
   *
   * Note that these supported custom chains only provide some base parameters (usually the chain and
   * network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
   * the `web3-utils/tx` library to a Layer-2 chain).
   *
   * @param chainParamsOrName Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain
   * @param opts Custom chain options to set the {@link CustomCommonOpts.baseChain}, selected {@link CustomCommonOpts.hardfork} and others
   */    static custom(e, t = {}) {
        var r;
        const o = null !== (r = t.baseChain) && void 0 !== r ? r : "mainnet", i = Object.assign({}, Ae._getChainParams(o));
        if (i.name = "custom-chain", "string" != typeof e) return new Ae(Object.assign({
            chain: Object.assign(Object.assign({}, i), e)
        }, t));
        if (e === ie.PolygonMainnet) return Ae.custom({
            name: ie.PolygonMainnet,
            chainId: 137,
            networkId: 137
        }, t);
        if (e === ie.PolygonMumbai) return Ae.custom({
            name: ie.PolygonMumbai,
            chainId: 80001,
            networkId: 80001
        }, t);
        if (e === ie.ArbitrumRinkebyTestnet) return Ae.custom({
            name: ie.ArbitrumRinkebyTestnet,
            chainId: 421611,
            networkId: 421611
        }, t);
        if (e === ie.ArbitrumOne) return Ae.custom({
            name: ie.ArbitrumOne,
            chainId: 42161,
            networkId: 42161
        }, t);
        if (e === ie.xDaiChain) return Ae.custom({
            name: ie.xDaiChain,
            chainId: 100,
            networkId: 100
        }, t);
        if (e === ie.OptimisticKovan) return Ae.custom({
            name: ie.OptimisticKovan,
            chainId: 69,
            networkId: 69
        }, Object.assign({
            hardfork: Z.Berlin
        }, t));
        if (e === ie.OptimisticEthereum) return Ae.custom({
            name: ie.OptimisticEthereum,
            chainId: 10,
            networkId: 10
        }, Object.assign({
            hardfork: Z.Berlin
        }, t));
        throw new Error(`Custom chain ${e} not supported`);
    }
    /**
   * Static method to load and set common from a geth genesis json
   * @param genesisJson json of geth configuration
   * @param { chain, eips, genesisHash, hardfork, mergeForkIdPostMerge } to further configure the common instance
   * @returns Common
   */    static fromGethGenesis(e, {chain: t, eips: r, genesisHash: o, hardfork: i, mergeForkIdPostMerge: s}) {
        var a;
        const n = function(e, t, r) {
            try {
                if ([ "config", "difficulty", "gasLimit", "alloc" ].some((t => !(t in e)))) throw new Error("Invalid format, expected geth genesis fields missing");
                return void 0 !== t && (e.name = t), he(e, r);
            } catch (o) {
                throw new Error(`Error parsing parameters file: ${o.message}`);
            }
        }(e, t, s), c = new Ae({
            chain: null !== (a = n.name) && void 0 !== a ? a : "custom",
            customChains: [ n ],
            eips: r,
            hardfork: null != i ? i : n.hardfork
        });
        return void 0 !== o && c.setForkHashes(o), c;
    }
    /**
   * Static method to determine if a {@link chainId} is supported as a standard chain
   * @param chainId bigint id (`1`) of a standard chain
   * @returns boolean
   */    static isSupportedChainId(e) {
        const t = this._getInitializedChains();
        return Boolean(t.names[e.toString()]);
    }
    static _getChainParams(e, t) {
        let r = e;
        const o = this._getInitializedChains(t);
        if ("number" == typeof r || "bigint" == typeof r) {
            if (r = r.toString(), o.names[r]) {
                return o[o.names[r]];
            }
            throw new Error(`Chain with ID ${r} not supported`);
        }
        if (void 0 !== o[r]) return o[r];
        throw new Error(`Chain with name ${r} not supported`);
    }
    /**
   * Sets the chain
   * @param chain String ('mainnet') or Number (1) chain representation.
   *              Or, a Dictionary of chain parameters for a private network.
   * @returns The dictionary with parameters set as chain
   */    setChain(e) {
        if ("number" == typeof e || "bigint" == typeof e || "string" == typeof e) this._chainParams = Ae._getChainParams(e, this._customChains); else {
            if ("object" != typeof e) throw new Error("Wrong input format");
            {
                if (this._customChains.length > 0) throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
                const t = [ "networkId", "genesis", "hardforks", "bootstrapNodes" ];
                for (const r of t) if (!(r in e)) throw new Error(`Missing required chain parameter: ${r}`);
                this._chainParams = e;
            }
        }
        for (const t of this.hardforks()) if (void 0 === t.block) throw new Error("Hardfork cannot have undefined block number");
        return this._chainParams;
    }
    /**
   * Sets the hardfork to get params for
   * @param hardfork String identifier (e.g. 'byzantium') or {@link Hardfork} enum
   */    setHardfork(e) {
        let t = !1;
        for (const r of this.HARDFORK_CHANGES) r[0] === e && (this._hardfork !== e && (this._hardfork = e, 
        this.emit("hardforkChanged", e)), t = !0);
        if (!t) throw new Error(`Hardfork with name ${e} not supported`);
    }
    /**
   * Returns the hardfork based on the block number or an optional
   * total difficulty (Merge HF) provided.
   *
   * An optional TD takes precedence in case the corresponding HF block
   * is set to `null` or otherwise needs to match (if not an error
   * will be thrown).
   *
   * @param blockNumber
   * @param td : total difficulty of the parent block (for block hf) OR of the chain latest (for chain hf)
   * @param timestamp: timestamp in seconds at which block was/is to be minted
   * @returns The name of the HF
   */    getHardforkByBlockNumber(e, t, r) {
        const o = Ee(e, ae.BigInt), i = Ee(t, ae.BigInt), s = Ee(r, ae.Number), a = this.hardforks().filter((e => 
        // eslint-disable-next-line no-null/no-null
        null !== e.block || // eslint-disable-next-line no-null/no-null
        null !== e.ttd && void 0 !== e.ttd || void 0 !== e.timestamp)), n = a.findIndex((e => null !== e.ttd && void 0 !== e.ttd));
        if (a.slice(n + 1).findIndex((e => null !== e.ttd && void 0 !== e.ttd)) >= 0) throw Error("More than one merge hardforks found with ttd specified");
        let c = a.findIndex((e => 
        // eslint-disable-next-line no-null/no-null
        null !== e.block && e.block > o || void 0 !== s && Number(e.timestamp) > s));
        if (-1 === c) c = a.length; else if (0 === c) throw Error("Must have at least one hardfork at block 0");
        if (void 0 === s) {
            c -= a.slice(0, c).reverse().findIndex((e => null !== e.block || void 0 !== e.ttd));
        }
        if (c -= 1, null === a[c].block && void 0 === a[c].timestamp) (null == i || BigInt(a[c].ttd) > i) && (c -= 1); else if (n >= 0 && null != i) {
            if (c >= n && BigInt(a[n].ttd) > i) throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
            if (c < n && BigInt(a[n].ttd) <= i) throw Error("HF determined by block number is lower than the minimum total difficulty HF");
        }
        const d = c;
        for (;c < a.length - 1 && (a[c].block === a[c + 1].block && a[c].timestamp === a[c + 1].timestamp); c += 1) ;
        if (s) {
            if (a.slice(0, d).reduce(((e, t) => {
                var r;
                return Math.max(Number(null !== (r = t.timestamp) && void 0 !== r ? r : "0"), e);
            }), 0) > s) throw Error("Maximum HF determined by timestamp is lower than the block number/ttd HF");
            if (a.slice(c + 1).reduce(((e, t) => {
                var r;
                return Math.min(Number(null !== (r = t.timestamp) && void 0 !== r ? r : s), e);
            }), s) < s) throw Error("Maximum HF determined by block number/ttd is lower than timestamp HF");
        }
        return a[c].name;
    }
    /**
   * Sets a new hardfork based on the block number or an optional
   * total difficulty (Merge HF) provided.
   *
   * An optional TD takes precedence in case the corresponding HF block
   * is set to `null` or otherwise needs to match (if not an error
   * will be thrown).
   *
   * @param blockNumber
   * @param td
   * @param timestamp
   * @returns The name of the HF set
   */    setHardforkByBlockNumber(e, t, r) {
        const o = this.getHardforkByBlockNumber(e, t, r);
        return this.setHardfork(o), o;
    }
    /**
   * Internal helper function, returns the params for the given hardfork for the chain set
   * @param hardfork Hardfork name
   * @returns Dictionary with hardfork params or null if hardfork not on chain
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
    _getHardfork(e) {
        const t = this.hardforks();
        for (const r of t) if (r.name === e) return r;
        return null;
    }
    /**
   * Sets the active EIPs
   * @param eips
   */    setEIPs(e = []) {
        for (const t of e) {
            if (!(t in Se)) throw new Error(`${t} not supported`);
            const r = this.gteHardfork(Se[t].minimumHardfork);
            if (!r) throw new Error(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${t} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${r}`);
            if (void 0 !== Se[t].requiredEIPs) for (const o of Se[t].requiredEIPs) if (!e.includes(o) && !this.isActivatedEIP(o)) throw new Error(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${t} requires EIP ${o}, but is not included in the EIP list`);
        }
        this._eips = e;
    }
    /**
   * Returns a parameter for the current chain setup
   *
   * If the parameter is present in an EIP, the EIP always takes precedence.
   * Otherwise the parameter if taken from the latest applied HF with
   * a change on the respective parameter.
   *
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @returns The value requested or `BigInt(0)` if not found
   */    param(e, t) {
        let r;
        for (const o of this._eips) if (r = this.paramByEIP(e, t, o), void 0 !== r) return r;
        return this.paramByHardfork(e, t, this._hardfork);
    }
    /**
   * Returns the parameter corresponding to a hardfork
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @param hardfork Hardfork name
   * @returns The value requested or `BigInt(0)` if not found
   */    paramByHardfork(e, t, r) {
        let o = null;
        for (const i of this.HARDFORK_CHANGES) {
            if ("eips" in i[1]) {
                const r = i[1].eips;
                for (const i of r) {
                    const r = this.paramByEIP(e, t, i);
                    o = "bigint" == typeof r ? r : o;
                }
            } else {
                if (void 0 === i[1][e]) throw new Error(`Topic ${e} not defined`);
                void 0 !== i[1][e][t] && (o = i[1][e][t].v);
            }
            if (i[0] === r) break;
        }
        return BigInt(null != o ? o : 0);
    }
    /**
   * Returns a parameter corresponding to an EIP
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @param eip Number of the EIP
   * @returns The value requested or `undefined` if not found
   */
    // eslint-disable-next-line class-methods-use-this
    paramByEIP(e, t, r) {
        if (!(r in Se)) throw new Error(`${r} not supported`);
        const o = Se[r];
        if (!(e in o)) throw new Error(`Topic ${e} not defined`);
        if (void 0 === o[e][t]) return;
        const i = o[e][t].v;
        return BigInt(i);
    }
    /**
   * Returns a parameter for the hardfork active on block number or
   * optional provided total difficulty (Merge HF)
   * @param topic Parameter topic
   * @param name Parameter name
   * @param blockNumber Block number
   * @param td Total difficulty
   *    * @returns The value requested or `BigInt(0)` if not found
   */    paramByBlock(e, t, r, o, i) {
        const s = this.getHardforkByBlockNumber(r, o, i);
        return this.paramByHardfork(e, t, s);
    }
    /**
   * Checks if an EIP is activated by either being included in the EIPs
   * manually passed in with the {@link CommonOpts.eips} or in a
   * hardfork currently being active
   *
   * Note: this method only works for EIPs being supported
   * by the {@link CommonOpts.eips} constructor option
   * @param eip
   */    isActivatedEIP(e) {
        if (this.eips().includes(e)) return !0;
        for (const t of this.HARDFORK_CHANGES) {
            const r = t[1];
            if (this.gteHardfork(r.name) && "eips" in r && r.eips.includes(e)) return !0;
        }
        return !1;
    }
    /**
   * Checks if set or provided hardfork is active on block number
   * @param hardfork Hardfork name or null (for HF set)
   * @param blockNumber
   * @returns True if HF is active on block number
   */    hardforkIsActiveOnBlock(e, t) {
        const r = Ee(t, ae.BigInt), o = null != e ? e : this._hardfork, i = this.hardforkBlock(o);
        return "bigint" == typeof i && i !== BigInt(0) && r >= i;
    }
    /**
   * Alias to hardforkIsActiveOnBlock when hardfork is set
   * @param blockNumber
   * @returns True if HF is active on block number
   */    activeOnBlock(e) {
        return this.hardforkIsActiveOnBlock(null, e);
    }
    /**
   * Sequence based check if given or set HF1 is greater than or equal HF2
   * @param hardfork1 Hardfork name or null (if set)
   * @param hardfork2 Hardfork name
   * @param opts Hardfork options
   * @returns True if HF1 gte HF2
   */    hardforkGteHardfork(e, t) {
        const r = null != e ? e : this._hardfork, o = this.hardforks();
        let i = -1, s = -1, a = 0;
        for (const n of o) n.name === r && (i = a), n.name === t && (s = a), a += 1;
        return i >= s && -1 !== s;
    }
    /**
   * Alias to hardforkGteHardfork when hardfork is set
   * @param hardfork Hardfork name
   * @returns True if hardfork set is greater than hardfork provided
   */    gteHardfork(e) {
        return this.hardforkGteHardfork(null, e);
    }
    /**
   * Returns the hardfork change block for hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block number or null if unscheduled
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkBlock(e) {
        var t;
        const r = null != e ? e : this._hardfork, o = null === (t = this._getHardfork(r)) || void 0 === t ? void 0 : t.block;
        return null == o ? null : BigInt(o);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkTimestamp(e) {
        var t;
        const r = null != e ? e : this._hardfork, o = null === (t = this._getHardfork(r)) || void 0 === t ? void 0 : t.timestamp;
        return null == o ? null : BigInt(o);
    }
    /**
   * Returns the hardfork change block for eip
   * @param eip EIP number
   * @returns Block number or null if unscheduled
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
    eipBlock(e) {
        for (const t of this.HARDFORK_CHANGES) {
            const r = t[1];
            if ("eips" in r && r.eips.includes(e)) return this.hardforkBlock("number" == typeof t[0] ? String(t[0]) : t[0]);
        }
        return null;
    }
    /**
   * Returns the hardfork change total difficulty (Merge HF) for hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Total difficulty or null if no set
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkTTD(e) {
        var t;
        const r = null != e ? e : this._hardfork, o = null === (t = this._getHardfork(r)) || void 0 === t ? void 0 : t.ttd;
        return null == o ? null : BigInt(o);
    }
    /**
   * True if block number provided is the hardfork (given or set) change block
   * @param blockNumber Number of the block to check
   * @param hardfork Hardfork name, optional if HF set
   * @returns True if blockNumber is HF block
   * @deprecated
   */    isHardforkBlock(e, t) {
        const r = Ee(e, ae.BigInt), o = null != t ? t : this._hardfork, i = this.hardforkBlock(o);
        return "bigint" == typeof i && i !== BigInt(0) && i === r;
    }
    /**
   * Returns the change block for the next hardfork after the hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block timestamp, number or null if not available
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
    nextHardforkBlockOrTimestamp(e) {
        var t, r;
        const o = null != e ? e : this._hardfork, i = this.hardforks();
        let s = i.findIndex((e => e.name === o));
        if (o === Z.Merge && (s -= 1), s < 0) return null;
        let a = null !== (t = i[s].timestamp) && void 0 !== t ? t : i[s].block;
        a = // eslint-disable-next-line no-null/no-null
        null != a ? Number(a) : 
        // eslint-disable-next-line no-null/no-null
        null;
        const n = i.slice(s + 1).find((e => {
            var t;
            let r = null !== (t = e.timestamp) && void 0 !== t ? t : e.block;
            return r = // eslint-disable-next-line no-null/no-null
            null != r ? Number(r) : 
            // eslint-disable-next-line no-null/no-null
            null, e.name !== Z.Merge && null != // eslint-disable-next-line no-null/no-null
            r && r !== a;
        }));
        if (void 0 === n) return null;
        const c = null !== (r = n.timestamp) && void 0 !== r ? r : n.block;
        return null == c ? null : BigInt(c);
    }
    /**
   * Returns the change block for the next hardfork after the hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block number or null if not available
   * @deprecated
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
    nextHardforkBlock(e) {
        const t = null != e ? e : this._hardfork;
        let r = this.hardforkBlock(t);
        if (null === r && t === Z.Merge) {
            const e = this.hardforks(), t = e.findIndex((e => null !== e.ttd && void 0 !== e.ttd));
            if (t < 0) throw Error("Merge hardfork should have been found");
            r = this.hardforkBlock(e[t - 1].name);
        }
        if (null === r) return null;
        return this.hardforks().reduce(((e, t) => {
            const o = BigInt(
            // eslint-disable-next-line no-null/no-null
            null === t.block || void 0 !== t.ttd && null !== t.ttd ? 0 : t.block);
            return o > r && null === e ? o : e;
        }), null);
    }
    /**
   * True if block number provided is the hardfork change block following the hardfork given or set
   * @param blockNumber Number of the block to check
   * @param hardfork Hardfork name, optional if HF set
   * @returns True if blockNumber is HF block
   * @deprecated
   */    isNextHardforkBlock(e, t) {
        const r = Ee(e, ae.BigInt), o = null != t ? t : this._hardfork, i = this.nextHardforkBlock(o);
        return null !== i && i === r;
    }
    /**
   * Internal helper function to calculate a fork hash
   * @param hardfork Hardfork name
   * @param genesisHash Genesis block hash of the chain
   * @returns Fork hash as hex string
   */    _calcForkHash(e, t) {
        let r = new Uint8Array, o = 0;
        for (const s of this.hardforks()) {
            const {block: t, timestamp: i, name: a} = s;
            let n = null != i ? i : t;
            if (n = null !== n ? Number(n) : null, "number" == typeof n && 0 !== n && n !== o && a !== Z.Merge) {
                const e = A(n.toString(16).padStart(16, "0"));
                r = L(r, e), o = n;
            }
            if (s.name === e) break;
        }
        const i = L(t, r);
        return C(function(e) {
            const t = de(e);
            return A(`0x${le(t.slice(2))}`);
        }(Be(i) >>> 0));
    }
    /**
   * Returns an eth/64 compliant fork hash (EIP-2124)
   * @param hardfork Hardfork name, optional if HF set
   * @param genesisHash Genesis block hash of the chain, optional if already defined and not needed to be calculated
   */    forkHash(e, t) {
        const r = null != e ? e : this._hardfork, o = this._getHardfork(r);
        if (
        // eslint-disable-next-line no-null/no-null
        null === o || // eslint-disable-next-line no-null/no-null
        null === (null == o ? void 0 : o.block) && void 0 === (null == o ? void 0 : o.timestamp) && void 0 === (null == o ? void 0 : o.ttd)) {
            throw new Error("No fork hash calculation possible for future hardfork");
        }
        if (null !== (null == o ? void 0 : o.forkHash) && void 0 !== (null == o ? void 0 : o.forkHash)) return o.forkHash;
        if (!t) throw new Error("genesisHash required for forkHash calculation");
        return this._calcForkHash(r, t);
    }
    /**
   *
   * @param forkHash Fork hash as a hex string
   * @returns Array with hardfork data (name, block, forkHash)
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkForForkHash(e) {
        const t = this.hardforks().filter((t => t.forkHash === e));
        return t.length >= 1 ? t[t.length - 1] : null;
    }
    /**
   * Sets any missing forkHashes on the passed-in {@link Common} instance
   * @param common The {@link Common} to set the forkHashes for
   * @param genesisHash The genesis block hash
   */    setForkHashes(e) {
        var t;
        for (const r of this.hardforks()) {
            const o = null !== (t = r.timestamp) && void 0 !== t ? t : r.block;
            // eslint-disable-next-line no-null/no-null
            null !== r.forkHash && void 0 !== r.forkHash || // eslint-disable-next-line no-null/no-null
            null == o && void 0 === r.ttd || (r.forkHash = this.forkHash(r.name, e));
        }
    }
    /**
   * Returns the Genesis parameters of the current chain
   * @returns Genesis dictionary
   */    genesis() {
        return this._chainParams.genesis;
    }
    /**
   * Returns the hardforks for current chain
   * @returns {Array} Array with arrays of hardforks
   */    hardforks() {
        return this._chainParams.hardforks;
    }
    /**
   * Returns bootstrap nodes for the current chain
   * @returns {Dictionary} Dict with bootstrap nodes
   */    bootstrapNodes() {
        return this._chainParams.bootstrapNodes;
    }
    /**
   * Returns DNS networks for the current chain
   * @returns {String[]} Array of DNS ENR urls
   */    dnsNetworks() {
        return this._chainParams.dnsNetworks;
    }
    /**
   * Returns the hardfork set
   * @returns Hardfork name
   */    hardfork() {
        return this._hardfork;
    }
    /**
   * Returns the Id of current chain
   * @returns chain Id
   */    chainId() {
        return BigInt(this._chainParams.chainId);
    }
    /**
   * Returns the name of current chain
   * @returns chain name (lower case)
   */    chainName() {
        return this._chainParams.name;
    }
    /**
   * Returns the Id of current network
   * @returns network Id
   */    networkId() {
        return BigInt(this._chainParams.networkId);
    }
    /**
   * Returns the active EIPs
   * @returns List of EIPs
   */    eips() {
        return this._eips;
    }
    /**
   * Returns the consensus type of the network
   * Possible values: "pow"|"poa"|"pos"
   *
   * Note: This value can update along a Hardfork.
   */    consensusType() {
        const e = this.hardfork();
        let t;
        for (const r of this.HARDFORK_CHANGES) if ("consensus" in r[1] && (t = r[1].consensus.type), 
        r[0] === e) break;
        return null != t ? t : this._chainParams.consensus.type;
    }
    /**
   * Returns the concrete consensus implementation
   * algorithm or protocol for the network
   * e.g. "ethash" for "pow" consensus type,
   * "clique" for "poa" consensus type or
   * "casper" for "pos" consensus type.
   *
   * Note: This value can update along a Hardfork.
   */    consensusAlgorithm() {
        const e = this.hardfork();
        let t;
        for (const r of this.HARDFORK_CHANGES) if ("consensus" in r[1] && (t = r[1].consensus.algorithm), 
        r[0] === e) break;
        return null != t ? t : this._chainParams.consensus.algorithm;
    }
    /**
   * Returns a dictionary with consensus configuration
   * parameters based on the consensus algorithm
   *
   * Expected returns (parameters must be present in
   * the respective chain json files):
   *
   * ethash: empty object
   * clique: period, epoch
   * casper: empty object
   *
   * Note: This value can update along a Hardfork.
   */    consensusConfig() {
        var e;
        const t = this.hardfork();
        let r;
        for (const o of this.HARDFORK_CHANGES) if ("consensus" in o[1] && (r = o[1].consensus[o[1].consensus.algorithm]), 
        o[0] === t) break;
        return null !== (e = null != r ? r : this._chainParams.consensus[this.consensusAlgorithm()]) && void 0 !== e ? e : {};
    }
    /**
   * Returns a deep copy of this {@link Common} instance.
   */    copy() {
        const e = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return e.removeAllListeners(), e;
    }
    static _getInitializedChains(e) {
        const t = {};
        for (const [o, i] of Object.entries(W)) t[i] = o.toLowerCase();
        const r = {
            mainnet: Pe,
            goerli: we,
            sepolia: Ie
        };
        if (e) for (const o of e) {
            const {name: e} = o;
            t[o.chainId.toString()] = e, r[e] = o;
        }
        return r.names = t, r;
    }
}

var Te, Ce;

function Oe(e) {
    return !function(e) {
        if (0 === e.length) return !0;
        const t = e[0];
        return !!Array.isArray(t);
    }(e);
}

(Ce = Te || (Te = {}))[Ce.EIP155ReplayProtection = 155] = "EIP155ReplayProtection", 
Ce[Ce.EIP1559FeeMarket = 1559] = "EIP1559FeeMarket", Ce[Ce.EIP2718TypedTransaction = 2718] = "EIP2718TypedTransaction", 
Ce[Ce.EIP2930AccessLists = 2930] = "EIP2930AccessLists";

class He {
    constructor(e) {
        if (20 !== e.length) throw new Error("Invalid address length");
        this.buf = e;
    }
    /**
   * Returns the zero address.
   */    static zero() {
        return new He(me(20));
    }
    /**
   * Is address equal to another.
   */    equals(e) {
        return D(this.buf, e.buf);
    }
    /**
   * Is address zero.
   */    isZero() {
        return this.equals(He.zero());
    }
    /**
   * Returns hex encoding of address.
   */    toString() {
        return C(this.buf);
    }
    /**
   * Returns Uint8Array representation of address.
   */    toArray() {
        return this.buf;
    }
    /**
   * Returns the ethereum address of a given public key.
   * Accepts "Ethereum public keys" and SEC1 encoded keys.
   * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
   * @param sanitize Accept public keys in other formats
   */    static publicToAddress(e, t = !1) {
        let r = e;
        if (ge(r), t && 64 !== r.length && (r = q.ProjectivePoint.fromHex(r).toRawBytes(!1).slice(1)), 
        64 !== r.length) throw new Error("Expected pubKey to be of length 64");
        return w(r).slice(-20);
    }
}

const Le = e => {
    let t, r;
    if (Oe(e)) {
        t = e;
        const o = [];
        for (let t = 0; t < e.length; t += 1) {
            const r = e[t], i = fe(r.address), s = [];
            for (let e = 0; e < r.storageKeys.length; e += 1) s.push(fe(r.storageKeys[e]));
            o.push([ i, s ]);
        }
        r = o;
    } else {
        r = null != e ? e : [];
        const o = [];
        for (let e = 0; e < r.length; e += 1) {
            const t = r[e], i = C(t[0]), s = [];
            for (let e = 0; e < t[1].length; e += 1) s.push(C(t[1][e]));
            const a = {
                address: i,
                storageKeys: s
            };
            o.push(a);
        }
        t = o;
    }
    return {
        AccessListJSON: t,
        accessList: r
    };
}, De = e => {
    for (let t = 0; t < e.length; t += 1) {
        const r = e[t], o = r[0], i = r[1];
        if (void 0 !== r[2]) throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
        if (20 !== o.length) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
        for (let e = 0; e < i.length; e += 1) if (32 !== i[e].length) throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes");
    }
}, Fe = e => {
    const t = [];
    for (let r = 0; r < e.length; r += 1) {
        const o = e[r], i = {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/consistent-type-assertions
            address: C(pe(o[0], 20)),
            storageKeys: []
        }, s = o && o[1];
        for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            i.storageKeys.push(C(pe(t, 32)));
        }
        t.push(i);
    }
    return t;
}, _e = (e, t) => {
    const r = t.param("gasPrices", "accessListStorageKeyCost"), o = t.param("gasPrices", "accessListAddressCost");
    let i = 0;
    for (let s = 0; s < e.length; s += 1) {
        i += e[s][1].length;
    }
    return e.length * Number(o) + i * Number(r);
};

class Re {
    constructor(e, t) {
        var r, o;
        this.cache = {
            hash: void 0,
            dataFee: void 0
        }, this.activeCapabilities = [], this.DEFAULT_CHAIN = W.Mainnet, this.DEFAULT_HARDFORK = Z.Merge;
        const {nonce: i, gasLimit: s, to: a, value: n, data: c, v: d, r: h, s: l, type: f} = e;
        this._type = Number(ue(fe(f))), this.txOptions = t;
        const u = fe("" === a ? "0x" : a), m = fe("" === d ? "0x" : d), g = fe("" === h ? "0x" : h), p = fe("" === l ? "0x" : l);
        this.nonce = ue(fe("" === i ? "0x" : i)), this.gasLimit = ue(fe("" === s ? "0x" : s)), 
        this.to = u.length > 0 ? new He(u) : void 0, this.value = ue(fe("" === n ? "0x" : n)), 
        this.data = fe("" === c ? "0x" : c), this.v = m.length > 0 ? ue(m) : void 0, this.r = g.length > 0 ? ue(g) : void 0, 
        this.s = p.length > 0 ? ue(p) : void 0, this._validateCannotExceedMaxInteger({
            value: this.value,
            r: this.r,
            s: this.s
        }), this._validateCannotExceedMaxInteger({
            gasLimit: this.gasLimit
        }, 64), this._validateCannotExceedMaxInteger({
            nonce: this.nonce
        }, 64, !0);
        const v = void 0 === this.to || null === this.to, b = null !== (r = t.allowUnlimitedInitCodeSize) && void 0 !== r && r, k = null !== (o = t.common) && void 0 !== o ? o : this._getCommon();
        v && k.isActivatedEIP(3860) && !b && ((e, t) => {
            const r = e.param("vm", "maxInitCodeSize");
            if (r && BigInt(t) > r) throw new Error(`the initcode size of this transaction is too large: it is ${t} while the max is ${e.param("vm", "maxInitCodeSize")}`);
        })(k, this.data.length);
    }
    /**
   * Returns the transaction type.
   *
   * Note: legacy txs will return tx type `0`.
   */    get type() {
        return this._type;
    }
    /**
   * Checks if a tx type defining capability is active
   * on a tx, for example the EIP-1559 fee market mechanism
   * or the EIP-2930 access list feature.
   *
   * Note that this is different from the tx type itself,
   * so EIP-2930 access lists can very well be active
   * on an EIP-1559 tx for example.
   *
   * This method can be useful for feature checks if the
   * tx type is unknown (e.g. when instantiated with
   * the tx factory).
   *
   * See `Capabilites` in the `types` module for a reference
   * on all supported capabilities.
   */    supports(e) {
        return this.activeCapabilities.includes(e);
    }
    validate(e = !1) {
        const t = [];
        return this.getBaseFee() > this.gasLimit && t.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`), 
        this.isSigned() && !this.verifySignature() && t.push("Invalid Signature"), e ? t : 0 === t.length;
    }
    _validateYParity() {
        const {v: e} = this;
        if (void 0 !== e && e !== BigInt(0) && e !== BigInt(1)) {
            const e = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
            throw new Error(e);
        }
    }
    /**
   * EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2are considered invalid.
   * Reasoning: https://ethereum.stackexchange.com/a/55728
   */    _validateHighS() {
        const {s: e} = this;
        if (this.common.gteHardfork("homestead") && void 0 !== e && e > J) {
            const e = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
            throw new Error(e);
        }
    }
    /**
   * The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
   */    getBaseFee() {
        const e = this.common.param("gasPrices", "tx");
        let t = this.getDataFee();
        if (e && (t += e), this.common.gteHardfork("homestead") && this.toCreationAddress()) {
            const e = this.common.param("gasPrices", "txCreation");
            e && (t += e);
        }
        return t;
    }
    /**
   * The amount of gas paid for the data in this tx
   */    getDataFee() {
        const e = this.common.param("gasPrices", "txDataZero"), t = this.common.param("gasPrices", "txDataNonZero");
        let r = BigInt(0);
        for (let o = 0; o < this.data.length; o += 1) 0 === this.data[o] ? r += e : r += t;
        if ((void 0 === this.to || null === this.to) && this.common.isActivatedEIP(3860)) {
            const e = BigInt(Math.ceil(this.data.length / 32));
            r += this.common.param("gasPrices", "initCodeWordCost") * e;
        }
        return r;
    }
    /**
   * If the tx's `to` is to the creation address
   */    toCreationAddress() {
        return void 0 === this.to || 0 === this.to.buf.length;
    }
    isSigned() {
        const {v: e, r: t, s: r} = this;
        return void 0 !== e && void 0 !== t && void 0 !== r;
    }
    /**
   * Determines if the signature is valid
   */    verifySignature() {
        try {
            const e = this.getSenderPublicKey();
            return 0 !== ve(e).length;
        } catch (e) {
            return !1;
        }
    }
    /**
   * Returns the sender's address
   */    getSenderAddress() {
        return new He(He.publicToAddress(this.getSenderPublicKey()));
    }
    /**
   * Signs a transaction.
   *
   * Note that the signed tx is returned as a new object,
   * use as follows:
   * ```javascript
   * const signedTx = tx.sign(privateKey)
   * ```
   */    sign(e) {
        if (32 !== e.length) {
            const e = this._errorMsg("Private key must be 32 bytes in length.");
            throw new Error(e);
        }
        let t = !1;
        0 === this.type && this.common.gteHardfork("spuriousDragon") && !this.supports(Te.EIP155ReplayProtection) && (this.activeCapabilities.push(Te.EIP155ReplayProtection), 
        t = !0);
        const r = this.getMessageToSign(!0), {v: o, r: i, s: s} = this._ecsign(r, e), a = this._processSignature(o, i, s);
        if (t) {
            const e = this.activeCapabilities.indexOf(Te.EIP155ReplayProtection);
            e > -1 && this.activeCapabilities.splice(e, 1);
        }
        return a;
    }
    /**
   * Does chain ID checks on common and returns a common
   * to be used on instantiation
   * @hidden
   *
   * @param common - {@link Common} instance from tx options
   * @param chainId - Chain ID from tx options (typed txs) or signature (legacy tx)
   */    _getCommon(e, t) {
        var r, o, i, s;
        if (void 0 !== t) {
            const r = ue(fe(t));
            if (e) {
                if (e.chainId() !== r) {
                    const e = this._errorMsg("The chain ID does not match the chain ID of Common");
                    throw new Error(e);
                }
                return e.copy();
            }
            return Ae.isSupportedChainId(r) ? new Ae({
                chain: r,
                hardfork: this.DEFAULT_HARDFORK
            }) : Ae.custom({
                name: "custom-chain",
                networkId: r,
                chainId: r
            }, {
                baseChain: this.DEFAULT_CHAIN,
                hardfork: this.DEFAULT_HARDFORK
            });
        }
        if ((null == e ? void 0 : e.copy) && "function" == typeof (null == e ? void 0 : e.copy)) return e.copy();
        if (e) {
            const t = "function" == typeof e.hardfork ? e.hardfork() : 
            // eslint-disable-next-line @typescript-eslint/unbound-method
            e.hardfork;
            return Ae.custom({
                name: "custom-chain",
                networkId: e.networkId ? e.networkId() : null !== (o = BigInt(null === (r = e.customChain) || void 0 === r ? void 0 : r.networkId)) && void 0 !== o ? o : void 0,
                chainId: e.chainId ? e.chainId() : null !== (s = BigInt(null === (i = e.customChain) || void 0 === i ? void 0 : i.chainId)) && void 0 !== s ? s : void 0
            }, {
                baseChain: this.DEFAULT_CHAIN,
                hardfork: t || this.DEFAULT_HARDFORK
            });
        }
        return new Ae({
            chain: this.DEFAULT_CHAIN,
            hardfork: this.DEFAULT_HARDFORK
        });
    }
    /**
   * Validates that an object with BigInt values cannot exceed the specified bit limit.
   * @param values Object containing string keys and BigInt values
   * @param bits Number of bits to check (64 or 256)
   * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
   */    _validateCannotExceedMaxInteger(e, t = 256, r = !1) {
        for (const [o, i] of Object.entries(e)) switch (t) {
          case 64:
            if (r) {
                if (void 0 !== i && i >= K) {
                    const e = this._errorMsg(`${o} cannot equal or exceed MAX_UINT64 (2^64-1), given ${i}`);
                    throw new Error(e);
                }
            } else if (void 0 !== i && i > K) {
                const e = this._errorMsg(`${o} cannot exceed MAX_UINT64 (2^64-1), given ${i}`);
                throw new Error(e);
            }
            break;

          case 256:
            if (r) {
                if (void 0 !== i && i >= V) {
                    const e = this._errorMsg(`${o} cannot equal or exceed MAX_INTEGER (2^256-1), given ${i}`);
                    throw new Error(e);
                }
            } else if (void 0 !== i && i > V) {
                const e = this._errorMsg(`${o} cannot exceed MAX_INTEGER (2^256-1), given ${i}`);
                throw new Error(e);
            }
            break;

          default:
            {
                const e = this._errorMsg("unimplemented bits value");
                throw new Error(e);
            }
        }
    }
    static _validateNotArray(e) {
        const t = [ "nonce", "gasPrice", "gasLimit", "to", "value", "data", "v", "r", "s", "type", "baseFee", "maxFeePerGas", "chainId" ];
        for (const [r, o] of Object.entries(e)) if (t.includes(r) && Array.isArray(o)) throw new Error(`${r} cannot be an array`);
    }
    /**
   * Returns the shared error postfix part for _error() method
   * tx type implementations.
   */    _getSharedErrorPostfix() {
        let e = "";
        try {
            e = this.isSigned() ? C(this.hash()) : "not available (unsigned)";
        } catch (i) {
            e = "error";
        }
        let t = "";
        try {
            t = this.isSigned().toString();
        } catch (i) {
            e = "error";
        }
        let r = "";
        try {
            r = this.common.hardfork();
        } catch (i) {
            r = "error";
        }
        let o = `tx type=${this.type} hash=${e} nonce=${this.nonce} value=${this.value} `;
        return o += `signed=${t} hf=${r}`, o;
    }
    // eslint-disable-next-line class-methods-use-this
    _ecsign(e, t, r) {
        const o = q.sign(e, t), i = o.toCompactRawBytes();
        return {
            r: i.subarray(0, 32),
            s: i.subarray(32, 64),
            v: void 0 === r ? BigInt(o.recovery + 27) : BigInt(o.recovery + 35) + BigInt(r) * BigInt(2)
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromSerializedTx(e, t = {}) {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromTxData(e, t = {}) {}
}

const Ge = A(2..toString(16).padStart(2, "0"));

class Me extends Re {
    /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
    constructor(e, t = {}) {
        var r;
        super(Object.assign(Object.assign({}, e), {
            type: 2
        }), t), this.DEFAULT_HARDFORK = "london";
        const {chainId: o, accessList: i, maxFeePerGas: s, maxPriorityFeePerGas: a} = e;
        if (this.common = this._getCommon(t.common, o), this.chainId = this.common.chainId(), 
        !this.common.isActivatedEIP(1559)) throw new Error("EIP-1559 not enabled on Common");
        this.activeCapabilities = this.activeCapabilities.concat([ 1559, 2718, 2930 ]);
        const n = Le(null != i ? i : []);
        if (this.accessList = n.accessList, this.AccessListJSON = n.AccessListJSON, De(this.accessList), 
        this.maxFeePerGas = ue(fe("" === s ? "0x" : s)), this.maxPriorityFeePerGas = ue(fe("" === a ? "0x" : a)), 
        this._validateCannotExceedMaxInteger({
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas
        }), Re._validateNotArray(e), this.gasLimit * this.maxFeePerGas > V) {
            const e = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
            throw new Error(e);
        }
        if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
            const e = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
            throw new Error(e);
        }
        this._validateYParity(), this._validateHighS();
        (null === (r = null == t ? void 0 : t.freeze) || void 0 === r || r) && Object.freeze(this);
    }
    /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, v, r, s }
   *
   * Notes:
   * - `chainId` will be set automatically if not provided
   * - All parameters are optional and have some basic default values
   */    static fromTxData(e, t = {}) {
        return new Me(e, t);
    }
    /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS])`
   */    static fromSerializedTx(e, t = {}) {
        if (!D(e.subarray(0, 1), Ge)) throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: 2, received: ${C(e.subarray(0, 1))}`);
        const r = y.decode(e.subarray(1));
        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
        return Me.fromValuesArray(r, t);
    }
    /**
   * Create a transaction from a values array.
   *
   * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS]`
   */    static fromValuesArray(e, t = {}) {
        if (9 !== e.length && 12 !== e.length) throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
        const [r, o, i, s, a, n, c, d, h, l, f, u] = e;
        return this._validateNotArray({
            chainId: r,
            v: l
        }), g({
            nonce: o,
            maxPriorityFeePerGas: i,
            maxFeePerGas: s,
            gasLimit: a,
            value: c,
            v: l,
            r: f,
            s: u
        }), new Me({
            chainId: ue(r),
            nonce: o,
            maxPriorityFeePerGas: i,
            maxFeePerGas: s,
            gasLimit: a,
            to: n,
            value: c,
            data: d,
            accessList: null != h ? h : [],
            v: void 0 !== l ? ue(l) : void 0,
            r: f,
            s: u
        }, t);
    }
    /**
   * The amount of gas paid for the data in this tx
   */    getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
        let e = super.getDataFee();
        return e += BigInt(_e(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
            value: e,
            hardfork: this.common.hardfork()
        }), e;
    }
    /**
   * The up front amount that an account must have for this transaction to be valid
   * @param baseFee The base fee of the block (will be set to 0 if not provided)
   */    getUpfrontCost(e = BigInt(0)) {
        const t = this.maxPriorityFeePerGas, r = this.maxFeePerGas - e, o = (t < r ? t : r) + e;
        return this.gasLimit * o + this.value;
    }
    /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-1559 transaction, in order.
   *
   * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS]`
   *
   * Use {@link FeeMarketEIP1559Transaction.serialize} to add a transaction to a block
   * with {@link Block.fromValuesArray}.
   *
   * For an unsigned tx this method uses the empty Uint8Array values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link FeeMarketEIP1559Transaction.getMessageToSign}.
   */    raw() {
        return [ ke(this.chainId), ke(this.nonce), ke(this.maxPriorityFeePerGas), ke(this.maxFeePerGas), ke(this.gasLimit), void 0 !== this.to ? this.to.buf : Uint8Array.from([]), ke(this.value), this.data, this.accessList, void 0 !== this.v ? ke(this.v) : Uint8Array.from([]), void 0 !== this.r ? ke(this.r) : Uint8Array.from([]), void 0 !== this.s ? ke(this.s) : Uint8Array.from([]) ];
    }
    /**
   * Returns the serialized encoding of the EIP-1559 transaction.
   *
   * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS])`
   *
   * Note that in contrast to the legacy tx serialization format this is not
   * valid RLP any more due to the raw tx type preceding and concatenated to
   * the RLP encoding of the values.
   */    serialize() {
        const e = this.raw();
        return L(Ge, y.encode(e));
    }
    /**
   * Returns the serialized unsigned tx (hashed or raw), which can be used
   * to sign the transaction (e.g. for sending to a hardware wallet).
   *
   * Note: in contrast to the legacy tx the raw message format is already
   * serialized and doesn't need to be RLP encoded any more.
   *
   * ```javascript
   * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
   * ```
   *
   * @param hashMessage - Return hashed message if set to true (default: true)
   */    getMessageToSign(e = !0) {
        const t = this.raw().slice(0, 9), r = L(Ge, y.encode(t));
        return e ? w(r) : r;
    }
    /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link FeeMarketEIP1559Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */    hash() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(e);
        }
        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = w(this.serialize())), 
        this.cache.hash) : w(this.serialize());
    }
    /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */    getMessageToVerifySignature() {
        return this.getMessageToSign();
    }
    /**
   * Returns the public key of the sender
   */    getSenderPublicKey() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call this method if transaction is not signed");
            throw new Error(e);
        }
        const e = this.getMessageToVerifySignature(), {v: t, r: r, s: o} = this;
        this._validateHighS();
        try {
            return ye(e, t + BigInt(27), 
            // Recover the 27 which was stripped from ecsign
            ke(r), ke(o));
        } catch (i) {
            const e = this._errorMsg("Invalid Signature");
            throw new Error(e);
        }
    }
    _processSignature(e, t, r) {
        const o = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return Me.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            maxFeePerGas: this.maxFeePerGas,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: e - BigInt(27),
            r: ue(t),
            s: ue(r)
        }, o);
    }
    /**
   * Returns an object with the JSON representation of the transaction
   */    toJSON() {
        const e = Fe(this.accessList);
        return {
            chainId: be(this.chainId),
            nonce: be(this.nonce),
            maxPriorityFeePerGas: be(this.maxPriorityFeePerGas),
            maxFeePerGas: be(this.maxFeePerGas),
            gasLimit: be(this.gasLimit),
            to: void 0 !== this.to ? this.to.toString() : void 0,
            value: be(this.value),
            data: C(this.data),
            accessList: e,
            v: void 0 !== this.v ? be(this.v) : void 0,
            r: void 0 !== this.r ? be(this.r) : void 0,
            s: void 0 !== this.s ? be(this.s) : void 0
        };
    }
    /**
   * Return a compact error string representation of the object
   */    errorStr() {
        let e = this._getSharedErrorPostfix();
        return e += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`, 
        e;
    }
    /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */    _errorMsg(e) {
        return `${e} (${this.errorStr()})`;
    }
}

const Ne = A(1..toString(16).padStart(2, "0"));

class ze extends Re {
    /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
    constructor(e, t = {}) {
        var r;
        super(Object.assign(Object.assign({}, e), {
            type: 1
        }), t), this.DEFAULT_HARDFORK = "berlin";
        const {chainId: o, accessList: i, gasPrice: s} = e;
        if (this.common = this._getCommon(t.common, o), this.chainId = this.common.chainId(), 
        !this.common.isActivatedEIP(2930)) throw new Error("EIP-2930 not enabled on Common");
        this.activeCapabilities = this.activeCapabilities.concat([ 2718, 2930 ]);
        const a = Le(null != i ? i : []);
        if (this.accessList = a.accessList, this.AccessListJSON = a.AccessListJSON, De(this.accessList), 
        this.gasPrice = ue(fe("" === s ? "0x" : s)), this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        }), Re._validateNotArray(e), this.gasPrice * this.gasLimit > V) {
            const e = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
            throw new Error(e);
        }
        this._validateYParity(), this._validateHighS();
        (null === (r = null == t ? void 0 : t.freeze) || void 0 === r || r) && Object.freeze(this);
    }
    /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * v, r, s }
   *
   * Notes:
   * - `chainId` will be set automatically if not provided
   * - All parameters are optional and have some basic default values
   */    static fromTxData(e, t = {}) {
        return new ze(e, t);
    }
    /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)])`
   */    static fromSerializedTx(e, t = {}) {
        if (!D(e.subarray(0, 1), Ne)) throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: 1, received: ${C(e.subarray(0, 1))}`);
        const r = y.decode(Uint8Array.from(e.subarray(1)));
        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
        return ze.fromValuesArray(r, t);
    }
    /**
   * Create a transaction from a values array.
   *
   * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)]`
   */    static fromValuesArray(e, t = {}) {
        if (8 !== e.length && 11 !== e.length) throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
        const [r, o, i, s, a, n, c, d, h, l, f] = e;
        this._validateNotArray({
            chainId: r,
            v: h
        }), g({
            nonce: o,
            gasPrice: i,
            gasLimit: s,
            value: n,
            v: h,
            r: l,
            s: f
        });
        return new ze({
            chainId: ue(r),
            nonce: o,
            gasPrice: i,
            gasLimit: s,
            to: a,
            value: n,
            data: c,
            accessList: null != d ? d : [],
            v: void 0 !== h ? ue(h) : void 0,
            r: l,
            s: f
        }, t);
    }
    /**
   * The amount of gas paid for the data in this tx
   */    getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
        let e = super.getDataFee();
        return e += BigInt(_e(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
            value: e,
            hardfork: this.common.hardfork()
        }), e;
    }
    /**
   * The up front amount that an account must have for this transaction to be valid
   */    getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value;
    }
    /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-2930 transaction, in order.
   *
   * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)]`
   *
   * Use {@link AccessListEIP2930Transaction.serialize} to add a transaction to a block
   * with {@link Block.fromValuesArray}.
   *
   * For an unsigned tx this method uses the empty UINT8ARRAY values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link AccessListEIP2930Transaction.getMessageToSign}.
   */    raw() {
        return [ ke(this.chainId), ke(this.nonce), ke(this.gasPrice), ke(this.gasLimit), void 0 !== this.to ? this.to.buf : Uint8Array.from([]), ke(this.value), this.data, this.accessList, void 0 !== this.v ? ke(this.v) : Uint8Array.from([]), void 0 !== this.r ? ke(this.r) : Uint8Array.from([]), void 0 !== this.s ? ke(this.s) : Uint8Array.from([]) ];
    }
    /**
   * Returns the serialized encoding of the EIP-2930 transaction.
   *
   * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)])`
   *
   * Note that in contrast to the legacy tx serialization format this is not
   * valid RLP any more due to the raw tx type preceding and concatenated to
   * the RLP encoding of the values.
   */    serialize() {
        const e = this.raw();
        return L(Ne, y.encode(e));
    }
    /**
   * Returns the serialized unsigned tx (hashed or raw), which can be used
   * to sign the transaction (e.g. for sending to a hardware wallet).
   *
   * Note: in contrast to the legacy tx the raw message format is already
   * serialized and doesn't need to be RLP encoded any more.
   *
   * ```javascript
   * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
   * ```
   *
   * @param hashMessage - Return hashed message if set to true (default: true)
   */    getMessageToSign(e = !0) {
        const t = this.raw().slice(0, 8), r = L(Ne, y.encode(t));
        return e ? w(r) : r;
    }
    /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link AccessListEIP2930Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */    hash() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(e);
        }
        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = w(this.serialize())), 
        this.cache.hash) : w(this.serialize());
    }
    /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */    getMessageToVerifySignature() {
        return this.getMessageToSign();
    }
    /**
   * Returns the public key of the sender
   */    getSenderPublicKey() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call this method if transaction is not signed");
            throw new Error(e);
        }
        const e = this.getMessageToVerifySignature(), {v: t, r: r, s: o} = this;
        this._validateHighS();
        try {
            return ye(e, t + BigInt(27), 
            // Recover the 27 which was stripped from ecsign
            ke(r), ke(o));
        } catch (i) {
            const e = this._errorMsg("Invalid Signature");
            throw new Error(e);
        }
    }
    _processSignature(e, t, r) {
        const o = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return ze.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: e - BigInt(27),
            r: ue(t),
            s: ue(r)
        }, o);
    }
    /**
   * Returns an object with the JSON representation of the transaction
   */    toJSON() {
        const e = Fe(this.accessList);
        return {
            chainId: be(this.chainId),
            nonce: be(this.nonce),
            gasPrice: be(this.gasPrice),
            gasLimit: be(this.gasLimit),
            to: void 0 !== this.to ? this.to.toString() : void 0,
            value: be(this.value),
            data: C(this.data),
            accessList: e,
            v: void 0 !== this.v ? be(this.v) : void 0,
            r: void 0 !== this.r ? be(this.r) : void 0,
            s: void 0 !== this.s ? be(this.s) : void 0
        };
    }
    /**
   * Return a compact error string representation of the object
   */    errorStr() {
        var e, t;
        let r = this._getSharedErrorPostfix();
        return r += ` gasPrice=${this.gasPrice} accessListCount=${null !== (t = null === (e = this.accessList) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0}`, 
        r;
    }
    /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */    _errorMsg(e) {
        return `${e} (${this.errorStr()})`;
    }
}

function $e(e, t) {
    const r = Number(e), o = 2 * Number(t);
    return r === o + 35 || r === o + 36;
}

class Ue extends Re {
    /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
    constructor(e, t = {}) {
        var r;
        if (super(Object.assign(Object.assign({}, e), {
            type: 0
        }), t), this.common = this._validateTxV(this.v, t.common), this.gasPrice = ue(fe("" === e.gasPrice ? "0x" : e.gasPrice)), 
        this.gasPrice * this.gasLimit > V) {
            const e = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
            throw new Error(e);
        }
        this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        }), Re._validateNotArray(e), this.common.gteHardfork("spuriousDragon") && (this.isSigned() ? $e(this.v, this.common.chainId()) && this.activeCapabilities.push(Te.EIP155ReplayProtection) : this.activeCapabilities.push(Te.EIP155ReplayProtection));
        (null === (r = null == t ? void 0 : t.freeze) || void 0 === r || r) && Object.freeze(this);
    }
    /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }
   *
   * Notes:
   * - All parameters are optional and have some basic default values
   */    static fromTxData(e, t = {}) {
        return new Ue(e, t);
    }
    /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
   */    static fromSerializedTx(e, t = {}) {
        const r = y.decode(e);
        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input. Must be array");
        return this.fromValuesArray(r, t);
    }
    /**
   * Create a transaction from a values array.
   *
   * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
   */    static fromValuesArray(e, t = {}) {
        if (6 !== e.length && 9 !== e.length) throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
        const [r, o, i, s, a, n, c, d, h] = e;
        return g({
            nonce: r,
            gasPrice: o,
            gasLimit: i,
            value: a,
            v: c,
            r: d,
            s: h
        }), new Ue({
            nonce: r,
            gasPrice: o,
            gasLimit: i,
            to: s,
            value: a,
            data: n,
            v: c,
            r: d,
            s: h
        }, t);
    }
    /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the legacy transaction, in order.
   *
   * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
   *
   * For legacy txs this is also the correct format to add transactions
   * to a block with {@link Block.fromValuesArray} (use the `serialize()` method
   * for typed txs).
   *
   * For an unsigned tx this method returns the empty Uint8Array values
   * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
   * representation have a look at {@link Transaction.getMessageToSign}.
   */    raw() {
        return [ ke(this.nonce), ke(this.gasPrice), ke(this.gasLimit), void 0 !== this.to ? this.to.buf : Uint8Array.from([]), ke(this.value), this.data, void 0 !== this.v ? ke(this.v) : Uint8Array.from([]), void 0 !== this.r ? ke(this.r) : Uint8Array.from([]), void 0 !== this.s ? ke(this.s) : Uint8Array.from([]) ];
    }
    /**
   * Returns the serialized encoding of the legacy transaction.
   *
   * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
   *
   * For an unsigned tx this method uses the empty Uint8Array values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link Transaction.getMessageToSign}.
   */    serialize() {
        return y.encode(this.raw());
    }
    _getMessageToSign() {
        const e = [ ke(this.nonce), ke(this.gasPrice), ke(this.gasLimit), void 0 !== this.to ? this.to.buf : Uint8Array.from([]), ke(this.value), this.data ];
        return this.supports(Te.EIP155ReplayProtection) && (e.push(fe(this.common.chainId())), 
        e.push(ve(fe(0))), e.push(ve(fe(0)))), e;
    }
    getMessageToSign(e = !0) {
        const t = this._getMessageToSign();
        return e ? w(y.encode(t)) : t;
    }
    /**
   * The amount of gas paid for the data in this tx
   */    getDataFee() {
        return this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork() ? this.cache.dataFee.value : (Object.isFrozen(this) && (this.cache.dataFee = {
            value: super.getDataFee(),
            hardfork: this.common.hardfork()
        }), super.getDataFee());
    }
    /**
   * The up front amount that an account must have for this transaction to be valid
   */    getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value;
    }
    /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */    hash() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(e);
        }
        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = w(y.encode(this.raw()))), 
        this.cache.hash) : w(y.encode(this.raw()));
    }
    /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */    getMessageToVerifySignature() {
        if (!this.isSigned()) {
            const e = this._errorMsg("This transaction is not signed");
            throw new Error(e);
        }
        const e = this._getMessageToSign();
        return w(y.encode(e));
    }
    /**
   * Returns the public key of the sender
   */    getSenderPublicKey() {
        const e = this.getMessageToVerifySignature(), {v: t, r: r, s: o} = this;
        this._validateHighS();
        try {
            return ye(e, t, ke(r), ke(o), this.supports(Te.EIP155ReplayProtection) ? this.common.chainId() : void 0);
        } catch (i) {
            const e = this._errorMsg("Invalid Signature");
            throw new Error(e);
        }
    }
    /**
   * Process the v, r, s values from the `sign` method of the base transaction.
   */    _processSignature(e, t, r) {
        let o = e;
        this.supports(Te.EIP155ReplayProtection) && (o += this.common.chainId() * BigInt(2) + BigInt(8));
        const i = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return Ue.fromTxData({
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            v: o,
            r: ue(t),
            s: ue(r)
        }, i);
    }
    /**
   * Returns an object with the JSON representation of the transaction.
   */    toJSON() {
        return {
            nonce: be(this.nonce),
            gasPrice: be(this.gasPrice),
            gasLimit: be(this.gasLimit),
            to: void 0 !== this.to ? this.to.toString() : void 0,
            value: be(this.value),
            data: C(this.data),
            v: void 0 !== this.v ? be(this.v) : void 0,
            r: void 0 !== this.r ? be(this.r) : void 0,
            s: void 0 !== this.s ? be(this.s) : void 0
        };
    }
    /**
   * Validates tx's `v` value
   */    _validateTxV(e, t) {
        let r;
        const o = void 0 !== e ? Number(e) : void 0;
        if (void 0 !== o && o < 37 && 27 !== o && 28 !== o) throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${o}`);
        if (void 0 !== o && 0 !== o && (!t || t.gteHardfork("spuriousDragon")) && 27 !== o && 28 !== o) if (t) {
            if (!$e(BigInt(o), t.chainId())) throw new Error(`Incompatible EIP155-based V ${o} and chain id ${t.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`);
        } else {
            let e;
            e = (o - 35) % 2 == 0 ? 35 : 36, r = BigInt(o - e) / BigInt(2);
        }
        return this._getCommon(t, r);
    }
    /**
   * Return a compact error string representation of the object
   */    errorStr() {
        let e = this._getSharedErrorPostfix();
        return e += ` gasPrice=${this.gasPrice}`, e;
    }
    /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */    _errorMsg(e) {
        return `${e} (${this.errorStr()})`;
    }
}

const je =  new Map;

class qe {
    // It is not possible to instantiate a TransactionFactory object.
    // eslint-disable-next-line @typescript-eslint/no-empty-function, no-useless-constructor
    constructor() {}
    static typeToInt(e) {
        return Number(ue(fe(e)));
    }
    static registerTransactionType(e, t) {
        const r = qe.typeToInt(e);
        je.set(r, t);
    }
    /**
   * Create a transaction from a `txData` object
   *
   * @param txData - The transaction data. The `type` field will determine which transaction type is returned (if undefined, creates a legacy transaction)
   * @param txOptions - Options to pass on to the constructor of the transaction
   */    static fromTxData(e, t = {}) {
        if (!("type" in e) || void 0 === e.type) return Ue.fromTxData(e, t);
        const r = qe.typeToInt(e.type);
        if (0 === r) return Ue.fromTxData(e, t);
        if (1 === r) return ze.fromTxData(
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        e, t);
        if (2 === r) return Me.fromTxData(
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        e, t);
        const o = je.get(r);
        if (null == o ? void 0 : o.fromTxData) return o.fromTxData(e, t);
        throw new Error(`Tx instantiation with type ${r} not supported`);
    }
    /**
   * This method tries to decode serialized data.
   *
   * @param data - The data Uint8Array
   * @param txOptions - The transaction options
   */    static fromSerializedData(e, t = {}) {
        if (!(e[0] <= 127)) return Ue.fromSerializedTx(e, t);
        switch (e[0]) {
          case 1:
            return ze.fromSerializedTx(e, t);

          case 2:
            return Me.fromSerializedTx(e, t);

          default:
            {
                const r = je.get(Number(e[0]));
                if (null == r ? void 0 : r.fromSerializedTx) return r.fromSerializedTx(e, t);
                throw new Error(`TypedTransaction with ID ${e[0]} unknown`);
            }
        }
    }
    /**
   * When decoding a BlockBody, in the transactions field, a field is either:
   * A Uint8Array (a TypedTransaction - encoded as TransactionType || rlp(TransactionPayload))
   * A Uint8Array[] (Legacy Transaction)
   * This method returns the right transaction.
   *
   * @param data - A Uint8Array or Uint8Array[]
   * @param txOptions - The transaction options
   */    static fromBlockBodyData(e, t = {}) {
        if (O(e)) return this.fromSerializedData(e, t);
        if (Array.isArray(e)) return Ue.fromValuesArray(e, t);
        throw new Error("Cannot decode transaction: unknown type input");
    }
}

var Ke = function(e, t, r, o) {
    return new (r || (r = Promise))((function(i, s) {
        function a(e) {
            try {
                c(o.next(e));
            } catch (t) {
                s(t);
            }
        }
        function n(e) {
            try {
                c(o.throw(e));
            } catch (t) {
                s(t);
            }
        }
        function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                e(t);
            }))).then(a, n);
        }
        c((o = o.apply(e, t || [])).next());
    }));
};

const Ve = (e, o) => {
    let i;
    if (!o && "string" == typeof e && p(e) && 66 !== e.length) throw new t;
    try {
        i = O(e) ? e : F(e);
    } catch (s) {
        throw new r;
    }
    if (!o && 32 !== i.byteLength) throw new t;
    return i;
}, Je = e => {
    const t = p(e) ? e : _(e), r = A(t), o = A(R(`Ethereum Signed Message:\n${r.byteLength}`)), i = L(o, r);
    return G(i);
}, Xe = (e, t) => {
    const r = Je(e), {messageHash: o, v: i, r: s, s: a, signature: n} = ((e, t) => {
        const r = Ve(t), o = q.sign(e.substring(2), r), i = o.toCompactRawBytes(), s = o.r.toString(16).padStart(64, "0"), a = o.s.toString(16).padStart(64, "0"), n = o.recovery + 27;
        return {
            messageHash: e,
            v: T(n),
            r: `0x${s}`,
            s: `0x${a}`,
            signature: `${C(i)}${n.toString(16)}`
        };
    })(r, t);
    return {
        message: e,
        messageHash: o,
        v: i,
        r: s,
        s: a,
        signature: n
    };
}, We = (e, t) => Ke(void 0, void 0, void 0, (function*() {
    const r = e.sign(A(t));
    if (f(r.v) || f(r.r) || f(r.s)) throw new d("Signer Error");
    const o = r.validate(!0);
    if (o.length > 0) {
        let e = "Signer Error ";
        for (const t of o) e += `${e} ${t}.`;
        throw new d(e);
    }
    const i = C(r.serialize()), s = G(i);
    return {
        messageHash: C(r.getMessageToSign(!0)),
        v: `0x${r.v.toString(16)}`,
        r: `0x${r.r.toString(16).padStart(64, "0")}`,
        s: `0x${r.s.toString(16).padStart(64, "0")}`,
        rawTransaction: i,
        transactionHash: C(s)
    };
})), Ye = e => {
    if (f(e)) throw new o;
    const t = qe.fromSerializedData(A(e));
    return M(t.getSenderAddress().toString());
}, Ze = (e, t, r, o, s) => {
    if ("object" == typeof e) {
        const t = `${e.r}${e.s.slice(2)}${e.v.slice(2)}`;
        return Ze(e.messageHash, t, r);
    }
    if ("string" == typeof t && "string" == typeof r && !f(o)) {
        const i = `${r}${o.slice(2)}${t.slice(2)}`;
        return Ze(e, i, s);
    }
    if (f(t)) throw new i("signature string undefined");
    const a = r ? e : Je(e);
    let n = parseInt(t.substring(130), 16);
    n > 26 && (n -= 27);
    const c = q.Signature.fromCompact(t.slice(2, 130)).addRecoveryBit(n).recoverPublicKey(a.replace("0x", "")).toRawBytes(!1), d = G(c.subarray(1));
    return M(`0x${d.slice(-40)}`);
}, Qe = e => {
    const t = Ve(e), r = q.getPublicKey(t, !1), o = G(r.slice(1)).slice(-40);
    return M(`0x${o}`);
}, et = (e, t) => {
    const r = Ve(e);
    return `0x${C(q.getPublicKey(r, t)).slice(4)}`;
}, tt = (e, t, r) => Ke(void 0, void 0, void 0, (function*() {
    var o, i, d, h, l, f, u;
    const m = Ve(e);
    let g;
    if (g = (null == r ? void 0 : r.salt) ? "string" == typeof r.salt ? A(r.salt) : r.salt : N(32), 
    !v(t) && !O(t)) throw new s;
    const p = "string" == typeof t ? A(_(t)) : t;
    let b;
    if (null == r ? void 0 : r.iv) {
        if (b = "string" == typeof r.iv ? A(r.iv) : r.iv, 16 !== b.length) throw new a;
    } else b = N(16);
    const k = null !== (o = null == r ? void 0 : r.kdf) && void 0 !== o ? o : "scrypt";
    let y, E;
    if ("pbkdf2" === k) {
        if (E = {
            dklen: null !== (i = null == r ? void 0 : r.dklen) && void 0 !== i ? i : 32,
            salt: C(g).replace("0x", ""),
            c: null !== (d = null == r ? void 0 : r.c) && void 0 !== d ? d : 262144,
            prf: "hmac-sha256"
        }, E.c < 1e3) throw new n;
        y = P(p, g, E.c, E.dklen, "sha256");
    } else {
        if ("scrypt" !== k) throw new c;
        E = {
            n: null !== (h = null == r ? void 0 : r.n) && void 0 !== h ? h : 8192,
            r: null !== (l = null == r ? void 0 : r.r) && void 0 !== l ? l : 8,
            p: null !== (f = null == r ? void 0 : r.p) && void 0 !== f ? f : 1,
            dklen: null !== (u = null == r ? void 0 : r.dklen) && void 0 !== u ? u : 32,
            salt: C(g).replace("0x", "")
        }, y = I(p, g, E.n, E.p, E.r, E.dklen);
    }
    const w = yield S(m, y.slice(0, 16), b, "aes-128-ctr"), x = C(w).slice(2), B = G(L(y.slice(16, 32), w)).replace("0x", "");
    return {
        version: 3,
        id: z(),
        address: Qe(m).toLowerCase().replace("0x", ""),
        crypto: {
            ciphertext: x,
            cipherparams: {
                iv: C(b).replace("0x", "")
            },
            cipher: "aes-128-ctr",
            kdf: k,
            kdfparams: E,
            mac: B
        }
    };
})), rt = (e, t) => {
    const r = Ve(e, t);
    return {
        address: Qe(r),
        privateKey: C(r),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        signTransaction: e => {
            throw new d("Do not have network access to sign the transaction");
        },
        sign: e => Xe("string" == typeof e ? e : JSON.stringify(e), r),
        encrypt: (e, t) => Ke(void 0, void 0, void 0, (function*() {
            return tt(r, e, t);
        }))
    };
}, ot = () => {
    const e = q.utils.randomPrivateKey();
    return rt(`${C(e)}`);
}, it = (e, t, r) => Ke(void 0, void 0, void 0, (function*() {
    const o = "object" == typeof e ? e : JSON.parse(r ? e.toLowerCase() : e);
    if (b.validateJSONSchema(X, o), 3 !== o.version) throw new h;
    const i = "string" == typeof t ? A(_(t)) : t;
    let s;
    if (b.validate([ "bytes" ], [ i ]), "scrypt" === o.crypto.kdf) {
        const e = o.crypto.kdfparams, t = "string" == typeof e.salt ? A(e.salt) : e.salt;
        s = I(i, t, e.n, e.p, e.r, e.dklen);
    } else {
        if ("pbkdf2" !== o.crypto.kdf) throw new c;
        {
            const e = o.crypto.kdfparams, t = "string" == typeof e.salt ? A(e.salt) : e.salt;
            s = P(i, t, e.c, e.dklen, "sha256");
        }
    }
    const a = A(o.crypto.ciphertext);
    if (G(L(s.slice(16, 32), a)).replace("0x", "") !== o.crypto.mac) throw new l;
    const n = yield x(A(o.crypto.ciphertext), s.slice(0, 16), A(o.crypto.cipherparams.iv));
    return rt(n);
}));

export { Ae as C, qe as T, j as W, Ze as a, Ve as b, et as c, We as d, tt as e, rt as f, it as g, Je as h, ot as i, Qe as p, Ye as r, Xe as s };

import { C as t, a as e, P as i, R as r, r as n, b as s, c as o, d as a, S as u, O as c, e as h, E as l } from "./web3-errors-hzVYhHGn.js";

import "./web3-eth-iban-75eRxAWM.js";

import { D as d, W as g } from "./web3-types-DSrrWgZ8.js";

import "./web3-validator-BARD4gRE.js";

import { E as f, t as p, i as v, c as m, d as b, e as _, g as w, h as C, j as y, k as P, l as R, m as q, W as M } from "./web3-utils-CA0vZo5F.js";

import { H as T } from "./web3-providers-http-C4pd9hst.js";

import { W as S } from "./web3-providers-ws-Fi9Qg3ru.js";

import "./web3-eth-accounts-DxnCIhbC.js";

import "./crc-32-BOb1C-oO.js";

import "./@ethereumjs-aMURc4PS.js";

class k {
    constructor() {
        this._emitter = new f;
    }
    on(t, e) {
        this._emitter.on(t, e);
    }
    once(t, e) {
        this._emitter.once(t, e);
    }
    off(t, e) {
        this._emitter.off(t, e);
    }
    emit(t, e) {
        this._emitter.emit(t, e);
    }
    listenerCount(t) {
        return this._emitter.listenerCount(t);
    }
    listeners(t) {
        return this._emitter.listeners(t);
    }
    eventNames() {
        return this._emitter.eventNames();
    }
    removeAllListeners() {
        return this._emitter.removeAllListeners();
    }
    setMaxListenerWarningThreshold(t) {
        this._emitter.setMaxListeners(t);
    }
    getMaxListeners() {
        return this._emitter.getMaxListeners();
    }
}

var x;

(x || (x = {})).CONFIG_CHANGE = "CONFIG_CHANGE";

class I extends k {
    constructor(t) {
        super(), this.config = {
            handleRevert: !1,
            defaultAccount: void 0,
            defaultBlock: "latest",
            transactionBlockTimeout: 50,
            transactionConfirmationBlocks: 24,
            transactionPollingInterval: 1e3,
            transactionPollingTimeout: 75e4,
            transactionReceiptPollingInterval: void 0,
            transactionSendTimeout: 75e4,
            transactionConfirmationPollingInterval: void 0,
            blockHeaderTimeout: 10,
            maxListenersWarningThreshold: 100,
            contractDataInputFill: "data",
            defaultNetworkId: void 0,
            defaultChain: "mainnet",
            defaultHardfork: "london",
            // TODO - Check if there is a default Common
            defaultCommon: void 0,
            defaultTransactionType: "0x2",
            defaultMaxPriorityFeePerGas: p(25e8),
            enableExperimentalFeatures: {
                useSubscriptionWhenCheckingBlockTimeout: !1,
                useRpcCallSpecification: !1
            },
            transactionBuilder: void 0,
            transactionTypeParser: void 0,
            customTransactionSchema: void 0,
            defaultReturnFormat: d,
            ignoreGasPricing: !1
        }, this.setConfig(null != t ? t : {});
    }
    setConfig(t) {
        const e = Object.keys(t);
        for (const i of e) this._triggerConfigChange(i, t[i]), v(t[i]) || "number" != typeof t[i] || "maxListenersWarningThreshold" !== i || this.setMaxListenerWarningThreshold(Number(t[i]));
        Object.assign(this.config, t);
    }
    /**
   * The `handleRevert` options property returns the revert reason string if enabled for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   * Default is `false`.
   *
   * `Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`
   */    get handleRevert() {
        return this.config.handleRevert;
    }
    /**
   * Will set the handleRevert
   */    set handleRevert(t) {
        this._triggerConfigChange("handleRevert", t), this.config.handleRevert = t;
    }
    /**
   * The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
   * either `data`, `input` or both within your contract.
   * This will affect the contracts send, call and estimateGas methods
   * Default is `data`.
   */    get contractDataInputFill() {
        return this.config.contractDataInputFill;
    }
    /**
   * Will set the contractDataInputFill
   */    set contractDataInputFill(t) {
        this._triggerConfigChange("contractDataInputFill", t), this.config.contractDataInputFill = t;
    }
    /**
   * This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   */    get defaultAccount() {
        return this.config.defaultAccount;
    }
    /**
   * Will set the default account.
   */    set defaultAccount(t) {
        this._triggerConfigChange("defaultAccount", t), this.config.defaultAccount = t;
    }
    /**
   * The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
   * - web3.eth.getBalance()
   * - web3.eth.getCode()
   * - web3.eth.getTransactionCount()
   * - web3.eth.getStorageAt()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   */    get defaultBlock() {
        return this.config.defaultBlock;
    }
    /**
   * Will set the default block.
   *
   * - A block number
   * - `"earliest"` - String: The genesis block
   * - `"latest"` - String: The latest block (current head of the blockchain)
   * - `"pending"` - String: The currently mined block (including pending transactions)
   * - `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
   * - `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network's latest blocks.
   */    set defaultBlock(t) {
        this._triggerConfigChange("defaultBlock", t), this.config.defaultBlock = t;
    }
    /**
   * The time used to wait for Ethereum Node to return the sent transaction result.
   * Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
   * Default is `750` seconds (12.5 minutes).
   */    get transactionSendTimeout() {
        return this.config.transactionSendTimeout;
    }
    /**
   * Will set the transactionSendTimeout.
   */    set transactionSendTimeout(t) {
        this._triggerConfigChange("transactionSendTimeout", t), this.config.transactionSendTimeout = t;
    }
    /**
   * The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
   * Default is `50`.
   */    get transactionBlockTimeout() {
        return this.config.transactionBlockTimeout;
    }
    /**
   * Will set the transactionBlockTimeout.
   */    set transactionBlockTimeout(t) {
        this._triggerConfigChange("transactionBlockTimeout", t), this.config.transactionBlockTimeout = t;
    }
    /**
   * This defines the number of blocks it requires until a transaction is considered confirmed.
   * Default is `24`.
   */    get transactionConfirmationBlocks() {
        return this.config.transactionConfirmationBlocks;
    }
    /**
   * Will set the transactionConfirmationBlocks.
   */    set transactionConfirmationBlocks(t) {
        this._triggerConfigChange("transactionConfirmationBlocks", t), this.config.transactionConfirmationBlocks = t;
    }
    /**
   * Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `1000` ms.
   */    get transactionPollingInterval() {
        return this.config.transactionPollingInterval;
    }
    /**
   * Will set the transactionPollingInterval.
   */    set transactionPollingInterval(t) {
        this._triggerConfigChange("transactionPollingInterval", t), this.config.transactionPollingInterval = t, 
        this.transactionReceiptPollingInterval = t, this.transactionConfirmationPollingInterval = t;
    }
    /**
   * Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
   * Default is `750` seconds (12.5 minutes).
   */    get transactionPollingTimeout() {
        return this.config.transactionPollingTimeout;
    }
    /**
   * Will set the transactionPollingTimeout.
   */    set transactionPollingTimeout(t) {
        this._triggerConfigChange("transactionPollingTimeout", t), this.config.transactionPollingTimeout = t;
    }
    /**
   * The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `undefined`
   */    get transactionReceiptPollingInterval() {
        return this.config.transactionReceiptPollingInterval;
    }
    /**
   * Will set the transactionReceiptPollingInterval
   */    set transactionReceiptPollingInterval(t) {
        this._triggerConfigChange("transactionReceiptPollingInterval", t), this.config.transactionReceiptPollingInterval = t;
    }
    get transactionConfirmationPollingInterval() {
        return this.config.transactionConfirmationPollingInterval;
    }
    set transactionConfirmationPollingInterval(t) {
        this._triggerConfigChange("transactionConfirmationPollingInterval", t), this.config.transactionConfirmationPollingInterval = t;
    }
    /**
   * The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
   * Default is `10` seconds.
   */    get blockHeaderTimeout() {
        return this.config.blockHeaderTimeout;
    }
    /**
   * Will set the blockHeaderTimeout
   */    set blockHeaderTimeout(t) {
        this._triggerConfigChange("blockHeaderTimeout", t), this.config.blockHeaderTimeout = t;
    }
    /**
   * The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
   * Default is `false` for every feature.
   */    get enableExperimentalFeatures() {
        return this.config.enableExperimentalFeatures;
    }
    /**
   * Will set the enableExperimentalFeatures
   */    set enableExperimentalFeatures(t) {
        this._triggerConfigChange("enableExperimentalFeatures", t), this.config.enableExperimentalFeatures = t;
    }
    get maxListenersWarningThreshold() {
        return this.config.maxListenersWarningThreshold;
    }
    set maxListenersWarningThreshold(t) {
        this._triggerConfigChange("maxListenersWarningThreshold", t), this.setMaxListenerWarningThreshold(t), 
        this.config.maxListenersWarningThreshold = t;
    }
    get defaultReturnFormat() {
        return this.config.defaultReturnFormat;
    }
    set defaultReturnFormat(t) {
        this._triggerConfigChange("defaultReturnFormat", t), this.config.defaultReturnFormat = t;
    }
    get defaultNetworkId() {
        return this.config.defaultNetworkId;
    }
    set defaultNetworkId(t) {
        this._triggerConfigChange("defaultNetworkId", t), this.config.defaultNetworkId = t;
    }
    get defaultChain() {
        return this.config.defaultChain;
    }
    set defaultChain(e) {
        if (!v(this.config.defaultCommon) && !v(this.config.defaultCommon.baseChain) && e !== this.config.defaultCommon.baseChain) throw new t(this.config.defaultChain, e);
        this._triggerConfigChange("defaultChain", e), this.config.defaultChain = e;
    }
    /**
   * Will return the default hardfork. Default is `london`
   * The default hardfork property can be one of the following:
   * - `chainstart`
   * - `homestead`
   * - `dao`
   * - `tangerineWhistle`
   * - `spuriousDragon`
   * - `byzantium`
   * - `constantinople`
   * - `petersburg`
   * - `istanbul`
   * - `berlin`
   * - `london`
   * - 'arrowGlacier',
   * - 'tangerineWhistle',
   * - 'muirGlacier'
   *
   */    get defaultHardfork() {
        return this.config.defaultHardfork;
    }
    /**
   * Will set the default hardfork.
   *
   */    set defaultHardfork(t) {
        if (!v(this.config.defaultCommon) && !v(this.config.defaultCommon.hardfork) && t !== this.config.defaultCommon.hardfork) throw new e(this.config.defaultCommon.hardfork, t);
        this._triggerConfigChange("defaultHardfork", t), this.config.defaultHardfork = t;
    }
    /**
   *
   * Will get the default common property
   * The default common property does contain the following Common object:
   * - `customChain` - `Object`: The custom chain properties
   * 	- `name` - `string`: (optional) The name of the chain
   * 	- `networkId` - `number`: Network ID of the custom chain
   * 	- `chainId` - `number`: Chain ID of the custom chain
   * - `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
   * - `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
   * Default is `undefined`.
   *
   */    get defaultCommon() {
        return this.config.defaultCommon;
    }
    /**
   * Will set the default common property
   *
   */    set defaultCommon(i) {
        if (!v(this.config.defaultHardfork) && !v(i) && !v(i.hardfork) && this.config.defaultHardfork !== i.hardfork) throw new e(this.config.defaultHardfork, i.hardfork);
        if (!v(this.config.defaultChain) && !v(i) && !v(i.baseChain) && this.config.defaultChain !== i.baseChain) throw new t(this.config.defaultChain, i.baseChain);
        this._triggerConfigChange("defaultCommon", i), this.config.defaultCommon = i;
    }
    /**
   *  Will get the ignoreGasPricing property. When true, the gasPrice, maxPriorityFeePerGas, and maxFeePerGas will not be autofilled in the transaction object.
   *  Useful when you want wallets to handle gas pricing.
   */    get ignoreGasPricing() {
        return this.config.ignoreGasPricing;
    }
    set ignoreGasPricing(t) {
        this._triggerConfigChange("ignoreGasPricing", t), this.config.ignoreGasPricing = t;
    }
    get defaultTransactionType() {
        return this.config.defaultTransactionType;
    }
    set defaultTransactionType(t) {
        this._triggerConfigChange("defaultTransactionType", t), this.config.defaultTransactionType = t;
    }
    get defaultMaxPriorityFeePerGas() {
        return this.config.defaultMaxPriorityFeePerGas;
    }
    set defaultMaxPriorityFeePerGas(t) {
        this._triggerConfigChange("defaultMaxPriorityFeePerGas", t), this.config.defaultMaxPriorityFeePerGas = t;
    }
    get transactionBuilder() {
        return this.config.transactionBuilder;
    }
    set transactionBuilder(t) {
        this._triggerConfigChange("transactionBuilder", t), this.config.transactionBuilder = t;
    }
    get transactionTypeParser() {
        return this.config.transactionTypeParser;
    }
    set transactionTypeParser(t) {
        this._triggerConfigChange("transactionTypeParser", t), this.config.transactionTypeParser = t;
    }
    get customTransactionSchema() {
        return this.config.customTransactionSchema;
    }
    set customTransactionSchema(t) {
        this._triggerConfigChange("customTransactionSchema", t), this.config.customTransactionSchema = t;
    }
    _triggerConfigChange(t, e) {
        this.emit(x.CONFIG_CHANGE, {
            name: t,
            oldValue: this.config[t],
            newValue: e
        });
    }
}

const E = t => g.isWeb3Provider(t), B = t => "string" != typeof t && "request" in t && "Function" === t.request.constructor.name, F = t => "string" != typeof t && "request" in t && "AsyncFunction" === t.request.constructor.name, N = t => "string" != typeof t && "send" in t, A = t => "string" != typeof t && "sendAsync" in t, G = t => t && (E(t) || F(t) || B(t) || A(t) || N(t));

var O, H, j = function(t, e, i, r) {
    return new (i || (i = Promise))((function(n, s) {
        function o(t) {
            try {
                u(r.next(t));
            } catch (e) {
                s(e);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                s(e);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                t(e);
            }))).then(o, a);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

(H = O || (O = {})).PROVIDER_CHANGED = "PROVIDER_CHANGED", H.BEFORE_PROVIDER_CHANGE = "BEFORE_PROVIDER_CHANGE";

const D = {
    HttpProvider: T,
    WebsocketProvider: S
};

class L extends k {
    constructor(t, e, i) {
        super(), v(t) || this.setProvider(t), this.useRpcCallSpecification = e, v(i) || (this.middleware = i);
    }
    /**
   * Will return all available providers
   */    static get providers() {
        return D;
    }
    /**
   * Will return the current provider.
   *
   * @returns Returns the current provider
   */    get provider() {
        return this._provider;
    }
    /**
   * Will return all available providers
   */
    // eslint-disable-next-line class-methods-use-this
    get providers() {
        return D;
    }
    /**
   * Use to set provider. Provider can be a provider instance or a string.
   *
   * @param provider - The provider to set
   */    setProvider(t) {
        let e;
        if (t && "string" == typeof t && this.providers) if (/^http(s)?:\/\//i.test(t)) e = new this.providers.HttpProvider(t); else {
            if (!/^ws(s)?:\/\//i.test(t)) throw new i(`Can't autodetect provider for "${t}"`);
            e = new this.providers.WebsocketProvider(t);
        } else e = v(t) ? void 0 : t;
        return this.emit(O.BEFORE_PROVIDER_CHANGE, this._provider), this._provider = e, 
        this.emit(O.PROVIDER_CHANGED, this._provider), !0;
    }
    setMiddleware(t) {
        this.middleware = t;
    }
    /**
   *
   * Will execute a request
   *
   * @param request - {@link Web3APIRequest} The request to send
   *
   * @returns The response of the request {@link ResponseType}. If there is error
   * in the response, will throw an error
   */    send(t) {
        return j(this, void 0, void 0, (function*() {
            const e = Object.assign({}, t);
            let i = yield this._sendRequest(e);
            if (v(this.middleware) || (i = yield this.middleware.processResponse(i)), m(i)) return i.result;
            throw new r(i);
        }));
    }
    /**
   * Same as send, but, will execute a batch of requests
   *
   * @param request {@link JsonRpcBatchRequest} The batch request to send
   */    sendBatch(t) {
        return j(this, void 0, void 0, (function*() {
            return yield this._sendRequest(t);
        }));
    }
    _sendRequest(t) {
        return j(this, void 0, void 0, (function*() {
            const {provider: e} = this;
            if (v(e)) throw new i("Provider not available. Use `.setProvider` or `.provider=` to initialize the provider.");
            let n = b(t) ? _(t) : w(t);
            if (v(this.middleware) || (n = yield this.middleware.processRequest(n)), E(e)) {
                let t;
                try {
                    t = yield e.request(n);
                } catch (s) {
                    t = s;
                }
                return this._processJsonRpcResponse(n, t, {
                    legacy: !1,
                    error: !1
                });
            }
            if (F(e)) return e.request(n).then((t => this._processJsonRpcResponse(n, t, {
                legacy: !0,
                error: !1
            }))).catch((t => this._processJsonRpcResponse(n, t, {
                legacy: !0,
                error: !0
            })));
            if (B(e)) return new Promise(((t, i) => {
                const r = t => {
                    i(this._processJsonRpcResponse(n, t, {
                        legacy: !0,
                        error: !0
                    }));
                }, s = e => t(this._processJsonRpcResponse(n, e, {
                    legacy: !0,
                    error: !1
                })), o = e.request(n, (
                // a callback that is expected to be called after getting the response:
                (t, e) => t ? r(t) : s(e)));
                if (C(o)) {
                    o.then(s).catch((t => {
                        try {
                            const e = this._processJsonRpcResponse(n, t, {
                                legacy: !0,
                                error: !0
                            });
                            i(e);
                        } catch (e) {
                            i(e);
                        }
                    }));
                }
            }));
            if (N(e)) return new Promise(((t, i) => {
                e.send(n, ((e, s) => {
                    if (e) return i(this._processJsonRpcResponse(n, e, {
                        legacy: !0,
                        error: !0
                    }));
                    if (v(s)) throw new r({}, 'Got a "nullish" response from provider.');
                    return t(this._processJsonRpcResponse(n, s, {
                        legacy: !0,
                        error: !1
                    }));
                }));
            }));
            if (A(e)) return e.sendAsync(n).then((t => this._processJsonRpcResponse(n, t, {
                legacy: !0,
                error: !1
            }))).catch((t => this._processJsonRpcResponse(n, t, {
                legacy: !0,
                error: !0
            })));
            throw new i("Provider does not have a request or send method to use.");
        }));
    }
    // eslint-disable-next-line class-methods-use-this
    _processJsonRpcResponse(t, e, {legacy: i, error: a}) {
        if (v(e)) return this._buildResponse(t, 
        // Some providers uses "null" as valid empty response
        // eslint-disable-next-line no-null/no-null
        null, a);
        if (y(e)) {
            if (this.useRpcCallSpecification && P(e)) {
                const t = e;
                if (n.get(t.error.code)) {
                    throw new (0, n.get(t.error.code).error)(t);
                }
                throw new s(t);
            }
            if (!L._isReverted(e)) throw new o(e, t);
        }
        if (m(e)) return e;
        if (e instanceof Error) throw L._isReverted(e), e;
        if (!i && b(t) && R(e)) return e;
        if (i && !a && b(t)) return e;
        if (i && a && b(t)) throw e;
        if (i && !y(e) && !m(e)) return this._buildResponse(t, e, a);
        if (b(t) && !Array.isArray(e)) throw new r(e, "Got normal response for a batch request.");
        if (!b(t) && Array.isArray(e)) throw new r(e, "Got batch response for a normal request.");
        throw new r(e, "Invalid response");
    }
    static _isReverted(t) {
        let e;
        if (y(t) ? e = t.error : t instanceof Error && (e = t), null == e ? void 0 : e.message.includes("revert")) throw new a(e);
        return !1;
    }
    // Need to use same types as _processJsonRpcResponse so have to declare as instance method
    // eslint-disable-next-line class-methods-use-this
    _buildResponse(t, e, i) {
        const r = {
            jsonrpc: "2.0",
            // eslint-disable-next-line no-nested-ternary
            id: b(t) ? t[0].id : "id" in t ? t.id : 
            // Have to use the null here explicitly
            // eslint-disable-next-line no-null/no-null
            null
        };
        return i ? Object.assign(Object.assign({}, r), {
            error: e
        }) : Object.assign(Object.assign({}, r), {
            result: e
        });
    }
}

var W = function(t, e, i, r) {
    return new (i || (i = Promise))((function(n, s) {
        function o(t) {
            try {
                u(r.next(t));
            } catch (e) {
                s(e);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                s(e);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                t(e);
            }))).then(o, a);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

class J {
    constructor(t, e, i = !1) {
        this.requestManager = t, this.registeredSubscriptions = e, this.tolerateUnlinkedSubscription = i, 
        this._subscriptions =  new Map, this.requestManager.on(O.BEFORE_PROVIDER_CHANGE, (() => W(this, void 0, void 0, (function*() {
            yield this.unsubscribe();
        })))), this.requestManager.on(O.PROVIDER_CHANGED, (() => {
            this.clear(), this.listenToProviderEvents();
        })), this.listenToProviderEvents();
    }
    listenToProviderEvents() {
        const t = this.requestManager.provider;
        this.requestManager.provider && ("function" != typeof (null == t ? void 0 : t.supportsSubscriptions) || (null == t ? void 0 : t.supportsSubscriptions())) && "function" == typeof this.requestManager.provider.on && ("function" == typeof this.requestManager.provider.request ? this.requestManager.provider.on("message", (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
        t => this.messageListener(t))) : t.on("data", (t => this.messageListener(t))));
    }
    messageListener(t) {
        var e, i, r;
        if (!t) throw new u("Should not call messageListener with no data. Type was");
        const n = (null === (e = t.params) || void 0 === e ? void 0 : e.subscription) || (null === (i = t.data) || void 0 === i ? void 0 : i.subscription) || (null === (r = t.id) || void 0 === r ? void 0 : r.toString(16));
        if (n) {
            const e = this._subscriptions.get(n);
            null == e || e.processSubscriptionData(t);
        }
    }
    /**
   * Will create a new subscription
   *
   * @param name - The subscription you want to subscribe to
   * @param args - Optional additional parameters, depending on the subscription type
   * @param returnFormat- ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   *
   * Will subscribe to a specific topic (note: name)
   * @returns The subscription object
   */    subscribe(t, e, i = d) {
        return W(this, void 0, void 0, (function*() {
            const r = this.registeredSubscriptions[t];
            if (!r) throw new u("Invalid subscription type");
            const n = new r(null != e ? e : void 0, {
                subscriptionManager: this,
                returnFormat: i
            });
            return yield this.addSubscription(n), n;
        }));
    }
    /**
   * Will returns all subscriptions.
   */    get subscriptions() {
        return this._subscriptions;
    }
    /**
   *
   * Adds an instance of {@link Web3Subscription} and subscribes to it
   *
   * @param sub - A {@link Web3Subscription} object
   */    addSubscription(t) {
        return W(this, void 0, void 0, (function*() {
            if (!this.requestManager.provider) throw new i("Provider not available");
            if (!this.supportsSubscriptions()) throw new u("The current provider does not support subscriptions");
            if (t.id && this._subscriptions.has(t.id)) throw new u(`Subscription with id "${t.id}" already exists`);
            if (yield t.sendSubscriptionRequest(), v(t.id)) throw new u("Subscription is not subscribed yet.");
            return this._subscriptions.set(t.id, t), t.id;
        }));
    }
    /**
   * Will clear a subscription
   *
   * @param id - The subscription of type {@link Web3Subscription}  to remove
   */    removeSubscription(t) {
        return W(this, void 0, void 0, (function*() {
            const {id: e} = t;
            if (v(e)) throw new u("Subscription is not subscribed yet. Or, had already been unsubscribed but not through the Subscription Manager.");
            if (!this._subscriptions.has(e) && !this.tolerateUnlinkedSubscription) throw new u(`Subscription with id "${e.toString()}" does not exists`);
            return yield t.sendUnsubscribeRequest(), this._subscriptions.delete(e), e;
        }));
    }
    /**
   * Will unsubscribe all subscriptions that fulfill the condition
   *
   * @param condition - A function that access and `id` and a `subscription` and return `true` or `false`
   * @returns An array of all the un-subscribed subscriptions
   */    unsubscribe(t) {
        return W(this, void 0, void 0, (function*() {
            const e = [];
            for (const [i, r] of this.subscriptions.entries()) (!t || "function" == typeof t && t({
                id: i,
                sub: r
            })) && e.push(this.removeSubscription(r));
            return Promise.all(e);
        }));
    }
    /**
   * Clears all subscriptions
   */    clear() {
        this._subscriptions.clear();
    }
    /**
   * Check whether the current provider supports subscriptions.
   *
   * @returns `true` or `false` depending on if the current provider supports subscriptions
   */    supportsSubscriptions() {
        return !v(this.requestManager.provider) && ((t = this.requestManager.provider) && "supportsSubscriptions" in t ? t.supportsSubscriptions() : !(!t || "string" == typeof t || !("on" in t)));
        var t;
    }
}

var V = function(t, e, i, r) {
    return new (i || (i = Promise))((function(n, s) {
        function o(t) {
            try {
                u(r.next(t));
            } catch (e) {
                s(e);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                s(e);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                t(e);
            }))).then(o, a);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

class $ extends k {
    constructor(t, e) {
        var i;
        super(), this.args = t;
        const {requestManager: r} = e, {subscriptionManager: n} = e;
        this._subscriptionManager = r ? new J(r, {}, !0) : n, this._returnFormat = null !== (i = null == e ? void 0 : e.returnFormat) && void 0 !== i ? i : d;
    }
    get id() {
        return this._id;
    }
    get lastBlock() {
        return this._lastBlock;
    }
    subscribe() {
        return V(this, void 0, void 0, (function*() {
            return this._subscriptionManager.addSubscription(this);
        }));
    }
    processSubscriptionData(t) {
        var e, i;
        (null == t ? void 0 : t.data) ? this._processSubscriptionResult(null !== (i = null === (e = null == t ? void 0 : t.data) || void 0 === e ? void 0 : e.result) && void 0 !== i ? i : null == t ? void 0 : t.data) : t && q(t) && this._processSubscriptionResult(null == t ? void 0 : t.params.result);
    }
    sendSubscriptionRequest() {
        return V(this, void 0, void 0, (function*() {
            return this._id = yield this._subscriptionManager.requestManager.send({
                method: "eth_subscribe",
                params: this._buildSubscriptionParams()
            }), this.emit("connected", this._id), this._id;
        }));
    }
    get returnFormat() {
        return this._returnFormat;
    }
    get subscriptionManager() {
        return this._subscriptionManager;
    }
    resubscribe() {
        return V(this, void 0, void 0, (function*() {
            yield this.unsubscribe(), yield this.subscribe();
        }));
    }
    unsubscribe() {
        return V(this, void 0, void 0, (function*() {
            this.id && (yield this._subscriptionManager.removeSubscription(this));
        }));
    }
    sendUnsubscribeRequest() {
        return V(this, void 0, void 0, (function*() {
            yield this._subscriptionManager.requestManager.send({
                method: "eth_unsubscribe",
                params: [ this.id ]
            }), this._id = void 0;
        }));
    }
    // eslint-disable-next-line class-methods-use-this
    formatSubscriptionResult(t) {
        return t;
    }
    _processSubscriptionResult(t) {
        this.emit("data", this.formatSubscriptionResult(t));
    }
    _processSubscriptionError(t) {
        this.emit("error", t);
    }
    // eslint-disable-next-line class-methods-use-this
    _buildSubscriptionParams() {
        throw new Error("Implement in the child class");
    }
}

var z = function(t, e, i, r) {
    return new (i || (i = Promise))((function(n, s) {
        function o(t) {
            try {
                u(r.next(t));
            } catch (e) {
                s(e);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                s(e);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                t(e);
            }))).then(o, a);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

class U {
    constructor(t) {
        this._requestManager = t, this._requests =  new Map;
    }
    get requests() {
        return [ ...this._requests.values() ].map((t => t.payload));
    }
    add(t) {
        const e = w(t), i = new M;
        return this._requests.set(e.id, {
            payload: e,
            promise: i
        }), i;
    }
    // eslint-disable-next-line class-methods-use-this
    execute(t) {
        var e;
        return z(this, void 0, void 0, (function*() {
            if (0 === this.requests.length) return Promise.resolve([]);
            const i = new M({
                timeout: null !== (e = null == t ? void 0 : t.timeout) && void 0 !== e ? e : 1e3,
                eagerStart: !0,
                timeoutMessage: "Batch request timeout"
            });
            return this._processBatchRequest(i).catch((t => i.reject(t))), i.catch((t => {
                t instanceof c && this._abortAllRequests("Batch request timeout"), i.reject(t);
            })), i;
        }));
    }
    _processBatchRequest(t) {
        var e, i;
        return z(this, void 0, void 0, (function*() {
            const n = yield this._requestManager.sendBatch([ ...this._requests.values() ].map((t => t.payload)));
            if (n.length !== this._requests.size) throw this._abortAllRequests("Invalid batch response"), 
            new r(n, `Batch request size mismatch the results size. Requests: ${this._requests.size}, Responses: ${n.length}`);
            const s = this.requests.map((t => t.id)).map(Number).sort(((t, e) => t - e)), o = n.map((t => t.id)).map(Number).sort(((t, e) => t - e));
            if (JSON.stringify(s) !== JSON.stringify(o)) throw this._abortAllRequests("Invalid batch response"), 
            new r(n, `Batch request mismatch the results. Requests: [${s.join()}], Responses: [${o.join()}]`);
            for (const t of n) m(t) ? null === (e = this._requests.get(t.id)) || void 0 === e || e.promise.resolve(t.result) : y(t) && (null === (i = this._requests.get(t.id)) || void 0 === i || i.promise.reject(t.error));
            t.resolve(n);
        }));
    }
    _abortAllRequests(t) {
        for (const {promise: e} of this._requests.values()) e.reject(new h(t));
    }
}

var K = function(t, e, i, r) {
    return new (i || (i = Promise))((function(n, s) {
        function o(t) {
            try {
                u(r.next(t));
            } catch (e) {
                s(e);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                s(e);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                t(e);
            }))).then(o, a);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

class Q extends I {
    constructor(t) {
        var e;
        if (super(), this.providers = L.providers, v(t) || "string" == typeof t && "" !== t.trim() || G(t)) return this._requestManager = new L(t), 
        void (this._subscriptionManager = new J(this._requestManager, {}));
        const {config: i, provider: r, requestManager: n, subscriptionManager: s, registeredSubscriptions: o, accountProvider: a, wallet: u, requestManagerMiddleware: c} = t;
        this.setConfig(null != i ? i : {}), this._requestManager = null != n ? n : new L(r, null === (e = null == i ? void 0 : i.enableExperimentalFeatures) || void 0 === e ? void 0 : e.useSubscriptionWhenCheckingBlockTimeout, c), 
        this._subscriptionManager = s || new J(this.requestManager, null != o ? o : {}), 
        a && (this._accountProvider = a), u && (this._wallet = u);
    }
    get requestManager() {
        return this._requestManager;
    }
    /**
   * Will return the current subscriptionManager ({@link Web3SubscriptionManager})
   */    get subscriptionManager() {
        return this._subscriptionManager;
    }
    get wallet() {
        return this._wallet;
    }
    get accountProvider() {
        return this._accountProvider;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromContextObject(...t) {
        return new this(...t.reverse());
    }
    getContextObject() {
        var t;
        return {
            config: this.config,
            provider: this.provider,
            requestManager: this.requestManager,
            subscriptionManager: this.subscriptionManager,
            registeredSubscriptions: null === (t = this.subscriptionManager) || void 0 === t ? void 0 : t.registeredSubscriptions,
            providers: this.providers,
            wallet: this.wallet,
            accountProvider: this.accountProvider
        };
    }
    /**
   * Use to create new object of any type extended by `Web3Context`
   * and link it to current context. This can be used to initiate a global context object
   * and then use it to create new objects of any type extended by `Web3Context`.
   */    use(t, ...e) {
        const i = new t(...[ ...e, this.getContextObject() ]);
        return this.on(x.CONFIG_CHANGE, (t => {
            i.setConfig({
                [t.name]: t.newValue
            });
        })), this[t.name] = i, i;
    }
    /**
   * Link current context to another context.
   */    link(t) {
        this.setConfig(t.config), this._requestManager = t.requestManager, this.provider = t.provider, 
        this._subscriptionManager = t.subscriptionManager, this._wallet = t.wallet, this._accountProvider = t._accountProvider, 
        t.on(x.CONFIG_CHANGE, (t => {
            this.setConfig({
                [t.name]: t.newValue
            });
        }));
    }
    // eslint-disable-next-line no-use-before-define
    registerPlugin(t) {
        if (void 0 !== this[t.pluginNamespace]) throw new l(t.pluginNamespace);
        const e = {
            [t.pluginNamespace]: t
        };
        e[t.pluginNamespace].link(this), Object.assign(this, e);
    }
    /**
   * Will return the current provider.
   *
   * @returns Returns the current provider
   * @example
   * ```ts
   * const web3 = new Web3Context("http://localhost:8545");
   * console.log(web3.provider);
   * > HttpProvider {
   * 	clientUrl: 'http://localhost:8545',
   * 	httpProviderOptions: undefined
   *  }
   * ```
   */    get provider() {
        return this.currentProvider;
    }
    /**
   * Will set the current provider.
   *
   * @param provider - The provider to set
   *
   * Accepted providers are of type {@link SupportedProviders}
   * @example
   * ```ts
   *  const web3Context = new web3ContextContext("http://localhost:8545");
   * web3Context.provider = "ws://localhost:8545";
   * console.log(web3Context.provider);
   * > WebSocketProvider {
   * _eventEmitter: EventEmitter {
   * _events: [Object: null prototype] {},
   * _eventsCount: 0,
   * ...
   * }
   * ```
   */    set provider(t) {
        this.requestManager.setProvider(t);
    }
    /**
   * Will return the current provider. (The same as `provider`)
   *
   * @returns Returns the current provider
   * @example
   * ```ts
   * const web3Context = new Web3Context("http://localhost:8545");
   * console.log(web3Context.provider);
   * > HttpProvider {
   * 	clientUrl: 'http://localhost:8545',
   * 	httpProviderOptions: undefined
   *  }
   * ```
   */    get currentProvider() {
        return this.requestManager.provider;
    }
    /**
   * Will set the current provider. (The same as `provider`)
   *
   * @param provider - {@link SupportedProviders} The provider to set
   *
   * @example
   * ```ts
   *  const web3Context = new Web3Context("http://localhost:8545");
   * web3Context.currentProvider = "ws://localhost:8545";
   * console.log(web3Context.provider);
   * > WebSocketProvider {
   * _eventEmitter: EventEmitter {
   * _events: [Object: null prototype] {},
   * _eventsCount: 0,
   * ...
   * }
   * ```
   */    set currentProvider(t) {
        this.requestManager.setProvider(t);
    }
    /**
   * Will return the givenProvider if available.
   *
   * When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.
   */
    // eslint-disable-next-line class-methods-use-this
    get givenProvider() {
        return Q.givenProvider;
    }
    /**
   * Will set the provider.
   *
   * @param provider - {@link SupportedProviders} The provider to set
   * @returns Returns true if the provider was set
   */    setProvider(t) {
        return this.provider = t, !0;
    }
    setRequestManagerMiddleware(t) {
        this.requestManager.setMiddleware(t);
    }
    /**
   * Will return the {@link Web3BatchRequest} constructor.
   */    get BatchRequest() {
        return U.bind(void 0, this._requestManager);
    }
    /**
   * This method allows extending the web3 modules.
   * Note: This method is only for backward compatibility, and It is recommended to use Web3 v4 Plugin feature for extending web3.js functionality if you are developing something new.
   */    extend(t) {
        var e;
        return t.property && !this[t.property] && (this[t.property] = {}), null === (e = t.methods) || void 0 === e || e.forEach((e => {
            const i = (...t) => K(this, void 0, void 0, (function*() {
                return this.requestManager.send({
                    method: e.call,
                    params: t
                });
            }));
            t.property ? this[t.property][e.name] = i : this[e.name] = i;
        })), this;
    }
}

Q.providers = L.providers;

var X, Y = function(t, e, i, r) {
    return new (i || (i = Promise))((function(n, s) {
        function o(t) {
            try {
                u(r.next(t));
            } catch (e) {
                s(e);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (e) {
                s(e);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                t(e);
            }))).then(o, a);
        }
        u((r = r.apply(t, e || [])).next());
    }));
};

class Z extends k {
    constructor(t) {
        super(), this[X] = "Promise", this._promise = new Promise(t);
    }
    then(t, e) {
        return Y(this, void 0, void 0, (function*() {
            return this._promise.then(t, e);
        }));
    }
    catch(t) {
        return Y(this, void 0, void 0, (function*() {
            return this._promise.catch(t);
        }));
    }
    finally(t) {
        return Y(this, void 0, void 0, (function*() {
            return this._promise.finally(t);
        }));
    }
    on(t, e) {
        return super.on(t, e), this;
    }
    once(t, e) {
        return super.once(t, e), this;
    }
}

X = Symbol.toStringTag;

export { Q as W, Z as a, $ as b, x as c, G as i };

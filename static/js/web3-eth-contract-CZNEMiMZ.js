import { b as t, W as s, c as n } from "./web3-core-ObgmPHuP.js";

import { a as e, F as i, D as a, B as o } from "./web3-types-DSrrWgZ8.js";

import { a6 as r, a7 as c, d, S as l } from "./web3-errors-hzVYhHGn.js";

import "./web3-eth-iban-75eRxAWM.js";

import { i as u, t as p, v as h, W as f } from "./web3-validator-BARD4gRE.js";

import "./setimmediate-DUOPLI_V.js";

import { b as m, A as v, d as g, s as b, a as y, g as j, c as _, e as w, f as O, N as F } from "./web3-eth-vWxzIr98.js";

import { e as I, k as A, c as P, g as x, d as C, l as M, m as S, b as D, i as E, n as B, o as R, j as G } from "./web3-eth-abi-eT7or4Ei.js";

import { i as k, f as T, q as W, n as $, a as H, b as N, z as L } from "./web3-utils-CA0vZo5F.js";

const V = ({address: t}, s, n) => {
    var a, o;
    const r = null == n ? void 0 : n.topics, c = null !== (a = null == n ? void 0 : n.filter) && void 0 !== a ? a : {}, d = {};
    if (k(null == n ? void 0 : n.fromBlock) || (d.fromBlock = T(m.properties.number, null == n ? void 0 : n.fromBlock, {
        number: e.HEX,
        bytes: i.HEX
    })), k(null == n ? void 0 : n.toBlock) || (d.toBlock = T(m.properties.number, null == n ? void 0 : n.toBlock, {
        number: e.HEX,
        bytes: i.HEX
    })), r && Array.isArray(r)) d.topics = [ ...r ]; else if (d.topics = [], !s || s.anonymous || [ v, "allEvents" ].includes(s.name) || d.topics.push(null !== (o = s.signature) && void 0 !== o ? o : I(A(s))), 
    ![ v, "allEvents" ].includes(s.name) && s.inputs) for (const e of s.inputs) {
        if (!e.indexed) continue;
        const t = c[e.name];
        t ? Array.isArray(t) ? d.topics.push(t.map((t => P(e.type, t)))) : "string" === e.type ? d.topics.push(W(t)) : d.topics.push(P(e.type, t)) : d.topics.push(null);
    }
    return d.topics.length || delete d.topics, t && (d.address = t.toLowerCase()), d;
}, U = (t, s, n) => {
    const e = Array.isArray(t.inputs) ? t.inputs.length : 0;
    if (t.inputs && e !== s.length) throw new r(`The number of arguments is not matching the methods required number. You need to pass ${e} arguments.`);
    let i;
    if (i = t.inputs ? C(Array.isArray(t.inputs) ? t.inputs : [], s).replace("0x", "") : M(s).replace("0x", ""), 
    S(t)) {
        if (!n) throw new r("The contract has no contract data option set. This is necessary to append the constructor parameters.");
        return n.startsWith("0x") ? `${n}${i}` : `0x${n}${i}`;
    }
    return `${D(t)}${i}`;
}, X = (t, s, n = !0) => {
    const e = n && s && s.length >= 10 && s.startsWith("0x") ? s.slice(10) : s;
    if (!t.inputs) throw new r("No inputs found in the ABI");
    return x([ ...t.inputs ], e);
};

class q extends t {
    constructor(t, s) {
        super(t, s), this.address = t.address, this.topics = t.topics, this.abi = t.abi, 
        this.jsonInterface = t.jsonInterface;
    }
    _buildSubscriptionParams() {
        return [ "logs", {
            address: this.address,
            topics: this.topics
        } ];
    }
    formatSubscriptionResult(t) {
        return g(this.abi, t, this.jsonInterface, super.returnFormat);
    }
}

Array.from({
    length: 256
}, ((t, s) => s.toString(16).padStart(2, "0")));

const J = (t, s, n, e) => {
    var i, a;
    const o = {};
    return k(t.data) && "both" !== e || (o.data = U(s, n, null !== (i = t.data) && void 0 !== i ? i : t.input)), 
    k(t.input) && "both" !== e || (o.input = U(s, n, null !== (a = t.input) && void 0 !== a ? a : t.data)), 
    k(o.input) && k(o.data) && (o[e] = U(s, n)), {
        data: o.data,
        input: o.input
    };
}, z = ({abi: t, params: s, options: n, contractOptions: e}) => {
    var i, a, o;
    if (!(null !== (o = null !== (a = null !== (i = null == n ? void 0 : n.input) && void 0 !== i ? i : null == n ? void 0 : n.data) && void 0 !== a ? a : e.input) && void 0 !== o ? o : e.data) && !(null == n ? void 0 : n.to) && !e.address) throw new r("Contract address not specified");
    if (!(null == n ? void 0 : n.from) && !e.from) throw new r('Contract "from" address not specified');
    let c = $({
        to: e.address,
        gas: e.gas,
        gasPrice: e.gasPrice,
        from: e.from,
        input: e.input,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas,
        maxFeePerGas: e.maxFeePerGas,
        data: e.data
    }, n);
    const d = J(c, t, s, null == n ? void 0 : n.dataInputFill);
    return c = Object.assign(Object.assign({}, c), {
        data: d.data,
        input: d.input
    }), c;
}, Y = t => "object" == typeof t && !k(t) && 0 !== Object.keys(t).length && !H(t);

var K = function(t, s, n, e) {
    return new (n || (n = Promise))((function(i, a) {
        function o(t) {
            try {
                c(e.next(t));
            } catch (s) {
                a(s);
            }
        }
        function r(t) {
            try {
                c(e.throw(t));
            } catch (s) {
                a(s);
            }
        }
        function c(t) {
            var s;
            t.done ? i(t.value) : (s = t.value, s instanceof n ? s : new n((function(t) {
                t(s);
            }))).then(o, r);
        }
        c((e = e.apply(t, s || [])).next());
    }));
};

class Q {
    constructor(t, s) {
        this.parent = t, this.deployOptions = s;
        const {args: n, abi: e, contractOptions: i, deployData: a} = this.calculateDeployParams();
        this.args = n, this.constructorAbi = e, this.contractOptions = i, this.deployData = a;
    }
    _contractMethodDeploySend(t) {
        const s = {
            transactionResolver: t => {
                if (t.status === BigInt(0)) throw new r("code couldn't be stored", t);
                const s = this.parent.clone();
                return s.options.address = t.contractAddress, s;
            },
            contractAbi: this.parent.options.jsonInterface,
            // TODO Should make this configurable by the user
            checkRevertBeforeSending: !1
        };
        return u(this.parent.getTransactionMiddleware()) ? b(this.parent, t, this.parent.defaultReturnFormat, s) : b(this.parent, t, this.parent.defaultReturnFormat, s, this.parent.getTransactionMiddleware());
    }
    send(t) {
        const s = Object.assign({}, t), n = this.populateTransaction(s);
        return this._contractMethodDeploySend(n);
    }
    populateTransaction(t) {
        var s, n;
        const e = Object.assign(Object.assign({}, this.contractOptions), {
            from: null !== (n = null !== (s = this.contractOptions.from) && void 0 !== s ? s : this.parent.defaultAccount) && void 0 !== n ? n : void 0
        }), i = z({
            abi: this.constructorAbi,
            params: this.args,
            options: Object.assign(Object.assign({}, t), {
                dataInputFill: this.parent.contractDataInputFill
            }),
            contractOptions: e
        });
        return i.dataInputFill && delete i.dataInputFill, i;
    }
    calculateDeployParams() {
        var t, s, n, e, i, o;
        let c = this.parent.options.jsonInterface.find((t => "constructor" === t.type));
        c || (c = {
            type: "constructor",
            stateMutability: ""
        });
        const d = T({
            format: "bytes"
        }, null !== (s = null === (t = this.deployOptions) || void 0 === t ? void 0 : t.input) && void 0 !== s ? s : this.parent.options.input, a), l = T({
            format: "bytes"
        }, null !== (e = null === (n = this.deployOptions) || void 0 === n ? void 0 : n.data) && void 0 !== e ? e : this.parent.options.data, a);
        if (!(d && "0x" !== d.trim() || l && "0x" !== l.trim())) throw new r("contract creation without any data provided.");
        return {
            args: null !== (o = null === (i = this.deployOptions) || void 0 === i ? void 0 : i.arguments) && void 0 !== o ? o : [],
            abi: c,
            contractOptions: Object.assign(Object.assign({}, this.parent.options), {
                input: d,
                data: l
            }),
            deployData: null != d ? d : l
        };
    }
    estimateGas(t, s = this.parent.defaultReturnFormat) {
        return K(this, void 0, void 0, (function*() {
            const n = Object.assign({}, t);
            return this.parent.contractMethodEstimateGas({
                abi: this.constructorAbi,
                params: this.args,
                returnFormat: s,
                options: n,
                contractOptions: this.contractOptions
            });
        }));
    }
    encodeABI() {
        return U(this.constructorAbi, this.args, T({
            format: "bytes"
        }, this.deployData, this.parent.defaultReturnFormat));
    }
    decodeData(t) {
        return Object.assign(Object.assign({}, X(this.constructorAbi, t.replace(this.deployData, ""), !1)), {
            __method__: this.constructorAbi.type
        });
    }
}

var Z = function(t, s, n, e) {
    return new (n || (n = Promise))((function(i, a) {
        function o(t) {
            try {
                c(e.next(t));
            } catch (s) {
                a(s);
            }
        }
        function r(t) {
            try {
                c(e.throw(t));
            } catch (s) {
                a(s);
            }
        }
        function c(t) {
            var s;
            t.done ? i(t.value) : (s = t.value, s instanceof n ? s : new n((function(t) {
                t(s);
            }))).then(o, r);
        }
        c((e = e.apply(t, s || [])).next());
    }));
};

const tt = {
    logs: q,
    newHeads: F,
    newBlockHeaders: F
};

class st extends s {
    constructor(t, e, i, a, o) {
        var r, d, l;
        const p = H(e) ? e : H(i) ? i : void 0;
        let h, f;
        if (h = Y(e) ? e : Y(i) ? i : a, f = "object" == typeof e && "provider" in e ? e.provider : "object" == typeof i && "provider" in i ? i.provider : "object" == typeof a && "provider" in a ? a.provider : st.givenProvider, 
        super(Object.assign(Object.assign({}, h), {
            provider: f,
            registeredSubscriptions: tt
        })), this.syncWithContext = !1, this._functions = {}, (null == h ? void 0 : h.wallet) && (this._wallet = h.wallet), 
        (null == h ? void 0 : h.accountProvider) && (this._accountProvider = h.accountProvider), 
        !u(p) && !u(p.data) && !u(p.input) && "both" !== this.config.contractDataInputFill) throw new c({
            data: p.data,
            input: p.input
        });
        this._overloadedMethodAbis =  new Map;
        const m = N(a) ? a : N(i) ? i : null != o ? o : this.defaultReturnFormat, v = "string" == typeof e ? e : void 0;
        this.config.contractDataInputFill = null !== (r = null == p ? void 0 : p.dataInputFill) && void 0 !== r ? r : this.config.contractDataInputFill, 
        this._parseAndSetJsonInterface(t, m), this.defaultReturnFormat !== m && (this.defaultReturnFormat = m), 
        u(v) || this._parseAndSetAddress(v, m), this.options = {
            address: v,
            jsonInterface: this._jsonInterface,
            gas: null !== (d = null == p ? void 0 : p.gas) && void 0 !== d ? d : null == p ? void 0 : p.gasLimit,
            gasPrice: null == p ? void 0 : p.gasPrice,
            from: null == p ? void 0 : p.from,
            input: null == p ? void 0 : p.input,
            data: null == p ? void 0 : p.data
        }, this.syncWithContext = null !== (l = null == p ? void 0 : p.syncWithContext) && void 0 !== l && l, 
        h instanceof s && this.subscribeToContextEvents(h), Object.defineProperty(this.options, "address", {
            set: t => this._parseAndSetAddress(t, m),
            get: () => this._address
        }), Object.defineProperty(this.options, "jsonInterface", {
            set: t => this._parseAndSetJsonInterface(t, m),
            get: () => this._jsonInterface
        }), h instanceof s && h.on(n.CONFIG_CHANGE, (t => {
            this.setConfig({
                [t.name]: t.newValue
            });
        }));
    }
    setTransactionMiddleware(t) {
        this.transactionMiddleware = t;
    }
    getTransactionMiddleware() {
        return this.transactionMiddleware;
    }
    /**
   * Subscribe to an event.
   *
   * ```ts
   * await myContract.events.MyEvent([options])
   * ```
   *
   * There is a special event `allEvents` that can be used to subscribe all events.
   *
   * ```ts
   * await myContract.events.allEvents([options])
   * ```
   *
   * @returns - When individual event is accessed will returns {@link ContractBoundEvent} object
   */    get events() {
        return this._events;
    }
    /**
   * Creates a transaction object for that method, which then can be `called`, `send`, `estimated`, `createAccessList` , or `ABI encoded`.
   *
   * The methods of this smart contract are available through:
   *
   * The name: `myContract.methods.myMethod(123)`
   * The name with parameters: `myContract.methods['myMethod(uint256)'](123)`
   * The signature `myContract.methods['0x58cf5f10'](123)`
   *
   * This allows calling functions with same name but different parameters from the JavaScript contract object.
   *
   * \> The method signature does not provide a type safe interface, so we recommend to use method `name` instead.
   *
   * ```ts
   * // calling a method
   * const result = await myContract.methods.myMethod(123).call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   *
   * // or sending and using a promise
   * const receipt = await myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   *
   * // or sending and using the events
   * const sendObject = myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   * sendObject.on('transactionHash', function(hash){
   *   ...
   * });
   * sendObject.on('receipt', function(receipt){
   *   ...
   * });
   * sendObject.on('confirmation', function(confirmationNumber, receipt){
   *   ...
   * });
   * sendObject.on('error', function(error, receipt) {
   *   ...
   * });
   * ```
   *
   * @returns - Either returns {@link PayableMethodObject} or {@link NonPayableMethodObject} based on the definitions of the ABI of that contract.
   */    get methods() {
        return this._methods;
    }
    /**
   * Clones the current contract instance. This doesn't deploy contract on blockchain and only creates a local clone.
   *
   * @returns - The new contract instance.
   *
   * ```ts
   * const contract1 = new web3.eth.Contract(abi, address, {gasPrice: '12345678', from: fromAddress});
   *
   * const contract2 = contract1.clone();
   * contract2.options.address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
   *
   * (contract1.options.address !== contract2.options.address);
   * > true
   * ```
   */    clone() {
        let t;
        return t = this.options.address ? new st([ ...this._jsonInterface, ...this._errorsInterface ], this.options.address, {
            gas: this.options.gas,
            gasPrice: this.options.gasPrice,
            from: this.options.from,
            input: this.options.input,
            data: this.options.data,
            provider: this.currentProvider,
            syncWithContext: this.syncWithContext,
            dataInputFill: this.config.contractDataInputFill
        }, this.getContextObject()) : new st([ ...this._jsonInterface, ...this._errorsInterface ], {
            gas: this.options.gas,
            gasPrice: this.options.gasPrice,
            from: this.options.from,
            input: this.options.input,
            data: this.options.data,
            provider: this.currentProvider,
            syncWithContext: this.syncWithContext,
            dataInputFill: this.config.contractDataInputFill
        }, this.getContextObject()), this.context && t.subscribeToContextEvents(this.context), 
        t;
    }
    /**
   * Call this function to deploy the contract to the blockchain. After successful deployment the promise will resolve with a new contract instance.
   *
   * ```ts
   * myContract.deploy({
   *   input: '0x12345...', // data keyword can be used, too.
   *   arguments: [123, 'My String']
   * })
   * .send({
   *   from: '0x1234567890123456789012345678901234567891',
   *   gas: 1500000,
   *   gasPrice: '30000000000000'
   * }, function(error, transactionHash){ ... })
   * .on('error', function(error){ ... })
   * .on('transactionHash', function(transactionHash){ ... })
   * .on('receipt', function(receipt){
   *  console.log(receipt.contractAddress) // contains the new contract address
   * })
   * .on('confirmation', function(confirmationNumber, receipt){ ... })
   * .then(function(newContractInstance){
   *   console.log(newContractInstance.options.address) // instance with the new contract address
   * });
   *
   *
   * // When the data is already set as an option to the contract itself
   * myContract.options.data = '0x12345...';
   *
   * myContract.deploy({
   *   arguments: [123, 'My String']
   * })
   * .send({
   *   from: '0x1234567890123456789012345678901234567891',
   *   gas: 1500000,
   *   gasPrice: '30000000000000'
   * })
   * .then(function(newContractInstance){
   *   console.log(newContractInstance.options.address) // instance with the new contract address
   * });
   *
   *
   * // Simply encoding
   * myContract.deploy({
   *   input: '0x12345...',
   *   arguments: [123, 'My String']
   * })
   * .encodeABI();
   * > '0x12345...0000012345678765432'
   *
   *
   * // decoding
   * myContract.deploy({
   *   input: '0x12345...',
   *   // arguments: [123, 'My Greeting'] if you just need to decode the data, you can skip the arguments
   * })
   * .decodeData('0x12345...0000012345678765432');
   * > {
   *      __method__: 'constructor',
   *      __length__: 2,
   *      '0': '123',
   *      _id: '123',
   *      '1': 'My Greeting',
   *      _greeting: 'My Greeting',
   *   }
   *
   *
   * // Gas estimation
   * myContract.deploy({
   *   input: '0x12345...',
   *   arguments: [123, 'My String']
   * })
   * .estimateGas(function(err, gas){
   *   console.log(gas);
   * });
   * ```
   *
   * @returns - The transaction object
   */    deploy(t) {
        return new Q(this, t);
    }
    getPastEvents(t, s, n) {
        var e;
        return Z(this, void 0, void 0, (function*() {
            const i = "string" == typeof t ? t : v, a = 
            // eslint-disable-next-line no-nested-ternary
            "string" == typeof t || N(t) ? N(s) ? {} : s : t, o = N(t) ? t : N(s) ? s : null != n ? n : this.defaultReturnFormat, c = "allEvents" === i || i === v ? y : this._jsonInterface.find((t => "name" in t && t.name === i));
            if (!c) throw new r(`Event ${i} not found.`);
            const {fromBlock: d, toBlock: l, topics: u, address: p} = V(this.options, c, null != a ? a : {}), h = yield j(this, {
                fromBlock: d,
                toBlock: l,
                topics: u,
                address: p
            }, o), f = h ? h.map((t => "string" == typeof t ? t : g(c, t, this._jsonInterface, o))) : [], m = null !== (e = null == a ? void 0 : a.filter) && void 0 !== e ? e : {}, b = Object.keys(m);
            return b.length > 0 ? f.filter((t => "string" == typeof t || b.every((s => {
                var n;
                if (Array.isArray(m[s])) return m[s].some((n => String(t.returnValues[s]).toUpperCase() === String(n).toUpperCase()));
                const e = null === (n = c.inputs) || void 0 === n ? void 0 : n.filter((t => t.name === s))[0];
                if ((null == e ? void 0 : e.indexed) && "string" === e.type) {
                    if (W(m[s]) === String(t.returnValues[s])) return !0;
                }
                return String(t.returnValues[s]).toUpperCase() === String(m[s]).toUpperCase();
            })))) : f;
        }));
    }
    _parseAndSetAddress(t, s = this.defaultReturnFormat) {
        this._address = t ? L(T({
            format: "address"
        }, t, s)) : t;
    }
    decodeMethodData(t) {
        const s = t.slice(0, 10), n = this._jsonInterface.filter((t => "error" !== t.type)).find((t => s === D(A(t))));
        if (!n) throw new r(`The ABI for the provided method signature ${s} was not found.`);
        return Object.assign(Object.assign({}, X(n, t)), {
            __method__: A(n)
        });
    }
    _parseAndSetJsonInterface(t, s = this.defaultReturnFormat) {
        var n, e, i, a, o;
        this._functions = {}, this._methods = {}, this._events = {};
        let r = [];
        const c = t.filter((t => "error" !== t.type)), d = t.filter((t => E(t)));
        for (const l of c) {
            const t = Object.assign(Object.assign({}, l), {
                signature: ""
            });
            if (B(t)) {
                const s = A(t), r = D(s);
                t.methodNameWithInputs = s, t.signature = r, t.constant = null !== (e = null !== (n = "view" === t.stateMutability) && void 0 !== n ? n : "pure" === t.stateMutability) && void 0 !== e ? e : t.constant, 
                t.payable = null !== (i = "payable" === t.stateMutability) && void 0 !== i ? i : t.payable, 
                this._overloadedMethodAbis.set(t.name, [ ...null !== (a = this._overloadedMethodAbis.get(t.name)) && void 0 !== a ? a : [], t ]);
                const c = null !== (o = this._overloadedMethodAbis.get(t.name)) && void 0 !== o ? o : [], l = this._createContractMethod(c, d), u = this._createContractMethod(c, d, !0);
                this._functions[s] = {
                    signature: r,
                    method: u
                }, this._methods[t.name] = l, this._methods[s] = u, this._methods[r] = u;
            } else if (R(t)) {
                const n = A(t), e = I(n), i = this._createContractEvent(t, s);
                t.signature = e, n in this._events && "bound" !== t.name || (this._events[n] = i), 
                this._events[t.name] = i, this._events[e] = i;
            }
            r = [ ...r, t ];
        }
        this._events.allEvents = this._createContractEvent(y, s), this._jsonInterface = [ ...r ], 
        this._errorsInterface = d;
    }
    // eslint-disable-next-line class-methods-use-this
    _getAbiParams(t, s) {
        var n;
        try {
            return p(null !== (n = t.inputs) && void 0 !== n ? n : [], s);
        } catch (e) {
            throw new r(`Invalid parameters for method ${t.name}: ${e.message}`);
        }
    }
    _createContractMethod(t, s, n = !1) {
        const e = t[t.length - 1];
        return (...t) => {
            var i, a, o;
            let r;
            const c = null !== (a = n ? null === (i = this._overloadedMethodAbis.get(e.name)) || void 0 === i ? void 0 : i.filter((t => t.signature === e.signature)) : this._overloadedMethodAbis.get(e.name)) && void 0 !== a ? a : [];
            let d = c[0];
            const l = s, u = c.filter((s => {
                var n;
                return (null !== (n = s.inputs) && void 0 !== n ? n : []).length === t.length;
            }));
            if (1 === c.length || 0 === u.length) r = this._getAbiParams(d, t), h.validate(null !== (o = e.inputs) && void 0 !== o ? o : [], r); else {
                const s = [], n = [];
                for (const e of u) try {
                    r = this._getAbiParams(e, t), h.validate(e.inputs, r), n.push(e);
                } catch (m) {
                    s.push(m);
                }
                if ((1 === n.length || n.length > 1) && ([d] = n), s.length === u.length) throw new f(s);
            }
            const p = {
                arguments: r,
                call: (t, s) => Z(this, void 0, void 0, (function*() {
                    return this._contractMethodCall(d, r, l, t, s);
                })),
                send: t => this._contractMethodSend(d, r, l, t),
                populateTransaction: (s, n) => {
                    var i, a;
                    let o = null != n ? n : this.options;
                    o = Object.assign(Object.assign({}, o), {
                        input: void 0,
                        from: null !== (a = null !== (i = null == o ? void 0 : o.from) && void 0 !== i ? i : this.defaultAccount) && void 0 !== a ? a : void 0
                    });
                    const r = z({
                        abi: e,
                        params: t,
                        options: Object.assign(Object.assign({}, s), {
                            dataInputFill: this.config.contractDataInputFill
                        }),
                        contractOptions: o
                    });
                    return r.dataInputFill && delete r.dataInputFill, r;
                },
                estimateGas: (t, s = this.defaultReturnFormat) => Z(this, void 0, void 0, (function*() {
                    return this.contractMethodEstimateGas({
                        abi: d,
                        params: r,
                        returnFormat: s,
                        options: t
                    });
                })),
                encodeABI: () => U(d, r),
                decodeData: t => X(d, t),
                createAccessList: (t, s) => Z(this, void 0, void 0, (function*() {
                    return this._contractMethodCreateAccessList(d, r, l, t, s);
                }))
            };
            return d.stateMutability, p;
        };
    }
    _contractMethodCall(t, s, n, e, i) {
        var a;
        return Z(this, void 0, void 0, (function*() {
            const o = (({abi: t, params: s, options: n, contractOptions: e}) => {
                if (!(null == n ? void 0 : n.to) && !e.address) throw new r("Contract address not specified");
                let i = $({
                    to: e.address,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    from: e.from,
                    input: e.input,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                    maxFeePerGas: e.maxFeePerGas,
                    data: e.data
                }, n);
                const a = J(i, t, s, null == n ? void 0 : n.dataInputFill);
                return i = Object.assign(Object.assign({}, i), {
                    data: a.data,
                    input: a.input
                }), i;
            })({
                abi: t,
                params: s,
                options: Object.assign(Object.assign({}, e), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: Object.assign(Object.assign({}, this.options), {
                    from: null !== (a = this.options.from) && void 0 !== a ? a : this.config.defaultAccount
                })
            });
            try {
                const s = yield _(this, o, i, this.defaultReturnFormat);
                return ((t, s) => {
                    if ("constructor" === t.type) return s;
                    if (!s) return null;
                    const n = s.length >= 2 ? s.slice(2) : s;
                    if (!t.outputs) return null;
                    const e = x([ ...t.outputs ], n);
                    return 1 === e.__length__ ? e[0] : e;
                })(t, s);
            } catch (c) {
                throw c instanceof d && G(n, c.cause), c;
            }
        }));
    }
    _contractMethodCreateAccessList(t, s, n, e, i) {
        var a;
        return Z(this, void 0, void 0, (function*() {
            const o = (({abi: t, params: s, options: n, contractOptions: e}) => {
                if (!(null == n ? void 0 : n.to) && !e.address) throw new r("Contract address not specified");
                if (!(null == n ? void 0 : n.from) && !e.from) throw new r('Contract "from" address not specified');
                let i = $({
                    to: e.address,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    from: e.from,
                    input: e.input,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                    maxFeePerGas: e.maxFeePerGas,
                    data: e.data
                }, n);
                const a = J(i, t, s, null == n ? void 0 : n.dataInputFill);
                return i = Object.assign(Object.assign({}, i), {
                    data: a.data,
                    input: a.input
                }), i;
            })({
                abi: t,
                params: s,
                options: Object.assign(Object.assign({}, e), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: Object.assign(Object.assign({}, this.options), {
                    from: null !== (a = this.options.from) && void 0 !== a ? a : this.config.defaultAccount
                })
            });
            try {
                return w(this, o, i, this.defaultReturnFormat);
            } catch (c) {
                throw c instanceof d && G(n, c.cause), c;
            }
        }));
    }
    _contractMethodSend(t, s, n, e, i) {
        var a, o;
        let r = null != i ? i : this.options;
        r = Object.assign(Object.assign({}, r), {
            input: void 0,
            from: null !== (o = null !== (a = r.from) && void 0 !== a ? a : this.defaultAccount) && void 0 !== o ? o : void 0
        });
        const c = z({
            abi: t,
            params: s,
            options: Object.assign(Object.assign({}, e), {
                dataInputFill: this.config.contractDataInputFill
            }),
            contractOptions: r
        }), l = u(this.transactionMiddleware) ? b(this, c, this.defaultReturnFormat, {
            // TODO Should make this configurable by the user
            checkRevertBeforeSending: !1,
            contractAbi: this._jsonInterface
        }) : b(this, c, this.defaultReturnFormat, {
            // TODO Should make this configurable by the user
            checkRevertBeforeSending: !1,
            contractAbi: this._jsonInterface
        }, this.transactionMiddleware);
        return l.on("error", (t => {
            t instanceof d && G(n, t.cause);
        })), l;
    }
    contractMethodEstimateGas({abi: t, params: s, returnFormat: n, options: e, contractOptions: i}) {
        return Z(this, void 0, void 0, (function*() {
            const a = (({abi: t, params: s, options: n, contractOptions: e}) => {
                let i = $({
                    to: e.address,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    from: e.from,
                    input: e.input,
                    data: e.data
                }, n);
                const a = J(i, t, s, null == n ? void 0 : n.dataInputFill);
                return i = Object.assign(Object.assign({}, i), {
                    data: a.data,
                    input: a.input
                }), i;
            })({
                abi: t,
                params: s,
                options: Object.assign(Object.assign({}, e), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: null != i ? i : this.options
            });
            return O(this, a, o.LATEST, null != n ? n : this.defaultReturnFormat);
        }));
    }
    // eslint-disable-next-line class-methods-use-this
    _createContractEvent(t, s = this.defaultReturnFormat) {
        return (...n) => {
            var e;
            const {topics: i, fromBlock: a} = V(this.options, t, n[0]), o = new q({
                address: this.options.address,
                topics: i,
                abi: t,
                jsonInterface: this._jsonInterface
            }, {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                subscriptionManager: this.subscriptionManager,
                returnFormat: s
            });
            return u(a) || this.getPastEvents(t.name, {
                fromBlock: a,
                topics: i
            }, s).then((t => {
                t && t.forEach((t => o.emit("data", t)));
            })).catch((t => {
                o.emit("error", new l("Failed to get past events.", t));
            })), null === (e = this.subscriptionManager) || void 0 === e || e.addSubscription(o).catch((t => {
                o.emit("error", new l("Failed to subscribe.", t));
            })), o;
        };
    }
    subscribeToContextEvents(t) {
        const s = this;
        this.context = t, s.syncWithContext && t.on(n.CONFIG_CHANGE, (t => {
            s.setConfig({
                [t.name]: t.newValue
            });
        }));
    }
}

export { st as C };

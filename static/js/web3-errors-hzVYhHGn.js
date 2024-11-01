const e = 4001, s = 4100, t = 4200, r = 4900, a = 4901, o = 1100, n = -32700, i = -32600, c = -32601, d = -32602, u = -32603, h = -32e3, l = -32001, p = -32002, m = -32003, g = -32004, v = -32005, x = -32006;

class f extends Error {
    constructor(e, s) {
        super(e), Array.isArray(s) ? this.cause = new b(s) : this.cause = s, this.name = this.constructor.name, 
        "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(new.target.constructor) : this.stack = (new Error).stack;
    }
    /**
   * @deprecated Use the `cause` property instead.
   */    get innerError() {
        return this.cause instanceof b ? this.cause.errors : this.cause;
    }
    /**
   * @deprecated Use the `cause` property instead.
   */    set innerError(e) {
        Array.isArray(e) ? this.cause = new b(e) : this.cause = e;
    }
    static convertToString(e, s = !1) {
        if (null == e) return "undefined";
        const t = JSON.stringify(e, ((e, s) => "bigint" == typeof s ? s.toString() : s));
        return s && [ "bigint", "string" ].includes(typeof e) ? t.replace(/['\\"]+/g, "") : t;
    }
    toJSON() {
        return {
            name: this.name,
            code: this.code,
            message: this.message,
            cause: this.cause,
            // deprecated
            innerError: this.cause
        };
    }
}

class b extends f {
    constructor(e) {
        super(`Multiple errors occurred: [${e.map((e => e.message)).join("], [")}]`), this.code = 208, 
        this.errors = e;
    }
}

class y extends f {
    constructor(e, s) {
        super(`Invalid value given "${f.convertToString(e, !0)}". Error: ${s}.`), this.name = this.constructor.name;
    }
}

class w extends f {
    constructor() {
        super("Private key must be 32 bytes."), this.code = 701;
    }
}

class P extends f {
    constructor() {
        super("Invalid Private Key, Not a valid string or uint8Array"), this.code = 702;
    }
}

class S extends f {
    constructor(e) {
        super(`"${e}"`), this.code = 802;
    }
}

class O extends f {
    constructor() {
        super("Invalid key derivation function"), this.code = 703;
    }
}

class N extends f {
    constructor() {
        super("Key derivation failed - possibly wrong password"), this.code = 704;
    }
}

class $ extends f {
    constructor() {
        super("Unsupported key store version"), this.code = 705;
    }
}

class T extends f {
    constructor() {
        super("Password cannot be empty"), this.code = 706;
    }
}

class k extends f {
    constructor() {
        super("Initialization vector must be 16 bytes"), this.code = 707;
    }
}

class j extends f {
    constructor() {
        super("c > 1000, pbkdf2 is less secure with less iterations"), this.code = 709;
    }
}

class E extends f {
    constructor(e, s) {
        super(e), this.code = 500, s && (this.errorCode = s.code, this.errorReason = s.reason);
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            errorCode: this.errorCode,
            errorReason: this.errorReason
        });
    }
}

class A extends E {
    constructor(e) {
        super("Connection not open", e), this.code = 503;
    }
}

class R extends E {
    constructor(e) {
        super(`Maximum number of reconnect attempts reached! (${e})`), this.code = 505;
    }
}

class C extends E {
    constructor() {
        super("CONNECTION ERROR: Provider started to reconnect before the response got received!"), 
        this.code = 506;
    }
}

class I extends E {
    constructor(e) {
        super(`Request already sent with following id: ${e}`), this.code = 507;
    }
}

class J extends f {
    constructor(e, s) {
        super(e), this.code = 300, this.receipt = s;
    }
}

class F extends f {
    constructor(e, s) {
        super(`The resolver at ${e} does not implement requested method: "${s}".`), this.address = e, 
        this.name = s, this.code = 301;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            address: this.address,
            name: this.name
        });
    }
}

class G extends J {
    constructor(e) {
        if (super(e.message || "Error"), this.name = "name" in e && e.name || this.constructor.name, 
        this.stack = "stack" in e && e.stack || void 0, this.code = e.code, "object" == typeof e.data) {
            let s;
            s = e.data && "originalError" in e.data ? e.data.originalError : e.data, this.data = s.data, 
            this.cause = new G(s);
        } else this.data = e.data;
    }
    setDecodedProperties(e, s, t) {
        this.errorName = e, this.errorSignature = s, this.errorArgs = t;
    }
    toJSON() {
        let e = Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data
        });
        return this.errorName && (e = Object.assign(Object.assign({}, e), {
            errorName: this.errorName,
            errorSignature: this.errorSignature,
            errorArgs: this.errorArgs
        })), e;
    }
}

class M extends J {
    constructor(e) {
        super("Error happened while trying to execute a function inside a smart contract"), 
        this.code = 310, this.cause = new G(e);
    }
}

class q extends y {
    constructor(e) {
        var s, t;
        super(`data: ${null !== (s = e.data) && void 0 !== s ? s : "undefined"}, input: ${null !== (t = e.input) && void 0 !== t ? t : "undefined"}`, 'You can\'t have "data" and "input" as properties of a contract at the same time, please use either "data" or "input" instead.'), 
        this.code = 311;
    }
}

class H extends f {
    constructor(e) {
        super(`ENS is not supported on network ${e}`), this.code = 902;
    }
}

class U extends f {
    constructor() {
        super("Network not synced"), this.code = 903;
    }
}

class W extends f {
    constructor(e) {
        super(`Invalid parameters passed. "${void 0 !== e ? e : ""}"`), this.hint = e, this.code = 207;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            hint: this.hint
        });
    }
}

class D extends f {
    constructor() {
        super(...arguments), this.code = 201;
    }
}

class z extends f {
    constructor() {
        super("The method you're trying to call is not implemented."), this.code = 202;
    }
}

class L extends f {
    constructor() {
        super(...arguments), this.code = 203;
    }
}

class B extends f {
    constructor() {
        super(...arguments), this.code = 204;
    }
}

class V extends f {
    constructor(e, s) {
        super(e), this.code = 205, this.props = null != s ? s : {};
    }
}

class K extends f {
    constructor(e) {
        super(`A plugin with the namespace: ${e} has already been registered.`), this.code = 206;
    }
}

class Y extends f {
    constructor() {
        super(...arguments), this.code = 600;
    }
}

class Q extends f {
    constructor(e) {
        super(`Client URL "${e}" is invalid.`), this.code = 602;
    }
}

class X extends f {
    constructor() {
        super(...arguments), this.code = 603;
    }
}

class Z extends f {
    constructor() {
        super(...arguments), this.code = 604;
    }
}

class _ extends y {
    constructor() {
        super(...arguments), this.code = 801;
    }
}

class ee extends f {
    constructor(e, s) {
        super(e), this.receipt = s, this.code = 400;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            receipt: this.receipt
        });
    }
}

class se extends f {
    constructor(e, s, t, r) {
        super("Transaction has been reverted by the EVM" + (void 0 === t ? "" : `:\n ${f.convertToString(t)}`)), 
        this.reason = e, this.signature = s, this.receipt = t, this.data = r, this.code = 402;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data
        });
    }
}

class te extends se {
    constructor(e, s, t, r, a, o, n) {
        super(e), this.reason = e, this.customErrorName = s, this.customErrorDecodedSignature = t, 
        this.customErrorArguments = r, this.signature = a, this.receipt = o, this.data = n, 
        this.code = 438;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            customErrorName: this.customErrorName,
            customErrorDecodedSignature: this.customErrorDecodedSignature,
            customErrorArguments: this.customErrorArguments,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data
        });
    }
}

class re extends ee {
    constructor(e) {
        super("Transaction has been reverted by the EVM" + (void 0 === e ? "" : `:\n ${f.convertToString(e)}`), e), 
        this.code = 405;
    }
}

class ae extends ee {
    constructor() {
        super("Raw transaction undefined"), this.code = 407;
    }
}

class oe extends ee {
    constructor() {
        super("Transaction not found"), this.code = 430;
    }
}

class ne extends y {
    constructor(e) {
        super(e, "invalid transaction with invalid sender"), this.code = 408;
    }
}

class ie extends y {
    constructor(e) {
        super(e, "invalid transaction with invalid receiver"), this.code = 437;
    }
}

class ce extends y {
    constructor() {
        super("MissingCustomChainError", "If tx.common is provided it must have tx.common.customChain"), 
        this.code = 410;
    }
}

class de extends y {
    constructor() {
        super("MissingCustomChainIdError", "If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId"), 
        this.code = 411;
    }
}

class ue extends y {
    constructor(e) {
        super(JSON.stringify(e), 
        // https://github.com/ChainSafe/web3.js/blob/8783f4d64e424456bdc53b34ef1142d0a7cee4d7/packages/web3-eth-accounts/src/index.js#L176
        "Chain Id doesnt match in tx.chainId tx.common.customChain.chainId"), this.code = 412;
    }
}

class he extends y {
    constructor(e) {
        super(JSON.stringify(e), "Chain doesnt match in tx.chain tx.common.basechain"), 
        this.code = 435;
    }
}

class le extends y {
    constructor(e) {
        super(JSON.stringify(e), "hardfork doesnt match in tx.hardfork tx.common.hardfork"), 
        this.code = 436;
    }
}

class pe extends y {
    constructor() {
        super("CommonOrChainAndHardforkError", "Please provide the common object or the chain and hardfork property but not all together."), 
        this.code = 413;
    }
}

class me extends y {
    constructor(e) {
        var s, t;
        super("MissingChainOrHardforkError", `When specifying chain and hardfork, both values must be defined. Received "chain": ${null !== (s = e.chain) && void 0 !== s ? s : "undefined"}, "hardfork": ${null !== (t = e.hardfork) && void 0 !== t ? t : "undefined"}`), 
        this.code = 414;
    }
}

class ge extends f {
    constructor() {
        super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions'), 
        this.code = 440;
    }
}

class ve extends y {
    constructor(e) {
        var s, t, r, a;
        super(`gas: ${null !== (s = e.gas) && void 0 !== s ? s : "undefined"}, gasPrice: ${null !== (t = e.gasPrice) && void 0 !== t ? t : "undefined"}, maxPriorityFeePerGas: ${null !== (r = e.maxPriorityFeePerGas) && void 0 !== r ? r : "undefined"}, maxFeePerGas: ${null !== (a = e.maxFeePerGas) && void 0 !== a ? a : "undefined"}`, '"gas" is missing'), 
        this.code = 415, this.cause = new ge;
    }
}

class xe extends f {
    constructor() {
        super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions, not both'), 
        this.code = 441;
    }
}

class fe extends y {
    constructor(e) {
        var s, t, r, a;
        super(`gas: ${null !== (s = e.gas) && void 0 !== s ? s : "undefined"}, gasPrice: ${null !== (t = e.gasPrice) && void 0 !== t ? t : "undefined"}, maxPriorityFeePerGas: ${null !== (r = e.maxPriorityFeePerGas) && void 0 !== r ? r : "undefined"}, maxFeePerGas: ${null !== (a = e.maxFeePerGas) && void 0 !== a ? a : "undefined"}`, "transaction must specify legacy or fee market gas properties, not both"), 
        this.code = 434, this.cause = new xe;
    }
}

class be extends y {
    constructor(e) {
        var s, t;
        super(`gas: ${null !== (s = e.gas) && void 0 !== s ? s : "undefined"}, gasPrice: ${null !== (t = e.gasPrice) && void 0 !== t ? t : "undefined"}`, "Gas or gasPrice is lower than 0"), 
        this.code = 416;
    }
}

class ye extends y {
    constructor(e) {
        var s, t;
        super(`maxPriorityFeePerGas: ${null !== (s = e.maxPriorityFeePerGas) && void 0 !== s ? s : "undefined"}, maxFeePerGas: ${null !== (t = e.maxFeePerGas) && void 0 !== t ? t : "undefined"}`, "maxPriorityFeePerGas or maxFeePerGas is lower than 0"), 
        this.code = 417;
    }
}

class we extends y {
    constructor(e) {
        super(e, "eip-1559 transactions don't support gasPrice"), this.code = 418;
    }
}

class Pe extends y {
    constructor(e) {
        var s, t;
        super(`maxPriorityFeePerGas: ${null !== (s = e.maxPriorityFeePerGas) && void 0 !== s ? s : "undefined"}, maxFeePerGas: ${null !== (t = e.maxFeePerGas) && void 0 !== t ? t : "undefined"}`, "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas"), 
        this.code = 419;
    }
}

class Se extends y {
    constructor(e) {
        super(e, "invalid transaction object"), this.code = 420;
    }
}

class Oe extends y {
    constructor(e) {
        var s, t;
        super(`nonce: ${null !== (s = e.nonce) && void 0 !== s ? s : "undefined"}, chainId: ${null !== (t = e.chainId) && void 0 !== t ? t : "undefined"}`, "Nonce or chainId is lower than 0"), 
        this.code = 421;
    }
}

class Ne extends y {
    constructor() {
        super("UnableToPopulateNonceError", "unable to populate nonce, no from address available"), 
        this.code = 422;
    }
}

class $e extends y {
    constructor() {
        super("Eip1559NotSupportedError", "Network doesn't support eip-1559"), this.code = 423;
    }
}

class Te extends y {
    constructor(e) {
        super(e, "unsupported transaction type"), this.code = 424;
    }
}

class ke extends y {
    constructor(e) {
        var s, t;
        super(`data: ${null !== (s = e.data) && void 0 !== s ? s : "undefined"}, input: ${null !== (t = e.input) && void 0 !== t ? t : "undefined"}`, 'You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.'), 
        this.code = 425;
    }
}

class je extends f {
    constructor(e) {
        super(`The connected Ethereum Node did not respond within ${e.numberOfSeconds} seconds, please make sure your transaction was properly sent and you are connected to a healthy Node. Be aware that transaction might still be pending or mined!\n\tTransaction Hash: ${e.transactionHash ? e.transactionHash.toString() : "not available"}`), 
        this.code = 431;
    }
}

function Ee(e) {
    return `Please make sure your transaction was properly sent and there are no previous pending transaction for the same account. However, be aware that it might still be mined!\n\tTransaction Hash: ${e ? e.toString() : "not available"}`;
}

class Ae extends f {
    constructor(e) {
        super(`Transaction was not mined within ${e.numberOfSeconds} seconds. ${Ee(e.transactionHash)}`), 
        this.code = 426;
    }
}

class Re extends f {
    constructor(e) {
        super(`Transaction started at ${e.starterBlockNumber} but was not mined within ${e.numberOfBlocks} blocks. ${Ee(e.transactionHash)}`), 
        this.code = 432;
    }
}

class Ce extends y {
    constructor(e) {
        var s, t;
        super(`receipt: ${JSON.stringify(e.receipt)}, blockHash: ${null === (s = e.blockHash) || void 0 === s ? void 0 : s.toString()}, transactionHash: ${null === (t = e.transactionHash) || void 0 === t ? void 0 : t.toString()}`, "Receipt missing or blockHash null"), 
        this.code = 427;
    }
}

class Ie extends y {
    constructor(e) {
        super(`receipt: ${JSON.stringify(e.receipt)}`, "Receipt missing block number"), 
        this.code = 428;
    }
}

class Je extends f {
    constructor(e) {
        super(`Invalid signature. "${e}"`), this.code = 433;
    }
}

class Fe extends y {
    constructor() {
        super("LocalWalletNotAvailableError", "Attempted to index account in local wallet, but no wallet is available"), 
        this.code = 429;
    }
}

class Ge extends f {
    constructor(e, s) {
        const t = [];
        e.forEach((e => t.push(e.keyword))), super(`The following properties are invalid for the transaction type ${s}: ${t.join(", ")}`), 
        this.code = 439;
    }
}

class Me extends y {
    constructor(e) {
        super(e, "can not parse as byte data"), this.code = 1002;
    }
}

class qe extends y {
    constructor(e) {
        super(e, "can not parse as number data"), this.code = 1003;
    }
}

class He extends y {
    constructor(e) {
        super(e, "invalid ethereum address"), this.code = 1005;
    }
}

class Ue extends y {
    constructor(e) {
        super(e, "not a valid string"), this.code = 1001;
    }
}

class We extends y {
    constructor(e) {
        super(e, "invalid unit"), this.code = 1004;
    }
}

class De extends y {
    constructor(e) {
        super(e, "not a valid unit. Must be a positive integer"), this.code = 1015;
    }
}

class ze extends y {
    constructor(e) {
        super(e, "can not be converted to hex"), this.code = 1006;
    }
}

class Le extends y {
    constructor(e) {
        super(e, "value greater than the nibble width"), this.code = 1014;
    }
}

class Be extends y {
    constructor(e) {
        super(e, "not a valid boolean."), this.code = 1008;
    }
}

class Ve extends y {
    constructor(e) {
        super(e, "not a valid unsigned integer."), this.code = 1009;
    }
}

class Ke extends y {
    constructor(e) {
        super(e, "invalid size given."), this.code = 1010;
    }
}

class Ye extends y {
    constructor(e) {
        super(e, "value is larger than size."), this.code = 1011;
    }
}

class Qe extends y {
    constructor(e) {
        super(e, "invalid string given"), this.code = 1012;
    }
}

const Xe = e => (e => !(Array.isArray(e) || "2.0" !== e.jsonrpc || !e || // eslint-disable-next-line no-null/no-null
void 0 !== e.result && null !== e.result || // JSON RPC consider "null" as valid response
!("error" in e) || "number" != typeof e.id && "string" != typeof e.id))(e) ? e.error.message : "";

class Ze extends f {
    constructor(e, s, t, r) {
        var a;
        let o;
        super(null != s ? s : `Returned error: ${Array.isArray(e) ? e.map((e => Xe(e))).join(",") : Xe(e)}`), 
        this.code = 100, s || (this.data = Array.isArray(e) ? e.map((e => {
            var s;
            return null === (s = e.error) || void 0 === s ? void 0 : s.data;
        })) : null === (a = null == e ? void 0 : e.error) || void 0 === a ? void 0 : a.data), 
        this.statusCode = r, this.request = t, "error" in e ? o = e.error : e instanceof Array && (o = e.filter((e => e.error)).map((e => e.error))), 
        Array.isArray(o) && o.length > 0 ? this.cause = new b(o) : this.cause = o;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data,
            request: this.request,
            statusCode: this.statusCode
        });
    }
}

class _e extends Ze {
    constructor(e, s) {
        let t;
        super(e, void 0, s), this.code = 101, "error" in e ? t = e.error : e instanceof Array && (t = e.map((e => e.error))), 
        Array.isArray(t) ? this.cause = new b(t) : this.cause = t;
    }
}

class es extends f {
    constructor(e, s) {
        super(`Web3Config hardfork doesnt match in defaultHardfork ${e} and common.hardfork ${s}`), 
        this.code = 1101;
    }
}

class ss extends f {
    constructor(e, s) {
        super(`Web3Config chain doesnt match in defaultHardfork ${e} and common.hardfork ${s}`), 
        this.code = 1101;
    }
}

const ts = "An Rpc error has occured with a code of *code*", rs = {
    //  EIP-1474 & JSON RPC 2.0
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md
    [n]: {
        message: "Parse error",
        description: "Invalid JSON"
    },
    [i]: {
        message: "Invalid request",
        description: "JSON is not a valid request object\t"
    },
    [c]: {
        message: "Method not found",
        description: "Method does not exist\t"
    },
    [d]: {
        message: "Invalid params",
        description: "Invalid method parameters"
    },
    [u]: {
        message: "Internal error",
        description: "Internal JSON-RPC error"
    },
    [h]: {
        message: "Invalid input",
        description: "Missing or invalid parameters"
    },
    [l]: {
        message: "Resource not found",
        description: "Requested resource not found"
    },
    [p]: {
        message: "Resource unavailable",
        description: "Requested resource not available"
    },
    [m]: {
        message: "Transaction rejected",
        description: "Transaction creation failed"
    },
    [g]: {
        message: "Method not supported",
        description: "Method is not implemented"
    },
    [v]: {
        message: "Limit exceeded",
        description: "Request exceeds defined limit"
    },
    [x]: {
        message: "JSON-RPC version not supported",
        description: "Version of JSON-RPC protocol is not supported"
    },
    // EIP-1193
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#provider-errors
    [e]: {
        name: "User Rejected Request",
        message: "The user rejected the request."
    },
    [s]: {
        name: "Unauthorized",
        message: "The requested method and/or account has not been authorized by the user."
    },
    [t]: {
        name: "Unsupported Method",
        message: "The Provider does not support the requested method."
    },
    [r]: {
        name: "Disconnected",
        message: "The Provider is disconnected from all chains."
    },
    [a]: {
        name: "Chain Disconnected",
        message: "The Provider is not connected to the requested chain."
    },
    // EIP-1193 - CloseEvent
    // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
    "0-999": {
        name: "",
        message: "Not used."
    },
    1e3: {
        name: "Normal Closure",
        message: "The connection successfully completed the purpose for which it was created."
    },
    1001: {
        name: "Going Away",
        message: "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection."
    },
    1002: {
        name: "Protocol error",
        message: "The endpoint is terminating the connection due to a protocol error."
    },
    1003: {
        name: "Unsupported Data",
        message: "The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)"
    },
    1004: {
        name: "Reserved",
        message: "Reserved. A meaning might be defined in the future."
    },
    1005: {
        name: "No Status Rcvd",
        message: "Reserved. Indicates that no status code was provided even though one was expected."
    },
    1006: {
        name: "Abnormal Closure",
        message: "Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected."
    },
    1007: {
        name: "Invalid frame payload data",
        message: "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message)."
    },
    1008: {
        name: "Policy Violation",
        message: "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable."
    },
    1009: {
        name: "Message Too Big",
        message: "The endpoint is terminating the connection because a data frame was received that is too large."
    },
    1010: {
        name: "Mandatory Ext.",
        message: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
    },
    1011: {
        name: "Internal Error",
        message: "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."
    },
    1012: {
        name: "Service Restart",
        message: "The server is terminating the connection because it is restarting."
    },
    1013: {
        name: "Try Again Later",
        message: "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients."
    },
    1014: {
        name: "Bad Gateway",
        message: "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code."
    },
    1015: {
        name: "TLS handshake",
        message: "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
    },
    "1016-2999": {
        name: "",
        message: "For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications."
    },
    "3000-3999": {
        name: "",
        message: "For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol."
    },
    "4000-4999": {
        name: "",
        message: "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol."
    }
};

class as extends f {
    constructor(e, s) {
        super(null != s ? s : ts.replace("*code*", e.error.code.toString())), this.code = e.error.code, 
        this.id = e.id, this.jsonrpc = e.jsonrpc, this.jsonRpcError = e.error;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            error: this.jsonRpcError,
            id: this.id,
            jsonRpc: this.jsonrpc
        });
    }
}

class os extends f {
    constructor(e, s) {
        var t, r, a, o;
        if (e) if (null === (t = rs[e]) || void 0 === t ? void 0 : t.message) super(rs[e].message); else {
            const s = Object.keys(rs).find((s => "string" == typeof s && e >= parseInt(s.split("-")[0], 10) && e <= parseInt(s.split("-")[1], 10)));
            super(null !== (a = null === (r = rs[null != s ? s : ""]) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : ts.replace("*code*", null !== (o = null == e ? void 0 : e.toString()) && void 0 !== o ? o : '""'));
        } else super();
        this.code = e, this.data = s;
    }
}

const ns =  new Map;

ns.set(n, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32700].message), this.code = n;
        }
    }
}), ns.set(i, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32600].message), this.code = i;
        }
    }
}), ns.set(c, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32601].message), this.code = c;
        }
    }
}), ns.set(d, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32602].message), this.code = d;
        }
    }
}), ns.set(u, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32603].message), this.code = u;
        }
    }
}), ns.set(h, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32e3].message), this.code = h;
        }
    }
}), ns.set(g, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32004].message), this.code = g;
        }
    }
}), ns.set(p, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32002].message), this.code = p;
        }
    }
}), ns.set(m, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32003].message), this.code = m;
        }
    }
}), ns.set(l, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32001].message), this.code = l;
        }
    }
}), ns.set(x, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32006].message), this.code = x;
        }
    }
}), ns.set(v, {
    error: class extends as {
        constructor(e) {
            super(e, rs[-32005].message), this.code = v;
        }
    }
});

class is extends f {
    constructor(e) {
        super(`Format for the type ${e} is unsupported`), this.type = e, this.code = 1200;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            type: this.type
        });
    }
}

export { T as $, pe as A, me as B, ss as C, he as D, K as E, ve as F, fe as G, le as H, W as I, be as J, Pe as K, Fe as L, ce as M, we as N, L as O, Y as P, ye as Q, Ze as R, X as S, ke as T, Te as U, V, Be as W, w as X, P as Y, ae as Z, S as _, es as a, k as a0, j as a1, O as a2, Je as a3, $ as a4, N as a5, J as a6, q as a7, F as a8, U as a9, H as aa, He as ab, Q as ac, z as ad, A as ae, f as af, Me as ag, ze as ah, qe as ai, We as aj, De as ak, Qe as al, Le as am, D as an, Ue as ao, Ke as ap, Ye as aq, Ve as ar, os as as, E as at, C as au, R as av, Z as aw, I as ax, o as ay, is as az, as as b, _e as c, M as d, B as e, Ge as f, $e as g, ne as h, ie as i, Ne as j, Re as k, je as l, Ae as m, Ce as n, Ie as o, G as p, re as q, ns as r, se as s, te as t, _ as u, oe as v, Se as w, Oe as x, de as y, ue as z };

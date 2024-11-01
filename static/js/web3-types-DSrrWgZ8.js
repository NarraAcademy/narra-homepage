var e, t, r, n;

(t = e || (e = {})).NUMBER = "NUMBER_NUMBER", t.HEX = "NUMBER_HEX", t.STR = "NUMBER_STR", 
t.BIGINT = "NUMBER_BIGINT", (n = r || (r = {})).HEX = "BYTES_HEX", n.UINT8ARRAY = "BYTES_UINT8ARRAY";

const a = {
    number: e.BIGINT,
    bytes: r.HEX
}, i = {
    number: e.HEX,
    bytes: r.HEX
};

var s, o, c, u;

(o = s || (s = {})).EARLIEST = "earliest", o.LATEST = "latest", o.PENDING = "pending", 
o.SAFE = "safe", o.FINALIZED = "finalized", o.COMMITTED = "committed", (u = c || (c = {})).chainstart = "chainstart", 
u.frontier = "frontier", u.homestead = "homestead", u.dao = "dao", u.tangerineWhistle = "tangerineWhistle", 
u.spuriousDragon = "spuriousDragon", u.byzantium = "byzantium", u.constantinople = "constantinople", 
u.petersburg = "petersburg", u.istanbul = "istanbul", u.muirGlacier = "muirGlacier", 
u.berlin = "berlin", u.london = "london", u.altair = "altair", u.arrowGlacier = "arrowGlacier", 
u.grayGlacier = "grayGlacier", u.bellatrix = "bellatrix", u.merge = "merge", u.capella = "capella", 
u.shanghai = "shanghai";

const l = Object.getPrototypeOf(Uint8Array);

var E = function(e, t, r, n) {
    return new (r || (r = Promise))((function(a, i) {
        function s(e) {
            try {
                c(n.next(e));
            } catch (t) {
                i(t);
            }
        }
        function o(e) {
            try {
                c(n.throw(e));
            } catch (t) {
                i(t);
            }
        }
        function c(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                e(t);
            }))).then(s, o);
        }
        c((n = n.apply(e, t || [])).next());
    }));
};

const d = Symbol.for("web3/base-provider");

class h {
    static isWeb3Provider(e) {
        return e instanceof h || Boolean(e && e[d]);
    }
    // To match an object "instanceof" does not work if
    // matcher class and object is using different package versions
    // to overcome this bottleneck used this approach.
    // The symbol value for one string will always remain same regardless of package versions
    // eslint-disable-next-line class-methods-use-this
    get [d]() {
        return !0;
    }
    /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   * @param callback - Callback
   */    send(e, t) {
        this.request(e).then((e => {
            t(null, e);
        })).catch((e => {
            t(e);
        }));
    }
    /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   */    sendAsync(e) {
        return E(this, void 0, void 0, (function*() {
            return this.request(e);
        }));
    }
    /**
   * Modify the return type of the request method to be fully compatible with EIP-1193
   *
   * [deprecated] In the future major releases (\>= v5) all providers are supposed to be fully compatible with EIP-1193.
   * So this method will not be needed and would not be available in the future.
   *
   * @returns A new instance of the provider with the request method fully compatible with EIP-1193
   *
   * @example
   * ```ts
   * const provider = new Web3HttpProvider('http://localhost:8545');
   * const fullyCompatibleProvider = provider.asEIP1193Provider();
   * const result = await fullyCompatibleProvider.request({ method: 'eth_getBalance' });
   * console.log(result); // '0x0234c8a3397aab58' or something like that
   * ```
   */    asEIP1193Provider() {
        const e = Object.create(this), t = e.request;
        return e.request = function(e) {
            return E(this, void 0, void 0, (function*() {
                return (yield t(e)).result;
            }));
        }, e.asEIP1193Provider = void 0, e;
    }
}

class b extends Array {
    constructor(e) {
        super(), this._accountProvider = e;
    }
}

export { s as B, a as D, i as E, r as F, c as H, l as T, h as W, e as a, b };

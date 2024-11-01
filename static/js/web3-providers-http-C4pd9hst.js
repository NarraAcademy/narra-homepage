import { f as t } from "./cross-fetch-CvpS3L6O.js";

import { W as e } from "./web3-types-DSrrWgZ8.js";

import { ac as n, ad as r, R as o } from "./web3-errors-hzVYhHGn.js";

var s = function(t, e, n, r) {
    return new (n || (n = Promise))((function(o, s) {
        function i(t) {
            try {
                a(r.next(t));
            } catch (e) {
                s(e);
            }
        }
        function c(t) {
            try {
                a(r.throw(t));
            } catch (e) {
                s(e);
            }
        }
        function a(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e);
            }))).then(i, c);
        }
        a((r = r.apply(t, e || [])).next());
    }));
};

class i extends e {
    constructor(t, e) {
        if (super(), !i.validateClientUrl(t)) throw new n(t);
        this.clientUrl = t, this.httpProviderOptions = e;
    }
    static validateClientUrl(t) {
        return "string" == typeof t && /^http(s)?:\/\//i.test(t);
    }
    /* eslint-disable class-methods-use-this */    getStatus() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    supportsSubscriptions() {
        return !1;
    }
    request(e, n) {
        var r;
        return s(this, void 0, void 0, (function*() {
            const s = Object.assign(Object.assign({}, null === (r = this.httpProviderOptions) || void 0 === r ? void 0 : r.providerOptions), n), i = yield t(this.clientUrl, Object.assign(Object.assign({}, s), {
                method: "POST",
                headers: Object.assign(Object.assign({}, s.headers), {
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(e)
            }));
            if (!i.ok) throw new o(yield i.json(), void 0, void 0, i.status);
            return yield i.json();
        }));
    }
    /* eslint-disable class-methods-use-this */    on() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    removeListener() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    once() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    removeAllListeners() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    connect() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    disconnect() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    reset() {
        throw new r;
    }
    /* eslint-disable class-methods-use-this */    reconnect() {
        throw new r;
    }
}

export { i as H };

import { W as t } from "./web3-core-ObgmPHuP.js";

import "./web3-types-DSrrWgZ8.js";

import "./web3-errors-hzVYhHGn.js";

import "./web3-eth-iban-75eRxAWM.js";

import "./web3-validator-BARD4gRE.js";

import { Z as n, _ as r, $ as e } from "./web3-rpc-methods-Df_8n9zL.js";

import { f as i } from "./web3-utils-CA0vZo5F.js";

var o = function(t, n, r, e) {
    return new (r || (r = Promise))((function(i, o) {
        function u(t) {
            try {
                a(e.next(t));
            } catch (n) {
                o(n);
            }
        }
        function s(t) {
            try {
                a(e.throw(t));
            } catch (n) {
                o(n);
            }
        }
        function a(t) {
            var n;
            t.done ? i(t.value) : (n = t.value, n instanceof r ? n : new r((function(t) {
                t(n);
            }))).then(u, s);
        }
        a((e = e.apply(t, n || [])).next());
    }));
};

function u(t, r) {
    return o(this, void 0, void 0, (function*() {
        const e = yield n(t.requestManager);
        return i({
            format: "uint"
        }, e, r);
    }));
}

var s = function(t, n, r, e) {
    return new (r || (r = Promise))((function(i, o) {
        function u(t) {
            try {
                a(e.next(t));
            } catch (n) {
                o(n);
            }
        }
        function s(t) {
            try {
                a(e.throw(t));
            } catch (n) {
                o(n);
            }
        }
        function a(t) {
            var n;
            t.done ? i(t.value) : (n = t.value, n instanceof r ? n : new r((function(t) {
                t(n);
            }))).then(u, s);
        }
        a((e = e.apply(t, n || [])).next());
    }));
};

class a extends t {
    /**
   * Gets the current network ID
   *
   * @param returnFormat - Return format
   * @returns A Promise of the network ID.
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.getId();
   * > 1
   * ```
   */
    getId(t = this.defaultReturnFormat) {
        return s(this, void 0, void 0, (function*() {
            return u(this, t);
        }));
    }
    /**
   * Get the number of peers connected to.
   *
   * @param returnFormat - Return format
   * @returns A promise of the number of the peers connected to.
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.getPeerCount();
   * > 0
   * ```
   */    getPeerCount(t = this.defaultReturnFormat) {
        return s(this, void 0, void 0, (function*() {
            return function(t, n) {
                return o(this, void 0, void 0, (function*() {
                    const e = yield r(t.requestManager);
                    return i({
                        format: "uint"
                    }, e, n);
                }));
            }(this, t);
        }));
    }
    /**
   * Check if the node is listening for peers
   *
   * @returns A promise of a boolean if the node is listening to peers
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.isListening();
   * > true
   * ```
   */    isListening() {
        return s(this, void 0, void 0, (function*() {
            return t = this, o(void 0, void 0, void 0, (function*() {
                return e(t.requestManager);
            }));
            var t;
        }));
    }
}

export { a as N, u as g };

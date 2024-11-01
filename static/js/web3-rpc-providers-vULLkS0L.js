import { af as e, R as t } from "./web3-errors-hzVYhHGn.js";

import { H as r } from "./web3-providers-http-C4pd9hst.js";

import { W as o } from "./web3-providers-ws-Fi9Qg3ru.js";

import { T as i } from "./web3-utils-CA0vZo5F.js";

var n, s, a, c;

(s = n || (n = {})).HTTPS = "https", s.WebSocket = "wss", (c = a || (a = {})).ETH_MAINNET = "eth_mainnet", 
c.ETH_GOERLI = "eth_goerli", c.ETH_SEPOLIA = "eth_sepolia", c.ETH_HOLESKY = "eth_holesky", 
c.POLYGON_MAINNET = "polygon_mainnet", c.POLYGON_MUMBAI = "polygon_mumbai", c.POLYGON_AMONY = "polygon_amony", 
c.ARBITRUM_MAINNET = "arbitrum_mainnet", c.ARBITRUM_SEPOLIA = "arbitrum_sepolia", 
c.BASE_MAINNET = "base_mainnet", c.BASE_SEPOLIA = "base_sepolia", c.OPTIMISM_MAINNET = "optimism_mainnet", 
c.OPTIMISM_SEPOLIA = "optimism_sepolia", c.BNB_MAINNET = "bnb_mainnet", c.BNB_TESTNET = "bnb_testnet";

class d extends e {
    constructor(e) {
        super("You've reach the rate limit of free RPC calls from our Partner Quick Nodes. There are two options you can either create a paid Quick Nodes account and get 20% off for 2 months using WEB3JS referral code, or use Free public RPC endpoint.", e), 
        this.code = 1300;
    }
}

class u extends e {
    constructor(e) {
        super(`Invalid provider config options given for ${e}`), this.code = 1301;
    }
}

var p = function(e, t, r, o) {
    return new (r || (r = Promise))((function(i, n) {
        function s(e) {
            try {
                c(o.next(e));
            } catch (t) {
                n(t);
            }
        }
        function a(e) {
            try {
                c(o.throw(e));
            } catch (t) {
                n(t);
            }
        }
        function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                e(t);
            }))).then(s, a);
        }
        c((o = o.apply(e, t || [])).next());
    }));
};

class l extends i {
    constructor(e, t, i, s, a) {
        if (super(), void 0 !== a && t === n.HTTPS && !("providerOptions" in a)) throw new u("HTTP Provider");
        if (void 0 !== a && t === n.WebSocket && !("socketOptions" in a) && !("reconnectOptions" in a)) throw new u("Websocket Provider");
        this.transport = t, t === n.HTTPS ? this.provider = new r(this.getRPCURL(e, t, i, s), a) : t === n.WebSocket && (this.provider = new o(this.getRPCURL(e, t, i, s), null == a ? void 0 : a.socketOptions, null == a ? void 0 : a.reconnectOptions));
    }
    request(e, t) {
        return p(this, void 0, void 0, (function*() {
            return this.transport === n.HTTPS ? yield this.provider.request(e, t) : this.provider.request(e);
        }));
    }
    getStatus() {
        return this.provider.getStatus();
    }
    supportsSubscriptions() {
        return this.provider.supportsSubscriptions();
    }
    once(e, t) {
        var r;
        (null === (r = this.provider) || void 0 === r ? void 0 : r.once) && this.provider.once(e, t);
    }
    removeAllListeners(e) {
        var t;
        (null === (t = this.provider) || void 0 === t ? void 0 : t.removeAllListeners) && this.provider.removeAllListeners(e);
    }
    connect() {
        var e;
        (null === (e = this.provider) || void 0 === e ? void 0 : e.connect) && this.provider.connect();
    }
    disconnect(e, t) {
        var r;
        (null === (r = this.provider) || void 0 === r ? void 0 : r.disconnect) && this.provider.disconnect(e, t);
    }
    reset() {
        var e;
        (null === (e = this.provider) || void 0 === e ? void 0 : e.reset) && this.provider.reset();
    }
    on(e, t) {
        this.provider && this.provider.on(e, t);
    }
    removeListener(e, t) {
        this.provider && this.provider.removeListener(e, t);
    }
}

var f = function(e, t, r, o) {
    return new (r || (r = Promise))((function(i, n) {
        function s(e) {
            try {
                c(o.next(e));
            } catch (t) {
                n(t);
            }
        }
        function a(e) {
            try {
                c(o.throw(e));
            } catch (t) {
                n(t);
            }
        }
        function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                e(t);
            }))).then(s, a);
        }
        c((o = o.apply(e, t || [])).next());
    }));
};

const v = e => void 0 !== e && e.trim().length > 0;

const h = new class extends l {
    // eslint-disable-next-line default-param-last
    constructor(e = a.ETH_MAINNET, t = n.HTTPS, r = "", o = "", i) {
        super(e, t, r, o, i);
    }
    request(e, r) {
        const o = Object.create(null, {
            request: {
                get: () => super.request
            }
        });
        return f(this, void 0, void 0, (function*() {
            try {
                return yield o.request.call(this, e, r);
            } catch (i) {
                if (i instanceof t && 429 === i.statusCode) throw new d(i);
                throw i;
            }
        }));
    }
    // eslint-disable-next-line class-methods-use-this
    getRPCURL(e, t, r, o) {
        let i = "", n = "";
        switch (e) {
          case a.ETH_MAINNET:
            i = v(o) ? o : "powerful-holy-bush.quiknode.pro", n = v(r) ? r : "3240624a343867035925ff7561eb60dfdba2a668";
            break;

          case a.ETH_SEPOLIA:
            i = v(o) ? o : "dimensional-fabled-glitter.ethereum-sepolia.quiknode.pro", n = v(r) ? r : "382a3b5a4b938f2d6e8686c19af4b22921fde2cd";
            break;

          case a.ETH_HOLESKY:
            i = v(o) ? o : "yolo-morning-card.ethereum-holesky.quiknode.pro", n = v(r) ? r : "481ebe70638c4dcf176af617a16d02ab866b9af9";
            break;

          case a.ARBITRUM_MAINNET:
            i = v(o) ? o : "autumn-divine-dinghy.arbitrum-mainnet.quiknode.pro", n = v(r) ? r : "a5d7bfbf60b5ae9ce3628e53d69ef50d529e9a8c";
            break;

          case a.ARBITRUM_SEPOLIA:
            i = v(o) ? o : "few-patient-pond.arbitrum-sepolia.quiknode.pro", n = v(r) ? r : "3be985450970628c860b959c65cd2642dcafe53c";
            break;

          case a.BNB_MAINNET:
            i = v(o) ? o : "purple-empty-reel.bsc.quiknode.pro", n = v(r) ? r : "ebf6c532961e21f092ff2facce1ec4c89c540158";
            break;

          case a.BNB_TESTNET:
            i = v(o) ? o : "floral-rough-scion.bsc-testnet.quiknode.pro", n = v(r) ? r : "5b297e5acff5f81f4c37ebf6f235f7299b6f9d28";
            break;

          case a.POLYGON_MAINNET:
            i = v(o) ? o : "small-chaotic-moon.matic.quiknode.pro", n = v(r) ? r : "847569f8a017e84d985e10d0f44365d965a951f1";
            break;

          case a.POLYGON_AMONY:
            i = v(o) ? o : "prettiest-side-shape.matic-amoy.quiknode.pro", n = v(r) ? r : "79a9476eea661d4f82de614db1d8a895b14b881c";
            break;

          default:
            throw new Error("Network info not avalible.");
        }
        return `${t}://${i}/${n}`;
    }
};

export { h as m };

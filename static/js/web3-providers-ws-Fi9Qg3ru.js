import { W as e } from "./isomorphic-ws-DZRFyHBe.js";

import { ae as n } from "./web3-errors-hzVYhHGn.js";

import { S as t, i as o } from "./web3-utils-CA0vZo5F.js";

class s extends t {
    /**
   * This is a class used for Web Socket connections. It extends the abstract class SocketProvider {@link SocketProvider} that extends the EIP-1193 provider {@link EIP1193Provider}.
   * @param socketPath - The path to the Web Socket.
   * @param socketOptions - The options for the Web Socket client.
   * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
   */
    // this constructor is to specify the type for `socketOptions` for a better intellisense.
    // eslint-disable-next-line no-useless-constructor
    constructor(e, n, t) {
        super(e, n, t);
    }
    // eslint-disable-next-line class-methods-use-this
    _validateProviderPath(e) {
        return "string" == typeof e && /^ws(s)?:\/\//i.test(e);
    }
    getStatus() {
        if (this._socketConnection && !o(this._socketConnection)) switch (this._socketConnection.readyState) {
          case this._socketConnection.CONNECTING:
            return "connecting";

          case this._socketConnection.OPEN:
            return "connected";

          default:
            return "disconnected";
        }
        return "disconnected";
    }
    _openSocketConnection() {
        this._socketConnection = new e(this._socketPath, void 0, this._socketOptions && 0 === Object.keys(this._socketOptions).length ? void 0 : this._socketOptions);
    }
    _closeSocketConnection(e, n) {
        var t;
        null === (t = this._socketConnection) || void 0 === t || t.close(e, n);
    }
    _sendToSocket(e) {
        var t;
        if ("disconnected" === this.getStatus()) throw new n;
        null === (t = this._socketConnection) || void 0 === t || t.send(JSON.stringify(e));
    }
    _parseResponses(e) {
        return this.chunkResponseParser.parseResponse(e.data);
    }
    _addSocketListeners() {
        var e, n, t, o;
        null === (e = this._socketConnection) || void 0 === e || e.addEventListener("open", this._onOpenHandler), 
        null === (n = this._socketConnection) || void 0 === n || n.addEventListener("message", this._onMessageHandler), 
        null === (t = this._socketConnection) || void 0 === t || t.addEventListener("close", (e => this._onCloseHandler(e))), 
        null === (o = this._socketConnection) || void 0 === o || o.addEventListener("error", this._onErrorHandler);
    }
    _removeSocketListeners() {
        var e, n, t;
        null === (e = this._socketConnection) || void 0 === e || e.removeEventListener("message", this._onMessageHandler), 
        null === (n = this._socketConnection) || void 0 === n || n.removeEventListener("open", this._onOpenHandler), 
        null === (t = this._socketConnection) || void 0 === t || t.removeEventListener("close", this._onCloseHandler);
    }
    _onCloseEvent(e) {
        var n;
        !this._reconnectOptions.autoReconnect || [ 1e3, 1001 ].includes(e.code) && e.wasClean ? (this._clearQueues(e), 
        this._removeSocketListeners(), this._onDisconnect(e.code, e.reason), null === (n = this._socketConnection) || void 0 === n || n.removeEventListener("error", this._onErrorHandler)) : this._reconnect();
    }
}

export { s as W };

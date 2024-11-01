var e = null;

"undefined" != typeof WebSocket ? e = WebSocket : "undefined" != typeof MozWebSocket ? e = MozWebSocket : "undefined" != typeof global ? e = global.WebSocket || global.MozWebSocket : "undefined" != typeof window ? e = window.WebSocket || window.MozWebSocket : "undefined" != typeof self && (e = self.WebSocket || self.MozWebSocket);

const o = e;

export { o as W };

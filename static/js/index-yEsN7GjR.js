import { r as s, u as e, w as t, F as r, c as i, G as a, z as o, M as p, N as m, Y as l, O as n, Z as c, _ as d, b as u, K as j, J as v, C as b, H as h, L as f, n as w } from "./@vue-CLcIJuOQ.js";

import { m as g, z as y, u as C, s as x } from "./send-icon-CBqZMTDD.js";

import { C as _, a as k } from "./footer-_TZZ746-.js";

import { u as L, b as T } from "./vue-router-CYC_ZM8h.js";

import { s as I } from "./store-D-KgEbVP.js";

import { _ as z, u as A } from "./index-CFWyUmPD.js";

import "./marked-6rvJW1hj.js";

import "./web3-BEnxSq4_.js";

import "./setimmediate-DUOPLI_V.js";

import "./@ethereumjs-aMURc4PS.js";

import "./web3-eth-vWxzIr98.js";

import "./web3-types-DSrrWgZ8.js";

import "./web3-core-ObgmPHuP.js";

import "./web3-errors-hzVYhHGn.js";

import "./web3-eth-iban-75eRxAWM.js";

import "./web3-validator-BARD4gRE.js";

import "./ethereum-cryptography-wqlT3DIR.js";

import "./@noble-Cuw1cgUn.js";

import "./zod-D1IQRcUw.js";

import "./web3-utils-CA0vZo5F.js";

import "./eventemitter3-DvedpluM.js";

import "./web3-providers-http-C4pd9hst.js";

import "./cross-fetch-CvpS3L6O.js";

import "./web3-providers-ws-Fi9Qg3ru.js";

import "./isomorphic-ws-DZRFyHBe.js";

import "./web3-eth-accounts-DxnCIhbC.js";

import "./crc-32-BOb1C-oO.js";

import "./web3-rpc-methods-Df_8n9zL.js";

import "./web3-net-DSmyH1-b.js";

import "./web3-eth-abi-eT7or4Ei.js";

import "./abitype-BIaCt7HV.js";

import "./web3-eth-contract-CZNEMiMZ.js";

import "./web3-eth-ens-BC7enYQN.js";

import "./@adraffy-sBKPPea8.js";

import "./web3-eth-personal-CKSgBcUg.js";

import "./web3-rpc-providers-vULLkS0L.js";

import "./@ant-design-BL-uFhNg.js";

import "./@ctrl-CLxOqGL5.js";

import "./pinia-CNFl7BY_.js";

import "./axios-Y7sjRXBH.js";

/* empty css                 */

const E = {
    class: "chatting"
}, G = [ "src" ], H = {
    class: "content"
}, M = {
    class: "content-inner"
}, S = {
    class: "message-list"
}, Z = {
    class: "info"
}, D = [ "src" ], V = {
    class: "name"
}, B = [ "src" ], F = [ "innerHTML" ], K = {
    class: "search-input"
}, N = [ "disabled", "placeholder" ], O = [ "src" ], U = {
    key: 0,
    class: "fetchStopVisiable"
}, q =  z({
    __name: "index",
    setup(z) {
        const q = A(), J = T(), P = s(), Y = s(), $ = L(), {submit: Q, fetchStopVisiable: R, user_say: W, send_ready: X, fetchStopHandle: ss, cursorId: es, sessionList: ts, chatList: rs, sessionGroupActive: is, addGroupDone: as, _done: os, marked: ps} = g();
        return e((() => {
            is.value = +$.params.id, I.set("sessionGroupActive", is.value);
        })), t(os, (() => {
            os && P.value.focus();
        })), t([ ts, as ], (() => {
            w((() => {
                var s;
                (null == (s = null == Y ? void 0 : Y.value) ? void 0 : s.length) && (Y.value.at(-1).parentNode.scrollTop = Y.value.at(-1).offsetTop);
            }));
        }), {
            deep: !0
        }), (s, e) => (b(), r("div", E, [ i(_), a("img", {
            class: "back",
            onClick: e[0] || (e[0] = s => o(J).back()),
            src: o("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.6336%203.37678C11.3992%203.13553%2011.0813%203%2010.7498%203C10.4184%203%2010.1005%203.13553%209.86609%203.37678L2.36599%2011.098C2.13165%2011.3393%202%2011.6665%202%2012.0078C2%2012.349%202.13165%2012.6763%202.36599%2012.9176L9.86609%2020.6388C10.1018%2020.8732%2010.4176%2021.0029%2010.7453%2021C11.0731%2020.997%2011.3866%2020.8617%2011.6184%2020.6231C11.8501%2020.3845%2011.9816%2020.0617%2011.9845%2019.7243C11.9873%2019.3869%2011.8613%2019.0618%2011.6336%2018.8191L6.26729%2013.2946L20.75%2013.2946C21.0815%2013.2946%2021.3995%2013.1591%2021.6339%2012.9177C21.8683%2012.6764%2022%2012.3491%2022%2012.0078C22%2011.6665%2021.8683%2011.3392%2021.6339%2011.0978C21.3995%2010.8565%2021.0815%2010.7209%2020.75%2010.7209L6.26729%2010.7209L11.6336%205.1964C11.868%204.95508%2011.9996%204.62782%2011.9996%204.28659C11.9996%203.94536%2011.868%203.6181%2011.6336%203.37678Z'%20fill='%23EDE4CC'/%3e%3c/svg%3e")
        }, null, 8, G), a("div", H, [ a("div", M, [ a("div", S, [ (b(!0), r(p, null, m(o(rs), (s => (b(), 
        r("div", {
            class: h([ "message-item", {
                "message-item-zai": 0 === s.type
            } ]),
            ref_for: !0,
            ref_key: "sessionItemEl",
            ref: Y
        }, [ a("div", Z, [ 0 === s.type ? (b(), r("img", {
            key: 0,
            class: "avatar",
            src: o(y),
            alt: ""
        }, null, 8, D)) : v("", !0), a("div", V, f(0 === s.type ? "ZAI" : o(q).userInfo.User_name), 1), 1 === s.type ? (b(), 
        r("img", {
            key: 1,
            class: "avatar",
            src: o(C),
            alt: ""
        }, null, 8, B)) : v("", !0) ]), a("div", {
            class: "text",
            innerHTML: o(ps)(s.text + (s.id === o(es) ? `<span class=${s.id === o(es) ? "cursor-mobile" : "hidden"} ></span>` : ""))
        }, null, 8, F) ], 2)))), 256)) ]), a("div", K, [ a("form", {
            onSubmit: e[5] || (e[5] = l(((...s) => o(Q) && o(Q)(...s)), [ "prevent" ]))
        }, [ n(a("textarea", {
            ref_key: "textarea",
            ref: P,
            disabled: !o(R),
            placeholder: o(R) ? "Type here" : "Typing...",
            onKeydown: e[1] || (e[1] = d(((...s) => o(X) && o(X)(...s)), [ "enter" ])),
            "onUpdate:modelValue": e[2] || (e[2] = s => u(W) ? W.value = s : null),
            type: "text"
        }, null, 40, N), [ [ c, o(W) ] ]), a("img", {
            src: o(x),
            onClick: e[3] || (e[3] = (...s) => o(Q) && o(Q)(...s))
        }, null, 8, O), o(R) ? v("", !0) : (b(), r("div", U, [ e[6] || (e[6] = j(" ZAI is Typing...... ")), a("span", {
            onClick: e[4] || (e[4] = (...s) => o(ss) && o(ss)(...s))
        }, "stop responding") ])) ], 32) ]) ]) ]), i(k) ]));
    }
}, [ [ "__scopeId", "data-v-ed40dd85" ] ]);

export { q as default };

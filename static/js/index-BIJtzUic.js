import { C as s, a as e } from "./footer-BvkW0DW4.js";

import { z as a, a as i } from "./plus-icons-_imX99zj.js";

import { m as t, z as r, u as o, s as l } from "./send-icon-CBqZMTDD.js";

import { S as c, P as n, A as d, a as p, b as u } from "./swiper-DWnYpmNd.js";

import { _ as m, u as v, a as g } from "./index-CFWyUmPD.js";

import { C as h, D as f, E as y, F as b, M as _, N as w, z as j, G as k, L as I, K as C, c as T, r as x, w as H, n as A, H as N, J as S, Y as z, O as G, Z, _ as B, b as L, u as V } from "./@vue-CLcIJuOQ.js";

import { C as M, a as W } from "./footer-_TZZ746-.js";

import { b as q } from "./vue-router-CYC_ZM8h.js";

import { s as E } from "./store-D-KgEbVP.js";

import "./marked-6rvJW1hj.js";

import "./pinia-CNFl7BY_.js";

import "./axios-Y7sjRXBH.js";

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

/* empty css                 */

import "./@ant-design-BL-uFhNg.js";

import "./@ctrl-CLxOqGL5.js";

const D = [ "src" ], P = {
    class: "title"
}, F = {
    class: "des"
}, K =  m({
    __name: "MySwiper",
    setup(s) {
        const {list: e} = t();
        return c.use([ n, d ]), (s, a) => (h(), f(j(u), {
            class: "swiper",
            speed: 1e3,
            pagination: {
                clickable: !0
            },
            loop: !0,
            autoplay: {
                delay: 2e3
            }
        }, {
            default: y((() => [ (h(!0), b(_, null, w(j(e), ((s, e) => (h(), f(j(p), {
                class: "swiper-slide",
                key: e
            }, {
                default: y((() => [ k("img", {
                    src: s.bg,
                    alt: ""
                }, null, 8, D), k("div", P, I(s.name), 1), k("div", F, I(s.des), 1) ])),
                _: 2
            }, 1024)))), 128)) ])),
            _: 1
        }));
    }
}, [ [ "__scopeId", "data-v-56410807" ] ]), O = {
    class: "part1"
}, Q = {
    class: "page-center"
}, R = {
    class: "main"
}, U = [ "src" ], J =  m({
    __name: "part1",
    setup(s) {
        const {load: e} = t();
        return (s, i) => (h(), b("div", O, [ i[3] || (i[3] = k("div", {
            class: "bg1"
        }, null, -1)), k("div", Q, [ i[2] || (i[2] = k("div", {
            class: "bg2"
        }, null, -1)), k("div", R, [ i[0] || (i[0] = k("div", {
            class: "left"
        }, [ k("div", {
            class: "title"
        }, [ C(" Welcome "), k("br"), C(" to our "), k("br"), k("span", null, " Beta! ") ]), k("div", {
            class: "des"
        }, " The first community-owned AI tamagotchi is now live... with our Beta version! Begin your Narra journey and chat with ZAI cub! ") ], -1)), k("img", {
            src: j(e) ? j(a) : "",
            class: "right"
        }, null, 8, U), i[1] || (i[1] = k("div", {
            class: "bg3"
        }, null, -1)) ]), T(K, {
            class: "swiper"
        }) ]) ]));
    }
}, [ [ "__scopeId", "data-v-7ec35aeb" ] ]), Y = {
    class: "part2"
}, $ = {
    class: "page-center"
}, X = {
    class: "sider"
}, ss = {
    class: "menu"
}, es = [ "onClick" ], as = [ "src" ], is = {
    class: "content"
}, ts = {
    class: "content-inner"
}, rs = {
    class: "message-list"
}, os = {
    class: "info"
}, ls = [ "src" ], cs = {
    class: "name"
}, ns = [ "src" ], ds = [ "innerHTML" ], ps = {
    class: "search-input"
}, us = [ "disabled", "placeholder" ], ms = [ "src" ], vs = {
    key: 0,
    class: "fetchStopVisiable"
}, gs =  m({
    __name: "part2",
    setup(s) {
        const e = v(), a = x(), c = x(), n = x(), {sessionGroupActive: d, submit: p, fetchStopVisiable: u, user_say: m, send_ready: g, fetchStopHandle: f, sessionList: y, cursorId: T, addSessionGroupHandle: V, chatList: M, _done: W, addGroupDone: q, marked: E} = t();
        return H(W, (() => {
            W && a.value.focus();
        })), H([ y, q ], (() => {
            A((() => {
                var s, e;
                (null == (s = null == c ? void 0 : c.value) ? void 0 : s.length) && (c.value.at(-1).parentNode.scrollTop = c.value.at(-1).offsetTop), 
                (null == (e = null == n ? void 0 : n.value) ? void 0 : e.length) && (n.value.at(d.value).parentNode.scrollTop = n.value.at(d.value - 1).offsetTop - 155 || 0);
            }));
        }), {
            deep: !0
        }), H(n, (() => {
            A((() => {
                n.value.at(d.value).parentNode.scrollTop = 0;
            }));
        })), (s, t) => (h(), b("div", Y, [ k("div", $, [ k("div", X, [ k("div", ss, [ (h(!0), 
        b(_, null, w(j(y), (s => (h(), b("div", {
            class: N([ "menu-item", {
                "menu-item-active": j(d) === s.groupId
            } ]),
            ref_for: !0,
            ref_key: "sessionGroupEl",
            ref: n,
            onClick: e => d.value = s.groupId,
            key: s.groupId
        }, I(s.groupName), 11, es)))), 128)) ]), k("div", {
            class: "add-btn",
            onClick: t[0] || (t[0] = (...s) => j(V) && j(V)(...s))
        }, [ k("img", {
            class: "icon",
            src: j(i)
        }, null, 8, as), t[6] || (t[6] = C(" Create New Topic ")) ]), t[7] || (t[7] = k("div", {
            class: "img"
        }, [ k("div", {
            class: "zai"
        }, [ k("img", {
            class: "zai-gif",
            src: "https://oss.narralayer.ai/images/mascot-3.gif",
            alt: ""
        }) ]), k("div", {
            class: "zai-text"
        }, " “ZAI is eager to chat with you~” ") ], -1)) ]), k("div", is, [ k("div", ts, [ k("div", rs, [ (h(!0), 
        b(_, null, w(j(M), (s => (h(), b("div", {
            class: N([ "message-item", {
                "message-item-zai": 0 === s.type
            } ]),
            ref_for: !0,
            ref_key: "sessionItemEl",
            ref: c
        }, [ k("div", os, [ 0 === s.type ? (h(), b("img", {
            key: 0,
            class: "avatar",
            src: j(r),
            alt: ""
        }, null, 8, ls)) : S("", !0), k("div", cs, I(0 === s.type ? "ZAI" : j(e).userInfo.User_name), 1), 1 === s.type ? (h(), 
        b("img", {
            key: 1,
            class: "avatar",
            src: j(o),
            alt: ""
        }, null, 8, ns)) : S("", !0) ]), k("div", {
            class: "text",
            innerHTML: j(E)(s.text + (s.id === j(T) ? `<span class=${s.id === j(T) ? "cursor" : "hidden"} ></span>` : ""))
        }, null, 8, ds) ], 2)))), 256)) ]), k("div", ps, [ k("form", {
            onSubmit: t[5] || (t[5] = z(((...s) => j(p) && j(p)(...s)), [ "prevent" ]))
        }, [ G(k("textarea", {
            ref_key: "textarea",
            ref: a,
            disabled: !j(u),
            placeholder: j(u) ? "Type here" : "Typing...",
            onKeydown: t[1] || (t[1] = B(((...s) => j(g) && j(g)(...s)), [ "enter" ])),
            "onUpdate:modelValue": t[2] || (t[2] = s => L(m) ? m.value = s : null),
            type: "text"
        }, null, 40, us), [ [ Z, j(m) ] ]), k("img", {
            src: j(l),
            onClick: t[3] || (t[3] = (...s) => j(p) && j(p)(...s))
        }, null, 8, ms), j(u) ? S("", !0) : (h(), b("div", vs, [ t[8] || (t[8] = C(" ZAI is Typing...... ")), k("span", {
            onClick: t[4] || (t[4] = (...s) => j(f) && j(f)(...s))
        }, "stop responding") ])) ], 32) ]) ]) ]) ]) ]));
    }
}, [ [ "__scopeId", "data-v-af5b8b1b" ] ]), hs = "data:image/svg+xml,%3csvg%20width='27'%20height='27'%20viewBox='0%200%2027%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.89562%206.88903V3.6163C7.89562%203.32697%208.01055%203.0495%208.21514%202.84491C8.41972%202.64033%208.6972%202.52539%208.98653%202.52539H22.0774C22.3668%202.52539%2022.6442%202.64033%2022.8488%202.84491C23.0534%203.0495%2023.1683%203.32697%2023.1683%203.6163V18.889C23.1683%2019.1784%2023.0534%2019.4558%2022.8488%2019.6604C22.6442%2019.865%2022.3668%2019.9799%2022.0774%2019.9799H18.8047V23.2527C18.8047%2023.8548%2018.3138%2024.3436%2017.7062%2024.3436H4.63053C4.48667%2024.3444%204.34405%2024.3169%204.21088%2024.2624C4.07771%2024.208%203.9566%2024.1278%203.85452%2024.0264C3.75244%2023.9251%203.67139%2023.8045%203.61604%2023.6717C3.56069%2023.5389%203.53212%2023.3965%203.53198%2023.2527L3.53526%207.97994C3.53526%207.37775%204.02616%206.88903%204.6338%206.88903H7.89562ZM10.0774%206.88903H18.8047V17.7981H20.9865V4.70721H10.0774V6.88903Z'%20fill='%23152226'/%3e%3c/svg%3e", fs = {
    class: "part3"
}, ys = {
    class: "left"
}, bs = {
    class: "code"
}, _s = {
    class: "code-text"
}, ws = [ "src" ], js =  m({
    __name: "part3",
    setup(s) {
        const {code: e, shareList: a, copyHandle: i} = t();
        return (s, a) => (h(), b("div", fs, [ a[3] || (a[3] = k("img", {
            class: "rq-code",
            src: "https://oss.narralayer.ai/images/RQcode.svg"
        }, null, -1)), k("div", ys, [ a[1] || (a[1] = k("h1", {
            class: "thank"
        }, " Thank you! ", -1)), a[2] || (a[2] = k("div", {
            class: "des"
        }, "We hoped you enjoy chatting with ZAI! Here’s your personal qr code! Share us with your friends! We are tracking your contributions! Stay tuned!", -1)), k("div", bs, [ k("div", _s, I(j(e)), 1), k("div", {
            onClick: a[0] || (a[0] = (...s) => j(i) && j(i)(...s)),
            class: "code-copy"
        }, [ k("img", {
            class: "copy-icon",
            src: j(hs)
        }, null, 8, ws) ]) ]) ]) ]));
    }
}, [ [ "__scopeId", "data-v-503c3764" ] ]), ks = {
    class: "page-inner"
}, Is =  m({
    __name: "index",
    setup: a => (a, i) => (h(), b("div", null, [ T(s), k("div", ks, [ T(J), T(gs), T(js) ]), T(e) ]))
}, [ [ "__scopeId", "data-v-544b235b" ] ]), Cs = [ "src" ], Ts = {
    class: "title"
}, xs = {
    class: "des"
}, Hs =  m({
    __name: "MySwiper",
    setup(s) {
        const {list: e} = t();
        return c.use([ n, d ]), (s, a) => (h(), f(j(u), {
            class: "swiper",
            speed: 1e3,
            pagination: {
                clickable: !0
            },
            loop: !0,
            centeredSlides: !0,
            slidesPerView: 3,
            spaceBetween: 0,
            autoplay: {
                delay: 2e3
            }
        }, {
            default: y((() => [ (h(!0), b(_, null, w(j(e), ((s, e) => (h(), f(j(p), {
                class: "swiper-slide",
                key: e
            }, {
                default: y((() => [ k("img", {
                    src: s.mobileBg,
                    alt: ""
                }, null, 8, Cs), k("div", Ts, I(s.name), 1), k("div", xs, I(s.des), 1) ])),
                _: 2
            }, 1024)))), 128)) ])),
            _: 1
        }));
    }
}, [ [ "__scopeId", "data-v-6db1aa7a" ] ]), As = {
    class: "part1"
}, Ns = {
    class: "page-center"
}, Ss = {
    class: "main"
}, zs = [ "src" ], Gs =  m({
    __name: "part1",
    setup: s => (t(), (s, e) => (h(), b("div", As, [ e[2] || (e[2] = k("div", {
        class: "bg1"
    }, null, -1)), k("div", Ns, [ k("div", Ss, [ e[0] || (e[0] = k("div", {
        class: "left"
    }, [ k("div", {
        class: "title"
    }, [ C(" Welcome to our "), k("br"), k("span", null, " Beta! ") ]), k("div", {
        class: "des"
    }, " The first community-owned AI tamagotchi is now live... with our Beta version! Begin your Narra journey and chat with ZAI cub! ") ], -1)), k("img", {
        src: j(a),
        class: "right"
    }, null, 8, zs), e[1] || (e[1] = k("div", {
        class: "bg3"
    }, null, -1)) ]), T(Hs, {
        class: "swiper"
    }) ]) ])))
}, [ [ "__scopeId", "data-v-e31a11ab" ] ]), Zs = {
    class: "part2"
}, Bs = {
    class: "page-center"
}, Ls = {
    class: "sider"
}, Vs = {
    class: "menu"
}, Ms = [ "onClick" ], Ws = [ "src" ], qs =  m({
    __name: "part2",
    setup(s) {
        const e = x(), a = x(), r = x(), o = q(), {sessionGroupActive: l, sessionList: c, addSessionGroupHandle: n, _done: d, addGroupDone: p} = t();
        V((() => {
            l.value = +E.get("sessionGroupActive") || 0, E.remove("sessionGroupActive");
        }));
        return H(d, (() => {
            d && e.value.focus();
        })), H([ c, p ], (() => {
            A((() => {
                var s, e;
                (null == (s = null == a ? void 0 : a.value) ? void 0 : s.length) && (a.value.at(-1).parentNode.scrollTop = a.value.at(-1).offsetTop), 
                (null == (e = null == r ? void 0 : r.value) ? void 0 : e.length) && (r.value.at(l.value).parentNode.scrollTop = r.value.at(l.value - 1).offsetTop - 155 || 0);
            }));
        }), {
            deep: !0
        }), H(r, (() => {
            A((() => {
                r.value.at(l.value).parentNode.scrollTop = 0;
            }));
        })), (s, e) => (h(), b("div", Zs, [ k("div", Bs, [ k("div", Ls, [ k("div", Vs, [ (h(!0), 
        b(_, null, w(j(c), (s => (h(), b("div", {
            class: N([ "menu-item", {
                "menu-item-active": j(l) === s.groupId
            } ]),
            ref_for: !0,
            ref_key: "sessionGroupEl",
            ref: r,
            onClick: e => (s => {
                o.push({
                    name: "chatting",
                    params: {
                        id: s.groupId
                    }
                });
            })(s),
            key: s.groupId
        }, I(s.groupName), 11, Ms)))), 128)) ]), k("div", {
            class: "add-btn",
            onClick: e[0] || (e[0] = (...s) => j(n) && j(n)(...s))
        }, [ k("img", {
            class: "icon",
            src: j(i)
        }, null, 8, Ws), e[1] || (e[1] = C(" Create New Topic ")) ]), e[2] || (e[2] = k("div", {
            class: "img"
        }, [ k("div", {
            class: "zai"
        }, [ k("img", {
            class: "zai-gif",
            src: "https://oss.narralayer.ai/images/mascot-3.gif",
            alt: ""
        }) ]), k("div", {
            class: "zai-text"
        }, " “ZAI is eager to chat with you~” ") ], -1)) ]) ]) ]));
    }
}, [ [ "__scopeId", "data-v-85cbf351" ] ]), Es = {
    class: "part3"
}, Ds = {
    class: "left"
}, Ps = {
    class: "code"
}, Fs = {
    class: "code-text"
}, Ks = [ "src" ], Os =  m({
    __name: "part3",
    setup(s) {
        const {code: e, shareList: a, copyHandle: i} = t();
        return (s, a) => (h(), b("div", Es, [ a[3] || (a[3] = k("img", {
            class: "rq-code",
            src: "https://oss.narralayer.ai/images/RQcode.svg"
        }, null, -1)), k("div", Ds, [ a[1] || (a[1] = k("h1", {
            class: "thank"
        }, " Thank you! ", -1)), a[2] || (a[2] = k("div", {
            class: "des"
        }, "We hoped you enjoy chatting with ZAI! Here’s your personal qr code! Share us with your friends! We are tracking your contributions! Stay tuned!", -1)), k("div", Ps, [ k("div", Fs, I(j(e)), 1), k("div", {
            onClick: a[0] || (a[0] = (...s) => j(i) && j(i)(...s)),
            class: "code-copy"
        }, [ k("img", {
            class: "copy-icon",
            src: j(hs)
        }, null, 8, Ks) ]) ]) ]) ]));
    }
}, [ [ "__scopeId", "data-v-7d38be0e" ] ]), Qs = {
    class: "page-inner"
}, Rs =  m({
    __name: "index",
    setup: s => (s, e) => (h(), b("div", null, [ T(M), k("div", Qs, [ T(Gs), T(qs), T(Os) ]), T(W) ]))
}, [ [ "__scopeId", "data-v-1f2272fa" ] ]), Us = {
    class: "chat"
}, Js = {
    __name: "index",
    setup(s) {
        const e = g();
        return (s, a) => (h(), b("div", Us, [ "pc" === j(e).media ? (h(), f(Is, {
            key: 0
        })) : S("", !0), "mobile" === j(e).media ? (h(), f(Rs, {
            key: 1
        })) : S("", !0) ]));
    }
};

export { Js as default };

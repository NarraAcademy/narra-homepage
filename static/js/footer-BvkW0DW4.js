import { h as e, N as o, m as s } from "./footer-_TZZ746-.js";

import { _ as a, i as l, b as n, M as i } from "./index-CFWyUmPD.js";

import { C as t, F as c, G as m, z as r, M as u, N as d, H as g, L as k, D as p, E as h, J as f, S as b, c as v, K as C, b as _ } from "./@vue-CLcIJuOQ.js";

const y = {
    class: "header"
}, S = {
    class: "header-inner"
}, T = [ "src" ], I = {
    class: "menu"
}, L = [ "onClick" ], H =  a( Object.assign({
    name: "header"
}, {
    __name: "header",
    setup(s) {
        const {openToggle: a, openHandle: i, pageLinks: b, menuOpen: v, pushHandle: C, onGoToHomePage: _, appState: H, logoSvg: M, addIcon: j, removeIcon: G, isLogin: O, permission: w} = e();
        return (e, s) => (t(), c("div", y, [ m("div", S, [ m("img", {
            onClick: s[0] || (s[0] = (...e) => r(_) && r(_)(...e)),
            class: "logo",
            src: r(M),
            alt: ""
        }, null, 8, T), m("div", I, [ (t(!0), c(u, null, d(r(b), (e => (t(), c("h3", {
            class: g([ "menu-item", {
                isTouchDevice: r(l)
            } ]),
            key: e.name,
            onClick: o => r(C)(e.route)
        }, k(e.name), 11, L)))), 128)), r(O) ? (t(), p(o, {
            key: 1
        })) : (t(), p(n, {
            key: 0
        }, {
            default: h((() => s[3] || (s[3] = [ m("h2", {
                class: "menu-item login"
            }, "Login", -1) ]))),
            _: 1
        })) ]), r(H).musicToggle ? (t(), c("div", {
            key: 0,
            class: "icon music-on",
            onClick: s[1] || (s[1] = e => r(H).setMusicToggle())
        })) : f("", !0), r(H).musicToggle ? f("", !0) : (t(), c("div", {
            key: 1,
            class: "icon music-off",
            onClick: s[2] || (s[2] = e => r(H).setMusicToggle())
        })) ]) ]));
    }
}), [ [ "__scopeId", "data-v-a7d37c4d" ] ]), M = {
    class: "footer"
}, j = {
    class: "footer-left"
}, G = {
    class: "share-container"
}, O = [ "onClick", "src" ], w = {
    class: "left-boottom"
}, D = {
    class: "left-boottom-col"
}, E = [ "onClick" ], x = [ "onClick" ], A =  a({
    __name: "footer",
    setup(e) {
        const {shareIcons: o, email: a, emailSubmiting: l, emailSubmiteShowSucces: n, emailSubmiteShowErrorMessage: f, submitDisabled: y, successOpen: S, onGoToShare: T, pageLinks: I, onGoToPageLink: L, submitEmail: H, pushHandle: A} = s();
        return (e, s) => {
            const a = b("router-link");
            return t(), c("div", null, [ v(i, {
                open: r(S),
                "onUpdate:open": s[0] || (s[0] = e => _(S) ? S.value = e : null),
                title: "Success"
            }, {
                default: h((() => s[1] || (s[1] = [ C(" Thank you for enrolling with the ZAI崽 Training Academy! 🏅"), m("br", null, null, -1), C("You'll be hearing from our team very soon. ") ]))),
                _: 1
            }, 8, [ "open" ]), m("div", M, [ m("div", j, [ s[2] || (s[2] = m("h1", {
                class: "footer-title"
            }, "Join our community", -1)), m("div", G, [ (t(!0), c(u, null, d(r(o), (e => (t(), 
            c("img", {
                onClick: o => r(T)(e.link),
                src: e.icon,
                class: "share-item"
            }, null, 8, O)))), 256)) ]), m("div", w, [ (t(!0), c(u, null, d(r(I), (e => (t(), 
            c("div", D, [ (t(!0), c(u, null, d(e, ((e, o) => (t(), c("h3", {
                onClick: o => r(L)(e.id),
                class: g([ "left-boottom-col-item", 0 === o ? "left-boottom-col-item-title" : "" ])
            }, [ e.blankRoute ? (t(), p(a, {
                key: 0,
                to: e.blankRoute,
                target: "_blank"
            }, {
                default: h((() => [ C(k(e.name), 1) ])),
                _: 2
            }, 1032, [ "to" ])) : (t(), c("span", {
                key: 1,
                onClick: o => r(A)(e.route)
            }, k(e.name), 9, x)) ], 10, E)))), 256)) ])))), 256)) ]) ]) ]) ]);
        };
    }
}, [ [ "__scopeId", "data-v-606be98f" ] ]);

export { H as C, A as a };

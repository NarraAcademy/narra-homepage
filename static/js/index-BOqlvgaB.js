import { u as e, b as a } from "./vue-router-CYC_ZM8h.js";

import { u as l, a as s, _ as i, b as t } from "./index-CFWyUmPD.js";

import { s as n } from "./store-D-KgEbVP.js";

import { r, u as c, w as o, V as u, C as d, F as m, O as p, c as g, E as v, z as C, J as b, T as K, G as y, R as h, K as V, M as w, N as A, L as z, D as U, H as F, W as x, p as f, X as W, Y as X } from "./@vue-CLcIJuOQ.js";

import { C as M, a as k } from "./footer-BvkW0DW4.js";

import { m as Z, l as B, a as S } from "./mobile-line-CsnfXv5x.js";

import { z as L, a as Y } from "./plus-icons-_imX99zj.js";

import { C as T, a as I } from "./footer-_TZZ746-.js";

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

const j = () => {
    const i = r(0);
    r("");
    const t = window.location.origin, u = e();
    a();
    const d = l(), m = s();
    return c((() => {
        var e, a;
        if (n.get("token", d.token)) i.value++, m.isLoaded = !0; else if (m.isLoaded) i.value++, 
        m.isLoaded = !0; else if (null == (e = u.query) ? void 0 : e.code) {
            const e = {
                redirect_uri: t,
                google_code: u.query.code,
                Invite_code: n.get("ic")
            };
            d.googleLoginHandle(e), i.value++, m.isLoaded = !0;
        } else ((null == (a = u.query) ? void 0 : a.ic) || n.get("ic")) && (n.set("ic", u.query.ic), 
        i.value++, m.isLoaded = !0);
    })), o((() => u), (() => {}), {
        deep: !0,
        immediate: !0
    }), {
        pageNum: i,
        endHandle: () => {
            i.value++, m.isLoaded = !0;
        },
        domainName: t
    };
}, Q = () => {
    const e = r(!1);
    a();
    const l = s();
    return {
        visible: e,
        pushChat: () => {
            l.toQuiz();
        }
    };
}, G = {
    id: "home"
}, P = {
    key: 0,
    class: "bg bg-left"
}, q = {
    key: 0,
    class: "bg bg-right"
}, H = {
    class: "page-inner"
}, O = {
    class: "page-home"
}, E = {
    key: 0,
    class: "mascot"
}, J =  Object.assign({
    name: "home"
}, {
    __name: "home",
    setup(e) {
        s();
        const {visible: a, pushChat: l} = Q();
        return (e, s) => {
            const i = u("inView");
            return d(), m("div", G, [ p((d(), m("div", null, [ g(K, {
                name: "right-in"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", P)) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", q)) : b("", !0) ])),
                _: 1
            }) ])), [ [ i, {
                callback: () => a.value = !0
            } ] ]), y("div", H, [ y("div", O, [ s[1] || (s[1] = y("div", {
                class: "text"
            }, [ y("span", {
                class: "text-1"
            }, "The first"), y("br"), y("span", {
                class: "text-2"
            }, "community-owned"), y("br"), y("span", {
                class: "yellow text-3"
            }, "AI edutainment") ], -1)), g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", E)) : b("", !0) ])),
                _: 1
            }) ]) ]), g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", {
                    key: 0,
                    class: "getStarted",
                    onClick: s[0] || (s[0] = (...e) => C(l) && C(l)(...e))
                }, "TAKE THE QUIZ!")) : b("", !0) ])),
                _: 1
            }) ]);
        };
    }
}), N =  i(J, [ [ "__scopeId", "data-v-9a55e3fe" ] ]), D = {
    id: "understanding"
}, R = {
    class: "zaigo-card"
}, _ = {
    key: 0,
    class: "zaigo-card-bg"
}, $ = {
    key: 0,
    class: "zaigo-card-text"
}, ee = {
    class: "btn-group"
}, ae = [ "src" ], le =  Object.assign({
    name: "understanding"
}, {
    __name: "understanding",
    setup(e) {
        const a = s(), {cardVisible: l, textVisible: i, isCanMint: t, mintHandle: n} = Z();
        return (e, s) => {
            const r = u("inView");
            return p((d(), m("div", D, [ p((d(), m("div", R, [ g(K, {
                name: "scale-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", _)) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", $, [ s[2] || (s[2] = y("div", {
                    class: "zaigo-card-title"
                }, "ZAI-GO", -1)), s[3] || (s[3] = y("div", {
                    class: "zaigo-card-subtitle"
                }, "PERSONALITY QUIZ", -1)), s[4] || (s[4] = y("div", {
                    class: "zaigo-card-des"
                }, "BERA, BTC, ETH, SOL, DOGE, or PEPE... which ZAI-GO would you vibe with? Connect your Wallet and take our ZAI-GO Personality Quiz to find out! ", -1)), y("div", ee, [ y("button", {
                    class: "take-quiz",
                    onClick: s[0] || (s[0] = e => C(a).toQuiz())
                }, "TAKE THE QUIZ! "), p(y("button", {
                    class: "take-quiz",
                    onClick: s[1] || (s[1] = e => C(n)())
                }, "Mint", 512), [ [ h, C(t) ] ]) ]) ])) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(l) ? (d(), m("img", {
                    key: 0,
                    src: C(l) ? C(L) : "",
                    alt: ""
                }, null, 8, ae)) : b("", !0) ])),
                _: 1
            }) ])), [ [ r, {
                callback: () => l.value = !0
            } ] ]) ])), [ [ r, {
                callback: () => i.value = !0
            } ] ]);
        };
    }
}), se =  i(le, [ [ "__scopeId", "data-v-b5715a2e" ] ]), ie = () => ({
    aiList: r([ {
        icon: "/narra-homepage/static/svg/partner%20(1)-DF9ywATf.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(2)-BkyeSi--.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(3)-DIh046cm.svg"
    }, {
        icon: "data:image/svg+xml,%3csvg%20width='167'%20height='47'%20viewBox='0%200%20167%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_21614_9199'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='167'%20height='47'%3e%3cpath%20d='M0%2023.5C0%2010.5213%2010.5213%200%2023.5%200H143.5C156.479%200%20167%2010.5213%20167%2023.5C167%2036.4787%20156.479%2047%20143.5%2047H23.5C10.5213%2047%200%2036.4787%200%2023.5Z'%20fill='url(%23paint0_linear_21614_9199)'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_21614_9199)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M93.4702%2023.5723L100.096%2031.7852C100.149%2031.85%20100.216%2031.9018%20100.292%2031.9368C100.369%2031.9718%20100.452%2031.989%20100.536%2031.9871H104.246C104.338%2031.9968%20104.431%2031.9796%20104.513%2031.9377C104.596%2031.8957%20104.665%2031.8308%20104.711%2031.7507C104.757%2031.6706%20104.779%2031.5789%20104.774%2031.4866C104.769%2031.3944%20104.737%2031.3055%20104.683%2031.2308L98.5139%2023.5723C98.3629%2023.3858%2098.2842%2023.1514%2098.2925%2022.9118C98.3007%2022.6723%2098.3954%2022.4437%2098.5589%2022.2681L104.567%2015.7855C104.63%2015.7131%20104.67%2015.6232%20104.681%2015.5278C104.692%2015.4324%20104.673%2015.336%20104.628%2015.2513C104.583%2015.1665%20104.513%2015.0975%20104.427%2015.0533C104.342%2015.0091%20104.245%2014.9918%20104.149%2015.0037H100.513C100.435%2015.0025%20100.358%2015.0176%20100.286%2015.0479C100.214%2015.0783%20100.149%2015.1232%20100.096%2015.1799L93.5152%2022.2649C93.352%2022.4414%2093.2577%2022.6704%2093.2495%2022.9103C93.2412%2023.1502%2093.3195%2023.3851%2093.4702%2023.5723ZM66.2744%2015.0037H63.9277C63.5106%2015.0037%2063.1723%2015.3409%2063.1723%2015.7568V31.2342C63.1723%2031.6501%2063.5106%2031.9872%2063.9277%2031.9872H66.2744C66.6916%2031.9872%2067.0299%2031.6501%2067.0299%2031.2342V15.7568C67.0299%2015.3409%2066.6916%2015.0037%2066.2744%2015.0037ZM122%2024.1108V22.6208C122%2022.1925%20121.652%2021.8453%20121.222%2021.8453H111.527C111.097%2021.8453%20110.749%2022.1925%20110.749%2022.6208V24.1108C110.749%2024.5391%20111.097%2024.8863%20111.527%2024.8863H121.222C121.652%2024.8863%20122%2024.5391%20122%2024.1108ZM122%2029.7184V31.2085C122%2031.6368%20121.652%2031.9839%20121.222%2031.9839H111.527C111.097%2031.9839%20110.749%2031.6368%20110.749%2031.2085V29.7184C110.749%2029.2902%20111.097%2028.943%20111.527%2028.943H121.222C121.652%2028.943%20122%2029.2902%20122%2029.7184ZM121.997%2017.2692V15.7792C121.997%2015.3509%20121.649%2015.0037%20121.219%2015.0037H111.524C111.094%2015.0037%20110.746%2015.3509%20110.746%2015.7792V17.2692C110.746%2017.6975%20111.094%2018.0447%20111.524%2018.0447H121.219C121.649%2018.0447%20121.997%2017.6975%20121.997%2017.2692ZM81.6693%2015.0037C84.0481%2015.0037%2087.2274%2016.6604%2087.282%2022.5373V22.5662V31.3463C87.282%2031.5163%2087.2144%2031.6793%2087.0937%2031.7995C86.9732%2031.9197%2086.8097%2031.9872%2086.6392%2031.9872H84.0674C83.8969%2031.9872%2083.7334%2031.9197%2083.6128%2031.7995C83.4923%2031.6793%2083.4245%2031.5163%2083.4245%2031.3463V23.3352C83.4245%2018.849%2081.2128%2018.849%2080.2099%2018.849H77.9596C77.7891%2018.849%2077.6256%2018.9166%2077.505%2019.0367C77.3844%2019.1569%2077.3167%2019.3199%2077.3167%2019.4899V31.3463C77.3167%2031.5163%2077.249%2031.6793%2077.1284%2031.7995C77.0078%2031.9197%2076.8443%2031.9872%2076.6738%2031.9872H74.1021C73.9316%2031.9872%2073.768%2031.9197%2073.6475%2031.7995C73.5269%2031.6793%2073.4591%2031.5163%2073.4591%2031.3463V17.2116C73.4587%2016.9215%2073.5157%2016.6342%2073.6269%2016.3662C73.7381%2016.0981%2073.9012%2015.8545%2074.107%2015.6494C74.3126%2015.4443%2074.557%2015.2817%2074.8259%2015.1709C75.0949%2015.0601%2075.383%2015.0033%2075.674%2015.0037H81.6693ZM48.5801%2015.2675C48.4107%2015.0986%2048.181%2015.0037%2047.9414%2015.0037H45.9033C45.6637%2015.0037%2045.434%2015.0986%2045.2646%2015.2675C45.0952%2015.4363%2045%2015.6653%2045%2015.9042V24.5882C45%2028.8821%2047.0895%2032%2052.4322%2032H56.023C56.2625%2032%2056.4923%2031.9051%2056.6617%2031.7362C56.8311%2031.5674%2056.9263%2031.3384%2056.9263%2031.0995V28.8276C56.9263%2028.5888%2056.8311%2028.3598%2056.6617%2028.1909C56.4923%2028.022%2056.2625%2027.9271%2056.023%2027.9271H52.6412C49.4876%2027.9271%2048.8447%2026.6261%2048.8447%2024.5561V15.9042C48.8447%2015.6653%2048.7495%2015.4363%2048.5801%2015.2675Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_21614_9199'%20x1='80.732'%20y1='0'%20x2='80.732'%20y2='47'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFE169'/%3e%3cstop%20offset='0.99'%20stop-color='%23F7B72E'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(5)-BpeH_ttP.svg"
    }, {
        icon: "data:image/svg+xml,%3csvg%20width='167'%20height='47'%20viewBox='0%200%20167%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_21614_9218'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='167'%20height='47'%3e%3cpath%20d='M0%2023.5C0%2010.5213%2010.5213%200%2023.5%200H143.5C156.479%200%20167%2010.5213%20167%2023.5C167%2036.4787%20156.479%2047%20143.5%2047H23.5C10.5213%2047%200%2036.4787%200%2023.5Z'%20fill='url(%23paint0_linear_21614_9218)'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_21614_9218)'%3e%3cpath%20d='M55.6227%2027.2022L64.5485%2012H41.7021L49.3213%2020.3195L51.5735%2016.4423H55.9829L51.8268%2023.1141L55.6227%2027.2022Z'%20fill='black'/%3e%3cpath%20d='M43.5996%2019.6636L35%2033.9593L56.7302%2033.9999L49.8305%2026.5099L47.823%2030.0218H43.4135L47.2654%2023.6934L43.5996%2019.6636Z'%20fill='black'/%3e%3cpath%20d='M69.7068%2029.5719H67.6426L70.4636%2024.7405L67.6701%2019.9912H69.7342L71.647%2023.4539H71.8948L73.8075%2019.9912H75.8717L73.0782%2024.7405L75.8992%2029.5719H73.835L71.8948%2026.0271H71.647L69.7068%2029.5719Z'%20fill='black'/%3e%3cpath%20d='M79.4776%2029.5719H77.6611V19.9912H81.6243C83.4407%2019.9912%2084.7068%2021.1409%2084.7068%2022.9338V23.1255C84.7068%2024.9184%2083.3857%2026.0681%2081.6243%2026.0681H79.4776V29.5719ZM79.4776%2021.6336V24.4257H81.4454C82.2986%2024.4257%2082.8903%2023.9193%2082.8903%2023.0981V22.9612C82.8903%2022.14%2082.3123%2021.6336%2081.4454%2021.6336H79.4776Z'%20fill='black'/%3e%3cpath%20d='M87.7652%2029.5709H86.0312V22.7823H87.7376V23.5487H87.9853C88.178%2023.0013%2088.6734%2022.7549%2089.3066%2022.7549H90.1319V24.2878H89.2791C88.3981%2024.2878%2087.7652%2024.7532%2087.7652%2025.7112V29.5709Z'%20fill='black'/%3e%3cpath%20d='M94.7412%2029.7625C92.7044%2029.7625%2091.1631%2028.4759%2091.1631%2026.286V26.067C91.1631%2023.8771%2092.7044%2022.5906%2094.7412%2022.5906C96.7775%2022.5906%2098.3188%2023.8771%2098.3188%2026.067V26.286C98.3188%2028.4759%2096.7775%2029.7625%2094.7412%2029.7625ZM94.7412%2028.2295C95.8006%2028.2295%2096.585%2027.5178%2096.585%2026.2449V26.1081C96.585%2024.8352%2095.8146%2024.1235%2094.7412%2024.1235C93.6678%2024.1235%2092.8969%2024.8352%2092.8969%2026.1081V26.2449C92.8969%2027.5178%2093.6813%2028.2295%2094.7412%2028.2295Z'%20fill='black'/%3e%3cpath%20d='M104.495%2029.5707H102.569C101.66%2029.5707%20101.055%2028.9685%20101.055%2028.0378V24.2055H99.3486V22.7821H101.055V20.6743H102.789V22.7821H104.661V24.2055H102.789V27.7367C102.789%2028.0104%20102.926%2028.1473%20103.174%2028.1473H104.495V29.5707Z'%20fill='black'/%3e%3cpath%20d='M109.486%2029.7625C107.45%2029.7625%20105.908%2028.4759%20105.908%2026.286V26.067C105.908%2023.8771%20107.45%2022.5906%20109.486%2022.5906C111.523%2022.5906%20113.064%2023.8771%20113.064%2026.067V26.286C113.064%2028.4759%20111.523%2029.7625%20109.486%2029.7625ZM109.486%2028.2295C110.546%2028.2295%20111.33%2027.5178%20111.33%2026.2449V26.1081C111.33%2024.8352%20110.559%2024.1235%20109.486%2024.1235C108.412%2024.1235%20107.642%2024.8352%20107.642%2026.1081V26.2449C107.642%2027.5178%20108.426%2028.2295%20109.486%2028.2295Z'%20fill='black'/%3e%3cpath%20d='M117.905%2029.7625C115.924%2029.7625%20114.368%2028.4896%20114.368%2026.2723V26.0807C114.368%2023.8634%20115.924%2022.5906%20117.905%2022.5906C119.859%2022.5906%20121.001%2023.7129%20121.29%2025.2185L119.611%2025.5743C119.501%2024.7531%20118.992%2024.1235%20117.946%2024.1235C116.9%2024.1235%20116.102%2024.8216%20116.102%2026.1081V26.2449C116.102%2027.5315%20116.9%2028.2295%20117.946%2028.2295C118.992%2028.2295%20119.501%2027.641%20119.653%2026.7651L121.331%2027.162C120.973%2028.6264%20119.859%2029.7625%20117.905%2029.7625Z'%20fill='black'/%3e%3cpath%20d='M126.02%2029.7625C123.984%2029.7625%20122.442%2028.4759%20122.442%2026.286V26.067C122.442%2023.8771%20123.984%2022.5906%20126.02%2022.5906C128.057%2022.5906%20129.598%2023.8771%20129.598%2026.067V26.286C129.598%2028.4759%20128.057%2029.7625%20126.02%2029.7625ZM126.02%2028.2295C127.08%2028.2295%20127.864%2027.5178%20127.864%2026.2449V26.1081C127.864%2024.8352%20127.093%2024.1235%20126.02%2024.1235C124.947%2024.1235%20124.176%2024.8352%20124.176%2026.1081V26.2449C124.176%2027.5178%20124.961%2028.2295%20126.02%2028.2295Z'%20fill='black'/%3e%3cpath%20d='M132.967%2029.5719H131.232V19.9912H132.967V29.5719Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_21614_9218'%20x1='80.732'%20y1='0'%20x2='80.732'%20y2='47'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFE169'/%3e%3cstop%20offset='0.99'%20stop-color='%23F7B72E'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(7)-DFtH_PIe.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(8)-BGe7xio5.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(9)-BeyULKqm.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(10)-D0MptJoj.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(11)-BDsT2BcQ.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(12)-DKPoD-pt.svg"
    }, {
        icon: "/narra-homepage/static/svg/partner%20(13)-kDFFRBfL.svg"
    } ]),
    visible: r(!1),
    visible1: r(!1),
    visible2: r(!1),
    visible3: r(!1),
    visible4: r(!1),
    visible5: r(!1)
}), te = {
    id: "ai"
}, ne = {
    key: 0,
    class: "subtitle"
}, re = {
    key: 0,
    class: "list"
}, ce = [ "src" ], oe = [ "src" ], ue = [ "src" ], de = [ "src" ], me = [ "src" ], pe = [ "src" ], ge = [ "src" ], ve = [ "src" ], Ce = [ "src" ], be = [ "src" ], Ke =  Object.assign({
    name: "ai"
}, {
    __name: "ai",
    setup(e) {
        const {aiList: a, visible: l} = ie();
        return (e, s) => {
            const i = u("inView");
            return p((d(), m("div", te, [ g(K, {
                name: "scale-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", ne, s[0] || (s[0] = [ V(" Shaping the future of cryptographic painting AI, Narra "), y("br", null, null, -1), V("is unstoppable ") ]))) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", re, [ y("ul", null, [ (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, ce), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, oe), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, ue), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, de), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, me), V(z(e.text), 1) ])))), 128)) ]), y("ul", null, [ (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, pe), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, ge), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, ve), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, Ce), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, be), V(z(e.text), 1) ])))), 128)) ]) ])) : b("", !0) ])),
                _: 1
            }) ])), [ [ i, {
                callback: () => l.value = !0
            } ] ]);
        };
    }
}), ye =  i(Ke, [ [ "__scopeId", "data-v-79f9e722" ] ]), he = "/narra-homepage/static/svg/Speech%20Bubble-1-VekZxuz3.svg", Ve = "/narra-homepage/static/svg/Speech%20Bubble-2-B0FB0pCp.svg", we = "/narra-homepage/static/svg/Speech%20Bubble-3-CS_6eL5T.svg", Ae = "/narra-homepage/static/svg/Speech%20Bubble-4-B4yrLzNy.svg", ze = "/narra-homepage/static/svg/Speech%20Bubble-5-BQiAf_y-.svg", Ue = "/narra-homepage/static/svg/Speech%20Bubble-6-rJXSzF45.svg", Fe = "data:image/png;base64,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", xe = "data:image/png;base64,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", fe = "data:image/png;base64,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", We = "data:image/png;base64,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", Xe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6AAAABICAYAAADoOpjDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxZSURBVHgB7d3RcRNnFIbhX4ICKMEMTDK5QnTgdAAdKBXEVCCJBiAVkFQAHZBUEAOXCUElMFwS0OZfy2QgrGNbll7tJ73PbWYywJwB7357zjco4d5MRjeaYfN7U8pBCdI05dfb0xffl0B/TkbjwbB5UsIMy+Lw5uTVbyXQX7M7b5xxTuqMf1gs7n87e/WsBEqc8Wp+a/LiZglUZ/xenfGnJUxTmvHtyctfSqA648/rjB+WLLEz/sdkdDgcNs9LmOQZf/3wztP6G7hXsszfLQZ3786O35Yw9RnoYDFs3pQ4zdGwhFsMyzTxh5a/m8EPJVA77PUv9EclTdNMUx8+X89GzjjodMYnJU2d8dSHz9AZf/t+MYh8wRL89/jj2B/MlzN+WMIkz/i1wJeI9eHt5+QZD3z4PJnx0IfPNoCLe8HSzvitycufoh9A25Si/k5+LGHq263pd7PjeQnUDnv9R/RGyTK/NX05K4HalKL+qcc9DIXP+JPIJC50xus/oqPQGT9KnfHFtWaSOOPvmmHqjB8kznhxxmnz983AGSc1uT+r1Bl/lDzjsQ+gwSlF+hvcg5LFlIJmSoFLnvEm8DPQ6JTi4eio/vrHJYwpBew0pSiBUmf842JwPzmcKGHaNaHgcGKcOOPDshh/mvHYB9DUlCL4DW5kSlGCkzhTCpYpBc+UgnUy403mCkXsjIeuCSXP+KDJTOK+mR0fl0D1xe1j14Q4yWtCn6/CRT6AJqcUqUvOqSmFb3BZphSw4BlPfYNrSsGKTykC14Q+TynSuCbEchWO1/48vgtrQnEPoH5nzjOlYJlS8EwpWMnHzIJTCo+ZgXYlpUjimhDLVTje6YyPSpbOGb9egqSmFMs6iuTvzJtxCbN8g/tqXgI546zUN7gfFosHyTNuSsHJPmb2Yl4CecyM1Vau5B4zy5zx9ghO/Q0clCzRa0KL2FW4r2c8KgG1coVl5QrPlIJl5QrPlILlMTNe6JpQ9IxbucKycoW1i2tCMQ+gfmfOM6VgWbnCM6VgWbnC85gZK/iYmWtCrDrjgwclkKtwvPTKlS4RD6B+Z84zpWCZUvCsXGFZucLzmBnLY2Y8Z5znMTPWLlSudP/3AMEpRerbLStXYKYULCtXeB4zY3nMjOcxM1Zy5UrqjFu5wtrlY2a9fwA1pWBZucLzDS7LlIJnMTzPlIJl5QovcU2o/nqPnXGWlSu4C60J9foB1O/MeaYULFMKnikFy2J4nikFy8oVXuzBvvpSqwRyFY63S5UrXXpbwxKbUgzKs5pSWLkCMqVgWbnCs3IFZzE8LLxyZWdTij4KrlyJnfHUypXgVbidqlzp0tsENDal+Jh71cxieJaVKywrV3geM2OZUvB2PaXoGytXeMmVKyXQvqwJ9TIB9Q0uz5SCZTE8z8oVlsXwPIvhWfuQUvRNuyaUOeO54UTkjDemzbBLrwn1LgH1DS7PlIJl5QrPY2YsUwqexfAsj5nxPNjHi12Fs3IFtcoxs949gFq5wrIYnmflCsvKFZ7HzFge7OPtYjF8n1m5wks9ZuYqHGzFY2a9egA1pWBZDM/zDS7LlIJn5QrPyhXWPqUUfWHlCsvKFd6+rcL15gHUN7g8UwqWlSs8K1dYVq7wrFxhWbnCs3KF5Socbx9X4XpxhMjKFZ6VKzwrV1hWrvA8ZsbyYB/PyhWWlSs8K1dY7SrcPh4z60UCauUKy8oVnpUrLCtXeB4zY5lS8KxcYXnMjGflCit5Fe6qa0JbT0B9g8szpWBZucKzcoVl5QrPyhWWlSs8K1dYVq7wUmd8HWtCW01AfYPLM6VgWbnCCz1mZkpBM6XAecwM5jEznDMOs3IFt65jZlt9ALVyhZWdUnjoCWTlCs5jZrDolMKDfSwrV1hWrvBchWPtW+VKl609gFq5wjKl4PkGl2VKwXPGeaYULCtXeFausKxc4bkKt6UHUN/g8qxcYVm5wrNyhWVKwbMYnmXlCs/KFZarcDxX4ZbwI0RWrvCWKYWVKyQrV1ipb3CXKYWVK5Q2pXDGWVau4DxmBvNgH87KFdz6ZxxPQP3OnGUxPM9ieJYpBc+UgmVKwbNyheWaEM9VONY+V650QRNQi+F5fmfOMqXgWbnCMqXgWQzPsnKFZ+UKy8oV3j5XrnTBElCL4Xl+Z84ypeBZucIypeBZDM/ymBnPY2YsK1d4HjPr+n9DTClYVq7wUk/1W7lC85gZzMoVmpUrNI+Z0TzYR7NyhbbhNSHkAdTvzFmmFDyL4VmmFDxTCp4pBcuUgmflCsvKFZ6rcN02/gAanFIkJ3FWroBMKXimFCxTCp6VKyyPmfE8ZsZyTYjnKtzZNnqEKDqlmCanFFaukKxcYS1TirwZt3KFZeUKz8oVnGtCMA/24WKPmaXOOHXMbKMJqMXwLCtXeFausEwpeKYULFMKnpUrrNw1IQ/20ZxxGLgmtLEE1MoVnt+Zs0wpeKYULFMKnikFy8oVXm7lSu7BvtAZP3LGUWgAt5EE1MoVnt+Zs0wpeKYULI+Z8UwpWB4z43nMjOWM81JnnF6F28gDqJUrLCtXeFausKxc4Vm5wvKYGc9jZiyPmfFchWO5Cndxa/8Ed/kGtzksYZJTitMH/ixtSjFNrlxprFyBeMyMl3rMzBmHtZUrE4+ZkTxmxoo/2OcqHMpVuItbawJq5QrPlIJlSsEzpWCZUvAshmdZDM+LPWbmwT6Wq3C0ra0JrS0BNaXgmVLwTClYphQ8K1dYHjPjmVKwPGbGcxWOlb0Kt50ZX1sC6nfmLFMKnsXwLCtXeFausDxmxjOlYFm5wvOYGcuDfatZSwLqd+Y8UwqWKQXPyhWWKQXPyhVW/UFxZOUKy8oVlpUrPCtXVnPlBNTvzHmmFCxTCp6VKyzf4PJMKVinB/ueljTWUeA8ZgZzxnF05UqXKz+A+p05Kzul8AgOKLoY3soVlsfMWB4z46XOePKaUJ2XyENPHjNDuQpH20LlSpcrfYIbWrkSnVJYucJKrlwpgTxmxvOYGcvKFZ7HzHiJM27lCs9VOFxvAriVE1BTCp4pBcuUgmflCstjZjwrV1hWrvCsXGG5CsfzmNnVrZSAmlLwTCl4phQsUwqexfAsj5nxTClYdcbvecyM5Socy8qV9VgpATWlYJlS8KxcYVm5wjOlYHnMjGdKwQpOm61cgXmwD9bDg32XTkBNKXhWrrBMKXhWrrCsXOFZucKycoVn5QrLyhWelSvrc6kE1JSCZ+UKy5SCZ+UKy2J4nikFy8oVnpUrLCtXeFaurNelHkBNKVhWrvBMKVgeM+PlHjPLTSlCZ/zIGUdZuULzmBnNVThaTypXulz4AdSUguV35jxTCpZvcHmmFCxnnLdcEzKlIKVWrgQfehrnVq7kzrjHzNbrQg+gphQ8K1dYVq7wPGbG8pgZz5SClVy50teU4jweM2NZucLzmNlmnHuEyMoVnpUrLIvheR4z41m5wrIYnmdKwbJyhWflCsvKlc05NwE1pWCZUvAshmdZDM8zpWCZUvBMKVhWrvBcE2K5CrdZ/5uAmlLwrFxhWbnCM6VgWbnCM6VgpVauJKQUZ7FyhWXlCs/Klc06MwG1coVn5QrLyhWeKQXLyhWeKQUruXIldsY9ZobymBnPypXNO/MB1MoVlpUrPCtXWG1K4TEzlpUrLCtXeFausKxc4XnMjGXlCqPzAdTKFZbfmfNMKVgWw/NMKVimFDwrV3hWrrBS14SWq3BWroDiArivHkCtXOFZucKycoVnSsEypeCZUrCsXOF5zIzlKhzPNSHOF0eIrFzhWbnCsnKF5zEzXmpK4TEzlpUrOCtXYB4zw7kKB0s9ZvZFAmrlCsvKFZ6VKywrV3imFCwrV3imFCwrV3iha0KuwtGCV+H+TUBNKXgWw7OsXOGZUrBMKXimFCxTCp6VK6zgypXYv8dzZzwznGidJKB+Z84zpWAlz7iVKyhTCpopBc6UAmblCs41IZgH+3CpM/7JyQOolSssK1d4phQsK1d4Vq6wrFzhecyM5TEznsfMWK7Cbc/QyhWWxfA8UwqWlSs83+CyTCl4FsPzrFxhWbnCi1yFK+U4dcY/NzSlYJlSsEwpeKYULFMKnikFy2J4Xn1x+9g1IY6rcLzYVbj6UqvsgOsljZUrOFMKWPCMe8yMZ+UKy8oVnsfMWB7s47kmxMpehcuc8f8aliy+waWZUtAshqf5BpdmSkGzcoWWfswsccZdE2K5CkcLPmbW5R887MVEmCijgQAAAABJRU5ErkJggg==", Me = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdEAAAAkCAYAAADW6wCFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYCSURBVHgB7Z1PVhRnFMXfV8Zk6hLIDnQineOkSMSToe6ArCCyAsgKMCsgWQHOwUNlkGBGuoOwBKcGu7/U1x20y3eRpqlb9NP7m6jHQ/Pvvrqvq+49X7IBeLmx+az942cjkPPZt981zakROKk3t1KyfSOQct5db45+MQIn9Y9rlsavktkd65tsv42aw5+MxMuNR/+0n2TN+ue01coGSytMjY+z3XvQHL42ApE1ntLkmKKVnJtRc7RhJKJq/OT7R7vt73THCFRm9f3jwz+MwN/1D49zqg6MQNF4ZWTKkBrp4lK+AZ6BFiOyPWOQ0nPWxWX28pNjioGWIbUz2tddhpR0cSlDusVctoyocZ6BFiNKlItiMSKmxqs0PqAZkb2jLYlMjac8IV4PH9YsAy0aZxlo0XhOtzjX8VYrReNUE408pFQjmvy7bSTIQ7rNGtKyLUYdUprG/x9SI5HSeD+qEWWzu0aAaUR/1pt3iRp/tt68+N0IzDReUe5WGFvj1XiHofFWf2/Ku/7yd6qJRh5SbYtdZrfmXjw3AkNsi0YiVZM99pAymGncaiPA1Xh7QQ9qRLdSotxStJnGaYv5EEbE4K/64dP2k2wZgZTtvcZpJhp1SLUtQsJviwymGs/5sRGo8uSpjKjLq7q+M3sOSuH0a3sXTuOFz8GI+qZovEqJs5jPciG/nv+TYqLaFiEht8WChtTD1HgZUhmR5211e4+p8XtN88YITJ+ZkzTevi532aI9jusaUd8wNf5xLqR3E9W2iIlqROwhHWpb7Jshh7RP3qbbuzKiLmEDigNoXAHFLiig+JX1jIbUU4Z0RB3SsbbFLtQhndVZOBofZ3vyIGiKeER9RzTZmd6g75sBAooW1Ygyz4juEwOKmRlQbI5cQLHXd6KqswBUZ4GozuJRnQWjOouHmZRXnQVyYS6kNxNVnQUSts7CNCLVWSCqswBUZ/Gwk/JxA4o3k5Tv7XbubEhtzfqHvy1mXp1lFHVbBLct+mC2LU7FbgT4Q5o5Q2r8FHFtBLgaL+GtcciAYruYH8TUePvzzv1fxwfSOC0pv/4JjffyTlR1Fo/qLBjVWTyqs3gUUMQoKe+56aT8tU1UdRaIys8ADSlAdRZI1DpL5KS86iyOhXIh1zJRbYsYGZFHdRbI6Td2Rlu2lJT3sAOKkY0oYkCRnZRfRCvXMlGVnz0aUozqLB66xoMm5WkaV1IeoqS85ypJ+aVNVOVngIYUoiH1xF22AtdZdPCDI3KdZVWS8kuZqOosENVZAKqzeFr9vVadxRO1zhL54AfVWboskwtZquJStsWsOksH1Vk8oessxMrWJJ89MRKqs3gGqLPsq87ygc+5zgI/xq6Iys8e1VkwoessOiaswwBGRHtmroMfPErKA5ZMyl/JRFVngajOAtCQAlRngciIAKqzQFYxoLiwiWpIMTIiT9Q6C1vjqrN4lJQHqM4CWYU6C2JhE1WdBaBtEaJjwjyqs3iUlIcoKQ9Y5YMfFgoWBT8mLHLBX0cozcE8QknHhAEiHxPGTsrzAorbCih2oWq8h1zIpSaqIYXIiAA3cZZfHzA1PkydRUn5eSIn5bl1lqgp4tU++OFSE1WdxaNt0aM6C0R1FkDspLzqLPPkL6zOAl/nU/+p8rNH5WeM6iwe1Vk8SspjFFD0REnKX2iisTtnMqJ5ItdZoh4TpjoLRkYEIAcUlZR39Po4DpqohhSjbdHDHtKoRqQ6i0d1FoCS8hCmxq9TZ0FAE9VZfgDVWSAaUo/qLB7VWSCqswBWuc6CcCaqbRGg8jNkVcvPl6HTWQA6+AES9XQWHfwAoTyO66RzVWeBqM4C4G+LR71ui+eozgJRnQUQOaCopHwXZoq4806UepYfe0h1ll8HbYsY5jFh9DpLwBSxDn6AKKAIYGqcGVB8b6Kqs3hUZ8Gs0ll+V0F1Fo/qLBgl5T2qs2CmJqo6C0TbIoBdftaQdlFSHiMj8qjOAqEm5QsV+xtQ+dmjbRGgOgtEBz94FFDEKCnvYWr8nIo9pEZCdRaAhhSiXqVHdZaLXl51lo+JXGdhfd3z/Adu4dxCJT0YeQAAAABJRU5ErkJggg==", ke = "/narra-homepage/static/png/avatar-1-C6zOGIgc.png", Ze = "/narra-homepage/static/png/avatar-2-DC_Dub6l.png", Be = "/narra-homepage/static/png/avatar-3-BH4AZ-Mb.png", Se = "/narra-homepage/static/png/avatar-4-BaJrBD9-.png", Le = "/narra-homepage/static/png/avatar-5-Dv7dnir9.png", Ye = "/narra-homepage/static/png/Zai%20Selector-1-CiYq1tHW.png", Te = "/narra-homepage/static/png/Zai%20Selector-2-C_T6_nA-.png", Ie = "/narra-homepage/static/png/Zai%20Selector-3-DyYaw8Gj.png", je = "/narra-homepage/static/png/Zai%20Selector-4-xJkPB6v5.png", Qe = "/narra-homepage/static/png/Zai%20Selector-5-odZHwwPR.png", Ge = "/narra-homepage/static/png/Zai%20Selector-6-Sbynf6nl.png", Pe = "/narra-homepage/static/png/zaiSelector-active-1-cGQDTOF-.png", qe = "/narra-homepage/static/png/zaiSelector-active-2-Cp0VlBDu.png", He = "/narra-homepage/static/png/zaiSelector-active-3-r6STH_s1.png", Oe = "/narra-homepage/static/png/zaiSelector-active-4-B4ziyOPx.png", Ee = "/narra-homepage/static/png/zaiSelector-active-5-BOaeBpFX.png", Je = "/narra-homepage/static/png/zaiSelector-active-6-Da5A4ekR.png", Ne = "https://oss.narralayer.ai/images/zaiGo/", De = () => ({
    cardList: [ {
        id: 6,
        color: "#b5432b ",
        des: "Oh, I’m sorry. I find it hard to remember the names of snacks. Are you a snack? Furthermore, ooga booga.",
        speechBubble: Ue,
        shapes: Me,
        avatar: Le,
        zaiSelector: Ge,
        zaiSelectorActive: Je
    }, {
        id: 3,
        color: "#F9490F",
        des: "Listen up: we’re going to be the first ZAI崽 and human partnership ever. You in?",
        speechBubble: we,
        shapes: fe,
        avatar: Be,
        zaiSelector: Ie,
        zaiSelectorActive: He
    }, {
        id: 4,
        color: "#47B6F4",
        des: "By my calculations, adopting me will most likely result in an uptick in your personal fulfilment and happiness.",
        speechBubble: Ae,
        shapes: We,
        avatar: Se,
        zaiSelector: je,
        zaiSelectorActive: Oe
    }, {
        id: 2,
        color: "#AB4FEA",
        des: "Don’t be mistaken: I’m not asking you to adopt me because I like you or anything, okay?",
        speechBubble: Ve,
        shapes: xe,
        avatar: Ze,
        zaiSelector: Te,
        zaiSelectorActive: qe
    }, {
        id: 5,
        color: "#DD812F",
        des: "OMGOMGOMGOMG YOU’RE ADOPTING ME AREN’T YOU? I CAN SEE IT IN YOUR EYES (人◕ω◕)",
        speechBubble: ze,
        shapes: Xe,
        avatar: Le,
        zaiSelector: Qe,
        zaiSelectorActive: Ee
    }, {
        id: 1,
        color: "#7F8929",
        des: "Supppp my guy! Talk to me whenever, k?",
        speechBubble: he,
        shapes: Fe,
        avatar: ke,
        zaiSelector: Ye,
        zaiSelectorActive: Pe
    } ].map(((e, a) => ({
        ...e,
        // avatarActive:zaiGoBaseUrl+'avatar-active-'+(index+1)+'.png',
        // avatarDefault:zaiGoBaseUrl+'avatar-default-'+(index+1)+'.png',
        // avatarMobileActive:zaiGoBaseUrl+'avatar-mobile-active-'+(index+1)+'.png',
        // avatarMobileDefault:zaiGoBaseUrl+'avatar-mobile-default-'+(index+1)+'.png',
        cardActive: Ne + "card-active-" + e.id + ".png",
        cardDefault: Ne + "card-default (" + e.id + ").png",
        figure: Ne + "figure-" + e.id + ".png",
        figureBg: Ne + "bg (" + e.id + ").png"
    }))),
    visible: r(!1),
    visible1: r(!1),
    visible2: r(!1),
    visible3: r(!1),
    visible4: r(!1),
    visible5: r(!1)
}), Re = {
    class: "swiper-container"
}, _e = [ "onClick" ], $e = [ "src" ], ea = [ "src" ], aa =  Object.assign({
    name: "swiperCard"
}, {
    __name: "swiperCardV2",
    props: [ "activeId" ],
    emits: [ "update:activeId" ],
    setup(e, {emit: a}) {
        const l = a, s = e, {cardList: i} = De();
        return (e, a) => (d(), m("div", Re, [ (d(!0), m(w, null, A(C(i), (e => (d(), m("div", {
            class: "card",
            onClick: a => (e => {
                l("update:activeId", e.id);
            })(e),
            key: e.name
        }, [ p(y("img", {
            src: e.zaiSelectorActive,
            alt: ""
        }, null, 8, $e), [ [ h, s.activeId === e.id ] ]), p(y("img", {
            src: e.zaiSelector,
            alt: ""
        }, null, 8, ea), [ [ h, s.activeId !== e.id ] ]) ], 8, _e)))), 128)) ]));
    }
}), la =  i(aa, [ [ "__scopeId", "data-v-011afaec" ] ]), sa = {
    id: "zaigo"
}, ia = {
    key: 0,
    class: "title"
}, ta = {
    key: 0,
    class: "des"
}, na = {
    key: 0,
    class: "subtitle"
}, ra = {
    key: 0,
    class: "count"
}, ca = {
    key: 0,
    class: "page-inner"
}, oa = [ "src" ], ua = {
    class: "center"
}, da = {
    key: 0,
    class: "speechBubble"
}, ma = [ "src" ], pa = [ "src" ], ga = [ "src" ], va = [ "src" ], Ca = [ "src" ], ba =  i({
    __name: "zaigo",
    setup(e) {
        const {cardList: a, visible: l, visible1: i, visible2: t, visible3: n} = De(), c = r(6);
        r("");
        const o = r(!1);
        return s(), (e, s) => {
            const r = u("inView");
            return p((d(), m("div", sa, [ g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(i) ? p((d(), m("div", ia, s[2] || (s[2] = [ V(" A new hero has arrived! ") ]))), [ [ r, {
                    callback: () => t.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(t) ? p((d(), m("div", ta, s[3] || (s[3] = [ V(" The big bad bear from the Great White North, BERA’s dry, skewering wit tends to whittle anyone who isn’t already pissing their pants from his towering stature (dude’s 2 friggin meters tall!). But dig a little deeper and you’ll find warm and fuzzy. Just be warned: if you poke the bear, you get the claws. ") ]))), [ [ r, {
                    callback: () => n.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(n) ? p((d(), m("div", na, s[4] || (s[4] = [ V(" Begin your Narra journey! ") ]))), [ [ r, {
                    callback: () => l.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", ra, s[5] || (s[5] = [ y("div", {
                    class: "count-item"
                }, [ y("div", {
                    class: "count-item-name"
                }, " Narra Training Day "), y("div", {
                    class: "count-item-value"
                }, " ****** ") ], -1), y("div", {
                    class: "count-item"
                }, [ y("div", {
                    class: "count-item-name"
                }, " Trainers Enrolled "), y("div", {
                    class: "count-item-value"
                }, " ****** ") ], -1), y("div", {
                    class: "count-item"
                }, [ y("div", {
                    class: "count-item-name"
                }, " ZAI In Training "), y("div", {
                    class: "count-item-value"
                }, " ****** ") ], -1) ]))) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "opacity"
            }, {
                default: v((() => {
                    var e;
                    return [ C(l) ? (d(), m("div", ca, [ s[6] || (s[6] = y("div", {
                        class: "camouflage"
                    }, null, -1)), y("img", {
                        class: "shapes",
                        src: null == (e = C(a).find((e => e.id === c.value))) ? void 0 : e.shapes,
                        alt: ""
                    }, null, 8, oa), y("div", ua, [ g(K, {
                        name: "scale-in"
                    }, {
                        default: v((() => [ C(l) ? (d(), m("div", da, [ y("img", {
                            class: "speechBubbleBg",
                            src: C(a).find((e => e.id === c.value)).speechBubble,
                            alt: ""
                        }, null, 8, ma), (d(!0), m(w, null, A(C(a), (e => (d(), U(K, {
                            name: "aopacity",
                            key: e.id
                        }, {
                            default: v((() => [ p(y("h1", {
                                class: "text"
                            }, z(e.des), 513), [ [ h, e.id === c.value ] ]) ])),
                            _: 2
                        }, 1024)))), 128)) ])) : b("", !0) ])),
                        _: 1
                    }), (d(!0), m(w, null, A(C(a), (e => (d(), U(K, {
                        name: "figure-bg-" + e.id,
                        key: e.id
                    }, {
                        default: v((() => [ p(y("img", {
                            class: F([ "figure-bg", "figure-bg-" + e.id ]),
                            src: e.figureBg,
                            alt: ""
                        }, null, 10, pa), [ [ h, e.id === c.value ] ]) ])),
                        _: 2
                    }, 1032, [ "name" ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), U(K, {
                        name: "aopacity",
                        key: e.id
                    }, {
                        default: v((() => [ p(y("img", {
                            class: F([ "figure", "figure-" + e.id ]),
                            src: e.figure,
                            alt: ""
                        }, null, 10, ga), [ [ h, e.id === c.value ] ]) ])),
                        _: 2
                    }, 1024)))), 128)) ]), g(K, {
                        name: "left-in"
                    }, {
                        default: v((() => {
                            var e, i, t, n;
                            return [ C(l) ? (d(), m("div", {
                                key: 0,
                                class: "card",
                                onClick: s[0] || (s[0] = e => o.value = !o.value)
                            }, [ y("div", {
                                class: F([ "card-face", (o.value ? "back" : "front") + " card-face-" + (null == (e = C(a).find((e => e.id === c.value))) ? void 0 : e.id) ])
                            }, [ y("img", {
                                src: null == (i = C(a).find((e => e.id === c.value))) ? void 0 : i.cardDefault,
                                alt: ""
                            }, null, 8, va) ], 2), y("div", {
                                class: F([ "card-face", (o.value ? "front" : "back") + " card-face-" + (null == (t = C(a).find((e => e.id === c.value))) ? void 0 : t.id) ])
                            }, [ y("img", {
                                src: null == (n = C(a).find((e => e.id === c.value))) ? void 0 : n.cardActive,
                                alt: ""
                            }, null, 8, Ca) ], 2) ])) : b("", !0) ];
                        })),
                        _: 1
                    }), g(la, {
                        class: "swiper-card",
                        activeId: c.value,
                        "onUpdate:activeId": s[1] || (s[1] = e => c.value = e)
                    }, null, 8, [ "activeId" ]) ])) : b("", !0) ];
                })),
                _: 1
            }) ])), [ [ r, {
                callback: () => i.value = !0
            } ] ]);
        };
    }
}, [ [ "__scopeId", "data-v-a9c65565" ] ]), Ka = () => ({
    cardList: r([ {
        title: "+I",
        subtitle: "Interact with your very own <br> AI companion, ZAI崽",
        des: "You won't just chat with ZAI崽,<br> you will also be “talked to.”<br> Every interaction counts<br> towards nurturing it!",
        bg1: "/narra-homepage/static/png/card-1-bg-1-CWG6CO9z.png",
        bg2: "/narra-homepage/static/png/card-1-bg-2-R8HiQ6Ma.png"
    }, {
        title: "+V",
        subtitle: "Valorize your creative data",
        des: "Customize your ZAI崽, create<br> in-game assets, and contribute<br> to the Narra ecosystem at<br> large, and let smart contracts<br> fairly distribute the value <br> of these IPs and contributions. ",
        bg1: "/narra-homepage/static/png/card-2-bg-1-SgNaSJSe.png",
        bg2: "/narra-homepage/static/png/card-2-bg-2-Dh487nac.png"
    }, {
        title: "+E",
        subtitle: "Earn with Narra",
        des: "Train-and-earn: a new way to be rewarded! ",
        bg1: "https://oss.narralayer.ai/images/card-3-bg-1.png",
        bg2: "/narra-homepage/static/png/card-3-bg-2-DPP7SY80.png"
    } ]),
    visible: r(!1),
    visible1: r(!1),
    visible2: r(!1),
    visible3: r(!1)
}), ya = {
    id: "ourVision"
}, ha = {
    key: 0,
    class: "block-line"
}, Va = [ "src" ], wa = {
    key: 0,
    class: "title"
}, Aa = {
    key: 1,
    class: "subtitle"
}, za = {
    key: 0,
    class: "card-block"
}, Ua = {
    class: "card-list"
}, Fa = [ "src" ], xa = {
    class: "inner"
}, fa = [ "innerHTML" ], Wa = [ "innerHTML" ], Xa = [ "innerHTML" ], Ma = [ "src" ], ka =  i( Object.assign({
    name: "ourVision"
}, {
    __name: "ourVision",
    setup(e) {
        const {cardList: a, visible: l} = Ka();
        return (e, s) => {
            const i = u("inView");
            return p((d(), m("div", ya, [ g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", ha, [ y("img", {
                    src: C(B),
                    alt: ""
                }, null, 8, Va) ])) : b("", !0) ])),
                _: 1
            }), g(x, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("h1", wa, " Narra+IVE ")) : b("", !0), C(l) ? (d(), 
                m("h2", Aa, " As a Trainer, you can expect to: ")) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "right-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", za, [ y("div", Ua, [ (d(!0), m(w, null, A(C(a), ((e, a) => (d(), 
                m("div", {
                    class: "card-item",
                    key: e.title
                }, [ y("img", {
                    class: F("bg" + (a + 1) + "-2"),
                    src: e.bg2,
                    alt: ""
                }, null, 10, Fa), y("div", xa, [ y("h2", {
                    class: "title",
                    innerHTML: e.title
                }, null, 8, fa), y("h3", {
                    class: "subtitle",
                    innerHTML: e.subtitle
                }, null, 8, Wa), y("div", {
                    class: "des",
                    innerHTML: e.des
                }, null, 8, Xa), y("img", {
                    class: F("bg" + (a + 1) + "-1"),
                    src: e.bg1,
                    alt: ""
                }, null, 10, Ma) ]) ])))), 128)) ]) ])) : b("", !0) ])),
                _: 1
            }) ])), [ [ i, {
                callback: () => l.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-3435120a" ] ]), Za = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='-0.5'%20y='0.5'%20width='47'%20height='47'%20rx='23.5'%20transform='matrix(-1%200%200%201%2047%200)'%20fill='%23DF9808'/%3e%3crect%20x='-0.5'%20y='0.5'%20width='47'%20height='47'%20rx='23.5'%20transform='matrix(-1%200%200%201%2047%200)'%20stroke='%23EDE4CC'/%3e%3cpath%20d='M20.2924%2023.2941C19.9018%2023.6848%2019.9018%2024.3191%2020.2924%2024.7098L26.2924%2030.7098C26.683%2031.1004%2027.3174%2031.1004%2027.708%2030.7098C28.0986%2030.3191%2028.0986%2029.6848%2027.708%2029.2941L22.4143%2024.0004L27.7049%2018.7066C28.0955%2018.316%2028.0955%2017.6816%2027.7049%2017.291C27.3143%2016.9004%2026.6799%2016.9004%2026.2893%2017.291L20.2893%2023.291L20.2924%2023.2941Z'%20fill='%23152226'/%3e%3c/svg%3e", Ba = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='47'%20height='47'%20rx='23.5'%20fill='%23634C15'/%3e%3crect%20x='0.5'%20y='0.5'%20width='47'%20height='47'%20rx='23.5'%20stroke='%23686B63'/%3e%3cpath%20d='M20.2924%2023.2941C19.9018%2023.6848%2019.9018%2024.3191%2020.2924%2024.7098L26.2924%2030.7098C26.683%2031.1004%2027.3174%2031.1004%2027.708%2030.7098C28.0986%2030.3191%2028.0986%2029.6848%2027.708%2029.2941L22.4143%2024.0004L27.7049%2018.7066C28.0955%2018.316%2028.0955%2017.6816%2027.7049%2017.291C27.3143%2016.9004%2026.6799%2016.9004%2026.2893%2017.291L20.2893%2023.291L20.2924%2023.2941Z'%20fill='%23152226'/%3e%3c/svg%3e", Sa = () => {
    const e = r(!1), a = r(!1);
    return {
        visible: e,
        videoList: r([ {
            id: 1,
            img: "https://oss.narralayer.ai/images/narra-video-poster-2.png",
            src: "https://www.youtube.com/embed/_lkkLHDTbJY?si=9C6ggmz1dHrKeCTw&rel=0"
        }, {
            id: 2,
            img: "https://oss.narralayer.ai/images/narra-video-poster-1.png",
            src: "https://www.youtube.com/embed/RRgs-7fST70?si=egAxGaGthpIrQVXI&rel=0"
        }, {
            id: 3,
            img: "https://oss.narralayer.ai/images/narra-video-poster-3.png",
            src: "https://www.youtube.com/embed/KkBteM8ZsBc?si=sRmDx5ovW2mwapwJ&rel=0"
        } ]),
        activeId: r(1),
        visible1: a
    };
}, La = {
    id: "narra-video"
}, Ya = {
    key: 0,
    class: "block-line"
}, Ta = [ "src" ], Ia = {
    key: 0,
    class: "title"
}, ja = {
    key: 0,
    class: "media-youtubo"
}, Qa = [ "src" ], Ga = {
    key: 0,
    class: "nav"
}, Pa = [ "src" ], qa = [ "src" ], Ha = [ "onClick" ], Oa = [ "src" ], Ea = [ "src" ], Ja = [ "src" ], Na =  i( Object.assign({
    name: "narraVideo"
}, {
    __name: "narraVideo",
    setup(e) {
        const {videoList: a, visible: l, activeId: s, visible1: i} = Sa();
        return (e, t) => {
            const n = u("inView");
            return p((d(), m("div", La, [ g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", Ya, [ y("img", {
                    src: C(B),
                    alt: ""
                }, null, 8, Ta) ])) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", Ia, "More Information")) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "scale-in"
            }, {
                default: v((() => [ C(l) ? p((d(), m("div", ja, [ y("iframe", {
                    src: C(a).find((e => e.id === C(s))).src,
                    title: "YouTube video player",
                    frameborder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: ""
                }, null, 8, Qa) ])), [ [ n, {
                    callback: () => i.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(i) ? (d(), m("div", Ga, [ y("div", {
                    class: "nav-item nav-prev",
                    onClick: t[0] || (t[0] = e => C(s) > 1 && s.value--)
                }, [ 1 === C(s) ? (d(), m("img", {
                    key: 0,
                    class: "icon disabled-icon",
                    src: C(Ba),
                    alt: ""
                }, null, 8, Pa)) : (d(), m("img", {
                    key: 1,
                    class: "icon",
                    src: C(Za),
                    alt: ""
                }, null, 8, qa)) ]), (d(!0), m(w, null, A(C(a), (e => (d(), m("div", {
                    class: F([ "nav-item nav-pic", {
                        active: e.id === C(s)
                    } ]),
                    onClick: () => s.value = e.id
                }, [ y("img", {
                    class: "poster",
                    src: e.img,
                    alt: ""
                }, null, 8, Oa) ], 10, Ha)))), 256)), y("div", {
                    class: "nav-item nav-next",
                    onClick: t[1] || (t[1] = e => C(s) < C(a).length && s.value++)
                }, [ C(s) === C(a).length ? (d(), m("img", {
                    key: 0,
                    class: "icon disabled-icon",
                    src: C(Ba),
                    alt: ""
                }, null, 8, Ea)) : (d(), m("img", {
                    key: 1,
                    class: "icon",
                    src: C(Za),
                    alt: ""
                }, null, 8, Ja)) ]) ])) : b("", !0) ])),
                _: 1
            }) ])), [ [ n, {
                callback: () => l.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-19b5c1f3" ] ]), Da = () => ({
    visible1: r(!1),
    visible2: r(!1),
    visible3: r(!1),
    visible4: r(!1),
    visible5: r(!1)
}), Ra = "/narra-homepage/static/png/hit-block-bg-g2NR0KSc.png", _a = {
    id: "hitBlock"
}, $a = {
    key: 0,
    class: "block-line"
}, el = [ "src" ], al = {
    class: "page-inner"
}, ll = {
    key: 0,
    class: "title"
}, sl = {
    key: 1,
    class: "des"
}, il = {
    key: 2,
    class: "hit-btn",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe5xSPSk3BsIo3_xrUYNsNtCKn9VyKwLrsF9KUYevQXD56WAg/viewform",
    target: "_blank"
}, tl = [ "src" ], nl =  i( Object.assign({
    name: "hitBlock"
}, {
    __name: "hitBlock",
    setup(e) {
        s();
        const {visible1: a, visible2: l, visible3: i} = Da();
        return (e, s) => {
            const t = u("inView");
            return p((d(), m("div", _a, [ g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(a) ? p((d(), m("div", $a, [ y("img", {
                    src: C(B),
                    alt: ""
                }, null, 8, el) ])), [ [ t, {
                    callback: () => l.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), y("div", al, [ g(x, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(a) ? p((d(), m("h1", ll, s[0] || (s[0] = [ V(" Build your "), y("div", null, "HERO", -1), V(" with us! ") ]))), [ [ t, {
                    callback: () => l.value = !0
                } ] ]) : b("", !0), C(l) ? p((d(), m("div", sl, s[1] || (s[1] = [ V(" Ready to put an AI agent face to your brand or project? The Narra Training Academy is here to help! ") ]))), [ [ t, {
                    callback: () => i.value = !0
                } ] ]) : b("", !0), C(i) ? (d(), m("a", il, "HIT ME UP!")) : b("", !0), C(i) ? (d(), 
                m("img", {
                    key: 3,
                    class: "img",
                    src: C(Ra),
                    alt: ""
                }, null, 8, tl)) : b("", !0) ])),
                _: 1
            }) ]) ])), [ [ t, {
                callback: () => a.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-0f2e9bcc" ] ]), rl = {
    class: "page-inner"
}, cl =  Object.assign({
    name: "mainPage"
}, {
    __name: "index",
    setup: e => (e, a) => (d(), m("div", null, [ g(M), y("div", rl, [ g(N), g(se), g(ba), g(ka), g(ye), g(Na), g(nl) ]), g(k) ]))
}), ol = "/narra-homepage/static/png/NARRA-DxrDGZfK.png", ul = {
    key: 0,
    class: "accessGranted"
}, dl = {
    key: 1,
    class: "intro-progress-inner"
}, ml = {
    class: "progress"
}, pl = {
    class: "num"
}, gl =  i({
    __name: "index",
    props: {
        time: {
            default: 2300
        }
    },
    emits: [ "end" ],
    setup(l, {emit: i}) {
        a(), e();
        const t = s(), n = l, o = i, u = r(0), p = r(null), g = f((() => Math.ceil(n.time / 100))), v = r(!1);
        return c((() => {
            p.value = null, p.value = setInterval((() => {
                100 === u.value ? (clearInterval(p.value), setTimeout((() => {
                    v.value = !0;
                }), 300), setTimeout((() => {
                    o("end");
                }), 700)) : u.value++;
            }), g.value);
        })), (e, a) => (d(), m("div", {
            class: F([ "intro-progress", C(t).media + "-intro-progress" ])
        }, [ v.value ? (d(), m("div", ul)) : (d(), m("div", dl, [ a[0] || (a[0] = y("div", {
            class: "loading"
        }, [ y("span", null, " INITIATING ") ], -1)), y("div", ml, [ y("div", {
            class: "inner",
            style: W({
                width: u.value + "%",
                transition: g.value + "ms"
            })
        }, null, 4) ]), y("div", pl, z(u.value), 1), a[1] || (a[1] = y("div", {
            class: "des"
        }, "ENTERING NARRA TRAINING ACADEMY", -1)) ])) ], 2));
    }
}, [ [ "__scopeId", "data-v-0ae554f0" ] ]), vl = [ "https://oss.narralayer.ai/images/mascot-1.gif", "https://oss.narralayer.ai/images/mascot-2.gif", "https://oss.narralayer.ai/images/mascot-3.gif" ], Cl = () => {
    s();
    const a = r(0), i = r(!1), t = r(Math.ceil(3 * Math.random())), n = r();
    e(), l();
    r("");
    return c((() => {
        clearInterval(n.value), n.value = setInterval((() => {
            a.value < 2 ? a.value++ : a.value = 0;
        }), 1e3);
    })), {
        mascotList: vl,
        swiperTextKey: a,
        enterCheck: i,
        count: t,
        enterHandle: () => {
            i.value = !0;
        }
    };
}, bl = {
    class: "page-inner"
}, Kl = [ "src" ], yl = {
    key: 0,
    class: "enter-before"
}, hl = {
    class: "logo"
}, Vl = [ "src" ], wl = {
    key: 1,
    class: "enter-after"
}, Al = {
    class: "right"
}, zl = {
    class: "swiper-text"
}, Ul =  i( Object.assign({
    name: "intro"
}, {
    __name: "intro",
    emits: [ "end" ],
    setup(e, {emit: a}) {
        const l = a, {mascotList: s, swiperTextKey: i, enterCheck: t, count: n, enterHandle: r} = Cl();
        return (e, a) => (d(), m("main", {
            class: F([ "main", C(t) && "intro-enter" ])
        }, [ y("div", {
            class: F([ "bg bg1", C(t) ? "bg1-enterCheck" : "" ])
        }, null, 2), y("div", {
            class: F([ "bg bg2", C(t) ? "bg2-enterCheck" : "" ])
        }, null, 2), y("div", bl, [ (d(!0), m(w, null, A(C(s), ((e, a) => p((d(), m("img", {
            class: F([ "mascot", `mascot${a + 1} ${C(t) ? "mascot-enterCheck" : ""}` ]),
            key: a,
            src: e,
            alt: ""
        }, null, 10, Kl)), [ [ h, a + 1 === C(n) ] ]))), 128)), y("div", {
            class: F([ "bg3", C(t) ? "bg3-enterCheck" : "" ])
        }, null, 2), g(K, {
            name: "opacity"
        }, {
            default: v((() => [ C(t) ? (d(), m("div", wl, [ y("div", {
                class: "narra-card",
                onClick: a[1] || (a[1] = e => l("end"))
            }), y("div", Al, [ y("div", zl, [ y("div", {
                class: F([ "text", 0 === C(i) ? "text-active" : "" ])
            }, " Community-Led, Fan-Owned ", 2), y("div", {
                class: F([ "text", 1 === C(i) ? "text-active" : "" ])
            }, a[4] || (a[4] = [ V(" Be a Trainer!"), y("br", null, null, -1), V("Be Empowered ") ]), 2), y("div", {
                class: F([ "text", 2 === C(i) ? "text-active" : "" ])
            }, a[5] || (a[5] = [ V(" Entering Narra"), y("br", null, null, -1), V("Training Academy ") ]), 2) ]), g(gl, {
                class: "progress",
                onEnd: a[2] || (a[2] = e => l("end"))
            }) ]) ])) : (d(), m("div", yl, [ y("div", hl, [ y("img", {
                src: C(ol),
                alt: ""
            }, null, 8, Vl), a[3] || (a[3] = y("h1", {
                class: "subtitle"
            }, "Become A Trainer", -1)) ]), y("button", {
                onClick: a[0] || (a[0] = (...e) => C(r) && C(r)(...e)),
                class: "enter"
            }, " ENTER ") ])) ])),
            _: 1
        }) ]) ], 2));
    }
}), [ [ "__scopeId", "data-v-13e0065b" ] ]), Fl = {
    class: "main"
}, xl =  i({
    __name: "index",
    setup(e) {
        const {pageNum: a, endHandle: l} = j();
        return (e, s) => (d(), m("div", Fl, [ 0 === C(a) ? (d(), U(Ul, {
            key: 0,
            onEnd: C(l)
        }, null, 8, [ "onEnd" ])) : b("", !0), 1 === C(a) ? (d(), U(cl, {
            key: 1
        })) : b("", !0) ]));
    }
}, [ [ "__scopeId", "data-v-0f444504" ] ]), fl = [ "src" ], Wl = [ "src" ], Xl =  i({
    __name: "intro",
    emits: [ "end" ],
    setup(e, {emit: a}) {
        const l = a, {mascotList: s, swiperTextKey: i, enterCheck: t, count: n, enterHandle: r} = Cl();
        return (e, a) => (d(), m("main", {
            class: F([ "main", C(t) && "intro-enter" ])
        }, [ (d(!0), m(w, null, A(C(s), ((e, a) => p((d(), m("img", {
            class: F([ "mascot", `mascot${a + 1} ${C(t) ? "mascot-enterCheck" : ""}` ]),
            key: a,
            src: e,
            alt: ""
        }, null, 10, fl)), [ [ h, a + 1 === C(n) ] ]))), 128)), y("div", {
            class: F([ "bg bg1", C(t) ? "bg1-enterCheck" : "" ])
        }, null, 2), y("div", {
            class: F([ "bg bg2", C(t) ? "bg2-enterCheck" : "" ])
        }, null, 2), y("div", {
            class: F([ "bg3", C(t) ? "bg3-enterCheck" : "" ])
        }, null, 2), y("div", {
            class: F([ "logo", C(t) ? "logo-enterCheck" : "" ])
        }, [ y("img", {
            src: C(ol),
            alt: ""
        }, null, 8, Wl), a[3] || (a[3] = y("h1", {
            class: "subtitle"
        }, "Become A Trainer", -1)) ], 2), y("button", {
            onClick: a[0] || (a[0] = (...e) => C(r) && C(r)(...e)),
            class: F([ C(t) ? "enter-enterCheck" : "", "enter" ])
        }, " ENTER ", 2), y("div", {
            class: F([ "narra-card", C(t) ? "narra-card-enterCheck" : "" ]),
            onClick: a[1] || (a[1] = e => l("end"))
        }, null, 2), y("div", {
            class: F([ C(t) ? "swiper-text-enterCheck" : "", "swiper-text" ])
        }, [ y("div", {
            class: F([ "text", 0 === C(i) ? "text-active" : "" ])
        }, a[4] || (a[4] = [ V(" Community-Led,"), y("br", null, null, -1), V(" Fan-Owned ") ]), 2), y("div", {
            class: F([ "text", 1 === C(i) ? "text-active" : "" ])
        }, a[5] || (a[5] = [ V(" Be a Trainer!"), y("br", null, null, -1), V("Be Empowered ") ]), 2), y("div", {
            class: F([ "text", 2 === C(i) ? "text-active" : "" ])
        }, a[6] || (a[6] = [ V(" Entering Narra "), y("br", null, null, -1), V(" Training Academy ") ]), 2) ], 2), C(t) ? (d(), 
        U(gl, {
            key: 0,
            class: "progress",
            onEnd: a[2] || (a[2] = e => l("end"))
        })) : b("", !0) ], 2));
    }
}, [ [ "__scopeId", "data-v-b67af897" ] ]), Ml = {
    id: "home"
}, kl = {
    key: 0,
    class: "bg bg-left"
}, Zl = {
    key: 0,
    class: "bg bg-right"
}, Bl = {
    class: "page-inner"
}, Sl = {
    class: "page-home"
}, Ll = {
    key: 0,
    class: "mascot"
}, Yl =  i( Object.assign({
    name: "home"
}, {
    __name: "home",
    setup(e) {
        s();
        const {visible: a, pushChat: l} = Q();
        return (e, s) => {
            const i = u("inView");
            return d(), m("div", Ml, [ p((d(), m("div", null, [ g(K, {
                name: "right-in"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", kl)) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", Zl)) : b("", !0) ])),
                _: 1
            }) ])), [ [ i, {
                callback: () => a.value = !0
            } ] ]), y("div", Bl, [ y("div", Sl, [ s[1] || (s[1] = y("div", {
                class: "text"
            }, [ y("span", {
                class: "text-1"
            }, "The First"), y("br"), y("span", {
                class: "text-2"
            }, "community-owned"), y("br"), y("span", {
                class: "yellow text-3"
            }, "AI edutainment") ], -1)), g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", Ll)) : b("", !0) ])),
                _: 1
            }) ]) ]), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(a) ? (d(), m("div", {
                    key: 0,
                    class: "getStarted",
                    onClick: s[0] || (s[0] = (...e) => C(l) && C(l)(...e))
                }, "TAKE THE QUIZ!")) : b("", !0) ])),
                _: 1
            }) ]);
        };
    }
}), [ [ "__scopeId", "data-v-be87cae6" ] ]), Tl = {
    id: "understanding"
}, Il = {
    key: 0,
    class: "zaigo-card"
}, jl = {
    class: "zaigo-card-text"
}, Ql = {
    key: 0,
    class: "zaigo-card-title"
}, Gl = {
    key: 1,
    class: "zaigo-card-subtitle"
}, Pl = {
    key: 2,
    class: "zaigo-card-des"
}, ql =  i( Object.assign({
    name: "understanding"
}, {
    __name: "understanding",
    setup(e) {
        const a = s(), {cardVisible: l, textVisible: i, visible1: t, visible2: n, visible3: r, visible4: c, visible5: o, visible6: w, visible7: A, visible8: z, isCanMint: U, mintHandle: F} = Z();
        return (e, s) => {
            const t = u("inView");
            return p((d(), m("div", Tl, [ g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(i) ? p((d(), m("div", Il, [ y("div", jl, [ g(x, {
                    name: "bottom-in"
                }, {
                    default: v((() => [ C(l) ? p((d(), m("div", Ql, s[2] || (s[2] = [ V("ZAI-GO") ]))), [ [ t, {
                        callback: () => c.value = !0
                    } ] ]) : b("", !0), C(c) ? p((d(), m("div", Gl, s[3] || (s[3] = [ V("PERSONALITY QUIZ ") ]))), [ [ t, {
                        callback: () => o.value = !0
                    } ] ]) : b("", !0), C(o) ? p((d(), m("div", Pl, s[4] || (s[4] = [ V("BTC, ETH, SOL, DOGE, or PEPE... which ZAI-GO would you vibe with? "), y("br", null, null, -1), V(" Connect your Wallet and take our ZAI-GO Personality Quiz to find out! ") ]))), [ [ t, {
                        callback: () => w.value = !0
                    } ] ]) : b("", !0) ])),
                    _: 1
                }) ]) ])), [ [ t, {
                    callback: () => l.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(x, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(w) ? p((d(), m("button", {
                    key: 0,
                    class: "take-quiz",
                    onClick: s[0] || (s[0] = e => C(a).toQuiz())
                }, s[5] || (s[5] = [ V("TAKE THE QUIZ! ") ]))), [ [ t, {
                    callback: () => A.value = !0
                } ] ]) : b("", !0), C(A) ? p((d(), m("button", {
                    key: 1,
                    class: "take-quiz",
                    onClick: s[1] || (s[1] = e => C(F)())
                }, "Mint ", 512)), [ [ h, C(U) ] ]) : b("", !0) ])),
                _: 1
            }) ])), [ [ t, {
                callback: () => i.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-f3de87f7" ] ]), Hl = {
    id: "ai"
}, Ol = {
    key: 0,
    class: "block-line"
}, El = [ "src" ], Jl = {
    key: 0,
    class: "subtitle"
}, Nl = {
    class: "list"
}, Dl = {
    key: 0
}, Rl = [ "src" ], _l = [ "src" ], $l = [ "src" ], es = [ "src" ], as = [ "src" ], ls = {
    key: 1
}, ss = [ "src" ], is = [ "src" ], ts = [ "src" ], ns = [ "src" ], rs = [ "src" ], cs =  i( Object.assign({
    name: "ai"
}, {
    __name: "ai",
    setup(e) {
        const {aiList: a, visible: l, visible1: s, visible2: i, visible4: t, visible3: n, visible5: r} = ie();
        return (e, t) => {
            const n = u("inView");
            return p((d(), m("div", Hl, [ g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? p((d(), m("div", Ol, [ y("img", {
                    src: C(S),
                    alt: ""
                }, null, 8, El) ])), [ [ n, {
                    callback: () => s.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "scale-in"
            }, {
                default: v((() => [ C(l) ? p((d(), m("div", Jl, t[0] || (t[0] = [ V(" Shaping the future of "), y("br", null, null, -1), V(" cryptographic painting AI, Narra "), y("br", null, null, -1), V(" is unstoppable ") ]))), [ [ n, {
                    callback: () => s.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), y("div", Nl, [ g(x, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(s) ? p((d(), m("ul", Dl, [ (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, Rl), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, _l), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, $l), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, es), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, as), V(z(e.text), 1) ])))), 128)) ])), [ [ n, {
                    callback: () => i.value = !0
                } ] ]) : b("", !0), C(i) ? (d(), m("ul", ls, [ (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, ss), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, is), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, ts), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, ns), V(z(e.text), 1) ])))), 128)), (d(!0), m(w, null, A(C(a), (e => (d(), 
                m("li", {
                    key: e.text
                }, [ y("img", {
                    src: e.icon
                }, null, 8, rs), V(z(e.text), 1) ])))), 128)) ])) : b("", !0) ])),
                _: 1
            }) ]) ])), [ [ n, {
                callback: () => l.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-92dc8e82" ] ]), os = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgB7ZiLDcIwDAUTFoARMgqdgBHKBozALIzABBWT0BG6gXGkRCCowGmcxkE+ySogYt9r+VQxRlEURVEaxlLfCAA7PPRYE9bNWjsaRl76e66s/bG5w7rDE//YGSZK9/cDzvAJy5AZ+ciJsn5jaEwzrzmsISdEWDuEXu/sDBdfztLiK1Gi52oDV5fnHFxNnkOgunyOiBj5JULi5FPExMonhJArH/kRQrZ8JCGEPPkIIQS7PPVe6P9p+iMELX+JoeWfUWj5jyxFTFyIJUJiQuSIVA/BIVAtBOfg1UOUGEjoyborceSUJ4boKT1y7oVGrC5nCzCs7UKvcvjLCUK3FlM2dx0e9lhbrAuevckwEvofwlP2/oqiKIoikgeEUweGMy274wAAAABJRU5ErkJggg==", us = {
    class: "swiper-container"
}, ds = {
    class: "card nav-prev"
}, ms = [ "src" ], ps = [ "src" ], gs = {
    class: "card-inner"
}, vs = [ "onClick" ], Cs = [ "src" ], bs = [ "src" ], Ks = {
    class: "card nav-next"
}, ys = [ "src" ], hs = [ "src" ], Vs =  i( Object.assign({
    name: "swiperCard"
}, {
    __name: "swiperCardV2",
    props: [ "activeId" ],
    emits: [ "update:activeId" ],
    setup(e, {emit: a}) {
        const l = a, s = e, {cardList: i} = De(), t = e => {
            let a = 0;
            if ("number" == typeof e) {
                const l = i.findIndex((e => e.id === s.activeId));
                a = e ? i[l + 1].id : i[l - 1].id;
            } else a = e.id;
            l("update:activeId", a);
        };
        return (a, l) => (d(), m("div", us, [ y("div", ds, [ 6 === e.activeId ? (d(), m("img", {
            key: 0,
            class: "icon disabled-icon",
            src: C(Ba),
            alt: ""
        }, null, 8, ms)) : (d(), m("img", {
            key: 1,
            onClick: l[0] || (l[0] = e => t(0)),
            class: "icon",
            src: C(Za),
            alt: ""
        }, null, 8, ps)) ]), y("div", gs, [ (d(!0), m(w, null, A(C(i), ((a, l) => (d(), 
        m("div", {
            class: "card",
            onClick: e => t(a),
            key: a.name,
            style: W({
                scrollSnapAlign: a.id === e.activeId ? "center" : ""
            })
        }, [ p(y("img", {
            src: a.zaiSelectorActive,
            alt: ""
        }, null, 8, Cs), [ [ h, s.activeId === a.id ] ]), p(y("img", {
            src: a.zaiSelector,
            alt: ""
        }, null, 8, bs), [ [ h, s.activeId !== a.id ] ]) ], 12, vs)))), 128)) ]), y("div", Ks, [ 1 === e.activeId ? (d(), 
        m("img", {
            key: 0,
            class: "icon disabled-icon",
            src: C(Ba),
            alt: ""
        }, null, 8, ys)) : (d(), m("img", {
            key: 1,
            onClick: l[1] || (l[1] = e => t(1)),
            class: "icon",
            src: C(Za),
            alt: ""
        }, null, 8, hs)) ]) ]));
    }
}), [ [ "__scopeId", "data-v-31a498fd" ] ]), ws = {
    id: "zaigo"
}, As = {
    key: 0,
    class: "title"
}, zs = {
    key: 0,
    class: "des"
}, Us = {
    key: 0,
    class: "subtitle"
}, Fs = {
    class: "count"
}, xs = {
    key: 0,
    class: "count-item"
}, fs = {
    key: 1,
    class: "count-item"
}, Ws = {
    key: 2,
    class: "count-item"
}, Xs = {
    class: "page-inner"
}, Ms = [ "src" ], ks = {
    key: 0,
    class: "center"
}, Zs = {
    class: "speechBubble"
}, Bs = [ "src" ], Ss = [ "src" ], Ls = [ "src" ], Ys = [ "src" ], Ts = [ "src" ], Is =  i({
    __name: "zaigo",
    setup(e) {
        const a = r(!1), {cardList: l, visible: i, visible1: t, visible2: n, visible3: f, visible4: W, visible5: M} = De(), k = r(6);
        r("");
        const Z = r(!1);
        return s(), c((() => {})), o(k, (() => {})), (e, s) => {
            var r;
            const c = u("inView");
            return p((d(), m("div", ws, [ g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(i) ? p((d(), m("div", As, s[6] || (s[6] = [ V(" A new hero has "), y("br", null, null, -1), V(" arrived! ") ]))), [ [ c, {
                    callback: () => t.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(t) ? p((d(), m("div", zs, s[7] || (s[7] = [ V(" The big bad bear from the Great White North, BERA’s dry, skewering wit tends to whittle anyone who isn’t already pissing their pants from his towering stature (dude’s 2 friggin meters tall!). But dig a little deeper and you’ll find warm and fuzzy. Just be warned: if you poke the bear, you get the claws. ") ]))), [ [ c, {
                    callback: () => n.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "opacity"
            }, {
                default: v((() => [ C(n) ? p((d(), m("div", Us, s[8] || (s[8] = [ V(" Begin your Narra journey! ") ]))), [ [ c, {
                    callback: () => f.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), y("div", Fs, [ g(x, {
                name: "scale-in"
            }, {
                default: v((() => [ C(t) ? p((d(), m("div", xs, s[9] || (s[9] = [ y("div", {
                    class: "count-item-name"
                }, " Narra Training Day ", -1), y("div", {
                    class: "count-item-value"
                }, " ****** ", -1) ]))), [ [ c, {
                    callback: () => n.value = !0
                } ] ]) : b("", !0), C(n) ? p((d(), m("div", fs, s[10] || (s[10] = [ y("div", {
                    class: "count-item-name"
                }, " Trainers Enrolled ", -1), y("div", {
                    class: "count-item-value"
                }, " ****** ", -1) ]))), [ [ c, {
                    callback: () => f.value = !0
                } ] ]) : b("", !0), C(f) ? p((d(), m("div", Ws, s[11] || (s[11] = [ y("div", {
                    class: "count-item-name"
                }, " ZAI In Training ", -1), y("div", {
                    class: "count-item-value"
                }, " ****** ", -1) ]))), [ [ c, {
                    callback: () => W.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }) ]), y("div", Xs, [ g(K, {
                name: "bottom-in"
            }, {
                default: v((() => {
                    var e;
                    return [ C(W) ? (d(), m("img", {
                        key: 0,
                        class: "shapes",
                        src: null == (e = C(l).find((e => e.id === k.value))) ? void 0 : e.shapes,
                        alt: ""
                    }, null, 8, Ms)) : b("", !0) ];
                })),
                _: 1
            }), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(W) ? p((d(), m("div", ks, [ y("div", Zs, [ y("img", {
                    class: "speechBubbleBg",
                    src: C(l).find((e => e.id === k.value)).speechBubble,
                    alt: ""
                }, null, 8, Bs), (d(!0), m(w, null, A(C(l), (e => (d(), U(K, {
                    name: "aopacity",
                    key: e.id
                }, {
                    default: v((() => [ p(y("h1", {
                        class: "text"
                    }, z(e.des), 513), [ [ h, e.id === k.value ] ]) ])),
                    _: 2
                }, 1024)))), 128)) ]), (d(!0), m(w, null, A(C(l), (e => (d(), U(K, {
                    name: "figure-bg-" + e.id,
                    key: e.id
                }, {
                    default: v((() => [ p(y("img", {
                        class: F([ "figure-bg", "figure-bg-" + e.id ]),
                        src: e.figureBg,
                        alt: ""
                    }, null, 10, Ss), [ [ h, e.id === k.value ] ]) ])),
                    _: 2
                }, 1032, [ "name" ])))), 128)), (d(!0), m(w, null, A(C(l), (e => (d(), U(K, {
                    name: "aopacity",
                    key: e.id
                }, {
                    default: v((() => [ p(y("img", {
                        class: F([ "figure", "figure-" + e.id ]),
                        src: e.figure,
                        alt: ""
                    }, null, 10, Ls), [ [ h, e.id === k.value ] ]) ])),
                    _: 2
                }, 1024)))), 128)) ])), [ [ c, {
                    callback: () => M.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }) ]), g(x, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(M) ? (d(), U(Vs, {
                    key: 0,
                    class: "swiper-card",
                    activeId: k.value,
                    "onUpdate:activeId": s[0] || (s[0] = e => k.value = e)
                }, null, 8, [ "activeId" ])) : b("", !0) ])),
                _: 1
            }), p(y("div", {
                class: "card-modal",
                onClick: s[5] || (s[5] = e => a.value = !1)
            }, [ y("div", {
                class: F([ "card", "card-" + (null == (r = C(l).find((e => e.id === k.value))) ? void 0 : r.id) ])
            }, [ y("div", {
                class: F([ "card-face", Z.value ? "back" : "front" ])
            }, [ y("img", {
                onClick: s[1] || (s[1] = e => a.value = !a.value),
                class: "icon",
                src: os,
                alt: ""
            }), (d(!0), m(w, null, A(C(l), (e => p((d(), m("img", {
                onClick: s[2] || (s[2] = X((e => Z.value = !Z.value), [ "stop" ])),
                class: "img",
                src: e.cardDefault,
                alt: "",
                key: e.id
            }, null, 8, Ys)), [ [ h, e.id === k.value ] ]))), 128)) ], 2), y("div", {
                class: F([ "card-face", Z.value ? "front" : "back" ])
            }, [ y("img", {
                onClick: s[3] || (s[3] = e => a.value = !a.value),
                class: "icon",
                src: os,
                alt: ""
            }), (d(!0), m(w, null, A(C(l), (e => p((d(), m("img", {
                onClick: s[4] || (s[4] = X((e => Z.value = !Z.value), [ "stop" ])),
                class: "img",
                src: e.cardActive,
                alt: "",
                key: e.id
            }, null, 8, Ts)), [ [ h, e.id === k.value ] ]))), 128)) ], 2) ], 2) ], 512), [ [ h, a.value ] ]) ])), [ [ c, {
                callback: () => i.value = !0
            } ] ]);
        };
    }
}, [ [ "__scopeId", "data-v-b309127d" ] ]), js = {
    id: "ourVision"
}, Qs = {
    key: 0,
    class: "block-line"
}, Gs = [ "src" ], Ps = {
    key: 0,
    class: "title"
}, qs = {
    key: 0,
    class: "subtitle"
}, Hs = {
    key: 0,
    class: "card-list"
}, Os = {
    class: "card-list-view"
}, Es = [ "onClick" ], Js = {
    class: "inner"
}, Ns = {
    class: "content"
}, Ds = [ "innerHTML" ], Rs = [ "innerHTML" ], _s = [ "innerHTML" ], $s = [ "src" ], ei = [ "src" ], ai =  i( Object.assign({
    name: "ourVision"
}, {
    __name: "ourVision",
    setup(e) {
        const {cardList: a, visible: l, visible1: s, visible2: i, visible3: t} = Ka();
        return (e, n) => {
            const r = u("inView");
            return p((d(), m("div", js, [ g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? p((d(), m("div", Qs, [ y("img", {
                    src: C(S),
                    alt: ""
                }, null, 8, Gs) ])), [ [ r, {
                    callback: () => s.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(s) ? p((d(), m("h1", Ps, n[0] || (n[0] = [ V(" NARRA+IVE ") ]))), [ [ r, {
                    callback: () => i.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(i) ? p((d(), m("h2", qs, n[1] || (n[1] = [ V(" As a Trainer, you can expect to: ") ]))), [ [ r, {
                    callback: () => t.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(t) ? (d(), m("div", Hs, [ y("div", Os, [ (d(!0), m(w, null, A(C(a), ((e, a) => (d(), 
                m("div", {
                    class: F([ "card-item", e.open ? "open-item" : "" ]),
                    onClick: () => e.open = !e.open,
                    key: e.title
                }, [ y("div", Js, [ n[2] || (n[2] = y("img", {
                    class: "icon",
                    src: Y,
                    alt: ""
                }, null, -1)), y("div", Ns, [ y("h2", {
                    class: "content-title",
                    innerHTML: e.title
                }, null, 8, Ds), y("h3", {
                    class: "content-subtitle",
                    innerHTML: e.subtitle
                }, null, 8, Rs), y("div", {
                    class: "content-des",
                    innerHTML: e.des
                }, null, 8, _s) ]), y("img", {
                    class: F("bg" + (a + 1) + "-1"),
                    src: e.bg1,
                    alt: ""
                }, null, 10, $s), y("img", {
                    class: F("bg" + (a + 1) + "-2"),
                    src: e.bg2,
                    alt: ""
                }, null, 10, ei) ]) ], 10, Es)))), 128)) ]) ])) : b("", !0) ])),
                _: 1
            }) ])), [ [ r, {
                callback: () => l.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-5730c0dc" ] ]), li = {
    id: "narra-video"
}, si = {
    key: 0,
    class: "block-line"
}, ii = [ "src" ], ti = {
    key: 0,
    class: "title"
}, ni = {
    key: 0,
    class: "media-youtubo"
}, ri = [ "src" ], ci = {
    class: "nav"
}, oi = [ "onClick" ], ui = [ "src" ], di =  i( Object.assign({
    name: "narraVideo"
}, {
    __name: "narraVideo",
    setup(e) {
        const {videoList: a, visible: l, activeId: s} = Sa();
        return (e, i) => {
            const t = u("inView");
            return p((d(), m("div", li, [ g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", si, [ y("img", {
                    src: C(S),
                    alt: ""
                }, null, 8, ii) ])) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "left-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", ti, "Trainer Resources")) : b("", !0) ])),
                _: 1
            }), g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(l) ? (d(), m("div", ni, [ (d(!0), m(w, null, A(C(a), (e => p((d(), 
                m("div", {
                    style: {
                        "pointer-events": "none"
                    },
                    class: "video",
                    key: e.id
                }, [ g(K, {
                    name: "_left-in"
                }, {
                    default: v((() => [ p(y("iframe", {
                        style: {
                            "pointer-events": "auto"
                        },
                        src: e.src,
                        title: "YouTube video player",
                        frameborder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: ""
                    }, null, 8, ri), [ [ h, e.id === C(s) ] ]) ])),
                    _: 2
                }, 1024) ])), [ [ t, {
                    callback: () => e.visible = !0
                } ] ]))), 128)) ])) : b("", !0) ])),
                _: 1
            }), y("div", ci, [ (d(!0), m(w, null, A(C(a), (e => (d(), m("div", {
                class: F([ "nav-item nav-pic", {
                    active: e.id === C(s)
                } ]),
                onClick: () => s.value = e.id
            }, [ y("img", {
                class: "poster",
                src: e.img,
                alt: ""
            }, null, 8, ui) ], 10, oi)))), 256)) ]) ])), [ [ t, {
                callback: () => l.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-fe98b74c" ] ]), mi = {
    id: "hitBlock"
}, pi = {
    key: 0,
    class: "block-line"
}, gi = [ "src" ], vi = {
    class: "page-inner"
}, Ci = {
    key: 0,
    class: "title"
}, bi = {
    key: 1,
    class: "title yellow"
}, Ki = {
    key: 2,
    class: "title"
}, yi = {
    key: 3,
    class: "des"
}, hi = [ "src" ], Vi = {
    key: 5,
    class: "hit-btn",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe5xSPSk3BsIo3_xrUYNsNtCKn9VyKwLrsF9KUYevQXD56WAg/viewform",
    target: "_blank"
}, wi =  i( Object.assign({
    name: "hitBlock"
}, {
    __name: "hitBlock",
    setup(e) {
        s();
        const {visible1: a, visible2: l, visible3: i, visible4: t, visible5: n} = Da();
        return (e, s) => {
            const r = u("inView");
            return p((d(), m("div", mi, [ g(K, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(a) ? p((d(), m("div", pi, [ y("img", {
                    src: C(S),
                    alt: ""
                }, null, 8, gi) ])), [ [ r, {
                    callback: () => l.value = !0
                } ] ]) : b("", !0) ])),
                _: 1
            }), y("div", vi, [ g(x, {
                name: "bottom-in"
            }, {
                default: v((() => [ C(l) ? p((d(), m("h1", Ci, s[0] || (s[0] = [ V(" Build your ") ]))), [ [ r, {
                    callback: () => i.value = !0
                } ] ]) : b("", !0), C(l) ? p((d(), m("h1", bi, s[1] || (s[1] = [ V(" HERO ") ]))), [ [ r, {
                    callback: () => i.value = !0
                } ] ]) : b("", !0), C(l) ? p((d(), m("h1", Ki, s[2] || (s[2] = [ V(" with us! ") ]))), [ [ r, {
                    callback: () => i.value = !0
                } ] ]) : b("", !0), C(i) ? p((d(), m("div", yi, s[3] || (s[3] = [ V(" Ready to put an AI agent face to your brand or project? The Narra Training Academy is here to help! ") ]))), [ [ r, {
                    callback: () => t.value = !0
                } ] ]) : b("", !0), C(t) ? p((d(), m("img", {
                    key: 4,
                    class: "bg",
                    src: C(Ra),
                    alt: ""
                }, null, 8, hi)), [ [ r, {
                    callback: () => n.value = !0
                } ] ]) : b("", !0), C(n) ? (d(), m("a", Vi, "HIT ME UP!")) : b("", !0) ])),
                _: 1
            }) ]) ])), [ [ r, {
                callback: () => a.value = !0
            } ] ]);
        };
    }
}), [ [ "__scopeId", "data-v-c6808769" ] ]), Ai = {
    class: "page-inner"
}, zi =  Object.assign({
    name: "mainPage"
}, {
    __name: "index",
    setup: e => (e, a) => (d(), m("div", null, [ g(T), y("div", Ai, [ g(Yl), g(ql), g(Is), g(ai), g(cs), g(di), g(wi) ]), g(I) ]))
}), Ui = {
    class: "main"
}, Fi =  i({
    __name: "index",
    setup(e) {
        const {pageNum: a, endHandle: l} = j();
        return (e, s) => (d(), m("div", Ui, [ 0 === C(a) ? (d(), U(Xl, {
            key: 0,
            onEnd: C(l)
        }, null, 8, [ "onEnd" ])) : b("", !0), 1 === C(a) ? (d(), U(zi, {
            key: 1
        })) : b("", !0) ]));
    }
}, [ [ "__scopeId", "data-v-0449a862" ] ]), xi = {
    class: "index"
}, fi = {
    style: {
        height: "0",
        width: "0"
    }
}, Wi =  i({
    __name: "index",
    props: {
        name: "Index"
    },
    setup(a) {
        const i = s(), u = l(), p = e(), {pageNum: g, domainName: v} = j(), K = r(!1), h = r(null);
        return c((() => {
            p.query.ic && !n.get("token", u.token) && (h.value.openHandle(), window.history.pushState({}, "", v));
        })), o((() => p), (() => {
            var e;
            (null == (e = p.query) ? void 0 : e.ic) && (K.value = !0);
        }), {
            deep: !0,
            immediate: !0
        }), (e, a) => (d(), m("div", xi, [ "pc" === C(i).media ? (d(), U(xl, {
            key: 0
        })) : b("", !0), "mobile" === C(i).media ? (d(), U(Fi, {
            key: 1
        })) : b("", !0), y("div", fi, [ K.value ? (d(), U(t, {
            key: 0,
            ref_key: "loginBlock",
            ref: h
        }, null, 512)) : b("", !0) ]) ]));
    }
}, [ [ "__scopeId", "data-v-14686050" ] ]);

export { Wi as default };

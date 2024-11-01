import { r as e, p as t, w as n, u as a, B as s, C as o, F as i, G as l, O as r, $ as c, J as A, H as d, D as u, E as m, M as p, N as h, K as v, L as g, z as w, b as k, c as C, X as L, T as b, S as U } from "./@vue-CLcIJuOQ.js";

import { u as S, b as I } from "./vue-router-CYC_ZM8h.js";

import { a as y, u as f, f as B, g as M, c as E, _ as Q, M as H, h as P, e as R, S as Z, C as j, i as F, j as J, s as x, k as O, b as G } from "./index-CFWyUmPD.js";

import { s as T } from "./store-D-KgEbVP.js";

import { W as q } from "./web3-BEnxSq4_.js";

import "./web3-core-ObgmPHuP.js";

import "./web3-types-DSrrWgZ8.js";

import "./web3-errors-hzVYhHGn.js";

import "./web3-eth-iban-75eRxAWM.js";

import "./web3-validator-BARD4gRE.js";

import "./setimmediate-DUOPLI_V.js";

import "./web3-eth-vWxzIr98.js";

import "./web3-eth-abi-eT7or4Ei.js";

import "./web3-eth-contract-CZNEMiMZ.js";

import "./web3-eth-personal-CKSgBcUg.js";

import "./web3-net-DSmyH1-b.js";

import "./web3-providers-http-C4pd9hst.js";

import "./isomorphic-ws-DZRFyHBe.js";

import "./web3-eth-accounts-DxnCIhbC.js";

import "./crc-32-BOb1C-oO.js";

import "./@ethereumjs-aMURc4PS.js";

import "./web3-eth-ens-BC7enYQN.js";

import "./web3-rpc-methods-Df_8n9zL.js";

import { C as N } from "./@ant-design-BL-uFhNg.js";

const V = [ "/accountSetting" ], W = () => {
    const a = y(), s = f(), o = S(), i = I();
    const l = e(!1), r = e([ 
    // {
    //     name: 'Home',
    //     route: '/home',
    // },
    // {
    //     name: "Our Legacy",
    //     route: "/ourLegacy",
    // },
    // {
    //     name: "Our Legacy",
    //     route: "",
    //     children: [
    //         {
    //             name: "Our Legacy",
    //             route: "#ourLegacy",
    //         },
    {
        name: "Chat",
        route: "chat"
    }, 
    //     ]
    // },
    {
        name: "Everything Narra",
        route: "vision"
    } ]), c = e => {
        document.querySelector(".menu").contains(e.target) || (l.value = !1);
    }, A = t((() => s.token || T.get("token")));
    n(l, (() => {
        "mobile" !== a.media && (l.value ? (window.addEventListener("touchend", c), window.addEventListener("click", c, !1)) : (window.removeEventListener("touchend", c), 
        window.removeEventListener("click", c)));
    }));
    return {
        openToggle: () => {
            l.value = !l.value;
        },
        openHandle: e => {
            r.value = r.value.map((t => t.children ? {
                ...t,
                open: t.name === e && !t.open
            } : t));
        },
        pageLinks: r,
        menuOpen: l,
        pushHandle: e => {
            i.push(e), l.value = !1;
        },
        onGoToHomePage: function() {
            i.push("/"), l.value = !1;
        },
        appState: a,
        logoSvg: "/narra-homepage/static/svg/logo-DUBKYUjt.svg",
        addIcon: "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.1709%2020.3613H32.8239'%20stroke='%23EDE4CC'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20.4961%208.33398V32.3874'%20stroke='%23EDE4CC'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        removeIcon: "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.1709%2020.3594H32.8239'%20stroke='%2358595B'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        isLogin: A,
        permission: e => {
            V.includes(o.path) && !A.value && i.back();
        },
        closeMenuHandle: e => {
            const t = document.querySelector(".menu-content");
            e.target === t && (l.value = !1);
        }
    };
}, X = e => {
    if (e.length < 10) return e;
    return e.slice(0, 6) + "..." + e.slice(-4);
}, z =  Q({
    __name: "MySwitch",
    props: {
        checked: Boolean,
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: [ "update:checked" ],
    setup(e, {emit: n}) {
        const a = e, s = n, u = t({
            get: () => a.checked,
            set(e) {
                s("update:checked", e);
            }
        });
        return (t, n) => (o(), i("div", {
            class: d([ "container", {
                disabled: a.disabled
            } ])
        }, [ l("label", {
            class: d([ "switch", {
                active: u.value,
                disabled: a.disabled
            } ])
        }, [ e.disabled ? A("", !0) : r((o(), i("input", {
            key: 0,
            "onUpdate:modelValue": n[0] || (n[0] = e => u.value = e),
            type: "checkbox",
            class: "checkbox"
        }, null, 512)), [ [ c, u.value ] ]), l("span", {
            class: d([ {
                disabled: a.disabled
            }, "slider" ])
        }, null, 2) ], 2) ], 2));
    }
}, [ [ "__scopeId", "data-v-e71a6e52" ] ]);

const D = () => {
    const t = f(), n = e(!1), a = y(), s = decodeURIComponent((new RegExp("[?|&]" + "InvitationCode" + "=([^&;]+?)(&|#|;|$)").exec(location.href) || [ , "" ])[1].replace(/\+/g, "%20")) || null;
    const o = new q(window.ethereum), i = async () => {
        a.debug("get account"), await window.ethereum.request({
            method: "eth_requestAccounts"
        }).then((function(e) {
            e && l(e[0]);
        }));
    }, l = async e => {
        M.open({
            title: "",
            content: "Loading..."
        });
        try {
            const a = await E.GetNonceAPI({
                address: e
            }), i = await o.eth.personal.sign(a.response, e, "dsa");
            if (i) {
                let a = {
                    address: e,
                    signmsg: i,
                    invitationCode: s || ""
                };
                await E.BindWalletAddressAPI(a), M.open({
                    title: "success",
                    content: "Connection success !",
                    type: "success"
                }), t.getUserInfo(), n.value = !1;
            }
            M.close();
        } catch (a) {
            return M.close(), void M.open({
                title: "error",
                content: "Connection failed, please try again !",
                type: "error"
            });
        }
    };
    return {
        MetamaskHandle: async () => {
            if (a.debug("before window.ethereum"), !window.ethereum) return a.debug("window.ethereum error"), 
            void M.open({
                title: "error",
                content: "Unable to obtain wallet plugin",
                type: "error"
            });
            a.debug("window.ethereum success");
            try {
                a.debug("get switchEthereumChain"), await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [ {
                        chainId: "0x138d4"
                    } ]
                });
            } catch (e) {
                a.debug("get switchEthereumChain-error"), a.debug(JSON.stringify(e));
                try {
                    a.debug("set switchEthereumChain"), await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [ {
                            chainId: "0x138d4",
                            // 目标链ID
                            chainName: "Berachain bArtio",
                            nativeCurrency: {
                                name: "BERA",
                                symbol: "BERA",
                                decimals: 18
                            },
                            rpcUrls: [ "https://bartio.rpc.berachain.com" ],
                            // 节点
                            blockExplorerUrls: [ "https://bartio.beratrail.io" ]
                        } ]
                    });
                } catch (t) {
                    return a.debug("set switchEthereumChain-error"), a.debug(JSON.stringify(t)), void M.open({
                        title: "error",
                        content: "Connection failed, please try again !",
                        type: "error"
                    });
                }
                return;
            }
            i();
        },
        modalOpen: n,
        phantomHandle: async () => {
            var e;
            if (!1 in window) return void M.open({
                title: "error",
                content: "Unable to obtain wallet plugin",
                type: "error"
            });
            const t = null == (e = window.phantom) ? void 0 : e.solana;
            if (!(null == t ? void 0 : t.isPhantom)) return void M.open({
                title: "error",
                content: "Unable to obtain wallet plugin",
                type: "error"
            });
            const n = await t.connect();
            l(n);
        }
    };
}, K = [ "onClick" ], Y = [ "src" ], _ =  Q({
    __name: "WalletBlock",
    emits: [ "close", "success" ],
    setup(e, {expose: t, emit: a}) {
        const {MetamaskHandle: s, modalOpen: r, phantomHandle: c} = D();
        y();
        const A = a;
        n(r, (() => {
            r.value || A("close");
        }));
        const d = [ {
            icon: "/narra-homepage/static/svg/Metamask-DMOR0nfZ.svg",
            name: "Metamask",
            handle: s
        } ];
        return t({
            openHandle: () => {
                r.value = !0;
            }
        }), (e, t) => (o(), u(H, {
            title: " ",
            open: w(r),
            "onUpdate:open": t[0] || (t[0] = e => k(r) ? r.value = e : null)
        }, {
            title: m((() => t[1] || (t[1] = [ l("div", {
                class: "modal-title"
            }, "Connect Wallet", -1) ]))),
            default: m((() => [ (o(), i(p, null, h(d, (e => l("div", {
                class: "item",
                onClick: e.handle,
                key: e.name
            }, [ l("img", {
                src: e.icon,
                alt: ""
            }, null, 8, Y), v(" " + g(e.name), 1) ], 8, K))), 64)) ])),
            _: 1
        }, 8, [ "open" ]));
    }
}, [ [ "__scopeId", "data-v-01d2abc0" ] ]), $ = {
    class: "page-inner"
}, ee = {
    class: "card-inner"
}, te = {
    class: "name"
}, ne = {
    class: "date"
}, ae = {
    class: "inventory"
}, se = {
    class: "inventory-body"
}, oe = {
    key: 0,
    class: "inventory-body-item"
}, ie = {
    key: 1,
    class: "inventory-body-item"
}, le = [ "src" ], re = {
    key: 2,
    class: "inventory-body-item"
}, ce = [ "src" ], Ae = {
    class: "set"
}, de = [ "src" ], ue = {
    class: "set-main"
}, me = {
    class: "form"
}, pe = {
    key: 0,
    class: "form-item"
}, he = {
    key: 1,
    class: "bindAddress"
}, ve = {
    class: "form-item"
}, ge = {
    class: "btn-group"
}, we =  Q( Object.assign({
    name: "accountCenterModal"
}, {
    __name: "index",
    setup(r, {expose: c}) {
        const p = e(), h = e(), L = e(), {formList: b, itemPic1: U, itemPic2: S, topPic: I, leftPic: y, userState: Q, walletChecked: F, newsletterChecked: J, width: x, submitHandle: O, updateHandle: G, maskString: T, edit: q} = (({walletBlock: o}) => {
            const i = f(), l = e(!1), r = t((() => [ {
                label: "Email",
                value: i.userInfo.Email,
                key: "email",
                disabled: !0
            }, {
                label: "Username",
                value: i.userInfo.User_name,
                key: "Username",
                disabled: !l.value,
                validate: (e, t) => {
                    e ? B.test(e) ? t() : t("The username length must be 4-30 characters, including letters or numbers.") : t("Please enter your username");
                },
                props: {
                    placeholder: "Enter your username"
                }
            }, {
                label: "Access Code(Optional)",
                value: i.userInfo.Access_code,
                key: "accessCode",
                Optional: !0,
                disabled: !l.value || !!i.userInfo.Access_code,
                props: {
                    placeholder: "Enter your access code"
                }
            } ])), c = e(!!i.userInfo.Bind_address), A = e(!!i.userInfo.Is_newsletter);
            n(c, (() => {
                c.value && o.value.openHandle();
            }));
            const d = e(1920), u = () => {
                d.value = +getComputedStyle(document.documentElement).getPropertyValue("--vw").replaceAll("px", "");
            };
            return a((() => {
                u(), window.addEventListener("resize", u);
            })), s((() => {
                window.removeEventListener("resize", u);
            })), {
                formList: r,
                itemPic1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASRSURBVHgB5ZjNbxtFGMafGduBrJ3mo5uCiSBO+hWQ2lAOhUpUIgWEOHLhDwgHLuW/SS8gQIIbF7ggJCB1URCogFK1SK1DabxOE5wPJ46T2knseId5J13bcex6d3YviEcae2c9nvntM+/7er3A/03L1s2RjcU/kvn0rwkEKI6ARICRcCgpgDfsUPhGPvXTCAJSIJAOoDwcXlnJyVnZsG0YyeWAQH1DNgJamSVkU99icWlZgUYkaObOD6PwKV+QlnRqp1RSgOnMIkp3r+G5/MfyfQpL/6wo0FB393W/McqgKXIwzHlyZS03XNjaRvXvT3AqPIP+mMBmEUiLCUROf4hYLIrBgT6LV6sT/SOXLGhIy0krdXNkf7+SZNKpE4PHYWS/VIADPUKaB/RHgRGWRPjh5zDNAbkKTxSrtnbWe3Yyn72VqFYqycX7vyQMvoW9tVmYxe9wvOfwOCHTPC8dzRnvomvwAnbEAIbOXLJClYpnRz1BEqCw7SQr/pXounMVy7lHiD0N9MVaT0SgtPXbu0DcjKF8fgrCOG0xj6CuIRsBjbtXwfYfKQjmYgZnnAjHUHrJO6gryFaAutIB7Zg4nQBTCxxT30SwVwHuLbBaoz6d/y11eAn6vpqndD8hIhFXycT9AN5+wPHjbAjHDCGhGKZnw7VWlv0hU0jIkG9Qrgt4Tzo482dIHRNMs3okODUSgdIF6YJyHUDSdql+vFZgSGdZ00Uw5Ar1c43HXkGZDqADkVoIwa1G41WMnxQtP+uUTFwHkMTU9QnXjWK27VwdHOU6gKQtud1LOa6a2Qu89YqNsRds1af3N2W/x6iP2S49udo9CZTrAJKcpGhaSr0+FYHM7oPmyOwV6KR2oEy3UG9JZ774PvwYSig3yV1yzOy1FSgli7PN772+37IKtFJzjPJdHESNV+UK9ePxk7aCuHyuqvqXz1G/Kre9PvNeBR7EVKNvEx+Pxy9YZc4n7OgZS9HLq3Cj+SxvAGaqYNOvD4lqItXQxjKVzrq7KxThHuWibZyyytLFuMz0WjRn5bZ3yW3nLrd9Psta1r52opgcjQvPgHS+dnleHT1wL6TaUo7h4pit6iDF6kFcHiQQhQL1O8VjO8BDkF5BmxelBPn657Da8iHTVo0SikCpFOkCHoH0Atq4MAFPz/JaMpGL5PSQice/2UK5rQNIahtUnWKUbjCm5R3QxbGq2urbD0IyWdonx4uqwFc9A5LaztrJ0XJF1ABJVGKcO59WrSsitABJHdPTa9a7kRdAUsfi5TXrhQgW0BWkF9CdPWCVyb+vZQQG6BrSDSgBFp6ZhPHaFAonJo+A6gKSPD8caBWjDmB07IPauGLqUxxb/QxGlz9ALchmUHbrI2yZ7yN6dvLIOAW68RXEy9e0AbUhHVC2u5ssba8negeebTuusDqP7r7nLbmSFiD8QJIs+WQtJp9NykmG240Rtsjk8hsTY+PvpKEpX88nE4lX0+vFnSuy6mRafU6A65ubV/wAknw56SgzNzMajXZfb3TUATx7/u15+FQgkKRG0CABA9ecBM09/P3GXADPyf9z+he4eK6XWaAruQAAAABJRU5ErkJggg==",
                itemPic2: "data:image/png;base64,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",
                topPic: "data:image/svg+xml,%3csvg%20width='396'%20height='35'%20viewBox='0%200%20396%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M35.0195%2033.5352H341.135'%20stroke='%23FAAC07'%20stroke-width='0.993316'/%3e%3cpath%20d='M52.7168%2034.0329L33.719%2034.0488L0.778511%200.730122H20.2754L52.7168%2034.0329Z'%20fill='%23FAAC07'/%3e%3cpath%20d='M343.395%2034.0332H295.417L302.197%2026.8501H335.92L343.395%2034.0332Z'%20fill='%23FAAC07'/%3e%3cpath%20d='M357.758%2034.0332H349.427L342.071%2026.481H350.644L357.758%2034.0332Z'%20fill='%23FAAC07'/%3e%3cpath%20d='M370.359%2034.0332H362.029L354.672%2026.481H363.245L370.359%2034.0332Z'%20fill='%23FAAC07'/%3e%3cpath%20d='M382.963%2034.0332H374.633L367.276%2026.481H375.849L382.963%2034.0332Z'%20fill='%23FAAC07'/%3e%3cpath%20d='M395.566%2034.0332H387.236L379.879%2026.481H388.452L395.566%2034.0332Z'%20fill='%23FAAC07'/%3e%3c/svg%3e",
                leftPic: "data:image/svg+xml,%3csvg%20width='34'%20height='597'%20viewBox='0%200%2034%20597'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_595_62806)'%3e%3cpath%20d='M1.62234%20595.527L32.6748%20592.991L32.6748%20573.324L1.62234%20595.527Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20590.412L32.6748%20567.378L32.6748%20547.524L0.460198%20570.558L0.460197%20590.412Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20564.613L32.6748%20541.58L32.6748%20521.726L0.460198%20544.759L0.460197%20564.613Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20538.812L32.6748%20515.779L32.6748%20495.925L0.460198%20518.958L0.460197%20538.812Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20513.013L32.6748%20489.98L32.6748%20470.126L0.460198%20493.159L0.460197%20513.013Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20487.213L32.6748%20464.179L32.6748%20444.325L0.460198%20467.359L0.460197%20487.213Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20461.414L32.6748%20438.38L32.6748%20418.526L0.460198%20441.56L0.460197%20461.414Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20435.613L32.6748%20412.58L32.6748%20392.726L0.460198%20415.759L0.460197%20435.613Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20409.812L32.6748%20386.779L32.6748%20366.925L0.460198%20389.958L0.460197%20409.812Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20384.013L32.6748%20360.98L32.6748%20341.126L0.460198%20364.159L0.460197%20384.013Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20358.213L32.6748%20335.179L32.6748%20315.325L0.460198%20338.359L0.460197%20358.213Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20332.414L32.6748%20309.38L32.6748%20289.526L0.460198%20312.56L0.460197%20332.414Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20306.613L32.6748%20283.58L32.6748%20263.726L0.460198%20286.759L0.460197%20306.613Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20280.814L32.6748%20257.781L32.6748%20237.927L0.460198%20260.96L0.460197%20280.814Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20255.013L32.6748%20231.98L32.6748%20212.126L0.460198%20235.159L0.460197%20255.013Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20229.215L32.6748%20206.181L32.6748%20186.327L0.460198%20209.361L0.460197%20229.215Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20203.414L32.6748%20180.38L32.6748%20160.526L0.460198%20183.56L0.460197%20203.414Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20177.615L32.6748%20154.582L32.6748%20134.728L0.460198%20157.761L0.460197%20177.615Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20151.814L32.6748%20128.781L32.6748%20108.927L0.460198%20131.96L0.460197%20151.814Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20126.015L32.6748%20102.982L32.6748%2083.1279L0.460198%20106.161L0.460197%20126.015Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%20100.215L32.6748%2077.1811L32.6748%2057.3271L0.460198%2080.3606L0.460197%20100.215Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%2074.4158L32.6748%2051.3823L32.6748%2031.5283L0.460198%2054.5617L0.460197%2074.4158Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M0.460197%2048.6148L32.6748%2025.5724L32.6748%205.71828L0.460198%2028.7517L0.460197%2048.6148Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3cpath%20d='M31.5133%200.594608L0.460198%203.13058L0.460197%2022.8062L31.5133%200.594608Z'%20stroke='%23FAAC07'%20stroke-width='0.920417'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_595_62806'%3e%3crect%20width='596.121'%20height='33.135'%20fill='white'%20transform='matrix(4.37114e-08%20-1%20-1%20-4.37114e-08%2033.135%20596.121)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
                userState: i,
                walletChecked: c,
                newsletterChecked: A,
                submitHandle: () => {
                    if (!B.test(r.value.find((e => "Username" === e.key)).value)) return void M.open({
                        title: "error",
                        content: "The username length must be 4-30 characters, including letters or numbers."
                    });
                    const e = {
                        Access_code: i.userInfo.Access_code ? "" : r.value.find((e => "accessCode" === e.key)).value || "",
                        Is_newsletter: A.value,
                        User_name: r.value.find((e => "Username" === e.key)).value
                    };
                    E.editUserInfoAPI(e).then((e => {
                        M.open({
                            title: "success",
                            content: "Update success !"
                        }), i.getUserInfo(), l.value = !1;
                    })).catch((e => {
                        M.open({
                            title: "error",
                            content: e,
                            type: "error"
                        });
                    }));
                },
                updateHandle: () => {
                    i.getUserInfo(), c.value = !!i.userInfo.Bind_address;
                },
                maskString: X,
                width: d,
                edit: l
            };
        })({
            walletBlock: p
        }), V = e(!1);
        return c({
            openHandle: () => {
                q.value = !1, V.value = !0;
            },
            closeHandle: () => {
                V.value = !1;
            }
        }), (e, t) => (o(), u(H, {
            open: V.value,
            "onUpdate:open": t[10] || (t[10] = e => V.value = e),
            title: "Account Center"
        }, {
            default: m((() => {
                var e;
                return [ l("div", $, [ l("div", {
                    class: d([ "card", {
                        active: w(Q).userInfo.Bind_address
                    } ])
                }, [ l("div", ee, [ t[16] || (t[16] = l("div", {
                    class: "des"
                }, "ACCESS CARD", -1)), t[17] || (t[17] = l("div", {
                    class: "avatar"
                }, null, -1)), l("h3", te, g(null == (e = w(Q).userInfo.User_name) ? void 0 : e.replaceAll("", "​")), 1), l("h5", ne, [ t[11] || (t[11] = l("span", null, "Date Joined : ", -1)), v(g(w(Q).userInfo.joinDate), 1) ]), l("div", ae, [ t[15] || (t[15] = l("h6", {
                    class: "inventory-title"
                }, "INVENTORY", -1)), l("div", se, [ w(Q).userInfo.Is_mint || w(Q).userInfo.Is_quiz ? A("", !0) : (o(), 
                i("div", oe, t[12] || (t[12] = [ l("span", null, " Still Empty ", -1) ]))), w(Q).userInfo.Is_quiz ? (o(), 
                i("div", ie, [ l("img", {
                    src: w(U),
                    alt: ""
                }, null, 8, le), t[13] || (t[13] = l("p", null, [ v("Quiz"), l("br"), v("Completed") ], -1)) ])) : A("", !0), w(Q).userInfo.Is_mint ? (o(), 
                i("div", re, [ l("img", {
                    src: w(S),
                    alt: ""
                }, null, 8, ce), t[14] || (t[14] = l("p", null, [ v("Access Card"), l("br"), v("NFT") ], -1)) ])) : A("", !0) ]) ]) ]) ], 2), l("div", Ae, [ l("img", {
                    class: "top-pic",
                    src: w(I),
                    alt: ""
                }, null, 8, de), l("div", ue, [ l("div", me, [ C(P, {
                    formList: w(b),
                    ref: "form"
                }, null, 8, [ "formList" ]), l("a", {
                    class: "password",
                    onClick: t[0] || (t[0] = e => h.value.openHandle())
                }, "Click to change password!"), w(Q).userInfo.Bind_address ? (o(), i("div", he, [ t[19] || (t[19] = l("span", null, "Wallet Address :", -1)), v(" " + g(w(T)(w(Q).userInfo.Bind_address)) + " ", 1), C(w(N), {
                    class: "copyicon",
                    onClick: t[2] || (t[2] = e => w(R)(w(Q).userInfo.Bind_address))
                }) ])) : (o(), i("div", pe, [ t[18] || (t[18] = v(" Wallet Connected : ")), C(z, {
                    checked: w(F),
                    "onUpdate:checked": t[1] || (t[1] = e => k(F) ? F.value = e : null)
                }, null, 8, [ "checked" ]) ])), l("div", ve, [ t[20] || (t[20] = v(" Newsletter : ")), C(z, {
                    disabled: !w(q),
                    checked: w(J),
                    "onUpdate:checked": t[3] || (t[3] = e => k(J) ? J.value = e : null)
                }, null, 8, [ "disabled", "checked" ]) ]), l("div", ge, [ w(q) ? (o(), i("button", {
                    key: 0,
                    class: "save",
                    onClick: t[4] || (t[4] = (...e) => w(O) && w(O)(...e))
                }, "save")) : (o(), i("button", {
                    key: 1,
                    class: "save",
                    onClick: t[5] || (t[5] = e => q.value = !0)
                }, "edit")) ]) ]) ]) ]) ]), C(Z, {
                    ref_key: "sendEmail",
                    ref: h,
                    onSuccess: t[6] || (t[6] = e => L.value.openHandle(e)),
                    onError: t[7] || (t[7] = e => w(M).open({
                        title: "error",
                        content: "We can’t find this email in our records. Please try again. ",
                        type: "error"
                    }))
                }, null, 512), C(j, {
                    ref_key: "codeVerification",
                    ref: L,
                    onError: t[8] || (t[8] = e => w(M).open({
                        title: "error",
                        content: "Verification failed! Please try again. ",
                        type: "error"
                    })),
                    onSuccess: t[9] || (t[9] = e => w(M).open({
                        title: "success",
                        content: "Verification successful !",
                        type: "error"
                    }))
                }, null, 512), C(_, {
                    ref_key: "walletBlock",
                    ref: p,
                    onClose: w(G)
                }, null, 8, [ "onClose" ]) ];
            })),
            _: 1
        }, 8, [ "open" ]));
    }
}), [ [ "__scopeId", "data-v-2750581b" ] ]), ke = [ "src" ], Ce = [ "onClick" ], Le =  Q({
    __name: "NameBlock",
    setup(t) {
        const a = y(), s = f(), r = e(!1);
        I();
        const c = e(), A = e(), u = [ {
            name: "Account Settings",
            link: "/accountSetting",
            handle: () => {
                A.value.openHandle();
            }
        }, {
            name: "Logout",
            link: "",
            handle: () => {
                s.logoutHandle();
            }
        } ], m = e => {
            var t;
            (null == (t = c.value) ? void 0 : t.contains(e.target)) || (r.value = !1);
        };
        return n(r, (() => {
            r.value ? (window.addEventListener("touchend", m), window.addEventListener("click", m, !1)) : (window.removeEventListener("touchend", m), 
            window.removeEventListener("click", m));
        })), (e, t) => (o(), i("div", {
            ref_key: "username",
            ref: c,
            class: d(w(a).media + "-username"),
            style: {
                display: "flex",
                "align-items": "center",
                position: "relative"
            }
        }, [ l("div", {
            class: "username",
            onClick: t[0] || (t[0] = e => r.value = !r.value)
        }, [ v(g(w(s).userInfo.User_name) + " ", 1), l("img", {
            class: d([ "icon", {
                "icon-active": r.value
            } ]),
            src: w("data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0116%2016.4495C12.5428%2016.9183%2011.7816%2016.9183%2011.3128%2016.4495L4.11283%209.24953C3.64408%208.78078%203.64408%208.01953%204.11283%207.55078C4.58158%207.08203%205.34283%207.08203%205.81158%207.55078L12.1641%2013.9033L18.5166%207.55453C18.9853%207.08578%2019.7466%207.08578%2020.2153%207.55453C20.6841%208.02328%2020.6841%208.78453%2020.2153%209.25328L13.0153%2016.4533L13.0116%2016.4495Z'%20fill='%23EDE4CC'/%3e%3c/svg%3e")
        }, null, 10, ke) ]), l("div", {
            class: "userCenter",
            style: L({
                height: r.value ? "pc" === w(a).media ? 60 * u.length + "px" : w(a).media.pad ? .6 * u.length + "rem" : .5 * u.length + "rem" : "0"
            })
        }, [ (o(), i(p, null, h(u, (e => l("div", {
            key: e.link,
            class: d([ "item", {
                hasTouch: w(F)
            } ]),
            onClick: t => e.handle()
        }, g(e.name), 11, Ce))), 64)) ], 4), C(we, {
            ref_key: "accountCenterModal",
            ref: A
        }, null, 512) ], 2));
    }
}, [ [ "__scopeId", "data-v-a03e6990" ] ]), be = () => {
    const n = I(), a = [ {
        icon: "data:image/png;base64,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",
        link: "https://x.com/narralayer"
    }, {
        icon: "data:image/png;base64,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",
        link: "https://t.me/+aKBbOTDVwFs5YjI1"
    }, 
    // {
    //   icon: discord,
    //   link: "",
    // },
    {
        icon: "data:image/png;base64,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",
        link: "https://youtube.com/@narralayer"
    }, {
        icon: "data:image/png;base64,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",
        link: "https://tiktok.com/@narralayer"
    }, {
        icon: "data:image/png;base64,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",
        link: "https://www.instagram.com/narralayer"
    } ], s = e(""), o = e(!1), i = e(!1), l = e(""), r = t((() => l.value || !s.value)), c = e(!1);
    return {
        pushHandle: e => {
            n.push(e);
        },
        shareIcons: a,
        email: s,
        emailSubmiting: o,
        emailSubmiteShowSucces: i,
        emailSubmiteShowErrorMessage: l,
        submitDisabled: r,
        successOpen: c,
        onGoToShare: function(e) {
            e && window.open(e);
        },
        pageLinks: [ [ {
            name: "Home",
            route: "/"
        } ], [ {
            name: "Chat",
            route: "chat"
        } ], [ {
            name: "Everything Narra",
            route: "vision"
        } ], 
        // [
        //     {
        //         name: "News",
        //         id: "#news",
        //     },
        // ],
        // [
        //     {
        //         name: "Company",
        //         id: "#team",
        //     },
        // ],
        // [
        //   {
        //     name: "Trainer's Oath",
        //     route: "oath",
        //   },
        // ],
        [ 
        //     {
        //         name: "Resources",
        //         route: "",
        //     },
        {
            name: "Media Kit",
            blankRoute: "mediakit"
        } ] ],
        onGoToPageLink: function(e) {
            document.querySelector(e) && window.scrollTo({
                top: document.querySelector(e).offsetTop - 100,
                behavior: "smooth"
            });
        },
        submitEmail: function() {
            J.test(s.value) ? (o.value = !0, E.submitEmail(s.value).then((e => {
                e && (s.value = "", c.value = !0);
            })).catch((e => {
                l.value = e, setTimeout((() => {
                    l.value = "";
                }), 2e3);
            })).finally((() => {
                o.value = !1;
            }))) : (l.value = "Please enter a valid email address", s.value = "wrong email example", 
            setTimeout((() => {
                l.value = "", s.value = "";
            }), 2e3));
        }
    };
}, Ue = {
    class: "header"
}, Se = {
    class: "header-content"
}, Ie = {
    class: "header-left"
}, ye = [ "src" ], fe = {
    class: "menu"
}, Be = {
    key: 0,
    class: "menu-main"
}, Me = {
    class: "icon-top"
}, Ee = [ "src" ], Qe = [ "onClick" ], He = [ "onClick" ], Pe = {
    key: 0
}, Re = [ "src" ], Ze = [ "src" ], je = [ "onClick" ], Fe =  Q({
    __name: "header",
    setup(e) {
        f();
        const {openToggle: t, openHandle: s, pageLinks: r, menuOpen: c, pushHandle: v, onGoToHomePage: k, appState: U, logoSvg: S, addIcon: I, removeIcon: y, isLogin: B, permission: M, closeMenuHandle: E, clickHandle: Q} = W();
        return a((() => {
            M();
        })), n(c, (() => {
            c.value ? x() : O();
        })), (e, n) => (o(), i("div", Ue, [ l("div", Se, [ l("div", Ie, [ l("img", {
            onClick: n[0] || (n[0] = (...e) => w(k) && w(k)(...e)),
            class: "logo",
            src: w(S),
            alt: ""
        }, null, 8, ye) ]), l("div", fe, [ w(B) ? (o(), u(Le, {
            key: 1
        })) : (o(), u(G, {
            key: 0
        }, {
            default: m((() => n[8] || (n[8] = [ l("h2", {
                class: "login"
            }, "Login", -1) ]))),
            _: 1
        })), w(c) ? (o(), i("div", {
            key: 2,
            onClick: n[1] || (n[1] = (...e) => w(t) && w(t)(...e)),
            class: "icon menuIcon-open"
        })) : (o(), i("div", {
            key: 3,
            onClick: n[2] || (n[2] = (...e) => w(t) && w(t)(...e)),
            class: "icon menuIcon"
        })) ]), l("div", {
            class: d([ "menu-content", {
                "menu-content-open": w(c)
            } ]),
            onClick: n[5] || (n[5] = (...e) => w(E) && w(E)(...e))
        }, [ C(b, {
            name: "right-in"
        }, {
            default: m((() => [ w(c) ? (o(), i("div", Be, [ l("div", Me, [ l("img", {
                onClick: n[3] || (n[3] = (...e) => w(k) && w(k)(...e)),
                class: "logo",
                src: w(S),
                alt: ""
            }, null, 8, Ee), l("div", {
                onClick: n[4] || (n[4] = e => c.value = !1),
                class: "close-icon"
            }) ]), (o(!0), i(p, null, h(w(r), (e => (o(), i("div", {
                class: "menu-item",
                key: e.name
            }, [ l("div", {
                onClick: t => w(s)(e.name),
                class: d([ "menu-item-title", e.open ? "menu-item-title-open" : "" ])
            }, [ l("h3", {
                onClick: t => !e.children && w(v)(e.route)
            }, g(e.name), 9, He), e.children ? (o(), i("span", Pe, [ e.open ? (o(), i("img", {
                key: 1,
                class: "icon",
                src: w(y),
                alt: ""
            }, null, 8, Ze)) : (o(), i("img", {
                key: 0,
                class: "icon",
                src: w(I)
            }, null, 8, Re)) ])) : A("", !0) ], 10, Qe), e.children ? (o(), i("div", {
                key: 0,
                class: d([ "sub-menu", e.open ? "menu-open" : "" ]),
                style: L({
                    height: e.open ? .18 * e.children.length + .16 * (e.children.length - 1) + "rem" : "0rem"
                })
            }, [ (o(!0), i(p, null, h(e.children, (e => (o(), i("h5", {
                onClick: t => w(v)(e.id),
                class: "menu-item"
            }, g(e.name), 9, je)))), 256)) ], 6)) : A("", !0) ])))), 128)) ])) : A("", !0) ])),
            _: 1
        }) ], 2) ]), w(U).musicToggle ? (o(), i("div", {
            key: 0,
            class: "music-icon music-on",
            onClick: n[6] || (n[6] = e => w(U).setMusicToggle())
        })) : A("", !0), w(U).musicToggle ? A("", !0) : (o(), i("div", {
            key: 1,
            class: "music-icon music-off",
            onClick: n[7] || (n[7] = e => w(U).setMusicToggle())
        })) ]));
    }
}, [ [ "__scopeId", "data-v-01cb88b5" ] ]), Je = {
    class: "footer"
}, xe = {
    class: "share-container"
}, Oe = [ "onClick", "src" ], Ge = {
    class: "menu"
}, Te = {
    class: "menu-col"
}, qe = [ "onClick" ], Ne = [ "onClick" ], Ve =  Q({
    __name: "footer",
    setup(e) {
        const {shareIcons: t, email: n, emailSubmiting: a, emailSubmiteShowSucces: s, emailSubmiteShowErrorMessage: r, submitDisabled: c, successOpen: A, onGoToShare: L, pageLinks: b, onGoToPageLink: S, submitEmail: I, pushHandle: y} = be();
        return (e, n) => {
            const a = U("router-link");
            return o(), i("div", null, [ C(H, {
                open: w(A),
                "onUpdate:open": n[0] || (n[0] = e => k(A) ? A.value = e : null),
                title: "Success"
            }, {
                default: m((() => n[1] || (n[1] = [ v(" Thank you for enrolling with the ZAI崽 Training Academy! 🏅"), l("br", null, null, -1), v("You'll be hearing from our team very soon. ") ]))),
                _: 1
            }, 8, [ "open" ]), l("div", Je, [ n[2] || (n[2] = l("h1", {
                class: "footer-title"
            }, "Join our community", -1)), l("div", xe, [ (o(!0), i(p, null, h(w(t), (e => (o(), 
            i("img", {
                onClick: t => w(L)(e.link),
                src: e.icon,
                class: "share-item"
            }, null, 8, Oe)))), 256)) ]), l("div", Ge, [ (o(!0), i(p, null, h(w(b), (e => (o(), 
            i("div", Te, [ (o(!0), i(p, null, h(e, ((e, t) => (o(), i("h3", {
                onClick: t => w(S)(e.id),
                class: d([ "menu-col-item", 0 === t ? "menu-col-item-title" : "" ])
            }, [ e.blankRoute ? (o(), u(a, {
                key: 0,
                to: e.blankRoute,
                target: "_blank"
            }, {
                default: m((() => [ v(g(e.name), 1) ])),
                _: 2
            }, 1032, [ "to" ])) : (o(), i("span", {
                key: 1,
                onClick: t => w(y)(e.route)
            }, g(e.name), 9, Ne)) ], 10, qe)))), 256)) ])))), 256)) ]) ]) ]);
        };
    }
}, [ [ "__scopeId", "data-v-1b5a1d50" ] ]);

export { Fe as C, Le as N, Ve as a, W as h, be as m };

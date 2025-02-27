var e = Object.defineProperty, a = Object.defineProperties, o = Object.getOwnPropertyDescriptors,
    t = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable,
    r = (a, o, t) => o in a ? e(a, o, {enumerable: !0, configurable: !0, writable: !0, value: t}) : a[o] = t,
    c = (e, a) => {
        for (var o in a || (a = {})) s.call(a, o) && r(e, o, a[o]);
        if (t) for (var o of t(a)) n.call(a, o) && r(e, o, a[o]);
        return e
    }, l = (e, t) => a(e, o(t));
import {
    p as i,
    a as d,
    o as u,
    c as m,
    r as p,
    b as g,
    w as k,
    k as f,
    d as y,
    e as v,
    t as h,
    F as b,
    f as w,
    g as j,
    h as P,
    i as C,
    u as _,
    j as V,
    _ as x,
    l as A,
    m as I,
    n as L,
    q as S,
    s as U,
    v as N,
    x as O,
    y as R
} from "./vendor.8e02db2a.js";

i("data-v-4b23e37a"), d();
const Q = {}, D = {class: "NinjaLogo", src: "/assets/logo.03d6d6da.png", alt: "logo"};
Q.render = function (e, a) {
    return u(), m("img", D)
};
const z = {components: {Logo: Q}}, q = k("data-v-1f23ce5f");
i("data-v-1f23ce5f");
const $ = {class: "header"}, B = {class: "header-wrapper"}, E = {class: "flex items-center"},
    K = g("p", {class: "pl-3 select-none"}, "Ninja", -1);
d();
const T = q(((e, a, o, t, s, n) => {
    const r = p("Logo");
    return u(), m("div", $, [g("div", B, [g("div", E, [g(r, {class: "h-10 w-10"}), K])])])
}));
z.render = T, z.__scopeId = "data-v-1f23ce5f";
const Z = f.create({prefixUrl: "/api", retry: {limit: 0}});
const F = {
    setup() {
        let e = y("unknown");
        return v((async () => {
            try {
                const a = await Z.get("status").json();
                console.log(a), e.value = a.data.version || "unknown"
            } catch (a) {
                console.error(a)
            }
        })), {backendVersion: e, frontendVersion: "1.0.1"}
    }
}, G = {class: "pt-8 pb-4 text-center text-gray-600"}, H = g("span", null, " | ", -1);
F.render = function (e, a, o, t, s, n) {
    return u(), m("div", G, [g("span", null, "Frontend: " + h(t.frontendVersion), 1), H, g("span", null, "Backend: " + h(t.backendVersion), 1)])
};
const J = {class: "main"}, W = {
    setup: e => (e, a) => {
        const o = p("router-view");
        return u(), m(b, null, [g(z), g("div", J, [g(o)]), g(F)], 64)
    }
};
const M = {
        setup() {
            const e = _();
            V();
            let a = w({nickName: void 0, timestamp: void 0, remark: void 0});
            const o = async () => {
                try {
                    const e = localStorage.getItem("eid");
                    if (!e) return void t();
                    const o = await function (e) {
                        const a = new URLSearchParams;
                        return a.set("eid", e), Z.get("userinfo", {searchParams: a}).json()
                    }(e);
                    if (!o) return x.error("获取用户信息失败，请重重新登录"), void t();
                    a.nickName = o.data.nickName, a.timestamp = new Date(o.data.timestamp).toLocaleString(), a.remark = o.data.remark
                } catch (e) {
                    console.error(e)
                }
            };
            v(o);
            const t = () => {
                localStorage.removeItem("eid"), e.push("/login")
            };
            return l(c({}, j(a)), {
                activity: [{
                    name: "玩一玩（可找到大多数活动）",
                    address: "京东 APP 首页-频道-边玩边赚",
                    href: "https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"
                }, {name: "宠汪汪", address: "京东APP-首页/玩一玩/我的-宠汪汪"}, {
                    name: "东东萌宠",
                    address: "京东APP-首页/玩一玩/我的-东东萌宠"
                }, {name: "东东农场", address: "京东APP-首页/玩一玩/我的-东东农场"}, {
                    name: "东东工厂",
                    address: "京东APP-首页/玩一玩/我的-东东工厂"
                }, {name: "东东超市", address: "京东APP-首页/玩一玩/我的-东东超市"}, {
                    name: "领现金",
                    address: "京东APP-首页/玩一玩/我的-领现金"
                }, {name: "东东健康社区", address: "京东APP-首页/玩一玩/我的-东东健康社区"}, {
                    name: "京喜农场",
                    address: "京喜APP-我的-京喜农场"
                }, {name: "京喜牧场", address: "京喜APP-我的-京喜牧场"}, {name: "京喜工厂", address: "京喜APP-我的-京喜工厂"}, {
                    name: "京喜财富岛",
                    address: "京喜APP-我的-京喜财富岛"
                }, {name: "京东极速版红包", address: "京东极速版APP-我的-红包"}], getInfo: o, logout: t, delAccount: async () => {
                    try {
                        const e = localStorage.getItem("eid"), a = await function (e) {
                            return Z.post("delaccount", {json: e}).json()
                        }({eid: e});
                        200 !== a.code ? x.error(a.message) : (x.success(a.message), setTimeout((() => {
                            t()
                        }), 1e3))
                    } catch (e) {
                        console.error(e)
                    }
                }, openUrlWithJD: e => {
                    const a = encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);
                    window.location.href = `openapp.jdmobile://virtual?params=${a}`, console.log(window.location.href)
                }, uploadRemark: async () => {
                    try {
                        if (!a.remark || "" === a.remark.replace(/(^\s*)|(\s*$)/g, "")) return;
                        const o = localStorage.getItem("eid"),
                            t = await (e = {eid: o, remark: a.remark}, Z.post("update/remark", {json: e}).json());
                        200 !== t.code ? x.error(t.message) : x.success(t.message)
                    } catch (o) {
                        console.error(o)
                    }
                    var e
                }
            })
        }
    }, X = {class: "content"}, Y = {class: "card"},
    ee = g("div", {class: "card-header"}, [g("p", {class: "card-title"}, "个人中心")], -1), ae = {class: "card-body"},
    oe = {class: "card-footer"}, te = I("退出登录"), se = I("删除账号"), ne = {class: "card"},
    re = g("div", {class: "card-header"}, [g("p", {class: "card-title"}, "备注"), g("span", {class: "card-subtitle"}, " 备注用于识别用户，查看通知，强烈建议配置。 ")], -1),
    ce = {class: "card-body"}, le = {class: "card-footer"}, ie = I("保存"), de = {class: "card"},
    ue = g("div", {class: "card-header"}, [g("p", {class: "card-title"}, "常见活动位置"), g("span", {class: "card-subtitle"}, "下面是一些常见活动的位置")], -1),
    me = {class: "card-body"}, pe = {class: "pr-2"};
M.render = function (e, a, o, t, s, n) {
    const r = p("el-button"), c = p("el-input");
    return u(), m("div", X, [g("div", Y, [ee, g("div", ae, [g("p", null, "昵称：" + h(e.nickName), 1), g("p", null, "更新时间：" + h(e.timestamp), 1)]), g("div", oe, [g(r, {
        size: "small",
        auto: "",
        onClick: t.logout
    }, {default: P((() => [te])), _: 1}, 8, ["onClick"]), g(r, {
        type: "danger",
        size: "small",
        auto: "",
        onClick: t.delAccount
    }, {
        default: P((() => [se])),
        _: 1
    }, 8, ["onClick"])])]), g("div", ne, [re, g("div", ce, [g(c, {
        modelValue: e.remark,
        "onUpdate:modelValue": a[1] || (a[1] = a => e.remark = a),
        placeholder: "备注",
        size: "small",
        clearable: "",
        class: "my-4 w-full"
    }, null, 8, ["modelValue"])]), g("div", le, [g(r, {
        type: "success",
        size: "small",
        auto: "",
        onClick: t.uploadRemark
    }, {
        default: P((() => [ie])),
        _: 1
    }, 8, ["onClick"])])]), g("div", de, [ue, g("div", me, [g("ul", null, [(u(!0), m(b, null, C(t.activity, ((e, a) => (u(), m("li", {
        key: a,
        class: "leading-normal"
    }, [g("span", null, h(e.name) + "：", 1), g("span", pe, h(e.address), 1), e.href ? (u(), m("a", {
        key: 0,
        href: "#",
        onClick: a => t.openUrlWithJD(e.href)
    }, "直达链接", 8, ["onClick"])) : A("", !0)])))), 128))])])])])
};
const ge = {
        setup() {
            const e = _();
            V();
            let a = w({
                marginCount: 0,
                allowAdd: !0,
                cookie: "",
                QRCode: void 0,
                qrCodeVisibility: !1,
                token: void 0,
                okl_token: void 0,
                cookies: void 0,
                ua: void 0,
                timer: void 0,
                waitLogin: !1,
                dialogVisible: !0
            });
            const o = async () => {
                try {
                    const e = (await Z.get("info").json()).data;
                    a.marginCount = e.marginCount, a.allowAdd = e.allowAdd
                } catch (e) {
                    console.error(e)
                }
            }, t = async () => {
                try {
                    const e = await Z.get("qrcode").json();
                    a.token = e.data.token, a.okl_token = e.data.okl_token, a.cookies = e.data.cookies, a.QRCode = e.data.QRCode, a.ua = e.data.ua, a.QRCode && (a.waitLogin = !0, clearInterval(a.timer), a.timer = setInterval(s, 3e3))
                } catch (e) {
                    console.error(e), x.error("生成二维码失败！请重试或放弃")
                }
            }, s = async () => {
                try {
                    const o = await function (e) {
                        return Z.post("check", {json: e}).json()
                    }({token: a.token, okl_token: a.okl_token, cookies: a.cookies, ua: a.ua});
                    switch (null == o ? void 0 : o.data.errcode) {
                        case 0:
                            localStorage.setItem("eid", o.data.eid), x.success(o.message), clearInterval(a.timer), e.push("/");
                            break;
                        case 176:
                            break;
                        default:
                            x.error(o.message), a.waitLogin = !1, clearInterval(a.timer)
                    }
                } catch (o) {
                    clearInterval(a.timer), a.waitLogin = !1
                }
            };
            return v((() => {
                o(), t()
            })), l(c({}, j(a)), {
                getInfo: o, getQrcode: t, showQrcode: async () => {
                    a.qrCodeVisibility = !0
                }, ckeckLogin: s, jumpLogin: async () => {
                    const e = `openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;
                    window.location.href = e
                }, CKLogin: async () => {
                    try {
                        const e = a.cookie.match(/pt_key=(.*?);/) && a.cookie.match(/pt_key=(.*?);/)[1],
                            o = a.cookie.match(/pt_pin=(.*?);/) && a.cookie.match(/pt_pin=(.*?);/)[1];
                        if (e && o) {
                            const a = await function (e) {
                                return Z.post("cklogin", {json: e}).json()
                            }({pt_key: e, pt_pin: o});
                            200 === a.code && a.data.eid ? (localStorage.setItem("eid", a.data.eid), x.success(a.message)) : x.error(a.message || "cookie 解析失败，请检查后重试！")
                        } else x.error("cookie 解析失败，请检查后重试！")
                    } catch (e) {
                        console.error(e)
                    }
                }
            })
        }
    }, ke = {class: "content"}, fe = {class: "card"}, ye = {class: "card-header"},
    ve = {class: "flex items-center justify-between"}, he = g("p", {class: "card-title"}, "扫码登录", -1),
    be = {class: "ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},
    we = g("span", {class: "card-subtitle"}, [I(" 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 "), g("br"), I(" 小程序无法使用跳转登录，请使用浏览器打开。 ")], -1),
    je = {class: "card-body text-center"}, Pe = {key: 0, class: "flex flex-col w-48 m-auto mt-4"}, Ce = I("扫描二维码登录"),
    _e = I("跳转到京东 App 登录"), Ve = g("div", {class: "card-footer"}, null, -1), xe = {class: "card hidden"},
    Ae = {class: "card-header"}, Ie = {class: "flex items-center justify-between"},
    Le = g("p", {class: "card-title"}, "CK 登录", -1),
    Se = {class: "ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},
    Ue = g("span", {class: "card-subtitle"}, " 请在下方输入您的 cookie 登录。 ", -1), Ne = {class: "card-body text-center"},
    Oe = I("登录"), Re = g("div", {class: "card-footet"}, null, -1);
    // Qe = g("div", {class: "text-base leading-6"}, [g("p", null, "扫码有风险，代挂需谨慎，付费代挂都是坑比。"), g("p", {class: "pt-2"}, [I(" Ninja 是一个开源项目，目前仅在"), g("a", {
    //     href: "https://github.com/MoonBegonia/ninja",
    //     target: "_blank"
    // }, " Github "), I("和"), g("a", {
    //     href: "https://t.me/joinchat/sHKuteb_lfdjNmZl",
    //     target: "_blank"
    // }, " TG 频道 "), I("分发和更新。如果喜欢可以去点个 Star。 ")])], -1), De = {class: "dialog-footer"}, ze = I("我已知晓");
ge.render = function (e, a, o, t, s, n) {
    const r = p("el-button"), c = p("el-input"), l = p("el-dialog");
    return u(), m("div", ke, [g("div", fe, [g("div", ye, [g("div", ve, [he, g("span", be, "余量：" + h(e.marginCount), 1)]), we]), g("div", je, [e.qrCodeVisibility ? (u(), m("img", {
        key: 1,
        src: e.QRCode,
        width: 256,
        class: "m-auto"
    }, null, 8, ["src"])) : (u(), m("div", Pe, [g(r, {
        type: "primary",
        round: "",
        onClick: t.showQrcode
    }, {default: P((() => [Ce])), _: 1}, 8, ["onClick"]), g(r, {
        class: "mt-4 ml-0",
        type: "primary",
        round: "",
        onClick: t.jumpLogin
    }, {
        default: P((() => [_e])),
        _: 1
    }, 8, ["onClick"])]))]), Ve]), g("div", xe, [g("div", Ae, [g("div", Ie, [Le, g("span", Se, "余量：" + h(e.marginCount), 1)]), Ue]), g("div", Ne, [g(c, {
        modelValue: e.cookie,
        "onUpdate:modelValue": a[1] || (a[1] = a => e.cookie = a),
        size: "small",
        clearable: "",
        class: "my-4 w-full"
    }, null, 8, ["modelValue"]), g(r, {
        type: "primary",
        size: "small",
        round: "",
        onClick: t.CKLogin
    }, {default: P((() => [Oe])), _: 1}, 8, ["onClick"])]), Re]), g(l, {
        title: "Ninja 提醒您",
        modelValue: e.dialogVisible,
        "onUpdate:modelValue": a[3] || (a[3] = a => e.dialogVisible = a),
        center: "",
        "destroy-on-close": "",
        "custom-class": "notice-dialog",
        top: "25vh"
    }, {
        footer: P((() => [g("span", De, [g(r, {
            type: "primary",
            round: "",
            onClick: a[2] || (a[2] = a => e.dialogVisible = !1)
        }, {default: P((() => [ze])), _: 1})])])), default: P((() => [Qe])), _: 1
    }, 8, ["modelValue"])])
};
const qe = [{path: "/", component: M}, {path: "/login", component: ge}], $e = L({history: S(), routes: qe}),
    Be = [N, O, x, R], Ee = [x], Ke = U(W);
Be.forEach((e => {
    Ke.component(e.name, e)
})), Ee.forEach((e => {
    Ke.use(e)
})), Ke.use($e), Ke.mount("#app");

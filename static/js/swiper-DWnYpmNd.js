import { r as e, q as t, s as i, w as s, n as a, u as r, v as n, h as l, x as o, p as d } from "./@vue-CLcIJuOQ.js";

function p(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
}

function c(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((i => {
        void 0 === e[i] ? e[i] = t[i] : p(t[i]) && p(e[i]) && Object.keys(t[i]).length > 0 && c(e[i], t[i]);
    }));
}

const u = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({
        initEvent() {}
    }),
    createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => []
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function f() {
    const e = "undefined" != typeof document ? document : {};
    return c(e, u), e;
}

const v = {
    document: u,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({
        getPropertyValue: () => ""
    }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
    }
};

function m() {
    const e = "undefined" != typeof window ? window : {};
    return c(e, v), e;
}

function h(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
}

function g() {
    return Date.now();
}

function y(e, t) {
    void 0 === t && (t = "x");
    const i = m();
    let s, a, r;
    const n = function(e) {
        const t = m();
        let i;
        return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), 
        i || (i = e.style), i;
    }(e);
    return i.WebKitCSSMatrix ? (a = n.transform || n.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), 
    r = new i.WebKitCSSMatrix("none" === a ? "" : a)) : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), 
    s = r.toString().split(",")), "x" === t && (a = i.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), 
    "y" === t && (a = i.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), 
    a || 0;
}

function w(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
}

function b() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = [ "__proto__", "constructor", "prototype" ];
    for (let s = 1; s < arguments.length; s += 1) {
        const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != a && (i = a, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
            const i = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, s = i.length; t < s; t += 1) {
                const s = i[t], r = Object.getOwnPropertyDescriptor(a, s);
                void 0 !== r && r.enumerable && (w(e[s]) && w(a[s]) ? a[s].__swiper__ ? e[s] = a[s] : b(e[s], a[s]) : !w(e[s]) && w(a[s]) ? (e[s] = {}, 
                a[s].__swiper__ ? e[s] = a[s] : b(e[s], a[s])) : e[s] = a[s]);
            }
        }
    }
    var i;
    return e;
}

function S(e, t, i) {
    e.style.setProperty(t, i);
}

function T(e) {
    let {swiper: t, targetPosition: i, side: s} = e;
    const a = m(), r = -t.translate;
    let n, l = null;
    const o = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
    const d = i > r ? "next" : "prev", p = (e, t) => "next" === d && e >= t || "prev" === d && e <= t, c = () => {
        n =  (new Date).getTime(), null === l && (l = n);
        const e = Math.max(Math.min((n - l) / o, 1), 0), d = .5 - Math.cos(e * Math.PI) / 2;
        let u = r + d * (i - r);
        if (p(u, i) && (u = i), t.wrapperEl.scrollTo({
            [s]: u
        }), p(u, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", 
        setTimeout((() => {
            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [s]: u
            });
        })), void a.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = a.requestAnimationFrame(c);
    };
    c();
}

function E(e, t) {
    void 0 === t && (t = "");
    const i = [ ...e.children ];
    return e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((e => e.matches(t))) : i;
}

function x(e) {
    try {
        return;
    } catch (t) {}
}

function C(e, t) {
    void 0 === t && (t = []);
    const i = document.createElement(e);
    return i.classList.add(...Array.isArray(t) ? t : function(e) {
        return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()));
    }(t)), i;
}

function M(e, t) {
    return m().getComputedStyle(e, null).getPropertyValue(t);
}

function P(e) {
    let t, i = e;
    if (i) {
        for (t = 0; null !== (i = i.previousSibling); ) 1 === i.nodeType && (t += 1);
        return t;
    }
}

function O(e, t) {
    const i = [];
    let s = e.parentElement;
    for (;s; ) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
    return i;
}

function L(e, t, i) {
    const s = m();
    return e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom"));
}

function I(e) {
    return (Array.isArray(e) ? e : [ e ]).filter((e => !!e));
}

let k, A, z;

function B() {
    return k || (k = function() {
        const e = m(), t = f();
        return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
        };
    }()), k;
}

function _(e) {
    return void 0 === e && (e = {}), A || (A = function(e) {
        let {userAgent: t} = void 0 === e ? {} : e;
        const i = B(), s = m(), a = s.navigator.platform, r = t || s.navigator.userAgent, n = {
            ios: !1,
            android: !1
        }, l = s.screen.width, o = s.screen.height, d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
        let p = r.match(/(iPad).*OS\s([\d_]+)/);
        const c = r.match(/(iPod)(.*OS\s([\d_]+))?/), u = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = "Win32" === a;
        let v = "MacIntel" === a;
        return !p && v && i.touch && [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ].indexOf(`${l}x${o}`) >= 0 && (p = r.match(/(Version)\/([\d.]+)/), 
        p || (p = [ 0, 1, "13_0_0" ]), v = !1), d && !f && (n.os = "android", n.android = !0), 
        (p || u || c) && (n.os = "ios", n.ios = !0), n;
    }(e)), A;
}

function N() {
    return z || (z = function() {
        const e = m(), t = _();
        let i = !1;
        function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }
        if (s()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
                const [e, s] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                i = e < 16 || 16 === e && s < 2;
            }
        }
        const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), r = s();
        return {
            isSafari: i || r,
            needPerspectiveFix: i,
            need3dFix: r || a && t.ios,
            isWebView: a
        };
    }()), z;
}

const D = (e, t, i) => {
    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i);
};

const G = (e, t, i) => {
    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i);
};

const $ = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
    if (i) {
        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
            i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), 
            t && t.remove());
        }))), t && t.remove();
    }
}, F = (e, t) => {
    if (!e.slides[t]) return;
    const i = e.slides[t].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading");
}, j = e => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const i = e.slides.length;
    if (!i || !t || t < 0) return;
    t = Math.min(t, i);
    const s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), a = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const i = a, r = [ i - t ];
        return r.push(...Array.from({
            length: t
        }).map(((e, t) => i + s + t))), void e.slides.forEach(((t, i) => {
            r.includes(t.column) && F(e, i);
        }));
    }
    const r = a + s - 1;
    if (e.params.rewind || e.params.loop) for (let n = a - t; n <= r + t; n += 1) {
        const t = (n % i + i) % i;
        (t < a || t > r) && F(e, t);
    } else for (let n = Math.max(a - t, 0); n <= Math.min(r + t, i - 1); n += 1) n !== a && (n > r || n < a) && F(e, n);
};

function V(e) {
    let {swiper: t, runCallbacks: i, direction: s, step: a} = e;
    const {activeIndex: r, previousIndex: n} = t;
    let l = s;
    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${a}`), 
    i && r !== n) {
        if ("reset" === l) return void t.emit(`slideResetTransition${a}`);
        t.emit(`slideChangeTransition${a}`), "next" === l ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`);
    }
}

function R(e, t, i) {
    const s = m(), {params: a} = e, r = a.edgeSwipeDetection, n = a.edgeSwipeThreshold;
    return !r || !(i <= n || i >= s.innerWidth - n) || "prevent" === r && (t.preventDefault(), 
    !0);
}

function H(e) {
    const t = this, i = f();
    let s = e;
    s.originalEvent && (s = s.originalEvent);
    const a = t.touchEventsData;
    if ("pointerdown" === s.type) {
        if (null !== a.pointerId && a.pointerId !== s.pointerId) return;
        a.pointerId = s.pointerId;
    } else "touchstart" === s.type && 1 === s.targetTouches.length && (a.touchId = s.targetTouches[0].identifier);
    if ("touchstart" === s.type) return void R(t, s, s.targetTouches[0].pageX);
    const {params: r, touches: n, enabled: l} = t;
    if (!l) return;
    if (!r.simulateTouch && "mouse" === s.pointerType) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let o = s.target;
    if ("wrapper" === r.touchEventsTarget && !function(e, t) {
        const i = t.contains(e);
        if (!i && t instanceof HTMLSlotElement) return [ ...t.assignedElements() ].includes(e);
        return i;
    }(o, t.wrapperEl)) return;
    if ("which" in s && 3 === s.which) return;
    if ("button" in s && s.button > 0) return;
    if (a.isTouched && a.isMoved) return;
    const d = !!r.noSwipingClass && "" !== r.noSwipingClass, p = s.composedPath ? s.composedPath() : s.path;
    d && s.target && s.target.shadowRoot && p && (o = p[0]);
    const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, u = !(!s.target || !s.target.shadowRoot);
    if (r.noSwiping && (u ? function(e, t) {
        return void 0 === t && (t = this), function t(i) {
            if (!i || i === f() || i === m()) return null;
            i.assignedSlot && (i = i.assignedSlot);
            const s = i.closest(e);
            return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
        }(t);
    }(c, o) : o.closest(c))) return void (t.allowClick = !0);
    if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
    n.currentX = s.pageX, n.currentY = s.pageY;
    const v = n.currentX, h = n.currentY;
    if (!R(t, s, v)) return;
    Object.assign(a, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), n.startX = v, n.startY = h, a.touchStartTime = g(), t.allowClick = !0, t.updateSize(), 
    t.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1);
    let y = !0;
    o.matches(a.focusableElements) && (y = !1, "SELECT" === o.nodeName && (a.isTouched = !1)), 
    i.activeElement && i.activeElement.matches(a.focusableElements) && i.activeElement !== o && ("mouse" === s.pointerType || "mouse" !== s.pointerType && !o.matches(a.focusableElements)) && i.activeElement.blur();
    const w = y && t.allowTouchMove && r.touchStartPreventDefault;
    !r.touchStartForcePreventDefault && !w || o.isContentEditable || s.preventDefault(), 
    r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), 
    t.emit("touchStart", s);
}

function q(e) {
    const t = f(), i = this, s = i.touchEventsData, {params: a, touches: r, rtlTranslate: n, enabled: l} = i;
    if (!l) return;
    if (!a.simulateTouch && "mouse" === e.pointerType) return;
    let o, d = e;
    if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
        if (null !== s.touchId) return;
        if (d.pointerId !== s.pointerId) return;
    }
    if ("touchmove" === d.type) {
        if (o = [ ...d.changedTouches ].filter((e => e.identifier === s.touchId))[0], !o || o.identifier !== s.touchId) return;
    } else o = d;
    if (!s.isTouched) return void (s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", d));
    const p = o.pageX, c = o.pageY;
    if (d.preventedByNestedSwiper) return r.startX = p, void (r.startY = c);
    if (!i.allowTouchMove) return d.target.matches(s.focusableElements) || (i.allowClick = !1), 
    void (s.isTouched && (Object.assign(r, {
        startX: p,
        startY: c,
        currentX: p,
        currentY: c
    }), s.touchStartTime = g()));
    if (a.touchReleaseOnEdges && !a.loop) if (i.isVertical()) {
        if (c < r.startY && i.translate <= i.maxTranslate() || c > r.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, 
        void (s.isMoved = !1);
    } else if (p < r.startX && i.translate <= i.maxTranslate() || p > r.startX && i.translate >= i.minTranslate()) return;
    if (t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== d.target && "mouse" !== d.pointerType && t.activeElement.blur(), 
    t.activeElement && d.target === t.activeElement && d.target.matches(s.focusableElements)) return s.isMoved = !0, 
    void (i.allowClick = !1);
    s.allowTouchCallbacks && i.emit("touchMove", d), r.previousX = r.currentX, r.previousY = r.currentY, 
    r.currentX = p, r.currentY = c;
    const u = r.currentX - r.startX, v = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(u ** 2 + v ** 2) < i.params.threshold) return;
    if (void 0 === s.isScrolling) {
        let e;
        i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : u * u + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(u)) / Math.PI, 
        s.isScrolling = i.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle);
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", d), void 0 === s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)), 
    s.isScrolling || "touchmove" === d.type && s.preventTouchMoveFromPointerMove) return void (s.isTouched = !1);
    if (!s.startMoving) return;
    i.allowClick = !1, !a.cssMode && d.cancelable && d.preventDefault(), a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
    let m = i.isHorizontal() ? u : v, h = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    a.oneWayMovement && (m = Math.abs(m) * (n ? 1 : -1), h = Math.abs(h) * (n ? 1 : -1)), 
    r.diff = m, m *= a.touchRatio, n && (m = -m, h = -h);
    const y = i.touchesDirection;
    i.swipeDirection = m > 0 ? "prev" : "next", i.touchesDirection = h > 0 ? "prev" : "next";
    const w = i.params.loop && !a.cssMode, b = "next" === i.touchesDirection && i.allowSlideNext || "prev" === i.touchesDirection && i.allowSlidePrev;
    if (!s.isMoved) {
        if (w && b && i.loopFix({
            direction: i.swipeDirection
        }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
            const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            i.wrapperEl.dispatchEvent(e);
        }
        s.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), 
        i.emit("sliderFirstMove", d);
    }
    if (
     (new Date).getTime(), s.isMoved && s.allowThresholdMove && y !== i.touchesDirection && w && b && Math.abs(m) >= 1) return Object.assign(r, {
        startX: p,
        startY: c,
        currentX: p,
        currentY: c,
        startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, void (s.startTranslate = s.currentTranslate);
    i.emit("sliderMove", d), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
    let S = !0, T = a.resistanceRatio;
    if (a.touchReleaseOnEdges && (T = 0), m > 0 ? (w && b && s.allowThresholdMove && s.currentTranslate > (a.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - ("auto" !== a.slidesPerView && i.slides.length - a.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }), s.currentTranslate > i.minTranslate() && (S = !1, a.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** T))) : m < 0 && (w && b && s.allowThresholdMove && s.currentTranslate < (a.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + ("auto" !== a.slidesPerView && i.slides.length - a.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: i.slides.length - ("auto" === a.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
    }), s.currentTranslate < i.maxTranslate() && (S = !1, a.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** T))), 
    S && (d.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), 
    !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), 
    i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), 
    a.threshold > 0) {
        if (!(Math.abs(m) > a.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove) return s.allowThresholdMove = !0, r.startX = r.currentX, 
        r.startY = r.currentY, s.currentTranslate = s.startTranslate, void (r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
    }
    a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && i.freeMode || a.watchSlidesProgress) && (i.updateActiveIndex(), 
    i.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), 
    i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate));
}

function W(e) {
    const t = this, i = t.touchEventsData;
    let s, a = e;
    a.originalEvent && (a = a.originalEvent);
    if ("touchend" === a.type || "touchcancel" === a.type) {
        if (s = [ ...a.changedTouches ].filter((e => e.identifier === i.touchId))[0], !s || s.identifier !== i.touchId) return;
    } else {
        if (null !== i.touchId) return;
        if (a.pointerId !== i.pointerId) return;
        s = a;
    }
    if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(a.type)) {
        if (!([ "pointercancel", "contextmenu" ].includes(a.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    i.pointerId = null, i.touchId = null;
    const {params: r, touches: n, rtlTranslate: l, slidesGrid: o, enabled: d} = t;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === a.pointerType) return;
    if (i.allowTouchCallbacks && t.emit("touchEnd", a), i.allowTouchCallbacks = !1, 
    !i.isTouched) return i.isMoved && r.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, 
    void (i.startMoving = !1);
    r.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const p = g(), c = p - i.touchStartTime;
    if (t.allowClick) {
        const e = a.path || a.composedPath && a.composedPath();
        t.updateClickedSlide(e && e[0] || a.target, e), t.emit("tap click", a), c < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", a);
    }
    if (i.lastClickTime = g(), h((() => {
        t.destroyed || (t.allowClick = !0);
    })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) return i.isTouched = !1, 
    i.isMoved = !1, void (i.startMoving = !1);
    let u;
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = r.followFinger ? l ? t.translate : -t.translate : -i.currentTranslate, 
    r.cssMode) return;
    if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
        currentPos: u
    });
    const f = u >= -t.maxTranslate() && !t.params.loop;
    let v = 0, m = t.slidesSizesGrid[0];
    for (let h = 0; h < o.length; h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
        const e = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== o[h + e] ? (f || u >= o[h] && u < o[h + e]) && (v = h, m = o[h + e] - o[h]) : (f || u >= o[h]) && (v = h, 
        m = o[o.length - 1] - o[o.length - 2]);
    }
    let y = null, w = null;
    r.rewind && (t.isBeginning ? w = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (y = 0));
    const b = (u - o[v]) / m, S = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (c > r.longSwipesMs) {
        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (b >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? y : v + S) : t.slideTo(v)), 
        "prev" === t.swipeDirection && (b > 1 - r.longSwipesRatio ? t.slideTo(v + S) : null !== w && b < 0 && Math.abs(b) > r.longSwipesRatio ? t.slideTo(w) : t.slideTo(v));
    } else {
        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(v + S) : t.slideTo(v) : ("next" === t.swipeDirection && t.slideTo(null !== y ? y : v + S), 
        "prev" === t.swipeDirection && t.slideTo(null !== w ? w : v));
    }
}

function X() {
    const e = this, {params: t, el: i} = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: a, snapGrid: r} = e, n = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), 
    e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), 
    e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), 
    e.autoplay.resizeTimeout = setTimeout((() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }), 500)), e.allowSlidePrev = a, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}

function Y(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), 
    e.stopImmediatePropagation())));
}

function U() {
    const e = this, {wrapperEl: t, rtlTranslate: i, enabled: s} = e;
    if (!s) return;
    let a;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 
    0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, a !== e.progress && e.updateProgress(i ? -e.translate : e.translate), 
    e.emit("setTranslate", e.translate, !1);
}

function K(e) {
    const t = this;
    $(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
}

function Z() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}

const J = (e, t) => {
    const i = f(), {params: s, el: a, wrapperEl: r, device: n} = e, l = !!s.nested, o = "on" === t ? "addEventListener" : "removeEventListener", d = t;
    a && "string" != typeof a && (i[o]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), a[o]("touchstart", e.onTouchStart, {
        passive: !1
    }), a[o]("pointerdown", e.onTouchStart, {
        passive: !1
    }), i[o]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), i[o]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), i[o]("touchend", e.onTouchEnd, {
        passive: !0
    }), i[o]("pointerup", e.onTouchEnd, {
        passive: !0
    }), i[o]("pointercancel", e.onTouchEnd, {
        passive: !0
    }), i[o]("touchcancel", e.onTouchEnd, {
        passive: !0
    }), i[o]("pointerout", e.onTouchEnd, {
        passive: !0
    }), i[o]("pointerleave", e.onTouchEnd, {
        passive: !0
    }), i[o]("contextmenu", e.onTouchEnd, {
        passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && a[o]("click", e.onClick, !0), 
    s.cssMode && r[o]("scroll", e.onScroll), s.updateOnWindowResize ? e[d](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", X, !0) : e[d]("observerUpdate", X, !0), 
    a[o]("load", e.onLoad, {
        capture: !0
    }));
};

const Q = (e, t) => e.grid && t.grid && t.grid.rows > 1;

var ee = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: !1,
    // Set wrapper width
    setWrapperSize: !1,
    // Virtual Translate
    virtualTranslate: !1,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: !0,
    // Round length
    roundLengths: !1,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    // Unique Navigation Elements
    uniqueNavElements: !0,
    // Resistance
    resistance: !0,
    resistanceRatio: .85,
    // Progress
    watchSlidesProgress: !1,
    // Cursor
    grabCursor: !1,
    // Clicks
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    // loop
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    // rewind
    rewind: !1,
    // Swiping/no swiping
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: !0,
    // Internals
    _emitClasses: !1
};

function te(e, t) {
    return function(i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0], a = i[s];
        "object" == typeof a && null !== a ? (!0 === e[s] && (e[s] = {
            enabled: !0
        }), "navigation" === s && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), 
        [ "pagination", "scrollbar" ].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), 
        s in e && "enabled" in a ? ("object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), 
        e[s] || (e[s] = {
            enabled: !1
        }), b(t, i)) : b(t, i)) : b(t, i);
    };
}

const ie = {
    eventsEmitter: {
        on(e, t, i) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof t) return s;
            const a = i ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
            })), s;
        },
        once(e, t, i) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof t) return s;
            function a() {
                s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                t.apply(s, r);
            }
            return a.__emitterProxy = t, s.on(e, a, i);
        },
        onAny(e, t) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof e) return i;
            const s = t ? "unshift" : "push";
            return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i;
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const i = t.eventsAnyListeners.indexOf(e);
            return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
            const i = this;
            return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(((s, a) => {
                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
                }));
            })), i) : i;
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, i, s;
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], i = r.slice(1, r.length), 
            s = e) : (t = r[0].events, i = r[0].data, s = r[0].context || e), i.unshift(s);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(s, [ t, ...i ]);
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(s, i);
                }));
            })), e;
        }
    },
    update: {
        updateSize: function() {
            const e = this;
            let t, i;
            const s = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s.clientWidth, 
            i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s.clientHeight, 
            0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(M(s, "padding-left") || 0, 10) - parseInt(M(s, "padding-right") || 0, 10), 
            i = i - parseInt(M(s, "padding-top") || 0, 10) - parseInt(M(s, "padding-bottom") || 0, 10), 
            Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i
            }));
        },
        updateSlides: function() {
            const e = this;
            function t(t, i) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(i)) || 0);
            }
            const i = e.params, {wrapperEl: s, slidesEl: a, size: r, rtlTranslate: n, wrongRTL: l} = e, o = e.virtual && i.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, p = E(a, `.${e.params.slideClass}, swiper-slide`), c = o ? e.virtual.slides.length : p.length;
            let u = [];
            const f = [], v = [];
            let m = i.slidesOffsetBefore;
            "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
            let h = i.slidesOffsetAfter;
            "function" == typeof h && (h = i.slidesOffsetAfter.call(e));
            const g = e.snapGrid.length, y = e.slidesGrid.length;
            let w = i.spaceBetween, b = -m, T = 0, x = 0;
            if (void 0 === r) return;
            "string" == typeof w && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * r : "string" == typeof w && (w = parseFloat(w)), 
            e.virtualSize = -w, p.forEach((e => {
                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", 
                e.style.marginTop = "";
            })), i.centeredSlides && i.cssMode && (S(s, "--swiper-centered-offset-before", ""), 
            S(s, "--swiper-centered-offset-after", ""));
            const C = i.grid && i.grid.rows > 1 && e.grid;
            let P;
            C ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
            const O = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
            for (let S = 0; S < c; S += 1) {
                let s;
                if (P = 0, p[S] && (s = p[S]), C && e.grid.updateSlide(S, s, p), !p[S] || "none" !== M(s, "display")) {
                    if ("auto" === i.slidesPerView) {
                        O && (p[S].style[e.getDirectionLabel("width")] = "");
                        const a = getComputedStyle(s), r = s.style.transform, n = s.style.webkitTransform;
                        if (r && (s.style.transform = "none"), n && (s.style.webkitTransform = "none"), 
                        i.roundLengths) P = e.isHorizontal() ? L(s, "width") : L(s, "height"); else {
                            const e = t(a, "width"), i = t(a, "padding-left"), r = t(a, "padding-right"), n = t(a, "margin-left"), l = t(a, "margin-right"), o = a.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) P = e + n + l; else {
                                const {clientWidth: t, offsetWidth: a} = s;
                                P = e + i + r + n + l + (a - t);
                            }
                        }
                        r && (s.style.transform = r), n && (s.style.webkitTransform = n), i.roundLengths && (P = Math.floor(P));
                    } else P = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (P = Math.floor(P)), 
                    p[S] && (p[S].style[e.getDirectionLabel("width")] = `${P}px`);
                    p[S] && (p[S].swiperSlideSize = P), v.push(P), i.centeredSlides ? (b = b + P / 2 + T / 2 + w, 
                    0 === T && 0 !== S && (b = b - r / 2 - w), 0 === S && (b = b - r / 2 - w), Math.abs(b) < .001 && (b = 0), 
                    i.roundLengths && (b = Math.floor(b)), x % i.slidesPerGroup == 0 && u.push(b), f.push(b)) : (i.roundLengths && (b = Math.floor(b)), 
                    (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(b), 
                    f.push(b), b = b + P + w), e.virtualSize += P + w, T = P, x += 1;
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + h, n && l && ("slide" === i.effect || "coverflow" === i.effect) && (s.style.width = `${e.virtualSize + w}px`), 
            i.setWrapperSize && (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`), 
            C && e.grid.updateWrapperSize(P, u), !i.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let a = u[s];
                    i.roundLengths && (a = Math.floor(a)), u[s] <= e.virtualSize - r && t.push(a);
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
            }
            if (o && i.loop) {
                const t = v[0] + w;
                if (i.slidesPerGroup > 1) {
                    const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup), a = t * i.slidesPerGroup;
                    for (let e = 0; e < s; e += 1) u.push(u[u.length - 1] + a);
                }
                for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === i.slidesPerGroup && u.push(u[u.length - 1] + t), 
                f.push(f[f.length - 1] + t), e.virtualSize += t;
            }
            if (0 === u.length && (u = [ 0 ]), 0 !== w) {
                const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                p.filter(((e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1)).forEach((e => {
                    e.style[t] = `${w}px`;
                }));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
                let e = 0;
                v.forEach((t => {
                    e += t + (w || 0);
                })), e -= w;
                const t = e > r ? e - r : 0;
                u = u.map((e => e <= 0 ? -m : e > t ? t + h : e));
            }
            if (i.centerInsufficientSlides) {
                let e = 0;
                v.forEach((t => {
                    e += t + (w || 0);
                })), e -= w;
                const t = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                if (e + t < r) {
                    const i = (r - e - t) / 2;
                    u.forEach(((e, t) => {
                        u[t] = e - i;
                    })), f.forEach(((e, t) => {
                        f[t] = e + i;
                    }));
                }
            }
            if (Object.assign(e, {
                slides: p,
                snapGrid: u,
                slidesGrid: f,
                slidesSizesGrid: v
            }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                S(s, "--swiper-centered-offset-before", -u[0] + "px"), S(s, "--swiper-centered-offset-after", e.size / 2 - v[v.length - 1] / 2 + "px");
                const t = -e.snapGrid[0], i = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + i));
            }
            if (c !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), 
            e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), 
            i.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                const t = `${i.containerModifierClass}backface-hidden`, s = e.el.classList.contains(t);
                c <= i.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t);
            }
        },
        updateAutoHeight: function(e) {
            const t = this, i = [], s = t.virtual && t.params.virtual.enabled;
            let a, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                i.push(e);
            })); else for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length && !s) break;
                i.push(n(e));
            } else i.push(n(t.activeIndex));
            for (a = 0; a < i.length; a += 1) if (void 0 !== i[a]) {
                const e = i[a].offsetHeight;
                r = e > r ? e : r;
            }
            (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
        },
        updateSlidesOffset: function() {
            const e = this, t = e.slides, i = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - i - e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, i = t.params, {slides: s, rtlTranslate: a, snapGrid: r} = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            a && (n = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            let l = i.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
            for (let o = 0; o < s.length; o += 1) {
                const e = s[o];
                let d = e.swiperSlideOffset;
                i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                const p = (n + (i.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l), c = (n - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l), u = -(n - d), f = u + t.slidesSizesGrid[o], v = u >= 0 && u <= t.size - t.slidesSizesGrid[o], m = u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size;
                m && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o)), D(e, m, i.slideVisibleClass), 
                D(e, v, i.slideFullyVisibleClass), e.progress = a ? -p : p, e.originalProgress = a ? -c : c;
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const i = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * i || 0;
            }
            const i = t.params, s = t.maxTranslate() - t.minTranslate();
            let {progress: a, isBeginning: r, isEnd: n, progressLoop: l} = t;
            const o = r, d = n;
            if (0 === s) a = 0, r = !0, n = !0; else {
                a = (e - t.minTranslate()) / s;
                const i = Math.abs(e - t.minTranslate()) < 1, l = Math.abs(e - t.maxTranslate()) < 1;
                r = i || a <= 0, n = l || a >= 1, i && (a = 0), l && (a = 1);
            }
            if (i.loop) {
                const i = t.getSlideIndexByData(0), s = t.getSlideIndexByData(t.slides.length - 1), a = t.slidesGrid[i], r = t.slidesGrid[s], n = t.slidesGrid[t.slidesGrid.length - 1], o = Math.abs(e);
                l = o >= a ? (o - a) / n : (o + n - r) / n, l > 1 && (l -= 1);
            }
            Object.assign(t, {
                progress: a,
                progressLoop: l,
                isBeginning: r,
                isEnd: n
            }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), 
            r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), 
            (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", a);
        },
        updateSlidesClasses: function() {
            const e = this, {slides: t, params: i, slidesEl: s, activeIndex: a} = e, r = e.virtual && i.virtual.enabled, n = e.grid && i.grid && i.grid.rows > 1, l = e => E(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
            let o, d, p;
            if (r) if (i.loop) {
                let t = a - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), 
                o = l(`[data-swiper-slide-index="${t}"]`);
            } else o = l(`[data-swiper-slide-index="${a}"]`); else n ? (o = t.filter((e => e.column === a))[0], 
            p = t.filter((e => e.column === a + 1))[0], d = t.filter((e => e.column === a - 1))[0]) : o = t[a];
            o && (n || (p = function(e, t) {
                const i = [];
                for (;e.nextElementSibling; ) {
                    const s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s;
                }
                return i;
            }(o, `.${i.slideClass}, swiper-slide`)[0], i.loop && !p && (p = t[0]), d = function(e, t) {
                const i = [];
                for (;e.previousElementSibling; ) {
                    const s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s;
                }
                return i;
            }(o, `.${i.slideClass}, swiper-slide`)[0], i.loop && 0 === !d && (d = t[t.length - 1]))), 
            t.forEach((e => {
                G(e, e === o, i.slideActiveClass), G(e, e === p, i.slideNextClass), G(e, e === d, i.slidePrevClass);
            })), e.emitSlidesClasses();
        },
        updateActiveIndex: function(e) {
            const t = this, i = t.rtlTranslate ? t.translate : -t.translate, {snapGrid: s, params: a, activeIndex: r, realIndex: n, snapIndex: l} = t;
            let o, d = e;
            const p = e => {
                let i = e - t.virtual.slidesBefore;
                return i < 0 && (i = t.virtual.slides.length + i), i >= t.virtual.slides.length && (i -= t.virtual.slides.length), 
                i;
            };
            if (void 0 === d && (d = function(e) {
                const {slidesGrid: t, params: i} = e, s = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let r = 0; r < t.length; r += 1) void 0 !== t[r + 1] ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2 ? a = r : s >= t[r] && s < t[r + 1] && (a = r + 1) : s >= t[r] && (a = r);
                return i.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a;
            }(t)), s.indexOf(i) >= 0) o = s.indexOf(i); else {
                const e = Math.min(a.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / a.slidesPerGroup);
            }
            if (o >= s.length && (o = s.length - 1), d === r && !t.params.loop) return void (o !== l && (t.snapIndex = o, 
            t.emit("snapIndexChange")));
            if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = p(d));
            const c = t.grid && a.grid && a.grid.rows > 1;
            let u;
            if (t.virtual && a.virtual.enabled && a.loop) u = p(d); else if (c) {
                const e = t.slides.filter((e => e.column === d))[0];
                let i = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(i) && (i = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(i / a.grid.rows);
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                u = e ? parseInt(e, 10) : d;
            } else u = d;
            Object.assign(t, {
                previousSnapIndex: l,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: u,
                previousIndex: r,
                activeIndex: d
            }), t.initialized && j(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), 
            (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), 
            t.emit("slideChange"));
        },
        updateClickedSlide: function(e, t) {
            const i = this, s = i.params;
            let a = e.closest(`.${s.slideClass}, swiper-slide`);
            !a && i.isElement && t && t.length > 1 && t.includes(e) && [ ...t.slice(t.indexOf(e) + 1, t.length) ].forEach((e => {
                !a && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (a = e);
            }));
            let r, n = !1;
            if (a) for (let l = 0; l < i.slides.length; l += 1) if (i.slides[l] === a) {
                n = !0, r = l;
                break;
            }
            if (!a || !n) return i.clickedSlide = void 0, void (i.clickedIndex = void 0);
            i.clickedSlide = a, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = r, 
            s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
        }
    },
    translate: {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: i, translate: s, wrapperEl: a} = this;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            let r = y(a, e);
            return r += this.cssOverflowAdjustment(), i && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            const i = this, {rtlTranslate: s, params: a, wrapperEl: r, progress: n} = i;
            let l, o = 0, d = 0;
            i.isHorizontal() ? o = s ? -e : e : d = e, a.roundLengths && (o = Math.floor(o), 
            d = Math.floor(d)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : d, 
            a.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : a.virtualTranslate || (i.isHorizontal() ? o -= i.cssOverflowAdjustment() : d -= i.cssOverflowAdjustment(), 
            r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
            const p = i.maxTranslate() - i.minTranslate();
            l = 0 === p ? 0 : (e - i.minTranslate()) / p, l !== n && i.updateProgress(e), i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e, t, i, s, a) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), 
            void 0 === s && (s = !0);
            const r = this, {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(), d = r.maxTranslate();
            let p;
            if (p = s && e > o ? o : s && e < d ? d : e, r.updateProgress(p), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p; else {
                    if (!r.support.smoothScroll) return T({
                        swiper: r,
                        targetPosition: -p,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -p,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(p), i && (r.emit("beforeTransitionStart", t, a), 
            r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(p), i && (r.emit("beforeTransitionStart", t, a), 
            r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), 
                r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, 
                r.animating = !1, i && r.emit("transitionEnd"));
            }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), 
            !0;
        }
    },
    transition: {
        setTransition: function(e, t) {
            const i = this;
            i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`, i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), 
            i.emit("setTransition", e, t);
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            const i = this, {params: s} = i;
            s.cssMode || (s.autoHeight && i.updateAutoHeight(), V({
                swiper: i,
                runCallbacks: e,
                direction: t,
                step: "Start"
            }));
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            const i = this, {params: s} = i;
            i.animating = !1, s.cssMode || (i.setTransition(0), V({
                swiper: i,
                runCallbacks: e,
                direction: t,
                step: "End"
            }));
        }
    },
    slide: {
        slideTo: function(e, t, i, s, a) {
            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {params: l, snapGrid: o, slidesGrid: d, previousIndex: p, activeIndex: c, rtlTranslate: u, wrapperEl: f, enabled: v} = r;
            if (!v && !s && !a || r.destroyed || r.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = r.params.speed);
            const m = Math.min(r.params.slidesPerGroupSkip, n);
            let h = m + Math.floor((n - m) / r.params.slidesPerGroup);
            h >= o.length && (h = o.length - 1);
            const g = -o[h];
            if (l.normalizeSlideIndex) for (let b = 0; b < d.length; b += 1) {
                const e = -Math.floor(100 * g), t = Math.floor(100 * d[b]), i = Math.floor(100 * d[b + 1]);
                void 0 !== d[b + 1] ? e >= t && e < i - (i - t) / 2 ? n = b : e >= t && e < i && (n = b + 1) : e >= t && (n = b);
            }
            if (r.initialized && n !== c) {
                if (!r.allowSlideNext && (u ? g > r.translate && g > r.minTranslate() : g < r.translate && g < r.minTranslate())) return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (c || 0) !== n) return !1;
            }
            let y;
            n !== (p || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(g), y = n > c ? "next" : n < c ? "prev" : "reset";
            const w = r.virtual && r.params.virtual.enabled;
            if (!(w && a) && (u && -g === r.translate || !u && g === r.translate)) return r.updateActiveIndex(n), 
            l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(g), 
            "reset" !== y && (r.transitionStart(i, y), r.transitionEnd(i, y)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(), i = u ? g : -g;
                if (0 === t) w && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), 
                w && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, 
                requestAnimationFrame((() => {
                    f[e ? "scrollLeft" : "scrollTop"] = i;
                }))) : f[e ? "scrollLeft" : "scrollTop"] = i, w && requestAnimationFrame((() => {
                    r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
                })); else {
                    if (!r.support.smoothScroll) return T({
                        swiper: r,
                        targetPosition: i,
                        side: e ? "left" : "top"
                    }), !0;
                    f.scrollTo({
                        [e ? "left" : "top"]: i,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            return r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), 
            r.emit("beforeTransitionStart", t, s), r.transitionStart(i, y), 0 === t ? r.transitionEnd(i, y) : r.animating || (r.animating = !0, 
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), 
                r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, 
                r.transitionEnd(i, y));
            }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), 
            !0;
        },
        slideToLoop: function(e, t, i, s) {
            if (void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e) {
                e = parseInt(e, 10);
            }
            const a = this;
            if (a.destroyed) return;
            void 0 === t && (t = a.params.speed);
            const r = a.grid && a.params.grid && a.params.grid.rows > 1;
            let n = e;
            if (a.params.loop) if (a.virtual && a.params.virtual.enabled) n += a.virtual.slidesBefore; else {
                let e;
                if (r) {
                    const t = n * a.params.grid.rows;
                    e = a.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column;
                } else e = a.getSlideIndexByData(n);
                const t = r ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length, {centeredSlides: i} = a.params;
                let l = a.params.slidesPerView;
                "auto" === l ? l = a.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(a.params.slidesPerView, 10)), 
                i && l % 2 == 0 && (l += 1));
                let o = t - e < l;
                if (i && (o = o || e < Math.ceil(l / 2)), s && i && "auto" !== a.params.slidesPerView && !r && (o = !1), 
                o) {
                    const s = i ? e < a.activeIndex ? "prev" : "next" : e - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
                    a.loopFix({
                        direction: s,
                        slideTo: !0,
                        activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                        slideRealIndex: "next" === s ? a.realIndex : void 0
                    });
                }
                if (r) {
                    const e = n * a.params.grid.rows;
                    n = a.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column;
                } else n = a.getSlideIndexByData(n);
            }
            return requestAnimationFrame((() => {
                a.slideTo(n, t, i, s);
            })), a;
        },
        slideNext: function(e, t, i) {
            void 0 === t && (t = !0);
            const s = this, {enabled: a, params: r, animating: n} = s;
            if (!a || s.destroyed) return s;
            void 0 === e && (e = s.params.speed);
            let l = r.slidesPerGroup;
            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
            const o = s.activeIndex < r.slidesPerGroupSkip ? 1 : l, d = s.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding) return !1;
                if (s.loopFix({
                    direction: "next"
                }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
                    s.slideTo(s.activeIndex + o, e, t, i);
                })), !0;
            }
            return r.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i);
        },
        slidePrev: function(e, t, i) {
            void 0 === t && (t = !0);
            const s = this, {params: a, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d} = s;
            if (!o || s.destroyed) return s;
            void 0 === e && (e = s.params.speed);
            const p = s.virtual && a.virtual.enabled;
            if (a.loop) {
                if (d && !p && a.loopPreventsSliding) return !1;
                s.loopFix({
                    direction: "prev"
                }), s._clientLeft = s.wrapperEl.clientLeft;
            }
            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = c(l ? s.translate : -s.translate), f = r.map((e => c(e)));
            let v = r[f.indexOf(u) - 1];
            if (void 0 === v && a.cssMode) {
                let e;
                r.forEach(((t, i) => {
                    u >= t && (e = i);
                })), void 0 !== e && (v = r[e > 0 ? e - 1 : e]);
            }
            let m = 0;
            if (void 0 !== v && (m = n.indexOf(v), m < 0 && (m = s.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1, 
            m = Math.max(m, 0))), a.rewind && s.isBeginning) {
                const a = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                return s.slideTo(a, e, t, i);
            }
            return a.loop && 0 === s.activeIndex && a.cssMode ? (requestAnimationFrame((() => {
                s.slideTo(m, e, t, i);
            })), !0) : s.slideTo(m, e, t, i);
        },
        slideReset: function(e, t, i) {
            void 0 === t && (t = !0);
            const s = this;
            if (!s.destroyed) return void 0 === e && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, i);
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === t && (t = !0), void 0 === s && (s = .5);
            const a = this;
            if (a.destroyed) return;
            void 0 === e && (e = a.params.speed);
            let r = a.activeIndex;
            const n = Math.min(a.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / a.params.slidesPerGroup), o = a.rtlTranslate ? a.translate : -a.translate;
            if (o >= a.snapGrid[l]) {
                const e = a.snapGrid[l];
                o - e > (a.snapGrid[l + 1] - e) * s && (r += a.params.slidesPerGroup);
            } else {
                const e = a.snapGrid[l - 1];
                o - e <= (a.snapGrid[l] - e) * s && (r -= a.params.slidesPerGroup);
            }
            return r = Math.max(r, 0), r = Math.min(r, a.slidesGrid.length - 1), a.slideTo(r, e, t, i);
        },
        slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {params: t, slidesEl: i} = e, s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let a, r = e.clickedIndex;
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating) return;
                a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), 
                r = e.getSlideIndex(E(i, `${n}[data-swiper-slide-index="${a}"]`)[0]), h((() => {
                    e.slideTo(r);
                }))) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = e.getSlideIndex(E(i, `${n}[data-swiper-slide-index="${a}"]`)[0]), 
                h((() => {
                    e.slideTo(r);
                }))) : e.slideTo(r);
            } else e.slideTo(r);
        }
    },
    loop: {
        loopCreate: function(e) {
            const t = this, {params: i, slidesEl: s} = t;
            if (!i.loop || t.virtual && t.params.virtual.enabled) return;
            const a = () => {
                E(s, `.${i.slideClass}, swiper-slide`).forEach(((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                }));
            }, r = t.grid && i.grid && i.grid.rows > 1, n = i.slidesPerGroup * (r ? i.grid.rows : 1), l = t.slides.length % n != 0, o = r && t.slides.length % i.grid.rows != 0, d = e => {
                for (let s = 0; s < e; s += 1) {
                    const e = t.isElement ? C("swiper-slide", [ i.slideBlankClass ]) : C("div", [ i.slideClass, i.slideBlankClass ]);
                    t.slidesEl.append(e);
                }
            };
            if (l) {
                if (i.loopAddBlankSlides) {
                    d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides();
                } else x();
                a();
            } else if (o) {
                if (i.loopAddBlankSlides) {
                    d(i.grid.rows - t.slides.length % i.grid.rows), t.recalcSlides(), t.updateSlides();
                } else x();
                a();
            } else a();
            t.loopFix({
                slideRealIndex: e,
                direction: i.centeredSlides ? void 0 : "next"
            });
        },
        loopFix: function(e) {
            let {slideRealIndex: t, slideTo: i = !0, direction: s, setTranslate: a, activeSlideIndex: r, byController: n, byMousewheel: l} = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop) return;
            o.emit("beforeLoopFix");
            const {slides: d, allowSlidePrev: p, allowSlideNext: c, slidesEl: u, params: f} = o, {centeredSlides: v} = f;
            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && f.virtual.enabled) return i && (f.centeredSlides || 0 !== o.snapIndex ? f.centeredSlides && o.snapIndex < f.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), 
            o.allowSlidePrev = p, o.allowSlideNext = c, void o.emit("loopFix");
            let m = f.slidesPerView;
            "auto" === m ? m = o.slidesPerViewDynamic() : (m = Math.ceil(parseFloat(f.slidesPerView, 10)), 
            v && m % 2 == 0 && (m += 1));
            const h = f.slidesPerGroupAuto ? m : f.slidesPerGroup;
            let g = h;
            g % h != 0 && (g += h - g % h), g += f.loopAdditionalSlides, o.loopedSlides = g;
            const y = o.grid && f.grid && f.grid.rows > 1;
            (d.length < m + g || y && "row" === f.grid.fill) && x();
            const w = [], b = [];
            let S = o.activeIndex;
            void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : S = r;
            const T = "next" === s || !s, E = "prev" === s || !s;
            let C = 0, M = 0;
            const P = y ? Math.ceil(d.length / f.grid.rows) : d.length, O = (y ? d[r].column : r) + (v && void 0 === a ? -m / 2 + .5 : 0);
            if (O < g) {
                C = Math.max(g - O, h);
                for (let e = 0; e < g - O; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    if (y) {
                        const e = P - t - 1;
                        for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && w.push(t);
                    } else w.push(P - t - 1);
                }
            } else if (O + m > P - g) {
                M = Math.max(O - (P - 2 * g), h);
                for (let e = 0; e < M; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    y ? d.forEach(((e, i) => {
                        e.column === t && b.push(i);
                    })) : b.push(t);
                }
            }
            if (o.__preventObserver__ = !0, requestAnimationFrame((() => {
                o.__preventObserver__ = !1;
            })), E && w.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1;
            })), T && b.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1;
            })), o.recalcSlides(), "auto" === f.slidesPerView ? o.updateSlides() : y && (w.length > 0 && E || b.length > 0 && T) && o.slides.forEach(((e, t) => {
                o.grid.updateSlide(t, e, o.slides);
            })), f.watchSlidesProgress && o.updateSlidesOffset(), i) if (w.length > 0 && E) {
                if (void 0 === t) {
                    const e = o.slidesGrid[S], t = o.slidesGrid[S + C] - e;
                    l ? o.setTranslate(o.translate - t) : (o.slideTo(S + Math.ceil(C), 0, !1, !0), a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, 
                    o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
                } else if (a) {
                    const e = y ? w.length / f.grid.rows : w.length;
                    o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
                }
            } else if (b.length > 0 && T) if (void 0 === t) {
                const e = o.slidesGrid[S], t = o.slidesGrid[S - M] - e;
                l ? o.setTranslate(o.translate - t) : (o.slideTo(S - M, 0, !1, !0), a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, 
                o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
            } else {
                const e = y ? b.length / f.grid.rows : b.length;
                o.slideTo(o.activeIndex - e, 0, !1, !0);
            }
            if (o.allowSlidePrev = p, o.allowSlideNext = c, o.controller && o.controller.control && !n) {
                const e = {
                    slideRealIndex: t,
                    direction: s,
                    setTranslate: a,
                    activeSlideIndex: r,
                    byController: !0
                };
                Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                    !t.destroyed && t.params.loop && t.loopFix({
                        ...e,
                        slideTo: t.params.slidesPerView === f.slidesPerView && i
                    });
                })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                    ...e,
                    slideTo: o.controller.control.params.slidesPerView === f.slidesPerView && i
                });
            }
            o.emit("loopFix");
        },
        loopDestroy: function() {
            const e = this, {params: t, slidesEl: i} = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const s = [];
            e.slides.forEach((e => {
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                s[t] = e;
            })), e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index");
            })), s.forEach((e => {
                i.append(e);
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0);
        }
    },
    grabCursor: {
        setGrabCursor: function(e) {
            const t = this;
            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
            const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", 
            t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1;
            }));
        },
        unsetGrabCursor: function() {
            const e = this;
            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), 
            e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", 
            e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1;
            })));
        }
    },
    events: {
        attachEvents: function() {
            const e = this, {params: t} = e;
            e.onTouchStart = H.bind(e), e.onTouchMove = q.bind(e), e.onTouchEnd = W.bind(e), 
            e.onDocumentTouchStart = Z.bind(e), t.cssMode && (e.onScroll = U.bind(e)), e.onClick = Y.bind(e), 
            e.onLoad = K.bind(e), J(e, "on");
        },
        detachEvents: function() {
            J(this, "off");
        }
    },
    breakpoints: {
        setBreakpoint: function() {
            const e = this, {realIndex: t, initialized: i, params: s, el: a} = e, r = s.breakpoints;
            if (!r || r && 0 === Object.keys(r).length) return;
            const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!n || e.currentBreakpoint === n) return;
            const l = (n in r ? r[n] : void 0) || e.originalParams, o = Q(e, s), d = Q(e, l), p = e.params.grabCursor, c = l.grabCursor, u = s.enabled;
            o && !d ? (a.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), 
            e.emitContainerClasses()) : !o && d && (a.classList.add(`${s.containerModifierClass}grid`), 
            (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && a.classList.add(`${s.containerModifierClass}grid-column`), 
            e.emitContainerClasses()), p && !c ? e.unsetGrabCursor() : !p && c && e.setGrabCursor(), 
            [ "navigation", "pagination", "scrollbar" ].forEach((t => {
                if (void 0 === l[t]) return;
                const i = s[t] && s[t].enabled, a = l[t] && l[t].enabled;
                i && !a && e[t].disable(), !i && a && e[t].enable();
            }));
            const f = l.direction && l.direction !== s.direction, v = s.loop && (l.slidesPerView !== s.slidesPerView || f), m = s.loop;
            f && i && e.changeDirection(), b(e.params, l);
            const h = e.params.enabled, g = e.params.loop;
            Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
            }), u && !h ? e.disable() : !u && h && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), 
            i && (v ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && g ? (e.loopCreate(t), 
            e.updateSlides()) : m && !g && e.loopDestroy()), e.emit("breakpoint", l);
        },
        getBreakpoint: function(e, t, i) {
            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
            let s = !1;
            const a = m(), r = "window" === t ? a.innerHeight : i.clientHeight, n = Object.keys(e).map((e => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                        value: r * t,
                        point: e
                    };
                }
                return {
                    value: e,
                    point: e
                };
            }));
            n.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
            for (let l = 0; l < n.length; l += 1) {
                const {point: e, value: r} = n[l];
                "window" === t ? a.matchMedia(`(min-width: ${r}px)`).matches && (s = e) : r <= i.clientWidth && (s = e);
            }
            return s || "max";
        }
    },
    checkOverflow: {
        checkOverflow: function() {
            const e = this, {isLocked: t, params: i} = e, {slidesOffsetBefore: s} = i;
            if (s) {
                const t = e.slides.length - 1, i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), 
            t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
    },
    classes: {
        addClasses: function() {
            const e = this, {classNames: t, params: i, rtl: s, el: a, device: r} = e, n = function(e, t) {
                const i = [];
                return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((s => {
                        e[s] && i.push(t + s);
                    })) : "string" == typeof e && i.push(t + e);
                })), i;
            }([ "initialized", i.direction, {
                "free-mode": e.params.freeMode && i.freeMode.enabled
            }, {
                autoheight: i.autoHeight
            }, {
                rtl: s
            }, {
                grid: i.grid && i.grid.rows > 1
            }, {
                "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
            }, {
                android: r.android
            }, {
                ios: r.ios
            }, {
                "css-mode": i.cssMode
            }, {
                centered: i.cssMode && i.centeredSlides
            }, {
                "watch-progress": i.watchSlidesProgress
            } ], i.containerModifierClass);
            t.push(...n), a.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function() {
            const {el: e, classNames: t} = this;
            e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
        }
    }
}, se = {};

let ae = class e {
    constructor() {
        let t, i;
        for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
        1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? i = a[0] : [t, i] = a, 
        i || (i = {}), i = b({}, i), t && !i.el && (i.el = t);
        const n = f();
        if (i.el && "string" == typeof i.el && n.querySelectorAll(i.el).length > 1) {
            const t = [];
            return n.querySelectorAll(i.el).forEach((s => {
                const a = b({}, i, {
                    el: s
                });
                t.push(new e(a));
            })), t;
        }
        const l = this;
        l.__swiper__ = !0, l.support = B(), l.device = _({
            userAgent: i.userAgent
        }), l.browser = N(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [ ...l.__modules__ ], 
        i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
        const o = {};
        l.modules.forEach((e => {
            e({
                params: i,
                swiper: l,
                extendParams: te(i, o),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            });
        }));
        const d = b({}, ee, o);
        return l.params = b({}, d, se, i), l.originalParams = b({}, l.params), l.passedParams = b({}, i), 
        l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
            l.on(e, l.params.on[e]);
        })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: t,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal: () => "horizontal" === l.params.direction,
            isVertical: () => "vertical" === l.params.direction,
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            // Locks
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                // Form elements to match
                focusableElements: l.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: void 0,
                // Velocities
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            // Clicks
            allowClick: !0,
            // Touches
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        }), l.emit("_swiper"), l.params.init && l.init(), l;
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e];
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: i} = this, s = P(E(t, `.${i.slideClass}, swiper-slide`)[0]);
        return P(e) - s;
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0]);
    }
    recalcSlides() {
        const {slidesEl: e, params: t} = this;
        this.slides = E(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(), a = (i.maxTranslate() - s) * e + s;
        i.translateTo(a, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
        e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ");
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i => {
            const s = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: s
            }), e.emit("_slideClass", i, s);
        })), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {params: i, slides: s, slidesGrid: a, slidesSizesGrid: r, size: n, activeIndex: l} = this;
        let o = 1;
        if ("number" == typeof i.slidesPerView) return i.slidesPerView;
        if (i.centeredSlides) {
            let e, t = s[l] ? Math.ceil(s[l].swiperSlideSize) : 0;
            for (let i = l + 1; i < s.length; i += 1) s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize), 
            o += 1, t > n && (e = !0));
            for (let i = l - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, 
            t > n && (e = !0));
        } else if ("current" === e) for (let d = l + 1; d < s.length; d += 1) {
            (t ? a[d] + r[d] - a[l] < n : a[d] - a[l] < n) && (o += 1);
        } else for (let d = l - 1; d >= 0; d -= 1) {
            a[l] - a[d] < n && (o += 1);
        }
        return o;
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {snapGrid: t, params: i} = e;
        function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate, i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let a;
        if (i.breakpoints && e.setBreakpoint(), [ ...e.el.querySelectorAll('[loading="lazy"]') ].forEach((t => {
            t.complete && $(e, t);
        })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), 
        i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && e.updateAutoHeight(); else {
            if (("auto" === i.slidesPerView || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const t = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                a = e.slideTo(t.length - 1, 0, !1, !0);
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || s();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this, s = i.params.direction;
        return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), 
        i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), 
        i.params.direction = e, i.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = "";
        })), i.emit("changeDirection"), t && i.update()), i;
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, 
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), 
        t.el.dir = "ltr"), t.update());
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
        i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (() => {
            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                return i.shadowRoot.querySelector(s());
            }
            return E(i, s())[0];
        })();
        return !a && t.params.createElements && (a = C("div", t.params.wrapperClass), i.append(a), 
        E(i, `.${t.params.slideClass}`).forEach((e => {
            a.append(e);
        }))), Object.assign(t, {
            el: i,
            wrapperEl: a,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            // RTL
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === M(i, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === M(i, "direction")),
            wrongRTL: "-webkit-box" === M(a, "display")
        }), !0;
    }
    init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), 
        t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), 
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), 
        t.params.loop && t.loopCreate(), t.attachEvents();
        const i = [ ...t.el.querySelectorAll('[loading="lazy"]') ];
        return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), 
        i.forEach((e => {
            e.complete ? $(t, e) : e.addEventListener("load", (e => {
                $(t, e.target);
            }));
        })), j(t), t.initialized = !0, j(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this, {params: s, el: a, wrapperEl: r, slides: n} = i;
        return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, 
        i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a && "string" != typeof a && a.removeAttribute("style"), 
        r && r.removeAttribute("style"), n && n.length && n.forEach((e => {
            e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), 
            e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        }))), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((e => {
            i.off(e);
        })), !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null), function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
                try {
                    t[e] = null;
                } catch (i) {}
                try {
                    delete t[e];
                } catch (i) {}
            }));
        }(i)), i.destroyed = !0), null;
    }
    static extendDefaults(e) {
        b(se, e);
    }
    static get extendedDefaults() {
        return se;
    }
    static get defaults() {
        return ee;
    }
    static installModule(t) {
        e.prototype.__modules__ || (e.prototype.__modules__ = []);
        const i = e.prototype.__modules__;
        "function" == typeof t && i.indexOf(t) < 0 && i.push(t);
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach((t => e.installModule(t))), e) : (e.installModule(t), 
        e);
    }
};

Object.keys(ie).forEach((e => {
    Object.keys(ie[e]).forEach((t => {
        ae.prototype[t] = ie[e][t];
    }));
})), ae.use([ function(e) {
    let {swiper: t, on: i, emit: s} = e;
    const a = m();
    let r = null, n = null;
    const l = () => {
        t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"));
    }, o = () => {
        t && !t.destroyed && t.initialized && s("orientationchange");
    };
    i("init", (() => {
        t.params.resizeObserver && void 0 !== a.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
            n = a.requestAnimationFrame((() => {
                const {width: i, height: s} = t;
                let a = i, r = s;
                e.forEach((e => {
                    let {contentBoxSize: i, contentRect: s, target: n} = e;
                    n && n !== t.el || (a = s ? s.width : (i[0] || i).inlineSize, r = s ? s.height : (i[0] || i).blockSize);
                })), a === i && r === s || l();
            }));
        })), r.observe(t.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", o));
    })), i("destroy", (() => {
        n && a.cancelAnimationFrame(n), r && r.unobserve && t.el && (r.unobserve(t.el), 
        r = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", o);
    }));
}, function(e) {
    let {swiper: t, extendParams: i, on: s, emit: a} = e;
    const r = [], n = m(), l = function(e, i) {
        void 0 === i && (i = {});
        const s = new (n.MutationObserver || n.WebkitMutationObserver)((e => {
            if (t.__preventObserver__) return;
            if (1 === e.length) return void a("observerUpdate", e[0]);
            const i = function() {
                a("observerUpdate", e[0]);
            };
            n.requestAnimationFrame ? n.requestAnimationFrame(i) : n.setTimeout(i, 0);
        }));
        s.observe(e, {
            attributes: void 0 === i.attributes || i.attributes,
            childList: t.isElement || (void 0 === i.childList || i).childList,
            characterData: void 0 === i.characterData || i.characterData
        }), r.push(s);
    };
    i({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", (() => {
        if (t.params.observer) {
            if (t.params.observeParents) {
                const e = O(t.hostEl);
                for (let t = 0; t < e.length; t += 1) l(e[t]);
            }
            l(t.hostEl, {
                childList: t.params.observeSlideChildren
            }), l(t.wrapperEl, {
                attributes: !1
            });
        }
    })), s("destroy", (() => {
        r.forEach((e => {
            e.disconnect();
        })), r.splice(0, r.length);
    }));
} ]);

const re = [ "eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", 
// modules
"a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control" ];

function ne(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__;
}

function le(e, t) {
    const i = [ "__proto__", "constructor", "prototype" ];
    Object.keys(t).filter((e => i.indexOf(e) < 0)).forEach((i => {
        void 0 === e[i] ? e[i] = t[i] : ne(t[i]) && ne(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : le(e[i], t[i]) : e[i] = t[i];
    }));
}

function oe(e) {
    return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl;
}

function de(e) {
    return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el;
}

function pe(e) {
    return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el;
}

function ce(e) {
    void 0 === e && (e = "");
    const t = e.split(" ").map((e => e.trim())).filter((e => !!e)), i = [];
    return t.forEach((e => {
        i.indexOf(e) < 0 && i.push(e);
    })), i.join(" ");
}

function ue(e, t) {
    void 0 === e && (e = {});
    const i = {
        on: {}
    }, s = {};
    le(i, ee), i._emitClasses = !0, i.init = !1;
    const a = {}, r = re.map((e => e.replace(/_/, ""))), n = Object.assign({}, e);
    return Object.keys(n).forEach((t => {
        void 0 !== e[t] && (r.indexOf(t) >= 0 ? ne(e[t]) ? (i[t] = {}, s[t] = {}, le(i[t], e[t]), 
        le(s[t], e[t])) : (i[t] = e[t], s[t] = e[t]) : 0 === t.search(/on[A-Z]/) && "function" == typeof e[t] ? i.on[`${t[2].toLowerCase()}${t.substr(3)}`] = e[t] : a[t] = e[t]);
    })), [ "navigation", "pagination", "scrollbar" ].forEach((e => {
        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
    })), {
        params: i,
        passedParams: s,
        rest: a,
        events: {}
    };
}

function fe(e, t, i) {
    void 0 === e && (e = {});
    const s = [], a = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    }, r = (e, t) => {
        Array.isArray(e) && e.forEach((e => {
            const i = "symbol" == typeof e.type;
            "default" === t && (t = "container-end"), i && e.children ? r(e.children, t) : e.type && ("SwiperSlide" === e.type.name || "AsyncComponentWrapper" === e.type.name) || e.componentOptions && "SwiperSlide" === e.componentOptions.tag ? s.push(e) : a[t] && a[t].push(e);
        }));
    };
    return Object.keys(e).forEach((t => {
        if ("function" != typeof e[t]) return;
        const i = e[t]();
        r(i, t);
    })), i.value = t.value, t.value = s, {
        slides: s,
        slots: a
    };
}

const ve = {
    name: "Swiper",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        wrapperTag: {
            type: String,
            default: "div"
        },
        modules: {
            type: Array,
            default: void 0
        },
        init: {
            type: Boolean,
            default: void 0
        },
        direction: {
            type: String,
            default: void 0
        },
        oneWayMovement: {
            type: Boolean,
            default: void 0
        },
        swiperElementNodeName: {
            type: String,
            default: "SWIPER-CONTAINER"
        },
        touchEventsTarget: {
            type: String,
            default: void 0
        },
        initialSlide: {
            type: Number,
            default: void 0
        },
        speed: {
            type: Number,
            default: void 0
        },
        cssMode: {
            type: Boolean,
            default: void 0
        },
        updateOnWindowResize: {
            type: Boolean,
            default: void 0
        },
        resizeObserver: {
            type: Boolean,
            default: void 0
        },
        nested: {
            type: Boolean,
            default: void 0
        },
        focusableElements: {
            type: String,
            default: void 0
        },
        width: {
            type: Number,
            default: void 0
        },
        height: {
            type: Number,
            default: void 0
        },
        preventInteractionOnTransition: {
            type: Boolean,
            default: void 0
        },
        userAgent: {
            type: String,
            default: void 0
        },
        url: {
            type: String,
            default: void 0
        },
        edgeSwipeDetection: {
            type: [ Boolean, String ],
            default: void 0
        },
        edgeSwipeThreshold: {
            type: Number,
            default: void 0
        },
        autoHeight: {
            type: Boolean,
            default: void 0
        },
        setWrapperSize: {
            type: Boolean,
            default: void 0
        },
        virtualTranslate: {
            type: Boolean,
            default: void 0
        },
        effect: {
            type: String,
            default: void 0
        },
        breakpoints: {
            type: Object,
            default: void 0
        },
        breakpointsBase: {
            type: String,
            default: void 0
        },
        spaceBetween: {
            type: [ Number, String ],
            default: void 0
        },
        slidesPerView: {
            type: [ Number, String ],
            default: void 0
        },
        maxBackfaceHiddenSlides: {
            type: Number,
            default: void 0
        },
        slidesPerGroup: {
            type: Number,
            default: void 0
        },
        slidesPerGroupSkip: {
            type: Number,
            default: void 0
        },
        slidesPerGroupAuto: {
            type: Boolean,
            default: void 0
        },
        centeredSlides: {
            type: Boolean,
            default: void 0
        },
        centeredSlidesBounds: {
            type: Boolean,
            default: void 0
        },
        slidesOffsetBefore: {
            type: Number,
            default: void 0
        },
        slidesOffsetAfter: {
            type: Number,
            default: void 0
        },
        normalizeSlideIndex: {
            type: Boolean,
            default: void 0
        },
        centerInsufficientSlides: {
            type: Boolean,
            default: void 0
        },
        watchOverflow: {
            type: Boolean,
            default: void 0
        },
        roundLengths: {
            type: Boolean,
            default: void 0
        },
        touchRatio: {
            type: Number,
            default: void 0
        },
        touchAngle: {
            type: Number,
            default: void 0
        },
        simulateTouch: {
            type: Boolean,
            default: void 0
        },
        shortSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipesRatio: {
            type: Number,
            default: void 0
        },
        longSwipesMs: {
            type: Number,
            default: void 0
        },
        followFinger: {
            type: Boolean,
            default: void 0
        },
        allowTouchMove: {
            type: Boolean,
            default: void 0
        },
        threshold: {
            type: Number,
            default: void 0
        },
        touchMoveStopPropagation: {
            type: Boolean,
            default: void 0
        },
        touchStartPreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchStartForcePreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchReleaseOnEdges: {
            type: Boolean,
            default: void 0
        },
        uniqueNavElements: {
            type: Boolean,
            default: void 0
        },
        resistance: {
            type: Boolean,
            default: void 0
        },
        resistanceRatio: {
            type: Number,
            default: void 0
        },
        watchSlidesProgress: {
            type: Boolean,
            default: void 0
        },
        grabCursor: {
            type: Boolean,
            default: void 0
        },
        preventClicks: {
            type: Boolean,
            default: void 0
        },
        preventClicksPropagation: {
            type: Boolean,
            default: void 0
        },
        slideToClickedSlide: {
            type: Boolean,
            default: void 0
        },
        loop: {
            type: Boolean,
            default: void 0
        },
        loopedSlides: {
            type: Number,
            default: void 0
        },
        loopPreventsSliding: {
            type: Boolean,
            default: void 0
        },
        rewind: {
            type: Boolean,
            default: void 0
        },
        allowSlidePrev: {
            type: Boolean,
            default: void 0
        },
        allowSlideNext: {
            type: Boolean,
            default: void 0
        },
        swipeHandler: {
            type: Boolean,
            default: void 0
        },
        noSwiping: {
            type: Boolean,
            default: void 0
        },
        noSwipingClass: {
            type: String,
            default: void 0
        },
        noSwipingSelector: {
            type: String,
            default: void 0
        },
        passiveListeners: {
            type: Boolean,
            default: void 0
        },
        containerModifierClass: {
            type: String,
            default: void 0
        },
        slideClass: {
            type: String,
            default: void 0
        },
        slideActiveClass: {
            type: String,
            default: void 0
        },
        slideVisibleClass: {
            type: String,
            default: void 0
        },
        slideFullyVisibleClass: {
            type: String,
            default: void 0
        },
        slideBlankClass: {
            type: String,
            default: void 0
        },
        slideNextClass: {
            type: String,
            default: void 0
        },
        slidePrevClass: {
            type: String,
            default: void 0
        },
        wrapperClass: {
            type: String,
            default: void 0
        },
        lazyPreloaderClass: {
            type: String,
            default: void 0
        },
        lazyPreloadPrevNext: {
            type: Number,
            default: void 0
        },
        runCallbacksOnInit: {
            type: Boolean,
            default: void 0
        },
        observer: {
            type: Boolean,
            default: void 0
        },
        observeParents: {
            type: Boolean,
            default: void 0
        },
        observeSlideChildren: {
            type: Boolean,
            default: void 0
        },
        a11y: {
            type: [ Boolean, Object ],
            default: void 0
        },
        autoplay: {
            type: [ Boolean, Object ],
            default: void 0
        },
        controller: {
            type: Object,
            default: void 0
        },
        coverflowEffect: {
            type: Object,
            default: void 0
        },
        cubeEffect: {
            type: Object,
            default: void 0
        },
        fadeEffect: {
            type: Object,
            default: void 0
        },
        flipEffect: {
            type: Object,
            default: void 0
        },
        creativeEffect: {
            type: Object,
            default: void 0
        },
        cardsEffect: {
            type: Object,
            default: void 0
        },
        hashNavigation: {
            type: [ Boolean, Object ],
            default: void 0
        },
        history: {
            type: [ Boolean, Object ],
            default: void 0
        },
        keyboard: {
            type: [ Boolean, Object ],
            default: void 0
        },
        mousewheel: {
            type: [ Boolean, Object ],
            default: void 0
        },
        navigation: {
            type: [ Boolean, Object ],
            default: void 0
        },
        pagination: {
            type: [ Boolean, Object ],
            default: void 0
        },
        parallax: {
            type: [ Boolean, Object ],
            default: void 0
        },
        scrollbar: {
            type: [ Boolean, Object ],
            default: void 0
        },
        thumbs: {
            type: Object,
            default: void 0
        },
        virtual: {
            type: [ Boolean, Object ],
            default: void 0
        },
        zoom: {
            type: [ Boolean, Object ],
            default: void 0
        },
        grid: {
            type: [ Object ],
            default: void 0
        },
        freeMode: {
            type: [ Boolean, Object ],
            default: void 0
        },
        enabled: {
            type: Boolean,
            default: void 0
        }
    },
    emits: [ "_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange" ],
    setup(o, d) {
        let {slots: p, emit: c} = d;
        const {tag: u, wrapperTag: f} = o, v = e("swiper"), m = e(null), h = e(!1), g = e(!1), y = e(null), w = e(null), b = e(null), S = {
            value: []
        }, T = {
            value: []
        }, E = e(null), x = e(null), C = e(null), M = e(null), {params: P, passedParams: O} = ue(o);
        fe(p, S, T), b.value = O, T.value = S.value;
        P.onAny = function(e) {
            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
            c(e, ...i);
        }, Object.assign(P.on, {
            _beforeBreakpoint: () => {
                fe(p, S, T), h.value = !0;
            },
            _containerClasses(e, t) {
                v.value = t;
            }
        });
        const L = {
            ...P
        };
        if (delete L.wrapperClass, w.value = new ae(L), w.value.virtual && w.value.params.virtual.enabled) {
            w.value.virtual.slides = S.value;
            const e = {
                cache: !1,
                slides: S.value,
                renderExternal: e => {
                    m.value = e;
                },
                renderExternalUpdate: !1
            };
            le(w.value.params.virtual, e), le(w.value.originalParams.virtual, e);
        }
        function I(e) {
            return P.virtual ? function(e, t, i) {
                if (!i) return null;
                const s = e => {
                    let i = e;
                    return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i;
                }, a = e.value.isHorizontal() ? {
                    [e.value.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                } : {
                    top: `${i.offset}px`
                }, {from: r, to: n} = i, o = e.value.params.loop ? -t.length : 0, d = e.value.params.loop ? 2 * t.length : t.length, p = [];
                for (let l = o; l < d; l += 1) l >= r && l <= n && p.length < t.length && p.push(t[s(l)]);
                return p.map((t => (t.props || (t.props = {}), t.props.style || (t.props.style = {}), 
                t.props.swiperRef = e, t.props.style = a, t.type ? l(t.type, {
                    ...t.props
                }, t.children) : t.componentOptions ? l(t.componentOptions.Ctor, {
                    ...t.props
                }, t.componentOptions.children) : void 0)));
            }(w, e, m.value) : (e.forEach(((e, t) => {
                e.props || (e.props = {}), e.props.swiperRef = w, e.props.swiperSlideIndex = t;
            })), e);
        }
        return t((() => {
            !g.value && w.value && (w.value.emitSlidesClasses(), g.value = !0);
            const {passedParams: e} = ue(o), t = function(e, t, i, s, a) {
                const r = [];
                if (!t) return r;
                const n = e => {
                    r.indexOf(e) < 0 && r.push(e);
                };
                if (i && s) {
                    const e = s.map(a), t = i.map(a);
                    e.join("") !== t.join("") && n("children"), s.length !== i.length && n("children");
                }
                return re.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((i => {
                    if (i in e && i in t) if (ne(e[i]) && ne(t[i])) {
                        const s = Object.keys(e[i]), a = Object.keys(t[i]);
                        s.length !== a.length ? n(i) : (s.forEach((s => {
                            e[i][s] !== t[i][s] && n(i);
                        })), a.forEach((s => {
                            e[i][s] !== t[i][s] && n(i);
                        })));
                    } else e[i] !== t[i] && n(i);
                })), r;
            }(e, b.value, S.value, T.value, (e => e.props && e.props.key));
            b.value = e, (t.length || h.value) && w.value && !w.value.destroyed && function(e) {
                let {swiper: t, slides: i, passedParams: s, changedParams: a, nextEl: r, prevEl: n, scrollbarEl: l, paginationEl: o} = e;
                const d = a.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)), {params: p, pagination: c, navigation: u, scrollbar: f, virtual: v, thumbs: m} = t;
                let h, g, y, w, b, S, T, E;
                a.includes("thumbs") && s.thumbs && s.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (h = !0), 
                a.includes("controller") && s.controller && s.controller.control && p.controller && !p.controller.control && (g = !0), 
                a.includes("pagination") && s.pagination && (s.pagination.el || o) && (p.pagination || !1 === p.pagination) && c && !c.el && (y = !0), 
                a.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || l) && (p.scrollbar || !1 === p.scrollbar) && f && !f.el && (w = !0), 
                a.includes("navigation") && s.navigation && (s.navigation.prevEl || n) && (s.navigation.nextEl || r) && (p.navigation || !1 === p.navigation) && u && !u.prevEl && !u.nextEl && (b = !0);
                const x = e => {
                    t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), 
                    t[e].nextEl.remove()), p[e].prevEl = void 0, p[e].nextEl = void 0, t[e].prevEl = void 0, 
                    t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), p[e].el = void 0, t[e].el = void 0));
                };
                a.includes("loop") && t.isElement && (p.loop && !s.loop ? S = !0 : !p.loop && s.loop ? T = !0 : E = !0), 
                d.forEach((e => {
                    if (ne(p[e]) && ne(s[e])) Object.assign(p[e], s[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in s[e]) || s[e].enabled || x(e); else {
                        const t = s[e];
                        !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = s[e] : !1 === t && x(e);
                    }
                })), d.includes("controller") && !g && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), 
                a.includes("children") && i && v && p.virtual.enabled ? (v.slides = i, v.update(!0)) : a.includes("virtual") && v && p.virtual.enabled && (i && (v.slides = i), 
                v.update(!0)), a.includes("children") && i && p.loop && (E = !0), h && m.init() && m.update(!0);
                g && (t.controller.control = p.controller.control), y && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), 
                o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), 
                o && (p.pagination.el = o), c.init(), c.render(), c.update()), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), 
                l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), 
                l && (p.scrollbar.el = l), f.init(), f.updateSize(), f.setTranslate()), b && (t.isElement && (r && "string" != typeof r || (r = document.createElement("div"), 
                r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.constructor.nextButtonSvg, 
                r.part.add("button-next"), t.el.appendChild(r)), n && "string" != typeof n || (n = document.createElement("div"), 
                n.classList.add("swiper-button-prev"), n.innerHTML = t.hostEl.constructor.prevButtonSvg, 
                n.part.add("button-prev"), t.el.appendChild(n))), r && (p.navigation.nextEl = r), 
                n && (p.navigation.prevEl = n), u.init(), u.update()), a.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext), 
                a.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev), a.includes("direction") && t.changeDirection(s.direction, !1), 
                (S || E) && t.loopDestroy(), (T || E) && t.loopCreate(), t.update();
            }({
                swiper: w.value,
                slides: S.value,
                passedParams: e,
                changedParams: t,
                nextEl: E.value,
                prevEl: x.value,
                scrollbarEl: M.value,
                paginationEl: C.value
            }), h.value = !1;
        })), i("swiper", w), s(m, (() => {
            a((() => {
                var e;
                !(e = w.value) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), 
                e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
            }));
        })), r((() => {
            y.value && (!function(e, t) {
                let {el: i, nextEl: s, prevEl: a, paginationEl: r, scrollbarEl: n, swiper: l} = e;
                oe(t) && s && a && (l.params.navigation.nextEl = s, l.originalParams.navigation.nextEl = s, 
                l.params.navigation.prevEl = a, l.originalParams.navigation.prevEl = a), de(t) && r && (l.params.pagination.el = r, 
                l.originalParams.pagination.el = r), pe(t) && n && (l.params.scrollbar.el = n, l.originalParams.scrollbar.el = n), 
                l.init(i);
            }({
                el: y.value,
                nextEl: E.value,
                prevEl: x.value,
                paginationEl: C.value,
                scrollbarEl: M.value,
                swiper: w.value
            }, P), c("swiper", w.value));
        })), n((() => {
            w.value && !w.value.destroyed && w.value.destroy(!0, !1);
        })), () => {
            const {slides: e, slots: t} = fe(p, S, T);
            return l(u, {
                ref: y,
                class: ce(v.value)
            }, [ t["container-start"], l(f, {
                class: (i = P.wrapperClass, void 0 === i && (i = ""), i ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper")
            }, [ t["wrapper-start"], I(e), t["wrapper-end"] ]), oe(o) && [ l("div", {
                ref: x,
                class: "swiper-button-prev"
            }), l("div", {
                ref: E,
                class: "swiper-button-next"
            }) ], pe(o) && l("div", {
                ref: M,
                class: "swiper-scrollbar"
            }), de(o) && l("div", {
                ref: C,
                class: "swiper-pagination"
            }), t["container-end"] ]);
            var i;
        };
    }
}, me = {
    name: "SwiperSlide",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        swiperRef: {
            type: Object,
            required: !1
        },
        swiperSlideIndex: {
            type: Number,
            default: void 0,
            required: !1
        },
        zoom: {
            type: Boolean,
            default: void 0,
            required: !1
        },
        lazy: {
            type: Boolean,
            default: !1,
            required: !1
        },
        virtualIndex: {
            type: [ String, Number ],
            default: void 0
        }
    },
    setup(s, a) {
        let {slots: p} = a, c = !1;
        const {swiperRef: u} = s, f = e(null), v = e("swiper-slide"), m = e(!1);
        function h(e, t, i) {
            t === f.value && (v.value = i);
        }
        r((() => {
            u && u.value && (u.value.on("_slideClass", h), c = !0);
        })), o((() => {
            !c && u && u.value && (u.value.on("_slideClass", h), c = !0);
        })), t((() => {
            f.value && u && u.value && (void 0 !== s.swiperSlideIndex && (f.value.swiperSlideIndex = s.swiperSlideIndex), 
            u.value.destroyed && "swiper-slide" !== v.value && (v.value = "swiper-slide"));
        })), n((() => {
            u && u.value && u.value.off("_slideClass", h);
        }));
        const g = d((() => ({
            isActive: v.value.indexOf("swiper-slide-active") >= 0,
            isVisible: v.value.indexOf("swiper-slide-visible") >= 0,
            isPrev: v.value.indexOf("swiper-slide-prev") >= 0,
            isNext: v.value.indexOf("swiper-slide-next") >= 0
        })));
        i("swiperSlide", g);
        const y = () => {
            m.value = !0;
        };
        return () => l(s.tag, {
            class: ce(`${v.value}`),
            ref: f,
            "data-swiper-slide-index": void 0 === s.virtualIndex && u && u.value && u.value.params.loop ? s.swiperSlideIndex : s.virtualIndex,
            onLoadCapture: y
        }, s.zoom ? l("div", {
            class: "swiper-zoom-container",
            "data-swiper-zoom": "number" == typeof s.zoom ? s.zoom : void 0
        }, [ p.default && p.default(g.value), s.lazy && !m.value && l("div", {
            class: "swiper-lazy-preloader"
        }) ]) : [ p.default && p.default(g.value), s.lazy && !m.value && l("div", {
            class: "swiper-lazy-preloader"
        }) ]);
    }
};

function he(e) {
    return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

function ge(e) {
    let {swiper: t, extendParams: i, on: s, emit: a} = e;
    const r = "swiper-pagination";
    let n;
    i({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }), t.pagination = {
        el: null,
        bullets: []
    };
    let l = 0;
    function o() {
        return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
    }
    function d(e, i) {
        const {bulletActiveClass: s} = t.params.pagination;
        e && (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${i}`), 
        (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${i}-${i}`));
    }
    function p(e) {
        const i = e.target.closest(he(t.params.pagination.bulletClass));
        if (!i) return;
        e.preventDefault();
        const s = P(i) * t.params.slidesPerGroup;
        if (t.params.loop) {
            if (t.realIndex === s) return;
            const e = (a = t.realIndex, r = s, n = t.slides.length, (r %= n) == 1 + (a %= n) ? "next" : r === a - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(s);
        } else t.slideTo(s);
        var a, r, n;
    }
    function c() {
        const e = t.rtl, i = t.params.pagination;
        if (o()) return;
        let s, r, p = t.pagination.el;
        p = I(p);
        const c = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, u = t.params.loop ? Math.ceil(c / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (r = t.previousRealIndex || 0, s = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (s = t.snapIndex, 
        r = t.previousSnapIndex) : (r = t.previousIndex || 0, s = t.activeIndex || 0), "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const a = t.pagination.bullets;
            let o, c, u;
            if (i.dynamicBullets && (n = L(a[0], t.isHorizontal() ? "width" : "height"), p.forEach((e => {
                e.style[t.isHorizontal() ? "width" : "height"] = n * (i.dynamicMainBullets + 4) + "px";
            })), i.dynamicMainBullets > 1 && void 0 !== r && (l += s - (r || 0), l > i.dynamicMainBullets - 1 ? l = i.dynamicMainBullets - 1 : l < 0 && (l = 0)), 
            o = Math.max(s - l, 0), c = o + (Math.min(a.length, i.dynamicMainBullets) - 1), 
            u = (c + o) / 2), a.forEach((e => {
                const t = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((e => `${i.bulletActiveClass}${e}`)) ].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...t);
            })), p.length > 1) a.forEach((e => {
                const a = P(e);
                a === s ? e.classList.add(...i.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), 
                i.dynamicBullets && (a >= o && a <= c && e.classList.add(...`${i.bulletActiveClass}-main`.split(" ")), 
                a === o && d(e, "prev"), a === c && d(e, "next"));
            })); else {
                const e = a[s];
                if (e && e.classList.add(...i.bulletActiveClass.split(" ")), t.isElement && a.forEach(((e, t) => {
                    e.setAttribute("part", t === s ? "bullet-active" : "bullet");
                })), i.dynamicBullets) {
                    const e = a[o], t = a[c];
                    for (let s = o; s <= c; s += 1) a[s] && a[s].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
                    d(e, "prev"), d(t, "next");
                }
            }
            if (i.dynamicBullets) {
                const s = Math.min(a.length, i.dynamicMainBullets + 4), r = (n * s - n) / 2 - u * n, l = e ? "right" : "left";
                a.forEach((e => {
                    e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
                }));
            }
        }
        p.forEach(((e, r) => {
            if ("fraction" === i.type && (e.querySelectorAll(he(i.currentClass)).forEach((e => {
                e.textContent = i.formatFractionCurrent(s + 1);
            })), e.querySelectorAll(he(i.totalClass)).forEach((e => {
                e.textContent = i.formatFractionTotal(u);
            }))), "progressbar" === i.type) {
                let a;
                a = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const r = (s + 1) / u;
                let n = 1, l = 1;
                "horizontal" === a ? n = r : l = r, e.querySelectorAll(he(i.progressbarFillClass)).forEach((e => {
                    e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`;
                }));
            }
            "custom" === i.type && i.renderCustom ? (e.innerHTML = i.renderCustom(t, s + 1, u), 
            0 === r && a("paginationRender", e)) : (0 === r && a("paginationRender", e), a("paginationUpdate", e)), 
            t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass);
        }));
    }
    function u() {
        const e = t.params.pagination;
        if (o()) return;
        const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let s = t.pagination.el;
        s = I(s);
        let r = "";
        if ("bullets" === e.type) {
            let s = t.params.loop ? Math.ceil(i / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && s > i && (s = i);
            for (let i = 0; i < s; i += 1) e.renderBullet ? r += e.renderBullet.call(t, i, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
        }
        "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), 
        "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), 
        t.pagination.bullets = [], s.forEach((i => {
            "custom" !== e.type && (i.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...i.querySelectorAll(he(e.bulletClass)));
        })), "custom" !== e.type && a("paginationRender", s[0]);
    }
    function f() {
        t.params.pagination = function(e, t, i, s) {
            return e.params.createElements && Object.keys(s).forEach((a => {
                if (!i[a] && !0 === i.auto) {
                    let r = E(e.el, `.${s[a]}`)[0];
                    r || (r = C("div", s[a]), r.className = s[a], e.el.append(r)), i[a] = r, t[a] = r;
                }
            })), i;
        }(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
        });
        const e = t.params.pagination;
        if (!e.el) return;
        let i;
        "string" == typeof e.el && t.isElement && (i = t.el.querySelector(e.el)), i || "string" != typeof e.el || (i = [ ...document.querySelectorAll(e.el) ]), 
        i || (i = e.el), i && 0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(i) && i.length > 1 && (i = [ ...t.el.querySelectorAll(e.el) ], 
        i.length > 1 && (i = i.filter((e => O(e, ".swiper")[0] === t.el))[0])), Array.isArray(i) && 1 === i.length && (i = i[0]), 
        Object.assign(t.pagination, {
            el: i
        }), i = I(i), i.forEach((i => {
            "bullets" === e.type && e.clickable && i.classList.add(...(e.clickableClass || "").split(" ")), 
            i.classList.add(e.modifierClass + e.type), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), 
            "bullets" === e.type && e.dynamicBullets && (i.classList.add(`${e.modifierClass}${e.type}-dynamic`), 
            l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.classList.add(e.progressbarOppositeClass), 
            e.clickable && i.addEventListener("click", p), t.enabled || i.classList.add(e.lockClass);
        })));
    }
    function v() {
        const e = t.params.pagination;
        if (o()) return;
        let i = t.pagination.el;
        i && (i = I(i), i.forEach((i => {
            i.classList.remove(e.hiddenClass), i.classList.remove(e.modifierClass + e.type), 
            i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (i.classList.remove(...(e.clickableClass || "").split(" ")), 
            i.removeEventListener("click", p));
        }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))));
    }
    s("changeDirection", (() => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let {el: i} = t.pagination;
        i = I(i), i.forEach((i => {
            i.classList.remove(e.horizontalClass, e.verticalClass), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
        }));
    })), s("init", (() => {
        !1 === t.params.pagination.enabled ? m() : (f(), u(), c());
    })), s("activeIndexChange", (() => {
        void 0 === t.snapIndex && c();
    })), s("snapIndexChange", (() => {
        c();
    })), s("snapGridLengthChange", (() => {
        u(), c();
    })), s("destroy", (() => {
        v();
    })), s("enable disable", (() => {
        let {el: e} = t.pagination;
        e && (e = I(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))));
    })), s("lock unlock", (() => {
        c();
    })), s("click", ((e, i) => {
        const s = i.target, r = I(t.pagination.el);
        if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !s.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)));
        }
    }));
    const m = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let {el: e} = t.pagination;
        e && (e = I(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), 
        v();
    };
    Object.assign(t.pagination, {
        enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {el: e} = t.pagination;
            e && (e = I(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), 
            f(), u(), c();
        },
        disable: m,
        render: u,
        update: c,
        init: f,
        destroy: v
    });
}

function ye(e) {
    let t, i, {swiper: s, extendParams: a, on: r, emit: n, params: l} = e;
    s.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, a({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let o, d, p, c, u, v, m, h, g = l && l.autoplay ? l.autoplay.delay : 3e3, y = l && l.autoplay ? l.autoplay.delay : 3e3, w =  (new Date).getTime();
    function b(e) {
        s && !s.destroyed && s.wrapperEl && e.target === s.wrapperEl && (s.wrapperEl.removeEventListener("transitionend", b), 
        h || e.detail && e.detail.bySwiperTouchMove || M());
    }
    const S = () => {
        if (s.destroyed || !s.autoplay.running) return;
        s.autoplay.paused ? d = !0 : d && (y = o, d = !1);
        const e = s.autoplay.paused ? o : w + y -  (new Date).getTime();
        s.autoplay.timeLeft = e, n("autoplayTimeLeft", e, e / g), i = requestAnimationFrame((() => {
            S();
        }));
    }, T = e => {
        if (s.destroyed || !s.autoplay.running) return;
        cancelAnimationFrame(i), S();
        let a = void 0 === e ? s.params.autoplay.delay : e;
        g = s.params.autoplay.delay, y = s.params.autoplay.delay;
        const r = (() => {
            let e;
            if (e = s.virtual && s.params.virtual.enabled ? s.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : s.slides[s.activeIndex], 
            !e) return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        })();
        !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, g = r, y = r), o = a;
        const l = s.params.speed, d = () => {
            s && !s.destroyed && (s.params.autoplay.reverseDirection ? !s.isBeginning || s.params.loop || s.params.rewind ? (s.slidePrev(l, !0, !0), 
            n("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(s.slides.length - 1, l, !0, !0), 
            n("autoplay")) : !s.isEnd || s.params.loop || s.params.rewind ? (s.slideNext(l, !0, !0), 
            n("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(0, l, !0, !0), 
            n("autoplay")), s.params.cssMode && (w =  (new Date).getTime(), requestAnimationFrame((() => {
                T();
            }))));
        };
        return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
            d();
        }), a)) : requestAnimationFrame((() => {
            d();
        })), a;
    }, E = () => {
        w =  (new Date).getTime(), s.autoplay.running = !0, T(), n("autoplayStart");
    }, x = () => {
        s.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), n("autoplayStop");
    }, C = (e, i) => {
        if (s.destroyed || !s.autoplay.running) return;
        clearTimeout(t), e || (m = !0);
        const a = () => {
            n("autoplayPause"), s.params.autoplay.waitForTransition ? s.wrapperEl.addEventListener("transitionend", b) : M();
        };
        if (s.autoplay.paused = !0, i) return v && (o = s.params.autoplay.delay), v = !1, 
        void a();
        const r = o || s.params.autoplay.delay;
        o = r - ( (new Date).getTime() - w), s.isEnd && o < 0 && !s.params.loop || (o < 0 && (o = 0), 
        a());
    }, M = () => {
        s.isEnd && o < 0 && !s.params.loop || s.destroyed || !s.autoplay.running || (w =  (new Date).getTime(), 
        m ? (m = !1, T(o)) : T(), s.autoplay.paused = !1, n("autoplayResume"));
    }, P = () => {
        if (s.destroyed || !s.autoplay.running) return;
        const e = f();
        "hidden" === e.visibilityState && (m = !0, C(!0)), "visible" === e.visibilityState && M();
    }, O = e => {
        "mouse" === e.pointerType && (m = !0, h = !0, s.animating || s.autoplay.paused || C(!0));
    }, L = e => {
        "mouse" === e.pointerType && (h = !1, s.autoplay.paused && M());
    };
    r("init", (() => {
        s.params.autoplay.enabled && (s.params.autoplay.pauseOnMouseEnter && (s.el.addEventListener("pointerenter", O), 
        s.el.addEventListener("pointerleave", L)), f().addEventListener("visibilitychange", P), 
        E());
    })), r("destroy", (() => {
        s.el && "string" != typeof s.el && (s.el.removeEventListener("pointerenter", O), 
        s.el.removeEventListener("pointerleave", L)), f().removeEventListener("visibilitychange", P), 
        s.autoplay.running && x();
    })), r("_freeModeStaticRelease", (() => {
        (c || m) && M();
    })), r("_freeModeNoMomentumRelease", (() => {
        s.params.autoplay.disableOnInteraction ? x() : C(!0, !0);
    })), r("beforeTransitionStart", ((e, t, i) => {
        !s.destroyed && s.autoplay.running && (i || !s.params.autoplay.disableOnInteraction ? C(!0, !0) : x());
    })), r("sliderFirstMove", (() => {
        !s.destroyed && s.autoplay.running && (s.params.autoplay.disableOnInteraction ? x() : (p = !0, 
        c = !1, m = !1, u = setTimeout((() => {
            m = !0, c = !0, C(!0);
        }), 200)));
    })), r("touchEnd", (() => {
        if (!s.destroyed && s.autoplay.running && p) {
            if (clearTimeout(u), clearTimeout(t), s.params.autoplay.disableOnInteraction) return c = !1, 
            void (p = !1);
            c && s.params.cssMode && M(), c = !1, p = !1;
        }
    })), r("slideChange", (() => {
        !s.destroyed && s.autoplay.running && (v = !0);
    })), Object.assign(s.autoplay, {
        start: E,
        stop: x,
        pause: C,
        resume: M
    });
}

export { ye as A, ge as P, ae as S, me as a, ve as b };

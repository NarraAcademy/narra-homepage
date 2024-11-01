function e(e, a) {
    (function(e) {
        return "string" == typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e);
    })(e) && (e = "100%");
    var f = function(e) {
        return "string" == typeof e && -1 !== e.indexOf("%");
    }(e);
    return e = 360 === a ? e : Math.min(a, Math.max(0, parseFloat(e))), f && (e = parseInt(String(e * a), 10) / 100), 
    Math.abs(e - a) < 1e-6 ? 1 : e = 360 === a ? (e < 0 ? e % a + a : e % a) / parseFloat(String(a)) : e % a / parseFloat(String(a));
}

function a(e) {
    return e <= 1 ? "".concat(100 * Number(e), "%") : e;
}

function f(e) {
    return 1 === e.length ? "0" + e : String(e);
}

function r(e, a, f) {
    return f < 0 && (f += 1), f > 1 && (f -= 1), f < 1 / 6 ? e + 6 * f * (a - e) : f < .5 ? a : f < 2 / 3 ? e + (a - e) * (2 / 3 - f) * 6 : e;
}

function n(a, f, r) {
    a = e(a, 255), f = e(f, 255), r = e(r, 255);
    var n = Math.max(a, f, r), t = Math.min(a, f, r), i = 0, l = n, o = n - t, d = 0 === n ? 0 : o / n;
    if (n === t) i = 0; else {
        switch (n) {
          case a:
            i = (f - r) / o + (f < r ? 6 : 0);
            break;

          case f:
            i = (r - a) / o + 2;
            break;

          case r:
            i = (a - f) / o + 4;
        }
        i /= 6;
    }
    return {
        h: i,
        s: d,
        v: l
    };
}

function t(e, a, r, n) {
    return [ f(Math.round(e).toString(16)), f(Math.round(a).toString(16)), f(Math.round(r).toString(16)) ].join("");
}

function i(e) {
    return l(e) / 255;
}

function l(e) {
    return parseInt(e, 16);
}

var o = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function d(f) {
    var n, t, d, c = {
        r: 0,
        g: 0,
        b: 0
    }, b = 1, s = null, h = null, m = null, p = !1, y = !1;
    return "string" == typeof f && (f = function(e) {
        if (e = e.trim().toLowerCase(), 0 === e.length) return !1;
        var a = !1;
        if (o[e]) e = o[e], a = !0; else if ("transparent" === e) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var f = g.rgb.exec(e);
        if (f) return {
            r: f[1],
            g: f[2],
            b: f[3]
        };
        if (f = g.rgba.exec(e), f) return {
            r: f[1],
            g: f[2],
            b: f[3],
            a: f[4]
        };
        if (f = g.hsl.exec(e), f) return {
            h: f[1],
            s: f[2],
            l: f[3]
        };
        if (f = g.hsla.exec(e), f) return {
            h: f[1],
            s: f[2],
            l: f[3],
            a: f[4]
        };
        if (f = g.hsv.exec(e), f) return {
            h: f[1],
            s: f[2],
            v: f[3]
        };
        if (f = g.hsva.exec(e), f) return {
            h: f[1],
            s: f[2],
            v: f[3],
            a: f[4]
        };
        if (f = g.hex8.exec(e), f) return {
            r: l(f[1]),
            g: l(f[2]),
            b: l(f[3]),
            a: i(f[4]),
            format: a ? "name" : "hex8"
        };
        if (f = g.hex6.exec(e), f) return {
            r: l(f[1]),
            g: l(f[2]),
            b: l(f[3]),
            format: a ? "name" : "hex"
        };
        if (f = g.hex4.exec(e), f) return {
            r: l(f[1] + f[1]),
            g: l(f[2] + f[2]),
            b: l(f[3] + f[3]),
            a: i(f[4] + f[4]),
            format: a ? "name" : "hex8"
        };
        if (f = g.hex3.exec(e), f) return {
            r: l(f[1] + f[1]),
            g: l(f[2] + f[2]),
            b: l(f[3] + f[3]),
            format: a ? "name" : "hex"
        };
        return !1;
    }(f)), "object" == typeof f && (u(f.r) && u(f.g) && u(f.b) ? (n = f.r, t = f.g, 
    d = f.b, c = {
        r: 255 * e(n, 255),
        g: 255 * e(t, 255),
        b: 255 * e(d, 255)
    }, p = !0, y = "%" === String(f.r).substr(-1) ? "prgb" : "rgb") : u(f.h) && u(f.s) && u(f.v) ? (s = a(f.s), 
    h = a(f.v), c = function(a, f, r) {
        a = 6 * e(a, 360), f = e(f, 100), r = e(r, 100);
        var n = Math.floor(a), t = a - n, i = r * (1 - f), l = r * (1 - t * f), o = r * (1 - (1 - t) * f), d = n % 6;
        return {
            r: 255 * [ r, l, i, i, o, r ][d],
            g: 255 * [ o, r, r, l, i, i ][d],
            b: 255 * [ i, i, o, r, r, l ][d]
        };
    }(f.h, s, h), p = !0, y = "hsv") : u(f.h) && u(f.s) && u(f.l) && (s = a(f.s), m = a(f.l), 
    c = function(a, f, n) {
        var t, i, l;
        if (a = e(a, 360), f = e(f, 100), n = e(n, 100), 0 === f) i = n, l = n, t = n; else {
            var o = n < .5 ? n * (1 + f) : n + f - n * f, d = 2 * n - o;
            t = r(d, o, a + 1 / 3), i = r(d, o, a), l = r(d, o, a - 1 / 3);
        }
        return {
            r: 255 * t,
            g: 255 * i,
            b: 255 * l
        };
    }(f.h, s, m), p = !0, y = "hsl"), Object.prototype.hasOwnProperty.call(f, "a") && (b = f.a)), 
    b = function(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    }(b), {
        ok: p,
        format: f.format || y,
        r: Math.min(255, Math.max(c.r, 0)),
        g: Math.min(255, Math.max(c.g, 0)),
        b: Math.min(255, Math.max(c.b, 0)),
        a: b
    };
}

var c = "(?:".concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:").concat("[-\\+]?\\d+%?", ")"), b = "[\\s|\\(]+(".concat(c, ")[,|\\s]+(").concat(c, ")[,|\\s]+(").concat(c, ")\\s*\\)?"), s = "[\\s|\\(]+(".concat(c, ")[,|\\s]+(").concat(c, ")[,|\\s]+(").concat(c, ")[,|\\s]+(").concat(c, ")\\s*\\)?"), g = {
    CSS_UNIT: new RegExp(c),
    rgb: new RegExp("rgb" + b),
    rgba: new RegExp("rgba" + s),
    hsl: new RegExp("hsl" + b),
    hsla: new RegExp("hsla" + s),
    hsv: new RegExp("hsv" + b),
    hsva: new RegExp("hsva" + s),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};

function u(e) {
    return Boolean(g.CSS_UNIT.exec(String(e)));
}

export { t as a, d as i, n as r };

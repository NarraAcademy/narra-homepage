var e = Object.defineProperty, t = (t, n, s) => ((t, n, s) => n in t ? e(t, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[n] = s)(t, "symbol" != typeof n ? n + "" : n, s);

function n() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    };
}

let s = {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
};

function r(e) {
    s = e;
}

const i = /[&<>"']/, l = new RegExp(i.source, "g"), o = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, a = new RegExp(o.source, "g"), c = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}, h = e => c[e];

function p(e, t) {
    if (t) {
        if (i.test(e)) return e.replace(l, h);
    } else if (o.test(e)) return e.replace(a, h);
    return e;
}

const u = /(^|[^\[])\^/g;

function k(e, t) {
    let n = "string" == typeof e ? e : e.source;
    t = t || "";
    const s = {
        replace: (e, t) => {
            let r = "string" == typeof t ? t : t.source;
            return r = r.replace(u, "$1"), n = n.replace(e, r), s;
        },
        getRegex: () => new RegExp(n, t)
    };
    return s;
}

function g(e) {
    try {
        e = encodeURI(e).replace(/%25/g, "%");
    } catch {
        return null;
    }
    return e;
}

const f = {
    exec: () => null
};

function d(e, t) {
    const n = e.replace(/\|/g, ((e, t, n) => {
        let s = !1, r = t;
        for (;--r >= 0 && "\\" === n[r]; ) s = !s;
        return s ? "|" : " |";
    })).split(/ \|/);
    let s = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), 
    t) if (n.length > t) n.splice(t); else for (;n.length < t; ) n.push("");
    for (;s < n.length; s++) n[s] = n[s].trim().replace(/\\\|/g, "|");
    return n;
}

function x(e, t, n) {
    const s = e.length;
    if (0 === s) return "";
    let r = 0;
    for (;r < s; ) {
        const i = e.charAt(s - r - 1);
        if (i !== t || n) {
            if (i === t || !n) break;
            r++;
        } else r++;
    }
    return e.slice(0, s - r);
}

function b(e, t, n, s) {
    const r = t.href, i = t.title ? p(t.title) : null, l = e[1].replace(/\\([\[\]])/g, "$1");
    if ("!" !== e[0].charAt(0)) {
        s.state.inLink = !0;
        const e = {
            type: "link",
            raw: n,
            href: r,
            title: i,
            text: l,
            tokens: s.inlineTokens(l)
        };
        return s.state.inLink = !1, e;
    }
    return {
        type: "image",
        raw: n,
        href: r,
        title: i,
        text: p(l)
    };
}

class w {
    // set by the lexer
    constructor(e) {
        t(this, "options"), t(this, "rules"), 
        // set by the lexer
        t(this, "lexer"), this.options = e || s;
    }
    space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return {
            type: "space",
            raw: t[0]
        };
    }
    code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
            const e = t[0].replace(/^(?: {1,4}| {0,3}\t)/gm, "");
            return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? e : x(e, "\n")
            };
        }
    }
    fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
            const e = t[0], n = function(e, t) {
                const n = e.match(/^(\s+)(?:```)/);
                if (null === n) return t;
                const s = n[1];
                return t.split("\n").map((e => {
                    const t = e.match(/^\s+/);
                    if (null === t) return e;
                    const [n] = t;
                    return n.length >= s.length ? e.slice(s.length) : e;
                })).join("\n");
            }(e, t[3] || "");
            return {
                type: "code",
                raw: e,
                lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                text: n
            };
        }
    }
    heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
                const t = x(e, "#");
                this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim());
            }
            return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: e,
                tokens: this.lexer.inline(e)
            };
        }
    }
    hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t) return {
            type: "hr",
            raw: x(t[0], "\n")
        };
    }
    blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
            let e = x(t[0], "\n").split("\n"), n = "", s = "";
            const r = [];
            for (;e.length > 0; ) {
                let t = !1;
                const i = [];
                let l;
                for (l = 0; l < e.length; l++) if (/^ {0,3}>/.test(e[l])) i.push(e[l]), t = !0; else {
                    if (t) break;
                    i.push(e[l]);
                }
                e = e.slice(l);
                const o = i.join("\n"), a = o.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
                n = n ? `${n}\n${o}` : o, s = s ? `${s}\n${a}` : a;
                const c = this.lexer.state.top;
                if (this.lexer.state.top = !0, this.lexer.blockTokens(a, r, !0), this.lexer.state.top = c, 
                0 === e.length) break;
                const h = r[r.length - 1];
                if ("code" === (null == h ? void 0 : h.type)) break;
                if ("blockquote" === (null == h ? void 0 : h.type)) {
                    const t = h, i = t.raw + "\n" + e.join("\n"), l = this.blockquote(i);
                    r[r.length - 1] = l, n = n.substring(0, n.length - t.raw.length) + l.raw, s = s.substring(0, s.length - t.text.length) + l.text;
                    break;
                }
                if ("list" !== (null == h ? void 0 : h.type)) ; else {
                    const t = h, i = t.raw + "\n" + e.join("\n"), l = this.list(i);
                    r[r.length - 1] = l, n = n.substring(0, n.length - h.raw.length) + l.raw, s = s.substring(0, s.length - t.raw.length) + l.raw, 
                    e = i.substring(r[r.length - 1].raw.length).split("\n");
                }
            }
            return {
                type: "blockquote",
                raw: n,
                tokens: r,
                text: s
            };
        }
    }
    list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
            let n = t[1].trim();
            const s = n.length > 1, r = {
                type: "list",
                raw: "",
                ordered: s,
                start: s ? +n.slice(0, -1) : "",
                loose: !1,
                items: []
            };
            n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
            const i = new RegExp(`^( {0,3}${n})((?:[\t ][^\\n]*)?(?:\\n|$))`);
            let l = !1;
            for (;e; ) {
                let n = !1, s = "", o = "";
                if (!(t = i.exec(e))) break;
                if (this.rules.block.hr.test(e)) break;
                s = t[0], e = e.substring(s.length);
                let a = t[2].split("\n", 1)[0].replace(/^\t+/, (e => " ".repeat(3 * e.length))), c = e.split("\n", 1)[0], h = !a.trim(), p = 0;
                if (this.options.pedantic ? (p = 2, o = a.trimStart()) : h ? p = t[1].length + 1 : (p = t[2].search(/[^ ]/), 
                p = p > 4 ? 1 : p, o = a.slice(p), p += t[1].length), h && /^[ \t]*$/.test(c) && (s += c + "\n", 
                e = e.substring(c.length + 1), n = !0), !n) {
                    const t = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`), n = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), r = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), i = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`), l = new RegExp(`^ {0,${Math.min(3, p - 1)}}<[a-z].*>`, "i");
                    for (;e; ) {
                        const u = e.split("\n", 1)[0];
                        let k;
                        if (c = u, this.options.pedantic ? (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  "), 
                        k = c) : k = c.replace(/\t/g, "    "), r.test(c)) break;
                        if (i.test(c)) break;
                        if (l.test(c)) break;
                        if (t.test(c)) break;
                        if (n.test(c)) break;
                        if (k.search(/[^ ]/) >= p || !c.trim()) o += "\n" + k.slice(p); else {
                            if (h) break;
                            if (a.replace(/\t/g, "    ").search(/[^ ]/) >= 4) break;
                            if (r.test(a)) break;
                            if (i.test(a)) break;
                            if (n.test(a)) break;
                            o += "\n" + c;
                        }
                        h || c.trim() || (h = !0), s += u + "\n", e = e.substring(u.length + 1), a = k.slice(p);
                    }
                }
                r.loose || (l ? r.loose = !0 : /\n[ \t]*\n[ \t]*$/.test(s) && (l = !0));
                let u, k = null;
                this.options.gfm && (k = /^\[[ xX]\] /.exec(o), k && (u = "[ ] " !== k[0], o = o.replace(/^\[[ xX]\] +/, ""))), 
                r.items.push({
                    type: "list_item",
                    raw: s,
                    task: !!k,
                    checked: u,
                    loose: !1,
                    text: o,
                    tokens: []
                }), r.raw += s;
            }
            r.items[r.items.length - 1].raw = r.items[r.items.length - 1].raw.trimEnd(), r.items[r.items.length - 1].text = r.items[r.items.length - 1].text.trimEnd(), 
            r.raw = r.raw.trimEnd();
            for (let e = 0; e < r.items.length; e++) if (this.lexer.state.top = !1, r.items[e].tokens = this.lexer.blockTokens(r.items[e].text, []), 
            !r.loose) {
                const t = r.items[e].tokens.filter((e => "space" === e.type)), n = t.length > 0 && t.some((e => /\n.*\n/.test(e.raw)));
                r.loose = n;
            }
            if (r.loose) for (let e = 0; e < r.items.length; e++) r.items[e].loose = !0;
            return r;
        }
    }
    html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) {
            return {
                type: "html",
                block: !0,
                raw: t[0],
                pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                text: t[0]
            };
        }
    }
    def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
            const e = t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
            return {
                type: "def",
                tag: e,
                raw: t[0],
                href: n,
                title: s
            };
        }
    }
    table(e) {
        const t = this.rules.block.table.exec(e);
        if (!t) return;
        if (!/[:|]/.test(t[2])) return;
        const n = d(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : [], i = {
            type: "table",
            raw: t[0],
            header: [],
            align: [],
            rows: []
        };
        if (n.length === s.length) {
            for (const e of s) /^ *-+: *$/.test(e) ? i.align.push("right") : /^ *:-+: *$/.test(e) ? i.align.push("center") : /^ *:-+ *$/.test(e) ? i.align.push("left") : i.align.push(null);
            for (let e = 0; e < n.length; e++) i.header.push({
                text: n[e],
                tokens: this.lexer.inline(n[e]),
                header: !0,
                align: i.align[e]
            });
            for (const e of r) i.rows.push(d(e, i.header.length).map(((e, t) => ({
                text: e,
                tokens: this.lexer.inline(e),
                header: !1,
                align: i.align[t]
            }))));
            return i;
        }
    }
    lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t) return {
            type: "heading",
            raw: t[0],
            depth: "=" === t[2].charAt(0) ? 1 : 2,
            text: t[1],
            tokens: this.lexer.inline(t[1])
        };
    }
    paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
            const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
                type: "paragraph",
                raw: t[0],
                text: e,
                tokens: this.lexer.inline(e)
            };
        }
    }
    text(e) {
        const t = this.rules.block.text.exec(e);
        if (t) return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0])
        };
    }
    escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t) return {
            type: "escape",
            raw: t[0],
            text: p(t[1])
        };
    }
    tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), 
        !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), 
        {
            type: "html",
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: t[0]
        };
    }
    link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
            const e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
                if (!/>$/.test(e)) return;
                const t = x(e.slice(0, -1), "\\");
                if ((e.length - t.length) % 2 == 0) return;
            } else {
                const e = function(e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    let n = 0;
                    for (let s = 0; s < e.length; s++) if ("\\" === e[s]) s++; else if (e[s] === t[0]) n++; else if (e[s] === t[1] && (n--, 
                    n < 0)) return s;
                    return -1;
                }(t[2], "()");
                if (e > -1) {
                    const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                    t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
                }
            }
            let n = t[2], s = "";
            if (this.options.pedantic) {
                const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                e && (n = e[1], s = e[3]);
            } else s = t[3] ? t[3].slice(1, -1) : "";
            return n = n.trim(), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)), 
            b(t, {
                href: n ? n.replace(this.rules.inline.anyPunctuation, "$1") : n,
                title: s ? s.replace(this.rules.inline.anyPunctuation, "$1") : s
            }, t[0], this.lexer);
        }
    }
    reflink(e, t) {
        let n;
        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
            const e = t[(n[2] || n[1]).replace(/\s+/g, " ").toLowerCase()];
            if (!e) {
                const e = n[0].charAt(0);
                return {
                    type: "text",
                    raw: e,
                    text: e
                };
            }
            return b(n, e, n[0], this.lexer);
        }
    }
    emStrong(e, t, n = "") {
        let s = this.rules.inline.emStrongLDelim.exec(e);
        if (!s) return;
        if (s[3] && n.match(/[\p{L}\p{N}]/u)) return;
        if (!(s[1] || s[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
            const n = [ ...s[0] ].length - 1;
            let r, i, l = n, o = 0;
            const a = "*" === s[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for (a.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (s = a.exec(t)); ) {
                if (r = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !r) continue;
                if (i = [ ...r ].length, s[3] || s[4]) {
                    l += i;
                    continue;
                }
                if ((s[5] || s[6]) && n % 3 && !((n + i) % 3)) {
                    o += i;
                    continue;
                }
                if (l -= i, l > 0) continue;
                i = Math.min(i, i + l + o);
                const t = [ ...s[0] ][0].length, a = e.slice(0, n + s.index + t + i);
                if (Math.min(n, i) % 2) {
                    const e = a.slice(1, -1);
                    return {
                        type: "em",
                        raw: a,
                        text: e,
                        tokens: this.lexer.inlineTokens(e)
                    };
                }
                const c = a.slice(2, -2);
                return {
                    type: "strong",
                    raw: a,
                    text: c,
                    tokens: this.lexer.inlineTokens(c)
                };
            }
        }
    }
    codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
            let e = t[2].replace(/\n/g, " ");
            const n = /[^ ]/.test(e), s = /^ /.test(e) && / $/.test(e);
            return n && s && (e = e.substring(1, e.length - 1)), e = p(e, !0), {
                type: "codespan",
                raw: t[0],
                text: e
            };
        }
    }
    br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t) return {
            type: "br",
            raw: t[0]
        };
    }
    del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t) return {
            type: "del",
            raw: t[0],
            text: t[2],
            tokens: this.lexer.inlineTokens(t[2])
        };
    }
    autolink(e) {
        const t = this.rules.inline.autolink.exec(e);
        if (t) {
            let e, n;
            return "@" === t[2] ? (e = p(t[1]), n = "mailto:" + e) : (e = p(t[1]), n = e), {
                type: "link",
                raw: t[0],
                text: e,
                href: n,
                tokens: [ {
                    type: "text",
                    raw: e,
                    text: e
                } ]
            };
        }
    }
    url(e) {
        var t;
        let n;
        if (n = this.rules.inline.url.exec(e)) {
            let e, s;
            if ("@" === n[2]) e = p(n[0]), s = "mailto:" + e; else {
                let r;
                do {
                    r = n[0], n[0] = (null == (t = this.rules.inline._backpedal.exec(n[0])) ? void 0 : t[0]) ?? "";
                } while (r !== n[0]);
                e = p(n[0]), s = "www." === n[1] ? "http://" + n[0] : n[0];
            }
            return {
                type: "link",
                raw: n[0],
                text: e,
                href: s,
                tokens: [ {
                    type: "text",
                    raw: e,
                    text: e
                } ]
            };
        }
    }
    inlineText(e) {
        const t = this.rules.inline.text.exec(e);
        if (t) {
            let e;
            return e = this.lexer.state.inRawBlock ? t[0] : p(t[0]), {
                type: "text",
                raw: t[0],
                text: e
            };
        }
    }
}

const m = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, y = /(?:[*+-]|\d{1,9}[.)])/, $ = k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, y).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), z = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, R = /(?!\s*\])(?:\\.|[^\[\]\\])+/, T = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", R).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), _ = k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, y).getRegex(), A = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", S = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, I = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", S).replace("tag", A).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), v = k(z).replace("hr", m).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", A).getRegex(), E = {
    blockquote: k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", v).getRegex(),
    code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    def: T,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    hr: m,
    html: I,
    lheading: $,
    list: _,
    newline: /^(?:[ \t]*(?:\n|$))+/,
    paragraph: v,
    table: f,
    text: /^[^\n]+/
}, q = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", m).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", A).getRegex(), Z = {
    ...E,
    table: q,
    paragraph: k(z).replace("hr", m).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", q).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", A).getRegex()
}, P = {
    ...E,
    html: k("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", S).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: f,
    // fences not supported
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: k(z).replace("hr", m).replace("heading", " *#{1,6} *[^\n]").replace("lheading", $).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, L = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Q = /^( {2,}|\\)\n(?!\s*$)/, B = "\\p{P}\\p{S}", M = k(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, B).getRegex(), O = k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, B).getRegex(), j = k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, B).getRegex(), C = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, B).getRegex(), D = k(/\\([punct])/, "gu").replace(/punct/g, B).getRegex(), H = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), U = k(S).replace("(?:--\x3e|$)", "--\x3e").getRegex(), X = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", U).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), F = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, N = k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", F).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), G = k(/^!?\[(label)\]\[(ref)\]/).replace("label", F).replace("ref", R).getRegex(), J = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", R).getRegex(), K = {
    _backpedal: f,
    // only used for GFM url
    anyPunctuation: D,
    autolink: H,
    blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
    br: Q,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    del: f,
    emStrongLDelim: O,
    emStrongRDelimAst: j,
    emStrongRDelimUnd: C,
    escape: L,
    link: N,
    nolink: J,
    punctuation: M,
    reflink: G,
    reflinkSearch: k("reflink|nolink(?!\\()", "g").replace("reflink", G).replace("nolink", J).getRegex(),
    tag: X,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    url: f
}, V = {
    ...K,
    link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", F).getRegex(),
    reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", F).getRegex()
}, W = {
    ...K,
    escape: k(L).replace("])", "~|])").getRegex(),
    url: k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Y = {
    ...W,
    br: k(Q).replace("{2,}", "*").getRegex(),
    text: k(W.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ee = {
    normal: E,
    gfm: Z,
    pedantic: P
}, te = {
    normal: K,
    gfm: W,
    breaks: Y,
    pedantic: V
};

class ne {
    constructor(e) {
        t(this, "tokens"), t(this, "options"), t(this, "state"), t(this, "tokenizer"), t(this, "inlineQueue"), 
        this.tokens = [], this.tokens.links =  Object.create(null), this.options = e || s, 
        this.options.tokenizer = this.options.tokenizer || new w, this.tokenizer = this.options.tokenizer, 
        this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], 
        this.state = {
            inLink: !1,
            inRawBlock: !1,
            top: !0
        };
        const n = {
            block: ee.normal,
            inline: te.normal
        };
        this.options.pedantic ? (n.block = ee.pedantic, n.inline = te.pedantic) : this.options.gfm && (n.block = ee.gfm, 
        this.options.breaks ? n.inline = te.breaks : n.inline = te.gfm), this.tokenizer.rules = n;
    }
    /**
   * Expose Rules
   */    static get rules() {
        return {
            block: ee,
            inline: te
        };
    }
    /**
   * Static Lex Method
   */    static lex(e, t) {
        return new ne(t).lex(e);
    }
    /**
   * Static Lex Inline Method
   */    static lexInline(e, t) {
        return new ne(t).inlineTokens(e);
    }
    /**
   * Preprocessing
   */    lex(e) {
        e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens);
        for (let t = 0; t < this.inlineQueue.length; t++) {
            const e = this.inlineQueue[t];
            this.inlineTokens(e.src, e.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e, t = [], n = !1) {
        let s, r, i;
        for (this.options.pedantic && (e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "")); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((n => !!(s = n.call({
            lexer: this
        }, e, t)) && (e = e.substring(s.raw.length), t.push(s), !0))))) if (s = this.tokenizer.space(e)) e = e.substring(s.raw.length), 
        1 === s.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(s); else if (s = this.tokenizer.code(e)) e = e.substring(s.raw.length), 
        r = t[t.length - 1], !r || "paragraph" !== r.type && "text" !== r.type ? t.push(s) : (r.raw += "\n" + s.raw, 
        r.text += "\n" + s.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text); else if (s = this.tokenizer.fences(e)) e = e.substring(s.raw.length), 
        t.push(s); else if (s = this.tokenizer.heading(e)) e = e.substring(s.raw.length), 
        t.push(s); else if (s = this.tokenizer.hr(e)) e = e.substring(s.raw.length), t.push(s); else if (s = this.tokenizer.blockquote(e)) e = e.substring(s.raw.length), 
        t.push(s); else if (s = this.tokenizer.list(e)) e = e.substring(s.raw.length), t.push(s); else if (s = this.tokenizer.html(e)) e = e.substring(s.raw.length), 
        t.push(s); else if (s = this.tokenizer.def(e)) e = e.substring(s.raw.length), r = t[t.length - 1], 
        !r || "paragraph" !== r.type && "text" !== r.type ? this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
            href: s.href,
            title: s.title
        }) : (r.raw += "\n" + s.raw, r.text += "\n" + s.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text); else if (s = this.tokenizer.table(e)) e = e.substring(s.raw.length), 
        t.push(s); else if (s = this.tokenizer.lheading(e)) e = e.substring(s.raw.length), 
        t.push(s); else {
            if (i = e, this.options.extensions && this.options.extensions.startBlock) {
                let t = 1 / 0;
                const n = e.slice(1);
                let s;
                this.options.extensions.startBlock.forEach((e => {
                    s = e.call({
                        lexer: this
                    }, n), "number" == typeof s && s >= 0 && (t = Math.min(t, s));
                })), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
            }
            if (this.state.top && (s = this.tokenizer.paragraph(i))) r = t[t.length - 1], n && "paragraph" === (null == r ? void 0 : r.type) ? (r.raw += "\n" + s.raw, 
            r.text += "\n" + s.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(s), 
            n = i.length !== e.length, e = e.substring(s.raw.length); else if (s = this.tokenizer.text(e)) e = e.substring(s.raw.length), 
            r = t[t.length - 1], r && "text" === r.type ? (r.raw += "\n" + s.raw, r.text += "\n" + s.text, 
            this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(s); else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) break;
                throw new Error(t);
            }
        }
        return this.state.top = !0, t;
    }
    inline(e, t = []) {
        return this.inlineQueue.push({
            src: e,
            tokens: t
        }), t;
    }
    /**
   * Lexing/Compiling
   */    inlineTokens(e, t = []) {
        let n, s, r, i, l, o, a = e;
        if (this.tokens.links) {
            const e = Object.keys(this.tokens.links);
            if (e.length > 0) for (;null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(a)); ) e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (;null != (i = this.tokenizer.rules.inline.blockSkip.exec(a)); ) a = a.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (;null != (i = this.tokenizer.rules.inline.anyPunctuation.exec(a)); ) a = a.slice(0, i.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        for (;e; ) if (l || (o = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((s => !!(n = s.call({
            lexer: this
        }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0))))) if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), 
        t.push(n); else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), s = t[t.length - 1], 
        s && "text" === n.type && "text" === s.type ? (s.raw += n.raw, s.text += n.text) : t.push(n); else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), 
        t.push(n); else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), 
        s = t[t.length - 1], s && "text" === n.type && "text" === s.type ? (s.raw += n.raw, 
        s.text += n.text) : t.push(n); else if (n = this.tokenizer.emStrong(e, a, o)) e = e.substring(n.raw.length), 
        t.push(n); else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), 
        t.push(n); else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n); else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), 
        t.push(n); else if (n = this.tokenizer.autolink(e)) e = e.substring(n.raw.length), 
        t.push(n); else if (this.state.inLink || !(n = this.tokenizer.url(e))) {
            if (r = e, this.options.extensions && this.options.extensions.startInline) {
                let t = 1 / 0;
                const n = e.slice(1);
                let s;
                this.options.extensions.startInline.forEach((e => {
                    s = e.call({
                        lexer: this
                    }, n), "number" == typeof s && s >= 0 && (t = Math.min(t, s));
                })), t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
            }
            if (n = this.tokenizer.inlineText(r)) e = e.substring(n.raw.length), "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)), 
            l = !0, s = t[t.length - 1], s && "text" === s.type ? (s.raw += n.raw, s.text += n.text) : t.push(n); else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) break;
                throw new Error(t);
            }
        } else e = e.substring(n.raw.length), t.push(n);
        return t;
    }
}

class se {
    // set by the parser
    constructor(e) {
        t(this, "options"), t(this, "parser"), this.options = e || s;
    }
    space(e) {
        return "";
    }
    code({text: e, lang: t, escaped: n}) {
        var s;
        const r = null == (s = (t || "").match(/^\S*/)) ? void 0 : s[0], i = e.replace(/\n$/, "") + "\n";
        return r ? '<pre><code class="language-' + p(r) + '">' + (n ? i : p(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : p(i, !0)) + "</code></pre>\n";
    }
    blockquote({tokens: e}) {
        return `<blockquote>\n${this.parser.parse(e)}</blockquote>\n`;
    }
    html({text: e}) {
        return e;
    }
    heading({tokens: e, depth: t}) {
        return `<h${t}>${this.parser.parseInline(e)}</h${t}>\n`;
    }
    hr(e) {
        return "<hr>\n";
    }
    list(e) {
        const t = e.ordered, n = e.start;
        let s = "";
        for (let i = 0; i < e.items.length; i++) {
            const t = e.items[i];
            s += this.listitem(t);
        }
        const r = t ? "ol" : "ul";
        return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + s + "</" + r + ">\n";
    }
    listitem(e) {
        let t = "";
        if (e.task) {
            const n = this.checkbox({
                checked: !!e.checked
            });
            e.loose ? e.tokens.length > 0 && "paragraph" === e.tokens[0].type ? (e.tokens[0].text = n + " " + e.tokens[0].text, 
            e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && "text" === e.tokens[0].tokens[0].type && (e.tokens[0].tokens[0].text = n + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({
                type: "text",
                raw: n + " ",
                text: n + " "
            }) : t += n + " ";
        }
        return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>\n`;
    }
    checkbox({checked: e}) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph({tokens: e}) {
        return `<p>${this.parser.parseInline(e)}</p>\n`;
    }
    table(e) {
        let t = "", n = "";
        for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
        t += this.tablerow({
            text: n
        });
        let s = "";
        for (let r = 0; r < e.rows.length; r++) {
            const t = e.rows[r];
            n = "";
            for (let e = 0; e < t.length; e++) n += this.tablecell(t[e]);
            s += this.tablerow({
                text: n
            });
        }
        return s && (s = `<tbody>${s}</tbody>`), "<table>\n<thead>\n" + t + "</thead>\n" + s + "</table>\n";
    }
    tablerow({text: e}) {
        return `<tr>\n${e}</tr>\n`;
    }
    tablecell(e) {
        const t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
        return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>\n`;
    }
    /**
   * span level renderer
   */    strong({tokens: e}) {
        return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em({tokens: e}) {
        return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan({text: e}) {
        return `<code>${e}</code>`;
    }
    br(e) {
        return "<br>";
    }
    del({tokens: e}) {
        return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link({href: e, title: t, tokens: n}) {
        const s = this.parser.parseInline(n), r = g(e);
        if (null === r) return s;
        let i = '<a href="' + (e = r) + '"';
        return t && (i += ' title="' + t + '"'), i += ">" + s + "</a>", i;
    }
    image({href: e, title: t, text: n}) {
        const s = g(e);
        if (null === s) return n;
        let r = `<img src="${e = s}" alt="${n}"`;
        return t && (r += ` title="${t}"`), r += ">", r;
    }
    text(e) {
        return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text;
    }
}

class re {
    // no need for block level renderers
    strong({text: e}) {
        return e;
    }
    em({text: e}) {
        return e;
    }
    codespan({text: e}) {
        return e;
    }
    del({text: e}) {
        return e;
    }
    html({text: e}) {
        return e;
    }
    text({text: e}) {
        return e;
    }
    link({text: e}) {
        return "" + e;
    }
    image({text: e}) {
        return "" + e;
    }
    br() {
        return "";
    }
}

class ie {
    constructor(e) {
        t(this, "options"), t(this, "renderer"), t(this, "textRenderer"), this.options = e || s, 
        this.options.renderer = this.options.renderer || new se, this.renderer = this.options.renderer, 
        this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new re;
    }
    /**
   * Static Parse Method
   */    static parse(e, t) {
        return new ie(t).parse(e);
    }
    /**
   * Static Parse Inline Method
   */    static parseInline(e, t) {
        return new ie(t).parseInline(e);
    }
    /**
   * Parse Loop
   */    parse(e, t = !0) {
        let n = "";
        for (let s = 0; s < e.length; s++) {
            const r = e[s];
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                const e = r, t = this.options.extensions.renderers[e.type].call({
                    parser: this
                }, e);
                if (!1 !== t || ![ "space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text" ].includes(e.type)) {
                    n += t || "";
                    continue;
                }
            }
            const i = r;
            switch (i.type) {
              case "space":
                n += this.renderer.space(i);
                continue;

              case "hr":
                n += this.renderer.hr(i);
                continue;

              case "heading":
                n += this.renderer.heading(i);
                continue;

              case "code":
                n += this.renderer.code(i);
                continue;

              case "table":
                n += this.renderer.table(i);
                continue;

              case "blockquote":
                n += this.renderer.blockquote(i);
                continue;

              case "list":
                n += this.renderer.list(i);
                continue;

              case "html":
                n += this.renderer.html(i);
                continue;

              case "paragraph":
                n += this.renderer.paragraph(i);
                continue;

              case "text":
                {
                    let r = i, l = this.renderer.text(r);
                    for (;s + 1 < e.length && "text" === e[s + 1].type; ) r = e[++s], l += "\n" + this.renderer.text(r);
                    n += t ? this.renderer.paragraph({
                        type: "paragraph",
                        raw: l,
                        text: l,
                        tokens: [ {
                            type: "text",
                            raw: l,
                            text: l
                        } ]
                    }) : l;
                    continue;
                }

              default:
                {
                    const e = 'Token with "' + i.type + '" type was not found.';
                    if (this.options.silent) return "";
                    throw new Error(e);
                }
            }
        }
        return n;
    }
    /**
   * Parse Inline Tokens
   */    parseInline(e, t) {
        t = t || this.renderer;
        let n = "";
        for (let s = 0; s < e.length; s++) {
            const r = e[s];
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                const e = this.options.extensions.renderers[r.type].call({
                    parser: this
                }, r);
                if (!1 !== e || ![ "escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text" ].includes(r.type)) {
                    n += e || "";
                    continue;
                }
            }
            const i = r;
            switch (i.type) {
              case "escape":
              case "text":
                n += t.text(i);
                break;

              case "html":
                n += t.html(i);
                break;

              case "link":
                n += t.link(i);
                break;

              case "image":
                n += t.image(i);
                break;

              case "strong":
                n += t.strong(i);
                break;

              case "em":
                n += t.em(i);
                break;

              case "codespan":
                n += t.codespan(i);
                break;

              case "br":
                n += t.br(i);
                break;

              case "del":
                n += t.del(i);
                break;

              default:
                {
                    const e = 'Token with "' + i.type + '" type was not found.';
                    if (this.options.silent) return "";
                    throw new Error(e);
                }
            }
        }
        return n;
    }
}

class le {
    constructor(e) {
        t(this, "options"), t(this, "block"), this.options = e || s;
    }
    /**
   * Process markdown before marked
   */    preprocess(e) {
        return e;
    }
    /**
   * Process HTML after marked is finished
   */    postprocess(e) {
        return e;
    }
    /**
   * Process all tokens before walk tokens
   */    processAllTokens(e) {
        return e;
    }
    /**
   * Provide function to tokenize markdown
   */    provideLexer() {
        return this.block ? ne.lex : ne.lexInline;
    }
    /**
   * Provide function to parse tokens
   */    provideParser() {
        return this.block ? ie.parse : ie.parseInline;
    }
}

t(le, "passThroughHooks",  new Set([ "preprocess", "postprocess", "processAllTokens" ]));

const oe = new class {
    constructor(...e) {
        t(this, "defaults", {
            async: !1,
            breaks: !1,
            extensions: null,
            gfm: !0,
            hooks: null,
            pedantic: !1,
            renderer: null,
            silent: !1,
            tokenizer: null,
            walkTokens: null
        }), t(this, "options", this.setOptions), t(this, "parse", this.parseMarkdown(!0)), 
        t(this, "parseInline", this.parseMarkdown(!1)), t(this, "Parser", ie), t(this, "Renderer", se), 
        t(this, "TextRenderer", re), t(this, "Lexer", ne), t(this, "Tokenizer", w), t(this, "Hooks", le), 
        this.use(...e);
    }
    /**
   * Run callback for every token
   */    walkTokens(e, t) {
        var n, s;
        let r = [];
        for (const i of e) switch (r = r.concat(t.call(this, i)), i.type) {
          case "table":
            {
                const e = i;
                for (const n of e.header) r = r.concat(this.walkTokens(n.tokens, t));
                for (const n of e.rows) for (const e of n) r = r.concat(this.walkTokens(e.tokens, t));
                break;
            }

          case "list":
            {
                const e = i;
                r = r.concat(this.walkTokens(e.items, t));
                break;
            }

          default:
            {
                const e = i;
                (null == (s = null == (n = this.defaults.extensions) ? void 0 : n.childTokens) ? void 0 : s[e.type]) ? this.defaults.extensions.childTokens[e.type].forEach((n => {
                    const s = e[n].flat(1 / 0);
                    r = r.concat(this.walkTokens(s, t));
                })) : e.tokens && (r = r.concat(this.walkTokens(e.tokens, t)));
            }
        }
        return r;
    }
    use(...e) {
        const t = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return e.forEach((e => {
            const n = {
                ...e
            };
            if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e => {
                if (!e.name) throw new Error("extension name required");
                if ("renderer" in e) {
                    const n = t.renderers[e.name];
                    t.renderers[e.name] = n ? function(...t) {
                        let s = e.renderer.apply(this, t);
                        return !1 === s && (s = n.apply(this, t)), s;
                    } : e.renderer;
                }
                if ("tokenizer" in e) {
                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
                    const n = t[e.level];
                    n ? n.unshift(e.tokenizer) : t[e.level] = [ e.tokenizer ], e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [ e.start ] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [ e.start ]));
                }
                "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
            })), n.extensions = t), e.renderer) {
                const t = this.defaults.renderer || new se(this.defaults);
                for (const n in e.renderer) {
                    if (!(n in t)) throw new Error(`renderer '${n}' does not exist`);
                    if ([ "options", "parser" ].includes(n)) continue;
                    const s = n, r = e.renderer[s], i = t[s];
                    t[s] = (...e) => {
                        let n = r.apply(t, e);
                        return !1 === n && (n = i.apply(t, e)), n || "";
                    };
                }
                n.renderer = t;
            }
            if (e.tokenizer) {
                const t = this.defaults.tokenizer || new w(this.defaults);
                for (const n in e.tokenizer) {
                    if (!(n in t)) throw new Error(`tokenizer '${n}' does not exist`);
                    if ([ "options", "rules", "lexer" ].includes(n)) continue;
                    const s = n, r = e.tokenizer[s], i = t[s];
                    t[s] = (...e) => {
                        let n = r.apply(t, e);
                        return !1 === n && (n = i.apply(t, e)), n;
                    };
                }
                n.tokenizer = t;
            }
            if (e.hooks) {
                const t = this.defaults.hooks || new le;
                for (const n in e.hooks) {
                    if (!(n in t)) throw new Error(`hook '${n}' does not exist`);
                    if ([ "options", "block" ].includes(n)) continue;
                    const s = n, r = e.hooks[s], i = t[s];
                    le.passThroughHooks.has(n) ? t[s] = e => {
                        if (this.defaults.async) return Promise.resolve(r.call(t, e)).then((e => i.call(t, e)));
                        const n = r.call(t, e);
                        return i.call(t, n);
                    } : t[s] = (...e) => {
                        let n = r.apply(t, e);
                        return !1 === n && (n = i.apply(t, e)), n;
                    };
                }
                n.hooks = t;
            }
            if (e.walkTokens) {
                const t = this.defaults.walkTokens, s = e.walkTokens;
                n.walkTokens = function(e) {
                    let n = [];
                    return n.push(s.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...n
            };
        })), this;
    }
    setOptions(e) {
        return this.defaults = {
            ...this.defaults,
            ...e
        }, this;
    }
    lexer(e, t) {
        return ne.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
        return ie.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
        return (t, n) => {
            const s = {
                ...n
            }, r = {
                ...this.defaults,
                ...s
            }, i = this.onError(!!r.silent, !!r.async);
            if (!0 === this.defaults.async && !1 === s.async) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (null == t) return i(new Error("marked(): input parameter is undefined or null"));
            if ("string" != typeof t) return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
            r.hooks && (r.hooks.options = r, r.hooks.block = e);
            const l = r.hooks ? r.hooks.provideLexer() : e ? ne.lex : ne.lexInline, o = r.hooks ? r.hooks.provideParser() : e ? ie.parse : ie.parseInline;
            if (r.async) return Promise.resolve(r.hooks ? r.hooks.preprocess(t) : t).then((e => l(e, r))).then((e => r.hooks ? r.hooks.processAllTokens(e) : e)).then((e => r.walkTokens ? Promise.all(this.walkTokens(e, r.walkTokens)).then((() => e)) : e)).then((e => o(e, r))).then((e => r.hooks ? r.hooks.postprocess(e) : e)).catch(i);
            try {
                r.hooks && (t = r.hooks.preprocess(t));
                let e = l(t, r);
                r.hooks && (e = r.hooks.processAllTokens(e)), r.walkTokens && this.walkTokens(e, r.walkTokens);
                let n = o(e, r);
                return r.hooks && (n = r.hooks.postprocess(n)), n;
            } catch (a) {
                return i(a);
            }
        };
    }
    onError(e, t) {
        return n => {
            if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", 
            e) {
                const e = "<p>An error occurred:</p><pre>" + p(n.message + "", !0) + "</pre>";
                return t ? Promise.resolve(e) : e;
            }
            if (t) return Promise.reject(n);
            throw n;
        };
    }
};

function ae(e, t) {
    return oe.parse(e, t);
}

ae.options = ae.setOptions = function(e) {
    return oe.setOptions(e), ae.defaults = oe.defaults, r(ae.defaults), ae;
}, ae.getDefaults = n, ae.defaults = s, ae.use = function(...e) {
    return oe.use(...e), ae.defaults = oe.defaults, r(ae.defaults), ae;
}, ae.walkTokens = function(e, t) {
    return oe.walkTokens(e, t);
}, ae.parseInline = oe.parseInline, ae.Parser = ie, ae.parser = ie.parse, ae.Renderer = se, 
ae.TextRenderer = re, ae.Lexer = ne, ae.lexer = ne.lex, ae.Tokenizer = w, ae.Hooks = le, 
ae.parse = ae, ae.options, ae.setOptions, ae.use, ae.walkTokens, ae.parseInline, 
ie.parse, ne.lex;

export { ae as m };
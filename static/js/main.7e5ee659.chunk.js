(this.webpackJsonprecrutment=this.webpackJsonprecrutment||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(13),o=n.n(i),s=(n(19),n(4)),a=n(0),l=function(e){var t=e.Title,n=e.Poster,c=e.Year,r=e.Key;return Object(a.jsxs)("div",{className:"movie-block",children:[Object(a.jsx)("img",{src:"N/A"!==n?n:"",alt:"N/A"!==n?"Poster for ".concat(t):"Poster for ".concat(t," not available")}),Object(a.jsx)("p",{children:t}),Object(a.jsxs)("p",{children:["YEAR: ",c]})]},r)},u=n(14),j=n.n(u),d=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(),o=Object(s.a)(i,2),u=o[0],d=o[1],b=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,t;(null===(e=b.current)||void 0===e?void 0:e.value)&&j.a.get("http://www.omdbapi.com/?s=".concat(null===(t=b.current)||void 0===t?void 0:t.value,"&apikey=6185b8e5")).then((function(e){return d(e.data)}))}),[n]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"search-component",children:[Object(a.jsx)("input",{type:"text",name:"search_for",ref:b}),Object(a.jsx)("button",{className:"button-margin",onClick:function(){return r(!n)},children:"Szukaj"})]}),"False"===(null===u||void 0===u?void 0:u.Response)?Object(a.jsx)("div",{className:"error_block",children:Object(a.jsx)("p",{children:null===u||void 0===u?void 0:u.Error})}):null===u||void 0===u?void 0:u.Search.map((function(e,t){return Object(a.jsx)("div",{className:"container-for-movies",children:Object(a.jsx)(l,{Key:e.imdbID,Title:e.Title,Poster:e.Poster,Year:e.Year},t)})}))]})};n(39);var b=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(d,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.7e5ee659.chunk.js.map
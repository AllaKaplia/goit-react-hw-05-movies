"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{7868:function(e,r,t){t.d(r,{v:function(){return o},w:function(){return c}});var n=t(5861),a=t(4687),s=t.n(a),i=t(1243),u="46ee399c81006beac7a91a0ab15f7750";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/all/day",{signal:r,params:{api_key:u,time_window:"week"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.nameMovies,n=r.signal,e.next=3,i.Z.get("search/movie",{signal:n,params:{api_key:u,query:t,include_adult:!1,page:1}});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},5174:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(7689),a=t(184),s=function(e){var r=e.movies,t=(0,n.TH)(),s=function(e){return"/movies"===t.pathname?"".concat(e):"movies/".concat(e)};return(0,a.jsx)("ul",{children:r.map((function(e){var r=e.id,n=e.poster_path,i=e.original_language,u=e.title,c=e.release_date,o=e.original_title;return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:s(r),to:s(r),state:{from:t},children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:u,width:"200"}),(0,a.jsx)("h2",{children:o}),(0,a.jsxs)("p",{children:["Original language: ",i]}),(0,a.jsxs)("p",{children:["Release date: ",c]})]})},r)}))})}},9544:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),s=t(4687),i=t.n(s),u=t(1894),c=t(5174),o=t(2791),l=t(7868),p=t(184);r.default=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],s=r[1],f=(0,o.useState)(!1),h=(0,a.Z)(f,2),d=h[0],v=h[1],g=(0,o.useState)(null),m=(0,a.Z)(g,2),w=m[0],x=m[1],_=(0,o.useRef)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_.current&&_.current.abort(),_.current=new AbortController,v(!0),x(null),e.next=7,(0,l.w)(_.current.signal);case 7:r=e.sent,s(r),v(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),"AbortError"!==e.t0.name&&(x("Sorry, an error occurred :( Try reloading the page!"),v(!1));case 15:return e.prev=15,v(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"This week's movie trends"}),d&&(0,p.jsx)(u.Z,{}),!d&&t.length>0&&(0,p.jsx)(c.Z,{movies:t}),w&&(0,p.jsx)("div",{children:w})]})}}}]);
//# sourceMappingURL=544.3069177e.chunk.js.map
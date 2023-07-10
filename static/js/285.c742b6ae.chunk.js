"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[285],{7868:function(e,r,n){n.d(r,{Bt:function(){return f},Y5:function(){return l},vw:function(){return c},wr:function(){return o},y:function(){return v}});var t=n(5861),a=n(4687),u=n.n(a),i=n(1243),s="46ee399c81006beac7a91a0ab15f7750";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",{signal:r,params:{api_key:s,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),c=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.nameMovies,t=r.signal,e.next=3,i.Z.get("search/movie",{signal:t,params:{api_key:s,query:n}});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.movieId,t=r.signal,e.next=3,i.Z.get("movie/".concat(n),{signal:t,params:{api_key:s,language:"en-US"}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.movieId,t=r.signal,e.next=3,i.Z.get("movie/".concat(n,"/credits"),{signal:t,params:{api_key:s,language:"en-US"}});case 3:return a=e.sent,e.abrupt("return",a.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.movieId,t=r.signal,e.next=3,i.Z.get("movie/".concat(n,"/reviews"),{signal:t,params:{api_key:s,language:"en-US"}});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},5174:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(7689),a=n(1087),u=n(184),i=function(e){var r=e.movies,n=(0,t.TH)();return(0,u.jsx)("ul",{children:r.map((function(e){var r=e.id,t=e.poster_path,i=e.original_language,s=e.title,o=e.release_date,c=e.original_title;return(0,u.jsx)("li",{children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(r),state:{from:n},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:s,width:"200"}),(0,u.jsx)("h2",{children:c}),(0,u.jsxs)("p",{children:["Original language: ",i]}),(0,u.jsxs)("p",{children:["Release date: ",o]})]})},r)}))})}},9285:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});var t=n(5861),a=n(9439),u=n(4687),i=n.n(u),s=n(2791),o=n(6727),c=n(1087),l=n(5705),v=n(7425),f=n(184);function p(e){var r,n=e.onChange,t=(0,c.lr)(),u=(0,a.Z)(t,2),i=u[0],p=u[1],d=null!==(r=i.get("queryMovie"))&&void 0!==r?r:"",h=o.Ry().shape({queryMovie:o.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is invalid").required("Name is required")});(0,s.useEffect)((function(){d&&n(d)}),[d,n]);return(0,f.jsx)(l.J9,{initialValues:{queryMovie:""},validationSchema:h,onSubmit:function(e){var r=e.queryMovie;p(""!==r?{queryMovie:r}:{}),n(r)},children:function(e){var r=e.handleSubmit,n=e.errors;return(0,f.jsxs)(l.l0,{autoComplete:"off",onSubmit:r,children:[(0,f.jsx)(l.gN,{type:"text",name:"queryMovie",autoFocus:!0,placeholder:"Search movies"}),(0,f.jsxs)("button",{type:"submit",children:[(0,f.jsx)("span",{children:"Search"}),(0,f.jsx)(v.MGh,{size:24})]}),n.queryMovie&&(0,f.jsx)("div",{children:n.message})]})}})}var d=n(6795),h=n(7868),g=n(1894),m=n(5174),x=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),n=r[0],u=r[1],o=(0,s.useState)(!1),l=(0,a.Z)(o,2),v=l[0],x=l[1],y=(0,s.useState)(""),Z=(0,a.Z)(y,2),w=Z[0],b=Z[1],j=(0,s.useState)(null),_=(0,a.Z)(j,2),k=_[0],S=_[1],q=(0,s.useRef)(),M=(0,c.lr)(),C=(0,a.Z)(M,1)[0].get("queryMovie")||"";(0,s.useEffect)((function(){if(""!==C){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q.current&&q.current.abort(),q.current=new AbortController,x(!0),S(!1),e.next=7,(0,h.vw)({nameMovies:C,signal:q.current.signal});case 7:0===(r=e.sent).length&&d.Am.info("Sorry, no movies were found for your request :("),u(r),S(null),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),"AbortError"!==e.t0.name&&(S("Sorry, an error occurred :( Try reloading the page!"),x(!1));case 16:return e.prev=16,x(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(d.Ix,{autoClose:3e3,theme:"colored"}),(0,f.jsx)(p,{onChange:function(e){e!==w&&(b(w),S(null))}}),v&&(0,f.jsx)(g.Z,{}),!v&&n.length>0&&(0,f.jsx)(m.Z,{movies:n}),k&&(0,f.jsx)("div",{children:k.message})]})}}}]);
//# sourceMappingURL=285.c742b6ae.chunk.js.map
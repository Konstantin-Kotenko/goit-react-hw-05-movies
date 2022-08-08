"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[927],{6133:function(n,e,r){r.d(e,{h:function(){return i}});var t=r(4569),i=r.n(t)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9b83de628d16dffe4523b57f7d3aefed"}})},927:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t,i,o,a,s,p,c,d,x,u=r(885),l=r(168),h=r(5861),g=r(7757),f=r.n(g),v=r(5562),b=r.n(v),m=r(6133),j=function(){var n=(0,h.Z)(f().mark((function n(e){var r,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.h.get("movie/".concat(e));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),b().Notify.failure("Sorry please try again");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),w=r(2791),Z=r(501),k=r(6871),y=r(6031),P=r(184),_=y.ZP.ul(t||(t=(0,l.Z)(["\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n"]))),O=y.ZP.li(i||(i=(0,l.Z)(["\n  font-weight: 400;\n  &:not(: last-child) {\n    margin-right: 15px;\n  }\n"]))),C=function(n){var e=n.genres;return(0,P.jsx)(_,{children:e.map((function(n){var e=n.id,r=n.name;return(0,P.jsx)(O,{id:e,children:r},e)}))})},F=y.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n"]))),L=y.ZP.img(a||(a=(0,l.Z)(["\n  border-radius: 4px;\n  margin-right: 15px;\n  width: 250px;\n  height: 350px;\n"]))),R=y.ZP.p(s||(s=(0,l.Z)(["\n  font-weight: 400;\n"]))),z=y.ZP.span(p||(p=(0,l.Z)(["\n  font-weight: 700;\n"]))),H=function(n){var e=n.movie,r=e.title,t=e.poster_path,i=e.vote_average,o=e.overview,a=e.genres,s=e.release_date;return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(F,{children:[(0,P.jsx)(L,{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:r}),(0,P.jsxs)("div",{children:[(0,P.jsxs)("h2",{children:[r,"(",new Date(s).getFullYear(),")"]}),(0,P.jsxs)(R,{children:[(0,P.jsx)(z,{children:"Rated : "}),i]}),(0,P.jsxs)(R,{children:[(0,P.jsx)(z,{children:"Overview"}),(0,P.jsx)("br",{}),o]}),(0,P.jsx)(z,{children:"Genres"}),a&&(0,P.jsx)(C,{genres:a})]})]})})},S=y.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  margin: 0 auto;\n"]))),T=(0,y.ZP)(Z.OL)(d||(d=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  background-color: rgb(63, 81, 181);\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;\n  &:hover {\n    opacity: 1;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),U=function(){var n,e=null===(n=(0,k.TH)().state)||void 0===n?void 0:n.from;return(0,P.jsxs)(S,{children:[(0,P.jsx)(T,{to:"cast",state:{from:e},children:"Cast"}),(0,P.jsx)(T,{to:"reviews",state:{from:e},children:"Reviews"})]})},B=(0,y.ZP)(Z.OL)(x||(x=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  width: 150px;\n  text-decoration: none;\n  color: white;\n  background-color: rgb(63, 81, 181);\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;\n  &:hover {\n    opacity: 1;\n  }\n"]))),D=function(){var n,e,r=(0,w.useState)([]),t=(0,u.Z)(r,2),i=t[0],o=t[1],a=(0,k.UO)().movieId,s=null!==(n=null===(e=(0,k.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,w.useEffect)((function(){j(a).then((function(n){o(n)}))}),[a]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(B,{to:s,children:"Back to movies"}),(0,P.jsx)(H,{movie:i}),(0,P.jsx)(U,{}),(0,P.jsx)(k.j3,{})]})}}}]);
//# sourceMappingURL=927.043b4725.chunk.js.map
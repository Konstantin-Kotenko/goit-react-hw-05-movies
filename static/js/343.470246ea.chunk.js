"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[343],{6133:function(n,t,e){e.d(t,{h:function(){return a}});var r=e(4569),a=e.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9b83de628d16dffe4523b57f7d3aefed"}})},4312:function(n,t,e){e.d(t,{s:function(){return v}});var r,a,i,o,s=e(168),c=e(501),u=e(6871),f=e(6031),p=e(184),d=f.ZP.li(r||(r=(0,s.Z)(["\n  cursor: pointer;\n  margin: 10px;\n  margin-bottom: 20px;\n  width: 290px;\n  height: 450px;\n"]))),l=f.ZP.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  text-decoration: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: ",";\n  &:hover {\n    transform: scale(1.03);\n  }\n"])),(function(n){return n.theme.radii.normal})),h=f.ZP.p(i||(i=(0,s.Z)(["\n  font-weight: 400;\n  margin: 0;\n  text-align: center;\n"]))),m=function(n){var t=n.id,e=n.title,r=n.src,a=(0,u.TH)();return(0,p.jsxs)(d,{children:[(0,p.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:a},children:(0,p.jsx)(l,{src:"https://image.tmdb.org/t/p/w500"+r,alt:e})}),(0,p.jsx)(h,{children:e})]},t)},x=f.ZP.ul(o||(o=(0,s.Z)(["\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),v=function(n){var t=n.movies;return(0,p.jsx)(x,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path,a=n.name;return(0,p.jsx)(m,{id:t,title:e||a,src:r},t)}))})}},343:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(885),a=e(2791),i=e(5861),o=e(7757),s=e.n(o),c=e(5562),u=e.n(c),f=e(6133),p=function(){var n=(0,i.Z)(s().mark((function n(){var t,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.h.get("/trending/all/day");case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),u().Notify.failure("Sorry please try again");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),d=e(4312),l=e(184),h=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1];return(0,a.useEffect)((function(){p().then((function(n){i(n.results)}))}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.s,{movies:e})})}}}]);
//# sourceMappingURL=343.470246ea.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[402],{6133:function(e,n,t){t.d(n,{h:function(){return a}});var r=t(4569),a=t.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9b83de628d16dffe4523b57f7d3aefed"}})},1402:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,a=t(885),c=t(2791),o=t(6871),u=t(168),i=t(6031),s=t(184),l=i.ZP.li(r||(r=(0,u.Z)(["\n  border-bottom: 1px solid black;\n  margin: 0px;\n  &:not(last-child) {\n    margin-bottom: 20px;\n  }\n"]))),f=function(e){var n=e.reviews;return(0,s.jsx)("ol",{children:n.map((function(e){var n=e.id,t=e.content;return(0,s.jsx)(l,{children:(0,s.jsx)("p",{children:t})},n)}))})},p=t(5861),d=t(7757),h=t.n(d),m=t(6133),v=function(){var e=(0,p.Z)(h().mark((function e(n){var t,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.h.get("/movie/".concat(n,"/reviews"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,c.useState)(null),n=(0,a.Z)(e,2),t=n[0],r=n[1],u=(0,o.UO)().movieId;return(0,c.useEffect)((function(){v(u).then((function(e){r(e.results)}))}),[u]),(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f,{reviews:t})})})}}}]);
//# sourceMappingURL=402.7d21de7d.chunk.js.map
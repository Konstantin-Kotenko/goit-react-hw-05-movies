"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[180],{6133:function(n,e,r){r.d(e,{h:function(){return i}});var t=r(4569),i=r.n(t)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9b83de628d16dffe4523b57f7d3aefed"}})},1944:function(n,e,r){r.d(e,{s:function(){return b}});var t,i,o,a,s=r(168),c=r(501),u=r(6871),p=r(6031),l=r(184),d=p.ZP.li(t||(t=(0,s.Z)(["\n  cursor: pointer;\n  margin: 10px;\n  margin-bottom: 20px;\n  width: 290px;\n  height: 450px;\n"]))),x=p.ZP.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  text-decoration: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: ",";\n  &:hover {\n    transform: scale(1.03);\n  }\n"])),(function(n){return n.theme.radii.normal})),f=p.ZP.p(o||(o=(0,s.Z)(["\n  font-weight: 400;\n  margin: 0;\n  text-align: center;\n"]))),h=function(n){var e=n.id,r=n.title,t=n.src,i=(0,u.TH)();return(0,l.jsxs)(d,{children:[(0,l.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:i},children:(0,l.jsx)(x,{src:"https://image.tmdb.org/t/p/w500"+t,alt:r})}),(0,l.jsx)(f,{children:r})]},e)},m=p.ZP.ul(a||(a=(0,s.Z)(["\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),b=function(n){var e=n.movies;return(0,l.jsx)(m,{children:e.map((function(n){var e=n.id,r=n.title,t=n.poster_path,i=n.name;return(0,l.jsx)(h,{id:e,title:r||i,src:t},e)}))})}},180:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,i,o=r(885),a=r(2791),s=r(501),c=r(6871),u=r(1944),p=r(168),l=r(5705),d=r(6031),x=r(8185),f=r(184),h=(0,d.ZP)(l.l0)(t||(t=(0,p.Z)(["\n  display: flex;\n  margin: 0 auto;\n  justify-content: center;\n\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal})),m=d.ZP.button(i||(i=(0,p.Z)(["\n  color: white;\n  background-color: rgb(63, 81, 181);\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  border-radius: 4px 0 0 4px;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),b=function(n){var e=n.onSubmit,r=n.value;return(0,f.jsx)(l.J9,{initialValues:{query:null!==r&&void 0!==r?r:""},onSubmit:function(n,r){var t=r.resetForm;e(n),t()},children:(0,f.jsxs)(h,{children:[(0,f.jsx)(m,{type:"submit",children:(0,f.jsx)(x.dVI,{})}),(0,f.jsx)(l.gN,{type:"text",name:"query"})]})})},g=r(5861),v=r(7757),j=r.n(v),w=r(6133),y=function(){var n=(0,g.Z)(j().mark((function n(e){var r,t;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.h.get("/search/movie",{params:e});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=(0,s.lr)(),e=(0,o.Z)(n,2),r=e[0],t=e[1],i=(0,a.useState)([]),p=(0,o.Z)(i,2),l=p[0],d=p[1];(0,a.useEffect)((function(){var n,e=null!==(n=r.get("name"))&&void 0!==n?n:"";""!==e&&y({query:e}).then((function(n){d(n.results)}))}),[r]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b,{onSubmit:function(n){""===n.query&&console.log("safasf");var e=""!==n.query?{name:n.query}:{};t(e)}}),(0,f.jsx)(u.s,{movies:l}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading subpage..."}),children:(0,f.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=180.4a076899.chunk.js.map
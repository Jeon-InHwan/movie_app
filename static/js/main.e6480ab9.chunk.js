(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},61:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(29),r=s.n(c),i=(s(38),s(8)),o=s(2),l=(s(39),s(1));var j=function(){return Object(l.jsxs)("div",{className:"about_container",children:[Object(l.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(l.jsx)("span",{children:"- George Orwell, 1984"})]})},m=s(18),u=s.n(m),d=s(30),h=s(11),b=s(12),p=s(14),v=s(13),O=s(31),x=s.n(O);s(61);var f=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,c=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(i.b,{to:{pathname:"/movie-detail",state:{year:t,title:s,summary:a,poster:n,genres:c}},children:[Object(l.jsx)("img",{src:n,alt:s,title:s}),Object(l.jsxs)("div",{className:"movie_data",children:[Object(l.jsx)("h3",{className:"movie_title",children:s}),Object(l.jsx)("h5",{className:"movie_year",children:t}),Object(l.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(l.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie_summary",children:[a.slice(0,180),"..."]})]})]})})},g=(s(67),function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));s(68);var y=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})},_=(s(69),function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){console.log(this.props);var e=this.props.location;return e.state?Object(l.jsxs)("div",{className:"div_detail",children:[Object(l.jsx)("img",{className:"img_poster",src:e.state.poster,alt:e.state.title}),Object(l.jsx)("h2",{className:"h2_title",children:e.state.title}),Object(l.jsx)("ul",{className:"ul_genres",children:e.state.genres.map((function(e,t){return Object(l.jsx)("li",{className:"li_genre",children:e},t)}))}),Object(l.jsx)("p",{className:"p_summary",children:e.state.summary})]}):null}}]),s}(n.a.Component));var N=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie-detail",component:_})]})};r.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e6480ab9.chunk.js.map
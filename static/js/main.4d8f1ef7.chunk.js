(this.webpackJsonpmovies_finder=this.webpackJsonpmovies_finder||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a(2),s=a(16),o=a.n(s),l="https://www.omdbapi.com/?apikey=c364c392",u=a(4),m=a(17),E=a(1),_=function(e){return{type:"SET_QUERY",query:e}},d={movies:[],query:"",isLoading:!1,hasError:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING_MOVIES":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,hasError:""});case"LOADING_ERROR_MOVIES":return Object(E.a)(Object(E.a)({},e),{},{movies:[],isLoading:!1,hasError:t.error});case"ERROR_OFF_MOVIES":return Object(E.a)(Object(E.a)({},e),{},{hasError:""});case"SET_MOVIES":return Object(E.a)(Object(E.a)({},e),{},{movies:t.movies,isLoading:!1,hasError:""});case"SET_QUERY":return Object(E.a)(Object(E.a)({},e),{},{query:t.query});default:return e}},f=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},b={currentPage:0,numberOfPosts:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_PAGE":return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case"SET_NUMBER_OF_POSTS":return Object(E.a)(Object(E.a)({},e),{},{numberOfPosts:t.numberOfPosts});default:return e}},g={imdbId:0,movieInfo:null,isLoading:!1,hasError:"",isInitialized:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING_DETAILS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,hasError:"",isInitialized:!0});case"LOADING_ERROR_DETAILS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,hasError:t.error});case"SET_IMDB_ID":return Object(E.a)(Object(E.a)({},e),{},{imdbId:t.imdbId});case"SET_MOVIE_INFO":return Object(E.a)(Object(E.a)({},e),{},{movieInfo:t.movieInfo,isLoading:!1,hasError:""});case"DELETE_MOVIE_INFO":return Object(E.a)(Object(E.a)({},e),{},{movieInfo:null,imdbId:0});default:return e}},N=a(18),v=function(e){return{type:"ADD_QUERY",query:e}},j={queries:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_QUERY":return e.queries[e.queries.length-1]===t.query?e:Object(E.a)(Object(E.a)({},e),{},{queries:[].concat(Object(N.a)(e.queries),[t.query])});case"DELETE_QUERIES":return Object(E.a)(Object(E.a)({},e),{},{queries:[e.queries[e.queries.length-1]]});default:return e}},S=function(e){return function(e){return e.movies}(e.movies)},y=function(e){return function(e){return e.query}(e.movies)},R=function(e){return function(e){return e.hasError}(e.movies)},T=function(e){return function(e){return e.isLoading}(e.movies)},D=function(e){return function(e){return e.currentPage}(e.pagination)},P=function(e){return function(e){return e.numberOfPosts}(e.pagination)},A=function(e){return function(e){return e.imdbId}(e.details)},L=function(e){return function(e){return e.movieInfo}(e.details)},q=function(e){return function(e){return e.isLoading}(e.details)},F=function(e){return function(e){return e.hasError}(e.details)},w=function(e){return function(e){return e.queries}(e.queries)},k=function(e){return function(e){return e.queries[e.queries.length-1]}(e.queries)},C=Object(u.c)({movies:O,pagination:h,details:p,queries:I}),M=JSON.parse(localStorage.getItem("reduxState"))||{},V=Object(u.d)(C,M,Object(u.a)(m.a));V.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(V.getState()))}));var G=V,U=a(8),x=a.n(U),Q=function(){var e=Object(i.b)(),t=Object(i.c)(S),a=Object(i.c)(y),c=Object(i.c)(D),s=Object(i.c)(P),u=Object(i.c)(T),m=Object(i.c)(R);Object(n.useEffect)((function(){var t,n;c&&(e({type:"START_LOADING_MOVIES"}),(t=a,n=c,fetch("".concat(l,"&s=").concat(t,"&page=").concat(n)).then((function(e){return e.json()}))).then((function(t){"False"!==t.Response?(e(function(e){return{type:"SET_MOVIES",movies:e}}(t.Search)),e(function(e){return{type:"SET_NUMBER_OF_POSTS",numberOfPosts:e}}(+t.totalResults))):e({type:"LOADING_ERROR_MOVIES",error:t.Error})})))}),[a,c]);return u?r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"dot1"}),r.a.createElement("div",{className:"dot2"})):""!==m?r.a.createElement("p",{className:"error__message"},"Oops... ",m," Please, try again."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cards"},t.map((function(t){return r.a.createElement("div",{className:"card",key:t.imdbID,onClick:function(){return a=t.imdbID,e(function(e){return{type:"SET_IMDB_ID",imdbId:e}}(a)),void window.scrollTo(0,0);var a}},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:"N/A"!==t.Poster?t.Poster:x.a,alt:"Film logo"})),r.a.createElement("div",{className:"card__content"},r.a.createElement("h2",{className:"card__title"},t.Title," (",t.Year,")")),r.a.createElement("button",{className:"button card__button"},"More details"))}))),0!==t.length&&r.a.createElement(o.a,{activePage:c,totalItemsCount:s,itemsCountPerPage:10,onChange:function(t){return function(t){e(f(t)),window.scrollTo(0,0)}(t)},innerClass:"pages",linkClass:"pages__link",activeLinkClass:"pages__link--active",prevPageText:"\u2039",nextPageText:"\u203a"}))},Y=a(3),B=function(){var e=Object(i.b)(),t=Object(i.c)(A),a=Object(i.c)(L),c=Object(i.c)(q),s=Object(i.c)(F),o=Object(n.useState)(""),u=Object(Y.a)(o,2),m=u[0],E=u[1],_=Object(n.useState)(""),d=Object(Y.a)(_,2),O=d[0],f=d[1],b=Object(n.useState)(!0),h=Object(Y.a)(b,2),g=h[0],p=h[1];return Object(n.useEffect)((function(){t&&(e({type:"START_LOADING_DETAILS"}),function(e){return fetch("".concat(l,"&i=").concat(e,"&plot=full")).then((function(e){return e.json()}))}(t).then((function(t){"False"!==t.Response?(e(function(e){return{type:"SET_MOVIE_INFO",movieInfo:e}}(t)),E(t.Plot),f((function(){return t.Plot===t.Plot.split(".").slice(0,2).join(".")?t.Plot:t.Plot.split(".").slice(0,2).join(".").concat(".")})),p(!0)):e({type:"LOADING_ERROR_DETAILS",error:t.Error})})))}),[t]),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"details__heading"},"Details"),r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"dot1"}),r.a.createElement("div",{className:"dot2"}))):s?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"details__heading"},"Details"),r.a.createElement("p",{className:"error__message"},"Oops... ",s," Please, try again.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"details__header"},r.a.createElement("h2",{className:"details__heading"},"Details"),r.a.createElement("button",{className:"details__button ".concat(a?"":"hidden"),onClick:function(){return e({type:"DELETE_MOVIE_INFO"})}},"\u274c")),a&&r.a.createElement("div",{className:"details__card"},r.a.createElement("div",{className:"details__image"},r.a.createElement("img",{src:"N/A"!==a.Poster?a.Poster:x.a,alt:"Film logo"})),r.a.createElement("div",{className:"details__content"},r.a.createElement("h2",{className:"details__title"},a.Title," (",a.Year,")"),"N/A"!==a.imdbRating&&r.a.createElement("div",{className:"details__rating"},r.a.createElement("p",{className:"details__rating-num"},a.imdbRating,"/10")),g&&"N/A"!==m?r.a.createElement("div",{className:"details__description"},r.a.createElement("p",null,O),O!==m&&r.a.createElement("a",{className:"details__show-more",onClick:function(){return p(!1)}},"Show more")):"N/A"!==m&&r.a.createElement("div",{className:"details__description"},r.a.createElement("p",null,m),O!==m&&r.a.createElement("a",{className:"details__show-more",onClick:function(){return p(!0)}},"Show less")),"N/A"!==a.Director&&r.a.createElement("p",{className:"details__creators"},r.a.createElement("span",{className:"details__important"},"Director: "),a.Director),"N/A"!==a.Writer&&r.a.createElement("p",{className:"details__creators"},r.a.createElement("span",{className:"details__important"},"Writers: "),a.Writer))))},J=function(){var e=Object(i.b)(),t=Object(i.c)(w),a=Object(i.c)(R),c=Object(i.c)(k),s=Object(n.useState)(c),o=Object(Y.a)(s,2),l=o[0],u=o[1],m=Object(n.useState)(!1),E=Object(Y.a)(m,2),d=E[0],O=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:function(t){return function(t){t.preventDefault(),e(f(1)),e(_(l.trim())),e(v(l.trim())),O(!1)}(t)}},r.a.createElement("div",{className:"form__field"},r.a.createElement("input",{type:"text",placeholder:"Enter the title of the movie",className:"form__input ".concat(""!==a&&"form__input--error"),value:l,onChange:function(t){u(t.target.value),e({type:"ERROR_OFF_MOVIES"})}}),r.a.createElement("button",{type:"submit",className:"button form__button form__button--full"},"Search"),r.a.createElement("button",{type:"submit",className:"button form__button form__button--short"},"\ud83d\udd0d"))),r.a.createElement("div",{className:"search-history"},t.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"search-history__title",onClick:function(){return O(!d)}},d?"Hide search history":"Show search history"),r.a.createElement("a",{className:"search-history__title",onClick:function(){return e({type:"DELETE_QUERIES"})}},"Clear history :)"),d&&r.a.createElement("ul",{className:"search-history__list"},t.map((function(t,a){return r.a.createElement("li",{key:a,className:"search-history__item"},r.a.createElement("a",{className:"search-history__link",onClick:function(){e(v(t)),e(_(t)),e(f(1)),u(t),O(!1)}},t))}))))))},W=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(J,null),r.a.createElement(Q,null)),r.a.createElement("div",{className:"details"},r.a.createElement(B,null)))},z=(a(31),r.a.createElement(i.a,{store:G},r.a.createElement(W,null)));Object(c.render)(z,document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/no-poster-available.eac23845.jpg"}},[[19,1,2]]]);
//# sourceMappingURL=main.4d8f1ef7.chunk.js.map
(window["webpackJsonpsocial-network"]=window["webpackJsonpsocial-network"]||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Navbar_nav__2Zb-f",item:"Navbar_item__2sgyH",activeLink:"Navbar_activeLink__LIvl3"}},106:function(e,t,n){e.exports=n.p+"static/media/user.eaa1c324.svg"},127:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(44),a=n(20);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var s={dialogs:[{id:1,name:"Timur",img:"https://picsum.photos/100"},{id:2,name:"Sergey",img:"https://picsum.photos/50"},{id:3,name:"Inokentii",img:"https://picsum.photos/70"},{id:4,name:"Viktor",img:"https://picsum.photos/80"},{id:5,name:"Valera",img:"https://picsum.photos/90"},{id:6,name:"Sveta",img:"https://picsum.photos/100"},{id:7,name:"Vyacheslav",img:"https://picsum.photos/60"}],messages:[{id:1,message:"Hi"},{id:2,message:"Yo"},{id:3,message:"Bla bla bla"},{id:4,message:"Yeahaaaaa"},{id:5,message:"Yeahaaaaa"},{id:6,message:"Yeahaaaaa"},{id:7,message:"Yeahaaaaa"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return i({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:e.messages.length++,message:n}])});default:return e}}},132:function(e,t,n){e.exports={music:"Music_music__1CBl9"}},133:function(e,t,n){e.exports={news:"News_news__1XGAo"}},134:function(e,t,n){e.exports={settings:"Settings_settings__S55ek"}},137:function(e,t,n){e.exports=n.p+"static/media/loader200.049a85d4.svg"},16:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});var r=n(136),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"69e6848c-50c7-4e46-88eb-ea93226fa7e3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolet methos. Please use profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},165:function(e,t,n){e.exports=n(292)},170:function(e,t,n){},171:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(65),i=n.n(o),s=(n(170),n(34)),c=n(35),u=n(37),l=n(36),p=n(38),m=(n(171),n(10)),f=n.n(m),d=n(12),g=function(e){return a.a.createElement("nav",{className:f.a.nav},a.a.createElement("div",{className:f.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),a.a.createElement("div",{className:f.a.item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),a.a.createElement("div",{className:f.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:f.a.activeLink},"Users")),a.a.createElement("div",{className:f.a.item},a.a.createElement(d.b,{to:"/news",activeClassName:f.a.activeLink},"News")),a.a.createElement("div",{className:f.a.item},a.a.createElement(d.b,{to:"/music",activeClassName:f.a.activeLink},"Music")),a.a.createElement("div",{className:f.a.item},a.a.createElement(d.b,{to:"/settings",activeClassName:f.a.activeLink},"Settings")),a.a.createElement("div",{className:f.a.item},a.a.createElement(d.b,{to:"/friends",activeClassName:f.a.activeLink},"Friends")))},h=n(29),b=n(132),v=n.n(b),O=function(e){return a.a.createElement("div",{className:v.a.music},"Music")},E=n(133),w=n.n(E),y=function(e){return a.a.createElement("div",{className:w.a.news},"News")},P=n(134),j=n.n(P),_=function(e){return a.a.createElement("div",{className:j.a.settings},"Settings")},S=n(11),C=n(91),k=n.n(C),N=function(e){var t=e.friends.map(function(e){return a.a.createElement("div",{className:k.a.friend,key:e.id},a.a.createElement("img",{src:e.img,alt:""}),a.a.createElement("div",null,e.name))});return e.countFriends&&(t=t.slice(0,4)),a.a.createElement("div",{className:k.a.friends},t)},I=Object(S.b)(function(e){return{friends:e.sidebar.friends}},function(){return{}})(N),T=n(8),x=n.n(T),D=n(19),L=n(44),U=n(20),F=n(16);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var z=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach(function(t){Object(U.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach(function(t){Object(U.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},B=function(e){return{type:"FOLLOW",userId:e}},W=function(e){return{type:"UNFOLLOW",userId:e}},H=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},Y=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Q=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},V=function(){var e=Object(D.a)(x.a.mark(function e(t,n,r,a){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(Q(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return M({},e,{users:z(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return M({},e,{users:z(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return M({},e,{users:t.users});case"SET_CURRENT_PAGE":return M({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return M({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return M({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return M({},e,{followingInProgress:t.isFetching?[].concat(Object(L.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},X=n(53),Z=n(129),q=n(92),J=n.n(q),$=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,i=e.onPageChanged,s=e.portionSize,c=void 0===s?10:s,u=Math.ceil(t/n),l=[],p=1;p<=u;p++)l.push(p);var m=Math.ceil(u/c),f=Object(r.useState)(1),d=Object(Z.a)(f,2),g=d[0],h=d[1],b=(g-1)*c+1,v=g*c;return a.a.createElement("div",{className:J.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"Prev"),l.filter(function(e){return e>=b&&e<=v}).map(function(e){return a.a.createElement("span",{className:e===o&&J.a.selectedPage,onClick:function(t){i(e)}},e+" ")}),m>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"Next"))},ee=n(45),te=n.n(ee),ne=n(106),re=n.n(ne),ae=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",{className:te.a.users},a.a.createElement("div",{className:te.a.userFollow},a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:re.a,className:te.a.usersPhoto,alt:""}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("div",{className:te.a.userInfo},a.a.createElement("div",{className:te.a.name},t.name),a.a.createElement("div",null,t.status),a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city")))},oe=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,i=e.users,s=Object(X.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return a.a.createElement("div",null,a.a.createElement($,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:o,portionSize:"20"}),a.a.createElement("div",null,i.map(function(e){return a.a.createElement(ae,{user:e,key:e.id,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow})})))},ie=n(40),se=n(7),ce=function(e){return e.usersPage.users},ue=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},me=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},de=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props;(0,t.getUsers)(e,t.pageSize)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(ie.a,null):null,a.a.createElement(oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),ge=Object(se.d)(Object(S.b)(function(e){return{users:ce(e),pageSize:ue(e),totalUsersCount:le(e),currentPage:pe(e),isFetching:me(e),followingInProgress:fe(e)}},{follow:function(e){return function(){var t=Object(D.a)(x.a.mark(function t(n){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(n,e,F.c.follow.bind(F.c),B);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(D.a)(x.a.mark(function t(n){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(n,e,F.c.unfollow.bind(F.c),W);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:H,toggleFollowingProgress:Q,getUsers:function(e,t){return function(){var n=Object(D.a)(x.a.mark(function n(r){var a;return x.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Y(!0)),r(H(e)),n.next=4,F.c.getUsers(e,t);case 4:a=n.sent,r(Y(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(de),he=n(46),be=n.n(he),ve=function(e){return a.a.createElement("header",{className:be.a.header},a.a.createElement("div",{className:be.a.logo},a.a.createElement("img",{src:"https://www.freepnglogos.com/uploads/white-jack-daniels-holiday-whiskey-logo-png-2.png",alt:"\u0417\u0434\u0435\u0441\u044c \u043b\u043e\u0433\u043e\u0442\u0438\u043f"})),a.a.createElement("div",{className:be.a.welcomBar},a.a.createElement("div",{className:be.a.title},"Welcome to Jacky, buddy!"),a.a.createElement("div",{className:be.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login,a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(d.b,{to:"/login"},"Login"))))},Oe=n(47);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach(function(t){Object(U.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ye="social-network/auth/SET_USER_DATA",Pe={userId:null,email:null,login:null,isAuth:!1},je=function(e,t,n,r){return{type:ye,payload:{userId:e,login:n,email:t,isAuth:r}}},_e=function(){return function(){var e=Object(D.a)(x.a.mark(function e(t){var n,r,a,o,i;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,i=r.email,t(je(a,i,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return we({},e,{},t.payload);default:return e}},Ce=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(ve,this.props)}}]),t}(a.a.Component),ke=Object(S.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId}},{logout:function(){return function(){var e=Object(D.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.logout();case 2:0===e.sent.data.resultCode&&t(je(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Ce),Ne=n(128),Ie=n(32),Te=n(85),xe=n(54),De=n.n(xe),Le=Object(Ne.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(Ie.c)("Email","email",[Te.b],Ie.a),Object(Ie.c)("Password","password",[Te.b],Ie.a,{type:"password"}),Object(Ie.c)(null,"rememberMe",[],Ie.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:De.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")),a.a.createElement("div",null,a.a.createElement("strong",null,"For test you should use:")),a.a.createElement("div",null,a.a.createElement("strong",null,"Email:")," free@samuraijs.com"),a.a.createElement("div",null,a.a.createElement("strong",null,"Password:")," free"))}),Ue=Object(S.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(D.a)(x.a.mark(function r(a){var o,i;return x.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(_e()):(i=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(Oe.a)("login",{_error:i})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(h.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))});function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(n,!0).forEach(function(t){Object(U.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ze={initialized:!1},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCES":return Ae({},e,{initialized:!0});default:return e}},Me=n(95),Re=n(127),Be={friends:[{id:1,name:"Vasya",img:"https://picsum.photos/50"},{id:2,name:"Alisa",img:"https://picsum.photos/51"},{id:3,name:"Igor",img:"https://picsum.photos/52"},{id:4,name:"Petya",img:"https://picsum.photos/53"},{id:5,name:"Stepa",img:"https://picsum.photos/54"},{id:6,name:"Marat",img:"https://picsum.photos/55"},{id:7,name:"Denis",img:"https://picsum.photos/56"},{id:8,name:"Kuzya",img:"https://picsum.photos/57"},{id:9,name:"Svets",img:"https://picsum.photos/58"},{id:10,name:"Marina",img:"https://picsum.photos/59"},{id:11,name:"Kolya",img:"https://picsum.photos/60"},{id:12,name:"Dima",img:"https://picsum.photos/61"},{id:13,name:"Danila",img:"https://picsum.photos/62"}]},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;arguments.length>1&&arguments[1];return e},He=n(139),Ye=n(130),Qe=Object(se.c)({profilePage:Me.b,dialogsPage:Re.a,sidebar:We,usersPage:K,auth:Se,app:Ge,form:Ye.a}),Ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,Ke=Object(se.e)(Qe,Ve(Object(se.a)(He.a))),Xe=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(ie.a,null)},a.a.createElement(e,t))}},Ze=a.a.lazy(function(){return n.e(4).then(n.bind(null,301))}),qe=a.a.lazy(function(){return n.e(3).then(n.bind(null,300))}),Je=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(ke,null),a.a.createElement(g,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(h.b,{path:"/profile/:userId?",render:Xe(qe)}),a.a.createElement(h.b,{path:"/dialogs",render:Xe(Ze)}),a.a.createElement(h.b,{path:"/users",render:function(){return a.a.createElement(ge,null)}}),a.a.createElement(h.b,{path:"/news",render:function(){return a.a.createElement(y,null)}}),a.a.createElement(h.b,{path:"/music",render:function(){return a.a.createElement(O,null)}}),a.a.createElement(h.b,{path:"/settings",render:function(){return a.a.createElement(_,null)}}),a.a.createElement(h.b,{path:"/friends",render:function(){return a.a.createElement(I,null)}}),a.a.createElement(h.b,{path:"/login",render:function(){return a.a.createElement(Ue,null)}}))):a.a.createElement(ie.a,null)}}]),t}(r.Component),$e=Object(se.d)(h.f,Object(S.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(_e());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCES"})})}}}))(Je),et=function(e){return a.a.createElement(d.a,{basename:"/social-network"},a.a.createElement(S.a,{store:Ke},a.a.createElement($e,null)))};i.a.render(a.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return m});var r=n(53),a=n(0),o=n.n(a),i=n(54),s=n.n(i),c=n(88),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,i=n&&r;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,a),i&&o.a.createElement("span",null,r))},l=function(e){e.input,e.meta,e.child;var t=Object(r.a)(e,["input","meta","child"]);return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},e.input,t)))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,validate:n,name:t,component:r},a))," ",i)}},40:function(e,t,n){"use strict";var r=n(137),a=n.n(r),o=n(0),i=n.n(o);t.a=function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:a.a,alt:""}))}},45:function(e,t,n){e.exports={usersPhoto:"User_usersPhoto__2Ga0T",users:"User_users__3m9YK",userFollow:"User_userFollow__Qc6wC",userInfo:"User_userInfo__QnZNj",name:"User_name__1YGFw"}},46:function(e,t,n){e.exports={header:"Header_header__1gTcQ",logo:"Header_logo__gl7Ml",welcomBar:"Header_welcomBar__1v50V",title:"Header_title__1sycW",loginBlock:"Header_loginBlock__3xQqo"}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__ziyw_",error:"FormsControls_error__1X3xI",formSummaryError:"FormsControls_formSummaryError__2Txbs"}},85:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},91:function(e,t,n){e.exports={friends:"Friends_friends__2QFQ9",friend:"Friends_friend__1c_1w"}},92:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__oTde9"}},95:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return g}),n.d(t,"e",function(){return h});var r=n(8),a=n.n(r),o=n(19),i=n(44),s=n(20),c=n(16);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p={posts:[{id:1,message:"It's my life",likesCount:12,img:"https://picsum.photos/200"},{id:2,message:"It's now or never",likesCount:33,img:"https://picsum.photos/300"},{id:3,message:"This ain't a song for the broken-hearted\nNo silent prayer for the faith-departed\nI ain't gonna be just a face in the crowd\n, likesCount: 78",likesCount:2,img:"https://picsum.photos/150"},{id:4,message:"Suspendisse eget ullamcorper ante, ut euismod velit. Maecenas luctus dapibus risus, id porta quam sodales vitae. Proin eget imperdiet ante. Curabitur non lobortis mauris.",likesCount:2,img:"https://picsum.photos/350"}],profile:null,status:""},m=function(e){return{type:"ADD_POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:10,message:t.newPostText,likesCount:0,img:"https://picsum.photos/200"};return l({},e,{posts:[].concat(Object(i.a)(e.posts),[n])});case"SET_USER_PROFILE":return l({},e,{profile:t.profile});case"SET_STATUS":return l({},e,{status:t.status});case"DELETE_POST":return l({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.d8ef3330.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),u=n(31),o=n.n(u),i=(n(39),n(15)),s=n(3),l=n.n(s),p=n(8),m=n(9),h=n(10),f=n(12),g=n(11),d=n(14),b=n(1),v=n(32),E=n.n(v);a=window.location.origin;var O=E.a.create({withCredentials:!0,baseURL:a}),w={isLoggedIn:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/is-logged-in");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logIn:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},j=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",null)}}]),n}(r.Component);var y=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Not found"))},k=n(16),x=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleChange=function(t){return e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),w.signUp(e.state).then((function(t){e.props.setUser(Object(i.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h2",null,"SignUP"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),c.a.createElement("input",{type:"submit",value:"Sign Up"})))}}]),n}(r.Component),C=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleChange=function(t){return e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),w.logIn(e.state).then((function(t){e.props.setUser(Object(i.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h2",null,"LogIn"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),c.a.createElement("input",{type:"submit",value:"Log In"})))}}]),n}(r.Component),U=function(e){return e.user.email||e.history.push("/log-in"),c.a.createElement("div",null,"Profile Welcome ",e.user.email," !!!")},S=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.setUser=function(t){return e.setState(t)},e.logOut=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.logOut();case 2:t.sent,e.setUser({email:null,createdAt:null,updatedAt:null,_id:null});case 4:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.isLoggedIn();case 2:t=e.sent,this.setState(Object(i.a)({},t.data)),console.log("coolest ");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement(d.a,null,this.state.email,c.a.createElement("nav",null,c.a.createElement(d.b,{to:"/"},"Home |"),this.state.email?c.a.createElement(r.Fragment,null,c.a.createElement(d.b,{onClick:this.logOut,to:"/"},"Log Out |"),c.a.createElement(d.b,{to:"/profile"},"Profile|")):c.a.createElement(r.Fragment,null,c.a.createElement(d.b,{to:"/sign-up"},"Sign Up |"),c.a.createElement(d.b,{to:"/log-in"},"Log In |"))),c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(j,e)}}),c.a.createElement(b.a,{exact:!0,path:"/sign-up",render:function(t){return c.a.createElement(x,Object.assign({},t,{setUser:e.setUser}))}}),c.a.createElement(b.a,{exact:!0,path:"/log-in",render:function(t){return c.a.createElement(C,Object.assign({},t,{setUser:e.setUser}))}}),c.a.createElement(b.a,{exact:!0,path:"/profile",render:function(t){return c.a.createElement(U,Object.assign({},t,{user:e.state}))}}),c.a.createElement(b.a,{component:y})))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.78c80193.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=a(2),i=a(3),m=a(5),s=a(4),u=a(6),d=a(18),p=a(42),f=a(41),h=a(43),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"container"},n.createElement("div",{className:"nav flex-column nav-pills"},this.props.menu&&this.props.menu.map(function(e){return n.createElement("li",{key:e.id,className:"nav-item",activeClassName:"active"},n.createElement(h.a,{exact:e.exact,className:"nav-link",to:e.href},n.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),n.createElement("span",null,e.label)))})))}}]),t}(n.Component),b=(n.Component,a(9)),v=0,O="SHOW_ALL",w="SHOW_COMPLETED",N="SHOW_ACTIVE",g={increment:function(){return{type:"INCREMENT_COUNT"}},decrement:function(){return{type:"DECREMENT_COUNT"}}},j=function(e){var t=e.active,a=e.children,n=e.onClick;return r.a.createElement("button",{onClick:n,disabled:t,style:{marginLeft:"4px"}},a)},y=Object(b.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(j),C=function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Show: "),r.a.createElement(y,{filter:O},"All"),r.a.createElement(y,{filter:N},"Active"),r.a.createElement(y,{filter:w},"Completed"))},k=Object(b.b)()(function(e){var t,a=e.dispatch;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){var n;e.preventDefault(),t.value.trim()&&(a((n=t.value,{type:"ADD_TODO",id:v++,text:n})),t.value="")}},r.a.createElement("input",{ref:function(e){return t=e}}),r.a.createElement("button",{type:"submit"},"Add Todo")))}),x=function(e){var t=e.onClick,a=e.completed,n=e.text;return r.a.createElement("li",{onClick:t,style:{textDecoration:a?"line-through":"none"}},n)},T=function(e){var t=e.todos,a=e.toggleTodo;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(x,Object.assign({key:e.id},e,{onClick:function(){return a(e.id)}}))}))},D=Object(b.b)(function(e){return{todos:function(e,t){switch(t){case O:return e;case w:return e.filter(function(e){return e.completed});case N:return e.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+t)}}(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(T),S=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("h1",null,"Counter"),n.createElement("p",null,"This is a simple example of a React component."),n.createElement("p",null,"Current count: ",n.createElement("strong",null,this.props.count)),n.createElement("button",{onClick:function(){e.props.increment()}},"Increment"))}}]),t}(n.Component),A=Object(b.b)(function(e){return e.counter},g)(S),I={components:r.a.createElement(function(){return r.a.createElement("h3",null,"Requested Param: Components")},null),"props-v-state":r.a.createElement(function(){return r.a.createElement("h3",null,"Requested Param: Props v. State")},null),counter:r.a.createElement(A,null)},_=function(e){var t=e.match;return t&&t.params&&t.params.id?I[t.params.id]:r.a.createElement("h3",null,"Please select a topic.")},L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).menu=F.find(function(e){return e.href===a.props.match.path}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Topics"),this.menu&&this.menu.children&&r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-pills"},this.menu.children.map(function(t){return r.a.createElement("li",{key:t.id,className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"".concat(e.props.match.url+t.href)},t.label))})),r.a.createElement(f.a,{path:"".concat(this.props.match.path,"/:id?"),component:_})))}}]),t}(r.a.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark static-top"},r.a.createElement("a",{className:"navbar-brand mr-1",href:"index.html"},"Start Bootstrap"),r.a.createElement("button",{className:"btn btn-link btn-sm text-white order-1 order-sm-0",id:"sidebarToggle",href:"#"},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("form",{className:"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},r.a.createElement("i",{className:"fas fa-search"}))))),r.a.createElement("ul",{className:"navbar-nav ml-auto ml-md-0"},r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"alertsDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-bell fa-fw"}),r.a.createElement("span",{className:"badge badge-danger"},"9+")),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"alertsDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"messagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-envelope fa-fw"}),r.a.createElement("span",{className:"badge badge-danger"},"7")),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"messagesDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),r.a.createElement("li",{className:"nav-item dropdown no-arrow"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-user-circle fa-fw"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"userDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Settings"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Activity Log"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal"},"Logout")))))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"sidebar navbar-nav"},this.props.menu&&this.props.menu.map(function(e){return r.a.createElement("li",{key:e.id,className:"nav-item",activeClassName:"active"},r.a.createElement(h.a,{exact:e.exact,className:"nav-link",to:e.href},r.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),r.a.createElement("span",null,e.label)))}))}}]),t}(n.Component),P=(n.Component,a(36),function(){return r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"#"},"Dashboard")),r.a.createElement("li",{className:"breadcrumb-item active"},"Overview"))}),B=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("div",{id:"wrapper"},r.a.createElement(M,{menu:this.props.menu}),r.a.createElement("div",{id:"content-wrapper"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(P,null),this.props.children))))}}]),t}(n.Component),F=[{id:0,href:"/",label:"Home",exact:!0,component:function(){return r.a.createElement("h2",null,"Home")}},{id:1,href:"/about",label:"About",exact:!1,component:function(){return r.a.createElement("h2",null,"About")}},{id:2,href:"/topics",label:"Topics",exact:!1,component:L,children:[{id:0,href:"/components",label:"Components",exact:!0},{id:1,href:"/props-v-state",label:"Props v. State",exact:!0},{id:2,href:"/counter",label:"Counter",exact:!0}]},{id:3,href:"/todolist",label:"Todo List",exact:!1,component:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(D,null),r.a.createElement(C,null))}}],H=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).menu=F,e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(B,{menu:this.menu},this.menu&&this.menu.map(function(e){return r.a.createElement(f.a,{exact:e.exact,key:e.id,path:e.href,component:e.component})}))}}]),t}(r.a.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.AppContainer,null,r.a.createElement(p.a,{basename:"/"},r.a.createElement(H,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(11),G=a(23),V=a(22),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(V.a)(e).concat([{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(G.a)({},e,{completed:!e.completed}):e});default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},Y=function(e,t){switch(t.type){case"INCREMENT_COUNT":return{count:e.count+1};case"DECREMENT_COUNT":return{count:e.count-1}}return e||{count:0}},$=Object(W.b)({todos:q,visibilityFilter:J,counter:Y}),z=Object(W.c)($),K=(a(38),document.getElementById("root"));l.a.render(r.a.createElement(b.a,{store:z},r.a.createElement(U,null)),K),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.0c16d2f2.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(151);n(155);t.default=function(e){var t=e.pageContext.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"post"},r.a.createElement("h1",null,t.title),r.a.createElement("h2",null,t.text),r.a.createElement("img",{src:t.img,alt:""}))))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),u=n(33),s=n.n(u);n.d(t,"a",function(){return s.a});n(150);var l=r.a.createContext({}),o=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),c=n.n(i),u=n(149),s=(n(153),n(148)),l=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={active:!1,menu:!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.addEventListener("resize",function(){window.innerWidth<=600?e.setState(function(e){return{active:!0}}):e.setState(function(e){return{active:!1}})}),window.innerWidth<=600?this.setState(function(e){return{active:!0}}):this.setState(function(e){return{active:!1}})},n.render=function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"logo"},"All about Football ",c.a.createElement(s.c,null)),c.a.createElement("nav",{className:"menu "+(this.state.active&&this.state.menu?"show":null)},c.a.createElement(u.a,{className:"link",to:"/"},"Articles"),c.a.createElement(u.a,{className:"link",to:"/transfers"},"Transfers"),c.a.createElement(u.a,{className:"link",to:"/about"},"About me")),this.state.menu?c.a.createElement(s.f,{style:{display:this.state.active?"block":"none"},onClick:function(t){e.setState(function(e){return{menu:!e.menu}})}}):c.a.createElement(s.a,{style:{display:this.state.active?"block":"none"},onClick:function(t){e.setState(function(e){return{menu:!e.menu}})}}))},t}(c.a.Component);t.a=l},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),u=n(55),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-templates-post-template-js-d2d9df520eb05eed0a02.js.map
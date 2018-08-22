webpackJsonp([0x67ef26645b2a,60335399758886],{117:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Fitato | One Pass to Fitness"}}},layoutContext:{}}},216:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(1),o=a(l),s=n(221),u=a(s),c=n(117),r=a(c);t.default=function(e){return o.default.createElement(u.default,i({},e,r.default))},e.exports=t.default},219:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(1),l=a(i),o=new Date,s=function(){return l.default.createElement("div",{className:"footer-copyright"},l.default.createElement("div",{className:"container"},l.default.createElement("small",null,"© ",o.getFullYear()," Fitato Health Solutions Private Limited.")))};t.default=s,e.exports=t.default},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),u=a(s),c=n(24),r=a(c),d={display:"block"},f={display:"none"},m="undefined"==typeof window?800:window.innerWidth,g=function(e){function t(n){i(this,t);var a=l(this,e.call(this,n));return a.state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:m},a.handleMenuClick=a.handleMenuClick.bind(a),a.handleBgClick=a.handleBgClick.bind(a),a.updateWindowDimensions=a.updateWindowDimensions.bind(a),a}return o(t,e),t.prototype.handleMenuClick=function(){this.state.windowWidth>767?this.setState({toggleMenu:!0,toggleMenuBg:!1}):this.setState({toggleMenu:!this.state.toggleMenu,toggleMenuBg:!this.state.toggleMenuBg})},t.prototype.handleBgClick=function(){this.setState({toggleMenu:!1,toggleMenuBg:!1})},t.prototype.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},t.prototype.updateMenuToggle=function(){this.state.windowWidth>767?this.setState({toggleMenu:!0,toggleMenuBg:!1}):this.setState({toggleMenu:!1,toggleMenuBg:!1})},t.prototype.updateWindowDimensions=function(){this.setState({windowWidth:window.innerWidth}),this.updateMenuToggle()},t.prototype.render=function(){return u.default.createElement("div",{className:"main-header"},u.default.createElement("div",{className:"main-header-container"},u.default.createElement("img",{src:"static/icons/menu.svg",onClick:this.handleMenuClick,className:"main-header-menu-icon"}),u.default.createElement(r.default,{className:"menu-logo",to:"/"},u.default.createElement("img",{src:"static/fitato-logo.png",title:"Fitato",alt:"fitato"})),u.default.createElement("div",{className:"menu-links",style:this.state.toggleMenu?d:f},u.default.createElement(r.default,{to:"/partners",exact:!0,className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),u.default.createElement(r.default,{to:"/pricing",exact:!0,className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing"),u.default.createElement("a",{href:"http://blog.fitato.fit",target:"_blank",rel:"noopener",className:"menu-link-item"},"Blog"),u.default.createElement(r.default,{to:"/contact",exact:!0,className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact"),u.default.createElement(r.default,{to:"/faq",exact:!0,className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ"),u.default.createElement("a",{href:"https://fitato.app.link/6CvYxe0W9L",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now"))),u.default.createElement("div",{className:"mobile-menu-bg",style:this.state.toggleMenuBg?d:f,onClick:this.handleBgClick}))},t}(s.Component);t.default=g,e.exports=t.default},325:function(e,t){},221:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var i=n(1),l=a(i),o=n(5),s=a(o),u=n(16),c=a(u),r=n(220),d=a(r),f=n(219),m=a(f);n(325);var g=function(e){var t=e.children,n=e.data;return l.default.createElement("div",null,l.default.createElement(c.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Fitato is Your One Pass to 250+ Best Gyms & Fitness Studios in Pune. Access All Gyms, Dance, Yoga, Crossfit and Swimming Near You."}]},l.default.createElement("link",{rel:"icon",type:"image/png",href:"static/fitato-favicon.png"}),l.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,400i,600,600i",rel:"stylesheet"}),l.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"})),l.default.createElement(d.default,{siteTitle:n.site.siteMetadata.title}),l.default.createElement("div",{className:"main-header-placeholder"}),l.default.createElement("div",null,t()),l.default.createElement(m.default,null))};g.propTypes={children:s.default.func},t.default=g;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-d665759e3e2103f5cec4.js.map
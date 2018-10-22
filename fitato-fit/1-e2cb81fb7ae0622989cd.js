(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return g});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(160),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(36);n.d(t,"waitForRouteChange",function(){return c.c});var m=n(167),u=n.n(m);n.d(t,"PageRenderer",function(){return u.a});var d=n(47);n.d(t,"parsePath",function(){return d.a});var p=i.a.createContext({}),g=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},159:function(e,t,n){"use strict";var a=n(183),i=n(0),o=n.n(i),r=n(154),s=n.n(r),l=n(152),c=n(7),m=n.n(c),u={display:"block"},d={display:"none"},p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={showTopbar:!1},t.handleClose=function(){t.setState({showTopbar:!1}),"undefined"!=typeof sessionStorage&&(sessionStorage.setItem("topbarToggle",!1),document.querySelector(".main-header-placeholder").style.height="80px")},t}m()(t,e);var n=t.prototype;return n.topbarLocalStorageCheck=function(){if("undefined"!=typeof sessionStorage)return"false"!==sessionStorage.getItem("topbarToggle")&&!1!==sessionStorage.getItem("topbarToggle")},n.componentDidMount=function(){this.topbarLocalStorageCheck()?(this.setState({showTopbar:!0}),"undefined"!=typeof document&&(document.getElementsByClassName("main-header-placeholder")[0].style.height="150px")):(this.setState({showTopbar:!1}),"undefined"!=typeof document&&(document.getElementsByClassName("main-header-placeholder")[0].style.height="80px"))},n.render=function(){return o.a.createElement("div",{className:"partial-topbar",style:this.state.showTopbar?u:d},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"partial-topbar-close",onClick:this.handleClose},"X"),o.a.createElement("p",null,o.a.createElement("img",{src:Object(l.withPrefix)("/static/icons/confetti.svg"),alt:"fitato in hyderabad"}),o.a.createElement("a",{href:"https://hyderabad.fitato.fit/?utm_source=website&utm_medium=sticky-bar",target:"_blank",rel:"noreferrer noopener"},"We're now in Hyderabad. Get your first Fitato pass at discounted rates!"))))},t}(o.a.Component),g=(n(184),{display:"block"}),h={display:"none"},f="undefined"==typeof window?800:window.innerWidth,w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:f},t.handleMenuClick=function(){t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!t.state.toggleMenu,toggleMenuBg:!t.state.toggleMenuBg})},t.handleBgClick=function(){t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateMenuToggle=function(){t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateWindowDimensions=function(){t.setState({windowWidth:window.innerWidth}),t.updateMenuToggle()},t}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-header-placeholder"}),o.a.createElement("div",{className:"main-header"},o.a.createElement(p,null),o.a.createElement("div",{className:"main-header-container"},o.a.createElement("img",{src:Object(l.withPrefix)("/static/icons/menu.svg"),onClick:this.handleMenuClick,className:"main-header-menu-icon",alt:"menu"}),o.a.createElement(l.Link,{className:"menu-logo",to:"/"},o.a.createElement("img",{src:Object(l.withPrefix)("/static/fitato-logo-colored.svg"),title:"Fitato",alt:"fitato"})),o.a.createElement("div",{className:"menu-links",style:this.state.toggleMenu?g:h},o.a.createElement(l.Link,{to:"/partners/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),o.a.createElement(l.Link,{to:"/purchase-fitato/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing"),o.a.createElement("a",{href:"http://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer",className:"menu-link-item"},"Blog"),o.a.createElement(l.Link,{to:"/contact/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact Us"),o.a.createElement(l.Link,{to:"/faq/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ"),o.a.createElement(l.Link,{to:"/download/",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now")),o.a.createElement("div",{className:"menu-close-x",onClick:this.handleMenuClick,style:this.state.toggleMenuBg?g:h},"x")),o.a.createElement("div",{className:"mobile-menu-bg",style:this.state.toggleMenuBg?g:h,onClick:this.handleBgClick})))},t}(i.Component),y=(n(186),new Date),E=function(){return o.a.createElement("div",{className:"footer-copyright"},o.a.createElement("div",{className:"container"},o.a.createElement("small",null,"© ",y.getFullYear()," Fitato Health Solutions Private Limited.")))};n(188),t.a=function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"3470870683",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{defaultTitle:e.site.siteMetadata.title},o.a.createElement("meta",{charset:"utf-8"}),o.a.createElement("meta",{name:"description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{itemprop:"name",content:"Fitato®: Best Gyms in Pune | One Pass to Fitness"}),o.a.createElement("meta",{itemprop:"description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{itemprop:"image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"apple-itunes-app",content:"app-id=1300323768"}),o.a.createElement("meta",{name:"google-play-app",content:"app-id=fit.fitato.health"}),o.a.createElement("meta",{name:"twitter:card",content:"app"}),o.a.createElement("meta",{name:"twitter:title",content:"Fitato®: Best Gyms in Pune | One Pass to Fitness"}),o.a.createElement("meta",{name:"twitter:description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"twitter:site",content:"@FitatoFit"}),o.a.createElement("meta",{name:"twitter:creator",content:"@FitatoFit"}),o.a.createElement("meta",{name:"twitter:image:src",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"twitter:app:id:iphone",content:"1300323768"}),o.a.createElement("meta",{name:"twitter:app:name:iphone",content:"Fitato"}),o.a.createElement("meta",{name:"twitter:app:id:googleplay",content:"fit.fitato.health"}),o.a.createElement("meta",{name:"twitter:app:name:googleplay",content:"Fitato: One Pass to Fitness"}),o.a.createElement("meta",{name:"og:title",content:"Fitato®: Best Gyms in Pune | One Pass to Fitness"}),o.a.createElement("meta",{name:"og:description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"og:image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"og:url",content:"https://www.fitato.fit"}),o.a.createElement("meta",{name:"og:site_name",content:"Fitato"}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"al:ios:app_store_id",content:"1300323768"}),o.a.createElement("meta",{name:"al:ios:app_name",content:"Fitato"}),o.a.createElement("meta",{name:"al:android:package",content:"fit.fitato.health"}),o.a.createElement("meta",{name:"al:android:app_name",content:"Fitato: One Pass to Fitness"}),o.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:Object(l.withPrefix)("/static/fitato-icon-16.png")}),o.a.createElement("link",{rel:"apple-touch-icon",href:Object(l.withPrefix)("/static/fitato-icon-57.png")}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:Object(l.withPrefix)("/static/fitato-icon-72.png")}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:Object(l.withPrefix)("/static/fitato-icon-114.png")}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i,900,900i",rel:"stylesheet"})),o.a.createElement(w,null),o.a.createElement("div",null,t),o.a.createElement(E,null),o.a.createElement("script",{src:"https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14.0.0/dist/smooth-scroll.polyfills.min.js"}),o.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n            var scroll = new SmoothScroll('a[href*=\"#\"]', {\n              offset: 150,\n              easing: 'easeInOutCubic',\n            });\n            "}}))},data:a})}},167:function(e,t,n){var a;e.exports=(a=n(182))&&a.default||a},182:function(e,t,n){"use strict";n.r(t);n(37);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(71),l=n(1),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Fitato&reg;: Fitness for the Intelligent Indian"}}}}},184:function(e,t,n){},186:function(e,t,n){},188:function(e,t,n){}}]);
//# sourceMappingURL=1-e2cb81fb7ae0622989cd.js.map
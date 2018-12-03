(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(156),l=a.n(o),c=a(155),s=a(158);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"thank-you-page"},i.a.createElement(l.a,{title:"Thank You for Getting in Touch"},i.a.createElement("meta",{name:"description",content:"Thank you for contact us. We'll get back to you soon."}),i.a.createElement("meta",{name:"robots",content:"noindex"})),i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Thank You for Getting in Touch With Us!"),i.a.createElement("p",null,"We appreciate you contacting us. We will get in touch with you shortly."),i.a.createElement("p",null,"In the meantime, you can check out the following:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/faqs/"},"Frequently Asked Questions (FAQ)")),i.a.createElement("li",null,i.a.createElement("a",{href:"http://blog.fitato.fit"},"Our Blog")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/partners/"},"Locate a Fitato Partner Facility near you"))),i.a.createElement("p",null,"Have a great day!"))))}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Fitato&reg;: Fitness for the Intelligent Indian"}}}}},158:function(e,t,a){"use strict";var n=a(157),i=a(0),o=a.n(i),l=a(156),c=a.n(l),s=a(155),r=a(7),m=a.n(r),u={display:"block"},p={display:"none"},h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={showTopbar:!1},t.handleClose=function(){t.setState({showTopbar:!1}),"undefined"!=typeof sessionStorage&&(sessionStorage.setItem("topbarToggle",!1),document.querySelector(".main-header-placeholder").style.height="80px")},t}m()(t,e);var a=t.prototype;return a.topbarLocalStorageCheck=function(){if("undefined"!=typeof sessionStorage)return"false"!==sessionStorage.getItem("topbarToggle")&&!1!==sessionStorage.getItem("topbarToggle")},a.componentDidMount=function(){this.topbarLocalStorageCheck()?(this.setState({showTopbar:!0}),"undefined"!=typeof document&&(document.getElementsByClassName("main-header-placeholder")[0].style.height="150px")):(this.setState({showTopbar:!1}),"undefined"!=typeof document&&(document.getElementsByClassName("main-header-placeholder")[0].style.height="80px"))},a.render=function(){return o.a.createElement("div",{className:"partial-topbar",style:this.state.showTopbar?u:p},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"partial-topbar-close",onClick:this.handleClose},"X"),o.a.createElement("p",null,o.a.createElement("img",{src:Object(s.withPrefix)("/static/icons/confetti.svg"),alt:"fitato in hyderabad"}),o.a.createElement(s.Link,{to:"/partners/#hyderabad",onClick:this.handleClose},"We're now in Hyderabad. Check out our facility partners."))))},t}(o.a.Component),g=(a(161),{display:"block"}),d={display:"none"},f="undefined"==typeof window?800:window.innerWidth,E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:f},t.handleMenuClick=function(){t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!t.state.toggleMenu,toggleMenuBg:!t.state.toggleMenuBg})},t.handleBgClick=function(){t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateMenuToggle=function(){t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateWindowDimensions=function(){t.setState({windowWidth:window.innerWidth}),t.updateMenuToggle()},t}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-header-placeholder"}),o.a.createElement("div",{className:"main-header"},o.a.createElement(h,null),o.a.createElement("div",{className:"main-header-container"},o.a.createElement("img",{src:Object(s.withPrefix)("/static/icons/menu.svg"),onClick:this.handleMenuClick,className:"main-header-menu-icon",alt:"menu"}),o.a.createElement(s.Link,{className:"menu-logo",to:"/"},o.a.createElement("img",{src:Object(s.withPrefix)("/static/fitato-logo-colored.svg"),title:"Fitato",alt:"fitato"})),o.a.createElement("div",{className:"menu-links",style:this.state.toggleMenu?g:d},o.a.createElement(s.Link,{to:"/partners/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),o.a.createElement(s.Link,{to:"/purchase-fitato/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing"),o.a.createElement("a",{href:"http://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer",className:"menu-link-item"},"Blog"),o.a.createElement(s.Link,{to:"/contact-us/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact Us"),o.a.createElement(s.Link,{to:"/faqs/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ"),o.a.createElement(s.Link,{to:"/download/",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now")),o.a.createElement("div",{className:"menu-close-x",onClick:this.handleMenuClick,style:this.state.toggleMenuBg?g:d},"x")),o.a.createElement("div",{className:"mobile-menu-bg",style:this.state.toggleMenuBg?g:d,onClick:this.handleBgClick})))},t}(i.Component),w=a(162);a(163),t.a=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"3470870683",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{defaultTitle:e.site.siteMetadata.title},o.a.createElement("meta",{charset:"utf-8"}),o.a.createElement("meta",{name:"description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{itemprop:"name",content:"Fitato®: Fitness for the Intelligent Indian"}),o.a.createElement("meta",{itemprop:"description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{itemprop:"image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"apple-itunes-app",content:"app-id=1300323768"}),o.a.createElement("meta",{name:"google-play-app",content:"app-id=fit.fitato.health"}),o.a.createElement("meta",{name:"twitter:card",content:"app"}),o.a.createElement("meta",{name:"twitter:title",content:"Fitato®: Fitness for the Intelligent Indian"}),o.a.createElement("meta",{name:"twitter:description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"twitter:site",content:"@FitatoFit"}),o.a.createElement("meta",{name:"twitter:creator",content:"@FitatoFit"}),o.a.createElement("meta",{name:"twitter:image:src",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"twitter:app:id:iphone",content:"1300323768"}),o.a.createElement("meta",{name:"twitter:app:name:iphone",content:"Fitato"}),o.a.createElement("meta",{name:"twitter:app:id:googleplay",content:"fit.fitato.health"}),o.a.createElement("meta",{name:"twitter:app:name:googleplay",content:"Fitato: One Pass to Fitness"}),o.a.createElement("meta",{name:"og:title",content:"Fitato®: Fitness for the Intelligent Indian"}),o.a.createElement("meta",{name:"og:description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"og:image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"og:url",content:"https://www.fitato.fit"}),o.a.createElement("meta",{name:"og:site_name",content:"Fitato"}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"al:ios:app_store_id",content:"1300323768"}),o.a.createElement("meta",{name:"al:ios:app_name",content:"Fitato"}),o.a.createElement("meta",{name:"al:android:package",content:"fit.fitato.health"}),o.a.createElement("meta",{name:"al:android:app_name",content:"Fitato: One Pass to Fitness"}),o.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:Object(s.withPrefix)("/static/fitato-icon-16.png")}),o.a.createElement("link",{rel:"apple-touch-icon",href:Object(s.withPrefix)("/static/fitato-icon-57.png")}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:Object(s.withPrefix)("/static/fitato-icon-72.png")}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:Object(s.withPrefix)("/static/fitato-icon-114.png")}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i,900,900i",rel:"stylesheet"})),o.a.createElement(E,null),o.a.createElement("main",null,t),o.a.createElement(w.a,null),o.a.createElement("script",{src:"https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14.0.0/dist/smooth-scroll.polyfills.min.js"}),o.a.createElement("script",{dangerouslySetInnerHTML:{__html:"var scroll = new SmoothScroll('a[href*=\"#\"]', {offset: 150,easing: 'easeInOutCubic'});"}}),o.a.createElement("script",{dangerouslySetInnerHTML:{__html:'var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();'}}))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-thank-you-js-26ca52e6251f87cb3155.js.map
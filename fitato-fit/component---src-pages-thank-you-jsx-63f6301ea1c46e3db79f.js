(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{204:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(223),l=n(212),c=n(215);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(o.a,{title:"Thank You for Getting in Touch",description:"Thank you for contact us. We'll get back to you soon."}),i.a.createElement("div",{className:"thank-you-page"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Thank You for Getting in Touch With Us!"),i.a.createElement("p",null,"We appreciate you contacting us. We will get in touch with you shortly."),i.a.createElement("p",null,"In the meantime, you can check out the following:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/faqs/"},"Frequently Asked Questions (FAQ)")),i.a.createElement("li",null,i.a.createElement("a",{href:"http://blog.fitato.fit"},"Our Blog")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/partners/"},"Locate a Fitato Partner Facility near you"))),i.a.createElement("p",null,"Have a great day!"))))}},214:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(212),l=n(213),c=l.c.button.withConfig({displayName:"OfferPopupstyled__PopupOverlay",componentId:"nh4ddf-0"})(["position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,0.9);overflow:hidden;border:0;display:block;width:100%;height:100%;transition:",";"],function(e){return e.theme.transition}),r=l.c.div.withConfig({displayName:"OfferPopupstyled__PopupContainer",componentId:"nh4ddf-1"})(["text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding:15px;a{box-shadow:0px 6px 9px -5px rgba(2,2,2,0.3);border:0 !important;}img{margin:0;vertical-align:middle;max-width:920px;width:100%;}"]),s=l.c.button.withConfig({displayName:"OfferPopupstyled__PopupClose",componentId:"nh4ddf-2"})(["position:fixed;top:10px;right:10px;background:unset;background-color:#ffffff;border:0;cursor:pointer;line-height:1;img{margin:0;}"]);t.a=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];function l(){n(!t),"undefined"!=typeof sessionStorage&&sessionStorage.setItem("fitato_offer_img_popup","shown")}return Object(a.useEffect)(function(){"undefined"!=typeof sessionStorage&&n(!("shown"===sessionStorage.getItem("fitato_offer_img_popup")))},[]),Object(a.useEffect)(function(){"undefined"!=typeof document&&(document.querySelector("html").style.overflow=t?"hidden":"auto")},[t]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{onClick:l,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},i.a.createElement(r,null,i.a.createElement(o.a,{to:"/download/"},i.a.createElement("img",{src:Object(o.b)("/static/experience-fitness-freedom-offer.jpg"),alt:"fitato experience fitness freedom offer"})))),i.a.createElement(s,{onClick:l,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},i.a.createElement("img",{src:Object(o.b)("/static/icons/close-dark.svg"),alt:"close"})))}},215:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(213),l=n(218),c=n(219),r=n(220),s=n(214),m=n(212);n(224);var u={display:"block"},d={display:"none"},g="undefined"==typeof window?800:window.innerWidth,p=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:g},t.handleMenuClick=function(){var e=t.state,n=e.toggleMenu,a=e.toggleMenuBg;t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!n,toggleMenuBg:!a})},t.handleBgClick=function(){t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateMenuToggle=function(){t.state.windowWidth>791?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateWindowDimensions=function(){t.setState({windowWidth:window.innerWidth}),t.updateMenuToggle()},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},o.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},o.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-header-placeholder"}),i.a.createElement("nav",{className:"main-header"},i.a.createElement("div",{className:"main-header-container"},i.a.createElement("img",{src:Object(m.b)("/static/icons/menu.svg"),onClick:this.handleMenuClick,className:"main-header-menu-icon",alt:"menu"}),i.a.createElement(m.a,{className:"menu-logo",to:"/"},i.a.createElement("img",{src:Object(m.b)("/static/fitato-logo-colored.svg"),title:"Fitato",alt:"fitato"})),i.a.createElement("div",{className:"menu-links",style:this.state.toggleMenu?u:d},i.a.createElement(m.a,{to:"/how-it-works/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"How It Works"),i.a.createElement(m.a,{to:"/partners/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),i.a.createElement(m.a,{to:"/purchase-fitato/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing"),i.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer",className:"menu-link-item"},"Blog"),i.a.createElement(m.a,{to:"/contact-us/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact Us"),i.a.createElement(m.a,{to:"/faqs/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ"),i.a.createElement(m.a,{to:"/download/",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now")),i.a.createElement("div",{className:"menu-close-x",onClick:this.handleMenuClick,style:this.state.toggleMenuBg?u:d},"x")),i.a.createElement("div",{className:"mobile-menu-bg",style:this.state.toggleMenuBg?u:d,onClick:this.handleBgClick})))},a}(a.Component),f=n(221);t.a=function(e){var t=e.children;return i.a.createElement(o.a,{theme:l.a},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null),i.a.createElement(r.a,null),i.a.createElement(p,null),i.a.createElement("main",null,t),i.a.createElement(f.a,null),i.a.createElement(s.a,null),i.a.createElement("script",{src:"https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"}),i.a.createElement("script",{dangerouslySetInnerHTML:{__html:"new SmoothScroll('a[href*=\"#\"]', {offset: 80, easing: 'easeInOutCubic', updateURL: false, speedAsDuration: true});"}}),i.a.createElement("script",{dangerouslySetInnerHTML:{__html:'var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();'}})))}}}]);
//# sourceMappingURL=component---src-pages-thank-you-jsx-63f6301ea1c46e3db79f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(214),i=a(217),o=a(226),c=a(230),s=a(220),m=a(215),u=m.c.div.withConfig({displayName:"partnersstyled__PartnersStyled",componentId:"sc-3qqvbl-0"})(["padding:100px 0;text-align:center;border-top:1px solid #ffffff;h2{font-weight:normal;color:",";font-size:135%;}"],function(e){return e.theme.colors.red}),d=m.c.div.withConfig({displayName:"partnersstyled__Menu",componentId:"sc-3qqvbl-1"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:0 10%;margin-top:40px;.item{flex:1;padding:32px 30px;margin:10px 10px;background-color:#ffffff;border-radius:5px;box-shadow:0 3px 3px -2px rgba(0,0,0,0.2),0 3px 4px 0 rgba(0,0,0,0.14),0 1px 8px 0 rgba(0,0,0,0.12);text-align:left;min-width:310px;position:relative;overflow:hidden;transition:all 0.2s ease-in-out;&:hover{transform:translateY(-2px);box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 5px 8px 0 rgba(0,0,0,0.14),0 1px 14px 0 rgba(0,0,0,0.12);filter:invert(2%);border-bottom:none;}p{text-transform:uppercase;font-size:0.9em;margin:0;}h3{font-size:1.6em;margin-bottom:5px;color:",";}&--img{position:absolute;bottom:-45%;right:-30px;width:170px;filter:opacity(95%);}&--arrow{margin:0;padding:0;width:18px;vertical-align:middle;margin-bottom:3px;}a:hover{border-bottom:none !important;}}"],function(e){return e.theme.colors.darkGrey});t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Fitato Partners",description:"View the list of all the Fitness centers partnered with us. Everything Crossfit to MMA, Swmming to yoga, Boxing to Zumba and lot more."}),r.a.createElement(u,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Fitato Partner Network"),r.a.createElement("h2",null,"400+ Fitness Studios | 1000+ Activities | One Pass"),r.a.createElement(d,null,r.a.createElement(l.a,{to:"/pune/",className:"item"},r.a.createElement("h3",null,"Pune"),r.a.createElement("p",null,"See facilities ",r.a.createElement("img",{src:Object(l.b)("/static/icons/arrow-forward.svg"),alt:"arrow forward",className:"item--arrow"})),r.a.createElement("img",{src:Object(l.b)("/static/icons/pune.svg"),alt:"fitato facilities in Pune",className:"item--img"})),r.a.createElement(l.a,{to:"/hyderabad/",className:"item"},r.a.createElement("h3",null,"Hyderabad"),r.a.createElement("p",null,"See facilities ",r.a.createElement("img",{src:Object(l.b)("/static/icons/arrow-forward.svg"),alt:"arrow forward",className:"item--arrow"})),r.a.createElement("img",{src:Object(l.b)("/static/icons/hyderabad.svg"),alt:"fitato facilities in Hyderabad",className:"item--img"}))))),r.a.createElement(c.a,null),r.a.createElement(s.a,null))}},216:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(214),i=a(215),o=i.c.button.withConfig({displayName:"OfferPopupstyled__PopupOverlay",componentId:"nh4ddf-0"})(["position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,0.9);overflow:hidden;border:0;display:block;width:100%;height:100%;transition:",";"],function(e){return e.theme.transition}),c=i.c.div.withConfig({displayName:"OfferPopupstyled__PopupContainer",componentId:"nh4ddf-1"})(["text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding:15px;a{box-shadow:0px 6px 9px -5px rgba(2,2,2,0.3);border:0 !important;}img{margin:0;vertical-align:middle;max-width:920px;width:100%;}"]),s=i.c.button.withConfig({displayName:"OfferPopupstyled__PopupClose",componentId:"nh4ddf-2"})(["position:fixed;top:10px;right:10px;background:unset;background-color:#ffffff;border:0;cursor:pointer;line-height:1;img{margin:0;}"]);t.a=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];function i(){a(!t),"undefined"!=typeof sessionStorage&&sessionStorage.setItem("fitato_offer_img_popup","shown")}return Object(n.useEffect)(function(){setTimeout(function(){"undefined"!=typeof sessionStorage&&a(!("shown"===sessionStorage.getItem("fitato_offer_img_popup")))},15e3)},[]),Object(n.useEffect)(function(){"undefined"!=typeof document&&(document.querySelector("html").style.overflow=t?"hidden":"auto",window.onkeydown=function(e){!t||"Escape"!==e.key&&"Esc"!==e.key||i()})},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{onClick:i,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},r.a.createElement(c,null,r.a.createElement(l.a,{to:"/download/",className:"ga-click-offer-popup"},r.a.createElement("img",{src:Object(l.b)("/static/experience-fitness-freedom-offer.jpg"),alt:"fitato experience fitness freedom offer",className:"ga-click-offer-popup"})))),r.a.createElement(s,{onClick:i,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},r.a.createElement("img",{src:Object(l.b)("/static/icons/close-dark.svg"),alt:"close"})))}},217:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(215),i=a(221),o=a(222),c=a(223),s=a(216),m=a(214),u=a(224);var d="undefined"==typeof window?800:window.innerWidth,f=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:d,showPartnersMenu:!1},t.handleMenuClick=function(){var e=t.state,a=e.toggleMenu,n=e.toggleMenuBg;t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!a,toggleMenuBg:!n})},t.handleBgClick=function(){t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateMenuToggle=function(){t.state.windowWidth>791?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateWindowDimensions=function(){t.setState({windowWidth:window.innerWidth}),t.updateMenuToggle()},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},l.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},l.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-header-placeholder",style:{height:77,backgroundColor:"#ffffff"}}),r.a.createElement(u.a,null,r.a.createElement("div",{className:"main-header-container"},r.a.createElement("img",{src:Object(m.b)("/static/icons/menu.svg"),onClick:this.handleMenuClick,className:"main-header-menu-icon",alt:"menu"}),r.a.createElement(m.a,{className:"menu-logo",to:"/"},r.a.createElement("img",{src:Object(m.b)("/static/fitato-logo-colored.svg"),title:"Fitato",alt:"fitato"})),r.a.createElement("ul",{className:"menu-links"+(this.state.toggleMenu?" active":"")+"\n              "},r.a.createElement("li",null,r.a.createElement(m.a,{to:"/how-it-works/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"How It Works")),r.a.createElement("li",{className:"menu-links__partners"},r.a.createElement(m.a,{to:"/partners/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),r.a.createElement("button",{type:"button",className:"button-unstyled",style:this.state.showPartnersMenu?{transform:"rotate(180deg)"}:{},onClick:function(){return e.setState(function(e){return{showPartnersMenu:!e.showPartnersMenu}})}},r.a.createElement("img",{src:Object(m.b)("/static/icons/arrow-down.svg"),alt:"arrow down"})),r.a.createElement("ul",{className:"menu-links__partners-items"+(this.state.showPartnersMenu?" active":"")},r.a.createElement("li",null,r.a.createElement(m.a,{to:"/pune/"},"Pune")),r.a.createElement("li",null,r.a.createElement(m.a,{to:"/hyderabad/"},"Hyderabad")))),r.a.createElement("li",null,r.a.createElement(m.a,{to:"/purchase-fitato/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer",className:"menu-link-item"},"Blog")),r.a.createElement("li",null,r.a.createElement(m.a,{to:"/contact-us/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact Us")),r.a.createElement("li",null,r.a.createElement(m.a,{to:"/faqs/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ")),r.a.createElement("li",null,r.a.createElement(m.a,{to:"/download/",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now"))),r.a.createElement("div",{className:"menu-close-x"+(this.state.toggleMenuBg?" active":""),onClick:this.handleMenuClick},r.a.createElement("img",{src:Object(m.b)("/static/icons/close-dark.svg"),alt:"close icon"}))),r.a.createElement("div",{className:"mobile-menu-bg"+(this.state.toggleMenuBg?" active":""),onClick:this.handleBgClick})))},n}(n.Component),p=a(225);t.a=function(e){var t=e.children,a=e.style,n=e.hideOfferPopup;return r.a.createElement(l.a,{theme:i.a},r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(c.a,null),r.a.createElement(f,null),r.a.createElement("main",{style:a},t),r.a.createElement(p.a,null),!n&&r.a.createElement(s.a,null),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"}),r.a.createElement("script",{dangerouslySetInnerHTML:{__html:"new SmoothScroll('a[href*=\"#\"]', {offset: 80, easing: 'easeInOutCubic', updateURL: false, speedAsDuration: true});"}}),r.a.createElement("script",{dangerouslySetInnerHTML:{__html:'var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();'}})))}},218:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(214);t.a=function(e){var t=e.cname;return r.a.createElement("ul",{className:t},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/Fitato.fit/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:Object(l.b)("/static/icons/facebook-circle-black.svg"),alt:"facebook",className:"partial-social-links__icon"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/FitatoFit",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:Object(l.b)("/static/icons/twitter-circle-black.svg"),alt:"twitter",className:"partial-social-links__icon"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/channel/UCUAcO5m8nXxqXHs42kyfzmg?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:Object(l.b)("/static/icons/youtube-circle-black.svg"),alt:"youtube",className:"partial-social-links__icon"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/fitato_fit/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:Object(l.b)("/static/icons/instagram-circle-black.svg"),alt:"instagram",className:"partial-social-links__icon"}))))}},219:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.cname;return r.a.createElement("ul",{className:t},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:connect@fitato.fit"},"connect@fitato.fit")),r.a.createElement("li",null,r.a.createElement("a",{href:"tel:+918448448546"},"+91 8448448546")))}},220:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(214),i=a(218),o=a(219);t.a=function(){return r.a.createElement("footer",{className:"footer-info"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-info__col1"},r.a.createElement("h4",null,"Do You Own a Fitness Facility? Become a Partner"),r.a.createElement("p",null,"Own a gym? Or a Health and Fitness Studio? Partner up with us and watch as your business reaches unprecedented heights in revenue and brand visibility. Tap into our customer base and put your fitness studio on the map!"),r.a.createElement("a",{href:"https://partner.fitato.fit/",target:"_blank",rel:"noopener noreferrer"},"Become a Partner")),r.a.createElement("div",{className:"footer-info__col2"},r.a.createElement("h4",null,"Know More"),r.a.createElement("ul",{className:"footer-ul"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer"},"Blog")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/faqs/"},"FAQ")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/reviews/"},"Reviews")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/community/"},"Fitato Community")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/how-to-refer/"},"Refer Your Friends")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/corporate/"},"Fitato For The Workplace")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/privacy-policy/"},"Privacy Policy")))),r.a.createElement("div",{className:"footer-info__col3"},r.a.createElement("h4",null,"Join Us"),r.a.createElement(l.a,{to:"/careers/"},"Careers"),r.a.createElement("h4",{style:{marginTop:35}},"Contact Us"),r.a.createElement(o.a,{cname:"footer-ul"}),r.a.createElement(i.a,{cname:"footer-social"}))))}},230:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(214);t.a=function(){return r.a.createElement("div",{className:"partial-get-started"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"partial-get-started__text"},r.a.createElement("h2",{style:{marginBottom:"0"}},r.a.createElement("span",{className:"red"},"Ready to get started?"))),r.a.createElement("div",{className:"partial-get-started__cta"},r.a.createElement(l.a,{to:"/download/",className:"button"},"Download Fitato App"),r.a.createElement(l.a,{to:"/contact-us/",className:"button-inverted"},"Contact us"))))}}}]);
//# sourceMappingURL=component---src-pages-partners-jsx-1adffb248e4540d1483f.js.map
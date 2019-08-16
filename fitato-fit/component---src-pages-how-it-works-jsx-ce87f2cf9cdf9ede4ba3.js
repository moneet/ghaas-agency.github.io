(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(229),i=a.n(o),l=a(223),r=a(212),c=a(222),m=a(230),p=a(215);a(296);var u={display:"flex"},d={display:"none"},h={backgroundColor:"#aaaaaa",borderColor:"#aaaaaa"},w={backgroundColor:"#EB1F2E",borderColor:"#EB1F2E"},g=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={howToPosition:1},t.handleStepClick=function(e){"step-1"===e.target.id?t.setState({howToPosition:1}):"step-2"===e.target.id?t.setState({howToPosition:2}):"step-3"===e.target.id?t.setState({howToPosition:3}):"step-4"===e.target.id&&t.setState({howToPosition:4})},t.handleNavClick=function(e){var a=t.state.howToPosition;"work-steps--nav-left"===e.target.className||"work-steps--nav-left"===e.target.parentElement.className?a>1&&t.setState({howToPosition:a-1}):"work-steps--nav-right"!==e.target.className&&"work-steps--nav-right"!==e.target.parentElement.className||a<4&&t.setState({howToPosition:a+1})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return s.a.createElement(p.a,null,s.a.createElement(l.a,{title:"How Fitato Works | Flexibility At Your Fingertips",description:"Fitato is your single membership to access the best gyms and fitness studios in your city. Learn how it works."}),s.a.createElement(i.a,{style:[{cssText:".works-hero {background-image: url('"+Object(r.b)("/static/how-it-works/fitato-how-it-works-hero-bg.jpg")+"')}@media (max-width: 480px) {.works-hero {background-image: url('"+Object(r.b)("/static/how-it-works/fitato-how-it-works-hero-bg-mobile.jpg")+"')}}"}]}),s.a.createElement("div",{className:"works-page"},s.a.createElement("section",{className:"works-hero"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Flexibility At Your Fingertips"),s.a.createElement("p",null,"Fitato is your single membership to access the best gyms and fitness studios in your city. Welcome to your Fitness Freedom."))),s.a.createElement("section",{className:"works-steps"},s.a.createElement("div",{className:"container work-steps-container"},s.a.createElement("div",{className:"work-steps--nav-left",onClick:this.handleNavClick,style:this.state.howToPosition<2?h:w},s.a.createElement("img",{src:Object(r.b)("/static/icons/arrow-back-white.svg"),alt:"arrow back"})),s.a.createElement("div",{className:"work-steps--nav-right",onClick:this.handleNavClick,style:this.state.howToPosition>3?h:w},s.a.createElement("img",{src:Object(r.b)("/static/icons/arrow-forward-white.svg"),alt:"arrow forward"})),s.a.createElement("div",{className:"works-steps__items",style:1===this.state.howToPosition?u:d},s.a.createElement("div",{className:"works-steps__item--left"},s.a.createElement("p",{className:"works-steps--step works-steps--step-active",id:"step-1",onClick:this.handleStepClick},"Step 1"),s.a.createElement("p",{className:"works-steps--step",id:"step-2",onClick:this.handleStepClick},"Step 2"),s.a.createElement("p",{className:"works-steps--step",id:"step-3",onClick:this.handleStepClick},"Step 3"),s.a.createElement("p",{className:"works-steps--step",id:"step-4",onClick:this.handleStepClick},"Step 4"),s.a.createElement("h2",null,"Get The Fitato App"),s.a.createElement("p",null,"Fitato membership is only accessible with the Fitato app. The apps are available on both Android and iOS."),s.a.createElement("p",null,"Don’t have the app yet? ",s.a.createElement("a",{href:"#downloadnow"},"Download now."))),s.a.createElement("div",{className:"works-steps__item--right"},s.a.createElement("img",{src:Object(r.b)("/static/how-it-works/fitato-how-it-works-step-1.jpg"),alt:"how fitato app works download the app"}))),s.a.createElement("div",{className:"works-steps__items",style:2===this.state.howToPosition?u:d},s.a.createElement("div",{className:"works-steps__item--left"},s.a.createElement("p",{className:"works-steps--step",id:"step-1",onClick:this.handleStepClick},"Step 1"),s.a.createElement("p",{className:"works-steps--step works-steps--step-active",id:"step-2",onClick:this.handleStepClick},"Step 2"),s.a.createElement("p",{className:"works-steps--step",id:"step-3",onClick:this.handleStepClick},"Step 3"),s.a.createElement("p",{className:"works-steps--step",id:"step-4",onClick:this.handleStepClick},"Step 4"),s.a.createElement("h2",null,"Signup"),s.a.createElement("p",null,"Once you have the app on your phone, we need to get to know each other a little. Signup for an account using your Email or Facebook account.")),s.a.createElement("div",{className:"works-steps__item--right"},s.a.createElement("img",{src:Object(r.b)("/static/how-it-works/fitato-how-it-works-step-2.jpg"),alt:"how fitato app works signup"}))),s.a.createElement("div",{className:"works-steps__items",style:3===this.state.howToPosition?u:d},s.a.createElement("div",{className:"works-steps__item--left"},s.a.createElement("p",{className:"works-steps--step",id:"step-1",onClick:this.handleStepClick},"Step 1"),s.a.createElement("p",{className:"works-steps--step",id:"step-2",onClick:this.handleStepClick},"Step 2"),s.a.createElement("p",{className:"works-steps--step works-steps--step-active",id:"step-3",onClick:this.handleStepClick},"Step 3"),s.a.createElement("p",{className:"works-steps--step",id:"step-4",onClick:this.handleStepClick},"Step 4"),s.a.createElement("h2",null,"Choose Your Preferred Membership"),s.a.createElement("p",null,"Monthy, Bi-monthly or Quarterly, choose the membership duration that suits you the best. Tap on the Buy Pass button and select your preferred membership style.")),s.a.createElement("div",{className:"works-steps__item--right"},s.a.createElement("img",{src:Object(r.b)("/static/how-it-works/fitato-how-it-works-step-3.jpg"),alt:"how fitato app works choose membership"}))),s.a.createElement("div",{className:"works-steps__items",style:4===this.state.howToPosition?u:d},s.a.createElement("div",{className:"works-steps__item--left"},s.a.createElement("p",{className:"works-steps--step",id:"step-1",onClick:this.handleStepClick},"Step 1"),s.a.createElement("p",{className:"works-steps--step",id:"step-2",onClick:this.handleStepClick},"Step 2"),s.a.createElement("p",{className:"works-steps--step",id:"step-3",onClick:this.handleStepClick},"Step 3"),s.a.createElement("p",{className:"works-steps--step works-steps--step-active",id:"step-4",onClick:this.handleStepClick},"Step 4"),s.a.createElement("h2",null,"Get Ready to Sweat"),s.a.createElement("p",null,"As soon as you purchase your membership, you’d be able to choose and reserve your favourite activity from the list. Gym, Zumba, Yoga, Crossfit, Swimming and a host of options to choose from.")),s.a.createElement("div",{className:"works-steps__item--right"},s.a.createElement("img",{src:Object(r.b)("/static/how-it-works/fitato-how-it-works-step-4.jpg"),alt:"how fitato app works workout"}))))),s.a.createElement("section",{id:"downloadnow"},s.a.createElement(m.a,{btnClass:"f-ai-index-download"})),s.a.createElement(c.a,null)))},n}(s.a.Component);t.default=g},214:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(212),i=a(213),l=i.c.button.withConfig({displayName:"OfferPopupstyled__PopupOverlay",componentId:"nh4ddf-0"})(["position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,0.9);overflow:hidden;border:0;display:block;width:100%;height:100%;transition:",";"],function(e){return e.theme.transition}),r=i.c.div.withConfig({displayName:"OfferPopupstyled__PopupContainer",componentId:"nh4ddf-1"})(["text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding:15px;a{box-shadow:0px 6px 9px -5px rgba(2,2,2,0.3);border:0 !important;}img{margin:0;vertical-align:middle;max-width:920px;width:100%;}"]),c=i.c.button.withConfig({displayName:"OfferPopupstyled__PopupClose",componentId:"nh4ddf-2"})(["position:fixed;top:10px;right:10px;background:unset;background-color:#ffffff;border:0;cursor:pointer;line-height:1;img{margin:0;}"]);t.a=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];function i(){a(!t),"undefined"!=typeof sessionStorage&&sessionStorage.setItem("fitato_offer_img_popup","shown")}return Object(n.useEffect)(function(){"undefined"!=typeof sessionStorage&&a(!("shown"===sessionStorage.getItem("fitato_offer_img_popup")))},[]),Object(n.useEffect)(function(){"undefined"!=typeof document&&(document.querySelector("html").style.overflow=t?"hidden":"auto")},[t]),s.a.createElement(s.a.Fragment,null,s.a.createElement(l,{onClick:i,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},s.a.createElement(r,null,s.a.createElement(o.a,{to:"/download/"},s.a.createElement("img",{src:Object(o.b)("/static/experience-fitness-freedom-offer.jpg"),alt:"fitato experience fitness freedom offer"})))),s.a.createElement(c,{onClick:i,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},s.a.createElement("img",{src:Object(o.b)("/static/icons/close-dark.svg"),alt:"close"})))}},215:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(213),i=a(218),l=a(219),r=a(220),c=a(214),m=a(212);a(224);var p={display:"block"},u={display:"none"},d="undefined"==typeof window?800:window.innerWidth,h=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:d},t.handleMenuClick=function(){var e=t.state,a=e.toggleMenu,n=e.toggleMenuBg;t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!a,toggleMenuBg:!n})},t.handleBgClick=function(){t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateMenuToggle=function(){t.state.windowWidth>791?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateWindowDimensions=function(){t.setState({windowWidth:window.innerWidth}),t.updateMenuToggle()},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},o.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},o.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"main-header-placeholder"}),s.a.createElement("nav",{className:"main-header"},s.a.createElement("div",{className:"main-header-container"},s.a.createElement("img",{src:Object(m.b)("/static/icons/menu.svg"),onClick:this.handleMenuClick,className:"main-header-menu-icon",alt:"menu"}),s.a.createElement(m.a,{className:"menu-logo",to:"/"},s.a.createElement("img",{src:Object(m.b)("/static/fitato-logo-colored.svg"),title:"Fitato",alt:"fitato"})),s.a.createElement("div",{className:"menu-links",style:this.state.toggleMenu?p:u},s.a.createElement(m.a,{to:"/how-it-works/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"How It Works"),s.a.createElement(m.a,{to:"/partners/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),s.a.createElement(m.a,{to:"/purchase-fitato/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing"),s.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer",className:"menu-link-item"},"Blog"),s.a.createElement(m.a,{to:"/contact-us/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact Us"),s.a.createElement(m.a,{to:"/faqs/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ"),s.a.createElement(m.a,{to:"/download/",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now")),s.a.createElement("div",{className:"menu-close-x",onClick:this.handleMenuClick,style:this.state.toggleMenuBg?p:u},"x")),s.a.createElement("div",{className:"mobile-menu-bg",style:this.state.toggleMenuBg?p:u,onClick:this.handleBgClick})))},n}(n.Component),w=a(221);t.a=function(e){var t=e.children;return s.a.createElement(o.a,{theme:i.a},s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,null),s.a.createElement(r.a,null),s.a.createElement(h,null),s.a.createElement("main",null,t),s.a.createElement(w.a,null),s.a.createElement(c.a,null),s.a.createElement("script",{src:"https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"}),s.a.createElement("script",{dangerouslySetInnerHTML:{__html:"new SmoothScroll('a[href*=\"#\"]', {offset: 80, easing: 'easeInOutCubic', updateURL: false, speedAsDuration: true});"}}),s.a.createElement("script",{dangerouslySetInnerHTML:{__html:'var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();'}})))}},216:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(212);t.a=function(e){var t=e.cname;return s.a.createElement("ul",{className:t},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.facebook.com/Fitato.fit/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:Object(o.b)("/static/icons/facebook-circle-black.svg"),alt:"facebook",className:"partial-social-links__icon"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://twitter.com/FitatoFit",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:Object(o.b)("/static/icons/twitter-circle-black.svg"),alt:"twitter",className:"partial-social-links__icon"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.youtube.com/channel/UCUAcO5m8nXxqXHs42kyfzmg?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:Object(o.b)("/static/icons/youtube-circle-black.svg"),alt:"youtube",className:"partial-social-links__icon"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.instagram.com/fitato_fit/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:Object(o.b)("/static/icons/instagram-circle-black.svg"),alt:"instagram",className:"partial-social-links__icon"}))))}},217:function(e,t,a){"use strict";var n=a(0),s=a.n(n);t.a=function(e){var t=e.cname;return s.a.createElement("ul",{className:t},s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:connect@fitato.fit"},"connect@fitato.fit")),s.a.createElement("li",null,s.a.createElement("a",{href:"tel:+918448448546"},"+91 8448448546")))}},222:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(212),i=a(216),l=a(217);t.a=function(){return s.a.createElement("footer",{className:"footer-info"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"footer-info__col1"},s.a.createElement("h4",null,"Do You Own a Fitness Facility? Become a Partner"),s.a.createElement("p",null,"Own a gym? Or a Health and Fitness Studio? Partner up with us and watch as your business reaches unprecedented heights in revenue and brand visibility. Tap into our customer base and put your fitness studio on the map!"),s.a.createElement("a",{href:"https://partner.fitato.fit/",target:"_blank",rel:"noopener noreferrer"},"Become a Partner")),s.a.createElement("div",{className:"footer-info__col2"},s.a.createElement("h4",null,"Know More"),s.a.createElement("ul",{className:"footer-ul"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer"},"Blog")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/faqs/"},"FAQ")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/reviews/"},"Reviews")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/community/"},"Fitato Community")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/how-to-refer/"},"Refer Your Friends")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/corporate/"},"Fitato For The Workplace")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/privacy-policy/"},"Privacy Policy")))),s.a.createElement("div",{className:"footer-info__col3"},s.a.createElement("h4",null,"Contact Us"),s.a.createElement(l.a,{cname:"footer-ul"}),s.a.createElement(i.a,{cname:"footer-social"}))))}},225:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(212);t.a=function(e){var t=e.btnClass;return s.a.createElement("div",{className:"partial-app-icons"},s.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=fit.fitato.health&hl=en",target:"_blank",rel:"noopener noreferrer",className:t?t+"-android":""},s.a.createElement("img",{src:Object(o.b)("/static/icons/google-play-store.svg"),className:"partial-app-icon",alt:"fitato on google play store"})),s.a.createElement("a",{href:"https://itunes.apple.com/in/app/fitato/id1300323768",target:"_blank",rel:"noopener noreferrer",className:t?t+"-ios":""},s.a.createElement("img",{src:Object(o.b)("/static/icons/apple-app-store.svg"),className:"partial-app-icon",alt:"fitato on app store"})))}},230:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(212),i=a(225);t.a=function(e){var t=e.btnClass;return s.a.createElement("div",{className:"partial-download-swipe"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"partial-download-swipe__left"},s.a.createElement("h2",null,"Download the Fitato App"),s.a.createElement("p",null,"Swim your way to Zumba via MMA and Yoga! Experiment each day with a new adventure and push your body to the limits with your Fitato Pass."),t?s.a.createElement(i.a,{btnClass:t}):s.a.createElement(i.a,null)),s.a.createElement("div",{className:"partial-download-swipe__right"},s.a.createElement("img",{src:Object(o.b)("/static/fitato-app.png"),alt:"download fitato smartphone app"}))))}}}]);
//# sourceMappingURL=component---src-pages-how-it-works-jsx-ce87f2cf9cdf9ede4ba3.js.map
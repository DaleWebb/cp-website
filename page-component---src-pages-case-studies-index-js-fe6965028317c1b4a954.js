webpackJsonp([2],{"./src/components/footer/footer.scss":function(e,t){},"./src/components/footer/index.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/react/react.js"),l=n(s),o=a("./node_modules/gatsby-link/index.js");n(o);a("./src/components/footer/footer.scss"),t.default=function(){return l.default.createElement("div",{className:"cp-footer"},l.default.createElement("div",{className:"cp-container"},l.default.createElement("div",{className:"cp-footer__links"},l.default.createElement("div",{className:"cp-footer__links__col"},l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("h5",null,"Feature Highlights")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Drag and Drop Rostering")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Infinite Customisation")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Invoicing and Payments")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Call Monitoring")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Mobile App"))),l.default.createElement("div",{className:"cp-footer__links__col"},l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("h5",null,"Case Studies")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"SOS Homecare")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"County Care")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Proud To Care")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Charlesworth Community Care")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Woodfield24"))),l.default.createElement("div",{className:"cp-footer__links__col"},l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("h5",null,"Company")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Terms")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Privacy Policy")),l.default.createElement("div",{className:"cp-footer__links__col__item"},l.default.createElement("a",null,"Contact Us"))))),l.default.createElement("div",{className:"cp-footer__copyright"},"© 2017 CarePlanner, All Rights Reserved"))},e.exports=t.default},"./src/components/navbar/index.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a("./node_modules/react/react.js"),u=n(i),d=a("./node_modules/gatsby-link/index.js"),f=n(d);a("./src/components/navbar/navbar.scss");var m=a("./src/components/navbar/logo.png"),p=n(m),h=function(e){function t(){s(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={collapsed:!0},e}return o(t,e),r(t,[{key:"toggleMenu",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return u.default.createElement("nav",{className:"cp-navbar"},u.default.createElement("div",{className:"cp-navbar__inner"},u.default.createElement("div",{className:"cp-container"},u.default.createElement("a",{className:"cp-navbar__hamburger",onClick:this.toggleMenu.bind(this)},u.default.createElement("span",{className:"cp-navbar__hamburger__icon"})),u.default.createElement(f.default,{to:"/"},u.default.createElement("img",{className:"cp-logo",src:p.default})),u.default.createElement("div",c({className:"cp-navbar__actions"},{"data-navbar-open":!this.state.collapsed}),u.default.createElement("ul",{className:"cp-navbar__links"},u.default.createElement("li",null,u.default.createElement(f.default,{className:"cp-navbar__link",to:"/features"},"Features")),u.default.createElement("li",null,u.default.createElement(f.default,{className:"cp-navbar__link",to:"/case-studies"},"Case Studies")),u.default.createElement("li",null,u.default.createElement(f.default,{className:"cp-navbar__link",to:"/contact-us"},"Contact Us"))),u.default.createElement("ul",{className:"cp-navbar__buttons"},u.default.createElement("li",null,u.default.createElement(f.default,{className:"cp-button cp-button--outline"},"Watch the video")),u.default.createElement("li",null,u.default.createElement(f.default,{className:"cp-button cp-button--filled"},"Book a demo")))))))}}]),t}(u.default.Component);t.default=h,e.exports=t.default},"./src/components/navbar/logo.png":function(e,t){e.exports="data:image/png;base64,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"},"./src/components/navbar/navbar.scss":function(e,t){},"./src/fonts/fonts.scss":function(e,t){},"./src/pages/case-studies/CaseStudies.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dale/Documents/cp-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/dale/Documents/cp-website/node_modules/babel-preset-env/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/case-studies/index.js':function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a("./node_modules/react/react.js"),i=n(r),u=a("./node_modules/gatsby-link/index.js"),d=a("./src/templates/DefaultLayout/index.js"),f=n(d);a("./src/pages/case-studies/CaseStudies.scss");var m=a("./src/pages/home/screens.png"),p=n(m),h=function(e){function t(){s(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={caseStudies:[{name:"SOS Homecare",path:"/case-studies/sdfsdf",description:"Read how SOS Homecare saved 11 days a month on finance duties.",stat:"11 days",statDescription:"a month saved on finance duties"},{name:"County Care",path:"/case-studies/sdfsdf",description:"Read how County Care saved 35 hours a week on roster generation.",stat:"35 hours",statDescription:"a week saved on roster generation"},{name:"Proud To Care",path:"/case-studies/sdfsdf",description:"",stat:"75%",statDescription:"reduction in time to produce weekly rotas"},{name:"Charlesworth Community Care",path:"/case-studies/sdfsdf",description:"Read how CarePlanner helped Charlesworth to grow it's company to deliver They now have 60 clients based in Nottinghamshire, with 30 staff members providing 700 hours of care each week.",stat:"70%",statDescription:"reduction in time producing invoices and timesheets"},{name:"Woodfield24",path:"/case-studies/sdfsdf",description:"Read how Woodfield24 achieved a 95% increase in meeting KPIs.",stat:"95%",statDescription:"increase in KPIs met"}]},e}return o(t,e),c(t,[{key:"caseStudies",value:function e(){var e=[];return this.state.caseStudies.forEach(function(t){e.push(i.default.createElement("div",{className:"cp-case-study",onClick:function(){return(0,u.navigateTo)(t.path)}},i.default.createElement("div",{className:"cp-case-study__inner"},i.default.createElement("img",{className:"cp-case-study__inner__img",src:p.default}),i.default.createElement("h3",null,t.name),i.default.createElement("div",{className:"cp-case-study__inner__description"},i.default.createElement("p",null,t.description)),i.default.createElement("a",null,"Read Case Study...")),i.default.createElement("div",{className:"cp-case-study__stat"},i.default.createElement("div",{className:"cp-case-study__stat__figure"},t.stat),i.default.createElement("div",{className:"cp-case-study__stat__description"},t.statDescription))))}),e}},{key:"render",value:function(){return i.default.createElement(f.default,{id:"case-studies"},i.default.createElement("div",{className:"cp-section-1"},i.default.createElement("h1",null,"Case Studies"),i.default.createElement("p",{className:"cp-section__description--top"},"Read why more companies are switching to CarePlanner.")),i.default.createElement("div",{className:"cp-section-2"},i.default.createElement("div",{className:"cp-container"},this.caseStudies())))}}]),t}(i.default.Component);t.default=h,e.exports=t.default},"./src/pages/home/screens.png":function(e,t){e.exports="data:image/png;base64,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"},"./src/templates/DefaultLayout/DefaultLayout.scss":function(e,t){},"./src/templates/DefaultLayout/index.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a("./node_modules/react/react.js"),i=n(r),u=a("./src/components/navbar/index.js"),d=n(u),f=a("./src/components/footer/index.js"),m=n(f);a("./src/templates/DefaultLayout/DefaultLayout.scss"),a("./src/fonts/fonts.scss");var p=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"render",value:function(){return i.default.createElement("div",{id:this.props.id},i.default.createElement(d.default,null),this.props.children,i.default.createElement(m.default,null))}}]),t}(i.default.Component);t.default=p,e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-case-studies-index-js-fe6965028317c1b4a954.js.map
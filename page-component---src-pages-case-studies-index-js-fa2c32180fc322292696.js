webpackJsonp([2],{"./src/pages/case-studies/CaseStudies.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dale/Documents/cp-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/dale/Documents/cp-website/node_modules/babel-preset-env/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/case-studies/index.js':function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var o=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),l=s("./node_modules/react/react.js"),u=n(l),i=s("./node_modules/gatsby-link/index.js"),d=s("./src/templates/DefaultLayout/index.js"),p=n(d);s("./src/pages/case-studies/CaseStudies.scss");var m=s("./src/pages/home/screens.png"),f=n(m),b=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),o(t,[{key:"render",value:function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement(p.default,{id:"case-studies"},u.default.createElement("div",{className:"cp-section-1"},u.default.createElement("h1",null,"Case Studies"),u.default.createElement("p",{className:"cp-section__description--top"},"Read why more companies are switching to CarePlanner.")),u.default.createElement("div",{className:"cp-section-2"},u.default.createElement("div",{className:"cp-container"},e.map(function(e){return u.default.createElement("div",{className:"cp-case-study",onClick:function(){return(0,i.navigateTo)(e.node.frontmatter.path)}},u.default.createElement("div",{className:"cp-case-study__inner"},u.default.createElement("img",{className:"cp-case-study__inner__img",src:f.default}),u.default.createElement("h3",null,e.node.frontmatter.name),u.default.createElement("div",{className:"cp-case-study__inner__description"},u.default.createElement("p",null,e.node.frontmatter.description)),u.default.createElement("a",null,"Read Case Study...")),u.default.createElement("div",{className:"cp-case-study__stat"},u.default.createElement("div",{className:"cp-case-study__stat__figure"},e.node.frontmatter.stat),u.default.createElement("div",{className:"cp-case-study__stat__description"},e.node.frontmatter.statDescription)))}))))}}]),t}(u.default.Component);t.default=b;t.pageQuery="** extracted graphql fragment **"},"./src/pages/home/screens.png":function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=page-component---src-pages-case-studies-index-js-fa2c32180fc322292696.js.map
webpackJsonp([53125558880568],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dale/Documents/cp-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-transform-object-assign/lib/index.js",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"glamor/babel-hoist"],"presets":[["/Users/dale/Documents/cp-website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dale/Documents/cp-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/case-studies/index.js':function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var o,l,c,d,p,m,u=a("./node_modules/react/react.js"),g=n(u),f=a("./node_modules/gatsby-link/index.js"),h=n(f),b=a("./node_modules/react-helmet/lib/Helmet.js"),x=a("./node_modules/prismic-dom/dist/prismic-dom.min.js"),y=n(x),w=a("./src/utils/presets.js"),S=n(w),E=a("./src/utils/global-styles.js"),_=n(E),v=function(t){function a(){return i(this,a),s(this,t.apply(this,arguments))}return r(a,t),a.prototype.render=function(){var t=this.props.data.allPrismicDocument.edges;return e.createElement("div",null,e.createElement(b.Helmet,{title:"Case Studies"},e.createElement("meta",{name:"description",content:"Read why more companies are switching to CarePlanner."}),e.createElement("meta",{property:"og:type",content:"website"}),e.createElement("meta",{property:"og:title",content:"Case Studies on CarePlanner"}),e.createElement("meta",{property:"og:description",content:"Read why more companies are switching to CarePlanner."}),e.createElement("meta",{name:"twitter:title",content:"Case Studies on CarePlanner"}),e.createElement("meta",{name:"twitter:description",content:"Read why more companies are switching to CarePlanner."})),e.createElement("div",{css:j.section1},e.createElement("div",{css:_.default.container},e.createElement("h1",null,"Case Studies"),e.createElement("p",{css:_.default.sectionDescriptionTop},"Read why more companies are switching to CarePlanner."))),e.createElement("div",{css:j.section2,itemScope:!0,itemType:"http://schema.org/ItemList"},e.createElement("div",{css:_.default.container},t.map(function(t,a){return e.createElement("div",{css:j.caseStudy,key:a,onClick:function(){return(0,f.navigateTo)(t.node.fields.permalink)},itemProp:"itemListElement"},e.createElement("div",{css:j.caseStudyInner},e.createElement("img",{css:j.caseStudyInnerImg,src:t.node.data.large_image.url,alt:"Quote from {caseStudy.node.data.company_name.text}"}),e.createElement("h3",{itemProp:"name"},y.default.RichText.asText(t.node.data.company_name)),e.createElement("div",{css:j.caseStudyInnerDescription,dangerouslySetInnerHTML:{__html:y.default.RichText.asHtml(t.node.data.summary)}}),e.createElement(h.default,{to:t.node.fields.permalink},"Read Case Study...")),e.createElement("div",{css:j.caseStudyStat},e.createElement("div",{css:j.caseStudyStatFigure},t.node.data.key_stat_figure),e.createElement("div",{css:j.caseStudyStatDescription},t.node.data.key_stat_text)))}))))},a}(g.default.Component);t.default=v;var j=(t.pageQuery="** extracted graphql fragment **",{section1:(o={background:"#F4F8FC"},o[S.default.Desktop]={width:"calc(100% - 200px)",padding:"100px"},o[S.default.Tablet]={width:"calc(100% - 200px)",padding:"100px"},o[S.default.Mobile]={width:"calc(100% - 100px)",padding:"70px 50px"},o),section2:(l={},l[S.default.Desktop]={padding:"0 100px 50px","&:hover > * > *":{opacity:.6},"&:hover > * > *:hover":{opacity:1}},l[S.default.Tablet]={paddingBottom:"50px"},l[S.default.Mobile]={padding:"0 10px"},l),caseStudy:(c={},c[S.default.Desktop]={display:"inline-block",verticalAlign:"top",maxWidth:"29%",width:"29%",margin:"4% 1.9% 0 1.9%","-moz-transition":"opacity .2s","-o-transition":"opacity .2s","-webkit-transition":"opacity .2s",transition:"opacity .2s"},c[S.default.Tablet]={display:"inline-block",verticalAlign:"top",maxWidth:"29%",width:"29%",margin:"4% 1.9% 0 1.9%"},c[S.default.Mobile]={maxWidth:"90%",width:"90%",margin:"5%"},c),caseStudyInner:(d={width:"calc(100% - 40px)",padding:"20px",marginBottom:"20px",cursor:"pointer"},d[S.default.Desktop]={maxHeight:"324px",height:"324px"},d[S.default.Tablet]={maxHeight:"324px",height:"324px"},d),caseStudyInnerImg:{width:"100%"},caseStudyInnerDescription:(p={},p[S.default.Desktop]={maxHeight:"141px",overflow:"hidden",textOverflow:"ellipsis"},p[S.default.Tablet]={maxHeight:"141px",overflow:"hidden",textOverflow:"ellipsis"},p),caseStudyStat:(m={width:"calc(100% - 40px)",padding:"20px",background:"#F4F8FC",cursor:"pointer"},m[S.default.Desktop]={height:"108px",maxHeight:"108px"},m[S.default.Tablet]={height:"108px",maxHeight:"108px"},m),caseStudyStatFigure:{fontSize:"36px",color:"#4F739A",textAlign:"center",margin:"10px 0"},caseStudyStatDescription:{textAlign:"center",margin:"10px"}})}).call(t,a("./node_modules/glamor/react.js"))}});
//# sourceMappingURL=component---src-pages-case-studies-index-js-d63fd281eb06827d4f96.js.map
webpackJsonp([0xd899ad67fc68],{"./src/assets/feature-icon-placeholder.svg":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5PdmFsIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iSW5pdGlhbC1SZWxlYXNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtZGFzaGFycmF5PSIxMCI+CiAgICAgICAgPGcgaWQ9IkhvbWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MC4wMDAwMDAsIC05MzcuMDAwMDAwKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNEREU1RUQiPgogICAgICAgICAgICA8ZyBpZD0iU2VjdGlvbi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDEwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlF1b3RlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OS4wMDAwMDAsIDM4MS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIyNyIgY3k9IjE3MiIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dale/Documents/cp-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-transform-object-assign/lib/index.js",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"glamor/babel-hoist"],"presets":[["/Users/dale/Documents/cp-website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dale/Documents/cp-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Feature/index.js':function(e,t,l){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var r,s,d,c,p,u,m,g,x,b,f,I=l("./node_modules/react/react.js"),h=a(I),A=l("./node_modules/gatsby-link/index.js"),y=a(A),C=l("./node_modules/react-helmet/lib/Helmet.js"),w=l("./node_modules/prismic-dom/dist/prismic-dom.min.js"),D=a(w),v=l("./src/utils/presets.js"),M=a(v),j=l("./src/utils/global-styles.js"),_=a(j),R=l("./src/components/button.js"),S=function(t){function a(){return i(this,a),n(this,t.apply(this,arguments))}return o(a,t),a.prototype.render=function(){var t=this.props.data.prismicDocument.data;return e.createElement("div",null,e.createElement(C.Helmet,{title:D.default.RichText.asText(t.feature_name)}),e.createElement("div",{css:T.section1},e.createElement("div",{css:T.mainFeature},e.createElement("div",{css:[T.mainFeatureGraphic,T.normal]},e.createElement("img",{src:t.feature_image.url})),e.createElement("div",null,e.createElement("div",{css:_.default.placeholder},e.createElement("img",{src:t.feature_icon.url?t.feature_icon.url:l("./src/assets/feature-icon-placeholder.svg")})),e.createElement("a",{href:t.feature_permalink},e.createElement("h5",null,D.default.RichText.asText(t.feature_name))),e.createElement("a",{href:t.feature_permalink},e.createElement("h2",null,D.default.RichText.asText(t.feature_tagline))),e.createElement("div",{css:T.column1,dangerouslySetInnerHTML:{__html:D.default.RichText.asHtml(t.sell)}}),e.createElement("div",{css:R.buttonGroupStyle.horizontalLeft},e.createElement(y.default,{css:[R.buttonStyle.button,R.buttonStyle.outline],to:"/contact-us"},"Book a demo"))))),e.createElement("div",{css:[T.section2,_.default.container]},e.createElement("div",{css:T.column1,dangerouslySetInnerHTML:{__html:D.default.RichText.asHtml(t.feature_body_copy)}}),e.createElement("div",{css:T.column2},t.features_sidebar.map(function(t,l){return e.createElement("div",{key:l},e.createElement("blockquote",{dangerouslySetInnerHTML:{__html:D.default.RichText.asHtml(t.feature_text)}}))}))))},a}(h.default.Component);t.default=S;var T={section1:(r={},r[M.default.Desktop]={padding:"100px"},r[M.default.Tablet]={padding:"100px"},r[M.default.Mobile]={marginBottom:"60px",padding:"50px 25px"},r),mainFeature:(s={display:"-webkit-box"},s.display="-moz-box",s.display="-ms-flexbox",s.display="-webkit-flex",s.display="flex",s.alignItems="center",s[M.default.Desktop]={flexFlow:"row"},s[M.default.Tablet]={flexFlow:"row"},s[M.default.Mobile]={flexFlow:"column"},s),grid:(d={},d[M.default.Desktop]={maxWidth:"50%",padding:"100px 0"},d[M.default.Tablet]={maxWidth:"50%",padding:"25px 0"},d[M.default.Mobile]={padding:"50px 20px",order:1},d),circle:(c={},c[M.default.Desktop]={right:"200px",marginRight:"-100px"},c[M.default.Tablet]={right:"200px",marginRight:"-100px"},c["& img"]={borderRadius:"100%","-webkit-box-shadow":"inset 0px 0px 15px #888888","-moz-box-shadow":"inset 0px 0px 15px #888888",boxShadow:"inset 0px 0px 15px #888888"},c),frame:(p={},p[M.default.Desktop]={right:"100px"},p[M.default.Tablet]={right:"100px"},p),normal:(u={},u[M.default.Desktop]={right:"100px"},u[M.default.Tablet]={right:"100px"},u),info:(m={},m[M.default.Desktop]={display:"inline-block",width:"40%",margin:"20px 10% 20px 0",verticalAlign:"top"},m[M.default.Tablet]={display:"inline-block",width:"40%",margin:"20px 10% 20px 0",verticalAlign:"top"},m),mainFeatureGraphic:(g={},g[M.default.Desktop]={position:"relative",minWidth:"50%",textAlign:"center"},g[M.default.Tablet]={position:"relative",minWidth:"50%",textAlign:"center"},g[M.default.Mobile]={order:0,width:"100%",maxWidth:"100%",textAlign:"center"},g["& img"]={maxWidth:"100%"},g),section2:(x={display:"flex",flexDirection:"row",margin:"0 auto"},x[M.default.Desktop]={padding:"0 100px 100px 100px","& p, & li":{fontSize:"18px",lineHeight:"35px"},"& p":{marginBottom:"40px"},"& .block-img":{textAlign:"center"}},x[M.default.Tablet]={padding:"0 50px","& p, & li":{fontSize:"18px",lineHeight:"35px"},"& p":{marginBottom:"40px"},"& .block-img":{textAlign:"center"}},x[M.default.Mobile]={marginBottom:"60px",padding:"0 20px","& p, & li":{marginLeft:"50px",marginRight:"50px",lineHeight:"30px"},"& p":{marginBottom:"40px"},"& .block-img":{textAlign:"center"}},x),column1:(b={order:0},b[M.default.Desktop]={flexGrow:2,"& p":{fontSize:"18px",lineHeight:"35px",marginBottom:"40px"}},b[M.default.Tablet]={flexGrow:2,"& p":{fontSize:"18px",lineHeight:"35px",marginBottom:"40px"}},b),column2:(f={},f[M.default.Desktop]={order:1,flexGrow:1},f[M.default.Tablet]={order:1,flexGrow:1},f)};t.pageQuery="** extracted graphql fragment **"}).call(t,l("./node_modules/glamor/react.js"))}});
//# sourceMappingURL=component---src-templates-feature-index-js-c422e5642455821f9597.js.map
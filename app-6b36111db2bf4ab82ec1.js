webpackJsonp([8],{"./.cache/api-runner-browser.js":function(e,n){"use strict";var t=[];e.exports=function(e,n,o){var s=t.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:o?[o]:[]}},"./.cache/async-requires.js":function(e,n,t){"use strict";n.components={"page-component---src-pages-404-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js"),"page-component---src-pages-case-studies-index-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-case-studies-index-js!./src/pages/case-studies/index.js")},n.json={"404.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"404-html.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),"case-studies.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---case-studies!./.cache/json/case-studies.json")},n.layouts={}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/babel-runtime/helpers/extends.js"),a=o(s),r=t("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),u=o(r),i=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=o(i),d=t("./node_modules/babel-runtime/helpers/createClass.js"),l=o(d),m=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=o(m),f=t("./node_modules/babel-runtime/helpers/inherits.js"),g=o(f),h=t("./node_modules/react/react.js"),b=o(h),j=t("./.cache/loader.js"),_=o(j),v=t("./.cache/emitter.js"),y=o(v),x=function(e){function n(e){(0,c.default)(this,n);var t=(0,p.default)(this,(n.__proto__||(0,u.default)(n)).call(this));return t.state={location:e.location,pageResources:_.default.getResourcesForPathname(e.location.pathname)},t}return(0,g.default)(n,e),(0,l.default)(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=_.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):_.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}}},{key:"componentDidMount",value:function(){var e=this;y.default.on("onPostLoadPageResources",function(n){n.page.path===_.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.pageResources.component!==n.pageResources.component||this.state.pageResources.json!==n.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,h.createElement)(this.state.pageResources.component,(0,a.default)({},this.props,this.state.pageResources.json)):null}}]),n}(b.default.Component);n.default=x},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/mitt/dist/mitt.js"),a=o(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=t.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(a,{path:e.path})||(0,o.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,o.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(7,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(6,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---case-studies!./.cache/json/case-studies.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/case-studies.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(4,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/babel-runtime/core-js/get-iterator.js"),a=o(s),r=t("./.cache/find-page.js"),u=o(r),i=t("./.cache/emitter.js"),c=o(i),d=void 0,l={},m={},p={},f={},g={},h=[],b=[],j={},_=[],v={},y=function(e){return e&&e.default||e},x=void 0,w=!0;x=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){E(e,function(){_=_.filter(function(n){return n!==e}),x.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var R=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},P=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){t(null,f[e])});else{var o="page-c"===e.slice(0,6)?m.components[e]:m.json[e];o(function(n,o){f[e]=o,t(n,o)})}},D=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):E(e,function(n,o){if(n)t(n);else{var s=y(o());g[e]=s,t(n,s)}})},k=1,N={empty:function(){b=[],j={},v={},_=[],h=[]},addPagesArray:function(e){h=e;var n="";n=void 0,d=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){m=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/k;k+=1,j[e]?j[e]+=1:j[e]=1,N.has(e)||b.unshift(e),b.sort(P);var t=d(e);return t.jsonName&&(v[t.jsonName]?v[t.jsonName]+=1+n:v[t.jsonName]=1+n,_.indexOf(t.jsonName)!==-1||f[t.jsonName]||_.unshift(t.jsonName)),t.componentChunkName&&(v[t.componentChunkName]?v[t.componentChunkName]+=1+n:v[t.componentChunkName]=1+n,_.indexOf(t.componentChunkName)!==-1||f[t.jsonName]||_.unshift(t.componentChunkName)),_.sort(R),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:v}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return d(e)},has:function(e){return b.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,t=!1,o=void 0;try{for(var s,r=(0,a.default)(e);!(n=(s=r.next()).done);n=!0){var u=s.value;u.unregister()}}catch(e){t=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(t)throw o}}window.location.reload()})),w=!1;var o=d(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];c.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,u=function(){if(s&&r){p[e]={component:s,json:r};var n={component:s,json:r};t(n),c.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return D(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),s=n,u()}),void D(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),r=n,u()})},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=N}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"page-component---src-pages-case-studies-index-js",jsonName:"case-studies.json",path:"/case-studies/"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],s=[],a=function(){var e=n();e&&(s.push(e),t(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:s}},empty:function(){o=[],s=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,c.default)("onRouteUpdate",{location:e,action:n})}))}function a(e,n){var t=n.location.pathname,o=(0,c.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var s=e.location.pathname;if(s===t)return!1}return!0}var r=t("./node_modules/babel-runtime/helpers/extends.js"),u=o(r),i=t("./.cache/api-runner-browser.js"),c=o(i),d=t("./node_modules/react/react.js"),l=o(d),m=t("./node_modules/react-dom/index.js"),p=o(m),f=t("./node_modules/react-router-dom/index.js"),g=t("./node_modules/react-router-scroll/lib/index.js"),h=t("./node_modules/history/createBrowserHistory.js"),b=o(h),j=t("./.cache/emitter.js"),_=o(j),v=t("./.cache/pages.json"),y=o(v),x=t("./.cache/component-renderer.js"),w=o(x),R=t("./.cache/async-requires.js"),P=o(R),E=t("./.cache/loader.js"),D=o(E);window.___emitter=_.default,D.default.addPagesArray(y.default),D.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=D.default,window.matchPath=f.matchPath,(0,c.default)("onClientEntry"),(0,c.default)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var k=function(e){function n(o){o.page.path===D.default.getPage(e).path&&(_.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}if(window.location.pathname!==e){var t=setTimeout(function(){_.default.off("onPostLoadPageResources",n),_.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);D.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):_.default.on("onPostLoadPageResources",n)}};window.___navigateTo=k;var N=(0,b.default)();(0,c.default)("onRouteUpdate",{location:N.location,action:N.action});var C=(0,c.default)("replaceRouterComponent",{history:N})[0],U=function(e){var n=e.children;return l.default.createElement(f.BrowserRouter,{history:N},n)},T=function(e){P.default.layouts.index?P.default.layouts.index(function(n,t){var o=t();e(o)}):e(function(e){return l.default.createElement("div",null,e.children())})};T(function(e){D.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,d.createElement)(C?C:U,null,(0,d.createElement)(g.ScrollContext,{shouldUpdateScroll:a},(0,d.createElement)((0,f.withRouter)(e),{children:function(e){return(0,d.createElement)(f.Route,{render:function(n){s(n.history);var t=e?e:n;return D.default.getPage(t.location.pathname)?(0,d.createElement)(w.default,(0,u.default)({},t)):(0,d.createElement)(w.default,{location:{pathname:"/404.html"}})}})}})))},t=(0,c.default)("wrapRootComponent",{Root:n},n)[0];p.default.render(l.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./.cache/emitter.js"),a=o(s),r="/";r=void 0,"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),s=t.e,a=t.s;t.e=function(o,r){var u=!1,i=!0,c=function(e){r&&(r(t,e),r=null)};return!a&&n&&n[o]?void c(!0):(s(o,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,e(function(){u||(u=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(d===setTimeout)return setTimeout(e,0);if((d===t||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(n){try{return d.call(null,e,0)}catch(n){return d.call(this,e,0)}}}function a(e){if(l===clearTimeout)return clearTimeout(e);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(n){try{return l.call(null,e)}catch(n){return l.call(this,e)}}}function r(){g&&p&&(g=!1,p.length?f=p.concat(f):h=-1,f.length&&u())}function u(){if(!g){var e=s(r);g=!0;for(var n=f.length;n;){for(p=f,f=[];++h<n;)p&&p[h].run();h=-1,n=f.length}p=null,g=!1,a(e)}}function i(e,n){this.fun=e,this.array=n}function c(){}var d,l,m=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:t}catch(e){d=t}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(e){l=o}}();var p,f=[],g=!1,h=-1;m.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new i(e,n)),1!==f.length||g||s(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=c,m.addListener=c,m.once=c,m.off=c,m.removeListener=c,m.removeAllListeners=c,m.emit=c,m.prependListener=c,m.prependOnceListener=c,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(3,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dale/Documents/cp-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/dale/Documents/cp-website/node_modules/babel-preset-env/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-case-studies-index-js!./src/pages/case-studies/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(2,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dale/Documents/cp-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/dale/Documents/cp-website/node_modules/babel-preset-env/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/case-studies/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dale/Documents/cp-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/dale/Documents/cp-website/node_modules/babel-preset-env/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/dale/Documents/cp-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-6b36111db2bf4ab82ec1.js.map
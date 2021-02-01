!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://denredsky.github.io/webpack-react-redux-saga-router-stylus/",s(s.s=9)}([function(e,t,s){"use strict";try{self["workbox:core:6.0.2"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:precaching:6.0.2"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:core:6.1.0"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:6.0.2"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:6.0.2"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:core:6.1.0"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:recipes:6.0.2"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:expiration:6.1.0"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:cacheable-response:6.1.0"]&&_()}catch(e){}},function(e,t,s){"use strict";s.r(t);s(0);const n=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class r extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},o=e=>[a.prefix,e,a.suffix].filter(e=>e&&e.length>0).join("-"),i=e=>e||o(a.precache),c=e=>e||o(a.runtime),h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");function l(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class u{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const d=new Set;function f(e){return new Promise(t=>setTimeout(t,e))}s(4);function p(e){return"string"==typeof e?new Request(e):e}class y{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return this.waitUntil((async()=>{const{event:t}=this;let s=p(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new r("plugin-error-request-will-fetch",{thrownError:e})}const a=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:a,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:a.clone()}),e}})())}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}cacheMatch(e){return this.waitUntil((async()=>{const t=p(e);let s;const{cacheName:n,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),o={...r,cacheName:n};s=await caches.match(a,o);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:r,cachedResponse:s,request:a,event:this.event})||void 0;return s})())}async cachePut(e,t){const s=p(e);await f(0);const n=await this.getCacheKey(s,"write");if(!t)throw new r("cache-put-with-no-response",{url:h(n.url)});const a=await this._ensureResponseSafeToCache(t);if(!a)return void 0;const{cacheName:o,matchOptions:i}=this._strategy,c=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),y=u?await async function(e,t,s,n){const r=l(t.url,s);if(t.url===r)return e.match(t,n);const a={...n,ignoreSearch:!0},o=await e.keys(t,a);for(const t of o){if(r===l(t.url,s))return e.match(t,n)}}(c,n.clone(),["__WB_REVISION__"],i):null;try{await c.put(n,u?a.clone():a)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of d)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:y,newResponse:a.clone(),request:n,event:this.event})}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=p(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const r={...n,state:s};return t[e](r)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class g{constructor(e={}){this.cacheName=c(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,r=new y(this,{event:t,request:s,params:n}),a=this._getResponse(r,s,t);return[a,this._awaitComplete(a,r,s,t)]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let n=void 0;try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new r("no-response",{url:t.url})}catch(r){for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:r,event:s,request:t}),n)break;if(!n)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))n=await r({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await t.doneWaiting()}catch(e){a=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:a}),t.destroy(),a)throw a}}const w={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class _ extends g{constructor(e){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(w)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch(()=>{});let n,a=await t.cacheMatch(e);if(a)0;else{0;try{a=await s}catch(e){n=e}}if(!a)throw new r("no-response",{url:e.url,error:n});return a}}s(3);const m=e=>e&&"object"==typeof e?e:{handle:e};class b{constructor(e,t,s="GET"){this.handler=m(t),this.match=e,this.method=s}}class v extends b{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class R{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:r,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let o=a&&a.handler;const i=e.method;if(!o&&this._defaultHandlerMap.has(i)&&(o=this._defaultHandlerMap.get(i)),!o)return void 0;let c;try{c=o.handle({url:s,request:e,event:t,params:r})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this._catchHandler&&(c=c.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const r=this._routes.get(s.method)||[];for(const a of r){let r;const o=a.match({url:e,sameOrigin:t,request:s,event:n});if(o)return r=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,m(e))}setCatchHandler(e){this._catchHandler=m(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let C;const U=()=>(C||(C=new R,C.addFetchListener(),C.addCacheListener()),C);function k(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0;n=new b(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)n=new v(e,t,s);else if("function"==typeof e)n=new b(e,t,s);else{if(!(e instanceof b))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return U().registerRoute(n),n}s(5);Error;s(8);s(2);Error;"undefined"!=typeof registration&&registration.scope;new Set;class q{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:r,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(o,i)=>{const c=o.objectStore(e),h=t?c.index(t):c,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(a?e:e.value),r&&l.length>=r?i(l):e.continue()):i(l)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,r)=>{const a=s.objectStore(t),o=a[e].apply(a,n);o.onsuccess=()=>r(o.result)})}close(){this._db&&(this._db.close(),this._db=null)}}q.prototype.OPEN_TIMEOUT=2e3;const L={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(L))for(const s of t)s in IDBObjectStore.prototype&&(q.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});s(7);s(6);function T(e,t){const s=t();return e.waitUntil(s),s}s(1);function K(e){if(!e)throw new r("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new r("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),a=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:a.href}}class x{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class M{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let O;async function A(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new r("cross-origin-copy-response",{origin:s});const n=e.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},o=t?t(a):a,i=function(){if(void 0===O){const e=new Response("");if("body"in e)try{new Response(e.body),O=!0}catch(e){O=!1}O=!1}return O}()?n.body:await n.blob();return new Response(i,o)}const E={cacheWillUpdate:async({response:e})=>e.redirected?await A(e):e};class P extends g{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(E)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new r("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){const s=await t.fetchAndCachePut(e);let n=Boolean(s);if(s&&s.status>=400&&!this._usesCustomCacheableResponseLogic()&&(n=!1),!n)throw new r("bad-precaching-response",{url:e.url,status:s.status});return s}_usesCustomCacheableResponseLogic(){return this.plugins.some(e=>e.cacheWillUpdate&&e!==E)}}class N{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new P({cacheName:i(e),plugins:[...t,new M({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=K(s),a="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new r("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new r("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return T(e,async()=>{const t=new x;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}})}activate(e){return T(e,async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new r("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}let S;const j=()=>(S||(S=new N),S);function W(e){return j().matchPrecache(e)}class I extends b{constructor(e,t){super(({request:s})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const o=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield o.href,s&&o.pathname.endsWith("/")){const e=new URL(o.href);e.pathname+=s,yield e.href}if(n){const e=new URL(o.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}},e.strategy)}}class F{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:r,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(o,i)=>{const c=o.objectStore(e),h=t?c.index(t):c,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(a?e:e.value),r&&l.length>=r?i(l):e.continue()):i(l)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,r)=>{const a=s.objectStore(t),o=a[e].apply(a,n);o.onsuccess=()=>r(o.result)})}close(){this._db&&(this._db.close(),this._db=null)}}F.prototype.OPEN_TIMEOUT=2e3;const D={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(D))for(const s of t)s in IDBObjectStore.prototype&&(F.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});var B;self.skipWaiting(),self.addEventListener("activate",()=>self.clients.claim()),function(e){j().precache(e)}([{'revision':'269323991c606640e4f9f94b7740c57f','url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/apple.png'},{'revision':null,'url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/css/about.1820b14762b97c575304.css'},{'revision':null,'url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/css/app.adaa126a0a14b79f8edd.css'},{'revision':null,'url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/css/main.974ef67e899fe94f12d5.css'},{'revision':'3c5cf7079a99b09da43c995bda5eed71','url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/index.html'},{'revision':null,'url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/js/about.1997d50327d72476dc3c.js'},{'revision':null,'url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/js/app.024d848f5b7fb45aba32.js'},{'revision':null,'url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/js/main.178d8fcafc7fd84483bc.js'},{'revision':null,'url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/js/runtime.a219365b5b4c4f996ad9.js'},{'revision':'c2644e5ad3375adea3a74c310a472c2c','url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/manifest.webmanifest'},{'revision':'8c9181fa9f5164f3d096f8960079ca2a','url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/maskable.png'},{'revision':'c63e5ebd167efb0e40e006de094faa8a','url':'https://denredsky.github.io/webpack-react-redux-saga-router-stylus/offline.html'}]),function(e){const t=j();k(new I(t,e))}(B),k(/https:\/\/jsonplaceholder.typicode.com/,new _),function(e={}){const t=e.pageFallback||"offline.html",s=e.imageFallback||!1,n=e.fontFallback||!1;!function(e){U().setCatchHandler(e)}(async e=>{const r=e.request.destination;return"document"===r?await W(t)||Response.error():"image"===r&&!1!==s?await W(s)||Response.error():"font"===r&&!1!==n&&await W(n)||Response.error()})}()}]);
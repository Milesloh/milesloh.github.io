'use strict';function u(g,l,h,n){g.f.ha(g.I,l,h,n,void 0)}function C(g,l,h,n){g.f.i?u(g,l,h,n):g.f.tb()._OnMessageFromDOM({type:"event",component:g.I,handler:l,dispatchOpts:n||null,data:h,responseId:null})}function I(g,l,h){g.f.b(g.I,l,h)}function L(g,l){for(const [h,n]of l)I(g,h,n)}window.fa=class{constructor(g,l){this.f=g;this.I=l}Da(){}};
window.ib=class{constructor(g,l){this.Ta=g;this.ac=l;this.B=-1;this.W=-Infinity;this.fc=()=>{this.B=-1;this.W=Date.now();this.J=!0;this.Ta();this.J=!1};this.Ua=this.J=!1}};"use strict";function M(g,l){I(g,"get-element",h=>{const n=g.h.get(h.elementId);return l(n,h)})}
window.uc=class extends self.fa{constructor(g,l){super(g,l);this.h=new Map;this.sa=!0;L(this,[["create",()=>{throw Error("required override");}],["destroy",h=>{{h=h.elementId;const n=this.h.get(h);this.sa&&n.parentElement.removeChild(n);this.h.delete(h)}}],["set-visible",h=>{this.sa&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.sa){var n=this.h.get(h.elementId);n.style.left=h.left+"px";n.style.top=h.top+"px";n.style.width=h.width+"px";n.style.height=
h.height+"px";h=h.fontSize;null!==h&&(n.style.fontSize=h+"em")}}],["update-state",h=>{this.h.get(h.elementId);throw Error("required override");}],["focus",h=>{{const n=this.h.get(h.elementId);h.focus?n.focus():n.blur()}}],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);M(this,h=>h)}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),l=/android/i.test(navigator.userAgent);let h=0;function n(f){const a=document.createElement("script");a.async=!1;a.type="module";return f.lc?new Promise(d=>{const e="c3_resolve_"+h;++h;self[e]=d;a.textContent=f.oc+`\n\nself["${e}"]();`;document.head.appendChild(a)}):new Promise((d,e)=>{a.onload=d;a.onerror=e;a.src=f;document.head.appendChild(a)})}let v=!1,E=!1;function J(){if(!v){try{new Worker("blob://",{get type(){E=
!0}})}catch(f){}v=!0}return E}let w=new Audio;const y={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function K(f){f=await F(f);return(new TextDecoder("utf-8")).decode(f)}
function F(f){return new Promise((a,d)=>{const e=new FileReader;e.onload=k=>a(k.target.result);e.onerror=k=>d(k);e.readAsArrayBuffer(f)})}const x=[];let z=0;window.RealFile=window.File;const A=[],r=new Map,B=new Map;let D=0;const G=[];self.runOnStartup=function(f){if("function"!==typeof f)throw Error("runOnStartup called without a function");G.push(f)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.ia=class f{constructor(a){this.i=a.qc;this.L=null;this.c="";this.ba=a.nc;
this.P={};this.va=this.Za=null;this.U=[];this.K=this.g=this.ya=null;this.v=-1;this.ec=()=>this.Nb();this.Ya=[];this.a=a.$a;this.V="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&J()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(l){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.Y=this.l=null;"html5"!==this.a&&"playable-ad"!==
this.a||!this.V||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.Ab(d));this.b("runtime","create-job-worker",
()=>this.Bb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ia(a)):this.Ia(a)}fb(){return g&&"cordova"===this.a}ga(){const a=navigator.userAgent;return g&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}cb(){return l}Fa(){return l&&b.has(this.a)}async Ia(a){"macos-wkwebview"===this.a&&this.Yb();if("playable-ad"===this.a){this.l=self.c3_base64files;this.Y={};await this.ob();for(let e=0,k=a.C.length;e<k;++e){var d=a.C[e].toLowerCase();this.Y.hasOwnProperty(d)?
a.C[e]={lc:!0,oc:this.Y[d]}:this.l.hasOwnProperty(d)&&(a.C[e]=URL.createObjectURL(this.l[d]))}}a.hc?this.c=a.hc:(d=location.origin,this.c=("null"===d?"file:///":d)+location.pathname,d=this.c.lastIndexOf("/"),-1!==d&&(this.c=this.c.substr(0,d+1)));a.sc&&(this.P=a.sc);d=new MessageChannel;this.L=d.port1;this.L.onmessage=e=>this._OnMessageFromRuntime(e.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(e=>this.Kb(e));this.K=new self.gb(this);await N(this.K);"object"===typeof window.StatusBar&&
window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.vb(a,d.port2):await this.ub(a,d.port2)}ka(a){a=this.P.hasOwnProperty(a)?this.P[a]:a.endsWith("/workermain.js")&&this.P.hasOwnProperty("workermain.js")?this.P["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ea(a,d,e){if(a.startsWith("blob:"))return new Worker(a,
e);if("cordova"===this.a&&this.V)return a=await this.da(e.kc?a:this.ba+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),e);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),e)}return new Worker(a,e)}m(){return Math.max(window.innerWidth,1)}j(){return Math.max(window.innerHeight,1)}Ha(a){var d=this.K;return{baseUrl:this.c,windowInnerWidth:this.m(),
windowInnerHeight:this.j(),devicePixelRatio:window.devicePixelRatio,isFullscreen:f.D(),projectData:a.yc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.wc||"",exportType:a.$a,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.xc,jobScheduler:{inputPort:d.ua,outputPort:d.xa,maxNumWorkers:d.cc},supportedAudioFormats:y,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.ba+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ba+"opus.wasm.wasm",isFileProtocol:this.V,isiOSCordova:this.fb(),isiOSWebView:this.ga(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async vb(a,d){var e=this.ka(a.rc);this.Za=await this.ea(e,this.c,{type:"module",name:"Runtime",kc:!0});this.g=document.createElement("canvas");this.g.style.display="none";e=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let k=a.Ba||[],
q=a.C;k=await Promise.all(k.map(m=>this.s(m)));q=await Promise.all(q.map(m=>this.s(m)));if("cordova"===this.a)for(let m=0,p=a.ca.length;m<p;++m){const t=a.ca[m],H=t[0];if(H===a.Aa||"scriptsInEvents.js"===H||H.endsWith("/scriptsInEvents.js"))t[1]=await this.s(H)}this.Za.postMessage(Object.assign(this.Ha(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:k,engineScripts:q,projectScripts:a.ca,mainProjectScript:a.Aa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[d,e,...O(this.K)]);this.U=A.map(m=>new m(this));this.Ga();self.c3_callFunction=(m,p)=>this.ya.wb(m,p);"preview"===this.a&&(self.goToLastErrorScript=()=>this.ha("runtime","go-to-last-error-script"))}async ub(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.U=A.map(m=>new m(this));this.Ga();var e=a.C.map(m=>"string"===typeof m?(new URL(m,this.c)).toString():m);Array.isArray(a.Ba)&&e.unshift(...a.Ba);e=await Promise.all(e.map(m=>
this.s(m)));await Promise.all(e.map(m=>n(m)));e=self.C3_ProjectScriptsStatus;const k=a.Aa,q=a.ca;for(let [m,p]of q)if(p||(p=m),m===k)try{p=await this.s(p),await n(p),"preview"!==this.a||e[m]||this.Oa(m,"main script did not run to completion")}catch(t){this.Oa(m,t)}else if("scriptsInEvents.js"===m||m.endsWith("/scriptsInEvents.js"))p=await this.s(p),await n(p);"preview"===this.a&&"object"!==typeof self.tc.vc?(this.T(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ha(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:G}),this.Ka(),this.va=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.va,a))}Oa(a,d){this.T();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ka(){this.T()}T(){const a=
window.ic;a&&(a.parentElement.removeChild(a),window.ic=null)}async Bb(){const a=await P(this.K);return{outputPort:a,transferables:[a]}}tb(){if(this.i)throw Error("not available in worker mode");return this.va}ha(a,d,e,k,q){this.L.postMessage({type:"event",component:a,handler:d,dispatchOpts:k||null,data:e,responseId:null},q)}hb(a,d){const e=D++,k=new Promise((q,m)=>{B.set(e,{resolve:q,reject:m})});this.L.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:e},
void 0);return k}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Gb(a);if("result"===d)this.Qb(a);else if("runtime-ready"===d)this.Rb();else if("alert-error"===d)this.T(),alert(a.message);else if("creating-runtime"===d)this.Ka();else throw Error(`unknown message '${d}'`);}Gb(a){const d=a.component,e=a.handler,k=a.data,q=a.responseId;if(a=r.get(d))if(a=a.get(e)){var m=null;try{m=a(k)}catch(p){console.error(`Exception in '${d}' handler '${e}':`,p);null!==q&&this.S(q,!1,""+p);
return}if(null===q)return m;m&&m.then?m.then(p=>this.S(q,!0,p)).catch(p=>{console.error(`Rejection from '${d}' handler '${e}':`,p);this.S(q,!1,""+p)}):this.S(q,!0,m)}else console.warn(`[DOM] No handler '${e}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}S(a,d,e){let k;e&&e.transferables&&(k=e.transferables);this.L.postMessage({type:"result",responseId:a,isOk:d,result:e},k)}Qb(a){const d=a.responseId,e=a.isOk;a=a.result;const k=B.get(d);e?k.resolve(a):k.reject(a);
B.delete(d)}b(a,d,e){let k=r.get(a);k||(k=new Map,r.set(a,k));if(k.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);k.set(d,e)}static Ca(a){if(A.includes(a))throw Error("DOM handler already added");A.push(a)}Ga(){for(const a of this.U)if("runtime"===a.I){this.ya=a;return}throw Error("cannot find runtime DOM handler");}Kb(a){this.ha("debugger","message",a)}Rb(){for(const a of this.U)a.Da()}static D(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static Qa(a){c=!!a}Pa(){-1===this.v&&this.Ya.length&&(this.v=requestAnimationFrame(this.ec))}mb(){-1!==this.v&&(cancelAnimationFrame(this.v),this.v=-1)}Nb(){this.v=-1;for(const a of this.Ya)a();this.Pa()}ra(){this.ya.ra()}bb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}eb(a){return!this.bb(a)}async s(a){return"cordova"===this.a&&(a.startsWith("file:")||this.V&&this.eb(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.da(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async Ab(a){const d=a.filename;switch(a.as){case "text":return await this.ab(d);case "buffer":return await this.da(d);default:throw Error("unsupported type");}}Ea(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((e,k)=>{window.resolveLocalFileSystemURL(d,q=>{q.file(e,k)},k)})}async ab(a){a=await this.Ea(a);return await K(a)}ja(){if(x.length&&!(8<=z)){z++;var a=x.shift();this.pb(a.filename,a.pc,a.jc)}}da(a){return new Promise((d,
e)=>{x.push({filename:a,pc:k=>{z--;this.ja();d(k)},jc:k=>{z--;this.ja();e(k)}});this.ja()})}async pb(a,d,e){try{const k=await this.Ea(a),q=await F(k);d(q)}catch(k){e(k)}}Yb(){var a={type:"ready"};if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async ob(){const a=[];for(const [d,e]of Object.entries(this.l))a.push(this.nb(d,
e));await Promise.all(a)}async nb(a,d){if("object"===typeof d)this.l[a]=new Blob([d.str],{type:d.type}),this.Y[a]=d.str;else{let e=await this.sb(d);e||(e=this.qb(d));this.l[a]=e}}async sb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}qb(a){a=this.Wb(a);return this.lb(a.data,
a.mc)}Wb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var e=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const k=d[2];e="base64"===d[1]||"base64"===k?atob(e):decodeURIComponent(e);return{mc:a,data:e}}lb(a,d){var e=a.length;let k=e>>2,q=new Uint8Array(e),m=new Uint32Array(q.buffer,0,k),p,t;for(t=p=0;p<k;++p)m[p]=a.charCodeAt(t++)|a.charCodeAt(t++)<<8|a.charCodeAt(t++)<<16|a.charCodeAt(t++)<<24;for(e&=3;e--;)q[t]=a.charCodeAt(t),++t;return new Blob([q],
{type:d})}}}"use strict";
{const g=self.ia;function l(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),n={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},v={dispatchUserScriptEvent:!0},E={dispatchRuntimeEvent:!0};function J(b){return new Promise((c,f)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>f(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,f)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>f(d);a.src=b})}async function y(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function K(b){return new Promise((c,f)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>f(d);a.readAsText(b)})}async function F(b,c,f){if(!/firefox/i.test(navigator.userAgent))return await y(b);var a=await K(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const e=d.getAttribute("width"),k=d.getAttribute("height");if(!e.includes("%")&&!k.includes("%"))return await y(b)}d.setAttribute("width",c+"px");d.setAttribute("height",f+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await y(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const z=new Set(["input",
"textarea","datalist","select"]),A=new Set(["canvas","body","html"]);function r(b){A.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function B(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await y(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,f,a,d){b=await F(b,c,f);const e=document.createElement("canvas");e.width=a;e.height=d;e.getContext("2d").drawImage(b,0,0,c,f);return e};let D=!1;document.addEventListener("pause",()=>D=!0);document.addEventListener("resume",()=>D=!1);function G(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.Ca(class extends self.fa{constructor(b){super(b,"runtime");this.Va=!0;this.A=-1;this.za="any";this.Ra=this.Sa=!1;this.u=
this.N=this.o=null;this.$=this.Z=0;this.Xa=b.m();this.X=b.j();this.O=0;b.b("canvas","update-size",a=>this.Tb(a));b.b("runtime","invoke-download",a=>this.Jb(a));b.b("runtime","raster-svg-image",a=>this.Ob(a));b.b("runtime","get-svg-image-size",a=>this.Hb(a));b.b("runtime","set-target-orientation",a=>this.Sb(a));b.b("runtime","register-sw",()=>this.Pb());b.b("runtime","post-to-debugger",a=>this.Ma(a));b.b("runtime","go-to-script",a=>this.Ma(a));b.b("runtime","before-start-ticking",()=>this.zb());b.b("runtime",
"debug-highlight",a=>this.Cb(a));b.b("runtime","enable-device-orientation",()=>this.kb());b.b("runtime","enable-device-motion",()=>this.jb());b.b("runtime","add-stylesheet",a=>this.xb(a));b.b("runtime","alert",a=>this.yb(a));b.b("runtime","hide-cordova-splash",()=>this.Ib());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||x(d)||a.preventDefault()});const f=b.g;window.addEventListener("selectstart",r);window.addEventListener("gesturehold",
r);f.addEventListener("selectstart",r);f.addEventListener("gesturehold",r);window.addEventListener("touchstart",r,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",r,{passive:!1}),f.addEventListener("pointerdown",r)):f.addEventListener("touchstart",r);this.M=0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",B,{passive:!1});window.addEventListener("wheel",B,{passive:!1});window.addEventListener("resize",
()=>this.Ub());window.addEventListener("fullscreenchange",()=>this.F());window.addEventListener("webkitfullscreenchange",()=>this.F());window.addEventListener("mozfullscreenchange",()=>this.F());window.addEventListener("fullscreenerror",a=>this.na(a));window.addEventListener("webkitfullscreenerror",a=>this.na(a));window.addEventListener("mozfullscreenerror",a=>this.na(a));b.ga()&&window.addEventListener("focusout",()=>{{const e=document.activeElement;if(e){var a=e.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));
a="textarea"===a?!0:"input"===a?d.has(e.type.toLowerCase()||"text"):x(e)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.Vb(a);this.wa=new Set;this.dc=new WeakSet;this.bc=!1}zb(){"cordova"===this.f.a?(document.addEventListener("pause",()=>this.qa(!0)),document.addEventListener("resume",()=>this.qa(!1))):document.addEventListener("visibilitychange",()=>this.qa(document.hidden));return{isSuspended:!(!document.hidden&&!D)}}Da(){window.addEventListener("focus",()=>
this.H("window-focus"));window.addEventListener("blur",()=>{this.H("window-blur",{parentHasFocus:G()});this.M=0});window.addEventListener("focusin",c=>{c=c.target;(z.has(c.tagName.toLowerCase())||x(c))&&this.H("keyboard-blur")});window.addEventListener("keydown",c=>this.La("keydown",c));window.addEventListener("keyup",c=>this.La("keyup",c));window.addEventListener("dblclick",c=>this.oa("dblclick",c,n));window.addEventListener("wheel",c=>this.Lb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",
c=>{this.la(c);this.G("pointerdown",c)}),this.f.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.N=new self.ib(()=>this.rb(),5),this.N.Ua=!0,window.addEventListener("pointerrawupdate",c=>this.Mb(c))):window.addEventListener("pointermove",c=>this.G("pointermove",c)),window.addEventListener("pointerup",c=>this.G("pointerup",c)),window.addEventListener("pointercancel",c=>this.G("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.la(c);this.pa("pointerdown",c)}),
window.addEventListener("mousemove",c=>this.pa("pointermove",c)),window.addEventListener("mouseup",c=>this.pa("pointerup",c)),window.addEventListener("touchstart",c=>{this.la(c);this.R("pointerdown",c)}),window.addEventListener("touchmove",c=>this.R("pointermove",c)),window.addEventListener("touchend",c=>this.R("pointerup",c)),window.addEventListener("touchcancel",c=>this.R("pointercancel",c)));const b=()=>this.ra();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);
window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.f.cb()&&!this.f.Fa()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.ma(this.j(),navigator.virtualKeyboard.boundingRect.height)}))}ma(b,c){document.body.style.transform="";if(0<c){var f=document.activeElement;f&&(f=f.getBoundingClientRect(),b=(f.top+f.bottom)/2-(b-c)/2,b>c&&
(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=`translateY(${-b}px)`))}}H(b,c){u(this,b,c||null,E)}m(){return this.f.m()}j(){return this.f.j()}Ub(){const b=this.m(),c=this.j();if(this.f.Fa()){if(this.Xa===b&&c<this.X){this.O=this.X-c;this.ma(this.X,this.O);return}0<this.O&&(this.O=0,this.ma(c,this.O));this.Xa=b;this.X=c}this.H("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.D()});this.f.ga()&&(-1!==this.A&&clearTimeout(this.A),this.Na(b,c,
0))}Xb(b,c,f){-1!==this.A&&clearTimeout(this.A);this.A=setTimeout(()=>this.Na(b,c,f),48)}Na(b,c,f){const a=this.m(),d=this.j();this.A=-1;a!=b||d!=c?this.H("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.D()}):10>f&&this.Xb(a,d,f+1)}Sb(b){this.za=b.targetOrientation}Zb(){const b=this.za;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;
screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}F(){const b=g.D();b&&"any"!==this.za&&this.Zb();u(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.j()})}na(b){console.warn("[Construct 3] Fullscreen request failed: ",
b);u(this,"fullscreenerror",{isFullscreen:g.D(),innerWidth:this.m(),innerHeight:this.j()})}qa(b){b?this.f.mb():this.f.Pa();u(this,"visibilitychange",{hidden:b})}La(b,c){"Backspace"===c.key&&r(c);const f=h.get(c.code)||c.code;C(this,b,{code:f,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},n)}Lb(b){u(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,
deltaMode:b.deltaMode,timeStamp:b.timeStamp},n)}oa(b,c,f){l(c)||C(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},f)}pa(b,c){if(!l(c)){var f=this.M;"pointerdown"===b&&0!==f?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");C(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:f,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,
pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},n);this.M=c.buttons;this.oa(c.type,c,v)}}G(b,c){if(this.N&&"pointermove"!==b){var f=this.N;f.J||(-1!==f.B&&(self.clearTimeout(f.B),f.B=-1),f.W=Date.now())}f=0;"mouse"===c.pointerType&&(f=this.M);C(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:f,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,
pageY:c.pageY,movementX:(c.movementX||0)+this.Z,movementY:(c.movementY||0)+this.$,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},n);this.$=this.Z=0;"mouse"===c.pointerType&&(f="mousemove","pointerdown"===b?f="mousedown":"pointerup"===b&&(f="mouseup"),this.oa(f,c,v),this.M=c.buttons)}Mb(b){this.u&&(this.Z+=this.u.movementX||0,this.$+=this.u.movementY||0);this.u=b;b=this.N;
if(-1===b.B){var c=Date.now(),f=c-b.W,a=b.ac;f>=a&&b.Ua?(b.W=c,b.J=!0,b.Ta(),b.J=!1):b.B=self.setTimeout(b.fc,Math.max(a-f,4))}}rb(){this.G("pointermove",this.u);this.u=null}R(b,c){for(let f=0,a=c.changedTouches.length;f<a;++f){const d=c.changedTouches[f];C(this,b,{pointerId:d.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*
(d.radiusY||d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},n)}}la(b){window!==window.top&&window.focus();this.Ja(b.target)&&document.activeElement&&!this.Ja(document.activeElement)&&document.activeElement.blur()}Ja(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}kb(){this.Sa||(this.Sa=!0,window.addEventListener("deviceorientation",b=>this.Eb(b)),window.addEventListener("deviceorientationabsolute",
b=>this.Fb(b)))}jb(){this.Ra||(this.Ra=!0,window.addEventListener("devicemotion",b=>this.Db(b)))}Eb(b){u(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},n)}Fb(b){u(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},n)}Db(b){let c=null;var f=b.acceleration;f&&(c=
{x:f.x||0,y:f.y||0,z:f.z||0});f=null;var a=b.accelerationIncludingGravity;a&&(f={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});u(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:f,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},n)}Tb(b){const c=this.f.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.Va&&(c.style.display=
"",this.Va=!1)}Jb(b){const c=b.url;b=b.filename;const f=document.createElement("a"),a=document.body;f.textContent=b;f.href=c;f.download=b;a.appendChild(f);f.click();a.removeChild(f)}async Ob(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Hb(b){return await self.C3_GetSvgImageSize(b.blob)}async xb(b){await J(b.url)}ra(){var b=
[...this.wa];this.wa.clear();if(!this.bc)for(const c of b)(b=c.play())&&b.catch(()=>{this.dc.has(c)||this.wa.add(c)})}Ib(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Cb(b){if(b.show){this.o||(this.o=document.createElement("div"),this.o.id="inspectOutline",document.body.appendChild(this.o));var c=this.o;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.o&&
(this.o.style.display="none")}Pb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ma(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}wb(b,c){return this.f.hb(this.I,{name:b,params:c})}yb(b){alert(b.message)}Vb(b){"entered-fullscreen"===b?(g.Qa(!0),this.F()):"exited-fullscreen"===b?(g.Qa(!1),this.F()):console.warn("Unknown wrapper message: ",b)}})}"use strict";
async function N(g){if(g.$b)throw Error("already initialised");g.$b=!0;var l=g.aa.ka("dispatchworker.js");g.ta=await g.aa.ea(l,g.c,{name:"DispatchWorker"});l=new MessageChannel;g.ua=l.port1;g.ta.postMessage({type:"_init","in-port":l.port2},[l.port2]);g.xa=await P(g)}function O(g){return[g.ua,g.xa]}
async function P(g){const l=g.Wa.length;var h=g.aa.ka("jobworker.js");h=await g.aa.ea(h,g.c,{name:"JobWorker"+l});const n=new MessageChannel,v=new MessageChannel;g.ta.postMessage({type:"_addJobWorker",port:n.port1},[n.port1]);h.postMessage({type:"init",number:l,"dispatch-port":n.port2,"output-port":v.port2},[n.port2,v.port2]);g.Wa.push(h);return v.port1}
self.gb=class{constructor(g){this.aa=g;this.c=g.c;this.c="preview"===g.a?this.c+"workers/":this.c+g.ba;this.cc=Math.min(navigator.hardwareConcurrency||2,16);this.ta=null;this.Wa=[];this.xa=this.ua=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.ia({qc:!0,rc:"workermain.js",C:["scripts/c3runtime.js"],ca:[],Aa:"",nc:"scripts/",Ba:[],$a:"html5"}));"use strict";
async function Q(g,l){l=l.type;let h=!0;0===l?h=await R():1===l&&(h=await S());u(g,"permission-result",{type:l,result:h})}async function R(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function S(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.ia.Ca(class extends self.fa{constructor(g){super(g,"touch");I(this,"request-permission",l=>Q(this,l))}});

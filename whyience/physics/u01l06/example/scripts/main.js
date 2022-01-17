'use strict';function r(f,g,h,n){f.f.ja(f.L,g,h,n,void 0)}function B(f,g,h,n){f.f.i?r(f,g,h,n):f.f.sb()._OnMessageFromDOM({type:"event",component:f.L,handler:g,dispatchOpts:n||null,data:h,responseId:null})}function I(f,g,h){f.f.b(f.L,g,h)}function J(f,g){for(const [h,n]of g)I(f,h,n)}window.G=class{constructor(f,g){this.f=f;this.L=g}Ga(){}};
window.hb=class{constructor(f,g){this.Ua=f;this.Yb=g;this.D=-1;this.$=-Infinity;this.cc=()=>{this.D=-1;this.$=Date.now();this.M=!0;this.Ua();this.M=!1};this.Va=this.M=!1}};"use strict";function N(f,g){I(f,"get-element",h=>{const n=f.h.get(h.elementId);return g(n,h)})}
window.rc=class extends self.G{constructor(f,g){super(f,g);this.h=new Map;this.wa=!0;J(this,[["create",()=>{throw Error("required override");}],["destroy",h=>{{h=h.elementId;const n=this.h.get(h);this.wa&&n.parentElement.removeChild(n);this.h.delete(h)}}],["set-visible",h=>{this.wa&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.wa){var n=this.h.get(h.elementId);n.style.left=h.left+"px";n.style.top=h.top+"px";n.style.width=h.width+"px";n.style.height=
h.height+"px";h=h.fontSize;null!==h&&(n.style.fontSize=h+"em")}}],["update-state",h=>{this.h.get(h.elementId);throw Error("required override");}],["focus",h=>this.sa(h)],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);N(this,h=>h)}sa(f){var g=this.h.get(f.elementId);f.focus?g.focus():g.blur()}};"use strict";
{const f=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let g=0;function h(c){const a=document.createElement("script");a.async=!1;a.type="module";return c.ic?new Promise(d=>{const e="c3_resolve_"+g;++g;self[e]=d;a.textContent=c.lc+`\n\nself["${e}"]();`;document.head.appendChild(a)}):new Promise((d,e)=>{a.onload=d;a.onerror=e;a.src=c;document.head.appendChild(a)})}let n=!1,v=!1;function K(){if(!n){try{new Worker("blob://",{get type(){v=!0}})}catch(c){}n=!0}return v}let w=
new Audio;const L={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function y(c){c=await E(c);return(new TextDecoder("utf-8")).decode(c)}function E(c){return new Promise((a,
d)=>{const e=new FileReader;e.onload=k=>a(k.target.result);e.onerror=k=>d(k);e.readAsArrayBuffer(c)})}const C=[];let x=0;window.RealFile=window.File;const z=[],D=new Map,t=new Map;let F=0;const A=[];self.runOnStartup=function(c){if("function"!==typeof c)throw Error("runOnStartup called without a function");A.push(c)};const M=new Set(["cordova","playable-ad","instant-games"]);let b=!1;window.l=class c{constructor(a){this.i=a.nc;this.O=null;this.c="";this.ea=a.kc;this.S={};this.za=this.Za=null;this.Y=
[];this.N=this.g=this.Ca=null;this.B=-1;this.bc=()=>this.Lb();this.Ya=[];this.a=a.$a;this.Z="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&K()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(/android/i.test(navigator.userAgent)){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.aa=this.j=null;"html5"!==this.a&&"playable-ad"!==
this.a||!this.Z||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.yb(d));this.b("runtime","create-job-worker",
()=>this.zb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ka(a)):this.Ka(a)}eb(){return f&&"cordova"===this.a}ia(){const a=navigator.userAgent;return f&&M.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}async Ka(a){"macos-wkwebview"===this.a&&this.va({type:"ready"});if("playable-ad"===this.a){this.j=self.c3_base64files;this.aa={};await this.nb();for(let e=0,k=a.F.length;e<k;++e){var d=a.F[e].toLowerCase();this.aa.hasOwnProperty(d)?a.F[e]={ic:!0,lc:this.aa[d]}:
this.j.hasOwnProperty(d)&&(a.F[e]=URL.createObjectURL(this.j[d]))}}a.dc?this.c=a.dc:(d=location.origin,this.c=("null"===d?"file:///":d)+location.pathname,d=this.c.lastIndexOf("/"),-1!==d&&(this.c=this.c.substr(0,d+1)));a.pc&&(this.S=a.pc);d=new MessageChannel;this.O=d.port1;this.O.onmessage=e=>this._OnMessageFromRuntime(e.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(e=>this.Ib(e));this.N=new self.fb(this);await O(this.N);"object"===typeof window.StatusBar&&window.StatusBar.hide();
"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.ub(a,d.port2):await this.tb(a,d.port2)}la(a){a=this.S.hasOwnProperty(a)?this.S[a]:a.endsWith("/workermain.js")&&this.S.hasOwnProperty("workermain.js")?this.S["workermain.js"]:"playable-ad"===this.a&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ha(a,d,e){if(a.startsWith("blob:"))return new Worker(a,e);if("cordova"===
this.a&&this.Z)return a=await this.ga(e.hc?a:this.ea+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),e);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),e)}return new Worker(a,e)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}Ja(a){var d=this.N;return{baseUrl:this.c,windowInnerWidth:this.o(),windowInnerHeight:this.m(),
devicePixelRatio:window.devicePixelRatio,isFullscreen:c.H(),projectData:a.wc,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.uc||"",exportType:a.$a,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.vc,jobScheduler:{inputPort:d.ya,outputPort:d.Ba,maxNumWorkers:d.$b},supportedAudioFormats:L,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ea+"opus.wasm.js",
opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ea+"opus.wasm.wasm",isFileProtocol:this.Z,isiOSCordova:this.eb(),isiOSWebView:this.ia(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async ub(a,d){var e=this.la(a.oc);this.Za=await this.ha(e,this.c,{type:"module",name:"Runtime",hc:!0});this.g=document.createElement("canvas");this.g.style.display="none";e=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let k=a.Fa||[],p=a.F;k=await Promise.all(k.map(m=>
this.v(m)));p=await Promise.all(p.map(m=>this.v(m)));if("cordova"===this.a)for(let m=0,q=a.fa.length;m<q;++m){const u=a.fa[m],H=u[0];if(H===a.Ea||"scriptsInEvents.js"===H||H.endsWith("/scriptsInEvents.js"))u[1]=await this.v(H)}this.Za.postMessage(Object.assign(this.Ja(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:k,engineScripts:p,projectScripts:a.fa,mainProjectScript:a.Ea,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,e,...P(this.N)]);this.Y=z.map(m=>
new m(this));this.Ia();self.c3_callFunction=(m,q)=>this.Ca.vb(m,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.ja("runtime","go-to-last-error-script"))}async tb(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.Y=z.map(m=>new m(this));this.Ia();var e=a.F.map(m=>"string"===typeof m?(new URL(m,this.c)).toString():m);Array.isArray(a.Fa)&&e.unshift(...a.Fa);e=await Promise.all(e.map(m=>this.v(m)));await Promise.all(e.map(m=>
h(m)));e=self.C3_ProjectScriptsStatus;const k=a.Ea,p=a.fa;for(let [m,q]of p)if(q||(q=m),m===k)try{q=await this.v(q),await h(q),"preview"!==this.a||e[m]||this.Qa(m,"main script did not run to completion")}catch(u){this.Qa(m,u)}else if("scriptsInEvents.js"===m||m.endsWith("/scriptsInEvents.js"))q=await this.v(q),await h(q);"preview"===this.a&&"object"!==typeof self.qc.sc?(this.W(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ja(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:A}),this.Ma(),this.za=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.za,a))}Qa(a,d){this.W();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ma(){this.W()}W(){const a=
window.ec;a&&(a.parentElement.removeChild(a),window.ec=null)}async zb(){const a=await Q(this.N);return{outputPort:a,transferables:[a]}}sb(){if(this.i)throw Error("not available in worker mode");return this.za}ja(a,d,e,k,p){this.O.postMessage({type:"event",component:a,handler:d,dispatchOpts:k||null,data:e,responseId:null},p)}gb(a,d){const e=F++,k=new Promise((p,m)=>{t.set(e,{resolve:p,reject:m})});this.O.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:e},
void 0);return k}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Eb(a);if("result"===d)this.Ob(a);else if("runtime-ready"===d)this.Pb();else if("alert-error"===d)this.W(),alert(a.message);else if("creating-runtime"===d)this.Ma();else throw Error(`unknown message '${d}'`);}Eb(a){const d=a.component,e=a.handler,k=a.data,p=a.responseId;if(a=D.get(d))if(a=a.get(e)){var m=null;try{m=a(k)}catch(q){console.error(`Exception in '${d}' handler '${e}':`,q);null!==p&&this.V(p,!1,""+q);
return}if(null===p)return m;m&&m.then?m.then(q=>this.V(p,!0,q)).catch(q=>{console.error(`Rejection from '${d}' handler '${e}':`,q);this.V(p,!1,""+q)}):this.V(p,!0,m)}else console.warn(`[DOM] No handler '${e}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}V(a,d,e){let k;e&&e.transferables&&(k=e.transferables);this.O.postMessage({type:"result",responseId:a,isOk:d,result:e},k)}Ob(a){const d=a.responseId,e=a.isOk;a=a.result;const k=t.get(d);e?k.resolve(a):k.reject(a);
t.delete(d)}b(a,d,e){let k=D.get(a);k||(k=new Map,D.set(a,k));if(k.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);k.set(d,e)}static T(a){if(z.includes(a))throw Error("DOM handler already added");z.push(a)}Ia(){for(const a of this.Y)if("runtime"===a.L){this.Ca=a;return}throw Error("cannot find runtime DOM handler");}Ib(a){this.ja("debugger","message",a)}Pb(){for(const a of this.Y)a.Ga()}static H(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
b)}static X(a){b=!!a}Ra(){-1===this.B&&this.Ya.length&&(this.B=requestAnimationFrame(this.bc))}lb(){-1!==this.B&&(cancelAnimationFrame(this.B),this.B=-1)}Lb(){this.B=-1;for(const a of this.Ya)a();this.Ra()}ua(){this.Ca.ua()}bb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}cb(a){return!this.bb(a)}async v(a){return"cordova"===this.a&&(a.startsWith("file:")||this.Z&&this.cb(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.ga(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async yb(a){const d=a.filename;switch(a.as){case "text":return await this.ab(d);case "buffer":return await this.ga(d);default:throw Error("unsupported type");}}Ha(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((e,k)=>{window.resolveLocalFileSystemURL(d,p=>{p.file(e,k)},k)})}async ab(a){a=await this.Ha(a);return await y(a)}ka(){if(C.length&&!(8<=x)){x++;var a=C.shift();this.ob(a.filename,a.mc,a.fc)}}ga(a){return new Promise((d,
e)=>{C.push({filename:a,mc:k=>{x--;this.ka();d(k)},fc:k=>{x--;this.ka();e(k)}});this.ka()})}async ob(a,d,e){try{const k=await this.Ha(a),p=await E(k);d(p)}catch(k){e(k)}}va(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async nb(){const a=[];for(const [d,e]of Object.entries(this.j))a.push(this.mb(d,e));await Promise.all(a)}async mb(a,
d){if("object"===typeof d)this.j[a]=new Blob([d.str],{type:d.type}),this.aa[a]=d.str;else{let e=await this.rb(d);e||(e=this.pb(d));this.j[a]=e}}async rb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}pb(a){a=this.Ub(a);return this.kb(a.data,a.jc)}Ub(a){var d=a.indexOf(",");if(0>
d)throw new URIError("expected comma in data: uri");var e=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const k=d[2];e="base64"===d[1]||"base64"===k?atob(e):decodeURIComponent(e);return{jc:a,data:e}}kb(a,d){var e=a.length;let k=e>>2,p=new Uint8Array(e),m=new Uint32Array(p.buffer,0,k),q,u;for(u=q=0;q<k;++q)m[q]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(e&=3;e--;)p[u]=a.charCodeAt(u),++u;return new Blob([p],{type:d})}}}"use strict";
{const f=self.l;function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),n={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},v={dispatchUserScriptEvent:!0},K={dispatchRuntimeEvent:!0};function w(b){return new Promise((c,a)=>{const d=document.createElement("link");d.onload=()=>c(d);d.onerror=e=>a(e);d.rel=
"stylesheet";d.href=b;document.head.appendChild(d)})}function L(b){return new Promise((c,a)=>{const d=new Image;d.onload=()=>c(d);d.onerror=e=>a(e);d.src=b})}async function y(b){b=URL.createObjectURL(b);try{return await L(b)}finally{URL.revokeObjectURL(b)}}function E(b){return new Promise((c,a)=>{let d=new FileReader;d.onload=e=>c(e.target.result);d.onerror=e=>a(e);d.readAsText(b)})}async function C(b,c,a){if(!/firefox/i.test(navigator.userAgent))return await y(b);var d=await E(b);d=(new DOMParser).parseFromString(d,
"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const k=e.getAttribute("width"),p=e.getAttribute("height");if(!k.includes("%")&&!p.includes("%"))return await y(b)}e.setAttribute("width",c+"px");e.setAttribute("height",a+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await y(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const z=new Set(["input",
"textarea","datalist","select"]),D=new Set(["canvas","body","html"]);function t(b){D.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function F(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await y(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,a,d,e){b=await C(b,c,a);const k=document.createElement("canvas");k.width=d;k.height=e;k.getContext("2d").drawImage(b,0,0,c,a);return k};let A=!1;document.addEventListener("pause",()=>A=!0);document.addEventListener("resume",()=>A=!1);function M(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}f.T(class extends self.G{constructor(b){super(b,"runtime");this.Wa=!0;this.C=-1;this.Da="any";this.Sa=this.Ta=!1;this.A=
this.R=this.s=null;this.ca=this.ba=0;b.b("canvas","update-size",d=>this.Rb(d));b.b("runtime","invoke-download",d=>this.Hb(d));b.b("runtime","raster-svg-image",d=>this.Mb(d));b.b("runtime","get-svg-image-size",d=>this.Fb(d));b.b("runtime","set-target-orientation",d=>this.Qb(d));b.b("runtime","register-sw",()=>this.Nb());b.b("runtime","post-to-debugger",d=>this.Oa(d));b.b("runtime","go-to-script",d=>this.Oa(d));b.b("runtime","before-start-ticking",()=>this.xb());b.b("runtime","debug-highlight",d=>this.Ab(d));
b.b("runtime","enable-device-orientation",()=>this.jb());b.b("runtime","enable-device-motion",()=>this.ib());b.b("runtime","add-stylesheet",d=>this.wb(d));b.b("runtime","alert",d=>this.na(d));b.b("runtime","hide-cordova-splash",()=>this.Gb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const e=d.target;c.has(e.tagName.toLowerCase())||x(e)||d.preventDefault()});const a=b.g;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",
t);a.addEventListener("selectstart",t);a.addEventListener("gesturehold",t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),a.addEventListener("pointerdown",t)):a.addEventListener("touchstart",t);this.P=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",F,{passive:!1});window.addEventListener("wheel",F,{passive:!1});window.addEventListener("resize",
()=>this.Sb());window.addEventListener("fullscreenchange",()=>this.I());window.addEventListener("webkitfullscreenchange",()=>this.I());window.addEventListener("mozfullscreenchange",()=>this.I());window.addEventListener("fullscreenerror",d=>this.oa(d));window.addEventListener("webkitfullscreenerror",d=>this.oa(d));window.addEventListener("mozfullscreenerror",d=>this.oa(d));b.ia()&&window.addEventListener("focusout",()=>{{const k=document.activeElement;if(k){var d=k.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));
d="textarea"===d?!0:"input"===d?e.has(k.type.toLowerCase()||"text"):x(k)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>this.Tb(d);this.Aa=new Set;this.ac=new WeakSet;this.Zb=!1}xb(){"cordova"===this.f.a?(document.addEventListener("pause",()=>this.ta(!0)),document.addEventListener("resume",()=>this.ta(!1))):document.addEventListener("visibilitychange",()=>this.ta(document.hidden));return{isSuspended:!(!document.hidden&&!A)}}Ga(){window.addEventListener("focus",()=>
this.K("window-focus"));window.addEventListener("blur",()=>{this.K("window-blur",{parentHasFocus:M()});this.P=0});window.addEventListener("focusin",c=>{c=c.target;(z.has(c.tagName.toLowerCase())||x(c))&&this.K("keyboard-blur")});window.addEventListener("keydown",c=>this.Na("keydown",c));window.addEventListener("keyup",c=>this.Na("keyup",c));window.addEventListener("dblclick",c=>this.qa("dblclick",c,n));window.addEventListener("wheel",c=>this.Jb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",
c=>{this.ma(c);this.J("pointerdown",c)}),this.f.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.R=new self.hb(()=>this.qb(),5),this.R.Va=!0,window.addEventListener("pointerrawupdate",c=>this.Kb(c))):window.addEventListener("pointermove",c=>this.J("pointermove",c)),window.addEventListener("pointerup",c=>this.J("pointerup",c)),window.addEventListener("pointercancel",c=>this.J("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ma(c);this.ra("pointerdown",c)}),
window.addEventListener("mousemove",c=>this.ra("pointermove",c)),window.addEventListener("mouseup",c=>this.ra("pointerup",c)),window.addEventListener("touchstart",c=>{this.ma(c);this.U("pointerdown",c)}),window.addEventListener("touchmove",c=>this.U("pointermove",c)),window.addEventListener("touchend",c=>this.U("pointerup",c)),window.addEventListener("touchcancel",c=>this.U("pointercancel",c)));const b=()=>this.ua();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);
window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}K(b,c){r(this,b,c||null,K)}o(){return this.f.o()}m(){return this.f.m()}Sb(){const b=this.o(),c=this.m();this.K("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.H()});this.f.ia()&&(-1!==this.C&&clearTimeout(this.C),this.Pa(b,c,0))}Vb(b,c,a){-1!==this.C&&clearTimeout(this.C);this.C=setTimeout(()=>this.Pa(b,c,a),48)}Pa(b,c,a){const d=
this.o(),e=this.m();this.C=-1;d!=b||e!=c?this.K("window-resize",{innerWidth:d,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.H()}):10>a&&this.Vb(d,e,a+1)}Qb(b){this.Da=b.targetOrientation}Wb(){const b=this.Da;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):
screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}I(){const b=f.H();b&&"any"!==this.Da&&this.Wb();r(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.m()})}oa(b){console.warn("[Construct 3] Fullscreen request failed: ",b);r(this,"fullscreenerror",{isFullscreen:f.H(),innerWidth:this.o(),
innerHeight:this.m()})}ta(b){b?this.f.lb():this.f.Ra();r(this,"visibilitychange",{hidden:b})}Na(b,c){"Backspace"===c.key&&t(c);const a=h.get(c.code)||c.code;B(this,b,{code:a,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},n)}Jb(b){r(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},n)}qa(b,c,
a){g(c)||B(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},a)}ra(b,c){if(!g(c)){var a=this.P;"pointerdown"===b&&0!==a?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");B(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:a,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||
0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},n);this.P=c.buttons;this.qa(c.type,c,v)}}J(b,c){if(this.R&&"pointermove"!==b){var a=this.R;a.M||(-1!==a.D&&(self.clearTimeout(a.D),a.D=-1),a.$=Date.now())}a=0;"mouse"===c.pointerType&&(a=this.P);B(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:a,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:(c.movementX||0)+this.ba,movementY:(c.movementY||
0)+this.ca,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},n);this.ca=this.ba=0;"mouse"===c.pointerType&&(a="mousemove","pointerdown"===b?a="mousedown":"pointerup"===b&&(a="mouseup"),this.qa(a,c,v),this.P=c.buttons)}Kb(b){this.A&&(this.ba+=this.A.movementX||0,this.ca+=this.A.movementY||0);this.A=b;b=this.R;if(-1===b.D){var c=Date.now(),a=c-b.$,d=b.Yb;a>=d&&b.Va?(b.$=c,b.M=
!0,b.Ua(),b.M=!1):b.D=self.setTimeout(b.cc,Math.max(d-a,4))}}qb(){this.J("pointermove",this.A);this.A=null}U(b,c){for(let a=0,d=c.changedTouches.length;a<d;++a){const e=c.changedTouches[a];B(this,b,{pointerId:e.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(e.radiusX||e.webkitRadiusX||0),height:2*(e.radiusY||e.webkitRadiusY||0),pressure:e.force||e.webkitForce||
0,tangentialPressure:0,tiltX:0,tiltY:0,twist:e.rotationAngle||0,timeStamp:c.timeStamp},n)}}ma(b){window!==window.top&&window.focus();this.La(b.target)&&document.activeElement&&!this.La(document.activeElement)&&document.activeElement.blur()}La(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}jb(){this.Ta||(this.Ta=!0,window.addEventListener("deviceorientation",b=>this.Cb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Db(b)))}ib(){this.Sa||
(this.Sa=!0,window.addEventListener("devicemotion",b=>this.Bb(b)))}Cb(b){r(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},n)}Db(b){r(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},n)}Bb(b){let c=null;var a=b.acceleration;a&&(c={x:a.x||0,y:a.y||0,z:a.z||0});
a=null;var d=b.accelerationIncludingGravity;d&&(a={x:d.x||0,y:d.y||0,z:d.z||0});d=null;const e=b.rotationRate;e&&(d={alpha:e.alpha||0,beta:e.beta||0,gamma:e.gamma||0});r(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:a,rotationRate:d,interval:b.interval,timeStamp:b.timeStamp},n)}Rb(b){const c=this.f.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.Wa&&(c.style.display="",this.Wa=!1)}Hb(b){const c=
b.url;b=b.filename;const a=document.createElement("a"),d=document.body;a.textContent=b;a.href=c;a.download=b;d.appendChild(a);a.click();d.removeChild(a)}async Mb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Fb(b){return await self.C3_GetSvgImageSize(b.blob)}async wb(b){await w(b.url)}ua(){var b=[...this.Aa];this.Aa.clear();
if(!this.Zb)for(const c of b)(b=c.play())&&b.catch(()=>{this.ac.has(c)||this.Aa.add(c)})}Gb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Ab(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var c=this.s;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.s&&(this.s.style.display=
"none")}Nb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Oa(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}vb(b,c){return this.f.gb(this.L,{name:b,params:c})}na(b){alert(b.message)}Tb(b){"entered-fullscreen"===b?(f.X(!0),this.I()):"exited-fullscreen"===b?(f.X(!1),this.I()):console.warn("Unknown wrapper message: ",b)}})}"use strict";
async function O(f){if(f.Xb)throw Error("already initialised");f.Xb=!0;var g=f.da.la("dispatchworker.js");f.xa=await f.da.ha(g,f.c,{name:"DispatchWorker"});g=new MessageChannel;f.ya=g.port1;f.xa.postMessage({type:"_init","in-port":g.port2},[g.port2]);f.Ba=await Q(f)}function P(f){return[f.ya,f.Ba]}
async function Q(f){const g=f.Xa.length;var h=f.da.la("jobworker.js");h=await f.da.ha(h,f.c,{name:"JobWorker"+g});const n=new MessageChannel,v=new MessageChannel;f.xa.postMessage({type:"_addJobWorker",port:n.port1},[n.port1]);h.postMessage({type:"init",number:g,"dispatch-port":n.port2,"output-port":v.port2},[n.port2,v.port2]);f.Xa.push(h);return v.port1}
self.fb=class{constructor(f){this.da=f;this.c=f.c;this.c="preview"===f.a?this.c+"workers/":this.c+f.ea;this.$b=Math.min(navigator.hardwareConcurrency||2,16);this.xa=null;this.Xa=[];this.Ba=this.ya=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.l({nc:!1,oc:"workermain.js",F:["scripts/c3runtime.js"],fa:[],Ea:"",kc:"scripts/",Fa:[],$a:"html5"}));"use strict";
async function R(f,g){g=g.type;let h=!0;0===g?h=await S():1===g&&(h=await T());r(f,"permission-result",{type:g,result:h})}async function S(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request orientation permission: ",f),!1}}
async function T(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request motion permission: ",f),!1}}self.l.T(class extends self.G{constructor(f){super(f,"touch");I(this,"request-permission",g=>R(this,g))}});"use strict";
function U(f){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(g=>r(f,"sw-message",g.data))}
function V(f){f=f.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(f).catch(g=>console.warn("[Construct 3] Failed to lock orientation: ",g));else try{let g=!1;screen.lockOrientation?g=screen.lockOrientation(f):screen.webkitLockOrientation?g=screen.webkitLockOrientation(f):screen.mozLockOrientation?g=screen.mozLockOrientation(f):screen.msLockOrientation&&(g=screen.msLockOrientation(f));g||console.warn("[Construct 3] Failed to lock orientation")}catch(g){console.warn("[Construct 3] Failed to lock orientation: ",
g)}}
self.l.T(class extends self.G{constructor(f){super(f,"browser");this.a="";J(this,[["get-initial-state",g=>this.pa(g)],["ready-for-sw-messages",()=>U(this)],["alert",g=>this.na(g)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",g=>this.sa(g)],["vibrate",g=>{navigator.vibrate&&navigator.vibrate(g.pattern)}],["lock-orientation",g=>V(g)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(g){}}],["navigate",g=>{var h=g.type;if("back"===h)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===h)window.history.forward();else if("reload"===h)location.reload();else if("url"===
h){h=g.url;const n=g.target;g=g.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):"preview"===g||"windows-webview2"===g?window.open(h,"_blank"):this.tc||(2===n?window.top.location=h:1===n?window.parent.location=h:window.location=h)}else"new-window"===h&&(h=g.url,g=g.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):window.open(h,g))}],["request-fullscreen",g=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.l.X(!0),
this.f.va({type:"set-fullscreen",fullscreen:!0});else{const h={navigationUI:"auto"};g=g.navUI;1===g?h.navigationUI="hide":2===g&&(h.navigationUI="show");g=document.documentElement;g.requestFullscreen?g.requestFullscreen(h):g.mozRequestFullScreen?g.mozRequestFullScreen(h):g.msRequestFullscreen?g.msRequestFullscreen(h):g.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):g.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.l.X(!1),this.f.va({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",g=>{location.hash=g.hash}]]);window.addEventListener("online",()=>{r(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{r(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{r(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{r(this,"backbutton")})}pa(f){this.a=f.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}na(f){alert(f.message)}sa(f){f=f.isFocus;if("nwjs"===this.a){const g="nwjs"===this.a?nw.Window.get():null;f?g.focus():g.blur()}else f?window.focus():window.blur()}});"use strict";
async function W(f){if(!f.u)try{f.u=await navigator.wakeLock.request("screen"),f.u.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");f.u=null;r(f,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),r(f,"wake-lock-acquired")}catch(g){console.warn("[Construct 3] Failed to acquire screen wake lock: ",g),r(f,"wake-lock-error")}}
function X(){var f=document.body;const g=f.style;g.setProperty("--temp-sai-top","env(safe-area-inset-top)");g.setProperty("--temp-sai-right","env(safe-area-inset-right)");g.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");g.setProperty("--temp-sai-left","env(safe-area-inset-left)");f=getComputedStyle(f);f=[f.getPropertyValue("--temp-sai-top"),f.getPropertyValue("--temp-sai-right"),f.getPropertyValue("--temp-sai-bottom"),f.getPropertyValue("--temp-sai-left")].map(h=>{h=parseInt(h,10);
return isFinite(h)?h:0});g.removeProperty("--temp-sai-top");g.removeProperty("--temp-sai-right");g.removeProperty("--temp-sai-bottom");g.removeProperty("--temp-sai-left");return f}
self.l.T(class extends self.G{constructor(f){super(f,"platform-info");J(this,[["get-initial-state",()=>this.pa()],["request-wake-lock",()=>W(this)],["release-wake-lock",()=>{this.u&&(this.u.release(),this.u=null)}]]);window.addEventListener("resize",()=>{r(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:X()})});this.u=null}pa(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:X(),supportsWakeLock:!!navigator.wakeLock}}});
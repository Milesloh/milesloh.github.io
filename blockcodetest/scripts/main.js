'use strict';function t(h,f,e,k){h.f.fa(h.I,f,e,k,void 0)}function y(h,f,e,k){h.f.j?t(h,f,e,k):h.f.sb()._OnMessageFromDOM({type:"event",component:h.I,handler:f,dispatchOpts:k||null,data:e,responseId:null})}function I(h,f,e){h.f.b(h.I,f,e)}function J(h,f){for(const [e,k]of f)I(h,e,k)}window.da=class{constructor(h,f){this.f=h;this.I=f}Ca(){}};
window.hb=class{constructor(h,f){this.Ta=h;this.Zb=f;this.A=-1;this.X=-Infinity;this.dc=()=>{this.A=-1;this.X=Date.now();this.J=!0;this.Ta();this.J=!1};this.Ua=this.J=!1}};"use strict";function L(h,f){const e=f.elementId,k=h.ba(e,f);h.h.set(e,k);f.isVisible||(k.style.display="none");f=h.ha(k);f.addEventListener("focus",()=>{M(h,"elem-focused",e)});f.addEventListener("blur",()=>{M(h,"elem-blurred",e)});h.V&&document.body.appendChild(k)}
function N(h,f,e){I(h,f,k=>{const n=h.h.get(k.elementId);return e(n,k)})}function M(h,f,e,k){k||(k={});k.elementId=e;t(h,f,k)}function O(h,f,e,k){k||(k={});k.elementId=e;y(h,f,k)}
window.Ea=class extends self.da{constructor(h,f){super(h,f);this.h=new Map;this.V=!0;J(this,[["create",e=>L(this,e)],["destroy",e=>{{e=e.elementId;const k=this.h.get(e);this.V&&k.parentElement.removeChild(k);this.h.delete(e)}}],["set-visible",e=>{this.V&&(this.h.get(e.elementId).style.display=e.isVisible?"":"none")}],["update-position",e=>{if(this.V){var k=this.h.get(e.elementId);k.style.left=e.left+"px";k.style.top=e.top+"px";k.style.width=e.width+"px";k.style.height=e.height+"px";e=e.fontSize;null!==
e&&(k.style.fontSize=e+"em")}}],["update-state",e=>{{const k=this.h.get(e.elementId);this.D(k,e)}}],["focus",e=>this.pa(e)],["set-css-style",e=>{this.h.get(e.elementId).style[e.prop]=e.val}],["set-attribute",e=>{this.h.get(e.elementId).setAttribute(e.name,e.val)}],["remove-attribute",e=>{this.h.get(e.elementId).removeAttribute(e.name)}]]);N(this,"get-element",e=>e)}ba(){throw Error("required override");}D(){throw Error("required override");}ha(h){return h}pa(h){const f=this.ha(this.h.get(h.elementId));
h.focus?f.focus():f.blur()}};"use strict";
{const h=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let f=0;function e(c){const a=document.createElement("script");a.async=!1;a.type="module";return c.ic?new Promise(d=>{const g="c3_resolve_"+f;++f;self[g]=d;a.textContent=c.lc+`\n\nself["${g}"]();`;document.head.appendChild(a)}):new Promise((d,g)=>{a.onload=d;a.onerror=g;a.src=c;document.head.appendChild(a)})}let k=!1,n=!1;function z(){if(!k){try{new Worker("blob://",{get type(){n=!0}})}catch(c){}k=!0}return n}let u=
new Audio;const K={"audio/webm; codecs=opus":!!u.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!u.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!u.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!u.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!u.canPlayType("audio/mp4"),"audio/mpeg":!!u.canPlayType("audio/mpeg")};u=null;async function A(c){c=await F(c);return(new TextDecoder("utf-8")).decode(c)}function F(c){return new Promise((a,
d)=>{const g=new FileReader;g.onload=m=>a(m.target.result);g.onerror=m=>d(m);g.readAsArrayBuffer(c)})}const D=[];let x=0;window.RealFile=window.File;const B=[],E=new Map,v=new Map;let G=0;const C=[];self.runOnStartup=function(c){if("function"!==typeof c)throw Error("runOnStartup called without a function");C.push(c)};const H=new Set(["cordova","playable-ad","instant-games"]);let b=!1;window.l=class c{constructor(a){this.j=a.nc;this.L=null;this.c="";this.$=a.kc;this.O={};this.wa=this.Ya=null;this.W=
[];this.K=this.g=this.za=null;this.u=-1;this.cc=()=>this.Lb();this.Xa=[];this.a=a.Za;!this.j||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&z()||(this.j=!1);H.has(this.a)&&this.j&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is currently disabled in WebViews. Reverting to DOM mode."),this.j=!1);this.Y=this.i=null;"html5"!==this.a&&"playable-ad"!==this.a||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
this.b("runtime","cordova-fetch-local-file",d=>this.yb(d));this.b("runtime","create-job-worker",()=>this.zb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ja(a)):this.Ja(a)}Fa(){return h&&"cordova"===this.a}ea(){return h&&H.has(this.a)||navigator.standalone}async Ja(a){"macos-wkwebview"===this.a&&this.sa({type:"ready"});if("playable-ad"===this.a){this.i=self.c3_base64files;this.Y={};await this.nb();for(let g=0,m=a.B.length;g<m;++g){var d=a.B[g].toLowerCase();this.Y.hasOwnProperty(d)?
a.B[g]={ic:!0,lc:this.Y[d]}:this.i.hasOwnProperty(d)&&(a.B[g]=URL.createObjectURL(this.i[d]))}}a.ec?this.c=a.ec:(d=location.origin,this.c=("null"===d?"file:///":d)+location.pathname,d=this.c.lastIndexOf("/"),-1!==d&&(this.c=this.c.substr(0,d+1)));a.pc&&(this.O=a.pc);d=new MessageChannel;this.L=d.port1;this.L.onmessage=g=>this._OnMessageFromRuntime(g.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(g=>this.Ib(g));this.K=new self.fb(this);await P(this.K);"object"===typeof window.StatusBar&&
window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.j?await this.ub(a,d.port2):await this.tb(a,d.port2)}ia(a){a=this.O.hasOwnProperty(a)?this.O[a]:a.endsWith("/workermain.js")&&this.O.hasOwnProperty("workermain.js")?this.O["workermain.js"]:"playable-ad"===this.a&&this.i.hasOwnProperty(a.toLowerCase())?this.i[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ca(a,d,g){if(a.startsWith("blob:"))return new Worker(a,
g);if(this.Fa()&&"file:"===location.protocol)return a=await this.aa(this.$+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),g);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(a,g)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}Ha(a){var d=this.K;return{baseUrl:this.c,windowInnerWidth:this.o(),
windowInnerHeight:this.m(),devicePixelRatio:window.devicePixelRatio,isFullscreen:c.C(),projectData:a.vc,previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.tc||"",exportType:a.Za,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.uc,jobScheduler:{inputPort:d.ua,outputPort:d.ya,maxNumWorkers:d.ac},supportedAudioFormats:K,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.$+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.$+"opus.wasm.wasm",isiOSCordova:this.Fa(),isiOSWebView:this.ea(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async ub(a,d){var g=this.ia(a.oc);this.Ya=await this.ca(g,this.c,{type:"module",name:"Runtime"});this.g=document.createElement("canvas");this.g.style.display="none";g=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Ya.postMessage(Object.assign(this.Ha(a),
{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:g,workerDependencyScripts:a.Ba||[],engineScripts:a.B,projectScripts:a.ab,mainProjectScript:a.$a,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,g,...Q(this.K)]);this.W=B.map(m=>new m(this));this.Ga();self.c3_callFunction=(m,q)=>this.za.vb(m,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.fa("runtime","go-to-last-error-script"))}async tb(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);
window.c3canvas=this.g;this.W=B.map(p=>new p(this));this.Ga();var g=a.B.map(p=>"string"===typeof p?(new URL(p,this.c)).toString():p);Array.isArray(a.Ba)&&g.unshift(...a.Ba);g=await Promise.all(g.map(p=>this.ka(p)));await Promise.all(g.map(p=>e(p)));g=self.C3_ProjectScriptsStatus;const m=a.$a,q=a.ab;for(let [p,r]of q)if(r||(r=p),p===m)try{r=await this.ka(r),await e(r),"preview"!==this.a||g[p]||this.Pa(p,"main script did not run to completion")}catch(w){this.Pa(p,w)}else if("scriptsInEvents.js"===p||
p.endsWith("/scriptsInEvents.js"))r=await this.ka(r),await e(r);"preview"===this.a&&"object"!==typeof self.qc.rc?(this.T(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ha(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:C}),this.La(),this.wa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.wa,
a))}Pa(a,d){this.T();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}La(){this.T()}T(){const a=window.fc;a&&(a.parentElement.removeChild(a),window.fc=null)}async zb(){const a=await R(this.K);return{outputPort:a,transferables:[a]}}sb(){if(this.j)throw Error("not available in worker mode");return this.wa}fa(a,d,g,m,q){this.L.postMessage({type:"event",
component:a,handler:d,dispatchOpts:m||null,data:g,responseId:null},q)}gb(a,d){const g=G++,m=new Promise((q,p)=>{v.set(g,{resolve:q,reject:p})});this.L.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:g},void 0);return m}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Eb(a);if("result"===d)this.Ob(a);else if("runtime-ready"===d)this.Pb();else if("alert-error"===d)this.T(),alert(a.message);else if("creating-runtime"===d)this.La();
else throw Error(`unknown message '${d}'`);}Eb(a){const d=a.component,g=a.handler,m=a.data,q=a.responseId;if(a=E.get(d))if(a=a.get(g)){var p=null;try{p=a(m)}catch(r){console.error(`Exception in '${d}' handler '${g}':`,r);null!==q&&this.S(q,!1,""+r);return}if(null===q)return p;p&&p.then?p.then(r=>this.S(q,!0,r)).catch(r=>{console.error(`Rejection from '${d}' handler '${g}':`,r);this.S(q,!1,""+r)}):this.S(q,!0,p)}else console.warn(`[DOM] No handler '${g}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}S(a,
d,g){let m;g&&g.transferables&&(m=g.transferables);this.L.postMessage({type:"result",responseId:a,isOk:d,result:g},m)}Ob(a){const d=a.responseId,g=a.isOk;a=a.result;const m=v.get(d);g?m.resolve(a):m.reject(a);v.delete(d)}b(a,d,g){let m=E.get(a);m||(m=new Map,E.set(a,m));if(m.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);m.set(d,g)}static P(a){if(B.includes(a))throw Error("DOM handler already added");B.push(a)}Ga(){for(const a of this.W)if("runtime"===a.I){this.za=a;return}throw Error("cannot find runtime DOM handler");
}Ib(a){this.fa("debugger","message",a)}Pb(){for(const a of this.W)a.Ca()}static C(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||b)}static U(a){b=!!a}Qa(){-1===this.u&&this.Xa.length&&(this.u=requestAnimationFrame(this.cc))}lb(){-1!==this.u&&(cancelAnimationFrame(this.u),this.u=-1)}Lb(){this.u=-1;for(const a of this.Xa)a();this.Qa()}ra(){this.za.ra()}cb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}eb(a){return!this.cb(a)}async ka(a){return"cordova"===
this.a&&(a.startsWith("file:")||"file:"===location.protocol&&this.eb(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.aa(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async yb(a){const d=a.filename;switch(a.as){case "text":return await this.bb(d);case "buffer":return await this.aa(d);default:throw Error("unsupported type");}}Da(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((g,m)=>{window.resolveLocalFileSystemURL(d,
q=>{q.file(g,m)},m)})}async bb(a){a=await this.Da(a);return await A(a)}ga(){if(D.length&&!(8<=x)){x++;var a=D.shift();this.ob(a.filename,a.mc,a.hc)}}aa(a){return new Promise((d,g)=>{D.push({filename:a,mc:m=>{x--;this.ga();d(m)},hc:m=>{x--;this.ga();g(m)}});this.ga()})}async ob(a,d,g){try{const m=await this.Da(a),q=await F(m);d(q)}catch(m){g(m)}}sa(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));
else throw Error("cannot send wrapper message");}async nb(){const a=[];for(const [d,g]of Object.entries(this.i))a.push(this.mb(d,g));await Promise.all(a)}async mb(a,d){if("object"===typeof d)this.i[a]=new Blob([d.str],{type:d.type}),this.Y[a]=d.str;else{let g=await this.rb(d);g||(g=this.pb(d));this.i[a]=g}}async rb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
d),null}}pb(a){a=this.Vb(a);return this.kb(a.data,a.jc)}Vb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var g=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const m=d[2];g="base64"===d[1]||"base64"===m?atob(g):decodeURIComponent(g);return{jc:a,data:g}}kb(a,d){var g=a.length;let m=g>>2,q=new Uint8Array(g),p=new Uint32Array(q.buffer,0,m),r,w;for(w=r=0;r<m;++r)p[r]=a.charCodeAt(w++)|a.charCodeAt(w++)<<8|a.charCodeAt(w++)<<16|a.charCodeAt(w++)<<24;for(g&=
3;g--;)q[w]=a.charCodeAt(w),++w;return new Blob([q],{type:d})}}}"use strict";
{const h=self.l;function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const e=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),k={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},n={dispatchUserScriptEvent:!0},z={dispatchRuntimeEvent:!0};function u(b){return new Promise((c,a)=>{const d=document.createElement("link");d.onload=()=>c(d);d.onerror=g=>a(g);d.rel=
"stylesheet";d.href=b;document.head.appendChild(d)})}function K(b){return new Promise((c,a)=>{const d=new Image;d.onload=()=>c(d);d.onerror=g=>a(g);d.src=b})}async function A(b){b=URL.createObjectURL(b);try{return await K(b)}finally{URL.revokeObjectURL(b)}}function F(b){return new Promise((c,a)=>{let d=new FileReader;d.onload=g=>c(g.target.result);d.onerror=g=>a(g);d.readAsText(b)})}async function D(b,c,a){if(!/firefox/i.test(navigator.userAgent))return await A(b);var d=await F(b);d=(new DOMParser).parseFromString(d,
"image/svg+xml");const g=d.documentElement;if(g.hasAttribute("width")&&g.hasAttribute("height")){const m=g.getAttribute("width"),q=g.getAttribute("height");if(!m.includes("%")&&!q.includes("%"))return await A(b)}g.setAttribute("width",c+"px");g.setAttribute("height",a+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await A(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const B=new Set(["input",
"textarea","datalist","select"]),E=new Set(["canvas","body","html"]);function v(b){E.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function G(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await A(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,a,d,g){b=await D(b,c,a);const m=document.createElement("canvas");m.width=d;m.height=g;m.getContext("2d").drawImage(b,0,0,c,a);return m};let C=!1;document.addEventListener("pause",()=>C=!0);document.addEventListener("resume",()=>C=!1);function H(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}h.P(class extends self.da{constructor(b){super(b,"runtime");this.Va=!0;this.v=-1;this.Aa="any";this.Ra=this.Sa=!1;this.va=
this.N=this.s=null;b.b("canvas","update-size",d=>this.Sb(d));b.b("runtime","invoke-download",d=>this.Hb(d));b.b("runtime","raster-svg-image",d=>this.Mb(d));b.b("runtime","get-svg-image-size",d=>this.Fb(d));b.b("runtime","set-target-orientation",d=>this.Rb(d));b.b("runtime","register-sw",()=>this.Nb());b.b("runtime","post-to-debugger",d=>this.Na(d));b.b("runtime","go-to-script",d=>this.Na(d));b.b("runtime","before-start-ticking",()=>this.xb());b.b("runtime","debug-highlight",d=>this.Ab(d));b.b("runtime",
"enable-device-orientation",()=>this.jb());b.b("runtime","enable-device-motion",()=>this.ib());b.b("runtime","add-stylesheet",d=>this.wb(d));b.b("runtime","alert",d=>this.la(d));b.b("runtime","hide-cordova-splash",()=>this.Gb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const g=d.target;c.has(g.tagName.toLowerCase())||x(g)||d.preventDefault()});const a=b.g;window.addEventListener("selectstart",v);window.addEventListener("gesturehold",v);a.addEventListener("selectstart",
v);a.addEventListener("gesturehold",v);window.addEventListener("touchstart",v,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",v,{passive:!1}),a.addEventListener("pointerdown",v)):a.addEventListener("touchstart",v);this.M=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",G,{passive:!1});window.addEventListener("wheel",G,{passive:!1});window.addEventListener("resize",()=>this.Tb());window.addEventListener("fullscreenchange",
()=>this.F());window.addEventListener("webkitfullscreenchange",()=>this.F());window.addEventListener("mozfullscreenchange",()=>this.F());window.addEventListener("fullscreenerror",d=>this.ma(d));window.addEventListener("webkitfullscreenerror",d=>this.ma(d));window.addEventListener("mozfullscreenerror",d=>this.ma(d));b.ea()&&window.addEventListener("focusout",()=>{{const m=document.activeElement;if(m){var d=m.tagName.toLowerCase();var g=new Set("email number password search tel text url".split(" "));
d="textarea"===d?!0:"input"===d?g.has(m.type.toLowerCase()||"text"):x(m)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>this.Ub(d);this.xa=new Set;this.bc=new WeakSet;this.$b=!1}xb(){"cordova"===this.f.a?(document.addEventListener("pause",()=>this.qa(!0)),document.addEventListener("resume",()=>this.qa(!1))):document.addEventListener("visibilitychange",()=>this.qa(document.hidden));return{isSuspended:!(!document.hidden&&!C)}}Ca(){window.addEventListener("focus",()=>
this.H("window-focus"));window.addEventListener("blur",()=>{this.H("window-blur",{parentHasFocus:H()});this.M=0});window.addEventListener("focusin",c=>{c=c.target;(B.has(c.tagName.toLowerCase())||x(c))&&this.H("keyboard-blur")});window.addEventListener("keydown",c=>this.Ma("keydown",c));window.addEventListener("keyup",c=>this.Ma("keyup",c));window.addEventListener("dblclick",c=>this.na("dblclick",c,k));window.addEventListener("wheel",c=>this.Jb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",
c=>{this.ja(c);this.G("pointerdown",c)}),this.f.j&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.N=new self.hb(()=>this.qb(),5),this.N.Ua=!0,window.addEventListener("pointerrawupdate",c=>this.Kb(c))):window.addEventListener("pointermove",c=>this.G("pointermove",c)),window.addEventListener("pointerup",c=>this.G("pointerup",c)),window.addEventListener("pointercancel",c=>this.G("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ja(c);this.oa("pointerdown",c)}),
window.addEventListener("mousemove",c=>this.oa("pointermove",c)),window.addEventListener("mouseup",c=>this.oa("pointerup",c)),window.addEventListener("touchstart",c=>{this.ja(c);this.R("pointerdown",c)}),window.addEventListener("touchmove",c=>this.R("pointermove",c)),window.addEventListener("touchend",c=>this.R("pointerup",c)),window.addEventListener("touchcancel",c=>this.R("pointercancel",c)));const b=()=>this.ra();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);
window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}H(b,c){t(this,b,c||null,z)}o(){return this.f.o()}m(){return this.f.m()}Tb(){const b=this.o(),c=this.m();this.H("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:h.C()});this.f.ea()&&(-1!==this.v&&clearTimeout(this.v),this.Oa(b,c,0))}Wb(b,c,a){-1!==this.v&&clearTimeout(this.v);this.v=setTimeout(()=>this.Oa(b,c,a),48)}Oa(b,c,a){const d=
this.o(),g=this.m();this.v=-1;d!=b||g!=c?this.H("window-resize",{innerWidth:d,innerHeight:g,devicePixelRatio:window.devicePixelRatio,isFullscreen:h.C()}):10>a&&this.Wb(d,g,a+1)}Rb(b){this.Aa=b.targetOrientation}Xb(){const b=this.Aa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):
screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}F(){const b=h.C();b&&"any"!==this.Aa&&this.Xb();t(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.m()})}ma(b){console.warn("[Construct 3] Fullscreen request failed: ",b);t(this,"fullscreenerror",{isFullscreen:h.C(),innerWidth:this.o(),
innerHeight:this.m()})}qa(b){b?this.f.lb():this.f.Qa();t(this,"visibilitychange",{hidden:b})}Ma(b,c){"Backspace"===c.key&&v(c);const a=e.get(c.code)||c.code;y(this,b,{code:a,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},k)}Jb(b){t(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},k)}na(b,c,
a){f(c)||y(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,timeStamp:c.timeStamp},a)}oa(b,c){if(!f(c)){var a=this.M;"pointerdown"===b&&0!==a?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");y(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:a,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},
k);this.M=c.buttons;this.na(c.type,c,n)}}G(b,c){if(this.N&&"pointermove"!==b){var a=this.N;a.J||(-1!==a.A&&(self.clearTimeout(a.A),a.A=-1),a.X=Date.now())}a=0;"mouse"===c.pointerType&&(a=this.M);y(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:a,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,
twist:c.twist||0,timeStamp:c.timeStamp},k);"mouse"===c.pointerType&&(a="mousemove","pointerdown"===b?a="mousedown":"pointerup"===b&&(a="mouseup"),this.na(a,c,n),this.M=c.buttons)}Kb(b){this.va=b;b=this.N;if(-1===b.A){var c=Date.now(),a=c-b.X,d=b.Zb;a>=d&&b.Ua?(b.X=c,b.J=!0,b.Ta(),b.J=!1):b.A=self.setTimeout(b.dc,Math.max(d-a,4))}}qb(){this.G("pointermove",this.va);this.va=null}R(b,c){for(let a=0,d=c.changedTouches.length;a<d;++a){const g=c.changedTouches[a];y(this,b,{pointerId:g.identifier,pointerType:"touch",
button:0,buttons:0,lastButtons:0,clientX:g.clientX,clientY:g.clientY,pageX:g.pageX,pageY:g.pageY,width:2*(g.radiusX||g.webkitRadiusX||0),height:2*(g.radiusY||g.webkitRadiusY||0),pressure:g.force||g.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:g.rotationAngle||0,timeStamp:c.timeStamp},k)}}ja(b){window!==window.top&&window.focus();this.Ka(b.target)&&document.activeElement&&!this.Ka(document.activeElement)&&document.activeElement.blur()}Ka(b){return!b||b===document||b===window||b===document.body||
"canvas"===b.tagName.toLowerCase()}jb(){this.Sa||(this.Sa=!0,window.addEventListener("deviceorientation",b=>this.Cb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Db(b)))}ib(){this.Ra||(this.Ra=!0,window.addEventListener("devicemotion",b=>this.Bb(b)))}Cb(b){t(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},k)}Db(b){t(this,
"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},k)}Bb(b){let c=null;var a=b.acceleration;a&&(c={x:a.x||0,y:a.y||0,z:a.z||0});a=null;var d=b.accelerationIncludingGravity;d&&(a={x:d.x||0,y:d.y||0,z:d.z||0});d=null;const g=b.rotationRate;g&&(d={alpha:g.alpha||0,beta:g.beta||0,gamma:g.gamma||0});t(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:a,rotationRate:d,interval:b.interval,timeStamp:b.timeStamp},k)}Sb(b){const c=
this.f.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.Va&&(c.style.display="",this.Va=!1)}Hb(b){const c=b.url;b=b.filename;const a=document.createElement("a"),d=document.body;a.textContent=b;a.href=c;a.download=b;d.appendChild(a);a.click();d.removeChild(a)}async Mb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,
c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Fb(b){return await self.C3_GetSvgImageSize(b.blob)}async wb(b){await u(b.url)}ra(){var b=[...this.xa];this.xa.clear();if(!this.$b)for(const c of b)(b=c.play())&&b.catch(()=>{this.bc.has(c)||this.xa.add(c)})}Gb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Ab(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var c=
this.s;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.s&&(this.s.style.display="none")}Nb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Na(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}vb(b,c){return this.f.gb(this.I,{name:b,params:c})}la(b){alert(b.message)}Ub(b){"entered-fullscreen"===b?(h.U(!0),this.F()):"exited-fullscreen"===b?(h.U(!1),this.F()):
console.warn("Unknown wrapper message: ",b)}})}"use strict";async function P(h){if(h.Yb)throw Error("already initialised");h.Yb=!0;var f=h.Z.ia("dispatchworker.js");h.ta=await h.Z.ca(f,h.c,{name:"DispatchWorker"});f=new MessageChannel;h.ua=f.port1;h.ta.postMessage({type:"_init","in-port":f.port2},[f.port2]);h.ya=await R(h)}function Q(h){return[h.ua,h.ya]}
async function R(h){const f=h.Wa.length;var e=h.Z.ia("jobworker.js");e=await h.Z.ca(e,h.c,{name:"JobWorker"+f});const k=new MessageChannel,n=new MessageChannel;h.ta.postMessage({type:"_addJobWorker",port:k.port1},[k.port1]);e.postMessage({type:"init",number:f,"dispatch-port":k.port2,"output-port":n.port2},[k.port2,n.port2]);h.Wa.push(e);return n.port1}
self.fb=class{constructor(h){this.Z=h;this.c=h.c;this.c="preview"===h.a?this.c+"c3/workers/":this.c+h.$;this.ac=Math.min(navigator.hardwareConcurrency||2,16);this.ta=null;this.Wa=[];this.ya=this.ua=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.l({nc:!0,oc:"workermain.js",B:["scripts/c3runtime.js"],ab:[],$a:"",kc:"scripts/",Ba:[],Za:"html5"}));"use strict";
{function h(f){f.stopPropagation()}self.l.P(class extends self.Ea{constructor(f){super(f,"button")}ba(f,e){const k=document.createElement("input");var n=k;e.isCheckbox?(k.type="checkbox",n=document.createElement("label"),n.appendChild(k),n.appendChild(document.createTextNode("")),n.style.fontFamily="sans-serif",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.display="inline-block",n.style.color="black"):k.type="button";n.style.position="absolute";n.addEventListener("touchstart",
h);n.addEventListener("touchmove",h);n.addEventListener("touchend",h);n.addEventListener("mousedown",h);n.addEventListener("mouseup",h);n.addEventListener("keydown",h);n.addEventListener("keyup",h);k.addEventListener("click",()=>O(this,"click",f,{isChecked:k.checked}));e.id&&(k.id=e.id);this.D(n,e);return n}Ia(f){return"input"===f.tagName.toLowerCase()?f:f.firstChild}ha(f){return this.Ia(f)}D(f,e){const k=this.Ia(f);k.checked=e.isChecked;k.disabled=!e.isEnabled;f.title=e.title;f===k?k.value=e.text:
f.lastChild.textContent=e.text}})}"use strict";function S(h){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(f=>t(h,"sw-message",f.data))}
function T(h){h=h.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(h).catch(f=>console.warn("[Construct 3] Failed to lock orientation: ",f));else try{let f=!1;screen.lockOrientation?f=screen.lockOrientation(h):screen.webkitLockOrientation?f=screen.webkitLockOrientation(h):screen.mozLockOrientation?f=screen.mozLockOrientation(h):screen.msLockOrientation&&(f=screen.msLockOrientation(h));f||console.warn("[Construct 3] Failed to lock orientation")}catch(f){console.warn("[Construct 3] Failed to lock orientation: ",
f)}}
self.l.P(class extends self.da{constructor(h){super(h,"browser");this.a="";J(this,[["get-initial-state",f=>{this.a=f.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>S(this)],
["alert",f=>this.la(f)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",f=>this.pa(f)],["vibrate",f=>{navigator.vibrate&&navigator.vibrate(f.pattern)}],["lock-orientation",f=>T(f)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(f){}}],["navigate",f=>{var e=f.type;if("back"===e)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===e)window.history.forward();else if("reload"===e)location.reload();else if("url"===e){e=f.url;var k=f.target;f=f.exportType;"windows-uwp"===f&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):"preview"===f||"windows-webview2"===f?window.open(e,"_blank"):this.sc||(2===k?window.top.location=e:1===k?window.parent.location=e:window.location=e)}else"new-window"===e&&(e=f.url,k=f.tag,"windows-uwp"===f.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):window.open(e,k))}],
["request-fullscreen",f=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.l.U(!0),this.f.sa({type:"set-fullscreen",fullscreen:!0});else{const e={navigationUI:"auto"};f=f.navUI;1===f?e.navigationUI="hide":2===f&&(e.navigationUI="show");f=document.documentElement;f.requestFullscreen?f.requestFullscreen(e):f.mozRequestFullScreen?f.mozRequestFullScreen(e):f.msRequestFullscreen?f.msRequestFullscreen(e):f.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):
f.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.l.U(!1),this.f.sa({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",f=>{location.hash=f.hash}]]);window.addEventListener("online",()=>{t(this,"online-state",
{isOnline:!0})});window.addEventListener("offline",()=>{t(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{t(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{t(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",f=>{f.handled=!0;t(this,"backbutton")})}la(h){alert(h.message)}pa(h){h=h.isFocus;if("nwjs"===this.a){const f="nwjs"===this.a?
nw.Window.get():null;h?f.focus():f.blur()}else h?window.focus():window.blur()}});"use strict";
{function h(e){e.stopPropagation()}function f(e){13!==e.which&&27!==e.which&&e.stopPropagation()}self.l.P(class extends self.Ea{constructor(e){super(e,"text-input");N(this,"scroll-to-bottom",k=>this.Qb(k))}ba(e,k){let n;const z=k.type;"textarea"===z?(n=document.createElement("textarea"),n.style.resize="none"):(n=document.createElement("input"),n.type=z);n.style.position="absolute";n.autocomplete="off";n.addEventListener("touchstart",h);n.addEventListener("touchmove",h);n.addEventListener("touchend",
h);n.addEventListener("mousedown",h);n.addEventListener("mouseup",h);n.addEventListener("keydown",f);n.addEventListener("keyup",f);n.addEventListener("click",u=>{u.stopPropagation();O(this,"click",e)});n.addEventListener("dblclick",u=>{u.stopPropagation();O(this,"dblclick",e)});n.addEventListener("input",()=>M(this,"change",e,{text:n.value}));k.id&&(n.id=k.id);this.D(n,k);return n}D(e,k){e.value=k.text;e.placeholder=k.placeholder;e.title=k.title;e.disabled=!k.isEnabled;e.readOnly=k.isReadOnly;e.spellcheck=
k.spellCheck;k=k.maxLength;0>k?e.removeAttribute("maxlength"):e.setAttribute("maxlength",k)}Qb(e){e.scrollTop=e.scrollHeight}})};

'use strict';function q(g,f,e,k){g.f.da(g.G,f,e,k,void 0)}function y(g,f,e,k){g.f.l?q(g,f,e,k):g.f.sb()._OnMessageFromDOM({type:"event",component:g.G,handler:f,dispatchOpts:k||null,data:e,responseId:null})}function G(g,f,e){g.f.a(g.G,f,e)}function H(g,f){for(const [e,k]of f)G(g,e,k)}window.P=class{constructor(g,f){this.f=g;this.G=f}Aa(){}};
window.hb=class{constructor(g,f){this.Sa=g;this.Yb=f;this.A=-1;this.X=-Infinity;this.cc=()=>{this.A=-1;this.X=Date.now();this.H=!0;this.Sa();this.H=!1};this.Ta=this.H=!1}};"use strict";function J(g,f){const e=f.elementId,k=g.Ca(e,f);g.h.set(e,k);f.isVisible||(k.style.display="none");k.addEventListener("focus",()=>{K(g,"elem-focused",e)});k.addEventListener("blur",()=>{K(g,"elem-blurred",e)});g.V&&document.body.appendChild(k)}
function L(g,f,e){G(g,f,k=>{const m=g.h.get(k.elementId);return e(m,k)})}function K(g,f,e,k){k||(k={});k.elementId=e;q(g,f,k)}function M(g,f,e){var k;k||(k={});k.elementId=e;y(g,f,k)}
window.bb=class extends self.P{constructor(g,f){super(g,f);this.h=new Map;this.V=!0;H(this,[["create",e=>J(this,e)],["destroy",e=>{{e=e.elementId;const k=this.h.get(e);this.V&&k.parentElement.removeChild(k);this.h.delete(e)}}],["set-visible",e=>{this.V&&(this.h.get(e.elementId).style.display=e.isVisible?"":"none")}],["update-position",e=>{if(this.V){var k=this.h.get(e.elementId);k.style.left=e.left+"px";k.style.top=e.top+"px";k.style.width=e.width+"px";k.style.height=e.height+"px";e=e.fontSize;null!==
e&&(k.style.fontSize=e+"em")}}],["update-state",e=>{{const k=this.h.get(e.elementId);this.ea(k,e)}}],["focus",e=>this.oa(e)],["set-css-style",e=>{this.h.get(e.elementId).style[e.prop]=e.val}],["set-attribute",e=>{this.h.get(e.elementId).setAttribute(e.name,e.val)}],["remove-attribute",e=>{this.h.get(e.elementId).removeAttribute(e.name)}]]);L(this,"get-element",e=>e)}Ca(){throw Error("required override");}ea(){throw Error("required override");}oa(g){var f=this.h.get(g.elementId);g.focus?f.focus():
f.blur()}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function f(b,a){const c=document.createElement("script");c.async=!1;"module"===a&&(c.type="module");if(b.hc)c.textContent=b.kc,document.head.appendChild(c);else return new Promise((d,h)=>{c.onload=d;c.onerror=h;c.src=b;document.head.appendChild(c)})}let e=!1,k=!1;function m(){if(!e){try{new Worker("blob://",{get type(){k=!0}})}catch(b){}e=!0}return k}let t=new Audio;const v={"audio/webm; codecs=opus":!!t.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!t.canPlayType("audio/ogg; codecs=opus"),
"audio/webm; codecs=vorbis":!!t.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!t.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!t.canPlayType("audio/mp4"),"audio/mpeg":!!t.canPlayType("audio/mpeg")};t=null;async function I(b){b=await w(b);return(new TextDecoder("utf-8")).decode(b)}function w(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=h=>a(h.target.result);d.onerror=h=>c(h);d.readAsArrayBuffer(b)})}const B=[];let z=0;window.RealFile=window.File;const x=
[],D=new Map,r=new Map;let E=0;const A=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");A.push(b)};const F=new Set(["cordova","playable-ad","instant-games"]);window.C=class b{constructor(a){this.l=a.mc;this.J=null;this.c="";this.$=a.jc;this.i=a.$a;this.M={};this.ua=this.Xa=null;this.W=[];this.I=this.g=this.xa=null;this.u=-1;this.bc=()=>this.Lb();this.Wa=[];this.b=a.Ya;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&
("module"!==this.i||m())||(this.l=!1);F.has(this.b)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.Y=this.j=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",
c=>this.yb(c));this.a("runtime","create-job-worker",()=>this.zb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ha(a)):this.Ha(a)}Da(){return g&&"cordova"===this.b}R(){return g&&F.has(this.b)||navigator.standalone}async Ha(a){if("playable-ad"===this.b){this.j=self.c3_base64files;this.Y={};await this.nb();for(let d=0,h=a.B.length;d<h;++d){var c=a.B[d].toLowerCase();this.Y.hasOwnProperty(c)?a.B[d]={hc:!0,kc:this.Y[c]}:this.j.hasOwnProperty(c)&&(a.B[d]=URL.createObjectURL(this.j[c]))}}a.dc?
this.c=a.dc:(c=location.origin,this.c=("null"===c?"file:///":c)+location.pathname,c=this.c.lastIndexOf("/"),-1!==c&&(this.c=this.c.substr(0,c+1)));a.oc&&(this.M=a.oc);c=new MessageChannel;this.J=c.port1;this.J.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Ib(d));this.I=new self.fb(this);await N(this.I);this.Ea();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();
this.l?await this.ub(a,c.port2):await this.tb(a,c.port2)}ga(a){a=this.M.hasOwnProperty(a)?this.M[a]:a.endsWith("/workermain.js")&&this.M.hasOwnProperty("workermain.js")?this.M["workermain.js"]:"playable-ad"===this.b&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ba(a,c,d){if(a.startsWith("blob:"))return new Worker(a,d);if(this.Da()&&"file:"===location.protocol)return a=await this.aa(this.$+a),new Worker(URL.createObjectURL(new Blob([a],
{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}Ea(){if(this.R()){const a=document.documentElement.style,c=document.body.style,d=window.innerWidth<window.innerHeight,h=d?window.screen.width:window.screen.height;c.height=a.height=
(d?window.screen.height:window.screen.width)+"px";c.width=a.width=h+"px"}}Ga(a){var c=this.I;return{baseUrl:this.c,windowInnerWidth:this.o(),windowInnerHeight:this.m(),devicePixelRatio:window.devicePixelRatio,isFullscreen:b.ca(),projectData:a.uc,scriptsType:a.$a,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileUrls:window.cr_previewProjectFiles,swClientId:window.sc||"",exportType:a.Ya,isDebug:-1<self.location.search.indexOf("debug"),
ife:!!self.tc,jobScheduler:{inputPort:c.sa,outputPort:c.wa,maxNumWorkers:c.$b},supportedAudioFormats:v,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.$+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.$+"opus.wasm.wasm",isiOSCordova:this.Da(),isiOSWebView:this.R(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async ub(a,c){var d=this.ga(a.nc);this.Xa=await this.ba(d,this.c,{type:this.i,name:"Runtime"});this.g=document.createElement("canvas");this.g.style.display=
"none";d=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Xa.postMessage(Object.assign(this.Ga(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:d,workerDependencyScripts:a.za||[],engineScripts:a.B,projectScripts:a.N,mainProjectScript:a.Za,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,d,...O(this.I)]);this.W=x.map(h=>new h(this));this.Fa();self.c3_callFunction=(h,l)=>this.xa.vb(h,l);"preview"===this.b&&(self.goToLastErrorScript=()=>
this.da("runtime","go-to-last-error-script"))}async tb(a,c){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.W=x.map(l=>new l(this));this.Fa();var d=a.B.map(l=>"string"===typeof l?(new URL(l,this.c)).toString():l);Array.isArray(a.za)&&d.unshift(...a.za);d=await Promise.all(d.map(l=>this.ia(l,this.i)));await Promise.all(d.map(l=>f(l,this.i)));const h=self.C3_ProjectScriptsStatus;if("module"===this.i){d=a.Za;const l=a.N;
for(let [p,n]of l)if(n||(n=p),p===d)try{n=await this.ia(n,this.i),await f(n,this.i),"preview"!==this.b||h[p]||this.Na(p,"main script did not run to completion")}catch(u){this.Na(p,u)}else if("scriptsInEvents.js"===p||p.endsWith("/scriptsInEvents.js"))n=await this.ia(n,this.i),await f(n,this.i)}else if(a.N&&0<a.N.length)try{if(await Promise.all(a.N.map(l=>f(l[1],this.i))),Object.values(h).some(l=>!l)){self.setTimeout(()=>this.Oa(h),100);return}}catch(l){console.error("[Preview] Error loading project scripts: ",
l);self.setTimeout(()=>this.Oa(h),100);return}"preview"===this.b&&"object"!==typeof self.pc.qc?(this.F(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ga(a),{isInWorker:!1,messagePort:c,canvas:this.g,runOnStartupFunctions:A}),this.Ja(),this.ua=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.ua,
a))}Oa(a){this.F();a=`Failed to load project script '${Object.entries(a).filter(c=>!c[1]).map(c=>c[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+a);alert(a)}Na(a,c){this.F();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ja(){this.F()}F(){const a=window.ec;a&&(a.parentElement.removeChild(a),
window.ec=null)}async zb(){const a=await Q(this.I);return{outputPort:a,transferables:[a]}}sb(){if(this.l)throw Error("not available in worker mode");return this.ua}da(a,c,d,h,l){this.J.postMessage({type:"event",component:a,handler:c,dispatchOpts:h||null,data:d,responseId:null},l)}gb(a,c){const d=E++,h=new Promise((l,p)=>{r.set(d,{resolve:l,reject:p})});this.J.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return h}["_OnMessageFromRuntime"](a){const c=
a.type;if("event"===c)return this.Eb(a);if("result"===c)this.Ob(a);else if("runtime-ready"===c)this.Pb();else if("alert-error"===c)this.F(),alert(a.message);else if("creating-runtime"===c)this.Ja();else throw Error(`unknown message '${c}'`);}Eb(a){const c=a.component,d=a.handler,h=a.data,l=a.responseId;if(a=D.get(c))if(a=a.get(d)){var p=null;try{p=a(h)}catch(n){console.error(`Exception in '${c}' handler '${d}':`,n);null!==l&&this.T(l,!1,""+n);return}if(null===l)return p;p&&p.then?p.then(n=>this.T(l,
!0,n)).catch(n=>{console.error(`Rejection from '${c}' handler '${d}':`,n);this.T(l,!1,""+n)}):this.T(l,!0,p)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}T(a,c,d){let h;d&&d.transferables&&(h=d.transferables);this.J.postMessage({type:"result",responseId:a,isOk:c,result:d},h)}Ob(a){const c=a.responseId,d=a.isOk;a=a.result;const h=r.get(c);d?h.resolve(a):h.reject(a);r.delete(c)}a(a,c,d){let h=D.get(a);h||(h=new Map,
D.set(a,h));if(h.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);h.set(c,d)}static O(a){if(x.includes(a))throw Error("DOM handler already added");x.push(a)}Fa(){for(const a of this.W)if("runtime"===a.G){this.xa=a;return}throw Error("cannot find runtime DOM handler");}Ib(a){this.da("debugger","message",a)}Pb(){for(const a of this.W)a.Aa()}static ca(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Pa(){-1===this.u&&this.Wa.length&&
(this.u=requestAnimationFrame(this.bc))}lb(){-1!==this.u&&(cancelAnimationFrame(this.u),this.u=-1)}Lb(){this.u=-1;for(const a of this.Wa)a();this.Pa()}qa(){this.xa.qa()}cb(a){return/^(?:[a-z]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}eb(a){return!this.cb(a)}async ia(a,c){if("cordova"!==this.b||g||"module"!==c||!a.startsWith("file:")&&!this.eb(a))return a;a.startsWith(this.c)&&(a=a.substr(this.c.length));a=await this.aa(a);return URL.createObjectURL(new Blob([a],{type:"application/javascript"}))}async yb(a){const c=
a.filename;switch(a.as){case "text":return await this.ab(c);case "buffer":return await this.aa(c);default:throw Error("unsupported type");}}Ba(a){const c=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((d,h)=>{window.resolveLocalFileSystemURL(c,l=>{l.file(d,h)},h)})}async ab(a){a=await this.Ba(a);return await I(a)}fa(){if(B.length&&!(8<=z)){z++;var a=B.shift();this.ob(a.filename,a.lc,a.fc)}}aa(a){return new Promise((c,d)=>{B.push({filename:a,lc:h=>{z--;this.fa();
c(h)},fc:h=>{z--;this.fa();d(h)}});this.fa()})}async ob(a,c,d){try{const h=await this.Ba(a),l=await w(h);c(l)}catch(h){d(h)}}async nb(){const a=[];for(const [c,d]of Object.entries(this.j))a.push(this.mb(c,d));await Promise.all(a)}async mb(a,c){if("object"===typeof c)this.j[a]=new Blob([c.str],{type:c.type}),this.Y[a]=c.str;else{let d=await this.rb(c);d||(d=this.pb(c));this.j[a]=d}}async rb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}pb(a){a=this.Ub(a);return this.kb(a.data,a.ic)}Ub(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const h=c[2];d="base64"===c[1]||"base64"===h?atob(d):decodeURIComponent(d);return{ic:a,data:d}}kb(a,c){var d=a.length;let h=d>>2,l=new Uint8Array(d),p=new Uint32Array(l.buffer,0,h),n,u;for(u=n=0;n<h;++n)p[n]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(d&=
3;d--;)l[u]=a.charCodeAt(u),++u;return new Blob([l],{type:c})}}}"use strict";
{const g=self.C;function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const e=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),k={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},m={dispatchUserScriptEvent:!0},t={dispatchRuntimeEvent:!0};function v(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=h=>c(h);d.rel=
"stylesheet";d.href=b;document.head.appendChild(d)})}function I(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=h=>c(h);d.src=b})}async function w(b){b=URL.createObjectURL(b);try{return await I(b)}finally{URL.revokeObjectURL(b)}}function B(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=h=>a(h.target.result);d.onerror=h=>c(h);d.readAsText(b)})}async function z(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await w(b);var d=await B(b);d=(new DOMParser).parseFromString(d,
"image/svg+xml");const h=d.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const l=h.getAttribute("width"),p=h.getAttribute("height");if(!l.includes("%")&&!p.includes("%"))return await w(b)}h.setAttribute("width",a+"px");h.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await w(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const D=new Set(["canvas",
"body","html"]);function r(b){D.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function E(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await w(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]}};self.C3_RasterSvgImageBlob=async function(b,
a,c,d,h){b=await z(b,a,c);const l=document.createElement("canvas");l.width=d;l.height=h;l.getContext("2d").drawImage(b,0,0,a,c);return l};let A=!1;document.addEventListener("pause",()=>A=!0);document.addEventListener("resume",()=>A=!1);function F(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.O(class extends self.P{constructor(b){super(b,"runtime");this.Ua=!0;this.v=-1;this.ya="any";this.Qa=this.Ra=!1;this.ta=this.L=this.s=null;b.a("canvas","update-size",d=>this.Sb(d));
b.a("runtime","invoke-download",d=>this.Hb(d));b.a("runtime","raster-svg-image",d=>this.Mb(d));b.a("runtime","get-svg-image-size",d=>this.Fb(d));b.a("runtime","set-target-orientation",d=>this.Rb(d));b.a("runtime","register-sw",()=>this.Nb());b.a("runtime","post-to-debugger",d=>this.La(d));b.a("runtime","go-to-script",d=>this.La(d));b.a("runtime","before-start-ticking",()=>this.xb());b.a("runtime","debug-highlight",d=>this.Ab(d));b.a("runtime","enable-device-orientation",()=>this.jb());b.a("runtime",
"enable-device-motion",()=>this.ib());b.a("runtime","add-stylesheet",d=>this.wb(d));b.a("runtime","alert",d=>this.ja(d));b.a("runtime","hide-cordova-splash",()=>this.Gb());const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const h=d.target;a.has(h.tagName.toLowerCase())||x(h)||d.preventDefault()});const c=b.g;window.addEventListener("selectstart",r);window.addEventListener("gesturehold",r);c.addEventListener("selectstart",r);c.addEventListener("gesturehold",
r);window.addEventListener("touchstart",r,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",r,{passive:!1}),c.addEventListener("pointerdown",r)):c.addEventListener("touchstart",r);this.K=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",E,{passive:!1});window.addEventListener("wheel",E,{passive:!1});window.addEventListener("resize",()=>this.Tb());b.R()&&window.addEventListener("focusout",()=>{{const l=
document.activeElement;if(l){var d=l.tagName.toLowerCase();var h=new Set("email number password search tel text url".split(" "));d="textarea"===d?!0:"input"===d?h.has(l.type.toLowerCase()||"text"):x(l)}else d=!1}d||(document.scrollingElement.scrollTop=0)});this.va=new Set;this.ac=new WeakSet;this.Zb=!1}xb(){"cordova"===this.f.b?(document.addEventListener("pause",()=>this.pa(!0)),document.addEventListener("resume",()=>this.pa(!1))):document.addEventListener("visibilitychange",()=>this.pa(document.hidden));
return{isSuspended:!(!document.hidden&&!A)}}Aa(){window.addEventListener("focus",()=>this.U("window-focus"));window.addEventListener("blur",()=>{this.U("window-blur",{parentHasFocus:F()});this.K=0});window.addEventListener("fullscreenchange",()=>this.ka());window.addEventListener("webkitfullscreenchange",()=>this.ka());window.addEventListener("mozfullscreenchange",()=>this.ka());window.addEventListener("fullscreenerror",a=>this.la(a));window.addEventListener("webkitfullscreenerror",a=>this.la(a));
window.addEventListener("mozfullscreenerror",a=>this.la(a));window.addEventListener("keydown",a=>this.Ka("keydown",a));window.addEventListener("keyup",a=>this.Ka("keyup",a));window.addEventListener("dblclick",a=>this.ma("dblclick",a,k));window.addEventListener("wheel",a=>this.Jb(a));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{this.ha(a);this.D("pointerdown",a)}),this.f.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.L=new self.hb(()=>this.qb(),
5),this.L.Ta=!0,window.addEventListener("pointerrawupdate",a=>this.Kb(a))):window.addEventListener("pointermove",a=>this.D("pointermove",a)),window.addEventListener("pointerup",a=>this.D("pointerup",a)),window.addEventListener("pointercancel",a=>this.D("pointercancel",a))):(window.addEventListener("mousedown",a=>{this.ha(a);this.na("pointerdown",a)}),window.addEventListener("mousemove",a=>this.na("pointermove",a)),window.addEventListener("mouseup",a=>this.na("pointerup",a)),window.addEventListener("touchstart",
a=>{this.ha(a);this.S("pointerdown",a)}),window.addEventListener("touchmove",a=>this.S("pointermove",a)),window.addEventListener("touchend",a=>this.S("pointerup",a)),window.addEventListener("touchcancel",a=>this.S("pointercancel",a)));const b=()=>this.qa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}U(b,a){q(this,b,a||null,t)}o(){return this.f.o()}m(){return this.f.m()}Tb(){const b=
this.o(),a=this.m();this.U("window-resize",{innerWidth:b,innerHeight:a,devicePixelRatio:window.devicePixelRatio});this.f.R()&&(-1!==this.v&&clearTimeout(this.v),this.Ma(b,a,0))}Vb(b,a,c){-1!==this.v&&clearTimeout(this.v);this.v=setTimeout(()=>this.Ma(b,a,c),48)}Ma(b,a,c){const d=this.o(),h=this.m();this.v=-1;d!=b||h!=a?this.U("window-resize",{innerWidth:d,innerHeight:h,devicePixelRatio:window.devicePixelRatio}):10>c&&this.Vb(d,h,c+1)}Rb(b){this.ya=b.targetOrientation}Wb(){const b=this.ya;if(screen.orientation&&
screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct 3] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct 3] Failed to lock orientation")}catch(a){console.warn("[Construct 3] Failed to lock orientation: ",a)}}ka(){const b=
g.ca();b&&"any"!==this.ya&&this.Wb();q(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.m()})}la(b){console.warn("[Construct 3] Fullscreen request failed: ",b);q(this,"fullscreenerror",{isFullscreen:g.ca(),innerWidth:this.o(),innerHeight:this.m()})}pa(b){b?this.f.lb():this.f.Pa();q(this,"visibilitychange",{hidden:b})}Ka(b,a){"Backspace"===a.key&&r(a);const c=e.get(a.code)||a.code;y(this,b,{code:c,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,
metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},k)}Jb(b){q(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},k)}ma(b,a,c){f(a)||y(this,b,{button:a.button,buttons:a.buttons,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,timeStamp:a.timeStamp},c)}na(b,a){if(!f(a)){var c=this.K;"pointerdown"===b&&0!==c?b="pointermove":"pointerup"===b&&0!==a.buttons&&(b=
"pointermove");y(this,b,{pointerId:1,pointerType:"mouse",button:a.button,buttons:a.buttons,lastButtons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:a.timeStamp},k);this.K=a.buttons;this.ma(a.type,a,m)}}D(b,a){if(this.L&&"pointermove"!==b){var c=this.L;c.H||(-1!==c.A&&(self.clearTimeout(c.A),c.A=-1),c.X=Date.now())}c=0;"mouse"===a.pointerType&&(c=this.K);y(this,b,{pointerId:a.pointerId,pointerType:a.pointerType,
button:a.button,buttons:a.buttons,lastButtons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},k);"mouse"===a.pointerType&&(c="mousemove","pointerdown"===b?c="mousedown":"pointerup"===b&&(c="mouseup"),this.ma(c,a,m),this.K=a.buttons)}Kb(b){this.ta=b;b=this.L;if(-1===b.A){var a=Date.now(),c=a-b.X,d=b.Yb;c>=d&&
b.Ta?(b.X=a,b.H=!0,b.Sa(),b.H=!1):b.A=self.setTimeout(b.cc,Math.max(d-c,4))}}qb(){this.D("pointermove",this.ta);this.ta=null}S(b,a){for(let c=0,d=a.changedTouches.length;c<d;++c){const h=a.changedTouches[c];y(this,b,{pointerId:h.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:h.clientX,clientY:h.clientY,pageX:h.pageX,pageY:h.pageY,width:2*(h.radiusX||h.webkitRadiusX||0),height:2*(h.radiusY||h.webkitRadiusY||0),pressure:h.force||h.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:h.rotationAngle||0,timeStamp:a.timeStamp},k)}}ha(b){window!==window.top&&window.focus();this.Ia(b.target)&&document.activeElement&&!this.Ia(document.activeElement)&&document.activeElement.blur()}Ia(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}jb(){this.Ra||(this.Ra=!0,window.addEventListener("deviceorientation",b=>this.Cb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Db(b)))}ib(){this.Qa||(this.Qa=!0,window.addEventListener("devicemotion",
b=>this.Bb(b)))}Cb(b){q(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},k)}Db(b){q(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},k)}Bb(b){let a=null;var c=b.acceleration;c&&(a={x:c.x||0,y:c.y||0,z:c.z||0});c=null;var d=b.accelerationIncludingGravity;d&&(c={x:d.x||
0,y:d.y||0,z:d.z||0});d=null;const h=b.rotationRate;h&&(d={alpha:h.alpha||0,beta:h.beta||0,gamma:h.gamma||0});q(this,"devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:d,interval:b.interval,timeStamp:b.timeStamp},k)}Sb(b){const a=this.f,c=a.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";a.Ea();this.Ua&&(c.style.display="",this.Ua=!1)}Hb(b){const a=b.url;b=b.filename;const c=document.createElement("a"),
d=document.body;c.textContent=b;c.href=a;c.download=b;d.appendChild(c);c.click();d.removeChild(c)}async Mb(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async Fb(b){return await self.C3_GetSvgImageSize(b.blob)}async wb(b){await v(b.url)}qa(){var b=[...this.va];this.va.clear();if(!this.Zb)for(const a of b)(b=a.play())&&
b.catch(()=>{this.ac.has(a)||this.va.add(a)})}Gb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Ab(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var a=this.s;a.style.display="";a.style.left=b.left-1+"px";a.style.top=b.top-1+"px";a.style.width=b.width+2+"px";a.style.height=b.height+2+"px";a.textContent=b.name}else this.s&&(this.s.style.display="none")}Nb(){window.C3_RegisterSW&&window.C3_RegisterSW()}La(b){window.c3_postToMessagePort&&
(b.from="runtime",window.c3_postToMessagePort(b))}vb(b,a){return this.f.gb(this.G,{name:b,params:a})}ja(b){alert(b.message)}})}"use strict";async function N(g){if(g.Xb)throw Error("already initialised");g.Xb=!0;var f=g.Z.ga("dispatchworker.js");g.ra=await g.Z.ba(f,g.c,{name:"DispatchWorker"});f=new MessageChannel;g.sa=f.port1;g.ra.postMessage({type:"_init","in-port":f.port2},[f.port2]);g.wa=await Q(g)}function O(g){return[g.sa,g.wa]}
async function Q(g){const f=g.Va.length;var e=g.Z.ga("jobworker.js");e=await g.Z.ba(e,g.c,{name:"JobWorker"+f});const k=new MessageChannel,m=new MessageChannel;g.ra.postMessage({type:"_addJobWorker",port:k.port1},[k.port1]);e.postMessage({type:"init",number:f,"dispatch-port":k.port2,"output-port":m.port2},[k.port2,m.port2]);g.Va.push(e);return m.port1}
self.fb=class{constructor(g){this.Z=g;this.c=g.c;this.c="preview"===g.b?this.c+"c3/workers/":this.c+g.$;this.$b=Math.min(navigator.hardwareConcurrency||2,16);this.ra=null;this.Va=[];this.wa=this.sa=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.C({mc:!0,nc:"workermain.js",B:["scripts/c3runtime.js"],N:[],Za:"",$a:"module",jc:"scripts/",za:[],Ya:"html5"}));"use strict";
async function R(g,f){f=f.type;let e=!0;0===f?e=await S():1===f&&(e=await T());q(g,"permission-result",{type:f,result:e})}async function S(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function T(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.C.O(class extends self.P{constructor(g){super(g,"touch");G(this,"request-permission",f=>R(this,f))}});"use strict";
function U(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(f=>q(g,"sw-message",f.data))}
function V(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(f=>console.warn("[Construct 3] Failed to lock orientation: ",f));else try{let f=!1;screen.lockOrientation?f=screen.lockOrientation(g):screen.webkitLockOrientation?f=screen.webkitLockOrientation(g):screen.mozLockOrientation?f=screen.mozLockOrientation(g):screen.msLockOrientation&&(f=screen.msLockOrientation(g));f||console.warn("[Construct 3] Failed to lock orientation")}catch(f){console.warn("[Construct 3] Failed to lock orientation: ",
f)}}
self.C.O(class extends self.P{constructor(g){super(g,"browser");this.b="";H(this,[["get-initial-state",f=>{this.b=f.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>U(this)],
["alert",f=>this.ja(f)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",f=>this.oa(f)],["vibrate",f=>{navigator.vibrate&&navigator.vibrate(f.pattern)}],["lock-orientation",f=>V(f)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(f){}}],["navigate",f=>{var e=f.type;if("back"===e)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===e)window.forward();else if("home"===e)window.home();else if("reload"===e)location.reload();else if("url"===e){e=f.url;var k=f.target;f=f.exportType;"windows-uwp"===f&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):"preview"===f?window.open(e,"_blank"):this.rc||(2===k?window.top.location=e:1===k?window.parent.location=e:window.location=e)}else"new-window"===e&&(e=f.url,k=f.tag,"windows-uwp"===f.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):window.open(e,k))}],["request-fullscreen",
f=>{{const e={navigationUI:"auto"};f=f.navUI;1===f?e.navigationUI="hide":2===f&&(e.navigationUI="show");f=document.documentElement;f.requestFullscreen?f.requestFullscreen(e):f.mozRequestFullScreen?f.mozRequestFullScreen(e):f.msRequestFullscreen?f.msRequestFullscreen(e):f.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):f.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():
document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",f=>{location.hash=f.hash}]]);window.addEventListener("online",()=>{q(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{q(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{q(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",
()=>{q(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",f=>{f.handled=!0;q(this,"backbutton")})}ja(g){alert(g.message)}oa(g){g=g.isFocus;if("nwjs"===this.b){const f="nwjs"===this.b?nw.Window.get():null;g?f.focus():f.blur()}else g?window.focus():window.blur()}});"use strict";
{function g(e){e.stopPropagation()}function f(e){13!==e.which&&27!==e.which&&e.stopPropagation()}self.C.O(class extends self.bb{constructor(e){super(e,"text-input");L(this,"scroll-to-bottom",k=>this.Qb(k))}Ca(e,k){let m;const t=k.type;"textarea"===t?(m=document.createElement("textarea"),m.style.resize="none"):(m=document.createElement("input"),m.type=t);m.style.position="absolute";m.autocomplete="off";m.addEventListener("touchstart",g);m.addEventListener("touchmove",g);m.addEventListener("touchend",
g);m.addEventListener("mousedown",g);m.addEventListener("mouseup",g);m.addEventListener("keydown",f);m.addEventListener("keyup",f);m.addEventListener("click",v=>{v.stopPropagation();M(this,"click",e)});m.addEventListener("dblclick",v=>{v.stopPropagation();M(this,"dblclick",e)});m.addEventListener("input",()=>K(this,"change",e,{text:m.value}));k.id&&(m.id=k.id);this.ea(m,k);return m}ea(e,k){e.value=k.text;e.placeholder=k.placeholder;e.title=k.title;e.disabled=!k.isEnabled;e.readOnly=k.isReadOnly;e.spellcheck=
k.spellCheck;k=k.maxLength;0>k?e.removeAttribute("maxlength"):e.setAttribute("maxlength",k)}Qb(e){e.scrollTop=e.scrollHeight}})};

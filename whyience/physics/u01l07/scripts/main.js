'use strict';function u(g,f,d,l){g.f.na(g.N,f,d,l,void 0)}function z(g,f,d,l){g.f.j?u(g,f,d,l):g.f.zb()._OnMessageFromDOM({type:"event",component:g.N,handler:f,dispatchOpts:l||null,data:d,responseId:null})}function C(g,f,d){g.f.b(g.N,f,d)}function G(g,f){for(const [d,l]of f)C(g,d,l)}window.B=class{constructor(g,f){this.f=g;this.N=f}Ma(){}};
window.ob=class{constructor(g,f){this.ab=g;this.mc=f;this.H=-1;this.ca=-Infinity;this.rc=()=>{this.H=-1;this.ca=Date.now();this.O=!0;this.ab();this.O=!1};this.bb=this.O=!1}};"use strict";function J(g,f){const d=f.elementId,l=g.V(d,f);g.i.set(d,l);l.style.boxSizing="border-box";f.isVisible||(l.style.display="none");f=g.qa(l);f.addEventListener("focus",()=>{K(g,"elem-focused",d)});f.addEventListener("blur",()=>{K(g,"elem-blurred",d)});g.$&&document.body.appendChild(l)}
function O(g,f,d){C(g,f,l=>{const m=g.i.get(l.elementId);return d(m,l)})}function K(g,f,d,l){l||(l={});l.elementId=d;u(g,f,l)}function Q(g,f,d,l){l||(l={});l.elementId=d;z(g,f,l)}
window.la=class extends self.B{constructor(g,f){super(g,f);this.i=new Map;this.$=!0;G(this,[["create",d=>J(this,d)],["destroy",d=>{{d=d.elementId;const l=this.i.get(d);this.$&&l.parentElement.removeChild(l);this.i.delete(d)}}],["set-visible",d=>{this.$&&(this.i.get(d.elementId).style.display=d.isVisible?"":"none")}],["update-position",d=>{if(this.$){var l=this.i.get(d.elementId);l.style.left=d.left+"px";l.style.top=d.top+"px";l.style.width=d.width+"px";l.style.height=d.height+"px";d=d.fontSize;null!==
d&&(l.style.fontSize=d+"em")}}],["update-state",d=>{{const l=this.i.get(d.elementId);this.o(l,d)}}],["focus",d=>this.za(d)],["set-css-style",d=>{this.i.get(d.elementId).style[d.prop]=d.val}],["set-attribute",d=>{this.i.get(d.elementId).setAttribute(d.name,d.val)}],["remove-attribute",d=>{this.i.get(d.elementId).removeAttribute(d.name)}]]);O(this,"get-element",d=>d)}V(){throw Error("required override");}o(){throw Error("required override");}qa(g){return g}za(g){const f=this.qa(this.i.get(g.elementId));
g.focus?f.focus():f.blur()}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let f=0;function d(c){const a=document.createElement("script");a.async=!1;a.type="module";return c.wc?new Promise(e=>{const k="c3_resolve_"+f;++f;self[k]=e;a.textContent=c.zc+`\n\nself["${k}"]();`;document.head.appendChild(a)}):new Promise((e,k)=>{a.onload=e;a.onerror=k;a.src=c;document.head.appendChild(a)})}let l=!1,m=!1;function x(){if(!l){try{new Worker("blob://",{get type(){m=!0}})}catch(c){}l=!0}return m}let q=
new Audio;const y={"audio/webm; codecs=opus":!!q.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!q.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!q.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!q.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!q.canPlayType("audio/mp4"),"audio/mpeg":!!q.canPlayType("audio/mpeg")};q=null;async function D(c){c=await L(c);return(new TextDecoder("utf-8")).decode(c)}function L(c){return new Promise((a,
e)=>{const k=new FileReader;k.onload=n=>a(n.target.result);k.onerror=n=>e(n);k.readAsArrayBuffer(c)})}const H=[];let A=0;window.RealFile=window.File;const E=[],I=new Map,v=new Map;let M=0;const F=[];self.runOnStartup=function(c){if("function"!==typeof c)throw Error("runOnStartup called without a function");F.push(c)};const P=new Set(["cordova","playable-ad","instant-games"]);let b=!1;window.h=class c{constructor(a){this.j=a.Bc;this.R=null;this.c="";this.ha=a.yc;this.U={};this.Fa=this.gb=null;this.aa=
[];this.P=this.g=this.Ia=null;this.F=-1;this.qc=()=>this.Vb();this.fb=[];this.a=a.hb;this.ba="file"===location.protocol.substr(0,4);!this.j||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&x()||(this.j=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.j=!1;if("cordova"===this.a&&this.j)if(/android/i.test(navigator.userAgent)){const e=/Chrome\/(\d+)/i.exec(navigator.userAgent);e&&90<=parseInt(e[1],10)||(this.j=!1)}else this.j=!1;this.da=this.l=null;"html5"!==this.a&&"playable-ad"!==
this.a||!this.ba||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",e=>this.Hb(e));this.b("runtime","create-job-worker",
()=>this.Ib());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ra(a)):this.Ra(a)}lb(){return g&&"cordova"===this.a}ma(){const a=navigator.userAgent;return g&&P.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}async Ra(a){"macos-wkwebview"===this.a&&this.Ca({type:"ready"});if("playable-ad"===this.a){this.l=self.c3_base64files;this.da={};await this.ub();for(let k=0,n=a.I.length;k<n;++k){var e=a.I[k].toLowerCase();this.da.hasOwnProperty(e)?a.I[k]={wc:!0,zc:this.da[e]}:
this.l.hasOwnProperty(e)&&(a.I[k]=URL.createObjectURL(this.l[e]))}}a.sc?this.c=a.sc:(e=location.origin,this.c=("null"===e?"file:///":e)+location.pathname,e=this.c.lastIndexOf("/"),-1!==e&&(this.c=this.c.substr(0,e+1)));a.Dc&&(this.U=a.Dc);e=new MessageChannel;this.R=e.port1;this.R.onmessage=k=>this._OnMessageFromRuntime(k.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(k=>this.Sb(k));this.P=new self.mb(this);await R(this.P);"object"===typeof window.StatusBar&&window.StatusBar.hide();
"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.j?await this.Bb(a,e.port2):await this.Ab(a,e.port2)}sa(a){a=this.U.hasOwnProperty(a)?this.U[a]:a.endsWith("/workermain.js")&&this.U.hasOwnProperty("workermain.js")?this.U["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ka(a,e,k){if(a.startsWith("blob:"))return new Worker(a,k);if("cordova"===
this.a&&this.ba)return a=await this.ja(k.vc?a:this.ha+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),k);a=new URL(a,e);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),k)}return new Worker(a,k)}u(){return Math.max(window.innerWidth,1)}s(){return Math.max(window.innerHeight,1)}Pa(a){var e=this.P;return{baseUrl:this.c,windowInnerWidth:this.u(),windowInnerHeight:this.s(),
devicePixelRatio:window.devicePixelRatio,isFullscreen:c.J(),projectData:a.Jc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Hc||"",exportType:a.hb,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Ic,jobScheduler:{inputPort:e.Ea,outputPort:e.Ha,maxNumWorkers:e.oc},supportedAudioFormats:y,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ha+"opus.wasm.js",
opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ha+"opus.wasm.wasm",isFileProtocol:this.ba,isiOSCordova:this.lb(),isiOSWebView:this.ma(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Bb(a,e){var k=this.sa(a.Cc);this.gb=await this.ka(k,this.c,{type:"module",name:"Runtime",vc:!0});this.g=document.createElement("canvas");this.g.style.display="none";k=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let n=a.La||[],r=a.I;n=await Promise.all(n.map(p=>
this.C(p)));r=await Promise.all(r.map(p=>this.C(p)));if("cordova"===this.a)for(let p=0,t=a.ia.length;p<t;++p){const w=a.ia[p],N=w[0];if(N===a.Ka||"scriptsInEvents.js"===N||N.endsWith("/scriptsInEvents.js"))w[1]=await this.C(N)}this.gb.postMessage(Object.assign(this.Pa(a),{type:"init-runtime",isInWorker:!0,messagePort:e,canvas:k,workerDependencyScripts:n,engineScripts:r,projectScripts:a.ia,mainProjectScript:a.Ka,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[e,k,...S(this.P)]);this.aa=E.map(p=>
new p(this));this.Oa();self.c3_callFunction=(p,t)=>this.Ia.Cb(p,t);"preview"===this.a&&(self.goToLastErrorScript=()=>this.na("runtime","go-to-last-error-script"))}async Ab(a,e){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.aa=E.map(p=>new p(this));this.Oa();var k=a.I.map(p=>"string"===typeof p?(new URL(p,this.c)).toString():p);Array.isArray(a.La)&&k.unshift(...a.La);k=await Promise.all(k.map(p=>this.C(p)));await Promise.all(k.map(p=>
d(p)));k=self.C3_ProjectScriptsStatus;const n=a.Ka,r=a.ia;for(let [p,t]of r)if(t||(t=p),p===n)try{t=await this.C(t),await d(t),"preview"!==this.a||k[p]||this.Xa(p,"main script did not run to completion")}catch(w){this.Xa(p,w)}else if("scriptsInEvents.js"===p||p.endsWith("/scriptsInEvents.js"))t=await this.C(t),await d(t);"preview"===this.a&&"object"!==typeof self.Ec.Fc?(this.Y(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Pa(a),{isInWorker:!1,messagePort:e,canvas:this.g,runOnStartupFunctions:F}),this.Ta(),this.Fa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Fa,a))}Xa(a,e){this.Y();console.error(`[Preview] Failed to load project main script (${a}): `,e);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ta(){this.Y()}Y(){const a=
window.tc;a&&(a.parentElement.removeChild(a),window.tc=null)}async Ib(){const a=await T(this.P);return{outputPort:a,transferables:[a]}}zb(){if(this.j)throw Error("not available in worker mode");return this.Fa}na(a,e,k,n,r){this.R.postMessage({type:"event",component:a,handler:e,dispatchOpts:n||null,data:k,responseId:null},r)}nb(a,e){const k=M++,n=new Promise((r,p)=>{v.set(k,{resolve:r,reject:p})});this.R.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:e,responseId:k},
void 0);return n}["_OnMessageFromRuntime"](a){const e=a.type;if("event"===e)return this.Nb(a);if("result"===e)this.Zb(a);else if("runtime-ready"===e)this.$b();else if("alert-error"===e)this.Y(),alert(a.message);else if("creating-runtime"===e)this.Ta();else throw Error(`unknown message '${e}'`);}Nb(a){const e=a.component,k=a.handler,n=a.data,r=a.responseId;if(a=I.get(e))if(a=a.get(k)){var p=null;try{p=a(n)}catch(t){console.error(`Exception in '${e}' handler '${k}':`,t);null!==r&&this.X(r,!1,""+t);
return}if(null===r)return p;p&&p.then?p.then(t=>this.X(r,!0,t)).catch(t=>{console.error(`Rejection from '${e}' handler '${k}':`,t);this.X(r,!1,""+t)}):this.X(r,!0,p)}else console.warn(`[DOM] No handler '${k}' for component '${e}'`);else console.warn(`[DOM] No event handlers for component '${e}'`)}X(a,e,k){let n;k&&k.transferables&&(n=k.transferables);this.R.postMessage({type:"result",responseId:a,isOk:e,result:k},n)}Zb(a){const e=a.responseId,k=a.isOk;a=a.result;const n=v.get(e);k?n.resolve(a):n.reject(a);
v.delete(e)}b(a,e,k){let n=I.get(a);n||(n=new Map,I.set(a,n));if(n.has(e))throw Error(`[DOM] Component '${a}' already has handler '${e}'`);n.set(e,k)}static m(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}Oa(){for(const a of this.aa)if("runtime"===a.N){this.Ia=a;return}throw Error("cannot find runtime DOM handler");}Sb(a){this.na("debugger","message",a)}$b(){for(const a of this.aa)a.Ma()}static J(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
b)}static Z(a){b=!!a}Ya(){-1===this.F&&this.fb.length&&(this.F=requestAnimationFrame(this.qc))}sb(){-1!==this.F&&(cancelAnimationFrame(this.F),this.F=-1)}Vb(){this.F=-1;for(const a of this.fb)a();this.Ya()}Ba(){this.Ia.Ba()}jb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}kb(a){return!this.jb(a)}async C(a){return"cordova"===this.a&&(a.startsWith("file:")||this.ba&&this.kb(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.ja(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async Hb(a){const e=a.filename;switch(a.as){case "text":return await this.ib(e);case "buffer":return await this.ja(e);default:throw Error("unsupported type");}}Na(a){const e=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((k,n)=>{window.resolveLocalFileSystemURL(e,r=>{r.file(k,n)},n)})}async ib(a){a=await this.Na(a);return await D(a)}oa(){if(H.length&&!(8<=A)){A++;var a=H.shift();this.vb(a.filename,a.Ac,a.uc)}}ja(a){return new Promise((e,
k)=>{H.push({filename:a,Ac:n=>{A--;this.oa();e(n)},uc:n=>{A--;this.oa();k(n)}});this.oa()})}async vb(a,e,k){try{const n=await this.Na(a),r=await L(n);e(r)}catch(n){k(n)}}Ca(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async ub(){const a=[];for(const [e,k]of Object.entries(this.l))a.push(this.tb(e,k));await Promise.all(a)}async tb(a,
e){if("object"===typeof e)this.l[a]=new Blob([e.str],{type:e.type}),this.da[a]=e.str;else{let k=await this.yb(e);k||(k=this.wb(e));this.l[a]=k}}async yb(a){try{return await (await fetch(a)).blob()}catch(e){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",e),null}}wb(a){a=this.ic(a);return this.rb(a.data,a.xc)}ic(a){var e=a.indexOf(",");if(0>
e)throw new URIError("expected comma in data: uri");var k=a.substring(e+1);e=a.substring(5,e).split(";");a=e[0]||"";const n=e[2];k="base64"===e[1]||"base64"===n?atob(k):decodeURIComponent(k);return{xc:a,data:k}}rb(a,e){var k=a.length;let n=k>>2,r=new Uint8Array(k),p=new Uint32Array(r.buffer,0,n),t,w;for(w=t=0;t<n;++t)p[t]=a.charCodeAt(w++)|a.charCodeAt(w++)<<8|a.charCodeAt(w++)<<16|a.charCodeAt(w++)<<24;for(k&=3;k--;)r[w]=a.charCodeAt(w),++w;return new Blob([r],{type:e})}}}"use strict";
{const g=self.h;function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const d=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},m={dispatchUserScriptEvent:!0},x={dispatchRuntimeEvent:!0};function q(b){return new Promise((c,a)=>{const e=document.createElement("link");e.onload=()=>c(e);e.onerror=k=>a(k);e.rel=
"stylesheet";e.href=b;document.head.appendChild(e)})}function y(b){return new Promise((c,a)=>{const e=new Image;e.onload=()=>c(e);e.onerror=k=>a(k);e.src=b})}async function D(b){b=URL.createObjectURL(b);try{return await y(b)}finally{URL.revokeObjectURL(b)}}function L(b){return new Promise((c,a)=>{let e=new FileReader;e.onload=k=>c(k.target.result);e.onerror=k=>a(k);e.readAsText(b)})}async function H(b,c,a){if(!/firefox/i.test(navigator.userAgent))return await D(b);var e=await L(b);e=(new DOMParser).parseFromString(e,
"image/svg+xml");const k=e.documentElement;if(k.hasAttribute("width")&&k.hasAttribute("height")){const n=k.getAttribute("width"),r=k.getAttribute("height");if(!n.includes("%")&&!r.includes("%"))return await D(b)}k.setAttribute("width",c+"px");k.setAttribute("height",a+"px");e=(new XMLSerializer).serializeToString(e);b=new Blob([e],{type:"image/svg+xml"});return await D(b)}function A(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const E=new Set(["input",
"textarea","datalist","select"]),I=new Set(["canvas","body","html"]);function v(b){I.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function M(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await D(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,a,e,k){b=await H(b,c,a);const n=document.createElement("canvas");n.width=e;n.height=k;n.getContext("2d").drawImage(b,0,0,c,a);return n};let F=!1;document.addEventListener("pause",()=>F=!0);document.addEventListener("resume",()=>F=!1);function P(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.m(class extends self.B{constructor(b){super(b,"runtime");this.cb=!0;this.G=-1;this.Ja="any";this.Za=this.$a=!1;this.D=
this.T=this.v=null;this.fa=this.ea=0;b.b("canvas","update-size",e=>this.ec(e));b.b("runtime","invoke-download",e=>this.Qb(e));b.b("runtime","raster-svg-image",e=>this.Wb(e));b.b("runtime","get-svg-image-size",e=>this.Ob(e));b.b("runtime","set-target-orientation",e=>this.dc(e));b.b("runtime","register-sw",()=>this.Xb());b.b("runtime","post-to-debugger",e=>this.Va(e));b.b("runtime","go-to-script",e=>this.Va(e));b.b("runtime","before-start-ticking",()=>this.Fb());b.b("runtime","debug-highlight",e=>this.Jb(e));
b.b("runtime","enable-device-orientation",()=>this.qb());b.b("runtime","enable-device-motion",()=>this.pb());b.b("runtime","add-stylesheet",e=>this.Eb(e));b.b("runtime","alert",e=>this.ua(e));b.b("runtime","hide-cordova-splash",()=>this.Pb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",e=>{const k=e.target;c.has(k.tagName.toLowerCase())||A(k)||e.preventDefault()});const a=b.g;window.addEventListener("selectstart",v);window.addEventListener("gesturehold",
v);a.addEventListener("selectstart",v);a.addEventListener("gesturehold",v);window.addEventListener("touchstart",v,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",v,{passive:!1}),a.addEventListener("pointerdown",v)):a.addEventListener("touchstart",v);this.S=0;window.addEventListener("mousedown",e=>{1===e.button&&e.preventDefault()});window.addEventListener("mousewheel",M,{passive:!1});window.addEventListener("wheel",M,{passive:!1});window.addEventListener("resize",
()=>this.fc());window.addEventListener("fullscreenchange",()=>this.K());window.addEventListener("webkitfullscreenchange",()=>this.K());window.addEventListener("mozfullscreenchange",()=>this.K());window.addEventListener("fullscreenerror",e=>this.va(e));window.addEventListener("webkitfullscreenerror",e=>this.va(e));window.addEventListener("mozfullscreenerror",e=>this.va(e));b.ma()&&window.addEventListener("focusout",()=>{{const n=document.activeElement;if(n){var e=n.tagName.toLowerCase();var k=new Set("email number password search tel text url".split(" "));
e="textarea"===e?!0:"input"===e?k.has(n.type.toLowerCase()||"text"):A(n)}else e=!1}e||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=e=>this.hc(e);this.Ga=new Set;this.pc=new WeakSet;this.nc=!1}Fb(){"cordova"===this.f.a?(document.addEventListener("pause",()=>this.Aa(!0)),document.addEventListener("resume",()=>this.Aa(!1))):document.addEventListener("visibilitychange",()=>this.Aa(document.hidden));return{isSuspended:!(!document.hidden&&!F)}}Ma(){window.addEventListener("focus",()=>
this.M("window-focus"));window.addEventListener("blur",()=>{this.M("window-blur",{parentHasFocus:P()});this.S=0});window.addEventListener("focusin",c=>{c=c.target;(E.has(c.tagName.toLowerCase())||A(c))&&this.M("keyboard-blur")});window.addEventListener("keydown",c=>this.Ua("keydown",c));window.addEventListener("keyup",c=>this.Ua("keyup",c));window.addEventListener("dblclick",c=>this.xa("dblclick",c,l));window.addEventListener("wheel",c=>this.Tb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",
c=>{this.ta(c);this.L("pointerdown",c)}),this.f.j&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.T=new self.ob(()=>this.xb(),5),this.T.bb=!0,window.addEventListener("pointerrawupdate",c=>this.Ub(c))):window.addEventListener("pointermove",c=>this.L("pointermove",c)),window.addEventListener("pointerup",c=>this.L("pointerup",c)),window.addEventListener("pointercancel",c=>this.L("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ta(c);this.ya("pointerdown",c)}),
window.addEventListener("mousemove",c=>this.ya("pointermove",c)),window.addEventListener("mouseup",c=>this.ya("pointerup",c)),window.addEventListener("touchstart",c=>{this.ta(c);this.W("pointerdown",c)}),window.addEventListener("touchmove",c=>this.W("pointermove",c)),window.addEventListener("touchend",c=>this.W("pointerup",c)),window.addEventListener("touchcancel",c=>this.W("pointercancel",c)));const b=()=>this.Ba();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);
window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}M(b,c){u(this,b,c||null,x)}u(){return this.f.u()}s(){return this.f.s()}fc(){const b=this.u(),c=this.s();this.M("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.J()});this.f.ma()&&(-1!==this.G&&clearTimeout(this.G),this.Wa(b,c,0))}jc(b,c,a){-1!==this.G&&clearTimeout(this.G);this.G=setTimeout(()=>this.Wa(b,c,a),48)}Wa(b,c,a){const e=
this.u(),k=this.s();this.G=-1;e!=b||k!=c?this.M("window-resize",{innerWidth:e,innerHeight:k,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.J()}):10>a&&this.jc(e,k,a+1)}dc(b){this.Ja=b.targetOrientation}kc(){const b=this.Ja;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):
screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}K(){const b=g.J();b&&"any"!==this.Ja&&this.kc();u(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.u(),innerHeight:this.s()})}va(b){console.warn("[Construct 3] Fullscreen request failed: ",b);u(this,"fullscreenerror",{isFullscreen:g.J(),innerWidth:this.u(),
innerHeight:this.s()})}Aa(b){b?this.f.sb():this.f.Ya();u(this,"visibilitychange",{hidden:b})}Ua(b,c){"Backspace"===c.key&&v(c);const a=d.get(c.code)||c.code;z(this,b,{code:a,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},l)}Tb(b){u(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},l)}xa(b,c,
a){f(c)||z(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},a)}ya(b,c){if(!f(c)){var a=this.S;"pointerdown"===b&&0!==a?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");z(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:a,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||
0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},l);this.S=c.buttons;this.xa(c.type,c,m)}}L(b,c){if(this.T&&"pointermove"!==b){var a=this.T;a.O||(-1!==a.H&&(self.clearTimeout(a.H),a.H=-1),a.ca=Date.now())}a=0;"mouse"===c.pointerType&&(a=this.S);z(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:a,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:(c.movementX||0)+this.ea,movementY:(c.movementY||
0)+this.fa,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},l);this.fa=this.ea=0;"mouse"===c.pointerType&&(a="mousemove","pointerdown"===b?a="mousedown":"pointerup"===b&&(a="mouseup"),this.xa(a,c,m),this.S=c.buttons)}Ub(b){this.D&&(this.ea+=this.D.movementX||0,this.fa+=this.D.movementY||0);this.D=b;b=this.T;if(-1===b.H){var c=Date.now(),a=c-b.ca,e=b.mc;a>=e&&b.bb?(b.ca=c,
b.O=!0,b.ab(),b.O=!1):b.H=self.setTimeout(b.rc,Math.max(e-a,4))}}xb(){this.L("pointermove",this.D);this.D=null}W(b,c){for(let a=0,e=c.changedTouches.length;a<e;++a){const k=c.changedTouches[a];z(this,b,{pointerId:k.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:k.clientX,clientY:k.clientY,pageX:k.pageX,pageY:k.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(k.radiusX||k.webkitRadiusX||0),height:2*(k.radiusY||k.webkitRadiusY||0),pressure:k.force||k.webkitForce||
0,tangentialPressure:0,tiltX:0,tiltY:0,twist:k.rotationAngle||0,timeStamp:c.timeStamp},l)}}ta(b){window!==window.top&&window.focus();this.Sa(b.target)&&document.activeElement&&!this.Sa(document.activeElement)&&document.activeElement.blur()}Sa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}qb(){this.$a||(this.$a=!0,window.addEventListener("deviceorientation",b=>this.Lb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Mb(b)))}pb(){this.Za||
(this.Za=!0,window.addEventListener("devicemotion",b=>this.Kb(b)))}Lb(b){u(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}Mb(b){u(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}Kb(b){let c=null;var a=b.acceleration;a&&(c={x:a.x||0,y:a.y||0,z:a.z||0});
a=null;var e=b.accelerationIncludingGravity;e&&(a={x:e.x||0,y:e.y||0,z:e.z||0});e=null;const k=b.rotationRate;k&&(e={alpha:k.alpha||0,beta:k.beta||0,gamma:k.gamma||0});u(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:a,rotationRate:e,interval:b.interval,timeStamp:b.timeStamp},l)}ec(b){const c=this.f.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.cb&&(c.style.display="",this.cb=!1)}Qb(b){const c=
b.url;b=b.filename;const a=document.createElement("a"),e=document.body;a.textContent=b;a.href=c;a.download=b;e.appendChild(a);a.click();e.removeChild(a)}async Wb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Ob(b){return await self.C3_GetSvgImageSize(b.blob)}async Eb(b){await q(b.url)}Ba(){var b=[...this.Ga];this.Ga.clear();
if(!this.nc)for(const c of b)(b=c.play())&&b.catch(()=>{this.pc.has(c)||this.Ga.add(c)})}Pb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Jb(b){if(b.show){this.v||(this.v=document.createElement("div"),this.v.id="inspectOutline",document.body.appendChild(this.v));var c=this.v;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.v&&(this.v.style.display=
"none")}Xb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Va(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Cb(b,c){return this.f.nb(this.N,{name:b,params:c})}ua(b){alert(b.message)}hc(b){"entered-fullscreen"===b?(g.Z(!0),this.K()):"exited-fullscreen"===b?(g.Z(!1),this.K()):console.warn("Unknown wrapper message: ",b)}})}"use strict";
async function R(g){if(g.lc)throw Error("already initialised");g.lc=!0;var f=g.ga.sa("dispatchworker.js");g.Da=await g.ga.ka(f,g.c,{name:"DispatchWorker"});f=new MessageChannel;g.Ea=f.port1;g.Da.postMessage({type:"_init","in-port":f.port2},[f.port2]);g.Ha=await T(g)}function S(g){return[g.Ea,g.Ha]}
async function T(g){const f=g.eb.length;var d=g.ga.sa("jobworker.js");d=await g.ga.ka(d,g.c,{name:"JobWorker"+f});const l=new MessageChannel,m=new MessageChannel;g.Da.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);d.postMessage({type:"init",number:f,"dispatch-port":l.port2,"output-port":m.port2},[l.port2,m.port2]);g.eb.push(d);return m.port1}
self.mb=class{constructor(g){this.ga=g;this.c=g.c;this.c="preview"===g.a?this.c+"workers/":this.c+g.ha;this.oc=Math.min(navigator.hardwareConcurrency||2,16);this.Da=null;this.eb=[];this.Ha=this.Ea=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.h({Bc:!1,Cc:"workermain.js",I:["scripts/c3runtime.js"],ia:[],Ka:"",yc:"scripts/",La:[],hb:"html5"}));"use strict";
{function g(f){f.stopPropagation()}self.h.m(class extends self.la{constructor(f){super(f,"button")}V(f,d){const l=document.createElement("input");var m=l;d.isCheckbox?(l.type="checkbox",m=document.createElement("label"),m.appendChild(l),m.appendChild(document.createTextNode("")),m.style.fontFamily="sans-serif",m.style.userSelect="none",m.style.webkitUserSelect="none",m.style.display="inline-block",m.style.color="black"):l.type="button";m.style.position="absolute";m.addEventListener("touchstart",g);
m.addEventListener("touchmove",g);m.addEventListener("touchend",g);m.addEventListener("mousedown",g);m.addEventListener("mouseup",g);m.addEventListener("keydown",g);m.addEventListener("keyup",g);l.addEventListener("click",()=>Q(this,"click",f,{isChecked:l.checked}));d.id&&(l.id=d.id);this.o(m,d);return m}Qa(f){return"input"===f.tagName.toLowerCase()?f:f.firstChild}qa(f){return this.Qa(f)}o(f,d){const l=this.Qa(f);l.checked=d.isChecked;l.disabled=!d.isEnabled;f.title=d.title;f===l?l.value=d.text:f.lastChild.textContent=
d.text}})}"use strict";function U(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(f=>u(g,"sw-message",f.data))}
function V(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(f=>console.warn("[Construct 3] Failed to lock orientation: ",f));else try{let f=!1;screen.lockOrientation?f=screen.lockOrientation(g):screen.webkitLockOrientation?f=screen.webkitLockOrientation(g):screen.mozLockOrientation?f=screen.mozLockOrientation(g):screen.msLockOrientation&&(f=screen.msLockOrientation(g));f||console.warn("[Construct 3] Failed to lock orientation")}catch(f){console.warn("[Construct 3] Failed to lock orientation: ",
f)}}
self.h.m(class extends self.B{constructor(g){super(g,"browser");this.a="";G(this,[["get-initial-state",f=>this.wa(f)],["ready-for-sw-messages",()=>U(this)],["alert",f=>this.ua(f)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",f=>this.za(f)],["vibrate",f=>{navigator.vibrate&&navigator.vibrate(f.pattern)}],["lock-orientation",f=>V(f)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(f){}}],["navigate",f=>{var d=f.type;if("back"===d)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===d)window.history.forward();else if("reload"===d)location.reload();else if("url"===
d){d=f.url;const l=f.target;f=f.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(d,"_system"):"preview"===f||"windows-webview2"===f?window.open(d,"_blank"):this.Gc||(2===l?window.top.location=d:1===l?window.parent.location=d:window.location=d)}else"new-window"===d&&(d=f.url,f=f.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(d,"_system"):window.open(d,f))}],["request-fullscreen",f=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.h.Z(!0),
this.f.Ca({type:"set-fullscreen",fullscreen:!0});else{const d={navigationUI:"auto"};f=f.navUI;1===f?d.navigationUI="hide":2===f&&(d.navigationUI="show");f=document.documentElement;f.requestFullscreen?f.requestFullscreen(d):f.mozRequestFullScreen?f.mozRequestFullScreen(d):f.msRequestFullscreen?f.msRequestFullscreen(d):f.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):f.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.h.Z(!1),this.f.Ca({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",f=>{location.hash=f.hash}]]);window.addEventListener("online",()=>{u(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{u(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{u(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{u(this,"backbutton")})}wa(g){this.a=g.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}ua(g){alert(g.message)}za(g){g=g.isFocus;if("nwjs"===this.a){const f="nwjs"===this.a?nw.Window.get():null;g?f.focus():f.blur()}else g?window.focus():window.blur()}});"use strict";
{function g(d){d.stopPropagation()}function f(d){13!==d.which&&27!==d.which&&d.stopPropagation()}self.h.m(class extends self.la{constructor(d){super(d,"text-input");O(this,"scroll-to-bottom",l=>this.ac(l))}V(d,l){let m;const x=l.type;"textarea"===x?(m=document.createElement("textarea"),m.style.resize="none"):(m=document.createElement("input"),m.type=x);m.style.position="absolute";m.autocomplete="off";m.addEventListener("touchstart",g);m.addEventListener("touchmove",g);m.addEventListener("touchend",
g);m.addEventListener("mousedown",g);m.addEventListener("mouseup",g);m.addEventListener("keydown",f);m.addEventListener("keyup",f);m.addEventListener("click",q=>{q.stopPropagation();Q(this,"click",d)});m.addEventListener("dblclick",q=>{q.stopPropagation();Q(this,"dblclick",d)});m.addEventListener("input",()=>K(this,"change",d,{text:m.value}));l.id&&(m.id=l.id);this.o(m,l);return m}o(d,l){d.value=l.text;d.placeholder=l.placeholder;d.title=l.title;d.disabled=!l.isEnabled;d.readOnly=l.isReadOnly;d.spellcheck=
l.spellCheck;l=l.maxLength;0>l?d.removeAttribute("maxlength"):d.setAttribute("maxlength",l)}ac(d){d.scrollTop=d.scrollHeight}})}"use strict";
{function g(f){f.stopPropagation()}self.h.m(class extends self.la{constructor(f){super(f,"list");O(this,"set-selected-index",(d,l)=>this.cc(d,l.selectedIndex));O(this,"add-item",(d,l)=>this.Db(d,l));O(this,"remove-item",(d,l)=>this.Yb(d,l));O(this,"set-item",(d,l)=>this.bc(d,l));O(this,"clear",d=>this.Gb(d));O(this,"load-state",(d,l)=>this.Rb(d,l))}V(f,d){const l=d.isDropdown,m=d.isMultiSelect,x=d.items,q=document.createElement("select");q.style.position="absolute";q.style.userSelect="none";q.style.webkitUserSelect=
"none";q.multiple=m;l||(q.size=2);for(const y of x)q.add(this.pa(y));q.addEventListener("touchstart",g);q.addEventListener("touchmove",g);q.addEventListener("touchend",g);q.addEventListener("mousedown",g);q.addEventListener("mouseup",g);q.addEventListener("click",y=>{y.stopPropagation();Q(this,"click",f,this.ra(q))});q.addEventListener("dblclick",y=>{y.stopPropagation();Q(this,"dblclick",f,this.ra(q))});q.addEventListener("change",()=>K(this,"change",f,this.ra(q)));d.id&&(q.id=d.id);this.o(q,d);return q}pa(f){const d=
document.createElement("option");d.text=f;return d}ra(f){const d=f.selectedIndex,l=[];for(let m=0,x=f.length;m<x;++m)f.options[m].selected&&l.push(m);return{selectedIndex:d,selectedIndices:l}}o(f,d){f.title=d.title;f.disabled=!d.isEnabled;f.multiple=!!d.isMultiSelect}cc(f,d){f.selectedIndex=d}Db(f,d){const l=d.index;d=this.pa(d.text);0>l?f.add(d):f.add(d,l)}Yb(f,d){f.remove(d.index)}bc(f,d){f.options[d.index].text=d.text}Gb(f){f.innerHTML=""}Rb(f,d){f.innerHTML="";for(const l of d.items)f.add(this.pa(l));
f.selectedIndex=d.selectedIndex;for(const l of d.selectedIndices)if(d=f.options[l])d.selected=!0}})}"use strict";async function W(g,f){f=f.type;let d=!0;0===f?d=await X():1===f&&(d=await Y());u(g,"permission-result",{type:f,result:d})}
async function X(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function Y(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.h.m(class extends self.B{constructor(g){super(g,"touch");C(this,"request-permission",f=>W(this,f))}});"use strict";
async function aa(g){if(!g.A)try{g.A=await navigator.wakeLock.request("screen"),g.A.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");g.A=null;u(g,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),u(g,"wake-lock-acquired")}catch(f){console.warn("[Construct 3] Failed to acquire screen wake lock: ",f),u(g,"wake-lock-error")}}
function Z(){var g=document.body;const f=g.style;f.setProperty("--temp-sai-top","env(safe-area-inset-top)");f.setProperty("--temp-sai-right","env(safe-area-inset-right)");f.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");f.setProperty("--temp-sai-left","env(safe-area-inset-left)");g=getComputedStyle(g);g=[g.getPropertyValue("--temp-sai-top"),g.getPropertyValue("--temp-sai-right"),g.getPropertyValue("--temp-sai-bottom"),g.getPropertyValue("--temp-sai-left")].map(d=>{d=parseInt(d,10);
return isFinite(d)?d:0});f.removeProperty("--temp-sai-top");f.removeProperty("--temp-sai-right");f.removeProperty("--temp-sai-bottom");f.removeProperty("--temp-sai-left");return g}
self.h.m(class extends self.B{constructor(g){super(g,"platform-info");G(this,[["get-initial-state",()=>this.wa()],["request-wake-lock",()=>aa(this)],["release-wake-lock",()=>{this.A&&(this.A.release(),this.A=null)}]]);window.addEventListener("resize",()=>{u(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:Z()})});this.A=null}wa(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:Z(),supportsWakeLock:!!navigator.wakeLock}}});"use strict";
self.h.m(class extends self.B{constructor(g){super(g,"mouse");G(this,[["cursor",f=>{document.documentElement.style.cursor=f}],["request-pointer-lock",()=>{this.f.g.requestPointerLock()}],["release-pointer-lock",()=>{document.exitPointerLock()}]]);document.addEventListener("pointerlockchange",()=>{u(this,"pointer-lock-change",{"has-pointer-lock":!!document.pointerLockElement})});document.addEventListener("pointerlockerror",()=>{u(this,"pointer-lock-error",{"has-pointer-lock":!!document.pointerLockElement})})}});

'use strict';function u(e,g,f,l){e.c.ma(e.M,g,f,l,void 0)}function B(e,g,f,l){e.c.i?u(e,g,f,l):e.c.Gb()._OnMessageFromDOM({type:"event",component:e.M,handler:g,dispatchOpts:l||null,data:f,responseId:null})}function L(e,g,f){e.c.b(e.M,g,f)}function M(e,g){for(const [f,l]of g)L(e,f,l)}window.H=class{constructor(e,g){this.c=e;this.M=g}La(){}};
window.tb=class{constructor(e,g){this.ab=e;this.qc=g;this.D=-1;this.ba=-Infinity;this.vc=()=>{this.D=-1;this.ba=Date.now();this.N=!0;this.ab();this.N=!1};this.bb=this.N=!1}};"use strict";function N(e,g){const f=g.elementId,l=e.Na(f,g);e.h.set(f,l);l.style.boxSizing="border-box";g.isVisible||(l.style.display="none");l.addEventListener("focus",()=>{P(e,"elem-focused",f)});l.addEventListener("blur",()=>{P(e,"elem-blurred",f)});e.Z&&document.body.appendChild(l)}
function Q(e,g,f){L(e,g,l=>{const q=e.h.get(l.elementId);return f(q,l)})}function P(e,g,f,l){l||(l={});l.elementId=f;u(e,g,l)}function R(e,g,f){var l;l||(l={});l.elementId=f;B(e,g,l)}
window.mb=class extends self.H{constructor(e,g){super(e,g);this.h=new Map;this.Z=!0;M(this,[["create",f=>N(this,f)],["destroy",f=>{{f=f.elementId;const l=this.h.get(f);this.Z&&l.parentElement.removeChild(l);this.h.delete(f)}}],["set-visible",f=>{this.Z&&(this.h.get(f.elementId).style.display=f.isVisible?"":"none")}],["update-position",f=>{if(this.Z){var l=this.h.get(f.elementId);l.style.left=f.left+"px";l.style.top=f.top+"px";l.style.width=f.width+"px";l.style.height=f.height+"px";f=f.fontSize;null!==
f&&(l.style.fontSize=f+"em")}}],["update-state",f=>{{const l=this.h.get(f.elementId);this.na(l,f)}}],["focus",f=>this.xa(f)],["set-css-style",f=>{this.h.get(f.elementId).style[f.prop]=f.val}],["set-attribute",f=>{this.h.get(f.elementId).setAttribute(f.name,f.val)}],["remove-attribute",f=>{this.h.get(f.elementId).removeAttribute(f.name)}]]);Q(this,"get-element",f=>f)}Na(){throw Error("required override");}na(){throw Error("required override");}xa(e){var g=this.h.get(e.elementId);e.focus?g.focus():
g.blur()}};"use strict";
{const e=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),g=/android/i.test(navigator.userAgent);let f=0;function l(k){const a=document.createElement("script");a.async=!1;a.type="module";return k.Ac?new Promise(d=>{const h="c3_resolve_"+f;++f;self[h]=d;a.textContent=k.Dc+`\n\nself["${h}"]();`;document.head.appendChild(a)}):new Promise((d,h)=>{a.onload=d;a.onerror=h;a.src=k;document.head.appendChild(a)})}let q=!1,y=!1;function z(){if(!q){try{new Worker("blob://",{get type(){y=
!0}})}catch(k){}q=!0}return y}let x=new Audio;const C={"audio/webm; codecs=opus":!!x.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!x.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!x.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!x.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!x.canPlayType("audio/mp4"),"audio/mpeg":!!x.canPlayType("audio/mpeg")};x=null;async function O(k){k=await I(k);return(new TextDecoder("utf-8")).decode(k)}
function I(k){return new Promise((a,d)=>{const h=new FileReader;h.onload=n=>a(n.target.result);h.onerror=n=>d(n);h.readAsArrayBuffer(k)})}const A=[];let D=0;window.RealFile=window.File;const E=[],v=new Map,F=new Map;let G=0;const J=[];self.runOnStartup=function(k){if("function"!==typeof k)throw Error("runOnStartup called without a function");J.push(k)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.m=class k{constructor(a){this.i=a.Fc;this.P=null;this.f="";this.ha=a.Cc;
this.U={};this.Ea=this.jb=null;this.$=[];this.g=this.Ha=null;this.eb=!1;this.O=null;this.B=-1;this.uc=()=>this.ac();this.ib=[];this.a=a.kb;this.aa="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&z()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(g){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.da=this.l=null;"html5"!==
this.a&&"playable-ad"!==this.a||!this.aa||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.Mb(d));this.b("runtime",
"create-job-worker",()=>this.Nb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ra(a)):this.Ra(a)}qb(){return e&&"cordova"===this.a}la(){const a=navigator.userAgent;return e&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}ob(){return g}Oa(){return g&&b.has(this.a)}async Ra(a){"macos-wkwebview"===this.a&&this.Aa({type:"ready"});if("playable-ad"===this.a){this.l=self.c3_base64files;this.da={};await this.Ab();for(let h=0,n=a.F.length;h<n;++h){var d=a.F[h].toLowerCase();
this.da.hasOwnProperty(d)?a.F[h]={Ac:!0,Dc:this.da[d]}:this.l.hasOwnProperty(d)&&(a.F[h]=URL.createObjectURL(this.l[d]))}}a.wc?this.f=a.wc:(d=location.origin,this.f=("null"===d?"file:///":d)+location.pathname,d=this.f.lastIndexOf("/"),-1!==d&&(this.f=this.f.substr(0,d+1)));a.Hc&&(this.U=a.Hc);d=new MessageChannel;this.P=d.port1;this.P.onmessage=h=>this._OnMessageFromRuntime(h.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(h=>this.Yb(h));this.O=new self.rb(this);await S(this.O);
"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.Ib(a,d.port2):await this.Hb(a,d.port2)}pa(a){a=this.U.hasOwnProperty(a)?this.U[a]:a.endsWith("/workermain.js")&&this.U.hasOwnProperty("workermain.js")?this.U["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ka(a,d,h){if(a.startsWith("blob:"))return new Worker(a,
h);if("cordova"===this.a&&this.aa)return a=await this.ja(h.zc?a:this.ha+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),h);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),h)}return new Worker(a,h)}o(){return Math.max(window.innerWidth,1)}j(){return Math.max(window.innerHeight,1)}Qa(a){var d=this.O;return{baseUrl:this.f,previewUrl:location.href,
windowInnerWidth:this.o(),windowInnerHeight:this.j(),devicePixelRatio:window.devicePixelRatio,isFullscreen:k.I(),projectData:a.Oc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Mc||"",exportType:a.kb,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Nc,jobScheduler:{inputPort:d.Da,outputPort:d.Ga,maxNumWorkers:d.sc},supportedAudioFormats:C,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.ha+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ha+"opus.wasm.wasm",isFileProtocol:this.aa,isiOSCordova:this.qb(),isiOSWebView:this.la(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Ib(a,d){var h=this.pa(a.Gc);this.jb=await this.ka(h,this.f,{type:"module",name:"Runtime",zc:!0});this.g=document.createElement("canvas");this.g.style.display="none";h=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let n=a.Ka||[],
t=a.F;n=await Promise.all(n.map(p=>this.v(p)));t=await Promise.all(t.map(p=>this.v(p)));if("cordova"===this.a)for(let p=0,r=a.ia.length;p<r;++p){const w=a.ia[p],K=w[0];if(K===a.Ja||"scriptsInEvents.js"===K||K.endsWith("/scriptsInEvents.js"))w[1]=await this.v(K)}this.jb.postMessage(Object.assign(this.Qa(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:h,workerDependencyScripts:n,engineScripts:t,projectScripts:a.ia,mainProjectScript:a.Ja,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[d,h,...T(this.O)]);this.$=E.map(p=>new p(this));this.Pa();self.c3_callFunction=(p,r)=>this.Ha.Jb(p,r);"preview"===this.a&&(self.goToLastErrorScript=()=>this.ma("runtime","go-to-last-error-script"))}async Hb(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.$=E.map(p=>new p(this));this.Pa();var h=a.F.map(p=>"string"===typeof p?(new URL(p,this.f)).toString():p);Array.isArray(a.Ka)&&h.unshift(...a.Ka);h=await Promise.all(h.map(p=>
this.v(p)));await Promise.all(h.map(p=>l(p)));h=self.C3_ProjectScriptsStatus;const n=a.Ja,t=a.ia;for(let [p,r]of t)if(r||(r=p),p===n)try{r=await this.v(r),await l(r),"preview"!==this.a||h[p]||this.Xa(p,"main script did not run to completion")}catch(w){this.Xa(p,w)}else if("scriptsInEvents.js"===p||p.endsWith("/scriptsInEvents.js"))r=await this.v(r),await l(r);"preview"===this.a&&"object"!==typeof self.Ic.Jc?(this.X(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Qa(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:J}),this.Ta(),this.Ea=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Ea,a))}Xa(a,d){this.X();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ta(){this.X()}X(){const a=
window.xc;a&&(a.parentElement.removeChild(a),window.xc=null)}async Nb(){const a=await U(this.O);return{outputPort:a,transferables:[a]}}Gb(){if(this.i)throw Error("not available in worker mode");return this.Ea}ma(a,d,h,n,t){this.P.postMessage({type:"event",component:a,handler:d,dispatchOpts:n||null,data:h,responseId:null},t)}sb(a,d){const h=G++,n=new Promise((t,p)=>{F.set(h,{resolve:t,reject:p})});this.P.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:h},
void 0);return n}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Sb(a);if("result"===d)this.dc(a);else if("runtime-ready"===d)this.ec();else if("alert-error"===d)this.X(),alert(a.message);else if("creating-runtime"===d)this.Ta();else throw Error(`unknown message '${d}'`);}Sb(a){const d=a.component,h=a.handler,n=a.data,t=a.responseId;if(a=v.get(d))if(a=a.get(h)){var p=null;try{p=a(n)}catch(r){console.error(`Exception in '${d}' handler '${h}':`,r);null!==t&&this.W(t,!1,""+r);
return}if(null===t)return p;p&&p.then?p.then(r=>this.W(t,!0,r)).catch(r=>{console.error(`Rejection from '${d}' handler '${h}':`,r);this.W(t,!1,""+r)}):this.W(t,!0,p)}else console.warn(`[DOM] No handler '${h}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}W(a,d,h){let n;h&&h.transferables&&(n=h.transferables);this.P.postMessage({type:"result",responseId:a,isOk:d,result:h},n)}dc(a){const d=a.responseId,h=a.isOk;a=a.result;const n=F.get(d);h?n.resolve(a):n.reject(a);
F.delete(d)}b(a,d,h){let n=v.get(a);n||(n=new Map,v.set(a,n));if(n.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);n.set(d,h)}static G(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}Pa(){for(const a of this.$)if("runtime"===a.M){this.Ha=a;return}throw Error("cannot find runtime DOM handler");}Yb(a){this.ma("debugger","message",a)}ec(){for(const a of this.$)a.La()}static I(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static Y(a){c=!!a}Ya(){-1===this.B&&this.ib.length&&(this.B=requestAnimationFrame(this.uc))}yb(){-1!==this.B&&(cancelAnimationFrame(this.B),this.B=-1)}ac(){this.B=-1;for(const a of this.ib)a();this.Ya()}za(){this.Ha.za()}ub(){this.eb=!0}nb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}pb(a){return!this.nb(a)}async v(a){return"cordova"===this.a&&(a.startsWith("file:")||this.aa&&this.pb(a))?(a.startsWith(this.f)&&(a=a.substr(this.f.length)),a=await this.ja(a),
URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Mb(a){const d=a.filename;switch(a.as){case "text":return await this.lb(d);case "buffer":return await this.ja(d);default:throw Error("unsupported type");}}Ma(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((h,n)=>{window.resolveLocalFileSystemURL(d,t=>{t.file(h,n)},n)})}async lb(a){a=await this.Ma(a);return await O(a)}oa(){if(A.length&&!(8<=D)){D++;var a=A.shift();this.Bb(a.filename,
a.Ec,a.yc)}}ja(a){return new Promise((d,h)=>{A.push({filename:a,Ec:n=>{D--;this.oa();d(n)},yc:n=>{D--;this.oa();h(n)}});this.oa()})}async Bb(a,d,h){try{const n=await this.Ma(a),t=await I(n);d(t)}catch(n){h(n)}}Aa(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async Ab(){const a=[];for(const [d,h]of Object.entries(this.l))a.push(this.zb(d,
h));await Promise.all(a)}async zb(a,d){if("object"===typeof d)this.l[a]=new Blob([d.str],{type:d.type}),this.da[a]=d.str;else{let h=await this.Fb(d);h||(h=this.Cb(d));this.l[a]=h}}async Fb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}Cb(a){a=this.lc(a);return this.xb(a.data,
a.Bc)}lc(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var h=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const n=d[2];h="base64"===d[1]||"base64"===n?atob(h):decodeURIComponent(h);return{Bc:a,data:h}}xb(a,d){var h=a.length;let n=h>>2,t=new Uint8Array(h),p=new Uint32Array(t.buffer,0,n),r,w;for(w=r=0;r<n;++r)p[r]=a.charCodeAt(w++)|a.charCodeAt(w++)<<8|a.charCodeAt(w++)<<16|a.charCodeAt(w++)<<24;for(h&=3;h--;)t[w]=a.charCodeAt(w),++w;return new Blob([t],
{type:d})}}}"use strict";
{const e=self.m;function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const f=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},q={dispatchUserScriptEvent:!0},y={dispatchRuntimeEvent:!0};function z(b){return new Promise((c,k)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>k(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function x(b){return new Promise((c,k)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>k(d);a.src=b})}async function C(b){b=URL.createObjectURL(b);try{return await x(b)}finally{URL.revokeObjectURL(b)}}function O(b){return new Promise((c,k)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>k(d);a.readAsText(b)})}async function I(b,c,k){if(!/firefox/i.test(navigator.userAgent))return await C(b);var a=await O(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const h=d.getAttribute("width"),n=d.getAttribute("height");if(!h.includes("%")&&!n.includes("%"))return await C(b)}d.setAttribute("width",c+"px");d.setAttribute("height",k+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await C(b)}function A(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const D=new Set(["input",
"textarea","datalist","select"]),E=new Set(["canvas","body","html"]);function v(b){E.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function F(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await C(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,k,a,d){b=await I(b,c,k);const h=document.createElement("canvas");h.width=a;h.height=d;h.getContext("2d").drawImage(b,0,0,c,k);return h};let G=!1;document.addEventListener("pause",()=>G=!0);document.addEventListener("resume",()=>G=!1);function J(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}e.G(class extends self.H{constructor(b){super(b,"runtime");this.fb=!0;this.C=-1;this.Ia="any";this.Za=this.$a=!1;this.s=
null;this.cb="";this.Ca=-1;this.A=this.S=null;this.fa=this.ea=0;this.hb=b.o();this.ca=b.j();this.T=0;b.b("canvas","update-size",a=>this.ic(a));b.b("runtime","invoke-download",a=>this.Xb(a));b.b("runtime","raster-svg-image",a=>this.bc(a));b.b("runtime","get-svg-image-size",a=>this.Vb(a));b.b("runtime","set-target-orientation",a=>this.hc(a));b.b("runtime","register-sw",()=>this.cc());b.b("runtime","post-to-debugger",a=>this.Va(a));b.b("runtime","go-to-script",a=>this.Va(a));b.b("runtime","before-start-ticking",
()=>this.Lb());b.b("runtime","debug-highlight",a=>this.Ob(a));b.b("runtime","enable-device-orientation",()=>this.wb());b.b("runtime","enable-device-motion",()=>this.vb());b.b("runtime","add-stylesheet",a=>this.Kb(a));b.b("runtime","alert",a=>this.ra(a));b.b("runtime","hide-cordova-splash",()=>this.Wb());b.b("runtime","set-exporting-to-video",a=>this.nc(a));b.b("runtime","export-to-video-progress",a=>this.Tb(a));b.b("runtime","exported-to-video",a=>this.Ub(a));const c=new Set(["input","textarea","datalist"]);
window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||A(d)||a.preventDefault()});const k=b.g;window.addEventListener("selectstart",v);window.addEventListener("gesturehold",v);k.addEventListener("selectstart",v);k.addEventListener("gesturehold",v);window.addEventListener("touchstart",v,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",v,{passive:!1}),k.addEventListener("pointerdown",v)):k.addEventListener("touchstart",v);this.R=
0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",F,{passive:!1});window.addEventListener("wheel",F,{passive:!1});window.addEventListener("resize",()=>this.jc());window.addEventListener("fullscreenchange",()=>this.J());window.addEventListener("webkitfullscreenchange",()=>this.J());window.addEventListener("mozfullscreenchange",()=>this.J());window.addEventListener("fullscreenerror",a=>this.ta(a));window.addEventListener("webkitfullscreenerror",
a=>this.ta(a));window.addEventListener("mozfullscreenerror",a=>this.ta(a));if(b.la())if(window.visualViewport){let a=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>a&&(document.scrollingElement.scrollTop=0);a=d})}else window.addEventListener("focusout",()=>{{const h=document.activeElement;if(h){var a=h.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));a="textarea"===a?!0:"input"===a?d.has(h.type.toLowerCase()||
"text"):A(h)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.kc(a);this.Fa=new Set;this.tc=new WeakSet;this.rc=!1}Lb(){"cordova"===this.c.a?(document.addEventListener("pause",()=>this.ya(!0)),document.addEventListener("resume",()=>this.ya(!1))):document.addEventListener("visibilitychange",()=>this.ya(document.hidden));return{isSuspended:!(!document.hidden&&!G)}}La(){window.addEventListener("focus",()=>this.L("window-focus"));window.addEventListener("blur",()=>
{this.L("window-blur",{parentHasFocus:J()});this.R=0});window.addEventListener("focusin",c=>{c=c.target;(D.has(c.tagName.toLowerCase())||A(c))&&this.L("keyboard-blur")});window.addEventListener("keydown",c=>this.Ua("keydown",c));window.addEventListener("keyup",c=>this.Ua("keyup",c));window.addEventListener("dblclick",c=>this.va("dblclick",c,l));window.addEventListener("wheel",c=>this.Zb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.qa(c);this.K("pointerdown",
c)}),this.c.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.S=new self.tb(()=>this.Db(),5),this.S.bb=!0,window.addEventListener("pointerrawupdate",c=>this.$b(c))):window.addEventListener("pointermove",c=>this.K("pointermove",c)),window.addEventListener("pointerup",c=>this.K("pointerup",c)),window.addEventListener("pointercancel",c=>this.K("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.qa(c);this.wa("pointerdown",c)}),window.addEventListener("mousemove",
c=>this.wa("pointermove",c)),window.addEventListener("mouseup",c=>this.wa("pointerup",c)),window.addEventListener("touchstart",c=>{this.qa(c);this.V("pointerdown",c)}),window.addEventListener("touchmove",c=>this.V("pointermove",c)),window.addEventListener("touchend",c=>this.V("pointerup",c)),window.addEventListener("touchcancel",c=>this.V("pointercancel",c)));const b=()=>this.za();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,
!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.c.ob()&&!this.c.Oa()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.sa(this.j(),navigator.virtualKeyboard.boundingRect.height)}))}sa(b,c){document.body.style.transform="";if(0<c){var k=document.activeElement;k&&(k=k.getBoundingClientRect(),b=(k.top+k.bottom)/2-(b-c)/2,b>c&&(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=
`translateY(${-b}px)`))}}L(b,c){u(this,b,c||null,y)}o(){return this.c.o()}j(){return this.c.j()}jc(){const b=this.o(),c=this.j();if(this.c.Oa()){if(this.hb===b&&c<this.ca){this.T=this.ca-c;this.sa(this.ca,this.T);return}0<this.T&&(this.T=0,this.sa(c,this.T));this.hb=b;this.ca=c}this.L("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:e.I()});this.c.la()&&(-1!==this.C&&clearTimeout(this.C),this.Wa(b,c,0))}mc(b,c,k){-1!==this.C&&clearTimeout(this.C);this.C=
setTimeout(()=>this.Wa(b,c,k),48)}Wa(b,c,k){const a=this.o(),d=this.j();this.C=-1;a!=b||d!=c?this.L("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:e.I()}):10>k&&this.mc(a,d,k+1)}hc(b){this.Ia=b.targetOrientation}oc(){const b=this.Ia;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?
c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}J(){const b=e.I();b&&"any"!==this.Ia&&this.oc();u(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.j()})}ta(b){console.warn("[Construct 3] Fullscreen request failed: ",b);u(this,"fullscreenerror",
{isFullscreen:e.I(),innerWidth:this.o(),innerHeight:this.j()})}ya(b){b?this.c.yb():this.c.Ya();u(this,"visibilitychange",{hidden:b})}Ua(b,c){"Backspace"===c.key&&v(c);const k=f.get(c.code)||c.code;B(this,b,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},l)}Zb(b){u(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,
timeStamp:b.timeStamp},l)}va(b,c,k){g(c)||B(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},k)}wa(b,c){if(!g(c)){var k=this.R;"pointerdown"===b&&0!==k?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");B(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},l);this.R=c.buttons;this.va(c.type,c,q)}}K(b,c){if(this.S&&"pointermove"!==b){var k=this.S;k.N||(-1!==k.D&&(self.clearTimeout(k.D),k.D=-1),k.ba=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.R);B(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:(c.movementX||0)+this.ea,movementY:(c.movementY||0)+this.fa,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},l);this.fa=this.ea=0;"mouse"===c.pointerType&&(k="mousemove","pointerdown"===b?k="mousedown":"pointerup"===b&&(k="mouseup"),this.va(k,c,q),this.R=c.buttons)}$b(b){this.A&&(this.ea+=this.A.movementX||0,this.fa+=this.A.movementY||0);this.A=b;b=this.S;if(-1===
b.D){var c=Date.now(),k=c-b.ba,a=b.qc;k>=a&&b.bb?(b.ba=c,b.N=!0,b.ab(),b.N=!1):b.D=self.setTimeout(b.vc,Math.max(a-k,4))}}Db(){this.K("pointermove",this.A);this.A=null}V(b,c){for(let k=0,a=c.changedTouches.length;k<a;++k){const d=c.changedTouches[k];B(this,b,{pointerId:d.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*(d.radiusY||
d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},l)}}qa(b){window!==window.top&&window.focus();this.Sa(b.target)&&document.activeElement&&!this.Sa(document.activeElement)&&document.activeElement.blur()}Sa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}wb(){this.$a||(this.$a=!0,window.addEventListener("deviceorientation",b=>this.Qb(b)),window.addEventListener("deviceorientationabsolute",
b=>this.Rb(b)))}vb(){this.Za||(this.Za=!0,window.addEventListener("devicemotion",b=>this.Pb(b)))}Qb(b){u(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}Rb(b){u(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}Pb(b){let c=null;var k=b.acceleration;k&&(c=
{x:k.x||0,y:k.y||0,z:k.z||0});k=null;var a=b.accelerationIncludingGravity;a&&(k={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});u(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},l)}ic(b){var c=this.c;c.eb||(c=c.g,c.style.width=b.styleWidth+"px",c.style.height=b.styleHeight+"px",c.style.marginLeft=b.marginLeft+"px",c.style.marginTop=b.marginTop+"px",this.fb&&
(c.style.display="",this.fb=!1))}Xb(b){const c=b.url;b=b.filename;const k=document.createElement("a"),a=document.body;k.textContent=b;k.href=c;k.download=b;a.appendChild(k);k.click();a.removeChild(k)}async bc(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Vb(b){return await self.C3_GetSvgImageSize(b.blob)}async Kb(b){await z(b.url)}za(){var b=
[...this.Fa];this.Fa.clear();if(!this.rc)for(const c of b)(b=c.play())&&b.catch(()=>{this.tc.has(c)||this.Fa.add(c)})}Wb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Ob(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var c=this.s;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.s&&
(this.s.style.display="none")}cc(){window.C3_RegisterSW&&window.C3_RegisterSW()}Va(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Jb(b,c){return this.c.sb(this.M,{name:b,params:c})}ra(b){alert(b.message)}kc(b){"entered-fullscreen"===b?(e.Y(!0),this.J()):"exited-fullscreen"===b?(e.Y(!1),this.J()):console.warn("Unknown wrapper message: ",b)}nc(b){const c=document.createElement("h1");c.id="exportToVideoMessage";c.textContent=b.message;document.body.prepend(c);document.body.classList.add("exportingToVideo");
this.c.g.style.display="";this.c.ub()}Tb(b){this.cb=b.message;-1===this.Ca&&(this.Ca=setTimeout(()=>this.Eb(),250))}Eb(){this.Ca=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=this.cb)}Ub(b){window.Lc({type:"exported-video",blob:b.blob,time:b.time})}})}"use strict";
async function S(e){if(e.pc)throw Error("already initialised");e.pc=!0;var g=e.ga.pa("dispatchworker.js");e.Ba=await e.ga.ka(g,e.f,{name:"DispatchWorker"});g=new MessageChannel;e.Da=g.port1;e.Ba.postMessage({type:"_init","in-port":g.port2},[g.port2]);e.Ga=await U(e)}function T(e){return[e.Da,e.Ga]}
async function U(e){const g=e.gb.length;var f=e.ga.pa("jobworker.js");f=await e.ga.ka(f,e.f,{name:"JobWorker"+g});const l=new MessageChannel,q=new MessageChannel;e.Ba.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);f.postMessage({type:"init",number:g,"dispatch-port":l.port2,"output-port":q.port2},[l.port2,q.port2]);e.gb.push(f);return q.port1}
self.rb=class{constructor(e){this.ga=e;this.f=e.f;this.f="preview"===e.a?this.f+"workers/":this.f+e.ha;this.sc=Math.min(navigator.hardwareConcurrency||2,16);this.Ba=null;this.gb=[];this.Ga=this.Da=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.m({Fc:!1,Gc:"workermain.js",F:["scripts/c3runtime.js"],ia:[],Ja:"",Cc:"scripts/",Ka:[],kb:"html5"}));"use strict";
async function V(e,g){g=g.type;let f=!0;0===g?f=await W():1===g&&(f=await X());u(e,"permission-result",{type:g,result:f})}async function W(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(e){return console.warn("[Touch] Failed to request orientation permission: ",e),!1}}
async function X(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(e){return console.warn("[Touch] Failed to request motion permission: ",e),!1}}self.m.G(class extends self.H{constructor(e){super(e,"touch");L(this,"request-permission",g=>V(this,g))}});"use strict";
function Y(e){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(g=>u(e,"sw-message",g.data))}
function aa(e){e=e.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(e).catch(g=>console.warn("[Construct 3] Failed to lock orientation: ",g));else try{let g=!1;screen.lockOrientation?g=screen.lockOrientation(e):screen.webkitLockOrientation?g=screen.webkitLockOrientation(e):screen.mozLockOrientation?g=screen.mozLockOrientation(e):screen.msLockOrientation&&(g=screen.msLockOrientation(e));g||console.warn("[Construct 3] Failed to lock orientation")}catch(g){console.warn("[Construct 3] Failed to lock orientation: ",
g)}}
self.m.G(class extends self.H{constructor(e){super(e,"browser");this.a="";M(this,[["get-initial-state",g=>this.ua(g)],["ready-for-sw-messages",()=>Y(this)],["alert",g=>this.ra(g)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",g=>this.xa(g)],["vibrate",g=>{navigator.vibrate&&navigator.vibrate(g.pattern)}],["lock-orientation",g=>aa(g)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(g){}}],["navigate",g=>{var f=g.type;if("back"===f)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===f)window.history.forward();else if("reload"===f)location.reload();else if("url"===
f){f=g.url;const l=g.target;g=g.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):"preview"===g||"windows-webview2"===g?window.open(f,"_blank"):this.Kc||(2===l?window.top.location=f:1===l?window.parent.location=f:window.location=f)}else"new-window"===f&&(f=g.url,g=g.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):window.open(f,g))}],["request-fullscreen",g=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.m.Y(!0),
this.c.Aa({type:"set-fullscreen",fullscreen:!0});else{const f={navigationUI:"auto"};g=g.navUI;1===g?f.navigationUI="hide":2===g&&(f.navigationUI="show");g=document.documentElement;g.requestFullscreen?g.requestFullscreen(f):g.mozRequestFullScreen?g.mozRequestFullScreen(f):g.msRequestFullscreen?g.msRequestFullscreen(f):g.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):g.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.m.Y(!1),this.c.Aa({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",g=>{location.hash=g.hash}]]);window.addEventListener("online",()=>{u(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{u(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{u(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{u(this,"backbutton")})}ua(e){this.a=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}ra(e){alert(e.message)}xa(e){e=e.isFocus;if("nwjs"===this.a){const g="nwjs"===this.a?nw.Window.get():null;e?g.focus():g.blur()}else e?window.focus():window.blur()}});"use strict";
async function ba(e){if(!e.u)try{e.u=await navigator.wakeLock.request("screen"),e.u.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");e.u=null;u(e,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),u(e,"wake-lock-acquired")}catch(g){console.warn("[Construct 3] Failed to acquire screen wake lock: ",g),u(e,"wake-lock-error")}}
function Z(){var e=document.body;const g=e.style;g.setProperty("--temp-sai-top","env(safe-area-inset-top)");g.setProperty("--temp-sai-right","env(safe-area-inset-right)");g.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");g.setProperty("--temp-sai-left","env(safe-area-inset-left)");e=getComputedStyle(e);e=[e.getPropertyValue("--temp-sai-top"),e.getPropertyValue("--temp-sai-right"),e.getPropertyValue("--temp-sai-bottom"),e.getPropertyValue("--temp-sai-left")].map(f=>{f=parseInt(f,10);
return isFinite(f)?f:0});g.removeProperty("--temp-sai-top");g.removeProperty("--temp-sai-right");g.removeProperty("--temp-sai-bottom");g.removeProperty("--temp-sai-left");return e}
self.m.G(class extends self.H{constructor(e){super(e,"platform-info");M(this,[["get-initial-state",()=>this.ua()],["request-wake-lock",()=>ba(this)],["release-wake-lock",()=>{this.u&&(this.u.release(),this.u=null)}]]);window.addEventListener("resize",()=>{u(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:Z()})});this.u=null}ua(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:Z(),supportsWakeLock:!!navigator.wakeLock}}});"use strict";
{function e(f){f.stopPropagation()}function g(f){13!==f.which&&27!==f.which&&f.stopPropagation()}self.m.G(class extends self.mb{constructor(f){super(f,"text-input");Q(this,"scroll-to-bottom",l=>this.fc(l))}Na(f,l){let q;const y=l.type;"textarea"===y?(q=document.createElement("textarea"),q.style.resize="none"):(q=document.createElement("input"),q.type=y);q.style.position="absolute";q.autocomplete="off";q.addEventListener("touchstart",e);q.addEventListener("touchmove",e);q.addEventListener("touchend",
e);q.addEventListener("mousedown",e);q.addEventListener("mouseup",e);q.addEventListener("keydown",g);q.addEventListener("keyup",g);q.addEventListener("click",z=>{z.stopPropagation();R(this,"click",f)});q.addEventListener("dblclick",z=>{z.stopPropagation();R(this,"dblclick",f)});q.addEventListener("input",()=>P(this,"change",f,{text:q.value}));l.id&&(q.id=l.id);this.na(q,l);return q}na(f,l){f.value=l.text;f.placeholder=l.placeholder;f.title=l.title;f.disabled=!l.isEnabled;f.readOnly=l.isReadOnly;f.spellcheck=
l.spellCheck;l=l.maxLength;0>l?f.removeAttribute("maxlength"):f.setAttribute("maxlength",l)}fc(f){f.scrollTop=f.scrollHeight}})};

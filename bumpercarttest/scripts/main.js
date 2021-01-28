'use strict';function q(f,e,d,l){f.h.aa(f.C,e,d,l,void 0)}function x(f,e,d,l){f.h.l?q(f,e,d,l):f.h.mb()._OnMessageFromDOM({type:"event",component:f.C,handler:e,dispatchOpts:l||null,data:d,responseId:null})}function E(f,e,d){f.h.a(f.C,e,d)}function F(f,e){for(const [d,l]of e)E(f,d,l)}window.L=class{constructor(f,e){this.h=f;this.C=e}wa(){}};
window.ab=class{constructor(f,e){this.Oa=f;this.Tb=e;this.u=-1;this.V=-Infinity;this.Yb=()=>{this.u=-1;this.V=Date.now();this.D=!0;this.Oa();this.D=!1};this.Pa=this.D=!1}};"use strict";function G(f,e){const d=e.elementId,l=f.za(d,e);f.g.set(d,l);e.isVisible||(l.style.display="none");l.addEventListener("focus",()=>{H(f,"elem-focused",d)});l.addEventListener("blur",()=>{H(f,"elem-blurred",d)});f.T&&document.body.appendChild(l)}
function I(f,e,d){E(f,e,l=>{const n=f.g.get(l.elementId);return d(n,l)})}function H(f,e,d,l){l||(l={});l.elementId=d;q(f,e,l)}function J(f,e,d){var l;l||(l={});l.elementId=d;x(f,e,l)}
window.Ya=class extends self.L{constructor(f,e){super(f,e);this.g=new Map;this.T=!0;F(this,[["create",d=>G(this,d)],["destroy",d=>{{d=d.elementId;const l=this.g.get(d);this.T&&l.parentElement.removeChild(l);this.g.delete(d)}}],["set-visible",d=>{this.T&&(this.g.get(d.elementId).style.display=d.isVisible?"":"none")}],["update-position",d=>{if(this.T){var l=this.g.get(d.elementId);l.style.left=d.left+"px";l.style.top=d.top+"px";l.style.width=d.width+"px";l.style.height=d.height+"px";d=d.fontSize;null!==
d&&(l.style.fontSize=d+"em")}}],["update-state",d=>{{const l=this.g.get(d.elementId);this.ba(l,d)}}],["focus",d=>this.ka(d)],["set-css-style",d=>{this.g.get(d.elementId).style[d.prop]=d.val}],["set-attribute",d=>{this.g.get(d.elementId).setAttribute(d.name,d.val)}],["remove-attribute",d=>{this.g.get(d.elementId).removeAttribute(d.name)}]]);I(this,"get-element",d=>d)}za(){throw Error("required override");}ba(){throw Error("required override");}ka(f){var e=this.g.get(f.elementId);f.focus?e.focus():
e.blur()}};"use strict";
{const f=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function e(r){if(r.ac){const c=document.createElement("script");c.async=!1;c.textContent=r.dc;document.head.appendChild(c)}else return new Promise((c,h)=>{const a=document.createElement("script");a.onload=c;a.onerror=h;a.async=!1;a.src=r;document.head.appendChild(a)})}let d=new Audio;const l={"audio/webm; codecs=opus":!!d.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!d.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!d.canPlayType("audio/webm; codecs=vorbis"),
"audio/ogg; codecs=vorbis":!!d.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!d.canPlayType("audio/mp4"),"audio/mpeg":!!d.canPlayType("audio/mpeg")};d=null;async function n(r){r=await w(r);return(new TextDecoder("utf-8")).decode(r)}function w(r){return new Promise((c,h)=>{const a=new FileReader;a.onload=b=>c(b.target.result);a.onerror=b=>h(b);a.readAsArrayBuffer(r)})}const u=[];let y=0;window.RealFile=window.File;const v=[],z=new Map,B=new Map;let C=0;const D=[];self.qc=function(r){if("function"!==
typeof r)throw Error("runOnStartup called without a function");D.push(r)};const t=new Set(["cordova","playable-ad","instant-games"]);window.A=class r{constructor(c){this.l=c.fc;this.G=null;this.c="";this.Y=c.cc;this.J={};this.j=this.qa=this.Ua=null;this.U=[];this.F=this.f=this.ta=null;this.o=-1;this.Xb=()=>this.Fb();this.Sa=[];this.b=c.Va;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation||(this.l=!1);t.has(this.b)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),
this.l=!1);this.Ta=!1;this.W=this.i=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",h=>this.sb(h));this.a("runtime","create-job-worker",()=>this.tb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ea(c)):this.Ea(c)}Aa(){return f&&"cordova"===
this.b}M(){return f&&t.has(this.b)||navigator.standalone}async Ea(c){"preview"===this.b&&(this.j=document.createElement("div"),this.j.className="previewLoadingMessage",this.j.textContent=c.oc,document.body.appendChild(this.j));if("playable-ad"===this.b){this.i=self.c3_base64files;this.W={};await this.hb();for(let a=0,b=c.v.length;a<b;++a){var h=c.v[a].toLowerCase();this.W.hasOwnProperty(h)?c.v[a]={ac:!0,dc:this.W[h]}:this.i.hasOwnProperty(h)&&(c.v[a]=URL.createObjectURL(this.i[h]))}}c.Zb?this.c=c.Zb:
(h=location.origin,this.c=("null"===h?"file:///":h)+location.pathname,h=this.c.lastIndexOf("/"),-1!==h&&(this.c=this.c.substr(0,h+1)));if(c.ic)for(const [a,b]of Object.entries(c.ic))this.J[a]=URL.createObjectURL(b);h=new MessageChannel;this.G=h.port1;this.G.onmessage=a=>this._OnMessageFromRuntime(a.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(a=>this.Cb(a));this.F=new self.Za(this);await K(this.F);this.Ba();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===
typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();await this.Qb();this.l?await this.ob(c,h.port2):await this.nb(c,h.port2)}da(c){return this.J.hasOwnProperty(c)?this.J[c]:c.endsWith("/workermain.js")&&this.J.hasOwnProperty("workermain.js")?this.J["workermain.js"]:"playable-ad"===this.b&&this.i.hasOwnProperty(c.toLowerCase())?URL.createObjectURL(this.i[c.toLowerCase()]):c}async Z(c,h,a){if(c.startsWith("blob:"))return new Worker(c,a);if(this.Aa()&&"file:"===location.protocol)return c=
await this.ya(this.Y+c),new Worker(URL.createObjectURL(new Blob([c],{type:"application/javascript"})),a);c=new URL(c,h);if(location.origin!==c.origin){c=await fetch(c);if(!c.ok)throw Error("failed to fetch worker script");c=await c.blob();return new Worker(URL.createObjectURL(c),a)}return new Worker(c,a)}Ba(){if(this.M()){const c=document.documentElement.style,h=document.body.style,a=window.innerWidth<window.innerHeight,b=a?window.screen.width:window.screen.height;h.height=c.height=(a?window.screen.height:
window.screen.width)+"px";h.width=c.width=b+"px"}}Da(c){var h=this.F;return{baseUrl:this.c,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:r.$(),projectData:c.pc,previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:c.Va,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.nc,jobScheduler:{inputPort:h.oa,outputPort:h.sa,maxNumWorkers:h.Vb},supportedAudioFormats:l,
opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.Y+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.Y+"opus.wasm.wasm",isiOSCordova:this.Aa(),isiOSWebView:this.M(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async ob(c,h){var a=this.da(c.hc);this.Ua=await this.Z(a,this.c,{name:"Runtime"});this.f=document.createElement("canvas");this.f.style.display="none";a=this.f.transferControlToOffscreen();document.body.appendChild(this.f);window.c3canvas=this.f;this.Ua.postMessage(Object.assign(this.Da(c),
{type:"init-runtime",isInWorker:!0,messagePort:h,canvas:a,workerDependencyScripts:c.va||[],engineScripts:c.v,projectScripts:window.mc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[h,a,...M(this.F)]);this.U=v.map(b=>new b(this));this.Ca();self.c3_callFunction=(b,g)=>this.ta.pb(b,g);"preview"===this.b&&(self.goToLastErrorScript=()=>this.aa("runtime","go-to-last-error-script"))}async nb(c,h){this.f=document.createElement("canvas");this.f.style.display="none";document.body.appendChild(this.f);
window.c3canvas=this.f;this.U=v.map(b=>new b(this));this.Ca();const a=c.v.map(b=>"string"===typeof b?(new URL(b,this.c)).toString():b);Array.isArray(c.va)&&a.unshift(...c.va);await Promise.all(a.map(b=>e(b)));if(c.Wa&&0<c.Wa.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(c.Wa.map(g=>e(g[1]))),Object.values(b).some(g=>!g)){self.setTimeout(()=>this.Ka(b),100);return}}catch(g){console.error("[Preview] Error loading project scripts: ",g);self.setTimeout(()=>this.Ka(b),100);return}}"preview"===
this.b&&"object"!==typeof self.jc.kc?(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(c=Object.assign(this.Da(c),{isInWorker:!1,messagePort:h,canvas:this.f,runOnStartupFunctions:D}),this.Ga(),this.qa=self.C3_CreateRuntime(c),await self.C3_InitRuntime(this.qa,c))}Ka(c){c=`Failed to load project script '${Object.entries(c).filter(h=>
!h[1]).map(h=>h[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+c);alert(c)}Ga(){this.j&&(this.j.parentElement.removeChild(this.j),this.j=null)}async tb(){const c=await N(this.F);return{outputPort:c,transferables:[c]}}mb(){if(this.l)throw Error("not available in worker mode");return this.qa}aa(c,h,a,b,g){this.G.postMessage({type:"event",component:c,handler:h,dispatchOpts:b||null,data:a,responseId:null},this.Ta?void 0:g)}$a(c,h){const a=C++,b=new Promise((g,k)=>
{B.set(a,{resolve:g,reject:k})});this.G.postMessage({type:"event",component:c,handler:"js-invoke-function",dispatchOpts:null,data:h,responseId:a},void 0);return b}["_OnMessageFromRuntime"](c){const h=c.type;if("event"===h)return this.yb(c);if("result"===h)this.Ib(c);else if("runtime-ready"===h)this.Jb();else if("alert"===h)alert(c.message);else if("creating-runtime"===h)this.Ga();else throw Error(`unknown message '${h}'`);}yb(c){const h=c.component,a=c.handler,b=c.data,g=c.responseId;if(c=z.get(h))if(c=
c.get(a)){var k=null;try{k=c(b)}catch(m){console.error(`Exception in '${h}' handler '${a}':`,m);null!==g&&this.R(g,!1,""+m);return}if(null===g)return k;k&&k.then?k.then(m=>this.R(g,!0,m)).catch(m=>{console.error(`Rejection from '${h}' handler '${a}':`,m);this.R(g,!1,""+m)}):this.R(g,!0,k)}else console.warn(`[DOM] No handler '${a}' for component '${h}'`);else console.warn(`[DOM] No event handlers for component '${h}'`)}R(c,h,a){let b;a&&a.transferables&&(b=a.transferables);this.G.postMessage({type:"result",
responseId:c,isOk:h,result:a},b)}Ib(c){const h=c.responseId,a=c.isOk;c=c.result;const b=B.get(h);a?b.resolve(c):b.reject(c);B.delete(h)}a(c,h,a){let b=z.get(c);b||(b=new Map,z.set(c,b));if(b.has(h))throw Error(`[DOM] Component '${c}' already has handler '${h}'`);b.set(h,a)}static K(c){if(v.includes(c))throw Error("DOM handler already added");v.push(c)}Ca(){for(const c of this.U)if("runtime"===c.C){this.ta=c;return}throw Error("cannot find runtime DOM handler");}Cb(c){this.aa("debugger","message",
c)}Jb(){for(const c of this.U)c.wa()}static $(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}La(){-1===this.o&&this.Sa.length&&(this.o=requestAnimationFrame(this.Xb))}fb(){-1!==this.o&&(cancelAnimationFrame(this.o),this.o=-1)}Fb(){this.o=-1;for(const c of this.Sa)c();this.La()}ma(){this.ta.ma()}async sb(c){const h=c.filename;switch(c.as){case "text":return await this.Xa(h);case "buffer":return await this.ya(h);default:throw Error("unsupported type");
}}xa(c){const h=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((a,b)=>{window.resolveLocalFileSystemURL(h,g=>{g.file(a,b)},b)})}async Xa(c){c=await this.xa(c);return await n(c)}ca(){if(u.length&&!(8<=y)){y++;var c=u.shift();this.ib(c.filename,c.ec,c.$b)}}ya(c){return new Promise((h,a)=>{u.push({filename:c,ec:b=>{y--;this.ca();h(b)},$b:b=>{y--;this.ca();a(b)}});this.ca()})}async ib(c,h,a){try{const b=await this.xa(c),g=await w(b);h(g)}catch(b){a(b)}}async hb(){const c=
[];for(const [h,a]of Object.entries(this.i))c.push(this.gb(h,a));await Promise.all(c)}async gb(c,h){if("object"===typeof h)this.i[c]=new Blob([h.str],{type:h.type}),this.W[c]=h.str;else{let a=await this.lb(h);a||(a=this.jb(h));this.i[c]=a}}async lb(c){try{return await (await fetch(c)).blob()}catch(h){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
h),null}}jb(c){c=this.Ob(c);return this.eb(c.data,c.bc)}Ob(c){var h=c.indexOf(",");if(0>h)throw new URIError("expected comma in data: uri");var a=c.substring(h+1);h=c.substring(5,h).split(";");c=h[0]||"";const b=h[2];a="base64"===h[1]||"base64"===b?atob(a):decodeURIComponent(a);return{bc:c,data:a}}eb(c,h){var a=c.length;let b=a>>2,g=new Uint8Array(a),k=new Uint32Array(g.buffer,0,b),m,p;for(p=m=0;m<b;++m)k[m]=c.charCodeAt(p++)|c.charCodeAt(p++)<<8|c.charCodeAt(p++)<<16|c.charCodeAt(p++)<<24;for(a&=
3;a--;)g[p]=c.charCodeAt(p),++p;return new Blob([g],{type:h})}Qb(){let c=null;const h=new Promise(g=>c=g),a=new ArrayBuffer(1),b=new MessageChannel;b.port2.onmessage=g=>{g.data&&g.data.arrayBuffer||(this.Ta=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));c()};b.port1.postMessage({arrayBuffer:a},[a]);return h}}}"use strict";
{const f=self.A;function e(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents}const d=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},n={dispatchUserScriptEvent:!0},w={dispatchRuntimeEvent:!0};function u(a){return new Promise((b,g)=>{const k=document.createElement("link");k.onload=()=>b(k);k.onerror=m=>g(m);k.rel=
"stylesheet";k.href=a;document.head.appendChild(k)})}function y(a){return new Promise((b,g)=>{const k=new Image;k.onload=()=>b(k);k.onerror=m=>g(m);k.src=a})}async function v(a){a=URL.createObjectURL(a);try{return await y(a)}finally{URL.revokeObjectURL(a)}}function z(a){return new Promise((b,g)=>{let k=new FileReader;k.onload=m=>b(m.target.result);k.onerror=m=>g(m);k.readAsText(a)})}async function B(a,b,g){if(!/firefox/i.test(navigator.userAgent))return await v(a);var k=await z(a);k=(new DOMParser).parseFromString(k,
"image/svg+xml");const m=k.documentElement;if(m.hasAttribute("width")&&m.hasAttribute("height")){const p=m.getAttribute("width"),O=m.getAttribute("height");if(!p.includes("%")&&!O.includes("%"))return await v(a)}m.setAttribute("width",b+"px");m.setAttribute("height",g+"px");k=(new XMLSerializer).serializeToString(k);a=new Blob([k],{type:"image/svg+xml"});return await v(a)}function C(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;a=a.parentNode}while(a);return!1}const D=new Set(["canvas",
"body","html"]);function t(a){D.has(a.target.tagName.toLowerCase())&&a.preventDefault()}function r(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()}self.C3_GetSvgImageSize=async function(a){a=await v(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const b=a.getBoundingClientRect();document.body.removeChild(a);return[b.width,b.height]}};self.C3_RasterSvgImageBlob=async function(a,
b,g,k,m){a=await B(a,b,g);const p=document.createElement("canvas");p.width=k;p.height=m;p.getContext("2d").drawImage(a,0,0,b,g);return p};let c=!1;document.addEventListener("pause",()=>c=!0);document.addEventListener("resume",()=>c=!1);function h(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}}f.K(class extends self.L{constructor(a){super(a,"runtime");this.Qa=!0;this.s=-1;this.ua="any";this.Ma=this.Na=!1;this.pa=this.I=this.m=null;a.a("canvas","update-size",k=>this.Mb(k));
a.a("runtime","invoke-download",k=>this.Bb(k));a.a("runtime","raster-svg-image",k=>this.Gb(k));a.a("runtime","get-svg-image-size",k=>this.zb(k));a.a("runtime","set-target-orientation",k=>this.Lb(k));a.a("runtime","register-sw",()=>this.Hb());a.a("runtime","post-to-debugger",k=>this.Ia(k));a.a("runtime","go-to-script",k=>this.Ia(k));a.a("runtime","before-start-ticking",()=>this.rb());a.a("runtime","debug-highlight",k=>this.ub(k));a.a("runtime","enable-device-orientation",()=>this.cb());a.a("runtime",
"enable-device-motion",()=>this.bb());a.a("runtime","add-stylesheet",k=>this.qb(k));a.a("runtime","alert",k=>this.fa(k));a.a("runtime","hide-cordova-splash",()=>this.Ab());const b=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",k=>{const m=k.target;b.has(m.tagName.toLowerCase())||C(m)||k.preventDefault()});const g=a.f;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);g.addEventListener("selectstart",t);g.addEventListener("gesturehold",
t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),g.addEventListener("pointerdown",t)):g.addEventListener("touchstart",t);this.H=0;window.addEventListener("mousedown",k=>{1===k.button&&k.preventDefault()});window.addEventListener("mousewheel",r,{passive:!1});window.addEventListener("wheel",r,{passive:!1});window.addEventListener("resize",()=>this.Nb());a.M()&&window.addEventListener("focusout",()=>{{const p=
document.activeElement;if(p){var k=p.tagName.toLowerCase();var m=new Set("email number password search tel text url".split(" "));k="textarea"===k?!0:"input"===k?m.has(p.type.toLowerCase()||"text"):C(p)}else k=!1}k||(document.scrollingElement.scrollTop=0)});this.ra=new Set;this.Wb=new WeakSet;this.Ub=!1}rb(){"cordova"===this.h.b?(document.addEventListener("pause",()=>this.la(!0)),document.addEventListener("resume",()=>this.la(!1))):document.addEventListener("visibilitychange",()=>this.la(document.hidden));
return{isSuspended:!(!document.hidden&&!c)}}wa(){window.addEventListener("focus",()=>this.S("window-focus"));window.addEventListener("blur",()=>{this.S("window-blur",{parentHasFocus:h()});this.H=0});window.addEventListener("fullscreenchange",()=>this.ga());window.addEventListener("webkitfullscreenchange",()=>this.ga());window.addEventListener("mozfullscreenchange",()=>this.ga());window.addEventListener("fullscreenerror",b=>this.ha(b));window.addEventListener("webkitfullscreenerror",b=>this.ha(b));
window.addEventListener("mozfullscreenerror",b=>this.ha(b));window.addEventListener("keydown",b=>this.Ha("keydown",b));window.addEventListener("keyup",b=>this.Ha("keyup",b));window.addEventListener("dblclick",b=>this.ia("dblclick",b,l));window.addEventListener("wheel",b=>this.Db(b));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",b=>{this.ea(b);this.B("pointerdown",b)}),this.h.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.I=new self.ab(()=>this.kb(),
5),this.I.Pa=!0,window.addEventListener("pointerrawupdate",b=>this.Eb(b))):window.addEventListener("pointermove",b=>this.B("pointermove",b)),window.addEventListener("pointerup",b=>this.B("pointerup",b)),window.addEventListener("pointercancel",b=>this.B("pointercancel",b))):(window.addEventListener("mousedown",b=>{this.ea(b);this.ja("pointerdown",b)}),window.addEventListener("mousemove",b=>this.ja("pointermove",b)),window.addEventListener("mouseup",b=>this.ja("pointerup",b)),window.addEventListener("touchstart",
b=>{this.ea(b);this.P("pointerdown",b)}),window.addEventListener("touchmove",b=>this.P("pointermove",b)),window.addEventListener("touchend",b=>this.P("pointerup",b)),window.addEventListener("touchcancel",b=>this.P("pointercancel",b)));const a=()=>this.ma();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}S(a,b){q(this,a,b||null,w)}O(){return Math.max(window.innerWidth,
1)}N(){return Math.max(window.innerHeight,1)}Nb(){const a=this.O(),b=this.N();this.S("window-resize",{innerWidth:a,innerHeight:b,devicePixelRatio:window.devicePixelRatio});this.h.M()&&(-1!==this.s&&clearTimeout(this.s),this.Ja(a,b,0))}Pb(a,b,g){-1!==this.s&&clearTimeout(this.s);this.s=setTimeout(()=>this.Ja(a,b,g),48)}Ja(a,b,g){const k=this.O(),m=this.N();this.s=-1;k!=a||m!=b?this.S("window-resize",{innerWidth:k,innerHeight:m,devicePixelRatio:window.devicePixelRatio}):10>g&&this.Pb(k,m,g+1)}Lb(a){this.ua=
a.targetOrientation}Rb(){const a=this.ua;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(a):screen.webkitLockOrientation?b=screen.webkitLockOrientation(a):screen.mozLockOrientation?b=screen.mozLockOrientation(a):screen.msLockOrientation&&(b=screen.msLockOrientation(a));b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",
b)}}ga(){const a=f.$();a&&"any"!==this.ua&&this.Rb();q(this,"fullscreenchange",{isFullscreen:a,innerWidth:this.O(),innerHeight:this.N()})}ha(a){console.warn("[Construct 3] Fullscreen request failed: ",a);q(this,"fullscreenerror",{isFullscreen:f.$(),innerWidth:this.O(),innerHeight:this.N()})}la(a){a?this.h.fb():this.h.La();q(this,"visibilitychange",{hidden:a})}Ha(a,b){"Backspace"===b.key&&t(b);const g=d.get(b.code)||b.code;x(this,a,{code:g,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,
metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},l)}Db(a){q(this,"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},l)}ia(a,b,g){e(b)||x(this,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,timeStamp:b.timeStamp},g)}ja(a,b){if(!e(b)){var g=this.H;"pointerdown"===a&&0!==g?a="pointermove":"pointerup"===a&&0!==b.buttons&&(a=
"pointermove");x(this,a,{pointerId:1,pointerType:"mouse",button:b.button,buttons:b.buttons,lastButtons:g,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:b.timeStamp},l);this.H=b.buttons;this.ia(b.type,b,n)}}B(a,b){if(this.I&&"pointermove"!==a){var g=this.I;g.D||(-1!==g.u&&(self.clearTimeout(g.u),g.u=-1),g.V=Date.now())}g=0;"mouse"===b.pointerType&&(g=this.H);x(this,a,{pointerId:b.pointerId,pointerType:b.pointerType,
button:b.button,buttons:b.buttons,lastButtons:g,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},l);"mouse"===b.pointerType&&(g="mousemove","pointerdown"===a?g="mousedown":"pointerup"===a&&(g="pointerup"),this.ia(g,b,n),this.H=b.buttons)}Eb(a){this.pa=a;a=this.I;if(-1===a.u){var b=Date.now(),g=b-a.V,k=a.Tb;g>=
k&&a.Pa?(a.V=b,a.D=!0,a.Oa(),a.D=!1):a.u=self.setTimeout(a.Yb,Math.max(k-g,4))}}kb(){this.B("pointermove",this.pa);this.pa=null}P(a,b){for(let g=0,k=b.changedTouches.length;g<k;++g){const m=b.changedTouches[g];x(this,a,{pointerId:m.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:m.clientX,clientY:m.clientY,pageX:m.pageX,pageY:m.pageY,width:2*(m.radiusX||m.webkitRadiusX||0),height:2*(m.radiusY||m.webkitRadiusY||0),pressure:m.force||m.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:m.rotationAngle||0,timeStamp:b.timeStamp},l)}}ea(a){window!==window.top&&window.focus();this.Fa(a.target)&&document.activeElement&&!this.Fa(document.activeElement)&&document.activeElement.blur()}Fa(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}cb(){this.Na||(this.Na=!0,window.addEventListener("deviceorientation",a=>this.wb(a)),window.addEventListener("deviceorientationabsolute",a=>this.xb(a)))}bb(){this.Ma||(this.Ma=!0,window.addEventListener("devicemotion",
a=>this.vb(a)))}wb(a){q(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},l)}xb(a){q(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},l)}vb(a){let b=null;var g=a.acceleration;g&&(b={x:g.x||0,y:g.y||0,z:g.z||0});g=null;var k=a.accelerationIncludingGravity;k&&(g={x:k.x||
0,y:k.y||0,z:k.z||0});k=null;const m=a.rotationRate;m&&(k={alpha:m.alpha||0,beta:m.beta||0,gamma:m.gamma||0});q(this,"devicemotion",{acceleration:b,accelerationIncludingGravity:g,rotationRate:k,interval:a.interval,timeStamp:a.timeStamp},l)}Mb(a){const b=this.h,g=b.f;g.style.width=a.styleWidth+"px";g.style.height=a.styleHeight+"px";g.style.marginLeft=a.marginLeft+"px";g.style.marginTop=a.marginTop+"px";b.Ba();this.Qa&&(g.style.display="",this.Qa=!1)}Bb(a){const b=a.url;a=a.filename;const g=document.createElement("a"),
k=document.body;g.textContent=a;g.href=b;g.download=a;k.appendChild(g);g.click();k.removeChild(g)}async Gb(a){var b=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);b=b?await createImageBitmap(a,b):await createImageBitmap(a);return{imageBitmap:b,transferables:[b]}}async zb(a){return await self.C3_GetSvgImageSize(a.blob)}async qb(a){await u(a.url)}ma(){var a=[...this.ra];this.ra.clear();if(!this.Ub)for(const b of a)(a=b.play())&&
a.catch(()=>{this.Wb.has(b)||this.ra.add(b)})}Ab(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}ub(a){if(a.show){this.m||(this.m=document.createElement("div"),this.m.id="inspectOutline",document.body.appendChild(this.m));var b=this.m;b.style.display="";b.style.left=a.left-1+"px";b.style.top=a.top-1+"px";b.style.width=a.width+2+"px";b.style.height=a.height+2+"px";b.textContent=a.name}else this.m&&(this.m.style.display="none")}Hb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ia(a){window.c3_postToMessagePort&&
(a.from="runtime",window.c3_postToMessagePort(a))}pb(a,b){return this.h.$a(this.C,{name:a,params:b})}fa(a){alert(a.message)}})}"use strict";async function K(f){if(f.Sb)throw Error("already initialised");f.Sb=!0;var e=f.X.da("dispatchworker.js");f.na=await f.X.Z(e,f.c,{name:"DispatchWorker"});e=new MessageChannel;f.oa=e.port1;f.na.postMessage({type:"_init","in-port":e.port2},[e.port2]);f.sa=await N(f)}function M(f){return[f.oa,f.sa]}
async function N(f){const e=f.Ra.length;var d=f.X.da("jobworker.js");d=await f.X.Z(d,f.c,{name:"JobWorker"+e});const l=new MessageChannel,n=new MessageChannel;f.na.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);d.postMessage({type:"init",number:e,"dispatch-port":l.port2,"output-port":n.port2},[l.port2,n.port2]);f.Ra.push(d);return n.port1}
self.Za=class{constructor(f){this.X=f;this.c=f.c;this.c="preview"===f.b?this.c+"c3/workers/":this.c+f.Y;this.Vb=Math.min(navigator.hardwareConcurrency||2,16);this.na=null;this.Ra=[];this.sa=this.oa=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.A({fc:!0,hc:"workermain.js",v:["scripts/c3runtime.js"],cc:"scripts/",va:[],Va:"html5"}));"use strict";
async function P(f,e){e=e.type;let d=!0;0===e?d=await Q():1===e&&(d=await R());q(f,"permission-result",{type:e,result:d})}async function Q(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request orientation permission: ",f),!1}}
async function R(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request motion permission: ",f),!1}}self.A.K(class extends self.L{constructor(f){super(f,"touch");E(this,"request-permission",e=>P(this,e))}});"use strict";
{function f(d){d.stopPropagation()}function e(d){13!==d.which&&27!==d.which&&d.stopPropagation()}self.A.K(class extends self.Ya{constructor(d){super(d,"text-input");I(this,"scroll-to-bottom",l=>this.Kb(l))}za(d,l){let n;const w=l.type;"textarea"===w?(n=document.createElement("textarea"),n.style.resize="none"):(n=document.createElement("input"),n.type=w);n.style.position="absolute";n.autocomplete="off";n.addEventListener("touchstart",f);n.addEventListener("touchmove",f);n.addEventListener("touchend",
f);n.addEventListener("mousedown",f);n.addEventListener("mouseup",f);n.addEventListener("keydown",e);n.addEventListener("keyup",e);n.addEventListener("click",u=>{u.stopPropagation();J(this,"click",d)});n.addEventListener("dblclick",u=>{u.stopPropagation();J(this,"dblclick",d)});n.addEventListener("input",()=>H(this,"change",d,{text:n.value}));l.id&&(n.id=l.id);this.ba(n,l);return n}ba(d,l){d.value=l.text;d.placeholder=l.placeholder;d.title=l.title;d.disabled=!l.isEnabled;d.readOnly=l.isReadOnly;d.spellcheck=
l.spellCheck;l=l.maxLength;0>l?d.removeAttribute("maxlength"):d.setAttribute("maxlength",l)}Kb(d){d.scrollTop=d.scrollHeight}})}"use strict";function S(f){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(e=>q(f,"sw-message",e.data))}
function T(f){f=f.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(f).catch(e=>console.warn("[Construct 3] Failed to lock orientation: ",e));else try{let e=!1;screen.lockOrientation?e=screen.lockOrientation(f):screen.webkitLockOrientation?e=screen.webkitLockOrientation(f):screen.mozLockOrientation?e=screen.mozLockOrientation(f):screen.msLockOrientation&&(e=screen.msLockOrientation(f));e||console.warn("[Construct 3] Failed to lock orientation")}catch(e){console.warn("[Construct 3] Failed to lock orientation: ",
e)}}
self.A.K(class extends self.L{constructor(f){super(f,"browser");this.b="";F(this,[["get-initial-state",e=>{this.b=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>S(this)],
["alert",e=>this.fa(e)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",e=>this.ka(e)],["vibrate",e=>{navigator.vibrate&&navigator.vibrate(e.pattern)}],["lock-orientation",e=>T(e)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(e){}}],["navigate",e=>{var d=e.type;if("back"===d)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===d)window.forward();else if("home"===d)window.home();else if("reload"===d)location.reload();else if("url"===d){d=e.url;var l=e.target;e=e.exportType;"windows-uwp"===e&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(d)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(d,"_system"):"preview"===e?window.open(d,"_blank"):this.lc||(2===l?window.top.location=d:1===l?window.parent.location=d:window.location=d)}else"new-window"===d&&(d=e.url,l=e.tag,"windows-uwp"===e.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(d)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(d,"_system"):window.open(d,l))}],["request-fullscreen",
e=>{{const d={navigationUI:"auto"};e=e.navUI;1===e?d.navigationUI="hide":2===e&&(d.navigationUI="show");e=document.documentElement;e.requestFullscreen?e.requestFullscreen(d):e.mozRequestFullScreen?e.mozRequestFullScreen(d):e.msRequestFullscreen?e.msRequestFullscreen(d):e.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():
document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",e=>{location.hash=e.hash}]]);window.addEventListener("online",()=>{q(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{q(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{q(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",
()=>{q(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",e=>{e.handled=!0;q(this,"backbutton")})}fa(f){alert(f.message)}ka(f){f=f.isFocus;if("nwjs"===this.b){const e="nwjs"===this.b?nw.Window.get():null;f?e.focus():e.blur()}else f?window.focus():window.blur()}});
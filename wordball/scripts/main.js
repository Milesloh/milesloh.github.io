"use strict";window.g_aIK=class{constructor(c,a){this.g_asA=c,this.g_aIL=a,this.g_aIM=!1,this.g_aIN=()=>this.g_Lg()}g_aIO(){}g_aIP(e,a,b,c){this.g_asA.g_aIQ(this.g_aIL,e,a,b,c)}g_aIR(e,a,b,c){return this.g_asA.g_aIS(this.g_aIL,e,a,b,c)}g_aIT(d,a,b){this.g_asA.g_aIU()?this.g_aIP(d,a,b):this.g_asA.g_aIV()._OnMessageFromDOM({type:"event",component:this.g_aIL,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aIW(c,a){this.g_asA.g_aIX(this.g_aIL,c,a)}g_aIY(d){for(const[a,b]of d)this.g_aIW(a,b)}g_aIZ(){return this.g_asA}g_aI_(){return this.g_aIL}g_afl(){this.g_aIM||(this.g_asA.g_aI$(this.g_aIN),this.g_aIM=!0)}g_aeX(){this.g_aIM&&(this.g_asA.g_aJa(this.g_aIN),this.g_aIM=!1)}g_Lg(){}},window.g_m_=class{constructor(c,a){this.g_lI=c,this.g_m$=a,this.g_nb=-1,this.g_nc=-Infinity,this.g_nd=()=>this.g_ne(),this.g_nf=!1,this.g_ng=!1}g_ni(b){this.g_ng=!!b}g_nm(){if(-1===this.g_nb){const d=Date.now(),a=d-this.g_nc,b=this.g_m$;a>=b&&this.g_ng?(this.g_nc=d,this.g_nn()):this.g_nb=self.setTimeout(this.g_nd,Math.max(b-a,4))}}g_nn(){this.g_nf=!0,this.g_lI(),this.g_nf=!1}g_lM(){this.g_nf||(this.g_no(),this.g_nc=Date.now())}g_ne(){this.g_nb=-1,this.g_nc=Date.now(),this.g_nn()}g_no(){-1!==this.g_nb&&(self.clearTimeout(this.g_nb),this.g_nb=-1)}g_er(){this.g_no(),this.g_lI=null,this.g_nd=null}},"use strict",window.g_aJb=class extends g_aIK{constructor(c,a){super(c,a),this.g_aJc=new Map,this.g_aJd=!0,this.g_aIW("create",b=>this.g_aJe(b)),this.g_aIW("destroy",b=>this.g_aJf(b)),this.g_aIW("set-visible",b=>this.g_aJg(b)),this.g_aIW("update-position",b=>this.g_aJh(b)),this.g_aIW("update-state",b=>this.g_aJi(b)),this.g_aIW("focus",b=>this.g_aJj(b)),this.g_aIW("set-css-style",b=>this.g_aJk(b))}g_aJl(b){this.g_aJd=!!b}g_aJm(c,e){this.g_aIW(c,b=>{const a=b.elementId,c=this.g_aJc.get(a);return e(c,b)})}g_aJe(d){const a=d.elementId,b=this.g_afN(a,d);this.g_aJc.set(a,b),d.isVisible||(b.style.display="none"),this.g_aJd&&document.body.appendChild(b)}g_afN(){throw new Error("required override")}g_aJn(){}g_aJf(d){const a=d.elementId,b=this.g_aJc.get(a);this.g_aJn(b),this.g_aJd&&b.parentElement.removeChild(b),this.g_aJc.delete(a)}g_aJo(d,a,b){b||(b={}),b.elementId=a,this.g_aIP(d,b)}g_aJp(d,a,b){b||(b={}),b.elementId=a,this.g_aIT(d,b)}g_aJg(c){if(this.g_aJd){const a=this.g_aJc.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aJh(d){if(this.g_aJd){const a=this.g_aJc.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aJi(c){const a=this.g_aJc.get(c.elementId);this.g_aJq(a,c)}g_aJq(){throw new Error("required override")}g_aJj(c){const a=this.g_aJc.get(c.elementId);c.focus?a.focus():a.blur()}g_aJk(c){const a=this.g_aJc.get(c.elementId);a.style[c.prop]=c.val}g_aJr(b){return this.g_aJc.get(b)}},"use strict";{function p(e){if(e.g_aJs){const a=document.createElement("script");a.async=!1,a.textContent=e.g_o,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aJt=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)},self.getGlobal=function(b){if(!b)throw new Error("missing global variable");return b};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aJu=class c{constructor(c){this.g_aJv=c.g_aJw,this.g_aJx=null,this.g_aqu="",this.g_aJy=c.g_aJz,this.g_aJA={},this.g_aJB=null,this.g_aJC=null,this.g_aJD=[],this.g_aJE=null,this.g_aou=null,this.g_asu=null,this.g_apb=-1,this.g_aJF=()=>this.g_aJG(),this.g_aJH=[],this.g_aqz=c.g_aJI,b(this.g_aqz)&&this.g_aJv&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aJv=!1),this.g_aJJ=!1,this.g_aJK=null,this.g_aJL=null,("html5"===this.g_aqz||"playable-ad"===this.g_aqz)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aIX("runtime","cordova-fetch-local-file",b=>this.g_aJM(b)),this.g_aIX("runtime","create-job-worker",b=>this.g_aJN(b)),"cordova"===this.g_aqz?document.addEventListener("deviceready",()=>this.g_ad_(c)):this.g_ad_(c)}g_er(){this.g_ats(),this.g_aJx&&(this.g_aJx.onmessage=null,this.g_aJx=null),this.g_aJB&&(this.g_aJB.terminate(),this.g_aJB=null),this.g_aJC&&(this.g_aJC.g_er(),this.g_aJC=null),this.g_aou&&(this.g_aou.parentElement.removeChild(this.g_aou),this.g_aou=null)}g_aJO(){return this.g_aou}g_fl(){return this.g_aqu}g_aIU(){return this.g_aJv}g_auf(){return this.g_aqz}g_asU(){return a&&"cordova"===this.g_aqz}g_aug(){return a&&b(this.g_aqz)||navigator.standalone}async g_ad_(d){if("playable-ad"===this.g_aqz){this.g_aJK=self.c3_base64files,this.g_aJL={},await this.g_aJP();for(let a=0,b=d.g_aJQ.length;a<b;++a){const b=d.g_aJQ[a].toLowerCase();this.g_aJL.hasOwnProperty(b)?d.g_aJQ[a]={g_aJs:!0,g_o:this.g_aJL[b]}:this.g_aJK.hasOwnProperty(b)&&(d.g_aJQ[a]=URL.createObjectURL(this.g_aJK[b]))}}if(d.g_aJR)this.g_aqu=d.g_aJR;else{const c=location.origin;this.g_aqu=("null"===c?"file:///":c)+location.pathname;const a=this.g_aqu.lastIndexOf("/");-1!==a&&(this.g_aqu=this.g_aqu.substr(0,a+1))}if(d.g_aJS)for(const[a,b]of Object.entries(d.g_aJS))this.g_aJA[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aJx=a.port1,this.g_aJx.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aJT(b)),this.g_asu=new self.g_aJU(this),await this.g_asu.g_alx(),this.g_aJV(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aJW(),this.g_aJv?await this.g_aJX(d,a.port2):await this.g_aJY(d,a.port2)}g_aJZ(b){return this.g_aJA.hasOwnProperty(b)?this.g_aJA[b]:b.endsWith("/workermain.js")&&this.g_aJA.hasOwnProperty("workermain.js")?this.g_aJA["workermain.js"]:"playable-ad"===this.g_aqz&&this.g_aJK.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aJK[b.toLowerCase()]):b}async g_aJ_(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_asU()){const a=await this.g_Cd(this.g_aJy+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aJV(){if(this.g_aug()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aJ$(b){return{baseUrl:this.g_aqu,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_apG(),projectData:b.g_aKa,previewImageBlobs:window.cr_previewImageBlobs||this.g_aJK,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aJI,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aKb,jobScheduler:this.g_asu.g_aKc(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aJy+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aJy+"opus.wasm.wasm",isiOSCordova:this.g_asU(),isiOSWebView:this.g_aug(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aJX(e,a){const b=this.g_aJZ(e.g_aKd);this.g_aJB=await this.g_aJ_(b,this.g_aqu,{name:"Runtime"}),this.g_aou=document.createElement("canvas"),this.g_aou.style.display="none";const c=this.g_aou.transferControlToOffscreen();document.body.appendChild(this.g_aou),window.c3canvas=this.g_aou,this.g_aJB.postMessage(Object.assign(this.g_aJ$(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aKe||[],engineScripts:e.g_aJQ,projectScripts:window.g_aKf,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_asu.g_aKg()]),this.g_aJD=g.map(b=>new b(this)),this.g_aKh(),self.c3_callFunction=(c,a)=>this.g_aJE.g_Ws(c,a),"preview"===this.g_aqz&&(self.goToLastErrorScript=()=>this.g_aIQ("runtime","go-to-last-error-script"))}async g_aJY(a,b){this.g_aou=document.createElement("canvas"),this.g_aou.style.display="none",document.body.appendChild(this.g_aou),window.c3canvas=this.g_aou,this.g_aJD=g.map(b=>new b(this)),this.g_aKh();const c=a.g_aJQ.map(b=>"string"==typeof b?new URL(b,this.g_aqu).toString():b);if(Array.isArray(a.g_aKe)&&c.unshift(...a.g_aKe),await Promise.all(c.map(a=>p(a))),a.g_aKi&&0<a.g_aKi.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aKi.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aKj(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aKj(b),100)}}if("preview"===this.g_aqz&&"object"!=typeof self.g_aU.g_aIJ)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aJ$(a),{isInWorker:!1,messagePort:b,canvas:this.g_aou,runOnStartupFunctions:k});this.g_aJC=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aJC,d)}g_aKj(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aJN(){const b=await this.g_asu.g_aKk();return{outputPort:b,transferables:[b]}}g_aIV(){if(this.g_aJv)throw new Error("not available in worker mode");return this.g_aJC}g_aIQ(f,a,b,c,d){this.g_aJx.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aJJ?void 0:d)}g_aIS(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aJx.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aJJ?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aKl(c);else if("result"===a)this.g_aKm(c);else if("runtime-ready"===a)this.g_aKn();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aKl(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aKo(c,!1,""+d))}null!==c&&(f&&f.then?f.then(b=>this.g_aKo(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aKo(c,!1,""+d)}):this.g_aKo(c,!0,f))}g_aKo(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aJx.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aKm(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aIX(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aKp(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aKh(){for(const b of this.g_aJD)if("runtime"===b.g_aI_())return void(this.g_aJE=b);throw new Error("cannot find runtime DOM handler")}g_aJT(b){this.g_aIQ("debugger","message",b)}g_aKn(){for(const b of this.g_aJD)b.g_aIO()}static g_apG(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aKq(){return await this.g_aIS("runtime","get-remote-preview-status-info")}g_aI$(b){this.g_aJH.push(b),this.g_atr()}g_aJa(c){const a=this.g_aJH.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aJH.splice(a,1),this.g_aJH.length||this.g_ats()}g_atr(){-1===this.g_apb&&this.g_aJH.length&&(this.g_apb=requestAnimationFrame(this.g_aJF))}g_ats(){-1!==this.g_apb&&(cancelAnimationFrame(this.g_apb),this.g_apb=-1)}g_aJG(){this.g_apb=-1;for(const b of this.g_aJH)b();this.g_atr()}g_aKr(b){this.g_aJE.g_aKr(b)}g_aKs(b){this.g_aJE.g_aKs(b)}g_aKt(){this.g_aJE.g_aKt()}g_aKu(b){this.g_aJE.g_aKu(b)}g_CA(b){return!!d[b]}async g_ahm(c){const a=await this.g_aIS("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_ge(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gf(b){return!this.g_ge(b)}async g_aJM(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ce(a);case"buffer":return await this.g_Cd(a);default:throw new Error("unsupported type");}}g_aKv(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aKw(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aKx(e){const a=this.g_aKv();return new Promise((b,c)=>a.checkPermission(this.g_aKw(a,e),c=>b(!!c.hasPermission),c))}g_aCs(e){const a=this.g_aKv();return new Promise((b,c)=>a.requestPermission(this.g_aKw(a,e),c=>b(!!c.hasPermission),c))}async g_aKy(c){if("cordova"!==this.g_auf())return!0;if(this.g_asU())return!0;for(const d of c){const b=await this.g_aKx(d);if(b)continue;const a=await this.g_aCs(d);if(!1===a)return!1}return!0}async g_aKz(...b){if(!1===(await this.g_aKy(b)))throw new Error("Permission not granted")}g_aKA(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ce(b){const a=await this.g_aKA(b);return await q(a)}g_aKB(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aKC(b.filename,b.g_aKD,b.g_aKE)}}g_Cd(d){return new Promise((g,b)=>{e.push({filename:d,g_aKD:b=>{f--,this.g_aKB(),g(b)},g_aKE:c=>{f--,this.g_aKB(),b(c)}}),this.g_aKB()})}async g_aKC(c,a,b){try{const b=await this.g_aKA(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aJP(){const d=[];for(const[a,b]of Object.entries(this.g_aJK))d.push(this.g_aKF(a,b));await Promise.all(d)}async g_aKF(d,a){if("object"==typeof a)this.g_aJK[d]=new Blob([a.str],{type:a.type}),this.g_aJL[d]=a.str;else{let b=await this.g_aKG(a);b||(b=this.g_aKH(a)),this.g_aJK[d]=b}}async g_aKG(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aKH(c){const a=this.g_aKI(c);return this.g_aKJ(a.data,a.g_gx)}g_aKI(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gx:e,data:h}}g_aKJ(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aJW(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aJJ=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aIK{constructor(d){super(d,"runtime"),this.g_aKK=!0,this.g_aKL=-1,this.g_aKM="any",this.g_aKN=!1,this.g_aKO=!1,this.g_aKP=null,this.g_aKQ=null,this.g_aKR=null,d.g_aIX("canvas","update-size",b=>this.g_aKS(b)),d.g_aIX("runtime","invoke-download",b=>this.g_aKT(b)),d.g_aIX("runtime","raster-svg-image",b=>this.g_aKU(b)),d.g_aIX("runtime","get-svg-image-size",b=>this.g_aKV(b)),d.g_aIX("runtime","set-target-orientation",b=>this.g_aKW(b)),d.g_aIX("runtime","register-sw",()=>this.g_aKX()),d.g_aIX("runtime","post-to-debugger",b=>this.g_aKY(b)),d.g_aIX("runtime","go-to-script",b=>this.g_aKY(b)),d.g_aIX("runtime","before-start-ticking",()=>this.g_aKZ()),d.g_aIX("runtime","debug-highlight",b=>this.g_aK_(b)),d.g_aIX("runtime","enable-device-orientation",()=>this.g_aK$()),d.g_aIX("runtime","enable-device-motion",()=>this.g_aLa()),d.g_aIX("runtime","add-stylesheet",b=>this.g_aLb(b)),d.g_aIX("runtime","alert",b=>this.g_aLc(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aJO();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aLd=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_aps()),d.g_aug()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aLe=new Set,this.g_aLf=new WeakSet,this.g_aLg=!1}g_aKZ(){return"cordova"===this.g_asA.g_auf()?(document.addEventListener("pause",()=>this.g_asw(!0)),document.addEventListener("resume",()=>this.g_asw(!1))):document.addEventListener("visibilitychange",()=>this.g_asw(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aIO(){window.addEventListener("focus",()=>this.g_aLh("window-focus")),window.addEventListener("blur",()=>{this.g_aLh("window-blur",{parentHasFocus:b()}),this.g_aLd=0}),window.addEventListener("fullscreenchange",()=>this.g_apt()),window.addEventListener("webkitfullscreenchange",()=>this.g_apt()),window.addEventListener("mozfullscreenchange",()=>this.g_apt()),window.addEventListener("fullscreenerror",b=>this.g_apu(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_apu(b)),window.addEventListener("mozfullscreenerror",b=>this.g_apu(b)),window.addEventListener("keydown",b=>this.g_aLi("keydown",b)),window.addEventListener("keyup",b=>this.g_aLi("keyup",b)),window.addEventListener("dblclick",b=>this.g_aLj("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aLk("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>{this.g_aLl(b),this.g_aLm("pointerdown",b)}),window.addEventListener("mousemove",b=>this.g_aLm("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aLm("pointerup",b)),window.addEventListener("touchstart",b=>{this.g_aLl(b),this.g_aLn("pointerdown",b)}),window.addEventListener("touchmove",b=>this.g_aLn("pointermove",b)),window.addEventListener("touchend",b=>this.g_aLn("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aLn("pointercancel",b))):(window.addEventListener("pointerdown",b=>{this.g_aLl(b),this.g_aLo("pointerdown",b)}),this.g_asA.g_aIU()&&"undefined"!=typeof window.onpointerrawupdate&&self===self.top?(this.g_aKQ=new g_m_(()=>this.g_aLp(),5),this.g_aKQ.g_ni(!0),window.addEventListener("pointerrawupdate",b=>this.g_aLq(b))):window.addEventListener("pointermove",b=>this.g_aLo("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aLo("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aLo("pointercancel",b)));const c=()=>this.g_aKt();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aLh(c,a){this.g_aIP(c,a||null,k)}g_aLr(){return Math.max(window.innerWidth,1)}g_aLs(){return Math.max(window.innerHeight,1)}g_aps(){const c=this.g_aLr(),a=this.g_aLs();this.g_aLh("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_asA.g_aug()&&(-1!==this.g_aKL&&clearTimeout(this.g_aKL),this.g_aLt(c,a,0))}g_aLu(d,a,b){-1!==this.g_aKL&&clearTimeout(this.g_aKL),this.g_aKL=setTimeout(()=>this.g_aLt(d,a,b),48)}g_aLt(f,a,b){const c=this.g_aLr(),d=this.g_aLs();this.g_aKL=-1,c!=f||d!=a?this.g_aLh("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aLu(c,d,b+1)}g_aKW(b){this.g_aKM=b.targetOrientation}g_aLv(){const c=this.g_aKM;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_apt(){const b=g_aJu.g_apG();b&&"any"!==this.g_aKM&&this.g_aLv(),this.g_aIP("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aLr(),innerHeight:this.g_aLs()})}g_apu(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aIP("fullscreenerror",{isFullscreen:g_aJu.g_apG(),innerWidth:this.g_aLr(),innerHeight:this.g_aLs()})}g_asw(b){b?this.g_asA.g_ats():this.g_asA.g_atr(),this.g_aIP("visibilitychange",{hidden:b})}g_aLi(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aIT(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aLk(c,a){this.g_aIP(c,{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aLj(a,b,c){s(b)||this.g_aIT(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,timeStamp:b.timeStamp},c)}g_aLm(a,e){if(!s(e)){const b=this.g_aLd;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aIT(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aLd=e.buttons,this.g_aLj(e.type,e,j)}}g_aLo(d,a){this.g_aKQ&&"pointermove"!==d&&this.g_aKQ.g_lM();let b=0;if("mouse"===a.pointerType&&(b=this.g_aLd),this.g_aIT(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aLj(b,a,j),this.g_aLd=a.buttons}}g_aLq(b){this.g_aKR=b,this.g_aKQ.g_nm()}g_aLp(){this.g_aLo("pointermove",this.g_aKR),this.g_aKR=null}g_aLn(e,a){for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aIT(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aLl(b){window!==window.top&&window.focus(),this.g_aLw(b.target)&&document.activeElement&&!this.g_aLw(document.activeElement)&&document.activeElement.blur()}g_aLw(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}g_aK$(){this.g_aKN||(this.g_aKN=!0,window.addEventListener("deviceorientation",b=>this.g_aCQ(b)))}g_aLa(){this.g_aKO||(this.g_aKO=!0,window.addEventListener("devicemotion",b=>this.g_aCR(b)))}g_aCQ(b){this.g_aIP("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_aCR(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aIP("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aKS(d){const a=this.g_aIZ(),b=a.g_aJO();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aJV(),this.g_aKK&&(b.style.display="",this.g_aKK=!1)}g_aKT(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aKU(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aKV(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aLb(b){await t(b.url)}g_aKt(){const c=[...this.g_aLe];if(this.g_aLe.clear(),!this.g_aLg)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aLf.has(d)||this.g_aLe.add(d)})}}g_aKr(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aLf.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aLe.add(c)}a&&a.catch(()=>{this.g_aLf.has(c)||this.g_aLe.add(c)})}g_aKs(b){this.g_aLe.delete(b),this.g_aLf.add(b)}g_aKu(b){this.g_aLg=!!b}g_aK_(d){const a=d.show;if(!a)return void(this.g_aKP&&(this.g_aKP.style.display="none"));this.g_aKP||(this.g_aKP=document.createElement("div"),this.g_aKP.id="inspectOutline",document.body.appendChild(this.g_aKP));const b=this.g_aKP;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aKX(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aKY(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Ws(c,a){return this.g_aIR("js-invoke-function",{name:c,params:a})}g_aLc(b){alert(b.message)}};g_aJu.g_aKp(n)}{const c=document.currentScript.src;self.g_aJU=class{constructor(a){this.g_aLx=a,this.g_aqu=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fl(),this.g_auO=Math.min(navigator.hardwareConcurrency||2,16),this.g_aLy=null,this.g_aLz=[],this.g_auM=null,this.g_aLA=null}async g_alx(){if(this.g_aLB)throw new Error("already initialised");this.g_aLB=!0;const c=this.g_aLx.g_aJZ("dispatchworker.js");this.g_aLy=await this.g_aLx.g_aJ_(c,this.g_aqu,{name:"DispatchWorker"});const a=new MessageChannel;this.g_auM=a.port1,this.g_aLy.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aLA=await this.g_aKk()}async g_aKk(){const f=this.g_aLz.length,a=this.g_aLx.g_aJZ("jobworker.js"),b=await this.g_aLx.g_aJ_(a,this.g_aqu,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aLy.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aLz.push(b),d.port1}g_aKc(){return{inputPort:this.g_auM,outputPort:this.g_aLA,maxNumWorkers:this.g_auO}}g_aKg(){return[this.g_auM,this.g_aLA]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aJu({g_aJw:a,g_aKd:"workermain.js",g_aJQ:["scripts/c3runtime.js"],g_aJz:"scripts/",g_aKe:[],g_aJI:"html5"})}{const b=class extends g_aIK{constructor(b){super(b,"browser"),this.g_aqz="",this.g_aIY([["get-initial-state",b=>this.g_aLC(b)],["ready-for-sw-messages",()=>this.g_aLD()],["alert",b=>this.g_aLc(b)],["close",()=>this.g_aLE()],["set-focus",b=>this.g_aJj(b)],["vibrate",b=>this.g_aLF(b)],["lock-orientation",b=>this.g_aLG(b)],["unlock-orientation",()=>this.g_aLH()],["navigate",b=>this.g_aLI(b)],["request-fullscreen",b=>this.g_aLJ(b)],["exit-fullscreen",()=>this.g_aLK()],["set-hash",b=>this.g_aLL(b)]]),window.addEventListener("online",()=>this.g_ayP(!0)),window.addEventListener("offline",()=>this.g_ayP(!1)),window.addEventListener("hashchange",()=>this.g_ayS()),document.addEventListener("backbutton",()=>this.g_aLM()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_aLN(b))}g_aLC(b){return this.g_aqz=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_aLD(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aIP("sw-message",b.data))}g_ayP(b){this.g_aIP("online-state",{isOnline:b})}g_aLM(){this.g_aIP("backbutton")}g_aLN(b){b.handled=!0,this.g_aIP("backbutton")}g_aLO(){return"nwjs"===this.g_aqz?nw.Window.get():null}g_aLc(b){alert(b.message)}g_aLE(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aJj(c){const d=c.isFocus;if("nwjs"===this.g_aqz){const b=this.g_aLO();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_aLF(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aLG(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aLH(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_aLI(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_aLP();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_ayO&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aLJ(e){const a={navigationUI:"auto"},b=e.navUI;1===b?a.navigationUI="hide":2===b&&(a.navigationUI="show");const c=document.documentElement;c.requestFullscreen?c.requestFullscreen(a):c.mozRequestFullScreen?c.mozRequestFullScreen(a):c.msRequestFullscreen?c.msRequestFullscreen(a):c.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?c.webkitRequestFullScreen():c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_aLK(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}g_aLL(b){location.hash=b.hash}g_ayS(){this.g_aIP("hashchange",{location:location.toString()})}};g_aJu.g_aKp(b)}{const b=class extends g_aIK{constructor(b){super(b,"platform-info"),this.g_aIW("get-initial-state",()=>this.g_aLC()),window.addEventListener("resize",()=>this.g_aLQ())}g_aLC(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:this.g_aLR()}}g_aLR(){const e=document.body,a=e.style;a.setProperty("--temp-sai-top","env(safe-area-inset-top)"),a.setProperty("--temp-sai-right","env(safe-area-inset-right)"),a.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)"),a.setProperty("--temp-sai-left","env(safe-area-inset-left)");const b=getComputedStyle(e),c=[b.getPropertyValue("--temp-sai-top"),b.getPropertyValue("--temp-sai-right"),b.getPropertyValue("--temp-sai-bottom"),b.getPropertyValue("--temp-sai-left")].map(c=>{const a=parseInt(c,10);return isFinite(a)?a:0});return a.removeProperty("--temp-sai-top"),a.removeProperty("--temp-sai-right"),a.removeProperty("--temp-sai-bottom"),a.removeProperty("--temp-sai-left"),c}g_aLQ(){this.g_aIP("window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:this.g_aLR()})}};g_aJu.g_aKp(b)}{const b=class extends g_aIK{constructor(b){super(b,"touch"),this.g_aIW("request-permission",b=>this.g_aLS(b))}async g_aLS(d){const a=d.type;let b=!0;0===a?b=await this.g_aLT():1===a&&(b=await this.g_aLU()),this.g_aIP("permission-result",{type:a,result:b})}async g_aLT(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aLU(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aJu.g_aKp(b)}
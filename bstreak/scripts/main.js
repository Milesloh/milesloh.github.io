"use strict";window.g_aGV=class{constructor(c,a){this.g_arr=c,this.g_aGW=a,this.g_aGX=!1,this.g_aGY=()=>this.g_KY()}g_aGZ(){}g_aG_(e,a,b,c){this.g_arr.g_aG$(this.g_aGW,e,a,b,c)}g_aHa(e,a,b,c){return this.g_arr.g_aHb(this.g_aGW,e,a,b,c)}g_aHc(d,a,b){this.g_arr.g_aHd()?this.g_aG_(d,a,b):this.g_arr.g_aHe()._OnMessageFromDOM({type:"event",component:this.g_aGW,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aHf(c,a){this.g_arr.g_aHg(this.g_aGW,c,a)}g_aHh(d){for(const[a,b]of d)this.g_aHf(a,b)}g_aHi(){return this.g_arr}g_aHj(){return this.g_aGW}g_aek(){this.g_aGX||(this.g_arr.g_aHk(this.g_aGY),this.g_aGX=!0)}g_adX(){this.g_aGX&&(this.g_arr.g_aHl(this.g_aGY),this.g_aGX=!1)}g_KY(){}},window.g_mQ=class{constructor(c,a){this.g_ly=c,this.g_mR=a,this.g_mT=-1,this.g_mU=-Infinity,this.g_mV=()=>this.g_mW(),this.g_mX=!1,this.g_mY=!1}g_m_(b){this.g_mY=!!b}g_nc(){if(-1===this.g_mT){const d=Date.now(),a=d-this.g_mU,b=this.g_mR;a>=b&&this.g_mY?(this.g_mU=d,this.g_nd()):this.g_mT=self.setTimeout(this.g_mV,Math.max(b-a,4))}}g_nd(){this.g_mX=!0,this.g_ly(),this.g_mX=!1}g_lC(){this.g_mX||(this.g_ne(),this.g_mU=Date.now())}g_mW(){this.g_mT=-1,this.g_mU=Date.now(),this.g_nd()}g_ne(){-1!==this.g_mT&&(self.clearTimeout(this.g_mT),this.g_mT=-1)}g_ek(){this.g_ne(),this.g_ly=null,this.g_mV=null}},"use strict",window.g_aHm=class extends g_aGV{constructor(c,a){super(c,a),this.g_aHn=new Map,this.g_aHo=!0,this.g_aHf("create",b=>this.g_aHp(b)),this.g_aHf("destroy",b=>this.g_aHq(b)),this.g_aHf("set-visible",b=>this.g_aHr(b)),this.g_aHf("update-position",b=>this.g_aHs(b)),this.g_aHf("update-state",b=>this.g_aHt(b)),this.g_aHf("focus",b=>this.g_aHu(b)),this.g_aHf("set-css-style",b=>this.g_aHv(b))}g_aHw(b){this.g_aHo=!!b}g_aHx(c,e){this.g_aHf(c,b=>{const a=b.elementId,c=this.g_aHn.get(a);return e(c,b)})}g_aHp(d){const a=d.elementId,b=this.g_aeL(a,d);this.g_aHn.set(a,b),d.isVisible||(b.style.display="none"),this.g_aHo&&document.body.appendChild(b)}g_aeL(){throw new Error("required override")}g_aHy(){}g_aHq(d){const a=d.elementId,b=this.g_aHn.get(a);this.g_aHy(b),this.g_aHo&&b.parentElement.removeChild(b),this.g_aHn.delete(a)}g_aHz(d,a,b){b||(b={}),b.elementId=a,this.g_aG_(d,b)}g_aHA(d,a,b){b||(b={}),b.elementId=a,this.g_aHc(d,b)}g_aHr(c){if(this.g_aHo){const a=this.g_aHn.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aHs(d){if(this.g_aHo){const a=this.g_aHn.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aHt(c){const a=this.g_aHn.get(c.elementId);this.g_aHB(a,c)}g_aHB(){throw new Error("required override")}g_aHu(c){const a=this.g_aHn.get(c.elementId);c.focus?a.focus():a.blur()}g_aHv(c){const a=this.g_aHn.get(c.elementId);a.style[c.prop]=c.val}g_aHC(b){return this.g_aHn.get(b)}},"use strict";{function p(e){if(e.g_aHD){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aHE=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aHF=class c{constructor(c){this.g_aHG=c.g_aHH,this.g_aHI=null,this.g_apm="",this.g_aHJ=c.g_aHK,this.g_aHL={},this.g_aHM=null,this.g_aHN=null,this.g_aHO=[],this.g_aHP=null,this.g_ann=null,this.g_arl=null,this.g_anW=-1,this.g_aHQ=()=>this.g_aHR(),this.g_aHS=[],this.g_apr=c.g_aHT,b(this.g_apr)&&this.g_aHG&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aHG=!1),this.g_aHU=!1,this.g_aHV=null,this.g_aHW=null,("html5"===this.g_apr||"playable-ad"===this.g_apr)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aHg("runtime","cordova-fetch-local-file",b=>this.g_aHX(b)),this.g_aHg("runtime","create-job-worker",b=>this.g_aHY(b)),"cordova"===this.g_apr?document.addEventListener("deviceready",()=>this.g_ac_(c)):this.g_ac_(c)}g_ek(){this.g_asj(),this.g_aHI&&(this.g_aHI.onmessage=null,this.g_aHI=null),this.g_aHM&&(this.g_aHM.terminate(),this.g_aHM=null),this.g_aHN&&(this.g_aHN.g_ek(),this.g_aHN=null),this.g_ann&&(this.g_ann.parentElement.removeChild(this.g_ann),this.g_ann=null)}g_aHZ(){return this.g_ann}g_fe(){return this.g_apm}g_aHd(){return this.g_aHG}g_asY(){return this.g_apr}g_arL(){return a&&"cordova"===this.g_apr}g_asZ(){return a&&b(this.g_apr)}async g_ac_(d){if("playable-ad"===this.g_apr){this.g_aHV=self.c3_base64files,this.g_aHW={},await this.g_aH_();for(let a=0,b=d.g_aH$.length;a<b;++a){const b=d.g_aH$[a].toLowerCase();this.g_aHW.hasOwnProperty(b)?d.g_aH$[a]={g_aHD:!0,g_C:this.g_aHW[b]}:this.g_aHV.hasOwnProperty(b)&&(d.g_aH$[a]=URL.createObjectURL(this.g_aHV[b]))}}if(d.g_aIa)this.g_apm=d.g_aIa;else{const c=location.origin;this.g_apm=("null"===c?"file:///":c)+location.pathname;const a=this.g_apm.lastIndexOf("/");-1!==a&&(this.g_apm=this.g_apm.substr(0,a+1))}if(d.g_aIb)for(const[a,b]of Object.entries(d.g_aIb))this.g_aHL[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aHI=a.port1,this.g_aHI.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aIc(b)),this.g_arl=new self.g_aId(this),await this.g_arl.g_akv(),this.g_aIe(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aIf(),this.g_aHG?await this.g_aIg(d,a.port2):await this.g_aIh(d,a.port2)}g_aIi(b){return this.g_aHL.hasOwnProperty(b)?this.g_aHL[b]:b.endsWith("/workermain.js")&&this.g_aHL.hasOwnProperty("workermain.js")?this.g_aHL["workermain.js"]:"playable-ad"===this.g_apr&&this.g_aHV.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aHV[b.toLowerCase()]):b}async g_aIj(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arL()){const a=await this.g_BT(this.g_aHJ+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aIe(){if(this.g_asZ()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aIk(b){return{baseUrl:this.g_apm,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoz(),projectData:b.g_aIl,previewImageBlobs:window.cr_previewImageBlobs||this.g_aHV,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aHT,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aIm,jobScheduler:this.g_arl.g_aIn(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aHJ+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aHJ+"opus.wasm.wasm",isiOSCordova:this.g_arL(),isiOSWebView:this.g_asZ(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aIg(e,a){const b=this.g_aIi(e.g_aIo);this.g_aHM=await this.g_aIj(b,this.g_apm,{name:"Runtime"}),this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none";const c=this.g_ann.transferControlToOffscreen();document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aHM.postMessage(Object.assign(this.g_aIk(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aIp||[],engineScripts:e.g_aH$,projectScripts:window.g_aIq,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_arl.g_aIr()]),this.g_aHO=g.map(b=>new b(this)),this.g_aIs(),self.c3_callFunction=(c,a)=>this.g_aHP.g_Vq(c,a),"preview"===this.g_apr&&(self.goToLastErrorScript=()=>this.g_aG$("runtime","go-to-last-error-script"))}async g_aIh(a,b){this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none",document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aHO=g.map(b=>new b(this)),this.g_aIs();const c=a.g_aH$.map(b=>"string"==typeof b?new URL(b,this.g_apm).toString():b);if(Array.isArray(a.g_aIp)&&c.unshift(...a.g_aIp),await Promise.all(c.map(a=>p(a))),a.g_aIt&&0<a.g_aIt.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aIt.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aIu(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aIu(b),100)}}if("preview"===this.g_apr&&"object"!=typeof self.g_aO.g_aGU)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aIk(a),{isInWorker:!1,messagePort:b,canvas:this.g_ann,runOnStartupFunctions:k});this.g_aHN=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aHN,d)}g_aIu(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aHY(){const b=await this.g_arl.g_aIv();return{outputPort:b,transferables:[b]}}g_aHe(){if(this.g_aHG)throw new Error("not available in worker mode");return this.g_aHN}g_aG$(f,a,b,c,d){this.g_aHI.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aHU?void 0:d)}g_aHb(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aHI.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aHU?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aIw(c);else if("result"===a)this.g_aIx(c);else if("runtime-ready"===a)this.g_aIy();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aIw(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aIz(c,!1,""+d))}null!==c&&(f&&f.then?f.then(b=>this.g_aIz(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aIz(c,!1,""+d)}):this.g_aIz(c,!0,f))}g_aIz(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aHI.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aIx(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aHg(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aIA(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aIs(){for(const b of this.g_aHO)if("runtime"===b.g_aHj())return void(this.g_aHP=b);throw new Error("cannot find runtime DOM handler")}g_aIc(b){this.g_aG$("debugger","message",b)}g_aIy(){for(const b of this.g_aHO)b.g_aGZ()}static g_aoz(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aIB(){return await this.g_aHb("runtime","get-remote-preview-status-info")}g_aHk(b){this.g_aHS.push(b),this.g_asi()}g_aHl(c){const a=this.g_aHS.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aHS.splice(a,1),this.g_aHS.length||this.g_asj()}g_asi(){-1===this.g_anW&&this.g_aHS.length&&(this.g_anW=requestAnimationFrame(this.g_aHQ))}g_asj(){-1!==this.g_anW&&(cancelAnimationFrame(this.g_anW),this.g_anW=-1)}g_aHR(){this.g_anW=-1;for(const b of this.g_aHS)b();this.g_asi()}g_aIC(b){this.g_aHP.g_aIC(b)}g_aID(b){this.g_aHP.g_aID(b)}g_aIE(){this.g_aHP.g_aIE()}g_aIF(b){this.g_aHP.g_aIF(b)}g_Co(b){return!!d[b]}async g_agk(c){const a=await this.g_aHb("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fZ(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_f_(b){return!this.g_fZ(b)}async g_aHX(c){const a=c.filename;switch(c.as){case"text":return await this.g_BU(a);case"buffer":return await this.g_BT(a);default:throw new Error("unsupported type");}}g_aIG(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aIH(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aII(e){const a=this.g_aIG();return new Promise((b,c)=>a.checkPermission(this.g_aIH(a,e),c=>b(!!c.hasPermission),c))}g_aAj(e){const a=this.g_aIG();return new Promise((b,c)=>a.requestPermission(this.g_aIH(a,e),c=>b(!!c.hasPermission),c))}async g_aIJ(c){if("cordova"!==this.g_asY())return!0;if(this.g_arL())return!0;for(const d of c){const b=await this.g_aII(d);if(b)continue;const a=await this.g_aAj(d);if(!1===a)return!1}return!0}async g_aIK(...b){if(!1===(await this.g_aIJ(b)))throw new Error("Permission not granted")}g_aIL(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BU(b){const a=await this.g_aIL(b);return await q(a)}g_aIM(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aIN(b.filename,b.g_aIO,b.g_aIP)}}g_BT(d){return new Promise((g,b)=>{e.push({filename:d,g_aIO:b=>{f--,this.g_aIM(),g(b)},g_aIP:c=>{f--,this.g_aIM(),b(c)}}),this.g_aIM()})}async g_aIN(c,a,b){try{const b=await this.g_aIL(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aH_(){const d=[];for(const[a,b]of Object.entries(this.g_aHV))d.push(this.g_aIQ(a,b));await Promise.all(d)}async g_aIQ(d,a){if("object"==typeof a)this.g_aHV[d]=new Blob([a.str],{type:a.type}),this.g_aHW[d]=a.str;else{let b=await this.g_aIR(a);b||(b=this.g_aIS(a)),this.g_aHV[d]=b}}async g_aIR(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aIS(c){const a=this.g_aIT(c);return this.g_aIU(a.data,a.g_gq)}g_aIT(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gq:e,data:h}}g_aIU(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aIf(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aHU=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aGV{constructor(d){super(d,"runtime"),this.g_aIV=!0,this.g_aIW=-1,this.g_aIX="any",this.g_aIY=!1,this.g_aIZ=!1,this.g_aI_=null,this.g_aI$=null,this.g_aJa=null,d.g_aHg("canvas","update-size",b=>this.g_aJb(b)),d.g_aHg("runtime","invoke-download",b=>this.g_aJc(b)),d.g_aHg("runtime","raster-svg-image",b=>this.g_aJd(b)),d.g_aHg("runtime","get-svg-image-size",b=>this.g_aJe(b)),d.g_aHg("runtime","set-target-orientation",b=>this.g_aJf(b)),d.g_aHg("runtime","register-sw",()=>this.g_aJg()),d.g_aHg("runtime","post-to-debugger",b=>this.g_aJh(b)),d.g_aHg("runtime","go-to-script",b=>this.g_aJh(b)),d.g_aHg("runtime","before-start-ticking",()=>this.g_aJi()),d.g_aHg("runtime","debug-highlight",b=>this.g_aJj(b)),d.g_aHg("runtime","enable-device-orientation",()=>this.g_aJk()),d.g_aHg("runtime","enable-device-motion",()=>this.g_aJl()),d.g_aHg("runtime","add-stylesheet",b=>this.g_aJm(b)),d.g_aHg("runtime","alert",b=>this.g_aJn(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aHZ();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aJo=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_aol()),d.g_asZ()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aJp=new Set,this.g_aJq=new WeakSet,this.g_aJr=!1}g_aJi(){return"cordova"===this.g_arr.g_asY()?(document.addEventListener("pause",()=>this.g_arn(!0)),document.addEventListener("resume",()=>this.g_arn(!1))):document.addEventListener("visibilitychange",()=>this.g_arn(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aGZ(){window.addEventListener("focus",()=>this.g_aJs("window-focus")),window.addEventListener("blur",()=>{this.g_aJs("window-blur",{parentHasFocus:b()}),this.g_aJo=0}),window.addEventListener("fullscreenchange",()=>this.g_aom()),window.addEventListener("webkitfullscreenchange",()=>this.g_aom()),window.addEventListener("mozfullscreenchange",()=>this.g_aom()),window.addEventListener("fullscreenerror",b=>this.g_aon(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aon(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aon(b)),window.addEventListener("keydown",b=>this.g_aJt("keydown",b)),window.addEventListener("keyup",b=>this.g_aJt("keyup",b)),window.addEventListener("dblclick",b=>this.g_aJu("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aJv("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aJw("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aJw("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aJw("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aJx("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aJx("pointermove",b)),window.addEventListener("touchend",b=>this.g_aJx("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aJx("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aJy("pointerdown",b)),this.g_arr.g_aHd()&&"undefined"!=typeof window.onpointerrawupdate&&self===self.top?(this.g_aI$=new g_mQ(()=>this.g_aJz(),5),this.g_aI$.g_m_(!0),window.addEventListener("pointerrawupdate",b=>this.g_aJA(b))):window.addEventListener("pointermove",b=>this.g_aJy("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aJy("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aJy("pointercancel",b)));const c=()=>this.g_aIE();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aJs(c,a){this.g_aG_(c,a||null,k)}g_aJB(){return Math.max(window.innerWidth,1)}g_aJC(){return Math.max(window.innerHeight,1)}g_aol(){const c=this.g_aJB(),a=this.g_aJC();this.g_aJs("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_arr.g_asZ()&&(-1!==this.g_aIW&&clearTimeout(this.g_aIW),this.g_aJD(c,a,0))}g_aJE(d,a,b){-1!==this.g_aIW&&clearTimeout(this.g_aIW),this.g_aIW=setTimeout(()=>this.g_aJD(d,a,b),48)}g_aJD(f,a,b){const c=this.g_aJB(),d=this.g_aJC();this.g_aIW=-1,c!=f||d!=a?this.g_aJs("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aJE(c,d,b+1)}g_aJf(b){this.g_aIX=b.targetOrientation}g_aJF(){const c=this.g_aIX;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aom(){const b=g_aHF.g_aoz();b&&"any"!==this.g_aIX&&this.g_aJF(),this.g_aG_("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aJB(),innerHeight:this.g_aJC()})}g_aon(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aG_("fullscreenerror",{isFullscreen:g_aHF.g_aoz(),innerWidth:this.g_aJB(),innerHeight:this.g_aJC()})}g_arn(b){b?this.g_arr.g_asj():this.g_arr.g_asi(),this.g_aG_("visibilitychange",{hidden:b})}g_aJt(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aHc(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aJv(c,a){this.g_aG_(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aJu(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aHc(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aJw(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aJo;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aHc(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aJo=e.buttons,this.g_aJu(e.type,e,j)}}g_aJy(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aI$&&"pointermove"!==d&&this.g_aI$.g_lC();let b=0;if("mouse"===a.pointerType&&(b=this.g_aJo),this.g_aHc(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aJu(b,a,j),this.g_aJo=a.buttons}}g_aJA(b){this.g_aJa=b,this.g_aI$.g_nc()}g_aJz(){this.g_aJy("pointermove",this.g_aJa),this.g_aJa=null}g_aJx(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aHc(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aJk(){this.g_aIY||(this.g_aIY=!0,window.addEventListener("deviceorientation",b=>this.g_aAH(b)))}g_aJl(){this.g_aIZ||(this.g_aIZ=!0,window.addEventListener("devicemotion",b=>this.g_aAI(b)))}g_aAH(b){this.g_aG_("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_aAI(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aG_("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aJb(d){const a=this.g_aHi(),b=a.g_aHZ();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aIe(),this.g_aIV&&(b.style.display="",this.g_aIV=!1)}g_aJc(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aJd(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aJe(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aJm(b){await t(b.url)}g_aIE(){const c=[...this.g_aJp];if(this.g_aJp.clear(),!this.g_aJr)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aJq.has(d)||this.g_aJp.add(d)})}}g_aIC(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aJq.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aJp.add(c)}a&&a.catch(()=>{this.g_aJq.has(c)||this.g_aJp.add(c)})}g_aID(b){this.g_aJp.delete(b),this.g_aJq.add(b)}g_aIF(b){this.g_aJr=!!b}g_aJj(d){const a=d.show;if(!a)return void(this.g_aI_&&(this.g_aI_.style.display="none"));this.g_aI_||(this.g_aI_=document.createElement("div"),this.g_aI_.id="inspectOutline",document.body.appendChild(this.g_aI_));const b=this.g_aI_;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aJg(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aJh(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vq(c,a){return this.g_aHa("js-invoke-function",{name:c,params:a})}g_aJn(b){alert(b.message)}};g_aHF.g_aIA(n)}{const c=document.currentScript.src;self.g_aId=class{constructor(a){this.g_aJG=a,this.g_apm=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atF=Math.min(navigator.hardwareConcurrency||2,16),this.g_aJH=null,this.g_aJI=[],this.g_atD=null,this.g_aJJ=null}async g_akv(){if(this.g_aJK)throw new Error("already initialised");this.g_aJK=!0;const c=this.g_aJG.g_aIi("dispatchworker.js");this.g_aJH=await this.g_aJG.g_aIj(c,this.g_apm,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atD=a.port1,this.g_aJH.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aJJ=await this.g_aIv()}async g_aIv(){const f=this.g_aJI.length,a=this.g_aJG.g_aIi("jobworker.js"),b=await this.g_aJG.g_aIj(a,this.g_apm,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aJH.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aJI.push(b),d.port1}g_aIn(){return{inputPort:this.g_atD,outputPort:this.g_aJJ,maxNumWorkers:this.g_atF}}g_aIr(){return[this.g_atD,this.g_aJJ]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aHF({g_aHH:a,g_aIo:"workermain.js",g_aH$:["scripts/c3runtime.js"],g_aHK:"scripts/",g_aIp:[],g_aHT:"html5"})}{const b=class extends g_aGV{constructor(b){super(b,"touch"),this.g_aHf("request-permission",b=>this.g_aJL(b))}async g_aJL(d){const a=d.type;let b=!0;0===a?b=await this.g_aJM():1===a&&(b=await this.g_aJN()),this.g_aG_("permission-result",{type:a,result:b})}async g_aJM(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aJN(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aHF.g_aIA(b)}{const b=class extends g_aGV{constructor(b){super(b,"mouse"),this.g_aHf("cursor",b=>this.g_aJO(b))}g_aJO(b){document.documentElement.style.cursor=b}};g_aHF.g_aIA(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aHm{constructor(b){super(b,"text-input"),this.g_aHx("scroll-to-bottom",b=>this.g_aJP(b))}g_aeL(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aHA("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aHA("dblclick",b)}),d.addEventListener("input",()=>this.g_aHz("change",b,{text:d.value})),d.id=c.id,this.g_aHB(d,c),d}g_aHB(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck}g_aJP(b){b.scrollTop=b.scrollHeight}};g_aHF.g_aIA(b)}
"use strict";window.g_aEO=class{constructor(c,a){this.g_aqU=c,this.g_aEP=a,this.g_aEQ=!1,this.g_aER=()=>this.g_KM()}g_aES(){}g_aET(e,a,b,c){this.g_aqU.g_aEU(this.g_aEP,e,a,b,c)}g_aEV(e,a,b,c){return this.g_aqU.g_aEW(this.g_aEP,e,a,b,c)}g_aEX(d,a,b){this.g_aqU.g_aEY()?this.g_aET(d,a,b):this.g_aqU.g_aEZ()._OnMessageFromDOM({type:"event",component:this.g_aEP,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aE_(c,a){this.g_aqU.g_aE$(this.g_aEP,c,a)}g_aFa(d){for(const[a,b]of d)this.g_aE_(a,b)}g_aFb(){return this.g_aqU}g_aFc(){return this.g_aEP}g_adZ(){this.g_aEQ||(this.g_aqU.g_aFd(this.g_aER),this.g_aEQ=!0)}g_adK(){this.g_aEQ&&(this.g_aqU.g_aFe(this.g_aER),this.g_aEQ=!1)}g_KM(){}},window.g_mM=class{constructor(c,a){this.g_lv=c,this.g_mN=a,this.g_mP=-1,this.g_mQ=-Infinity,this.g_mR=()=>this.g_mS(),this.g_mT=!1,this.g_mU=!1}g_mW(b){this.g_mU=!!b}g_m_(){if(-1===this.g_mP){const d=Date.now(),a=d-this.g_mQ,b=this.g_mN;a>=b&&this.g_mU?(this.g_mQ=d,this.g_m$()):this.g_mP=self.setTimeout(this.g_mR,Math.max(b-a,4))}}g_m$(){this.g_mT=!0,this.g_lv(),this.g_mT=!1}g_lz(){this.g_mT||(this.g_na(),this.g_mQ=Date.now())}g_mS(){this.g_mP=-1,this.g_mQ=Date.now(),this.g_m$()}g_na(){-1!==this.g_mP&&(self.clearTimeout(this.g_mP),this.g_mP=-1)}g_ek(){this.g_na(),this.g_lv=null,this.g_mR=null}},"use strict",window.g_aFf=class extends g_aEO{constructor(c,a){super(c,a),this.g_aFg=new Map,this.g_aFh=!0,this.g_aE_("create",b=>this.g_aFi(b)),this.g_aE_("destroy",b=>this.g_aFj(b)),this.g_aE_("set-visible",b=>this.g_aFk(b)),this.g_aE_("update-position",b=>this.g_aFl(b)),this.g_aE_("update-state",b=>this.g_aFm(b)),this.g_aE_("focus",b=>this.g_aFn(b)),this.g_aE_("set-css-style",b=>this.g_aFo(b))}g_aFp(b){this.g_aFh=!!b}g_aFq(c,e){this.g_aE_(c,b=>{const a=b.elementId,c=this.g_aFg.get(a);return e(c,b)})}g_aFi(d){const a=d.elementId,b=this.g_aex(a,d);this.g_aFg.set(a,b),d.isVisible||(b.style.display="none"),this.g_aFh&&document.body.appendChild(b)}g_aex(){throw new Error("required override")}g_aFr(){}g_aFj(d){const a=d.elementId,b=this.g_aFg.get(a);this.g_aFr(b),this.g_aFh&&b.parentElement.removeChild(b),this.g_aFg.delete(a)}g_aFs(d,a,b){b||(b={}),b.elementId=a,this.g_aET(d,b)}g_aFt(d,a,b){b||(b={}),b.elementId=a,this.g_aEX(d,b)}g_aFk(c){if(this.g_aFh){const a=this.g_aFg.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aFl(d){if(this.g_aFh){const a=this.g_aFg.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aFm(c){const a=this.g_aFg.get(c.elementId);this.g_aFu(a,c)}g_aFu(){throw new Error("required override")}g_aFn(c){const a=this.g_aFg.get(c.elementId);c.focus?a.focus():a.blur()}g_aFo(c){const a=this.g_aFg.get(c.elementId);a.style[c.prop]=c.val}g_aFv(b){return this.g_aFg.get(b)}},"use strict";{function p(e){if(e.g_aFw){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aFx=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aFy=class c{constructor(c){this.g_aFz=c.g_aFA,this.g_aFB=null,this.g_aoP="",this.g_aFC=c.g_aFD,this.g_aFE={},this.g_aFF=null,this.g_aFG=null,this.g_aFH=[],this.g_aFI=null,this.g_amQ=null,this.g_aqO=null,this.g_anx=-1,this.g_aFJ=()=>this.g_aFK(),this.g_aFL=[],this.g_aoU=c.g_aFM,b(this.g_aoU)&&this.g_aFz&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aFz=!1),this.g_aFN=!1,this.g_aFO=null,this.g_aFP=null,("html5"===this.g_aoU||"playable-ad"===this.g_aoU)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aE$("runtime","cordova-fetch-local-file",b=>this.g_aFQ(b)),this.g_aE$("runtime","create-job-worker",b=>this.g_aFR(b)),"cordova"===this.g_aoU?document.addEventListener("deviceready",()=>this.g_acN(c)):this.g_acN(c)}g_ek(){this.g_arL(),this.g_aFB&&(this.g_aFB.onmessage=null,this.g_aFB=null),this.g_aFF&&(this.g_aFF.terminate(),this.g_aFF=null),this.g_aFG&&(this.g_aFG.g_ek(),this.g_aFG=null),this.g_amQ&&(this.g_amQ.parentElement.removeChild(this.g_amQ),this.g_amQ=null)}g_aFS(){return this.g_amQ}g_fe(){return this.g_aoP}g_aEY(){return this.g_aFz}g_asy(){return this.g_aoU}g_arl(){return a&&"cordova"===this.g_aoU}g_asz(){return a&&b(this.g_aoU)}async g_acN(d){if("playable-ad"===this.g_aoU){this.g_aFO=self.c3_base64files,this.g_aFP={},await this.g_aFT();for(let a=0,b=d.g_aFU.length;a<b;++a){const b=d.g_aFU[a].toLowerCase();this.g_aFP.hasOwnProperty(b)?d.g_aFU[a]={g_aFw:!0,g_C:this.g_aFP[b]}:this.g_aFO.hasOwnProperty(b)&&(d.g_aFU[a]=URL.createObjectURL(this.g_aFO[b]))}}if(d.g_aFV)this.g_aoP=d.g_aFV;else{const c=location.origin;this.g_aoP=("null"===c?"file:///":c)+location.pathname;const a=this.g_aoP.lastIndexOf("/");-1!==a&&(this.g_aoP=this.g_aoP.substr(0,a+1))}if(d.g_aFW)for(const[a,b]of Object.entries(d.g_aFW))this.g_aFE[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aFB=a.port1,this.g_aFB.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aFX(b)),this.g_aqO=new self.g_aFY(this),await this.g_aqO.g_ajY(),this.g_aFZ(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aF_(),this.g_aFz?await this.g_aF$(d,a.port2):await this.g_aGa(d,a.port2)}g_aGb(b){return this.g_aFE.hasOwnProperty(b)?this.g_aFE[b]:b.endsWith("/workermain.js")&&this.g_aFE.hasOwnProperty("workermain.js")?this.g_aFE["workermain.js"]:"playable-ad"===this.g_aoU&&this.g_aFO.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aFO[b.toLowerCase()]):b}async g_aGc(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arl()){const a=await this.g_BK(this.g_aFC+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aFZ(){if(this.g_asz()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aGd(b){return{baseUrl:this.g_aoP,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoa(),projectData:b.g_aGe,previewImageBlobs:window.cr_previewImageBlobs||this.g_aFO,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aFM,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aGf,jobScheduler:this.g_aqO.g_aGg(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aFC+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aFC+"opus.wasm.wasm",isiOSCordova:this.g_arl(),isiOSWebView:this.g_asz(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aF$(e,a){const b=this.g_aGb(e.g_aGh);this.g_aFF=await this.g_aGc(b,this.g_aoP,{name:"Runtime"}),this.g_amQ=document.createElement("canvas"),this.g_amQ.style.display="none";const c=this.g_amQ.transferControlToOffscreen();document.body.appendChild(this.g_amQ),window.c3canvas=this.g_amQ,this.g_aFF.postMessage(Object.assign(this.g_aGd(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aGi||[],engineScripts:e.g_aFU,projectScripts:window.g_aGj,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_aqO.g_aGk()]),this.g_aFH=g.map(b=>new b(this)),this.g_aGl(),self.c3_callFunction=(c,a)=>this.g_aFI.g_Vd(c,a),"preview"===this.g_aoU&&(self.goToLastErrorScript=()=>this.g_aEU("runtime","go-to-last-error-script"))}async g_aGa(a,b){this.g_amQ=document.createElement("canvas"),this.g_amQ.style.display="none",document.body.appendChild(this.g_amQ),window.c3canvas=this.g_amQ,this.g_aFH=g.map(b=>new b(this)),this.g_aGl();const c=a.g_aFU.map(b=>"string"==typeof b?new URL(b,this.g_aoP).toString():b);if(Array.isArray(a.g_aGi)&&c.unshift(...a.g_aGi),await Promise.all(c.map(a=>p(a))),a.g_aGm&&0<a.g_aGm.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aGm.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aGn(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aGn(b),100)}}if("preview"===this.g_aoU&&"object"!=typeof self.g_aO.g_aEN)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aGd(a),{isInWorker:!1,messagePort:b,canvas:this.g_amQ,runOnStartupFunctions:k});this.g_aFG=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aFG,d)}g_aGn(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aFR(){const b=await this.g_aqO.g_aGo();return{outputPort:b,transferables:[b]}}g_aEZ(){if(this.g_aFz)throw new Error("not available in worker mode");return this.g_aFG}g_aEU(f,a,b,c,d){this.g_aFB.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aFN?void 0:d)}g_aEW(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aFB.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aFN?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aGp(c);else if("result"===a)this.g_aGq(c);else if("runtime-ready"===a)this.g_aGr();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aGp(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aGs(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aGs(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aGs(c,!1,d.toString())}):this.g_aGs(c,!0,f))}g_aGs(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aFB.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aGq(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aE$(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aGt(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aGl(){for(const b of this.g_aFH)if("runtime"===b.g_aFc())return void(this.g_aFI=b);throw new Error("cannot find runtime DOM handler")}g_aFX(b){this.g_aEU("debugger","message",b)}g_aGr(){for(const b of this.g_aFH)b.g_aES()}static g_aoa(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aGu(){return await this.g_aEW("runtime","get-remote-preview-status-info")}g_aFd(b){this.g_aFL.push(b),this.g_arK()}g_aFe(c){const a=this.g_aFL.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aFL.splice(a,1),this.g_aFL.length||this.g_arL()}g_arK(){-1===this.g_anx&&this.g_aFL.length&&(this.g_anx=requestAnimationFrame(this.g_aFJ))}g_arL(){-1!==this.g_anx&&(cancelAnimationFrame(this.g_anx),this.g_anx=-1)}g_aFK(){this.g_anx=-1;for(const b of this.g_aFL)b();this.g_arK()}g_aGv(b){this.g_aFI.g_aGv(b)}g_aGw(b){this.g_aFI.g_aGw(b)}g_aGx(){this.g_aFI.g_aGx()}g_aGy(b){this.g_aFI.g_aGy(b)}g_Cf(b){return!!d[b]}async g_afT(c){const a=await this.g_aEW("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fW(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fX(b){return!this.g_fW(b)}async g_aFQ(c){const a=c.filename;switch(c.as){case"text":return await this.g_BL(a);case"buffer":return await this.g_BK(a);default:throw new Error("unsupported type");}}g_aGz(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aGA(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aGB(e){const a=this.g_aGz();return new Promise((b,c)=>a.checkPermission(this.g_aGA(a,e),c=>b(!!c.hasPermission),c))}g_aw_(e){const a=this.g_aGz();return new Promise((b,c)=>a.requestPermission(this.g_aGA(a,e),c=>b(!!c.hasPermission),c))}async g_aGC(c){if("cordova"!==this.g_asy())return!0;if(this.g_arl())return!0;for(const d of c){const b=await this.g_aGB(d);if(b)continue;const a=await this.g_aw_(d);if(!1===a)return!1}return!0}async g_aGD(...b){if(!1===(await this.g_aGC(b)))throw new Error("Permission not granted")}g_aGE(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BL(b){const a=await this.g_aGE(b);return await q(a)}g_aGF(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aGG(b.filename,b.g_aGH,b.g_aGI)}}g_BK(d){return new Promise((g,b)=>{e.push({filename:d,g_aGH:b=>{f--,this.g_aGF(),g(b)},g_aGI:c=>{f--,this.g_aGF(),b(c)}}),this.g_aGF()})}async g_aGG(c,a,b){try{const b=await this.g_aGE(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aFT(){const d=[];for(const[a,b]of Object.entries(this.g_aFO))d.push(this.g_aGJ(a,b));await Promise.all(d)}async g_aGJ(d,a){if("object"==typeof a)this.g_aFO[d]=new Blob([a.str],{type:a.type}),this.g_aFP[d]=a.str;else{let b=await this.g_aGK(a);b||(b=this.g_aGL(a)),this.g_aFO[d]=b}}async g_aGK(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aGL(c){const a=this.g_aGM(c);return this.g_aGN(a.data,a.g_gn)}g_aGM(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gn:e,data:h}}g_aGN(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aF_(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aFN=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aEO{constructor(d){super(d,"runtime"),this.g_aGO=!0,this.g_aGP=-1,this.g_aGQ="any",this.g_aGR=!1,this.g_aGS=!1,this.g_aGT=null,this.g_aGU=null,this.g_aGV=null,d.g_aE$("canvas","update-size",b=>this.g_aGW(b)),d.g_aE$("runtime","invoke-download",b=>this.g_aGX(b)),d.g_aE$("runtime","raster-svg-image",b=>this.g_aGY(b)),d.g_aE$("runtime","get-svg-image-size",b=>this.g_aGZ(b)),d.g_aE$("runtime","set-target-orientation",b=>this.g_aG_(b)),d.g_aE$("runtime","register-sw",()=>this.g_aG$()),d.g_aE$("runtime","post-to-debugger",b=>this.g_aHa(b)),d.g_aE$("runtime","go-to-script",b=>this.g_aHa(b)),d.g_aE$("runtime","before-start-ticking",()=>this.g_aHb()),d.g_aE$("runtime","debug-highlight",b=>this.g_aHc(b)),d.g_aE$("runtime","enable-device-orientation",()=>this.g_aHd()),d.g_aE$("runtime","enable-device-motion",()=>this.g_aHe()),d.g_aE$("runtime","add-stylesheet",b=>this.g_aHf(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aFS();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aHg=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_anO()),d.g_asz()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aHh=new Set,this.g_aHi=new WeakSet,this.g_aHj=!1}g_aHb(){return"cordova"===this.g_aqU.g_asy()?(document.addEventListener("pause",()=>this.g_aqQ(!0)),document.addEventListener("resume",()=>this.g_aqQ(!1))):document.addEventListener("visibilitychange",()=>this.g_aqQ(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aES(){window.addEventListener("focus",()=>this.g_aHk("window-focus")),window.addEventListener("blur",()=>{this.g_aHk("window-blur",{parentHasFocus:b()}),this.g_aHg=0}),window.addEventListener("fullscreenchange",()=>this.g_anP()),window.addEventListener("webkitfullscreenchange",()=>this.g_anP()),window.addEventListener("mozfullscreenchange",()=>this.g_anP()),window.addEventListener("fullscreenerror",b=>this.g_anQ(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_anQ(b)),window.addEventListener("mozfullscreenerror",b=>this.g_anQ(b)),window.addEventListener("keydown",b=>this.g_aHl("keydown",b)),window.addEventListener("keyup",b=>this.g_aHl("keyup",b)),window.addEventListener("dblclick",b=>this.g_aHm("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aHn("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aHo("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aHo("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aHo("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aHp("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aHp("pointermove",b)),window.addEventListener("touchend",b=>this.g_aHp("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aHp("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aHq("pointerdown",b)),this.g_aqU.g_aEY()&&"undefined"!=typeof window.onpointerrawupdate?(this.g_aGU=new g_mM(()=>this.g_aHr(),5),this.g_aGU.g_mW(!0),window.addEventListener("pointerrawupdate",b=>this.g_aHs(b))):window.addEventListener("pointermove",b=>this.g_aHq("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aHq("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aHq("pointercancel",b)));const c=()=>this.g_aGx();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aHk(c,a){this.g_aET(c,a||null,k)}g_aHt(){return Math.max(window.innerWidth,1)}g_aHu(){return Math.max(window.innerHeight,1)}g_anO(){const c=this.g_aHt(),a=this.g_aHu();this.g_aHk("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_aqU.g_asz()&&(-1!==this.g_aGP&&clearTimeout(this.g_aGP),this.g_aHv(c,a,0))}g_aHw(d,a,b){-1!==this.g_aGP&&clearTimeout(this.g_aGP),this.g_aGP=setTimeout(()=>this.g_aHv(d,a,b),48)}g_aHv(f,a,b){const c=this.g_aHt(),d=this.g_aHu();this.g_aGP=-1,c!=f||d!=a?this.g_aHk("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aHw(c,d,b+1)}g_aG_(b){this.g_aGQ=b.targetOrientation}g_aHx(){const c=this.g_aGQ;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_anP(){const b=g_aFy.g_aoa();b&&"any"!==this.g_aGQ&&this.g_aHx(),this.g_aET("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aHt(),innerHeight:this.g_aHu()})}g_anQ(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aET("fullscreenerror",{isFullscreen:g_aFy.g_aoa(),innerWidth:this.g_aHt(),innerHeight:this.g_aHu()})}g_aqQ(b){b?this.g_aqU.g_arL():this.g_aqU.g_arK(),this.g_aET("visibilitychange",{hidden:b})}g_aHl(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aEX(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aHn(c,a){this.g_aET(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aHm(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aEX(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aHo(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aHg;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aEX(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aHg=e.buttons,this.g_aHm(e.type,e,j)}}g_aHq(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aGU&&"pointermove"!==d&&this.g_aGU.g_lz();let b=0;if("mouse"===a.pointerType&&(b=this.g_aHg),this.g_aEX(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aHm(b,a,j),this.g_aHg=a.buttons}}g_aHs(b){this.g_aGV=b,this.g_aGU.g_m_()}g_aHr(){this.g_aHq("pointermove",this.g_aGV),this.g_aGV=null}g_aHp(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aEX(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aHd(){this.g_aGR||(this.g_aGR=!0,window.addEventListener("deviceorientation",b=>this.g_axw(b)))}g_aHe(){this.g_aGS||(this.g_aGS=!0,window.addEventListener("devicemotion",b=>this.g_axx(b)))}g_axw(b){this.g_aET("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_axx(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aET("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aGW(d){const a=this.g_aFb(),b=a.g_aFS();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aFZ(),this.g_aGO&&(b.style.display="",this.g_aGO=!1)}g_aGX(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aGY(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aGZ(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aHf(b){await t(b.url)}g_aGx(){const c=[...this.g_aHh];if(this.g_aHh.clear(),!this.g_aHj)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aHi.has(d)||this.g_aHh.add(d)})}}g_aGv(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aHi.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aHh.add(c)}a&&a.catch(()=>{this.g_aHi.has(c)||this.g_aHh.add(c)})}g_aGw(b){this.g_aHh.delete(b),this.g_aHi.add(b)}g_aGy(b){this.g_aHj=!!b}g_aHc(d){const a=d.show;if(!a)return void(this.g_aGT&&(this.g_aGT.style.display="none"));this.g_aGT||(this.g_aGT=document.createElement("div"),this.g_aGT.id="inspectOutline",document.body.appendChild(this.g_aGT));const b=this.g_aGT;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aG$(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aHa(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vd(c,a){return this.g_aEV("js-invoke-function",{name:c,params:a})}};g_aFy.g_aGt(n)}{const c=document.currentScript.src;self.g_aFY=class{constructor(a){this.g_aHy=a,this.g_aoP=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atf=Math.min(navigator.hardwareConcurrency||2,16),this.g_aHz=null,this.g_aHA=[],this.g_atd=null,this.g_aHB=null}async g_ajY(){if(this.g_aHC)throw new Error("already initialised");this.g_aHC=!0;const c=this.g_aHy.g_aGb("dispatchworker.js");this.g_aHz=await this.g_aHy.g_aGc(c,this.g_aoP,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atd=a.port1,this.g_aHz.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aHB=await this.g_aGo()}async g_aGo(){const f=this.g_aHA.length,a=this.g_aHy.g_aGb("jobworker.js"),b=await this.g_aHy.g_aGc(a,this.g_aoP,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aHz.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aHA.push(b),d.port1}g_aGg(){return{inputPort:this.g_atd,outputPort:this.g_aHB,maxNumWorkers:this.g_atf}}g_aGk(){return[this.g_atd,this.g_aHB]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aFy({g_aFA:a,g_aGh:"workermain.js",g_aFU:["scripts/c3runtime.js"],g_aFD:"scripts/",g_aGi:[],g_aFM:"html5"})}{const b=class extends g_aEO{constructor(b){super(b,"touch"),this.g_aE_("request-permission",b=>this.g_aHD(b))}async g_aHD(d){const a=d.type;let b=!0;0===a?b=await this.g_aHE():1===a&&(b=await this.g_aHF()),this.g_aET("permission-result",{type:a,result:b})}async g_aHE(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aHF(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aFy.g_aGt(b)}
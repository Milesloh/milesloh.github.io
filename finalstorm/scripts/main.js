"use strict";window.g_aDE=class{constructor(c,a){this.g_arr=c,this.g_aDF=a,this.g_aDG=!1,this.g_aDH=()=>this.g_KY()}g_aDI(){}g_aDJ(e,a,b,c){this.g_arr.g_aDK(this.g_aDF,e,a,b,c)}g_aDL(e,a,b,c){return this.g_arr.g_aDM(this.g_aDF,e,a,b,c)}g_aDN(d,a,b){this.g_arr.g_aDO()?this.g_aDJ(d,a,b):this.g_arr.g_aDP()._OnMessageFromDOM({type:"event",component:this.g_aDF,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aDQ(c,a){this.g_arr.g_aDR(this.g_aDF,c,a)}g_aDS(d){for(const[a,b]of d)this.g_aDQ(a,b)}g_aDT(){return this.g_arr}g_aDU(){return this.g_aDF}g_aek(){this.g_aDG||(this.g_arr.g_aDV(this.g_aDH),this.g_aDG=!0)}g_adX(){this.g_aDG&&(this.g_arr.g_aDW(this.g_aDH),this.g_aDG=!1)}g_KY(){}},window.g_mQ=class{constructor(c,a){this.g_ly=c,this.g_mR=a,this.g_mT=-1,this.g_mU=-Infinity,this.g_mV=()=>this.g_mW(),this.g_mX=!1,this.g_mY=!1}g_m_(b){this.g_mY=!!b}g_nc(){if(-1===this.g_mT){const d=Date.now(),a=d-this.g_mU,b=this.g_mR;a>=b&&this.g_mY?(this.g_mU=d,this.g_nd()):this.g_mT=self.setTimeout(this.g_mV,Math.max(b-a,4))}}g_nd(){this.g_mX=!0,this.g_ly(),this.g_mX=!1}g_lC(){this.g_mX||(this.g_ne(),this.g_mU=Date.now())}g_mW(){this.g_mT=-1,this.g_mU=Date.now(),this.g_nd()}g_ne(){-1!==this.g_mT&&(self.clearTimeout(this.g_mT),this.g_mT=-1)}g_ek(){this.g_ne(),this.g_ly=null,this.g_mV=null}},"use strict",window.g_aDX=class extends g_aDE{constructor(c,a){super(c,a),this.g_aDY=new Map,this.g_aDZ=!0,this.g_aDQ("create",b=>this.g_aD_(b)),this.g_aDQ("destroy",b=>this.g_aD$(b)),this.g_aDQ("set-visible",b=>this.g_aEa(b)),this.g_aDQ("update-position",b=>this.g_aEb(b)),this.g_aDQ("update-state",b=>this.g_aEc(b)),this.g_aDQ("focus",b=>this.g_aEd(b)),this.g_aDQ("set-css-style",b=>this.g_aEe(b))}g_aEf(b){this.g_aDZ=!!b}g_aEg(c,e){this.g_aDQ(c,b=>{const a=b.elementId,c=this.g_aDY.get(a);return e(c,b)})}g_aD_(d){const a=d.elementId,b=this.g_aeL(a,d);this.g_aDY.set(a,b),d.isVisible||(b.style.display="none"),this.g_aDZ&&document.body.appendChild(b)}g_aeL(){throw new Error("required override")}g_aEh(){}g_aD$(d){const a=d.elementId,b=this.g_aDY.get(a);this.g_aEh(b),this.g_aDZ&&b.parentElement.removeChild(b),this.g_aDY.delete(a)}g_aEi(d,a,b){b||(b={}),b.elementId=a,this.g_aDJ(d,b)}g_aEj(d,a,b){b||(b={}),b.elementId=a,this.g_aDN(d,b)}g_aEa(c){if(this.g_aDZ){const a=this.g_aDY.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aEb(d){if(this.g_aDZ){const a=this.g_aDY.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aEc(c){const a=this.g_aDY.get(c.elementId);this.g_aEk(a,c)}g_aEk(){throw new Error("required override")}g_aEd(c){const a=this.g_aDY.get(c.elementId);c.focus?a.focus():a.blur()}g_aEe(c){const a=this.g_aDY.get(c.elementId);a.style[c.prop]=c.val}g_aEl(b){return this.g_aDY.get(b)}},"use strict";{function p(e){if(e.g_aEm){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aEn=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aEo=class c{constructor(c){this.g_aEp=c.g_aEq,this.g_aEr=null,this.g_apm="",this.g_aEs=c.g_aEt,this.g_aEu={},this.g_aEv=null,this.g_aEw=null,this.g_aEx=[],this.g_aEy=null,this.g_ann=null,this.g_arl=null,this.g_anW=-1,this.g_aEz=()=>this.g_aEA(),this.g_aEB=[],this.g_apr=c.g_aEC,b(this.g_apr)&&this.g_aEp&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aEp=!1),this.g_aED=!1,this.g_aEE=null,this.g_aEF=null,("html5"===this.g_apr||"playable-ad"===this.g_apr)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aDR("runtime","cordova-fetch-local-file",b=>this.g_aEG(b)),this.g_aDR("runtime","create-job-worker",b=>this.g_aEH(b)),"cordova"===this.g_apr?document.addEventListener("deviceready",()=>this.g_ac_(c)):this.g_ac_(c)}g_ek(){this.g_asj(),this.g_aEr&&(this.g_aEr.onmessage=null,this.g_aEr=null),this.g_aEv&&(this.g_aEv.terminate(),this.g_aEv=null),this.g_aEw&&(this.g_aEw.g_ek(),this.g_aEw=null),this.g_ann&&(this.g_ann.parentElement.removeChild(this.g_ann),this.g_ann=null)}g_aEI(){return this.g_ann}g_fe(){return this.g_apm}g_aDO(){return this.g_aEp}g_asY(){return this.g_apr}g_arL(){return a&&"cordova"===this.g_apr}g_asZ(){return a&&b(this.g_apr)}async g_ac_(d){if("playable-ad"===this.g_apr){this.g_aEE=self.c3_base64files,this.g_aEF={},await this.g_aEJ();for(let a=0,b=d.g_aEK.length;a<b;++a){const b=d.g_aEK[a].toLowerCase();this.g_aEF.hasOwnProperty(b)?d.g_aEK[a]={g_aEm:!0,g_C:this.g_aEF[b]}:this.g_aEE.hasOwnProperty(b)&&(d.g_aEK[a]=URL.createObjectURL(this.g_aEE[b]))}}if(d.g_aEL)this.g_apm=d.g_aEL;else{const c=location.origin;this.g_apm=("null"===c?"file:///":c)+location.pathname;const a=this.g_apm.lastIndexOf("/");-1!==a&&(this.g_apm=this.g_apm.substr(0,a+1))}if(d.g_aEM)for(const[a,b]of Object.entries(d.g_aEM))this.g_aEu[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aEr=a.port1,this.g_aEr.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aEN(b)),this.g_arl=new self.g_aEO(this),await this.g_arl.g_akv(),this.g_aEP(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aEQ(),this.g_aEp?await this.g_aER(d,a.port2):await this.g_aES(d,a.port2)}g_aET(b){return this.g_aEu.hasOwnProperty(b)?this.g_aEu[b]:b.endsWith("/workermain.js")&&this.g_aEu.hasOwnProperty("workermain.js")?this.g_aEu["workermain.js"]:"playable-ad"===this.g_apr&&this.g_aEE.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aEE[b.toLowerCase()]):b}async g_aEU(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arL()){const a=await this.g_BT(this.g_aEs+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aEP(){if(this.g_asZ()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aEV(b){return{baseUrl:this.g_apm,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoz(),projectData:b.g_aEW,previewImageBlobs:window.cr_previewImageBlobs||this.g_aEE,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aEC,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aEX,jobScheduler:this.g_arl.g_aEY(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aEs+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aEs+"opus.wasm.wasm",isiOSCordova:this.g_arL(),isiOSWebView:this.g_asZ(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aER(e,a){const b=this.g_aET(e.g_aEZ);this.g_aEv=await this.g_aEU(b,this.g_apm,{name:"Runtime"}),this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none";const c=this.g_ann.transferControlToOffscreen();document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aEv.postMessage(Object.assign(this.g_aEV(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aE_||[],engineScripts:e.g_aEK,projectScripts:window.g_aE$,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_arl.g_aFa()]),this.g_aEx=g.map(b=>new b(this)),this.g_aFb(),self.c3_callFunction=(c,a)=>this.g_aEy.g_Vq(c,a),"preview"===this.g_apr&&(self.goToLastErrorScript=()=>this.g_aDK("runtime","go-to-last-error-script"))}async g_aES(a,b){this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none",document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aEx=g.map(b=>new b(this)),this.g_aFb();const c=a.g_aEK.map(b=>"string"==typeof b?new URL(b,this.g_apm).toString():b);if(Array.isArray(a.g_aE_)&&c.unshift(...a.g_aE_),await Promise.all(c.map(a=>p(a))),a.g_aFc&&0<a.g_aFc.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aFc.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aFd(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aFd(b),100)}}if("preview"===this.g_apr&&"object"!=typeof self.g_aO.g_aDD)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aEV(a),{isInWorker:!1,messagePort:b,canvas:this.g_ann,runOnStartupFunctions:k});this.g_aEw=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aEw,d)}g_aFd(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aEH(){const b=await this.g_arl.g_aFe();return{outputPort:b,transferables:[b]}}g_aDP(){if(this.g_aEp)throw new Error("not available in worker mode");return this.g_aEw}g_aDK(f,a,b,c,d){this.g_aEr.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aED?void 0:d)}g_aDM(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aEr.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aED?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aFf(c);else if("result"===a)this.g_aFg(c);else if("runtime-ready"===a)this.g_aFh();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aFf(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aFi(c,!1,""+d))}null!==c&&(f&&f.then?f.then(b=>this.g_aFi(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aFi(c,!1,""+d)}):this.g_aFi(c,!0,f))}g_aFi(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aEr.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aFg(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aDR(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aFj(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aFb(){for(const b of this.g_aEx)if("runtime"===b.g_aDU())return void(this.g_aEy=b);throw new Error("cannot find runtime DOM handler")}g_aEN(b){this.g_aDK("debugger","message",b)}g_aFh(){for(const b of this.g_aEx)b.g_aDI()}static g_aoz(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aFk(){return await this.g_aDM("runtime","get-remote-preview-status-info")}g_aDV(b){this.g_aEB.push(b),this.g_asi()}g_aDW(c){const a=this.g_aEB.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aEB.splice(a,1),this.g_aEB.length||this.g_asj()}g_asi(){-1===this.g_anW&&this.g_aEB.length&&(this.g_anW=requestAnimationFrame(this.g_aEz))}g_asj(){-1!==this.g_anW&&(cancelAnimationFrame(this.g_anW),this.g_anW=-1)}g_aEA(){this.g_anW=-1;for(const b of this.g_aEB)b();this.g_asi()}g_aFl(b){this.g_aEy.g_aFl(b)}g_aFm(b){this.g_aEy.g_aFm(b)}g_aFn(){this.g_aEy.g_aFn()}g_aFo(b){this.g_aEy.g_aFo(b)}g_Co(b){return!!d[b]}async g_agk(c){const a=await this.g_aDM("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fZ(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_f_(b){return!this.g_fZ(b)}async g_aEG(c){const a=c.filename;switch(c.as){case"text":return await this.g_BU(a);case"buffer":return await this.g_BT(a);default:throw new Error("unsupported type");}}g_aFp(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aFq(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aFr(e){const a=this.g_aFp();return new Promise((b,c)=>a.checkPermission(this.g_aFq(a,e),c=>b(!!c.hasPermission),c))}g_axy(e){const a=this.g_aFp();return new Promise((b,c)=>a.requestPermission(this.g_aFq(a,e),c=>b(!!c.hasPermission),c))}async g_aFs(c){if("cordova"!==this.g_asY())return!0;if(this.g_arL())return!0;for(const d of c){const b=await this.g_aFr(d);if(b)continue;const a=await this.g_axy(d);if(!1===a)return!1}return!0}async g_aFt(...b){if(!1===(await this.g_aFs(b)))throw new Error("Permission not granted")}g_aFu(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BU(b){const a=await this.g_aFu(b);return await q(a)}g_aFv(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aFw(b.filename,b.g_aFx,b.g_aFy)}}g_BT(d){return new Promise((g,b)=>{e.push({filename:d,g_aFx:b=>{f--,this.g_aFv(),g(b)},g_aFy:c=>{f--,this.g_aFv(),b(c)}}),this.g_aFv()})}async g_aFw(c,a,b){try{const b=await this.g_aFu(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aEJ(){const d=[];for(const[a,b]of Object.entries(this.g_aEE))d.push(this.g_aFz(a,b));await Promise.all(d)}async g_aFz(d,a){if("object"==typeof a)this.g_aEE[d]=new Blob([a.str],{type:a.type}),this.g_aEF[d]=a.str;else{let b=await this.g_aFA(a);b||(b=this.g_aFB(a)),this.g_aEE[d]=b}}async g_aFA(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aFB(c){const a=this.g_aFC(c);return this.g_aFD(a.data,a.g_gq)}g_aFC(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gq:e,data:h}}g_aFD(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aEQ(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aED=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aDE{constructor(d){super(d,"runtime"),this.g_aFE=!0,this.g_aFF=-1,this.g_aFG="any",this.g_aFH=!1,this.g_aFI=!1,this.g_aFJ=null,this.g_aFK=null,this.g_aFL=null,d.g_aDR("canvas","update-size",b=>this.g_aFM(b)),d.g_aDR("runtime","invoke-download",b=>this.g_aFN(b)),d.g_aDR("runtime","raster-svg-image",b=>this.g_aFO(b)),d.g_aDR("runtime","get-svg-image-size",b=>this.g_aFP(b)),d.g_aDR("runtime","set-target-orientation",b=>this.g_aFQ(b)),d.g_aDR("runtime","register-sw",()=>this.g_aFR()),d.g_aDR("runtime","post-to-debugger",b=>this.g_aFS(b)),d.g_aDR("runtime","go-to-script",b=>this.g_aFS(b)),d.g_aDR("runtime","before-start-ticking",()=>this.g_aFT()),d.g_aDR("runtime","debug-highlight",b=>this.g_aFU(b)),d.g_aDR("runtime","enable-device-orientation",()=>this.g_aFV()),d.g_aDR("runtime","enable-device-motion",()=>this.g_aFW()),d.g_aDR("runtime","add-stylesheet",b=>this.g_aFX(b)),d.g_aDR("runtime","alert",b=>this.g_aFY(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aEI();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aFZ=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_aol()),d.g_asZ()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aF_=new Set,this.g_aF$=new WeakSet,this.g_aGa=!1}g_aFT(){return"cordova"===this.g_arr.g_asY()?(document.addEventListener("pause",()=>this.g_arn(!0)),document.addEventListener("resume",()=>this.g_arn(!1))):document.addEventListener("visibilitychange",()=>this.g_arn(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aDI(){window.addEventListener("focus",()=>this.g_aGb("window-focus")),window.addEventListener("blur",()=>{this.g_aGb("window-blur",{parentHasFocus:b()}),this.g_aFZ=0}),window.addEventListener("fullscreenchange",()=>this.g_aom()),window.addEventListener("webkitfullscreenchange",()=>this.g_aom()),window.addEventListener("mozfullscreenchange",()=>this.g_aom()),window.addEventListener("fullscreenerror",b=>this.g_aon(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aon(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aon(b)),window.addEventListener("keydown",b=>this.g_aGc("keydown",b)),window.addEventListener("keyup",b=>this.g_aGc("keyup",b)),window.addEventListener("dblclick",b=>this.g_aGd("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aGe("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aGf("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aGf("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aGf("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aGg("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aGg("pointermove",b)),window.addEventListener("touchend",b=>this.g_aGg("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aGg("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aGh("pointerdown",b)),this.g_arr.g_aDO()&&"undefined"!=typeof window.onpointerrawupdate&&self===self.top?(this.g_aFK=new g_mQ(()=>this.g_aGi(),5),this.g_aFK.g_m_(!0),window.addEventListener("pointerrawupdate",b=>this.g_aGj(b))):window.addEventListener("pointermove",b=>this.g_aGh("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aGh("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aGh("pointercancel",b)));const c=()=>this.g_aFn();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aGb(c,a){this.g_aDJ(c,a||null,k)}g_aGk(){return Math.max(window.innerWidth,1)}g_aGl(){return Math.max(window.innerHeight,1)}g_aol(){const c=this.g_aGk(),a=this.g_aGl();this.g_aGb("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_arr.g_asZ()&&(-1!==this.g_aFF&&clearTimeout(this.g_aFF),this.g_aGm(c,a,0))}g_aGn(d,a,b){-1!==this.g_aFF&&clearTimeout(this.g_aFF),this.g_aFF=setTimeout(()=>this.g_aGm(d,a,b),48)}g_aGm(f,a,b){const c=this.g_aGk(),d=this.g_aGl();this.g_aFF=-1,c!=f||d!=a?this.g_aGb("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aGn(c,d,b+1)}g_aFQ(b){this.g_aFG=b.targetOrientation}g_aGo(){const c=this.g_aFG;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aom(){const b=g_aEo.g_aoz();b&&"any"!==this.g_aFG&&this.g_aGo(),this.g_aDJ("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aGk(),innerHeight:this.g_aGl()})}g_aon(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aDJ("fullscreenerror",{isFullscreen:g_aEo.g_aoz(),innerWidth:this.g_aGk(),innerHeight:this.g_aGl()})}g_arn(b){b?this.g_arr.g_asj():this.g_arr.g_asi(),this.g_aDJ("visibilitychange",{hidden:b})}g_aGc(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aDN(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aGe(c,a){this.g_aDJ(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aGd(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aDN(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aGf(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aFZ;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aDN(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aFZ=e.buttons,this.g_aGd(e.type,e,j)}}g_aGh(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aFK&&"pointermove"!==d&&this.g_aFK.g_lC();let b=0;if("mouse"===a.pointerType&&(b=this.g_aFZ),this.g_aDN(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aGd(b,a,j),this.g_aFZ=a.buttons}}g_aGj(b){this.g_aFL=b,this.g_aFK.g_nc()}g_aGi(){this.g_aGh("pointermove",this.g_aFL),this.g_aFL=null}g_aGg(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aDN(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aFV(){this.g_aFH||(this.g_aFH=!0,window.addEventListener("deviceorientation",b=>this.g_axW(b)))}g_aFW(){this.g_aFI||(this.g_aFI=!0,window.addEventListener("devicemotion",b=>this.g_axX(b)))}g_axW(b){this.g_aDJ("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_axX(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aDJ("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aFM(d){const a=this.g_aDT(),b=a.g_aEI();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aEP(),this.g_aFE&&(b.style.display="",this.g_aFE=!1)}g_aFN(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aFO(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aFP(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aFX(b){await t(b.url)}g_aFn(){const c=[...this.g_aF_];if(this.g_aF_.clear(),!this.g_aGa)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aF$.has(d)||this.g_aF_.add(d)})}}g_aFl(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aF$.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aF_.add(c)}a&&a.catch(()=>{this.g_aF$.has(c)||this.g_aF_.add(c)})}g_aFm(b){this.g_aF_.delete(b),this.g_aF$.add(b)}g_aFo(b){this.g_aGa=!!b}g_aFU(d){const a=d.show;if(!a)return void(this.g_aFJ&&(this.g_aFJ.style.display="none"));this.g_aFJ||(this.g_aFJ=document.createElement("div"),this.g_aFJ.id="inspectOutline",document.body.appendChild(this.g_aFJ));const b=this.g_aFJ;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aFR(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aFS(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vq(c,a){return this.g_aDL("js-invoke-function",{name:c,params:a})}g_aFY(b){alert(b.message)}};g_aEo.g_aFj(n)}{const c=document.currentScript.src;self.g_aEO=class{constructor(a){this.g_aGp=a,this.g_apm=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atF=Math.min(navigator.hardwareConcurrency||2,16),this.g_aGq=null,this.g_aGr=[],this.g_atD=null,this.g_aGs=null}async g_akv(){if(this.g_aGt)throw new Error("already initialised");this.g_aGt=!0;const c=this.g_aGp.g_aET("dispatchworker.js");this.g_aGq=await this.g_aGp.g_aEU(c,this.g_apm,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atD=a.port1,this.g_aGq.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aGs=await this.g_aFe()}async g_aFe(){const f=this.g_aGr.length,a=this.g_aGp.g_aET("jobworker.js"),b=await this.g_aGp.g_aEU(a,this.g_apm,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aGq.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aGr.push(b),d.port1}g_aEY(){return{inputPort:this.g_atD,outputPort:this.g_aGs,maxNumWorkers:this.g_atF}}g_aFa(){return[this.g_atD,this.g_aGs]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aEo({g_aEq:a,g_aEZ:"workermain.js",g_aEK:["scripts/c3runtime.js"],g_aEt:"scripts/",g_aE_:[],g_aEC:"html5"})}{const b=class extends g_aDE{constructor(b){super(b,"touch"),this.g_aDQ("request-permission",b=>this.g_aGu(b))}async g_aGu(d){const a=d.type;let b=!0;0===a?b=await this.g_aGv():1===a&&(b=await this.g_aGw()),this.g_aDJ("permission-result",{type:a,result:b})}async g_aGv(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aGw(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aEo.g_aFj(b)}{function e(b){b.stopPropagation()}const a=class extends g_aDX{constructor(b){super(b,"sliderbar")}g_aeL(a,b){const c=document.createElement("input");return c.type="range",c.style.position="absolute",c.style.userSelect="none",c.style.webkitUserSelect="none",c.addEventListener("touchstart",e),c.addEventListener("touchmove",e),c.addEventListener("touchend",e),c.addEventListener("mousedown",e),c.addEventListener("mouseup",e),c.addEventListener("keydown",e),c.addEventListener("keyup",e),c.addEventListener("click",()=>this.g_aEj("click",a)),c.addEventListener("change",()=>this.g_aEi("change",a,{value:parseFloat(c.value)})),c.addEventListener("input",()=>this.g_aEi("input",a,{value:parseFloat(c.value)})),c.id=b.id,this.g_aEk(c,b),c}g_aEk(c,a){c.max=a.max,c.min=a.min,c.step=a.step,c.value=a.value,c.disabled=!a.isEnabled,c.title=a.title}};g_aEo.g_aFj(a)}
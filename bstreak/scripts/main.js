"use strict";window.g_aGU=class{constructor(c,a){this.g_arr=c,this.g_aGV=a,this.g_aGW=!1,this.g_aGX=()=>this.g_KY()}g_aGY(){}g_aGZ(e,a,b,c){this.g_arr.g_aG_(this.g_aGV,e,a,b,c)}g_aG$(e,a,b,c){return this.g_arr.g_aHa(this.g_aGV,e,a,b,c)}g_aHb(d,a,b){this.g_arr.g_aHc()?this.g_aGZ(d,a,b):this.g_arr.g_aHd()._OnMessageFromDOM({type:"event",component:this.g_aGV,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aHe(c,a){this.g_arr.g_aHf(this.g_aGV,c,a)}g_aHg(d){for(const[a,b]of d)this.g_aHe(a,b)}g_aHh(){return this.g_arr}g_aHi(){return this.g_aGV}g_aek(){this.g_aGW||(this.g_arr.g_aHj(this.g_aGX),this.g_aGW=!0)}g_adX(){this.g_aGW&&(this.g_arr.g_aHk(this.g_aGX),this.g_aGW=!1)}g_KY(){}},window.g_mQ=class{constructor(c,a){this.g_ly=c,this.g_mR=a,this.g_mT=-1,this.g_mU=-Infinity,this.g_mV=()=>this.g_mW(),this.g_mX=!1,this.g_mY=!1}g_m_(b){this.g_mY=!!b}g_nc(){if(-1===this.g_mT){const d=Date.now(),a=d-this.g_mU,b=this.g_mR;a>=b&&this.g_mY?(this.g_mU=d,this.g_nd()):this.g_mT=self.setTimeout(this.g_mV,Math.max(b-a,4))}}g_nd(){this.g_mX=!0,this.g_ly(),this.g_mX=!1}g_lC(){this.g_mX||(this.g_ne(),this.g_mU=Date.now())}g_mW(){this.g_mT=-1,this.g_mU=Date.now(),this.g_nd()}g_ne(){-1!==this.g_mT&&(self.clearTimeout(this.g_mT),this.g_mT=-1)}g_ek(){this.g_ne(),this.g_ly=null,this.g_mV=null}},"use strict",window.g_aHl=class extends g_aGU{constructor(c,a){super(c,a),this.g_aHm=new Map,this.g_aHn=!0,this.g_aHe("create",b=>this.g_aHo(b)),this.g_aHe("destroy",b=>this.g_aHp(b)),this.g_aHe("set-visible",b=>this.g_aHq(b)),this.g_aHe("update-position",b=>this.g_aHr(b)),this.g_aHe("update-state",b=>this.g_aHs(b)),this.g_aHe("focus",b=>this.g_aHt(b)),this.g_aHe("set-css-style",b=>this.g_aHu(b))}g_aHv(b){this.g_aHn=!!b}g_aHw(c,e){this.g_aHe(c,b=>{const a=b.elementId,c=this.g_aHm.get(a);return e(c,b)})}g_aHo(d){const a=d.elementId,b=this.g_aeL(a,d);this.g_aHm.set(a,b),d.isVisible||(b.style.display="none"),this.g_aHn&&document.body.appendChild(b)}g_aeL(){throw new Error("required override")}g_aHx(){}g_aHp(d){const a=d.elementId,b=this.g_aHm.get(a);this.g_aHx(b),this.g_aHn&&b.parentElement.removeChild(b),this.g_aHm.delete(a)}g_aHy(d,a,b){b||(b={}),b.elementId=a,this.g_aGZ(d,b)}g_aHz(d,a,b){b||(b={}),b.elementId=a,this.g_aHb(d,b)}g_aHq(c){if(this.g_aHn){const a=this.g_aHm.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aHr(d){if(this.g_aHn){const a=this.g_aHm.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aHs(c){const a=this.g_aHm.get(c.elementId);this.g_aHA(a,c)}g_aHA(){throw new Error("required override")}g_aHt(c){const a=this.g_aHm.get(c.elementId);c.focus?a.focus():a.blur()}g_aHu(c){const a=this.g_aHm.get(c.elementId);a.style[c.prop]=c.val}g_aHB(b){return this.g_aHm.get(b)}},"use strict";{function p(e){if(e.g_aHC){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aHD=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aHE=class c{constructor(c){this.g_aHF=c.g_aHG,this.g_aHH=null,this.g_apm="",this.g_aHI=c.g_aHJ,this.g_aHK={},this.g_aHL=null,this.g_aHM=null,this.g_aHN=[],this.g_aHO=null,this.g_ann=null,this.g_arl=null,this.g_anW=-1,this.g_aHP=()=>this.g_aHQ(),this.g_aHR=[],this.g_apr=c.g_aHS,b(this.g_apr)&&this.g_aHF&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aHF=!1),this.g_aHT=!1,this.g_aHU=null,this.g_aHV=null,("html5"===this.g_apr||"playable-ad"===this.g_apr)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aHf("runtime","cordova-fetch-local-file",b=>this.g_aHW(b)),this.g_aHf("runtime","create-job-worker",b=>this.g_aHX(b)),"cordova"===this.g_apr?document.addEventListener("deviceready",()=>this.g_ac_(c)):this.g_ac_(c)}g_ek(){this.g_asj(),this.g_aHH&&(this.g_aHH.onmessage=null,this.g_aHH=null),this.g_aHL&&(this.g_aHL.terminate(),this.g_aHL=null),this.g_aHM&&(this.g_aHM.g_ek(),this.g_aHM=null),this.g_ann&&(this.g_ann.parentElement.removeChild(this.g_ann),this.g_ann=null)}g_aHY(){return this.g_ann}g_fe(){return this.g_apm}g_aHc(){return this.g_aHF}g_asY(){return this.g_apr}g_arL(){return a&&"cordova"===this.g_apr}g_asZ(){return a&&b(this.g_apr)}async g_ac_(d){if("playable-ad"===this.g_apr){this.g_aHU=self.c3_base64files,this.g_aHV={},await this.g_aHZ();for(let a=0,b=d.g_aH_.length;a<b;++a){const b=d.g_aH_[a].toLowerCase();this.g_aHV.hasOwnProperty(b)?d.g_aH_[a]={g_aHC:!0,g_C:this.g_aHV[b]}:this.g_aHU.hasOwnProperty(b)&&(d.g_aH_[a]=URL.createObjectURL(this.g_aHU[b]))}}if(d.g_aH$)this.g_apm=d.g_aH$;else{const c=location.origin;this.g_apm=("null"===c?"file:///":c)+location.pathname;const a=this.g_apm.lastIndexOf("/");-1!==a&&(this.g_apm=this.g_apm.substr(0,a+1))}if(d.g_aIa)for(const[a,b]of Object.entries(d.g_aIa))this.g_aHK[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aHH=a.port1,this.g_aHH.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aIb(b)),this.g_arl=new self.g_aIc(this),await this.g_arl.g_akv(),this.g_aId(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aIe(),this.g_aHF?await this.g_aIf(d,a.port2):await this.g_aIg(d,a.port2)}g_aIh(b){return this.g_aHK.hasOwnProperty(b)?this.g_aHK[b]:b.endsWith("/workermain.js")&&this.g_aHK.hasOwnProperty("workermain.js")?this.g_aHK["workermain.js"]:"playable-ad"===this.g_apr&&this.g_aHU.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aHU[b.toLowerCase()]):b}async g_aIi(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arL()){const a=await this.g_BT(this.g_aHI+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aId(){if(this.g_asZ()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aIj(b){return{baseUrl:this.g_apm,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoz(),projectData:b.g_aIk,previewImageBlobs:window.cr_previewImageBlobs||this.g_aHU,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aHS,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aIl,jobScheduler:this.g_arl.g_aIm(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aHI+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aHI+"opus.wasm.wasm",isiOSCordova:this.g_arL(),isiOSWebView:this.g_asZ(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aIf(e,a){const b=this.g_aIh(e.g_aIn);this.g_aHL=await this.g_aIi(b,this.g_apm,{name:"Runtime"}),this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none";const c=this.g_ann.transferControlToOffscreen();document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aHL.postMessage(Object.assign(this.g_aIj(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aIo||[],engineScripts:e.g_aH_,projectScripts:window.g_aIp,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_arl.g_aIq()]),this.g_aHN=g.map(b=>new b(this)),this.g_aIr(),self.c3_callFunction=(c,a)=>this.g_aHO.g_Vq(c,a),"preview"===this.g_apr&&(self.goToLastErrorScript=()=>this.g_aG_("runtime","go-to-last-error-script"))}async g_aIg(a,b){this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none",document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aHN=g.map(b=>new b(this)),this.g_aIr();const c=a.g_aH_.map(b=>"string"==typeof b?new URL(b,this.g_apm).toString():b);if(Array.isArray(a.g_aIo)&&c.unshift(...a.g_aIo),await Promise.all(c.map(a=>p(a))),a.g_aIs&&0<a.g_aIs.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aIs.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aIt(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aIt(b),100)}}if("preview"===this.g_apr&&"object"!=typeof self.g_aO.g_aGT)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aIj(a),{isInWorker:!1,messagePort:b,canvas:this.g_ann,runOnStartupFunctions:k});this.g_aHM=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aHM,d)}g_aIt(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aHX(){const b=await this.g_arl.g_aIu();return{outputPort:b,transferables:[b]}}g_aHd(){if(this.g_aHF)throw new Error("not available in worker mode");return this.g_aHM}g_aG_(f,a,b,c,d){this.g_aHH.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aHT?void 0:d)}g_aHa(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aHH.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aHT?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aIv(c);else if("result"===a)this.g_aIw(c);else if("runtime-ready"===a)this.g_aIx();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aIv(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aIy(c,!1,""+d))}null!==c&&(f&&f.then?f.then(b=>this.g_aIy(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aIy(c,!1,""+d)}):this.g_aIy(c,!0,f))}g_aIy(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aHH.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aIw(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aHf(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aIz(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aIr(){for(const b of this.g_aHN)if("runtime"===b.g_aHi())return void(this.g_aHO=b);throw new Error("cannot find runtime DOM handler")}g_aIb(b){this.g_aG_("debugger","message",b)}g_aIx(){for(const b of this.g_aHN)b.g_aGY()}static g_aoz(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aIA(){return await this.g_aHa("runtime","get-remote-preview-status-info")}g_aHj(b){this.g_aHR.push(b),this.g_asi()}g_aHk(c){const a=this.g_aHR.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aHR.splice(a,1),this.g_aHR.length||this.g_asj()}g_asi(){-1===this.g_anW&&this.g_aHR.length&&(this.g_anW=requestAnimationFrame(this.g_aHP))}g_asj(){-1!==this.g_anW&&(cancelAnimationFrame(this.g_anW),this.g_anW=-1)}g_aHQ(){this.g_anW=-1;for(const b of this.g_aHR)b();this.g_asi()}g_aIB(b){this.g_aHO.g_aIB(b)}g_aIC(b){this.g_aHO.g_aIC(b)}g_aID(){this.g_aHO.g_aID()}g_aIE(b){this.g_aHO.g_aIE(b)}g_Co(b){return!!d[b]}async g_agk(c){const a=await this.g_aHa("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fZ(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_f_(b){return!this.g_fZ(b)}async g_aHW(c){const a=c.filename;switch(c.as){case"text":return await this.g_BU(a);case"buffer":return await this.g_BT(a);default:throw new Error("unsupported type");}}g_aIF(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aIG(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aIH(e){const a=this.g_aIF();return new Promise((b,c)=>a.checkPermission(this.g_aIG(a,e),c=>b(!!c.hasPermission),c))}g_aAj(e){const a=this.g_aIF();return new Promise((b,c)=>a.requestPermission(this.g_aIG(a,e),c=>b(!!c.hasPermission),c))}async g_aII(c){if("cordova"!==this.g_asY())return!0;if(this.g_arL())return!0;for(const d of c){const b=await this.g_aIH(d);if(b)continue;const a=await this.g_aAj(d);if(!1===a)return!1}return!0}async g_aIJ(...b){if(!1===(await this.g_aII(b)))throw new Error("Permission not granted")}g_aIK(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BU(b){const a=await this.g_aIK(b);return await q(a)}g_aIL(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aIM(b.filename,b.g_aIN,b.g_aIO)}}g_BT(d){return new Promise((g,b)=>{e.push({filename:d,g_aIN:b=>{f--,this.g_aIL(),g(b)},g_aIO:c=>{f--,this.g_aIL(),b(c)}}),this.g_aIL()})}async g_aIM(c,a,b){try{const b=await this.g_aIK(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aHZ(){const d=[];for(const[a,b]of Object.entries(this.g_aHU))d.push(this.g_aIP(a,b));await Promise.all(d)}async g_aIP(d,a){if("object"==typeof a)this.g_aHU[d]=new Blob([a.str],{type:a.type}),this.g_aHV[d]=a.str;else{let b=await this.g_aIQ(a);b||(b=this.g_aIR(a)),this.g_aHU[d]=b}}async g_aIQ(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aIR(c){const a=this.g_aIS(c);return this.g_aIT(a.data,a.g_gq)}g_aIS(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gq:e,data:h}}g_aIT(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aIe(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aHT=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aGU{constructor(d){super(d,"runtime"),this.g_aIU=!0,this.g_aIV=-1,this.g_aIW="any",this.g_aIX=!1,this.g_aIY=!1,this.g_aIZ=null,this.g_aI_=null,this.g_aI$=null,d.g_aHf("canvas","update-size",b=>this.g_aJa(b)),d.g_aHf("runtime","invoke-download",b=>this.g_aJb(b)),d.g_aHf("runtime","raster-svg-image",b=>this.g_aJc(b)),d.g_aHf("runtime","get-svg-image-size",b=>this.g_aJd(b)),d.g_aHf("runtime","set-target-orientation",b=>this.g_aJe(b)),d.g_aHf("runtime","register-sw",()=>this.g_aJf()),d.g_aHf("runtime","post-to-debugger",b=>this.g_aJg(b)),d.g_aHf("runtime","go-to-script",b=>this.g_aJg(b)),d.g_aHf("runtime","before-start-ticking",()=>this.g_aJh()),d.g_aHf("runtime","debug-highlight",b=>this.g_aJi(b)),d.g_aHf("runtime","enable-device-orientation",()=>this.g_aJj()),d.g_aHf("runtime","enable-device-motion",()=>this.g_aJk()),d.g_aHf("runtime","add-stylesheet",b=>this.g_aJl(b)),d.g_aHf("runtime","alert",b=>this.g_aJm(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aHY();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aJn=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_aol()),d.g_asZ()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aJo=new Set,this.g_aJp=new WeakSet,this.g_aJq=!1}g_aJh(){return"cordova"===this.g_arr.g_asY()?(document.addEventListener("pause",()=>this.g_arn(!0)),document.addEventListener("resume",()=>this.g_arn(!1))):document.addEventListener("visibilitychange",()=>this.g_arn(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aGY(){window.addEventListener("focus",()=>this.g_aJr("window-focus")),window.addEventListener("blur",()=>{this.g_aJr("window-blur",{parentHasFocus:b()}),this.g_aJn=0}),window.addEventListener("fullscreenchange",()=>this.g_aom()),window.addEventListener("webkitfullscreenchange",()=>this.g_aom()),window.addEventListener("mozfullscreenchange",()=>this.g_aom()),window.addEventListener("fullscreenerror",b=>this.g_aon(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aon(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aon(b)),window.addEventListener("keydown",b=>this.g_aJs("keydown",b)),window.addEventListener("keyup",b=>this.g_aJs("keyup",b)),window.addEventListener("dblclick",b=>this.g_aJt("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aJu("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aJv("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aJv("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aJv("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aJw("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aJw("pointermove",b)),window.addEventListener("touchend",b=>this.g_aJw("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aJw("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aJx("pointerdown",b)),this.g_arr.g_aHc()&&"undefined"!=typeof window.onpointerrawupdate&&self===self.top?(this.g_aI_=new g_mQ(()=>this.g_aJy(),5),this.g_aI_.g_m_(!0),window.addEventListener("pointerrawupdate",b=>this.g_aJz(b))):window.addEventListener("pointermove",b=>this.g_aJx("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aJx("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aJx("pointercancel",b)));const c=()=>this.g_aID();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aJr(c,a){this.g_aGZ(c,a||null,k)}g_aJA(){return Math.max(window.innerWidth,1)}g_aJB(){return Math.max(window.innerHeight,1)}g_aol(){const c=this.g_aJA(),a=this.g_aJB();this.g_aJr("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_arr.g_asZ()&&(-1!==this.g_aIV&&clearTimeout(this.g_aIV),this.g_aJC(c,a,0))}g_aJD(d,a,b){-1!==this.g_aIV&&clearTimeout(this.g_aIV),this.g_aIV=setTimeout(()=>this.g_aJC(d,a,b),48)}g_aJC(f,a,b){const c=this.g_aJA(),d=this.g_aJB();this.g_aIV=-1,c!=f||d!=a?this.g_aJr("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aJD(c,d,b+1)}g_aJe(b){this.g_aIW=b.targetOrientation}g_aJE(){const c=this.g_aIW;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aom(){const b=g_aHE.g_aoz();b&&"any"!==this.g_aIW&&this.g_aJE(),this.g_aGZ("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aJA(),innerHeight:this.g_aJB()})}g_aon(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aGZ("fullscreenerror",{isFullscreen:g_aHE.g_aoz(),innerWidth:this.g_aJA(),innerHeight:this.g_aJB()})}g_arn(b){b?this.g_arr.g_asj():this.g_arr.g_asi(),this.g_aGZ("visibilitychange",{hidden:b})}g_aJs(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aHb(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aJu(c,a){this.g_aGZ(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aJt(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aHb(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aJv(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aJn;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aHb(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aJn=e.buttons,this.g_aJt(e.type,e,j)}}g_aJx(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aI_&&"pointermove"!==d&&this.g_aI_.g_lC();let b=0;if("mouse"===a.pointerType&&(b=this.g_aJn),this.g_aHb(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aJt(b,a,j),this.g_aJn=a.buttons}}g_aJz(b){this.g_aI$=b,this.g_aI_.g_nc()}g_aJy(){this.g_aJx("pointermove",this.g_aI$),this.g_aI$=null}g_aJw(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aHb(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aJj(){this.g_aIX||(this.g_aIX=!0,window.addEventListener("deviceorientation",b=>this.g_aAH(b)))}g_aJk(){this.g_aIY||(this.g_aIY=!0,window.addEventListener("devicemotion",b=>this.g_aAI(b)))}g_aAH(b){this.g_aGZ("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_aAI(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aGZ("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aJa(d){const a=this.g_aHh(),b=a.g_aHY();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aId(),this.g_aIU&&(b.style.display="",this.g_aIU=!1)}g_aJb(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aJc(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aJd(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aJl(b){await t(b.url)}g_aID(){const c=[...this.g_aJo];if(this.g_aJo.clear(),!this.g_aJq)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aJp.has(d)||this.g_aJo.add(d)})}}g_aIB(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aJp.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aJo.add(c)}a&&a.catch(()=>{this.g_aJp.has(c)||this.g_aJo.add(c)})}g_aIC(b){this.g_aJo.delete(b),this.g_aJp.add(b)}g_aIE(b){this.g_aJq=!!b}g_aJi(d){const a=d.show;if(!a)return void(this.g_aIZ&&(this.g_aIZ.style.display="none"));this.g_aIZ||(this.g_aIZ=document.createElement("div"),this.g_aIZ.id="inspectOutline",document.body.appendChild(this.g_aIZ));const b=this.g_aIZ;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aJf(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aJg(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vq(c,a){return this.g_aG$("js-invoke-function",{name:c,params:a})}g_aJm(b){alert(b.message)}};g_aHE.g_aIz(n)}{const c=document.currentScript.src;self.g_aIc=class{constructor(a){this.g_aJF=a,this.g_apm=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atF=Math.min(navigator.hardwareConcurrency||2,16),this.g_aJG=null,this.g_aJH=[],this.g_atD=null,this.g_aJI=null}async g_akv(){if(this.g_aJJ)throw new Error("already initialised");this.g_aJJ=!0;const c=this.g_aJF.g_aIh("dispatchworker.js");this.g_aJG=await this.g_aJF.g_aIi(c,this.g_apm,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atD=a.port1,this.g_aJG.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aJI=await this.g_aIu()}async g_aIu(){const f=this.g_aJH.length,a=this.g_aJF.g_aIh("jobworker.js"),b=await this.g_aJF.g_aIi(a,this.g_apm,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aJG.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aJH.push(b),d.port1}g_aIm(){return{inputPort:this.g_atD,outputPort:this.g_aJI,maxNumWorkers:this.g_atF}}g_aIq(){return[this.g_atD,this.g_aJI]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aHE({g_aHG:a,g_aIn:"workermain.js",g_aH_:["scripts/c3runtime.js"],g_aHJ:"scripts/",g_aIo:[],g_aHS:"html5"})}{const b=class extends g_aGU{constructor(b){super(b,"touch"),this.g_aHe("request-permission",b=>this.g_aJK(b))}async g_aJK(d){const a=d.type;let b=!0;0===a?b=await this.g_aJL():1===a&&(b=await this.g_aJM()),this.g_aGZ("permission-result",{type:a,result:b})}async g_aJL(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aJM(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aHE.g_aIz(b)}{const b=class extends g_aGU{constructor(b){super(b,"mouse"),this.g_aHe("cursor",b=>this.g_aJN(b))}g_aJN(b){document.documentElement.style.cursor=b}};g_aHE.g_aIz(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aHl{constructor(b){super(b,"text-input"),this.g_aHw("scroll-to-bottom",b=>this.g_aJO(b))}g_aeL(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aHz("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aHz("dblclick",b)}),d.addEventListener("input",()=>this.g_aHy("change",b,{text:d.value})),d.id=c.id,this.g_aHA(d,c),d}g_aHA(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck}g_aJO(b){b.scrollTop=b.scrollHeight}};g_aHE.g_aIz(b)}
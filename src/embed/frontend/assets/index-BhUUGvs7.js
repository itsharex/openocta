(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const Kn=globalThis,Ia=Kn.ShadowRoot&&(Kn.ShadyCSS===void 0||Kn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_a=Symbol(),jo=new WeakMap;let xl=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==_a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ia&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=jo.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&jo.set(n,t))}return t}toString(){return this.cssText}};const yc=e=>new xl(typeof e=="string"?e:e+"",void 0,_a),xc=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,a,i)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new xl(n,e,_a)},$c=(e,t)=>{if(Ia)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),a=Kn.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=n.cssText,e.appendChild(s)}},qo=Ia?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return yc(n)})(e):e;const{is:wc,defineProperty:kc,getOwnPropertyDescriptor:Sc,getOwnPropertyNames:Ac,getOwnPropertySymbols:Cc,getPrototypeOf:Tc}=Object,rs=globalThis,Wo=rs.trustedTypes,Mc=Wo?Wo.emptyScript:"",Ec=rs.reactiveElementPolyfillSupport,dn=(e,t)=>e,Vn={toAttribute(e,t){switch(t){case Boolean:e=e?Mc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ra=(e,t)=>!wc(e,t),Vo={attribute:!0,type:String,converter:Vn,reflect:!1,useDefault:!1,hasChanged:Ra};Symbol.metadata??=Symbol("metadata"),rs.litPropertyMetadata??=new WeakMap;let Ft=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Vo){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),a=this.getPropertyDescriptor(t,s,n);a!==void 0&&kc(this.prototype,t,a)}}static getPropertyDescriptor(t,n,s){const{get:a,set:i}=Sc(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get:a,set(l){const d=a?.call(this);i?.call(this,l),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vo}static _$Ei(){if(this.hasOwnProperty(dn("elementProperties")))return;const t=Tc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(dn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dn("properties"))){const n=this.properties,s=[...Ac(n),...Cc(n)];for(const a of s)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,a]of n)this.elementProperties.set(s,a)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const a=this._$Eu(n,s);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const a of s)n.unshift(qo(a))}else t!==void 0&&n.push(qo(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,s);if(a!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:Vn).toAttribute(n,s.type);this._$Em=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(t,n){const s=this.constructor,a=s._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const i=s.getPropertyOptions(a),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Vn;this._$Em=a;const d=l.fromAttribute(n,i.type);this[a]=d??this._$Ej?.get(a)??d,this._$Em=null}}requestUpdate(t,n,s,a=!1,i){if(t!==void 0){const l=this.constructor;if(a===!1&&(i=this[t]),s??=l.getPropertyOptions(t),!((s.hasChanged??Ra)(i,n)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:a,wrapped:i},l){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??n??this[t]),i!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,i]of s){const{wrapped:l}=i,d=this[a];l!==!0||this._$AL.has(a)||d===void 0||this.C(a,void 0,i,d)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Ft.elementStyles=[],Ft.shadowRootOptions={mode:"open"},Ft[dn("elementProperties")]=new Map,Ft[dn("finalized")]=new Map,Ec?.({ReactiveElement:Ft}),(rs.reactiveElementVersions??=[]).push("2.1.2");const Na=globalThis,Go=e=>e,Gn=Na.trustedTypes,Qo=Gn?Gn.createPolicy("lit-html",{createHTML:e=>e}):void 0,$l="$lit$",Ze=`lit$${Math.random().toFixed(9).slice(2)}$`,wl="?"+Ze,Pc=`<${wl}>`,yt=document,hn=()=>yt.createComment(""),vn=e=>e===null||typeof e!="object"&&typeof e!="function",Fa=Array.isArray,Dc=e=>Fa(e)||typeof e?.[Symbol.iterator]=="function",Rs=`[ 	
\f\r]`,Jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jo=/-->/g,Yo=/>/g,lt=RegExp(`>|${Rs}(?:([^\\s"'>=/]+)(${Rs}*=${Rs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zo=/'/g,Xo=/"/g,kl=/^(?:script|style|textarea|title)$/i,Sl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),c=Sl(1),In=Sl(2),et=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ei=new WeakMap,vt=yt.createTreeWalker(yt,129);function Al(e,t){if(!Fa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qo!==void 0?Qo.createHTML(t):t}const Lc=(e,t)=>{const n=e.length-1,s=[];let a,i=t===2?"<svg>":t===3?"<math>":"",l=Jt;for(let d=0;d<n;d++){const u=e[d];let p,m,f=-1,h=0;for(;h<u.length&&(l.lastIndex=h,m=l.exec(u),m!==null);)h=l.lastIndex,l===Jt?m[1]==="!--"?l=Jo:m[1]!==void 0?l=Yo:m[2]!==void 0?(kl.test(m[2])&&(a=RegExp("</"+m[2],"g")),l=lt):m[3]!==void 0&&(l=lt):l===lt?m[0]===">"?(l=a??Jt,f=-1):m[1]===void 0?f=-2:(f=l.lastIndex-m[2].length,p=m[1],l=m[3]===void 0?lt:m[3]==='"'?Xo:Zo):l===Xo||l===Zo?l=lt:l===Jo||l===Yo?l=Jt:(l=lt,a=void 0);const r=l===lt&&e[d+1].startsWith("/>")?" ":"";i+=l===Jt?u+Pc:f>=0?(s.push(p),u.slice(0,f)+$l+u.slice(f)+Ze+r):u+Ze+(f===-2?d:r)}return[Al(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let la=class Cl{constructor({strings:t,_$litType$:n},s){let a;this.parts=[];let i=0,l=0;const d=t.length-1,u=this.parts,[p,m]=Lc(t,n);if(this.el=Cl.createElement(p,s),vt.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(a=vt.nextNode())!==null&&u.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const f of a.getAttributeNames())if(f.endsWith($l)){const h=m[l++],r=a.getAttribute(f).split(Ze),g=/([.?@])?(.*)/.exec(h);u.push({type:1,index:i,name:g[2],strings:r,ctor:g[1]==="."?_c:g[1]==="?"?Rc:g[1]==="@"?Nc:ds}),a.removeAttribute(f)}else f.startsWith(Ze)&&(u.push({type:6,index:i}),a.removeAttribute(f));if(kl.test(a.tagName)){const f=a.textContent.split(Ze),h=f.length-1;if(h>0){a.textContent=Gn?Gn.emptyScript:"";for(let r=0;r<h;r++)a.append(f[r],hn()),vt.nextNode(),u.push({type:2,index:++i});a.append(f[h],hn())}}}else if(a.nodeType===8)if(a.data===wl)u.push({type:2,index:i});else{let f=-1;for(;(f=a.data.indexOf(Ze,f+1))!==-1;)u.push({type:7,index:i}),f+=Ze.length-1}i++}}static createElement(t,n){const s=yt.createElement("template");return s.innerHTML=t,s}};function Ht(e,t,n=e,s){if(t===et)return t;let a=s!==void 0?n._$Co?.[s]:n._$Cl;const i=vn(t)?void 0:t._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(e),a._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=a:n._$Cl=a),a!==void 0&&(t=Ht(e,a._$AS(e,t.values),a,s)),t}class Ic{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,a=(t?.creationScope??yt).importNode(n,!0);vt.currentNode=a;let i=vt.nextNode(),l=0,d=0,u=s[0];for(;u!==void 0;){if(l===u.index){let p;u.type===2?p=new cs(i,i.nextSibling,this,t):u.type===1?p=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(p=new Fc(i,this,t)),this._$AV.push(p),u=s[++d]}l!==u?.index&&(i=vt.nextNode(),l++)}return vt.currentNode=yt,a}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let cs=class Tl{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ht(this,t,n),vn(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&vn(this._$AH)?this._$AA.nextSibling.data=t:this.T(yt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=la.createElement(Al(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(n);else{const i=new Ic(a,this),l=i.u(this.options);i.p(n),this.T(l),this._$AH=i}}_$AC(t){let n=ei.get(t.strings);return n===void 0&&ei.set(t.strings,n=new la(t)),n}k(t){Fa(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,a=0;for(const i of t)a===n.length?n.push(s=new Tl(this.O(hn()),this.O(hn()),this,this.options)):s=n[a],s._$AI(i),a++;a<n.length&&(this._$AR(s&&s._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=Go(t).nextSibling;Go(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class ds{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,a,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,n=this,s,a){const i=this.strings;let l=!1;if(i===void 0)t=Ht(this,t,n,0),l=!vn(t)||t!==this._$AH&&t!==et,l&&(this._$AH=t);else{const d=t;let u,p;for(t=i[0],u=0;u<i.length-1;u++)p=Ht(this,d[s+u],n,u),p===et&&(p=this._$AH[u]),l||=!vn(p)||p!==this._$AH[u],p===v?t=v:t!==v&&(t+=(p??"")+i[u+1]),this._$AH[u]=p}l&&!a&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let _c=class extends ds{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},Rc=class extends ds{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},Nc=class extends ds{constructor(t,n,s,a,i){super(t,n,s,a,i),this.type=5}_$AI(t,n=this){if((t=Ht(this,t,n,0)??v)===et)return;const s=this._$AH,a=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==v&&(s===v||a);a&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Fc=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}};const Uc={I:cs},Oc=Na.litHtmlPolyfillSupport;Oc?.(la,cs),(Na.litHtmlVersions??=[]).push("3.3.2");const Bc=(e,t,n)=>{const s=n?.renderBefore??t;let a=s._$litPart$;if(a===void 0){const i=n?.renderBefore??null;s._$litPart$=a=new cs(t.insertBefore(hn(),i),i,void 0,n??{})}return a._$AI(e),a};const Ua=globalThis;let Ot=class extends Ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bc(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return et}};Ot._$litElement$=!0,Ot.finalized=!0,Ua.litElementHydrateSupport?.({LitElement:Ot});const Hc=Ua.litElementPolyfillSupport;Hc?.({LitElement:Ot});(Ua.litElementVersions??=[]).push("4.2.2");const Ml=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Kc={attribute:!0,type:String,converter:Vn,reflect:!1,hasChanged:Ra},zc=(e=Kc,t,n)=>{const{kind:s,metadata:a}=n;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),s==="accessor"){const{name:l}=n;return{set(d){const u=t.get.call(this);t.set.call(this,d),this.requestUpdate(l,u,e,!0,d)},init(d){return d!==void 0&&this.C(l,void 0,e,d),d}}}if(s==="setter"){const{name:l}=n;return function(d){const u=this[l];t.call(this,d),this.requestUpdate(l,u,e,!0,d)}}throw Error("Unsupported decorator location: "+s)};function us(e){return(t,n)=>typeof n=="object"?zc(e,t,n):((s,a,i)=>{const l=a.hasOwnProperty(i);return a.constructor.createProperty(i,s),l?Object.getOwnPropertyDescriptor(a,i):void 0})(e,t,n)}function $(e){return us({...e,state:!0,attribute:!1})}async function ke(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function jc(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function qc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Wc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function ne(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Kt(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function gs(e,t,n){if(t.length===0)return;let s=e;for(let i=0;i<t.length-1;i+=1){const l=t[i],d=t[i+1];if(typeof l=="number"){if(!Array.isArray(s))return;s[l]==null&&(s[l]=typeof d=="number"?[]:{}),s=s[l]}else{if(typeof s!="object"||s==null)return;const u=s;u[l]==null&&(u[l]=typeof d=="number"?[]:{}),s=u[l]}}const a=t[t.length-1];if(typeof a=="number"){Array.isArray(s)&&(s[a]=n);return}typeof s=="object"&&s!=null&&(s[a]=n)}function El(e,t){if(t.length===0)return;let n=e;for(let a=0;a<t.length-1;a+=1){const i=t[a];if(typeof i=="number"){if(!Array.isArray(n))return;n=n[i]}else{if(typeof n!="object"||n==null)return;n=n[i]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function J(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Gc(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function Pl(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Vc(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Vc(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Gc(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Kt(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Kt(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=ne(t.config??{}),e.configFormOriginal=ne(t.config??{}),e.configRawOriginal=n)}async function Ie(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const n=JSON.stringify(t);let s=e.configSnapshot?.hash;if(s||(await J(e),s=e.configSnapshot?.hash),!s){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.patch",{raw:n,baseHash:s}),e.configFormDirty=!1,await J(e)}catch(n){e.lastError=String(n)}finally{e.configSaving=!1}}}async function ln(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Kt(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await J(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await J(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Qc(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Kt(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await J(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await J(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Jc(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function ce(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});gs(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Kt(s))}function qe(e,t){const n=ne(e.configForm??e.configSnapshot?.config??{});El(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Kt(n))}function Oa(){return typeof document>"u"?"en":(document.documentElement?.lang?.toLowerCase()??"").startsWith("zh")?"zh":"en"}const Yc={tabGroupChat:"Chat",tabGroupControl:"Control",tabGroupAgent:"Agent",tabGroupSettings:"Settings",subtitleAgents:"Manage agent workspaces, tools, and identities.",subtitleOverview:"Gateway status, entry points, and a fast health read.",subtitleChannels:"Manage channels and settings.",subtitleInstances:"Presence beacons from connected clients and nodes.",subtitleSessions:"Inspect active sessions and adjust per-session defaults.",subtitleUsage:"",subtitleCron:"Schedule wakeups and recurring agent runs.",subtitleSkills:"Manage skill availability and API key injection.",subtitleMcp:"Configure MCP servers and tools.",subtitleNodes:"Paired devices, capabilities, and command exposure.",subtitleChat:"Direct gateway chat session for quick interventions.",subtitleDigitalEmployee:"Start templated conversations with domain-specific digital employees.",subtitleAgentSwarm:"Multi-agent swarm collaboration for ops and SRE.",subtitleConfig:"Edit ~/.openclaw/openclaw.json safely.",subtitleEnvVars:"Key-value env vars saved to config.env.vars in ~/.openocta/openocta.json.",subtitleModels:"Configure model providers and API keys.",subtitleDebug:"Gateway snapshots, events, and manual RPC calls.",subtitleLogs:"Live tail of the gateway file logs.",subtitleLlmTrace:"View LLM trace details for sessions.",subtitleSandbox:"Filesystem, network, commands, and security hooks.",subtitleApprovals:"Command approval queue; approve or deny by session.",navTitleAgents:"Agents",navTitleOverview:"Overview",navTitleChannels:"Channels",navTitleInstances:"Instances",navTitleSessions:"Sessions",navTitleUsage:"Usage",navTitleCron:"Cron Jobs",navTitleSkills:"Skills",navTitleMcp:"MCP",navTitleNodes:"Nodes",navTitleChat:"Chat",navTitleDigitalEmployee:"Digital Employee",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"In Development",navTitleConfig:"Config",navTitleEnvVars:"Env Vars",navTitleModels:"Models",navTitleDebug:"Debug",navTitleLogs:"Logs",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"Sandbox",navTitleApprovals:"Approvals",navTitleControl:"Control",overviewGatewayAccess:"Gateway Access",overviewGatewayAccessSub:"Where the dashboard connects and how it authenticates.",overviewWebSocketUrl:"WebSocket URL",overviewGatewayToken:"Gateway Token",overviewPassword:"Password (not stored)",overviewDefaultSessionKey:"Default Session Key",overviewConnect:"Connect",overviewRefresh:"Refresh",overviewConnectHint:"Click Connect to apply connection changes.",overviewSnapshot:"Snapshot",overviewSnapshotSub:"Latest gateway handshake information.",overviewStatus:"Status",overviewConnected:"Connected",overviewDisconnected:"Disconnected",overviewUptime:"Uptime",overviewTickInterval:"Tick Interval",overviewLastChannelsRefresh:"Last Channels Refresh",overviewChannelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",overviewInstances:"Instances",overviewInstancesSub:"Presence beacons in the last 5 minutes.",overviewSessions:"Sessions",overviewSessionsSub:"Recent session keys tracked by the gateway.",overviewCron:"Cron",overviewCronNext:"Next wake",overviewCronEnabled:"Enabled",overviewCronDisabled:"Disabled",overviewNotes:"Notes",overviewNotesSub:"Quick reminders for remote control setups.",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",overviewNoteSessionHygiene:"Session hygiene",overviewNoteSessionHygieneSub:"Use /new or sessions.patch to reset context.",overviewNoteCron:"Cron reminders",overviewNoteCronSub:"Use isolated sessions for recurring runs.",commonLoading:"Loading…",commonRefresh:"Refresh",commonRefreshing:"Refreshing…",commonSaving:"Saving…",commonDelete:"Delete",commonFilter:"Filter",commonOptional:"(optional)",commonInherit:"inherit",commonOffExplicit:"off (explicit)",commonNA:"n/a",commonYes:"Yes",commonNo:"No",channelsConfigure:"Configure",mcpAddServer:"Add MCP Server",mcpServerName:"Server name",mcpNoServers:"No MCP servers configured.",mcpEnabled:"Enabled",mcpDisabled:"Disabled",mcpFormMode:"Form",mcpRawMode:"Raw JSON",mcpCommand:"Command",mcpArgs:"Args",mcpUrl:"URL",mcpService:"Service",mcpServiceUrl:"Service URL",mcpToolPrefix:"Tool Prefix",mcpRawJson:"Raw JSON",mcpDeleteConfirm:"Delete this MCP server?",mcpConnectionTypeStdio:"Command (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"Service",mcpEnv:"Environment variables",mcpEnvPlaceholder:"KEY=value or $ENV_VAR, one per line",mcpViewList:"List view",mcpViewCard:"Card view",mcpTableName:"Name",mcpTableType:"Type",mcpTableStatus:"Status",mcpTableActions:"Actions",llmTraceSearch:"Search",llmTraceSearchPlaceholder:"Filter by session key…",llmTraceEnabled:"Enabled",llmTraceDisabled:"Disabled",llmTraceActionEnable:"Enable",llmTraceActionDisable:"Disable",llmTraceToggleTooltip:"When enabled, new sessions will record model call Trace details (may impact performance). When disabled, new Trace details will not be recorded.",llmTraceModeActive:"Active",llmTraceModeAll:"All",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"Updated",llmTraceFile:"File",llmTraceFileSize:"Size",llmTraceView:"View",llmTraceNoEntries:"No trace entries.",sandboxEnabled:"Enabled",sandboxDisabled:"Disabled",sandboxActionEnable:"Enable",sandboxActionDisable:"Disable",sandboxAllowedPaths:"Allowed paths",sandboxNetworkAllow:"Network allowlist",sandboxHooks:"Security hooks",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"Request validation: session abuse (DoS), long prompts, malicious IPs",sandboxHookDescBeforeModel:"Prompt safety: prompt injection, sensitive data leakage, control chars",sandboxHookDescAfterModel:"Output review: dangerous commands, secret leakage, malicious URLs",sandboxHookDescBeforeTool:"Permission check: tool permission, param validation, path validation",sandboxHookDescAfterTool:"Result review: secret leakage, error sanitization, output truncation",sandboxHookDescAfterAgent:"Audit logging, compliance checks",sandboxValidator:"Command validator",sandboxSecretPatterns:"Secret leakage patterns (regex)",sandboxSecretPatternsHint:"One regex per line. Built-in patterns (API keys, tokens, etc.) are also applied.",sandboxBanCommands:"Ban commands",sandboxBanArguments:"Ban arguments",sandboxBanFragments:"Ban fragments",sandboxSectionConfig:"Sandbox config",sandboxSectionApprovals:"Approval queue",approvalsList:"Approval queue",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"Command",approvalsTimeout:"Timeout",approvalsTTL:"TTL",approvalsStatus:"Status",approvalsApprove:"Approve",approvalsDeny:"Deny",approvalsExpired:"Expired",approvalsPending:"Pending",approvalsNoEntries:"No approval requests.",approvalsViewSession:"View session",modelsViewList:"List view",modelsViewCard:"Card view",modelsTableName:"Name",modelsTableModel:"Default Model",modelsTableBaseUrl:"Base URL",modelsTableActions:"Actions",modelsAddProvider:"Add Provider",modelsAddCustomProvider:"Add Custom Provider",modelsProviderId:"Provider ID",modelsProviderIdPlaceholder:"e.g. openai, google, anthropic",modelsProviderIdHint:"Lowercase letters, digits, hyphens, underscores. Cannot be changed later.",modelsDisplayName:"Display Name",modelsDisplayNamePlaceholder:"e.g. OpenAI, Google Gemini",modelsDefaultBaseUrl:"Default Base URL",modelsDefaultBaseUrlPlaceholder:"e.g. https://api.openai.com/v1",modelsApiKeyPrefix:"API Key Prefix (optional)",modelsApiKeyPrefixPlaceholder:"e.g. sk-",modelsApiType:"API Type",modelsApiTypeTooltip:"OpenAI: Compatible with OpenAI Chat Completions API. Anthropic: Compatible with Anthropic Messages API.",modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"Environment Variables",modelsAddModel:"Add Model",modelsModelId:"Model ID",modelsModelName:"Model Name",modelsModelManagement:"Model Management",modelsNoModels:"No models yet. Click Add Model to add one.",modelsEnvVarConflict:"Environment variable conflict",modelsNoProviders:"No model providers configured.",modelsModels:"models",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"Use",modelsCancelUse:"Cancel use",modelsSelectModelToUse:"Select model to use",modelsCurrentDefault:"Current default",channelsHealth:"Channel health",channelsHealthSub:"Channel status snapshots from the gateway.",channelsNoSnapshot:"No snapshot yet.",channelsSchemaUnavailable:"Schema unavailable. Use Raw.",channelsConfigSchemaUnavailable:"Channel config schema unavailable.",channelsConfigSaveConfirm:"Saving channel config will interrupt and recreate long-lived connections. Continue?",channelsLoadingConfigSchema:"Loading config schema…",commonSave:"Save",commonCreate:"Create",commonReload:"Reload",commonCancel:"Cancel",channelConfigured:"Configured",channelRunning:"Running",channelLastStart:"Last start",channelLastProbe:"Last probe",channelProbe:"Probe",channelProbeOk:"ok",channelProbeFailed:"failed",channelLinked:"Linked",channelConnected:"Connected",channelLastConnect:"Last connect",channelLastMessage:"Last message",channelAuthAge:"Auth age",channelBaseUrl:"Base URL",channelCredential:"Credential",channelAudience:"Audience",channelMode:"Mode",channelPublicKey:"Public Key",channelLastInbound:"Last inbound",channelActive:"Active",channelGenericSub:"Channel status and configuration.",channelAccounts:"Accounts",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"Link WhatsApp Web and monitor connection health.",channelTelegram:"Telegram",channelTelegramSub:"Bot status and channel configuration.",channelDiscord:"Discord",channelDiscordSub:"Bot status and channel configuration.",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API webhook status and channel configuration.",channelIMessage:"iMessage",channelIMessageSub:"macOS bridge status and channel configuration.",channelSignal:"Signal",channelSignalSub:"signal-cli status and channel configuration.",channelSlack:"Slack",channelSlackSub:"Socket mode status and channel configuration.",channelNostr:"Nostr",channelNostrSub:"Decentralized DMs via Nostr relays (NIP-04).",channelWhatsAppWorking:"Working…",channelShowQr:"Show QR",channelRelink:"Relink",channelWaitForScan:"Wait for scan",channelLogout:"Logout",nostrEditProfile:"Edit Profile",nostrAccount:"Account",nostrUsername:"Username",nostrDisplayName:"Display Name",nostrBio:"Bio",nostrAvatarUrl:"Avatar URL",nostrBannerUrl:"Banner URL",nostrWebsite:"Website",nostrNip05:"NIP-05 Identifier",nostrLud16:"Lightning Address",nostrSavePublish:"Save & Publish",nostrImportRelays:"Import from Relays",nostrHideAdvanced:"Hide Advanced",nostrShowAdvanced:"Show Advanced",nostrUnsavedChanges:"You have unsaved changes",nostrProfilePreview:"Profile picture preview",nostrAdvanced:"Advanced",nostrImporting:"Importing…",nostrNoProfileSet:'No profile set. Click "Edit Profile" to add your name, bio, and avatar.',nostrProfile:"Profile",nostrAbout:"About",nostrName:"Name",instancesTitle:"Connected Instances",instancesSub:"Presence beacons from the gateway and clients.",instancesNoReported:"No instances reported yet.",instancesUnknownHost:"unknown host",instancesLastInput:"Last input",instancesReason:"Reason",instancesScopes:"scopes",sessionsTitle:"Sessions",sessionsSub:"Active session keys and per-session overrides.",sessionsActiveWithin:"Active within (minutes)",sessionsLimit:"Limit",sessionsIncludeGlobal:"Include global",sessionsIncludeUnknown:"Include unknown",sessionsStore:"Store",sessionsKey:"Key",sessionsLabel:"Label",sessionsKind:"Kind",sessionsUpdated:"Updated",sessionsTokens:"Tokens",sessionsThinking:"Thinking",sessionsVerbose:"Verbose",sessionsReasoning:"Reasoning",sessionsActions:"Actions",sessionsNoFound:"No sessions found.",usageNoTimeline:"No timeline data yet.",usageNoData:"No data",usageHours:"Hours",usageMidnight:"Midnight",usage4am:"4am",usage8am:"8am",usageNoon:"Noon",usage4pm:"4pm",usage8pm:"8pm",usageDailyToken:"Daily Token Usage",usageDailyCost:"Daily Cost Usage",usageOutput:"Output",usageInput:"Input",usageCacheWrite:"Cache Write",usageCacheRead:"Cache Read",usageClearFilters:"Clear filters",usageRemoveFilter:"Remove filter",usageDays:"Days",usageHoursLabel:"Hours",usageSession:"Session",usageFiltered:"filtered",usageVisible:"visible",usageExport:"Export",usageActivityByTime:"Activity by Time",usageMosaicSubNoData:"Estimates require session timestamps.",usageTokensUnit:"tokens",usageTimeZoneLocal:"Local",usageTimeZoneUtc:"UTC",usageDayOfWeek:"Day of Week",usageDailyUsage:"Daily Usage",usageTotal:"Total",usageByType:"By Type",usageTokensByType:"Tokens by Type",usageCostByType:"Cost by Type",usageTotalLabel:"Total",usageOverview:"Usage Overview",usageMessages:"Messages",usageToolCalls:"Tool Calls",usageErrors:"Errors",usageAvgTokensMsg:"Avg Tokens / Msg",usageAvgCostMsg:"Avg Cost / Msg",usageSessionsCard:"Sessions",usageThroughput:"Throughput",usageErrorRate:"Error Rate",usageCacheHitRate:"Cache Hit Rate",usageMessagesHint:"Total user + assistant messages in range.",usageToolCallsHint:"Total tool call count across sessions.",usageErrorsHint:"Total message/tool errors in range.",usageAvgTokensMsgHint:"Average tokens per message in this range.",usageSessionsHint:"Distinct sessions in the range.",usageThroughputHint:"Throughput shows tokens per minute over active time. Higher is better.",usageErrorRateHint:"Error rate = errors / total messages. Lower is better.",usageCacheHitRateHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageTopModels:"Top Models",usageTopProviders:"Top Providers",usageTopTools:"Top Tools",usageTopAgents:"Top Agents",usageTopChannels:"Top Channels",usagePeakErrorDays:"Peak Error Days",usagePeakErrorHours:"Peak Error Hours",usageNoModelData:"No model data",usageNoProviderData:"No provider data",usageNoToolCalls:"No tool calls",usageNoAgentData:"No agent data",usageNoChannelData:"No channel data",usageNoErrorData:"No error data",usageShown:"shown",usageTotalSessions:"total",usageAvg:"avg",usageAll:"All",usageRecentlyViewed:"Recently viewed",usageSort:"Sort",usageCost:"Cost",usageErrorsCol:"Errors",usageMessagesCol:"Messages",usageRecent:"Recent",usageTokensCol:"Tokens",usageDescending:"Descending",usageAscending:"Ascending",usageClearSelection:"Clear Selection",usageNoRecentSessions:"No recent sessions",usageNoSessionsInRange:"No sessions in range",usageCopy:"Copy",usageCopySessionName:"Copy session name",usageSelectedCount:"Selected",usageMoreSessions:"more",usageUserAssistant:"user · assistant",usageToolsUsed:"tools used",usageToolResults:"tool results",usageAcrossMessages:"Across messages",usageInRange:"in range",usageCached:"cached",usagePrompt:"prompt",usageCacheHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageErrorHint:"Error rate = errors / total messages. Lower is better.",usageTokensHint:"Average tokens per message in this range.",usageCostHint:"Average cost per message when providers report costs.",usageCostHintMissing:"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.",usageModelMix:"Model Mix",usageDuration:"Duration",usageCloseSessionDetails:"Close session details",usageLoading:"Loading…",usageNoTimelineData:"No timeline data",usageNoDataInRange:"No data in range",usageUsageOverTime:"Usage Over Time",usagePerTurn:"Per Turn",usageCumulative:"Cumulative",usageNoContextData:"No context data",usageSystemPromptBreakdown:"System Prompt Breakdown",usageExpandAll:"Expand all",usageCollapseAll:"Collapse All",usageBaseContextPerMessage:"Base context per message",usageSys:"Sys",usageSkills:"Skills",usageToolsLabel:"Tools",usageFiles:"Files",usageConversation:"Conversation",usageNoMessages:"No messages",usageSearchConversation:"Search conversation",usageClear:"Clear",usageHasTools:"Has tools",usageUser:"User",usageAssistant:"Assistant",usageTool:"Tool",usageToolResult:"Tool result",usageMessagesCount:"messages",usageNoMessagesMatchFilters:"No messages match the filters.",usageTokenUsage:"Token Usage",usageToday:"Today",usage7d:"7d",usage30d:"30d",usageExportSessionsCsv:"Sessions (CSV)",usageExportDailyCsv:"Daily (CSV)",usageSessionsCount:"sessions",usageQueryHintMatch:"{count} of {total} sessions match",usageQueryHintInRange:"{total} sessions in range",usagePageSubtitle:"See where tokens go, when sessions spike, and what drives cost.",usageCalls:"calls",cronScheduler:"Scheduler",cronSchedulerSub:"Gateway-owned cron scheduler status.",cronEnabled:"Enabled",cronJobs:"Jobs",cronNewJob:"New Job",cronNewJobSub:"Create a scheduled wakeup or agent run.",cronName:"Name",cronDescription:"Description",cronAgentId:"Agent ID",cronSchedule:"Schedule",cronEvery:"Every",cronAt:"At",cronCron:"Cron",cronSession:"Session",cronMain:"Main",cronIsolated:"Isolated",cronWakeMode:"Wake mode",cronNextHeartbeat:"Next heartbeat",cronNow:"Now",cronPayload:"Payload",cronSystemEvent:"System event",cronAgentTurn:"Agent turn",cronSystemText:"System text",cronAgentMessage:"Agent message",cronDelivery:"Delivery",cronAnnounceSummary:"Announce summary (default)",cronNoneInternal:"None (internal)",cronChannel:"Channel",cronTo:"To",cronAddJob:"Add job",cronJobsTitle:"Jobs",cronJobsSub:"All scheduled jobs stored in the gateway.",cronNoJobsYet:"No jobs yet.",cronRunHistory:"Run history",cronRunHistorySub:"Latest runs for",cronSelectJob:"(select a job)",cronNoRunsYet:"No runs yet.",cronSelectJobToInspect:"Select a job to inspect run history.",cronRunAt:"Run at",cronUnit:"Unit",cronMinutes:"Minutes",cronHours:"Hours",cronDays:"Days",cronExpression:"Expression",cronTimeoutSeconds:"Timeout (seconds)",cronLast:"last",agentsFiles:"Files",agentsRuntime:"Runtime",agentsWeb:"Web",agentsMemory:"Memory",agentsSessions:"Sessions",agentsUi:"UI",agentsMessaging:"Messaging",agentsAutomation:"Automation",agentsReadFile:"Read file contents",agentsWriteFile:"Create or overwrite files",agentsEdit:"Make precise edits",agentsApplyPatch:"Patch files (OpenAI)",agentsExec:"Run shell commands",agentsProcess:"Manage background processes",agentsWebSearch:"Search the web",agentsWebFetch:"Fetch web content",agentsMemorySearch:"Semantic search",agentsMemoryGet:"Read memory files",agentsSessionsList:"List sessions",agentsSessionsHistory:"Session history",agentsSessionsSend:"Send to session",agentsSessionsSpawn:"Spawn sub-agent",agentsSessionStatus:"Session status",agentsBrowser:"Control web browser",agentsCanvas:"Control canvases",agentsMessage:"Send messages",agentsScheduleTasks:"Schedule tasks",agentsGatewayControl:"Gateway control",agentsNodesDevices:"Nodes + devices",agentsListAgents:"List agents",agentsImageUnderstanding:"Image understanding",agentsNodes:"Nodes",agentsAgents:"Agents",agentsMedia:"Media",agentsTitle:"Agents",agentsConfigured:"configured.",agentsNoFound:"No agents found.",agentsSelectAgent:"Select an agent",agentsSelectAgentSub:"Pick an agent to inspect its workspace and tools.",agentsWorkspaceRouting:"Agent workspace and routing.",agentsProfileMinimal:"Minimal",agentsProfileCoding:"Coding",agentsProfileMessaging:"Messaging",agentsProfileFull:"Full",agentsDefault:"default",agentsSelected:"selected",agentsAllSkills:"all skills",agentsCurrentModel:"Current",agentsInheritDefault:"Inherit default",agentsOverview:"Overview",agentsOverviewSub:"Workspace paths and identity metadata.",agentsWorkspace:"Workspace",agentsPrimaryModel:"Primary Model",agentsIdentityName:"Identity Name",agentsDefaultLabel:"Default",agentsIdentityEmoji:"Identity Emoji",agentsSkillsFilter:"Skills Filter",agentsModelSelection:"Model Selection",agentsPrimaryModelLabel:"Primary model",agentsPrimaryModelDefault:"(default)",agentsFallbacksLabel:"Fallbacks (comma-separated)",agentsReloadConfig:"Reload Config",agentsAgentContext:"Agent Context",agentsContextWorkspaceIdentity:"Workspace, identity, and model configuration.",agentsContextWorkspaceScheduling:"Workspace and scheduling targets.",agentsChannels:"Channels",agentsChannelsSub:"Gateway-wide channel status snapshot.",agentsLoadChannels:"Load channels to see live status.",agentsNoChannels:"No channels found.",agentsConnected:"connected",agentsConfiguredLabel:"configured",agentsEnabled:"enabled",agentsDisabled:"disabled",agentsNoAccounts:"no accounts",agentsNotConfigured:"not configured",agentsScheduler:"Scheduler",agentsSchedulerSub:"Gateway cron status.",agentsNextWake:"Next wake",agentsCronJobs:"Agent Cron Jobs",agentsCronJobsSub:"Scheduled jobs targeting this agent.",agentsNoJobsAssigned:"No jobs assigned.",agentsCoreFiles:"Core Files",agentsCoreFilesSub:"Bootstrap persona, identity, and tool guidance.",agentsLoadWorkspaceFiles:"Load the agent workspace files to edit core instructions.",agentsNoFilesFound:"No files found.",agentsSelectFileToEdit:"Select a file to edit.",agentsReset:"Reset",agentsFileMissingCreate:"This file is missing. Saving will create it in the agent workspace.",agentsUnavailable:"Unavailable",agentsTabOverview:"Overview",agentsTabFiles:"Files",agentsTabTools:"Tools",agentsTabSkills:"Skills",agentsTabChannels:"Channels",agentsTabCron:"Cron Jobs",agentsFallback:"fallback",agentsNever:"never",agentsLastRefresh:"Last refresh",agentsSkillsPanelSub:"Per-agent skill allowlist and workspace skills.",agentsUseAll:"Use All",agentsDisableAll:"Disable All",agentsLoadConfigForSkills:"Load the gateway config to set per-agent skills.",agentsCustomAllowlist:"This agent uses a custom skill allowlist.",agentsAllSkillsEnabled:"All skills are enabled. Disabling any skill will create a per-agent allowlist.",agentsLoadSkillsForAgent:"Load skills for this agent to view workspace-specific entries.",agentsFilter:"Filter",agentsNoSkillsFound:"No skills found.",agentsToolsGlobalAllow:"Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.",agentsProfile:"Profile",agentsSource:"Source",agentsStatus:"Status",agentsUnsaved:"unsaved",agentsQuickPresets:"Quick Presets",agentsInherit:"Inherit",agentsToolsTitle:"Tools",agentsToolsSub:"Per-agent tool profile and overrides.",agentsToolAccess:"Tool Access",agentsToolsSubText:"Profile + per-tool overrides for this agent.",agentsLoadConfigForTools:"Load the gateway config to adjust tool profiles.",agentsExplicitAllowlist:"This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.",agentsEnableAll:"Enable All",agentsEnabledCount:"enabled.",skillsTitle:"Skills",skillsSub:"Bundled, managed, and workspace skills.",skillsSearchPlaceholder:"Search skills",skillsShown:"shown",skillsWorkspace:"Workspace Skills",skillsBuiltIn:"Built-in Skills",skillsInstalled:"Installed Skills",skillsExtra:"Extra Skills",skillsOther:"Other Skills",skillsAdd:"Add",skillsAddSkill:"Add Skill",skillsUploadName:"Skill name (English)",skillsUploadNamePlaceholder:"e.g. my-skill",skillsUploadFile:"File",skillsUploadFileHint:"SKILL.md or .zip containing SKILL.md",skillsUploadSingleHint:"Single file must be SKILL.md",skillsUploadZipHint:"Zip must contain SKILL.md",skillsUploadSubmit:"Upload",skillsUploadSuccess:"Skill uploaded successfully",skillsDelete:"Delete",skillsDeleteConfirm:"Delete this skill?",skillsSource:"Source",skillsPath:"Path",skillsNoDoc:"No documentation available.",skillsEligible:"Eligible",skillsDisabled:"Disabled",skillsRequiresBins:"Requires bins",skillsRequiresEnv:"Requires env",skillsRequiresConfig:"Requires config",skillsMissing:"Missing",nodesTitle:"Nodes",nodesSub:"Paired devices and live links.",nodesNoFound:"No nodes found.",nodesDevices:"Devices",nodesDevicesSub:"Pairing requests + role tokens.",nodesPending:"Pending",nodesPaired:"Paired",nodesNoPairedDevices:"No paired devices.",nodesRoleLabel:"role: ",nodesRoleNone:"role: -",nodesRepairSuffix:" · repair",nodesRequested:"requested ",nodesApprove:"Approve",nodesReject:"Reject",nodesRolesLabel:"roles: ",nodesScopesLabel:"scopes: ",nodesTokensNone:"Tokens: none",nodesTokens:"Tokens",nodesTokenRevoked:"revoked",nodesTokenActive:"active",nodesRotate:"Rotate",nodesRevoke:"Revoke",nodesBindingTitle:"Exec node binding",nodesBindingSub:"Pin agents to a specific node when using ",nodesBindingFormModeHint:"Switch the Config tab to Form mode to edit bindings here.",nodesLoadConfigHint:"Load config to edit bindings.",nodesLoadConfig:"Load config",nodesDefaultBinding:"Default binding",nodesDefaultBindingSub:"Used when agents do not override a node binding.",nodesNodeLabel:"Node",nodesAnyNode:"Any node",nodesNoNodesSystemRun:"No nodes with system.run available.",nodesNoAgentsFound:"No agents found.",nodesExecApprovalsTitle:"Exec approvals",nodesExecApprovalsSub:"Allowlist and approval policy for exec host=gateway/node.",nodesLoadExecApprovalsHint:"Load exec approvals to edit allowlists.",nodesLoadApprovals:"Load approvals",nodesTarget:"Target",nodesTargetSub:"Gateway edits local approvals; node edits the selected node.",nodesHost:"Host",nodesHostGateway:"Gateway",nodesHostNode:"Node",nodesSelectNode:"Select node",nodesNoNodesExecApprovals:"No nodes advertise exec approvals yet.",nodesScope:"Scope",nodesDefaults:"Defaults",nodesSecurity:"Security",nodesSecurityDefaultSub:"Default security mode.",nodesSecurityAgentSubPrefix:"Default: ",nodesMode:"Mode",nodesUseDefaultPrefix:"Use default (",nodesUseDefaultButton:"Use default",nodesSecurityDeny:"Deny",nodesSecurityAllowlist:"Allowlist",nodesSecurityFull:"Full",nodesAsk:"Ask",nodesAskDefaultSub:"Default prompt policy.",nodesAskAgentSubPrefix:"Default: ",nodesAskOff:"Off",nodesAskOnMiss:"On miss",nodesAskAlways:"Always",nodesAskFallback:"Ask fallback",nodesAskFallbackDefaultSub:"Applied when the UI prompt is unavailable.",nodesAskFallbackAgentSubPrefix:"Default: ",nodesFallback:"Fallback",nodesAutoAllowSkills:"Auto-allow skill CLIs",nodesAutoAllowSkillsDefaultSub:"Allow skill executables listed by the Gateway.",nodesAutoAllowSkillsUsingDefault:"Using default (",nodesAutoAllowSkillsOverride:"Override (",nodesEnabled:"Enabled",nodesAllowlist:"Allowlist",nodesAllowlistSub:"Case-insensitive glob patterns.",nodesAddPattern:"Add pattern",nodesNoAllowlistEntries:"No allowlist entries yet.",nodesNewPattern:"New pattern",nodesLastUsedPrefix:"Last used: ",nodesPattern:"Pattern",nodesRemove:"Remove",nodesDefaultAgent:"default agent",nodesAgent:"agent",nodesUsesDefault:"uses default (",nodesOverride:"override: ",nodesBinding:"Binding",nodesChipPaired:"paired",nodesChipUnpaired:"unpaired",nodesConnected:"connected",nodesOffline:"offline",nodesNever:"never",configEnv:"Environment",configUpdate:"Updates",configAgents:"Agents",configAuth:"Authentication",configChannels:"Channels",configMessages:"Messages",configCommands:"Commands",configHooks:"Hooks",configSkills:"Skills",configTools:"Tools",configGateway:"Gateway",configWizard:"Setup Wizard",configMeta:"Metadata",configLogging:"Logging",configBrowser:"Browser",configUi:"UI",configModels:"Models",configBindings:"Bindings",configBroadcast:"Broadcast",configAudio:"Audio",configSession:"Session",configCron:"Cron",configWeb:"Web",configDiscovery:"Discovery",configCanvasHost:"Canvas Host",configTalk:"Talk",configPlugins:"Plugins",configEnvVars:"Environment Variables",configEnvVarsDesc:"Environment variables passed to the gateway process",configUpdatesDesc:"Auto-update settings and release channel",configAgentsDesc:"Agent configurations, models, and identities",configAuthDesc:"API keys and authentication profiles",configChannelsDesc:"Messaging channels (Telegram, Discord, Slack, etc.)",configMessagesDesc:"Message handling and routing settings",configCommandsDesc:"Custom slash commands",configHooksDesc:"Webhooks and event hooks",configSkillsDesc:"Skill packs and capabilities",configToolsDesc:"Tool configurations (browser, search, etc.)",configGatewayDesc:"Gateway server settings (port, auth, binding)",configWizardDesc:"Setup wizard state and history",configMetaDesc:"Gateway metadata and version information",configLoggingDesc:"Log levels and output configuration",configBrowserDesc:"Browser automation settings",configUiDesc:"User interface preferences",configModelsDesc:"AI model configurations and providers",configBindingsDesc:"Key bindings and shortcuts",configBroadcastDesc:"Broadcast and notification settings",configAudioDesc:"Audio input/output settings",configSessionDesc:"Session management and persistence",configCronDesc:"Scheduled tasks and automation",configWebDesc:"Web server and API settings",configDiscoveryDesc:"Service discovery and networking",configCanvasHostDesc:"Canvas rendering and display",configTalkDesc:"Voice and speech settings",configPluginsDesc:"Plugin management and extensions",configSettingsTitle:"Settings",configSearchPlaceholder:"Search settings…",configAllSettings:"All Settings",configForm:"Form",configRaw:"Raw",configUnsavedChanges:"Unsaved changes",configUnsavedChangesLabel:"unsaved changes",configOneUnsavedChange:"1 unsaved change",configNoChanges:"No changes",configApplying:"Applying…",configApply:"Apply",configUpdating:"Updating…",configUpdateButton:"Update",configViewPrefix:"View ",configPendingChange:"pending change",configPendingChanges:"pending changes",configLoadingSchema:"Loading schema…",configFormUnsafeWarning:"Form view can't safely edit some fields. Use Raw to avoid losing config entries.",configRawJson5:"Raw JSON5",configValidityValid:"valid",configValidityInvalid:"invalid",configValidityUnknown:"unknown",configSchemaUnavailable:"Schema unavailable.",configUnsupportedSchema:"Unsupported schema. Use Raw.",configNoSettingsMatchPrefix:'No settings match "',configNoSettingsMatchSuffix:'"',configNoSettingsInSection:"No settings in this section",configUnsupportedSchemaNode:"Unsupported schema node. Use Raw mode.",configSubnavAll:"All",envVarsSection:"Vars (env.vars)",envModelEnvSection:"Model Env (env.modelEnv)",envShellEnvSection:"Shell Env (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"Add",envVarsDelete:"Delete",envVarsSave:"Save",envVarsEmpty:"No environment variables. Click Add to create one.",envVarsKeyPlaceholder:"e.g. API_KEY",envVarsValuePlaceholder:"e.g. your-secret-value",debugSnapshots:"Snapshots",debugSnapshotsSub:"Status, health, and heartbeat data.",debugStatus:"Status",debugHealth:"Health",debugLastHeartbeat:"Last heartbeat",debugSecurityAudit:"Security audit",debugManualRpc:"Manual RPC",debugManualRpcSub:"Send a raw gateway method with JSON params.",debugMethod:"Method",debugParams:"Params",debugCall:"Call",debugCritical:"critical",debugWarnings:"warnings",debugNoCritical:"No critical issues",debugInfo:"info",debugSecurityAuditDetails:"Run openclaw security audit --deep for details.",debugModels:"Models",debugModelsSub:"Catalog from models.list.",debugEventLog:"Event Log",debugEventLogSub:"Latest gateway events.",debugNoEvents:"No events yet.",logsTitle:"Logs",logsSub:"Gateway file logs (JSONL).",logsExportFiltered:"Export filtered",logsExportVisible:"Export visible"},Zc={tabGroupChat:"聊天",tabGroupControl:"控制",tabGroupAgent:"Agent",tabGroupSettings:"设置",subtitleAgents:"管理代理工作区、工具与身份。",subtitleOverview:"网关状态、入口与健康概览。",subtitleChannels:"管理通道与设置。",subtitleInstances:"已连接客户端与节点的在线状态。",subtitleSessions:"查看活跃会话并调整每会话默认值。",subtitleUsage:"",subtitleCron:"安排唤醒与定时代理任务。",subtitleSkills:"管理技能可用性与 API 密钥注入。",subtitleMcp:"配置 MCP 服务器与工具。",subtitleNodes:"已配对设备、能力与命令。",subtitleChat:"直接与网关聊天进行快速操作。",subtitleDigitalEmployee:"按业务场景切换数字员工模版，一键开启新会话。",subtitleAgentSwarm:"多Agent集群协作，面向运维与 SRE。",subtitleConfig:"安全编辑 ~/.openocta/openocta.json。",subtitleEnvVars:"Key-Value 环境变量，保存至 ~/.openocta/openocta.json 的 env.vars。",subtitleModels:"配置模型厂商与 API 密钥。",subtitleDebug:"网关快照、事件与手动 RPC 调用。",subtitleLogs:"网关日志实时查看。",subtitleLlmTrace:"查看会话的 LLM trace 详情。",subtitleSandbox:"文件系统、网络、命令与安全钩子配置。",subtitleApprovals:"命令审批队列；按会话批准或拒绝。",navTitleAgents:"代理",navTitleOverview:"概览",navTitleChannels:"通道",navTitleInstances:"实例",navTitleSessions:"会话",navTitleUsage:"用量",navTitleCron:"定时任务",navTitleSkills:"技能",navTitleMcp:"MCP",navTitleNodes:"节点",navTitleChat:"聊天",navTitleDigitalEmployee:"数字员工",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"开发中",navTitleConfig:"配置",navTitleEnvVars:"环境变量",navTitleModels:"模型",navTitleDebug:"测试",navTitleLogs:"日志",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"沙箱",navTitleApprovals:"审批队列",navTitleControl:"控制",overviewGatewayAccess:"网关访问",overviewGatewayAccessSub:"控制台连接地址与认证方式。",overviewWebSocketUrl:"WebSocket 地址",overviewGatewayToken:"网关令牌",overviewPassword:"密码（不保存）",overviewDefaultSessionKey:"默认会话 Key",overviewConnect:"连接",overviewRefresh:"刷新",overviewConnectHint:"点击连接以应用连接变更。",overviewSnapshot:"快照",overviewSnapshotSub:"最近一次网关握手信息。",overviewStatus:"状态",overviewConnected:"已连接",overviewDisconnected:"未连接",overviewUptime:"运行时长",overviewTickInterval:"心跳间隔",overviewLastChannelsRefresh:"最近通道刷新",overviewChannelsHint:"在通道中关联 WhatsApp、Telegram、Discord、Signal 或 iMessage。",overviewInstances:"实例",overviewInstancesSub:"过去 5 分钟内的在线实例数。",overviewSessions:"会话",overviewSessionsSub:"网关跟踪的最近会话 Key。",overviewCron:"定时任务",overviewCronNext:"下次执行",overviewCronEnabled:"已启用",overviewCronDisabled:"已禁用",overviewNotes:"说明",overviewNotesSub:"远程控制相关简要提示。",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"建议使用 serve 模式，使网关仅监听本机并由 tailnet 认证。",overviewNoteSessionHygiene:"会话清理",overviewNoteSessionHygieneSub:"使用 /new 或 sessions.patch 重置上下文。",overviewNoteCron:"定时提醒",overviewNoteCronSub:"定时任务请使用独立会话。",commonLoading:"加载中…",commonRefresh:"刷新",commonRefreshing:"刷新中…",commonSaving:"保存中…",commonDelete:"删除",commonFilter:"筛选",commonOptional:"（可选）",commonInherit:"继承",commonOffExplicit:"关闭（显式）",commonNA:"无",commonYes:"是",commonNo:"否",channelsConfigure:"配置",mcpAddServer:"添加 MCP 服务器",mcpServerName:"服务器名称",mcpNoServers:"暂无 MCP 服务器配置。",mcpEnabled:"已启用",mcpDisabled:"已禁用",mcpFormMode:"表单",mcpRawMode:"原始 JSON",mcpCommand:"命令",mcpArgs:"参数",mcpUrl:"URL",mcpService:"服务",mcpServiceUrl:"服务 URL",mcpToolPrefix:"工具前缀",mcpRawJson:"原始 JSON",mcpDeleteConfirm:"确定删除此 MCP 服务器？",mcpConnectionTypeStdio:"命令行 (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"服务",mcpEnv:"环境变量",mcpEnvPlaceholder:"KEY=value 或 $ENV_VAR，每行一个",mcpViewList:"列表",mcpViewCard:"卡片",mcpTableName:"名称",mcpTableType:"连接类型",mcpTableStatus:"状态",mcpTableActions:"操作",llmTraceSearch:"搜索",llmTraceSearchPlaceholder:"按 session key 筛选…",llmTraceEnabled:"已开启",llmTraceDisabled:"已关闭",llmTraceActionEnable:"开启",llmTraceActionDisable:"关闭",llmTraceToggleTooltip:"开启后，再进行会话会记录模型调用Trace详情，可能会有性能影响。关闭后，不再记录新的模型会话Trace详情。",llmTraceModeActive:"活跃",llmTraceModeAll:"全部",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"更新时间",llmTraceFile:"文件",llmTraceFileSize:"大小",llmTraceView:"查看",llmTraceNoEntries:"暂无 trace 记录。",sandboxEnabled:"已开启",sandboxDisabled:"已关闭",sandboxActionEnable:"开启",sandboxActionDisable:"关闭",sandboxAllowedPaths:"允许路径",sandboxNetworkAllow:"网络白名单",sandboxHooks:"安全钩子",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"请求验证：拦截会话滥用（DoS）、过长提示、恶意 IP",sandboxHookDescBeforeModel:"即时安全：提示注入、敏感数据泄露、控制字符",sandboxHookDescAfterModel:"输出评测：危险命令、秘密泄露、恶意网址",sandboxHookDescBeforeTool:"权限校验：工具权限、参数校验、路径校验",sandboxHookDescAfterTool:"结果审查：秘密泄露、错误脱敏、输出截断",sandboxHookDescAfterAgent:"审计日志、合规检查",sandboxValidator:"命令校验",sandboxSecretPatterns:"秘密泄露检测正则",sandboxSecretPatternsHint:"每行一个正则。系统内置模式（API Key、令牌等）会一并生效。",sandboxBanCommands:"禁止命令",sandboxBanArguments:"禁止参数",sandboxBanFragments:"禁止片段",sandboxSectionConfig:"沙箱配置",sandboxSectionApprovals:"审批队列",approvalsList:"审批队列",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"命令",approvalsTimeout:"超时",approvalsTTL:"TTL",approvalsStatus:"状态",approvalsApprove:"批准",approvalsDeny:"拒绝",approvalsExpired:"已过期",approvalsPending:"待审批",approvalsNoEntries:"暂无审批请求。",approvalsViewSession:"查看会话",modelsViewList:"列表",modelsViewCard:"卡片",modelsTableName:"名称",modelsTableModel:"默认模型",modelsTableBaseUrl:"Base URL",modelsTableActions:"操作",modelsAddProvider:"添加厂商",modelsAddCustomProvider:"添加自定义厂商",modelsProviderId:"厂商 ID",modelsProviderIdPlaceholder:"如 openai, google, anthropic",modelsProviderIdHint:"小写字母、数字、连字符、下划线。创建后不可修改。",modelsDisplayName:"展示名称",modelsDisplayNamePlaceholder:"如 OpenAI, Google Gemini",modelsDefaultBaseUrl:"默认 Base URL",modelsDefaultBaseUrlPlaceholder:"如 https://api.openai.com/v1",modelsApiKeyPrefix:"API Key 前缀（可选）",modelsApiKeyPrefixPlaceholder:"如 sk-",modelsApiType:"API 类型",modelsApiTypeTooltip:`OpenAI：兼容 OpenAI Chat Completions 的端点。默认会请求/v1/chat/completions。
Anthropic：兼容 Anthropic Messages API 的端点，会进行直接请求。`,modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"环境变量",modelsAddModel:"添加模型",modelsModelId:"模型 ID",modelsModelName:"模型名称",modelsModelManagement:"模型管理",modelsNoModels:"暂无模型，点击添加模型。",modelsEnvVarConflict:"环境变量冲突",modelsNoProviders:"暂无模型厂商配置。",modelsModels:"模型",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"使用",modelsCancelUse:"取消使用",modelsSelectModelToUse:"选择要使用的模型",modelsCurrentDefault:"当前默认",channelsHealth:"通道健康",channelsHealthSub:"网关返回的通道状态快照。",channelsNoSnapshot:"暂无快照。",channelsSchemaUnavailable:"Schema 不可用，请使用 Raw。",channelsConfigSchemaUnavailable:"通道配置 Schema 不可用。",channelsConfigSaveConfirm:"修改/新增渠道配置会导致长连接中断并重新创建，是否继续？",channelsLoadingConfigSchema:"正在加载配置 Schema…",commonSave:"保存",commonCreate:"创建",commonReload:"重新加载",commonCancel:"取消",channelConfigured:"已配置",channelRunning:"运行中",channelLastStart:"最近启动",channelLastProbe:"最近探测",channelProbe:"探测",channelProbeOk:"正常",channelProbeFailed:"失败",channelLinked:"已链接",channelConnected:"已连接",channelLastConnect:"最近连接",channelLastMessage:"最近消息",channelAuthAge:"认证时长",channelBaseUrl:"Base URL",channelCredential:"凭证",channelAudience:"受众",channelMode:"模式",channelPublicKey:"公钥",channelLastInbound:"最近入站",channelActive:"活跃",channelGenericSub:"通道状态与配置。",channelAccounts:"账号",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"链接 WhatsApp Web 并监控连接状态。",channelTelegram:"Telegram",channelTelegramSub:"机器人状态与通道配置。",channelDiscord:"Discord",channelDiscordSub:"机器人状态与通道配置。",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API Webhook 状态与通道配置。",channelIMessage:"iMessage",channelIMessageSub:"macOS 桥接状态与通道配置。",channelSignal:"Signal",channelSignalSub:"signal-cli 状态与通道配置。",channelSlack:"Slack",channelSlackSub:"Socket 模式状态与通道配置。",channelNostr:"Nostr",channelNostrSub:"通过 Nostr 中继的分布式私信（NIP-04）。",channelWhatsAppWorking:"处理中…",channelShowQr:"显示二维码",channelRelink:"重新链接",channelWaitForScan:"等待扫码",channelLogout:"登出",nostrEditProfile:"编辑资料",nostrAccount:"账号",nostrUsername:"用户名",nostrDisplayName:"显示名称",nostrBio:"简介",nostrAvatarUrl:"头像 URL",nostrBannerUrl:"横幅 URL",nostrWebsite:"网站",nostrNip05:"NIP-05 标识",nostrLud16:"Lightning 地址",nostrSavePublish:"保存并发布",nostrImportRelays:"从中继导入",nostrHideAdvanced:"隐藏高级",nostrShowAdvanced:"显示高级",nostrUnsavedChanges:"您有未保存的更改",nostrProfilePreview:"头像预览",nostrAdvanced:"高级",nostrImporting:"导入中…",nostrNoProfileSet:"未设置资料。点击「编辑资料」添加姓名、简介与头像。",nostrProfile:"资料",nostrAbout:"关于",nostrName:"名称",instancesTitle:"已连接实例",instancesSub:"网关与客户端的在线状态。",instancesNoReported:"暂无实例上报。",instancesUnknownHost:"未知主机",instancesLastInput:"最近输入",instancesReason:"原因",instancesScopes:"范围",sessionsTitle:"会话",sessionsSub:"活跃会话 Key 及每会话覆盖项。",sessionsActiveWithin:"活跃时间（分钟）",sessionsLimit:"数量上限",sessionsIncludeGlobal:"包含全局",sessionsIncludeUnknown:"包含未知",sessionsStore:"存储",sessionsKey:"Key",sessionsLabel:"标签",sessionsKind:"类型",sessionsUpdated:"更新时间",sessionsTokens:"Token",sessionsThinking:"思考",sessionsVerbose:"详细",sessionsReasoning:"推理",sessionsActions:"操作",sessionsNoFound:"未找到会话。",usageNoTimeline:"暂无时间线数据。",usageNoData:"暂无数据",usageHours:"小时",usageMidnight:"0 点",usage4am:"4 点",usage8am:"8 点",usageNoon:"12 点",usage4pm:"16 点",usage8pm:"20 点",usageDailyToken:"每日 Token 用量",usageDailyCost:"每日费用",usageOutput:"输出",usageInput:"输入",usageCacheWrite:"缓存写入",usageCacheRead:"缓存读取",usageClearFilters:"清除筛选",usageRemoveFilter:"移除筛选",usageDays:"天",usageHoursLabel:"小时",usageSession:"会话",usageFiltered:"已筛选",usageVisible:"当前可见",usageExport:"导出",usageActivityByTime:"按时间活动",usageMosaicSubNoData:"估算需要会话时间戳。",usageTokensUnit:"tokens",usageTimeZoneLocal:"本地",usageTimeZoneUtc:"UTC",usageDayOfWeek:"星期",usageDailyUsage:"每日用量",usageTotal:"合计",usageByType:"按类型",usageTokensByType:"按类型 Token",usageCostByType:"按类型费用",usageTotalLabel:"合计",usageOverview:"用量概览",usageMessages:"消息数",usageToolCalls:"工具调用",usageErrors:"错误数",usageAvgTokensMsg:"平均 Token/条",usageAvgCostMsg:"平均费用/条",usageSessionsCard:"会话",usageThroughput:"吞吐",usageErrorRate:"错误率",usageCacheHitRate:"缓存命中率",usageMessagesHint:"范围内用户+助手消息总数。",usageToolCallsHint:"会话中工具调用总次数。",usageErrorsHint:"范围内消息/工具错误总数。",usageAvgTokensMsgHint:"该范围内每条消息平均 token 数。",usageSessionsHint:"范围内的不同会话数。",usageThroughputHint:"吞吐为活跃时间内每分钟 token 数，越高越好。",usageErrorRateHint:"错误率 = 错误数/总消息数，越低越好。",usageCacheHitRateHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageTopModels:"Top 模型",usageTopProviders:"Top 提供商",usageTopTools:"Top 工具",usageTopAgents:"Top 代理",usageTopChannels:"Top 渠道",usagePeakErrorDays:"错误高峰日",usagePeakErrorHours:"错误高峰时",usageNoModelData:"无模型数据",usageNoProviderData:"无提供商数据",usageNoToolCalls:"无工具调用",usageNoAgentData:"无代理数据",usageNoChannelData:"无渠道数据",usageNoErrorData:"无错误数据",usageShown:"显示",usageTotalSessions:"总计",usageAvg:"平均",usageAll:"全部",usageRecentlyViewed:"最近查看",usageSort:"排序",usageCost:"费用",usageErrorsCol:"错误",usageMessagesCol:"消息",usageRecent:"最近",usageTokensCol:"Token",usageDescending:"降序",usageAscending:"升序",usageClearSelection:"清除选择",usageNoRecentSessions:"无最近会话",usageNoSessionsInRange:"范围内无会话",usageCopy:"复制",usageCopySessionName:"复制会话名",usageSelectedCount:"已选",usageMoreSessions:"更多",usageUserAssistant:"用户 · 助手",usageToolsUsed:"使用工具数",usageToolResults:"工具结果",usageAcrossMessages:"跨消息",usageInRange:"范围内",usageCached:"缓存",usagePrompt:"提示",usageCacheHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageErrorHint:"错误率 = 错误数/总消息数，越低越好。",usageTokensHint:"该范围内每条消息平均 token 数。",usageCostHint:"提供商上报费用时每条消息平均费用。",usageCostHintMissing:"提供商上报费用时每条消息平均费用。部分或全部会话缺少费用数据。",usageModelMix:"模型组合",usageDuration:"时长",usageCloseSessionDetails:"关闭会话详情",usageLoading:"加载中…",usageNoTimelineData:"无时间线数据",usageNoDataInRange:"范围内无数据",usageUsageOverTime:"用量随时间",usagePerTurn:"每轮",usageCumulative:"累计",usageNoContextData:"无上下文数据",usageSystemPromptBreakdown:"系统提示分解",usageExpandAll:"全部展开",usageCollapseAll:"全部折叠",usageBaseContextPerMessage:"每条消息的基础上下文",usageSys:"系统",usageSkills:"技能",usageToolsLabel:"工具",usageFiles:"文件",usageConversation:"对话",usageNoMessages:"无消息",usageSearchConversation:"搜索对话",usageClear:"清除",usageHasTools:"含工具",usageUser:"用户",usageAssistant:"助手",usageTool:"工具",usageToolResult:"工具结果",usageMessagesCount:"条消息",usageNoMessagesMatchFilters:"没有消息符合筛选条件。",usageTokenUsage:"Token 用量",usageToday:"今天",usage7d:"7 天",usage30d:"30 天",usageExportSessionsCsv:"会话 (CSV)",usageExportDailyCsv:"每日 (CSV)",usageSessionsCount:"会话",usageQueryHintMatch:"{count} / {total} 个会话匹配",usageQueryHintInRange:"{total} 个会话在范围内",usagePageSubtitle:"查看 token 消耗、会话高峰与费用驱动因素。",usageCalls:"次",cronScheduler:"调度器",cronSchedulerSub:"网关内置定时调度状态。",cronEnabled:"已启用",cronJobs:"任务数",cronNewJob:"新建任务",cronNewJobSub:"创建定时唤醒或代理运行任务。",cronName:"名称",cronDescription:"描述",cronAgentId:"Agent ID",cronSchedule:"调度",cronEvery:"每",cronAt:"在",cronCron:"Cron",cronSession:"会话",cronMain:"主会话",cronIsolated:"独立会话",cronWakeMode:"唤醒方式",cronNextHeartbeat:"下次心跳",cronNow:"立即",cronPayload:"负载",cronSystemEvent:"系统事件",cronAgentTurn:"代理轮次",cronSystemText:"系统文本",cronAgentMessage:"Agent 消息",cronDelivery:"投递",cronAnnounceSummary:"公布摘要（默认）",cronNoneInternal:"无（内部）",cronChannel:"通道",cronTo:"发送至",cronAddJob:"添加任务",cronJobsTitle:"任务列表",cronJobsSub:"网关中所有已调度任务。",cronNoJobsYet:"暂无任务。",cronRunHistory:"运行历史",cronRunHistorySub:"最近运行：",cronSelectJob:"（选择任务）",cronNoRunsYet:"暂无运行记录。",cronSelectJobToInspect:"选择任务以查看运行历史。",cronRunAt:"运行时间",cronUnit:"单位",cronMinutes:"分钟",cronHours:"小时",cronDays:"天",cronExpression:"表达式",cronTimeoutSeconds:"超时（秒）",cronLast:"上次",agentsFiles:"文件",agentsRuntime:"运行时",agentsWeb:"网页",agentsMemory:"记忆",agentsSessions:"会话",agentsUi:"界面",agentsMessaging:"消息",agentsAutomation:"自动化",agentsReadFile:"读取文件内容",agentsWriteFile:"创建或覆盖文件",agentsEdit:"精确编辑",agentsApplyPatch:"应用补丁（OpenAI）",agentsExec:"执行 shell 命令",agentsProcess:"管理后台进程",agentsWebSearch:"网页搜索",agentsWebFetch:"抓取网页内容",agentsMemorySearch:"语义搜索",agentsMemoryGet:"读取记忆文件",agentsSessionsList:"列出会话",agentsSessionsHistory:"会话历史",agentsSessionsSend:"发送到会话",agentsSessionsSpawn:"派生子代理",agentsSessionStatus:"会话状态",agentsBrowser:"控制浏览器",agentsCanvas:"控制画布",agentsMessage:"发送消息",agentsScheduleTasks:"安排任务",agentsGatewayControl:"网关控制",agentsNodesDevices:"节点与设备",agentsListAgents:"列出代理",agentsImageUnderstanding:"图像理解",agentsNodes:"节点",agentsAgents:"代理",agentsMedia:"媒体",agentsTitle:"代理",agentsConfigured:"已配置。",agentsNoFound:"未找到代理。",agentsSelectAgent:"选择代理",agentsSelectAgentSub:"选择一个代理以查看其工作区与工具。",agentsWorkspaceRouting:"代理工作区与路由。",agentsProfileMinimal:"最小",agentsProfileCoding:"编程",agentsProfileMessaging:"消息",agentsProfileFull:"完整",agentsDefault:"默认",agentsSelected:"已选",agentsAllSkills:"全部技能",agentsCurrentModel:"当前",agentsInheritDefault:"继承默认",agentsOverview:"概览",agentsOverviewSub:"工作区路径与身份元数据。",agentsWorkspace:"工作区",agentsPrimaryModel:"主模型",agentsIdentityName:"身份名称",agentsDefaultLabel:"默认",agentsIdentityEmoji:"身份表情",agentsSkillsFilter:"技能筛选",agentsModelSelection:"模型选择",agentsPrimaryModelLabel:"主模型",agentsPrimaryModelDefault:"（默认）",agentsFallbacksLabel:"备选（逗号分隔）",agentsReloadConfig:"重新加载配置",agentsAgentContext:"代理上下文",agentsContextWorkspaceIdentity:"工作区、身份与模型配置。",agentsContextWorkspaceScheduling:"工作区与调度目标。",agentsChannels:"渠道",agentsChannelsSub:"网关渠道状态快照。",agentsLoadChannels:"加载渠道以查看实时状态。",agentsNoChannels:"未找到渠道。",agentsConnected:"已连接",agentsConfiguredLabel:"已配置",agentsEnabled:"已启用",agentsDisabled:"已禁用",agentsNoAccounts:"无账号",agentsNotConfigured:"未配置",agentsScheduler:"调度器",agentsSchedulerSub:"网关定时状态。",agentsNextWake:"下次唤醒",agentsCronJobs:"代理定时任务",agentsCronJobsSub:"针对此代理的定时任务。",agentsNoJobsAssigned:"未分配任务。",agentsCoreFiles:"核心文件",agentsCoreFilesSub:"引导人设、身份与工具指引。",agentsLoadWorkspaceFiles:"加载代理工作区文件以编辑核心说明。",agentsNoFilesFound:"未找到文件。",agentsSelectFileToEdit:"选择要编辑的文件。",agentsReset:"重置",agentsFileMissingCreate:"该文件不存在。保存将在代理工作区中创建。",agentsUnavailable:"不可用",agentsTabOverview:"概览",agentsTabFiles:"文件",agentsTabTools:"工具",agentsTabSkills:"技能",agentsTabChannels:"渠道",agentsTabCron:"定时任务",agentsFallback:"备选",agentsNever:"从未",agentsLastRefresh:"上次刷新",agentsSkillsPanelSub:"每代理技能允许列表与工作区技能。",agentsUseAll:"全部启用",agentsDisableAll:"全部禁用",agentsLoadConfigForSkills:"加载网关配置以设置每代理技能。",agentsCustomAllowlist:"此代理使用自定义技能允许列表。",agentsAllSkillsEnabled:"所有技能已启用。禁用任意技能将创建每代理允许列表。",agentsLoadSkillsForAgent:"加载此代理的技能以查看工作区相关条目。",agentsFilter:"筛选",agentsNoSkillsFound:"未找到技能。",agentsToolsGlobalAllow:"已设置全局 tools.allow。代理覆盖无法启用被全局禁止的工具。",agentsProfile:"配置集",agentsSource:"来源",agentsStatus:"状态",agentsUnsaved:"未保存",agentsQuickPresets:"快捷预设",agentsInherit:"继承",agentsToolsTitle:"工具",agentsToolsSub:"每代理工具配置集与覆盖。",agentsToolAccess:"工具访问",agentsToolsSubText:"此代理的配置集与每工具覆盖。",agentsLoadConfigForTools:"加载网关配置以调整工具配置集。",agentsExplicitAllowlist:"此代理在配置中使用显式允许列表。工具覆盖在配置页管理。",agentsEnableAll:"全部启用",agentsEnabledCount:"已启用。",skillsTitle:"技能",skillsSub:"内置、托管与工作区技能。",skillsSearchPlaceholder:"搜索技能",skillsShown:"条显示",skillsWorkspace:"工作区技能",skillsBuiltIn:"内置技能",skillsInstalled:"已安装技能",skillsExtra:"额外技能",skillsOther:"其他技能",skillsAdd:"新增",skillsAddSkill:"添加技能",skillsUploadName:"技能名称（英文）",skillsUploadNamePlaceholder:"如 my-skill",skillsUploadFile:"文件",skillsUploadFileHint:"SKILL.md 或包含 SKILL.md 的 .zip",skillsUploadSingleHint:"单文件必须为 SKILL.md",skillsUploadZipHint:"压缩包必须包含 SKILL.md",skillsUploadSubmit:"上传",skillsUploadSuccess:"技能上传成功",skillsDelete:"删除",skillsDeleteConfirm:"确定删除此技能？",skillsSource:"来源",skillsPath:"路径",skillsNoDoc:"暂无文档。",skillsEligible:"可用",skillsDisabled:"已禁用",skillsRequiresBins:"需要命令",skillsRequiresEnv:"需要环境变量",skillsRequiresConfig:"需要配置",skillsMissing:"缺失",nodesTitle:"节点",nodesSub:"已配对设备与在线连接。",nodesNoFound:"未找到节点。",nodesDevices:"设备",nodesDevicesSub:"配对请求与角色令牌。",nodesPending:"待处理",nodesPaired:"已配对",nodesNoPairedDevices:"暂无已配对设备。",nodesRoleLabel:"角色：",nodesRoleNone:"角色：-",nodesRepairSuffix:" · 修复",nodesRequested:"请求于 ",nodesApprove:"批准",nodesReject:"拒绝",nodesRolesLabel:"角色：",nodesScopesLabel:"范围：",nodesTokensNone:"令牌：无",nodesTokens:"令牌",nodesTokenRevoked:"已撤销",nodesTokenActive:"有效",nodesRotate:"轮换",nodesRevoke:"撤销",nodesBindingTitle:"Exec 节点绑定",nodesBindingSub:"在使用 ",nodesBindingFormModeHint:"请在 Config 选项卡中切换到表单模式以在此编辑绑定。",nodesLoadConfigHint:"加载配置以编辑绑定。",nodesLoadConfig:"加载配置",nodesDefaultBinding:"默认绑定",nodesDefaultBindingSub:"当代理未覆盖节点绑定时使用。",nodesNodeLabel:"节点",nodesAnyNode:"任意节点",nodesNoNodesSystemRun:"没有支持 system.run 的节点。",nodesNoAgentsFound:"未找到代理。",nodesExecApprovalsTitle:"Exec 审批",nodesExecApprovalsSub:"exec host=gateway/node 的允许列表与审批策略。",nodesLoadExecApprovalsHint:"加载 exec 审批以编辑允许列表。",nodesLoadApprovals:"加载审批",nodesTarget:"目标",nodesTargetSub:"网关编辑本地审批；节点编辑所选节点。",nodesHost:"主机",nodesHostGateway:"网关",nodesHostNode:"节点",nodesSelectNode:"选择节点",nodesNoNodesExecApprovals:"尚无节点提供 exec 审批。",nodesScope:"范围",nodesDefaults:"默认",nodesSecurity:"安全",nodesSecurityDefaultSub:"默认安全模式。",nodesSecurityAgentSubPrefix:"默认：",nodesMode:"模式",nodesUseDefaultPrefix:"使用默认（",nodesUseDefaultButton:"使用默认",nodesSecurityDeny:"拒绝",nodesSecurityAllowlist:"允许列表",nodesSecurityFull:"完全",nodesAsk:"询问",nodesAskDefaultSub:"默认提示策略。",nodesAskAgentSubPrefix:"默认：",nodesAskOff:"关",nodesAskOnMiss:"缺失时",nodesAskAlways:"始终",nodesAskFallback:"询问回退",nodesAskFallbackDefaultSub:"当 UI 提示不可用时应用。",nodesAskFallbackAgentSubPrefix:"默认：",nodesFallback:"回退",nodesAutoAllowSkills:"自动允许技能 CLI",nodesAutoAllowSkillsDefaultSub:"允许网关列出的技能可执行文件。",nodesAutoAllowSkillsUsingDefault:"使用默认（",nodesAutoAllowSkillsOverride:"覆盖（",nodesEnabled:"启用",nodesAllowlist:"允许列表",nodesAllowlistSub:"不区分大小写的 glob 模式。",nodesAddPattern:"添加模式",nodesNoAllowlistEntries:"尚无允许列表条目。",nodesNewPattern:"新模式",nodesLastUsedPrefix:"上次使用：",nodesPattern:"模式",nodesRemove:"移除",nodesDefaultAgent:"默认代理",nodesAgent:"代理",nodesUsesDefault:"使用默认（",nodesOverride:"覆盖：",nodesBinding:"绑定",nodesChipPaired:"已配对",nodesChipUnpaired:"未配对",nodesConnected:"已连接",nodesOffline:"离线",nodesNever:"从未",configEnv:"环境",configUpdate:"更新",configAgents:"代理",configAuth:"认证",configChannels:"通道",configMessages:"消息",configCommands:"命令",configHooks:"钩子",configSkills:"技能",configTools:"工具",configGateway:"网关",configWizard:"设置向导",configMeta:"元数据",configLogging:"日志",configBrowser:"浏览器",configUi:"界面",configModels:"模型",configBindings:"绑定",configBroadcast:"广播",configAudio:"音频",configSession:"会话",configCron:"定时",configWeb:"Web",configDiscovery:"发现",configCanvasHost:"画布主机",configTalk:"语音",configPlugins:"插件",configEnvVars:"环境变量",configEnvVarsDesc:"传入网关进程的环境变量",configUpdatesDesc:"自动更新与发布渠道",configAgentsDesc:"代理配置、模型与身份",configAuthDesc:"API 密钥与认证配置",configChannelsDesc:"消息通道（Telegram、Discord、Slack 等）",configMessagesDesc:"消息处理与路由",configCommandsDesc:"自定义斜杠命令",configHooksDesc:"Webhook 与事件钩子",configSkillsDesc:"技能包与能力",configToolsDesc:"工具配置（浏览器、搜索等）",configGatewayDesc:"网关服务（端口、认证、绑定）",configWizardDesc:"设置向导状态与历史",configMetaDesc:"网关元数据与版本",configLoggingDesc:"日志级别与输出",configBrowserDesc:"浏览器自动化",configUiDesc:"界面偏好",configModelsDesc:"AI 模型与提供商",configBindingsDesc:"快捷键绑定",configBroadcastDesc:"广播与通知",configAudioDesc:"音频输入/输出",configSessionDesc:"会话管理与持久化",configCronDesc:"定时任务与自动化",configWebDesc:"Web 服务与 API",configDiscoveryDesc:"服务发现与网络",configCanvasHostDesc:"画布渲染与显示",configTalkDesc:"语音与朗读",configPluginsDesc:"插件管理",configSettingsTitle:"设置",configSearchPlaceholder:"搜索设置…",configAllSettings:"全部设置",configForm:"表单",configRaw:"原始",configUnsavedChanges:"未保存的更改",configUnsavedChangesLabel:"未保存的更改",configOneUnsavedChange:"1 项未保存的更改",configNoChanges:"无更改",configApplying:"应用中…",configApply:"应用",configUpdating:"更新中…",configUpdateButton:"更新",configViewPrefix:"查看 ",configPendingChange:"项待处理更改",configPendingChanges:"项待处理更改",configLoadingSchema:"正在加载架构…",configFormUnsafeWarning:"表单视图无法安全编辑部分字段，请使用原始模式以免丢失配置项。",configRawJson5:"原始 JSON5",configValidityValid:"有效",configValidityInvalid:"无效",configValidityUnknown:"未知",configSchemaUnavailable:"架构不可用。",configUnsupportedSchema:"不支持的架构，请使用原始模式。",configNoSettingsMatchPrefix:"没有匹配「",configNoSettingsMatchSuffix:"」的设置",configNoSettingsInSection:"本部分暂无设置",configUnsupportedSchemaNode:"不支持的架构节点，请使用原始模式。",configSubnavAll:"全部",envVarsSection:"Vars (env.vars)",envModelEnvSection:"模型环境变量 (env.modelEnv)",envShellEnvSection:"Shell 环境 (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"添加",envVarsDelete:"删除",envVarsSave:"保存",envVarsEmpty:"暂无环境变量，点击添加创建。",envVarsKeyPlaceholder:"如 API_KEY",envVarsValuePlaceholder:"如 your-secret-value",debugSnapshots:"快照",debugSnapshotsSub:"状态、健康与心跳数据。",debugStatus:"状态",debugHealth:"健康",debugLastHeartbeat:"最近心跳",debugSecurityAudit:"安全审计",debugManualRpc:"手动 RPC",debugManualRpcSub:"使用 JSON 参数发送原始网关方法。",debugMethod:"方法",debugParams:"参数",debugCall:"调用",debugCritical:"严重",debugWarnings:"警告",debugNoCritical:"无严重问题",debugInfo:"信息",debugSecurityAuditDetails:"运行 openclaw security audit --deep 查看详细信息。",debugModels:"模型",debugModelsSub:"来自 models.list 的目录。",debugEventLog:"事件日志",debugEventLogSub:"最新的网关事件。",debugNoEvents:"暂无事件。",logsTitle:"日志",logsSub:"网关文件日志（JSONL）。",logsExportFiltered:"导出已筛选",logsExportVisible:"导出可见"},Xc={en:Yc,zh:Zc};function o(e){return Xc[Oa()][e]}const ed={env:{label:"configEnvVars",desc:"configEnvVarsDesc"},update:{label:"configUpdate",desc:"configUpdatesDesc"},agents:{label:"configAgents",desc:"configAgentsDesc"},auth:{label:"configAuth",desc:"configAuthDesc"},channels:{label:"configChannels",desc:"configChannelsDesc"},messages:{label:"configMessages",desc:"configMessagesDesc"},commands:{label:"configCommands",desc:"configCommandsDesc"},hooks:{label:"configHooks",desc:"configHooksDesc"},skills:{label:"configSkills",desc:"configSkillsDesc"},tools:{label:"configTools",desc:"configToolsDesc"},gateway:{label:"configGateway",desc:"configGatewayDesc"},wizard:{label:"configWizard",desc:"configWizardDesc"},meta:{label:"configMeta",desc:"configMetaDesc"},logging:{label:"configLogging",desc:"configLoggingDesc"},browser:{label:"configBrowser",desc:"configBrowserDesc"},ui:{label:"configUi",desc:"configUiDesc"},models:{label:"configModels",desc:"configModelsDesc"},bindings:{label:"configBindings",desc:"configBindingsDesc"},broadcast:{label:"configBroadcast",desc:"configBroadcastDesc"},audio:{label:"configAudio",desc:"configAudioDesc"},session:{label:"configSession",desc:"configSessionDesc"},cron:{label:"configCron",desc:"configCronDesc"},web:{label:"configWeb",desc:"configWebDesc"},discovery:{label:"configDiscovery",desc:"configDiscoveryDesc"},canvasHost:{label:"configCanvasHost",desc:"configCanvasHostDesc"},talk:{label:"configTalk",desc:"configTalkDesc"},plugins:{label:"configPlugins",desc:"configPluginsDesc"}};function Ba(e){const t=ed[e];return t?{label:o(t.label),description:o(t.desc)}:{label:e,description:""}}function td(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function nd(e){const{state:t,callbacks:n,accountId:s}=e,a=td(t),i=(d,u,p={})=>{const{type:m="text",placeholder:f,maxLength:h,help:r}=p,g=t.values[d]??"",y=t.fieldErrors[d],A=`nostr-profile-${d}`;return m==="textarea"?c`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${A}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${u}
          </label>
          <textarea
            id="${A}"
            .value=${g}
            placeholder=${f??""}
            maxlength=${h??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${S=>{const w=S.target;n.onFieldChange(d,w.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${r?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${r}</div>`:v}
          ${y?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${y}</div>`:v}
        </div>
      `:c`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${A}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${u}
        </label>
        <input
          id="${A}"
          type=${m}
          .value=${g}
          placeholder=${f??""}
          maxlength=${h??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${S=>{const w=S.target;n.onFieldChange(d,w.value)}}
          ?disabled=${t.saving}
        />
        ${r?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${r}</div>`:v}
        ${y?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${y}</div>`:v}
      </div>
    `},l=()=>{const d=t.values.picture;return d?c`
      <div style="margin-bottom: 12px;">
        <img
          src=${d}
          alt=${o("nostrProfilePreview")}
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${u=>{const p=u.target;p.style.display="none"}}
          @load=${u=>{const p=u.target;p.style.display="block"}}
        />
      </div>
    `:v};return c`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">${o("nostrEditProfile")}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${o("nostrAccount")}: ${s}</div>
      </div>

      ${t.error?c`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:v}

      ${t.success?c`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:v}

      ${l()}

      ${i("name",o("nostrUsername"),{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${i("displayName",o("nostrDisplayName"),{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${i("about",o("nostrBio"),{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${i("picture",o("nostrAvatarUrl"),{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?c`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">${o("nostrAdvanced")}</div>

              ${i("banner",o("nostrBannerUrl"),{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${i("website",o("nostrWebsite"),{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${i("nip05",o("nostrNip05"),{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${i("lud16",o("nostrLud16"),{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:v}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!a}
        >
          ${t.saving?o("commonSaving"):o("nostrSavePublish")}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?o("nostrImporting"):o("nostrImportRelays")}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?o("nostrHideAdvanced"):o("nostrShowAdvanced")}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          ${o("commonCancel")}
        </button>
      </div>

      ${a?c`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                ${o("nostrUnsavedChanges")}
              </div>
            `:v}
    </div>
  `}function sd(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function ad(e,t){await jc(e,t),await ke(e,!0)}async function od(e){await qc(e),await ke(e,!0)}async function id(e){await Wc(e),await ke(e,!0)}async function ld(e){const t=e.configForm?.channels,n=t!=null&&typeof t=="object";n&&!window.confirm(o("channelsConfigSaveConfirm"))||(n?await Ie(e,{channels:t}):await ln(e),await J(e),await ke(e,!0))}async function rd(e){await J(e),await ke(e,!0)}function cd(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...a]=n.split(":");if(!s||a.length===0)continue;const i=s.trim(),l=a.join(":").trim();i&&l&&(t[i]=l)}return t}function Dl(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function Ll(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function dd(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=sd(n??void 0)}function ud(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function gd(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function pd(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function md(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=Dl(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(Ll(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.values)}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const i=a?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:i,success:null,fieldErrors:cd(a?.details)};return}if(!a.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await ke(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function fd(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=Dl(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(Ll(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({autoMerge:!0})}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const u=a?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:u,success:null};return}const i=a.merged??a.imported??null,l=i?{...t.values,...i}:t.values,d=!!(l.banner||l.website||l.nip05||l.lud16);e.nostrProfileFormState={...t,importing:!1,values:l,error:null,success:a.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:d},a.saved&&await ke(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function Il(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),a=n.slice(2).join(":");return!s||!a?null:{agentId:s,rest:a}}const ra=450;function $n(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const s=e.querySelector(".chat-thread");if(s){const a=getComputedStyle(s).overflowY;if(a==="auto"||a==="scroll"||s.scrollHeight-s.clientHeight>1)return s}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const s=n();if(!s)return;const a=s.scrollHeight-s.scrollTop-s.clientHeight,i=t&&!e.chatHasAutoScrolled;if(!(i||e.chatUserNearBottom||a<ra)){e.chatNewMessagesBelow=!0;return}i&&(e.chatHasAutoScrolled=!0),s.scrollTop=s.scrollHeight,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const d=i?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const u=n();if(!u)return;const p=u.scrollHeight-u.scrollTop-u.clientHeight;(i||e.chatUserNearBottom||p<ra)&&(u.scrollTop=u.scrollHeight,e.chatUserNearBottom=!0)},d)})})}function _l(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function hd(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<ra,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function vd(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function ti(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function bd(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),a=document.createElement("a"),i=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");a.href=s,a.download=`openclaw-logs-${t}-${i}.log`,a.click(),URL.revokeObjectURL(s)}function yd(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}async function ps(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,a]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const i=s;e.debugModels=Array.isArray(i?.models)?i?.models:[],e.debugHeartbeat=a}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function xd(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const $d=2e3,wd=new Set(["trace","debug","info","warn","error","fatal"]);function kd(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function Sd(e){if(typeof e!="string")return null;const t=e.toLowerCase();return wd.has(t)?t:null}function Ad(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,a=Sd(n?.logLevelName??n?.level),i=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,l=kd(i);let d=null;l&&(typeof l.subsystem=="string"?d=l.subsystem:typeof l.module=="string"&&(d=l.module)),!d&&i&&i.length<120&&(d=i);let u=null;return typeof t[1]=="string"?u=t[1]:!l&&typeof t[0]=="string"?u=t[0]:typeof t.message=="string"&&(u=t.message),{raw:e,time:s,level:a,subsystem:d,message:u??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ha(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),i=(Array.isArray(s.lines)?s.lines.filter(d=>typeof d=="string"):[]).map(Ad),l=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=l?i:[...e.logsEntries,...i].slice(-$d),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function ms(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function Cd(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{ms(e,{quiet:!0})},5e3))}function Td(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Ka(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Ha(e,{quiet:!0})},2e3))}function za(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function ja(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&ps(e)},3e3))}function qa(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function Rl(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function Nl(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const a=await e.client.request("agent.identity.get",{agentId:s});a&&(e.agentIdentityById={...e.agentIdentityById,[s]:a})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function zn(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function Wa(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(a=>a.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}const Md=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,_n=/<\s*\/?\s*final\b[^<>]*>/gi,ni=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function si(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const a of e.matchAll(n)){const i=(a.index??0)+a[1].length;t.push({start:i,end:i+a[0].length-a[1].length})}const s=/`+[^`]+`+/g;for(const a of e.matchAll(s)){const i=a.index??0,l=i+a[0].length;t.some(u=>i>=u.start&&l<=u.end)||t.push({start:i,end:l})}return t.sort((a,i)=>a.start-i.start),t}function ai(e,t){return t.some(n=>e>=n.start&&e<n.end)}function Ed(e,t){return e.trimStart()}function Pd(e,t){if(!e||!Md.test(e))return e;let n=e;if(_n.test(n)){_n.lastIndex=0;const d=[],u=si(n);for(const p of n.matchAll(_n)){const m=p.index??0;d.push({start:m,length:p[0].length,inCode:ai(m,u)})}for(let p=d.length-1;p>=0;p--){const m=d[p];m.inCode||(n=n.slice(0,m.start)+n.slice(m.start+m.length))}}else _n.lastIndex=0;const s=si(n);ni.lastIndex=0;let a="",i=0,l=!1;for(const d of n.matchAll(ni)){const u=d.index??0,p=d[1]==="/";ai(u,s)||(l?p&&(l=!1):(a+=n.slice(i,u),p||(l=!0)),i=u+d[0].length)}return a+=n.slice(i),Ed(a)}function xt(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function Q(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e,n=Math.abs(t),s=t<0?"from now":"ago",a=Math.round(n/1e3);if(a<60)return t<0?"in <1m":`${a}s ago`;const i=Math.round(a/60);if(i<60)return`${i}m ${s}`;const l=Math.round(i/60);return l<48?`${l}h ${s}`:`${Math.round(l/24)}d ${s}`}function Fl(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const s=Math.round(n/60);return s<48?`${s}h`:`${Math.round(s/24)}d`}function ca(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function Qn(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function Ul(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function Jn(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Ns(e){return Pd(e)}async function wn(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function fs(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function Dd(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=Jn(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function Ld(e){if(e.payloadKind==="systemEvent"){const a=e.payloadText.trim();if(!a)throw new Error("System event text required.");return{kind:"systemEvent",text:a}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=Jn(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function Id(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=Dd(e.cronForm),n=Ld(e.cronForm),s=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,a=e.cronForm.agentId.trim(),i={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:a||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:s};if(!i.name)throw new Error("Name required.");await e.client.request("cron.add",i),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await fs(e),await wn(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function _d(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await fs(e),await wn(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function Rd(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await Ol(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function Nd(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await fs(e),await wn(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function Ol(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const Bl="openclaw.device.auth.v1";function Va(e){return e.trim()}function Fd(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function Ga(){try{const e=window.localStorage.getItem(Bl);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function Hl(e){try{window.localStorage.setItem(Bl,JSON.stringify(e))}catch{}}function Ud(e){const t=Ga();if(!t||t.deviceId!==e.deviceId)return null;const n=Va(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function Kl(e){const t=Va(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=Ga();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const a={token:e.token,role:t,scopes:Fd(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=a,Hl(n),a}function zl(e){const t=Ga();if(!t||t.deviceId!==e.deviceId)return;const n=Va(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],Hl(s)}const jl={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:fe,n:jn,Gx:oi,Gy:ii,a:Fs,d:Us,h:Od}=jl,$t=32,Qa=64,Bd=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},de=(e="")=>{const t=new Error(e);throw Bd(t,de),t},Hd=e=>typeof e=="bigint",Kd=e=>typeof e=="string",zd=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",nt=(e,t,n="")=>{const s=zd(e),a=e?.length,i=t!==void 0;if(!s||i&&a!==t){const l=n&&`"${n}" `,d=i?` of length ${t}`:"",u=s?`length=${a}`:`type=${typeof e}`;de(l+"expected Uint8Array"+d+", got "+u)}return e},hs=e=>new Uint8Array(e),ql=e=>Uint8Array.from(e),Wl=(e,t)=>e.toString(16).padStart(t,"0"),Vl=e=>Array.from(nt(e)).map(t=>Wl(t,2)).join(""),We={_0:48,_9:57,A:65,F:70,a:97,f:102},li=e=>{if(e>=We._0&&e<=We._9)return e-We._0;if(e>=We.A&&e<=We.F)return e-(We.A-10);if(e>=We.a&&e<=We.f)return e-(We.a-10)},Gl=e=>{const t="hex invalid";if(!Kd(e))return de(t);const n=e.length,s=n/2;if(n%2)return de(t);const a=hs(s);for(let i=0,l=0;i<s;i++,l+=2){const d=li(e.charCodeAt(l)),u=li(e.charCodeAt(l+1));if(d===void 0||u===void 0)return de(t);a[i]=d*16+u}return a},Ql=()=>globalThis?.crypto,jd=()=>Ql()?.subtle??de("crypto.subtle must be defined, consider polyfill"),bn=(...e)=>{const t=hs(e.reduce((s,a)=>s+nt(a).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},qd=(e=$t)=>Ql().getRandomValues(hs(e)),Yn=BigInt,ut=(e,t,n,s="bad number: out of range")=>Hd(e)&&t<=e&&e<n?e:de(s),F=(e,t=fe)=>{const n=e%t;return n>=0n?n:t+n},Jl=e=>F(e,jn),Wd=(e,t)=>{(e===0n||t<=0n)&&de("no inverse n="+e+" mod="+t);let n=F(e,t),s=t,a=0n,i=1n;for(;n!==0n;){const l=s/n,d=s%n,u=a-i*l;s=n,n=d,a=i,i=u}return s===1n?F(a,t):de("no inverse")},Vd=e=>{const t=er[e];return typeof t!="function"&&de("hashes."+e+" not set"),t},Os=e=>e instanceof Me?e:de("Point expected"),da=2n**256n;class Me{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,a){const i=da;this.X=ut(t,0n,i),this.Y=ut(n,0n,i),this.Z=ut(s,1n,i),this.T=ut(a,0n,i),Object.freeze(this)}static CURVE(){return jl}static fromAffine(t){return new Me(t.x,t.y,1n,F(t.x*t.y))}static fromBytes(t,n=!1){const s=Us,a=ql(nt(t,$t)),i=t[31];a[31]=i&-129;const l=Zl(a);ut(l,0n,n?da:fe);const u=F(l*l),p=F(u-1n),m=F(s*u+1n);let{isValid:f,value:h}=Qd(p,m);f||de("bad point: y not sqrt");const r=(h&1n)===1n,g=(i&128)!==0;return!n&&h===0n&&g&&de("bad point: x==0, isLastByteOdd"),g!==r&&(h=F(-h)),new Me(h,l,1n,F(h*l))}static fromHex(t,n){return Me.fromBytes(Gl(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=Fs,n=Us,s=this;if(s.is0())return de("bad point: ZERO");const{X:a,Y:i,Z:l,T:d}=s,u=F(a*a),p=F(i*i),m=F(l*l),f=F(m*m),h=F(u*t),r=F(m*F(h+p)),g=F(f+F(n*F(u*p)));if(r!==g)return de("bad point: equation left != right (1)");const y=F(a*i),A=F(l*d);return y!==A?de("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:a}=this,{X:i,Y:l,Z:d}=Os(t),u=F(n*d),p=F(i*a),m=F(s*d),f=F(l*a);return u===p&&m===f}is0(){return this.equals(Ut)}negate(){return new Me(F(-this.X),this.Y,this.Z,F(-this.T))}double(){const{X:t,Y:n,Z:s}=this,a=Fs,i=F(t*t),l=F(n*n),d=F(2n*F(s*s)),u=F(a*i),p=t+n,m=F(F(p*p)-i-l),f=u+l,h=f-d,r=u-l,g=F(m*h),y=F(f*r),A=F(m*r),S=F(h*f);return new Me(g,y,S,A)}add(t){const{X:n,Y:s,Z:a,T:i}=this,{X:l,Y:d,Z:u,T:p}=Os(t),m=Fs,f=Us,h=F(n*l),r=F(s*d),g=F(i*f*p),y=F(a*u),A=F((n+s)*(l+d)-h-r),S=F(y-g),w=F(y+g),T=F(r-m*h),C=F(A*S),M=F(w*T),E=F(A*T),I=F(S*w);return new Me(C,M,I,E)}subtract(t){return this.add(Os(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return Ut;if(ut(t,1n,jn),t===1n)return this;if(this.equals(wt))return iu(t).p;let s=Ut,a=wt;for(let i=this;t>0n;i=i.double(),t>>=1n)t&1n?s=s.add(i):n&&(a=a.add(i));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(Ut))return{x:0n,y:1n};const a=Wd(s,fe);F(s*a)!==1n&&de("invalid inverse");const i=F(t*a),l=F(n*a);return{x:i,y:l}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=Yl(n);return s[31]|=t&1n?128:0,s}toHex(){return Vl(this.toBytes())}clearCofactor(){return this.multiply(Yn(Od),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(jn/2n,!1).double();return jn%2n&&(t=t.add(this)),t.is0()}}const wt=new Me(oi,ii,1n,F(oi*ii)),Ut=new Me(0n,1n,1n,0n);Me.BASE=wt;Me.ZERO=Ut;const Yl=e=>Gl(Wl(ut(e,0n,da),Qa)).reverse(),Zl=e=>Yn("0x"+Vl(ql(nt(e)).reverse())),Ne=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=fe;return n},Gd=e=>{const n=e*e%fe*e%fe,s=Ne(n,2n)*n%fe,a=Ne(s,1n)*e%fe,i=Ne(a,5n)*a%fe,l=Ne(i,10n)*i%fe,d=Ne(l,20n)*l%fe,u=Ne(d,40n)*d%fe,p=Ne(u,80n)*u%fe,m=Ne(p,80n)*u%fe,f=Ne(m,10n)*i%fe;return{pow_p_5_8:Ne(f,2n)*e%fe,b2:n}},ri=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Qd=(e,t)=>{const n=F(t*t*t),s=F(n*n*t),a=Gd(e*s).pow_p_5_8;let i=F(e*n*a);const l=F(t*i*i),d=i,u=F(i*ri),p=l===e,m=l===F(-e),f=l===F(-e*ri);return p&&(i=d),(m||f)&&(i=u),(F(i)&1n)===1n&&(i=F(-i)),{isValid:p||m,value:i}},ua=e=>Jl(Zl(e)),Ja=(...e)=>er.sha512Async(bn(...e)),Jd=(...e)=>Vd("sha512")(bn(...e)),Xl=e=>{const t=e.slice(0,$t);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice($t,Qa),s=ua(t),a=wt.multiply(s),i=a.toBytes();return{head:t,prefix:n,scalar:s,point:a,pointBytes:i}},Ya=e=>Ja(nt(e,$t)).then(Xl),Yd=e=>Xl(Jd(nt(e,$t))),Zd=e=>Ya(e).then(t=>t.pointBytes),Xd=e=>Ja(e.hashable).then(e.finish),eu=(e,t,n)=>{const{pointBytes:s,scalar:a}=e,i=ua(t),l=wt.multiply(i).toBytes();return{hashable:bn(l,s,n),finish:p=>{const m=Jl(i+ua(p)*a);return nt(bn(l,Yl(m)),Qa)}}},tu=async(e,t)=>{const n=nt(e),s=await Ya(t),a=await Ja(s.prefix,n);return Xd(eu(s,a,n))},er={sha512Async:async e=>{const t=jd(),n=bn(e);return hs(await t.digest("SHA-512",n.buffer))},sha512:void 0},nu=(e=qd($t))=>e,su={getExtendedPublicKeyAsync:Ya,getExtendedPublicKey:Yd,randomSecretKey:nu},Zn=8,au=256,tr=Math.ceil(au/Zn)+1,ga=2**(Zn-1),ou=()=>{const e=[];let t=wt,n=t;for(let s=0;s<tr;s++){n=t,e.push(n);for(let a=1;a<ga;a++)n=n.add(t),e.push(n);t=n.double()}return e};let ci;const di=(e,t)=>{const n=t.negate();return e?n:t},iu=e=>{const t=ci||(ci=ou());let n=Ut,s=wt;const a=2**Zn,i=a,l=Yn(a-1),d=Yn(Zn);for(let u=0;u<tr;u++){let p=Number(e&l);e>>=d,p>ga&&(p-=i,e+=1n);const m=u*ga,f=m,h=m+Math.abs(p)-1,r=u%2!==0,g=p<0;p===0?s=s.add(di(r,t[f])):n=n.add(di(g,t[h]))}return e!==0n&&de("invalid wnaf"),{p:n,f:s}},Bs="openclaw-device-identity-v1";function pa(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function nr(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),a=new Uint8Array(s.length);for(let i=0;i<s.length;i+=1)a[i]=s.charCodeAt(i);return a}function lu(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function sr(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return lu(new Uint8Array(t))}async function ru(){const e=su.randomSecretKey(),t=await Zd(e);return{deviceId:await sr(t),publicKey:pa(t),privateKey:pa(e)}}async function Za(){try{const n=localStorage.getItem(Bs);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const a=await sr(nr(s.publicKey));if(a!==s.deviceId){const i={...s,deviceId:a};return localStorage.setItem(Bs,JSON.stringify(i)),{deviceId:a,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await ru(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(Bs,JSON.stringify(t)),e}async function cu(e,t){const n=nr(e),s=new TextEncoder().encode(t),a=await tu(s,n);return pa(a)}async function st(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function du(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await st(e)}catch(n){e.devicesError=String(n)}}async function uu(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await st(e)}catch(s){e.devicesError=String(s)}}async function gu(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await Za(),a=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&Kl({deviceId:s.deviceId,role:a,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await st(e)}catch(n){e.devicesError=String(n)}}async function pu(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await Za();t.deviceId===s.deviceId&&zl({deviceId:s.deviceId,role:t.role}),await st(e)}catch(s){e.devicesError=String(s)}}function mu(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function fu(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function Xa(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=mu(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);hu(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function hu(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=ne(t.file??{}))}async function vu(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},a=fu(t,{file:s,baseHash:n});if(!a){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(a.method,a.params),e.execApprovalsDirty=!1,await Xa(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function bu(e,t,n){const s=ne(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});gs(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function yu(e,t){const n=ne(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});El(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function eo(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function Ge(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,a=t?.activeMinutes??Jn(e.sessionsFilterActive,0),i=t?.limit??Jn(e.sessionsFilterLimit,0),l={includeGlobal:n,includeUnknown:s};a>0&&(l.activeMinutes=a),i>0&&(l.limit=i);const d=await e.client.request("sessions.list",l);d&&(e.sessionsResult=d)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function xu(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await Ge(e)}catch(a){e.sessionsError=String(a)}}async function $u(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),e.sessionsLoading=!1,await Ge(e)}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}async function wu(e,t){if(!e.client||!e.connected||e.sessionsLoading)return;const n=Array.from(new Set(t.filter(i=>i&&i!=="agent.main.main")));if(n.length===0)return;const s=n.length===1?`Delete session "${n[0]}"?`:`Delete ${n.length} sessions?

First: "${n[0]}"`;if(window.confirm(`${s}

Deletes the session entries and archives their transcripts.`)){e.sessionsLoading=!0,e.sessionsError=null;try{for(const i of n)await e.client.request("sessions.delete",{key:i,deleteTranscript:!0});e.sessionsLoading=!1,await Ge(e)}catch(i){e.sessionsError=String(i)}finally{e.sessionsLoading=!1}}}function zt(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function qt(e){return e instanceof Error?e.message:String(e)}async function kt(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=qt(n)}finally{e.skillsLoading=!1}}}function ku(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function Su(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await kt(e),zt(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const a=qt(s);e.skillsError=a,zt(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}async function Au(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await kt(e),zt(e,t,{kind:"success",message:"API key saved"})}catch(n){const s=qt(n);e.skillsError=s,zt(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function Cu(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const a=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await kt(e),zt(e,t,{kind:"success",message:a?.message??"Installed"})}catch(a){const i=qt(a);e.skillsError=i,zt(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}function to(e){return e.replace(/^ws/,"http")}async function Tu(e,t,n){const s=e.gatewayUrl?to(e.gatewayUrl):"";if(!s)return{ok:!1,error:"Gateway URL not configured"};const a=new FormData;a.append("name",t.trim()),a.append("file",n);try{const i=await fetch(`${s.replace(/\/$/,"")}/api/skills/upload`,{method:"POST",body:a}),l=await i.json();return i.ok?{ok:!0}:{ok:!1,error:l.error??`Upload failed (${i.status})`,template:l.template}}catch(i){return{ok:!1,error:i instanceof Error?i.message:String(i)}}}async function Mu(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.delete",{skillKey:t}),await kt(e,{clearMessages:!0})}catch(n){e.skillsError=qt(n)}finally{e.skillsBusyKey=null}}}async function Eu(e,t){if(!(!e.client||!e.connected)){e.skillsSkillDocLoading=!0,e.skillsSkillDocError=null,e.skillsSkillDocContent=null;try{const n=await e.client.request("skills.getDoc",{skillKey:t});e.skillsSkillDocContent=n?.content??null}catch(n){e.skillsSkillDocError=qt(n)}finally{e.skillsSkillDocLoading=!1}}}async function Wt(e){if(!(!e.client||!e.connected)){e.digitalEmployeesLoading=!0,e.digitalEmployeesError=null;try{const t=await e.client.request("employees.list",{});e.digitalEmployees=t?.employees??[]}catch(t){e.digitalEmployeesError=String(t)}finally{e.digitalEmployeesLoading=!1}}}function ar(e){let t=e.trim();if(!t)return"";const n=[/\.zip$/i,/\.tar\.gz$/i,/\.tgz$/i,/\.md$/i];for(const s of n)t=t.replace(s,"");return t.trim()||""}async function Pu(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeCreateName?.trim();if(!t){e.digitalEmployeeCreateError="名称不能为空";return}e.digitalEmployeeCreateBusy=!0,e.digitalEmployeeCreateError=null,e.digitalEmployeeSkillUploadError=null;let n;const s=e.digitalEmployeeCreateMcpJson?.trim();if(s)try{const a=JSON.parse(s);a&&typeof a=="object"&&Object.keys(a).length>0&&(n=a)}catch{e.digitalEmployeeCreateError="MCP 配置 JSON 格式无效",e.digitalEmployeeCreateBusy=!1;return}try{const a={name:t,description:e.digitalEmployeeCreateDescription??"",prompt:e.digitalEmployeeCreatePrompt??"",enabled:!0};n&&(a.mcpServers=n);const l=(await e.client.request("employees.create",a))?.id??Du(t),d=e.digitalEmployeeSkillUploadFiles??[],u=e.digitalEmployeeSkillUploadName?.trim();for(let p=0;p<d.length;p++){const m=d[p],f=u&&d.length===1?u:ar(m.name),h=await or(e,l,f,m);if(!h.ok){e.digitalEmployeeCreateError=h.error??"技能文件上传失败";return}}e.digitalEmployeeCreateName="",e.digitalEmployeeCreateDescription="",e.digitalEmployeeCreatePrompt="",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null,await Wt(e)}catch(a){e.digitalEmployeeCreateError=String(a)}finally{e.digitalEmployeeCreateBusy=!1}}function Du(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t)s>="a"&&s<="z"||s>="0"&&s<="9"?n+=s:(s==="-"||s==="_"||s===" ")&&(n+="-");return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||"employee"}async function Lu(e,t,n){if(!(!e.client||!e.connected))try{await e.client.request("employees.create",{id:t,enabled:n}),await Wt(e)}catch(s){e.digitalEmployeesError=String(s)}}async function Iu(e,t){if(!(!e.client||!e.connected))try{await e.client.request("employees.delete",{id:t}),await Wt(e)}catch(n){e.digitalEmployeesError=String(n)}}async function _u(e,t){if(!e.client||!e.connected)return null;try{return await e.client.request("employees.get",{id:t})??null}catch{return null}}async function Ru(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeEditId?.trim();if(!t){e.digitalEmployeeEditError="员工 ID 不能为空";return}e.digitalEmployeeEditBusy=!0,e.digitalEmployeeEditError=null;let n;const s=e.digitalEmployeeEditMcpJson?.trim();try{if(s){const a=JSON.parse(s);a&&typeof a=="object"&&(n=a)}else n={}}catch{e.digitalEmployeeEditError="MCP 配置 JSON 格式无效",e.digitalEmployeeEditBusy=!1;return}try{const a={id:t,description:e.digitalEmployeeEditDescription??"",prompt:e.digitalEmployeeEditPrompt??"",enabled:e.digitalEmployeeEditEnabled!==!1,mcpServers:n??{}};await e.client.request("employees.create",a);for(const l of e.digitalEmployeeEditSkillsToDelete??[])if(!await Nu(e,t,l)){e.digitalEmployeeEditError=`删除技能 ${l} 失败`;return}const i=e.digitalEmployeeEditSkillFilesToUpload??[];for(let l=0;l<i.length;l++){const d=i[l],u=ar(d.name),p=await or(e,t,u,d);if(!p.ok){e.digitalEmployeeEditError=p.error??"技能文件上传失败";return}}e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditId="",e.digitalEmployeeEditName="",e.digitalEmployeeEditDescription="",e.digitalEmployeeEditPrompt="",e.digitalEmployeeEditMcpJson="",e.digitalEmployeeEditSkillNames=[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],await Wt(e)}catch(a){e.digitalEmployeeEditError=String(a)}finally{e.digitalEmployeeEditBusy=!1}}async function Nu(e,t,n){const s=e.settings.gatewayUrl?.trim();if(!s)return!1;const a=to(s);if(!a)return!1;try{const i=new URL(`${a.replace(/\/$/,"")}/api/employee-skills/delete`);i.searchParams.set("employeeId",t.trim()),i.searchParams.set("name",n.trim());const l=await fetch(i.toString(),{method:"DELETE"}),d=await l.json();return l.ok&&d.ok===!0}catch{return!1}}async function or(e,t,n,s){const a=e.settings.gatewayUrl?.trim();if(!a)return{ok:!1,error:"Gateway URL 未配置"};const i=to(a);if(!i)return{ok:!1,error:"Gateway URL 无效"};const l=new FormData;l.append("employeeId",t.trim()),n.trim()&&l.append("name",n.trim()),l.append("file",s);try{const d=await fetch(`${i.replace(/\/$/,"")}/api/employee-skills/upload`,{method:"POST",body:l}),u=await d.json();return!d.ok||u.ok===!1?{ok:!1,error:u.error??`上传失败 (${d.status})`,template:u.template}:{ok:!0}}catch(d){return{ok:!1,error:d instanceof Error?d.message:String(d)}}}async function no(e,t){if(!(!e.client||!e.connected)&&!e.llmTraceLoading){e.llmTraceLoading=!0,e.llmTraceError=null;try{const n=t?.mode??e.llmTraceMode,s=await e.client.request("trace.list",{mode:n});s&&(e.llmTraceResult=s)}catch(n){e.llmTraceError=String(n)}finally{e.llmTraceLoading=!1}}}async function Fu(e,t){if(!e.client||!e.connected)return null;try{return(await e.client.request("trace.content",{sessionId:t}))?.content??null}catch{return null}}function gt(e){const t=e.configForm??e.configSnapshot?.config;if(t&&typeof t=="object"){const n=t.gateway;if(n&&typeof n=="object"){const s=n.llmTrace;e.llmTraceEnabled=s&&typeof s=="object"&&s.enabled===!0;return}}e.llmTraceEnabled=!1}function Uu(e){no(e)}function Ou(e,t){e.llmTraceMode=t,no(e,{mode:t})}function Bu(e,t){e.llmTraceSearch=t}function Hu(e){if(!e.client||!e.connected)return;const t=ne(e.configForm??e.configSnapshot?.config??{});t.gateway||(t.gateway={});const n=t.gateway;n.llmTrace||(n.llmTrace={});const s=n.llmTrace,a=s.enabled!==!0;s.enabled=a,e.llmTraceSaving=!0,e.lastError=null,Ie(e,{gateway:t.gateway}).then(()=>J(e)).then(()=>{gt(e)}).catch(i=>{e.lastError=String(i)}).finally(()=>{e.llmTraceSaving=!1})}async function Ku(e,t){try{const n=await Fu(e,t);if(n){const s=window.open("","_blank");s?(s.document.write(n),s.document.close()):e.llmTraceError="Failed to open new window (popup may be blocked)"}else e.llmTraceError="Failed to load trace content."}catch(n){e.llmTraceError=String(n)}}function ma(e){const t=e.configForm??e.configSnapshot?.config;if(!t||typeof t!="object")return null;const n=t.sandbox;return!n||typeof n!="object"?null:n}async function zu(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{await Ie(e,{sandbox:t}),await J(e)}finally{e.configSaving=!1}}}function so(e){const t=ma(e);return t==null?null:ne(t)}function ju(e){if(!e.client||!e.connected)return;const t=ne(e.configForm??e.configSnapshot?.config??{});(!t.sandbox||typeof t.sandbox!="object")&&(t.sandbox={});const n=t.sandbox;n.enabled=n.enabled!==!0,e.configSaving=!0,e.lastError=null,Ie(e,{sandbox:t.sandbox}).then(()=>J(e)).finally(()=>{e.configSaving=!1})}function qu(e,t,n,s){gs(t,n,s)}async function Wu(e,t){await zu(e,t),e.sandboxForm=so(e)}async function vs(e){if(!(!e.client||!e.connected)){e.approvalsLoading=!0,e.approvalsError=null;try{const t=await e.client.request("approvals.list",{});e.approvalsResult=t??{storePath:"",entries:[]}}catch(t){e.approvalsError=String(t),e.approvalsResult=null}finally{e.approvalsLoading=!1}}}async function Vu(e,t,n,s){!e.client||!e.connected||(await e.client.request("approvals.approve",{requestId:t,approverId:n,ttlSeconds:s??3600}),await vs(e))}async function Gu(e,t,n,s){!e.client||!e.connected||(await e.client.request("approvals.deny",{requestId:t,approverId:n,reason:s??""}),await vs(e))}function Qu(){return[{label:o("tabGroupChat"),tabs:["chat","digitalEmployee"]},{label:o("tabGroupControl"),tabs:["overview","channels","instances","sessions","usage","cron"]},{label:o("tabGroupAgent"),tabs:["models","skills","mcp","llmTrace","sandbox"]},{label:o("tabGroupSettings"),tabs:["config","envVars","logs"]}]}const ir={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",mcp:"/mcp",nodes:"/nodes",chat:"/chat",digitalEmployee:"/digital-employee",config:"/config",envVars:"/env-vars",models:"/models",debug:"/debug",logs:"/logs",llmTrace:"/llm-trace",sandbox:"/sandbox"},lr=new Map(Object.entries(ir).map(([e,t])=>[t,e]));function kn(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function yn(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Sn(e,t=""){const n=kn(t),s=ir[e];return n?`${n}${s}`:s}function rr(e,t=""){const n=kn(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let a=yn(s).toLowerCase();return a.endsWith("/index.html")&&(a="/"),a==="/"?"chat":lr.get(a)??null}function Ju(e){let t=yn(e);if(t.endsWith("/index.html")&&(t=yn(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const a=`/${n.slice(s).join("/")}`.toLowerCase();if(lr.has(a)){const i=n.slice(0,s);return i.length?`/${i.join("/")}`:""}}return`/${n.join("/")}`}function Yu(e){switch(e){case"agents":return"folder";case"chat":return"messageSquare";case"digitalEmployee":return"users";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"mcp":return"folder";case"llmTrace":return"scrollText";case"sandbox":return"sandbox";case"nodes":return"monitor";case"config":return"settings";case"envVars":return"settings";case"models":return"folder";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function fa(e){switch(e){case"agents":return o("navTitleAgents");case"overview":return o("navTitleOverview");case"channels":return o("navTitleChannels");case"instances":return o("navTitleInstances");case"sessions":return o("navTitleSessions");case"usage":return o("navTitleUsage");case"cron":return o("navTitleCron");case"skills":return o("navTitleSkills");case"mcp":return o("navTitleMcp");case"llmTrace":return o("navTitleLlmTrace");case"sandbox":return o("navTitleSandbox");case"nodes":return o("navTitleNodes");case"chat":return o("navTitleChat");case"digitalEmployee":return o("navTitleDigitalEmployee");case"config":return o("navTitleConfig");case"envVars":return o("navTitleEnvVars");case"models":return o("navTitleModels");case"debug":return o("navTitleDebug");case"logs":return o("navTitleLogs");default:return o("navTitleControl")}}const cr="openclaw.control.settings.v1";function Zu(){const t={gatewayUrl:`${location.protocol==="https:"?"wss":"ws"}://${location.host}`,token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"light",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(cr);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function Xu(e){localStorage.setItem(cr,JSON.stringify(e))}const Rn=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,eg=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,Nn=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},tg=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const a=globalThis.document??null;if(!a){t();return}const i=a.documentElement,l=a,d=eg();if(!!l.startViewTransition&&!d){let p=.5,m=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")p=Rn(n.pointerClientX/window.innerWidth),m=Rn(n.pointerClientY/window.innerHeight);else if(n?.element){const f=n.element.getBoundingClientRect();f.width>0&&f.height>0&&typeof window<"u"&&(p=Rn((f.left+f.width/2)/window.innerWidth),m=Rn((f.top+f.height/2)/window.innerHeight))}i.style.setProperty("--theme-switch-x",`${p*100}%`),i.style.setProperty("--theme-switch-y",`${m*100}%`),i.classList.add("theme-transition");try{const f=l.startViewTransition?.(()=>{t()});f?.finished?f.finished.finally(()=>Nn(i)):Nn(i)}catch{Nn(i),t()}return}t(),Nn(i)};function ng(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ao(e){return e==="system"?ng():e}function St(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Xu(n),t.theme!==e.theme&&(e.theme=t.theme,bs(e,ao(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function dr(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&St(e,{...e.settings,lastActiveSessionKey:n})}function sg(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),s=t.get("password"),a=t.get("session"),i=t.get("gatewayUrl");let l=!1;if(n!=null&&(t.delete("token"),l=!0),s!=null){const u=s.trim();u&&(e.password=u),t.delete("password"),l=!0}if(a!=null){const u=a.trim();u&&(e.sessionKey=u,St(e,{...e.settings,sessionKey:u,lastActiveSessionKey:u}))}if(i!=null){const u=i.trim();u&&u!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=u),t.delete("gatewayUrl"),l=!0}if(!l)return;const d=new URL(window.location.href);d.search=t.toString(),window.history.replaceState({},"",d.toString())}function ag(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ka(e):za(e),t==="debug"?ja(e):qa(e),oo(e),gr(e,t,!1)}function og(e,t,n){tg({nextTheme:t,applyTheme:()=>{e.theme=t,St(e,{...e.settings,theme:t}),bs(e,ao(t))},context:n,currentTheme:e.theme})}async function oo(e){if(e.tab==="overview"&&await pr(e),e.tab==="channels"&&await pg(e),e.tab==="instances"&&await eo(e),e.tab==="sessions"&&await Ge(e),e.tab==="cron"&&await Xn(e),e.tab==="skills"&&await kt(e),e.tab==="mcp"&&(await J(e),gt(e)),e.tab==="llmTrace"&&(await J(e),gt(e),await no(e)),e.tab==="sandbox"&&(await J(e),e.sandboxForm=so(e),await vs(e)),e.tab==="digitalEmployee"&&await Wt(e),e.tab==="agents"){await Wa(e),await J(e),gt(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&Nl(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(Rl(e,n),e.agentsPanel==="skills"&&zn(e,n),e.agentsPanel==="channels"&&ke(e,!1),e.agentsPanel==="cron"&&Xn(e))}e.tab==="nodes"&&(await ms(e),await st(e),await J(e),gt(e),await Xa(e)),e.tab==="chat"&&(await xr(e),$n(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await Pl(e),await J(e),gt(e)),(e.tab==="envVars"||e.tab==="models")&&(await J(e),gt(e)),e.tab==="debug"&&(await ps(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Ha(e,{reset:!0}),_l(e,!0))}function ig(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?kn(e):Ju(window.location.pathname)}function lg(e){e.theme=e.settings.theme??"light",bs(e,ao(e.theme))}function bs(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function rg(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&bs(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function cg(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function dg(e,t){if(typeof window>"u")return;const n=rr(window.location.pathname,e.basePath)??"chat";ur(e,n),gr(e,n,t)}function ug(e){if(typeof window>"u")return;const t=rr(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,St(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),ur(e,t)}function ur(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ka(e):za(e),t==="debug"?ja(e):qa(e),e.connected&&oo(e)}function gr(e,t,n){if(typeof window>"u")return;const s=yn(Sn(t,e.basePath)),a=yn(window.location.pathname),i=new URL(window.location.href);t==="chat"&&e.sessionKey?i.searchParams.set("session",e.sessionKey):i.searchParams.delete("session"),a!==s&&(i.pathname=s),n?window.history.replaceState({},"",i.toString()):window.history.pushState({},"",i.toString())}function gg(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function pr(e){await Promise.all([ke(e,!1),eo(e),Ge(e),wn(e),ps(e)])}async function pg(e){await Promise.all([ke(e,!0),Pl(e),J(e)])}async function Xn(e){await Promise.all([ke(e,!1),wn(e),fs(e)])}const ui=50,mg=80,fg=12e4;function hg(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(a=>{if(!a||typeof a!="object")return null;const i=a;return i.type==="text"&&typeof i.text=="string"?i.text:null}).filter(a=>!!a);return s.length===0?null:s.join(`
`)}function gi(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=hg(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=Ul(n,fg);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function vg(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function bg(e){if(e.toolStreamOrder.length<=ui)return;const t=e.toolStreamOrder.length-ui,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function yg(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function ha(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),yg(e)}function xg(e,t=!1){if(t){ha(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>ha(e),mg))}function ys(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],ha(e)}const $g=5e3;function wg(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},$g))}function kg(e,t){if(!t)return;if(t.stream==="compaction"){wg(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},a=typeof s.toolCallId=="string"?s.toolCallId:"";if(!a)return;const i=typeof s.name=="string"?s.name:"tool",l=typeof s.phase=="string"?s.phase:"",d=l==="start"?s.args:void 0,u=l==="update"?gi(s.partialResult):l==="result"?gi(s.result):void 0,p=Date.now();let m=e.toolStreamById.get(a);m?(m.name=i,d!==void 0&&(m.args=d),u!==void 0&&(m.output=u||void 0),m.updatedAt=p):(m={toolCallId:a,runId:t.runId,sessionKey:n,name:i,args:d,output:u||void 0,startedAt:typeof t.ts=="number"?t.ts:p,updatedAt:p,message:{}},e.toolStreamById.set(a,m),e.toolStreamOrder.push(a)),m.message=vg(m),bg(e),xg(e,l==="result")}const Sg=/^\[([^\]]+)\]\s*/,Ag=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],Hs=new WeakMap,Ks=new WeakMap;function Cg(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:Ag.some(t=>e.startsWith(`${t} `))}function zs(e){const t=e.match(Sg);if(!t)return e;const n=t[1]??"";return Cg(n)?e.slice(t[0].length):e}function va(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?Ns(s):zs(s);if(Array.isArray(s)){const a=s.map(i=>{const l=i;return l.type==="text"&&typeof l.text=="string"?l.text:null}).filter(i=>typeof i=="string");if(a.length>0){const i=a.join(`
`);return n==="assistant"?Ns(i):zs(i)}}return typeof t.text=="string"?n==="assistant"?Ns(t.text):zs(t.text):null}function mr(e){if(!e||typeof e!="object")return va(e);const t=e;if(Hs.has(t))return Hs.get(t)??null;const n=va(e);return Hs.set(t,n),n}function pi(e){const n=e.content,s=[];if(Array.isArray(n))for(const d of n){const u=d;if(u.type==="thinking"&&typeof u.thinking=="string"){const p=u.thinking.trim();p&&s.push(p)}}if(s.length>0)return s.join(`
`);const a=Mg(e);if(!a)return null;const l=[...a.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(d=>(d[1]??"").trim()).filter(Boolean);return l.length>0?l.join(`
`):null}function Tg(e){if(!e||typeof e!="object")return pi(e);const t=e;if(Ks.has(t))return Ks.get(t)??null;const n=pi(e);return Ks.set(t,n),n}function Mg(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(a=>{const i=a;return i.type==="text"&&typeof i.text=="string"?i.text:null}).filter(a=>typeof a=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function Eg(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let mi=!1;function fi(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function Pg(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function Dg(){mi||(mi=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function io(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),fi(t)}return Dg(),fi(Pg())}async function Bt(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function Lg(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function Ig(e,t,n){if(!e.client||!e.connected)return null;const s=t.trim(),a=n&&n.length>0;if(!s&&!a)return null;const i=Date.now(),l=[];if(s&&l.push({type:"text",text:s}),a)for(const p of n)l.push({type:"image",source:{type:"base64",media_type:p.mimeType,data:p.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:l,timestamp:i}],e.chatSending=!0,e.lastError=null;const d=io();e.chatRunId=d,e.chatStream="",e.chatStreamStartedAt=i;const u=a?n.map(p=>{const m=Lg(p.dataUrl);return m?{type:"image",mimeType:m.mimeType,content:m.content}:null}).filter(p=>p!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:d,attachments:u}),d}catch(p){const m=String(p);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=m,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+m}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function _g(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function Rg(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=va(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const fr=0;function hr(e){return e.chatSending||!!e.chatRunId}function Ng(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function Fg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function vr(e){e.connected&&(e.chatMessage="",await _g(e))}function Ug(e,t,n,s){const a=t.trim(),i=!!(n&&n.length>0);!a&&!i||(e.chatQueue=[...e.chatQueue,{id:io(),text:a,createdAt:Date.now(),attachments:i?n?.map(l=>({...l})):void 0,refreshSessions:s}])}async function br(e,t,n){ys(e);const s=await Ig(e,t,n?.attachments),a=!!s;return!a&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!a&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),a&&dr(e,e.sessionKey),a&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),a&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),$n(e),a&&!e.chatRunId&&yr(e),a&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),a}async function yr(e){if(!e.connected||hr(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await br(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function Og(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function Bg(e,t,n){if(!e.connected)return;const s=e.chatMessage,a=(t??e.chatMessage).trim(),i=e.chatAttachments??[],l=t==null?i:[],d=l.length>0;if(!a&&!d)return;if(Ng(a)){await vr(e);return}const u=Fg(a);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),hr(e)){Ug(e,a,l,u);return}await br(e,a,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:d?l:void 0,previousAttachments:t==null?i:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:u})}async function xr(e){await Promise.all([Bt(e),Ge(e,{activeMinutes:fr}),qn(e)]),$n(e)}const Hg=yr;function Kg(e){const t=Il(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function zg(e,t){const n=kn(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function qn(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=Kg(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=zg(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const a=await s.json(),i=typeof a.avatarUrl=="string"?a.avatarUrl.trim():"";e.chatAvatarUrl=i||null}catch{e.chatAvatarUrl=null}}const jg={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},qg={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},Wg=50,Vg=200,Gg="Assistant";function hi(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function ba(e){const t=hi(e?.name,Wg)??Gg,n=hi(e?.avatar??void 0,Vg)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function Qg(){return ba(typeof window>"u"?{}:{name:window.__OPENCLAW_ASSISTANT_NAME__,avatar:window.__OPENCLAW_ASSISTANT_AVATAR__})}async function $r(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const a=await e.client.request("agent.identity.get",s);if(!a)return;const i=ba(a);e.assistantName=i.name,e.assistantAvatar=i.avatar,e.assistantAgentId=i.agentId??null}catch{}}function ya(e){return typeof e=="object"&&e!==null}function Jg(e){if(!ya(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!ya(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const a=typeof e.createdAtMs=="number"?e.createdAtMs:0,i=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!a||!i?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:a,expiresAtMs:i}}function Yg(e){if(!ya(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function wr(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function Zg(e,t){const n=wr(e).filter(s=>s.id!==t.id);return n.push(t),n}function vi(e,t){return wr(e).filter(n=>n.id!==t)}function Xg(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",a=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&a.push(e.nonce??""),a.join("|")}const kr={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},bi=kr,xa={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(kr));new Set(Object.values(xa));const ep=4008;class tp{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>this.handleMessage(String(t.data??""))),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let a=null,i=!1,l=this.opts.token;if(t){a=await Za();const m=Ud({deviceId:a.deviceId,role:s})?.token;l=m??this.opts.token,i=!!(m&&this.opts.token)}const d=l||this.opts.password?{token:l,password:this.opts.password}:void 0;let u;if(t&&a){const m=Date.now(),f=this.connectNonce??void 0,h=Xg({deviceId:a.deviceId,clientId:this.opts.clientName??bi.CONTROL_UI,clientMode:this.opts.mode??xa.WEBCHAT,role:s,scopes:n,signedAtMs:m,token:l??null,nonce:f}),r=await cu(a.privateKey,h);u={id:a.deviceId,publicKey:a.publicKey,signature:r,signedAt:m,nonce:f}}const p={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??bi.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??xa.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:u,caps:[],auth:d,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",p).then(m=>{m?.auth?.deviceToken&&a&&Kl({deviceId:a.deviceId,role:m.auth.role??s,token:m.auth.deviceToken,scopes:m.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(m)}).catch(()=>{i&&a&&zl({deviceId:a.deviceId,role:s}),this.ws?.close(ep,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const a=n;if(a.event==="connect.challenge"){const l=a.payload,d=l&&typeof l.nonce=="string"?l.nonce:null;d&&(this.connectNonce=d,this.sendConnect());return}const i=typeof a.seq=="number"?a.seq:null;i!==null&&(this.lastSeq!==null&&i>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:i}),this.lastSeq=i);try{this.opts.onEvent?.(a)}catch(l){console.error("[gateway] event handler error:",l)}return}if(s.type==="res"){const a=n,i=this.pending.get(a.id);if(!i)return;this.pending.delete(a.id),a.ok?i.resolve(a.payload):i.reject(new Error(a.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=io(),a={type:"req",id:s,method:t,params:n},i=new Promise((l,d)=>{this.pending.set(s,{resolve:u=>l(u),reject:d})});return this.ws.send(JSON.stringify(a)),i}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function js(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const a=t.mainKey?.trim()||"main",i=t.defaultAgentId?.trim();return n==="main"||n===a||i&&(n===`agent:${i}:main`||n===`agent:${i}:${a}`)?s:n}function np(e,t){if(!t?.mainSessionKey)return;const n=js(e.sessionKey,t),s=js(e.settings.sessionKey,t),a=js(e.settings.lastActiveSessionKey,t),i=n||s||e.sessionKey,l={...e.settings,sessionKey:s||i,lastActiveSessionKey:a||i},d=l.sessionKey!==e.settings.sessionKey||l.lastActiveSessionKey!==e.settings.lastActiveSessionKey;i!==e.sessionKey&&(e.sessionKey=i),d&&St(e,l)}function Sr(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new tp({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,op(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,ys(e),$r(e),Wa(e),ms(e,{quiet:!0}),st(e,{quiet:!0}),oo(e)},onClose:({code:t,reason:n})=>{e.connected=!1,t!==1012&&(e.lastError=`disconnected (${t}): ${n||"no reason"}`)},onEvent:t=>sp(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function sp(e,t){try{ap(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function ap(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;kg(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&dr(e,n.sessionKey);const s=Rg(e,n);if(s==="final"||s==="error"||s==="aborted"){ys(e),Hg(e);const a=n?.runId;a&&e.refreshSessionsAfterChat.has(a)&&(e.refreshSessionsAfterChat.delete(a),s==="final"&&Ge(e,{activeMinutes:fr}))}s==="final"&&Bt(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Xn(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&st(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=Jg(t.payload);if(n){e.execApprovalQueue=Zg(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=vi(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=Yg(t.payload);n&&(e.execApprovalQueue=vi(e.execApprovalQueue,n.id))}}function op(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&np(e,n.sessionDefaults)}function ip(e){e.basePath=ig(),sg(e),dg(e,!0),lg(e),rg(e),window.addEventListener("popstate",e.popStateHandler),Sr(e),Cd(e),e.tab==="logs"&&Ka(e),e.tab==="debug"&&ja(e)}function lp(e){yd(e)}function rp(e){window.removeEventListener("popstate",e.popStateHandler),Td(e),za(e),qa(e),cg(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function cp(e,t){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;$n(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&_l(e,t.has("tab")||t.has("logsAutoFollow"))}const lo={CHILD:2},ro=e=>(...t)=>({_$litDirective$:e,values:t});let co=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:dp}=Uc,yi=e=>e,up=e=>e.strings===void 0,xi=()=>document.createComment(""),Yt=(e,t,n)=>{const s=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const i=s.insertBefore(xi(),a),l=s.insertBefore(xi(),a);n=new dp(i,l,e,e.options)}else{const i=n._$AB.nextSibling,l=n._$AM,d=l!==e;if(d){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==l._$AU&&n._$AP(u)}if(i!==a||d){let u=n._$AA;for(;u!==i;){const p=yi(u).nextSibling;yi(s).insertBefore(u,a),u=p}}}return n},rt=(e,t,n=e)=>(e._$AI(t,n),e),gp={},pp=(e,t=gp)=>e._$AH=t,mp=e=>e._$AH,qs=e=>{e._$AR(),e._$AA.remove()};const $i=(e,t,n)=>{const s=new Map;for(let a=t;a<=n;a++)s.set(e[a],a);return s},Ar=ro(class extends co{constructor(e){if(super(e),e.type!==lo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const a=[],i=[];let l=0;for(const d of e)a[l]=s?s(d,l):l,i[l]=n(d,l),l++;return{values:i,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const a=mp(e),{values:i,keys:l}=this.dt(t,n,s);if(!Array.isArray(a))return this.ut=l,i;const d=this.ut??=[],u=[];let p,m,f=0,h=a.length-1,r=0,g=i.length-1;for(;f<=h&&r<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(d[f]===l[r])u[r]=rt(a[f],i[r]),f++,r++;else if(d[h]===l[g])u[g]=rt(a[h],i[g]),h--,g--;else if(d[f]===l[g])u[g]=rt(a[f],i[g]),Yt(e,u[g+1],a[f]),f++,g--;else if(d[h]===l[r])u[r]=rt(a[h],i[r]),Yt(e,a[f],a[h]),h--,r++;else if(p===void 0&&(p=$i(l,r,g),m=$i(d,f,h)),p.has(d[f]))if(p.has(d[h])){const y=m.get(l[r]),A=y!==void 0?a[y]:null;if(A===null){const S=Yt(e,a[f]);rt(S,i[r]),u[r]=S}else u[r]=rt(A,i[r]),Yt(e,a[f],A),a[y]=null;r++}else qs(a[h]),h--;else qs(a[f]),f++;for(;r<=g;){const y=Yt(e,u[g+1]);rt(y,i[r]),u[r++]=y}for(;f<=h;){const y=a[f++];y!==null&&qs(y)}return this.ut=l,pp(e,u),et}}),ge={messageSquare:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:c`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:c`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:c`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:c`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:c`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:c`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,sandbox:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  `,users:c`
    <svg viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  `,menu:c`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:c`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:c`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:c`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:c`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:c`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:c`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:c`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:c`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `};function fp(e,t){const n=Sn(t,e.basePath);return c`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${s=>{s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),e.setTab(t))}}
      title=${fa(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${ge[Yu(t)]}</span>
      <span class="nav-item__text">${fa(t)}</span>
    </a>
  `}function hp(e){const t=vp(e.hello,e.sessionsResult),n=bp(e.sessionKey,e.sessionsResult,t),s=e.onboarding,a=e.onboarding,i=e.onboarding?!1:e.settings.chatShowThinking,l=e.onboarding?!0:e.settings.chatFocusMode,d=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,u=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return c`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${p=>{const m=p.target.value;e.sessionKey=m,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:m,lastActiveSessionKey:m}),e.loadAssistantIdentity(),gg(e,m),Bt(e)}}
        >
          ${Ar(n,p=>p.key,p=>c`<option value=${p.key}>
                ${p.displayName??p.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),xr(e)}}
        title="Refresh chat data"
      >
        ${d}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${i?"active":""}"
        ?disabled=${s}
        @click=${()=>{s||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${i}
        title=${s?"Disabled during onboarding":"Toggle assistant thinking/working output"}
      >
        ${ge.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${l?"active":""}"
        ?disabled=${a}
        @click=${()=>{a||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${l}
        title=${a?"Disabled during onboarding":"Toggle focus mode (hide sidebar + page header)"}
      >
        ${u}
      </button>
    </div>
  `}function vp(e,t){const n=e?.snapshot,s=n?.sessionDefaults?.mainSessionKey?.trim();if(s)return s;const a=n?.sessionDefaults?.mainKey?.trim();return a||(t?.sessions?.some(i=>i.key==="main")?"main":null)}function Ws(e,t){const n=t?.label?.trim()||"",s=t?.displayName?.trim()||"";return n&&n!==e?`${n} (${e})`:s&&s!==e?`${e} (${s})`:e}function bp(e,t,n){const s=new Set,a=[],i=n&&t?.sessions?.find(d=>d.key===n),l=t?.sessions?.find(d=>d.key===e);if(n&&(s.add(n),a.push({key:n,displayName:Ws(n,i||void 0)})),s.has(e)||(s.add(e),a.push({key:e,displayName:Ws(e,l)})),t?.sessions)for(const d of t.sessions)s.has(d.key)||(s.add(d.key),a.push({key:d.key,displayName:Ws(d.key,d)}));return a}function Cr(e,t){if(!e)return e;const s=e.files.some(a=>a.name===t.name)?e.files.map(a=>a.name===t.name?t:a):[...e.files,t];return{...e,files:s}}async function Vs(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(s=>s.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function yp(e,t,n,s){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const a=await e.client.request("agents.files.get",{agentId:t,name:n});if(a?.file){const i=a.file.content??"",l=e.agentFileContents[n]??"",d=e.agentFileDrafts[n],u=s?.preserveDraft??!0;e.agentFilesList=Cr(e.agentFilesList,a.file),e.agentFileContents={...e.agentFileContents,[n]:i},(!u||!Object.hasOwn(e.agentFileDrafts,n)||d===l)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:i})}}catch(a){e.agentFilesError=String(a)}finally{e.agentFilesLoading=!1}}}async function xp(e,t,n,s){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const a=await e.client.request("agents.files.set",{agentId:t,name:n,content:s});a?.file&&(e.agentFilesList=Cr(e.agentFilesList,a.file),e.agentFileContents={...e.agentFileContents,[n]:s},e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}catch(a){e.agentFilesError=String(a)}finally{e.agentFileSaving=!1}}}async function Tr(e,t){if(!(!e.client||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const n=t?.startDate??e.usageStartDate,s=t?.endDate??e.usageEndDate,[a,i]=await Promise.all([e.client.request("sessions.usage",{startDate:n,endDate:s,limit:1e3,includeContextWeight:!0}),e.client.request("usage.cost",{startDate:n,endDate:s})]);a&&(e.usageResult=a),i&&(e.usageCostSummary=i)}catch(n){e.usageError=String(n)}finally{e.usageLoading=!1}}}async function $p(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function wp(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:500});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}function kp(e){const t=e.employees??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(l=>[l.name,l.id,l.description].join(" ").toLowerCase().includes(n)):t,a=e.createName?.trim()??"",i=Cp(a);return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${o("navTitleDigitalEmployee")}</div>
          <div class="card-sub">
            提供不同垂直场景的对话模版，点击任一数字员工即可开启新的会话。
          </div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${o("mcpViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onCreateOpen}>
            ${o("skillsAdd")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonLoading"):o("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>${o("commonFilter")}</span>
          <input
            .value=${e.filter}
            @input=${l=>e.onFilterChange(l.target.value)}
            placeholder="搜索名称/ID/描述"
          />
        </label>
        <div class="muted">${s.length} 个</div>
      </div>

      ${!e.loading&&s.length===0?c`<div class="muted" style="margin-top: 16px;">暂无匹配的数字员工。</div>`:c`
              ${e.viewMode==="list"?c`
                      <div class="list" style="margin-top: 16px;">
                        ${s.map(l=>Sp(l,e))}
                      </div>
                    `:c`
                      <div
                        class="employees-card-grid"
                        style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                          gap: 12px;
                          margin-top: 16px;
                        "
                      >
                        ${s.map(l=>Ap(l,e))}
                      </div>
                    `}
            `}

      ${e.createModalOpen?c`
              <div class="modal-overlay" @click=${e.onCreateClose}>
                <div class="modal card" @click=${l=>l.stopPropagation()}>
                  <div class="card-title">新增数字员工</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>名称</span>
                    <input
                      type="text"
                      .value=${e.createName}
                      @input=${l=>e.onCreateNameChange(l.target.value)}
                      placeholder="如 SRE 运维专家"
                    />
                    <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>描述</span>
                    <textarea
                      rows="2"
                      .value=${e.createDescription}
                      @input=${l=>e.onCreateDescriptionChange(l.target.value)}
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>Prompt（可选）</span>
                    <textarea
                      rows="4"
                      .value=${e.createPrompt}
                      @input=${l=>e.onCreatePromptChange(l.target.value)}
                      placeholder="为该数字员工编写系统提示/人设说明。"
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <button class="btn secondary" type="button" @click=${e.onToggleAdvanced}>
                      ${e.advancedOpen?"收起高级配置":"展开高级配置"}
                    </button>
                  </div>
                  ${e.advancedOpen?c`
                          <div class="card" style="margin-top: 12px;">
                            <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">
                              高级配置
                            </div>
                            <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                              预估 ID：<code>${i}</code>（基于名称生成，用于专属技能目录
                              ~/.openocta/employee_skills/${i}/...）
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>MCP 配置（可选，JSON）</span>
                              <textarea
                                rows="4"
                                .value=${e.mcpJson}
                                @input=${l=>e.onMcpJsonChange(l.target.value)}
                                placeholder='remote: {"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}} \nlocal: {"prometheus_test":{"enabled":true,"command":"npx","args":["prometheus-mcp@latest","stdio"],"env":{"PROMETHEUS_URL":"http://192.168.50.59:9090"}}}'
                              ></textarea>
                              <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                                与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                              </div>
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能名称（可选）</span>
                              <input
                                type="text"
                                .value=${e.skillUploadName}
                                @input=${l=>e.onSkillUploadNameChange(l.target.value)}
                                placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                              />
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                              <input
                                type="file"
                                accept=".md,.MD,.zip"
                                multiple
                                @change=${l=>{const d=l.target,u=d.files?Array.from(d.files):[];e.onSkillUploadFilesChange(u)}}
                              />
                            </div>
                            ${e.skillUploadError?c`
                                    <div class="callout danger" style="margin-top: 8px;">
                                      ${e.skillUploadError}
                                    </div>
                                  `:v}
                          </div>
                        `:v}
                  ${e.createError?c`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${e.createError}
                          </div>
                        `:v}
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${e.createBusy} @click=${e.onCreateClose}>
                      ${o("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${e.createBusy||!e.createName.trim()}
                      @click=${e.onCreateSubmit}
                    >
                      ${e.createBusy?o("commonLoading"):o("skillsUploadSubmit")}
                    </button>
                  </div>
                </div>
              </div>
            `:v}

      ${e.editModalOpen?c`
              <div class="modal-overlay" @click=${e.onEditClose}>
                <div class="modal card" @click=${l=>l.stopPropagation()}>
                  <div class="card-title">修改数字员工</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>名称</span>
                    <input type="text" .value=${e.editName} disabled />
                    <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称不可修改</div>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>描述</span>
                    <textarea
                      rows="2"
                      .value=${e.editDescription}
                      @input=${l=>e.onEditDescriptionChange(l.target.value)}
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>Prompt（可选）</span>
                    <textarea
                      rows="4"
                      .value=${e.editPrompt}
                      @input=${l=>e.onEditPromptChange(l.target.value)}
                      placeholder="为该数字员工编写系统提示/人设说明。"
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>MCP 配置（可选，JSON）</span>
                    <textarea
                      rows="4"
                      .value=${e.editMcpJson}
                      @input=${l=>e.onEditMcpJsonChange(l.target.value)}
                      placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>已有技能</span>
                    ${e.editSkillNames.length===0?c`<div class="muted" style="font-size: 12px;">暂无技能</div>`:c`
                            <div class="row" style="flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                              ${e.editSkillNames.map(l=>c`
                                    <span
                                      class="chip"
                                      style="display: inline-flex; align-items: center; gap: 4px;"
                                    >
                                      ${l}
                                      ${e.editSkillsToDelete.includes(l)?c`
                                            <span class="muted" style="font-size: 11px;"
                                              >已标记删除</span
                                            >
                                            <button
                                              type="button"
                                              class="btn btn--sm"
                                              style="padding: 2px 6px; font-size: 11px;"
                                              @click=${()=>e.onEditSkillUndoDelete(l)}
                                            >
                                              撤销
                                            </button>
                                          `:c`
                                            <button
                                              type="button"
                                              class="btn btn--sm"
                                              style="padding: 2px 6px; font-size: 11px;"
                                              @click=${()=>e.onEditSkillDelete(l)}
                                            >
                                              删除
                                            </button>
                                          `}
                                    </span>
                                  `)}
                            </div>
                          `}
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>新上传技能文件（可多选）</span>
                    <input
                      type="file"
                      accept=".md,.MD,.zip"
                      multiple
                      @change=${l=>{const d=l.target,u=d.files?Array.from(d.files):[];e.onEditSkillFilesChange(u)}}
                    />
                    ${e.editSkillFilesToUpload.length>0?c`
                            <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                              ${e.editSkillFilesToUpload.map(l=>c`<span class="chip" style="font-size: 12px;"
                                    >${l.name}</span
                                  >`)}
                            </div>
                          `:v}
                  </div>
                  ${e.editError?c`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${e.editError}
                          </div>
                        `:v}
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${e.editBusy} @click=${e.onEditClose}>
                      ${o("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${e.editBusy}
                      @click=${e.onEditSubmit}
                    >
                      ${e.editBusy?o("commonLoading"):"保存"}
                    </button>
                  </div>
                </div>
              </div>
            `:v}
    </section>
  `}function Sp(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",i=e.enabled!==!1;return c`
    <div class="list-item list-item--row" style="width: 100%; text-align: left;">
      <div class="list-main">
        <div class="list-title">
          ${n}
          ${e.builtin?c`<span class="chip" style="margin-left: 8px;">内置</span>`:v}
        </div>
        <div class="list-sub">${s}</div>
        <div class="list-sub muted" style="margin-top: 4px;">
          ${a?c`<span>创建时间：${a}</span>`:v}
          <span style="margin-left: 12px;">状态：${i?"启用":"禁用"}</span>
          ${Mr(e)}
        </div>
      </div>
      <div class="row" style="gap: 8px; align-items: center; justify-content: flex-end;">
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)} ?disabled=${e.builtin}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${o("skillsDelete")}
        </button>
      </div>
    </div>
  `}function Ap(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",i=e.enabled!==!1;return c`
    <div class="skills-server-card" style="cursor: pointer;" @click=${()=>t.onOpenEmployee(e.id)}>
      <div class="skills-server-card__header">
        <div class="skills-server-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div class="skills-server-card__title-row" style="min-width: 0;">
          <span class="skills-server-card__name">${n}</span>
          ${e.builtin?c`<span class="chip" style="font-size: 11px;">内置</span>`:v}
          <span class="chip ${i?"chip-ok":"chip-warn"}" style="font-size: 11px;">
            ${i?"启用":"禁用"}
          </span>
        </div>
      </div>
      <div class="skills-server-card__sub muted" style="font-size: 12px;">
        <div>${s}</div>
        ${a?c`<div style="margin-top: 6px;">创建时间：${a}</div>`:v}
        ${Mr(e)}
      </div>
      <div class="skills-server-card__footer" @click=${l=>l.stopPropagation()}>
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)} ?disabled=${e.builtin}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${o("skillsDelete")}
        </button>
      </div>
    </div>
  `}function Mr(e){const t=e.skillNames??e.skillIds??[],n=e.mcpServerKeys??[];if(t.length===0&&n.length===0)return c``;const s=3,a=t.length<=s?t.join(", "):`${t.slice(0,s).join(", ")}....`,i=n.length<=s?n.join(", "):`${n.slice(0,s).join(", ")}....`,l=t.join(", "),d=n.join(", "),u=l&&d?`技能：${l}
MCP：${d}`:l?`技能：${l}`:`MCP：${d}`,p=[];return a&&p.push(`技能：${a}`),i&&p.push(`MCP：${i}`),c`<span
    style="margin-left: 12px; cursor: help; text-decoration: underline dotted;"
    title=${u}
  >
    ${p.join(" | ")}
  </span>`}function Cp(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t){if(s>="a"&&s<="z"||s>="0"&&s<="9"){n+=s;continue}(s==="-"||s==="_"||s===" ")&&(n+="-")}return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||(n="employee"),n.length>64&&(n=n.slice(0,64)),n}const Tp={bash:"exec","apply-patch":"apply_patch"},Mp={"group:memory":["memory_search","memory_get"],"group:web":["web_search","web_fetch"],"group:fs":["read","write","edit","apply_patch"],"group:runtime":["exec","process"],"group:sessions":["sessions_list","sessions_history","sessions_send","sessions_spawn","session_status"],"group:ui":["browser","canvas"],"group:automation":["cron","gateway"],"group:messaging":["message"],"group:nodes":["nodes"],"group:openclaw":["browser","canvas","nodes","cron","message","gateway","agents_list","sessions_list","sessions_history","sessions_send","sessions_spawn","session_status","memory_search","memory_get","web_search","web_fetch","image"]},Ep={minimal:{allow:["session_status"]},coding:{allow:["group:fs","group:runtime","group:sessions","group:memory","image"]},messaging:{allow:["group:messaging","sessions_list","sessions_history","sessions_send","session_status"]},full:{}};function Ue(e){const t=e.trim().toLowerCase();return Tp[t]??t}function Pp(e){return e?e.map(Ue).filter(Boolean):[]}function Dp(e){const t=Pp(e),n=[];for(const s of t){const a=Mp[s];if(a){n.push(...a);continue}n.push(s)}return Array.from(new Set(n))}function Lp(e){if(!e)return;const t=Ep[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}function Ip(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",a=e.version??"";return`${t} ${n} ${s} ${a}`.trim()}function _p(e){const t=e.ts??null;return t?Q(t):"n/a"}function uo(e){return e?`${xt(e)} (${Q(e)})`:"n/a"}function Rp(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function Np(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function Fp(e){const t=e.state??{},n=t.nextRunAtMs?xt(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?xt(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function Er(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${xt(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${Fl(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function Up(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,s=e.delivery;if(s&&s.mode!=="none"){const a=s.channel||s.to?` (${s.channel??"last"}${s.to?` -> ${s.to}`:""})`:"";return`${n} · ${s.mode}${a}`}return n}function wi(){return[{id:"fs",label:o("agentsFiles"),tools:[{id:"read",label:"read",description:o("agentsReadFile")},{id:"write",label:"write",description:o("agentsWriteFile")},{id:"edit",label:"edit",description:o("agentsEdit")},{id:"apply_patch",label:"apply_patch",description:o("agentsApplyPatch")}]},{id:"runtime",label:o("agentsRuntime"),tools:[{id:"exec",label:"exec",description:o("agentsExec")},{id:"process",label:"process",description:o("agentsProcess")}]},{id:"web",label:o("agentsWeb"),tools:[{id:"web_search",label:"web_search",description:o("agentsWebSearch")},{id:"web_fetch",label:"web_fetch",description:o("agentsWebFetch")}]},{id:"memory",label:o("agentsMemory"),tools:[{id:"memory_search",label:"memory_search",description:o("agentsMemorySearch")},{id:"memory_get",label:"memory_get",description:o("agentsMemoryGet")}]},{id:"sessions",label:o("agentsSessions"),tools:[{id:"sessions_list",label:"sessions_list",description:o("agentsSessionsList")},{id:"sessions_history",label:"sessions_history",description:o("agentsSessionsHistory")},{id:"sessions_send",label:"sessions_send",description:o("agentsSessionsSend")},{id:"sessions_spawn",label:"sessions_spawn",description:o("agentsSessionsSpawn")},{id:"session_status",label:"session_status",description:o("agentsSessionStatus")}]},{id:"ui",label:o("agentsUi"),tools:[{id:"browser",label:"browser",description:o("agentsBrowser")},{id:"canvas",label:"canvas",description:o("agentsCanvas")}]},{id:"messaging",label:o("agentsMessaging"),tools:[{id:"message",label:"message",description:o("agentsMessage")}]},{id:"automation",label:o("agentsAutomation"),tools:[{id:"cron",label:"cron",description:o("agentsScheduleTasks")},{id:"gateway",label:"gateway",description:o("agentsGatewayControl")}]},{id:"nodes",label:o("agentsNodes"),tools:[{id:"nodes",label:"nodes",description:o("agentsNodesDevices")}]},{id:"agents",label:o("agentsAgents"),tools:[{id:"agents_list",label:"agents_list",description:o("agentsListAgents")}]},{id:"media",label:o("agentsMedia"),tools:[{id:"image",label:"image",description:o("agentsImageUnderstanding")}]}]}function Op(){return[{id:"minimal",label:o("agentsProfileMinimal")},{id:"coding",label:o("agentsProfileCoding")},{id:"messaging",label:o("agentsProfileMessaging")},{id:"full",label:o("agentsProfileFull")}]}function $a(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function Fn(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let s=0;s<t.length;s+=1)if(t.charCodeAt(s)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function xs(e,t){const n=t?.emoji?.trim();if(n&&Fn(n))return n;const s=e.identity?.emoji?.trim();if(s&&Fn(s))return s;const a=t?.avatar?.trim();if(a&&Fn(a))return a;const i=e.identity?.avatar?.trim();return i&&Fn(i)?i:""}function Pr(e,t){return t&&e===t?o("agentsDefault"):null}function Bp(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function $s(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(i=>i?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function Dr(e,t,n,s,a){const i=$s(t,e.id),d=(n&&n.agentId===e.id?n.workspace:null)||i.entry?.workspace||i.defaults?.workspace||"default",u=i.entry?.model?un(i.entry?.model):un(i.defaults?.model),p=a?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||i.entry?.name||e.id,m=xs(e,a)||"-",f=Array.isArray(i.entry?.skills)?i.entry?.skills:null,h=f?.length??null;return{workspace:d,model:u,identityName:p,identityEmoji:m,skillsLabel:f?`${h} ${o("agentsSelected")}`:o("agentsAllSkills"),isDefault:!!(s&&e.id===s)}}function un(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const s=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return s>0?`${n} (+${s} ${o("agentsFallback")})`:n}}return"-"}function ki(e){const t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function Si(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function Hp(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(s=>typeof s=="string"):null}return null}function Kp(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function zp(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const s=[];for(const[a,i]of Object.entries(n)){const l=a.trim();if(!l)continue;const d=i&&typeof i=="object"&&"alias"in i&&typeof i.alias=="string"?i.alias?.trim():void 0,u=d&&d!==l?`${d} (${l})`:l;s.push({value:l,label:u})}return s}function jp(e,t){const n=zp(e),s=t?n.some(a=>a.value===t):!1;return t&&!s&&n.unshift({value:t,label:`${o("agentsCurrentModel")} (${t})`}),n.length===0?c`
            <option value="" disabled>No configured models</option>
        `:n.map(a=>c`
        <option value=${a.value}>${a.label}</option>`)}function qp(e){const t=Ue(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function wa(e){return Array.isArray(e)?Dp(e).map(qp).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function gn(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function Wp(e,t){if(!t)return!0;const n=Ue(e),s=wa(t.deny);if(gn(n,s))return!1;const a=wa(t.allow);return!!(a.length===0||gn(n,a)||n==="apply_patch"&&gn("exec",a))}function Ai(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=Ue(e),s=wa(t);return!!(gn(n,s)||n==="apply_patch"&&gn("exec",s))}function Vp(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,s=e.selectedAgentId??n??t[0]?.id??null,a=s?t.find(i=>i.id===s)??null:null;return c`
        <div class="agents-layout">
            <section class="card agents-sidebar">
                <div class="row" style="justify-content: space-between;">
                    <div>
                        <div class="card-title">${o("agentsTitle")}</div>
                        <div class="card-sub">${t.length} ${o("agentsConfigured")}</div>
                    </div>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?o("commonLoading"):o("commonRefresh")}
                    </button>
                </div>
                ${e.error?c`
                                    <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
                <div class="agent-list" style="margin-top: 12px;">
                    ${t.length===0?c`
                                        <div class="muted">${o("agentsNoFound")}</div>
                                    `:t.map(i=>{const l=Pr(i.id,n),d=xs(i,e.agentIdentityById[i.id]??null);return c`
                                            <button
                                                    type="button"
                                                    class="agent-row ${s===i.id?"active":""}"
                                                    @click=${()=>e.onSelectAgent(i.id)}
                                            >
                                                <div class="agent-avatar">
                                                    ${d||$a(i).slice(0,1)}
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-title">${$a(i)}</div>
                                                    <div class="agent-sub mono">${i.id}</div>
                                                </div>
                                                ${l?c`<span class="agent-pill">${l}</span>`:v}
                                            </button>
                                        `})}
                </div>
            </section>
            <section class="agents-main">
                ${a?c`
                                    ${Gp(a,n,e.agentIdentityById[a.id]??null)}
                                    ${Qp(e.activePanel,i=>e.onSelectPanel(i))}
                                    ${e.activePanel==="overview"?Jp({agent:a,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[a.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):v}
                                    ${e.activePanel==="files"?im({agentId:a.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):v}
                                    ${e.activePanel==="tools"?rm({agentId:a.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
                                    ${e.activePanel==="skills"?um({agentId:a.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
                                    ${e.activePanel==="channels"?am({agent:a,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[a.id]??null,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):v}
                                    ${e.activePanel==="cron"?om({agent:a,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[a.id]??null,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):v}
                                `:c`
                                    <div class="card">
                                        <div class="card-title">${o("agentsSelectAgent")}</div>
                                        <div class="card-sub">${o("agentsSelectAgentSub")}</div>
                                    </div>
                                `}
            </section>
        </div>
    `}function Gp(e,t,n){const s=Pr(e.id,t),a=$a(e),i=e.identity?.theme?.trim()||o("agentsWorkspaceRouting"),l=xs(e,n);return c`
        <section class="card agent-header">
            <div class="agent-header-main">
                <div class="agent-avatar agent-avatar--lg">
                    ${l||a.slice(0,1)}
                </div>
                <div>
                    <div class="card-title">${a}</div>
                    <div class="card-sub">${i}</div>
                </div>
            </div>
            <div class="agent-header-meta">
                <div class="mono">${e.id}</div>
                ${s?c`<span class="agent-pill">${s}</span>`:v}
            </div>
        </section>
    `}function Qp(e,t){const n=[{id:"overview",label:o("agentsTabOverview")},{id:"files",label:o("agentsTabFiles")},{id:"tools",label:o("agentsTabTools")},{id:"skills",label:o("agentsTabSkills")},{id:"channels",label:o("agentsTabChannels")},{id:"cron",label:o("agentsTabCron")}];return c`
        <div class="agent-tabs">
            ${n.map(s=>c`
                        <button
                                class="agent-tab ${e===s.id?"active":""}"
                                type="button"
                                @click=${()=>t(s.id)}
                        >
                            ${s.label}
                        </button>
                    `)}
        </div>
    `}function Jp(e){const{agent:t,configForm:n,agentFilesList:s,agentIdentity:a,agentIdentityLoading:i,agentIdentityError:l,configLoading:d,configSaving:u,configDirty:p,onConfigReload:m,onConfigSave:f,onModelChange:h,onModelFallbacksChange:r}=e,g=$s(n,t.id),A=(s&&s.agentId===t.id?s.workspace:null)||g.entry?.workspace||g.defaults?.workspace||"default",S=g.entry?.model?un(g.entry?.model):un(g.defaults?.model),w=un(g.defaults?.model),T=Si(g.entry?.model)||(S!=="-"?ki(S):null),C=Si(g.defaults?.model)||(w!=="-"?ki(w):null),M=T??C??null,E=Hp(g.entry?.model),I=E?E.join(", "):"",K=a?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||g.entry?.name||"-",ie=xs(t,a)||"-",_=Array.isArray(g.entry?.skills)?g.entry?.skills:null,z=_?.length??null,pe=i?o("commonLoading"):l?o("agentsUnavailable"):"",P=!!(e.defaultId&&t.id===e.defaultId);return c`
        <section class="card">
            <div class="card-title">${o("agentsOverview")}</div>
            <div class="card-sub">${o("agentsOverviewSub")}</div>
            <div class="agents-overview-grid" style="margin-top: 16px;">
                <div class="agent-kv">
                    <div class="label">${o("agentsWorkspace")}</div>
                    <div class="mono">${A}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsPrimaryModel")}</div>
                    <div class="mono">${S}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsIdentityName")}</div>
                    <div>${K}</div>
                    ${pe?c`
                        <div class="agent-kv-sub muted">${pe}</div>`:v}
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsDefaultLabel")}</div>
                    <div>${o(P?"commonYes":"commonNo")}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsIdentityEmoji")}</div>
                    <div>${ie}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsSkillsFilter")}</div>
                    <div>${_?`${z} ${o("agentsSelected")}`:o("agentsAllSkills")}</div>
                </div>
            </div>

            <div class="agent-model-select" style="margin-top: 20px;">
                <div class="label">${o("agentsModelSelection")}</div>
                <div class="row" style="gap: 12px; flex-wrap: wrap;">
                    <label class="field" style="min-width: 260px; flex: 1;">
                        <span>${o("agentsPrimaryModelLabel")}${P?` ${o("agentsPrimaryModelDefault")}`:""}</span>
                        <select
                                .value=${M??""}
                                ?disabled=${!n||d||u}
                                @change=${B=>h(t.id,B.target.value||null)}
                        >
                            ${P?v:c`
                                                <option value="">
                                                    ${C?`${o("agentsInheritDefault")} (${C})`:o("agentsInheritDefault")}
                                                </option>
                                            `}
                            ${jp(n,M??void 0)}
                        </select>
                    </label>
                    <label class="field" style="min-width: 260px; flex: 1;">
                        <span>${o("agentsFallbacksLabel")}</span>
                        <input
                                .value=${I}
                                ?disabled=${!n||d||u}
                                placeholder="provider/model, provider/model"
                                @input=${B=>r(t.id,Kp(B.target.value))}
                        />
                    </label>
                </div>
                <div class="row" style="justify-content: flex-end; gap: 8px;">
                    <button
                            class="btn btn--sm"
                            ?disabled=${d}
                            @click=${m}
                    >
                        ${o("agentsReloadConfig")}
                    </button>
                    <button
                            class="btn btn--sm primary"
                            ?disabled=${u||!p}
                            @click=${f}
                    >
                        ${o(u?"commonSaving":"commonSave")}
                    </button>
                </div>
            </div>
        </section>
    `}function Lr(e,t){return c`
        <section class="card">
            <div class="card-title">${o("agentsAgentContext")}</div>
            <div class="card-sub">${t}</div>
            <div class="agents-overview-grid" style="margin-top: 16px;">
                <div class="agent-kv">
                    <div class="label">${o("agentsWorkspace")}</div>
                    <div class="mono">${e.workspace}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsPrimaryModel")}</div>
                    <div class="mono">${e.model}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsIdentityName")}</div>
                    <div>${e.identityName}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsIdentityEmoji")}</div>
                    <div>${e.identityEmoji}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsSkillsFilter")}</div>
                    <div>${e.skillsLabel}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsDefaultLabel")}</div>
                    <div>${e.isDefault?o("commonYes"):o("commonNo")}</div>
                </div>
            </div>
        </section>
    `}function Yp(e,t){const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Zp(e){if(!e)return[];const t=new Set;for(const a of e.channelOrder??[])t.add(a);for(const a of e.channelMeta??[])t.add(a.id);for(const a of Object.keys(e.channelAccounts??{}))t.add(a);const n=[],s=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const a of s)t.has(a)&&(n.push(a),t.delete(a));for(const a of t)n.push(a);return n.map(a=>({id:a,label:Yp(e,a),accounts:e.channelAccounts?.[a]??[]}))}const Xp=["groupPolicy","streamMode","dmPolicy"];function em(e,t){if(!e)return null;const s=(e.channels??{})[t];if(s&&typeof s=="object")return s;const a=e[t];return a&&typeof a=="object"?a:null}function tm(e){if(e==null)return o("commonNA");if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return o("commonNA")}}function nm(e,t){const n=em(e,t);return n?Xp.flatMap(s=>s in n?[{label:s,value:tm(n[s])}]:[]):[]}function sm(e){let t=0,n=0,s=0;for(const a of e){const i=a.probe&&typeof a.probe=="object"&&"ok"in a.probe?!!a.probe.ok:!1;(a.connected===!0||a.running===!0||i)&&(t+=1),a.configured&&(n+=1),a.enabled&&(s+=1)}return{total:e.length,connected:t,configured:n,enabled:s}}function am(e){const t=Dr(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=Zp(e.snapshot),s=e.lastSuccess?Q(e.lastSuccess):o("agentsNever");return c`
        <section class="grid grid-cols-2">
            ${Lr(t,o("agentsContextWorkspaceIdentity"))}
            <section class="card">
                <div class="row" style="justify-content: space-between;">
                    <div>
                        <div class="card-title">${o("agentsChannels")}</div>
                        <div class="card-sub">${o("agentsChannelsSub")}</div>
                    </div>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?o("commonRefreshing"):o("commonRefresh")}
                    </button>
                </div>
                <div class="muted" style="margin-top: 8px;">
                    ${o("agentsLastRefresh")}: ${s}
                </div>
                ${e.error?c`
                                    <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
                ${e.snapshot?v:c`
                                    <div class="callout info" style="margin-top: 12px">${o("agentsLoadChannels")}</div>
                                `}
                ${n.length===0?c`
                                    <div class="muted" style="margin-top: 16px">${o("agentsNoChannels")}</div>
                                `:c`
                                    <div class="list" style="margin-top: 16px;">
                                        ${n.map(a=>{const i=sm(a.accounts),l=i.total?`${i.connected}/${i.total} ${o("agentsConnected")}`:o("agentsNoAccounts"),d=i.configured?`${i.configured} ${o("agentsConfiguredLabel")}`:o("agentsNotConfigured"),u=i.total?`${i.enabled} ${o("agentsEnabled")}`:o("agentsDisabled"),p=nm(e.configForm,a.id);return c`
                                                <div class="list-item">
                                                    <div class="list-main">
                                                        <div class="list-title">${a.label}</div>
                                                        <div class="list-sub mono">${a.id}</div>
                                                    </div>
                                                    <div class="list-meta">
                                                        <div>${l}</div>
                                                        <div>${d}</div>
                                                        <div>${u}</div>
                                                        ${p.length>0?p.map(m=>c`
                                                                            <div>${m.label}: ${m.value}</div>`):v}
                                                    </div>
                                                </div>
                                            `})}
                                    </div>
                                `}
            </section>
        </section>
    `}function om(e){const t=Dr(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=e.jobs.filter(s=>s.agentId===e.agent.id);return c`
        <section class="grid grid-cols-2">
            ${Lr(t,o("agentsContextWorkspaceScheduling"))}
            <section class="card">
                <div class="row" style="justify-content: space-between;">
                    <div>
                        <div class="card-title">${o("agentsScheduler")}</div>
                        <div class="card-sub">${o("agentsSchedulerSub")}</div>
                    </div>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?o("commonRefreshing"):o("commonRefresh")}
                    </button>
                </div>
                <div class="stat-grid" style="margin-top: 16px;">
                    <div class="stat">
                        <div class="stat-label">${o("agentsEnabled")}</div>
                        <div class="stat-value">
                            ${e.status?e.status.enabled?o("commonYes"):o("commonNo"):o("commonNA")}
                        </div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">${o("cronJobs")}</div>
                        <div class="stat-value">${e.status?.jobs??o("commonNA")}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">${o("agentsNextWake")}</div>
                        <div class="stat-value">${uo(e.status?.nextWakeAtMs??null)}</div>
                    </div>
                </div>
                ${e.error?c`
                                    <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
            </section>
        </section>
        <section class="card">
            <div class="card-title">${o("agentsCronJobs")}</div>
            <div class="card-sub">${o("agentsCronJobsSub")}</div>
            ${n.length===0?c`
                                <div class="muted" style="margin-top: 16px">${o("agentsNoJobsAssigned")}</div>
                            `:c`
                                <div class="list" style="margin-top: 16px;">
                                    ${n.map(s=>c`
                                                <div class="list-item">
                                                    <div class="list-main">
                                                        <div class="list-title">${s.name}</div>
                                                        ${s.description?c`
                                                            <div class="list-sub">${s.description}</div>`:v}
                                                        <div class="chip-row" style="margin-top: 6px;">
                                                            <span class="chip">${Er(s)}</span>
                                                            <span class="chip ${s.enabled?"chip-ok":"chip-warn"}">
                          ${s.enabled?o("agentsEnabled"):o("agentsDisabled")}
                        </span>
                                                            <span class="chip">${s.sessionTarget}</span>
                                                        </div>
                                                    </div>
                                                    <div class="list-meta">
                                                        <div class="mono">${Fp(s)}</div>
                                                        <div class="muted">${Up(s)}</div>
                                                    </div>
                                                </div>
                                            `)}
                                </div>
                            `}
        </section>
    `}function im(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],s=e.agentFileActive??null,a=s?n.find(u=>u.name===s)??null:null,i=s?e.agentFileContents[s]??"":"",l=s?e.agentFileDrafts[s]??i:"",d=s?l!==i:!1;return c`
        <section class="card">
            <div class="row" style="justify-content: space-between;">
                <div>
                    <div class="card-title">${o("agentsCoreFiles")}</div>
                    <div class="card-sub">${o("agentsCoreFilesSub")}</div>
                </div>
                <button
                        class="btn btn--sm"
                        ?disabled=${e.agentFilesLoading}
                        @click=${()=>e.onLoadFiles(e.agentId)}
                >
                    ${e.agentFilesLoading?o("commonLoading"):o("commonRefresh")}
                </button>
            </div>
            ${t?c`
                <div class="muted mono" style="margin-top: 8px;">${o("agentsWorkspace")}: ${t.workspace}
                </div>`:v}
            ${e.agentFilesError?c`
                                <div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}
                                </div>`:v}
            ${t?c`
                                <div class="agent-files-grid" style="margin-top: 16px;">
                                    <div class="agent-files-list">
                                        ${n.length===0?c`
                                                            <div class="muted">${o("agentsNoFilesFound")}</div>
                                                        `:n.map(u=>lm(u,s,()=>e.onSelectFile(u.name)))}
                                    </div>
                                    <div class="agent-files-editor">
                                        ${a?c`
                                                            <div class="agent-file-header">
                                                                <div>
                                                                    <div class="agent-file-title mono">${a.name}</div>
                                                                    <div class="agent-file-sub mono">${a.path}</div>
                                                                </div>
                                                                <div class="agent-file-actions">
                                                                    <button
                                                                            class="btn btn--sm"
                                                                            ?disabled=${!d}
                                                                            @click=${()=>e.onFileReset(a.name)}
                                                                    >
                                                                        ${o("agentsReset")}
                                                                    </button>
                                                                    <button
                                                                            class="btn btn--sm primary"
                                                                            ?disabled=${e.agentFileSaving||!d}
                                                                            @click=${()=>e.onFileSave(a.name)}
                                                                    >
                                                                        ${e.agentFileSaving?o("commonSaving"):o("commonSave")}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            ${a.missing?c`
                                                                                <div class="callout info" style="margin-top: 10px">
                                                                                    ${o("agentsFileMissingCreate")}
                                                                                </div>
                                                                            `:v}
                                                            <label class="field" style="margin-top: 12px;">
                                                                <span>Content</span>
                                                                <textarea
                                                                        .value=${l}
                                                                        @input=${u=>e.onFileDraftChange(a.name,u.target.value)}
                                                                ></textarea>
                                                            </label>
                                                        `:c`
                                                            <div class="muted">${o("agentsSelectFileToEdit")}</div>
                                                        `}
                                    </div>
                                </div>
                            `:c`
                                <div class="callout info" style="margin-top: 12px">
                                    ${o("agentsLoadWorkspaceFiles")}
                                </div>
                            `}
        </section>
    `}function lm(e,t,n){const s=e.missing?"Missing":`${Bp(e.size)} · ${Q(e.updatedAtMs??null)}`;return c`
        <button
                type="button"
                class="agent-file-row ${t===e.name?"active":""}"
                @click=${n}
        >
            <div>
                <div class="agent-file-name mono">${e.name}</div>
                <div class="agent-file-meta">${s}</div>
            </div>
            ${e.missing?c`
                                <span class="agent-pill warn">missing</span>
                            `:v}
        </button>
    `}function rm(e){const t=$s(e.configForm,e.agentId),n=t.entry?.tools??{},s=t.globalTools??{},a=n.profile??s.profile??"full",i=n.profile?"agent override":s.profile?"global default":"default",l=Array.isArray(n.allow)&&n.allow.length>0,d=Array.isArray(s.allow)&&s.allow.length>0,u=!!e.configForm&&!e.configLoading&&!e.configSaving&&!l,p=l?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],m=l?[]:Array.isArray(n.deny)?n.deny:[],f=l?{allow:n.allow??[],deny:n.deny??[]}:Lp(a)??void 0,h=wi().flatMap(S=>S.tools.map(w=>w.id)),r=S=>{const w=Wp(S,f),T=Ai(S,p),C=Ai(S,m);return{allowed:(w||T)&&!C,baseAllowed:w,denied:C}},g=h.filter(S=>r(S).allowed).length,y=(S,w)=>{const T=new Set(p.map(I=>Ue(I)).filter(I=>I.length>0)),C=new Set(m.map(I=>Ue(I)).filter(I=>I.length>0)),M=r(S).baseAllowed,E=Ue(S);w?(C.delete(E),M||T.add(E)):(T.delete(E),C.add(E)),e.onOverridesChange(e.agentId,[...T],[...C])},A=S=>{const w=new Set(p.map(C=>Ue(C)).filter(C=>C.length>0)),T=new Set(m.map(C=>Ue(C)).filter(C=>C.length>0));for(const C of h){const M=r(C).baseAllowed,E=Ue(C);S?(T.delete(E),M||w.add(E)):(w.delete(E),T.add(E))}e.onOverridesChange(e.agentId,[...w],[...T])};return c`
        <section class="card">
            <div class="row" style="justify-content: space-between;">
                <div>
                    <div class="card-title">${o("agentsToolAccess")}</div>
                    <div class="card-sub">
                        ${o("agentsToolsSubText")}
                        <span class="mono">${g}/${h.length}</span> ${o("agentsEnabledCount")}
                    </div>
                </div>
                <div class="row" style="gap: 8px;">
                    <button
                            class="btn btn--sm"
                            ?disabled=${!u}
                            @click=${()=>A(!0)}
                    >
                        ${o("agentsEnableAll")}
                    </button>
                    <button
                            class="btn btn--sm"
                            ?disabled=${!u}
                            @click=${()=>A(!1)}
                    >
                        ${o("agentsDisableAll")}
                    </button>
                    <button
                            class="btn btn--sm"
                            ?disabled=${e.configLoading}
                            @click=${e.onConfigReload}
                    >
                        ${o("agentsReloadConfig")}
                    </button>
                    <button
                            class="btn btn--sm primary"
                            ?disabled=${e.configSaving||!e.configDirty}
                            @click=${e.onConfigSave}
                    >
                        ${e.configSaving?o("commonSaving"):o("commonSave")}
                    </button>
                </div>
            </div>

            ${e.configForm?v:c`
                                <div class="callout info" style="margin-top: 12px">
                                    ${o("agentsLoadConfigForTools")}
                                </div>
                            `}
            ${l?c`
                                <div class="callout info" style="margin-top: 12px">
                                    ${o("agentsExplicitAllowlist")}
                                </div>
                            `:v}
            ${d?c`
                                <div class="callout info" style="margin-top: 12px">
                                    ${o("agentsToolsGlobalAllow")}
                                </div>
                            `:v}

            <div class="agent-tools-meta" style="margin-top: 16px;">
                <div class="agent-kv">
                    <div class="label">${o("agentsProfile")}</div>
                    <div class="mono">${a}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${o("agentsSource")}</div>
                    <div>${i}</div>
                </div>
                ${e.configDirty?c`
                                    <div class="agent-kv">
                                        <div class="label">${o("agentsStatus")}</div>
                                        <div class="mono">${o("agentsUnsaved")}</div>
                                    </div>
                                `:v}
            </div>

            <div class="agent-tools-presets" style="margin-top: 16px;">
                <div class="label">${o("agentsQuickPresets")}</div>
                <div class="agent-tools-buttons">
                    ${Op().map(S=>c`
                                <button
                                        class="btn btn--sm ${a===S.id?"active":""}"
                                        ?disabled=${!u}
                                        @click=${()=>e.onProfileChange(e.agentId,S.id,!0)}
                                >
                                    ${S.label}
                                </button>
                            `)}
                    <button
                            class="btn btn--sm"
                            ?disabled=${!u}
                            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
                    >
                        ${o("agentsInherit")}
                    </button>
                </div>
            </div>

            <div class="agent-tools-grid" style="margin-top: 20px;">
                ${wi().map(S=>c`
                                    <div class="agent-tools-section">
                                        <div class="agent-tools-header">${S.label}</div>
                                        <div class="agent-tools-list">
                                            ${S.tools.map(w=>{const{allowed:T}=r(w.id);return c`
                                                    <div class="agent-tool-row">
                                                        <div>
                                                            <div class="agent-tool-title mono">${w.label}</div>
                                                            <div class="agent-tool-sub">${w.description}</div>
                                                        </div>
                                                        <label class="cfg-toggle">
                                                            <input
                                                                    type="checkbox"
                                                                    .checked=${T}
                                                                    ?disabled=${!u}
                                                                    @change=${C=>y(w.id,C.target.checked)}
                                                            />
                                                            <span class="cfg-toggle__track"></span>
                                                        </label>
                                                    </div>
                                                `})}
                                        </div>
                                    </div>
                                `)}
            </div>
        </section>
    `}function cm(){return[{id:"workspace",label:o("skillsWorkspace"),sources:["openclaw-workspace"]},{id:"built-in",label:o("skillsBuiltIn"),sources:["openclaw-bundled"]},{id:"installed",label:o("skillsInstalled"),sources:["openclaw-managed"]},{id:"extra",label:o("skillsExtra"),sources:["openclaw-extra"]}]}function dm(e){const t=cm(),n=new Map;for(const l of t)n.set(l.id,{id:l.id,label:l.label,skills:[]});const s=t.find(l=>l.id==="built-in"),a={id:"other",label:o("skillsOther"),skills:[]};for(const l of e){const d=l.bundled?s:t.find(u=>u.sources.includes(l.source));d?n.get(d.id)?.skills.push(l):a.skills.push(l)}const i=t.map(l=>n.get(l.id)).filter(l=>!!(l&&l.skills.length>0));return a.skills.length>0&&i.push(a),i}function um(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=$s(e.configForm,e.agentId),s=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,a=new Set((s??[]).map(r=>r.trim()).filter(Boolean)),i=s!==void 0,l=!!(e.report&&e.activeAgentId===e.agentId),d=l?e.report?.skills??[]:[],u=e.filter.trim().toLowerCase(),p=u?d.filter(r=>[r.name,r.description,r.source].join(" ").toLowerCase().includes(u)):d,m=dm(p),f=i?d.filter(r=>a.has(r.name)).length:d.length,h=d.length;return c`
        <section class="card">
            <div class="row" style="justify-content: space-between;">
                <div>
                    <div class="card-title">${o("skillsTitle")}</div>
                    <div class="card-sub">
                        ${o("agentsSkillsPanelSub")}
                        ${h>0?c`<span class="mono">${f}/${h}</span>`:v}
                    </div>
                </div>
                <div class="row" style="gap: 8px;">
                    <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
                        ${o("agentsUseAll")}
                    </button>
                    <button class="btn btn--sm" ?disabled=${!t}
                            @click=${()=>e.onDisableAll(e.agentId)}>
                        ${o("agentsDisableAll")}
                    </button>
                    <button
                            class="btn btn--sm"
                            ?disabled=${e.configLoading}
                            @click=${e.onConfigReload}
                    >
                        ${o("agentsReloadConfig")}
                    </button>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?o("commonLoading"):o("commonRefresh")}
                    </button>
                    <button
                            class="btn btn--sm primary"
                            ?disabled=${e.configSaving||!e.configDirty}
                            @click=${e.onConfigSave}
                    >
                        ${e.configSaving?o("commonSaving"):o("commonSave")}
                    </button>
                </div>
            </div>

            ${e.configForm?v:c`
                                <div class="callout info" style="margin-top: 12px">
                                    ${o("agentsLoadConfigForSkills")}
                                </div>
                            `}
            ${i?c`
                                <div class="callout info" style="margin-top: 12px">${o("agentsCustomAllowlist")}</div>
                            `:c`
                                <div class="callout info" style="margin-top: 12px">
                                    ${o("agentsAllSkillsEnabled")}
                                </div>
                            `}
            ${!l&&!e.loading?c`
                                <div class="callout info" style="margin-top: 12px">
                                    ${o("agentsLoadSkillsForAgent")}
                                </div>
                            `:v}
            ${e.error?c`
                                <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

            <div class="filters" style="margin-top: 14px;">
                <label class="field" style="flex: 1;">
                    <span>${o("agentsFilter")}</span>
                    <input
                            .value=${e.filter}
                            @input=${r=>e.onFilterChange(r.target.value)}
                            placeholder=${o("skillsSearchPlaceholder")}
                    />
                </label>
                <div class="muted">${p.length} ${o("skillsShown")}</div>
            </div>

            ${p.length===0?c`
                                <div class="muted" style="margin-top: 16px">${o("agentsNoSkillsFound")}</div>
                            `:c`
                                <div class="agent-skills-groups" style="margin-top: 16px;">
                                    ${m.map(r=>gm(r,{agentId:e.agentId,allowSet:a,usingAllowlist:i,editable:t,onToggle:e.onToggle}))}
                                </div>
                            `}
        </section>
    `}function gm(e,t){const n=e.id==="workspace"||e.id==="built-in";return c`
        <details class="agent-skills-group" ?open=${!n}>
            <summary class="agent-skills-header">
                <span>${e.label}</span>
                <span class="muted">${e.skills.length}</span>
            </summary>
            <div class="list skills-grid">
                ${e.skills.map(s=>pm(s,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
            </div>
        </details>
    `}function pm(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,s=[...e.missing.bins.map(i=>`bin:${i}`),...e.missing.env.map(i=>`env:${i}`),...e.missing.config.map(i=>`config:${i}`),...e.missing.os.map(i=>`os:${i}`)],a=[];return e.disabled&&a.push("disabled"),e.blockedByAllowlist&&a.push("blocked by allowlist"),c`
        <div class="list-item agent-skill-row">
            <div class="list-main">
                <div class="list-title">
                    ${e.emoji?`${e.emoji} `:""}${e.name}
                </div>
                <div class="list-sub">${e.description}</div>
                <div class="chip-row" style="margin-top: 6px;">
                    <span class="chip">${e.source}</span>
                    <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"eligible":"blocked"}
          </span>
                    ${e.disabled?c`
                                        <span class="chip chip-warn">disabled</span>
                                    `:v}
                </div>
                ${s.length>0?c`
                                    <div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:v}
                ${a.length>0?c`
                                    <div class="muted" style="margin-top: 6px;">Reason: ${a.join(", ")}</div>`:v}
            </div>
            <div class="list-meta">
                <label class="cfg-toggle">
                    <input
                            type="checkbox"
                            .checked=${n}
                            ?disabled=${!t.editable}
                            @change=${i=>t.onToggle(t.agentId,e.name,i.target.checked)}
                    />
                    <span class="cfg-toggle__track"></span>
                </label>
            </div>
        </div>
    `}const mm={feishu:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"cli_xxx"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"xxx"},{path:["credentials","domain"],label:"Domain",required:!1,type:"string",placeholder:"open.feishu.cn"},{path:["credentials","encryptKey"],label:"Encrypt Key",required:!1,type:"string"},{path:["credentials","verificationToken"],label:"Verification Token",required:!1,type:"string"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},dingtalk:{fields:[{path:["credentials","clientId"],label:"Client ID",required:!0,type:"string",placeholder:"your-client-id"},{path:["credentials","clientSecret"],label:"Client Secret",required:!0,type:"string",placeholder:"your-client-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},wework:{fields:[{path:["credentials","corpId"],label:"Corp ID",required:!0,type:"string",placeholder:"your-corp-id"},{path:["credentials","agentId"],label:"Agent ID",required:!0,type:"string",placeholder:"your-agent-id"},{path:["credentials","secret"],label:"Secret",required:!0,type:"string",placeholder:"your-secret"},{path:["credentials","token"],label:"Token",required:!0,type:"string",placeholder:"your-token"},{path:["credentials","encodingAESKey"],label:"Encoding AES Key",required:!1,type:"string"},{path:["webhookPort"],label:"Webhook Port",required:!1,type:"number",placeholder:"8766"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-or-chat-id"}]},telegram:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Telegram"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},slack:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Slack"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},discord:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Discord"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},whatsapp:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"WhatsApp"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},qq:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"your-app-id"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"your-app-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-openid-1"}]}};function fm(e){const t=e.toLowerCase();return mm[t]??null}function hm(e,t){let n=e;for(const s of t){if(n==null||typeof n!="object")return;n=n[s]}return n}function vm(e,t){const s=(e.channels??{})[t],a=e[t];return(s&&typeof s=="object"?s:null)??(a&&typeof a=="object"?a:null)??{}}function bm(e,t){return e==null?"":t.type==="boolean"?e?"true":"false":t.type==="string[]"?Array.isArray(e)?e.join(", "):typeof e=="string"?e:"":String(e)}function ym(e,t){if(t.type==="boolean")return e==="true"||e==="1"||e.toLowerCase()==="yes";if(t.type==="number"){const n=parseInt(e,10);return isNaN(n)?void 0:n}return t.type==="string[]"?e.trim()?e.split(/,\s*/).map(n=>n.trim()).filter(Boolean):[]:e}function xm(e){const t=fm(e.channelId),n=e.configValue??{},s=vm(n,e.channelId);return t?c`
    <div class="config-form">
      ${t.fields.map(a=>{const i=hm(s,a.path),l=bm(i,a),d=["channels",e.channelId,...a.path];return c`
          <div class="field">
            <span>
              ${a.label}
              ${a.required?c`<span style="color: var(--danger-color);">*</span>`:""}
            </span>
            ${a.type==="boolean"?c`
                  <div class="row" style="align-items: center; gap: 8px;">
                    <input
                      type="checkbox"
                      ?checked=${i===!0}
                      ?disabled=${e.disabled}
                      @change=${u=>e.onPatch(d,u.target.checked)}
                    />
                  </div>
                `:c`
                  <input
                    type="${a.type==="number"?"number":"text"}"
                    .value=${l}
                    placeholder=${a.placeholder??""}
                    ?disabled=${e.disabled}
                    @input=${u=>{const p=u.target.value;e.onPatch(d,ym(p,a))}}
                  />
                `}
          </div>
        `})}
    </div>
  `:c`
      <div class="callout danger">${o("channelsConfigSchemaUnavailable")}</div>
    `}function $m(e){const{channelId:t,props:n}=e,s=n.configSaving;return c`
    <div style="margin-top: 16px;">
      ${xm({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?o("commonSaving"):o("commonSave")}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          ${o("commonReload")}
        </button>
      </div>
    </div>
  `}const wm={whatsapp:"WhatsApp",telegram:"Telegram",discord:"Discord",googlechat:"Google Chat",slack:"Slack",signal:"Signal",imessage:"iMessage",nostr:"Nostr",dingtalk:"DingTalk",feishu:"Feishu",wework:"WeWork",qq:"QQ"};function km(e){const t=e.selectedChannelId;if(!t)return v;const n=wm[t.toLowerCase()]??t.charAt(0).toUpperCase()+t.slice(1);return c`
    <div
      class="channel-panel-overlay"
      @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onChannelSelect(null)}}
    >
      <div class="channel-panel card" @click=${s=>s.stopPropagation()}>
        <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
          <div class="card-title">${n} ${o("configSettingsTitle")}</div>
          <button class="btn" @click=${()=>e.onChannelSelect(null)}>×</button>
        </div>
        <div class="channel-panel-content">
          ${$m({channelId:t,props:e})}
        </div>
      </div>
    </div>
  `}function Sm(e){const{props:t,discord:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">${o("channelDiscord")}</div>
      <div class="card-sub">${o("channelDiscordSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${o("channelConfigured")}</span>
          <span>${n?.configured?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelRunning")}</span>
          <span>${n?.running?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):o("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            ${o("channelProbe")} ${n.probe.ok?o("channelProbeOk"):o("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("discord")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Am(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">${o("channelGoogleChat")}</div>
      <div class="card-sub">${o("channelGoogleChatSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${o("channelConfigured")}</span>
          <span>${n?n.configured?o("commonYes"):o("commonNo"):o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelRunning")}</span>
          <span>${n?n.running?o("commonYes"):o("commonNo"):o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelCredential")}</span>
          <span>${n?.credentialSource??o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelAudience")}</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:o("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${o("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):o("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            ${o("channelProbe")} ${n.probe.ok?o("channelProbeOk"):o("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("googlechat")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Cm(e){const{props:t,imessage:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">${o("channelIMessage")}</div>
      <div class="card-sub">${o("channelIMessageSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${o("channelConfigured")}</span>
          <span>${n?.configured?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelRunning")}</span>
          <span>${n?.running?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):o("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            ${o("channelProbe")} ${n.probe.ok?o("channelProbeOk"):o("channelProbeFailed")} ·
            ${n.probe.error??""}
          </div>`:v}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("imessage")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Ci(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:o("commonNA")}function Tm(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:a,profileFormState:i,profileFormCallbacks:l,onEditProfile:d}=e,u=s[0],p=n?.configured??u?.configured??!1,m=n?.running??u?.running??!1,f=n?.publicKey??u?.publicKey,h=n?.lastStartAt??u?.lastStartAt??null,r=n?.lastError??u?.lastError??null,g=s.length>1,y=i!=null,A=w=>{const T=w.publicKey,C=w.profile,M=C?.displayName??C?.name??w.name??w.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${M}</div>
          <div class="account-card-id">${w.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${o("channelRunning")}</span>
            <span>${w.running?o("commonYes"):o("commonNo")}</span>
          </div>
          <div>
            <span class="label">${o("channelConfigured")}</span>
            <span>${w.configured?o("commonYes"):o("commonNo")}</span>
          </div>
          <div>
            <span class="label">${o("channelPublicKey")}</span>
            <span class="monospace" title="${T??""}">${Ci(T)}</span>
          </div>
          <div>
            <span class="label">${o("channelLastInbound")}</span>
            <span>${w.lastInboundAt?Q(w.lastInboundAt):o("commonNA")}</span>
          </div>
          ${w.lastError?c`
                <div class="account-card-error">${w.lastError}</div>
              `:v}
        </div>
      </div>
    `},S=()=>{if(y&&l)return nd({state:i,callbacks:l,accountId:s[0]?.accountId??"default"});const w=u?.profile??n?.profile,{name:T,displayName:C,about:M,picture:E,nip05:I}=w??{},K=T||C||M||E||I;return c`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">${o("nostrProfile")}</div>
          ${p?c`
                <button
                  class="btn btn-sm"
                  @click=${d}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  ${o("nostrEditProfile")}
                </button>
              `:v}
        </div>
        ${K?c`
              <div class="status-list">
                ${E?c`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${E}
                          alt=${o("nostrProfilePreview")}
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${Z=>{Z.target.style.display="none"}}
                        />
                      </div>
                    `:v}
                ${T?c`<div><span class="label">${o("nostrName")}</span><span>${T}</span></div>`:v}
                ${C?c`<div><span class="label">${o("nostrDisplayName")}</span><span>${C}</span></div>`:v}
                ${M?c`<div><span class="label">${o("nostrAbout")}</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${M}</span></div>`:v}
                ${I?c`<div><span class="label">${o("nostrNip05")}</span><span>${I}</span></div>`:v}
              </div>
            `:c`
                <div style="color: var(--text-muted); font-size: 13px">
                  ${o("nostrNoProfileSet")}
                </div>
              `}
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">${o("channelNostr")}</div>
      <div class="card-sub">${o("channelNostrSub")}</div>
      ${a}

      ${g?c`
            <div class="account-card-list">
              ${s.map(w=>A(w))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${o("channelConfigured")}</span>
                <span>${o(p?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${o("channelRunning")}</span>
                <span>${o(m?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${o("channelPublicKey")}</span>
                <span class="monospace" title="${f??""}"
                  >${Ci(f)}</span
                >
              </div>
              <div>
                <span class="label">${o("channelLastStart")}</span>
                <span>${h?Q(h):o("commonNA")}</span>
              </div>
            </div>
          `}

      ${r?c`<div class="callout danger" style="margin-top: 12px;">${r}</div>`:v}

      ${S()}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>${o("commonRefresh")}</button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("nostr")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Mm(e){if(!e&&e!==0)return o("commonNA");const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);return n<60?`${n}m`:`${Math.round(n/60)}h`}function Em(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const a=s[e],i=typeof a?.configured=="boolean"&&a.configured,l=typeof a?.running=="boolean"&&a.running,d=typeof a?.connected=="boolean"&&a.connected,p=(n.channelAccounts?.[e]??[]).some(m=>m.configured||m.running||m.connected);return i||l||d||p}function Pm(e,t){return t?.[e]?.length??0}function Ir(e,t){const n=Pm(e,t);return n<2?v:c`<div class="account-count">${o("channelAccounts")} (${n})</div>`}function Dm(e){const{props:t,signal:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">${o("channelSignal")}</div>
      <div class="card-sub">${o("channelSignalSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${o("channelConfigured")}</span>
          <span>${n?.configured?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelRunning")}</span>
          <span>${n?.running?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelBaseUrl")}</span>
          <span>${n?.baseUrl??o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):o("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            ${o("channelProbe")} ${n.probe.ok?o("channelProbeOk"):o("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("signal")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Lm(e){const{props:t,slack:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">${o("channelSlack")}</div>
      <div class="card-sub">${o("channelSlackSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${o("channelConfigured")}</span>
          <span>${n?.configured?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelRunning")}</span>
          <span>${n?.running?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):o("commonNA")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):o("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            ${o("channelProbe")} ${n.probe.ok?o("channelProbeOk"):o("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("slack")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Im(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:a}=e,i=s.length>1,l=d=>{const p=d.probe?.bot?.username,m=d.name||d.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${p?`@${p}`:m}
          </div>
          <div class="account-card-id">${d.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${o("channelRunning")}</span>
            <span>${d.running?o("commonYes"):o("commonNo")}</span>
          </div>
          <div>
            <span class="label">${o("channelConfigured")}</span>
            <span>${d.configured?o("commonYes"):o("commonNo")}</span>
          </div>
          <div>
            <span class="label">${o("channelLastInbound")}</span>
            <span>${d.lastInboundAt?Q(d.lastInboundAt):o("commonNA")}</span>
          </div>
          ${d.lastError?c`
                <div class="account-card-error">
                  ${d.lastError}
                </div>
              `:v}
        </div>
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">${o("channelTelegram")}</div>
      <div class="card-sub">${o("channelTelegramSub")}</div>
      ${a}

      ${i?c`
            <div class="account-card-list">
              ${s.map(d=>l(d))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${o("channelConfigured")}</span>
                <span>${n?.configured?o("commonYes"):o("commonNo")}</span>
              </div>
              <div>
                <span class="label">${o("channelRunning")}</span>
                <span>${n?.running?o("commonYes"):o("commonNo")}</span>
              </div>
              <div>
                <span class="label">${o("channelMode")}</span>
                <span>${n?.mode??o("commonNA")}</span>
              </div>
              <div>
                <span class="label">${o("channelLastStart")}</span>
                <span>${n?.lastStartAt?Q(n.lastStartAt):o("commonNA")}</span>
              </div>
              <div>
                <span class="label">${o("channelLastProbe")}</span>
                <span>${n?.lastProbeAt?Q(n.lastProbeAt):o("commonNA")}</span>
              </div>
            </div>
          `}

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            ${o("channelProbe")} ${n.probe.ok?o("channelProbeOk"):o("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("telegram")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function _m(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">${o("channelWhatsApp")}</div>
      <div class="card-sub">${o("channelWhatsAppSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${o("channelConfigured")}</span>
          <span>${n?.configured?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelLinked")}</span>
          <span>${n?.linked?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelRunning")}</span>
          <span>${n?.running?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelConnected")}</span>
          <span>${n?.connected?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelLastConnect")}</span>
          <span>
            ${n?.lastConnectedAt?Q(n.lastConnectedAt):o("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${o("channelLastMessage")}</span>
          <span>
            ${n?.lastMessageAt?Q(n.lastMessageAt):o("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${o("channelAuthAge")}</span>
          <span>
            ${n?.authAgeMs!=null?Mm(n.authAgeMs):o("commonNA")}
          </span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${t.whatsappMessage?c`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:v}

      ${t.whatsappQrDataUrl?c`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:v}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?o("channelWhatsAppWorking"):o("channelShowQr")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          ${o("channelRelink")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          ${o("channelWaitForScan")}
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          ${o("channelLogout")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("commonRefresh")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("whatsapp")}>
          ${o("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Rm(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,a=t?.discord??null,i=t?.googlechat??null,l=t?.slack??null,d=t?.signal??null,u=t?.imessage??null,p=t?.nostr??null,f=Nm(e.snapshot).map((h,r)=>({key:h,enabled:Em(h,e),order:r})).toSorted((h,r)=>h.enabled!==r.enabled?h.enabled?-1:1:h.order-r.order);return c`
    <section class="grid grid-cols-2">
      ${f.map(h=>Fm(h.key,e,{whatsapp:n,telegram:s,discord:a,googlechat:i,slack:l,signal:d,imessage:u,nostr:p,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    ${km(e)}

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${o("channelsHealth")}</div>
          <div class="card-sub">${o("channelsHealthSub")}</div>
        </div>
        <div class="muted">${e.lastSuccessAt?Q(e.lastSuccessAt):o("commonNA")}</div>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):o("channelsNoSnapshot")}
      </pre>
    </section>
  `}function Nm(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function Fm(e,t,n){const s=Ir(e,n.channelAccounts);switch(e){case"whatsapp":return _m({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return Im({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return Sm({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return Am({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return Lm({props:t,slack:n.slack,accountCountLabel:s});case"signal":return Dm({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return Cm({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const a=n.channelAccounts?.nostr??[],i=a[0],l=i?.accountId??"default",d=i?.profile??null,u=t.nostrProfileAccountId===l?t.nostrProfileFormState:null,p=u?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return Tm({props:t,nostr:n.nostr,nostrAccounts:a,accountCountLabel:s,profileFormState:u,profileFormCallbacks:p,onEditProfile:()=>t.onNostrProfileEdit(l,d)})}default:return Um(e,t,n.channelAccounts??{})}}function Um(e,t,n){const s=Bm(t.snapshot,e),a=t.snapshot?.channels?.[e],i=typeof a?.configured=="boolean"?a.configured:void 0,l=typeof a?.running=="boolean"?a.running:void 0,d=typeof a?.connected=="boolean"?a.connected:void 0,u=typeof a?.lastError=="string"?a.lastError:void 0,p=n[e]??[],m=Ir(e,n);return c`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">${o("channelGenericSub")}</div>
      ${m}

      ${p.length>0?c`
            <div class="account-card-list">
              ${p.map(f=>jm(f))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${o("channelConfigured")}</span>
                <span>${i==null?o("commonNA"):o(i?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${o("channelRunning")}</span>
                <span>${l==null?o("commonNA"):o(l?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${o("channelConnected")}</span>
                <span>${d==null?o("commonNA"):o(d?"commonYes":"commonNo")}</span>
              </div>
            </div>
          `}

      ${u?c`<div class="callout danger" style="margin-top: 12px;">
            ${u}
          </div>`:v}

      <div class="row" style="margin-top: 12px;">
        <button class="btn primary" @click=${()=>t.onChannelSelect(e)}>
          ${o("channelsConfigure")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${o("commonRefresh")}
        </button>
      </div>
    </div>
  `}function Om(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function Bm(e,t){return Om(e)[t]?.label??e?.channelLabels?.[t]??t}const Hm=600*1e3;function _r(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<Hm:!1}function Km(e){return e.running?"commonYes":_r(e)?"channelActive":"commonNo"}function zm(e){return e.connected===!0?"commonYes":e.connected===!1?"commonNo":_r(e)?"channelActive":"commonNA"}function jm(e){const t=Km(e),n=zm(e);return c`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">${o("channelRunning")}</span>
          <span>${o(t)}</span>
        </div>
        <div>
          <span class="label">${o("channelConfigured")}</span>
          <span>${e.configured?o("commonYes"):o("commonNo")}</span>
        </div>
        <div>
          <span class="label">${o("channelConnected")}</span>
          <span>${o(n)}</span>
        </div>
        <div>
          <span class="label">${o("channelLastInbound")}</span>
          <span>${e.lastInboundAt?Q(e.lastInboundAt):o("commonNA")}</span>
        </div>
        ${e.lastError?c`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:v}
      </div>
    </div>
  `}const pn=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),pn(s,t);return!0},es=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Rr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Vm(t)}};function qm(e){this._$AN!==void 0?(es(this),this._$AM=e,Rr(this)):this._$AM=e}function Wm(e,t=!1,n=0){const s=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(s))for(let i=n;i<s.length;i++)pn(s[i],!1),es(s[i]);else s!=null&&(pn(s,!1),es(s));else pn(this,e)}const Vm=e=>{e.type==lo.CHILD&&(e._$AP??=Wm,e._$AQ??=qm)};class Gm extends co{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),Rr(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(pn(this,t),es(this))}setValue(t){if(up(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Gs=new WeakMap,Qm=ro(class extends Gm{render(e){return v}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),v}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Gs.get(t);n===void 0&&(n=new WeakMap,Gs.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Gs.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class ka extends co{constructor(t){if(super(t),this.it=v,t.type!==lo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===et)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}ka.directiveName="unsafeHTML",ka.resultType=1;const ts=ro(ka);const{entries:Nr,setPrototypeOf:Ti,isFrozen:Jm,getPrototypeOf:Ym,getOwnPropertyDescriptor:Zm}=Object;let{freeze:xe,seal:Ee,create:Sa}=Object,{apply:Aa,construct:Ca}=typeof Reflect<"u"&&Reflect;xe||(xe=function(t){return t});Ee||(Ee=function(t){return t});Aa||(Aa=function(t,n){for(var s=arguments.length,a=new Array(s>2?s-2:0),i=2;i<s;i++)a[i-2]=arguments[i];return t.apply(n,a)});Ca||(Ca=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return new t(...s)});const Un=$e(Array.prototype.forEach),Xm=$e(Array.prototype.lastIndexOf),Mi=$e(Array.prototype.pop),Zt=$e(Array.prototype.push),ef=$e(Array.prototype.splice),Wn=$e(String.prototype.toLowerCase),Qs=$e(String.prototype.toString),Js=$e(String.prototype.match),Xt=$e(String.prototype.replace),tf=$e(String.prototype.indexOf),nf=$e(String.prototype.trim),Pe=$e(Object.prototype.hasOwnProperty),be=$e(RegExp.prototype.test),en=sf(TypeError);function $e(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return Aa(e,t,s)}}function sf(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return Ca(e,n)}}function q(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Wn;Ti&&Ti(e,null);let s=t.length;for(;s--;){let a=t[s];if(typeof a=="string"){const i=n(a);i!==a&&(Jm(t)||(t[s]=i),a=i)}e[a]=!0}return e}function af(e){for(let t=0;t<e.length;t++)Pe(e,t)||(e[t]=null);return e}function Fe(e){const t=Sa(null);for(const[n,s]of Nr(e))Pe(e,n)&&(Array.isArray(s)?t[n]=af(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Fe(s):t[n]=s);return t}function tn(e,t){for(;e!==null;){const s=Zm(e,t);if(s){if(s.get)return $e(s.get);if(typeof s.value=="function")return $e(s.value)}e=Ym(e)}function n(){return null}return n}const Ei=xe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ys=xe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Zs=xe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),of=xe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Xs=xe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),lf=xe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Pi=xe(["#text"]),Di=xe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ea=xe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Li=xe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),On=xe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),rf=Ee(/\{\{[\w\W]*|[\w\W]*\}\}/gm),cf=Ee(/<%[\w\W]*|[\w\W]*%>/gm),df=Ee(/\$\{[\w\W]*/gm),uf=Ee(/^data-[\-\w.\u00B7-\uFFFF]+$/),gf=Ee(/^aria-[\-\w]+$/),Fr=Ee(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),pf=Ee(/^(?:\w+script|data):/i),mf=Ee(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ur=Ee(/^html$/i),ff=Ee(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ii=Object.freeze({__proto__:null,ARIA_ATTR:gf,ATTR_WHITESPACE:mf,CUSTOM_ELEMENT:ff,DATA_ATTR:uf,DOCTYPE_NAME:Ur,ERB_EXPR:cf,IS_ALLOWED_URI:Fr,IS_SCRIPT_OR_DATA:pf,MUSTACHE_EXPR:rf,TMPLIT_EXPR:df});const nn={element:1,text:3,progressingInstruction:7,comment:8,document:9},hf=function(){return typeof window>"u"?null:window},vf=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(s=n.getAttribute(a));const i="dompurify"+(s?"#"+s:"");try{return t.createPolicy(i,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},_i=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Or(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hf();const t=H=>Or(H);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==nn.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,a=s.currentScript,{DocumentFragment:i,HTMLTemplateElement:l,Node:d,Element:u,NodeFilter:p,NamedNodeMap:m=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:r}=e,g=u.prototype,y=tn(g,"cloneNode"),A=tn(g,"remove"),S=tn(g,"nextSibling"),w=tn(g,"childNodes"),T=tn(g,"parentNode");if(typeof l=="function"){const H=n.createElement("template");H.content&&H.content.ownerDocument&&(n=H.content.ownerDocument)}let C,M="";const{implementation:E,createNodeIterator:I,createDocumentFragment:K,getElementsByTagName:Z}=n,{importNode:ie}=s;let _=_i();t.isSupported=typeof Nr=="function"&&typeof T=="function"&&E&&E.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:z,ERB_EXPR:pe,TMPLIT_EXPR:P,DATA_ATTR:B,ARIA_ATTR:le,IS_SCRIPT_OR_DATA:re,ATTR_WHITESPACE:ee,CUSTOM_ELEMENT:ae}=Ii;let{IS_ALLOWED_URI:L}=Ii,R=null;const N=q({},[...Ei,...Ys,...Zs,...Xs,...Pi]);let j=null;const Se=q({},[...Di,...ea,...Li,...On]);let Y=Object.seal(Sa(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,te=null;const ve=Object.seal(Sa(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Be=!0,He=!0,at=!1,Co=!0,Tt=!1,Cn=!0,ot=!1,As=!1,Cs=!1,Mt=!1,Tn=!1,Mn=!1,To=!0,Mo=!1;const uc="user-content-";let Ts=!0,Gt=!1,Et={},_e=null;const Ms=q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Eo=null;const Po=q({},["audio","video","img","source","image","track"]);let Es=null;const Do=q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),En="http://www.w3.org/1998/Math/MathML",Pn="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml";let Pt=Ke,Ps=!1,Ds=null;const gc=q({},[En,Pn,Ke],Qs);let Dn=q({},["mi","mo","mn","ms","mtext"]),Ln=q({},["annotation-xml"]);const pc=q({},["title","style","font","a","script"]);let Qt=null;const mc=["application/xhtml+xml","text/html"],fc="text/html";let oe=null,Dt=null;const hc=n.createElement("form"),Lo=function(k){return k instanceof RegExp||k instanceof Function},Ls=function(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Dt&&Dt===k)){if((!k||typeof k!="object")&&(k={}),k=Fe(k),Qt=mc.indexOf(k.PARSER_MEDIA_TYPE)===-1?fc:k.PARSER_MEDIA_TYPE,oe=Qt==="application/xhtml+xml"?Qs:Wn,R=Pe(k,"ALLOWED_TAGS")?q({},k.ALLOWED_TAGS,oe):N,j=Pe(k,"ALLOWED_ATTR")?q({},k.ALLOWED_ATTR,oe):Se,Ds=Pe(k,"ALLOWED_NAMESPACES")?q({},k.ALLOWED_NAMESPACES,Qs):gc,Es=Pe(k,"ADD_URI_SAFE_ATTR")?q(Fe(Do),k.ADD_URI_SAFE_ATTR,oe):Do,Eo=Pe(k,"ADD_DATA_URI_TAGS")?q(Fe(Po),k.ADD_DATA_URI_TAGS,oe):Po,_e=Pe(k,"FORBID_CONTENTS")?q({},k.FORBID_CONTENTS,oe):Ms,Ce=Pe(k,"FORBID_TAGS")?q({},k.FORBID_TAGS,oe):Fe({}),te=Pe(k,"FORBID_ATTR")?q({},k.FORBID_ATTR,oe):Fe({}),Et=Pe(k,"USE_PROFILES")?k.USE_PROFILES:!1,Be=k.ALLOW_ARIA_ATTR!==!1,He=k.ALLOW_DATA_ATTR!==!1,at=k.ALLOW_UNKNOWN_PROTOCOLS||!1,Co=k.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Tt=k.SAFE_FOR_TEMPLATES||!1,Cn=k.SAFE_FOR_XML!==!1,ot=k.WHOLE_DOCUMENT||!1,Mt=k.RETURN_DOM||!1,Tn=k.RETURN_DOM_FRAGMENT||!1,Mn=k.RETURN_TRUSTED_TYPE||!1,Cs=k.FORCE_BODY||!1,To=k.SANITIZE_DOM!==!1,Mo=k.SANITIZE_NAMED_PROPS||!1,Ts=k.KEEP_CONTENT!==!1,Gt=k.IN_PLACE||!1,L=k.ALLOWED_URI_REGEXP||Fr,Pt=k.NAMESPACE||Ke,Dn=k.MATHML_TEXT_INTEGRATION_POINTS||Dn,Ln=k.HTML_INTEGRATION_POINTS||Ln,Y=k.CUSTOM_ELEMENT_HANDLING||{},k.CUSTOM_ELEMENT_HANDLING&&Lo(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Y.tagNameCheck=k.CUSTOM_ELEMENT_HANDLING.tagNameCheck),k.CUSTOM_ELEMENT_HANDLING&&Lo(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Y.attributeNameCheck=k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),k.CUSTOM_ELEMENT_HANDLING&&typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Y.allowCustomizedBuiltInElements=k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Tt&&(He=!1),Tn&&(Mt=!0),Et&&(R=q({},Pi),j=[],Et.html===!0&&(q(R,Ei),q(j,Di)),Et.svg===!0&&(q(R,Ys),q(j,ea),q(j,On)),Et.svgFilters===!0&&(q(R,Zs),q(j,ea),q(j,On)),Et.mathMl===!0&&(q(R,Xs),q(j,Li),q(j,On))),k.ADD_TAGS&&(typeof k.ADD_TAGS=="function"?ve.tagCheck=k.ADD_TAGS:(R===N&&(R=Fe(R)),q(R,k.ADD_TAGS,oe))),k.ADD_ATTR&&(typeof k.ADD_ATTR=="function"?ve.attributeCheck=k.ADD_ATTR:(j===Se&&(j=Fe(j)),q(j,k.ADD_ATTR,oe))),k.ADD_URI_SAFE_ATTR&&q(Es,k.ADD_URI_SAFE_ATTR,oe),k.FORBID_CONTENTS&&(_e===Ms&&(_e=Fe(_e)),q(_e,k.FORBID_CONTENTS,oe)),k.ADD_FORBID_CONTENTS&&(_e===Ms&&(_e=Fe(_e)),q(_e,k.ADD_FORBID_CONTENTS,oe)),Ts&&(R["#text"]=!0),ot&&q(R,["html","head","body"]),R.table&&(q(R,["tbody"]),delete Ce.tbody),k.TRUSTED_TYPES_POLICY){if(typeof k.TRUSTED_TYPES_POLICY.createHTML!="function")throw en('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof k.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw en('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=k.TRUSTED_TYPES_POLICY,M=C.createHTML("")}else C===void 0&&(C=vf(r,a)),C!==null&&typeof M=="string"&&(M=C.createHTML(""));xe&&xe(k),Dt=k}},Io=q({},[...Ys,...Zs,...of]),_o=q({},[...Xs,...lf]),vc=function(k){let D=T(k);(!D||!D.tagName)&&(D={namespaceURI:Pt,tagName:"template"});const U=Wn(k.tagName),X=Wn(D.tagName);return Ds[k.namespaceURI]?k.namespaceURI===Pn?D.namespaceURI===Ke?U==="svg":D.namespaceURI===En?U==="svg"&&(X==="annotation-xml"||Dn[X]):!!Io[U]:k.namespaceURI===En?D.namespaceURI===Ke?U==="math":D.namespaceURI===Pn?U==="math"&&Ln[X]:!!_o[U]:k.namespaceURI===Ke?D.namespaceURI===Pn&&!Ln[X]||D.namespaceURI===En&&!Dn[X]?!1:!_o[U]&&(pc[U]||!Io[U]):!!(Qt==="application/xhtml+xml"&&Ds[k.namespaceURI]):!1},Re=function(k){Zt(t.removed,{element:k});try{T(k).removeChild(k)}catch{A(k)}},it=function(k,D){try{Zt(t.removed,{attribute:D.getAttributeNode(k),from:D})}catch{Zt(t.removed,{attribute:null,from:D})}if(D.removeAttribute(k),k==="is")if(Mt||Tn)try{Re(D)}catch{}else try{D.setAttribute(k,"")}catch{}},Ro=function(k){let D=null,U=null;if(Cs)k="<remove></remove>"+k;else{const se=Js(k,/^[\r\n\t ]+/);U=se&&se[0]}Qt==="application/xhtml+xml"&&Pt===Ke&&(k='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+k+"</body></html>");const X=C?C.createHTML(k):k;if(Pt===Ke)try{D=new h().parseFromString(X,Qt)}catch{}if(!D||!D.documentElement){D=E.createDocument(Pt,"template",null);try{D.documentElement.innerHTML=Ps?M:X}catch{}}const me=D.body||D.documentElement;return k&&U&&me.insertBefore(n.createTextNode(U),me.childNodes[0]||null),Pt===Ke?Z.call(D,ot?"html":"body")[0]:ot?D.documentElement:me},No=function(k){return I.call(k.ownerDocument||k,k,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null)},Is=function(k){return k instanceof f&&(typeof k.nodeName!="string"||typeof k.textContent!="string"||typeof k.removeChild!="function"||!(k.attributes instanceof m)||typeof k.removeAttribute!="function"||typeof k.setAttribute!="function"||typeof k.namespaceURI!="string"||typeof k.insertBefore!="function"||typeof k.hasChildNodes!="function")},Fo=function(k){return typeof d=="function"&&k instanceof d};function ze(H,k,D){Un(H,U=>{U.call(t,k,D,Dt)})}const Uo=function(k){let D=null;if(ze(_.beforeSanitizeElements,k,null),Is(k))return Re(k),!0;const U=oe(k.nodeName);if(ze(_.uponSanitizeElement,k,{tagName:U,allowedTags:R}),Cn&&k.hasChildNodes()&&!Fo(k.firstElementChild)&&be(/<[/\w!]/g,k.innerHTML)&&be(/<[/\w!]/g,k.textContent)||k.nodeType===nn.progressingInstruction||Cn&&k.nodeType===nn.comment&&be(/<[/\w]/g,k.data))return Re(k),!0;if(!(ve.tagCheck instanceof Function&&ve.tagCheck(U))&&(!R[U]||Ce[U])){if(!Ce[U]&&Bo(U)&&(Y.tagNameCheck instanceof RegExp&&be(Y.tagNameCheck,U)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(U)))return!1;if(Ts&&!_e[U]){const X=T(k)||k.parentNode,me=w(k)||k.childNodes;if(me&&X){const se=me.length;for(let we=se-1;we>=0;--we){const je=y(me[we],!0);je.__removalCount=(k.__removalCount||0)+1,X.insertBefore(je,S(k))}}}return Re(k),!0}return k instanceof u&&!vc(k)||(U==="noscript"||U==="noembed"||U==="noframes")&&be(/<\/no(script|embed|frames)/i,k.innerHTML)?(Re(k),!0):(Tt&&k.nodeType===nn.text&&(D=k.textContent,Un([z,pe,P],X=>{D=Xt(D,X," ")}),k.textContent!==D&&(Zt(t.removed,{element:k.cloneNode()}),k.textContent=D)),ze(_.afterSanitizeElements,k,null),!1)},Oo=function(k,D,U){if(To&&(D==="id"||D==="name")&&(U in n||U in hc))return!1;if(!(He&&!te[D]&&be(B,D))){if(!(Be&&be(le,D))){if(!(ve.attributeCheck instanceof Function&&ve.attributeCheck(D,k))){if(!j[D]||te[D]){if(!(Bo(k)&&(Y.tagNameCheck instanceof RegExp&&be(Y.tagNameCheck,k)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(k))&&(Y.attributeNameCheck instanceof RegExp&&be(Y.attributeNameCheck,D)||Y.attributeNameCheck instanceof Function&&Y.attributeNameCheck(D,k))||D==="is"&&Y.allowCustomizedBuiltInElements&&(Y.tagNameCheck instanceof RegExp&&be(Y.tagNameCheck,U)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(U))))return!1}else if(!Es[D]){if(!be(L,Xt(U,ee,""))){if(!((D==="src"||D==="xlink:href"||D==="href")&&k!=="script"&&tf(U,"data:")===0&&Eo[k])){if(!(at&&!be(re,Xt(U,ee,"")))){if(U)return!1}}}}}}}return!0},Bo=function(k){return k!=="annotation-xml"&&Js(k,ae)},Ho=function(k){ze(_.beforeSanitizeAttributes,k,null);const{attributes:D}=k;if(!D||Is(k))return;const U={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j,forceKeepAttr:void 0};let X=D.length;for(;X--;){const me=D[X],{name:se,namespaceURI:we,value:je}=me,Lt=oe(se),_s=je;let ue=se==="value"?_s:nf(_s);if(U.attrName=Lt,U.attrValue=ue,U.keepAttr=!0,U.forceKeepAttr=void 0,ze(_.uponSanitizeAttribute,k,U),ue=U.attrValue,Mo&&(Lt==="id"||Lt==="name")&&(it(se,k),ue=uc+ue),Cn&&be(/((--!?|])>)|<\/(style|title|textarea)/i,ue)){it(se,k);continue}if(Lt==="attributename"&&Js(ue,"href")){it(se,k);continue}if(U.forceKeepAttr)continue;if(!U.keepAttr){it(se,k);continue}if(!Co&&be(/\/>/i,ue)){it(se,k);continue}Tt&&Un([z,pe,P],zo=>{ue=Xt(ue,zo," ")});const Ko=oe(k.nodeName);if(!Oo(Ko,Lt,ue)){it(se,k);continue}if(C&&typeof r=="object"&&typeof r.getAttributeType=="function"&&!we)switch(r.getAttributeType(Ko,Lt)){case"TrustedHTML":{ue=C.createHTML(ue);break}case"TrustedScriptURL":{ue=C.createScriptURL(ue);break}}if(ue!==_s)try{we?k.setAttributeNS(we,se,ue):k.setAttribute(se,ue),Is(k)?Re(k):Mi(t.removed)}catch{it(se,k)}}ze(_.afterSanitizeAttributes,k,null)},bc=function H(k){let D=null;const U=No(k);for(ze(_.beforeSanitizeShadowDOM,k,null);D=U.nextNode();)ze(_.uponSanitizeShadowNode,D,null),Uo(D),Ho(D),D.content instanceof i&&H(D.content);ze(_.afterSanitizeShadowDOM,k,null)};return t.sanitize=function(H){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},D=null,U=null,X=null,me=null;if(Ps=!H,Ps&&(H="<!-->"),typeof H!="string"&&!Fo(H))if(typeof H.toString=="function"){if(H=H.toString(),typeof H!="string")throw en("dirty is not a string, aborting")}else throw en("toString is not a function");if(!t.isSupported)return H;if(As||Ls(k),t.removed=[],typeof H=="string"&&(Gt=!1),Gt){if(H.nodeName){const je=oe(H.nodeName);if(!R[je]||Ce[je])throw en("root node is forbidden and cannot be sanitized in-place")}}else if(H instanceof d)D=Ro("<!---->"),U=D.ownerDocument.importNode(H,!0),U.nodeType===nn.element&&U.nodeName==="BODY"||U.nodeName==="HTML"?D=U:D.appendChild(U);else{if(!Mt&&!Tt&&!ot&&H.indexOf("<")===-1)return C&&Mn?C.createHTML(H):H;if(D=Ro(H),!D)return Mt?null:Mn?M:""}D&&Cs&&Re(D.firstChild);const se=No(Gt?H:D);for(;X=se.nextNode();)Uo(X),Ho(X),X.content instanceof i&&bc(X.content);if(Gt)return H;if(Mt){if(Tn)for(me=K.call(D.ownerDocument);D.firstChild;)me.appendChild(D.firstChild);else me=D;return(j.shadowroot||j.shadowrootmode)&&(me=ie.call(s,me,!0)),me}let we=ot?D.outerHTML:D.innerHTML;return ot&&R["!doctype"]&&D.ownerDocument&&D.ownerDocument.doctype&&D.ownerDocument.doctype.name&&be(Ur,D.ownerDocument.doctype.name)&&(we="<!DOCTYPE "+D.ownerDocument.doctype.name+`>
`+we),Tt&&Un([z,pe,P],je=>{we=Xt(we,je," ")}),C&&Mn?C.createHTML(we):we},t.setConfig=function(){let H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ls(H),As=!0},t.clearConfig=function(){Dt=null,As=!1},t.isValidAttribute=function(H,k,D){Dt||Ls({});const U=oe(H),X=oe(k);return Oo(U,X,D)},t.addHook=function(H,k){typeof k=="function"&&Zt(_[H],k)},t.removeHook=function(H,k){if(k!==void 0){const D=Xm(_[H],k);return D===-1?void 0:ef(_[H],D,1)[0]}return Mi(_[H])},t.removeHooks=function(H){_[H]=[]},t.removeAllHooks=function(){_=_i()},t}var Ta=Or();function go(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ct=go();function Br(e){Ct=e}var mn={exec:()=>null};function W(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(a,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(ye.caret,"$1"),n=n.replace(a,l),s},getRegex:()=>new RegExp(n,t)};return s}var bf=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ye={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},yf=/^(?:[ \t]*(?:\n|$))+/,xf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,$f=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,An=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,wf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,po=/(?:[*+-]|\d{1,9}[.)])/,Hr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Kr=W(Hr).replace(/bull/g,po).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),kf=W(Hr).replace(/bull/g,po).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),mo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Sf=/^[^\n]+/,fo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Af=W(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",fo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Cf=W(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,po).getRegex(),ws="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ho=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Tf=W("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ho).replace("tag",ws).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),zr=W(mo).replace("hr",An).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ws).getRegex(),Mf=W(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",zr).getRegex(),vo={blockquote:Mf,code:xf,def:Af,fences:$f,heading:wf,hr:An,html:Tf,lheading:Kr,list:Cf,newline:yf,paragraph:zr,table:mn,text:Sf},Ri=W("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",An).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ws).getRegex(),Ef={...vo,lheading:kf,table:Ri,paragraph:W(mo).replace("hr",An).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ri).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ws).getRegex()},Pf={...vo,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ho).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:mn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(mo).replace("hr",An).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Kr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Df=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Lf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,jr=/^( {2,}|\\)\n(?!\s*$)/,If=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ks=/[\p{P}\p{S}]/u,bo=/[\s\p{P}\p{S}]/u,qr=/[^\s\p{P}\p{S}]/u,_f=W(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,bo).getRegex(),Wr=/(?!~)[\p{P}\p{S}]/u,Rf=/(?!~)[\s\p{P}\p{S}]/u,Nf=/(?:[^\s\p{P}\p{S}]|~)/u,Ff=W(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",bf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Vr=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Uf=W(Vr,"u").replace(/punct/g,ks).getRegex(),Of=W(Vr,"u").replace(/punct/g,Wr).getRegex(),Gr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Bf=W(Gr,"gu").replace(/notPunctSpace/g,qr).replace(/punctSpace/g,bo).replace(/punct/g,ks).getRegex(),Hf=W(Gr,"gu").replace(/notPunctSpace/g,Nf).replace(/punctSpace/g,Rf).replace(/punct/g,Wr).getRegex(),Kf=W("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,qr).replace(/punctSpace/g,bo).replace(/punct/g,ks).getRegex(),zf=W(/\\(punct)/,"gu").replace(/punct/g,ks).getRegex(),jf=W(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),qf=W(ho).replace("(?:-->|$)","-->").getRegex(),Wf=W("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",qf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ns=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Vf=W(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ns).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Qr=W(/^!?\[(label)\]\[(ref)\]/).replace("label",ns).replace("ref",fo).getRegex(),Jr=W(/^!?\[(ref)\](?:\[\])?/).replace("ref",fo).getRegex(),Gf=W("reflink|nolink(?!\\()","g").replace("reflink",Qr).replace("nolink",Jr).getRegex(),Ni=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,yo={_backpedal:mn,anyPunctuation:zf,autolink:jf,blockSkip:Ff,br:jr,code:Lf,del:mn,emStrongLDelim:Uf,emStrongRDelimAst:Bf,emStrongRDelimUnd:Kf,escape:Df,link:Vf,nolink:Jr,punctuation:_f,reflink:Qr,reflinkSearch:Gf,tag:Wf,text:If,url:mn},Qf={...yo,link:W(/^!?\[(label)\]\((.*?)\)/).replace("label",ns).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ns).getRegex()},Ma={...yo,emStrongRDelimAst:Hf,emStrongLDelim:Of,url:W(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ni).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:W(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ni).getRegex()},Jf={...Ma,br:W(jr).replace("{2,}","*").getRegex(),text:W(Ma.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Bn={normal:vo,gfm:Ef,pedantic:Pf},sn={normal:yo,gfm:Ma,breaks:Jf,pedantic:Qf},Yf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fi=e=>Yf[e];function Ve(e,t){if(t){if(ye.escapeTest.test(e))return e.replace(ye.escapeReplace,Fi)}else if(ye.escapeTestNoEncode.test(e))return e.replace(ye.escapeReplaceNoEncode,Fi);return e}function Ui(e){try{e=encodeURI(e).replace(ye.percentDecode,"%")}catch{return null}return e}function Oi(e,t){let n=e.replace(ye.findPipe,(i,l,d)=>{let u=!1,p=l;for(;--p>=0&&d[p]==="\\";)u=!u;return u?"|":" |"}),s=n.split(ye.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(ye.slashPipe,"|");return s}function an(e,t,n){let s=e.length;if(s===0)return"";let a=0;for(;a<s&&e.charAt(s-a-1)===t;)a++;return e.slice(0,s-a)}function Zf(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Bi(e,t,n,s,a){let i=t.href,l=t.title||null,d=e[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let u={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:l,text:d,tokens:s.inlineTokens(d)};return s.state.inLink=!1,u}function Xf(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(i=>{let l=i.match(n.other.beginningSpace);if(l===null)return i;let[d]=l;return d.length>=a.length?i.slice(a.length):i}).join(`
`)}var ss=class{options;rules;lexer;constructor(e){this.options=e||Ct}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:an(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Xf(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=an(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:an(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=an(t[0],`
`).split(`
`),s="",a="",i=[];for(;n.length>0;){let l=!1,d=[],u;for(u=0;u<n.length;u++)if(this.rules.other.blockquoteStart.test(n[u]))d.push(n[u]),l=!0;else if(!l)d.push(n[u]);else break;n=n.slice(u);let p=d.join(`
`),m=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${p}`:p,a=a?`${a}
${m}`:m;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(m,i,!0),this.lexer.state.top=f,n.length===0)break;let h=i.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let r=h,g=r.raw+`
`+n.join(`
`),y=this.blockquote(g);i[i.length-1]=y,s=s.substring(0,s.length-r.raw.length)+y.raw,a=a.substring(0,a.length-r.text.length)+y.text;break}else if(h?.type==="list"){let r=h,g=r.raw+`
`+n.join(`
`),y=this.list(g);i[i.length-1]=y,s=s.substring(0,s.length-h.raw.length)+y.raw,a=a.substring(0,a.length-r.raw.length)+y.raw,n=g.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,a={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let i=this.rules.other.listItemRegex(n),l=!1;for(;e;){let u=!1,p="",m="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;p=t[0],e=e.substring(p.length);let f=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),h=e.split(`
`,1)[0],r=!f.trim(),g=0;if(this.options.pedantic?(g=2,m=f.trimStart()):r?g=t[1].length+1:(g=t[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,m=f.slice(g),g+=t[1].length),r&&this.rules.other.blankLine.test(h)&&(p+=h+`
`,e=e.substring(h.length+1),u=!0),!u){let y=this.rules.other.nextBulletRegex(g),A=this.rules.other.hrRegex(g),S=this.rules.other.fencesBeginRegex(g),w=this.rules.other.headingBeginRegex(g),T=this.rules.other.htmlBeginRegex(g);for(;e;){let C=e.split(`
`,1)[0],M;if(h=C,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),M=h):M=h.replace(this.rules.other.tabCharGlobal,"    "),S.test(h)||w.test(h)||T.test(h)||y.test(h)||A.test(h))break;if(M.search(this.rules.other.nonSpaceChar)>=g||!h.trim())m+=`
`+M.slice(g);else{if(r||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(f)||w.test(f)||A.test(f))break;m+=`
`+h}!r&&!h.trim()&&(r=!0),p+=C+`
`,e=e.substring(C.length+1),f=M.slice(g)}}a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(l=!0)),a.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(m),loose:!1,text:m,tokens:[]}),a.raw+=p}let d=a.items.at(-1);if(d)d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let u of a.items){if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),u.task){if(u.text=u.text.replace(this.rules.other.listReplaceTask,""),u.tokens[0]?.type==="text"||u.tokens[0]?.type==="paragraph"){u.tokens[0].raw=u.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),u.tokens[0].text=u.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}}let p=this.rules.other.listTaskCheckbox.exec(u.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};u.checked=m.checked,a.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=m.raw+u.tokens[0].raw,u.tokens[0].text=m.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(m)):u.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):u.tokens.unshift(m)}}if(!a.loose){let p=u.tokens.filter(f=>f.type==="space"),m=p.length>0&&p.some(f=>this.rules.other.anyLine.test(f.raw));a.loose=m}}if(a.loose)for(let u of a.items){u.loose=!0;for(let p of u.tokens)p.type==="text"&&(p.type="paragraph")}return a}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:a}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Oi(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(let l of a)i.rows.push(Oi(l,i.header.length).map((d,u)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:i.align[u]})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=an(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=Zf(t[2],"()");if(i===-2)return;if(i>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],a=i[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Bi(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Bi(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let a=[...s[0]].length-1,i,l,d=a,u=0,p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+a);(s=p.exec(t))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(l=[...i].length,s[3]||s[4]){d+=l;continue}else if((s[5]||s[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+u);let m=[...s[0]][0].length,f=e.slice(0,a+s.index+m+l);if(Math.min(a,l)%2){let r=f.slice(1,-1);return{type:"em",raw:f,text:r,tokens:this.lexer.inlineTokens(r)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},De=class Ea{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ct,this.options.tokenizer=this.options.tokenizer||new ss,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:ye,block:Bn.normal,inline:sn.normal};this.options.pedantic?(n.block=Bn.pedantic,n.inline=sn.pedantic):this.options.gfm&&(n.block=Bn.gfm,this.options.breaks?n.inline=sn.breaks:n.inline=sn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Bn,inline:sn}}static lex(t,n){return new Ea(n).lex(t)}static lexInline(t,n){return new Ea(n).inlineTokens(t)}lex(t){t=t.replace(ye.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(ye.tabCharGlobal,"    ").replace(ye.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(l=>(a=l.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let l=n.at(-1);a.raw.length===1&&l!==void 0?l.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},n.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let i=t;if(this.options.extensions?.startBlock){let l=1/0,d=t.slice(1),u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},d),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(i=t.substring(0,l+1))}if(this.state.top&&(a=this.tokenizer.paragraph(i))){let l=n.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a),s=i.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(t){let l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,a=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)i=a[2]?a[2].length:0,s=s.slice(0,a.index+i)+"["+"a".repeat(a[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,d="";for(;t;){l||(d=""),l=!1;let u;if(this.options.extensions?.inline?.some(m=>(u=m.call({lexer:this},t,n))?(t=t.substring(u.raw.length),n.push(u),!0):!1))continue;if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length);let m=n.at(-1);u.type==="text"&&m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):n.push(u);continue}if(u=this.tokenizer.emStrong(t,s,d)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.del(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.autolink(t)){t=t.substring(u.raw.length),n.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t))){t=t.substring(u.raw.length),n.push(u);continue}let p=t;if(this.options.extensions?.startInline){let m=1/0,f=t.slice(1),h;this.options.extensions.startInline.forEach(r=>{h=r.call({lexer:this},f),typeof h=="number"&&h>=0&&(m=Math.min(m,h))}),m<1/0&&m>=0&&(p=t.substring(0,m+1))}if(u=this.tokenizer.inlineText(p)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(d=u.raw.slice(-1)),l=!0;let m=n.at(-1);m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):n.push(u);continue}if(t){let m="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return n}},as=class{options;parser;constructor(e){this.options=e||Ct}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(ye.notSpaceStart)?.[0],a=e.replace(ye.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Ve(s)+'">'+(n?a:Ve(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:Ve(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let l=0;l<e.items.length;l++){let d=e.items[l];s+=this.listitem(d)}let a=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+a+i+`>
`+s+"</"+a+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let s="";for(let a=0;a<e.rows.length;a++){let i=e.rows[a];n="";for(let l=0;l<i.length;l++)n+=this.tablecell(i[l]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ve(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),a=Ui(e);if(a===null)return s;e=a;let i='<a href="'+e+'"';return t&&(i+=' title="'+Ve(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let a=Ui(e);if(a===null)return Ve(n);e=a;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${Ve(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ve(e.text)}},xo=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Le=class Pa{options;renderer;textRenderer;constructor(t){this.options=t||Ct,this.options.renderer=this.options.renderer||new as,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new xo}static parse(t,n){return new Pa(n).parse(t)}static parseInline(t,n){return new Pa(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let a=t[s];if(this.options.extensions?.renderers?.[a.type]){let l=a,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){n+=d||"";continue}}let i=a;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(t,n=this.renderer){let s="";for(let a=0;a<t.length;a++){let i=t[a];if(this.options.extensions?.renderers?.[i.type]){let d=this.options.extensions.renderers[i.type].call({parser:this},i);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=d||"";continue}}let l=i;switch(l.type){case"escape":{s+=n.text(l);break}case"html":{s+=n.html(l);break}case"link":{s+=n.link(l);break}case"image":{s+=n.image(l);break}case"checkbox":{s+=n.checkbox(l);break}case"strong":{s+=n.strong(l);break}case"em":{s+=n.em(l);break}case"codespan":{s+=n.codespan(l);break}case"br":{s+=n.br(l);break}case"del":{s+=n.del(l);break}case"text":{s+=n.text(l);break}default:{let d='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return s}},rn=class{options;block;constructor(e){this.options=e||Ct}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?De.lex:De.lexInline}provideParser(){return this.block?Le.parse:Le.parseInline}},eh=class{defaults=go();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Le;Renderer=as;TextRenderer=xo;Lexer=De;Tokenizer=ss;Hooks=rn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let a=s;for(let i of a.header)n=n.concat(this.walkTokens(i.tokens,t));for(let i of a.rows)for(let l of i)n=n.concat(this.walkTokens(l.tokens,t));break}case"list":{let a=s;n=n.concat(this.walkTokens(a.items,t));break}default:{let a=s;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(i=>{let l=a[i].flat(1/0);n=n.concat(this.walkTokens(l,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let i=t.renderers[a.name];i?t.renderers[a.name]=function(...l){let d=a.renderer.apply(this,l);return d===!1&&(d=i.apply(this,l)),d}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=t[a.level];i?i.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),n.renderer){let a=this.defaults.renderer||new as(this.defaults);for(let i in n.renderer){if(!(i in a))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let l=i,d=n.renderer[l],u=a[l];a[l]=(...p)=>{let m=d.apply(a,p);return m===!1&&(m=u.apply(a,p)),m||""}}s.renderer=a}if(n.tokenizer){let a=this.defaults.tokenizer||new ss(this.defaults);for(let i in n.tokenizer){if(!(i in a))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let l=i,d=n.tokenizer[l],u=a[l];a[l]=(...p)=>{let m=d.apply(a,p);return m===!1&&(m=u.apply(a,p)),m}}s.tokenizer=a}if(n.hooks){let a=this.defaults.hooks||new rn;for(let i in n.hooks){if(!(i in a))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let l=i,d=n.hooks[l],u=a[l];rn.passThroughHooks.has(i)?a[l]=p=>{if(this.defaults.async&&rn.passThroughHooksRespectAsync.has(i))return(async()=>{let f=await d.call(a,p);return u.call(a,f)})();let m=d.call(a,p);return u.call(a,m)}:a[l]=(...p)=>{if(this.defaults.async)return(async()=>{let f=await d.apply(a,p);return f===!1&&(f=await u.apply(a,p)),f})();let m=d.apply(a,p);return m===!1&&(m=u.apply(a,p)),m}}s.hooks=a}if(n.walkTokens){let a=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(l){let d=[];return d.push(i.call(this,l)),a&&(d=d.concat(a.call(this,l))),d}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return De.lex(e,t??this.defaults)}parser(e,t){return Le.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},a={...this.defaults,...s},i=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=e),a.async)return(async()=>{let l=a.hooks?await a.hooks.preprocess(t):t,d=await(a.hooks?await a.hooks.provideLexer():e?De.lex:De.lexInline)(l,a),u=a.hooks?await a.hooks.processAllTokens(d):d;a.walkTokens&&await Promise.all(this.walkTokens(u,a.walkTokens));let p=await(a.hooks?await a.hooks.provideParser():e?Le.parse:Le.parseInline)(u,a);return a.hooks?await a.hooks.postprocess(p):p})().catch(i);try{a.hooks&&(t=a.hooks.preprocess(t));let l=(a.hooks?a.hooks.provideLexer():e?De.lex:De.lexInline)(t,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let d=(a.hooks?a.hooks.provideParser():e?Le.parse:Le.parseInline)(l,a);return a.hooks&&(d=a.hooks.postprocess(d)),d}catch(l){return i(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Ve(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},At=new eh;function G(e,t){return At.parse(e,t)}G.options=G.setOptions=function(e){return At.setOptions(e),G.defaults=At.defaults,Br(G.defaults),G};G.getDefaults=go;G.defaults=Ct;G.use=function(...e){return At.use(...e),G.defaults=At.defaults,Br(G.defaults),G};G.walkTokens=function(e,t){return At.walkTokens(e,t)};G.parseInline=At.parseInline;G.Parser=Le;G.parser=Le.parse;G.Renderer=as;G.TextRenderer=xo;G.Lexer=De;G.lexer=De.lex;G.Tokenizer=ss;G.Hooks=rn;G.parse=G;G.options;G.setOptions;G.use;G.walkTokens;G.parseInline;Le.parse;De.lex;G.setOptions({gfm:!0,breaks:!0});const Hi=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],Ki=["class","href","rel","target","title","start"];let zi=!1;const th=14e4,nh=4e4,sh=200,ta=5e4,bt=new Map;function ah(e){const t=bt.get(e);return t===void 0?null:(bt.delete(e),bt.set(e,t),t)}function ji(e,t){if(bt.set(e,t),bt.size<=sh)return;const n=bt.keys().next().value;n&&bt.delete(n)}function oh(){zi||(zi=!0,Ta.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function os(e){const t=e.trim();if(!t)return"";if(oh(),t.length<=ta){const l=ah(t);if(l!==null)return l}const n=Ul(t,th),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>nh){const d=`<pre class="code-block">${ih(`${n.text}${s}`)}</pre>`,u=Ta.sanitize(d,{ALLOWED_TAGS:Hi,ALLOWED_ATTR:Ki});return t.length<=ta&&ji(t,u),u}const a=G.parse(`${n.text}${s}`),i=Ta.sanitize(a,{ALLOWED_TAGS:Hi,ALLOWED_ATTR:Ki});return t.length<=ta&&ji(t,i),i}function ih(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const lh=1500,rh=2e3,Yr="Copy as markdown",ch="Copied",dh="Copy failed";async function uh(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Hn(e,t){e.title=t,e.setAttribute("aria-label",t)}function gh(e){const t=e.label??Yr;return c`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const a=await uh(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!a){s.dataset.error="1",Hn(s,dh),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,Hn(s,t))},rh);return}s.dataset.copied="1",Hn(s,ch),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,Hn(s,t))},lh)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${ge.copy}</span>
        <span class="chat-copy-btn__icon-check">${ge.check}</span>
      </span>
    </button>
  `}function ph(e){return gh({text:()=>e,label:Yr})}function Zr(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",a=t.content,i=Array.isArray(a)?a:null,l=Array.isArray(i)&&i.some(f=>{const h=f,r=(typeof h.type=="string"?h.type:"").toLowerCase();return r==="toolresult"||r==="tool_result"}),d=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||l||d)&&(n="toolResult");let u=[];typeof t.content=="string"?u=[{type:"text",text:t.content}]:Array.isArray(t.content)?u=t.content.map(f=>({type:f.type||"text",text:f.text,name:f.name,args:f.args||f.arguments})):typeof t.text=="string"&&(u=[{type:"text",text:t.text}]);const p=typeof t.timestamp=="number"?t.timestamp:Date.now(),m=typeof t.id=="string"?t.id:void 0;return{role:n,content:u,timestamp:p,id:m}}function $o(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function Xr(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const mh={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},fh={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},hh={fallback:mh,tools:fh},ec=hh,qi=ec.fallback??{icon:"puzzle"},vh=ec.tools??{};function bh(e){return(e??"tool").trim()}function yh(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function xh(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function tc(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>tc(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function $h(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function wh(e,t){for(const n of t){const s=$h(e,n),a=tc(s);if(a)return a}}function kh(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,a=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&a!==void 0?`${n}:${s}-${s+a}`:n}function Sh(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function Ah(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function Ch(e){const t=bh(e.name),n=t.toLowerCase(),s=vh[n],a=s?.icon??qi.icon??"puzzle",i=s?.title??yh(t),l=s?.label??t,d=e.args&&typeof e.args=="object"?e.args.action:void 0,u=typeof d=="string"?d.trim():void 0,p=Ah(s,u),m=xh(p?.label??u);let f;n==="read"&&(f=kh(e.args)),!f&&(n==="write"||n==="edit"||n==="attach")&&(f=Sh(e.args));const h=p?.detailKeys??s?.detailKeys??qi.detailKeys??[];return!f&&h.length>0&&(f=wh(e.args,h)),!f&&e.meta&&(f=e.meta),f&&(f=Mh(f)),{name:t,icon:a,title:i,label:l,verb:m,detail:f}}function Th(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function Mh(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const Eh=80,Ph=2,Wi=100;function Dh(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function Lh(e){const t=e.split(`
`),n=t.slice(0,Ph),s=n.join(`
`);return s.length>Wi?s.slice(0,Wi)+"…":n.length<t.length?s+"…":s}function Ih(e){const t=e,n=_h(t.content),s=[];for(const a of n){const i=(typeof a.type=="string"?a.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(i)||typeof a.name=="string"&&a.arguments!=null)&&s.push({kind:"call",name:a.name??"tool",args:Rh(a.arguments??a.args)})}for(const a of n){const i=(typeof a.type=="string"?a.type:"").toLowerCase();if(i!=="toolresult"&&i!=="tool_result")continue;const l=Nh(a),d=typeof a.name=="string"?a.name:"tool";s.push({kind:"result",name:d,text:l})}if(Xr(e)&&!s.some(a=>a.kind==="result")){const a=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",i=mr(e)??void 0;s.push({kind:"result",name:a,text:i})}return s}function Vi(e,t){const n=Ch({name:e.name,args:e.args}),s=Th(n),a=!!e.text?.trim(),i=!!t,l=i?()=>{if(a){t(Dh(e.text));return}const f=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(f)}:void 0,d=a&&(e.text?.length??0)<=Eh,u=a&&!d,p=a&&d,m=!a;return c`
    <div
      class="chat-tool-card ${i?"chat-tool-card--clickable":""}"
      @click=${l}
      role=${i?"button":v}
      tabindex=${i?"0":v}
      @keydown=${i?f=>{f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),l?.())}:v}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${ge[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${i?c`<span class="chat-tool-card__action">${a?"View":""} ${ge.check}</span>`:v}
        ${m&&!i?c`<span class="chat-tool-card__status">${ge.check}</span>`:v}
      </div>
      ${s?c`<div class="chat-tool-card__detail">${s}</div>`:v}
      ${m?c`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:v}
      ${u?c`<div class="chat-tool-card__preview mono">${Lh(e.text)}</div>`:v}
      ${p?c`<div class="chat-tool-card__inline mono">${e.text}</div>`:v}
    </div>
  `}function _h(e){return Array.isArray(e)?e.filter(Boolean):[]}function Rh(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function Nh(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function Fh(e){const n=e.content,s=[];if(Array.isArray(n))for(const a of n){if(typeof a!="object"||a===null)continue;const i=a;if(i.type==="image"){const l=i.source;if(l?.type==="base64"&&typeof l.data=="string"){const d=l.data,u=l.media_type||"image/png",p=d.startsWith("data:")?d:`data:${u};base64,${d}`;s.push({url:p})}else typeof i.url=="string"&&s.push({url:i.url})}else if(i.type==="image_url"){const l=i.image_url;typeof l?.url=="string"&&s.push({url:l.url})}}return s}function Uh(e){return c`
    <div class="chat-group assistant">
      ${wo("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function Oh(e,t,n,s){const a=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),i=s?.name??"Assistant";return c`
    <div class="chat-group assistant">
      ${wo("assistant",s)}
      <div class="chat-group-messages">
        ${nc({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${i}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function Bh(e,t){const n=$o(e.role),s=t.assistantName??"Assistant",a=n==="user"?"You":n==="assistant"?s:n,i=n==="user"?"user":n==="assistant"?"assistant":"other",l=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return c`
    <div class="chat-group ${i}">
      ${wo(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((d,u)=>nc(d.message,{isStreaming:e.isStreaming&&u===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${l}</span>
        </div>
      </div>
    </div>
  `}function wo(e,t){const n=$o(e),s=t?.name?.trim()||"Assistant",a=t?.avatar?.trim()||"",i=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",l=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return a&&n==="assistant"?Hh(a)?c`<img
        class="chat-avatar ${l}"
        src="${a}"
        alt="${s}"
      />`:c`<div class="chat-avatar ${l}">${a}</div>`:c`<div class="chat-avatar ${l}">${i}</div>`}function Hh(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function Kh(e){return e.length===0?v:c`
    <div class="chat-message-images">
      ${e.map(t=>c`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function nc(e,t,n){const s=e,a=typeof s.role=="string"?s.role:"unknown",i=Xr(e)||a.toLowerCase()==="toolresult"||a.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",l=Ih(e),d=l.length>0,u=Fh(e),p=u.length>0,m=mr(e),f=t.showReasoning&&a==="assistant"?Tg(e):null,h=m?.trim()?m:null,r=f?Eg(f):null,g=h,y=a==="assistant"&&!!g?.trim(),A=["chat-bubble",y?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!g&&d&&i?c`${l.map(S=>Vi(S,n))}`:!g&&!d&&!p?v:c`
    <div class="${A}">
      ${y?ph(g):v}
      ${Kh(u)}
      ${r?c`<div class="chat-thinking">${ts(os(r))}</div>`:v}
      ${g?c`<div class="chat-text">${ts(os(g))}</div>`:v}
      ${l.map(S=>Vi(S,n))}
    </div>
  `}function zh(e){return c`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${ge.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?c`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?c`<div class="sidebar-markdown">${ts(os(e.content))}</div>`:c`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var jh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Ss=(e,t,n,s)=>{for(var a=s>1?void 0:s?qh(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&jh(t,n,a),a};let jt=class extends Ot{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,a=(e.clientX-this.startX)/n;let i=this.startRatio+a;i=Math.max(this.minRatio,Math.min(this.maxRatio,i)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:i},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return v}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};jt.styles=xc`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;Ss([us({type:Number})],jt.prototype,"splitRatio",2);Ss([us({type:Number})],jt.prototype,"minRatio",2);Ss([us({type:Number})],jt.prototype,"maxRatio",2);jt=Ss([Ml("resizable-divider")],jt);const Wh=5e3;function Gi(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function Vh(e){return e?e.active?c`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${ge.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Wh?c`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${ge.check} Context compacted
        </div>
      `:v:v}function Gh(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function Qh(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let a=0;a<n.length;a++){const i=n[a];i.type.startsWith("image/")&&s.push(i)}if(s.length!==0){e.preventDefault();for(const a of s){const i=a.getAsFile();if(!i)continue;const l=new FileReader;l.addEventListener("load",()=>{const d=l.result,u={id:Gh(),dataUrl:d,mimeType:i.type},p=t.attachments??[];t.onAttachmentsChange?.([...p,u])}),l.readAsDataURL(i)}}}function Jh(e){const t=e.attachments??[];return t.length===0?v:c`
    <div class="chat-attachments">
      ${t.map(n=>c`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(a=>a.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${ge.x}
            </button>
          </div>
        `)}
    </div>
  `}function Yh(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),i=e.sessions?.sessions?.find(r=>r.key===e.sessionKey)?.reasoningLevel??"off",l=e.showThinking&&i!=="off",d={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},u=(e.attachments?.length??0)>0,p=e.connected?u?"Add a message or paste more images...":"Message (↩ to send, Shift+↩ for line breaks, paste images)":"Connect to the gateway to start chatting…",m=e.splitRatio??.6,f=!!(e.sidebarOpen&&e.onCloseSidebar),h=c`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?c`
              <div class="muted">Loading chat…</div>
            `:v}
      ${Ar(Xh(e),r=>r.key,r=>r.kind==="reading-indicator"?Uh(d):r.kind==="stream"?Oh(r.text,r.startedAt,e.onOpenSidebar,d):r.kind==="group"?Bh(r,{onOpenSidebar:e.onOpenSidebar,showReasoning:l,assistantName:e.assistantName,assistantAvatar:d.avatar}):v)}
    </div>
  `;return c`
    <section class="card chat">
      ${e.disabledReason?c`<div class="callout">${e.disabledReason}</div>`:v}

      ${e.error?c`<div class="callout danger">${e.error}</div>`:v}

      ${Vh(e.compactionStatus)}

      ${e.focusMode?c`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${ge.x}
            </button>
          `:v}

      <div
        class="chat-split-container ${f?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${f?`0 0 ${m*100}%`:"1 1 100%"}"
        >
          ${h}
        </div>

        ${f?c`
              <resizable-divider
                .splitRatio=${m}
                @resize=${r=>e.onSplitRatioChange?.(r.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${zh({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:v}
      </div>

      ${e.queue.length?c`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(r=>c`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${r.text||(r.attachments?.length?`Image (${r.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(r.id)}
                      >
                        ${ge.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:v}

      ${e.showNewMessages?c`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${ge.arrowDown}
            </button>
          `:v}

      <div class="chat-compose">
        ${Jh(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${Qm(r=>r&&Gi(r))}
              .value=${e.draft}
              ?disabled=${!e.connected}
              @keydown=${r=>{r.key==="Enter"&&(r.isComposing||r.keyCode===229||r.shiftKey||e.connected&&(r.preventDefault(),t&&e.onSend()))}}
              @input=${r=>{const g=r.target;Gi(g),e.onDraftChange(g.value)}}
              @paste=${r=>Qh(r,e)}
              placeholder=${p}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"Stop":"New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"Queue":"Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const Qi=200;function Zh(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const a=Zr(s.message),i=$o(a.role),l=a.timestamp||Date.now();!n||n.role!==i?(n&&t.push(n),n={kind:"group",key:`group:${i}:${s.key}`,role:i,messages:[{message:s.message,key:s.key}],timestamp:l,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Xh(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],a=Math.max(0,n.length-Qi);a>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${Qi} messages (${a} hidden).`,timestamp:Date.now()}});for(let i=a;i<n.length;i++){const l=n[i],d=Zr(l);!e.showThinking&&d.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:Ji(l,i),message:l})}if(e.showThinking)for(let i=0;i<s.length;i++)t.push({kind:"message",key:Ji(s[i],i+n.length),message:s[i]});if(e.stream!==null){const i=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:i,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:i})}return Zh(t)}function Ji(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const a=typeof n.id=="string"?n.id:"";if(a)return`msg:${a}`;const i=typeof n.messageId=="string"?n.messageId:"";if(i)return`msg:${i}`;const l=typeof n.timestamp=="number"?n.timestamp:null,d=typeof n.role=="string"?n.role:"unknown";return l!=null?`msg:${d}:${l}:${t}`:`msg:${d}:${t}`}function Qe(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function sc(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(Qe(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Vt(e){return e.filter(t=>typeof t=="string").join(".")}function Ae(e,t){const n=Vt(e),s=t[n];if(s)return s;const a=n.split(".");for(const[i,l]of Object.entries(t)){if(!i.includes("*"))continue;const d=i.split(".");if(d.length!==a.length)continue;let u=!0;for(let p=0;p<a.length;p+=1)if(d[p]!=="*"&&d[p]!==a[p]){u=!1;break}if(u)return l}}function Oe(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function ev(e){const t=Vt(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}function tv(e){const t=Vt(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const nv={en:{"meta.lastTouchedVersion":"Auto-set when OpenClaw writes the config.","meta.lastTouchedAt":"ISO timestamp of the last config write (auto-set).","update.channel":'Update channel for git + npm installs ("stable", "beta", or "dev").',"update.checkOnStart":"Check for npm updates when the gateway starts (default: true).","gateway.remote.url":"Remote Gateway WebSocket URL (ws:// or wss://).","gateway.remote.tlsFingerprint":"Expected sha256 TLS fingerprint for the remote gateway (pin to avoid MITM).","gateway.remote.sshTarget":"Remote gateway over SSH (tunnels the gateway port to localhost). Format: user@host or user@host:port.","gateway.remote.sshIdentity":"Optional SSH identity file path (passed to ssh -i).","agents.list.*.skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].identity.avatar":"Avatar image path (relative to the agent workspace only) or a remote URL/data URL.","discovery.mdns.mode":'mDNS broadcast mode ("minimal" default, "full" includes cliPath/sshPort, "off" disables mDNS).',"gateway.auth.token":"Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.","gateway.auth.password":"Required for Tailscale funnel.","gateway.controlUi.basePath":"Optional URL prefix where the Control UI is served (e.g. /openclaw).","gateway.controlUi.root":"Optional filesystem root for Control UI assets (defaults to dist/control-ui).","gateway.controlUi.allowedOrigins":"Allowed browser origins for Control UI/WebChat websocket connections (full origins only, e.g. https://control.example.com).","gateway.controlUi.allowInsecureAuth":"Allow Control UI auth over insecure HTTP (token-only; not recommended).","gateway.controlUi.dangerouslyDisableDeviceAuth":"DANGEROUS. Disable Control UI device identity checks (token/password only).","gateway.http.endpoints.chatCompletions.enabled":"Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).","gateway.reload.mode":'Hot reload strategy for config changes ("hybrid" recommended).',"gateway.reload.debounceMs":"Debounce window (ms) before applying config changes.","gateway.nodes.browser.mode":'Node browser routing ("auto" = pick single connected browser node, "manual" = require node param, "off" = disable).',"gateway.nodes.browser.node":"Pin browser routing to a specific node id or name (optional).","gateway.nodes.allowCommands":"Extra node.invoke commands to allow beyond the gateway defaults (array of command strings).","gateway.nodes.denyCommands":"Commands to block even if present in node claims or default allowlist.","nodeHost.browserProxy.enabled":"Expose the local browser control server via node proxy.","nodeHost.browserProxy.allowProfiles":"Optional allowlist of browser profile names exposed via the node proxy.","diagnostics.flags":'Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]). Supports wildcards like "telegram.*" or "*".',"diagnostics.cacheTrace.enabled":"Log cache trace snapshots for embedded agent runs (default: false).","diagnostics.cacheTrace.filePath":"JSONL output path for cache trace logs (default: $OPENCLAW_STATE_DIR/logs/cache-trace.jsonl).","diagnostics.cacheTrace.includeMessages":"Include full message payloads in trace output (default: true).","diagnostics.cacheTrace.includePrompt":"Include prompt text in trace output (default: true).","diagnostics.cacheTrace.includeSystem":"Include system prompt in trace output (default: true).","tools.exec.applyPatch.enabled":"Experimental. Enables apply_patch for OpenAI models when allowed by tool policy.","tools.exec.applyPatch.allowModels":'Optional allowlist of model ids (e.g. "gpt-5.2" or "openai/gpt-5.2").',"tools.exec.notifyOnExit":"When true (default), backgrounded exec sessions enqueue a system event and request a heartbeat on exit.","tools.exec.pathPrepend":"Directories to prepend to PATH for exec runs (gateway/sandbox).","tools.exec.safeBins":"Allow stdin-only safe binaries to run without explicit allowlist entries.","tools.message.allowCrossContextSend":"Legacy override: allow cross-context sends across all providers.","tools.message.crossContext.allowWithinProvider":"Allow sends to other channels within the same provider (default: true).","tools.message.crossContext.allowAcrossProviders":"Allow sends across different providers (default: false).","tools.message.crossContext.marker.enabled":"Add a visible origin marker when sending cross-context (default: true).","tools.message.crossContext.marker.prefix":'Text prefix for cross-context markers (supports "{channel}").',"tools.message.crossContext.marker.suffix":'Text suffix for cross-context markers (supports "{channel}").',"tools.message.broadcast.enabled":"Enable broadcast action (default: true).","tools.web.search.enabled":"Enable the web_search tool (requires a provider API key).","tools.web.search.provider":'Search provider ("brave" or "perplexity").',"tools.web.search.apiKey":"Brave Search API key (fallback: BRAVE_API_KEY env var).","tools.web.search.maxResults":"Default number of results to return (1-10).","tools.web.search.timeoutSeconds":"Timeout in seconds for web_search requests.","tools.web.search.cacheTtlMinutes":"Cache TTL in minutes for web_search results.","tools.web.search.perplexity.apiKey":"Perplexity or OpenRouter API key (fallback: PERPLEXITY_API_KEY or OPENROUTER_API_KEY env var).","tools.web.search.perplexity.baseUrl":"Perplexity base URL override (default: https://openrouter.ai/api/v1 or https://api.perplexity.ai).","tools.web.search.perplexity.model":'Perplexity model override (default: "perplexity/sonar-pro").',"tools.web.fetch.enabled":"Enable the web_fetch tool (lightweight HTTP fetch).","tools.web.fetch.maxChars":"Max characters returned by web_fetch (truncated).","tools.web.fetch.maxCharsCap":"Hard cap for web_fetch maxChars (applies to config and tool calls).","tools.web.fetch.timeoutSeconds":"Timeout in seconds for web_fetch requests.","tools.web.fetch.cacheTtlMinutes":"Cache TTL in minutes for web_fetch results.","tools.web.fetch.maxRedirects":"Maximum redirects allowed for web_fetch (default: 3).","tools.web.fetch.userAgent":"Override User-Agent header for web_fetch requests.","tools.web.fetch.readability":"Use Readability to extract main content from HTML (fallbacks to basic HTML cleanup).","tools.web.fetch.firecrawl.enabled":"Enable Firecrawl fallback for web_fetch (if configured).","tools.web.fetch.firecrawl.apiKey":"Firecrawl API key (fallback: FIRECRAWL_API_KEY env var).","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL (e.g. https://api.firecrawl.dev or custom endpoint).","tools.web.fetch.firecrawl.onlyMainContent":"When true, Firecrawl returns only the main content (default: true).","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge (ms) for cached results when supported by the API.","tools.web.fetch.firecrawl.timeoutSeconds":"Timeout in seconds for Firecrawl requests.","channels.slack.allowBots":"Allow bot-authored messages to trigger Slack replies (default: false).","channels.slack.thread.historyScope":'Scope for Slack thread history context ("thread" isolates per thread; "channel" reuses channel history).',"channels.slack.thread.inheritParent":"If true, Slack thread sessions inherit the parent channel transcript (default: false).","channels.mattermost.botToken":"Bot token from Mattermost System Console -> Integrations -> Bot Accounts.","channels.mattermost.baseUrl":"Base URL for your Mattermost server (e.g., https://chat.example.com).","channels.mattermost.chatmode":'Reply to channel messages on mention ("oncall"), on trigger chars (">" or "!") ("onchar"), or on every message ("onmessage").',"channels.mattermost.oncharPrefixes":'Trigger prefixes for onchar mode (default: [">", "!"]).',"channels.mattermost.requireMention":"Require @mention in channels before responding (default: true).","auth.profiles":"Named auth profiles (provider + mode + optional email).","auth.order":"Ordered auth profile IDs per provider (used for automatic failover).","auth.cooldowns.billingBackoffHours":"Base backoff (hours) when a profile fails due to billing/insufficient credits (default: 5).","auth.cooldowns.billingBackoffHoursByProvider":"Optional per-provider overrides for billing backoff (hours).","auth.cooldowns.billingMaxHours":"Cap (hours) for billing backoff (default: 24).","auth.cooldowns.failureWindowHours":"Failure window (hours) for backoff counters (default: 24).","agents.defaults.bootstrapMaxChars":"Max characters of each workspace bootstrap file injected into the system prompt before truncation (default: 20000).","agents.defaults.repoRoot":"Optional repository root shown in the system prompt runtime line (overrides auto-detect).","agents.defaults.envelopeTimezone":'Timezone for message envelopes ("utc", "local", "user", or an IANA timezone string).',"agents.defaults.envelopeTimestamp":'Include absolute timestamps in message envelopes ("on" or "off").',"agents.defaults.envelopeElapsed":'Include elapsed time in message envelopes ("on" or "off").',"agents.defaults.models":"Configured model catalog (keys are full provider/model IDs).","agents.defaults.memorySearch":"Vector search over MEMORY.md and memory/*.md (per-agent overrides supported).","agents.defaults.memorySearch.sources":'Sources to index for memory search (default: ["memory"]; add "sessions" to include session transcripts).',"agents.defaults.memorySearch.extraPaths":"Extra paths to include in memory search (directories or .md files; relative paths resolved from workspace).","agents.defaults.memorySearch.experimental.sessionMemory":"Enable experimental session transcript indexing for memory search (default: false).","agents.defaults.memorySearch.provider":'Embedding provider ("openai", "gemini", "voyage", or "local").',"agents.defaults.memorySearch.remote.baseUrl":"Custom base URL for remote embeddings (OpenAI-compatible proxies or Gemini overrides).","agents.defaults.memorySearch.remote.apiKey":"Custom API key for the remote embedding provider.","agents.defaults.memorySearch.remote.headers":"Extra headers for remote embeddings (merged; remote overrides OpenAI headers).","agents.defaults.memorySearch.remote.batch.enabled":"Enable batch API for memory embeddings (OpenAI/Gemini; default: true).","agents.defaults.memorySearch.remote.batch.wait":"Wait for batch completion when indexing (default: true).","agents.defaults.memorySearch.remote.batch.concurrency":"Max concurrent embedding batch jobs for memory indexing (default: 2).","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"Polling interval in ms for batch status (default: 2000).","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"Timeout in minutes for batch indexing (default: 60).","agents.defaults.memorySearch.local.modelPath":"Local GGUF model path or hf: URI (node-llama-cpp).","agents.defaults.memorySearch.fallback":'Fallback provider when embeddings fail ("openai", "gemini", "local", or "none").',"agents.defaults.memorySearch.store.path":"SQLite index path (default: ~/.openclaw/memory/{agentId}.sqlite).","agents.defaults.memorySearch.store.vector.enabled":"Enable sqlite-vec extension for vector search (default: true).","agents.defaults.memorySearch.store.vector.extensionPath":"Optional override path to sqlite-vec extension library (.dylib/.so/.dll).","agents.defaults.memorySearch.query.hybrid.enabled":"Enable hybrid BM25 + vector search for memory (default: true).","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Weight for vector similarity when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.textWeight":"Weight for BM25 text relevance when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Multiplier for candidate pool size (default: 4).","agents.defaults.memorySearch.cache.enabled":"Cache chunk embeddings in SQLite to speed up reindexing and frequent updates (default: true).",memory:"Memory backend configuration (global).","memory.backend":'Memory backend ("builtin" for OpenClaw embeddings, "qmd" for QMD sidecar).',"memory.citations":'Default citation behavior ("auto", "on", or "off").',"memory.qmd.command":"Path to the qmd binary (default: resolves from PATH).","memory.qmd.includeDefaultMemory":"Whether to automatically index MEMORY.md + memory/**/*.md (default: true).","memory.qmd.paths":"Additional directories/files to index with QMD (path + optional glob pattern).","memory.qmd.paths.path":"Absolute or ~-relative path to index via QMD.","memory.qmd.paths.pattern":"Glob pattern relative to the path root (default: **/*.md).","memory.qmd.paths.name":"Optional stable name for the QMD collection (default derived from path).","memory.qmd.sessions.enabled":"Enable QMD session transcript indexing (experimental, default: false).","memory.qmd.sessions.exportDir":"Override directory for sanitized session exports before indexing.","memory.qmd.sessions.retentionDays":"Retention window for exported sessions before pruning (default: unlimited).","memory.qmd.update.interval":"How often the QMD sidecar refreshes indexes (duration string, default: 5m).","memory.qmd.update.debounceMs":"Minimum delay between successive QMD refresh runs (default: 15000).","memory.qmd.update.onBoot":"Run QMD update once on gateway startup (default: true).","memory.qmd.update.embedInterval":"How often QMD embeddings are refreshed (duration string, default: 60m). Set to 0 to disable periodic embed.","memory.qmd.limits.maxResults":"Max QMD results returned to the agent loop (default: 6).","memory.qmd.limits.maxSnippetChars":"Max characters per snippet pulled from QMD (default: 700).","memory.qmd.limits.maxInjectedChars":"Max total characters injected from QMD hits per turn.","memory.qmd.limits.timeoutMs":"Per-query timeout for QMD searches (default: 4000).","memory.qmd.scope":"Session/channel scope for QMD recall (same syntax as session.sendPolicy; default: direct-only).","agents.defaults.memorySearch.cache.maxEntries":"Optional cap on cached embeddings (best-effort).","agents.defaults.memorySearch.sync.onSearch":"Lazy sync: schedule a reindex on search after changes.","agents.defaults.memorySearch.sync.watch":"Watch memory files for changes (chokidar).","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Minimum appended bytes before session transcripts trigger reindex (default: 100000).","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Minimum appended JSONL lines before session transcripts trigger reindex (default: 50).","plugins.enabled":"Enable plugin/extension loading (default: true).","plugins.allow":"Optional allowlist of plugin ids; when set, only listed plugins load.","plugins.deny":"Optional denylist of plugin ids; deny wins over allowlist.","plugins.load.paths":"Additional plugin files or directories to load.","plugins.slots":"Select which plugins own exclusive slots (memory, etc.).","plugins.slots.memory":'Select the active memory plugin by id, or "none" to disable memory plugins.',"plugins.entries":"Per-plugin settings keyed by plugin id (enable/disable + config payloads).","plugins.entries.*.enabled":"Overrides plugin enable/disable for this entry (restart required).","plugins.entries.*.config":"Plugin-defined config payload (schema is provided by the plugin).","plugins.installs":"CLI-managed install metadata (used by `openclaw plugins update` to locate install sources).","plugins.installs.*.source":'Install source ("npm", "archive", or "path").',"plugins.installs.*.spec":"Original npm spec used for install (if source is npm).","plugins.installs.*.sourcePath":"Original archive/path used for install (if any).","plugins.installs.*.installPath":"Resolved install directory (usually ~/.openclaw/extensions/<id>).","plugins.installs.*.version":"Version recorded at install time (if available).","plugins.installs.*.installedAt":"ISO timestamp of last install/update.","agents.list.*.identity.avatar":"Agent avatar (workspace-relative path, http(s) URL, or data URI).","agents.defaults.model.primary":"Primary model (provider/model).","agents.defaults.model.fallbacks":"Ordered fallback models (provider/model). Used when the primary model fails.","agents.defaults.imageModel.primary":"Optional image model (provider/model) used when the primary model lacks image input.","agents.defaults.imageModel.fallbacks":"Ordered fallback image models (provider/model).","agents.defaults.cliBackends":"Optional CLI backends for text-only fallback (claude-cli, etc.).","agents.defaults.humanDelay.mode":'Delay style for block replies ("off", "natural", "custom").',"agents.defaults.humanDelay.minMs":"Minimum delay in ms for custom humanDelay (default: 800).","agents.defaults.humanDelay.maxMs":"Maximum delay in ms for custom humanDelay (default: 2500).","commands.native":"Register native commands with channels that support it (Discord/Slack/Telegram).","commands.nativeSkills":"Register native skill commands (user-invocable skills) with channels that support it.","commands.text":"Allow text command parsing (slash commands only).","commands.bash":"Allow bash chat command (`!`; `/bash` alias) to run host shell commands (default: false; requires tools.elevated).","commands.bashForegroundMs":"How long bash waits before backgrounding (default: 2000; 0 backgrounds immediately).","commands.config":"Allow /config chat command to read/write config on disk (default: false).","commands.debug":"Allow /debug chat command for runtime-only overrides (default: false).","commands.restart":"Allow /restart and gateway restart tool actions (default: false).","commands.useAccessGroups":"Enforce access-group allowlists/policies for commands.","commands.ownerAllowFrom":`Explicit owner allowlist for owner-only tools/commands. Use channel-native IDs (optionally prefixed like "whatsapp:+15551234567"). '*' is ignored.`,"session.dmScope":'DM session scoping: "main" keeps continuity; "per-peer", "per-channel-peer", or "per-account-channel-peer" isolates DM history (recommended for shared inboxes/multi-account).',"session.identityLinks":"Map canonical identities to provider-prefixed peer IDs for DM session linking (example: telegram:123456).","channels.telegram.configWrites":"Allow Telegram to write config in response to channel events/commands (default: true).","channels.slack.configWrites":"Allow Slack to write config in response to channel events/commands (default: true).","channels.mattermost.configWrites":"Allow Mattermost to write config in response to channel events/commands (default: true).","channels.discord.configWrites":"Allow Discord to write config in response to channel events/commands (default: true).","channels.whatsapp.configWrites":"Allow WhatsApp to write config in response to channel events/commands (default: true).","channels.signal.configWrites":"Allow Signal to write config in response to channel events/commands (default: true).","channels.imessage.configWrites":"Allow iMessage to write config in response to channel events/commands (default: true).","channels.msteams.configWrites":"Allow Microsoft Teams to write config in response to channel events/commands (default: true).","channels.discord.commands.native":'Override native commands for Discord (bool or "auto").',"channels.discord.commands.nativeSkills":'Override native skill commands for Discord (bool or "auto").',"channels.telegram.commands.native":'Override native commands for Telegram (bool or "auto").',"channels.telegram.commands.nativeSkills":'Override native skill commands for Telegram (bool or "auto").',"channels.slack.commands.native":'Override native commands for Slack (bool or "auto").',"channels.slack.commands.nativeSkills":'Override native skill commands for Slack (bool or "auto").',"session.agentToAgent.maxPingPongTurns":"Max reply-back turns between requester and target (0–5).","channels.telegram.customCommands":"Additional Telegram bot menu commands (merged with native; conflicts ignored).","messages.ackReaction":"Emoji reaction used to acknowledge inbound messages (empty disables).","messages.ackReactionScope":'When to send ack reactions ("group-mentions", "group-all", "direct", "all").',"messages.inbound.debounceMs":"Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).","channels.telegram.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.telegram.allowFrom=["*"].',"channels.telegram.streamMode":"Draft streaming mode for Telegram replies (off | partial | block). Separate from block streaming; requires private topics + sendMessageDraft.","channels.telegram.draftChunk.minChars":'Minimum chars before emitting a Telegram draft update when channels.telegram.streamMode="block" (default: 200).',"channels.telegram.draftChunk.maxChars":'Target max size for a Telegram draft update chunk when channels.telegram.streamMode="block" (default: 800; clamped to channels.telegram.textChunkLimit).',"channels.telegram.draftChunk.breakPreference":"Preferred breakpoints for Telegram draft chunks (paragraph | newline | sentence). Default: paragraph.","channels.telegram.retry.attempts":"Max retry attempts for outbound Telegram API calls (default: 3).","channels.telegram.retry.minDelayMs":"Minimum retry delay in ms for Telegram outbound calls.","channels.telegram.retry.maxDelayMs":"Maximum retry delay cap in ms for Telegram outbound calls.","channels.telegram.retry.jitter":"Jitter factor (0-1) applied to Telegram retry delays.","channels.telegram.network.autoSelectFamily":"Override Node autoSelectFamily for Telegram (true=enable, false=disable).","channels.telegram.timeoutSeconds":"Max seconds before Telegram API requests are aborted (default: 500 per grammY).","channels.whatsapp.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.whatsapp.allowFrom=["*"].',"channels.whatsapp.selfChatMode":"Same-phone setup (bot uses your personal WhatsApp number).","channels.whatsapp.debounceMs":"Debounce window (ms) for batching rapid consecutive messages from the same sender (0 to disable).","channels.signal.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.signal.allowFrom=["*"].',"channels.imessage.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.imessage.allowFrom=["*"].',"channels.bluebubbles.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.bluebubbles.allowFrom=["*"].',"channels.discord.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.discord.dm.allowFrom=["*"].',"channels.discord.retry.attempts":"Max retry attempts for outbound Discord API calls (default: 3).","channels.discord.retry.minDelayMs":"Minimum retry delay in ms for Discord outbound calls.","channels.discord.retry.maxDelayMs":"Maximum retry delay cap in ms for Discord outbound calls.","channels.discord.retry.jitter":"Jitter factor (0-1) applied to Discord retry delays.","channels.discord.maxLinesPerMessage":"Soft max line count per Discord message (default: 17).","channels.discord.intents.presence":"Enable the Guild Presences privileged intent. Must also be enabled in the Discord Developer Portal. Allows tracking user activities (e.g. Spotify). Default: false.","channels.discord.intents.guildMembers":"Enable the Guild Members privileged intent. Must also be enabled in the Discord Developer Portal. Default: false.","channels.discord.pluralkit.enabled":"Resolve PluralKit proxied messages and treat system members as distinct senders.","channels.discord.pluralkit.token":"Optional PluralKit token for resolving private systems or members.","channels.slack.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.slack.dm.allowFrom=["*"].'},zh:{"meta.lastTouchedVersion":"OpenClaw 写入配置时自动设置。","meta.lastTouchedAt":"最后一次配置写入的 ISO 时间戳（自动设置）。","update.channel":'git + npm 安装的更新渠道（"stable"、"beta" 或 "dev"）。',"update.checkOnStart":"网关启动时检查 npm 更新（默认：true）。","gateway.remote.url":"远程网关 WebSocket URL（ws:// 或 wss://）。","gateway.remote.tlsFingerprint":"远程网关的预期 sha256 TLS 指纹（固定以避免中间人攻击）。","gateway.remote.sshTarget":"通过 SSH 的远程网关（将网关端口隧道到 localhost）。格式：user@host 或 user@host:port。","gateway.remote.sshIdentity":"可选的 SSH 身份文件路径（传递给 ssh -i）。","agents.list.*.skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].identity.avatar":"头像图片路径（仅相对于代理工作区）或远程 URL/data URL。","discovery.mdns.mode":'mDNS 广播模式（"minimal" 默认，"full" 包含 cliPath/sshPort，"off" 禁用 mDNS）。',"gateway.auth.token":"默认情况下网关访问所需（除非使用 Tailscale Serve 身份）；非回环绑定需要。","gateway.auth.password":"Tailscale funnel 需要。","gateway.controlUi.basePath":"控制台 UI 服务的可选 URL 前缀（例如 /openclaw）。","gateway.controlUi.root":"控制台 UI 资源的可选文件系统根目录（默认为 dist/control-ui）。","gateway.controlUi.allowedOrigins":"控制台 UI/WebChat websocket 连接允许的浏览器来源（仅完整来源，例如 https://control.example.com）。","gateway.controlUi.allowInsecureAuth":"允许通过不安全 HTTP 进行控制台 UI 认证（仅令牌；不推荐）。","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险。禁用控制台 UI 设备身份检查（仅令牌/密码）。","gateway.http.endpoints.chatCompletions.enabled":"启用 OpenAI 兼容的 `POST /v1/chat/completions` 端点（默认：false）。","gateway.reload.mode":'配置更改的热重载策略（推荐 "hybrid"）。',"gateway.reload.debounceMs":"应用配置更改前的防抖窗口（毫秒）。","gateway.nodes.browser.mode":'节点浏览器路由（"auto" = 选择单个连接的浏览器节点，"manual" = 需要节点参数，"off" = 禁用）。',"gateway.nodes.browser.node":"将浏览器路由固定到特定节点 id 或名称（可选）。","gateway.nodes.allowCommands":"允许的额外 node.invoke 命令，超出网关默认值（命令字符串数组）。","gateway.nodes.denyCommands":"即使存在于节点声明或默认允许列表中也要阻止的命令。","nodeHost.browserProxy.enabled":"通过节点代理暴露本地浏览器控制服务器。","nodeHost.browserProxy.allowProfiles":"通过节点代理暴露的浏览器配置集名称的可选允许列表。","diagnostics.flags":'按标志启用目标诊断日志（例如 ["telegram.http"]）。支持通配符，如 "telegram.*" 或 "*"。',"diagnostics.cacheTrace.enabled":"记录嵌入代理运行的缓存跟踪快照（默认：false）。","diagnostics.cacheTrace.filePath":"缓存跟踪日志的 JSONL 输出路径（默认：$OPENCLAW_STATE_DIR/logs/cache-trace.jsonl）。","diagnostics.cacheTrace.includeMessages":"在跟踪输出中包含完整消息负载（默认：true）。","diagnostics.cacheTrace.includePrompt":"在跟踪输出中包含提示文本（默认：true）。","diagnostics.cacheTrace.includeSystem":"在跟踪输出中包含系统提示（默认：true）。","tools.exec.applyPatch.enabled":"实验性。在工具策略允许时，为 OpenAI 模型启用 apply_patch。","tools.exec.applyPatch.allowModels":'模型 id 的可选允许列表（例如 "gpt-5.2" 或 "openai/gpt-5.2"）。',"tools.exec.notifyOnExit":"当为 true（默认）时，后台 exec 会话在退出时排队系统事件并请求心跳。","tools.exec.pathPrepend":"为 exec 运行前置到 PATH 的目录（网关/沙箱）。","tools.exec.safeBins":"允许仅 stdin 的安全二进制文件在没有显式允许列表条目的情况下运行。","tools.message.allowCrossContextSend":"遗留覆盖：允许跨所有提供方的跨上下文发送。","tools.message.crossContext.allowWithinProvider":"允许发送到同一提供方内的其他通道（默认：true）。","tools.message.crossContext.allowAcrossProviders":"允许跨不同提供方发送（默认：false）。","tools.message.crossContext.marker.enabled":"发送跨上下文时添加可见的来源标记（默认：true）。","tools.message.crossContext.marker.prefix":'跨上下文标记的文本前缀（支持 "{channel}"）。',"tools.message.crossContext.marker.suffix":'跨上下文标记的文本后缀（支持 "{channel}"）。',"tools.message.broadcast.enabled":"启用广播操作（默认：true）。","tools.web.search.enabled":"启用 web_search 工具（需要提供方 API 密钥）。","tools.web.search.provider":'搜索提供方（"brave" 或 "perplexity"）。',"tools.web.search.apiKey":"Brave Search API 密钥（回退：BRAVE_API_KEY 环境变量）。","tools.web.search.maxResults":"默认返回的结果数（1-10）。","tools.web.search.timeoutSeconds":"web_search 请求的超时（秒）。","tools.web.search.cacheTtlMinutes":"web_search 结果的缓存 TTL（分钟）。","tools.web.search.perplexity.apiKey":"Perplexity 或 OpenRouter API 密钥（回退：PERPLEXITY_API_KEY 或 OPENROUTER_API_KEY 环境变量）。","tools.web.search.perplexity.baseUrl":"Perplexity base URL 覆盖（默认：https://openrouter.ai/api/v1 或 https://api.perplexity.ai）。","tools.web.search.perplexity.model":'Perplexity 模型覆盖（默认："perplexity/sonar-pro"）。',"tools.web.fetch.enabled":"启用 web_fetch 工具（轻量级 HTTP 获取）。","tools.web.fetch.maxChars":"web_fetch 返回的最大字符数（截断）。","tools.web.fetch.maxCharsCap":"web_fetch maxChars 的硬上限（适用于配置和工具调用）。","tools.web.fetch.timeoutSeconds":"web_fetch 请求的超时（秒）。","tools.web.fetch.cacheTtlMinutes":"web_fetch 结果的缓存 TTL（分钟）。","tools.web.fetch.maxRedirects":"web_fetch 允许的最大重定向数（默认：3）。","tools.web.fetch.userAgent":"覆盖 web_fetch 请求的 User-Agent 头。","tools.web.fetch.readability":"使用 Readability 从 HTML 中提取主要内容（回退到基本 HTML 清理）。","tools.web.fetch.firecrawl.enabled":"启用 Firecrawl 回退用于 web_fetch（如果已配置）。","tools.web.fetch.firecrawl.apiKey":"Firecrawl API 密钥（回退：FIRECRAWL_API_KEY 环境变量）。","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL（例如 https://api.firecrawl.dev 或自定义端点）。","tools.web.fetch.firecrawl.onlyMainContent":"当为 true 时，Firecrawl 仅返回主要内容（默认：true）。","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge（毫秒），用于 API 支持时的缓存结果。","tools.web.fetch.firecrawl.timeoutSeconds":"Firecrawl 请求的超时（秒）。","channels.slack.allowBots":"允许机器人撰写的消息触发 Slack 回复（默认：false）。","channels.slack.thread.historyScope":'Slack 线程历史上下文的范围（"thread" 隔离每个线程；"channel" 重用通道历史）。',"channels.slack.thread.inheritParent":"如果为 true，Slack 线程会话继承父通道转录（默认：false）。","channels.mattermost.botToken":"来自 Mattermost 系统控制台 -> 集成 -> 机器人账户的机器人令牌。","channels.mattermost.baseUrl":"您的 Mattermost 服务器的 Base URL（例如，https://chat.example.com）。","channels.mattermost.chatmode":'在提及（"oncall"）、触发字符（">" 或 "!"）（"onchar"）或每条消息（"onmessage"）时回复通道消息。',"channels.mattermost.oncharPrefixes":'onchar 模式的触发前缀（默认：[">", "!"]）。',"channels.mattermost.requireMention":"在回复前要求在通道中 @提及（默认：true）。","auth.profiles":"命名的认证配置集（提供方 + 模式 + 可选电子邮件）。","auth.order":"每个提供方的有序认证配置集 ID（用于自动故障转移）。","auth.cooldowns.billingBackoffHours":"当配置集因计费/积分不足而失败时的基本退避（小时）（默认：5）。","auth.cooldowns.billingBackoffHoursByProvider":"每个提供方的计费退避可选覆盖（小时）。","auth.cooldowns.billingMaxHours":"计费退避的上限（小时）（默认：24）。","auth.cooldowns.failureWindowHours":"退避计数器的故障窗口（小时）（默认：24）。","agents.defaults.bootstrapMaxChars":"在截断前注入系统提示的每个工作区引导文件的最大字符数（默认：20000）。","agents.defaults.repoRoot":"在系统提示运行时行中显示的可选仓库根目录（覆盖自动检测）。","agents.defaults.envelopeTimezone":'消息信封的时区（"utc"、"local"、"user" 或 IANA 时区字符串）。',"agents.defaults.envelopeTimestamp":'在消息信封中包含绝对时间戳（"on" 或 "off"）。',"agents.defaults.envelopeElapsed":'在消息信封中包含经过时间（"on" 或 "off"）。',"agents.defaults.models":"配置的模型目录（键是完整的提供方/模型 ID）。","agents.defaults.memorySearch":"对 MEMORY.md 和 memory/*.md 的向量搜索（支持每个代理的覆盖）。","agents.defaults.memorySearch.sources":'记忆搜索的索引来源（默认：["memory"]；添加 "sessions" 以包含会话转录）。',"agents.defaults.memorySearch.extraPaths":"记忆搜索中包含的额外路径（目录或 .md 文件；相对路径从工作区解析）。","agents.defaults.memorySearch.experimental.sessionMemory":"启用实验性会话转录索引用于记忆搜索（默认：false）。","agents.defaults.memorySearch.provider":'嵌入提供方（"openai"、"gemini"、"voyage" 或 "local"）。',"agents.defaults.memorySearch.remote.baseUrl":"远程嵌入的自定义 base URL（OpenAI 兼容代理或 Gemini 覆盖）。","agents.defaults.memorySearch.remote.apiKey":"远程嵌入提供方的自定义 API 密钥。","agents.defaults.memorySearch.remote.headers":"远程嵌入的额外请求头（合并；远程覆盖 OpenAI 请求头）。","agents.defaults.memorySearch.remote.batch.enabled":"启用记忆嵌入的批处理 API（OpenAI/Gemini；默认：true）。","agents.defaults.memorySearch.remote.batch.wait":"索引时等待批处理完成（默认：true）。","agents.defaults.memorySearch.remote.batch.concurrency":"记忆索引的最大并发嵌入批处理作业数（默认：2）。","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"批处理状态轮询间隔（毫秒）（默认：2000）。","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"批处理索引的超时（分钟）（默认：60）。","agents.defaults.memorySearch.local.modelPath":"本地 GGUF 模型路径或 hf: URI（node-llama-cpp）。","agents.defaults.memorySearch.fallback":'嵌入失败时的回退提供方（"openai"、"gemini"、"local" 或 "none"）。',"agents.defaults.memorySearch.store.path":"SQLite 索引路径（默认：~/.openclaw/memory/{agentId}.sqlite）。","agents.defaults.memorySearch.store.vector.enabled":"启用 sqlite-vec 扩展用于向量搜索（默认：true）。","agents.defaults.memorySearch.store.vector.extensionPath":"sqlite-vec 扩展库的可选覆盖路径（.dylib/.so/.dll）。","agents.defaults.memorySearch.query.hybrid.enabled":"启用混合 BM25 + 向量搜索用于记忆（默认：true）。","agents.defaults.memorySearch.query.hybrid.vectorWeight":"合并结果时向量相似度的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.textWeight":"合并结果时 BM25 文本相关性的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"候选池大小的倍数（默认：4）。","agents.defaults.memorySearch.cache.enabled":"在 SQLite 中缓存块嵌入以加速重新索引和频繁更新（默认：true）。",memory:"记忆后端配置（全局）。","memory.backend":'记忆后端（"builtin" 用于 OpenClaw 嵌入，"qmd" 用于 QMD 侧车）。',"memory.citations":'默认引用行为（"auto"、"on" 或 "off"）。',"memory.qmd.command":"qmd 可执行文件的路径（默认：从 PATH 解析）。","memory.qmd.includeDefaultMemory":"是否自动索引 MEMORY.md + memory/**/*.md（默认：true）。","memory.qmd.paths":"使用 QMD 索引的额外目录/文件（路径 + 可选 glob 模式）。","memory.qmd.paths.path":"通过 QMD 索引的绝对或 ~ 相对路径。","memory.qmd.paths.pattern":"相对于路径根的 Glob 模式（默认：**/*.md）。","memory.qmd.paths.name":"QMD 集合的可选稳定名称（默认从路径派生）。","memory.qmd.sessions.enabled":"启用 QMD 会话转录索引（实验性，默认：false）。","memory.qmd.sessions.exportDir":"索引前清理会话导出的覆盖目录。","memory.qmd.sessions.retentionDays":"修剪前导出会话的保留窗口（默认：无限制）。","memory.qmd.update.interval":"QMD 侧车刷新索引的频率（持续时间字符串，默认：5m）。","memory.qmd.update.debounceMs":"连续 QMD 刷新运行之间的最小延迟（默认：15000）。","memory.qmd.update.onBoot":"在网关启动时运行一次 QMD 更新（默认：true）。","memory.qmd.update.embedInterval":"QMD 嵌入刷新的频率（持续时间字符串，默认：60m）。设置为 0 以禁用定期嵌入。","memory.qmd.limits.maxResults":"返回到代理循环的最大 QMD 结果数（默认：6）。","memory.qmd.limits.maxSnippetChars":"从 QMD 拉取的每个片段的最大字符数（默认：700）。","memory.qmd.limits.maxInjectedChars":"每轮从 QMD 命中注入的最大总字符数。","memory.qmd.limits.timeoutMs":"QMD 搜索的每次查询超时（默认：4000）。","memory.qmd.scope":"QMD 召回会话/通道范围（与 session.sendPolicy 相同的语法；默认：仅直接）。","agents.defaults.memorySearch.cache.maxEntries":"缓存嵌入的可选上限（尽力而为）。","agents.defaults.memorySearch.sync.onSearch":"懒同步：在更改后搜索时安排重新索引。","agents.defaults.memorySearch.sync.watch":"监听记忆文件的更改（chokidar）。","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话转录触发重新索引前的最小追加字节数（默认：100000）。","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话转录触发重新索引前的最小追加 JSONL 行数（默认：50）。","plugins.enabled":"启用插件/扩展加载（默认：true）。","plugins.allow":"插件 id 的可选允许列表；设置时，仅加载列出的插件。","plugins.deny":"插件 id 的可选拒绝列表；拒绝优先于允许列表。","plugins.load.paths":"要加载的额外插件文件或目录。","plugins.slots":"选择哪些插件拥有独占槽位（记忆等）。","plugins.slots.memory":'按 id 选择活动记忆插件，或 "none" 以禁用记忆插件。',"plugins.entries":"按插件 id 键控的每个插件设置（启用/禁用 + 配置负载）。","plugins.entries.*.enabled":"覆盖此条目的插件启用/禁用（需要重启）。","plugins.entries.*.config":"插件定义的配置负载（模式由插件提供）。","plugins.installs":"CLI 管理的安装元数据（由 `openclaw plugins update` 用于定位安装来源）。","plugins.installs.*.source":'安装来源（"npm"、"archive" 或 "path"）。',"plugins.installs.*.spec":"用于安装的原始 npm 规格（如果来源是 npm）。","plugins.installs.*.sourcePath":"用于安装的原始存档/路径（如果有）。","plugins.installs.*.installPath":"解析的安装目录（通常是 ~/.openclaw/extensions/<id>）。","plugins.installs.*.version":"安装时记录的版本（如果可用）。","plugins.installs.*.installedAt":"最后一次安装/更新的 ISO 时间戳。","agents.list.*.identity.avatar":"代理头像（工作区相对路径、http(s) URL 或 data URI）。","agents.defaults.model.primary":"主模型（提供方/模型）。","agents.defaults.model.fallbacks":"有序回退模型（提供方/模型）。当主模型失败时使用。","agents.defaults.imageModel.primary":"当主模型缺少图像输入时使用的可选图像模型（提供方/模型）。","agents.defaults.imageModel.fallbacks":"有序回退图像模型（提供方/模型）。","agents.defaults.cliBackends":"用于仅文本回退的可选 CLI 后端（claude-cli 等）。","agents.defaults.humanDelay.mode":'块回复的延迟样式（"off"、"natural"、"custom"）。',"agents.defaults.humanDelay.minMs":"自定义 humanDelay 的最小延迟（毫秒）（默认：800）。","agents.defaults.humanDelay.maxMs":"自定义 humanDelay 的最大延迟（毫秒）（默认：2500）。","commands.native":"向支持它的通道注册原生命令（Discord/Slack/Telegram）。","commands.nativeSkills":"向支持它的通道注册原生技能命令（用户可调用的技能）。","commands.text":"允许文本命令解析（仅斜杠命令）。","commands.bash":"允许 bash 聊天命令（`!`；`/bash` 别名）运行主机 shell 命令（默认：false；需要 tools.elevated）。","commands.bashForegroundMs":"bash 在后台化之前等待的时间（默认：2000；0 立即后台化）。","commands.config":"允许 /config 聊天命令在磁盘上读取/写入配置（默认：false）。","commands.debug":"允许 /debug 聊天命令进行仅运行时覆盖（默认：false）。","commands.restart":"允许 /restart 和网关重启工具操作（默认：false）。","commands.useAccessGroups":"强制执行访问组允许列表/策略用于命令。","commands.ownerAllowFrom":`仅所有者工具/命令的显式所有者允许列表。使用通道原生 ID（可选前缀，如 "whatsapp:+15551234567"）。'*' 被忽略。`,"session.dmScope":'私信会话范围："main" 保持连续性；"per-peer"、"per-channel-peer" 或 "per-account-channel-peer" 隔离私信历史（推荐用于共享收件箱/多账户）。',"session.identityLinks":"将规范身份映射到提供方前缀的对等 ID 用于私信会话链接（示例：telegram:123456）。","channels.telegram.configWrites":"允许 Telegram 响应通道事件/命令写入配置（默认：true）。","channels.slack.configWrites":"允许 Slack 响应通道事件/命令写入配置（默认：true）。","channels.mattermost.configWrites":"允许 Mattermost 响应通道事件/命令写入配置（默认：true）。","channels.discord.configWrites":"允许 Discord 响应通道事件/命令写入配置（默认：true）。","channels.whatsapp.configWrites":"允许 WhatsApp 响应通道事件/命令写入配置（默认：true）。","channels.signal.configWrites":"允许 Signal 响应通道事件/命令写入配置（默认：true）。","channels.imessage.configWrites":"允许 iMessage 响应通道事件/命令写入配置（默认：true）。","channels.msteams.configWrites":"允许 Microsoft Teams 响应通道事件/命令写入配置（默认：true）。","channels.discord.commands.native":'覆盖 Discord 的原生命令（bool 或 "auto"）。',"channels.discord.commands.nativeSkills":'覆盖 Discord 的原生技能命令（bool 或 "auto"）。',"channels.telegram.commands.native":'覆盖 Telegram 的原生命令（bool 或 "auto"）。',"channels.telegram.commands.nativeSkills":'覆盖 Telegram 的原生技能命令（bool 或 "auto"）。',"channels.slack.commands.native":'覆盖 Slack 的原生命令（bool 或 "auto"）。',"channels.slack.commands.nativeSkills":'覆盖 Slack 的原生技能命令（bool 或 "auto"）。',"session.agentToAgent.maxPingPongTurns":"请求者和目标之间的最大回复轮数（0–5）。","channels.telegram.customCommands":"额外的 Telegram 机器人菜单命令（与原生命令合并；冲突被忽略）。","messages.ackReaction":"用于确认入站消息的表情符号反应（空则禁用）。","messages.ackReactionScope":'何时发送确认反应（"group-mentions"、"group-all"、"direct"、"all"）。',"messages.inbound.debounceMs":"批处理来自同一发送者的快速入站消息的防抖窗口（毫秒）（0 以禁用）。","channels.telegram.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.telegram.allowFrom=["*"]。',"channels.telegram.streamMode":"Telegram 回复的草稿流模式（off | partial | block）。与块流分离；需要私有主题 + sendMessageDraft。","channels.telegram.draftChunk.minChars":'当 channels.telegram.streamMode="block" 时，发出 Telegram 草稿更新前的最小字符数（默认：200）。',"channels.telegram.draftChunk.maxChars":'当 channels.telegram.streamMode="block" 时，Telegram 草稿更新块的目标最大大小（默认：800；限制为 channels.telegram.textChunkLimit）。',"channels.telegram.draftChunk.breakPreference":"Telegram 草稿块的首选断点（paragraph | newline | sentence）。默认：paragraph。","channels.telegram.retry.attempts":"出站 Telegram API 调用的最大重试次数（默认：3）。","channels.telegram.retry.minDelayMs":"Telegram 出站调用的最小重试延迟（毫秒）。","channels.telegram.retry.maxDelayMs":"Telegram 出站调用的最大重试延迟上限（毫秒）。","channels.telegram.retry.jitter":"应用于 Telegram 重试延迟的抖动因子（0-1）。","channels.telegram.network.autoSelectFamily":"覆盖 Telegram 的 Node autoSelectFamily（true=启用，false=禁用）。","channels.telegram.timeoutSeconds":"Telegram API 请求中止前的最大秒数（默认：500 per grammY）。","channels.whatsapp.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.whatsapp.allowFrom=["*"]。',"channels.whatsapp.selfChatMode":"同手机设置（机器人使用您的个人 WhatsApp 号码）。","channels.whatsapp.debounceMs":"批处理来自同一发送者的快速连续消息的防抖窗口（毫秒）（0 以禁用）。","channels.signal.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.signal.allowFrom=["*"]。',"channels.imessage.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.imessage.allowFrom=["*"]。',"channels.bluebubbles.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.bluebubbles.allowFrom=["*"]。',"channels.discord.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.discord.dm.allowFrom=["*"]。',"channels.discord.retry.attempts":"出站 Discord API 调用的最大重试次数（默认：3）。","channels.discord.retry.minDelayMs":"Discord 出站调用的最小重试延迟（毫秒）。","channels.discord.retry.maxDelayMs":"Discord 出站调用的最大重试延迟上限（毫秒）。","channels.discord.retry.jitter":"应用于 Discord 重试延迟的抖动因子（0-1）。","channels.discord.maxLinesPerMessage":"每个 Discord 消息的软最大行数（默认：17）。","channels.discord.intents.presence":"启用 Guild Presences 特权意图。还必须在 Discord 开发者门户中启用。允许跟踪用户活动（例如 Spotify）。默认：false。","channels.discord.intents.guildMembers":"启用 Guild Members 特权意图。还必须在 Discord 开发者门户中启用。默认：false。","channels.discord.pluralkit.enabled":"解析 PluralKit 代理消息并将系统成员视为不同的发送者。","channels.discord.pluralkit.token":"用于解析私有系统或成员的可选 PluralKit 令牌。","channels.slack.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.slack.dm.allowFrom=["*"]。'}};function Je(e,t){const n=Oa(),s=nv[n];for(const a of tv(e)){const i=s[a];if(i)return i}return t}function sv(e){const t=Vt(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const av={en:{"meta.lastTouchedVersion":"Config Last Touched Version","meta.lastTouchedAt":"Config Last Touched At","update.channel":"Update Channel","update.checkOnStart":"Update Check on Start","diagnostics.enabled":"Diagnostics Enabled","diagnostics.flags":"Diagnostics Flags","diagnostics.otel.enabled":"OpenTelemetry Enabled","diagnostics.otel.endpoint":"OpenTelemetry Endpoint","diagnostics.otel.protocol":"OpenTelemetry Protocol","diagnostics.otel.headers":"OpenTelemetry Headers","diagnostics.otel.serviceName":"OpenTelemetry Service Name","diagnostics.otel.traces":"OpenTelemetry Traces Enabled","diagnostics.otel.metrics":"OpenTelemetry Metrics Enabled","diagnostics.otel.logs":"OpenTelemetry Logs Enabled","diagnostics.otel.sampleRate":"OpenTelemetry Trace Sample Rate","diagnostics.otel.flushIntervalMs":"OpenTelemetry Flush Interval (ms)","diagnostics.cacheTrace.enabled":"Cache Trace Enabled","diagnostics.cacheTrace.filePath":"Cache Trace File Path","diagnostics.cacheTrace.includeMessages":"Cache Trace Include Messages","diagnostics.cacheTrace.includePrompt":"Cache Trace Include Prompt","diagnostics.cacheTrace.includeSystem":"Cache Trace Include System","agents.list.*.identity.avatar":"Identity Avatar","agents.list.*.skills":"Agent Skill Filter","gateway.remote.url":"Remote Gateway URL","gateway.remote.sshTarget":"Remote Gateway SSH Target","gateway.remote.sshIdentity":"Remote Gateway SSH Identity","gateway.remote.token":"Remote Gateway Token","gateway.remote.password":"Remote Gateway Password","gateway.remote.tlsFingerprint":"Remote Gateway TLS Fingerprint","gateway.auth.token":"Gateway Token","gateway.auth.password":"Gateway Password","tools.media.image.enabled":"Enable Image Understanding","tools.media.image.maxBytes":"Image Understanding Max Bytes","tools.media.image.maxChars":"Image Understanding Max Chars","tools.media.image.prompt":"Image Understanding Prompt","tools.media.image.timeoutSeconds":"Image Understanding Timeout (sec)","tools.media.image.attachments":"Image Understanding Attachment Policy","tools.media.image.models":"Image Understanding Models","tools.media.image.scope":"Image Understanding Scope","tools.media.models":"Media Understanding Shared Models","tools.media.concurrency":"Media Understanding Concurrency","tools.media.audio.enabled":"Enable Audio Understanding","tools.media.audio.maxBytes":"Audio Understanding Max Bytes","tools.media.audio.maxChars":"Audio Understanding Max Chars","tools.media.audio.prompt":"Audio Understanding Prompt","tools.media.audio.timeoutSeconds":"Audio Understanding Timeout (sec)","tools.media.audio.language":"Audio Understanding Language","tools.media.audio.attachments":"Audio Understanding Attachment Policy","tools.media.audio.models":"Audio Understanding Models","tools.media.audio.scope":"Audio Understanding Scope","tools.media.video.enabled":"Enable Video Understanding","tools.media.video.maxBytes":"Video Understanding Max Bytes","tools.media.video.maxChars":"Video Understanding Max Chars","tools.media.video.prompt":"Video Understanding Prompt","tools.media.video.timeoutSeconds":"Video Understanding Timeout (sec)","tools.media.video.attachments":"Video Understanding Attachment Policy","tools.media.video.models":"Video Understanding Models","tools.media.video.scope":"Video Understanding Scope","tools.links.enabled":"Enable Link Understanding","tools.links.maxLinks":"Link Understanding Max Links","tools.links.timeoutSeconds":"Link Understanding Timeout (sec)","tools.links.models":"Link Understanding Models","tools.links.scope":"Link Understanding Scope","tools.profile":"Tool Profile","tools.alsoAllow":"Tool Allowlist Additions","agents.list[].tools.profile":"Agent Tool Profile","agents.list[].tools.alsoAllow":"Agent Tool Allowlist Additions","tools.byProvider":"Tool Policy by Provider","agents.list[].tools.byProvider":"Agent Tool Policy by Provider","tools.exec.applyPatch.enabled":"Enable apply_patch","tools.exec.applyPatch.allowModels":"apply_patch Model Allowlist","tools.exec.notifyOnExit":"Exec Notify On Exit","tools.exec.approvalRunningNoticeMs":"Exec Approval Running Notice (ms)","tools.exec.host":"Exec Host","tools.exec.security":"Exec Security","tools.exec.ask":"Exec Ask","tools.exec.node":"Exec Node Binding","tools.exec.pathPrepend":"Exec PATH Prepend","tools.exec.safeBins":"Exec Safe Bins","tools.message.allowCrossContextSend":"Allow Cross-Context Messaging","tools.message.crossContext.allowWithinProvider":"Allow Cross-Context (Same Provider)","tools.message.crossContext.allowAcrossProviders":"Allow Cross-Context (Across Providers)","tools.message.crossContext.marker.enabled":"Cross-Context Marker","tools.message.crossContext.marker.prefix":"Cross-Context Marker Prefix","tools.message.crossContext.marker.suffix":"Cross-Context Marker Suffix","tools.message.broadcast.enabled":"Enable Message Broadcast","tools.web.search.enabled":"Enable Web Search Tool","tools.web.search.provider":"Web Search Provider","tools.web.search.apiKey":"Brave Search API Key","tools.web.search.maxResults":"Web Search Max Results","tools.web.search.timeoutSeconds":"Web Search Timeout (sec)","tools.web.search.cacheTtlMinutes":"Web Search Cache TTL (min)","tools.web.fetch.enabled":"Enable Web Fetch Tool","tools.web.fetch.maxChars":"Web Fetch Max Chars","tools.web.fetch.timeoutSeconds":"Web Fetch Timeout (sec)","tools.web.fetch.cacheTtlMinutes":"Web Fetch Cache TTL (min)","tools.web.fetch.maxRedirects":"Web Fetch Max Redirects","tools.web.fetch.userAgent":"Web Fetch User-Agent","gateway.controlUi.basePath":"Control UI Base Path","gateway.controlUi.root":"Control UI Assets Root","gateway.controlUi.allowedOrigins":"Control UI Allowed Origins","gateway.controlUi.allowInsecureAuth":"Allow Insecure Control UI Auth","gateway.controlUi.dangerouslyDisableDeviceAuth":"Dangerously Disable Control UI Device Auth","gateway.http.endpoints.chatCompletions.enabled":"OpenAI Chat Completions Endpoint","gateway.reload.mode":"Config Reload Mode","gateway.reload.debounceMs":"Config Reload Debounce (ms)","gateway.nodes.browser.mode":"Gateway Node Browser Mode","gateway.nodes.browser.node":"Gateway Node Browser Pin","gateway.nodes.allowCommands":"Gateway Node Allowlist (Extra Commands)","gateway.nodes.denyCommands":"Gateway Node Denylist","nodeHost.browserProxy.enabled":"Node Browser Proxy Enabled","nodeHost.browserProxy.allowProfiles":"Node Browser Proxy Allowed Profiles","skills.load.watch":"Watch Skills","skills.load.watchDebounceMs":"Skills Watch Debounce (ms)","agents.defaults.workspace":"Workspace","agents.defaults.repoRoot":"Repo Root","agents.defaults.bootstrapMaxChars":"Bootstrap Max Chars","agents.defaults.envelopeTimezone":"Envelope Timezone","agents.defaults.envelopeTimestamp":"Envelope Timestamp","agents.defaults.envelopeElapsed":"Envelope Elapsed","agents.defaults.memorySearch":"Memory Search","agents.defaults.memorySearch.enabled":"Enable Memory Search","agents.defaults.memorySearch.sources":"Memory Search Sources","agents.defaults.memorySearch.extraPaths":"Extra Memory Paths","agents.defaults.memorySearch.experimental.sessionMemory":"Memory Search Session Index (Experimental)","agents.defaults.memorySearch.provider":"Memory Search Provider","agents.defaults.memorySearch.remote.baseUrl":"Remote Embedding Base URL","agents.defaults.memorySearch.remote.apiKey":"Remote Embedding API Key","agents.defaults.memorySearch.remote.headers":"Remote Embedding Headers","agents.defaults.memorySearch.remote.batch.concurrency":"Remote Batch Concurrency","agents.defaults.memorySearch.model":"Memory Search Model","agents.defaults.memorySearch.fallback":"Memory Search Fallback","agents.defaults.memorySearch.local.modelPath":"Local Embedding Model Path","agents.defaults.memorySearch.store.path":"Memory Search Index Path","agents.defaults.memorySearch.store.vector.enabled":"Memory Search Vector Index","agents.defaults.memorySearch.store.vector.extensionPath":"Memory Search Vector Extension Path","agents.defaults.memorySearch.chunking.tokens":"Memory Chunk Tokens","agents.defaults.memorySearch.chunking.overlap":"Memory Chunk Overlap Tokens","agents.defaults.memorySearch.sync.onSessionStart":"Index on Session Start","agents.defaults.memorySearch.sync.onSearch":"Index on Search (Lazy)","agents.defaults.memorySearch.sync.watch":"Watch Memory Files","agents.defaults.memorySearch.sync.watchDebounceMs":"Memory Watch Debounce (ms)","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Session Delta Bytes","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Session Delta Messages","agents.defaults.memorySearch.query.maxResults":"Memory Search Max Results","agents.defaults.memorySearch.query.minScore":"Memory Search Min Score","agents.defaults.memorySearch.query.hybrid.enabled":"Memory Search Hybrid","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Memory Search Vector Weight","agents.defaults.memorySearch.query.hybrid.textWeight":"Memory Search Text Weight","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Memory Search Hybrid Candidate Multiplier","agents.defaults.memorySearch.cache.enabled":"Memory Search Embedding Cache","agents.defaults.memorySearch.cache.maxEntries":"Memory Search Embedding Cache Max Entries",memory:"Memory","memory.backend":"Memory Backend","memory.citations":"Memory Citations Mode","memory.qmd.command":"QMD Binary","memory.qmd.includeDefaultMemory":"QMD Include Default Memory","memory.qmd.paths":"QMD Extra Paths","memory.qmd.paths.path":"QMD Path","memory.qmd.paths.pattern":"QMD Path Pattern","memory.qmd.paths.name":"QMD Path Name","memory.qmd.sessions.enabled":"QMD Session Indexing","memory.qmd.sessions.exportDir":"QMD Session Export Directory","memory.qmd.sessions.retentionDays":"QMD Session Retention (days)","memory.qmd.update.interval":"QMD Update Interval","memory.qmd.update.debounceMs":"QMD Update Debounce (ms)","memory.qmd.update.onBoot":"QMD Update on Startup","memory.qmd.update.embedInterval":"QMD Embed Interval","memory.qmd.limits.maxResults":"QMD Max Results","memory.qmd.limits.maxSnippetChars":"QMD Max Snippet Chars","memory.qmd.limits.maxInjectedChars":"QMD Max Injected Chars","memory.qmd.limits.timeoutMs":"QMD Search Timeout (ms)","memory.qmd.scope":"QMD Surface Scope","auth.profiles":"Auth Profiles","auth.order":"Auth Profile Order","auth.cooldowns.billingBackoffHours":"Billing Backoff (hours)","auth.cooldowns.billingBackoffHoursByProvider":"Billing Backoff Overrides","auth.cooldowns.billingMaxHours":"Billing Backoff Cap (hours)","auth.cooldowns.failureWindowHours":"Failover Window (hours)","agents.defaults.models":"Models","agents.defaults.model.primary":"Primary Model","agents.defaults.model.fallbacks":"Model Fallbacks","agents.defaults.imageModel.primary":"Image Model","agents.defaults.imageModel.fallbacks":"Image Model Fallbacks","agents.defaults.humanDelay.mode":"Human Delay Mode","agents.defaults.humanDelay.minMs":"Human Delay Min (ms)","agents.defaults.humanDelay.maxMs":"Human Delay Max (ms)","agents.defaults.cliBackends":"CLI Backends","commands.native":"Native Commands","commands.nativeSkills":"Native Skill Commands","commands.text":"Text Commands","commands.bash":"Allow Bash Chat Command","commands.bashForegroundMs":"Bash Foreground Window (ms)","commands.config":"Allow /config","commands.debug":"Allow /debug","commands.restart":"Allow Restart","commands.useAccessGroups":"Use Access Groups","commands.ownerAllowFrom":"Command Owners","ui.seamColor":"Accent Color","ui.assistant.name":"Assistant Name","ui.assistant.avatar":"Assistant Avatar","browser.evaluateEnabled":"Browser Evaluate Enabled","browser.snapshotDefaults":"Browser Snapshot Defaults","browser.snapshotDefaults.mode":"Browser Snapshot Mode","browser.remoteCdpTimeoutMs":"Remote CDP Timeout (ms)","browser.remoteCdpHandshakeTimeoutMs":"Remote CDP Handshake Timeout (ms)","session.dmScope":"DM Session Scope","session.agentToAgent.maxPingPongTurns":"Agent-to-Agent Ping-Pong Turns","messages.ackReaction":"Ack Reaction Emoji","messages.ackReactionScope":"Ack Reaction Scope","messages.inbound.debounceMs":"Inbound Message Debounce (ms)","talk.apiKey":"Talk API Key","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram Custom Commands","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram Bot Token","channels.telegram.dmPolicy":"Telegram DM Policy","channels.telegram.streamMode":"Telegram Draft Stream Mode","channels.telegram.draftChunk.minChars":"Telegram Draft Chunk Min Chars","channels.telegram.draftChunk.maxChars":"Telegram Draft Chunk Max Chars","channels.telegram.draftChunk.breakPreference":"Telegram Draft Chunk Break Preference","channels.telegram.retry.attempts":"Telegram Retry Attempts","channels.telegram.retry.minDelayMs":"Telegram Retry Min Delay (ms)","channels.telegram.retry.maxDelayMs":"Telegram Retry Max Delay (ms)","channels.telegram.retry.jitter":"Telegram Retry Jitter","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API Timeout (seconds)","channels.telegram.capabilities.inlineButtons":"Telegram Inline Buttons","channels.whatsapp.dmPolicy":"WhatsApp DM Policy","channels.whatsapp.selfChatMode":"WhatsApp Self-Phone Mode","channels.whatsapp.debounceMs":"WhatsApp Message Debounce (ms)","channels.signal.dmPolicy":"Signal DM Policy","channels.imessage.dmPolicy":"iMessage DM Policy","channels.bluebubbles.dmPolicy":"BlueBubbles DM Policy","channels.discord.dm.policy":"Discord DM Policy","channels.discord.retry.attempts":"Discord Retry Attempts","channels.discord.retry.minDelayMs":"Discord Retry Min Delay (ms)","channels.discord.retry.maxDelayMs":"Discord Retry Max Delay (ms)","channels.discord.retry.jitter":"Discord Retry Jitter","channels.discord.maxLinesPerMessage":"Discord Max Lines Per Message","channels.discord.intents.presence":"Discord Presence Intent","channels.discord.intents.guildMembers":"Discord Guild Members Intent","channels.discord.pluralkit.enabled":"Discord PluralKit Enabled","channels.discord.pluralkit.token":"Discord PluralKit Token","channels.slack.dm.policy":"Slack DM Policy","channels.slack.allowBots":"Slack Allow Bot Messages","channels.discord.token":"Discord Bot Token","channels.slack.botToken":"Slack Bot Token","channels.slack.appToken":"Slack App Token","channels.slack.userToken":"Slack User Token","channels.slack.userTokenReadOnly":"Slack User Token Read Only","channels.slack.thread.historyScope":"Slack Thread History Scope","channels.slack.thread.inheritParent":"Slack Thread Parent Inheritance","channels.mattermost.botToken":"Mattermost Bot Token","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost Chat Mode","channels.mattermost.oncharPrefixes":"Mattermost Onchar Prefixes","channels.mattermost.requireMention":"Mattermost Require Mention","channels.signal.account":"Signal Account","channels.imessage.cliPath":"iMessage CLI Path","agents.list[].skills":"Agent Skill Filter","agents.list[].identity.avatar":"Agent Avatar","discovery.mdns.mode":"mDNS Discovery Mode","plugins.enabled":"Enable Plugins","plugins.allow":"Plugin Allowlist","plugins.deny":"Plugin Denylist","plugins.load.paths":"Plugin Load Paths","plugins.slots":"Plugin Slots","plugins.slots.memory":"Memory Plugin","plugins.entries":"Plugin Entries","plugins.entries.*.enabled":"Plugin Enabled","plugins.entries.*.config":"Plugin Config","plugins.installs":"Plugin Install Records","plugins.installs.*.source":"Plugin Install Source","plugins.installs.*.spec":"Plugin Install Spec","plugins.installs.*.sourcePath":"Plugin Install Source Path","plugins.installs.*.installPath":"Plugin Install Path","plugins.installs.*.version":"Plugin Install Version","plugins.installs.*.installedAt":"Plugin Install Time"},zh:{"meta.lastTouchedVersion":"配置最后触及版本","meta.lastTouchedAt":"配置最后触及时间","update.channel":"更新渠道","update.checkOnStart":"启动时检查更新","diagnostics.enabled":"诊断已启用","diagnostics.flags":"诊断标志","diagnostics.otel.enabled":"OpenTelemetry 已启用","diagnostics.otel.endpoint":"OpenTelemetry 端点","diagnostics.otel.protocol":"OpenTelemetry 协议","diagnostics.otel.headers":"OpenTelemetry 请求头","diagnostics.otel.serviceName":"OpenTelemetry 服务名","diagnostics.otel.traces":"OpenTelemetry 链路已启用","diagnostics.otel.metrics":"OpenTelemetry 指标已启用","diagnostics.otel.logs":"OpenTelemetry 日志已启用","diagnostics.otel.sampleRate":"OpenTelemetry 采样率","diagnostics.otel.flushIntervalMs":"OpenTelemetry 刷新间隔（毫秒）","diagnostics.cacheTrace.enabled":"缓存追踪已启用","diagnostics.cacheTrace.filePath":"缓存追踪文件路径","diagnostics.cacheTrace.includeMessages":"缓存追踪包含消息","diagnostics.cacheTrace.includePrompt":"缓存追踪包含提示","diagnostics.cacheTrace.includeSystem":"缓存追踪包含系统","agents.list.*.identity.avatar":"身份头像","agents.list.*.skills":"代理技能筛选","gateway.remote.url":"远程网关 URL","gateway.remote.sshTarget":"远程网关 SSH 目标","gateway.remote.sshIdentity":"远程网关 SSH 身份","gateway.remote.token":"远程网关令牌","gateway.remote.password":"远程网关密码","gateway.remote.tlsFingerprint":"远程网关 TLS 指纹","gateway.auth.token":"网关令牌","gateway.auth.password":"网关密码","tools.media.image.enabled":"启用图像理解","tools.media.image.maxBytes":"图像理解最大字节","tools.media.image.maxChars":"图像理解最大字符","tools.media.image.prompt":"图像理解提示","tools.media.image.timeoutSeconds":"图像理解超时（秒）","tools.media.image.attachments":"图像理解附件策略","tools.media.image.models":"图像理解模型","tools.media.image.scope":"图像理解范围","tools.media.models":"媒体理解共享模型","tools.media.concurrency":"媒体理解并发数","tools.media.audio.enabled":"启用音频理解","tools.media.audio.maxBytes":"音频理解最大字节","tools.media.audio.maxChars":"音频理解最大字符","tools.media.audio.prompt":"音频理解提示","tools.media.audio.timeoutSeconds":"音频理解超时（秒）","tools.media.audio.language":"音频理解语言","tools.media.audio.attachments":"音频理解附件策略","tools.media.audio.models":"音频理解模型","tools.media.audio.scope":"音频理解范围","tools.media.video.enabled":"启用视频理解","tools.media.video.maxBytes":"视频理解最大字节","tools.media.video.maxChars":"视频理解最大字符","tools.media.video.prompt":"视频理解提示","tools.media.video.timeoutSeconds":"视频理解超时（秒）","tools.media.video.attachments":"视频理解附件策略","tools.media.video.models":"视频理解模型","tools.media.video.scope":"视频理解范围","tools.links.enabled":"启用链接理解","tools.links.maxLinks":"链接理解最大数量","tools.links.timeoutSeconds":"链接理解超时（秒）","tools.links.models":"链接理解模型","tools.links.scope":"链接理解范围","tools.profile":"工具配置集","tools.alsoAllow":"工具允许列表附加","agents.list[].tools.profile":"代理工具配置集","agents.list[].tools.alsoAllow":"代理工具允许列表附加","tools.byProvider":"按提供方的工具策略","agents.list[].tools.byProvider":"代理按提供方的工具策略","tools.exec.applyPatch.enabled":"启用 apply_patch","tools.exec.applyPatch.allowModels":"apply_patch 模型允许列表","tools.exec.notifyOnExit":"Exec 退出时通知","tools.exec.approvalRunningNoticeMs":"Exec 审批运行提示（毫秒）","tools.exec.host":"Exec 主机","tools.exec.security":"Exec 安全","tools.exec.ask":"Exec 询问","tools.exec.node":"Exec 节点绑定","tools.exec.pathPrepend":"Exec PATH 前置","tools.exec.safeBins":"Exec 安全二进制","tools.message.allowCrossContextSend":"允许跨上下文发送","tools.message.crossContext.allowWithinProvider":"允许跨上下文（同提供方）","tools.message.crossContext.allowAcrossProviders":"允许跨上下文（跨提供方）","tools.message.crossContext.marker.enabled":"跨上下文标记","tools.message.crossContext.marker.prefix":"跨上下文标记前缀","tools.message.crossContext.marker.suffix":"跨上下文标记后缀","tools.message.broadcast.enabled":"启用消息广播","tools.web.search.enabled":"启用网页搜索工具","tools.web.search.provider":"网页搜索提供方","tools.web.search.apiKey":"Brave 搜索 API 密钥","tools.web.search.maxResults":"网页搜索最大结果数","tools.web.search.timeoutSeconds":"网页搜索超时（秒）","tools.web.search.cacheTtlMinutes":"网页搜索缓存 TTL（分钟）","tools.web.fetch.enabled":"启用网页抓取工具","tools.web.fetch.maxChars":"网页抓取最大字符","tools.web.fetch.timeoutSeconds":"网页抓取超时（秒）","tools.web.fetch.cacheTtlMinutes":"网页抓取缓存 TTL（分钟）","tools.web.fetch.maxRedirects":"网页抓取最大重定向","tools.web.fetch.userAgent":"网页抓取 User-Agent","gateway.controlUi.basePath":"控制台 UI 基础路径","gateway.controlUi.root":"控制台 UI 资源根目录","gateway.controlUi.allowedOrigins":"控制台 UI 允许来源","gateway.controlUi.allowInsecureAuth":"允许控制台 UI 非安全认证","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险：禁用控制台 UI 设备认证","gateway.http.endpoints.chatCompletions.enabled":"OpenAI 对话补全端点","gateway.reload.mode":"配置重载模式","gateway.reload.debounceMs":"配置重载防抖（毫秒）","gateway.nodes.browser.mode":"网关节点浏览器模式","gateway.nodes.browser.node":"网关节点浏览器固定","gateway.nodes.allowCommands":"网关节点允许列表（额外命令）","gateway.nodes.denyCommands":"网关节点拒绝列表","nodeHost.browserProxy.enabled":"节点浏览器代理已启用","nodeHost.browserProxy.allowProfiles":"节点浏览器代理允许配置集","skills.load.watch":"监听技能","skills.load.watchDebounceMs":"技能监听防抖（毫秒）","agents.defaults.workspace":"工作区","agents.defaults.repoRoot":"仓库根目录","agents.defaults.bootstrapMaxChars":"引导最大字符","agents.defaults.envelopeTimezone":"信封时区","agents.defaults.envelopeTimestamp":"信封时间戳","agents.defaults.envelopeElapsed":"信封耗时","agents.defaults.memorySearch":"记忆搜索","agents.defaults.memorySearch.enabled":"启用记忆搜索","agents.defaults.memorySearch.sources":"记忆搜索来源","agents.defaults.memorySearch.extraPaths":"记忆搜索额外路径","agents.defaults.memorySearch.experimental.sessionMemory":"记忆搜索会话索引（实验）","agents.defaults.memorySearch.provider":"记忆搜索提供方","agents.defaults.memorySearch.remote.baseUrl":"远程嵌入 Base URL","agents.defaults.memorySearch.remote.apiKey":"远程嵌入 API 密钥","agents.defaults.memorySearch.remote.headers":"远程嵌入请求头","agents.defaults.memorySearch.remote.batch.concurrency":"远程批处理并发数","agents.defaults.memorySearch.model":"记忆搜索模型","agents.defaults.memorySearch.fallback":"记忆搜索回退","agents.defaults.memorySearch.local.modelPath":"本地嵌入模型路径","agents.defaults.memorySearch.store.path":"记忆搜索索引路径","agents.defaults.memorySearch.store.vector.enabled":"记忆搜索向量索引","agents.defaults.memorySearch.store.vector.extensionPath":"记忆搜索向量扩展路径","agents.defaults.memorySearch.chunking.tokens":"记忆分块词数","agents.defaults.memorySearch.chunking.overlap":"记忆分块重叠词数","agents.defaults.memorySearch.sync.onSessionStart":"会话开始时建索引","agents.defaults.memorySearch.sync.onSearch":"搜索时建索引（懒加载）","agents.defaults.memorySearch.sync.watch":"监听记忆文件","agents.defaults.memorySearch.sync.watchDebounceMs":"记忆监听防抖（毫秒）","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话增量字节","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话增量消息","agents.defaults.memorySearch.query.maxResults":"记忆搜索最大结果数","agents.defaults.memorySearch.query.minScore":"记忆搜索最低分","agents.defaults.memorySearch.query.hybrid.enabled":"记忆搜索混合模式","agents.defaults.memorySearch.query.hybrid.vectorWeight":"记忆搜索向量权重","agents.defaults.memorySearch.query.hybrid.textWeight":"记忆搜索文本权重","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"记忆搜索混合候选倍数","agents.defaults.memorySearch.cache.enabled":"记忆搜索嵌入缓存","agents.defaults.memorySearch.cache.maxEntries":"记忆搜索嵌入缓存最大条数",memory:"记忆","memory.backend":"记忆后端","memory.citations":"记忆引用模式","memory.qmd.command":"QMD 可执行文件","memory.qmd.includeDefaultMemory":"QMD 包含默认记忆","memory.qmd.paths":"QMD 额外路径","memory.qmd.paths.path":"QMD 路径","memory.qmd.paths.pattern":"QMD 路径模式","memory.qmd.paths.name":"QMD 路径名称","memory.qmd.sessions.enabled":"QMD 会话索引","memory.qmd.sessions.exportDir":"QMD 会话导出目录","memory.qmd.sessions.retentionDays":"QMD 会话保留（天）","memory.qmd.update.interval":"QMD 更新间隔","memory.qmd.update.debounceMs":"QMD 更新防抖（毫秒）","memory.qmd.update.onBoot":"QMD 启动时更新","memory.qmd.update.embedInterval":"QMD 嵌入间隔","memory.qmd.limits.maxResults":"QMD 最大结果数","memory.qmd.limits.maxSnippetChars":"QMD 最大片段字符","memory.qmd.limits.maxInjectedChars":"QMD 最大注入字符","memory.qmd.limits.timeoutMs":"QMD 搜索超时（毫秒）","memory.qmd.scope":"QMD 作用范围","auth.profiles":"认证配置集","auth.order":"认证配置顺序","auth.cooldowns.billingBackoffHours":"计费退避（小时）","auth.cooldowns.billingBackoffHoursByProvider":"计费退避覆盖","auth.cooldowns.billingMaxHours":"计费退避上限（小时）","auth.cooldowns.failureWindowHours":"故障窗口（小时）","agents.defaults.models":"模型","agents.defaults.model.primary":"主模型","agents.defaults.model.fallbacks":"模型回退","agents.defaults.imageModel.primary":"图像模型","agents.defaults.imageModel.fallbacks":"图像模型回退","agents.defaults.humanDelay.mode":"人工延迟模式","agents.defaults.humanDelay.minMs":"人工延迟最小（毫秒）","agents.defaults.humanDelay.maxMs":"人工延迟最大（毫秒）","agents.defaults.cliBackends":"CLI 后端","commands.native":"原生命令","commands.nativeSkills":"原生技能命令","commands.text":"文本命令","commands.bash":"允许 Bash 聊天命令","commands.bashForegroundMs":"Bash 前台窗口（毫秒）","commands.config":"允许 /config","commands.debug":"允许 /debug","commands.restart":"允许重启","commands.useAccessGroups":"使用访问组","commands.ownerAllowFrom":"命令所有者","ui.seamColor":"强调色","ui.assistant.name":"助手名称","ui.assistant.avatar":"助手头像","browser.evaluateEnabled":"浏览器执行已启用","browser.snapshotDefaults":"浏览器快照默认","browser.snapshotDefaults.mode":"浏览器快照模式","browser.remoteCdpTimeoutMs":"远程 CDP 超时（毫秒）","browser.remoteCdpHandshakeTimeoutMs":"远程 CDP 握手超时（毫秒）","session.dmScope":"私信会话范围","session.agentToAgent.maxPingPongTurns":"代理间乒乓轮数","messages.ackReaction":"确认反应表情","messages.ackReactionScope":"确认反应范围","messages.inbound.debounceMs":"入站消息防抖（毫秒）","talk.apiKey":"语音 API 密钥","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram 自定义命令","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram 机器人令牌","channels.telegram.dmPolicy":"Telegram 私信策略","channels.telegram.streamMode":"Telegram 草稿流模式","channels.telegram.draftChunk.minChars":"Telegram 草稿块最小字符","channels.telegram.draftChunk.maxChars":"Telegram 草稿块最大字符","channels.telegram.draftChunk.breakPreference":"Telegram 草稿块断行偏好","channels.telegram.retry.attempts":"Telegram 重试次数","channels.telegram.retry.minDelayMs":"Telegram 重试最小延迟（毫秒）","channels.telegram.retry.maxDelayMs":"Telegram 重试最大延迟（毫秒）","channels.telegram.retry.jitter":"Telegram 重试抖动","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API 超时（秒）","channels.telegram.capabilities.inlineButtons":"Telegram 内联按钮","channels.whatsapp.dmPolicy":"WhatsApp 私信策略","channels.whatsapp.selfChatMode":"WhatsApp 自聊模式","channels.whatsapp.debounceMs":"WhatsApp 消息防抖（毫秒）","channels.signal.dmPolicy":"Signal 私信策略","channels.imessage.dmPolicy":"iMessage 私信策略","channels.bluebubbles.dmPolicy":"BlueBubbles 私信策略","channels.discord.dm.policy":"Discord 私信策略","channels.discord.retry.attempts":"Discord 重试次数","channels.discord.retry.minDelayMs":"Discord 重试最小延迟（毫秒）","channels.discord.retry.maxDelayMs":"Discord 重试最大延迟（毫秒）","channels.discord.retry.jitter":"Discord 重试抖动","channels.discord.maxLinesPerMessage":"Discord 每消息最大行数","channels.discord.intents.presence":"Discord 在线状态意图","channels.discord.intents.guildMembers":"Discord 频道成员意图","channels.discord.pluralkit.enabled":"Discord PluralKit 已启用","channels.discord.pluralkit.token":"Discord PluralKit 令牌","channels.slack.dm.policy":"Slack 私信策略","channels.slack.allowBots":"Slack 允许机器人消息","channels.discord.token":"Discord 机器人令牌","channels.slack.botToken":"Slack 机器人令牌","channels.slack.appToken":"Slack 应用令牌","channels.slack.userToken":"Slack 用户令牌","channels.slack.userTokenReadOnly":"Slack 用户令牌只读","channels.slack.thread.historyScope":"Slack 线程历史范围","channels.slack.thread.inheritParent":"Slack 线程继承父级","channels.mattermost.botToken":"Mattermost 机器人令牌","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost 聊天模式","channels.mattermost.oncharPrefixes":"Mattermost 触发前缀","channels.mattermost.requireMention":"Mattermost 需要 @ 提及","channels.signal.account":"Signal 账号","channels.imessage.cliPath":"iMessage CLI 路径","agents.list[].skills":"代理技能筛选","agents.list[].identity.avatar":"代理头像","discovery.mdns.mode":"mDNS 发现模式","plugins.enabled":"启用插件","plugins.allow":"插件允许列表","plugins.deny":"插件拒绝列表","plugins.load.paths":"插件加载路径","plugins.slots":"插件槽位","plugins.slots.memory":"记忆插件","plugins.entries":"插件条目","plugins.entries.*.enabled":"插件已启用","plugins.entries.*.config":"插件配置","plugins.installs":"插件安装记录","plugins.installs.*.source":"插件安装来源","plugins.installs.*.spec":"插件安装规格","plugins.installs.*.sourcePath":"插件安装源路径","plugins.installs.*.installPath":"插件安装路径","plugins.installs.*.version":"插件安装版本","plugins.installs.*.installedAt":"插件安装时间"}};function Ye(e,t){const n=Oa(),s=av[n];for(const a of sv(e)){const i=s[a];if(i)return i}return t}const ov=new Set(["title","description","default","nullable"]);function iv(e){return Object.keys(e??{}).filter(n=>!ov.has(n)).length===0}function Da(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const xn={chevronDown:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function tt(e){const{schema:t,value:n,path:s,hints:a,unsupported:i,disabled:l,onPatch:d}=e,u=e.showLabel??!0,p=Qe(t),m=Ae(s,a),f=Ye(s,m?.label??t.title??Oe(String(s.at(-1)))),h=Je(s,m?.help??t.description??""),r=Vt(s);if(i.has(r))return c`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">${o("configUnsupportedSchemaNode")}</div>
    </div>`;if(t.anyOf||t.oneOf){const y=(t.anyOf??t.oneOf??[]).filter(M=>!(M.type==="null"||Array.isArray(M.type)&&M.type.includes("null")));if(y.length===1)return tt({...e,schema:y[0]});const A=M=>{if(M.const!==void 0)return M.const;if(M.enum&&M.enum.length===1)return M.enum[0]},S=y.map(A),w=S.every(M=>M!==void 0);if(w&&S.length>0&&S.length<=5){const M=n??t.default;return c`
        <div class="cfg-field">
          ${u?c`<label class="cfg-field__label">${f}</label>`:v}
          ${h?c`<div class="cfg-field__help">${h}</div>`:v}
          <div class="cfg-segmented">
            ${S.map(E=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${E===M||String(E)===String(M)?"active":""}"
                ?disabled=${l}
                @click=${()=>d(s,E)}
              >
                ${String(E)}
              </button>
            `)}
          </div>
        </div>
      `}if(w&&S.length>5)return Zi({...e,options:S,value:n??t.default});const T=new Set(y.map(M=>Qe(M)).filter(Boolean)),C=new Set([...T].map(M=>M==="integer"?"number":M));if([...C].every(M=>["string","number","boolean"].includes(M))){const M=C.has("string"),E=C.has("number");if(C.has("boolean")&&C.size===1)return tt({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(M||E)return Yi({...e,inputType:E&&!M?"number":"text"})}}if(t.enum){const g=t.enum;if(g.length<=5){const y=n??t.default;return c`
        <div class="cfg-field">
          ${u?c`<label class="cfg-field__label">${f}</label>`:v}
          ${h?c`<div class="cfg-field__help">${h}</div>`:v}
          <div class="cfg-segmented">
            ${g.map(A=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${A===y||String(A)===String(y)?"active":""}"
                ?disabled=${l}
                @click=${()=>d(s,A)}
              >
                ${String(A)}
              </button>
            `)}
          </div>
        </div>
      `}return Zi({...e,options:g,value:n??t.default})}if(p==="object")return cv(e);if(p==="array")return dv(e);if(p==="boolean"){const g=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return c`
      <label class="cfg-toggle-row ${l?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${f}</span>
          ${h?c`<span class="cfg-toggle-row__help">${h}</span>`:v}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${g}
            ?disabled=${l}
            @change=${y=>d(s,y.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return p==="number"||p==="integer"?rv(e):p==="string"?Yi({...e,inputType:"text"}):c`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">Unsupported type: ${p}. Use Raw mode.</div>
    </div>
  `}function Yi(e){const{schema:t,value:n,path:s,hints:a,disabled:i,onPatch:l,inputType:d}=e,u=e.showLabel??!0,p=Ae(s,a),m=Ye(s,p?.label??t.title??Oe(String(s.at(-1)))),f=Je(s,p?.help??t.description??""),h=p?.sensitive??ev(s),r=p?.placeholder??(h?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),g=n??"";return c`
    <div class="cfg-field">
      ${u?c`<label class="cfg-field__label">${m}</label>`:v}
      ${f?c`<div class="cfg-field__help">${f}</div>`:v}
      <div class="cfg-input-wrap">
        <input
          type=${h?"password":d}
          class="cfg-input"
          placeholder=${r}
          .value=${g==null?"":String(g)}
          ?disabled=${i}
          @input=${y=>{const A=y.target.value;if(d==="number"){if(A.trim()===""){l(s,void 0);return}const S=Number(A);l(s,Number.isNaN(S)?A:S);return}l(s,A)}}
          @change=${y=>{if(d==="number")return;const A=y.target.value;l(s,A.trim())}}
        />
        ${t.default!==void 0?c`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${i}
            @click=${()=>l(s,t.default)}
          >↺</button>
        `:v}
      </div>
    </div>
  `}function lv(e){const{schema:t,value:n,path:s,hints:a,disabled:i,onPatch:l}=e,d=e.showLabel??!0,u=Ae(s,a),p=Ye(s,u?.label??t.title??Oe(String(s.at(-1)))),m=Je(s,u?.help??t.description??""),f=n??t.default;let h;if(typeof f=="string")try{h=JSON.stringify(JSON.parse(f),null,2)}catch{h=f}else h=Da(f);return c`
    <div class="cfg-field">
      ${d?c`<label class="cfg-field__label">${p}</label>`:v}
      ${m?c`<div class="cfg-field__help">${m}</div>`:v}
      <div class="cfg-input-wrap cfg-input-wrap--textarea">
        <textarea
          class="cfg-textarea cfg-textarea--json"
          rows="6"
          placeholder="{}"
          .value=${h}
          ?disabled=${i}
          @input=${r=>{const g=r.target.value;if(g.trim()===""){l(s,void 0);return}try{l(s,JSON.parse(g))}catch{}}}
          @change=${r=>{const g=r.target.value.trim();if(!g){l(s,void 0);return}try{l(s,JSON.parse(g))}catch{const y=r.target;y.value=Da(n??t.default)}}}
        ></textarea>
        ${t.default!==void 0?c`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${i}
            @click=${()=>l(s,t.default)}
          >↺</button>
        `:v}
      </div>
    </div>
  `}function rv(e){const{schema:t,value:n,path:s,hints:a,disabled:i,onPatch:l}=e,d=e.showLabel??!0,u=Ae(s,a),p=Ye(s,u?.label??t.title??Oe(String(s.at(-1)))),m=Je(s,u?.help??t.description??""),f=n??t.default??"",h=typeof f=="number"?f:0;return c`
    <div class="cfg-field">
      ${d?c`<label class="cfg-field__label">${p}</label>`:v}
      ${m?c`<div class="cfg-field__help">${m}</div>`:v}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${i}
          @click=${()=>l(s,h-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${f==null?"":String(f)}
          ?disabled=${i}
          @input=${r=>{const g=r.target.value,y=g===""?void 0:Number(g);l(s,y)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${i}
          @click=${()=>l(s,h+1)}
        >+</button>
      </div>
    </div>
  `}function Zi(e){const{schema:t,value:n,path:s,hints:a,disabled:i,options:l,onPatch:d}=e,u=e.showLabel??!0,p=Ae(s,a),m=Ye(s,p?.label??t.title??Oe(String(s.at(-1)))),f=Je(s,p?.help??t.description??""),h=n??t.default,r=l.findIndex(y=>y===h||String(y)===String(h)),g="__unset__";return c`
    <div class="cfg-field">
      ${u?c`<label class="cfg-field__label">${m}</label>`:v}
      ${f?c`<div class="cfg-field__help">${f}</div>`:v}
      <select
        class="cfg-select"
        ?disabled=${i}
        .value=${r>=0?String(r):g}
        @change=${y=>{const A=y.target.value;d(s,A===g?void 0:l[Number(A)])}}
      >
        <option value=${g}>Select...</option>
        ${l.map((y,A)=>c`
          <option value=${String(A)}>${String(y)}</option>
        `)}
      </select>
    </div>
  `}function cv(e){const{schema:t,value:n,path:s,hints:a,unsupported:i,disabled:l,onPatch:d}=e,u=t.properties??{};if(Object.keys(u).length===0&&t.additionalProperties===!0)return lv({schema:{...t,format:"json"},value:n,path:s,hints:a,disabled:l,showLabel:e.showLabel,onPatch:d});const m=Ae(s,a),f=Ye(s,m?.label??t.title??Oe(String(s.at(-1)))),h=Je(s,m?.help??t.description??""),r=n??t.default,g=r&&typeof r=="object"&&!Array.isArray(r)?r:{},A=Object.entries(u).toSorted((C,M)=>{const E=Ae([...s,C[0]],a)?.order??0,I=Ae([...s,M[0]],a)?.order??0;return E!==I?E-I:C[0].localeCompare(M[0])}),S=new Set(Object.keys(u)),w=t.additionalProperties,T=!!w&&typeof w=="object";return s.length===1?c`
      <div class="cfg-fields">
        ${A.map(([C,M])=>tt({schema:M,value:g[C],path:[...s,C],hints:a,unsupported:i,disabled:l,onPatch:d}))}
        ${T?Xi({schema:w,value:g,path:s,hints:a,unsupported:i,disabled:l,reservedKeys:S,onPatch:d}):v}
      </div>
    `:c`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${f}</span>
        <span class="cfg-object__chevron">${xn.chevronDown}</span>
      </summary>
      ${h?c`<div class="cfg-object__help">${h}</div>`:v}
      <div class="cfg-object__content">
        ${A.map(([C,M])=>tt({schema:M,value:g[C],path:[...s,C],hints:a,unsupported:i,disabled:l,onPatch:d}))}
        ${T?Xi({schema:w,value:g,path:s,hints:a,unsupported:i,disabled:l,reservedKeys:S,onPatch:d}):v}
      </div>
    </details>
  `}function dv(e){const{schema:t,value:n,path:s,hints:a,unsupported:i,disabled:l,onPatch:d}=e,u=e.showLabel??!0,p=Ae(s,a),m=Ye(s,p?.label??t.title??Oe(String(s.at(-1)))),f=Je(s,p?.help??t.description??""),h=Array.isArray(t.items)?t.items[0]:t.items;if(!h)return c`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${m}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const r=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return c`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${u?c`<span class="cfg-array__label">${m}</span>`:v}
        <span class="cfg-array__count">${r.length} item${r.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${l}
          @click=${()=>{const g=[...r,sc(h)];d(s,g)}}
        >
          <span class="cfg-array__add-icon">${xn.plus}</span>
          Add
        </button>
      </div>
      ${f?c`<div class="cfg-array__help">${f}</div>`:v}

      ${r.length===0?c`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:c`
        <div class="cfg-array__items">
          ${r.map((g,y)=>c`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${y+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${l}
                  @click=${()=>{const A=[...r];A.splice(y,1),d(s,A)}}
                >
                  ${xn.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${tt({schema:h,value:g,path:[...s,y],hints:a,unsupported:i,disabled:l,showLabel:!1,onPatch:d})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function Xi(e){const{schema:t,value:n,path:s,hints:a,unsupported:i,disabled:l,reservedKeys:d,onPatch:u}=e,p=iv(t),m=Object.entries(n??{}).filter(([f])=>!d.has(f));return c`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${l}
          @click=${()=>{const f={...n};let h=1,r=`custom-${h}`;for(;r in f;)h+=1,r=`custom-${h}`;f[r]=p?{}:sc(t),u(s,f)}}
        >
          <span class="cfg-map__add-icon">${xn.plus}</span>
          Add Entry
        </button>
      </div>

      ${m.length===0?c`
              <div class="cfg-map__empty">No custom entries.</div>
            `:c`
        <div class="cfg-map__items">
          ${m.map(([f,h])=>{const r=[...s,f],g=Da(h);return c`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${f}
                    ?disabled=${l}
                    @change=${y=>{const A=y.target.value.trim();if(!A||A===f)return;const S={...n};A in S||(S[A]=S[f],delete S[f],u(s,S))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${p?c`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${g}
                          ?disabled=${l}
                          @change=${y=>{const A=y.target,S=A.value.trim();if(!S){u(r,void 0);return}try{u(r,JSON.parse(S))}catch{A.value=g}}}
                        ></textarea>
                      `:tt({schema:t,value:h,path:r,hints:a,unsupported:i,disabled:l,showLabel:!1,onPatch:u})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${l}
                  @click=${()=>{const y={...n};delete y[f],u(s,y)}}
                >
                  ${xn.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const el={env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function tl(e){return el[e]??el.default}function uv(e,t,n){if(!n)return!0;const s=n.toLowerCase(),a=Ba(e);return e.toLowerCase().includes(s)||a&&(a.label.toLowerCase().includes(s)||a.description.toLowerCase().includes(s))?!0:cn(t,s)}function cn(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,a]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||cn(a,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const a of s)if(a&&cn(a,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&cn(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&cn(s,t))return!0}return!1}function gv(e){if(!e.schema)return c`
      <div class="muted">${o("configSchemaUnavailable")}</div>
    `;const t=e.schema,n=e.value??{};if(Qe(t)!=="object"||!t.properties)return c`
      <div class="callout danger">${o("configUnsupportedSchema")}</div>
    `;const s=new Set(e.unsupportedPaths??[]),a=t.properties,i=e.searchQuery??"",l=e.activeSection,d=e.activeSubsection??null,p=Object.entries(a).toSorted((f,h)=>{const r=Ae([f[0]],e.uiHints)?.order??50,g=Ae([h[0]],e.uiHints)?.order??50;return r!==g?r-g:f[0].localeCompare(h[0])}).filter(([f,h])=>!(l&&f!==l||i&&!uv(f,h,i)));let m=null;if(l&&d&&p.length===1){const f=p[0]?.[1];f&&Qe(f)==="object"&&f.properties&&f.properties[d]&&(m={sectionKey:l,subsectionKey:d,schema:f.properties[d]})}return p.length===0?c`
      <div class="config-empty">
        <div class="config-empty__icon">${ge.search}</div>
        <div class="config-empty__text">
          ${i?`${o("configNoSettingsMatchPrefix")}${i}${o("configNoSettingsMatchSuffix")}`:o("configNoSettingsInSection")}
        </div>
      </div>
    `:c`
    <div class="config-form config-form--modern">
      ${m?(()=>{const{sectionKey:f,subsectionKey:h,schema:r}=m,g=Ae([f,h],e.uiHints),y=Ye([f,h],g?.label??r.title??Oe(h)),A=Je([f,h],g?.help??r.description??""),S=n[f],w=S&&typeof S=="object"?S[h]:void 0,T=`config-section-${f}-${h}`;return c`
              <section class="config-section-card" id=${T}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${tl(f)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${y}</h3>
                    ${A?c`<p class="config-section-card__desc">${A}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${tt({schema:r,value:w,path:[f,h],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():p.map(([f,h])=>{const r=Ba(f),g=r.label||r.description?r:{label:f.charAt(0).toUpperCase()+f.slice(1),description:h.description??""};return c`
              <section class="config-section-card" id="config-section-${f}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${tl(f)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${g.label}</h3>
                    ${g.description?c`<p class="config-section-card__desc">${g.description}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${tt({schema:h,value:n[f],path:[f],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const pv=new Set(["title","description","default","nullable"]);function mv(e){return Object.keys(e??{}).filter(n=>!pv.has(n)).length===0}function ac(e){const t=e.filter(a=>a!=null),n=t.length!==e.length,s=[];for(const a of t)s.some(i=>Object.is(i,a))||s.push(a);return{enumValues:s,nullable:n}}function fv(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:fn(e,[])}function fn(e,t){const n=new Set,s={...e},a=Vt(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const d=hv(e,t);return d||{schema:e,unsupportedPaths:[a]}}const i=Array.isArray(e.type)&&e.type.includes("null"),l=Qe(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=l??e.type,s.nullable=i||e.nullable,s.enum){const{enumValues:d,nullable:u}=ac(s.enum);s.enum=d,u&&(s.nullable=!0),d.length===0&&n.add(a)}if(l==="object"){const d=e.properties??{},u={};for(const[m,f]of Object.entries(d)){const h=fn(f,[...t,m]);h.schema&&(u[m]=h.schema);for(const r of h.unsupportedPaths)n.add(r)}s.properties=u;const p=Object.keys(d).length===0;if(e.additionalProperties===!0)p||n.add(a);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!mv(e.additionalProperties)){const m=fn(e.additionalProperties,[...t,"*"]);s.additionalProperties=m.schema??e.additionalProperties,m.unsupportedPaths.length>0&&n.add(a)}}else if(l==="array"){const d=Array.isArray(e.items)?e.items[0]:e.items;if(!d)n.add(a);else{const u=fn(d,[...t,"*"]);s.items=u.schema??d,u.unsupportedPaths.length>0&&n.add(a)}}else l!=="string"&&l!=="number"&&l!=="integer"&&l!=="boolean"&&!s.enum&&n.add(a);return{schema:s,unsupportedPaths:Array.from(n)}}function hv(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],a=[];let i=!1;for(const d of n){if(!d||typeof d!="object")return null;if(Array.isArray(d.enum)){const{enumValues:u,nullable:p}=ac(d.enum);s.push(...u),p&&(i=!0);continue}if("const"in d){if(d.const==null){i=!0;continue}s.push(d.const);continue}if(Qe(d)==="null"){i=!0;continue}a.push(d)}if(s.length>0&&a.length===0){const d=[];for(const u of s)d.some(p=>Object.is(p,u))||d.push(u);return{schema:{...e,enum:d,nullable:i,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(a.length===1){const d=fn(a[0],t);return d.schema&&(d.schema.nullable=i||d.schema.nullable),d}const l=new Set(["string","number","integer","boolean"]);return a.length>0&&s.length===0&&a.every(d=>d.type&&l.has(String(d.type)))?{schema:{...e,nullable:i},unsupportedPaths:[]}:null}const La={all:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function nl(){return[{key:"env",label:o("configEnv")},{key:"update",label:o("configUpdate")},{key:"agents",label:o("configAgents")},{key:"auth",label:o("configAuth")},{key:"channels",label:o("configChannels")},{key:"messages",label:o("configMessages")},{key:"commands",label:o("configCommands")},{key:"hooks",label:o("configHooks")},{key:"skills",label:o("configSkills")},{key:"tools",label:o("configTools")},{key:"gateway",label:o("configGateway")},{key:"wizard",label:o("configWizard")},{key:"meta",label:o("configMeta")},{key:"logging",label:o("configLogging")},{key:"browser",label:o("configBrowser")},{key:"ui",label:o("configUi")},{key:"models",label:o("configModels")},{key:"bindings",label:o("configBindings")},{key:"broadcast",label:o("configBroadcast")},{key:"audio",label:o("configAudio")},{key:"session",label:o("configSession")},{key:"cron",label:o("configCron")},{key:"web",label:o("configWeb")},{key:"discovery",label:o("configDiscovery")},{key:"canvasHost",label:o("configCanvasHost")},{key:"talk",label:o("configTalk")},{key:"plugins",label:o("configPlugins")}]}const sl="__all__";function al(e){return La[e]??La.default}function vv(e,t){const n=Ba(e);return n||{label:t?.title??Oe(e),description:t?.description??""}}function bv(e){const{key:t,schema:n,uiHints:s}=e;if(!n||Qe(n)!=="object"||!n.properties)return[];const a=Object.entries(n.properties).map(([i,l])=>{const d=Ae([t,i],s),u=Ye([t,i],d?.label??l.title??Oe(i)),p=Je([t,i],d?.help??l.description??""),m=d?.order??50;return{key:i,label:u,description:p,order:m}});return a.sort((i,l)=>i.order!==l.order?i.order-l.order:i.key.localeCompare(l.key)),a}function yv(e,t){if(!e||!t)return[];const n=[];function s(a,i,l){if(a===i)return;if(typeof a!=typeof i){n.push({path:l,from:a,to:i});return}if(typeof a!="object"||a===null||i===null){a!==i&&n.push({path:l,from:a,to:i});return}if(Array.isArray(a)&&Array.isArray(i)){JSON.stringify(a)!==JSON.stringify(i)&&n.push({path:l,from:a,to:i});return}const d=a,u=i,p=new Set([...Object.keys(d),...Object.keys(u)]);for(const m of p)s(d[m],u[m],l?`${l}.${m}`:m)}return s(e,t,""),n}function ol(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function xv(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=fv(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,a=n.schema?.properties??{},i=nl().filter(E=>E.key in a),l=new Set(nl().map(E=>E.key)),d=Object.keys(a).filter(E=>!l.has(E)).map(E=>({key:E,label:E.charAt(0).toUpperCase()+E.slice(1)})),u=[...i,...d],p=e.activeSection&&n.schema&&Qe(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,m=e.activeSection?vv(e.activeSection,p):null,f=e.activeSection?bv({key:e.activeSection,schema:p,uiHints:e.uiHints}):[],h=e.formMode==="form"&&!!e.activeSection&&f.length>0,r=e.activeSubsection===sl,g=e.searchQuery||r?null:e.activeSubsection??f[0]?.key??null,y=e.formMode==="form"?yv(e.originalValue,e.formValue):[],A=e.formMode==="raw"&&e.raw!==e.originalRaw,S=e.formMode==="form"?y.length>0:A,w=!!e.formValue&&!e.loading&&!!n.schema,T=e.connected&&!e.saving&&S&&(e.formMode==="raw"?!0:w),C=e.connected&&!e.applying&&!e.updating&&S&&(e.formMode==="raw"?!0:w),M=e.connected&&!e.applying&&!e.updating;return c`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">${o("configSettingsTitle")}</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${o(t==="valid"?"configValidityValid":t==="invalid"?"configValidityInvalid":"configValidityUnknown")}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder=${o("configSearchPlaceholder")}
            .value=${e.searchQuery}
            @input=${E=>e.onSearchChange(E.target.value)}
          />
          ${e.searchQuery?c`
                <button
                  class="config-search__clear"
                  @click=${()=>e.onSearchChange("")}
                >
                  ×
                </button>
              `:v}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${La.all}</span>
            <span class="config-nav__label">${o("configAllSettings")}</span>
          </button>
          ${u.map(E=>c`
              <button
                class="config-nav__item ${e.activeSection===E.key?"active":""}"
                @click=${()=>e.onSectionChange(E.key)}
              >
                <span class="config-nav__icon"
                  >${al(E.key)}</span
                >
                <span class="config-nav__label">${E.label}</span>
              </button>
            `)}
        </nav>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${S?c`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?o("configUnsavedChanges"):y.length===1?o("configOneUnsavedChange"):`${y.length} ${o("configUnsavedChangesLabel")}`}</span
                  >
                `:c`
                    <span class="config-status muted">${o("configNoChanges")}</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?o("commonLoading"):o("commonReload")}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!T}
              @click=${e.onSave}
            >
              ${e.saving?o("commonSaving"):o("commonSave")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!C}
              @click=${e.onApply}
            >
              ${e.applying?o("configApplying"):o("configApply")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!M}
              @click=${e.onUpdate}
            >
              ${e.updating?o("configUpdating"):o("configUpdateButton")}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${S&&e.formMode==="form"?c`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >${o("configViewPrefix")}${y.length}
                    ${y.length===1?o("configPendingChange"):o("configPendingChanges")}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${y.map(E=>c`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${E.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${ol(E.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${ol(E.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:v}
        ${m&&e.formMode==="form"?c`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${al(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${m.label}
                  </div>
                  ${m.description?c`<div class="config-section-hero__desc">
                        ${m.description}
                      </div>`:v}
                </div>
              </div>
            `:v}
        ${h?c`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${g===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(sl)}
                >
                  ${o("configSubnavAll")}
                </button>
                ${f.map(E=>c`
                    <button
                      class="config-subnav__item ${g===E.key?"active":""}"
                      title=${E.description||E.label}
                      @click=${()=>e.onSubsectionChange(E.key)}
                    >
                      ${E.label}
                    </button>
                  `)}
              </div>
            `:v}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?c`
                ${e.schemaLoading?c`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>${o("configLoadingSchema")}</span>
                        </div>
                      `:gv({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:g})}
                ${s?c`
                        <div class="callout danger" style="margin-top: 12px">
                          ${o("configFormUnsafeWarning")}
                        </div>
                      `:v}
              `:c`
                <label class="field config-raw-field">
                  <span>${o("configRawJson5")}</span>
                  <textarea
                    .value=${e.raw}
                    @input=${E=>e.onRawChange(E.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?c`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:v}
      </main>
    </div>
  `}function il(e,t,n,s){const a=Object.entries(e),i=(u,p)=>{const m=Object.keys(e),f=Object.values(e);m[u]=p;const h={};m.forEach((r,g)=>{h[r]=f[g]??""}),n(h)},l=(u,p)=>{const m=Object.keys(e),f=[...Object.values(e)];f[u]=p;const h={};m.forEach((r,g)=>{h[r]=f[g]??""}),n(h)},d=u=>{const p=Object.keys(e).filter((h,r)=>r!==u),m=Object.values(e).filter((h,r)=>r!==u),f={};p.forEach((h,r)=>{f[h]=m[r]??""}),n(f)};return c`
    ${a.length===0?c`
          <p class="env-vars__empty">${o("envVarsEmpty")}</p>
          <button class="btn btn--secondary" ?disabled=${!t} @click=${s}>
            ${o("envVarsAdd")}
          </button>
        `:c`
          <table class="env-vars__table">
            <thead>
              <tr>
                <th>${o("envVarsKey")}</th>
                <th>${o("envVarsValue")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${a.map(([u,p],m)=>c`
                  <tr>
                    <td>
                      <input
                        class="env-vars__input"
                        type="text"
                        .value=${u}
                        placeholder=${o("envVarsKeyPlaceholder")}
                        ?disabled=${!t}
                        @input=${f=>{const h=f.target;i(m,h.value)}}
                      />
                    </td>
                    <td>
                      <input
                        class="env-vars__input"
                        type="text"
                        .value=${p}
                        placeholder=${o("envVarsValuePlaceholder")}
                        ?disabled=${!t}
                        @input=${f=>{const h=f.target;l(m,h.value)}}
                      />
                    </td>
                    <td>
                      <button
                        class="btn btn--ghost env-vars__delete"
                        ?disabled=${!t}
                        @click=${()=>d(m)}
                        title=${o("envVarsDelete")}
                      >
                        ${o("envVarsDelete")}
                      </button>
                    </td>
                  </tr>
                `)}
            </tbody>
          </table>
          <button class="btn btn--secondary env-vars__add" ?disabled=${!t} @click=${s}>
            ${o("envVarsAdd")}
          </button>
        `}
  `}function $v(e){const{vars:t,modelEnv:n,shellEnv:s,dirty:a,loading:i,saving:l,connected:d,onVarsChange:u,onModelEnvChange:p,onShellEnvChange:m,onSave:f,onReload:h}=e,r=d&&a&&!l&&!i,g=()=>{u({...t,"":""})},y=Object.entries(n??{});return c`
    <div class="env-vars">
      <div class="env-vars__toolbar">
        <button
          class="btn btn--secondary"
          ?disabled=${i||!d}
          @click=${h}
          title=${o("overviewRefresh")}
        >
          ${i?"…":o("overviewRefresh")}
        </button>
        <button
          class="btn btn--primary"
          ?disabled=${!r}
          @click=${f}
          title=${o("envVarsSave")}
        >
          ${l?"…":o("envVarsSave")}
        </button>
      </div>
      ${a?c`<p class="env-vars__dirty">${o("configUnsavedChanges")}</p>`:v}

      <div class="env-vars__sections">
        <section class="env-vars__section card" style="margin-bottom: 16px;">
          <h3 class="card-title" style="margin-bottom: 8px;">${o("envVarsSection")}</h3>
          <p class="muted" style="font-size: 12px; margin-bottom: 12px;">${o("configEnvVarsDesc")}</p>
          <div class="env-vars__list">
            ${il(t,d,u,g)}
          </div>
        </section>

        <section class="env-vars__section card" style="margin-bottom: 16px;">
          <h3 class="card-title" style="margin-bottom: 8px;">${o("envModelEnvSection")}</h3>
          <p class="muted" style="font-size: 12px; margin-bottom: 12px;">${o("envVarsKeyPlaceholder")} = ${o("envVarsValuePlaceholder")}，按 provider/modelId 分组</p>
          <div class="env-vars__list">
            ${y.length===0?c`<p class="env-vars__empty">${o("envVarsEmpty")}</p>`:c`
                  ${y.map(([A,S])=>c`
                      <div style="margin-bottom: 16px; padding: 12px; border: 1px solid var(--border-color, #eee); border-radius: 8px;">
                        <div style="font-weight: 500; margin-bottom: 8px;"><code>${A}</code></div>
                        ${il(S??{},d,w=>{const T={...n};T[A]=w,p(T)},()=>{const w={...n};w[A]={...w[A]??{},"":""},p(w)})}
                        <button
                          class="btn btn--ghost btn--sm"
                          style="margin-top: 8px;"
                          ?disabled=${!d}
                          @click=${()=>{const w={...n};delete w[A],p(w)}}
                        >
                          ${o("commonDelete")} ${A}
                        </button>
                      </div>
                    `)}
                  <button
                    class="btn btn--secondary"
                    ?disabled=${!d}
                    @click=${()=>{const A=prompt("provider/modelId (e.g. ollama/llama3.3):")?.trim();A&&p({...n,[A]:{}})}}
                  >
                    + ${o("envVarsAdd")} modelEnv
                  </button>
                `}
          </div>
        </section>

        <section class="env-vars__section card" style="margin-bottom: 16px;">
          <h3 class="card-title" style="margin-bottom: 8px;">${o("envShellEnvSection")}</h3>
          <p class="muted" style="font-size: 12px; margin-bottom: 12px;">Shell 环境导入配置</p>
          <div class="config-form">
            <div class="field">
              <span>Enabled</span>
              <input
                type="checkbox"
                ?checked=${s?.enabled??!1}
                ?disabled=${!d}
                @change=${A=>{const S=A.target.checked;m({...s??{},enabled:S})}}
              />
            </div>
            <div class="field">
              <span>Timeout (ms)</span>
              <input
                type="number"
                .value=${String(s?.timeoutMs??"")}
                placeholder="e.g. 5000"
                ?disabled=${!d}
                @input=${A=>{const S=A.target.value,w=S?parseInt(S,10):void 0;m({...s??{},timeoutMs:w})}}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  `}function wv(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(a=>s.has(a)?!1:(s.add(a),!0))}function kv(e,t){if(t==="last")return o("cronLast");const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Sv(e){const t=wv(e);(e.runsJobId==null?void 0:e.jobs.find(a=>a.id===e.runsJobId))?.name??e.runsJobId;const s=e.runs.toSorted((a,i)=>i.ts-a.ts);return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${o("cronScheduler")}</div>
        <div class="card-sub">${o("cronSchedulerSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${o("cronEnabled")}</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?o("commonYes"):o("commonNo"):o("commonNA")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${o("cronJobs")}</div>
            <div class="stat-value">${e.status?.jobs??o("commonNA")}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${o("overviewCronNext")}</div>
            <div class="stat-value">${uo(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonRefreshing"):o("commonRefresh")}
          </button>
          ${e.error?c`<span class="muted">${e.error}</span>`:v}
        </div>
      </div>

      <div class="card">
        <div class="card-title">${o("cronNewJob")}</div>
        <div class="card-sub">${o("cronNewJobSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${o("cronName")}</span>
            <input
              .value=${e.form.name}
              @input=${a=>e.onFormChange({name:a.target.value})}
            />
          </label>
          <label class="field">
            <span>${o("cronDescription")}</span>
            <input
              .value=${e.form.description}
              @input=${a=>e.onFormChange({description:a.target.value})}
            />
          </label>
          <label class="field">
            <span>${o("cronAgentId")}</span>
            <input
              .value=${e.form.agentId}
              @input=${a=>e.onFormChange({agentId:a.target.value})}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>${o("cronEnabled")}</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${a=>e.onFormChange({enabled:a.target.checked})}
            />
          </label>
          <label class="field">
            <span>${o("cronSchedule")}</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${a=>e.onFormChange({scheduleKind:a.target.value})}
            >
              <option value="every">${o("cronEvery")}</option>
              <option value="at">${o("cronAt")}</option>
              <option value="cron">${o("cronCron")}</option>
            </select>
          </label>
        </div>
        ${Av(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>${o("cronSession")}</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${a=>e.onFormChange({sessionTarget:a.target.value})}
            >
              <option value="main">${o("cronMain")}</option>
              <option value="isolated">${o("cronIsolated")}</option>
            </select>
          </label>
          <label class="field">
            <span>${o("cronWakeMode")}</span>
            <select
              .value=${e.form.wakeMode}
              @change=${a=>e.onFormChange({wakeMode:a.target.value})}
            >
              <option value="next-heartbeat">${o("cronNextHeartbeat")}</option>
              <option value="now">${o("cronNow")}</option>
            </select>
          </label>
          <label class="field">
            <span>${o("cronPayload")}</span>
            <select
              .value=${e.form.payloadKind}
              @change=${a=>e.onFormChange({payloadKind:a.target.value})}
            >
              <option value="systemEvent">${o("cronSystemEvent")}</option>
              <option value="agentTurn">${o("cronAgentTurn")}</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?o("cronSystemText"):o("cronAgentMessage")}${e.form.payloadKind==="agentTurn"?c`<span style="color: var(--danger-color);"> *</span>`:v}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${a=>e.onFormChange({payloadText:a.target.value})}
            rows="4"
            ?required=${e.form.payloadKind==="agentTurn"}
          ></textarea>
        </label>
        ${e.form.payloadKind==="agentTurn"?c`
                <div class="form-grid" style="margin-top: 12px;">
                  <label class="field">
                    <span>${o("cronDelivery")}</span>
                    <select
                      .value=${e.form.deliveryMode}
                      @change=${a=>e.onFormChange({deliveryMode:a.target.value})}
                    >
                      <option value="announce">${o("cronAnnounceSummary")}</option>
                      <option value="none">${o("cronNoneInternal")}</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>${o("cronTimeoutSeconds")}</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${a=>e.onFormChange({timeoutSeconds:a.target.value})}
                    />
                  </label>
                  ${e.form.deliveryMode==="announce"?c`
                          <label class="field">
                            <span>${o("cronChannel")}</span>
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${a=>e.onFormChange({deliveryChannel:a.target.value})}
                            >
                              ${t.map(a=>c`<option value=${a}>
                                    ${kv(e,a)}
                                  </option>`)}
                            </select>
                          </label>
                          <label class="field">
                            <span>${o("cronTo")}</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${a=>e.onFormChange({deliveryTo:a.target.value})}
                              placeholder="+1555… or chat id"
                            />
                          </label>
                        `:v}
                </div>
              `:v}
        <div class="row" style="margin-top: 14px;">
          <button
            class="btn primary"
            ?disabled=${e.busy||e.form.payloadKind==="agentTurn"&&!e.form.payloadText.trim()}
            @click=${e.onAdd}
          >
            ${e.busy?o("commonSaving"):o("cronAddJob")}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${o("cronJobsTitle")}</div>
      <div class="card-sub">${o("cronJobsSub")}</div>
      ${e.jobs.length===0?c`
              <div class="muted" style="margin-top: 12px">${o("cronNoJobsYet")}</div>
            `:c`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(a=>Cv(a,e))}
            </div>
          `}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${o("cronRunHistory")}</div>
      <div class="card-sub">${o("cronRunHistorySub")} ${e.runsJobId??o("cronSelectJob")}.</div>
      ${e.runsJobId==null?c`
              <div class="muted" style="margin-top: 12px">${o("cronSelectJobToInspect")}</div>
            `:s.length===0?c`
                <div class="muted" style="margin-top: 12px">${o("cronNoRunsYet")}</div>
              `:c`
              <div class="list" style="margin-top: 12px;">
                ${s.map(a=>Ev(a,e.basePath))}
              </div>
            `}
    </section>
  `}function Av(e){const t=e.form;return t.scheduleKind==="at"?c`
      <label class="field" style="margin-top: 12px;">
        <span>${o("cronRunAt")}</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?c`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>${o("cronEvery")}</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>${o("cronUnit")}</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">${o("cronMinutes")}</option>
            <option value="hours">${o("cronHours")}</option>
            <option value="days">${o("cronDays")}</option>
          </select>
        </label>
      </div>
    `:c`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>${o("cronExpression")}</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function Cv(e,t){const s=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`;return c`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${Er(e)}</div>
        ${Tv(e)}
        ${e.agentId?c`<div class="muted cron-job-agent">Agent: ${e.agentId}</div>`:v}
      </div>
      <div class="list-meta">
        ${Mv(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?"enabled":"disabled"}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onLoadRuns(e.id)}}
          >
            History
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function Tv(e){if(e.payload.kind==="systemEvent")return c`<div class="cron-job-detail">
      <span class="cron-job-detail-label">System</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return c`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">Prompt</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?c`<div class="cron-job-detail">
            <span class="cron-job-detail-label">Delivery</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:v}
  `}function ll(e){return typeof e!="number"||!Number.isFinite(e)?"n/a":Q(e)}function Mv(e){const t=e.state?.lastStatus??"n/a",n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=e.state?.nextRunAtMs,a=e.state?.lastRunAtMs;return c`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Status</span>
        <span class=${`cron-job-status-pill ${n}`}>${t}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Next</span>
        <span class="cron-job-state-value" title=${xt(s)}>
          ${ll(s)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Last</span>
        <span class="cron-job-state-value" title=${xt(a)}>
          ${ll(a)}
        </span>
      </div>
    </div>
  `}function Ev(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${Sn("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${xt(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${n?c`<div><a class="session-link" href=${n}>Open run chat</a></div>`:v}
        ${e.error?c`<div class="muted">${e.error}</div>`:v}
      </div>
    </div>
  `}function Pv(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,a=n?.warn??0,i=n?.info??0,l=s>0?"danger":a>0?"warn":"success",d=s>0?`${s} ${o("debugCritical")}`:a>0?`${a} ${o("debugWarnings")}`:o("debugNoCritical");return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">${o("debugSnapshots")}</div>
            <div class="card-sub">${o("debugSnapshotsSub")}</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonRefreshing"):o("commonRefresh")}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">${o("debugStatus")}</div>
            ${n?c`<div class="callout ${l}" style="margin-top: 8px;">
                  ${o("debugSecurityAudit")}: ${d}${i>0?` · ${i} ${o("debugInfo")}`:""}. ${o("debugSecurityAuditDetails")}
                </div>`:v}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${o("debugHealth")}</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${o("debugLastHeartbeat")}</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${o("debugManualRpc")}</div>
        <div class="card-sub">${o("debugManualRpcSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${o("debugMethod")}</span>
            <input
              .value=${e.callMethod}
              @input=${u=>e.onCallMethodChange(u.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>${o("debugParams")} (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${u=>e.onCallParamsChange(u.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>${o("debugCall")}</button>
        </div>
        ${e.callError?c`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:v}
        ${e.callResult?c`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:v}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${o("debugModels")}</div>
      <div class="card-sub">${o("debugModelsSub")}</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${o("debugEventLog")}</div>
      <div class="card-sub">${o("debugEventLogSub")}</div>
      ${e.eventLog.length===0?c`
              <div class="muted" style="margin-top: 12px">${o("debugNoEvents")}</div>
            `:c`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(u=>c`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${u.event}</div>
                      <div class="list-sub">${new Date(u.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${Np(u.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function Dv(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function ct(e,t){return t?c`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:v}function Lv(e){const t=e.execApprovalQueue[0];if(!t)return v;const n=t.request,s=t.expiresAtMs-Date.now(),a=s>0?`expires in ${Dv(s)}`:"expired",i=e.execApprovalQueue.length;return c`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${a}</div>
          </div>
          ${i>1?c`<div class="exec-approval-queue">${i} pending</div>`:v}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${ct("Host",n.host)}
          ${ct("Agent",n.agentId)}
          ${ct("Session",n.sessionKey)}
          ${ct("CWD",n.cwd)}
          ${ct("Resolved",n.resolvedPath)}
          ${ct("Security",n.security)}
          ${ct("Ask",n.ask)}
        </div>
        ${e.execApprovalError?c`<div class="exec-approval-error">${e.execApprovalError}</div>`:v}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function Iv(e){const{pendingGatewayUrl:t}=e;return t?c`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:v}function _v(e){return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${o("instancesTitle")}</div>
          <div class="card-sub">${o("instancesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?o("commonLoading"):o("commonRefresh")}
        </button>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      ${e.statusMessage?c`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?c`
                <div class="muted">${o("instancesNoReported")}</div>
              `:e.entries.map(t=>Rv(t))}
      </div>
    </section>
  `}function Rv(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}s ago`:"n/a",n=e.mode??"unknown",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],a=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],i=a.length>0?a.length>3?`${a.length} scopes`:`scopes: ${a.join(", ")}`:null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??o("instancesUnknownHost")}</div>
        <div class="list-sub">${Ip(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(l=>c`<span class="chip">${l}</span>`)}
          ${i?c`<span class="chip">${i}</span>`:v}
          ${e.platform?c`<span class="chip">${e.platform}</span>`:v}
          ${e.deviceFamily?c`<span class="chip">${e.deviceFamily}</span>`:v}
          ${e.modelIdentifier?c`<span class="chip">${e.modelIdentifier}</span>`:v}
          ${e.version?c`<span class="chip">${e.version}</span>`:v}
        </div>
      </div>
      <div class="list-meta">
        <div>${_p(e)}</div>
        <div class="muted">${o("instancesLastInput")} ${t}</div>
        <div class="muted">${o("instancesReason")} ${e.reason??""}</div>
      </div>
    </div>
  `}const rl=["trace","debug","info","warn","error","fatal"];function Nv(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Fv(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Uv(e){const t=e.filterText.trim().toLowerCase(),n=rl.some(i=>!e.levelFilters[i]),s=e.entries.filter(i=>i.level&&!e.levelFilters[i.level]?!1:Fv(i,t)),a=t||n?"filtered":"visible";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${o("logsTitle")}</div>
          <div class="card-sub">${o("logsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonLoading"):o("commonRefresh")}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(i=>i.raw),a)}
          >
            ${o(a==="filtered"?"logsExportFiltered":"logsExportVisible")}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${i=>e.onFilterTextChange(i.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${i=>e.onToggleAutoFollow(i.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${rl.map(i=>c`
            <label class="chip log-chip ${i}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[i]}
                @change=${l=>e.onLevelToggle(i,l.target.checked)}
              />
              <span>${i}</span>
            </label>
          `)}
      </div>

      ${e.file?c`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:v}
      ${e.truncated?c`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:v}
      ${e.error?c`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:v}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?c`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(i=>c`
                <div class="log-row">
                  <div class="log-time mono">${Nv(i.time)}</div>
                  <div class="log-level ${i.level??""}">${i.level??""}</div>
                  <div class="log-subsystem mono">${i.subsystem??""}</div>
                  <div class="log-message mono">${i.message??i.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Ov(e){const t=qv(e),n=Yv(e);return c`
    ${Xv(n)}
    ${Zv(t)}
    ${Bv(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${o("nodesTitle")}</div>
          <div class="card-sub">${o("nodesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?o("commonLoading"):o("commonRefresh")}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?c`
                <div class="muted">${o("nodesNoFound")}</div>
              `:e.nodes.map(s=>cb(s))}
      </div>
    </section>
  `}function Bv(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${o("nodesDevices")}</div>
          <div class="card-sub">${o("nodesDevicesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?o("commonLoading"):o("commonRefresh")}
        </button>
      </div>
      ${e.devicesError?c`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?c`
              <div class="muted" style="margin-bottom: 8px;">${o("nodesPending")}</div>
              ${n.map(a=>Hv(a,e))}
            `:v}
        ${s.length>0?c`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">${o("nodesPaired")}</div>
              ${s.map(a=>Kv(a,e))}
            `:v}
        ${n.length===0&&s.length===0?c`
                <div class="muted">${o("nodesNoPairedDevices")}</div>
              `:v}
      </div>
    </section>
  `}function Hv(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?Q(e.ts):o("commonNA"),a=e.role?.trim()?`${o("nodesRoleLabel")}${e.role}`:o("nodesRoleNone"),i=e.isRepair?o("nodesRepairSuffix"):"",l=e.remoteIp?` · ${e.remoteIp}`:"";return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${l}</div>
        <div class="muted" style="margin-top: 6px;">
          ${a} · ${o("nodesRequested")}${s}${i}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            ${o("nodesApprove")}
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            ${o("nodesReject")}
          </button>
        </div>
      </div>
    </div>
  `}function Kv(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",a=`${o("nodesRolesLabel")}${ca(e.roles)}`,i=`${o("nodesScopesLabel")}${ca(e.scopes)}`,l=Array.isArray(e.tokens)?e.tokens:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${a} · ${i}</div>
        ${l.length===0?c`
                <div class="muted" style="margin-top: 6px">${o("nodesTokensNone")}</div>
              `:c`
              <div class="muted" style="margin-top: 10px;">${o("nodesTokens")}</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${l.map(d=>zv(e.deviceId,d,t))}
              </div>
            `}
      </div>
    </div>
  `}function zv(e,t,n){const s=t.revokedAtMs?o("nodesTokenRevoked"):o("nodesTokenActive"),a=`${o("nodesScopesLabel")}${ca(t.scopes)}`,i=Q(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return c`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${a} · ${i}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          ${o("nodesRotate")}
        </button>
        ${t.revokedAtMs?v:c`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                ${o("nodesRevoke")}
              </button>
            `}
      </div>
    </div>
  `}const Xe="__defaults__",cl=[{value:"deny",labelKey:"nodesSecurityDeny"},{value:"allowlist",labelKey:"nodesSecurityAllowlist"},{value:"full",labelKey:"nodesSecurityFull"}],jv=[{value:"off",labelKey:"nodesAskOff"},{value:"on-miss",labelKey:"nodesAskOnMiss"},{value:"always",labelKey:"nodesAskAlways"}];function qv(e){const t=e.configForm,n=ib(e.nodes),{defaultBinding:s,agents:a}=rb(t),i=!!t,l=e.configSaving||e.configFormMode==="raw";return{ready:i,disabled:l,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:a,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function dl(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function Wv(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function Vv(e){const t=e?.defaults??{};return{security:dl(t.security),ask:Wv(t.ask),askFallback:dl(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function Gv(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(a=>{if(!a||typeof a!="object")return;const i=a,l=typeof i.id=="string"?i.id.trim():"";if(!l)return;const d=typeof i.name=="string"?i.name.trim():void 0,u=i.default===!0;s.push({id:l,name:d||void 0,isDefault:u})}),s}function Qv(e,t){const n=Gv(e),s=Object.keys(t?.agents??{}),a=new Map;n.forEach(l=>a.set(l.id,l)),s.forEach(l=>{a.has(l)||a.set(l,{id:l})});const i=Array.from(a.values());return i.length===0&&i.push({id:"main",isDefault:!0}),i.sort((l,d)=>{if(l.isDefault&&!d.isDefault)return-1;if(!l.isDefault&&d.isDefault)return 1;const u=l.name?.trim()?l.name:l.id,p=d.name?.trim()?d.name:d.id;return u.localeCompare(p)}),i}function Jv(e,t){return e===Xe?Xe:e&&t.some(n=>n.id===e)?e:Xe}function Yv(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=Vv(t),a=Qv(e.configForm,t),i=lb(e.nodes),l=e.execApprovalsTarget;let d=l==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;l==="node"&&d&&!i.some(f=>f.id===d)&&(d=null);const u=Jv(e.execApprovalsSelectedAgent,a),p=u!==Xe?(t?.agents??{})[u]??null:null,m=Array.isArray(p?.allowlist)?p.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:u,selectedAgent:p,agents:a,allowlist:m,target:l,targetNodeId:d,targetNodes:i,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function Zv(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${o("nodesBindingTitle")}</div>
          <div class="card-sub">
            ${o("nodesBindingSub")}<span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?o("commonSaving"):o("commonSave")}
        </button>
      </div>

      ${e.formMode==="raw"?c`
              <div class="callout warn" style="margin-top: 12px">
                ${o("nodesBindingFormModeHint")}
              </div>
            `:v}

      ${e.ready?c`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">${o("nodesDefaultBinding")}</div>
                  <div class="list-sub">${o("nodesDefaultBindingSub")}</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>${o("nodesNodeLabel")}</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const i=s.target.value.trim();e.onBindDefault(i||null)}}
                    >
                      <option value="" ?selected=${n===""}>${o("nodesAnyNode")}</option>
                      ${e.nodes.map(s=>c`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?v:c`
                          <div class="muted">${o("nodesNoNodesSystemRun")}</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?c`
                      <div class="muted">${o("nodesNoAgentsFound")}</div>
                    `:e.agents.map(s=>ob(s,e))}
            </div>
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${o("nodesLoadConfigHint")}</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?o("commonLoading"):o("nodesLoadConfig")}
            </button>
          </div>`}
    </section>
  `}function Xv(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${o("nodesExecApprovalsTitle")}</div>
          <div class="card-sub">
            ${o("nodesExecApprovalsSub")}
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?o("commonSaving"):o("commonSave")}
        </button>
      </div>

      ${eb(e)}

      ${t?c`
            ${tb(e)}
            ${nb(e)}
            ${e.selectedScope===Xe?v:sb(e)}
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${o("nodesLoadExecApprovalsHint")}</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?o("commonLoading"):o("nodesLoadApprovals")}
            </button>
          </div>`}
    </section>
  `}function eb(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return c`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${o("nodesTarget")}</div>
          <div class="list-sub">
            ${o("nodesTargetSub")}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${o("nodesHost")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const l=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||l)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>${o("nodesHostGateway")}</option>
              <option value="node" ?selected=${e.target==="node"}>${o("nodesHostNode")}</option>
            </select>
          </label>
          ${e.target==="node"?c`
                <label class="field">
                  <span>${o("nodesNodeLabel")}</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const i=s.target.value.trim();e.onSelectTarget("node",i||null)}}
                  >
                    <option value="" ?selected=${n===""}>${o("nodesSelectNode")}</option>
                    ${e.targetNodes.map(s=>c`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:v}
        </div>
      </div>
      ${e.target==="node"&&!t?c`
              <div class="muted">${o("nodesNoNodesExecApprovals")}</div>
            `:v}
    </div>
  `}function tb(e){return c`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">${o("nodesScope")}</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===Xe?"active":""}"
          @click=${()=>e.onSelectScope(Xe)}
        >
          ${o("nodesDefaults")}
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return c`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function nb(e){const t=e.selectedScope===Xe,n=e.defaults,s=e.selectedAgent??{},a=t?["defaults"]:["agents",e.selectedScope],i=typeof s.security=="string"?s.security:void 0,l=typeof s.ask=="string"?s.ask:void 0,d=typeof s.askFallback=="string"?s.askFallback:void 0,u=t?n.security:i??"__default__",p=t?n.ask:l??"__default__",m=t?n.askFallback:d??"__default__",f=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,h=f??n.autoAllowSkills,r=f==null;return c`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${o("nodesSecurity")}</div>
          <div class="list-sub">
            ${t?o("nodesSecurityDefaultSub"):`${o("nodesSecurityAgentSubPrefix")}${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${o("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${g=>{const A=g.target.value;!t&&A==="__default__"?e.onRemove([...a,"security"]):e.onPatch([...a,"security"],A)}}
            >
              ${t?v:c`<option value="__default__" ?selected=${u==="__default__"}>
                    ${o("nodesUseDefaultPrefix")}${n.security})
                  </option>`}
              ${cl.map(g=>c`<option
                    value=${g.value}
                    ?selected=${u===g.value}
                  >
                    ${o(g.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${o("nodesAsk")}</div>
          <div class="list-sub">
            ${t?o("nodesAskDefaultSub"):`${o("nodesAskAgentSubPrefix")}${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${o("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${g=>{const A=g.target.value;!t&&A==="__default__"?e.onRemove([...a,"ask"]):e.onPatch([...a,"ask"],A)}}
            >
              ${t?v:c`<option value="__default__" ?selected=${p==="__default__"}>
                    ${o("nodesUseDefaultPrefix")}${n.ask})
                  </option>`}
              ${jv.map(g=>c`<option
                    value=${g.value}
                    ?selected=${p===g.value}
                  >
                    ${o(g.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${o("nodesAskFallback")}</div>
          <div class="list-sub">
            ${t?o("nodesAskFallbackDefaultSub"):`${o("nodesAskFallbackAgentSubPrefix")}${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${o("nodesFallback")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${g=>{const A=g.target.value;!t&&A==="__default__"?e.onRemove([...a,"askFallback"]):e.onPatch([...a,"askFallback"],A)}}
            >
              ${t?v:c`<option value="__default__" ?selected=${m==="__default__"}>
                    ${o("nodesUseDefaultPrefix")}${n.askFallback})
                  </option>`}
              ${cl.map(g=>c`<option
                    value=${g.value}
                    ?selected=${m===g.value}
                  >
                    ${o(g.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${o("nodesAutoAllowSkills")}</div>
          <div class="list-sub">
            ${t?o("nodesAutoAllowSkillsDefaultSub"):r?`${o("nodesAutoAllowSkillsUsingDefault")}${n.autoAllowSkills?"on":"off"}).`:`${o("nodesAutoAllowSkillsOverride")}${h?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${o("nodesEnabled")}</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${h}
              @change=${g=>{const y=g.target;e.onPatch([...a,"autoAllowSkills"],y.checked)}}
            />
          </label>
          ${!t&&!r?c`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...a,"autoAllowSkills"])}
              >
                ${o("nodesUseDefaultButton")}
              </button>`:v}
        </div>
      </div>
    </div>
  `}function sb(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return c`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">${o("nodesAllowlist")}</div>
        <div class="card-sub">${o("nodesAllowlistSub")}</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        ${o("nodesAddPattern")}
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?c`
              <div class="muted">${o("nodesNoAllowlistEntries")}</div>
            `:n.map((s,a)=>ab(e,s,a))}
    </div>
  `}function ab(e,t,n){const s=t.lastUsedAt?Q(t.lastUsedAt):o("nodesNever"),a=t.lastUsedCommand?Qn(t.lastUsedCommand,120):null,i=t.lastResolvedPath?Qn(t.lastResolvedPath,120):null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:o("nodesNewPattern")}</div>
        <div class="list-sub">${o("nodesLastUsedPrefix")}${s}</div>
        ${a?c`<div class="list-sub mono">${a}</div>`:v}
        ${i?c`<div class="list-sub mono">${i}</div>`:v}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${o("nodesPattern")}</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${l=>{const d=l.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],d.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          ${o("nodesRemove")}
        </button>
      </div>
    </div>
  `}function ob(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,a=t.nodes.length>0;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?o("nodesDefaultAgent"):o("nodesAgent")} ·
          ${n==="__default__"?`${o("nodesUsesDefault")}${t.defaultBinding??"any"})`:`${o("nodesOverride")}${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${o("nodesBinding")}</span>
          <select
            ?disabled=${t.disabled||!a}
            @change=${i=>{const d=i.target.value.trim();t.onBindAgent(e.index,d==="__default__"?null:d)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              ${o("nodesUseDefaultButton")}
            </option>
            ${t.nodes.map(i=>c`<option
                  value=${i.id}
                  ?selected=${n===i.id}
                >
                  ${i.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function ib(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(d=>String(d)==="system.run"))continue;const i=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!i)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():i;t.push({id:i,label:l===i?i:`${l} · ${i}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function lb(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(d=>String(d)==="system.execApprovals.get"||String(d)==="system.execApprovals.set"))continue;const i=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!i)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():i;t.push({id:i,label:l===i?i:`${l} · ${i}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function rb(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},a=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,i=e.agents??{},l=Array.isArray(i.list)?i.list:[];if(l.length===0)return{defaultBinding:a,agents:[t]};const d=[];return l.forEach((u,p)=>{if(!u||typeof u!="object")return;const m=u,f=typeof m.id=="string"?m.id.trim():"";if(!f)return;const h=typeof m.name=="string"?m.name.trim():void 0,r=m.default===!0,y=(m.tools??{}).exec??{},A=typeof y.node=="string"&&y.node.trim()?y.node.trim():null;d.push({id:f,name:h||void 0,index:p,isDefault:r,binding:A})}),d.length===0&&d.push(t),{defaultBinding:a,agents:d}}function cb(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),a=Array.isArray(e.caps)?e.caps:[],i=Array.isArray(e.commands)?e.commands:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${o(n?"nodesChipPaired":"nodesChipUnpaired")}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${o(t?"nodesConnected":"nodesOffline")}
          </span>
          ${a.slice(0,12).map(l=>c`<span class="chip">${String(l)}</span>`)}
          ${i.slice(0,8).map(l=>c`<span class="chip">${String(l)}</span>`)}
        </div>
      </div>
    </div>
  `}function db(e){const t=e.hello?.snapshot,n=t?.uptimeMs?Fl(t.uptimeMs):"n/a",s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",a=(()=>{if(e.connected||!e.lastError)return null;const l=e.lastError.toLowerCase();if(!(l.includes("unauthorized")||l.includes("connect failed")))return null;const u=!!e.settings.token.trim(),p=!!e.password.trim();return!u&&!p?c`
        <div class="muted" style="margin-top: 8px">
          This gateway requires auth. Add a token or password, then click Connect.
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → open the Control UI<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:c`
      <div class="muted" style="margin-top: 8px">
        Auth failed. Update the token or password in Control UI settings, then click Connect.
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),i=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const d=e.lastError.toLowerCase();return!d.includes("secure context")&&!d.includes("device identity required")?null:c`
      <div class="muted" style="margin-top: 8px">
        This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open
        <span class="mono">http://127.0.0.1:18900</span> on the gateway host.
        <div style="margin-top: 6px">
          If you must stay on HTTP, set
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span> (token-only).
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})();return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${o("overviewGatewayAccess")}</div>
        <div class="card-sub">${o("overviewGatewayAccessSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${o("overviewWebSocketUrl")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${l=>{const d=l.target.value;e.onSettingsChange({...e.settings,gatewayUrl:d})}}
              placeholder="ws://100.x.y.z:18900"
            />
          </label>
          <label class="field">
            <span>${o("overviewGatewayToken")}</span>
            <input
              .value=${e.settings.token}
              @input=${l=>{const d=l.target.value;e.onSettingsChange({...e.settings,token:d})}}
              placeholder="OPENCLAW_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>${o("overviewPassword")}</span>
            <input
              type="password"
              .value=${e.password}
              @input=${l=>{const d=l.target.value;e.onPasswordChange(d)}}
              placeholder="system or shared password"
            />
          </label>
          <label class="field">
            <span>${o("overviewDefaultSessionKey")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${l=>{const d=l.target.value;e.onSessionKeyChange(d)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${o("overviewConnect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${o("overviewRefresh")}</button>
          <span class="muted">${o("overviewConnectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${o("overviewSnapshot")}</div>
        <div class="card-sub">${o("overviewSnapshotSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${o("overviewStatus")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?o("overviewConnected"):o("overviewDisconnected")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${o("overviewUptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${o("overviewTickInterval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${o("overviewLastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?Q(e.lastChannelsRefresh):"n/a"}
            </div>
          </div>
        </div>
        ${e.lastError?c`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${a??""}
              ${i??""}
            </div>`:c`
                <div class="callout" style="margin-top: 14px">
                  ${o("overviewChannelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${o("overviewInstances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${o("overviewInstancesSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${o("overviewSessions")}</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">${o("overviewSessionsSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${o("overviewCron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"n/a":e.cronEnabled?o("overviewCronEnabled"):o("overviewCronDisabled")}
        </div>
        <div class="muted">${o("overviewCronNext")} ${uo(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${o("overviewNotes")}</div>
      <div class="card-sub">${o("overviewNotesSub")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${o("overviewNoteTailscale")}</div>
          <div class="muted">${o("overviewNoteTailscaleSub")}</div>
        </div>
        <div>
          <div class="note-title">${o("overviewNoteSessionHygiene")}</div>
          <div class="muted">${o("overviewNoteSessionHygieneSub")}</div>
        </div>
        <div>
          <div class="note-title">${o("overviewNoteCron")}</div>
          <div class="muted">${o("overviewNoteCronSub")}</div>
        </div>
      </div>
    </section>
  `}const ub=["","off","minimal","low","medium","high","xhigh"],gb=["","off","on"];function pb(){return[{value:"",label:o("commonInherit")},{value:"off",label:o("commonOffExplicit")},{value:"on",label:"on"}]}const ul=["","off","on","stream"];function mb(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function oc(e){return mb(e)==="zai"}function fb(e){return oc(e)?gb:ub}function gl(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function hb(e,t){return!t||!e||e==="off"?e:"on"}function vb(e,t){return e?t&&e==="on"?"low":e:null}function bb(e){const t=e.result?.sessions??[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${o("sessionsTitle")}</div>
          <div class="card-sub">${o("sessionsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonLoading"):o("commonRefresh")}
          </button>
          <button
            class="btn secondary"
            ?disabled=${e.loading||t.length===0}
            @click=${e.onBulkModeToggle}
          >
            ${e.bulkMode?"完成":"批量删除"}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>${o("sessionsActiveWithin")}</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>${o("sessionsLimit")}</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${o("sessionsIncludeGlobal")}</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${o("sessionsIncludeUnknown")}</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.bulkMode&&t.length>0?c`
              <div class="row" style="margin-top: 12px; justify-content: space-between;">
                <div class="muted">已选 ${e.selectedKeys.length} 个会话</div>
                <div class="row" style="gap: 8px;">
                  <button
                    class="btn"
                    ?disabled=${e.loading}
                    @click=${()=>e.onSelectAll(t.map(n=>n.key).filter(n=>n&&n!=="agent.main.main"))}
                  >
                    全部选择
                  </button>
                  <button
                    class="btn"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${e.onClearSelection}
                  >
                    全部不选
                  </button>
                  <button
                    class="btn danger"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${()=>e.onBulkDelete(e.selectedKeys)}
                  >
                    删除已选
                  </button>
                </div>
              </div>
            `:v}

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`${o("sessionsStore")}: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          ${e.bulkMode?c`<div></div>`:v}
          <div>${o("sessionsKey")}</div>
          <div>${o("sessionsLabel")}</div>
          <div>${o("sessionsKind")}</div>
          <div>${o("sessionsUpdated")}</div>
          <div>${o("sessionsTokens")}</div>
          <div>${o("sessionsThinking")}</div>
          <div>${o("sessionsVerbose")}</div>
          <div>${o("sessionsReasoning")}</div>
          <div>${o("sessionsActions")}</div>
        </div>
        ${t.length===0?c`
                <div class="muted">${o("sessionsNoFound")}</div>
              `:t.map(n=>yb(n,e.basePath,e.onPatch,e.onDelete,e.loading,e.bulkMode,e.selectedKeys,e.onSelectionChange))}
      </div>
    </section>
  `}function yb(e,t,n,s,a,i,l,d){const u=e.updatedAt?Q(e.updatedAt):"n/a",p=e.thinkingLevel??"",m=oc(e.modelProvider),f=hb(p,m),h=gl(fb(e.modelProvider),f);e.verboseLevel;const r=e.reasoningLevel??"";gl(ul,r);const g=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,y=typeof e.label=="string"?e.label.trim():"",A=!!(g&&g!==e.key&&g!==y),S=e.kind!=="global",w=S?`${Sn("chat",t)}?session=${encodeURIComponent(e.key)}`:null,T=e.key==="agent.main.main",C=l.includes(e.key);return c`
    <div class="table-row">
      ${i?c`
              <div>
                <input
                  type="checkbox"
                  .checked=${C}
                  ?disabled=${a||T}
                  @change=${M=>d(e.key,M.target.checked)}
                />
              </div>
            `:v}
      <div class="mono session-key-cell">
        ${S?c`<a href=${w} class="session-link">${e.key}</a>`:e.key}
        ${A?c`<span class="muted session-key-display-name">${g}</span>`:v}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${a}
          placeholder=${o("commonOptional")}
          @change=${M=>{const E=M.target.value.trim();n(e.key,{label:E||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${u}</div>
      <div>${Rp(e)}</div>
      <div>
        <select
          ?disabled=${a}
          @change=${M=>{const E=M.target.value;n(e.key,{thinkingLevel:vb(E,m)})}}
        >
          ${h.map(M=>c`<option value=${M}>${M||o("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${a}
          @change=${M=>{const E=M.target.value;n(e.key,{verboseLevel:E||null})}}
        >
          ${pb().map(M=>c`<option value=${M.value}>${M.label}</option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${a}
          @change=${M=>{const E=M.target.value;n(e.key,{reasoningLevel:E||null})}}
        >
          ${ul.map(M=>c`<option value=${M}>${M||o("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${a} @click=${()=>s(e.key)}>
          ${o("commonDelete")}
        </button>
      </div>
    </div>
  `}function xb(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),i=a.match(/\r?\n\s*---\s*\r?\n?/);return i?a.slice(i.index+i[0].length).trimStart():e}function $b(){return[{id:"workspace",label:o("skillsWorkspace"),sources:["openclaw-workspace"]},{id:"built-in",label:o("skillsBuiltIn"),sources:["openclaw-bundled"]},{id:"installed",label:o("skillsInstalled"),sources:["openclaw-managed"]},{id:"extra",label:o("skillsExtra"),sources:["openclaw-extra"]}]}function wb(e){const t=$b(),n=new Map;for(const l of t)n.set(l.id,{id:l.id,label:l.label,skills:[]});const s=t.find(l=>l.id==="built-in"),a={id:"other",label:o("skillsOther"),skills:[]};for(const l of e){const d=l.bundled?s:t.find(u=>u.sources.includes(l.source));d?n.get(d.id)?.skills.push(l):a.skills.push(l)}const i=t.map(l=>n.get(l.id)).filter(l=>!!(l&&l.skills.length>0));return a.skills.length>0&&i.push(a),i}function kb(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(i=>[i.name,i.description,i.source].join(" ").toLowerCase().includes(n)):t,a=wb(s);return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${o("skillsTitle")}</div>
          <div class="card-sub">${o("skillsSub")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${o("mcpViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddClick}>
            ${o("skillsAdd")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonLoading"):o("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.addModalOpen?c`
              <div class="modal-overlay" @click=${e.onAddClose}>
                <div class="modal card" @click=${i=>i.stopPropagation()}>
                  <div class="card-title">${o("skillsAddSkill")}</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>${o("skillsUploadName")}</span>
                    <input
                      type="text"
                      .value=${e.uploadName}
                      @input=${i=>e.onUploadNameChange(i.target.value)}
                      placeholder=${o("skillsUploadNamePlaceholder")}
                      pattern="[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}"
                    />
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>${o("skillsUploadFile")}</span>
                    <input
                      type="file"
                      accept=".md,.zip"
                      @change=${i=>{const l=i.target;e.onUploadFileChange(l.files?.[0]??null)}}
                    />
                    <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                      ${o("skillsUploadFileHint")}
                    </div>
                  </div>
                  ${e.uploadError?c`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${e.uploadError}
                          </div>
                        `:v}
                  ${e.uploadTemplate?c`
                          <details class="muted" style="margin-top: 12px;">
                            <summary>Template</summary>
                            <pre
                              style="
                                margin-top: 8px;
                                padding: 12px;
                                background: var(--bg-muted, #f5f5f5);
                                border-radius: 6px;
                                overflow: auto;
                                max-height: 200px;
                                font-size: 0.85em;
                                white-space: pre-wrap;
                              "
                            >${e.uploadTemplate}</pre>
                          </details>
                        `:v}
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${e.uploadBusy} @click=${e.onAddClose}>
                      ${o("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${e.uploadBusy||!e.uploadName.trim()||!e.uploadFile}
                      @click=${e.onUploadSubmit}
                    >
                      ${e.uploadBusy?o("commonLoading"):o("skillsUploadSubmit")}
                    </button>
                  </div>
                </div>
              </div>
            `:v}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>${o("commonFilter")}</span>
          <input
            .value=${e.filter}
            @input=${i=>e.onFilterChange(i.target.value)}
            placeholder=${o("skillsSearchPlaceholder")}
          />
        </label>
        <div class="muted">${s.length} ${o("skillsShown")}</div>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${e.selectedSkillKey?(()=>{const i=t.find(l=>l.skillKey===e.selectedSkillKey);return i?Cb(i,{content:e.skillDocContent,loading:e.skillDocLoading,error:e.skillDocError,onClose:()=>e.onSkillDetailClick(null)}):v})():v}

      ${s.length===0?c`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:c`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${a.map(i=>{const l=i.id==="workspace"||i.id==="built-in";return c`
                  <details class="agent-skills-group" ?open=${!l}>
                    <summary class="agent-skills-header">
                      <span>${i.label}</span>
                      <span class="muted">${i.skills.length}</span>
                    </summary>
                    ${e.viewMode==="list"?c`
                            <div class="skills-table table" style="margin-top: 8px;">
                              <div class="skills-table-head table-head">
                                <div>${o("mcpTableName")}</div>
                                <div>${o("skillsSource")}</div>
                                <div>Status</div>
                                <div>${o("mcpTableActions")}</div>
                              </div>
                              ${i.skills.map(d=>Sb(d,e))}
                            </div>
                          `:c`
                            <div class="skills-card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin-top: 8px;">
                              ${i.skills.map(d=>Ab(d,e))}
                            </div>
                          `}
                  </details>
                `})}
            </div>
          `}
    </section>
  `}function Sb(e,t){const n=t.busyKey===e.skillKey,s=e.install.length>0&&e.missing.bins.length>0,a=e.disabled?"disabled":e.eligible?"eligible":"blocked";return c`
    <div
      class="skills-table-row table-row ${t.selectedSkillKey===e.skillKey?"list-item-selected":""}"
      style="cursor: pointer;"
      @click=${()=>t.onSkillDetailClick(e.skillKey)}
    >
      <div class="skills-table-cell">
        <div style="font-weight: 500;">${e.emoji?`${e.emoji} `:""}${e.name}</div>
        <div class="muted" style="font-size: 12px; margin-top: 2px;">${Qn(e.description,120)}</div>
      </div>
      <div class="skills-table-cell muted" style="font-size: 13px;">
        ${e.source}
      </div>
      <div class="skills-table-cell">
        <span class="chip ${e.eligible&&!e.disabled?"chip-ok":"chip-warn"}" style="font-size: 12px;">
          ${a}
        </span>
      </div>
      <div class="skills-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${i=>i.stopPropagation()}>
        ${(e.source==="openclaw-managed"||e.source==="openclaw-extra")&&t.onDelete?c`
                <button
                  class="btn btn--sm"
                  style="color: var(--danger-color, #d14343);"
                  ?disabled=${n}
                  @click=${i=>{i.stopPropagation(),confirm(o("skillsDeleteConfirm"))&&t.onDelete(e.skillKey)}}
                >
                  ${o("skillsDelete")}
                </button>
              `:v}
        <button
          class="btn btn--sm ${e.disabled?"":"btn-ok"}"
          ?disabled=${n}
          @click=${i=>{i.stopPropagation(),t.onToggle(e.skillKey,e.disabled)}}
        >
          ${e.disabled?"Enable":"Disable"}
        </button>
        ${s?c`
                <button
                  class="btn btn--sm"
                  ?disabled=${n}
                  @click=${i=>{i.stopPropagation(),t.onInstall(e.skillKey,e.name,e.install[0].id)}}
                >
                  ${n?"Installing…":e.install[0].label}
                </button>
              `:v}
      </div>
    </div>
  `}function Ab(e,t){const n=t.busyKey===e.skillKey,s=e.install.length>0&&e.missing.bins.length>0,a=e.disabled?"disabled":e.eligible?"eligible":"blocked";return c`
    <div
      class="skills-server-card ${t.selectedSkillKey===e.skillKey?"list-item-selected":""}"
      style="cursor: pointer;"
      @click=${()=>t.onSkillDetailClick(e.skillKey)}
    >
      <div class="skills-server-card__header">
        <div class="skills-server-card__icon">
          ${e.emoji?c`<span style="font-size: 20px;">${e.emoji}</span>`:c`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                </svg>
              `}
        </div>
        <div class="skills-server-card__title-row" style="min-width: 0;">
          <span class="skills-server-card__name">${e.name}</span>
          <span class="chip ${e.eligible&&!e.disabled?"chip-ok":"chip-warn"}" style="font-size: 11px;">${a}</span>
        </div>
      </div>
      <div class="skills-server-card__sub muted" style="font-size: 12px;">${Qn(e.description,80)}</div>
      <div class="skills-server-card__footer" @click=${i=>i.stopPropagation()}>
        ${(e.source==="openclaw-managed"||e.source==="openclaw-extra")&&t.onDelete?c`
                <button
                  class="btn btn--sm"
                  style="color: var(--danger-color, #d14343); padding: 4px 8px;"
                  ?disabled=${n}
                  @click=${i=>{i.stopPropagation(),confirm(o("skillsDeleteConfirm"))&&t.onDelete(e.skillKey)}}
                  title=${o("skillsDelete")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    <line x1="10" y1="11" x2="10" y2="17"/>
                    <line x1="14" y1="11" x2="14" y2="17"/>
                  </svg>
                </button>
              `:v}
        <button
          class="btn btn--sm ${e.disabled?"":"btn-ok"}"
          ?disabled=${n}
          @click=${i=>{i.stopPropagation(),t.onToggle(e.skillKey,e.disabled)}}
        >
          ${e.disabled?"Enable":"Disable"}
        </button>
        ${s?c`
                <button
                  class="btn btn--sm"
                  ?disabled=${n}
                  @click=${i=>{i.stopPropagation(),t.onInstall(e.skillKey,e.name,e.install[0].id)}}
                >
                  ${n?"Installing…":e.install[0].label}
                </button>
              `:v}
      </div>
    </div>
  `}function Cb(e,t){const{content:n,loading:s,error:a,onClose:i}=t;return c`
    <div class="modal-overlay" @click=${i}>
      <div
        class="modal card skill-detail-modal"
        style="
          width: min(900px, 90vw);
          height: 85vh;
          max-width: 90vw;
          max-height: 90vh;
          min-width: 380px;
          min-height: 320px;
          resize: both;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        "
        @click=${l=>l.stopPropagation()}
      >
        <div class="row" style="justify-content: space-between; align-items: center; flex-shrink: 0;">
          <div class="card-title">${e.emoji?`${e.emoji} `:""}${e.name}</div>
          <button class="btn" @click=${i}>×</button>
        </div>
        <div class="card-sub" style="margin-top: 4px; flex-shrink: 0;">${e.description}</div>
        <div
          class="skill-doc-body"
          style="margin-top: 16px; overflow: auto; flex: 1; min-height: 0; padding-right: 4px;"
        >
          ${s?c`<div class="muted">${o("commonLoading")}</div>`:a?c`<div class="callout danger">${a}</div>`:n?c`<div class="sidebar-markdown">${ts(os(xb(n)))}</div>`:c`<div class="muted">${o("skillsNoDoc")}</div>`}
        </div>
      </div>
    </div>
  `}function na(e){return{prometheus:"Prometheus",elasticsearch:"Elasticsearch",filesystem:"Filesystem"}[e.toLowerCase()]??e.charAt(0).toUpperCase()+e.slice(1)}function pl(e){return e.command?"stdio":e.url?"url":e.service&&e.serviceUrl?"service":"—"}function ic(e){return!e||typeof e!="object"?"":Object.entries(e).map(([t,n])=>`${t}=${n}`).join(`
`)}function Tb(e){if(e.addEditMode==="raw")return!e.addRawError;const t=e.addDraft,n=e.addConnectionType??"stdio";return n==="stdio"?!!t?.command?.trim():n==="url"?!!t?.url?.trim():n==="service"?!!t?.service?.trim()&&!!t?.serviceUrl?.trim():!1}function lc(e){const t={};for(const n of e.split(/\n/)){const s=n.trim();if(!s)continue;const a=s.indexOf("=");if(a>0){const i=s.slice(0,a).trim(),l=s.slice(a+1).trim();i&&(t[i]=l)}}return t}function Mb(e,t,n){const s=["npx","docker","uv"];if(e==="stdio"){const a=t?.command??"npx",i=s.includes(a)?a:"npx";return c`
      <div class="field">
        <span>${o("mcpCommand")} *</span>
        <select
          .value=${i}
          @change=${l=>n({command:l.target.value})}
        >
          ${s.map(l=>c`<option value=${l}>${l}</option>`)}
        </select>
      <div class="field">
        <span>${o("mcpArgs")}</span>
        <input
          type="text"
          .value={(draft?.args ?? []).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${l=>{const d=l.target.value;n({args:d.trim()?d.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field">
        <span>${o("mcpEnv")}</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${o("mcpEnvPlaceholder")}
          .value=${ic(t?.env)}
          @input=${l=>{const d=l.target.value;n({env:lc(d)})}}
        ></textarea>
      </div>
    `}return e==="url"?c`
      <div class="field">
        <span>${o("mcpUrl")} *</span>
        <input
          type="text"
          .value=${t?.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${a=>n({url:a.target.value})}
        />
      </div>
    `:c`
    <div class="field">
      <span>${o("mcpService")} *</span>
      <input
        type="text"
        .value=${t?.service??""}
        placeholder="prometheus"
        @input=${a=>n({service:a.target.value})}
      />
    </div>
    <div class="field">
      <span>${o("mcpServiceUrl")} *</span>
      <input
        type="text"
        .value=${t?.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${a=>n({serviceUrl:a.target.value})}
      />
    </div>
  `}function Eb(e,t,n,s){const a=["npx","docker","uv"];if(e==="stdio"){const i=t.command??"npx",l=a.includes(i)?i:"npx";return c`
      <div class="field">
        <span>${o("mcpCommand")} *</span>
        <select
          .value=${l}
          @change=${d=>s(n,{command:d.target.value})}
        >
          ${a.map(d=>c`<option value=${d}>${d}</option>`)}
        </select>
      <div class="field">
        <span>${o("mcpArgs")}</span>
        <input
          type="text"
          .value=${(t.args??[]).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${d=>{const u=d.target.value;s(n,{args:u.trim()?u.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field">
        <span>${o("mcpEnv")}</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${o("mcpEnvPlaceholder")}
          .value=${ic(t.env)}
          @input=${d=>{const u=d.target.value;s(n,{env:lc(u)})}}
        ></textarea>
      </div>
    `}return e==="url"?c`
      <div class="field">
        <span>${o("mcpUrl")} *</span>
        <input
          type="text"
          .value=${t.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${i=>s(n,{url:i.target.value})}
        />
      </div>
    `:c`
    <div class="field">
      <span>${o("mcpService")} *</span>
      <input
        type="text"
        .value=${t.service??""}
        placeholder="prometheus"
        @input=${i=>s(n,{service:i.target.value})}
      />
    </div>
    <div class="field">
      <span>${o("mcpServiceUrl")} *</span>
      <input
        type="text"
        .value=${t.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${i=>s(n,{serviceUrl:i.target.value})}
      />
    </div>
  `}function Pb(e){const t=Object.entries(e.servers??{}),n=e.selectedKey?e.servers[e.selectedKey]:null;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${o("navTitleMcp")}</div>
          <div class="card-sub">${o("subtitleMcp")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${o("mcpViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddServer}>
            ${o("mcpAddServer")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonLoading"):o("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.addModalOpen?c`
              <div class="modal-overlay" @click=${e.onAddClose}>
                <div class="modal card" style="max-width: 520px;" @click=${s=>s.stopPropagation()}>
                  <div class="card-title">${o("mcpAddServer")}</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>${o("mcpServerName")} *</span>
                    <input
                      type="text"
                      .value=${e.addName}
                      @input=${s=>e.onAddNameChange(s.target.value)}
                      placeholder="prometheus, my-mcp"
                    />
                  </div>
                  <div class="row" style="margin: 12px 0; gap: 8px;">
                    <button
                      class="btn ${e.addEditMode==="form"?"primary":""}"
                      @click=${()=>e.onAddEditModeChange("form")}
                    >
                      ${o("mcpFormMode")}
                    </button>
                    <button
                      class="btn ${e.addEditMode==="raw"?"primary":""}"
                      @click=${()=>e.onAddEditModeChange("raw")}
                    >
                      ${o("mcpRawMode")}
                    </button>
                  </div>
                  ${e.addEditMode==="form"?c`
                          <div class="config-form" id="mcp-add-form">
                            <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--input, #333); padding-bottom: 4px;">
                              <button
                                type="button"
                                class="btn ${(e.addConnectionType??"stdio")==="stdio"?"primary":""}"
                                style="flex: 1; min-width: 0;"
                                @click=${()=>e.onAddConnectionTypeChange("stdio")}
                              >
                                ${o("mcpConnectionTypeStdio")}
                              </button>
                              <button
                                type="button"
                                class="btn ${(e.addConnectionType??"stdio")==="url"?"primary":""}"
                                style="flex: 1; min-width: 0;"
                                @click=${()=>e.onAddConnectionTypeChange("url")}
                              >
                                ${o("mcpConnectionTypeUrl")}
                              </button>
                              <button
                                type="button"
                                class="btn ${(e.addConnectionType??"stdio")==="service"?"primary":""}"
                                style="flex: 1; min-width: 0;"
                                @click=${()=>e.onAddConnectionTypeChange("service")}
                              >
                                ${o("mcpConnectionTypeService")}
                              </button>
                            </div>
                            <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                              ${Mb(e.addConnectionType==="stdio"||e.addConnectionType==="url"||e.addConnectionType==="service"?e.addConnectionType:"stdio",e.addDraft,s=>e.onAddFormPatch(s))}
                            </div>
                            <div class="field">
                              <span>${o("mcpToolPrefix")}</span>
                              <input
                                type="text"
                                .value=${e.addDraft?.toolPrefix??""}
                                placeholder="Optional"
                                @input=${s=>e.onAddFormPatch({toolPrefix:s.target.value})}
                              />
                            </div>
                          </div>
                        `:c`
                          <div class="field">
                            <span>${o("mcpRawJson")}</span>
                            <textarea
                              style="min-height: 180px; font-family: var(--mono);"
                              .value=${e.addRawJson}
                              @input=${s=>e.onAddRawChange(s.target.value)}
                            ></textarea>
                            ${e.addRawError?c`<div class="callout danger" style="margin-top: 8px;">${e.addRawError}</div>`:v}
                          </div>
                        `}
                  <div class="row" style="margin-top: 16px; gap: 8px; justify-content: flex-end;">
                    <button class="btn" @click=${e.onAddClose}>${o("commonCancel")}</button>
                    <button
                      class="btn primary"
                      ?disabled=${e.saving||!e.addName.trim()||!Tb(e)}
                      @click=${e.onAddSubmit}
                    >
                      ${e.saving?o("commonSaving"):o("mcpAddServer")}
                    </button>
                  </div>
                </div>
              </div>
            `:v}

      <div class="mcp-server-list" style="margin-top: 16px;">
        ${t.length===0?c`
                <div class="muted" style="margin-top: 12px;">
                  ${o("mcpNoServers")}
                </div>
              `:e.viewMode==="list"?c`
                  <div class="mcp-table table" style="margin-top: 0;">
                    <div class="mcp-table-head table-head">
                      <div>${o("mcpTableName")}</div>
                      <div>${o("mcpTableType")}</div>
                      <div>${o("mcpTableStatus")}</div>
                      <div>${o("mcpTableActions")}</div>
                    </div>
                    ${t.map(([s,a])=>c`
                        <div
                          class="mcp-table-row table-row ${e.selectedKey===s?"list-item-selected":""}"
                          style="cursor: pointer;"
                          @click=${()=>e.onSelect(e.selectedKey===s?null:s)}
                        >
                          <div class="mcp-table-cell" style="font-weight: 500;">
                            ${na(s)}
                          </div>
                          <div class="mcp-table-cell muted" style="font-size: 13px;">
                            ${pl(a)}
                          </div>
                          <div class="mcp-table-cell">
                            <span class="chip ${a.enabled!==!1?"chip-ok":""}" style="font-size: 12px;">
                              ${a.enabled!==!1?o("mcpEnabled"):o("mcpDisabled")}
                            </span>
                          </div>
                          <div class="mcp-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${i=>i.stopPropagation()}>
                            <button
                              class="btn btn--sm ${a.enabled!==!1?"btn-ok":""}"
                              ?disabled=${e.saving}
                              @click=${i=>{i.stopPropagation(),e.onToggle(s,a.enabled===!1)}}
                            >
                              ${a.enabled!==!1?o("mcpEnabled"):o("mcpDisabled")}
                            </button>
                            <button
                              class="btn btn--sm"
                              ?disabled=${e.saving}
                              @click=${i=>{i.stopPropagation(),e.onSelect(e.selectedKey===s?null:s)}}
                            >
                              ${o("channelsConfigure")}
                            </button>
                            <button
                              class="btn btn--sm"
                              style="color: var(--danger-color, #d14343);"
                              ?disabled=${e.saving}
                              @click=${i=>{i.stopPropagation(),confirm(o("mcpDeleteConfirm"))&&e.onDelete(s)}}
                            >
                              ${o("commonDelete")}
                            </button>
                          </div>
                        </div>
                      `)}
                  </div>
                `:c`
                  <div class="mcp-card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px;">
                    ${t.map(([s,a])=>c`
                        <div
                          class="mcp-server-card ${e.selectedKey===s?"list-item-selected":""}"
                          style="cursor: pointer;"
                          @click=${()=>e.onSelect(e.selectedKey===s?null:s)}
                        >
                          <div class="mcp-server-card__header">
                            <div class="mcp-server-card__icon">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="4" y="4" width="8" height="8" rx="1"/>
                                <rect x="12" y="12" width="8" height="8" rx="1"/>
                              </svg>
                            </div>
                            <div class="mcp-server-card__title-row" style="min-width: 0;">
                              <span class="mcp-server-card__name">${na(s)}</span>
                              <span class="chip" style="font-size: 11px;">${pl(a)}</span>
                            </div>
                          </div>
                          <div class="mcp-server-card__footer" @click=${i=>i.stopPropagation()}>
                            <button
                              class="btn btn--sm ${a.enabled!==!1?"btn-ok":""}"
                              ?disabled=${e.saving}
                              @click=${i=>{i.stopPropagation(),e.onToggle(s,a.enabled===!1)}}
                            >
                              ${a.enabled!==!1?o("mcpEnabled"):o("mcpDisabled")}
                            </button>
                            <button
                              class="btn btn--sm"
                              ?disabled=${e.saving}
                              @click=${i=>{i.stopPropagation(),e.onSelect(e.selectedKey===s?null:s)}}
                            >
                              ${o("channelsConfigure")}
                            </button>
                            <button
                              class="btn btn--sm"
                              style="color: var(--danger-color, #d14343); padding: 4px 8px;"
                              ?disabled=${e.saving}
                              @click=${i=>{i.stopPropagation(),confirm(o("mcpDeleteConfirm"))&&e.onDelete(s)}}
                              title=${o("commonDelete")}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      `)}
                  </div>
                `}
      </div>
    </section>

    ${e.selectedKey&&n?c`
            <div class="channel-panel-overlay" @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onCancel()}}>
              <div class="channel-panel card" @click=${s=>s.stopPropagation()}>
                <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                  <div class="card-title">${na(e.selectedKey)} ${o("configSettingsTitle")}</div>
                  <button class="btn" @click=${e.onCancel}>×</button>
                </div>
                <div class="channel-panel-content">
                  <div class="row" style="margin-bottom: 12px; gap: 8px;">
                    <button
                      class="btn ${e.editMode==="form"?"primary":""}"
                      @click=${()=>e.onEditModeChange("form")}
                    >
                      ${o("mcpFormMode")}
                    </button>
                    <button
                      class="btn ${e.editMode==="raw"?"primary":""}"
                      @click=${()=>{e.onEditModeChange("raw"),e.onRawChange(e.selectedKey,JSON.stringify(n,null,2))}}
                    >
                      ${o("mcpRawMode")}
                    </button>
                  </div>

                  ${e.editMode==="form"?c`
                          <div class="config-form">
                            <div class="field">
                              <span>${o("mcpEnabled")}</span>
                              <div class="row" style="align-items: center; gap: 8px;">
                                <input
                                  type="checkbox"
                                  ?checked=${n.enabled!==!1}
                                  @change=${s=>e.onFormPatch(e.selectedKey,{enabled:s.target.checked})}
                                />
                              </div>
                            </div>
                            <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--input, #333); padding-bottom: 4px;">
                              <button
                                type="button"
                                class="btn ${(e.editConnectionType??"stdio")==="stdio"?"primary":""}"
                                style="flex: 1; min-width: 0;"
                                @click=${()=>e.onEditConnectionTypeChange("stdio")}
                              >
                                ${o("mcpConnectionTypeStdio")}
                              </button>
                              <button
                                type="button"
                                class="btn ${(e.editConnectionType??"stdio")==="url"?"primary":""}"
                                style="flex: 1; min-width: 0;"
                                @click=${()=>e.onEditConnectionTypeChange("url")}
                              >
                                ${o("mcpConnectionTypeUrl")}
                              </button>
                              <button
                                type="button"
                                class="btn ${(e.editConnectionType??"stdio")==="service"?"primary":""}"
                                style="flex: 1; min-width: 0;"
                                @click=${()=>e.onEditConnectionTypeChange("service")}
                              >
                                ${o("mcpConnectionTypeService")}
                              </button>
                            </div>
                            <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                              ${Eb(e.editConnectionType==="stdio"||e.editConnectionType==="url"||e.editConnectionType==="service"?e.editConnectionType:"stdio",n,e.selectedKey,e.onFormPatch)}
                            </div>
                            <div class="field">
                              <span>${o("mcpToolPrefix")}</span>
                              <input
                                type="text"
                                .value=${n.toolPrefix??""}
                                placeholder="Optional"
                                @input=${s=>e.onFormPatch(e.selectedKey,{toolPrefix:s.target.value})}
                              />
                            </div>
                          </div>
                        `:c`
                          <div class="field">
                            <span>${o("mcpRawJson")}</span>
                            <textarea
                              style="min-height: 200px; font-family: var(--mono);"
                              .value=${e.rawJson}
                              @input=${s=>e.onRawChange(e.selectedKey,s.target.value)}
                            ></textarea>
                            ${e.rawError?c`<div class="callout danger" style="margin-top: 8px;">${e.rawError}</div>`:v}
                          </div>
                        `}

                  <div class="row" style="margin-top: 16px; gap: 8px;">
                    <button
                      class="btn primary"
                      ?disabled=${e.saving||!e.formDirty&&e.editMode==="form"}
                      @click=${e.onSave}
                    >
                      ${e.saving?o("commonSaving"):o("commonSave")}
                    </button>
                    <button class="btn" ?disabled=${e.saving} @click=${e.onCancel}>
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `:v}
  `}function Db(e){return e==null?"—":new Date(e).toLocaleString()}function Lb(e){if(e==null||e<0)return"—";if(e===0)return"0 B";const t=["B","KB","MB","GB"];let n=0,s=e;for(;s>=1024&&n<t.length-1;)s/=1024,n++;return`${s.toFixed(n>0?2:0)} ${t[n]}`}function Ib(e,t){if(!t.trim())return e;const n=t.trim().toLowerCase();return e.filter(s=>s.sessionKey.toLowerCase().includes(n)||s.sessionId.toLowerCase().includes(n))}function _b(e){const t=e.result?.entries??[],n=Ib(t,e.search);return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${o("navTitleLlmTrace")}</div>
          <div class="card-sub">${o("subtitleLlmTrace")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;">
            <button
              type="button"
              class="btn ${e.mode==="active"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("active")}
            >
              ${o("llmTraceModeActive")}
            </button>
            <button
              type="button"
              class="btn ${e.mode==="all"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("all")}
            >
              ${o("llmTraceModeAll")}
            </button>
          </div>
          <button
            type="button"
            class="btn ${e.enabled?"btn-ok":""}"
            ?disabled=${e.saving}
            @click=${e.onToggleEnabled}
            title=${o("llmTraceToggleTooltip")}
          >
            ${e.enabled?o("llmTraceActionDisable"):o("llmTraceActionEnable")}
          </button>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonLoading"):o("commonRefresh")}
          </button>
        </div>
      </div>

      <div class="row" style="margin-top: 16px; gap: 12px; align-items: center;">
        <div class="field" style="flex: 1; min-width: 200px;">
          <span>${o("llmTraceSearch")}</span>
          <input
            type="text"
            .value=${e.search}
            placeholder=${o("llmTraceSearchPlaceholder")}
            @input=${s=>e.onSearchChange(s.target.value)}
          />
        </div>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="llm-trace-table mcp-table table" style="margin-top: 16px;">
        <div class="mcp-table-head table-head">
          <div>${o("llmTraceSessionKey")}</div>
          <div>${o("llmTraceSessionId")}</div>
          <div>${o("llmTraceUpdatedAt")}</div>
          <div>${o("llmTraceFile")}</div>
          <div>${o("llmTraceFileSize")}</div>
          <div class="llm-trace-actions-col">${o("mcpTableActions")}</div>
        </div>
        ${n.length===0?c`
                <div class="muted" style="padding: 24px; text-align: center;">
                  ${e.loading?o("commonLoading"):o("llmTraceNoEntries")}
                </div>
              `:n.map(s=>c`
                  <div class="mcp-table-row table-row">
                    <div class="mcp-table-cell mono" style="font-size: 12px; max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${s.sessionKey}>
                      ${s.sessionKey}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px; max-width: 180px; overflow: hidden; text-overflow: ellipsis;" title=${s.sessionId}>
                      ${s.sessionId}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${Db(s.updatedAt)}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px;">
                      ${s.file}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${Lb(s.fileSize)}
                    </div>
                    <div class="mcp-table-cell llm-trace-actions-col row" style="gap: 6px; justify-content: flex-end;">
                      ${s.file!=="-"?c`
                              <button
                                class="btn btn--sm"
                                @click=${()=>e.onView(s.sessionId)}
                              >
                                ${o("llmTraceView")}
                              </button>
                            `:v}
                    </div>
                  </div>
                `)}
      </div>
    </section>
  `}function pt(e){return Array.isArray(e)?e:[]}function It(e){return pt(e).filter(Boolean).join(`
`)}function _t(e){return(e||"").split(`
`).map(t=>t.trim()).filter(Boolean)}function Rb(e){return e==null?"—":new Date(e).toLocaleString()}function Nb(e){const t=e.sandbox??{},n=t.enabled!==!1,s=It(pt(t.allowedPaths)),a=It(pt(t.networkAllow)),i=t.hooks??{},l=t.validator??{},d=It(pt(l.banCommands)),u=It(pt(l.banArguments)),p=It(pt(l.banFragments)),m=It(pt(l.secretPatterns)),f=e.approvalsResult?.entries??[],h=e.approvalsResult?.storePath??"";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${o("navTitleSandbox")}</div>
          <div class="card-sub">${o("subtitleSandbox")}</div>
        </div>
        <button
          type="button"
          class="btn ${n?"btn-ok":""}"
          ?disabled=${e.saving}
          @click=${e.onToggleEnabled}
        >
          ${o(n?"sandboxActionDisable":"sandboxActionEnable")}
        </button>
      </div>

      <div class="sandbox-sections" style="margin-top: 20px;">
        <details class="sandbox-details" open>
          <summary class="sandbox-summary">${o("sandboxSectionConfig")}</summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="sandbox-form-center">
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${o("sandboxAllowedPaths")}</span>
                <textarea
                  rows="3"
                  .value=${s}
                  placeholder="/tmp&#10;./workspace"
                  @input=${r=>{const g=r.target.value;e.onPatch(["allowedPaths"],_t(g))}}
                ></textarea>
              </div>
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${o("sandboxNetworkAllow")}</span>
                <textarea
                  rows="2"
                  .value=${a}
                  placeholder="localhost&#10;127.0.0.1&#10;*.anthropic.com"
                  @input=${r=>{const g=r.target.value;e.onPatch(["networkAllow"],_t(g))}}
                ></textarea>
              </div>

              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${o("sandboxHooks")}</div>
                <div class="sandbox-hooks-grid">
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${i.beforeAgent!==!1} @change=${r=>e.onPatch(["hooks","beforeAgent"],r.target.checked)} />
                    <span>${o("sandboxHookDescBeforeAgent")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${i.beforeModel!==!1} @change=${r=>e.onPatch(["hooks","beforeModel"],r.target.checked)} />
                    <span>${o("sandboxHookDescBeforeModel")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${i.afterModel!==!1} @change=${r=>e.onPatch(["hooks","afterModel"],r.target.checked)} />
                    <span>${o("sandboxHookDescAfterModel")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${i.beforeTool!==!1} @change=${r=>e.onPatch(["hooks","beforeTool"],r.target.checked)} />
                    <span>${o("sandboxHookDescBeforeTool")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${i.afterTool!==!1} @change=${r=>e.onPatch(["hooks","afterTool"],r.target.checked)} />
                    <span>${o("sandboxHookDescAfterTool")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${i.afterAgent!==!1} @change=${r=>e.onPatch(["hooks","afterAgent"],r.target.checked)} />
                    <span>${o("sandboxHookDescAfterAgent")}</span>
                  </label>
                </div>
              </div>

              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${o("sandboxValidator")}</div>
                <div class="row" style="flex-direction: column; gap: 12px;">
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${o("sandboxBanCommands")}</span>
                    <textarea
                      rows="2"
                      style="font-size: 14px;"
                      .value=${d}
                      placeholder="dd&#10;mkfs&#10;sudo"
                      @input=${r=>{const g=r.target.value;e.onPatch(["validator","banCommands"],_t(g))}}
                    ></textarea>
                  </div>
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${o("sandboxBanArguments")}</span>
                    <textarea
                      rows="2"
                      style="font-size: 14px;"
                      .value=${u}
                      placeholder="--no-preserve-root&#10;/dev/"
                      @input=${r=>{const g=r.target.value;e.onPatch(["validator","banArguments"],_t(g))}}
                    ></textarea>
                  </div>
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${o("sandboxBanFragments")}</span>
                    <textarea
                      rows="2"
                      style="font-size: 14px;"
                      .value=${p}
                      placeholder="rm -rf&#10;rm -r"
                      @input=${r=>{const g=r.target.value;e.onPatch(["validator","banFragments"],_t(g))}}
                    ></textarea>
                  </div>
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${o("sandboxSecretPatterns")}</span>
                    <textarea
                      rows="3"
                      style="font-size: 14px; font-family: var(--mono);"
                      .value=${m}
                      placeholder="sk-[a-zA-Z0-9]{48}&#10;ghp_[a-zA-Z0-9]{36}"
                      @input=${r=>{const g=r.target.value;e.onPatch(["validator","secretPatterns"],_t(g))}}
                    ></textarea>
                    <div class="muted" style="font-size: 12px; margin-top: 4px;">${o("sandboxSecretPatternsHint")}</div>
                  </div>
                </div>
              </div>

              <div class="row" style="gap: 8px; margin-top: 16px;">
                <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>
                  ${e.saving?o("commonLoading"):o("commonSave")}
                </button>
              </div>
            </div>
          </div>
        </details>

        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">${o("sandboxSectionApprovals")}</summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
              <div class="muted" style="font-size: 13px;">${h||""}</div>
              <button class="btn primary" ?disabled=${e.approvalsLoading} @click=${e.onApprovalsRefresh}>
                ${e.approvalsLoading?o("commonLoading"):o("commonRefresh")}
              </button>
            </div>
            ${e.approvalsError?c`<div class="callout danger" style="margin-bottom: 12px;">${e.approvalsError}</div>`:v}
            <div class="mcp-table table sandbox-approvals-table">
              <div class="mcp-table-head table-head sandbox-approvals-head">
                <div>${o("approvalsId")}</div>
                <div>${o("approvalsSessionKey")}</div>
                <div>${o("approvalsSessionId")}</div>
                <div>${o("approvalsCommand")}</div>
                <div>${o("approvalsTimeout")}</div>
                <div>${o("approvalsTTL")}</div>
                <div>${o("approvalsStatus")}</div>
                <div>${o("mcpTableActions")}</div>
              </div>
              ${f.length===0?c`
                      <div class="muted" style="padding: 24px; text-align: center;">
                        ${e.approvalsLoading?o("commonLoading"):o("approvalsNoEntries")}
                      </div>
                    `:f.map(r=>{const g=r.status==="pending",y=r.sessionKey?`${e.pathForTab("sessions")}?key=${encodeURIComponent(r.sessionKey)}`:"";return c`
                          <div class="mcp-table-row table-row">
                            <div class="mcp-table-cell mono">${r.id}</div>
                            <div class="mcp-table-cell mono muted" style="max-width: 160px; overflow: hidden; text-overflow: ellipsis;" title=${r.sessionKey??""}>${r.sessionKey??"—"}</div>
                            <div class="mcp-table-cell mono muted">${r.sessionId}</div>
                            <div class="mcp-table-cell mono" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${r.command}>${r.command}</div>
                            <div class="mcp-table-cell muted">${Rb(r.timeoutAt)}</div>
                            <div class="mcp-table-cell muted">${r.ttlSeconds??"—"}</div>
                            <div class="mcp-table-cell">${r.status==="expired"?o("approvalsExpired"):r.status==="pending"?o("approvalsPending"):r.status}</div>
                            <div class="mcp-table-cell row" style="gap: 6px; justify-content: flex-end;">
                              ${y?c`<a class="btn btn--sm" href="${y}">${o("approvalsViewSession")}</a>`:v}
                              ${g?c`
                                    <button class="btn btn--sm btn-ok" @click=${()=>e.onApprove(r.id,r.ttlSeconds)}>${o("approvalsApprove")}</button>
                                    <button class="btn btn--sm" @click=${()=>e.onDeny(r.id)}>${o("approvalsDeny")}</button>
                                  `:v}
                            </div>
                          </div>
                        `})}
            </div>
          </div>
        </details>
      </div>
    </section>
  `}const Te=[{id:"anthropic",label:"Anthropic",envKey:"ANTHROPIC_API_KEY",defaultModel:"claude-sonnet-4-5-20250929",baseUrl:"(官方)",defaultApi:"anthropic-messages"},{id:"openai",label:"OpenAI",envKey:"OPENAI_API_KEY",defaultModel:"gpt-4",baseUrl:"(官方)",defaultApi:"openai-completions"},{id:"openrouter",label:"OpenRouter",envKey:"OPENROUTER_API_KEY",defaultModel:"auto",baseUrl:"https://openrouter.ai/api/v1",defaultApi:"openai-completions"},{id:"litellm",label:"LiteLLM",envKey:"LITELLM_API_KEY",defaultModel:"",baseUrl:"http://localhost:4000",defaultApi:"openai-completions"},{id:"moonshot",label:"Moonshot",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.ai/v1",defaultApi:"openai-completions"},{id:"moonshot-cn",label:"Moonshot-CN",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.cn/v1",defaultApi:"openai-completions"},{id:"kimi-coding",label:"Kimi Coding",envKey:"KIMI_API_KEY",defaultModel:"k2p5",baseUrl:"https://api.moonshot.ai/anthropic",defaultApi:"anthropic-messages"},{id:"opencode",label:"OpenCode",envKey:"OPENCODE_API_KEY",defaultModel:"claude-opus-4-6",baseUrl:"https://opencode.ai/zen/v1",defaultApi:"openai-completions"},{id:"zai",label:"Z.ai (智谱)",envKey:"ZAI_API_KEY",defaultModel:"glm-5",baseUrl:"https://api.z.ai/api/paas/v4",defaultApi:"openai-completions"},{id:"xai",label:"xAI (Grok)",envKey:"XAI_API_KEY",defaultModel:"grok-3-mini",baseUrl:"https://api.x.ai/v1",defaultApi:"openai-completions"},{id:"together",label:"Together AI",envKey:"TOGETHER_API_KEY",defaultModel:"meta-llama/Llama-3.3-70B-Instruct-Turbo",baseUrl:"https://api.together.xyz/v1",defaultApi:"openai-completions"},{id:"venice",label:"Venice AI",envKey:"VENICE_API_KEY",defaultModel:"falcon-3.1-70b",baseUrl:"https://api.venice.ai/api/v1",defaultApi:"openai-completions"},{id:"synthetic",label:"Synthetic",envKey:"SYNTHETIC_API_KEY",defaultModel:"hf:MiniMaxAI/MiniMax-M2.1",baseUrl:"https://api.synthetic.new/anthropic",defaultApi:"anthropic-messages"},{id:"qianfan",label:"千帆 (百度)",envKey:"QIANFAN_API_KEY",defaultModel:"deepseek-v3-2-251201",baseUrl:"https://qianfan.baidubce.com/v2",defaultApi:"openai-completions"},{id:"huggingface",label:"Hugging Face",envKey:"HUGGINGFACE_HUB_TOKEN",defaultModel:"",baseUrl:"https://router.huggingface.co/v1",defaultApi:"openai-completions"},{id:"xiaomi",label:"小米 Mimo",envKey:"XIAOMI_API_KEY",defaultModel:"mimo-v2-flash",baseUrl:"https://api.xiaomimimo.com/anthropic",defaultApi:"anthropic-messages"},{id:"minimax",label:"MiniMax",envKey:"MINIMAX_API_KEY",defaultModel:"MiniMax-M2.1",baseUrl:"https://api.minimax.io/anthropic",defaultApi:"anthropic-messages"},{id:"mistral",label:"Mistral",envKey:"MISTRAL_API_KEY",defaultModel:"mistral-large-latest",baseUrl:"https://api.mistral.ai/v1",defaultApi:"openai-completions"},{id:"groq",label:"Groq",envKey:"GROQ_API_KEY",defaultModel:"llama-3.3-70b-versatile",baseUrl:"https://api.groq.com/openai/v1",defaultApi:"openai-completions"},{id:"cerebras",label:"Cerebras",envKey:"CEREBRAS_API_KEY",defaultModel:"llama-4-scout-17b-16e-instruct",baseUrl:"https://api.cerebras.ai/v1",defaultApi:"openai-completions"},{id:"ollama",label:"Ollama",envKey:"OLLAMA_API_KEY",defaultModel:"llama3.3",baseUrl:"http://127.0.0.1:11434/v1",defaultApi:"openai-completions"},{id:"vllm",label:"vLLM",envKey:"VLLM_API_KEY",defaultModel:"",baseUrl:"http://127.0.0.1:8000/v1",defaultApi:"openai-completions"},{id:"vercel-ai-gateway",label:"Vercel AI Gateway",envKey:"AI_GATEWAY_API_KEY",defaultModel:"",baseUrl:"https://api.vercel.ai/v1",defaultApi:"openai-completions"},{id:"bailian",label:"百炼 (阿里云)",envKey:"DASHSCOPE_API_KEY",defaultModel:"qwen3.5-flash",baseUrl:"https://dashscope.aliyuncs.com/compatible-mode/v1",defaultApi:"openai-completions"}];function Fb(e){if(!e||typeof e!="string")return null;const t=e.trim().split("/",2);return t.length===2?{provider:t[0].trim(),modelId:t[1].trim()}:{provider:"anthropic",modelId:e.trim()}}function on(e,t){const n=Te.find(s=>s.id===e);return n?n.label:t?.displayName??e}function Ub(e,t){const n=Te.find(a=>a.id===e),s=t?.models??[];return s.length>0?s:n?.defaultModel?[{id:n.defaultModel,name:n.defaultModel}]:[]}function Ob(e){const t=Fb(e.defaultModelRef);return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${o("navTitleModels")}</div>
          <div class="card-sub">${o("subtitleModels")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${o("modelsViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddProvider}>
            ${o("modelsAddProvider")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?o("commonLoading"):o("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.defaultModelRef?c`
            <div class="callout" style="margin-top: 12px;">
              <strong>${o("modelsCurrentDefault")}:</strong> ${e.defaultModelRef}
            </div>
          `:v}

      <div class="models-provider-list" style="margin-top: 16px;">
        ${e.viewMode==="list"?c`
              <div class="models-table table" style="margin-top: 0;">
                <div class="models-table-head table-head">
                  <div>${o("modelsTableName")}</div>
                  <div>${o("modelsTableModel")}</div>
                  <div>${o("modelsTableBaseUrl")}</div>
                  <div>${o("modelsTableActions")}</div>
                </div>
                ${Te.map(n=>{const s=e.providers?.[n.id],a=!!s,i=a?s?.models?.[0]?.id??n.defaultModel??"(需指定)":null,l=a&&i&&i!=="(需指定)",d=l&&t?.provider===n.id;return c`
                    <div
                      class="models-table-row table-row ${e.selectedProvider===n.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===n.id?null:n.id)}
                    >
                      <div class="models-table-cell" style="font-weight: 500;">
                        ${n.label}
                        ${d?c`<span class="muted" style="font-size: 12px;"> (${o("modelsCurrentDefault")})</span>`:v}
                      </div>
                      <div class="models-table-cell muted" style="font-size: 13px;">${a?i:"-"}</div>
                      <div class="models-table-cell muted" style="font-size: 12px;">${s?.baseUrl??n.baseUrl}</div>
                      <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${u=>u.stopPropagation()}>
                        ${l?c`
                              <button
                                class="btn btn--sm ${d?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${u=>{u.stopPropagation(),e.onUseModelClick(n.id)}}
                              >
                                ${o("modelsUseAsDefault")}
                              </button>
                            `:c`<button class="btn btn--sm" disabled>${o("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${u=>{u.stopPropagation(),e.onSelect(e.selectedProvider===n.id?null:n.id)}}
                        >
                          ${o("channelsConfigure")}
                        </button>
                        ${a?c`
                              <button
                                class="btn btn--sm ${d?"btn-ok":""}"
                                ?disabled=${e.saving||!d}
                                @click=${u=>{u.stopPropagation(),e.onCancelUse(n.id)}}
                              >
                                ${o("modelsCancelUse")}
                              </button>
                            `:v}
                      </div>
                    </div>
                  `})}
                ${Object.entries(e.providers??{}).filter(([n])=>!Te.some(s=>s.id===n)).map(([n,s])=>{const a=s.models?.[0]?.id,i=!!a,l=i&&t?.provider===n;return c`
                      <div
                        class="models-table-row table-row ${e.selectedProvider===n?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===n?null:n)}
                      >
                        <div class="models-table-cell" style="font-weight: 500;">${on(n,s)}</div>
                        <div class="models-table-cell muted" style="font-size: 13px;">
                          ${i?a:(s.models?.length??0)+" "+o("modelsModels")}
                        </div>
                        <div class="models-table-cell muted" style="font-size: 12px;">${s.baseUrl??o("commonNA")}</div>
                        <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${d=>d.stopPropagation()}>
                          ${i?c`
                                <button
                                  class="btn btn--sm ${l?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${d=>{d.stopPropagation(),e.onUseModelClick(n)}}
                                >
                                  ${o("modelsUseAsDefault")}
                                </button>
                              `:c`<button class="btn btn--sm" disabled>${o("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${d=>{d.stopPropagation(),e.onSelect(e.selectedProvider===n?null:n)}}
                          >
                            ${o("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${l?"btn-ok":""}"
                            ?disabled=${e.saving||!l}
                            @click=${d=>{d.stopPropagation(),e.onCancelUse(n)}}
                          >
                            ${o("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `:c`
              <div class="models-card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px;">
                ${Te.map(n=>{const s=e.providers?.[n.id],a=!!s,i=a?s?.models?.[0]?.id??n.defaultModel??"(需指定)":null,l=a&&i&&i!=="(需指定)",d=l&&t?.provider===n.id;return c`
                    <div
                      class="models-provider-card ${e.selectedProvider===n.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===n.id?null:n.id)}
                    >
                      <div class="models-provider-card__header">
                        <div class="models-provider-card__icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                          </svg>
                        </div>
                        <div class="models-provider-card__title-row" style="min-width: 0;">
                          <span class="models-provider-card__name">${n.label}</span>
                          ${a?c`<span class="chip" style="font-size: 11px;">${i}</span>`:v}
                        </div>
                      </div>
                      <div class="models-provider-card__meta muted" style="font-size: 12px;">${s?.baseUrl??n.baseUrl}</div>
                      <div class="models-provider-card__footer" @click=${u=>u.stopPropagation()}>
                        ${l?c`
                              <button
                                class="btn btn--sm ${d?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${u=>{u.stopPropagation(),e.onUseModelClick(n.id)}}
                              >
                                ${o("modelsUseAsDefault")}
                              </button>
                            `:c`<button class="btn btn--sm" disabled>${o("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${u=>{u.stopPropagation(),e.onSelect(e.selectedProvider===n.id?null:n.id)}}
                        >
                          ${o("channelsConfigure")}
                        </button>
                        ${a?c`
                              <button
                                class="btn btn--sm ${d?"btn-ok":""}"
                                ?disabled=${e.saving||!d}
                                @click=${u=>{u.stopPropagation(),e.onCancelUse(n.id)}}
                              >
                                ${o("modelsCancelUse")}
                              </button>
                            `:v}
                      </div>
                    </div>
                  `})}
                ${Object.entries(e.providers??{}).filter(([n])=>!Te.some(s=>s.id===n)).map(([n,s])=>{const a=s.models?.[0]?.id,i=!!a,l=i&&t?.provider===n;return c`
                      <div
                        class="models-provider-card ${e.selectedProvider===n?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===n?null:n)}
                      >
                        <div class="models-provider-card__header">
                          <div class="models-provider-card__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                              <path d="M2 17l10 5 10-5"/>
                            </svg>
                          </div>
                          <div class="models-provider-card__title-row" style="min-width: 0;">
                            <span class="models-provider-card__name">${on(n,s)}</span>
                            ${i?c`<span class="chip" style="font-size: 11px;">${a}</span>`:c`<span class="chip" style="font-size: 11px;">${s.models?.length??0} ${o("modelsModels")}</span>`}
                          </div>
                        </div>
                        <div class="models-provider-card__meta muted" style="font-size: 12px;">${s.baseUrl??o("commonNA")}</div>
                        <div class="models-provider-card__footer" @click=${d=>d.stopPropagation()}>
                          ${i?c`
                                <button
                                  class="btn btn--sm ${l?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${d=>{d.stopPropagation(),e.onUseModelClick(n)}}
                                >
                                  ${o("modelsUseAsDefault")}
                                </button>
                              `:c`<button class="btn btn--sm" disabled>${o("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${d=>{d.stopPropagation(),e.onSelect(e.selectedProvider===n?null:n)}}
                          >
                            ${o("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${l?"btn-ok":""}"
                            ?disabled=${e.saving||!l}
                            @click=${d=>{d.stopPropagation(),e.onCancelUse(n)}}
                          >
                            ${o("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `}
    </section>

    ${e.addProviderModalOpen?c`
          <div class="channel-panel-overlay" @click=${e.onAddProviderModalClose}>
            <div class="channel-panel card" style="max-width: 480px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${o("modelsAddCustomProvider")}</div>
                <button class="btn" @click=${e.onAddProviderModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${o("modelsProviderId")} *</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.providerId}
                      placeholder=${o("modelsProviderIdPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({providerId:n.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"")})}
                    />
                    <small class="muted" style="font-size: 11px;">${o("modelsProviderIdHint")}</small>
                  </div>
                  <div class="field">
                    <span>${o("modelsDisplayName")} *</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.displayName}
                      placeholder=${o("modelsDisplayNamePlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({displayName:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${o("modelsDefaultBaseUrl")}</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.baseUrl}
                      placeholder=${o("modelsDefaultBaseUrlPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({baseUrl:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${o("modelsApiKey")}</span>
                    <input
                      type="password"
                      .value=${e.addProviderForm.apiKey}
                      placeholder="sk-... or $ENV_VAR"
                      @input=${n=>e.onAddProviderFormChange({apiKey:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${o("modelsApiKeyPrefix")}</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.apiKeyPrefix}
                      placeholder=${o("modelsApiKeyPrefixPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({apiKeyPrefix:n.target.value})}
                    />
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddProviderModalClose}>${o("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addProviderForm.providerId.trim()||!e.addProviderForm.displayName.trim()}
                    @click=${e.onAddProviderSubmit}
                  >
                    ${o("commonCreate")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:v}

    ${e.useModelModalOpen&&e.useModelModalProvider?c`
          <div class="channel-panel-overlay" style="z-index: 165;" @click=${e.onUseModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${on(e.useModelModalProvider,e.providers?.[e.useModelModalProvider])} - ${o("modelsSelectModelToUse")}</div>
                <button class="btn" @click=${e.onUseModelModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${Ub(e.useModelModalProvider,e.providers?.[e.useModelModalProvider]).map(n=>{const s=t?.provider===e.useModelModalProvider&&t?.modelId===n.id;return c`
                        <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color, #eee);">
                          <button
                            class="btn ${s?"btn-ok":""}"
                            style="width: 100%; justify-content: flex-start; text-align: left;"
                            ?disabled=${e.saving}
                            @click=${()=>e.onUseModel(e.useModelModalProvider,n.id)}
                          >
                            <code>${n.id}</code> ${n.name?`- ${n.name}`:""}
                          </button>
                        </li>
                      `})}
                </ul>
              </div>
            </div>
          </div>
        `:v}

    ${e.addModelModalOpen&&e.selectedProvider?c`
          <div class="channel-panel-overlay" style="z-index: 160;" @click=${e.onAddModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${on(e.selectedProvider,e.providers?.[e.selectedProvider])} - ${o("modelsAddModel")}</div>
                <button class="btn" @click=${e.onAddModelModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${o("modelsModelId")} *</span>
                    <input
                      type="text"
                      .value=${e.addModelForm.modelId}
                      placeholder="e.g. qwen3-max"
                      @input=${n=>e.onAddModelFormChange({modelId:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${o("modelsModelName")} *</span>
                    <input
                      type="text"
                      .value=${e.addModelForm.modelName}
                      placeholder="e.g. Qwen3 Max"
                      @input=${n=>e.onAddModelFormChange({modelName:n.target.value})}
                    />
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddModelModalClose}>${o("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addModelForm.modelId.trim()||!e.addModelForm.modelName.trim()}
                    @click=${()=>e.onAddModelSubmit(e.selectedProvider)}
                  >
                    ${o("modelsAddModel")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:v}

    ${e.selectedProvider&&(e.providers?.[e.selectedProvider]??Te.find(n=>n.id===e.selectedProvider))?c`
            <div class="channel-panel-overlay" @click=${n=>{n.target.classList.contains("channel-panel-overlay")&&e.onCancel()}}>
              <div class="channel-panel card" @click=${n=>n.stopPropagation()}>
                <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                  <div class="card-title">
                    ${on(e.selectedProvider,e.providers?.[e.selectedProvider])} ${o("configSettingsTitle")}
                  </div>
                  <button class="btn" @click=${e.onCancel}>×</button>
                </div>
                <div class="channel-panel-content">
                  ${e.saveError?c`<div class="callout" style="margin-bottom: 12px; color: var(--color-error, #c00);">${o("modelsEnvVarConflict")}: ${e.saveError}</div>`:v}
                  <div class="config-form">
                    <div class="field">
                      <span>${o("modelsBaseUrl")}</span>
                      <input
                        type="text"
                        .value=${e.providers?.[e.selectedProvider]?.baseUrl??Te.find(n=>n.id===e.selectedProvider)?.baseUrl??""}
                        placeholder=${Te.find(n=>n.id===e.selectedProvider)?.baseUrl??""}
                        @input=${n=>e.onPatch(e.selectedProvider,{baseUrl:n.target.value})}
                      />
                    </div>
                    <div class="field">
                      <span>${o("modelsApiKey")}</span>
                      <input
                        type="password"
                        .value=${e.providers?.[e.selectedProvider]?.apiKey??""}
                        placeholder="sk-... or $ENV_VAR"
                        @input=${n=>e.onPatch(e.selectedProvider,{apiKey:n.target.value})}
                      />
                    </div>
                    ${Te.some(n=>n.id===e.selectedProvider)?v:c`
                          <div class="field">
                            <span>${o("modelsDisplayName")}</span>
                            <input
                              type="text"
                              .value=${e.providers?.[e.selectedProvider]?.displayName??""}
                              placeholder=${e.selectedProvider}
                              @input=${n=>e.onPatch(e.selectedProvider,{displayName:n.target.value})}
                            />
                          </div>
                        `}
                    <div class="field">
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>${o("modelsApiType")}</span>
                        <span
                          class="muted"
                          style="cursor: help; font-size: 12px;"
                          title=${o("modelsApiTypeTooltip")}
                        >?</span>
                      </div>
                      <select
                        .value=${e.providers?.[e.selectedProvider]?.api??Te.find(n=>n.id===e.selectedProvider)?.defaultApi??"openai-completions"}
                        @change=${n=>e.onPatch(e.selectedProvider,{api:n.target.value})}
                      >
                        <option value="openai-completions">${o("modelsApiTypeOpenAI")}</option>
                        <option value="anthropic-messages">${o("modelsApiTypeAnthropic")}</option>
                      </select>
                      <p class="muted" style="font-size: 12px; margin-bottom: 0; margin-top: 6px; line-height: 1.5;">
                        ${o("modelsApiTypeTooltip")}
                      </p>
                    </div>
                  </div>

                  <div style="margin-top: 16px;">
                    <div class="row" style="justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <strong>${o("modelsModelManagement")}</strong>
                      <button
                        class="btn btn--sm primary"
                        ?disabled=${e.saving}
                        @click=${()=>e.onAddModel(e.selectedProvider)}
                      >
                        + ${o("modelsAddModel")}
                      </button>
                    </div>
                    ${(e.providers?.[e.selectedProvider]?.models??[]).length===0?c`<p class="muted" style="font-size: 13px;">${o("modelsNoModels")}</p>`:c`
                          <ul style="list-style: none; padding: 0; margin: 0;">
                            ${(e.providers?.[e.selectedProvider]?.models??[]).map(n=>{const s=`${e.selectedProvider}/${n.id}`,a=e.modelEnv?.[s]??{},i=Object.entries(a);return c`
                                <li style="padding: 8px 0; border-bottom: 1px solid var(--border-color, #eee);">
                                  <div class="row" style="justify-content: space-between; align-items: center;">
                                    <span><code>${n.id}</code> ${n.name?`- ${n.name}`:""}</span>
                                    <button
                                      class="btn btn--sm"
                                      ?disabled=${e.saving}
                                      @click=${()=>e.onRemoveModel(e.selectedProvider,n.id)}
                                    >
                                      ${o("commonDelete")}
                                    </button>
                                  </div>
                                  <div style="margin-top: 6px; font-size: 12px;">
                                    <strong class="muted">${o("modelsEnvVars")}</strong>
                                    ${i.length===0?c`
                                          <button
                                            class="btn btn--sm"
                                            style="font-size: 11px; margin-top: 4px;"
                                            @click=${()=>e.onPatchModelEnv(e.selectedProvider,n.id,{__new__:""})}
                                          >
                                            + ${o("envVarsAdd")}
                                          </button>
                                        `:c`
                                          <div style="margin-top: 4px;">
                                            ${i.map(([l,d])=>c`
                                              <div class="row" style="gap: 6px; align-items: center; margin-top: 4px;">
                                                <input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${o("envVarsKeyPlaceholder")}
                                                  .value=${l==="__new__"?"":l}
                                                  @input=${u=>{const p=u.target.value,m={...a};delete m[l],p&&(m[p]=d),e.onPatchModelEnv(e.selectedProvider,n.id,m)}}
                                                />
                                                <input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${o("envVarsValuePlaceholder")}
                                                  .value=${d}
                                                  @input=${u=>{const p={...a};p[l]=u.target.value,e.onPatchModelEnv(e.selectedProvider,n.id,p)}}
                                                />
                                                <button class="btn btn--sm" style="font-size: 11px;" @click=${()=>{const u={...a};delete u[l],e.onPatchModelEnv(e.selectedProvider,n.id,u)}}>×</button>
                                              </div>
                                            `)}
                                            <button
                                              class="btn btn--sm"
                                              style="margin-top: 4px; font-size: 11px;"
                                              @click=${()=>{const l={...a,__new__:""};e.onPatchModelEnv(e.selectedProvider,n.id,l)}}
                                            >
                                              + ${o("envVarsAdd")}
                                            </button>
                                          </div>
                                        `}
                                  </div>
                                </li>
                              `})}
                          </ul>
                        `}
                  </div>

                  <div class="row" style="margin-top: 16px; gap: 8px;">
                    <button
                      class="btn primary"
                      ?disabled=${e.saving||!e.formDirty}
                      @click=${e.onSave}
                    >
                      ${e.saving?o("commonSaving"):o("commonSave")}
                    </button>
                    <button class="btn" ?disabled=${e.saving} @click=${e.onCancel}>
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `:v}
  `}const Bb=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),is=e=>e.trim().toLowerCase(),Hb=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},mt=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},ko=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),a=s.indexOf(":");if(a>0){const i=s.slice(0,a),l=s.slice(a+1);return{key:i,value:l,raw:s}}return{value:s,raw:s}}),Kb=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),ml=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},fl=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},zb=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),jb=(e,t)=>{const n=is(t.value??"");if(!n)return!0;if(!t.key)return Kb(e).some(a=>a.includes(n));switch(is(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return ml(e).some(a=>a.includes(n));case"model":return fl(e).some(a=>a.includes(n));case"tool":return zb(e).some(a=>a.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const a=Hb(n);return a.test(e.key)||(e.sessionId?a.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return fl(e).length>0;case"provider":return ml(e).length>0;default:return!0}case"mintokens":{const a=mt(n);return a===null?!0:(e.usage?.totalTokens??0)>=a}case"maxtokens":{const a=mt(n);return a===null?!0:(e.usage?.totalTokens??0)<=a}case"mincost":{const a=mt(n);return a===null?!0:(e.usage?.totalCost??0)>=a}case"maxcost":{const a=mt(n);return a===null?!0:(e.usage?.totalCost??0)<=a}case"minmessages":{const a=mt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)>=a}case"maxmessages":{const a=mt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)<=a}default:return!0}},qb=(e,t)=>{const n=ko(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const i of n){if(!i.key)continue;const l=is(i.key);if(!Bb.has(l)){s.push(`Unknown filter: ${i.key}`);continue}if(i.value===""&&s.push(`Missing value for ${i.key}`),l==="has"){const d=new Set(["tools","errors","context","usage","model","provider"]);i.value&&!d.has(is(i.value))&&s.push(`Unknown has:${i.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(l)&&i.value&&mt(i.value)===null&&s.push(`Invalid number for ${i.key}`)}return{sessions:e.filter(i=>n.every(l=>jb(i,l))),warnings:s}};function Wb(e){const t=e.split(`
`),n=new Map,s=[];for(const d of t){const u=/^\[Tool:\s*([^\]]+)\]/.exec(d.trim());if(u){const p=u[1];n.set(p,(n.get(p)??0)+1);continue}d.trim().startsWith("[Tool Result]")||s.push(d)}const a=Array.from(n.entries()).toSorted((d,u)=>u[1]-d[1]),i=a.reduce((d,[,u])=>d+u,0),l=a.length>0?`Tools: ${a.map(([d,u])=>`${d}×${u}`).join(", ")} (${i} calls)`:"";return{tools:a,summary:l,cleanContent:s.join(`
`).trim()}}const Vb=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--text-muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--text-muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--text-muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--text-muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--text-muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--text-muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text-muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }
`,Gb=4;function dt(e){return Math.round(e/Gb)}function O(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function Qb(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function Jb(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const a of e){const i=a.usage;if(!i?.messageCounts||i.messageCounts.total===0)continue;const l=i.firstActivity??a.updatedAt,d=i.lastActivity??a.updatedAt;if(!l||!d)continue;const u=Math.min(l,d),p=Math.max(l,d),f=Math.max(p-u,1)/6e4;let h=u;for(;h<p;){const r=new Date(h),g=So(r,t),y=Ao(r,t),A=Math.min(y.getTime(),p),w=Math.max((A-h)/6e4,0)/f;n[g]+=i.messageCounts.errors*w,s[g]+=i.messageCounts.total*w,h=A+1}}return s.map((a,i)=>{const l=n[i],d=a>0?l/a:0;return{hour:i,rate:d,errors:l,msgs:a}}).filter(a=>a.msgs>0&&a.errors>0).toSorted((a,i)=>i.rate-a.rate).slice(0,5).map(a=>({label:Qb(a.hour),value:`${(a.rate*100).toFixed(2)}%`,sub:`${Math.round(a.errors)} ${o("usageErrors").toLowerCase()} · ${Math.round(a.msgs)} ${o("usageMessagesCount")}`}))}const Yb=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function So(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function Zb(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function Ao(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Xb(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let a=0,i=!1;for(const d of e){const u=d.usage;if(!u||!u.totalTokens||u.totalTokens<=0)continue;a+=u.totalTokens;const p=u.firstActivity??d.updatedAt,m=u.lastActivity??d.updatedAt;if(!p||!m)continue;i=!0;const f=Math.min(p,m),h=Math.max(p,m),g=Math.max(h-f,1)/6e4;let y=f;for(;y<h;){const A=new Date(y),S=So(A,t),w=Zb(A,t),T=Ao(A,t),C=Math.min(T.getTime(),h),E=Math.max((C-y)/6e4,0)/g;n[S]+=u.totalTokens*E,s[w]+=u.totalTokens*E,y=C+1}}const l=Yb.map((d,u)=>({label:d,tokens:s[u]}));return{hasData:i,totalTokens:a,hourTotals:n,weekdayTotals:l}}function ey(e,t,n,s){const a=Xb(e,t);if(!a.hasData)return c`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">${o("usageActivityByTime")}</div>
            <div class="usage-mosaic-sub">${o("usageMosaicSubNoData")}</div>
          </div>
          <div class="usage-mosaic-total">${O(0)} ${o("usageTokensUnit")}</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">${o("usageNoTimeline")}</div>
      </div>
    `;const i=Math.max(...a.hourTotals,1),l=Math.max(...a.weekdayTotals.map(d=>d.tokens),1);return c`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">${o("usageActivityByTime")}</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${o(t==="utc"?"usageTimeZoneUtc":"usageTimeZoneLocal")}.
          </div>
        </div>
        <div class="usage-mosaic-total">${O(a.totalTokens)} ${o("usageTokensUnit")}</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">${o("usageDayOfWeek")}</div>
          <div class="usage-daypart-grid">
            ${a.weekdayTotals.map(d=>{const u=Math.min(d.tokens/l,1),p=d.tokens>0?`rgba(255, 77, 77, ${.12+u*.6})`:"transparent";return c`
                <div class="usage-daypart-cell" style="background: ${p};">
                  <div class="usage-daypart-label">${d.label}</div>
                  <div class="usage-daypart-value">${O(d.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>${o("usageHours")}</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${a.hourTotals.map((d,u)=>{const p=Math.min(d/i,1),m=d>0?`rgba(255, 77, 77, ${.08+p*.7})`:"transparent",f=`${u}:00 · ${O(d)} ${o("usageTokensUnit")}`,h=p>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",r=n.includes(u);return c`
                <div
                  class="usage-hour-cell ${r?"selected":""}"
                  style="background: ${m}; border-color: ${h};"
                  title="${f}"
                  @click=${g=>s(u,g.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>${o("usageMidnight")}</span>
            <span>${o("usage4am")}</span>
            <span>${o("usage8am")}</span>
            <span>${o("usageNoon")}</span>
            <span>${o("usage4pm")}</span>
            <span>${o("usage8pm")}</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function V(e,t=2){return`$${e.toFixed(t)}`}function sa(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ty(e){return!e||e<=0?"0s":e>=6e4?`${Math.round(e/6e4)}m`:e>=1e3?`${Math.round(e/1e3)}s`:`${Math.round(e)}ms`}function rc(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,a]=t,i=new Date(Date.UTC(Number(n),Number(s)-1,Number(a)));return Number.isNaN(i.valueOf())?null:i}function cc(e){const t=rc(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function ny(e){const t=rc(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}function dc(e){if(!e||e<=0)return"—";const t=Math.round(e/1e3),n=t%60,s=Math.floor(t/60)%60,a=Math.floor(t/3600);return a>0?`${a}h ${s}m`:s>0?`${s}m ${n}s`:`${n}s`}function aa(e,t,n="text/plain"){const s=new Blob([t],{type:n}),a=URL.createObjectURL(s),i=document.createElement("a");i.href=a,i.download=e,i.click(),URL.revokeObjectURL(a)}function sy(e){return e.includes('"')||e.includes(",")||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function ls(e){return e.map(t=>t==null?"":sy(String(t))).join(",")}const Rt=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),Nt=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},ay=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,a=new Map,i=new Map,l=new Map,d=new Map,u=new Map,p=new Map,m=new Map,f={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const h of e){const r=h.usage;if(r){if(r.messageCounts&&(n.total+=r.messageCounts.total,n.user+=r.messageCounts.user,n.assistant+=r.messageCounts.assistant,n.toolCalls+=r.messageCounts.toolCalls,n.toolResults+=r.messageCounts.toolResults,n.errors+=r.messageCounts.errors),r.toolUsage)for(const g of r.toolUsage.tools)s.set(g.name,(s.get(g.name)??0)+g.count);if(r.modelUsage&&r.modelUsage.length>0){let g=!1;for(const y of r.modelUsage){const A=y.provider&&y.provider!=="unknown"?y.provider:h.modelProvider??h.providerOverride??"unknown",S=y.model&&y.model!=="unknown"?y.model:h.model??h.modelOverride??"unknown",w=y.totals.totalTokens===0&&r.totalTokens>0&&!g?{input:r.input,output:r.output,cacheRead:r.cacheRead,cacheWrite:r.cacheWrite,totalTokens:r.totalTokens,totalCost:r.totalCost,inputCost:r.inputCost??0,outputCost:r.outputCost??0,cacheReadCost:r.cacheReadCost??0,cacheWriteCost:r.cacheWriteCost??0,missingCostEntries:r.missingCostEntries??0}:y.totals;y.totals.totalTokens===0&&r.totalTokens>0&&(g=!0);const T=`${A}::${S}`,C=a.get(T)??{provider:A,model:S,count:0,totals:Rt()};C.count+=y.count,Nt(C.totals,w),a.set(T,C);const M=i.get(A)??{provider:A,model:void 0,count:0,totals:Rt()};M.count+=y.count,Nt(M.totals,w),i.set(A,M)}}else if(r.totalTokens>0){const g=h.modelProvider??h.providerOverride??"unknown",y=h.model??h.modelOverride??"unknown",A=`${g}::${y}`,S=a.get(A)??{provider:g,model:y,count:0,totals:Rt()};S.count+=1,Nt(S.totals,r),a.set(A,S);const w=i.get(g)??{provider:g,model:void 0,count:0,totals:Rt()};w.count+=1,Nt(w.totals,r),i.set(g,w)}if(r.latency){const{count:g,avgMs:y,minMs:A,maxMs:S,p95Ms:w}=r.latency;g>0&&(f.count+=g,f.sum+=y*g,f.min=Math.min(f.min,A),f.max=Math.max(f.max,S),f.p95Max=Math.max(f.p95Max,w))}if(h.agentId){const g=l.get(h.agentId)??Rt();Nt(g,r),l.set(h.agentId,g)}if(h.channel){const g=d.get(h.channel)??Rt();Nt(g,r),d.set(h.channel,g)}for(const g of r.dailyBreakdown??[]){const y=u.get(g.date)??{date:g.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};y.tokens+=g.tokens,y.cost+=g.cost,u.set(g.date,y)}for(const g of r.dailyMessageCounts??[]){const y=u.get(g.date)??{date:g.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};y.messages+=g.total,y.toolCalls+=g.toolCalls,y.errors+=g.errors,u.set(g.date,y)}for(const g of r.dailyLatency??[]){const y=p.get(g.date)??{date:g.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};y.count+=g.count,y.sum+=g.avgMs*g.count,y.min=Math.min(y.min,g.minMs),y.max=Math.max(y.max,g.maxMs),y.p95Max=Math.max(y.p95Max,g.p95Ms),p.set(g.date,y)}for(const g of r.dailyModelUsage??[]){const y=g.provider&&g.provider!=="unknown"?g.provider:h.modelProvider??h.providerOverride??"unknown",A=g.model&&g.model!=="unknown"?g.model:h.model??h.modelOverride??"unknown",S=`${g.date}::${y}::${A}`,w=m.get(S)??{date:g.date,provider:y,model:A,tokens:0,cost:0,count:0};w.tokens+=g.tokens,w.cost+=g.cost,w.count+=g.count,m.set(S,w)}}}return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((h,r)=>h+r,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([h,r])=>({name:h,count:r})).toSorted((h,r)=>r.count-h.count)},byModel:Array.from(a.values()).toSorted((h,r)=>r.totals.totalCost-h.totals.totalCost),byProvider:Array.from(i.values()).toSorted((h,r)=>r.totals.totalCost-h.totals.totalCost),byAgent:Array.from(l.entries()).map(([h,r])=>({agentId:h,totals:r})).toSorted((h,r)=>r.totals.totalCost-h.totals.totalCost),byChannel:Array.from(d.entries()).map(([h,r])=>({channel:h,totals:r})).toSorted((h,r)=>r.totals.totalCost-h.totals.totalCost),latency:f.count>0?{count:f.count,avgMs:f.sum/f.count,minMs:f.min===Number.POSITIVE_INFINITY?0:f.min,maxMs:f.max,p95Ms:f.p95Max}:void 0,dailyLatency:Array.from(p.values()).map(h=>({date:h.date,count:h.count,avgMs:h.count?h.sum/h.count:0,minMs:h.min===Number.POSITIVE_INFINITY?0:h.min,maxMs:h.max,p95Ms:h.p95Max})).toSorted((h,r)=>h.date.localeCompare(r.date)),modelDaily:Array.from(m.values()).toSorted((h,r)=>h.date.localeCompare(r.date)||r.cost-h.cost),daily:Array.from(u.values()).toSorted((h,r)=>h.date.localeCompare(r.date))}},oy=(e,t,n)=>{let s=0,a=0;for(const m of e){const f=m.usage?.durationMs??0;f>0&&(s+=f,a+=1)}const i=a?s/a:0,l=t&&s>0?t.totalTokens/(s/6e4):void 0,d=t&&s>0?t.totalCost/(s/6e4):void 0,u=n.messages.total?n.messages.errors/n.messages.total:0,p=n.daily.filter(m=>m.messages>0&&m.errors>0).map(m=>({date:m.date,errors:m.errors,messages:m.messages,rate:m.errors/m.messages})).toSorted((m,f)=>f.rate-m.rate||f.errors-m.errors)[0];return{durationSumMs:s,durationCount:a,avgDurationMs:i,throughputTokensPerMin:l,throughputCostPerMin:d,errorRate:u,peakErrorDay:p}},iy=e=>{const t=[ls(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(ls([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},ly=e=>{const t=[ls(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(ls([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},ry=(e,t,n)=>{const s=e.trim();if(!s)return[];const a=s.length?s.split(/\s+/):[],i=a.length?a[a.length-1]:"",[l,d]=i.includes(":")?[i.slice(0,i.indexOf(":")),i.slice(i.indexOf(":")+1)]:["",""],u=l.toLowerCase(),p=d.toLowerCase(),m=w=>{const T=new Set;for(const C of w)C&&T.add(C);return Array.from(T)},f=m(t.map(w=>w.agentId)).slice(0,6),h=m(t.map(w=>w.channel)).slice(0,6),r=m([...t.map(w=>w.modelProvider),...t.map(w=>w.providerOverride),...n?.byProvider.map(w=>w.provider)??[]]).slice(0,6),g=m([...t.map(w=>w.model),...n?.byModel.map(w=>w.model)??[]]).slice(0,6),y=m(n?.tools.tools.map(w=>w.name)??[]).slice(0,6);if(!u)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const A=[],S=(w,T)=>{for(const C of T)(!p||C.toLowerCase().includes(p))&&A.push({label:`${w}:${C}`,value:`${w}:${C}`})};switch(u){case"agent":S("agent",f);break;case"channel":S("channel",h);break;case"provider":S("provider",r);break;case"model":S("model",g);break;case"tool":S("tool",y);break;case"has":["errors","tools","context","usage","model","provider"].forEach(w=>{(!p||w.includes(p))&&A.push({label:`has:${w}`,value:`has:${w}`})});break}return A},cy=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},ft=e=>e.trim().toLowerCase(),dy=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),a=s[s.length-1]??"",i=t.includes(":")?t.split(":")[0]:null,l=a.includes(":")?a.split(":")[0]:null;return a.endsWith(":")&&i&&l===i?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},hl=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(a=>a!==t);return s.length?`${s.join(" ")} `:""},vl=(e,t,n)=>{const s=ft(t),i=[...ko(e).filter(l=>ft(l.key??"")!==s).map(l=>l.raw),...n.map(l=>`${t}:${l}`)];return i.length?`${i.join(" ")} `:""};function he(e,t){return t===0?0:e/t*100}function uy(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:he(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:he(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:he(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:he(e.cacheWriteCost||0,t)},totalCost:t}}function gy(e,t,n,s,a,i,l,d){if(!(e.length>0||t.length>0||n.length>0))return v;const p=n.length===1?s.find(g=>g.key===n[0]):null,m=p?(p.label||p.key).slice(0,20)+((p.label||p.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} ${o("usageSessionsCount")}`,f=p?p.label||p.key:n.length===1?n[0]:n.join(", "),h=e.length===1?e[0]:`${e.length} days`,r=t.length===1?`${t[0]}:00`:`${t.length} hours`;return c`
    <div class="active-filters">
      ${e.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">${o("usageDays")}: ${h}</span>
              <button class="filter-chip-remove" @click=${a} title=${o("usageRemoveFilter")}>×</button>
            </div>
          `:v}
      ${t.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">${o("usageHoursLabel")}: ${r}</span>
              <button class="filter-chip-remove" @click=${i} title=${o("usageRemoveFilter")}>×</button>
            </div>
          `:v}
      ${n.length>0?c`
            <div class="filter-chip" title="${f}">
              <span class="filter-chip-label">${o("usageSession")}: ${m}</span>
              <button class="filter-chip-remove" @click=${l} title=${o("usageRemoveFilter")}>×</button>
            </div>
          `:v}
      ${(e.length>0||t.length>0)&&n.length>0?c`
            <button class="btn btn-sm filter-clear-btn" @click=${d}>
              ${o("usageClearFilters")}
            </button>
          `:v}
    </div>
  `}function py(e,t,n,s,a,i){if(!e.length)return c`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">${o("usageDailyUsage")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${o("usageNoData")}</div>
      </div>
    `;const l=n==="tokens",d=e.map(f=>l?f.totalTokens:f.totalCost),u=Math.max(...d,l?1:1e-4),p=e.length>30?12:e.length>20?18:e.length>14?24:32,m=e.length<=14;return c`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>a("total")}
          >
            ${o("usageTotal")}
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>a("by-type")}
          >
            ${o("usageByType")}
          </button>
        </div>
        <div class="card-title">${o(l?"usageDailyToken":"usageDailyCost")}</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${p}px">
          ${e.map((f,h)=>{const g=d[h]/u*100,y=t.includes(f.date),A=cc(f.date),S=e.length>20?String(parseInt(f.date.slice(8),10)):A,w=e.length>20?"font-size: 8px":"",T=s==="by-type"?l?[{value:f.output,class:"output"},{value:f.input,class:"input"},{value:f.cacheWrite,class:"cache-write"},{value:f.cacheRead,class:"cache-read"}]:[{value:f.outputCost??0,class:"output"},{value:f.inputCost??0,class:"input"},{value:f.cacheWriteCost??0,class:"cache-write"},{value:f.cacheReadCost??0,class:"cache-read"}]:[],C=s==="by-type"?l?[`Output ${O(f.output)}`,`Input ${O(f.input)}`,`Cache write ${O(f.cacheWrite)}`,`Cache read ${O(f.cacheRead)}`]:[`Output ${V(f.outputCost??0)}`,`Input ${V(f.inputCost??0)}`,`Cache write ${V(f.cacheWriteCost??0)}`,`Cache read ${V(f.cacheReadCost??0)}`]:[],M=l?O(f.totalTokens):V(f.totalCost);return c`
              <div
                class="daily-bar-wrapper ${y?"selected":""}"
                @click=${E=>i(f.date,E.shiftKey)}
              >
                ${s==="by-type"?c`
                        <div
                          class="daily-bar"
                          style="height: ${g.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const E=T.reduce((I,K)=>I+K.value,0)||1;return T.map(I=>c`
                                <div
                                  class="cost-segment ${I.class}"
                                  style="height: ${I.value/E*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:c`
                        <div class="daily-bar" style="height: ${g.toFixed(1)}%"></div>
                      `}
                ${m?c`<div class="daily-bar-total">${M}</div>`:v}
                <div class="daily-bar-label" style="${w}">${S}</div>
                <div class="daily-bar-tooltip">
                  <strong>${ny(f.date)}</strong><br />
                  ${O(f.totalTokens)} ${o("usageTokensUnit")}<br />
                  ${V(f.totalCost)}
                  ${C.length?c`${C.map(E=>c`<div>${E}</div>`)}`:v}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function my(e,t){const n=uy(e),s=t==="tokens",a=e.totalTokens||1,i={output:he(e.output,a),input:he(e.input,a),cacheWrite:he(e.cacheWrite,a),cacheRead:he(e.cacheRead,a)};return c`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${o(s?"usageTokensByType":"usageCostByType")}</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?i.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?O(e.output):V(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?i.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?O(e.input):V(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?i.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?O(e.cacheWrite):V(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?i.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?O(e.cacheRead):V(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>${o("usageOutput")} ${s?O(e.output):V(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>${o("usageInput")} ${s?O(e.input):V(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>${o("usageCacheWrite")} ${s?O(e.cacheWrite):V(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>${o("usageCacheRead")} ${s?O(e.cacheRead):V(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        ${o("usageTotalLabel")}: ${s?O(e.totalTokens):V(e.totalCost)}
      </div>
    </div>
  `}function ht(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-list">
                ${t.map(s=>c`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?c`<span class="usage-list-sub">${s.sub}</span>`:v}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function bl(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-error-list">
                ${t.map(s=>c`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?c`<div class="usage-error-sub">${s.sub}</div>`:v}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function fy(e,t,n,s,a,i,l){if(!e)return v;const d=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,u=t.messages.total?e.totalCost/t.messages.total:0,p=e.input+e.cacheRead,m=p>0?e.cacheRead/p:0,f=p>0?`${(m*100).toFixed(1)}%`:"—",h=n.errorRate*100,r=n.throughputTokensPerMin!==void 0?`${O(Math.round(n.throughputTokensPerMin))} tok/min`:"—",g=n.throughputCostPerMin!==void 0?`${V(n.throughputCostPerMin,4)} / min`:"—",y=n.durationCount>0?ty(n.avgDurationMs):"—",A=o("usageCacheHitRateHint"),S=o("usageErrorRateHint"),w=o("usageThroughputHint"),T=o("usageTokensHint"),C=o(s?"usageCostHintMissing":"usageCostHint"),M=t.daily.filter(_=>_.messages>0&&_.errors>0).map(_=>{const z=_.errors/_.messages;return{label:cc(_.date),value:`${(z*100).toFixed(2)}%`,sub:`${_.errors} ${o("usageErrors").toLowerCase()} · ${_.messages} ${o("usageMessagesCount")} · ${O(_.tokens)}`,rate:z}}).toSorted((_,z)=>z.rate-_.rate).slice(0,5).map(({rate:_,...z})=>z),E=t.byModel.filter(_=>(_.count??0)>0||(_.totals?.totalTokens??0)>0).slice(0,5).map(_=>({label:_.model??"unknown",value:V(_.totals.totalCost),sub:`${O(_.totals.totalTokens)} · ${_.count} ${o("usageMessagesCount")}`})),I=t.byProvider.filter(_=>(_.count??0)>0||(_.totals?.totalTokens??0)>0).slice(0,5).map(_=>({label:_.provider??"unknown",value:V(_.totals.totalCost),sub:`${O(_.totals.totalTokens)} · ${_.count} ${o("usageMessagesCount")}`})),K=t.tools.tools.slice(0,6).map(_=>({label:_.name,value:`${_.count}`,sub:o("usageCalls")})),Z=t.byAgent.slice(0,5).map(_=>({label:_.agentId,value:V(_.totals.totalCost),sub:O(_.totals.totalTokens)})),ie=t.byChannel.slice(0,5).map(_=>({label:_.channel,value:V(_.totals.totalCost),sub:O(_.totals.totalTokens)}));return c`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">${o("usageOverview")}</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageMessages")}
            <span class="usage-summary-hint" title=${o("usageMessagesHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} ${o("usageUser").toLowerCase()} · ${t.messages.assistant} ${o("usageAssistant").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageToolCalls")}
            <span class="usage-summary-hint" title=${o("usageToolCallsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} ${o("usageToolsUsed")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageErrors")}
            <span class="usage-summary-hint" title=${o("usageErrorsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} ${o("usageToolResults")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageAvgTokensMsg")}
            <span class="usage-summary-hint" title=${T}>?</span>
          </div>
          <div class="usage-summary-value">${O(d)}</div>
          <div class="usage-summary-sub">${o("usageAcrossMessages")} ${t.messages.total||0} ${o("usageMessagesCount")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageAvgCostMsg")}
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value">${V(u,4)}</div>
          <div class="usage-summary-sub">${V(e.totalCost)} ${o("usageTotalLabel").toLowerCase()}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageSessionsCard")}
            <span class="usage-summary-hint" title=${o("usageSessionsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${i}</div>
          <div class="usage-summary-sub">${o("usageInRange")} ${l}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageThroughput")}
            <span class="usage-summary-hint" title=${w}>?</span>
          </div>
          <div class="usage-summary-value">${r}</div>
          <div class="usage-summary-sub">${g}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageErrorRate")}
            <span class="usage-summary-hint" title=${S}>?</span>
          </div>
          <div class="usage-summary-value ${h>5?"bad":h>1?"warn":"good"}">${h.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} ${o("usageErrors").toLowerCase()} · ${y} ${o("usageAvg")} ${o("usageSession").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${o("usageCacheHitRate")}
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value ${m>.6?"good":m>.3?"warn":"bad"}">${f}</div>
          <div class="usage-summary-sub">
            ${O(e.cacheRead)} ${o("usageCached")} · ${O(p)} ${o("usagePrompt")}
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${ht(o("usageTopModels"),E,o("usageNoModelData"))}
        ${ht(o("usageTopProviders"),I,o("usageNoProviderData"))}
        ${ht(o("usageTopTools"),K,o("usageNoToolCalls"))}
        ${ht(o("usageTopAgents"),Z,o("usageNoAgentData"))}
        ${ht(o("usageTopChannels"),ie,o("usageNoChannelData"))}
        ${bl(o("usagePeakErrorDays"),M,o("usageNoErrorData"))}
        ${bl(o("usagePeakErrorHours"),a,o("usageNoErrorData"))}
      </div>
    </section>
  `}function hy(e,t,n,s,a,i,l,d,u,p,m,f,h,r,g){const y=P=>h.includes(P),A=P=>{const B=P.label||P.key;return B.startsWith("agent:")&&B.includes("?token=")?B.slice(0,B.indexOf("?token=")):B},S=async P=>{const B=A(P);try{await navigator.clipboard.writeText(B)}catch{}},w=P=>{const B=[];return y("channel")&&P.channel&&B.push(`channel:${P.channel}`),y("agent")&&P.agentId&&B.push(`agent:${P.agentId}`),y("provider")&&(P.modelProvider||P.providerOverride)&&B.push(`provider:${P.modelProvider??P.providerOverride}`),y("model")&&P.model&&B.push(`model:${P.model}`),y("messages")&&P.usage?.messageCounts&&B.push(`msgs:${P.usage.messageCounts.total}`),y("tools")&&P.usage?.toolUsage&&B.push(`tools:${P.usage.toolUsage.totalCalls}`),y("errors")&&P.usage?.messageCounts&&B.push(`errors:${P.usage.messageCounts.errors}`),y("duration")&&P.usage?.durationMs&&B.push(`dur:${dc(P.usage.durationMs)}`),B},T=P=>{const B=P.usage;if(!B)return 0;if(n.length>0&&B.dailyBreakdown&&B.dailyBreakdown.length>0){const le=B.dailyBreakdown.filter(re=>n.includes(re.date));return s?le.reduce((re,ee)=>re+ee.tokens,0):le.reduce((re,ee)=>re+ee.cost,0)}return s?B.totalTokens??0:B.totalCost??0},C=[...e].toSorted((P,B)=>{switch(a){case"recent":return(B.updatedAt??0)-(P.updatedAt??0);case"messages":return(B.usage?.messageCounts?.total??0)-(P.usage?.messageCounts?.total??0);case"errors":return(B.usage?.messageCounts?.errors??0)-(P.usage?.messageCounts?.errors??0);case"cost":return T(B)-T(P);default:return T(B)-T(P)}}),M=i==="asc"?C.toReversed():C,E=M.reduce((P,B)=>P+T(B),0),I=M.length?E/M.length:0,K=M.reduce((P,B)=>P+(B.usage?.messageCounts?.errors??0),0),Z=new Set(t),ie=M.filter(P=>Z.has(P.key)),_=ie.length,z=new Map(M.map(P=>[P.key,P])),pe=l.map(P=>z.get(P)).filter(P=>!!P);return c`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">${o("usageSessionsCard")}</div>
        <div class="sessions-card-count">
          ${e.length} ${o("usageShown")}${r!==e.length?` · ${r} ${o("usageTotalSessions")}`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?O(I):V(I)} ${o("usageAvg")}</span>
          <span>${K} ${o("usageErrors").toLowerCase()}</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${d==="all"?"active":""}"
            @click=${()=>f("all")}
          >
            ${o("usageAll")}
          </button>
          <button
            class="toggle-btn ${d==="recent"?"active":""}"
            @click=${()=>f("recent")}
          >
            ${o("usageRecentlyViewed")}
          </button>
        </div>
        <label class="sessions-sort">
          <span>${o("usageSort")}</span>
          <select
            @change=${P=>p(P.target.value)}
          >
            <option value="cost" ?selected=${a==="cost"}>${o("usageCost")}</option>
            <option value="errors" ?selected=${a==="errors"}>${o("usageErrorsCol")}</option>
            <option value="messages" ?selected=${a==="messages"}>${o("usageMessagesCol")}</option>
            <option value="recent" ?selected=${a==="recent"}>${o("usageRecent")}</option>
            <option value="tokens" ?selected=${a==="tokens"}>${o("usageTokensCol")}</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>m(i==="desc"?"asc":"desc")}
          title=${o(i==="desc"?"usageDescending":"usageAscending")}
        >
          ${i==="desc"?"↓":"↑"}
        </button>
        ${_>0?c`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${g}>
                  ${o("usageClearSelection")}
                </button>
              `:v}
      </div>
      ${d==="recent"?pe.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">${o("usageNoRecentSessions")}</div>
              `:c`
                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
                  ${pe.map(P=>{const B=T(P),le=Z.has(P.key),re=A(P),ee=w(P);return c`
                      <div
                        class="session-bar-row ${le?"selected":""}"
                        @click=${ae=>u(P.key,ae.shiftKey)}
                        title="${P.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${re}</div>
                          ${ee.length>0?c`<div class="session-bar-meta">${ee.join(" · ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${o("usageCopySessionName")}
                            @click=${ae=>{ae.stopPropagation(),S(P)}}
                          >
                            ${o("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?O(B):V(B)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              `:e.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">${o("usageNoSessionsInRange")}</div>
              `:c`
                <div class="session-bars">
                  ${M.slice(0,50).map(P=>{const B=T(P),le=t.includes(P.key),re=A(P),ee=w(P);return c`
                      <div
                        class="session-bar-row ${le?"selected":""}"
                        @click=${ae=>u(P.key,ae.shiftKey)}
                        title="${P.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${re}</div>
                          ${ee.length>0?c`<div class="session-bar-meta">${ee.join(" · ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${o("usageCopySessionName")}
                            @click=${ae=>{ae.stopPropagation(),S(P)}}
                          >
                            ${o("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?O(B):V(B)}</div>
                        </div>
                      </div>
                    `})}
                  ${e.length>50?c`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} ${o("usageMoreSessions")}</div>`:v}
                </div>
              `}
      ${_>1?c`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">${o("usageSelectedCount")} (${_})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${ie.map(P=>{const B=T(P),le=A(P),re=w(P);return c`
                      <div
                        class="session-bar-row selected"
                        @click=${ee=>u(P.key,ee.shiftKey)}
                        title="${P.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${le}</div>
                          ${re.length>0?c`<div class="session-bar-meta">${re.join(" · ")}</div>`:v}
                        </div>
                  <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${o("usageCopySessionName")}
                            @click=${ee=>{ee.stopPropagation(),S(P)}}
                          >
                            ${o("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?O(B):V(B)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:v}
    </div>
  `}function vy(){return v}function by(e){const t=e.usage;if(!t)return c`
      <div class="muted">No usage data for this session.</div>
    `;const n=l=>l?new Date(l).toLocaleString():"—",s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);const a=t.toolUsage?.tools.slice(0,6).map(l=>({label:l.name,value:`${l.count}`,sub:o("usageCalls")}))??[],i=t.modelUsage?.slice(0,6).map(l=>({label:l.model??"unknown",value:V(l.totals.totalCost),sub:O(l.totals.totalTokens)}))??[];return c`
    ${s.length>0?c`<div class="usage-badges">${s.map(l=>c`<span class="usage-badge">${l}</span>`)}</div>`:v}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">${o("usageMessages")}</div>
        <div class="session-summary-value">${t.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.user??0} ${o("usageUser").toLowerCase()} · ${t.messageCounts?.assistant??0} ${o("usageAssistant").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${o("usageToolCalls")}</div>
        <div class="session-summary-value">${t.toolUsage?.totalCalls??0}</div>
        <div class="session-summary-meta">${t.toolUsage?.uniqueTools??0} ${o("usageToolsLabel").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${o("usageErrors")}</div>
        <div class="session-summary-value">${t.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.toolResults??0} ${o("usageToolResults")}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${o("usageDuration")}</div>
        <div class="session-summary-value">${dc(t.durationMs)}</div>
        <div class="session-summary-meta">${n(t.firstActivity)} → ${n(t.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${ht(o("usageTopTools"),a,o("usageNoToolCalls"))}
      ${ht(o("usageModelMix"),i,o("usageNoModelData"))}
    </div>
  `}function yy(e,t,n,s,a,i,l,d,u,p,m,f,h,r,g,y,A,S,w,T,C,M,E){const I=e.label||e.key,K=I.length>50?I.slice(0,50)+"…":I,Z=e.usage;return c`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">${K}</div>
        </div>
        <div class="session-detail-stats">
          ${Z?c`
            <span><strong>${O(Z.totalTokens)}</strong> ${o("usageTokensUnit")}</span>
            <span><strong>${V(Z.totalCost)}</strong></span>
          `:v}
        </div>
        <button class="session-close-btn" @click=${E} title=${o("usageCloseSessionDetails")}>×</button>
      </div>
      <div class="session-detail-content">
        ${by(e)}
        <div class="session-detail-row">
          ${xy(t,n,s,a,i,l,d,u,p)}
        </div>
        <div class="session-detail-bottom">
          ${wy(m,f,h,r,g,y,A,S,w,T)}
          ${$y(e.contextWeight,Z,C,M)}
        </div>
      </div>
    </div>
  `}function xy(e,t,n,s,a,i,l,d,u){if(t)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${o("usageLoading")}</div>
      </div>
    `;if(!e||e.points.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${o("usageNoTimelineData")}</div>
      </div>
    `;let p=e.points;if(l||d||u&&u.length>0){const z=l?new Date(l+"T00:00:00").getTime():0,pe=d?new Date(d+"T23:59:59").getTime():1/0;p=e.points.filter(P=>{if(P.timestamp<z||P.timestamp>pe)return!1;if(u&&u.length>0){const B=new Date(P.timestamp),le=`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`;return u.includes(le)}return!0})}if(p.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${o("usageNoDataInRange")}</div>
      </div>
    `;let m=0,f=0,h=0,r=0,g=0,y=0;p=p.map(z=>(m+=z.totalTokens,f+=z.cost,h+=z.output,r+=z.input,g+=z.cacheRead,y+=z.cacheWrite,{...z,cumulativeTokens:m,cumulativeCost:f}));const A=400,S=80,w={top:16,right:10,bottom:20,left:40},T=A-w.left-w.right,C=S-w.top-w.bottom,M=n==="cumulative",E=n==="per-turn"&&a==="by-type",I=h+r+g+y,K=p.map(z=>M?z.cumulativeTokens:E?z.input+z.output+z.cacheRead+z.cacheWrite:z.totalTokens),Z=Math.max(...K,1),ie=Math.max(2,Math.min(8,T/p.length*.7)),_=Math.max(1,(T-ie*p.length)/(p.length-1||1));return c`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 13px;">${o("usageUsageOverTime")}</div>
        <div class="timeseries-controls">
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${M?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              ${o("usagePerTurn")}
            </button>
            <button
              class="toggle-btn ${M?"active":""}"
              @click=${()=>s("cumulative")}
            >
              ${o("usageCumulative")}
            </button>
          </div>
          ${M?v:c`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${a==="total"?"active":""}"
                      @click=${()=>i("total")}
                    >
                      ${o("usageTotal")}
                    </button>
                    <button
                      class="toggle-btn ${a==="by-type"?"active":""}"
                      @click=${()=>i("by-type")}
                    >
                      ${o("usageByType")}
                    </button>
                  </div>
                `}
        </div>
      </div>
      <svg viewBox="0 0 ${A} ${S+15}" class="timeseries-svg" style="width: 100%; height: auto;">
        <!-- Y axis -->
        <line x1="${w.left}" y1="${w.top}" x2="${w.left}" y2="${w.top+C}" stroke="var(--border)" />
        <!-- X axis -->
        <line x1="${w.left}" y1="${w.top+C}" x2="${A-w.right}" y2="${w.top+C}" stroke="var(--border)" />
        <!-- Y axis labels -->
        <text x="${w.left-4}" y="${w.top+4}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">${O(Z)}</text>
        <text x="${w.left-4}" y="${w.top+C}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">0</text>
        <!-- X axis labels (first and last) -->
        ${p.length>0?In`
          <text x="${w.left}" y="${w.top+C+12}" text-anchor="start" style="font-size: 8px; fill: var(--text-muted)">${new Date(p[0].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
          <text x="${A-w.right}" y="${w.top+C+12}" text-anchor="end" style="font-size: 8px; fill: var(--text-muted)">${new Date(p[p.length-1].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
        `:v}
        <!-- Bars -->
        ${p.map((z,pe)=>{const P=K[pe],B=w.left+pe*(ie+_),le=P/Z*C,re=w.top+C-le,ae=[new Date(z.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${O(P)} ${o("usageTokensUnit")}`];E&&(ae.push(`Output ${O(z.output)}`),ae.push(`Input ${O(z.input)}`),ae.push(`Cache write ${O(z.cacheWrite)}`),ae.push(`Cache read ${O(z.cacheRead)}`));const L=ae.join(" · ");if(!E)return In`<rect x="${B}" y="${re}" width="${ie}" height="${le}" class="ts-bar" rx="1" style="cursor: pointer;"><title>${L}</title></rect>`;const R=[{value:z.output,class:"output"},{value:z.input,class:"input"},{value:z.cacheWrite,class:"cache-write"},{value:z.cacheRead,class:"cache-read"}];let N=w.top+C;return In`
            ${R.map(j=>{if(j.value<=0||P<=0)return v;const Se=le*(j.value/P);return N-=Se,In`<rect x="${B}" y="${N}" width="${ie}" height="${Se}" class="ts-bar ${j.class}" rx="1"><title>${L}</title></rect>`})}
          `})}
      </svg>
      <div class="timeseries-summary">${p.length} ${o("usageMessagesCount")} · ${O(m)} ${o("usageTokensUnit")} · ${V(f)}</div>
      ${E?c`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px;">${o("usageTokensByType")}</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${he(h,I).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${he(r,I).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${he(y,I).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${he(g,I).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${O(h)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${O(r)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${O(y)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${O(g)}
                  </div>
                </div>
                <div class="cost-breakdown-total">${o("usageTotalLabel")}: ${O(I)}</div>
              </div>
            `:v}
    </div>
  `}function $y(e,t,n,s){if(!e)return c`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">${o("usageNoContextData")}</div>
      </div>
    `;const a=dt(e.systemPrompt.chars),i=dt(e.skills.promptChars),l=dt(e.tools.listChars+e.tools.schemaChars),d=dt(e.injectedWorkspaceFiles.reduce((T,C)=>T+C.injectedChars,0)),u=a+i+l+d;let p="";if(t&&t.totalTokens>0){const T=t.input+t.cacheRead;T>0&&(p=`~${Math.min(u/T*100,100).toFixed(0)}% of input`)}const m=e.skills.entries.toSorted((T,C)=>C.blockChars-T.blockChars),f=e.tools.entries.toSorted((T,C)=>C.summaryChars+C.schemaChars-(T.summaryChars+T.schemaChars)),h=e.injectedWorkspaceFiles.toSorted((T,C)=>C.injectedChars-T.injectedChars),r=4,g=n,y=g?m:m.slice(0,r),A=g?f:f.slice(0,r),S=g?h:h.slice(0,r),w=m.length>r||f.length>r||h.length>r;return c`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 13px;">${o("usageSystemPromptBreakdown")}</div>
        ${w?c`<button class="context-expand-btn" @click=${s}>
                ${o(g?"usageCollapseAll":"usageExpandAll")}
              </button>`:v}
      </div>
      <p class="context-weight-desc">${p||o("usageBaseContextPerMessage")}</p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${he(a,u).toFixed(1)}%" title="System: ~${O(a)}"></div>
        <div class="context-segment skills" style="width: ${he(i,u).toFixed(1)}%" title="Skills: ~${O(i)}"></div>
        <div class="context-segment tools" style="width: ${he(l,u).toFixed(1)}%" title="Tools: ~${O(l)}"></div>
        <div class="context-segment files" style="width: ${he(d,u).toFixed(1)}%" title="Files: ~${O(d)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${O(a)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${O(i)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${O(l)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${O(d)}</span>
      </div>
      <div class="context-total">${o("usageTotalLabel")}: ~${O(u)}</div>
      <div class="context-breakdown-grid">
        ${m.length>0?(()=>{const T=m.length-y.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${o("usageSkills")} (${m.length})</div>
                    <div class="context-breakdown-list">
                      ${y.map(C=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${O(dt(C.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${T>0?c`<div class="context-breakdown-more">+${T} ${o("usageMoreSessions")}</div>`:v}
                  </div>
                `})():v}
        ${f.length>0?(()=>{const T=f.length-A.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${o("usageToolsLabel")} (${f.length})</div>
                    <div class="context-breakdown-list">
                      ${A.map(C=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${O(dt(C.summaryChars+C.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${T>0?c`<div class="context-breakdown-more">+${T} ${o("usageMoreSessions")}</div>`:v}
                  </div>
                `})():v}
        ${h.length>0?(()=>{const T=h.length-S.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${o("usageFiles")} (${h.length})</div>
                    <div class="context-breakdown-list">
                      ${S.map(C=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${O(dt(C.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${T>0?c`<div class="context-breakdown-more">+${T} ${o("usageMoreSessions")}</div>`:v}
                  </div>
                `})():v}
      </div>
    </div>
  `}function wy(e,t,n,s,a,i,l,d,u,p){if(t)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">${o("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${o("usageLoading")}</div>
      </div>
    `;if(!e||e.length===0)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">${o("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${o("usageNoMessages")}</div>
      </div>
    `;const m=a.query.trim().toLowerCase(),f=e.map(S=>{const w=Wb(S.content),T=w.cleanContent||S.content;return{log:S,toolInfo:w,cleanContent:T}}),h=Array.from(new Set(f.flatMap(S=>S.toolInfo.tools.map(([w])=>w)))).toSorted((S,w)=>S.localeCompare(w)),r=f.filter(S=>!(a.roles.length>0&&!a.roles.includes(S.log.role)||a.hasTools&&S.toolInfo.tools.length===0||a.tools.length>0&&!S.toolInfo.tools.some(([T])=>a.tools.includes(T))||m&&!S.cleanContent.toLowerCase().includes(m))),g=a.roles.length>0||a.tools.length>0||a.hasTools||m?`${r.length} of ${e.length}`:`${e.length}`,y=new Set(a.roles),A=new Set(a.tools);return c`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>${o("usageConversation")} <span style="font-weight: normal; color: var(--text-muted);">(${g} ${o("usageMessagesCount")})</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${o(n?"usageCollapseAll":"usageExpandAll")}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${S=>i(Array.from(S.target.selectedOptions).map(w=>w.value))}
        >
          <option value="user" ?selected=${y.has("user")}>${o("usageUser")}</option>
          <option value="assistant" ?selected=${y.has("assistant")}>${o("usageAssistant")}</option>
          <option value="tool" ?selected=${y.has("tool")}>${o("usageTool")}</option>
          <option value="toolResult" ?selected=${y.has("toolResult")}>${o("usageToolResult")}</option>
        </select>
        <select
          multiple
          size="4"
          @change=${S=>l(Array.from(S.target.selectedOptions).map(w=>w.value))}
        >
          ${h.map(S=>c`<option value=${S} ?selected=${A.has(S)}>${S}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${a.hasTools}
            @change=${S=>d(S.target.checked)}
          />
          ${o("usageHasTools")}
        </label>
        <input
          type="text"
          placeholder=${o("usageSearchConversation")}
          .value=${a.query}
          @input=${S=>u(S.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${p}>
          ${o("usageClear")}
        </button>
      </div>
      <div class="session-logs-list">
        ${r.map(S=>{const{log:w,toolInfo:T,cleanContent:C}=S,M=w.role==="user"?"user":"assistant",E=w.role==="user"?o("usageUser"):w.role==="assistant"?o("usageAssistant"):o("usageTool");return c`
          <div class="session-log-entry ${M}">
            <div class="session-log-meta">
              <span class="session-log-role">${E}</span>
              <span>${new Date(w.timestamp).toLocaleString()}</span>
              ${w.tokens?c`<span>${O(w.tokens)}</span>`:v}
            </div>
            <div class="session-log-content">${C}</div>
            ${T.tools.length>0?c`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${T.summary}</summary>
                      <div class="session-log-tools-list">
                        ${T.tools.map(([I,K])=>c`
                            <span class="session-log-tools-pill">${I} × ${K}</span>
                          `)}
                      </div>
                    </details>
                  `:v}
          </div>
        `})}
        ${r.length===0?c`
                <div class="muted" style="padding: 12px">${o("usageNoMessagesMatchFilters")}</div>
              `:v}
      </div>
    </div>
  `}function ky(e){if(e.loading&&!e.totals)return c`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">${o("usageTokenUsage")}</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                ${o("usageLoading")}
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--text-muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,a=[...e.sessions].toSorted((L,R)=>{const N=t?L.usage?.totalTokens??0:L.usage?.totalCost??0;return(t?R.usage?.totalTokens??0:R.usage?.totalCost??0)-N}),i=e.selectedDays.length>0?a.filter(L=>{if(L.usage?.activityDates?.length)return L.usage.activityDates.some(j=>e.selectedDays.includes(j));if(!L.updatedAt)return!1;const R=new Date(L.updatedAt),N=`${R.getFullYear()}-${String(R.getMonth()+1).padStart(2,"0")}-${String(R.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(N)}):a,l=(L,R)=>{if(R.length===0)return!0;const N=L.usage,j=N?.firstActivity??L.updatedAt,Se=N?.lastActivity??L.updatedAt;if(!j||!Se)return!1;const Y=Math.min(j,Se),Ce=Math.max(j,Se);let te=Y;for(;te<=Ce;){const ve=new Date(te),Be=So(ve,e.timeZone);if(R.includes(Be))return!0;const He=Ao(ve,e.timeZone);te=Math.min(He.getTime(),Ce)+1}return!1},d=e.selectedHours.length>0?i.filter(L=>l(L,e.selectedHours)):i,u=qb(d,e.query),p=u.sessions,m=u.warnings,f=ry(e.queryDraft,a,e.aggregates),h=ko(e.query),r=L=>{const R=ft(L);return h.filter(N=>ft(N.key??"")===R).map(N=>N.value).filter(Boolean)},g=L=>{const R=new Set;for(const N of L)N&&R.add(N);return Array.from(R)},y=g(a.map(L=>L.agentId)).slice(0,12),A=g(a.map(L=>L.channel)).slice(0,12),S=g([...a.map(L=>L.modelProvider),...a.map(L=>L.providerOverride),...e.aggregates?.byProvider.map(L=>L.provider)??[]]).slice(0,12),w=g([...a.map(L=>L.model),...e.aggregates?.byModel.map(L=>L.model)??[]]).slice(0,12),T=g(e.aggregates?.tools.tools.map(L=>L.name)??[]).slice(0,12),C=e.selectedSessions.length===1?e.sessions.find(L=>L.key===e.selectedSessions[0])??p.find(L=>L.key===e.selectedSessions[0]):null,M=L=>L.reduce((R,N)=>(N.usage&&(R.input+=N.usage.input,R.output+=N.usage.output,R.cacheRead+=N.usage.cacheRead,R.cacheWrite+=N.usage.cacheWrite,R.totalTokens+=N.usage.totalTokens,R.totalCost+=N.usage.totalCost,R.inputCost+=N.usage.inputCost??0,R.outputCost+=N.usage.outputCost??0,R.cacheReadCost+=N.usage.cacheReadCost??0,R.cacheWriteCost+=N.usage.cacheWriteCost??0,R.missingCostEntries+=N.usage.missingCostEntries??0),R),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),E=L=>e.costDaily.filter(N=>L.includes(N.date)).reduce((N,j)=>(N.input+=j.input,N.output+=j.output,N.cacheRead+=j.cacheRead,N.cacheWrite+=j.cacheWrite,N.totalTokens+=j.totalTokens,N.totalCost+=j.totalCost,N.inputCost+=j.inputCost??0,N.outputCost+=j.outputCost??0,N.cacheReadCost+=j.cacheReadCost??0,N.cacheWriteCost+=j.cacheWriteCost??0,N),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let I,K;const Z=a.length;if(e.selectedSessions.length>0){const L=p.filter(R=>e.selectedSessions.includes(R.key));I=M(L),K=L.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(I=E(e.selectedDays),K=p.length):e.selectedHours.length>0||n?(I=M(p),K=p.length):(I=e.totals,K=Z);const ie=e.selectedSessions.length>0?p.filter(L=>e.selectedSessions.includes(L.key)):n||e.selectedHours.length>0?p:e.selectedDays.length>0?i:a,_=ay(ie,e.aggregates),z=e.selectedSessions.length>0?(()=>{const L=p.filter(N=>e.selectedSessions.includes(N.key)),R=new Set;for(const N of L)for(const j of N.usage?.activityDates??[])R.add(j);return R.size>0?e.costDaily.filter(N=>R.has(N.date)):e.costDaily})():e.costDaily,pe=oy(ie,I,_),P=!e.loading&&!e.totals&&e.sessions.length===0,B=(I?.missingCostEntries??0)>0||(I?I.totalTokens>0&&I.totalCost===0&&I.input+I.output+I.cacheRead+I.cacheWrite>0:!1),le=[{label:o("usageToday"),days:1},{label:o("usage7d"),days:7},{label:o("usage30d"),days:30}],re=L=>{const R=new Date,N=new Date;N.setDate(N.getDate()-(L-1)),e.onStartDateChange(sa(N)),e.onEndDateChange(sa(R))},ee=(L,R,N)=>{if(N.length===0)return v;const j=r(L),Se=new Set(j.map(te=>ft(te))),Y=N.length>0&&N.every(te=>Se.has(ft(te))),Ce=j.length;return c`
      <details
        class="usage-filter-select"
        @toggle=${te=>{const ve=te.currentTarget;if(!ve.open)return;const Be=He=>{He.composedPath().includes(ve)||(ve.open=!1,window.removeEventListener("click",Be,!0))};window.addEventListener("click",Be,!0)}}
      >
        <summary>
          <span>${R}</span>
          ${Ce>0?c`<span class="usage-filter-badge">${Ce}</span>`:c`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${te=>{te.preventDefault(),te.stopPropagation(),e.onQueryDraftChange(vl(e.queryDraft,L,N))}}
              ?disabled=${Y}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${te=>{te.preventDefault(),te.stopPropagation(),e.onQueryDraftChange(vl(e.queryDraft,L,[]))}}
              ?disabled=${Ce===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${N.map(te=>{const ve=Se.has(ft(te));return c`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${ve}
                    @change=${Be=>{const He=Be.target,at=`${L}:${te}`;e.onQueryDraftChange(He.checked?dy(e.queryDraft,at):hl(e.queryDraft,at))}}
                  />
                  <span>${te}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},ae=sa(new Date);return c`
    <style>${Vb}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">${o("usagePageSubtitle")}</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?c`
                  <span class="usage-refresh-indicator">Loading</span>
                `:v}
          ${P?c`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:v}
        </div>
        <div class="usage-header-metrics">
          ${I?c`
                <span class="usage-metric-badge">
                  <strong>${O(I.totalTokens)}</strong> ${o("usageTokensUnit")}
                </span>
                <span class="usage-metric-badge">
                  <strong>${V(I.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${K}</strong>
                  session${K!==1?"s":""}
                </span>
              `:v}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${L=>{const R=L.currentTarget;if(!R.open)return;const N=j=>{j.composedPath().includes(R)||(R.open=!1,window.removeEventListener("click",N,!0))};window.addEventListener("click",N,!0)}}
          >
            <summary class="usage-export-button">${o("usageExport")} ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>aa(`openclaw-usage-sessions-${ae}.csv`,iy(p),"text/csv")}
                  ?disabled=${p.length===0}
                >
                  ${o("usageExportSessionsCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>aa(`openclaw-usage-daily-${ae}.csv`,ly(z),"text/csv")}
                  ?disabled=${z.length===0}
                >
                  ${o("usageExportDailyCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>aa(`openclaw-usage-${ae}.json`,JSON.stringify({totals:I,sessions:p,daily:z,aggregates:_},null,2),"application/json")}
                  ?disabled=${p.length===0&&z.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${gy(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${le.map(L=>c`
                <button class="btn btn-sm" @click=${()=>re(L.days)}>
                  ${L.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${L=>e.onStartDateChange(L.target.value)}
          />
          <span style="color: var(--text-muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${L=>e.onEndDateChange(L.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${L=>e.onTimeZoneChange(L.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${L=>e.onQueryDraftChange(L.target.value)}
            @keydown=${L=>{L.key==="Enter"&&(L.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?c`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>${o("usageClear")}</button>`:v}
            <span class="usage-query-hint">
              ${n?o("usageQueryHintMatch").replace("{count}",String(p.length)).replace("{total}",String(Z)):o("usageQueryHintInRange").replace("{total}",String(Z))}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${ee("agent","Agent",y)}
          ${ee("channel","Channel",A)}
          ${ee("provider","Provider",S)}
          ${ee("model","Model",w)}
          ${ee("tool","Tool",T)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${h.length>0?c`
                <div class="usage-query-chips">
                  ${h.map(L=>{const R=L.raw;return c`
                      <span class="usage-query-chip">
                        ${R}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(hl(e.queryDraft,R))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:v}
        ${f.length>0?c`
                <div class="usage-query-suggestions">
                  ${f.map(L=>c`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(cy(e.queryDraft,L.value))}
                      >
                        ${L.label}
                      </button>
                    `)}
                </div>
              `:v}
        ${m.length>0?c`
                <div class="callout warning" style="margin-top: 8px;">
                  ${m.join(" · ")}
                </div>
              `:v}
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${e.sessionsLimitReached?c`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:v}
    </section>

    ${fy(I,_,pe,B,Jb(ie,e.timeZone),K,Z)}

    ${ey(ie,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${py(z,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${I?my(I,e.chartMode):v}
        </div>
      </div>
      <div class="usage-grid-right">
        ${hy(p,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,Z,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${C?yy(C,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):vy()}
  `}function Sy(e){J(e)}function Ay(e,t){e.mcpViewMode=t}function Cy(e){e.mcpAddModalOpen=!0,e.mcpAddName="",e.mcpAddDraft={enabled:!0,command:"npx"},e.mcpAddConnectionType="stdio",e.mcpAddEditMode="form",e.mcpAddRawJson=JSON.stringify({enabled:!0},null,2),e.mcpAddRawError=null}function Ty(e){e.mcpAddModalOpen=!1,e.mcpAddName="",e.mcpAddRawError=null}function My(e,t){e.mcpAddName=t}function Ey(e,t){e.mcpAddDraft={...e.mcpAddDraft,...t}}function Py(e,t){e.mcpAddConnectionType=t}function Dy(e,t){e.mcpAddRawJson=t;try{const n=JSON.parse(t);e.mcpAddDraft=n,e.mcpAddRawError=null}catch{e.mcpAddRawError="Invalid JSON"}}function Ly(e,t){e.mcpAddEditMode=t,t==="raw"&&(e.mcpAddRawJson=JSON.stringify(e.mcpAddDraft,null,2))}async function Iy(e){const t=e.mcpAddName?.trim();if(!t)return;const n=t.toLowerCase().replace(/\s+/g,"-");if(e.mcpAddEditMode==="raw")try{e.mcpAddDraft=JSON.parse(e.mcpAddRawJson)}catch{e.mcpAddRawError="Invalid JSON";return}else{const i=e.mcpAddConnectionType,l=e.mcpAddDraft;if(i==="stdio"&&!l.command?.trim()||i==="url"&&!l.url?.trim()||i==="service"&&(!l.service?.trim()||!l.serviceUrl?.trim()))return}!e.configForm&&e.configSnapshot?.config&&(e.configForm=ne(e.configSnapshot.config));const s=ne(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={}),a.servers[n]={...e.mcpAddDraft,enabled:e.mcpAddDraft.enabled??!0},e.configForm=s,e.configFormDirty=!0,await Ie(e,{mcp:s.mcp}),e.mcpAddModalOpen=!1,e.mcpAddName=""}function _y(e){return!e||e.command?"stdio":e.url?"url":e.service&&e.serviceUrl?"service":"stdio"}function Ry(e,t){if(e.mcpSelectedKey=t,e.mcpRawError=null,t){const s=(e.configForm?.mcp?.servers??{})[t];e.mcpRawJson=s?JSON.stringify(s,null,2):"{}",e.mcpEditConnectionType=_y(s)}}function Ny(e,t){e.mcpEditConnectionType=t}function Fy(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={}),a.servers[t]||(a.servers[t]={}),a.servers[t]={...a.servers[t],enabled:n},e.configForm=s,e.configFormDirty=!0,Ie(e,{mcp:s.mcp})}function Uy(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={});const i=a.servers[t]??{};a.servers[t]={...i,...n},e.configForm=s,e.configFormDirty=!0,e.mcpFormDirty=!0}function Oy(e,t,n){e.mcpRawJson=n;try{const s=JSON.parse(n),a=ne(e.configForm??e.configSnapshot?.config??{});a.mcp||(a.mcp={servers:{}});const i=a.mcp;i.servers||(i.servers={}),i.servers[t]=s,e.configForm=a,e.configFormDirty=!0,e.mcpRawError=null}catch{e.mcpRawError="Invalid JSON"}}function By(e){if(!e.mcpSelectedKey)return;if(e.mcpEditMode==="raw")try{JSON.parse(e.mcpRawJson)}catch{e.mcpRawError="Invalid JSON";return}const t={mcp:{servers:e.configForm?.mcp?e.configForm.mcp.servers:{}}};Ie(e,t),e.mcpFormDirty=!1,e.mcpSelectedKey=null}function Hy(e){e.mcpSelectedKey=null,e.mcpRawError=null,e.mcpFormDirty&&J(e)}function Ky(e,t){const s=(e.configForm??e.configSnapshot?.config)?.mcp;if(s?.servers&&t in s.servers&&(Ie(e,{mcp:{servers:{[t]:null}}}),e.configForm&&e.configForm.mcp&&typeof e.configForm.mcp=="object")){const a=e.configForm.mcp.servers;if(a&&t in a){const i={...a};delete i[t],e.configForm.mcp.servers=i}}e.mcpSelectedKey===t&&(e.mcpSelectedKey=null)}function zy(e){J(e)}function jy(e){e.modelsAddProviderModalOpen=!0,e.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""}}function qy(e){e.modelsAddProviderModalOpen=!1}function Wy(e,t){e.modelsAddProviderForm={...e.modelsAddProviderForm,...t}}function Vy(e){const{providerId:t,displayName:n,baseUrl:s,apiKey:a,apiKeyPrefix:i}=e.modelsAddProviderForm;if(!t.trim()||!n.trim())return;const l=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"");if(!l)return;!e.configForm&&e.configSnapshot?.config&&(e.configForm=ne(e.configSnapshot.config));const d=ne(e.configForm??e.configSnapshot?.config??{});d.models||(d.models={mode:"merge",providers:{}});const u=d.models;if(u.providers||(u.providers={}),u.providers[l]){e.modelsAddProviderModalOpen=!1,e.modelsSelectedProvider=l;return}u.providers[l]={displayName:n.trim(),baseUrl:s.trim()||void 0,apiKey:a.trim()||void 0,apiKeyPrefix:i.trim()||void 0,api:"openai-completions"},e.configForm=d,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddProviderModalOpen=!1,e.modelsSelectedProvider=l}function Gy(e,t){e.modelsSelectedProvider=t}function Qy(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});s.models||(s.models={mode:"merge",providers:{}});const a=s.models;a.providers||(a.providers={});const i=a.providers[t]??{};a.providers[t]={...i,...n},e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0}function Jy(e,t){e.modelsAddModelModalOpen=!0,e.modelsAddModelForm={modelId:"",modelName:""}}function Yy(e){e.modelsAddModelModalOpen=!1}function Zy(e,t){e.modelsAddModelForm={...e.modelsAddModelForm,...t}}function Xy(e,t){const{modelId:n,modelName:s}=e.modelsAddModelForm;if(!n.trim()||!s.trim())return;const a=ne(e.configForm??e.configSnapshot?.config??{});a.models||(a.models={mode:"merge",providers:{}});const i=a.models;i.providers||(i.providers={});const l=i.providers[t]??{},d=l.models??[];if(d.some(u=>u.id===n.trim())){e.modelsAddModelModalOpen=!1;return}i.providers[t]={...l,models:[...d,{id:n.trim(),name:s.trim()}]},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddModelModalOpen=!1}function ex(e,t,n,s){const a=ne(e.configForm??e.configSnapshot?.config??{});a.env||(a.env={vars:{},modelEnv:{}});const i=a.env;i.modelEnv||(i.modelEnv={});const l=`${t}/${n}`;i.modelEnv[l]={...s},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0}function tx(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});if(!s.models?.providers)return;const a=s.models.providers[t];a?.models&&(s.models.providers[t]={...a,models:a.models.filter(i=>i.id!==n)},e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0)}function nx(e){const t={};for(const n of Object.values(e)){const s=n.envVars??{};for(const[a,i]of Object.entries(s))if(!(!a||a==="__new__")){if(t[a]!==void 0&&t[a]!==i)return{__conflict:a};t[a]=i}}return t}function sx(e){const t=e.envVars??{},n={};for(const[s,a]of Object.entries(t))s&&s!=="__new__"&&(n[s]=a);return{...e,envVars:Object.keys(n).length?n:void 0}}function ax(e){e.modelsSaveError=null;const t=e.configForm?.models?.providers??{},n=nx(t);if(n.__conflict){e.modelsSaveError=n.__conflict;return}const a={...e.configForm?.env?.vars??{},...n},i={};for(const[m,f]of Object.entries(t)){let h=sx(f);const r=Te.find(g=>g.id===m);if(r&&((!h.baseUrl||h.baseUrl.trim()==="")&&(h={...h,baseUrl:r.baseUrl}),!h.api||h.api.trim()==="")){const g=r.defaultApi??"openai-completions";h={...h,api:g}}i[m]=h}const l={models:{...e.configForm?.models,providers:i}},u=e.configForm?.env?.modelEnv??{},p={};for(const[m,f]of Object.entries(u)){if(!f||typeof f!="object")continue;const h={};for(const[r,g]of Object.entries(f))r&&r!=="__new__"&&(h[r]=g);Object.keys(h).length>0?p[m]=h:p[m]=null}l.env={vars:a,modelEnv:p},Ie(e,l),e.modelsFormDirty=!1,e.modelsSelectedProvider=null}function ox(e){e.modelsSelectedProvider=null,e.modelsSaveError=null,e.modelsFormDirty&&J(e)}function ix(e,t){e.modelsUseModelModalOpen=!0,e.modelsUseModelModalProvider=t}function lx(e){e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function rx(e,t,n){const s=`${t}/${n}`,a=ne(e.configForm??e.configSnapshot?.config??{});gs(a,["agents","defaults","model","primary"],s),e.configForm=a,e.configFormDirty=!0,Ie(e,{agents:a.agents}),e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function cx(e,t){const s=e.configForm?.agents?.defaults?.model,a=s&&typeof s=="object"&&!Array.isArray(s)?s.primary:void 0,i=typeof a=="string"?a:null;if(!i||!i.startsWith(t+"/"))return;const l={agents:{defaults:{model:{primary:null}}}},d=ne(e.configForm??e.configSnapshot?.config??{}),m=d.agents?.defaults?.model;m&&typeof m=="object"&&!Array.isArray(m)&&delete m.primary,e.configForm=d,e.configFormDirty=!0,Ie(e,l)}let oa=null;const yl=e=>{oa&&clearTimeout(oa),oa=window.setTimeout(()=>{Tr(e)},400)},dx=/^data:/i,ux=/^https?:\/\//i;function gx(e){if(!e?.agents)return null;const n=e.agents.defaults;if(!n?.model)return null;const s=n.model;if(typeof s=="string"&&s)return s;if(s&&typeof s=="object"&&!Array.isArray(s)){const a=s.primary;return typeof a=="string"&&a?a:null}return null}function px(e){const t=e.agentsList?.agents??[],s=Il(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",i=t.find(d=>d.id===s)?.identity,l=i?.avatarUrl??i?.avatar;if(l)return dx.test(l)||ux.test(l)?l:i?.avatarUrl}function mx(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,a=e.connected?null:"Disconnected from gateway.",i=e.tab==="chat",l=i&&(e.settings.chatFocusMode||e.onboarding),d=e.onboarding?!1:e.settings.chatShowThinking,u=px(e),p=e.chatAvatarUrl??u??null,m=e.configForm??e.configSnapshot?.config,f=kn(e.basePath??""),h=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;return c`
    <div class="shell ${i?"shell--chat":""} ${l?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
            aria-label="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
          >
            <span class="nav-collapse-toggle__icon">${ge.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img
                src=${f?`${f}/favicon.svg`:"/favicon.svg"}
                alt="OpenOcta"
                style="width: 128px; height: 32px;"
              />
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span>Version</span>
            <span class="mono">${"v0.1.6"}</span>
          </div>
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>Health</span>
            <span class="mono">${e.connected?"OK":"Offline"}</span>
          </div>
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${Qu().map(r=>{const g=e.settings.navGroupsCollapsed[r.label]??!1,y=r.tabs.some(A=>A===e.tab);return c`
            <div class="nav-group ${g&&!y?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const A={...e.settings.navGroupsCollapsed};A[r.label]=!g,e.applySettings({...e.settings,navGroupsCollapsed:A})}}
                aria-expanded=${!g}
              >
                <span class="nav-label__text">${r.label}</span>
                <span class="nav-label__chevron">${g?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${r.tabs.map(A=>fp(e,A))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">Resources</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://databuff.yuque.com/org-wiki-databuff-spr8e6/lqn7on/nd9nghq03n2nymz0"
              target="_blank"
              rel="noreferrer"
              title="Docs (opens in new tab)"
            >
              <span class="nav-item__icon" aria-hidden="true">${ge.book}</span>
              <span class="nav-item__text">Docs</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${i?"content--chat":""}">
        <section class="content-header">
          <div>
            ${e.tab==="usage"?v:c`<div class="page-title">${fa(e.tab)}</div>`}
          </div>
          <div class="page-meta">
            ${e.lastError?c`<div class="pill danger">${e.lastError}</div>`:v}
            ${i?hp(e):v}
          </div>
        </section>

        ${e.tab==="overview"?db({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:r=>e.applySettings(r),onPasswordChange:r=>e.password=r,onSessionKeyChange:r=>{e.sessionKey=r,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:r,lastActiveSessionKey:r}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):v}

        ${e.tab==="channels"?Rm({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,selectedChannelId:e.channelsSelectedChannelId,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:r=>ke(e,r),onChannelSelect:r=>{e.channelsSelectedChannelId=r},onWhatsAppStart:r=>e.handleWhatsAppStart(r),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(r,g)=>ce(e,r,g),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(r,g)=>e.handleNostrProfileEdit(r,g),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(r,g)=>e.handleNostrProfileFieldChange(r,g),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):v}

        ${e.tab==="instances"?_v({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>eo(e)}):v}

        ${e.tab==="sessions"?bb({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,bulkMode:e.sessionsBulkMode,selectedKeys:e.sessionsSelectedKeys,onFiltersChange:r=>{e.sessionsFilterActive=r.activeMinutes,e.sessionsFilterLimit=r.limit,e.sessionsIncludeGlobal=r.includeGlobal,e.sessionsIncludeUnknown=r.includeUnknown},onRefresh:()=>Ge(e),onPatch:(r,g)=>xu(e,r,g),onDelete:r=>$u(e,r),onBulkModeToggle:()=>{const r=!e.sessionsBulkMode;e.sessionsBulkMode=r,r||(e.sessionsSelectedKeys=[])},onSelectionChange:(r,g)=>{!r||r==="agent.main.main"||(g?e.sessionsSelectedKeys.includes(r)||(e.sessionsSelectedKeys=[...e.sessionsSelectedKeys,r]):e.sessionsSelectedKeys=e.sessionsSelectedKeys.filter(y=>y!==r))},onSelectAll:r=>{const g=r.filter(y=>y&&y!=="agent.main.main");e.sessionsSelectedKeys=Array.from(new Set(g))},onClearSelection:()=>{e.sessionsSelectedKeys=[]},onBulkDelete:async r=>{const g=r.filter(y=>y&&y!=="agent.main.main");g.length!==0&&(await wu(e,g),e.sessionsSelectedKeys=[],e.sessionsBulkMode=!1)}}):v}

        ${e.tab==="usage"?ky({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:r=>{e.usageStartDate=r,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],yl(e)},onEndDateChange:r=>{e.usageEndDate=r,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],yl(e)},onRefresh:()=>Tr(e),onTimeZoneChange:r=>{e.usageTimeZone=r},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:r=>{e.usageLogFilterRoles=r},onLogFilterToolsChange:r=>{e.usageLogFilterTools=r},onLogFilterHasToolsChange:r=>{e.usageLogFilterHasTools=r},onLogFilterQueryChange:r=>{e.usageLogFilterQuery=r},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(r,g)=>{if(g&&e.usageSelectedHours.length>0){const y=Array.from({length:24},(T,C)=>C),A=e.usageSelectedHours[e.usageSelectedHours.length-1],S=y.indexOf(A),w=y.indexOf(r);if(S!==-1&&w!==-1){const[T,C]=S<w?[S,w]:[w,S],M=y.slice(T,C+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...M])]}}else e.usageSelectedHours.includes(r)?e.usageSelectedHours=e.usageSelectedHours.filter(y=>y!==r):e.usageSelectedHours=[...e.usageSelectedHours,r]},onQueryDraftChange:r=>{e.usageQueryDraft=r,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:r=>{e.usageSessionSort=r},onSessionSortDirChange:r=>{e.usageSessionSortDir=r},onSessionsTabChange:r=>{e.usageSessionsTab=r},onToggleColumn:r=>{e.usageVisibleColumns.includes(r)?e.usageVisibleColumns=e.usageVisibleColumns.filter(g=>g!==r):e.usageVisibleColumns=[...e.usageVisibleColumns,r]},onSelectSession:(r,g)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[r,...e.usageRecentSessions.filter(y=>y!==r)].slice(0,8),g&&e.usageSelectedSessions.length>0){const y=e.usageChartMode==="tokens",S=[...e.usageResult?.sessions??[]].toSorted((M,E)=>{const I=y?M.usage?.totalTokens??0:M.usage?.totalCost??0;return(y?E.usage?.totalTokens??0:E.usage?.totalCost??0)-I}).map(M=>M.key),w=e.usageSelectedSessions[e.usageSelectedSessions.length-1],T=S.indexOf(w),C=S.indexOf(r);if(T!==-1&&C!==-1){const[M,E]=T<C?[T,C]:[C,T],I=S.slice(M,E+1),K=[...new Set([...e.usageSelectedSessions,...I])];e.usageSelectedSessions=K}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===r?e.usageSelectedSessions=[]:e.usageSelectedSessions=[r];e.usageSelectedSessions.length===1&&($p(e,e.usageSelectedSessions[0]),wp(e,e.usageSelectedSessions[0]))},onSelectDay:(r,g)=>{if(g&&e.usageSelectedDays.length>0){const y=(e.usageCostSummary?.daily??[]).map(T=>T.date),A=e.usageSelectedDays[e.usageSelectedDays.length-1],S=y.indexOf(A),w=y.indexOf(r);if(S!==-1&&w!==-1){const[T,C]=S<w?[S,w]:[w,S],M=y.slice(T,C+1),E=[...new Set([...e.usageSelectedDays,...M])];e.usageSelectedDays=E}}else e.usageSelectedDays.includes(r)?e.usageSelectedDays=e.usageSelectedDays.filter(y=>y!==r):e.usageSelectedDays=[r]},onChartModeChange:r=>{e.usageChartMode=r},onDailyChartModeChange:r=>{e.usageDailyChartMode=r},onTimeSeriesModeChange:r=>{e.usageTimeSeriesMode=r},onTimeSeriesBreakdownChange:r=>{e.usageTimeSeriesBreakdownMode=r},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}}):v}

        ${e.tab==="cron"?Sv({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(r=>r.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:r=>e.cronForm={...e.cronForm,...r},onRefresh:()=>e.loadCron(),onAdd:()=>Id(e),onToggle:(r,g)=>_d(e,r,g),onRun:r=>Rd(e,r),onRemove:r=>Nd(e,r),onLoadRuns:r=>Ol(e,r)}):v}

        ${e.tab==="agents"?Vp({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:h,activePanel:e.agentsPanel,configForm:m,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,skillsFilter:e.skillsFilter,onRefresh:async()=>{await Wa(e);const r=e.agentsList?.agents?.map(g=>g.id)??[];r.length>0&&Nl(e,r)},onSelectAgent:r=>{e.agentsSelectedId!==r&&(e.agentsSelectedId=r,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,Rl(e,r),e.agentsPanel==="files"&&Vs(e,r),e.agentsPanel==="skills"&&zn(e,r))},onSelectPanel:r=>{e.agentsPanel=r,r==="files"&&h&&e.agentFilesList?.agentId!==h&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},Vs(e,h)),r==="skills"&&h&&zn(e,h),r==="channels"&&ke(e,!1),r==="cron"&&e.loadCron()},onLoadFiles:r=>Vs(e,r),onSelectFile:r=>{e.agentFileActive=r,h&&yp(e,h,r)},onFileDraftChange:(r,g)=>{e.agentFileDrafts={...e.agentFileDrafts,[r]:g}},onFileReset:r=>{const g=e.agentFileContents[r]??"";e.agentFileDrafts={...e.agentFileDrafts,[r]:g}},onFileSave:r=>{if(!h)return;const g=e.agentFileDrafts[r]??e.agentFileContents[r]??"";xp(e,h,r,g)},onToolsProfileChange:(r,g,y)=>{if(!m)return;const A=m.agents?.list;if(!Array.isArray(A))return;const S=A.findIndex(T=>T&&typeof T=="object"&&"id"in T&&T.id===r);if(S<0)return;const w=["agents","list",S,"tools"];g?ce(e,[...w,"profile"],g):qe(e,[...w,"profile"]),y&&qe(e,[...w,"allow"])},onToolsOverridesChange:(r,g,y)=>{if(!m)return;const A=m.agents?.list;if(!Array.isArray(A))return;const S=A.findIndex(T=>T&&typeof T=="object"&&"id"in T&&T.id===r);if(S<0)return;const w=["agents","list",S,"tools"];g.length>0?ce(e,[...w,"alsoAllow"],g):qe(e,[...w,"alsoAllow"]),y.length>0?ce(e,[...w,"deny"],y):qe(e,[...w,"deny"])},onConfigReload:()=>J(e),onConfigSave:()=>ln(e),onChannelsRefresh:()=>ke(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:r=>e.skillsFilter=r,onSkillsRefresh:()=>{h&&zn(e,h)},onAgentSkillToggle:(r,g,y)=>{if(!m)return;const A=m.agents?.list;if(!Array.isArray(A))return;const S=A.findIndex(K=>K&&typeof K=="object"&&"id"in K&&K.id===r);if(S<0)return;const w=A[S],T=g.trim();if(!T)return;const C=e.agentSkillsReport?.skills?.map(K=>K.name).filter(Boolean)??[],E=(Array.isArray(w.skills)?w.skills.map(K=>String(K).trim()).filter(Boolean):void 0)??C,I=new Set(E);y?I.add(T):I.delete(T),ce(e,["agents","list",S,"skills"],[...I])},onAgentSkillsClear:r=>{if(!m)return;const g=m.agents?.list;if(!Array.isArray(g))return;const y=g.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===r);y<0||qe(e,["agents","list",y,"skills"])},onAgentSkillsDisableAll:r=>{if(!m)return;const g=m.agents?.list;if(!Array.isArray(g))return;const y=g.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===r);y<0||ce(e,["agents","list",y,"skills"],[])},onModelChange:(r,g)=>{if(!m)return;const y=m.agents?.list;if(!Array.isArray(y))return;const A=y.findIndex(C=>C&&typeof C=="object"&&"id"in C&&C.id===r);if(A<0)return;const S=["agents","list",A,"model"];if(!g){qe(e,S);return}const T=y[A]?.model;if(T&&typeof T=="object"&&!Array.isArray(T)){const C=T.fallbacks,M={primary:g,...Array.isArray(C)?{fallbacks:C}:{}};ce(e,S,M)}else ce(e,S,g)},onModelFallbacksChange:(r,g)=>{if(!m)return;const y=m.agents?.list;if(!Array.isArray(y))return;const A=y.findIndex(K=>K&&typeof K=="object"&&"id"in K&&K.id===r);if(A<0)return;const S=["agents","list",A,"model"],w=y[A],T=g.map(K=>K.trim()).filter(Boolean),C=w.model,E=(()=>{if(typeof C=="string")return C.trim()||null;if(C&&typeof C=="object"&&!Array.isArray(C)){const K=C.primary;if(typeof K=="string")return K.trim()||null}return null})();if(T.length===0){E?ce(e,S,E):qe(e,S);return}ce(e,S,E?{primary:E,fallbacks:T}:{fallbacks:T})}}):v}

        ${e.tab==="skills"?kb({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,viewMode:e.skillsViewMode,onViewModeChange:r=>e.skillsViewMode=r,addModalOpen:e.skillsAddModalOpen,uploadName:e.skillsUploadName,uploadFile:e.skillsUploadFile,uploadError:e.skillsUploadError,uploadTemplate:e.skillsUploadTemplate,uploadBusy:e.skillsUploadBusy,onFilterChange:r=>e.skillsFilter=r,onRefresh:()=>kt(e,{clearMessages:!0}),onAddClick:()=>{e.skillsAddModalOpen=!0,e.skillsUploadName="",e.skillsUploadFile=null,e.skillsUploadError=null,e.skillsUploadTemplate=null},onAddClose:()=>{e.skillsAddModalOpen=!1,e.skillsUploadError=null,e.skillsUploadTemplate=null},onUploadNameChange:r=>e.skillsUploadName=r,onUploadFileChange:r=>e.skillsUploadFile=r,onUploadSubmit:async()=>{if(!e.skillsUploadName.trim()||!e.skillsUploadFile)return;e.skillsUploadBusy=!0,e.skillsUploadError=null,e.skillsUploadTemplate=null;const r=await Tu({...e,gatewayUrl:e.settings.gatewayUrl},e.skillsUploadName.trim(),e.skillsUploadFile);e.skillsUploadBusy=!1,r.ok?(e.skillsAddModalOpen=!1,e.skillsUploadName="",e.skillsUploadFile=null,kt(e,{clearMessages:!0})):(e.skillsUploadError=r.error??"Upload failed",e.skillsUploadTemplate=r.template??null)},onToggle:(r,g)=>Su(e,r,g),onEdit:(r,g)=>ku(e,r,g),onSaveKey:r=>Au(e,r),onInstall:(r,g,y)=>Cu(e,r,g,y),onDelete:r=>Mu(e,r),selectedSkillKey:e.skillsSelectedSkillKey,skillDocContent:e.skillsSkillDocContent,skillDocLoading:e.skillsSkillDocLoading,skillDocError:e.skillsSkillDocError,onSkillDetailClick:r=>{e.skillsSelectedSkillKey=r,r?Eu(e,r):(e.skillsSkillDocContent=null,e.skillsSkillDocError=null)}}):v}

        ${e.tab==="mcp"?Pb({servers:e.configForm?.mcp?.servers??{},loading:e.configLoading,saving:e.configSaving,selectedKey:e.mcpSelectedKey,viewMode:e.mcpViewMode,addModalOpen:e.mcpAddModalOpen,addName:e.mcpAddName,addDraft:e.mcpAddDraft??{},addConnectionType:e.mcpAddConnectionType,addEditMode:e.mcpAddEditMode,addFormDirty:!0,addRawJson:e.mcpAddRawJson,addRawError:e.mcpAddRawError,editMode:e.mcpEditMode,editConnectionType:e.mcpEditConnectionType,formDirty:e.mcpFormDirty,rawJson:e.mcpRawJson,rawError:e.mcpRawError,onRefresh:()=>Sy(e),onViewModeChange:r=>Ay(e,r),onAddServer:()=>Cy(e),onAddClose:()=>Ty(e),onAddNameChange:r=>My(e,r),onAddFormPatch:r=>Ey(e,r),onAddRawChange:r=>Dy(e,r),onAddConnectionTypeChange:r=>Py(e,r),onAddEditModeChange:r=>Ly(e,r),onAddSubmit:()=>Iy(e),onSelect:r=>Ry(e,r),onToggle:(r,g)=>Fy(e,r,g),onFormPatch:(r,g)=>Uy(e,r,g),onRawChange:(r,g)=>Oy(e,r,g),onEditModeChange:r=>e.mcpEditMode=r,onEditConnectionTypeChange:r=>Ny(e,r),onSave:()=>By(e),onCancel:()=>Hy(e),onDelete:r=>Ky(e,r)}):v}

        ${e.tab==="llmTrace"?_b({loading:e.llmTraceLoading,result:e.llmTraceResult,error:e.llmTraceError,mode:e.llmTraceMode,search:e.llmTraceSearch,enabled:e.llmTraceEnabled,saving:e.llmTraceSaving,onRefresh:()=>Uu(e),onModeChange:r=>Ou(e,r),onSearchChange:r=>Bu(e,r),onToggleEnabled:()=>Hu(e),onView:r=>Ku(e,r)}):v}

        ${e.tab==="sandbox"?Nb({sandbox:e.sandboxForm??ma(e)??{},saving:e.configSaving,onToggleEnabled:()=>ju(e),onPatch:(r,g)=>{e.sandboxForm||(e.sandboxForm=so(e)??{}),qu(e,e.sandboxForm,r,g)},onSave:()=>Wu(e,e.sandboxForm??ma(e)??{}),approvalsLoading:e.approvalsLoading,approvalsResult:e.approvalsResult,approvalsError:e.approvalsError,onApprovalsRefresh:()=>vs(e),onApprove:(r,g)=>Vu(e,r,"ui",g),onDeny:(r,g)=>Gu(e,r,"ui",g),pathForTab:r=>Sn(r,e.basePath)}):v}

        ${e.tab==="nodes"?Ov({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>ms(e),onDevicesRefresh:()=>st(e),onDeviceApprove:r=>du(e,r),onDeviceReject:r=>uu(e,r),onDeviceRotate:(r,g,y)=>gu(e,{deviceId:r,role:g,scopes:y}),onDeviceRevoke:(r,g)=>pu(e,{deviceId:r,role:g}),onLoadConfig:()=>J(e),onLoadExecApprovals:()=>{const r=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Xa(e,r)},onBindDefault:r=>{r?ce(e,["tools","exec","node"],r):qe(e,["tools","exec","node"])},onBindAgent:(r,g)=>{const y=["agents","list",r,"tools","exec","node"];g?ce(e,y,g):qe(e,y)},onSaveBindings:()=>ln(e),onExecApprovalsTargetChange:(r,g)=>{e.execApprovalsTarget=r,e.execApprovalsTargetNodeId=g,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:r=>{e.execApprovalsSelectedAgent=r},onExecApprovalsPatch:(r,g)=>bu(e,r,g),onExecApprovalsRemove:r=>yu(e,r),onSaveExecApprovals:()=>{const r=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return vu(e,r)}}):v}

        ${e.tab==="chat"?Yh({sessionKey:e.sessionKey,onSessionKeyChange:r=>{e.sessionKey=r,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:r,lastActiveSessionKey:r}),e.loadAssistantIdentity(),Bt(e),qn(e)},thinkingLevel:e.chatThinkingLevel,showThinking:d,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:p,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:a,error:e.lastError,sessions:e.sessionsResult,focusMode:l,onRefresh:()=>(e.resetToolStream(),Promise.all([Bt(e),qn(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:r=>e.handleChatScroll(r),onDraftChange:r=>e.chatMessage=r,attachments:e.chatAttachments,onAttachmentsChange:r=>e.chatAttachments=r,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:r=>e.removeQueuedMessage(r),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:r=>e.handleOpenSidebar(r),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:r=>e.handleSplitRatioChange(r),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):v}

        ${e.tab==="digitalEmployee"?kp({loading:e.digitalEmployeesLoading,employees:e.digitalEmployees,error:e.digitalEmployeesError,filter:e.digitalEmployeesFilter,viewMode:e.digitalEmployeesViewMode,onRefresh:()=>Wt(e),createModalOpen:e.digitalEmployeeCreateModalOpen,createName:e.digitalEmployeeCreateName,createDescription:e.digitalEmployeeCreateDescription,createPrompt:e.digitalEmployeeCreatePrompt,createError:e.digitalEmployeeCreateError,createBusy:e.digitalEmployeeCreateBusy,advancedOpen:e.digitalEmployeeAdvancedOpen,mcpJson:e.digitalEmployeeCreateMcpJson,onFilterChange:r=>{e.digitalEmployeesFilter=r},onViewModeChange:r=>{e.digitalEmployeesViewMode=r},onMcpJsonChange:r=>{e.digitalEmployeeCreateMcpJson=r},skillUploadName:e.digitalEmployeeSkillUploadName,skillUploadFiles:e.digitalEmployeeSkillUploadFiles??[],skillUploadError:e.digitalEmployeeSkillUploadError,onCreateOpen:()=>{e.digitalEmployeeCreateModalOpen=!0,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null},onCreateClose:()=>{e.digitalEmployeeCreateBusy||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeCreateError=null,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null)},onCreateNameChange:r=>{e.digitalEmployeeCreateName=r},onCreateDescriptionChange:r=>{e.digitalEmployeeCreateDescription=r},onCreatePromptChange:r=>{e.digitalEmployeeCreatePrompt=r},onCreateSubmit:async()=>{await Pu(e),e.digitalEmployeeCreateError||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeAdvancedOpen=!1)},onToggleAdvanced:()=>{e.digitalEmployeeAdvancedOpen=!e.digitalEmployeeAdvancedOpen},onSkillUploadNameChange:r=>{e.digitalEmployeeSkillUploadName=r},onSkillUploadFilesChange:r=>{e.digitalEmployeeSkillUploadFiles=r??[]},onOpenEmployee:async r=>{const g=r.trim()||"default";await Ge(e,{activeMinutes:10080,limit:200});const y=e.sessionsResult?.sessions??[],A=[`agent:main:employee:${g}:`,`agent:main:employee-${g}`,`employee:${g}:`,`employee-${g}`],S=y.find(T=>A.some(C=>T.key.includes(C)||T.key===C)),w=S?S.key:`agent:main:employee:${g}:run:${crypto.randomUUID()}`;e.sessionKey=w,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:w,lastActiveSessionKey:w}),e.loadAssistantIdentity(),Bt(e),qn(e),e.setTab("chat"),S||e.handleSendChat("当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。")},onToggleEnabled:(r,g)=>Lu(e,r,g),onDelete:r=>Iu(e,r),onEdit:async r=>{const g=e.digitalEmployees.find(A=>A.id===r),y=await _u(e,r);if(!y){e.digitalEmployeesError="无法加载员工详情";return}e.digitalEmployeeEditModalOpen=!0,e.digitalEmployeeEditId=y.id,e.digitalEmployeeEditName=y.name||y.id,e.digitalEmployeeEditDescription=y.description??"",e.digitalEmployeeEditPrompt=y.prompt??"",e.digitalEmployeeEditMcpJson=y.mcpServers&&Object.keys(y.mcpServers).length>0?JSON.stringify(y.mcpServers,null,2):"",e.digitalEmployeeEditSkillNames=g?.skillNames??g?.skillIds??y.skillIds??[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],e.digitalEmployeeEditEnabled=y.enabled!==!1,e.digitalEmployeeEditError=null},editModalOpen:e.digitalEmployeeEditModalOpen,editId:e.digitalEmployeeEditId,editName:e.digitalEmployeeEditName,editDescription:e.digitalEmployeeEditDescription,editPrompt:e.digitalEmployeeEditPrompt,editMcpJson:e.digitalEmployeeEditMcpJson,editSkillNames:e.digitalEmployeeEditSkillNames??[],editSkillFilesToUpload:e.digitalEmployeeEditSkillFilesToUpload??[],editSkillsToDelete:e.digitalEmployeeEditSkillsToDelete??[],editError:e.digitalEmployeeEditError,editBusy:e.digitalEmployeeEditBusy,onEditClose:()=>{e.digitalEmployeeEditBusy||(e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditError=null)},onEditDescriptionChange:r=>{e.digitalEmployeeEditDescription=r},onEditPromptChange:r=>{e.digitalEmployeeEditPrompt=r},onEditMcpJsonChange:r=>{e.digitalEmployeeEditMcpJson=r},onEditSkillFilesChange:r=>{e.digitalEmployeeEditSkillFilesToUpload=r??[]},onEditSkillDelete:r=>{const g=e.digitalEmployeeEditSkillsToDelete??[];g.includes(r)||(e.digitalEmployeeEditSkillsToDelete=[...g,r])},onEditSkillUndoDelete:r=>{e.digitalEmployeeEditSkillsToDelete=(e.digitalEmployeeEditSkillsToDelete??[]).filter(g=>g!==r)},onEditSubmit:async()=>{await Ru(e),e.digitalEmployeeEditError||(e.digitalEmployeeEditModalOpen=!1)}}):v}

        ${e.tab==="envVars"?$v({vars:e.configForm?.env?.vars??e.configSnapshot?.config?.env?.vars??{},modelEnv:e.configForm?.env?.modelEnv??e.configSnapshot?.config?.env?.modelEnv??{},shellEnv:e.configForm?.env?.shellEnv??e.configSnapshot?.config?.env?.shellEnv??null,dirty:e.configFormDirty,loading:e.configLoading,saving:e.configSaving,connected:e.connected,onVarsChange:r=>{ce(e,["env","vars"],r)},onModelEnvChange:r=>{ce(e,["env","modelEnv"],r)},onShellEnvChange:r=>{ce(e,["env","shellEnv"],r)},onSave:async()=>{const r=e.configForm?.env,g=r?.vars??{},y={};for(const[w,T]of Object.entries(g))w.trim()&&(y[w.trim()]=T);ce(e,["env","vars"],y);const A=r?.modelEnv??{},S={};for(const[w,T]of Object.entries(A)){if(!T||typeof T!="object")continue;const C={};for(const[M,E]of Object.entries(T))M.trim()&&M!=="__new__"&&(C[M.trim()]=E);Object.keys(C).length>0&&(S[w]=C)}ce(e,["env","modelEnv"],S),await ln(e)},onReload:()=>J(e)}):v}

        ${e.tab==="config"?xv({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:r=>{e.configRaw=r},onFormModeChange:r=>e.configFormMode=r,onFormPatch:(r,g)=>ce(e,r,g),onSearchChange:r=>e.configSearchQuery=r,onSectionChange:r=>{e.configActiveSection=r,e.configActiveSubsection=null},onSubsectionChange:r=>e.configActiveSubsection=r,onReload:()=>J(e),onSave:()=>ln(e),onApply:()=>Qc(e),onUpdate:()=>Jc(e)}):v}

        ${e.tab==="models"?Ob({providers:e.configForm?.models?.providers??{},modelEnv:e.configForm?.env?.modelEnv??{},defaultModelRef:gx(e.configForm),loading:e.configLoading,saving:e.configSaving,selectedProvider:e.modelsSelectedProvider,viewMode:e.modelsViewMode,formDirty:e.modelsFormDirty,addProviderModalOpen:e.modelsAddProviderModalOpen,addProviderForm:e.modelsAddProviderForm,addModelModalOpen:e.modelsAddModelModalOpen,addModelForm:e.modelsAddModelForm,useModelModalOpen:e.modelsUseModelModalOpen,useModelModalProvider:e.modelsUseModelModalProvider,saveError:e.modelsSaveError,onRefresh:()=>zy(e),onAddProvider:()=>jy(e),onAddProviderModalClose:()=>qy(e),onAddProviderFormChange:r=>Wy(e,r),onAddProviderSubmit:()=>Vy(e),onSelect:r=>Gy(e,r),onViewModeChange:r=>e.modelsViewMode=r,onPatch:(r,g)=>Qy(e,r,g),onAddModel:r=>Jy(e),onAddModelModalClose:()=>Yy(e),onAddModelFormChange:r=>Zy(e,r),onAddModelSubmit:r=>Xy(e,r),onRemoveModel:(r,g)=>tx(e,r,g),onPatchModelEnv:(r,g,y)=>ex(e,r,g,y),onSave:()=>ax(e),onCancel:()=>ox(e),onUseModelClick:r=>ix(e,r),onUseModelModalClose:()=>lx(e),onUseModel:(r,g)=>rx(e,r,g),onCancelUse:r=>cx(e,r)}):v}

        ${e.tab==="debug"?Pv({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:r=>e.debugCallMethod=r,onCallParamsChange:r=>e.debugCallParams=r,onRefresh:()=>ps(e),onCall:()=>xd(e)}):v}

        ${e.tab==="logs"?Uv({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:r=>e.logsFilterText=r,onLevelToggle:(r,g)=>{e.logsLevelFilters={...e.logsLevelFilters,[r]:g}},onToggleAutoFollow:r=>e.logsAutoFollow=r,onRefresh:()=>Ha(e,{reset:!0}),onExport:(r,g)=>e.exportLogs(r,g),onScroll:r=>e.handleLogsScroll(r)}):v}
      </main>
      ${Lv(e)}
      ${Iv(e)}
    </div>
  `}var fx=Object.defineProperty,hx=Object.getOwnPropertyDescriptor,x=(e,t,n,s)=>{for(var a=s>1?void 0:s?hx(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&fx(t,n,a),a};const ia=Qg();function vx(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let b=class extends Ot{constructor(){super(...arguments),this.settings=Zu(),this.password="",this.tab="chat",this.onboarding=vx(),this.connected=!1,this.theme=this.settings.theme??"light",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=ia.name,this.assistantAvatar=ia.avatar,this.assistantAgentId=ia.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="raw",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.channelsSelectedChannelId=null,this.mcpSelectedKey=null,this.mcpViewMode="card",this.mcpEditMode="form",this.mcpEditConnectionType="stdio",this.mcpFormDirty=!1,this.mcpRawJson="",this.mcpRawError=null,this.mcpAddModalOpen=!1,this.mcpAddName="",this.mcpAddDraft={},this.mcpAddConnectionType="stdio",this.mcpAddEditMode="form",this.mcpAddRawJson="{}",this.mcpAddRawError=null,this.llmTraceLoading=!1,this.llmTraceResult=null,this.llmTraceError=null,this.llmTraceMode="active",this.llmTraceSearch="",this.llmTraceEnabled=!1,this.llmTraceSaving=!1,this.sandboxForm=null,this.approvalsLoading=!1,this.approvalsResult=null,this.approvalsError=null,this.modelsSelectedProvider=null,this.modelsViewMode="card",this.modelsFormDirty=!1,this.modelsAddProviderModalOpen=!1,this.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""},this.modelsAddModelModalOpen=!1,this.modelsAddModelForm={modelId:"",modelName:""},this.modelsUseModelModalOpen=!1,this.modelsUseModelModalProvider=null,this.modelsSaveError=null,this.skillsSelectedSkillKey=null,this.skillsSkillDocContent=null,this.skillsSkillDocLoading=!1,this.skillsSkillDocError=null,this.skillsViewMode="card",this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsBulkMode=!1,this.sessionsSelectedKeys=[],this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...qg},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.skillsAddModalOpen=!1,this.skillsUploadName="",this.skillsUploadFile=null,this.skillsUploadError=null,this.skillsUploadTemplate=null,this.skillsUploadBusy=!1,this.digitalEmployeesLoading=!1,this.digitalEmployeesError=null,this.digitalEmployeesFilter="",this.digitalEmployeesViewMode="list",this.digitalEmployees=[],this.digitalEmployeeCreateModalOpen=!1,this.digitalEmployeeCreateName="",this.digitalEmployeeCreateDescription="",this.digitalEmployeeCreatePrompt="",this.digitalEmployeeCreateError=null,this.digitalEmployeeCreateBusy=!1,this.digitalEmployeeAdvancedOpen=!1,this.digitalEmployeeCreateMcpJson="",this.digitalEmployeeSkillUploadName="",this.digitalEmployeeSkillUploadFiles=[],this.digitalEmployeeSkillUploadError=null,this.digitalEmployeeSkillUploadBusy=!1,this.digitalEmployeeEditModalOpen=!1,this.digitalEmployeeEditId="",this.digitalEmployeeEditName="",this.digitalEmployeeEditDescription="",this.digitalEmployeeEditPrompt="",this.digitalEmployeeEditMcpJson="",this.digitalEmployeeEditSkillNames=[],this.digitalEmployeeEditSkillFilesToUpload=[],this.digitalEmployeeEditSkillsToDelete=[],this.digitalEmployeeEditEnabled=!0,this.digitalEmployeeEditError=null,this.digitalEmployeeEditBusy=!1,this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...jg},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>ug(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),ip(this)}firstUpdated(){lp(this)}disconnectedCallback(){rp(this),super.disconnectedCallback()}updated(e){cp(this,e)}connect(){Sr(this)}handleChatScroll(e){hd(this,e)}handleLogsScroll(e){vd(this,e)}exportLogs(e,t){bd(e,t)}resetToolStream(){ys(this)}resetChatScroll(){ti(this)}scrollToBottom(){ti(this),$n(this,!0)}async loadAssistantIdentity(){await $r(this)}applySettings(e){St(this,e)}setTab(e){ag(this,e)}setTheme(e,t){og(this,e,t)}async loadOverview(){await pr(this)}async loadCron(){await Xn(this)}async handleAbortChat(){await vr(this)}removeQueuedMessage(e){Og(this,e)}async handleSendChat(e,t){await Bg(this,e,t)}async handleWhatsAppStart(e){await ad(this,e)}async handleWhatsAppWait(){await od(this)}async handleWhatsAppLogout(){await id(this)}async handleChannelConfigSave(){await ld(this)}async handleChannelConfigReload(){await rd(this)}handleNostrProfileEdit(e,t){dd(this,e,t)}handleNostrProfileCancel(){ud(this)}handleNostrProfileFieldChange(e,t){gd(this,e,t)}async handleNostrProfileSave(){await md(this)}async handleNostrProfileImport(){await fd(this)}handleNostrProfileToggleAdvanced(){pd(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,St(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return mx(this)}};x([$()],b.prototype,"settings",2);x([$()],b.prototype,"password",2);x([$()],b.prototype,"tab",2);x([$()],b.prototype,"onboarding",2);x([$()],b.prototype,"connected",2);x([$()],b.prototype,"theme",2);x([$()],b.prototype,"themeResolved",2);x([$()],b.prototype,"hello",2);x([$()],b.prototype,"lastError",2);x([$()],b.prototype,"eventLog",2);x([$()],b.prototype,"assistantName",2);x([$()],b.prototype,"assistantAvatar",2);x([$()],b.prototype,"assistantAgentId",2);x([$()],b.prototype,"sessionKey",2);x([$()],b.prototype,"chatLoading",2);x([$()],b.prototype,"chatSending",2);x([$()],b.prototype,"chatMessage",2);x([$()],b.prototype,"chatMessages",2);x([$()],b.prototype,"chatToolMessages",2);x([$()],b.prototype,"chatStream",2);x([$()],b.prototype,"chatStreamStartedAt",2);x([$()],b.prototype,"chatRunId",2);x([$()],b.prototype,"compactionStatus",2);x([$()],b.prototype,"chatAvatarUrl",2);x([$()],b.prototype,"chatThinkingLevel",2);x([$()],b.prototype,"chatQueue",2);x([$()],b.prototype,"chatAttachments",2);x([$()],b.prototype,"sidebarOpen",2);x([$()],b.prototype,"sidebarContent",2);x([$()],b.prototype,"sidebarError",2);x([$()],b.prototype,"splitRatio",2);x([$()],b.prototype,"nodesLoading",2);x([$()],b.prototype,"nodes",2);x([$()],b.prototype,"devicesLoading",2);x([$()],b.prototype,"devicesError",2);x([$()],b.prototype,"devicesList",2);x([$()],b.prototype,"execApprovalsLoading",2);x([$()],b.prototype,"execApprovalsSaving",2);x([$()],b.prototype,"execApprovalsDirty",2);x([$()],b.prototype,"execApprovalsSnapshot",2);x([$()],b.prototype,"execApprovalsForm",2);x([$()],b.prototype,"execApprovalsSelectedAgent",2);x([$()],b.prototype,"execApprovalsTarget",2);x([$()],b.prototype,"execApprovalsTargetNodeId",2);x([$()],b.prototype,"execApprovalQueue",2);x([$()],b.prototype,"execApprovalBusy",2);x([$()],b.prototype,"execApprovalError",2);x([$()],b.prototype,"pendingGatewayUrl",2);x([$()],b.prototype,"configLoading",2);x([$()],b.prototype,"configRaw",2);x([$()],b.prototype,"configRawOriginal",2);x([$()],b.prototype,"configValid",2);x([$()],b.prototype,"configIssues",2);x([$()],b.prototype,"configSaving",2);x([$()],b.prototype,"configApplying",2);x([$()],b.prototype,"updateRunning",2);x([$()],b.prototype,"applySessionKey",2);x([$()],b.prototype,"configSnapshot",2);x([$()],b.prototype,"configSchema",2);x([$()],b.prototype,"configSchemaVersion",2);x([$()],b.prototype,"configSchemaLoading",2);x([$()],b.prototype,"configUiHints",2);x([$()],b.prototype,"configForm",2);x([$()],b.prototype,"configFormOriginal",2);x([$()],b.prototype,"configFormDirty",2);x([$()],b.prototype,"configFormMode",2);x([$()],b.prototype,"configSearchQuery",2);x([$()],b.prototype,"configActiveSection",2);x([$()],b.prototype,"configActiveSubsection",2);x([$()],b.prototype,"channelsLoading",2);x([$()],b.prototype,"channelsSnapshot",2);x([$()],b.prototype,"channelsError",2);x([$()],b.prototype,"channelsLastSuccess",2);x([$()],b.prototype,"whatsappLoginMessage",2);x([$()],b.prototype,"whatsappLoginQrDataUrl",2);x([$()],b.prototype,"whatsappLoginConnected",2);x([$()],b.prototype,"whatsappBusy",2);x([$()],b.prototype,"nostrProfileFormState",2);x([$()],b.prototype,"nostrProfileAccountId",2);x([$()],b.prototype,"channelsSelectedChannelId",2);x([$()],b.prototype,"mcpSelectedKey",2);x([$()],b.prototype,"mcpViewMode",2);x([$()],b.prototype,"mcpEditMode",2);x([$()],b.prototype,"mcpEditConnectionType",2);x([$()],b.prototype,"mcpFormDirty",2);x([$()],b.prototype,"mcpRawJson",2);x([$()],b.prototype,"mcpRawError",2);x([$()],b.prototype,"mcpAddModalOpen",2);x([$()],b.prototype,"mcpAddName",2);x([$()],b.prototype,"mcpAddDraft",2);x([$()],b.prototype,"mcpAddConnectionType",2);x([$()],b.prototype,"mcpAddEditMode",2);x([$()],b.prototype,"mcpAddRawJson",2);x([$()],b.prototype,"mcpAddRawError",2);x([$()],b.prototype,"llmTraceLoading",2);x([$()],b.prototype,"llmTraceResult",2);x([$()],b.prototype,"llmTraceError",2);x([$()],b.prototype,"llmTraceMode",2);x([$()],b.prototype,"llmTraceSearch",2);x([$()],b.prototype,"llmTraceEnabled",2);x([$()],b.prototype,"llmTraceSaving",2);x([$()],b.prototype,"sandboxForm",2);x([$()],b.prototype,"approvalsLoading",2);x([$()],b.prototype,"approvalsResult",2);x([$()],b.prototype,"approvalsError",2);x([$()],b.prototype,"modelsSelectedProvider",2);x([$()],b.prototype,"modelsViewMode",2);x([$()],b.prototype,"modelsFormDirty",2);x([$()],b.prototype,"modelsAddProviderModalOpen",2);x([$()],b.prototype,"modelsAddProviderForm",2);x([$()],b.prototype,"modelsAddModelModalOpen",2);x([$()],b.prototype,"modelsAddModelForm",2);x([$()],b.prototype,"modelsUseModelModalOpen",2);x([$()],b.prototype,"modelsUseModelModalProvider",2);x([$()],b.prototype,"modelsSaveError",2);x([$()],b.prototype,"skillsSelectedSkillKey",2);x([$()],b.prototype,"skillsSkillDocContent",2);x([$()],b.prototype,"skillsSkillDocLoading",2);x([$()],b.prototype,"skillsSkillDocError",2);x([$()],b.prototype,"skillsViewMode",2);x([$()],b.prototype,"presenceLoading",2);x([$()],b.prototype,"presenceEntries",2);x([$()],b.prototype,"presenceError",2);x([$()],b.prototype,"presenceStatus",2);x([$()],b.prototype,"agentsLoading",2);x([$()],b.prototype,"agentsList",2);x([$()],b.prototype,"agentsError",2);x([$()],b.prototype,"agentsSelectedId",2);x([$()],b.prototype,"agentsPanel",2);x([$()],b.prototype,"agentFilesLoading",2);x([$()],b.prototype,"agentFilesError",2);x([$()],b.prototype,"agentFilesList",2);x([$()],b.prototype,"agentFileContents",2);x([$()],b.prototype,"agentFileDrafts",2);x([$()],b.prototype,"agentFileActive",2);x([$()],b.prototype,"agentFileSaving",2);x([$()],b.prototype,"agentIdentityLoading",2);x([$()],b.prototype,"agentIdentityError",2);x([$()],b.prototype,"agentIdentityById",2);x([$()],b.prototype,"agentSkillsLoading",2);x([$()],b.prototype,"agentSkillsError",2);x([$()],b.prototype,"agentSkillsReport",2);x([$()],b.prototype,"agentSkillsAgentId",2);x([$()],b.prototype,"sessionsLoading",2);x([$()],b.prototype,"sessionsResult",2);x([$()],b.prototype,"sessionsError",2);x([$()],b.prototype,"sessionsFilterActive",2);x([$()],b.prototype,"sessionsFilterLimit",2);x([$()],b.prototype,"sessionsIncludeGlobal",2);x([$()],b.prototype,"sessionsIncludeUnknown",2);x([$()],b.prototype,"sessionsBulkMode",2);x([$()],b.prototype,"sessionsSelectedKeys",2);x([$()],b.prototype,"usageLoading",2);x([$()],b.prototype,"usageResult",2);x([$()],b.prototype,"usageCostSummary",2);x([$()],b.prototype,"usageError",2);x([$()],b.prototype,"usageStartDate",2);x([$()],b.prototype,"usageEndDate",2);x([$()],b.prototype,"usageSelectedSessions",2);x([$()],b.prototype,"usageSelectedDays",2);x([$()],b.prototype,"usageSelectedHours",2);x([$()],b.prototype,"usageChartMode",2);x([$()],b.prototype,"usageDailyChartMode",2);x([$()],b.prototype,"usageTimeSeriesMode",2);x([$()],b.prototype,"usageTimeSeriesBreakdownMode",2);x([$()],b.prototype,"usageTimeSeries",2);x([$()],b.prototype,"usageTimeSeriesLoading",2);x([$()],b.prototype,"usageSessionLogs",2);x([$()],b.prototype,"usageSessionLogsLoading",2);x([$()],b.prototype,"usageSessionLogsExpanded",2);x([$()],b.prototype,"usageQuery",2);x([$()],b.prototype,"usageQueryDraft",2);x([$()],b.prototype,"usageSessionSort",2);x([$()],b.prototype,"usageSessionSortDir",2);x([$()],b.prototype,"usageRecentSessions",2);x([$()],b.prototype,"usageTimeZone",2);x([$()],b.prototype,"usageContextExpanded",2);x([$()],b.prototype,"usageHeaderPinned",2);x([$()],b.prototype,"usageSessionsTab",2);x([$()],b.prototype,"usageVisibleColumns",2);x([$()],b.prototype,"usageLogFilterRoles",2);x([$()],b.prototype,"usageLogFilterTools",2);x([$()],b.prototype,"usageLogFilterHasTools",2);x([$()],b.prototype,"usageLogFilterQuery",2);x([$()],b.prototype,"cronLoading",2);x([$()],b.prototype,"cronJobs",2);x([$()],b.prototype,"cronStatus",2);x([$()],b.prototype,"cronError",2);x([$()],b.prototype,"cronForm",2);x([$()],b.prototype,"cronRunsJobId",2);x([$()],b.prototype,"cronRuns",2);x([$()],b.prototype,"cronBusy",2);x([$()],b.prototype,"skillsLoading",2);x([$()],b.prototype,"skillsReport",2);x([$()],b.prototype,"skillsError",2);x([$()],b.prototype,"skillsFilter",2);x([$()],b.prototype,"skillEdits",2);x([$()],b.prototype,"skillsBusyKey",2);x([$()],b.prototype,"skillMessages",2);x([$()],b.prototype,"skillsAddModalOpen",2);x([$()],b.prototype,"skillsUploadName",2);x([$()],b.prototype,"skillsUploadFile",2);x([$()],b.prototype,"skillsUploadError",2);x([$()],b.prototype,"skillsUploadTemplate",2);x([$()],b.prototype,"skillsUploadBusy",2);x([$()],b.prototype,"digitalEmployeesLoading",2);x([$()],b.prototype,"digitalEmployeesError",2);x([$()],b.prototype,"digitalEmployeesFilter",2);x([$()],b.prototype,"digitalEmployeesViewMode",2);x([$()],b.prototype,"digitalEmployees",2);x([$()],b.prototype,"digitalEmployeeCreateModalOpen",2);x([$()],b.prototype,"digitalEmployeeCreateName",2);x([$()],b.prototype,"digitalEmployeeCreateDescription",2);x([$()],b.prototype,"digitalEmployeeCreatePrompt",2);x([$()],b.prototype,"digitalEmployeeCreateError",2);x([$()],b.prototype,"digitalEmployeeCreateBusy",2);x([$()],b.prototype,"digitalEmployeeAdvancedOpen",2);x([$()],b.prototype,"digitalEmployeeCreateMcpJson",2);x([$()],b.prototype,"digitalEmployeeSkillUploadName",2);x([$()],b.prototype,"digitalEmployeeSkillUploadFiles",2);x([$()],b.prototype,"digitalEmployeeSkillUploadError",2);x([$()],b.prototype,"digitalEmployeeSkillUploadBusy",2);x([$()],b.prototype,"digitalEmployeeEditModalOpen",2);x([$()],b.prototype,"digitalEmployeeEditId",2);x([$()],b.prototype,"digitalEmployeeEditName",2);x([$()],b.prototype,"digitalEmployeeEditDescription",2);x([$()],b.prototype,"digitalEmployeeEditPrompt",2);x([$()],b.prototype,"digitalEmployeeEditMcpJson",2);x([$()],b.prototype,"digitalEmployeeEditSkillNames",2);x([$()],b.prototype,"digitalEmployeeEditSkillFilesToUpload",2);x([$()],b.prototype,"digitalEmployeeEditSkillsToDelete",2);x([$()],b.prototype,"digitalEmployeeEditEnabled",2);x([$()],b.prototype,"digitalEmployeeEditError",2);x([$()],b.prototype,"digitalEmployeeEditBusy",2);x([$()],b.prototype,"debugLoading",2);x([$()],b.prototype,"debugStatus",2);x([$()],b.prototype,"debugHealth",2);x([$()],b.prototype,"debugModels",2);x([$()],b.prototype,"debugHeartbeat",2);x([$()],b.prototype,"debugCallMethod",2);x([$()],b.prototype,"debugCallParams",2);x([$()],b.prototype,"debugCallResult",2);x([$()],b.prototype,"debugCallError",2);x([$()],b.prototype,"logsLoading",2);x([$()],b.prototype,"logsError",2);x([$()],b.prototype,"logsFile",2);x([$()],b.prototype,"logsEntries",2);x([$()],b.prototype,"logsFilterText",2);x([$()],b.prototype,"logsLevelFilters",2);x([$()],b.prototype,"logsAutoFollow",2);x([$()],b.prototype,"logsTruncated",2);x([$()],b.prototype,"logsCursor",2);x([$()],b.prototype,"logsLastFetchAt",2);x([$()],b.prototype,"logsLimit",2);x([$()],b.prototype,"logsMaxBytes",2);x([$()],b.prototype,"logsAtBottom",2);x([$()],b.prototype,"chatNewMessagesBelow",2);b=x([Ml("openclaw-app")],b);
//# sourceMappingURL=index-BhUUGvs7.js.map

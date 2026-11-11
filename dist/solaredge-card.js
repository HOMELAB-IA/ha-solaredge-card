/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

function getKw(hass, entityId) {
    const entity = hass.states[entityId];
    if (!entity)
        return 0;
    const value = parseFloat(entity.state);
    if (isNaN(value))
        return 0;
    const unit = entity.attributes.unit_of_measurement ?? '';
    return unit === 'W' ? value / 1000 : value;
}
function getFloat(hass, entityId) {
    const val = parseFloat(hass.states[entityId]?.state ?? '0');
    return isNaN(val) ? 0 : val;
}
function formatKw(value) {
    const abs = Math.abs(value);
    if (abs >= 10)
        return String(Math.round(abs));
    if (abs >= 1)
        return abs.toFixed(1).replace('.', ',');
    return abs.toFixed(2).replace('.', ',');
}
function badgeWidth(text) {
    return Math.max(Math.ceil(text.length * 6) + 44, 80);
}
function computeGridDisplay(rawKw) {
    const isExport = rawKw < 0;
    const kw = Math.abs(rawKw);
    return {
        text: isExport ? `Export ${formatKw(kw)} kW` : `Import ${formatKw(kw)} kW`,
        dotColor: isExport ? '#2fb3c0' : '#f59e4b',
    };
}
function computeEvText(name, kw, bat) {
    if (bat !== null)
        return `${name} · ${formatKw(kw)} kW · ${bat} %`;
    if (kw > 0.05)
        return `${name} · ${formatKw(kw)} kW`;
    return name;
}

class SolarEdgeCard extends i {
    static getConfigElement() {
        return document.createElement('solaredge-card-editor');
    }
    static getStubConfig() {
        return { type: 'custom:solaredge-card', solar_power: '', grid_power: '', consumption: '' };
    }
    setConfig(config) {
        if (!config.solar_power)
            throw new Error('solar_power est requis');
        if (!config.grid_power)
            throw new Error('grid_power est requis');
        if (!config.consumption)
            throw new Error('consumption est requis');
        this._config = config;
    }
    static getCardSize() {
        return 4;
    }
    render() {
        if (!this._config || !this.hass)
            return A;
        const cfg = this._config;
        const hass = this.hass;
        const solarKw = getKw(hass, cfg.solar_power);
        const rawGridKw = getKw(hass, cfg.grid_power);
        const totalKw = getKw(hass, cfg.consumption);
        const evKw = cfg.ev_power ? getKw(hass, cfg.ev_power) : 0;
        const evBat = cfg.ev_battery ? Math.round(getFloat(hass, cfg.ev_battery)) : null;
        const evName = cfg.ev_name ?? 'VE';
        const isDay = solarKw > 0.1;
        // La consommation maison exclut la charge VE
        const houseKw = Math.max(0, totalKw - evKw);
        const solarText = `${formatKw(solarKw)} kW`;
        const { text: gridText, dotColor: gridDot } = computeGridDisplay(rawGridKw);
        const houseText = `Maison ${formatKw(houseKw)} kW`;
        const evText = computeEvText(evName, evKw, evBat);
        return b `<ha-card>${this._scene(isDay, solarText, gridText, houseText, evText, gridDot)}</ha-card>`;
    }
    _scene(isDay, solarText, gridText, houseText, evText, gridDot) {
        const bg = isDay ? '#ffffff' : '#dfe5f0';
        const panelFill = isDay ? '#2a4a92' : '#1a2b54';
        const windowFill = isDay ? '#bcd3ee' : '#ffd88a';
        const ledColor = isDay ? '#33c27a' : '#9aa5b4';
        const dayOp = isDay ? 1 : 0;
        const nightOp = isDay ? 0 : 1;
        const badgeBg = isDay ? '#ffffff' : '#edf0f7';
        const sw = badgeWidth(solarText);
        const gw = badgeWidth(gridText);
        const hw = badgeWidth(houseText);
        const ew = badgeWidth(evText);
        // positions badges
        const sx = 175 - sw / 2; // solar : centré
        const gx = 342 - gw; // grid  : aligné droite
        return b `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 350 280"
        role="img"
        aria-label="Flux d'énergie solaire en temps réel"
      >
        <!-- fond -->
        <rect x="0" y="0" width="350" height="280" rx="22" fill="${bg}" />
        <!-- plateforme 3D -->
        <polygon points="10.5,165 175,260 175,270 10.5,175" fill="#d3dbe6" />
        <polygon points="175,260 339.5,165 339.5,175 175,270" fill="#c3cddb" />
        <polygon points="175,70 339.5,165 175,260 10.5,165" fill="#e9eef5" />
        <!-- toit -->
        <polygon points="175,45 242.5,84 213.1,67 145.6,28" fill="#8f5a43" />
        <!-- murs maison -->
        <polygon points="123,120 183.7,155 183.7,110 123,75" fill="#f6f2ec" />
        <polygon points="235.6,125 183.7,155 183.7,110 209.6,65 235.6,80" fill="#e0d9cf" />
        <polygon points="116.1,79 183.7,118 213.1,67 145.6,28" fill="#ab6d50" />
        <!-- panneaux solaires -->
        <polygon
          points="130,75 180.2,104 199.2,71 149,42"
          fill="${panelFill}"
          stroke="#5d7fc4"
          stroke-width="0.8"
        />
        <path
          d="M146.7 84.7 L165.7 51.7 M163.4 94.3 L182.4 61.3 M139.5 58.5 L189.7 87.5"
          stroke="#5d7fc4"
          stroke-width="0.8"
        />
        <!-- porte -->
        <polygon points="140.4,130 150.8,136 150.8,112 140.4,106" fill="#8a6f5c" />
        <!-- fenêtres -->
        <polygon points="161.1,128 175,136 175,120 161.1,112" fill="${windowFill}" />
        <polygon points="227,114 216.6,120 216.6,106 227,100" fill="${windowFill}" />
        <!-- rails flux (fond gris) -->
        <path
          d="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M188 177.5 L227 200 L296.2 160"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M188 177.5 L128.2 143 L145.6 133"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M188 177.5 L150.8 199 L108.3 174.5"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <!-- flux jour : solaire actif -->
        <g opacity="${dayOp}">
          <path
            d="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
            fill="none"
            stroke="#f5a524"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L227 200 L296.2 160"
            fill="none"
            stroke="#2fb3c0"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L128.2 143 L145.6 133"
            fill="none"
            stroke="#3ccf7e"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L150.8 199 L108.3 174.5"
            fill="none"
            stroke="#3ccf7e"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <circle r="3.6" fill="#f5a524">
            <animateMotion
              dur="1.2s"
              repeatCount="indefinite"
              path="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f5a524">
            <animateMotion
              dur="1.2s"
              begin="-0.6s"
              repeatCount="indefinite"
              path="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#2fb3c0">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path="M188 177.5 L227 200 L296.2 160"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#2fb3c0">
            <animateMotion
              dur="2s"
              begin="-1s"
              repeatCount="indefinite"
              path="M188 177.5 L227 200 L296.2 160"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="2.4s"
              repeatCount="indefinite"
              path="M188 177.5 L128.2 143 L145.6 133"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="2.4s"
              begin="-1.2s"
              repeatCount="indefinite"
              path="M188 177.5 L128.2 143 L145.6 133"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="1.5s"
              begin="-0.75s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
        </g>
        <!-- flux nuit : import réseau -->
        <g opacity="${nightOp}">
          <path
            d="M296.2 160 L227 200 L188 177.5"
            fill="none"
            stroke="#f59e4b"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L128.2 143 L145.6 133"
            fill="none"
            stroke="#f59e4b"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L150.8 199 L108.3 174.5"
            fill="none"
            stroke="#f59e4b"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.3s"
              repeatCount="indefinite"
              path="M296.2 160 L227 200 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.3s"
              begin="-0.65s"
              repeatCount="indefinite"
              path="M296.2 160 L227 200 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M188 177.5 L128.2 143 L145.6 133"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.5s"
              begin="-0.75s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
        </g>
        <!-- hub onduleur -->
        <ellipse cx="188" cy="177.5" rx="7" ry="4" fill="#ffffff" stroke="#9fb7d6" stroke-width="1.5" />
        <!-- boîtier onduleur -->
        <polygon
          points="209.6,137 198.4,143.5 198.4,121.5 209.6,115"
          fill="#f7f9fc"
          stroke="#b7c3d3"
          stroke-width="0.6"
        />
        <polygon points="194.1,141 198.4,143.5 198.4,121.5 194.1,119" fill="#c9d3e0" />
        <polygon points="205.3,112.5 209.6,115 198.4,121.5 194.1,119" fill="#e3e9f1" />
        <path d="M207 134.5 L203.6 136.5" stroke="${ledColor}" stroke-width="1.6" stroke-linecap="round" />
        <!-- pylône réseau -->
        <path
          d="M282.4 160 L296.2 65 L310.1 160 M296.2 168 L296.2 65 M278.9 72 L313.6 92 M281.5 89.5 L311 106.5 M286 120 L306 132 M286 132 L306 120 M289 145 L304 154"
          fill="none"
          stroke="#6b7480"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <!-- roues VE -->
        <ellipse cx="38.2" cy="162" rx="5" ry="3.6" fill="#1f2430" />
        <ellipse cx="62.4" cy="176" rx="5" ry="3.6" fill="#1f2430" />
        <ellipse cx="86.7" cy="172" rx="3.6" ry="5" fill="#1f2430" />
        <!-- carrosserie VE -->
        <polygon points="29.5,158 71.1,182 71.1,169 29.5,145" fill="#2b5fa8" />
        <polygon points="91.9,170 71.1,182 71.1,169 91.9,157" fill="#214c88" />
        <polygon points="50.3,133 91.9,157 71.1,169 29.5,145" fill="#3a72c2" />
        <!-- vitres VE -->
        <polygon points="39,149.5 63.3,163.5 60.7,149 45.1,140" fill="#22344f" />
        <polygon points="82.3,152.5 63.3,163.5 60.7,149 76.3,140" fill="#1b2a40" />
        <polygon points="60.7,131 76.3,140 60.7,149 45.1,140" fill="#30466a" />
        <!-- connecteur VE -->
        <path d="M74.5 172 L78.9 169.5" stroke="#e8f1ff" stroke-width="2" stroke-linecap="round" />
        <!-- borne de charge -->
        <polygon points="109.2,172 104,175 104,145 109.2,142" fill="#374151" />
        <polygon points="98.8,172 104,175 104,145 98.8,142" fill="#1f2937" />
        <polygon points="104,139 109.2,142 104,145 98.8,142" fill="#4b5563" />
        <polygon points="108.3,154.5 104.9,156.5 104.9,149.5 108.3,147.5" fill="#3ccf7e" />
        <!-- câble borne -->
        <path d="M106.6 153.5 Q96 172 89 163" fill="none" stroke="#1f2937" stroke-width="1.6" stroke-linecap="round" />
        <!-- badges valeurs -->
        <g
          font-family="Inter, Roboto, Helvetica, Arial, sans-serif"
          font-size="11"
          font-weight="600"
          fill="#1f2430"
        >
          <!-- production solaire (centré en haut) -->
          <rect x="${sx}" y="2" width="${sw}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="${sx + 12}" cy="13" r="4" fill="#f5a524" />
          <text x="${sx + 22}" y="17">${solarText}</text>
          <!-- échange réseau (droite) -->
          <rect x="${gx}" y="26" width="${gw}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="${gx + 12}" cy="37" r="4" fill="${gridDot}" />
          <text x="${gx + 22}" y="41">${gridText}</text>
          <!-- consommation maison (gauche) -->
          <rect x="8" y="98" width="${hw}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="20" cy="109" r="4" fill="#7ea6f6" />
          <text x="30" y="113">${houseText}</text>
          <!-- VE (bas gauche) -->
          <rect x="10" y="196" width="${ew}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="22" cy="207" r="4" fill="#8b5cf6" />
          <text x="32" y="211">${evText}</text>
        </g>
      </svg>
    `;
    }
}
SolarEdgeCard.styles = i$3 `
    :host {
      display: block;
    }
    ha-card {
      overflow: hidden;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  `;
__decorate([
    n({ attribute: false })
], SolarEdgeCard.prototype, "hass", void 0);
__decorate([
    r()
], SolarEdgeCard.prototype, "_config", void 0);

const SCHEMA = [
    { name: 'solar_power', selector: { entity: { domain: 'sensor' } } },
    { name: 'grid_power', selector: { entity: { domain: 'sensor' } } },
    { name: 'consumption', selector: { entity: { domain: 'sensor' } } },
    { name: 'ev_power', selector: { entity: { domain: 'sensor' } } },
    { name: 'ev_switch', selector: { entity: { domain: 'switch' } } },
    { name: 'ev_battery', selector: { entity: { domain: 'sensor' } } },
    { name: 'ev_name', selector: { text: {} } },
    { name: 'connectivity', selector: { entity: { domain: 'binary_sensor' } } },
    { name: 'alerts', selector: { entity: { domain: 'sensor' } } },
];
const LABELS = {
    solar_power: 'Production solaire (W/kW) ✱',
    grid_power: 'Puissance réseau (W/kW, >0 import, <0 export) ✱',
    consumption: 'Consommation totale (W/kW) ✱',
    ev_power: 'Puissance de charge VE',
    ev_switch: 'Switch borne de charge',
    ev_battery: 'Niveau batterie VE (%)',
    ev_name: 'Nom du véhicule (affiché dans le badge)',
    connectivity: 'Connectivité onduleur (binary_sensor)',
    alerts: "Nombre d'alertes onduleur",
};
const HELPERS = {
    solar_power: 'Capteur en Watt ou kWatt (ex: sensor.solar_power).',
    grid_power: 'Valeur positive = import depuis le réseau, négative = export.',
    consumption: 'Consommation totale de la maison (hors VE inclus si déjà dedans).',
};
class SolarEdgeCardEditor extends i {
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this._config)
            return A;
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${(s) => LABELS[s.name] ?? s.name}
        .computeHelper=${(s) => HELPERS[s.name] ?? ''}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
    }
    _valueChanged(ev) {
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: ev.detail.value },
            bubbles: true,
            composed: true,
        }));
    }
}
__decorate([
    n({ attribute: false })
], SolarEdgeCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], SolarEdgeCardEditor.prototype, "_config", void 0);
if (typeof customElements !== 'undefined') {
    customElements.define('solaredge-card-editor', SolarEdgeCardEditor);
}

if (typeof customElements !== 'undefined') {
    customElements.define('solaredge-card', SolarEdgeCard);
}

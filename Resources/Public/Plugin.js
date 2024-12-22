var ce=Object.create;var Q=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var ge=Object.getOwnPropertyNames;var fe=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var de=(e,t)=>()=>(e&&(t=e(e=0)),t);var X=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var he=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ge(t))!me.call(e,s)&&s!==a&&Q(e,s,{get:()=>t[s],enumerable:!(o=le(t,s))||o.enumerable});return e};var B=(e,t,a)=>(a=e!=null?ce(fe(e)):{},he(t||!e||!e.__esModule?Q(a,"default",{value:e,enumerable:!0}):a,e));function D(e){return(...t)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...t);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var U=de(()=>{});var J=X((cr,ee)=>{U();ee.exports=D("vendor")().React});var te=X((gr,re)=>{U();re.exports=D("NeosProjectPackages")().NeosUiDecorators});U();var R=D("manifest");var i=B(J(),1),oe=B(te(),1);var g=B(J());function be(e,t,a){var o=this,s=(0,g.useRef)(null),f=(0,g.useRef)(0),c=(0,g.useRef)(null),y=(0,g.useRef)([]),$=(0,g.useRef)(),v=(0,g.useRef)(),j=(0,g.useRef)(e),m=(0,g.useRef)(!0);j.current=e;var h=typeof window<"u",r=!t&&t!==0&&h;if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0;var w=!!(a=a||{}).leading,k=!("trailing"in a)||!!a.trailing,z="maxWait"in a,_="debounceOnServer"in a&&!!a.debounceOnServer,l=z?Math.max(+a.maxWait||0,t):null;(0,g.useEffect)(function(){return m.current=!0,function(){m.current=!1}},[]);var O=(0,g.useMemo)(function(){var C=function(u){var d=y.current,N=$.current;return y.current=$.current=null,f.current=u,v.current=j.current.apply(N,d)},x=function(u,d){r&&cancelAnimationFrame(c.current),c.current=r?requestAnimationFrame(u):setTimeout(u,d)},M=function(u){if(!m.current)return!1;var d=u-s.current;return!s.current||d>=t||d<0||z&&u-f.current>=l},q=function(u){return c.current=null,k&&y.current?C(u):(y.current=$.current=null,v.current)},E=function u(){var d=Date.now();if(M(d))return q(d);if(m.current){var N=t-(d-s.current),L=z?Math.min(N,l-(d-f.current)):N;x(u,L)}},p=function(){if(h||_){var u=Date.now(),d=M(u);if(y.current=[].slice.call(arguments),$.current=o,s.current=u,d){if(!c.current&&m.current)return f.current=s.current,x(E,t),w?C(s.current):v.current;if(z)return x(E,t),C(s.current)}return c.current||x(E,t),v.current}};return p.cancel=function(){c.current&&(r?cancelAnimationFrame(c.current):clearTimeout(c.current)),f.current=0,y.current=s.current=$.current=c.current=null},p.isPending=function(){return!!c.current},p.flush=function(){return c.current?q(Date.now()):v.current},p},[w,z,t,l,k,r,h,_]);return O}function ye(e,t){return e===t}function ne(e,t,a){var o=a&&a.equalityFn||ye,s=(0,g.useRef)(e),f=(0,g.useState)({})[1],c=be((0,g.useCallback)(function($){s.current=$,f({})},[f]),t,a),y=(0,g.useRef)(e);return o(y.current,e)||(c(e),y.current=e),[s.current,c]}var T={},ae;function we(){if(ae)return T;ae=1,Object.defineProperty(T,"__esModule",{value:!0}),T.styleq=void 0;var e=new WeakMap,t="$$css";function a(s){var f,c,y;return s!=null&&(f=s.disableCache===!0,c=s.disableMix===!0,y=s.transform),function(){for(var v=[],j="",m=null,h=f?null:e,r=new Array(arguments.length),w=0;w<arguments.length;w++)r[w]=arguments[w];for(;r.length>0;){var k=r.pop();if(!(k==null||k===!1)){if(Array.isArray(k)){for(var z=0;z<k.length;z++)r.push(k[z]);continue}var _=y!=null?y(k):k;if(_.$$css){var l="";if(h!=null&&h.has(_)){var O=h.get(_);O!=null&&(l=O[0],v.push.apply(v,O[1]),h=O[2])}else{var C=[];for(var x in _){var M=_[x];x!==t&&(typeof M=="string"||M===null?v.includes(x)||(v.push(x),h!=null&&C.push(x),typeof M=="string"&&(l+=l?" "+M:M)):console.error("styleq: ".concat(x," typeof ").concat(String(M),' is not "string" or "null".')))}if(h!=null){var q=new WeakMap;h.set(_,[l,C,q]),h=q}}l&&(j=j?l+" "+j:l)}else if(c)m==null&&(m={}),m=Object.assign({},_,m);else{var E=null;for(var p in _){var u=_[p];u!==void 0&&(v.includes(p)||(u!=null&&(m==null&&(m={}),E==null&&(E={}),E[p]=u),v.push(p),h=null))}E!=null&&(m=Object.assign(E,m))}}}var d=[j,m];return d}}var o=a();return T.styleq=o,o.factory=a,T}var se=we(),I=e=>new Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),A=e=>I(`types.${e}`);function V(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];let[o,s]=se.styleq(t),f={};return o!=null&&o!==""&&(f.className=o),s!=null&&Object.keys(s).length>0&&(f.style=s),f}function xe(){let{className:e,style:t}=V(...arguments),a={};return e!=null&&e!==""&&(a.class=e),t!=null&&Object.keys(t).length>0&&(a.style=Object.keys(t).map(o=>`${o}:${t[o]};`).join("")),a}function ve(e){throw I("create")}function _e(e){throw I("defineVars")}var ke=(e,t)=>{throw I("createTheme")},Me=e=>{throw I("include")},Ne=ve,Ae=_e,ze=ke,je=Me,Ee={angle:e=>{throw A("angle")},color:e=>{throw A("color")},url:e=>{throw A("url")},image:e=>{throw A("image")},integer:e=>{throw A("integer")},lengthPercentage:e=>{throw A("lengthPercentage")},length:e=>{throw A("length")},percentage:e=>{throw A("percentage")},number:e=>{throw A("number")},resolution:e=>{throw A("resolution")},time:e=>{throw A("time")},transformFunction:e=>{throw A("transformFunction")},transformList:e=>{throw A("transformList")}},$e=e=>{throw I("keyframes")},Oe=function(){throw I("firstThatWorks")};function S(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];let[o]=se.styleq(t);return o}S.props=V;S.attrs=xe;S.create=Ne;S.defineVars=Ae;S.createTheme=ze;S.include=je;S.keyframes=$e;S.firstThatWorks=Oe;S.types=Ee;var Le={min:0,max:100,step:1,unit:"",showMinLabel:!0,showMaxLabel:!0,minLabel:null,maxLabel:null,disabled:!1,showInput:!0,valueLabelsFile:"",valueLabels:{}},W={slider:{"--opacity":"range-1xmiaan",appearance:"range-jyslct",background:"range-140bi14",cursor:"range-1ypdohk",height:"range-lrawln",outline:"range-1a2a7pz",width:"range-h8yej3",borderRadius:"range-1cum3z5",":focus_--opacity":"range-npukh0","::-webkit-slider-thumb_appearance":"range-ibs45w","::-webkit-slider-thumb_background":"range-gk9k07","::-webkit-slider-thumb_borderRadius":"range-10481fn","::-webkit-slider-thumb_boxShadow":"range-1kthjsd","::-webkit-slider-thumb_cursor":"range-u2yhzc","::-webkit-slider-thumb_height":"range-1p6diu8","::-webkit-slider-thumb_opacity":"range-avsfv4","::-webkit-slider-thumb_width":"range-1iqn34f","::-webkit-slider-thumb_border":"range-jpt6gn","::-webkit-slider-thumb_transitionProperty":"range-5rbd5","::-webkit-slider-thumb_transitionTimingFunction":"range-1att8qm","::-webkit-slider-thumb_transitionDuration":"range-10ysmi6","::-webkit-slider-thumb_:hover_opacity":"range-5e1a76","::-webkit-slider-thumb_:active_cursor":"range-1tk0e90","::-webkit-slider-thumb_:active_transform":"range-1xk2y70","::-moz-range-thumb_appearance":"range-13fi9fm","::-moz-range-thumb_background":"range-1vedxjn","::-moz-range-thumb_borderRadius":"range-v968mp","::-moz-range-thumb_boxShadow":"range-66xn83","::-moz-range-thumb_cursor":"range-vs8oyn","::-moz-range-thumb_height":"range-1xyey98","::-moz-range-thumb_opacity":"range-hyizb5","::-moz-range-thumb_width":"range-jt8dmu","::-moz-range-thumb_border":"range-s99pfi","::-moz-range-thumb_transitionProperty":"range-bffa19","::-moz-range-thumb_transitionTimingFunction":"range-e42of","::-moz-range-thumb_transitionDuration":"range-96lbvo","::-moz-range-thumb_:hover_opacity":"range-l3xga7","::-moz-range-thumb_:active_cursor":"range-uyzg6f","::-moz-range-thumb_:active_transform":"range-oo02y2",$$css:!0},highlight:{boxShadow:"range-5mwlyb",$$css:!0},editorValue:{alignItems:"range-6s0dn4",display:"range-78zum5",flexDirection:"range-1q0g3np",justifyContent:"range-1qughib",$$css:!0},textfield:{background:"range-140bi14",border:"range-1wty727",color:"range-ftaoss",display:"range-78zum5",alignItems:"range-6s0dn4",padding:"range-29crso",borderRadius:"range-1cum3z5",gap:"range-12mrbbr",cursor:"range-1ed109x",":focus-within_color":"range-1md4nzd",":focus-within_background":"range-uq02hg",$$css:!0},textfieldGap:{gap:"range-6gsi71",rowGap:null,columnGap:null,$$css:!0},editorValueSingle:{justifyContent:"range-l56j7k",$$css:!0},editorDisabled:{"--color":"range-36r50j",opacity:"range-190dgpg",cursor:"range-1h6gzvc",":where(*)>*_pointerEvents":"range-vszx66",$$css:!0},editorEnabled:{"--color":"range-13jlg89",$$css:!0}};function Pe({value:e,id:t,highlight:a,i18nRegistry:o,onEnterKey:s,onKeyDown:f,onKeyPress:c,commit:y,...$}){let v=Se(),[j,m]=(0,i.useState)(e),[h]=ne(j,500),r={...Le,...$.options},{disabled:w}=r,k=r.ratio==!0&&r.unit=="%"&&r.min>=0&&r.max<=100,z=(0,i.useRef)(null),_=n=>{l(n.target.value)};(0,i.useEffect)(()=>{if(h!=e){let{step:n,min:F}=r,P=parseFloat(h),b=n-(P-F)%n;(b==0||b==n)&&(b=0),b>n/2&&(b=b-n);let Y=Math.min(r.max,Math.max(r.min,P+b));l(Y)}},[h]);let l=n=>{m(n),n=(r.step||1)%1===0?parseInt(n,10):parseFloat(n,10),!isNaN(n)&&(n=Math.min(r.max,Math.max(r.min,n)),y(n),v())},O=n=>{if(typeof c=="function"&&c(n),n.key==="Enter"&&typeof s=="function"){s();return}},C=n=>{typeof f=="function"&&f(n);let F=n.key,P=F=="ArrowUp";if(F=="ArrowDown"||P){let b=r.step,{metaKey:Y,shiftKey:ue}=n;if(b=b*(ue?10:Y?100:1),P){l(Math.min(e+b,r.max)),n.preventDefault();return}l(Math.max(e-b,r.min)),n.preventDefault();return}},x=e||"0",M=n=>n.toString().length,q=M(r.step)-1,E=Math.max(M(r.min),M(r.max))+q+"ch",p=r.unit?o.translate(r.unit):"",{valueLabels:u,valueLabelsFile:d,showInput:N}=r,L=Fe(e,r.min,r.max);r.showMinLabel||(L=L||e===r.min),r.showMaxLabel||(L=L||e===r.max);let G=n=>u&&u[n]?u[n]:d?`${d}:${n}`:null,H=(n,F)=>{if(n<=r.min){let P=!N||F?r.min+p:null,b=r.minLabel||G(r.min)||P;return o.translate(b)}if(n>=r.max){let P=!N||F?r.max+p:null,b=r.maxLabel||G(r.max)||P;return o.translate(b)}return o.translate(G(n))},K=H(e);return i.default.createElement("div",{...V(w?W.editorDisabled:W.editorEnabled)},i.default.createElement("input",{type:"range",id:!k&&!K&&N?null:t,min:r.min,max:r.max,step:r.step,value:x,onChange:_,onKeyDown:C,onKeyPress:O,disabled:w,...V(W.slider,a&&W.highlight)}),i.default.createElement("div",{...V(W.editorValue,!r.showMinLabel&&!r.showMaxLabel&&W.editorValueSingle)},k?i.default.createElement(i.default.Fragment,null,i.default.createElement("button",{type:"button",title:o.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>l(r.min),disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-sofr38 range-1cm8ssg"},x,"%"),i.default.createElement("button",{type:"button",title:o.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>l(r.max),disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-sofr38 range-1cm8ssg"},100-e,"%")):i.default.createElement(i.default.Fragment,null,r.showMinLabel&&i.default.createElement("button",{type:"button",title:o.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>l(r.min),style:{opacity:!N&&r.min>=e?1:.7},disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-sofr38 range-1cm8ssg"},H(r.min,!0)),!L&&!N&&i.default.createElement("span",null,"\xA0"),K&&L&&i.default.createElement("span",{className:"range-87ps6o"},K),!K&&N&&i.default.createElement("span",{...V(W.textfield,!!p&&p.toString().startsWith(" ")&&W.textfieldGap),onClick:()=>{z?.current?.focus()}},i.default.createElement("input",{id:t,title:o.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyDown:C,onKeyPress:n=>{O(n),isNaN(n.key)&&n.preventDefault()},onChange:n=>m(n.target.value),value:j||"0",style:{width:E},disabled:w,ref:z,className:"range-jyslct range-1717udv range-1wty727 range-1ghz6dp range-1md70p1 range-1heor9g range-1rg5ohu range-1hr2gdg range-1afcbsf range-1uvtmcs"}),p&&i.default.createElement("span",{className:"range-87ps6o"},p.toString().trim())),!K&&L&&!N&&i.default.createElement("span",{className:"range-87ps6o"},x,p),r.showMaxLabel&&i.default.createElement("button",{type:"button",title:o.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>l(r.max),style:{opacity:!N&&r.max<=e?1:.7},disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-sofr38 range-1cm8ssg"},H(r.max,!0)))))}function Se(){let[,e]=(0,i.useState)(0);return()=>e(t=>t+1)}function Fe(e,t,a){return e>t&&e<a}var We=(0,oe.neos)(e=>({i18nRegistry:e.get("i18n")})),ie=We(Pe);R("Carbon.RangeEditor:Editor",{},e=>{e.get("inspector").get("editors").set("Carbon.RangeEditor/Editor",{component:ie})});

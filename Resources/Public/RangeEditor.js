import{a as ne,b as B,c as H,d as te,e as J}from"./chunk-DU7SBTEB.js";var X=ne(($e,Q)=>{te();Q.exports=H("NeosProjectPackages")().NeosUiDecorators});var o=B(J(),1),ee=B(X(),1);var g=B(J());function ae(e,t,a){var i=this,s=(0,g.useRef)(null),m=(0,g.useRef)(0),l=(0,g.useRef)(null),y=(0,g.useRef)([]),L=(0,g.useRef)(),v=(0,g.useRef)(),q=(0,g.useRef)(e),f=(0,g.useRef)(!0);q.current=e;var h=typeof window<"u",r=!t&&t!==0&&h;if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0;var w=!!(a=a||{}).leading,k=!("trailing"in a)||!!a.trailing,$="maxWait"in a,_="debounceOnServer"in a&&!!a.debounceOnServer,c=$?Math.max(+a.maxWait||0,t):null;(0,g.useEffect)(function(){return f.current=!0,function(){f.current=!1}},[]);var D=(0,g.useMemo)(function(){var F=function(u){var d=y.current,M=L.current;return y.current=L.current=null,m.current=u,v.current=q.current.apply(M,d)},x=function(u,d){r&&cancelAnimationFrame(l.current),l.current=r?requestAnimationFrame(u):setTimeout(u,d)},z=function(u){if(!f.current)return!1;var d=u-s.current;return!s.current||d>=t||d<0||$&&u-m.current>=c},E=function(u){return l.current=null,k&&y.current?F(u):(y.current=L.current=null,v.current)},N=function u(){var d=Date.now();if(z(d))return E(d);if(f.current){var M=t-(d-s.current),T=$?Math.min(M,c-(d-m.current)):M;x(u,T)}},b=function(){if(h||_){var u=Date.now(),d=z(u);if(y.current=[].slice.call(arguments),L.current=i,s.current=u,d){if(!l.current&&f.current)return m.current=s.current,x(N,t),w?F(s.current):v.current;if($)return x(N,t),F(s.current)}return l.current||x(N,t),v.current}};return b.cancel=function(){l.current&&(r?cancelAnimationFrame(l.current):clearTimeout(l.current)),m.current=0,y.current=s.current=L.current=l.current=null},b.isPending=function(){return!!l.current},b.flush=function(){return l.current?E(Date.now()):v.current},b},[w,$,t,c,k,r,h,_]);return D}function ie(e,t){return e===t}function Y(e,t,a){var i=a&&a.equalityFn||ie,s=(0,g.useRef)(e),m=(0,g.useState)({})[1],l=ae((0,g.useCallback)(function(L){s.current=L,m({})},[m]),t,a),y=(0,g.useRef)(e);return i(y.current,e)||(l(e),y.current=e),[s.current,l]}var O={},Z;function oe(){if(Z)return O;Z=1,Object.defineProperty(O,"__esModule",{value:!0}),O.styleq=void 0;var e=new WeakMap,t="$$css";function a(s){var m,l,y;return s!=null&&(m=s.disableCache===!0,l=s.disableMix===!0,y=s.transform),function(){for(var v=[],q="",f=null,h=m?null:e,r=new Array(arguments.length),w=0;w<arguments.length;w++)r[w]=arguments[w];for(;r.length>0;){var k=r.pop();if(!(k==null||k===!1)){if(Array.isArray(k)){for(var $=0;$<k.length;$++)r.push(k[$]);continue}var _=y!=null?y(k):k;if(_.$$css){var c="";if(h!=null&&h.has(_)){var D=h.get(_);D!=null&&(c=D[0],v.push.apply(v,D[1]),h=D[2])}else{var F=[];for(var x in _){var z=_[x];x!==t&&(typeof z=="string"||z===null?v.includes(x)||(v.push(x),h!=null&&F.push(x),typeof z=="string"&&(c+=c?" "+z:z)):console.error("styleq: ".concat(x," typeof ").concat(String(z),' is not "string" or "null".')))}if(h!=null){var E=new WeakMap;h.set(_,[c,F,E]),h=E}}c&&(q=q?c+" "+q:c)}else if(l)f==null&&(f={}),f=Object.assign({},_,f);else{var N=null;for(var b in _){var u=_[b];u!==void 0&&(v.includes(b)||(u!=null&&(f==null&&(f={}),N==null&&(N={}),N[b]=u),v.push(b),h=null))}N!=null&&(f=Object.assign(N,f))}}}var d=[q,f];return d}}var i=a();return O.styleq=i,i.factory=a,O}var R=oe(),S=e=>new Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),j=e=>S(`types.${e}`);function U(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];let[i,s]=R.styleq(t),m={};return i!=null&&i!==""&&(m.className=i),s!=null&&Object.keys(s).length>0&&(m.style=s),m}function se(){let{className:e,style:t}=U(...arguments),a={};return e!=null&&e!==""&&(a.class=e),t!=null&&Object.keys(t).length>0&&(a.style=Object.keys(t).map(i=>`${i}:${t[i]};`).join("")),a}function ue(e){throw S("create")}function le(e){throw S("defineVars")}var ce=(e,t)=>{throw S("createTheme")},ge=e=>{throw S("include")},me=ue,fe=le,de=ce,he=ge,be={angle:e=>{throw j("angle")},color:e=>{throw j("color")},url:e=>{throw j("url")},image:e=>{throw j("image")},integer:e=>{throw j("integer")},lengthPercentage:e=>{throw j("lengthPercentage")},length:e=>{throw j("length")},percentage:e=>{throw j("percentage")},number:e=>{throw j("number")},resolution:e=>{throw j("resolution")},time:e=>{throw j("time")},transformFunction:e=>{throw j("transformFunction")},transformList:e=>{throw j("transformList")}},pe=e=>{throw S("keyframes")},ye=function(){throw S("firstThatWorks")};function V(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];let[i]=R.styleq(t);return i}V.props=U;V.attrs=se;V.create=me;V.defineVars=fe;V.createTheme=de;V.include=he;V.keyframes=pe;V.firstThatWorks=ye;V.types=be;var xe={min:0,max:100,step:1,unit:"",showMinLabel:!0,showMaxLabel:!0,minLabel:null,maxLabel:null,disabled:!1,showInput:!0,valueLabelsFile:"",valueLabels:{}},P={slider:{"--opacity":"range-1xmiaan",appearance:"range-jyslct",background:"range-10msy31",cursor:"range-1ypdohk",height:"range-lrawln",outline:"range-1a2a7pz",width:"range-h8yej3",borderRadius:"range-1cum3z5",":focus_--opacity":"range-npukh0","::-webkit-slider-thumb_appearance":"range-ibs45w","::-webkit-slider-thumb_background":"range-gk9k07","::-webkit-slider-thumb_borderRadius":"range-10481fn","::-webkit-slider-thumb_boxShadow":"range-1kthjsd","::-webkit-slider-thumb_cursor":"range-u2yhzc","::-webkit-slider-thumb_height":"range-1p6diu8","::-webkit-slider-thumb_opacity":"range-avsfv4","::-webkit-slider-thumb_width":"range-1iqn34f","::-webkit-slider-thumb_border":"range-jpt6gn","::-webkit-slider-thumb_transitionProperty":"range-5rbd5","::-webkit-slider-thumb_transitionTimingFunction":"range-nq99s9","::-webkit-slider-thumb_transitionDuration":"range-14qvetc","::-webkit-slider-thumb_:hover_opacity":"range-5e1a76","::-webkit-slider-thumb_:active_cursor":"range-1tk0e90","::-webkit-slider-thumb_:active_transform":"range-1xk2y70","::-moz-range-thumb_appearance":"range-13fi9fm","::-moz-range-thumb_background":"range-1vedxjn","::-moz-range-thumb_borderRadius":"range-v968mp","::-moz-range-thumb_boxShadow":"range-66xn83","::-moz-range-thumb_cursor":"range-vs8oyn","::-moz-range-thumb_height":"range-1xyey98","::-moz-range-thumb_opacity":"range-hyizb5","::-moz-range-thumb_width":"range-jt8dmu","::-moz-range-thumb_border":"range-s99pfi","::-moz-range-thumb_transitionProperty":"range-bffa19","::-moz-range-thumb_transitionTimingFunction":"range-1a7ebab","::-moz-range-thumb_transitionDuration":"range-10p4uoo","::-moz-range-thumb_:hover_opacity":"range-l3xga7","::-moz-range-thumb_:active_cursor":"range-uyzg6f","::-moz-range-thumb_:active_transform":"range-oo02y2",$$css:!0},highlight:{boxShadow:"range-d2bjx",$$css:!0},editorValue:{alignItems:"range-6s0dn4",display:"range-78zum5",flexDirection:"range-1q0g3np",justifyContent:"range-1qughib",$$css:!0},textfield:{background:"range-10msy31",border:"range-1wty727",color:"range-yhbhln",display:"range-78zum5",alignItems:"range-6s0dn4",padding:"range-29crso",borderRadius:"range-1cum3z5",gap:"range-12mrbbr",cursor:"range-1ed109x",":focus-within_color":"range-xeqyu3",":focus-within_background":"range-1rhx0j6",$$css:!0},textfieldGap:{gap:"range-6gsi71",rowGap:null,columnGap:null,$$css:!0},editorValueSingle:{justifyContent:"range-l56j7k",$$css:!0},editorDisabled:{"--color":"range-orarm7",opacity:"range-190dgpg",cursor:"range-1h6gzvc",":where(*)>*_pointerEvents":"range-vszx66",$$css:!0},editorEnabled:{"--color":"range-jcvozh",$$css:!0}};function ve({value:e,id:t,highlight:a,i18nRegistry:i,onEnterKey:s,onKeyDown:m,onKeyPress:l,commit:y,...L}){let v=_e(),[q,f]=(0,o.useState)(e),[h]=Y(q,500),r={...xe,...L.options},{disabled:w}=r,k=r.ratio==!0&&r.unit=="%"&&r.min>=0&&r.max<=100,$=(0,o.useRef)(null),_=n=>{c(n.target.value)};(0,o.useEffect)(()=>{if(h!=e){let{step:n,min:C}=r,A=parseFloat(h),p=n-(A-C)%n;(p==0||p==n)&&(p=0),p>n/2&&(p=p-n);let G=Math.min(r.max,Math.max(r.min,A+p));c(G)}},[h]);let c=n=>{f(n),n=(r.step||1)%1===0?parseInt(n,10):parseFloat(n,10),!isNaN(n)&&(n=Math.min(r.max,Math.max(r.min,n)),y(n),v())},D=n=>{if(typeof l=="function"&&l(n),n.key==="Enter"&&typeof s=="function"){s();return}},F=n=>{typeof m=="function"&&m(n);let C=n.key,A=C=="ArrowUp";if(C=="ArrowDown"||A){let p=r.step,{metaKey:G,shiftKey:re}=n;if(p=p*(re?10:G?100:1),A){c(Math.min(e+p,r.max)),n.preventDefault();return}c(Math.max(e-p,r.min)),n.preventDefault();return}},x=e||"0",z=n=>n.toString().length,E=z(r.step)-1,N=Math.max(z(r.min),z(r.max))+E+"ch",b=r.unit?i.translate(r.unit):"",{valueLabels:u,valueLabelsFile:d,showInput:M}=r,T=ke(e,r.min,r.max);r.showMinLabel||(T=T||e===r.min),r.showMaxLabel||(T=T||e===r.max);let I=n=>u&&u[n]?u[n]:d?`${d}:${n}`:null,K=(n,C)=>{if(n<=r.min){let A=!M||C?r.min+b:null,p=r.minLabel||I(r.min)||A;return i.translate(p)}if(n>=r.max){let A=!M||C?r.max+b:null,p=r.maxLabel||I(r.max)||A;return i.translate(p)}return i.translate(I(n))},W=K(e);return o.default.createElement("div",{...U(w?P.editorDisabled:P.editorEnabled)},o.default.createElement("input",{type:"range",id:!k&&!W&&M?null:t,min:r.min,max:r.max,step:r.step,value:x,onChange:_,onKeyDown:F,onKeyPress:D,disabled:w,...U(P.slider,a&&P.highlight)}),o.default.createElement("div",{...U(P.editorValue,!r.showMinLabel&&!r.showMaxLabel&&P.editorValueSingle)},k?o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>c(r.min),disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},x,"%"),o.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>c(r.max),disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},100-e,"%")):o.default.createElement(o.default.Fragment,null,r.showMinLabel&&o.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>c(r.min),style:{opacity:!M&&r.min>=e?1:.7},disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},K(r.min,!0)),!T&&!M&&o.default.createElement("span",null,"\xA0"),W&&T&&o.default.createElement("span",{className:"range-87ps6o"},W),!W&&M&&o.default.createElement("span",{...U(P.textfield,!!b&&b.toString().startsWith(" ")&&P.textfieldGap),onClick:()=>{$?.current?.focus()}},o.default.createElement("input",{id:t,title:i.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyDown:F,onKeyPress:n=>{D(n),isNaN(n.key)&&n.preventDefault()},onChange:n=>f(n.target.value),value:q||"0",style:{width:N},disabled:w,ref:$,className:"range-jyslct range-1717udv range-1wty727 range-1ghz6dp range-1md70p1 range-1heor9g range-1rg5ohu range-1hr2gdg range-1afcbsf range-1uvtmcs"}),b&&o.default.createElement("span",{className:"range-87ps6o"},b.toString().trim())),!W&&T&&!M&&o.default.createElement("span",{className:"range-87ps6o"},x,b),r.showMaxLabel&&o.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>c(r.max),style:{opacity:!M&&r.max<=e?1:.7},disabled:w,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},K(r.max,!0)))))}function _e(){let[,e]=(0,o.useState)(0);return()=>e(t=>t+1)}function ke(e,t,a){return e>t&&e<a}var ze=(0,ee.neos)(e=>({i18nRegistry:e.get("i18n")})),Ce=ze(ve);export{Ce as default};

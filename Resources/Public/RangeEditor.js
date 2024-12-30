import{a as Z,b as X,c as Y,d as R,e as nn}from"./chunk-DU7SBTEB.js";var rn=Z((Tn,en)=>{R();en.exports=Y("NeosProjectPackages")().NeosUiDecorators});var an=Z((Dn,tn)=>{R();tn.exports=Y("NeosProjectPackages")().ReactUiComponents});var i=X(nn(),1),sn=X(rn(),1),cn=X(an(),1);var m=X(nn());function dn(n,t,a){var l=this,u=(0,m.useRef)(null),f=(0,m.useRef)(0),c=(0,m.useRef)(null),y=(0,m.useRef)([]),N=(0,m.useRef)(),w=(0,m.useRef)(),j=(0,m.useRef)(n),b=(0,m.useRef)(!0);j.current=n;var h=typeof window<"u",e=!t&&t!==0&&h;if(typeof n!="function")throw new TypeError("Expected a function");t=+t||0;var p=!!(a=a||{}).leading,I=!("trailing"in a)||!!a.trailing,v="maxWait"in a,k="debounceOnServer"in a&&!!a.debounceOnServer,x=v?Math.max(+a.maxWait||0,t):null;(0,m.useEffect)(function(){return b.current=!0,function(){b.current=!1}},[]);var T=(0,m.useMemo)(function(){var D=function(o){var d=y.current,A=N.current;return y.current=N.current=null,f.current=o,w.current=j.current.apply(A,d)},s=function(o,d){e&&cancelAnimationFrame(c.current),c.current=e?requestAnimationFrame(o):setTimeout(o,d)},$=function(o){if(!b.current)return!1;var d=o-u.current;return!u.current||d>=t||d<0||v&&o-f.current>=x},E=function(o){return c.current=null,I&&y.current?D(o):(y.current=N.current=null,w.current)},z=function o(){var d=Date.now();if($(d))return E(d);if(b.current){var A=t-(d-u.current),q=v?Math.min(A,x-(d-f.current)):A;s(o,q)}},L=function(){if(h||k){var o=Date.now(),d=$(o);if(y.current=[].slice.call(arguments),N.current=l,u.current=o,d){if(!c.current&&b.current)return f.current=u.current,s(z,t),p?D(u.current):w.current;if(v)return s(z,t),D(u.current)}return c.current||s(z,t),w.current}};return L.cancel=function(){c.current&&(e?cancelAnimationFrame(c.current):clearTimeout(c.current)),f.current=0,y.current=u.current=N.current=c.current=null},L.isPending=function(){return!!c.current},L.flush=function(){return c.current?E(Date.now()):w.current},L},[p,v,t,x,I,e,h,k]);return T}function mn(n,t){return n===t}function on(n,t,a){var l=a&&a.equalityFn||mn,u=(0,m.useRef)(n),f=(0,m.useState)({})[1],c=dn((0,m.useCallback)(function(N){u.current=N,f({})},[f]),t,a),y=(0,m.useRef)(n);return l(y.current,n)||(c(n),y.current=n),[u.current,c]}var U={},ln;function fn(){if(ln)return U;ln=1,Object.defineProperty(U,"__esModule",{value:!0}),U.styleq=void 0;var n=new WeakMap,t="$$css";function a(u){var f,c,y;return u!=null&&(f=u.disableCache===!0,c=u.disableMix===!0,y=u.transform),function(){for(var w=[],j="",b=null,h=f?null:n,e=new Array(arguments.length),p=0;p<arguments.length;p++)e[p]=arguments[p];for(;e.length>0;){var I=e.pop();if(!(I==null||I===!1)){if(Array.isArray(I)){for(var v=0;v<I.length;v++)e.push(I[v]);continue}var k=y!=null?y(I):I;if(k.$$css){var x="";if(h!=null&&h.has(k)){var T=h.get(k);T!=null&&(x=T[0],w.push.apply(w,T[1]),h=T[2])}else{var D=[];for(var s in k){var $=k[s];s!==t&&(typeof $=="string"||$===null?w.includes(s)||(w.push(s),h!=null&&D.push(s),typeof $=="string"&&(x+=x?" "+$:$)):console.error("styleq: ".concat(s," typeof ").concat(String($),' is not "string" or "null".')))}if(h!=null){var E=new WeakMap;h.set(k,[x,D,E]),h=E}}x&&(j=j?x+" "+j:x)}else if(c)b==null&&(b={}),b=Object.assign({},k,b);else{var z=null;for(var L in k){var o=k[L];o!==void 0&&(w.includes(L)||(o!=null&&(b==null&&(b={}),z==null&&(z={}),z[L]=o),w.push(L),h=null))}z!=null&&(b=Object.assign(z,b))}}}var d=[j,b];return d}}var l=a();return U.styleq=l,l.factory=a,U}var un=fn(),V=n=>new Error(`'stylex.${n}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),M=n=>V(`types.${n}`);function F(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];let[l,u]=un.styleq(t),f={};return l!=null&&l!==""&&(f.className=l),u!=null&&Object.keys(u).length>0&&(f.style=u),f}function bn(){let{className:n,style:t}=F(...arguments),a={};return n!=null&&n!==""&&(a.class=n),t!=null&&Object.keys(t).length>0&&(a.style=Object.keys(t).map(l=>`${l}:${t[l]};`).join("")),a}function hn(n){throw V("create")}function pn(n){throw V("defineVars")}var yn=(n,t)=>{throw V("createTheme")},xn=n=>{throw V("include")},wn=hn,vn=pn,kn=yn,_n=xn,zn={angle:n=>{throw M("angle")},color:n=>{throw M("color")},url:n=>{throw M("url")},image:n=>{throw M("image")},integer:n=>{throw M("integer")},lengthPercentage:n=>{throw M("lengthPercentage")},length:n=>{throw M("length")},percentage:n=>{throw M("percentage")},number:n=>{throw M("number")},resolution:n=>{throw M("resolution")},time:n=>{throw M("time")},transformFunction:n=>{throw M("transformFunction")},transformList:n=>{throw M("transformList")}},Mn=n=>{throw V("keyframes")},In=function(){throw V("firstThatWorks")};function W(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];let[l]=un.styleq(t);return l}W.props=F;W.attrs=bn;W.create=wn;W.defineVars=vn;W.createTheme=kn;W.include=_n;W.keyframes=Mn;W.firstThatWorks=In;W.types=zn;var jn={min:0,max:100,step:1,unit:"",showMinLabel:!0,showMaxLabel:!0,minLabel:null,maxLabel:null,disabled:!1,showInput:!0,valueLabelsFile:"",valueLabels:{},resetValue:void 0,resetLabel:"Carbon.RangeEditor:Main:reset",resetIcon:"times"},S={slider:{"--opacity":"range-1xmiaan",appearance:"range-jyslct",background:"range-10msy31",cursor:"range-1ypdohk",height:"range-lrawln",outline:"range-1a2a7pz",width:"range-h8yej3",borderRadius:"range-1cum3z5",marginBottom:"range-12nagc",":focus_--opacity":"range-npukh0","::-webkit-slider-thumb_appearance":"range-ibs45w","::-webkit-slider-thumb_background":"range-gk9k07","::-webkit-slider-thumb_borderRadius":"range-10481fn","::-webkit-slider-thumb_boxShadow":"range-1kthjsd","::-webkit-slider-thumb_cursor":"range-u2yhzc","::-webkit-slider-thumb_height":"range-1p6diu8","::-webkit-slider-thumb_opacity":"range-avsfv4","::-webkit-slider-thumb_width":"range-1iqn34f","::-webkit-slider-thumb_border":"range-jpt6gn","::-webkit-slider-thumb_transitionProperty":"range-5rbd5","::-webkit-slider-thumb_transitionTimingFunction":"range-nq99s9","::-webkit-slider-thumb_transitionDuration":"range-14qvetc","::-webkit-slider-thumb_:hover_opacity":"range-5e1a76","::-webkit-slider-thumb_:active_cursor":"range-1tk0e90","::-webkit-slider-thumb_:active_transform":"range-1xk2y70","::-moz-range-thumb_appearance":"range-13fi9fm","::-moz-range-thumb_background":"range-1vedxjn","::-moz-range-thumb_borderRadius":"range-v968mp","::-moz-range-thumb_boxShadow":"range-66xn83","::-moz-range-thumb_cursor":"range-vs8oyn","::-moz-range-thumb_height":"range-1xyey98","::-moz-range-thumb_opacity":"range-hyizb5","::-moz-range-thumb_width":"range-jt8dmu","::-moz-range-thumb_border":"range-s99pfi","::-moz-range-thumb_transitionProperty":"range-bffa19","::-moz-range-thumb_transitionTimingFunction":"range-1a7ebab","::-moz-range-thumb_transitionDuration":"range-10p4uoo","::-moz-range-thumb_:hover_opacity":"range-l3xga7","::-moz-range-thumb_:active_cursor":"range-uyzg6f","::-moz-range-thumb_:active_transform":"range-oo02y2",$$css:!0},highlight:{boxShadow:"range-d2bjx",$$css:!0},editorValue:n=>[{alignItems:"range-6s0dn4",display:"range-78zum5",flexDirection:"range-1q0g3np",justifyContent:"range-1qughib",marginRight:(n?29:null)==null?null:"range-1hqhkut",marginInlineStart:null,marginInlineEnd:null,$$css:!0},{"--marginRight":(t=>typeof t=="number"?t+"px":t??void 0)(n?29:null)}],textfield:{background:"range-10msy31",border:"range-1wty727",color:"range-yhbhln",display:"range-78zum5",alignItems:"range-6s0dn4",padding:"range-29crso",borderRadius:"range-1cum3z5",gap:"range-12mrbbr",cursor:"range-1ed109x",":focus-within_color":"range-xeqyu3",":focus-within_background":"range-1rhx0j6",$$css:!0},textfieldInput:n=>[{appearance:"range-jyslct",padding:"range-1717udv",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,border:"range-1wty727",borderWidth:null,borderInlineWidth:null,borderInlineStartWidth:null,borderLeftWidth:null,borderInlineEndWidth:null,borderRightWidth:null,borderBlockWidth:null,borderTopWidth:null,borderBottomWidth:null,borderStyle:null,borderInlineStyle:null,borderInlineStartStyle:null,borderLeftStyle:null,borderInlineEndStyle:null,borderRightStyle:null,borderBlockStyle:null,borderTopStyle:null,borderBottomStyle:null,borderColor:null,borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,margin:"range-1ghz6dp",marginInline:null,marginInlineStart:null,marginLeft:null,marginInlineEnd:null,marginRight:null,marginBlock:null,marginTop:null,marginBottom:null,background:"range-1md70p1",backgroundAttachment:null,backgroundClip:null,backgroundColor:null,backgroundImage:null,backgroundOrigin:null,backgroundPosition:null,backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,backgroundSize:null,color:"range-1heor9g",display:"range-1rg5ohu",textAlign:"range-2b8uid",boxSizing:"range-1afcbsf",width:n==null?null:"range-1bl4301",":focus_outline":"range-1uvtmcs",":focus_outlineColor":null,":focus_outlineOffset":null,":focus_outlineStyle":null,":focus_outlineWidth":null,$$css:!0},{"--width":(t=>typeof t=="number"?t+"px":t??void 0)(n)}],textfielInputRight:{textAlign:"range-1hr2gdg",$$css:!0},textfieldGap:{gap:"range-6gsi71",rowGap:null,columnGap:null,$$css:!0},editorValueSingle:{justifyContent:"range-l56j7k",$$css:!0},container:{width:"range-h8yej3",$$css:!0},editorDisabled:{"--color":"range-orarm7",opacity:"range-190dgpg",cursor:"range-1h6gzvc",":where(*)>*_pointerEvents":"range-vszx66",$$css:!0},editorEnabled:{"--color":"range-jcvozh",$$css:!0}};function Ln({value:n,id:t,highlight:a,i18nRegistry:l,onEnterKey:u,onKeyDown:f,onKeyPress:c,commit:y,...N}){let w=Cn(),[j,b]=(0,i.useState)(n),[h]=on(j,500),e={...jn,...N.options},{disabled:p,resetLabel:I,resetValue:v,resetIcon:k}=e,x=e.ratio==!0&&e.unit=="%"&&e.min>=0&&e.max<=100,T=(0,i.useRef)(null),D=r=>{s(r.target.value)};(0,i.useEffect)(()=>{if(h!=n){let{step:r,min:_}=e,C=parseFloat(h),g=r-(C-_)%r;(g==0||g==r)&&(g=0),g>r/2&&(g=g-r);let B=Math.min(e.max,Math.max(e.min,C+g));s(B)}},[h]);let s=r=>{b(r),r=(e.step||1)%1===0?parseInt(r,10):parseFloat(r,10),!isNaN(r)&&(r=Math.min(e.max,Math.max(e.min,r)),y(r),w())},$=r=>{if(typeof c=="function"&&c(r),r.key==="Enter"&&typeof u=="function"){u();return}},E=r=>{typeof f=="function"&&f(r);let _=r.key,C=_=="ArrowUp";if(_=="ArrowDown"||C){let g=e.step,{metaKey:B,shiftKey:J}=r;if(g=g*(J?10:B?100:1),C){s(Math.min(n+g,e.max)),r.preventDefault();return}s(Math.max(n-g,e.min)),r.preventDefault();return}},z=n||"0",L=(()=>{let{min:r,max:_,step:C}=e,g=G=>G.toString().length,B=G=>G%1===0,J=B(r)&&B(_)?g(C)-1:0;return Math.max(g(r),g(_))+J+"ch"})(),o=e.unit?l.translate(e.unit):"",{valueLabels:d,valueLabelsFile:A,showInput:q}=e,P=Sn(n,e.min,e.max);e.showMinLabel||(P=P||n===e.min),e.showMaxLabel||(P=P||n===e.max);let H=r=>d&&d[r]?d[r]:A?`${A}:${r}`:null,K=(r,_)=>{if(r<=e.min){let C=!q||_?e.min+o:null,g=e.minLabel||H(e.min)||C;return l.translate(g)}if(r>=e.max){let C=!q||_?e.max+o:null,g=e.maxLabel||H(e.max)||C;return l.translate(g)}return l.translate(H(r))},O=K(n),Q=i.default.createElement("input",{type:"range",id:!x&&!O&&q?null:t,min:e.min,max:e.max,step:e.step,value:z,onChange:D,onKeyDown:E,onKeyPress:$,disabled:p,...F(S.slider,a&&S.highlight)}),gn=(()=>{let r=v;if(x)return{value:r,unit:"%"};let _=K(r);return _?{value:_,unit:""}:{value:r,unit:o}})();return i.default.createElement("div",{...F(S.container,p?S.editorDisabled:S.editorEnabled)},typeof v>"u"?Q:i.default.createElement("div",{className:"range-78zum5 range-1jnr06f"},Q,i.default.createElement("button",{className:"range-10msy31 range-1wty727 range-1cum3z5 range-yhbhln range-1ypdohk range-lrawln range-ezl2tj range-1717udv range-3nn9bt range-e1ymxu",title:l.translate(I,null,gn),onClick:({currentTarget:r})=>{r.blur(),s(v)},disabled:p},i.default.createElement(cn.Icon,{icon:k}))),i.default.createElement("div",{...F(S.editorValue(typeof v<"u"),!e.showMinLabel&&!e.showMaxLabel&&S.editorValueSingle)},x?i.default.createElement(i.default.Fragment,null,i.default.createElement("button",{type:"button",title:l.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>s(e.min),disabled:p,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},z,"%"),i.default.createElement("button",{type:"button",title:l.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>s(e.max),disabled:p,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},100-n,"%")):i.default.createElement(i.default.Fragment,null,e.showMinLabel&&i.default.createElement("button",{type:"button",title:l.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>s(e.min),style:{opacity:!q&&e.min>=n?1:.7},disabled:p,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},K(e.min,!0)),!P&&!q&&i.default.createElement("span",null,"\xA0"),O&&P&&i.default.createElement("span",{className:"range-87ps6o"},O),!O&&q&&i.default.createElement("span",{...F(S.textfield,!!o&&o.toString().startsWith(" ")&&S.textfieldGap),onClick:()=>{T?.current?.focus()}},i.default.createElement("input",{id:t,title:l.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyDown:E,onKeyPress:r=>{$(r),isNaN(r.key)&&r.preventDefault()},onChange:r=>b(r.target.value),value:j||"0",disabled:p,ref:T,...F(S.textfieldInput(L),o&&S.textfielInputRight)}),o&&i.default.createElement("span",{className:"range-87ps6o"},o.toString().trim())),!O&&P&&!q&&i.default.createElement("span",{className:"range-87ps6o"},z,o),e.showMaxLabel&&i.default.createElement("button",{type:"button",title:l.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>s(e.max),style:{opacity:!q&&e.max<=n?1:.7},disabled:p,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg"},K(e.max,!0)))))}function Cn(){let[,n]=(0,i.useState)(0);return()=>n(t=>t+1)}function Sn(n,t,a){return n>t&&n<a}var Nn=(0,sn.neos)(n=>({i18nRegistry:n.get("i18n")})),Kn=Nn(Ln);export{Kn as default};

import{a as ie,b as B,c as K,d as le,e as se}from"./chunk-DU7SBTEB.js";var me=ie((Br,Ce)=>{le();Ce.exports=K("NeosProjectPackages")().NeosUiDecorators});var Ne=ie((Jr,je)=>{le();je.exports=K("NeosProjectPackages")().NeosUiReduxStore});var We=ie((Yr,qe)=>{le();qe.exports=K("vendor")().reactRedux});var Ue=ie((Zr,Ee)=>{le();Ee.exports=K("NeosProjectPackages")().ReactUiComponents});var o=B(se(),1),Re=B(me(),1),Xe=B(Ne(),1);var H=B(se());var G=B(se());function Ae({style:e,className:t,size:n=30}){return G.default.createElement("svg",{width:n,height:n,stroke:"currentColor",viewBox:"0 0 24 24",style:e,className:t},G.default.createElement("g",null,G.default.createElement("circle",{cx:"12",cy:"12",r:"9.5",fill:"none","stroke-width":"2","stroke-linecap":"round"},[{attribute:"dasharray",values:"0 150;42 150;42 150;42 150"},{attribute:"dashoffset",values:"0;-16;-59;-59"}].map(({attribute:a,values:l})=>G.default.createElement("animate",{key:a,attributeName:`stroke-${a}`,values:l,dur:"1.5s",calcMode:"spline",keyTimes:"0;0.475;0.95;1",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",repeatCount:"indefinite"}))),G.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",values:"0 12 12;360 12 12",repeatCount:"indefinite"})))}function ze({style:e,className:t,size:n=30}){return G.default.createElement("svg",{width:n*2,height:n,viewBox:"0 0 24 12",class:t,style:e},[1,2,3].map(a=>{let l=a*6,s=Math.round(100/3*(a-1))/100;return G.default.createElement("circle",{cx:l,cy:"6",r:"0",fill:"currentColor"},G.default.createElement("animate",{attributeName:"r",begin:s,calcMode:"spline",dur:"1.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"}))}))}var Fe=B(me());var te={},De;function pr(){if(De)return te;De=1,Object.defineProperty(te,"__esModule",{value:!0}),te.styleq=void 0;var e=new WeakMap,t="$$css";function n(l){var s,u,p;return l!=null&&(s=l.disableCache===!0,u=l.disableMix===!0,p=l.transform),function(){for(var g=[],A="",f=null,w=s?null:e,z=new Array(arguments.length),D=0;D<arguments.length;D++)z[D]=arguments[D];for(;z.length>0;){var $=z.pop();if(!($==null||$===!1)){if(Array.isArray($)){for(var C=0;C<$.length;C++)z.push($[C]);continue}var i=p!=null?p($):$;if(i.$$css){var S="";if(w!=null&&w.has(i)){var P=w.get(i);P!=null&&(S=P[0],g.push.apply(g,P[1]),w=P[2])}else{var W=[];for(var k in i){var T=i[k];k!==t&&(typeof T=="string"||T===null?g.includes(k)||(g.push(k),w!=null&&W.push(k),typeof T=="string"&&(S+=S?" "+T:T)):console.error("styleq: ".concat(k," typeof ").concat(String(T),' is not "string" or "null".')))}if(w!=null){var R=new WeakMap;w.set(i,[S,W,R]),w=R}}S&&(A=A?S+" "+A:S)}else if(u)f==null&&(f={}),f=Object.assign({},i,f);else{var m=null;for(var V in i){var d=i[V];d!==void 0&&(g.includes(V)||(d!=null&&(f==null&&(f={}),m==null&&(m={}),m[V]=d),g.push(V),w=null))}m!=null&&(f=Object.assign(m,f))}}}var x=[A,f];return x}}var a=n();return te.styleq=a,a.factory=n,te}var Te=pr(),Q=e=>new Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),j=e=>Q(`types.${e}`);function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let[a,l]=Te.styleq(t),s={};return a!=null&&a!==""&&(s.className=a),l!=null&&Object.keys(l).length>0&&(s.style=l),s}function yr(){let{className:e,style:t}=I(...arguments),n={};return e!=null&&e!==""&&(n.class=e),t!=null&&Object.keys(t).length>0&&(n.style=Object.keys(t).map(a=>`${a}:${t[a]};`).join("")),n}function xr(e){throw Q("create")}function vr(e){throw Q("defineVars")}var wr=(e,t)=>{throw Q("createTheme")},Lr=e=>{throw Q("include")},Sr=xr,_r=vr,kr=wr,Mr=Lr,Ir={angle:e=>{throw j("angle")},color:e=>{throw j("color")},url:e=>{throw j("url")},image:e=>{throw j("image")},integer:e=>{throw j("integer")},lengthPercentage:e=>{throw j("lengthPercentage")},length:e=>{throw j("length")},percentage:e=>{throw j("percentage")},number:e=>{throw j("number")},resolution:e=>{throw j("resolution")},time:e=>{throw j("time")},transformFunction:e=>{throw j("transformFunction")},transformList:e=>{throw j("transformList")}},$r=e=>{throw Q("keyframes")},Cr=function(){throw Q("firstThatWorks")};function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let[a]=Te.styleq(t);return a}J.props=I;J.attrs=yr;J.create=Sr;J.defineVars=_r;J.createTheme=kr;J.include=Mr;J.keyframes=$r;J.firstThatWorks=Cr;J.types=Ir;var be={container:e=>[{display:"range-rvj5dj",gridTemplate:"range-d3rg8h",gridTemplateAreas:null,gridTemplateColumns:null,gridTemplateRows:null,alignItems:"range-6s0dn4",justifyItems:"range-1o2pa38",width:"range-h8yej3",minHeight:`calc(var(--spacing-GoldenUnit) * ${e})`==null?null:"range-bhpgbg",$$css:!0},{"--minHeight":(t=>typeof t=="number"?t+"px":t??void 0)(`calc(var(--spacing-GoldenUnit) * ${e})`)}],item:e=>[{gridArea:"range-1fdo2jl",gridRow:null,gridRowStart:null,gridRowEnd:null,gridColumn:null,gridColumnStart:null,gridColumnEnd:null,transition:"range-c8avi6",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,opacity:(e?1:0)==null?null:"range-a0d40w",transform:`scale(${e?1:0})`==null?null:"range-1uosm7l",$$css:!0},{"--opacity":(e?1:0)??void 0,"--transform":`scale(${e?1:0})`!=null?`scale(${e?1:0})`:void 0}]};function jr({id:e,title:t="Neos.Neos:Main:loading",isLoading:n=!1,delayTime:a=500,timeoutTime:l=5e3,i18nRegistry:s,heightMultiplier:u=1}){let[p,_]=(0,H.useState)(0),g=t?s.translate(t):null;return(0,H.useEffect)(()=>{if(!n){_(0);return}let A=setTimeout(()=>{_(1)},a),f=setTimeout(()=>{_(2)},a+l);return()=>{clearTimeout(A),clearTimeout(f)}},[n]),n?H.default.createElement("div",{id:e,title:g,...I(be.container(u))},H.default.createElement(Ae,{...I(be.item(p==1))}),H.default.createElement(ze,{...I(be.item(p==2))})):null}var Nr=(0,Fe.neos)(e=>({i18nRegistry:e.get("i18n")})),Pe=Nr(jr);var Ye=B(We(),1),Qe=B(Ue(),1);var Be=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},F=(...e)=>e.reduce((t,n)=>{if(Array.isArray(n))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(n).forEach(a=>{["__proto__","constructor","prototype"].includes(a)||(Array.isArray(t[a])&&Array.isArray(n[a])?t[a]=F.options.mergeArrays?F.options.uniqueArrayItems?Array.from(new Set(t[a].concat(n[a]))):[...t[a],...n[a]]:n[a]:Be(t[a])&&Be(n[a])?t[a]=F(t[a],n[a]):t[a]=n[a]===void 0?F.options.allowUndefinedOverrides?n[a]:t[a]:n[a])}),t},{}),he={allowUndefinedOverrides:!0,mergeArrays:!0,uniqueArrayItems:!0};F.options=he;F.withOptions=(e,...t)=>{F.options=Object.assign(Object.assign({},he),e);let n=F(...t);return F.options=he,n};var b=B(se());function Ar(e,t,n){var a=this,l=(0,b.useRef)(null),s=(0,b.useRef)(0),u=(0,b.useRef)(null),p=(0,b.useRef)([]),_=(0,b.useRef)(),g=(0,b.useRef)(),A=(0,b.useRef)(e),f=(0,b.useRef)(!0);A.current=e;var w=typeof window<"u",z=!t&&t!==0&&w;if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0;var D=!!(n=n||{}).leading,$=!("trailing"in n)||!!n.trailing,C="maxWait"in n,i="debounceOnServer"in n&&!!n.debounceOnServer,S=C?Math.max(+n.maxWait||0,t):null;(0,b.useEffect)(function(){return f.current=!0,function(){f.current=!1}},[]);var P=(0,b.useMemo)(function(){var W=function(d){var x=p.current,q=_.current;return p.current=_.current=null,s.current=d,g.current=A.current.apply(q,x)},k=function(d,x){z&&cancelAnimationFrame(u.current),u.current=z?requestAnimationFrame(d):setTimeout(d,x)},T=function(d){if(!f.current)return!1;var x=d-l.current;return!l.current||x>=t||x<0||C&&d-s.current>=S},R=function(d){return u.current=null,$&&p.current?W(d):(p.current=_.current=null,g.current)},m=function d(){var x=Date.now();if(T(x))return R(x);if(f.current){var q=t-(x-l.current),ue=C?Math.min(q,S-(x-s.current)):q;k(d,ue)}},V=function(){if(w||i){var d=Date.now(),x=T(d);if(p.current=[].slice.call(arguments),_.current=a,l.current=d,x){if(!u.current&&f.current)return s.current=l.current,k(m,t),D?W(l.current):g.current;if(C)return k(m,t),W(l.current)}return u.current||k(m,t),g.current}};return V.cancel=function(){u.current&&(z?cancelAnimationFrame(u.current):clearTimeout(u.current)),s.current=0,p.current=l.current=_.current=u.current=null},V.isPending=function(){return!!u.current},V.flush=function(){return u.current?R(Date.now()):g.current},V},[D,C,t,S,$,z,w,i]);return P}function zr(e,t){return e===t}function Ge(e,t,n){var a=n&&n.equalityFn||zr,l=(0,b.useRef)(e),s=(0,b.useState)({})[1],u=Ar((0,b.useCallback)(function(_){l.current=_,s({})},[s]),t,n),p=(0,b.useRef)(e);return a(p.current,e)||(u(e),p.current=e),[l.current,u]}var pe={min:0,max:100,step:1,unit:"",showMinLabel:!0,showMaxLabel:!0,minLabel:null,maxLabel:null,disabled:!1,showInput:!0,valueLabelsFile:"",valueLabels:{},resetValue:void 0,resetLabel:"Carbon.RangeEditor:Main:reset",resetIcon:"times",dataSourceIdentifier:null,dataSourceUri:null,dataSourceAdditionalData:null},Dr=e=>({contextNodePath:e.focusedNodePath,dataSourceIdentifier:e.options.dataSourceIdentifier,dataSourceUri:e.options.dataSourceUri,dataSourceAdditionalData:e.options.dataSourceAdditionalData,dataSourceDisableCaching:!!e.options.dataSourceDisableCaching}),y={slider:{"--thumb-opacity":"range-11z8i2b",appearance:"range-jyslct",background:"range-10msy31",cursor:"range-1ypdohk",height:"range-lrawln",outline:"range-1a2a7pz",width:"range-h8yej3",borderRadius:"range-1cum3z5",marginBottom:"range-12nagc",":focus_--thumb-opacity":"range-1972eg6","::-webkit-slider-thumb_appearance":"range-ibs45w","::-webkit-slider-thumb_background":"range-gk9k07","::-webkit-slider-thumb_borderRadius":"range-10481fn","::-webkit-slider-thumb_boxShadow":"range-1kthjsd","::-webkit-slider-thumb_cursor":"range-u2yhzc","::-webkit-slider-thumb_height":"range-1p6diu8","::-webkit-slider-thumb_opacity":"range-1arydcj","::-webkit-slider-thumb_width":"range-1iqn34f","::-webkit-slider-thumb_border":"range-jpt6gn","::-webkit-slider-thumb_transitionProperty":"range-5rbd5","::-webkit-slider-thumb_transitionTimingFunction":"range-nq99s9","::-webkit-slider-thumb_transitionDuration":"range-14qvetc","::-webkit-slider-thumb_:hover_opacity":"range-5e1a76","::-webkit-slider-thumb_:active_cursor":"range-1tk0e90","::-webkit-slider-thumb_:active_transform":"range-1xk2y70","::-moz-range-thumb_appearance":"range-13fi9fm","::-moz-range-thumb_background":"range-1vedxjn","::-moz-range-thumb_borderRadius":"range-v968mp","::-moz-range-thumb_boxShadow":"range-66xn83","::-moz-range-thumb_cursor":"range-vs8oyn","::-moz-range-thumb_height":"range-1xyey98","::-moz-range-thumb_opacity":"range-f0vhvv","::-moz-range-thumb_width":"range-jt8dmu","::-moz-range-thumb_border":"range-s99pfi","::-moz-range-thumb_transitionProperty":"range-bffa19","::-moz-range-thumb_transitionTimingFunction":"range-1a7ebab","::-moz-range-thumb_transitionDuration":"range-10p4uoo","::-moz-range-thumb_:hover_opacity":"range-l3xga7","::-moz-range-thumb_:active_cursor":"range-uyzg6f","::-moz-range-thumb_:active_transform":"range-oo02y2",$$css:!0},highlight:{boxShadow:"range-d2bjx",$$css:!0},editorValue:{alignItems:"range-6s0dn4",display:"range-78zum5",flexDirection:"range-1q0g3np",justifyContent:"range-1qughib",$$css:!0},editorValueWithReset:{marginRight:"range-1icn928",$$css:!0},editorValueButton:{cursor:"range-1ypdohk",background:"range-11g6tue",padding:"range-1717udv",border:"range-1wty727",color:"range-1heor9g",borderRadius:"range-1cum3z5",minHeight:"range-isnujt",":focus_outline":"range-1x5k38z",":focus_outlineOffset":"range-1cm8ssg",$$css:!0},textLeft:{textAlign:"range-dpxx8g",$$css:!0},textRight:{textAlign:"range-1hr2gdg",$$css:!0},textfield:{background:"range-10msy31",border:"range-1wty727",color:"range-yhbhln",display:"range-78zum5",alignItems:"range-6s0dn4",padding:"range-29crso",borderRadius:"range-1cum3z5",gap:"range-12mrbbr",cursor:"range-1ed109x",":focus-within_color":"range-xeqyu3",":focus-within_background":"range-1rhx0j6",$$css:!0},textfieldInput:e=>[{appearance:"range-jyslct",padding:"range-1717udv",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,border:"range-1wty727",borderWidth:null,borderInlineWidth:null,borderInlineStartWidth:null,borderLeftWidth:null,borderInlineEndWidth:null,borderRightWidth:null,borderBlockWidth:null,borderTopWidth:null,borderBottomWidth:null,borderStyle:null,borderInlineStyle:null,borderInlineStartStyle:null,borderLeftStyle:null,borderInlineEndStyle:null,borderRightStyle:null,borderBlockStyle:null,borderTopStyle:null,borderBottomStyle:null,borderColor:null,borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,margin:"range-1ghz6dp",marginInline:null,marginInlineStart:null,marginLeft:null,marginInlineEnd:null,marginRight:null,marginBlock:null,marginTop:null,marginBottom:null,background:"range-1md70p1",backgroundAttachment:null,backgroundClip:null,backgroundColor:null,backgroundImage:null,backgroundOrigin:null,backgroundPosition:null,backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,backgroundSize:null,color:"range-1heor9g",display:"range-1rg5ohu",textAlign:"range-2b8uid",boxSizing:"range-1afcbsf",width:e==null?null:"range-1bl4301",":focus_outline":"range-1uvtmcs",":focus_outlineColor":null,":focus_outlineOffset":null,":focus_outlineStyle":null,":focus_outlineWidth":null,$$css:!0},{"--width":(t=>typeof t=="number"?t+"px":t??void 0)(e)}],textfielInputRight:{textAlign:"range-1hr2gdg",$$css:!0},textfieldGap:{gap:"range-6gsi71",rowGap:null,columnGap:null,$$css:!0},editorValueSingle:{justifyContent:"range-l56j7k",$$css:!0},container:{width:"range-h8yej3",$$css:!0},editorDisabled:{"--color":"range-orarm7",opacity:"range-190dgpg",cursor:"range-1h6gzvc",":where(*)>*_pointerEvents":"range-vszx66",$$css:!0},editorEnabled:{"--color":"range-jcvozh",$$css:!0},dimmed:{opacity:"range-1ks1olk",$$css:!0}};function Tr({value:e,id:t,highlight:n,i18nRegistry:a,onEnterKey:l,onKeyDown:s,onKeyPress:u,commit:p,dataSourcesDataLoader:_,...g}){let[A,f]=(0,o.useState)(null),w=r=>r?a.translate(r):"",z=Vr(),[D,$]=(0,o.useState)(e),[C]=Ge(D,500),i={...pe,...g.options},{dataSourceIdentifier:S,dataSourceUri:P,dataSourceAdditionalData:W}=i,k=!!(S||P),[T,R]=(0,o.useState)(k),[m,V]=(0,o.useState)(i.disabled),[d,x]=(0,o.useState)(i.resetLabel),[q,ue]=(0,o.useState)(i.resetValue),[xe,Ze]=(0,o.useState)(i.resetIcon),[N,Oe]=(0,o.useState)(w(i.unit)),[v,er]=(0,o.useState)(i.min),[L,rr]=(0,o.useState)(i.max),[E,tr]=(0,o.useState)(i.step),[ne,nr]=(0,o.useState)(Je(i)),[ae,ar]=(0,o.useState)(i.valueLabels),[ce,or]=(0,o.useState)(i.valueLabelsFile),[X,ir]=(0,o.useState)(i.showInput),[ve,lr]=(0,o.useState)(He(i)),[de,sr]=(0,o.useState)(i.ratio),[Z,ur]=(0,o.useState)({...i,value:e}),[O,cr]=(0,o.useState)(i.showMinLabel),[ee,dr]=(0,o.useState)(i.showMaxLabel),[we,gr]=(0,o.useState)(i.minLabel),[Le,fr]=(0,o.useState)(i.maxLabel);function Se(r){!h(r.disabled)&&r.disabled!==m&&V(r.disabled),!h(r.resetLabel)&&r.resetLabel!==d&&x(r.resetLabel),!h(r.resetValue)&&r.resetValue!==q&&ue(r.resetValue),!h(r.resetIcon)&&r.resetIcon!==xe&&Ze(r.resetIcon),!h(r.min)&&r.min!==v&&er(r.min),!h(r.max)&&r.max!==L&&rr(r.max),!h(r.step)&&r.step!==E&&tr(r.step),!h(r.valueLabels)&&JSON.stringify(r.valueLabels)!==JSON.stringify(ae)&&ar(r.valueLabels),!h(r.valueLabelsFile)&&r.valueLabelsFile!==ce&&or(r.valueLabelsFile),!h(r.showInput)&&r.showInput!==X&&ir(r.showInput),!h(r.ratio)&&r.ratio!==de&&sr(r.ratio),!h(r.showMinLabel)&&r.showMinLabel!==O&&cr(r.showMinLabel),!h(r.showMaxLabel)&&r.showMaxLabel!==ee&&dr(r.showMaxLabel),!h(r.minLabel)&&r.minLabel!==we&&gr(r.minLabel),!h(r.maxLabel)&&r.maxLabel!==Le&&fr(r.maxLabel);let c=w(r.unit);!h(r.unit)&&c!==N&&Oe(c);let M=He(r);M!==null&&M!==ve&&lr(M)}(0,o.useEffect)(()=>{Se({...pe,...g.options})},[g.options]),(0,o.useEffect)(()=>{let r=JSON.stringify({dataSourceIdentifier:S,dataSourceUri:P,dataSourceAdditionalData:W});!k||A===r||(f(r),_.resolveValue(Dr(g),e).then(c=>{R(!1);let M=F(pe,g.options,c);Se(M)}))},[S,P,W]),(0,o.useEffect)(()=>{let r=Je({ratio:de,unit:N,min:v,max:L});r!=ne&&nr(r)},[de,N,v,L]),(0,o.useEffect)(()=>{let r=Pr({value:e,min:v,max:L,showMinLabel:O,showMaxLabel:ee});r!=Z&&ur(r)},[e,v,L,ee,O]);let _e=(0,o.useRef)(null),mr=r=>{U(r.target.value)};(0,o.useEffect)(()=>{if(C!=e){let r=parseFloat(C),c=E-(r-v)%E;(c==0||c==E)&&(c=0),c>E/2&&(c=c-E);let M=Math.min(L,Math.max(v,r+c));U(M)}},[C]);let U=r=>{$(r),r=(E||1)%1===0?parseInt(r,10):parseFloat(r,10),!isNaN(r)&&(r=Math.min(L,Math.max(v,r)),p(r),z())},ke=r=>{if(typeof u=="function"&&u(r),r.key==="Enter"&&typeof l=="function"){l();return}},Me=r=>{typeof s=="function"&&s(r);let c=r.key,M=c=="ArrowUp";if(c=="ArrowDown"||M){let{metaKey:re,shiftKey:hr}=r,$e=E*(hr?10:re?100:1);if(M){U(Math.min(e+$e,L)),r.preventDefault();return}U(Math.max(e-$e,v)),r.preventDefault();return}},ge=e||"0",fe=r=>ae&&ae[r]?ae[r]:ce?`${ce}:${r}`:null,oe=(r,c)=>{if(r<=v){let M=!X||c?v+N:null,re=we||fe(v)||M;return a.translate(re)}if(r>=L){let M=!X||c?L+N:null,re=Le||fe(L)||M;return a.translate(re)}return a.translate(fe(r))},Y=oe(e),Ie=o.default.createElement("input",{type:"range",id:!ne&&!Y&&X?null:t,min:v,max:L,step:E,value:ge,onChange:mr,onKeyDown:Me,onKeyPress:ke,disabled:m,...I(y.slider,n&&y.highlight)}),br=(()=>{let r=q;if(ne)return{value:r,unit:"%"};let c=oe(r);return c?{value:c,unit:""}:{value:r,unit:N}})();return T?o.default.createElement(Pe,{isLoading:!0,title:"Carbon.RangeEditor:Main:loading"}):o.default.createElement("div",{...I(y.container,m?y.editorDisabled:y.editorEnabled)},typeof q>"u"?Ie:o.default.createElement("div",{className:"range-78zum5 range-1jnr06f"},Ie,o.default.createElement("button",{className:"range-10msy31 range-1wty727 range-1cum3z5 range-yhbhln range-1ypdohk range-lrawln range-ezl2tj range-1717udv range-3nn9bt range-e1ymxu",title:a.translate(d,null,br),onClick:({currentTarget:r})=>{r.blur(),U(q)},disabled:m},o.default.createElement(Qe.Icon,{icon:xe}))),o.default.createElement("div",{...I(y.editorValue,typeof q<"u"&&y.editorValueWithReset,!O&&!ee&&y.editorValueSingle)},ne?o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{type:"button",title:a.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>U(v),disabled:m,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg range-dpxx8g"},ge,"%"),o.default.createElement("button",{type:"button",title:a.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>U(L),disabled:m,className:"range-1ypdohk range-11g6tue range-1717udv range-1wty727 range-1heor9g range-1cum3z5 range-isnujt range-1x5k38z range-1cm8ssg range-1hr2gdg"},100-e,"%")):o.default.createElement(o.default.Fragment,null,O&&o.default.createElement("button",{type:"button",title:a.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>U(v),disabled:m,...I(y.editorValueButton,y.textLeft,!Z&&Y&&v>=e?null:y.dimmed)},oe(v,!0)),!Z&&!X&&o.default.createElement("span",null,"\xA0"),Y&&Z&&o.default.createElement("span",{className:"range-87ps6o"},Y),!Y&&X&&o.default.createElement("span",{...I(y.textfield,!!N&&N.toString().startsWith(" ")&&y.textfieldGap),onClick:()=>{_e?.current?.focus()}},o.default.createElement("input",{id:t,title:a.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyDown:Me,onKeyPress:r=>{ke(r),isNaN(r.key)&&r.preventDefault()},onChange:r=>$(r.target.value),value:D||"0",disabled:m,ref:_e,...I(y.textfieldInput(ve),N&&y.textfielInputRight)}),N&&o.default.createElement("span",{className:"range-87ps6o"},N.toString().trim())),!Y&&Z&&!X&&o.default.createElement("span",{className:"range-87ps6o"},ge,N),ee&&o.default.createElement("button",{type:"button",title:a.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>U(L),disabled:m,...I(y.editorValueButton,y.textRight,!Z&&Y&&L<=e?null:y.dimmed)},oe(L,!0)))))}function h(e){return typeof e=="string"&&e.startsWith("ClientEval:")}function Vr(){let[,e]=(0,o.useState)(0);return()=>e(t=>t+1)}function Fr(e,t,n){return e>t&&e<n}function Je({ratio:e,unit:t,min:n,max:a}){return e==!0&&t=="%"&&n>=0&&a<=100}function Ke(e){return e%1===0}function ye(e){return e.toString().length}function He({min:e,max:t,step:n}){if(h(e)||h(t)||h(n))return null;let a=Ke(e)&&Ke(t)?ye(n)-1:0;return Math.max(ye(e),ye(t))+a+"ch"}function Pr({value:e,min:t,max:n,showMinLabel:a,showMaxLabel:l}){let s=Fr(e,t,n);return a||(s=s||e===t),l||(s=s||e===n),s}var qr=(0,Re.neos)(e=>({i18nRegistry:e.get("i18n"),dataSourcesDataLoader:e.get("dataLoaders").get("DataSources")})),Wr=(0,Ye.connect)(e=>({focusedNodePath:Xe.selectors.CR.Nodes.focusedNodePathSelector(e)})),ct=qr(Wr(Tr));export{ct as default};

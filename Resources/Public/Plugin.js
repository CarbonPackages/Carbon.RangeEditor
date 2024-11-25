(()=>{var T=Object.create;var D=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var ee=(e,r)=>()=>(e&&(r=e(e=0)),r);var k=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var te=(e,r,n,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of _(r))!q.call(e,i)&&i!==n&&D(e,i,{get:()=>r[i],enumerable:!(s=K(r,i))||s.enumerable});return e};var N=(e,r,n)=>(n=e!=null?T($(e)):{},te(r||!e||!e.__esModule?D(n,"default",{value:e,enumerable:!0}):n,e));function W(e){return(...r)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...r);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var z=ee(()=>{});var L=k((Qe,S)=>{z();S.exports=W("vendor")().React});var j=k((Le,U)=>{z();U.exports=W("NeosProjectPackages")().NeosUiDecorators});z();var J=W("manifest");var c=N(L()),P=N(j());var u=N(L());function ne(e,r,n){var s=this,i=(0,u.useRef)(null),m=(0,u.useRef)(0),g=(0,u.useRef)(null),b=(0,u.useRef)([]),t=(0,u.useRef)(),h=(0,u.useRef)(),Y=(0,u.useRef)(e),l=(0,u.useRef)(!0);Y.current=e;var B=typeof window<"u",G=!r&&r!==0&&B;if(typeof e!="function")throw new TypeError("Expected a function");r=+r||0;var w=!!(n=n||{}).leading,O=!("trailing"in n)||!!n.trailing,y="maxWait"in n,X="debounceOnServer"in n&&!!n.debounceOnServer,p=y?Math.max(+n.maxWait||0,r):null;(0,u.useEffect)(function(){return l.current=!0,function(){l.current=!1}},[]);var V=(0,u.useMemo)(function(){var F=function(o){var a=b.current,d=t.current;return b.current=t.current=null,m.current=o,h.current=Y.current.apply(d,a)},I=function(o,a){G&&cancelAnimationFrame(g.current),g.current=G?requestAnimationFrame(o):setTimeout(o,a)},f=function(o){if(!l.current)return!1;var a=o-i.current;return!i.current||a>=r||a<0||y&&o-m.current>=p},v=function(o){return g.current=null,O&&b.current?F(o):(b.current=t.current=null,h.current)},x=function o(){var a=Date.now();if(f(a))return v(a);if(l.current){var d=r-(a-i.current),Z=y?Math.min(d,p-(a-m.current)):d;I(o,Z)}},C=function(){if(B||X){var o=Date.now(),a=f(o);if(b.current=[].slice.call(arguments),t.current=s,i.current=o,a){if(!g.current&&l.current)return m.current=i.current,I(x,r),w?F(i.current):h.current;if(y)return I(x,r),F(i.current)}return g.current||I(x,r),h.current}};return C.cancel=function(){g.current&&(G?cancelAnimationFrame(g.current):clearTimeout(g.current)),m.current=0,b.current=i.current=t.current=g.current=null},C.isPending=function(){return!!g.current},C.flush=function(){return g.current?v(Date.now()):h.current},C},[w,y,r,p,O,G,B,X]);return V}function oe(e,r){return e===r}function H(e,r,n){var s=n&&n.equalityFn||oe,i=(0,u.useRef)(e),m=(0,u.useState)({})[1],g=ne((0,u.useCallback)(function(t){i.current=t,m({})},[m]),r,n),b=(0,u.useRef)(e);return s(b.current,e)||(g(e),b.current=e),[i.current,g]}var A={valueLabel:"carbon-rangeeditor-6mQFcW-valueLabel",editorValueSingle:"carbon-rangeeditor-6mQFcW-editorValueSingle",editorDisabled:"carbon-rangeeditor-6mQFcW-editorDisabled",slider:"carbon-rangeeditor-6mQFcW-slider",sliderHighlight:"carbon-rangeeditor-6mQFcW-sliderHighlight",editorValue:"carbon-rangeeditor-6mQFcW-editorValue"};function E(e){var r,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(n=E(e[r]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function ie(){for(var e,r,n=0,s="",i=arguments.length;n<i;n++)(e=arguments[n])&&(r=E(e))&&(s&&(s+=" "),s+=r);return s}var Q=ie;var ae=(0,P.neos)(e=>({i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("Carbon.RangeEditor")})),se={options:{min:0,max:100,step:1,unit:"",showMinLabel:!0,showMaxLabel:!0,minLabel:null,maxLabel:null,disabled:!1,showInput:!0,valueLabelsFile:"",valueLabels:{}}};function ce(e){let r=ue(),{value:n,highlight:s,i18nRegistry:i}=e,[m,g]=(0,c.useState)(n),[b]=H(m,500),t={...se.options,...e.options},h=t.ratio==!0&&t.unit=="%"&&t.min>=0&&t.max<=100,Y=o=>{l(o.target.value)};(0,c.useEffect)(()=>{b!=n&&l(b)},[b]);let l=o=>{g(o);let{options:a}=e;o=(a.step||1)%1===0?parseInt(o,10):parseFloat(o,10),!isNaN(o)&&(o=Math.min(a.max,Math.max(a.min,o)),e.commit(o),r())},B=o=>{isNaN(o.key)&&o.preventDefault()},G=o=>{let a=o.key,d=t.step;a=="ArrowUp"||a=="ArrowDown"?d*=10:(a=="PageUp"||a=="PageDown")&&(d*=100),a=="PageUp"||a=="ArrowUp"||a=="ArrowRight"?(l(Math.min(n+d,t.max)),o.preventDefault()):(a=="PageDown"||a=="ArrowDown"||a=="ArrowLeft")&&(l(Math.max(n-d,t.min)),o.preventDefault())},w=n||"0",O=o=>o.toString().length,y=O(t.step)-1,X=Math.max(O(t.min),O(t.max))+y+"ch",p=t.unit?i.translate(t.unit):"",{valueLabels:V,valueLabelsFile:F,showInput:I}=t,f=ge(n,t.min,t.max);t.showMinLabel||(f=f||n===t.min),t.showMaxLabel||(f=f||n===t.max);let v=o=>V&&V[o]?V[o]:F?`${F}:${o}`:null,x=(o,a)=>{if(o<=t.min){let d=!I||a?t.min+p:null,Z=t.minLabel||v(t.min)||d;return i.translate(Z)}if(o>=t.max){let d=!I||a?t.max+p:null,Z=t.maxLabel||v(t.max)||d;return i.translate(Z)}return i.translate(v(o))},C=x(n);return c.default.createElement("div",{className:Q(A.editor,t.disabled&&A.editorDisabled)},c.default.createElement("input",{type:"range",min:t.min,max:t.max,step:t.step,value:w,className:Q(A.slider,s&&A.sliderHighlight),onChange:Y,disabled:t.disabled}),c.default.createElement("div",{className:Q(A.editorValue,!t.showMinLabel&&!t.showMaxLabel&&A.editorValueSingle)},h?c.default.createElement(c.default.Fragment,null,c.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>l(t.min),disabled:t.disabled},w,"%"),c.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>l(t.max),disabled:t.disabled},100-n,"%")):c.default.createElement(c.default.Fragment,null,t.showMinLabel&&c.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>l(t.min),style:{opacity:t.min>=n?1:.7},disabled:t.disabled},x(t.min,!0)),!f&&!I&&c.default.createElement("span",null,"\xA0"),C&&f&&c.default.createElement("span",{className:A.valueLabel},C),!C&&I&&c.default.createElement("span",null,c.default.createElement("input",{title:i.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyDown:G,onKeyPress:B,onChange:o=>g(o.target.value),value:m||"0",style:{width:X},disabled:t.disabled}),p),!C&&f&&!I&&c.default.createElement("span",null,w,p),t.showMaxLabel&&c.default.createElement("button",{type:"button",title:i.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>l(t.max),style:{opacity:t.max<=n?1:.7},disabled:t.disabled},x(t.max,!0)))))}function ue(){let[,e]=(0,c.useState)(0);return()=>e(r=>r+1)}function ge(e,r,n){return e>r&&e<n}var R=ae(ce);J("Carbon.RangeEditor:Editor",{},e=>{e.get("inspector").get("editors").set("Carbon.RangeEditor/Editor",{component:R})});})();
//# sourceMappingURL=Plugin.js.map

(()=>{var H=Object.create;var x=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var M=(e,t)=>()=>(e&&(t=e(e=0)),t);var W=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var U=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of L(t))!R.call(e,a)&&a!==n&&x(e,a,{get:()=>t[a],enumerable:!(i=k(t,a))||i.enumerable});return e};var O=(e,t,n)=>(n=e!=null?H(j(e)):{},U(t||!e||!e.__esModule?x(n,"default",{value:e,enumerable:!0}):n,e));function d(e){return(...t)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...t);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var u=M(()=>{});var Z=W((xe,X)=>{u();X.exports=d("vendor")().React});var N=W((Oe,B)=>{u();B.exports=d("NeosProjectPackages")().NeosUiDecorators});u();var F=d("manifest");var s=O(Z()),V=O(N());var l={sliderHighlight:"carbon-rangeeditor-6mQFcW-sliderHighlight",slider:"carbon-rangeeditor-6mQFcW-slider",editorDisabled:"carbon-rangeeditor-6mQFcW-editorDisabled",valueLabel:"carbon-rangeeditor-6mQFcW-valueLabel",editorValue:"carbon-rangeeditor-6mQFcW-editorValue"};function z(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=z(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function D(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=z(e))&&(i&&(i+=" "),i+=t);return i}var f=D;var E=(0,V.neos)(e=>({i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("Carbon.RangeEditor")})),P={options:{min:0,max:100,step:1,unit:"",minLabel:null,maxLabel:null,disabled:!1,valueLabelsFile:"",valueLabels:{}}};function T(e,t){let n=K(),i=o=>{a(o.target.value)},a=o=>{let{options:g}=e;o=(g.step||1)%1===0?parseInt(o,10):parseFloat(o,10),!isNaN(o)&&(o=Math.min(g.max,Math.max(g.min,o)),e.commit(o),n())},_=o=>{isNaN(o.key)&&o.preventDefault()},r={...P.options,...e.options},{value:c,highlight:Y,i18nRegistry:b}=e,y=c===0?"0":c||"",I=o=>o.toString().length,J=I(r.step)-1,Q=Math.max(I(r.min),I(r.max))+J+"ch",{valueLabels:m,valueLabelsFile:G}=r,C=c!=r.min&&c!=r.max,A=o=>m&&m[o]?m[o]:G?`${G}:${o}`:null,p=o=>{if(o==r.min){let g=r.minLabel||A(r.min)||r.min+r.unit;return b.translate(g)}if(o==r.max){let g=r.maxLabel||A(r.max)||r.max+r.unit;return b.translate(g)}return b.translate(A(o))},h=p(c);return s.default.createElement("div",{className:f(l.editor,r.disabled&&l.editorDisabled)},s.default.createElement("input",{type:"range",min:r.min,max:r.max,step:r.step,value:y,className:f(l.slider,Y&&l.sliderHighlight),onChange:i,disabled:r.disabled}),s.default.createElement("div",{className:l.editorValue},s.default.createElement("button",{type:"button",title:b.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>a(r.min),style:{opacity:r.min==c?1:.7},disabled:r.disabled},p(r.min)),!C&&s.default.createElement("span",null,"\xA0"),h&&C&&s.default.createElement("span",{className:l.valueLabel},h),!h&&C&&s.default.createElement("span",null,s.default.createElement("input",{title:b.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyPress:this.onKeyPress,onChange:this.handleChange,value:y,style:{width:Q},disabled:r.disabled}),r.unit),s.default.createElement("button",{type:"button",title:b.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>a(r.max),style:{opacity:r.max==c?1:.7},disabled:r.disabled},p(r.max))))}function K(){let[e,t]=(0,s.useState)(0);return()=>t(n=>n+1)}var w=E(T);F("Carbon.RangeEditor:Editor",{},e=>{e.get("inspector").get("editors").set("Carbon.RangeEditor/Editor",{component:w})});})();
//# sourceMappingURL=Plugin.js.map

(()=>{var k=Object.create;var x=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var U=(e,t)=>()=>(e&&(t=e(e=0)),t);var W=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var S=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of j(t))!M.call(e,a)&&a!==n&&x(e,a,{get:()=>t[a],enumerable:!(i=L(t,a))||i.enumerable});return e};var O=(e,t,n)=>(n=e!=null?k(R(e)):{},S(t||!e||!e.__esModule?x(n,"default",{value:e,enumerable:!0}):n,e));function g(e){return(...t)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...t);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var u=U(()=>{});var Z=W((We,X)=>{u();X.exports=g("vendor")().React});var N=W((ve,B)=>{u();B.exports=g("NeosProjectPackages")().NeosUiDecorators});u();var F=g("manifest");var s=O(Z()),w=O(N());var d={valueLabel:"carbon-rangeeditor-6mQFcW-valueLabel",editorDisabled:"carbon-rangeeditor-6mQFcW-editorDisabled",editorValue:"carbon-rangeeditor-6mQFcW-editorValue",slider:"carbon-rangeeditor-6mQFcW-slider",sliderHighlight:"carbon-rangeeditor-6mQFcW-sliderHighlight"};function z(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=z(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function E(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=z(e))&&(i&&(i+=" "),i+=t);return i}var h=E;var P=(0,w.neos)(e=>({i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("Carbon.RangeEditor")})),T={options:{min:0,max:100,step:1,unit:"",minLabel:null,maxLabel:null,disabled:!1,valueLabelsFile:"",valueLabels:{}}};function K(e,t){let n=_(),i=o=>{a(o.target.value)},a=o=>{let{options:c}=e;o=(c.step||1)%1===0?parseInt(o,10):parseFloat(o,10),!isNaN(o)&&(o=Math.min(c.max,Math.max(c.min,o)),e.commit(o),n())},Y=o=>{isNaN(o.key)&&o.preventDefault()},r={...T.options,...e.options},{value:l,highlight:J,i18nRegistry:b}=e,y=l===0?"0":l||"",I=o=>o.toString().length,Q=I(r.step)-1,H=Math.max(I(r.min),I(r.max))+Q+"ch",{valueLabels:m,valueLabelsFile:G}=r,C=$(l,r.min,r.max),A=o=>m&&m[o]?m[o]:G?`${G}:${o}`:null,p=o=>{if(o<=r.min){let c=r.minLabel||A(r.min)||r.min+r.unit;return b.translate(c)}if(o>=r.max){let c=r.maxLabel||A(r.max)||r.max+r.unit;return b.translate(c)}return b.translate(A(o))},f=p(l);return s.default.createElement("div",{className:h(d.editor,r.disabled&&d.editorDisabled)},s.default.createElement("input",{type:"range",min:r.min,max:r.max,step:r.step,value:y,className:h(d.slider,J&&d.sliderHighlight),onChange:i,disabled:r.disabled}),s.default.createElement("div",{className:d.editorValue},s.default.createElement("button",{type:"button",title:b.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>a(r.min),style:{opacity:r.min>=l?1:.7},disabled:r.disabled},p(r.min)),!C&&s.default.createElement("span",null,"\xA0"),f&&C&&s.default.createElement("span",{className:d.valueLabel},f),!f&&C&&s.default.createElement("span",null,s.default.createElement("input",{title:b.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyPress:Y,onChange:i,value:y,style:{width:H},disabled:r.disabled}),r.unit),s.default.createElement("button",{type:"button",title:b.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>a(r.max),style:{opacity:r.max<=l?1:.7},disabled:r.disabled},p(r.max))))}function _(){let[e,t]=(0,s.useState)(0);return()=>t(n=>n+1)}function $(e,t,n){return e>t&&e<n}var V=P(K);F("Carbon.RangeEditor:Editor",{},e=>{e.get("inspector").get("editors").set("Carbon.RangeEditor/Editor",{component:V})});})();
//# sourceMappingURL=Plugin.js.map

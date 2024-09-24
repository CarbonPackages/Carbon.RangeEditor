(()=>{var S=Object.create;var W=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var H=(e,r)=>()=>(e&&(r=e(e=0)),r);var O=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var R=(e,r,i,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of U(r))!j.call(e,a)&&a!==i&&W(e,a,{get:()=>r[a],enumerable:!(n=M(r,a))||n.enumerable});return e};var w=(e,r,i)=>(i=e!=null?S(D(e)):{},R(r||!e||!e.__esModule?W(i,"default",{value:e,enumerable:!0}):i,e));function b(e){return(...r)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...r);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var I=H(()=>{});var Z=O((Oe,V)=>{I();V.exports=b("vendor")().React});var X=O((Be,Y)=>{I();Y.exports=b("NeosProjectPackages")().NeosUiDecorators});I();var F=b("manifest");var s=w(Z()),z=w(X());var c={editorDisabled:"carbon-rangeeditor-6mQFcW-editorDisabled",slider:"carbon-rangeeditor-6mQFcW-slider",valueLabel:"carbon-rangeeditor-6mQFcW-valueLabel",editorValue:"carbon-rangeeditor-6mQFcW-editorValue",editorValueSingle:"carbon-rangeeditor-6mQFcW-editorValueSingle",sliderHighlight:"carbon-rangeeditor-6mQFcW-sliderHighlight"};function v(e){var r,i,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(i=v(e[r]))&&(n&&(n+=" "),n+=i)}else for(i in e)e[i]&&(n&&(n+=" "),n+=i);return n}function P(){for(var e,r,i=0,n="",a=arguments.length;i<a;i++)(e=arguments[i])&&(r=v(e))&&(n&&(n+=" "),n+=r);return n}var m=P;var T=(0,z.neos)(e=>({i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("Carbon.RangeEditor")})),K={options:{min:0,max:100,step:1,unit:"",showMinLabel:!0,showMaxLabel:!0,minLabel:null,maxLabel:null,disabled:!1,valueLabelsFile:"",valueLabels:{}}};function _(e){let r=$(),i=o=>{n(o.target.value)},n=o=>{let{options:u}=e;o=(u.step||1)%1===0?parseInt(o,10):parseFloat(o,10),!isNaN(o)&&(o=Math.min(u.max,Math.max(u.min,o)),e.commit(o),r())},a=o=>{isNaN(o.key)&&o.preventDefault()},t={...K.options,...e.options},{value:g,highlight:L,i18nRegistry:d}=e,C=g===0?"0":g||"",A=o=>o.toString().length,N=A(t.step)-1,J=Math.max(A(t.min),A(t.max))+N+"ch",p=t.unit?d.translate(t.unit):"",{valueLabels:f,valueLabelsFile:G,showInput:k}=t,l=q(g,t.min,t.max);t.showMinLabel||(l=l||g===t.min),t.showMaxLabel||(l=l||g===t.max);let h=o=>f&&f[o]?f[o]:G?`${G}:${o}`:null,y=o=>{if(o<=t.min){let u=t.minLabel||h(t.min)||t.min+p;return d.translate(u)}if(o>=t.max){let u=t.maxLabel||h(t.max)||t.max+p;return d.translate(u)}return d.translate(h(o))},x=y(g);return s.default.createElement("div",{className:m(c.editor,t.disabled&&c.editorDisabled)},s.default.createElement("input",{type:"range",min:t.min,max:t.max,step:t.step,value:C,className:m(c.slider,L&&c.sliderHighlight),onChange:i,disabled:t.disabled}),s.default.createElement("div",{className:m(c.editorValue,!t.showMinLabel&&!t.showMaxLabel&&c.editorValueSingle)},t.showMinLabel&&s.default.createElement("button",{type:"button",title:d.translate("Neos.Neos.Ui:Main:rangeEditorMinimum"),onClick:()=>n(t.min),style:{opacity:t.min>=g?1:.7},disabled:t.disabled},y(t.min)),!l&&s.default.createElement("span",null,"\xA0"),x&&l&&s.default.createElement("span",{className:c.valueLabel},x),!x&&l&&s.default.createElement("span",null,k?s.default.createElement("input",{title:d.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue"),type:"text",onKeyPress:a,onChange:i,value:C,style:{width:J},disabled:t.disabled}):C,p),t.showMaxLabel&&s.default.createElement("button",{type:"button",title:d.translate("Neos.Neos.Ui:Main:rangeEditorMaximum"),onClick:()=>n(t.max),style:{opacity:t.max<=g?1:.7},disabled:t.disabled},y(t.max))))}function $(){let[,e]=(0,s.useState)(0);return()=>e(r=>r+1)}function q(e,r,i){return e>r&&e<i}var Q=T(_);F("Carbon.RangeEditor:Editor",{},e=>{e.get("inspector").get("editors").set("Carbon.RangeEditor/Editor",{component:Q})});})();
//# sourceMappingURL=Plugin.js.map

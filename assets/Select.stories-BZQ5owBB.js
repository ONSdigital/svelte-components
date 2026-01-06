import{p as C,j as v,f as D,Z as O,g as r,o as a,k as l,e as f,h as A,_ as $,n as H}from"./iframe-DZk-GI4f.js";import{w as L,c as M,i as G,d as P}from"./create-runtime-stories-CzT9f7Ym.js";import{s as T}from"./style-CcY6orqc.js";import{S as g}from"./Select-COF5Xhz4.js";import{o as t}from"./menuOptions-kj4WdJs_.js";import"./attributes-Co-1QMVx.js";import"./svelte-head-CAgoTDwJ.js";import"./actions-Bv1gbOFv.js";import"./attributes-CkDADBTK.js";import"./class-Dzh9Da8g.js";import"./Dropdown-BhtVIVHX.js";import"./each-D3S3moRV.js";import"./Input-CrcIkGLG.js";import"./input-D2Tjb4Br.js";const V=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.\r
\r
This component is a Svelte wrapper for the GOV.UK [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete).\r
\r
(Note: This component is not fully compatible with a previous version of the same component based on svelte-select.)\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { AccessibleSelect } from "@onsvisual/svelte-components";\r
\r
  const values = [\r
    { id: "1", label: "one" },\r
    { id: "2", label: "two" },\r
    { id: "3", label: "three" },\r
  ];\r
  \r
\r
  // Bind the <select> value to a variable (reactive)\r
  let value;\r
\r
  // Define your own function on change\r
  const handleChange = (e) => console.log(e);\r
<\/script>\r
\r
<AccessibleSelect {options} bind:value on:change="{handleChange}" />\r
\`\`\`\r
`,s=(p,d=O)=>{var e=K();T(e,"",{},{padding:"0 0 200px"});var i=H(e);g(i,$(d)),f(p,e)},W={title:"Inputs/Select",component:g,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:L(V)},{Story:n}=P();var K=v("<div><!></div>"),j=v("<!> <!> <!> <!> <!>",1);function _(p,d){C(d,!1),G();var e=j(),i=D(e);const h=a(()=>({id:"default",label:"Select an option",options:t}));n(i,{name:"Default",get args(){return r(h)},get template(){return s},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var c=l(i,2);const S=a(()=>({id:"default",value:t[0],label:"Select an option",options:t}));n(c,{name:"Pre-selected value",get args(){return r(S)},get template(){return s},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var m=l(c,2);const b=a(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:t}));n(m,{name:"Hidden label",get args(){return r(b)},get template(){return s},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var u=l(m,2);const x=a(()=>({id:"search",mode:"search",label:"Type to select",options:t}));n(u,{name:"Search mode",get args(){return r(x)},get template(){return s},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var w=l(u,2);const y=a(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:t}));n(w,{name:"Options with group as suffix",get args(){return r(y)},get template(){return s},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}}),f(p,e),A()}_.__docgen={data:[],name:"Select.stories.svelte"};const o=M(_,W),Y=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],ee={...o.Default,tags:["svelte-csf-v5"]},te={...o.PreSelectedValue,tags:["svelte-csf-v5"]},re={...o.HiddenLabel,tags:["svelte-csf-v5"]},ae={...o.SearchMode,tags:["svelte-csf-v5"]},se={...o.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{ee as Default,re as HiddenLabel,se as OptionsWithGroupAsSuffix,te as PreSelectedValue,ae as SearchMode,Y as __namedExportsOrder,W as default};

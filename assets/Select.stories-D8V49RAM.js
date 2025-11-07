import{p as C,j as v,f as D,Z as O,g as a,o as s,k as i,e as f,h as A,_ as $,n as H}from"./iframe-oyiClAn3.js";import{w as L,c as M,i as G,d as P}from"./create-runtime-stories-C_UJKXQA.js";import{s as T}from"./style-CcY6orqc.js";import{S as g}from"./Select-BgqI5UHj.js";import{o as t}from"./menuOptions-kj4WdJs_.js";import"./attributes-Co-1QMVx.js";import"./svelte-head-7J5CJbfB.js";import"./actions-CGOuielA.js";import"./attributes-DnyOSBr9.js";import"./class-Dzh9Da8g.js";const V=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.\r
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
`,r=(p,d=O)=>{var e=K();T(e,"",{},{padding:"0 0 200px"});var l=H(e);g(l,$(d)),f(p,e)},W={title:"Inputs/Select",component:g,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:L(V)},{Story:n}=P();var K=v("<div><!></div>"),j=v("<!> <!> <!> <!> <!>",1);function _(p,d){C(d,!1),G();var e=j(),l=D(e);const h=s(()=>({id:"default",label:"Select an option",options:t}));n(l,{name:"Default",get args(){return a(h)},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var c=i(l,2);const S=s(()=>({id:"default",value:t[0],label:"Select an option",options:t}));n(c,{name:"Pre-selected value",get args(){return a(S)},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var m=i(c,2);const b=s(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:t}));n(m,{name:"Hidden label",get args(){return a(b)},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var u=i(m,2);const x=s(()=>({id:"search",mode:"search",label:"Type to select",options:t}));n(u,{name:"Search mode",get args(){return a(x)},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}});var w=i(u,2);const y=s(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:t}));n(w,{name:"Options with group as suffix",get args(){return a(y)},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}}),f(p,e),A()}_.__docgen={data:[],name:"Select.stories.svelte"};const o=M(_,W),F=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],J={...o.Default,tags:["svelte-csf-v5"]},Q={...o.PreSelectedValue,tags:["svelte-csf-v5"]},X={...o.HiddenLabel,tags:["svelte-csf-v5"]},Y={...o.SearchMode,tags:["svelte-csf-v5"]},ee={...o.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{J as Default,X as HiddenLabel,ee as OptionsWithGroupAsSuffix,Q as PreSelectedValue,Y as SearchMode,F as __namedExportsOrder,W as default};

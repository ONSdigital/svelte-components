import{ab as b,e as w,as as x,g as r,ae as d,a as f,ad as y,f as g,at as C,H as s,c as $}from"./iframe-CwT5EAsy.js";import{c as D,w as O,i as A,d as H}from"./create-runtime-stories-BBueoODQ.js";import{S as _}from"./Select-yTW5bjXZ.js";import{o as a}from"./menuOptions-kj4WdJs_.js";import{s as L}from"./style-CZqFqtXy.js";import"./preload-helper-Dp1pzeXC.js";import"./actions-CEIi_AOL.js";import"./attributes-DBnpCygu.js";import"./class-Dvitqb_Y.js";import"./attributes-DayBpKoh.js";import"./Dropdown-qQoNaX9t.js";import"./each-SKCr4DW0.js";import"./Input-C1IsQsUI.js";import"./input-CNIk-18Y.js";const M=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.\r
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
`,o=(p,c=x)=>{var t=P();L(t,"",{},{padding:"0 0 200px"});var i=$(t);_(i,C(c)),f(p,t)},G={title:"Form elements/Select",component:_,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:O(M)},{Story:n}=H();var P=g("<div><!></div>"),T=g("<!> <!> <!> <!> <!>",1);function h(p,c){b(c,!1),A();var t=T(),i=w(t);{let e=s(()=>({id:"default",label:"Select an option",options:a}));n(i,{name:"Default",get args(){return r(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}})}var m=d(i,2);{let e=s(()=>({id:"default",value:a[0],label:"Select an option",options:a}));n(m,{name:"Pre-selected value",get args(){return r(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}})}var u=d(m,2);{let e=s(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:a}));n(u,{name:"Hidden label",get args(){return r(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}})}var v=d(u,2);{let e=s(()=>({id:"search",mode:"search",label:"Type to select",options:a}));n(v,{name:"Search mode",get args(){return r(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}})}var S=d(v,2);{let e=s(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:a}));n(S,{name:"Options with group as suffix",get args(){return r(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">\r
	<Select {...args} />\r
</div>`}}})}f(p,t),y()}h.__docgen={data:[],name:"Select.stories.svelte"};const l=D(h,G),J=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],Q={...l.Default,tags:["svelte-csf-v5"]},X={...l.PreSelectedValue,tags:["svelte-csf-v5"]},Y={...l.HiddenLabel,tags:["svelte-csf-v5"]},Z={...l.SearchMode,tags:["svelte-csf-v5"]},ee={...l.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{Q as Default,Y as HiddenLabel,ee as OptionsWithGroupAsSuffix,X as PreSelectedValue,Z as SearchMode,J as __namedExportsOrder,G as default};

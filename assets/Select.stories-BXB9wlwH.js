import{ab as b,e as w,as as x,g as s,ae as d,a as f,ad as y,f as g,at as C,H as o,c as $}from"./iframe-DS7K2bus.js";import{c as D,w as O,i as A,d as H}from"./create-runtime-stories-D4BT_F5C.js";import{S as _}from"./Select-Ckjq1bOa.js";import{o as a}from"./menuOptions-kj4WdJs_.js";import{s as L}from"./style-DizILqx2.js";import"./preload-helper-Dp1pzeXC.js";import"./actions-DibZMMCO.js";import"./attributes-FIFwlWhJ.js";import"./class-CmqaDgb3.js";import"./attributes-DayBpKoh.js";import"./Dropdown-B22KxuGI.js";import"./each-DokVoPR8.js";import"./Input-D6bTXAp-.js";import"./input--p9m4V7M.js";const M=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

This component is a Svelte wrapper for the GOV.UK [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete).

(Note: This component is not fully compatible with a previous version of the same component based on svelte-select.)

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { AccessibleSelect } from "@onsvisual/svelte-components";

  const values = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];
  

  // Bind the <select> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<AccessibleSelect {options} bind:value on:change="{handleChange}" />
\`\`\`
`,n=(p,c=x)=>{var t=P();L(t,"",{},{padding:"0 0 200px"});var i=$(t);_(i,C(c)),f(p,t)},G={title:"Form elements/Select",component:_,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:O(M)},{Story:r}=H();var P=g("<div><!></div>"),T=g("<!> <!> <!> <!> <!>",1);function h(p,c){b(c,!1),A();var t=T(),i=w(t);{let e=o(()=>({id:"default",label:"Select an option",options:a}));r(i,{name:"Default",get args(){return s(e)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var m=d(i,2);{let e=o(()=>({id:"default",value:a[0],label:"Select an option",options:a}));r(m,{name:"Pre-selected value",get args(){return s(e)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var u=d(m,2);{let e=o(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:a}));r(u,{name:"Hidden label",get args(){return s(e)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var v=d(u,2);{let e=o(()=>({id:"search",mode:"search",label:"Type to select",options:a}));r(v,{name:"Search mode",get args(){return s(e)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var S=d(v,2);{let e=o(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:a}));r(S,{name:"Options with group as suffix",get args(){return s(e)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}f(p,t),y()}h.__docgen={data:[],name:"Select.stories.svelte"};const l=D(h,G),J=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],Q={...l.Default,tags:["svelte-csf-v5"]},X={...l.PreSelectedValue,tags:["svelte-csf-v5"]},Y={...l.HiddenLabel,tags:["svelte-csf-v5"]},Z={...l.SearchMode,tags:["svelte-csf-v5"]},ee={...l.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{Q as Default,Y as HiddenLabel,ee as OptionsWithGroupAsSuffix,X as PreSelectedValue,Z as SearchMode,J as __namedExportsOrder,G as default};

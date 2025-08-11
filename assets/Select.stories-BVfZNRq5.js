import{p as w,j as u,f as y,Z as C,g as o,o as n,k as c,e as v,h as D,_ as O,n as A}from"./iframe--x4qF4Cz.js";import{w as H,c as L,i as M,d as $}from"./create-runtime-stories-BnfwZkSc.js";import{s as G}from"./style-CcY6orqc.js";import{S as f}from"./Select-CUbrfTwf.js";import{o as t}from"./menuOptions-kj4WdJs_.js";import"./attributes-Co-1QMVx.js";import"./svelte-head-DACCs42k.js";import"./actions-S8L40xkB.js";import"./attributes-DUgS1wvt.js";import"./class-Dzh9Da8g.js";const T=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

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
`,a=(l,p=C)=>{var e=K();G(e,"",{},{padding:"0 0 200px"});var s=A(e);f(s,O(p)),v(l,e)},W={title:"Inputs/Select",component:f,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:H(T)},{Story:r}=$();var K=u("<div><!></div>"),j=u("<!> <!> <!> <!>",1);function g(l,p){w(p,!1),M();var e=j(),s=y(e);const h=n(()=>({id:"default",value:t[0],label:"Select an option",options:t}));r(s,{name:"Default",get args(){return o(h)},get template(){return a},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var d=c(s,2);const _=n(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:t}));r(d,{name:"Hidden label",get args(){return o(_)},get template(){return a},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var m=c(d,2);const S=n(()=>({id:"search",mode:"search",label:"Type to select",options:t}));r(m,{name:"Search mode",get args(){return o(S)},get template(){return a},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var b=c(m,2);const x=n(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:t}));r(b,{name:"Options with group as suffix",get args(){return o(x)},get template(){return a},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}}),v(l,e),D()}g.__docgen={data:[],name:"Select.stories.svelte"};const i=L(g,W),z=["Default","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],F={...i.Default,tags:["svelte-csf-v5"]},J={...i.HiddenLabel,tags:["svelte-csf-v5"]},P={...i.SearchMode,tags:["svelte-csf-v5"]},Q={...i.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{F as Default,J as HiddenLabel,Q as OptionsWithGroupAsSuffix,P as SearchMode,z as __namedExportsOrder,W as default};

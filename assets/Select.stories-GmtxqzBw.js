import{p as C,j as v,f as D,Z as O,g as a,o as s,k as i,e as f,h as A,_ as $,n as H}from"./iframe-BLXsI76k.js";import{w as L,c as M,i as G,d as P}from"./create-runtime-stories-CPJgW_6A.js";import{s as T}from"./style-CcY6orqc.js";import{S as g}from"./Select-BU_Kb4nY.js";import{o as t}from"./menuOptions-kj4WdJs_.js";import"./attributes-Co-1QMVx.js";import"./svelte-head-CbQywab2.js";import"./actions-8LIRunwB.js";import"./attributes-BkDU35oC.js";import"./class-Dzh9Da8g.js";const V=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

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
`,n=(p,d=O)=>{var e=K();T(e,"",{},{padding:"0 0 200px"});var l=H(e);g(l,$(d)),f(p,e)},W={title:"Inputs/Select",component:g,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:L(V)},{Story:o}=P();var K=v("<div><!></div>"),j=v("<!> <!> <!> <!> <!>",1);function _(p,d){C(d,!1),G();var e=j(),l=D(e);const h=s(()=>({id:"default",label:"Select an option",options:t}));o(l,{name:"Default",get args(){return a(h)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var c=i(l,2);const S=s(()=>({id:"default",value:t[0],label:"Select an option",options:t}));o(c,{name:"Pre-selected value",get args(){return a(S)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var m=i(c,2);const b=s(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:t}));o(m,{name:"Hidden label",get args(){return a(b)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var u=i(m,2);const x=s(()=>({id:"search",mode:"search",label:"Type to select",options:t}));o(u,{name:"Search mode",get args(){return a(x)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var w=i(u,2);const y=s(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:t}));o(w,{name:"Options with group as suffix",get args(){return a(y)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}}),f(p,e),A()}_.__docgen={data:[],name:"Select.stories.svelte"};const r=M(_,W),F=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],J={...r.Default,tags:["svelte-csf-v5"]},Q={...r.PreSelectedValue,tags:["svelte-csf-v5"]},X={...r.HiddenLabel,tags:["svelte-csf-v5"]},Y={...r.SearchMode,tags:["svelte-csf-v5"]},ee={...r.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{J as Default,X as HiddenLabel,ee as OptionsWithGroupAsSuffix,Q as PreSelectedValue,Y as SearchMode,F as __namedExportsOrder,W as default};

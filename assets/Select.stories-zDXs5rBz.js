import{p as C,j as v,f as D,Z as O,g as a,o as s,k as l,e as f,h as A,_ as $,n as H}from"./iframe-BBQ72IkI.js";import{w as L,c as M,i as G,d as P}from"./create-runtime-stories-DkoCa4Fo.js";import{s as T}from"./style-CcY6orqc.js";import{S as g}from"./Select-Ctd3MNzb.js";import{o as t}from"./menuOptions-kj4WdJs_.js";import"./attributes-Co-1QMVx.js";import"./actions-C65pmnzq.js";import"./attributes-CzQPs7bH.js";import"./class-Dzh9Da8g.js";import"./Dropdown-y55jiF71.js";import"./each-BPiKXt3s.js";import"./Input-DY0ECPmv.js";import"./input-CmoYPWzj.js";const V=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

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
`,n=(p,d=O)=>{var e=K();T(e,"",{},{padding:"0 0 200px"});var i=H(e);g(i,$(d)),f(p,e)},W={title:"Inputs/Select",component:g,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:L(V)},{Story:o}=P();var K=v("<div><!></div>"),j=v("<!> <!> <!> <!> <!>",1);function _(p,d){C(d,!1),G();var e=j(),i=D(e);const h=s(()=>({id:"default",label:"Select an option",options:t}));o(i,{name:"Default",get args(){return a(h)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var c=l(i,2);const S=s(()=>({id:"default",value:t[0],label:"Select an option",options:t}));o(c,{name:"Pre-selected value",get args(){return a(S)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var m=l(c,2);const b=s(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:t}));o(m,{name:"Hidden label",get args(){return a(b)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var u=l(m,2);const x=s(()=>({id:"search",mode:"search",label:"Type to select",options:t}));o(u,{name:"Search mode",get args(){return a(x)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var w=l(u,2);const y=s(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:t}));o(w,{name:"Options with group as suffix",get args(){return a(y)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}}),f(p,e),A()}_.__docgen={data:[],name:"Select.stories.svelte"};const r=M(_,W),X=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],Y={...r.Default,tags:["svelte-csf-v5"]},ee={...r.PreSelectedValue,tags:["svelte-csf-v5"]},te={...r.HiddenLabel,tags:["svelte-csf-v5"]},ae={...r.SearchMode,tags:["svelte-csf-v5"]},se={...r.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{Y as Default,te as HiddenLabel,se as OptionsWithGroupAsSuffix,ee as PreSelectedValue,ae as SearchMode,X as __namedExportsOrder,W as default};

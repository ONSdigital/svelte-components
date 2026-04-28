import{A as C,f as v,m as D,V as A,G as a,h as s,J as i,j as f,I as O,W as $,k as G}from"./iframe-C2Dm_C61.js";import{w as H,c as L,i as M,d as V}from"./create-runtime-stories-BOfmkpNV.js";import{s as P}from"./style-CNURdi_Z.js";import{S as g}from"./Select-Dizfds7B.js";import{o as t}from"./menuOptions-kj4WdJs_.js";import"./attributes-q36Eg1F8.js";import"./actions-B6G0Fe6c.js";import"./attributes-BND14b0Q.js";import"./class-B9SFUanI.js";import"./Dropdown-CbCSwmaK.js";import"./each-B9pWVmQG.js";import"./Input-BnQsDGGI.js";import"./input-BCm1niz2.js";const T=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

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
`,n=(p,d=A)=>{var e=K();P(e,"",{},{padding:"0 0 200px"});var l=G(e);g(l,$(d)),f(p,e)},W={title:"Form elements/Select",component:g,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:H(T)},{Story:o}=V();var K=v("<div><!></div>"),j=v("<!> <!> <!> <!> <!>",1);function _(p,d){C(d,!1),M();var e=j(),l=D(e);const h=s(()=>({id:"default",label:"Select an option",options:t}));o(l,{name:"Default",get args(){return a(h)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var c=i(l,2);const S=s(()=>({id:"default",value:t[0],label:"Select an option",options:t}));o(c,{name:"Pre-selected value",get args(){return a(S)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var m=i(c,2);const b=s(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:t}));o(m,{name:"Hidden label",get args(){return a(b)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var u=i(m,2);const x=s(()=>({id:"search",mode:"search",label:"Type to select",options:t}));o(u,{name:"Search mode",get args(){return a(x)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}});var w=i(u,2);const y=s(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:t}));o(w,{name:"Options with group as suffix",get args(){return a(y)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}}),f(p,e),O()}_.__docgen={data:[],name:"Select.stories.svelte"};const r=L(_,W),Y=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],Z={...r.Default,tags:["svelte-csf-v5"]},ee={...r.PreSelectedValue,tags:["svelte-csf-v5"]},te={...r.HiddenLabel,tags:["svelte-csf-v5"]},ae={...r.SearchMode,tags:["svelte-csf-v5"]},se={...r.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{Z as Default,te as HiddenLabel,se as OptionsWithGroupAsSuffix,ee as PreSelectedValue,ae as SearchMode,Y as __namedExportsOrder,W as default};

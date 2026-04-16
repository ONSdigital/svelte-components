import{A as C,f as v,m as D,W as A,G as a,h as s,J as i,j as f,I as O,X as $,k as G}from"./iframe-G_izM0Zb.js";import{w as H,c as L,i as M,d as P}from"./create-runtime-stories-CoDuciYS.js";import{s as T}from"./style-CNURdi_Z.js";import{S as g}from"./Select-BA4nJwND.js";import{o as t}from"./menuOptions-kj4WdJs_.js";import"./attributes-q36Eg1F8.js";import"./actions-B7acA2k_.js";import"./attributes-PUz8a1ft.js";import"./class-B9SFUanI.js";import"./Dropdown-CiOiEeUw.js";import"./each-BSMSImP4.js";import"./Input-D0YWby6n.js";import"./input-xSn2DGdz.js";const V=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

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
`,n=(p,d=A)=>{var e=K();T(e,"",{},{padding:"0 0 200px"});var l=G(e);g(l,$(d)),f(p,e)},W={title:"Form elements/Select",component:g,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:H(V)},{Story:o}=P();var K=v("<div><!></div>"),j=v("<!> <!> <!> <!> <!>",1);function _(p,d){C(d,!1),M();var e=j(),l=D(e);const h=s(()=>({id:"default",label:"Select an option",options:t}));o(l,{name:"Default",get args(){return a(h)},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
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

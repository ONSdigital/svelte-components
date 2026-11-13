import{ad as b,h as w,n as x,g as n,ah as d,a as g,af as y,f,ax as C,K as s,c as $}from"./iframe-UWIgwT_c.js";import{c as D,w as O,i as A,d as H}from"./create-runtime-stories-WntTm4wH.js";import{S as h}from"./Select-CzRtbZwD.js";import{o as a}from"./menuOptions-kj4WdJs_.js";import{s as L}from"./style-JgESTiB5.js";import"./preload-helper-Dp1pzeXC.js";import"./actions-CTYXIfQW.js";import"./attributes-CxnnJe_I.js";import"./class-BWaliKvu.js";import"./attributes-DayBpKoh.js";import"./Dropdown-CzcCmQIF.js";import"./each-28trRlzV.js";import"./Input-CkviwVpw.js";import"./input-0oGdfHgL.js";const M=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

This component is a Svelte wrapper for the GOV.UK [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete).

(Note: This component is not fully compatible with a previous version of the same component based on svelte-select.)

In Svelte 5, \`onChange\` receives the selected value directly and \`onClear\` receives \`null\`. The dispatched \`change\` and \`clear\` events remain available with those values on \`event.detail\`.

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
`,o=(c,p=x)=>{var t=G();L(t,"",{},{padding:"0 0 200px"});var i=$(t);h(i,C(p)),g(c,t)},T={title:"Form elements/Select",component:h,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:O(M)},{Story:r}=H();var G=f("<div><!></div>"),P=f("<!> <!> <!> <!> <!>",1);function _(c,p){b(p,!1),A();var t=P(),i=w(t);{let e=s(()=>({id:"default",label:"Select an option",options:a}));r(i,{name:"Default",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var m=d(i,2);{let e=s(()=>({id:"default",value:a[0],label:"Select an option",options:a}));r(m,{name:"Pre-selected value",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var v=d(m,2);{let e=s(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:a}));r(v,{name:"Hidden label",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var u=d(v,2);{let e=s(()=>({id:"search",mode:"search",label:"Type to select",options:a}));r(u,{name:"Search mode",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var S=d(u,2);{let e=s(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:a}));r(S,{name:"Options with group as suffix",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}g(c,t),y()}_.__docgen={data:[],name:"Select.stories.svelte"};const l=D(_,T),J=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],Q={...l.Default,tags:["svelte-csf-v5"]},X={...l.PreSelectedValue,tags:["svelte-csf-v5"]},Y={...l.HiddenLabel,tags:["svelte-csf-v5"]},Z={...l.SearchMode,tags:["svelte-csf-v5"]},ee={...l.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{Q as Default,Y as HiddenLabel,ee as OptionsWithGroupAsSuffix,X as PreSelectedValue,Z as SearchMode,J as __namedExportsOrder,T as default};

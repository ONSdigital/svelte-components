import{ad as b,h as w,n as x,g as n,ah as d,a as f,af as C,f as g,ax as y,K as s,c as $}from"./iframe-DgBBsZ9Q.js";import{c as D,w as O,i as A,d as H}from"./create-runtime-stories-DfDjLEdu.js";import{S as h}from"./Select-BiZS7Eg7.js";import{o as a}from"./menuOptions-kj4WdJs_.js";import{s as L}from"./style-C1WXBI3F.js";import"./preload-helper-Dp1pzeXC.js";import"./actions-J3gqVO_v.js";import"./attributes-DrT5rv50.js";import"./class-m9BR9nCB.js";import"./attributes-DayBpKoh.js";import"./Dropdown-C-71Dq5K.js";import"./each-DHxXgraV.js";import"./Input-c9eSU-p2.js";import"./input-ByIb3Tsl.js";const M=`An extended alternative to an HTML \`<select>\` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

This component is a Svelte wrapper for the GOV.UK [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete).

(Note: This component is not fully compatible with a previous version of the same component based on svelte-select.)

In Svelte 5, \`onChange\` receives the selected value directly and \`onClear\` receives \`null\`. The dispatched \`change\` and \`clear\` events remain available with those values on \`event.detail\`.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { AccessibleSelect } from "@onsvisual/svelte-components";

  const options = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];

  // Bind the selected value to a variable (start it as null, not undefined)
  let value = $state(null);

  // Define your own function on change
  const handleChange = (value) => console.log(value);
<\/script>

<AccessibleSelect {options} bind:value onChange={handleChange} />
\`\`\`
`,o=(p,c=x)=>{var t=G();L(t,"",{},{padding:"0 0 200px"});var i=$(t);h(i,y(c)),f(p,t)},T={title:"Form elements/Select",component:h,tags:["autodocs"],argTypes:{mode:{options:["search","dropdown"],control:{type:"select"}}},parameters:O(M)},{Story:l}=H();var G=g("<div><!></div>"),P=g("<!> <!> <!> <!> <!>",1);function _(p,c){b(c,!1),A();var t=P(),i=w(t);{let e=s(()=>({id:"default",label:"Select an option",options:a}));l(i,{name:"Default",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var m=d(i,2);{let e=s(()=>({id:"default",value:a[0],label:"Select an option",options:a}));l(m,{name:"Pre-selected value",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var u=d(m,2);{let e=s(()=>({id:"hidden-label",label:"Select an option",hideLabel:!0,options:a}));l(u,{name:"Hidden label",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var v=d(u,2);{let e=s(()=>({id:"search",mode:"search",label:"Type to select",options:a}));l(v,{name:"Search mode",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}var S=d(v,2);{let e=s(()=>({id:"group-suffix",label:"Select an option",groupKey:"group",options:a}));l(S,{name:"Options with group as suffix",get args(){return n(e)},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div style:padding="0 0 200px">
	<Select {...args} />
</div>`}}})}f(p,t),C()}_.__docgen={data:[],name:"Select.stories.svelte"};const r=D(_,T),J=["Default","PreSelectedValue","HiddenLabel","SearchMode","OptionsWithGroupAsSuffix"],Q={...r.Default,tags:["svelte-csf-v5"]},X={...r.PreSelectedValue,tags:["svelte-csf-v5"]},Y={...r.HiddenLabel,tags:["svelte-csf-v5"]},Z={...r.SearchMode,tags:["svelte-csf-v5"]},ee={...r.OptionsWithGroupAsSuffix,tags:["svelte-csf-v5"]};export{Q as Default,Y as HiddenLabel,ee as OptionsWithGroupAsSuffix,X as PreSelectedValue,Z as SearchMode,J as __namedExportsOrder,T as default};

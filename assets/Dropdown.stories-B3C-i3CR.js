import{ab as f,e as b,ag as w,g as s,ah as m,a as v,ad as D,f as u,ax as C,H as r,c as x}from"./iframe-DeOGyvCS.js";import{c as y,w as $,i as H,d as L}from"./create-runtime-stories-DjaZoLUh.js";import{D as g}from"./Dropdown-DvnGDX5W.js";import{o as l}from"./menuOptions-kj4WdJs_.js";import{s as T}from"./style-CkrwFcYh.js";import"./preload-helper-Dp1pzeXC.js";import"./each-2CpbMCnd.js";import"./attributes-BpptJWB1.js";import"./class-BfAGWMkO.js";import"./attributes-DayBpKoh.js";const S=`A standard \`<select>\` component with Svelte bindings and events.

In Svelte 5, \`onChange\`, \`onInput\`, and \`onBlur\` callbacks receive \`{ value, e }\`. The selected \`value\` may be an option object or a string, and the matching dispatched events remain available with the same object on \`event.detail\`.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Dropdown } from "@onsvisual/svelte-components";

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

<Dropdown {options} bind:value on:change="{handleChange}" />
\`\`\`
`,i=(n,o=w)=>{var e=Q();T(e,"",{},{padding:"12px"});var a=x(e);g(a,C(o)),v(n,e)},P={title:"Form elements/Dropdown",component:g,tags:["autodocs"],argTypes:{},parameters:$(S)},{Story:d}=L();var Q=u("<div><!></div>"),j=u("<!> <!> <!>",1);function h(n,o){f(o,!1),H();var e=j(),a=b(e);{let t=r(()=>({id:"topic",label:"Question topic",options:l}));d(a,{name:"Default",get args(){return s(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}})}var c=m(a,2);{let t=r(()=>({id:"topic",label:"Question topic",hideLabel:!0,options:l}));d(c,{name:"Hidden label",get args(){return s(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}})}var _=m(c,2);{let t=r(()=>({id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:l}));d(_,{name:"Custom placeholder text",get args(){return s(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}})}v(n,e),D()}h.__docgen={data:[],name:"Dropdown.stories.svelte"};const p=y(h,P),z=["Default","HiddenLabel","CustomPlaceholderText"],G={...p.Default,tags:["svelte-csf-v5"]},J={...p.HiddenLabel,tags:["svelte-csf-v5"]},K={...p.CustomPlaceholderText,tags:["svelte-csf-v5"]};export{K as CustomPlaceholderText,G as Default,J as HiddenLabel,z as __namedExportsOrder,P as default};

import{ab as h,e as b,as as D,g as s,ae as m,a as v,ad as w,f as u,at as C,H as r,c as x}from"./iframe-DS7K2bus.js";import{c as $,w as y,i as H,d as L}from"./create-runtime-stories-D4BT_F5C.js";import{D as g}from"./Dropdown-B22KxuGI.js";import{o as d}from"./menuOptions-kj4WdJs_.js";import{s as T}from"./style-DizILqx2.js";import"./preload-helper-Dp1pzeXC.js";import"./each-DokVoPR8.js";import"./attributes-FIFwlWhJ.js";import"./class-CmqaDgb3.js";import"./attributes-DayBpKoh.js";const P=`A standard \`<select>\` component with Svelte bindings and events.

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
`,i=(o,n=D)=>{var e=Q();T(e,"",{},{padding:"12px"});var a=x(e);g(a,C(n)),v(o,e)},S={title:"Form elements/Dropdown",component:g,tags:["autodocs"],argTypes:{},parameters:y(P)},{Story:l}=L();var Q=u("<div><!></div>"),q=u("<!> <!> <!>",1);function _(o,n){h(n,!1),H();var e=q(),a=b(e);{let t=r(()=>({id:"topic",label:"Question topic",options:d}));l(a,{name:"Default",get args(){return s(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}})}var c=m(a,2);{let t=r(()=>({id:"topic",label:"Question topic",hideLabel:!0,options:d}));l(c,{name:"Hidden label",get args(){return s(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}})}var f=m(c,2);{let t=r(()=>({id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:d}));l(f,{name:"Custom placeholder text",get args(){return s(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}})}v(o,e),w()}_.__docgen={data:[],name:"Dropdown.stories.svelte"};const p=$(_,S),G=["Default","HiddenLabel","CustomPlaceholderText"],I={...p.Default,tags:["svelte-csf-v5"]},J={...p.HiddenLabel,tags:["svelte-csf-v5"]},K={...p.CustomPlaceholderText,tags:["svelte-csf-v5"]};export{K as CustomPlaceholderText,I as Default,J as HiddenLabel,G as __namedExportsOrder,S as default};

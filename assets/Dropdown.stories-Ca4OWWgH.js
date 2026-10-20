import{ab as h,e as b,as as D,g as n,ae as m,a as v,ad as w,f as u,at as C,H as s,c as x}from"./iframe-CwT5EAsy.js";import{c as $,w as y,i as H,d as L}from"./create-runtime-stories-BBueoODQ.js";import{D as g}from"./Dropdown-qQoNaX9t.js";import{o as d}from"./menuOptions-kj4WdJs_.js";import{s as T}from"./style-CZqFqtXy.js";import"./preload-helper-Dp1pzeXC.js";import"./each-SKCr4DW0.js";import"./attributes-DBnpCygu.js";import"./class-Dvitqb_Y.js";import"./attributes-DayBpKoh.js";const P=`A standard \`<select>\` component with Svelte bindings and events.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Dropdown } from "@onsvisual/svelte-components";\r
\r
  const values = [\r
    { id: "1", label: "one" },\r
    { id: "2", label: "two" },\r
    { id: "3", label: "three" },\r
  ];\r
\r
  // Bind the <select> value to a variable (reactive)\r
  let value;\r
\r
  // Define your own function on change\r
  const handleChange = (e) => console.log(e);\r
<\/script>\r
\r
<Dropdown {options} bind:value on:change="{handleChange}" />\r
\`\`\`\r
`,i=(a,o=D)=>{var e=Q();T(e,"",{},{padding:"12px"});var r=x(e);g(r,C(o)),v(a,e)},S={title:"Form elements/Dropdown",component:g,tags:["autodocs"],argTypes:{},parameters:y(P)},{Story:l}=L();var Q=u("<div><!></div>"),q=u("<!> <!> <!>",1);function _(a,o){h(o,!1),H();var e=q(),r=b(e);{let t=s(()=>({id:"topic",label:"Question topic",options:d}));l(r,{name:"Default",get args(){return n(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}})}var c=m(r,2);{let t=s(()=>({id:"topic",label:"Question topic",hideLabel:!0,options:d}));l(c,{name:"Hidden label",get args(){return n(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}})}var f=m(c,2);{let t=s(()=>({id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:d}));l(f,{name:"Custom placeholder text",get args(){return n(t)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}})}v(a,e),w()}_.__docgen={data:[],name:"Dropdown.stories.svelte"};const p=$(_,S),G=["Default","HiddenLabel","CustomPlaceholderText"],I={...p.Default,tags:["svelte-csf-v5"]},J={...p.HiddenLabel,tags:["svelte-csf-v5"]},K={...p.CustomPlaceholderText,tags:["svelte-csf-v5"]};export{K as CustomPlaceholderText,I as Default,J as HiddenLabel,G as __namedExportsOrder,S as default};

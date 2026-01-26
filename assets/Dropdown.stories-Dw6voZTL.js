import{p as b,j as m,f as w,Z as x,g as n,o as a,k as c,e as v,h as C,_ as y,n as L}from"./iframe-BXL9GsHe.js";import{w as H,c as T,i as $,d as P}from"./create-runtime-stories-BndbA_YL.js";import{s as S}from"./style-CcY6orqc.js";import{D as u}from"./Dropdown-sPEH4HNZ.js";import{o as s}from"./menuOptions-kj4WdJs_.js";import"./attributes-Co-1QMVx.js";import"./each-C1-l3CJ_.js";import"./attributes-keP7PBQf.js";import"./class-Dzh9Da8g.js";const Q=`A standard \`<select>\` component with Svelte bindings and events.\r
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
`,i=(o,r=x)=>{var e=k();S(e,"",{},{padding:"12px"});var t=L(e);u(t,y(r)),v(o,e)},j={title:"Inputs/Dropdown",component:u,tags:["autodocs"],argTypes:{},parameters:H(Q)},{Story:d}=P();var k=m("<div><!></div>"),q=m("<!> <!> <!>",1);function _(o,r){b(r,!1),$();var e=q(),t=w(e);const g=a(()=>({id:"topic",label:"Question topic",options:s}));d(t,{name:"Default",get args(){return n(g)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}});var p=c(t,2);const f=a(()=>({id:"topic",label:"Question topic",hideLabel:!0,options:s}));d(p,{name:"Hidden label",get args(){return n(f)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}});var h=c(p,2);const D=a(()=>({id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:s}));d(h,{name:"Custom placeholder text",get args(){return n(D)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Dropdown {...args} />\r
</div>`}}}),v(o,e),C()}_.__docgen={data:[],name:"Dropdown.stories.svelte"};const l=T(_,j),F=["Default","HiddenLabel","CustomPlaceholderText"],G={...l.Default,tags:["svelte-csf-v5"]},J={...l.HiddenLabel,tags:["svelte-csf-v5"]},K={...l.CustomPlaceholderText,tags:["svelte-csf-v5"]};export{K as CustomPlaceholderText,G as Default,J as HiddenLabel,F as __namedExportsOrder,j as default};

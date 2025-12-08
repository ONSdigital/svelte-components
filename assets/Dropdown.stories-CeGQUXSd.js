import{p as b,j as m,f as w,Z as x,g as a,o as s,k as c,e as v,h as C,_ as y,n as L}from"./iframe-CwnOGufI.js";import{w as H,c as T,i as $,d as P}from"./create-runtime-stories-CLr9y0ZE.js";import{s as S}from"./style-CcY6orqc.js";import{D as u}from"./Dropdown-BfRflVu3.js";import{o as r}from"./menuOptions-kj4WdJs_.js";import"./attributes-Co-1QMVx.js";import"./each-CudjTySy.js";import"./attributes-Bmkkxx_O.js";import"./class-Dzh9Da8g.js";const Q=`A standard \`<select>\` component with Svelte bindings and events.

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
`,i=(o,n=x)=>{var e=k();S(e,"",{},{padding:"12px"});var t=L(e);u(t,y(n)),v(o,e)},j={title:"Inputs/Dropdown",component:u,tags:["autodocs"],argTypes:{},parameters:H(Q)},{Story:d}=P();var k=m("<div><!></div>"),q=m("<!> <!> <!>",1);function _(o,n){b(n,!1),$();var e=q(),t=w(e);const g=s(()=>({id:"topic",label:"Question topic",options:r}));d(t,{name:"Default",get args(){return a(g)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}});var p=c(t,2);const f=s(()=>({id:"topic",label:"Question topic",hideLabel:!0,options:r}));d(p,{name:"Hidden label",get args(){return a(f)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}});var h=c(p,2);const D=s(()=>({id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:r}));d(h,{name:"Custom placeholder text",get args(){return a(D)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}}),v(o,e),C()}_.__docgen={data:[],name:"Dropdown.stories.svelte"};const l=T(_,j),F=["Default","HiddenLabel","CustomPlaceholderText"],G={...l.Default,tags:["svelte-csf-v5"]},J={...l.HiddenLabel,tags:["svelte-csf-v5"]},K={...l.CustomPlaceholderText,tags:["svelte-csf-v5"]};export{K as CustomPlaceholderText,G as Default,J as HiddenLabel,F as __namedExportsOrder,j as default};

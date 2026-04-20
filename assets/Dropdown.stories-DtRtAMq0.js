import{A as b,f as m,m as w,W as x,G as a,h as s,J as c,j as v,I as C,X as y,k as L}from"./iframe-B941gBln.js";import{w as H,c as T,i as $,d as P}from"./create-runtime-stories-CB3f-Q7v.js";import{s as S}from"./style-CNURdi_Z.js";import{D as u}from"./Dropdown-CBtWMpnd.js";import{o as r}from"./menuOptions-kj4WdJs_.js";import"./attributes-q36Eg1F8.js";import"./each-DbSs5FBq.js";import"./attributes-DPG55JBU.js";import"./class-B9SFUanI.js";const Q=`A standard \`<select>\` component with Svelte bindings and events.

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
`,i=(o,n=x)=>{var e=j();S(e,"",{},{padding:"12px"});var t=L(e);u(t,y(n)),v(o,e)},A={title:"Form elements/Dropdown",component:u,tags:["autodocs"],argTypes:{},parameters:H(Q)},{Story:d}=P();var j=m("<div><!></div>"),k=m("<!> <!> <!>",1);function _(o,n){b(n,!1),$();var e=k(),t=w(e);const g=s(()=>({id:"topic",label:"Question topic",options:r}));d(t,{name:"Default",get args(){return a(g)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}});var p=c(t,2);const f=s(()=>({id:"topic",label:"Question topic",hideLabel:!0,options:r}));d(p,{name:"Hidden label",get args(){return a(f)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}});var h=c(p,2);const D=s(()=>({id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:r}));d(h,{name:"Custom placeholder text",get args(){return a(D)},get template(){return i},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Dropdown {...args} />
</div>`}}}),v(o,e),C()}_.__docgen={data:[],name:"Dropdown.stories.svelte"};const l=T(_,A),R=["Default","HiddenLabel","CustomPlaceholderText"],W={...l.Default,tags:["svelte-csf-v5"]},X={...l.HiddenLabel,tags:["svelte-csf-v5"]},z={...l.CustomPlaceholderText,tags:["svelte-csf-v5"]};export{z as CustomPlaceholderText,W as Default,X as HiddenLabel,R as __namedExportsOrder,A as default};

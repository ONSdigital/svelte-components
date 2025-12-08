import{p as g,j as m,f as h,Z as f,k as s,e as u,h as x,_ as I,n as b}from"./iframe-BogSXddm.js";import{w as W,c as C,i as w,d as D}from"./create-runtime-stories-BRWdB4wt.js";import{s as E}from"./style-CcY6orqc.js";import{I as c}from"./Input-wzk9l_pe.js";import"./attributes-Co-1QMVx.js";import"./attributes-BwU1yLAS.js";import"./class-Dzh9Da8g.js";import"./input-BU-dcXpO.js";const y=`A standard \`<input>\` element with Svelte bindings and events.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Input } from "@onsvisual/svelte-components";\r
\r
  // Bind the <input> value to a variable (reactive)\r
  let value;\r
\r
  // Define your own function on change\r
  const handleChange = (e) => console.log(e);\r
<\/script>\r
\r
<Input bind:value on:change="{handleChange}" />\r
\`\`\`\r
`,t=(i,o=f)=>{var e=$();E(e,"",{},{padding:"12px"});var a=b(e);c(a,I(o)),u(i,e)},L={title:"Inputs/Input",component:c,tags:["autodocs"],argTypes:{},parameters:W(y)},{Story:r}=D();var $=m("<div><!></div>"),N=m("<!> <!> <!> <!> <!>",1);function v(i,o){g(o,!1),w();var e=N(),a=h(e);r(a,{name:"Default",args:{id:"text",label:"Enter some text"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var p=s(a,2);r(p,{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var d=s(p,2);r(d,{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var l=s(d,2);r(l,{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var _=s(l,2);r(_,{name:"Input error",args:{id:"text",label:"Enter some text",error:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}}),u(i,e),x()}v.__docgen={data:[],name:"Input.stories.svelte"};const n=C(v,L),M=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],O={...n.Default,tags:["svelte-csf-v5"]},R={...n.WithHiddenLabel,tags:["svelte-csf-v5"]},Z={...n.WithDescription,tags:["svelte-csf-v5"]},q={...n.NumericWithPrefix,tags:["svelte-csf-v5"]},z={...n.InputError,tags:["svelte-csf-v5"]};export{O as Default,z as InputError,q as NumericWithPrefix,Z as WithDescription,R as WithHiddenLabel,M as __namedExportsOrder,L as default};

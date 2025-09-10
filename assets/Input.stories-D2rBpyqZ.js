import{p as g,j as m,f as h,Z as f,k as s,e as u,h as x,_ as I,n as b}from"./iframe-C7mAxSNS.js";import{w as W,c as C,i as w,d as D}from"./create-runtime-stories-DYxOwgic.js";import{s as E}from"./style-CcY6orqc.js";import{I as c}from"./Input-DU_DTBIt.js";import"./attributes-Co-1QMVx.js";import"./attributes-C0fURmbW.js";import"./class-Dzh9Da8g.js";import"./input-CgZ_MwkC.js";const y=`A standard \`<input>\` element with Svelte bindings and events.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<Input bind:value on:change="{handleChange}" />
\`\`\`
`,t=(i,o=f)=>{var e=$();E(e,"",{},{padding:"12px"});var a=b(e);c(a,I(o)),u(i,e)},L={title:"Inputs/Input",component:c,tags:["autodocs"],argTypes:{},parameters:W(y)},{Story:n}=D();var $=m("<div><!></div>"),N=m("<!> <!> <!> <!> <!>",1);function v(i,o){g(o,!1),w();var e=N(),a=h(e);n(a,{name:"Default",args:{id:"text",label:"Enter some text"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var p=s(a,2);n(p,{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var d=s(p,2);n(d,{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var l=s(d,2);n(l,{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var _=s(l,2);n(_,{name:"Input error",args:{id:"text",label:"Enter some text",error:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}}),u(i,e),x()}v.__docgen={data:[],name:"Input.stories.svelte"};const r=C(v,L),M=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],O={...r.Default,tags:["svelte-csf-v5"]},R={...r.WithHiddenLabel,tags:["svelte-csf-v5"]},Z={...r.WithDescription,tags:["svelte-csf-v5"]},q={...r.NumericWithPrefix,tags:["svelte-csf-v5"]},z={...r.InputError,tags:["svelte-csf-v5"]};export{O as Default,z as InputError,q as NumericWithPrefix,Z as WithDescription,R as WithHiddenLabel,M as __namedExportsOrder,L as default};

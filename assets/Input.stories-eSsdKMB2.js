import{ab as _,e as h,as as f,ae as s,a as m,ad as x,f as c,at as b,c as I}from"./iframe-CETjfACR.js";import{c as W,w as C,i as w,d as D}from"./create-runtime-stories-BfDsA5km.js";import{I as u}from"./Input-B0q6f93Y.js";import{s as E}from"./style-DFJNdFR1.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-qW-0xHQB.js";import"./class-BM65IkHf.js";import"./attributes-DayBpKoh.js";import"./input-CJk_Zz-r.js";const y=`A standard \`<input>\` element with Svelte bindings and events.

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
`,t=(i,o=f)=>{var e=$();E(e,"",{},{padding:"12px"});var r=I(e);u(r,b(o)),m(i,e)},L={title:"Form elements/Input",component:u,tags:["autodocs"],argTypes:{},parameters:C(y)},{Story:n}=D();var $=c("<div><!></div>"),N=c("<!> <!> <!> <!> <!>",1);function v(i,o){_(o,!1),w();var e=N(),r=h(e);n(r,{name:"Default",args:{id:"text",label:"Enter some text"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var p=s(r,2);n(p,{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var d=s(p,2);n(d,{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var l=s(d,2);n(l,{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var g=s(l,2);n(g,{name:"Input error",args:{id:"text",label:"Enter some text",error:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}}),m(i,e),x()}v.__docgen={data:[],name:"Input.stories.svelte"};const a=W(v,L),R=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],j={...a.Default,tags:["svelte-csf-v5"]},k={...a.WithHiddenLabel,tags:["svelte-csf-v5"]},q={...a.WithDescription,tags:["svelte-csf-v5"]},z={...a.NumericWithPrefix,tags:["svelte-csf-v5"]},G={...a.InputError,tags:["svelte-csf-v5"]};export{j as Default,G as InputError,z as NumericWithPrefix,q as WithDescription,k as WithHiddenLabel,R as __namedExportsOrder,L as default};

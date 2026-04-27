import{A as _,f as m,m as h,W as f,J as s,j as u,I as x,X as I,k as b}from"./iframe-DU2bJwNo.js";import{w as W,c as C,i as w,d as D}from"./create-runtime-stories-BaiRa-aW.js";import{s as E}from"./style-CNURdi_Z.js";import{I as c}from"./Input-3Hz7GCFB.js";import"./attributes-q36Eg1F8.js";import"./attributes-D6OZFcxA.js";import"./class-B9SFUanI.js";import"./input-B99lCzr-.js";const y=`A standard \`<input>\` element with Svelte bindings and events.

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
`,t=(i,o=f)=>{var e=$();E(e,"",{},{padding:"12px"});var a=b(e);c(a,I(o)),u(i,e)},L={title:"Form elements/Input",component:c,tags:["autodocs"],argTypes:{},parameters:W(y)},{Story:n}=D();var $=m("<div><!></div>"),N=m("<!> <!> <!> <!> <!>",1);function v(i,o){_(o,!1),w();var e=N(),a=h(e);n(a,{name:"Default",args:{id:"text",label:"Enter some text"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var p=s(a,2);n(p,{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var d=s(p,2);n(d,{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var l=s(d,2);n(l,{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var g=s(l,2);n(g,{name:"Input error",args:{id:"text",label:"Enter some text",error:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}}),u(i,e),x()}v.__docgen={data:[],name:"Input.stories.svelte"};const r=C(v,L),F=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],J={...r.Default,tags:["svelte-csf-v5"]},M={...r.WithHiddenLabel,tags:["svelte-csf-v5"]},O={...r.WithDescription,tags:["svelte-csf-v5"]},R={...r.NumericWithPrefix,tags:["svelte-csf-v5"]},X={...r.InputError,tags:["svelte-csf-v5"]};export{J as Default,X as InputError,R as NumericWithPrefix,O as WithDescription,M as WithHiddenLabel,F as __namedExportsOrder,L as default};

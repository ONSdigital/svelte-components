import{A as c,f as d,m as p,V as f,J as g,j as r,I as _,W as h,O as q}from"./iframe-C2Dm_C61.js";import{w as v,c as b,i as B,d as k}from"./create-runtime-stories-BOfmkpNV.js";import{B as u}from"./Blockquote-Dx87rL0U.js";import"./slot-BP_Qo1ZM.js";const $=`A component to highlight a pull quote on a page, with optional attribution.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Blockquote } from "@onsvisual/svelte-components";
<\/script>

<Blockquote attribution="A. Person">Some quoted text.</Blockquote>
\`\`\`
`,i=(o,e=f)=>{u(o,h(e,{children:(t,a)=>{var s=q(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.`);r(t,s)},$$slots:{default:!0}}))},A={title:"Information and media/Blockquote",component:u,tags:["autodocs"],argTypes:{},parameters:v($)},{Story:n}=k();var D=d("<!> <!>",1);function l(o,e){c(e,!1),B();var t=D(),a=p(t);n(a,{name:"Default",args:{attribution:"A N Other"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua.
</Blockquote>`}}});var s=g(a,2);n(s,{name:"Quote without attribution",args:{},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua.
</Blockquote>`}}}),r(o,t),_()}l.__docgen={data:[],name:"Blockquote.stories.svelte"};const m=b(l,A),W=["Default","QuoteWithoutAttribution"],L={...m.Default,tags:["svelte-csf-v5"]},O={...m.QuoteWithoutAttribution,tags:["svelte-csf-v5"]};export{L as Default,O as QuoteWithoutAttribution,W as __namedExportsOrder,A as default};

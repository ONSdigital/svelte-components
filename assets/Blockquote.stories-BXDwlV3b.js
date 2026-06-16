import{ab as c,e as d,as as p,ae as f,a as r,ad as g,f as _,at as h,b as q}from"./iframe-BR4MEgmA.js";import{c as b,w as v,i as B,d as k}from"./create-runtime-stories-BCU5wvzh.js";import{B as u}from"./Blockquote-EwLo0aQI.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";const $=`A component to highlight a pull quote on a page, with optional attribution.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Blockquote } from "@onsvisual/svelte-components";
<\/script>

<Blockquote attribution="A. Person">Some quoted text.</Blockquote>
\`\`\`
`,i=(o,e=p)=>{u(o,h(e,{children:(t,a)=>{var s=q(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.`);r(t,s)},$$slots:{default:!0}}))},A={title:"Information and media/Blockquote",component:u,tags:["autodocs"],argTypes:{},parameters:v($)},{Story:n}=k();var D=_("<!> <!>",1);function l(o,e){c(e,!1),B();var t=D(),a=d(t);n(a,{name:"Default",args:{attribution:"A N Other"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua.
</Blockquote>`}}});var s=f(a,2);n(s,{name:"Quote without attribution",args:{},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua.
</Blockquote>`}}}),r(o,t),g()}l.__docgen={data:[],name:"Blockquote.stories.svelte"};const m=b(l,A),L=["Default","QuoteWithoutAttribution"],S={...m.Default,tags:["svelte-csf-v5"]},y={...m.QuoteWithoutAttribution,tags:["svelte-csf-v5"]};export{S as Default,y as QuoteWithoutAttribution,L as __namedExportsOrder,A as default};

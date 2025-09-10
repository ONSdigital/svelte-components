import{p as m,j as p,f as d,Z as g,k as _,e as n,h as f,_ as h,V as q}from"./iframe-C7mAxSNS.js";import{w as v,c as b,i as k,d as B}from"./create-runtime-stories-DYxOwgic.js";import{B as u}from"./Blockquote-C6K9maI4.js";import"./slot-BP_Qo1ZM.js";const $=`A component to highlight a pull quote on a page, with optional attribution.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Blockquote } from "@onsvisual/svelte-components";
<\/script>

<Blockquote attribution="A. Person">Some quoted text.</Blockquote>
\`\`\`
`,i=(o,e=g)=>{u(o,h(e,{children:(t,a)=>{var s=q(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.`);n(t,s)},$$slots:{default:!0}}))},D={title:"Decorators/Blockquote",component:u,tags:["autodocs"],argTypes:{},parameters:v($)},{Story:r}=B();var A=p("<!> <!>",1);function l(o,e){m(e,!1),k();var t=A(),a=d(t);r(a,{name:"Default",args:{attribution:"A N Other"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua.
</Blockquote>`}}});var s=_(a,2);r(s,{name:"Quote without attribution",args:{},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua.
</Blockquote>`}}}),n(o,t),f()}l.__docgen={data:[],name:"Blockquote.stories.svelte"};const c=b(l,D),W=["Default","QuoteWithoutAttribution"],L={...c.Default,tags:["svelte-csf-v5"]},S={...c.QuoteWithoutAttribution,tags:["svelte-csf-v5"]};export{L as Default,S as QuoteWithoutAttribution,W as __namedExportsOrder,D as default};

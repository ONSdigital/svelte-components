import{p as m,j as p,f as d,Z as g,k as _,e as n,h as f,_ as h,V as q}from"./iframe-yAvQPCXH.js";import{w as v,c as b,i as k,d as B}from"./create-runtime-stories-C-ZHg9b5.js";import{B as u}from"./Blockquote-CYMAdif_.js";import"./slot-BP_Qo1ZM.js";const $=`A component to highlight a pull quote on a page, with optional attribution.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Blockquote } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Blockquote attribution="A. Person">Some quoted text.</Blockquote>\r
\`\`\`\r
`,s=(o,e=g)=>{u(o,h(e,{children:(t,r)=>{var a=q(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
		labore et dolore magna aliqua.`);n(t,a)},$$slots:{default:!0}}))},D={title:"Decorators/Blockquote",component:u,tags:["autodocs"],argTypes:{},parameters:v($)},{Story:i}=B();var A=p("<!> <!>",1);function l(o,e){m(e,!1),k();var t=A(),r=d(t);i(r,{name:"Default",args:{attribution:"A N Other"},get template(){return s},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>\r
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
	labore et dolore magna aliqua.\r
</Blockquote>`}}});var a=_(r,2);i(a,{name:"Quote without attribution",args:{},get template(){return s},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>\r
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
	labore et dolore magna aliqua.\r
</Blockquote>`}}}),n(o,t),f()}l.__docgen={data:[],name:"Blockquote.stories.svelte"};const c=b(l,D),W=["Default","QuoteWithoutAttribution"],L={...c.Default,tags:["svelte-csf-v5"]},S={...c.QuoteWithoutAttribution,tags:["svelte-csf-v5"]};export{L as Default,S as QuoteWithoutAttribution,W as __namedExportsOrder,D as default};

import{ab as c,e as d,ag as p,ah as g,a as n,ad as f,f as _,ax as h,b as q}from"./iframe-DwMLuGxz.js";import{c as b,w as v,i as B,d as k}from"./create-runtime-stories-CVh0mbf1.js";import{B as u}from"./Blockquote-B738w-J0.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";const $=`A component to highlight a pull quote on a page, with optional attribution.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Blockquote } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Blockquote attribution="A. Person">Some quoted text.</Blockquote>\r
\`\`\`\r
`,s=(o,e=p)=>{u(o,h(e,{children:(t,r)=>{var a=q(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
		labore et dolore magna aliqua.`);n(t,a)},$$slots:{default:!0}}))},A={title:"Information and media/Blockquote",component:u,tags:["autodocs"],argTypes:{},parameters:v($)},{Story:i}=k();var D=_("<!> <!>",1);function l(o,e){c(e,!1),B();var t=D(),r=d(t);i(r,{name:"Default",args:{attribution:"A N Other"},get template(){return s},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>\r
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
	labore et dolore magna aliqua.\r
</Blockquote>`}}});var a=g(r,2);i(a,{name:"Quote without attribution",args:{},get template(){return s},parameters:{__svelteCsf:{rawCode:`<Blockquote {...args}>\r
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
	labore et dolore magna aliqua.\r
</Blockquote>`}}}),n(o,t),f()}l.__docgen={data:[],name:"Blockquote.stories.svelte"};const m=b(l,A),L=["Default","QuoteWithoutAttribution"],S={...m.Default,tags:["svelte-csf-v5"]},y={...m.QuoteWithoutAttribution,tags:["svelte-csf-v5"]};export{S as Default,y as QuoteWithoutAttribution,L as __namedExportsOrder,A as default};

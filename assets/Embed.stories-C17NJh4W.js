import{p,Z as m,h as d,_ as c,j as l,n as f,e as g}from"./iframe-fMuWBKru.js";import{w as h,c as _,i as u,d as v}from"./create-runtime-stories-D8bYQZX6.js";import{s as n}from"./style-CcY6orqc.js";import{E as s}from"./Embed-Crle3hVp.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A container for content designed to appear within an \`<iframe>\`. The component does two things:\r
\r
1. Overrides padding, so that content can fill the full width of its iframe.\r
2. Initialises a Pym.js child for the iframe, so that it can communicate its height with its parent page.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Embed } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Embed>\r
  {child_components}\r
</Embed>\r
\`\`\`\r
`,E=(t,e=m)=>{s(t,c(e,{children:(a,x)=>{var r=D();n(r,"",{},{padding:"24px 0",background:"var(--ons-color-grey-10)"});var i=f(r);n(i,"",{},{margin:"0"}),g(a,r)},$$slots:{default:!0}}))},y={title:"Wrappers/Embed",component:s,tags:["autodocs"],argTypes:{},parameters:h(b)},{Story:w}=v();var D=l("<div><p>Embedded content.</p></div>");function o(t,e){p(e,!1),u(),w(t,{name:"Default",args:{},get template(){return E},parameters:{__svelteCsf:{rawCode:`<Embed {...args}>\r
	<div style:padding="24px 0" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Embedded content.</p>\r
	</div>\r
</Embed>`}}}),d()}o.__docgen={data:[],name:"Embed.stories.svelte"};const $=_(o,y),A=["Default"],I={...$.Default,tags:["svelte-csf-v5"]};export{I as Default,A as __namedExportsOrder,y as default};

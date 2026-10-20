import{ab as m,as as p,ad as d,at as c,a as l,c as f,f as g}from"./iframe-BieOkgaL.js";import{c as h,w as u,i as v,d as _}from"./create-runtime-stories-CYy4gM-U.js";import{E as a}from"./Embed-C0wn36Nn.js";import{s}from"./style-BeKZa6WD.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./attributes-DayBpKoh.js";const b=`A container for content designed to appear within an \`<iframe>\`. The component does two things:\r
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
`,E=(t,e=p)=>{a(t,c(e,{children:(o,x)=>{var r=D();s(r,"",{},{padding:"24px 0",background:"var(--ons-color-grey-10)"});var i=f(r);s(i,"",{},{margin:"0"}),l(o,r)},$$slots:{default:!0}}))},y={title:"Wrappers/Embed",component:a,tags:["autodocs"],argTypes:{},parameters:u(b)},{Story:w}=_();var D=g("<div><p>Embedded content.</p></div>");function n(t,e){m(e,!1),v(),w(t,{name:"Default",args:{},get template(){return E},parameters:{__svelteCsf:{rawCode:`<Embed {...args}>\r
	<div style:padding="24px 0" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Embedded content.</p>\r
	</div>\r
</Embed>`}}}),d()}n.__docgen={data:[],name:"Embed.stories.svelte"};const $=h(n,y),I=["Default"],M={...$.Default,tags:["svelte-csf-v5"]};export{M as Default,I as __namedExportsOrder,y as default};

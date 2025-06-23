import{p,Z as m,h as d,_ as c,j as l,n as f,e as g}from"./iframe-BH0L4b-J.js";import{w as h,c as _,i as u,d as v}from"./create-runtime-stories-DM1Ts2uS.js";import{s}from"./style-CcY6orqc.js";import{E as o}from"./Embed-CX3syt2E.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A container for content designed to appear within an \`<iframe>\`. The component does two things:

1. Overrides padding, so that content can fill the full width of its iframe.
2. Initialises a Pym.js child for the iframe, so that it can communicate its height with its parent page.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Embed } from "@onsvisual/svelte-components";
<\/script>

<Embed>
  {child_components}
</Embed>
\`\`\`
`,E=(t,e=m)=>{o(t,c(e,{children:(r,x)=>{var n=D();s(n,"",{},{padding:"24px 0",background:"var(--ons-color-grey-10)"});var i=f(n);s(i,"",{},{margin:"0"}),g(r,n)},$$slots:{default:!0}}))},y={title:"Wrappers/Embed",component:o,tags:["autodocs"],argTypes:{},parameters:h(b)},{Story:w}=v();var D=l("<div><p>Embedded content.</p></div>");function a(t,e){p(e,!1),u(),w(t,{name:"Default",args:{},get template(){return E},parameters:{__svelteCsf:{rawCode:`<Embed {...args}>
	<div style:padding="24px 0" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Embedded content.</p>
	</div>
</Embed>`}}}),d()}a.__docgen={data:[],name:"Embed.stories.svelte"};const $=_(a,y),A=["Default"],I={...$.Default,tags:["svelte-csf-v5"]};export{I as Default,A as __namedExportsOrder,y as default};

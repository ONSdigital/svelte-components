import{A as m,W as p,I as d,X as c,f as l,k as f,j as g}from"./iframe-CBlEiR9q.js";import{w as h,c as u,i as _,d as v}from"./create-runtime-stories-Vu0KM0dN.js";import{s}from"./style-CNURdi_Z.js";import{E as o}from"./Embed-BwyND5Oo.js";import"./attributes-q36Eg1F8.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A container for content designed to appear within an \`<iframe>\`. The component does two things:

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
`,E=(t,e=p)=>{o(t,c(e,{children:(r,x)=>{var n=D();s(n,"",{},{padding:"24px 0",background:"var(--ons-color-grey-10)"});var i=f(n);s(i,"",{},{margin:"0"}),g(r,n)},$$slots:{default:!0}}))},y={title:"Wrappers/Embed",component:o,tags:["autodocs"],argTypes:{},parameters:h(b)},{Story:w}=v();var D=l("<div><p>Embedded content.</p></div>");function a(t,e){m(e,!1),_(),w(t,{name:"Default",args:{},get template(){return E},parameters:{__svelteCsf:{rawCode:`<Embed {...args}>
	<div style:padding="24px 0" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Embedded content.</p>
	</div>
</Embed>`}}}),d()}a.__docgen={data:[],name:"Embed.stories.svelte"};const $=u(a,y),S=["Default"],T={...$.Default,tags:["svelte-csf-v5"]};export{T as Default,S as __namedExportsOrder,y as default};

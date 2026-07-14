import{ab as m,as as p,ad as d,at as c,a as l,c as f,f as g}from"./iframe-Cm8Z88bU.js";import{c as h,w as u,i as v,d as _}from"./create-runtime-stories-B6v954qL.js";import{E as n}from"./Embed-BH430l5E.js";import{s as a}from"./style-DfLPGW0J.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./attributes-DayBpKoh.js";const b=`A container for content designed to appear within an \`<iframe>\`. The component does two things:

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
`,E=(t,e=p)=>{n(t,c(e,{children:(r,x)=>{var s=D();a(s,"",{},{padding:"24px 0",background:"var(--ons-color-grey-10)"});var i=f(s);a(i,"",{},{margin:"0"}),l(r,s)},$$slots:{default:!0}}))},y={title:"Wrappers/Embed",component:n,tags:["autodocs"],argTypes:{},parameters:u(b)},{Story:w}=_();var D=g("<div><p>Embedded content.</p></div>");function o(t,e){m(e,!1),v(),w(t,{name:"Default",args:{},get template(){return E},parameters:{__svelteCsf:{rawCode:`<Embed {...args}>
	<div style:padding="24px 0" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Embedded content.</p>
	</div>
</Embed>`}}}),d()}o.__docgen={data:[],name:"Embed.stories.svelte"};const $=h(o,y),I=["Default"],M={...$.Default,tags:["svelte-csf-v5"]};export{M as Default,I as __namedExportsOrder,y as default};

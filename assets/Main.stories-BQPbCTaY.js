import{ab as p,ag as l,ad as m,ax as c,a as d,c as g,f}from"./iframe-DwMLuGxz.js";import{c as h,w as u,i as v,d as _}from"./create-runtime-stories-CVh0mbf1.js";import{M as a}from"./Main-BByvk7Sn.js";import{s as n}from"./style-BhKhrtHX.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-2IKc6IRp.js";import"./attributes-DayBpKoh.js";const y=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).\r
\r
This component is useful for screen readers to identify the primary content of the page. The standard header component also contains a visually hidden "Skip to content" link that will bring users to it.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Main } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<!-- Header goes here -->\r
<Main>\r
  {child_components}\r
</Main>\r
<!-- Footer goes here -->\r
\`\`\`\r
`,M=(e,t=l)=>{a(e,c(t,{children:(s,b)=>{var r=$();n(r,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var i=g(r);n(i,"",{},{margin:"0"}),d(s,r)},$$slots:{default:!0}}))},x={title:"Wrappers/Main",component:a,tags:["autodocs"],argTypes:{},parameters:u(y)},{Story:D}=_();var $=f("<div><p>Child components go here.</p></div>");function o(e,t){p(t,!1),v(),D(e,{name:"Default",args:{},get template(){return M},parameters:{__svelteCsf:{rawCode:`<Main {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Child components go here.</p>\r
	</div>\r
</Main>`}}}),m()}o.__docgen={data:[],name:"Main.stories.svelte"};const w=h(o,x),P=["Default"],R={...w.Default,tags:["svelte-csf-v5"]};export{R as Default,P as __namedExportsOrder,x as default};

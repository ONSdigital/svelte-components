import{p,Z as l,h as m,_ as c,j as d,n as g,e as h}from"./iframe-DI485cCl.js";import{w as f,c as u,i as _,d as v}from"./create-runtime-stories-7vGa3Oc7.js";import{s as n}from"./style-CcY6orqc.js";import{M as o}from"./Main-Dz-dPq9K.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-D3Gd59q9.js";const y=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).\r
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
`,M=(e,t=l)=>{o(e,c(t,{children:(s,C)=>{var r=w();n(r,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var i=g(r);n(i,"",{},{margin:"0"}),h(s,r)},$$slots:{default:!0}}))},D={title:"Wrappers/Main",component:o,tags:["autodocs"],argTypes:{},parameters:f(y)},{Story:$}=v();var w=d("<div><p>Child components go here.</p></div>");function a(e,t){p(t,!1),_(),$(e,{name:"Default",args:{},get template(){return M},parameters:{__svelteCsf:{rawCode:`<Main {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Child components go here.</p>\r
	</div>\r
</Main>`}}}),m()}a.__docgen={data:[],name:"Main.stories.svelte"};const x=u(a,D),H=["Default"],O={...x.Default,tags:["svelte-csf-v5"]};export{O as Default,H as __namedExportsOrder,D as default};

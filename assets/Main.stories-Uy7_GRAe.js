import{p,Z as l,h as m,_ as c,j as d,n as g,e as h}from"./iframe-1HNJ2TKf.js";import{w as f,c as u,i as _,d as v}from"./create-runtime-stories-indmQy6s.js";import{s as o}from"./style-CcY6orqc.js";import{M as a}from"./Main-CNu1Hncd.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-Dn0uQZds.js";const y=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

This component is useful for screen readers to identify the primary content of the page. The standard header component also contains a visually hidden "Skip to content" link that will bring users to it.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Main } from "@onsvisual/svelte-components";
<\/script>

<!-- Header goes here -->
<Main>
  {child_components}
</Main>
<!-- Footer goes here -->
\`\`\`
`,M=(e,t=l)=>{a(e,c(t,{children:(r,C)=>{var n=w();o(n,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var i=g(n);o(i,"",{},{margin:"0"}),h(r,n)},$$slots:{default:!0}}))},D={title:"Wrappers/Main",component:a,tags:["autodocs"],argTypes:{},parameters:f(y)},{Story:$}=v();var w=d("<div><p>Child components go here.</p></div>");function s(e,t){p(t,!1),_(),$(e,{name:"Default",args:{},get template(){return M},parameters:{__svelteCsf:{rawCode:`<Main {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Child components go here.</p>
	</div>
</Main>`}}}),m()}s.__docgen={data:[],name:"Main.stories.svelte"};const x=u(s,D),H=["Default"],O={...x.Default,tags:["svelte-csf-v5"]};export{O as Default,H as __namedExportsOrder,D as default};

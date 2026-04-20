import{A as p,W as l,I as m,X as c,f as d,k as g,j as f}from"./iframe-1IuJh7L4.js";import{w as h,c as u,i as v,d as _}from"./create-runtime-stories-Apq51qS_.js";import{s as o}from"./style-CNURdi_Z.js";import{M as a}from"./Main-Cokuk4tu.js";import"./attributes-q36Eg1F8.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CgU0H4sF.js";const y=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

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
`,M=(e,t=l)=>{a(e,c(t,{children:(r,k)=>{var n=w();o(n,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var i=g(n);o(i,"",{},{margin:"0"}),f(r,n)},$$slots:{default:!0}}))},D={title:"Wrappers/Main",component:a,tags:["autodocs"],argTypes:{},parameters:h(y)},{Story:$}=_();var w=d("<div><p>Child components go here.</p></div>");function s(e,t){p(t,!1),v(),$(e,{name:"Default",args:{},get template(){return M},parameters:{__svelteCsf:{rawCode:`<Main {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Child components go here.</p>
	</div>
</Main>`}}}),m()}s.__docgen={data:[],name:"Main.stories.svelte"};const x=u(s,D),E=["Default"],F={...x.Default,tags:["svelte-csf-v5"]};export{F as Default,E as __namedExportsOrder,D as default};

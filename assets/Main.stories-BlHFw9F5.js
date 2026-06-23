import{ab as p,as as l,ad as m,at as c,a as d,c as g,f}from"./iframe-B9boMrJC.js";import{c as h,w as u,i as v,d as _}from"./create-runtime-stories-DkWl6f3Y.js";import{M as o}from"./Main-Ds2BbV9S.js";import{s as a}from"./style-zbbvqI-D.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CrzlrBEy.js";import"./attributes-DayBpKoh.js";const y=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

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
`,M=(e,t=l)=>{o(e,c(t,{children:(r,b)=>{var n=w();a(n,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var i=g(n);a(i,"",{},{margin:"0"}),d(r,n)},$$slots:{default:!0}}))},D={title:"Wrappers/Main",component:o,tags:["autodocs"],argTypes:{},parameters:u(y)},{Story:$}=_();var w=f("<div><p>Child components go here.</p></div>");function s(e,t){p(t,!1),v(),$(e,{name:"Default",args:{},get template(){return M},parameters:{__svelteCsf:{rawCode:`<Main {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Child components go here.</p>
	</div>
</Main>`}}}),m()}s.__docgen={data:[],name:"Main.stories.svelte"};const x=h(s,D),P=["Default"],R={...x.Default,tags:["svelte-csf-v5"]};export{R as Default,P as __namedExportsOrder,D as default};

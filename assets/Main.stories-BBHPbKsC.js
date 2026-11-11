import{ad as p,n as l,af as m,ax as c,a as d,c as f,f as g}from"./iframe-CpnTW6Aq.js";import{c as h,w as u,i as v,d as _}from"./create-runtime-stories-C7cZUBmE.js";import{M as o}from"./Main-DqP1Vz0n.js";import{s as a}from"./style-BD_XJmem.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DMUiWW_Z.js";import"./attributes-DayBpKoh.js";const y=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

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
`,M=(e,t=l)=>{o(e,c(t,{children:(r,C)=>{var n=$();a(n,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var i=f(n);a(i,"",{},{margin:"0"}),d(r,n)},$$slots:{default:!0}}))},x={title:"Wrappers/Main",component:o,tags:["autodocs"],argTypes:{},parameters:u(y)},{Story:D}=_();var $=g("<div><p>Child components go here.</p></div>");function s(e,t){p(t,!1),v(),D(e,{name:"Default",args:{},get template(){return M},parameters:{__svelteCsf:{rawCode:`<Main {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Child components go here.</p>
	</div>
</Main>`}}}),m()}s.__docgen={data:[],name:"Main.stories.svelte"};const w=h(s,x),O=["Default"],P={...w.Default,tags:["svelte-csf-v5"]};export{P as Default,O as __namedExportsOrder,x as default};

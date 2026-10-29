import{ab as C,e as y,ag as w,ah as a,a as g,ad as h,f as v,ax as x,c as $}from"./iframe-DeOGyvCS.js";import{c as b,w as W,i as k,d as D}from"./create-runtime-stories-DjaZoLUh.js";import{C as u}from"./Container-D7r2eGrs.js";import{s as c}from"./style-CkrwFcYh.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BpptJWB1.js";import"./class-BfAGWMkO.js";import"./attributes-DayBpKoh.js";import"./Theme-DhdnXGgD.js";import"./html-CLYtCkyB.js";import"./svelte-head-C9gw_C4D.js";const M=`A container to set the width and minimum height of a block of content.\r
\r
Note that the this component includes the \`<Theme>\` component internally, allowing colour themes to be applied directly without adding an additional wrapper around it.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Container } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Container width="{narrow|medium|wide|wider|full}" theme="light">{child_components}</Container>\r
\`\`\`\r
`,r=(i,d=w)=>{u(i,x(d,{children:(o,l)=>{var e=F();c(e,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var s=$(e);c(s,"",{},{margin:"0"}),g(o,e)},$$slots:{default:!0}}))},N={title:"Wrappers/Container",component:u,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:W(M)},{Story:t}=D();var F=v("<div><p>Contents of container.</p></div>"),S=v("<!> <!> <!> <!> <!> <!>",1);function _(i,d){C(d,!1),k();var o=S(),l=y(o);t(l,{name:"Default",args:{},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Contents of container.</p>\r
	</div>\r
</Container>`}}});var e=a(l,2);t(e,{name:"Narrow",args:{width:"narrow"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Contents of container.</p>\r
	</div>\r
</Container>`}}});var s=a(e,2);t(s,{name:"Medium",args:{width:"medium"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Contents of container.</p>\r
	</div>\r
</Container>`}}});var p=a(s,2);t(p,{name:"Wide",args:{width:"wide"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Contents of container.</p>\r
	</div>\r
</Container>`}}});var m=a(p,2);t(m,{name:"Wider",args:{width:"wider"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Contents of container.</p>\r
	</div>\r
</Container>`}}});var f=a(m,2);t(f,{name:"Full",args:{width:"full"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">\r
		<p style:margin="0">Contents of container.</p>\r
	</div>\r
</Container>`}}}),g(i,o),h()}_.__docgen={data:[],name:"Container.stories.svelte"};const n=b(_,N),I=["Default","Narrow","Medium","Wide","Wider","Full"],J={...n.Default,tags:["svelte-csf-v5"]},K={...n.Narrow,tags:["svelte-csf-v5"]},L={...n.Medium,tags:["svelte-csf-v5"]},Q={...n.Wide,tags:["svelte-csf-v5"]},U={...n.Wider,tags:["svelte-csf-v5"]},V={...n.Full,tags:["svelte-csf-v5"]};export{J as Default,V as Full,L as Medium,K as Narrow,Q as Wide,U as Wider,I as __namedExportsOrder,N as default};

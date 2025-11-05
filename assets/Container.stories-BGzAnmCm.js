import{p as C,j as g,f as y,Z as w,k as a,e as v,h,_ as x,n as $}from"./iframe-Cap6nYun.js";import{w as W,c as b,i as k,d as D}from"./create-runtime-stories-BOuZQ2dE.js";import{s as c}from"./style-CcY6orqc.js";import{C as _}from"./Container-CX5AXupR.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-3iI9tcbp.js";import"./class-Dzh9Da8g.js";import"./Theme-CQoXDUiD.js";import"./svelte-head-zb7aJXhC.js";import"./html-CfwwM9Fi.js";const M=`A container to set the width and minimum height of a block of content.\r
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
`,r=(i,d=w)=>{_(i,x(d,{children:(o,l)=>{var e=F();c(e,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var s=$(e);c(s,"",{},{margin:"0"}),v(o,e)},$$slots:{default:!0}}))},N={title:"Wrappers/Container",component:_,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:W(M)},{Story:t}=D();var F=g("<div><p>Contents of container.</p></div>"),S=g("<!> <!> <!> <!> <!> <!>",1);function u(i,d){C(d,!1),k();var o=S(),l=y(o);t(l,{name:"Default",args:{},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
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
</Container>`}}}),v(i,o),h()}u.__docgen={data:[],name:"Container.stories.svelte"};const n=b(u,N),G=["Default","Narrow","Medium","Wide","Wider","Full"],H={...n.Default,tags:["svelte-csf-v5"]},I={...n.Narrow,tags:["svelte-csf-v5"]},J={...n.Medium,tags:["svelte-csf-v5"]},K={...n.Wide,tags:["svelte-csf-v5"]},L={...n.Wider,tags:["svelte-csf-v5"]},Q={...n.Full,tags:["svelte-csf-v5"]};export{H as Default,Q as Full,J as Medium,I as Narrow,K as Wide,L as Wider,G as __namedExportsOrder,N as default};

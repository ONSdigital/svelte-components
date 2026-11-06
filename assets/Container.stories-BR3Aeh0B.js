import{ad as C,h as y,n as h,ah as a,a as g,af as w,f as v,ax as x,c as $}from"./iframe-DAUNLR8O.js";import{c as W,w as b,i as k,d as D}from"./create-runtime-stories-B5aIRkb-.js";import{C as u}from"./Container-SIPjVhMn.js";import{s as c}from"./style-DnS876Ns.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-C8WLOc0F.js";import"./class-DzLv1wVC.js";import"./attributes-DayBpKoh.js";import"./Theme-pIXUpPy8.js";import"./html-D5syok29.js";import"./svelte-head-CNn9Wnte.js";const M=`A container to set the width and minimum height of a block of content.\r
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
`,r=(i,d=h)=>{u(i,x(d,{children:(o,l)=>{var e=F();c(e,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var s=$(e);c(s,"",{},{margin:"0"}),g(o,e)},$$slots:{default:!0}}))},N={title:"Wrappers/Container",component:u,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:b(M)},{Story:t}=D();var F=v("<div><p>Contents of container.</p></div>"),S=v("<!> <!> <!> <!> <!> <!>",1);function _(i,d){C(d,!1),k();var o=S(),l=y(o);t(l,{name:"Default",args:{},get template(){return r},parameters:{__svelteCsf:{rawCode:`<Container {...args}>\r
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
</Container>`}}}),g(i,o),w()}_.__docgen={data:[],name:"Container.stories.svelte"};const n=W(_,N),H=["Default","Narrow","Medium","Wide","Wider","Full"],I={...n.Default,tags:["svelte-csf-v5"]},J={...n.Narrow,tags:["svelte-csf-v5"]},K={...n.Medium,tags:["svelte-csf-v5"]},L={...n.Wide,tags:["svelte-csf-v5"]},Q={...n.Wider,tags:["svelte-csf-v5"]},U={...n.Full,tags:["svelte-csf-v5"]};export{I as Default,U as Full,K as Medium,J as Narrow,L as Wide,Q as Wider,H as __namedExportsOrder,N as default};

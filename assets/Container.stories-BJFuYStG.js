import{ad as C,h as y,n as h,ah as a,a as g,af as w,f as v,ax as x,c as $}from"./iframe-UWIgwT_c.js";import{c as W,w as b,i as k,d as D}from"./create-runtime-stories-WntTm4wH.js";import{C as u}from"./Container-v_P6jV09.js";import{s as c}from"./style-JgESTiB5.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-CxnnJe_I.js";import"./class-BWaliKvu.js";import"./attributes-DayBpKoh.js";import"./Theme-CfO7ibUV.js";import"./html-Dw2gjOR2.js";import"./svelte-head-HqhQydw-.js";const M=`A container to set the width and minimum height of a block of content.

Note that the this component includes the \`<Theme>\` component internally, allowing colour themes to be applied directly without adding an additional wrapper around it.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Container } from "@onsvisual/svelte-components";
<\/script>

<Container width="{narrow|medium|wide|wider|full}" theme="light">{child_components}</Container>
\`\`\`
`,t=(i,d=h)=>{u(i,x(d,{children:(o,l)=>{var e=F();c(e,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var s=$(e);c(s,"",{},{margin:"0"}),g(o,e)},$$slots:{default:!0}}))},N={title:"Wrappers/Container",component:u,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:b(M)},{Story:n}=D();var F=v("<div><p>Contents of container.</p></div>"),S=v("<!> <!> <!> <!> <!> <!>",1);function _(i,d){C(d,!1),k();var o=S(),l=y(o);n(l,{name:"Default",args:{},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Contents of container.</p>
	</div>
</Container>`}}});var e=a(l,2);n(e,{name:"Narrow",args:{width:"narrow"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Contents of container.</p>
	</div>
</Container>`}}});var s=a(e,2);n(s,{name:"Medium",args:{width:"medium"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Contents of container.</p>
	</div>
</Container>`}}});var p=a(s,2);n(p,{name:"Wide",args:{width:"wide"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Contents of container.</p>
	</div>
</Container>`}}});var m=a(p,2);n(m,{name:"Wider",args:{width:"wider"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Contents of container.</p>
	</div>
</Container>`}}});var f=a(m,2);n(f,{name:"Full",args:{width:"full"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
	<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
		<p style:margin="0">Contents of container.</p>
	</div>
</Container>`}}}),g(i,o),w()}_.__docgen={data:[],name:"Container.stories.svelte"};const r=W(_,N),H=["Default","Narrow","Medium","Wide","Wider","Full"],I={...r.Default,tags:["svelte-csf-v5"]},J={...r.Narrow,tags:["svelte-csf-v5"]},K={...r.Medium,tags:["svelte-csf-v5"]},L={...r.Wide,tags:["svelte-csf-v5"]},Q={...r.Wider,tags:["svelte-csf-v5"]},U={...r.Full,tags:["svelte-csf-v5"]};export{I as Default,U as Full,K as Medium,J as Narrow,L as Wide,Q as Wider,H as __namedExportsOrder,N as default};

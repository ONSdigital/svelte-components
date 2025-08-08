import{p as C,j as g,f as y,Z as w,k as a,e as v,h,_ as x,n as $}from"./iframe-1HNJ2TKf.js";import{w as W,c as b,i as k,d as D}from"./create-runtime-stories-indmQy6s.js";import{s as c}from"./style-CcY6orqc.js";import{C as _}from"./Container-CLTNZ7i-.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-Dn0uQZds.js";import"./class-Dzh9Da8g.js";import"./Theme-BOGACQeJ.js";import"./svelte-head-C7vqD3r2.js";import"./html-CfxAF0H0.js";const M=`A container to set the width and minimum height of a block of content.

Note that the this component includes the \`<Theme>\` component internally, allowing colour themes to be applied directly without adding an additional wrapper around it.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Container } from "@onsvisual/svelte-components";
<\/script>

<Container width="{narrow|medium|wide|wider|full}" theme="light">{child_components}</Container>
\`\`\`
`,t=(i,d=w)=>{_(i,x(d,{children:(o,l)=>{var e=F();c(e,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var s=$(e);c(s,"",{},{margin:"0"}),v(o,e)},$$slots:{default:!0}}))},N={title:"Wrappers/Container",component:_,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:W(M)},{Story:n}=D();var F=g("<div><p>Contents of container.</p></div>"),S=g("<!> <!> <!> <!> <!> <!>",1);function u(i,d){C(d,!1),k();var o=S(),l=y(o);n(l,{name:"Default",args:{},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
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
</Container>`}}}),v(i,o),h()}u.__docgen={data:[],name:"Container.stories.svelte"};const r=b(u,N),G=["Default","Narrow","Medium","Wide","Wider","Full"],H={...r.Default,tags:["svelte-csf-v5"]},I={...r.Narrow,tags:["svelte-csf-v5"]},J={...r.Medium,tags:["svelte-csf-v5"]},K={...r.Wide,tags:["svelte-csf-v5"]},L={...r.Wider,tags:["svelte-csf-v5"]},Q={...r.Full,tags:["svelte-csf-v5"]};export{H as Default,Q as Full,J as Medium,I as Narrow,K as Wide,L as Wider,G as __namedExportsOrder,N as default};

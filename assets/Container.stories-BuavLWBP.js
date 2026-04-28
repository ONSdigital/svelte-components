import{A as C,f as g,m as y,V as w,J as a,j as v,I as h,W as x,k as W}from"./iframe-IP6ocM0a.js";import{w as $,c as b,i as k,d as D}from"./create-runtime-stories-BvMOJ_th.js";import{s as c}from"./style-CNURdi_Z.js";import{C as u}from"./Container-BqyVwPrk.js";import"./attributes-q36Eg1F8.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CBM4GyKF.js";import"./class-B9SFUanI.js";import"./Theme-CTze4v6y.js";import"./svelte-head-B4DT0o_2.js";import"./html-BOHkjiZz.js";const M=`A container to set the width and minimum height of a block of content.

Note that the this component includes the \`<Theme>\` component internally, allowing colour themes to be applied directly without adding an additional wrapper around it.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Container } from "@onsvisual/svelte-components";
<\/script>

<Container width="{narrow|medium|wide|wider|full}" theme="light">{child_components}</Container>
\`\`\`
`,t=(i,d=w)=>{u(i,x(d,{children:(o,l)=>{var e=F();c(e,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var s=W(e);c(s,"",{},{margin:"0"}),v(o,e)},$$slots:{default:!0}}))},N={title:"Wrappers/Container",component:u,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:$(M)},{Story:n}=D();var F=g("<div><p>Contents of container.</p></div>"),A=g("<!> <!> <!> <!> <!> <!>",1);function _(i,d){C(d,!1),k();var o=A(),l=y(o);n(l,{name:"Default",args:{},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
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
</Container>`}}}),v(i,o),h()}_.__docgen={data:[],name:"Container.stories.svelte"};const r=b(_,N),z=["Default","Narrow","Medium","Wide","Wider","Full"],B={...r.Default,tags:["svelte-csf-v5"]},G={...r.Narrow,tags:["svelte-csf-v5"]},H={...r.Medium,tags:["svelte-csf-v5"]},K={...r.Wide,tags:["svelte-csf-v5"]},L={...r.Wider,tags:["svelte-csf-v5"]},Q={...r.Full,tags:["svelte-csf-v5"]};export{B as Default,Q as Full,H as Medium,G as Narrow,K as Wide,L as Wider,z as __namedExportsOrder,N as default};

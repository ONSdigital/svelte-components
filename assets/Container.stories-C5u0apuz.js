import{ab as C,e as y,as as w,ae as a,a as g,ad as h,f as v,at as x,c as $}from"./iframe-CETjfACR.js";import{c as b,w as W,i as k,d as D}from"./create-runtime-stories-BfDsA5km.js";import{C as u}from"./Container-Bm_-y6ME.js";import{s as c}from"./style-DFJNdFR1.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-qW-0xHQB.js";import"./class-BM65IkHf.js";import"./attributes-DayBpKoh.js";import"./Theme-SeDQQFt_.js";import"./html-CD_D9Yt8.js";import"./svelte-head-A6YDZRJ9.js";const M=`A container to set the width and minimum height of a block of content.

Note that the this component includes the \`<Theme>\` component internally, allowing colour themes to be applied directly without adding an additional wrapper around it.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Container } from "@onsvisual/svelte-components";
<\/script>

<Container width="{narrow|medium|wide|wider|full}" theme="light">{child_components}</Container>
\`\`\`
`,t=(i,d=w)=>{u(i,x(d,{children:(o,l)=>{var e=F();c(e,"",{},{padding:"24px 12px",background:"var(--ons-color-grey-10)"});var s=$(e);c(s,"",{},{margin:"0"}),g(o,e)},$$slots:{default:!0}}))},N={title:"Wrappers/Container",component:u,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:W(M)},{Story:n}=D();var F=v("<div><p>Contents of container.</p></div>"),S=v("<!> <!> <!> <!> <!> <!>",1);function _(i,d){C(d,!1),k();var o=S(),l=y(o);n(l,{name:"Default",args:{},get template(){return t},parameters:{__svelteCsf:{rawCode:`<Container {...args}>
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
</Container>`}}}),g(i,o),h()}_.__docgen={data:[],name:"Container.stories.svelte"};const r=b(_,N),I=["Default","Narrow","Medium","Wide","Wider","Full"],J={...r.Default,tags:["svelte-csf-v5"]},K={...r.Narrow,tags:["svelte-csf-v5"]},L={...r.Medium,tags:["svelte-csf-v5"]},Q={...r.Wide,tags:["svelte-csf-v5"]},U={...r.Wider,tags:["svelte-csf-v5"]},V={...r.Full,tags:["svelte-csf-v5"]};export{J as Default,V as Full,L as Medium,K as Narrow,Q as Wide,U as Wider,I as __namedExportsOrder,N as default};

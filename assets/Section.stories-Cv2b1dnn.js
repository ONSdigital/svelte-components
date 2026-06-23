import{ab as _,e as v,as as S,ae as m,a as l,ad as g,f as c,at as w,t as h,s as $,c as C}from"./iframe-DPxeBxYU.js";import{c as D,w as M,i as x,d as y}from"./create-runtime-stories-DF6h5qLP.js";import{S as d}from"./Section-yz5UYu6D.js";import{l as W}from"./utils-VWytQRnm.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-9EbRFrnm.js";import"./class-BrH_xv5o.js";import"./attributes-DayBpKoh.js";import"./Container-Bl_WvwG0.js";import"./style-Blvztch_.js";import"./Theme-CGhishjf.js";import"./html-BtP_TN--.js";import"./svelte-head-DmVh8Pce.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A layout block for text content, including an optional title.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<Section width="{narrow|medium|wide|full}" title="Section title">
  <p>Contents of section.</p>
</Section>
\`\`\`
`,a=(o,s=S)=>{d(o,w(s,{children:(e,n)=>{var t=A(),i=C(t);h(f=>$(i,f),[()=>W()]),l(e,t)},$$slots:{default:!0}}))},k={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:M(b)},{Story:r}=y();var A=c("<p> </p>"),E=c("<!> <!> <!>",1);function u(o,s){_(s,!1),x();var e=E(),n=v(e);r(n,{name:"Default",args:{title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
	<p>
		{lipsum()}
	</p>
</Section>`}}});var t=m(n,2);r(t,{name:"Medium",args:{width:"medium",title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
	<p>
		{lipsum()}
	</p>
</Section>`}}});var i=m(t,2);r(i,{name:"Wide",args:{width:"wide",title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
	<p>
		{lipsum()}
	</p>
</Section>`}}}),l(o,e),g()}u.__docgen={data:[],name:"Section.stories.svelte"};const p=D(u,k),N=["Default","Medium","Wide"],Q={...p.Default,tags:["svelte-csf-v5"]},U={...p.Medium,tags:["svelte-csf-v5"]},V={...p.Wide,tags:["svelte-csf-v5"]};export{Q as Default,U as Medium,V as Wide,N as __namedExportsOrder,k as default};

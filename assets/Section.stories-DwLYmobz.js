import{A as f,f as l,m as v,W as S,J as m,j as c,I as g,X as h,t as w,h as $,K as C,k as D}from"./iframe-DU2bJwNo.js";import{w as M,c as W,i as x,d as y}from"./create-runtime-stories-BaiRa-aW.js";import{S as d}from"./Section-D7jcEkG0.js";import{l as b}from"./utils-VWytQRnm.js";import"./slot-BP_Qo1ZM.js";import"./attributes-D6OZFcxA.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./Container-Dm8W1kR2.js";import"./style-CNURdi_Z.js";import"./Theme-CkMct6eL.js";import"./svelte-head-TypVP7l4.js";import"./html-zN8nKItY.js";import"./_commonjsHelpers-CqkleIqs.js";const k=`A layout block for text content, including an optional title.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<Section width="{narrow|medium|wide|full}" title="Section title">
  <p>Contents of section.</p>
</Section>
\`\`\`
`,a=(o,s=S)=>{d(o,h(s,{children:(e,n)=>{var t=j(),i=D(t);w(_=>C(i,_),[b],$),c(e,t)},$$slots:{default:!0}}))},A={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:M(k)},{Story:r}=y();var j=l("<p> </p>"),q=l("<!> <!> <!>",1);function u(o,s){f(s,!1),x();var e=q(),n=v(e);r(n,{name:"Default",args:{title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
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
</Section>`}}}),c(o,e),g()}u.__docgen={data:[],name:"Section.stories.svelte"};const p=W(u,A),H=["Default","Medium","Wide"],N={...p.Default,tags:["svelte-csf-v5"]},Q={...p.Medium,tags:["svelte-csf-v5"]},U={...p.Wide,tags:["svelte-csf-v5"]};export{N as Default,Q as Medium,U as Wide,H as __namedExportsOrder,A as default};

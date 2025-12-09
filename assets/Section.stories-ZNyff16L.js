import{p as f,j as l,f as v,Z as S,k as m,e as c,h as g,_ as h,t as w,o as $,q as C,n as D}from"./iframe-CLJGxL-r.js";import{w as M,c as x,i as y,d as W}from"./create-runtime-stories-CX2JR82U.js";import{S as d}from"./Section-BsAQBOKC.js";import{l as b}from"./utils-VWytQRnm.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BEkmlMin.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./Container-C-p4oi53.js";import"./style-CcY6orqc.js";import"./Theme-DCaDIbQI.js";import"./svelte-head-Bl68povq.js";import"./html-CLDo4vDv.js";import"./_commonjsHelpers-CqkleIqs.js";const k=`A layout block for text content, including an optional title.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<Section width="{narrow|medium|wide|full}" title="Section title">
  <p>Contents of section.</p>
</Section>
\`\`\`
`,a=(o,s=S)=>{d(o,h(s,{children:(e,n)=>{var t=j(),i=D(t);w(u=>C(i,u),[b],$),c(e,t)},$$slots:{default:!0}}))},q={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:M(k)},{Story:r}=W();var j=l("<p> </p>"),A=l("<!> <!> <!>",1);function _(o,s){f(s,!1),y();var e=A(),n=v(e);r(n,{name:"Default",args:{title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
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
</Section>`}}}),c(o,e),g()}_.__docgen={data:[],name:"Section.stories.svelte"};const p=x(_,q),K=["Default","Medium","Wide"],N={...p.Default,tags:["svelte-csf-v5"]},Q={...p.Medium,tags:["svelte-csf-v5"]},U={...p.Wide,tags:["svelte-csf-v5"]};export{N as Default,Q as Medium,U as Wide,K as __namedExportsOrder,q as default};

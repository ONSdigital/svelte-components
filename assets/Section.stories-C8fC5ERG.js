import{ab as _,e as v,as as S,ae as m,a as l,ad as g,f as c,at as w,t as h,s as $,c as C}from"./iframe-CwT5EAsy.js";import{c as D,w as M,i as x,d as y}from"./create-runtime-stories-BBueoODQ.js";import{S as d}from"./Section-B_vTowS4.js";import{l as W}from"./utils-VWytQRnm.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-DBnpCygu.js";import"./class-Dvitqb_Y.js";import"./attributes-DayBpKoh.js";import"./Container-BaPJvvuj.js";import"./style-CZqFqtXy.js";import"./Theme-CJo59YfS.js";import"./html-BduOKtLU.js";import"./svelte-head-_gL5VRnT.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A layout block for text content, including an optional title.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Section } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Section width="{narrow|medium|wide|full}" title="Section title">\r
  <p>Contents of section.</p>\r
</Section>\r
\`\`\`\r
`,i=(r,o=S)=>{d(r,w(o,{children:(e,s)=>{var t=A(),n=C(t);h(f=>$(n,f),[()=>W()]),l(e,t)},$$slots:{default:!0}}))},k={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:M(b)},{Story:a}=y();var A=c("<p> </p>"),E=c("<!> <!> <!>",1);function u(r,o){_(o,!1),x();var e=E(),s=v(e);a(s,{name:"Default",args:{title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
	<p>\r
		{lipsum()}\r
	</p>\r
</Section>`}}});var t=m(s,2);a(t,{name:"Medium",args:{width:"medium",title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
	<p>\r
		{lipsum()}\r
	</p>\r
</Section>`}}});var n=m(t,2);a(n,{name:"Wide",args:{width:"wide",title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
	<p>\r
		{lipsum()}\r
	</p>\r
</Section>`}}}),l(r,e),g()}u.__docgen={data:[],name:"Section.stories.svelte"};const p=D(u,k),N=["Default","Medium","Wide"],Q={...p.Default,tags:["svelte-csf-v5"]},U={...p.Medium,tags:["svelte-csf-v5"]},V={...p.Wide,tags:["svelte-csf-v5"]};export{Q as Default,U as Medium,V as Wide,N as __namedExportsOrder,k as default};

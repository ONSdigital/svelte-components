import{ab as _,e as v,ag as g,ah as m,a as l,ad as S,f as c,av as h,t as w,s as $,c as C}from"./iframe-CWf7aFlM.js";import{c as D,w as M,i as x,d as y}from"./create-runtime-stories-DZHrlilD.js";import{S as d}from"./Section-m2uWrDJ9.js";import{l as W}from"./utils-VWytQRnm.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-HyytCBC6.js";import"./class-bcIlrV7N.js";import"./attributes-DayBpKoh.js";import"./Container-B-0QdNll.js";import"./slot-BP_Qo1ZM.js";import"./style-DKGnerva.js";import"./Theme-kRfsJ7Yx.js";import"./html-CHqp8wE0.js";import"./svelte-head-BAKvAkK-.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A layout block for text content, including an optional title.\r
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
`,i=(r,o=g)=>{d(r,h(o,{children:(e,s)=>{var t=A(),n=C(t);w(f=>$(n,f),[()=>W()]),l(e,t)},$$slots:{default:!0}}))},k={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:M(b)},{Story:a}=y();var A=c("<p> </p>"),E=c("<!> <!> <!>",1);function u(r,o){_(o,!1),x();var e=E(),s=v(e);a(s,{name:"Default",args:{title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
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
</Section>`}}}),l(r,e),S()}u.__docgen={data:[],name:"Section.stories.svelte"};const p=D(u,k),N=["Default","Medium","Wide"],Q={...p.Default,tags:["svelte-csf-v5"]},U={...p.Medium,tags:["svelte-csf-v5"]},V={...p.Wide,tags:["svelte-csf-v5"]};export{Q as Default,U as Medium,V as Wide,N as __namedExportsOrder,k as default};

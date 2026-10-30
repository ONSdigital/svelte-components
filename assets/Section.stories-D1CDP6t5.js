import{ab as _,e as g,ag as v,ah as m,a as l,ad as S,f as c,ax as h,t as w,s as $,c as C}from"./iframe-KpSyCse9.js";import{c as D,w as x,i as M,d as y}from"./create-runtime-stories-B9Qx1gAn.js";import{S as d}from"./Section-BJbN0jGm.js";import{l as W}from"./utils-VWytQRnm.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-B8eluhLe.js";import"./class-BXNpPotE.js";import"./attributes-DayBpKoh.js";import"./Container-x1FdS4pd.js";import"./slot-BP_Qo1ZM.js";import"./style-DJ2HlsXg.js";import"./Theme-B2zBHxcI.js";import"./html-BMA1lw-v.js";import"./svelte-head-ifkohPjB.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A layout block for text content, including an optional title.\r
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
`,i=(r,o=v)=>{d(r,h(o,{children:(e,s)=>{var t=A(),n=C(t);w(f=>$(n,f),[()=>W()]),l(e,t)},$$slots:{default:!0}}))},k={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:x(b)},{Story:a}=y();var A=c("<p> </p>"),E=c("<!> <!> <!>",1);function u(r,o){_(o,!1),M();var e=E(),s=g(e);a(s,{name:"Default",args:{title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
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

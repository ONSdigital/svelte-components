import{p as f,j as l,f as v,Z as S,k as m,e as c,h as g,_ as h,t as w,o as $,q as C,n as D}from"./iframe-DZk-GI4f.js";import{w as M,c as x,i as y,d as W}from"./create-runtime-stories-CzT9f7Ym.js";import{S as d}from"./Section-hkDt74Dn.js";import{l as b}from"./utils-VWytQRnm.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CkDADBTK.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./Container-6sjQsKa5.js";import"./style-CcY6orqc.js";import"./Theme-CZ0m8uQb.js";import"./svelte-head-CAgoTDwJ.js";import"./html-Csk7iinj.js";import"./_commonjsHelpers-CqkleIqs.js";const k=`A layout block for text content, including an optional title.\r
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
`,i=(r,o=S)=>{d(r,h(o,{children:(e,s)=>{var t=j(),n=D(t);w(u=>C(n,u),[b],$),c(e,t)},$$slots:{default:!0}}))},q={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:M(k)},{Story:a}=W();var j=l("<p> </p>"),A=l("<!> <!> <!>",1);function _(r,o){f(o,!1),y();var e=A(),s=v(e);a(s,{name:"Default",args:{title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
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
</Section>`}}}),c(r,e),g()}_.__docgen={data:[],name:"Section.stories.svelte"};const p=x(_,q),K=["Default","Medium","Wide"],N={...p.Default,tags:["svelte-csf-v5"]},Q={...p.Medium,tags:["svelte-csf-v5"]},U={...p.Wide,tags:["svelte-csf-v5"]};export{N as Default,Q as Medium,U as Wide,K as __namedExportsOrder,q as default};

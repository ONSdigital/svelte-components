import{ad as _,h as v,n as S,ah as m,a as l,af as g,f as c,ax as h,t as w,b as $,c as C}from"./iframe-DAUNLR8O.js";import{c as D,w as x,i as M,d as y}from"./create-runtime-stories-B5aIRkb-.js";import{S as d}from"./Section-Cno7kLH7.js";import{l as W}from"./utils-VWytQRnm.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-C8WLOc0F.js";import"./class-DzLv1wVC.js";import"./attributes-DayBpKoh.js";import"./Container-SIPjVhMn.js";import"./style-DnS876Ns.js";import"./Theme-pIXUpPy8.js";import"./html-D5syok29.js";import"./svelte-head-CNn9Wnte.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A layout block for text content, including an optional title.\r
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
`,i=(r,o=S)=>{d(r,h(o,{children:(e,n)=>{var t=A(),s=C(t);w(u=>$(s,u),[()=>W()]),l(e,t)},$$slots:{default:!0}}))},k={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:x(b)},{Story:a}=y();var A=c("<p> </p>"),E=c("<!> <!> <!>",1);function f(r,o){_(o,!1),M();var e=E(),n=v(e);a(n,{name:"Default",args:{title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
	<p>\r
		{lipsum()}\r
	</p>\r
</Section>`}}});var t=m(n,2);a(t,{name:"Medium",args:{width:"medium",title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
	<p>\r
		{lipsum()}\r
	</p>\r
</Section>`}}});var s=m(t,2);a(s,{name:"Wide",args:{width:"wide",title:"Section title"},get template(){return i},parameters:{__svelteCsf:{rawCode:`<Section {...args}>\r
	<p>\r
		{lipsum()}\r
	</p>\r
</Section>`}}}),l(r,e),g()}f.__docgen={data:[],name:"Section.stories.svelte"};const p=D(f,k),K=["Default","Medium","Wide"],N={...p.Default,tags:["svelte-csf-v5"]},Q={...p.Medium,tags:["svelte-csf-v5"]},U={...p.Wide,tags:["svelte-csf-v5"]};export{N as Default,Q as Medium,U as Wide,K as __namedExportsOrder,k as default};

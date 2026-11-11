import{ad as _,h as v,n as S,ah as m,a as l,af as g,f as c,ax as h,t as w,b as $,c as C}from"./iframe-CpnTW6Aq.js";import{c as D,w as x,i as M,d as y}from"./create-runtime-stories-C7cZUBmE.js";import{S as d}from"./Section-BP4IEh7g.js";import{l as W}from"./utils-VWytQRnm.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DMUiWW_Z.js";import"./class-B_F942N2.js";import"./attributes-DayBpKoh.js";import"./Container-DX8kexNK.js";import"./style-BD_XJmem.js";import"./Theme-C5W1PJ9k.js";import"./html-BFPf_PCX.js";import"./svelte-head-Dh_GIgDE.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`A layout block for text content, including an optional title.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<Section width="{narrow|medium|wide|full}" title="Section title">
  <p>Contents of section.</p>
</Section>
\`\`\`
`,a=(o,n=S)=>{d(o,h(n,{children:(e,s)=>{var t=A(),i=C(t);w(u=>$(i,u),[()=>W()]),l(e,t)},$$slots:{default:!0}}))},k={title:"Layout/Section",component:d,tags:["autodocs"],argTypes:{width:{control:{type:"select"}}},parameters:x(b)},{Story:r}=y();var A=c("<p> </p>"),E=c("<!> <!> <!>",1);function f(o,n){_(n,!1),M();var e=E(),s=v(e);r(s,{name:"Default",args:{title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
	<p>
		{lipsum()}
	</p>
</Section>`}}});var t=m(s,2);r(t,{name:"Medium",args:{width:"medium",title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
	<p>
		{lipsum()}
	</p>
</Section>`}}});var i=m(t,2);r(i,{name:"Wide",args:{width:"wide",title:"Section title"},get template(){return a},parameters:{__svelteCsf:{rawCode:`<Section {...args}>
	<p>
		{lipsum()}
	</p>
</Section>`}}}),l(o,e),g()}f.__docgen={data:[],name:"Section.stories.svelte"};const p=D(f,k),K=["Default","Medium","Wide"],N={...p.Default,tags:["svelte-csf-v5"]},Q={...p.Medium,tags:["svelte-csf-v5"]},U={...p.Wide,tags:["svelte-csf-v5"]};export{N as Default,Q as Medium,U as Wide,K as __namedExportsOrder,k as default};

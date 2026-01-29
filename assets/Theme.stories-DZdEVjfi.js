import{p as c,j as d,f as _,Z as f,k as s,e as v,h as k,_ as y}from"./iframe-BD7JyiWe.js";import{w as B,c as D,i as w,d as x}from"./create-runtime-stories-CfzMKkzB.js";import{s as C}from"./style-CcY6orqc.js";import{T}from"./Theme-DxkjnEFV.js";import"./attributes-Co-1QMVx.js";import"./svelte-head-KhQ-w5ip.js";import"./html-CzEqZFLu.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";const b=`A component that sets the colour scheme of its child components using CSS variables.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Theme } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Theme theme="{light|dark|paleblue|blue|navyblue|grey}"> {child_components} </Theme>\r
\`\`\`\r
`,e=(h,m=f)=>{T(h,y(m,{children:(n,l)=>{var a=P();C(a,"",{},{padding:"12px"}),v(n,a)},$$slots:{default:!0}}))},$={title:"Wrappers/Theme",component:T,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:B(b)},{Story:r}=x();var P=d('<div><h2>Title</h2> <p>Text with a <a href="#0">hyperlink</a>.</p></div>'),N=d("<!> <!> <!> <!> <!> <!>",1);function g(h,m){c(m,!1),w();var n=N(),l=_(n);r(l,{name:"Default light theme",args:{},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var a=s(l,2);r(a,{name:"Dark theme",args:{theme:"dark"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var i=s(a,2);r(i,{name:"Pale blue theme",args:{theme:"paleblue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var o=s(i,2);r(o,{name:"Blue theme",args:{theme:"blue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var p=s(o,2);r(p,{name:"Navy blue theme",args:{theme:"navyblue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var u=s(p,2);r(u,{name:"Dark with background override",args:{theme:"dark",background:"var(--ons-color-aqua-teal)"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}}),v(h,n),k()}g.__docgen={data:[],name:"Theme.stories.svelte"};const t=D(g,$),R=["DefaultLightTheme","DarkTheme","PaleBlueTheme","BlueTheme","NavyBlueTheme","DarkWithBackgroundOverride"],Z={...t.DefaultLightTheme,tags:["svelte-csf-v5"]},z={...t.DarkTheme,tags:["svelte-csf-v5"]},F={...t.PaleBlueTheme,tags:["svelte-csf-v5"]},G={...t.BlueTheme,tags:["svelte-csf-v5"]},H={...t.NavyBlueTheme,tags:["svelte-csf-v5"]},I={...t.DarkWithBackgroundOverride,tags:["svelte-csf-v5"]};export{G as BlueTheme,z as DarkTheme,I as DarkWithBackgroundOverride,Z as DefaultLightTheme,H as NavyBlueTheme,F as PaleBlueTheme,R as __namedExportsOrder,$ as default};

import{ad as c,h as _,n as f,ah as s,a as d,af as k,f as v,ax as y}from"./iframe-DAUNLR8O.js";import{c as x,w as B,i as D,d as w}from"./create-runtime-stories-B5aIRkb-.js";import{T}from"./Theme-pIXUpPy8.js";import{s as C}from"./style-DnS876Ns.js";import"./preload-helper-Dp1pzeXC.js";import"./html-D5syok29.js";import"./svelte-head-CNn9Wnte.js";import"./class-DzLv1wVC.js";import"./attributes-DayBpKoh.js";const b=`A component that sets the colour scheme of its child components using CSS variables.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Theme } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Theme theme="{light|dark|paleblue|blue|navyblue|grey}"> {child_components} </Theme>\r
\`\`\`\r
`,e=(h,m=f)=>{T(h,y(m,{children:(n,l)=>{var a=P();C(a,"",{},{padding:"12px"}),d(n,a)},$$slots:{default:!0}}))},$={title:"Wrappers/Theme",component:T,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:B(b)},{Story:r}=w();var P=v('<div><h2>Title</h2> <p>Text with a <a href="#0">hyperlink</a>.</p></div>'),N=v("<!> <!> <!> <!> <!> <!>",1);function g(h,m){c(m,!1),D();var n=N(),l=_(n);r(l,{name:"Default light theme",args:{},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
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
</Theme>`}}}),d(h,n),k()}g.__docgen={data:[],name:"Theme.stories.svelte"};const t=x(g,$),j=["DefaultLightTheme","DarkTheme","PaleBlueTheme","BlueTheme","NavyBlueTheme","DarkWithBackgroundOverride"],z={...t.DefaultLightTheme,tags:["svelte-csf-v5"]},F={...t.DarkTheme,tags:["svelte-csf-v5"]},G={...t.PaleBlueTheme,tags:["svelte-csf-v5"]},H={...t.BlueTheme,tags:["svelte-csf-v5"]},I={...t.NavyBlueTheme,tags:["svelte-csf-v5"]},J={...t.DarkWithBackgroundOverride,tags:["svelte-csf-v5"]};export{H as BlueTheme,F as DarkTheme,J as DarkWithBackgroundOverride,z as DefaultLightTheme,I as NavyBlueTheme,G as PaleBlueTheme,j as __namedExportsOrder,$ as default};

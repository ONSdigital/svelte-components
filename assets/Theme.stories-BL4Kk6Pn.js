import{ab as c,e as _,ag as f,ah as s,a as d,ad as k,f as v,ax as y}from"./iframe-DwMLuGxz.js";import{c as x,w as B,i as D,d as w}from"./create-runtime-stories-CVh0mbf1.js";import{T}from"./Theme-Cyy9OYAS.js";import{s as C}from"./style-BhKhrtHX.js";import"./preload-helper-Dp1pzeXC.js";import"./html-CPoz4ccc.js";import"./slot-BP_Qo1ZM.js";import"./svelte-head-BWRd0uFg.js";import"./class-BbJvXEFO.js";import"./attributes-DayBpKoh.js";const b=`A component that sets the colour scheme of its child components using CSS variables.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Theme } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Theme theme="{light|dark|paleblue|blue|navyblue|grey}"> {child_components} </Theme>\r
\`\`\`\r
`,e=(h,m=f)=>{T(h,y(m,{children:(n,i)=>{var a=P();C(a,"",{},{padding:"12px"}),d(n,a)},$$slots:{default:!0}}))},$={title:"Wrappers/Theme",component:T,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:B(b)},{Story:r}=w();var P=v('<div><h2>Title</h2> <p>Text with a <a href="#0">hyperlink</a>.</p></div>'),N=v("<!> <!> <!> <!> <!> <!>",1);function g(h,m){c(m,!1),D();var n=N(),i=_(n);r(i,{name:"Default light theme",args:{},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var a=s(i,2);r(a,{name:"Dark theme",args:{theme:"dark"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var l=s(a,2);r(l,{name:"Pale blue theme",args:{theme:"paleblue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
	<div style:padding="12px">\r
		<h2>Title</h2>\r
		<p>Text with a <a href="#0">hyperlink</a>.</p>\r
	</div>\r
</Theme>`}}});var o=s(l,2);r(o,{name:"Blue theme",args:{theme:"blue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>\r
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
</Theme>`}}}),d(h,n),k()}g.__docgen={data:[],name:"Theme.stories.svelte"};const t=x(g,$),z=["DefaultLightTheme","DarkTheme","PaleBlueTheme","BlueTheme","NavyBlueTheme","DarkWithBackgroundOverride"],F={...t.DefaultLightTheme,tags:["svelte-csf-v5"]},G={...t.DarkTheme,tags:["svelte-csf-v5"]},H={...t.PaleBlueTheme,tags:["svelte-csf-v5"]},I={...t.BlueTheme,tags:["svelte-csf-v5"]},J={...t.NavyBlueTheme,tags:["svelte-csf-v5"]},K={...t.DarkWithBackgroundOverride,tags:["svelte-csf-v5"]};export{I as BlueTheme,G as DarkTheme,K as DarkWithBackgroundOverride,F as DefaultLightTheme,J as NavyBlueTheme,H as PaleBlueTheme,z as __namedExportsOrder,$ as default};

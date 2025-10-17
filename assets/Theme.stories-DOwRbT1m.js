import{p as c,j as d,f as _,Z as f,k as s,e as v,h as k,_ as y}from"./iframe-CXTJ6QVU.js";import{w as B,c as D,i as w,d as x}from"./create-runtime-stories-BkuGQWvD.js";import{s as C}from"./style-CcY6orqc.js";import{T}from"./Theme-CCowTC58.js";import"./attributes-Co-1QMVx.js";import"./svelte-head-B2BaR5_I.js";import"./html-3B6xiwsW.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";const b=`A component that sets the colour scheme of its child components using CSS variables.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Theme } from "@onsvisual/svelte-components";
<\/script>

<Theme theme="{light|dark|paleblue|blue|navyblue|grey}"> {child_components} </Theme>
\`\`\`
`,e=(h,m=f)=>{T(h,y(m,{children:(n,l)=>{var r=P();C(r,"",{},{padding:"12px"}),v(n,r)},$$slots:{default:!0}}))},$={title:"Wrappers/Theme",component:T,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:B(b)},{Story:t}=x();var P=d('<div><h2>Title</h2> <p>Text with a <a href="#0">hyperlink</a>.</p></div>'),N=d("<!> <!> <!> <!> <!> <!>",1);function g(h,m){c(m,!1),w();var n=N(),l=_(n);t(l,{name:"Default light theme",args:{},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var r=s(l,2);t(r,{name:"Dark theme",args:{theme:"dark"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var i=s(r,2);t(i,{name:"Pale blue theme",args:{theme:"paleblue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var o=s(i,2);t(o,{name:"Blue theme",args:{theme:"blue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var p=s(o,2);t(p,{name:"Navy blue theme",args:{theme:"navyblue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var u=s(p,2);t(u,{name:"Dark with background override",args:{theme:"dark",background:"var(--ons-color-aqua-teal)"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}}),v(h,n),k()}g.__docgen={data:[],name:"Theme.stories.svelte"};const a=D(g,$),R=["DefaultLightTheme","DarkTheme","PaleBlueTheme","BlueTheme","NavyBlueTheme","DarkWithBackgroundOverride"],Z={...a.DefaultLightTheme,tags:["svelte-csf-v5"]},z={...a.DarkTheme,tags:["svelte-csf-v5"]},F={...a.PaleBlueTheme,tags:["svelte-csf-v5"]},G={...a.BlueTheme,tags:["svelte-csf-v5"]},H={...a.NavyBlueTheme,tags:["svelte-csf-v5"]},I={...a.DarkWithBackgroundOverride,tags:["svelte-csf-v5"]};export{G as BlueTheme,z as DarkTheme,I as DarkWithBackgroundOverride,Z as DefaultLightTheme,H as NavyBlueTheme,F as PaleBlueTheme,R as __namedExportsOrder,$ as default};

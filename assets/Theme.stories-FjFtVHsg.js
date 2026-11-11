import{ad as c,h as _,n as f,ah as s,a as d,af as k,f as v,ax as y}from"./iframe-CpnTW6Aq.js";import{c as x,w as B,i as D,d as w}from"./create-runtime-stories-C7cZUBmE.js";import{T}from"./Theme-C5W1PJ9k.js";import{s as C}from"./style-BD_XJmem.js";import"./preload-helper-Dp1pzeXC.js";import"./html-BFPf_PCX.js";import"./svelte-head-Dh_GIgDE.js";import"./class-B_F942N2.js";import"./attributes-DayBpKoh.js";const b=`A component that sets the colour scheme of its child components using CSS variables.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Theme } from "@onsvisual/svelte-components";
<\/script>

<Theme theme="{light|dark|paleblue|blue|navyblue|grey}"> {child_components} </Theme>
\`\`\`
`,e=(h,m=f)=>{T(h,y(m,{children:(n,l)=>{var r=P();C(r,"",{},{padding:"12px"}),d(n,r)},$$slots:{default:!0}}))},$={title:"Wrappers/Theme",component:T,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:B(b)},{Story:t}=w();var P=v('<div><h2>Title</h2> <p>Text with a <a href="#0">hyperlink</a>.</p></div>'),N=v("<!> <!> <!> <!> <!> <!>",1);function g(h,m){c(m,!1),D();var n=N(),l=_(n);t(l,{name:"Default light theme",args:{},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
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
</Theme>`}}}),d(h,n),k()}g.__docgen={data:[],name:"Theme.stories.svelte"};const a=x(g,$),j=["DefaultLightTheme","DarkTheme","PaleBlueTheme","BlueTheme","NavyBlueTheme","DarkWithBackgroundOverride"],z={...a.DefaultLightTheme,tags:["svelte-csf-v5"]},F={...a.DarkTheme,tags:["svelte-csf-v5"]},G={...a.PaleBlueTheme,tags:["svelte-csf-v5"]},H={...a.BlueTheme,tags:["svelte-csf-v5"]},I={...a.NavyBlueTheme,tags:["svelte-csf-v5"]},J={...a.DarkWithBackgroundOverride,tags:["svelte-csf-v5"]};export{H as BlueTheme,F as DarkTheme,J as DarkWithBackgroundOverride,z as DefaultLightTheme,I as NavyBlueTheme,G as PaleBlueTheme,j as __namedExportsOrder,$ as default};

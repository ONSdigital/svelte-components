import{ab as c,e as _,as as f,ae as s,a as d,ad as k,f as v,at as y}from"./iframe-Co_QNLkY.js";import{c as B,w as D,i as w,d as x}from"./create-runtime-stories-B90XeIRW.js";import{T}from"./Theme-B7i0xWjO.js";import{s as C}from"./style-CpnKKqKA.js";import"./preload-helper-Dp1pzeXC.js";import"./html-TMppYjmp.js";import"./slot-BP_Qo1ZM.js";import"./svelte-head-MJfDI7_k.js";import"./class-CeBqmdCp.js";import"./attributes-DayBpKoh.js";const b=`A component that sets the colour scheme of its child components using CSS variables.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Theme } from "@onsvisual/svelte-components";
<\/script>

<Theme theme="{light|dark|paleblue|blue|navyblue|grey}"> {child_components} </Theme>
\`\`\`
`,e=(h,m=f)=>{T(h,y(m,{children:(n,i)=>{var r=P();C(r,"",{},{padding:"12px"}),d(n,r)},$$slots:{default:!0}}))},$={title:"Wrappers/Theme",component:T,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:D(b)},{Story:t}=x();var P=v('<div><h2>Title</h2> <p>Text with a <a href="#0">hyperlink</a>.</p></div>'),N=v("<!> <!> <!> <!> <!> <!>",1);function g(h,m){c(m,!1),w();var n=N(),i=_(n);t(i,{name:"Default light theme",args:{},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var r=s(i,2);t(r,{name:"Dark theme",args:{theme:"dark"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var l=s(r,2);t(l,{name:"Pale blue theme",args:{theme:"paleblue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
	<div style:padding="12px">
		<h2>Title</h2>
		<p>Text with a <a href="#0">hyperlink</a>.</p>
	</div>
</Theme>`}}});var o=s(l,2);t(o,{name:"Blue theme",args:{theme:"blue"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
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
</Theme>`}}}),d(h,n),k()}g.__docgen={data:[],name:"Theme.stories.svelte"};const a=B(g,$),z=["DefaultLightTheme","DarkTheme","PaleBlueTheme","BlueTheme","NavyBlueTheme","DarkWithBackgroundOverride"],F={...a.DefaultLightTheme,tags:["svelte-csf-v5"]},G={...a.DarkTheme,tags:["svelte-csf-v5"]},H={...a.PaleBlueTheme,tags:["svelte-csf-v5"]},I={...a.BlueTheme,tags:["svelte-csf-v5"]},J={...a.NavyBlueTheme,tags:["svelte-csf-v5"]},K={...a.DarkWithBackgroundOverride,tags:["svelte-csf-v5"]};export{I as BlueTheme,G as DarkTheme,K as DarkWithBackgroundOverride,F as DefaultLightTheme,J as NavyBlueTheme,H as PaleBlueTheme,z as __namedExportsOrder,$ as default};

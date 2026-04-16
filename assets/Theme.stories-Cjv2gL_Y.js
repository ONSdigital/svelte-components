import{A as c,f as d,m as _,W as f,J as s,j as v,I as k,X as y}from"./iframe-CBlEiR9q.js";import{w as B,c as D,i as w,d as x}from"./create-runtime-stories-Vu0KM0dN.js";import{s as C}from"./style-CNURdi_Z.js";import{T}from"./Theme-Dw2kVv0j.js";import"./attributes-q36Eg1F8.js";import"./svelte-head-kq_NugBc.js";import"./html-scx_uhv9.js";import"./slot-BP_Qo1ZM.js";import"./class-B9SFUanI.js";const b=`A component that sets the colour scheme of its child components using CSS variables.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Theme } from "@onsvisual/svelte-components";
<\/script>

<Theme theme="{light|dark|paleblue|blue|navyblue|grey}"> {child_components} </Theme>
\`\`\`
`,e=(h,m=f)=>{T(h,y(m,{children:(n,l)=>{var r=P();C(r,"",{},{padding:"12px"}),v(n,r)},$$slots:{default:!0}}))},$={title:"Wrappers/Theme",component:T,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:B(b)},{Story:t}=x();var P=d('<div><h2>Title</h2> <p>Text with a <a href="#0">hyperlink</a>.</p></div>'),W=d("<!> <!> <!> <!> <!> <!>",1);function g(h,m){c(m,!1),w();var n=W(),l=_(n);t(l,{name:"Default light theme",args:{},get template(){return e},parameters:{__svelteCsf:{rawCode:`<Theme {...args}>
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
</Theme>`}}}),v(h,n),k()}g.__docgen={data:[],name:"Theme.stories.svelte"};const a=D(g,$),J=["DefaultLightTheme","DarkTheme","PaleBlueTheme","BlueTheme","NavyBlueTheme","DarkWithBackgroundOverride"],M={...a.DefaultLightTheme,tags:["svelte-csf-v5"]},R={...a.DarkTheme,tags:["svelte-csf-v5"]},X={...a.PaleBlueTheme,tags:["svelte-csf-v5"]},z={...a.BlueTheme,tags:["svelte-csf-v5"]},F={...a.NavyBlueTheme,tags:["svelte-csf-v5"]},G={...a.DarkWithBackgroundOverride,tags:["svelte-csf-v5"]};export{z as BlueTheme,R as DarkTheme,G as DarkWithBackgroundOverride,M as DefaultLightTheme,F as NavyBlueTheme,X as PaleBlueTheme,J as __namedExportsOrder,$ as default};

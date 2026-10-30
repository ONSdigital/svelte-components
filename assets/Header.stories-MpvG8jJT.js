import{ab as _,e as h,ah as t,a as f,ad as v,f as C}from"./iframe-KpSyCse9.js";import{c as u,w as H,i as k,d as D}from"./create-runtime-stories-B9Qx1gAn.js";import{H as w}from"./Header-DVw1G58g.js";import"./preload-helper-Dp1pzeXC.js";import"./each-BrzkDhQl.js";import"./attributes-B8eluhLe.js";import"./class-BXNpPotE.js";import"./attributes-DayBpKoh.js";import"./this-DC7r8CIX.js";import"./Theme-B2zBHxcI.js";import"./html-BMA1lw-v.js";import"./slot-BP_Qo1ZM.js";import"./svelte-head-ifkohPjB.js";import"./style-DJ2HlsXg.js";import"./Container-x1FdS4pd.js";import"./SkipLink-CS6xd2fi.js";const T=`A header component with compact mode and theming options.

In Svelte 5, replace the named \`before\` and \`after\` slots with snippets of the same names. Navigation handlers are released when the header unmounts.

\`\`\`svelte
<Header>
	{#snippet before()}<p>Before the header</p>{/snippet}
	{#snippet after()}<p>After the header</p>{/snippet}
</Header>
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Header } from "@onsvisual/svelte-components";
<\/script>

<Header />
<!-- page body -->
\`\`\`
`,y={title:"Layout/Header",component:w,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...H(T),layout:"fullscreen"}},{Story:e}=D();var L=C("<!> <!> <!> <!> <!> <!> <!>",1);function c(d,l){_(l,!1),k();var r=L(),s=h(r);e(s,{name:"Default",args:{},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var o=t(s,2);e(o,{name:"Dark mode",args:{theme:"dark"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var n=t(o,2);e(n,{name:"Compact",args:{compact:!0,headerBorder:!0},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var m=t(n,2);e(m,{name:"Compact with page title",args:{compact:!0,title:"Page title"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var p=t(m,2);e(p,{name:"Compact with page title and nav links",args:{compact:!0,title:"Page title",navLinks:[{label:"Home",href:""},{label:"Some page",href:"#0"},{label:"Another page",href:"#1"}]},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var i=t(p,2);e(i,{name:"Compact dark theme",args:{compact:!0,title:"Page title",theme:"dark"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var g=t(i,2);e(g,{name:"Legacy header",args:{legacy:!0},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}}),f(d,r),v()}c.__docgen={data:[],name:"Header.stories.svelte"};const a=u(c,y),z=["Default","DarkMode","Compact","CompactWithPageTitle","CompactWithPageTitleAndNavLinks","CompactDarkTheme","LegacyHeader"],F={...a.Default,tags:["svelte-csf-v5"]},G={...a.DarkMode,tags:["svelte-csf-v5"]},J={...a.Compact,tags:["svelte-csf-v5"]},K={...a.CompactWithPageTitle,tags:["svelte-csf-v5"]},Q={...a.CompactWithPageTitleAndNavLinks,tags:["svelte-csf-v5"]},U={...a.CompactDarkTheme,tags:["svelte-csf-v5"]},V={...a.LegacyHeader,tags:["svelte-csf-v5"]};export{J as Compact,U as CompactDarkTheme,K as CompactWithPageTitle,Q as CompactWithPageTitleAndNavLinks,G as DarkMode,F as Default,V as LegacyHeader,z as __namedExportsOrder,y as default};

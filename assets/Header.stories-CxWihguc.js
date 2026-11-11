import{ad as h,h as _,ah as t,a as f,af as v,f as C}from"./iframe-CpnTW6Aq.js";import{c as u,w as H,i as k,d as D}from"./create-runtime-stories-C7cZUBmE.js";import{H as w}from"./Header-FQyzlnv1.js";import"./preload-helper-Dp1pzeXC.js";import"./each-fvhRyThL.js";import"./attributes-DMUiWW_Z.js";import"./class-B_F942N2.js";import"./attributes-DayBpKoh.js";import"./this-VMJU2kKR.js";import"./Theme-C5W1PJ9k.js";import"./html-BFPf_PCX.js";import"./svelte-head-Dh_GIgDE.js";import"./style-BD_XJmem.js";import"./Container-DX8kexNK.js";import"./SkipLink-CibVfeIQ.js";const T=`A header component with compact mode and theming options.

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
`,y={title:"Layout/Header",component:w,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...H(T),layout:"fullscreen"}},{Story:e}=D();var L=C("<!> <!> <!> <!> <!> <!> <!>",1);function c(d,l){h(l,!1),k();var r=L(),s=_(r);e(s,{name:"Default",args:{},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var o=t(s,2);e(o,{name:"Dark mode",args:{theme:"dark"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var n=t(o,2);e(n,{name:"Compact",args:{compact:!0,headerBorder:!0},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var m=t(n,2);e(m,{name:"Compact with page title",args:{compact:!0,title:"Page title"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var p=t(m,2);e(p,{name:"Compact with page title and nav links",args:{compact:!0,title:"Page title",navLinks:[{label:"Home",href:""},{label:"Some page",href:"#0"},{label:"Another page",href:"#1"}]},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var i=t(p,2);e(i,{name:"Compact dark theme",args:{compact:!0,title:"Page title",theme:"dark"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var g=t(i,2);e(g,{name:"Legacy header",args:{legacy:!0},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}}),f(d,r),v()}c.__docgen={data:[],name:"Header.stories.svelte"};const a=u(c,y),q=["Default","DarkMode","Compact","CompactWithPageTitle","CompactWithPageTitleAndNavLinks","CompactDarkTheme","LegacyHeader"],z={...a.Default,tags:["svelte-csf-v5"]},F={...a.DarkMode,tags:["svelte-csf-v5"]},G={...a.Compact,tags:["svelte-csf-v5"]},J={...a.CompactWithPageTitle,tags:["svelte-csf-v5"]},K={...a.CompactWithPageTitleAndNavLinks,tags:["svelte-csf-v5"]},Q={...a.CompactDarkTheme,tags:["svelte-csf-v5"]},U={...a.LegacyHeader,tags:["svelte-csf-v5"]};export{G as Compact,Q as CompactDarkTheme,J as CompactWithPageTitle,K as CompactWithPageTitleAndNavLinks,F as DarkMode,z as Default,U as LegacyHeader,q as __namedExportsOrder,y as default};

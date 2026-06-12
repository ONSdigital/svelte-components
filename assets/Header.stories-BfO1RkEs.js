import{ab as _,e as g,ae as t,a as f,ad as v,f as C}from"./iframe-BXhLknc8.js";import{c as h,w as u,i as H,d as D}from"./create-runtime-stories-Dqy-MK43.js";import{H as k}from"./Header-DBcJKTCm.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-DxUDVNkB.js";import"./class-B_H6VdUK.js";import"./attributes-DayBpKoh.js";import"./Theme-BPJQ4_v0.js";import"./html-BbSZWl3K.js";import"./svelte-head-B3nLLHw1.js";import"./style-Bh8WYJbr.js";import"./Container-DGYbUvGP.js";import"./SkipLink-CtWdlKTK.js";import"./each-CkIz-BVB.js";import"./this-ouOfSZjZ.js";const y=`A header component with compact mode and theming options.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Header } from "@onsvisual/svelte-components";
<\/script>

<Header />
<!-- page body -->
\`\`\`
`,w={title:"Layout/Header",component:k,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...u(y),layout:"fullscreen"}},{Story:e}=D();var T=C("<!> <!> <!> <!> <!> <!>",1);function n(i,d){_(d,!1),H();var r=T(),o=g(r);e(o,{name:"Default",args:{},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var s=t(o,2);e(s,{name:"Dark mode",args:{theme:"dark"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var m=t(s,2);e(m,{name:"Compact",args:{compact:!0,headerBorder:!0},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var c=t(m,2);e(c,{name:"Compact with page title",args:{compact:!0,title:"Page title"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var p=t(c,2);e(p,{name:"Compact dark theme",args:{compact:!0,title:"Page title",theme:"dark"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var l=t(p,2);e(l,{name:"Legacy header",args:{legacy:!0},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}}),f(i,r),v()}n.__docgen={data:[],name:"Header.stories.svelte"};const a=h(n,w),F=["Default","DarkMode","Compact","CompactWithPageTitle","CompactDarkTheme","LegacyHeader"],G={...a.Default,tags:["svelte-csf-v5"]},I={...a.DarkMode,tags:["svelte-csf-v5"]},J={...a.Compact,tags:["svelte-csf-v5"]},K={...a.CompactWithPageTitle,tags:["svelte-csf-v5"]},N={...a.CompactDarkTheme,tags:["svelte-csf-v5"]},Q={...a.LegacyHeader,tags:["svelte-csf-v5"]};export{J as Compact,N as CompactDarkTheme,K as CompactWithPageTitle,I as DarkMode,G as Default,Q as LegacyHeader,F as __namedExportsOrder,w as default};

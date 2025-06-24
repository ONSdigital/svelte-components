import{p as l,j as d,f as _,k as a,e as g,h as f}from"./iframe-7cEVqKzQ.js";import{w as C,c as h,i as v,d as u}from"./create-runtime-stories-CKAPtYBs.js";import{H as D}from"./Header-DHQ48Dwa.js";import"./each-Bg74oAVh.js";import"./slot-BP_Qo1ZM.js";import"./attributes-GFejj3_h.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./event-modifiers-CWmzcjye.js";import"./Theme-BhHlwmD8.js";import"./svelte-head-B5hjQbmX.js";import"./html-FUsQury4.js";import"./SkipLink-Bf9wEH1o.js";const H=`A header component with compact mode and theming options.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Header } from "@onsvisual/svelte-components";
<\/script>

<Header />
<!-- page body -->
\`\`\`
`,T={title:"Layout/Header",component:D,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...C(H),layout:"fullscreen"}},{Story:e}=u();var w=d("<!> <!> <!> <!>",1);function p(n,c){l(c,!1),v();var o=w(),r=_(o);e(r,{name:"Default",args:{},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var s=a(r,2);e(s,{name:"Compact",args:{compact:!0},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var m=a(s,2);e(m,{name:"Compact with page title",args:{compact:!0,title:"Page title"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}});var i=a(m,2);e(i,{name:"Compact dark theme",args:{compact:!0,title:"Page title",theme:"dark"},parameters:{__svelteCsf:{rawCode:"<Header {...args} />"}}}),g(n,o),f()}p.__docgen={data:[],name:"Header.stories.svelte"};const t=h(p,T),R=["Default","Compact","CompactWithPageTitle","CompactDarkTheme"],q={...t.Default,tags:["svelte-csf-v5"]},z={...t.Compact,tags:["svelte-csf-v5"]},B={...t.CompactWithPageTitle,tags:["svelte-csf-v5"]},F={...t.CompactDarkTheme,tags:["svelte-csf-v5"]};export{z as Compact,F as CompactDarkTheme,B as CompactWithPageTitle,q as Default,R as __namedExportsOrder,T as default};

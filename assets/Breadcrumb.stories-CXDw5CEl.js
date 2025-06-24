import{p as m,j as p,f as c,k as l,e as d,h as f}from"./iframe-CbtXQGpi.js";import{w as u,c as g,i as _,d as b}from"./create-runtime-stories-C0J-SdQq.js";import{B as h}from"./Breadcrumb-B98Mv1Qr.js";import"./each-DwLTWgD7.js";import"./attributes-DtFI45NK.js";import"./Container-CzvVM84S.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./Theme-D58XjzIJ.js";import"./svelte-head-CIbjcyE-.js";import"./html-BPrvTsL-.js";const v=`Displays a breadcrumb with the current page's parents.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/breadcrumbs).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Breadcrumb } from "@onsvisual/svelte-components";
<\/script>

<Breadcrumb links="{[
  {label: 'Home', href: '/'},
  {label: 'Parent page', href: '/parent'}
]}" />
\`\`\`
`,k={title:"Layout/Breadcrumb",component:h,tags:["autodocs"],argTypes:{},parameters:u(v)},{Story:r}=b();var B=p("<!> <!>",1);function t(n,o){m(o,!1),_();var e=B(),a=c(e);r(a,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=l(a,2);r(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),d(n,e),f()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=g(t,k),M=["Default","SingleBackLink"],N={...s.Default,tags:["svelte-csf-v5"]},R={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{N as Default,R as SingleBackLink,M as __namedExportsOrder,k as default};

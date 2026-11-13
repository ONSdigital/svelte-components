import{ad as m,h as p,ah as c,a as l,af as d,f}from"./iframe-UWIgwT_c.js";import{c as g,w as u,i as _,d as b}from"./create-runtime-stories-WntTm4wH.js";import{B as h}from"./Breadcrumb-C7B6lTjs.js";import"./preload-helper-Dp1pzeXC.js";import"./each-28trRlzV.js";import"./attributes-CxnnJe_I.js";import"./Container-v_P6jV09.js";import"./class-BWaliKvu.js";import"./attributes-DayBpKoh.js";import"./style-JgESTiB5.js";import"./Theme-CfO7ibUV.js";import"./html-Dw2gjOR2.js";import"./svelte-head-HqhQydw-.js";const v=`Displays a breadcrumb with the current page's parents.

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
`,B={title:"Navigation/Breadcrumb",component:h,tags:["autodocs"],argTypes:{},parameters:u(v)},{Story:r}=b();var k=f("<!> <!>",1);function t(n,o){m(o,!1),_();var e=k(),a=p(e);r(a,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=c(a,2);r(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),l(n,e),d()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=g(t,B),M=["Default","SingleBackLink"],R={...s.Default,tags:["svelte-csf-v5"]},T={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{R as Default,T as SingleBackLink,M as __namedExportsOrder,B as default};

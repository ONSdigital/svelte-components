import{ab as m,e as p,ae as c,a as l,ad as d,f}from"./iframe-BcdENC7h.js";import{c as g,w as u,i as _,d as b}from"./create-runtime-stories-COFYPYU4.js";import{B as v}from"./Breadcrumb-mCgSsA6a.js";import"./preload-helper-Dp1pzeXC.js";import"./each-B7bVhJfo.js";import"./attributes-BzKq5yPS.js";import"./Container-B7rT0CwL.js";import"./slot-BP_Qo1ZM.js";import"./class-C7BSudz7.js";import"./attributes-DayBpKoh.js";import"./style-CI2VMp_K.js";import"./Theme-D5q6hWpf.js";import"./html-lwdYkK5D.js";import"./svelte-head-Cfrs9Ucy.js";const h=`Displays a breadcrumb with the current page's parents.

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
`,B={title:"Navigation/Breadcrumb",component:v,tags:["autodocs"],argTypes:{},parameters:u(h)},{Story:r}=b();var k=f("<!> <!>",1);function t(n,o){m(o,!1),_();var e=k(),a=p(e);r(a,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=c(a,2);r(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),l(n,e),d()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=g(t,B),R=["Default","SingleBackLink"],T={...s.Default,tags:["svelte-csf-v5"]},j={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{T as Default,j as SingleBackLink,R as __namedExportsOrder,B as default};

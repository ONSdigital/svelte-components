import{ab as m,e as p,ae as c,a as l,ad as d,f}from"./iframe-BR4MEgmA.js";import{c as g,w as u,i as _,d as b}from"./create-runtime-stories-BCU5wvzh.js";import{B as v}from"./Breadcrumb-BQzLTcDS.js";import"./preload-helper-Dp1pzeXC.js";import"./each-DhaaMYCt.js";import"./attributes-Dhuqf2bR.js";import"./Container-h44kZGoY.js";import"./slot-BP_Qo1ZM.js";import"./class-BRzkbxqU.js";import"./attributes-DayBpKoh.js";import"./style-B5SUVlSu.js";import"./Theme-BGRdr0bW.js";import"./html-CETvwEQT.js";import"./svelte-head-BVcXiqEj.js";const h=`Displays a breadcrumb with the current page's parents.

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

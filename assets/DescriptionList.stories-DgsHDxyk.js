import{ab as n,g as a,ad as i,H as r}from"./iframe-Bh76Ldbd.js";import{c as m,w as p,i as c,d as l}from"./create-runtime-stories-r8ea5hGa.js";import{D as u}from"./DescriptionList-DUv6dH6Z.js";import"./preload-helper-Dp1pzeXC.js";import"./each-DHtZNaHZ.js";import"./html-CHQkF12n.js";import"./attributes-XPdVoopB.js";import"./class-D_ofMv_m.js";import"./attributes-DayBpKoh.js";const f=`A component to display metadata in a tabular format.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/description-list).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { DescriptionList } from "@onsvisual/svelte-components";
  
  const items = [
    { key: "Survey", value: "Bricks & Blocks" },
    { key: "RU Refs", value: [49900000118, 49300005832]},
    { key: "To", value: "<a href='mailto:'>A Person</a>"}
  ];
<\/script>

<DescriptionList {items}/>
\`\`\`
`,d=[{key:"Survey",value:"Bricks & Blocks"},{key:"RU Refs",value:[49900000118,49300005832]},{key:"To",value:"<a href='mailto:'>A Person</a>"}],v={title:"Information and media/DescriptionList",component:u,tags:["autodocs"],argTypes:{},parameters:p(f)},{Story:D}=l();function t(e,s){n(s,!1),c();{let o=r(()=>({items:d}));D(e,{name:"Default",get args(){return a(o)},parameters:{__svelteCsf:{rawCode:"<DescriptionList {...args} />"}}})}i()}t.__docgen={data:[],name:"DescriptionList.stories.svelte"};const _=m(t,v),w=["Default"],A={..._.Default,tags:["svelte-csf-v5"]};export{A as Default,w as __namedExportsOrder,v as default};

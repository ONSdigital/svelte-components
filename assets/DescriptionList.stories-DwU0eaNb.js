import{p as n,g as i,o as a,h as r}from"./iframe-BBaiAZ6I.js";import{w as p,c,i as m,d as l}from"./create-runtime-stories-B9kkyQux.js";import{D as u}from"./DescriptionList-D4TD1dzR.js";import"./each-Cz2dZcRa.js";import"./html-DY-N1rpM.js";import"./attributes-D_GwmEyU.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";const f=`A component to display metadata in a tabular format.

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
`,v=[{key:"Survey",value:"Bricks & Blocks"},{key:"RU Refs",value:[49900000118,49300005832]},{key:"To",value:"<a href='mailto:'>A Person</a>"}],d={title:"Layout/DescriptionList",component:u,tags:["autodocs"],argTypes:{},parameters:p(f)},{Story:D}=l();function e(t,s){n(s,!1),m();const o=a(()=>({items:v}));D(t,{name:"Default",get args(){return i(o)},parameters:{__svelteCsf:{rawCode:"<DescriptionList {...args} />"}}}),r()}e.__docgen={data:[],name:"DescriptionList.stories.svelte"};const _=c(e,d),w=["Default"],x={..._.Default,tags:["svelte-csf-v5"]};export{x as Default,w as __namedExportsOrder,d as default};

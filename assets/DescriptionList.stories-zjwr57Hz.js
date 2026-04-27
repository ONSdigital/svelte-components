import{A as n,G as i,h as a,I as r}from"./iframe-rn-CYE4_.js";import{w as m,c,i as p,d as l}from"./create-runtime-stories-DUShD_-p.js";import{D as u}from"./DescriptionList-Brk9vaMj.js";import"./each-CTmPshpe.js";import"./html-DutQzZpu.js";import"./attributes-DzjqHavG.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";const f=`A component to display metadata in a tabular format.

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
`,d=[{key:"Survey",value:"Bricks & Blocks"},{key:"RU Refs",value:[49900000118,49300005832]},{key:"To",value:"<a href='mailto:'>A Person</a>"}],v={title:"Information and media/DescriptionList",component:u,tags:["autodocs"],argTypes:{},parameters:m(f)},{Story:D}=l();function e(t,s){n(s,!1),p();const o=a(()=>({items:d}));D(t,{name:"Default",get args(){return i(o)},parameters:{__svelteCsf:{rawCode:"<DescriptionList {...args} />"}}}),r()}e.__docgen={data:[],name:"DescriptionList.stories.svelte"};const _=c(e,v),A=["Default"],w={..._.Default,tags:["svelte-csf-v5"]};export{w as Default,A as __namedExportsOrder,v as default};

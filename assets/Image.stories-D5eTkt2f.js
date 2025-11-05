import{a as e,j as g,i as b,t as o,e as p,k as I,n as m,q as w,p as x,h as D}from"./iframe-Cap6nYun.js";import{w as S,c as C,i as V,d as W}from"./create-runtime-stories-BOuZQ2dE.js";import{s as c}from"./attributes-3iI9tcbp.js";import{s as j}from"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";var O=g('<figcaption class="ons-image__caption"> </figcaption>'),A=g('<figure><img class="ons-image__img"/> <!></figure>');function u(a,t){let f=e(t,"src",8,null),y=e(t,"alt",8,null),r=e(t,"caption",8,null),v=e(t,"cls",8,null);var s=A(),i=m(s),_=I(i,2);{var h=n=>{var l=O(),k=m(l);o(()=>w(k,r())),p(n,l)};b(_,n=>{r()&&n(h)})}o(()=>{j(s,1,`ons-image ${v()??""}`),c(i,"src",f()),c(i,"alt",y())}),p(a,s)}u.__docgen={data:[{name:"src",visibility:"public",description:"The URL of the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"alt",visibility:"public",description:"An alternative text for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"caption",visibility:"public",description:"A visible caption for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Image.svelte"};const L=`Insert an image with an optional caption.\r
\r
Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/image).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Image } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Image\r
  src="https://service-manual.ons.gov.uk/img/small/woman-in-purple-dress-shirt.jpg"\r
  alt="Woman in a purple dress shirt using a laptop"\r
  caption="Image 1 - Woman in a purple dress shirt using a laptop" />\r
\`\`\`\r
`,R={title:"Layout/Image",component:u,tags:["autodocs"],argTypes:{},parameters:S(L)},{Story:T}=W();function d(a,t){x(t,!1),V(),T(a,{name:"Default",args:{src:"https://service-manual.ons.gov.uk/img/small/woman-in-purple-dress-shirt.jpg",alt:"Woman in a purple dress shirt using a laptop",caption:"Image 1 - Woman in a purple dress shirt using a laptop"},parameters:{__svelteCsf:{rawCode:"<Image {...args} />"}}}),D()}d.__docgen={data:[],name:"Image.stories.svelte"};const q=C(d,R),z=["Default"],F={...q.Default,tags:["svelte-csf-v5"]};export{F as Default,z as __namedExportsOrder,R as default};

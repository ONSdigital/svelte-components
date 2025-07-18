import{a as e,j as g,i as b,t as l,e as p,k as I,n as m,q as w,p as x,h as D}from"./iframe-Bt5qH5ZQ.js";import{w as S,c as C,i as V,d as W}from"./create-runtime-stories-BkV0ZRSv.js";import{s as c}from"./attributes-Lq-0W55G.js";import{s as j}from"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";var O=g('<figcaption class="ons-image__caption"> </figcaption>'),A=g('<figure><img class="ons-image__img"/> <!></figure>');function d(a,t){let f=e(t,"src",8,""),y=e(t,"alt",8,""),o=e(t,"caption",8,""),v=e(t,"cls",8,"");var s=A(),i=m(s),_=I(i,2);{var h=n=>{var r=O(),k=m(r);l(()=>w(k,o())),p(n,r)};b(_,n=>{o()&&n(h)})}l(()=>{j(s,1,`ons-image ${v()??""}`),c(i,"src",f()),c(i,"alt",y())}),p(a,s)}d.__docgen={data:[{name:"src",visibility:"public",description:"The URL of the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"alt",visibility:"public",description:"An alternative text for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"caption",visibility:"public",description:"A visible caption for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"Image.svelte"};const L=`Insert an image with an optional caption.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/image).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Image } from "@onsvisual/svelte-components";
<\/script>

<Image
  src="https://service-manual.ons.gov.uk/img/small/woman-in-purple-dress-shirt.jpg"
  alt="Woman in a purple dress shirt using a laptop"
  caption="Image 1 - Woman in a purple dress shirt using a laptop" />
\`\`\`
`,R={title:"Layout/Image",component:d,tags:["autodocs"],argTypes:{},parameters:S(L)},{Story:T}=W();function u(a,t){x(t,!1),V(),T(a,{name:"Default",args:{src:"https://service-manual.ons.gov.uk/img/small/woman-in-purple-dress-shirt.jpg",alt:"Woman in a purple dress shirt using a laptop",caption:"Image 1 - Woman in a purple dress shirt using a laptop"},parameters:{__svelteCsf:{rawCode:"<Image {...args} />"}}}),D()}u.__docgen={data:[],name:"Image.stories.svelte"};const q=C(u,R),z=["Default"],F={...q.Default,tags:["svelte-csf-v5"]};export{F as Default,z as __namedExportsOrder,R as default};

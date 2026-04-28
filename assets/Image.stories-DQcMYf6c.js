import{p as e,f as g,i as I,t as r,j as p,J as b,k as m,K as w,A as x,I as D}from"./iframe-IP6ocM0a.js";import{w as S,c as C,i as V,d as W}from"./create-runtime-stories-BvMOJ_th.js";import{s as c}from"./attributes-CBM4GyKF.js";import{s as j}from"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";var A=g('<figcaption class="ons-image__caption"> </figcaption>'),O=g('<figure><img class="ons-image__img"/> <!></figure>');function u(a,t){let f=e(t,"src",8,null),y=e(t,"alt",8,null),o=e(t,"caption",8,null),v=e(t,"cls",8,null);var s=O(),i=m(s),_=b(i,2);{var h=n=>{var l=A(),k=m(l);r(()=>w(k,o())),p(n,l)};I(_,n=>{o()&&n(h)})}r(()=>{j(s,1,`ons-image ${v()??""}`),c(i,"src",f()),c(i,"alt",y())}),p(a,s)}u.__docgen={data:[{name:"src",visibility:"public",description:"The URL of the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"alt",visibility:"public",description:"An alternative text for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"caption",visibility:"public",description:"A visible caption for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Image.svelte"};const R=`Insert an image with an optional caption.

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
`,T={title:"Information and media/Image",component:u,tags:["autodocs"],argTypes:{},parameters:S(R)},{Story:B}=W();function d(a,t){x(t,!1),V(),B(a,{name:"Default",args:{src:"https://service-manual.ons.gov.uk/img/small/woman-in-purple-dress-shirt.jpg",alt:"Woman in a purple dress shirt using a laptop",caption:"Image 1 - Woman in a purple dress shirt using a laptop"},parameters:{__svelteCsf:{rawCode:"<Image {...args} />"}}}),D()}d.__docgen={data:[],name:"Image.stories.svelte"};const E=C(d,T),U=["Default"],q={...E.Default,tags:["svelte-csf-v5"]};export{q as Default,U as __namedExportsOrder,T as default};

import{p as e,i as b,t as r,a as p,f as g,ae as I,c as m,s as w,ab as x,ad as D}from"./iframe-BR4MEgmA.js";import{c as S,w as C,i as V,d as W}from"./create-runtime-stories-BCU5wvzh.js";import{s as c}from"./attributes-Dhuqf2bR.js";import{s as O}from"./class-BRzkbxqU.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var j=g('<figcaption class="ons-image__caption"> </figcaption>'),A=g('<figure><img class="ons-image__img"/> <!></figure>');function u(a,t){let f=e(t,"src",8,null),y=e(t,"alt",8,null),o=e(t,"caption",8,null),v=e(t,"cls",8,null);var s=A(),i=m(s),_=I(i,2);{var h=n=>{var l=j(),k=m(l);r(()=>w(k,o())),p(n,l)};b(_,n=>{o()&&n(h)})}r(()=>{O(s,1,`ons-image ${v()??""}`),c(i,"src",f()),c(i,"alt",y())}),p(a,s)}u.__docgen={data:[{name:"src",visibility:"public",description:"The URL of the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"alt",visibility:"public",description:"An alternative text for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"caption",visibility:"public",description:"A visible caption for the image",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Image.svelte"};const R=`Insert an image with an optional caption.

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
`,T={title:"Information and media/Image",component:u,tags:["autodocs"],argTypes:{},parameters:C(R)},{Story:B}=W();function d(a,t){x(t,!1),V(),B(a,{name:"Default",args:{src:"https://service-manual.ons.gov.uk/img/small/woman-in-purple-dress-shirt.jpg",alt:"Woman in a purple dress shirt using a laptop",caption:"Image 1 - Woman in a purple dress shirt using a laptop"},parameters:{__svelteCsf:{rawCode:"<Image {...args} />"}}}),D()}d.__docgen={data:[],name:"Image.stories.svelte"};const E=S(d,T),F=["Default"],G={...E.Default,tags:["svelte-csf-v5"]};export{G as Default,F as __namedExportsOrder,T as default};

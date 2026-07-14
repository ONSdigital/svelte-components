import{ab as V,ai as J,p as r,i as x,t as l,a as o,ad as w,f as d,ae as p,c as t,g as a,u as m,s as _,aj as K,H as L}from"./iframe-Cm8Z88bU.js";import{i as C,c as P,w as Q,d as U}from"./create-runtime-stories-B6v954qL.js";import{e as W,i as X}from"./each-DbrIlhHV.js";import{s as D}from"./attributes-CVnBJKWV.js";import{s as Y}from"./class-Dwepb_fl.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var Z=d('<h2 class="ons-summary__group-title"> </h2>'),$=d('<a class="ons-summary__button"><span class="ons-summary__button-text" aria-hidden="true">Change</span> <span class="ons-u-vh">Change value</span></a>'),ee=d('<div class="ons-summary__item"><dt class="ons-summary__item-title"><div class="ons-summary__item--text"> </div></dt> <dd class="ons-summary__values"><span class="ons-summary__text"> </span></dd> <dd class="ons-summary__actions" id="sales-dates"><!></dd></div>'),ae=d('<div><div class="ons-summary__group"><!> <dl class="ons-summary__items"></dl></div></div>');function A(u,s){V(s,!1);const c=J();let j=r(s,"id",8,null),h=r(s,"title",8,null),q=r(s,"items",24,()=>[]),E=r(s,"cls",8,null);function F(n){c("change",{item:n})}C();var v=ae(),g=t(v),b=t(g);{var I=n=>{var e=Z(),i=t(e);l(()=>_(i,h())),o(n,e)};x(b,n=>{h()&&n(I)})}var T=p(b,2);W(T,5,q,X,(n,e)=>{var i=ee(),k=t(i),B=t(k),H=t(B),S=p(k,2),M=t(S),N=t(M),R=p(S,2),z=t(R);{var G=y=>{var f=$();l(()=>D(f,"href",(a(e),m(()=>a(e).href||"#0")))),K("click",f,()=>F(a(e))),o(y,f)};x(z,y=>{a(e),m(()=>a(e).href||a(e).editable)&&y(G)})}l(()=>{_(H,(a(e),m(()=>a(e).key))),_(N,(a(e),m(()=>a(e).value)))}),o(n,i)}),l(()=>{Y(v,1,`ons-summary ${E()??""}`),D(g,"id",j())}),o(u,v),w()}A.__docgen={data:[{name:"id",visibility:"public",description:"A unique ID for the summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"title",visibility:"public",description:"Title for summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Array of items in format {key, value, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Summary.svelte"};const te=`A summary table for selected variables etc.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/summary).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Summary } from "@onsvisual/svelte-components";

  let items = [
    { key: "First item", value: "Value of first item" },
    { key: "Second item", value: "Value of second item (that can be changed)", href: "#" }
  ];
<\/script>

<Summary {items}/>
\`\`\`
`,se=[{key:"First item",value:"Value of first item"},{key:"Second item",value:"Value of second item (that can be changed)",href:"#"}],ne={title:"Information and media/Summary",component:A,tags:["autodocs"],argTypes:{},parameters:Q(te)},{Story:ie}=U();function O(u,s){V(s,!1),C();{let c=L(()=>({items:se}));ie(u,{name:"Default",get args(){return a(c)},parameters:{__svelteCsf:{rawCode:"<Summary {...args} />"}}})}w()}O.__docgen={data:[],name:"Summary.stories.svelte"};const re=P(O,ne),ye=["Default"],fe={...re.Default,tags:["svelte-csf-v5"]};export{fe as Default,ye as __namedExportsOrder,ne as default};

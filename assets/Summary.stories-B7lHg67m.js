import{ab as V,af as J,p as r,i as x,t as l,a as o,ad as w,f as d,ae as p,c as t,g as a,u as m,s as _,ag as K,H as L}from"./iframe-CwzZm-HX.js";import{i as C,c as P,w as Q,d as U}from"./create-runtime-stories-DdjfTBf5.js";import{e as W,i as X}from"./each-CDLgP4DF.js";import{s as D}from"./attributes-BRwL7M1-.js";import{s as Y}from"./class-hYlXPFSz.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var Z=d('<h2 class="ons-summary__group-title"> </h2>'),$=d('<a class="ons-summary__button"><span class="ons-summary__button-text" aria-hidden="true">Change</span> <span class="ons-u-vh">Change value</span></a>'),ee=d('<div class="ons-summary__item"><dt class="ons-summary__item-title"><div class="ons-summary__item--text"> </div></dt> <dd class="ons-summary__values"><span class="ons-summary__text"> </span></dd> <dd class="ons-summary__actions" id="sales-dates"><!></dd></div>'),ae=d('<div><div class="ons-summary__group"><!> <dl class="ons-summary__items"></dl></div></div>');function A(u,s){V(s,!1);const c=J();let q=r(s,"id",8,null),h=r(s,"title",8,null),E=r(s,"items",24,()=>[]),F=r(s,"cls",8,null);function I(n){c("change",{item:n})}C();var f=ae(),g=t(f),b=t(g);{var T=n=>{var e=Z(),i=t(e);l(()=>_(i,h())),o(n,e)};x(b,n=>{h()&&n(T)})}var j=p(b,2);W(j,5,E,X,(n,e)=>{var i=ee(),k=t(i),B=t(k),H=t(B),S=p(k,2),M=t(S),N=t(M),R=p(S,2),z=t(R);{var G=v=>{var y=$();l(()=>D(y,"href",(a(e),m(()=>a(e).href||"#0")))),K("click",y,()=>I(a(e))),o(v,y)};x(z,v=>{a(e),m(()=>a(e).href||a(e).editable)&&v(G)})}l(()=>{_(H,(a(e),m(()=>a(e).key))),_(N,(a(e),m(()=>a(e).value)))}),o(n,i)}),l(()=>{Y(f,1,`ons-summary ${F()??""}`),D(g,"id",q())}),o(u,f),w()}A.__docgen={data:[{name:"id",visibility:"public",description:"A unique ID for the summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"title",visibility:"public",description:"Title for summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Array of items in format {key, value, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Summary.svelte"};const te=`A summary table for selected variables etc.

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
`,se=[{key:"First item",value:"Value of first item"},{key:"Second item",value:"Value of second item (that can be changed)",href:"#"}],ne={title:"Information and media/Summary",component:A,tags:["autodocs"],argTypes:{},parameters:Q(te)},{Story:ie}=U();function O(u,s){V(s,!1),C();{let c=L(()=>({items:se}));ie(u,{name:"Default",get args(){return a(c)},parameters:{__svelteCsf:{rawCode:"<Summary {...args} />"}}})}w()}O.__docgen={data:[],name:"Summary.stories.svelte"};const re=P(O,ne),ve=["Default"],ye={...re.Default,tags:["svelte-csf-v5"]};export{ye as Default,ve as __namedExportsOrder,ne as default};

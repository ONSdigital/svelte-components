import{A as D,P,p as r,f as m,i as S,t as l,j as o,I as V,J as f,k as t,K as p,G as n,Q,h as R}from"./iframe-CBlEiR9q.js";import{i as w,w as z,c as H,d as L}from"./create-runtime-stories-Vu0KM0dN.js";import{e as U,i as W}from"./each-CfU90zbu.js";import{s as x}from"./attributes-TOcdGcVq.js";import{s as X}from"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";var Y=m('<h2 class="ons-summary__group-title"> </h2>'),Z=m('<a class="ons-summary__button"><span class="ons-summary__button-text" aria-hidden="true">Change</span> <span class="ons-u-vh">Change value</span></a>'),$=m('<div class="ons-summary__item"><dt class="ons-summary__item-title"><div class="ons-summary__item--text"> </div></dt> <dd class="ons-summary__values"><span class="ons-summary__text"> </span></dd> <dd class="ons-summary__actions" id="sales-dates"><!></dd></div>'),ee=m('<div><div class="ons-summary__group"><!> <dl class="ons-summary__items"></dl></div></div>');function C(d,a){D(a,!1);const c=P();let I=r(a,"id",8,null),_=r(a,"title",8,null),O=r(a,"items",24,()=>[]),j=r(a,"cls",8,null);function q(s){c("change",{item:s})}w();var u=ee(),h=t(u),g=t(h);{var E=s=>{var e=Y(),i=t(e);l(()=>p(i,_())),o(s,e)};S(g,s=>{_()&&s(E)})}var F=f(g,2);U(F,5,O,W,(s,e)=>{var i=$(),k=t(i),T=t(k),B=t(T),b=f(k,2),G=t(b),J=t(G),K=f(b,2),M=t(K);{var N=v=>{var y=Z();l(()=>x(y,"href",n(e).href||"#0")),Q("click",y,()=>q(n(e))),o(v,y)};S(M,v=>{(n(e).href||n(e).editable)&&v(N)})}l(()=>{p(B,n(e).key),p(J,n(e).value)}),o(s,i)}),l(()=>{X(u,1,`ons-summary ${j()??""}`),x(h,"id",I())}),o(d,u),V()}C.__docgen={data:[{name:"id",visibility:"public",description:"A unique ID for the summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"title",visibility:"public",description:"Title for summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Array of items in format {key, value, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Summary.svelte"};const te=`A summary table for selected variables etc.

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
`,ae=[{key:"First item",value:"Value of first item"},{key:"Second item",value:"Value of second item (that can be changed)",href:"#"}],se={title:"Information and media/Summary",component:C,tags:["autodocs"],argTypes:{},parameters:z(te)},{Story:ne}=L();function A(d,a){D(a,!1),w();const c=R(()=>({items:ae}));ne(d,{name:"Default",get args(){return n(c)},parameters:{__svelteCsf:{rawCode:"<Summary {...args} />"}}}),V()}A.__docgen={data:[],name:"Summary.stories.svelte"};const ie=H(A,se),ue=["Default"],ve={...ie.Default,tags:["svelte-csf-v5"]};export{ve as Default,ue as __namedExportsOrder,se as default};

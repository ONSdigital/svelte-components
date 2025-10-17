import{p as D,r as G,a as r,j as m,i as S,t as l,e as o,h as V,k as f,n as t,q as p,g as n,u as H,o as J}from"./iframe-CXTJ6QVU.js";import{i as w,w as K,c as P,d as Q}from"./create-runtime-stories-BkuGQWvD.js";import{e as U,i as W}from"./each-7O7uYQtT.js";import{s as x}from"./attributes-BAN_2xp7.js";import{s as X}from"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";var Y=m('<h2 class="ons-summary__group-title"> </h2>'),Z=m('<a class="ons-summary__button"><span class="ons-summary__button-text" aria-hidden="true">Change</span> <span class="ons-u-vh">Change value</span></a>'),$=m('<div class="ons-summary__item"><dt class="ons-summary__item-title"><div class="ons-summary__item--text"> </div></dt> <dd class="ons-summary__values"><span class="ons-summary__text"> </span></dd> <dd class="ons-summary__actions" id="sales-dates"><!></dd></div>'),ee=m('<div><div class="ons-summary__group"><!> <dl class="ons-summary__items"></dl></div></div>');function C(d,a){D(a,!1);const u=G();let A=r(a,"id",8,null),_=r(a,"title",8,null),O=r(a,"items",24,()=>[]),j=r(a,"cls",8,null);function E(s){u("change",{item:s})}w();var c=ee(),h=t(c),g=t(h);{var F=s=>{var e=Y(),i=t(e);l(()=>p(i,_())),o(s,e)};S(g,s=>{_()&&s(F)})}var T=f(g,2);U(T,5,O,W,(s,e)=>{var i=$(),k=t(i),B=t(k),I=t(B),b=f(k,2),L=t(b),M=t(L),N=f(b,2),R=t(N);{var z=y=>{var v=Z();l(()=>x(v,"href",n(e).href||"#0")),H("click",v,()=>E(n(e))),o(y,v)};S(R,y=>{(n(e).href||n(e).editable)&&y(z)})}l(()=>{p(I,n(e).key),p(M,n(e).value)}),o(s,i)}),l(()=>{X(c,1,`ons-summary ${j()??""}`),x(h,"id",A())}),o(d,c),V()}C.__docgen={data:[{name:"id",visibility:"public",description:"A unique ID for the summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"title",visibility:"public",description:"Title for summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Array of items in format {key, value, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Summary.svelte"};const te=`A summary table for selected variables etc.

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
`,ae=[{key:"First item",value:"Value of first item"},{key:"Second item",value:"Value of second item (that can be changed)",href:"#"}],se={title:"Layout/Summary",component:C,tags:["autodocs"],argTypes:{},parameters:K(te)},{Story:ne}=Q();function q(d,a){D(a,!1),w();const u=J(()=>({items:ae}));ne(d,{name:"Default",get args(){return n(u)},parameters:{__svelteCsf:{rawCode:"<Summary {...args} />"}}}),V()}q.__docgen={data:[],name:"Summary.stories.svelte"};const ie=P(q,se),ce=["Default"],ye={...ie.Default,tags:["svelte-csf-v5"]};export{ye as Default,ce as __namedExportsOrder,se as default};

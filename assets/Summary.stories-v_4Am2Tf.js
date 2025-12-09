import{p as D,Q as z,a as r,j as m,i as S,t as l,e as o,h as V,k as f,n as t,q as p,g as n,R as G,o as H}from"./iframe-CLJGxL-r.js";import{i as w,w as J,c as K,d as P}from"./create-runtime-stories-CX2JR82U.js";import{e as U,i as W}from"./each-C94s8ouP.js";import{s as x}from"./attributes-BEkmlMin.js";import{s as X}from"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";var Y=m('<h2 class="ons-summary__group-title"> </h2>'),Z=m('<a class="ons-summary__button"><span class="ons-summary__button-text" aria-hidden="true">Change</span> <span class="ons-u-vh">Change value</span></a>'),$=m('<div class="ons-summary__item"><dt class="ons-summary__item-title"><div class="ons-summary__item--text"> </div></dt> <dd class="ons-summary__values"><span class="ons-summary__text"> </span></dd> <dd class="ons-summary__actions" id="sales-dates"><!></dd></div>'),ee=m('<div><div class="ons-summary__group"><!> <dl class="ons-summary__items"></dl></div></div>');function C(d,a){D(a,!1);const u=z();let A=r(a,"id",8,null),_=r(a,"title",8,null),O=r(a,"items",24,()=>[]),j=r(a,"cls",8,null);function E(s){u("change",{item:s})}w();var c=ee(),h=t(c),g=t(h);{var F=s=>{var e=Y(),i=t(e);l(()=>p(i,_())),o(s,e)};S(g,s=>{_()&&s(F)})}var R=f(g,2);U(R,5,O,W,(s,e)=>{var i=$(),k=t(i),T=t(k),B=t(T),b=f(k,2),I=t(b),L=t(I),M=f(b,2),N=t(M);{var Q=y=>{var v=Z();l(()=>x(v,"href",n(e).href||"#0")),G("click",v,()=>E(n(e))),o(y,v)};S(N,y=>{(n(e).href||n(e).editable)&&y(Q)})}l(()=>{p(B,n(e).key),p(L,n(e).value)}),o(s,i)}),l(()=>{X(c,1,`ons-summary ${j()??""}`),x(h,"id",A())}),o(d,c),V()}C.__docgen={data:[{name:"id",visibility:"public",description:"A unique ID for the summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"title",visibility:"public",description:"Title for summary table",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Array of items in format {key, value, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Summary.svelte"};const te=`A summary table for selected variables etc.

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
`,ae=[{key:"First item",value:"Value of first item"},{key:"Second item",value:"Value of second item (that can be changed)",href:"#"}],se={title:"Layout/Summary",component:C,tags:["autodocs"],argTypes:{},parameters:J(te)},{Story:ne}=P();function q(d,a){D(a,!1),w();const u=H(()=>({items:ae}));ne(d,{name:"Default",get args(){return n(u)},parameters:{__svelteCsf:{rawCode:"<Summary {...args} />"}}}),V()}q.__docgen={data:[],name:"Summary.stories.svelte"};const ie=K(q,se),ce=["Default"],ye={...ie.Default,tags:["svelte-csf-v5"]};export{ye as Default,ce as __namedExportsOrder,se as default};

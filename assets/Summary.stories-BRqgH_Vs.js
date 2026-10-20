import{ab as w,ai as G,p as i,i as S,t as l,a as o,ad as C,f as d,ae as y,c as a,aj as J,g as n,s as _,am as K,H as L}from"./iframe-BqRfKcLk.js";import{c as P,w as Q,i as U,d as W}from"./create-runtime-stories-Du911T6H.js";import{e as X}from"./each-kHsERmtw.js";import{s as x}from"./attributes-CkMeemA2.js";import{s as Y}from"./class-37_mtU4-.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var Z=d('<h2 class="ons-summary__group-title"> </h2>'),$=d('<a class="ons-summary__button"><span class="ons-summary__button-text" aria-hidden="true">Change</span> <span class="ons-u-vh">Change value</span></a>'),ee=d('<div class="ons-summary__item"><dt class="ons-summary__item-title"><div class="ons-summary__item--text"> </div></dt> <dd class="ons-summary__values"><span class="ons-summary__text"> </span></dd> <dd class="ons-summary__actions" id="sales-dates"><!></dd></div>'),te=d('<div><div class="ons-summary__group"><!> <dl class="ons-summary__items"></dl></div></div>');function D(m,s){w(s,!0);const u=G();let j=i(s,"id",3,null),p=i(s,"title",3,null),E=i(s,"items",19,()=>[]),F=i(s,"cls",3,null),I=i(s,"onChange",3,()=>{});function O(t){const e={item:t};I()(e),u("change",e)}var c=te(),g=a(c),h=a(g);{var T=t=>{var e=Z(),r=a(e);l(()=>_(r,p())),o(t,e)};S(h,t=>{p()&&t(T)})}var q=y(h,2);X(q,21,E,t=>t.key,(t,e)=>{var r=ee(),k=a(r),A=a(k),B=a(A),b=y(k,2),H=a(b),M=a(H),N=y(b,2),R=a(N);{var z=v=>{var f=$();l(()=>x(f,"href",n(e).href||"#0")),K("click",f,()=>O(n(e))),o(v,f)};S(R,v=>{(n(e).href||n(e).editable)&&v(z)})}l(()=>{_(B,n(e).key),_(M,n(e).value)}),o(t,r)}),l(()=>{Y(c,1,`ons-summary ${F()??""}`),x(g,"id",j())}),o(m,c),C()}J(["click"]);D.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ key: string; value: string; href?: string | undefined; editable?: boolean | undefined; }[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"onChange",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { item: { key: string; value: string; href?: string | undefined; editable?: boolean | undefined; }; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Summary.svelte"};const ae=`A summary table for selected variables etc.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/summary).

In Svelte 5, \`onChange\` receives \`{ item }\` for the selected summary row. The dispatched \`change\` event remains supported with the same object on \`event.detail\`.

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
`,se=[{key:"First item",value:"Value of first item"},{key:"Second item",value:"Value of second item (that can be changed)",href:"#"}],ne={title:"Information and media/Summary",component:D,tags:["autodocs"],argTypes:{},parameters:Q(ae)},{Story:ie}=W();function V(m,s){w(s,!1),U();{let u=L(()=>({items:se}));ie(m,{name:"Default",get args(){return n(u)},parameters:{__svelteCsf:{rawCode:"<Summary {...args} />"}}})}C()}V.__docgen={data:[],name:"Summary.stories.svelte"};const re=P(V,ne),fe=["Default"],ye={...re.Default,tags:["svelte-csf-v5"]};export{ye as Default,fe as __namedExportsOrder,ne as default};

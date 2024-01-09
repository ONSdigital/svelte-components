import{S as M,i as j,s as k,p as x,j as i,w,m as d,a as _,k as S,l as T,b as f,t as c,n as u,d as b,x as D,y as g,H as A,N as O}from"./index-8607ceaf.js";import{p as W,w as v,M as q,T as H,S as N}from"./collect-stories-45ecfa9a.js";import{E as h}from"./Embed-7e9146af.js";import"./_commonjsHelpers-725317a4.js";const y=`A container for content designed to appear within an \`<iframe>\`. The component does two things:

1. Overrides padding, so that content can fill the full width of its iframe.
2. Initialises a Pym.js child for the iframe, so that it can communicate its height with its parent page.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Embed } from "@onsvisual/svelte-components";
<\/script>

<Embed>
  {child_components}
</Embed>
\`\`\`
`;function P(l){let t,a;return{c(){t=D("div"),a=D("p"),a.textContent="Embedded content.",g(a,"margin","0"),g(t,"padding","24px 0"),g(t,"background","lightgrey")},m(n,m){_(n,t,m),A(t,a)},p:O,d(n){n&&b(t)}}}function z(l){let t,a;const n=[l[0]];let m={$$slots:{default:[P]},$$scope:{ctx:l}};for(let s=0;s<n.length;s+=1)m=x(m,n[s]);return t=new h({props:m}),{c(){i(t.$$.fragment)},m(s,r){d(t,s,r),a=!0},p(s,r){const p=r&1?S(n,[T(s[0])]):{};r&2&&(p.$$scope={dirty:r,ctx:s}),t.$set(p)},i(s){a||(f(t.$$.fragment,s),a=!0)},o(s){c(t.$$.fragment,s),a=!1},d(s){u(t,s)}}}function B(l){let t,a,n,m,s,r;const p=[{title:"Wrappers/Embed"},{component:h},{argTypes:{}},v(y)];let $={};for(let e=0;e<p.length;e+=1)$=x($,p[e]);return t=new q({props:$}),n=new H({props:{$$slots:{default:[z,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:l}}}),s=new N({props:{name:"Default",args:{}}}),{c(){i(t.$$.fragment),a=w(),i(n.$$.fragment),m=w(),i(s.$$.fragment)},m(e,o){d(t,e,o),_(e,a,o),d(n,e,o),_(e,m,o),d(s,e,o),r=!0},p(e,[o]){const I=o&0?S(p,[p[0],o&0&&{component:h},p[2],o&0&&T(v(y))]):{};t.$set(I);const E={};o&3&&(E.$$scope={dirty:o,ctx:e}),n.$set(E)},i(e){r||(f(t.$$.fragment,e),f(n.$$.fragment,e),f(s.$$.fragment,e),r=!0)},o(e){c(t.$$.fragment,e),c(n.$$.fragment,e),c(s.$$.fragment,e),r=!1},d(e){u(t,e),e&&b(a),u(n,e),e&&b(m),u(s,e)}}}class F extends M{constructor(t){super(),j(this,t,null,B,k,{})}}const C=W(F,{meta:{title:"Wrappers/Embed"},stories:{"tpl:default":{storyId:"wrappers-embed--default",name:"default",template:!0,source:`<Embed {...args}>
  <div style:padding="24px 0" style:background="lightgrey">
    <p style:margin="0">Embedded content.</p>
  </div>
</Embed>`,hasArgs:!0},Default:{storyId:"wrappers-embed--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Embed","withComponentDocs"]}),Q=C.meta,R=["Default"],U=C.stories.Default;export{U as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=Embed.stories-9aa894f7.js.map

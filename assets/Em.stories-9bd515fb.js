import{S as T,i as I,s as M,p as v,j as f,w as D,m as i,a as d,k as y,l as b,b as u,t as $,n as _,d as g,x as A,y as C,I as j,J as q}from"./index-8607ceaf.js";import{p as H,w as E,M as J,T as O,S as z}from"./collect-stories-45ecfa9a.js";import{E as h}from"./Em-85251bab.js";import"./_commonjsHelpers-725317a4.js";const w=`A \`<mark>\` element with a custom background color, where the highlighted text will automatically appear black or white to maximise contrast.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Em } from "@onsvisual/svelte-components";
<\/script>

<Em color="steelblue">Highlighted text</Em>
\`\`\`
`;function B(p){let t=p[0].text+"",o;return{c(){o=j(t)},m(a,n){d(a,o,n)},p(a,n){n&1&&t!==(t=a[0].text+"")&&q(o,t)},d(a){a&&g(o)}}}function F(p){let t,o,a;const n=[p[0]];let l={$$slots:{default:[B]},$$scope:{ctx:p}};for(let s=0;s<n.length;s+=1)l=v(l,n[s]);return o=new h({props:l}),{c(){t=A("div"),f(o.$$.fragment),C(t,"padding","12px")},m(s,r){d(s,t,r),i(o,t,null),a=!0},p(s,r){const c=r&1?y(n,[b(s[0])]):{};r&3&&(c.$$scope={dirty:r,ctx:s}),o.$set(c)},i(s){a||(u(o.$$.fragment,s),a=!0)},o(s){$(o.$$.fragment,s),a=!1},d(s){s&&g(t),_(o)}}}function G(p){let t,o,a,n,l,s;const r=[{title:"Decorators/Em"},{component:h},{argTypes:{color:{control:{type:"color"}}}},E(w)];let c={};for(let e=0;e<r.length;e+=1)c=v(c,r[e]);return t=new J({props:c}),a=new O({props:{$$slots:{default:[F,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),l=new z({props:{name:"Default",args:{text:"Text on grey background"}}}),{c(){f(t.$$.fragment),o=D(),f(a.$$.fragment),n=D(),f(l.$$.fragment)},m(e,m){i(t,e,m),d(e,o,m),i(a,e,m),d(e,n,m),i(l,e,m),s=!0},p(e,[m]){const S=m&0?y(r,[r[0],m&0&&{component:h},r[2],m&0&&b(E(w))]):{};t.$set(S);const x={};m&3&&(x.$$scope={dirty:m,ctx:e}),a.$set(x)},i(e){s||(u(t.$$.fragment,e),u(a.$$.fragment,e),u(l.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),$(a.$$.fragment,e),$(l.$$.fragment,e),s=!1},d(e){_(t,e),e&&g(o),_(a,e),e&&g(n),_(l,e)}}}class K extends T{constructor(t){super(),I(this,t,null,G,M,{})}}const k=H(K,{meta:{title:"Decorators/Em"},stories:{"tpl:default":{storyId:"decorators-em--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Em {...args}>{args.text}</Em>
</div>`,hasArgs:!0},Default:{storyId:"decorators-em--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Em","withComponentDocs"]}),R=k.meta,U=["Default"],V=k.stories.Default;export{V as Default,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Em.stories-9bd515fb.js.map

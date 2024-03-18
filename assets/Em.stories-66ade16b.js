import{S as T,i as M,s as A,p as v,j as c,w as D,m as f,a as d,k as y,l as b,b as u,t as $,n as _,d as g,x as C,y as I,Q as j,R as q}from"./index-9473b494.js";import{p as H,w as E,M as O,T as Q,S as R}from"./collect-stories-458d6889.js";import{E as h}from"./Em-efe31ae3.js";import"./utils-9a784a1e.js";import"./_commonjsHelpers-725317a4.js";const w=`A \`<mark>\` element with a custom background color, where the highlighted text will automatically appear black or white to maximise contrast.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Em } from "@onsvisual/svelte-components";
<\/script>

<Em color="steelblue">Highlighted text</Em>
\`\`\`
`;function z(p){let t=p[0].text+"",o;return{c(){o=j(t)},m(a,n){d(a,o,n)},p(a,n){n&1&&t!==(t=a[0].text+"")&&q(o,t)},d(a){a&&g(o)}}}function B(p){let t,o,a;const n=[p[0]];let l={$$slots:{default:[z]},$$scope:{ctx:p}};for(let s=0;s<n.length;s+=1)l=v(l,n[s]);return o=new h({props:l}),{c(){t=C("div"),c(o.$$.fragment),I(t,"padding","12px")},m(s,r){d(s,t,r),f(o,t,null),a=!0},p(s,r){const i=r&1?y(n,[b(s[0])]):{};r&3&&(i.$$scope={dirty:r,ctx:s}),o.$set(i)},i(s){a||(u(o.$$.fragment,s),a=!0)},o(s){$(o.$$.fragment,s),a=!1},d(s){s&&g(t),_(o)}}}function F(p){let t,o,a,n,l,s;const r=[{title:"Decorators/Em"},{component:h},{argTypes:{color:{control:{type:"color"}}}},E(w)];let i={};for(let e=0;e<r.length;e+=1)i=v(i,r[e]);return t=new O({props:i}),a=new Q({props:{$$slots:{default:[B,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),l=new R({props:{name:"Default",args:{text:"Text on grey background"}}}),{c(){c(t.$$.fragment),o=D(),c(a.$$.fragment),n=D(),c(l.$$.fragment)},m(e,m){f(t,e,m),d(e,o,m),f(a,e,m),d(e,n,m),f(l,e,m),s=!0},p(e,[m]){const S=m&0?y(r,[r[0],m&0&&{component:h},r[2],m&0&&b(E(w))]):{};t.$set(S);const x={};m&3&&(x.$$scope={dirty:m,ctx:e}),a.$set(x)},i(e){s||(u(t.$$.fragment,e),u(a.$$.fragment,e),u(l.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),$(a.$$.fragment,e),$(l.$$.fragment,e),s=!1},d(e){_(t,e),e&&g(o),_(a,e),e&&g(n),_(l,e)}}}class G extends T{constructor(t){super(),M(this,t,null,F,A,{})}}const k=H(G,{meta:{title:"Decorators/Em"},stories:{"tpl:default":{storyId:"decorators-em--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Em {...args}>{args.text}</Em>
</div>`,hasArgs:!0},Default:{storyId:"decorators-em--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Em","withComponentDocs"]}),U=k.meta,V=["Default"],W=k.stories.Default;export{W as Default,V as __namedExportsOrder,U as default};
//# sourceMappingURL=Em.stories-66ade16b.js.map

import{S as I,i as j,s as A,p as b,j as m,w as y,m as f,a as _,k as C,l as S,b as c,t as u,n as d,d as h,x as v,y as g,P as W,z as q}from"./index-9473b494.js";import{p as z,w as D,M as E,T as F,S as H}from"./collect-stories-458d6889.js";import{M}from"./Main-eff196fb.js";const x=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

This component is useful for screen readers, as the standard header component contains a visually hidden "Skip to content" link that will bring users to it.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Main } from "@onsvisual/svelte-components";
<\/script>

<!-- Header goes here -->
<Main>{child_components}</Main>
<!-- Footer goes here -->
\`\`\`
`;function O(l){let t,a;return{c(){t=v("div"),a=v("p"),a.textContent="Child components go here.",g(a,"margin","0"),g(t,"padding","24px 12px"),g(t,"background","lightgrey")},m(s,p){_(s,t,p),W(t,a)},p:q,d(s){s&&h(t)}}}function P(l){let t,a;const s=[l[0]];let p={$$slots:{default:[O]},$$scope:{ctx:l}};for(let n=0;n<s.length;n+=1)p=b(p,s[n]);return t=new M({props:p}),{c(){m(t.$$.fragment)},m(n,r){f(t,n,r),a=!0},p(n,r){const i=r&1?C(s,[S(n[0])]):{};r&2&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){a||(c(t.$$.fragment,n),a=!0)},o(n){u(t.$$.fragment,n),a=!1},d(n){d(t,n)}}}function B(l){let t,a,s,p,n,r;const i=[{title:"Wrappers/Main"},{component:M},{argTypes:{}},D(x)];let $={};for(let e=0;e<i.length;e+=1)$=b($,i[e]);return t=new E({props:$}),s=new F({props:{$$slots:{default:[P,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:l}}}),n=new H({props:{name:"Default",args:{}}}),{c(){m(t.$$.fragment),a=y(),m(s.$$.fragment),p=y(),m(n.$$.fragment)},m(e,o){f(t,e,o),_(e,a,o),f(s,e,o),_(e,p,o),f(n,e,o),r=!0},p(e,[o]){const k=o&0?C(i,[i[0],o&0&&{component:M},i[2],o&0&&S(D(x))]):{};t.$set(k);const w={};o&3&&(w.$$scope={dirty:o,ctx:e}),s.$set(w)},i(e){r||(c(t.$$.fragment,e),c(s.$$.fragment,e),c(n.$$.fragment,e),r=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),u(n.$$.fragment,e),r=!1},d(e){d(t,e),e&&h(a),d(s,e),e&&h(p),d(n,e)}}}class G extends I{constructor(t){super(),j(this,t,null,B,A,{})}}const T=z(G,{meta:{title:"Wrappers/Main"},stories:{"tpl:default":{storyId:"wrappers-main--default",name:"default",template:!0,source:`<Main {...args}>
  <div style:padding="24px 12px" style:background="lightgrey">
    <p style:margin="0">Child components go here.</p>
  </div>
</Main>`,hasArgs:!0},Default:{storyId:"wrappers-main--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Main","withComponentDocs"]}),N=T.meta,Q=["Default"],R=T.stories.Default;export{R as Default,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=Main.stories-b0db5336.js.map

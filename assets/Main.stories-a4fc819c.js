import{S as I,i as j,s as A,p as x,j as m,w as v,m as c,a as _,k as C,l as S,b as f,t as u,n as d,d as h,x as w,y as $,P as W,z as q}from"./index-93ed49d9.js";import{p as z,w as D,M as E,T as F,S as H}from"./collect-stories-46e6ba01.js";import{M}from"./Main-29863fc4.js";const b=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

This component is useful for screen readers, as the standard header component contains a visually hidden "Skip to content" link that will bring users to it.

It has a [named slot](https://svelte.dev/docs/svelte/legacy-slots#Named-slots) called "before" where you can put content, e.g. breadcrumbs.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Main } from "@onsvisual/svelte-components";
<\/script>

<!-- Header goes here -->
<Main>{child_components}</Main>
<!-- Footer goes here -->
\`\`\`
`;function N(i){let t,a;return{c(){t=w("div"),a=w("p"),a.textContent="Child components go here.",$(a,"margin","0"),$(t,"padding","24px 12px"),$(t,"background","lightgrey")},m(s,p){_(s,t,p),W(t,a)},p:q,d(s){s&&h(t)}}}function O(i){let t,a;const s=[i[0]];let p={$$slots:{default:[N]},$$scope:{ctx:i}};for(let n=0;n<s.length;n+=1)p=x(p,s[n]);return t=new M({props:p}),{c(){m(t.$$.fragment)},m(n,r){c(t,n,r),a=!0},p(n,r){const l=r&1?C(s,[S(n[0])]):{};r&2&&(l.$$scope={dirty:r,ctx:n}),t.$set(l)},i(n){a||(f(t.$$.fragment,n),a=!0)},o(n){u(t.$$.fragment,n),a=!1},d(n){d(t,n)}}}function P(i){let t,a,s,p,n,r;const l=[{title:"Wrappers/Main"},{component:M},{argTypes:{}},D(b)];let g={};for(let e=0;e<l.length;e+=1)g=x(g,l[e]);return t=new E({props:g}),s=new F({props:{$$slots:{default:[O,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:i}}}),n=new H({props:{name:"Default",args:{}}}),{c(){m(t.$$.fragment),a=v(),m(s.$$.fragment),p=v(),m(n.$$.fragment)},m(e,o){c(t,e,o),_(e,a,o),c(s,e,o),_(e,p,o),c(n,e,o),r=!0},p(e,[o]){const k=o&0?C(l,[l[0],o&0&&{component:M},l[2],o&0&&S(D(b))]):{};t.$set(k);const y={};o&3&&(y.$$scope={dirty:o,ctx:e}),s.$set(y)},i(e){r||(f(t.$$.fragment,e),f(s.$$.fragment,e),f(n.$$.fragment,e),r=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),u(n.$$.fragment,e),r=!1},d(e){d(t,e),e&&h(a),d(s,e),e&&h(p),d(n,e)}}}class B extends I{constructor(t){super(),j(this,t,null,P,A,{})}}const T=z(B,{meta:{title:"Wrappers/Main"},stories:{"tpl:default":{storyId:"wrappers-main--default",name:"default",template:!0,source:`<Main {...args}>
  <div style:padding="24px 12px" style:background="lightgrey">
    <p style:margin="0">Child components go here.</p>
  </div>
</Main>`,hasArgs:!0},Default:{storyId:"wrappers-main--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Main","withComponentDocs"]}),L=T.meta,Q=["Default"],R=T.stories.Default;export{R as Default,Q as __namedExportsOrder,L as default};
//# sourceMappingURL=Main.stories-a4fc819c.js.map

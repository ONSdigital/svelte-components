import{S as E,i as j,s as U,p as I,j as l,w as D,m as u,a as g,k as W,l as C,b as p,t as c,n as d,d as w,x as z,z as O}from"./index-d7770b0b.js";import{p as Y,w as T,M as B,T as F,S as k}from"./collect-stories-25fab9e7.js";import{S as b}from"./Section-1782dd37.js";import"./utils-bbbf505c.js";import"./_commonjsHelpers-725317a4.js";import"./Container-6db8ee47.js";import"./Theme-af22f443.js";const A=`A layout block for text content. You can set the width, colour theme and title.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<Section width="{narrow|medium|wide|full}" title="Section title">
  <p>Contents of section.</p>
</Section>
\`\`\`
`;function G(f){let t;return{c(){t=z("p"),t.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,s){g(i,t,s)},p:O,d(i){i&&w(t)}}}function H(f){let t,i;const s=[f[0]];let m={$$slots:{default:[G]},$$scope:{ctx:f}};for(let n=0;n<s.length;n+=1)m=I(m,s[n]);return t=new b({props:m}),{c(){l(t.$$.fragment)},m(n,a){u(t,n,a),i=!0},p(n,a){const r=a&1?W(s,[C(n[0])]):{};a&2&&(r.$$scope={dirty:a,ctx:n}),t.$set(r)},i(n){i||(p(t.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),i=!1},d(n){d(t,n)}}}function J(f){let t,i,s,m,n,a,r,q,$,v,_,h;const S=[{title:"Layout/Section"},{component:b},{argTypes:{width:{options:["narrow","medium","wide","wider","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},T(A)];let x={};for(let e=0;e<S.length;e+=1)x=I(x,S[e]);return t=new B({props:x}),s=new F({props:{$$slots:{default:[H,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:f}}}),n=new k({props:{name:"Default",args:{title:"Section title"}}}),r=new k({props:{name:"Medium",args:{width:"medium",title:"Section title"}}}),$=new k({props:{name:"Wide",args:{width:"wide",title:"Section title"}}}),_=new k({props:{name:"Dark themed",args:{theme:"dark",title:"Section title"}}}),{c(){l(t.$$.fragment),i=D(),l(s.$$.fragment),m=D(),l(n.$$.fragment),a=D(),l(r.$$.fragment),q=D(),l($.$$.fragment),v=D(),l(_.$$.fragment)},m(e,o){u(t,e,o),g(e,i,o),u(s,e,o),g(e,m,o),u(n,e,o),g(e,a,o),u(r,e,o),g(e,q,o),u($,e,o),g(e,v,o),u(_,e,o),h=!0},p(e,[o]){const L=o&0?W(S,[S[0],o&0&&{component:b},S[2],o&0&&C(T(A))]):{};t.$set(L);const M={};o&3&&(M.$$scope={dirty:o,ctx:e}),s.$set(M)},i(e){h||(p(t.$$.fragment,e),p(s.$$.fragment,e),p(n.$$.fragment,e),p(r.$$.fragment,e),p($.$$.fragment,e),p(_.$$.fragment,e),h=!0)},o(e){c(t.$$.fragment,e),c(s.$$.fragment,e),c(n.$$.fragment,e),c(r.$$.fragment,e),c($.$$.fragment,e),c(_.$$.fragment,e),h=!1},d(e){d(t,e),e&&w(i),d(s,e),e&&w(m),d(n,e),e&&w(a),d(r,e),e&&w(q),d($,e),e&&w(v),d(_,e)}}}class K extends E{constructor(t){super(),j(this,t,null,J,U,{})}}const y=Y(K,{meta:{title:"Layout/Section"},stories:{"tpl:default":{storyId:"layout-section--default",name:"default",template:!0,source:`<Section {...args}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>`,hasArgs:!0},Default:{storyId:"layout-section--default",name:"Default",template:!1,hasArgs:!1},Medium:{storyId:"layout-section--medium",name:"Medium",template:!1,hasArgs:!1},Wide:{storyId:"layout-section--wide",name:"Wide",template:!1,hasArgs:!1},DarkThemed:{storyId:"layout-section--dark-themed",name:"Dark themed",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Section","withComponentDocs"]}),ee=y.meta,te=["Default","Medium","Wide","DarkThemed"],ne=y.stories.Default,oe=y.stories.Medium,se=y.stories.Wide,ie=y.stories.DarkThemed;export{ie as DarkThemed,ne as Default,oe as Medium,se as Wide,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Section.stories-d3069047.js.map

import{S as E,i as j,s as U,p as I,j as l,w as D,m as u,a as g,k as W,l as C,b as p,t as c,n as d,d as w,x as N,N as O}from"./index-8607ceaf.js";import{p as Y,w as T,M as z,T as B,S as k}from"./collect-stories-45ecfa9a.js";import{S as b}from"./Section-a6f4616e.js";import"./utils-f6662b64.js";import"./Container-57792f3b.js";import"./Theme-77c4162c.js";const A=`A layout block for text content. You can set the width, colour theme and title.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<Section width="{narrow|medium|wide|full}" title="Section title">
  <p>Contents of section.</p>
</Section>
\`\`\`
`;function F(f){let t;return{c(){t=N("p"),t.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,s){g(i,t,s)},p:O,d(i){i&&w(t)}}}function G(f){let t,i;const s=[f[0]];let m={$$slots:{default:[F]},$$scope:{ctx:f}};for(let n=0;n<s.length;n+=1)m=I(m,s[n]);return t=new b({props:m}),{c(){l(t.$$.fragment)},m(n,a){u(t,n,a),i=!0},p(n,a){const r=a&1?W(s,[C(n[0])]):{};a&2&&(r.$$scope={dirty:a,ctx:n}),t.$set(r)},i(n){i||(p(t.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),i=!1},d(n){d(t,n)}}}function H(f){let t,i,s,m,n,a,r,q,$,v,_,h;const S=[{title:"Layout/Section"},{component:b},{argTypes:{width:{options:["narrow","medium","wide","wider","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},T(A)];let x={};for(let e=0;e<S.length;e+=1)x=I(x,S[e]);return t=new z({props:x}),s=new B({props:{$$slots:{default:[G,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:f}}}),n=new k({props:{name:"Default",args:{title:"Section title"}}}),r=new k({props:{name:"Medium",args:{width:"medium",title:"Section title"}}}),$=new k({props:{name:"Wide",args:{width:"wide",title:"Section title"}}}),_=new k({props:{name:"Dark themed",args:{theme:"dark",title:"Section title"}}}),{c(){l(t.$$.fragment),i=D(),l(s.$$.fragment),m=D(),l(n.$$.fragment),a=D(),l(r.$$.fragment),q=D(),l($.$$.fragment),v=D(),l(_.$$.fragment)},m(e,o){u(t,e,o),g(e,i,o),u(s,e,o),g(e,m,o),u(n,e,o),g(e,a,o),u(r,e,o),g(e,q,o),u($,e,o),g(e,v,o),u(_,e,o),h=!0},p(e,[o]){const L=o&0?W(S,[S[0],o&0&&{component:b},S[2],o&0&&C(T(A))]):{};t.$set(L);const M={};o&3&&(M.$$scope={dirty:o,ctx:e}),s.$set(M)},i(e){h||(p(t.$$.fragment,e),p(s.$$.fragment,e),p(n.$$.fragment,e),p(r.$$.fragment,e),p($.$$.fragment,e),p(_.$$.fragment,e),h=!0)},o(e){c(t.$$.fragment,e),c(s.$$.fragment,e),c(n.$$.fragment,e),c(r.$$.fragment,e),c($.$$.fragment,e),c(_.$$.fragment,e),h=!1},d(e){d(t,e),e&&w(i),d(s,e),e&&w(m),d(n,e),e&&w(a),d(r,e),e&&w(q),d($,e),e&&w(v),d(_,e)}}}class J extends E{constructor(t){super(),j(this,t,null,H,U,{})}}const y=Y(J,{meta:{title:"Layout/Section"},stories:{"tpl:default":{storyId:"layout-section--default",name:"default",template:!0,source:`<Section {...args}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>`,hasArgs:!0},Default:{storyId:"layout-section--default",name:"Default",template:!1,hasArgs:!1},Medium:{storyId:"layout-section--medium",name:"Medium",template:!1,hasArgs:!1},Wide:{storyId:"layout-section--wide",name:"Wide",template:!1,hasArgs:!1},DarkThemed:{storyId:"layout-section--dark-themed",name:"Dark themed",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Section","withComponentDocs"]}),Z=y.meta,ee=["Default","Medium","Wide","DarkThemed"],te=y.stories.Default,ne=y.stories.Medium,oe=y.stories.Wide,se=y.stories.DarkThemed;export{se as DarkThemed,te as Default,ne as Medium,oe as Wide,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Section.stories-e2c72fc4.js.map

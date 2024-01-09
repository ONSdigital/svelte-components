import{S as k,i as M,s as T,p as h,j as d,w,m as c,a as _,k as y,l as b,b as f,t as u,n as $,d as v,x as A,y as C}from"./index-8607ceaf.js";import{p as I,M as j,T as P,S as q,w as E}from"./collect-stories-45ecfa9a.js";import{D as g}from"./Divider-c6bfe4c4.js";import"./Container-57792f3b.js";import"./Theme-77c4162c.js";const O=`A component to draw a divider between blocks of contnet.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Divider } from "@onsvisual/svelte-components";
<\/script>

<!-- Some content blocks -->
<Divider />
<!-- More content blocks -->
\`\`\`
`;function z(p){let s,n,r;const l=[p[1]];let a={};for(let t=0;t<l.length;t+=1)a=h(a,l[t]);return n=new g({props:a}),{c(){s=A("div"),d(n.$$.fragment),C(s,"padding","26px 12px 0")},m(t,i){_(t,s,i),c(n,s,null),r=!0},p(t,i){const m=i&2?y(l,[b(t[1])]):{};n.$set(m)},i(t){r||(f(n.$$.fragment,t),r=!0)},o(t){u(n.$$.fragment,t),r=!1},d(t){t&&v(s),$(n)}}}function B(p){let s,n,r,l,a,t;const i=[{title:"Decorators/Divider"},{component:g},p[0]];let m={};for(let e=0;e<i.length;e+=1)m=h(m,i[e]);return s=new j({props:m}),r=new P({props:{$$slots:{default:[z,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),a=new q({props:{name:"Default",args:{}}}),{c(){d(s.$$.fragment),n=w(),d(r.$$.fragment),l=w(),d(a.$$.fragment)},m(e,o){c(s,e,o),_(e,n,o),c(r,e,o),_(e,l,o),c(a,e,o),t=!0},p(e,[o]){const S=o&1?y(i,[i[0],o&0&&{component:g},o&1&&b(e[0])]):{};s.$set(S);const D={};o&6&&(D.$$scope={dirty:o,ctx:e}),r.$set(D)},i(e){t||(f(s.$$.fragment,e),f(r.$$.fragment,e),f(a.$$.fragment,e),t=!0)},o(e){u(s.$$.fragment,e),u(r.$$.fragment,e),u(a.$$.fragment,e),t=!1},d(e){$(s,e),e&&v(n),$(r,e),e&&v(l),$(a,e)}}}function F(p){return[{...E(O),argTypes:{hr:{options:["narrow","full",null],control:{type:"select"}},width:{options:["narrow","medium","wide","wider","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}}]}class G extends k{constructor(s){super(),M(this,s,F,B,T,{})}}const x=I(G,{meta:{title:"Decorators/Divider"},stories:{"tpl:default":{storyId:"decorators-divider--default",name:"default",template:!0,source:`<div style:padding="26px 12px 0">
  <Divider {...args} />
</div>`,hasArgs:!0},Default:{storyId:"decorators-divider--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Divider","withComponentDocs"]}),Q=x.meta,R=["Default"],U=x.stories.Default;export{U as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=Divider.stories-0a980e07.js.map

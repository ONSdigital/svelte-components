import{S as M,i as W,s as x,p as S,j as i,w as h,m as f,a as w,k as b,l as A,b as u,t as c,n as $,d as y}from"./index-8607ceaf.js";import{p as j,w as T,M as k,T as L,S as v}from"./collect-stories-45ecfa9a.js";import{H as D}from"./Header-bb9ccb8c.js";import"./Theme-77c4162c.js";const P=`A header component with compact mode and theming options.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Header } from "@onsvisual/svelte-components";
<\/script>

<Header />
<!-- page body -->
\`\`\`
`;function q(d){let a,r;const o=[d[0]];let p={};for(let t=0;t<o.length;t+=1)p=S(p,o[t]);return a=new D({props:p}),{c(){i(a.$$.fragment)},m(t,m){f(a,t,m),r=!0},p(t,m){const n=m&1?b(o,[A(t[0])]):{};a.$set(n)},i(t){r||(u(a.$$.fragment,t),r=!0)},o(t){c(a.$$.fragment,t),r=!1},d(t){$(a,t)}}}function E(d){let a,r,o,p,t,m,n,g;const l=[{title:"Layout/Header"},{component:D},{argTypes:{theme:{options:["light","dark"],control:{type:"select"}}}},T(P)];let _={};for(let e=0;e<l.length;e+=1)_=S(_,l[e]);return a=new k({props:_}),o=new L({props:{$$slots:{default:[q,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:d}}}),t=new v({props:{name:"Default",args:{bilingual:!0}}}),n=new v({props:{name:"Compact with page title",args:{compact:!0,title:"Page title"}}}),{c(){i(a.$$.fragment),r=h(),i(o.$$.fragment),p=h(),i(t.$$.fragment),m=h(),i(n.$$.fragment)},m(e,s){f(a,e,s),w(e,r,s),f(o,e,s),w(e,p,s),f(t,e,s),w(e,m,s),f(n,e,s),g=!0},p(e,[s]){const I=s&0?b(l,[l[0],s&0&&{component:D},l[2],s&0&&A(T(P))]):{};a.$set(I);const C={};s&3&&(C.$$scope={dirty:s,ctx:e}),o.$set(C)},i(e){g||(u(a.$$.fragment,e),u(o.$$.fragment,e),u(t.$$.fragment,e),u(n.$$.fragment,e),g=!0)},o(e){c(a.$$.fragment,e),c(o.$$.fragment,e),c(t.$$.fragment,e),c(n.$$.fragment,e),g=!1},d(e){$(a,e),e&&y(r),$(o,e),e&&y(p),$(t,e),e&&y(m),$(n,e)}}}class O extends M{constructor(a){super(),W(this,a,null,E,x,{})}}const H=j(O,{meta:{title:"Layout/Header"},stories:{"tpl:default":{storyId:"layout-header--default",name:"default",template:!0,source:"<Header {...args} />",hasArgs:!0},Default:{storyId:"layout-header--default",name:"Default",template:!1,hasArgs:!1},CompactWithPageTitle:{storyId:"layout-header--compact-with-page-title",name:"Compact with page title",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Header","withComponentDocs"]}),J=H.meta,K=["Default","CompactWithPageTitle"],N=H.stories.Default,Q=H.stories.CompactWithPageTitle;export{Q as CompactWithPageTitle,N as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Header.stories-d1224ca6.js.map

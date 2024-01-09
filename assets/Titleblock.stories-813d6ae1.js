import{S as x,i as I,s as A,p as h,j as m,w as k,m as c,a as b,k as v,l as w,b as f,t as u,n as $,d as T}from"./index-8607ceaf.js";import{p as B,w as y,M as C,T as L,S as j}from"./collect-stories-45ecfa9a.js";import{T as d}from"./Titleblock-2af11afc.js";import"./Container-57792f3b.js";import"./Theme-77c4162c.js";import"./utils-f6662b64.js";const D=`A title block suitable for a standard pages, with optional metadata block.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { TitleBlock } from "@onsvisual/svelte-components";
<\/script>

<TitleBlock tite="Page title">
  {optional_additonal_content}
</TitleBlock>
\`\`\`
`;function P(p){let o,l;const s=[p[0]];let r={};for(let e=0;e<s.length;e+=1)r=h(r,s[e]);return o=new d({props:r}),{c(){m(o.$$.fragment)},m(e,n){c(o,e,n),l=!0},p(e,n){const i=n&1?v(s,[w(e[0])]):{};o.$set(i)},i(e){l||(f(o.$$.fragment,e),l=!0)},o(e){u(o.$$.fragment,e),l=!1},d(e){$(o,e)}}}function R(p){let o,l,s,r,e,n;const i=[{title:"Layout/Titleblock"},{component:d},{argTypes:{theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},y(D)];let _={};for(let t=0;t<i.length;t+=1)_=h(_,i[t]);return o=new C({props:_}),s=new L({props:{$$slots:{default:[P,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:p}}}),e=new j({props:{name:"Default",args:{title:"Page headline",meta:[{key:"Dataset ID",value:"RM169"},{key:"Released",value:"2023-04-04",col:4},{key:"Last updated",value:"2023-06-08",col:8,extra:'— <a href="#version-history">See version history</a>'}]}}}),{c(){m(o.$$.fragment),l=k(),m(s.$$.fragment),r=k(),m(e.$$.fragment)},m(t,a){c(o,t,a),b(t,l,a),c(s,t,a),b(t,r,a),c(e,t,a),n=!0},p(t,[a]){const M=a&0?v(i,[i[0],a&0&&{component:d},i[2],a&0&&w(y(D))]):{};o.$set(M);const g={};a&3&&(g.$$scope={dirty:a,ctx:t}),s.$set(g)},i(t){n||(f(o.$$.fragment,t),f(s.$$.fragment,t),f(e.$$.fragment,t),n=!0)},o(t){u(o.$$.fragment,t),u(s.$$.fragment,t),u(e.$$.fragment,t),n=!1},d(t){$(o,t),t&&T(l),$(s,t),t&&T(r),$(e,t)}}}class q extends x{constructor(o){super(),I(this,o,null,R,A,{})}}const S=B(q,{meta:{title:"Layout/Titleblock"},stories:{"tpl:default":{storyId:"layout-titleblock--default",name:"default",template:!0,source:"<Titleblock {...args} />",hasArgs:!0},Default:{storyId:"layout-titleblock--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Titleblock","withComponentDocs"]}),J=S.meta,K=["Default"],N=S.stories.Default;export{N as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Titleblock.stories-813d6ae1.js.map

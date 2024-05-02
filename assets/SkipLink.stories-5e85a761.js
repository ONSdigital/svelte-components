import{S as T,i as x,s as A,p as y,j as m,w as g,m as f,a as S,k as w,l as b,b as u,t as c,n as $,d as h}from"./index-98bb0bde.js";import{p as C,w as D,M as I,T as j,S as q}from"./collect-stories-cccca598.js";import{S as _}from"./SkipLink-2ce6d20d.js";const L=`An invisible link to skip from the top of the page header to the content of the page. Should be the first focusable item on the page, and is included by default in the [Header](/docs/layout-header--docs) component

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { SkipLink } from "@onsvisual/svelte-components";
<\/script>

<SkipLink/>
<!-- page body -->
\`\`\`
`;function E(l){let s,o;const n=[l[0]];let p={};for(let t=0;t<n.length;t+=1)p=y(p,n[t]);return s=new _({props:p}),{c(){m(s.$$.fragment)},m(t,r){f(s,t,r),o=!0},p(t,r){const i=r&1?w(n,[b(t[0])]):{};s.$set(i)},i(t){o||(u(s.$$.fragment,t),o=!0)},o(t){c(s.$$.fragment,t),o=!1},d(t){$(s,t)}}}function H(l){let s,o,n,p,t,r;const i=[{title:"Layout/SkipLink"},{component:_},{argTypes:{}},D(L)];let k={};for(let e=0;e<i.length;e+=1)k=y(k,i[e]);return s=new I({props:k}),n=new j({props:{$$slots:{default:[E,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:l}}}),t=new q({props:{name:"Default",args:{}}}),{c(){m(s.$$.fragment),o=g(),m(n.$$.fragment),p=g(),m(t.$$.fragment)},m(e,a){f(s,e,a),S(e,o,a),f(n,e,a),S(e,p,a),f(t,e,a),r=!0},p(e,[a]){const M=a&0?w(i,[i[0],a&0&&{component:_},i[2],a&0&&b(D(L))]):{};s.$set(M);const d={};a&3&&(d.$$scope={dirty:a,ctx:e}),n.$set(d)},i(e){r||(u(s.$$.fragment,e),u(n.$$.fragment,e),u(t.$$.fragment,e),r=!0)},o(e){c(s.$$.fragment,e),c(n.$$.fragment,e),c(t.$$.fragment,e),r=!1},d(e){$(s,e),e&&h(o),$(n,e),e&&h(p),$(t,e)}}}class O extends T{constructor(s){super(),x(this,s,null,H,A,{})}}const v=C(O,{meta:{title:"Layout/SkipLink"},stories:{"tpl:default":{storyId:"layout-skiplink--default",name:"default",template:!0,source:"<SkipLink {...args} />",hasArgs:!0},Default:{storyId:"layout-skiplink--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","SkipLink","withComponentDocs"]}),G=v.meta,J=["Default"],K=v.stories.Default;export{K as Default,J as __namedExportsOrder,G as default};
//# sourceMappingURL=SkipLink.stories-5e85a761.js.map

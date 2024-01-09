import{S as T,i as k,s as C,p as v,j as c,w as y,m as f,a as _,k as w,l as x,b as i,t as d,n as $,d as b,x as I,y as j}from"./index-8607ceaf.js";import{p as A,w as h,M as H,T as L,S as P}from"./collect-stories-45ecfa9a.js";import{B as g}from"./Breadcrumb-80f2bd27.js";import"./Container-57792f3b.js";import"./Theme-77c4162c.js";const B=`Displays a breadcrumb with the current page's parents.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Breadcrumb } from "@onsvisual/svelte-components";
<\/script>

<Breadcrumb links="{[
  {label: 'Home', href: '/'},
  {label: 'Parent page', href: '/parent'}
]}" />
\`\`\`
`;function q(u){let a,s,r;const l=[u[0]];let o={};for(let t=0;t<l.length;t+=1)o=v(o,l[t]);return s=new g({props:o}),{c(){a=I("div"),c(s.$$.fragment),j(a,"padding","12px")},m(t,m){_(t,a,m),f(s,a,null),r=!0},p(t,m){const p=m&1?w(l,[x(t[0])]):{};s.$set(p)},i(t){r||(i(s.$$.fragment,t),r=!0)},o(t){d(s.$$.fragment,t),r=!1},d(t){t&&b(a),$(s)}}}function E(u){let a,s,r,l,o,t;const m=[{title:"Layout/Breadcrumb"},{component:g},{argTypes:{}},h(B)];let p={};for(let e=0;e<m.length;e+=1)p=v(p,m[e]);return a=new H({props:p}),r=new L({props:{$$slots:{default:[q,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:u}}}),o=new P({props:{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]}}}),{c(){c(a.$$.fragment),s=y(),c(r.$$.fragment),l=y(),c(o.$$.fragment)},m(e,n){f(a,e,n),_(e,s,n),f(r,e,n),_(e,l,n),f(o,e,n),t=!0},p(e,[n]){const M=n&0?w(m,[m[0],n&0&&{component:g},m[2],n&0&&x(h(B))]):{};a.$set(M);const D={};n&3&&(D.$$scope={dirty:n,ctx:e}),r.$set(D)},i(e){t||(i(a.$$.fragment,e),i(r.$$.fragment,e),i(o.$$.fragment,e),t=!0)},o(e){d(a.$$.fragment,e),d(r.$$.fragment,e),d(o.$$.fragment,e),t=!1},d(e){$(a,e),e&&b(s),$(r,e),e&&b(l),$(o,e)}}}class O extends T{constructor(a){super(),k(this,a,null,E,C,{})}}const S=A(O,{meta:{title:"Layout/Breadcrumb"},stories:{"tpl:default":{storyId:"layout-breadcrumb--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Breadcrumb {...args} />
</div>`,hasArgs:!0},Default:{storyId:"layout-breadcrumb--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Breadcrumb","withComponentDocs"]}),N=S.meta,Q=["Default"],R=S.stories.Default;export{R as Default,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=Breadcrumb.stories-6ad9c718.js.map

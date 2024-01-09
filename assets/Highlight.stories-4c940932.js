import{S as I,i as M,s as j,p as x,j as h,w as C,m as g,a as _,k as S,l as k,b as f,t as u,n as c,d,x as L,N as q}from"./index-8607ceaf.js";import{p as E,w as T,M as N,T as O,S as b}from"./collect-stories-45ecfa9a.js";const v=`A large text block that can be used as a standfirst or transition between sections of a feature article, with various options and style customisations.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Highlight } from "@onsvisual/svelte-components";
<\/script>

<Highlight>
  <p>Contents of highlight section.</p>
</Highlight>
\`\`\`
`;function z(m){let e;return{c(){e=L("p"),e.textContent="Contents of highlight component"},m(a,o){_(a,e,o)},p:q,d(a){a&&d(e)}}}function B(m){let e,a;const o=[m[0]];let i={$$slots:{default:[z]},$$scope:{ctx:m}};for(let s=0;s<o.length;s+=1)i=x(i,o[s]);return e=new y({props:i}),{c(){h(e.$$.fragment)},m(s,l){g(e,s,l),a=!0},p(s,l){const r=l&1?S(o,[k(s[0])]):{};l&2&&(r.$$scope={dirty:l,ctx:s}),e.$set(r)},i(s){a||(f(e.$$.fragment,s),a=!0)},o(s){u(e.$$.fragment,s),a=!1},d(s){c(e,s)}}}function F(m){let e,a,o,i,s,l,r,$;const p=[{title:"Layout/Highlight"},{component:y},{argTypes:{width:{options:["narrow","medium","wide","wider","full"],control:{type:"select"}},height:{options:["auto","tall","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},T(v)];let w={};for(let t=0;t<p.length;t+=1)w=x(w,p[t]);return e=new N({props:w}),o=new O({props:{$$slots:{default:[B,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:m}}}),s=new b({props:{name:"Default",args:{}}}),r=new b({props:{name:"Custom theme",args:{theme:"light",background:"#eee"}}}),{c(){h(e.$$.fragment),a=C(),h(o.$$.fragment),i=C(),h(s.$$.fragment),l=C(),h(r.$$.fragment)},m(t,n){g(e,t,n),_(t,a,n),g(o,t,n),_(t,i,n),g(s,t,n),_(t,l,n),g(r,t,n),$=!0},p(t,[n]){const A=n&0?S(p,[p[0],n&0&&{component:y},p[2],n&0&&k(T(v))]):{};e.$set(A);const H={};n&3&&(H.$$scope={dirty:n,ctx:t}),o.$set(H)},i(t){$||(f(e.$$.fragment,t),f(o.$$.fragment,t),f(s.$$.fragment,t),f(r.$$.fragment,t),$=!0)},o(t){u(e.$$.fragment,t),u(o.$$.fragment,t),u(s.$$.fragment,t),u(r.$$.fragment,t),$=!1},d(t){c(e,t),t&&d(a),c(o,t),t&&d(i),c(s,t),t&&d(l),c(r,t)}}}class G extends I{constructor(e){super(),M(this,e,null,F,j,{})}}const D=E(G,{meta:{title:"Layout/Highlight"},stories:{"tpl:default":{storyId:"layout-highlight--default",name:"default",template:!0,source:`<Highlight {...args}>
  <p>Contents of highlight component</p>
</Highlight>`,hasArgs:!0},Default:{storyId:"layout-highlight--default",name:"Default",template:!1,hasArgs:!1},CustomTheme:{storyId:"layout-highlight--custom-theme",name:"Custom theme",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Highlight","withComponentDocs"]}),y=D.meta,P=["Default","CustomTheme"],Q=D.stories.Default,R=D.stories.CustomTheme;export{R as CustomTheme,Q as Default,P as __namedExportsOrder,y as default};
//# sourceMappingURL=Highlight.stories-4c940932.js.map

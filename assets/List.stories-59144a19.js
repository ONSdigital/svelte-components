import{S as q,i as z,s as E,p as M,j as p,w as c,m as u,a as m,k as F,l as j,b as $,t as d,n as _,d as f,x as T,y as O,z as G}from"./index-9473b494.js";import{p as H,w as N,M as J,T as K,S}from"./collect-stories-458d6889.js";import{L as C}from"./List-8aa9e6d4.js";const b=`A list component with multiple modes.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { List } from "@onsvisual/svelte-components";
<\/script>

<List>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</List>
\`\`\`
`;function P(L){let s,a,l,o,r;return{c(){s=T("li"),s.textContent="First list item",a=c(),l=T("li"),l.textContent="Second list item",o=c(),r=T("li"),r.textContent="Third list item"},m(e,i){m(e,s,i),m(e,a,i),m(e,l,i),m(e,o,i),m(e,r,i)},p:G,d(e){e&&f(s),e&&f(a),e&&f(l),e&&f(o),e&&f(r)}}}function Q(L){let s,a,l;const o=[L[0]];let r={$$slots:{default:[P]},$$scope:{ctx:L}};for(let e=0;e<o.length;e+=1)r=M(r,o[e]);return a=new C({props:r}),{c(){s=T("div"),p(a.$$.fragment),O(s,"padding","12px")},m(e,i){m(e,s,i),u(a,s,null),l=!0},p(e,i){const y=i&1?F(o,[j(e[0])]):{};i&2&&(y.$$scope={dirty:i,ctx:e}),a.$set(y)},i(e){l||($(a.$$.fragment,e),l=!0)},o(e){d(a.$$.fragment,e),l=!1},d(e){e&&f(s),_(a)}}}function R(L){let s,a,l,o,r,e,i,y,D,A,g,x;const w=[{title:"Layout/List"},{component:C},{argTypes:{}},N(b)];let B={};for(let t=0;t<w.length;t+=1)B=M(B,w[t]);return s=new J({props:B}),l=new K({props:{$$slots:{default:[Q,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:L}}}),r=new S({props:{name:"Default",args:{}}}),i=new S({props:{name:"Dashed list",args:{mode:"dash"}}}),D=new S({props:{name:"Numeric list",args:{mode:"number"}}}),g=new S({props:{name:"Bare list",args:{mode:"bare"}}}),{c(){p(s.$$.fragment),a=c(),p(l.$$.fragment),o=c(),p(r.$$.fragment),e=c(),p(i.$$.fragment),y=c(),p(D.$$.fragment),A=c(),p(g.$$.fragment)},m(t,n){u(s,t,n),m(t,a,n),u(l,t,n),m(t,o,n),u(r,t,n),m(t,e,n),u(i,t,n),m(t,y,n),u(D,t,n),m(t,A,n),u(g,t,n),x=!0},p(t,[n]){const k=n&0?F(w,[w[0],n&0&&{component:C},w[2],n&0&&j(N(b))]):{};s.$set(k);const I={};n&3&&(I.$$scope={dirty:n,ctx:t}),l.$set(I)},i(t){x||($(s.$$.fragment,t),$(l.$$.fragment,t),$(r.$$.fragment,t),$(i.$$.fragment,t),$(D.$$.fragment,t),$(g.$$.fragment,t),x=!0)},o(t){d(s.$$.fragment,t),d(l.$$.fragment,t),d(r.$$.fragment,t),d(i.$$.fragment,t),d(D.$$.fragment,t),d(g.$$.fragment,t),x=!1},d(t){_(s,t),t&&f(a),_(l,t),t&&f(o),_(r,t),t&&f(e),_(i,t),t&&f(y),_(D,t),t&&f(A),_(g,t)}}}class U extends q{constructor(s){super(),z(this,s,null,R,E,{})}}const v=H(U,{meta:{title:"Layout/List"},stories:{"tpl:default":{storyId:"layout-list--default",name:"default",template:!0,source:`<div style:padding="12px">
  <List {...args}>
    <li>First list item</li>
    <li>Second list item</li>
    <li>Third list item</li>
  </List>
</div>`,hasArgs:!0},Default:{storyId:"layout-list--default",name:"Default",template:!1,hasArgs:!1},DashedList:{storyId:"layout-list--dashed-list",name:"Dashed list",template:!1,hasArgs:!1},NumericList:{storyId:"layout-list--numeric-list",name:"Numeric list",template:!1,hasArgs:!1},BareList:{storyId:"layout-list--bare-list",name:"Bare list",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","List","withComponentDocs"]}),Y=v.meta,Z=["Default","DashedList","NumericList","BareList"],h=v.stories.Default,tt=v.stories.DashedList,et=v.stories.NumericList,st=v.stories.BareList;export{st as BareList,tt as DashedList,h as Default,et as NumericList,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=List.stories-59144a19.js.map

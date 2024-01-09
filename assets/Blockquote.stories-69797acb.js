import{S as O,i as M,s as C,p as v,j as c,w as b,m as f,a as g,k as S,l as A,b as d,t as $,n as _,d as q,x as h,y as j,I as L}from"./index-8607ceaf.js";import{p as P,w as B,M as E,T as z,S as w}from"./collect-stories-45ecfa9a.js";import{B as x}from"./Blockquote-eb8492cd.js";const T=`An indented block of large text, designed to sit inside a \`<Section>\` block. Adding an "attribution" text will make it appear as a quote.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Blockquote } from "@onsvisual/svelte-components";
<\/script>

<Blockquote attribution="A. Person">Some quoted text.</Blockquote>
\`\`\`
`;function F(m){let t;return{c(){t=L(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.`)},m(s,n){g(s,t,n)},d(s){s&&q(t)}}}function G(m){let t,s,n;const i=[m[0]];let l={$$slots:{default:[F]},$$scope:{ctx:m}};for(let o=0;o<i.length;o+=1)l=v(l,i[o]);return s=new x({props:l}),{c(){t=h("div"),c(s.$$.fragment),j(t,"padding","12px")},m(o,r){g(o,t,r),f(s,t,null),n=!0},p(o,r){const u=r&1?S(i,[A(o[0])]):{};r&2&&(u.$$scope={dirty:r,ctx:o}),s.$set(u)},i(o){n||(d(s.$$.fragment,o),n=!0)},o(o){$(s.$$.fragment,o),n=!1},d(o){o&&q(t),_(s)}}}function H(m){let t,s,n,i,l,o,r,u;const p=[{title:"Decorators/Blockquote"},{component:x},{argTypes:{}},B(T)];let k={};for(let e=0;e<p.length;e+=1)k=v(k,p[e]);return t=new E({props:k}),n=new z({props:{$$slots:{default:[G,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:m}}}),l=new w({props:{name:"Default",args:{attribution:"A. Person"}}}),r=new w({props:{name:"Text only",args:{width:"medium",title:"Section title"}}}),{c(){c(t.$$.fragment),s=b(),c(n.$$.fragment),i=b(),c(l.$$.fragment),o=b(),c(r.$$.fragment)},m(e,a){f(t,e,a),g(e,s,a),f(n,e,a),g(e,i,a),f(l,e,a),g(e,o,a),f(r,e,a),u=!0},p(e,[a]){const I=a&0?S(p,[p[0],a&0&&{component:x},p[2],a&0&&A(B(T))]):{};t.$set(I);const D={};a&3&&(D.$$scope={dirty:a,ctx:e}),n.$set(D)},i(e){u||(d(t.$$.fragment,e),d(n.$$.fragment,e),d(l.$$.fragment,e),d(r.$$.fragment,e),u=!0)},o(e){$(t.$$.fragment,e),$(n.$$.fragment,e),$(l.$$.fragment,e),$(r.$$.fragment,e),u=!1},d(e){_(t,e),e&&q(s),_(n,e),e&&q(i),_(l,e),e&&q(o),_(r,e)}}}class J extends O{constructor(t){super(),M(this,t,null,H,C,{})}}const y=P(J,{meta:{title:"Decorators/Blockquote"},stories:{"tpl:default":{storyId:"decorators-blockquote--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Blockquote {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Blockquote>
</div>`,hasArgs:!0},Default:{storyId:"decorators-blockquote--default",name:"Default",template:!1,hasArgs:!1},TextOnly:{storyId:"decorators-blockquote--text-only",name:"Text only",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Blockquote","withComponentDocs"]}),R=y.meta,U=["Default","TextOnly"],V=y.stories.Default,W=y.stories.TextOnly;export{V as Default,W as TextOnly,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Blockquote.stories-69797acb.js.map

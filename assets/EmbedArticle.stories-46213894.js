import{S as M,i as Y,s as j,p as z,j as $,w as v,m as g,a as d,k as I,l as k,b as h,t as _,n as b,d as f,x as q,y,H as S,N as x,C as B}from"./index-8607ceaf.js";import{p as N,w as A,M as O,T as F,S as J}from"./collect-stories-45ecfa9a.js";import{E as K}from"./Embed-7e9146af.js";import{H as P}from"./Highlight-6771db99.js";import{S as w}from"./Section-a6f4616e.js";import{G as Q}from"./Grid-376556c5.js";import{S as R}from"./Select-22fc71d3.js";import"./_commonjsHelpers-725317a4.js";import"./Container-57792f3b.js";import"./Theme-77c4162c.js";import"./utils-f6662b64.js";const H=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import { Embed, Highlight, Select, Section, Grid } from "@onsvisual/svelte-components";
<\/script>

<Embed>
  <Highlight height="auto">
    <h2>This is a sub-headline</h2>
    <p style:font-size="1rem">This is a description for the selector below</p>
    <Select floatingConfig="{{ strategy: 'fixed' }}" hideLabel />
  </Highlight>

  <Section title="Section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat..
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </Section>

  <Grid colwidth="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
  </Grid>

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </Section>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Section>
</Embed>
\`\`\`
`;function V(u){let e,o,t,s,a,m,r;return m=new R({props:{floatingConfig:{strategy:"fixed"},hideLabel:!0}}),{c(){e=q("div"),o=q("h2"),o.textContent="This is a sub-headline",t=v(),s=q("p"),s.textContent="This is a description for the selector below",a=v(),$(m.$$.fragment),y(s,"font-size","1rem"),y(e,"padding","0 12px")},m(c,i){d(c,e,i),S(e,o),S(e,t),S(e,s),S(e,a),g(m,e,null),r=!0},p:x,i(c){r||(h(m.$$.fragment,c),r=!0)},o(c){_(m.$$.fragment,c),r=!1},d(c){c&&f(e),b(m)}}}function W(u){let e,o,t;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat..`,o=v(),t=q("p"),t.textContent=`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`},m(s,a){d(s,e,a),d(s,o,a),d(s,t,a)},p:x,d(s){s&&f(e),s&&f(o),s&&f(t)}}}function X(u){let e;return{c(){e=q("div"),B(e,"class","grid-cell svelte-eiifaj")},m(o,t){d(o,e,t)},p:x,d(o){o&&f(e)}}}function Z(u){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},m(o,t){d(o,e,t)},p:x,d(o){o&&f(e)}}}function ee(u){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.`},m(o,t){d(o,e,t)},p:x,d(o){o&&f(e)}}}function te(u){let e,o,t,s,a,m,r,c,i,p;return e=new P({props:{height:"auto",marginBottom:!1,$$slots:{default:[V]},$$scope:{ctx:u}}}),t=new w({props:{title:"Section title",marginTop:!0,$$slots:{default:[W]},$$scope:{ctx:u}}}),a=new Q({props:{colwidth:"medium",caption:"This is a caption text",$$slots:{default:[X]},$$scope:{ctx:u}}}),r=new w({props:{title:"Another section title",$$slots:{default:[Z]},$$scope:{ctx:u}}}),i=new w({props:{title:"Yet another section title",$$slots:{default:[ee]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment),o=v(),$(t.$$.fragment),s=v(),$(a.$$.fragment),m=v(),$(r.$$.fragment),c=v(),$(i.$$.fragment)},m(n,l){g(e,n,l),d(n,o,l),g(t,n,l),d(n,s,l),g(a,n,l),d(n,m,l),g(r,n,l),d(n,c,l),g(i,n,l),p=!0},p(n,l){const T={};l&2&&(T.$$scope={dirty:l,ctx:n}),e.$set(T);const E={};l&2&&(E.$$scope={dirty:l,ctx:n}),t.$set(E);const D={};l&2&&(D.$$scope={dirty:l,ctx:n}),a.$set(D);const C={};l&2&&(C.$$scope={dirty:l,ctx:n}),r.$set(C);const L={};l&2&&(L.$$scope={dirty:l,ctx:n}),i.$set(L)},i(n){p||(h(e.$$.fragment,n),h(t.$$.fragment,n),h(a.$$.fragment,n),h(r.$$.fragment,n),h(i.$$.fragment,n),p=!0)},o(n){_(e.$$.fragment,n),_(t.$$.fragment,n),_(a.$$.fragment,n),_(r.$$.fragment,n),_(i.$$.fragment,n),p=!1},d(n){b(e,n),n&&f(o),b(t,n),n&&f(s),b(a,n),n&&f(m),b(r,n),n&&f(c),b(i,n)}}}function ie(u){let e,o;return e=new K({props:{$$slots:{default:[te]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment)},m(t,s){g(e,t,s),o=!0},p(t,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){o||(h(e.$$.fragment,t),o=!0)},o(t){_(e.$$.fragment,t),o=!1},d(t){b(e,t)}}}function ne(u){let e,o,t,s,a,m;const r=[{title:"Templates/Embed article"},{component:null},{argTypes:{}},A(H)];let c={};for(let i=0;i<r.length;i+=1)c=z(c,r[i]);return e=new O({props:c}),t=new F({props:{$$slots:{default:[ie,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:u}}}),a=new J({props:{name:"Default",args:{}}}),{c(){$(e.$$.fragment),o=v(),$(t.$$.fragment),s=v(),$(a.$$.fragment)},m(i,p){g(e,i,p),d(i,o,p),g(t,i,p),d(i,s,p),g(a,i,p),m=!0},p(i,[p]){const n=p&0?I(r,[r[0],r[1],r[2],k(A(H))]):{};e.$set(n);const l={};p&2&&(l.$$scope={dirty:p,ctx:i}),t.$set(l)},i(i){m||(h(e.$$.fragment,i),h(t.$$.fragment,i),h(a.$$.fragment,i),m=!0)},o(i){_(e.$$.fragment,i),_(t.$$.fragment,i),_(a.$$.fragment,i),m=!1},d(i){b(e,i),i&&f(o),b(t,i),i&&f(s),b(a,i)}}}class U extends M{constructor(e){super(),Y(this,e,null,ne,j,{})}}U.__docgen={version:3,name:"EmbedArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G=N(U,{meta:{title:"Templates/Embed article"},stories:{"tpl:default":{storyId:"templates-embed-article--default",name:"default",template:!0,source:`<Embed>
  <Highlight height="auto" marginBottom="{false}">
    <div style:padding="0 12px">
      <h2>This is a sub-headline</h2>
      <p style:font-size="1rem">This is a description for the selector below</p>
      <Select floatingConfig="{{ strategy: 'fixed' }}" hideLabel />
    </div>
  </Highlight>

  <Section title="Section title" marginTop="{true}">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat..
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </Section>

  <Grid colwidth="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
  </Grid>

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </Section>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Section>
</Embed>`,hasArgs:!0},Default:{storyId:"templates-embed-article--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Embed","Highlight","Section","Grid","Select","componentDocs","withComponentDocs"]}),$e=G.meta,ge=["Default"],he=G.stories.Default;export{he as Default,ge as __namedExportsOrder,$e as default};
//# sourceMappingURL=EmbedArticle.stories-46213894.js.map

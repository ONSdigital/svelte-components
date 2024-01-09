import{S as Y,i as j,s as y,p as N,j as f,w as _,m as $,a as l,k as O,l as z,b,t as g,n as q,d as u,x as T,C as F,N as h,I as J}from"./index-8607ceaf.js";import{p as K,w as P,M as Q,T as R,S as V}from"./collect-stories-45ecfa9a.js";import{H as W}from"./Header-ee93c750.js";import{B as X}from"./Breadcrumb-80f2bd27.js";import{T as Z}from"./Titleblock-2af11afc.js";import{S as B}from"./Section-a6f4616e.js";import{G as ee}from"./Grid-376556c5.js";import{B as te}from"./Blockquote-eb8492cd.js";import{F as ie}from"./Footer-69d5f305.js";import"./Theme-77c4162c.js";import"./Container-57792f3b.js";import"./utils-f6662b64.js";const G=`A full page article template with compact header and footer, suitable for standard articles.

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import {
    Header,
    Breadcrumb,
    Titleblock,
    Section,
    Grid,
    Blockquote,
    Footer,
  } from "@onsvisual/svelte-components";
<\/script>

<Header />
<Breadcrumb
  links="{[
    { label: 'Home', href: '/' },
    { label: 'Parent', href: '/parent/' },
  ]}"
  background="#eaeaea"
/>
<Titleblock title="Page title" background="#eaeaea">
  <div slot="after">09 August 2023</div>
</Titleblock>

<Section title="Section title" marginTop="{true}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <Blockquote attribution="A. Person"
    >This is a blockquote, white comprises of a large block of inset text.</Blockquote
  >
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Grid colwidth="full" caption="This is a caption text">
  <div class="grid-cell"></div>
</Grid>

<Section title="Another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Section title="Yet another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Footer theme="dark" />
\`\`\`
`;function ne(c){let t;return{c(){t=T("div"),t.textContent="09 August 2023",F(t,"slot","after")},m(a,n){l(a,t,n)},p:h,d(a){a&&u(t)}}}function oe(c){let t;return{c(){t=J("This is a blockquote, white comprises of a large block of inset text.")},m(a,n){l(a,t,n)},d(a){a&&u(t)}}}function ae(c){let t,a,n,v,s,d;return n=new te({props:{attribution:"A. Person",$$slots:{default:[oe]},$$scope:{ctx:c}}}),{c(){t=T("p"),t.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,a=_(),f(n.$$.fragment),v=_(),s=T("p"),s.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(o,m){l(o,t,m),l(o,a,m),$(n,o,m),l(o,v,m),l(o,s,m),d=!0},p(o,m){const i={};m&2&&(i.$$scope={dirty:m,ctx:o}),n.$set(i)},i(o){d||(b(n.$$.fragment,o),d=!0)},o(o){g(n.$$.fragment,o),d=!1},d(o){o&&u(t),o&&u(a),q(n,o),o&&u(v),o&&u(s)}}}function re(c){let t;return{c(){t=T("div"),F(t,"class","grid-cell svelte-17hptcu")},m(a,n){l(a,t,n)},p:h,d(a){a&&u(t)}}}function se(c){let t;return{c(){t=T("p"),t.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(a,n){l(a,t,n)},p:h,d(a){a&&u(t)}}}function le(c){let t;return{c(){t=T("p"),t.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(a,n){l(a,t,n)},p:h,d(a){a&&u(t)}}}function ue(c){let t,a,n,v,s,d,o,m,i,p,x,S,k,A,w,D;return t=new W({}),n=new X({props:{links:[{label:"Home",href:"/"},{label:"Parent",href:"/parent/"}],background:"#eaeaea"}}),s=new Z({props:{title:"Page title",background:"#eaeaea",$$slots:{after:[ne]},$$scope:{ctx:c}}}),o=new B({props:{title:"Section title",marginTop:!0,$$slots:{default:[ae]},$$scope:{ctx:c}}}),i=new ee({props:{colwidth:"full",caption:"This is a caption text",$$slots:{default:[re]},$$scope:{ctx:c}}}),x=new B({props:{title:"Another section title",$$slots:{default:[se]},$$scope:{ctx:c}}}),k=new B({props:{title:"Yet another section title",$$slots:{default:[le]},$$scope:{ctx:c}}}),w=new ie({props:{theme:"dark"}}),{c(){f(t.$$.fragment),a=_(),f(n.$$.fragment),v=_(),f(s.$$.fragment),d=_(),f(o.$$.fragment),m=_(),f(i.$$.fragment),p=_(),f(x.$$.fragment),S=_(),f(k.$$.fragment),A=_(),f(w.$$.fragment)},m(e,r){$(t,e,r),l(e,a,r),$(n,e,r),l(e,v,r),$(s,e,r),l(e,d,r),$(o,e,r),l(e,m,r),$(i,e,r),l(e,p,r),$(x,e,r),l(e,S,r),$(k,e,r),l(e,A,r),$(w,e,r),D=!0},p(e,r){const E={};r&2&&(E.$$scope={dirty:r,ctx:e}),s.$set(E);const L={};r&2&&(L.$$scope={dirty:r,ctx:e}),o.$set(L);const U={};r&2&&(U.$$scope={dirty:r,ctx:e}),i.$set(U);const C={};r&2&&(C.$$scope={dirty:r,ctx:e}),x.$set(C);const H={};r&2&&(H.$$scope={dirty:r,ctx:e}),k.$set(H)},i(e){D||(b(t.$$.fragment,e),b(n.$$.fragment,e),b(s.$$.fragment,e),b(o.$$.fragment,e),b(i.$$.fragment,e),b(x.$$.fragment,e),b(k.$$.fragment,e),b(w.$$.fragment,e),D=!0)},o(e){g(t.$$.fragment,e),g(n.$$.fragment,e),g(s.$$.fragment,e),g(o.$$.fragment,e),g(i.$$.fragment,e),g(x.$$.fragment,e),g(k.$$.fragment,e),g(w.$$.fragment,e),D=!1},d(e){q(t,e),e&&u(a),q(n,e),e&&u(v),q(s,e),e&&u(d),q(o,e),e&&u(m),q(i,e),e&&u(p),q(x,e),e&&u(S),q(k,e),e&&u(A),q(w,e)}}}function me(c){let t,a,n,v,s,d;const o=[{title:"Templates/Standard article"},{component:null},{argTypes:{}},P(G)];let m={};for(let i=0;i<o.length;i+=1)m=N(m,o[i]);return t=new Q({props:m}),n=new R({props:{$$slots:{default:[ue,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:c}}}),s=new V({props:{name:"Default",args:{}}}),{c(){f(t.$$.fragment),a=_(),f(n.$$.fragment),v=_(),f(s.$$.fragment)},m(i,p){$(t,i,p),l(i,a,p),$(n,i,p),l(i,v,p),$(s,i,p),d=!0},p(i,[p]){const x=p&0?O(o,[o[0],o[1],o[2],z(P(G))]):{};t.$set(x);const S={};p&2&&(S.$$scope={dirty:p,ctx:i}),n.$set(S)},i(i){d||(b(t.$$.fragment,i),b(n.$$.fragment,i),b(s.$$.fragment,i),d=!0)},o(i){g(t.$$.fragment,i),g(n.$$.fragment,i),g(s.$$.fragment,i),d=!1},d(i){q(t,i),i&&u(a),q(n,i),i&&u(v),q(s,i)}}}class I extends Y{constructor(t){super(),j(this,t,null,me,y,{})}}I.__docgen={version:3,name:"StandardArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const M=K(I,{meta:{title:"Templates/Standard article"},stories:{"tpl:default":{storyId:"templates-standard-article--default",name:"default",template:!0,source:`<Header />
<Breadcrumb
  links="{[
    { label: 'Home', href: '/' },
    { label: 'Parent', href: '/parent/' },
  ]}"
  background="#eaeaea"
/>
<Titleblock title="Page title" background="#eaeaea">
  <div slot="after">09 August 2023</div>
</Titleblock>

<Section title="Section title" marginTop="{true}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <Blockquote attribution="A. Person"
    >This is a blockquote, white comprises of a large block of inset text.</Blockquote
  >
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Grid colwidth="full" caption="This is a caption text">
  <div class="grid-cell"></div>
</Grid>

<Section title="Another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Section title="Yet another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Footer theme="dark" />`,hasArgs:!0},Default:{storyId:"templates-standard-article--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Header","Breadcrumb","Titleblock","Section","Grid","Blockquote","Footer","componentDocs","withComponentDocs"]}),Se=M.meta,we=["Default"],Te=M.stories.Default;export{Te as Default,we as __namedExportsOrder,Se as default};
//# sourceMappingURL=StandardArticle.stories-c809c5b1.js.map

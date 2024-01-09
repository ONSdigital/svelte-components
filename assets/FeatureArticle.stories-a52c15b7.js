import{S as J,i as K,s as Q,p as R,j as f,w as _,m as $,a as m,k as V,l as X,b as g,t as h,n as v,d as p,x as q,N as H,C as D,H as E,I as k,y as I}from"./index-8607ceaf.js";import{p as Z,w as Y,M as ee,T as te,S as ie}from"./collect-stories-45ecfa9a.js";import{M as ne}from"./Main-913b56b3.js";import{H as oe}from"./Header-ee93c750.js";import{H as re}from"./Hero-25f1a34d.js";import{H as le}from"./Highlight-6771db99.js";import{S as B}from"./Section-a6f4616e.js";import{G as N}from"./Grid-376556c5.js";import{B as se}from"./Blockquote-eb8492cd.js";import{E as G}from"./Em-85251bab.js";import{D as ae}from"./Divider-c6bfe4c4.js";import{S as ue,a as F}from"./ScrollerSection-e0c0c380.js";import{F as ce}from"./Footer-69d5f305.js";import"./Theme-77c4162c.js";import"./utils-f6662b64.js";import"./Container-57792f3b.js";import"./_commonjsHelpers-725317a4.js";const P=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import {
    Header,
    Hero,
    Highlight,
    Section,
    Grid,
    Divider,
    Main,
    Blockquote,
    Em,
    Scroller,
    ScrollerSection,
    Footer,
  } from "@onsvisual/svelte-components";

  const scrollerColors = ["#ddd", "#777", "#222"];
  let scrollerColor = scrollerColors[0];
<\/script>

<Header compact />
<Main>
<Hero
  title="This is an article title"
  lede="This is a short, introductory sentence"
  date="2023-07-04"
>
  <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
</Hero>

<Highlight marginBottom="{false}">
  <p>This is a test paragraph.</p>
  <p>This is another test paragraph.</p>
</Highlight>

<Section title="Section title" marginTop="{true}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <Blockquote attribution="A. Person">
    This is a blockquote, white comprises of a large block of inset text.
  </Blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Grid colwidth="medium" caption="This is a caption text">
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
</Grid>

<Divider />

<Section title="Another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Scroller
  id="scroller"
  splitscreen
  on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}"
>
  <div slot="background">
    <Grid width="full" height="full">
      <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear
        <Em color="{scrollerColors[0]}">light grey</Em>.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this second caption is visible, the background will appear
        <Em color="{scrollerColors[1]}">dark grey</Em>.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this third caption is visible, the background will appear
        <Em color="{scrollerColors[2]}">black</Em>.
      </p>
    </ScrollerSection>
  </div>
</Scroller>

<Section title="Yet another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>
</Main>
<Footer compact />
\`\`\`
`;function me(c){let e,n,t;return{c(){e=q("p"),e.textContent="This is a test paragraph.",n=_(),t=q("p"),t.textContent="This is another test paragraph."},m(l,r){m(l,e,r),m(l,n,r),m(l,t,r)},p:H,d(l){l&&p(e),l&&p(n),l&&p(t)}}}function pe(c){let e;return{c(){e=k("This is a blockquote, white comprises of a large block of inset text.")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function de(c){let e,n,t,l,r,o;return t=new se({props:{attribution:"A. Person",$$slots:{default:[pe]},$$scope:{ctx:c}}}),{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,n=_(),f(t.$$.fragment),l=_(),r=q("p"),r.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,s){m(i,e,s),m(i,n,s),$(t,i,s),m(i,l,s),m(i,r,s),o=!0},p(i,s){const u={};s&64&&(u.$$scope={dirty:s,ctx:i}),t.$set(u)},i(i){o||(g(t.$$.fragment,i),o=!0)},o(i){h(t.$$.fragment,i),o=!1},d(i){i&&p(e),i&&p(n),v(t,i),i&&p(l),i&&p(r)}}}function fe(c){let e,n,t,l,r;return{c(){e=q("div"),n=_(),t=q("div"),l=_(),r=q("div"),D(e,"class","grid-cell svelte-eiifaj"),D(t,"class","grid-cell svelte-eiifaj"),D(r,"class","grid-cell svelte-eiifaj")},m(o,i){m(o,e,i),m(o,n,i),m(o,t,i),m(o,l,i),m(o,r,i)},p:H,d(o){o&&p(e),o&&p(n),o&&p(t),o&&p(l),o&&p(r)}}}function $e(c){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(n,t){m(n,e,t)},p:H,d(n){n&&p(e)}}}function ge(c){let e;return{c(){e=q("div"),D(e,"class","placeholder-block"),I(e,"background-color",c[0])},m(n,t){m(n,e,t)},p(n,t){t&1&&I(e,"background-color",n[0])},d(n){n&&p(e)}}}function he(c){let e,n,t;return n=new N({props:{width:"full",height:"full",$$slots:{default:[ge]},$$scope:{ctx:c}}}),{c(){e=q("div"),f(n.$$.fragment),D(e,"slot","background")},m(l,r){m(l,e,r),$(n,e,null),t=!0},p(l,r){const o={};r&65&&(o.$$scope={dirty:r,ctx:l}),n.$set(o)},i(l){t||(g(n.$$.fragment,l),t=!0)},o(l){h(n.$$.fragment,l),t=!1},d(l){l&&p(e),v(n)}}}function ve(c){let e;return{c(){e=k("light grey")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function _e(c){let e,n,t,l,r;return t=new G({props:{color:c[1][0],$$slots:{default:[ve]},$$scope:{ctx:c}}}),{c(){e=q("p"),n=k("When this first caption is visible, the background will appear "),f(t.$$.fragment),l=k(".")},m(o,i){m(o,e,i),E(e,n),$(t,e,null),E(e,l),r=!0},p(o,i){const s={};i&64&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){r||(g(t.$$.fragment,o),r=!0)},o(o){h(t.$$.fragment,o),r=!1},d(o){o&&p(e),v(t)}}}function be(c){let e;return{c(){e=k("dark grey")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function qe(c){let e,n,t,l,r;return t=new G({props:{color:c[1][1],$$slots:{default:[be]},$$scope:{ctx:c}}}),{c(){e=q("p"),n=k("When this section caption is visible, the background will appear "),f(t.$$.fragment),l=k(".")},m(o,i){m(o,e,i),E(e,n),$(t,e,null),E(e,l),r=!0},p(o,i){const s={};i&64&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){r||(g(t.$$.fragment,o),r=!0)},o(o){h(t.$$.fragment,o),r=!1},d(o){o&&p(e),v(t)}}}function Se(c){let e;return{c(){e=k("black")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function xe(c){let e,n,t,l,r;return t=new G({props:{color:c[1][2],$$slots:{default:[Se]},$$scope:{ctx:c}}}),{c(){e=q("p"),n=k("When this third caption is visible, the background will appear "),f(t.$$.fragment),l=k(".")},m(o,i){m(o,e,i),E(e,n),$(t,e,null),E(e,l),r=!0},p(o,i){const s={};i&64&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){r||(g(t.$$.fragment,o),r=!0)},o(o){h(t.$$.fragment,o),r=!1},d(o){o&&p(e),v(t)}}}function ke(c){let e,n,t,l,r,o,i;return n=new F({props:{$$slots:{default:[_e]},$$scope:{ctx:c}}}),l=new F({props:{$$slots:{default:[qe]},$$scope:{ctx:c}}}),o=new F({props:{$$slots:{default:[xe]},$$scope:{ctx:c}}}),{c(){e=q("div"),f(n.$$.fragment),t=_(),f(l.$$.fragment),r=_(),f(o.$$.fragment),D(e,"slot","foreground")},m(s,u){m(s,e,u),$(n,e,null),E(e,t),$(l,e,null),E(e,r),$(o,e,null),i=!0},p(s,u){const b={};u&64&&(b.$$scope={dirty:u,ctx:s}),n.$set(b);const S={};u&64&&(S.$$scope={dirty:u,ctx:s}),l.$set(S);const w={};u&64&&(w.$$scope={dirty:u,ctx:s}),o.$set(w)},i(s){i||(g(n.$$.fragment,s),g(l.$$.fragment,s),g(o.$$.fragment,s),i=!0)},o(s){h(n.$$.fragment,s),h(l.$$.fragment,s),h(o.$$.fragment,s),i=!1},d(s){s&&p(e),v(n),v(l),v(o)}}}function we(c){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(n,t){m(n,e,t)},p:H,d(n){n&&p(e)}}}function Ee(c){let e,n,t,l,r,o,i,s,u,b,S,w,x,A,C,T;return e=new re({props:{title:"This is an article title",lede:"This is a short, introductory sentence",date:"2023-07-04"}}),t=new le({props:{marginBottom:!1,$$slots:{default:[me]},$$scope:{ctx:c}}}),r=new B({props:{title:"Section title",marginTop:!0,$$slots:{default:[de]},$$scope:{ctx:c}}}),i=new N({props:{colwidth:"medium",caption:"This is a caption text",$$slots:{default:[fe]},$$scope:{ctx:c}}}),u=new ae({}),S=new B({props:{title:"Another section title",$$slots:{default:[$e]},$$scope:{ctx:c}}}),x=new ue({props:{id:"scroller",splitscreen:!0,$$slots:{foreground:[ke],background:[he]},$$scope:{ctx:c}}}),x.$on("change",c[2]),x.$on("enter",c[3]),x.$on("exit",c[4]),C=new B({props:{title:"Yet another section title",$$slots:{default:[we]},$$scope:{ctx:c}}}),{c(){f(e.$$.fragment),n=_(),f(t.$$.fragment),l=_(),f(r.$$.fragment),o=_(),f(i.$$.fragment),s=_(),f(u.$$.fragment),b=_(),f(S.$$.fragment),w=_(),f(x.$$.fragment),A=_(),f(C.$$.fragment)},m(a,d){$(e,a,d),m(a,n,d),$(t,a,d),m(a,l,d),$(r,a,d),m(a,o,d),$(i,a,d),m(a,s,d),$(u,a,d),m(a,b,d),$(S,a,d),m(a,w,d),$(x,a,d),m(a,A,d),$(C,a,d),T=!0},p(a,d){const L={};d&64&&(L.$$scope={dirty:d,ctx:a}),t.$set(L);const M={};d&64&&(M.$$scope={dirty:d,ctx:a}),r.$set(M);const U={};d&64&&(U.$$scope={dirty:d,ctx:a}),i.$set(U);const W={};d&64&&(W.$$scope={dirty:d,ctx:a}),S.$set(W);const j={};d&65&&(j.$$scope={dirty:d,ctx:a}),x.$set(j);const y={};d&64&&(y.$$scope={dirty:d,ctx:a}),C.$set(y)},i(a){T||(g(e.$$.fragment,a),g(t.$$.fragment,a),g(r.$$.fragment,a),g(i.$$.fragment,a),g(u.$$.fragment,a),g(S.$$.fragment,a),g(x.$$.fragment,a),g(C.$$.fragment,a),T=!0)},o(a){h(e.$$.fragment,a),h(t.$$.fragment,a),h(r.$$.fragment,a),h(i.$$.fragment,a),h(u.$$.fragment,a),h(S.$$.fragment,a),h(x.$$.fragment,a),h(C.$$.fragment,a),T=!1},d(a){v(e,a),a&&p(n),v(t,a),a&&p(l),v(r,a),a&&p(o),v(i,a),a&&p(s),v(u,a),a&&p(b),v(S,a),a&&p(w),v(x,a),a&&p(A),v(C,a)}}}function Ce(c){let e,n,t,l,r,o;return e=new oe({props:{compact:!0}}),t=new ne({props:{$$slots:{default:[Ee]},$$scope:{ctx:c}}}),r=new ce({props:{compact:!0}}),{c(){f(e.$$.fragment),n=_(),f(t.$$.fragment),l=_(),f(r.$$.fragment)},m(i,s){$(e,i,s),m(i,n,s),$(t,i,s),m(i,l,s),$(r,i,s),o=!0},p(i,s){const u={};s&65&&(u.$$scope={dirty:s,ctx:i}),t.$set(u)},i(i){o||(g(e.$$.fragment,i),g(t.$$.fragment,i),g(r.$$.fragment,i),o=!0)},o(i){h(e.$$.fragment,i),h(t.$$.fragment,i),h(r.$$.fragment,i),o=!1},d(i){v(e,i),i&&p(n),v(t,i),i&&p(l),v(r,i)}}}function De(c){let e,n,t,l,r,o;const i=[{title:"Templates/Feature article"},{component:null},{argTypes:{}},Y(P)];let s={};for(let u=0;u<i.length;u+=1)s=R(s,i[u]);return e=new ee({props:s}),t=new te({props:{$$slots:{default:[Ce,({args:u})=>({5:u}),({args:u})=>u?32:0]},$$scope:{ctx:c}}}),r=new ie({props:{name:"Default",args:{}}}),{c(){f(e.$$.fragment),n=_(),f(t.$$.fragment),l=_(),f(r.$$.fragment)},m(u,b){$(e,u,b),m(u,n,b),$(t,u,b),m(u,l,b),$(r,u,b),o=!0},p(u,[b]){const S=b&0?V(i,[i[0],i[1],i[2],X(Y(P))]):{};e.$set(S);const w={};b&65&&(w.$$scope={dirty:b,ctx:u}),t.$set(w)},i(u){o||(g(e.$$.fragment,u),g(t.$$.fragment,u),g(r.$$.fragment,u),o=!0)},o(u){h(e.$$.fragment,u),h(t.$$.fragment,u),h(r.$$.fragment,u),o=!1},d(u){v(e,u),u&&p(n),v(t,u),u&&p(l),v(r,u)}}}function Te(c,e,n){const t=["#ddd","#777","#222"];let l=t[0];return[l,t,s=>{n(0,l=t[s.detail.index]),console.debug("change",s)},s=>console.debug("enter",s),s=>console.debug("exit",s)]}class O extends J{constructor(e){super(),K(this,e,Te,De,Q,{})}}O.__docgen={version:3,name:"FeatureArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const z=Z(O,{meta:{title:"Templates/Feature article"},stories:{"tpl:default":{storyId:"templates-feature-article--default",name:"default",template:!0,source:`<Header compact />
<Main>
  <Hero
    title="This is an article title"
    lede="This is a short, introductory sentence"
    date="2023-07-04"
  >
    <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
  </Hero>

  <Highlight marginBottom="{false}">
    <p>This is a test paragraph.</p>
    <p>This is another test paragraph.</p>
  </Highlight>

  <Section title="Section title" marginTop="{true}">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Blockquote attribution="A. Person"
      >This is a blockquote, white comprises of a large block of inset text.</Blockquote
    >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>

  <Grid colwidth="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
    <div class="grid-cell"></div>
    <div class="grid-cell"></div>
  </Grid>

  <Divider />

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>

  <Scroller
    id="scroller"
    splitscreen
    on:change="{(e) => {
      scrollerColor = scrollerColors[e.detail.index];
      console.debug('change', e);
    }}"
    on:enter="{(e) => console.debug('enter', e)}"
    on:exit="{(e) => console.debug('exit', e)}"
  >
    <div slot="background">
      <Grid width="full" height="full">
        <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
      </Grid>
    </div>
    <div slot="foreground">
      <ScrollerSection>
        <p>
          When this first caption is visible, the background will appear <Em
            color="{scrollerColors[0]}">light grey</Em
          >.
        </p>
      </ScrollerSection>
      <ScrollerSection>
        <p>
          When this section caption is visible, the background will appear <Em
            color="{scrollerColors[1]}">dark grey</Em
          >.
        </p>
      </ScrollerSection>
      <ScrollerSection>
        <p>
          When this third caption is visible, the background will appear <Em
            color="{scrollerColors[2]}">black</Em
          >.
        </p>
      </ScrollerSection>
    </div>
  </Scroller>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>
</Main>
<Footer compact />`,hasArgs:!0},Default:{storyId:"templates-feature-article--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Main","Header","Hero","Highlight","Section","Grid","Blockquote","Em","Divider","Scroller","ScrollerSection","Footer","componentDocs","withComponentDocs"]}),Je=z.meta,Ke=["Default"],Qe=z.stories.Default;export{Qe as Default,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=FeatureArticle.stories-a52c15b7.js.map

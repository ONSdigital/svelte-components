import{S as j,i as A,s as F,p as W,j as u,w as k,m as f,a as g,k as q,l as x,b as $,t as d,n as m,d as _,x as v,C as y,H as S,y as G,I as h}from"./index-8607ceaf.js";import{p as L,w as I,M as H,T as N,S as O}from"./collect-stories-45ecfa9a.js";import{S as D,a as C}from"./ScrollerSection-e0c0c380.js";import{G as Y}from"./Grid-376556c5.js";import{E}from"./Em-85251bab.js";import"./Container-57792f3b.js";import"./Theme-77c4162c.js";import"./_commonjsHelpers-725317a4.js";const T=`Components for adding scrollytelling sections to a feature article.

Note: These examples will not preview correctly in the iframes on this page. You can select the examples from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Scroller, ScrollerSection, Grid } from "@onsvisual/svelte-components";

  function updateScroller(e) {
    // Function to update scroller background components, using the following props:
    // 1. e.detail.id - the ID of the Scroller
    // 2. e.detail.index - the index of the current ScrollerSection
    // 3. e.detail.sectionId - the (optional) ID of the current ScrollerSection
  }
<\/script>

<Scroller on:change="{updateScroller}" id="{any_unique_id}">
  <div slot="background">
    <!--
      The <Grid> component is optional here.
      It is a useful way to set the height and width of the background.
    -->
    <Grid width="full" height="full">
      <div>{background_components}</div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection id="{any_unique_id}">
      <p>First section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Second section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Third section caption.</p>
      </p>
    </ScrollerSection>
  </div>
</Scroller>
\`\`\`
`;function z(i){let e;return{c(){e=v("div"),y(e,"class","placeholder-block"),G(e,"background-color",i[0])},m(r,t){g(r,e,t)},p(r,t){t&1&&G(e,"background-color",r[0])},d(r){r&&_(e)}}}function B(i){let e,r,t;return r=new Y({props:{width:"full",height:"full",$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){e=v("div"),u(r.$$.fragment),y(e,"slot","background")},m(s,o){g(s,e,o),f(r,e,null),t=!0},p(s,o){const n={};o&17&&(n.$$scope={dirty:o,ctx:s}),r.$set(n)},i(s){t||($(r.$$.fragment,s),t=!0)},o(s){d(r.$$.fragment,s),t=!1},d(s){s&&_(e),m(r)}}}function J(i){let e;return{c(){e=h("light grey")},m(r,t){g(r,e,t)},d(r){r&&_(e)}}}function K(i){let e,r,t,s,o;return t=new E({props:{color:i[1][0],$$slots:{default:[J]},$$scope:{ctx:i}}}),{c(){e=v("p"),r=h("When this first caption is visible, the background will appear "),u(t.$$.fragment),s=h(".")},m(n,a){g(n,e,a),S(e,r),f(t,e,null),S(e,s),o=!0},p(n,a){const c={};a&16&&(c.$$scope={dirty:a,ctx:n}),t.$set(c)},i(n){o||($(t.$$.fragment,n),o=!0)},o(n){d(t.$$.fragment,n),o=!1},d(n){n&&_(e),m(t)}}}function P(i){let e;return{c(){e=h("dark grey")},m(r,t){g(r,e,t)},d(r){r&&_(e)}}}function Q(i){let e,r,t,s,o;return t=new E({props:{color:i[1][1],$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){e=v("p"),r=h("When this first caption is visible, the background will appear "),u(t.$$.fragment),s=h(".")},m(n,a){g(n,e,a),S(e,r),f(t,e,null),S(e,s),o=!0},p(n,a){const c={};a&16&&(c.$$scope={dirty:a,ctx:n}),t.$set(c)},i(n){o||($(t.$$.fragment,n),o=!0)},o(n){d(t.$$.fragment,n),o=!1},d(n){n&&_(e),m(t)}}}function R(i){let e;return{c(){e=h("black")},m(r,t){g(r,e,t)},d(r){r&&_(e)}}}function U(i){let e,r,t,s,o;return t=new E({props:{color:i[1][2],$$slots:{default:[R]},$$scope:{ctx:i}}}),{c(){e=v("p"),r=h("When this first caption is visible, the background will appear "),u(t.$$.fragment),s=h(".")},m(n,a){g(n,e,a),S(e,r),f(t,e,null),S(e,s),o=!0},p(n,a){const c={};a&16&&(c.$$scope={dirty:a,ctx:n}),t.$set(c)},i(n){o||($(t.$$.fragment,n),o=!0)},o(n){d(t.$$.fragment,n),o=!1},d(n){n&&_(e),m(t)}}}function V(i){let e,r,t,s,o,n,a;return r=new C({props:{$$slots:{default:[K]},$$scope:{ctx:i}}}),s=new C({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),n=new C({props:{$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){e=v("div"),u(r.$$.fragment),t=k(),u(s.$$.fragment),o=k(),u(n.$$.fragment),y(e,"slot","foreground")},m(c,l){g(c,e,l),f(r,e,null),S(e,t),f(s,e,null),S(e,o),f(n,e,null),a=!0},p(c,l){const p={};l&16&&(p.$$scope={dirty:l,ctx:c}),r.$set(p);const w={};l&16&&(w.$$scope={dirty:l,ctx:c}),s.$set(w);const b={};l&16&&(b.$$scope={dirty:l,ctx:c}),n.$set(b)},i(c){a||($(r.$$.fragment,c),$(s.$$.fragment,c),$(n.$$.fragment,c),a=!0)},o(c){d(r.$$.fragment,c),d(s.$$.fragment,c),d(n.$$.fragment,c),a=!1},d(c){c&&_(e),m(r),m(s),m(n)}}}function X(i){let e,r;const t=[i[3]];let s={$$slots:{foreground:[V],background:[B]},$$scope:{ctx:i}};for(let o=0;o<t.length;o+=1)s=W(s,t[o]);return e=new D({props:s}),e.$on("change",i[2]),{c(){u(e.$$.fragment)},m(o,n){f(e,o,n),r=!0},p(o,n){const a=n&8?q(t,[x(o[3])]):{};n&17&&(a.$$scope={dirty:n,ctx:o}),e.$set(a)},i(o){r||($(e.$$.fragment,o),r=!0)},o(o){d(e.$$.fragment,o),r=!1},d(o){m(e,o)}}}function Z(i){let e,r,t,s,o,n;const a=[{title:"Layout/Scroller"},{component:D},{argTypes:{}},I(T)];let c={};for(let l=0;l<a.length;l+=1)c=W(c,a[l]);return e=new H({props:c}),t=new N({props:{$$slots:{default:[X,({args:l})=>({3:l}),({args:l})=>l?8:0]},$$scope:{ctx:i}}}),o=new O({props:{name:"Default",args:{}}}),{c(){u(e.$$.fragment),r=k(),u(t.$$.fragment),s=k(),u(o.$$.fragment)},m(l,p){f(e,l,p),g(l,r,p),f(t,l,p),g(l,s,p),f(o,l,p),n=!0},p(l,[p]){const w=p&0?q(a,[a[0],p&0&&{component:D},a[2],p&0&&x(I(T))]):{};e.$set(w);const b={};p&25&&(b.$$scope={dirty:p,ctx:l}),t.$set(b)},i(l){n||($(e.$$.fragment,l),$(t.$$.fragment,l),$(o.$$.fragment,l),n=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),d(o.$$.fragment,l),n=!1},d(l){m(e,l),l&&_(r),m(t,l),l&&_(s),m(o,l)}}}function ee(i,e,r){const t=["#ddd","#777","#222"];let s=t[0];return[s,t,n=>r(0,s=t[n.detail.index])]}class te extends j{constructor(e){super(),A(this,e,ee,Z,F,{})}}const M=L(te,{meta:{title:"Layout/Scroller"},stories:{"tpl:default":{storyId:"layout-scroller--default",name:"default",template:!0,source:`<Scroller {...args} on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}">
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
        When this first caption is visible, the background will appear <Em
          color="{scrollerColors[1]}">dark grey</Em
        >.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear <Em
          color="{scrollerColors[2]}">black</Em
        >.
      </p>
    </ScrollerSection>
  </div>
</Scroller>`,hasArgs:!0},Default:{storyId:"layout-scroller--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Scroller","ScrollerSection","Grid","Em","withComponentDocs"]}),pe=M.meta,ue=["Default"],fe=M.stories.Default;export{fe as Default,ue as __namedExportsOrder,pe as default};
//# sourceMappingURL=Scroller.stories-bcf0cddf.js.map

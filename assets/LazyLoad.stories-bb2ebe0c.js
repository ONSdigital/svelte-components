import{S as M,i as x,s as D,e as H,a as d,g as O,t as p,c as V,b as m,d as _,o as q,a9 as B,f as E,x as S,y as L,z as b,q as W,u as N,r as X,v as Y,p as F,j as y,w,m as h,k as G,l as J,n as g,X as K,L as P}from"./index-9473b494.js";import{p as Q,w as $,M as R,T as U,S as Z}from"./collect-stories-458d6889.js";const z=`A wrapper component that uses IntersectionObserver to allow the elements it contains to be lazy loaded, ie. to be initialised/mounted only when they enter the viewport (or come close to it).

You can use the **initialHeight** to set the minimum height of the placeholder in pixels (default 400), and you can use **rootMargin** to set how many pixels from the viewport you want lazy loading to kick in (default 200).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { LazyLoad } from "@onsvisual/svelte-components";
<\/script>

{#each Array(20) as section, i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://cataas.com/cat?{i}" alt="" />
    </div>
  </LazyLoad>
{/each}

<style>
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #eee;
    margin-bottom: 10px;
  }
  img {
    width: 200px;
  }
</style>
\`\`\`
`;function ee(r){let e,o=`${+r[1]||100}px`;return{c(){e=S("div"),L(e,"height",o)},m(t,n){d(t,e,n),r[6](e)},p(t,n){n&2&&o!==(o=`${+t[1]||100}px`)&&L(e,"height",o)},i:b,o:b,d(t){t&&_(e),r[6](null)}}}function te(r){let e;const o=r[5].default,t=W(o,r,r[4],null);return{c(){t&&t.c()},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&16)&&N(t,o,n,n[4],e?Y(o,n[4],s,null):X(n[4]),null)},i(n){e||(m(t,n),e=!0)},o(n){p(t,n),e=!1},d(n){t&&t.d(n)}}}function ne(r){let e,o,t,n;const s=[te,ee],i=[];function u(l,a){return l[0]?0:1}return e=u(r),o=i[e]=s[e](r),{c(){o.c(),t=H()},m(l,a){i[e].m(l,a),d(l,t,a),n=!0},p(l,[a]){let f=e;e=u(l),e===f?i[e].p(l,a):(O(),p(i[f],1,1,()=>{i[f]=null}),V(),o=i[e],o?o.p(l,a):(o=i[e]=s[e](l),o.c()),m(o,1),o.m(t.parentNode,t))},i(l){n||(m(o),n=!0)},o(l){p(o),n=!1},d(l){i[e].d(l),l&&_(t)}}}function oe(r,e,o){let{$$slots:t={},$$scope:n}=e,{entered:s=!1}=e,{initialHeight:i=400}=e,{rootMargin:u=200}=e,l,a;const f=(c,T)=>{c.forEach(j=>{let C=j.isIntersecting;!s&&C&&(T.unobserve(l),o(0,s=!0),console.log("in view"))})};q(()=>{let c={root:document,rootMargin:`${u}px`};a=new IntersectionObserver(f,c),a.observe(l)}),B(()=>a.unobserve(l));function k(c){E[c?"unshift":"push"](()=>{l=c,o(2,l)})}return r.$$set=c=>{"entered"in c&&o(0,s=c.entered),"initialHeight"in c&&o(1,i=c.initialHeight),"rootMargin"in c&&o(3,u=c.rootMargin),"$$scope"in c&&o(4,n=c.$$scope)},[s,i,l,u,n,t,k]}class v extends M{constructor(e){super(),x(this,e,oe,ne,D,{entered:0,initialHeight:1,rootMargin:3})}}v.__docgen={version:3,name:"LazyLoad.svelte",data:[{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",name:"entered",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',name:"initialHeight",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:400},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",name:"rootMargin",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:200}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ae(r,e,o){const t=r.slice();return t[1]=e[o],t[3]=o,t}function se(r){let e,o;return{c(){e=S("div"),e.innerHTML=`<img src="https://cataas.com/cat?${r[3]}" alt="" class="svelte-1yk08uf"/>`,o=w(),P(e,"class","img-container svelte-1yk08uf")},m(t,n){d(t,e,n),d(t,o,n)},p:b,d(t){t&&_(e),t&&_(o)}}}function ie(r){let e,o;return e=new v({props:{$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){y(e.$$.fragment)},m(t,n){h(e,t,n),o=!0},p(t,n){const s={};n&16&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){p(e.$$.fragment,t),o=!1},d(t){g(e,t)}}}function le(r){let e,o,t=Array(20),n=[];for(let s=0;s<t.length;s+=1)n[s]=ie(ae(r,t,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=H()},m(s,i){for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(s,i);d(s,e,i),o=!0},p:b,i(s){if(!o){for(let i=0;i<t.length;i+=1)m(n[i]);o=!0}},o(s){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)p(n[i]);o=!1},d(s){K(n,s),s&&_(e)}}}function re(r){let e,o,t,n,s,i;const u=[{title:"Wrappers/LazyLoad"},{component:v},{argTypes:{}},$(z)];let l={};for(let a=0;a<u.length;a+=1)l=F(l,u[a]);return e=new R({props:l}),t=new U({props:{$$slots:{default:[le,({args:a})=>({0:a}),({args:a})=>a?1:0]},$$scope:{ctx:r}}}),s=new Z({props:{name:"Default",args:{}}}),{c(){y(e.$$.fragment),o=w(),y(t.$$.fragment),n=w(),y(s.$$.fragment)},m(a,f){h(e,a,f),d(a,o,f),h(t,a,f),d(a,n,f),h(s,a,f),i=!0},p(a,[f]){const k=f&0?G(u,[u[0],f&0&&{component:v},u[2],f&0&&J($(z))]):{};e.$set(k);const c={};f&16&&(c.$$scope={dirty:f,ctx:a}),t.$set(c)},i(a){i||(m(e.$$.fragment,a),m(t.$$.fragment,a),m(s.$$.fragment,a),i=!0)},o(a){p(e.$$.fragment,a),p(t.$$.fragment,a),p(s.$$.fragment,a),i=!1},d(a){g(e,a),a&&_(o),g(t,a),a&&_(n),g(s,a)}}}class A extends M{constructor(e){super(),x(this,e,null,re,D,{})}}A.__docgen={version:3,name:"LazyLoad.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=Q(A,{meta:{title:"Wrappers/LazyLoad"},stories:{"tpl:default":{storyId:"wrappers-lazyload--default",name:"default",template:!0,source:`{#each Array(20) as section, i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://cataas.com/cat?{i}" alt="" />
    </div>
  </LazyLoad>
{/each}`,hasArgs:!0},Default:{storyId:"wrappers-lazyload--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","LazyLoad","withComponentDocs"]}),fe=I.meta,pe=["Default"],me=I.stories.Default;export{me as Default,pe as __namedExportsOrder,fe as default};
//# sourceMappingURL=LazyLoad.stories-bb2ebe0c.js.map

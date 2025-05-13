import{S,i as H,s as I,e as O,a as d,g as T,t as m,c as j,b as p,d as _,o as N,a7 as W,f as P,x as w,y as $,z as L,q as X,u as F,r as G,v as J,p as K,j as y,w as z,m as g,k as Q,l as R,n as h,X as U,a5 as Y,L as v,P as Z}from"./index-93ed49d9.js";import{p as ee,w as x,M as te,T as ne,S as oe}from"./collect-stories-46e6ba01.js";const D=`A wrapper component that uses IntersectionObserver to allow the elements it contains to be lazy loaded, ie. to be initialised/mounted only when they enter the viewport (or come close to it).

Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels from the viewport you want lazy loading to kick in (default 200).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { LazyLoad } from "@onsvisual/svelte-components";
<\/script>

{#each Array.from(Array(20).keys()) as i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://placekitten.com/400/300?image={i}" alt="" />
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
</style>
\`\`\`
`;function ae(c){let e,o=`${+c[1]||100}px`;return{c(){e=w("div"),$(e,"height",o)},m(n,t){d(n,e,t),c[6](e)},p(n,t){t&2&&o!==(o=`${+n[1]||100}px`)&&$(e,"height",o)},i:L,o:L,d(n){n&&_(e),c[6](null)}}}function se(c){let e;const o=c[5].default,n=X(o,c,c[4],null);return{c(){n&&n.c()},m(t,i){n&&n.m(t,i),e=!0},p(t,i){n&&n.p&&(!e||i&16)&&F(n,o,t,t[4],e?J(o,t[4],i,null):G(t[4]),null)},i(t){e||(p(n,t),e=!0)},o(t){m(n,t),e=!1},d(t){n&&n.d(t)}}}function le(c){let e,o,n,t;const i=[se,ae],l=[];function r(a,s){return a[0]?0:1}return e=r(c),o=l[e]=i[e](c),{c(){o.c(),n=O()},m(a,s){l[e].m(a,s),d(a,n,s),t=!0},p(a,[s]){let f=e;e=r(a),e===f?l[e].p(a,s):(T(),m(l[f],1,1,()=>{l[f]=null}),j(),o=l[e],o?o.p(a,s):(o=l[e]=i[e](a),o.c()),p(o,1),o.m(n.parentNode,n))},i(a){t||(p(o),t=!0)},o(a){m(o),t=!1},d(a){l[e].d(a),a&&_(n)}}}function ie(c,e,o){let{$$slots:n={},$$scope:t}=e,{entered:i=!1}=e,{initialHeight:l=400}=e,{rootMargin:r=200}=e,a,s;const f=(u,V)=>{u.forEach(B=>{let E=B.isIntersecting;!i&&E&&(V.unobserve(a),o(0,i=!0),console.log("in view"))})};N(()=>{let u={root:document,rootMargin:`${r}px`};s=new IntersectionObserver(f,u),s.observe(a)}),W(()=>s.unobserve(a));function k(u){P[u?"unshift":"push"](()=>{a=u,o(2,a)})}return c.$$set=u=>{"entered"in u&&o(0,i=u.entered),"initialHeight"in u&&o(1,l=u.initialHeight),"rootMargin"in u&&o(3,r=u.rootMargin),"$$scope"in u&&o(4,t=u.$$scope)},[i,l,a,r,t,n,k]}class b extends S{constructor(e){super(),H(this,e,ie,le,I,{entered:0,initialHeight:1,rootMargin:3})}}b.__docgen={version:3,name:"LazyLoad.svelte",data:[{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",name:"entered",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',name:"initialHeight",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:400},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",name:"rootMargin",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:200}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function M(c,e,o){const n=c.slice();return n[1]=e[o],n}function re(c){let e,o,n,t;return{c(){e=w("div"),o=w("img"),t=z(),Y(o.src,n="https://placekitten.com/400/300?image="+c[1])||v(o,"src",n),v(o,"alt",""),v(e,"class","img-container svelte-15cox7u")},m(i,l){d(i,e,l),Z(e,o),d(i,t,l)},p:L,d(i){i&&_(e),i&&_(t)}}}function A(c){let e,o;return e=new b({props:{$$slots:{default:[re]},$$scope:{ctx:c}}}),{c(){y(e.$$.fragment)},m(n,t){g(e,n,t),o=!0},p(n,t){const i={};t&16&&(i.$$scope={dirty:t,ctx:n}),e.$set(i)},i(n){o||(p(e.$$.fragment,n),o=!0)},o(n){m(e.$$.fragment,n),o=!1},d(n){h(e,n)}}}function ce(c){let e,o,n=Array.from(Array(15).keys()),t=[];for(let l=0;l<n.length;l+=1)t[l]=A(M(c,n,l));const i=l=>m(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=O()},m(l,r){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,r);d(l,e,r),o=!0},p(l,r){if(r&0){n=Array.from(Array(15).keys());let a;for(a=0;a<n.length;a+=1){const s=M(l,n,a);t[a]?(t[a].p(s,r),p(t[a],1)):(t[a]=A(s),t[a].c(),p(t[a],1),t[a].m(e.parentNode,e))}for(T(),a=n.length;a<t.length;a+=1)i(a);j()}},i(l){if(!o){for(let r=0;r<n.length;r+=1)p(t[r]);o=!0}},o(l){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)m(t[r]);o=!1},d(l){U(t,l),l&&_(e)}}}function ue(c){let e,o,n,t,i,l;const r=[{title:"Wrappers/LazyLoad"},{component:b},{argTypes:{}},x(D)];let a={};for(let s=0;s<r.length;s+=1)a=K(a,r[s]);return e=new te({props:a}),n=new ne({props:{$$slots:{default:[ce,({args:s})=>({0:s}),({args:s})=>s?1:0]},$$scope:{ctx:c}}}),i=new oe({props:{name:"Default",args:{}}}),{c(){y(e.$$.fragment),o=z(),y(n.$$.fragment),t=z(),y(i.$$.fragment)},m(s,f){g(e,s,f),d(s,o,f),g(n,s,f),d(s,t,f),g(i,s,f),l=!0},p(s,[f]){const k=f&0?Q(r,[r[0],f&0&&{component:b},r[2],f&0&&R(x(D))]):{};e.$set(k);const u={};f&16&&(u.$$scope={dirty:f,ctx:s}),n.$set(u)},i(s){l||(p(e.$$.fragment,s),p(n.$$.fragment,s),p(i.$$.fragment,s),l=!0)},o(s){m(e.$$.fragment,s),m(n.$$.fragment,s),m(i.$$.fragment,s),l=!1},d(s){h(e,s),s&&_(o),h(n,s),s&&_(t),h(i,s)}}}class q extends S{constructor(e){super(),H(this,e,null,ue,I,{})}}q.__docgen={version:3,name:"LazyLoad.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const C=ee(q,{meta:{title:"Wrappers/LazyLoad"},stories:{"tpl:default":{storyId:"wrappers-lazyload--default",name:"default",template:!0,source:`{#each Array.from(Array(15).keys()) as i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://placekitten.com/400/300?image={i}" alt="" />
    </div>
  </LazyLoad>
{/each}`,hasArgs:!0},Default:{storyId:"wrappers-lazyload--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","LazyLoad","withComponentDocs"]}),me=C.meta,de=["Default"],_e=C.stories.Default;export{_e as Default,de as __namedExportsOrder,me as default};
//# sourceMappingURL=LazyLoad.stories-1abb0451.js.map

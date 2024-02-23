import{S,i as q,s as A,q as j,x as C,a as b,u as z,r as B,v as x,b as p,t as d,d as m,W as N,o as V,a9 as X,f as E,p as F,j as _,w as k,m as v,k as G,l as H,n as h,e as J,g as K,c as L,X as P,a1 as Q,a2 as R,y as O,z as U}from"./index-9473b494.js";import{p as Y,w as D,M as Z,T as ee,S as te}from"./collect-stories-458d6889.js";const I=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

This component can be useful for triggering actions such as lazy loading of data/images or scroll-driven interactions.

This component has **enter** and **exit** events, triggered when it enters or leaves the viewport. It also has a **visible** binding which has a value of **true** when it is within the viewport.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Observe } from "@onsvisual/svelte-components";

  const colors = ["yellow", "green", "blue", "purple", "red", "orange"];
  const visible = {}; // Binding for visiblity of divs
<\/script>

{#each colors as color}
<Observe
  on:enter={() => console.log(\`\${color} entered\`)}
  on:exit={() => console.log(\`\${color} exited\`)}
  bind:visible={visible[color]}>
  <div class="section" style:background={color} style:height="400px"/>
</Observe>
{/each}
\`\`\`
`;function se(l){let t,i;const r=l[3].default,e=j(r,l,l[2],null);return{c(){t=C("div"),e&&e.c()},m(a,o){b(a,t,o),e&&e.m(t,null),l[4](t),i=!0},p(a,[o]){e&&e.p&&(!i||o&4)&&z(e,r,a,a[2],i?x(r,a[2],o,null):B(a[2]),null)},i(a){i||(p(e,a),i=!0)},o(a){d(e,a),i=!1},d(a){a&&m(t),e&&e.d(a),l[4](null)}}}function ne(l,t,i){let{$$slots:r={},$$scope:e}=t;const a=N();let{visible:o=!1}=t,c,s;const n=(f,$)=>{f.forEach(w=>{let y=w.isIntersecting;!o&&y&&a("enter",w),o&&!y&&a("exit",w),i(1,o=y)})};V(()=>{let f={};s=new IntersectionObserver(n,f),s.observe(c)}),X(()=>s.unobserve(c));function u(f){E[f?"unshift":"push"](()=>{c=f,i(0,c)})}return l.$$set=f=>{"visible"in f&&i(1,o=f.visible),"$$scope"in f&&i(2,e=f.$$scope)},[c,o,e,r,u]}class g extends S{constructor(t){super(),q(this,t,ne,se,A,{visible:1})}}g.__docgen={version:3,name:"Observe.svelte",data:[{visibility:"public",description:null,keywords:[],name:"visible",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"enter"},{visibility:"public",description:null,keywords:[],name:"exit"}],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function T(l,t,i){const r=l.slice();return r[6]=t[i],r[7]=t,r[8]=i,r}function oe(l){let t,i;return{c(){t=C("div"),i=k(),O(t,"background",l[6]),O(t,"height","400px")},m(r,e){b(r,t,e),b(r,i,e)},p:U,d(r){r&&m(t),r&&m(i)}}}function M(l){let t,i,r;function e(s){l[2](s,l[6])}function a(){return l[3](l[6])}function o(){return l[4](l[6])}let c={$$slots:{default:[oe]},$$scope:{ctx:l}};return l[0][l[6]]!==void 0&&(c.visible=l[0][l[6]]),t=new g({props:c}),E.push(()=>Q(t,"visible",e)),t.$on("enter",a),t.$on("exit",o),{c(){_(t.$$.fragment)},m(s,n){v(t,s,n),r=!0},p(s,n){l=s;const u={};n&512&&(u.$$scope={dirty:n,ctx:l}),!i&&n&3&&(i=!0,u.visible=l[0][l[6]],R(()=>i=!1)),t.$set(u)},i(s){r||(p(t.$$.fragment,s),r=!0)},o(s){d(t.$$.fragment,s),r=!1},d(s){h(t,s)}}}function re(l){let t,i,r=l[1],e=[];for(let o=0;o<r.length;o+=1)e[o]=M(T(l,r,o));const a=o=>d(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=J()},m(o,c){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(o,c);b(o,t,c),i=!0},p(o,c){if(c&3){r=o[1];let s;for(s=0;s<r.length;s+=1){const n=T(o,r,s);e[s]?(e[s].p(n,c),p(e[s],1)):(e[s]=M(n),e[s].c(),p(e[s],1),e[s].m(t.parentNode,t))}for(K(),s=r.length;s<e.length;s+=1)a(s);L()}},i(o){if(!i){for(let c=0;c<r.length;c+=1)p(e[c]);i=!0}},o(o){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)d(e[c]);i=!1},d(o){P(e,o),o&&m(t)}}}function le(l){let t,i,r,e,a,o;const c=[{title:"Wrappers/Observe"},{component:g},{argTypes:{}},D(I)];let s={};for(let n=0;n<c.length;n+=1)s=F(s,c[n]);return t=new Z({props:s}),r=new ee({props:{$$slots:{default:[re,({args:n})=>({5:n}),({args:n})=>n?32:0]},$$scope:{ctx:l}}}),a=new te({props:{name:"Default",args:{}}}),{c(){_(t.$$.fragment),i=k(),_(r.$$.fragment),e=k(),_(a.$$.fragment)},m(n,u){v(t,n,u),b(n,i,u),v(r,n,u),b(n,e,u),v(a,n,u),o=!0},p(n,[u]){const f=u&0?G(c,[c[0],u&0&&{component:g},c[2],u&0&&H(D(I))]):{};t.$set(f);const $={};u&513&&($.$$scope={dirty:u,ctx:n}),r.$set($)},i(n){o||(p(t.$$.fragment,n),p(r.$$.fragment,n),p(a.$$.fragment,n),o=!0)},o(n){d(t.$$.fragment,n),d(r.$$.fragment,n),d(a.$$.fragment,n),o=!1},d(n){h(t,n),n&&m(i),h(r,n),n&&m(e),h(a,n)}}}function ie(l,t,i){const r=["yellow","green","blue","purple","red","orange"],e={};function a(s,n){l.$$.not_equal(e[n],s)&&(e[n]=s,i(0,e))}return[e,r,a,s=>console.log(`${s} entered`),s=>console.log(`${s} exited`)]}class ae extends S{constructor(t){super(),q(this,t,ie,le,A,{})}}const W=Y(ae,{meta:{title:"Wrappers/Observe"},stories:{"tpl:default":{storyId:"wrappers-observe--default",name:"default",template:!0,source:`{#each colors as color}
  <Observe
    on:enter="{() => console.log(\`\${color} entered\`)}"
    on:exit="{() => console.log(\`\${color} exited\`)}"
    bind:visible="{visible[color]}"
  >
    <div style:background="{color}" style:height="400px"></div>
  </Observe>
{/each}`,hasArgs:!0},Default:{storyId:"wrappers-observe--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Observe","withComponentDocs"]}),fe=W.meta,pe=["Default"],de=W.stories.Default;export{de as Default,pe as __namedExportsOrder,fe as default};
//# sourceMappingURL=Observe.stories-cc9fc999.js.map

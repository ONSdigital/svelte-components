import{S as j,i as B,s as k,p as T,j as o,w as I,m as l,a as d,k as H,l as M,b as m,t as u,n as f,d as c,x as q,y as O}from"./index-8607ceaf.js";import{p as z,w as S,M as F,T as G,S as v}from"./collect-stories-45ecfa9a.js";import{I as L}from"./Input-850b68f5.js";const C=`A standard \`<input>\` element with Svelte bindings and events.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<Input bind:value on:change="{handleChange}" />
\`\`\`
`;function J(D){let s,i,r;const $=[D[0]];let a={};for(let n=0;n<$.length;n+=1)a=T(a,$[n]);return i=new L({props:a}),{c(){s=q("div"),o(i.$$.fragment),O(s,"padding","12px")},m(n,p){d(n,s,p),l(i,s,null),r=!0},p(n,p){const w=p&1?H($,[M(n[0])]):{};i.$set(w)},i(n){r||(m(i.$$.fragment,n),r=!0)},o(n){u(i.$$.fragment,n),r=!1},d(n){n&&c(s),f(i)}}}function K(D){let s,i,r,$,a,n,p,w,g,y,h,E,_,W;const b=[{title:"Inputs/Input"},{component:L},{argTypes:{}},S(C)];let A={};for(let e=0;e<b.length;e+=1)A=T(A,b[e]);return s=new F({props:A}),r=new G({props:{$$slots:{default:[J,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:D}}}),a=new v({props:{name:"Default",args:{id:"text",label:"Enter some text"}}}),p=new v({props:{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0}}}),g=new v({props:{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"}}}),h=new v({props:{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8}}}),_=new v({props:{name:"Input error",args:{id:"text",label:"Enter some text",error:!0}}}),{c(){o(s.$$.fragment),i=I(),o(r.$$.fragment),$=I(),o(a.$$.fragment),n=I(),o(p.$$.fragment),w=I(),o(g.$$.fragment),y=I(),o(h.$$.fragment),E=I(),o(_.$$.fragment)},m(e,t){l(s,e,t),d(e,i,t),l(r,e,t),d(e,$,t),l(a,e,t),d(e,n,t),l(p,e,t),d(e,w,t),l(g,e,t),d(e,y,t),l(h,e,t),d(e,E,t),l(_,e,t),W=!0},p(e,[t]){const P=t&0?H(b,[b[0],t&0&&{component:L},b[2],t&0&&M(S(C))]):{};s.$set(P);const N={};t&3&&(N.$$scope={dirty:t,ctx:e}),r.$set(N)},i(e){W||(m(s.$$.fragment,e),m(r.$$.fragment,e),m(a.$$.fragment,e),m(p.$$.fragment,e),m(g.$$.fragment,e),m(h.$$.fragment,e),m(_.$$.fragment,e),W=!0)},o(e){u(s.$$.fragment,e),u(r.$$.fragment,e),u(a.$$.fragment,e),u(p.$$.fragment,e),u(g.$$.fragment,e),u(h.$$.fragment,e),u(_.$$.fragment,e),W=!1},d(e){f(s,e),e&&c(i),f(r,e),e&&c($),f(a,e),e&&c(n),f(p,e),e&&c(w),f(g,e),e&&c(y),f(h,e),e&&c(E),f(_,e)}}}class Q extends j{constructor(s){super(),B(this,s,null,K,k,{})}}const x=z(Q,{meta:{title:"Inputs/Input"},stories:{"tpl:default":{storyId:"inputs-input--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Input {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-input--default",name:"Default",template:!1,hasArgs:!1},WithHiddenLabel:{storyId:"inputs-input--with-hidden-label",name:"With hidden label",template:!1,hasArgs:!1},WithDescription:{storyId:"inputs-input--with-description",name:"With description",template:!1,hasArgs:!1},NumericWithPrefix:{storyId:"inputs-input--numeric-with-prefix",name:"Numeric with prefix",template:!1,hasArgs:!1},InputError:{storyId:"inputs-input--input-error",name:"Input error",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Input","withComponentDocs"]}),X=x.meta,Y=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],Z=x.stories.Default,ee=x.stories.WithHiddenLabel,te=x.stories.WithDescription,ne=x.stories.NumericWithPrefix,se=x.stories.InputError;export{Z as Default,se as InputError,ne as NumericWithPrefix,te as WithDescription,ee as WithHiddenLabel,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Input.stories-54ee49bc.js.map

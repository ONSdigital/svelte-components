import{S as q,i as E,s as P,p as T,j as m,w as v,m as c,a as h,k as C,l as Q,b as d,t as u,n as f,d as g,x as k,y as B}from"./index-8607ceaf.js";import{p as G,w as L,M as O,T as V,S as y}from"./collect-stories-45ecfa9a.js";import{S as H}from"./Select-22fc71d3.js";import"./utils-f6662b64.js";const A=`An extended alternative to a \`<select>\` component (see Dropdown), with auto-complete and multi-select.

This component is a wrapper for [svelte-select](https://github.com/rob-balfre/svelte-select).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Select } from "@onsvisual/svelte-components";

  const values = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];

  // Bind the <select> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<Select {options} bind:value on:change="{handleChange}" />
\`\`\`
`;function z(i){let n,l,o;const p=[i[1]];let a={};for(let t=0;t<p.length;t+=1)a=T(a,p[t]);return l=new H({props:a}),{c(){n=k("div"),m(l.$$.fragment),B(n,"padding","12px 12px 128px 12px")},m(t,r){h(t,n,r),c(l,n,null),o=!0},p(t,r){const _=r&2?C(p,[Q(t[1])]):{};l.$set(_)},i(t){o||(d(l.$$.fragment,t),o=!0)},o(t){u(l.$$.fragment,t),o=!1},d(t){t&&g(n),f(l)}}}function F(i){let n,l,o,p,a,t,r,_,$,D,b,M;const S=[{title:"Inputs/Select"},{component:H},{argTypes:{mode:{options:["default","search"],control:{type:"select"}}}},L(A)];let x={};for(let e=0;e<S.length;e+=1)x=T(x,S[e]);return n=new O({props:x}),o=new V({props:{$$slots:{default:[z,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:i}}}),a=new y({props:{name:"Default",args:{id:"topic",label:"Question topic",options:i[0]}}}),r=new y({props:{name:"Hidden label",args:{id:"topic",label:"Question topic",hideLabel:!0,options:i[0]}}}),$=new y({props:{name:"Search mode",args:{id:"topic",mode:"search",label:"Question topic",hideLabel:!0,placeholder:"Type to select an option",options:i[0]}}}),b=new y({props:{name:"Multi-select mode",args:{id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Select one or more",multiple:!0,options:i[0]}}}),{c(){m(n.$$.fragment),l=v(),m(o.$$.fragment),p=v(),m(a.$$.fragment),t=v(),m(r.$$.fragment),_=v(),m($.$$.fragment),D=v(),m(b.$$.fragment)},m(e,s){c(n,e,s),h(e,l,s),c(o,e,s),h(e,p,s),c(a,e,s),h(e,t,s),c(r,e,s),h(e,_,s),c($,e,s),h(e,D,s),c(b,e,s),M=!0},p(e,[s]){const j=s&0?C(S,[S[0],s&0&&{component:H},S[2],s&0&&Q(L(A))]):{};n.$set(j);const I={};s&6&&(I.$$scope={dirty:s,ctx:e}),o.$set(I)},i(e){M||(d(n.$$.fragment,e),d(o.$$.fragment,e),d(a.$$.fragment,e),d(r.$$.fragment,e),d($.$$.fragment,e),d(b.$$.fragment,e),M=!0)},o(e){u(n.$$.fragment,e),u(o.$$.fragment,e),u(a.$$.fragment,e),u(r.$$.fragment,e),u($.$$.fragment,e),u(b.$$.fragment,e),M=!1},d(e){f(n,e),e&&g(l),f(o,e),e&&g(p),f(a,e),e&&g(t),f(r,e),e&&g(_),f($,e),e&&g(D),f(b,e)}}}function J(i){return[[{id:"1",label:"General"},{id:"people-who-live-here",label:"People who live here"},{id:"visitors",label:"Visitors"},{id:"household-accommodation",label:"Household and accommodation"},{id:"personal-details",label:"Personal details"},{id:"health",label:"Health"},{id:"qualifications",label:"Qualifications"},{id:"employment",label:"Employment"}]]}class K extends q{constructor(n){super(),E(this,n,J,F,P,{})}}const w=G(K,{meta:{title:"Inputs/Select"},stories:{"tpl:default":{storyId:"inputs-select--default",name:"default",template:!0,source:`<div style:padding="12px 12px 128px 12px">
  <Select {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-select--default",name:"Default",template:!1,hasArgs:!1},HiddenLabel:{storyId:"inputs-select--hidden-label",name:"Hidden label",template:!1,hasArgs:!1},SearchMode:{storyId:"inputs-select--search-mode",name:"Search mode",template:!1,hasArgs:!1},MultiSelectMode:{storyId:"inputs-select--multi-select-mode",name:"Multi-select mode",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Select","withComponentDocs"]}),X=w.meta,Y=["Default","HiddenLabel","SearchMode","MultiSelectMode"],Z=w.stories.Default,ee=w.stories.HiddenLabel,te=w.stories.SearchMode,se=w.stories.MultiSelectMode;export{Z as Default,ee as HiddenLabel,se as MultiSelectMode,te as SearchMode,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Select.stories-7540e5b8.js.map

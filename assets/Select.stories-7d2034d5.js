import{S as E,i as K,s as P,p as T,j as i,w as b,m as u,a as c,k as W,l as j,b as m,t as d,n as f,d as $,x as k,y as F}from"./index-9473b494.js";import{p as Q,w as L,M as V,T as z,S as v}from"./collect-stories-458d6889.js";import{S as I}from"./Select-fa958d52.js";import"./utils-af21360b.js";const H=`An extended alternative to a \`<select>\` component (see Dropdown), with auto-complete and multi-select.

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
`;function J(l){let o,a,n;const g=[l[1]];let r={};for(let s=0;s<g.length;s+=1)r=T(r,g[s]);return a=new I({props:r}),{c(){o=k("div"),i(a.$$.fragment),F(o,"padding","12px 12px 128px 12px")},m(s,p){c(s,o,p),u(a,o,null),n=!0},p(s,p){const G=p&2?W(g,[j(s[1])]):{};a.$set(G)},i(s){n||(m(a.$$.fragment,s),n=!0)},o(s){d(a.$$.fragment,s),n=!1},d(s){s&&$(o),f(a)}}}function N(l){let o,a,n,g,r,s,p,G,S,x,y,D,_,O,w,A;const M=[{title:"Inputs/Select"},{component:I},{argTypes:{mode:{options:["default","search"],control:{type:"select"}}}},L(H)];let B={};for(let e=0;e<M.length;e+=1)B=T(B,M[e]);return o=new V({props:B}),n=new z({props:{$$slots:{default:[J,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:l}}}),r=new v({props:{name:"Default",args:{id:"topic",label:"Select a topic",options:l[0]}}}),p=new v({props:{name:"Hidden label",args:{id:"topic",label:"Select a topic",hideLabel:!0,options:l[0]}}}),S=new v({props:{name:"Search mode",args:{id:"topic",mode:"search",label:"Find a topic",hideLabel:!0,placeholder:"Type to select an option",options:l[0]}}}),y=new v({props:{name:"Multi-select mode",args:{id:"topic",label:"Select one or more topics",hideLabel:!0,placeholder:"Select one or more",multiple:!0,options:l[0]}}}),_=new v({props:{name:"Options clustered by group",args:{id:"topic",label:"Select a topic",hideLabel:!0,placeholder:"Type to select an option",groupKey:"group",clusterByGroup:!0,options:l[0]}}}),w=new v({props:{name:"Options with group as suffix",args:{id:"topic",label:"Select a topic",hideLabel:!0,placeholder:"Type to select an option",groupKey:"group",options:l[0]}}}),{c(){i(o.$$.fragment),a=b(),i(n.$$.fragment),g=b(),i(r.$$.fragment),s=b(),i(p.$$.fragment),G=b(),i(S.$$.fragment),x=b(),i(y.$$.fragment),D=b(),i(_.$$.fragment),O=b(),i(w.$$.fragment)},m(e,t){u(o,e,t),c(e,a,t),u(n,e,t),c(e,g,t),u(r,e,t),c(e,s,t),u(p,e,t),c(e,G,t),u(S,e,t),c(e,x,t),u(y,e,t),c(e,D,t),u(_,e,t),c(e,O,t),u(w,e,t),A=!0},p(e,[t]){const q=t&0?W(M,[M[0],t&0&&{component:I},M[2],t&0&&j(L(H))]):{};o.$set(q);const C={};t&6&&(C.$$scope={dirty:t,ctx:e}),n.$set(C)},i(e){A||(m(o.$$.fragment,e),m(n.$$.fragment,e),m(r.$$.fragment,e),m(p.$$.fragment,e),m(S.$$.fragment,e),m(y.$$.fragment,e),m(_.$$.fragment,e),m(w.$$.fragment,e),A=!0)},o(e){d(o.$$.fragment,e),d(n.$$.fragment,e),d(r.$$.fragment,e),d(p.$$.fragment,e),d(S.$$.fragment,e),d(y.$$.fragment,e),d(_.$$.fragment,e),d(w.$$.fragment,e),A=!1},d(e){f(o,e),e&&$(a),f(n,e),e&&$(g),f(r,e),e&&$(s),f(p,e),e&&$(G),f(S,e),e&&$(x),f(y,e),e&&$(D),f(_,e),e&&$(O),f(w,e)}}}function R(l){return[[{id:"1",label:"General",group:"Group A"},{id:"people-who-live-here",label:"People who live here",group:"Group A"},{id:"visitors",label:"Visitors",group:"Group A"},{id:"household-accommodation",label:"Household and accommodation",group:"Group A"},{id:"personal-details",label:"Personal details",group:"Group B"},{id:"health",label:"Health",group:"Group B"},{id:"qualifications",label:"Qualifications",group:"Group B"},{id:"employment",label:"Employment",group:"Group B"}]]}class U extends E{constructor(o){super(),K(this,o,R,N,P,{})}}const h=Q(U,{meta:{title:"Inputs/Select"},stories:{"tpl:default":{storyId:"inputs-select--default",name:"default",template:!0,source:`<div style:padding="12px 12px 128px 12px">
  <Select {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-select--default",name:"Default",template:!1,hasArgs:!1},HiddenLabel:{storyId:"inputs-select--hidden-label",name:"Hidden label",template:!1,hasArgs:!1},SearchMode:{storyId:"inputs-select--search-mode",name:"Search mode",template:!1,hasArgs:!1},MultiSelectMode:{storyId:"inputs-select--multi-select-mode",name:"Multi-select mode",template:!1,hasArgs:!1},OptionsClusteredByGroup:{storyId:"inputs-select--options-clustered-by-group",name:"Options clustered by group",template:!1,hasArgs:!1},OptionsWithGroupAsSuffix:{storyId:"inputs-select--options-with-group-as-suffix",name:"Options with group as suffix",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Select","withComponentDocs"]}),te=h.meta,se=["Default","HiddenLabel","SearchMode","MultiSelectMode","OptionsClusteredByGroup","OptionsWithGroupAsSuffix"],oe=h.stories.Default,ne=h.stories.HiddenLabel,le=h.stories.SearchMode,ae=h.stories.MultiSelectMode,re=h.stories.OptionsClusteredByGroup,pe=h.stories.OptionsWithGroupAsSuffix;export{oe as Default,ne as HiddenLabel,ae as MultiSelectMode,re as OptionsClusteredByGroup,pe as OptionsWithGroupAsSuffix,le as SearchMode,se as __namedExportsOrder,te as default};
//# sourceMappingURL=Select.stories-7d2034d5.js.map

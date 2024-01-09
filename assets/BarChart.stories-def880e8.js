import{S as j,i as q,s as E,p as N,j as p,w as h,m as l,a as c,k as O,l as T,b as i,t as u,n as f,d as $,x as F,y as H}from"./index-8607ceaf.js";import{p as J,w as G,M as L,T as P,S as k}from"./collect-stories-45ecfa9a.js";import{B as M}from"./Chart-af318506.js";import{d as C}from"./data-deeb1c5a.js";const I=`A bar chart component with various modes, plus animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { BarChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320 },
    { year: 2018, value: 640 },
    { year: 2019, value: 1600 },
    { year: 2020, value: 3840 },
  ];
<\/script>

<BarChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />
\`\`\`
`;function Q(y){let r,o,s;const d=[y[0]];let n={};for(let t=0;t<d.length;t+=1)n=N(n,d[t]);return o=new M({props:n}),{c(){r=F("div"),p(o.$$.fragment),H(r,"padding","12px")},m(t,m){c(t,r,m),l(o,r,null),s=!0},p(t,m){const S=m&1?O(d,[T(t[0])]):{};o.$set(S)},i(t){s||(i(o.$$.fragment,t),s=!0)},o(t){u(o.$$.fragment,t),s=!1},d(t){t&&$(r),f(o)}}}function R(y){let r,o,s,d,n,t,m,S,g,x,v,w,_,K;const b=[{title:"Data visualisation/BarChart"},{component:M},{argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}}},G(I)];let D={};for(let e=0;e<b.length;e+=1)D=N(D,b[e]);return r=new L({props:D}),s=new P({props:{$$slots:{default:[Q,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:y}}}),n=new k({props:{name:"Default",args:{data:C.filter(U),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}}}),m=new k({props:{name:"Stacked bars",args:{data:C,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}}}),g=new k({props:{name:"Grouped bars",args:{data:C,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}}}),v=new k({props:{name:"Comparison markers",args:{data:C,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}}}),_=new k({props:{name:"Barcode",args:{data:C,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}}}),{c(){p(r.$$.fragment),o=h(),p(s.$$.fragment),d=h(),p(n.$$.fragment),t=h(),p(m.$$.fragment),S=h(),p(g.$$.fragment),x=h(),p(v.$$.fragment),w=h(),p(_.$$.fragment)},m(e,a){l(r,e,a),c(e,o,a),l(s,e,a),c(e,d,a),l(n,e,a),c(e,t,a),l(m,e,a),c(e,S,a),l(g,e,a),c(e,x,a),l(v,e,a),c(e,w,a),l(_,e,a),K=!0},p(e,[a]){const z=a&0?O(b,[b[0],a&0&&{component:M},b[2],a&0&&T(G(I))]):{};r.$set(z);const A={};a&3&&(A.$$scope={dirty:a,ctx:e}),s.$set(A)},i(e){K||(i(r.$$.fragment,e),i(s.$$.fragment,e),i(n.$$.fragment,e),i(m.$$.fragment,e),i(g.$$.fragment,e),i(v.$$.fragment,e),i(_.$$.fragment,e),K=!0)},o(e){u(r.$$.fragment,e),u(s.$$.fragment,e),u(n.$$.fragment,e),u(m.$$.fragment,e),u(g.$$.fragment,e),u(v.$$.fragment,e),u(_.$$.fragment,e),K=!1},d(e){f(r,e),e&&$(o),f(s,e),e&&$(d),f(n,e),e&&$(t),f(m,e),e&&$(S),f(g,e),e&&$(x),f(v,e),e&&$(w),f(_,e)}}}const U=y=>y.group=="apples";class V extends j{constructor(r){super(),q(this,r,null,R,E,{})}}const B=J(V,{meta:{title:"Data visualisation/BarChart"},stories:{"tpl:default":{storyId:"data-visualisation-barchart--default",name:"default",template:!0,source:`<div style:padding="12px">
  <BarChart {...args} />
</div>`,hasArgs:!0},Default:{storyId:"data-visualisation-barchart--default",name:"Default",template:!1,hasArgs:!1},StackedBars:{storyId:"data-visualisation-barchart--stacked-bars",name:"Stacked bars",template:!1,hasArgs:!1},GroupedBars:{storyId:"data-visualisation-barchart--grouped-bars",name:"Grouped bars",template:!1,hasArgs:!1},ComparisonMarkers:{storyId:"data-visualisation-barchart--comparison-markers",name:"Comparison markers",template:!1,hasArgs:!1},Barcode:{storyId:"data-visualisation-barchart--barcode",name:"Barcode",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","BarChart","data","withComponentDocs"]}),ee=B.meta,ae=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],te=B.stories.Default,re=B.stories.StackedBars,se=B.stories.GroupedBars,oe=B.stories.ComparisonMarkers,ne=B.stories.Barcode;export{ne as Barcode,oe as ComparisonMarkers,te as Default,se as GroupedBars,re as StackedBars,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=BarChart.stories-def880e8.js.map

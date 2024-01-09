import{S as I,i as N,s as O,p as K,j as f,w as y,m as c,a as _,k as T,l as b,b as d,t as $,n as h,d as D,x as j,y as k}from"./index-8607ceaf.js";import{p as q,w,M as z,T as B,S as x}from"./collect-stories-45ecfa9a.js";import{D as g}from"./Chart-af318506.js";import{d as M}from"./data-deeb1c5a.js";const P=`A dot plot chart component with animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { DotPlotChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320 },
    { year: 2018, value: 640 },
    { year: 2019, value: 1600 },
    { year: 2020, value: 3840 },
  ];
<\/script>

<DotPlotChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />
\`\`\`
`;function E(i){let a,r,o;const p=[i[0]];let n={};for(let e=0;e<p.length;e+=1)n=K(n,p[e]);return r=new g({props:n}),{c(){a=j("div"),f(r.$$.fragment),k(a,"padding","12px")},m(e,l){_(e,a,l),c(r,a,null),o=!0},p(e,l){const m=l&1?T(p,[b(e[0])]):{};r.$set(m)},i(e){o||(d(r.$$.fragment,e),o=!0)},o(e){$(r.$$.fragment,e),o=!1},d(e){e&&D(a),h(r)}}}function F(i){let a,r,o,p,n,e,l,m;const u=[{title:"Data visualisation/DotPlotChart"},{component:g},{argTypes:{}},w(P)];let v={};for(let t=0;t<u.length;t+=1)v=K(v,u[t]);return a=new z({props:v}),o=new B({props:{$$slots:{default:[E,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:i}}}),n=new x({props:{name:"Default",args:{data:M.filter(G),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}}}),l=new x({props:{name:"Multiple dots",args:{data:M,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}}}),{c(){f(a.$$.fragment),r=y(),f(o.$$.fragment),p=y(),f(n.$$.fragment),e=y(),f(l.$$.fragment)},m(t,s){c(a,t,s),_(t,r,s),c(o,t,s),_(t,p,s),c(n,t,s),_(t,e,s),c(l,t,s),m=!0},p(t,[s]){const A=s&0?T(u,[u[0],s&0&&{component:g},u[2],s&0&&b(w(P))]):{};a.$set(A);const S={};s&3&&(S.$$scope={dirty:s,ctx:t}),o.$set(S)},i(t){m||(d(a.$$.fragment,t),d(o.$$.fragment,t),d(n.$$.fragment,t),d(l.$$.fragment,t),m=!0)},o(t){$(a.$$.fragment,t),$(o.$$.fragment,t),$(n.$$.fragment,t),$(l.$$.fragment,t),m=!1},d(t){h(a,t),t&&D(r),h(o,t),t&&D(p),h(n,t),t&&D(e),h(l,t)}}}const G=i=>i.group=="apples";class H extends I{constructor(a){super(),N(this,a,null,F,O,{})}}const C=q(H,{meta:{title:"Data visualisation/DotPlotChart"},stories:{"tpl:default":{storyId:"data-visualisation-dotplotchart--default",name:"default",template:!0,source:`<div style:padding="12px">
  <DotPlotChart {...args} />
</div>`,hasArgs:!0},Default:{storyId:"data-visualisation-dotplotchart--default",name:"Default",template:!1,hasArgs:!1},MultipleDots:{storyId:"data-visualisation-dotplotchart--multiple-dots",name:"Multiple dots",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","DotPlotChart","data","withComponentDocs"]}),U=C.meta,V=["Default","MultipleDots"],W=C.stories.Default,X=C.stories.MultipleDots;export{W as Default,X as MultipleDots,V as __namedExportsOrder,U as default};
//# sourceMappingURL=DotPlotChart.stories-02686d8e.js.map

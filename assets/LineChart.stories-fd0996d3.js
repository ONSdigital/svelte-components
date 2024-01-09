import{S as T,i as z,s as M,p as A,j as u,w as L,m,a as y,k as I,l as N,b as f,t as c,n as d,d as $,x as W,y as j}from"./index-8607ceaf.js";import{p as q,w as K,M as E,T as B,S as b}from"./collect-stories-45ecfa9a.js";import{L as D}from"./Chart-af318506.js";import{d as w}from"./data-deeb1c5a.js";const k=`A line chart component with various modes, plus animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { LineChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320, group: "apples" },
    { year: 2017, value: 480, group: "bananas" },
    { year: 2017, value: 640, group: "cherries" },
    { year: 2017, value: 400, group: "dates" },
    { year: 2018, value: 640, group: "apples" },
    { year: 2018, value: 960, group: "bananas" },
    { year: 2018, value: 640, group: "cherries" },
    { year: 2018, value: 400, group: "dates" },
    { year: 2019, value: 1600, group: "apples" },
    { year: 2019, value: 1440, group: "bananas" },
    { year: 2019, value: 960, group: "cherries" },
    { year: 2019, value: 400, group: "dates" },
    { year: 2020, value: 3840, group: "apples" },
    { year: 2020, value: 1920, group: "bananas" },
    { year: 2020, value: 960, group: "cherries" },
    { year: 2020, value: 400, group: "dates" },
  ];
<\/script>

<LineChart {data} xKey="year" yKey="value" zKey="group" title="Line chart example" footer="Source: ONS." legend={true} />
\`\`\`
`;function F(v){let a,n,s;const i=[v[0]];let l={};for(let t=0;t<i.length;t+=1)l=A(l,i[t]);return n=new D({props:l}),{c(){a=W("div"),u(n.$$.fragment),j(a,"padding","12px")},m(t,o){y(t,a,o),m(n,a,null),s=!0},p(t,o){const h=o&1?I(i,[N(t[0])]):{};n.$set(h)},i(t){s||(f(n.$$.fragment,t),s=!0)},o(t){c(n.$$.fragment,t),s=!1},d(t){t&&$(a),d(n)}}}function G(v){let a,n,s,i,l,t,o,h,p,_;const g=[{title:"Data visualisation/LineChart"},{component:D},{argTypes:{mode:{options:["default","stacked"],control:{type:"select"}}}},K(k)];let C={};for(let e=0;e<g.length;e+=1)C=A(C,g[e]);return a=new E({props:C}),s=new B({props:{$$slots:{default:[F,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:v}}}),l=new b({props:{name:"Default",args:{data:w,xKey:"year",yKey:"value",zKey:"group",title:"Simple line chart",footer:"Source: ONS.",mode:"default",legend:!0}}}),o=new b({props:{name:"Line chart with inline labels",args:{data:w,xKey:"year",yKey:"value",zKey:"group",title:"Line chart with inline labels",footer:"Source: ONS.",mode:"default",padding:{top:0,bottom:28,left:35,right:100},labels:"all"}}}),p=new b({props:{name:"Stacked area chart",args:{data:w,xKey:"year",yKey:"value",zKey:"group",title:"Stacked area chart",footer:"Source: ONS.",mode:"stacked",line:!1,legend:!0}}}),{c(){u(a.$$.fragment),n=L(),u(s.$$.fragment),i=L(),u(l.$$.fragment),t=L(),u(o.$$.fragment),h=L(),u(p.$$.fragment)},m(e,r){m(a,e,r),y(e,n,r),m(s,e,r),y(e,i,r),m(l,e,r),y(e,t,r),m(o,e,r),y(e,h,r),m(p,e,r),_=!0},p(e,[r]){const O=r&0?I(g,[g[0],r&0&&{component:D},g[2],r&0&&N(K(k))]):{};a.$set(O);const x={};r&3&&(x.$$scope={dirty:r,ctx:e}),s.$set(x)},i(e){_||(f(a.$$.fragment,e),f(s.$$.fragment,e),f(l.$$.fragment,e),f(o.$$.fragment,e),f(p.$$.fragment,e),_=!0)},o(e){c(a.$$.fragment,e),c(s.$$.fragment,e),c(l.$$.fragment,e),c(o.$$.fragment,e),c(p.$$.fragment,e),_=!1},d(e){d(a,e),e&&$(n),d(s,e),e&&$(i),d(l,e),e&&$(t),d(o,e),e&&$(h),d(p,e)}}}class H extends T{constructor(a){super(),z(this,a,null,G,M,{})}}const S=q(H,{meta:{title:"Data visualisation/LineChart"},stories:{"tpl:default":{storyId:"data-visualisation-linechart--default",name:"default",template:!0,source:`<div style:padding="12px">
  <LineChart {...args} />
</div>`,hasArgs:!0},Default:{storyId:"data-visualisation-linechart--default",name:"Default",template:!1,hasArgs:!1},LineChartWithInlineLabels:{storyId:"data-visualisation-linechart--line-chart-with-inline-labels",name:"Line chart with inline labels",template:!1,hasArgs:!1},StackedAreaChart:{storyId:"data-visualisation-linechart--stacked-area-chart",name:"Stacked area chart",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","LineChart","data","withComponentDocs"]}),U=S.meta,V=["Default","LineChartWithInlineLabels","StackedAreaChart"],X=S.stories.Default,Y=S.stories.LineChartWithInlineLabels,Z=S.stories.StackedAreaChart;export{X as Default,Y as LineChartWithInlineLabels,Z as StackedAreaChart,V as __namedExportsOrder,U as default};
//# sourceMappingURL=LineChart.stories-fd0996d3.js.map

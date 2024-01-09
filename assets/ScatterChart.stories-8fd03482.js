import{S as O,i as T,s as M,p as R,j as g,w as _,m as i,a as f,k as B,l as I,b as y,t as c,n as v,d as h,x as j,y as k}from"./index-8607ceaf.js";import{p as z,w as K,M as q,T as E,S as w}from"./collect-stories-45ecfa9a.js";import{S as A}from"./Chart-af318506.js";const G=`A scatter chart component with various modes, plus animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ScatterChart } from "@onsvisual/svelte-charts";

  const data = export default [
    { year: 1979, value: 7.19, alt: 12, group: "apples" },
    { year: 1980, value: 7.83, alt: 15, group: "apples" },
    { year: 1981, value: 7.24, alt: 17, group: "apples" },
    { year: 1982, value: 7.44, alt: 28, group: "apples" },
    { year: 1983, value: 7.51, alt: 23, group: "apples" },
    { year: 1984, value: 7.1, alt: 17, group: "apples" },
    { year: 1985, value: 6.91, alt: 11, group: "apples" },
    { year: 1986, value: 7.53, alt: 13, group: "apples" },
    { year: 1987, value: 7.47, alt: 18, group: "apples" },
    { year: 1988, value: 7.48, alt: 20, group: "apples" },
    { year: 1989, value: 7.03, alt: 24, group: "apples" },
    { year: 1990, value: 6.23, alt: 26, group: "bananas" },
    { year: 1991, value: 6.54, alt: 16, group: "bananas" },
    { year: 1992, value: 7.54, alt: 25, group: "bananas" },
    { year: 1993, value: 6.5, alt: 28, group: "bananas" },
    { year: 1994, value: 7.18, alt: 11, group: "bananas" },
    { year: 1995, value: 6.12, alt: 19, group: "bananas" },
    { year: 1996, value: 7.87, alt: 14, group: "bananas" },
    { year: 1997, value: 6.73, alt: 22, group: "bananas" },
    { year: 1998, value: 6.55, alt: 13, group: "bananas" },
    { year: 1999, value: 6.23, alt: 30, group: "bananas" },
    { year: 2000, value: 6.31, alt: 27, group: "bananas" },
    { year: 2001, value: 6.74, alt: 13, group: "cherries" },
    { year: 2002, value: 5.95, alt: 18, group: "cherries" },
    { year: 2003, value: 6.13, alt: 15, group: "cherries" },
    { year: 2004, value: 6.04, alt: 11, group: "cherries" },
    { year: 2005, value: 5.56, alt: 29, group: "cherries" },
    { year: 2006, value: 5.91, alt: 26, group: "cherries" },
    { year: 2007, value: 4.29, alt: 10, group: "cherries" },
    { year: 2008, value: 4.72, alt: 14, group: "cherries" },
    { year: 2009, value: 5.38, alt: 21, group: "cherries" },
    { year: 2010, value: 4.92, alt: 20, group: "cherries" },
    { year: 2011, value: 4.61, alt: 24, group: "dates" },
    { year: 2012, value: 3.62, alt: 19, group: "dates" },
    { year: 2013, value: 5.35, alt: 12, group: "dates" },
    { year: 2014, value: 5.28, alt: 13, group: "dates" },
    { year: 2015, value: 4.63, alt: 28, group: "dates" },
    { year: 2016, value: 4.72, alt: 30, group: "dates" },
  ];
<\/script>

<ScatterChart {data} xKey="year" yKey="value" title="Scatter chart example" footer="Source: ONS." />
\`\`\`
`,x=[{year:1979,value:7.19,alt:12,group:"apples"},{year:1980,value:7.83,alt:15,group:"apples"},{year:1981,value:7.24,alt:17,group:"apples"},{year:1982,value:7.44,alt:28,group:"apples"},{year:1983,value:7.51,alt:23,group:"apples"},{year:1984,value:7.1,alt:17,group:"apples"},{year:1985,value:6.91,alt:11,group:"apples"},{year:1986,value:7.53,alt:13,group:"apples"},{year:1987,value:7.47,alt:18,group:"apples"},{year:1988,value:7.48,alt:20,group:"apples"},{year:1989,value:7.03,alt:24,group:"apples"},{year:1990,value:6.23,alt:26,group:"bananas"},{year:1991,value:6.54,alt:16,group:"bananas"},{year:1992,value:7.54,alt:25,group:"bananas"},{year:1993,value:6.5,alt:28,group:"bananas"},{year:1994,value:7.18,alt:11,group:"bananas"},{year:1995,value:6.12,alt:19,group:"bananas"},{year:1996,value:7.87,alt:14,group:"bananas"},{year:1997,value:6.73,alt:22,group:"bananas"},{year:1998,value:6.55,alt:13,group:"bananas"},{year:1999,value:6.23,alt:30,group:"bananas"},{year:2e3,value:6.31,alt:27,group:"bananas"},{year:2001,value:6.74,alt:13,group:"cherries"},{year:2002,value:5.95,alt:18,group:"cherries"},{year:2003,value:6.13,alt:15,group:"cherries"},{year:2004,value:6.04,alt:11,group:"cherries"},{year:2005,value:5.56,alt:29,group:"cherries"},{year:2006,value:5.91,alt:26,group:"cherries"},{year:2007,value:4.29,alt:10,group:"cherries"},{year:2008,value:4.72,alt:14,group:"cherries"},{year:2009,value:5.38,alt:21,group:"cherries"},{year:2010,value:4.92,alt:20,group:"cherries"},{year:2011,value:4.61,alt:24,group:"dates"},{year:2012,value:3.62,alt:19,group:"dates"},{year:2013,value:5.35,alt:12,group:"dates"},{year:2014,value:5.28,alt:13,group:"dates"},{year:2015,value:4.63,alt:28,group:"dates"},{year:2016,value:4.72,alt:30,group:"dates"}];function F($){let r,l,s;const p=[$[0]];let u={};for(let e=0;e<p.length;e+=1)u=R(u,p[e]);return l=new A({props:u}),{c(){r=j("div"),g(l.$$.fragment),k(r,"padding","12px")},m(e,n){f(e,r,n),i(l,r,null),s=!0},p(e,n){const d=n&1?B(p,[I(e[0])]):{};l.$set(d)},i(e){s||(y(l.$$.fragment,e),s=!0)},o(e){c(l.$$.fragment,e),s=!1},d(e){e&&h(r),v(l)}}}function H($){let r,l,s,p,u,e,n,d,o,S;const m=[{title:"Data visualisation/ScatterChart"},{component:A},{argTypes:{mode:{options:["default","stacked"],control:{type:"select"}}}},K(G)];let C={};for(let a=0;a<m.length;a+=1)C=R(C,m[a]);return r=new q({props:C}),s=new E({props:{$$slots:{default:[F,({args:a})=>({0:a}),({args:a})=>a?1:0]},$$scope:{ctx:$}}}),u=new w({props:{name:"Default",args:{data:x,xKey:"year",yKey:"value",title:"Simple scatter chart",footer:"Source: ONS."}}}),n=new w({props:{name:"Scatter chart radius and groups",args:{data:x,xKey:"year",yKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Scatter chart radius and groups",footer:"Source: ONS.",legend:!0}}}),o=new w({props:{name:"Beeswarm chart radius and groups",args:{data:x,xKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Beeswarm chart radius and groups",footer:"Source: ONS.",legend:!0}}}),{c(){g(r.$$.fragment),l=_(),g(s.$$.fragment),p=_(),g(u.$$.fragment),e=_(),g(n.$$.fragment),d=_(),g(o.$$.fragment)},m(a,t){i(r,a,t),f(a,l,t),i(s,a,t),f(a,p,t),i(u,a,t),f(a,e,t),i(n,a,t),f(a,d,t),i(o,a,t),S=!0},p(a,[t]){const N=t&0?B(m,[m[0],t&0&&{component:A},m[2],t&0&&I(K(G))]):{};r.$set(N);const D={};t&3&&(D.$$scope={dirty:t,ctx:a}),s.$set(D)},i(a){S||(y(r.$$.fragment,a),y(s.$$.fragment,a),y(u.$$.fragment,a),y(n.$$.fragment,a),y(o.$$.fragment,a),S=!0)},o(a){c(r.$$.fragment,a),c(s.$$.fragment,a),c(u.$$.fragment,a),c(n.$$.fragment,a),c(o.$$.fragment,a),S=!1},d(a){v(r,a),a&&h(l),v(s,a),a&&h(p),v(u,a),a&&h(e),v(n,a),a&&h(d),v(o,a)}}}class J extends O{constructor(r){super(),T(this,r,null,H,M,{})}}const b=z(J,{meta:{title:"Data visualisation/ScatterChart"},stories:{"tpl:default":{storyId:"data-visualisation-scatterchart--default",name:"default",template:!0,source:`<div style:padding="12px">
  <ScatterChart {...args} />
</div>`,hasArgs:!0},Default:{storyId:"data-visualisation-scatterchart--default",name:"Default",template:!1,hasArgs:!1},ScatterChartRadiusAndGroups:{storyId:"data-visualisation-scatterchart--scatter-chart-radius-and-groups",name:"Scatter chart radius and groups",template:!1,hasArgs:!1},BeeswarmChartRadiusAndGroups:{storyId:"data-visualisation-scatterchart--beeswarm-chart-radius-and-groups",name:"Beeswarm chart radius and groups",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ScatterChart","data","withComponentDocs"]}),U=b.meta,V=["Default","ScatterChartRadiusAndGroups","BeeswarmChartRadiusAndGroups"],W=b.stories.Default,X=b.stories.ScatterChartRadiusAndGroups,Y=b.stories.BeeswarmChartRadiusAndGroups;export{Y as BeeswarmChartRadiusAndGroups,W as Default,X as ScatterChartRadiusAndGroups,V as __namedExportsOrder,U as default};
//# sourceMappingURL=ScatterChart.stories-8fd03482.js.map

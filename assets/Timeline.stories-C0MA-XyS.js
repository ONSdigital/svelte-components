import{a as N,j as o,k as c,n as f,t as k,e as t,q as M,c as A,f as h,g as _,p as z,o as x,h as F}from"./iframe-BT89WHcf.js";import{w as J,c as j,i as q,d as L,a as V}from"./create-runtime-stories-Bd4Sgtpw.js";import{e as B,i as E}from"./each-TiEKLRVu.js";import{h as H}from"./html-JF2pNrqs.js";import{s as D}from"./slot-BP_Qo1ZM.js";var R=o('<div class="ons-timeline__item"><h2 class="ons-timeline__heading"> </h2> <div class="ons-timeline__content"><!></div></div>');function u(a,n){let s=N(n,"title",8,"");var e=R(),i=f(e),l=f(i),m=c(i,2),r=f(m);D(r,n,"default",{},null),k(()=>M(l,s())),t(a,e)}u.__docgen={data:[{name:"title",visibility:"public",description:"Title of timeline item",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"TimelineItem.svelte"};var G=o('<div class="ons-timeline"><!> <!></div>');function g(a,n){let s=N(n,"items",24,()=>[]);var e=G(),i=f(e);D(i,n,"default",{},null);var l=c(i,2);B(l,1,s,E,(m,r)=>{u(m,{get title(){return _(r).title},children:(T,$)=>{var y=A(),v=h(y);H(v,()=>_(r).content),t(T,y)},$$slots:{default:!0}})}),t(a,e)}g.__docgen={data:[{name:"items",visibility:"public",description:"Timeline items in the format {title, content}, where content can be an HTML string",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"}],name:"Timeline.svelte"};const K=`A component to display a linear record of past and future events.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/timeline).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Timeline } from "@onsvisual/svelte-components";

  const items = [
    {
      title: "November 2020",
      content: "ONS to provide you with content for magazines and publications"
    },
    {
      title: "January to March 2021",
      content: "ONS to provide a range of press releases for external use"
    },
    {
      title: "February to April 2021",
      content: "Promote your local Census Support Centres"
    }
  ];
<\/script>

<Timeline {items}>
\`\`\`
`,Q=`In this example, the timeline items are defined explicitly.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Timeline, TimelineItem } from "@onsvisual/svelte-components";
<\/script>

<Timeline>
  <TimelineItem title="November 2020">
    <p>ONS to provide you with content for magazines and publications</p>
  </TimelineItem>
  <TimelineItem title="January to March 2021">
    <p>ONS to provide a range of press releases for external use</p>
  </TimelineItem>
  <TimelineItem title="February to April 2021">
    <p>Promote your local Census Support Centres</p>
  </TimelineItem>
</Timeline>
\`\`\`
`,U={title:"Layout/Timeline",component:g,tags:["autodocs"],argTypes:{},parameters:J(K)},{Story:C}=L(),W=[{title:"November 2020",content:"ONS to provide you with content for magazines and publications"},{title:"January to March 2021",content:"ONS to provide a range of press releases for external use"},{title:"February to April 2021",content:"Promote your local Census Support Centres"}];var X=o("<p>ONS to provide you with content for magazines and publications</p>"),Y=o("<p>ONS to provide a range of press releases for external use</p>"),Z=o("<p>Promote your local Census Support Centres</p>"),ee=o("<!> <!> <!>",1),te=o("<!> <!>",1);function w(a,n){z(n,!1),q();var s=te(),e=h(s);const i=x(()=>({items:W}));C(e,{name:"Default",get args(){return _(i)},parameters:{__svelteCsf:{rawCode:"<Timeline {...args} />"}}});var l=c(e,2);const m=x(()=>V(Q));C(l,{name:"Individually defined timeline items",asChild:!0,parameters:{..._(m),__svelteCsf:{rawCode:`<Timeline>
	<TimelineItem title="November 2020">
		<p>ONS to provide you with content for magazines and publications</p>
	</TimelineItem>
	<TimelineItem title="January to March 2021">
		<p>ONS to provide a range of press releases for external use</p>
	</TimelineItem>
	<TimelineItem title="February to April 2021">
		<p>Promote your local Census Support Centres</p>
	</TimelineItem>
</Timeline>`}},children:(r,T)=>{g(r,{children:($,y)=>{var v=ee(),I=h(v);u(I,{title:"November 2020",children:(p,S)=>{var d=X();t(p,d)},$$slots:{default:!0}});var b=c(I,2);u(b,{title:"January to March 2021",children:(p,S)=>{var d=Y();t(p,d)},$$slots:{default:!0}});var P=c(b,2);u(P,{title:"February to April 2021",children:(p,S)=>{var d=Z();t(p,d)},$$slots:{default:!0}}),t($,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(a,s),F()}w.__docgen={data:[],name:"Timeline.stories.svelte"};const O=j(w,U),ae=["Default","IndividuallyDefinedTimelineItems"],le={...O.Default,tags:["svelte-csf-v5"]},me={...O.IndividuallyDefinedTimelineItems,tags:["svelte-csf-v5"]};export{le as Default,me as IndividuallyDefinedTimelineItems,ae as __namedExportsOrder,U as default};

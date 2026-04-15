import{p as N,f as o,k as f,t as k,j as t,J as c,K as A,l as M,m as h,G as _,A as J,h as x,I as z}from"./iframe-CqVOxj15.js";import{w as F,c as j,i as V,d as q,a as B}from"./create-runtime-stories-BvtLznAC.js";import{e as E,i as G}from"./each-C2rzIKO7.js";import{h as H}from"./html-C2KUQu_E.js";import{s as D}from"./slot-BP_Qo1ZM.js";var K=o('<div class="ons-timeline__item"><h2 class="ons-timeline__heading"> </h2> <div class="ons-timeline__content"><!></div></div>');function u(a,n){let s=N(n,"title",8,null);var e=K(),i=f(e),l=f(i),m=c(i,2),r=f(m);D(r,n,"default",{},null),k(()=>A(l,s())),t(a,e)}u.__docgen={data:[{name:"title",visibility:"public",description:"Title of timeline item",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"TimelineItem.svelte"};var L=o('<div class="ons-timeline"><!> <!></div>');function T(a,n){let s=N(n,"items",24,()=>[]);var e=L(),i=f(e);D(i,n,"default",{},null);var l=c(i,2);E(l,1,s,G,(m,r)=>{u(m,{get title(){return _(r).title},children:(g,I)=>{var y=M(),v=h(y);H(v,()=>_(r).content),t(g,y)},$$slots:{default:!0}})}),t(a,e)}T.__docgen={data:[{name:"items",visibility:"public",description:"Timeline items in the format {title, content}, where content can be an HTML string",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"}],name:"Timeline.svelte"};const R=`A component to display a linear record of past and future events.

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
`,U={title:"Information and media/Timeline",component:T,tags:["autodocs"],argTypes:{},parameters:F(R)},{Story:C}=q(),W=[{title:"November 2020",content:"ONS to provide you with content for magazines and publications"},{title:"January to March 2021",content:"ONS to provide a range of press releases for external use"},{title:"February to April 2021",content:"Promote your local Census Support Centres"}];var X=o("<p>ONS to provide you with content for magazines and publications</p>"),Y=o("<p>ONS to provide a range of press releases for external use</p>"),Z=o("<p>Promote your local Census Support Centres</p>"),ee=o("<!> <!> <!>",1),te=o("<!> <!>",1);function w(a,n){J(n,!1),V();var s=te(),e=h(s);const i=x(()=>({items:W}));C(e,{name:"Default",get args(){return _(i)},parameters:{__svelteCsf:{rawCode:"<Timeline {...args} />"}}});var l=c(e,2);const m=x(()=>B(Q));C(l,{name:"Individually defined timeline items",asChild:!0,parameters:{..._(m),__svelteCsf:{rawCode:`<Timeline>
	<TimelineItem title="November 2020">
		<p>ONS to provide you with content for magazines and publications</p>
	</TimelineItem>
	<TimelineItem title="January to March 2021">
		<p>ONS to provide a range of press releases for external use</p>
	</TimelineItem>
	<TimelineItem title="February to April 2021">
		<p>Promote your local Census Support Centres</p>
	</TimelineItem>
</Timeline>`}},children:(r,g)=>{T(r,{children:(I,y)=>{var v=ee(),$=h(v);u($,{title:"November 2020",children:(p,S)=>{var d=X();t(p,d)},$$slots:{default:!0}});var b=c($,2);u(b,{title:"January to March 2021",children:(p,S)=>{var d=Y();t(p,d)},$$slots:{default:!0}});var P=c(b,2);u(P,{title:"February to April 2021",children:(p,S)=>{var d=Z();t(p,d)},$$slots:{default:!0}}),t(I,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(a,s),z()}w.__docgen={data:[],name:"Timeline.stories.svelte"};const O=j(w,U),ae=["Default","IndividuallyDefinedTimelineItems"],le={...O.Default,tags:["svelte-csf-v5"]},me={...O.IndividuallyDefinedTimelineItems,tags:["svelte-csf-v5"]};export{le as Default,me as IndividuallyDefinedTimelineItems,ae as __namedExportsOrder,U as default};

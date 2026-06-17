import{p as N,ae as v,t as k,a as t,c as y,f as r,s as M,d as A,e as g,g as l,u as b,ab as z,ad as F,H as S}from"./iframe-CwzZm-HX.js";import{c as J,w as H,i as V,d as j,a as q}from"./create-runtime-stories-DdjfTBf5.js";import{e as B,i as E}from"./each-CDLgP4DF.js";import{h as L}from"./html-Dt5wzgB9.js";import{s as x}from"./slot-BP_Qo1ZM.js";import"./preload-helper-Dp1pzeXC.js";var R=r('<div class="ons-timeline__item"><h2 class="ons-timeline__heading"> </h2> <div class="ons-timeline__content"><!></div></div>');function f(m,n){let s=N(n,"title",8,null);var e=R(),i=y(e),o=y(i),p=v(i,2),a=y(p);x(a,n,"default",{},null),k(()=>M(o,s())),t(m,e)}f.__docgen={data:[{name:"title",visibility:"public",description:"Title of timeline item",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"TimelineItem.svelte"};var G=r('<div class="ons-timeline"><!> <!></div>');function T(m,n){let s=N(n,"items",24,()=>[]);var e=G(),i=y(e);x(i,n,"default",{},null);var o=v(i,2);B(o,1,s,E,(p,a)=>{f(p,{get title(){return l(a),b(()=>l(a).title)},children:(h,O)=>{var d=A(),_=g(d);L(_,()=>(l(a),b(()=>l(a).content))),t(h,d)},$$slots:{default:!0}})}),t(m,e)}T.__docgen={data:[{name:"items",visibility:"public",description:"Timeline items in the format {title, content}, where content can be an HTML string",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"}],name:"Timeline.svelte"};const K=`A component to display a linear record of past and future events.

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
`,U={title:"Information and media/Timeline",component:T,tags:["autodocs"],argTypes:{},parameters:H(K)},{Story:C}=j(),W=[{title:"November 2020",content:"ONS to provide you with content for magazines and publications"},{title:"January to March 2021",content:"ONS to provide a range of press releases for external use"},{title:"February to April 2021",content:"Promote your local Census Support Centres"}];var X=r("<p>ONS to provide you with content for magazines and publications</p>"),Y=r("<p>ONS to provide a range of press releases for external use</p>"),Z=r("<p>Promote your local Census Support Centres</p>"),ee=r("<!> <!> <!>",1),te=r("<!> <!>",1);function D(m,n){z(n,!1),V();var s=te(),e=g(s);{let o=S(()=>({items:W}));C(e,{name:"Default",get args(){return l(o)},parameters:{__svelteCsf:{rawCode:"<Timeline {...args} />"}}})}var i=v(e,2);{let o=S(()=>q(Q));C(i,{name:"Individually defined timeline items",asChild:!0,parameters:{...l(o),__svelteCsf:{rawCode:`<Timeline>
	<TimelineItem title="November 2020">
		<p>ONS to provide you with content for magazines and publications</p>
	</TimelineItem>
	<TimelineItem title="January to March 2021">
		<p>ONS to provide a range of press releases for external use</p>
	</TimelineItem>
	<TimelineItem title="February to April 2021">
		<p>Promote your local Census Support Centres</p>
	</TimelineItem>
</Timeline>`}},children:(p,a)=>{T(p,{children:(h,O)=>{var d=ee(),_=g(d);f(_,{title:"November 2020",children:(c,I)=>{var u=X();t(c,u)},$$slots:{default:!0}});var $=v(_,2);f($,{title:"January to March 2021",children:(c,I)=>{var u=Y();t(c,u)},$$slots:{default:!0}});var P=v($,2);f(P,{title:"February to April 2021",children:(c,I)=>{var u=Z();t(c,u)},$$slots:{default:!0}}),t(h,d)},$$slots:{default:!0}})},$$slots:{default:!0}})}t(m,s),F()}D.__docgen={data:[],name:"Timeline.stories.svelte"};const w=J(D,U),le=["Default","IndividuallyDefinedTimelineItems"],me={...w.Default,tags:["svelte-csf-v5"]},pe={...w.IndividuallyDefinedTimelineItems,tags:["svelte-csf-v5"]};export{me as Default,pe as IndividuallyDefinedTimelineItems,le as __namedExportsOrder,U as default};

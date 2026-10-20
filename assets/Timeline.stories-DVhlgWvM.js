import{p as N,ae as v,t as k,a as t,c as y,f as a,s as M,d as A,e as g,g as l,u as b,ab as z,ad as F,H as S}from"./iframe-BqRfKcLk.js";import{c as J,w as H,i as V,d as j,a as q}from"./create-runtime-stories-Du911T6H.js";import{e as B,i as E}from"./each-kHsERmtw.js";import{h as L}from"./html-QDNSwytG.js";import{s as x}from"./slot-BP_Qo1ZM.js";import"./preload-helper-Dp1pzeXC.js";var R=a('<div class="ons-timeline__item"><h2 class="ons-timeline__heading"> </h2> <div class="ons-timeline__content"><!></div></div>');function f(m,n){let s=N(n,"title",8,null);var e=R(),r=y(e),i=y(r),p=v(r,2),o=y(p);x(o,n,"default",{},null),k(()=>M(i,s())),t(m,e)}f.__docgen={data:[{name:"title",visibility:"public",description:"Title of timeline item",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"TimelineItem.svelte"};var G=a('<div class="ons-timeline"><!> <!></div>');function T(m,n){let s=N(n,"items",24,()=>[]);var e=G(),r=y(e);x(r,n,"default",{},null);var i=v(r,2);B(i,1,s,E,(p,o)=>{f(p,{get title(){return l(o),b(()=>l(o).title)},children:(h,O)=>{var d=A(),_=g(d);L(_,()=>(l(o),b(()=>l(o).content))),t(h,d)},$$slots:{default:!0}})}),t(m,e)}T.__docgen={data:[{name:"items",visibility:"public",description:"Timeline items in the format {title, content}, where content can be an HTML string",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"}],name:"Timeline.svelte"};const K=`A component to display a linear record of past and future events.\r
\r
Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/timeline).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Timeline } from "@onsvisual/svelte-components";\r
\r
  const items = [\r
    {\r
      title: "November 2020",\r
      content: "ONS to provide you with content for magazines and publications"\r
    },\r
    {\r
      title: "January to March 2021",\r
      content: "ONS to provide a range of press releases for external use"\r
    },\r
    {\r
      title: "February to April 2021",\r
      content: "Promote your local Census Support Centres"\r
    }\r
  ];\r
<\/script>\r
\r
<Timeline {items}>\r
\`\`\`\r
`,Q=`In this example, the timeline items are defined explicitly.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Timeline, TimelineItem } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Timeline>\r
  <TimelineItem title="November 2020">\r
    <p>ONS to provide you with content for magazines and publications</p>\r
  </TimelineItem>\r
  <TimelineItem title="January to March 2021">\r
    <p>ONS to provide a range of press releases for external use</p>\r
  </TimelineItem>\r
  <TimelineItem title="February to April 2021">\r
    <p>Promote your local Census Support Centres</p>\r
  </TimelineItem>\r
</Timeline>\r
\`\`\`\r
`,U={title:"Information and media/Timeline",component:T,tags:["autodocs"],argTypes:{},parameters:H(K)},{Story:C}=j(),W=[{title:"November 2020",content:"ONS to provide you with content for magazines and publications"},{title:"January to March 2021",content:"ONS to provide a range of press releases for external use"},{title:"February to April 2021",content:"Promote your local Census Support Centres"}];var X=a("<p>ONS to provide you with content for magazines and publications</p>"),Y=a("<p>ONS to provide a range of press releases for external use</p>"),Z=a("<p>Promote your local Census Support Centres</p>"),ee=a("<!> <!> <!>",1),te=a("<!> <!>",1);function D(m,n){z(n,!1),V();var s=te(),e=g(s);{let i=S(()=>({items:W}));C(e,{name:"Default",get args(){return l(i)},parameters:{__svelteCsf:{rawCode:"<Timeline {...args} />"}}})}var r=v(e,2);{let i=S(()=>q(Q));C(r,{name:"Individually defined timeline items",asChild:!0,parameters:{...l(i),__svelteCsf:{rawCode:`<Timeline>\r
	<TimelineItem title="November 2020">\r
		<p>ONS to provide you with content for magazines and publications</p>\r
	</TimelineItem>\r
	<TimelineItem title="January to March 2021">\r
		<p>ONS to provide a range of press releases for external use</p>\r
	</TimelineItem>\r
	<TimelineItem title="February to April 2021">\r
		<p>Promote your local Census Support Centres</p>\r
	</TimelineItem>\r
</Timeline>`}},children:(p,o)=>{T(p,{children:(h,O)=>{var d=ee(),_=g(d);f(_,{title:"November 2020",children:(c,I)=>{var u=X();t(c,u)},$$slots:{default:!0}});var $=v(_,2);f($,{title:"January to March 2021",children:(c,I)=>{var u=Y();t(c,u)},$$slots:{default:!0}});var P=v($,2);f(P,{title:"February to April 2021",children:(c,I)=>{var u=Z();t(c,u)},$$slots:{default:!0}}),t(h,d)},$$slots:{default:!0}})},$$slots:{default:!0}})}t(m,s),F()}D.__docgen={data:[],name:"Timeline.stories.svelte"};const w=J(D,U),le=["Default","IndividuallyDefinedTimelineItems"],me={...w.Default,tags:["svelte-csf-v5"]},pe={...w.IndividuallyDefinedTimelineItems,tags:["svelte-csf-v5"]};export{me as Default,pe as IndividuallyDefinedTimelineItems,le as __namedExportsOrder,U as default};

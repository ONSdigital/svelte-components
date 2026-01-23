import{a as N,j as i,k as c,n as f,t as k,e as t,q as M,c as A,f as h,g as _,p as z,o as x,h as F}from"./iframe-yAvQPCXH.js";import{w as J,c as j,i as q,d as L,a as V}from"./create-runtime-stories-C-ZHg9b5.js";import{e as B,i as E}from"./each-f3xhqABg.js";import{h as H}from"./html-cGmXETtv.js";import{s as D}from"./slot-BP_Qo1ZM.js";var R=i('<div class="ons-timeline__item"><h2 class="ons-timeline__heading"> </h2> <div class="ons-timeline__content"><!></div></div>');function u(a,n){let o=N(n,"title",8,null);var e=R(),r=f(e),l=f(r),m=c(r,2),s=f(m);D(s,n,"default",{},null),k(()=>M(l,o())),t(a,e)}u.__docgen={data:[{name:"title",visibility:"public",description:"Title of timeline item",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"TimelineItem.svelte"};var G=i('<div class="ons-timeline"><!> <!></div>');function g(a,n){let o=N(n,"items",24,()=>[]);var e=G(),r=f(e);D(r,n,"default",{},null);var l=c(r,2);B(l,1,o,E,(m,s)=>{u(m,{get title(){return _(s).title},children:(T,$)=>{var y=A(),v=h(y);H(v,()=>_(s).content),t(T,y)},$$slots:{default:!0}})}),t(a,e)}g.__docgen={data:[{name:"items",visibility:"public",description:"Timeline items in the format {title, content}, where content can be an HTML string",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"}],name:"Timeline.svelte"};const K=`A component to display a linear record of past and future events.\r
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
`,U={title:"Layout/Timeline",component:g,tags:["autodocs"],argTypes:{},parameters:J(K)},{Story:C}=L(),W=[{title:"November 2020",content:"ONS to provide you with content for magazines and publications"},{title:"January to March 2021",content:"ONS to provide a range of press releases for external use"},{title:"February to April 2021",content:"Promote your local Census Support Centres"}];var X=i("<p>ONS to provide you with content for magazines and publications</p>"),Y=i("<p>ONS to provide a range of press releases for external use</p>"),Z=i("<p>Promote your local Census Support Centres</p>"),ee=i("<!> <!> <!>",1),te=i("<!> <!>",1);function w(a,n){z(n,!1),q();var o=te(),e=h(o);const r=x(()=>({items:W}));C(e,{name:"Default",get args(){return _(r)},parameters:{__svelteCsf:{rawCode:"<Timeline {...args} />"}}});var l=c(e,2);const m=x(()=>V(Q));C(l,{name:"Individually defined timeline items",asChild:!0,parameters:{..._(m),__svelteCsf:{rawCode:`<Timeline>\r
	<TimelineItem title="November 2020">\r
		<p>ONS to provide you with content for magazines and publications</p>\r
	</TimelineItem>\r
	<TimelineItem title="January to March 2021">\r
		<p>ONS to provide a range of press releases for external use</p>\r
	</TimelineItem>\r
	<TimelineItem title="February to April 2021">\r
		<p>Promote your local Census Support Centres</p>\r
	</TimelineItem>\r
</Timeline>`}},children:(s,T)=>{g(s,{children:($,y)=>{var v=ee(),I=h(v);u(I,{title:"November 2020",children:(p,S)=>{var d=X();t(p,d)},$$slots:{default:!0}});var b=c(I,2);u(b,{title:"January to March 2021",children:(p,S)=>{var d=Y();t(p,d)},$$slots:{default:!0}});var P=c(b,2);u(P,{title:"February to April 2021",children:(p,S)=>{var d=Z();t(p,d)},$$slots:{default:!0}}),t($,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(a,o),F()}w.__docgen={data:[],name:"Timeline.stories.svelte"};const O=j(w,U),ae=["Default","IndividuallyDefinedTimelineItems"],le={...O.Default,tags:["svelte-csf-v5"]},me={...O.IndividuallyDefinedTimelineItems,tags:["svelte-csf-v5"]};export{le as Default,me as IndividuallyDefinedTimelineItems,ae as __namedExportsOrder,U as default};

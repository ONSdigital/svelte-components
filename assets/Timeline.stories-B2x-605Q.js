import{p as x,ah as u,af as C,t as P,a as t,c as y,f as a,ag as N,s as A,d as M,e as g,g as _,ab as z,ad as F,H as b}from"./iframe-CWf7aFlM.js";import{c as J,w as V,i as q,d as B,a as E}from"./create-runtime-stories-DZHrlilD.js";import{e as H}from"./each-W8R4y-cX.js";import{h as R}from"./html-CHqp8wE0.js";import"./preload-helper-Dp1pzeXC.js";var j=a('<div class="ons-timeline__item"><h2 class="ons-timeline__heading"> </h2> <div class="ons-timeline__content"><!></div></div>');function v(l,n){let s=x(n,"title",3,null);var e=j(),r=y(e),i=y(r),o=u(r,2),m=y(o);C(m,()=>n.children??N),P(()=>A(i,s())),t(l,e)}v.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"TimelineItem.svelte"};var G=a('<div class="ons-timeline"><!> <!></div>');function T(l,n){let s=x(n,"items",19,()=>[]);var e=G(),r=y(e);C(r,()=>n.children??N);var i=u(r,2);H(i,17,s,o=>o.title,(o,m)=>{v(o,{get title(){return _(m).title},children:(h,k)=>{var p=M(),f=g(p);R(f,()=>_(m).content),t(h,p)},$$slots:{default:!0}})}),t(l,e)}T.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ title: string; content: string; }[]"},static:!1,readonly:!1,defaultValue:"[]"}],name:"Timeline.svelte"};const K=`A component to display a linear record of past and future events.\r
\r
In Svelte 5, nested \`<TimelineItem>\` elements are rendered through the \`children\` snippet; the \`items\` array form is unchanged.\r
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
`,L=`In this example, the timeline items are defined explicitly.\r
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
`,Q={title:"Information and media/Timeline",component:T,tags:["autodocs"],argTypes:{},parameters:V(K)},{Story:S}=B(),U=[{title:"November 2020",content:"ONS to provide you with content for magazines and publications"},{title:"January to March 2021",content:"ONS to provide a range of press releases for external use"},{title:"February to April 2021",content:"Promote your local Census Support Centres"}];var W=a("<p>ONS to provide you with content for magazines and publications</p>"),X=a("<p>ONS to provide a range of press releases for external use</p>"),Y=a("<p>Promote your local Census Support Centres</p>"),Z=a("<!> <!> <!>",1),ee=a("<!> <!>",1);function w(l,n){z(n,!1),q();var s=ee(),e=g(s);{let i=b(()=>({items:U}));S(e,{name:"Default",get args(){return _(i)},parameters:{__svelteCsf:{rawCode:"<Timeline {...args} />"}}})}var r=u(e,2);{let i=b(()=>E(L));S(r,{name:"Individually defined timeline items",asChild:!0,parameters:{..._(i),__svelteCsf:{rawCode:`<Timeline>\r
	<TimelineItem title="November 2020">\r
		<p>ONS to provide you with content for magazines and publications</p>\r
	</TimelineItem>\r
	<TimelineItem title="January to March 2021">\r
		<p>ONS to provide a range of press releases for external use</p>\r
	</TimelineItem>\r
	<TimelineItem title="February to April 2021">\r
		<p>Promote your local Census Support Centres</p>\r
	</TimelineItem>\r
</Timeline>`}},children:(o,m)=>{T(o,{children:(h,k)=>{var p=Z(),f=g(p);v(f,{title:"November 2020",children:(d,$)=>{var c=W();t(d,c)},$$slots:{default:!0}});var I=u(f,2);v(I,{title:"January to March 2021",children:(d,$)=>{var c=X();t(d,c)},$$slots:{default:!0}});var O=u(I,2);v(O,{title:"February to April 2021",children:(d,$)=>{var c=Y();t(d,c)},$$slots:{default:!0}}),t(h,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}t(l,s),F()}w.__docgen={data:[],name:"Timeline.stories.svelte"};const D=J(w,Q),ae=["Default","IndividuallyDefinedTimelineItems"],se={...D.Default,tags:["svelte-csf-v5"]},le={...D.IndividuallyDefinedTimelineItems,tags:["svelte-csf-v5"]};export{se as Default,le as IndividuallyDefinedTimelineItems,ae as __namedExportsOrder,Q as default};

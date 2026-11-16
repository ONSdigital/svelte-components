import{p as C,ah as u,s as x,t as P,a as t,c as y,f as s,n as N,b as M,e as A,h as g,g as h,ad as z,af as F,K as b}from"./iframe-DGWWVtAh.js";import{c as J,w as V,i as q,d as B,a as E}from"./create-runtime-stories-DpqZ-Xbz.js";import{e as H}from"./each-DEHiEDxj.js";import{h as K}from"./html-CLPjfGOu.js";import"./preload-helper-Dp1pzeXC.js";var L=s('<div class="ons-timeline__item"><h2 class="ons-timeline__heading"> </h2> <div class="ons-timeline__content"><!></div></div>');function v(l,n){let a=C(n,"title",3,null);var e=L(),i=y(e),o=y(i),r=u(i,2),m=y(r);x(m,()=>n.children??N),P(()=>M(o,a())),t(l,e)}v.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",description:"Title of timeline item",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"TimelineItem.svelte"};var R=s('<div class="ons-timeline"><!> <!></div>');function T(l,n){let a=C(n,"items",19,()=>[]);var e=R(),i=y(e);x(i,()=>n.children??N);var o=u(i,2);H(o,17,a,r=>r.title,(r,m)=>{v(r,{get title(){return h(m).title},children:(_,k)=>{var p=A(),f=g(p);K(f,()=>h(m).content),t(_,p)},$$slots:{default:!0}})}),t(l,e)}T.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"items",visibility:"public",description:"Timeline items in the format {title, content}, where content can be an HTML string",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ title: string; content: string; }[]"},static:!1,readonly:!1,defaultValue:"[]"}],name:"Timeline.svelte"};const j=`A component to display a linear record of past and future events.

In Svelte 5, nested \`<TimelineItem>\` elements are rendered through the \`children\` snippet; the \`items\` array form is unchanged.

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

<Timeline {items} />
\`\`\`
`,G=`In this example, the timeline items are defined explicitly.

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
`,Q={title:"Information and media/Timeline",component:T,tags:["autodocs"],argTypes:{},parameters:V(j)},{Story:S}=B(),U=[{title:"November 2020",content:"ONS to provide you with content for magazines and publications"},{title:"January to March 2021",content:"ONS to provide a range of press releases for external use"},{title:"February to April 2021",content:"Promote your local Census Support Centres"}];var W=s("<p>ONS to provide you with content for magazines and publications</p>"),X=s("<p>ONS to provide a range of press releases for external use</p>"),Y=s("<p>Promote your local Census Support Centres</p>"),Z=s("<!> <!> <!>",1),ee=s("<!> <!>",1);function w(l,n){z(n,!1),q();var a=ee(),e=g(a);{let o=b(()=>({items:U}));S(e,{name:"Default",get args(){return h(o)},parameters:{__svelteCsf:{rawCode:"<Timeline {...args} />"}}})}var i=u(e,2);{let o=b(()=>E(G));S(i,{name:"Individually defined timeline items",asChild:!0,parameters:{...h(o),__svelteCsf:{rawCode:`<Timeline>
	<TimelineItem title="November 2020">
		<p>ONS to provide you with content for magazines and publications</p>
	</TimelineItem>
	<TimelineItem title="January to March 2021">
		<p>ONS to provide a range of press releases for external use</p>
	</TimelineItem>
	<TimelineItem title="February to April 2021">
		<p>Promote your local Census Support Centres</p>
	</TimelineItem>
</Timeline>`}},children:(r,m)=>{T(r,{children:(_,k)=>{var p=Z(),f=g(p);v(f,{title:"November 2020",children:(d,$)=>{var c=W();t(d,c)},$$slots:{default:!0}});var I=u(f,2);v(I,{title:"January to March 2021",children:(d,$)=>{var c=X();t(d,c)},$$slots:{default:!0}});var O=u(I,2);v(O,{title:"February to April 2021",children:(d,$)=>{var c=Y();t(d,c)},$$slots:{default:!0}}),t(_,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}t(l,a),F()}w.__docgen={data:[],name:"Timeline.stories.svelte"};const D=J(w,Q),se=["Default","IndividuallyDefinedTimelineItems"],ae={...D.Default,tags:["svelte-csf-v5"]},le={...D.IndividuallyDefinedTimelineItems,tags:["svelte-csf-v5"]};export{ae as Default,le as IndividuallyDefinedTimelineItems,se as __namedExportsOrder,Q as default};

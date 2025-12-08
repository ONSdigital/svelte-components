import{p as L,j as W,f as F,Z as x,k as o,e as d,h as b,_ as g,V as f,t as h,o as v,q as $}from"./iframe-CwnOGufI.js";import{w as y,c as B,i as I,d as P}from"./create-runtime-stories-CLr9y0ZE.js";import{l as w}from"./utils-VWytQRnm.js";import{C}from"./Card-BeU6HHWj.js";import{G as q}from"./Grid-CeuyLfyj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./slot-BP_Qo1ZM.js";import"./attributes-Bmkkxx_O.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./GridCell-BVaC6hAz.js";import"./style-CcY6orqc.js";import"./Container-C7J1i8p-.js";import"./Theme-eXB4zOrt.js";import"./svelte-head-B3M1AazK.js";import"./html-rJElv6Xv.js";const S=`Display content and links as cards. Can be used in combination with the \`<Grid>\` component to combine multiple cards.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Grid, Card } from "@onsvisual/svelte-components";
<\/script>

<Grid>
  <Card title="Card one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Grid>
\`\`\`
`,m=(c,e=x)=>{q(c,{children:(n,_)=>{var r=E(),a=F(r);C(a,g({title:"Card one"},e,{children:(s,G)=>{var t=f();h(i=>$(t,i),[()=>w(1)],v),d(s,t)},$$slots:{default:!0}}));var l=o(a,2);C(l,g({title:"Card two"},e,{children:(s,G)=>{var t=f();h(i=>$(t,i),[()=>w(1,1)],v),d(s,t)},$$slots:{default:!0}}));var D=o(l,2);C(D,g({title:"Card three"},e,{children:(s,G)=>{var t=f();h(i=>$(t,i),[()=>w(1,2)],v),d(s,t)},$$slots:{default:!0}})),d(n,r)},$$slots:{default:!0}})},j={title:"Layout/Card",component:C,tags:["autodocs"],argTypes:{},parameters:y(S)},{Story:p}=P();var E=W("<!> <!> <!>",1),M=W("<!> <!> <!> <!>",1);function k(c,e){L(e,!1),I();var n=M(),_=F(n);p(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var r=o(_,2);p(r,{name:"Cards with links",args:{href:"#0"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var a=o(r,2);p(a,{name:"Featured cards with baseline",args:{mode:"featured",baseline:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var l=o(a,2);p(l,{name:"Featured cards with image",args:{mode:"featured",image:"https://service-manual.ons.gov.uk/img/small/placeholder-card.png"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}}),d(c,n),b()}k.__docgen={data:[],name:"Card.stories.svelte"};const u=B(k,j),et=["Default","CardsWithLinks","FeaturedCardsWithBaseline","FeaturedCardsWithImage"],rt={...u.Default,tags:["svelte-csf-v5"]},at={...u.CardsWithLinks,tags:["svelte-csf-v5"]},st={...u.FeaturedCardsWithBaseline,tags:["svelte-csf-v5"]},it={...u.FeaturedCardsWithImage,tags:["svelte-csf-v5"]};export{at as CardsWithLinks,rt as Default,st as FeaturedCardsWithBaseline,it as FeaturedCardsWithImage,et as __namedExportsOrder,j as default};

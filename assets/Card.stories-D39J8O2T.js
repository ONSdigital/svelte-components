import{A as k,f as W,m as F,W as x,J as o,j as d,I as b,X as g,O as f,t as h,h as v,K as $}from"./iframe-BbbdPRT3.js";import{w as I,c as y,i as B,d as P}from"./create-runtime-stories-BDNKaz6P.js";import{l as w}from"./utils-VWytQRnm.js";import{C as p}from"./Card-C5rAVOP8.js";import{G as O}from"./Grid-DVkMiFAE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./slot-BP_Qo1ZM.js";import"./attributes-D2OsbY2h.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./GridCell-DyjDIRa_.js";import"./style-CNURdi_Z.js";import"./Container-BTBu7wI9.js";import"./Theme-DBhVQBFA.js";import"./svelte-head-DScKyvlM.js";import"./html-C3umIGRJ.js";const S=`Display content and links as cards. Can be used in combination with the \`<Grid>\` component to combine multiple cards.

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
`,m=(c,e=x)=>{O(c,{children:(n,_)=>{var r=q(),a=F(r);p(a,g({title:"Card one"},e,{children:(s,G)=>{var t=f();h(i=>$(t,i),[()=>w(1)],v),d(s,t)},$$slots:{default:!0}}));var l=o(a,2);p(l,g({title:"Card two"},e,{children:(s,G)=>{var t=f();h(i=>$(t,i),[()=>w(1,1)],v),d(s,t)},$$slots:{default:!0}}));var L=o(l,2);p(L,g({title:"Card three"},e,{children:(s,G)=>{var t=f();h(i=>$(t,i),[()=>w(1,2)],v),d(s,t)},$$slots:{default:!0}})),d(n,r)},$$slots:{default:!0}})},j={title:"Layout/Card",component:p,tags:["autodocs"],argTypes:{},parameters:I(S)},{Story:C}=P();var q=W("<!> <!> <!>",1),A=W("<!> <!> <!> <!>",1);function D(c,e){k(e,!1),B();var n=A(),_=F(n);C(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var r=o(_,2);C(r,{name:"Cards with links",args:{href:"#0"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var a=o(r,2);C(a,{name:"Featured cards with baseline",args:{mode:"featured",baseline:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var l=o(a,2);C(l,{name:"Featured cards with image",args:{mode:"featured",image:"https://service-manual.ons.gov.uk/img/small/placeholder-card.png"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}}),d(c,n),b()}D.__docgen={data:[],name:"Card.stories.svelte"};const u=y(D,j),et=["Default","CardsWithLinks","FeaturedCardsWithBaseline","FeaturedCardsWithImage"],rt={...u.Default,tags:["svelte-csf-v5"]},at={...u.CardsWithLinks,tags:["svelte-csf-v5"]},st={...u.FeaturedCardsWithBaseline,tags:["svelte-csf-v5"]},it={...u.FeaturedCardsWithImage,tags:["svelte-csf-v5"]};export{at as CardsWithLinks,rt as Default,st as FeaturedCardsWithBaseline,it as FeaturedCardsWithImage,et as __namedExportsOrder,j as default};

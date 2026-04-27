import{A as x,f as o,m as _,J as n,j as t,I as $,k as S}from"./iframe-rn-CYE4_.js";import{w as T,c as y,i as E,d as D}from"./create-runtime-stories-DUShD_-p.js";import{s as w}from"./style-CNURdi_Z.js";import{E as c}from"./Embed-C4J5HUGz.js";import{H as L}from"./Highlight-DTcEF6io.js";import{S as r}from"./Section-oK4kuvEI.js";import{G as U}from"./Grid-Bd-yhP4F.js";import{S as A}from"./Select-BoelOgrq.js";import"./attributes-q36Eg1F8.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./class-B9SFUanI.js";import"./Container-CdUCwqLS.js";import"./attributes-DzjqHavG.js";import"./Theme-BNgrOjA5.js";import"./svelte-head-FdOH6T_E.js";import"./html-DutQzZpu.js";import"./utils-VWytQRnm.js";import"./actions-BC6T21ly.js";import"./Dropdown-BylUnbln.js";import"./each-CTmPshpe.js";import"./Input-DBvkii_g.js";import"./input-BTvYq71r.js";const G=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

(Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.)

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import { Embed, Highlight, Select, Section, Grid } from "@onsvisual/svelte-components";
<\/script>

<Embed>
  <Highlight bigText={false} marginBottom={false}>
    <div style:padding="0 12px">
      <h2>This is a sub-headline</h2>
      <p>This is a description of the embedded interactive.</p>
      <Select label="Select your area" />
    </div>
  </Highlight>

  <Section title="Section title" marginTop={true}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat..
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </Section>

  <Grid width="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
  </Grid>

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </Section>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Section>
</Embed>
\`\`\`
`,H={title:"Templates/Embedded article",component:c,tags:["autodocs"],argTypes:{},parameters:{...T(G),layout:"fullscreen"}},{Story:P}=D();var C=o("<div><h2>This is a sub-headline</h2> <p>This is a description of the embedded interactive.</p> <!></div>"),Y=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat..</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.</p>`,1),B=o('<div class="grid-cell svelte-1yc884b"></div>'),j=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`),k=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.</p>`),I=o("<!> <!> <!> <!> <!>",1);function p(h,v){x(v,!1),E(),P(h,{name:"Default",args:{},asChild:!0,children:(g,M)=>{c(g,{children:(f,N)=>{var s=I(),l=_(s);L(l,{bigText:!1,marginBottom:!1,children:(i,a)=>{var e=C();w(e,"",{},{padding:"0 12px"});var q=n(S(e),4);A(q,{label:"Select your area"}),t(i,e)},$$slots:{default:!0}});var u=n(l,2);r(u,{title:"Section title",marginTop:!0,children:(i,a)=>{var e=Y();t(i,e)},$$slots:{default:!0}});var d=n(u,2);U(d,{width:"medium",caption:"This is a caption text",children:(i,a)=>{var e=B();t(i,e)},$$slots:{default:!0}});var m=n(d,2);r(m,{title:"Another section title",children:(i,a)=>{var e=j();t(i,e)},$$slots:{default:!0}});var b=n(m,2);r(b,{title:"Yet another section title",children:(i,a)=>{var e=k();t(i,e)},$$slots:{default:!0}}),t(f,s)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Embed>
	<Highlight bigText={false} marginBottom={false}>
		<div style:padding="0 12px">
			<h2>This is a sub-headline</h2>
			<p>This is a description of the embedded interactive.</p>
			<Select label="Select your area" />
		</div>
	</Highlight>

	<Section title="Section title" marginTop={true}>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat..
		</p>
		<p>
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</p>
	</Section>

	<Grid width="medium" caption="This is a caption text">
		<div class="grid-cell"></div>
	</Grid>

	<Section title="Another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		</p>
	</Section>

	<Section title="Yet another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>
	</Section>
</Embed>`}}}),$()}p.__docgen={data:[],name:"EmbedArticle.stories.svelte"};const J=y(p,H),pe=["Default"],he={...J.Default,tags:["svelte-csf-v5"]};export{he as Default,pe as __namedExportsOrder,H as default};

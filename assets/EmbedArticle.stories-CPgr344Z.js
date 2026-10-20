import{ab as x,e as $,ah as o,c as _,a as t,ad as S,f as r}from"./iframe-CWf7aFlM.js";import{c as T,w as y,i as E,d as D}from"./create-runtime-stories-DZHrlilD.js";import{E as c}from"./Embed-CFt7H6WF.js";import{H as w}from"./Highlight-mckDj4qF.js";import{S as a}from"./Section-m2uWrDJ9.js";import{G as L}from"./Grid-CgMt-NZB.js";import{S as U}from"./Select-DRuGBqlv.js";import{s as G}from"./style-DKGnerva.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./class-bcIlrV7N.js";import"./attributes-DayBpKoh.js";import"./Container-B-0QdNll.js";import"./attributes-HyytCBC6.js";import"./Theme-kRfsJ7Yx.js";import"./html-CHqp8wE0.js";import"./svelte-head-BAKvAkK-.js";import"./utils-VWytQRnm.js";import"./actions-CdxvWulj.js";import"./Dropdown-ByHSDgTk.js";import"./each-W8R4y-cX.js";import"./Input-ByHPEnsb.js";import"./input-Bq7VfeMu.js";const H=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.\r
\r
(Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.)\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<!-- +page.svelte -->\r
<script>\r
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte\r
  import { Embed, Highlight, Select, Section, Grid } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Embed>\r
  <Highlight bigText={false} marginBottom={false}>\r
    <div style:padding="0 12px">\r
      <h2>This is a sub-headline</h2>\r
      <p>This is a description of the embedded interactive.</p>\r
      <Select label="Select your area" />\r
    </div>\r
  </Highlight>\r
\r
  <Section title="Section title" marginTop={true}>\r
    <p>\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
      laboris nisi ut aliquip ex ea commodo consequat..\r
    </p>\r
    <p>\r
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r
      mollit anim id est laborum.\r
    </p>\r
  </Section>\r
\r
  <Grid width="medium" caption="This is a caption text">\r
    <div class="grid-cell"></div>\r
  </Grid>\r
\r
  <Section title="Another section title">\r
    <p>\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r
    </p>\r
  </Section>\r
\r
  <Section title="Yet another section title">\r
    <p>\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
      laboris nisi ut aliquip ex ea commodo consequat.\r
    </p>\r
  </Section>\r
</Embed>\r
\`\`\`\r
`,P={title:"Templates/Embedded article",component:c,tags:["autodocs"],argTypes:{},parameters:{...y(H),layout:"fullscreen"}},{Story:A}=D();var C=r("<div><h2>This is a sub-headline</h2> <p>This is a description of the embedded interactive.</p> <!></div>"),Y=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat..</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.</p>`,1),B=r('<div class="grid-cell svelte-238w87"></div>'),M=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`),N=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.</p>`),O=r("<!> <!> <!> <!> <!>",1);function p(h,v){x(v,!1),E(),A(h,{name:"Default",args:{},asChild:!0,children:(g,j)=>{c(g,{children:(f,k)=>{var s=O(),l=$(s);w(l,{bigText:!1,marginBottom:!1,children:(i,n)=>{var e=C();G(e,"",{},{padding:"0 12px"});var q=o(_(e),4);U(q,{label:"Select your area"}),t(i,e)},$$slots:{default:!0}});var u=o(l,2);a(u,{title:"Section title",marginTop:!0,children:(i,n)=>{var e=Y();t(i,e)},$$slots:{default:!0}});var d=o(u,2);L(d,{width:"medium",caption:"This is a caption text",children:(i,n)=>{var e=B();t(i,e)},$$slots:{default:!0}});var m=o(d,2);a(m,{title:"Another section title",children:(i,n)=>{var e=M();t(i,e)},$$slots:{default:!0}});var b=o(m,2);a(b,{title:"Yet another section title",children:(i,n)=>{var e=N();t(i,e)},$$slots:{default:!0}}),t(f,s)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Embed>\r
	<Highlight bigText={false} marginBottom={false}>\r
		<div style:padding="0 12px">\r
			<h2>This is a sub-headline</h2>\r
			<p>This is a description of the embedded interactive.</p>\r
			<Select label="Select your area" />\r
		</div>\r
	</Highlight>\r
\r
	<Section title="Section title" marginTop={true}>\r
		<p>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
			laboris nisi ut aliquip ex ea commodo consequat..\r
		</p>\r
		<p>\r
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r
			mollit anim id est laborum.\r
		</p>\r
	</Section>\r
\r
	<Grid width="medium" caption="This is a caption text">\r
		<div class="grid-cell"></div>\r
	</Grid>\r
\r
	<Section title="Another section title">\r
		<p>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
			voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r
		</p>\r
	</Section>\r
\r
	<Section title="Yet another section title">\r
		<p>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
			laboris nisi ut aliquip ex ea commodo consequat.\r
		</p>\r
	</Section>\r
</Embed>`}}}),S()}p.__docgen={data:[],name:"EmbedArticle.stories.svelte"};const R=T(p,P),he=["Default"],ve={...R.Default,tags:["svelte-csf-v5"]};export{ve as Default,he as __namedExportsOrder,P as default};

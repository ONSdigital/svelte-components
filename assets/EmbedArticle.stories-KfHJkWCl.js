import{p as x,j as r,f as _,k as o,n as $,e as t,h as S}from"./iframe-Bu7RPEYL.js";import{w as T,c as y,i as E,d as D}from"./create-runtime-stories-tJrnYzbx.js";import{s as w}from"./style-CcY6orqc.js";import{E as c}from"./Embed-BffBB2pP.js";import{H as L}from"./Highlight-D8llvMeb.js";import{S as a}from"./Section-rMtqU3uL.js";import{G as U}from"./Grid-BwQTYTSF.js";import{S as G}from"./Select-DpCRVEtQ.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./class-Dzh9Da8g.js";import"./Container-5uYbgtz1.js";import"./attributes-BMngCuBp.js";import"./Theme-CducFuyO.js";import"./svelte-head-ItTMlsj-.js";import"./html-Cng3CFI_.js";import"./utils-VWytQRnm.js";import"./actions-B9dXvsMt.js";import"./Dropdown-D07YCYgP.js";import"./each-CGJfJk9N.js";import"./Input-DsYpWHKX.js";import"./input-BR333prn.js";const H=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.\r
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
`,P={title:"Templates/Embedded article",component:c,tags:["autodocs"],argTypes:{},parameters:{...T(H),layout:"fullscreen"}},{Story:A}=D();var C=r("<div><h2>This is a sub-headline</h2> <p>This is a description of the embedded interactive.</p> <!></div>"),Y=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat..</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.</p>`,1),B=r('<div class="grid-cell svelte-1yc884b"></div>'),j=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`),k=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.</p>`),M=r("<!> <!> <!> <!> <!>",1);function p(h,v){x(v,!1),E(),A(h,{name:"Default",args:{},asChild:!0,children:(g,O)=>{c(g,{children:(f,R)=>{var s=M(),l=_(s);L(l,{bigText:!1,marginBottom:!1,children:(i,n)=>{var e=C();w(e,"",{},{padding:"0 12px"});var q=o($(e),4);G(q,{label:"Select your area"}),t(i,e)},$$slots:{default:!0}});var u=o(l,2);a(u,{title:"Section title",marginTop:!0,children:(i,n)=>{var e=Y();t(i,e)},$$slots:{default:!0}});var d=o(u,2);U(d,{width:"medium",caption:"This is a caption text",children:(i,n)=>{var e=B();t(i,e)},$$slots:{default:!0}});var m=o(d,2);a(m,{title:"Another section title",children:(i,n)=>{var e=j();t(i,e)},$$slots:{default:!0}});var b=o(m,2);a(b,{title:"Yet another section title",children:(i,n)=>{var e=k();t(i,e)},$$slots:{default:!0}}),t(f,s)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Embed>\r
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
</Embed>`}}}),S()}p.__docgen={data:[],name:"EmbedArticle.stories.svelte"};const N=y(p,P),pe=["Default"],he={...N.Default,tags:["svelte-csf-v5"]};export{he as Default,pe as __namedExportsOrder,P as default};

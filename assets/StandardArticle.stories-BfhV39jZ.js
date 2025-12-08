import{p as D,j as o,f as v,k as i,V as y,e as r,h as H}from"./iframe-fMuWBKru.js";import{w as P,c as E,i as B,d as L}from"./create-runtime-stories-D8bYQZX6.js";import{H as q}from"./Header-CevOb5z8.js";import{B as T}from"./Breadcrumb-CoeCDTa2.js";import{H as U}from"./Hero-DtPrHpX4.js";import{S as a}from"./Section-t4Xc3P8c.js";import{G as w}from"./Grid-CgIKyhrW.js";import{B as A}from"./Blockquote-enaGOATW.js";import{F as G}from"./Footer-CrY2wLyt.js";import"./each-CE6tiEIM.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BR6Sanex.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./event-modifiers-CWmzcjye.js";import"./Theme-DwIr-dqo.js";import"./svelte-head-BK5MVHWP.js";import"./html-DHcnoh4M.js";import"./SkipLink-DVPz3539.js";import"./Container-Czwre8q6.js";import"./DescriptionList-C0ovFIqh.js";import"./Em-BXHYPnGY.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-BwFFe-En.js";import"./Icon-BThoL3Rh.js";const F=`A full page article template with compact header and footer, suitable for standard articles.\r
\r
An implementation of this template can be found in our [sveltekit-starter](https://github.com/ONSvisual/sveltekit-starter) project.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<!-- +page.svelte -->\r
<script>\r
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte\r
  import {\r
    Header,\r
    Breadcrumb,\r
    Hero,\r
    Section,\r
    Grid,\r
    Blockquote,\r
    Footer,\r
  } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Header />\r
<Breadcrumb\r
  links={[\r
    { label: "Home", href: "/" },\r
    { label: "Parent", href: "/parent/" }\r
  ]}\r
/>\r
<Hero title="Page title" theme="grey" meta={[{ key: "Release date", value: "1 January 2025" }]}\r
></Hero>\r
\r
<Section title="Section title" marginTop={true}>\r
  <p>\r
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
  </p>\r
  <Blockquote attribution="A. Person"\r
    >This is a blockquote, white comprises of a large block of inset text.</Blockquote\r
  >\r
  <p>\r
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
  </p>\r
</Section>\r
\r
<Grid width="medium" colWidth="full" caption="This is a caption text">\r
  <div class="grid-cell"></div>\r
</Grid>\r
\r
<Section title="Another section title">\r
  <p>\r
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
  </p>\r
</Section>\r
\r
<Section title="Yet another section title">\r
  <p>\r
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
  </p>\r
</Section>\r
\r
<Footer theme="dark" />\r
\`\`\`\r
`,C={title:"Templates/Standard article",component:q,tags:["autodocs"],argTypes:{},parameters:{...P(F),layout:"fullscreen"}},{Story:R}=L();var J=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),W=o('<div class="grid-cell svelte-1ek35wc"></div>'),Y=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),j=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),O=o("<!> <!> <!> <!> <!> <!> <!> <!>",1);function h(g,b){D(b,!1),B(),R(g,{name:"Default",args:{},asChild:!0,children:(x,N)=>{var u=O(),l=v(u);q(l,{});var s=i(l,2);T(s,{links:[{label:"Home",href:"/"},{label:"Parent",href:"/parent/"}]});var d=i(s,2);U(d,{title:"Page title",theme:"grey",meta:[{key:"Release date",value:"1 January 2025"}]});var m=i(d,2);a(m,{title:"Section title",marginTop:!0,children:(t,n)=>{var e=J(),$=i(v(e),2);A($,{attribution:"A. Person",children:(k,V)=>{var S=y("This is a blockquote, white comprises of a large block of inset text.");r(k,S)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var c=i(m,2);w(c,{width:"medium",colWidth:"full",caption:"This is a caption text",children:(t,n)=>{var e=W();r(t,e)},$$slots:{default:!0}});var p=i(c,2);a(p,{title:"Another section title",children:(t,n)=>{var e=Y();r(t,e)},$$slots:{default:!0}});var f=i(p,2);a(f,{title:"Yet another section title",children:(t,n)=>{var e=j();r(t,e)},$$slots:{default:!0}});var _=i(f,2);G(_,{theme:"dark"}),r(x,u)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header />\r
<Breadcrumb\r
	links={[\r
		{ label: "Home", href: "/" },\r
		{ label: "Parent", href: "/parent/" }\r
	]}\r
/>\r
<Hero title="Page title" theme="grey" meta={[{ key: "Release date", value: "1 January 2025" }]}\r
></Hero>\r
\r
<Section title="Section title" marginTop={true}>\r
	<p>\r
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
	</p>\r
	<Blockquote attribution="A. Person"\r
		>This is a blockquote, white comprises of a large block of inset text.</Blockquote\r
	>\r
	<p>\r
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
	</p>\r
</Section>\r
\r
<Grid width="medium" colWidth="full" caption="This is a caption text">\r
	<div class="grid-cell"></div>\r
</Grid>\r
\r
<Section title="Another section title">\r
	<p>\r
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
	</p>\r
</Section>\r
\r
<Section title="Yet another section title">\r
	<p>\r
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
	</p>\r
</Section>\r
\r
<Footer theme="dark" />`}}}),H()}h.__docgen={data:[],name:"StandardArticle.stories.svelte"};const M=E(h,C),_e=["Default"],$e={...M.Default,tags:["svelte-csf-v5"]};export{$e as Default,_e as __namedExportsOrder,C as default};

import{p as j,j as o,f as b,k as t,V as v,e as r,n as g,g as N,m as O,s as R,h as V}from"./iframe-oyiClAn3.js";import{w as I,c as K,i as Q,d as X}from"./create-runtime-stories-C_UJKXQA.js";import{M as Z}from"./Main-CowqIX-c.js";import{H as B}from"./Header-kkIGbQMK.js";import{H as ee}from"./Hero-BrfeJHa_.js";import{C as re}from"./Container-CCIbSWJi.js";import{H as ie}from"./Highlight-JHWcQYAd.js";import{S as $}from"./Section-ibOpeGb_.js";import{G as te}from"./Grid-J2-mgfOD.js";import{G as q}from"./GridCell-BqR-QhyR.js";import{B as oe}from"./Blockquote-CI9V3GZ_.js";import{E as _}from"./Em-DZAvRoqp.js";import{D as ne}from"./Divider-DaGGT9BQ.js";import{S as ae,a as x}from"./ScrollerSection-CZ5xKBFg.js";import{F as le}from"./Footer-Ddc-sJ6v.js";import"./slot-BP_Qo1ZM.js";import"./attributes-DnyOSBr9.js";import"./each-CIi-lqkV.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./event-modifiers-CWmzcjye.js";import"./Theme-D_Jt38t3.js";import"./svelte-head-7J5CJbfB.js";import"./html-DpPzejou.js";import"./SkipLink-Ct574wH6.js";import"./DescriptionList-DSvt-h-F.js";import"./Button-BIO8ly4f.js";import"./Icon-siD7z91l.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./this-ZFXaq7V_.js";const se=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.\r
\r
Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<!-- +page.svelte -->\r
<script>\r
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte\r
  import {\r
    Header,\r
    Hero,\r
    Highlight,\r
    Section,\r
    Grid,\r
    Divider,\r
    Main,\r
    Blockquote,\r
    Em,\r
    Scroller,\r
    ScrollerSection,\r
    Footer,\r
  } from "@onsvisual/svelte-components";\r
\r
  const scrollerColors = ["#ddd", "#777", "#222"];\r
  let scrollerColor = scrollerColors[0];\r
<\/script>\r
\r
<Header compact />\r
<Main>\r
<Hero\r
  title="This is an article title"\r
  lede="This is a short, introductory sentence"\r
  date="2023-07-04"\r
>\r
  <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->\r
</Hero>\r
\r
<Highlight marginBottom="{false}">\r
  <p>This is a test paragraph.</p>\r
  <p>This is another test paragraph.</p>\r
</Highlight>\r
\r
<Section title="Section title" marginTop="{true}">\r
  <p>\r
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
  </p>\r
  <Blockquote attribution="A. Person">\r
    This is a blockquote, white comprises of a large block of inset text.\r
  </Blockquote>\r
  <p>\r
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
  </p>\r
</Section>\r
\r
<Grid colwidth="medium" caption="This is a caption text">\r
  <div class="grid-cell"></div>\r
  <div class="grid-cell"></div>\r
  <div class="grid-cell"></div>\r
</Grid>\r
\r
<Divider />\r
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
<Scroller\r
  id="scroller"\r
  splitscreen\r
  on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}"\r
>\r
  <div slot="background">\r
    <Grid width="full" height="full">\r
      <div class="placeholder-block" style:background-color="{scrollerColor}"></div>\r
    </Grid>\r
  </div>\r
  <div slot="foreground">\r
    <ScrollerSection>\r
      <p>\r
        When this first caption is visible, the background will appear\r
        <Em color="{scrollerColors[0]}">light grey</Em>.\r
      </p>\r
    </ScrollerSection>\r
    <ScrollerSection>\r
      <p>\r
        When this second caption is visible, the background will appear\r
        <Em color="{scrollerColors[1]}">dark grey</Em>.\r
      </p>\r
    </ScrollerSection>\r
    <ScrollerSection>\r
      <p>\r
        When this third caption is visible, the background will appear\r
        <Em color="{scrollerColors[2]}">black</Em>.\r
      </p>\r
    </ScrollerSection>\r
  </div>\r
</Scroller>\r
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
</Main>\r
<Footer compact />\r
\`\`\`\r
`,ue={title:"Templates/Feature article",component:B,tags:["autodocs"],argTypes:{},parameters:{...I(se),layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:600}}}},{Story:ce}=X();var de=o("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),pe=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),me=o('<div class="placeholder svelte-1e5bzpi"></div>'),he=o('<div class="placeholder svelte-1e5bzpi"></div>'),ve=o('<div class="placeholder svelte-1e5bzpi"></div>'),ge=o("<!> <!> <!>",1),fe=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),be=o('<div slot="background"><!></div>'),$e=o("<p>When this first caption is visible, the background will appear <!>.</p>"),qe=o("<p>When this section caption is visible, the background will appear <!>.</p>"),_e=o("<p>When this third caption is visible, the background will appear <!>.</p>"),xe=o('<div slot="foreground"><!> <!> <!></div>'),Se=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),ke=o("<!> <!> <!> <!> <!> <!> <!> <!>",1),Ce=o("<!> <!> <!>",1);function W(A,F){j(F,!1);const c=["#ddd","#777","#222"];let S=O(c[0]);Q(),ce(A,{name:"Default",args:{},asChild:!0,children:(M,Te)=>{var k=Ce(),C=b(k);B(C,{compact:!0});var E=t(C,2);Z(E,{children:(z,De)=>{var T=ke(),D=b(T);ee(D,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(e,s)=>{var i=v("1 January 2025");r(e,i)},$$slots:{default:!0}});var P=t(D,2);ie(P,{height:400,marginBottom:!1,children:(e,s)=>{var i=de();r(e,i)},$$slots:{default:!0}});var w=t(P,2);$(w,{title:"Section title",marginTop:!0,children:(e,s)=>{var i=pe(),l=t(b(i),2);oe(l,{attribution:"A. Person",children:(u,f)=>{var a=v("This is a blockquote, white comprises of a large block of inset text.");r(u,a)},$$slots:{default:!0}}),r(e,i)},$$slots:{default:!0}});var y=t(w,2);te(y,{colWidth:"medium",caption:"This is a caption text",children:(e,s)=>{var i=ge(),l=b(i);q(l,{children:(a,d)=>{var n=me();r(a,n)},$$slots:{default:!0}});var u=t(l,2);q(u,{children:(a,d)=>{var n=he();r(a,n)},$$slots:{default:!0}});var f=t(u,2);q(f,{children:(a,d)=>{var n=ve();r(a,n)},$$slots:{default:!0}}),r(e,i)},$$slots:{default:!0}});var H=t(y,2);ne(H,{});var G=t(H,2);$(G,{title:"Another section title",children:(e,s)=>{var i=fe();r(e,i)},$$slots:{default:!0}});var L=t(G,2);ae(L,{id:"scroller",splitscreen:!0,$$events:{change:e=>{R(S,c[e.detail.index]),console.debug("change",e)},enter:e=>console.debug("enter",e),exit:e=>console.debug("exit",e)},$$slots:{background:(e,s)=>{var i=be(),l=g(i);re(l,{width:"full",height:"full",get background(){return N(S)}}),r(e,i)},foreground:(e,s)=>{var i=xe(),l=g(i);x(l,{children:(a,d)=>{var n=$e(),p=t(g(n));_(p,{get color(){return c[0]},children:(m,U)=>{var h=v("light grey");r(m,h)},$$slots:{default:!0}}),r(a,n)},$$slots:{default:!0}});var u=t(l,2);x(u,{children:(a,d)=>{var n=qe(),p=t(g(n));_(p,{get color(){return c[1]},children:(m,U)=>{var h=v("dark grey");r(m,h)},$$slots:{default:!0}}),r(a,n)},$$slots:{default:!0}});var f=t(u,2);x(f,{children:(a,d)=>{var n=_e(),p=t(g(n));_(p,{get color(){return c[2]},children:(m,U)=>{var h=v("black");r(m,h)},$$slots:{default:!0}}),r(a,n)},$$slots:{default:!0}}),r(e,i)}}});var J=t(L,2);$(J,{title:"Yet another section title",children:(e,s)=>{var i=Se();r(e,i)},$$slots:{default:!0}}),r(z,T)},$$slots:{default:!0}});var Y=t(E,2);le(Y,{compact:!0}),r(M,k)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />\r
<Main>\r
	<Hero\r
		theme="blue"\r
		title="This is an article title"\r
		lede="This is a short, introductory sentence"\r
		height={400}\r
	>\r
		1 January 2025\r
	</Hero>\r
\r
	<Highlight height={400} marginBottom={false}>\r
		<p>This is a test paragraph.</p>\r
		<p>This is another test paragraph.</p>\r
	</Highlight>\r
\r
	<Section title="Section title" marginTop={true}>\r
		<p>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
		</p>\r
		<Blockquote attribution="A. Person"\r
			>This is a blockquote, white comprises of a large block of inset text.</Blockquote\r
		>\r
		<p>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
		</p>\r
	</Section>\r
\r
	<Grid colWidth="medium" caption="This is a caption text">\r
		<GridCell><div class="placeholder"></div></GridCell>\r
		<GridCell><div class="placeholder"></div></GridCell>\r
		<GridCell><div class="placeholder"></div></GridCell>\r
	</Grid>\r
\r
	<Divider />\r
\r
	<Section title="Another section title">\r
		<p>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
		</p>\r
	</Section>\r
\r
	<Scroller\r
		id="scroller"\r
		splitscreen\r
		on:change={(e) => {\r
			scrollerColor = scrollerColors[e.detail.index];\r
			console.debug("change", e);\r
		}}\r
		on:enter={(e) => console.debug("enter", e)}\r
		on:exit={(e) => console.debug("exit", e)}\r
	>\r
		<div slot="background">\r
			<Container width="full" height="full" background={scrollerColor} />\r
		</div>\r
		<div slot="foreground">\r
			<ScrollerSection>\r
				<p>\r
					When this first caption is visible, the background will appear <Em\r
						color={scrollerColors[0]}>light grey</Em\r
					>.\r
				</p>\r
			</ScrollerSection>\r
			<ScrollerSection>\r
				<p>\r
					When this section caption is visible, the background will appear <Em\r
						color={scrollerColors[1]}>dark grey</Em\r
					>.\r
				</p>\r
			</ScrollerSection>\r
			<ScrollerSection>\r
				<p>\r
					When this third caption is visible, the background will appear <Em\r
						color={scrollerColors[2]}>black</Em\r
					>.\r
				</p>\r
			</ScrollerSection>\r
		</div>\r
	</Scroller>\r
\r
	<Section title="Yet another section title">\r
		<p>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
		</p>\r
	</Section>\r
</Main>\r
<Footer compact />`}}}),V()}W.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const Ee=K(W,ue),lr=["Default"],sr={...Ee.Default,tags:["svelte-csf-v5"]};export{sr as Default,lr as __namedExportsOrder,ue as default};

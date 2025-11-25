import{p as N,j as o,f as b,k as t,V as v,e as r,n as g,g as O,m as R,s as V,h as I}from"./iframe-Bu7RPEYL.js";import{w as K,c as Q,i as X,d as Z}from"./create-runtime-stories-tJrnYzbx.js";import{M as ee}from"./Main-Brcx0Q2X.js";import{H as B}from"./Header-BJxZCX_v.js";import{H as re}from"./Hero-yz2ztkV6.js";import{C as ie}from"./Container-5uYbgtz1.js";import{H as te}from"./Highlight-D8llvMeb.js";import{S as $}from"./Section-rMtqU3uL.js";import{G as oe}from"./Grid-BwQTYTSF.js";import{G as q}from"./GridCell-BzVKVjO4.js";import{B as ne}from"./Blockquote-D-qw5lh3.js";import{E as _}from"./Em-DkqeiFZx.js";import{D as ae}from"./Divider--1p51dAE.js";import{S as le,a as x}from"./ScrollerSection-BUQod2s_.js";import{F as se}from"./Footer-D531PuXd.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BMngCuBp.js";import"./each-CGJfJk9N.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./event-modifiers-CWmzcjye.js";import"./Theme-CducFuyO.js";import"./svelte-head-ItTMlsj-.js";import"./html-Cng3CFI_.js";import"./SkipLink-DOICLvrT.js";import"./DescriptionList-sTL0qt2g.js";import"./Button-BpnU8mJK.js";import"./Icon-BAzxPD_P.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./this-Bc1VQAqE.js";const ue=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.\r
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
`,W={...K(ue),layout:"fullscreen"};W.docs.story={inline:!1,iframeHeight:600};const ce={title:"Templates/Feature article",component:B,tags:["autodocs"],argTypes:{},parameters:W},{Story:de}=Z();var pe=o("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),me=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),he=o('<div class="placeholder svelte-1e5bzpi"></div>'),ve=o('<div class="placeholder svelte-1e5bzpi"></div>'),ge=o('<div class="placeholder svelte-1e5bzpi"></div>'),fe=o("<!> <!> <!>",1),be=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),$e=o('<div slot="background"><!></div>'),qe=o("<p>When this first caption is visible, the background will appear <!>.</p>"),_e=o("<p>When this section caption is visible, the background will appear <!>.</p>"),xe=o("<p>When this third caption is visible, the background will appear <!>.</p>"),Se=o('<div slot="foreground"><!> <!> <!></div>'),ke=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),Ce=o("<!> <!> <!> <!> <!> <!> <!> <!>",1),Ee=o("<!> <!> <!>",1);function A(F,M){N(M,!1);const c=["#ddd","#777","#222"];let S=R(c[0]);X(),de(F,{name:"Default",args:{},asChild:!0,children:(Y,De)=>{var k=Ee(),C=b(k);B(C,{compact:!0});var E=t(C,2);ee(E,{children:(J,Pe)=>{var T=Ce(),D=b(T);re(D,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(e,s)=>{var i=v("1 January 2025");r(e,i)},$$slots:{default:!0}});var P=t(D,2);te(P,{height:400,marginBottom:!1,children:(e,s)=>{var i=pe();r(e,i)},$$slots:{default:!0}});var w=t(P,2);$(w,{title:"Section title",marginTop:!0,children:(e,s)=>{var i=me(),l=t(b(i),2);ne(l,{attribution:"A. Person",children:(u,f)=>{var a=v("This is a blockquote, white comprises of a large block of inset text.");r(u,a)},$$slots:{default:!0}}),r(e,i)},$$slots:{default:!0}});var y=t(w,2);oe(y,{colWidth:"medium",caption:"This is a caption text",children:(e,s)=>{var i=fe(),l=b(i);q(l,{children:(a,d)=>{var n=he();r(a,n)},$$slots:{default:!0}});var u=t(l,2);q(u,{children:(a,d)=>{var n=ve();r(a,n)},$$slots:{default:!0}});var f=t(u,2);q(f,{children:(a,d)=>{var n=ge();r(a,n)},$$slots:{default:!0}}),r(e,i)},$$slots:{default:!0}});var H=t(y,2);ae(H,{});var G=t(H,2);$(G,{title:"Another section title",children:(e,s)=>{var i=be();r(e,i)},$$slots:{default:!0}});var L=t(G,2);le(L,{id:"scroller",splitscreen:!0,$$events:{change:e=>{V(S,c[e.detail.index]),console.debug("change",e)},enter:e=>console.debug("enter",e),exit:e=>console.debug("exit",e)},$$slots:{background:(e,s)=>{var i=$e(),l=g(i);ie(l,{width:"full",height:"full",get background(){return O(S)}}),r(e,i)},foreground:(e,s)=>{var i=Se(),l=g(i);x(l,{children:(a,d)=>{var n=qe(),p=t(g(n));_(p,{get color(){return c[0]},children:(m,U)=>{var h=v("light grey");r(m,h)},$$slots:{default:!0}}),r(a,n)},$$slots:{default:!0}});var u=t(l,2);x(u,{children:(a,d)=>{var n=_e(),p=t(g(n));_(p,{get color(){return c[1]},children:(m,U)=>{var h=v("dark grey");r(m,h)},$$slots:{default:!0}}),r(a,n)},$$slots:{default:!0}});var f=t(u,2);x(f,{children:(a,d)=>{var n=xe(),p=t(g(n));_(p,{get color(){return c[2]},children:(m,U)=>{var h=v("black");r(m,h)},$$slots:{default:!0}}),r(a,n)},$$slots:{default:!0}}),r(e,i)}}});var j=t(L,2);$(j,{title:"Yet another section title",children:(e,s)=>{var i=ke();r(e,i)},$$slots:{default:!0}}),r(J,T)},$$slots:{default:!0}});var z=t(E,2);se(z,{compact:!0}),r(Y,k)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />\r
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
<Footer compact />`}}}),I()}A.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const Te=Q(A,ce),sr=["Default"],ur={...Te.Default,tags:["svelte-csf-v5"]};export{ur as Default,sr as __namedExportsOrder,ce as default};

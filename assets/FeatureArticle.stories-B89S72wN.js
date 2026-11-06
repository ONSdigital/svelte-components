import{ad as K,h as f,ah as i,d as b,a as t,ar as Q,g as V,c as $,af as X,f as n,R as Z}from"./iframe-DAUNLR8O.js";import{c as ee,w as te,i as ie,d as re}from"./create-runtime-stories-B5aIRkb-.js";import{M as oe}from"./Main-CKaRb5Il.js";import{H as M}from"./Header-Cq6BilOf.js";import{H as ne}from"./Hero-D4nQO3kJ.js";import{C as ae}from"./Container-SIPjVhMn.js";import{H as le}from"./Highlight-DkfCiG93.js";import{S as q}from"./Section-Cno7kLH7.js";import{G as se}from"./Grid-DsyxR7tY.js";import{G as _}from"./GridCell-N945ef4O.js";import{B as ce}from"./Blockquote-Cmvqg0YP.js";import{E as x}from"./Em-2ZaUQO2v.js";import{D as ue}from"./Divider-DJW4IQ_o.js";import{S as de,a as S}from"./ScrollerSection-dt6Fwxri.js";import{F as pe}from"./Footer-BGaxdVB4.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-C8WLOc0F.js";import"./each-zFvNCFwR.js";import"./class-DzLv1wVC.js";import"./attributes-DayBpKoh.js";import"./this-b4uQXChT.js";import"./Theme-pIXUpPy8.js";import"./html-D5syok29.js";import"./svelte-head-CNn9Wnte.js";import"./style-DnS876Ns.js";import"./SkipLink-DiDYsi1k.js";import"./DescriptionList-CpzBelBe.js";import"./Button-CgnpRuJL.js";import"./Icon-BVFr5jfQ.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./window-jtK19c3D.js";const me=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.\r
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
`,Y={...te(me),layout:"fullscreen"};Y.docs.story={inline:!1,iframeHeight:600};const he={title:"Templates/Feature article",component:M,tags:["autodocs"],argTypes:{},parameters:Y},{Story:ge}=re();var ve=n("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),fe=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),k=n('<div class="placeholder svelte-1wdzexx"></div>'),C=n("<!> <!> <!>",1),F=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),be=n("<p>When this first caption is visible, the background will appear <!>.</p>"),$e=n("<p>When this section caption is visible, the background will appear <!>.</p>"),qe=n("<p>When this third caption is visible, the background will appear <!>.</p>"),_e=n("<!> <!> <!> <!> <!> <!> <!> <!>",1);function J(R,z){K(z,!1);const p=["#ddd","#777","#222"];let E=Z(p[0]);ie(),ge(R,{name:"Default",args:{},asChild:!0,children:(N,Se)=>{var T=C(),w=f(T);M(w,{compact:!0});var D=i(w,2);oe(D,{children:(j,ke)=>{var y=_e(),P=f(y);ne(P,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(r,d)=>{var e=b("1 January 2025");t(r,e)},$$slots:{default:!0}});var H=i(P,2);le(H,{height:400,marginBottom:!1,children:(r,d)=>{var e=ve();t(r,e)},$$slots:{default:!0}});var G=i(H,2);q(G,{title:"Section title",marginTop:!0,children:(r,d)=>{var e=fe(),c=i(f(e),2);ce(c,{attribution:"A. Person",children:(u,m)=>{var o=b("This is a blockquote, white comprises of a large block of inset text.");t(u,o)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var B=i(G,2);se(B,{colWidth:"medium",caption:"This is a caption text",children:(r,d)=>{var e=C(),c=f(e);_(c,{children:(o,a)=>{var l=k();t(o,l)},$$slots:{default:!0}});var u=i(c,2);_(u,{children:(o,a)=>{var l=k();t(o,l)},$$slots:{default:!0}});var m=i(u,2);_(m,{children:(o,a)=>{var l=k();t(o,l)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var L=i(B,2);ue(L,{});var U=i(L,2);q(U,{title:"Another section title",children:(r,d)=>{var e=F();t(r,e)},$$slots:{default:!0}});var W=i(U,2);de(W,{id:"scroller",splitscreen:!0,$$events:{change:e=>{Q(E,p[e.detail.index]),console.debug("change",e)},enter:e=>console.debug("enter",e),exit:e=>console.debug("exit",e)},background:e=>{ae(e,{width:"full",height:"full",get background(){return V(E)}})},foreground:e=>{var c=C(),u=f(c);S(u,{children:(a,l)=>{var s=be(),h=i($(s));x(h,{get color(){return p[0]},children:(g,A)=>{var v=b("light grey");t(g,v)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}});var m=i(u,2);S(m,{children:(a,l)=>{var s=$e(),h=i($(s));x(h,{get color(){return p[1]},children:(g,A)=>{var v=b("dark grey");t(g,v)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}});var o=i(m,2);S(o,{children:(a,l)=>{var s=qe(),h=i($(s));x(h,{get color(){return p[2]},children:(g,A)=>{var v=b("black");t(g,v)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}}),t(e,c)},$$slots:{background:!0,foreground:!0}});var I=i(W,2);q(I,{title:"Yet another section title",children:(r,d)=>{var e=F();t(r,e)},$$slots:{default:!0}}),t(j,y)},$$slots:{default:!0}});var O=i(D,2);pe(O,{compact:!0}),t(N,T)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />
<Main>
	<Hero
		theme="blue"
		title="This is an article title"
		lede="This is a short, introductory sentence"
		height={400}
	>
		1 January 2025
	</Hero>

	<Highlight height={400} marginBottom={false}>
		<p>This is a test paragraph.</p>
		<p>This is another test paragraph.</p>
	</Highlight>

	<Section title="Section title" marginTop={true}>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<Blockquote attribution="A. Person"
			>This is a blockquote, white comprises of a large block of inset text.</Blockquote
		>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>

	<Grid colWidth="medium" caption="This is a caption text">
		<GridCell><div class="placeholder"></div></GridCell>
		<GridCell><div class="placeholder"></div></GridCell>
		<GridCell><div class="placeholder"></div></GridCell>
	</Grid>

	<Divider />

	<Section title="Another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>

	<Scroller
		id="scroller"
		splitscreen
		on:change={(e) => {
			scrollerColor = scrollerColors[e.detail.index];
			console.debug("change", e);
		}}
		on:enter={(e) => console.debug("enter", e)}
		on:exit={(e) => console.debug("exit", e)}
	>
		{#snippet background()}
			<Container width="full" height="full" background={scrollerColor} />
		{/snippet}
		{#snippet foreground()}
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[0]}>light grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this section caption is visible, the background will appear <Em
						color={scrollerColors[1]}>dark grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this third caption is visible, the background will appear <Em
						color={scrollerColors[2]}>black</Em
					>.
				</p>
			</ScrollerSection>
		{/snippet}
	</Scroller>

	<Section title="Yet another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>
</Main>
<Footer compact />`}}}),X()}J.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const xe=ee(J,he),rt=["Default"],ot={...xe.Default,tags:["svelte-csf-v5"]};export{ot as Default,rt as __namedExportsOrder,he as default};

import{ab as I,e as b,ae as t,b as v,a as e,c as g,g as K,al as Q,ad as V,f as a,P as X}from"./iframe-BieOkgaL.js";import{c as Z,w as rr,i as er,d as ir}from"./create-runtime-stories-CYy4gM-U.js";import{M as tr}from"./Main-B5fP-I4J.js";import{H as F}from"./Header-BcwGcnAG.js";import{H as or}from"./Hero-D-L4hqAs.js";import{C as nr}from"./Container-D9pErKfu.js";import{H as ar}from"./Highlight-BAInwyKZ.js";import{S as $}from"./Section-8-THQTmA.js";import{G as lr}from"./Grid-D5LAf-iO.js";import{G as q}from"./GridCell-DPy4CkAo.js";import{B as sr}from"./Blockquote-DZzoKedW.js";import{E as _}from"./Em-8_1qXM6x.js";import{D as cr}from"./Divider-CVFA9pks.js";import{S as ur,a as x}from"./ScrollerSection-OmSTgKVK.js";import{F as dr}from"./Footer-BhKajVUK.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-C9k8Ok3D.js";import"./each-ZGVcLIqw.js";import"./class-B3LrzTQO.js";import"./attributes-DayBpKoh.js";import"./this-a-fmEguH.js";import"./Theme-UTlT14F4.js";import"./html-BH-9ukWk.js";import"./svelte-head-CVlHd2UQ.js";import"./style-BeKZa6WD.js";import"./SkipLink-U3qlRQiX.js";import"./DescriptionList-C6w7ekuy.js";import"./Button-Bw0zPidD.js";import"./Icon-DITecjS9.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const pr=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.\r
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
`,M={...rr(pr),layout:"fullscreen"};M.docs.story={inline:!1,iframeHeight:600};const mr={title:"Templates/Feature article",component:F,tags:["autodocs"],argTypes:{},parameters:M},{Story:hr}=ir();var vr=a("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),gr=a(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),S=a('<div class="placeholder svelte-1wdzexx"></div>'),W=a("<!> <!> <!>",1),A=a(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),fr=a('<div slot="background"><!></div>'),br=a("<p>When this first caption is visible, the background will appear <!>.</p>"),$r=a("<p>When this section caption is visible, the background will appear <!>.</p>"),qr=a("<p>When this third caption is visible, the background will appear <!>.</p>"),_r=a('<div slot="foreground"><!> <!> <!></div>'),xr=a("<!> <!> <!> <!> <!> <!> <!> <!>",1);function Y(J,z){I(z,!1);const u=["#ddd","#777","#222"];let k=X(u[0]);er(),hr(J,{name:"Default",args:{},asChild:!0,children:(N,kr)=>{var C=W(),E=b(C);F(E,{compact:!0});var T=t(E,2);tr(T,{children:(R,Cr)=>{var P=xr(),w=b(P);or(w,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(r,s)=>{var i=v("1 January 2025");e(r,i)},$$slots:{default:!0}});var D=t(w,2);ar(D,{height:400,marginBottom:!1,children:(r,s)=>{var i=vr();e(r,i)},$$slots:{default:!0}});var y=t(D,2);$(y,{title:"Section title",marginTop:!0,children:(r,s)=>{var i=gr(),l=t(b(i),2);sr(l,{attribution:"A. Person",children:(c,f)=>{var n=v("This is a blockquote, white comprises of a large block of inset text.");e(c,n)},$$slots:{default:!0}}),e(r,i)},$$slots:{default:!0}});var H=t(y,2);lr(H,{colWidth:"medium",caption:"This is a caption text",children:(r,s)=>{var i=W(),l=b(i);q(l,{children:(n,d)=>{var o=S();e(n,o)},$$slots:{default:!0}});var c=t(l,2);q(c,{children:(n,d)=>{var o=S();e(n,o)},$$slots:{default:!0}});var f=t(c,2);q(f,{children:(n,d)=>{var o=S();e(n,o)},$$slots:{default:!0}}),e(r,i)},$$slots:{default:!0}});var G=t(H,2);cr(G,{});var B=t(G,2);$(B,{title:"Another section title",children:(r,s)=>{var i=A();e(r,i)},$$slots:{default:!0}});var L=t(B,2);ur(L,{id:"scroller",splitscreen:!0,$$events:{change:r=>{Q(k,u[r.detail.index]),console.debug("change",r)},enter:r=>console.debug("enter",r),exit:r=>console.debug("exit",r)},$$slots:{background:(r,s)=>{var i=fr(),l=g(i);nr(l,{width:"full",height:"full",get background(){return K(k)}}),e(r,i)},foreground:(r,s)=>{var i=_r(),l=g(i);x(l,{children:(n,d)=>{var o=br(),p=t(g(o));_(p,{get color(){return u[0]},children:(m,U)=>{var h=v("light grey");e(m,h)},$$slots:{default:!0}}),e(n,o)},$$slots:{default:!0}});var c=t(l,2);x(c,{children:(n,d)=>{var o=$r(),p=t(g(o));_(p,{get color(){return u[1]},children:(m,U)=>{var h=v("dark grey");e(m,h)},$$slots:{default:!0}}),e(n,o)},$$slots:{default:!0}});var f=t(c,2);x(f,{children:(n,d)=>{var o=qr(),p=t(g(o));_(p,{get color(){return u[2]},children:(m,U)=>{var h=v("black");e(m,h)},$$slots:{default:!0}}),e(n,o)},$$slots:{default:!0}}),e(r,i)}}});var j=t(L,2);$(j,{title:"Yet another section title",children:(r,s)=>{var i=A();e(r,i)},$$slots:{default:!0}}),e(R,P)},$$slots:{default:!0}});var O=t(T,2);dr(O,{compact:!0}),e(N,C)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />\r
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
<Footer compact />`}}}),V()}Y.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const Sr=Z(Y,mr),oe=["Default"],ne={...Sr.Default,tags:["svelte-csf-v5"]};export{ne as Default,oe as __namedExportsOrder,mr as default};

import{p as F,j as n,f as j,Z as H,k as o,e as r,h as L,_ as O,s as R,n as d,V as h,g as V,m as Z}from"./iframe-DgZwGItH.js";import{w as z,c as A,i as B,d as G}from"./create-runtime-stories-xZ2YYh46.js";import{S as w,a as S}from"./ScrollerSection-DK-RXxrf.js";import{C as J}from"./Container-DUXLb5xi.js";import{E as g}from"./Em-Cy_DL2T9.js";import"./slot-BP_Qo1ZM.js";import"./attributes-2UgTCuWr.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./this-C-X3B6bZ.js";import"./Theme-D40FOd9N.js";import"./svelte-head-W05OBU9T.js";import"./html-v461-nDV.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const K=`Components for adding interactive scrollytelling sections to a feature article.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Scroller, ScrollerSection, Container } from "@onsvisual/svelte-components";\r
\r
  function updateScroller(e) {\r
    // Function to update scroller background components, using the following props:\r
    // 1. e.detail.id - the ID of the Scroller\r
    // 2. e.detail.index - the index of the current ScrollerSection\r
    // 3. e.detail.sectionId - the (optional) ID of the current ScrollerSection\r
  }\r
<\/script>\r
\r
<Scroller on:change="{updateScroller}" id="{any_unique_id}">\r
  <div slot="background">\r
    <!--\r
      The <Container> component is optional here.\r
      It is a useful way to set the height and width of the background.\r
    -->\r
    <Container width="full" height="full">\r
      {background_components}\r
    </Container>\r
  </div>\r
  <div slot="foreground">\r
    <ScrollerSection id="{any_unique_id}">\r
      <p>First section caption.</p>\r
    </ScrollerSection>\r
    <ScrollerSection id="{any_unique_id}">\r
      <p>Second section caption.</p>\r
    </ScrollerSection>\r
    <ScrollerSection id="{any_unique_id}">\r
      <p>Third section caption.</p>\r
      </p>\r
    </ScrollerSection>\r
  </div>\r
</Scroller>\r
\`\`\`\r
`,y={...z(K),layout:"fullscreen"};y.docs.story={inline:!1,iframeHeight:600};const N={title:"Layout/Scroller",component:w,tags:["autodocs"],argTypes:{},parameters:y},{Story:k}=G();var Q=n('<div slot="background"><!></div>'),U=n("<p>When this first caption is visible, the background will appear <!>.</p>"),X=n("<p>When this first caption is visible, the background will appear <!>.</p>"),Y=n("<p>When this first caption is visible, the background will appear <!>.</p>"),rr=n('<div slot="foreground"><!> <!> <!></div>'),er=n("<!> <!>",1);function E(D,W){F(W,!1);const m=(M,q=H)=>{w(M,O(q,{$$events:{change:l=>R(f,t[l.detail.index])},$$slots:{background:(l,I)=>{var i=Q(),u=d(i);J(u,{width:"full",height:"full",get background(){return V(f)}}),r(l,i)},foreground:(l,I)=>{var i=rr(),u=d(i);S(u,{children:(s,b)=>{var e=U(),a=o(d(e));g(a,{get color(){return t[0]},children:(c,C)=>{var p=h("light grey");r(c,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var $=o(u,2);S($,{children:(s,b)=>{var e=X(),a=o(d(e));g(a,{get color(){return t[1]},children:(c,C)=>{var p=h("dark grey");r(c,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var T=o($,2);S(T,{children:(s,b)=>{var e=Y(),a=o(d(e));g(a,{get color(){return t[2]},children:(c,C)=>{var p=h("black");r(c,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}}),r(l,i)}}}))},t=["#ddd","#777","#222"];let f=Z(t[0]);B();var v=er(),_=j(v);k(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>\r
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
				When this first caption is visible, the background will appear <Em\r
					color={scrollerColors[1]}>dark grey</Em\r
				>.\r
			</p>\r
		</ScrollerSection>\r
		<ScrollerSection>\r
			<p>\r
				When this first caption is visible, the background will appear <Em\r
					color={scrollerColors[2]}>black</Em\r
				>.\r
			</p>\r
		</ScrollerSection>\r
	</div>\r
</Scroller>`}}});var P=o(_,2);k(P,{name:"Split-screen mode",args:{splitscreen:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>\r
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
				When this first caption is visible, the background will appear <Em\r
					color={scrollerColors[1]}>dark grey</Em\r
				>.\r
			</p>\r
		</ScrollerSection>\r
		<ScrollerSection>\r
			<p>\r
				When this first caption is visible, the background will appear <Em\r
					color={scrollerColors[2]}>black</Em\r
				>.\r
			</p>\r
		</ScrollerSection>\r
	</div>\r
</Scroller>`}}}),r(D,v),L()}E.__docgen={data:[],name:"Scroller.stories.svelte"};const x=A(E,N),vr=["Default","SplitScreenMode"],_r={...x.Default,tags:["svelte-csf-v5"]},$r={...x.SplitScreenMode,tags:["svelte-csf-v5"]};export{_r as Default,$r as SplitScreenMode,vr as __namedExportsOrder,N as default};

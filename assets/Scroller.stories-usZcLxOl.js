import{p as T,j as n,f as F,Z as j,k as o,e as r,h as H,_ as L,s as N,n as d,V as h,g as O,m as R}from"./iframe-oyiClAn3.js";import{w as V,c as Y,i as Z,d as z}from"./create-runtime-stories-C_UJKXQA.js";import{S as w,a as S}from"./ScrollerSection-CZ5xKBFg.js";import{C as A}from"./Container-CCIbSWJi.js";import{E as g}from"./Em-DZAvRoqp.js";import"./slot-BP_Qo1ZM.js";import"./attributes-DnyOSBr9.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./this-ZFXaq7V_.js";import"./Theme-D_Jt38t3.js";import"./svelte-head-7J5CJbfB.js";import"./html-DpPzejou.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const B=`Components for adding scrollytelling sections to a feature article.\r
\r
Note: These examples will not preview correctly in the iframes on this page. You can select the examples from the menu instead.\r
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
`,G={title:"Layout/Scroller",component:w,tags:["autodocs"],argTypes:{},parameters:{...V(B),layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:600}}}},{Story:k}=z();var J=n('<div slot="background"><!></div>'),K=n("<p>When this first caption is visible, the background will appear <!>.</p>"),Q=n("<p>When this first caption is visible, the background will appear <!>.</p>"),U=n("<p>When this first caption is visible, the background will appear <!>.</p>"),X=n('<div slot="foreground"><!> <!> <!></div>'),rr=n("<!> <!>",1);function y(x,D){T(D,!1);const m=(P,M=j)=>{w(P,L(M,{$$events:{change:l=>N(f,t[l.detail.index])},$$slots:{background:(l,q)=>{var i=J(),u=d(i);A(u,{width:"full",height:"full",get background(){return O(f)}}),r(l,i)},foreground:(l,q)=>{var i=X(),u=d(i);S(u,{children:(s,b)=>{var e=K(),a=o(d(e));g(a,{get color(){return t[0]},children:(c,C)=>{var p=h("light grey");r(c,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var $=o(u,2);S($,{children:(s,b)=>{var e=Q(),a=o(d(e));g(a,{get color(){return t[1]},children:(c,C)=>{var p=h("dark grey");r(c,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var I=o($,2);S(I,{children:(s,b)=>{var e=U(),a=o(d(e));g(a,{get color(){return t[2]},children:(c,C)=>{var p=h("black");r(c,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}}),r(l,i)}}}))},t=["#ddd","#777","#222"];let f=R(t[0]);Z();var v=rr(),_=F(v);k(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>\r
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
</Scroller>`}}});var W=o(_,2);k(W,{name:"Split-screen mode",args:{splitscreen:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>\r
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
</Scroller>`}}}),r(x,v),H()}y.__docgen={data:[],name:"Scroller.stories.svelte"};const E=Y(y,G),fr=["Default","SplitScreenMode"],vr={...E.Default,tags:["svelte-csf-v5"]},_r={...E.SplitScreenMode,tags:["svelte-csf-v5"]};export{vr as Default,_r as SplitScreenMode,fr as __namedExportsOrder,G as default};

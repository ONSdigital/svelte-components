import{ab as H,e as L,al as O,ae as o,a as r,ad as R,f as u,av as j,c as d,b as S,g as z,ap as A,P as B}from"./iframe-BqRfKcLk.js";import{c as G,w as J,i as K,d as N}from"./create-runtime-stories-Du911T6H.js";import{S as y,a as h}from"./ScrollerSection-DdlFpU7E.js";import{C as Q}from"./Container-DARFMfL9.js";import{E as g}from"./Em-YLdVDH2Q.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CkMeemA2.js";import"./class-37_mtU4-.js";import"./attributes-DayBpKoh.js";import"./style-DoyTnQz4.js";import"./this-tAHoOi8a.js";import"./Theme-D58oycrN.js";import"./html-QDNSwytG.js";import"./svelte-head-BdVrnAEW.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const U=`Components for adding interactive scrollytelling sections to a feature article.\r
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
`,E={...J(U),layout:"fullscreen"};E.docs.story={inline:!1,iframeHeight:600};const V={title:"Layout/Scroller",component:y,tags:["autodocs"],argTypes:{},parameters:E},{Story:w}=N();var X=u('<div slot="background"><!></div>'),m=u("<p>When this first caption is visible, the background will appear <!>.</p>"),Y=u('<div slot="foreground"><!> <!> <!></div>'),Z=u("<!> <!>",1);function x(P,W){H(W,!1);const f=(q,I=O)=>{y(q,j(I,{$$events:{change:t=>A(v,n[t.detail.index])},$$slots:{background:(t,T)=>{var l=X(),p=d(l);Q(p,{width:"full",height:"full",get background(){return z(v)}}),r(t,l)},foreground:(t,T)=>{var l=Y(),p=d(l);h(p,{children:(i,C)=>{var e=m(),s=o(d(e));g(s,{get color(){return n[0]},children:(a,k)=>{var c=S("light grey");r(a,c)},$$slots:{default:!0}}),r(i,e)},$$slots:{default:!0}});var b=o(p,2);h(b,{children:(i,C)=>{var e=m(),s=o(d(e));g(s,{get color(){return n[1]},children:(a,k)=>{var c=S("dark grey");r(a,c)},$$slots:{default:!0}}),r(i,e)},$$slots:{default:!0}});var F=o(b,2);h(F,{children:(i,C)=>{var e=m(),s=o(d(e));g(s,{get color(){return n[2]},children:(a,k)=>{var c=S("black");r(a,c)},$$slots:{default:!0}}),r(i,e)},$$slots:{default:!0}}),r(t,l)}}}))},n=["#ddd","#777","#222"];let v=B(n[0]);K();var _=Z(),$=L(_);w($,{name:"Default",args:{},get template(){return f},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>\r
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
</Scroller>`}}});var M=o($,2);w(M,{name:"Split-screen mode",args:{splitscreen:!0},get template(){return f},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>\r
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
</Scroller>`}}}),r(P,_),R()}x.__docgen={data:[],name:"Scroller.stories.svelte"};const D=G(x,V),fr=["Default","SplitScreenMode"],vr={...D.Default,tags:["svelte-csf-v5"]},_r={...D.SplitScreenMode,tags:["svelte-csf-v5"]};export{vr as Default,_r as SplitScreenMode,fr as __namedExportsOrder,V as default};

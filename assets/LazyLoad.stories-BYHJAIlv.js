import{ab as b,p as u,d as v,e as g,i as D,a as s,ad as _,af as M,ag as L,t as k,f as w,ax as A,c as H}from"./iframe-KpSyCse9.js";import{c as O,w as I,i as S,d as C}from"./create-runtime-stories-B9Qx1gAn.js";import{a as V}from"./actions-BH_rrNEt.js";import{s as E}from"./style-DJ2HlsXg.js";import{e as T,i as j}from"./each-BrzkDhQl.js";import{s as P}from"./attributes-B8eluhLe.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var R=w("<div></div>");function h(o,r){b(r,!0);let n=u(r,"entered",15,!1),d=u(r,"initialHeight",3,400),c=u(r,"rootMargin",3,200);const p=(e,t)=>{e.forEach(a=>{let f=a.isIntersecting;!n()&&f&&(t.unobserve(a.target),n(!0))})};function i(e){if(typeof IntersectionObserver>"u"){n(!0);return}let t={root:document,rootMargin:`${c()}px`};const a=new IntersectionObserver(p,t);return a.observe(e),{destroy:()=>a.disconnect()}}var m=v(),l=g(m);{var y=e=>{var t=v(),a=g(t);M(a,()=>r.children??L),s(e,t)},z=e=>{var t=R();let a;V(t,f=>i==null?void 0:i(f)),k(()=>a=E(t,"",a,{height:`${+d()||100}px`})),s(e,t)};D(l,e=>{n()?e(y):e(z,-1)})}s(o,m),_()}h.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"entered",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"initialHeight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const W=`A wrapper component that uses IntersectionObserver to allow the Svelte components or HTML elements it contains to be lazy loaded, ie. to be added to the page (or DOM) only when they enter the viewport.\r
\r
Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels before the viewport you want lazy loading to kick in (default 200).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { LazyLoad } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
{#each Array.from(Array(20).keys()) as i}\r
  <LazyLoad>\r
    <div class="img-container">\r
      <img src="https://picsum.photos/400/300?random={i}" alt="" />\r
    </div>\r
  </LazyLoad>\r
{/each}\r
\r
<style>\r
  .img-container {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    height: 400px;\r
    background: #eee;\r
    margin-bottom: 10px;\r
  }\r
</style>\r
\`\`\`\r
`,$=(o,r=L)=>{var n=v(),d=g(n);T(d,0,()=>Array.from(Array(15).keys()),j,(c,p)=>{h(c,A(r,{children:(i,m)=>{var l=F(),y=H(l);k(()=>P(y,"src",`https://picsum.photos/400/300?random=${p??""}`)),s(i,l)},$$slots:{default:!0}}))}),s(o,n)},q={title:"Wrappers/LazyLoad",component:h,tags:["autodocs"],argTypes:{},parameters:I(W)},{Story:B}=C();var F=w('<div class="img-container svelte-15n4nvi"><img alt=""/></div>');function x(o,r){b(r,!1),S(),B(o,{name:"Default",args:{},get template(){return $},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}\r
	<LazyLoad {...args}>\r
		<div class="img-container">\r
			<img src="https://picsum.photos/400/300?random={i}" alt="" />\r
		</div>\r
	</LazyLoad>\r
{/each}`}}}),_()}x.__docgen={data:[],name:"LazyLoad.stories.svelte"};const G=O(x,q),ee=["Default"],te={...G.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,q as default};

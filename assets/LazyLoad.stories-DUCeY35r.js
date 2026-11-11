import{ad as b,p as u,e as v,h,i as D,a as r,af as _,s as M,n as L,t as k,f as w,ax as A,c as H}from"./iframe-CpnTW6Aq.js";import{c as O,w as I,i as S,d as C}from"./create-runtime-stories-C7cZUBmE.js";import{a as V}from"./actions-D9G4B8FK.js";import{s as E}from"./style-BD_XJmem.js";import{e as T,i as j}from"./each-fvhRyThL.js";import{s as P}from"./attributes-DMUiWW_Z.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var R=w("<div></div>");function g(i,n){b(n,!0);let o=u(n,"entered",15,!1),d=u(n,"initialHeight",3,400),c=u(n,"rootMargin",3,200);const p=(e,t)=>{e.forEach(a=>{let f=a.isIntersecting;!o()&&f&&(t.unobserve(a.target),o(!0))})};function s(e){if(typeof IntersectionObserver>"u"){o(!0);return}let t={root:document,rootMargin:`${c()}px`};const a=new IntersectionObserver(p,t);return a.observe(e),{destroy:()=>a.disconnect()}}var m=v(),l=h(m);{var y=e=>{var t=v(),a=h(t);M(a,()=>n.children??L),r(e,t)},z=e=>{var t=R();let a;V(t,f=>s==null?void 0:s(f)),k(()=>a=E(t,"",a,{height:`${+d()||100}px`})),r(e,t)};D(l,e=>{o()?e(y):e(z,-1)})}r(i,m),_()}g.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"entered",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"initialHeight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const W=`A wrapper component that uses IntersectionObserver to allow the Svelte components or HTML elements it contains to be lazy loaded, ie. to be added to the page (or DOM) only when they enter the viewport.

Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels before the viewport you want lazy loading to kick in (default 200).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { LazyLoad } from "@onsvisual/svelte-components";
<\/script>

{#each Array.from(Array(20).keys()) as i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://picsum.photos/400/300?random={i}" alt="" />
    </div>
  </LazyLoad>
{/each}

<style>
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #eee;
    margin-bottom: 10px;
  }
</style>
\`\`\`
`,$=(i,n=L)=>{var o=v(),d=h(o);T(d,0,()=>Array.from(Array(15).keys()),j,(c,p)=>{g(c,A(n,{children:(s,m)=>{var l=F(),y=H(l);k(()=>P(y,"src",`https://picsum.photos/400/300?random=${p??""}`)),r(s,l)},$$slots:{default:!0}}))}),r(i,o)},q={title:"Wrappers/LazyLoad",component:g,tags:["autodocs"],argTypes:{},parameters:I(W)},{Story:B}=C();var F=w('<div class="img-container svelte-15n4nvi"><img alt=""/></div>');function x(i,n){b(n,!1),S(),B(i,{name:"Default",args:{},get template(){return $},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}
	<LazyLoad {...args}>
		<div class="img-container">
			<img src="https://picsum.photos/400/300?random={i}" alt="" />
		</div>
	</LazyLoad>
{/each}`}}}),_()}x.__docgen={data:[],name:"LazyLoad.stories.svelte"};const G=O(x,q),ee=["Default"],te={...G.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,q as default};

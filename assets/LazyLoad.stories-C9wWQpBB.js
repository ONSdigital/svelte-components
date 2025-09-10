import{p as _,a as u,$ as M,a0 as H,c as h,f as v,i as O,e as d,h as L,g as c,m as S,j as k,s as C,t as w,Z as I,_ as V,n as j}from"./iframe-DYzcpUXE.js";import{i as x,w as E,c as B,d as P}from"./create-runtime-stories-DJti1SCK.js";import{e as R,i as T}from"./each-DQrKBp0u.js";import{s as W}from"./attributes-BIJ0UskH.js";import{s as Z}from"./slot-BP_Qo1ZM.js";import{s as $}from"./style-CcY6orqc.js";import{b as q}from"./this-BOfyRF2Z.js";import"./attributes-Co-1QMVx.js";var F=k("<div></div>");function g(r,t){_(t,!1);let n=u(t,"entered",12,!1),m=u(t,"initialHeight",8,400),p=u(t,"rootMargin",8,200),a=S(),i;const b=(e,o)=>{e.forEach(s=>{let y=s.isIntersecting;!n()&&y&&(o.unobserve(c(a)),n(!0))})};M(()=>{let e={root:document,rootMargin:`${p()}px`};i=new IntersectionObserver(b,e),i.observe(c(a))}),H(()=>{c(a)&&i&&i.unobserve(c(a))}),x();var l=h(),f=v(l);{var D=e=>{var o=h(),s=v(o);Z(s,t,"default",{},null),d(e,o)},A=e=>{var o=F();let s;q(o,y=>C(a,y),()=>c(a)),w(()=>s=$(o,"",s,{height:`${+m()||100}px`})),d(e,o)};O(f,e=>{n()?e(D):e(A,!1)})}d(r,l),L()}g.__docgen={data:[{name:"entered",visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"initialHeight",visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const G=`A wrapper component that uses IntersectionObserver to allow the elements it contains to be lazy loaded, ie. to be initialised/mounted only when they enter the viewport (or come close to it).

Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels from the viewport you want lazy loading to kick in (default 200).

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
`,J=(r,t=I)=>{var n=h(),m=v(n);R(m,0,()=>Array.from(Array(15).keys()),T,(p,a)=>{g(p,V(t,{children:(i,b)=>{var l=Q(),f=j(l);w(()=>W(f,"src",`https://picsum.photos/400/300?random=${a??""}`)),d(i,l)},$$slots:{default:!0}}))}),d(r,n)},K={title:"Wrappers/LazyLoad",component:g,tags:["autodocs"],argTypes:{},parameters:E(G)},{Story:N}=P();var Q=k('<div class="img-container svelte-rybo60"><img alt=""/></div>');function z(r,t){_(t,!1),x(),N(r,{name:"Default",args:{},get template(){return J},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}
	<LazyLoad {...args}>
		<div class="img-container">
			<img src="https://picsum.photos/400/300?random={i}" alt="" />
		</div>
	</LazyLoad>
{/each}`}}}),L()}z.__docgen={data:[],name:"LazyLoad.stories.svelte"};const U=B(z,K),se=["Default"],re={...U.Default,tags:["svelte-csf-v5"]};export{re as Default,se as __namedExportsOrder,K as default};

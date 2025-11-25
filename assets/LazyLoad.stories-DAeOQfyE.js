import{p as _,a as u,$ as M,a0 as H,c as h,f as v,i as O,e as d,h as L,g as c,m as S,j as k,s as C,t as w,Z as I,_ as V,n as j}from"./iframe-DI485cCl.js";import{i as x,w as E,c as B,d as P}from"./create-runtime-stories-7vGa3Oc7.js";import{e as R,i as T}from"./each-2gVlA0SD.js";import{s as W}from"./attributes-D3Gd59q9.js";import{s as Z}from"./slot-BP_Qo1ZM.js";import{s as $}from"./style-CcY6orqc.js";import{b as q}from"./this-8dsGcKE8.js";import"./attributes-Co-1QMVx.js";var F=k("<div></div>");function g(s,t){_(t,!1);let o=u(t,"entered",12,!1),m=u(t,"initialHeight",8,400),p=u(t,"rootMargin",8,200),a=S(),n;const b=(e,r)=>{e.forEach(i=>{let y=i.isIntersecting;!o()&&y&&(r.unobserve(c(a)),o(!0))})};M(()=>{let e={root:document,rootMargin:`${p()}px`};n=new IntersectionObserver(b,e),n.observe(c(a))}),H(()=>{c(a)&&n&&n.unobserve(c(a))}),x();var l=h(),f=v(l);{var D=e=>{var r=h(),i=v(r);Z(i,t,"default",{},null),d(e,r)},A=e=>{var r=F();let i;q(r,y=>C(a,y),()=>c(a)),w(()=>i=$(r,"",i,{height:`${+m()||100}px`})),d(e,r)};O(f,e=>{o()?e(D):e(A,!1)})}d(s,l),L()}g.__docgen={data:[{name:"entered",visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"initialHeight",visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const G=`A wrapper component that uses IntersectionObserver to allow the elements it contains to be lazy loaded, ie. to be initialised/mounted only when they enter the viewport (or come close to it).\r
\r
Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels from the viewport you want lazy loading to kick in (default 200).\r
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
`,J=(s,t=I)=>{var o=h(),m=v(o);R(m,0,()=>Array.from(Array(15).keys()),T,(p,a)=>{g(p,V(t,{children:(n,b)=>{var l=Q(),f=j(l);w(()=>W(f,"src",`https://picsum.photos/400/300?random=${a??""}`)),d(n,l)},$$slots:{default:!0}}))}),d(s,o)},K={title:"Wrappers/LazyLoad",component:g,tags:["autodocs"],argTypes:{},parameters:E(G)},{Story:N}=P();var Q=k('<div class="img-container svelte-rybo60"><img alt=""/></div>');function z(s,t){_(t,!1),x(),N(s,{name:"Default",args:{},get template(){return J},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}\r
	<LazyLoad {...args}>\r
		<div class="img-container">\r
			<img src="https://picsum.photos/400/300?random={i}" alt="" />\r
		</div>\r
	</LazyLoad>\r
{/each}`}}}),L()}z.__docgen={data:[],name:"LazyLoad.stories.svelte"};const U=B(z,K),ie=["Default"],se={...U.Default,tags:["svelte-csf-v5"]};export{se as Default,ie as __namedExportsOrder,K as default};
